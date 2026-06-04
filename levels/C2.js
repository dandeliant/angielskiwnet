/* ============================================================================
   POZIOM C2 — Szczyt  (Mistrzostwo)
   ========================================================================== */

window.COURSE.levels.push({
  id: "C2",
  name: "C2 — Szczyt",
  subtitle: "Mistrzostwo",
  altitude: "4810 m n.p.m.",
  color: "#e879f9",
  locked: true,
  units: [

    /* ---------------- C2 / U1 — Subtelności stylistyczne ---------------- */
    {
      id: "u1", title: "Subtelności stylistyczne — niuanse, ton, emfaza", icon: "🖋️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: niuanse stylu, ton i emfaza", html: `
          <p>Na poziomie C2 kluczowa jest zdolność do precyzyjnego doboru słów, modulowania tonu i stosowania emfazy tak, aby osiągnąć zamierzony efekt retoryczny.</p>
          <h3>Emfaza strukturalna</h3>
          <p><b>Inwersja</b> dla dramatycznego efektu: <span class="say">Never have I witnessed such breathtaking scenery.</span> (zamiast: I have never witnessed…)</p>
          <p><b>Cleft sentences</b> (zdania rozszczepiające): <span class="say">It was her tenacity that saved the project.</span></p>
          <p><b>Fronting</b>: <span class="say">This approach, we emphatically reject.</span></p>
          <h3>Ton formalny vs ironiczny</h3>
          <p>Subtelna zmiana słownictwa całkowicie zmienia ton: <span class="say">The minister made an error</span> (neutralnie) vs <span class="say">The minister blundered catastrophically</span> (krytycznie) vs <span class="say">The minister exhibited a momentary lapse of judgement</span> (eufemistycznie).</p>
          <h3>Emfaza leksykalna</h3>
          <p>Stopniowanie intensywności: <i>good → excellent → outstanding → unparalleled → incomparable</i></p>
          <p><span class="say">The film was not entirely without merit.</span> — litotes (podwójne przeczenie jako eufemizm).</p>
          <p class="tip">💡 Angielski natywny rzadko używa superlatiwa wprost — subtelna emfaza przez inwersję lub litotes brzmi bardziej wyrafinowanie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: styl i emfaza", words: [
          { en: "litotes", pl: "litotes (podwójne przeczenie jako eufemizm)", example: "The novel is not without a certain charm." },
          { en: "cleft sentence", pl: "zdanie rozszczepiające (It is X that…)", example: "It was the ambiguity that troubled the committee." },
          { en: "fronting", pl: "frontowanie (wysunięcie elementu na początek)", example: "That argument, the panel decisively dismissed." },
          { en: "inversion", pl: "inwersja (szyk przestawny dla emfazy)", example: "Seldom does one encounter such wit." },
          { en: "register", pl: "rejestr (poziom formalności języka)", example: "The register shifted from formal to colloquial mid-speech." },
          { en: "hedge", pl: "ogranicznik / zabezpieczenie (wyrażenie ostrożności)", example: "This may well prove to be the decisive factor." },
          { en: "understatement", pl: "niedopowiedzenie", example: "Losing one's life savings is slightly inconvenient." },
          { en: "foregrounding", pl: "wyeksponowanie (uwypuklenie elementu stylistycznego)", example: "The poet's foregrounding of silence creates unease." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: styl i emfaza", theoryRef: "C2/u1/s1", questions: [
          { kind: "choice", q: "Które zdanie zawiera inwersję dla emfazy?", options: ["I have never seen this.", "Never have I seen this.", "I never have seen this."], answer: 1, theoryRef: "C2/u1/s1" },
          { kind: "choice", q: "'It was her dedication that made the difference.' — jaka to figura?", options: ["Fronting", "Cleft sentence", "Inversion"], answer: 1, theoryRef: "C2/u1/s1" },
          { kind: "truefalse", q: "'Not entirely unpleasant' to przykład litotes.", answer: true },
          { kind: "gap", q: "Styl o wysokim stopniu formalności to wysoki ___ (angielskie słowo).", answer: "register", theoryRef: "C2/u1/s1" },
          { kind: "choice", q: "'Losing the championship was slightly disappointing' to przykład:", options: ["inwersji", "niedopowiedzenia (understatement)", "fronting"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie z inwersją:", words: ["Seldom", "does", "one", "encounter", "such", "wit"], answer: ["Seldom", "does", "one", "encounter", "such", "wit"] },
          { kind: "truefalse", q: "'This approach, we reject' to przykład fronting.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: emfaza i ton", prompts: [
          { en: "Never have I encountered such an intricate philosophical argument.", pl: "Nigdy nie zetknąłem się z tak zawiłym argumentem filozoficznym." },
          { en: "It was the sheer audacity of the proposal that stunned the audience.", pl: "To właśnie śmiałość tej propozycji wprawiła widownię w osłupienie." },
          { en: "The outcome was, to put it mildly, somewhat below expectations.", pl: "Wynik był, łagodnie mówiąc, nieco poniżej oczekiwań." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: styl i emfaza", questions: [
          { kind: "choice", q: "Inwersja w 'Barely had she left when the storm broke' podkreśla:", options: ["chronologię", "emocjonalny dramatyzm", "rejestr nieformalny"], answer: 1 },
          { kind: "gap", q: "Zdanie 'It was the timing ___ mattered.' (uzupełnij: that)", answer: "that" },
          { kind: "truefalse", q: "'He is not entirely incompetent' to forma pochwały przez litotes.", answer: true },
          { kind: "match", pairs: [{ a: "understatement", b: "niedopowiedzenie" }, { a: "register", b: "rejestr stylu" }, { a: "fronting", b: "wysunięcie na przód" }, { a: "hedge", b: "ogranicznik" }] }
        ]}
      ]
    },

    /* ---------------- C2 / U2 — Język literacki i figury retoryczne ---------------- */
    {
      id: "u2", title: "Język literacki i figury retoryczne", icon: "📜",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: metafora, porównanie, personifikacja, aliteracja", html: `
          <p>Znajomość figur retorycznych i stylistycznych jest niezbędna na poziomie C2 — zarówno do interpretacji tekstów literackich, jak i do tworzenia wyrafinowanej prozy i retoryki.</p>
          <h3>Kluczowe figury</h3>
          <table class="t-table">
            <tr><th>Figura</th><th>Definicja</th><th>Przykład</th></tr>
            <tr><td>Metaphor</td><td>bezpośrednie utożsamienie</td><td><span class="say">Time is a thief.</span></td></tr>
            <tr><td>Simile</td><td>podobieństwo przez 'like' lub 'as'</td><td><span class="say">Her voice was like velvet.</span></td></tr>
            <tr><td>Personification</td><td>nadanie cech ludzkich</td><td><span class="say">Grief crept into the room uninvited.</span></td></tr>
            <tr><td>Alliteration</td><td>powtórzenie głoski inicjalnej</td><td><span class="say">The silver sea softly sighed.</span></td></tr>
            <tr><td>Anaphora</td><td>powtórzenie na początku zdań</td><td><span class="say">We shall fight on the beaches… We shall fight on the landing grounds…</span></td></tr>
            <tr><td>Synecdoche</td><td>część zamiast całości</td><td><span class="say">All hands on deck.</span></td></tr>
            <tr><td>Chiasmus</td><td>odwrócona symetria</td><td><span class="say">Ask not what your country can do for you — ask what you can do for your country.</span></td></tr>
          </table>
          <p class="tip">💡 W prozie natywnej metafory są często tak wtopione w język, że stają się 'dead metaphors', np. 'the foot of the mountain' — nikt już nie myśli o stopie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: figury i środki stylistyczne", words: [
          { en: "metaphor", pl: "metafora (bezpośrednie utożsamienie)", example: "Life is a rollercoaster." },
          { en: "simile", pl: "porównanie (jak, niby)", example: "As cunning as a fox." },
          { en: "personification", pl: "personifikacja", example: "The wind whispered secrets through the pines." },
          { en: "alliteration", pl: "aliteracja (powtórzenie głoski)", example: "Peter Piper picked a peck of pickled peppers." },
          { en: "anaphora", pl: "anafora (powtórzenie na początku)", example: "We shall never surrender. We shall never give up." },
          { en: "chiasmus", pl: "chiazm (odwrócona symetria)", example: "Fair is foul, and foul is fair." },
          { en: "synecdoche", pl: "synekdocha (część za całość)", example: "The pen is mightier than the sword." },
          { en: "euphemism", pl: "eufemizm", example: "He passed away peacefully." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: figury retoryczne", theoryRef: "C2/u2/s1", questions: [
          { kind: "choice", q: "'Her smile was like sunshine after rain.' — jaka figura?", options: ["Metafora", "Porównanie (simile)", "Personifikacja"], answer: 1, theoryRef: "C2/u2/s1" },
          { kind: "choice", q: "'The city never sleeps.' — jaka figura?", options: ["Aliteracja", "Personifikacja", "Anafora"], answer: 1, theoryRef: "C2/u2/s1" },
          { kind: "truefalse", q: "Anafora polega na powtarzaniu tego samego słowa lub frazy na początku kolejnych zdań.", answer: true },
          { kind: "choice", q: "'Laughter is the music of the soul.' — jaka figura?", options: ["Metafora", "Porównanie", "Chiazm"], answer: 0, theoryRef: "C2/u2/s1" },
          { kind: "gap", q: "'Ask not what your country can do for you — ask what you can do for your country' to przykład ___.", answer: "chiasmus" },
          { kind: "match", pairs: [{ a: "simile", b: "porównanie" }, { a: "personification", b: "personifikacja" }, { a: "euphemism", b: "eufemizm" }, { a: "synecdoche", b: "synekdocha" }] },
          { kind: "truefalse", q: "Dead metaphors to metafory tak wtopione w język, że nie są odczuwane jako przenośnie.", answer: true },
          { kind: "choice", q: "'The roaring twenties' to przykład:", options: ["simile", "personifikacji dziesięciolecia", "aliteracji"], answer: 1 }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: analiza literacka", theoryRef: "C2/u2/s1", recordLine: 1, lines: [
          { speaker: "Profesor", en: "What rhetorical device does Orwell use in 'All animals are equal, but some animals are more equal than others'?", pl: "Jakiej figury retorycznej używa Orwell w tym fragmencie?" },
          { speaker: "Ty", en: "It is a paradox reinforced by chiasmus-like repetition. The phrase subverts logical equality to expose political hypocrisy.", pl: "To paradoks wzmocniony chiazmatycznym powtórzeniem. Fraza obala logiczną równość, obnażając polityczną hipokryzję." },
          { speaker: "Profesor", en: "Excellent. And what effect does the repetition of 'equal' create?", pl: "Doskonale. A jaki efekt tworzy powtórzenie słowa 'equal'?" },
          { speaker: "Ty", en: "It creates a deeply ironic tone — the semantic shift from 'equal' to 'more equal' is both absurd and chilling.", pl: "Tworzy głęboko ironiczny ton — semantyczna zamiana 'equal' na 'more equal' jest jednocześnie absurdalna i mrożąca krew w żyłach." }
        ]}
      ]
    },

    /* ---------------- C2 / U3 — Humor, ironia i gra słów ---------------- */
    {
      id: "u3", title: "Humor, ironia i gra słów", icon: "😏",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: ironia, sarkazm i puns", html: `
          <p>Angielski humor — szczególnie brytyjski — jest głęboko zakorzeniony w ironii, sarkazmie i grze słów. Zrozumienie tych mechanizmów jest kamieniem milowym na drodze do prawdziwego mistrzostwa językowego.</p>
          <h3>Ironia werbalna (verbal irony)</h3>
          <p>Mówienie czegoś przeciwnego do tego, co się myśli: <span class="say">Oh, brilliant — you have just spilled coffee on my laptop.</span></p>
          <h3>Sarkazm</h3>
          <p>Ironia z ostrą krawędzią intencji krytycznej: <span class="say">Well done, Einstein — you have managed to lock yourself out again.</span></p>
          <h3>Puns (gra słów)</h3>
          <p>Opierają się na wieloznaczności lub homofonii: <span class="say">Time flies like an arrow; fruit flies like a banana.</span> — 'flies' jako czasownik i rzeczownik.</p>
          <p><span class="say">I used to be a banker, but I lost interest.</span> — 'interest' jako zainteresowanie i odsetki bankowe.</p>
          <h3>Deadpan humour</h3>
          <p>Żart wygłoszony z zupełnie poważną miną: <span class="say">I told my wife she was drawing her eyebrows too high. She looked surprised.</span></p>
          <h3>Understatement jako humor</h3>
          <p><span class="say">The Titanic had a somewhat troubled maiden voyage.</span></p>
          <p class="tip">💡 Kluczem do rozpoznania ironii jest kontekst i ton — angielski natywny często nie sygnalizuje ironii wprost, co bywa mylące dla nienatywnych mówców.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: humor i ironia", words: [
          { en: "pun", pl: "gra słów, kalambur", example: "That pun was so bad it was almost good." },
          { en: "sarcasm", pl: "sarkazm", example: "Oh, great — another Monday. Just what I needed." },
          { en: "deadpan", pl: "humor z kamienną twarzą", example: "He delivered the punchline with a completely deadpan expression." },
          { en: "wit", pl: "dowcip, błyskotliwość", example: "Oscar Wilde was famous for his razor-sharp wit." },
          { en: "banter", pl: "przekomarzanie się, żartobliwa wymiana zdań", example: "The banter between the two comedians was electric." },
          { en: "tongue-in-cheek", pl: "żartobliwy, z przymrużeniem oka", example: "The article was a tongue-in-cheek commentary on modern life." },
          { en: "punchline", pl: "puenta dowcipu", example: "The punchline caught everyone completely off guard." },
          { en: "double entendre", pl: "dwuznaczność (z podtekstem)", example: "The script was full of double entendres." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: ironia i humor", theoryRef: "C2/u3/s1", questions: [
          { kind: "choice", q: "'I used to be a banker, but I lost interest.' — na czym polega humor?", options: ["Na ironii sytuacyjnej", "Na grze słów (pun) z 'interest'", "Na sarkazmie"], answer: 1, theoryRef: "C2/u3/s1" },
          { kind: "truefalse", q: "Sarkazm to zawsze ironia, ale nie każda ironia to sarkazm.", answer: true },
          { kind: "choice", q: "Żart wygłoszony bez zmiany wyrazu twarzy to:", options: ["banter", "deadpan", "wit"], answer: 1, theoryRef: "C2/u3/s1" },
          { kind: "gap", q: "Żartobliwa wymiana przekomarzań to ___.", answer: "banter" },
          { kind: "choice", q: "'The Titanic had a somewhat troubled maiden voyage' to przykład:", options: ["sarkastycznego understatement", "punu", "deadpan"], answer: 0 },
          { kind: "truefalse", q: "Double entendre to figura opierająca się na dwuznaczności.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: ton ironiczny", prompts: [
          { en: "Oh, how utterly charming — stuck in traffic for the third time this week.", pl: "Och, jakże uroczo — korek po raz trzeci w tym tygodniu." },
          { en: "The meeting lasted four hours. Morale soared afterwards, needless to say.", pl: "Spotkanie trwało cztery godziny. Morale naturalnie wystrzeliło po jego zakończeniu." },
          { en: "Well, that went swimmingly — the entire presentation crashed ten minutes in.", pl: "No, poszło znakomicie — cała prezentacja padła po dziesięciu minutach." }
        ]}
      ]
    },

    /* ---------------- C2 / U4 — Idiomy zaawansowane i slang ---------------- */
    {
      id: "u4", title: "Idiomy zaawansowane i kolokwializmy", icon: "🗣️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: idiomy zaawansowane, slang i kolokwializmy", html: `
          <p>Opanowanie zaawansowanych idiomów jest tym, co odróżnia mówcę C1 od prawdziwie natywnie brzmiącego mówcy C2. Chodzi nie tylko o znajomość znaczenia, ale też o trafne stosowanie w kontekście.</p>
          <h3>Idiomy wywodzące się z różnych dziedzin</h3>
          <p>Z prawa: <span class="say">the ball is in your court</span> (teraz twój ruch).</p>
          <p>Z teatru: <span class="say">steal the show</span> (przyćmić wszystkich), <span class="say">play to the gallery</span> (grać pod publiczkę).</p>
          <p>Z żeglarstwa: <span class="say">plain sailing</span> (gładka jazda, bez problemów), <span class="say">in the same boat</span> (w tej samej sytuacji).</p>
          <h3>Złożone phrasal verbs</h3>
          <p><span class="say">to come to grips with</span> (zmierzyć się z, pojąć), <span class="say">to fob someone off</span> (zbyć kogoś), <span class="say">to knock something on the head</span> (położyć kres czemuś).</p>
          <h3>Slang i kolokwializmy</h3>
          <p><span class="say">to be on the blink</span> (nie działać, psuć się), <span class="say">to go pear-shaped</span> (nie wypalić, pójść na dno), <span class="say">to be gutted</span> (być totalnie rozczarowanym).</p>
          <p class="tip">💡 Wiele idiomów jest specyficznych kulturowo lub regionalnie — idiomy brytyjskie, australijskie i amerykańskie mogą się różnić znacząco.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: idiomy zaawansowane", words: [
          { en: "to go pear-shaped", pl: "pójść nie tak, skończyć się fiaskiem", example: "The entire launch campaign went pear-shaped from day one." },
          { en: "to be on the blink", pl: "(o urządzeniu) nie działać, psuć się", example: "Our server has been on the blink all morning." },
          { en: "to come to grips with", pl: "poradzić sobie z, pojąć", example: "She struggled to come to grips with the new software." },
          { en: "to play to the gallery", pl: "grać pod publiczkę", example: "The politician was clearly playing to the gallery." },
          { en: "plain sailing", pl: "gładka droga, bez przeszkód", example: "Once the funding was secured, it was plain sailing." },
          { en: "to fob someone off", pl: "zbyć kogoś, spławić", example: "Do not let them fob you off with excuses." },
          { en: "to be gutted", pl: "być totalnie rozczarowanym (pot.)", example: "I was absolutely gutted when I missed the final." },
          { en: "to steal the show", pl: "przyćmić wszystkich, zdobyć aplauz", example: "The child actor completely stole the show." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: idiomy i slang", theoryRef: "C2/u4/s1", questions: [
          { kind: "choice", q: "'The negotiations went pear-shaped' znaczy:", options: ["Negocjacje się powiodły", "Negocjacje zakończyły się fiaskiem", "Negocjacje trwały długo"], answer: 1, theoryRef: "C2/u4/s1" },
          { kind: "gap", q: "When the project failed, everyone was absolutely ___. (rozczarowany, pot.)", answer: "gutted", theoryRef: "C2/u4/s1" },
          { kind: "truefalse", q: "'Plain sailing' oznacza poważne trudności.", answer: false },
          { kind: "choice", q: "'She stole the show' znaczy:", options: ["Ukradła scenariusz", "Zdobyła aplauz, przyćmiewając innych", "Opuściła spektakl"], answer: 1 },
          { kind: "match", pairs: [{ a: "on the blink", b: "nie działa" }, { a: "fob off", b: "zbyć" }, { a: "play to the gallery", b: "grać pod publiczkę" }, { a: "come to grips with", b: "pojąć, poradzić sobie" }] },
          { kind: "truefalse", q: "'In the same boat' pochodzi z żeglarskiej terminologii i oznacza 'w tej samej sytuacji'.", answer: true }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: idiomy w rozmowie", theoryRef: "C2/u4/s1", recordLine: 1, lines: [
          { speaker: "Kolega", en: "How did the product launch go?", pl: "Jak poszedł launch produktu?" },
          { speaker: "Ty", en: "Honestly? It went completely pear-shaped. The website was on the blink all afternoon.", pl: "Szczerze? Poszło całkowicie nie tak. Strona nie działała przez całe popołudnie." },
          { speaker: "Kolega", en: "That is awful. Were the clients understanding?", pl: "Okropnie. Czy klienci okazali zrozumienie?" },
          { speaker: "Ty", en: "Hardly. The CEO tried to fob them off with excuses, but they were not having any of it. I was gutted.", pl: "Raczej nie. Dyrektor próbował ich zbyć wymówkami, ale nie dawali się tak łatwo. Byłem totalnie rozczarowany." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: idiomy i styl", questions: [
          { kind: "choice", q: "Który idiom oznacza 'zbagatelizować, zbyć'?", options: ["steal the show", "fob off", "plain sailing"], answer: 1 },
          { kind: "gap", q: "After all the problems, the rest was plain ___.", answer: "sailing" },
          { kind: "truefalse", q: "'Playing to the gallery' to komplement — oznacza bycie autentycznym.", answer: false },
          { kind: "order", q: "Ułóż idiom:", words: ["She", "came", "to", "grips", "with", "the", "problem"], answer: ["She", "came", "to", "grips", "with", "the", "problem"] }
        ]}
      ]
    },

    /* ---------------- C2 / U5 — Terminologia specjalistyczna ---------------- */
    {
      id: "u5", title: "Terminologia specjalistyczna — prawo, medycyna, nauka", icon: "⚖️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: rejestry specjalistyczne i code-switching", html: `
          <p>Prawdziwie kompetentny mówca C2 potrafi rozpoznać i sprawnie poruszać się w specjalistycznych rejestrach językowych oraz rozumieć, kiedy i jak między nimi przełączać (code-switching).</p>
          <h3>Rejestr prawny (legal register)</h3>
          <p>Cechy: archaizmy (<span class="say">hereinafter</span>, <span class="say">aforementioned</span>), strona bierna, nominalizacje, zdania wielokrotnie złożone.</p>
          <p>Przykład: <span class="say">The aforementioned party shall hereinafter be referred to as 'the Licensee'.</span></p>
          <h3>Rejestr medyczny</h3>
          <p>Terminologia łacińsko-grecka: <span class="say">myocardial infarction</span> = heart attack, <span class="say">idiopathic</span> = of unknown cause, <span class="say">prognosis</span> = rokowanie.</p>
          <h3>Rejestr naukowy</h3>
          <p>Nacisk na obiektywizm, pasywność, hedging: <span class="say">The results appear to suggest that…</span>, <span class="say">It could be argued that…</span></p>
          <h3>Code-switching</h3>
          <p>Natywni mówcy płynnie przełączają się między rejestrami. Lekarz powie pacjentowi: <span class="say">You have had a heart attack</span>, ale w raporcie napisze <span class="say">The patient presented with acute myocardial infarction</span>.</p>
          <p class="tip">💡 Właściwy rejestr to kwestia nie tylko słownictwa, ale i składni, akapitowania i konwencji gatunkowych.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: terminologia specjalistyczna", words: [
          { en: "hereinafter", pl: "dalej zwany, w dalszej części dokumentu", example: "The Company, hereinafter referred to as 'the Vendor'." },
          { en: "prognosis", pl: "rokowanie (medyczne)", example: "The prognosis for a full recovery is cautiously optimistic." },
          { en: "idiopathic", pl: "idiopatyczny (o nieznanej przyczynie)", example: "The diagnosis was idiopathic pulmonary fibrosis." },
          { en: "jurisdiction", pl: "jurysdykcja", example: "This case falls under the jurisdiction of the High Court." },
          { en: "empirical", pl: "empiryczny (oparty na obserwacji)", example: "The theory lacked empirical support." },
          { en: "liability", pl: "odpowiedzialność prawna, zobowiązanie", example: "The company admitted no liability for the incident." },
          { en: "contraindication", pl: "przeciwwskazanie (medyczne)", example: "Pregnancy is a contraindication for this medication." },
          { en: "peer-reviewed", pl: "recenzowany (przez ekspertów)", example: "Only peer-reviewed studies were included in the meta-analysis." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: rejestry specjalistyczne", theoryRef: "C2/u5/s1", questions: [
          { kind: "choice", q: "Które słowo należy do rejestru prawnego?", options: ["prognosis", "hereinafter", "empirical"], answer: 1, theoryRef: "C2/u5/s1" },
          { kind: "truefalse", q: "'Idiopathic' oznacza chorobę o nieznanej etiologii.", answer: true },
          { kind: "choice", q: "Code-switching to:", options: ["Zmiana tematu rozmowy", "Płynne przełączanie między rejestrami lub językami", "Błąd językowy"], answer: 1, theoryRef: "C2/u5/s1" },
          { kind: "gap", q: "Badanie opublikowane w recenzowanym czasopiśmie to badanie ___-reviewed.", answer: "peer" },
          { kind: "match", pairs: [{ a: "liability", b: "odpowiedzialność prawna" }, { a: "prognosis", b: "rokowanie" }, { a: "empirical", b: "empiryczny" }, { a: "jurisdiction", b: "jurysdykcja" }] },
          { kind: "truefalse", q: "W rejestrze naukowym styl bezosobowy i strona bierna są nienaturalne.", answer: false },
          { kind: "choice", q: "Lekarz tłumacząc pacjentowi wyniki, powinien użyć:", options: ["pełnej terminologii łacińskiej", "potocznego, zrozumiałego języka", "tylko skrótów medycznych"], answer: 1 }
        ]},
        { id: "s4", type: "boss", title: "Sprawdzian: terminologia i rejestry", questions: [
          { kind: "choice", q: "'The aforementioned clause shall be null and void.' — rejestr:", options: ["Medyczny", "Naukowy", "Prawny"], answer: 2 },
          { kind: "gap", q: "'Myocardial ___' to fachowe określenie ataku serca.", answer: "infarction" },
          { kind: "truefalse", q: "'Contraindication' to termin używany w kontekście prawnym.", answer: false },
          { kind: "match", pairs: [{ a: "hereinafter", b: "dalej zwany" }, { a: "peer-reviewed", b: "recenzowany" }, { a: "prognosis", b: "rokowanie" }] },
          { kind: "order", q: "Ułóż naukowe zdanie:", words: ["The", "results", "appear", "to", "suggest", "a", "correlation"], answer: ["The", "results", "appear", "to", "suggest", "a", "correlation"] }
        ]}
      ]
    },

    /* ---------------- C2 / U6 — Niuanse znaczeniowe i konotacje ---------------- */
    {
      id: "u6", title: "Niuanse znaczeniowe, konotacje i kolokacje", icon: "🔬",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: konotacje, denotacje i precyzja kolokacyjna", html: `
          <p>Denotacja to podstawowe, słownikowe znaczenie słowa. Konotacja to emocjonalne i kulturowe skojarzenia, które słowo niesie — i to one decydują o tym, czy zdanie brzmi odpowiednio.</p>
          <h3>Konotacje neutralne vs nacechowane</h3>
          <table class="t-table">
            <tr><th>Neutralne</th><th>Konotacja pozytywna</th><th>Konotacja negatywna</th></tr>
            <tr><td>thin</td><td>slender / willowy</td><td>scrawny / gaunt</td></tr>
            <tr><td>determined</td><td>resolute / steadfast</td><td>stubborn / obstinate</td></tr>
            <tr><td>talkative</td><td>articulate / eloquent</td><td>garrulous / verbose</td></tr>
            <tr><td>old</td><td>venerable / seasoned</td><td>decrepit / antiquated</td></tr>
          </table>
          <h3>Precyzja kolokacyjna</h3>
          <p>Angielski natywny mówi <span class="say">make a decision</span> (nie 'do a decision'), <span class="say">take responsibility</span> (nie 'bring responsibility'), <span class="say">commit a crime</span> (nie 'make a crime').</p>
          <p>Błędy kolokacyjne zdradzają nienatywnego mówcę nawet przy poprawnej gramatyce.</p>
          <h3>Semantic prosody (prozodja semantyczna)</h3>
          <p>Niektóre słowa 'przyciągają' negatywny kontekst: <span class="say">cause</span> typowo kolokuje z problemami (cause damage, cause concern), choć gramatycznie może łączyć się z czymkolwiek.</p>
          <p class="tip">💡 Zdanie może być gramatycznie poprawne, ale konotacyjnie nieodpowiednie — np. 'She is slender' to komplement, 'She is scrawny' to zniewaga, mimo że oba opisują szczupłość.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: konotacje i kolokacje", words: [
          { en: "resolute", pl: "zdecydowany, niezłomny (poz.)", example: "She remained resolute in the face of adversity." },
          { en: "obstinate", pl: "uparty, zawzięty (neg.)", example: "His obstinate refusal delayed the entire process." },
          { en: "garrulous", pl: "gadatliwy (neg.)", example: "The garrulous neighbour monopolised every conversation." },
          { en: "venerable", pl: "dostojny, czcigodny (poz.)", example: "The venerable professor had shaped three generations of students." },
          { en: "semantic prosody", pl: "prozodja semantyczna (tendencja kolokacyjna)", example: "The verb 'cause' has a negative semantic prosody." },
          { en: "connotation", pl: "konotacja (zabarwienie emocjonalne)", example: "The word 'propaganda' carries strong negative connotations." },
          { en: "collocation", pl: "kolokacja (typowe zestawienie wyrazów)", example: "Make a mistake — not 'do a mistake'." },
          { en: "denotation", pl: "denotacja (podstawowe znaczenie słownikowe)", example: "The denotation of 'home' is a place of residence." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: konotacje i kolokacje", theoryRef: "C2/u6/s1", questions: [
          { kind: "choice", q: "Które słowo ma pozytywną konotację dla osoby szczupłej?", options: ["scrawny", "gaunt", "slender"], answer: 2, theoryRef: "C2/u6/s1" },
          { kind: "gap", q: "Poprawna kolokacja: ___ a decision (make/do).", answer: "make", theoryRef: "C2/u6/s1" },
          { kind: "choice", q: "Semantic prosody słowa 'cause' wskazuje na:", options: ["Neutralny kontekst", "Pozytywny kontekst", "Przeważnie negatywny kontekst"], answer: 2, theoryRef: "C2/u6/s1" },
          { kind: "truefalse", q: "'Obstinate' i 'resolute' mają to samo znaczenie, ale różne konotacje.", answer: true },
          { kind: "match", pairs: [{ a: "resolute", b: "poz: zdecydowany" }, { a: "obstinate", b: "neg: uparty" }, { a: "garrulous", b: "neg: gadatliwy" }, { a: "venerable", b: "poz: czcigodny" }] },
          { kind: "choice", q: "Poprawna kolokacja to:", options: ["do a crime", "commit a crime", "make a crime"], answer: 1 },
          { kind: "truefalse", q: "Błąd kolokacyjny jest zawsze błędem gramatycznym.", answer: false }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: dobór słów i konotacje", prompts: [
          { en: "She is remarkably slender, almost willowy.", pl: "Jest nadzwyczaj szczupła, niemal gibka." },
          { en: "The chairman's obstinate stance undermined the entire negotiation.", pl: "Zawzięte stanowisko przewodniczącego podważyło całe negocjacje." },
          { en: "He took responsibility for the oversight and committed to preventing its recurrence.", pl: "Wziął odpowiedzialność za przeoczenie i zobowiązał się zapobiec powtórzeniu sytuacji." }
        ]}
      ]
    },

    /* ---------------- C2 / U7 — Dyskurs akademicki i debata ---------------- */
    {
      id: "u7", title: "Dyskurs akademicki — argumentacja, ustępstwo, replika", icon: "🎓",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zaawansowana argumentacja, ustępstwo i replika", html: `
          <p>Dyskurs akademicki i debatowy wymaga nie tylko wyrażania własnego stanowiska, ale też eleganckiego uznawania argumentów przeciwnych (concession) i ich obalania (rebuttal).</p>
          <h3>Wyrażanie stanowiska</h3>
          <p><span class="say">It is my contention that…</span> / <span class="say">I would argue that…</span> / <span class="say">The evidence strongly indicates…</span></p>
          <h3>Ustępstwo (concession)</h3>
          <p>Uznajemy częściową prawdziwość argumentu przeciwnego, zanim go osłabimy:</p>
          <p><span class="say">Whilst it is true that…, one must nevertheless consider…</span></p>
          <p><span class="say">Admittedly, X has merit; however, it fails to account for…</span></p>
          <p><span class="say">Granted, the initial results were promising, yet the long-term data tells a very different story.</span></p>
          <h3>Replika / kontrargument (rebuttal)</h3>
          <p><span class="say">This argument, however compelling it may appear, overlooks the fundamental issue of…</span></p>
          <p><span class="say">The premise is flawed insofar as it assumes…</span></p>
          <p><span class="say">On the contrary, the bulk of the evidence suggests…</span></p>
          <h3>Modalności epistemiczne (hedging akademicki)</h3>
          <p><span class="say">It would appear that…</span> / <span class="say">This may well be attributed to…</span> / <span class="say">One cannot discount the possibility that…</span></p>
          <p class="tip">💡 Dobre ustępstwo paradoksalnie wzmacnia pozycję — pokazuje, że rozumiesz złożoność i nie ignorujesz przeciwnych dowodów.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: dyskurs akademicki", words: [
          { en: "contention", pl: "teza, twierdzenie (w debacie)", example: "It is my contention that economic inequality drives political polarisation." },
          { en: "concession", pl: "ustępstwo (uznanie racji adwersarza)", example: "I make this concession: the policy had short-term benefits." },
          { en: "rebuttal", pl: "replika, obalenie argumentu", example: "Her rebuttal demolished the central premise of his argument." },
          { en: "premise", pl: "przesłanka (podstawa rozumowania)", example: "The entire argument rests on a false premise." },
          { en: "fallacy", pl: "błąd logiczny", example: "That is a classic straw man fallacy." },
          { en: "nuanced", pl: "zniuansowany, wielowymiarowy", example: "A nuanced reading of the data reveals contradictions." },
          { en: "extrapolate", pl: "ekstrapolować (uogólniać na podstawie danych)", example: "We cannot extrapolate these findings to the global population." },
          { en: "caveat", pl: "zastrzeżenie, warunek (w argumentacji)", example: "With the caveat that the sample size was small, the results are suggestive." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: argumentacja akademicka", theoryRef: "C2/u7/s1", questions: [
          { kind: "choice", q: "Które zdanie wyraża ustępstwo (concession)?", options: ["I strongly reject this view.", "Admittedly, the policy had some merit, yet it ultimately failed.", "The premise is fundamentally flawed."], answer: 1, theoryRef: "C2/u7/s1" },
          { kind: "gap", q: "Słowo oznaczające uznanie racji adwersarza w debacie to ___.", answer: "concession", theoryRef: "C2/u7/s1" },
          { kind: "truefalse", q: "'Straw man' to błąd logiczny polegający na atakowaniu zniekształconej wersji argumentu.", answer: true },
          { kind: "choice", q: "Hedging akademicki służy do:", options: ["Wyrażania pewności absolutnej", "Sygnalizowania ostrożności epistemicznej", "Obalania argumentów"], answer: 1, theoryRef: "C2/u7/s1" },
          { kind: "match", pairs: [{ a: "premise", b: "przesłanka" }, { a: "fallacy", b: "błąd logiczny" }, { a: "caveat", b: "zastrzeżenie" }, { a: "extrapolate", b: "uogólniać" }] },
          { kind: "truefalse", q: "Faza ustępstwa w debacie osłabia pozycję mówcy.", answer: false },
          { kind: "order", q: "Ułóż zdanie z ustępstwem:", words: ["Granted,", "the", "data", "is", "limited,", "yet", "it", "is", "suggestive"], answer: ["Granted,", "the", "data", "is", "limited,", "yet", "it", "is", "suggestive"] }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: debata akademicka", theoryRef: "C2/u7/s1", recordLine: 1, lines: [
          { speaker: "Adwersarz", en: "Surely you would agree that unrestricted free trade has been overwhelmingly beneficial?", pl: "Z pewnością zgodzi się Pan/Pani, że nieograniczony wolny handel był w przeważającej mierze korzystny?" },
          { speaker: "Ty", en: "Admittedly, free trade has lifted millions from poverty. However, it has simultaneously exacerbated inequality within nations. The aggregate gains mask profound distributional injustices.", pl: "Trzeba przyznać, że wolny handel wyciągnął miliony z ubóstwa. Jednak jednocześnie pogłębił nierówności wewnątrz państw. Łączne zyski maskują głębokie niesprawiedliwości dystrybucyjne." },
          { speaker: "Adwersarz", en: "That seems like a rather sweeping generalisation.", pl: "To wydaje się dość daleko idącym uogólnieniem." },
          { speaker: "Ty", en: "I take that caveat seriously. Nevertheless, the empirical evidence from OECD nations over the past three decades is, I would argue, broadly consistent with this contention.", pl: "Traktuję to zastrzeżenie poważnie. Niemniej jednak dane empiryczne z krajów OECD z ostatnich trzydziestu lat są, jak sądzę, w dużej mierze spójne z tą tezą." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: debata i argumentacja", questions: [
          { kind: "choice", q: "'The premise is flawed insofar as it assumes X.' — celem jest:", options: ["Wyrażenie ustępstwa", "Obalenie argumentu przez wskazanie błędnej przesłanki", "Hedging"], answer: 1 },
          { kind: "gap", q: "Zdanie z ustępstwem: '___, the data is limited, yet it points to a clear trend.' (wpisz: Granted)", answer: "Granted" },
          { kind: "truefalse", q: "'One cannot discount the possibility that…' to przykład hedgingu akademickiego.", answer: true },
          { kind: "match", pairs: [{ a: "rebuttal", b: "replika" }, { a: "contention", b: "teza" }, { a: "nuanced", b: "zniuansowany" }] }
        ]}
      ]
    },

    /* ---------------- C2 / U8 — Near-native fluency ---------------- */
    {
      id: "u8", title: "Near-native fluency — markery dyskursu i naturalna fraza", icon: "🏔️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: markery dyskursu, stałe wyrażenia i naturalny rytm", html: `
          <p>Ostatnia granica na drodze do pełnego mistrzostwa — spójność i naturalność całego dyskursu. Natywni mówcy nieświadomie stosują sieć markerów spójności, zdawkowych wyrażeń i rytmicznych konwencji, które czynią mowę płynną i autentyczną.</p>
          <h3>Discourse markers (markery dyskursu)</h3>
          <table class="t-table">
            <tr><th>Funkcja</th><th>Markery</th></tr>
            <tr><td>Dodanie</td><td><span class="say">Furthermore, Moreover, In addition, What is more</span></td></tr>
            <tr><td>Kontrast</td><td><span class="say">Nevertheless, Nonetheless, That said, Even so, Be that as it may</span></td></tr>
            <tr><td>Uszczegółowienie</td><td><span class="say">In other words, To be more precise, Put differently</span></td></tr>
            <tr><td>Wynik</td><td><span class="say">Consequently, It follows that, As a result, Hence</span></td></tr>
            <tr><td>Podsumowanie</td><td><span class="say">All things considered, On balance, To sum up, In the final analysis</span></td></tr>
          </table>
          <h3>Fixed expressions i collocations natywne</h3>
          <p><span class="say">It goes without saying that…</span> (rzecz jasna, że…)</p>
          <p><span class="say">By the same token…</span> (z tego samego powodu, analogicznie)</p>
          <p><span class="say">At this juncture…</span> (w tym momencie, na tym etapie)</p>
          <p><span class="say">All things being equal…</span> (przy niezmienionych okolicznościach)</p>
          <h3>Fillers konwersacyjne natywne</h3>
          <p><span class="say">As it were…</span>, <span class="say">So to speak…</span>, <span class="say">If you will…</span>, <span class="say">Mind you…</span></p>
          <p class="tip">💡 Naturalność pochodzi nie z unikania pauz, lecz z unikania niepotrzebnych słów — precyzja i rytm ważniejsze niż prędkość.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: markery dyskursu i stałe wyrażenia", words: [
          { en: "Be that as it may", pl: "bez względu na to, jak jest; niezależnie od tego", example: "Be that as it may, we must proceed with caution." },
          { en: "By the same token", pl: "z tego samego powodu, analogicznie", example: "By the same token, one cannot praise the results without acknowledging the costs." },
          { en: "At this juncture", pl: "na tym etapie, w tym momencie (formal)", example: "At this juncture, it would be premature to draw conclusions." },
          { en: "It goes without saying", pl: "rzecz jasna, nie trzeba dodawać", example: "It goes without saying that confidentiality must be maintained." },
          { en: "On balance", pl: "biorąc wszystko pod uwagę", example: "On balance, the benefits outweigh the risks." },
          { en: "In the final analysis", pl: "ostatecznie, w ostatecznym rozrachunku", example: "In the final analysis, leadership is about trust." },
          { en: "Mind you", pl: "przy okazji, co ważne, nawiasem mówiąc", example: "Mind you, the original proposal was not without merit either." },
          { en: "As it were", pl: "niejako, że tak powiem", example: "He was, as it were, the architect of his own downfall." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: near-native fluency", theoryRef: "C2/u8/s1", questions: [
          { kind: "choice", q: "Które wyrażenie oznacza 'biorąc wszystko pod uwagę'?", options: ["At this juncture", "On balance", "By the same token"], answer: 1, theoryRef: "C2/u8/s1" },
          { kind: "gap", q: "___ that as it may, the project must continue. (wpisz: Be)", answer: "Be", theoryRef: "C2/u8/s1" },
          { kind: "truefalse", q: "'It goes without saying' wprowadza informację oczywistą lub powszechnie uznaną.", answer: true },
          { kind: "choice", q: "'Mind you, she did warn us.' — funkcja tego markera:", options: ["Podsumowanie", "Zwrócenie uwagi na ważny niuans", "Wynik"], answer: 1, theoryRef: "C2/u8/s1" },
          { kind: "match", pairs: [{ a: "Furthermore", b: "dodanie" }, { a: "Nevertheless", b: "kontrast" }, { a: "Consequently", b: "wynik" }, { a: "In the final analysis", b: "podsumowanie" }] },
          { kind: "choice", q: "'As it were' wskazuje na:", options: ["Pewność absolutną", "Użycie przenośne lub nieściśle dosłowne", "Kontrargument"], answer: 1 },
          { kind: "order", q: "Ułóż zdanie:", words: ["On", "balance,", "the", "policy", "has", "been", "a", "success"], answer: ["On", "balance,", "the", "policy", "has", "been", "a", "success"] },
          { kind: "truefalse", q: "'By the same token' można użyć, by wskazać analogię lub równoważny argument.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: płynność near-native", prompts: [
          { en: "It goes without saying that mastery of a language demands years of sustained, deliberate effort.", pl: "Rzecz jasna, opanowanie języka wymaga lat systematycznego, celowego wysiłku." },
          { en: "On balance, the advantages of bilingualism far outweigh the cognitive demands of acquiring a second language.", pl: "Biorąc wszystko pod uwagę, korzyści z dwujęzyczności znacznie przewyższają poznawczy wysiłek nauki drugiego języka." },
          { en: "Be that as it may, one cannot dismiss the lived experience of those most affected by the policy.", pl: "Bez względu na to, jak jest, nie można zbagatelizować doświadczeń tych, których polityka dotknęła najbardziej." }
        ]},
        { id: "s5", type: "boss", title: "Wielki Sprawdzian C2 — Szczyt", questions: [
          { kind: "choice", q: "Które zdanie zawiera poprawną inwersję dla emfazy?", options: ["I have rarely encountered such expertise.", "Rarely I have encountered such expertise.", "Rarely have I encountered such expertise."], answer: 2 },
          { kind: "gap", q: "'___ the same token, excessive regulation stifles innovation.' (wpisz: By)", answer: "By" },
          { kind: "choice", q: "'Admittedly, the plan has flaws, yet it represents genuine progress.' — jaka to technika?", options: ["Frontowanie", "Ustępstwo i replika (concession + rebuttal)", "Litotes"], answer: 1 },
          { kind: "truefalse", q: "'Obstinate' i 'resolute' mają tę samą denotację, ale różne konotacje.", answer: true },
          { kind: "match", pairs: [{ a: "concession", b: "ustępstwo" }, { a: "fallacy", b: "błąd logiczny" }, { a: "semantic prosody", b: "tendencja kolokacyjna" }, { a: "deadpan", b: "humor z kamienną twarzą" }] },
          { kind: "order", q: "Ułóż zdanie z markerem:", words: ["In", "the", "final", "analysis,", "trust", "is", "the", "foundation", "of", "leadership"], answer: ["In", "the", "final", "analysis,", "trust", "is", "the", "foundation", "of", "leadership"] }
        ]}
      ]
    }

  ]
});
