/* C1 — dodatkowe tematy, część 2 (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "C1"; });
  if (!lv) return;
  lv.units.push(

    /* ============================================================
       x9 — (Grammar) Inversion for emphasis (extended)
       ============================================================ */
    {
      id: "x9", title: "Inwersja dla emfazy — konstrukcje zaawansowane", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: inwersja dla emfazy", html: `
          <p><b>Inwersja emfatyczna</b> przenosi wyrażenie negatywne lub ograniczające na początek zdania, po czym następuje operator (czasownik posiłkowy) przed podmiotem. Nadaje to wypowiedzi siłę retoryczną i ton formalny.</p>
          <table class="t-table">
            <tr><th>Wyrażenie</th><th>Przykład z inwersją</th></tr>
            <tr><td>Never have I…</td><td><span class="say">Never have I been so insulted.</span></td></tr>
            <tr><td>Not only … but also</td><td><span class="say">Not only did the firm collapse, but its directors also fled.</span></td></tr>
            <tr><td>Rarely does…</td><td><span class="say">Rarely does an opportunity like this arise.</span></td></tr>
            <tr><td>Only by … / Only when</td><td><span class="say">Only by working together can we succeed.</span></td></tr>
            <tr><td>So + adj … that</td><td><span class="say">So fierce was the storm that all flights were grounded.</span></td></tr>
            <tr><td>Such + be … that</td><td><span class="say">Such was her influence that no one dared object.</span></td></tr>
          </table>
          <p>Po wyrażeniach <span class="say">Only when</span>, <span class="say">Only after</span> i <span class="say">Not until</span> inwersja występuje w <b>zdaniu głównym</b>, a nie w samym zdaniu czasowym: <span class="say">Only when the lights dimmed did the audience fall silent.</span></p>
          <p class="tip">💡 Pamiętaj: bez wyrażenia negatywnego na początku nie ma inwersji. Po nim koniecznie wstaw operator (do/does/did, have/has/had, modal lub forma „be”).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: wyrażenia emfatyczne", words: [
          { en: "only by", pl: "tylko poprzez", example: "Only by listening can we truly understand." },
          { en: "only then", pl: "dopiero wtedy", example: "Only then did the full scale of the disaster emerge." },
          { en: "such was", pl: "tak wielki(a) był(a)", example: "Such was the outrage that the law was repealed." },
          { en: "so rarely", pl: "tak rzadko", example: "So rarely does he praise anyone that we were stunned." },
          { en: "not for one moment", pl: "ani przez chwilę", example: "Not for one moment did I doubt her honesty." },
          { en: "in no way", pl: "w żaden sposób", example: "In no way am I responsible for this error." },
          { en: "nowhere else", pl: "nigdzie indziej", example: "Nowhere else will you find such hospitality." },
          { en: "on no occasion", pl: "w żadnym wypadku, nigdy", example: "On no occasion has he ever apologised." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: inwersja dla emfazy", theoryRef: "C1/x9/s1", questions: [
          { kind: "choice", q: "Only by working together ___ overcome this crisis.", options: ["we can", "can we", "we could"], answer: 1, theoryRef: "C1/x9/s1" },
          { kind: "gap", q: "So loud ___ the music that we could not hear ourselves think.", answer: "was", theoryRef: "C1/x9/s1" },
          { kind: "dropdown", q: "Such ___ his reputation that doors opened everywhere he went.", options: ["was", "did", "had"], answer: 0, theoryRef: "C1/x9/s1" },
          { kind: "transform", q: "Przekształć z inwersją: 'I have never seen such dedication.'", given: "I have never seen such dedication.", hint: "Zacznij od „Never”.", answer: "Never have I seen such dedication.", theoryRef: "C1/x9/s1" },
          { kind: "truefalse", q: "Zdanie „Only when he left did she relax” zawiera poprawną inwersję.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["Not", "only", "did", "he", "lie,", "but", "he", "also", "cheated"], answer: ["Not", "only", "did", "he", "lie,", "but", "he", "also", "cheated"] },
          { kind: "transform", q: "Przekształć z inwersją: 'He praises anyone so rarely.'", given: "He praises anyone so rarely.", hint: "Zacznij od „Rarely does”.", answer: "Rarely does he praise anyone.", theoryRef: "C1/x9/s1" }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: mowa pożegnalna dyrektora", intro: "Fragment przemówienia ustępującego prezesa.", theoryRef: "C1/x9/s1", passage: `
          <p>Never in three decades have I worked alongside a team of such resilience. So profound was the transformation we achieved together that I scarcely recognise the company I joined. Not only did we survive two recessions, but we also emerged stronger after each. Rarely does a leader inherit so much, and rarely is so much owed to so many. Only by trusting one another did we navigate the darkest quarters. Such was the loyalty of this workforce that, even in lean years, not one of you abandoned the mission. Nowhere else, I am convinced, would I have found such integrity. Only now, as I prepare to step aside, do I fully grasp how rare this place truly is. Not for one moment will I forget what we built.</p>`,
        questions: [
          { kind: "truefalse", q: "Mówca twierdzi, że firma upadła podczas dwóch recesji.", answer: false },
          { kind: "choice", q: "Co umożliwiło przetrwanie najtrudniejszych kwartałów?", options: ["wzajemne zaufanie", "rządowe wsparcie", "redukcja zatrudnienia"], answer: 0 },
          { kind: "gap", q: "Uzupełnij z tekstu: 'Such ___ the loyalty of this workforce that not one of you abandoned the mission.'", answer: "was", theoryRef: "C1/x9/s1" },
          { kind: "truefalse", q: "Mówca dopiero teraz, odchodząc, w pełni docenia wyjątkowość tego miejsca.", answer: true },
          { kind: "choice", q: "Jaki ton ma to przemówienie?", options: ["pełen wdzięczności i emfazy", "obojętny i techniczny", "agresywny i oskarżycielski"], answer: 0 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: po gali branżowej", theoryRef: "C1/x9/s1", recordLine: 1, lines: [
          { speaker: "Kolega", en: "What did you think of the award ceremony tonight?", pl: "Co sądzisz o dzisiejszej gali wręczenia nagród?" },
          { speaker: "Ty", en: "Rarely have I attended an event organised with such precision.", pl: "Rzadko bywałem na wydarzeniu zorganizowanym z taką precyzją." },
          { speaker: "Kolega", en: "True. Not only was the venue stunning, but the speeches were genuinely moving.", pl: "Prawda. Nie dość, że miejsce było zachwycające, to przemówienia były naprawdę poruszające." },
          { speaker: "Ty", en: "So inspiring was the keynote that I forgot to check my phone all evening.", pl: "Przemówienie główne było tak inspirujące, że przez cały wieczór nie zerknąłem na telefon." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: inwersja dla emfazy", questions: [
          { kind: "choice", q: "___ when the results came in did we realise the scale of our victory.", options: ["Only", "Never", "Such"], answer: 0 },
          { kind: "transform", q: "Przekształć z inwersją: 'The wind was so strong that the tents collapsed.'", given: "The wind was so strong that the tents collapsed.", hint: "Zacznij od „So strong”.", answer: "So strong was the wind that the tents collapsed." },
          { kind: "gap", q: "Not until the very end ___ the audience understand the twist.", answer: "did" },
          { kind: "dropdown", q: "In no way ___ this decision reflect company policy.", options: ["does", "do", "is"], answer: 0 },
          { kind: "truefalse", q: "„Only by hard work she succeeded” jest poprawne (brak inwersji po „Only by”).", answer: false },
          { kind: "match", pairs: [{ a: "Only then did…", b: "dopiero wtedy" }, { a: "Such was…", b: "tak wielki był" }, { a: "Not only … but also", b: "nie tylko … ale też" }, { a: "Rarely does…", b: "rzadko kiedy" }] }
        ]}
      ]
    },

    /* ============================================================
       x10 — (Lexical) Business & work idioms
       ============================================================ */
    {
      id: "x10", title: "Idiomy biznesowe i zawodowe", icon: "💼",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: idiomy w świecie pracy", html: `
          <p>Język miejsca pracy obfituje w <b>idiomy i kolokacje</b>, które brzmią naturalnie w spotkaniach, e-mailach i negocjacjach. Ich znaczenie rzadko wynika z dosłownego sensu słów.</p>
          <table class="t-table">
            <tr><th>Idiom</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">to think outside the box</span></td><td>myśleć nieszablonowo</td></tr>
            <tr><td><span class="say">to get the ball rolling</span></td><td>ruszyć z miejsca, rozpocząć</td></tr>
            <tr><td><span class="say">to be on the same page</span></td><td>być zgodnym, rozumieć tak samo</td></tr>
            <tr><td><span class="say">to touch base</span></td><td>skontaktować się, zsynchronizować</td></tr>
            <tr><td><span class="say">to go the extra mile</span></td><td>zrobić więcej niż trzeba</td></tr>
            <tr><td><span class="say">to corner the market</span></td><td>zdominować rynek</td></tr>
          </table>
          <p>Wiele z nich ma odpowiednik czasownikowy w rejestrze formalnym, jednak w mowie i e-mailach biznesowych idiomy budują naturalny, swobodny ton.</p>
          <p class="tip">💡 Uważaj na nadużycie „korporacyjnego żargonu” (corporate buzzwords) — w nadmiarze brzmi pusto. Stosuj idiomy celowo i oszczędnie.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: idiomy biznesowe", words: [
          { en: "to get the ball rolling", pl: "ruszyć z miejsca, rozpocząć", example: "Let us get the ball rolling with a quick update." },
          { en: "to be on the same page", pl: "być zgodnym, rozumieć tak samo", example: "Before we proceed, let us make sure we are on the same page." },
          { en: "to think outside the box", pl: "myśleć nieszablonowo", example: "We need someone who can think outside the box." },
          { en: "to go the extra mile", pl: "zrobić więcej niż trzeba", example: "Our staff always go the extra mile for clients." },
          { en: "to touch base", pl: "skontaktować się, zsynchronizować", example: "Let us touch base next week to review progress." },
          { en: "to take on board", pl: "wziąć pod uwagę, przyjąć (uwagi)", example: "I will take your feedback on board." },
          { en: "a ballpark figure", pl: "szacunkowa kwota / liczba", example: "Can you give me a ballpark figure for the budget?" },
          { en: "to learn the ropes", pl: "wdrożyć się, poznać tajniki", example: "It took her a month to learn the ropes." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: idiomy biznesowe", theoryRef: "C1/x10/s1", questions: [
          { kind: "match", pairs: [{ a: "to get the ball rolling", b: "ruszyć z miejsca" }, { a: "to be on the same page", b: "być zgodnym" }, { a: "to go the extra mile", b: "zrobić więcej niż trzeba" }, { a: "a ballpark figure", b: "szacunkowa kwota" }] },
          { kind: "choice", q: "Before the launch, we must ensure everyone is on the same ___.", options: ["page", "mile", "base"], answer: 0, theoryRef: "C1/x10/s1" },
          { kind: "gap", q: "Could you give me a ___ figure so I can plan the budget?", answer: "ballpark", theoryRef: "C1/x10/s1" },
          { kind: "dropdown", q: "Let us ___ base on Friday to see where we stand.", options: ["touch", "get", "learn"], answer: 0, theoryRef: "C1/x10/s1" },
          { kind: "truefalse", q: "„To think outside the box” oznacza ściśle trzymać się procedur.", answer: false },
          { kind: "multi", q: "Które wyrażenia opisują zaangażowanie i wysiłek?", options: ["go the extra mile", "learn the ropes", "be on the fence", "get the ball rolling"], answers: [0, 3] },
          { kind: "choice", q: "Thank you for the suggestions; I will take them ___.", options: ["on board", "off base", "outside"], answer: 0 }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: odprawa projektowa", audio: "Right, let us get the ball rolling. First, I want to make sure we are all on the same page about the deadline. Sarah, can you give me a ballpark figure for the extra costs? Thanks. Now, the client expects us to go the extra mile on this one, so think outside the box if you hit a wall. I will take any concerns on board, but please touch base with me before you contact the supplier directly.", instructions: "Wysłuchaj odprawy i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Czego mówca chce się najpierw upewnić?", options: ["że wszyscy rozumieją termin tak samo", "że budżet jest zatwierdzony", "że klient zapłacił"], answer: 0 },
          { kind: "truefalse", q: "Klient oczekuje, że zespół zrobi więcej niż konieczne.", answer: true },
          { kind: "multi", q: "O co prosi mówca zespół?", options: ["myślcie nieszablonowo, gdy utkniecie", "skontaktujcie się ze mną przed kontaktem z dostawcą", "natychmiast zwolnijcie dostawcę", "podajcie szacunkową kwotę kosztów"], answers: [0, 1, 3] },
          { kind: "dictation", q: "Zapisz usłyszane zdanie:", audio: "Let us get the ball rolling.", answer: "Let us get the ball rolling." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: rozmowa z nowym pracownikiem", theoryRef: "C1/x10/s1", recordLine: 3, lines: [
          { speaker: "Mentor", en: "How are you settling in? Still learning the ropes?", pl: "Jak się odnajdujesz? Wciąż wdrażasz się w obowiązki?" },
          { speaker: "Nowy", en: "Slowly but surely. There is a lot to take on board.", pl: "Powoli, ale do przodu. Sporo trzeba przyswoić." },
          { speaker: "Mentor", en: "Do not worry. Just touch base with me whenever something is unclear.", pl: "Nie martw się. Po prostu skontaktuj się ze mną, gdy coś będzie niejasne." },
          { speaker: "Nowy", en: "Thank you. I always try to go the extra mile, so I will get the ball rolling today.", pl: "Dziękuję. Zawsze staram się robić więcej niż trzeba, więc ruszam z miejsca już dziś." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: idiomy biznesowe", questions: [
          { kind: "gap", q: "It usually takes new staff a few weeks to learn the ___.", answer: "ropes" },
          { kind: "choice", q: "We will never beat competitors unless we ___ the box.", options: ["think outside", "touch base on", "go the mile of"], answer: 0 },
          { kind: "multi", q: "Które wyrażenia oznaczają rozpoczęcie lub uzgodnienie?", options: ["get the ball rolling", "be on the same page", "corner the market", "touch base"], answers: [0, 1, 3] },
          { kind: "match", pairs: [{ a: "to touch base", b: "skontaktować się" }, { a: "to take on board", b: "wziąć pod uwagę" }, { a: "to corner the market", b: "zdominować rynek" }, { a: "to learn the ropes", b: "wdrożyć się" }] },
          { kind: "dropdown", q: "Their cheap prices helped them ___ the market within a year.", options: ["corner", "touch", "roll"], answer: 0 },
          { kind: "truefalse", q: "„A ballpark figure” to dokładna, ostateczna kwota.", answer: false }
        ]}
      ]
    },

    /* ============================================================
       x11 — (Grammar) Emphasis: cleft, fronting & emphatic 'do'
       ============================================================ */
    {
      id: "x11", title: "Emfaza: cleft, fronting i emfatyczne 'do'", icon: "✨",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zaawansowane środki emfazy", html: `
          <p>Oprócz inwersji język angielski oferuje kilka innych środków <b>uwydatniania informacji</b>.</p>
          <table class="t-table">
            <tr><th>Środek</th><th>Schemat</th><th>Przykład</th></tr>
            <tr><td>It-cleft</td><td>It + be + element + that/who…</td><td><span class="say">It was the silence that frightened me.</span></td></tr>
            <tr><td>Wh-cleft</td><td>What + zdanie + be + element</td><td><span class="say">What I need is honesty.</span></td></tr>
            <tr><td>Emfatyczne 'do'</td><td>do/does/did + bezokolicznik</td><td><span class="say">I do appreciate your effort.</span></td></tr>
            <tr><td>Fronting</td><td>element + reszta zdania</td><td><span class="say">That mistake I will never make again.</span></td></tr>
            <tr><td>The thing / one thing</td><td>The thing (that) … is …</td><td><span class="say">The one thing I regret is leaving early.</span></td></tr>
          </table>
          <p><b>Emfatyczne 'do'</b> potwierdza prawdziwość zdania wbrew oczekiwaniom: <span class="say">She did warn you.</span> (wbrew temu, co sądzisz). Stosuje się je tylko w zdaniach twierdzących.</p>
          <p class="tip">💡 Fronting (wysunięcie elementu na początek) tworzy kontrast lub dramatyzm, ale różni się od inwersji — szyk podmiot–orzeczenie zwykle pozostaje normalny.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: uwydatnianie i potwierdzanie", words: [
          { en: "the very thing", pl: "właśnie to / dokładnie to", example: "That is the very thing I was looking for." },
          { en: "what is more", pl: "co więcej", example: "It is cheaper, and what is more, it is reliable." },
          { en: "above all", pl: "przede wszystkim", example: "Above all, be honest with yourself." },
          { en: "indeed", pl: "istotnie, w rzeczy samej", example: "The plan was, indeed, a great success." },
          { en: "by far", pl: "zdecydowanie, o wiele", example: "This is by far the best solution." },
          { en: "in particular", pl: "w szczególności", example: "One issue in particular concerns me." },
          { en: "of all people", pl: "akurat (właśnie ta osoba)", example: "You, of all people, should understand." },
          { en: "needless to say", pl: "rzecz jasna, nie trzeba dodawać", example: "Needless to say, the meeting was postponed." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: środki emfazy", theoryRef: "C1/x11/s1", questions: [
          { kind: "transform", q: "Uwydatnij podmiot przez it-cleft: 'The noise woke the baby.'", given: "The noise woke the baby.", hint: "Zacznij od „It was…”.", answer: "It was the noise that woke the baby.", theoryRef: "C1/x11/s1" },
          { kind: "choice", q: "Dodaj emfatyczne 'do': 'I ___ understand your frustration.'", options: ["do", "am", "have"], answer: 0, theoryRef: "C1/x11/s1" },
          { kind: "gap", q: "What I really value ___ loyalty above all else.", answer: "is", theoryRef: "C1/x11/s1" },
          { kind: "dropdown", q: "She ___ warn us, but nobody listened.", options: ["did", "was", "had"], answer: 0, theoryRef: "C1/x11/s1" },
          { kind: "transform", q: "Uwydatnij przez wh-cleft: 'I admire her courage.'", given: "I admire her courage.", hint: "Zacznij od „What I admire…”.", answer: "What I admire is her courage.", theoryRef: "C1/x11/s1" },
          { kind: "truefalse", q: "Emfatyczne 'do' można stosować w zdaniach przeczących, np. „I don't do like it”.", answer: false },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "one", "thing", "I", "regret", "is", "staying", "silent"], answer: ["The", "one", "thing", "I", "regret", "is", "staying", "silent"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: felieton osobisty", intro: "Fragment felietonu o nawykach.", theoryRef: "C1/x11/s1", passage: `
          <p>It is the small rituals, not the grand resolutions, that quietly shape a life. What few of us admit is how much we cling to them. I do believe that mornings set the tone for everything that follows. That habit, the early walk, I would defend against any critic. What truly transformed my work was not a new app but an old notebook. Above all, it is consistency that separates the dreamer from the doer. Needless to say, no single trick guarantees success; what matters is the patient accumulation of ordinary days. The thing I have learned, painfully and slowly, is that discipline is itself a form of freedom. It was only when I stopped chasing motivation that I finally began to make progress.</p>`,
        questions: [
          { kind: "choice", q: "Co zdaniem autora po cichu kształtuje życie?", options: ["małe rytuały", "wielkie postanowienia", "szczęśliwe przypadki"], answer: 0 },
          { kind: "truefalse", q: "Według autora to nowa aplikacja najbardziej odmieniła jego pracę.", answer: false },
          { kind: "gap", q: "Uzupełnij z tekstu: 'It was only when I stopped chasing motivation ___ I finally began to make progress.'", answer: "that", theoryRef: "C1/x11/s1" },
          { kind: "choice", q: "Co, według autora, oddziela marzyciela od człowieka czynu?", options: ["konsekwencja", "talent", "szczęście"], answer: 0 },
          { kind: "truefalse", q: "Autor uważa dyscyplinę za formę wolności.", answer: true }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: uwydatnianie i potwierdzanie", prompts: [
          { en: "It was your honesty that earned my respect.", pl: "To twoja szczerość zdobyła mój szacunek." },
          { en: "I do appreciate everything you have done for us.", pl: "Naprawdę doceniam wszystko, co dla nas zrobiłeś." },
          { en: "What surprised me most was how calm she stayed.", pl: "Najbardziej zdziwiło mnie, jak spokojna pozostała." },
          { en: "Above all, we value transparency and trust.", pl: "Przede wszystkim cenimy przejrzystość i zaufanie." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: środki emfazy", questions: [
          { kind: "transform", q: "Uwydatnij okolicznik czasu przez it-cleft: 'They announced the merger on Monday.'", given: "They announced the merger on Monday.", hint: "Zacznij od „It was on Monday…”.", answer: "It was on Monday that they announced the merger." },
          { kind: "choice", q: "He ___ apologise, eventually, though it took him days.", options: ["did", "was", "had"], answer: 0 },
          { kind: "gap", q: "___ the committee decided was to delay the launch.", answer: "What" },
          { kind: "dropdown", q: "This is ___ the most ambitious project we have attempted.", options: ["by far", "of all", "in fact of"], answer: 0 },
          { kind: "truefalse", q: "„What I need are advice” jest poprawne, gdy uwydatniany rzeczownik jest niepoliczalny.", answer: false },
          { kind: "match", pairs: [{ a: "It-cleft", b: "It was X that…" }, { a: "Wh-cleft", b: "What … is X" }, { a: "Emfatyczne 'do'", b: "I do appreciate…" }, { a: "Fronting", b: "That I will never forget" }] }
        ]}
      ]
    },

    /* ============================================================
       x12 — (Lexical) Academic & formal vocabulary (essays)
       ============================================================ */
    {
      id: "x12", title: "Słownictwo akademickie — esej i argumentacja", icon: "🖋️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: struktura argumentu akademickiego", html: `
          <p>Dobry esej akademicki opiera się na <b>jasnej strukturze i precyzyjnym słownictwie</b>. Każdy akapit pełni określoną funkcję: stawia tezę, rozwija argument lub waży kontrargumenty.</p>
          <table class="t-table">
            <tr><th>Funkcja</th><th>Wyrażenia</th></tr>
            <tr><td>Stawianie tezy</td><td><span class="say">This essay contends that… / It will be argued that…</span></td></tr>
            <tr><td>Rozwijanie</td><td><span class="say">A case in point is… / This is exemplified by…</span></td></tr>
            <tr><td>Ważenie racji</td><td><span class="say">While X holds true, Y suggests otherwise…</span></td></tr>
            <tr><td>Wnioskowanie</td><td><span class="say">It follows that… / On balance, the evidence indicates…</span></td></tr>
          </table>
          <p>Czasowniki sprawozdawcze (reporting verbs) niosą subtelny osąd: <span class="say">claim</span> (twierdzić, z dystansem), <span class="say">demonstrate</span> (wykazać, z aprobatą), <span class="say">concede</span> (przyznać), <span class="say">refute</span> (obalić).</p>
          <p class="tip">💡 W eseju unikaj słów wartościujących emocjonalnie („amazing”, „terrible”) na rzecz precyzyjnych terminów oceniających: „compelling”, „flawed”, „inconclusive”.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: esej i argumentacja", words: [
          { en: "to contend", pl: "twierdzić, utrzymywać", example: "The author contends that the model is outdated." },
          { en: "to refute", pl: "obalać, odpierać", example: "These data effectively refute the earlier claim." },
          { en: "to concede", pl: "przyznawać (rację)", example: "Critics concede that the method has merit." },
          { en: "a case in point", pl: "przykład tego, dobry przykład", example: "The 2008 crisis is a case in point." },
          { en: "on balance", pl: "wszystko razem biorąc", example: "On balance, the benefits outweigh the risks." },
          { en: "compelling", pl: "przekonujący, niezbity", example: "She presented a compelling counter-argument." },
          { en: "inconclusive", pl: "nierozstrzygający", example: "The results were ultimately inconclusive." },
          { en: "to exemplify", pl: "stanowić przykład, ilustrować", example: "This passage exemplifies the writer's irony." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: esej i argumentacja", theoryRef: "C1/x12/s1", questions: [
          { kind: "match", pairs: [{ a: "to contend", b: "twierdzić" }, { a: "to refute", b: "obalać" }, { a: "to concede", b: "przyznawać rację" }, { a: "compelling", b: "przekonujący" }] },
          { kind: "choice", q: "The new evidence ___ the long-held assumption entirely.", options: ["refutes", "concedes", "exemplifies"], answer: 0, theoryRef: "C1/x12/s1" },
          { kind: "gap", q: "___ balance, the argument for reform is the stronger one.", answer: "On", theoryRef: "C1/x12/s1" },
          { kind: "categorize", q: "Pogrupuj czasowniki sprawozdawcze według wydźwięku.", cats: ["Aprobata / poparcie", "Sprzeciw / dystans"], items: [{ t: "demonstrate", cat: 0 }, { t: "refute", cat: 1 }, { t: "confirm", cat: 0 }, { t: "dispute", cat: 1 }, { t: "establish", cat: 0 }, { t: "claim", cat: 1 }] },
          { kind: "dropdown", q: "The findings were ___, so no firm recommendation could be made.", options: ["inconclusive", "compelling", "salient"], answer: 0, theoryRef: "C1/x12/s1" },
          { kind: "truefalse", q: "„A case in point” znaczy „przykład ilustrujący twierdzenie”.", answer: true },
          { kind: "multi", q: "Które słowa pasują do formalnego eseju zamiast „amazing/terrible”?", options: ["compelling", "flawed", "inconclusive", "awesome"], answers: [0, 1, 2] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: omówienie eseju", audio: "Let me walk you through the structure of a strong essay. In the introduction, you contend a clear thesis rather than merely describe the topic. Each body paragraph should exemplify the claim with a case in point, then weigh a counter-argument before you refute or concede it. Avoid emotive words; a finding is compelling or inconclusive, never amazing. In the conclusion, do not simply repeat yourself. On balance, you should show how the evidence, taken together, supports your position.", instructions: "Wysłuchaj omówienia i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Co powinno znaleźć się we wstępie?", options: ["jasna teza, a nie sam opis tematu", "pełna lista źródeł", "osobista anegdota"], answer: 0 },
          { kind: "truefalse", q: "Według mówcy słowo „amazing” pasuje do formalnego eseju.", answer: false },
          { kind: "multi", q: "Co radzi mówca przy akapitach rozwijających?", options: ["zilustruj tezę przykładem", "rozważ kontrargument", "powtórz wstęp dosłownie", "obal lub przyznaj rację kontrargumentowi"], answers: [0, 1, 3] },
          { kind: "dictation", q: "Zapisz usłyszane zdanie:", audio: "Avoid emotive words in academic writing.", answer: "Avoid emotive words in academic writing." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: konsultacja eseju", theoryRef: "C1/x12/s1", recordLine: 3, lines: [
          { speaker: "Wykładowca", en: "Your thesis is clear, but the second paragraph drifts. What are you contending there?", pl: "Twoja teza jest jasna, ale drugi akapit się rozmywa. Co tam właściwie utrzymujesz?" },
          { speaker: "Ty", en: "I wanted to refute the opposing view, but perhaps I conceded too much.", pl: "Chciałem obalić przeciwne stanowisko, ale chyba zbyt wiele przyznałem." },
          { speaker: "Wykładowca", en: "Exactly. Give a concrete case in point and your refutation will be more compelling.", pl: "Właśnie. Podaj konkretny przykład, a twoja kontrargumentacja będzie bardziej przekonująca." },
          { speaker: "Ty", en: "Understood. On balance, I think a single strong example will strengthen the whole essay.", pl: "Rozumiem. Wszystko razem biorąc, jeden mocny przykład wzmocni cały esej." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: esej i argumentacja", questions: [
          { kind: "gap", q: "The recent study effectively ___ the outdated hypothesis.", answer: "refutes" },
          { kind: "choice", q: "This single anecdote does not ___ a general rule.", options: ["exemplify", "concede", "refute"], answer: 0 },
          { kind: "categorize", q: "Pogrupuj słowa według funkcji.", cats: ["Ocena pozytywna", "Ocena negatywna / niepewna"], items: [{ t: "compelling", cat: 0 }, { t: "flawed", cat: 1 }, { t: "robust", cat: 0 }, { t: "inconclusive", cat: 1 }] },
          { kind: "match", pairs: [{ a: "to contend", b: "utrzymywać" }, { a: "to exemplify", b: "ilustrować" }, { a: "on balance", b: "wszystko razem biorąc" }, { a: "a case in point", b: "dobry przykład" }] },
          { kind: "dropdown", q: "The committee was forced to ___ that the policy had failed.", options: ["concede", "exemplify", "contend"], answer: 0 },
          { kind: "multi", q: "Które wyrażenia wprowadzają wniosek?", options: ["it follows that", "on balance", "a case in point", "the evidence indicates"], answers: [0, 1, 3] }
        ]}
      ]
    },

    /* ============================================================
       x13 — (Grammar) Mixed conditionals
       ============================================================ */
    {
      id: "x13", title: "Okresy warunkowe mieszane", icon: "🧬",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: mixed conditionals", html: `
          <p><b>Okresy warunkowe mieszane (mixed conditionals)</b> łączą warunek z jednego czasu ze skutkiem z innego, gdy ramy czasowe warunku i rezultatu się różnią.</p>
          <table class="t-table">
            <tr><th>Typ</th><th>Warunek</th><th>Skutek</th><th>Przykład</th></tr>
            <tr><td>Przeszłość → teraźniejszość</td><td>Past Perfect</td><td>would + bezokolicznik</td><td><span class="say">If I had saved more, I would be rich now.</span></td></tr>
            <tr><td>Teraźniejszość → przeszłość</td><td>Past Simple</td><td>would have + V3</td><td><span class="say">If she were braver, she would have spoken up.</span></td></tr>
          </table>
          <p><b>Typ 1 (przeszłość → teraźniejszość):</b> nierzeczywisty warunek z przeszłości ma <b>obecny</b> skutek. <span class="say">If they had taken the earlier train, they would be here by now.</span></p>
          <p><b>Typ 2 (teraźniejszość → przeszłość):</b> stały, obecny stan tłumaczy <b>przeszły</b> skutek. <span class="say">If he were more careful, he would not have lost the keys.</span></p>
          <p class="tip">💡 Klucz to dopasowanie czasu w każdej części do jej realnych ram czasowych — nie do „typu” okresu. „were” w 2. typie jest poprawne dla wszystkich osób (If I were…).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przyczyna, skutek, żal", words: [
          { en: "consequence", pl: "konsekwencja, następstwo", example: "Every choice has its consequences." },
          { en: "to regret", pl: "żałować", example: "She regrets not finishing her degree." },
          { en: "had it not been for", pl: "gdyby nie", example: "Had it not been for luck, we would have lost." },
          { en: "otherwise", pl: "w przeciwnym razie, inaczej", example: "He apologised; otherwise I would still be angry." },
          { en: "as a result", pl: "w rezultacie", example: "He overslept and, as a result, missed the flight." },
          { en: "to end up", pl: "skończyć (w jakiejś sytuacji)", example: "Without a map, we ended up lost." },
          { en: "if only", pl: "gdyby tylko", example: "If only I had listened to your warning." },
          { en: "to backfire", pl: "obrócić się przeciwko, przynieść odwrotny skutek", example: "His plan backfired badly." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: mixed conditionals", theoryRef: "C1/x13/s1", questions: [
          { kind: "choice", q: "If I had accepted the job, I ___ in Berlin now.", options: ["would live", "would have lived", "will live"], answer: 0, theoryRef: "C1/x13/s1" },
          { kind: "gap", q: "If she ___ (be) more patient, she would not have quit last year.", answer: "were", theoryRef: "C1/x13/s1" },
          { kind: "choice", q: "If they had left earlier, they ___ stuck in traffic now.", options: ["would not be", "would not have been", "will not be"], answer: 0, theoryRef: "C1/x13/s1" },
          { kind: "transform", q: "Uzupełnij mixed conditional: 'I am tired today because I did not sleep well.' → 'If I ___ well, I would not be tired now.'", given: "If I ___ well, I would not be tired now.", hint: "Warunek z przeszłości: Past Perfect.", answer: ["had slept"], theoryRef: "C1/x13/s1" },
          { kind: "dropdown", q: "If he weren't so stubborn, he ___ the offer when it came.", options: ["would have accepted", "would accept", "will accept"], answer: 0, theoryRef: "C1/x13/s1" },
          { kind: "truefalse", q: "„If I had studied harder, I would have a better job now” to mieszany okres warunkowy.", answer: true },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "she", "had", "trained,", "she", "would", "be", "champion", "now"], answer: ["If", "she", "had", "trained,", "she", "would", "be", "champion", "now"] }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: rozmyślania o decyzjach", intro: "Fragment wspomnień przedsiębiorcy.", theoryRef: "C1/x13/s1", passage: `
          <p>If I had not turned down that first investor, the company would probably belong to someone else today. People assume I planned everything, but if I were truly the strategist they imagine, I would have patented the design years earlier. We ended up surviving on stubbornness alone. Had it not been for a loyal supplier, the whole venture would have collapsed in its second winter. If only I had listened to my accountant, I would not be untangling those tax problems even now. Looking back, if I were a more cautious person, I would never have started at all, and, as a result, I would have missed the most exhilarating decade of my life. Every shortcut I took eventually backfired, yet each failure taught me what no success could.</p>`,
        questions: [
          { kind: "truefalse", q: "Autor twierdzi, że gdyby był naprawdę strategiem, opatentowałby projekt znacznie wcześniej.", answer: true },
          { kind: "choice", q: "Co uratowało przedsięwzięcie drugiej zimy?", options: ["lojalny dostawca", "duży inwestor", "kampania reklamowa"], answer: 0 },
          { kind: "gap", q: "Uzupełnij z tekstu: 'If only I ___ listened to my accountant, I would not be untangling those tax problems even now.'", answer: "had", theoryRef: "C1/x13/s1" },
          { kind: "choice", q: "Co autor mówi o swoich skrótach?", options: ["każdy ostatecznie obrócił się przeciwko niemu", "wszystkie okazały się genialne", "nigdy żadnego nie podjął"], answer: 0 },
          { kind: "truefalse", q: "Autor żałuje, że w ogóle założył firmę.", answer: false }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: warunki mieszane", prompts: [
          { en: "If I had learned to code earlier, I would have a different career now.", pl: "Gdybym wcześniej nauczył się programować, miałbym teraz inną karierę." },
          { en: "If she weren't so afraid of flying, she would have visited us last summer.", pl: "Gdyby tak nie bała się latać, odwiedziłaby nas zeszłego lata." },
          { en: "Had it not been for your advice, I would still be making the same mistakes.", pl: "Gdyby nie twoja rada, wciąż popełniałbym te same błędy." },
          { en: "If only we had booked earlier, we would be on that beach right now.", pl: "Gdybyśmy tylko zarezerwowali wcześniej, bylibyśmy teraz na tej plaży." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: mixed conditionals", questions: [
          { kind: "choice", q: "If I had taken that flight, I ___ at the conference right now.", options: ["would be", "would have been", "will be"], answer: 0 },
          { kind: "gap", q: "If he ___ (not be) so careless, he would not have crashed the car.", answer: ["were not", "weren't"] },
          { kind: "transform", q: "Połącz w mixed conditional: 'She is unemployed now. She dropped out of college.' → 'If she ___ out, she would not be unemployed now.'", given: "If she ___ out, she would not be unemployed now.", hint: "Warunek z przeszłości: Past Perfect.", answer: ["had not dropped", "hadn't dropped"] },
          { kind: "dropdown", q: "If we were wealthier, we ___ that house when it was for sale.", options: ["would have bought", "would buy", "will buy"], answer: 0 },
          { kind: "truefalse", q: "„If I were taller, I would have joined the team last year” miesza warunek teraźniejszy ze skutkiem przeszłym.", answer: true },
          { kind: "match", pairs: [{ a: "If I had saved, I would be rich now", b: "przeszłość → teraźniejszość" }, { a: "If she were braver, she would have spoken", b: "teraźniejszość → przeszłość" }, { a: "if only", b: "gdyby tylko" }, { a: "to backfire", b: "obrócić się przeciwko" }] }
        ]}
      ]
    },

    /* ============================================================
       x14 — (Lexical) Advanced phrasal verbs (topic-grouped)
       ============================================================ */
    {
      id: "x14", title: "Zaawansowane phrasal verbs — według tematów", icon: "🧗",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: phrasal verbs pogrupowane tematycznie", html: `
          <p>Uczenie się phrasal verbs <b>tematycznie</b> ułatwia zapamiętywanie i naturalne użycie. Poniżej zestawy wokół trzech obszarów.</p>
          <table class="t-table">
            <tr><th>Komunikacja</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">to talk someone round</span></td><td>przekonać kogoś</td></tr>
            <tr><td><span class="say">to water something down</span></td><td>złagodzić, rozwodnić (przekaz)</td></tr>
            <tr><td><span class="say">to clam up</span></td><td>zamilknąć, zamknąć się w sobie</td></tr>
          </table>
          <table class="t-table">
            <tr><th>Problemy</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">to iron something out</span></td><td>wyprasować, usunąć (trudności)</td></tr>
            <tr><td><span class="say">to grapple with</span></td><td>zmagać się z</td></tr>
            <tr><td><span class="say">to stem from</span></td><td>wynikać z, brać się z</td></tr>
          </table>
          <table class="t-table">
            <tr><th>Rozwój / kariera</th><th>Znaczenie</th></tr>
            <tr><td><span class="say">to branch out</span></td><td>rozszerzać działalność, próbować nowego</td></tr>
            <tr><td><span class="say">to fall back on</span></td><td>polegać na (rezerwie)</td></tr>
            <tr><td><span class="say">to map something out</span></td><td>zaplanować, rozrysować</td></tr>
          </table>
          <p class="tip">💡 Zwróć uwagę na rozdzielność: „water it down” (zaimek między czasownikiem a partykułą), ale „grapple with it” (partykuła nierozdzielna).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: phrasal verbs tematyczne", words: [
          { en: "to talk round", pl: "przekonać kogoś", example: "It took an hour to talk him round." },
          { en: "to water down", pl: "złagodzić, rozwodnić", example: "The proposal was watered down to win votes." },
          { en: "to iron out", pl: "usunąć (trudności), dopracować", example: "We still need to iron out a few details." },
          { en: "to grapple with", pl: "zmagać się z", example: "The city is grappling with rising rents." },
          { en: "to stem from", pl: "wynikać z, brać się z", example: "The conflict stems from a misunderstanding." },
          { en: "to branch out", pl: "rozszerzać działalność, spróbować nowego", example: "The bakery branched out into catering." },
          { en: "to fall back on", pl: "polegać na (czymś w razie potrzeby)", example: "She had no savings to fall back on." },
          { en: "to map out", pl: "zaplanować, rozrysować", example: "Let us map out the next five years." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: phrasal verbs tematyczne", theoryRef: "C1/x14/s1", questions: [
          { kind: "match", pairs: [{ a: "to iron out", b: "usunąć trudności" }, { a: "to stem from", b: "wynikać z" }, { a: "to branch out", b: "rozszerzać działalność" }, { a: "to fall back on", b: "polegać na rezerwie" }] },
          { kind: "choice", q: "Most of our problems ___ from poor communication.", options: ["stem", "branch", "iron"], answer: 0, theoryRef: "C1/x14/s1" },
          { kind: "gap", q: "We need to ___ out the last few details before signing.", answer: "iron", theoryRef: "C1/x14/s1" },
          { kind: "categorize", q: "Pogrupuj phrasal verbs według tematu.", cats: ["Komunikacja", "Problemy"], items: [{ t: "talk round", cat: 0 }, { t: "grapple with", cat: 1 }, { t: "clam up", cat: 0 }, { t: "iron out", cat: 1 }, { t: "water down", cat: 0 }, { t: "stem from", cat: 1 }] },
          { kind: "dropdown", q: "With no pension, he had nothing to ___ back on.", options: ["fall", "branch", "map"], answer: 0, theoryRef: "C1/x14/s1" },
          { kind: "truefalse", q: "„To water down a proposal” oznacza go wzmocnić i zaostrzyć.", answer: false },
          { kind: "multi", q: "Które phrasal verbs dotyczą rozwoju lub planowania kariery?", options: ["branch out", "map out", "clam up", "fall back on"], answers: [0, 1, 3] }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: rozmowa o planach firmy", audio: "So, where do we go from here? Most of our setbacks stem from trying to do everything at once. I suggest we map out a clear roadmap, iron out the supply issues first, and only then branch out into new markets. The board wanted to water down the targets, but I managed to talk them round. Of course, if growth stalls, we can always fall back on our core product, which still sells steadily.", instructions: "Wysłuchaj rozmowy i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "Z czego, według mówcy, wynika większość niepowodzeń?", options: ["próby robienia wszystkiego naraz", "braku kapitału", "złej lokalizacji"], answer: 0 },
          { kind: "truefalse", q: "Mówcy udało się przekonać zarząd, by nie łagodzić celów.", answer: true },
          { kind: "multi", q: "Jakie kroki proponuje mówca?", options: ["rozrysować jasny plan działania", "najpierw usunąć problemy z dostawami", "natychmiast wejść na wszystkie nowe rynki", "rozszerzyć działalność dopiero później"], answers: [0, 1, 3] },
          { kind: "dictation", q: "Zapisz usłyszane zdanie:", audio: "Most of our setbacks stem from trying to do everything at once.", answer: "Most of our setbacks stem from trying to do everything at once." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: planowanie startupu", theoryRef: "C1/x14/s1", recordLine: 1, lines: [
          { speaker: "Wspólnik", en: "Before we launch, can we iron out the pricing? It still feels inconsistent.", pl: "Zanim wystartujemy, czy możemy dopracować ceny? Wciąż wydają się niespójne." },
          { speaker: "Ty", en: "Agreed. Half our doubts stem from not having mapped out the costs properly.", pl: "Zgoda. Połowa naszych wątpliwości bierze się z tego, że nie rozpisaliśmy porządnie kosztów." },
          { speaker: "Wspólnik", en: "And if the premium tier flops, what do we fall back on?", pl: "A jeśli wersja premium zawiedzie, na czym się oprzemy?" },
          { speaker: "Ty", en: "The basic plan. Once it is stable, we can branch out into subscriptions.", pl: "Na planie podstawowym. Gdy będzie stabilny, możemy rozszerzyć ofertę o subskrypcje." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: phrasal verbs tematyczne", questions: [
          { kind: "gap", q: "It took ages to ___ him round to our point of view.", answer: "talk" },
          { kind: "choice", q: "The committee ___ down the report to avoid controversy.", options: ["watered", "ironed", "branched"], answer: 0 },
          { kind: "categorize", q: "Pogrupuj phrasal verbs według tematu.", cats: ["Problemy", "Rozwój / kariera"], items: [{ t: "grapple with", cat: 0 }, { t: "branch out", cat: 1 }, { t: "iron out", cat: 0 }, { t: "map out", cat: 1 }] },
          { kind: "match", pairs: [{ a: "to talk round", b: "przekonać kogoś" }, { a: "to clam up", b: "zamilknąć" }, { a: "to grapple with", b: "zmagać się z" }, { a: "to map out", b: "zaplanować" }] },
          { kind: "dropdown", q: "After the success of the cafe, they decided to ___ out into catering.", options: ["branch", "fall", "stem"], answer: 0 },
          { kind: "multi", q: "Które phrasal verbs dotyczą radzenia sobie z trudnościami?", options: ["iron out", "grapple with", "branch out", "stem from"], answers: [0, 1, 3] }
        ]}
      ]
    }
  );
})();
