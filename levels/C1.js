/* ============================================================================
   POZIOM C1 — Ściana szczytowa
   ========================================================================== */

window.COURSE.levels.push({
  id: "C1",
  name: "C1 — Ściana szczytowa",
  subtitle: "Wysokie niebo",
  altitude: "3600 m n.p.m.",
  color: "#ef4444",
  locked: true,
  units: [

    /* ---------------- C1 / U1 — Inwersja i emfaza ---------------- */
    {
      id: "u1", title: "Inwersja i emfaza", icon: "🔄",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: inwersja z wyrażeniami negatywnymi", html: `
          <p><b>Inwersja</b> to przestawienie podmiot–orzeczenie dla uzyskania nacisku lub efektu formalnego. Stosuje się ją po wyrażeniach negatywnych lub ograniczających na początku zdania.</p>
          <table class="t-table">
            <tr><th>Wyrażenie</th><th>Przykład z inwersją</th></tr>
            <tr><td>Never</td><td><span class="say">Never have I seen such courage.</span></td></tr>
            <tr><td>Not only … but also</td><td><span class="say">Not only did she win, but she also broke the record.</span></td></tr>
            <tr><td>Rarely / Seldom</td><td><span class="say">Rarely does he admit his mistakes.</span></td></tr>
            <tr><td>Hardly … when</td><td><span class="say">Hardly had I arrived when it started to rain.</span></td></tr>
            <tr><td>No sooner … than</td><td><span class="say">No sooner had she left than the phone rang.</span></td></tr>
          </table>
          <p>Schemat: <b>wyrażenie negatywne + operator (auxiliary) + podmiot + czasownik główny</b>.</p>
          <p class="tip">💡 Inwersja jest typowa dla angielskiego formalnego i literackiego — nadaje zdaniu dramatyzm.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wyrażenia emfatyczne", words: [
          { en: "under no circumstances", pl: "w żadnych okolicznościach", example: "Under no circumstances should you sign the contract." },
          { en: "on no account", pl: "pod żadnym pozorem", example: "On no account must this door be left open." },
          { en: "in no way", pl: "w żaden sposób", example: "In no way does this affect the outcome." },
          { en: "only then", pl: "dopiero wtedy", example: "Only then did I realise my mistake." },
          { en: "not until", pl: "dopiero gdy / nie wcześniej niż", example: "Not until midnight did the party end." },
          { en: "little", pl: "mało (emfatycznie)", example: "Little did he know what awaited him." },
          { en: "at no time", pl: "nigdy / w żadnym momencie", example: "At no time was the public informed." },
          { en: "no sooner … than", pl: "ledwie … gdy", example: "No sooner had I sat down than the alarm went off." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: inwersja", theoryRef: "C1/u1/s1", questions: [
          { kind: "choice", q: "Never ___ I met anyone so talented.", options: ["have", "did", "was"], answer: 0, theoryRef: "C1/u1/s1" },
          { kind: "choice", q: "Not only ___ she pass the exam, but she also got the highest mark.", options: ["she did", "did she", "she"], answer: 1, theoryRef: "C1/u1/s1" },
          { kind: "gap", q: "Hardly had I arrived ___ the meeting started.", answer: "when", theoryRef: "C1/u1/s1" },
          { kind: "truefalse", q: "Po 'Rarely' stosujemy inwersję: 'Rarely he comes late.'", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["No", "sooner", "had", "she", "left", "than", "the", "phone", "rang"], answer: ["No", "sooner", "had", "she", "left", "than", "the", "phone", "rang"] },
          { kind: "choice", q: "Little ___ she know about the surprise.", options: ["does", "did", "has"], answer: 1 },
          { kind: "truefalse", q: "'Under no circumstances should you leave' zawiera poprawną inwersję.", answer: true }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: dyskusja formalna", theoryRef: "C1/u1/s1", recordLine: 1, lines: [
          { speaker: "Prof. Clark", en: "Have you ever witnessed such a dramatic policy shift?", pl: "Czy był pan świadkiem tak dramatycznej zmiany polityki?" },
          { speaker: "Ty", en: "Never have I seen such a rapid reversal of position.", pl: "Nigdy nie widziałem tak szybkiej zmiany stanowiska." },
          { speaker: "Prof. Clark", en: "Nor have I. Not only did the minister resign, but the entire committee followed.", pl: "Ja też nie. Nie dość, że minister podał się do dymisji, to cały komitet za nim." },
          { speaker: "Ty", en: "Rarely does public pressure produce such swift results.", pl: "Rzadko kiedy presja publiczna przynosi tak szybkie rezultaty." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: inwersja i emfaza", questions: [
          { kind: "choice", q: "___ had she opened the door when the alarm sounded.", options: ["Hardly", "Never", "Rarely"], answer: 0 },
          { kind: "gap", q: "Not only did he fail the test, ___ also lost his grant.", answer: "but" },
          { kind: "order", q: "Ułóż zdanie:", words: ["Under", "no", "circumstances", "should", "you", "reveal", "this"], answer: ["Under", "no", "circumstances", "should", "you", "reveal", "this"] },
          { kind: "truefalse", q: "'At no time the police were informed' jest poprawne gramatycznie.", answer: false },
          { kind: "match", pairs: [{ a: "Never have I…", b: "nigdy nie" }, { a: "Rarely does he…", b: "rzadko kiedy" }, { a: "Little did she…", b: "mało wiedziała" }, { a: "No sooner… than", b: "ledwie… gdy" }] }
        ]}
      ]
    },

    /* ---------------- C1 / U2 — Cleft sentences ---------------- */
    {
      id: "u2", title: "Cleft sentences — zdania rozczłonkowane", icon: "✂️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: cleft sentences", html: `
          <p><b>Cleft sentences</b> służą do uwydatnienia wybranego elementu zdania.</p>
          <p><b>It-cleft:</b> <span class="say">It was John who broke the window.</span> (uwydatnienie podmiotu)</p>
          <p><span class="say">It is money that motivates him.</span> (uwydatnienie dopełnienia)</p>
          <p><b>Wh-cleft (pseudo-cleft):</b> <span class="say">What I need is more time.</span></p>
          <p><span class="say">What she enjoys most is travelling.</span></p>
          <p><b>All-cleft:</b> <span class="say">All I want is peace and quiet.</span></p>
          <table class="t-table">
            <tr><th>Typ</th><th>Schemat</th><th>Przykład</th></tr>
            <tr><td>It-cleft</td><td>It + be + uwydatniony element + that/who + reszta</td><td><span class="say">It was in Paris that they met.</span></td></tr>
            <tr><td>Wh-cleft</td><td>What + podmiot + czasownik + be + uwydatniona reszta</td><td><span class="say">What he said surprised me.</span></td></tr>
          </table>
          <p class="tip">💡 Zdania cleft są powszechne w języku mówionym dla kontrastu i nacisku.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wyrażenia uwydatniające", words: [
          { en: "emphasise", pl: "podkreślać, uwydatniać", example: "She wished to emphasise the key point." },
          { en: "highlight", pl: "wyróżniać, podkreślać", example: "The report highlights several flaws." },
          { en: "the very", pl: "właśnie ten / dokładnie", example: "That is the very reason I came." },
          { en: "precisely", pl: "właśnie, dokładnie", example: "That is precisely what I meant." },
          { en: "primarily", pl: "przede wszystkim", example: "It is primarily a question of trust." },
          { en: "contrast", pl: "kontrast, różnica", example: "In contrast, the second group performed better." },
          { en: "focal point", pl: "punkt centralny", example: "The focal point of the argument is unclear." },
          { en: "bring to light", pl: "ujawniać, wydobywać na jaw", example: "The inquiry brought several issues to light." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: cleft sentences", theoryRef: "C1/u2/s1", questions: [
          { kind: "choice", q: "It was Anna ___ told me the secret.", options: ["who", "which", "what"], answer: 0, theoryRef: "C1/u2/s1" },
          { kind: "gap", q: "What I really need ___ a long holiday.", answer: "is", theoryRef: "C1/u2/s1" },
          { kind: "choice", q: "___ she enjoys most is reading.", options: ["That", "What", "Which"], answer: 1, theoryRef: "C1/u2/s1" },
          { kind: "truefalse", q: "'It was in Rome that she was born' jest poprawnym zdaniem cleft.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["It", "was", "the", "price", "that", "put", "him", "off"], answer: ["It", "was", "the", "price", "that", "put", "him", "off"] },
          { kind: "choice", q: "All ___ is a second chance.", options: ["I want", "I needs", "want I"], answer: 0 },
          { kind: "truefalse", q: "'What I told her was honest.' jest zdaniem wh-cleft.", answer: true }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: uwydatnianie informacji", prompts: [
          { en: "What I find most challenging is public speaking.", pl: "To, co uważam za najtrudniejsze, to publiczne mówienie." },
          { en: "It was the lack of funding that caused the project to fail.", pl: "To właśnie brak finansowania spowodował niepowodzenie projektu." },
          { en: "All I ask for is a fair hearing.", pl: "Wszystko, o co proszę, to sprawiedliwe wysłuchanie." },
          { en: "What surprised me most was his calm reaction.", pl: "Najbardziej zdziwiła mnie jego spokojna reakcja." }
        ]}
      ]
    },

    /* ---------------- C1 / U3 — Zaawansowane kolokacje ---------------- */
    {
      id: "u3", title: "Zaawansowane kolokacje", icon: "🔗",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: kolokacje C1", html: `
          <p><b>Kolokacja</b> to naturalne połączenie wyrazów, które często występują razem. Na poziomie C1 kolokacje stają się bardziej złożone i zróżnicowane stylistycznie.</p>
          <table class="t-table">
            <tr><th>Kategoria</th><th>Przykłady</th></tr>
            <tr><td>Verb + noun</td><td><span class="say">make an assumption, draw a conclusion, reach a consensus, raise awareness, spark controversy</span></td></tr>
            <tr><td>Adj + noun</td><td><span class="say">profound impact, sweeping changes, fierce competition, stark contrast, mounting pressure</span></td></tr>
            <tr><td>Adverb + adj</td><td><span class="say">deeply flawed, utterly exhausted, blatantly obvious, highly controversial, broadly speaking</span></td></tr>
          </table>
          <p>Błędne kolokacje brzmią nienaturalnie, nawet jeśli są gramatycznie poprawne: piszemy <span class="say">make a decision</span>, nie 'do a decision'.</p>
          <p class="tip">💡 Ucz się kolokacji w kontekście, nie jako izolowanych słów.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: kluczowe kolokacje", words: [
          { en: "reach a consensus", pl: "dojść do porozumienia / konsensusu", example: "The committee failed to reach a consensus." },
          { en: "spark controversy", pl: "wzbudzać kontrowersje", example: "The new law sparked widespread controversy." },
          { en: "sweeping changes", pl: "daleko idące / gruntowne zmiany", example: "The government introduced sweeping changes to the tax system." },
          { en: "stark contrast", pl: "wyraźny kontrast", example: "Her optimism stood in stark contrast to his pessimism." },
          { en: "mounting pressure", pl: "rosnąca presja", example: "There is mounting pressure on the CEO to resign." },
          { en: "draw a conclusion", pl: "wyciągać wniosek", example: "It is too early to draw any firm conclusions." },
          { en: "raise awareness", pl: "zwiększać świadomość", example: "The campaign aims to raise awareness of mental health." },
          { en: "deeply flawed", pl: "głęboko wadliwy", example: "The report was deeply flawed in its methodology." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: kolokacje", theoryRef: "C1/u3/s1", questions: [
          { kind: "choice", q: "The scandal ___ widespread controversy.", options: ["made", "sparked", "did"], answer: 1, theoryRef: "C1/u3/s1" },
          { kind: "gap", q: "It is too early to ___ any conclusions.", answer: "draw", theoryRef: "C1/u3/s1" },
          { kind: "choice", q: "There was a ___ contrast between their lifestyles.", options: ["strong", "stark", "heavy"], answer: 1, theoryRef: "C1/u3/s1" },
          { kind: "truefalse", q: "'Do a decision' jest poprawną kolokacją.", answer: false },
          { kind: "match", pairs: [{ a: "raise", b: "awareness" }, { a: "reach", b: "a consensus" }, { a: "sweeping", b: "changes" }, { a: "mounting", b: "pressure" }] },
          { kind: "choice", q: "The new policy is ___ flawed.", options: ["very deeply", "deeply", "strong"], answer: 1 }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: debata akademicka", theoryRef: "C1/u3/s1", recordLine: 1, lines: [
          { speaker: "Dr Evans", en: "Did the research team manage to reach a consensus?", pl: "Czy zespół badawczy zdołał dojść do konsensusu?" },
          { speaker: "Ty", en: "Not yet. There is mounting pressure to publish, but the methodology seems deeply flawed.", pl: "Jeszcze nie. Rośnie presja, żeby publikować, ale metodologia wydaje się głęboko wadliwa." },
          { speaker: "Dr Evans", en: "That would spark controversy in the academic community.", pl: "To wzbudziłoby kontrowersje w środowisku akademickim." },
          { speaker: "Ty", en: "Exactly. We need to draw firm conclusions before we proceed.", pl: "Dokładnie. Musimy wyciągnąć pewne wnioski, zanim przystąpimy do dalszych działań." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: kolokacje", questions: [
          { kind: "gap", q: "The campaign helped to ___ awareness of poverty.", answer: "raise" },
          { kind: "choice", q: "The elections brought ___ changes to the political landscape.", options: ["sweeping", "deep making", "massive doing"], answer: 0 },
          { kind: "truefalse", q: "'Make a conclusion' jest poprawną kolokacją angielską.", answer: false },
          { kind: "match", pairs: [{ a: "stark", b: "contrast" }, { a: "spark", b: "controversy" }, { a: "deeply", b: "flawed" }, { a: "draw", b: "a conclusion" }] }
        ]}
      ]
    },

    /* ---------------- C1 / U4 — Idiomy i wyrażenia idiomatyczne ---------------- */
    {
      id: "u4", title: "Idiomy i wyrażenia idiomatyczne", icon: "🎭",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: idiomy na poziomie C1", html: `
          <p>Idiom to wyrażenie, którego znaczenia nie można odczytać dosłownie ze słów składowych.</p>
          <table class="t-table">
            <tr><th>Idiom</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>bite the bullet</td><td>wziąć się w garść, zacisnąć zęby</td><td><span class="say">Just bite the bullet and apologise.</span></td></tr>
            <tr><td>jump on the bandwagon</td><td>przyłączyć się do modnego trendu</td><td><span class="say">Many companies jumped on the sustainability bandwagon.</span></td></tr>
            <tr><td>read between the lines</td><td>czytać między wierszami</td><td><span class="say">If you read between the lines, you can see he is angry.</span></td></tr>
            <tr><td>burn bridges</td><td>palić za sobą mosty</td><td><span class="say">Do not burn your bridges — you may need their help later.</span></td></tr>
            <tr><td>take with a pinch of salt</td><td>podchodzić do czegoś z rezerwą</td><td><span class="say">Take his promises with a pinch of salt.</span></td></tr>
          </table>
          <p class="tip">💡 Idiomy rozpoznawaj i rozumiej w kontekście, ale używaj ostrożnie — nadużywanie w piśmie formalnym jest błędem stylistycznym.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: idiomy C1", words: [
          { en: "bite the bullet", pl: "zacisnąć zęby, wziąć się w garść", example: "She bit the bullet and underwent the difficult surgery." },
          { en: "read between the lines", pl: "czytać między wierszami", example: "Reading between the lines, the report implies a cover-up." },
          { en: "burn one's bridges", pl: "palić za sobą mosty", example: "He burned his bridges by leaking the information." },
          { en: "jump on the bandwagon", pl: "przyłączyć się do mody", example: "Every brand jumped on the eco-friendly bandwagon." },
          { en: "take with a pinch of salt", pl: "podchodzić z rezerwą", example: "Take media reports with a pinch of salt." },
          { en: "cut corners", pl: "iść na skróty, oszczędzać na jakości", example: "They cut corners to meet the deadline." },
          { en: "keep a low profile", pl: "nie rzucać się w oczy", example: "After the scandal, he kept a low profile." },
          { en: "push the envelope", pl: "przekraczać granice, odważnie eksperymentować", example: "The director always pushes the envelope with her films." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: idiomy", theoryRef: "C1/u4/s1", questions: [
          { kind: "choice", q: "She decided to ___ and deliver the bad news herself.", options: ["bite the bullet", "burn bridges", "cut corners"], answer: 0, theoryRef: "C1/u4/s1" },
          { kind: "choice", q: "You should ___ his statistics with a pinch of salt.", options: ["read", "take", "keep"], answer: 1, theoryRef: "C1/u4/s1" },
          { kind: "gap", q: "They ___ corners to finish the project on time, and quality suffered.", answer: "cut" },
          { kind: "truefalse", q: "'Jump on the bandwagon' znaczy 'skoczyć z wozu'.", answer: false },
          { kind: "match", pairs: [{ a: "keep a low profile", b: "nie rzucać się w oczy" }, { a: "read between the lines", b: "czytać między wierszami" }, { a: "push the envelope", b: "przekraczać granice" }, { a: "burn bridges", b: "palić za sobą mosty" }] },
          { kind: "choice", q: "After the controversy, the politician chose to ___ for a few months.", options: ["keep a low profile", "jump on bandwagon", "bite the lip"], answer: 0 }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: użyj idiomów", prompts: [
          { en: "I had to bite the bullet and admit I was wrong.", pl: "Musiałem zacisnąć zęby i przyznać, że się myliłem." },
          { en: "Sometimes you need to read between the lines to understand what is really going on.", pl: "Czasem trzeba czytać między wierszami, żeby zrozumieć, co naprawdę się dzieje." },
          { en: "He pushed the envelope with his unconventional approach.", pl: "Przekraczał granice swoim niekonwencjonalnym podejściem." },
          { en: "Do not burn your bridges — the industry is smaller than you think.", pl: "Nie pal za sobą mostów — branża jest mniejsza niż myślisz." }
        ]}
      ]
    },

    /* ---------------- C1 / U5 — Rejestr formalny i nieformalny ---------------- */
    {
      id: "u5", title: "Rejestr formalny i nieformalny", icon: "🎩",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: rejestr w języku angielskim", html: `
          <p><b>Rejestr</b> to poziom formalności języka dostosowany do sytuacji, odbiorcy i medium.</p>
          <table class="t-table">
            <tr><th>Nieformalny</th><th>Formalny</th><th>Znaczenie</th></tr>
            <tr><td>get</td><td>obtain / acquire</td><td>otrzymać / nabyć</td></tr>
            <tr><td>think about</td><td>consider</td><td>rozważać</td></tr>
            <tr><td>find out</td><td>ascertain / establish</td><td>ustalić</td></tr>
            <tr><td>start</td><td>commence / initiate</td><td>zacząć / zainicjować</td></tr>
            <tr><td>ask for</td><td>request</td><td>poprosić o</td></tr>
            <tr><td>buy</td><td>purchase</td><td>nabyć</td></tr>
          </table>
          <p><b>Cechy języka formalnego:</b> brak skrótów ('it is' zamiast 'it's'), strona bierna, nominalizacje ('the investigation of' zamiast 'investigating').</p>
          <p><b>Cechy nieformalnego:</b> skróty, phrasal verbs, pytania retoryczne, slang.</p>
          <p class="tip">💡 W e-mailu biznesowym, eseju akademickim lub liście formalnym zawsze używaj rejestru formalnego.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: pary formalne i nieformalne", words: [
          { en: "commence (start)", pl: "rozpocząć (formalnie)", example: "The meeting will commence at 9 a.m." },
          { en: "ascertain (find out)", pl: "ustalić, stwierdzić (formalnie)", example: "We need to ascertain the cause of the delay." },
          { en: "endeavour (try hard)", pl: "usiłować, starać się (formalnie)", example: "We shall endeavour to meet your requirements." },
          { en: "at your earliest convenience", pl: "w najbliższym możliwym czasie", example: "Please respond at your earliest convenience." },
          { en: "notwithstanding", pl: "pomimo, niemniej jednak", example: "Notwithstanding the difficulties, the project succeeded." },
          { en: "hereby", pl: "niniejszym", example: "I hereby confirm my agreement." },
          { en: "forthcoming", pl: "nadchodzący / przyszły", example: "Details will be provided in the forthcoming report." },
          { en: "reiterate", pl: "ponownie podkreślać, powtarzać", example: "Allow me to reiterate my main argument." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: rejestr", theoryRef: "C1/u5/s1", questions: [
          { kind: "choice", q: "Formalny odpowiednik 'find out':", options: ["ascertain", "look up", "figure out"], answer: 0, theoryRef: "C1/u5/s1" },
          { kind: "truefalse", q: "W liście formalnym poprawne jest użycie skrótu 'it's'.", answer: false },
          { kind: "gap", q: "The conference will ___ at ten o'clock. (formalnie: rozpocznie się)", answer: "commence", theoryRef: "C1/u5/s1" },
          { kind: "choice", q: "Który fragment pasuje do e-maila biznesowego?", options: ["Hey, just wondering if you got my last email.", "I am writing to enquire whether you received my previous correspondence.", "Did you get my email?"], answer: 1 },
          { kind: "match", pairs: [{ a: "buy", b: "purchase" }, { a: "try hard", b: "endeavour" }, { a: "start", b: "commence" }, { a: "find out", b: "ascertain" }] },
          { kind: "gap", q: "Please respond ___ your earliest convenience.", answer: "at" }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: rozmowa kwalifikacyjna", theoryRef: "C1/u5/s1", recordLine: 1, lines: [
          { speaker: "Interviewer", en: "Could you elaborate on your previous experience with project management?", pl: "Czy mógłby pan rozwinąć kwestię wcześniejszego doświadczenia w zarządzaniu projektami?" },
          { speaker: "Ty", en: "Certainly. I have endeavoured to lead cross-functional teams in several high-stakes projects.", pl: "Oczywiście. Starałem się kierować wielofunkcjonalnymi zespołami w kilku projektach wysokiego ryzyka." },
          { speaker: "Interviewer", en: "Could you ascertain the scale of those projects?", pl: "Czy mógłby pan określić skalę tych projektów?" },
          { speaker: "Ty", en: "I would be happy to. The largest one commenced in 2021 and involved a budget of over two million pounds.", pl: "Chętnie. Największy rozpoczął się w 2021 roku i obejmował budżet ponad dwóch milionów funtów." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: rejestr", questions: [
          { kind: "choice", q: "Formalny odpowiednik 'get':", options: ["obtain", "grab", "pick up"], answer: 0 },
          { kind: "truefalse", q: "Nominalizacje (np. 'the investigation of') są typowe dla rejestru formalnego.", answer: true },
          { kind: "gap", q: "I ___ confirm my attendance at the meeting. (niniejszym)", answer: "hereby" },
          { kind: "match", pairs: [{ a: "reiterate", b: "powtórzyć / ponownie podkreślić" }, { a: "forthcoming", b: "nadchodzący" }, { a: "notwithstanding", b: "pomimo" }, { a: "at your earliest convenience", b: "w najbliższym możliwym czasie" }] }
        ]}
      ]
    },

    /* ---------------- C1 / U6 — Phrasal verbs zaawansowane ---------------- */
    {
      id: "u6", title: "Phrasal verbs — poziom zaawansowany", icon: "🚀",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: złożone phrasal verbs", html: `
          <p>Na poziomie C1 phrasal verbs są wieloznaczne i zależne od kontekstu.</p>
          <table class="t-table">
            <tr><th>Phrasal verb</th><th>Znaczenie 1</th><th>Znaczenie 2</th></tr>
            <tr><td>make out</td><td>rozróżnić, zrozumieć</td><td>twierdzić (że)</td></tr>
            <tr><td>bring about</td><td>spowodować, wywołać</td><td>—</td></tr>
            <tr><td>account for</td><td>stanowić (procent)</td><td>wyjaśniać (powód)</td></tr>
            <tr><td>build on</td><td>bazować na, rozwijać</td><td>—</td></tr>
            <tr><td>bear out</td><td>potwierdzać (tezę)</td><td>—</td></tr>
          </table>
          <p><b>Three-word phrasal verbs:</b> <span class="say">come up with</span> (wymyślić), <span class="say">put up with</span> (tolerować), <span class="say">look up to</span> (podziwiać), <span class="say">run out of</span> (skończyć się zapas).</p>
          <p class="tip">💡 Phrasal verbs rozdzielne: dopełnienie może stać między czasownikiem a partykułą: <span class="say">put the idea forward</span> = <span class="say">put forward the idea</span>.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: zaawansowane phrasal verbs", words: [
          { en: "bring about", pl: "spowodować, doprowadzić do", example: "The crisis brought about significant policy changes." },
          { en: "account for", pl: "stanowić / wyjaśniać", example: "Tourism accounts for 15% of the economy." },
          { en: "bear out", pl: "potwierdzać (fakty)", example: "The evidence bears out the original hypothesis." },
          { en: "come up with", pl: "wpaść na pomysł, wymyślić", example: "She came up with a brilliant solution." },
          { en: "put up with", pl: "tolerować, znosić", example: "I refuse to put up with this behaviour any longer." },
          { en: "look up to", pl: "podziwiać, szanować", example: "Students look up to inspiring teachers." },
          { en: "build on", pl: "rozwijać, bazować na", example: "We need to build on last year's success." },
          { en: "write off", pl: "skreślać, odpisywać (stratę)", example: "Do not write him off — he still has potential." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: phrasal verbs zaawansowane", theoryRef: "C1/u6/s1", questions: [
          { kind: "choice", q: "The evidence ___ the initial findings.", options: ["bears out", "puts up with", "writes off"], answer: 0, theoryRef: "C1/u6/s1" },
          { kind: "gap", q: "She came ___ with a very creative solution.", answer: "up", theoryRef: "C1/u6/s1" },
          { kind: "choice", q: "Exports ___ for over 40% of GDP.", options: ["account", "bring", "come"], answer: 0 },
          { kind: "truefalse", q: "'Put up with' oznacza 'lubić kogoś bardzo'.", answer: false },
          { kind: "match", pairs: [{ a: "bring about", b: "spowodować" }, { a: "look up to", b: "podziwiać" }, { a: "write off", b: "skreślać" }, { a: "build on", b: "rozwijać / bazować na" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "put", "forward", "a", "radical", "proposal"], answer: ["She", "put", "forward", "a", "radical", "proposal"] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: phrasal verbs w kontekście", prompts: [
          { en: "I cannot put up with constant interruptions during meetings.", pl: "Nie mogę tolerować ciągłych przerw w trakcie spotkań." },
          { en: "We need to build on the momentum we created last quarter.", pl: "Musimy budować na impecie, który stworzyliśmy w ostatnim kwartale." },
          { en: "Has anyone come up with a better approach?", pl: "Czy ktoś wpadł na lepsze podejście?" },
          { en: "The data bears out our original predictions perfectly.", pl: "Dane w pełni potwierdzają nasze pierwotne prognozy." }
        ]}
      ]
    },

    /* ---------------- C1 / U7 — Angielski akademicki ---------------- */
    {
      id: "u7", title: "Angielski akademicki i hedging", icon: "📚",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: hedging i język akademicki", html: `
          <p><b>Hedging</b> to świadome łagodzenie twierdzeń — niezbędne w piśmie naukowym, aby nie brzmieć kategorycznie.</p>
          <table class="t-table">
            <tr><th>Kategoria</th><th>Wyrażenia</th></tr>
            <tr><td>Wyrażanie niepewności</td><td><span class="say">It would appear that… / It seems likely that… / There is some evidence to suggest…</span></td></tr>
            <tr><td>Ograniczanie zakresu</td><td><span class="say">In most cases… / Under certain circumstances… / To some extent…</span></td></tr>
            <tr><td>Dystansowanie</td><td><span class="say">It has been argued that… / Some researchers claim… / According to X…</span></td></tr>
          </table>
          <p><b>Typowe frazy wstępne w eseju:</b></p>
          <ul>
            <li><span class="say">This essay seeks to examine…</span></li>
            <li><span class="say">It is widely acknowledged that…</span></li>
            <li><span class="say">Considerable attention has been paid to…</span></li>
            <li><span class="say">The findings of this study suggest…</span></li>
          </ul>
          <p class="tip">💡 Unikaj w eseju: 'I think', 'I believe', 'Obviously' — zamiast tego użyj hedgingu.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: akademickie frazy", words: [
          { en: "it would appear that", pl: "wydaje się, że (ostrożnie)", example: "It would appear that climate change accelerates biodiversity loss." },
          { en: "there is evidence to suggest", pl: "istnieją dowody sugerujące", example: "There is compelling evidence to suggest a causal link." },
          { en: "it has been argued that", pl: "argumentowano, że", example: "It has been argued that inequality drives conflict." },
          { en: "to some extent", pl: "do pewnego stopnia", example: "This argument is, to some extent, persuasive." },
          { en: "a substantial body of research", pl: "duży dorobek badań / wiele badań", example: "A substantial body of research supports this view." },
          { en: "notwithstanding this", pl: "pomimo tego / niezależnie od tego", example: "Notwithstanding this limitation, the results are valuable." },
          { en: "warrant further investigation", pl: "wymagać dalszych badań", example: "These preliminary findings warrant further investigation." },
          { en: "in the light of", pl: "w świetle (czegoś)", example: "In the light of recent data, the theory must be revised." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: język akademicki", theoryRef: "C1/u7/s1", questions: [
          { kind: "choice", q: "Akademicki odpowiednik 'I think this is true':", options: ["I believe this is true obviously.", "It would appear that this hypothesis holds.", "This is definitely true for sure."], answer: 1, theoryRef: "C1/u7/s1" },
          { kind: "gap", q: "There is compelling evidence to ___ a causal link.", answer: "suggest", theoryRef: "C1/u7/s1" },
          { kind: "truefalse", q: "Słowo 'Obviously' jest odpowiednie w formalnym eseju akademickim.", answer: false },
          { kind: "choice", q: "These findings ___ further investigation.", options: ["warrant", "want", "need asking"], answer: 0 },
          { kind: "match", pairs: [{ a: "to some extent", b: "do pewnego stopnia" }, { a: "in the light of", b: "w świetle" }, { a: "notwithstanding this", b: "pomimo tego" }, { a: "it has been argued", b: "argumentowano, że" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["A", "substantial", "body", "of", "research", "supports", "this", "view"], answer: ["A", "substantial", "body", "of", "research", "supports", "this", "view"] },
          { kind: "truefalse", q: "'It would appear that' jest przykładem hedgingu.", answer: true }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: seminarium naukowe", theoryRef: "C1/u7/s1", recordLine: 3, lines: [
          { speaker: "Prof. White", en: "How would you characterise the methodology of the study?", pl: "Jak scharakteryzowałby pan metodologię badania?" },
          { speaker: "Student A", en: "It has been argued that the sample size is insufficient.", pl: "Argumentowano, że próba badawcza jest niewystarczająca." },
          { speaker: "Prof. White", en: "Indeed. What is your view on the conclusions?", pl: "Rzeczywiście. Co pan sądzi o wnioskach?" },
          { speaker: "Ty", en: "The findings warrant further investigation, and to some extent, I find them compelling.", pl: "Wyniki wymagają dalszych badań i do pewnego stopnia uważam je za przekonujące." }
        ]}
      ]
    },

    /* ---------------- C1 / U8 — Would, modale w przeszłości ---------------- */
    {
      id: "u8", title: "Would i modale w przeszłości", icon: "⏳",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: would (nawyk) i modale + have", html: `
          <p><b>would + bezokolicznik</b> dla przeszłych nawyków (jak 'used to'):</p>
          <p><span class="say">When I was a child, I would spend hours in the garden.</span></p>
          <p class="tip">💡 'Would' dla nawyków — tylko czynnościowe, nie stanowe: 'I would live there' (błąd) vs 'I used to live there' (OK).</p>
          <p><b>Modale + have + III forma</b> dla wnioskowań i spekulacji w przeszłości:</p>
          <table class="t-table">
            <tr><th>Forma</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>must have + V3</td><td>musiał (pewność)</td><td><span class="say">She must have left already.</span></td></tr>
            <tr><td>can't have + V3</td><td>nie mógł (zaprzeczenie)</td><td><span class="say">He can't have done it — he was abroad.</span></td></tr>
            <tr><td>should have + V3</td><td>powinien był (żal/krytyka)</td><td><span class="say">You should have told me earlier.</span></td></tr>
            <tr><td>could have + V3</td><td>mógł (ale nie zrobił)</td><td><span class="say">She could have won if she had tried harder.</span></td></tr>
            <tr><td>might have + V3</td><td>mógł (mała szansa)</td><td><span class="say">He might have misunderstood you.</span></td></tr>
          </table>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wyrażenia z modalami", words: [
          { en: "must have been", pl: "musiał być (pewność wsteczna)", example: "She must have been exhausted after the flight." },
          { en: "can't have known", pl: "nie mógł wiedzieć", example: "He can't have known about the plan — nobody told him." },
          { en: "should have said", pl: "powinieneś był powiedzieć", example: "You should have said something at the meeting." },
          { en: "could have prevented", pl: "mógł zapobiec (ale nie zapobiegł)", example: "Stricter rules could have prevented the accident." },
          { en: "might have misread", pl: "mógł źle odczytać", example: "She might have misread the situation completely." },
          { en: "would spend hours", pl: "spędzał godziny (nawyk z przeszłości)", example: "He would spend hours perfecting his craft." },
          { en: "needn't have done", pl: "nie musiał tego robić (a zrobił)", example: "You needn't have bought flowers — it was not necessary." },
          { en: "ought to have", pl: "powinien był (moralny nakaz)", example: "They ought to have apologised immediately." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: modale w przeszłości", theoryRef: "C1/u8/s1", questions: [
          { kind: "choice", q: "She ___ left already — the lights are off.", options: ["must have", "can't have", "should have"], answer: 0, theoryRef: "C1/u8/s1" },
          { kind: "choice", q: "He ___ done it — he was in hospital at the time.", options: ["must have", "can't have", "could have"], answer: 1, theoryRef: "C1/u8/s1" },
          { kind: "gap", q: "You ___ have told me sooner. I could have helped. (powinieneś był)", answer: "should", theoryRef: "C1/u8/s1" },
          { kind: "truefalse", q: "'Would' można używać dla przeszłych stanów: 'I would live in London'.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["She", "could", "have", "won", "the", "prize"], answer: ["She", "could", "have", "won", "the", "prize"] },
          { kind: "choice", q: "As a child he ___ walk to school every day.", options: ["would", "should", "must"], answer: 0 },
          { kind: "gap", q: "You needn't ___ waited — I was only five minutes late.", answer: "have" }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: spekulacje o przeszłości", theoryRef: "C1/u8/s1", recordLine: 1, lines: [
          { speaker: "Clara", en: "The meeting was cancelled and nobody told us. What do you think happened?", pl: "Spotkanie zostało odwołane i nikt nas nie poinformował. Co twoim zdaniem się stało?" },
          { speaker: "Ty", en: "Someone must have forgotten to send the notification. It can't have been intentional.", pl: "Ktoś musiał zapomnieć wysłać powiadomienie. Nie mogło to być celowe." },
          { speaker: "Clara", en: "I agree. The manager should have double-checked the invitations.", pl: "Zgadzam się. Menedżer powinien był sprawdzić zaproszenia." },
          { speaker: "Ty", en: "Exactly. We could have prepared better if we had known in advance.", pl: "Dokładnie. Mogliśmy lepiej się przygotować, gdybyśmy wiedzieli wcześniej." }
        ]},
        { id: "s5", type: "boss", title: "Sprawdzian: modale w przeszłości", questions: [
          { kind: "choice", q: "They ___ prepared — they had weeks of notice.", options: ["should have", "can't have", "would have"], answer: 0 },
          { kind: "gap", q: "It ___ have been easy — nothing ever is in this business. (nie mogło)", answer: "can't" },
          { kind: "truefalse", q: "'Must have left' wyraża pewne wnioskowanie o przeszłości.", answer: true },
          { kind: "match", pairs: [{ a: "must have", b: "musiał (pewność)" }, { a: "can't have", b: "nie mógł" }, { a: "should have", b: "powinien był" }, { a: "could have", b: "mógł (ale nie)" }] }
        ]}
      ]
    },

    /* ---------------- C1 / U9 — Łączniki i spójność tekstu ---------------- */
    {
      id: "u9", title: "Łączniki i spójność tekstu", icon: "🔀",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zaawansowane łączniki", html: `
          <p>Bogaty repertuar łączników (linking words / discourse markers) jest kluczowy dla spójności tekstu C1.</p>
          <table class="t-table">
            <tr><th>Funkcja</th><th>Łączniki</th></tr>
            <tr><td>Kontrast</td><td><span class="say">nevertheless, nonetheless, whereas, while, albeit, even so, for all that</span></td></tr>
            <tr><td>Przyczyna / skutek</td><td><span class="say">consequently, hence, thus, thereby, as a result, it follows that</span></td></tr>
            <tr><td>Warunek</td><td><span class="say">provided that, on condition that, as long as, in the event that</span></td></tr>
            <tr><td>Przyznanie racji</td><td><span class="say">admittedly, granted, to be fair, it must be acknowledged that</span></td></tr>
            <tr><td>Dodanie argumentu</td><td><span class="say">furthermore, moreover, in addition, what is more, above all</span></td></tr>
          </table>
          <p><b>Uwaga na rejestr:</b> 'thus' i 'hence' brzmią bardziej formalnie niż 'so'; 'whereas' i 'whilst' bardziej formalnie niż 'while'.</p>
          <p class="tip">💡 Unikaj nadużywania 'however' i 'also' — masz do dyspozycji bogatszy repertuar.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: łączniki C1", words: [
          { en: "nevertheless", pl: "niemniej jednak, mimo to", example: "The evidence was weak; nevertheless, the jury convicted him." },
          { en: "whereas", pl: "podczas gdy, natomiast (kontrast)", example: "He prefers classical music, whereas she favours jazz." },
          { en: "consequently", pl: "w konsekwencji, w rezultacie", example: "He missed the deadline; consequently, his contract was terminated." },
          { en: "albeit", pl: "choć, aczkolwiek", example: "It was a victory, albeit a narrow one." },
          { en: "provided that", pl: "pod warunkiem, że", example: "You may attend, provided that you register in advance." },
          { en: "admittedly", pl: "co prawda, trzeba przyznać", example: "Admittedly, the results are not conclusive." },
          { en: "thereby", pl: "przez to, w ten sposób", example: "He resigned, thereby triggering a leadership crisis." },
          { en: "in the event that", pl: "w przypadku gdyby", example: "In the event that talks fail, sanctions will follow." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: łączniki", theoryRef: "C1/u9/s1", questions: [
          { kind: "choice", q: "The study had limitations; ___, its conclusions are broadly accepted.", options: ["nevertheless", "thereby", "whereas"], answer: 0, theoryRef: "C1/u9/s1" },
          { kind: "choice", q: "She studied hard; ___, she passed with distinction.", options: ["albeit", "consequently", "admittedly"], answer: 1, theoryRef: "C1/u9/s1" },
          { kind: "gap", q: "He earns little, ___ he manages to save money each month. (niemniej jednak)", answer: "nevertheless", theoryRef: "C1/u9/s1" },
          { kind: "choice", q: "___ the risks were high, the team proceeded. (choć)", options: ["Albeit", "Whereas", "Thereby"], answer: 0 },
          { kind: "truefalse", q: "'Whereas' wyraża kontrast między dwoma sytuacjami.", answer: true },
          { kind: "match", pairs: [{ a: "consequently", b: "w konsekwencji" }, { a: "provided that", b: "pod warunkiem, że" }, { a: "admittedly", b: "co prawda" }, { a: "thereby", b: "przez to / w ten sposób" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["Admittedly,", "the", "data", "is", "limited,", "but", "the", "trend", "is", "clear"], answer: ["Admittedly,", "the", "data", "is", "limited,", "but", "the", "trend", "is", "clear"] }
        ]},
        { id: "s4", type: "speak", title: "Mówienie: argumentowanie z łącznikami", prompts: [
          { en: "Whereas urban areas grow rapidly, rural communities continue to decline.", pl: "Podczas gdy obszary miejskie szybko rosną, społeczności wiejskie nadal zanikają." },
          { en: "Admittedly, there are drawbacks, but the benefits far outweigh them.", pl: "Co prawda, są wady, ale korzyści dalece je przewyższają." },
          { en: "Consequently, immediate action is required at a governmental level.", pl: "W konsekwencji wymagane jest natychmiastowe działanie na szczeblu rządowym." },
          { en: "The plan will succeed, provided that all parties commit fully.", pl: "Plan zakończy się sukcesem, pod warunkiem że wszystkie strony w pełni się zaangażują." }
        ]}
      ]
    },

    /* ---------------- C1 / U10 — Słowotwórstwo ---------------- */
    {
      id: "u10", title: "Słowotwórstwo — prefiksy, sufiksy, konwersja", icon: "🧩",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: słowotwórstwo na poziomie C1", html: `
          <p><b>Słowotwórstwo</b> (word formation) obejmuje: tworzenie nowych słów przez prefiksy, sufiksy oraz konwersję (zmianę klasy gramatycznej bez zmiany formy).</p>
          <table class="t-table">
            <tr><th>Prefiks</th><th>Znaczenie</th><th>Przykłady</th></tr>
            <tr><td>over-</td><td>nadmiar, zbyt</td><td><span class="say">overestimate, overdue, overwhelm</span></td></tr>
            <tr><td>under-</td><td>niedobór, zbyt mało</td><td><span class="say">undermine, underfunded, underestimate</span></td></tr>
            <tr><td>mis-</td><td>błąd, źle</td><td><span class="say">misinterpret, mismanage, mislead</span></td></tr>
            <tr><td>re-</td><td>ponownie</td><td><span class="say">reassess, restructure, reconsider</span></td></tr>
          </table>
          <table class="t-table">
            <tr><th>Sufiks</th><th>Klasa gramatyczna</th><th>Przykłady</th></tr>
            <tr><td>-tion / -sion</td><td>rzeczownik</td><td><span class="say">investigation, revision</span></td></tr>
            <tr><td>-ify / -ise</td><td>czasownik</td><td><span class="say">justify, standardise</span></td></tr>
            <tr><td>-ous / -al</td><td>przymiotnik</td><td><span class="say">ambiguous, controversial</span></td></tr>
            <tr><td>-ly</td><td>przysłówek</td><td><span class="say">considerably, substantially</span></td></tr>
          </table>
          <p><b>Konwersja:</b> <span class="say">to impact</span> (wpływać) ← 'impact' (noun); <span class="say">to access</span> ← 'access' (noun).</p>
          <p class="tip">💡 Na egzaminie C1 (CAE) zadania Use of English wymagają sprawnego słowotwórstwa — ćwicz systematycznie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: słowotwórstwo w praktyce", words: [
          { en: "overestimate", pl: "przeceniać, zawyżać szacunki", example: "Do not overestimate your ability to multitask." },
          { en: "undermine", pl: "podkopywać, osłabiać", example: "Constant criticism undermines confidence." },
          { en: "misinterpret", pl: "błędnie interpretować", example: "The data was misinterpreted by the media." },
          { en: "reassess", pl: "ponownie oceniać", example: "We need to reassess our strategy in light of new evidence." },
          { en: "justify", pl: "uzasadniać", example: "How do you justify such a large expenditure?" },
          { en: "standardise", pl: "standaryzować", example: "The EU seeks to standardise testing procedures." },
          { en: "ambiguous", pl: "niejednoznaczny, dwuznaczny", example: "The wording of the contract is ambiguous." },
          { en: "considerably", pl: "znacznie, poważnie", example: "Costs have increased considerably over the past decade." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: słowotwórstwo", theoryRef: "C1/u10/s1", questions: [
          { kind: "choice", q: "Prefiks oznaczający 'zbyt dużo, nadmiernie':", options: ["over-", "mis-", "re-"], answer: 0, theoryRef: "C1/u10/s1" },
          { kind: "gap", q: "The original estimate was too high — we ___ the cost. (zawyżyliśmy: over+estimate)", answer: "overestimated", theoryRef: "C1/u10/s1" },
          { kind: "choice", q: "Rzeczownik od 'investigate':", options: ["investigating", "investigation", "investigatous"], answer: 1, theoryRef: "C1/u10/s1" },
          { kind: "truefalse", q: "'Mismanage' oznacza 'zarządzać doskonale'.", answer: false },
          { kind: "match", pairs: [{ a: "re-", b: "ponownie" }, { a: "under-", b: "niedobór / zbyt mało" }, { a: "-ify", b: "tworzy czasownik" }, { a: "-ous", b: "tworzy przymiotnik" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "policy", "was", "misinterpreted", "by", "the", "press"], answer: ["The", "policy", "was", "misinterpreted", "by", "the", "press"] },
          { kind: "choice", q: "Przymiotnik od 'ambiguity':", options: ["ambiguously", "ambiguous", "ambiguify"], answer: 1 }
        ]},
        { id: "s4", type: "dialog", title: "Dialog: redagowanie tekstu", theoryRef: "C1/u10/s1", recordLine: 1, lines: [
          { speaker: "Editor", en: "I think we have overestimated the readership for this article.", pl: "Myślę, że przeceniliśmy zainteresowanie czytelników tym artykułem." },
          { speaker: "Ty", en: "Agreed. The data supports reassessing our target demographic considerably.", pl: "Zgadzam się. Dane sugerują, że powinniśmy znacznie ponownie ocenić naszą grupę docelową." },
          { speaker: "Editor", en: "Also, some passages are ambiguous — readers might misinterpret the argument.", pl: "Poza tym niektóre fragmenty są niejednoznaczne — czytelnicy mogą błędnie zinterpretować argument." },
          { speaker: "Ty", en: "I will rewrite those sections to standardise the tone and justify each claim.", pl: "Przepiszę te fragmenty, aby ujednolicić ton i uzasadnić każde twierdzenie." }
        ]},
        { id: "s5", type: "boss", title: "Wielki sprawdzian C1", questions: [
          { kind: "choice", q: "Never ___ I encountered such a complex problem.", options: ["have", "had", "did"], answer: 0 },
          { kind: "gap", q: "What I need ___ more time to prepare. (is/are)", answer: "is" },
          { kind: "choice", q: "There is ___ evidence to suggest the theory is flawed.", options: ["compelling", "heavy", "strong doing"], answer: 0 },
          { kind: "choice", q: "She ___ have finished by now — it was only a short task.", options: ["must", "can't", "shouldn't"], answer: 0 },
          { kind: "match", pairs: [{ a: "nevertheless", b: "niemniej jednak" }, { a: "whereas", b: "podczas gdy (kontrast)" }, { a: "overestimate", b: "przeceniać" }, { a: "misinterpret", b: "błędnie interpretować" }] },
          { kind: "order", q: "Ułóż zdanie:", words: ["Not", "only", "did", "she", "pass,", "but", "she", "also", "excelled"], answer: ["Not", "only", "did", "she", "pass,", "but", "she", "also", "excelled"] }
        ]}
      ]
    }

  ]
});
