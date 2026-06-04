/* ============================================================================
   ŚCIEŻKI TEMATYCZNE — dodatkowe szlaki obok głównej wspinaczki CEFR.
   Ten sam schemat co poziomy: { id, name, subtitle, icon, color, units:[...] }.
   Każda unit: { id, title, icon, steps:[ ...te same typy kroków co w poziomach... ] }.
   Postęp liczony osobno (po stepKey z prefiksem id ścieżki).
   ========================================================================== */
window.COURSE.paths = [

  /* ======================= ŚCIEŻKA BIZNESOWA ======================= */
  {
    id: "BIZ",
    name: "Angielski biznesowy",
    subtitle: "E-maile, spotkania, prezentacje i negocjacje.",
    icon: "💼",
    color: "#6366f1",
    units: [
      {
        id: "b1", title: "E-maile i korespondencja", icon: "✉️",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: ton formalny w e-mailu", html: `
            <p>W e-mailu biznesowym kluczowy jest <b>ton</b>. Porównaj:</p>
            <table class="t-table">
              <tr><th>Nieformalnie</th><th>Formalnie</th></tr>
              <tr><td>Hi Tom,</td><td>Dear Mr Brown,</td></tr>
              <tr><td>Thanks!</td><td>Thank you for your time.</td></tr>
              <tr><td>Can you…?</td><td>Could you please…?</td></tr>
              <tr><td>Get back to me</td><td>I look forward to hearing from you.</td></tr>
            </table>
            <p class="tip">💡 Zakończenie: <span class="say">Kind regards,</span> / <span class="say">Best regards,</span></p>` },
          { id: "s2", type: "vocab", title: "Słownictwo: e-mail", words: [
            { en: "to attach", pl: "załączyć", example: "Please find the report attached." },
            { en: "to follow up", pl: "wrócić do tematu / przypomnieć", example: "I'm following up on my last email." },
            { en: "at your earliest convenience", pl: "w dogodnym dla Pana/Pani terminie", example: "Please reply at your earliest convenience." },
            { en: "to clarify", pl: "wyjaśnić / doprecyzować", example: "Could you clarify the deadline?" },
            { en: "deadline", pl: "termin (ostateczny)", example: "The deadline is Friday." },
            { en: "to confirm", pl: "potwierdzić", example: "I'm writing to confirm our meeting." }
          ]},
          { id: "s3", type: "quiz", title: "Quiz: formalny e-mail", questions: [
            { kind: "choice", q: "Wybierz formalne otwarcie e-maila:", options: ["Hey!", "Dear Ms Adams,", "Yo team"], answer: 1 },
            { kind: "choice", q: "Najbardziej uprzejma prośba:", options: ["Send it now.", "Could you please send it?", "Gimme the file."], answer: 1 },
            { kind: "gap", q: "Please find the document ___ (załączony).", answer: ["attached"] },
            { kind: "dropdown", q: "I look forward to ___ from you.", options: ["hear", "hearing", "heard"], answer: 1 },
            { kind: "truefalse", q: `„Kind regards” to typowe zakończenie formalnego e-maila.`, answer: true }
          ]},
          { id: "s4", type: "reading", title: "Czytanie: e-mail z prośbą", intro: `Przeczytaj e-mail i odpowiedz na pytania.`, passage: `
            <p>Dear Mr Kowalski,</p>
            <p>I am writing regarding the invoice number 4521, which was due last week. We have not yet received the payment, and I would be grateful if you could look into this matter.</p>
            <p>Could you please confirm when we can expect the transfer? If there is any problem with the invoice, do not hesitate to contact me.</p>
            <p>I look forward to your reply.</p>
            <p>Kind regards,<br>Sarah Lewis</p>`, questions: [
            { kind: "choice", q: "What is the email about?", options: ["A job offer", "An unpaid invoice", "A holiday request"], answer: 1 },
            { kind: "truefalse", q: "The payment has already been received.", answer: false },
            { kind: "gap", q: "The writer asks the reader to ___ when the transfer will arrive.", answer: ["confirm"] }
          ]},
          { id: "s5", type: "boss", title: "Sprawdzian: korespondencja", questions: [
            { kind: "choice", q: "Formalna prośba o doprecyzowanie:", options: ["What?", "Could you clarify this, please?", "Huh, explain."], answer: 1 },
            { kind: "match", pairs: [{ a: "deadline", b: "termin" }, { a: "to attach", b: "załączyć" }, { a: "to confirm", b: "potwierdzić" }] },
            { kind: "transform", q: "Zmień na formalne:", given: "Can you send it?", hint: "Could you please…", answer: ["Could you please send it?", "Could you send it, please?"] }
          ]}
        ]
      },
      {
        id: "b2", title: "Spotkania i telekonferencje", icon: "📅",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: język spotkań", html: `
            <p>Przydatne zwroty na spotkaniu:</p>
            <ul>
              <li><span class="say">Let's get started.</span> — Zaczynajmy.</li>
              <li><span class="say">Could you repeat that?</span> — Czy mógłbyś powtórzyć?</li>
              <li><span class="say">I'd like to add something.</span> — Chciałbym coś dodać.</li>
              <li><span class="say">Let's move on to the next point.</span> — Przejdźmy do następnego punktu.</li>
              <li><span class="say">To sum up…</span> — Podsumowując…</li>
            </ul>
            <p class="tip">💡 Na telekonferencji: <span class="say">You're on mute.</span> — Masz wyciszony mikrofon.</p>` },
          { id: "s2", type: "vocab", title: "Słownictwo: spotkania", words: [
            { en: "agenda", pl: "porządek obrad", example: "What's on the agenda today?" },
            { en: "to schedule", pl: "zaplanować (termin)", example: "Let's schedule a call for Monday." },
            { en: "minutes", pl: "protokół ze spotkania", example: "Who is taking the minutes?" },
            { en: "to postpone", pl: "przełożyć", example: "We had to postpone the meeting." },
            { en: "action point", pl: "zadanie do wykonania", example: "The action points are clear." },
            { en: "to wrap up", pl: "zakończyć / podsumować", example: "Let's wrap up and finish on time." }
          ]},
          { id: "s3", type: "listen", title: "Słuchanie: początek spotkania", audio: `Good morning everyone, thanks for joining. Let's get started. The first point on the agenda is the budget. After that, we'll move on to the marketing plan.`, instructions: `Posłuchaj i odpowiedz na pytania.`, questions: [
            { kind: "choice", q: "What is the first point on the agenda?", options: ["The budget", "The marketing plan", "The holidays"], answer: 0 },
            { kind: "truefalse", q: "The marketing plan comes after the budget.", answer: true },
            { kind: "dictation", audio: `Let's get started.`, answer: "Let's get started." }
          ]},
          { id: "s4", type: "dialog", title: "Dialog: prośba o powtórzenie", recordLine: 1, lines: [
            { speaker: "Lead", en: "So, the deadline is the 15th.", pl: "Więc termin to 15-ty." },
            { speaker: "Ty", en: "Sorry, could you repeat that, please?", pl: "Przepraszam, czy możesz powtórzyć?" },
            { speaker: "Lead", en: "Of course. The deadline is the fifteenth.", pl: "Oczywiście. Termin to piętnasty." },
            { speaker: "Ty", en: "Thank you, that's clear now.", pl: "Dziękuję, teraz jest jasne." }
          ]},
          { id: "s5", type: "boss", title: "Sprawdzian: spotkania", questions: [
            { kind: "gap", q: "What's on the ___ today? (porządek obrad)", answer: ["agenda"] },
            { kind: "choice", q: `„Przejdźmy do następnego punktu” to:`, options: ["Let's wrap up.", "Let's move on to the next point.", "You're on mute."], answer: 1 },
            { kind: "order", q: "Ułóż zdanie:", words: ["Let's", "get", "started"], answer: ["Let's", "get", "started"] }
          ]}
        ]
      },
      {
        id: "b3", title: "Prezentacje i negocjacje", icon: "📊",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: struktura prezentacji", html: `
            <p>Dobra prezentacja ma jasną strukturę:</p>
            <ol>
              <li><b>Intro:</b> <span class="say">Today I'm going to talk about…</span></li>
              <li><b>Body:</b> <span class="say">Firstly… Secondly… Finally…</span></li>
              <li><b>Conclusion:</b> <span class="say">To sum up… Thank you for your attention.</span></li>
            </ol>
            <p>W negocjacjach przydaje się język warunkowy: <span class="say">If you order more, we can offer a discount.</span></p>` },
          { id: "s2", type: "vocab", title: "Słownictwo: negocjacje", words: [
            { en: "to negotiate", pl: "negocjować", example: "We need to negotiate the price." },
            { en: "discount", pl: "rabat", example: "Can you offer a discount?" },
            { en: "to compromise", pl: "iść na kompromis", example: "Both sides had to compromise." },
            { en: "terms and conditions", pl: "warunki", example: "Please read the terms and conditions." },
            { en: "to meet halfway", pl: "spotkać się w pół drogi", example: "Let's meet halfway on the price." },
            { en: "win-win", pl: "korzystny dla obu stron", example: "It's a win-win deal." }
          ]},
          { id: "s3", type: "quiz", title: "Quiz: język negocjacji", questions: [
            { kind: "dropdown", q: "If you order more, we ___ offer a discount.", options: ["can", "could of", "are"], answer: 0 },
            { kind: "choice", q: `Zacznij prezentację:`, options: ["Today I'm going to talk about sales.", "Bye for now.", "You're on mute."], answer: 0 },
            { kind: "multi", q: "Zaznacz słowa związane z negocjacjami:", options: ["discount", "compromise", "agenda", "win-win"], answers: [0, 1, 3] },
            { kind: "gap", q: "Let's meet ___ on the price. (w pół drogi)", answer: ["halfway"] }
          ]},
          { id: "s4", type: "speak", title: "Wymowa: zwroty prezentacji", prompts: [
            { en: "Today I'm going to talk about our results.", pl: "Dzisiaj opowiem o naszych wynikach." },
            { en: "Firstly, let's look at the numbers.", pl: "Po pierwsze, spójrzmy na liczby." },
            { en: "To sum up, sales are growing.", pl: "Podsumowując, sprzedaż rośnie." }
          ]},
          { id: "s5", type: "boss", title: "Sprawdzian: prezentacje i negocjacje", questions: [
            { kind: "match", pairs: [{ a: "discount", b: "rabat" }, { a: "to compromise", b: "iść na kompromis" }, { a: "terms", b: "warunki" }] },
            { kind: "transform", q: "Dokończ zdanie warunkowe:", given: "If you sign today, we ___ a better price.", hint: "can offer", answer: ["can offer", "can give"] },
            { kind: "choice", q: "Zakończenie prezentacji:", options: ["Thank you for your attention.", "Let's get started.", "You're on mute."], answer: 0 }
          ]}
        ]
      }
    ]
  },

  /* ======================= ŚCIEŻKA PODRÓŻNICZA ======================= */
  {
    id: "TRV",
    name: "Angielski w podróży",
    subtitle: "Lotnisko, hotel, restauracja i pytanie o drogę.",
    icon: "✈️",
    color: "#f59e0b",
    units: [
      {
        id: "t1", title: "Na lotnisku", icon: "🛫",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: na lotnisku", html: `
            <p>Najważniejsze zwroty na lotnisku:</p>
            <ul>
              <li><span class="say">Where is the check-in desk?</span> — Gdzie jest stanowisko odprawy?</li>
              <li><span class="say">I'd like a window seat.</span> — Poproszę miejsce przy oknie.</li>
              <li><span class="say">Is the flight on time?</span> — Czy lot jest o czasie?</li>
              <li><span class="say">Where is the boarding gate?</span> — Gdzie jest bramka?</li>
            </ul>` },
          { id: "s2", type: "vocab", title: "Słownictwo: lotnisko", words: [
            { en: "boarding pass", pl: "karta pokładowa", example: "Show your boarding pass at the gate." },
            { en: "luggage / baggage", pl: "bagaż", example: "My luggage is very heavy." },
            { en: "departure", pl: "odlot", example: "What's the departure time?" },
            { en: "arrival", pl: "przylot", example: "Arrivals are on the ground floor." },
            { en: "to board", pl: "wejść na pokład", example: "We board in ten minutes." },
            { en: "delay", pl: "opóźnienie", example: "There is a two-hour delay." }
          ]},
          { id: "s3", type: "listen", title: "Słuchanie: ogłoszenie na lotnisku", audio: `Attention please. Flight BA 240 to London is now boarding at gate 12. Passengers are kindly asked to have their boarding passes ready.`, instructions: `Posłuchaj komunikatu i odpowiedz.`, questions: [
            { kind: "choice", q: "Where is the flight going?", options: ["Paris", "London", "Rome"], answer: 1 },
            { kind: "gap", q: "The flight is boarding at gate ___.", answer: ["12", "twelve"] },
            { kind: "truefalse", q: "Passengers should have their boarding passes ready.", answer: true }
          ]},
          { id: "s4", type: "dialog", title: "Dialog: odprawa", recordLine: 1, lines: [
            { speaker: "Agent", en: "Good morning. Can I see your passport, please?", pl: "Dzień dobry. Czy mogę zobaczyć paszport?" },
            { speaker: "Ty", en: "Here you are. I'd like a window seat, please.", pl: "Proszę bardzo. Poproszę miejsce przy oknie." },
            { speaker: "Agent", en: "Of course. Do you have any luggage to check in?", pl: "Oczywiście. Czy ma Pan bagaż do nadania?" },
            { speaker: "Ty", en: "Just this one bag, thank you.", pl: "Tylko tę jedną torbę, dziękuję." }
          ]},
          { id: "s5", type: "boss", title: "Sprawdzian: lotnisko", questions: [
            { kind: "match", pairs: [{ a: "departure", b: "odlot" }, { a: "luggage", b: "bagaż" }, { a: "delay", b: "opóźnienie" }] },
            { kind: "gap", q: "Show your ___ pass at the gate.", answer: ["boarding"] },
            { kind: "choice", q: `„Poproszę miejsce przy oknie” to:`, options: ["I'd like a window seat.", "Where is the gate?", "Is it on time?"], answer: 0 }
          ]}
        ]
      },
      {
        id: "t2", title: "Hotel i zakwaterowanie", icon: "🏨",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: w hotelu", html: `
            <p>Rezerwacja i pobyt w hotelu:</p>
            <ul>
              <li><span class="say">I have a reservation under the name Nowak.</span></li>
              <li><span class="say">Is breakfast included?</span> — Czy śniadanie jest wliczone?</li>
              <li><span class="say">What time is check-out?</span> — O której jest wymeldowanie?</li>
              <li><span class="say">Could I have a wake-up call?</span> — Czy mogę prosić o budzenie?</li>
            </ul>` },
          { id: "s2", type: "vocab", title: "Słownictwo: hotel", words: [
            { en: "reservation / booking", pl: "rezerwacja", example: "I have a booking for two nights." },
            { en: "single / double room", pl: "pokój jedno/dwuosobowy", example: "I'd like a double room." },
            { en: "to check in", pl: "zameldować się", example: "We can check in after 2 pm." },
            { en: "to check out", pl: "wymeldować się", example: "Check-out is at 11 am." },
            { en: "key card", pl: "karta do pokoju", example: "Here is your key card." },
            { en: "en suite", pl: "z łazienką", example: "The room is en suite." }
          ]},
          { id: "s3", type: "quiz", title: "Quiz: hotel", questions: [
            { kind: "dropdown", q: "I'd like to ___ in, please.", options: ["check", "checking", "checked"], answer: 0 },
            { kind: "gap", q: "Is breakfast ___? (wliczone)", answer: ["included"] },
            { kind: "choice", q: "Pokój dla dwóch osób:", options: ["single room", "double room", "key card"], answer: 1 },
            { kind: "truefalse", q: `„Check-out” oznacza zameldowanie.`, answer: false }
          ]},
          { id: "s4", type: "reading", title: "Czytanie: potwierdzenie rezerwacji", passage: `
            <p>Dear Ms Nowak,</p>
            <p>Thank you for your booking. We confirm a double room for three nights, from 4 to 7 June. Check-in is from 2 pm and check-out is at 11 am. Breakfast is included and served from 7 to 10 am.</p>
            <p>We look forward to welcoming you.</p>`, questions: [
            { kind: "choice", q: "How many nights is the booking?", options: ["Two", "Three", "Four"], answer: 1 },
            { kind: "truefalse", q: "Breakfast is included.", answer: true },
            { kind: "gap", q: "Check-out is at ___ am.", answer: ["11", "eleven"] }
          ]},
          { id: "s5", type: "boss", title: "Sprawdzian: hotel", questions: [
            { kind: "match", pairs: [{ a: "booking", b: "rezerwacja" }, { a: "key card", b: "karta do pokoju" }, { a: "to check out", b: "wymeldować się" }] },
            { kind: "transform", q: "Zapytaj uprzejmie:", given: "Breakfast included?", hint: "Is …?", answer: ["Is breakfast included?"] },
            { kind: "gap", q: "I have a ___ under the name Nowak.", answer: ["reservation", "booking"] }
          ]}
        ]
      },
      {
        id: "t3", title: "Restauracja i droga", icon: "🍽️",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: zamawianie i pytanie o drogę", html: `
            <p>W restauracji:</p>
            <ul>
              <li><span class="say">Could I see the menu, please?</span></li>
              <li><span class="say">I'll have the soup, please.</span></li>
              <li><span class="say">Could we have the bill, please?</span> — Poprosimy rachunek.</li>
            </ul>
            <p>Pytanie o drogę:</p>
            <ul>
              <li><span class="say">Excuse me, how do I get to the station?</span></li>
              <li><span class="say">Go straight on and turn left.</span> — Idź prosto i skręć w lewo.</li>
            </ul>` },
          { id: "s2", type: "vocab", title: "Słownictwo: restauracja i droga", words: [
            { en: "starter", pl: "przystawka", example: "I'll have a salad as a starter." },
            { en: "main course", pl: "danie główne", example: "What's the main course?" },
            { en: "the bill", pl: "rachunek", example: "Could we have the bill, please?" },
            { en: "to turn left/right", pl: "skręcić w lewo/prawo", example: "Turn right at the corner." },
            { en: "straight on", pl: "prosto", example: "Go straight on for 200 metres." },
            { en: "opposite", pl: "naprzeciwko", example: "The bank is opposite the church." }
          ]},
          { id: "s3", type: "listen", title: "Słuchanie: wskazówki dojścia", audio: `Sure. Go straight on, then take the second street on the left. The museum is opposite the park, next to the cafe.`, instructions: `Posłuchaj wskazówek i odpowiedz.`, questions: [
            { kind: "choice", q: "Which street do you take?", options: ["The first on the left", "The second on the left", "The first on the right"], answer: 1 },
            { kind: "truefalse", q: "The museum is opposite the park.", answer: true },
            { kind: "dictation", audio: `Go straight on.`, answer: "Go straight on." }
          ]},
          { id: "s4", type: "dialog", title: "Dialog: w restauracji", recordLine: 1, lines: [
            { speaker: "Waiter", en: "Are you ready to order?", pl: "Czy są Państwo gotowi do zamówienia?" },
            { speaker: "Ty", en: "Yes, I'll have the soup and a glass of water, please.", pl: "Tak, poproszę zupę i szklankę wody." },
            { speaker: "Waiter", en: "Anything else?", pl: "Coś jeszcze?" },
            { speaker: "Ty", en: "No, thank you. Could we have the bill later?", pl: "Nie, dziękuję. Czy moglibyśmy później prosić rachunek?" }
          ]},
          { id: "s5", type: "boss", title: "Sprawdzian: restauracja i droga", questions: [
            { kind: "choice", q: "Poprosić o rachunek:", options: ["Could we have the bill, please?", "Turn left.", "I have a booking."], answer: 0 },
            { kind: "match", pairs: [{ a: "starter", b: "przystawka" }, { a: "the bill", b: "rachunek" }, { a: "opposite", b: "naprzeciwko" }] },
            { kind: "order", q: "Ułóż wskazówkę:", words: ["Go", "straight", "on"], answer: ["Go", "straight", "on"] }
          ]}
        ]
      }
    ]
  },

  /* ======================= ŚCIEŻKA EGZAMINACYJNA ======================= */
  {
    id: "EXAM",
    name: "Przygotowanie do egzaminu",
    subtitle: "Typowe zadania FCE / CAE / IELTS.",
    icon: "🎓",
    color: "#ec4899",
    units: [
      {
        id: "e1", title: "Use of English (FCE/CAE)", icon: "🧩",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: word formation i collocations", html: `
            <p>W zadaniach <b>Use of English</b> często tworzysz słowo z podanego rdzenia:</p>
            <table class="t-table">
              <tr><th>Rdzeń</th><th>Forma</th></tr>
              <tr><td>decide</td><td>decision</td></tr>
              <tr><td>success</td><td>successful</td></tr>
              <tr><td>possible</td><td>impossible</td></tr>
            </table>
            <p>Uważaj też na stałe kolokacje: <span class="say">make a decision</span>, <span class="say">take a risk</span>, <span class="say">do research</span>.</p>` },
          { id: "s2", type: "vocab", title: "Słownictwo: kolokacje egzaminacyjne", words: [
            { en: "to make a decision", pl: "podjąć decyzję", example: "We must make a decision today." },
            { en: "to take a risk", pl: "podjąć ryzyko", example: "Don't take unnecessary risks." },
            { en: "to do research", pl: "prowadzić badania", example: "She does research on climate." },
            { en: "to meet a deadline", pl: "dotrzymać terminu", example: "We met the deadline easily." },
            { en: "to pay attention", pl: "zwracać uwagę", example: "Pay attention to the details." },
            { en: "to keep in touch", pl: "być w kontakcie", example: "Let's keep in touch." }
          ]},
          { id: "s3", type: "quiz", title: "Quiz: word formation", questions: [
            { kind: "gap", q: "She made an important ___. (DECIDE)", answer: ["decision"] },
            { kind: "gap", q: "The project was very ___. (SUCCESS)", answer: ["successful"] },
            { kind: "dropdown", q: "It is ___ to finish in one day. (POSSIBLE)", options: ["possible", "impossible", "possibly"], answer: 1 },
            { kind: "choice", q: "Wybierz poprawną kolokację:", options: ["make a decision", "do a decision", "take a decision"], answer: 0 },
            { kind: "multi", q: "Zaznacz poprawne kolokacje z „do”:", options: ["do research", "do a mistake", "do homework", "do a decision"], answers: [0, 2] }
          ]}
        ]
      },
      {
        id: "e2", title: "Reading (IELTS)", icon: "📖",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: strategie czytania", html: `
            <p>W <b>IELTS Reading</b> liczy się czas. Dwie techniki:</p>
            <ul>
              <li><b>Skimming</b> — szybkie czytanie dla ogólnego sensu.</li>
              <li><b>Scanning</b> — szukanie konkretnej informacji (liczby, nazwy).</li>
            </ul>
            <p class="tip">💡 Pytania True / False / Not Given: „Not Given” = informacji nie ma w tekście (nie znaczy, że jest fałszywa).</p>` },
          { id: "s2", type: "reading", title: "Czytanie: tekst akademicki", intro: `Przeczytaj fragment i odpowiedz (True / False / Not Given).`, passage: `
            <p>The honeybee is one of the most studied insects on Earth. Bees communicate the location of food through a movement known as the "waggle dance". The angle of the dance shows the direction relative to the sun, while its duration indicates the distance.</p>
            <p>In recent decades, bee populations in many regions have declined. Scientists believe that pesticides, disease and habitat loss all play a role, although the exact balance of causes is still debated.</p>`, questions: [
            { kind: "truefalse", q: "Bees use the waggle dance to show where food is.", answer: true },
            { kind: "choice", q: "What does the duration of the dance indicate?", options: ["The direction", "The distance", "The danger"], answer: 1 },
            { kind: "choice", q: "According to the text, the exact causes of bee decline are:", options: ["fully understood", "still debated", "not important"], answer: 1 },
            { kind: "gap", q: "The angle of the dance shows direction relative to the ___.", answer: ["sun"] }
          ]},
          { id: "s3", type: "vocab", title: "Słownictwo: język akademicki", words: [
            { en: "to decline", pl: "spadać / maleć", example: "Sales declined last year." },
            { en: "habitat", pl: "siedlisko", example: "The habitat is disappearing." },
            { en: "to indicate", pl: "wskazywać", example: "The data indicate a change." },
            { en: "to debate", pl: "debatować / spierać się", example: "Experts still debate the cause." },
            { en: "significant", pl: "znaczący", example: "There was a significant rise." },
            { en: "to play a role", pl: "odgrywać rolę", example: "Diet plays a role in health." }
          ]}
        ]
      },
      {
        id: "e3", title: "Writing & Speaking", icon: "✍️",
        steps: [
          { id: "s1", type: "theory", title: "Teoria: esej opinii i linkers", html: `
            <p>W eseju opinii (FCE/IELTS Task 2) używaj <b>łączników</b>:</p>
            <ul>
              <li>Dodawanie: <span class="say">moreover, in addition</span></li>
              <li>Kontrast: <span class="say">however, on the other hand</span></li>
              <li>Skutek: <span class="say">therefore, as a result</span></li>
              <li>Podsumowanie: <span class="say">in conclusion, to sum up</span></li>
            </ul>` },
          { id: "s2", type: "quiz", title: "Quiz: linkers", questions: [
            { kind: "dropdown", q: "I love the city. ___, it can be expensive.", options: ["Therefore", "However", "Moreover"], answer: 1 },
            { kind: "dropdown", q: "It was raining. ___, we stayed at home.", options: ["Therefore", "However", "In addition"], answer: 0 },
            { kind: "choice", q: "Łącznik podsumowujący:", options: ["In conclusion", "Moreover", "However"], answer: 0 },
            { kind: "multi", q: "Zaznacz łączniki kontrastu:", options: ["however", "on the other hand", "therefore", "moreover"], answers: [0, 1] }
          ]},
          { id: "s3", type: "speak", title: "Speaking: wypowiedź na temat", prompts: [
            { en: "In my opinion, technology has changed the way we learn.", pl: "Moim zdaniem technologia zmieniła sposób, w jaki się uczymy." },
            { en: "On the other hand, it can be distracting.", pl: "Z drugiej strony może rozpraszać." },
            { en: "To sum up, the benefits outweigh the drawbacks.", pl: "Podsumowując, korzyści przeważają nad wadami." }
          ]},
          { id: "s4", type: "boss", title: "Sprawdzian: writing & speaking", questions: [
            { kind: "match", pairs: [{ a: "however", b: "jednak" }, { a: "therefore", b: "dlatego" }, { a: "in conclusion", b: "podsumowując" }] },
            { kind: "transform", q: "Wstaw łącznik skutku:", given: "It was late. ___ we went home.", hint: "Therefore", answer: ["Therefore", "Therefore,"] },
            { kind: "choice", q: "Rozpoczęcie opinii:", options: ["In my opinion,", "By the way,", "You're on mute,"], answer: 0 }
          ]}
        ]
      }
    ]
  }

];
