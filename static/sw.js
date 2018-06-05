importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "renault-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.4413118ada1c2e9d60e3.js",
    "revision": "be3f213a2805c5a882d78bdc8eedd9ab"
  },
  {
    "url": "/_nuxt/layouts/default.404d9022be556044224d.js",
    "revision": "7dad11e45b2919c991742c2130af6d43"
  },
  {
    "url": "/_nuxt/manifest.0ecb19f5d59932df1212.js",
    "revision": "444bef2ca31cb5dd25ce4f8010d0c11c"
  },
  {
    "url": "/_nuxt/pages/alltags/index.8ade9e0d6614555b4f0e.js",
    "revision": "9de59bcfbeb27e69d47a613f9a3d8e72"
  },
  {
    "url": "/_nuxt/pages/bojan/index.bf18230296780efa6615.js",
    "revision": "304cf744da744bf1a0904e07d7e93843"
  },
  {
    "url": "/_nuxt/pages/igor/index.3be73dbe85410e821d21.js",
    "revision": "b492d3d72428d6e25da88b24ade2fa96"
  },
  {
    "url": "/_nuxt/pages/index.f14d24d68ca55ff9413b.js",
    "revision": "4a697fbc93a8bf115c05afb4cda67bdd"
  },
  {
    "url": "/_nuxt/pages/wekios/index.db0a9a9adc3646ccbf63.js",
    "revision": "0848e3c026301e9b40ce489f89dd3f6e"
  },
  {
    "url": "/_nuxt/vendor.66832cdaf4189a5dad3f.js",
    "revision": "368467e672a12dd380300d191d27803e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

