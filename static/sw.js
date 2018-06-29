importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "renault-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a9953d983120851e1d04.js",
    "revision": "73e1bf1cf6dc95e66055a56f69c2eae8"
  },
  {
    "url": "/_nuxt/layouts/default.e650d1ee92038cf50ebe.js",
    "revision": "ab705c137f8e59c3f2c35797c2330558"
  },
  {
    "url": "/_nuxt/manifest.013afc49559d03b49f5d.js",
    "revision": "bd3efaa7ef9977feb9d5db6cc108e8b4"
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
    "url": "/_nuxt/pages/igor/index.fe011e82ffb19e4d2a12.js",
    "revision": "6dee21f6ab294ac348eb50712dd14260"
  },
  {
    "url": "/_nuxt/pages/index.fbc31f56afdbcbe89885.js",
    "revision": "85b2f1330356ad446b6c4d698492afeb"
  },
  {
    "url": "/_nuxt/pages/kris/index.35dcac1133092106a44f.js",
    "revision": "a385ba50d03a21f1f1ece9e09f056204"
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
    "url": "/_nuxt/vendor.6fdf7e3c99260c67860f.js",
    "revision": "a2a868d87cecfb46e8e36caed5e0c2c1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

