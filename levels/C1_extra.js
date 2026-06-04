/* C1 — dodatkowe tematy (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "C1"; });
  if (!lv) return;
  lv.units.push(

    /* ============================================================
       x1 — (Grammar) Inversion with negative adverbials
       ============================================================ */
    {
      id: "x1", title: "Inwersja z przysłówkami negatywnymi", icon: "🔄",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: inwersja z przysłówkami negatywnymi", html: `
          <p><b>Inwersja</b> polega na przestawieniu operatora (czasownika posiłkowego) przed podmiot, gdy zdanie zaczyna się od wyrażenia o znaczeniu negatywnym lub ograniczającym. Nadaje to wypowiedzi formalny, emfatyczny ton.</p>
          <table class="t-table">
            <tr><th>Wyrażenie</th><th>Przykład z inwersją</th></tr>
            <tr><td>Never</td><td><span class="say">Never have I encountered such resistance.</span></td></tr>
            <tr><td>No sooner … than</td><td><span class="say">No sooner had we sat down than the lights went out.</span></td></tr>
            <tr><td>Hardly … when</td><td><span class="say">Hardly had the speech begun when the audience erupted.</span></td></tr>
            <tr><td>Not only … but also</td><td><span class="say">Not only did prices rise, but wages also fell.</span></td></tr>
            <tr><td>Seldom / Rarely</td><td><span class="say">Seldom do we witness such generosity.</span></td></tr>
            <tr><td>Little</td><td><span class="say">Little did they realise how serious it was.</span></td></tr>
          </table>
          <p>Schemat: <b>wyrażenie negatywne + operator + podmiot + czasownik główny</b>. Po <span class="say">No sooner</span> i <span class="say">Hardly</span> zwykle stosujemy czas Past Perfect.</p>
          <p class="tip">💡 Inwersja występuje głównie w stylu pisanym, retorycznym i literackim — w mowie potocznej brzmi nienaturalnie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wyrażenia ograniczające", words: [
          { en: "no sooner", pl: "ledwie, zaledwie", example: "No sooner had I closed my eyes than the alarm rang." },
          { en: "under no circumstances", pl: "pod żadnym pozorem", example: "Under no circumstances may staff disclose client data." },
          { en: "not until", pl: "dopiero gdy, nie wcześniej niż", example: "Not until dawn did the rescue team reach the summit." },
          { en: "scarcely", pl: "ledwo, zaledwie", example: "Scarcely had she spoken when the room fell silent." },
          { en: "in no way", pl: "w żaden sposób", example: "In no way does this excuse his behaviour." },
          { en: "at no point", pl: "w żadnym momencie", example: "At no point were the residents consulted." },
          { en: "only after", pl: "dopiero po", example: "Only after the trial did the truth emerge." },
          { en: "nowhere", pl: "nigdzie", example: "Nowhere is the problem more acute than in rural areas." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: inwersja", theoryRef: "C1/x1/s1", questions: [
          { kind: "choice", q: "Never ___ such a breathtaking view before that morning.", options: ["I had seen", "had I seen", "I saw"], answer: 1, theoryRef: "C1/x1/s1" },
          { kind: "gap", q: "No sooner had the meeting ended ___ the journalists rushed in.", answer: "than", theoryRef: "C1/x1/s1" },
          { kind: "dropdown", q: "Seldom ___ a politician admit to being wrong.", options: ["does", "do", "is"], answer: 0, theoryRef: "C1/x1/s1" },
          { kind: "transform", q: "Przekształć z inwersją: 'I had hardly arrived when the storm broke.'", given: "I had hardly arrived when the storm broke.", hint: "Zacznij od „Hardly”.", answer: "Hardly had I arrived when the storm broke.", theoryRef: "C1/x1/s1" },
          { kind: "truefalse", q: "Zdanie „Rarely he complains about anything” zawiera poprawną inwersję.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["Little", "did", "she", "know", "what", "lay", "ahead"], answer: ["Little", "did", "she", "know", "what", "lay", "ahead"] },
          { kind: "transform", q: "Przekształć z inwersją: 'She not only sang but also danced.'", given: "She not only sang but also danced.", hint: "Zacznij od „Not only”.", answer: "Not only did she sing but she also danced.", theoryRef: "C1/x1/s1" }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: przemówienie laureata", intro: "Fragment przemówienia podczas ceremonii wręczenia nagrody.", theoryRef: "C1/x1/s1", passage: `
          <p>Never in my wildest dreams had I imagined standing on this stage. No sooner had the committee announced my name than a wave of disbelief washed over me. Rarely does an ordinary researcher receive such recognition, and not for a moment do I take it lightly. Little did I know, when I began this work two decades ago, that a single overlooked observation would one day reshape an entire field. Only through the unwavering support of my colleagues did the project survive its bleakest years. At no point was the path straightforward; scarcely a month passed without some fresh setback. Not until the final experiments did the data finally align with our boldest predictions. So tonight I accept this honour not as mine alone, but as a tribute to everyone who refused to give up.</p>`,
        questions: [
          { kind: "truefalse", q: "Mówca spodziewał się, że jego wczesne obserwacje zmienią całą dziedzinę.", answer: false },
          { kind: "choice", q: "Co umożliwiło przetrwanie projektu w najtrudniejszych latach?", options: ["finansowanie rządowe", "niezachwiane wsparcie kolegów", "szczęśliwy przypadek"], answer: 1 },
          { kind: "gap", q: "Uzupełnij z tekstu: 'No sooner had the committee announced my name ___ a wave of disbelief washed over me.'", answer: "than", theoryRef: "C1/x1/s1" },
          { kind: "truefalse", q: "Droga do sukcesu była prosta i pozbawiona przeszkód.", answer: false },
          { kind: "choice", q: "Jak mówca traktuje nagrodę?", options: ["jako wyłącznie własną zasługę", "jako hołd dla wszystkich, którzy się nie poddali", "jako rekompensatę finansową"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: rozmowa po konferencji", theoryRef: "C1/x1/s1", recordLine: 1, lines: [
          { speaker: "Mentor", en: "What did you make of the keynote speaker this morning?", pl: "Co sądzisz o dzisiejszym głównym prelegencie?" },
          { speaker: "Ty", en: "Rarely have I heard an argument presented with such clarity.", pl: "Rzadko słyszałem argument przedstawiony z taką jasnością." },
          { speaker: "Mentor", en: "Indeed. Not only was the data compelling, but the delivery was flawless.", pl: "W rzeczy samej. Nie dość, że dane były przekonujące, to przekaz był nienaganny." },
          { speaker: "Ty", en: "No sooner had she finished than the whole hall rose to applaud.", pl: "Ledwie skończyła, gdy cała sala wstała, by oklaskiwać." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: inwersja z przysłówkami negatywnymi", questions: [
          { kind: "choice", q: "___ had the train left the platform when the warning sounded.", options: ["Scarcely", "Never", "Seldom"], answer: 0 },
          { kind: "transform", q: "Przekształć z inwersją: 'You should not reveal this under any circumstances.'", given: "You should not reveal this under any circumstances.", hint: "Zacznij od „Under no circumstances”.", answer: "Under no circumstances should you reveal this." },
          { kind: "gap", q: "Not until the report was published ___ the public learn the truth.", answer: "did" },
          { kind: "dropdown", q: "Nowhere ___ the contrast more striking than here.", options: ["is", "does", "has"], answer: 0 },
          { kind: "truefalse", q: "„No sooner had she left when the phone rang” jest poprawne (po 'No sooner' używamy 'than').", answer: false },
          { kind: "match", pairs: [{ a: "No sooner … than", b: "ledwie … gdy" }, { a: "Little did he know", b: "mało wiedział" }, { a: "At no point", b: "w żadnym momencie" }, { a: "Under no circumstances", b: "pod żadnym pozorem" }] }
        ]}
      ]
    },

    /* ============================================================
       x2 — (Lexical) Advanced phrasal verbs & idioms
       ============================================================ */
    {
      id: "x2", title: "Zaawansowane czasowniki frazowe i idiomy", icon: "🧩",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: czasowniki frazowe i idiomy C1", html: `
          <p>Na poziomie C1 czasowniki frazowe i idiomy nadają wypowiedzi <b>naturalność i barwę</b>. Wiele z nich ma znaczenie nieoczywiste, dalekie od dosłownego.</p>
          <table class="t-table">
            <tr><th>Wyrażenie</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">to gloss over something</span></td><td>przemilczać, prześlizgiwać się po czymś</td></tr>
            <tr><td><span class="say">to bank on something</span></td><td>liczyć na coś, polegać na czymś</td></tr>
            <tr><td><span class="say">to bring something to a head</span></td><td>doprowadzać coś do punktu krytycznego</td></tr>
            <tr><td><span class="say">to be a stickler for something</span></td><td>być pedantem, przywiązywać wagę do czegoś</td></tr>
            <tr><td><span class="say">to throw in the towel</span></td><td>poddać się, skapitulować</td></tr>
          </table>
          <p>Idiomy często bywają nierozłączne — nie należy zmieniać ich składników (np. <span class="say">to bite the bullet</span>, nie „to bite the metal”).</p>
          <p class="tip">💡 Ucz się idiomów w pełnych zdaniach — kontekst pomaga zapamiętać rejestr i kolokacje.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: phrasal verbs i idiomy", words: [
          { en: "to mull over", pl: "rozważać, przemyśliwać", example: "I need a few days to mull over your offer." },
          { en: "to back down", pl: "wycofać się (ze stanowiska)", example: "Neither side was willing to back down." },
          { en: "to weather the storm", pl: "przetrwać trudny okres", example: "Small firms struggled to weather the storm." },
          { en: "to cut corners", pl: "iść na skróty, oszczędzać kosztem jakości", example: "They cut corners and the bridge collapsed." },
          { en: "to be on the fence", pl: "być niezdecydowanym", example: "Many voters are still on the fence." },
          { en: "to bite the bullet", pl: "zacisnąć zęby, zrobić coś nieprzyjemnego", example: "We finally bit the bullet and signed the lease." },
          { en: "to pan out", pl: "udać się, wyjść (o planach)", example: "Let us see how the negotiations pan out." },
          { en: "to rope someone in", pl: "wciągnąć kogoś do czegoś", example: "They roped me in to organise the gala." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: phrasal verbs i idiomy", theoryRef: "C1/x2/s1", questions: [
          { kind: "choice", q: "After hours of debate, both leaders refused to ___ down.", options: ["back", "mull", "rope"], answer: 0, theoryRef: "C1/x2/s1" },
          { kind: "match", pairs: [{ a: "to gloss over", b: "przemilczać" }, { a: "to throw in the towel", b: "poddać się" }, { a: "to cut corners", b: "iść na skróty" }, { a: "to be on the fence", b: "być niezdecydowanym" }] },
          { kind: "gap", q: "Let me ___ over your proposal and reply tomorrow.", answer: "mull", theoryRef: "C1/x2/s1" },
          { kind: "multi", q: "Które wyrażenia oznaczają „poddać się / skapitulować”?", options: ["throw in the towel", "weather the storm", "give up", "bank on it"], answers: [0, 2] },
          { kind: "choice", q: "The crisis finally came to a ___, forcing a decision.", options: ["head", "corner", "fence"], answer: 0 },
          { kind: "truefalse", q: "„To weather the storm” znaczy „przetrwać trudny okres”.", answer: true },
          { kind: "dropdown", q: "We had to bite the ___ and tell them the bad news.", options: ["bullet", "towel", "corner"], answer: 0 }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: rozmowa o projekcie", audio: "So, how is the new product launch panning out? Honestly, it has been tougher than we banked on. The marketing team cut corners with the testing, and now the whole thing has come to a head. We can either back down and delay, or bite the bullet and ship it as it is. I would rather mull it over for a day than throw in the towel.", instructions: "Wysłuchaj rozmowy i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Dlaczego sytuacja stała się krytyczna?", options: ["zespół marketingu poszedł na skróty przy testach", "zabrakło budżetu", "klient wycofał zamówienie"], answer: 0 },
          { kind: "truefalse", q: "Mówca jest gotów natychmiast się poddać i porzucić projekt.", answer: false },
          { kind: "multi", q: "Jakie opcje rozważają mówcy?", options: ["wycofać się i opóźnić", "zacisnąć zęby i wypuścić produkt", "zwolnić cały zespół", "zwiększyć cenę"], answers: [0, 1] },
          { kind: "dictation", q: "Zapisz usłyszane zdanie:", audio: "It has been tougher than we banked on.", answer: "It has been tougher than we banked on." }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: użyj idiomów", prompts: [
          { en: "I am still on the fence about whether to accept the job.", pl: "Wciąż jestem niezdecydowany, czy przyjąć tę pracę." },
          { en: "Let us see how the talks pan out before we celebrate.", pl: "Zobaczmy, jak potoczą się rozmowy, zanim zaczniemy świętować." },
          { en: "The company managed to weather the storm and emerged stronger.", pl: "Firmie udało się przetrwać trudny okres i wyszła z niego silniejsza." },
          { en: "We finally bit the bullet and replaced the ageing system.", pl: "W końcu zacisnęliśmy zęby i wymieniliśmy przestarzały system." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: phrasal verbs i idiomy", questions: [
          { kind: "gap", q: "The minister tried to ___ over the controversial figures in his speech.", answer: "gloss" },
          { kind: "choice", q: "They were reluctant to ___ in the towel after years of effort.", options: ["throw", "cut", "bank"], answer: 0 },
          { kind: "multi", q: "Które wyrażenia opisują osobę przywiązującą wagę do detali lub zasad?", options: ["a stickler for the rules", "on the fence", "a perfectionist", "cutting corners"], answers: [0, 2] },
          { kind: "match", pairs: [{ a: "to bank on", b: "liczyć na" }, { a: "to rope in", b: "wciągnąć kogoś" }, { a: "to pan out", b: "udać się" }, { a: "to bring to a head", b: "doprowadzić do punktu krytycznego" }] },
          { kind: "dropdown", q: "She is such a ___ for punctuality that she arrives ten minutes early.", options: ["stickler", "corner", "towel"], answer: 0 },
          { kind: "truefalse", q: "„To cut corners” oznacza wykonywać coś szczególnie starannie.", answer: false }
        ]}
      ]
    },

    /* ============================================================
       x3 — (Grammar) Cleft sentences
       ============================================================ */
    {
      id: "x3", title: "Zdania rozszczepione (cleft)", icon: "✂️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zdania rozszczepione (cleft)", html: `
          <p><b>Zdania rozszczepione</b> dzielą jedno zdanie na dwie części, aby uwydatnić wybraną informację i stworzyć kontrast.</p>
          <table class="t-table">
            <tr><th>Typ</th><th>Schemat</th><th>Przykład</th></tr>
            <tr><td>It-cleft</td><td>It + be + element + that/who + reszta</td><td><span class="say">It was the rain that ruined the picnic.</span></td></tr>
            <tr><td>What-cleft</td><td>What + zdanie + be + uwydatniony element</td><td><span class="say">What we need is a clear strategy.</span></td></tr>
            <tr><td>All-cleft</td><td>All + zdanie + be + element</td><td><span class="say">All I asked for was an apology.</span></td></tr>
            <tr><td>The thing / reason</td><td>The reason (why) + zdanie + be …</td><td><span class="say">The reason I left was the noise.</span></td></tr>
          </table>
          <p>Aby uwydatnić czynność, używamy konstrukcji <span class="say">What he did was (to) ignore the warning.</span></p>
          <p class="tip">💡 Konstrukcje cleft są świetnym sposobem na podkreślenie kontrastu: „It was not the price but the quality that mattered.”</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: kontrast i uwydatnianie", words: [
          { en: "to single out", pl: "wyróżniać, wskazywać", example: "The report singled out two departments for praise." },
          { en: "underlying", pl: "leżący u podstaw, podstawowy", example: "The underlying cause was never addressed." },
          { en: "what matters", pl: "to, co się liczy", example: "What matters is consistency, not speed." },
          { en: "to pinpoint", pl: "precyzyjnie wskazać", example: "Engineers struggled to pinpoint the fault." },
          { en: "crux", pl: "sedno, istota", example: "The crux of the issue is funding." },
          { en: "to stand out", pl: "wyróżniać się", example: "One detail stood out from the rest." },
          { en: "all the more", pl: "tym bardziej", example: "Her courage was all the more impressive given the risk." },
          { en: "no less than", pl: "nie mniej niż, aż", example: "The fine amounted to no less than a million." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: cleft sentences", theoryRef: "C1/x3/s1", questions: [
          { kind: "transform", q: "Uwydatnij podmiot: 'My brother solved the puzzle.'", given: "My brother solved the puzzle.", hint: "Zacznij od „It was…”.", answer: "It was my brother who solved the puzzle.", theoryRef: "C1/x3/s1" },
          { kind: "gap", q: "What I admire most ___ her honesty.", answer: "is", theoryRef: "C1/x3/s1" },
          { kind: "choice", q: "___ was the lack of evidence that led to his acquittal.", options: ["It", "What", "That"], answer: 0, theoryRef: "C1/x3/s1" },
          { kind: "dropdown", q: "___ they want is a fair trial.", options: ["All", "It", "Who"], answer: 0, theoryRef: "C1/x3/s1" },
          { kind: "transform", q: "Uwydatnij czynność: 'He apologised to the whole team.'", given: "He apologised to the whole team.", hint: "Zacznij od „What he did was…”.", answer: "What he did was apologise to the whole team.", theoryRef: "C1/x3/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "reason", "I", "called", "was", "to", "warn", "you"], answer: ["The", "reason", "I", "called", "was", "to", "warn", "you"] },
          { kind: "truefalse", q: "„What surprised everyone were the results” może występować w liczbie mnogiej, gdy uwydatniany element jest mnogi.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: recenzja sztuki", intro: "Fragment recenzji teatralnej.", theoryRef: "C1/x3/s1", passage: `
          <p>It was not the lavish set design that left the audience spellbound, but the raw intensity of the lead performance. What the director achieved here is something rare: a production that trusts silence as much as speech. All the play asks of us is patience, and the reward is considerable. The reason the second act works so well is its refusal to explain itself. What lingers long after the curtain falls is not the plot but a single, devastating gesture. It is precisely this restraint that distinguishes the staging from countless flashier rivals. What few critics have acknowledged is how delicately the score underpins each scene. In an age of spectacle, what this company offers is a quiet act of faith in its audience.</p>`,
        questions: [
          { kind: "choice", q: "Co najbardziej zachwyciło widzów?", options: ["wystawna scenografia", "surowa intensywność głównej roli", "efekty świetlne"], answer: 1 },
          { kind: "truefalse", q: "Drugi akt działa dobrze, ponieważ wszystko dokładnie wyjaśnia.", answer: false },
          { kind: "choice", q: "Czego sztuka wymaga od widzów według recenzenta?", options: ["cierpliwości", "wiedzy historycznej", "głośnej reakcji"], answer: 0 },
          { kind: "gap", q: "Uzupełnij z tekstu: 'It is precisely this restraint ___ distinguishes the staging from countless flashier rivals.'", answer: "that", theoryRef: "C1/x3/s1" },
          { kind: "truefalse", q: "Recenzent uważa, że to fabuła zostaje w pamięci najdłużej.", answer: false }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: uwydatnianie i kontrast", prompts: [
          { en: "What worries me most is the lack of transparency.", pl: "To, co martwi mnie najbardziej, to brak przejrzystości." },
          { en: "It was her determination, not her talent, that carried her through.", pl: "To jej determinacja, a nie talent, ją przeprowadziła." },
          { en: "All we are asking for is a little more time.", pl: "Wszystko, o co prosimy, to nieco więcej czasu." },
          { en: "The reason the plan failed was poor communication.", pl: "Powodem niepowodzenia planu była słaba komunikacja." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: cleft sentences", questions: [
          { kind: "transform", q: "Uwydatnij okolicznik miejsca: 'They first met in Lisbon.'", given: "They first met in Lisbon.", hint: "Zacznij od „It was in Lisbon…”.", answer: "It was in Lisbon that they first met." },
          { kind: "gap", q: "___ the committee decided was to postpone the vote.", answer: "What" },
          { kind: "choice", q: "All ___ remained was a faint hope.", options: ["that", "which", "who"], answer: 0 },
          { kind: "dropdown", q: "It was ___ the storm that the flight was cancelled.", options: ["because of", "due", "owing"], answer: 0 },
          { kind: "truefalse", q: "„What he needs are advice” jest poprawne (rzeczownik niepoliczalny wymaga 'is').", answer: false },
          { kind: "match", pairs: [{ a: "It-cleft", b: "It was X that…" }, { a: "What-cleft", b: "What … is X" }, { a: "All-cleft", b: "All … is X" }, { a: "Reason-cleft", b: "The reason … was X" }] }
        ]}
      ]
    },

    /* ============================================================
       x4 — (Lexical) Academic & formal vocabulary
       ============================================================ */
    {
      id: "x4", title: "Słownictwo akademickie i formalne", icon: "🎓",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: rejestr akademicki", html: `
          <p>Język akademicki cechuje się <b>precyzją, obiektywizmem i formalnością</b>. Często zastępuje proste czasowniki frazowe ich łacińskimi odpowiednikami.</p>
          <table class="t-table">
            <tr><th>Potocznie</th><th>Akademicko / formalnie</th></tr>
            <tr><td>find out</td><td><span class="say">ascertain</span></td></tr>
            <tr><td>show</td><td><span class="say">demonstrate, illustrate</span></td></tr>
            <tr><td>look into</td><td><span class="say">investigate, examine</span></td></tr>
            <tr><td>get worse</td><td><span class="say">deteriorate</span></td></tr>
            <tr><td>a lot of</td><td><span class="say">a substantial number of</span></td></tr>
          </table>
          <p>Przydatne zwroty łączące argumenty: <span class="say">consequently, nevertheless, with regard to, in light of, it could be argued that</span>.</p>
          <p class="tip">💡 W piśmie akademickim unikaj skrótów (don't → do not) i wyrażeń osobistych typu „I think”; preferuj „it appears that” lub „the evidence suggests”.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: terminy akademickie", words: [
          { en: "to substantiate", pl: "uzasadniać, popierać dowodami", example: "The claim was never substantiated with data." },
          { en: "to delineate", pl: "nakreślać, wyznaczać granice", example: "The chapter delineates the scope of the study." },
          { en: "ostensibly", pl: "pozornie, rzekomo", example: "The reform was ostensibly about efficiency." },
          { en: "to corroborate", pl: "potwierdzać, uwiarygodniać", example: "A second witness corroborated her account." },
          { en: "notwithstanding", pl: "pomimo, niezależnie od", example: "Notwithstanding the cost, the plan proceeded." },
          { en: "paradigm", pl: "paradygmat, model", example: "The discovery challenged the dominant paradigm." },
          { en: "to underpin", pl: "stanowić podstawę, podpierać", example: "These assumptions underpin the entire theory." },
          { en: "salient", pl: "istotny, wyraźny", example: "She highlighted the most salient findings." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: słownictwo akademickie", theoryRef: "C1/x4/s1", questions: [
          { kind: "match", pairs: [{ a: "ascertain", b: "ustalić" }, { a: "deteriorate", b: "pogarszać się" }, { a: "corroborate", b: "potwierdzać" }, { a: "salient", b: "istotny" }] },
          { kind: "choice", q: "The researchers could not ___ their hypothesis with the available data.", options: ["substantiate", "gloss", "rope"], answer: 0, theoryRef: "C1/x4/s1" },
          { kind: "gap", q: "___ the obstacles, the team completed the survey on time.", answer: "Notwithstanding", theoryRef: "C1/x4/s1" },
          { kind: "categorize", q: "Pogrupuj wyrazy według rejestru.", cats: ["Potoczne", "Akademickie"], items: [{ t: "find out", cat: 0 }, { t: "ascertain", cat: 1 }, { t: "look into", cat: 0 }, { t: "investigate", cat: 1 }, { t: "get worse", cat: 0 }, { t: "deteriorate", cat: 1 }] },
          { kind: "dropdown", q: "The policy was ___ designed to cut emissions.", options: ["ostensibly", "roughly", "barely"], answer: 0, theoryRef: "C1/x4/s1" },
          { kind: "truefalse", q: "„Notwithstanding” znaczy „pomimo / niezależnie od”.", answer: true },
          { kind: "multi", q: "Które słowa znaczą „potwierdzać / popierać dowodami”?", options: ["corroborate", "substantiate", "delineate", "deteriorate"], answers: [0, 1] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: wykład wprowadzający", audio: "Welcome to today's lecture. We shall first delineate the scope of our enquiry, and then examine whether the evidence substantiates the prevailing paradigm. Notwithstanding decades of research, several salient questions remain unresolved. What I hope to demonstrate is that the traditional model, ostensibly comprehensive, overlooks one crucial variable. The assumptions that underpin it have rarely been corroborated by independent studies.", instructions: "Wysłuchaj fragmentu wykładu i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Co wykładowca zamierza zrobić najpierw?", options: ["nakreślić zakres badania", "ocenić studentów", "podsumować dyskusję"], answer: 0 },
          { kind: "truefalse", q: "Według wykładowcy tradycyjny model pomija pewną kluczową zmienną.", answer: true },
          { kind: "dictation", q: "Zapisz usłyszane zdanie:", audio: "Several salient questions remain unresolved.", answer: "Several salient questions remain unresolved." },
          { kind: "multi", q: "Które stwierdzenia są zgodne z wykładem?", options: ["dowody nie zawsze potwierdzają dominujący paradygmat", "założenia rzadko były niezależnie potwierdzane", "wszystkie pytania zostały rozwiązane", "model jest pozornie kompletny"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: konsultacja z promotorem", theoryRef: "C1/x4/s1", recordLine: 3, lines: [
          { speaker: "Promotor", en: "Your literature review is thorough, but the central claim needs more support.", pl: "Twój przegląd literatury jest staranny, ale główna teza wymaga więcej poparcia." },
          { speaker: "Ty", en: "I see. So I should substantiate it with additional empirical evidence?", pl: "Rozumiem. Czyli powinienem poprzeć ją dodatkowymi dowodami empirycznymi?" },
          { speaker: "Promotor", en: "Precisely. And try to delineate your methodology more clearly.", pl: "Właśnie. I postaraj się jaśniej nakreślić swoją metodologię." },
          { speaker: "Ty", en: "Notwithstanding the extra work, I think that will strengthen the argument.", pl: "Pomimo dodatkowej pracy sądzę, że to wzmocni argumentację." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: słownictwo akademickie", questions: [
          { kind: "gap", q: "These principles ___ the whole framework of the theory.", answer: "underpin" },
          { kind: "choice", q: "A second study ___ the original findings.", options: ["corroborated", "glossed", "roped"], answer: 0 },
          { kind: "categorize", q: "Pogrupuj wyrażenia łączące według funkcji.", cats: ["Dodawanie / skutek", "Kontrast"], items: [{ t: "consequently", cat: 0 }, { t: "nevertheless", cat: 1 }, { t: "furthermore", cat: 0 }, { t: "however", cat: 1 }] },
          { kind: "match", pairs: [{ a: "delineate", b: "nakreślać" }, { a: "ostensibly", b: "pozornie" }, { a: "paradigm", b: "paradygmat" }, { a: "salient", b: "istotny" }] },
          { kind: "dropdown", q: "It could be ___ that the policy achieved the opposite of its aim.", options: ["argued", "talked", "said up"], answer: 0 },
          { kind: "multi", q: "Które cechy są typowe dla rejestru akademickiego?", options: ["unikanie skrótów", "obiektywizm", "wyrażenia osobiste typu 'I reckon'", "precyzja"], answers: [0, 1, 3] }
        ]}
      ]
    },

    /* ============================================================
       x5 — (Grammar) Advanced conditionals & hypotheticals
       ============================================================ */
    {
      id: "x5", title: "Zaawansowane okresy warunkowe", icon: "🔀",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: warunki mieszane i inwersyjne", html: `
          <p>Na poziomie C1 łączymy różne czasy w jednym okresie warunkowym (<b>mixed conditionals</b>) oraz stosujemy <b>inwersję</b> zamiast „if”.</p>
          <table class="t-table">
            <tr><th>Typ</th><th>Przykład</th></tr>
            <tr><td>Mixed (przeszłość → teraźniejszość)</td><td><span class="say">If I had studied medicine, I would be a doctor now.</span></td></tr>
            <tr><td>Mixed (teraźniejszość → przeszłość)</td><td><span class="say">If she were more careful, she would not have made that error.</span></td></tr>
            <tr><td>Inwersja (3rd)</td><td><span class="say">Had I known, I would have warned you.</span></td></tr>
            <tr><td>Inwersja (2nd)</td><td><span class="say">Were I in your position, I would resign.</span></td></tr>
            <tr><td>Inwersja z 'should'</td><td><span class="say">Should you need help, just call.</span></td></tr>
          </table>
          <p>Hipotetyczne życzenia: <span class="say">I wish I had taken that chance.</span> / <span class="say">If only she would listen.</span></p>
          <p class="tip">💡 Inwersja warunkowa jest formalna: „Had it not been for your help…” brzmi bardziej elegancko niż „If it had not been for…”.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: hipotezy i przypuszczenia", words: [
          { en: "provided that", pl: "pod warunkiem, że", example: "We will proceed provided that funding is secured." },
          { en: "but for", pl: "gdyby nie", example: "But for your advice, I would have failed." },
          { en: "otherwise", pl: "w przeciwnym razie", example: "Hurry, otherwise we will miss the train." },
          { en: "supposing", pl: "przypuśćmy, że", example: "Supposing he refuses, what then?" },
          { en: "in the event of", pl: "w razie", example: "In the event of fire, use the stairs." },
          { en: "as long as", pl: "o ile, dopóki", example: "You may stay as long as you behave." },
          { en: "were it not for", pl: "gdyby nie", example: "Were it not for the rain, we would be hiking." },
          { en: "on condition that", pl: "pod warunkiem, że", example: "He was released on condition that he report weekly." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: okresy warunkowe", theoryRef: "C1/x5/s1", questions: [
          { kind: "transform", q: "Zamień na inwersję: 'If I had known, I would have come.'", given: "If I had known, I would have come.", hint: "Zacznij od „Had I…”.", answer: "Had I known, I would have come.", theoryRef: "C1/x5/s1" },
          { kind: "gap", q: "If she ___ (be) taller, she would have joined the team last year.", answer: "were", theoryRef: "C1/x5/s1" },
          { kind: "choice", q: "___ you change your mind, let me know.", options: ["Should", "Would", "Could"], answer: 0, theoryRef: "C1/x5/s1" },
          { kind: "transform", q: "Zamień na inwersję: 'If you were to ask me, I would say yes.'", given: "If you were to ask me, I would say yes.", hint: "Zacznij od „Were you…”.", answer: "Were you to ask me, I would say yes." },
          { kind: "dropdown", q: "If I weren't so tired now, I ___ to the party last night.", options: ["would have gone", "will go", "had gone"], answer: 0, theoryRef: "C1/x5/s1" },
          { kind: "truefalse", q: "„Had it not been for your help” to formalny odpowiednik „If it had not been for your help”.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["Were", "I", "in", "charge", "I", "would", "change", "everything"], answer: ["Were", "I", "in", "charge", "I", "would", "change", "everything"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: list z refleksją", intro: "Fragment osobistego listu.", theoryRef: "C1/x5/s1", passage: `
          <p>Had I taken your advice all those years ago, I would be living a very different life today. But for a chance encounter at that conference, I might never have changed careers at all. Were I to start over now, I suspect I would make many of the same mistakes, for they taught me more than any success could. If only I had understood then how much patience the work demanded, I would have spared myself considerable anguish. Should you ever face a similar crossroads, do not assume the safer path is the wiser one. Provided that you stay true to your curiosity, even the wrong turns tend to lead somewhere worthwhile. Were it not for those long, uncertain years, I would not value the present as deeply as I do.</p>`,
        questions: [
          { kind: "truefalse", q: "Autor uważa, że gdyby zaczynał od nowa, uniknąłby wszystkich błędów.", answer: false },
          { kind: "choice", q: "Co zmieniło karierę autora?", options: ["przypadkowe spotkanie na konferencji", "awans w pracy", "rada rodziny"], answer: 0 },
          { kind: "gap", q: "Uzupełnij z tekstu: '___ I taken your advice all those years ago, I would be living a very different life.'", answer: "Had", theoryRef: "C1/x5/s1" },
          { kind: "choice", q: "Jaką radę daje autor?", options: ["zawsze wybieraj bezpieczniejszą drogę", "nie zakładaj, że bezpieczniejsza droga jest mądrzejsza", "unikaj zmiany kariery"], answer: 1 },
          { kind: "truefalse", q: "Autor docenia teraźniejszość właśnie dzięki tym niepewnym latom.", answer: true }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: hipotezy", prompts: [
          { en: "Had I known about the deadline, I would have started earlier.", pl: "Gdybym wiedział o terminie, zacząłbym wcześniej." },
          { en: "Were I in your shoes, I would negotiate harder.", pl: "Będąc na twoim miejscu, negocjowałbym ostrzej." },
          { en: "Should anything go wrong, contact me immediately.", pl: "Gdyby coś poszło nie tak, skontaktuj się ze mną natychmiast." },
          { en: "But for the traffic, we would have arrived on time.", pl: "Gdyby nie korki, dotarlibyśmy na czas." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: okresy warunkowe", questions: [
          { kind: "transform", q: "Zamień na inwersję: 'If it had not been for the weather, the match would have continued.'", given: "If it had not been for the weather, the match would have continued.", hint: "Zacznij od „Had it not been for…”.", answer: "Had it not been for the weather, the match would have continued." },
          { kind: "gap", q: "If I were rich, I ___ (buy) that house when it was for sale.", answer: ["would have bought", "would've bought"] },
          { kind: "choice", q: "We will sign the deal ___ that the terms are revised.", options: ["provided", "unless", "otherwise"], answer: 0 },
          { kind: "dropdown", q: "___ you to win, what would you do with the prize?", options: ["Were", "Had", "Should"], answer: 0 },
          { kind: "truefalse", q: "„Should you have any questions, ask now” to poprawna inwersja warunkowa.", answer: true },
          { kind: "match", pairs: [{ a: "Had I known", b: "gdybym wiedział" }, { a: "Were I you", b: "na twoim miejscu" }, { a: "Should you need", b: "gdybyś potrzebował" }, { a: "But for", b: "gdyby nie" }] }
        ]}
      ]
    },

    /* ============================================================
       x6 — (Lexical) Business & economics
       ============================================================ */
    {
      id: "x6", title: "Biznes i ekonomia", icon: "📈",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: słownictwo biznesowe", html: `
          <p>Język biznesu i ekonomii łączy <b>terminologię specjalistyczną</b> z licznymi kolokacjami i metaforami.</p>
          <table class="t-table">
            <tr><th>Wyrażenie</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">to gain a competitive edge</span></td><td>zdobyć przewagę konkurencyjną</td></tr>
            <tr><td><span class="say">economies of scale</span></td><td>korzyści skali</td></tr>
            <tr><td><span class="say">a downturn / a slump</span></td><td>spowolnienie, recesja</td></tr>
            <tr><td><span class="say">to diversify a portfolio</span></td><td>dywersyfikować portfel</td></tr>
            <tr><td><span class="say">supply and demand</span></td><td>podaż i popyt</td></tr>
          </table>
          <p>Czasowniki ruchu opisujące dane: <span class="say">soar, plummet, level off, fluctuate, rebound</span>.</p>
          <p class="tip">💡 W prezentacjach finansowych łącz liczby z metaforą: „Profits soared, before levelling off in the third quarter.”</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: biznes i ekonomia", words: [
          { en: "stakeholder", pl: "interesariusz", example: "All stakeholders were consulted before the merger." },
          { en: "to scale up", pl: "zwiększać skalę działalności", example: "The start-up plans to scale up across Europe." },
          { en: "overheads", pl: "koszty stałe / ogólne", example: "Cutting overheads improved their margins." },
          { en: "to break even", pl: "wyjść na zero", example: "The cafe expects to break even within a year." },
          { en: "liquidity", pl: "płynność finansowa", example: "The crisis exposed the bank's poor liquidity." },
          { en: "to outsource", pl: "zlecać na zewnątrz", example: "They outsource their logistics to a third party." },
          { en: "revenue stream", pl: "źródło przychodów", example: "Subscriptions became their main revenue stream." },
          { en: "to undercut", pl: "podcinać (ceny konkurencji)", example: "Rivals undercut us on price last quarter." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: biznes i ekonomia", theoryRef: "C1/x6/s1", questions: [
          { kind: "match", pairs: [{ a: "stakeholder", b: "interesariusz" }, { a: "overheads", b: "koszty stałe" }, { a: "liquidity", b: "płynność" }, { a: "to break even", b: "wyjść na zero" }] },
          { kind: "choice", q: "After the launch, sales ___ before levelling off in autumn.", options: ["soared", "outsourced", "broke even"], answer: 0, theoryRef: "C1/x6/s1" },
          { kind: "gap", q: "Large factories benefit from economies of ___.", answer: "scale", theoryRef: "C1/x6/s1" },
          { kind: "categorize", q: "Pogrupuj czasowniki opisujące trendy.", cats: ["Wzrost", "Spadek"], items: [{ t: "soar", cat: 0 }, { t: "plummet", cat: 1 }, { t: "rebound", cat: 0 }, { t: "slump", cat: 1 }, { t: "climb", cat: 0 }, { t: "dip", cat: 1 }] },
          { kind: "dropdown", q: "To win market share, the firm decided to ___ its rivals on price.", options: ["undercut", "break even", "scale up"], answer: 0, theoryRef: "C1/x6/s1" },
          { kind: "truefalse", q: "„To break even” oznacza osiągnąć ogromny zysk.", answer: false },
          { kind: "multi", q: "Które terminy dotyczą finansów firmy?", options: ["liquidity", "revenue stream", "overheads", "supply and demand"], answers: [0, 1, 2, 3] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: zebranie zarządu", audio: "Let me summarise this quarter. Revenue soared in the first two months, then dipped slightly as our competitors undercut us on price. The good news is that we have finally broken even on the new product line. To stay ahead, the board recommends we scale up production, diversify our revenue streams, and cut overheads where possible. If we manage that, we should gain a real competitive edge by year end.", instructions: "Wysłuchaj fragmentu zebrania i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Co stało się z przychodami w pierwszych dwóch miesiącach?", options: ["gwałtownie wzrosły", "spadły do zera", "pozostały bez zmian"], answer: 0 },
          { kind: "truefalse", q: "Nowa linia produktów wciąż przynosi straty.", answer: false },
          { kind: "multi", q: "Co rekomenduje zarząd?", options: ["zwiększyć produkcję", "dywersyfikować źródła przychodów", "ograniczyć koszty stałe", "zwolnić cały zespół sprzedaży"], answers: [0, 1, 2] },
          { kind: "dictation", q: "Zapisz usłyszane zdanie:", audio: "We have finally broken even on the new product line.", answer: "We have finally broken even on the new product line." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: negocjacje handlowe", theoryRef: "C1/x6/s1", recordLine: 1, lines: [
          { speaker: "Partner", en: "Frankly, your overheads are too high for us to commit at this price.", pl: "Szczerze mówiąc, wasze koszty stałe są zbyt wysokie, byśmy zobowiązali się przy tej cenie." },
          { speaker: "Ty", en: "I understand, but our quality gives you a genuine competitive edge.", pl: "Rozumiem, ale nasza jakość daje wam realną przewagę konkurencyjną." },
          { speaker: "Partner", en: "Perhaps, yet a rival has offered to undercut you by fifteen per cent.", pl: "Być może, ale konkurent zaproponował cenę niższą o piętnaście procent." },
          { speaker: "Ty", en: "If you scale up your order, we can revisit the figures and protect your margins.", pl: "Jeśli zwiększycie zamówienie, możemy ponownie przeliczyć liczby i ochronić wasze marże." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: biznes i ekonomia", questions: [
          { kind: "gap", q: "Many companies ___ their IT support to specialised firms abroad.", answer: "outsource" },
          { kind: "choice", q: "During the ___, consumer spending fell sharply.", options: ["downturn", "edge", "stream"], answer: 0 },
          { kind: "categorize", q: "Pogrupuj pojęcia.", cats: ["Przychody", "Koszty"], items: [{ t: "revenue stream", cat: 0 }, { t: "overheads", cat: 1 }, { t: "sales", cat: 0 }, { t: "expenses", cat: 1 }] },
          { kind: "match", pairs: [{ a: "to diversify", b: "dywersyfikować" }, { a: "to scale up", b: "zwiększać skalę" }, { a: "supply and demand", b: "podaż i popyt" }, { a: "competitive edge", b: "przewaga konkurencyjna" }] },
          { kind: "dropdown", q: "Shares ___ after the disappointing earnings report.", options: ["plummeted", "soared", "broke even"], answer: 0 },
          { kind: "multi", q: "Które wyrażenia opisują spadek wartości?", options: ["plummet", "slump", "soar", "dip"], answers: [0, 1, 3] }
        ]}
      ]
    },

    /* ============================================================
       x7 — (Grammar) Participle clauses
       ============================================================ */
    {
      id: "x7", title: "Imiesłowowe równoważniki zdań", icon: "🪢",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: imiesłowowe równoważniki zdań", html: `
          <p><b>Imiesłowowe równoważniki zdań (participle clauses)</b> skracają zdania złożone, czyniąc styl bardziej zwięzłym i formalnym.</p>
          <table class="t-table">
            <tr><th>Funkcja</th><th>Pełne zdanie</th><th>Równoważnik</th></tr>
            <tr><td>Skrócone zdanie względne</td><td>The man who is sitting there…</td><td><span class="say">The man sitting there…</span></td></tr>
            <tr><td>Strona bierna</td><td>The report which was written in haste…</td><td><span class="say">The report written in haste…</span></td></tr>
            <tr><td>Przyczyna</td><td>Because she felt tired, she left.</td><td><span class="say">Feeling tired, she left.</span></td></tr>
            <tr><td>Następstwo czasowe</td><td>After he had finished, he relaxed.</td><td><span class="say">Having finished, he relaxed.</span></td></tr>
          </table>
          <p>Imiesłów czynny (-ing) wyraża czynność równoczesną lub przyczynę; imiesłów bierny (-ed) wyraża stronę bierną; <span class="say">having + past participle</span> wyraża czynność wcześniejszą.</p>
          <p class="tip">💡 Uwaga na „dangling participles” — podmiot imiesłowu musi zgadzać się z podmiotem zdania głównego: „Walking home, I saw…” (nie: „Walking home, the rain started”).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: spójność tekstu", words: [
          { en: "thereby", pl: "tym samym, w ten sposób", example: "She delegated tasks, thereby freeing up time." },
          { en: "given", pl: "biorąc pod uwagę", example: "Given the circumstances, the result was fair." },
          { en: "owing to", pl: "z powodu", example: "Owing to delays, the launch was postponed." },
          { en: "hence", pl: "stąd, dlatego", example: "The data were flawed; hence the wrong conclusion." },
          { en: "regardless of", pl: "niezależnie od", example: "We proceeded regardless of the warnings." },
          { en: "albeit", pl: "aczkolwiek, choć", example: "It was a success, albeit a costly one." },
          { en: "having said that", pl: "mimo to, niemniej", example: "Having said that, I still have reservations." },
          { en: "in doing so", pl: "czyniąc to", example: "They cut prices and, in doing so, lost profit." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: równoważniki imiesłowowe", theoryRef: "C1/x7/s1", questions: [
          { kind: "transform", q: "Skróć zdanie względne: 'The students who are waiting outside can come in.'", given: "The students who are waiting outside can come in.", hint: "Usuń „who are”.", answer: "The students waiting outside can come in.", theoryRef: "C1/x7/s1" },
          { kind: "transform", q: "Zamień na imiesłów: 'After she had locked the door, she left.'", given: "After she had locked the door, she left.", hint: "Zacznij od „Having…”.", answer: "Having locked the door, she left.", theoryRef: "C1/x7/s1" },
          { kind: "choice", q: "___ in 1890, the building is now a museum.", options: ["Built", "Building", "Build"], answer: 0, theoryRef: "C1/x7/s1" },
          { kind: "gap", q: "___ tired, the climbers pressed on to the summit. (Choć zmęczeni)", answer: ["Exhausted", "Tired"], theoryRef: "C1/x7/s1" },
          { kind: "dropdown", q: "___ no other option, we accepted the offer.", options: ["Having", "Had", "Have"], answer: 0, theoryRef: "C1/x7/s1" },
          { kind: "truefalse", q: "„Walking down the street, the shops were closing” to przykład poprawnego imiesłowu.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["Feeling", "unwell", "she", "cancelled", "the", "meeting"], answer: ["Feeling", "unwell", "she", "cancelled", "the", "meeting"] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: relacja z wydarzenia", audio: "Arriving early, the volunteers set up the hall before anyone else turned up. Having checked the equipment twice, they felt confident the event would run smoothly. The speaker, invited at the last minute, delivered a talk praised by everyone present. Faced with a power cut halfway through, the organisers improvised brilliantly. Encouraged by the warm response, they decided to hold the festival again next year.", instructions: "Wysłuchaj relacji i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Dlaczego wolontariusze byli pewni, że wydarzenie pójdzie gładko?", options: ["dwukrotnie sprawdzili sprzęt", "mieli duży budżet", "przyszedł ekspert"], answer: 0 },
          { kind: "truefalse", q: "Prelegent został zaproszony z dużym wyprzedzeniem.", answer: false },
          { kind: "dictation", q: "Zapisz usłyszane zdanie:", audio: "Arriving early, the volunteers set up the hall.", answer: "Arriving early, the volunteers set up the hall." },
          { kind: "multi", q: "Które stwierdzenia są zgodne z relacją?", options: ["organizatorzy poradzili sobie z awarią prądu", "festiwal odbędzie się ponownie w przyszłym roku", "wystąpienie zostało skrytykowane", "wolontariusze przyszli wcześnie"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: zdania imiesłowowe", prompts: [
          { en: "Having read the report, I have a few concerns.", pl: "Przeczytawszy raport, mam kilka zastrzeżeń." },
          { en: "Encouraged by the feedback, we expanded the trial.", pl: "Zachęceni informacją zwrotną, rozszerzyliśmy badanie." },
          { en: "Not knowing the way, we asked a local for directions.", pl: "Nie znając drogi, zapytaliśmy miejscowego o wskazówki." },
          { en: "Designed by a famous architect, the bridge attracts tourists.", pl: "Zaprojektowany przez słynnego architekta, most przyciąga turystów." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: równoważniki imiesłowowe", questions: [
          { kind: "transform", q: "Zamień na imiesłów bierny: 'The novel, which was translated into ten languages, became a classic.'", given: "The novel, which was translated into ten languages, became a classic.", hint: "Usuń „which was”.", answer: "The novel, translated into ten languages, became a classic." },
          { kind: "transform", q: "Zamień na imiesłów: 'Because he was warned in advance, he avoided the trap.'", given: "Because he was warned in advance, he avoided the trap.", hint: "Zacznij od „Warned…”.", answer: "Warned in advance, he avoided the trap." },
          { kind: "gap", q: "___ finished the exam, the students handed in their papers. (Skończywszy)", answer: "Having" },
          { kind: "dropdown", q: "___ the heavy rain, the match was cancelled.", options: ["Given", "Giving", "Gave"], answer: 0 },
          { kind: "truefalse", q: "„Having said that” to zwrot oznaczający „mimo to / niemniej”.", answer: true },
          { kind: "match", pairs: [{ a: "Having done", b: "zrobiwszy" }, { a: "Built in 1900", b: "zbudowany w 1900" }, { a: "Feeling ill", b: "czując się źle" }, { a: "Owing to", b: "z powodu" }] }
        ]}
      ]
    },

    /* ============================================================
       x8 — (Lexical) Society & politics
       ============================================================ */
    {
      id: "x8", title: "Społeczeństwo i polityka", icon: "🏛️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: słownictwo społeczno-polityczne", html: `
          <p>Debata publiczna posługuje się <b>abstrakcyjnym, często wartościującym słownictwem</b>. Warto rozpoznawać niuanse i konotacje.</p>
          <table class="t-table">
            <tr><th>Wyrażenie</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">civic engagement</span></td><td>zaangażowanie obywatelskie</td></tr>
            <tr><td><span class="say">to bridge the divide</span></td><td>niwelować podziały</td></tr>
            <tr><td><span class="say">grassroots movement</span></td><td>ruch oddolny</td></tr>
            <tr><td><span class="say">to hold power to account</span></td><td>rozliczać władzę</td></tr>
            <tr><td><span class="say">polarisation</span></td><td>polaryzacja</td></tr>
          </table>
          <p>Rejestr w polityce bywa eufemistyczny: <span class="say">collateral damage, downsizing, a fiscal adjustment</span>.</p>
          <p class="tip">💡 Zwracaj uwagę na konotacje: „regime” jest negatywne, a „government” neutralne; „freedom fighter” i „terrorist” opisują tę samą osobę z różnych perspektyw.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: społeczeństwo i polityka", words: [
          { en: "constituency", pl: "okręg wyborczy, elektorat", example: "The MP visited her constituency every month." },
          { en: "to enact legislation", pl: "uchwalać przepisy", example: "Parliament enacted new legislation on privacy." },
          { en: "accountability", pl: "odpowiedzialność, rozliczalność", example: "Voters demanded greater accountability." },
          { en: "disenfranchised", pl: "pozbawiony praw / głosu", example: "The reform left thousands disenfranchised." },
          { en: "to galvanise", pl: "zmobilizować, pobudzić", example: "The scandal galvanised public opinion." },
          { en: "partisan", pl: "stronniczy, partyjny", example: "The debate became deeply partisan." },
          { en: "welfare state", pl: "państwo opiekuńcze", example: "They defended the welfare state from cuts." },
          { en: "to lobby", pl: "wywierać nacisk, lobbować", example: "Charities lobbied for tougher rules." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: społeczeństwo i polityka", theoryRef: "C1/x8/s1", questions: [
          { kind: "match", pairs: [{ a: "constituency", b: "okręg wyborczy" }, { a: "accountability", b: "rozliczalność" }, { a: "partisan", b: "stronniczy" }, { a: "to galvanise", b: "zmobilizować" }] },
          { kind: "choice", q: "The protest began as a small ___ movement before spreading nationwide.", options: ["grassroots", "partisan", "welfare"], answer: 0, theoryRef: "C1/x8/s1" },
          { kind: "gap", q: "A free press helps to hold those in power to ___.", answer: "account", theoryRef: "C1/x8/s1" },
          { kind: "categorize", q: "Pogrupuj wyrażenia według konotacji.", cats: ["Neutralne / pozytywne", "Negatywne / eufemistyczne"], items: [{ t: "government", cat: 0 }, { t: "regime", cat: 1 }, { t: "freedom fighter", cat: 0 }, { t: "collateral damage", cat: 1 }] },
          { kind: "dropdown", q: "The scandal ___ voters who had long been apathetic.", options: ["galvanised", "lobbied", "enacted"], answer: 0, theoryRef: "C1/x8/s1" },
          { kind: "truefalse", q: "„Disenfranchised” oznacza „pozbawiony praw lub głosu”.", answer: true },
          { kind: "multi", q: "Które wyrażenia dotyczą uczestnictwa obywateli?", options: ["civic engagement", "grassroots movement", "to lobby", "fiscal adjustment"], answers: [0, 1, 2] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: artykuł opinii", intro: "Fragment komentarza prasowego.", theoryRef: "C1/x8/s1", passage: `
          <p>Few would dispute that public trust in politics has eroded over the past decade. What galvanises voters today is rarely a manifesto, but a sense that someone, somewhere, is finally being held to account. Grassroots movements, ostensibly powerless, have repeatedly forced reluctant governments to enact legislation they had long resisted. Yet polarisation cuts both ways: the very energy that mobilises one constituency can alienate another. Bridging the divide demands a patience that an outraged electorate rarely affords its leaders. Those left disenfranchised by economic change are understandably suspicious of polished promises. If democracy is to renew itself, it must rediscover the unglamorous virtues of compromise and accountability. Whether our institutions are equal to that task remains, for now, an open question.</p>`,
        questions: [
          { kind: "truefalse", q: "Według autora to manifesty wyborcze najbardziej mobilizują dziś wyborców.", answer: false },
          { kind: "choice", q: "Jaki jest skutek polaryzacji według tekstu?", options: ["mobilizuje jeden elektorat, lecz zniechęca inny", "jednoczy całe społeczeństwo", "nie ma wpływu na politykę"], answer: 0 },
          { kind: "gap", q: "Uzupełnij z tekstu: 'A free press helps to hold those in power to ___.' — w artykule chodzi o pojęcie ___.", answer: "account", theoryRef: "C1/x8/s1" },
          { kind: "choice", q: "Czego, zdaniem autora, potrzebuje demokracja, by się odnowić?", options: ["więcej polaryzacji", "kompromisu i rozliczalności", "mniej zaangażowania obywateli"], answer: 1 },
          { kind: "truefalse", q: "Autor jest pewien, że instytucje sprostają temu zadaniu.", answer: false }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: debata przy kawie", theoryRef: "C1/x8/s1", recordLine: 1, lines: [
          { speaker: "Kolega", en: "Do you really think a grassroots campaign can change national policy?", pl: "Czy naprawdę sądzisz, że oddolna kampania może zmienić politykę krajową?" },
          { speaker: "Ty", en: "Absolutely. Such movements often galvanise voters the parties have ignored.", pl: "Z pewnością. Takie ruchy często mobilizują wyborców, których partie zignorowały." },
          { speaker: "Kolega", en: "But doesn't that just deepen the polarisation we already have?", pl: "Ale czy to nie pogłębia tylko polaryzacji, którą już mamy?" },
          { speaker: "Ty", en: "Only if leaders refuse to bridge the divide and hold themselves to account.", pl: "Tylko jeśli przywódcy odmawiają niwelowania podziałów i rozliczania samych siebie." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: społeczeństwo i polityka", questions: [
          { kind: "gap", q: "Several charities ___ ministers for stronger environmental rules.", answer: ["lobbied", "lobby"] },
          { kind: "choice", q: "Parliament finally voted to ___ the long-delayed legislation.", options: ["enact", "galvanise", "lobby"], answer: 0 },
          { kind: "categorize", q: "Pogrupuj pojęcia.", cats: ["Instytucje / ustrój", "Działania obywatelskie"], items: [{ t: "welfare state", cat: 0 }, { t: "grassroots movement", cat: 1 }, { t: "parliament", cat: 0 }, { t: "civic engagement", cat: 1 }] },
          { kind: "match", pairs: [{ a: "to bridge the divide", b: "niwelować podziały" }, { a: "polarisation", b: "polaryzacja" }, { a: "welfare state", b: "państwo opiekuńcze" }, { a: "disenfranchised", b: "pozbawiony głosu" }] },
          { kind: "dropdown", q: "Citizens are demanding far greater ___ from their elected officials.", options: ["accountability", "constituency", "legislation"], answer: 0 },
          { kind: "multi", q: "Które wyrażenia mają konotacje negatywne lub eufemistyczne?", options: ["regime", "collateral damage", "downsizing", "civic engagement"], answers: [0, 1, 2] }
        ]}
      ]
    }
  );
})();
