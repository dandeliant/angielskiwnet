/* A1 — dodatkowe tematy (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "A1"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- A1 / x1 — Present Continuous (GRAMATYKA) ---------------- */
    {
      id: "x1", title: "Present Continuous — am/is/are + -ing", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Present Continuous", html: `
          <p><b>Present Continuous</b> opisuje to, co dzieje się <b>teraz</b>.</p>
          <p>Budowa: <b>am / is / are</b> + czasownik z końcówką <b>-ing</b>.</p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>I</td><td>am + -ing</td><td>I am reading.</td></tr>
            <tr><td>He / She / It</td><td>is + -ing</td><td>She is cooking.</td></tr>
            <tr><td>We / You / They</td><td>are + -ing</td><td>They are playing.</td></tr>
          </table>
          <p>Przeczenie: <span class="say">I am not sleeping.</span> Pytanie: <span class="say">Are you working now?</span></p>
          <p class="tip">💡 Często ze słowami: now, at the moment, today. Porównaj: <span class="say">I work every day, but now I am resting.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czynności teraz", words: [
          { en: "read", pl: "czytać", example: "She is reading a book now." },
          { en: "write", pl: "pisać", example: "He is writing an email." },
          { en: "cook", pl: "gotować", example: "Mum is cooking dinner." },
          { en: "watch TV", pl: "oglądać telewizję", example: "We are watching TV." },
          { en: "sleep", pl: "spać", example: "The baby is sleeping." },
          { en: "run", pl: "biegać", example: "The dog is running in the park." },
          { en: "listen", pl: "słuchać", example: "I am listening to music." },
          { en: "now / at the moment", pl: "teraz / w tej chwili", example: "What are you doing now?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Present Continuous", theoryRef: "A1/x1/s1", questions: [
          { kind: "choice", q: "She ___ a book now.", options: ["read", "is reading", "reads"], answer: 1, theoryRef: "A1/x1/s1" },
          { kind: "gap", q: "I ___ (write) an email at the moment.", answer: ["am writing", "writing"], theoryRef: "A1/x1/s1" },
          { kind: "dropdown", q: "They ___ football now.", options: ["are playing", "is playing", "play"], answer: 0 },
          { kind: "transform", q: "Zmień w Present Continuous:", given: "He cooks dinner.", hint: "teraz = am/is/are + -ing", answer: ["He is cooking dinner.", "He's cooking dinner."] },
          { kind: "truefalse", q: "„She are sleeping.” to poprawne zdanie.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["We", "are", "watching", "TV"], answer: ["We", "are", "watching", "TV"] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: co oni robią?", audio: "Look at my family. My mum is cooking dinner in the kitchen. My dad is reading a newspaper. My sister is listening to music and I am writing a letter.", instructions: "Posłuchaj i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What is mum doing?", options: ["She is reading.", "She is cooking.", "She is sleeping."], answer: 1 },
          { kind: "truefalse", q: "Dad is reading a newspaper.", answer: true },
          { kind: "dictation", q: "Wpisz, co usłyszysz:", audio: "My sister is listening to music.", answer: "My sister is listening to music." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: rozmowa przez telefon", theoryRef: "A1/x1/s1", recordLine: 1, lines: [
          { speaker: "Anna", en: "Hi! What are you doing?", pl: "Cześć! Co robisz?" },
          { speaker: "Ty", en: "I am watching a film. And you?", pl: "Oglądam film. A ty?" },
          { speaker: "Anna", en: "I am cooking dinner now.", pl: "Gotuję teraz obiad." },
          { speaker: "Ty", en: "Sounds great! Talk to you later.", pl: "Brzmi świetnie! Pogadamy później." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: Present Continuous", questions: [
          { kind: "choice", q: "Look! The dog ___ in the garden.", options: ["run", "runs", "is running"], answer: 2 },
          { kind: "gap", q: "We ___ (listen) to the teacher now.", answer: ["are listening", "listening"] },
          { kind: "transform", q: "Zmień na pytanie:", given: "You are working.", answer: ["Are you working?"] },
          { kind: "dropdown", q: "She ___ to music at the moment.", options: ["listens", "is listening", "listen"], answer: 1 },
          { kind: "order", q: "Ułóż pytanie:", words: ["What", "are", "you", "doing"], answer: ["What", "are", "you", "doing"] }
        ]}
      ]
    },

    /* ---------------- A1 / x2 — Jedzenie i picie (LEKSYKA) ---------------- */
    {
      id: "x2", title: "Jedzenie i picie — w restauracji", icon: "🍎",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zamawianie w restauracji", html: `
          <p>W restauracji prosimy uprzejmie: <span class="say">Can I have the menu, please?</span></p>
          <p>Składanie zamówienia: <span class="say">I'd like a pizza, please.</span> (<b>I'd like</b> = chciałbym)</p>
          <p>Prośba o rachunek: <span class="say">Can we have the bill, please?</span></p>
          <p class="tip">💡 „I'd like" jest grzeczniejsze niż „I want". Zawsze dodawaj <b>please</b>!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: jedzenie i picie", words: [
          { en: "breakfast", pl: "śniadanie", example: "I have breakfast at eight." },
          { en: "lunch", pl: "obiad / lunch", example: "We eat lunch at noon." },
          { en: "dinner", pl: "kolacja / obiad", example: "Dinner is ready." },
          { en: "soup", pl: "zupa", example: "The soup is hot." },
          { en: "chicken", pl: "kurczak", example: "I'd like chicken and rice." },
          { en: "vegetables", pl: "warzywa", example: "Eat your vegetables!" },
          { en: "juice", pl: "sok", example: "A glass of orange juice, please." },
          { en: "dessert", pl: "deser", example: "What is for dessert?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: w restauracji", theoryRef: "A1/x2/s1", questions: [
          { kind: "match", pairs: [{ a: "breakfast", b: "śniadanie" }, { a: "soup", b: "zupa" }, { a: "juice", b: "sok" }, { a: "dessert", b: "deser" }] },
          { kind: "categorize", q: "Posegreguj jedzenie i picie:", cats: ["Jedzenie", "Picie"], items: [{ t: "chicken", cat: 0 }, { t: "juice", cat: 1 }, { t: "soup", cat: 0 }, { t: "tea", cat: 1 }, { t: "bread", cat: 0 }] },
          { kind: "choice", q: "Grzeczne zamówienie:", options: ["I want pizza.", "I'd like a pizza, please.", "Give me pizza."], answer: 1 },
          { kind: "gap", q: "Can we have the ___, please? (rachunek)", answer: "bill" },
          { kind: "truefalse", q: "„Vegetables” znaczy „warzywa”.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: ulubione jedzenie Toma", intro: "Przeczytaj krótki tekst.", passage: `
          <p>My name is Tom. I love food.</p>
          <p>For breakfast I eat bread and an apple. I drink tea.</p>
          <p>For lunch I have chicken with vegetables. My favourite drink is orange juice.</p>
          <p>In the evening my mum makes soup. It is delicious!</p>`, theoryRef: "A1/x2/s1", questions: [
          { kind: "choice", q: "What does Tom drink for breakfast?", options: ["juice", "tea", "water"], answer: 1 },
          { kind: "truefalse", q: "Tom eats chicken for lunch.", answer: true },
          { kind: "gap", q: "Tom's favourite drink is orange ___.", answer: "juice" },
          { kind: "choice", q: "Who makes soup in the evening?", options: ["Tom", "his dad", "his mum"], answer: 2 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: zamawianie obiadu", theoryRef: "A1/x2/s1", recordLine: 1, lines: [
          { speaker: "Kelner", en: "Hello. Are you ready to order?", pl: "Dzień dobry. Czy są państwo gotowi zamówić?" },
          { speaker: "Ty", en: "Yes. I'd like soup and chicken, please.", pl: "Tak. Poproszę zupę i kurczaka." },
          { speaker: "Kelner", en: "And to drink?", pl: "A do picia?" },
          { speaker: "Ty", en: "A glass of orange juice, please.", pl: "Poproszę szklankę soku pomarańczowego." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: jedzenie", questions: [
          { kind: "match", pairs: [{ a: "chicken", b: "kurczak" }, { a: "soup", b: "zupa" }, { a: "dinner", b: "kolacja" }] },
          { kind: "categorize", q: "Posiłek czy napój?", cats: ["Posiłek", "Napój"], items: [{ t: "breakfast", cat: 0 }, { t: "juice", cat: 1 }, { t: "lunch", cat: 0 }, { t: "coffee", cat: 1 }] },
          { kind: "gap", q: "I'd ___ a pizza, please. (chciałbym)", answer: "like" },
          { kind: "choice", q: "Posiłek wieczorny to:", options: ["breakfast", "lunch", "dinner"], answer: 2 }
        ]}
      ]
    },

    /* ---------------- A1 / x3 — There is / There are (GRAMATYKA) ---------------- */
    {
      id: "x3", title: "There is / There are", icon: "📦",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: there is / there are", html: `
          <p>Używamy, gdy mówimy, że coś <b>istnieje</b> lub <b>znajduje się</b> w jakimś miejscu.</p>
          <table class="t-table">
            <tr><th>Liczba</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>jeden (l.poj.)</td><td>There is</td><td>There is a cat.</td></tr>
            <tr><td>kilka (l.mn.)</td><td>There are</td><td>There are two cats.</td></tr>
          </table>
          <p>Przeczenie: <span class="say">There isn't a TV.</span> / <span class="say">There aren't any chairs.</span></p>
          <p>Pytanie: <span class="say">Is there a park?</span> / <span class="say">Are there any shops?</span></p>
          <p class="tip">💡 W pytaniach i przeczeniach z l.mn. używamy <b>any</b>: Are there <b>any</b> books?</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: w mieście i pokoju", words: [
          { en: "park", pl: "park", example: "There is a park near my house." },
          { en: "shop", pl: "sklep", example: "There are two shops here." },
          { en: "window", pl: "okno", example: "There are three windows." },
          { en: "door", pl: "drzwi", example: "There is one door." },
          { en: "people", pl: "ludzie", example: "There are many people here." },
          { en: "tree", pl: "drzewo", example: "There are tall trees." },
          { en: "some / any", pl: "trochę / jakieś", example: "There are some books." },
          { en: "a lot of", pl: "dużo", example: "There are a lot of cars." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: there is/are", theoryRef: "A1/x3/s1", questions: [
          { kind: "choice", q: "There ___ a big tree in the garden.", options: ["is", "are", "be"], answer: 0, theoryRef: "A1/x3/s1" },
          { kind: "dropdown", q: "There ___ five windows in this room.", options: ["is", "are", "am"], answer: 1 },
          { kind: "gap", q: "___ there a park near here? (Is/Are)", answer: "Is", theoryRef: "A1/x3/s1" },
          { kind: "transform", q: "Zmień na liczbę mnogą:", given: "There is a shop.", hint: "two shops", answer: ["There are two shops.", "There are shops."] },
          { kind: "truefalse", q: "„There are a cat.” jest poprawne.", answer: false },
          { kind: "multi", q: "Które zdania są poprawne? (zaznacz wszystkie)", options: ["There is a door.", "There are a door.", "There are two doors.", "There is two doors."], answers: [0, 2] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: mój pokój", intro: "Przeczytaj opis pokoju.", passage: `
          <p>This is my room. It is small but nice.</p>
          <p>There is a bed and a small table. There are two windows.</p>
          <p>There is a lamp on the table. There aren't any chairs.</p>
          <p>I love my room!</p>`, theoryRef: "A1/x3/s1", questions: [
          { kind: "truefalse", q: "There are two windows in the room.", answer: true },
          { kind: "choice", q: "How many beds are there?", options: ["one", "two", "three"], answer: 0 },
          { kind: "truefalse", q: "There are some chairs in the room.", answer: false },
          { kind: "gap", q: "There is a lamp on the ___.", answer: "table" }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: there is/are", questions: [
          { kind: "choice", q: "There ___ a lot of people here.", options: ["is", "are", "am"], answer: 1 },
          { kind: "gap", q: "There ___ a window. (l.poj.)", answer: "is" },
          { kind: "multi", q: "Zaznacz poprawne zdania:", options: ["There are three trees.", "There is three trees.", "There is a park."], answers: [0, 2] },
          { kind: "order", q: "Ułóż pytanie:", words: ["Are", "there", "any", "shops"], answer: ["Are", "there", "any", "shops"] }
        ]}
      ]
    },

    /* ---------------- A1 / x4 — Ubrania i kolory (LEKSYKA) ---------------- */
    {
      id: "x4", title: "Ubrania i kolory", icon: "👕",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: ubrania i kolory", html: `
          <p>Kolor stoi <b>przed</b> rzeczownikiem: <span class="say">a red shirt</span>, <span class="say">blue jeans</span>.</p>
          <p>Pytamy o ubranie: <span class="say">What are you wearing?</span> (<b>wear</b> = nosić, mieć na sobie)</p>
          <p>Główne kolory: red, blue, green, yellow, black, white, brown, pink.</p>
          <p class="tip">💡 Pamiętaj brytyjską pisownię: <b>colour</b>, nie „color"!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: ubrania i kolory", words: [
          { en: "shirt", pl: "koszula", example: "He is wearing a white shirt." },
          { en: "T-shirt", pl: "koszulka", example: "I like this blue T-shirt." },
          { en: "trousers", pl: "spodnie", example: "Her trousers are black." },
          { en: "dress", pl: "sukienka", example: "She has a red dress." },
          { en: "shoes", pl: "buty", example: "My shoes are brown." },
          { en: "jacket", pl: "kurtka / marynarka", example: "It's cold, wear a jacket." },
          { en: "colour", pl: "kolor", example: "What is your favourite colour?" },
          { en: "favourite", pl: "ulubiony", example: "Green is my favourite colour." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: ubrania i kolory", theoryRef: "A1/x4/s1", questions: [
          { kind: "match", pairs: [{ a: "shirt", b: "koszula" }, { a: "shoes", b: "buty" }, { a: "dress", b: "sukienka" }, { a: "jacket", b: "kurtka" }] },
          { kind: "categorize", q: "Posegreguj słowa:", cats: ["Ubranie", "Kolor"], items: [{ t: "trousers", cat: 0 }, { t: "red", cat: 1 }, { t: "shoes", cat: 0 }, { t: "blue", cat: 1 }, { t: "dress", cat: 0 }] },
          { kind: "choice", q: "Poprawny szyk:", options: ["a shirt red", "a red shirt", "red a shirt"], answer: 1 },
          { kind: "gap", q: "What is your favourite ___? (kolor, brytyjska pisownia)", answer: "colour" },
          { kind: "multi", q: "Które słowa to kolory? (zaznacz wszystkie)", options: ["green", "shoes", "yellow", "jacket", "black"], answers: [0, 2, 4] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: co ona nosi?", audio: "This is Emma. Today she is wearing a blue dress and white shoes. She has a black jacket. Her favourite colour is blue.", instructions: "Posłuchaj i odpowiedz.", questions: [
          { kind: "choice", q: "What colour is Emma's dress?", options: ["white", "blue", "black"], answer: 1 },
          { kind: "truefalse", q: "Emma's shoes are white.", answer: true },
          { kind: "dictation", q: "Wpisz zdanie:", audio: "Her favourite colour is blue.", answer: "Her favourite colour is blue." }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: opisz ubranie", prompts: [
          { en: "I am wearing a blue T-shirt.", pl: "Mam na sobie niebieską koszulkę." },
          { en: "My favourite colour is green.", pl: "Mój ulubiony kolor to zielony." },
          { en: "She has black shoes and a red dress.", pl: "Ona ma czarne buty i czerwoną sukienkę." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: ubrania i kolory", questions: [
          { kind: "match", pairs: [{ a: "trousers", b: "spodnie" }, { a: "T-shirt", b: "koszulka" }, { a: "colour", b: "kolor" }] },
          { kind: "categorize", q: "Ubranie czy kolor?", cats: ["Ubranie", "Kolor"], items: [{ t: "jacket", cat: 0 }, { t: "white", cat: 1 }, { t: "shirt", cat: 0 }, { t: "brown", cat: 1 }] },
          { kind: "choice", q: "She is ___ a red dress.", options: ["wear", "wearing", "wears"], answer: 1 },
          { kind: "order", q: "Ułóż wyrażenie:", words: ["a", "yellow", "jacket"], answer: ["a", "yellow", "jacket"] }
        ]}
      ]
    },

    /* ---------------- A1 / x5 — Can / can't (GRAMATYKA) ---------------- */
    {
      id: "x5", title: "Can / can't — umiejętności", icon: "💪",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: can / can't", html: `
          <p><b>can</b> = umieć / móc. Po nim czasownik <b>bez to</b>: <span class="say">I can swim.</span></p>
          <table class="t-table">
            <tr><th>Zdanie</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>twierdzące</td><td>can</td><td>She can dance.</td></tr>
            <tr><td>przeczące</td><td>can't (cannot)</td><td>He can't cook.</td></tr>
            <tr><td>pytanie</td><td>Can …?</td><td>Can you sing?</td></tr>
          </table>
          <p>Krótkie odpowiedzi: <span class="say">Yes, I can.</span> / <span class="say">No, I can't.</span></p>
          <p class="tip">💡 „can" jest takie samo dla wszystkich osób — nigdy nie dodajemy -s!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: umiejętności", words: [
          { en: "swim", pl: "pływać", example: "I can swim in the sea." },
          { en: "drive", pl: "prowadzić auto", example: "She can't drive yet." },
          { en: "cook", pl: "gotować", example: "Can you cook pasta?" },
          { en: "dance", pl: "tańczyć", example: "They can dance well." },
          { en: "sing", pl: "śpiewać", example: "He can sing very well." },
          { en: "draw", pl: "rysować", example: "I can draw animals." },
          { en: "speak English", pl: "mówić po angielsku", example: "Can you speak English?" },
          { en: "ride a horse", pl: "jeździć konno", example: "She can ride a horse." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: can/can't", theoryRef: "A1/x5/s1", questions: [
          { kind: "choice", q: "She ___ play the piano.", options: ["can", "cans", "is can"], answer: 0, theoryRef: "A1/x5/s1" },
          { kind: "gap", q: "I ___ swim. I am afraid of water. (przeczenie skrót)", answer: "can't", theoryRef: "A1/x5/s1" },
          { kind: "dropdown", q: "___ you cook dinner?", options: ["Can", "Are", "Do"], answer: 0 },
          { kind: "transform", q: "Zmień na przeczenie:", given: "He can drive.", answer: ["He can't drive.", "He cannot drive."] },
          { kind: "truefalse", q: "„She cans dance.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["Can", "you", "speak", "English"], answer: ["Can", "you", "speak", "English"] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: nowy talent", theoryRef: "A1/x5/s1", recordLine: 1, lines: [
          { speaker: "Mark", en: "Can you play a musical instrument?", pl: "Umiesz grać na jakimś instrumencie?" },
          { speaker: "Ty", en: "Yes, I can play the guitar. Can you?", pl: "Tak, umiem grać na gitarze. A ty?" },
          { speaker: "Mark", en: "No, I can't. But I can sing!", pl: "Nie, nie umiem. Ale umiem śpiewać!" },
          { speaker: "Ty", en: "Great! Let's make music together.", pl: "Świetnie! Zróbmy razem muzykę." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: can/can't", questions: [
          { kind: "choice", q: "Birds ___ fly.", options: ["can", "cans", "are"], answer: 0 },
          { kind: "gap", q: "He ___ (not) drive a car. (skrót)", answer: "can't" },
          { kind: "transform", q: "Zmień na pytanie:", given: "You can dance.", answer: ["Can you dance?"] },
          { kind: "choice", q: "„Can you swim?” — odpowiedź przecząca:", options: ["No, I don't.", "No, I can't.", "No, I amn't."], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "can't", "ride", "a", "horse"], answer: ["I", "can't", "ride", "a", "horse"] }
        ]}
      ]
    },

    /* ---------------- A1 / x6 — Pogoda i pory roku (LEKSYKA) ---------------- */
    {
      id: "x6", title: "Pogoda i pory roku", icon: "🌦️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: mówienie o pogodzie", html: `
          <p>Pytamy: <span class="say">What's the weather like?</span> (Jaka jest pogoda?)</p>
          <p>Odpowiadamy z <b>It's</b>: <span class="say">It's sunny.</span> / <span class="say">It's raining.</span></p>
          <p>Pory roku: <b>spring</b> (wiosna), <b>summer</b> (lato), <b>autumn</b> (jesień), <b>winter</b> (zima).</p>
          <p class="tip">💡 „It's raining" (Present Continuous) = teraz pada. „It rains a lot here" = ogólnie często pada.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: pogoda i pory roku", words: [
          { en: "sunny", pl: "słonecznie", example: "It's sunny today." },
          { en: "rainy / raining", pl: "deszczowo / pada", example: "It's raining now." },
          { en: "cloudy", pl: "pochmurno", example: "The sky is cloudy." },
          { en: "windy", pl: "wietrznie", example: "It's very windy." },
          { en: "snow / snowing", pl: "śnieg / pada śnieg", example: "It's snowing in winter." },
          { en: "hot / cold", pl: "gorąco / zimno", example: "Summer is hot, winter is cold." },
          { en: "spring / summer", pl: "wiosna / lato", example: "I love spring and summer." },
          { en: "autumn / winter", pl: "jesień / zima", example: "Autumn is windy, winter is cold." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: pogoda", theoryRef: "A1/x6/s1", questions: [
          { kind: "match", pairs: [{ a: "sunny", b: "słonecznie" }, { a: "windy", b: "wietrznie" }, { a: "winter", b: "zima" }, { a: "summer", b: "lato" }] },
          { kind: "categorize", q: "Posegreguj słowa:", cats: ["Pogoda", "Pora roku" ], items: [{ t: "rainy", cat: 0 }, { t: "spring", cat: 1 }, { t: "sunny", cat: 0 }, { t: "winter", cat: 1 }, { t: "windy", cat: 0 }] },
          { kind: "gap", q: "What's the weather ___? (Jaka jest pogoda?)", answer: "like" },
          { kind: "dropdown", q: "It's ___ today, take an umbrella.", options: ["sunny", "raining", "hot"], answer: 1 },
          { kind: "truefalse", q: "„Autumn” znaczy „wiosna”.", answer: false }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: prognoza pogody", audio: "Good morning. Here is the weather. Today it is sunny and hot in the south. In the north it is cloudy and windy. Tomorrow it will rain.", instructions: "Posłuchaj prognozy i odpowiedz.", questions: [
          { kind: "choice", q: "How is the weather in the south today?", options: ["rainy", "sunny and hot", "snowy"], answer: 1 },
          { kind: "truefalse", q: "In the north it is cloudy and windy.", answer: true },
          { kind: "dictation", q: "Wpisz zdanie:", audio: "Tomorrow it will rain.", answer: "Tomorrow it will rain." }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: pogoda i pory roku", prompts: [
          { en: "It's sunny and warm today.", pl: "Dzisiaj jest słonecznie i ciepło." },
          { en: "My favourite season is summer.", pl: "Moja ulubiona pora roku to lato." },
          { en: "In winter it is cold and it snows.", pl: "Zimą jest zimno i pada śnieg." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: pogoda i pory roku", questions: [
          { kind: "match", pairs: [{ a: "cloudy", b: "pochmurno" }, { a: "snow", b: "śnieg" }, { a: "autumn", b: "jesień" }] },
          { kind: "categorize", q: "Pogoda czy pora roku?", cats: ["Pogoda", "Pora roku"], items: [{ t: "windy", cat: 0 }, { t: "summer", cat: 1 }, { t: "sunny", cat: 0 }, { t: "spring", cat: 1 }] },
          { kind: "gap", q: "It's ___ today, the sun is shining. (słonecznie)", answer: "sunny" },
          { kind: "choice", q: "Najzimniejsza pora roku to:", options: ["summer", "spring", "winter"], answer: 2 }
        ]}
      ]
    },

    /* ---------------- A1 / x7 — Przyimki miejsca (GRAMATYKA) ---------------- */
    {
      id: "x7", title: "Przyimki miejsca — in/on/under/next to", icon: "📍",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: przyimki miejsca", html: `
          <p>Przyimki mówią, <b>gdzie</b> coś jest.</p>
          <table class="t-table">
            <tr><th>Przyimek</th><th>PL</th><th>Przykład</th></tr>
            <tr><td>in</td><td>w</td><td>The keys are in the bag.</td></tr>
            <tr><td>on</td><td>na</td><td>The book is on the table.</td></tr>
            <tr><td>under</td><td>pod</td><td>The cat is under the chair.</td></tr>
            <tr><td>next to</td><td>obok</td><td>The lamp is next to the bed.</td></tr>
          </table>
          <p>Pytamy: <span class="say">Where is the cat?</span> → <span class="say">It's under the table.</span></p>
          <p class="tip">💡 in = wewnątrz; on = na powierzchni; under = pod spodem; next to = tuż obok.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: miejsce", words: [
          { en: "in", pl: "w / wewnątrz", example: "The pen is in the box." },
          { en: "on", pl: "na", example: "The cup is on the table." },
          { en: "under", pl: "pod", example: "The ball is under the bed." },
          { en: "next to", pl: "obok", example: "The chair is next to the door." },
          { en: "behind", pl: "za", example: "The car is behind the house." },
          { en: "in front of", pl: "przed", example: "The tree is in front of the house." },
          { en: "between", pl: "pomiędzy", example: "The shop is between two banks." },
          { en: "where", pl: "gdzie", example: "Where are my keys?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: przyimki miejsca", theoryRef: "A1/x7/s1", questions: [
          { kind: "choice", q: "The book is ___ the table. (na)", options: ["in", "on", "under"], answer: 1, theoryRef: "A1/x7/s1" },
          { kind: "dropdown", q: "The cat is ___ the chair. (pod)", options: ["on", "under", "next to"], answer: 1 },
          { kind: "gap", q: "The keys are ___ the bag. (w)", answer: "in", theoryRef: "A1/x7/s1" },
          { kind: "match", pairs: [{ a: "on", b: "na" }, { a: "under", b: "pod" }, { a: "next to", b: "obok" }, { a: "behind", b: "za" }] },
          { kind: "multi", q: "Które zdania mają sens? (zaznacz poprawne)", options: ["The lamp is on the table.", "The fish is in the water.", "The plane is under the sky."], answers: [0, 1] },
          { kind: "transform", q: "Uzupełnij przyimek (obok):", given: "The chair is ___ the door.", answer: ["next to"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: gdzie jest kot?", intro: "Przeczytaj i odpowiedz.", passage: `
          <p>This is the living room. There is a sofa and a table.</p>
          <p>The TV is on the table. There is a lamp next to the sofa.</p>
          <p>Where is the cat? The cat is under the table.</p>
          <p>The dog is in front of the door.</p>`, theoryRef: "A1/x7/s1", questions: [
          { kind: "choice", q: "Where is the cat?", options: ["on the table", "under the table", "next to the sofa"], answer: 1 },
          { kind: "truefalse", q: "The TV is on the table.", answer: true },
          { kind: "gap", q: "The lamp is ___ ___ the sofa. (obok)", answer: ["next to"] },
          { kind: "choice", q: "Where is the dog?", options: ["under the table", "in front of the door", "on the sofa"], answer: 1 }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: przyimki miejsca", questions: [
          { kind: "choice", q: "The ball is ___ the bed. (pod)", options: ["on", "in", "under"], answer: 2 },
          { kind: "gap", q: "The picture is ___ the wall. (na)", answer: "on" },
          { kind: "dropdown", q: "The shop is ___ two banks. (pomiędzy)", options: ["between", "under", "in"], answer: 0 },
          { kind: "match", pairs: [{ a: "in", b: "w" }, { a: "behind", b: "za" }, { a: "in front of", b: "przed" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "cat", "is", "on", "the", "bed"], answer: ["The", "cat", "is", "on", "the", "bed"] }
        ]}
      ]
    },

    /* ---------------- A1 / x8 — Dom i meble (LEKSYKA) ---------------- */
    {
      id: "x8", title: "Dom i meble", icon: "🛋️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: pokoje i meble", html: `
          <p>Dom ma różne pokoje: <b>kitchen</b> (kuchnia), <b>bedroom</b> (sypialnia), <b>bathroom</b> (łazienka), <b>living room</b> (salon).</p>
          <p>Meble to <b>furniture</b>: <span class="say">a sofa, a bed, a table, a wardrobe</span>.</p>
          <p>Opisujemy: <span class="say">There is a big sofa in the living room.</span></p>
          <p class="tip">💡 „furniture" jest niepoliczalne — nie mówimy „furnitures"! Mówimy: a piece of furniture.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: dom i meble", words: [
          { en: "house", pl: "dom", example: "Our house is big." },
          { en: "bedroom", pl: "sypialnia", example: "My bedroom is upstairs." },
          { en: "bathroom", pl: "łazienka", example: "The bathroom is small." },
          { en: "living room", pl: "salon", example: "We watch TV in the living room." },
          { en: "sofa", pl: "kanapa", example: "There is a soft sofa." },
          { en: "wardrobe", pl: "szafa", example: "My clothes are in the wardrobe." },
          { en: "fridge", pl: "lodówka", example: "The milk is in the fridge." },
          { en: "furniture", pl: "meble", example: "We need new furniture." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: dom i meble", theoryRef: "A1/x8/s1", questions: [
          { kind: "match", pairs: [{ a: "bedroom", b: "sypialnia" }, { a: "sofa", b: "kanapa" }, { a: "fridge", b: "lodówka" }, { a: "wardrobe", b: "szafa" }] },
          { kind: "categorize", q: "Posegreguj słowa:", cats: ["Pokój", "Mebel"], items: [{ t: "kitchen", cat: 0 }, { t: "sofa", cat: 1 }, { t: "bathroom", cat: 0 }, { t: "bed", cat: 1 }, { t: "bedroom", cat: 0 }] },
          { kind: "choice", q: "Gdzie trzymamy mleko?", options: ["in the wardrobe", "in the fridge", "on the sofa"], answer: 1 },
          { kind: "gap", q: "We watch TV in the living ___.", answer: "room" },
          { kind: "multi", q: "Które słowa to meble? (zaznacz wszystkie)", options: ["sofa", "kitchen", "bed", "wardrobe", "bathroom"], answers: [0, 2, 3] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: nasz nowy dom", intro: "Przeczytaj tekst o domu.", passage: `
          <p>We have a new house. It is big and modern.</p>
          <p>There are three bedrooms and two bathrooms.</p>
          <p>In the living room there is a big sofa and a TV.</p>
          <p>I like my bedroom. There is a comfortable bed and a wardrobe for my clothes.</p>`, theoryRef: "A1/x8/s1", questions: [
          { kind: "choice", q: "How many bedrooms are there?", options: ["two", "three", "four"], answer: 1 },
          { kind: "truefalse", q: "There is a sofa in the living room.", answer: true },
          { kind: "gap", q: "There is a wardrobe for my ___.", answer: "clothes" },
          { kind: "truefalse", q: "The house is small and old.", answer: false }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: zwiedzanie mieszkania", theoryRef: "A1/x8/s1", recordLine: 1, lines: [
          { speaker: "Kate", en: "This is the living room. Do you like it?", pl: "To jest salon. Podoba ci się?" },
          { speaker: "Ty", en: "Yes, the sofa is very nice!", pl: "Tak, kanapa jest bardzo ładna!" },
          { speaker: "Kate", en: "And here is the kitchen with a new fridge.", pl: "A tu jest kuchnia z nową lodówką." },
          { speaker: "Ty", en: "It's a beautiful house. I love it.", pl: "To piękny dom. Uwielbiam go." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: dom i meble", questions: [
          { kind: "match", pairs: [{ a: "house", b: "dom" }, { a: "bathroom", b: "łazienka" }, { a: "furniture", b: "meble" }] },
          { kind: "categorize", q: "Pokój czy mebel?", cats: ["Pokój", "Mebel"], items: [{ t: "living room", cat: 0 }, { t: "wardrobe", cat: 1 }, { t: "kitchen", cat: 0 }, { t: "sofa", cat: 1 }] },
          { kind: "gap", q: "My clothes are in the ___. (szafa)", answer: "wardrobe" },
          { kind: "choice", q: "Pokój do spania to:", options: ["bathroom", "bedroom", "kitchen"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["There", "is", "a", "big", "sofa"], answer: ["There", "is", "a", "big", "sofa"] }
        ]}
      ]
    }

  );
})();
