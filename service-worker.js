/* Angielskiwnet — Service Worker (offline, cache-first) */
const CACHE = "angielskiwnet-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./course.js",
  "./paths.js",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./levels/A1.js",
  "./levels/A2.js",
  "./levels/B1.js",
  "./levels/B2.js",
  "./levels/C1.js",
  "./levels/C2.js",
  "./levels/A1_extra.js",
  "./levels/A2_extra.js",
  "./levels/B1_extra.js",
  "./levels/B2_extra.js",
  "./levels/C1_extra.js",
  "./levels/C2_extra.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Tylko zasoby z naszego origin obsługujemy offline (TTS/YouTube wymagają sieci).
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
