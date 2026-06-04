/* ============================================================================
   ANGIELSKIWNET — SILNIK APLIKACJI
   ========================================================================== */
(function () {
  "use strict";
  const C = window.COURSE;
  const app = document.getElementById("app");
  const overlay = document.getElementById("overlay");

  /* ---------------- STAN / POSTĘP (localStorage) ---------------- */
  const SKEY = "angielskiwnet_progress_v1";
  const state = loadState();
  function loadState() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(SKEY)); } catch (e) {}
    if (!s || typeof s !== "object" || !s.done) s = {};
    // scal z domyślnymi, aby starsze zapisy dostały nowe pola
    return Object.assign({
      done: {}, xp: 0, streak: 0, lastDay: null, startLevel: "A1", edit: false,
      srs: {}, wrong: [], badges: {}, flags: {}, custom: [], weekXp: {}, league: null, sound: true, srsMode: "pl"
    }, s);
  }
  function save() { localStorage.setItem(SKEY, JSON.stringify(state)); }
  function stepKey(l, u, s) { return l + "/" + u + "/" + s; }
  function unitKey(l, u) { return l + "/" + u; }

  // klucz tygodnia ISO (do ligi tygodniowej)
  function weekKey(d) {
    d = d ? new Date(d) : new Date();
    const dt = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const day = dt.getUTCDay() || 7;
    dt.setUTCDate(dt.getUTCDate() + 4 - day);
    const ys = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
    const wn = Math.ceil((((dt - ys) / 86400000) + 1) / 7);
    return dt.getUTCFullYear() + "-W" + String(wn).padStart(2, "0");
  }

  function bumpStreak() {
    const today = new Date().toDateString();
    if (state.lastDay !== today) {
      const yest = new Date(Date.now() - 864e5).toDateString();
      state.streak = state.lastDay === yest ? state.streak + 1 : 1;
      state.lastDay = today;
    }
  }
  function addXp(n) {
    state.xp += n;
    const wk = weekKey();
    state.weekXp = state.weekXp || {};
    state.weekXp[wk] = (state.weekXp[wk] || 0) + n;
    bumpStreak(); save(); checkBadges();
  }

  /* ---------------- DŹWIĘKI SUKCESU (WebAudio, bez plików) ---------------- */
  let actx = null;
  function sfx(type) {
    if (!state.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      const seq = type === "badge" ? [[523, 0], [659, .1], [784, .2], [1047, .32]]
        : type === "win" ? [[660, 0], [880, .09], [1175, .18]]
        : type === "fail" ? [[330, 0], [247, .12]]
        : [[880, 0]];
      seq.forEach(([f, t]) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = "sine"; o.frequency.value = f;
        o.connect(g); g.connect(actx.destination);
        const st = actx.currentTime + t;
        g.gain.setValueAtTime(.0001, st);
        g.gain.exponentialRampToValueAtTime(.22, st + .02);
        g.gain.exponentialRampToValueAtTime(.0001, st + .2);
        o.start(st); o.stop(st + .22);
      });
    } catch (e) {}
  }

  /* ---------------- SŁOWNIK KONTEKSTOWY (EN→PL z całego kursu) ---------------- */
  let GLOSSARY = null;
  function buildGlossary() {
    if (GLOSSARY) return GLOSSARY;
    GLOSSARY = {};
    const add = (en, pl) => {
      if (!en || !pl) return;
      String(en).split("/").forEach(part => {
        const k = norm(part.replace(/\(.*?\)/g, "").replace(/…/g, ""));
        if (k && !GLOSSARY[k]) GLOSSARY[k] = { pl: pl, en: part.trim() };
      });
    };
    const scan = lvls => (lvls || []).forEach(lv => lv.units.forEach(u => (u.steps || []).forEach(s => {
      if (s.type === "vocab") (s.words || []).forEach(w => add(w.en, w.pl));
    })));
    scan(C.levels);
    scan(C.paths);
    (state.custom || []).forEach(d => (d.words || []).forEach(w => add(w.en, w.pl)));
    return GLOSSARY;
  }
  function lookupWord(word) { return buildGlossary()[norm(word)] || null; }

  /* ---------------- SRS (powtórki, algorytm typu SM-2) ---------------- */
  function srsAdd(en, pl) {
    const id = "v:" + norm(en);
    if (!id || id === "v:") return;
    if (!state.srs[id]) state.srs[id] = { en: en, pl: pl || "", ef: 2.5, int: 0, reps: 0, lapses: 0, due: Date.now() };
    GLOSSARY = null;
  }
  function srsDue() {
    const now = Date.now();
    return Object.keys(state.srs).filter(id => state.srs[id].due <= now)
      .map(id => Object.assign({ id: id }, state.srs[id]));
  }
  function srsNextDue() {
    const ts = Object.keys(state.srs).map(id => state.srs[id].due);
    return ts.length ? Math.min.apply(null, ts) : null;
  }
  // q: 0 = znów, 3 = trudne, 4 = dobre, 5 = łatwe
  function srsGrade(id, q) {
    const c = state.srs[id];
    if (!c) return;
    if (q < 3) {
      c.reps = 0; c.int = 0; c.lapses++; c.due = Date.now() + 10 * 60 * 1000; // za 10 min
    } else {
      c.reps++;
      c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      if (c.reps === 1) c.int = 1;
      else if (c.reps === 2) c.int = 6;
      else c.int = Math.round(c.int * c.ef);
      c.due = Date.now() + c.int * 86400000;
    }
    save();
  }

  /* ---------------- KOLEJKA BŁĘDÓW (słabe punkty) ---------------- */
  function recordWrong(q, src) {
    if (!q || !q.kind) return;
    const sig = q.kind + "|" + (q.q || q.given || q.audio || "") + "|" +
      JSON.stringify(q.answer != null ? q.answer : (q.answers || q.pairs || q.words || q.items || ""));
    state.wrong = (state.wrong || []).filter(w => w.sig !== sig);
    state.wrong.unshift({ sig: sig, q: q, src: src || "", ts: Date.now() });
    if (state.wrong.length > 150) state.wrong.pop();
    save();
  }

  /* ---------------- ODZNAKI / TROFEA ---------------- */
  const LVL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const BADGES = [
    { id: "first", icon: "🥾", name: "Pierwszy krok", desc: "Ukończ pierwszą lekcję", test: s => Object.keys(s.done).length >= 1 },
    { id: "xp100", icon: "⭐", name: "100 XP", desc: "Zdobądź 100 XP", test: s => s.xp >= 100 },
    { id: "xp500", icon: "🌟", name: "500 XP", desc: "Zdobądź 500 XP", test: s => s.xp >= 500 },
    { id: "xp2000", icon: "💫", name: "2000 XP", desc: "Zdobądź 2000 XP", test: s => s.xp >= 2000 },
    { id: "streak3", icon: "🔥", name: "Rozgrzewka", desc: "3 dni nauki z rzędu", test: s => s.streak >= 3 },
    { id: "streak7", icon: "🔥", name: "Tydzień ognia", desc: "7 dni z rzędu", test: s => s.streak >= 7 },
    { id: "streak30", icon: "🏔️", name: "Miesiąc na szlaku", desc: "30 dni z rzędu", test: s => s.streak >= 30 },
    { id: "words50", icon: "📚", name: "Słownik kieszonkowy", desc: "50 słówek w powtórkach", test: s => Object.keys(s.srs || {}).length >= 50 },
    { id: "words200", icon: "📖", name: "Leksykon", desc: "200 słówek w powtórkach", test: s => Object.keys(s.srs || {}).length >= 200 },
    { id: "review", icon: "♻️", name: "Praca nad błędami", desc: "Ukończ powtórkę słabych punktów", test: s => s.flags && s.flags.didReview },
    { id: "shadow", icon: "🗣️", name: "Cień native speakera", desc: "Wykonaj ćwiczenie shadowing", test: s => s.flags && s.flags.didShadow },
    { id: "import", icon: "📥", name: "Własna talia", desc: "Zaimportuj własne słówka", test: s => s.flags && s.flags.didImport },
    { id: "perfect", icon: "💯", name: "Perfekcjonista", desc: "Zalicz sprawdzian bez błędu", test: s => s.flags && s.flags.didPerfect },
    { id: "srsday", icon: "🧠", name: "Mistrz powtórek", desc: "Powtórz fiszki w SRS", test: s => s.flags && s.flags.didSrs }
  ].concat(LVL_ORDER.map(id => ({
    id: "lvl_" + id, icon: "⛰️", name: "Zdobyty szczyt " + id, desc: "Ukończ cały poziom " + id,
    test: () => isLevelComplete(LVL_ORDER.indexOf(id))
  })));
  function checkBadges() {
    const newly = [];
    BADGES.forEach(b => {
      if (state.badges[b.id]) return;
      let ok = false;
      try { ok = !!b.test(state); } catch (e) {}
      if (ok) { state.badges[b.id] = Date.now(); newly.push(b); }
    });
    if (newly.length) {
      save();
      newly.forEach(b => { sfx("badge"); toast("🏆 Odznaka: " + b.name); });
      const bar = document.getElementById("topbar"); if (bar) renderTop();
    }
    return newly;
  }
  function setFlag(name) { state.flags = state.flags || {}; if (!state.flags[name]) { state.flags[name] = true; save(); checkBadges(); } }

  function isStepDone(l, u, s) { return !!state.done[stepKey(l, u, s)]; }
  function unitSteps(level, unit) { return unit.steps || []; }
  function lvIndex(level) { return C.levels.indexOf(level); }
  function startIdx() { return state.startIdx || 0; }
  // poziomy PONIŻEJ wyniku testu są „zaliczone” (odblokowane do powtórki, liczone jako zrobione)
  function isLevelCredited(i) { return i < startIdx(); }
  function isUnitDoneRaw(level, unit) {
    const steps = unitSteps(level, unit);
    if (!steps.length) return false;
    return steps.every(st => isStepDone(level.id, unit.id, st.id));
  }
  function isUnitDone(level, unit) {
    return isLevelCredited(lvIndex(level)) || isUnitDoneRaw(level, unit);
  }
  function isLevelComplete(i) {
    if (isLevelCredited(i)) return true;
    const lv = C.levels[i], us = lv.units.filter(u => (u.steps || []).length);
    return us.length > 0 && us.every(u => isUnitDoneRaw(lv, u));
  }
  // najwyższy poziom, na który gracz ma teraz dostęp (start z testu + zdobyte wyżej)
  function reachableIdx() {
    let i = startIdx();
    while (i < C.levels.length - 1 && isLevelComplete(i)) i++;
    return i;
  }
  function isLevelUnlocked(i) { return i <= reachableIdx(); }
  function unitProgress(level, unit) {
    if (isLevelCredited(lvIndex(level))) return 100;
    const steps = unitSteps(level, unit);
    if (!steps.length) return 0;
    const d = steps.filter(st => isStepDone(level.id, unit.id, st.id)).length;
    return Math.round((d / steps.length) * 100);
  }
  function levelProgress(level) {
    if (isLevelCredited(lvIndex(level))) return 100;
    const us = level.units.filter(u => (u.steps || []).length);
    if (!us.length) return 0;
    const d = us.filter(u => isUnitDoneRaw(level, u)).length;
    return Math.round((d / us.length) * 100);
  }
  function isUnitUnlocked(level, idx) {
    const i = lvIndex(level);
    if (!isLevelUnlocked(i)) return false;
    if (isLevelCredited(i)) return true;
    if (idx === 0) return true;
    return isUnitDoneRaw(level, level.units[idx - 1]);
  }
  // pierwsza nieukończona jednostka w aktualnie zdobywanym poziomie = „current”
  function currentUnitId(level) {
    const i = lvIndex(level);
    if (!isLevelUnlocked(i) || isLevelCredited(i)) return null;
    for (let k = 0; k < level.units.length; k++) {
      const u = level.units[k];
      if ((u.steps || []).length && isUnitUnlocked(level, k) && !isUnitDoneRaw(level, u)) return u.id;
    }
    return null;
  }

  /* ---------------- TTS — Google British English ---------------- */
  let voices = [];
  function loadVoices() { voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; }
  if (window.speechSynthesis) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice() {
    if (!voices.length) loadVoices();
    const gb = voices.filter(v => /en-GB/i.test(v.lang) || /English \(United Kingdom\)|British/i.test(v.name));
    return gb.find(v => /Google/i.test(v.name)) || gb[0] ||
           voices.find(v => /en[-_]/i.test(v.lang)) || null;
  }
  function speak(text, rate) {
    if (!window.speechSynthesis) { toast("Twoja przeglądarka nie wspiera syntezy mowy."); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = rate || 0.95;
    const v = pickVoice();
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }

  /* ---------------- ROZPOZNAWANIE MOWY (ocena wymowy) ---------------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function recognizeOnce(onResult, onError) {
    if (!SR) { onError && onError("no-sr"); return null; }
    const r = new SR();
    r.lang = "en-GB";
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.onresult = e => onResult(e.results[0][0].transcript);
    r.onerror = e => onError && onError(e.error);
    try { r.start(); } catch (e) { onError && onError("start-fail"); }
    return r;
  }
  // Podobieństwo tekstów 0–100 (słowa + odległość Levenshteina)
  function norm(s) { return s.toLowerCase().replace(/[^a-z0-9' ]/g, "").replace(/\s+/g, " ").trim(); }
  function lev(a, b) {
    const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i].concat(Array(n).fill(0)));
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function similarity(target, said) {
    const a = norm(target), b = norm(said);
    if (!b) return 0;
    const dist = lev(a, b), charScore = 1 - dist / Math.max(a.length, b.length, 1);
    const aw = a.split(" "), bw = new Set(b.split(" "));
    const wordScore = aw.filter(w => bw.has(w)).length / Math.max(aw.length, 1);
    return Math.round(Math.max(0, (charScore * 0.5 + wordScore * 0.5)) * 100);
  }

  /* ---------------- NAGRYWANIE GŁOSU ---------------- */
  async function makeRecorder() {
    if (!navigator.mediaDevices || !window.MediaRecorder) return null;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      const chunks = [];
      rec.ondataavailable = e => chunks.push(e.data);
      return { rec, getBlob: () => new Blob(chunks, { type: "audio/webm" }), stop: () => stream.getTracks().forEach(t => t.stop()) };
    } catch (e) { return null; }
  }

  /* ---------------- POMOCNICZE UI ---------------- */
  function el(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; }
  function esc(s) { return (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function stripHtml(s) { const d = document.createElement("div"); d.innerHTML = s || ""; return (d.textContent || "").replace(/\s+/g, " ").trim(); }
  function toast(msg) {
    const t = el(`<div style="position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:99;background:#1a2b4a;border:1px solid #243a5e;color:#e8eefc;padding:12px 18px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.5)">${esc(msg)}</div>`);
    document.body.appendChild(t);
    setTimeout(() => { t.style.transition = ".4s"; t.style.opacity = "0"; }, 1800);
    setTimeout(() => t.remove(), 2300);
  }
  // klik na .say -> wymowa całej frazy (klik w pojedyncze słowo obsłuży handler .rw)
  document.addEventListener("click", e => {
    if (e.target.closest(".rw")) return;
    const s = e.target.closest(".say");
    if (s) speak(s.dataset.say || s.textContent);
  });

  /* ---------------- TOPBAR + MENU ---------------- */
  function renderTop() {
    const bar = document.getElementById("topbar");
    const due = srsDue().length, weak = (state.wrong || []).length;
    bar.innerHTML = `
      <div class="logo" id="logoBtn"><span class="peak">🏔️</span> Angielski<b>wnet</b></div>
      <div class="spacer"></div>
      <span class="stat"><span class="ico">🔥</span>${state.streak}</span>
      <span class="stat"><span class="ico">⭐</span>${state.xp} XP</span>
      <button class="btn ghost small" id="btnMap">Mapa</button>
      <button class="btn ghost small" id="btnMenu">☰ Menu${(due + weak) ? ` <span class="badge-dot">${due + weak}</span>` : ""}</button>
    `;
    bar.querySelector("#btnMap").onclick = renderMap;
    bar.querySelector("#logoBtn").onclick = renderMap;
    bar.querySelector("#btnMenu").onclick = toggleMenu;
  }

  function toggleMenu() {
    const exist = document.getElementById("menuPanel");
    if (exist) { exist.remove(); return; }
    const due = srsDue().length, weak = (state.wrong || []).length;
    const nextDue = srsNextDue();
    const dueLabel = due ? due + " do powtórki" : (nextDue ? "następne: " + relTime(nextDue) : "brak fiszek");
    const panel = el(`<div class="menu-panel" id="menuPanel">
      <button class="menu-item" data-go="map"><span>🗺️</span> Szlak / mapa</button>
      <button class="menu-item" data-go="srs"><span>🧠</span> Fiszki SRS <i>${dueLabel}</i></button>
      <button class="menu-item" data-go="review"><span>♻️</span> Słabe punkty <i>${weak ? weak + " do poprawy" : "czysto 🎉"}</i></button>
      <button class="menu-item" data-go="import"><span>📥</span> Import / moje słówka</button>
      <button class="menu-item" data-go="paths"><span>🧭</span> Ścieżki tematyczne</button>
      <button class="menu-item" data-go="trophies"><span>🏆</span> Trofea i odznaki</button>
      <button class="menu-item" data-go="league"><span>📊</span> Liga tygodniowa</button>
      <div class="menu-sep"></div>
      <button class="menu-item" data-go="sound"><span>${state.sound ? "🔊" : "🔇"}</span> Dźwięki: ${state.sound ? "WŁ" : "WYŁ"}</button>
      <button class="menu-item" data-go="edit"><span>✏️</span> Edycja treści: ${state.edit ? "WŁ" : "WYŁ"}</button>
    </div>`);
    document.body.appendChild(panel);
    const close = () => { const p = document.getElementById("menuPanel"); if (p) p.remove(); };
    panel.querySelectorAll(".menu-item").forEach(b => b.onclick = () => {
      const go = b.dataset.go; close();
      if (go === "map") renderMap();
      else if (go === "srs") renderSRS();
      else if (go === "review") renderReview();
      else if (go === "import") renderImport();
      else if (go === "paths") renderPaths();
      else if (go === "trophies") renderTrophies();
      else if (go === "league") renderLeague();
      else if (go === "sound") { state.sound = !state.sound; save(); sfx("win"); renderTop(); }
      else if (go === "edit") { state.edit = !state.edit; save(); renderTop(); renderMap(); }
    });
    setTimeout(() => document.addEventListener("click", function h(e) {
      if (!e.target.closest("#menuPanel") && !e.target.closest("#btnMenu")) { close(); document.removeEventListener("click", h); }
    }), 0);
  }
  function relTime(ts) {
    const d = ts - Date.now();
    if (d <= 0) return "teraz";
    const h = Math.round(d / 3600000);
    if (h < 1) return "za " + Math.max(1, Math.round(d / 60000)) + " min";
    if (h < 24) return "za " + h + " h";
    return "za " + Math.round(h / 24) + " dni";
  }

  /* ---------------- WIDOK STARTOWY ---------------- */
  function renderStart() {
    closeSheet();
    const hasProgress = Object.keys(state.done).length > 0;
    app.innerHTML = "";
    app.appendChild(el(`
      <div class="hero">
        <div class="peakbig">🏔️</div>
        <h1>Angielski<span style="background:linear-gradient(90deg,#34d399,#38bdf8);-webkit-background-clip:text;background-clip:text;color:transparent">wnet</span></h1>
        <p class="lead">${esc(C.tagline)}<br>Wspinaczka od bazy (A1) po szczyt (C2). Każdy temat to zdobyty punkt na szlaku.</p>
        <div class="cta-row">
          <button class="btn primary" id="goPlace">📋 Zacznij od testu poziomującego</button>
          <button class="btn" id="goMap">${hasProgress ? "Kontynuuj wyprawę" : "Zacznij od bazy A1"}</button>
        </div>
        <p class="footer-note">Wskazówka: kliknij dowolny <span class="say" data-say="Hello, welcome to Angielskiwnet">angielski tekst</span>, aby usłyszeć wymowę (brytyjską). Najlepiej działa w Google Chrome.</p>
      </div>
    `));
    app.querySelector("#goPlace").onclick = renderPlacement;
    app.querySelector("#goMap").onclick = renderMap;
  }

  /* ---------------- TEST POZIOMUJĄCY ---------------- */
  const PLACEMENT = [
    { lvl: "A1", q: "She ___ a doctor.", o: ["am", "is", "are"], a: 1 },
    { lvl: "A1", q: "___ you like tea?", o: ["Do", "Does", "Are"], a: 0 },
    { lvl: "A2", q: "Yesterday I ___ to the cinema.", o: ["go", "went", "going"], a: 1 },
    { lvl: "A2", q: "This book is ___ than that one.", o: ["good", "better", "best"], a: 1 },
    { lvl: "B1", q: "I ___ never been to Spain.", o: ["have", "has", "had"], a: 0 },
    { lvl: "B1", q: "If it rains, we ___ at home.", o: ["stay", "will stay", "stayed"], a: 1 },
    { lvl: "B2", q: "The bridge ___ in 1890.", o: ["built", "was built", "is building"], a: 1 },
    { lvl: "B2", q: "I wish I ___ more time.", o: ["have", "had", "will have"], a: 1 },
    { lvl: "C1", q: "___ had I arrived when the phone rang.", o: ["No sooner", "Hardly", "Scarcely"], a: 0 },
    { lvl: "C2", q: "Choose the most natural: 'It's high time we ___.'", o: ["leave", "left", "will leave"], a: 1 }
  ];
  function renderPlacement() {
    closeSheet();
    let i = 0, correctByLevel = {};
    function step() {
      if (i >= PLACEMENT.length) return finish();
      const item = PLACEMENT[i];
      app.innerHTML = "";
      app.appendChild(el(`
        <div class="view">
          <p class="view-sub">Test poziomujący • pytanie ${i + 1} / ${PLACEMENT.length}</p>
          <div class="lvl-progress" style="margin-bottom:22px"><i style="width:${(i / PLACEMENT.length) * 100}%"></i></div>
          <div class="q"><p class="qtext">${esc(item.q)}</p>
            <div id="opts">${item.o.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join("")}</div>
          </div>
        </div>`));
      app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        const k = +b.dataset.k;
        correctByLevel[item.lvl] = correctByLevel[item.lvl] || { c: 0, t: 0 };
        correctByLevel[item.lvl].t++;
        if (k === item.a) correctByLevel[item.lvl].c++;
        i++; step();
      });
    }
    function finish() {
      const order = ["A1", "A2", "B1", "B2", "C1", "C2"];
      let rec = "A1";
      for (const lv of order) {
        const r = correctByLevel[lv];
        if (r && r.c / r.t >= 0.5) rec = lv; else if (r) break;
      }
      const recIdx = order.indexOf(rec);
      state.startIdx = recIdx; state.startLevel = rec; save();
      const lvObj = C.levels.find(l => l.id === rec);
      const credited = order.slice(0, recIdx);
      app.innerHTML = "";
      app.appendChild(el(`
        <div class="view">
          <div class="result-card">
            <p class="view-sub" style="margin:0">Twój poziom startowy to</p>
            <div class="lvl">${rec}</div>
            <h2 style="margin:4px 0 10px">${esc(lvObj.name)}</h2>
            <p style="color:#93a4c4;max-width:480px;margin:0 auto 20px">
              ${recIdx === 0
                ? "Zaczynamy od bazy — solidne fundamenty to klucz do szczytu. Cały poziom A1 czeka na Ciebie."
                : "Zaliczyliśmy Ci niższe poziomy <b style='color:#34d399'>" + credited.join(", ") + "</b> (odblokowane do powtórki), a Ty startujesz od <b style='color:#34d399'>" + rec + "</b>. Wyższe poziomy odblokujesz, zdobywając kolejne etapy szlaku."}
            </p>
            <p class="footer-note">Możesz w każdej chwili zejść niżej, by powtórzyć materiał z zaliczonych poziomów.</p>
            <button class="btn primary" id="toMap">Przejdź na szlak →</button>
          </div>
        </div>`));
      app.querySelector("#toMap").onclick = renderMap;
    }
    step();
  }

  /* ---------------- GRAFIKA GÓRY (lewy panel) ---------------- */
  // Wijący się szlak (wąż) od podnóża (dół) po szczyt (góra) — dużo zakrętów.
  const MTN_TRAIL = [
    [13, 93], [27, 90], [41, 86], [30, 81], [17, 77], [33, 73], [49, 70],
    [38, 65], [24, 61], [40, 57], [56, 53], [46, 48], [32, 44], [48, 40],
    [63, 36], [54, 31], [40, 27], [52, 23], [62, 19], [50, 14], [50, 10]
  ];
  // Znaczniki poziomów rozmieszczone wzdłuż węża: A1 (dół) ... C2 (szczyt)
  const MTN_MARK = [0, 4, 8, 12, 16, 20];
  const MTN_PTS = MTN_MARK.map(i => MTN_TRAIL[i]);
  function buildMountain() {
    const reach = reachableIdx();
    const path = MTN_TRAIL.map(p => p.join(",")).join(" ");
    let markers = "";
    C.levels.forEach((lv, i) => {
      const [x, y] = MTN_PTS[i];
      const cls = i < reach ? "conq" : (i === reach ? "cur" : "lock");
      markers += `<circle class="mk ${cls}" data-idx="${i}" cx="${x}" cy="${y}" r="3.4"></circle>`;
      const lx = x < 50 ? x + 5 : x + 5;
      markers += `<text class="mk-label" x="${lx}" y="${y + 1.6}">${lv.id}</text>`;
    });
    const [hx, hy] = MTN_PTS[reach];
    const hiker = `<text x="${hx}" y="${hy - 4.5}" text-anchor="middle" font-size="8">🧗</text>`;
    const cur = C.levels[reach];
    const aside = el(`
      <aside class="mountain-panel">
        <div class="mtn-card">
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-label="Mapa góry">
            <defs>
              <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#3b5a8c"/><stop offset="1" stop-color="#16243f"/>
              </linearGradient>
            </defs>
            <polygon class="mtn-body" fill="url(#mg)" points="0,100 50,8 100,100"></polygon>
            <polygon class="mtn-snow" points="50,8 41,24 47,20 50,23 54,19 60,25"></polygon>
            <polyline class="mtn-path" points="${path}"></polyline>
            ${markers}
            ${hiker}
          </svg>
          <div class="mtn-legend">
            <div class="now" style="color:${cur.color}">📍 ${esc(cur.name)}</div>
            <div class="sub">${esc(cur.altitude)} • jesteś tutaj na szlaku</div>
          </div>
        </div>
      </aside>`);
    aside.querySelectorAll(".mk").forEach(c => c.onclick = () => {
      const band = document.getElementById("lvl_" + C.levels[+c.dataset.idx].id);
      if (band) band.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    return aside;
  }

  /* ---------------- MAPA / SZLAK ---------------- */
  function renderMap() {
    closeSheet();
    app.innerHTML = "";
    const wrap = el(`<div class="view"></div>`);
    if (state.edit) wrap.appendChild(el(`
      <div class="edit-banner">✏️ Tryb edycji włączony. Otwórz dowolny krok, by edytować jego treść (JSON).
        <span class="spacer" style="flex:1"></span>
        <button class="btn small" id="exp">⬇️ Eksportuj course.js</button>
      </div>`));
    wrap.appendChild(el(`<h1 class="view-title">Twój szlak na szczyt</h1>
      <p class="view-sub">Lista zaczyna się od A1 (na górze) i prowadzi w dół aż do C2. Twoją aktualną pozycję widać na świecącej kropce 📍 na grafice góry.</p>`));

    const collapsed = !!state.mtnCollapsed;
    const toggle = el(`<button class="btn small mtn-toggle">${collapsed ? "🏔️ Pokaż górę" : "⟨ Zwiń podgląd góry"}</button>`);
    toggle.onclick = () => { state.mtnCollapsed = !state.mtnCollapsed; save(); renderMap(); };
    wrap.appendChild(toggle);

    const layout = el(`<div class="map-wrap ${collapsed ? "collapsed" : ""}"></div>`);
    if (!collapsed) layout.appendChild(buildMountain());

    const panel = el(`<div class="trail-panel"></div>`);
    const trail = el(`<div class="trail"></div>`);
    const reach = reachableIdx();
    // kolejność naturalna: A1 na górze listy, C2 na dole
    C.levels.slice().forEach(level => {
      const i = lvIndex(level);
      const prog = levelProgress(level);
      const band = el(`
        <div class="level-band" id="lvl_${level.id}">
          <span class="level-chip" style="border-color:${level.color}">
            <span style="width:12px;height:12px;border-radius:50%;background:${level.color};display:inline-block"></span>
            ${esc(level.name)} <span class="alt">${esc(level.altitude)}</span>
          </span>
          <span class="level-line"></span>
        </div>`);
      if (i === reach) band.dataset.cur = "1";
      trail.appendChild(band);
      trail.appendChild(el(`<div class="lvl-progress"><i style="width:${prog}%;background:${level.color}"></i></div>`));
      const curId = currentUnitId(level);
      // jednostki w kolejności naturalnej: u1 na górze, ostatnia na dole
      const unitsRev = level.units.map((u, idx) => ({ u, idx }));
      unitsRev.forEach(({ u: unit, idx }, pos) => {
        const done = isUnitDone(level, unit);
        const unlocked = isUnitUnlocked(level, idx);
        const hasContent = (unit.steps || []).length > 0;
        const isCur = unit.id === curId;
        let cls = "dot";
        if (done) cls += " done";
        else if (isCur) cls += " current";
        if (!unlocked || !hasContent) cls += " locked";
        const sub = hasContent
          ? (unitProgress(level, unit) + "% • " + unit.steps.length + " kroków")
          : (done ? "✓ Zaliczone z testu" : "Wkrótce — dodaj w edycji");
        const node = el(`
          <div class="node">
            <button class="${cls}" title="${esc(unit.title)}">
              ${done ? '<span class="check">✓</span>' : ""}
              ${isCur ? '<span class="flag">🚩</span>' : ""}
              ${(!unlocked || !hasContent) && !done ? "🔒" : unit.icon || "⛳"}
            </button>
            <div class="label">
              <div class="t">${esc(unit.title)}</div>
              <div class="s">${sub}</div>
            </div>
          </div>`);
        node.querySelector("button").onclick = () => {
          if (!hasContent) { toast("Ta jednostka czeka na treść — włącz „Edytuj treść”."); return; }
          if (!unlocked && !done) { toast("Najpierw zdobądź niższy etap szlaku."); return; }
          openUnit(level, unit);
        };
        trail.appendChild(node);
        if (pos < unitsRev.length - 1) trail.appendChild(el(`<div class="connector"></div>`));
      });
    });
    panel.appendChild(trail);
    panel.appendChild(el(`<p class="footer-note">Postęp zapisuje się automatycznie w tej przeglądarce.</p>`));
    layout.appendChild(panel);
    wrap.appendChild(layout);
    app.appendChild(wrap);
    if (state.edit) app.querySelector("#exp").onclick = exportCourse;

    // przewiń do miejsca, w którym jesteś (current), a jeśli brak — do aktualnego poziomu
    setTimeout(() => {
      const c = app.querySelector(".dot.current");
      if (c) c.scrollIntoView({ behavior: "smooth", block: "center" });
      else { const b = app.querySelector('.level-band[data-cur="1"]'); if (b) b.scrollIntoView({ behavior: "smooth", block: "center" }); }
    }, 70);
  }

  /* ---------------- URUCHOMIENIE JEDNOSTKI (sekwencja kroków) ---------------- */
  let backTo = renderMap; // dokąd wracać po zamknięciu/ukończeniu (mapa lub ścieżki)
  function openUnit(level, unit, back) {
    backTo = back || renderMap;
    const steps = unitSteps(level, unit);
    // zacznij od pierwszego nieukończonego (lub od początku, jeśli wszystko zrobione)
    let idx = steps.findIndex(st => !isStepDone(level.id, unit.id, st.id));
    if (idx < 0) idx = 0;
    runStep(level, unit, steps, idx);
  }

  function runStep(level, unit, steps, idx) {
    const step = steps[idx];
    const total = steps.length;
    const sheet = el(`
      <div class="sheet">
        <div class="sheet-head">
          <button class="close-x" title="Zamknij">×</button>
          <div class="step-bar"><i style="width:${((idx) / total) * 100}%"></i></div>
          <span class="stat" style="font-size:12px">${idx + 1}/${total}</span>
        </div>
        <div class="sheet-body" id="body"></div>
        <div class="sheet-foot" id="foot"></div>
      </div>`);
    openSheet(sheet);
    sheet.querySelector(".close-x").onclick = () => { closeSheet(); backTo(); };
    const body = sheet.querySelector("#body");
    const foot = sheet.querySelector("#foot");

    const next = () => {
      state.done[stepKey(level.id, unit.id, step.id)] = true;
      addXp(step.type === "boss" ? 30 : 10);
      sfx("win");
      renderTop();
      if (idx + 1 < total) runStep(level, unit, steps, idx + 1);
      else finishUnit(level, unit);
    };

    if (state.edit) {
      foot.appendChild(el(`<button class="btn small ghost" id="editStep">✏️ Edytuj ten krok (JSON)</button>`));
    }

    const ctx = { level, unit, step, body, foot, next };
    const renderer = RENDERERS[step.type] || RENDERERS.theory;
    renderer(ctx);

    if (state.edit) foot.querySelector("#editStep").onclick = () => editStepJSON(level, unit, steps, idx);
  }

  function finishUnit(level, unit) {
    sfx("badge"); checkBadges();
    const sheet = el(`
      <div class="sheet"><div class="sheet-body celebrate">
        <div class="big climber-pop">🎉🏕️🧗</div>
        <h2>Zdobyto: ${esc(unit.title)}</h2>
        <p style="color:#93a4c4">Świetna robota! Kolejny punkt na szlaku zaliczony.</p>
        <button class="btn primary" id="cont">Wróć na szlak</button>
      </div></div>`);
    openSheet(sheet);
    sheet.querySelector("#cont").onclick = () => { closeSheet(); backTo(); };
  }

  function footNext(foot, label, fn, enabled) {
    let b = foot.querySelector("#nextBtn");
    if (!b) { b = el(`<button class="btn primary" id="nextBtn"></button>`); foot.appendChild(b); }
    b.textContent = label || "Dalej →";
    b.disabled = enabled === false;
    b.onclick = fn;
    return b;
  }

  /* ---------------- RENDERERY KROKÓW ---------------- */
  const RENDERERS = {
    theory(ctx) {
      const s = ctx.step;
      let media = "";
      if (s.video) {
        const id = ytId(s.video);
        if (id) media += `<div class="embed"><iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe></div>`;
      }
      if (s.image) media += `<img src="${esc(s.image)}" alt="">`;
      ctx.body.innerHTML = `<div class="theory"><h2>${esc(s.title)}</h2>${media}${s.html || ""}</div>`;
      enhanceListenables(ctx.body);
      footNext(ctx.foot, "Rozumiem, dalej →", ctx.next);
    },

    vocab(ctx) {
      const s = ctx.step;
      ctx.body.innerHTML = `<div class="theory"><h2>${esc(s.title)}</h2></div>`;
      (s.words || []).forEach(w => {
        const f = el(`<div class="flash">
          <div><div class="en">${esc(w.en)}</div><div class="pl">${esc(w.pl)}</div>
          ${w.example ? `<div class="ex" data-ex="${esc(w.example)}">„${esc(w.example)}”</div>` : ""}</div>
          <button class="btn small" title="Przeczytaj słowo">🔊</button></div>`);
        f.querySelector("button").onclick = () => speak(w.en);
        f.querySelectorAll(".en").forEach(makeClickableWords);
        const ex = f.querySelector(".ex");
        if (ex) {
          makeClickableWords(ex);
          ex.classList.add("listen-cell");
          ex.title = "Kliknij, aby usłyszeć przykład";
          ex.dataset.say = w.example; // klik poza słowem czyta czysty przykład bez cudzysłowów
        }
        ctx.body.appendChild(f);
      });
      footNext(ctx.foot, "Umiem te słowa →", () => {
        (s.words || []).forEach(w => srsAdd(w.en, w.pl));
        checkBadges();
        ctx.next();
      });
    },

    quiz: quizLike,
    boss: quizLike,

    dialog(ctx) {
      const s = ctx.step;
      ctx.body.innerHTML = `<div class="theory"><h2>${esc(s.title)}</h2>
        ${theoryLink(s.theoryRef)}<p style="color:#93a4c4">Posłuchaj, a potem nagraj swoją kwestię i porównaj wymowę.</p></div>`;
      const recIndex = (typeof s.recordLine === "number") ? s.recordLine : -1;
      s.lines.forEach((ln, i) => {
        const you = /^ty$/i.test(ln.speaker);
        const wrap = el(`<div class="line ${you ? "you" : ""}">
          <div class="bubble"><div class="who">${esc(ln.speaker)}</div>
            <div class="en">${esc(ln.en)}</div><div class="pl">${esc(ln.pl || "")}</div>
            <div class="row"><button class="btn small" data-play>🔊 Posłuchaj</button></div>
          </div></div>`);
        wrap.querySelector("[data-play]").onclick = () => speak(ln.en);
        const enEl = wrap.querySelector(".en");
        if (enEl) { makeClickableWords(enEl); enEl.classList.add("listen-cell"); enEl.dataset.say = ln.en; }
        ctx.body.appendChild(wrap);
        if (i === recIndex) ctx.body.appendChild(buildRecordBox(ln.en));
      });
      footNext(ctx.foot, "Gotowe →", ctx.next);
    },

    speak(ctx) {
      const s = ctx.step;
      ctx.body.innerHTML = `<div class="theory"><h2>${esc(s.title)}</h2>
        <p style="color:#93a4c4">Przeczytaj na głos. System oceni Twoją wymowę.</p></div>`;
      (s.prompts || []).forEach(p => {
        const box = el(`<div class="prompt"><div class="en">${esc(p.en)}</div><div class="pl">${esc(p.pl || "")}</div>
          <button class="btn small" data-play>🔊 Wzór</button></div>`);
        box.querySelector("[data-play]").onclick = () => speak(p.en);
        const enEl = box.querySelector(".en");
        if (enEl) { makeClickableWords(enEl); enEl.classList.add("listen-cell"); enEl.dataset.say = p.en; }
        box.appendChild(buildRecordBox(p.en));
        ctx.body.appendChild(box);
      });
      footNext(ctx.foot, "Gotowe →", ctx.next);
    },

    // ZROZUMIENIE TEKSTU: czytanka widoczna nad każdym pytaniem
    reading(ctx) {
      const s = ctx.step;
      const head = () => `<div class="reading-passage"><h2>${esc(s.title)} ${theoryLink(s.theoryRef)}</h2>
        ${s.intro ? `<p style="color:#93a4c4">${esc(s.intro)}</p>` : ""}
        <div class="passage">${s.passage || ""}</div>
        <button class="btn small" data-listen>🔊 Przeczytaj na głos</button></div>`;
      runQuestions(ctx, s.questions, {
        title: s.title,
        src: ctx.level.id + "/" + ctx.unit.id + "/" + ctx.step.id,
        header: head,
        bindHeader(body) {
          const b = body.querySelector("[data-listen]");
          if (b) b.onclick = () => speak(stripHtml(s.passage));
          const psg = body.querySelector(".passage");
          if (psg) makeClickableWords(psg);
        }
      });
    },

    // ZE SŁUCHU: tekst odtwarzany przez TTS (niewidoczny), pytania o treść
    listen(ctx) {
      const s = ctx.step;
      const head = () => `<div class="listen-box"><h2>🎧 ${esc(s.title)}</h2>
        <p style="color:#93a4c4">${esc(s.instructions || "Posłuchaj nagrania i odpowiedz na pytania. Możesz odtwarzać wielokrotnie.")}</p>
        <div class="row" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
          <button class="btn" data-play>🔊 Odtwórz</button>
          <button class="btn small" data-slow>🐢 Wolniej</button>
        </div></div>`;
      runQuestions(ctx, s.questions, {
        title: s.title,
        src: ctx.level.id + "/" + ctx.unit.id + "/" + ctx.step.id,
        header: head,
        bindHeader(body) {
          const p = body.querySelector("[data-play]"), sl = body.querySelector("[data-slow]");
          if (p) p.onclick = () => speak(s.audio);
          if (sl) sl.onclick = () => speak(s.audio, 0.6);
        }
      });
    }
  };

  /* ---------------- SILNIK PYTAŃ (quiz / boss / reading / listen) ---------------- */
  function runQuestions(ctx, qs, opts) {
    opts = opts || {};
    qs = qs || [];
    let qi = 0, correct = 0;
    function show() {
      if (qi >= qs.length) {
        ctx.body.innerHTML = `<div class="celebrate"><div class="big">${correct === qs.length ? "🏅" : "👍"}</div>
          <h2>Wynik: ${correct} / ${qs.length}</h2>
          <p style="color:#93a4c4">${correct === qs.length ? "Komplet! Wymiatasz." : "Dobra robota — błędy to część wspinaczki."}</p></div>`;
        ctx.foot.querySelectorAll("#nextBtn").forEach(b=>b.remove());
        footNext(ctx.foot, "Dalej →", ctx.next);
        return;
      }
      const q = qs[qi];
      ctx.body.innerHTML = (opts.header ? opts.header() : "") +
        `<p class="view-sub">${esc(opts.title || "")} • pytanie ${qi + 1}/${qs.length}</p>`;
      if (opts.bindHeader) opts.bindHeader(ctx.body);
      const node = (QTYPES[q.kind] || QTYPES.choice)(q, verdict);
      ctx.body.appendChild(node);
      // przycisk „Sprawdź”/„Dalej”
      footNext(ctx.foot, "Sprawdź", () => node._check && node._check(), false);
      ctx.foot.querySelector("#nextBtn").disabled = true;
      node._enableCheck = () => { ctx.foot.querySelector("#nextBtn").disabled = false; };
    }
    function verdict(ok, node) {
      const q = qs[qi];
      if (ok) correct++; else if (!opts.noRecord) recordWrong(q, opts.src);
      sfx(ok ? "win" : "fail");
      if (opts.onResult) { try { opts.onResult(ok, q, qi); } catch (e) {} }
      const fb = el(`<div class="feedback ${ok ? "ok" : "no"}">${ok ? "✅ Dobrze!" : "❌ Spróbuj zapamiętać poprawną odpowiedź."}</div>`);
      ctx.body.appendChild(fb);
      footNext(ctx.foot, "Dalej →", () => { qi++; show(); }, true);
    }
    show();
  }
  function quizLike(ctx) {
    const src = ctx.level.id + "/" + ctx.unit.id + "/" + ctx.step.id;
    const qs = ctx.step.questions || [];
    const isBoss = ctx.step.type === "boss";
    runQuestions(ctx, qs, {
      title: ctx.step.title, src: src,
      onResult: isBoss ? (ok => { if (!ok) ctx._anyWrong = true; }) : undefined,
      onDone: undefined
    });
    if (isBoss) {
      // owijamy next: jeśli boss zaliczony bez błędu → odznaka perfekcjonisty
      const origNext = ctx.next;
      ctx.next = () => { if (!ctx._anyWrong) setFlag("didPerfect"); origNext(); };
    }
  }

  const QTYPES = {
    choice(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q)} ${theoryLink(q.theoryRef)}</p>
        <div class="opts"></div></div>`);
      const opts = node.querySelector(".opts");
      let chosen = -1;
      q.options.forEach((o, k) => {
        const b = el(`<button class="opt">${esc(o)}</button>`);
        b.onclick = () => { chosen = k; opts.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); node._enableCheck && node._enableCheck(); };
        opts.appendChild(b);
      });
      node._check = () => {
        if (chosen < 0) return;
        opts.querySelectorAll(".opt").forEach((x, k) => { if (k === q.answer) x.classList.add("correct"); else if (k === chosen) x.classList.add("wrong"); x.disabled = true; });
        verdict(chosen === q.answer, node);
      };
      return node;
    },
    gap(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q)} ${theoryLink(q.theoryRef)}</p>
        <input class="gap-input" placeholder="wpisz odpowiedź…"></div>`);
      const inp = node.querySelector("input");
      inp.oninput = () => node._enableCheck && node._enableCheck();
      inp.onkeydown = e => { if (e.key === "Enter") node._check(); };
      const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
      node._check = () => {
        const got = norm(inp.value);
        const ok = answers.some(a => norm(a) === got);
        inp.style.borderColor = ok ? "#22c55e" : "#f87171";
        inp.disabled = true;
        if (!ok) inp.value = inp.value + "  →  " + answers[0];
        verdict(ok, node);
      };
      setTimeout(() => inp.focus(), 50);
      return node;
    },
    truefalse(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q)}</p>
        <button class="opt" data-v="1">✅ Prawda</button><button class="opt" data-v="0">❌ Fałsz</button></div>`);
      let chosen = null;
      node.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        chosen = b.dataset.v === "1";
        node.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel");
        node._enableCheck && node._enableCheck();
      });
      node._check = () => {
        if (chosen === null) return;
        node.querySelectorAll(".opt").forEach(x => x.disabled = true);
        verdict(chosen === q.answer, node);
      };
      return node;
    },
    order(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q)}</p>
        <div class="order-zone"></div><div class="order-bank"></div></div>`);
      const zone = node.querySelector(".order-zone"), bank = node.querySelector(".order-bank");
      const shuffled = q.words.map((w, i) => ({ w, i })).sort(() => Math.random() - 0.5);
      shuffled.forEach(({ w }) => {
        const b = el(`<button class="word">${esc(w)}</button>`);
        b.onclick = () => { zone.appendChild(b); b.onclick = () => { bank.appendChild(b); rebind(b); node._enableCheck && node._enableCheck(); }; node._enableCheck && node._enableCheck(); };
        bank.appendChild(b);
      });
      function rebind(b) { b.onclick = () => { zone.appendChild(b); b.onclick = () => { bank.appendChild(b); rebind(b); }; }; }
      node._check = () => {
        const built = Array.from(zone.querySelectorAll(".word")).map(x => x.textContent);
        const ok = built.join(" ") === q.answer.join(" ");
        node.querySelectorAll(".word").forEach(x => x.disabled = true);
        if (!ok) zone.appendChild(el(`<div class="heard">Poprawnie: ${esc(q.answer.join(" "))}</div>`));
        verdict(ok, node);
      };
      return node;
    },
    match(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">Dopasuj pary ${theoryLink(q.theoryRef)}</p>
        <div class="match-cols"><div class="match-col" id="L"></div><div class="match-col" id="R"></div></div></div>`);
      const L = node.querySelector("#L"), R = node.querySelector("#R");
      const left = q.pairs.map((p, i) => ({ t: p.a, i }));
      const right = q.pairs.map((p, i) => ({ t: p.b, i })).sort(() => Math.random() - 0.5);
      let selL = null, matched = 0;
      left.forEach(o => { const c = el(`<button class="chip">${esc(o.t)}</button>`); c.dataset.i = o.i; c.onclick = () => { if (c.classList.contains("done")) return; L.querySelectorAll(".chip").forEach(x => x.classList.remove("sel")); c.classList.add("sel"); selL = c; }; L.appendChild(c); });
      right.forEach(o => {
        const c = el(`<button class="chip">${esc(o.t)}</button>`); c.dataset.i = o.i;
        c.onclick = () => {
          if (!selL || c.classList.contains("done")) return;
          if (selL.dataset.i === c.dataset.i) {
            selL.classList.add("done"); c.classList.add("done", "right"); matched++;
            selL = null;
            if (matched === q.pairs.length) { node.querySelectorAll(".chip").forEach(x => x.disabled = true); verdict(true, node); }
          } else { c.classList.add("wrong"); setTimeout(() => c.classList.remove("wrong"), 500); }
        };
        R.appendChild(c);
      });
      node._check = () => {}; // dopasowanie zalicza się samo
      setTimeout(() => node._enableCheck && node._enableCheck(), 50);
      node._check = () => { if (matched < q.pairs.length) toast("Dopasuj wszystkie pary."); };
      return node;
    },

    // WIELOKROTNY WYBÓR — zaznacz wszystkie poprawne
    multi(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q)} <span class="hint-multi">(zaznacz wszystkie poprawne)</span> ${theoryLink(q.theoryRef)}</p><div class="opts"></div></div>`);
      const opts = node.querySelector(".opts");
      const chosen = new Set();
      q.options.forEach((o, k) => {
        const b = el(`<button class="opt">${esc(o)}</button>`);
        b.onclick = () => {
          if (chosen.has(k)) { chosen.delete(k); b.classList.remove("sel"); }
          else { chosen.add(k); b.classList.add("sel"); }
          node._enableCheck && node._enableCheck();
        };
        opts.appendChild(b);
      });
      node._check = () => {
        const ans = new Set(q.answers);
        const ok = chosen.size === ans.size && [...chosen].every(k => ans.has(k));
        opts.querySelectorAll(".opt").forEach((x, k) => {
          if (ans.has(k)) x.classList.add("correct");
          else if (chosen.has(k)) x.classList.add("wrong");
          x.disabled = true;
        });
        verdict(ok, node);
      };
      return node;
    },

    // DYKTANDO — posłuchaj i wpisz dokładnie
    dictation(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q || "Wpisz dokładnie to, co słyszysz:")}</p>
        <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
          <button class="btn small" data-play>🔊 Odtwórz</button>
          <button class="btn small" data-slow>🐢 Wolniej</button>
        </div>
        <input class="gap-input" placeholder="wpisz zdanie…"></div>`);
      const inp = node.querySelector("input");
      const text = q.audio || q.answer;
      node.querySelector("[data-play]").onclick = () => speak(text);
      node.querySelector("[data-slow]").onclick = () => speak(text, 0.6);
      inp.oninput = () => node._enableCheck && node._enableCheck();
      inp.onkeydown = e => { if (e.key === "Enter") node._check(); };
      setTimeout(() => speak(text), 200);
      node._check = () => {
        const sc = similarity(q.answer, inp.value);
        const ok = norm(inp.value) === norm(q.answer) || sc >= 90;
        inp.style.borderColor = ok ? "#22c55e" : "#f87171";
        inp.disabled = true;
        node.appendChild(el(`<div class="heard">Poprawnie: „${esc(q.answer)}” (zgodność ${sc}%)</div>`));
        verdict(ok, node);
      };
      return node;
    },

    // LISTA ROZWIJANA w zdaniu
    dropdown(q, verdict) {
      const parts = (q.q || "").split("___");
      const sel = `<select class="gap-select"><option value="" disabled selected>— wybierz —</option>${q.options.map((o, k) => `<option value="${k}">${esc(o)}</option>`).join("")}</select>`;
      const node = el(`<div class="q"><p class="qtext">${esc(parts[0] || "")}${sel}${esc(parts[1] || "")} ${theoryLink(q.theoryRef)}</p></div>`);
      const s = node.querySelector("select");
      s.onchange = () => node._enableCheck && node._enableCheck();
      node._check = () => {
        if (s.value === "") return;
        const ok = +s.value === q.answer;
        s.style.borderColor = ok ? "#22c55e" : "#f87171";
        s.disabled = true;
        if (!ok) node.appendChild(el(`<div class="heard">Poprawnie: „${esc(q.options[q.answer])}”</div>`));
        verdict(ok, node);
      };
      return node;
    },

    // KATEGORYZACJA — rozmieść elementy do właściwych kolumn
    categorize(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q)}</p>
        <div class="cat-bank"></div><div class="cat-cols"></div></div>`);
      const bank = node.querySelector(".cat-bank");
      const cols = node.querySelector(".cat-cols");
      const drops = q.cats.map((c, ci) => {
        const box = el(`<div class="cat-col"><div class="cat-h">${esc(c)}</div><div class="cat-drop"></div></div>`);
        cols.appendChild(box);
        return box.querySelector(".cat-drop");
      });
      let selected = null;
      const items = q.items.map((it, i) => ({ it, i })).sort(() => Math.random() - 0.5);
      items.forEach(({ it, i }) => {
        const chip = el(`<button class="word" data-i="${i}">${esc(it.t)}</button>`);
        chip.onclick = () => {
          node.querySelectorAll(".word").forEach(x => x.classList.remove("sel"));
          chip.classList.add("sel"); selected = chip;
        };
        bank.appendChild(chip);
      });
      drops.forEach(drop => {
        drop.onclick = () => {
          if (!selected) return;
          drop.appendChild(selected); selected.classList.remove("sel"); selected = null;
          if (!bank.querySelector(".word")) node._enableCheck && node._enableCheck();
        };
      });
      node._check = () => {
        let ok = !bank.querySelector(".word");
        drops.forEach((drop, ci) => {
          drop.querySelectorAll(".word").forEach(chip => {
            const correct = q.items[+chip.dataset.i].cat === ci;
            chip.classList.add(correct ? "correct" : "wrong");
            if (!correct) ok = false;
            chip.disabled = true;
          });
        });
        bank.querySelectorAll(".word").forEach(c => { c.classList.add("wrong"); });
        verdict(ok, node);
      };
      return node;
    },

    // TRANSFORMACJA ZDANIA — przekształć zdanie wg polecenia
    transform(q, verdict) {
      const node = el(`<div class="q"><p class="qtext">${esc(q.q)} ${theoryLink(q.theoryRef)}</p>
        ${q.given ? `<div class="given">„${esc(q.given)}”</div>` : ""}
        ${q.hint ? `<div class="hint-line">💡 ${esc(q.hint)}</div>` : ""}
        <input class="gap-input" placeholder="wpisz przekształcone zdanie…"></div>`);
      const inp = node.querySelector("input");
      inp.oninput = () => node._enableCheck && node._enableCheck();
      inp.onkeydown = e => { if (e.key === "Enter") node._check(); };
      const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
      node._check = () => {
        const got = norm(inp.value);
        const ok = answers.some(a => norm(a) === got) || answers.some(a => similarity(a, inp.value) >= 92);
        inp.style.borderColor = ok ? "#22c55e" : "#f87171";
        inp.disabled = true;
        if (!ok) node.appendChild(el(`<div class="heard">Przykład poprawnej odpowiedzi: „${esc(answers[0])}”</div>`));
        verdict(ok, node);
      };
      setTimeout(() => inp.focus(), 50);
      return node;
    }
  };

  /* ---------------- OCENA WYMOWY SŁOWO-PO-SŁOWIE ---------------- */
  // Dopasowanie słów wzorca do rozpoznanych (zachłannie, z zachowaniem kolejności)
  function alignWords(target, said) {
    const tw = norm(target).split(" ").filter(Boolean);
    const sw = norm(said).split(" ").filter(Boolean);
    let j = 0;
    return tw.map(w => {
      let hit = false;
      for (let k = j; k < sw.length; k++) { if (sw[k] === w) { hit = true; j = k + 1; break; } }
      if (!hit && sw.indexOf(w) >= 0) hit = "loose"; // jest, ale nie w kolejności
      return { w: w, ok: hit };
    });
  }
  function renderWordScores(target, said) {
    const words = alignWords(target, said);
    const good = words.filter(x => x.ok === true).length;
    const pct = Math.round(good / Math.max(words.length, 1) * 100);
    const html = words.map(x => {
      const cls = x.ok === true ? "wgood" : x.ok === "loose" ? "wmid" : "wbad";
      return `<span class="wscore ${cls}">${esc(x.w)}</span>`;
    }).join(" ");
    return { pct: pct, html: html };
  }

  /* ---------------- BOX NAGRYWANIA + OCENA WYMOWY + SHADOWING ---------------- */
  function buildRecordBox(target) {
    const box = el(`<div class="record-box">
      <div class="row" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn small" data-rec>🎙️ Nagraj</button>
        <button class="btn small" data-play2 disabled>▶️ Odtwórz</button>
        <button class="btn small" data-score>🎯 Oceń wymowę</button>
        <button class="btn small" data-shadow>🌓 Shadowing</button>
      </div>
      <div data-out></div></div>`);
    const out = box.querySelector("[data-out]");
    const playBtn = box.querySelector("[data-play2]");
    const recBtn = box.querySelector("[data-rec]");
    let recorder = null, blobUrl = null, recording = false;

    recBtn.onclick = async () => {
      if (!recording) {
        recorder = await makeRecorder();
        if (!recorder) { toast("Brak dostępu do mikrofonu."); return; }
        recorder.rec.start(); recording = true;
        recBtn.textContent = "⏹️ Zatrzymaj"; recBtn.classList.add("primary");
      } else {
        recorder.rec.onstop = () => {
          const blob = recorder.getBlob();
          blobUrl = URL.createObjectURL(blob);
          playBtn.disabled = false; recorder.stop();
        };
        recorder.rec.stop(); recording = false;
        recBtn.textContent = "🎙️ Nagraj ponownie"; recBtn.classList.remove("primary");
      }
    };
    playBtn.onclick = () => { if (blobUrl) new Audio(blobUrl).play(); };

    function showScore(said, extra) {
      const ws = renderWordScores(target, said);
      const cls = ws.pct >= 80 ? "good" : ws.pct >= 55 ? "mid" : "low";
      out.innerHTML = `<span class="score-pill ${cls}">Wymowa: ${ws.pct}%</span>${extra || ""}
        <div class="word-line">${ws.html}</div>
        <div class="heard">Usłyszano: „${esc(said)}” &nbsp;·&nbsp; <span class="wgood">zielone</span> = OK, <span class="wbad">czerwone</span> = popraw</div>`;
    }

    box.querySelector("[data-score]").onclick = () => {
      out.innerHTML = `<div class="heard">🎧 Mów teraz… (czytaj zdanie na głos)</div>`;
      const r = recognizeOnce(
        said => showScore(said),
        err => { out.innerHTML = `<div class="heard">Ocena na żywo niedostępna (${esc(err)}). Użyj „Nagraj” + „Odtwórz”, by porównać się ze wzorem 🔊.</div>`; }
      );
      if (!r) out.innerHTML = `<div class="heard">Twoja przeglądarka nie wspiera rozpoznawania mowy. Użyj Chrome (z internetem), albo porównaj ręcznie: 🔊 wzór vs ▶️ Twoje nagranie.</div>`;
    };

    // SHADOWING: usłysz wzór, powtórz równolegle — ocena słów + rytmu (tempa)
    box.querySelector("[data-shadow]").onclick = () => {
      out.innerHTML = `<div class="heard">🌓 Słuchaj wzoru i powtarzaj na głos równo z lektorem…</div>`;
      const words = norm(target).split(" ").filter(Boolean).length;
      const expected = Math.max(0.8, words * 0.42); // szacowany czas wypowiedzi (s)
      if (!window.speechSynthesis) { toast("Brak syntezatora mowy."); return; }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(target);
      u.lang = "en-GB"; u.rate = 0.92;
      const v = pickVoice(); if (v) u.voice = v;
      u.onend = () => {
        const t0 = Date.now();
        const r = recognizeOnce(
          said => {
            const dur = (Date.now() - t0) / 1000;
            const rhythm = Math.max(0, Math.round(100 - Math.abs(dur - expected) / expected * 100));
            const rcls = rhythm >= 75 ? "good" : rhythm >= 45 ? "mid" : "low";
            showScore(said, ` <span class="score-pill ${rcls}">Rytm: ${rhythm}%</span>`);
            setFlag("didShadow");
          },
          err => { out.innerHTML = `<div class="heard">Shadowing wymaga rozpoznawania mowy (Chrome + internet). Błąd: ${esc(err)}.</div>`; }
        );
        if (!r) out.innerHTML = `<div class="heard">Twoja przeglądarka nie wspiera rozpoznawania mowy — shadowing działa najlepiej w Chrome online.</div>`;
      };
      speechSynthesis.speak(u);
    };
    return box;
  }

  /* ---------------- KLIKALNE SŁOWA (tłumaczenie kontekstowe) ---------------- */
  function makeClickableWords(container) {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(tn => {
      if (!/[A-Za-z]/.test(tn.nodeValue)) return;
      if (tn.parentNode && tn.parentNode.classList && tn.parentNode.classList.contains("rw")) return;
      const frag = document.createDocumentFragment();
      tn.nodeValue.split(/(\b)/).forEach(tok => {
        if (/[A-Za-z'][A-Za-z']+/.test(tok)) {
          const s = document.createElement("span");
          s.className = "rw"; s.textContent = tok; frag.appendChild(s);
        } else frag.appendChild(document.createTextNode(tok));
      });
      tn.parentNode.replaceChild(frag, tn);
    });
  }
  function showWordTip(anchor, word, info) {
    document.querySelectorAll(".word-tip").forEach(t => t.remove());
    const tip = el(`<div class="word-tip">
      <div class="wt-en">${esc(word)} <button class="btn small" data-say>🔊</button></div>
      <div class="wt-pl">${info ? esc(info.pl) : "<i>brak tłumaczenia offline — kliknij 🔊, by usłyszeć</i>"}</div>
    </div>`);
    document.body.appendChild(tip);
    const r = anchor.getBoundingClientRect();
    tip.style.left = Math.min(window.innerWidth - tip.offsetWidth - 8, Math.max(8, r.left)) + "px";
    tip.style.top = (window.scrollY + r.bottom + 6) + "px";
    tip.querySelector("[data-say]").onclick = e => { e.stopPropagation(); speak(word); };
    setTimeout(() => document.addEventListener("click", function h(e) {
      if (!e.target.closest(".word-tip")) { tip.remove(); document.removeEventListener("click", h); }
    }), 0);
  }
  document.addEventListener("click", e => {
    const w = e.target.closest(".rw");
    if (!w) return;
    const word = w.textContent.trim();
    speak(word);
    showWordTip(w, word, lookupWord(word));
  });

  /* ---------------- ODSŁUCH WSZYSTKIEGO (zdania, słowa, zwroty) ---------------- */
  // Każda angielska komórka tabeli / fraza staje się klikalna: słowo po słowie (.rw)
  // oraz cała komórka po kliknięciu poza słowem.
  const PL_DIACRITICS = /[ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]/;
  function enhanceListenables(container) {
    if (!container) return;
    // 1) frazy oznaczone .say (poza specjalnymi z data-say) -> słowa klikalne
    container.querySelectorAll(".say").forEach(s => { if (!s.dataset.say) makeClickableWords(s); });
    // 2) tabele teorii -> komórki angielskie klikalne (pomijamy kolumny i komórki polskie)
    container.querySelectorAll("table.t-table").forEach(enhanceTable);
  }
  function enhanceTable(table) {
    const rows = table.rows ? Array.prototype.slice.call(table.rows) : [];
    if (!rows.length) return;
    const headCells = Array.prototype.slice.call(rows[0].children);
    const plCols = {};
    headCells.forEach((th, i) => {
      if (/^\s*(pl|po polsku|polski|polskie|tłumaczenie|znaczenie|opis|przykład pl)\s*$/i.test(th.textContent || "")) plCols[i] = true;
    });
    rows.forEach((row, ri) => {
      if (ri === 0 && row.querySelector("th")) return; // wiersz nagłówka
      Array.prototype.slice.call(row.children).forEach((cell, ci) => {
        if (plCols[ci]) return;
        const txt = cell.textContent || "";
        if (!/[A-Za-z]/.test(txt) || PL_DIACRITICS.test(txt)) return; // nie czytamy polskich komórek
        makeClickableWords(cell);
        cell.classList.add("listen-cell");
        cell.title = "Kliknij, aby usłyszeć";
      });
    });
  }
  // klik w angielską komórkę / przykład (poza pojedynczym słowem) -> przeczytaj całość
  document.addEventListener("click", e => {
    if (e.target.closest(".rw")) return;
    const c = e.target.closest(".listen-cell");
    if (c) speak(c.dataset.say || c.textContent.trim());
  });

  /* ---------------- ODNOŚNIK DO TEORII („?”) ---------------- */
  function theoryLink(ref) {
    if (!ref) return "";
    const id = "tr_" + Math.random().toString(36).slice(2, 8);
    setTimeout(() => { const b = document.getElementById(id); if (b) b.onclick = () => showTheoryPopup(ref); }, 0);
    return `<button class="qref" id="${id}">? teoria</button>`;
  }
  function findStepByRef(ref) {
    const [lid, uid, sid] = (ref || "").split("/");
    const lv = C.levels.find(l => l.id === lid); if (!lv) return null;
    const u = lv.units.find(x => x.id === uid); if (!u) return null;
    return (u.steps || []).find(x => x.id === sid) || null;
  }
  function showTheoryPopup(ref) {
    const st = findStepByRef(ref);
    if (!st) { toast("Brak powiązanej teorii."); return; }
    let media = "";
    if (st.video) { const id = ytId(st.video); if (id) media += `<div class="embed"><iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe></div>`; }
    if (st.image) media += `<img src="${esc(st.image)}" alt="">`;
    const pop = el(`<div class="sheet" style="max-width:560px">
      <div class="sheet-head"><b>📘 Przypomnienie teorii</b><span class="spacer" style="flex:1"></span><button class="close-x">×</button></div>
      <div class="sheet-body"><div class="theory"><h2>${esc(st.title)}</h2>${media}${st.html || ""}</div></div>
      <div class="sheet-foot"><span class="footer-note">Możesz wrócić do zadania w każdej chwili.</span><button class="btn primary" id="ok">Wracam do zadania</button></div>
    </div>`);
    const ov = el(`<div class="overlay" style="z-index:60"></div>`);
    ov.appendChild(pop); document.body.appendChild(ov);
    enhanceListenables(pop.querySelector(".theory"));
    const close = () => ov.remove();
    pop.querySelector(".close-x").onclick = close;
    pop.querySelector("#ok").onclick = close;
    ov.addEventListener("click", e => { if (e.target === ov) close(); });
  }

  /* ---------------- EDYCJA TREŚCI (JSON) + EKSPORT ---------------- */
  function editStepJSON(level, unit, steps, idx) {
    const step = steps[idx];
    const ta = el(`<div class="overlay" style="z-index:70"><div class="sheet" style="max-width:760px">
      <div class="sheet-head"><b>✏️ Edycja kroku: ${esc(step.title || step.type)}</b><span style="flex:1"></span><button class="close-x">×</button></div>
      <div class="sheet-body">
        <p class="view-sub">Edytuj JSON tego kroku. Tu dodasz wideo (pole "video": URL YouTube), grafikę ("image": URL), pytania itp.</p>
        <textarea style="width:100%;height:340px;background:#0f1a2e;color:#e8eefc;border:1px solid #243a5e;border-radius:12px;padding:12px;font-family:monospace;font-size:13px"></textarea>
      </div>
      <div class="sheet-foot"><button class="btn ghost" id="cancel">Anuluj</button><button class="btn primary" id="apply">Zastosuj</button></div>
    </div></div>`);
    const txt = ta.querySelector("textarea");
    txt.value = JSON.stringify(step, null, 2);
    document.body.appendChild(ta);
    const close = () => ta.remove();
    ta.querySelector(".close-x").onclick = close;
    ta.querySelector("#cancel").onclick = close;
    ta.querySelector("#apply").onclick = () => {
      try {
        const obj = JSON.parse(txt.value);
        steps[idx] = obj; close();
        toast("Zapisano w pamięci sesji. Użyj „Eksportuj course.js”, by zachować na stałe.");
        runStep(level, unit, steps, idx);
      } catch (e) { toast("Błąd JSON: " + e.message); }
    };
  }
  function exportCourse() {
    const data = "window.COURSE = " + JSON.stringify(C, null, 2) + ";\n";
    const blob = new Blob([data], { type: "text/javascript" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "course.js"; a.click();
    toast("Pobrano course.js — podmień nim stary plik, aby zapisać zmiany na stałe.");
  }

  /* ---------------- WSPÓLNY RUNNER PYTAŃ W ARKUSZU ---------------- */
  function openQuestionSheet(title, qs, opts) {
    opts = opts || {};
    const sheet = el(`<div class="sheet">
      <div class="sheet-head"><button class="close-x">×</button><div class="step-bar"><i style="width:0%"></i></div>
        <span class="stat" style="font-size:12px">${esc(title)}</span></div>
      <div class="sheet-body" id="body"></div><div class="sheet-foot" id="foot"></div></div>`);
    openSheet(sheet);
    sheet.querySelector(".close-x").onclick = () => { closeSheet(); (opts.back || renderMap)(); };
    const ctx = {
      body: sheet.querySelector("#body"), foot: sheet.querySelector("#foot"),
      next: () => { closeSheet(); (opts.onDone || opts.back || renderMap)(); }
    };
    runQuestions(ctx, qs, Object.assign({ title: title }, opts));
  }

  /* ---------------- POWTÓRKA: SŁABE PUNKTY ---------------- */
  function renderReview() {
    closeSheet();
    const list = (state.wrong || []).slice(0, 20);
    app.innerHTML = "";
    if (!list.length) {
      app.appendChild(el(`<div class="view"><h1 class="view-title">♻️ Słabe punkty</h1>
        <p class="view-sub">Brak błędów do powtórki — świetna robota! 🎉 Gdy pomylisz się w jakimś zadaniu, trafi ono tutaj do przećwiczenia.</p>
        <button class="btn primary" id="b">← Wróć na szlak</button></div>`));
      app.querySelector("#b").onclick = renderMap;
      return;
    }
    const sigs = list.map(w => w.sig), qs = list.map(w => w.q);
    openQuestionSheet("Powtórka — słabe punkty", qs, {
      noRecord: true,
      onResult: (ok, q, i) => { if (ok) { state.wrong = state.wrong.filter(w => w.sig !== sigs[i]); save(); } },
      onDone: () => { setFlag("didReview"); addXp(15); renderTop(); renderMap(); }
    });
  }

  /* ---------------- FISZKI SRS ---------------- */
  function renderSRS() {
    closeSheet();
    const due = srsDue();
    app.innerHTML = "";
    if (!due.length) {
      const nd = srsNextDue(), total = Object.keys(state.srs).length;
      app.appendChild(el(`<div class="view"><h1 class="view-title">🧠 Fiszki SRS</h1>
        <p class="view-sub">${total ? "Wszystkie fiszki na teraz powtórzone! 👏 " + (nd ? "Następna powtórka " + relTime(nd) + "." : "") : "Nie masz jeszcze fiszek. Ukończ lekcję ze słownictwem albo zaimportuj własne słówka — trafią tu automatycznie i będą wracać w optymalnych odstępach."}</p>
        <p style="color:#93a4c4">Słówek w systemie powtórek: <b>${total}</b></p>
        <div class="cta-row"><button class="btn" id="imp">📥 Importuj słówka</button><button class="btn primary" id="b">← Szlak</button></div></div>`));
      app.querySelector("#b").onclick = renderMap;
      app.querySelector("#imp").onclick = renderImport;
      return;
    }
    let idx = 0, reviewed = 0;
    if (state.srsMode !== "en") state.srsMode = "pl";
    const view = el(`<div class="view"><h1 class="view-title">🧠 Fiszki SRS</h1>
      <div class="srs-modebar">
        <span class="srs-modelbl">Najpierw pokazuj:</span>
        <div class="srs-toggle" id="modeToggle" role="tablist">
          <button class="srs-mode" data-mode="pl">🇵🇱 polski</button>
          <button class="srs-mode" data-mode="en">🇬🇧 angielski</button>
        </div>
      </div>
      <p class="view-sub" id="cnt"></p><div id="card"></div></div>`);
    app.appendChild(view);
    const cardWrap = view.querySelector("#card");
    const toggle = view.querySelector("#modeToggle");
    function syncToggle() {
      toggle.querySelectorAll(".srs-mode").forEach(b =>
        b.classList.toggle("active", b.dataset.mode === state.srsMode));
    }
    toggle.querySelectorAll(".srs-mode").forEach(b => b.onclick = () => {
      if (state.srsMode === b.dataset.mode) return;
      state.srsMode = b.dataset.mode; save(); syncToggle(); card();
    });
    syncToggle();
    function card() {
      if (idx >= due.length) {
        setFlag("didSrs"); addXp(reviewed); renderTop();
        view.querySelector("#cnt").textContent = "";
        cardWrap.innerHTML = `<div class="celebrate"><div class="big">🎉</div><h2>Powtórka ukończona!</h2>
          <p style="color:#93a4c4">Przećwiczono ${reviewed} fiszek. +${reviewed} XP. Wróć później po kolejne.</p></div>`;
        const b = el(`<button class="btn primary" style="margin-top:14px">← Wróć na szlak</button>`); b.onclick = renderMap; cardWrap.appendChild(b);
        return;
      }
      const c = due[idx];
      const enFirst = state.srsMode === "en";
      view.querySelector("#cnt").textContent = `Fiszka ${idx + 1} / ${due.length}`;
      // Przód = strona pytania (zależnie od trybu), tył = tłumaczenie.
      const frontHtml = enFirst
        ? `${esc(c.en)} <button class="btn small" data-say>🔊</button>`
        : `${esc(c.pl || "—")}`;
      const backHtml = enFirst
        ? `<div class="srs-pl">${esc(c.pl || "—")}</div>`
        : `<div class="srs-pl">${esc(c.en)} <button class="btn small" data-say>🔊</button></div>`;
      cardWrap.innerHTML = `<div class="srs-card">
        <div class="srs-front">${frontHtml}</div>
        <div class="srs-back hidden" id="back">${backHtml}</div>
        <div class="srs-actions" id="act"><button class="btn primary" id="reveal">Pokaż tłumaczenie</button></div></div>`;
      const frontSay = cardWrap.querySelector(".srs-front [data-say]");
      if (frontSay) frontSay.onclick = e => { e.stopPropagation(); speak(c.en); };
      // W trybie EN czytamy słowo od razu; w trybie PL dopiero po odsłonięciu.
      if (enFirst) speak(c.en);
      cardWrap.querySelector("#reveal").onclick = () => {
        cardWrap.querySelector("#back").classList.remove("hidden");
        const backSay = cardWrap.querySelector(".srs-back [data-say]");
        if (backSay) backSay.onclick = e => { e.stopPropagation(); speak(c.en); };
        if (!enFirst) speak(c.en);
        cardWrap.querySelector("#act").innerHTML = `
          <button class="btn small grade" data-q="0">Znów</button>
          <button class="btn small grade" data-q="3">Trudne</button>
          <button class="btn small grade" data-q="4">Dobre</button>
          <button class="btn small grade" data-q="5">Łatwe</button>`;
        cardWrap.querySelectorAll(".grade").forEach(b => b.onclick = () => { srsGrade(c.id, +b.dataset.q); reviewed++; idx++; sfx("win"); card(); });
      };
    }
    card();
  }

  /* ---------------- IMPORT WŁASNYCH SŁÓWEK ---------------- */
  function renderImport() {
    closeSheet();
    app.innerHTML = "";
    const view = el(`<div class="view"><h1 class="view-title">📥 Import / moje słówka</h1>
      <p class="view-sub">Wklej własne słówka — jedna para na linię. Separatory: <code>=</code>, <code>;</code>, tabulator lub <code> - </code>. Możesz też wkleić sam angielski tekst — utworzymy fiszki (do nauki ze słuchu i pisowni).</p>
      <textarea id="ta" class="import-ta" placeholder="dog = pies
to improve = poprawiać
weather = pogoda"></textarea>
      <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0">
        <input id="nm" class="gap-input" style="flex:1;min-width:160px" placeholder="Nazwa talii (opcjonalnie)">
        <button class="btn primary" id="add">Utwórz talię</button>
      </div>
      <div id="decks"></div>
      <button class="btn" id="back" style="margin-top:14px">← Wróć na szlak</button></div>`);
    app.appendChild(view);
    view.querySelector("#back").onclick = renderMap;
    function parse(text) {
      const words = [];
      (text || "").split(/\n+/).forEach(line => {
        line = line.trim(); if (!line) return;
        const m = line.split(/\s*[=;\t]\s*|\s+-\s+/);
        if (m.length >= 2 && m[0] && m[1]) words.push({ en: m[0].trim(), pl: m.slice(1).join(" ").trim() });
        else line.replace(/[^A-Za-z' ]/g, " ").split(/\s+/).forEach(w => { if (w.length > 2) words.push({ en: w.toLowerCase(), pl: "" }); });
      });
      const seen = {}; return words.filter(w => { const k = norm(w.en); if (!k || seen[k]) return false; seen[k] = 1; return true; });
    }
    view.querySelector("#add").onclick = () => {
      const words = parse(view.querySelector("#ta").value);
      if (!words.length) { toast("Wklej najpierw słówka."); return; }
      const name = view.querySelector("#nm").value.trim() || ("Moja talia " + ((state.custom || []).length + 1));
      state.custom = state.custom || [];
      state.custom.push({ id: "d" + Date.now(), name: name, words: words, created: Date.now() });
      words.forEach(w => srsAdd(w.en, w.pl));
      GLOSSARY = null; setFlag("didImport"); save(); renderTop();
      toast("Dodano talię „" + name + "” (" + words.length + " słówek) — trafiły też do powtórek SRS.");
      view.querySelector("#ta").value = ""; view.querySelector("#nm").value = "";
      drawDecks();
    };
    function drawDecks() {
      const box = view.querySelector("#decks"); box.innerHTML = "";
      if (!(state.custom || []).length) { box.appendChild(el(`<p class="footer-note">Nie masz jeszcze własnych talii.</p>`)); return; }
      box.appendChild(el(`<h2 style="font-size:18px;margin:14px 0 8px">Twoje talie</h2>`));
      state.custom.slice().reverse().forEach(d => {
        const row = el(`<div class="deck-row"><div><b>${esc(d.name)}</b> <span class="footer-note">${d.words.length} słówek</span></div>
          <div class="row" style="display:flex;gap:6px;flex-wrap:wrap">
            <button class="btn small" data-learn>📖 Ucz się</button>
            <button class="btn small" data-quiz>📝 Quiz</button>
            <button class="btn small ghost" data-del>🗑️</button></div></div>`);
        row.querySelector("[data-learn]").onclick = () => learnDeck(d);
        row.querySelector("[data-quiz]").onclick = () => quizDeck(d);
        row.querySelector("[data-del]").onclick = () => { state.custom = state.custom.filter(x => x.id !== d.id); GLOSSARY = null; save(); drawDecks(); };
        box.appendChild(row);
      });
    }
    drawDecks();
  }
  function learnDeck(d) {
    const sheet = el(`<div class="sheet"><div class="sheet-head"><button class="close-x">×</button><div class="step-bar"><i style="width:100%"></i></div><span class="stat" style="font-size:12px">${esc(d.name)}</span></div><div class="sheet-body" id="body"></div><div class="sheet-foot" id="foot"></div></div>`);
    openSheet(sheet);
    sheet.querySelector(".close-x").onclick = () => { closeSheet(); renderImport(); };
    const body = sheet.querySelector("#body");
    body.innerHTML = `<div class="theory"><h2>📖 ${esc(d.name)}</h2></div>`;
    d.words.forEach(w => {
      const f = el(`<div class="flash"><div><div class="en">${esc(w.en)}</div><div class="pl">${esc(w.pl || "—")}</div></div><button class="btn small">🔊</button></div>`);
      f.querySelector("button").onclick = () => speak(w.en);
      body.appendChild(f);
    });
    footNext(sheet.querySelector("#foot"), "Gotowe →", () => { closeSheet(); renderImport(); });
  }
  function quizDeck(d) {
    const withPl = d.words.filter(w => w.pl);
    const qs = [];
    d.words.forEach(w => {
      if (w.pl && withPl.length >= 4) {
        const others = withPl.filter(x => x !== w).sort(() => Math.random() - .5).slice(0, 3).map(x => x.pl);
        const opts = others.concat([w.pl]).sort(() => Math.random() - .5);
        qs.push({ kind: "choice", q: "Co znaczy „" + w.en + "”?", options: opts, answer: opts.indexOf(w.pl) });
      }
      qs.push({ kind: "dictation", q: "Posłuchaj i wpisz słowo:", audio: w.en, answer: w.en });
    });
    const sel = qs.sort(() => Math.random() - .5).slice(0, 12);
    if (!sel.length) { toast("Za mało słówek na quiz."); return; }
    openQuestionSheet("Quiz: " + d.name, sel, { back: renderImport, onDone: () => { addXp(10); renderTop(); renderImport(); } });
  }

  /* ---------------- TROFEA / ODZNAKI ---------------- */
  function renderTrophies() {
    closeSheet();
    app.innerHTML = "";
    const earned = BADGES.filter(b => state.badges[b.id]).length;
    const view = el(`<div class="view"><h1 class="view-title">🏆 Trofea i odznaki</h1>
      <p class="view-sub">Zdobyto ${earned} / ${BADGES.length}. Ucz się codziennie, zaliczaj poziomy i powtarzaj materiał, by odblokować kolejne.</p>
      <div class="badge-grid" id="g"></div>
      <button class="btn" id="back" style="margin-top:16px">← Wróć na szlak</button></div>`);
    app.appendChild(view);
    view.querySelector("#back").onclick = renderMap;
    const g = view.querySelector("#g");
    BADGES.forEach(b => {
      const has = state.badges[b.id];
      g.appendChild(el(`<div class="badge-card ${has ? "earned" : "locked"}">
        <div class="bi">${has ? b.icon : "🔒"}</div><div class="bn">${esc(b.name)}</div><div class="bd">${esc(b.desc)}</div></div>`));
    });
  }

  /* ---------------- LIGA TYGODNIOWA (lokalna) ---------------- */
  function renderLeague() {
    closeSheet();
    app.innerHTML = "";
    const wk = weekKey(), myXp = (state.weekXp || {})[wk] || 0;
    const names = ["Kasia", "Tomek", "Olek", "Marta", "Piotr", "Ela", "Bartek", "Zosia", "Adam", "Nina"];
    let seed = 0; for (let i = 0; i < wk.length; i++) seed = (seed * 31 + wk.charCodeAt(i)) >>> 0;
    function rnd() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
    const bots = names.map(n => ({ name: n, xp: Math.round(40 + rnd() * 460) }));
    const all = bots.concat([{ name: "Ty", me: true, xp: myXp }]).sort((a, b) => b.xp - a.xp);
    const rank = all.findIndex(x => x.me) + 1;
    const view = el(`<div class="view"><h1 class="view-title">📊 Liga tygodniowa</h1>
      <p class="view-sub">Tydzień ${wk}. Zdobywaj XP, by piąć się w rankingu — top 3 awansuje, ostatni spadają. Lista resetuje się co tydzień. <i>(Wersja lokalna: przeciwnicy generowani na Twoim urządzeniu; liga ze znajomymi wymagałaby konta w chmurze.)</i></p>
      <div class="ladder" id="l"></div>
      <button class="btn" id="back" style="margin-top:16px">← Wróć na szlak</button></div>`);
    app.appendChild(view);
    view.querySelector("#back").onclick = renderMap;
    const l = view.querySelector("#l");
    all.forEach((x, i) => {
      const zone = i < 3 ? "promo" : i >= all.length - 2 ? "drop" : "";
      l.appendChild(el(`<div class="rank-row ${x.me ? "me" : ""} ${zone}">
        <span class="rk">${i + 1}</span><span class="nm">${i < 3 ? "🏅 " : ""}${esc(x.name)}</span><span class="xp">${x.xp} XP</span></div>`));
    });
    l.appendChild(el(`<p class="footer-note">Jesteś na ${rank}. miejscu z ${myXp} XP w tym tygodniu.</p>`));
  }

  /* ---------------- ŚCIEŻKI TEMATYCZNE ---------------- */
  function renderPaths() {
    closeSheet();
    app.innerHTML = "";
    const paths = C.paths || [];
    const view = el(`<div class="view"><h1 class="view-title">🧭 Ścieżki tematyczne</h1>
      <p class="view-sub">Dodatkowe szlaki obok głównej wspinaczki CEFR — ucz się pod konkretny cel. Postęp liczony jest osobno.</p>
      <div id="pl"></div>
      <button class="btn" id="back" style="margin-top:16px">← Wróć na szlak</button></div>`);
    app.appendChild(view);
    view.querySelector("#back").onclick = renderMap;
    const pl = view.querySelector("#pl");
    if (!paths.length) { pl.appendChild(el(`<p class="footer-note">Brak ścieżek.</p>`)); return; }
    paths.forEach(p => {
      const done = (p.units || []).filter(u => isUnitDoneRaw(p, u)).length;
      const card = el(`<div class="path-card" style="border-color:${p.color || "#38bdf8"}">
        <div class="path-h"><span class="path-ic">${p.icon || "🧭"}</span> <b>${esc(p.name)}</b> <span class="footer-note">${done}/${p.units.length} ukończone</span></div>
        <div class="path-sub">${esc(p.subtitle || "")}</div><div class="path-units"></div></div>`);
      const pu = card.querySelector(".path-units");
      p.units.forEach(u => {
        const ud = isUnitDoneRaw(p, u);
        const b = el(`<button class="path-unit ${ud ? "done" : ""}">${ud ? "✓ " : (u.icon || "•") + " "}${esc(u.title)}</button>`);
        b.onclick = () => openUnit(p, u, renderPaths);
        pu.appendChild(b);
      });
      pl.appendChild(card);
    });
  }

  /* ---------------- OVERLAY / SHEET ---------------- */
  function openSheet(sheet) { overlay.innerHTML = ""; overlay.appendChild(sheet); overlay.classList.remove("hidden"); }
  function closeSheet() { overlay.classList.add("hidden"); overlay.innerHTML = ""; if (window.speechSynthesis) speechSynthesis.cancel(); }
  overlay.addEventListener("click", e => { if (e.target === overlay) { closeSheet(); renderMap(); } });

  /* ---------------- YouTube ID ---------------- */
  function ytId(url) {
    if (!url) return "";
    const m = String(url).match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : (/^[A-Za-z0-9_-]{11}$/.test(url) ? url : "");
  }

  /* ---------------- START ---------------- */
  renderTop();
  renderStart();
  window.addEventListener("keydown", e => {
    if (e.key === "Enter") { const b = overlay.querySelector("#nextBtn:not(:disabled)"); if (b) b.click(); }
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) { closeSheet(); renderMap(); }
  });
})();
