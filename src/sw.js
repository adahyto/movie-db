const staticCachePrefix = 'static';
// Update this each time you app shell changes.
// This way, the SW will have changed and get reinstalled
// allowing for the new files to be cached.

const VERSION = '1.0.0';
const staticCacheName = `${staticCachePrefix}-${VERSION}`;

self.addEventListener('install', (event) => {
  console.log('Installing SW version:', VERSION);
  // waitUntil is there to make the sure SW is neither paused nor stopped
  // while we expect it to do some work until the promise we passed to it completes.
  // See: https://stackoverflow.com/a/37906330
  event.waitUntil(
    caches.open(staticCacheName)
            .then(cache => {
                console.log('Caching app shell');
                // serviceWorkerOption comes from serviceworker-webpack-plugin.
                // Adapt if needed.
                cache.addAll(serviceWorkerOption.assets);
            }),
    );
});
