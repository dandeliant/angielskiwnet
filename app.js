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
    try {
      const s = JSON.parse(localStorage.getItem(SKEY));
      if (s && s.done) return s;
    } catch (e) {}
    return { done: {}, xp: 0, streak: 0, lastDay: null, startLevel: "A1", edit: false };
  }
  function save() { localStorage.setItem(SKEY, JSON.stringify(state)); }
  function stepKey(l, u, s) { return l + "/" + u + "/" + s; }
  function unitKey(l, u) { return l + "/" + u; }

  function bumpStreak() {
    const today = new Date().toDateString();
    if (state.lastDay !== today) {
      const yest = new Date(Date.now() - 864e5).toDateString();
      state.streak = state.lastDay === yest ? state.streak + 1 : 1;
      state.lastDay = today;
    }
  }
  function addXp(n) { state.xp += n; bumpStreak(); save(); }

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
  function toast(msg) {
    const t = el(`<div style="position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:99;background:#1a2b4a;border:1px solid #243a5e;color:#e8eefc;padding:12px 18px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.5)">${esc(msg)}</div>`);
    document.body.appendChild(t);
    setTimeout(() => { t.style.transition = ".4s"; t.style.opacity = "0"; }, 1800);
    setTimeout(() => t.remove(), 2300);
  }
  // klik na .say -> wymowa
  document.addEventListener("click", e => {
    const s = e.target.closest(".say");
    if (s) speak(s.dataset.say || s.textContent);
  });

  /* ---------------- TOPBAR ---------------- */
  function renderTop() {
    const bar = document.getElementById("topbar");
    bar.innerHTML = `
      <div class="logo"><span class="peak">🏔️</span> Angielski<b>wnet</b></div>
      <div class="spacer"></div>
      <span class="stat"><span class="ico">🔥</span>${state.streak}</span>
      <span class="stat"><span class="ico">⭐</span>${state.xp} XP</span>
      <button class="btn ghost small" id="btnEdit">${state.edit ? "✏️ Edycja: WŁ" : "Edytuj treść"}</button>
      <button class="btn ghost small" id="btnMap">Mapa</button>
    `;
    bar.querySelector("#btnMap").onclick = renderMap;
    bar.querySelector("#btnEdit").onclick = () => { state.edit = !state.edit; save(); renderTop(); renderMap(); };
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
  // współrzędne poziomów na zboczu: A1 (dół) ... C2 (szczyt)
  const MTN_PTS = [[15, 90], [29, 75], [42, 60], [55, 45], [64, 29], [50, 12]];
  function buildMountain() {
    const reach = reachableIdx();
    const path = MTN_PTS.map(p => p.join(",")).join(" ");
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
      <p class="view-sub">Start na dole (A1), wspinasz się w górę aż po szczyt (C2). Ukończony etap odblokowuje wyższy.</p>`));

    const collapsed = !!state.mtnCollapsed;
    const toggle = el(`<button class="btn small mtn-toggle">${collapsed ? "🏔️ Pokaż górę" : "⟨ Zwiń podgląd góry"}</button>`);
    toggle.onclick = () => { state.mtnCollapsed = !state.mtnCollapsed; save(); renderMap(); };
    wrap.appendChild(toggle);

    const layout = el(`<div class="map-wrap ${collapsed ? "collapsed" : ""}"></div>`);
    if (!collapsed) layout.appendChild(buildMountain());

    const panel = el(`<div class="trail-panel"></div>`);
    const trail = el(`<div class="trail"></div>`);
    const reach = reachableIdx();
    // odwracamy kolejność: szczyt (C2) na górze, baza (A1) na dole — wspinaczka idzie w górę
    C.levels.slice().reverse().forEach(level => {
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
      // jednostki też odwrócone: w obrębie poziomu wspinamy się od u1 (niżej) do ostatniej (wyżej)
      const unitsRev = level.units.map((u, idx) => ({ u, idx })).reverse();
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
  function openUnit(level, unit) {
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
    sheet.querySelector(".close-x").onclick = () => { closeSheet(); renderMap(); };
    const body = sheet.querySelector("#body");
    const foot = sheet.querySelector("#foot");

    const next = () => {
      state.done[stepKey(level.id, unit.id, step.id)] = true;
      addXp(step.type === "boss" ? 30 : 10);
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
    const sheet = el(`
      <div class="sheet"><div class="sheet-body celebrate">
        <div class="big">🎉🏕️</div>
        <h2>Zdobyto: ${esc(unit.title)}</h2>
        <p style="color:#93a4c4">Świetna robota! Kolejny punkt na szlaku zaliczony.</p>
        <button class="btn primary" id="cont">Wróć na szlak</button>
      </div></div>`);
    openSheet(sheet);
    sheet.querySelector("#cont").onclick = () => { closeSheet(); renderMap(); };
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
      footNext(ctx.foot, "Rozumiem, dalej →", ctx.next);
    },

    vocab(ctx) {
      const s = ctx.step;
      ctx.body.innerHTML = `<div class="theory"><h2>${esc(s.title)}</h2></div>`;
      (s.words || []).forEach(w => {
        const f = el(`<div class="flash">
          <div><div class="en">${esc(w.en)}</div><div class="pl">${esc(w.pl)}</div>
          ${w.example ? `<div class="ex">„${esc(w.example)}”</div>` : ""}</div>
          <button class="btn small">🔊</button></div>`);
        f.querySelector("button").onclick = () => speak(w.example || w.en);
        ctx.body.appendChild(f);
      });
      footNext(ctx.foot, "Umiem te słowa →", ctx.next);
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
        box.appendChild(buildRecordBox(p.en));
        ctx.body.appendChild(box);
      });
      footNext(ctx.foot, "Gotowe →", ctx.next);
    }
  };

  /* ---------------- QUIZ / BOSS (kilka typów pytań) ---------------- */
  function quizLike(ctx) {
    const s = ctx.step;
    const qs = s.questions || [];
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
      ctx.body.innerHTML = `<p class="view-sub">${s.title} • pytanie ${qi + 1}/${qs.length}</p>`;
      const node = (QTYPES[q.kind] || QTYPES.choice)(q, verdict);
      ctx.body.appendChild(node);
      // przycisk „Sprawdź”/„Dalej”
      footNext(ctx.foot, "Sprawdź", () => node._check && node._check(), false);
      ctx.foot.querySelector("#nextBtn").disabled = true;
      node._enableCheck = () => { ctx.foot.querySelector("#nextBtn").disabled = false; };
    }
    function verdict(ok, node) {
      if (ok) correct++;
      const fb = el(`<div class="feedback ${ok ? "ok" : "no"}">${ok ? "✅ Dobrze!" : "❌ Spróbuj zapamiętać poprawną odpowiedź."}</div>`);
      ctx.body.appendChild(fb);
      footNext(ctx.foot, "Dalej →", () => { qi++; show(); }, true);
    }
    show();
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
      node._check = () => {
        const ok = norm(inp.value) === norm(q.answer);
        inp.style.borderColor = ok ? "#22c55e" : "#f87171";
        inp.disabled = true;
        if (!ok) inp.value = inp.value + "  →  " + q.answer;
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
    }
  };

  /* ---------------- BOX NAGRYWANIA + OCENA WYMOWY ---------------- */
  function buildRecordBox(target) {
    const box = el(`<div class="record-box">
      <div class="row" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn small" data-rec>🎙️ Nagraj</button>
        <button class="btn small" data-play2 disabled>▶️ Odtwórz</button>
        <button class="btn small" data-score>🎯 Oceń wymowę</button>
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

    box.querySelector("[data-score]").onclick = () => {
      out.innerHTML = `<div class="heard">🎧 Mów teraz… (czytaj zdanie na głos)</div>`;
      const r = recognizeOnce(
        said => {
          const sc = similarity(target, said);
          const cls = sc >= 80 ? "good" : sc >= 55 ? "mid" : "low";
          out.innerHTML = `<span class="score-pill ${cls}">Wymowa: ${sc}%</span>
            <div class="heard">Usłyszano: „${esc(said)}”</div>`;
        },
        err => {
          out.innerHTML = `<div class="heard">Ocena na żywo niedostępna (${esc(err)}). Użyj „Nagraj” + „Odtwórz”, by porównać się ze wzorem 🔊.</div>`;
        }
      );
      if (!r) out.innerHTML = `<div class="heard">Twoja przeglądarka nie wspiera rozpoznawania mowy. Użyj Chrome (z internetem), albo porównaj ręcznie: 🔊 wzór vs ▶️ Twoje nagranie.</div>`;
    };
    return box;
  }

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
