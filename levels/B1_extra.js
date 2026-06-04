/* B1 — dodatkowe tematy (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "B1"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- x1 — Present Perfect vs Past Simple (gramatyka) ---------------- */
    {
      id: "x1", title: "Present Perfect vs Past Simple", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Present Perfect vs Past Simple", html: `
          <p>Oba czasy mówią o przeszłości, ale w inny sposób.</p>
          <table class="t-table">
            <tr><th>Czas</th><th>Kiedy używać</th><th>Przykład</th></tr>
            <tr><td>Past Simple</td><td>czynność zakończona w określonym czasie</td><td><span class="say">I visited Rome in 2019.</span></td></tr>
            <tr><td>Present Perfect</td><td>czas nieokreślony, efekt widoczny teraz</td><td><span class="say">I have visited Rome.</span></td></tr>
          </table>
          <p>Z <b>Past Simple</b> używamy określeń czasu: <b>yesterday, last week, in 2019, two days ago</b>.</p>
          <p>Z <b>Present Perfect</b> używamy: <b>ever, never, just, already, yet, since, for</b>.</p>
          <p class="tip">💡 Pytanie <span class="say">When did you arrive?</span> zawsze w Past Simple, bo pytamy o konkretny moment. „When have you arrived" jest błędne.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czas i doświadczenie", words: [
          { en: "recently", pl: "ostatnio, niedawno", example: "I have changed jobs recently." },
          { en: "ago", pl: "temu", example: "She left two hours ago." },
          { en: "already", pl: "już", example: "We have already eaten." },
          { en: "yet", pl: "jeszcze (w pytaniach i przeczeniach)", example: "Have you called him yet?" },
          { en: "since", pl: "od (punkt w czasie)", example: "I have lived here since 2020." },
          { en: "for", pl: "od, przez (okres)", example: "They have known each other for ten years." },
          { en: "last", pl: "ostatni, poprzedni", example: "We met last Friday." },
          { en: "lately", pl: "ostatnio", example: "He hasn't slept well lately." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: który czas?", theoryRef: "B1/x1/s1", questions: [
          { kind: "choice", q: "I ___ my keys yesterday.", options: ["have lost", "lost", "have losed"], answer: 1, theoryRef: "B1/x1/s1" },
          { kind: "choice", q: "She ___ in this city since 2018.", options: ["lives", "lived", "has lived"], answer: 2, theoryRef: "B1/x1/s1" },
          { kind: "gap", q: "We ___ (not finish) the project yet.", answer: ["haven't finished", "have not finished"], theoryRef: "B1/x1/s1" },
          { kind: "dropdown", q: "When ___ you arrive at the hotel?", options: ["did", "have", "has"], answer: 0, theoryRef: "B1/x1/s1" },
          { kind: "truefalse", q: "Zdanie „I have seen that film last night” jest poprawne.", answer: false },
          { kind: "transform", q: "Zamień na Present Perfect:", given: "She started working here in May.", hint: "since", answer: ["She has worked here since May.", "She's worked here since May."] },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "have", "just", "seen", "her"], answer: ["I", "have", "just", "seen", "her"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A new beginning", intro: "Przeczytaj historię Anny.", passage: `
          <p>Anna moved to Manchester three years ago to study design.</p>
          <p>At first, she felt lonely and missed her family in Poland.</p>
          <p>Since then, she has made many friends and joined a hiking club.</p>
          <p>Last summer, she travelled around Scotland with two classmates.</p>
          <p>She has already finished her degree, and now she is looking for a job.</p>
          <p>She has never regretted her decision to leave home.</p>`, theoryRef: "B1/x1/s1", questions: [
          { kind: "truefalse", q: "Anna moved to Manchester to study music.", answer: false },
          { kind: "choice", q: "When did she travel around Scotland?", options: ["Last summer", "Three years ago", "This week"], answer: 0 },
          { kind: "truefalse", q: "She has already finished her degree.", answer: true },
          { kind: "gap", q: "She has ___ regretted her decision. (never/ever)", answer: "never" }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: rozmowa o weekendzie", theoryRef: "B1/x1/s1", recordLine: 1, lines: [
          { speaker: "Tom", en: "Have you ever climbed a mountain?", pl: "Czy kiedykolwiek wspinałeś się na górę?" },
          { speaker: "Ty", en: "Yes, I have. I climbed Snowdon last year.", pl: "Tak. W zeszłym roku wszedłem na Snowdon." },
          { speaker: "Tom", en: "Wow! Have you been there again since then?", pl: "Wow! Byłeś tam ponownie od tamtej pory?" },
          { speaker: "Ty", en: "No, I haven't, but I have planned another trip.", pl: "Nie, ale zaplanowałem kolejną wyprawę." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: Present Perfect vs Past Simple", questions: [
          { kind: "choice", q: "They ___ to France twice this year.", options: ["went", "have been", "have gone"], answer: 1 },
          { kind: "gap", q: "I ___ (buy) this car three weeks ago.", answer: "bought" },
          { kind: "dropdown", q: "___ you finished your homework yet?", options: ["Have", "Did", "Has"], answer: 0 },
          { kind: "transform", q: "Zamień na Past Simple:", given: "We have visited the museum.", hint: "yesterday", answer: ["We visited the museum yesterday."] },
          { kind: "truefalse", q: "„for” używamy z okresem czasu, a „since” z punktem w czasie.", answer: true },
          { kind: "multi", q: "Które wyrażenia łączą się z Present Perfect?", options: ["already", "yesterday", "yet", "two days ago", "just"], answers: [0, 2, 4] },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "has", "lived", "here", "for", "years"], answer: ["She", "has", "lived", "here", "for", "years"] }
        ]}
      ]
    },

    /* ---------------- x2 — Environment & nature (leksyka) ---------------- */
    {
      id: "x2", title: "Środowisko i przyroda", icon: "🌍",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język o środowisku", html: `
          <p>W tej jednostce poznasz słownictwo o <b>środowisku</b> i o tym, jak je chronić.</p>
          <table class="t-table">
            <tr><th>Problem</th><th>Rozwiązanie</th></tr>
            <tr><td><span class="say">pollution</span> (zanieczyszczenie)</td><td><span class="say">recycle waste</span> (segregować odpady)</td></tr>
            <tr><td><span class="say">climate change</span> (zmiana klimatu)</td><td><span class="say">use renewable energy</span> (energia odnawialna)</td></tr>
            <tr><td><span class="say">deforestation</span> (wylesianie)</td><td><span class="say">plant trees</span> (sadzić drzewa)</td></tr>
          </table>
          <p>Przydatne zwroty: <span class="say">protect the planet</span>, <span class="say">reduce plastic</span>, <span class="say">save energy</span>.</p>
          <p class="tip">💡 „environment" wymawiamy z niemym „n" w środku — w przybliżeniu „en-VY-ron-ment".</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przyroda i ekologia", words: [
          { en: "pollution", pl: "zanieczyszczenie", example: "Air pollution is a serious problem in big cities." },
          { en: "recycle", pl: "poddawać recyklingowi", example: "We recycle paper, glass and plastic." },
          { en: "waste", pl: "odpady; marnować", example: "Don't waste water." },
          { en: "renewable", pl: "odnawialny", example: "Solar power is a renewable source of energy." },
          { en: "wildlife", pl: "dzika przyroda", example: "The park protects local wildlife." },
          { en: "endangered", pl: "zagrożony (wyginięciem)", example: "Pandas are an endangered species." },
          { en: "climate", pl: "klimat", example: "Climate change affects everyone." },
          { en: "litter", pl: "śmieci; śmiecić", example: "Please don't drop litter in the forest." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: środowisko", theoryRef: "B1/x2/s1", questions: [
          { kind: "match", pairs: [ { a: "pollution", b: "zanieczyszczenie" }, { a: "wildlife", b: "dzika przyroda" }, { a: "waste", b: "odpady" }, { a: "renewable", b: "odnawialny" } ], theoryRef: "B1/x2/s1" },
          { kind: "categorize", q: "Posortuj: problem czy rozwiązanie?", cats: ["Problem", "Rozwiązanie"], items: [ { t: "deforestation", cat: 0 }, { t: "recycling", cat: 1 }, { t: "air pollution", cat: 0 }, { t: "planting trees", cat: 1 }, { t: "climate change", cat: 0 } ] },
          { kind: "gap", q: "Solar power is a ___ source of energy. (renewable/endangered)", answer: "renewable", theoryRef: "B1/x2/s1" },
          { kind: "choice", q: "An animal that may soon disappear is ___.", options: ["renewable", "endangered", "recycled"], answer: 1 },
          { kind: "truefalse", q: "„litter” oznacza śmieci.", answer: true },
          { kind: "multi", q: "Które działania pomagają środowisku?", options: ["recycling waste", "wasting water", "planting trees", "dropping litter", "saving energy"], answers: [0, 2, 4] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: ogłoszenie o sprzątaniu", audio: "Good morning, everyone. This Saturday our school is organising a clean-up day in the local park. We will meet at the main gate at nine o'clock. Please bring gloves and wear old clothes. We are going to collect litter and recycle as much as possible. Together we can protect our environment.", instructions: "Posłuchaj ogłoszenia i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Where will people meet?", options: ["At the main gate", "In the classroom", "At the bus stop"], answer: 0 },
          { kind: "choice", q: "What time does the event start?", options: ["At eight", "At nine", "At ten"], answer: 1 },
          { kind: "truefalse", q: "People should bring gloves.", answer: true },
          { kind: "gap", q: "Together we can ___ our environment.", answer: "protect" }
        ]},
        { id: "s5", type: "speak", title: "Mów: chroń planetę", prompts: [
          { en: "We should recycle more and waste less.", pl: "Powinniśmy więcej segregować i mniej marnować." },
          { en: "Climate change is a big problem for everyone.", pl: "Zmiana klimatu to wielki problem dla wszystkich." },
          { en: "I always turn off the lights to save energy.", pl: "Zawsze gaszę światło, aby oszczędzać energię." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: środowisko", questions: [
          { kind: "choice", q: "We can reduce ___ by using less plastic.", options: ["wildlife", "waste", "climate"], answer: 1 },
          { kind: "gap", q: "Pandas are an ___ species. (endangered/renewable)", answer: "endangered" },
          { kind: "match", pairs: [ { a: "recycle", b: "poddawać recyklingowi" }, { a: "litter", b: "śmieci" }, { a: "climate", b: "klimat" } ] },
          { kind: "categorize", q: "Czy to dobre, czy złe dla planety?", cats: ["Dobre", "Złe"], items: [ { t: "renewable energy", cat: 0 }, { t: "pollution", cat: 1 }, { t: "recycling", cat: 0 }, { t: "deforestation", cat: 1 } ] },
          { kind: "truefalse", q: "Renewable energy never runs out.", answer: true },
          { kind: "multi", q: "Wybierz słowa związane z naturą:", options: ["wildlife", "keyboard", "forest", "pollution", "screen"], answers: [0, 2, 3] }
        ]}
      ]
    },

    /* ---------------- x3 — First & Second Conditional (gramatyka) ---------------- */
    {
      id: "x3", title: "Tryby warunkowe: First & Second", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: First & Second Conditional", html: `
          <p>Tryby warunkowe opisują sytuacje i ich skutki.</p>
          <table class="t-table">
            <tr><th>Typ</th><th>Budowa</th><th>Przykład</th></tr>
            <tr><td>First (realny)</td><td>If + Present Simple, will + bezokolicznik</td><td><span class="say">If it rains, we will stay home.</span></td></tr>
            <tr><td>Second (nierealny / hipotetyczny)</td><td>If + Past Simple, would + bezokolicznik</td><td><span class="say">If I had more time, I would travel.</span></td></tr>
          </table>
          <p><b>First Conditional</b> = coś prawdopodobnego w przyszłości. <b>Second Conditional</b> = marzenie lub mało realna sytuacja.</p>
          <p class="tip">💡 W Second Conditional z czasownikiem „be" często używamy „were" dla wszystkich osób: <span class="say">If I were you, I would apologise.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: decyzje i możliwości", words: [
          { en: "if", pl: "jeśli", example: "If you study, you will pass." },
          { en: "unless", pl: "jeśli nie, chyba że", example: "Unless we hurry, we will miss the train." },
          { en: "would", pl: "by, byłoby", example: "I would buy a house if I were rich." },
          { en: "win", pl: "wygrać", example: "If I won the lottery, I would travel the world." },
          { en: "spend", pl: "wydawać, spędzać", example: "She would spend more time with family." },
          { en: "borrow", pl: "pożyczyć (od kogoś)", example: "If you need money, I will lend you some." },
          { en: "advice", pl: "rada", example: "If I were you, I would take his advice." },
          { en: "chance", pl: "szansa", example: "If you had the chance, would you go?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: warunki", theoryRef: "B1/x3/s1", questions: [
          { kind: "choice", q: "If it ___ tomorrow, we will cancel the trip.", options: ["rains", "will rain", "rained"], answer: 0, theoryRef: "B1/x3/s1" },
          { kind: "choice", q: "If I ___ rich, I would buy a yacht.", options: ["am", "were", "will be"], answer: 1, theoryRef: "B1/x3/s1" },
          { kind: "dropdown", q: "If you heat ice, it ___.", options: ["melts", "would melt", "will melted"], answer: 0 },
          { kind: "gap", q: "If I had a car, I ___ (drive) to work.", answer: "would drive", theoryRef: "B1/x3/s1" },
          { kind: "transform", q: "Zamień na Second Conditional:", given: "I don't have time, so I don't help.", hint: "If I had time...", answer: ["If I had time, I would help."] },
          { kind: "transform", q: "Dokończ (First Conditional):", given: "If you call me,", hint: "answer / I", answer: ["I will answer.", "I'll answer."] },
          { kind: "truefalse", q: "W First Conditional po „if” używamy „will”.", answer: false }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: plany na wakacje", theoryRef: "B1/x3/s1", recordLine: 1, lines: [
          { speaker: "Kate", en: "If the weather is nice this weekend, what will you do?", pl: "Jeśli w weekend będzie ładna pogoda, co zrobisz?" },
          { speaker: "Ty", en: "If it's sunny, I will go hiking in the hills.", pl: "Jeśli będzie słonecznie, pójdę na piesze wędrówki w góry." },
          { speaker: "Kate", en: "And if you won a free holiday, where would you go?", pl: "A gdybyś wygrał darmowe wakacje, gdzie byś pojechał?" },
          { speaker: "Ty", en: "If I won, I would travel to New Zealand.", pl: "Gdybym wygrał, pojechałbym do Nowej Zelandii." }
        ]},
        { id: "s5", type: "speak", title: "Mów: gdybym...", prompts: [
          { en: "If I had more money, I would buy a new bike.", pl: "Gdybym miał więcej pieniędzy, kupiłbym nowy rower." },
          { en: "If you study hard, you will pass the exam.", pl: "Jeśli będziesz pilnie się uczyć, zdasz egzamin." },
          { en: "If I were you, I would say sorry.", pl: "Na twoim miejscu przeprosiłbym." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: tryby warunkowe", questions: [
          { kind: "choice", q: "If she ___ harder, she would get better marks.", options: ["studies", "studied", "will study"], answer: 1 },
          { kind: "gap", q: "If you ___ (not hurry), you will be late.", answer: ["don't hurry", "do not hurry"] },
          { kind: "dropdown", q: "We will go out if it ___ raining.", options: ["stops", "will stop", "stopped"], answer: 0 },
          { kind: "transform", q: "Zamień na First Conditional:", given: "Eat well. You feel better.", hint: "If you...", answer: ["If you eat well, you will feel better.", "If you eat well, you'll feel better."] },
          { kind: "truefalse", q: "Second Conditional opisuje sytuacje hipotetyczne.", answer: true },
          { kind: "multi", q: "Które zdania są poprawne?", options: ["If I were you, I would wait.", "If it will rain, we stay home.", "If you call, I will come.", "If she studied, she would pass."], answers: [0, 2, 3] },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "I", "won", "I", "would", "celebrate"], answer: ["If", "I", "won", "I", "would", "celebrate"] }
        ]}
      ]
    },

    /* ---------------- x4 — Technology & the internet (leksyka) ---------------- */
    {
      id: "x4", title: "Technologia i internet", icon: "💻",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język technologii", html: `
          <p>Słownictwo o <b>technologii</b> i <b>internecie</b> przydaje się każdego dnia.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td><span class="say">download</span></td><td>pobierać</td></tr>
            <tr><td><span class="say">upload</span></td><td>przesyłać (do sieci)</td></tr>
            <tr><td><span class="say">log in</span></td><td>zalogować się</td></tr>
            <tr><td><span class="say">password</span></td><td>hasło</td></tr>
          </table>
          <p>Czasowniki: <span class="say">click, install, update, search, share</span>.</p>
          <p class="tip">💡 „to download" = pobierać NA swój komputer; „to upload" = wysyłać Z komputera do sieci. Strzałka w dół = down, w górę = up.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: komputer i sieć", words: [
          { en: "download", pl: "pobierać", example: "I downloaded the file last night." },
          { en: "upload", pl: "przesyłać do sieci", example: "She uploaded the photos to the cloud." },
          { en: "password", pl: "hasło", example: "Don't share your password with anyone." },
          { en: "screen", pl: "ekran", example: "My phone screen is cracked." },
          { en: "device", pl: "urządzenie", example: "This app works on any device." },
          { en: "browser", pl: "przeglądarka", example: "Open a new tab in your browser." },
          { en: "update", pl: "aktualizować; aktualizacja", example: "You should update the software." },
          { en: "social media", pl: "media społecznościowe", example: "He spends too much time on social media." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: technologia", theoryRef: "B1/x4/s1", questions: [
          { kind: "match", pairs: [ { a: "download", b: "pobierać" }, { a: "upload", b: "przesyłać do sieci" }, { a: "password", b: "hasło" }, { a: "browser", b: "przeglądarka" } ], theoryRef: "B1/x4/s1" },
          { kind: "gap", q: "I need to ___ the app from the store. (download/upload)", answer: "download", theoryRef: "B1/x4/s1" },
          { kind: "choice", q: "To enter your account, you have to ___.", options: ["log in", "download", "update"], answer: 0 },
          { kind: "dropdown", q: "You should ___ your software to stay safe.", options: ["update", "upload", "screen"], answer: 0 },
          { kind: "truefalse", q: "„device” oznacza urządzenie.", answer: true },
          { kind: "categorize", q: "Posortuj: czasownik czy rzeczownik?", cats: ["Czasownik", "Rzeczownik"], items: [ { t: "click", cat: 0 }, { t: "screen", cat: 1 }, { t: "install", cat: 0 }, { t: "password", cat: 1 }, { t: "share", cat: 0 } ] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: Life online", intro: "Przeczytaj tekst o życiu w sieci.", passage: `
          <p>Most teenagers today cannot imagine life without the internet.</p>
          <p>They use their phones to chat, watch videos and listen to music.</p>
          <p>Many of them spend several hours a day on social media.</p>
          <p>The internet helps them learn new things and stay in touch with friends.</p>
          <p>However, experts warn that too much screen time can be unhealthy.</p>
          <p>They suggest taking regular breaks and going outside more often.</p>`, theoryRef: "B1/x4/s1", questions: [
          { kind: "truefalse", q: "Teenagers use phones to listen to music.", answer: true },
          { kind: "choice", q: "What do experts warn about?", options: ["Too much screen time", "Slow internet", "Expensive phones"], answer: 0 },
          { kind: "gap", q: "Experts suggest taking regular ___.", answer: "breaks" },
          { kind: "truefalse", q: "The text says the internet is completely useless.", answer: false }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: problem z telefonem", theoryRef: "B1/x4/s1", recordLine: 1, lines: [
          { speaker: "Sam", en: "I can't log in to my account. What should I do?", pl: "Nie mogę zalogować się do konta. Co mam zrobić?" },
          { speaker: "Ty", en: "Try to reset your password and update the app.", pl: "Spróbuj zresetować hasło i zaktualizować aplikację." },
          { speaker: "Sam", en: "Good idea. Should I restart the device too?", pl: "Dobry pomysł. Czy powinienem też zrestartować urządzenie?" },
          { speaker: "Ty", en: "Yes, restart it and then log in again.", pl: "Tak, zrestartuj je i zaloguj się ponownie." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: technologia", questions: [
          { kind: "choice", q: "You can read websites in a ___.", options: ["browser", "password", "screen"], answer: 0 },
          { kind: "gap", q: "She ___ the photos to the cloud. (uploaded/downloaded)", answer: "uploaded" },
          { kind: "match", pairs: [ { a: "update", b: "aktualizować" }, { a: "device", b: "urządzenie" }, { a: "screen", b: "ekran" } ] },
          { kind: "multi", q: "Które słowa są związane z internetem?", options: ["browser", "password", "spoon", "social media", "mountain"], answers: [0, 1, 3] },
          { kind: "truefalse", q: "Należy udostępniać hasło wszystkim znajomym.", answer: false },
          { kind: "dropdown", q: "First, ___ the file, then open it.", options: ["download", "upload", "click off"], answer: 0 }
        ]}
      ]
    },

    /* ---------------- x5 — Relative clauses (gramatyka) ---------------- */
    {
      id: "x5", title: "Zdania względne: who / which / that / where", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: relative clauses", html: `
          <p>Zdania względne dodają informacje o osobie, rzeczy lub miejscu.</p>
          <table class="t-table">
            <tr><th>Zaimek</th><th>Do czego</th><th>Przykład</th></tr>
            <tr><td><b>who</b></td><td>ludzie</td><td><span class="say">The man who called you is my uncle.</span></td></tr>
            <tr><td><b>which</b></td><td>rzeczy, zwierzęta</td><td><span class="say">The book which I read was great.</span></td></tr>
            <tr><td><b>that</b></td><td>ludzie lub rzeczy (mniej formalne)</td><td><span class="say">The car that broke down is mine.</span></td></tr>
            <tr><td><b>where</b></td><td>miejsca</td><td><span class="say">This is the town where I grew up.</span></td></tr>
          </table>
          <p class="tip">💡 W zdaniach definiujących (kluczowych dla sensu) zwykle nie stawiamy przecinka. „that" może zastąpić „who" lub „which", ale nie „where".</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: opisywanie osób i miejsc", words: [
          { en: "person", pl: "osoba", example: "She is the person who helped me." },
          { en: "place", pl: "miejsce", example: "That's the place where we met." },
          { en: "neighbour", pl: "sąsiad", example: "The neighbour who lives next door is friendly." },
          { en: "building", pl: "budynek", example: "The building which burned down was old." },
          { en: "tool", pl: "narzędzie", example: "A hammer is a tool that you use for nails." },
          { en: "stranger", pl: "obcy, nieznajomy", example: "A stranger who I met gave me directions." },
          { en: "village", pl: "wieś", example: "This is the village where my grandmother lives." },
          { en: "owner", pl: "właściciel", example: "The man who owns the shop is very kind." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zdania względne", theoryRef: "B1/x5/s1", questions: [
          { kind: "dropdown", q: "The woman ___ lives here is a doctor.", options: ["who", "which", "where"], answer: 0, theoryRef: "B1/x5/s1" },
          { kind: "dropdown", q: "This is the restaurant ___ we had dinner.", options: ["who", "which", "where"], answer: 2, theoryRef: "B1/x5/s1" },
          { kind: "gap", q: "A dictionary is a book ___ explains words. (which/where)", answer: ["which", "that"], theoryRef: "B1/x5/s1" },
          { kind: "choice", q: "The bag ___ I bought yesterday is broken.", options: ["who", "that", "where"], answer: 1 },
          { kind: "truefalse", q: "„where” używamy do opisu miejsc.", answer: true },
          { kind: "transform", q: "Połącz w jedno zdanie:", given: "That's the man. He fixed my car.", hint: "who", answer: ["That's the man who fixed my car.", "That's the man that fixed my car."] },
          { kind: "order", q: "Ułóż zdanie:", words: ["This", "is", "the", "house", "where", "I", "live"], answer: ["This", "is", "the", "house", "where", "I", "live"] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: zgadnij osobę", audio: "Let me describe three people. The first is a person who teaches children at school. The second is someone who flies planes and travels around the world. The third works in a place where you buy bread and cakes every morning.", instructions: "Posłuchaj opisów i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Who teaches children?", options: ["A teacher", "A pilot", "A baker"], answer: 0 },
          { kind: "choice", q: "Who flies planes?", options: ["A teacher", "A pilot", "A baker"], answer: 1 },
          { kind: "gap", q: "The third person works where you buy bread and ___.", answer: "cakes" },
          { kind: "truefalse", q: "The speaker describes three people.", answer: true }
        ]},
        { id: "s5", type: "speak", title: "Mów: opisz to", prompts: [
          { en: "A doctor is a person who helps sick people.", pl: "Lekarz to osoba, która pomaga chorym." },
          { en: "This is the city where I was born.", pl: "To jest miasto, w którym się urodziłem." },
          { en: "I like books which make me think.", pl: "Lubię książki, które zmuszają do myślenia." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: zdania względne", questions: [
          { kind: "dropdown", q: "She's the friend ___ helped me move house.", options: ["who", "which", "where"], answer: 0 },
          { kind: "dropdown", q: "That's the school ___ I studied English.", options: ["who", "which", "where"], answer: 2 },
          { kind: "gap", q: "A chef is someone ___ cooks in a restaurant. (who/where)", answer: ["who", "that"] },
          { kind: "transform", q: "Połącz w jedno zdanie:", given: "This is the phone. I bought it last week.", hint: "which", answer: ["This is the phone which I bought last week.", "This is the phone that I bought last week."] },
          { kind: "truefalse", q: "„that” może zastąpić „who” w zdaniach definiujących.", answer: true },
          { kind: "multi", q: "Które zdania są poprawne?", options: ["The man who called is gone.", "The town who I visited was nice.", "This is the place where we stayed.", "A pen is a thing which you write with."], answers: [0, 2, 3] }
        ]}
      ]
    },

    /* ---------------- x6 — Travel & culture (leksyka) ---------------- */
    {
      id: "x6", title: "Podróże i kultura", icon: "✈️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język podróży", html: `
          <p>W podróży przyda Ci się słownictwo o <b>transporcie</b>, <b>noclegach</b> i <b>kulturze</b>.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td><span class="say">flight</span></td><td>lot</td></tr>
            <tr><td><span class="say">luggage</span></td><td>bagaż</td></tr>
            <tr><td><span class="say">accommodation</span></td><td>zakwaterowanie</td></tr>
            <tr><td><span class="say">sightseeing</span></td><td>zwiedzanie</td></tr>
          </table>
          <p>Przydatne zwroty: <span class="say">book a hotel</span>, <span class="say">catch a flight</span>, <span class="say">pack a suitcase</span>.</p>
          <p class="tip">💡 „luggage" jest niepoliczalne — mówimy „a piece of luggage", a nie „a luggage".</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: w podróży", words: [
          { en: "flight", pl: "lot", example: "Our flight was delayed by two hours." },
          { en: "luggage", pl: "bagaż", example: "I packed my luggage the night before." },
          { en: "abroad", pl: "za granicą, za granicę", example: "They often travel abroad in summer." },
          { en: "accommodation", pl: "zakwaterowanie", example: "We booked our accommodation online." },
          { en: "sightseeing", pl: "zwiedzanie", example: "We went sightseeing in Kraków." },
          { en: "souvenir", pl: "pamiątka", example: "She bought a souvenir for her sister." },
          { en: "currency", pl: "waluta", example: "What's the local currency here?" },
          { en: "customs", pl: "zwyczaje; odprawa celna", example: "Local customs are different from ours." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: podróże", theoryRef: "B1/x6/s1", questions: [
          { kind: "match", pairs: [ { a: "flight", b: "lot" }, { a: "luggage", b: "bagaż" }, { a: "abroad", b: "za granicą" }, { a: "souvenir", b: "pamiątka" } ], theoryRef: "B1/x6/s1" },
          { kind: "gap", q: "We booked our ___ near the beach. (accommodation/currency)", answer: "accommodation", theoryRef: "B1/x6/s1" },
          { kind: "choice", q: "Visiting famous places is called ___.", options: ["sightseeing", "luggage", "currency"], answer: 0 },
          { kind: "dropdown", q: "Our ___ was delayed because of the storm.", options: ["flight", "souvenir", "custom"], answer: 0 },
          { kind: "truefalse", q: "„abroad” oznacza za granicą.", answer: true },
          { kind: "categorize", q: "Posortuj słowa:", cats: ["Transport", "Nocleg"], items: [ { t: "flight", cat: 0 }, { t: "hotel", cat: 1 }, { t: "train", cat: 0 }, { t: "hostel", cat: 1 } ] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A trip to Italy", intro: "Przeczytaj o podróży do Włoch.", passage: `
          <p>Last spring, Marek and his friends travelled abroad for the first time.</p>
          <p>They flew to Rome, where they stayed in a small hotel near the centre.</p>
          <p>Every morning they went sightseeing and took hundreds of photos.</p>
          <p>Marek loved the local food, especially the fresh pasta and ice cream.</p>
          <p>He also learned a few Italian customs, such as a long lunch break.</p>
          <p>Before going home, he bought a souvenir for his parents.</p>`, theoryRef: "B1/x6/s1", questions: [
          { kind: "truefalse", q: "They travelled to Spain.", answer: false },
          { kind: "choice", q: "Where did they stay?", options: ["In a hotel near the centre", "In a tent", "With relatives"], answer: 0 },
          { kind: "gap", q: "Marek bought a ___ for his parents.", answer: "souvenir" },
          { kind: "truefalse", q: "It was their first trip abroad.", answer: true }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: na lotnisku", theoryRef: "B1/x6/s1", recordLine: 1, lines: [
          { speaker: "Agent", en: "Good morning. May I see your passport and ticket?", pl: "Dzień dobry. Czy mogę zobaczyć paszport i bilet?" },
          { speaker: "Ty", en: "Here you are. I'd like to check in this luggage.", pl: "Proszę bardzo. Chciałbym nadać ten bagaż." },
          { speaker: "Agent", en: "Of course. Your flight leaves from gate twelve.", pl: "Oczywiście. Pana lot odlatuje z bramki dwunastej." },
          { speaker: "Ty", en: "Thank you. What time should I be at the gate?", pl: "Dziękuję. O której powinienem być przy bramce?" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: podróże i kultura", questions: [
          { kind: "choice", q: "Money used in a country is its ___.", options: ["currency", "customs", "flight"], answer: 0 },
          { kind: "gap", q: "I always pack my ___ the night before. (luggage/sightseeing)", answer: "luggage" },
          { kind: "match", pairs: [ { a: "currency", b: "waluta" }, { a: "sightseeing", b: "zwiedzanie" }, { a: "abroad", b: "za granicą" } ] },
          { kind: "categorize", q: "Posortuj słowa:", cats: ["Lotnisko", "Kultura"], items: [ { t: "flight", cat: 0 }, { t: "customs (zwyczaje)", cat: 1 }, { t: "gate", cat: 0 }, { t: "festival", cat: 1 } ] },
          { kind: "truefalse", q: "„souvenir” to pamiątka z podróży.", answer: true },
          { kind: "multi", q: "Które słowa pasują do podróży?", options: ["flight", "luggage", "homework", "accommodation", "blackboard"], answers: [0, 1, 3] }
        ]}
      ]
    },

    /* ---------------- x7 — Reported speech (gramatyka) ---------------- */
    {
      id: "x7", title: "Mowa zależna (zdania twierdzące)", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: reported speech", html: `
          <p>W mowie zależnej relacjonujemy, co ktoś powiedział. Czas zwykle „cofa się" o jeden.</p>
          <table class="t-table">
            <tr><th>Mowa wprost</th><th>Mowa zależna</th></tr>
            <tr><td>Present Simple → </td><td>Past Simple</td></tr>
            <tr><td>Present Continuous → </td><td>Past Continuous</td></tr>
            <tr><td>Past Simple / Present Perfect → </td><td>Past Perfect</td></tr>
            <tr><td>will → </td><td>would</td></tr>
          </table>
          <p>Przykład: <span class="say">"I am tired," she said.</span> → <span class="say">She said she was tired.</span></p>
          <p>Zmieniamy też zaimki i okoliczniki: <b>now → then</b>, <b>today → that day</b>, <b>tomorrow → the next day</b>.</p>
          <p class="tip">💡 Po „tell" potrzebny jest dopełnienie: <span class="say">She told me that she was busy.</span> Po „say" nie: <span class="say">She said that she was busy.</span> „She said me" jest błędne.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: relacjonowanie", words: [
          { en: "say", pl: "powiedzieć (coś)", example: "He said that he was happy." },
          { en: "tell", pl: "powiedzieć (komuś)", example: "She told me that she was leaving." },
          { en: "explain", pl: "wyjaśnić", example: "He explained that the shop was closed." },
          { en: "admit", pl: "przyznać", example: "She admitted that she was wrong." },
          { en: "promise", pl: "obiecać", example: "He promised that he would help." },
          { en: "mention", pl: "wspomnieć", example: "She mentioned that she liked jazz." },
          { en: "complain", pl: "narzekać", example: "They complained that the food was cold." },
          { en: "reply", pl: "odpowiedzieć", example: "He replied that he agreed." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: mowa zależna", theoryRef: "B1/x7/s1", questions: [
          { kind: "transform", q: "Zamień na mowę zależną:", given: `"I am tired," she said.`, hint: "She said that...", answer: ["She said that she was tired.", "She said she was tired."] },
          { kind: "transform", q: "Zamień na mowę zależną:", given: `"We live in London," they said.`, hint: "They said that...", answer: ["They said that they lived in London.", "They said they lived in London."] },
          { kind: "choice", q: "Direct: „I will call you” → Reported: He said he ___ call me.", options: ["will", "would", "wills"], answer: 1, theoryRef: "B1/x7/s1" },
          { kind: "gap", q: "He said he ___ (be) busy that day.", answer: "was", theoryRef: "B1/x7/s1" },
          { kind: "truefalse", q: "Zdanie „She said me” jest niepoprawne.", answer: true },
          { kind: "dropdown", q: "She ___ me that she was hungry.", options: ["told", "said", "spoke"], answer: 0 },
          { kind: "transform", q: "Zamień na mowę zależną:", given: `"I have finished," he said.`, hint: "He said that...", answer: ["He said that he had finished.", "He said he had finished."] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: przekaż wiadomość", theoryRef: "B1/x7/s1", recordLine: 1, lines: [
          { speaker: "Ola", en: "What did Tom say about the meeting?", pl: "Co Tom powiedział o spotkaniu?" },
          { speaker: "Ty", en: "He said that the meeting was at three o'clock.", pl: "Powiedział, że spotkanie jest o trzeciej." },
          { speaker: "Ola", en: "And did he mention the new project?", pl: "A wspominał o nowym projekcie?" },
          { speaker: "Ty", en: "Yes, he told me that he would send the details.", pl: "Tak, powiedział mi, że prześle szczegóły." }
        ]},
        { id: "s5", type: "listen", title: "Słuchanie: dyktando o relacji", audio: "She said that she was learning English. He told me that he would visit us next week. They explained that the train had left early.", instructions: "Posłuchaj i zapisz zdania.", questions: [
          { kind: "dictation", q: "Zapisz pierwsze zdanie:", audio: "She said that she was learning English.", answer: "She said that she was learning English." },
          { kind: "dictation", q: "Zapisz drugie zdanie:", audio: "He told me that he would visit us next week.", answer: "He told me that he would visit us next week." },
          { kind: "truefalse", q: "W nagraniu pojawia się czasownik „explained”.", answer: true }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: mowa zależna", questions: [
          { kind: "transform", q: "Zamień na mowę zależną:", given: `"I am cooking dinner," she said.`, hint: "She said that...", answer: ["She said that she was cooking dinner.", "She said she was cooking dinner."] },
          { kind: "transform", q: "Zamień na mowę zależną:", given: `"We will help you," they said.`, hint: "They said that...", answer: ["They said that they would help us.", "They said they would help us."] },
          { kind: "dropdown", q: "He ___ that he liked the film.", options: ["said", "told", "spoke"], answer: 0 },
          { kind: "gap", q: "She told ___ that she was tired. (me/say)", answer: "me" },
          { kind: "choice", q: "„now” w mowie zależnej zmienia się na ___.", options: ["then", "today", "soon"], answer: 0 },
          { kind: "truefalse", q: "„will” w mowie zależnej zmienia się na „would”.", answer: true },
          { kind: "dictation", q: "Zapisz zdanie:", audio: "They said that they were ready.", answer: "They said that they were ready." }
        ]}
      ]
    },

    /* ---------------- x8 — Feelings & relationships (leksyka) ---------------- */
    {
      id: "x8", title: "Uczucia i relacje", icon: "💞",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język uczuć", html: `
          <p>W tej jednostce poznasz słownictwo o <b>uczuciach</b> i <b>relacjach</b> z ludźmi.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td><span class="say">excited</span></td><td>podekscytowany</td></tr>
            <tr><td><span class="say">nervous</span></td><td>zdenerwowany</td></tr>
            <tr><td><span class="say">proud</span></td><td>dumny</td></tr>
            <tr><td><span class="say">jealous</span></td><td>zazdrosny</td></tr>
          </table>
          <p>Relacje: <span class="say">get on well with someone</span> (dobrze się z kimś dogadywać), <span class="say">fall out with someone</span> (pokłócić się).</p>
          <p class="tip">💡 Po przymiotnikach uczuć często używamy „about": <span class="say">I'm nervous about the exam.</span> lub „with": <span class="say">I'm angry with him.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: emocje i więzi", words: [
          { en: "excited", pl: "podekscytowany", example: "I'm so excited about the trip." },
          { en: "nervous", pl: "zdenerwowany, zestresowany", example: "She felt nervous before the interview." },
          { en: "proud", pl: "dumny", example: "His parents are proud of him." },
          { en: "jealous", pl: "zazdrosny", example: "He gets jealous very easily." },
          { en: "relationship", pl: "związek, relacja", example: "They have a strong relationship." },
          { en: "trust", pl: "ufać; zaufanie", example: "I trust my best friend completely." },
          { en: "argue", pl: "kłócić się", example: "They sometimes argue about small things." },
          { en: "support", pl: "wspierać; wsparcie", example: "My family always supports me." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: uczucia", theoryRef: "B1/x8/s1", questions: [
          { kind: "match", pairs: [ { a: "excited", b: "podekscytowany" }, { a: "nervous", b: "zdenerwowany" }, { a: "proud", b: "dumny" }, { a: "jealous", b: "zazdrosny" } ], theoryRef: "B1/x8/s1" },
          { kind: "gap", q: "I'm a bit ___ about the exam tomorrow. (nervous/proud)", answer: "nervous", theoryRef: "B1/x8/s1" },
          { kind: "choice", q: "When two people stop being friends after a fight, they ___.", options: ["fall out", "get on", "support"], answer: 0 },
          { kind: "dropdown", q: "His parents are very ___ of his results.", options: ["proud", "jealous", "nervous"], answer: 0 },
          { kind: "truefalse", q: "„trust” oznacza ufać.", answer: true },
          { kind: "categorize", q: "Posortuj uczucia:", cats: ["Pozytywne", "Negatywne"], items: [ { t: "excited", cat: 0 }, { t: "jealous", cat: 1 }, { t: "proud", cat: 0 }, { t: "nervous", cat: 1 } ] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: rozmowa o przyjaźni", audio: "I have known my best friend Julia since primary school. We get on really well and we hardly ever argue. When I feel sad, she always supports me. Last year we fell out for a few days, but we soon made up. I trust her completely.", instructions: "Posłuchaj i odpowiedz na pytania.", questions: [
          { kind: "truefalse", q: "The speaker and Julia argue all the time.", answer: false },
          { kind: "choice", q: "How long have they known each other?", options: ["Since primary school", "Since last year", "For a few days"], answer: 0 },
          { kind: "gap", q: "When the speaker feels sad, Julia always ___.", answer: ["supports me", "supports her"] },
          { kind: "truefalse", q: "They made up after falling out.", answer: true }
        ]},
        { id: "s5", type: "speak", title: "Mów: o emocjach", prompts: [
          { en: "I'm really excited about my new job.", pl: "Jestem naprawdę podekscytowany nową pracą." },
          { en: "I get on well with my colleagues.", pl: "Dobrze dogaduję się ze współpracownikami." },
          { en: "I trust my friends and they support me.", pl: "Ufam moim przyjaciołom, a oni mnie wspierają." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: uczucia i relacje", questions: [
          { kind: "choice", q: "If you feel happy and energetic before a party, you feel ___.", options: ["excited", "jealous", "bored"], answer: 0 },
          { kind: "gap", q: "They sometimes ___ about money. (argue/trust)", answer: "argue" },
          { kind: "match", pairs: [ { a: "relationship", b: "związek" }, { a: "support", b: "wspierać" }, { a: "trust", b: "ufać" } ] },
          { kind: "categorize", q: "Posortuj zwroty o relacjach:", cats: ["Dobre relacje", "Konflikt"], items: [ { t: "get on well", cat: 0 }, { t: "fall out", cat: 1 }, { t: "support each other", cat: 0 }, { t: "argue a lot", cat: 1 } ] },
          { kind: "truefalse", q: "„proud” oznacza dumny.", answer: true },
          { kind: "multi", q: "Które słowa opisują uczucia?", options: ["nervous", "table", "jealous", "excited", "window"], answers: [0, 2, 3] }
        ]}
      ]
    }

  );
})();
