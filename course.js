/* ============================================================================
   ANGIELSKIWNET — TREŚĆ KURSU
   ----------------------------------------------------------------------------
   To jest JEDYNY plik, który musisz edytować, żeby zmienić treść kursu.
   Możesz też edytować wszystko bezpośrednio w przeglądarce (przycisk „Edytuj")
   i wyeksportować nowy course.js.

   STRUKTURA:
   COURSE.levels[]  -> poziomy (A1..C2), czyli wysokości na szlaku wyprawy
     .units[]       -> jednostki (obozy / przystanki na szlaku)
       .steps[]     -> kroki-węzły (zdobywane punkty)
         .type      -> "theory" | "vocab" | "quiz" | "dialog" | "speak" | "boss"

   TYPY KROKÓW:
   - theory : { title, html, video (opcjonalnie URL YouTube), image (URL) }
   - vocab  : { title, words:[{en, pl, example}] }
   - quiz   : { title, theoryRef, questions:[...] }
   - dialog : { title, theoryRef, lines:[{speaker, en, pl}], recordLine:index }
   - speak  : { title, prompts:[{en, pl}] }   // czytaj na głos, oceniana wymowa
   - boss   : { title, questions:[...] }       // test kończący jednostkę

   TYPY PYTAŃ (w quiz/boss):
   - { kind:"choice",  q, options:[...], answer:index, theoryRef }
   - { kind:"gap",     q (użyj ___ ), answer:"słowo", theoryRef }
   - { kind:"match",   pairs:[{a,b}], theoryRef }
   - { kind:"order",   q, words:[...], answer:[poprawna kolejność wyrazów] }
   - { kind:"truefalse", q, answer:true/false }

   theoryRef = "levelId/unitId/stepId" — odnośnik „?” pokazujący teorię obok zadania.
   ========================================================================== */

