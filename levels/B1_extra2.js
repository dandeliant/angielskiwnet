/* B1 — dodatkowe tematy, część 2 (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "B1"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- x9 — Present Perfect vs Past Simple — doświadczenia (gramatyka) ---------------- */
    {
      id: "x9", title: "Present Perfect vs Past Simple — doświadczenia", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: doświadczenia życiowe", html: `
          <p>Gdy mówimy o <b>doświadczeniach życiowych</b> bez podawania kiedy, używamy <b>Present Perfect</b>.</p>
          <table class="t-table">
            <tr><th>Sytuacja</th><th>Czas</th><th>Przykład</th></tr>
            <tr><td>Pytanie o doświadczenie</td><td>Present Perfect + ever</td><td><span class="say">Have you ever ridden a horse?</span></td></tr>
            <tr><td>Świeża nowina (właśnie)</td><td>Present Perfect + just</td><td><span class="say">I have just finished work.</span></td></tr>
            <tr><td>Konkretny moment w przeszłości</td><td>Past Simple</td><td><span class="say">I rode a horse last summer.</span></td></tr>
          </table>
          <p>Typowy schemat rozmowy: najpierw pytamy w Present Perfect (<span class="say">Have you ever been abroad?</span>), a szczegóły podajemy w Past Simple (<span class="say">Yes, I went to Spain in 2021.</span>).</p>
          <p class="tip">💡 Słowa „ever, never, just, already, yet" łączą się z Present Perfect. Konkretny czas (yesterday, last year, in 2020) wymusza Past Simple.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: doświadczenia", words: [
          { en: "abroad", pl: "za granicą", example: "Have you ever lived abroad?" },
          { en: "try (sth) new", pl: "spróbować czegoś nowego", example: "I have tried surfing a few times." },
          { en: "win", pl: "wygrać", example: "She has won several competitions." },
          { en: "lose", pl: "przegrać; zgubić", example: "We lost the match last weekend." },
          { en: "meet", pl: "poznać; spotkać", example: "I have met a lot of interesting people." },
          { en: "break", pl: "złamać; zepsuć", example: "He has broken his arm twice." },
          { en: "once", pl: "raz; kiedyś", example: "I have been to Rome once." },
          { en: "several times", pl: "kilka razy", example: "She has visited us several times." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: doświadczenia", theoryRef: "B1/x9/s1", questions: [
          { kind: "choice", q: "___ you ever been to Greece?", options: ["Did", "Have", "Has"], answer: 1, theoryRef: "B1/x9/s1" },
          { kind: "dropdown", q: "I ___ my leg when I was ten.", options: ["have broken", "broke", "have broke"], answer: 1, theoryRef: "B1/x9/s1" },
          { kind: "gap", q: "She has ___ won three medals so far. (already/yet)", answer: "already", theoryRef: "B1/x9/s1" },
          { kind: "transform", q: "Odpowiedz w Past Simple, podając czas:", given: "Have you visited Paris? (last year)", hint: "I visited…", answer: ["I visited Paris last year.", "Yes, I visited Paris last year."] },
          { kind: "truefalse", q: "Zdanie „I have met him yesterday.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["Have", "you", "ever", "tried", "sushi"], answer: ["Have", "you", "ever", "tried", "sushi"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A real adventurer", intro: "Przeczytaj o Tomku.", passage: `
          <p>My uncle Tom is a real adventurer. He has travelled to more than forty countries.</p>
          <p>He has climbed high mountains and he has even swum with sharks. Last year he visited Iceland and saw the northern lights.</p>
          <p>He has never been to Australia, but he wants to go there next winter.</p>
          <p>When I asked him about his favourite trip, he said: „I loved Peru the most. I went there in 2019.”</p>`, theoryRef: "B1/x9/s1", questions: [
          { kind: "choice", q: "How many countries has Tom travelled to?", options: ["More than forty", "Exactly fourteen", "About four"], answer: 0 },
          { kind: "truefalse", q: "Tom has already been to Australia.", answer: false },
          { kind: "gap", q: "Last year he visited ___ and saw the northern lights.", answer: "Iceland" },
          { kind: "choice", q: "Why is „I went there in 2019” in Past Simple?", options: ["Because it is a life experience", "Because there is a specific time", "Because it uses ever"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: rozmowa o podróżach", theoryRef: "B1/x9/s1", recordLine: 1, lines: [
          { speaker: "Kate", en: "Have you ever travelled outside Europe?", pl: "Czy podróżowałeś kiedyś poza Europę?" },
          { speaker: "Ty", en: "Yes, I have. I went to Morocco two years ago.", pl: "Tak. Dwa lata temu pojechałem do Maroka." },
          { speaker: "Kate", en: "Wow! Have you tried the local food?", pl: "Wow! Próbowałeś tamtejszego jedzenia?" },
          { speaker: "Ty", en: "Of course. I have just learnt to cook tagine at home!", pl: "Oczywiście. Właśnie nauczyłem się gotować tadżin w domu!" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: doświadczenia", questions: [
          { kind: "choice", q: "We ___ that film three times already.", options: ["saw", "have seen", "see"], answer: 1 },
          { kind: "gap", q: "I ___ (not / be) to Asia yet.", answer: ["haven't been", "have not been"] },
          { kind: "transform", q: "Zamień na Present Perfect z „never”:", given: "I didn't eat octopus.", answer: ["I have never eaten octopus.", "I've never eaten octopus."] },
          { kind: "dropdown", q: "They ___ this house in 2015.", options: ["have bought", "bought", "has bought"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "has", "won", "many", "prizes"], answer: ["She", "has", "won", "many", "prizes"] }
        ]}
      ]
    },

    /* ---------------- x10 — Praca i kariera (leksyka) ---------------- */
    {
      id: "x10", title: "Praca i kariera — szukanie pracy", icon: "💼",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język rynku pracy", html: `
          <p>W tej jednostce poznasz słownictwo związane z <b>szukaniem pracy</b> i <b>rozwojem kariery</b>.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td><span class="say">apply for a job</span></td><td>ubiegać się o pracę</td></tr>
            <tr><td><span class="say">job interview</span></td><td>rozmowa kwalifikacyjna</td></tr>
            <tr><td><span class="say">skills and experience</span></td><td>umiejętności i doświadczenie</td></tr>
            <tr><td><span class="say">get a promotion</span></td><td>dostać awans</td></tr>
          </table>
          <p>Najpierw <span class="say">we send a CV</span> i <span class="say">a cover letter</span>, potem mamy <span class="say">an interview</span>, a jeśli się uda — <span class="say">we get the job</span>.</p>
          <p class="tip">💡 „apply" łączy się z „for": <span class="say">She applied for a marketing job.</span> Pracujemy „for a company" i „as a teacher".</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: praca i kariera", words: [
          { en: "apply for a job", pl: "ubiegać się o pracę", example: "I applied for a job at a bank." },
          { en: "CV / résumé", pl: "życiorys, CV", example: "Please send us your CV." },
          { en: "interview", pl: "rozmowa kwalifikacyjna", example: "I have an interview on Monday." },
          { en: "skills", pl: "umiejętności", example: "Good communication skills are important." },
          { en: "experience", pl: "doświadczenie", example: "She has five years of experience." },
          { en: "employer", pl: "pracodawca", example: "My employer offers flexible hours." },
          { en: "salary", pl: "pensja, wynagrodzenie", example: "The salary is quite competitive." },
          { en: "promotion", pl: "awans", example: "He got a promotion after two years." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: praca i kariera", theoryRef: "B1/x10/s1", questions: [
          { kind: "match", pairs: [{ a: "interview", b: "rozmowa kwalifikacyjna" }, { a: "salary", b: "pensja" }, { a: "skills", b: "umiejętności" }, { a: "promotion", b: "awans" }], theoryRef: "B1/x10/s1" },
          { kind: "gap", q: "I want to ___ for a job at that company. (apply)", answer: "apply", theoryRef: "B1/x10/s1" },
          { kind: "choice", q: "A document with your work history is a ___.", options: ["CV", "salary", "skill"], answer: 0 },
          { kind: "dropdown", q: "She has a lot of ___ in marketing.", options: ["experience", "interview", "employer"], answer: 0 },
          { kind: "truefalse", q: "„employer” oznacza osobę, która zatrudnia.", answer: true },
          { kind: "categorize", q: "Posortuj słowa:", cats: ["Etap rekrutacji", "Po zatrudnieniu"], items: [{ t: "apply for a job", cat: 0 }, { t: "get a promotion", cat: 1 }, { t: "send a CV", cat: 0 }, { t: "salary", cat: 1 }] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: przed rozmową o pracę", audio: "Last week I applied for a job as a graphic designer. Yesterday the company called me and invited me to an interview. I am quite nervous, but I have good skills and three years of experience. I hope they like my CV and offer me a good salary.", instructions: "Posłuchaj i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What job did the speaker apply for?", options: ["Graphic designer", "Teacher", "Manager"], answer: 0 },
          { kind: "truefalse", q: "The speaker has three years of experience.", answer: true },
          { kind: "gap", q: "The company invited the speaker to an ___.", answer: "interview" },
          { kind: "dictation", q: "Wpisz, co usłyszysz:", audio: "I hope they like my CV.", answer: "I hope they like my CV." }
        ]},
        { id: "s5", type: "speak", title: "Mów: o swojej karierze", prompts: [
          { en: "I'd like to apply for this position.", pl: "Chciałbym ubiegać się o to stanowisko." },
          { en: "I have good organisational skills and experience.", pl: "Mam dobre umiejętności organizacyjne i doświadczenie." },
          { en: "I hope to get a promotion next year.", pl: "Mam nadzieję dostać awans w przyszłym roku." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: praca i kariera", questions: [
          { kind: "choice", q: "Before an interview you usually send your ___.", options: ["salary", "CV", "promotion"], answer: 1 },
          { kind: "gap", q: "He applied ___ a job as an engineer. (przyimek)", answer: "for" },
          { kind: "match", pairs: [{ a: "employer", b: "pracodawca" }, { a: "experience", b: "doświadczenie" }, { a: "salary", b: "pensja" }] },
          { kind: "categorize", q: "Pozytywne czy negatywne dla kandydata?", cats: ["Dobre", "Złe"], items: [{ t: "get the job", cat: 0 }, { t: "get a promotion", cat: 0 }, { t: "fail the interview", cat: 1 }, { t: "lose your job", cat: 1 }] },
          { kind: "truefalse", q: "„promotion” oznacza obniżkę pensji.", answer: false }
        ]}
      ]
    },

    /* ---------------- x11 — First Conditional (gramatyka) ---------------- */
    {
      id: "x11", title: "First Conditional — realne warunki", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: First Conditional", html: `
          <p><b>First Conditional</b> opisuje <b>realne</b> sytuacje w przyszłości i ich skutki.</p>
          <table class="t-table">
            <tr><th>Część zdania</th><th>Czas</th><th>Przykład</th></tr>
            <tr><td>Warunek (if)</td><td>Present Simple</td><td><span class="say">If it rains,</span></td></tr>
            <tr><td>Skutek</td><td>will + bezokolicznik</td><td><span class="say">we will stay at home.</span></td></tr>
          </table>
          <p>Pełne zdanie: <span class="say">If it rains, we will stay at home.</span></p>
          <p>Kolejność może być odwrotna (bez przecinka): <span class="say">We will stay at home if it rains.</span></p>
          <p class="tip">💡 Po „if" NIE używamy „will": mówimy <span class="say">If you study,</span> a nie „If you will study". „will" pojawia się tylko w części o skutku.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: plany i warunki", words: [
          { en: "if", pl: "jeśli", example: "If you hurry, you will catch the bus." },
          { en: "unless", pl: "jeśli nie, chyba że", example: "Unless it stops raining, we will stay inside." },
          { en: "as soon as", pl: "gdy tylko", example: "I will call you as soon as I arrive." },
          { en: "hurry", pl: "spieszyć się", example: "Hurry up or we will be late." },
          { en: "miss", pl: "spóźnić się na; przegapić", example: "If you don't run, you will miss the train." },
          { en: "pass an exam", pl: "zdać egzamin", example: "If you revise, you will pass the exam." },
          { en: "promise", pl: "obiecać", example: "I promise I will help you." },
          { en: "be in trouble", pl: "mieć kłopoty", example: "You will be in trouble if you are late again." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: First Conditional", theoryRef: "B1/x11/s1", questions: [
          { kind: "choice", q: "If it ___ tomorrow, we will go to the beach.", options: ["will be sunny", "is sunny", "be sunny"], answer: 1, theoryRef: "B1/x11/s1" },
          { kind: "dropdown", q: "If you study hard, you ___ the exam.", options: ["will pass", "pass", "passed"], answer: 0, theoryRef: "B1/x11/s1" },
          { kind: "gap", q: "If you ___ (not hurry), you will miss the bus.", answer: ["don't hurry", "do not hurry"], theoryRef: "B1/x11/s1" },
          { kind: "transform", q: "Zbuduj First Conditional:", given: "rain → we / stay home", hint: "If it rains, …", answer: ["If it rains, we will stay home.", "If it rains we will stay home."] },
          { kind: "truefalse", q: "Zdanie „If it will rain, we will stay home.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "you", "ask", "she", "will", "help"], answer: ["If", "you", "ask", "she", "will", "help"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A plan for Saturday", intro: "Przeczytaj plany na sobotę.", passage: `
          <p>We are planning a picnic for Saturday, but everything depends on the weather.</p>
          <p>If the sun shines, we will go to the lake and have lunch outside. If it rains, we will stay at home and watch films instead.</p>
          <p>My brother says that if he finishes his homework, he will come too. We will be very happy if all our friends join us.</p>`, theoryRef: "B1/x11/s1", questions: [
          { kind: "choice", q: "What will they do if the sun shines?", options: ["Stay at home", "Go to the lake", "Do homework"], answer: 1 },
          { kind: "truefalse", q: "If it rains, they will watch films.", answer: true },
          { kind: "gap", q: "The brother will come if he finishes his ___.", answer: "homework" },
          { kind: "choice", q: "Which tense follows „if” here?", options: ["Present Simple", "Future with will", "Past Simple"], answer: 0 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: plany na wieczór", theoryRef: "B1/x11/s1", recordLine: 1, lines: [
          { speaker: "Sam", en: "If I finish work early, I will cook dinner. What about you?", pl: "Jeśli skończę pracę wcześnie, ugotuję kolację. A ty?" },
          { speaker: "Ty", en: "If you cook, I will bring some dessert!", pl: "Jeśli ty gotujesz, ja przyniosę deser!" },
          { speaker: "Sam", en: "Great. And if the weather is nice, we will eat in the garden.", pl: "Świetnie. A jeśli będzie ładna pogoda, zjemy w ogrodzie." },
          { speaker: "Ty", en: "Perfect. I will text you as soon as I leave the office.", pl: "Idealnie. Napiszę do ciebie, gdy tylko wyjdę z biura." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: First Conditional", questions: [
          { kind: "choice", q: "If she ___ late, she will call us.", options: ["is", "will be", "be"], answer: 0 },
          { kind: "gap", q: "We will be late if we ___ (not leave) now.", answer: ["don't leave", "do not leave"] },
          { kind: "transform", q: "Połącz w jedno zdanie:", given: "You don't water the plant. It will die.", hint: "If you don't…", answer: ["If you don't water the plant, it will die.", "If you do not water the plant, it will die."] },
          { kind: "dropdown", q: "Unless you hurry, you ___ the train.", options: ["will miss", "miss", "missed"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "it", "snows", "we", "will", "ski"], answer: ["If", "it", "snows", "we", "will", "ski"] }
        ]}
      ]
    },

    /* ---------------- x12 — Zdrowie i styl życia (leksyka) ---------------- */
    {
      id: "x12", title: "Zdrowie i styl życia", icon: "🏃",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język zdrowego trybu życia", html: `
          <p>W tej jednostce poznasz słownictwo o <b>zdrowiu</b>, <b>kondycji</b> i <b>dobrym samopoczuciu</b>.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td><span class="say">keep fit</span></td><td>utrzymywać formę</td></tr>
            <tr><td><span class="say">balanced diet</span></td><td>zbilansowana dieta</td></tr>
            <tr><td><span class="say">work out</span></td><td>ćwiczyć, trenować</td></tr>
            <tr><td><span class="say">well-being</span></td><td>dobre samopoczucie</td></tr>
          </table>
          <p>Częste rady: <span class="say">You should exercise regularly.</span> oraz <span class="say">You shouldn't skip breakfast.</span></p>
          <p class="tip">💡 „healthy" to przymiotnik (a healthy meal), a „health" to rzeczownik (good health). Nie myl ich!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zdrowie i kondycja", words: [
          { en: "keep fit", pl: "utrzymywać formę", example: "I jog every morning to keep fit." },
          { en: "work out", pl: "ćwiczyć, trenować", example: "She works out at the gym three times a week." },
          { en: "balanced diet", pl: "zbilansowana dieta", example: "A balanced diet keeps you healthy." },
          { en: "well-being", pl: "dobre samopoczucie", example: "Sleep is important for your well-being." },
          { en: "stress", pl: "stres", example: "Exercise helps me reduce stress." },
          { en: "give up", pl: "rzucić (nałóg, zwyczaj)", example: "He gave up smoking last year." },
          { en: "junk food", pl: "niezdrowe jedzenie", example: "Try to avoid junk food." },
          { en: "energetic", pl: "energiczny, pełen energii", example: "I feel more energetic after a run." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zdrowie i styl życia", theoryRef: "B1/x12/s1", questions: [
          { kind: "match", pairs: [{ a: "keep fit", b: "utrzymywać formę" }, { a: "stress", b: "stres" }, { a: "junk food", b: "niezdrowe jedzenie" }, { a: "well-being", b: "dobre samopoczucie" }], theoryRef: "B1/x12/s1" },
          { kind: "gap", q: "A ___ diet should include fruit and vegetables. (balanced)", answer: "balanced", theoryRef: "B1/x12/s1" },
          { kind: "choice", q: "To exercise in a gym is to ___.", options: ["work out", "give up", "keep up"], answer: 0 },
          { kind: "dropdown", q: "He decided to ___ sugar to feel healthier.", options: ["give up", "keep fit", "work out"], answer: 0 },
          { kind: "truefalse", q: "„junk food” to zdrowe jedzenie.", answer: false },
          { kind: "categorize", q: "Posortuj nawyki:", cats: ["Zdrowe", "Niezdrowe"], items: [{ t: "eat vegetables", cat: 0 }, { t: "skip sleep", cat: 1 }, { t: "work out", cat: 0 }, { t: "eat junk food", cat: 1 }] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: zmiana stylu życia", audio: "Six months ago I was very unfit and tired. I ate a lot of junk food and never exercised. Then I decided to change my lifestyle. Now I work out three times a week and I follow a balanced diet. I have also given up sugar. I feel much more energetic and my stress levels are lower.", instructions: "Posłuchaj i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "How often does the speaker work out now?", options: ["Three times a week", "Every day", "Never"], answer: 0 },
          { kind: "truefalse", q: "The speaker has given up sugar.", answer: true },
          { kind: "gap", q: "Now the speaker feels much more ___.", answer: "energetic" },
          { kind: "dictation", q: "Wpisz, co usłyszysz:", audio: "I follow a balanced diet.", answer: "I follow a balanced diet." }
        ]},
        { id: "s5", type: "speak", title: "Mów: o zdrowym trybie życia", prompts: [
          { en: "I try to keep fit by cycling to work.", pl: "Staram się utrzymywać formę, jeżdżąc do pracy rowerem." },
          { en: "A balanced diet is good for your well-being.", pl: "Zbilansowana dieta jest dobra dla dobrego samopoczucia." },
          { en: "I gave up junk food and I feel more energetic.", pl: "Rzuciłem niezdrowe jedzenie i czuję się bardziej energiczny." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: zdrowie i styl życia", questions: [
          { kind: "choice", q: "Which one is the healthiest habit?", options: ["Eating a balanced diet", "Skipping sleep", "Eating junk food"], answer: 0 },
          { kind: "gap", q: "He ___ ___ smoking two years ago. (rzucił)", answer: ["gave up"] },
          { kind: "match", pairs: [{ a: "work out", b: "trenować" }, { a: "energetic", b: "energiczny" }, { a: "stress", b: "stres" }] },
          { kind: "categorize", q: "Posortuj słowa:", cats: ["Aktywność", "Dieta"], items: [{ t: "work out", cat: 0 }, { t: "balanced diet", cat: 1 }, { t: "go jogging", cat: 0 }, { t: "junk food", cat: 1 }] },
          { kind: "truefalse", q: "„well-being” oznacza dobre samopoczucie.", answer: true }
        ]}
      ]
    },

    /* ---------------- x13 — Past Continuous vs Past Simple (gramatyka) ---------------- */
    {
      id: "x13", title: "Past Continuous vs Past Simple — while / when", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: while / when", html: `
          <p>Łączymy dwie czynności z przeszłości: jedną <b>trwającą w tle</b> i drugą, która ją <b>przerywa</b>.</p>
          <table class="t-table">
            <tr><th>Czynność</th><th>Czas</th><th>Przykład</th></tr>
            <tr><td>Trwająca w tle (dłuższa)</td><td>Past Continuous</td><td><span class="say">I was cooking</span></td></tr>
            <tr><td>Nagła, krótka (przerywa)</td><td>Past Simple</td><td><span class="say">when the phone rang.</span></td></tr>
          </table>
          <p>Budowa Past Continuous: <b>was / were</b> + czasownik z <b>-ing</b>.</p>
          <p>Z <b>while</b> zwykle używamy czynności dłuższej (Past Continuous), a z <b>when</b> krótszej (Past Simple): <span class="say">While I was reading, the lights went out.</span></p>
          <p class="tip">💡 Dwie równoległe, dłuższe czynności: oba w Past Continuous — <span class="say">She was studying while I was cooking.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: nagłe zdarzenia", words: [
          { en: "while", pl: "podczas gdy", example: "While I was sleeping, it started to rain." },
          { en: "when", pl: "kiedy, gdy", example: "When the phone rang, I was cooking." },
          { en: "suddenly", pl: "nagle", example: "Suddenly, the lights went out." },
          { en: "happen", pl: "wydarzyć się", example: "What happened while you were away?" },
          { en: "fall", pl: "upaść", example: "He fell while he was running." },
          { en: "notice", pl: "zauważyć", example: "I noticed a stranger watching us." },
          { en: "drop", pl: "upuścić", example: "She dropped her phone while texting." },
          { en: "wake up", pl: "obudzić się", example: "I woke up when the alarm rang." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Past Continuous vs Past Simple", theoryRef: "B1/x13/s1", questions: [
          { kind: "choice", q: "I ___ dinner when the phone rang.", options: ["cooked", "was cooking", "cook"], answer: 1, theoryRef: "B1/x13/s1" },
          { kind: "dropdown", q: "While she ___ , it started to rain.", options: ["was walking", "walked", "walks"], answer: 0, theoryRef: "B1/x13/s1" },
          { kind: "gap", q: "When I ___ (see) him, he was waiting at the bus stop.", answer: "saw", theoryRef: "B1/x13/s1" },
          { kind: "transform", q: "Połącz w jedno zdanie (when):", given: "I / read a book + the lights / go out", hint: "I was reading when…", answer: ["I was reading when the lights went out.", "I was reading a book when the lights went out."] },
          { kind: "truefalse", q: "Zdanie „While I was reading, the phone was ringing suddenly.” poprawnie opisuje nagłe zdarzenie.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "was", "sleeping", "when", "I", "called"], answer: ["She", "was", "sleeping", "when", "I", "called"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A strange evening", intro: "Przeczytaj historię.", passage: `
          <p>It was a quiet evening. I was sitting in the living room and reading a book.</p>
          <p>While I was reading, I heard a strange noise in the kitchen. I stood up and went to check.</p>
          <p>When I opened the door, I saw my cat. She was playing with a cup. Suddenly, she dropped it and it broke on the floor.</p>
          <p>I was laughing when my brother came home and asked what had happened.</p>`, theoryRef: "B1/x13/s1", questions: [
          { kind: "choice", q: "What was the speaker doing at the start?", options: ["Sleeping", "Reading a book", "Cooking"], answer: 1 },
          { kind: "truefalse", q: "The cat dropped the cup and it broke.", answer: true },
          { kind: "gap", q: "The speaker heard a strange ___ in the kitchen.", answer: "noise" },
          { kind: "choice", q: "Why is „I heard a noise” in Past Simple?", options: ["It was a long background action", "It was a sudden, short action", "It will happen in the future"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: co się stało?", theoryRef: "B1/x13/s1", recordLine: 1, lines: [
          { speaker: "Anna", en: "You look upset. What happened this morning?", pl: "Wyglądasz na zmartwionego. Co się stało dziś rano?" },
          { speaker: "Ty", en: "While I was driving to work, my car broke down.", pl: "Gdy jechałem do pracy, zepsuł mi się samochód." },
          { speaker: "Anna", en: "Oh no! What were you doing when it stopped?", pl: "O nie! Co robiłeś, gdy stanął?" },
          { speaker: "Ty", en: "I was waiting at the lights when the engine just died.", pl: "Czekałem na światłach, gdy silnik po prostu zgasł." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: Past Continuous vs Past Simple", questions: [
          { kind: "choice", q: "They ___ TV when the storm started.", options: ["watched", "were watching", "watch"], answer: 1 },
          { kind: "gap", q: "While we ___ (have) dinner, the lights went out.", answer: ["were having", "had"] },
          { kind: "transform", q: "Połącz w jedno zdanie (while):", given: "She / cook + I / clean", hint: "dwie równoległe czynności", answer: ["She was cooking while I was cleaning.", "While she was cooking, I was cleaning."] },
          { kind: "dropdown", q: "I ___ my keys while I was running for the bus.", options: ["dropped", "was dropping", "drop"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "fell", "while", "he", "was", "skating"], answer: ["He", "fell", "while", "he", "was", "skating"] }
        ]}
      ]
    },

    /* ---------------- x14 — Technologia i internet w codziennym życiu (leksyka) ---------------- */
    {
      id: "x14", title: "Technologia i internet — na co dzień", icon: "📱",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: cyfrowe codzienne życie", html: `
          <p>W tej jednostce poznasz słownictwo opisujące <b>codzienne korzystanie z technologii</b>.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td><span class="say">download an app</span></td><td>pobrać aplikację</td></tr>
            <tr><td><span class="say">log in / log out</span></td><td>zalogować się / wylogować</td></tr>
            <tr><td><span class="say">password</span></td><td>hasło</td></tr>
            <tr><td><span class="say">stream a film</span></td><td>oglądać film online (strumieniowo)</td></tr>
          </table>
          <p>Typowe czynności: <span class="say">I check my emails every morning.</span> oraz <span class="say">She scrolls through social media on the bus.</span></p>
          <p class="tip">💡 Uwaga na czasowniki z dopełnieniem: „download" something, „log in to" a website, „connect to" the Wi-Fi.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: technologia i internet", words: [
          { en: "download", pl: "pobierać", example: "I downloaded a new app yesterday." },
          { en: "upload", pl: "wysyłać (do sieci), wgrywać", example: "She uploaded the photos to the cloud." },
          { en: "password", pl: "hasło", example: "I forgot my password again." },
          { en: "log in", pl: "zalogować się", example: "You need to log in to your account." },
          { en: "social media", pl: "media społecznościowe", example: "He spends hours on social media." },
          { en: "browse", pl: "przeglądać (internet)", example: "I was browsing the web for recipes." },
          { en: "device", pl: "urządzenie", example: "This app works on any device." },
          { en: "screen", pl: "ekran", example: "Try to reduce your screen time." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: technologia i internet", theoryRef: "B1/x14/s1", questions: [
          { kind: "match", pairs: [{ a: "download", b: "pobierać" }, { a: "password", b: "hasło" }, { a: "device", b: "urządzenie" }, { a: "screen", b: "ekran" }], theoryRef: "B1/x14/s1" },
          { kind: "gap", q: "You have to ___ in before you can read your messages. (log)", answer: "log", theoryRef: "B1/x14/s1" },
          { kind: "choice", q: "To put a photo onto the internet is to ___ it.", options: ["upload", "download", "log out"], answer: 0 },
          { kind: "dropdown", q: "I spend too much time on ___ media.", options: ["social", "screen", "device"], answer: 0 },
          { kind: "truefalse", q: "„browse” oznacza przeglądać internet.", answer: true },
          { kind: "categorize", q: "Posortuj czynności:", cats: ["Wysyłanie do sieci", "Pobieranie z sieci"], items: [{ t: "upload a video", cat: 0 }, { t: "download an app", cat: 1 }, { t: "post a photo", cat: 0 }, { t: "save a file from the web", cat: 1 }] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: nowy telefon", audio: "Last weekend I bought a new phone. First I logged in to my account and downloaded all my favourite apps. Then I created a strong password so my data would be safe. Now I use the phone for everything: I check emails, stream music and browse social media. I just need to be careful about my screen time.", instructions: "Posłuchaj i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What did the speaker do first with the new phone?", options: ["Logged in to the account", "Broke the screen", "Sold the phone"], answer: 0 },
          { kind: "truefalse", q: "The speaker created a strong password.", answer: true },
          { kind: "gap", q: "The speaker needs to be careful about ___ time.", answer: "screen" },
          { kind: "dictation", q: "Wpisz, co usłyszysz:", audio: "I check emails and stream music.", answer: "I check emails and stream music." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: problem z logowaniem", theoryRef: "B1/x14/s1", recordLine: 1, lines: [
          { speaker: "Tech", en: "Hello, how can I help you today?", pl: "Dzień dobry, jak mogę pomóc?" },
          { speaker: "Ty", en: "I can't log in to my account. It says my password is wrong.", pl: "Nie mogę zalogować się do konta. Pisze, że hasło jest błędne." },
          { speaker: "Tech", en: "No problem. Have you tried to reset your password?", pl: "Nie ma problemu. Czy próbował pan zresetować hasło?" },
          { speaker: "Ty", en: "Not yet. I will download the update and try again.", pl: "Jeszcze nie. Pobiorę aktualizację i spróbuję ponownie." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: technologia i internet", questions: [
          { kind: "choice", q: "A secret word that protects your account is a ___.", options: ["device", "password", "screen"], answer: 1 },
          { kind: "gap", q: "I ___ a new game from the app store. (pobrałem)", answer: "downloaded" },
          { kind: "match", pairs: [{ a: "upload", b: "wgrywać" }, { a: "browse", b: "przeglądać" }, { a: "social media", b: "media społecznościowe" }] },
          { kind: "categorize", q: "Posortuj słowa:", cats: ["Czynność", "Rzecz / urządzenie"], items: [{ t: "log in", cat: 0 }, { t: "device", cat: 1 }, { t: "download", cat: 0 }, { t: "screen", cat: 1 }] },
          { kind: "truefalse", q: "„log out” oznacza wylogować się.", answer: true }
        ]}
      ]
    }

  );
})();
