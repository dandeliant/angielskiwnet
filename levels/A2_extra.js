/* A2 — dodatkowe tematy (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "A2"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- A2 / x1 — Present Perfect (intro) ---------------- */
    {
      id: "x1", title: "Present Perfect — ever / never / just / already", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Present Perfect", html: `
          <p><b>Present Perfect</b> tworzymy: <b>have / has + III forma czasownika</b> (past participle).</p>
          <p>Używamy go, gdy <b>czas nie jest ważny</b> albo gdy przeszłość ma związek z teraźniejszością.</p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>I / you / we / they</td><td>have + III</td><td>I have seen it.</td></tr>
            <tr><td>he / she / it</td><td>has + III</td><td>She has seen it.</td></tr>
          </table>
          <p><b>Słówka:</b> <b>ever</b> (kiedykolwiek), <b>never</b> (nigdy), <b>just</b> (właśnie), <b>already</b> (już), <b>yet</b> (jeszcze — w pytaniach i przeczeniach).</p>
          <p><span class="say">Have you ever been to London?</span></p>
          <p><span class="say">I have just finished my homework.</span></p>
          <p><span class="say">She has already eaten lunch.</span></p>
          <p class="tip">💡 Nie używaj Present Perfect z konkretnym czasem (yesterday, last week). Wtedy użyj Past Simple!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: III formy czasowników", words: [
          { en: "been", pl: "byłem / byłam (od be)", example: "I have been to Spain." },
          { en: "seen", pl: "widziany (od see)", example: "Have you seen this film?" },
          { en: "done", pl: "zrobiony (od do)", example: "I have done my work." },
          { en: "eaten", pl: "zjedzony (od eat)", example: "She has eaten everything." },
          { en: "gone", pl: "poszedł (od go)", example: "He has gone home." },
          { en: "written", pl: "napisany (od write)", example: "I have written a letter." },
          { en: "met", pl: "spotkany (od meet)", example: "We have met before." },
          { en: "taken", pl: "wzięty (od take)", example: "She has taken the bus." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Present Perfect", theoryRef: "A2/x1/s1", questions: [
          { kind: "choice", q: "She ___ already finished the test.", options: ["have", "has", "is"], answer: 1, theoryRef: "A2/x1/s1" },
          { kind: "gap", q: "I have ___ been to Paris. (negatywne — nigdy)", answer: "never", theoryRef: "A2/x1/s1" },
          { kind: "dropdown", q: "Have you ___ eaten sushi?", options: ["ever", "yet", "just"], answer: 0, theoryRef: "A2/x1/s1" },
          { kind: "transform", q: "Zmień na Present Perfect:", given: "I finish my homework. (just)", hint: "have + just + III forma", answer: ["I have just finished my homework.", "I've just finished my homework."] },
          { kind: "truefalse", q: "Zdanie „I have seen him yesterday.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "has", "already", "left"], answer: ["She", "has", "already", "left"] },
          { kind: "match", pairs: [{ a: "see", b: "seen" }, { a: "do", b: "done" }, { a: "eat", b: "eaten" }, { a: "write", b: "written" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A travel diary", intro: "Przeczytaj wpis z pamiętnika i odpowiedz na pytania.", theoryRef: "A2/x1/s1", passage: `
          <p>My name is Kate and I love travelling. I have visited many countries in Europe.</p>
          <p>I have already been to France, Italy and Spain. I have never been to Greece, but I want to go there next year.</p>
          <p>This year I have just come back from Portugal. It was wonderful and the food was delicious.</p>
          <p>I have met a lot of friendly people on my trips. Travelling has taught me so much about the world.</p>`, questions: [
          { kind: "truefalse", q: "Kate has been to Italy.", answer: true },
          { kind: "truefalse", q: "Kate has been to Greece.", answer: false },
          { kind: "choice", q: "Where has Kate just come back from?", options: ["France", "Portugal", "Spain"], answer: 1 },
          { kind: "gap", q: "Kate has ___ been to Greece, but wants to go there. (nigdy)", answer: "never" }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: Have you ever...?", theoryRef: "A2/x1/s1", recordLine: 1, lines: [
          { speaker: "Tom", en: "Have you ever been to London?", pl: "Czy byłeś kiedyś w Londynie?" },
          { speaker: "Ty", en: "Yes, I have. I have been there twice.", pl: "Tak. Byłem tam dwa razy." },
          { speaker: "Tom", en: "Have you seen the new film about it?", pl: "Czy widziałeś nowy film o nim?" },
          { speaker: "Ty", en: "No, I haven't seen it yet, but I have heard it's great.", pl: "Nie, jeszcze go nie widziałem, ale słyszałem, że jest świetny." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: Present Perfect", questions: [
          { kind: "choice", q: "We ___ just arrived home.", options: ["has", "have", "are"], answer: 1, theoryRef: "A2/x1/s1" },
          { kind: "gap", q: "He has ___ finished his dinner. (już)", answer: "already" },
          { kind: "multi", q: "Które słowa pasują do Present Perfect?", options: ["ever", "yesterday", "just", "last week", "already"], answers: [0, 2, 4] },
          { kind: "transform", q: "Zmień na pytanie Present Perfect:", given: "you / ever / eat / sushi", hint: "Have you ever...?", answer: ["Have you ever eaten sushi?"] },
          { kind: "truefalse", q: "„She have seen it.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["Have", "you", "ever", "been", "abroad"], answer: ["Have", "you", "ever", "been", "abroad"] }
        ]}
      ]
    },

    /* ---------------- A2 / x2 — Health & the body ---------------- */
    {
      id: "x2", title: "Zdrowie i ciało — u lekarza", icon: "🩺",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: u lekarza", html: `
          <p>Gdy źle się czujemy, idziemy do lekarza (<b>doctor</b>). Oto przydatne zwroty.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td>What's the matter?</td><td>Co się dzieje? / Co ci dolega?</td></tr>
            <tr><td>I have a headache.</td><td>Boli mnie głowa.</td></tr>
            <tr><td>I have a sore throat.</td><td>Boli mnie gardło.</td></tr>
            <tr><td>I don't feel well.</td><td>Źle się czuję.</td></tr>
          </table>
          <p>Mówimy <b>I've got a ...</b> lub <b>I have a ...</b> o bólu: <span class="say">I've got a stomachache.</span></p>
          <p class="tip">💡 „ache" to ból ciągły (headache, toothache). „pain" to ból ostry: I have a pain in my back.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: ciało i zdrowie", words: [
          { en: "head", pl: "głowa", example: "I have a headache." },
          { en: "throat", pl: "gardło", example: "My throat hurts." },
          { en: "stomach", pl: "brzuch / żołądek", example: "I have a stomachache." },
          { en: "back", pl: "plecy", example: "My back hurts a lot." },
          { en: "fever", pl: "gorączka", example: "She has a high fever." },
          { en: "cough", pl: "kaszel", example: "He has a bad cough." },
          { en: "medicine", pl: "lekarstwo", example: "Take this medicine twice a day." },
          { en: "doctor", pl: "lekarz", example: "I need to see a doctor." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zdrowie", theoryRef: "A2/x2/s1", questions: [
          { kind: "gap", q: "I have a ___ ache. My head hurts. (część ciała)", answer: "head", theoryRef: "A2/x2/s1" },
          { kind: "choice", q: "When you are ill, you go to the ___.", options: ["teacher", "doctor", "driver"], answer: 1 },
          { kind: "match", pairs: [{ a: "head", b: "głowa" }, { a: "throat", b: "gardło" }, { a: "back", b: "plecy" }, { a: "stomach", b: "brzuch" }] },
          { kind: "categorize", q: "Pogrupuj słowa:", cats: ["Części ciała", "Objawy"], items: [{ t: "head", cat: 0 }, { t: "fever", cat: 1 }, { t: "back", cat: 0 }, { t: "cough", cat: 1 }, { t: "throat", cat: 0 }] },
          { kind: "dropdown", q: "What's the ___? You look pale.", options: ["matter", "medicine", "doctor"], answer: 0 },
          { kind: "truefalse", q: "Zdanie „I have a sore throat.” znaczy, że boli mnie gardło.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: wizyta u lekarza", audio: "Good morning. What's the matter? I don't feel well. I have a headache and a sore throat. I also have a high fever. Take this medicine twice a day and drink a lot of water.", instructions: "Posłuchaj rozmowy i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What problems does the patient have?", options: ["A broken leg", "A headache and a sore throat", "A toothache"], answer: 1 },
          { kind: "truefalse", q: "The patient has a high fever.", answer: true },
          { kind: "gap", q: "Take this ___ twice a day.", answer: "medicine" },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "I don't feel well.", answer: "I don't feel well." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: u lekarza", theoryRef: "A2/x2/s1", recordLine: 1, lines: [
          { speaker: "Doctor", en: "Good morning. What's the matter?", pl: "Dzień dobry. Co panu dolega?" },
          { speaker: "Ty", en: "I don't feel well. I have a sore throat and a cough.", pl: "Źle się czuję. Boli mnie gardło i mam kaszel." },
          { speaker: "Doctor", en: "Do you have a fever?", pl: "Czy ma pan gorączkę?" },
          { speaker: "Ty", en: "Yes, a little. I have a headache too.", pl: "Tak, trochę. Boli mnie też głowa." }
        ]},
        { id: "s6", type: "speak", title: "Mów: opisz objawy", prompts: [
          { en: "I have a headache.", pl: "Boli mnie głowa." },
          { en: "I don't feel well today.", pl: "Źle się dzisiaj czuję." },
          { en: "My back hurts a lot.", pl: "Bardzo bolą mnie plecy." },
          { en: "I need to see a doctor.", pl: "Muszę iść do lekarza." }
        ]},
        { id: "s7", type: "boss", title: "Sprawdzian: zdrowie", questions: [
          { kind: "choice", q: "I have a sore ___. I can't speak well.", options: ["throat", "leg", "hand"], answer: 0 },
          { kind: "gap", q: "She has a high ___. Her temperature is 39°C. (gorączka)", answer: "fever" },
          { kind: "match", pairs: [{ a: "cough", b: "kaszel" }, { a: "medicine", b: "lekarstwo" }, { a: "doctor", b: "lekarz" }] },
          { kind: "categorize", q: "Pogrupuj:", cats: ["Ciało", "Choroba"], items: [{ t: "stomach", cat: 0 }, { t: "fever", cat: 1 }, { t: "head", cat: 0 }, { t: "cough", cat: 1 }] },
          { kind: "truefalse", q: "„medicine” oznacza po polsku „lekarz”.", answer: false }
        ]}
      ]
    },

    /* ---------------- A2 / x3 — "going to" ---------------- */
    {
      id: "x3", title: "„going to” — plany i przewidywania", icon: "🔮",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: be going to", html: `
          <p><b>be going to</b> używamy do mówienia o <b>planach</b> na przyszłość i o <b>przewidywaniach</b> (gdy widzimy dowody).</p>
          <p>Forma: <b>am / is / are + going to + bezokolicznik</b>.</p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Forma</th><th>Przykład</th></tr>
            <tr><td>I</td><td>am going to</td><td>I am going to study.</td></tr>
            <tr><td>he / she / it</td><td>is going to</td><td>She is going to travel.</td></tr>
            <tr><td>you / we / they</td><td>are going to</td><td>They are going to win.</td></tr>
          </table>
          <p><b>Plan:</b> <span class="say">We are going to visit Rome next summer.</span></p>
          <p><b>Przewidywanie:</b> <span class="say">Look at the clouds! It is going to rain.</span></p>
          <p class="tip">💡 Pytanie: „Are you going to call her?" Przeczenie: „I'm not going to wait."</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: plany na przyszłość", words: [
          { en: "plan", pl: "planować / plan", example: "What are your plans for the weekend?" },
          { en: "travel", pl: "podróżować", example: "We are going to travel to Italy." },
          { en: "move", pl: "przeprowadzić się", example: "They are going to move to a new flat." },
          { en: "save money", pl: "oszczędzać pieniądze", example: "I am going to save money for a car." },
          { en: "study", pl: "uczyć się / studiować", example: "She is going to study medicine." },
          { en: "build", pl: "budować", example: "He is going to build a house." },
          { en: "next year", pl: "w przyszłym roku", example: "We are going to marry next year." },
          { en: "soon", pl: "wkrótce", example: "It is going to rain soon." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: going to", theoryRef: "A2/x3/s1", questions: [
          { kind: "choice", q: "She ___ going to travel to Spain.", options: ["am", "is", "are"], answer: 1, theoryRef: "A2/x3/s1" },
          { kind: "gap", q: "Look at the sky! It is going to ___. (padać deszcz)", answer: "rain", theoryRef: "A2/x3/s1" },
          { kind: "transform", q: "Zmień na „going to” (plan):", given: "I / study / tonight", hint: "I am going to...", answer: ["I am going to study tonight.", "I'm going to study tonight."] },
          { kind: "dropdown", q: "They ___ going to move next month.", options: ["is", "am", "are"], answer: 2, theoryRef: "A2/x3/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["We", "are", "going", "to", "win"], answer: ["We", "are", "going", "to", "win"] },
          { kind: "truefalse", q: "Zdanie „He are going to help.” jest poprawne.", answer: false },
          { kind: "multi", q: "Które zdania są poprawne?", options: ["I am going to read.", "She going to read.", "They are going to read.", "We is going to read."], answers: [0, 2] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: summer plans", intro: "Przeczytaj o planach Marka i odpowiedz na pytania.", theoryRef: "A2/x3/s1", passage: `
          <p>Mark has big plans for the summer. He is going to travel around Europe with two friends.</p>
          <p>First, they are going to visit Germany. Then they are going to take a train to Italy.</p>
          <p>Mark is going to save money every month, so he is not going to spend too much.</p>
          <p>His parents are going to stay at home, but they are very happy for him.</p>`, questions: [
          { kind: "truefalse", q: "Mark is going to travel alone.", answer: false },
          { kind: "choice", q: "Which country are they going to visit first?", options: ["Italy", "Germany", "Spain"], answer: 1 },
          { kind: "gap", q: "Mark is going to ___ money every month. (oszczędzać)", answer: "save" },
          { kind: "truefalse", q: "Mark's parents are going to travel with him.", answer: false }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: weekend plans", theoryRef: "A2/x3/s1", recordLine: 1, lines: [
          { speaker: "Anna", en: "What are you going to do this weekend?", pl: "Co będziesz robić w ten weekend?" },
          { speaker: "Ty", en: "I am going to visit my grandparents.", pl: "Odwiedzę moich dziadków." },
          { speaker: "Anna", en: "Are you going to drive there?", pl: "Pojedziesz tam samochodem?" },
          { speaker: "Ty", en: "No, I'm not. I am going to take the train.", pl: "Nie. Pojadę pociągiem." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: going to", questions: [
          { kind: "choice", q: "I ___ going to call you later.", options: ["am", "is", "are"], answer: 0, theoryRef: "A2/x3/s1" },
          { kind: "gap", q: "We ___ going to buy a new car. (are/is)", answer: "are" },
          { kind: "transform", q: "Zrób pytanie:", given: "you / going to / help / me", hint: "Are you...?", answer: ["Are you going to help me?"] },
          { kind: "truefalse", q: "„going to” służy do mówienia o planach na przyszłość.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "is", "going", "to", "study", "medicine"], answer: ["She", "is", "going", "to", "study", "medicine"] }
        ]}
      ]
    },

    /* ---------------- A2 / x4 — Shopping & money ---------------- */
    {
      id: "x4", title: "Zakupy i pieniądze", icon: "🛒",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: w sklepie", html: `
          <p>Robiąc zakupy, używamy przydatnych zwrotów. Oto najważniejsze.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td>How much is it?</td><td>Ile to kosztuje?</td></tr>
            <tr><td>How much are they?</td><td>Ile one kosztują?</td></tr>
            <tr><td>Can I pay by card?</td><td>Czy mogę zapłacić kartą?</td></tr>
            <tr><td>It's too expensive.</td><td>To jest zbyt drogie.</td></tr>
            <tr><td>Here's your change.</td><td>Oto pana reszta.</td></tr>
          </table>
          <p><span class="say">How much is this jacket?</span> &nbsp; <span class="say">It's twenty pounds.</span></p>
          <p class="tip">💡 „How much" pytamy o cenę i o rzeczy niepoliczalne. „How many" pytamy o liczbę rzeczy policzalnych.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zakupy", words: [
          { en: "expensive", pl: "drogi", example: "This watch is very expensive." },
          { en: "cheap", pl: "tani", example: "These shoes are quite cheap." },
          { en: "price", pl: "cena", example: "What's the price of this?" },
          { en: "change", pl: "reszta / drobne", example: "Here's your change." },
          { en: "cash", pl: "gotówka", example: "Can I pay in cash?" },
          { en: "card", pl: "karta", example: "I'll pay by card." },
          { en: "receipt", pl: "paragon", example: "Can I have a receipt, please?" },
          { en: "discount", pl: "zniżka", example: "There is a ten percent discount." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zakupy", theoryRef: "A2/x4/s1", questions: [
          { kind: "choice", q: "___ much is this T-shirt?", options: ["How", "What", "Where"], answer: 0, theoryRef: "A2/x4/s1" },
          { kind: "gap", q: "It costs £200! It's too ___. (drogie)", answer: "expensive" },
          { kind: "match", pairs: [{ a: "cheap", b: "tani" }, { a: "price", b: "cena" }, { a: "cash", b: "gotówka" }, { a: "receipt", b: "paragon" }] },
          { kind: "dropdown", q: "Can I pay ___ card?", options: ["by", "in", "on"], answer: 0 },
          { kind: "categorize", q: "Pogrupuj słowa:", cats: ["Pieniądze", "Opis ceny"], items: [{ t: "cash", cat: 0 }, { t: "expensive", cat: 1 }, { t: "change", cat: 0 }, { t: "cheap", cat: 1 }] },
          { kind: "truefalse", q: "„discount” oznacza po polsku „zniżka”.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: w sklepie z ubraniami", audio: "Hello, can I help you? Yes, how much is this blue jacket? It's forty pounds, but today there is a ten percent discount. Great, I'll take it. Can I pay by card? Of course. Here's your receipt. Thank you.", instructions: "Posłuchaj rozmowy w sklepie i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "How much is the jacket?", options: ["Fourteen pounds", "Forty pounds", "Four pounds"], answer: 1 },
          { kind: "truefalse", q: "There is a discount today.", answer: true },
          { kind: "choice", q: "How does the customer pay?", options: ["In cash", "By card", "With a cheque"], answer: 1 },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "Can I pay by card?", answer: "Can I pay by card?" }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: kupowanie butów", theoryRef: "A2/x4/s1", recordLine: 1, lines: [
          { speaker: "Shop assistant", en: "Can I help you?", pl: "Czy mogę pomóc?" },
          { speaker: "Ty", en: "Yes, how much are these shoes?", pl: "Tak, ile kosztują te buty?" },
          { speaker: "Shop assistant", en: "They are fifty pounds.", pl: "Kosztują pięćdziesiąt funtów." },
          { speaker: "Ty", en: "That's a bit expensive. Can I pay in cash?", pl: "To trochę drogie. Czy mogę zapłacić gotówką?" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: zakupy", questions: [
          { kind: "choice", q: "How ___ are these apples?", options: ["much", "many", "old"], answer: 1 },
          { kind: "gap", q: "These trousers are only £10. They are very ___. (tanie)", answer: "cheap" },
          { kind: "match", pairs: [{ a: "card", b: "karta" }, { a: "discount", b: "zniżka" }, { a: "change", b: "reszta" }] },
          { kind: "multi", q: "Które zwroty pasują do sklepu?", options: ["How much is it?", "Open your book.", "Can I pay by card?", "Here's your change."], answers: [0, 2, 3] },
          { kind: "truefalse", q: "„expensive” oznacza „tani”.", answer: false }
        ]}
      ]
    },

    /* ---------------- A2 / x5 — Adverbs of frequency & manner ---------------- */
    {
      id: "x5", title: "Przysłówki częstotliwości i sposobu", icon: "⏱️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: przysłówki", html: `
          <p><b>Przysłówki częstotliwości</b> mówią, jak często coś robimy. Stoją <b>przed</b> czasownikiem głównym, ale <b>po</b> „to be”.</p>
          <table class="t-table">
            <tr><th>Przysłówek</th><th>Polski</th><th>Jak często</th></tr>
            <tr><td>always</td><td>zawsze</td><td>100%</td></tr>
            <tr><td>usually</td><td>zwykle</td><td>80%</td></tr>
            <tr><td>often</td><td>często</td><td>60%</td></tr>
            <tr><td>sometimes</td><td>czasami</td><td>40%</td></tr>
            <tr><td>never</td><td>nigdy</td><td>0%</td></tr>
          </table>
          <p><span class="say">I always drink coffee in the morning.</span> &nbsp; <span class="say">She is never late.</span></p>
          <p><b>Przysłówki sposobu</b> mówią, jak coś robimy. Zwykle: <b>przymiotnik + -ly</b>: slow → slowly, quick → quickly. Wyjątek: good → <b>well</b>.</p>
          <p><span class="say">He drives carefully.</span> &nbsp; <span class="say">She sings beautifully.</span></p>
          <p class="tip">💡 „She is good." (przymiotnik) ale „She sings well." (przysłówek).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przysłówki sposobu", words: [
          { en: "slowly", pl: "powoli", example: "Please speak slowly." },
          { en: "quickly", pl: "szybko", example: "He eats too quickly." },
          { en: "carefully", pl: "ostrożnie / uważnie", example: "She drives carefully." },
          { en: "quietly", pl: "cicho", example: "The children played quietly." },
          { en: "loudly", pl: "głośno", example: "Don't speak so loudly." },
          { en: "well", pl: "dobrze", example: "She speaks English well." },
          { en: "badly", pl: "źle", example: "He sings badly." },
          { en: "easily", pl: "łatwo", example: "I can do it easily." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: przysłówki", theoryRef: "A2/x5/s1", questions: [
          { kind: "choice", q: "I ___ go to bed late on Fridays.", options: ["am sometimes", "sometimes", "sometimes am"], answer: 1, theoryRef: "A2/x5/s1" },
          { kind: "gap", q: "Adverb od „slow” to ___.", answer: "slowly", theoryRef: "A2/x5/s1" },
          { kind: "transform", q: "Zmień przymiotnik na przysłówek:", given: "careful → ?", hint: "+ -ly", answer: ["carefully"] },
          { kind: "dropdown", q: "She is ___ late for work.", options: ["never", "drives", "well"], answer: 0 },
          { kind: "choice", q: "Adverb od „good” to:", options: ["goodly", "well", "gooder"], answer: 1, theoryRef: "A2/x5/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "always", "drinks", "tea"], answer: ["He", "always", "drinks", "tea"] },
          { kind: "match", pairs: [{ a: "always", b: "zawsze" }, { a: "often", b: "często" }, { a: "never", b: "nigdy" }, { a: "usually", b: "zwykle" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: my daily routine", intro: "Przeczytaj o dniu Sophie i odpowiedz na pytania.", theoryRef: "A2/x5/s1", passage: `
          <p>Sophie always gets up early. She usually has a big breakfast and then she goes to work.</p>
          <p>She often walks to the office because she likes fresh air. She never takes the bus.</p>
          <p>At work, she always speaks politely and works carefully. Her boss is happy with her.</p>
          <p>In the evening, she sometimes reads a book quietly before she goes to sleep.</p>`, questions: [
          { kind: "truefalse", q: "Sophie always gets up early.", answer: true },
          { kind: "choice", q: "How does Sophie usually go to work?", options: ["By bus", "She walks", "By car"], answer: 1 },
          { kind: "gap", q: "She works ___ at the office. (ostrożnie / uważnie)", answer: "carefully" },
          { kind: "truefalse", q: "Sophie often takes the bus.", answer: false }
        ]},
        { id: "s5", type: "speak", title: "Mów: o twoich nawykach", prompts: [
          { en: "I always have breakfast in the morning.", pl: "Zawsze jem śniadanie rano." },
          { en: "I sometimes watch films at the weekend.", pl: "Czasami oglądam filmy w weekend." },
          { en: "I never drink coffee at night.", pl: "Nigdy nie piję kawy w nocy." },
          { en: "She speaks English very well.", pl: "Ona mówi po angielsku bardzo dobrze." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: przysłówki", questions: [
          { kind: "choice", q: "She ___ goes to the gym. (often — kolejność)", options: ["goes often", "often goes", "goes always often"], answer: 1, theoryRef: "A2/x5/s1" },
          { kind: "gap", q: "Adverb od „quick” to ___.", answer: "quickly" },
          { kind: "transform", q: "Zmień przymiotnik na przysłówek:", given: "easy → ?", hint: "y → ily", answer: ["easily"] },
          { kind: "multi", q: "Które to przysłówki częstotliwości?", options: ["always", "slowly", "never", "loudly", "usually"], answers: [0, 2, 4] },
          { kind: "categorize", q: "Pogrupuj:", cats: ["Częstotliwość", "Sposób"], items: [{ t: "always", cat: 0 }, { t: "slowly", cat: 1 }, { t: "never", cat: 0 }, { t: "quietly", cat: 1 }] }
        ]}
      ]
    },

    /* ---------------- A2 / x6 — Jobs & the workplace ---------------- */
    {
      id: "x6", title: "Zawody i praca", icon: "💼",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zawody i praca", html: `
          <p>O zawodach mówimy: <b>I am a ...</b> / <b>She works as a ...</b></p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td>What do you do?</td><td>Czym się zajmujesz?</td></tr>
            <tr><td>I'm a teacher.</td><td>Jestem nauczycielem.</td></tr>
            <tr><td>She works in a hospital.</td><td>Ona pracuje w szpitalu.</td></tr>
            <tr><td>He works for a big company.</td><td>On pracuje dla dużej firmy.</td></tr>
          </table>
          <p><span class="say">What does your father do?</span> → <span class="say">He's an engineer.</span></p>
          <p class="tip">💡 Przed zawodem na samogłoskę używamy „an": an engineer, an artist, an actor.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zawody", words: [
          { en: "nurse", pl: "pielęgniarka / pielęgniarz", example: "My sister is a nurse." },
          { en: "engineer", pl: "inżynier", example: "He works as an engineer." },
          { en: "lawyer", pl: "prawnik", example: "She is a lawyer." },
          { en: "shop assistant", pl: "sprzedawca", example: "I work as a shop assistant." },
          { en: "chef", pl: "kucharz", example: "The chef cooks great food." },
          { en: "driver", pl: "kierowca", example: "He is a bus driver." },
          { en: "manager", pl: "kierownik / menedżer", example: "She is the manager of the shop." },
          { en: "office", pl: "biuro", example: "I work in an office." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: zawody", theoryRef: "A2/x6/s1", questions: [
          { kind: "choice", q: "What ___ you do? — I'm a teacher.", options: ["does", "do", "are"], answer: 1, theoryRef: "A2/x6/s1" },
          { kind: "gap", q: "He's ___ engineer. (a / an)", answer: "an", theoryRef: "A2/x6/s1" },
          { kind: "match", pairs: [{ a: "nurse", b: "pielęgniarka" }, { a: "lawyer", b: "prawnik" }, { a: "chef", b: "kucharz" }, { a: "driver", b: "kierowca" }] },
          { kind: "dropdown", q: "She works ___ a hospital.", options: ["in", "on", "at the"], answer: 0 },
          { kind: "categorize", q: "Gdzie pracują?", cats: ["Hospital", "Office"], items: [{ t: "nurse", cat: 0 }, { t: "manager", cat: 1 }, { t: "doctor", cat: 0 }, { t: "lawyer", cat: 1 }] },
          { kind: "truefalse", q: "Zdanie „She work as a nurse.” jest poprawne.", answer: false }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: rozmowa o pracy", audio: "Hi Anna, what do you do? I'm a nurse. I work in a big hospital in the city centre. Do you like your job? Yes, I love it, but I usually work long hours. What about you? I'm an engineer and I work for a small company.", instructions: "Posłuchaj rozmowy o pracy i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What is Anna's job?", options: ["A teacher", "A nurse", "An engineer"], answer: 1 },
          { kind: "truefalse", q: "Anna works in a hospital.", answer: true },
          { kind: "choice", q: "What does the other person do?", options: ["A nurse", "A driver", "An engineer"], answer: 2 },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "I work in a big hospital.", answer: "I work in a big hospital." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: czym się zajmujesz?", theoryRef: "A2/x6/s1", recordLine: 1, lines: [
          { speaker: "Paul", en: "What do you do?", pl: "Czym się zajmujesz?" },
          { speaker: "Ty", en: "I'm a shop assistant. I work in a clothes shop.", pl: "Jestem sprzedawcą. Pracuję w sklepie z ubraniami." },
          { speaker: "Paul", en: "Do you like your job?", pl: "Czy lubisz swoją pracę?" },
          { speaker: "Ty", en: "Yes, I do. I meet a lot of people every day.", pl: "Tak. Codziennie spotykam wielu ludzi." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: zawody", questions: [
          { kind: "choice", q: "My mother is ___ lawyer.", options: ["a", "an", "the"], answer: 0 },
          { kind: "gap", q: "He works ___ a big company. (for)", answer: "for" },
          { kind: "match", pairs: [{ a: "manager", b: "kierownik" }, { a: "engineer", b: "inżynier" }, { a: "office", b: "biuro" }] },
          { kind: "transform", q: "Zrób pytanie:", given: "what / your sister / do", hint: "What does...?", answer: ["What does your sister do?"] },
          { kind: "multi", q: "Które to zawody?", options: ["nurse", "office", "chef", "driver", "cheap"], answers: [0, 2, 3] }
        ]}
      ]
    },

    /* ---------------- A2 / x7 — Countable/uncountable ---------------- */
    {
      id: "x7", title: "Policzalne i niepoliczalne — some/any/much/many", icon: "🥖",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: some / any / much / many", html: `
          <p>Rzeczowniki <b>policzalne</b> można policzyć (apple → apples). <b>Niepoliczalne</b> nie (water, money, rice).</p>
          <table class="t-table">
            <tr><th>Słowo</th><th>Z czym</th><th>Użycie</th></tr>
            <tr><td>some</td><td>oba</td><td>zdania twierdzące</td></tr>
            <tr><td>any</td><td>oba</td><td>pytania i przeczenia</td></tr>
            <tr><td>many</td><td>policzalne</td><td>How many apples?</td></tr>
            <tr><td>much</td><td>niepoliczalne</td><td>How much water?</td></tr>
            <tr><td>a lot of</td><td>oba</td><td>dużo (twierdzące)</td></tr>
          </table>
          <p><span class="say">There is some milk in the fridge.</span> &nbsp; <span class="say">Is there any sugar?</span></p>
          <p><span class="say">How many eggs do we need?</span> &nbsp; <span class="say">How much time do we have?</span></p>
          <p class="tip">💡 „a lot of" pasuje do obu i jest świetne w zdaniach twierdzących: I have a lot of friends / a lot of money.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: jedzenie (policzalne i nie)", words: [
          { en: "bread", pl: "chleb (niepoliczalny)", example: "There is some bread on the table." },
          { en: "rice", pl: "ryż (niepoliczalny)", example: "We don't have much rice." },
          { en: "egg", pl: "jajko (policzalne)", example: "How many eggs are there?" },
          { en: "milk", pl: "mleko (niepoliczalne)", example: "Is there any milk?" },
          { en: "apple", pl: "jabłko (policzalne)", example: "I bought some apples." },
          { en: "water", pl: "woda (niepoliczalna)", example: "How much water do you drink?" },
          { en: "sugar", pl: "cukier (niepoliczalny)", example: "I don't take any sugar." },
          { en: "banana", pl: "banan (policzalny)", example: "There are a lot of bananas." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: some/any/much/many", theoryRef: "A2/x7/s1", questions: [
          { kind: "dropdown", q: "There is ___ milk in the cup.", options: ["some", "many", "an"], answer: 0, theoryRef: "A2/x7/s1" },
          { kind: "choice", q: "How ___ eggs do we need?", options: ["much", "many", "some"], answer: 1, theoryRef: "A2/x7/s1" },
          { kind: "gap", q: "Is there ___ sugar? (pytanie)", answer: "any", theoryRef: "A2/x7/s1" },
          { kind: "choice", q: "How ___ water do you drink?", options: ["many", "much", "any"], answer: 1 },
          { kind: "categorize", q: "Policzalne czy niepoliczalne?", cats: ["Policzalne", "Niepoliczalne"], items: [{ t: "egg", cat: 0 }, { t: "milk", cat: 1 }, { t: "apple", cat: 0 }, { t: "rice", cat: 1 }, { t: "banana", cat: 0 }] },
          { kind: "truefalse", q: "„How much apples?” jest poprawne.", answer: false },
          { kind: "transform", q: "Zmień na przeczenie:", given: "There is some bread.", hint: "isn't any", answer: ["There isn't any bread.", "There is not any bread."] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: in the kitchen", intro: "Przeczytaj o kuchni Toma i odpowiedz na pytania.", theoryRef: "A2/x7/s1", passage: `
          <p>Tom wants to make a cake. He looks in the kitchen to check the food.</p>
          <p>There is some flour and there are a lot of eggs. But there isn't any sugar.</p>
          <p>There is a little milk, but there isn't much. He needs to buy more.</p>
          <p>How many apples are there? There are only two, so Tom is going to go to the shop.</p>`, questions: [
          { kind: "truefalse", q: "There are a lot of eggs.", answer: true },
          { kind: "choice", q: "What does Tom NOT have?", options: ["Flour", "Sugar", "Eggs"], answer: 1 },
          { kind: "gap", q: "There ___ much milk. (isn't / aren't)", answer: "isn't" },
          { kind: "truefalse", q: "There are only two apples.", answer: true }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: lista zakupów", theoryRef: "A2/x7/s1", recordLine: 1, lines: [
          { speaker: "Mum", en: "Is there any milk in the fridge?", pl: "Czy jest mleko w lodówce?" },
          { speaker: "Ty", en: "No, there isn't any milk. And there isn't much bread.", pl: "Nie, nie ma mleka. I nie ma dużo chleba." },
          { speaker: "Mum", en: "How many eggs do we have?", pl: "Ile mamy jajek?" },
          { speaker: "Ty", en: "We have some eggs, but we need a lot of apples.", pl: "Mamy trochę jajek, ale potrzebujemy dużo jabłek." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: policzalne / niepoliczalne", questions: [
          { kind: "dropdown", q: "We don't have ___ rice.", options: ["much", "many", "an"], answer: 0, theoryRef: "A2/x7/s1" },
          { kind: "gap", q: "How ___ bananas are there? (much/many)", answer: "many" },
          { kind: "multi", q: "Które rzeczowniki są niepoliczalne?", options: ["water", "egg", "rice", "apple", "sugar"], answers: [0, 2, 4] },
          { kind: "categorize", q: "Pogrupuj:", cats: ["some/any/much", "some/any/many"], items: [{ t: "water", cat: 0 }, { t: "egg", cat: 1 }, { t: "milk", cat: 0 }, { t: "apple", cat: 1 }] },
          { kind: "truefalse", q: "„a lot of” możemy używać z policzalnymi i niepoliczalnymi.", answer: true }
        ]}
      ]
    },

    /* ---------------- A2 / x8 — Free time & hobbies ---------------- */
    {
      id: "x8", title: "Czas wolny i hobby", icon: "🎨",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: hobby i czas wolny", html: `
          <p>Gdy mówimy o tym, co lubimy robić, po czasownikach <b>like / love / enjoy / hate</b> używamy formy <b>-ing</b>.</p>
          <table class="t-table">
            <tr><th>Angielski</th><th>Polski</th></tr>
            <tr><td>I like reading.</td><td>Lubię czytać.</td></tr>
            <tr><td>She loves painting.</td><td>Ona uwielbia malować.</td></tr>
            <tr><td>We enjoy cooking.</td><td>Lubimy gotować.</td></tr>
            <tr><td>He hates running.</td><td>On nienawidzi biegać.</td></tr>
          </table>
          <p>Pytamy: <span class="say">What do you do in your free time?</span> / <span class="say">What are your hobbies?</span></p>
          <p class="tip">💡 „I'm good at" + -ing: I'm good at swimming. „I'm keen on" + -ing: I'm keen on painting.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: hobby", words: [
          { en: "painting", pl: "malowanie", example: "I enjoy painting at the weekend." },
          { en: "cooking", pl: "gotowanie", example: "She loves cooking for her family." },
          { en: "swimming", pl: "pływanie", example: "We go swimming on Sundays." },
          { en: "reading", pl: "czytanie", example: "He likes reading novels." },
          { en: "dancing", pl: "taniec", example: "They love dancing." },
          { en: "gardening", pl: "ogrodnictwo", example: "My grandmother enjoys gardening." },
          { en: "photography", pl: "fotografia", example: "Photography is my favourite hobby." },
          { en: "cycling", pl: "jazda na rowerze", example: "I go cycling every morning." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: hobby", theoryRef: "A2/x8/s1", questions: [
          { kind: "choice", q: "I like ___ in my free time.", options: ["read", "reading", "to reading"], answer: 1, theoryRef: "A2/x8/s1" },
          { kind: "gap", q: "She loves ___. (paint → forma -ing)", answer: "painting", theoryRef: "A2/x8/s1" },
          { kind: "match", pairs: [{ a: "cooking", b: "gotowanie" }, { a: "swimming", b: "pływanie" }, { a: "dancing", b: "taniec" }, { a: "cycling", b: "jazda na rowerze" }] },
          { kind: "transform", q: "Zmień na zdanie z -ing:", given: "I / enjoy / cook", hint: "enjoy + -ing", answer: ["I enjoy cooking.", "I enjoy cooking"] },
          { kind: "dropdown", q: "He is good ___ swimming.", options: ["at", "in", "on"], answer: 0 },
          { kind: "truefalse", q: "Po „love” używamy formy z -ing, np. „love dancing”.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: free time", intro: "Przeczytaj o czasie wolnym Lucy i odpowiedz na pytania.", theoryRef: "A2/x8/s1", passage: `
          <p>Lucy has a lot of hobbies. In her free time she loves painting and reading books.</p>
          <p>At the weekend she usually goes swimming with her sister. They both enjoy it a lot.</p>
          <p>Lucy hates running, so she never goes to the gym. She prefers cycling in the park.</p>
          <p>In the evening she often takes photos because photography is her favourite hobby.</p>`, questions: [
          { kind: "truefalse", q: "Lucy loves painting.", answer: true },
          { kind: "choice", q: "What does Lucy do at the weekend?", options: ["She goes running", "She goes swimming", "She watches TV"], answer: 1 },
          { kind: "gap", q: "Lucy hates ___, so she never goes to the gym. (run → -ing)", answer: "running" },
          { kind: "truefalse", q: "Photography is Lucy's favourite hobby.", answer: true }
        ]},
        { id: "s5", type: "speak", title: "Mów: o twoim hobby", prompts: [
          { en: "I like reading in my free time.", pl: "Lubię czytać w wolnym czasie." },
          { en: "I love cooking for my friends.", pl: "Uwielbiam gotować dla przyjaciół." },
          { en: "I'm good at swimming.", pl: "Dobrze pływam." },
          { en: "I go cycling every weekend.", pl: "Jeżdżę na rowerze w każdy weekend." }
        ]},
        { id: "s6", type: "dialog", title: "Dialog: jakie masz hobby?", theoryRef: "A2/x8/s1", recordLine: 1, lines: [
          { speaker: "Kate", en: "What do you do in your free time?", pl: "Co robisz w wolnym czasie?" },
          { speaker: "Ty", en: "I like painting and I love reading.", pl: "Lubię malować i uwielbiam czytać." },
          { speaker: "Kate", en: "Are you good at any sport?", pl: "Czy jesteś dobry w jakimś sporcie?" },
          { speaker: "Ty", en: "Yes, I'm good at swimming. I go swimming twice a week.", pl: "Tak, dobrze pływam. Pływam dwa razy w tygodniu." }
        ]},
        { id: "s7", type: "boss", title: "Sprawdzian: hobby", questions: [
          { kind: "choice", q: "We enjoy ___ at the weekend.", options: ["cook", "cooking", "to cook"], answer: 1, theoryRef: "A2/x8/s1" },
          { kind: "gap", q: "I'm keen ___ painting. (przyimek)", answer: "on" },
          { kind: "transform", q: "Zmień na zdanie z -ing:", given: "She / love / dance", hint: "love + -ing", answer: ["She loves dancing.", "She loves dancing"] },
          { kind: "multi", q: "Które to hobby?", options: ["gardening", "headache", "photography", "cycling", "receipt"], answers: [0, 2, 3] },
          { kind: "match", pairs: [{ a: "reading", b: "czytanie" }, { a: "gardening", b: "ogrodnictwo" }, { a: "photography", b: "fotografia" }] }
        ]}
      ]
    }
  );
})();