window.COURSE = {
  brand: "Angielskiwnet",
  tagline: "Zdobądź angielski krok po kroku — od bazy po szczyt.",

  levels: [
    /* ====================== POZIOM A1 (PEŁNY) ====================== */
    {
      id: "A1",
      name: "A1 — Baza wypadowa",
      subtitle: "Pierwsze kroki na szlaku",
      altitude: "0 m n.p.m.",
      color: "#22c55e",
      locked: false,
      units: [
        /* ---------- A1 / U1 ---------- */
        {
          id: "u1",
          title: "Powitania i przedstawianie się",
          icon: "👋",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: czasownik to be",
              html: `
                <p><b>Czasownik „to be" (być)</b> to najważniejszy czasownik na początku nauki.</p>
                <table class="t-table">
                  <tr><th>Osoba</th><th>Forma</th><th>Skrót</th><th>Tłumaczenie</th></tr>
                  <tr><td>I</td><td>am</td><td>I'm</td><td>ja jestem</td></tr>
                  <tr><td>You</td><td>are</td><td>You're</td><td>ty jesteś</td></tr>
                  <tr><td>He / She / It</td><td>is</td><td>He's / She's / It's</td><td>on / ona / ono jest</td></tr>
                  <tr><td>We</td><td>are</td><td>We're</td><td>my jesteśmy</td></tr>
                  <tr><td>They</td><td>are</td><td>They're</td><td>oni są</td></tr>
                </table>
                <p><b>Przykłady:</b> <span class="say">Hello, I'm Anna.</span> &nbsp; <span class="say">She is my teacher.</span></p>
                <p class="tip">💡 Pytanie tworzymy przez zamianę: <i>You are…</i> → <span class="say">Are you a student?</span></p>
              `,
              video: "",
              image: ""
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: powitania",
              words: [
                { en: "Hello", pl: "Cześć / Dzień dobry", example: "Hello, nice to meet you." },
                { en: "Good morning", pl: "Dzień dobry (rano)", example: "Good morning, everyone!" },
                { en: "Goodbye", pl: "Do widzenia", example: "Goodbye, see you tomorrow." },
                { en: "My name is…", pl: "Mam na imię…", example: "My name is Tom." },
                { en: "Nice to meet you", pl: "Miło cię poznać", example: "Nice to meet you, Sara." },
                { en: "How are you?", pl: "Jak się masz?", example: "How are you today?" }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: to be",
              theoryRef: "A1/u1/s1",
              questions: [
                { kind: "choice", q: "I ___ a teacher.", options: ["am", "is", "are"], answer: 0, theoryRef: "A1/u1/s1" },
                { kind: "choice", q: "She ___ from Poland.", options: ["am", "is", "are"], answer: 1, theoryRef: "A1/u1/s1" },
                { kind: "gap", q: "They ___ my friends.", answer: "are", theoryRef: "A1/u1/s1" },
                { kind: "order", q: "Ułóż zdanie:", words: ["I", "am", "a", "student"], answer: ["I", "am", "a", "student"] },
                { kind: "truefalse", q: "„He are happy.” to poprawne zdanie.", answer: false }
              ]
            },
            {
              id: "s4", type: "dialog", title: "Dialog: pierwsze spotkanie",
              theoryRef: "A1/u1/s1",
              recordLine: 1,
              lines: [
                { speaker: "Anna", en: "Hello! My name is Anna. What's your name?", pl: "Cześć! Mam na imię Anna. Jak masz na imię?" },
                { speaker: "Ty",   en: "Hi Anna, I'm Tom. Nice to meet you.", pl: "Cześć Anna, jestem Tom. Miło cię poznać." },
                { speaker: "Anna", en: "Nice to meet you too. How are you?", pl: "Mnie również. Jak się masz?" },
                { speaker: "Ty",   en: "I'm fine, thank you. And you?", pl: "Dobrze, dziękuję. A ty?" }
              ]
            },
            {
              id: "s5", type: "boss", title: "Sprawdzian obozu 1",
              questions: [
                { kind: "choice", q: "Wybierz poprawne powitanie rano:", options: ["Good night", "Good morning", "Goodbye"], answer: 1 },
                { kind: "gap", q: "We ___ students.", answer: "are" },
                { kind: "match", pairs: [
                  { a: "Hello", b: "Cześć" },
                  { a: "Goodbye", b: "Do widzenia" },
                  { a: "Thank you", b: "Dziękuję" }
                ]},
                { kind: "order", q: "Ułóż pytanie:", words: ["What", "is", "your", "name"], answer: ["What", "is", "your", "name"] }
              ]
            }
          ]
        },

        /* ---------- A1 / U2 ---------- */
        {
          id: "u2",
          title: "Liczby, wiek i podstawowe pytania",
          icon: "🔢",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: liczby i wiek",
              html: `
                <p><b>Liczby 0–10:</b> zero, one, two, three, four, five, six, seven, eight, nine, ten.</p>
                <p>O wiek pytamy: <span class="say">How old are you?</span> → <span class="say">I am ten years old.</span></p>
                <p class="tip">💡 Po angielsku mówimy „<b>I am</b> 10 years old”, a nie „I have 10 years”.</p>
              `
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: liczby",
              words: [
                { en: "one", pl: "jeden", example: "I have one brother." },
                { en: "two", pl: "dwa", example: "Two coffees, please." },
                { en: "three", pl: "trzy", example: "It's three o'clock." },
                { en: "ten", pl: "dziesięć", example: "Ten students are here." },
                { en: "How old…?", pl: "Ile lat…?", example: "How old is your dog?" },
                { en: "years old", pl: "lat (wieku)", example: "She is twenty years old." }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: liczby i wiek",
              theoryRef: "A1/u2/s1",
              questions: [
                { kind: "choice", q: "How ___ are you?", options: ["much", "old", "many"], answer: 1, theoryRef: "A1/u2/s1" },
                { kind: "gap", q: "I am ten years ___.", answer: "old", theoryRef: "A1/u2/s1" },
                { kind: "choice", q: "Ile to „seven”?", options: ["6", "7", "8"], answer: 1 },
                { kind: "truefalse", q: "Mówimy „I have 20 years”.", answer: false }
              ]
            },
            {
              id: "s4", type: "speak", title: "Mówienie: policz na głos",
              prompts: [
                { en: "one, two, three, four, five", pl: "jeden, dwa, trzy, cztery, pięć" },
                { en: "I am twenty years old.", pl: "Mam dwadzieścia lat." },
                { en: "How old are you?", pl: "Ile masz lat?" }
              ]
            }
          ]
        },

        /* ---------- A1 / U3 ---------- */
        {
          id: "u3",
          title: "Present Simple — codzienne czynności",
          icon: "🕗",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: Present Simple",
              html: `
                <p><b>Present Simple</b> opisuje rutynę i fakty.</p>
                <p>Dla <b>he / she / it</b> dodajemy <b>-s</b>: <span class="say">She works.</span> / <span class="say">He plays.</span></p>
                <p>Przeczenie: <span class="say">I don't like coffee.</span> / <span class="say">She doesn't eat meat.</span></p>
                <p>Pytanie: <span class="say">Do you speak English?</span> / <span class="say">Does he live here?</span></p>
                <p class="tip">💡 W 3. osobie: <b>does</b> + czasownik bez -s w pytaniach i przeczeniach.</p>
              `
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: czasowniki",
              words: [
                { en: "work", pl: "pracować", example: "I work in an office." },
                { en: "live", pl: "mieszkać", example: "They live in Warsaw." },
                { en: "eat", pl: "jeść", example: "We eat breakfast at 8." },
                { en: "go", pl: "iść / jechać", example: "She goes to school." },
                { en: "like", pl: "lubić", example: "I like tea." },
                { en: "speak", pl: "mówić", example: "Do you speak Polish?" }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: Present Simple",
              theoryRef: "A1/u3/s1",
              questions: [
                { kind: "choice", q: "She ___ in a bank.", options: ["work", "works", "working"], answer: 1, theoryRef: "A1/u3/s1" },
                { kind: "choice", q: "___ you like pizza?", options: ["Do", "Does", "Is"], answer: 0, theoryRef: "A1/u3/s1" },
                { kind: "gap", q: "He ___ not eat meat. (don't/doesn't)", answer: "doesn't", theoryRef: "A1/u3/s1" },
                { kind: "order", q: "Ułóż zdanie:", words: ["I", "go", "to", "work"], answer: ["I", "go", "to", "work"] },
                { kind: "truefalse", q: "„Does she works here?” jest poprawne.", answer: false }
              ]
            },
            {
              id: "s4", type: "dialog", title: "Dialog: codzienny dzień",
              theoryRef: "A1/u3/s1",
              recordLine: 1,
              lines: [
                { speaker: "Kate", en: "What do you do every day?", pl: "Co robisz każdego dnia?" },
                { speaker: "Ty",   en: "I get up at seven and go to work.", pl: "Wstaję o siódmej i idę do pracy." },
                { speaker: "Kate", en: "Do you like your job?", pl: "Lubisz swoją pracę?" },
                { speaker: "Ty",   en: "Yes, I do. I work with nice people.", pl: "Tak. Pracuję z miłymi ludźmi." }
              ]
            },
            {
              id: "s5", type: "boss", title: "Sprawdzian obozu 3",
              questions: [
                { kind: "choice", q: "They ___ in London.", options: ["lives", "live", "living"], answer: 1 },
                { kind: "gap", q: "___ he speak English? (Do/Does)", answer: "Does" },
                { kind: "truefalse", q: "„I doesn't like it.” jest poprawne.", answer: false }
              ]
            }
          ]
        },

        /* ---------- A1 / U4 ---------- */
        {
          id: "u4",
          title: "Rodzina i dom",
          icon: "🏠",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: have got / dopełniacz 's",
              html: `
                <p>Posiadanie: <span class="say">I have got a sister.</span> = <span class="say">I have a sister.</span></p>
                <p>Dopełniacz <b>'s</b> pokazuje przynależność: <span class="say">Tom's car</span> (samochód Toma).</p>
                <p class="tip">💡 <b>Their / his / her</b> = ich / jego / jej.</p>
              `
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: rodzina i dom",
              words: [
                { en: "mother / mum", pl: "mama", example: "My mum is a nurse." },
                { en: "father / dad", pl: "tata", example: "His dad works here." },
                { en: "brother", pl: "brat", example: "I have one brother." },
                { en: "sister", pl: "siostra", example: "Her sister is ten." },
                { en: "house", pl: "dom", example: "Our house is big." },
                { en: "room", pl: "pokój", example: "My room is small." }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: rodzina",
              theoryRef: "A1/u4/s1",
              questions: [
                { kind: "choice", q: "This is ___ car. (należy do Toma)", options: ["Toms", "Tom's", "Toms'"], answer: 1, theoryRef: "A1/u4/s1" },
                { kind: "gap", q: "I have ___ a sister. (got)", answer: "got", theoryRef: "A1/u4/s1" },
                { kind: "match", pairs: [
                  { a: "mother", b: "mama" },
                  { a: "brother", b: "brat" },
                  { a: "house", b: "dom" }
                ]},
                { kind: "choice", q: "She loves ___ family.", options: ["she", "her", "hers"], answer: 1 }
              ]
            }
          ]
        },

        /* ---------- A1 / U5 ---------- */
        {
          id: "u5",
          title: "Jedzenie i zamawianie",
          icon: "🍽️",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: a / an / some",
              html: `
                <p><b>a</b> przed spółgłoską: <span class="say">a sandwich</span>. <b>an</b> przed samogłoską: <span class="say">an apple</span>.</p>
                <p><b>some</b> dla rzeczy niepoliczalnych i mnogich: <span class="say">some water</span>, <span class="say">some apples</span>.</p>
                <p class="tip">💡 W kawiarni: <span class="say">Can I have a coffee, please?</span></p>
              `
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: jedzenie",
              words: [
                { en: "water", pl: "woda", example: "A glass of water, please." },
                { en: "coffee", pl: "kawa", example: "I'd like a coffee." },
                { en: "bread", pl: "chleb", example: "We need some bread." },
                { en: "apple", pl: "jabłko", example: "An apple a day…" },
                { en: "menu", pl: "menu / karta", example: "Can I see the menu?" },
                { en: "bill", pl: "rachunek", example: "The bill, please." }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: a/an/some",
              theoryRef: "A1/u5/s1",
              questions: [
                { kind: "choice", q: "I'd like ___ apple.", options: ["a", "an", "some"], answer: 1, theoryRef: "A1/u5/s1" },
                { kind: "choice", q: "Can I have ___ water?", options: ["a", "an", "some"], answer: 2, theoryRef: "A1/u5/s1" },
                { kind: "gap", q: "She wants ___ sandwich. (a/an)", answer: "a", theoryRef: "A1/u5/s1" }
              ]
            },
            {
              id: "s4", type: "dialog", title: "Dialog: w kawiarni",
              theoryRef: "A1/u5/s1",
              recordLine: 1,
              lines: [
                { speaker: "Kelner", en: "Good afternoon. What would you like?", pl: "Dzień dobry. Co podać?" },
                { speaker: "Ty",     en: "Can I have a coffee and a sandwich, please?", pl: "Poproszę kawę i kanapkę." },
                { speaker: "Kelner", en: "Of course. Anything else?", pl: "Oczywiście. Coś jeszcze?" },
                { speaker: "Ty",     en: "No, thank you. That's all.", pl: "Nie, dziękuję. To wszystko." }
              ]
            }
          ]
        },

        /* ---------- A1 / U6 ---------- */
        {
          id: "u6",
          title: "Czas i codzienna rutyna",
          icon: "⏰",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: która godzina + przyimki czasu",
              html: `
                <p>Godziny: <span class="say">It's seven o'clock.</span> / <span class="say">It's half past eight.</span></p>
                <p>Przyimki: <b>at</b> (godziny) — <span class="say">at 7</span>; <b>in</b> (pory dnia) — <span class="say">in the morning</span>; <b>on</b> (dni) — <span class="say">on Monday</span>.</p>
              `
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: rutyna",
              words: [
                { en: "get up", pl: "wstawać", example: "I get up early." },
                { en: "have breakfast", pl: "jeść śniadanie", example: "We have breakfast at 8." },
                { en: "go to bed", pl: "iść spać", example: "She goes to bed at 10." },
                { en: "morning", pl: "ranek", example: "in the morning" },
                { en: "evening", pl: "wieczór", example: "in the evening" },
                { en: "o'clock", pl: "godzina (pełna)", example: "It's five o'clock." }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: czas",
              theoryRef: "A1/u6/s1",
              questions: [
                { kind: "choice", q: "I get up ___ 7 o'clock.", options: ["in", "at", "on"], answer: 1, theoryRef: "A1/u6/s1" },
                { kind: "choice", q: "___ Monday I go to work.", options: ["In", "At", "On"], answer: 2, theoryRef: "A1/u6/s1" },
                { kind: "gap", q: "I read ___ the evening. (in/at)", answer: "in", theoryRef: "A1/u6/s1" }
              ]
            }
          ]
        },

        /* ---------- A1 / U7 ---------- */
        {
          id: "u7",
          title: "Opisywanie ludzi i rzeczy",
          icon: "🎨",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: przymiotniki i this/that",
              html: `
                <p>Przymiotnik stoi <b>przed</b> rzeczownikiem: <span class="say">a big house</span>, <span class="say">a nice day</span>.</p>
                <p><b>this</b> (to, blisko) / <b>that</b> (tamto, daleko); l.mn.: <b>these / those</b>.</p>
              `
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: przymiotniki",
              words: [
                { en: "big", pl: "duży", example: "a big dog" },
                { en: "small", pl: "mały", example: "a small room" },
                { en: "happy", pl: "szczęśliwy", example: "I'm happy." },
                { en: "tall", pl: "wysoki", example: "He is tall." },
                { en: "old", pl: "stary", example: "an old car" },
                { en: "beautiful", pl: "piękny", example: "a beautiful city" }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: opisywanie",
              theoryRef: "A1/u7/s1",
              questions: [
                { kind: "order", q: "Ułóż wyrażenie:", words: ["a", "big", "house"], answer: ["a", "big", "house"] },
                { kind: "choice", q: "___ books here are mine. (te, blisko)", options: ["This", "These", "Those"], answer: 1, theoryRef: "A1/u7/s1" },
                { kind: "match", pairs: [
                  { a: "big", b: "duży" },
                  { a: "small", b: "mały" },
                  { a: "happy", b: "szczęśliwy" }
                ]}
              ]
            }
          ]
        },

        /* ---------- A1 / U8 ---------- */
        {
          id: "u8",
          title: "W mieście — pytanie o drogę",
          icon: "🗺️",
          steps: [
            {
              id: "s1", type: "theory", title: "Teoria: there is / there are + kierunki",
              html: `
                <p><b>There is</b> (jest jeden) / <b>There are</b> (jest kilka): <span class="say">There is a bank.</span> / <span class="say">There are two shops.</span></p>
                <p>Kierunki: <span class="say">Turn left.</span> / <span class="say">Turn right.</span> / <span class="say">Go straight on.</span></p>
              `
            },
            {
              id: "s2", type: "vocab", title: "Słownictwo: miasto",
              words: [
                { en: "street", pl: "ulica", example: "It's on this street." },
                { en: "bank", pl: "bank", example: "There is a bank here." },
                { en: "left", pl: "w lewo", example: "Turn left." },
                { en: "right", pl: "w prawo", example: "Turn right." },
                { en: "straight on", pl: "prosto", example: "Go straight on." },
                { en: "near", pl: "blisko", example: "It's near the station." }
              ]
            },
            {
              id: "s3", type: "quiz", title: "Quiz: w mieście",
              theoryRef: "A1/u8/s1",
              questions: [
                { kind: "choice", q: "There ___ two parks in my town.", options: ["is", "are", "be"], answer: 1, theoryRef: "A1/u8/s1" },
                { kind: "gap", q: "Turn ___ at the bank. (left/right — wybierz left)", answer: "left", theoryRef: "A1/u8/s1" },
                { kind: "truefalse", q: "„There is three cars.” jest poprawne.", answer: false }
              ]
            },
            {
              id: "s4", type: "dialog", title: "Dialog: pytanie o drogę",
              theoryRef: "A1/u8/s1",
              recordLine: 1,
              lines: [
                { speaker: "Turysta", en: "Excuse me, where is the train station?", pl: "Przepraszam, gdzie jest dworzec?" },
                { speaker: "Ty",       en: "Go straight on and turn left. It's near the bank.", pl: "Idź prosto i skręć w lewo. Jest blisko banku." },
                { speaker: "Turysta", en: "Thank you very much!", pl: "Dziękuję bardzo!" },
                { speaker: "Ty",       en: "You're welcome. Have a nice day!", pl: "Proszę bardzo. Miłego dnia!" }
              ]
            },
            {
              id: "s5", type: "boss", title: "Sprawdzian końcowy A1",
              questions: [
                { kind: "choice", q: "Wybierz poprawne: She ___ from Spain.", options: ["am", "is", "are"], answer: 1 },
                { kind: "choice", q: "___ you like coffee?", options: ["Do", "Does", "Is"], answer: 0 },
                { kind: "gap", q: "There ___ a shop near my house. (is/are)", answer: "is" },
                { kind: "order", q: "Ułóż zdanie:", words: ["I", "go", "to", "school"], answer: ["I", "go", "to", "school"] },
                { kind: "match", pairs: [
                  { a: "left", b: "w lewo" },
                  { a: "right", b: "w prawo" },
                  { a: "street", b: "ulica" }
                ]}
              ]
            }
          ]
        }
      ]
    },

    /* ====================== POZIOMY A2–C2 (DO UZUPEŁNIENIA) ====================== */
    {
      id: "A2", name: "A2 — Pierwszy obóz", subtitle: "Otwarte ścieżki",
      altitude: "800 m n.p.m.", color: "#38bdf8", locked: true,
      units: [
        { id: "u1", title: "Past Simple — opowiadanie o przeszłości", icon: "📖", steps: [] },
        { id: "u2", title: "Present Continuous — co robię teraz", icon: "🏃", steps: [] },
        { id: "u3", title: "Plany: going to", icon: "📅", steps: [] },
        { id: "u4", title: "Zakupy i pieniądze", icon: "🛍️", steps: [] },
        { id: "u5", title: "Podróże i transport", icon: "✈️", steps: [] },
        { id: "u6", title: "Zdrowie i ciało", icon: "🩺", steps: [] },
        { id: "u7", title: "Opisywanie ludzi", icon: "🧑", steps: [] },
        { id: "u8", title: "Porównania — comparatives", icon: "⚖️", steps: [] }
      ]
    },
    {
      id: "B1", name: "B1 — Grań", subtitle: "Prawdziwa wspinaczka",
      altitude: "1600 m n.p.m.", color: "#a78bfa", locked: true,
      units: [
        { id: "u1", title: "Present Perfect", icon: "✅", steps: [] },
        { id: "u2", title: "Okresy warunkowe 0–1", icon: "🔀", steps: [] },
        { id: "u3", title: "Czasowniki modalne", icon: "🔑", steps: [] },
        { id: "u4", title: "Praca i kariera", icon: "💼", steps: [] },
        { id: "u5", title: "Technologia", icon: "💻", steps: [] },
        { id: "u6", title: "Środowisko", icon: "🌍", steps: [] },
        { id: "u7", title: "Kultura i media", icon: "🎬", steps: [] },
        { id: "u8", title: "Narracja i czasy przeszłe", icon: "🕰️", steps: [] }
      ]
    },
    {
      id: "B2", name: "B2 — Lodowiec", subtitle: "Pełne morze możliwości",
      altitude: "2800 m n.p.m.", color: "#f59e0b", locked: true,
      units: [
        { id: "u1", title: "Wszystkie czasy w zestawieniu", icon: "🧩", steps: [] },
        { id: "u2", title: "Strona bierna", icon: "🔄", steps: [] },
        { id: "u3", title: "Okresy warunkowe 2–3", icon: "🌀", steps: [] },
        { id: "u4", title: "Zdania względne", icon: "🔗", steps: [] },
        { id: "u5", title: "Phrasal verbs", icon: "⚡", steps: [] },
        { id: "u6", title: "Debata i argumentacja", icon: "🗣️", steps: [] }
      ]
    },
    {
      id: "C1", name: "C1 — Ściana szczytowa", subtitle: "Wysokie niebo",
      altitude: "3600 m n.p.m.", color: "#ef4444", locked: true,
      units: [
        { id: "u1", title: "Inwersja i emfaza", icon: "🎯", steps: [] },
        { id: "u2", title: "Cleft sentences", icon: "✂️", steps: [] },
        { id: "u3", title: "Zaawansowane kolokacje", icon: "🧬", steps: [] },
        { id: "u4", title: "Idiomy i rejestr", icon: "🎭", steps: [] }
      ]
    },
    {
      id: "C2", name: "C2 — Szczyt", subtitle: "Mistrzostwo",
      altitude: "4810 m n.p.m.", color: "#e879f9", locked: true,
      units: [
        { id: "u1", title: "Subtelności stylistyczne", icon: "🪶", steps: [] },
        { id: "u2", title: "Język literacki i humor", icon: "📚", steps: [] },
        { id: "u3", title: "Near-native fluency", icon: "🏔️", steps: [] }
      ]
    }
  ]
};
