// Service worker placeholder to prevent 404 on localhost when transitioning from old PWAs
self.addEventListener('install', () => {
  self.skipWaiting()
})
self.addEventListener('activate', () => {
  self.clients.claim()
})
