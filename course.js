/* ============================================================================
   ANGIELSKIWNET — RDZEŃ KURSU (meta) + REJESTR POZIOMÓW
   ----------------------------------------------------------------------------
   Treść każdego poziomu jest w osobnym pliku w folderze /levels:
     levels/A1.js, levels/A2.js, levels/B1.js, levels/B2.js, levels/C1.js, levels/C2.js
   Każdy z nich wykonuje: window.COURSE.levels.push({ ...poziom... });
   Pliki są ładowane w index.html w kolejności A1 -> C2.

   Dzięki temu możesz edytować jeden poziom bez ruszania pozostałych.
   Pełny opis schematu (typy kroków i pytań) znajdziesz w pliku levels/A1.js.
   ========================================================================== */

window.COURSE = {
  brand: "Angielskiwnet",
  tagline: "Zdobądź angielski krok po kroku — od bazy po szczyt.",
  levels: []   // wypełniane przez pliki w /levels
};
