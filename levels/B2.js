/* ============================================================================
   POZIOM B2 — Lodowiec  (UPPER-INTERMEDIATE)
   ========================================================================== */

window.COURSE.levels.push({
  id: "B2",
  name: "B2 — Lodowiec",
  subtitle: "Pełne morze możliwości",
  altitude: "2800 m n.p.m.",
  color: "#f59e0b",
  locked: true,
  units: [

    /* ---- B2 / U1 — Zestawienie czasów (tense review incl. Past Perfect) ---- */
    {
      id: "u1", title: "Zestawienie czasów angielskich", icon: "⏱",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: przegląd wszystkich czasów", html: `
          <p><b>Kluczowe czasy angielskie</b> — kiedy którego używamy:</p>
          <table class="t-table">
            <tr><th>Czas</th><th>Kiedy?</th><th>Przykład</th></tr>
            <tr><td>Present Simple</td><td>rutyna, fakt</td><td><span class="say">She works every day.</span></td></tr>
            <tr><td>Present Continuous</td><td>teraz, chwilowo</td><td><span class="say">She is working now.</span></td></tr>
            <tr><td>Past Simple</td><td>zakończona przeszłość</td><td><span class="say">She worked yesterday.</span></td></tr>
            <tr><td>Past Continuous</td><td>trwanie w przeszłości</td><td><span class="say">She was working at noon.</span></td></tr>
            <tr><td>Past Perfect</td><td>wcześniej niż inne zdarzenie</td><td><span class="say">She had worked before he arrived.</span></td></tr>
            <tr><td>Present Perfect</td><td>efekt teraz, doświadczenie</td><td><span class="say">She has worked here for years.</span></td></tr>
            <tr><td>Future Simple</td><td>spontaniczne decyzje</td><td><span class="say">She will work tomorrow.</span></td></tr>
          </table>
          <p><b>Past Perfect</b> tworzymy: <b>had + III forma</b> czasownika.<br>
          <span class="say">By the time I arrived, she had already left.</span> — ona odeszła zanim ja przybyłem.</p>
          <p class="tip">💡 Past Perfect = cofamy się głębiej w przeszłość względem innego zdarzenia w Past Simple.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wyrażenia czasu", words: [
          { en: "by the time", pl: "zanim / do czasu gdy", example: "By the time she arrived, I had eaten." },
          { en: "already", pl: "już", example: "He had already finished." },
          { en: "yet", pl: "jeszcze (nie) / już (pytanie)", example: "Have you finished yet?" },
          { en: "just", pl: "właśnie", example: "She has just called me." },
          { en: "while", pl: "podczas gdy", example: "While she was reading, I cooked." },
          { en: "as soon as", pl: "jak tylko", example: "Call me as soon as you arrive." },
          { en: "previously", pl: "poprzednio / wcześniej", example: "He had previously worked abroad." },
          { en: "lately", pl: "ostatnio", example: "Have you seen him lately?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zestawienie czasów", theoryRef: "B2/u1/s1", questions: [
          { kind: "choice", q: "She ___ her homework before dinner. (Past Perfect)", options: ["finished", "had finished", "has finished"], answer: 1, theoryRef: "B2/u1/s1" },
          { kind: "choice", q: "When I got home, he ___ already left.", options: ["has", "had", "was"], answer: 1, theoryRef: "B2/u1/s1" },
          { kind: "gap", q: "By the time the film started, we ___ already found our seats. (had/have)", answer: "had", theoryRef: "B2/u1/s1" },
          { kind: "truefalse", q: "Past Perfect tworzymy: had + III forma czasownika.", answer: true },
          { kind: "choice", q: "I ___ here for five years. (efekt teraz, od 5 lat)", options: ["lived", "have lived", "had lived"], answer: 1, theoryRef: "B2/u1/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "had", "already", "left", "when", "I", "arrived"], answer: ["She", "had", "already", "left", "when", "I", "arrived"] },
          { kind: "truefalse", q: "Past Continuous opisuje czynność trwającą w określonej chwili w przeszłości.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: opcje czasowe", prompts: [
          { en: "When I was a child, I had never travelled abroad.", pl: "Kiedy byłem dzieckiem, nigdy nie podróżowałem za granicę." },
          { en: "She had already started dinner by the time he came home.", pl: "Ona już zaczęła kolację, zanim on wrócił do domu." },
          { en: "I have been learning English for two years.", pl: "Uczę się angielskiego od dwóch lat." },
          { en: "By next summer, I will have finished this course.", pl: "Do przyszłego lata skończę ten kurs." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: obóz 1", questions: [
          { kind: "choice", q: "Past Perfect tworzy się z:", options: ["have + III forma", "had + III forma", "was + III forma"], answer: 1 },
          { kind: "gap", q: "They ___ never met before the party. (had/has)", answer: "had" },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "had", "eaten", "before", "she", "arrived"], answer: ["He", "had", "eaten", "before", "she", "arrived"] },
          { kind: "truefalse", q: "'I have went' to poprawna forma Present Perfect.", answer: false }
        ]}
      ]
    },

    /* ---- B2 / U2 — Strona bierna (Passive Voice) ---- */
    {
      id: "u2", title: "Strona bierna (Passive Voice)", icon: "🔄",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: budowa strony biernej", html: `
          <p>Stronę bierną tworzymy: <b>to be + III forma</b> czasownika.</p>
          <table class="t-table">
            <tr><th>Czas</th><th>Strona bierna</th><th>Przykład</th></tr>
            <tr><td>Present Simple</td><td>is/are + III forma</td><td><span class="say">The letter is written.</span></td></tr>
            <tr><td>Past Simple</td><td>was/were + III forma</td><td><span class="say">The letter was written.</span></td></tr>
            <tr><td>Present Perfect</td><td>has/have been + III forma</td><td><span class="say">The letter has been written.</span></td></tr>
            <tr><td>Future Simple</td><td>will be + III forma</td><td><span class="say">The letter will be written.</span></td></tr>
            <tr><td>Modal</td><td>modal + be + III forma</td><td><span class="say">The letter must be written.</span></td></tr>
          </table>
          <p>Sprawca (agent) dodajemy z przyimkiem <b>by</b>:
          <span class="say">The novel was written by Dickens.</span></p>
          <p class="tip">💡 Używamy strony biernej gdy sprawca jest nieznany, nieistotny lub oczywisty: <span class="say">My car was stolen.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: procesy i wytwory", words: [
          { en: "manufacture", pl: "produkować / wytwarzać", example: "These cars are manufactured in Germany." },
          { en: "publish", pl: "publikować", example: "The book was published in 1990." },
          { en: "discover", pl: "odkrywać", example: "Penicillin was discovered by Fleming." },
          { en: "found", pl: "założyć (firmę, miasto)", example: "The company was founded in 1850." },
          { en: "arrest", pl: "aresztować", example: "The suspect was arrested yesterday." },
          { en: "construct", pl: "budować / konstruować", example: "The bridge will be constructed next year." },
          { en: "deliver", pl: "dostarczać", example: "The parcel has been delivered." },
          { en: "translate", pl: "tłumaczyć", example: "The text was translated into Polish." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: strona bierna", theoryRef: "B2/u2/s1", questions: [
          { kind: "choice", q: "The window ___ by the children. (Past Simple bierna, break)", options: ["broke", "was broken", "has broken"], answer: 1, theoryRef: "B2/u2/s1" },
          { kind: "gap", q: "English ___ spoken all over the world. (is/are)", answer: "is", theoryRef: "B2/u2/s1" },
          { kind: "choice", q: "The homework ___ not been done yet. (Present Perfect bierna)", options: ["is", "was", "has"], answer: 2, theoryRef: "B2/u2/s1" },
          { kind: "truefalse", q: "W stronie biernej sprawcę podajemy z przyimkiem 'by'.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "cake", "was", "made", "by", "my", "mother"], answer: ["The", "cake", "was", "made", "by", "my", "mother"] },
          { kind: "gap", q: "The report will ___ finished tomorrow. (be/been)", answer: "be" },
          { kind: "truefalse", q: "'The book has wrote' to poprawna forma.", answer: false },
          { kind: "choice", q: "Kiedy używamy strony biernej?", options: ["gdy sprawca jest ważny", "gdy sprawca nieznany lub nieistotny", "tylko w Present Simple"], answer: 1 }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: o pasywnych konstrukcjach", theoryRef: "B2/u2/s1", recordLine: 2, lines: [
          { speaker: "Marek", en: "Did you hear? The old theatre has been demolished.", pl: "Słyszałeś? Stary teatr został zburzony." },
          { speaker: "Anna", en: "Really? When was it built originally?", pl: "Naprawdę? Kiedy został wybudowany?" },
          { speaker: "Ty", en: "It was built in the 1920s. Such a shame it was knocked down.", pl: "Został wybudowany w latach 20. Szkoda, że go rozebrano." },
          { speaker: "Marek", en: "A new shopping centre will be constructed in its place.", pl: "Na jego miejscu zostanie zbudowane nowe centrum handlowe." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: obóz 2", questions: [
          { kind: "choice", q: "The letter ___ sent yesterday. (strona bierna, Past Simple)", options: ["was send", "was sent", "is sent"], answer: 1 },
          { kind: "gap", q: "Coffee ___ grown in Brazil. (is/are)", answer: "is" },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "film", "was", "directed", "by", "Spielberg"], answer: ["The", "film", "was", "directed", "by", "Spielberg"] },
          { kind: "truefalse", q: "'Passive Voice: have + III forma' to pełna i wystarczająca reguła.", answer: false }
        ]}
      ]
    },

    /* ---- B2 / U3 — Okresy warunkowe 2 i 3 (mixed conditional) ---- */
    {
      id: "u3", title: "Okresy warunkowe 2 i 3", icon: "🌀",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: 2nd, 3rd i mieszany conditional", html: `
          <p><b>2nd conditional</b> — nierealny warunek w teraźniejszości lub przyszłości:</p>
          <p>If + Past Simple, <b>would</b> + bezokolicznik</p>
          <p><span class="say">If I had more time, I would travel more.</span> (ale nie mam czasu)</p>
          <p><b>3rd conditional</b> — nierealny warunek w przeszłości:</p>
          <p>If + Past Perfect, <b>would have</b> + III forma</p>
          <p><span class="say">If she had studied harder, she would have passed the exam.</span></p>
          <p><b>Mixed conditional</b> — przeszły warunek, teraźniejszy skutek:</p>
          <p>If + Past Perfect, <b>would</b> + bezokolicznik</p>
          <p><span class="say">If I had taken that job, I would be rich now.</span></p>
          <p class="tip">💡 Po 'If' nigdy nie używamy 'would'. Pamiętaj: były 'were' (nie 'was') po 'If I / he / she' w 2nd conditional.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wyrazy warunkowe", words: [
          { en: "unless", pl: "jeśli nie / chyba że", example: "Unless you hurry, you'll be late." },
          { en: "provided that", pl: "pod warunkiem, że", example: "I'll come, provided that you invite me." },
          { en: "as long as", pl: "o ile / dopóki", example: "As long as you're careful, it's fine." },
          { en: "suppose", pl: "załóżmy, że", example: "Suppose you won the lottery — what would you do?" },
          { en: "in case", pl: "na wypadek gdyby", example: "Take an umbrella in case it rains." },
          { en: "regret", pl: "żałować", example: "I regret that I didn't study harder." },
          { en: "consequence", pl: "konsekwencja / następstwo", example: "Think about the consequences." },
          { en: "outcome", pl: "wynik / rezultat", example: "The outcome was unexpected." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: 2nd i 3rd conditional", theoryRef: "B2/u3/s1", questions: [
          { kind: "choice", q: "If I ___ a car, I would drive to work. (2nd conditional)", options: ["have", "had", "would have"], answer: 1, theoryRef: "B2/u3/s1" },
          { kind: "choice", q: "If she had left earlier, she ___ the train. (3rd conditional)", options: ["caught", "would catch", "would have caught"], answer: 2, theoryRef: "B2/u3/s1" },
          { kind: "gap", q: "If I were rich, I ___ buy a big house. (would/wouldn't)", answer: "would", theoryRef: "B2/u3/s1" },
          { kind: "truefalse", q: "Po 'If' w 2nd conditional używamy 'would'.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "I", "had", "studied", "I", "would", "have", "passed"], answer: ["If", "I", "had", "studied", "I", "would", "have", "passed"] },
          { kind: "choice", q: "Mixed conditional: If he had taken the job, he ___ in London now.", options: ["would live", "would have lived", "lived"], answer: 0, theoryRef: "B2/u3/s1" }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: rozważania warunkowe", theoryRef: "B2/u3/s1", recordLine: 1, lines: [
          { speaker: "Tom", en: "What would you do if you won a million pounds?", pl: "Co byś zrobił, gdybyś wygrał milion funtów?" },
          { speaker: "Ty", en: "If I won that much, I would travel the world and buy a house.", pl: "Gdybym wygrał tyle, podróżowałbym po świecie i kupił dom." },
          { speaker: "Tom", en: "If I had started saving years ago, I would have more money now.", pl: "Gdybym zaczął oszczędzać lata temu, miałbym teraz więcej pieniędzy." },
          { speaker: "Ty", en: "Same here. If only I had been more careful with money!", pl: "Tak samo. Gdybym tylko był ostrożniejszy z pieniędzmi!" }
        ]}
      ]
    },

    /* ---- B2 / U4 — Zdania względne (relative clauses) ---- */
    {
      id: "u4", title: "Zdania względne: definiujące i niedefiniujące", icon: "🔗",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: defining vs non-defining relative clauses", html: `
          <p><b>Definiujące (defining)</b> — bez przecinków. Identyfikują osobę lub rzecz.</p>
          <p><span class="say">The woman <u>who works here</u> is my aunt.</span></p>
          <p><b>Niedefiniujące (non-defining)</b> — z przecinkami. Dodają informację o już zidentyfikowanym podmiocie.</p>
          <p><span class="say">My aunt, <u>who works here</u>, is very kind.</span></p>
          <table class="t-table">
            <tr><th>Zaimek</th><th>Odnosi się do</th><th>Przykład</th></tr>
            <tr><td>who</td><td>osób</td><td><span class="say">the man who called</span></td></tr>
            <tr><td>which</td><td>rzeczy / zwierząt</td><td><span class="say">the book which I read</span></td></tr>
            <tr><td>that</td><td>osób / rzeczy (tylko defining)</td><td><span class="say">the car that broke down</span></td></tr>
            <tr><td>whose</td><td>posiadanie</td><td><span class="say">the girl whose dog is lost</span></td></tr>
            <tr><td>where</td><td>miejsca</td><td><span class="say">the city where I was born</span></td></tr>
          </table>
          <p class="tip">💡 W non-defining NIE używamy 'that'. Zawsze wymagane przecinki.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: opisywanie osób i rzeczy", words: [
          { en: "colleague", pl: "kolega / koleżanka z pracy", example: "My colleague, who is from Spain, speaks three languages." },
          { en: "invention", pl: "wynalazek", example: "The internet, which changed the world, was a great invention." },
          { en: "landmark", pl: "zabytek / punkt orientacyjny", example: "Big Ben is a famous landmark." },
          { en: "resident", pl: "mieszkaniec", example: "The residents who signed the petition won." },
          { en: "ancestor", pl: "przodek", example: "My ancestor, whose portrait hangs here, was a soldier." },
          { en: "decade", pl: "dekada / dziesięciolecie", example: "The 1990s was an interesting decade." },
          { en: "venue", pl: "miejsce imprezy / lokalizacja", example: "The venue where the concert was held was huge." },
          { en: "nominee", pl: "kandydat / nominowany", example: "The nominee who won was very young." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zdania względne", theoryRef: "B2/u4/s1", questions: [
          { kind: "choice", q: "The man ___ called was my boss. (definiujące)", options: ["which", "who", "whose"], answer: 1, theoryRef: "B2/u4/s1" },
          { kind: "choice", q: "The book ___ I bought was excellent. (rzecz, definiujące)", options: ["who", "whose", "which"], answer: 2, theoryRef: "B2/u4/s1" },
          { kind: "truefalse", q: "W non-defining relative clause można użyć 'that'.", answer: false },
          { kind: "gap", q: "This is the city ___ I was born. (where/which)", answer: "where", theoryRef: "B2/u4/s1" },
          { kind: "choice", q: "My sister, ___ lives in Paris, is a chef. (non-defining)", options: ["that", "who", "which"], answer: 1, theoryRef: "B2/u4/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "woman", "who", "won", "was", "my", "teacher"], answer: ["The", "woman", "who", "won", "was", "my", "teacher"] },
          { kind: "truefalse", q: "Non-defining relative clauses zawsze mają przecinki.", answer: true }
        ]},
        { id: "s4", type: "boss", title: "Sprawdzian: obóz 4", questions: [
          { kind: "choice", q: "The film ___ I saw was brilliant.", options: ["who", "which", "whose"], answer: 1 },
          { kind: "gap", q: "She is the person ___ helped me. (who/which)", answer: "who" },
          { kind: "truefalse", q: "Defining relative clause identyfikuje podmiot zdania.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "house", "where", "she", "lives", "is", "old"], answer: ["The", "house", "where", "she", "lives", "is", "old"] }
        ]}
      ]
    },

    /* ---- B2 / U5 — Phrasal verbs ---- */
    {
      id: "u5", title: "Phrasal verbs — separowalne i nieseparowalne", icon: "⚡",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: phrasal verbs", html: `
          <p><b>Phrasal verb</b> = czasownik + przyimek lub partykuła, które razem tworzą nowe znaczenie.</p>
          <p><b>Separowalne</b>: możemy wstawić dopełnienie między czasownik a partykulę:
          <span class="say">Turn off the TV.</span> = <span class="say">Turn the TV off.</span></p>
          <p>Jeśli dopełnienie to zaimek, MUSI stać w środku:
          <span class="say">Turn it off.</span></p>
          <p><b>Nieseparowalne</b>: przyimek zawsze bezpośrednio przy czasowniku:
          <span class="say">She looks after her sister.</span></p>
          <table class="t-table">
            <tr><th>Phrasal verb</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>give up</td><td>rezygnować / rzucać</td><td><span class="say">Don't give up!</span></td></tr>
            <tr><td>look into</td><td>badać / sprawdzać</td><td><span class="say">We'll look into the problem.</span></td></tr>
            <tr><td>put off</td><td>odkładać na później</td><td><span class="say">Don't put it off.</span></td></tr>
            <tr><td>come across</td><td>natknąć się na</td><td><span class="say">I came across an old photo.</span></td></tr>
            <tr><td>set up</td><td>zakładać / organizować</td><td><span class="say">She set up a new company.</span></td></tr>
          </table>
          <p class="tip">💡 Naucz się phrasal verbs w kontekście — każdy ma unikalne znaczenie!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: phrasal verbs", words: [
          { en: "give up", pl: "rezygnować / rzucać (nawyk)", example: "He gave up smoking last year." },
          { en: "look into", pl: "badać / sprawdzać", example: "Police are looking into the matter." },
          { en: "put off", pl: "odkładać / przesuwać termin", example: "Stop putting off your homework." },
          { en: "come across", pl: "natknąć się (przypadkowo)", example: "I came across this book in the attic." },
          { en: "set up", pl: "zakładać / organizować", example: "They set up a charity." },
          { en: "run out of", pl: "skończyć się (zapas)", example: "We've run out of milk." },
          { en: "look after", pl: "opiekować się", example: "She looks after her elderly parents." },
          { en: "take on", pl: "podejmować (pracę / wyzwanie)", example: "Are you willing to take on this project?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: phrasal verbs", theoryRef: "B2/u5/s1", questions: [
          { kind: "choice", q: "She gave ___ smoking after years. (phrasal verb: porzucić)", options: ["away", "up", "out"], answer: 1, theoryRef: "B2/u5/s1" },
          { kind: "gap", q: "We have run ___ of coffee. Shall I buy some? (out/off)", answer: "out", theoryRef: "B2/u5/s1" },
          { kind: "truefalse", q: "Separowalne phrasal verbs: 'Turn off it' jest poprawne.", answer: false },
          { kind: "choice", q: "She ___ her children carefully. (look after — nieseparowalny)", options: ["looks after her children", "looks her children after", "looks after them"], answer: 0, theoryRef: "B2/u5/s1" },
          { kind: "gap", q: "Don't put ___ the meeting again. (off/on)", answer: "off" },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "set", "up", "a", "new", "business"], answer: ["He", "set", "up", "a", "new", "business"] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: phrasal verbs w życiu", prompts: [
          { en: "I came across an interesting article online.", pl: "Natknąłem się na ciekawy artykuł w internecie." },
          { en: "Don't give up — you're almost there!", pl: "Nie rezygnuj — prawie jesteś na miejscu!" },
          { en: "We've run out of time, so let's wrap up.", pl: "Skończył nam się czas, więc zakończmy." },
          { en: "She looks after her neighbour every weekend.", pl: "Ona opiekuje się sąsiadką każdy weekend." }
        ]}
      ]
    },

    /* ---- B2 / U6 — Mowa zależna (Reported Speech) ---- */
    {
      id: "u6", title: "Mowa zależna (Reported Speech)", icon: "💬",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: mowa zależna — backshift i zmiany", html: `
          <p>Przekształcając mowę bezpośrednią na zależną stosujemy <b>backshift</b> (cofnięcie czasu):</p>
          <table class="t-table">
            <tr><th>Mowa bezpośrednia</th><th>Mowa zależna</th></tr>
            <tr><td>Present Simple</td><td>Past Simple</td></tr>
            <tr><td>Present Continuous</td><td>Past Continuous</td></tr>
            <tr><td>Past Simple</td><td>Past Perfect</td></tr>
            <tr><td>will</td><td>would</td></tr>
            <tr><td>can</td><td>could</td></tr>
          </table>
          <p><span class="say">"I live in London."</span> → <span class="say">He said that he lived in London.</span></p>
          <p><b>Pytania zależne</b>: używamy if / whether (bez słów pytających) lub słowa pytającego, szyk twierdzący:</p>
          <p><span class="say">"Are you coming?"</span> → <span class="say">She asked if I was coming.</span></p>
          <p><span class="say">"Where do you live?"</span> → <span class="say">He asked where I lived.</span></p>
          <p class="tip">💡 Zaimki i wyrażenia czasu też się zmieniają: today → that day, now → then, here → there.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czasowniki mowy", words: [
          { en: "claim", pl: "twierdzić / utrzymywać", example: "She claimed that she was innocent." },
          { en: "deny", pl: "zaprzeczać", example: "He denied stealing the money." },
          { en: "insist", pl: "nalegać", example: "She insisted that she was right." },
          { en: "admit", pl: "przyznawać się", example: "He admitted making a mistake." },
          { en: "warn", pl: "ostrzegać", example: "She warned me not to go alone." },
          { en: "suggest", pl: "sugerować", example: "He suggested going to the cinema." },
          { en: "promise", pl: "obiecywać", example: "She promised she would help." },
          { en: "refuse", pl: "odmawiać", example: "He refused to answer the question." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: mowa zależna", theoryRef: "B2/u6/s1", questions: [
          { kind: "choice", q: "'I work here.' She said that she ___ there.", options: ["works", "worked", "is working"], answer: 1, theoryRef: "B2/u6/s1" },
          { kind: "gap", q: "'I can help you.' He said he ___ help me. (could/would)", answer: "could", theoryRef: "B2/u6/s1" },
          { kind: "choice", q: "'Are you ready?' She asked if I ___ ready.", options: ["am", "was", "were"], answer: 1, theoryRef: "B2/u6/s1" },
          { kind: "truefalse", q: "W mowie zależnej pytania zachowują szyk pytający.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "said", "that", "he", "was", "tired"], answer: ["He", "said", "that", "he", "was", "tired"] },
          { kind: "choice", q: "'I will call you.' She promised that she ___ call me.", options: ["will", "would", "should"], answer: 1, theoryRef: "B2/u6/s1" },
          { kind: "truefalse", q: "W mowie zależnej Present Simple zamienia się na Past Simple.", answer: true }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: mowa zależna", theoryRef: "B2/u6/s1", recordLine: 2, lines: [
          { speaker: "Kate", en: "John told me that he was going to resign.", pl: "John powiedział mi, że zamierza zrezygnować." },
          { speaker: "Tom", en: "Really? What exactly did he say?", pl: "Naprawdę? Co dokładnie powiedział?" },
          { speaker: "Ty", en: "He said he had been unhappy for months and couldn't continue.", pl: "Powiedział, że był nieszczęśliwy od miesięcy i nie mógł kontynuować." },
          { speaker: "Kate", en: "He also asked if anyone would take over his projects.", pl: "Zapytał też, czy ktoś przejmie jego projekty." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: obóz 6", questions: [
          { kind: "choice", q: "'I don't know.' He said he ___ know.", options: ["doesn't", "didn't", "wouldn't"], answer: 1 },
          { kind: "gap", q: "She asked where I ___ from. (come/came)", answer: "came" },
          { kind: "truefalse", q: "W mowie zależnej 'will' zmienia się na 'would'.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "denied", "that", "she", "had", "taken", "it"], answer: ["She", "denied", "that", "she", "had", "taken", "it"] },
          { kind: "choice", q: "'Come early!' She told me ___ early.", options: ["come", "to come", "coming"], answer: 1 }
        ]}
      ]
    },

    /* ---- B2 / U7 — Debata i argumentacja ---- */
    {
      id: "u7", title: "Debata: opinie, argumenty, dyskusja", icon: "🗣️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: wyrażanie opinii i argumentacja", html: `
          <p><b>Wyrażanie opinii:</b></p>
          <p><span class="say">In my opinion / view, ...</span> — moim zdaniem</p>
          <p><span class="say">As far as I'm concerned, ...</span> — o ile mnie dotyczy</p>
          <p><span class="say">I strongly believe that ...</span> — zdecydowanie uważam</p>
          <p><b>Zgadzanie się:</b></p>
          <p><span class="say">I completely agree with you.</span> / <span class="say">That's a good point.</span></p>
          <p><b>Niezgadzanie się:</b></p>
          <p><span class="say">I'm afraid I disagree.</span> / <span class="say">I see your point, but ...</span></p>
          <p><span class="say">With all due respect, I think that's incorrect.</span></p>
          <p><b>Kontrargumentacja:</b></p>
          <p><span class="say">On the other hand, ...</span> / <span class="say">However, one should also consider ...</span></p>
          <p><b>Podsumowanie:</b></p>
          <p><span class="say">To sum up / In conclusion, ...</span></p>
          <p class="tip">💡 W formalnej debacie używaj pełnych form i złożonych wyrażeń łącznikowych.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: debata i argumenty", words: [
          { en: "argue", pl: "twierdzić / debatować", example: "She argued that the plan was flawed." },
          { en: "counterargument", pl: "kontrargument", example: "He raised several counterarguments." },
          { en: "perspective", pl: "perspektywa / punkt widzenia", example: "From my perspective, this is wrong." },
          { en: "evidence", pl: "dowód / dowody", example: "There is strong evidence to support this." },
          { en: "controversial", pl: "kontrowersyjny", example: "This is a controversial topic." },
          { en: "bias", pl: "stronniczość / uprzedzenie", example: "Every article has some bias." },
          { en: "in contrast", pl: "w przeciwieństwie", example: "In contrast, the other report shows growth." },
          { en: "concede", pl: "przyznać rację / ustąpić", example: "I concede that you have a point." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: debata", theoryRef: "B2/u7/s1", questions: [
          { kind: "choice", q: "Jak po angielsku formalnie wyrażasz swoją opinię?", options: ["I think!", "In my opinion,", "Me, I say"], answer: 1, theoryRef: "B2/u7/s1" },
          { kind: "choice", q: "Jak grzecznie się nie zgadzasz?", options: ["You're wrong!", "I'm afraid I disagree.", "No, that's bad."], answer: 1, theoryRef: "B2/u7/s1" },
          { kind: "gap", q: "___ sum up, we need better solutions. (To/In)", answer: "To", theoryRef: "B2/u7/s1" },
          { kind: "truefalse", q: "'On the other hand' służy do wprowadzenia kontrargumentu.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["As", "far", "as", "I'm", "concerned", "this", "is", "wrong"], answer: ["As", "far", "as", "I'm", "concerned", "this", "is", "wrong"] },
          { kind: "match", pairs: [{ a: "I strongly believe", b: "zdecydowanie uważam" }, { a: "That's a good point", b: "to celna uwaga" }, { a: "I concede", b: "przyznaję rację" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: debata o technologii", theoryRef: "B2/u7/s1", recordLine: 1, lines: [
          { speaker: "Sara", en: "In my opinion, social media has a negative effect on teenagers.", pl: "Moim zdaniem media społecznościowe mają negatywny wpływ na nastolatków." },
          { speaker: "Ty", en: "I see your point, but on the other hand, it helps them stay connected.", pl: "Rozumiem twój argument, ale z drugiej strony pomaga im utrzymywać kontakty." },
          { speaker: "Sara", en: "That's true. However, the evidence on mental health is quite strong.", pl: "To prawda. Jednak dowody dotyczące zdrowia psychicznego są bardzo mocne." },
          { speaker: "Ty", en: "I concede that. To sum up, we need better digital education.", pl: "Przyznaję rację. Podsumowując, potrzebujemy lepszej edukacji cyfrowej." }
        ]}
      ]
    },

    /* ---- B2 / U8 — Biznes i finanse ---- */
    {
      id: "u8", title: "Biznes i finanse", icon: "📈",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język biznesowy i finansowy", html: `
          <p>W biznesowym angielskim ważne są nominalizacje (rzeczowniki zamiast czasowników):</p>
          <p><span class="say">We made a decision</span> — formalnie (zamiast: we decided)</p>
          <p><span class="say">Please find attached...</span> — w e-mailach biznesowych</p>
          <p>Kluczowe wyrażenia:</p>
          <table class="t-table">
            <tr><th>Wyrażenie</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">quarterly results</span></td><td>wyniki kwartalne</td></tr>
            <tr><td><span class="say">balance sheet</span></td><td>bilans</td></tr>
            <tr><td><span class="say">break even</span></td><td>wyjść na zero</td></tr>
            <tr><td><span class="say">cash flow</span></td><td>przepływ gotówki</td></tr>
            <tr><td><span class="say">merger and acquisition</span></td><td>fuzja i przejęcie</td></tr>
            <tr><td><span class="say">shareholder</span></td><td>akcjonariusz</td></tr>
          </table>
          <p class="tip">💡 W spotkaniach: <span class="say">Could you elaborate on that?</span> (Czy mógłbyś rozwinąć ten temat?)</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: biznes i finanse", words: [
          { en: "revenue", pl: "przychody / dochód", example: "Annual revenue increased by 15%." },
          { en: "profit", pl: "zysk", example: "The company made a huge profit last year." },
          { en: "loss", pl: "strata", example: "We reported a loss this quarter." },
          { en: "invest", pl: "inwestować", example: "They plan to invest in new technology." },
          { en: "stakeholder", pl: "interesariusz", example: "All stakeholders were informed." },
          { en: "budget", pl: "budżet", example: "We're over budget this month." },
          { en: "forecast", pl: "prognoza / przewidywać", example: "The forecast shows growth of 10%." },
          { en: "deadline", pl: "termin ostateczny", example: "We must meet the deadline." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: biznes i finanse", theoryRef: "B2/u8/s1", questions: [
          { kind: "choice", q: "Co znaczy 'break even'?", options: ["odnieść sukces", "wyjść na zero (nie zysk, nie strata)", "zbankrutować"], answer: 1, theoryRef: "B2/u8/s1" },
          { kind: "gap", q: "We need to ___ in new equipment. (invest/revenue)", answer: "invest" },
          { kind: "choice", q: "Co to 'revenue'?", options: ["zysk po odliczeniu kosztów", "przychody", "strata"], answer: 1 },
          { kind: "truefalse", q: "'Deadline' to termin ostateczny.", answer: true },
          { kind: "match", pairs: [{ a: "profit", b: "zysk" }, { a: "loss", b: "strata" }, { a: "budget", b: "budżet" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "company", "made", "a", "large", "profit"], answer: ["The", "company", "made", "a", "large", "profit"] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: prezentacja biznesowa", prompts: [
          { en: "Our quarterly results show a 20% increase in revenue.", pl: "Nasze wyniki kwartalne pokazują 20-procentowy wzrost przychodów." },
          { en: "We need to revise the budget before the deadline.", pl: "Musimy zrewidować budżet przed terminem ostatecznym." },
          { en: "Could you elaborate on the cash flow forecast?", pl: "Czy mógłbyś rozwinąć temat prognozy przepływów gotówki?" }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: obóz 8", questions: [
          { kind: "choice", q: "Jak po angielsku 'bilans'?", options: ["cash flow", "balance sheet", "revenue"], answer: 1 },
          { kind: "gap", q: "The ___ shows strong growth. (forecast/deadline)", answer: "forecast" },
          { kind: "truefalse", q: "Stakeholder to wyłącznie osoba posiadająca akcje spółki.", answer: false },
          { kind: "match", pairs: [{ a: "revenue", b: "przychody" }, { a: "invest", b: "inwestować" }, { a: "deadline", b: "termin ostateczny" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["We", "are", "over", "budget", "this", "month"], answer: ["We", "are", "over", "budget", "this", "month"] }
        ]}
      ]
    },

    /* ---- B2 / U9 — Media i społeczeństwo ---- */
    {
      id: "u9", title: "Media i społeczeństwo", icon: "📰",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język mediów i społeczeństwa", html: `
          <p>Pisząc lub mówiąc o mediach, używamy specyficznych wyrażeń:</p>
          <p><span class="say">go viral</span> — stać się viralem<br>
          <span class="say">breaking news</span> — pilne wiadomości<br>
          <span class="say">mainstream media</span> — głównonurtowe media<br>
          <span class="say">freedom of the press</span> — wolność prasy</p>
          <p>Wpływ mediów społecznościowych:</p>
          <p><span class="say">Social media can both connect and isolate people.</span></p>
          <p>Budowa argumentu o mediach:</p>
          <p><span class="say">The rise of social media has had a profound impact on society.</span></p>
          <p><span class="say">Critics argue that traditional media is becoming obsolete.</span></p>
          <p class="tip">💡 'The media' traktowane jest jako rzeczownik zbiorowy (bywa l.p. i l.mn.).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: media i społeczeństwo", words: [
          { en: "broadcast", pl: "nadawać / transmisja", example: "The event was broadcast live." },
          { en: "censorship", pl: "cenzura", example: "Censorship is a controversial issue." },
          { en: "disinformation", pl: "dezinformacja", example: "Disinformation spreads quickly online." },
          { en: "influence", pl: "wpływ / wpływać", example: "Social media influences public opinion." },
          { en: "subscribe", pl: "subskrybować", example: "Subscribe to our channel for updates." },
          { en: "content creator", pl: "twórca treści", example: "She's a successful content creator." },
          { en: "algorithm", pl: "algorytm", example: "The algorithm decides what you see." },
          { en: "public opinion", pl: "opinia publiczna", example: "Public opinion shifted after the report." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: media i społeczeństwo", theoryRef: "B2/u9/s1", questions: [
          { kind: "choice", q: "Co oznacza 'go viral'?", options: ["zachorować", "stać się popularnym w internecie", "przeprowadzić transmisję"], answer: 1, theoryRef: "B2/u9/s1" },
          { kind: "gap", q: "The news ___ live on television. (was broadcast/broadcasted)", answer: "was broadcast" },
          { kind: "truefalse", q: "Disinformation to celowe szerzenie fałszywych informacji.", answer: true },
          { kind: "choice", q: "Co to 'freedom of the press'?", options: ["darmowe gazety", "wolność prasy", "cenzura"], answer: 1 },
          { kind: "match", pairs: [{ a: "censorship", b: "cenzura" }, { a: "algorithm", b: "algorytm" }, { a: "broadcast", b: "nadawać" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["Social", "media", "influences", "public", "opinion"], answer: ["Social", "media", "influences", "public", "opinion"] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: dyskusja o mediach", theoryRef: "B2/u9/s1", recordLine: 1, lines: [
          { speaker: "Piotr", en: "Do you think social media does more harm than good?", pl: "Czy uważasz, że media społecznościowe przynoszą więcej złego niż dobrego?" },
          { speaker: "Ty", en: "In my opinion, it depends on how you use it. Disinformation is a real problem.", pl: "Moim zdaniem zależy to od tego, jak z nich korzystasz. Dezinformacja to poważny problem." },
          { speaker: "Piotr", en: "I agree. Algorithms can trap us in echo chambers.", pl: "Zgadzam się. Algorytmy mogą zamknąć nas w komorach echa." },
          { speaker: "Ty", en: "On the other hand, platforms give a voice to people who would otherwise be unheard.", pl: "Z drugiej strony platformy dają głos ludziom, którzy inaczej nie mieliby możliwości zabrania głosu." }
        ]}
      ]
    },

    /* ---- B2 / U10 — wish / used to / would ---- */
    {
      id: "u10", title: "wish, used to, would — żale i nawyki z przeszłości", icon: "✨",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: wish, used to, would", html: `
          <p><b>wish + Past Simple</b> — życzenie o chwili obecnej (nierealne):</p>
          <p><span class="say">I wish I knew the answer.</span> (Chciałbym znać odpowiedź, ale nie znam)</p>
          <p><b>wish + Past Perfect</b> — żalowanie czegoś z przeszłości:</p>
          <p><span class="say">I wish I had studied harder.</span> (Szkoda, że nie uczyłem się pilniej)</p>
          <p><b>used to + bezokolicznik</b> — były nawyk lub stan (już nie istnieje):</p>
          <p><span class="say">I used to play tennis when I was young.</span></p>
          <p>Pytanie: <span class="say">Did you use to have a dog?</span></p>
          <p>Przeczenie: <span class="say">I didn't use to like vegetables.</span></p>
          <p><b>would + bezokolicznik</b> (nawyki w przeszłości — działania, nie stany):</p>
          <p><span class="say">Every summer, we would go to the coast.</span></p>
          <p class="tip">💡 'used to' może opisywać stany i działania; 'would' — tylko powtarzające się działania (nie stany): błędne: <i>I would know her well.</i></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: żale i nawyki", words: [
          { en: "regret", pl: "żałować / żal", example: "I regret not taking that chance." },
          { en: "habit", pl: "nawyk / przyzwyczajenie", example: "It was a childhood habit." },
          { en: "reminisce", pl: "wspominać (z nostalgią)", example: "We often reminisce about school days." },
          { en: "nostalgia", pl: "nostalgia / tęsknota za przeszłością", example: "I feel nostalgia for the 1990s." },
          { en: "miss", pl: "tęsknić (za kimś / czymś)", example: "I miss living near the sea." },
          { en: "no longer", pl: "już nie", example: "I no longer live in Warsaw." },
          { en: "in those days", pl: "w tamtych czasach", example: "In those days, life was simpler." },
          { en: "look back on", pl: "wspominać (z perspektywy czasu)", example: "I look back on that time fondly." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: wish, used to, would", theoryRef: "B2/u10/s1", questions: [
          { kind: "choice", q: "I wish I ___ that job. (Past Perfect — żalowanie)", options: ["take", "had taken", "took"], answer: 1, theoryRef: "B2/u10/s1" },
          { kind: "choice", q: "She ___ to live in Paris, but she moved away. (były stan)", options: ["used", "would", "did"], answer: 0, theoryRef: "B2/u10/s1" },
          { kind: "gap", q: "Every Friday, we ___ walk to the park. (would/used)", answer: "would", theoryRef: "B2/u10/s1" },
          { kind: "truefalse", q: "'I would know her well' to poprawne użycie 'would' dla byłych nawyków.", answer: false },
          { kind: "choice", q: "I wish I ___ taller. (życzenie o teraz)", options: ["were", "had been", "am"], answer: 0, theoryRef: "B2/u10/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "used", "to", "play", "football", "at", "school"], answer: ["I", "used", "to", "play", "football", "at", "school"] },
          { kind: "truefalse", q: "'Did you use to have a car?' to poprawna forma pytania.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: nostalgiczne wspomnienia", prompts: [
          { en: "I wish I had spent more time with my family.", pl: "Chciałbym, żebym spędził więcej czasu z rodziną." },
          { en: "I used to cycle to school every day.", pl: "Kiedyś jeździłem rowerem do szkoły każdego dnia." },
          { en: "Every summer, we would visit my grandparents in the countryside.", pl: "Każdego lata odwiedzaliśmy dziadków na wsi." },
          { en: "I no longer miss those early morning commutes.", pl: "Nie tęsknię już za tymi porankami w drodze do pracy." }
        ]},
        { id: "s5", type: "boss", title: "Wielki sprawdzian B2", questions: [
          { kind: "choice", q: "She ___ to have longer hair when she was young.", options: ["used", "would", "was"], answer: 0 },
          { kind: "gap", q: "I wish I ___ harder at university. (had studied/studied)", answer: "had studied" },
          { kind: "choice", q: "The letter ___ posted this morning. (strona bierna, Past Simple)", options: ["was post", "was posted", "has posted"], answer: 1 },
          { kind: "choice", q: "'I'm leaving.' She said she ___ leaving.", options: ["is", "was", "were"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "I", "had", "known", "I", "would", "have", "helped"], answer: ["If", "I", "had", "known", "I", "would", "have", "helped"] },
          { kind: "truefalse", q: "Non-defining relative clauses oddzielamy przecinkami.", answer: true }
        ]}
      ]
    }

  ]
});
