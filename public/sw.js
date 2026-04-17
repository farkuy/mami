const IMAGE_CACHE = 'mami-images-v1';
const IMAGE_EXT = /\.(?:jpg|jpeg|png|webp|avif|gif|svg)(?:\?|$)/i;
const IMAGE_HOSTS = ['images.unsplash.com'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith('mami-images-') && k !== IMAGE_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

function isImageRequest(request) {
  if (request.method !== 'GET') return false;
  if (request.destination === 'image') return true;
  const url = new URL(request.url);
  if (IMAGE_EXT.test(url.pathname)) return true;
  if (IMAGE_HOSTS.includes(url.hostname)) return true;
  return false;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (!isImageRequest(req)) return;

  event.respondWith(
    caches.open(IMAGE_CACHE).then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;

      try {
        const response = await fetch(req);
        if (response && (response.ok || response.type === 'opaque')) {
          cache.put(req, response.clone());
        }
        return response;
      } catch (err) {
        if (cached) return cached;
        throw err;
      }
    })
  );
});
