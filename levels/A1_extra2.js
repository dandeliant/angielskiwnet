/* A1 — dodatkowe tematy, część 2 (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "A1"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- A1 / x9 — Past Simple: was / were (GRAMATYKA) ---------------- */
    {
      id: "x9", title: "Past Simple: was / were", icon: "⏳",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: was / were", html: `
          <p><b>was</b> i <b>were</b> to przeszłe formy czasownika <b>to be</b> (być).</p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>I</td><td>was</td><td>I was at home.</td></tr>
            <tr><td>He / She / It</td><td>was</td><td>She was tired.</td></tr>
            <tr><td>You / We / They</td><td>were</td><td>They were happy.</td></tr>
          </table>
          <p>Przeczenie: <span class="say">I wasn't late.</span> / <span class="say">They weren't here.</span></p>
          <p>Pytanie: <span class="say">Were you at school?</span> → <span class="say">Yes, I was.</span> / <span class="say">No, I wasn't.</span></p>
          <p class="tip">💡 Często ze słowami: yesterday, last week, in 2010, two days ago.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czas przeszły", words: [
          { en: "yesterday", pl: "wczoraj", example: "I was at home yesterday." },
          { en: "last week", pl: "w zeszłym tygodniu", example: "She was ill last week." },
          { en: "ago", pl: "temu", example: "Two days ago it was sunny." },
          { en: "born", pl: "urodzony", example: "I was born in Poland." },
          { en: "tired", pl: "zmęczony", example: "We were tired after work." },
          { en: "late", pl: "spóźniony", example: "He was late for school." },
          { en: "at home", pl: "w domu", example: "They were at home all day." },
          { en: "happy / sad", pl: "szczęśliwy / smutny", example: "I was happy yesterday." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: was / were", theoryRef: "A1/x9/s1", questions: [
          { kind: "choice", q: "I ___ at home yesterday.", options: ["was", "were", "am"], answer: 0, theoryRef: "A1/x9/s1" },
          { kind: "dropdown", q: "They ___ very tired last night.", options: ["was", "were", "are"], answer: 1, theoryRef: "A1/x9/s1" },
          { kind: "gap", q: "She ___ (not) at school yesterday. (skrót: wasn't)", answer: "wasn't", theoryRef: "A1/x9/s1" },
          { kind: "transform", q: "Zmień na pytanie:", given: "You were happy.", hint: "was/were na początku", answer: ["Were you happy?"] },
          { kind: "truefalse", q: "„We was here.” to poprawne zdanie.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "was", "at", "work"], answer: ["He", "was", "at", "work"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: wczorajszy dzień", intro: "Przeczytaj krótki tekst.", passage: `
          <p>Yesterday was a great day. I was at the park with my friends.</p>
          <p>The weather was sunny and warm. We were very happy.</p>
          <p>My brother wasn't with us. He was at home because he was tired.</p>
          <p>In the evening we were all together for dinner.</p>`, theoryRef: "A1/x9/s1", questions: [
          { kind: "truefalse", q: "Yesterday the weather was sunny.", answer: true },
          { kind: "choice", q: "Where was the brother?", options: ["at the park", "at home", "at school"], answer: 1 },
          { kind: "gap", q: "We ___ very happy. (przeszłość, l.mn.)", answer: "were" },
          { kind: "truefalse", q: "The brother was at the park.", answer: false }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: gdzie byłeś?", theoryRef: "A1/x9/s1", recordLine: 1, lines: [
          { speaker: "Sara", en: "Where were you yesterday?", pl: "Gdzie byłeś wczoraj?" },
          { speaker: "Ty", en: "I was at my grandma's house.", pl: "Byłem u babci." },
          { speaker: "Sara", en: "Was it nice?", pl: "Było miło?" },
          { speaker: "Ty", en: "Yes, it was great. The food was delicious!", pl: "Tak, było świetnie. Jedzenie było pyszne!" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: was / were", questions: [
          { kind: "choice", q: "She ___ born in 2005.", options: ["was", "were", "is"], answer: 0 },
          { kind: "gap", q: "We ___ at the cinema last week. (l.mn.)", answer: "were" },
          { kind: "transform", q: "Zmień na przeczenie:", given: "He was late.", answer: ["He wasn't late.", "He was not late."] },
          { kind: "dropdown", q: "___ you at home yesterday?", options: ["Was", "Were", "Did"], answer: 1 },
          { kind: "order", q: "Ułóż pytanie:", words: ["Where", "were", "you", "yesterday"], answer: ["Where", "were", "you", "yesterday"] }
        ]}
      ]
    },

    /* ---------------- A1 / x10 — Hobby i czas wolny (LEKSYKA) ---------------- */
    {
      id: "x10", title: "Hobby i czas wolny", icon: "🎸",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: mówienie o hobby", html: `
          <p>Pytamy o hobby: <span class="say">What are your hobbies?</span> / <span class="say">What do you do in your free time?</span></p>
          <p>Odpowiadamy: <span class="say">I like reading.</span> / <span class="say">My hobby is painting.</span></p>
          <p>Po <b>like</b>, <b>love</b>, <b>enjoy</b> czasownik zwykle ma końcówkę <b>-ing</b>: <span class="say">I love swimming.</span></p>
          <p class="tip">💡 „free time" = czas wolny. „in my free time I read books".</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: hobby", words: [
          { en: "hobby", pl: "hobby", example: "My hobby is photography." },
          { en: "free time", pl: "czas wolny", example: "What do you do in your free time?" },
          { en: "reading", pl: "czytanie", example: "I love reading books." },
          { en: "painting", pl: "malowanie", example: "Her hobby is painting." },
          { en: "dancing", pl: "taniec", example: "We enjoy dancing." },
          { en: "gardening", pl: "ogrodnictwo", example: "My dad likes gardening." },
          { en: "photography", pl: "fotografia", example: "Photography is fun." },
          { en: "collecting", pl: "kolekcjonowanie", example: "I like collecting stamps." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: hobby", theoryRef: "A1/x10/s1", questions: [
          { kind: "match", pairs: [{ a: "reading", b: "czytanie" }, { a: "painting", b: "malowanie" }, { a: "dancing", b: "taniec" }, { a: "gardening", b: "ogrodnictwo" }] },
          { kind: "categorize", q: "Posegreguj: aktywne czy spokojne hobby?", cats: ["Aktywne", "Spokojne"], items: [{ t: "dancing", cat: 0 }, { t: "reading", cat: 1 }, { t: "swimming", cat: 0 }, { t: "painting", cat: 1 }, { t: "running", cat: 0 }] },
          { kind: "choice", q: "I love ___ books in my free time.", options: ["read", "reading", "reads"], answer: 1 },
          { kind: "gap", q: "What do you do in your free ___? (czas)", answer: "time" },
          { kind: "multi", q: "Które słowa to hobby? (zaznacz wszystkie)", options: ["painting", "kitchen", "dancing", "fridge", "photography"], answers: [0, 2, 4] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: hobby Lily", audio: "Hello, I'm Lily. In my free time I have many hobbies. I love reading books and painting pictures. On Saturdays I go dancing with my friends. My favourite hobby is photography.", instructions: "Posłuchaj i odpowiedz.", questions: [
          { kind: "choice", q: "What is Lily's favourite hobby?", options: ["reading", "dancing", "photography"], answer: 2 },
          { kind: "truefalse", q: "Lily goes dancing on Saturdays.", answer: true },
          { kind: "dictation", q: "Wpisz zdanie:", audio: "I love reading books and painting pictures.", answer: "I love reading books and painting pictures." }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: twoje hobby", prompts: [
          { en: "In my free time I like reading.", pl: "W wolnym czasie lubię czytać." },
          { en: "My favourite hobby is photography.", pl: "Moje ulubione hobby to fotografia." },
          { en: "I enjoy dancing with my friends.", pl: "Lubię tańczyć z przyjaciółmi." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: hobby", questions: [
          { kind: "match", pairs: [{ a: "hobby", b: "hobby" }, { a: "free time", b: "czas wolny" }, { a: "photography", b: "fotografia" }] },
          { kind: "categorize", q: "Aktywne czy spokojne?", cats: ["Aktywne", "Spokojne"], items: [{ t: "dancing", cat: 0 }, { t: "reading", cat: 1 }, { t: "swimming", cat: 0 }, { t: "gardening", cat: 1 }] },
          { kind: "gap", q: "My ___ is painting. (hobby)", answer: "hobby" },
          { kind: "choice", q: "I enjoy ___ in the garden.", options: ["work", "working", "works"], answer: 1 }
        ]}
      ]
    },

    /* ---------------- A1 / x11 — Zaimki dopełnienia (GRAMATYKA) ---------------- */
    {
      id: "x11", title: "Zaimki dopełnienia — me, you, him, her…", icon: "🔁",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zaimki dopełnienia", html: `
          <p>Zaimki dopełnienia stoją <b>po</b> czasowniku lub przyimku: <span class="say">She loves him.</span> / <span class="say">Look at me!</span></p>
          <table class="t-table">
            <tr><th>Podmiot</th><th>Dopełnienie</th><th>PL</th></tr>
            <tr><td>I</td><td>me</td><td>mnie / mi</td></tr>
            <tr><td>you</td><td>you</td><td>ciebie / tobie</td></tr>
            <tr><td>he / she / it</td><td>him / her / it</td><td>jego / ją / to</td></tr>
            <tr><td>we / they</td><td>us / them</td><td>nas / ich</td></tr>
          </table>
          <p>Przykłady: <span class="say">Can you help me?</span> / <span class="say">I know them.</span> / <span class="say">Give it to her.</span></p>
          <p class="tip">💡 Podmiot robi czynność (I, he), dopełnienie ją otrzymuje (me, him).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zaimki w użyciu", words: [
          { en: "me", pl: "mnie / mi", example: "Call me later." },
          { en: "him", pl: "jego / mu", example: "I see him every day." },
          { en: "her", pl: "ją / jej", example: "Give her the book." },
          { en: "it", pl: "to / go", example: "I like it." },
          { en: "us", pl: "nas / nam", example: "Come with us." },
          { en: "them", pl: "ich / im", example: "I know them well." },
          { en: "help", pl: "pomagać", example: "Can you help me?" },
          { en: "know", pl: "znać / wiedzieć", example: "I know her name." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zaimki dopełnienia", theoryRef: "A1/x11/s1", questions: [
          { kind: "choice", q: "I love my dog. I walk ___ every day.", options: ["it", "he", "him"], answer: 0, theoryRef: "A1/x11/s1" },
          { kind: "dropdown", q: "This is Anna. Do you know ___?", options: ["she", "her", "hers"], answer: 1, theoryRef: "A1/x11/s1" },
          { kind: "gap", q: "Can you help ___? (mnie)", answer: "me", theoryRef: "A1/x11/s1" },
          { kind: "transform", q: "Zamień podkreślone na zaimek:", given: "I know Tom and Sara.", hint: "Tom and Sara = them", answer: ["I know them."] },
          { kind: "truefalse", q: "„She loves he.” to poprawne zdanie.", answer: false },
          { kind: "match", pairs: [{ a: "me", b: "mnie" }, { a: "him", b: "jego" }, { a: "us", b: "nas" }, { a: "them", b: "ich" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: moi przyjaciele", intro: "Przeczytaj i odpowiedz.", passage: `
          <p>I have two best friends, Mark and Lucy. I see them every weekend.</p>
          <p>Mark is funny. I like him a lot. Lucy is kind and I call her every evening.</p>
          <p>They always help me with my homework. I love my friends!</p>`, theoryRef: "A1/x11/s1", questions: [
          { kind: "choice", q: "Who does the writer call every evening?", options: ["Mark", "Lucy", "nobody"], answer: 1 },
          { kind: "truefalse", q: "The friends help the writer with homework.", answer: true },
          { kind: "gap", q: "Mark is funny. I like ___ a lot. (jego)", answer: "him" },
          { kind: "gap", q: "I see ___ every weekend. (ich)", answer: "them" }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: prośba o pomoc", theoryRef: "A1/x11/s1", recordLine: 1, lines: [
          { speaker: "Ben", en: "Can you help me with this box?", pl: "Możesz mi pomóc z tym pudłem?" },
          { speaker: "Ty", en: "Sure, give it to me.", pl: "Jasne, daj mi je." },
          { speaker: "Ben", en: "Thanks! Where are Tom and Kate?", pl: "Dzięki! Gdzie są Tom i Kate?" },
          { speaker: "Ty", en: "I can see them over there. Let's call them.", pl: "Widzę ich tam. Zawołajmy ich." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: zaimki dopełnienia", questions: [
          { kind: "choice", q: "This is for you and me. It's for ___.", options: ["we", "us", "our"], answer: 1 },
          { kind: "gap", q: "I don't know that boy. I don't know ___. (jego)", answer: "him" },
          { kind: "transform", q: "Zamień na zaimek:", given: "Give the keys to Anna.", hint: "Anna = her", answer: ["Give the keys to her.", "Give her the keys."] },
          { kind: "dropdown", q: "Look at ___! We are here!", options: ["we", "us", "our"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "loves", "him"], answer: ["She", "loves", "him"] }
        ]}
      ]
    },

    /* ---------------- A1 / x12 — Ciało i zdrowie (LEKSYKA) ---------------- */
    {
      id: "x12", title: "Ciało i zdrowie", icon: "🩺",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: u lekarza", html: `
          <p>Mówimy o dolegliwościach: <span class="say">I have a headache.</span> (Boli mnie głowa.)</p>
          <p>Schemat: <b>I have a / an</b> + część ciała + <b>ache</b> lub <span class="say">My ___ hurts.</span></p>
          <p>Lekarz pyta: <span class="say">What's the matter?</span> / <span class="say">How do you feel?</span></p>
          <p class="tip">💡 headache (głowa), toothache (ząb), stomachache (brzuch), backache (plecy).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: ciało i zdrowie", words: [
          { en: "head", pl: "głowa", example: "I have a headache." },
          { en: "hand / arm", pl: "dłoń / ramię", example: "My hand hurts." },
          { en: "leg / foot", pl: "noga / stopa", example: "My leg is broken." },
          { en: "stomach", pl: "brzuch / żołądek", example: "I have a stomachache." },
          { en: "tooth", pl: "ząb", example: "I have a toothache." },
          { en: "ill / sick", pl: "chory", example: "She is ill today." },
          { en: "doctor", pl: "lekarz", example: "I need to see a doctor." },
          { en: "medicine", pl: "lekarstwo", example: "Take this medicine." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: ciało i zdrowie", theoryRef: "A1/x12/s1", questions: [
          { kind: "match", pairs: [{ a: "head", b: "głowa" }, { a: "leg", b: "noga" }, { a: "tooth", b: "ząb" }, { a: "doctor", b: "lekarz" }] },
          { kind: "categorize", q: "Posegreguj: część ciała czy choroba?", cats: ["Część ciała", "Dolegliwość"], items: [{ t: "head", cat: 0 }, { t: "headache", cat: 1 }, { t: "leg", cat: 0 }, { t: "toothache", cat: 1 }, { t: "arm", cat: 0 }] },
          { kind: "choice", q: "Boli mnie głowa:", options: ["I have a headache.", "I am a headache.", "I do headache."], answer: 0 },
          { kind: "gap", q: "She is ___ today, she can't come. (chora)", answer: ["ill", "sick"] },
          { kind: "multi", q: "Które słowa to części ciała? (zaznacz wszystkie)", options: ["arm", "doctor", "foot", "medicine", "hand"], answers: [0, 2, 4] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: u lekarza", audio: "Doctor: Good morning. What's the matter? Patient: I don't feel well. I have a headache and a sore throat. Doctor: Take this medicine twice a day and rest at home.", instructions: "Posłuchaj rozmowy i odpowiedz.", questions: [
          { kind: "choice", q: "What is the matter with the patient?", options: ["a broken leg", "a headache and a sore throat", "a toothache"], answer: 1 },
          { kind: "truefalse", q: "The doctor says to rest at home.", answer: true },
          { kind: "dictation", q: "Wpisz zdanie:", audio: "I have a headache and a sore throat.", answer: "I have a headache and a sore throat." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: nie czuję się dobrze", theoryRef: "A1/x12/s1", recordLine: 1, lines: [
          { speaker: "Mama", en: "What's the matter? You look pale.", pl: "Co się stało? Wyglądasz blado." },
          { speaker: "Ty", en: "I don't feel well. I have a stomachache.", pl: "Nie czuję się dobrze. Boli mnie brzuch." },
          { speaker: "Mama", en: "Go to bed. I'll call the doctor.", pl: "Idź do łóżka. Zadzwonię do lekarza." },
          { speaker: "Ty", en: "Thank you, mum. I need some medicine.", pl: "Dziękuję, mamo. Potrzebuję lekarstwa." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: ciało i zdrowie", questions: [
          { kind: "match", pairs: [{ a: "stomach", b: "brzuch" }, { a: "hand", b: "dłoń" }, { a: "medicine", b: "lekarstwo" }] },
          { kind: "categorize", q: "Część ciała czy dolegliwość?", cats: ["Część ciała", "Dolegliwość"], items: [{ t: "foot", cat: 0 }, { t: "backache", cat: 1 }, { t: "tooth", cat: 0 }, { t: "stomachache", cat: 1 }] },
          { kind: "gap", q: "I have a ___, my tooth hurts. (ból zęba)", answer: "toothache" },
          { kind: "choice", q: "Kto leczy ludzi?", options: ["a teacher", "a doctor", "a driver"], answer: 1 }
        ]}
      ]
    },

    /* ---------------- A1 / x13 — Tryb rozkazujący (GRAMATYKA) ---------------- */
    {
      id: "x13", title: "Tryb rozkazujący — instrukcje", icon: "📢",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: tryb rozkazujący", html: `
          <p>Tryb rozkazujący (imperative) daje polecenia. Używamy czasownika <b>bez podmiotu</b> i <b>bez to</b>.</p>
          <table class="t-table">
            <tr><th>Forma</th><th>Przykład</th><th>PL</th></tr>
            <tr><td>twierdząca</td><td>Open the door.</td><td>Otwórz drzwi.</td></tr>
            <tr><td>przecząca</td><td>Don't run.</td><td>Nie biegaj.</td></tr>
            <tr><td>grzeczna</td><td>Please sit down.</td><td>Proszę, usiądź.</td></tr>
          </table>
          <p>Używamy do: poleceń, instrukcji, zakazów, próśb i wskazówek.</p>
          <p class="tip">💡 Przeczenie zawsze przez <b>Don't</b> + czasownik: Don't touch! Don't be late!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: polecenia", words: [
          { en: "open / close", pl: "otwórz / zamknij", example: "Open the window, please." },
          { en: "sit down", pl: "usiądź", example: "Please sit down." },
          { en: "stand up", pl: "wstań", example: "Stand up, everyone." },
          { en: "listen", pl: "słuchaj", example: "Listen carefully." },
          { en: "look", pl: "patrz", example: "Look at the board." },
          { en: "wait", pl: "czekaj", example: "Wait a moment." },
          { en: "turn", pl: "skręć", example: "Turn left at the bank." },
          { en: "don't", pl: "nie (rób)", example: "Don't be late." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: tryb rozkazujący", theoryRef: "A1/x13/s1", questions: [
          { kind: "choice", q: "___ the door, please.", options: ["Open", "Opens", "To open"], answer: 0, theoryRef: "A1/x13/s1" },
          { kind: "dropdown", q: "It's dangerous! ___ touch it!", options: ["Not", "Don't", "Doesn't"], answer: 1, theoryRef: "A1/x13/s1" },
          { kind: "gap", q: "___ run in the corridor! (zakaz)", answer: "Don't", theoryRef: "A1/x13/s1" },
          { kind: "transform", q: "Zmień na przeczenie (zakaz):", given: "Open the window.", hint: "Don't + czasownik", answer: ["Don't open the window."] },
          { kind: "truefalse", q: "„You open the door.” to poprawny rozkaz.", answer: false },
          { kind: "order", q: "Ułóż polecenie:", words: ["Please", "sit", "down"], answer: ["Please", "sit", "down"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: zasady w klasie", intro: "Przeczytaj zasady i odpowiedz.", passage: `
          <p>Welcome to our English class! Here are the rules.</p>
          <p>Please listen to the teacher. Open your books on page ten.</p>
          <p>Don't use your phone in the lesson. Don't eat in the classroom.</p>
          <p>Ask questions and have fun!</p>`, theoryRef: "A1/x13/s1", questions: [
          { kind: "truefalse", q: "You can use your phone in the lesson.", answer: false },
          { kind: "choice", q: "What page should you open?", options: ["page two", "page ten", "page twelve"], answer: 1 },
          { kind: "gap", q: "___ eat in the classroom. (zakaz)", answer: "Don't" },
          { kind: "truefalse", q: "You should listen to the teacher.", answer: true }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: wydaj polecenia", prompts: [
          { en: "Open your books, please.", pl: "Otwórzcie książki, proszę." },
          { en: "Don't be late for school.", pl: "Nie spóźnij się do szkoły." },
          { en: "Turn left and go straight on.", pl: "Skręć w lewo i idź prosto." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: tryb rozkazujący", questions: [
          { kind: "choice", q: "___ quiet, please.", options: ["Be", "Are", "Being"], answer: 0 },
          { kind: "gap", q: "___ run! It's dangerous. (zakaz)", answer: "Don't" },
          { kind: "transform", q: "Zmień na polecenie grzeczne:", given: "close the door", hint: "dodaj Please i wielką literę", answer: ["Please close the door.", "Close the door, please."] },
          { kind: "dropdown", q: "___ at the board, everyone.", options: ["Look", "Looks", "Looking"], answer: 0 },
          { kind: "order", q: "Ułóż zakaz:", words: ["Don't", "open", "the", "window"], answer: ["Don't", "open", "the", "window"] }
        ]}
      ]
    },

    /* ---------------- A1 / x14 — Zwierzęta i zwierzaki (LEKSYKA) ---------------- */
    {
      id: "x14", title: "Zwierzęta i zwierzaki domowe", icon: "🐶",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zwierzęta", html: `
          <p>Mówimy o zwierzętach domowych (<b>pets</b>) i dzikich (<b>wild animals</b>).</p>
          <p>Posiadanie: <span class="say">I have a dog.</span> / <span class="say">She has two cats.</span></p>
          <p>Opis: <span class="say">My dog is big and friendly.</span></p>
          <p class="tip">💡 Liczba mnoga: dog → dogs, cat → cats, ale mouse → mice, fish → fish.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zwierzęta", words: [
          { en: "dog", pl: "pies", example: "My dog is friendly." },
          { en: "cat", pl: "kot", example: "The cat is sleeping." },
          { en: "rabbit", pl: "królik", example: "She has a white rabbit." },
          { en: "bird", pl: "ptak", example: "The bird can sing." },
          { en: "fish", pl: "ryba", example: "I have three fish." },
          { en: "horse", pl: "koń", example: "The horse is big." },
          { en: "pet", pl: "zwierzak domowy", example: "Do you have a pet?" },
          { en: "wild animal", pl: "dzikie zwierzę", example: "A lion is a wild animal." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zwierzęta", theoryRef: "A1/x14/s1", questions: [
          { kind: "match", pairs: [{ a: "dog", b: "pies" }, { a: "cat", b: "kot" }, { a: "bird", b: "ptak" }, { a: "horse", b: "koń" }] },
          { kind: "categorize", q: "Posegreguj: zwierzak domowy czy dzikie zwierzę?", cats: ["Domowe", "Dzikie"], items: [{ t: "dog", cat: 0 }, { t: "lion", cat: 1 }, { t: "cat", cat: 0 }, { t: "elephant", cat: 1 }, { t: "rabbit", cat: 0 }] },
          { kind: "choice", q: "Które zwierzę potrafi latać?", options: ["a fish", "a bird", "a horse"], answer: 1 },
          { kind: "gap", q: "Do you have a ___? (zwierzak domowy)", answer: "pet" },
          { kind: "multi", q: "Które słowa to zwierzęta domowe? (zaznacz wszystkie)", options: ["dog", "lion", "cat", "tiger", "rabbit"], answers: [0, 2, 4] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: zwierzaki Maxa", audio: "Hi, I'm Max. I love animals. I have a big brown dog and two small cats. My sister has a white rabbit. We also have three fish in the kitchen.", instructions: "Posłuchaj i odpowiedz.", questions: [
          { kind: "choice", q: "How many cats does Max have?", options: ["one", "two", "three"], answer: 1 },
          { kind: "truefalse", q: "Max's sister has a white rabbit.", answer: true },
          { kind: "dictation", q: "Wpisz zdanie:", audio: "I have a big brown dog and two small cats.", answer: "I have a big brown dog and two small cats." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: o zwierzakach", theoryRef: "A1/x14/s1", recordLine: 1, lines: [
          { speaker: "Emma", en: "Do you have any pets?", pl: "Masz jakieś zwierzaki?" },
          { speaker: "Ty", en: "Yes, I have a dog and a cat.", pl: "Tak, mam psa i kota." },
          { speaker: "Emma", en: "What is your dog like?", pl: "Jaki jest twój pies?" },
          { speaker: "Ty", en: "He is big and very friendly. I love him!", pl: "Jest duży i bardzo przyjazny. Uwielbiam go!" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: zwierzęta", questions: [
          { kind: "match", pairs: [{ a: "rabbit", b: "królik" }, { a: "fish", b: "ryba" }, { a: "pet", b: "zwierzak domowy" }] },
          { kind: "categorize", q: "Domowe czy dzikie?", cats: ["Domowe", "Dzikie"], items: [{ t: "cat", cat: 0 }, { t: "lion", cat: 1 }, { t: "dog", cat: 0 }, { t: "tiger", cat: 1 }] },
          { kind: "gap", q: "A lion is a ___ animal. (dzikie)", answer: "wild" },
          { kind: "choice", q: "Liczba mnoga od „fish”:", options: ["fishes", "fish", "fishs"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "have", "a", "small", "rabbit"], answer: ["I", "have", "a", "small", "rabbit"] }
        ]}
      ]
    }

  );
})();
