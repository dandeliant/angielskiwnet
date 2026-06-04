/* ============================================================================
   POZIOM A1 — Baza wypadowa  (WZORZEC OBJĘTOŚCI I SCHEMATU)
   ----------------------------------------------------------------------------
   SCHEMAT (taki sam dla każdego poziomu):
   window.COURSE.levels.push({
     id, name, subtitle, altitude, color, locked,
     units: [ { id, title, icon, steps: [ ...kroki... ] } ]
   });

   TYPY KROKÓW (step.type):
   - theory : { id, type:"theory", title, html, video?, image? }
   - vocab  : { id, type:"vocab", title, words:[{en, pl, example}] }
   - quiz   : { id, type:"quiz", title, theoryRef?, questions:[...] }
   - dialog : { id, type:"dialog", title, theoryRef?, recordLine, lines:[{speaker,en,pl}] }
   - speak  : { id, type:"speak", title, prompts:[{en,pl}] }
   - boss   : { id, type:"boss", title, questions:[...] }

   TYPY PYTAŃ (w quiz/boss):
   - { kind:"choice", q, options:[...], answer:<index>, theoryRef? }
   - { kind:"gap", q (z ___), answer:"slowo", theoryRef? }
   - { kind:"truefalse", q, answer:true|false }
   - { kind:"order", q, words:[...], answer:[poprawna kolejnosc] }
   - { kind:"match", pairs:[{a,b}], theoryRef? }

   theoryRef = "A1/u1/s1" -> przycisk "? teoria" obok zadania.
   ========================================================================== */

