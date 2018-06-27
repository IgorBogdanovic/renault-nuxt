importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "renault-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.bba3dabffe395ed2a27b.js",
    "revision": "d7a350d89f1598139275ce0007a77578"
  },
  {
    "url": "/_nuxt/layouts/default.e650d1ee92038cf50ebe.js",
    "revision": "ab705c137f8e59c3f2c35797c2330558"
  },
  {
    "url": "/_nuxt/manifest.28efee939925a0ce76e2.js",
    "revision": "d2156fb80082aaff271a2bf5d8e692d0"
  },
  {
    "url": "/_nuxt/pages/404/index.f08ba702750cccde4820.js",
    "revision": "13d3c8cb10b5661d93f0875f262f94ce"
  },
  {
    "url": "/_nuxt/pages/all-tags/index.8385d408f977b6884085.js",
    "revision": "60801bd573d219e12484e444e304914c"
  },
  {
    "url": "/_nuxt/pages/igor/index.2a6298fdc8df301a2d1f.js",
    "revision": "95b68a9dccace180eaf59ccb3f206601"
  },
  {
    "url": "/_nuxt/pages/index.4f2082565f955c70c9a7.js",
    "revision": "401e6a363076415dbbdf0a61a87a66a6"
  },
  {
    "url": "/_nuxt/pages/kris/index.fd8511e83934f8fa123d.js",
    "revision": "bebc7998870a55342f87b05faced6420"
  },
  {
    "url": "/_nuxt/pages/kris/proba/index.b1e737e7d5560c08ef5e.js",
    "revision": "3aa1465ecc033dc9264f82954cca06a7"
  },
  {
    "url": "/_nuxt/pages/kris/proba/proba1/index.f41277054f3a7753c2b7.js",
    "revision": "4f24b4eb3e0da74c31d0dfa817191d9f"
  },
  {
    "url": "/_nuxt/pages/stefan/index.1db1a2907e4481ac142c.js",
    "revision": "8171540dff72290dd646c60f0d89e64e"
  },
  {
    "url": "/_nuxt/pages/stefan/vote/index.8ba0c67c8fa5ecc8c8b7.js",
    "revision": "c14e16abd54ab7062fa6418a65789beb"
  },
  {
    "url": "/_nuxt/pages/stefan/voted/index.62649f8c2627f3de10e0.js",
    "revision": "dfe516f55c5dbe8b6b9c1a3b51e9c985"
  },
  {
    "url": "/_nuxt/pages/wekios/404/index.d3d8430b569ee1b33cbe.js",
    "revision": "4536d8483616206fbdfaf04ee81cea82"
  },
  {
    "url": "/_nuxt/pages/wekios/cgu/index.a5f302953ca8f2aa2d40.js",
    "revision": "ebc27aada4a818e0ed9eef4093d076de"
  },
  {
    "url": "/_nuxt/pages/wekios/index.91efb00a4735fc7bafe7.js",
    "revision": "f34e70f8d98c8e80e91cfd83d92e4e54"
  },
  {
    "url": "/_nuxt/pages/wekios/t&c/index.0f480fa019dcc096f10d.js",
    "revision": "00602fc85324b3c50f91a3460e4fc500"
  },
  {
    "url": "/_nuxt/vendor.d4c5e17726c1d1e24d4a.js",
    "revision": "cb59c4bd7002e7c71f45e318bf6b8002"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

