// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Konfiguracja E2E. Uruchamia lokalny serwer statyczny (Python) i testuje
 * aplikację w prawdziwej przeglądarce (Chromium).
 *
 * Uruchomienie:
 *   npm install
 *   npx playwright install chromium
 *   npm run test:e2e
 */
module.exports = defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  fullyParallel: false,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:8123",
    trace: "on-first-retry"
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } }
  ],
  webServer: {
    command: "python -m http.server 8123",
    url: "http://localhost:8123/index.html",
    reuseExistingServer: true,
    timeout: 20000
  }
});
