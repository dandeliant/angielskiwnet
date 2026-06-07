/* B2 — dodatkowe tematy, część 2 (gramatyka + leksyka na zmianę) */
(function () {
  var lv = window.COURSE.levels.find(function (l) { return l.id === "B2"; });
  if (!lv) return;
  lv.units.push(

    /* ===================== x9 — Passive: causative & reporting (GRAMATYKA) ===================== */
    {
      id: "x9", title: "Strona bierna: have sth done i konstrukcje raportujące", icon: "🛠️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: zaawansowana strona bierna", html: `
          <p>Strona bierna na poziomie B2 to nie tylko <b>be + III forma</b>. Poznaj trzy przydatne konstrukcje:</p>
          <table class="t-table">
            <tr><th>Konstrukcja</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>have + rzecz. + III forma</td><td>zlecam komuś czynność</td><td><span class="say">I had my car repaired yesterday.</span></td></tr>
            <tr><td>get + rzecz. + III forma</td><td>to samo, mniej formalnie</td><td><span class="say">She got her hair cut last week.</span></td></tr>
            <tr><td>It is said / believed that…</td><td>passive raportujący (bezosobowy)</td><td><span class="say">It is said that he is very rich.</span></td></tr>
            <tr><td>He is said to + bezokolicznik</td><td>passive raportujący (osobowy)</td><td><span class="say">He is said to be very rich.</span></td></tr>
          </table>
          <p>Uwaga na różnicę: <span class="say">I painted the kitchen.</span> (sam pomalowałem) vs <span class="say">I had the kitchen painted.</span> (ktoś inny pomalował na moje zlecenie).</p>
          <p>Konstrukcje raportujące pozwalają mówić o cudzych opiniach bez wskazywania źródła: <span class="say">The factory is believed to have closed last year.</span></p>
          <p class="tip">💡 „have something done” opisuje usługę wykonaną dla nas; „get something done” brzmi bardziej potocznie, ale znaczy to samo.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: usługi i czynności zlecane", words: [
          { en: "to repair", pl: "naprawiać", example: "I had my laptop repaired at the shop." },
          { en: "to service", pl: "serwisować / przeglądać", example: "We get the car serviced every year." },
          { en: "to install", pl: "instalować / montować", example: "They had solar panels installed on the roof." },
          { en: "to deliver", pl: "dostarczać", example: "I had the furniture delivered to my flat." },
          { en: "to renovate", pl: "remontować", example: "She is having the kitchen renovated." },
          { en: "to dry-clean", pl: "czyścić chemicznie", example: "He got his suit dry-cleaned before the interview." },
          { en: "to be rumoured", pl: "krążyć (o plotce)", example: "The company is rumoured to be in trouble." },
          { en: "to be believed", pl: "być uważanym za", example: "The painting is believed to be genuine." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: causative i reporting", theoryRef: "B2/x9/s1", questions: [
          { kind: "choice", q: "I didn't fix it myself. I ___ at the garage. (mechanik naprawił)", options: ["repaired the car", "had the car repaired", "have repaired the car"], answer: 1, theoryRef: "B2/x9/s1" },
          { kind: "transform", q: "Przekształć z użyciem causative:", given: "A hairdresser cut her hair.", hint: "She had...", answer: ["She had her hair cut.", "She got her hair cut."], theoryRef: "B2/x9/s1" },
          { kind: "transform", q: "Przekształć na passive raportujący (bezosobowy):", given: "People say that he is honest.", hint: "It is said that...", answer: "It is said that he is honest.", theoryRef: "B2/x9/s1" },
          { kind: "gap", q: "We are ___ the windows cleaned tomorrow. (have - Present Continuous)", answer: "having", theoryRef: "B2/x9/s1" },
          { kind: "dropdown", q: "The actor ___ said to be moving abroad.", options: ["is", "has", "was being"], answer: 0, theoryRef: "B2/x9/s1" },
          { kind: "truefalse", q: "„I had the kitchen painted.” znaczy, że ktoś inny pomalował kuchnię na moje zlecenie.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: Getting the house ready", intro: "Przeczytaj o przygotowaniach do sprzedaży domu.", passage: `
          <p>Before they put the house on the market, the Coopers decided to have a few things done professionally. First, they had the whole flat repainted, because the old colour looked tired. Then they got the central heating serviced, since it is believed that buyers always ask about the boiler. The garden was a mess, so they had it landscaped by a local firm. They even had new lights installed in the hallway, which made it look much brighter. The estate agent is said to have been impressed by the result. Within two weeks the house was sold, and the family got the whole sale completed faster than they had expected.</p>`, theoryRef: "B2/x9/s1", questions: [
          { kind: "truefalse", q: "The Coopers painted the flat themselves.", answer: false },
          { kind: "choice", q: "Why did they get the heating serviced?", options: ["Because it was broken", "Because buyers ask about the boiler", "Because it was very old"], answer: 1 },
          { kind: "gap", q: "They had new lights ___ in the hallway. (install - III forma)", answer: "installed" },
          { kind: "multi", q: "Which jobs did they have done?", options: ["repainting", "landscaping", "rewiring", "installing lights"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: u fryzjera i nie tylko", theoryRef: "B2/x9/s1", recordLine: 1, lines: [
          { speaker: "Mia", en: "You look different! Did you change something?", pl: "Wyglądasz inaczej! Coś zmieniłaś?" },
          { speaker: "Ty", en: "Yes, I got my hair cut and coloured at the weekend.", pl: "Tak, w weekend obcięłam i ufarbowałam włosy." },
          { speaker: "Mia", en: "It suits you. By the way, I'm having my flat renovated next month.", pl: "Pasuje ci. À propos, w przyszłym miesiącu robię remont mieszkania." },
          { speaker: "Ty", en: "Nice! Are you having the kitchen redone too?", pl: "Super! Czy kuchnię też przerabiasz?" }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: causative i reporting", questions: [
          { kind: "choice", q: "She ___ her passport renewed last month.", options: ["had", "did", "made"], answer: 0 },
          { kind: "transform", q: "Przekształć z użyciem causative:", given: "A mechanic checked the brakes for us.", hint: "We had...", answer: ["We had the brakes checked.", "We got the brakes checked."] },
          { kind: "transform", q: "Przekształć na passive raportujący (osobowy):", given: "People believe that she lives in Paris.", hint: "She is believed to...", answer: "She is believed to live in Paris." },
          { kind: "gap", q: "It ___ said that the bridge is unsafe. (is/are)", answer: "is" },
          { kind: "order", q: "Ułóż zdanie:", words: ["I", "had", "my", "watch", "repaired", "in", "town"], answer: ["I", "had", "my", "watch", "repaired", "in", "town"] }
        ]}
      ]
    },

    /* ===================== x10 — Environment & climate change (LEKSYKA) ===================== */
    {
      id: "x10", title: "Środowisko i zmiany klimatu", icon: "🌍",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język ekologii i klimatu", html: `
          <p>Tematyka środowiska wymaga precyzyjnego słownictwa i kolokacji:</p>
          <table class="t-table">
            <tr><th>Zwrot</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>climate change</td><td>zmiana klimatu</td><td><span class="say">Climate change affects us all.</span></td></tr>
            <tr><td>carbon footprint</td><td>ślad węglowy</td><td><span class="say">Flying increases your carbon footprint.</span></td></tr>
            <tr><td>renewable energy</td><td>energia odnawialna</td><td><span class="say">We invest in renewable energy.</span></td></tr>
            <tr><td>to cut emissions</td><td>ograniczać emisje</td><td><span class="say">Cities are trying to cut emissions.</span></td></tr>
            <tr><td>single-use plastic</td><td>plastik jednorazowy</td><td><span class="say">Many shops banned single-use plastic.</span></td></tr>
          </table>
          <p>Przydatne kolokacje: <b>to tackle / to address</b> a problem (zająć się problemem), <b>to raise awareness</b> (zwiększać świadomość), <b>to go green</b> (postawić na ekologię).</p>
          <p class="tip">💡 „Global warming” to ocieplenie klimatu — jedna z przyczyn szerszego zjawiska „climate change”.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: środowisko", words: [
          { en: "pollution", pl: "zanieczyszczenie", example: "Air pollution is a serious health risk." },
          { en: "emissions", pl: "emisje (spalin)", example: "Cars produce harmful emissions." },
          { en: "renewable", pl: "odnawialny", example: "Wind is a renewable source of energy." },
          { en: "to recycle", pl: "poddawać recyklingowi", example: "We recycle glass and paper at home." },
          { en: "sustainable", pl: "zrównoważony / ekologiczny", example: "They promote sustainable farming." },
          { en: "deforestation", pl: "wylesianie", example: "Deforestation destroys animal habitats." },
          { en: "greenhouse gas", pl: "gaz cieplarniany", example: "Carbon dioxide is a greenhouse gas." },
          { en: "endangered", pl: "zagrożony (wyginięciem)", example: "Pandas are an endangered species." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: środowisko i klimat", questions: [
          { kind: "choice", q: "Energy from the sun or wind is called ___ energy.", options: ["renewable", "harmful", "endangered"], answer: 0 },
          { kind: "gap", q: "We should ___ paper and plastic instead of throwing them away.", answer: "recycle" },
          { kind: "match", pairs: [
            { a: "pollution", b: "zanieczyszczenie" },
            { a: "emissions", b: "emisje" },
            { a: "sustainable", b: "zrównoważony" },
            { a: "endangered", b: "zagrożony" }
          ]},
          { kind: "categorize", q: "Pogrupuj pojęcia:", cats: ["Problem", "Rozwiązanie"], items: [
            { t: "deforestation", cat: 0 },
            { t: "renewable energy", cat: 1 },
            { t: "air pollution", cat: 0 },
            { t: "recycling", cat: 1 },
            { t: "greenhouse gases", cat: 0 }
          ]},
          { kind: "multi", q: "Which actions help the environment?", options: ["cutting emissions", "burning forests", "recycling waste", "using renewable energy"], answers: [0, 2, 3] },
          { kind: "truefalse", q: "„Carbon footprint” to po polsku „ślad węglowy”.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: wywiad o klimacie", audio: "Welcome back to our programme. Today we are talking about how ordinary people can help fight climate change. Our expert says the most important step is to cut emissions in our daily lives, for example by using public transport instead of driving. She also recommends switching to renewable energy at home and avoiding single-use plastic whenever possible. Small changes, she explains, can reduce your carbon footprint significantly. Finally, she reminds us that recycling alone is not enough; we must also consume less and protect endangered habitats.", instructions: "Posłuchaj wywiadu i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What does the expert say is the most important step?", options: ["Buying new gadgets", "Cutting emissions in daily life", "Watching the news"], answer: 1 },
          { kind: "truefalse", q: "The expert says recycling alone is enough.", answer: false },
          { kind: "gap", q: "Small changes can reduce your carbon ___.", answer: "footprint" },
          { kind: "multi", q: "Which actions does she recommend?", options: ["using public transport", "switching to renewable energy", "buying more plastic", "avoiding single-use plastic"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: opinie o ekologii", prompts: [
          { en: "I think governments should do more to tackle climate change.", pl: "Uważam, że rządy powinny robić więcej, by przeciwdziałać zmianom klimatu." },
          { en: "We try to reduce our carbon footprint by cycling to work.", pl: "Staramy się zmniejszać nasz ślad węglowy, jeżdżąc do pracy rowerem." },
          { en: "Single-use plastic should be banned everywhere.", pl: "Plastik jednorazowy powinien być zakazany wszędzie." },
          { en: "Renewable energy is the key to a sustainable future.", pl: "Energia odnawialna to klucz do zrównoważonej przyszłości." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: środowisko", questions: [
          { kind: "choice", q: "Cutting down large areas of forest is called ___.", options: ["deforestation", "pollution", "recycling"], answer: 0 },
          { kind: "gap", q: "Cars and factories produce harmful ___. (emisje)", answer: "emissions" },
          { kind: "match", pairs: [
            { a: "renewable", b: "odnawialny" },
            { a: "greenhouse gas", b: "gaz cieplarniany" },
            { a: "to recycle", b: "poddawać recyklingowi" }
          ]},
          { kind: "categorize", q: "Szkodliwe czy pomocne dla planety?", cats: ["Szkodliwe", "Pomocne"], items: [
            { t: "burning coal", cat: 0 },
            { t: "solar panels", cat: 1 },
            { t: "single-use plastic", cat: 0 },
            { t: "planting trees", cat: 1 }
          ]},
          { kind: "truefalse", q: "„Endangered species” to gatunek zagrożony wyginięciem.", answer: true }
        ]}
      ]
    },

    /* ===================== x11 — Second, third & mixed conditionals (GRAMATYKA) ===================== */
    {
      id: "x11", title: "Okresy warunkowe 2, 3 i mieszane", icon: "🌀",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: tryby warunkowe", html: `
          <p>Tryby warunkowe opisują sytuacje hipotetyczne. Porównaj drugi i trzeci tryb:</p>
          <table class="t-table">
            <tr><th>Tryb</th><th>Budowa</th><th>Przykład</th></tr>
            <tr><td>2nd (nierealna teraźniejszość)</td><td>If + Past Simple, would + bezokolicznik</td><td><span class="say">If I had more time, I would travel.</span></td></tr>
            <tr><td>3rd (nierealna przeszłość)</td><td>If + Past Perfect, would have + III forma</td><td><span class="say">If I had known, I would have helped.</span></td></tr>
            <tr><td>mixed (przeszłość → teraz)</td><td>If + Past Perfect, would + bezokolicznik</td><td><span class="say">If I had studied medicine, I would be a doctor now.</span></td></tr>
          </table>
          <p>W drugim trybie często używamy <b>were</b> dla wszystkich osób: <span class="say">If I were you, I would apologise.</span></p>
          <p>Trzeci tryb wyraża <b>żal</b> lub <b>krytykę</b> wobec przeszłości, której nie da się zmienić: <span class="say">If she had left earlier, she wouldn't have missed the train.</span></p>
          <p class="tip">💡 Mieszany tryb łączy przeszły warunek (If + Past Perfect) z teraźniejszym skutkiem (would + bezokolicznik).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: hipotezy i żale", words: [
          { en: "to regret", pl: "żałować", example: "I regret not telling her the truth." },
          { en: "to imagine", pl: "wyobrażać sobie", example: "Imagine if we lived by the sea." },
          { en: "to assume", pl: "zakładać", example: "I assumed you would call me back." },
          { en: "to apologise", pl: "przepraszać", example: "If I were you, I would apologise." },
          { en: "outcome", pl: "wynik / rezultat", example: "The outcome would have been different." },
          { en: "to warn", pl: "ostrzegać", example: "If you had warned me, I would have waited." },
          { en: "hypothetical", pl: "hipotetyczny", example: "Let's consider a hypothetical situation." },
          { en: "to afford", pl: "pozwolić sobie (finansowo)", example: "If I earned more, I could afford a car." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: tryby warunkowe", theoryRef: "B2/x11/s1", questions: [
          { kind: "choice", q: "If I ___ rich, I would buy a house by the sea. (2nd conditional)", options: ["am", "were", "had been"], answer: 1, theoryRef: "B2/x11/s1" },
          { kind: "gap", q: "If she had studied harder, she ___ have passed the exam. (would/will)", answer: "would", theoryRef: "B2/x11/s1" },
          { kind: "transform", q: "Utwórz trzeci tryb warunkowy:", given: "I didn't know, so I didn't help.", hint: "If I had known...", answer: "If I had known, I would have helped.", theoryRef: "B2/x11/s1" },
          { kind: "dropdown", q: "If we ___ left earlier, we wouldn't have missed the flight.", options: ["had", "have", "would"], answer: 0, theoryRef: "B2/x11/s1" },
          { kind: "choice", q: "If I had taken that job, I ___ in London now. (mixed conditional)", options: ["would live", "would have lived", "will live"], answer: 0, theoryRef: "B2/x11/s1" },
          { kind: "truefalse", q: "Trzeci tryb warunkowy używa: If + Past Perfect, would have + III forma.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A missed opportunity", intro: "Przeczytaj o niewykorzystanej szansie.", passage: `
          <p>Daniel often thinks about the choices he made after university. If he had accepted the job offer in Berlin, his life would be completely different now. He would probably speak fluent German and would be earning a much higher salary. At the time, however, he assumed the move would be too stressful, so he stayed in his home town. If someone had warned him how few opportunities there would be at home, he might have made another decision. He doesn't regret everything, of course; if he had left, he would never have met his wife. Still, he sometimes wonders what the outcome would have been if he had been a little braver.</p>`, theoryRef: "B2/x11/s1", questions: [
          { kind: "truefalse", q: "Daniel accepted the job offer in Berlin.", answer: false },
          { kind: "choice", q: "What would be different if he had taken the job?", options: ["He would speak fluent German", "He would have stayed at home", "He would never have studied"], answer: 0 },
          { kind: "gap", q: "If he had left, he would never ___ met his wife. (have/has)", answer: "have" },
          { kind: "multi", q: "Which ideas appear in the text?", options: ["regret about choices", "a higher salary abroad", "winning the lottery", "meeting his wife"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: gdyby tylko...", theoryRef: "B2/x11/s1", recordLine: 1, lines: [
          { speaker: "Adam", en: "I'm so tired. If I hadn't stayed up late, I would feel better now.", pl: "Jestem taki zmęczony. Gdybym nie siedział do późna, czułbym się teraz lepiej." },
          { speaker: "Ty", en: "If I were you, I would take a short nap after lunch.", pl: "Na twoim miejscu zrobiłbym sobie krótką drzemkę po obiedzie." },
          { speaker: "Adam", en: "Good idea. If I had known the deadline was today, I would have started earlier.", pl: "Dobry pomysł. Gdybym wiedział, że termin jest dziś, zacząłbym wcześniej." },
          { speaker: "Ty", en: "Don't worry. If you focus now, you'll still finish on time.", pl: "Nie martw się. Jeśli się teraz skupisz, i tak skończysz na czas." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: tryby warunkowe", questions: [
          { kind: "choice", q: "If I ___ you, I wouldn't trust him.", options: ["was", "were", "am"], answer: 1 },
          { kind: "transform", q: "Utwórz trzeci tryb warunkowy:", given: "She didn't call, so we didn't wait.", hint: "If she had called...", answer: "If she had called, we would have waited." },
          { kind: "gap", q: "If I had saved more money, I ___ buy a car now. (mixed - could/can)", answer: "could" },
          { kind: "dropdown", q: "If they ___ harder, they would have won the match.", options: ["had trained", "trained", "would train"], answer: 0 },
          { kind: "order", q: "Ułóż zdanie:", words: ["If", "I", "had", "known", "I", "would", "have", "stayed"], answer: ["If", "I", "had", "known", "I", "would", "have", "stayed"] }
        ]}
      ]
    },

    /* ===================== x12 — Media, news & technology (LEKSYKA) ===================== */
    {
      id: "x12", title: "Media, technologia i internet", icon: "📱",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język technologii i sieci", html: `
          <p>Współczesne media i technologia mają bogate, zmieniające się słownictwo:</p>
          <table class="t-table">
            <tr><th>Zwrot</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>to stream</td><td>oglądać / słuchać online</td><td><span class="say">Millions stream films every night.</span></td></tr>
            <tr><td>data privacy</td><td>prywatność danych</td><td><span class="say">Users worry about data privacy.</span></td></tr>
            <tr><td>to scroll</td><td>przewijać</td><td><span class="say">I scroll through my feed every morning.</span></td></tr>
            <tr><td>screen time</td><td>czas przed ekranem</td><td><span class="say">Try to limit your screen time.</span></td></tr>
            <tr><td>to log in / out</td><td>logować się / wylogowywać</td><td><span class="say">Remember to log out afterwards.</span></td></tr>
          </table>
          <p>Inne przydatne słowa: <b>a notification</b> (powiadomienie), <b>a device</b> (urządzenie), <b>an algorithm</b> (algorytm), <b>to update</b> (aktualizować).</p>
          <p class="tip">💡 „Social media” w angielskim bywa traktowane jako rzeczownik niepoliczalny: <span class="say">Social media is very influential.</span></p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: media i technologia", words: [
          { en: "device", pl: "urządzenie", example: "I sync my photos across all my devices." },
          { en: "notification", pl: "powiadomienie", example: "I turned off notifications to focus." },
          { en: "to download", pl: "pobierać", example: "Download the app from the store." },
          { en: "algorithm", pl: "algorytm", example: "The algorithm decides what you see." },
          { en: "privacy", pl: "prywatność", example: "Privacy settings are easy to change." },
          { en: "to subscribe", pl: "subskrybować", example: "Subscribe to the channel for updates." },
          { en: "influencer", pl: "influencer / osoba wpływowa", example: "The influencer promoted the product." },
          { en: "user-friendly", pl: "przyjazny dla użytkownika", example: "The new app is very user-friendly." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: media i technologia", questions: [
          { kind: "choice", q: "A small alert that pops up on your phone is a ___.", options: ["notification", "subscription", "device"], answer: 0 },
          { kind: "gap", q: "You should ___ the latest version of the app for new features.", answer: "download" },
          { kind: "match", pairs: [
            { a: "device", b: "urządzenie" },
            { a: "algorithm", b: "algorytm" },
            { a: "privacy", b: "prywatność" },
            { a: "user-friendly", b: "przyjazny dla użytkownika" }
          ]},
          { kind: "dropdown", q: "Many people try to limit their ___ to avoid spending all day on the phone.", options: ["screen time", "data privacy", "notification"], answer: 0 },
          { kind: "multi", q: "Which words are connected to using apps?", options: ["to download", "to subscribe", "to harvest", "to log in"], answers: [0, 1, 3] },
          { kind: "truefalse", q: "„Influencer” to osoba, która ma wpływ na opinie i decyzje innych w sieci.", answer: true }
        ]},
        { id: "s4", type: "listen", title: "Słuchanie: podcast o technologii", audio: "Hello and welcome to Tech Talk. In today's episode we discuss how algorithms shape what we see online. Every time you scroll through your feed, an algorithm decides which posts to show you, often based on what you have liked before. This can be convenient, but experts warn that it may also create a bubble where you only see opinions you already agree with. We also talk about data privacy and why it matters to read those long terms and conditions before you log in. Finally, we share three simple tips to reduce your screen time and use technology more mindfully.", instructions: "Posłuchaj podcastu i odpowiedz na pytania.", questions: [
          { kind: "choice", q: "What decides which posts you see?", options: ["A journalist", "An algorithm", "A subscription"], answer: 1 },
          { kind: "truefalse", q: "Experts say algorithms can create a bubble of similar opinions.", answer: true },
          { kind: "gap", q: "They share tips to reduce your ___ time.", answer: "screen" },
          { kind: "multi", q: "Which topics are mentioned?", options: ["algorithms", "data privacy", "online shopping", "screen time"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: o nawykach w sieci", theoryRef: "B2/x12/s1", recordLine: 1, lines: [
          { speaker: "Zoe", en: "I spend far too much time scrolling through social media.", pl: "Spędzam o wiele za dużo czasu, przewijając media społecznościowe." },
          { speaker: "Ty", en: "Same here. I turned off most notifications to stay focused.", pl: "Ja tak samo. Wyłączyłem większość powiadomień, żeby się skupić." },
          { speaker: "Zoe", en: "Good idea. I'm also worried about my data privacy lately.", pl: "Dobry pomysł. Ostatnio martwię się też o prywatność moich danych." },
          { speaker: "Ty", en: "You should check your privacy settings — they're quite user-friendly now.", pl: "Powinnaś sprawdzić swoje ustawienia prywatności — są teraz dość przyjazne dla użytkownika." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: media i technologia", questions: [
          { kind: "choice", q: "Someone with many followers who promotes products online is an ___.", options: ["influencer", "algorithm", "device"], answer: 0 },
          { kind: "gap", q: "I ___ to several podcasts to learn new things every week. (subskrybuję)", answer: "subscribe" },
          { kind: "match", pairs: [
            { a: "notification", b: "powiadomienie" },
            { a: "to download", b: "pobierać" },
            { a: "influencer", b: "osoba wpływowa" }
          ]},
          { kind: "dropdown", q: "Read the terms before you ___ to a new website.", options: ["log in", "scroll up", "stream out"], answer: 0 },
          { kind: "truefalse", q: "„User-friendly” oznacza coś trudnego i skomplikowanego w obsłudze.", answer: false }
        ]}
      ]
    },

    /* ===================== x13 — Reported speech (GRAMATYKA) ===================== */
    {
      id: "x13", title: "Mowa zależna: zdania, pytania i polecenia", icon: "🗨️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: mowa zależna", html: `
          <p>W mowie zależnej (reported speech) cofamy czas o jeden krok i zmieniamy zaimki oraz określenia czasu.</p>
          <table class="t-table">
            <tr><th>Mowa niezależna</th><th>Mowa zależna</th></tr>
            <tr><td>Present Simple</td><td>Past Simple</td></tr>
            <tr><td>Present Continuous</td><td>Past Continuous</td></tr>
            <tr><td>Past Simple / Present Perfect</td><td>Past Perfect</td></tr>
            <tr><td>will</td><td>would</td></tr>
            <tr><td>can</td><td>could</td></tr>
          </table>
          <p><b>Zdania:</b> <span class="say">"I am tired," she said.</span> → <span class="say">She said (that) she was tired.</span></p>
          <p><b>Pytania:</b> używamy <b>asked</b> oraz szyku twierdzącego (bez do/does/did). Pytania tak/nie wprowadzamy przez <b>if / whether</b>: <span class="say">"Do you live here?" → He asked if I lived there.</span></p>
          <p><b>Polecenia i prośby:</b> używamy <b>told / asked + osoba + to + bezokolicznik</b>: <span class="say">"Sit down." → She told me to sit down.</span></p>
          <p class="tip">💡 Zmieniają się też okoliczniki: now → then, today → that day, tomorrow → the next day, here → there.</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: czasowniki raportujące", words: [
          { en: "to claim", pl: "twierdzić", example: "He claimed that he was innocent." },
          { en: "to admit", pl: "przyznać (się)", example: "She admitted that she was wrong." },
          { en: "to deny", pl: "zaprzeczać", example: "He denied taking the money." },
          { en: "to suggest", pl: "sugerować / proponować", example: "She suggested going by train." },
          { en: "to promise", pl: "obiecywać", example: "They promised to call back soon." },
          { en: "to warn", pl: "ostrzegać", example: "He warned us not to be late." },
          { en: "to complain", pl: "narzekać / skarżyć się", example: "She complained that the food was cold." },
          { en: "to insist", pl: "nalegać / upierać się", example: "He insisted on paying the bill." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: mowa zależna", theoryRef: "B2/x13/s1", questions: [
          { kind: "transform", q: "Zamień na mowę zależną:", given: "\"I am busy,\" she said.", hint: "She said that...", answer: ["She said that she was busy.", "She said she was busy."], theoryRef: "B2/x13/s1" },
          { kind: "choice", q: "\"I will help you,\" he said. → He said he ___ help me.", options: ["will", "would", "had"], answer: 1, theoryRef: "B2/x13/s1" },
          { kind: "transform", q: "Zamień pytanie na mowę zależną:", given: "\"Do you live here?\" he asked.", hint: "He asked if...", answer: ["He asked if I lived there.", "He asked whether I lived there."], theoryRef: "B2/x13/s1" },
          { kind: "gap", q: "She told me ___ wait outside. (polecenie: to + bezokolicznik)", answer: "to", theoryRef: "B2/x13/s1" },
          { kind: "dropdown", q: "\"Don't touch it,\" she said. → She told me ___ touch it.", options: ["not to", "to not", "don't"], answer: 0, theoryRef: "B2/x13/s1" },
          { kind: "truefalse", q: "W mowie zależnej „will” zamienia się na „would”.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A misunderstanding", intro: "Przeczytaj o drobnym nieporozumieniu.", passage: `
          <p>Last week my neighbour knocked on my door looking quite upset. He said that someone had parked in front of his garage again and asked whether I had seen anything. I told him that I had been at work all day, so I couldn't help. He explained that this had happened several times that month and complained that nobody ever took responsibility. I suggested that he should leave a polite note on the car, and he admitted that he had never thought of that. Before he left, he promised to let me know what happened and warned me not to leave my own car there either. The next day he told me the problem had been solved.</p>`, theoryRef: "B2/x13/s1", questions: [
          { kind: "truefalse", q: "The neighbour asked if the writer had seen anything.", answer: true },
          { kind: "choice", q: "What did the writer suggest?", options: ["Calling the police", "Leaving a polite note", "Moving the garage"], answer: 1 },
          { kind: "gap", q: "He warned me ___ to leave my car there either. (negatywne polecenie)", answer: "not" },
          { kind: "multi", q: "Which reporting verbs appear in the text?", options: ["complained", "suggested", "shouted", "promised"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "dialog", title: "Dialog: relacjonowanie rozmowy", theoryRef: "B2/x13/s1", recordLine: 1, lines: [
          { speaker: "Kasia", en: "What did the doctor say about your results?", pl: "Co lekarz powiedział o twoich wynikach?" },
          { speaker: "Ty", en: "She said that everything was fine and told me to rest.", pl: "Powiedziała, że wszystko jest w porządku, i kazała mi odpoczywać." },
          { speaker: "Kasia", en: "That's a relief. Did she ask you to come back?", pl: "Co za ulga. Czy poprosiła, żebyś wrócił?" },
          { speaker: "Ty", en: "Yes, she asked me to make another appointment next month.", pl: "Tak, poprosiła, żebym umówił się ponownie w przyszłym miesiącu." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: mowa zależna", questions: [
          { kind: "transform", q: "Zamień na mowę zależną:", given: "\"I have finished my work,\" he said.", hint: "He said that... (Past Perfect)", answer: ["He said that he had finished his work.", "He said he had finished his work."] },
          { kind: "choice", q: "\"Can you swim?\" she asked. → She asked if I ___ swim.", options: ["can", "could", "would"], answer: 1 },
          { kind: "transform", q: "Zamień polecenie na mowę zależną:", given: "\"Close the window,\" he said to me.", hint: "He told me to...", answer: "He told me to close the window." },
          { kind: "gap", q: "She asked ___ I was coming to the party. (if/whether)", answer: ["if", "whether"] },
          { kind: "order", q: "Ułóż zdanie:", words: ["He", "told", "me", "not", "to", "worry"], answer: ["He", "told", "me", "not", "to", "worry"] }
        ]}
      ]
    },

    /* ===================== x14 — Crime, law & society (LEKSYKA) ===================== */
    {
      id: "x14", title: "Przestępczość, prawo i społeczeństwo", icon: "⚖️",
      steps: [
        { id: "s1", type: "theory", title: "Teoria: język prawa i społeczeństwa", html: `
          <p>Tematy prawne i społeczne wymagają precyzyjnych terminów oraz kolokacji:</p>
          <table class="t-table">
            <tr><th>Słowo / zwrot</th><th>Znaczenie</th><th>Przykład</th></tr>
            <tr><td>to commit a crime</td><td>popełnić przestępstwo</td><td><span class="say">He was accused of committing a crime.</span></td></tr>
            <tr><td>to break the law</td><td>łamać prawo</td><td><span class="say">Nobody is allowed to break the law.</span></td></tr>
            <tr><td>to be found guilty</td><td>zostać uznanym winnym</td><td><span class="say">She was found guilty by the jury.</span></td></tr>
            <tr><td>to serve a sentence</td><td>odbywać karę</td><td><span class="say">He is serving a five-year sentence.</span></td></tr>
            <tr><td>community service</td><td>prace społeczne</td><td><span class="say">The judge ordered community service.</span></td></tr>
          </table>
          <p>Role: <b>witness</b> (świadek), <b>suspect</b> (podejrzany), <b>defendant</b> (oskarżony), <b>victim</b> (ofiara), <b>jury</b> (ława przysięgłych).</p>
          <p class="tip">💡 Uważaj na pary: „a thief steals” (kradnie), „a burglar breaks into houses” (włamuje się), „a robber uses force” (używa siły).</p>` },
        { id: "s2", type: "vocab", title: "Słownictwo: przestępczość i prawo", words: [
          { en: "to arrest", pl: "aresztować", example: "The police arrested two suspects." },
          { en: "witness", pl: "świadek", example: "The witness described the car." },
          { en: "evidence", pl: "dowód / dowody", example: "There was not enough evidence." },
          { en: "trial", pl: "proces sądowy", example: "The trial lasted three weeks." },
          { en: "fine", pl: "grzywna / mandat", example: "He had to pay a heavy fine." },
          { en: "to sentence", pl: "skazać", example: "The judge sentenced him to prison." },
          { en: "fraud", pl: "oszustwo", example: "She was charged with fraud." },
          { en: "law-abiding", pl: "praworządny", example: "Most citizens are law-abiding." }
        ]},
        { id: "s3", type: "quiz", title: "Quiz: przestępczość i prawo", questions: [
          { kind: "choice", q: "A person who sees a crime happen is a ___.", options: ["witness", "suspect", "jury"], answer: 0 },
          { kind: "gap", q: "The police decided to ___ the man at the airport.", answer: "arrest" },
          { kind: "match", pairs: [
            { a: "trial", b: "proces sądowy" },
            { a: "evidence", b: "dowody" },
            { a: "fine", b: "grzywna" },
            { a: "fraud", b: "oszustwo" }
          ]},
          { kind: "categorize", q: "Pogrupuj osoby w procesie:", cats: ["Strona oskarżenia/ofiara", "Sąd"], items: [
            { t: "victim", cat: 0 },
            { t: "judge", cat: 1 },
            { t: "witness", cat: 0 },
            { t: "jury", cat: 1 }
          ]},
          { kind: "multi", q: "Which words describe types of criminals?", options: ["thief", "burglar", "lawyer", "robber"], answers: [0, 1, 3] },
          { kind: "truefalse", q: "„Law-abiding” to po polsku „praworządny”.", answer: true }
        ]},
        { id: "s4", type: "reading", title: "Czytanie: A fair trial", intro: "Przeczytaj o przebiegu rozprawy.", passage: `
          <p>In most countries, anyone accused of a crime has the right to a fair trial. The person on trial is called the defendant, and they are considered innocent until proven guilty. During the trial, witnesses describe what they saw, and lawyers present evidence to the court. In serious cases, a jury of ordinary citizens listens carefully and then decides whether the defendant is guilty. If the verdict is guilty, the judge decides on a suitable punishment, which might be a fine, community service, or, for serious crimes, a prison sentence. Many people believe that this system, although far from perfect, protects society and treats everyone equally before the law.</p>`, theoryRef: "B2/x14/s1", questions: [
          { kind: "truefalse", q: "A defendant is considered guilty until proven innocent.", answer: false },
          { kind: "choice", q: "Who decides whether the defendant is guilty in serious cases?", options: ["The witnesses", "The jury", "The victim"], answer: 1 },
          { kind: "gap", q: "If the verdict is guilty, the judge decides on a suitable ___. (kara)", answer: "punishment" },
          { kind: "multi", q: "Which punishments are mentioned?", options: ["a fine", "community service", "a warning", "a prison sentence"], answers: [0, 1, 3] }
        ]},
        { id: "s5", type: "speak", title: "Mówienie: opinie o prawie i karze", prompts: [
          { en: "I believe that prevention is more effective than punishment.", pl: "Uważam, że zapobieganie jest skuteczniejsze niż karanie." },
          { en: "Everyone should be treated equally before the law.", pl: "Każdy powinien być równy wobec prawa." },
          { en: "Community service can be better than a short prison sentence.", pl: "Prace społeczne mogą być lepsze niż krótki wyrok więzienia." },
          { en: "Witnesses play a crucial role in any fair trial.", pl: "Świadkowie odgrywają kluczową rolę w każdym sprawiedliwym procesie." }
        ]},
        { id: "s6", type: "boss", title: "Sprawdzian: przestępczość i prawo", questions: [
          { kind: "choice", q: "Someone who breaks into houses to steal is a ___.", options: ["burglar", "witness", "victim"], answer: 0 },
          { kind: "gap", q: "The judge decided to ___ him to two years in prison. (skazać)", answer: "sentence" },
          { kind: "match", pairs: [
            { a: "to arrest", b: "aresztować" },
            { a: "witness", b: "świadek" },
            { a: "fraud", b: "oszustwo" }
          ]},
          { kind: "categorize", q: "Przestępstwo czy kara?", cats: ["Przestępstwo", "Kara"], items: [
            { t: "fraud", cat: 0 },
            { t: "a fine", cat: 1 },
            { t: "burglary", cat: 0 },
            { t: "community service", cat: 1 }
          ]},
          { kind: "truefalse", q: "„To serve a sentence” znaczy „odbywać karę”.", answer: true }
        ]}
      ]
    }

  );
})();
