/* C2 — dodatkowe tematy, część 2 (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "C2"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- C2 / x7 — Tryb łączący i struktury hipotetyczne (gramatyka) ---------------- */
    {
      id: "x7", title: "Tryb łączący i struktury hipotetyczne — subjunctive i inwersja warunkowa", icon: "🧮",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: subjunctive i zaawansowane warunki", html: `
          <p>Na poziomie C2 tryb łączący (the subjunctive) i wyrafinowane struktury hipotetyczne pozwalają wyrażać żądania, sugestie i nierzeczywiste warunki w formalnym, wyważonym rejestrze.</p>
          <h3>Mandative subjunctive (po czasownikach żądania i sugestii)</h3>
          <p>Po <i>suggest, demand, insist, recommend, propose, require</i> używamy formy podstawowej (bez „-s”, bez „to”):</p>
          <p><span class="say">I suggest that he be informed immediately.</span> (nie „is informed”)</p>
          <p><span class="say">The board insisted that the report be revised.</span></p>
          <p><span class="say">It is essential that every member arrive on time.</span></p>
          <h3>Were-subjunctive i inwersja warunkowa</h3>
          <p><span class="say">If I were you…</span> oraz formalna inwersja bez „if”:</p>
          <table class="t-table">
            <tr><th>Z „if”</th><th>Inwersja formalna</th></tr>
            <tr><td>If it were not for her support…</td><td>Were it not for her support…</td></tr>
            <tr><td>If I had known…</td><td>Had I known…</td></tr>
            <tr><td>If they should fail…</td><td>Should they fail…</td></tr>
          </table>
          <h3>Wyrażenia stałe z subjunctive</h3>
          <p><span class="say">Be that as it may</span>, <span class="say">come what may</span>, <span class="say">far be it from me to…</span>, <span class="say">suffice it to say…</span>, <span class="say">God forbid…</span></p>
          <p class="tip">💡 „I suggest he goes” bywa akceptowane w mowie potocznej, ale w formalnym piśmie poprawny jest mandative subjunctive: <span class="say">I suggest he go</span>.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: subjunctive i hipotetyczność", words: [
          { en: "mandative subjunctive", pl: "tryb łączący po czasownikach żądania/sugestii", example: "The mandative subjunctive demands the base form: 'that he be present'." },
          { en: "were it not for", pl: "gdyby nie (formalna inwersja)", example: "Were it not for the rain, we would have finished." },
          { en: "had I known", pl: "gdybym wiedział (inwersja zamiast 'if I had known')", example: "Had I known the risks, I would have declined." },
          { en: "should you require", pl: "gdyby Pan/Pani potrzebował(a) (uprzejma inwersja)", example: "Should you require assistance, do not hesitate to ask." },
          { en: "suffice it to say", pl: "dość powiedzieć, że (wyrażenie z subjunctive)", example: "Suffice it to say, the experiment did not go as planned." },
          { en: "far be it from me", pl: "nie mnie sądzić, daleki jestem od tego, by", example: "Far be it from me to question your judgement." },
          { en: "come what may", pl: "niech się dzieje, co chce", example: "We will defend this principle, come what may." },
          { en: "lest", pl: "aby nie, żeby nie (formal, z subjunctive)", example: "He spoke softly lest the children be woken." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: subjunctive i warunki", theoryRef: "C2/x7/s1", questions: [
          { kind: "choice", q: "Poprawny mandative subjunctive:", options: ["I insist that she is told.", "I insist that she be told.", "I insist that she will be told."], answer: 1, theoryRef: "C2/x7/s1" },
          { kind: "transform", q: "Przekształć w formalną inwersję bez „if”:", given: "If it were not for your help, we would have failed.", hint: "rozpocznij od „Were it not for…”", answer: ["Were it not for your help, we would have failed.", "Were it not for your help we would have failed."] },
          { kind: "dropdown", q: "___ I known earlier, I would have intervened.", options: ["Had", "Have", "If had"], answer: 0, theoryRef: "C2/x7/s1" },
          { kind: "gap", q: "It is essential that every delegate ___ on time. (wpisz formę podstawową czasownika 'arrive')", answer: "arrive", theoryRef: "C2/x7/s1" },
          { kind: "truefalse", q: "„Were it not for…” to formalny odpowiednik „If it were not for…”.", answer: true },
          { kind: "multi", q: "Które zdania zawierają poprawny subjunctive lub inwersję warunkową? (zaznacz wszystkie)", options: ["I recommend that he stay.", "Should you need anything, call me.", "If I would be you, I'd wait.", "Had they listened, this could have been avoided."], answers: [0, 1, 3] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: formalna rekomendacja komisji", intro: "Fragment formalnego zalecenia, gęsty od trybu łączącego i inwersji.", theoryRef: "C2/x7/s1", passage: `
          <p>The committee recommends that the protocol be amended without delay and that each department appoint a compliance officer. It further insists that no contract be signed until the revised terms have been ratified. Were the deadline to slip, the consequences could prove considerable; should any member object, those objections must be minuted in full.</p>
          <p>Far be it from the panel to prejudge the outcome. Suffice it to say that, had the earlier warnings been heeded, the present difficulties might never have arisen. The board therefore proposes that an independent review be commissioned, lest a recurrence go unchecked. Come what may, transparency must be preserved.</p>` , questions: [
          { kind: "choice", q: "Jaki rejestr i ton ma ten fragment?", options: ["Potoczny i swobodny", "Formalny, z trybem łączącym", "Ironiczny"], answer: 1, theoryRef: "C2/x7/s1" },
          { kind: "truefalse", q: "W zdaniu „that the protocol be amended” użyto mandative subjunctive.", answer: true },
          { kind: "gap", q: "The board proposes that an independent review ___ commissioned. (wpisz formę podstawową 'to be')", answer: "be" },
          { kind: "choice", q: "„Lest a recurrence go unchecked” znaczy:", options: ["Ponieważ nawrót pozostanie bez kontroli", "Aby nawrót nie pozostał bez kontroli", "Mimo że nawrót pozostaje bez kontroli"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: formalne zalecenia", theoryRef: "C2/x7/s1", recordLine: 1, lines: [
          { speaker: "Doradca", en: "What course of action would you advise, given the irregularities?", pl: "Jakie postępowanie by Pan/Pani doradził(a) wobec tych nieprawidłowości?" },
          { speaker: "Ty", en: "I'd recommend that the audit be reopened and that no payment be authorised in the meantime. Were the matter to escalate, we'd want a full record.", pl: "Zaleciłbym, aby audyt wznowiono i aby w międzyczasie nie autoryzowano żadnej płatności. Gdyby sprawa się zaostrzyła, potrzebowalibyśmy pełnej dokumentacji." },
          { speaker: "Doradca", en: "And if the directors resist?", pl: "A jeśli dyrektorzy będą się sprzeciwiać?" },
          { speaker: "Ty", en: "Should they resist, their objections must be minuted. Far be it from me to assume bad faith, but suffice it to say the timing is unfortunate.", pl: "Jeśli się sprzeciwią, ich zastrzeżenia muszą zostać zaprotokołowane. Daleki jestem od zakładania złej woli, ale dość powiedzieć, że moment jest niefortunny." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: subjunctive i hipotetyczność", questions: [
          { kind: "choice", q: "Która forma jest poprawna w formalnym piśmie?", options: ["We demand that he apologises.", "We demand that he apologise.", "We demand that he will apologise."], answer: 1 },
          { kind: "transform", q: "Przekształć w inwersję bez „if”:", given: "If I had realised the cost, I would have refused.", hint: "rozpocznij od „Had I…”", answer: ["Had I realised the cost, I would have refused.", "Had I realised the cost I would have refused."] },
          { kind: "dropdown", q: "___ you change your mind, the offer remains open.", options: ["Should", "Would", "Were"], answer: 0 },
          { kind: "gap", q: "He whispered ___ the baby be woken. (wpisz formalny spójnik 'aby nie')", answer: "lest" },
          { kind: "truefalse", q: "W zdaniu „It is vital that she be present” forma „be” to mandative subjunctive.", answer: true },
          { kind: "match", pairs: [{ a: "were it not for", b: "gdyby nie" }, { a: "come what may", b: "niech się dzieje, co chce" }, { a: "suffice it to say", b: "dość powiedzieć" }, { a: "lest", b: "aby nie" }] }
        ]}
      ]
    },

    /* ---------------- C2 / x8 — Niuans i bliskoznaczność (leksyka) ---------------- */
    {
      id: "x8", title: "Niuans i bliskoznaczność — odcienie znaczenia synonimów", icon: "🌈",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: bliskoznaczność, odcienie znaczenia i siła wyrazu", html: `
          <p>Synonimy niemal nigdy nie są wymienne. Różni je <b>natężenie</b>, <b>zakres</b>, <b>nacechowanie</b> i typowy <b>kontekst</b>. Mistrzostwo C2 to wyczucie, który odcień jest właściwy.</p>
          <h3>Stopniowanie natężenia</h3>
          <table class="t-table">
            <tr><th>Pole znaczeniowe</th><th>Słabsze → silniejsze</th></tr>
            <tr><td>złość</td><td>annoyed → irritated → angry → furious → livid</td></tr>
            <tr><td>zaskoczenie</td><td>surprised → startled → astonished → flabbergasted</td></tr>
            <tr><td>zmęczenie</td><td>tired → weary → exhausted → spent</td></tr>
            <tr><td>piękny</td><td>pretty → attractive → beautiful → stunning → exquisite</td></tr>
          </table>
          <h3>Subtelny odcień, nie samo natężenie</h3>
          <p><span class="say">slim</span> (pochlebnie szczupły) kontra <span class="say">skinny</span> (chudy, nieładnie) kontra <span class="say">lean</span> (szczupły i wysportowany).</p>
          <p><span class="say">famous</span> (sławny) kontra <span class="say">notorious</span> (sławny z czegoś złego) kontra <span class="say">renowned</span> (ceniony, uznany).</p>
          <h3>Zakres i kolokacja</h3>
          <p><span class="say">a big mistake</span> kontra <span class="say">a grave error</span> kontra <span class="say">a glaring blunder</span> — każdy pasuje do innego rejestru i wagi.</p>
          <p class="tip">💡 „Notorious” i „infamous” są negatywne, mimo że słownik podaje je jako synonimy słowa „famous” — pomyłka tu potrafi obrazić.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: bliskoznaczne odcienie", words: [
          { en: "notorious", pl: "osławiony, znany z czegoś złego (neg.)", example: "The district is notorious for petty crime." },
          { en: "renowned", pl: "ceniony, uznany (poz.)", example: "She is renowned for her groundbreaking research." },
          { en: "livid", pl: "wściekły, siny ze złości (skrajna złość)", example: "He was absolutely livid when he saw the damage." },
          { en: "flabbergasted", pl: "oniemiały, kompletnie osłupiały", example: "I was flabbergasted by the sheer audacity of it." },
          { en: "lean", pl: "szczupły i jędrny, wysportowany (poz.)", example: "Years of training had left him lean and wiry." },
          { en: "exquisite", pl: "wyśmienity, przepiękny (najwyższy odcień)", example: "The craftsmanship of the watch was exquisite." },
          { en: "glaring", pl: "rażący, jawny (o błędzie/wadzie)", example: "The report contained one glaring omission." },
          { en: "weary", pl: "znużony, zmęczony (z nutą znudzenia)", example: "She grew weary of the endless meetings." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: odcienie znaczenia", theoryRef: "C2/x8/s1", questions: [
          { kind: "choice", q: "Które słowo niesie negatywne zabarwienie?", options: ["renowned", "notorious", "celebrated"], answer: 1, theoryRef: "C2/x8/s1" },
          { kind: "dropdown", q: "After the betrayal he wasn't merely annoyed — he was ___.", options: ["irritated", "livid", "tired"], answer: 1, theoryRef: "C2/x8/s1" },
          { kind: "order", q: "Uporządkuj według rosnącego natężenia (od najsłabszego):", words: ["surprised", "astonished", "flabbergasted"], answer: ["surprised", "astonished", "flabbergasted"] },
          { kind: "truefalse", q: "„Renowned” i „notorious” są wymienne, bo oba znaczą „sławny”.", answer: false },
          { kind: "gap", q: "The watchmaking was utterly ___ — a flawless masterpiece. (wpisz najsilniejszy odcień słowa 'piękny')", answer: "exquisite" },
          { kind: "categorize", q: "Pozytywne czy negatywne nacechowanie?", cats: ["Pozytywne", "Negatywne"], items: [{ t: "renowned", cat: 0 }, { t: "notorious", cat: 1 }, { t: "lean", cat: 0 }, { t: "skinny", cat: 1 }, { t: "exquisite", cat: 0 }, { t: "glaring", cat: 1 }] },
          { kind: "match", pairs: [{ a: "livid", b: "wściekły" }, { a: "weary", b: "znużony" }, { a: "glaring", b: "rażący" }, { a: "flabbergasted", b: "osłupiały" }] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: portret postaci", audio: "Let me describe my old mentor. He was renowned, never notorious, in his field. Lean rather than skinny, he carried himself with quiet authority. He was rarely angry, but when a glaring injustice surfaced, he could turn positively livid. By the end of a long career he had grown weary of academic politics, yet his lectures remained, to the very last, quite exquisite.", instructions: "Wysłuchaj opisu i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "How is the mentor's reputation described?", options: ["Notorious", "Renowned", "Forgotten"], answer: 1 },
          { kind: "truefalse", q: "The speaker calls the mentor skinny rather than lean.", answer: false },
          { kind: "dictation", audio: "He was renowned, never notorious, in his field.", answer: "He was renowned, never notorious, in his field." },
          { kind: "gap", q: "He had grown ___ of academic politics. (wpisz przymiotnik, który usłyszałeś)", answer: "weary" }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: trafny odcień znaczenia", prompts: [
          { en: "She isn't merely famous; in those circles she's positively notorious.", pl: "Ona nie jest po prostu sławna; w tych kręgach jest wręcz osławiona." },
          { en: "I wasn't just surprised by the verdict — I was utterly flabbergasted.", pl: "Werdykt nie tylko mnie zaskoczył — byłem kompletnie osłupiały." },
          { en: "The design was exquisite, the execution flawless, the omission glaring.", pl: "Projekt był wyśmienity, wykonanie nienaganne, a przeoczenie rażące." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: niuans i bliskoznaczność", questions: [
          { kind: "choice", q: "Najsilniejszy odcień złości to:", options: ["annoyed", "irritated", "livid"], answer: 2 },
          { kind: "dropdown", q: "The professor is internationally ___ for her work on climate models.", options: ["notorious", "renowned", "infamous"], answer: 1 },
          { kind: "transform", q: "Wzmocnij zdanie, dobierając silniejszy odcień:", given: "I was surprised by what she said.", hint: "użyj „flabbergasted”", answer: ["I was flabbergasted by what she said.", "I was flabbergasted by what she said!"] },
          { kind: "categorize", q: "Pochwała czy zarzut wobec wyglądu?", cats: ["Pochwała", "Zarzut"], items: [{ t: "lean", cat: 0 }, { t: "skinny", cat: 1 }, { t: "slender", cat: 0 }, { t: "scrawny", cat: 1 }] },
          { kind: "truefalse", q: "„Glaring” najczęściej kolokuje z błędem, przeoczeniem lub niesprawiedliwością.", answer: true },
          { kind: "match", pairs: [{ a: "renowned", b: "ceniony" }, { a: "notorious", b: "osławiony" }, { a: "exquisite", b: "wyśmienity" }] }
        ]}
      ]
    },

    /* ---------------- C2 / x9 — Markery dyskursu i hedging niuansowy (gramatyka) ---------------- */
    {
      id: "x9", title: "Niuansowe markery dyskursu i zabezpieczenia — admittedly, by and large, insofar as", icon: "🧭",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: subtelne markery i ich precyzyjna funkcja", html: `
          <p>Zaawansowane markery dyskursu i ograniczniki (hedges) nie tyle ozdabiają tekst, ile kalibrują jego siłę i zakres. Każdy niesie precyzyjny sygnał pragmatyczny.</p>
          <h3>Markery uogólnienia i zastrzeżenia zakresu</h3>
          <table class="t-table">
            <tr><th>Marker</th><th>Funkcja</th></tr>
            <tr><td><span class="say">by and large</span></td><td>ogólnie rzecz biorąc, z grubsza</td></tr>
            <tr><td><span class="say">on the whole</span></td><td>w sumie, generalnie</td></tr>
            <tr><td><span class="say">for the most part</span></td><td>w przeważającej mierze</td></tr>
            <tr><td><span class="say">insofar as</span></td><td>o tyle, o ile (ograniczenie zakresu)</td></tr>
          </table>
          <h3>Markery ustępstwa i kalibracji</h3>
          <p><span class="say">Admittedly</span> (trzeba przyznać), <span class="say">to be fair</span> (gwoli sprawiedliwości), <span class="say">arguably</span> (można dowodzić, że), <span class="say">notably</span> (co warte odnotowania).</p>
          <h3>Hedging precyzji</h3>
          <p><span class="say">to all intents and purposes</span> (praktycznie rzecz biorąc), <span class="say">in a manner of speaking</span> (poniekąd), <span class="say">strictly speaking</span> (ściśle rzecz biorąc), <span class="say">broadly speaking</span> (z grubsza).</p>
          <p class="tip">💡 „Strictly speaking” zapowiada korektę drobnej nieścisłości; „broadly speaking” sygnalizuje świadome uogólnienie. Mylenie ich myli czytelnika co do twoich intencji.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: markery i ograniczniki", words: [
          { en: "admittedly", pl: "trzeba przyznać, co prawda", example: "Admittedly, the data is incomplete, but the trend is clear." },
          { en: "by and large", pl: "ogólnie rzecz biorąc, z grubsza", example: "By and large, the reforms have been successful." },
          { en: "insofar as", pl: "o tyle, o ile; w zakresie, w jakim", example: "The theory holds insofar as the assumptions remain valid." },
          { en: "arguably", pl: "można dowodzić, że; prawdopodobnie", example: "She is arguably the finest cellist of her generation." },
          { en: "to all intents and purposes", pl: "praktycznie rzecz biorąc, faktycznie", example: "To all intents and purposes, the company is bankrupt." },
          { en: "strictly speaking", pl: "ściśle rzecz biorąc", example: "Strictly speaking, a tomato is a fruit." },
          { en: "to be fair", pl: "gwoli sprawiedliwości, trzeba przyznać", example: "To be fair, he wasn't given much notice." },
          { en: "notwithstanding", pl: "pomimo, mimo (formal)", example: "Notwithstanding these concerns, the plan went ahead." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: markery niuansowe", theoryRef: "C2/x9/s1", questions: [
          { kind: "choice", q: "Które wyrażenie sygnalizuje świadome uogólnienie?", options: ["strictly speaking", "broadly speaking", "to be precise"], answer: 1, theoryRef: "C2/x9/s1" },
          { kind: "dropdown", q: "The policy succeeded ___ as it addressed short-term unemployment.", options: ["insofar", "notwithstanding", "admittedly"], answer: 0, theoryRef: "C2/x9/s1" },
          { kind: "gap", q: "___, the evidence is thin, yet the conclusion is plausible. (wpisz marker ustępstwa znaczący 'trzeba przyznać')", answer: "Admittedly", theoryRef: "C2/x9/s1" },
          { kind: "truefalse", q: "„By and large” oznacza dokładnie i bez wyjątku.", answer: false },
          { kind: "transform", q: "Wstaw marker uogólnienia na początku zdania:", given: "The campaign was a success.", hint: "rozpocznij od „By and large,”", answer: ["By and large, the campaign was a success.", "By and large the campaign was a success."] },
          { kind: "multi", q: "Które wyrażenia łagodzą lub zawężają zakres twierdzenia? (zaznacz wszystkie)", options: ["strictly speaking", "by and large", "absolutely", "insofar as"], answers: [0, 1, 3] },
          { kind: "match", pairs: [{ a: "admittedly", b: "trzeba przyznać" }, { a: "arguably", b: "można dowodzić, że" }, { a: "notwithstanding", b: "pomimo" }, { a: "insofar as", b: "o tyle, o ile" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: wyważona recenzja polityki", intro: "Fragment komentarza, w którym markery precyzyjnie kalibrują sąd.", theoryRef: "C2/x9/s1", passage: `
          <p>By and large, the legislation has achieved its stated aims. Admittedly, implementation has been uneven, and to be fair, the timetable was always ambitious. Yet insofar as the policy sought to reduce waiting times, the figures are, broadly speaking, encouraging. Strictly speaking, a handful of regions still lag behind; notwithstanding these exceptions, the national picture is positive.</p>
          <p>Arguably, the real test lies ahead. To all intents and purposes, the reform is now irreversible, embedded as it is in institutional routine. Critics will, of course, find fault — and not without reason. On the whole, however, this is a programme that has, for the most part, delivered.</p>` , questions: [
          { kind: "choice", q: "Jak autor ogólnie ocenia tę politykę?", options: ["Jako całkowitą porażkę", "Jako w przeważającej mierze udaną", "Bez żadnych zastrzeżeń jako idealną"], answer: 1, theoryRef: "C2/x9/s1" },
          { kind: "truefalse", q: "„To all intents and purposes, the reform is now irreversible” znaczy, że reforma jest praktycznie nieodwracalna.", answer: true },
          { kind: "gap", q: "___ speaking, a handful of regions still lag behind. (wpisz przysłówek znaczący 'ściśle')", answer: "Strictly" },
          { kind: "choice", q: "Funkcją „Admittedly” i „to be fair” w tekście jest:", options: ["Wyrażenie pewności absolutnej", "Uznanie słabości przed obroną tezy", "Zmiana tematu"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: wyważona ocena", theoryRef: "C2/x9/s1", recordLine: 1, lines: [
          { speaker: "Dziennikarz", en: "Would you call the project a success?", pl: "Czy nazwał(a)by Pan/Pani ten projekt sukcesem?" },
          { speaker: "Ty", en: "By and large, yes. Admittedly, we overran the budget, and to be fair, the brief kept shifting. But insofar as the core objectives went, we delivered.", pl: "Ogólnie rzecz biorąc, tak. Co prawda przekroczyliśmy budżet, a gwoli sprawiedliwości — założenia ciągle się zmieniały. Ale o ile chodzi o główne cele, dostarczyliśmy je." },
          { speaker: "Dziennikarz", en: "Some say it's still incomplete.", pl: "Niektórzy twierdzą, że wciąż jest niedokończony." },
          { speaker: "Ty", en: "Strictly speaking, a few features remain pending. Notwithstanding that, the system is, to all intents and purposes, fully operational.", pl: "Ściśle rzecz biorąc, kilka funkcji wciąż czeka. Pomimo tego system jest, praktycznie rzecz biorąc, w pełni operacyjny." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: markery i hedging niuansowy", questions: [
          { kind: "choice", q: "„Strictly speaking, a whale is not a fish.” — funkcja markera:", options: ["Świadome uogólnienie", "Zapowiedź drobnej korekty/precyzji", "Ustępstwo"], answer: 1 },
          { kind: "dropdown", q: "___ the objections, the committee approved the measure.", options: ["Notwithstanding", "Insofar as", "Admittedly"], answer: 0 },
          { kind: "gap", q: "She is ___ the most influential thinker of her era. (wpisz przysłówek znaczący 'można dowodzić, że')", answer: "arguably" },
          { kind: "transform", q: "Złagodź twierdzenie markerem uogólnienia:", given: "Our customers are satisfied.", hint: "użyj „On the whole,”", answer: ["On the whole, our customers are satisfied.", "On the whole our customers are satisfied."] },
          { kind: "truefalse", q: "„Insofar as” ogranicza prawdziwość twierdzenia do określonego zakresu.", answer: true },
          { kind: "match", pairs: [{ a: "by and large", b: "ogólnie rzecz biorąc" }, { a: "to all intents and purposes", b: "praktycznie rzecz biorąc" }, { a: "to be fair", b: "gwoli sprawiedliwości" }] }
        ]}
      ]
    },

    /* ---------------- C2 / x10 — Język idiomatyczny i figuratywny (leksyka) ---------------- */
    {
      id: "x10", title: "Język idiomatyczny i figuratywny — idiomy, metafory, przysłowia", icon: "🦊",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: idiomy, metafory pojęciowe i przysłowia", html: `
          <p>Płynność near-native ujawnia się w trafnym sięganiu po idiomy, metafory pojęciowe i przysłowia. Chodzi o ich znaczenie, rejestr i moment użycia.</p>
          <h3>Idiomy o znaczeniu nieprzejrzystym</h3>
          <p><span class="say">to cut corners</span> (iść na łatwiznę), <span class="say">to jump on the bandwagon</span> (przyłączyć się dla mody), <span class="say">to bury the hatchet</span> (zakopać topór wojenny), <span class="say">the elephant in the room</span> (temat przemilczany, choć oczywisty).</p>
          <h3>Metafory pojęciowe (conceptual metaphors)</h3>
          <p>Całe pola pojęć opisujemy metaforycznie. ARGUMENT TO WOJNA: <span class="say">She attacked every weak point; he defended his position; her criticism was right on target.</span></p>
          <p>CZAS TO PIENIĄDZ: <span class="say">spend time, waste time, invest hours, a costly delay.</span></p>
          <h3>Przysłowia i ich funkcja retoryczna</h3>
          <p><span class="say">Don't count your chickens before they hatch.</span> (nie chwal dnia przed zachodem słońca) <span class="say">A leopard can't change its spots.</span> (natura ciągnie wilka do lasu)</p>
          <p class="tip">💡 Natywni mówcy często przywołują tylko połowę przysłowia — „Well, when in Rome…” — ufając, że rozmówca dopowie resztę. Rozpoznanie aluzji jest znakiem prawdziwego zanurzenia w języku.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: idiomy i wyrażenia figuratywne", words: [
          { en: "to cut corners", pl: "iść na łatwiznę, robić byle jak", example: "They cut corners on safety and paid the price." },
          { en: "the elephant in the room", pl: "przemilczany, lecz oczywisty problem", example: "Nobody mentioned the budget — the elephant in the room." },
          { en: "to bury the hatchet", pl: "zakopać topór wojenny, pogodzić się", example: "After years of feuding, the brothers finally buried the hatchet." },
          { en: "to jump on the bandwagon", pl: "przyłączyć się dla mody/korzyści", example: "Once it became profitable, everyone jumped on the bandwagon." },
          { en: "a blessing in disguise", pl: "szczęście w nieszczęściu", example: "Losing that job was a blessing in disguise." },
          { en: "to throw in the towel", pl: "poddać się, rzucić ręcznik", example: "Don't throw in the towel when you're this close." },
          { en: "to take with a pinch of salt", pl: "brać z przymrużeniem oka, z rezerwą", example: "Take his promises with a pinch of salt." },
          { en: "the tip of the iceberg", pl: "wierzchołek góry lodowej", example: "These complaints are just the tip of the iceberg." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: idiomy i metafory", theoryRef: "C2/x10/s1", questions: [
          { kind: "choice", q: "„The elephant in the room” to:", options: ["Wielki sukces", "Oczywisty problem, którego nikt nie porusza", "Niespodziewany gość"], answer: 1, theoryRef: "C2/x10/s1" },
          { kind: "match", pairs: [{ a: "to cut corners", b: "iść na łatwiznę" }, { a: "to bury the hatchet", b: "zakopać topór wojenny" }, { a: "a blessing in disguise", b: "szczęście w nieszczęściu" }, { a: "the tip of the iceberg", b: "wierzchołek góry lodowej" }] },
          { kind: "gap", q: "After the scandal, his story should be taken with a pinch of ___. (dokończ idiom)", answer: "salt", theoryRef: "C2/x10/s1" },
          { kind: "dropdown", q: "Once the trend caught on, every brand jumped on the ___.", options: ["bandwagon", "hatchet", "iceberg"], answer: 0 },
          { kind: "truefalse", q: "Metafora pojęciowa ARGUMENT TO WOJNA tłumaczy zwroty typu „attack a claim” czy „defend a position”.", answer: true },
          { kind: "choice", q: "„Don't count your chickens before they hatch” ostrzega przed:", options: ["liczeniem zwierząt", "przedwczesnym świętowaniem sukcesu", "marnowaniem czasu"], answer: 1 }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: felieton z idiomami", intro: "Felieton gęsty od idiomów i metafor — wyłów ich znaczenia z kontekstu.", theoryRef: "C2/x10/s1", passage: `
          <p>When the start-up first stumbled, its rivals were quick to jump on the bandwagon of schadenfreude. The founders, however, refused to throw in the towel. The early failures, they would later insist, had been a blessing in disguise: each collapse exposed a flaw they might otherwise have buried beneath ambition.</p>
          <p>The whispered complaints, it turned out, were merely the tip of the iceberg. Behind closed doors, two co-founders had long been at war; only after months of mediation did they bury the hatchet. The lesson? Cutting corners early had nearly sunk them — and the elephant in the room had been their refusal to talk.</p>` , questions: [
          { kind: "choice", q: "Co oznacza, że wczesne porażki były „a blessing in disguise”?", options: ["Były całkowitą katastrofą", "Okazały się ukrytą korzyścią", "Były bez znaczenia"], answer: 1, theoryRef: "C2/x10/s1" },
          { kind: "truefalse", q: "„The tip of the iceberg” sugeruje, że ujawnione skargi były tylko niewielką częścią problemu.", answer: true },
          { kind: "gap", q: "Only after months of mediation did they bury the ___. (dokończ idiom)", answer: "hatchet" },
          { kind: "choice", q: "„The elephant in the room had been their refusal to talk” znaczy, że:", options: ["Mieli słonia w biurze", "Oczywistym, lecz przemilczanym problemem był brak rozmów", "Problem był nieistotny"], answer: 1 }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: idiom w naturalnym kontekście", prompts: [
          { en: "Let's not cut corners on testing — these complaints are just the tip of the iceberg.", pl: "Nie idźmy na łatwiznę z testami — te skargi to dopiero wierzchołek góry lodowej." },
          { en: "Take their projections with a pinch of salt; it may be a blessing in disguise if we wait.", pl: "Bierz ich prognozy z przymrużeniem oka; jeśli poczekamy, może to być szczęście w nieszczęściu." },
          { en: "It's time we addressed the elephant in the room and finally buried the hatchet.", pl: "Najwyższy czas zająć się przemilczanym problemem i wreszcie zakopać topór wojenny." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: idiomy i język figuratywny", questions: [
          { kind: "choice", q: "Który idiom oznacza „poddać się”?", options: ["to cut corners", "to throw in the towel", "to bury the hatchet"], answer: 1 },
          { kind: "gap", q: "These reported cases are just the tip of the ___. (dokończ idiom)", answer: "iceberg" },
          { kind: "transform", q: "Zastąp dosłowne sformułowanie idiomem:", given: "We finally made peace after years of conflict.", hint: "użyj „buried the hatchet”", answer: ["We finally buried the hatchet after years of conflict.", "After years of conflict, we finally buried the hatchet."] },
          { kind: "dropdown", q: "Don't ___ corners on the inspection — lives depend on it.", options: ["cut", "throw", "bury"], answer: 0 },
          { kind: "truefalse", q: "Metafora pojęciowa CZAS TO PIENIĄDZ tłumaczy zwroty „spend time” i „waste time”.", answer: true },
          { kind: "match", pairs: [{ a: "to jump on the bandwagon", b: "przyłączyć się dla mody" }, { a: "the elephant in the room", b: "przemilczany problem" }, { a: "a blessing in disguise", b: "szczęście w nieszczęściu" }] }
        ]}
      ]
    },

    /* ---------------- C2 / x11 — Elipsa, fronting i inwersja dla spójności (gramatyka) ---------------- */
    {
      id: "x11", title: "Fronting, inwersja i elipsa — szyk dla spójności i emfazy", icon: "↪️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: fronting, inwersja emfatyczna i elipsa kontekstowa", html: `
          <p>Manipulowanie szykiem zdania — wysuwanie elementów na przód (fronting), inwersja po wyrażeniach negatywnych oraz precyzyjna elipsa — to zaawansowane narzędzia spójności i emfazy.</p>
          <h3>Fronting (wysunięcie na przód)</h3>
          <p>Element zwykle stojący dalej trafia na początek, by powiązać zdanie z poprzednim lub podkreślić kontrast:</p>
          <p><span class="say">This much we know.</span> &nbsp; <span class="say">Such was her influence that nobody dared object.</span> &nbsp; <span class="say">Strange though it may seem, he agreed.</span></p>
          <h3>Inwersja po wyrażeniach negatywnych/ograniczających</h3>
          <table class="t-table">
            <tr><th>Wyrażenie na początku</th><th>Inwersja</th></tr>
            <tr><td>Not only…</td><td>Not only did she win, but she set a record.</td></tr>
            <tr><td>No sooner… than</td><td>No sooner had we sat down than the lights went out.</td></tr>
            <tr><td>Little…</td><td>Little did they realise what awaited them.</td></tr>
            <tr><td>Under no circumstances…</td><td>Under no circumstances are you to leave.</td></tr>
          </table>
          <h3>Elipsa kontekstowa</h3>
          <p>Pominięcie odtwarzalnych elementów dla zwięzłości: <span class="say">Some say yes, others (say) no.</span> &nbsp; <span class="say">Ready when you are.</span> (= I am ready)</p>
          <p class="tip">💡 Inwersja po fronting wyrażenia negatywnego jest obowiązkowa: po „Never” mówimy „Never have I…”, nie „Never I have…”. Pominięcie inwersji brzmi rażąco błędnie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: szyk, fronting i spójność", words: [
          { en: "fronting", pl: "frontowanie (wysunięcie elementu na początek)", example: "Fronting an object adds emphasis: 'That, I cannot accept.'" },
          { en: "no sooner... than", pl: "ledwie... a (wymaga inwersji)", example: "No sooner had I arrived than the phone rang." },
          { en: "little did", pl: "ledwie / wcale nie (emfatyczna inwersja)", example: "Little did she know that fame awaited her." },
          { en: "such was", pl: "tak wielki/wielka był(a) (fronting emfatyczny)", example: "Such was the chaos that the meeting was abandoned." },
          { en: "under no circumstances", pl: "pod żadnym pozorem (wymaga inwersji)", example: "Under no circumstances should the door be left unlocked." },
          { en: "not only... but also", pl: "nie tylko... lecz także (inwersja po 'not only')", example: "Not only did he apologise, but he also offered restitution." },
          { en: "thereby", pl: "tym samym, przez to (formalny łącznik)", example: "He resigned, thereby ending the dispute." },
          { en: "to omit", pl: "pominąć, opuścić (element zdania)", example: "We may omit the subject when it is understood." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: fronting i inwersja", theoryRef: "C2/x11/s1", questions: [
          { kind: "choice", q: "Poprawna inwersja po „Not only”:", options: ["Not only she won, but she set a record.", "Not only did she win, but she also set a record.", "Not only won she, but she set a record."], answer: 1, theoryRef: "C2/x11/s1" },
          { kind: "transform", q: "Przekształć z inwersją po „No sooner”:", given: "We had just sat down when the lights went out.", hint: "rozpocznij od „No sooner had we sat down…”", answer: ["No sooner had we sat down than the lights went out.", "No sooner had we sat down, than the lights went out."] },
          { kind: "dropdown", q: "Under no circumstances ___ you to disclose this.", options: ["are", "you are", "do"], answer: 0, theoryRef: "C2/x11/s1" },
          { kind: "gap", q: "___ did they realise the danger they were in. (wpisz słowo wymuszające inwersję, znaczące 'wcale nie')", answer: "Little", theoryRef: "C2/x11/s1" },
          { kind: "order", q: "Ułóż zdanie z frontingiem:", words: ["Such", "was", "her", "talent", "that", "everyone", "applauded"], answer: ["Such", "was", "her", "talent", "that", "everyone", "applauded"] },
          { kind: "multi", q: "Które zdania mają poprawną inwersję? (zaznacz wszystkie)", options: ["Never have I seen such a thing.", "Never I have seen such a thing.", "Rarely does he complain.", "Little did we know."], answers: [0, 2, 3] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: fragment z emfatycznym szykiem", intro: "Fragment, w którym fronting i inwersja budują rytm i spójność.", theoryRef: "C2/x11/s1", passage: `
          <p>Rarely had the city seen such a storm. Not only did the river burst its banks, but the bridges, one by one, gave way. Little did the residents suspect, as they slept, that by dawn whole streets would be submerged. Such was the speed of the flood that warnings, when they finally came, were already too late.</p>
          <p>Strange though it may seem, casualties were few. No sooner had the waters risen than neighbours rallied, ferrying the elderly to higher ground. This much, at least, the disaster revealed: under no circumstances, the survivors agreed, would they live by that river again — yet rebuild they did, and within a year.</p>` , questions: [
          { kind: "choice", q: "„Rarely had the city seen such a storm” to przykład:", options: ["zwykłego szyku", "inwersji po wyrażeniu o znaczeniu negatywnym/ograniczającym", "elipsy"], answer: 1, theoryRef: "C2/x11/s1" },
          { kind: "truefalse", q: "„Rebuild they did” to przykład frontingu czasownika dla emfazy.", answer: true },
          { kind: "gap", q: "No sooner had the waters risen ___ neighbours rallied. (wpisz spójnik)", answer: "than" },
          { kind: "choice", q: "„Little did the residents suspect” znaczy, że mieszkańcy:", options: ["dobrze wiedzieli, co nadchodzi", "wcale się nie spodziewali, co nadchodzi", "spodziewali się powodzi"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: emfaza w relacji", theoryRef: "C2/x11/s1", recordLine: 1, lines: [
          { speaker: "Reporter", en: "How would you describe the response to the crisis?", pl: "Jak opisał(a)by Pan/Pani reakcję na kryzys?" },
          { speaker: "Ty", en: "Remarkable. Not only did volunteers arrive within the hour, but supplies, too, poured in from neighbouring towns. Such was the solidarity that we were, frankly, overwhelmed.", pl: "Niezwykła. Nie tylko wolontariusze przybyli w ciągu godziny, lecz także zaopatrzenie napłynęło z sąsiednich miast. Tak wielka była solidarność, że byliśmy, szczerze, poruszeni." },
          { speaker: "Reporter", en: "Were you prepared for that scale?", pl: "Czy byliście przygotowani na taką skalę?" },
          { speaker: "Ty", en: "Little did we anticipate it. No sooner had we issued the appeal than the response began. Under no circumstances did we expect such generosity.", pl: "Wcale tego nie przewidzieliśmy. Ledwie wydaliśmy apel, a reakcja już ruszyła. Pod żadnym pozorem nie spodziewaliśmy się takiej hojności." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: fronting, inwersja, elipsa", questions: [
          { kind: "choice", q: "Poprawne zdanie z inwersją:", options: ["No sooner I had left than it rained.", "No sooner had I left than it rained.", "No sooner I left than it rained."], answer: 1 },
          { kind: "transform", q: "Przekształć z frontingiem „Such”:", given: "Her influence was so great that nobody objected.", hint: "rozpocznij od „Such was her influence that…”", answer: ["Such was her influence that nobody objected.", "Such was her influence, that nobody objected."] },
          { kind: "dropdown", q: "Not only ___ he refuse, but he also walked out.", options: ["did", "he did", "had"], answer: 0 },
          { kind: "gap", q: "Under no circumstances ___ the alarm to be ignored. (wpisz czasownik posiłkowy: is/are)", answer: ["is", "are"] },
          { kind: "truefalse", q: "Po wysuniętym na początek „Never” konieczna jest inwersja podmiotu z operatorem.", answer: true },
          { kind: "match", pairs: [{ a: "no sooner... than", b: "ledwie... a" }, { a: "little did", b: "wcale nie / ledwie" }, { a: "such was", b: "tak wielki był" }, { a: "under no circumstances", b: "pod żadnym pozorem" }] }
        ]}
      ]
    },

    /* ---------------- C2 / x12 — Rejestr i formalność (leksyka) ---------------- */
    {
      id: "x12", title: "Rejestr i formalność — formalne kontra potoczne odpowiedniki", icon: "🎩",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: rejestr, formalność i przełączanie stylu", html: `
          <p>Mistrzostwo to umiejętność świadomego doboru rejestru — od ulicznego slangu po język urzędowy — i płynnego przełączania się między nimi (code-switching) zależnie od kontekstu, odbiorcy i celu.</p>
          <h3>Te same treści, różny rejestr</h3>
          <table class="t-table">
            <tr><th>Potoczny / slang</th><th>Neutralny</th><th>Formalny</th></tr>
            <tr><td>kick off</td><td>begin</td><td>commence</td></tr>
            <tr><td>find out</td><td>discover</td><td>ascertain</td></tr>
            <tr><td>put up with</td><td>tolerate</td><td>countenance</td></tr>
            <tr><td>get rid of</td><td>remove</td><td>eliminate / dispose of</td></tr>
            <tr><td>a lot of</td><td>many</td><td>a multitude of</td></tr>
          </table>
          <h3>Sygnały rejestru formalnego</h3>
          <p>Czasowniki pochodzenia łacińskiego (commence, terminate, utilise), nominalizacje (the implementation of), strona bierna, brak skróceń (do not zamiast don't), pełne formy.</p>
          <h3>Sygnały rejestru potocznego</h3>
          <p>Phrasal verbs (get by, mess up), skrócenia (I'd, can't), wyrażenia idiomatyczne, intensyfikatory (really, totally), wykrzyknienia.</p>
          <h3>Rejestr a stosowność</h3>
          <p>Zbyt formalny ton w luźnej rozmowie brzmi sztywno i pretensjonalnie; zbyt potoczny w piśmie urzędowym — niepoważnie. Dopasowanie jest kluczowe.</p>
          <p class="tip">💡 „I regret to inform you that your application has been unsuccessful” (formalne odrzucenie) kontra „Sorry, you didn't get it” — identyczna treść, przeciwległe rejestry.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: rejestr i odpowiedniki", words: [
          { en: "to commence", pl: "rozpocząć (formal) — pot. 'to kick off'", example: "The proceedings will commence at nine sharp." },
          { en: "to ascertain", pl: "ustalić, stwierdzić (formal) — pot. 'find out'", example: "We must ascertain the cause before acting." },
          { en: "to countenance", pl: "tolerować, dopuszczać (formal) — pot. 'put up with'", example: "The board would not countenance such a breach." },
          { en: "to utilise", pl: "wykorzystywać (formal) — pot. 'use'", example: "The system utilises renewable energy exclusively." },
          { en: "albeit", pl: "aczkolwiek, choć (formal łącznik)", example: "It was a success, albeit a modest one." },
          { en: "to deem", pl: "uznać, uważać za (formal)", example: "The court deemed the contract void." },
          { en: "henceforth", pl: "odtąd, od tej chwili (formal)", example: "Henceforth, all requests must be submitted in writing." },
          { en: "to get by", pl: "jakoś sobie radzić (potoczny phrasal verb)", example: "We somehow get by on a modest income." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: rejestr i formalność", theoryRef: "C2/x12/s1", questions: [
          { kind: "choice", q: "Najbardziej formalny odpowiednik „find out” to:", options: ["dig up", "discover", "ascertain"], answer: 2, theoryRef: "C2/x12/s1" },
          { kind: "categorize", q: "Przyporządkuj do rejestru:", cats: ["Potoczny", "Formalny"], items: [{ t: "kick off", cat: 0 }, { t: "commence", cat: 1 }, { t: "put up with", cat: 0 }, { t: "countenance", cat: 1 }, { t: "get rid of", cat: 0 }, { t: "eliminate", cat: 1 }] },
          { kind: "dropdown", q: "The ceremony will ___ at noon.", options: ["kick off", "commence", "get going"], answer: 1, theoryRef: "C2/x12/s1" },
          { kind: "truefalse", q: "Skrócenia takie jak „don't” i „can't” są typowe dla rejestru formalnego.", answer: false },
          { kind: "gap", q: "It was a victory, ___ a narrow one. (wpisz formalny łącznik znaczący 'aczkolwiek')", answer: "albeit" },
          { kind: "multi", q: "Które cechy sygnalizują rejestr formalny? (zaznacz wszystkie)", options: ["nominalizacje", "skrócenia (I'd, can't)", "czasowniki łacińskie", "strona bierna"], answers: [0, 2, 3] },
          { kind: "match", pairs: [{ a: "commence", b: "formalne: rozpocząć" }, { a: "get by", b: "potoczne: radzić sobie" }, { a: "ascertain", b: "formalne: ustalić" }, { a: "kick off", b: "potoczne: zacząć" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: dwie wersje tej samej wiadomości", intro: "Ta sama treść w dwóch przeciwległych rejestrach — porównaj.", theoryRef: "C2/x12/s1", passage: `
          <p><b>Wersja formalna:</b> We regret to inform you that, following careful deliberation, the committee has deemed it inappropriate to countenance your proposal at this juncture. Should circumstances change, we shall ascertain whether a revised submission might henceforth be entertained. We thank you for the time you have so generously expended.</p>
          <p><b>Wersja potoczna:</b> Sorry, but we've decided we can't go with your idea right now. If things change, we'll see whether a new version might work down the line. Thanks a lot for all the effort you put in.</p>` , questions: [
          { kind: "choice", q: "Obie wersje przekazują:", options: ["różne decyzje", "tę samą decyzję w różnych rejestrach", "wyłącznie pochwałę"], answer: 1, theoryRef: "C2/x12/s1" },
          { kind: "truefalse", q: "Wersja formalna unika skróceń i stosuje czasowniki łacińskie typu „countenance” i „ascertain”.", answer: true },
          { kind: "gap", q: "Potoczny odpowiednik formalnego „We regret to inform you” w tekście zaczyna się od słowa ___. (wpisz to słowo)", answer: "Sorry" },
          { kind: "choice", q: "„Henceforth” w wersji formalnej znaczy:", options: ["wcześniej", "odtąd, od tej chwili", "być może"], answer: 1 }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: przełączanie rejestru", prompts: [
          { en: "Formally: The meeting will commence shortly; informally: We'll kick off in a minute.", pl: "Formalnie: Spotkanie wkrótce się rozpocznie; nieformalnie: Zaczynamy za chwilę." },
          { en: "The board would not countenance the breach, albeit it was, in truth, minor.", pl: "Zarząd nie tolerowałby tego naruszenia, aczkolwiek było ono w istocie drobne." },
          { en: "We must ascertain the facts before we deem anyone responsible.", pl: "Musimy ustalić fakty, zanim uznamy kogokolwiek za odpowiedzialnego." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: rejestr i formalność", questions: [
          { kind: "choice", q: "Formalny odpowiednik „put up with” to:", options: ["get by", "countenance", "kick off"], answer: 1 },
          { kind: "categorize", q: "Rejestr potoczny czy formalny?", cats: ["Potoczny", "Formalny"], items: [{ t: "get by", cat: 0 }, { t: "utilise", cat: 1 }, { t: "find out", cat: 0 }, { t: "henceforth", cat: 1 }] },
          { kind: "transform", q: "Przekształć w rejestr formalny:", given: "We'll start the meeting soon.", hint: "użyj „commence”", answer: ["The meeting will commence shortly.", "We shall commence the meeting shortly."] },
          { kind: "dropdown", q: "The court ___ the evidence inadmissible.", options: ["deemed", "found out", "got rid of"], answer: 0 },
          { kind: "truefalse", q: "Zbyt formalny rejestr w luźnej, codziennej rozmowie może brzmieć sztywno i pretensjonalnie.", answer: true },
          { kind: "match", pairs: [{ a: "albeit", b: "aczkolwiek" }, { a: "henceforth", b: "odtąd" }, { a: "to deem", b: "uznać za" } ] }
        ]}
      ]
    }

  );
})();
