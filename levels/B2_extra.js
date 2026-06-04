/* B2 — dodatkowe tematy (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "B2"; });
  if (!lv) return;
  lv.units.push(

    /* ===================== x1 — Passive voice (all tenses) ===================== */
    {
      id: "x1", title: "Strona bierna we wszystkich czasach", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: passive we wszystkich czasach", html: `
          <p>Stronę bierną tworzymy zawsze: <b>odpowiednia forma „be” + III forma (past participle)</b>. Zmienia się tylko forma „be”.</p>
          <table class="t-table">
            <tr><th>Czas</th><th>Strona bierna</th><th>Przykład</th></tr>
            <tr><td>Present Simple</td><td>is/are + III</td><td><span class="say">The reports are checked daily.</span></td></tr>
            <tr><td>Present Continuous</td><td>is/are being + III</td><td><span class="say">The road is being repaired now.</span></td></tr>
            <tr><td>Past Simple</td><td>was/were + III</td><td><span class="say">The bridge was built in 1890.</span></td></tr>
            <tr><td>Past Continuous</td><td>was/were being + III</td><td><span class="say">The house was being painted all day.</span></td></tr>
            <tr><td>Present Perfect</td><td>has/have been + III</td><td><span class="say">The decision has been made.</span></td></tr>
            <tr><td>Past Perfect</td><td>had been + III</td><td><span class="say">The work had been finished before noon.</span></td></tr>
            <tr><td>Future Simple</td><td>will be + III</td><td><span class="say">The results will be published soon.</span></td></tr>
            <tr><td>Modal</td><td>modal + be + III</td><td><span class="say">The form must be signed here.</span></td></tr>
          </table>
          <p>Wykonawcę (jeśli ważny) podajemy po <b>by</b>: <span class="say">The novel was written by a young author.</span></p>
          <p class="tip">💡 Używamy strony biernej, gdy nieważne lub nieznane jest, kto wykonuje czynność — liczy się sama czynność lub jej skutek.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czasowniki do passive", words: [
          { en: "to manufacture", pl: "produkować / wytwarzać", example: "These cars are manufactured in Germany." },
          { en: "to deliver", pl: "dostarczać", example: "The parcel will be delivered tomorrow." },
          { en: "to design", pl: "projektować", example: "The logo was designed by a local artist." },
          { en: "to publish", pl: "publikować / wydawać", example: "The article has been published online." },
          { en: "to repair", pl: "naprawiać", example: "The lift is being repaired at the moment." },
          { en: "to inspect", pl: "kontrolować / sprawdzać", example: "Every product is inspected before sale." },
          { en: "to demolish", pl: "wyburzać", example: "The factory was demolished last year." },
          { en: "to approve", pl: "zatwierdzać", example: "The budget had been approved before the meeting." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: passive we wszystkich czasach", theoryRef: "B2/x1/s1", questions: [
          { kind: "choice", q: "The road ___ repaired right now. (Present Continuous, passive)", options: ["is repaired", "is being repaired", "has repaired"], answer: 1, theoryRef: "B2/x1/s1" },
          { kind: "transform", q: "Zamień na stronę bierną:", given: "They have made a decision.", hint: "Present Perfect passive", answer: "A decision has been made.", theoryRef: "B2/x1/s1" },
          { kind: "transform", q: "Zamień na stronę bierną:", given: "Someone built this bridge in 1890.", hint: "Past Simple passive", answer: "This bridge was built in 1890.", theoryRef: "B2/x1/s1" },
          { kind: "gap", q: "The results ___ be published next week. (will + be?)", answer: "will", theoryRef: "B2/x1/s1" },
          { kind: "dropdown", q: "The form must ___ signed before you leave.", options: ["be", "been", "being"], answer: 0, theoryRef: "B2/x1/s1" },
          { kind: "categorize", q: "Pogrupuj formy passive według czasu:", cats: ["Present", "Past"], items: [
            { t: "is being repaired", cat: 0 },
            { t: "was built", cat: 1 },
            { t: "are checked", cat: 0 },
            { t: "had been finished", cat: 1 }
          ]},
          { kind: "truefalse", q: "Stronę bierną zawsze tworzymy z formą czasownika „be” + III forma.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: How a book is made", intro: "Przeczytaj o tym, jak powstaje książka.", passage: `
          <p>Every book that you hold in your hands has been created by a long chain of people. First, a manuscript is written by the author and then it is sent to a publisher. The text is carefully read and corrected by editors before anything else happens. Once the content has been approved, a cover is designed and the pages are arranged by a typesetter. After that, thousands of copies are printed and bound in a factory. Finally, the books are delivered to shops, where they will be bought by readers. Although the author's name appears on the cover, the finished product is made by a whole team.</p>`, theoryRef: "B2/x1/s1", questions: [
          { kind: "truefalse", q: "The manuscript is written by the publisher.", answer: false },
          { kind: "choice", q: "What happens after the content has been approved?", options: ["The author writes again", "A cover is designed", "The books are sold"], answer: 1 },
          { kind: "gap", q: "Thousands of copies ___ printed in a factory. (are/is)", answer: "are" },
          { kind: "multi", q: "Which steps are mentioned in the text?", options: ["editing", "advertising", "printing", "delivering"], answers: [0, 2, 3] }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: w fabryce", theoryRef: "B2/x1/s1", recordLine: 1, lines: [
          { speaker: "Guide", en: "Welcome. Here all the parts are assembled by robots.", pl: "Witam. Tutaj wszystkie części są montowane przez roboty." },
          { speaker: "Ty", en: "Amazing. How many cars are produced every day?", pl: "Niesamowite. Ile samochodów jest produkowanych każdego dnia?" },
          { speaker: "Guide", en: "About three hundred. Each one is inspected before it leaves.", pl: "Około trzystu. Każdy jest sprawdzany, zanim opuści fabrykę." },
          { speaker: "Ty", en: "And when will the new model be launched?", pl: "A kiedy zostanie wprowadzony nowy model?" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: passive", questions: [
          { kind: "choice", q: "The lift ___ at the moment. (passive, Present Continuous)", options: ["is repaired", "is being repaired", "repairs"], answer: 1 },
          { kind: "transform", q: "Zamień na stronę bierną:", given: "They will publish the results soon.", answer: "The results will be published soon." },
          { kind: "gap", q: "The decision ___ been made already. (has/have)", answer: "has" },
          { kind: "dropdown", q: "The work ___ finished before noon yesterday. (Past Perfect passive)", options: ["had been", "has been", "was being"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["The", "novel", "was", "written", "by", "a", "young", "author"], answer: ["The", "novel", "was", "written", "by", "a", "young", "author"] },
          { kind: "truefalse", q: "W stronie biernej wykonawcę czynności wprowadza przyimek „by”.", answer: true }
        ]}
      ]
    },

    /* ===================== x2 — Work, business & careers ===================== */
    {
      id: "x2", title: "Praca, biznes i kariera", icon: "💼",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język pracy i kariery", html: `
          <p>W kontekście zawodowym warto rozróżniać przydatne kolokacje i zwroty:</p>
          <table class="t-table">
            <tr><th>Zwrot</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>to apply for a job</td><td>aplikować o pracę</td><td><span class="say">She applied for a marketing job.</span></td></tr>
            <tr><td>to get promoted</td><td>awansować</td><td><span class="say">He got promoted last month.</span></td></tr>
            <tr><td>to be made redundant</td><td>zostać zwolnionym (z powodu redukcji)</td><td><span class="say">Many staff were made redundant.</span></td></tr>
            <tr><td>to run a business</td><td>prowadzić firmę</td><td><span class="say">They run a small business together.</span></td></tr>
            <tr><td>to meet a deadline</td><td>dotrzymać terminu</td><td><span class="say">We always meet our deadlines.</span></td></tr>
          </table>
          <p>Uważaj na różnicę: <b>work</b> (niepoliczalne, ogólnie) vs <b>a job</b> (konkretne stanowisko).</p>
          <p class="tip">💡 „I'm looking for a job”, ale „I have a lot of work today”.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: praca i kariera", words: [
          { en: "salary", pl: "pensja / wynagrodzenie", example: "She earns a good salary." },
          { en: "colleague", pl: "współpracownik", example: "My colleagues are very supportive." },
          { en: "promotion", pl: "awans", example: "He is hoping for a promotion." },
          { en: "redundancy", pl: "zwolnienie (z powodu redukcji)", example: "The factory announced more redundancies." },
          { en: "applicant", pl: "kandydat / aplikant", example: "There were over fifty applicants." },
          { en: "self-employed", pl: "samozatrudniony", example: "She has been self-employed for years." },
          { en: "workload", pl: "obciążenie pracą", example: "My workload has increased lately." },
          { en: "to negotiate", pl: "negocjować", example: "They negotiated a better contract." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: praca i kariera", questions: [
          { kind: "choice", q: "When the company cut costs, fifty employees were ___.", options: ["promoted", "made redundant", "negotiated"], answer: 1 },
          { kind: "gap", q: "I have a lot of ___ to do today, so I can't go out. (work/job)", answer: "work" },
          { kind: "match", pairs: [
            { a: "salary", b: "wynagrodzenie" },
            { a: "colleague", b: "współpracownik" },
            { a: "applicant", b: "kandydat" },
            { a: "workload", b: "obciążenie pracą" }
          ]},
          { kind: "multi", q: "Which words describe employment situations?", options: ["self-employed", "redundancy", "promotion", "weather"], answers: [0, 1, 2] },
          { kind: "dropdown", q: "She decided to ___ for the manager position.", options: ["apply", "applying", "applies"], answer: 0 },
          { kind: "truefalse", q: "„To meet a deadline” oznacza nie zdążyć na czas.", answer: false },
          { kind: "choice", q: "Someone who works for themselves is ___.", options: ["redundant", "self-employed", "an applicant"], answer: 1 }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: rozmowa o pracy", audio: "Hi, I've got some news. After three years in the same role, I finally got promoted last week. My new salary is higher, but my workload has doubled too. I now manage a team of six colleagues. Honestly, the hardest part is meeting all the deadlines, but I really enjoy the new challenge.", instructions: "Posłuchaj i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What good news does the speaker share?", options: ["She was made redundant", "She got promoted", "She became self-employed"], answer: 1 },
          { kind: "truefalse", q: "Her workload has decreased.", answer: false },
          { kind: "gap", q: "She now manages a team of ___ colleagues. (number as word)", answer: "six" },
          { kind: "choice", q: "What does she find hardest?", options: ["Meeting deadlines", "Earning money", "Finding colleagues"], answer: 0 }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: o swojej karierze", prompts: [
          { en: "I would like to apply for a job in marketing.", pl: "Chciałbym aplikować o pracę w marketingu." },
          { en: "After years of hard work, she finally got promoted.", pl: "Po latach ciężkiej pracy w końcu awansowała." },
          { en: "My workload is heavy, but I always meet my deadlines.", pl: "Mam dużo pracy, ale zawsze dotrzymuję terminów." },
          { en: "He is self-employed and runs his own business.", pl: "Jest samozatrudniony i prowadzi własną firmę." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: praca i biznes", questions: [
          { kind: "choice", q: "A formal word for losing your job due to cost-cutting is ___.", options: ["promotion", "redundancy", "applicant"], answer: 1 },
          { kind: "gap", q: "She is looking for a new ___ in the finance sector. (work/job)", answer: "job" },
          { kind: "match", pairs: [
            { a: "to get promoted", b: "awansować" },
            { a: "to run a business", b: "prowadzić firmę" },
            { a: "to negotiate", b: "negocjować" }
          ]},
          { kind: "multi", q: "Pick all things you can do with a deadline:", options: ["meet", "miss", "negotiate", "promote"], answers: [0, 1] },
          { kind: "dropdown", q: "There were over fifty ___ for the single position.", options: ["applicants", "salaries", "deadlines"], answer: 0 },
          { kind: "truefalse", q: "„Colleague” to po polsku „współpracownik”.", answer: true }
        ]}
      ]
    },

    /* ===================== x3 — Third & mixed conditionals ===================== */
    {
      id: "x3", title: "Trzeci tryb warunkowy i tryby mieszane", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: Third & mixed conditionals", html: `
          <p><b>Third Conditional</b> mówi o nierealnej przeszłości — czymś, co się NIE wydarzyło.</p>
          <table class="t-table">
            <tr><th>Typ</th><th>Budowa</th><th>Przykład</th></tr>
            <tr><td>Third Conditional</td><td>If + Past Perfect, would have + III</td><td><span class="say">If I had studied, I would have passed.</span></td></tr>
            <tr><td>Mixed (przeszłość → teraz)</td><td>If + Past Perfect, would + bezokolicznik</td><td><span class="say">If I had saved money, I would be rich now.</span></td></tr>
            <tr><td>Mixed (teraz → przeszłość)</td><td>If + Past Simple, would have + III</td><td><span class="say">If I were taller, I would have become a model.</span></td></tr>
          </table>
          <p>Skutek przeszły: <b>would have + III forma</b>. Skutek teraźniejszy: <b>would + bezokolicznik</b>.</p>
          <p class="tip">💡 Third Conditional zawsze dotyczy tego, czego już nie da się zmienić — często wyraża żal lub krytykę.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: warunki i konsekwencje", words: [
          { en: "outcome", pl: "wynik / rezultat", example: "The outcome could have been different." },
          { en: "consequence", pl: "konsekwencja", example: "Every choice has consequences." },
          { en: "to regret", pl: "żałować", example: "I regret not telling the truth." },
          { en: "to assume", pl: "zakładać / przypuszczać", example: "I assumed you had finished." },
          { en: "otherwise", pl: "w przeciwnym razie / inaczej", example: "Hurry up, otherwise we'll be late." },
          { en: "likely", pl: "prawdopodobny", example: "It is likely that he had left already." },
          { en: "to avoid", pl: "unikać", example: "We could have avoided the accident." },
          { en: "decision", pl: "decyzja", example: "It was a difficult decision to make." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: Third & mixed conditionals", theoryRef: "B2/x3/s1", questions: [
          { kind: "choice", q: "If I had known, I ___ you.", options: ["would tell", "would have told", "will tell"], answer: 1, theoryRef: "B2/x3/s1" },
          { kind: "transform", q: "Przekształć w Third Conditional:", given: "I didn't study, so I failed.", hint: "If I had..., I would have...", answer: "If I had studied, I would have passed.", theoryRef: "B2/x3/s1" },
          { kind: "gap", q: "If she ___ left earlier, she wouldn't have missed the train. (had/has)", answer: "had", theoryRef: "B2/x3/s1" },
          { kind: "dropdown", q: "If I had saved money, I ___ rich now. (mixed)", options: ["would be", "would have been", "will be"], answer: 0, theoryRef: "B2/x3/s1" },
          { kind: "choice", q: "If he weren't so shy, he ___ have spoken at the meeting yesterday.", options: ["would", "will", "would not"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "you", "had", "asked", "I", "would", "have", "helped"], answer: ["If", "you", "had", "asked", "I", "would", "have", "helped"] },
          { kind: "truefalse", q: "Third Conditional opisuje sytuacje, które naprawdę się wydarzyły.", answer: false }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A missed chance", intro: "Historia o przegapionej szansie.", passage: `
          <p>Tom often thinks about the job he didn't take five years ago. A famous company had offered him a position abroad, but he turned it down because he was afraid of change. If he had accepted the offer, he would have lived in three different countries by now. He would also be earning a much higher salary today. Instead, he stayed in his home town and took a safe but boring job. He doesn't regret everything, though, because he met his wife at that boring office. If he had moved abroad, he would never have met her. Sometimes a wrong decision leads to the right life.</p>`, theoryRef: "B2/x3/s1", questions: [
          { kind: "truefalse", q: "Tom accepted the job abroad.", answer: false },
          { kind: "choice", q: "Why did Tom refuse the offer?", options: ["He had no qualifications", "He was afraid of change", "The salary was too low"], answer: 1 },
          { kind: "gap", q: "If he had moved abroad, he would never ___ met his wife. (have/has)", answer: "have" },
          { kind: "transform", q: "Dokończ zdanie mieszane:", given: "He didn't save money in the past, so he is not rich now.", hint: "If he had..., he would be...", answer: "If he had saved money, he would be rich now." }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: gdyby było inaczej", theoryRef: "B2/x3/s1", recordLine: 1, lines: [
          { speaker: "Kasia", en: "I'm so tired. I shouldn't have stayed up so late.", pl: "Jestem taka zmęczona. Nie powinnam była siedzieć tak długo." },
          { speaker: "Ty", en: "If you had gone to bed earlier, you would feel better now.", pl: "Gdybyś poszła spać wcześniej, czułabyś się teraz lepiej." },
          { speaker: "Kasia", en: "I know. And I would have finished the report too.", pl: "Wiem. I skończyłabym też raport." },
          { speaker: "Ty", en: "If you had asked me, I would have helped you with it.", pl: "Gdybyś mnie poprosiła, pomógłbym ci z nim." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: tryby warunkowe", questions: [
          { kind: "choice", q: "If we ___ left earlier, we would have caught the train.", options: ["have", "had", "would"], answer: 1 },
          { kind: "transform", q: "Przekształć w Third Conditional:", given: "She didn't call me, so I didn't come.", answer: "If she had called me, I would have come." },
          { kind: "gap", q: "If I were braver, I ___ have applied for that job last year. (would/will)", answer: "would" },
          { kind: "dropdown", q: "If they had invited us, we ___ gone to the party.", options: ["would have", "would", "will have"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "I", "had", "studied", "I", "would", "have", "passed"], answer: ["If", "I", "had", "studied", "I", "would", "have", "passed"] },
          { kind: "truefalse", q: "W mieszanym trybie skutek teraźniejszy wyrażamy przez „would + bezokolicznik”.", answer: true }
        ]}
      ]
    },

    /* ===================== x4 — Media & the news ===================== */
    {
      id: "x4", title: "Media i wiadomości", icon: "📰",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język mediów", html: `
          <p>Świat mediów ma swoje charakterystyczne słownictwo i kolokacje:</p>
          <table class="t-table">
            <tr><th>Zwrot</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>breaking news</td><td>wiadomości z ostatniej chwili</td><td><span class="say">We interrupt this programme with breaking news.</span></td></tr>
            <tr><td>to cover a story</td><td>relacjonować wydarzenie</td><td><span class="say">Several channels covered the story.</span></td></tr>
            <tr><td>biased reporting</td><td>stronnicze relacjonowanie</td><td><span class="say">The article was full of biased reporting.</span></td></tr>
            <tr><td>to go viral</td><td>stać się popularnym w sieci</td><td><span class="say">The video went viral overnight.</span></td></tr>
            <tr><td>fake news</td><td>fałszywe wiadomości</td><td><span class="say">It is hard to spot fake news.</span></td></tr>
          </table>
          <p class="tip">💡 „A headline” to nagłówek, a „a tabloid” to brukowiec — gazeta nastawiona na sensację.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: media", words: [
          { en: "headline", pl: "nagłówek", example: "The headline grabbed my attention." },
          { en: "broadcast", pl: "transmisja / nadawać", example: "The match was broadcast live." },
          { en: "journalist", pl: "dziennikarz", example: "The journalist interviewed the minister." },
          { en: "tabloid", pl: "brukowiec", example: "Tabloids love celebrity gossip." },
          { en: "coverage", pl: "relacja / zasięg informacji", example: "The election got huge coverage." },
          { en: "source", pl: "źródło", example: "A reliable source confirmed the story." },
          { en: "censorship", pl: "cenzura", example: "Censorship limits free speech." },
          { en: "subscription", pl: "subskrypcja / prenumerata", example: "I cancelled my magazine subscription." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: media i wiadomości", questions: [
          { kind: "choice", q: "A short, eye-catching title at the top of an article is a ___.", options: ["headline", "source", "subscription"], answer: 0 },
          { kind: "gap", q: "The funny clip ___ viral in just a few hours. (go - Past Simple)", answer: "went" },
          { kind: "match", pairs: [
            { a: "journalist", b: "dziennikarz" },
            { a: "tabloid", b: "brukowiec" },
            { a: "source", b: "źródło" },
            { a: "censorship", b: "cenzura" }
          ]},
          { kind: "multi", q: "Which are types or features of media?", options: ["tabloid", "broadcast", "redundancy", "headline"], answers: [0, 1, 3] },
          { kind: "dropdown", q: "Reporting that unfairly favours one side is called ___ reporting.", options: ["biased", "breaking", "viral"], answer: 0 },
          { kind: "truefalse", q: "„Fake news” to wiarygodne, sprawdzone informacje.", answer: false },
          { kind: "choice", q: "The match was ___ live on national television.", options: ["broadcast", "subscribed", "censored"], answer: 0 }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: serwis informacyjny", audio: "Good evening, and welcome to the nine o'clock news. We begin with breaking news from the capital, where thousands of people have gathered for a peaceful protest. Our journalist on the ground reports that the coverage has spread quickly across social media, and one video has already gone viral. The government has not yet responded, but we will bring you updates throughout the night.", instructions: "Posłuchaj fragmentu wiadomości.", questions: [
          { kind: "choice", q: "What kind of news opens the programme?", options: ["Sports news", "Breaking news", "Weather news"], answer: 1 },
          { kind: "truefalse", q: "The protest is described as violent.", answer: false },
          { kind: "gap", q: "One video has already gone ___. (popular online)", answer: "viral" },
          { kind: "choice", q: "Has the government responded yet?", options: ["Yes, fully", "No, not yet", "It refused completely"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: o wiarygodności mediów", theoryRef: "B2/x4/s1", recordLine: 1, lines: [
          { speaker: "Olek", en: "Did you read that shocking headline this morning?", pl: "Czytałeś ten szokujący nagłówek dziś rano?" },
          { speaker: "Ty", en: "I did, but I think it was a tabloid, so I'm not sure it's true.", pl: "Tak, ale myślę, że to był brukowiec, więc nie jestem pewien, czy to prawda." },
          { speaker: "Olek", en: "You're right. We should always check the source.", pl: "Masz rację. Zawsze powinniśmy sprawdzać źródło." },
          { speaker: "Ty", en: "Exactly. There is so much fake news online these days.", pl: "Dokładnie. W internecie jest teraz tyle fałszywych wiadomości." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: media", questions: [
          { kind: "choice", q: "A newspaper focused on sensational celebrity stories is a ___.", options: ["tabloid", "headline", "source"], answer: 0 },
          { kind: "gap", q: "Always check your ___ before sharing a story online.", answer: "source" },
          { kind: "match", pairs: [
            { a: "coverage", b: "relacja" },
            { a: "broadcast", b: "transmisja" },
            { a: "subscription", b: "prenumerata" }
          ]},
          { kind: "multi", q: "Pick all words connected to unreliable information:", options: ["fake news", "biased reporting", "reliable source", "censorship"], answers: [0, 1] },
          { kind: "dropdown", q: "The video ___ viral and got a million views overnight.", options: ["went", "broadcast", "covered"], answer: 0 },
          { kind: "truefalse", q: "„Headline” to po polsku „nagłówek”.", answer: true }
        ]}
      ]
    },

    /* ===================== x5 — Modals of deduction (perfect) ===================== */
    {
      id: "x5", title: "Modalne dedukcji: must/might/can't have", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: dedukcja o przeszłości", html: `
          <p>Aby wnioskować o przeszłości, używamy <b>modal + have + III forma</b>:</p>
          <table class="t-table">
            <tr><th>Czasownik</th><th>Pewność</th><th>Przykład</th></tr>
            <tr><td>must have</td><td>pewność, że TAK</td><td><span class="say">She must have left already; her coat is gone.</span></td></tr>
            <tr><td>can't have</td><td>pewność, że NIE</td><td><span class="say">He can't have stolen it; he was with me.</span></td></tr>
            <tr><td>might / may / could have</td><td>możliwość</td><td><span class="say">They might have missed the bus.</span></td></tr>
            <tr><td>should have</td><td>krytyka / żal</td><td><span class="say">You should have told me earlier.</span></td></tr>
          </table>
          <p>Pamiętaj: po każdym z tych czasowników jest <b>have + III forma</b>, niezależnie od osoby.</p>
          <p class="tip">💡 „Must have” (pewny pozytywny wniosek) ma przeciwieństwo „can't have”, a NIE „mustn't have”.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: dowody i wnioski", words: [
          { en: "evidence", pl: "dowód / dowody", example: "There is no evidence of a break-in." },
          { en: "to deduce", pl: "wnioskować / dedukować", example: "We can deduce that she was here." },
          { en: "clue", pl: "wskazówka / trop", example: "The detective found an important clue." },
          { en: "obvious", pl: "oczywisty", example: "It's obvious that he was lying." },
          { en: "suspicious", pl: "podejrzany", example: "His behaviour seemed suspicious." },
          { en: "to conclude", pl: "stwierdzać / wnioskować", example: "I conclude that nobody was home." },
          { en: "proof", pl: "dowód (na coś)", example: "Do you have any proof of that?" },
          { en: "to suspect", pl: "podejrzewać", example: "The police suspect a local man." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: modalne dedukcji", theoryRef: "B2/x5/s1", questions: [
          { kind: "choice", q: "The ground is wet. It ___ rained last night.", options: ["must have", "can't have", "shouldn't have"], answer: 0, theoryRef: "B2/x5/s1" },
          { kind: "choice", q: "He was at work all day, so he ___ broken the window.", options: ["must have", "can't have", "might have"], answer: 1, theoryRef: "B2/x5/s1" },
          { kind: "gap", q: "She isn't answering. She ___ have left her phone at home. (might/must — possibility)", answer: ["might", "may", "could"], theoryRef: "B2/x5/s1" },
          { kind: "transform", q: "Wyraź pewność (pozytywną) o przeszłości:", given: "I'm sure they forgot the meeting.", hint: "They must have...", answer: "They must have forgotten the meeting.", theoryRef: "B2/x5/s1" },
          { kind: "dropdown", q: "You look exhausted — you ___ have slept badly.", options: ["must", "can't", "shouldn't"], answer: 0, theoryRef: "B2/x5/s1" },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "can't", "have", "seen", "us", "in", "the", "dark"], answer: ["He", "can't", "have", "seen", "us", "in", "the", "dark"] },
          { kind: "truefalse", q: "Po „must have” używamy III formy czasownika.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: The locked room", intro: "Mała zagadka detektywistyczna.", passage: `
          <p>When the detective entered the office, she noticed several clues. The window was open, so the thief must have climbed in that way. There was no sign of the safe being forced, so the burglar can't have used tools on it. A half-finished cup of coffee was still warm, which means someone might have been there only minutes earlier. The expensive laptop was gone, but the cash was untouched, so the thief must have been after data, not money. The cleaner had a key, yet she can't have done it, because she was filmed across town. The detective smiled; the answer was becoming obvious.</p>`, theoryRef: "B2/x5/s1", questions: [
          { kind: "truefalse", q: "The thief probably climbed in through the window.", answer: true },
          { kind: "choice", q: "What does the warm coffee suggest?", options: ["The thief left days ago", "Someone was there recently", "Nobody entered the room"], answer: 1 },
          { kind: "gap", q: "The cleaner can't ___ done it, because she was filmed elsewhere. (have/has)", answer: "have" },
          { kind: "multi", q: "Which deductions does the detective make?", options: ["The thief used the window", "The thief wanted data", "The thief took the cash", "The cleaner was guilty"], answers: [0, 1] }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: stawianie hipotez", prompts: [
          { en: "She must have forgotten about our meeting.", pl: "Musiała zapomnieć o naszym spotkaniu." },
          { en: "They can't have arrived yet; it's too early.", pl: "Nie mogli jeszcze przyjechać, jest za wcześnie." },
          { en: "He might have taken the earlier train.", pl: "Mógł pojechać wcześniejszym pociągiem." },
          { en: "You should have called me before leaving.", pl: "Powinieneś był do mnie zadzwonić przed wyjściem." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: dedukcja", questions: [
          { kind: "choice", q: "The lights are off, so they ___ gone to bed.", options: ["must have", "can't have", "shouldn't have"], answer: 0 },
          { kind: "transform", q: "Wyraź pewność, że NIE:", given: "I'm sure he didn't see us.", answer: "He can't have seen us." },
          { kind: "gap", q: "She ___ have missed the bus — that's why she's late. (possibility)", answer: ["might", "may", "could"] },
          { kind: "dropdown", q: "There's no food left; the kids ___ have eaten it all.", options: ["must", "can't", "needn't"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["You", "should", "have", "told", "me", "earlier"], answer: ["You", "should", "have", "told", "me", "earlier"] },
          { kind: "truefalse", q: "Przeciwieństwem „must have” w dedukcji jest „can't have”.", answer: true }
        ]}
      ]
    },

    /* ===================== x6 — Crime & law ===================== */
    {
      id: "x6", title: "Przestępczość i prawo", icon: "⚖️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język prawa i przestępczości", html: `
          <p>Procesy prawne mają precyzyjne słownictwo. Oto kluczowe role i czynności:</p>
          <table class="t-table">
            <tr><th>Słowo</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>suspect</td><td>podejrzany</td><td><span class="say">The police questioned the main suspect.</span></td></tr>
            <tr><td>witness</td><td>świadek</td><td><span class="say">A witness saw the whole event.</span></td></tr>
            <tr><td>to commit a crime</td><td>popełnić przestępstwo</td><td><span class="say">He denied committing the crime.</span></td></tr>
            <tr><td>to be found guilty</td><td>zostać uznanym za winnego</td><td><span class="say">She was found guilty by the jury.</span></td></tr>
            <tr><td>to serve a sentence</td><td>odbywać karę</td><td><span class="say">He is serving a five-year sentence.</span></td></tr>
          </table>
          <p class="tip">💡 „Innocent until proven guilty” — niewinny, dopóki nie udowodni się winy: zasada domniemania niewinności.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przestępczość i prawo", words: [
          { en: "crime", pl: "przestępstwo", example: "Crime has fallen in this area." },
          { en: "criminal", pl: "przestępca", example: "The criminal was finally caught." },
          { en: "trial", pl: "proces sądowy", example: "The trial lasted three weeks." },
          { en: "jury", pl: "ława przysięgłych", example: "The jury reached a verdict." },
          { en: "evidence", pl: "dowody", example: "The evidence against him was strong." },
          { en: "sentence", pl: "wyrok / kara", example: "He received a harsh sentence." },
          { en: "to arrest", pl: "aresztować", example: "Police arrested two men last night." },
          { en: "fine", pl: "grzywna / mandat", example: "She had to pay a large fine." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: przestępczość i prawo", questions: [
          { kind: "choice", q: "The group of people who decide if someone is guilty is the ___.", options: ["jury", "witness", "fine"], answer: 0 },
          { kind: "gap", q: "After a long trial, she was found ___ and sent to prison. (guilty/innocent)", answer: "guilty" },
          { kind: "match", pairs: [
            { a: "suspect", b: "podejrzany" },
            { a: "witness", b: "świadek" },
            { a: "trial", b: "proces sądowy" },
            { a: "fine", b: "grzywna" }
          ]},
          { kind: "multi", q: "Which can the police do?", options: ["arrest a suspect", "question a witness", "serve a sentence", "pay a fine"], answers: [0, 1] },
          { kind: "dropdown", q: "The man was ___ for speeding and had to pay 200 pounds.", options: ["fined", "arrested", "witnessed"], answer: 0 },
          { kind: "truefalse", q: "„To commit a crime” oznacza popełnić przestępstwo.", answer: true },
          { kind: "choice", q: "Someone who sees a crime happen is a ___.", options: ["jury", "witness", "criminal"], answer: 1 }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: wiadomość o procesie", audio: "In court today, the jury found the businessman guilty of fraud after a three-week trial. The judge said the evidence was overwhelming and that several witnesses had described the same events. The man, who is forty-five, will serve a sentence of six years in prison. His lawyer announced that they plan to appeal the decision. The victims, who lost their savings, said they were relieved that justice had finally been done.", instructions: "Posłuchaj relacji z sali sądowej.", questions: [
          { kind: "choice", q: "What was the man found guilty of?", options: ["Theft", "Fraud", "Speeding"], answer: 1 },
          { kind: "truefalse", q: "The trial lasted only one day.", answer: false },
          { kind: "gap", q: "He will serve a sentence of ___ years. (number as word)", answer: "six" },
          { kind: "choice", q: "What do his lawyers plan to do?", options: ["Pay a fine", "Appeal the decision", "Free the witnesses"], answer: 1 }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: o sprawiedliwości", theoryRef: "B2/x6/s1", recordLine: 1, lines: [
          { speaker: "Ewa", en: "Did you hear the verdict? The jury found him guilty.", pl: "Słyszałeś wyrok? Ława przysięgłych uznała go za winnego." },
          { speaker: "Ty", en: "Yes. The evidence against him was very strong.", pl: "Tak. Dowody przeciwko niemu były bardzo mocne." },
          { speaker: "Ewa", en: "He'll probably serve a long sentence.", pl: "Pewnie odbędzie długi wyrok." },
          { speaker: "Ty", en: "True, but his lawyer says they will appeal.", pl: "To prawda, ale jego prawnik mówi, że się odwołają." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: prawo", questions: [
          { kind: "choice", q: "A person accused but not yet proven guilty is a ___.", options: ["jury", "suspect", "victim"], answer: 1 },
          { kind: "gap", q: "The police ___ two men in connection with the robbery. (arrest - Past Simple)", answer: "arrested" },
          { kind: "match", pairs: [
            { a: "jury", b: "ława przysięgłych" },
            { a: "trial", b: "proces" },
            { a: "sentence", b: "wyrok" }
          ]},
          { kind: "multi", q: "Pick all words that describe punishments:", options: ["fine", "sentence", "witness", "trial"], answers: [0, 1] },
          { kind: "dropdown", q: "He is currently ___ a five-year sentence.", options: ["serving", "arresting", "fining"], answer: 0 },
          { kind: "truefalse", q: "„Innocent until proven guilty” to zasada domniemania niewinności.", answer: true }
        ]}
      ]
    },

    /* ===================== x7 — wish / if only / regrets ===================== */
    {
      id: "x7", title: "wish / if only — żale i marzenia", icon: "🎯",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: wish, if only", html: `
          <p>Konstrukcje z <b>wish</b> i <b>if only</b> wyrażają żal lub pragnienie, że coś jest inne, niż jest.</p>
          <table class="t-table">
            <tr><th>Typ</th><th>Budowa</th><th>Przykład</th></tr>
            <tr><td>żal o teraźniejszość</td><td>wish + Past Simple</td><td><span class="say">I wish I had more time.</span></td></tr>
            <tr><td>żal o przeszłość</td><td>wish + Past Perfect</td><td><span class="say">I wish I had studied harder.</span></td></tr>
            <tr><td>irytacja / życzenie zmiany</td><td>wish + would</td><td><span class="say">I wish you would stop shouting.</span></td></tr>
            <tr><td>silny żal</td><td>if only + Past Simple/Perfect</td><td><span class="say">If only I had listened to you!</span></td></tr>
          </table>
          <p>Po „wish” w odniesieniu do „być” w teraźniejszości formalnie używamy <b>were</b> dla wszystkich osób: <span class="say">I wish I were taller.</span></p>
          <p class="tip">💡 „I wish I had done it” = żałuję, że tego nie zrobiłem (przeszłość, już nie do zmiany).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: żale i pragnienia", words: [
          { en: "to regret", pl: "żałować", example: "I deeply regret my mistake." },
          { en: "to long for", pl: "tęsknić za / pragnąć", example: "She longs for a quieter life." },
          { en: "hopeless", pl: "beznadziejny", example: "The situation felt hopeless." },
          { en: "to miss out", pl: "przegapić / stracić okazję", example: "Don't miss out on this chance." },
          { en: "if only", pl: "gdyby tylko", example: "If only I knew the answer!" },
          { en: "to look back", pl: "spoglądać wstecz", example: "When I look back, I feel grateful." },
          { en: "grateful", pl: "wdzięczny", example: "I'm grateful for your help." },
          { en: "to wish", pl: "życzyć / żałować", example: "I wish I could fly." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: wish i if only", theoryRef: "B2/x7/s1", questions: [
          { kind: "choice", q: "I wish I ___ harder for the exam last year.", options: ["studied", "had studied", "study"], answer: 1, theoryRef: "B2/x7/s1" },
          { kind: "transform", q: "Wyraź żal o przeszłość:", given: "I didn't save money.", hint: "I wish I had...", answer: "I wish I had saved money.", theoryRef: "B2/x7/s1" },
          { kind: "gap", q: "I wish it ___ raining; I want to go for a walk. (stop - past form)", answer: ["would stop", "stopped"], theoryRef: "B2/x7/s1" },
          { kind: "dropdown", q: "If only I ___ taller, I could reach the shelf.", options: ["were", "am", "had been"], answer: 0, theoryRef: "B2/x7/s1" },
          { kind: "transform", q: "Wyraź żal o teraźniejszość:", given: "I don't have enough free time.", hint: "I wish I had...", answer: "I wish I had more free time." },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "wish", "you", "would", "stop", "shouting"], answer: ["I", "wish", "you", "would", "stop", "shouting"] },
          { kind: "truefalse", q: "„I wish I had done it” odnosi się do żalu o przeszłość.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: Looking back", intro: "Refleksja o przeszłych decyzjach.", passage: `
          <p>Now that Maria is sixty, she often looks back on her life with mixed feelings. She wishes she had travelled more when she was young and healthy. If only she had taken that job in Paris, she thinks, her whole life might have been different. She also wishes she had spent more time with her parents before they passed away. Yet she is grateful for many things too: her children, her health and her loyal friends. Sometimes she wishes the days would slow down, because time now feels so precious. In the end, she has learned that regret is useless unless it teaches you something.</p>`, theoryRef: "B2/x7/s1", questions: [
          { kind: "truefalse", q: "Maria wishes she had travelled more when young.", answer: true },
          { kind: "choice", q: "What job does she regret not taking?", options: ["A job in London", "A job in Paris", "A job in Rome"], answer: 1 },
          { kind: "gap", q: "She wishes she ___ spent more time with her parents. (had/has)", answer: "had" },
          { kind: "multi", q: "What is Maria grateful for?", options: ["her children", "her health", "her old job", "her loyal friends"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: żale po egzaminie", theoryRef: "B2/x7/s1", recordLine: 1, lines: [
          { speaker: "Piotr", en: "I failed the test. I wish I had revised more.", pl: "Oblałem test. Żałuję, że nie powtórzyłem więcej materiału." },
          { speaker: "Ty", en: "If only you had asked me, we could have studied together.", pl: "Gdybyś tylko mnie poprosił, moglibyśmy uczyć się razem." },
          { speaker: "Piotr", en: "I know. I wish I weren't so lazy sometimes.", pl: "Wiem. Czasem żałuję, że jestem taki leniwy." },
          { speaker: "Ty", en: "Don't worry. I wish you would stop being so hard on yourself.", pl: "Nie martw się. Chciałbym, żebyś przestał być dla siebie taki surowy." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: wish i if only", questions: [
          { kind: "choice", q: "I wish I ___ more money right now.", options: ["have", "had", "had had"], answer: 1 },
          { kind: "transform", q: "Wyraź żal o przeszłość:", given: "I didn't listen to you.", answer: "I wish I had listened to you." },
          { kind: "gap", q: "If only I ___ known earlier! (had/have)", answer: "had" },
          { kind: "dropdown", q: "I wish my neighbour ___ stop playing loud music.", options: ["would", "had", "did"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "wish", "I", "were", "on", "holiday"], answer: ["I", "wish", "I", "were", "on", "holiday"] },
          { kind: "truefalse", q: "Po „wish” formalnie używamy „were” dla wszystkich osób w odniesieniu do teraźniejszości.", answer: true }
        ]}
      ]
    },

    /* ===================== x8 — Science & innovation ===================== */
    {
      id: "x8", title: "Nauka i innowacje", icon: "🔬",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język nauki i innowacji", html: `
          <p>Świat nauki posługuje się precyzyjnym słownictwem opisującym badania i odkrycia:</p>
          <table class="t-table">
            <tr><th>Słowo</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>research</td><td>badania</td><td><span class="say">The research took five years.</span></td></tr>
            <tr><td>to carry out an experiment</td><td>przeprowadzać eksperyment</td><td><span class="say">They carried out a careful experiment.</span></td></tr>
            <tr><td>breakthrough</td><td>przełom</td><td><span class="say">The vaccine was a major breakthrough.</span></td></tr>
            <tr><td>to develop</td><td>opracowywać / rozwijać</td><td><span class="say">Scientists developed a new material.</span></td></tr>
            <tr><td>findings</td><td>wyniki / ustalenia</td><td><span class="say">They published their findings.</span></td></tr>
          </table>
          <p class="tip">💡 „Research” jest niepoliczalne: mówimy „a piece of research”, NIE „a research”.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: nauka i innowacje", words: [
          { en: "discovery", pl: "odkrycie", example: "It was an important discovery." },
          { en: "invention", pl: "wynalazek", example: "The wheel was a brilliant invention." },
          { en: "experiment", pl: "eksperyment", example: "The experiment was a success." },
          { en: "hypothesis", pl: "hipoteza", example: "Her hypothesis was finally proven." },
          { en: "data", pl: "dane", example: "The data supports the theory." },
          { en: "to launch", pl: "wprowadzać / wystrzeliwać", example: "They launched a new satellite." },
          { en: "cure", pl: "lekarstwo / wyleczenie", example: "Scientists are searching for a cure." },
          { en: "sustainable", pl: "zrównoważony / trwały", example: "We need sustainable energy sources." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: nauka i innowacje", questions: [
          { kind: "choice", q: "A sudden important advance in science is a ___.", options: ["breakthrough", "subscription", "sentence"], answer: 0 },
          { kind: "gap", q: "Scientists ___ out an experiment to test the idea. (carry - Past Simple)", answer: "carried" },
          { kind: "match", pairs: [
            { a: "discovery", b: "odkrycie" },
            { a: "invention", b: "wynalazek" },
            { a: "hypothesis", b: "hipoteza" },
            { a: "data", b: "dane" }
          ]},
          { kind: "multi", q: "Which words belong to scientific research?", options: ["experiment", "findings", "tabloid", "hypothesis"], answers: [0, 1, 3] },
          { kind: "categorize", q: "Pogrupuj słowa według kategorii:", cats: ["Nauka", "Media"], items: [
            { t: "hypothesis", cat: 0 },
            { t: "headline", cat: 1 },
            { t: "experiment", cat: 0 },
            { t: "tabloid", cat: 1 }
          ]},
          { kind: "dropdown", q: "After years of work, they finally ___ a cure for the disease.", options: ["developed", "arrested", "broadcast"], answer: 0 },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "The new vaccine was a major scientific breakthrough.", answer: "The new vaccine was a major scientific breakthrough." },
          { kind: "truefalse", q: "Słowo „research” jest niepoliczalne.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: o nowym odkryciu", audio: "Researchers at the university have announced an exciting breakthrough. After carrying out hundreds of experiments, the team developed a new material that can clean polluted water using only sunlight. The findings, which were published this week, suggest that the technology is cheap and sustainable. The scientists hope to launch the first large project next year. If the data is confirmed, millions of people could finally get access to safe drinking water.", instructions: "Posłuchaj o nowym odkryciu naukowym.", questions: [
          { kind: "choice", q: "What did the team develop?", options: ["A new vaccine", "A material that cleans water", "A faster computer"], answer: 1 },
          { kind: "truefalse", q: "The technology is described as expensive.", answer: false },
          { kind: "dictation", q: "Zapisz zdanie, które usłyszysz:", audio: "The technology is cheap and sustainable.", answer: "The technology is cheap and sustainable." },
          { kind: "choice", q: "When do they hope to launch the first big project?", options: ["This week", "Next year", "In ten years"], answer: 1 }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: o postępie naukowym", prompts: [
          { en: "Scientists have made an important discovery this year.", pl: "Naukowcy dokonali w tym roku ważnego odkrycia." },
          { en: "The team carried out hundreds of experiments.", pl: "Zespół przeprowadził setki eksperymentów." },
          { en: "We urgently need more sustainable energy sources.", pl: "Pilnie potrzebujemy więcej zrównoważonych źródeł energii." },
          { en: "Their findings were published in a famous journal.", pl: "Ich wyniki zostały opublikowane w słynnym czasopiśmie." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: nauka i innowacje", questions: [
          { kind: "choice", q: "An idea that has not yet been proven is a ___.", options: ["finding", "hypothesis", "discovery"], answer: 1 },
          { kind: "gap", q: "They will ___ a new satellite into space next month. (launch/arrest)", answer: "launch" },
          { kind: "match", pairs: [
            { a: "breakthrough", b: "przełom" },
            { a: "cure", b: "lekarstwo" },
            { a: "sustainable", b: "zrównoważony" }
          ]},
          { kind: "multi", q: "Pick all stages of scientific work:", options: ["form a hypothesis", "carry out experiments", "publish findings", "pay a fine"], answers: [0, 1, 2] },
          { kind: "dropdown", q: "The ___ from the study supported their theory.", options: ["data", "jury", "headline"], answer: 0 },
          { kind: "truefalse", q: "„Invention” to po polsku „wynalazek”.", answer: true }
        ]}
      ]
    }

  );
})();
