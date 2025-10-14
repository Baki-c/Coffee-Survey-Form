self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("coffee-survey-form-cache").then((cache) => {
      return cache.addAll([
        "/coffee-survey-form/",
        "/coffee-survey-form/index.html",
        "/coffee-survey-form/styles.css",
        "/coffee-survey-form/scripts.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
