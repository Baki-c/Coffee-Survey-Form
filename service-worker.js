self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("coffee-survey-cache").then(cache => {
      return cache.addAll([
        "/Customer-Satisfaction-Survey/",
        "/Customer-Satisfaction-Survey/index.html",
        "/Customer-Satisfaction-Survey/styles.css",
        "/Customer-Satisfaction-Survey/scripts.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
