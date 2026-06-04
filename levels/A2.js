/* ============================================================================
   POZIOM A2 — Pierwszy obóz  (Otwarte ścieżki)
   ========================================================================== */

window.COURSE.levels.push({
  id: "A2",
  name: "A2 — Pierwszy obóz",
  subtitle: "Otwarte ścieżki",
  altitude: "800 m n.p.m.",
  color: "#38bdf8",
  locked: true,
  units: [

    /* ---------------- A2 / U1 — Past Simple: regularne ---------------- */
    {
      id: "u1", title: "Past Simple — czasowniki regularne", icon: "⏪",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Past Simple (-ed)", html: `
          <p><b>Past Simple</b> opisuje czynności zakończone w przeszłości.</p>
          <p>Czasowniki regularne: dodajemy <b>-ed</b>.</p>
          <table class="t-table">
            <tr><th>Bezokolicznik</th><th>Past Simple</th><th>Zasada</th></tr>
            <tr><td>work</td><td>worked</td><td>+ -ed</td></tr>
            <tr><td>live</td><td>lived</td><td>kończy się na -e, dodaj -d</td></tr>
            <tr><td>study</td><td>studied</td><td>spółgłoska + y → -ied</td></tr>
            <tr><td>stop</td><td>stopped</td><td>krótka samogłoska + spółgłoska → podwójne</td></tr>
          </table>
          <p><b>Wymowa -ed:</b> /t/ po bezdźwięcznych (worked), /d/ po dźwięcznych (lived), /ɪd/ po t/d (wanted).</p>
          <p><b>Przykłady:</b> <span class="say">I worked yesterday.</span> &nbsp; <span class="say">She studied hard.</span></p>
          <p class="tip">💡 Past Simple jest takie samo dla wszystkich osób — bez -s!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czynności (regularne)", words: [
          { en: "walk", pl: "chodzić (pieszo)", example: "I walked to school yesterday." },
          { en: "watch", pl: "oglądać", example: "We watched a film last night." },
          { en: "listen", pl: "słuchać", example: "She listened to music." },
          { en: "cook", pl: "gotować", example: "He cooked dinner." },
          { en: "clean", pl: "sprzątać", example: "I cleaned my room." },
          { en: "visit", pl: "odwiedzać", example: "They visited their friends." },
          { en: "start", pl: "zaczynać", example: "The film started at eight." },
          { en: "finish", pl: "kończyć", example: "We finished at five." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Past Simple regularne", theoryRef: "A2/u1/s1", questions: [
          { kind: "choice", q: "She ___ TV yesterday.", options: ["watch", "watched", "watches"], answer: 1, theoryRef: "A2/u1/s1" },
          { kind: "gap", q: "I ___ to school last Monday. (walk)", answer: "walked", theoryRef: "A2/u1/s1" },
          { kind: "choice", q: "They ___ in London last year. (live)", options: ["live", "lives", "lived"], answer: 2, theoryRef: "A2/u1/s1" },
          { kind: "truefalse", q: "Poprawna forma to: 'She studyed hard.'", answer: false },
          { kind: "gap", q: "He ___ his homework. (finish)", answer: "finished" },
          { kind: "choice", q: "Wymowa -ed w 'worked' to:", options: ["/id/", "/d/", "/t/"], answer: 2, theoryRef: "A2/u1/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "cleaned", "my", "room", "yesterday"], answer: ["I", "cleaned", "my", "room", "yesterday"] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: co robiłeś wczoraj?", theoryRef: "A2/u1/s1", recordLine: 1, lines: [
          { speaker: "Ben", en: "What did you do yesterday?", pl: "Co robiłeś wczoraj?" },
          { speaker: "Ty", en: "I cooked dinner and watched a film.", pl: "Gotowałem obiad i oglądałem film." },
          { speaker: "Ben", en: "What film did you watch?", pl: "Jaki film oglądałeś?" },
          { speaker: "Ty", en: "I watched a comedy. It was really funny.", pl: "Oglądałem komedię. Była naprawdę śmieszna." }
        ]}
      ]
    },

    /* ---------------- A2 / U2 — Past Simple: nieregularne + did/didn't ---------------- */
    {
      id: "u2", title: "Past Simple — nieregularne + pytania", icon: "❓",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: nieregularne + did/didn't", html: `
          <p>Wiele często używanych czasowników ma <b>nieregularną</b> formę przeszłą — trzeba je zapamiętać.</p>
          <table class="t-table">
            <tr><th>Bezokolicznik</th><th>Past Simple</th><th>Po polsku</th></tr>
            <tr><td>go</td><td>went</td><td>iść / jechać</td></tr>
            <tr><td>have</td><td>had</td><td>mieć</td></tr>
            <tr><td>eat</td><td>ate</td><td>jeść</td></tr>
            <tr><td>see</td><td>saw</td><td>widzieć</td></tr>
            <tr><td>buy</td><td>bought</td><td>kupować</td></tr>
            <tr><td>say</td><td>said</td><td>mówić</td></tr>
            <tr><td>come</td><td>came</td><td>przychodzić</td></tr>
            <tr><td>take</td><td>took</td><td>brać / zabierać</td></tr>
          </table>
          <p><b>Pytania i przeczenia:</b> używamy <b>did / didn't</b> + bezokolicznik (bez -ed!).</p>
          <p><span class="say">Did you go to the party?</span> → <span class="say">Yes, I did.</span> / <span class="say">No, I didn't.</span></p>
          <p><span class="say">I didn't see him yesterday.</span></p>
          <p class="tip">💡 'Did she went?' — BŁĄD! Poprawnie: <span class="say">Did she go?</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czasowniki nieregularne", words: [
          { en: "go → went", pl: "iść / pojechać", example: "I went to the cinema." },
          { en: "have → had", pl: "mieć / jeść (posiłek)", example: "We had lunch together." },
          { en: "eat → ate", pl: "zjeść", example: "She ate a big pizza." },
          { en: "see → saw", pl: "zobaczyć", example: "I saw a great film." },
          { en: "buy → bought", pl: "kupić", example: "He bought a new phone." },
          { en: "come → came", pl: "przyjść / przyjechać", example: "They came late." },
          { en: "take → took", pl: "wziąć / zabrać", example: "She took the bus." },
          { en: "say → said", pl: "powiedzieć", example: "He said 'hello'." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: nieregularne + pytania", theoryRef: "A2/u2/s1", questions: [
          { kind: "choice", q: "She ___ to the shops yesterday.", options: ["goed", "went", "go"], answer: 1, theoryRef: "A2/u2/s1" },
          { kind: "gap", q: "We ___ a lovely lunch. (have — nieregularna)", answer: "had", theoryRef: "A2/u2/s1" },
          { kind: "choice", q: "___ you see the match?", options: ["Do", "Did", "Does"], answer: 1, theoryRef: "A2/u2/s1" },
          { kind: "truefalse", q: "Poprawne zdanie to: 'I didn't went home.'", answer: false },
          { kind: "gap", q: "He ___ a new jacket. (buy — nieregularna)", answer: "bought" },
          { kind: "choice", q: "Krótka odpowiedź przecząca na 'Did he come?':", options: ["No, he didn't.", "No, he don't.", "No, he did."], answer: 0 },
          { kind: "order", q: "Ułóż pytanie:", words: ["Did", "she", "take", "the", "bus"], answer: ["Did", "she", "take", "the", "bus"] },
          { kind: "match", pairs: [{ a: "go", b: "went" }, { a: "eat", b: "ate" }, { a: "see", b: "saw" }, { a: "come", b: "came" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: weekend w mieście", theoryRef: "A2/u2/s1", recordLine: 1, lines: [
          { speaker: "Emma", en: "Did you have a nice weekend?", pl: "Miałeś fajny weekend?" },
          { speaker: "Ty", en: "Yes, I did. I went to the city centre and bought some books.", pl: "Tak. Pojechałem do centrum i kupiłem kilka książek." },
          { speaker: "Emma", en: "Did you see any films?", pl: "Czy oglądałeś jakieś filmy?" },
          { speaker: "Ty", en: "No, I didn't. But I ate at a nice Italian restaurant.", pl: "Nie. Ale jadłem w fajnej włoskiej restauracji." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: Past Simple", questions: [
          { kind: "choice", q: "I ___ a film last night.", options: ["see", "seen", "saw"], answer: 2 },
          { kind: "gap", q: "___ she go to school yesterday? (Did/Does)", answer: "Did" },
          { kind: "truefalse", q: "'He didn't came.' to poprawne zdanie.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["They", "didn't", "eat", "breakfast"], answer: ["They", "didn't", "eat", "breakfast"] },
          { kind: "match", pairs: [{ a: "buy", b: "bought" }, { a: "have", b: "had" }, { a: "take", b: "took" }] }
        ]}
      ]
    },

    /* ---------------- A2 / U3 — Present Continuous + PS vs PC ---------------- */
    {
      id: "u3", title: "Present Continuous — czynności teraz", icon: "🎬",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Present Continuous + PS vs PC", html: `
          <p><b>Present Continuous</b> opisuje czynności trwające <u>teraz</u>, w tej chwili.</p>
          <p>Budowa: <b>am / is / are + -ing</b></p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Przykład</th><th>Po polsku</th></tr>
            <tr><td>I</td><td><span class="say">I am reading.</span></td><td>Czytam (teraz).</td></tr>
            <tr><td>She/He/It</td><td><span class="say">She is cooking.</span></td><td>Ona gotuje (teraz).</td></tr>
            <tr><td>We/They</td><td><span class="say">They are playing.</span></td><td>Oni grają (teraz).</td></tr>
          </table>
          <p><b>Pisownia -ing:</b> swim → swimming, dance → dancing, run → running.</p>
          <p><b>Present Simple vs Present Continuous:</b></p>
          <p><span class="say">I drink coffee every morning.</span> (rutyna = PS)</p>
          <p><span class="say">I'm drinking coffee now.</span> (teraz = PC)</p>
          <p class="tip">💡 Sygnały PC: now, at the moment, Look!, Listen!<br>Sygnały PS: always, every day, usually, never.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czynności teraz", words: [
          { en: "read", pl: "czytać", example: "I'm reading a book right now." },
          { en: "write", pl: "pisać", example: "She's writing an email." },
          { en: "run", pl: "biec", example: "He's running in the park." },
          { en: "sleep", pl: "spać", example: "The cat is sleeping." },
          { en: "talk", pl: "rozmawiać", example: "They're talking on the phone." },
          { en: "sit", pl: "siedzieć", example: "I'm sitting at my desk." },
          { en: "wear", pl: "nosić / mieć na sobie", example: "She's wearing a red dress." },
          { en: "at the moment", pl: "w tej chwili", example: "I'm busy at the moment." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Present Continuous", theoryRef: "A2/u3/s1", questions: [
          { kind: "choice", q: "She ___ a book right now.", options: ["reads", "is reading", "read"], answer: 1, theoryRef: "A2/u3/s1" },
          { kind: "gap", q: "They ___ football at the moment. (play, PC)", answer: "are playing", theoryRef: "A2/u3/s1" },
          { kind: "choice", q: "I ___ coffee every morning. (rutyna)", options: ["am drinking", "drink", "drinks"], answer: 1, theoryRef: "A2/u3/s1" },
          { kind: "truefalse", q: "Forma 'swiming' jest poprawna.", answer: false },
          { kind: "choice", q: "___ he sleeping now?", options: ["Does", "Is", "Do"], answer: 1 },
          { kind: "gap", q: "Listen! The birds ___. (sing, PC)", answer: "are singing" },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "is", "wearing", "a", "blue", "hat"], answer: ["She", "is", "wearing", "a", "blue", "hat"] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: co teraz robisz?", prompts: [
          { en: "I'm sitting at my desk and learning English.", pl: "Siedzę przy biurku i uczę się angielskiego." },
          { en: "She isn't working now. She's having lunch.", pl: "Ona teraz nie pracuje. Je obiad." },
          { en: "What are you doing at the moment?", pl: "Co teraz robisz?" },
          { en: "I usually walk to work, but today I'm taking the bus.", pl: "Zwykle chodzę do pracy pieszo, ale dziś jadę autobusem." }
        ]}
      ]
    },

    /* ---------------- A2 / U4 — Going to: plany ---------------- */
    {
      id: "u4", title: "Plany na przyszłość: going to", icon: "🔭",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: be going to", html: `
          <p><b>be going to</b> wyrażamy plany i zamiary na przyszłość oraz wnioski z tego, co widzimy.</p>
          <p>Budowa: <b>am / is / are + going to + bezokolicznik</b></p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Przykład</th></tr>
            <tr><td>I</td><td><span class="say">I'm going to visit Rome.</span></td></tr>
            <tr><td>She</td><td><span class="say">She's going to study medicine.</span></td></tr>
            <tr><td>We</td><td><span class="say">We're going to buy a car.</span></td></tr>
          </table>
          <p><b>Przeczenie:</b> <span class="say">I'm not going to watch TV tonight.</span></p>
          <p><b>Pytanie:</b> <span class="say">Are you going to cook dinner?</span> → <span class="say">Yes, I am.</span></p>
          <p class="tip">💡 Look! That glass is going to fall! (wniosek — widzę to teraz)</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: plany i zamiary", words: [
          { en: "plan", pl: "planować / plan", example: "I'm going to plan a trip." },
          { en: "visit", pl: "odwiedzić / zwiedzić", example: "We're going to visit Paris." },
          { en: "study", pl: "uczyć się / studiować", example: "She's going to study law." },
          { en: "travel", pl: "podróżować", example: "They're going to travel next year." },
          { en: "move", pl: "przeprowadzić się", example: "We're going to move to a new flat." },
          { en: "next week / month", pl: "w przyszłym tygodniu / miesiącu", example: "I'm going to start next week." },
          { en: "tonight", pl: "dziś wieczór", example: "I'm going to cook tonight." },
          { en: "soon", pl: "wkrótce", example: "She's going to call soon." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: going to", theoryRef: "A2/u4/s1", questions: [
          { kind: "choice", q: "She ___ study medicine next year.", options: ["is going to", "going to", "goes to"], answer: 0, theoryRef: "A2/u4/s1" },
          { kind: "gap", q: "We ___ going to travel to Scotland. (are/is)", answer: "are", theoryRef: "A2/u4/s1" },
          { kind: "choice", q: "___ you going to cook tonight?", options: ["Do", "Are", "Is"], answer: 1, theoryRef: "A2/u4/s1" },
          { kind: "truefalse", q: "'I am not going to watch TV.' to zdanie poprawne.", answer: true },
          { kind: "gap", q: "He ___ going to move next month. (isn't/aren't)", answer: "isn't" },
          { kind: "order", q: "Ułóż zdanie:", words: ["I'm", "going", "to", "visit", "my", "grandmother"], answer: ["I'm", "going", "to", "visit", "my", "grandmother"] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: plany na weekend", theoryRef: "A2/u4/s1", recordLine: 1, lines: [
          { speaker: "Mia", en: "What are you going to do this weekend?", pl: "Co zamierzasz robić w weekend?" },
          { speaker: "Ty", en: "I'm going to visit my grandparents on Saturday.", pl: "W sobotę zamierzam odwiedzić dziadków." },
          { speaker: "Mia", en: "And on Sunday?", pl: "A w niedzielę?" },
          { speaker: "Ty", en: "I'm not sure. Maybe I'm going to relax at home.", pl: "Nie jestem pewien. Może będę się relaksować w domu." }
        ]}
      ]
    },

    /* ---------------- A2 / U5 — Zakupy i pieniądze ---------------- */
    {
      id: "u5", title: "Zakupy i pieniądze", icon: "🛒",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: how much / how many, ceny, this/these", html: `
          <p><b>How much?</b> pytamy o rzeczy niepoliczalne i o ceny.<br>
          <b>How many?</b> pytamy o rzeczy policzalne.</p>
          <p><span class="say">How much is this jacket?</span> → <span class="say">It's forty-nine pounds.</span></p>
          <p><span class="say">How many apples do you need?</span> → <span class="say">I need five apples.</span></p>
          <p><b>this / these + that / those (w sklepie):</b></p>
          <table class="t-table">
            <tr><th></th><th>Blisko</th><th>Daleko</th></tr>
            <tr><td>Liczba pojed.</td><td>this (ten/ta)</td><td>that (tamten/ta)</td></tr>
            <tr><td>Liczba mn.</td><td>these (te)</td><td>those (tamte)</td></tr>
          </table>
          <p><span class="say">How much are these shoes?</span> → <span class="say">They're sixty pounds.</span></p>
          <p class="tip">💡 W Wielkiej Brytanii: pounds (£) i pence (p). Kwotę £3.50 czytamy: three pounds fifty.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zakupy", words: [
          { en: "price", pl: "cena", example: "What's the price of this coat?" },
          { en: "cheap / expensive", pl: "tani / drogi", example: "This phone is expensive." },
          { en: "receipt", pl: "paragon", example: "Can I have a receipt, please?" },
          { en: "pay", pl: "płacić", example: "I'd like to pay by card." },
          { en: "change", pl: "reszta / drobne", example: "Here is your change." },
          { en: "size", pl: "rozmiar", example: "What size is this shirt?" },
          { en: "try on", pl: "przymierzyć", example: "Can I try on these shoes?" },
          { en: "sale", pl: "wyprzedaż", example: "These trousers are on sale." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zakupy", theoryRef: "A2/u5/s1", questions: [
          { kind: "choice", q: "___ much is this dress?", options: ["How", "What", "Which"], answer: 0, theoryRef: "A2/u5/s1" },
          { kind: "choice", q: "___ many people are in the shop?", options: ["How", "What", "Which"], answer: 0, theoryRef: "A2/u5/s1" },
          { kind: "gap", q: "___ shoes are sixty pounds. (te, blisko)", answer: "These", theoryRef: "A2/u5/s1" },
          { kind: "truefalse", q: "'How much are those shoes?' to poprawne pytanie.", answer: true },
          { kind: "choice", q: "Rzeczownik niepoliczalny pasuje do:", options: ["How many", "How much", "How old"], answer: 1 },
          { kind: "gap", q: "Kwota £5.50 czytamy: five pounds ___.", answer: "fifty" },
          { kind: "match", pairs: [{ a: "cheap", b: "tani" }, { a: "receipt", b: "paragon" }, { a: "sale", b: "wyprzedaż" }, { a: "change", b: "reszta" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: w sklepie", theoryRef: "A2/u5/s1", recordLine: 1, lines: [
          { speaker: "Sprzedawca", en: "Can I help you?", pl: "Czy mogę pomóc?" },
          { speaker: "Ty", en: "Yes, please. How much is this jacket?", pl: "Tak, poproszę. Ile kosztuje ta kurtka?" },
          { speaker: "Sprzedawca", en: "It's seventy-five pounds. Would you like to try it on?", pl: "Siedemdziesiąt pięć funtów. Chciałby pan/pani ją przymierzyć?" },
          { speaker: "Ty", en: "Yes, please. Have you got it in a smaller size?", pl: "Tak, poproszę. Czy ma pan/pani ją w mniejszym rozmiarze?" }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: zakupy", questions: [
          { kind: "choice", q: "___ much does it cost?", options: ["What", "How", "Which"], answer: 1 },
          { kind: "gap", q: "___ are those trousers? (tamte, daleko)", answer: "Those" },
          { kind: "truefalse", q: "'How many is the coffee?' to poprawne pytanie.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["How", "much", "are", "these", "shoes"], answer: ["How", "much", "are", "these", "shoes"] },
          { kind: "match", pairs: [{ a: "expensive", b: "drogi" }, { a: "pay", b: "płacić" }, { a: "size", b: "rozmiar" }] }
        ]}
      ]
    },

    /* ---------------- A2 / U6 — Podróże i transport ---------------- */
    {
      id: "u6", title: "Podróże i transport", icon: "✈️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: na lotnisku / dworcu, kupowanie biletów", html: `
          <p>Na <b>lotnisku (airport)</b> i <b>dworcu (station)</b> używamy typowych zwrotów.</p>
          <p><b>Kupowanie biletu:</b></p>
          <p><span class="say">A return ticket to Edinburgh, please.</span> (bilet powrotny)</p>
          <p><span class="say">A single to Manchester, please.</span> (bilet w jedną stronę)</p>
          <p><span class="say">What time does the next train leave?</span></p>
          <p><span class="say">Which platform is it?</span></p>
          <p><b>Na lotnisku:</b></p>
          <p><span class="say">Where is the check-in desk?</span></p>
          <p><span class="say">My flight is at half past ten.</span></p>
          <p class="tip">💡 by bus / by train / by plane / by car — mówimy <b>by</b> + środek transportu (bez 'the').</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: podróże", words: [
          { en: "ticket", pl: "bilet", example: "I need a return ticket." },
          { en: "platform", pl: "peron", example: "The train is on platform 3." },
          { en: "departure", pl: "odjazd / odlot", example: "Departure is at ten o'clock." },
          { en: "arrival", pl: "przyjazd / przylot", example: "What time is the arrival?" },
          { en: "passport", pl: "paszport", example: "Don't forget your passport." },
          { en: "luggage", pl: "bagaż", example: "I've got one piece of luggage." },
          { en: "delay", pl: "opóźnienie", example: "There is a 20-minute delay." },
          { en: "gate", pl: "wyjście (na lot)", example: "Please go to gate 7." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: podróże i transport", theoryRef: "A2/u6/s1", questions: [
          { kind: "choice", q: "I travel ___ train.", options: ["with", "in", "by"], answer: 2, theoryRef: "A2/u6/s1" },
          { kind: "gap", q: "A ___ ticket means you come back. (return/single)", answer: "return", theoryRef: "A2/u6/s1" },
          { kind: "choice", q: "Przetłumacz: 'Jaki jest numer peronu?'", options: ["Which platform is it?", "What gate is it?", "Where is the bus?"], answer: 0, theoryRef: "A2/u6/s1" },
          { kind: "truefalse", q: "Poprawne powiedzenie to: 'I travel by the bus.'", answer: false },
          { kind: "gap", q: "My ___ is at 9 p.m. Muszę być na lotnisku wcześniej. (flight/bus)", answer: "flight" },
          { kind: "match", pairs: [{ a: "departure", b: "odjazd" }, { a: "luggage", b: "bagaż" }, { a: "delay", b: "opóźnienie" }, { a: "gate", b: "wyjście" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: kupowanie biletu", theoryRef: "A2/u6/s1", recordLine: 1, lines: [
          { speaker: "Kasjer", en: "Good morning. Where would you like to go?", pl: "Dzień dobry. Dokąd chce pan/pani pojechać?" },
          { speaker: "Ty", en: "A return ticket to Bristol, please. How much is it?", pl: "Poproszę bilet powrotny do Bristolu. Ile kosztuje?" },
          { speaker: "Kasjer", en: "That's twenty-two pounds. The next train leaves at quarter past two from platform six.", pl: "Dwadzieścia dwa funty. Następny pociąg odjeżdża o drugiej piętnaście z peronu szóstego." },
          { speaker: "Ty", en: "Thank you. Here you are.", pl: "Dziękuję. Proszę." }
        ]}
      ]
    },

    /* ---------------- A2 / U7 — Zdrowie i ciało ---------------- */
    {
      id: "u7", title: "Zdrowie i ciało", icon: "🩺",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: have a headache, should/shouldn't", html: `
          <p>Opisując dolegliwości, mówimy: <b>I have a + dolegliwość</b>.</p>
          <p><span class="say">I have a headache.</span> (ból głowy)</p>
          <p><span class="say">She has a cold.</span> (przeziębienie)</p>
          <p><span class="say">He has a sore throat.</span> (ból gardła)</p>
          <p><b>should / shouldn't</b> = powinien / nie powinien (rada, zalecenie)</p>
          <table class="t-table">
            <tr><th>Forma</th><th>Przykład</th><th>Po polsku</th></tr>
            <tr><td>should</td><td><span class="say">You should rest.</span></td><td>Powinieneś odpocząć.</td></tr>
            <tr><td>shouldn't</td><td><span class="say">You shouldn't work.</span></td><td>Nie powinieneś pracować.</td></tr>
          </table>
          <p class="tip">💡 'should' jest takie samo dla wszystkich osób — bez -s!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: ciało i dolegliwości", words: [
          { en: "headache", pl: "ból głowy", example: "I have a terrible headache." },
          { en: "cold", pl: "przeziębienie", example: "She has a bad cold." },
          { en: "fever", pl: "gorączka", example: "He has a high fever." },
          { en: "sore throat", pl: "ból gardła", example: "I have a sore throat." },
          { en: "stomach ache", pl: "ból brzucha", example: "She has a stomach ache." },
          { en: "tired", pl: "zmęczony", example: "I feel very tired today." },
          { en: "doctor", pl: "lekarz", example: "You should see a doctor." },
          { en: "medicine", pl: "lekarstwo", example: "Take this medicine three times a day." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zdrowie", theoryRef: "A2/u7/s1", questions: [
          { kind: "choice", q: "I have ___ headache.", options: ["a", "an", "the"], answer: 0, theoryRef: "A2/u7/s1" },
          { kind: "gap", q: "You ___ rest. (rada pozytywna: should/shouldn't)", answer: "should", theoryRef: "A2/u7/s1" },
          { kind: "choice", q: "You have a fever. You ___ go to work.", options: ["should", "shouldn't", "don't"], answer: 1, theoryRef: "A2/u7/s1" },
          { kind: "match", pairs: [{ a: "headache", b: "ból głowy" }, { a: "fever", b: "gorączka" }, { a: "cold", b: "przeziębienie" }] },
          { kind: "truefalse", q: "Mówimy 'I have a sore throat.' gdy boli nas gardło.", answer: true },
          { kind: "gap", q: "She ___ a bad cold and feels terrible. (have)", answer: "has" },
          { kind: "order", q: "Ułóż zdanie:", words: ["You", "should", "see", "a", "doctor"], answer: ["You", "should", "see", "a", "doctor"] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: u lekarza", theoryRef: "A2/u7/s1", recordLine: 1, lines: [
          { speaker: "Lekarz", en: "Hello. What's the matter?", pl: "Dzień dobry. Co panu/pani dolega?" },
          { speaker: "Ty", en: "I have a terrible headache and a sore throat.", pl: "Mam okropny ból głowy i ból gardła." },
          { speaker: "Lekarz", en: "I see. Do you have a fever?", pl: "Rozumiem. Czy ma pan/pani gorączkę?" },
          { speaker: "Ty", en: "Yes, I think so. I feel very tired too.", pl: "Tak, chyba tak. Czuję się też bardzo zmęczony/a." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: zdrowie", questions: [
          { kind: "choice", q: "You look ill. You ___ stay in bed.", options: ["should", "shouldn't", "would"], answer: 0 },
          { kind: "gap", q: "I have a stomach ___. (ból brzucha)", answer: "ache" },
          { kind: "truefalse", q: "'She should takes medicine.' jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "has", "a", "high", "fever"], answer: ["He", "has", "a", "high", "fever"] },
          { kind: "match", pairs: [{ a: "tired", b: "zmęczony" }, { a: "medicine", b: "lekarstwo" }, { a: "doctor", b: "lekarz" }] }
        ]}
      ]
    },

    /* ---------------- A2 / U8 — Opisywanie ludzi ---------------- */
    {
      id: "u8", title: "Opisywanie ludzi — wygląd i charakter", icon: "🪞",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: wygląd i charakter", html: `
          <p><b>Opisywanie wyglądu (appearance):</b></p>
          <p>Włosy: <span class="say">She has got long dark hair.</span> / <span class="say">He has short blond hair.</span></p>
          <p>Oczy: <span class="say">She has got brown eyes.</span></p>
          <p>Wzrost: <span class="say">He is quite tall.</span> / <span class="say">She is medium height.</span></p>
          <p>Wiek: <span class="say">She's in her thirties.</span> / <span class="say">He looks about forty.</span></p>
          <p><b>Opisywanie charakteru (personality):</b></p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td>friendly</td><td>przyjazny, miły</td></tr>
            <tr><td>shy</td><td>nieśmiały</td></tr>
            <tr><td>hardworking</td><td>pracowity</td></tr>
            <tr><td>funny</td><td>śmieszny, zabawny</td></tr>
            <tr><td>serious</td><td>poważny</td></tr>
          </table>
          <p class="tip">💡 Szyk: She has got [długość] [kolor] hair. → long dark hair (NIE: dark long hair).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wygląd i charakter", words: [
          { en: "tall / short", pl: "wysoki / niski", example: "He is very tall." },
          { en: "slim / overweight", pl: "szczupły / z nadwagą", example: "She is slim." },
          { en: "blond / dark hair", pl: "blond / ciemne włosy", example: "He has got blond hair." },
          { en: "curly / straight", pl: "kręcone / proste (włosy)", example: "She has curly red hair." },
          { en: "friendly", pl: "przyjazny / miły", example: "He is very friendly." },
          { en: "shy", pl: "nieśmiały", example: "She is a bit shy." },
          { en: "hardworking", pl: "pracowity", example: "She is very hardworking." },
          { en: "funny", pl: "zabawny", example: "He is really funny." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: opis ludzi", theoryRef: "A2/u8/s1", questions: [
          { kind: "order", q: "Ułóż opis włosów:", words: ["She", "has", "got", "long", "dark", "hair"], answer: ["She", "has", "got", "long", "dark", "hair"] },
          { kind: "choice", q: "He ___ very friendly and funny.", options: ["is", "has", "are"], answer: 0, theoryRef: "A2/u8/s1" },
          { kind: "gap", q: "She is in her ___. Ma około 20 lat. (twenties/thirties)", answer: "twenties", theoryRef: "A2/u8/s1" },
          { kind: "match", pairs: [{ a: "shy", b: "nieśmiały" }, { a: "hardworking", b: "pracowity" }, { a: "funny", b: "zabawny" }] },
          { kind: "truefalse", q: "Poprawny szyk to: 'dark long hair'.", answer: false },
          { kind: "choice", q: "Które słowo opisuje charakter, nie wygląd?", options: ["slim", "curly", "friendly"], answer: 2 }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: opisz osobę", prompts: [
          { en: "My best friend is tall and slim. She has got long straight hair.", pl: "Mój najlepszy przyjaciel jest wysoki i szczupły. Ma długie proste włosy." },
          { en: "He's in his twenties and he's very friendly and hardworking.", pl: "Ma około 20 lat i jest bardzo miły i pracowity." },
          { en: "What does she look like?", pl: "Jak ona wygląda?" },
          { en: "She's got curly red hair and green eyes. She's quite short.", pl: "Ma kręcone rude włosy i zielone oczy. Jest dość niska." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: opis ludzi", questions: [
          { kind: "choice", q: "She has got ___ hair.", options: ["a long dark", "long dark", "dark long"], answer: 1 },
          { kind: "gap", q: "He is very ___. Zawsze pomaga innym. (friendly/shy)", answer: "friendly" },
          { kind: "truefalse", q: "'She have got blue eyes.' to poprawne zdanie.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "looks", "about", "fifty"], answer: ["He", "looks", "about", "fifty"] }
        ]}
      ]
    },

    /* ---------------- A2 / U9 — Stopień wyższy przymiotników ---------------- */
    {
      id: "u9", title: "Stopień wyższy przymiotników", icon: "📈",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: comparatives (-er / more)", html: `
          <p><b>Stopień wyższy</b> służy do porównywania dwóch osób lub rzeczy.</p>
          <p>Po stopniu wyższym używamy <b>than</b>.</p>
          <table class="t-table">
            <tr><th>Typ przymiotnika</th><th>Zasada</th><th>Przykład</th></tr>
            <tr><td>Krótkie (1 sylaba)</td><td>przymiotnik + -er</td><td>tall → taller</td></tr>
            <tr><td>Kończy się na -e</td><td>+ -r</td><td>nice → nicer</td></tr>
            <tr><td>Krótka sam. + spółgłoska</td><td>podwój + -er</td><td>big → bigger</td></tr>
            <tr><td>Kończy się na -y</td><td>-y → -ier</td><td>happy → happier</td></tr>
            <tr><td>Długie (2+ sylaby)</td><td>more + przymiotnik</td><td>interesting → more interesting</td></tr>
          </table>
          <p><b>Nieregularne:</b> good → better, bad → worse, far → further.</p>
          <p><span class="say">London is bigger than Edinburgh.</span></p>
          <p><span class="say">This film is more interesting than that one.</span></p>
          <p class="tip">💡 NIE używaj jednocześnie -er i more: błąd: 'more taller' → poprawnie: 'taller'.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przymiotniki do porównań", words: [
          { en: "tall → taller", pl: "wysoki → wyższy", example: "Tom is taller than Ben." },
          { en: "old → older", pl: "stary → starszy", example: "My car is older than yours." },
          { en: "fast → faster", pl: "szybki → szybszy", example: "A plane is faster than a train." },
          { en: "good → better", pl: "dobry → lepszy", example: "Your English is better than mine." },
          { en: "bad → worse", pl: "zły → gorszy", example: "Today's weather is worse than yesterday's." },
          { en: "expensive → more expensive", pl: "drogi → droższy", example: "Gold is more expensive than silver." },
          { en: "interesting → more interesting", pl: "interesujący → bardziej interesujący", example: "This book is more interesting than that one." },
          { en: "difficult → more difficult", pl: "trudny → trudniejszy", example: "Maths is more difficult than art." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: comparatives", theoryRef: "A2/u9/s1", questions: [
          { kind: "choice", q: "A car is ___ a bike.", options: ["fast than", "faster than", "more fast than"], answer: 1, theoryRef: "A2/u9/s1" },
          { kind: "gap", q: "This exam is ___ than the last one. (difficult)", answer: "more difficult", theoryRef: "A2/u9/s1" },
          { kind: "choice", q: "Stopień wyższy od 'good' to:", options: ["gooder", "more good", "better"], answer: 2, theoryRef: "A2/u9/s1" },
          { kind: "truefalse", q: "'She is more taller than him.' to poprawne zdanie.", answer: false },
          { kind: "gap", q: "big → ___ (stopień wyższy)", answer: "bigger" },
          { kind: "order", q: "Ułóż zdanie:", words: ["London", "is", "bigger", "than", "Bristol"], answer: ["London", "is", "bigger", "than", "Bristol"] },
          { kind: "choice", q: "Stopień wyższy od 'bad' to:", options: ["badder", "worse", "more bad"], answer: 1 }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: porównanie miast", theoryRef: "A2/u9/s1", recordLine: 1, lines: [
          { speaker: "Lucy", en: "Do you prefer London or Edinburgh?", pl: "Wolisz Londyn czy Edynburg?" },
          { speaker: "Ty", en: "I think Edinburgh is more beautiful than London.", pl: "Myślę, że Edynburg jest piękniejszy niż Londyn." },
          { speaker: "Lucy", en: "But London is bigger and more exciting!", pl: "Ale Londyn jest większy i bardziej ekscytujący!" },
          { speaker: "Ty", en: "That's true. But Edinburgh is quieter. I like that.", pl: "To prawda. Ale Edynburg jest spokojniejszy. To mi się podoba." }
        ]}
      ]
    },

    /* ---------------- A2 / U10 — Stopień najwyższy (FINAŁ A2) ---------------- */
    {
      id: "u10", title: "Stopień najwyższy przymiotników", icon: "🏆",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: superlatives (the -est / the most)", html: `
          <p><b>Stopień najwyższy</b> porównuje jedną osobę/rzecz z całą grupą.</p>
          <p>Zawsze używamy <b>the</b> przed stopniem najwyższym.</p>
          <table class="t-table">
            <tr><th>Typ przymiotnika</th><th>Zasada</th><th>Przykład</th></tr>
            <tr><td>Krótkie (1 sylaba)</td><td>the + przymiotnik + -est</td><td>tall → the tallest</td></tr>
            <tr><td>Kończy się na -e</td><td>the + -st</td><td>nice → the nicest</td></tr>
            <tr><td>Krótka sam. + spółgłoska</td><td>the + podwój + -est</td><td>big → the biggest</td></tr>
            <tr><td>Kończy się na -y</td><td>the + -iest</td><td>happy → the happiest</td></tr>
            <tr><td>Długie (2+ sylaby)</td><td>the most + przymiotnik</td><td>interesting → the most interesting</td></tr>
          </table>
          <p><b>Nieregularne:</b> good → the best, bad → the worst, far → the furthest.</p>
          <p><span class="say">It's the tallest building in the world.</span></p>
          <p><span class="say">She is the most intelligent student in the class.</span></p>
          <p class="tip">💡 Porównanie: taller / more interesting → stopień wyższy; the tallest / the most interesting → stopień najwyższy.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: stopień najwyższy", words: [
          { en: "the tallest", pl: "najwyższy", example: "He's the tallest player on the team." },
          { en: "the oldest", pl: "najstarszy", example: "She's the oldest person here." },
          { en: "the best", pl: "najlepszy", example: "It's the best film I've seen." },
          { en: "the worst", pl: "najgorszy", example: "That was the worst meal ever." },
          { en: "the most popular", pl: "najpopularniejszy", example: "It's the most popular song." },
          { en: "the most expensive", pl: "najdroższy", example: "This is the most expensive hotel." },
          { en: "in the world", pl: "na świecie", example: "It's the longest river in the world." },
          { en: "in the class", pl: "w klasie", example: "She is the best student in the class." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: superlatives", theoryRef: "A2/u10/s1", questions: [
          { kind: "choice", q: "She is ___ student in the class.", options: ["the more intelligent", "the most intelligent", "most intelligent"], answer: 1, theoryRef: "A2/u10/s1" },
          { kind: "gap", q: "This is ___ film I've ever seen. (good — najwyższy)", answer: "the best", theoryRef: "A2/u10/s1" },
          { kind: "choice", q: "Stopień najwyższy od 'bad' to:", options: ["the baddest", "the worst", "the most bad"], answer: 1, theoryRef: "A2/u10/s1" },
          { kind: "truefalse", q: "Przed stopniem najwyższym zawsze stoi 'the'.", answer: true },
          { kind: "gap", q: "It's ___ building in the city. (tall — najwyższy)", answer: "the tallest" },
          { kind: "order", q: "Ułóż zdanie:", words: ["This", "is", "the", "most", "beautiful", "park", "in", "England"], answer: ["This", "is", "the", "most", "beautiful", "park", "in", "England"] },
          { kind: "match", pairs: [{ a: "good", b: "the best" }, { a: "bad", b: "the worst" }, { a: "far", b: "the furthest" }] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: rekordy i opinie", prompts: [
          { en: "The Nile is the longest river in the world.", pl: "Nil jest najdłuższą rzeką na świecie." },
          { en: "In my opinion, summer is the best season of the year.", pl: "Moim zdaniem lato jest najlepszą porą roku." },
          { en: "What's the most interesting place you've visited?", pl: "Jakie jest najciekawsze miejsce, które odwiedziłeś?" },
          { en: "It was the worst film I've ever seen.", pl: "To był najgorszy film, jaki kiedykolwiek widziałem/widziałam." }
        ]},
        { id: "s5", type: "boss", title: "Wielki sprawdzian A2", questions: [
          { kind: "choice", q: "She ___ to the gym last Monday.", options: ["goed", "went", "goes"], answer: 1 },
          { kind: "gap", q: "I ___ going to buy a new phone next month.", answer: "am" },
          { kind: "choice", q: "A plane is ___ a car.", options: ["fast than", "faster than", "the faster than"], answer: 1 },
          { kind: "choice", q: "It's ___ restaurant in town.", options: ["the most expensive", "more expensive", "most expensive"], answer: 0 },
          { kind: "truefalse", q: "'Did she went to school?' to poprawne pytanie.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["This", "is", "the", "best", "day", "of", "my", "life"], answer: ["This", "is", "the", "best", "day", "of", "my", "life"] },
          { kind: "match", pairs: [{ a: "went", b: "go" }, { a: "bought", b: "buy" }, { a: "saw", b: "see" }, { a: "had", b: "have" }] }
        ]}
      ]
    }

  ]
});
