/* A2 — dodatkowe tematy, część 2 (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "A2"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- A2 / x9 — Past Simple: was/were + nieregularne (GRAMATYKA) ---------------- */
    {
      id: "x9", title: "Past Simple — was / were i nieregularne", icon: "🗓️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: was / were + nieregularne", html: `
          <p><b>was / were</b> to przeszła forma czasownika <b>to be</b> (być).</p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>I / he / she / it</td><td>was</td><td>I was tired yesterday.</td></tr>
            <tr><td>you / we / they</td><td>were</td><td>They were at home.</td></tr>
          </table>
          <p>Przeczenie: <span class="say">I wasn't ready.</span> / <span class="say">They weren't happy.</span></p>
          <p>Pytanie: <span class="say">Were you at school?</span> → <span class="say">Yes, I was.</span> / <span class="say">No, I wasn't.</span></p>
          <p>Pozostałe czasowniki w czasie przeszłym mają formy regularne (-ed) lub nieregularne, np. <b>go → went</b>, <b>see → saw</b>, <b>have → had</b>.</p>
          <p class="tip">💡 Sygnały Past Simple: yesterday, last week, two days ago, in 2010.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czasowniki nieregularne", words: [
          { en: "was / were", pl: "byłem / byliśmy (od be)", example: "I was at the cinema yesterday." },
          { en: "go → went", pl: "iść / pojechać", example: "We went to the beach." },
          { en: "see → saw", pl: "zobaczyć", example: "I saw a great concert." },
          { en: "have → had", pl: "mieć / jeść (posiłek)", example: "She had a sandwich for lunch." },
          { en: "make → made", pl: "robić / wykonać", example: "He made a delicious cake." },
          { en: "get → got", pl: "dostać / otrzymać", example: "I got a present for my birthday." },
          { en: "give → gave", pl: "dawać", example: "She gave me a book." },
          { en: "ago", pl: "temu", example: "I met him two years ago." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: was/were i nieregularne", theoryRef: "A2/x9/s1", questions: [
          { kind: "choice", q: "I ___ at home yesterday.", options: ["was", "were", "am"], answer: 0, theoryRef: "A2/x9/s1" },
          { kind: "gap", q: "They ___ very tired after the trip. (was/were)", answer: "were", theoryRef: "A2/x9/s1" },
          { kind: "dropdown", q: "She ___ to the shops two hours ago.", options: ["went", "goed", "go"], answer: 0, theoryRef: "A2/x9/s1" },
          { kind: "transform", q: "Zmień na przeczenie:", given: "I was happy.", hint: "was → wasn't", answer: ["I wasn't happy.", "I was not happy."] },
          { kind: "truefalse", q: "Zdanie „They was at school.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["Were", "you", "at", "the", "party"], answer: ["Were", "you", "at", "the", "party"] },
          { kind: "match", pairs: [{ a: "have", b: "had" }, { a: "see", b: "saw" }, { a: "make", b: "made" }, { a: "get", b: "got" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: a busy weekend", intro: "Przeczytaj o weekendzie Bena i odpowiedz na pytania.", theoryRef: "A2/x9/s1", passage: `
          <p>Last weekend was very busy for Ben. On Saturday morning he was at the market with his mum.</p>
          <p>They bought some fruit and vegetables. After that, Ben went to the park and saw his friends.</p>
          <p>In the evening, his family had a big dinner. His dad made a wonderful pasta.</p>
          <p>On Sunday Ben was tired, so he stayed at home and read a book.</p>`, questions: [
          { kind: "truefalse", q: "Ben was at the market on Saturday morning.", answer: true },
          { kind: "choice", q: "Who made the pasta?", options: ["Ben", "His mum", "His dad"], answer: 2 },
          { kind: "gap", q: "On Sunday Ben ___ tired. (was/were)", answer: "was" },
          { kind: "truefalse", q: "Ben went to the cinema on Sunday.", answer: false }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: jak minął dzień?", theoryRef: "A2/x9/s1", recordLine: 1, lines: [
          { speaker: "Sam", en: "Where were you yesterday?", pl: "Gdzie byłeś wczoraj?" },
          { speaker: "Ty", en: "I was at the cinema. I saw a great film.", pl: "Byłem w kinie. Obejrzałem świetny film." },
          { speaker: "Sam", en: "Were your friends there too?", pl: "Czy twoi przyjaciele też tam byli?" },
          { speaker: "Ty", en: "Yes, they were. After that we had pizza together.", pl: "Tak, byli. Potem zjedliśmy razem pizzę." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: Past Simple", questions: [
          { kind: "choice", q: "We ___ at the beach last Sunday.", options: ["was", "were", "are"], answer: 1, theoryRef: "A2/x9/s1" },
          { kind: "gap", q: "She ___ me a nice present. (give — nieregularna)", answer: "gave" },
          { kind: "transform", q: "Zmień na pytanie:", given: "You were at work.", hint: "Were you...?", answer: ["Were you at work?"] },
          { kind: "multi", q: "Które słowa są sygnałami Past Simple?", options: ["yesterday", "now", "two days ago", "last week", "always"], answers: [0, 2, 3] },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "got", "a", "letter", "yesterday"], answer: ["I", "got", "a", "letter", "yesterday"] }
        ]}
      ]
    },

    /* ---------------- A2 / x10 — Travel and holidays (LEKSYKA) ---------------- */
    {
      id: "x10", title: "Podróże i wakacje — lotnisko i hotel", icon: "🧳",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: na lotnisku i w hotelu", html: `
          <p>Podczas podróży używamy wielu przydatnych zwrotów na lotnisku i w hotelu.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td>I'd like to check in, please.</td><td>Chciałbym się zameldować.</td></tr>
            <tr><td>I have a reservation.</td><td>Mam rezerwację.</td></tr>
            <tr><td>Where is the gate?</td><td>Gdzie jest wyjście do samolotu?</td></tr>
            <tr><td>What time is boarding?</td><td>O której godzinie jest wejście na pokład?</td></tr>
          </table>
          <p>W hotelu pytamy: <span class="say">Is breakfast included?</span> &nbsp; <span class="say">Can I have the key, please?</span></p>
          <p class="tip">💡 „book a room" = zarezerwować pokój. „a single room" = pokój jednoosobowy, „a double room" = pokój dwuosobowy.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: podróże i wakacje", words: [
          { en: "airport", pl: "lotnisko", example: "We arrived at the airport early." },
          { en: "flight", pl: "lot", example: "My flight is at six o'clock." },
          { en: "luggage", pl: "bagaż", example: "Don't forget your luggage." },
          { en: "boarding pass", pl: "karta pokładowa", example: "Show me your boarding pass, please." },
          { en: "hotel", pl: "hotel", example: "We stayed in a nice hotel." },
          { en: "reservation", pl: "rezerwacja", example: "I have a reservation for two nights." },
          { en: "book a room", pl: "zarezerwować pokój", example: "I want to book a double room." },
          { en: "suitcase", pl: "walizka", example: "My suitcase is very heavy." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: podróże i wakacje", theoryRef: "A2/x10/s1", questions: [
          { kind: "match", pairs: [{ a: "airport", b: "lotnisko" }, { a: "flight", b: "lot" }, { a: "luggage", b: "bagaż" }, { a: "suitcase", b: "walizka" }] },
          { kind: "categorize", q: "Pogrupuj słowa:", cats: ["Lotnisko", "Hotel"], items: [{ t: "boarding pass", cat: 0 }, { t: "reservation", cat: 1 }, { t: "flight", cat: 0 }, { t: "key", cat: 1 }, { t: "gate", cat: 0 }] },
          { kind: "choice", q: "Where do you go to catch a plane?", options: ["the hotel", "the airport", "the shop"], answer: 1, theoryRef: "A2/x10/s1" },
          { kind: "gap", q: "I have a ___ for two nights at the hotel. (rezerwacja)", answer: "reservation" },
          { kind: "dropdown", q: "I'd like to ___ a double room.", options: ["book", "buy", "drive"], answer: 0 },
          { kind: "truefalse", q: "„boarding pass” oznacza po polsku „karta pokładowa”.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: meldowanie w hotelu", audio: "Good evening. Do you have a reservation? Yes, I have a reservation for two nights. A double room. Can I see your passport, please? Here you are. Thank you. Your room number is twelve. Is breakfast included? Yes, breakfast is from seven to ten in the morning.", instructions: "Posłuchaj rozmowy w hotelu i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "How many nights is the reservation for?", options: ["One night", "Two nights", "Three nights"], answer: 1 },
          { kind: "truefalse", q: "The guest has a double room.", answer: true },
          { kind: "choice", q: "Is breakfast included?", options: ["Yes, it is", "No, it isn't", "Only at the weekend"], answer: 0 },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "I have a reservation for two nights.", answer: "I have a reservation for two nights." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: odprawa na lotnisku", theoryRef: "A2/x10/s1", recordLine: 1, lines: [
          { speaker: "Assistant", en: "Good morning. Can I see your passport, please?", pl: "Dzień dobry. Czy mogę zobaczyć pana paszport?" },
          { speaker: "Ty", en: "Here you are. I'd like to check in for the flight to Rome.", pl: "Proszę. Chciałbym się odprawić na lot do Rzymu." },
          { speaker: "Assistant", en: "How many suitcases do you have?", pl: "Ile ma pan walizek?" },
          { speaker: "Ty", en: "Just one. What time is boarding?", pl: "Tylko jedną. O której jest wejście na pokład?" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: podróże i wakacje", questions: [
          { kind: "match", pairs: [{ a: "hotel", b: "hotel" }, { a: "reservation", b: "rezerwacja" }, { a: "boarding pass", b: "karta pokładowa" }] },
          { kind: "categorize", q: "Lotnisko czy hotel?", cats: ["Lotnisko", "Hotel"], items: [{ t: "flight", cat: 0 }, { t: "key", cat: 1 }, { t: "gate", cat: 0 }, { t: "double room", cat: 1 }] },
          { kind: "gap", q: "My ___ is at ten o'clock, so we must be at the airport early. (lot)", answer: "flight" },
          { kind: "multi", q: "Które słowa pasują do podróży?", options: ["airport", "fever", "suitcase", "luggage", "office"], answers: [0, 2, 3] },
          { kind: "choice", q: "Pokój dwuosobowy to:", options: ["a single room", "a double room", "a living room"], answer: 1 }
        ]}
      ]
    },

    /* ---------------- A2 / x11 — Comparatives & superlatives (GRAMATYKA) ---------------- */
    {
      id: "x11", title: "Stopniowanie przymiotników — razem", icon: "📊",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: wyższy i najwyższy razem", html: `
          <p>Przymiotniki mają trzy stopnie: równy, <b>wyższy</b> (porównujemy dwie rzeczy) i <b>najwyższy</b> (jedna rzecz wśród grupy).</p>
          <table class="t-table">
            <tr><th>Równy</th><th>Wyższy</th><th>Najwyższy</th></tr>
            <tr><td>tall</td><td>taller (than)</td><td>the tallest</td></tr>
            <tr><td>big</td><td>bigger (than)</td><td>the biggest</td></tr>
            <tr><td>happy</td><td>happier (than)</td><td>the happiest</td></tr>
            <tr><td>interesting</td><td>more interesting</td><td>the most interesting</td></tr>
            <tr><td>good</td><td>better</td><td>the best</td></tr>
            <tr><td>bad</td><td>worse</td><td>the worst</td></tr>
          </table>
          <p>Po stopniu wyższym używamy <b>than</b>; przed najwyższym zawsze stoi <b>the</b>.</p>
          <p><span class="say">My bag is bigger than yours.</span> &nbsp; <span class="say">It's the biggest bag in the shop.</span></p>
          <p class="tip">💡 Nigdy nie łącz dwóch form: „more bigger" i „the most biggest" to błędy!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przymiotniki do stopniowania", words: [
          { en: "cheap → cheaper → the cheapest", pl: "tani → tańszy → najtańszy", example: "This is the cheapest phone here." },
          { en: "easy → easier → the easiest", pl: "łatwy → łatwiejszy → najłatwiejszy", example: "This exercise is the easiest." },
          { en: "famous → more famous → the most famous", pl: "sławny → bardziej sławny → najsławniejszy", example: "He is the most famous actor here." },
          { en: "hot → hotter → the hottest", pl: "gorący → gorętszy → najgorętszy", example: "Today is the hottest day." },
          { en: "comfortable → more comfortable", pl: "wygodny → wygodniejszy", example: "This sofa is more comfortable." },
          { en: "beautiful → the most beautiful", pl: "piękny → najpiękniejszy", example: "It's the most beautiful city." },
          { en: "near → nearer → the nearest", pl: "bliski → bliższy → najbliższy", example: "Where is the nearest shop?" },
          { en: "than", pl: "niż", example: "She is taller than her brother." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: wyższy i najwyższy", theoryRef: "A2/x11/s1", questions: [
          { kind: "choice", q: "This book is ___ than that one.", options: ["interesting", "more interesting", "the most interesting"], answer: 1, theoryRef: "A2/x11/s1" },
          { kind: "gap", q: "It's ___ day of the year. (hot — najwyższy)", answer: "the hottest", theoryRef: "A2/x11/s1" },
          { kind: "dropdown", q: "My phone is ___ than yours.", options: ["cheaper", "the cheapest", "more cheap"], answer: 0, theoryRef: "A2/x11/s1" },
          { kind: "transform", q: "Napisz stopień najwyższy:", given: "easy → ?", hint: "the + -iest", answer: ["the easiest"] },
          { kind: "truefalse", q: "Zdanie „She is more taller than me.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["This", "is", "the", "best", "restaurant", "in", "town"], answer: ["This", "is", "the", "best", "restaurant", "in", "town"] },
          { kind: "match", pairs: [{ a: "good", b: "the best" }, { a: "bad", b: "the worst" }, { a: "big", b: "the biggest" }, { a: "easy", b: "the easiest" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: three friends", intro: "Przeczytaj o trzech przyjaciołach i odpowiedz na pytania.", theoryRef: "A2/x11/s1", passage: `
          <p>Anna, Beth and Carla are good friends, but they are very different.</p>
          <p>Anna is tall, but Beth is taller. Carla is the tallest of the three.</p>
          <p>Beth is the most hardworking student in the class, and she gets the best marks.</p>
          <p>Carla thinks that maths is more difficult than English, but for Anna maths is the easiest subject.</p>`, questions: [
          { kind: "choice", q: "Who is the tallest?", options: ["Anna", "Beth", "Carla"], answer: 2 },
          { kind: "truefalse", q: "Beth is the most hardworking student.", answer: true },
          { kind: "gap", q: "For Anna, maths is the ___ subject. (easy — najwyższy)", answer: "easiest" },
          { kind: "truefalse", q: "Anna is taller than Beth.", answer: false }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: porównujemy telefony", theoryRef: "A2/x11/s1", recordLine: 1, lines: [
          { speaker: "Jack", en: "Which phone do you like more?", pl: "Który telefon bardziej ci się podoba?" },
          { speaker: "Ty", en: "The black one is cheaper, but the white one is faster.", pl: "Czarny jest tańszy, ale biały jest szybszy." },
          { speaker: "Jack", en: "And which one is the best?", pl: "A który jest najlepszy?" },
          { speaker: "Ty", en: "I think the white one is the best, but it's the most expensive.", pl: "Myślę, że biały jest najlepszy, ale jest najdroższy." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: stopniowanie", questions: [
          { kind: "choice", q: "Gold is ___ than silver.", options: ["expensive", "more expensive", "the most expensive"], answer: 1, theoryRef: "A2/x11/s1" },
          { kind: "gap", q: "Where is the ___ bus stop? (near — najwyższy)", answer: "nearest" },
          { kind: "transform", q: "Napisz stopień wyższy:", given: "comfortable → ?", hint: "more + ...", answer: ["more comfortable"] },
          { kind: "multi", q: "Które formy są poprawne?", options: ["taller", "more tall", "the best", "the most good", "happier"], answers: [0, 2, 4] },
          { kind: "order", q: "Ułóż zdanie:", words: ["My", "car", "is", "faster", "than", "yours"], answer: ["My", "car", "is", "faster", "than", "yours"] }
        ]}
      ]
    },

    /* ---------------- A2 / x12 — Shopping: sizes & returns (LEKSYKA) ---------------- */
    {
      id: "x12", title: "Zakupy — rozmiary i reklamacje", icon: "🏷️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: rozmiary, przymierzanie, zwroty", html: `
          <p>W sklepie z ubraniami pytamy o rozmiar (<b>size</b>) i przymierzamy (<b>try on</b>) rzeczy.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td>What size are you?</td><td>Jaki ma pan/pani rozmiar?</td></tr>
            <tr><td>Can I try this on?</td><td>Czy mogę to przymierzyć?</td></tr>
            <tr><td>It's too small / too big.</td><td>To jest za małe / za duże.</td></tr>
            <tr><td>Have you got a bigger size?</td><td>Czy ma pan/pani większy rozmiar?</td></tr>
            <tr><td>I'd like to return this.</td><td>Chciałbym to zwrócić.</td></tr>
          </table>
          <p>Rozmiary po angielsku: <b>small (S)</b>, <b>medium (M)</b>, <b>large (L)</b>.</p>
          <p class="tip">💡 „It fits me." = pasuje na mnie. „It suits you." = ładnie ci w tym (pasuje stylem).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: rozmiary i reklamacje", words: [
          { en: "size", pl: "rozmiar", example: "What size do you wear?" },
          { en: "fit", pl: "pasować (rozmiarem)", example: "These shoes don't fit me." },
          { en: "try on", pl: "przymierzyć", example: "Can I try on this jacket?" },
          { en: "changing room", pl: "przymierzalnia", example: "The changing room is over there." },
          { en: "return", pl: "zwrócić / zwrot", example: "I'd like to return this shirt." },
          { en: "exchange", pl: "wymienić", example: "Can I exchange it for a bigger one?" },
          { en: "too small", pl: "za małe", example: "This dress is too small." },
          { en: "refund", pl: "zwrot pieniędzy", example: "Can I get a refund, please?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: rozmiary i reklamacje", theoryRef: "A2/x12/s1", questions: [
          { kind: "match", pairs: [{ a: "size", b: "rozmiar" }, { a: "try on", b: "przymierzyć" }, { a: "return", b: "zwrócić" }, { a: "refund", b: "zwrot pieniędzy" }] },
          { kind: "choice", q: "These trousers are ___. I need a bigger size.", options: ["too small", "too cheap", "too late"], answer: 0, theoryRef: "A2/x12/s1" },
          { kind: "gap", q: "Can I ___ on this jacket, please? (przymierzyć)", answer: "try", theoryRef: "A2/x12/s1" },
          { kind: "categorize", q: "Pogrupuj słowa:", cats: ["Przymierzanie", "Reklamacja"], items: [{ t: "changing room", cat: 0 }, { t: "refund", cat: 1 }, { t: "try on", cat: 0 }, { t: "exchange", cat: 1 }, { t: "fit", cat: 0 }] },
          { kind: "dropdown", q: "Have you got a ___ size? This one is too small.", options: ["bigger", "biggest", "more big"], answer: 0 },
          { kind: "truefalse", q: "„refund” oznacza po polsku „zwrot pieniędzy”.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: zwrot w sklepie", audio: "Hello, how can I help you? I'd like to return this shirt. What's the problem with it? It's too small. Do you have the receipt? Yes, here it is. No problem. Would you like an exchange or a refund? A refund, please. Of course. Here is your money back.", instructions: "Posłuchaj rozmowy w sklepie i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What does the customer want to do?", options: ["Buy a shirt", "Return a shirt", "Try on a shirt"], answer: 1 },
          { kind: "choice", q: "What is the problem with the shirt?", options: ["It's too big", "It's too small", "It's too expensive"], answer: 1 },
          { kind: "truefalse", q: "The customer has the receipt.", answer: true },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "I'd like to return this shirt.", answer: "I'd like to return this shirt." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: przymierzanie ubrań", theoryRef: "A2/x12/s1", recordLine: 1, lines: [
          { speaker: "Shop assistant", en: "Can I help you?", pl: "Czy mogę pomóc?" },
          { speaker: "Ty", en: "Yes. Can I try on these jeans? What size are they?", pl: "Tak. Czy mogę przymierzyć te dżinsy? Jaki to rozmiar?" },
          { speaker: "Shop assistant", en: "They are medium. The changing room is over there.", pl: "To rozmiar M. Przymierzalnia jest tam." },
          { speaker: "Ty", en: "Thank you. They are a bit too small. Have you got a bigger size?", pl: "Dziękuję. Są trochę za małe. Czy ma pan większy rozmiar?" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: rozmiary i reklamacje", questions: [
          { kind: "match", pairs: [{ a: "fit", b: "pasować" }, { a: "exchange", b: "wymienić" }, { a: "changing room", b: "przymierzalnia" }] },
          { kind: "gap", q: "These shoes don't ___ me. They are too big. (pasować)", answer: "fit" },
          { kind: "categorize", q: "Przymierzanie czy reklamacja?", cats: ["Przymierzanie", "Reklamacja"], items: [{ t: "try on", cat: 0 }, { t: "return", cat: 1 }, { t: "size", cat: 0 }, { t: "refund", cat: 1 }] },
          { kind: "multi", q: "Które zwroty pasują do sklepu z ubraniami?", options: ["Can I try this on?", "Where is the gate?", "Have you got a bigger size?", "I'd like a refund."], answers: [0, 2, 3] },
          { kind: "truefalse", q: "„too small” znaczy „za duże”.", answer: false }
        ]}
      ]
    },

    /* ---------------- A2 / x13 — be going to: plany i przewidywania (GRAMATYKA) ---------------- */
    {
      id: "x13", title: "be going to — zamiary i przewidywania", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: be going to (rozszerzenie)", html: `
          <p><b>be going to</b> używamy w dwóch sytuacjach: gdy mówimy o <b>zamiarze</b> (już zdecydowaliśmy) i o <b>przewidywaniu</b> opartym na tym, co widzimy.</p>
          <table class="t-table">
            <tr><th>Sytuacja</th><th>Przykład</th></tr>
            <tr><td>Zamiar (plan)</td><td>I'm going to learn Spanish next year.</td></tr>
            <tr><td>Przewidywanie</td><td>Look at those clouds! It's going to rain.</td></tr>
          </table>
          <p>Przeczenie: <span class="say">She isn't going to come.</span></p>
          <p>Pytanie: <span class="say">What are you going to do tomorrow?</span></p>
          <p>Często ze słowami: <b>tomorrow</b>, <b>next week / month / year</b>, <b>tonight</b>, <b>soon</b>.</p>
          <p class="tip">💡 Po „going to" zawsze stoi bezokolicznik (czasownik w formie podstawowej): going to <u>buy</u>, going to <u>start</u>.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zamiary i przewidywania", words: [
          { en: "learn", pl: "uczyć się (czegoś)", example: "I'm going to learn to drive." },
          { en: "start", pl: "zaczynać", example: "She's going to start a new job." },
          { en: "win", pl: "wygrać", example: "Our team is going to win." },
          { en: "rain", pl: "padać (deszcz)", example: "It's going to rain this afternoon." },
          { en: "buy", pl: "kupić", example: "We're going to buy a new house." },
          { en: "meet", pl: "spotkać się", example: "I'm going to meet my friends tonight." },
          { en: "tomorrow", pl: "jutro", example: "We're going to travel tomorrow." },
          { en: "next month", pl: "w przyszłym miesiącu", example: "He's going to move next month." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: be going to", theoryRef: "A2/x13/s1", questions: [
          { kind: "choice", q: "We ___ going to visit Paris next year.", options: ["am", "is", "are"], answer: 2, theoryRef: "A2/x13/s1" },
          { kind: "gap", q: "Look at the sky! It's going to ___. (padać)", answer: "rain", theoryRef: "A2/x13/s1" },
          { kind: "dropdown", q: "She ___ going to start a new job.", options: ["is", "am", "are"], answer: 0, theoryRef: "A2/x13/s1" },
          { kind: "transform", q: "Zmień na zdanie z „going to”:", given: "I / buy / a car / next year", hint: "I am going to...", answer: ["I am going to buy a car next year.", "I'm going to buy a car next year."] },
          { kind: "truefalse", q: "Zdanie „He is going to buys a car.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["What", "are", "you", "going", "to", "do"], answer: ["What", "are", "you", "going", "to", "do"] },
          { kind: "multi", q: "Które zdania są poprawne?", options: ["I am going to learn.", "She going to learn.", "They are going to learn.", "We is going to learn."], answers: [0, 2] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: New Year plans", intro: "Przeczytaj o planach Emmy i odpowiedz na pytania.", theoryRef: "A2/x13/s1", passage: `
          <p>It's the end of December and Emma has many plans for the new year.</p>
          <p>First, she's going to learn Spanish, because she loves Spain.</p>
          <p>She's also going to start running every morning to be healthier.</p>
          <p>In the summer, Emma and her sister are going to travel to South America. They aren't going to stay at home this year!</p>`, questions: [
          { kind: "truefalse", q: "Emma is going to learn Spanish.", answer: true },
          { kind: "choice", q: "Why is she going to start running?", options: ["To win a race", "To be healthier", "To meet friends"], answer: 1 },
          { kind: "gap", q: "Emma and her sister are going to ___ to South America. (podróżować)", answer: "travel" },
          { kind: "truefalse", q: "They are going to stay at home this year.", answer: false }
        ]},
        { id: "s5", type: "speak", title: "Mów: twoje plany", prompts: [
          { en: "I'm going to study English this evening.", pl: "Dziś wieczorem zamierzam uczyć się angielskiego." },
          { en: "We're going to visit our grandparents tomorrow.", pl: "Jutro odwiedzimy dziadków." },
          { en: "She's going to start a new job next month.", pl: "W przyszłym miesiącu zacznie nową pracę." },
          { en: "Look at the clouds! It's going to rain.", pl: "Spójrz na chmury! Będzie padać." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: be going to", questions: [
          { kind: "choice", q: "I ___ going to meet my friends tonight.", options: ["am", "is", "are"], answer: 0, theoryRef: "A2/x13/s1" },
          { kind: "gap", q: "They ___ going to move next month. (are/is)", answer: "are" },
          { kind: "transform", q: "Zrób pytanie:", given: "you / going to / win / the game", hint: "Are you...?", answer: ["Are you going to win the game?"] },
          { kind: "truefalse", q: "„be going to” możemy użyć do mówienia o przewidywaniach.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "is", "going", "to", "learn", "Spanish"], answer: ["She", "is", "going", "to", "learn", "Spanish"] }
        ]}
      ]
    },

    /* ---------------- A2 / x14 — Jobs and workplaces (LEKSYKA) ---------------- */
    {
      id: "x14", title: "Zawody i miejsca pracy", icon: "🏢",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zawody i miejsca pracy", html: `
          <p>Mówiąc o pracy, łączymy <b>zawód</b> z <b>miejscem pracy</b>.</p>
          <table class="t-table">
            <tr><th>Zawód</th><th>Miejsce pracy</th></tr>
            <tr><td>a doctor / a nurse</td><td>in a hospital</td></tr>
            <tr><td>a teacher</td><td>in a school</td></tr>
            <tr><td>a waiter / a cook</td><td>in a restaurant</td></tr>
            <tr><td>a shop assistant</td><td>in a shop</td></tr>
            <tr><td>a mechanic</td><td>in a garage</td></tr>
          </table>
          <p><span class="say">She is a nurse. She works in a hospital.</span></p>
          <p class="tip">💡 „work in" + miejsce (in an office), „work as" + zawód (as a teacher), „work for" + firma (for a big company).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zawody i miejsca pracy", words: [
          { en: "waiter", pl: "kelner", example: "The waiter brought our food." },
          { en: "mechanic", pl: "mechanik", example: "The mechanic fixed my car." },
          { en: "farmer", pl: "rolnik", example: "The farmer works on a farm." },
          { en: "hairdresser", pl: "fryzjer", example: "My hairdresser is very friendly." },
          { en: "factory", pl: "fabryka", example: "He works in a factory." },
          { en: "restaurant", pl: "restauracja", example: "She works in a restaurant." },
          { en: "garage", pl: "warsztat / garaż", example: "The car is at the garage." },
          { en: "salary", pl: "pensja", example: "He has a good salary." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zawody i miejsca pracy", theoryRef: "A2/x14/s1", questions: [
          { kind: "match", pairs: [{ a: "waiter", b: "kelner" }, { a: "mechanic", b: "mechanik" }, { a: "farmer", b: "rolnik" }, { a: "hairdresser", b: "fryzjer" }] },
          { kind: "categorize", q: "Pogrupuj słowa:", cats: ["Zawód", "Miejsce pracy"], items: [{ t: "waiter", cat: 0 }, { t: "factory", cat: 1 }, { t: "mechanic", cat: 0 }, { t: "restaurant", cat: 1 }, { t: "farmer", cat: 0 }] },
          { kind: "choice", q: "A nurse works in a ___.", options: ["garage", "hospital", "factory"], answer: 1, theoryRef: "A2/x14/s1" },
          { kind: "gap", q: "He works ___ a teacher in a big school. (jako)", answer: "as", theoryRef: "A2/x14/s1" },
          { kind: "dropdown", q: "She works ___ a big company.", options: ["for", "in the", "at the"], answer: 0 },
          { kind: "truefalse", q: "„salary” oznacza po polsku „pensja”.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: rozmowa o pracy", audio: "What does your brother do? He's a mechanic. He works in a garage in the town centre. Does he like his job? Yes, he loves cars, so it's perfect for him. And he has a good salary. What about your sister? She's a hairdresser. She works in a small shop near our house.", instructions: "Posłuchaj rozmowy i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What is the brother's job?", options: ["A waiter", "A mechanic", "A teacher"], answer: 1 },
          { kind: "choice", q: "Where does the brother work?", options: ["In a garage", "In a hospital", "In a factory"], answer: 0 },
          { kind: "truefalse", q: "The sister is a hairdresser.", answer: true },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "He works in a garage.", answer: "He works in a garage." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: gdzie pracujesz?", theoryRef: "A2/x14/s1", recordLine: 1, lines: [
          { speaker: "Tom", en: "Where do you work?", pl: "Gdzie pracujesz?" },
          { speaker: "Ty", en: "I work as a waiter in an Italian restaurant.", pl: "Pracuję jako kelner we włoskiej restauracji." },
          { speaker: "Tom", en: "Do you work long hours?", pl: "Czy pracujesz długo?" },
          { speaker: "Ty", en: "Yes, sometimes. But I like it and the salary is good.", pl: "Tak, czasami. Ale lubię to i pensja jest dobra." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: zawody i miejsca pracy", questions: [
          { kind: "match", pairs: [{ a: "factory", b: "fabryka" }, { a: "garage", b: "warsztat" }, { a: "salary", b: "pensja" }] },
          { kind: "categorize", q: "Zawód czy miejsce pracy?", cats: ["Zawód", "Miejsce pracy"], items: [{ t: "farmer", cat: 0 }, { t: "restaurant", cat: 1 }, { t: "hairdresser", cat: 0 }, { t: "factory", cat: 1 }] },
          { kind: "gap", q: "A mechanic works in a ___. (warsztat)", answer: "garage" },
          { kind: "multi", q: "Które słowa to zawody?", options: ["waiter", "factory", "farmer", "mechanic", "salary"], answers: [0, 2, 3] },
          { kind: "transform", q: "Zrób pytanie:", given: "where / your brother / work", hint: "Where does...?", answer: ["Where does your brother work?"] }
        ]}
      ]
    }

  );
})();
