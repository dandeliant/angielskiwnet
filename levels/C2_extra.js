/* C2 — dodatkowe tematy (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "C2"; });
  if (!lv) return;
  lv.units.push(

    /* ---------------- C2 / x1 — Niuanse modalności i hedging (gramatyka) ---------------- */
    {
      id: "x1", title: "Niuanse modalności i hedging — subtelne stopnie pewności", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zniuansowana modalność i hedging", html: `
          <p>Na poziomie C2 modalność przestaje być binarna — chodzi o precyzyjne kalibrowanie stopnia pewności, zobowiązania i grzeczności. Drobna zmiana czasownika modalnego potrafi przesunąć cały ton wypowiedzi.</p>
          <h3>Stopniowanie pewności epistemicznej</h3>
          <table class="t-table">
            <tr><th>Stopień</th><th>Wyrażenie</th><th>Niuans</th></tr>
            <tr><td>niemal pewne</td><td><span class="say">It can only be the case that…</span></td><td>dedukcja kategoryczna</td></tr>
            <tr><td>silne prawdopodobieństwo</td><td><span class="say">This may well prove decisive.</span></td><td>„may well” wzmacnia „may”</td></tr>
            <tr><td>ostrożne</td><td><span class="say">It might conceivably be argued that…</span></td><td>podwójny hedge</td></tr>
            <tr><td>dystansujące</td><td><span class="say">One could be forgiven for thinking…</span></td><td>uprzejma dezaprobata</td></tr>
          </table>
          <h3>Modalność w przeszłości</h3>
          <p><span class="say">She might have been delayed</span> (ostrożna spekulacja) kontra <span class="say">She must have been delayed</span> (pewna dedukcja) kontra <span class="say">She needn't have worried</span> (niepotrzebne działanie).</p>
          <h3>Hedging dla dyplomacji</h3>
          <p>Zamiast „You are wrong” natywny mówca powie: <span class="say">I'm not entirely convinced that's quite right.</span> Hedging łagodzi asercję i chroni twarz rozmówcy.</p>
          <p class="tip">💡 „Should” i „ought to” wyrażają oczekiwanie, nie pewność: <span class="say">The parcel should have arrived by now</span> sugeruje, że być może jednak nie dotarło.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: modalność i hedging", words: [
          { en: "may well", pl: "całkiem możliwe, że; bardzo prawdopodobne", example: "This may well be the most decisive vote of the decade." },
          { en: "to be forgiven for", pl: "mieć usprawiedliwienie, by (uprzejma krytyka)", example: "One could be forgiven for assuming the report was satirical." },
          { en: "conceivably", pl: "być może, hipotetycznie", example: "The treaty could conceivably collapse within a year." },
          { en: "to hedge", pl: "asekurować się, łagodzić asercję", example: "Politicians habitually hedge when pressed on costs." },
          { en: "ostensibly", pl: "rzekomo, na pozór", example: "The reform was ostensibly about efficiency, but really about control." },
          { en: "to err on the side of", pl: "dmuchać na zimne, skłaniać się ku ostrożności", example: "We should err on the side of caution here." },
          { en: "tentative", pl: "wstępny, ostrożny, niepewny", example: "She offered only a tentative endorsement of the plan." },
          { en: "needn't have", pl: "niepotrzebnie (coś zrobiono)", example: "You needn't have apologised — it was hardly your fault." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: modalność i hedging", theoryRef: "C2/x1/s1", questions: [
          { kind: "choice", q: "Które wyrażenie sygnalizuje najsilniejsze prawdopodobieństwo?", options: ["It might conceivably happen.", "This may well happen.", "It could possibly happen."], answer: 1, theoryRef: "C2/x1/s1" },
          { kind: "dropdown", q: "She ___ have been delayed — the deduction is virtually certain.", options: ["might", "must", "needn't"], answer: 1, theoryRef: "C2/x1/s1" },
          { kind: "transform", q: "Złagodź asercję przez hedging:", given: "You are wrong about the figures.", hint: "użyj „I'm not entirely convinced…”", answer: ["I'm not entirely convinced you're quite right about the figures.", "I'm not entirely convinced that's quite right."] },
          { kind: "truefalse", q: "„One could be forgiven for thinking…” to uprzejmy sposób na wyrażenie dezaprobaty.", answer: true },
          { kind: "gap", q: "We should ___ on the side of caution. (wpisz czasownik)", answer: "err", theoryRef: "C2/x1/s1" },
          { kind: "multi", q: "Które wyrażenia są markerami hedgingu? (zaznacz wszystkie)", options: ["ostensibly", "it can only be", "conceivably", "may well"], answers: [0, 2, 3] },
          { kind: "match", pairs: [{ a: "tentative", b: "ostrożny, niepewny" }, { a: "ostensibly", b: "rzekomo, na pozór" }, { a: "conceivably", b: "hipotetycznie" }, { a: "to hedge", b: "asekurować się" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: dyplomatyczny język raportu", intro: "Fragment ostrożnie sformułowanego raportu doradczego.", theoryRef: "C2/x1/s1", passage: `
          <p>The committee's findings, whilst ostensibly conclusive, warrant a measure of interpretive caution. The data may well point towards a systemic failing, yet alternative explanations cannot be wholly discounted at this stage. One could be forgiven for reading the executive summary as an unequivocal indictment; the underlying methodology, however, was considerably more tentative.</p>
          <p>It would appear that the contributing factors were manifold rather than singular. Had the sampling been broader, the conclusions might conceivably have differed. We would therefore counsel against any precipitous action, preferring instead to err on the side of measured deliberation. That said, inaction would be its own form of negligence. On balance, a provisional response, subject to later revision, seems the most defensible course.</p>` , questions: [
          { kind: "choice", q: "Jaki jest ogólny ton raportu?", options: ["Kategoryczny i pewny", "Ostrożny i zniuansowany", "Sarkastyczny"], answer: 1, theoryRef: "C2/x1/s1" },
          { kind: "truefalse", q: "Autor sugeruje, że podsumowanie wykonawcze brzmi bardziej zdecydowanie niż sama metodologia.", answer: true },
          { kind: "gap", q: "The authors counsel against any ___ action. (wpisz przymiotnik z tekstu)", answer: "precipitous" },
          { kind: "choice", q: "„Alternative explanations cannot be wholly discounted” oznacza, że autorzy:", options: ["Odrzucają inne wyjaśnienia", "Pozostawiają miejsce na inne wyjaśnienia", "Są pewni jednej przyczyny"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: ostrożna rada", theoryRef: "C2/x1/s1", recordLine: 1, lines: [
          { speaker: "Klient", en: "So you're saying the strategy will definitely succeed?", pl: "Czyli twierdzi Pan, że strategia na pewno się powiedzie?" },
          { speaker: "Ty", en: "I wouldn't go quite that far. It may well succeed, but I'd err on the side of caution. There are variables we cannot fully control.", pl: "Nie posunąłbym się aż tak daleko. Bardzo możliwe, że się powiedzie, ale skłaniałbym się ku ostrożności. Są zmienne, których nie da się w pełni kontrolować." },
          { speaker: "Klient", en: "But surely the projections are reliable?", pl: "Ale przecież prognozy są wiarygodne, prawda?" },
          { speaker: "Ty", en: "They're ostensibly robust, yet one could be forgiven for treating them as tentative. I'd recommend a provisional commitment, subject to review.", pl: "Na pozór są solidne, jednak miałoby się usprawiedliwienie, traktując je jako wstępne. Zaleciłbym wstępne zobowiązanie, podlegające rewizji." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: modalność i hedging", questions: [
          { kind: "choice", q: "„The parcel should have arrived by now” sugeruje, że:", options: ["Paczka na pewno dotarła", "Paczka być może jednak nie dotarła", "Paczka nigdy nie dotrze"], answer: 1 },
          { kind: "dropdown", q: "You ___ have apologised — it really wasn't your fault.", options: ["must", "needn't", "can't"], answer: 1 },
          { kind: "transform", q: "Przekształć w ostrożną spekulację o przeszłości:", given: "She was delayed by the strike.", hint: "użyj „might have been”", answer: ["She might have been delayed by the strike.", "She may have been delayed by the strike."] },
          { kind: "gap", q: "This ___ well be the turning point of the campaign. (wpisz modalny)", answer: ["may", "might"] },
          { kind: "truefalse", q: "Hedging w dyskursie dyplomatycznym chroni twarz rozmówcy i łagodzi asercję.", answer: true },
          { kind: "multi", q: "Które zdania wyrażają ostrożność (hedging)? (zaznacz wszystkie)", options: ["It could conceivably fail.", "It will absolutely fail.", "It may well succeed.", "One could be forgiven for doubting it."], answers: [0, 2, 3] }
        ]}
      ]
    },

    /* ---------------- C2 / x2 — Konotacja, rejestr i kolokacje (leksyka) ---------------- */
    {
      id: "x2", title: "Konotacja, rejestr i kolokacje — precyzja doboru słów", icon: "🎨",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: konotacja, rejestr i siła kolokacji", html: `
          <p>Słowa bliskoznaczne rzadko są wymienne. Różni je <b>konotacja</b> (zabarwienie emocjonalne), <b>rejestr</b> (poziom formalności) oraz to, z jakimi innymi słowami się <b>kolokują</b>.</p>
          <h3>Rejestr: te same treści, różne słowa</h3>
          <table class="t-table">
            <tr><th>Potoczny</th><th>Neutralny</th><th>Formalny</th></tr>
            <tr><td>get</td><td>obtain</td><td>procure</td></tr>
            <tr><td>kids</td><td>children</td><td>offspring / minors</td></tr>
            <tr><td>buy</td><td>purchase</td><td>acquire</td></tr>
            <tr><td>ask for</td><td>request</td><td>solicit</td></tr>
          </table>
          <h3>Konotacja: pozytywna kontra negatywna</h3>
          <p><span class="say">a frugal manager</span> (oszczędny — pochwała) kontra <span class="say">a stingy manager</span> (skąpy — zniewaga). Denotacja niemal identyczna; konotacja przeciwna.</p>
          <h3>Siła kolokacji</h3>
          <p>Natywny mówca mówi <span class="say">a heavy smoker</span>, nie „a strong smoker”; <span class="say">strong coffee</span>, nie „heavy coffee”; <span class="say">a narrow escape</span>, nie „a thin escape”.</p>
          <p class="tip">💡 Tezaurus pokazuje synonimy, lecz nie ich konotacji ani rejestru — używanie go w ciemno to klasyczna pułapka, która zdradza nienatywnego mówcę.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: rejestr i konotacja", words: [
          { en: "frugal", pl: "oszczędny, gospodarny (poz.)", example: "Her frugal habits allowed her to retire early." },
          { en: "stingy", pl: "skąpy, sknerowaty (neg.)", example: "He was too stingy to tip the waiter." },
          { en: "to procure", pl: "pozyskać, zaopatrzyć się (formal)", example: "The agency procured the equipment through a tender." },
          { en: "lavish", pl: "wystawny, hojny (nacechowane)", example: "They threw a lavish reception for two hundred guests." },
          { en: "childlike", pl: "dziecięcy (poz: niewinny)", example: "She gazed at the fireworks with childlike wonder." },
          { en: "childish", pl: "dziecinny (neg: niedojrzały)", example: "His childish sulking embarrassed everyone." },
          { en: "to solicit", pl: "zabiegać o, pozyskiwać (formal)", example: "The charity solicited donations from local firms." },
          { en: "understated", pl: "powściągliwy, dyskretny (poz.)", example: "The decor was elegant and understated." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: konotacja i rejestr", theoryRef: "C2/x2/s1", questions: [
          { kind: "choice", q: "Które słowo niesie pozytywną konotację?", options: ["stingy", "frugal", "miserly"], answer: 1, theoryRef: "C2/x2/s1" },
          { kind: "dropdown", q: "He's a ___ smoker — twenty a day.", options: ["strong", "heavy", "big"], answer: 1, theoryRef: "C2/x2/s1" },
          { kind: "categorize", q: "Przyporządkuj słowa do rejestru:", cats: ["Potoczny", "Formalny"], items: [{ t: "kids", cat: 0 }, { t: "procure", cat: 1 }, { t: "get", cat: 0 }, { t: "solicit", cat: 1 }, { t: "buy", cat: 0 }, { t: "acquire", cat: 1 }] },
          { kind: "truefalse", q: "„Childlike” ma pozytywne, a „childish” negatywne zabarwienie.", answer: true },
          { kind: "gap", q: "She admired his ___ coffee — strong and bitter. (poprawna kolokacja)", answer: "strong" },
          { kind: "multi", q: "Które kolokacje są poprawne w angielskim natywnym? (zaznacz wszystkie)", options: ["a narrow escape", "a thin escape", "strong coffee", "heavy coffee"], answers: [0, 2] },
          { kind: "match", pairs: [{ a: "procure", b: "pozyskać (formal)" }, { a: "lavish", b: "wystawny" }, { a: "understated", b: "powściągliwy" }, { a: "stingy", b: "skąpy (neg.)" }] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: recenzja restauracji", audio: "The bistro presents itself as understated rather than austere. The portions are modest, though never stingy, and the wine list, whilst far from lavish, has been chosen with evident discernment. Service is courteous and unhurried. It is, in short, a frugal diner's delight that nonetheless feels quietly indulgent.", instructions: "Wysłuchaj recenzji i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "How does the reviewer describe the bistro's style?", options: ["Lavish and ostentatious", "Understated rather than austere", "Cheap and careless"], answer: 1 },
          { kind: "truefalse", q: "The reviewer calls the portions stingy.", answer: false },
          { kind: "dictation", audio: "Service is courteous and unhurried.", answer: "Service is courteous and unhurried." },
          { kind: "gap", q: "It is a ___ diner's delight. (wpisz przymiotnik, który usłyszałeś)", answer: "frugal" }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: dobór nacechowanego słowa", prompts: [
          { en: "The decor was tastefully understated, never lavish or ostentatious.", pl: "Wystrój był ze smakiem powściągliwy, nigdy wystawny ani ostentacyjny." },
          { en: "I'd call her frugal rather than stingy — she spends wisely, not reluctantly.", pl: "Nazwałbym ją raczej oszczędną niż skąpą — wydaje rozsądnie, nie niechętnie." },
          { en: "The firm procured the materials through an open and transparent tender.", pl: "Firma pozyskała materiały w drodze otwartego i przejrzystego przetargu." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: konotacja, rejestr, kolokacje", questions: [
          { kind: "choice", q: "Najbardziej formalny odpowiednik „buy” to:", options: ["get", "purchase", "acquire"], answer: 2 },
          { kind: "categorize", q: "Pozytywna czy negatywna konotacja?", cats: ["Pozytywna", "Negatywna"], items: [{ t: "frugal", cat: 0 }, { t: "stingy", cat: 1 }, { t: "childlike", cat: 0 }, { t: "childish", cat: 1 }, { t: "understated", cat: 0 }] },
          { kind: "dropdown", q: "It was a ___ escape — the lorry missed us by inches.", options: ["thin", "narrow", "slim"], answer: 1 },
          { kind: "transform", q: "Zamień na rejestr formalny:", given: "The charity asked local firms for money.", hint: "użyj „solicited”", answer: ["The charity solicited donations from local firms.", "The charity solicited funds from local firms."] },
          { kind: "truefalse", q: "Tezaurus zawsze rzetelnie oddaje konotację i rejestr synonimów.", answer: false },
          { kind: "match", pairs: [{ a: "frugal", b: "oszczędny (poz.)" }, { a: "lavish", b: "wystawny" }, { a: "solicit", b: "zabiegać o (formal)" } ] }
        ]}
      ]
    },

    /* ---------------- C2 / x3 — Elipsa i substytucja (gramatyka) ---------------- */
    {
      id: "x3", title: "Elipsa i substytucja — spójność i ekonomia języka", icon: "✂️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: elipsa i substytucja jako środki spójności", html: `
          <p>Aby uniknąć powtórzeń, angielski stosuje <b>elipsę</b> (pominięcie elementu, który da się odtworzyć z kontekstu) oraz <b>substytucję</b> (zastąpienie elementu słowem-zastępnikiem). Oba są filarami naturalnej spójności (cohesion).</p>
          <h3>Elipsa</h3>
          <p>Pominięcie po spójniku: <span class="say">She can sing and he can dance</span> → <span class="say">She can sing and he, dance.</span></p>
          <p>Elipsa pomocnicza: <span class="say">Are you coming? — I might (come).</span></p>
          <p>Elipsa po „to”: <span class="say">I didn't want to go, but I had to (go).</span></p>
          <h3>Substytucja</h3>
          <table class="t-table">
            <tr><th>Typ</th><th>Zastępnik</th><th>Przykład</th></tr>
            <tr><td>rzeczownikowa</td><td>one / ones</td><td><span class="say">The red car or the blue one?</span></td></tr>
            <tr><td>czasownikowa</td><td>do / do so</td><td><span class="say">She left, and so did he.</span></td></tr>
            <tr><td>zdaniowa</td><td>so / not</td><td><span class="say">Will it rain? — I hope so. / I think not.</span></td></tr>
          </table>
          <h3>Subtelności</h3>
          <p><span class="say">I expected him to apologise, and so he did</span> — substytucja „so + auxiliary” potwierdza całe zdanie.</p>
          <p class="tip">💡 „So do I” (zgoda twierdząca) kontra „Neither do I / Nor do I” (zgoda przecząca) — natywni mówcy dobierają je odruchowo do polarności zdania.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: spójność i odniesienie", words: [
          { en: "ellipsis", pl: "elipsa (pominięcie odtwarzalnego elementu)", example: "Ellipsis avoids clumsy repetition in coordinated clauses." },
          { en: "substitution", pl: "substytucja (zastąpienie słowem-zastępnikiem)", example: "English uses 'one' for nominal substitution." },
          { en: "cohesion", pl: "spójność (formalne wiązanie tekstu)", example: "Pronouns and conjunctions create cohesion." },
          { en: "anaphoric reference", pl: "odniesienie anaforyczne (wstecz)", example: "'It' here is an anaphoric reference to the earlier noun." },
          { en: "antecedent", pl: "poprzednik (do którego odsyła zaimek)", example: "The pronoun must agree with its antecedent." },
          { en: "to dispense with", pl: "obyć się bez, pominąć", example: "In casual speech we dispense with the subject pronoun." },
          { en: "redundant", pl: "zbędny, nadmiarowy", example: "Repeating the verb here would be redundant." },
          { en: "verb phrase", pl: "fraza czasownikowa", example: "'Do so' substitutes for an entire verb phrase." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: elipsa i substytucja", theoryRef: "C2/x3/s1", questions: [
          { kind: "dropdown", q: "I haven't finished the report, but I will ___ by Friday.", options: ["finish it", "do", "—"], answer: 2, theoryRef: "C2/x3/s1" },
          { kind: "choice", q: "„Will it rain tomorrow? — I hope ___.” Co wstawić?", options: ["so", "it", "that"], answer: 0, theoryRef: "C2/x3/s1" },
          { kind: "transform", q: "Usuń powtórzenie przez substytucję:", given: "I prefer the leather chairs, not the fabric chairs.", hint: "zastąp drugi rzeczownik przez „ones”", answer: ["I prefer the leather chairs, not the fabric ones.", "I prefer the leather ones, not the fabric ones."] },
          { kind: "truefalse", q: "„Neither do I” to substytucja używana dla zgody ze zdaniem przeczącym.", answer: true },
          { kind: "gap", q: "She passed the exam, and so ___ I. (wpisz czasownik posiłkowy)", answer: "did" },
          { kind: "order", q: "Ułóż zdanie z substytucją:", words: ["He", "promised", "to", "help,", "and", "so", "he", "did"], answer: ["He", "promised", "to", "help,", "and", "so", "he", "did"] },
          { kind: "multi", q: "Które zdania zawierają elipsę lub substytucję? (zaznacz wszystkie)", options: ["I can swim and she can too.", "The dog barked at the postman.", "Are you ready? — I think so.", "She wanted to leave but couldn't."], answers: [0, 2, 3] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: spójny esej o przekładzie", intro: "Fragment eseju, w którym elipsa i substytucja zapewniają płynność.", theoryRef: "C2/x3/s1", passage: `
          <p>Translation, it is often said, is impossible; and yet translators persist in doing so daily. The original resists, the target language yields only reluctantly, and something is invariably lost. But something is gained too — or so the more optimistic practitioners would have us believe. A faithful rendering pleases the purist; a fluent one, the general reader. Few translations manage to be both, and the truly great ones rarely even try.</p>
          <p>Some prize fidelity above all; others, readability. The debate is ancient and, one suspects, perennial. Where the philologist sees betrayal, the stylist sees liberation. Neither is wholly right; nor, for that matter, wholly wrong. The art lies in the compromise, and the best translators have always known as much.</p>` , questions: [
          { kind: "choice", q: "W zdaniu „translators persist in doing so”, „doing so” zastępuje:", options: ["translating", "reading", "writing"], answer: 0, theoryRef: "C2/x3/s1" },
          { kind: "truefalse", q: "„A fluent one” to substytucja, gdzie „one” zastępuje „rendering / translation”.", answer: true },
          { kind: "choice", q: "„Neither is wholly right; nor… wholly wrong” pokazuje:", options: ["substytucję przeczącą dla obu stron sporu", "elipsę podmiotu", "metaforę"], answer: 0 },
          { kind: "gap", q: "The best translators have always known as ___. (uzupełnij substytucję)", answer: "much" }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: zwięzłe odpowiedzi", theoryRef: "C2/x3/s1", recordLine: 1, lines: [
          { speaker: "Kolega", en: "I'm planning to submit the proposal early. Are you?", pl: "Planuję złożyć propozycję wcześniej. A ty?" },
          { speaker: "Ty", en: "I'd like to, but I'm not sure I can. If you do, though, I'll try to as well.", pl: "Chciałbym, ale nie jestem pewien, czy zdążę. Jeśli ty to zrobisz, to ja też spróbuję." },
          { speaker: "Kolega", en: "Do you think the committee will approve it?", pl: "Myślisz, że komisja ją zatwierdzi?" },
          { speaker: "Ty", en: "I rather hope so. They approved the last one, and so they should this.", pl: "Raczej mam taką nadzieję. Zatwierdzili poprzednią, więc powinni i tę." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: elipsa i substytucja", questions: [
          { kind: "dropdown", q: "He said he would call, and ___.", options: ["so he did", "he did so call it", "he called the call"], answer: 0 },
          { kind: "transform", q: "Skróć przez elipsę:", given: "She can play the violin and her brother can play the cello.", hint: "pomiń powtórzony czasownik", answer: ["She can play the violin and her brother the cello.", "She can play the violin, her brother the cello."] },
          { kind: "gap", q: "I didn't enjoy the film. — ___ did I. (zgoda przecząca)", answer: ["Neither", "Nor"] },
          { kind: "truefalse", q: "Substytucja „one/ones” dotyczy fraz czasownikowych.", answer: false },
          { kind: "multi", q: "Które są zastępnikami (substytutami) w angielskim? (zaznacz wszystkie)", options: ["one", "do so", "the", "so"], answers: [0, 1, 3] },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "expected", "rain,", "and", "so", "it", "proved"], answer: ["I", "expected", "rain,", "and", "so", "it", "proved"] }
        ]}
      ]
    },

    /* ---------------- C2 / x4 — Język literacki i figuratywny (leksyka) ---------------- */
    {
      id: "x4", title: "Język literacki i figuratywny — metafora, idiom, ironia", icon: "📖",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: znaczenie figuratywne i jego interpretacja", html: `
          <p>Znaczenie figuratywne odbiega od dosłownego, by wywołać efekt poznawczy lub emocjonalny. Jego trafna interpretacja — i tworzenie — to znak prawdziwego mistrzostwa leksykalnego.</p>
          <h3>Metafory konwencjonalne kontra nowatorskie</h3>
          <p><span class="say">He's drowning in paperwork</span> (konwencjonalna, niemal martwa) kontra <span class="say">Her laughter was a struck match in a dark cellar</span> (nowatorska, literacka).</p>
          <h3>Idiomy nieprzejrzyste</h3>
          <p>Znaczenia nie da się wywnioskować z części składowych: <span class="say">to bite the bullet</span> (zacisnąć zęby), <span class="say">to throw in the towel</span> (poddać się), <span class="say">a red herring</span> (fałszywy trop).</p>
          <h3>Ironia i jej rejestry</h3>
          <p><b>Werbalna:</b> mówimy przeciwieństwo tego, co myślimy. <b>Dramatyczna:</b> czytelnik wie więcej niż bohater. <b>Sytuacyjna:</b> wynik jest odwrotny do oczekiwań — <span class="say">a fire station burning down</span>.</p>
          <h3>Metonimia i synekdocha</h3>
          <p><span class="say">The Crown</span> = monarchia, <span class="say">Downing Street announced…</span> = rząd. Część lub atrybut reprezentuje całość.</p>
          <p class="tip">💡 Idiom wpleciony w mowę musi pasować rejestrem — „throw in the towel” na sali sądowej zabrzmi rażąco potocznie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: figury i wyrażenia figuratywne", words: [
          { en: "to bite the bullet", pl: "zacisnąć zęby, zdobyć się na trudną decyzję", example: "We finally bit the bullet and replaced the ageing system." },
          { en: "a red herring", pl: "fałszywy trop, mylący wątek", example: "The subplot turned out to be a red herring." },
          { en: "metonymy", pl: "metonimia (zastąpienie pojęciem powiązanym)", example: "'The Crown' is a metonymy for the monarchy." },
          { en: "dramatic irony", pl: "ironia dramatyczna", example: "Dramatic irony lets the audience foresee the hero's fate." },
          { en: "to read between the lines", pl: "czytać między wierszami", example: "Read between the lines and her resentment is unmistakable." },
          { en: "a double-edged sword", pl: "broń obosieczna", example: "Fame proved a double-edged sword for the young author." },
          { en: "to clutch at straws", pl: "chwytać się brzytwy, łapać się rozpaczliwie", example: "By then he was simply clutching at straws." },
          { en: "evocative", pl: "sugestywny, wywołujący skojarzenia", example: "Her prose is richly evocative of post-war London." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: język figuratywny", theoryRef: "C2/x4/s1", questions: [
          { kind: "choice", q: "„A fire station burning down” to przykład ironii:", options: ["werbalnej", "sytuacyjnej", "dramatycznej"], answer: 1, theoryRef: "C2/x4/s1" },
          { kind: "choice", q: "„The Crown approved the bill” — „The Crown” to:", options: ["metafora", "metonimia", "simile"], answer: 1, theoryRef: "C2/x4/s1" },
          { kind: "match", pairs: [{ a: "to bite the bullet", b: "zacisnąć zęby" }, { a: "a red herring", b: "fałszywy trop" }, { a: "a double-edged sword", b: "broń obosieczna" }, { a: "to clutch at straws", b: "chwytać się brzytwy" }] },
          { kind: "truefalse", q: "Idiom nieprzejrzysty to taki, którego znaczenia nie da się wywieść z poszczególnych słów.", answer: true },
          { kind: "gap", q: "Reluctantly, the board decided to bite the ___. (dokończ idiom)", answer: "bullet" },
          { kind: "dropdown", q: "When the audience knows what the hero does not, it is ___ irony.", options: ["verbal", "dramatic", "situational"], answer: 1 },
          { kind: "truefalse", q: "„To read between the lines” znaczy czytać dosłownie, słowo po słowie.", answer: false }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: analiza fragmentu prozy", intro: "Krótki fragment literacki, a następnie jego interpretacja.", theoryRef: "C2/x4/s1", passage: `
          <p>The old lighthouse stood sentinel over a sea that had long since forgotten it. Once, sailors had clutched at its beam like a lifeline; now the bulb was dark, the keeper gone, and the gulls alone kept vigil. It was, the villagers liked to say, a monument to obsolescence — though they said it fondly, as one speaks of a relative grown gently senile.</p>
          <p>There is irony here, of course, and not the cheap variety. The structure built to guide ships had itself become a hazard, a jagged silhouette mistaken in fog for cliffs. What once saved now imperilled. The metaphor scarcely needs labouring: every safeguard, the author seems to whisper, harbours the seed of the very danger it was raised against.</p>` , questions: [
          { kind: "choice", q: "Jaki rodzaj ironii dominuje we fragmencie?", options: ["Werbalna", "Sytuacyjna", "Brak ironii"], answer: 1, theoryRef: "C2/x4/s1" },
          { kind: "truefalse", q: "Latarnia, zbudowana, by chronić statki, sama stała się zagrożeniem.", answer: true },
          { kind: "gap", q: "Sailors had clutched at its beam like a ___. (wpisz rzeczownik z tekstu)", answer: "lifeline" },
          { kind: "choice", q: "„A monument to obsolescence” to przede wszystkim:", options: ["dosłowny opis pomnika", "metafora przemijania i bezużyteczności", "idiom o budownictwie"], answer: 1 }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: idiom i metafora w kontekście", prompts: [
          { en: "Public scrutiny is a double-edged sword: it disciplines power yet can paralyse it.", pl: "Publiczna kontrola to broń obosieczna: dyscyplinuje władzę, lecz potrafi ją sparaliżować." },
          { en: "Eventually we had to bite the bullet and admit the strategy had failed.", pl: "W końcu musieliśmy zacisnąć zęby i przyznać, że strategia zawiodła." },
          { en: "His confident tone was a red herring; read between the lines and you'd sense the panic.", pl: "Jego pewny ton był fałszywym tropem; czytając między wierszami, wyczuwało się panikę." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: język literacki i figuratywny", questions: [
          { kind: "choice", q: "„Downing Street denied the rumours” — figura to:", options: ["metonimia", "simile", "hiperbola"], answer: 0 },
          { kind: "transform", q: "Zastąp dosłowne sformułowanie idiomem:", given: "After much hesitation, we finally made the hard decision.", hint: "użyj „bit the bullet”", answer: ["After much hesitation, we finally bit the bullet.", "After much hesitation, we bit the bullet."] },
          { kind: "match", pairs: [{ a: "metonymy", b: "metonimia" }, { a: "dramatic irony", b: "ironia dramatyczna" }, { a: "evocative", b: "sugestywny" }] },
          { kind: "truefalse", q: "Ironia sytuacyjna polega na rozdźwięku między oczekiwanym a faktycznym wynikiem.", answer: true },
          { kind: "dropdown", q: "Desperate for evidence, the prosecutor was clutching at ___.", options: ["straws", "towels", "bullets"], answer: 0 },
          { kind: "gap", q: "Her memoir is intensely ___ of childhood summers. (wpisz przymiotnik)", answer: "evocative" }
        ]}
      ]
    },

    /* ---------------- C2 / x5 — Markery dyskursu i spójność (gramatyka) ---------------- */
    {
      id: "x5", title: "Zaawansowane markery dyskursu i spójność tekstu", icon: "🔗",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: markery dyskursu i architektura spójnego tekstu", html: `
          <p>Spójny tekst nie polega na samych zdaniach, lecz na sieci powiązań między nimi. Markery dyskursu sygnalizują czytelnikowi relacje logiczne, dzięki czemu argument prowadzi go za rękę.</p>
          <h3>Subtelne markery kontrastu</h3>
          <table class="t-table">
            <tr><th>Marker</th><th>Niuans</th></tr>
            <tr><td><span class="say">Granted, …</span></td><td>ustępstwo przed kontrargumentem</td></tr>
            <tr><td><span class="say">Then again, …</span></td><td>nagła zmiana perspektywy</td></tr>
            <tr><td><span class="say">If anything, …</span></td><td>wzmocnienie wbrew oczekiwaniu</td></tr>
            <tr><td><span class="say">For all that, …</span></td><td>„mimo wszystko”</td></tr>
          </table>
          <h3>Markery porządkujące i sygnalizujące</h3>
          <p><span class="say">To begin with… / In passing… / Incidentally… / On a separate note…</span></p>
          <p><span class="say">More to the point… / That is to say… / By way of illustration…</span></p>
          <h3>Spójność przez odniesienia</h3>
          <p>Odniesienia <b>kataforyczne</b> (wprzód): <span class="say">Consider this: the data was fabricated.</span> Odniesienia <b>anaforyczne</b> (wstecz): <span class="say">The data was fabricated; this shocked everyone.</span></p>
          <p class="tip">💡 „However” na początku zdania sygnalizuje kontrast z całym poprzednim zdaniem; wtrącone w środku — kontrast z konkretnym elementem. Pozycja niesie znaczenie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: markery i spójność", words: [
          { en: "if anything", pl: "jeśli już, wręcz przeciwnie (wzmocnienie)", example: "The delay didn't help; if anything, it made matters worse." },
          { en: "then again", pl: "z drugiej strony, choć z kolei", example: "I'd love to go; then again, I really ought to rest." },
          { en: "for all that", pl: "mimo wszystko, mimo to", example: "He was difficult; for all that, we admired him." },
          { en: "incidentally", pl: "nawiasem mówiąc, przy okazji", example: "Incidentally, the deadline has been moved." },
          { en: "by way of illustration", pl: "tytułem przykładu", example: "By way of illustration, consider the 2008 crisis." },
          { en: "cataphoric", pl: "kataforyczny (odsyłający wprzód)", example: "A cataphoric pronoun precedes its referent." },
          { en: "to that end", pl: "w tym celu", example: "We must cut costs; to that end, several measures are proposed." },
          { en: "more to the point", pl: "co ważniejsze, ściślej mówiąc", example: "It's expensive and, more to the point, unnecessary." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: markery dyskursu", theoryRef: "C2/x5/s1", questions: [
          { kind: "dropdown", q: "The reform achieved little; ___, it deepened the deficit.", options: ["if anything", "to that end", "by way of illustration"], answer: 0, theoryRef: "C2/x5/s1" },
          { kind: "choice", q: "Które wyrażenie wprowadza przykład?", options: ["then again", "by way of illustration", "for all that"], answer: 1, theoryRef: "C2/x5/s1" },
          { kind: "transform", q: "Połącz w spójne zdanie z markerem ustępstwa:", given: "The plan is costly. It may still be worthwhile.", hint: "rozpocznij od „Granted,”", answer: ["Granted, the plan is costly, but it may still be worthwhile.", "Granted, the plan is costly; it may still be worthwhile."] },
          { kind: "truefalse", q: "Odniesienie kataforyczne odsyła do elementu pojawiającego się później.", answer: true },
          { kind: "gap", q: "We aim to cut waste; to that ___, three reforms are proposed. (dokończ frazę)", answer: "end" },
          { kind: "multi", q: "Które markery sygnalizują kontrast lub zmianę perspektywy? (zaznacz wszystkie)", options: ["then again", "to that end", "for all that", "if anything"], answers: [0, 2, 3] },
          { kind: "match", pairs: [{ a: "incidentally", b: "nawiasem mówiąc" }, { a: "to that end", b: "w tym celu" }, { a: "more to the point", b: "co ważniejsze" }, { a: "then again", b: "z drugiej strony" }] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: wykład o spójności tekstu", audio: "Cohesion, as I see it, is the connective tissue of any argument. To begin with, we have reference: pronouns reaching back to earlier nouns. More to the point, we have discourse markers, which signal whether a sentence confirms, contradicts, or qualifies what came before. Consider 'however'. Placed initially, it contrasts with the whole previous sentence; tucked mid-clause, it qualifies a single element. Incidentally, this positional sensitivity trips up even advanced learners. For all that, mastery comes with attentive reading.", instructions: "Wysłuchaj fragmentu wykładu i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "How does the speaker describe cohesion?", options: ["The skeleton of grammar", "The connective tissue of an argument", "A decorative flourish"], answer: 1 },
          { kind: "truefalse", q: "The speaker says the position of 'however' changes its meaning.", answer: true },
          { kind: "dictation", audio: "Cohesion is the connective tissue of any argument.", answer: "Cohesion is the connective tissue of any argument." },
          { kind: "gap", q: "This positional sensitivity trips up even ___ learners. (wpisz przymiotnik)", answer: "advanced" }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: spójna wymiana zdań", theoryRef: "C2/x5/s1", recordLine: 3, lines: [
          { speaker: "Recenzent", en: "Your essay is well researched, but the paragraphs feel disconnected.", pl: "Twój esej jest dobrze zbadany, ale akapity wydają się niepowiązane." },
          { speaker: "Ty", en: "I take the point. I leaned on content and neglected the connective tissue between ideas.", pl: "Przyjmuję uwagę. Postawiłem na treść, a zaniedbałem spoiwo między myślami." },
          { speaker: "Recenzent", en: "Exactly. A few well-placed discourse markers would guide the reader.", pl: "Właśnie. Kilka trafnie umieszczonych markerów dyskursu poprowadziłoby czytelnika." },
          { speaker: "Ty", en: "Granted, I overused 'however'. To that end, I'll vary my signposting and tighten each transition.", pl: "Trzeba przyznać, że nadużyłem „however”. W tym celu zróżnicuję sygnały i dopnę każde przejście." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: markery i spójność", questions: [
          { kind: "dropdown", q: "The budget was tight; ___, the team delivered on time.", options: ["for all that", "by way of illustration", "incidentally"], answer: 0 },
          { kind: "choice", q: "„Consider this: the figures were doctored.” — „this” jest tu odniesieniem:", options: ["anaforycznym", "kataforycznym", "żadnym"], answer: 1 },
          { kind: "transform", q: "Wzmocnij wbrew oczekiwaniu, używając markera:", given: "The apology did not calm them. It angered them more.", hint: "użyj „if anything”", answer: ["The apology did not calm them; if anything, it angered them more.", "If anything, the apology angered them more."] },
          { kind: "truefalse", q: "Pozycja słowa „however” w zdaniu może zmieniać zakres kontrastu.", answer: true },
          { kind: "match", pairs: [{ a: "if anything", b: "wręcz przeciwnie" }, { a: "for all that", b: "mimo wszystko" }, { a: "incidentally", b: "nawiasem mówiąc" }] },
          { kind: "multi", q: "Które wyrażenia porządkują lub sygnalizują dygresję? (zaznacz wszystkie)", options: ["to begin with", "incidentally", "on a separate note", "drowning in"], answers: [0, 1, 2] }
        ]}
      ]
    },

    /* ---------------- C2 / x6 — Mistrzostwo idiomatyczne i specjalistyczne (leksyka) ---------------- */
    {
      id: "x6", title: "Mistrzostwo idiomatyczne i specjalistyczne — niuans near-native", icon: "🏆",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: idiomatyczność, niuans i kompetencja near-native", html: `
          <p>Ostatni szczyt to nie pojedyncze słowa, lecz <b>idiomatyczność</b> — wyczucie, które sformułowanie zabrzmi naturalnie w danym kontekście. Tu rozstrzygają subtelne różnice, których słowniki ledwie dotykają.</p>
          <h3>Rozróżnienia, które robią różnicę</h3>
          <table class="t-table">
            <tr><th>Para</th><th>Niuans</th></tr>
            <tr><td><span class="say">historic / historical</span></td><td>doniosły / dotyczący historii</td></tr>
            <tr><td><span class="say">continual / continuous</span></td><td>powtarzający się / nieprzerwany</td></tr>
            <tr><td><span class="say">disinterested / uninterested</span></td><td>bezstronny / niezainteresowany</td></tr>
            <tr><td><span class="say">comprise / compose</span></td><td>składać się z / tworzyć</td></tr>
          </table>
          <h3>Idiomy specjalistyczne i biznesowe</h3>
          <p><span class="say">to move the goalposts</span> (zmieniać reguły w trakcie gry), <span class="say">to touch base</span> (skontaktować się), <span class="say">to think outside the box</span> (myśleć niekonwencjonalnie), <span class="say">a ballpark figure</span> (szacunek z grubsza).</p>
          <h3>Wyrażenia łacińskie w angielskim formalnym</h3>
          <p><span class="say">de facto</span> (faktycznie), <span class="say">bona fide</span> (autentyczny, w dobrej wierze), <span class="say">ad hoc</span> (doraźny), <span class="say">caveat emptor</span> (niech kupujący się strzeże).</p>
          <p class="tip">💡 Niuans bywa kluczowy zawodowo: „a disinterested judge” to pochwała (bezstronny), a „an uninterested judge” to zarzut (znudzony, obojętny).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: niuanse i idiomy mistrzowskie", words: [
          { en: "to move the goalposts", pl: "zmieniać reguły gry w trakcie", example: "Just as we agreed terms, they moved the goalposts." },
          { en: "disinterested", pl: "bezstronny, obiektywny", example: "We need a disinterested arbitrator, not a partisan one." },
          { en: "de facto", pl: "faktyczny, w praktyce (łac.)", example: "She became the de facto leader of the movement." },
          { en: "bona fide", pl: "autentyczny, w dobrej wierze (łac.)", example: "Only bona fide students may use the library." },
          { en: "a ballpark figure", pl: "szacunek z grubsza, orientacyjna kwota", example: "Give me a ballpark figure before we commit." },
          { en: "to comprise", pl: "składać się z, obejmować", example: "The federation comprises twelve member states." },
          { en: "continual", pl: "ustawiczny, powtarzający się", example: "The continual interruptions derailed the meeting." },
          { en: "ad hoc", pl: "doraźny, na potrzebę chwili (łac.)", example: "An ad hoc committee was convened overnight." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: niuanse i idiomy mistrzowskie", theoryRef: "C2/x6/s1", questions: [
          { kind: "choice", q: "Bezstronny sędzia to sędzia:", options: ["uninterested", "disinterested", "interested"], answer: 1, theoryRef: "C2/x6/s1" },
          { kind: "dropdown", q: "The rain was ___ — it didn't stop for three days.", options: ["continual", "continuous", "continued"], answer: 1, theoryRef: "C2/x6/s1" },
          { kind: "categorize", q: "Pogrupuj wyrażenia:", cats: ["Idiom biznesowy", "Wyrażenie łacińskie"], items: [{ t: "to touch base", cat: 0 }, { t: "de facto", cat: 1 }, { t: "a ballpark figure", cat: 0 }, { t: "ad hoc", cat: 1 }, { t: "to move the goalposts", cat: 0 }, { t: "bona fide", cat: 1 }] },
          { kind: "truefalse", q: "„Historic” znaczy doniosły, a „historical” — dotyczący historii.", answer: true },
          { kind: "gap", q: "She was the ___ facto leader long before the official vote. (wpisz łacińskie słowo)", answer: "de" },
          { kind: "multi", q: "Które idiomy oznaczają coś z dziedziny szacunków lub niekonwencjonalności? (zaznacz wszystkie)", options: ["a ballpark figure", "to think outside the box", "to move the goalposts", "to touch base"], answers: [0, 1] },
          { kind: "match", pairs: [{ a: "bona fide", b: "autentyczny" }, { a: "ad hoc", b: "doraźny" }, { a: "to comprise", b: "składać się z" }, { a: "to move the goalposts", b: "zmieniać reguły gry" }] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: niuans w komunikacie korporacyjnym", intro: "Komunikat, w którym precyzja niuansu jest celowa.", theoryRef: "C2/x6/s1", passage: `
          <p>The board wishes to clarify a matter that has occasioned continual, if not continuous, speculation. Contrary to certain reports, the appointment of the interim chief executive was a bona fide measure, not an ad hoc improvisation. She is, in practice, the de facto head of operations, and her mandate is unambiguous.</p>
          <p>We acknowledge that earlier guidance shifted; critics will say we moved the goalposts. We would counter that the figures we issued were always ballpark estimates, explicitly provisional. A disinterested observer, reviewing the minutes, would find no concealment — merely the ordinary turbulence of a company in transition. We trust this restores a measure of confidence.</p>` , questions: [
          { kind: "choice", q: "Jak komunikat opisuje powołanie tymczasowego dyrektora?", options: ["Jako doraźną improwizację", "Jako autentyczny, przemyślany krok", "Jako pomyłkę"], answer: 1, theoryRef: "C2/x6/s1" },
          { kind: "truefalse", q: "Zarząd przyznaje, że wcześniejsze wytyczne uległy zmianie.", answer: true },
          { kind: "gap", q: "She is the ___ facto head of operations. (wpisz łacińskie słowo)", answer: "de" },
          { kind: "choice", q: "„A disinterested observer” w tekście oznacza obserwatora:", options: ["znudzonego i obojętnego", "bezstronnego", "zaangażowanego po stronie krytyków"], answer: 1 }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: precyzyjny niuans", prompts: [
          { en: "We need a disinterested mediator, not a partisan one who merely seems uninterested in the outcome.", pl: "Potrzebujemy bezstronnego mediatora, nie stronniczego, który jedynie sprawia wrażenie niezainteresowanego wynikiem." },
          { en: "Just as terms were settled, the client moved the goalposts and demanded a fresh ballpark figure.", pl: "Ledwie ustalono warunki, klient zmienił reguły gry i zażądał nowego orientacyjnego szacunku." },
          { en: "Although unelected, she had become the de facto leader through sheer competence.", pl: "Choć niewybrana, dzięki samej kompetencji stała się faktyczną liderką." }
        ]},
        { id: "s6", type: "boss", title: "Wielki Sprawdzian C2 — niuans i mistrzostwo", questions: [
          { kind: "choice", q: "Który przymiotnik znaczy „nieprzerwany”?", options: ["continual", "continuous", "continued"], answer: 1 },
          { kind: "dropdown", q: "An ___ committee was assembled at a moment's notice.", options: ["ad hoc", "de facto", "bona fide"], answer: 0 },
          { kind: "transform", q: "Przeredaguj, używając idiomu biznesowego:", given: "They kept changing the requirements after we had agreed.", hint: "użyj „moved the goalposts”", answer: ["They kept moving the goalposts after we had agreed.", "They moved the goalposts after we had agreed."] },
          { kind: "categorize", q: "Pochwała czy zarzut wobec osoby?", cats: ["Pochwała", "Zarzut"], items: [{ t: "disinterested judge", cat: 0 }, { t: "uninterested judge", cat: 1 }, { t: "bona fide expert", cat: 0 }] },
          { kind: "match", pairs: [{ a: "de facto", b: "faktyczny" }, { a: "caveat emptor", b: "niech kupujący się strzeże" }, { a: "ad hoc", b: "doraźny" } ] },
          { kind: "multi", q: "Które stwierdzenia są poprawne? (zaznacz wszystkie)", options: ["'Comprise' znaczy „składać się z”.", "'Disinterested' znaczy „znudzony”.", "'Historic' znaczy „doniosły”.", "'Bona fide' znaczy „autentyczny”."], answers: [0, 2, 3] }
        ]}
      ]
    }

  );
})();
