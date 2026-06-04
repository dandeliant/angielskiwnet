/* ============================================================================
   POZIOM B1 — Grań  (Prawdziwa wspinaczka)
   ========================================================================== */

window.COURSE.levels.push({
  id: "B1",
  name: "B1 — Grań",
  subtitle: "Prawdziwa wspinaczka",
  altitude: "1600 m n.p.m.",
  color: "#a78bfa",
  locked: true,
  units: [

    /* ---------------- B1 / U1 — Present Perfect: wprowadzenie ---------------- */
    {
      id: "u1", title: "Present Perfect — wprowadzenie", icon: "✅",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Present Perfect", html: `
          <p><b>Present Perfect</b> tworzymy za pomocą <b>have / has</b> + <b>imiesłów czasu przeszłego</b> (past participle).</p>
          <table class="t-table">
            <tr><th>Podmiot</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>I / You / We / They</td><td>have + pp</td><td><span class="say">I have visited Paris.</span></td></tr>
            <tr><td>He / She / It</td><td>has + pp</td><td><span class="say">She has seen that film.</span></td></tr>
          </table>
          <p>Kluczowe przysłówki:</p>
          <ul>
            <li><b>ever</b> (kiedykolwiek) — w pytaniach: <span class="say">Have you ever eaten sushi?</span></li>
            <li><b>never</b> (nigdy): <span class="say">I have never been to Japan.</span></li>
            <li><b>just</b> (właśnie): <span class="say">He has just arrived.</span></li>
            <li><b>already</b> (już) — w zdaniach twierdzących: <span class="say">I've already done it.</span></li>
            <li><b>yet</b> (jeszcze) — w przeczeniach i pytaniach: <span class="say">Have you finished yet?</span></li>
          </ul>
          <p class="tip">💡 Imiesłów regularny = bezokolicznik + -ed. Nieregularne trzeba zapamiętać: go → gone, see → seen, eat → eaten.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czynności życiowe", words: [
          { en: "visit", pl: "odwiedzić", example: "I have visited London twice." },
          { en: "travel", pl: "podróżować", example: "She has travelled to many countries." },
          { en: "finish", pl: "skończyć", example: "Have you finished your homework yet?" },
          { en: "arrive", pl: "przybyć, dotrzeć", example: "He has just arrived at the airport." },
          { en: "experience", pl: "doświadczyć", example: "They have experienced real adventure." },
          { en: "achieve", pl: "osiągnąć", example: "She has achieved a lot in her career." },
          { en: "decide", pl: "zdecydować", example: "We have already decided." },
          { en: "improve", pl: "poprawić (się)", example: "My English has improved a lot." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Present Perfect", theoryRef: "B1/u1/s1", questions: [
          { kind: "choice", q: "I ___ never eaten Japanese food.", options: ["have", "has", "had"], answer: 0, theoryRef: "B1/u1/s1" },
          { kind: "choice", q: "She ___ just called me.", options: ["have", "has", "is"], answer: 1, theoryRef: "B1/u1/s1" },
          { kind: "gap", q: "Have you ___ been to Scotland? (ever/yet)", answer: "ever", theoryRef: "B1/u1/s1" },
          { kind: "gap", q: "I haven't finished ___. (yet/already)", answer: "yet" },
          { kind: "truefalse", q: "Zdanie 'She have seen it already.' jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "has", "already", "left"], answer: ["He", "has", "already", "left"] },
          { kind: "truefalse", q: "Past participle czasownika 'go' to 'gone'.", answer: true }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: co już zrobiłeś?", theoryRef: "B1/u1/s1", recordLine: 1, lines: [
          { speaker: "Mark", en: "Have you ever been to the UK?", pl: "Czy byłeś kiedyś w Wielkiej Brytanii?" },
          { speaker: "Ty", en: "Yes, I have. I've visited London twice.", pl: "Tak. Odwiedziłem Londyn dwa razy." },
          { speaker: "Mark", en: "Amazing! Have you seen the Big Ben?", pl: "Niesamowite! Widziałeś Big Ben?" },
          { speaker: "Ty", en: "Of course! I've already taken loads of photos.", pl: "Oczywiście! Już zrobiłem mnóstwo zdjęć." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: Present Perfect", questions: [
          { kind: "choice", q: "They ___ never tried bungee jumping.", options: ["have", "has", "had"], answer: 0 },
          { kind: "gap", q: "She has ___ finished the report. (właśnie)", answer: "just" },
          { kind: "order", q: "Ułóż zdanie:", words: ["Have", "you", "ever", "seen", "this", "film"], answer: ["Have", "you", "ever", "seen", "this", "film"] },
          { kind: "truefalse", q: "Wyrażenie 'I have already eaten yet.' jest poprawne.", answer: false },
          { kind: "match", pairs: [{ a: "just", b: "właśnie" }, { a: "yet", b: "jeszcze" }, { a: "already", b: "już" }] }
        ]}
      ]
    },

    /* ---------------- B1 / U2 — Present Perfect vs Past Simple ---------------- */
    {
      id: "u2", title: "Present Perfect vs Past Simple", icon: "⏳",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: PP vs Past Simple (for/since)", html: `
          <p>Wybór czasu zależy od perspektywy:</p>
          <table class="t-table">
            <tr><th>Czas</th><th>Kiedy używamy</th><th>Przykład</th></tr>
            <tr><td><b>Present Perfect</b></td><td>związek z teraźniejszością, nieokreślona przeszłość</td><td><span class="say">I have lost my keys.</span></td></tr>
            <tr><td><b>Past Simple</b></td><td>określony czas w przeszłości (yesterday, in 2010, last week)</td><td><span class="say">I lost my keys yesterday.</span></td></tr>
          </table>
          <p><b>for</b> vs <b>since</b>:</p>
          <ul>
            <li><b>for</b> + okres czasu: <span class="say">I have lived here for three years.</span></li>
            <li><b>since</b> + punkt w czasie: <span class="say">I have lived here since 2021.</span></li>
          </ul>
          <p class="tip">💡 Słowa-klucze Past Simple: yesterday, last year, in 2005, ago. Present Perfect: just, already, yet, ever, never, for, since.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czas i wspomnienia", words: [
          { en: "recently", pl: "ostatnio, niedawno", example: "I've recently started a new job." },
          { en: "ago", pl: "temu", example: "She left two hours ago." },
          { en: "last week / year", pl: "w zeszłym tygodniu / roku", example: "He called last week." },
          { en: "since", pl: "od (punktu w czasie)", example: "I've known her since school." },
          { en: "for", pl: "od (okresu czasu)", example: "We've been friends for years." },
          { en: "at that time", pl: "w tamtym czasie", example: "At that time, I was a student." },
          { en: "so far", pl: "do tej pory, jak dotąd", example: "So far, the project is going well." },
          { en: "once / twice", pl: "raz / dwa razy", example: "I've been there twice." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: PP vs Past Simple", theoryRef: "B1/u2/s1", questions: [
          { kind: "choice", q: "I ___ (see) that film last night. (Past Simple)", options: ["saw", "have seen", "seen"], answer: 0, theoryRef: "B1/u2/s1" },
          { kind: "choice", q: "She ___ (live) here since 2019. (Present Perfect)", options: ["lived", "has lived", "is living"], answer: 1, theoryRef: "B1/u2/s1" },
          { kind: "gap", q: "We have known each other ___ ten years. (for/since)", answer: "for" },
          { kind: "truefalse", q: "Zdanie 'I have seen him yesterday.' jest poprawne.", answer: false },
          { kind: "choice", q: "___ did you go on holiday? — Last summer.", options: ["When", "Since", "For"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "has", "worked", "here", "since", "January"], answer: ["She", "has", "worked", "here", "since", "January"] },
          { kind: "truefalse", q: "Słowo 'ago' łączy się z Past Simple.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: doświadczenia", prompts: [
          { en: "I have lived in this city for five years.", pl: "Mieszkam w tym mieście od pięciu lat." },
          { en: "I moved here in 2019.", pl: "Przeprowadziłem się tutaj w 2019 roku." },
          { en: "Have you ever tried speaking English abroad?", pl: "Czy kiedykolwiek próbowałeś mówić po angielsku za granicą?" },
          { en: "I started learning English three years ago.", pl: "Zacząłem uczyć się angielskiego trzy lata temu." }
        ]}
      ]
    },

    /* ---------------- B1 / U3 — Okresy warunkowe 0 i 1 ---------------- */
    {
      id: "u3", title: "Okresy warunkowe: 0 i 1", icon: "🔀",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Zero Conditional i First Conditional", html: `
          <p><b>Zero Conditional</b> — ogólne prawdy, fakty naukowe:</p>
          <p>Schemat: <b>If + Present Simple → Present Simple</b></p>
          <p><span class="say">If you heat water to 100°C, it boils.</span></p>
          <p><span class="say">If it rains, the ground gets wet.</span></p>
          <hr/>
          <p><b>First Conditional</b> — realne, możliwe sytuacje w przyszłości:</p>
          <p>Schemat: <b>If + Present Simple → will + bezokolicznik</b></p>
          <p><span class="say">If it rains tomorrow, I will stay at home.</span></p>
          <p><span class="say">If you study hard, you'll pass the exam.</span></p>
          <p class="tip">💡 Kolejność zdań jest dowolna. Gdy zdanie 'if' jest pierwsze, oddzielamy je przecinkiem. Nigdy nie używamy 'will' po 'if' w pierwszym warunku!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: warunki i konsekwencje", words: [
          { en: "unless", pl: "chyba że, jeśli nie", example: "Unless you hurry, you'll miss the bus." },
          { en: "as long as", pl: "o ile, dopóki", example: "I'll help as long as you need me." },
          { en: "consequence", pl: "konsekwencja", example: "Every action has a consequence." },
          { en: "boil", pl: "gotować się, wrzeć", example: "Water boils at 100 degrees." },
          { en: "miss", pl: "spóźnić się, przegapić", example: "If we're late, we'll miss the train." },
          { en: "pass (an exam)", pl: "zdać (egzamin)", example: "You'll pass if you prepare well." },
          { en: "fail", pl: "oblać, nie zdać", example: "If you don't study, you'll fail." },
          { en: "result", pl: "wynik, rezultat", example: "Hard work results in success." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Zero i First Conditional", theoryRef: "B1/u3/s1", questions: [
          { kind: "choice", q: "If you ___ red and blue, you get purple. (Zero)", options: ["mix", "will mix", "mixed"], answer: 0, theoryRef: "B1/u3/s1" },
          { kind: "choice", q: "If it ___ tomorrow, we won't go out. (First)", options: ["rains", "will rain", "rained"], answer: 0, theoryRef: "B1/u3/s1" },
          { kind: "gap", q: "If you eat too much, you ___ feel ill. (will/would)", answer: "will" },
          { kind: "truefalse", q: "Zdanie 'If you will study, you'll pass.' jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "will", "call", "you", "if", "I", "have", "time"], answer: ["I", "will", "call", "you", "if", "I", "have", "time"] },
          { kind: "choice", q: "___ you don't leave now, you'll miss the bus.", options: ["If", "When", "Unless"], answer: 0 },
          { kind: "truefalse", q: "Zero Conditional opisuje ogólne prawdy i fakty.", answer: true }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: plany na wypadek deszczu", theoryRef: "B1/u3/s1", recordLine: 1, lines: [
          { speaker: "Lisa", en: "What will you do if it rains this weekend?", pl: "Co zrobisz, jeśli w ten weekend będzie padać?" },
          { speaker: "Ty", en: "If it rains, I'll stay home and read a book.", pl: "Jeśli będzie padać, zostanę w domu i poczytam książkę." },
          { speaker: "Lisa", en: "And if the weather is good?", pl: "A jeśli pogoda będzie ładna?" },
          { speaker: "Ty", en: "If it's sunny, we can go for a walk in the park.", pl: "Jeśli będzie słonecznie, możemy pójść na spacer do parku." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: Conditionals 0 i 1", questions: [
          { kind: "choice", q: "If I find her number, I ___ call her.", options: ["will", "would", "am"], answer: 0 },
          { kind: "gap", q: "Water ___ if the temperature drops below 0. (Zero — freeze)", answer: "freezes" },
          { kind: "truefalse", q: "First Conditional opisuje możliwe przyszłe zdarzenia.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "you", "are", "tired,", "go", "to", "bed"], answer: ["If", "you", "are", "tired,", "go", "to", "bed"] },
          { kind: "match", pairs: [{ a: "Zero Cond.", b: "ogólne prawdy" }, { a: "First Cond.", b: "możliwa przyszłość" }, { a: "unless", b: "chyba że" }] }
        ]}
      ]
    },

    /* ---------------- B1 / U4 — Czasowniki modalne: should, must, have to, mustn't ---------------- */
    {
      id: "u4", title: "Czasowniki modalne: should, must, have to", icon: "⚠️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: should, must, have to, mustn't", html: `
          <p>Modalne wyrażają obowiązek, zakaz i radę:</p>
          <table class="t-table">
            <tr><th>Modalny</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td><b>should</b></td><td>porada / zalecenie</td><td><span class="say">You should see a doctor.</span></td></tr>
            <tr><td><b>shouldn't</b></td><td>nie powinieneś</td><td><span class="say">You shouldn't eat so much sugar.</span></td></tr>
            <tr><td><b>must</b></td><td>silny obowiązek (wewnętrzny)</td><td><span class="say">I must finish this report.</span></td></tr>
            <tr><td><b>mustn't</b></td><td>zakaz</td><td><span class="say">You mustn't park here.</span></td></tr>
            <tr><td><b>have to</b></td><td>obowiązek zewnętrzny</td><td><span class="say">I have to wear a uniform.</span></td></tr>
            <tr><td><b>don't have to</b></td><td>brak obowiązku</td><td><span class="say">You don't have to come.</span></td></tr>
          </table>
          <p class="tip">💡 Różnica: 'mustn't' = zakaz; 'don't have to' = brak obowiązku (można, ale nie trzeba).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zasady i porady", words: [
          { en: "rule", pl: "zasada, przepis", example: "You must follow the rules." },
          { en: "advice", pl: "rada, porada", example: "My doctor gave me good advice." },
          { en: "allowed", pl: "dozwolony, mieć pozwolenie", example: "Are you allowed to park here?" },
          { en: "forbidden", pl: "zabroniony", example: "Smoking is forbidden in this area." },
          { en: "obligation", pl: "obowiązek", example: "It's an obligation, not a choice." },
          { en: "recommend", pl: "polecać, rekomendować", example: "I recommend you see that film." },
          { en: "warn", pl: "ostrzegać", example: "She warned me not to go alone." },
          { en: "deadline", pl: "termin (ostateczny)", example: "The deadline is Friday." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: modalne", theoryRef: "B1/u4/s1", questions: [
          { kind: "choice", q: "You ___ eat in the library. (zakaz)", options: ["mustn't", "don't have to", "shouldn't"], answer: 0, theoryRef: "B1/u4/s1" },
          { kind: "choice", q: "You ___ come if you're busy. (brak obowiązku)", options: ["mustn't", "don't have to", "must"], answer: 1, theoryRef: "B1/u4/s1" },
          { kind: "gap", q: "You look tired. You ___ go to bed early. (porada)", answer: "should" },
          { kind: "truefalse", q: "'mustn't' i 'don't have to' mają to samo znaczenie.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "has", "to", "work", "on", "Saturday"], answer: ["She", "has", "to", "work", "on", "Saturday"] },
          { kind: "choice", q: "Patients ___ take this medicine twice a day.", options: ["must", "mustn't", "should"], answer: 0 },
          { kind: "match", pairs: [{ a: "should", b: "porada" }, { a: "mustn't", b: "zakaz" }, { a: "don't have to", b: "brak obowiązku" }] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: dawaj rady", prompts: [
          { en: "You should drink more water every day.", pl: "Powinieneś pić więcej wody każdego dnia." },
          { en: "You mustn't use your phone while driving.", pl: "Nie wolno ci używać telefonu podczas jazdy." },
          { en: "Do I have to wear a tie to the interview?", pl: "Czy muszę nosić krawat na rozmowę kwalifikacyjną?" },
          { en: "You don't have to pay — it's free!", pl: "Nie musisz płacić — to jest darmowe!" }
        ]}
      ]
    },

    /* ---------------- B1 / U5 — Praca i kariera ---------------- */
    {
      id: "u5", title: "Praca i kariera — rozmowa kwalifikacyjna", icon: "💼",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język rozmowy kwalifikacyjnej", html: `
          <p>Na rozmowie kwalifikacyjnej (<b>job interview</b>) warto znać te zwroty:</p>
          <ul>
            <li>Opisuj doświadczenie: <span class="say">I have experience in customer service.</span></li>
            <li>Mocne strony: <span class="say">My strengths are communication and teamwork.</span></li>
            <li>Motywacja: <span class="say">I am applying because I want to develop my skills.</span></li>
            <li>Pytania rekrutera: <span class="say">Tell me about yourself.</span> / <span class="say">Why do you want this job?</span></li>
            <li>Twoje pytania: <span class="say">Could you tell me more about the role?</span></li>
          </ul>
          <p>Przydatne struktury:</p>
          <p><span class="say">I am responsible for managing a team of five people.</span></p>
          <p><span class="say">I have been working in IT for three years.</span></p>
          <p class="tip">💡 Używaj Present Perfect, żeby pokazać doświadczenie: 'I have worked with...'</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: praca i kariera", words: [
          { en: "apply for a job", pl: "ubiegać się o pracę", example: "I applied for the marketing position." },
          { en: "CV / resume", pl: "życiorys", example: "Please send your CV by email." },
          { en: "interview", pl: "rozmowa kwalifikacyjna", example: "My interview is at ten o'clock." },
          { en: "salary", pl: "wynagrodzenie, pensja", example: "The salary is competitive." },
          { en: "teamwork", pl: "praca zespołowa", example: "Teamwork is essential in this role." },
          { en: "qualification", pl: "kwalifikacja, uprawnienie", example: "Do you have the right qualifications?" },
          { en: "experience", pl: "doświadczenie", example: "I have five years' experience." },
          { en: "promote", pl: "awansować", example: "She was promoted to manager last year." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: praca i rozmowa kwalifikacyjna", theoryRef: "B1/u5/s1", questions: [
          { kind: "choice", q: "Jak po angielsku 'ubiegać się o pracę'?", options: ["apply for a job", "look for a salary", "hire a person"], answer: 0, theoryRef: "B1/u5/s1" },
          { kind: "gap", q: "My ___ are communication and problem-solving. (mocne strony)", answer: "strengths" },
          { kind: "choice", q: "Pytanie 'Tell me about yourself.' zadaje się na...?", options: ["job interview", "job application", "salary negotiation"], answer: 0 },
          { kind: "truefalse", q: "CV to skrót od 'Curriculum Vitae'.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "have", "worked", "here", "for", "two", "years"], answer: ["I", "have", "worked", "here", "for", "two", "years"] },
          { kind: "match", pairs: [{ a: "salary", b: "wynagrodzenie" }, { a: "promote", b: "awansować" }, { a: "teamwork", b: "praca zespołowa" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: rozmowa kwalifikacyjna", theoryRef: "B1/u5/s1", recordLine: 1, lines: [
          { speaker: "Rekruter", en: "So, tell me a little about yourself.", pl: "Proszę, opowie pan/i trochę o sobie." },
          { speaker: "Ty", en: "I've worked in marketing for three years and I'm very passionate about digital media.", pl: "Pracuję w marketingu od trzech lat i bardzo interesuję się mediami cyfrowymi." },
          { speaker: "Rekruter", en: "Why are you applying for this position?", pl: "Dlaczego ubiega się pan/i o to stanowisko?" },
          { speaker: "Ty", en: "I want to develop my skills and work in a larger team.", pl: "Chcę rozwijać swoje umiejętności i pracować w większym zespole." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: praca i kariera", questions: [
          { kind: "choice", q: "Jak zapytać o więcej szczegółów na rozmowie?", options: ["Could you tell me more about the role?", "Give me information now.", "What is the salary?"], answer: 0 },
          { kind: "gap", q: "I have ___ in customer service. (experience/qualification)", answer: "experience" },
          { kind: "truefalse", q: "Present Perfect jest przydatny do opisywania doświadczenia zawodowego.", answer: true },
          { kind: "match", pairs: [{ a: "CV", b: "życiorys" }, { a: "interview", b: "rozmowa kwalifikacyjna" }, { a: "qualification", b: "kwalifikacja" }] }
        ]}
      ]
    },

    /* ---------------- B1 / U6 — Technologia i internet ---------------- */
    {
      id: "u6", title: "Technologia i internet", icon: "💻",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: mówienie o technologii", html: `
          <p>Opisując technologię, warto używać Present Simple (fakty) i Present Perfect (wpływ na dziś):</p>
          <p><span class="say">The internet has changed the way we communicate.</span></p>
          <p><span class="say">Social media is used by billions of people worldwide.</span></p>
          <p>Wyrażanie opinii:</p>
          <ul>
            <li><span class="say">In my opinion, technology makes our lives easier.</span></li>
            <li><span class="say">I think that smartphones have become essential.</span></li>
            <li><span class="say">On the other hand, too much screen time can be harmful.</span></li>
          </ul>
          <p>Strona bierna w opisach technicznych: <span class="say">The app was designed by a small team.</span> / <span class="say">Data is stored in the cloud.</span></p>
          <p class="tip">💡 Słowo 'technology' to rzeczownik niepoliczalny — zawsze bez 'a': 'modern technology', nie 'a modern technology'.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: technologia", words: [
          { en: "device", pl: "urządzenie", example: "My new device is very fast." },
          { en: "download / upload", pl: "pobierać / wysyłać", example: "I need to download the app." },
          { en: "stream", pl: "strumieniować, oglądać online", example: "We stream films every evening." },
          { en: "password", pl: "hasło", example: "Never share your password." },
          { en: "social media", pl: "media społecznościowe", example: "Social media connects people." },
          { en: "hack", pl: "hakować, włamać się", example: "His account was hacked." },
          { en: "update", pl: "aktualizować, aktualizacja", example: "You should update your software." },
          { en: "broadband", pl: "szerokopasmowy internet", example: "We need faster broadband here." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: technologia", theoryRef: "B1/u6/s1", questions: [
          { kind: "choice", q: "Jak po angielsku 'pobierać' plik?", options: ["upload", "download", "stream"], answer: 1 },
          { kind: "gap", q: "You should ___ your software regularly. (aktualizować)", answer: "update" },
          { kind: "truefalse", q: "'Technology' jest rzeczownikiem policzalnym.", answer: false },
          { kind: "choice", q: "The internet ___ changed communication. (PP)", options: ["have", "has", "is"], answer: 1, theoryRef: "B1/u6/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["Data", "is", "stored", "in", "the", "cloud"], answer: ["Data", "is", "stored", "in", "the", "cloud"] },
          { kind: "match", pairs: [{ a: "device", b: "urządzenie" }, { a: "password", b: "hasło" }, { a: "broadband", b: "szybki internet" }] },
          { kind: "truefalse", q: "Social media są używane przez miliardy ludzi.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: opinie o technologii", prompts: [
          { en: "In my opinion, smartphones have made our lives much easier.", pl: "Moim zdaniem smartfony bardzo ułatwiły nam życie." },
          { en: "On the other hand, too much screen time can be bad for you.", pl: "Z drugiej strony zbyt dużo czasu przed ekranem może być szkodliwe." },
          { en: "I think social media helps people stay connected.", pl: "Myślę, że media społecznościowe pomagają ludziom pozostawać w kontakcie." },
          { en: "Have you ever had your account hacked?", pl: "Czy twoje konto zostało kiedyś zhakowane?" }
        ]}
      ]
    },

    /* ---------------- B1 / U7 — Środowisko i natura ---------------- */
    {
      id: "u7", title: "Środowisko i natura", icon: "🌿",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: mówienie o środowisku", html: `
          <p>Wyrażamy troskę o środowisko używając różnych struktur:</p>
          <p><b>Zdania z 'should' i 'must':</b></p>
          <p><span class="say">We should reduce our carbon footprint.</span></p>
          <p><span class="say">Governments must take action on climate change.</span></p>
          <p><b>Wyrażanie skutków (First Conditional):</b></p>
          <p><span class="say">If we don't act now, temperatures will rise significantly.</span></p>
          <p><b>Strona bierna do opisów:</b></p>
          <p><span class="say">Forests are being destroyed every day.</span></p>
          <p><span class="say">Renewable energy is being developed worldwide.</span></p>
          <p class="tip">💡 Przydatne wyrażenia: 'in danger of extinction', 'global warming', 'renewable energy', 'recycle', 'carbon footprint'.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: środowisko", words: [
          { en: "pollution", pl: "zanieczyszczenie", example: "Air pollution is a major problem." },
          { en: "recycle", pl: "recyklingować, przetwarzać", example: "We should recycle more." },
          { en: "climate change", pl: "zmiany klimatyczne", example: "Climate change affects everyone." },
          { en: "renewable energy", pl: "energia odnawialna", example: "Solar is a renewable energy source." },
          { en: "deforestation", pl: "wylesianie", example: "Deforestation destroys habitats." },
          { en: "carbon footprint", pl: "ślad węglowy", example: "Reduce your carbon footprint." },
          { en: "endangered", pl: "zagrożony (gatunki)", example: "Polar bears are endangered." },
          { en: "sustainable", pl: "zrównoważony", example: "We need more sustainable farming." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: środowisko", theoryRef: "B1/u7/s1", questions: [
          { kind: "choice", q: "Jak po angielsku 'zanieczyszczenie'?", options: ["pollution", "deforestation", "extinction"], answer: 0 },
          { kind: "gap", q: "We should ___ plastic bottles. (recyklingować)", answer: "recycle" },
          { kind: "truefalse", q: "'Renewable energy' to energia ze źródeł odnawialnych.", answer: true },
          { kind: "choice", q: "If we ___ act, the climate will change faster. (First Cond.)", options: ["don't", "won't", "aren't"], answer: 0, theoryRef: "B1/u7/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["Forests", "are", "being", "destroyed", "every", "day"], answer: ["Forests", "are", "being", "destroyed", "every", "day"] },
          { kind: "match", pairs: [{ a: "deforestation", b: "wylesianie" }, { a: "endangered", b: "zagrożony" }, { a: "sustainable", b: "zrównoważony" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: rozmowa o środowisku", theoryRef: "B1/u7/s1", recordLine: 3, lines: [
          { speaker: "Emma", en: "I'm really worried about climate change.", pl: "Naprawdę martwię się zmianami klimatycznymi." },
          { speaker: "Emma", en: "What do you think we should do?", pl: "Co twoim zdaniem powinniśmy zrobić?" },
          { speaker: "Emma", en: "Have you changed any habits recently?", pl: "Czy ostatnio zmieniłeś jakieś nawyki?" },
          { speaker: "Ty", en: "Yes, I've started recycling more and I use public transport now.", pl: "Tak, zacząłem więcej recyklingować i teraz korzystam z komunikacji miejskiej." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: środowisko", questions: [
          { kind: "choice", q: "Które z tych jest odnawialnym źródłem energii?", options: ["solar power", "coal", "oil"], answer: 0 },
          { kind: "gap", q: "Governments ___ take action on pollution. (must/mustn't)", answer: "must" },
          { kind: "truefalse", q: "'Carbon footprint' to mierzalna ilość emitowanego CO2.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["We", "should", "reduce", "our", "carbon", "footprint"], answer: ["We", "should", "reduce", "our", "carbon", "footprint"] },
          { kind: "match", pairs: [{ a: "pollution", b: "zanieczyszczenie" }, { a: "recycle", b: "przetwarzać" }, { a: "climate change", b: "zmiany klimatyczne" }] }
        ]}
      ]
    },

    /* ---------------- B1 / U8 — Kultura, film i media ---------------- */
    {
      id: "u8", title: "Kultura, film i media", icon: "🎬",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: opisywanie i recenzowanie", html: `
          <p>Recenzując filmy, książki lub muzykę, warto używać:</p>
          <p><b>Przymiotniki:</b> <span class="say">The film was gripping, but the ending was disappointing.</span></p>
          <p><b>Wyrażanie opinii:</b></p>
          <ul>
            <li><span class="say">I thought the acting was brilliant.</span></li>
            <li><span class="say">In my view, the plot was too complicated.</span></li>
            <li><span class="say">What I liked most was the soundtrack.</span></li>
          </ul>
          <p><b>Porównania:</b></p>
          <p><span class="say">This film is more interesting than the first one.</span></p>
          <p><span class="say">It's the best film I've ever seen.</span></p>
          <p class="tip">💡 Stopień wyższy: przymiotniki 1-sylabowe + -er (bigger, faster); dłuższe + more (more exciting). Stopień najwyższy: the + -est / the most.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: kultura i media", words: [
          { en: "plot", pl: "fabuła", example: "The plot of this film is very complex." },
          { en: "soundtrack", pl: "ścieżka dźwiękowa", example: "I love the soundtrack of this film." },
          { en: "review", pl: "recenzja; recenzować", example: "Have you read the review yet?" },
          { en: "audience", pl: "widownia, publiczność", example: "The audience loved the show." },
          { en: "genre", pl: "gatunek (filmowy/muzyczny)", example: "What genre do you prefer?" },
          { en: "broadcast", pl: "nadawać, transmitować", example: "The match will be broadcast live." },
          { en: "celebrity", pl: "celebryta, sławna osoba", example: "She is a well-known celebrity." },
          { en: "award", pl: "nagroda", example: "The film won three awards." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: kultura i media", theoryRef: "B1/u8/s1", questions: [
          { kind: "choice", q: "Jak po angielsku 'fabuła'?", options: ["audience", "plot", "award"], answer: 1 },
          { kind: "gap", q: "This film is ___ interesting than the first one. (stopień wyższy)", answer: "more" },
          { kind: "choice", q: "It's the ___ film I've seen all year.", options: ["best", "better", "most good"], answer: 0, theoryRef: "B1/u8/s1" },
          { kind: "truefalse", q: "Stopień wyższy od 'good' to 'gooder'.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["What", "I", "liked", "most", "was", "the", "soundtrack"], answer: ["What", "I", "liked", "most", "was", "the", "soundtrack"] },
          { kind: "match", pairs: [{ a: "genre", b: "gatunek" }, { a: "award", b: "nagroda" }, { a: "broadcast", b: "nadawać" }] },
          { kind: "truefalse", q: "'Audience' znaczy 'widownia, publiczność'.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: recenzja", prompts: [
          { en: "I thought the acting in that film was absolutely brilliant.", pl: "Myślę, że gra aktorów w tym filmie była absolutnie wspaniała." },
          { en: "In my view, the plot was too complicated to follow.", pl: "Moim zdaniem fabuła była zbyt skomplikowana." },
          { en: "It's the best film I've ever seen!", pl: "To najlepszy film, jaki kiedykolwiek widziałem!" },
          { en: "What genre of music do you prefer?", pl: "Jaki gatunek muzyki lubisz najbardziej?" }
        ]}
      ]
    },

    /* ---------------- B1 / U9 — Narracja: Past Continuous ---------------- */
    {
      id: "u9", title: "Narracja: Past Continuous", icon: "📖",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Past Continuous + Past Simple", html: `
          <p><b>Past Continuous</b> = <b>was / were + -ing</b></p>
          <p>Opisuje czynność w toku w przeszłości:</p>
          <p><span class="say">At 8 o'clock, I was cooking dinner.</span></p>
          <p>Połączenie z <b>Past Simple</b> (when/while):</p>
          <ul>
            <li><b>when</b> + Past Simple (krótkie zdarzenie przerywające): <span class="say">I was reading when the phone rang.</span></li>
            <li><b>while</b> + Past Continuous (dwie czynności równoległe): <span class="say">While she was sleeping, I was working.</span></li>
          </ul>
          <table class="t-table">
            <tr><th>Podmiot</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>I / He / She / It</td><td>was + -ing</td><td><span class="say">She was walking home.</span></td></tr>
            <tr><td>You / We / They</td><td>were + -ing</td><td><span class="say">They were playing football.</span></td></tr>
          </table>
          <p class="tip">💡 Past Continuous = tło narracji; Past Simple = główne zdarzenie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: narracja i opis wydarzeń", words: [
          { en: "suddenly", pl: "nagle", example: "Suddenly, the lights went out." },
          { en: "at that moment", pl: "w tamtej chwili", example: "At that moment, she felt afraid." },
          { en: "meanwhile", pl: "tymczasem", example: "Meanwhile, he was waiting outside." },
          { en: "interrupt", pl: "przerywać", example: "Don't interrupt me when I'm speaking." },
          { en: "notice", pl: "zauważyć", example: "I noticed him when I was walking." },
          { en: "realise", pl: "uświadomić sobie, zdać sobie sprawę", example: "She realised she had lost her keys." },
          { en: "describe", pl: "opisywać", example: "Can you describe what happened?" },
          { en: "incident", pl: "zdarzenie, incydent", example: "The police investigated the incident." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Past Continuous", theoryRef: "B1/u9/s1", questions: [
          { kind: "choice", q: "I ___ watching TV when he arrived.", options: ["was", "were", "am"], answer: 0, theoryRef: "B1/u9/s1" },
          { kind: "choice", q: "They ___ playing outside when it started to rain.", options: ["was", "were", "are"], answer: 1, theoryRef: "B1/u9/s1" },
          { kind: "gap", q: "While I ___ cooking, she was reading. (was/were)", answer: "was" },
          { kind: "truefalse", q: "Past Continuous opisuje krótkie, zakończone zdarzenia.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "was", "walking", "home", "when", "it", "rained"], answer: ["He", "was", "walking", "home", "when", "it", "rained"] },
          { kind: "choice", q: "___ she studying when you called?", options: ["Was", "Were", "Did"], answer: 0 },
          { kind: "match", pairs: [{ a: "suddenly", b: "nagle" }, { a: "meanwhile", b: "tymczasem" }, { a: "realise", b: "zdać sobie sprawę" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: co się działo?", theoryRef: "B1/u9/s1", recordLine: 1, lines: [
          { speaker: "Tom", en: "What were you doing when the storm started?", pl: "Co robiłeś, gdy zaczęła się burza?" },
          { speaker: "Ty", en: "I was walking to the shop when it suddenly started to rain.", pl: "Szedłem do sklepu, gdy nagle zaczęło padać." },
          { speaker: "Tom", en: "Were you scared?", pl: "Bałeś się?" },
          { speaker: "Ty", en: "Not really, but I got completely wet!", pl: "Niespecjalnie, ale przemokłem do suchej nitki!" }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: Past Continuous", questions: [
          { kind: "choice", q: "She ___ cooking when I arrived.", options: ["was", "were", "is"], answer: 0 },
          { kind: "gap", q: "While they ___ talking, I was reading. (was/were)", answer: "were" },
          { kind: "truefalse", q: "Zdanie 'They was singing.' jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "was", "sleeping", "while", "she", "was", "working"], answer: ["I", "was", "sleeping", "while", "she", "was", "working"] }
        ]}
      ]
    },

    /* ---------------- B1 / U10 — will vs going to ---------------- */
    {
      id: "u10", title: "Przyszłość: will vs going to", icon: "🔭",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: will vs going to", html: `
          <p>Dwa główne sposoby wyrażania przyszłości w angielskim:</p>
          <table class="t-table">
            <tr><th>Forma</th><th>Kiedy używamy</th><th>Przykład</th></tr>
            <tr><td><b>will + bezokolicznik</b></td><td>spontaniczne decyzje, przepowiednie, obietnice</td><td><span class="say">I'll help you with that.</span> (decyzja w tej chwili)</td></tr>
            <tr><td><b>going to + bezokolicznik</b></td><td>wcześniej zaplanowane decyzje, przewidywania na podstawie dowodów</td><td><span class="say">I'm going to visit Paris next month.</span> (plan)</td></tr>
          </table>
          <p><b>Przepowiednie:</b></p>
          <p>Na podstawie opinii — <b>will</b>: <span class="say">I think robots will replace many jobs.</span></p>
          <p>Na podstawie dowodów — <b>going to</b>: <span class="say">Look at those clouds — it's going to rain.</span></p>
          <p class="tip">💡 Skrót: 'I will' → 'I'll'; 'he will' → 'he'll'; 'we will' → 'we'll'.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: plany i przepowiednie", words: [
          { en: "predict", pl: "przepowiadać, przewidywać", example: "It's hard to predict the future." },
          { en: "probably", pl: "prawdopodobnie", example: "She'll probably be late." },
          { en: "definitely", pl: "na pewno, zdecydowanie", example: "I'm definitely going to apply." },
          { en: "plan", pl: "planować, plan", example: "We're planning a holiday." },
          { en: "intention", pl: "zamiar, intencja", example: "My intention is to finish by Friday." },
          { en: "promise", pl: "obiecywać, obietnica", example: "I promise I'll be there." },
          { en: "forecast", pl: "prognoza; prognozować", example: "The forecast says it'll snow." },
          { en: "expect", pl: "spodziewać się, oczekiwać", example: "I expect the results soon." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: will vs going to", theoryRef: "B1/u10/s1", questions: [
          { kind: "choice", q: "Look! That car ___ crash! (dowód przed oczami)", options: ["is going to", "will", "going to"], answer: 0, theoryRef: "B1/u10/s1" },
          { kind: "choice", q: "The phone is ringing. 'I ___ answer it!' (spontaniczna decyzja)", options: ["am going to", "'ll", "am"], answer: 1, theoryRef: "B1/u10/s1" },
          { kind: "gap", q: "I ___ going to study medicine. (am/is/are)", answer: "am" },
          { kind: "truefalse", q: "'Will' używamy dla wcześniej zaplanowanych działań.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "is", "going", "to", "start", "a", "new", "job", "soon"], answer: ["She", "is", "going", "to", "start", "a", "new", "job", "soon"] },
          { kind: "choice", q: "I think technology ___ continue to advance. (opinia)", options: ["will", "is going to", "is"], answer: 0 },
          { kind: "match", pairs: [{ a: "probably", b: "prawdopodobnie" }, { a: "definitely", b: "na pewno" }, { a: "forecast", b: "prognoza" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: plany na przyszłość", theoryRef: "B1/u10/s1", recordLine: 1, lines: [
          { speaker: "Sara", en: "Have you made any plans for the summer?", pl: "Czy masz jakieś plany na lato?" },
          { speaker: "Ty", en: "Yes! I'm going to travel to Scotland with my friends.", pl: "Tak! Zamierzam pojechać do Szkocji z przyjaciółmi." },
          { speaker: "Sara", en: "That sounds great! Do you think the weather will be nice?", pl: "Brzmi świetnie! Myślisz, że pogoda będzie ładna?" },
          { speaker: "Ty", en: "I hope so, but I'll take a raincoat just in case.", pl: "Mam nadzieję, ale wezmę płaszcz przeciwdeszczowy na wszelki wypadek." }
        ]},
        { id: "s5", type: "boss", title: "Wielki sprawdzian B1", questions: [
          { kind: "choice", q: "She ___ never visited New York. (Present Perfect)", options: ["have", "has", "had"], answer: 1 },
          { kind: "gap", q: "I've lived here ___ 2018. (since/for)", answer: "since" },
          { kind: "choice", q: "If you study hard, you ___ pass. (First Conditional)", options: ["will", "would", "are"], answer: 0 },
          { kind: "choice", q: "You ___ smoke in this building. (zakaz)", options: ["don't have to", "mustn't", "shouldn't"], answer: 1 },
          { kind: "gap", q: "I was watching TV when the lights ___ out. (went/go)", answer: "went" },
          { kind: "order", q: "Ułóż zdanie:", words: ["They", "are", "going", "to", "build", "a", "new", "school"], answer: ["They", "are", "going", "to", "build", "a", "new", "school"] }
        ]}
      ]
    }

  ]
});
