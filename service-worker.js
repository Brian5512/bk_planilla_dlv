const CACHE_NAME = "control-mensual-dlv-v1";

const APP_ASSETS = [
  "./",
  "./index.html",
  "./Control mensual DLV.html",
  "./manifest.webmanifest",
  "./src/app.js",
  "./src/styles.css",
  "./assets/icons/app-icon.ico",
  "./assets/icons/app-icon.webp",
  "./docs/planilla-control-dlv.xlsx"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
