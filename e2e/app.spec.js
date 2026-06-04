// @ts-check
const { test, expect } = require("@playwright/test");

// Czysty start: zerujemy localStorage przed każdym testem, żeby kolejność
// poziomów i postęp były deterministyczne.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    try { localStorage.clear(); } catch (e) {}
  });
  await page.goto("/index.html");
  await page.waitForFunction(() => !!window.COURSE && !!document.getElementById("btnMenu"));
});

test("kurs i ścieżki są załadowane, brak błędów konsoli", async ({ page }) => {
  const errors = [];
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  const data = await page.evaluate(() => ({
    levels: (window.COURSE.levels || []).map(l => l.id),
    paths: (window.COURSE.paths || []).map(p => p.id)
  }));
  expect(data.levels).toEqual(["A1", "A2", "B1", "B2", "C1", "C2"]);
  expect(data.paths).toEqual(["BIZ", "TRV", "EXAM"]);
  expect(errors).toEqual([]);
});

test("mapa: A1 na górze, C2 na dole; kropka aktualnego poziomu na górze", async ({ page }) => {
  // przejdź do mapy przez menu
  await page.click("#btnMenu");
  await page.click('.menu-item[data-go="map"]');
  await page.waitForSelector(".level-band");

  const order = await page.evaluate(() =>
    [...document.querySelectorAll(".level-band")]
      .map(b => ({ id: b.id, top: b.getBoundingClientRect().top }))
      .sort((a, b) => a.top - b.top)
      .map(x => x.id)
  );
  expect(order).toEqual(["lvl_A1", "lvl_A2", "lvl_B1", "lvl_B2", "lvl_C1", "lvl_C2"]);

  // aktualny poziom (A1, indeks 0) jest zaznaczony kropką na grafice góry
  const curIdx = await page.getAttribute(".mk.cur", "data-idx");
  expect(curIdx).toBe("0");
  await expect(page.locator(".mtn-legend .now")).toContainText("A1");
  await expect(page.locator(".mtn-card svg text")).toHaveCount(7); // 6 etykiet + wspinacz
});

test("menu zawiera wszystkie sekcje", async ({ page }) => {
  await page.click("#btnMenu");
  const items = await page.$$eval(".menu-item", els => els.map(e => e.dataset.go));
  expect(items).toEqual(["map", "srs", "review", "import", "paths", "trophies", "league", "sound", "edit"]);
});

test("ekrany: trofea, liga, import, słabe punkty, SRS, ścieżki", async ({ page }) => {
  async function open(go) {
    await page.click("#btnMenu");
    await page.click(`.menu-item[data-go="${go}"]`);
  }

  await open("trophies");
  await expect(page.locator(".view-title")).toContainText("Trofea");
  expect(await page.locator(".badge-card").count()).toBeGreaterThan(10);

  await open("league");
  await expect(page.locator(".view-title")).toContainText("Liga");
  expect(await page.locator(".rank-row").count()).toBeGreaterThan(0);

  await open("review");
  await expect(page.locator(".view-title")).toContainText("Słabe punkty");

  await open("srs");
  await expect(page.locator(".view-title")).toContainText("Fiszki");

  await open("paths");
  await expect(page.locator(".view-title")).toContainText("Ścieżki");
  expect(await page.locator(".path-card").count()).toBe(3);
});

test("import: wklejony tekst tworzy talię i wpisy SRS", async ({ page }) => {
  await page.click("#btnMenu");
  await page.click('.menu-item[data-go="import"]');
  await page.fill(".import-ta", "dog = pies\ncat = kot\nhouse = dom");
  await page.click("text=Utwórz talię");

  await expect(page.locator(".deck-row")).toHaveCount(1);
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem("angielskiwnet") || "{}"));
  expect((state.custom || [])[0].words.length).toBe(3);
  expect(Object.keys(state.srs || {})).toEqual(
    expect.arrayContaining(["v:dog", "v:cat", "v:house"])
  );
});

test("przejście kroku w jednostce A1 nalicza XP", async ({ page }) => {
  await page.click("#btnMenu");
  await page.click('.menu-item[data-go="map"]');
  await page.waitForSelector(".node button");

  // pierwszy węzeł (A1 / jednostka 1) — teoria
  await page.locator(".node button").first().click();
  await expect(page.locator(".sheet")).toBeVisible();
  await expect(page.locator(".topbar")).toContainText("0 XP");

  await page.click(".sheet #foot button"); // "Rozumiem, dalej →"
  await expect(page.locator(".topbar")).toContainText("10 XP");
});