window.COURSE.levels.push({
  id: "A1",
  name: "A1 — Baza wypadowa",
  subtitle: "Pierwsze kroki na szlaku",
  altitude: "0 m n.p.m.",
  color: "#22c55e",
  locked: false,
  units: [

    /* ---------------- A1 / U1 — Powitania, to be ---------------- */
    {
      id: "u1", title: "Powitania i przedstawianie się", icon: "👋",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: czasownik to be", html: `
          <p><b>Czasownik „to be" (być)</b> to fundament angielskiego.</p>
          <table class="t-table">
            <tr><th>Osoba</th><th>Forma</th><th>Skrót</th><th>PL</th></tr>
            <tr><td>I</td><td>am</td><td>I'm</td><td>ja jestem</td></tr>
            <tr><td>You</td><td>are</td><td>You're</td><td>ty jesteś</td></tr>
            <tr><td>He / She / It</td><td>is</td><td>He's / She's / It's</td><td>on / ona / ono jest</td></tr>
            <tr><td>We / You / They</td><td>are</td><td>We're / They're</td><td>my / wy / oni są</td></tr>
          </table>
          <p><b>Przykłady:</b> <span class="say">Hello, I'm Anna.</span> &nbsp; <span class="say">She is my teacher.</span></p>
          <p class="tip">💡 Pytanie: zamień kolejność — <span class="say">Are you a student?</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: powitania", words: [
          { en: "Hello", pl: "Cześć / Dzień dobry", example: "Hello, nice to meet you." },
          { en: "Good morning", pl: "Dzień dobry (rano)", example: "Good morning, everyone!" },
          { en: "Good evening", pl: "Dobry wieczór", example: "Good evening, Mr Smith." },
          { en: "Goodbye / Bye", pl: "Do widzenia / Pa", example: "Goodbye, see you tomorrow." },
          { en: "My name is…", pl: "Mam na imię…", example: "My name is Tom." },
          { en: "Nice to meet you", pl: "Miło cię poznać", example: "Nice to meet you, Sara." },
          { en: "How are you?", pl: "Jak się masz?", example: "How are you today?" },
          { en: "I'm fine, thanks", pl: "Dobrze, dziękuję", example: "I'm fine, thanks. And you?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: to be", theoryRef: "A1/u1/s1", questions: [
          { kind: "choice", q: "I ___ a teacher.", options: ["am", "is", "are"], answer: 0, theoryRef: "A1/u1/s1" },
          { kind: "choice", q: "She ___ from Poland.", options: ["am", "is", "are"], answer: 1, theoryRef: "A1/u1/s1" },
          { kind: "choice", q: "We ___ friends.", options: ["am", "is", "are"], answer: 2 },
          { kind: "gap", q: "They ___ my friends.", answer: "are", theoryRef: "A1/u1/s1" },
          { kind: "gap", q: "It ___ a big city.", answer: "is" },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "am", "a", "student"], answer: ["I", "am", "a", "student"] },
          { kind: "truefalse", q: "„He are happy.” to poprawne zdanie.", answer: false }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: pierwsze spotkanie", theoryRef: "A1/u1/s1", recordLine: 1, lines: [
          { speaker: "Anna", en: "Hello! My name is Anna. What's your name?", pl: "Cześć! Mam na imię Anna. Jak masz na imię?" },
          { speaker: "Ty", en: "Hi Anna, I'm Tom. Nice to meet you.", pl: "Cześć Anna, jestem Tom. Miło cię poznać." },
          { speaker: "Anna", en: "Nice to meet you too. How are you?", pl: "Mnie również. Jak się masz?" },
          { speaker: "Ty", en: "I'm fine, thank you. And you?", pl: "Dobrze, dziękuję. A ty?" }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: obóz 1", questions: [
          { kind: "choice", q: "Powitanie rano:", options: ["Good night", "Good morning", "Goodbye"], answer: 1 },
          { kind: "gap", q: "We ___ students.", answer: "are" },
          { kind: "match", pairs: [{ a: "Hello", b: "Cześć" }, { a: "Goodbye", b: "Do widzenia" }, { a: "Thank you", b: "Dziękuję" }] },
          { kind: "order", q: "Ułóż pytanie:", words: ["What", "is", "your", "name"], answer: ["What", "is", "your", "name"] }
        ]}
      ]
    },

    /* ---------------- A1 / U2 — Liczby, wiek, dane ---------------- */
    {
      id: "u2", title: "Liczby, wiek i dane osobowe", icon: "🔢",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: liczby i wiek", html: `
          <p><b>Liczby 0–20:</b> zero, one, two, three, four, five, six, seven, eight, nine, ten,
          eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.</p>
          <p>Dziesiątki: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.</p>
          <p>Wiek: <span class="say">How old are you?</span> → <span class="say">I am ten years old.</span></p>
          <p class="tip">💡 Mówimy „<b>I am</b> 10 years old", nie „I have 10 years".</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: liczby i dane", words: [
          { en: "one / two / three", pl: "jeden / dwa / trzy", example: "I have two cats." },
          { en: "ten / twenty", pl: "dziesięć / dwadzieścia", example: "She is twenty." },
          { en: "hundred", pl: "sto", example: "one hundred euros" },
          { en: "How old…?", pl: "Ile lat…?", example: "How old is your dog?" },
          { en: "years old", pl: "lat (wieku)", example: "He is thirty years old." },
          { en: "phone number", pl: "numer telefonu", example: "What's your phone number?" },
          { en: "email", pl: "e-mail", example: "My email is tom@mail.com." },
          { en: "address", pl: "adres", example: "What's your address?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: liczby i wiek", theoryRef: "A1/u2/s1", questions: [
          { kind: "choice", q: "How ___ are you?", options: ["much", "old", "many"], answer: 1, theoryRef: "A1/u2/s1" },
          { kind: "gap", q: "I am ten years ___.", answer: "old", theoryRef: "A1/u2/s1" },
          { kind: "choice", q: "Ile to „fifteen”?", options: ["5", "15", "50"], answer: 1 },
          { kind: "choice", q: "Ile to „forty”?", options: ["4", "14", "40"], answer: 2 },
          { kind: "truefalse", q: "Mówimy „I have 20 years”.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["How", "old", "is", "she"], answer: ["How", "old", "is", "she"] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: policz na głos", prompts: [
          { en: "one, two, three, four, five", pl: "1–5" },
          { en: "ten, twenty, thirty, forty, fifty", pl: "dziesiątki" },
          { en: "I am twenty-five years old.", pl: "Mam 25 lat." },
          { en: "What is your phone number?", pl: "Jaki masz numer telefonu?" }
        ]}
      ]
    },

    /* ---------------- A1 / U3 — to be: pytania i przeczenia ---------------- */
    {
      id: "u3", title: "To be: pytania, przeczenia, kraje", icon: "🌍",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: przeczenia i pytania z to be", html: `
          <p>Przeczenie: dodaj <b>not</b>. <span class="say">I am not tired.</span> /
          <span class="say">She isn't here.</span> / <span class="say">They aren't ready.</span></p>
          <p>Pytanie: czasownik <b>na początku</b>. <span class="say">Are you English?</span> →
          krótka odpowiedź: <span class="say">Yes, I am.</span> / <span class="say">No, I'm not.</span></p>
          <p>Narodowości: <span class="say">I'm Polish.</span> <span class="say">He's British.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: kraje i narodowości", words: [
          { en: "Poland / Polish", pl: "Polska / polski", example: "I'm from Poland. I'm Polish." },
          { en: "England / English", pl: "Anglia / angielski", example: "She's English." },
          { en: "Spain / Spanish", pl: "Hiszpania / hiszpański", example: "He's Spanish." },
          { en: "Germany / German", pl: "Niemcy / niemiecki", example: "They're German." },
          { en: "country", pl: "kraj", example: "What country are you from?" },
          { en: "Where are you from?", pl: "Skąd jesteś?", example: "Where are you from?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: pytania i przeczenia", theoryRef: "A1/u3/s1", questions: [
          { kind: "choice", q: "___ you from Spain?", options: ["Am", "Is", "Are"], answer: 2, theoryRef: "A1/u3/s1" },
          { kind: "gap", q: "She ___ (not) a doctor. (krótko: isn't)", answer: "isn't", theoryRef: "A1/u3/s1" },
          { kind: "choice", q: "„Are you ready?” — krótka odpowiedź twierdząca:", options: ["Yes, I am.", "Yes, I'm.", "Yes, I do."], answer: 0 },
          { kind: "truefalse", q: "„I amn't” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["Where", "are", "you", "from"], answer: ["Where", "are", "you", "from"] }
        ]}
      ]
    },

    /* ---------------- A1 / U4 — Present Simple ---------------- */
    {
      id: "u4", title: "Present Simple — codzienne czynności", icon: "🕗",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Present Simple", html: `
          <p><b>Present Simple</b> opisuje rutynę i fakty.</p>
          <p>Dla <b>he / she / it</b> dodajemy <b>-s</b>: <span class="say">She works.</span> / <span class="say">He plays.</span></p>
          <p>Przeczenie: <span class="say">I don't like coffee.</span> / <span class="say">She doesn't eat meat.</span></p>
          <p>Pytanie: <span class="say">Do you speak English?</span> / <span class="say">Does he live here?</span></p>
          <p class="tip">💡 W 3. os.: <b>does</b> + czasownik <u>bez</u> -s w pytaniach i przeczeniach.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czasowniki", words: [
          { en: "work", pl: "pracować", example: "I work in an office." },
          { en: "live", pl: "mieszkać", example: "They live in Warsaw." },
          { en: "eat", pl: "jeść", example: "We eat breakfast at 8." },
          { en: "go", pl: "iść / jechać", example: "She goes to school." },
          { en: "like", pl: "lubić", example: "I like tea." },
          { en: "speak", pl: "mówić", example: "Do you speak Polish?" },
          { en: "study", pl: "uczyć się", example: "He studies English." },
          { en: "play", pl: "grać / bawić się", example: "They play football." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Present Simple", theoryRef: "A1/u4/s1", questions: [
          { kind: "choice", q: "She ___ in a bank.", options: ["work", "works", "working"], answer: 1, theoryRef: "A1/u4/s1" },
          { kind: "choice", q: "___ you like pizza?", options: ["Do", "Does", "Is"], answer: 0, theoryRef: "A1/u4/s1" },
          { kind: "gap", q: "He ___ not eat meat. (don't/doesn't)", answer: "doesn't", theoryRef: "A1/u4/s1" },
          { kind: "gap", q: "He stud___ every day. (dodaj końcówkę)", answer: "ies" },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "go", "to", "work"], answer: ["I", "go", "to", "work"] },
          { kind: "truefalse", q: "„Does she works here?” jest poprawne.", answer: false }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: codzienny dzień", theoryRef: "A1/u4/s1", recordLine: 1, lines: [
          { speaker: "Kate", en: "What do you do every day?", pl: "Co robisz każdego dnia?" },
          { speaker: "Ty", en: "I get up at seven and go to work.", pl: "Wstaję o siódmej i idę do pracy." },
          { speaker: "Kate", en: "Do you like your job?", pl: "Lubisz swoją pracę?" },
          { speaker: "Ty", en: "Yes, I do. I work with nice people.", pl: "Tak. Pracuję z miłymi ludźmi." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: obóz 4", questions: [
          { kind: "choice", q: "They ___ in London.", options: ["lives", "live", "living"], answer: 1 },
          { kind: "gap", q: "___ he speak English? (Do/Does)", answer: "Does" },
          { kind: "truefalse", q: "„I doesn't like it.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "likes", "cold", "tea"], answer: ["She", "likes", "cold", "tea"] }
        ]}
      ]
    },

    /* ---------------- A1 / U5 — Present Simple: częstotliwość ---------------- */
    {
      id: "u5", title: "Rutyna i przysłówki częstotliwości", icon: "🔁",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: always, usually, never…", html: `
          <p>Przysłówki częstotliwości stoją <b>przed</b> czasownikiem głównym:
          <span class="say">I always drink coffee.</span></p>
          <p>Skala: <b>always</b> (zawsze) → usually → often → sometimes → rarely → <b>never</b> (nigdy).</p>
          <p>Z czasownikiem <b>to be</b> stoją <u>po</u> nim: <span class="say">She is never late.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: rutyna", words: [
          { en: "always", pl: "zawsze", example: "I always get up early." },
          { en: "usually", pl: "zwykle", example: "We usually walk to work." },
          { en: "often", pl: "często", example: "He often plays tennis." },
          { en: "sometimes", pl: "czasami", example: "They sometimes cook dinner." },
          { en: "never", pl: "nigdy", example: "She never drinks coffee." },
          { en: "every day", pl: "codziennie", example: "I read every day." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: częstotliwość", theoryRef: "A1/u5/s1", questions: [
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "always", "drink", "tea"], answer: ["I", "always", "drink", "tea"] },
          { kind: "choice", q: "She is ___ late. (nigdy)", options: ["never", "always", "often"], answer: 0, theoryRef: "A1/u5/s1" },
          { kind: "gap", q: "We ___ go to the cinema. (czasami)", answer: "sometimes" },
          { kind: "truefalse", q: "„I drink always coffee.” ma poprawny szyk.", answer: false }
        ]}
      ]
    },

    /* ---------------- A1 / U6 — Rodzina i posiadanie ---------------- */
    {
      id: "u6", title: "Rodzina i posiadanie (have got)", icon: "👨‍👩‍👧",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: have got + dopełniacz 's", html: `
          <p>Posiadanie: <span class="say">I have got a sister.</span> = <span class="say">I have a sister.</span></p>
          <p>3. os.: <span class="say">She has got a car.</span></p>
          <p>Dopełniacz <b>'s</b> = przynależność: <span class="say">Tom's car</span> (samochód Toma).</p>
          <p class="tip">💡 his / her / its / our / their = jego / jej / jego / nasz / ich.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: rodzina", words: [
          { en: "mother / mum", pl: "mama", example: "My mum is a nurse." },
          { en: "father / dad", pl: "tata", example: "His dad works here." },
          { en: "brother", pl: "brat", example: "I have one brother." },
          { en: "sister", pl: "siostra", example: "Her sister is ten." },
          { en: "parents", pl: "rodzice", example: "My parents live here." },
          { en: "grandmother", pl: "babcia", example: "Their grandmother is kind." },
          { en: "son / daughter", pl: "syn / córka", example: "They have a son." },
          { en: "wife / husband", pl: "żona / mąż", example: "This is my wife." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: rodzina i 's", theoryRef: "A1/u6/s1", questions: [
          { kind: "choice", q: "This is ___ car. (Toma)", options: ["Toms", "Tom's", "Toms'"], answer: 1, theoryRef: "A1/u6/s1" },
          { kind: "gap", q: "I have ___ a sister. (got)", answer: "got", theoryRef: "A1/u6/s1" },
          { kind: "choice", q: "She ___ got two children.", options: ["have", "has", "is"], answer: 1 },
          { kind: "match", pairs: [{ a: "mother", b: "mama" }, { a: "brother", b: "brat" }, { a: "parents", b: "rodzice" }] },
          { kind: "choice", q: "She loves ___ family.", options: ["she", "her", "hers"], answer: 1 }
        ]},
        { id: "s4", type: "boss", title: "Sprawdzian: obóz 6", questions: [
          { kind: "choice", q: "We ___ got a big house.", options: ["have", "has", "is"], answer: 0 },
          { kind: "gap", q: "That is ___ bag. (Anny)", answer: "Anna's" },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "has", "a", "dog"], answer: ["He", "has", "a", "dog"] }
        ]}
      ]
    },

    /* ---------------- A1 / U7 — Jedzenie ---------------- */
    {
      id: "u7", title: "Jedzenie i zamawianie", icon: "🍽️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: a / an / some + policzalne", html: `
          <p><b>a</b> przed spółgłoską: <span class="say">a sandwich</span>. <b>an</b> przed samogłoską: <span class="say">an apple</span>.</p>
          <p><b>some</b> dla niepoliczalnych i mnogich: <span class="say">some water</span>, <span class="say">some apples</span>.</p>
          <p>Policzalne (a/an, l.mn.) vs niepoliczalne (some, bez l.mn.): <i>an egg / two eggs</i>, ale <i>some rice</i>.</p>
          <p class="tip">💡 W kawiarni: <span class="say">Can I have a coffee, please?</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: jedzenie", words: [
          { en: "water", pl: "woda", example: "A glass of water, please." },
          { en: "coffee / tea", pl: "kawa / herbata", example: "I'd like a coffee." },
          { en: "bread", pl: "chleb", example: "We need some bread." },
          { en: "apple / banana", pl: "jabłko / banan", example: "An apple a day…" },
          { en: "rice", pl: "ryż", example: "I eat some rice." },
          { en: "menu", pl: "menu / karta", example: "Can I see the menu?" },
          { en: "bill", pl: "rachunek", example: "The bill, please." },
          { en: "delicious", pl: "pyszny", example: "This soup is delicious." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: a/an/some", theoryRef: "A1/u7/s1", questions: [
          { kind: "choice", q: "I'd like ___ apple.", options: ["a", "an", "some"], answer: 1, theoryRef: "A1/u7/s1" },
          { kind: "choice", q: "Can I have ___ water?", options: ["a", "an", "some"], answer: 2, theoryRef: "A1/u7/s1" },
          { kind: "gap", q: "She wants ___ sandwich. (a/an)", answer: "a" },
          { kind: "choice", q: "We need ___ apples.", options: ["a", "an", "some"], answer: 2 },
          { kind: "truefalse", q: "„a rice” jest poprawne.", answer: false }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: w kawiarni", theoryRef: "A1/u7/s1", recordLine: 1, lines: [
          { speaker: "Kelner", en: "Good afternoon. What would you like?", pl: "Dzień dobry. Co podać?" },
          { speaker: "Ty", en: "Can I have a coffee and a sandwich, please?", pl: "Poproszę kawę i kanapkę." },
          { speaker: "Kelner", en: "Of course. Anything else?", pl: "Oczywiście. Coś jeszcze?" },
          { speaker: "Ty", en: "No, thank you. That's all.", pl: "Nie, dziękuję. To wszystko." }
        ]}
      ]
    },

    /* ---------------- A1 / U8 — Czas i dni ---------------- */
    {
      id: "u8", title: "Czas, dni i przyimki czasu", icon: "⏰",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: która godzina + at/in/on", html: `
          <p>Godziny: <span class="say">It's seven o'clock.</span> / <span class="say">It's half past eight.</span> /
          <span class="say">It's quarter to nine.</span></p>
          <p>Przyimki: <b>at</b> (godziny) — <span class="say">at 7</span>; <b>in</b> (pory dnia/miesiące) — <span class="say">in the morning</span>;
          <b>on</b> (dni) — <span class="say">on Monday</span>.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czas i dni", words: [
          { en: "Monday / Friday", pl: "poniedziałek / piątek", example: "I work on Monday." },
          { en: "weekend", pl: "weekend", example: "I relax at the weekend." },
          { en: "o'clock", pl: "godzina (pełna)", example: "It's five o'clock." },
          { en: "half past", pl: "wpół do (po)", example: "half past six = 6:30" },
          { en: "quarter to", pl: "za piętnaście", example: "quarter to nine = 8:45" },
          { en: "morning / evening", pl: "ranek / wieczór", example: "in the evening" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: czas", theoryRef: "A1/u8/s1", questions: [
          { kind: "choice", q: "I get up ___ 7 o'clock.", options: ["in", "at", "on"], answer: 1, theoryRef: "A1/u8/s1" },
          { kind: "choice", q: "___ Monday I go to work.", options: ["In", "At", "On"], answer: 2, theoryRef: "A1/u8/s1" },
          { kind: "gap", q: "I read ___ the evening. (in/at)", answer: "in" },
          { kind: "choice", q: "6:30 to:", options: ["half past six", "quarter to six", "six o'clock"], answer: 0 },
          { kind: "match", pairs: [{ a: "at", b: "godziny" }, { a: "on", b: "dni" }, { a: "in", b: "pory dnia" }] }
        ]}
      ]
    },

    /* ---------------- A1 / U9 — Dom i there is/are ---------------- */
    {
      id: "u9", title: "Dom — there is / there are", icon: "🏠",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: there is/are + przyimki miejsca", html: `
          <p><b>There is</b> (jeden) / <b>There are</b> (kilka): <span class="say">There is a sofa.</span> /
          <span class="say">There are two windows.</span></p>
          <p>Przeczenie: <span class="say">There isn't a TV.</span> / <span class="say">There aren't any chairs.</span></p>
          <p>Przyimki miejsca: <b>in</b> (w), <b>on</b> (na), <b>under</b> (pod), <b>next to</b> (obok), <b>behind</b> (za).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: dom", words: [
          { en: "room", pl: "pokój", example: "My room is small." },
          { en: "kitchen", pl: "kuchnia", example: "The kitchen is big." },
          { en: "table / chair", pl: "stół / krzesło", example: "a chair next to the table" },
          { en: "bed", pl: "łóżko", example: "The cat is on the bed." },
          { en: "in / on / under", pl: "w / na / pod", example: "The keys are under the book." },
          { en: "next to", pl: "obok", example: "The lamp is next to the bed." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: there is/are", theoryRef: "A1/u9/s1", questions: [
          { kind: "choice", q: "There ___ two parks in my town.", options: ["is", "are", "be"], answer: 1, theoryRef: "A1/u9/s1" },
          { kind: "gap", q: "There ___ a big kitchen. (is/are)", answer: "is" },
          { kind: "choice", q: "The book is ___ the table. (na)", options: ["in", "on", "under"], answer: 1, theoryRef: "A1/u9/s1" },
          { kind: "truefalse", q: "„There is three cars.” jest poprawne.", answer: false },
          { kind: "match", pairs: [{ a: "under", b: "pod" }, { a: "next to", b: "obok" }, { a: "behind", b: "za" }] }
        ]},
        { id: "s4", type: "boss", title: "Sprawdzian: obóz 9", questions: [
          { kind: "choice", q: "There ___ four chairs.", options: ["is", "are", "am"], answer: 1 },
          { kind: "gap", q: "The cat is ___ the bed. (na)", answer: "on" },
          { kind: "order", q: "Ułóż zdanie:", words: ["There", "is", "a", "lamp"], answer: ["There", "is", "a", "lamp"] }
        ]}
      ]
    },

    /* ---------------- A1 / U10 — Opisy ---------------- */
    {
      id: "u10", title: "Opisywanie ludzi i rzeczy", icon: "🎨",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: przymiotniki + this/that", html: `
          <p>Przymiotnik stoi <b>przed</b> rzeczownikiem: <span class="say">a big house</span>, <span class="say">a nice day</span>.</p>
          <p><b>this</b> (to, blisko) / <b>that</b> (tamto, daleko); l.mn.: <b>these / those</b>.</p>
          <p>Wygląd: <span class="say">He has got blue eyes and short hair.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przymiotniki", words: [
          { en: "big / small", pl: "duży / mały", example: "a big dog, a small room" },
          { en: "happy / sad", pl: "szczęśliwy / smutny", example: "I'm happy." },
          { en: "tall / short", pl: "wysoki / niski", example: "He is tall." },
          { en: "old / new", pl: "stary / nowy", example: "an old car, a new phone" },
          { en: "beautiful", pl: "piękny", example: "a beautiful city" },
          { en: "hair / eyes", pl: "włosy / oczy", example: "long hair, green eyes" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: opisywanie", theoryRef: "A1/u10/s1", questions: [
          { kind: "order", q: "Ułóż wyrażenie:", words: ["a", "big", "house"], answer: ["a", "big", "house"] },
          { kind: "choice", q: "___ books here are mine. (te, blisko)", options: ["This", "These", "Those"], answer: 1, theoryRef: "A1/u10/s1" },
          { kind: "choice", q: "He ___ got short hair.", options: ["have", "has", "is"], answer: 1 },
          { kind: "match", pairs: [{ a: "big", b: "duży" }, { a: "tall", b: "wysoki" }, { a: "old", b: "stary" }] },
          { kind: "truefalse", q: "„a house big” to poprawny szyk.", answer: false }
        ]}
      ]
    },

    /* ---------------- A1 / U11 — can / can't ---------------- */
    {
      id: "u11", title: "Umiejętności: can / can't", icon: "💪",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: can (umieć / móc)", html: `
          <p><b>can</b> + czasownik (bez to): <span class="say">I can swim.</span></p>
          <p>Przeczenie: <span class="say">She can't drive.</span> Pytanie: <span class="say">Can you cook?</span></p>
          <p>Krótkie odpowiedzi: <span class="say">Yes, I can.</span> / <span class="say">No, I can't.</span></p>
          <p class="tip">💡 „can" jest takie samo dla wszystkich osób — bez -s!</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czynności", words: [
          { en: "swim", pl: "pływać", example: "I can swim." },
          { en: "drive", pl: "prowadzić (auto)", example: "He can't drive." },
          { en: "cook", pl: "gotować", example: "Can you cook?" },
          { en: "dance / sing", pl: "tańczyć / śpiewać", example: "She can dance and sing." },
          { en: "ride a bike", pl: "jeździć na rowerze", example: "I can ride a bike." },
          { en: "play the guitar", pl: "grać na gitarze", example: "He can play the guitar." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: can/can't", theoryRef: "A1/u11/s1", questions: [
          { kind: "choice", q: "She ___ swim very well.", options: ["can", "cans", "is can"], answer: 0, theoryRef: "A1/u11/s1" },
          { kind: "gap", q: "I ___ drive. I don't have a car. (przeczenie skrót)", answer: "can't" },
          { kind: "choice", q: "„Can you cook?” — odpowiedź przecząca:", options: ["No, I don't.", "No, I can't.", "No, I amn't."], answer: 1 },
          { kind: "truefalse", q: "„He cansswim.” jest poprawne.", answer: false },
          { kind: "order", q: "Ułóż pytanie:", words: ["Can", "you", "ride", "a", "bike"], answer: ["Can", "you", "ride", "a", "bike"] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: co potrafisz?", prompts: [
          { en: "I can speak a little English.", pl: "Umiem trochę mówić po angielsku." },
          { en: "I can't play the guitar.", pl: "Nie umiem grać na gitarze." },
          { en: "Can you swim?", pl: "Umiesz pływać?" }
        ]}
      ]
    },

    /* ---------------- A1 / U12 — W mieście (FINAŁ A1) ---------------- */
    {
      id: "u12", title: "W mieście — pytanie o drogę", icon: "🗺️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: kierunki i miejsca", html: `
          <p>Kierunki: <span class="say">Turn left.</span> / <span class="say">Turn right.</span> / <span class="say">Go straight on.</span></p>
          <p>Pytanie: <span class="say">Excuse me, where is the station?</span> /
          <span class="say">Is there a bank near here?</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: miasto", words: [
          { en: "street", pl: "ulica", example: "It's on this street." },
          { en: "bank / shop", pl: "bank / sklep", example: "There is a bank here." },
          { en: "left / right", pl: "lewo / prawo", example: "Turn left, then right." },
          { en: "straight on", pl: "prosto", example: "Go straight on." },
          { en: "near / opposite", pl: "blisko / naprzeciwko", example: "It's opposite the park." },
          { en: "station", pl: "dworzec / stacja", example: "Where is the station?" }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: w mieście", theoryRef: "A1/u12/s1", questions: [
          { kind: "gap", q: "Turn ___ at the bank. (wpisz left)", answer: "left", theoryRef: "A1/u12/s1" },
          { kind: "choice", q: "___ me, where is the museum?", options: ["Sorry", "Excuse", "Please"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["Go", "straight", "on"], answer: ["Go", "straight", "on"] },
          { kind: "match", pairs: [{ a: "left", b: "w lewo" }, { a: "right", b: "w prawo" }, { a: "near", b: "blisko" }] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: pytanie o drogę", theoryRef: "A1/u12/s1", recordLine: 1, lines: [
          { speaker: "Turysta", en: "Excuse me, where is the train station?", pl: "Przepraszam, gdzie jest dworzec?" },
          { speaker: "Ty", en: "Go straight on and turn left. It's near the bank.", pl: "Idź prosto i skręć w lewo. Jest blisko banku." },
          { speaker: "Turysta", en: "Thank you very much!", pl: "Dziękuję bardzo!" },
          { speaker: "Ty", en: "You're welcome. Have a nice day!", pl: "Proszę bardzo. Miłego dnia!" }
        ]},
        { id: "s5", type: "boss", title: "Wielki sprawdzian A1", questions: [
          { kind: "choice", q: "She ___ from Spain.", options: ["am", "is", "are"], answer: 1 },
          { kind: "choice", q: "___ you like coffee?", options: ["Do", "Does", "Is"], answer: 0 },
          { kind: "gap", q: "There ___ a shop near my house. (is/are)", answer: "is" },
          { kind: "choice", q: "I ___ swim, but I ___ drive.", options: ["can / can't", "can't / can", "am / can"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "always", "go", "to", "school"], answer: ["I", "always", "go", "to", "school"] },
          { kind: "match", pairs: [{ a: "left", b: "w lewo" }, { a: "brother", b: "brat" }, { a: "bread", b: "chleb" }] }
        ]}
      ]
    }

  ]
});
