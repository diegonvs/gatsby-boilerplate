/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0-070fa2b934ae2b48fa84.js"
  },
  {
    "url": "0-899e8c9884c6803aba27.js"
  },
  {
    "url": "0-d3e136cfa0da44167dd4.js"
  },
  {
    "url": "0-f56641b5426aefc4c7c7.js"
  },
  {
    "url": "1-3d7a5b87c02616685e58.js"
  },
  {
    "url": "1-9b998987d270a09b442e.js"
  },
  {
    "url": "1-b84e85ba67c585d391b3.js"
  },
  {
    "url": "404.html",
    "revision": "29d5bf4465b6ed589221d4dbeecccaab"
  },
  {
    "url": "404/index.html",
    "revision": "5a9191a38a0a8461226bf15e76a66e7c"
  },
  {
    "url": "app-309dc5ebab0b24fd7d9e.js"
  },
  {
    "url": "app-742c7aed713eae4cb028.js"
  },
  {
    "url": "app-9fa63b8b02f5f6c6d253.js"
  },
  {
    "url": "app-adfd7be0ca55a03ced29.js"
  },
  {
    "url": "app-b0742b3f9783ad0bfae2.js"
  },
  {
    "url": "app-b68e2ad8ca50eff89fb8.js"
  },
  {
    "url": "app-d2f85f814603b22b0149.js"
  },
  {
    "url": "app-fd7074cd2e6a2707add8.js"
  },
  {
    "url": "app.92030e4f810790bd97b5.css"
  },
  {
    "url": "blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.html",
    "revision": "7ee3afd21a9efa1f68284fab1c8f2cfd"
  },
  {
    "url": "blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex.html",
    "revision": "bddb697b0d04576dd897372e850ccbc8"
  },
  {
    "url": "blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.html",
    "revision": "a43c9e47dee1f4edf371ee107f8bd3f4"
  },
  {
    "url": "blog/2018-11-07-release.html",
    "revision": "d025f2585cbf2ee5b26395fcd98d4b0d"
  },
  {
    "url": "blog/2018-12-11-liferay-portal-ce-clustering-returns.html",
    "revision": "f70fb07f18da705e20e05e0c0090c3ba"
  },
  {
    "url": "blog/index.html",
    "revision": "81d6cf23a916c883c06b4f7b08304425"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-22af47f1887d89a53ecd.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-5cb124c78db3194918ee.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-742fc613fd6d76b3f50a.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-77d5a8e97ad61a2d5774.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-c0e5dd60b104b8a2f106.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-f4d974011a913b1e676b.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-fbb66130e9e890174f77.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-088e493a4d07f8c11e95.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-30c651a71ba7b403a4bc.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-37a36572c758fde1481d.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-394d651b4bf23365ba93.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-461ce7f18e78e074c685.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-8df50c95a49e9feec9d2.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-a6ba0ed2d52277b44e92.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-b72db39f32aa5e8141b0.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-be30e7528d5b2e72f937.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-49-f-88-b-5-fd-8-aaddf-00369-c-2-ef-5-cf-26-d-7-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-ea8390c239afa3e0c7d4.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-114be7344857c21a8c65.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-290cdf7d64a32d93de2d.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-2cdb98c72e06d20ffeaf.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-2d0de3ee43a60d98217d.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-3258c50f4b8ddd0ac3c7.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-3a85e9a691875caa8848.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-3b12cb9000e8df0443cd.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-4839755606bbfd63458d.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-5201bb5b7a9d808d5f73.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-55e77782112758900174.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-59c99f8c7f423140fc39.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-727def31ae58bc23f1db.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-9b39671cd2c8f416e84e.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-ae01b5fdb73e181b8e18.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-b2ee68dd2c184545b9a6.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-be99b3565d35ea9df825.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-d12ddd007db75fefe103.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-14b0095504aea8eaa688.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-3e0817527a728ebe8318.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-45bb076bd77a5ac1b5e4.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-4f64823b42cc67f4f9d1.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-525e06a48be00403f8fb.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-8922e8d2cc655321730b.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-8c46bd42e6ed99649fbd.js"
  },
  {
    "url": "component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-d-84-cd-9-c-0-f-5617-b-5-a-0-fb-01-ae-2-fd-16-d-007-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-98f409340c40af4a5dac.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-79c05fdcfd7d376c02a6.js"
  },
  {
    "url": "component---src-pages-404-js-03d5e683188c52588292.js"
  },
  {
    "url": "component---src-pages-404-js-77d6aa3d3b261491d32e.js"
  },
  {
    "url": "component---src-pages-404-js-ce4b3c974422692fbb6b.js"
  },
  {
    "url": "component---src-pages-index-js-0df27b29d7a08802a0d0.js"
  },
  {
    "url": "component---src-pages-index-js-25e277d30f2c9bfa87bd.js"
  },
  {
    "url": "component---src-pages-index-js-5d1c848095906b6c4c56.js"
  },
  {
    "url": "component---src-pages-index-js-98352b4a7f2234ae8e23.js"
  },
  {
    "url": "component---src-pages-index-js-c4c7f310da4474f8514b.js"
  },
  {
    "url": "component---src-pages-index-js-cc0dcd9c0b3704af3933.js"
  },
  {
    "url": "component---src-pages-index-js-d3173cd5ee7b010119a0.js"
  },
  {
    "url": "docs/additional-features.html",
    "revision": "5c218e3033404f0980004bc6bf3e8005"
  },
  {
    "url": "docs/deployment.html",
    "revision": "9ca5dc0735913f99e3725baeb262dc5f"
  },
  {
    "url": "docs/environment-variables.html",
    "revision": "af09dc2a82c4586e9cb85125f519414c"
  },
  {
    "url": "docs/index.html",
    "revision": "9fcea55804fc6080cd375537323e9f0b"
  },
  {
    "url": "docs/migration-from-electric/first-considerations/index.html",
    "revision": "9fcea55804fc6080cd375537323e9f0b"
  },
  {
    "url": "docs/migration-from-electric/first-considerations/structure.html",
    "revision": "b9a59d7ac614df4fa2d3d917409a1434"
  },
  {
    "url": "docs/migration-from-electric/first-considerations/styling.html",
    "revision": "165831bb6697916b0e4f75ac67cca9d3"
  },
  {
    "url": "docs/migration-from-electric/first-considerations/what-is.html",
    "revision": "49e3fed43bb45be86836c0258e0ff2bc"
  },
  {
    "url": "docs/migration-from-electric/index.html",
    "revision": "9fcea55804fc6080cd375537323e9f0b"
  },
  {
    "url": "docs/migration-from-electric/migration-guides/blogs.html",
    "revision": "11645e9b1148b3ca1f9bad63e6235374"
  },
  {
    "url": "docs/migration-from-electric/migration-guides/docs.html",
    "revision": "3e04a288e7b237cd00f7a32ea3c321e7"
  },
  {
    "url": "docs/migration-from-electric/migration-guides/index.html",
    "revision": "69ac75c8a05a0362fada03f8da16d20c"
  },
  {
    "url": "docs/migration-from-electric/migration-guides/onboarding.html",
    "revision": "ad997a0116b7e0524609f39dde041b05"
  },
  {
    "url": "docs/migration-from-electric/migration-guides/updates.html",
    "revision": "f238926afedd19cc38666959e874fb86"
  },
  {
    "url": "docs/throubleshooting.html",
    "revision": "45bace0fbd200f974d1ac724829db058"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "3d3cbaae692cf6ff891b67f14b531d5f"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "4573455f45700cd418a805f7469b4e4b"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "5e1f046bad3e913c04e701c999cf8d27"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "765d10ed44edfff72fb92cf77cb6d167"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "0725a1423c8dd86118db70a731824c74"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "1880e70b06e11d5215e63164943b042e"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "5c372b99ae7d79bde040912d7b1423c2"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "images/chemex-pour-over-glass-coffee-maker-with-wood-collar-c.jpg",
    "revision": "b9e33730ce166a6eda22527cbbbe9f8c"
  },
  {
    "url": "images/favicon-32x32.png",
    "revision": "067bea6a52135263ddf428ecfbfb3bee"
  },
  {
    "url": "images/flavor_wheel.jpg",
    "revision": "19a6d5ab24bbc3b3531f11ecab349683"
  },
  {
    "url": "images/home/bg_white.svg",
    "revision": "8202c365f8e7c0c66e8659cf4128bb12"
  },
  {
    "url": "images/home/chevron-right.svg",
    "revision": "8217a1a51ec873eb5d3dc3c8df882e12"
  },
  {
    "url": "images/home/file-download.svg",
    "revision": "89ab14fe5c7d6d420f5152a4ec58dd6f"
  },
  {
    "url": "images/home/gatsby.svg",
    "revision": "7db9b0eabb2aed554e582eacd11c760b"
  },
  {
    "url": "images/home/GitHub-Mark-64px.svg",
    "revision": "0c9e7db5843df9e272a46cbd3edd541e"
  },
  {
    "url": "images/home/github.svg",
    "revision": "bfb4433f238438ab6653c9fb6b5c6630"
  },
  {
    "url": "images/home/lexicon_symbol.svg",
    "revision": "af04fbfe0f5d6d78ac878316cfde2191"
  },
  {
    "url": "images/home/library03.svg",
    "revision": "74cbacdf2dee585c92e8c50de17edf49"
  },
  {
    "url": "images/home/liferay_logo_black.svg",
    "revision": "3d49825c9e986aa248d65d8938c7b289"
  },
  {
    "url": "images/home/liferay_logo.svg",
    "revision": "bb8cb92775e09b2a64403eef4127d319"
  },
  {
    "url": "images/home/liferay-logo-full-color.svg",
    "revision": "477c64b74be4c9813085f1a9cffcd0b1"
  },
  {
    "url": "images/home/news.svg",
    "revision": "7394371beebb3e0d7317f331af713b33"
  },
  {
    "url": "images/home/participate02.svg",
    "revision": "be3c2b002dd665be7dd6a5dce116aba9"
  },
  {
    "url": "images/home/patternbg 2.svg",
    "revision": "4bb776dec4d86148e7e5fb7a987c359f"
  },
  {
    "url": "images/home/patternbg.svg",
    "revision": "ff9571b509158b13290443653b140c34"
  },
  {
    "url": "images/home/Slack_Mark_Monochrome_White.svg",
    "revision": "b0190cf80857806605374a7259b77750"
  },
  {
    "url": "images/home/tools.svg",
    "revision": "581eab1463a629446bb7012e3337a9b8"
  },
  {
    "url": "images/home/tools02.svg",
    "revision": "0ca8cba1e693b4077a7bda122b44fb59"
  },
  {
    "url": "images/home/twitter.svg",
    "revision": "ec1092805f4b8a49e407a1d0c3070ece"
  },
  {
    "url": "images/home/what.svg",
    "revision": "45c5c3204935536507e23ae6429ae789"
  },
  {
    "url": "images/home/why.svg",
    "revision": "28360c994b2bd2b6fba2247e0aafe9e7"
  },
  {
    "url": "images/hoohay.jpg",
    "revision": "b3ec3bfc5cef6a4e2c971a639e4d8827"
  },
  {
    "url": "images/icons/add-cell.svg",
    "revision": "14a5db1d421b926e55961fd13c901ea2"
  },
  {
    "url": "images/icons/add-column.svg",
    "revision": "37b2349292d696b1a305c4e0f5203a65"
  },
  {
    "url": "images/icons/add-role.svg",
    "revision": "0a5767e47411b333b8490b51b4fcfddd"
  },
  {
    "url": "images/icons/add-row.svg",
    "revision": "72bc46ec77e54027c0ce225647faa607"
  },
  {
    "url": "images/icons/adjust.svg",
    "revision": "3805e9296c23c2150e8c482631ca1469"
  },
  {
    "url": "images/icons/align-center.svg",
    "revision": "eea2df853ed4af375229bcabcc70d1ec"
  },
  {
    "url": "images/icons/align-image-center.svg",
    "revision": "6995542a106f0b4ef3c9b74fa3c09fcf"
  },
  {
    "url": "images/icons/align-image-left.svg",
    "revision": "e81c873d9ab3f9a9f1c67608882c6d13"
  },
  {
    "url": "images/icons/align-image-right.svg",
    "revision": "8042cbe1d1fc854e5825ebb2fe81a224"
  },
  {
    "url": "images/icons/align-justify.svg",
    "revision": "94dec4b0a89b68f352d455126a5de3e7"
  },
  {
    "url": "images/icons/align-left.svg",
    "revision": "4ff8ddf29e610be3532c4c0dbedc68ae"
  },
  {
    "url": "images/icons/align-right.svg",
    "revision": "eb609b43b197e6a83fc5f39a146a032f"
  },
  {
    "url": "images/icons/analytics.svg",
    "revision": "634c57d2c52f532d4077c7b61a522079"
  },
  {
    "url": "images/icons/angle-down.svg",
    "revision": "054f03a552c7a53c03bffea1b412c8d6"
  },
  {
    "url": "images/icons/angle-left.svg",
    "revision": "959997ceca757754cab55d3bb3598d33"
  },
  {
    "url": "images/icons/angle-right.svg",
    "revision": "f023389ef107426eeeff7e1209536e28"
  },
  {
    "url": "images/icons/angle-up.svg",
    "revision": "4708f3c380e3c997241960e777d74ef8"
  },
  {
    "url": "images/icons/announcement.svg",
    "revision": "9271a551f3f5a47426e68d93e35a5635"
  },
  {
    "url": "images/icons/api-lock.svg",
    "revision": "9689354dbc712863f85a7b36e4517f9b"
  },
  {
    "url": "images/icons/api-web.svg",
    "revision": "fba14e92e46296268b2d73ccb9fa819e"
  },
  {
    "url": "images/icons/archive.svg",
    "revision": "203790f2a78692afb337e2b82c2c0576"
  },
  {
    "url": "images/icons/arrow-up-full.svg",
    "revision": "d2ca9c2f8a380b48eb5cb8126edb2f9f"
  },
  {
    "url": "images/icons/asterisk.svg",
    "revision": "db2b9ddf40b978994776a17c5d3ea343"
  },
  {
    "url": "images/icons/audio.svg",
    "revision": "55637108b6479b0c30da2a930e370f78"
  },
  {
    "url": "images/icons/autosize.svg",
    "revision": "1aeec8733e8e0b63b6dbbb09c0b1f178"
  },
  {
    "url": "images/icons/bars.svg",
    "revision": "6f5f2cbe7dd5dc4bf8297e7f53e50211"
  },
  {
    "url": "images/icons/bell-off.svg",
    "revision": "b507340b5189cc6efcf8be79e5aa2312"
  },
  {
    "url": "images/icons/bell-on.svg",
    "revision": "0d6a1039c54ef68efc6b547afedfbb2b"
  },
  {
    "url": "images/icons/blogs.svg",
    "revision": "f923f224fbd065c1b9c15ef73e4d06ad"
  },
  {
    "url": "images/icons/bold.svg",
    "revision": "51346907efa7b845137db7901ca92f01"
  },
  {
    "url": "images/icons/bookmarks.svg",
    "revision": "43b9b14b6578e9535e0e76b9683a2a03"
  },
  {
    "url": "images/icons/box-container.svg",
    "revision": "75e82d35511ab5bc5c02a8f82866a61a"
  },
  {
    "url": "images/icons/breadcrumb.svg",
    "revision": "611f59e14616e3f2b6c73a2e8723b6e9"
  },
  {
    "url": "images/icons/calendar.svg",
    "revision": "8e6ed76bcd1a55a89bec4b783c67b8e8"
  },
  {
    "url": "images/icons/camera.svg",
    "revision": "6065a364bc658654b00db8efe6bcd860"
  },
  {
    "url": "images/icons/cards.svg",
    "revision": "5d87f88d3adbcbb350d140cb4b4558d2"
  },
  {
    "url": "images/icons/cards2.svg",
    "revision": "52ae90d71bd78882d6e2db76c4e0d049"
  },
  {
    "url": "images/icons/caret-bottom-l.svg",
    "revision": "e4638f41200aeeb3732c110f73c30233"
  },
  {
    "url": "images/icons/caret-bottom.svg",
    "revision": "f2f11f688314414710e3df1925a794bf"
  },
  {
    "url": "images/icons/caret-double-l.svg",
    "revision": "43f62d8cfe7d4cc091cea435e9827105"
  },
  {
    "url": "images/icons/caret-double.svg",
    "revision": "d4182052a37fb5a3d019241a2ea246f1"
  },
  {
    "url": "images/icons/caret-left-l.svg",
    "revision": "88b2b9d84cff0039d69db24e82913a90"
  },
  {
    "url": "images/icons/caret-left.svg",
    "revision": "5a12950c032f17b055b312211e39a48c"
  },
  {
    "url": "images/icons/caret-right-l.svg",
    "revision": "8f40279ed934bea3c7a8df11cf36842b"
  },
  {
    "url": "images/icons/caret-right.svg",
    "revision": "07bccb057f15271c36866d40b072ef3d"
  },
  {
    "url": "images/icons/caret-top-l.svg",
    "revision": "6ac6c6f7dc3a371784853facc1e45eb8"
  },
  {
    "url": "images/icons/caret-top.svg",
    "revision": "eb0a868f1011c40b2222fc84d38e0a18"
  },
  {
    "url": "images/icons/categories.svg",
    "revision": "cd8d76f44ed37e0864e14cd2668cd053"
  },
  {
    "url": "images/icons/chain-broken.svg",
    "revision": "55fb658780ad585456b088a560805557"
  },
  {
    "url": "images/icons/change.svg",
    "revision": "1609475b98b3efa54987d8937e79f1f7"
  },
  {
    "url": "images/icons/check-circle-full.svg",
    "revision": "95ab317d99c7d959a6c889dfd5567ea6"
  },
  {
    "url": "images/icons/check-circle.svg",
    "revision": "4a78c432e11ec5d6122afc4ddff5bbbb"
  },
  {
    "url": "images/icons/check-square.svg",
    "revision": "2ad57ad663e5fa7c8292feaaff47ba74"
  },
  {
    "url": "images/icons/check.svg",
    "revision": "a5ba59b4a73cfb36e25d7a0e89ad0d03"
  },
  {
    "url": "images/icons/chip.svg",
    "revision": "7a1d9e3bbf5c663444c6e06db3ca00c9"
  },
  {
    "url": "images/icons/code.svg",
    "revision": "bd307515d89e736734cd0fa72129184c"
  },
  {
    "url": "images/icons/cog.svg",
    "revision": "b3d0ea07e5ae10d8805539806b125288"
  },
  {
    "url": "images/icons/columns.svg",
    "revision": "c9f88eaa067fb35e70aa86724120aa3a"
  },
  {
    "url": "images/icons/comments.svg",
    "revision": "6f17bde2f5c072a08f49448b3c6cf940"
  },
  {
    "url": "images/icons/community.svg",
    "revision": "889b89ce35fdbf543316fd8cbd56c590"
  },
  {
    "url": "images/icons/compress.svg",
    "revision": "e72e7bcce5f8cac297d4e0760546e415"
  },
  {
    "url": "images/icons/control-panel.svg",
    "revision": "a7b223121d628580e0c0804746f016c6"
  },
  {
    "url": "images/icons/custom-field.svg",
    "revision": "4ea7a7dad35bcf8c44335befb128375f"
  },
  {
    "url": "images/icons/custom-size.svg",
    "revision": "98d796eebb84cc9297f7a0be29db819a"
  },
  {
    "url": "images/icons/cut.svg",
    "revision": "97c1ab2b1ab311ca0403f8677b8ce331"
  },
  {
    "url": "images/icons/date.svg",
    "revision": "5dfab6451ed3f5de67ec9fa1dbd2e9a2"
  },
  {
    "url": "images/icons/decimal.svg",
    "revision": "cffb9e1a0035c6a162ea9eae6701799b"
  },
  {
    "url": "images/icons/desktop.svg",
    "revision": "410657f7b9ae578eff0c5fa6603dfe4a"
  },
  {
    "url": "images/icons/devices.svg",
    "revision": "83aa6b5d1a9028fd2836398d1a4231dc"
  },
  {
    "url": "images/icons/diagram.svg",
    "revision": "fc2c9e832fb1739ab65dd8cc5ba53fe9"
  },
  {
    "url": "images/icons/diary.svg",
    "revision": "9321ae591055f561457a83ee25492f49"
  },
  {
    "url": "images/icons/document.svg",
    "revision": "ebf4e5487d920bf23a9cf3f6e3e05d4b"
  },
  {
    "url": "images/icons/documents-and-media.svg",
    "revision": "1e538ea92cb8ee0556cdbab85a6f1a9d"
  },
  {
    "url": "images/icons/download.svg",
    "revision": "ee074384d80c7acee336bfa3c8c4fd9e"
  },
  {
    "url": "images/icons/drag.svg",
    "revision": "292095a9648547a5dddd04ec68054c64"
  },
  {
    "url": "images/icons/dynamic-data-list.svg",
    "revision": "5f64b5db481570e3984e5de8e2fea1bb"
  },
  {
    "url": "images/icons/dynamic-data-mapping.svg",
    "revision": "ff76b6cd2656f6c031bb098a2a2788aa"
  },
  {
    "url": "images/icons/edit-layout.svg",
    "revision": "ad497d869155acac555a2d9e1fa95e14"
  },
  {
    "url": "images/icons/effects.svg",
    "revision": "3f7f3f479408f983eb29f2f9e96080ab"
  },
  {
    "url": "images/icons/ellipsis-h.svg",
    "revision": "a64268f216b6f06abde8b0e3513c8b73"
  },
  {
    "url": "images/icons/ellipsis-v.svg",
    "revision": "e29bdcf433d7e9ad416ab41232546c80"
  },
  {
    "url": "images/icons/embed.svg",
    "revision": "96df92ededf31e43f42960e7ba22ccb7"
  },
  {
    "url": "images/icons/envelope-closed.svg",
    "revision": "2b2f1db449b3ad05ae56ac96ef557341"
  },
  {
    "url": "images/icons/envelope-open.svg",
    "revision": "cd28873398a453150e890cbcf66d5cc6"
  },
  {
    "url": "images/icons/environment-connected.svg",
    "revision": "ace8c64c8261b5b2cfd4356acc43cdff"
  },
  {
    "url": "images/icons/environment-disconnected.svg",
    "revision": "04ad58ed2dbda094d6da819ff876b2a1"
  },
  {
    "url": "images/icons/environment.svg",
    "revision": "20ea3ff8c25e487414b20a511b710a87"
  },
  {
    "url": "images/icons/exclamation-circle.svg",
    "revision": "b26fad550b62e6d3436f58aa09601c93"
  },
  {
    "url": "images/icons/exclamation-full.svg",
    "revision": "d5b8b74e663682e03f2cd12c2b816a6c"
  },
  {
    "url": "images/icons/expand.svg",
    "revision": "2c8432d28f0c8581f46d2d09f4e1f3b0"
  },
  {
    "url": "images/icons/file-script.svg",
    "revision": "5d4eb453fa7fb541c4d24cdc04dae7b8"
  },
  {
    "url": "images/icons/file-template.svg",
    "revision": "1f9b0f4f9fec3077c764f5e0cbaee06d"
  },
  {
    "url": "images/icons/file-xsl.svg",
    "revision": "2360d89a9d7d9850dbe36494c9f878a4"
  },
  {
    "url": "images/icons/filter.svg",
    "revision": "f52c74e72d36982197dfb5c23a5a58a6"
  },
  {
    "url": "images/icons/flag-empty.svg",
    "revision": "8afb2f569080a219333515d95daa9d7a"
  },
  {
    "url": "images/icons/flag-full.svg",
    "revision": "35fb79c5d3e3417eda94c8f3e0db25f2"
  },
  {
    "url": "images/icons/folder.svg",
    "revision": "43000a48c1fd1bd1d5d8b5772f2eba98"
  },
  {
    "url": "images/icons/format.svg",
    "revision": "c7cdd4ac32f34bff5ef6dccd9141a5d8"
  },
  {
    "url": "images/icons/forms.svg",
    "revision": "92e62c115ccf5da388d81ab83ed35b78"
  },
  {
    "url": "images/icons/full-size.svg",
    "revision": "6e06211a183a0ae3868450095ac70fde"
  },
  {
    "url": "images/icons/geolocation.svg",
    "revision": "ac648e8f3c5dcf8f2c5b30708601ab5e"
  },
  {
    "url": "images/icons/globe.svg",
    "revision": "4cfd68ecce6a6c6748588f85d636c0aa"
  },
  {
    "url": "images/icons/grid.svg",
    "revision": "6cda53b02a018080a35c7e02bd9d2203"
  },
  {
    "url": "images/icons/h1.svg",
    "revision": "c2f0923656901e714206ab2fb043ba25"
  },
  {
    "url": "images/icons/h2.svg",
    "revision": "b6f274fdabca4720c25c68e7251d4f6b"
  },
  {
    "url": "images/icons/hashtag.svg",
    "revision": "0c16b6b4ede677296f4a24b90f79abec"
  },
  {
    "url": "images/icons/heart.svg",
    "revision": "448720de229f33dc905651c6d86fad56"
  },
  {
    "url": "images/icons/hidden.svg",
    "revision": "b1b0d4b992971009daa1a92c372a4613"
  },
  {
    "url": "images/icons/home.svg",
    "revision": "7858e347d4d20bc6ce4a8b1536110e30"
  },
  {
    "url": "images/icons/horizontal-scroll.svg",
    "revision": "bb38743fc4228d9463f44d255b6c57d1"
  },
  {
    "url": "images/icons/hr.svg",
    "revision": "fee19d14356aa9b09741d1ddb3807bf9"
  },
  {
    "url": "images/icons/icons.svg",
    "revision": "19e3f7ad0de88f9c8cfb1ee63f898147"
  },
  {
    "url": "images/icons/import-export.svg",
    "revision": "12bb97a606f1e1408fe5f167fa4c922e"
  },
  {
    "url": "images/icons/indent-less.svg",
    "revision": "d9191f3adfdca2c75110829aaed6a6e9"
  },
  {
    "url": "images/icons/indent-more.svg",
    "revision": "3b9178a5564f59911dea3026ded866e1"
  },
  {
    "url": "images/icons/info-book.svg",
    "revision": "1ba22b843b1f4ec74f9ee59a86780184"
  },
  {
    "url": "images/icons/info-circle-open.svg",
    "revision": "f6ec5c1c79d117933222804d9d91d21b"
  },
  {
    "url": "images/icons/info-circle.svg",
    "revision": "f3c8b0b04427f0142678df2a9a76963e"
  },
  {
    "url": "images/icons/info-panel-closed.svg",
    "revision": "a4df62e33112e7c72d0339a4c9adf59e"
  },
  {
    "url": "images/icons/info-panel-open.svg",
    "revision": "5552a2997bba252628347555d525a984"
  },
  {
    "url": "images/icons/information-live.svg",
    "revision": "6ebaa56e3346f906b0d1318470620c71"
  },
  {
    "url": "images/icons/integer.svg",
    "revision": "29662bece063d5faa2603f599591fc43"
  },
  {
    "url": "images/icons/italic.svg",
    "revision": "58b06741af0664971b99c2d97e966777"
  },
  {
    "url": "images/icons/link.svg",
    "revision": "9cccff055bd63d2939b60372cd245864"
  },
  {
    "url": "images/icons/list-ol.svg",
    "revision": "d3e8bcf6d42c9435c204011755c7de35"
  },
  {
    "url": "images/icons/list-ul.svg",
    "revision": "d9b945e7b64d0b55c0efa11198500195"
  },
  {
    "url": "images/icons/list.svg",
    "revision": "b0e003429944cc74b5776b9b2f7323cd"
  },
  {
    "url": "images/icons/live.svg",
    "revision": "a0c438801cf80199b2ea7958b815d936"
  },
  {
    "url": "images/icons/lock-dots.svg",
    "revision": "f92045ab9e34ca7f7b3302f8ce6f9b1b"
  },
  {
    "url": "images/icons/lock.svg",
    "revision": "e822688b1e2414c6bf944e6663c8de0d"
  },
  {
    "url": "images/icons/logout.svg",
    "revision": "668fb1832e0221c54e59e757501a58a4"
  },
  {
    "url": "images/icons/magic.svg",
    "revision": "a88a0f859d70c62fde0c16691f003afc"
  },
  {
    "url": "images/icons/mark-as-answer.svg",
    "revision": "09c598f7923206b190b6999571a128df"
  },
  {
    "url": "images/icons/mark-as-question.svg",
    "revision": "f770d314546b826d125476863f0a9de9"
  },
  {
    "url": "images/icons/merge.svg",
    "revision": "45b22bffc6a2bed7d3b9b71ab93ac3e2"
  },
  {
    "url": "images/icons/message-boards.svg",
    "revision": "2ca22486011d045c2516163375b163b0"
  },
  {
    "url": "images/icons/message.svg",
    "revision": "964507144def35c4c30d096a6b48c15b"
  },
  {
    "url": "images/icons/mobile-device-rules.svg",
    "revision": "8597991f8cb76ca45711a2c0dba7f4bb"
  },
  {
    "url": "images/icons/mobile-landscape.svg",
    "revision": "a7463f73089a97a82fe504bda2a7fd42"
  },
  {
    "url": "images/icons/mobile-portrait.svg",
    "revision": "4c47319572a8052848a5bfa5241b94b8"
  },
  {
    "url": "images/icons/moon.svg",
    "revision": "1d0304c5233eecadcf004d3febaaa667"
  },
  {
    "url": "images/icons/move.svg",
    "revision": "86a32488855e468b8b37aad59bee7940"
  },
  {
    "url": "images/icons/myspace.svg",
    "revision": "fe86c5c6528b3d27df0aa698b448a1c8"
  },
  {
    "url": "images/icons/number.svg",
    "revision": "b29facb24ffbe12053154691467d3e4b"
  },
  {
    "url": "images/icons/oauth.svg",
    "revision": "ab2b80ed28be9329e5042245ad1d6f72"
  },
  {
    "url": "images/icons/open-id.svg",
    "revision": "af72480d1f6b90b013fbfb140fafbf8b"
  },
  {
    "url": "images/icons/order-arrow-down.svg",
    "revision": "0a1c6a8eb41cd1240739188273d5cd19"
  },
  {
    "url": "images/icons/order-arrow-up.svg",
    "revision": "a0d56b9b8c23ba7d2d512d47afc6442c"
  },
  {
    "url": "images/icons/order-arrow.svg",
    "revision": "a8f89698e194cefa2bd4cabe8e364714"
  },
  {
    "url": "images/icons/organizations.svg",
    "revision": "d69c22228932f3ef1aeeb3f001d7e377"
  },
  {
    "url": "images/icons/page-template.svg",
    "revision": "723d782303ab8a999ca2a6458e465441"
  },
  {
    "url": "images/icons/page.svg",
    "revision": "8a538adcd3c0a2a61e2d2f9a125a2d46"
  },
  {
    "url": "images/icons/pages-tree.svg",
    "revision": "7506d86c60365140b13879dfae8125a7"
  },
  {
    "url": "images/icons/paperclip.svg",
    "revision": "1688e8457bf646cfe7a6471f623bd74c"
  },
  {
    "url": "images/icons/paragraph.svg",
    "revision": "de12236aff11427aee91734abf105d9b"
  },
  {
    "url": "images/icons/password-policies.svg",
    "revision": "2bdde57559b31090f060c87ed97df44e"
  },
  {
    "url": "images/icons/paste.svg",
    "revision": "aed4d78974dc3092822d0dc9ae6b5adf"
  },
  {
    "url": "images/icons/pause.svg",
    "revision": "ee66f8454e988a9079df3a55ca415cd3"
  },
  {
    "url": "images/icons/pencil.svg",
    "revision": "70682e99d7a5b049ad5953e8b47cab46"
  },
  {
    "url": "images/icons/phone.svg",
    "revision": "2e3c51b127c4f6c07738db72a9664d95"
  },
  {
    "url": "images/icons/picture.svg",
    "revision": "9c67c066737faa9a5a65ba4369dbecf0"
  },
  {
    "url": "images/icons/play.svg",
    "revision": "e4d14656b4eb5b6e942096f5f5a984bf"
  },
  {
    "url": "images/icons/plug.svg",
    "revision": "5029cf560aec18d54d83d44a93bc40f1"
  },
  {
    "url": "images/icons/plus-squares.svg",
    "revision": "75aae9924b4c20d50223479e12a51cd2"
  },
  {
    "url": "images/icons/plus.svg",
    "revision": "f5f19247df51af27dcfa85a090bc7f8e"
  },
  {
    "url": "images/icons/polls.svg",
    "revision": "f6f55482adbc38f912b4f900d2364a93"
  },
  {
    "url": "images/icons/print.svg",
    "revision": "b33dc70b4b88c5c976cbe0591abc8f29"
  },
  {
    "url": "images/icons/product-menu-closed.svg",
    "revision": "1e3a03b2a0f8d9187114f14ac9083418"
  },
  {
    "url": "images/icons/product-menu-open.svg",
    "revision": "d5e589f9a0701f74836e4d9950267a71"
  },
  {
    "url": "images/icons/product-menu.svg",
    "revision": "213aebfc3935feed5454b234f46c7c39"
  },
  {
    "url": "images/icons/propagation.svg",
    "revision": "3ab989a91b22c51e27a5161723b634d2"
  },
  {
    "url": "images/icons/question-circle-full.svg",
    "revision": "1c9cf4deed98cdb3ad8c40f69c94d3c5"
  },
  {
    "url": "images/icons/question-circle.svg",
    "revision": "ed79cb993444d2af90fcd3fd46c5dcd6"
  },
  {
    "url": "images/icons/quote-left.svg",
    "revision": "d2e1b53416948bed1552fff4ecce0826"
  },
  {
    "url": "images/icons/quote-right.svg",
    "revision": "e551340614381824c4c0adf7919f0cef"
  },
  {
    "url": "images/icons/radio-button.svg",
    "revision": "d8e47e919ac994ee61d3e6352b87704a"
  },
  {
    "url": "images/icons/redo.svg",
    "revision": "a181b3b7caa581f52ced52453e66921f"
  },
  {
    "url": "images/icons/reload.svg",
    "revision": "b0f3fc06f731892d32f321652871b775"
  },
  {
    "url": "images/icons/remove-role.svg",
    "revision": "2039f43b07a80b4a88e47b4e3f8d26db"
  },
  {
    "url": "images/icons/remove-style.svg",
    "revision": "e08f8741cee1fce5425878b711dce5e0"
  },
  {
    "url": "images/icons/reply.svg",
    "revision": "de911afc863bd6c1c0548be743d52518"
  },
  {
    "url": "images/icons/repository.svg",
    "revision": "b18fc48955f231f2755cfe99ae24f2db"
  },
  {
    "url": "images/icons/restore.svg",
    "revision": "3b5de9d316ea61a9deedf4678fa15353"
  },
  {
    "url": "images/icons/rss-full.svg",
    "revision": "edeb90897db18affc752aa717855b147"
  },
  {
    "url": "images/icons/rss.svg",
    "revision": "e42ded15a58ac63c2147a2e0593682c2"
  },
  {
    "url": "images/icons/rules.svg",
    "revision": "48da8a910486a081d80616f89b028288"
  },
  {
    "url": "images/icons/search.svg",
    "revision": "5ed4833bf60adbd4d2ed1fd952c17ab6"
  },
  {
    "url": "images/icons/select-from-list.svg",
    "revision": "e00d25183a97d6e93ee4d5a2af18ad0b"
  },
  {
    "url": "images/icons/select.svg",
    "revision": "1adb5267cf9650917c238fe088219ea9"
  },
  {
    "url": "images/icons/separator.svg",
    "revision": "1a96c639d2510def11d55541e58ac34a"
  },
  {
    "url": "images/icons/share-alt.svg",
    "revision": "682981cbd4f9ed155b1c75ecf55b0df4"
  },
  {
    "url": "images/icons/share.svg",
    "revision": "0d7404140584a4b880efa1e8c3ecb63d"
  },
  {
    "url": "images/icons/sheets.svg",
    "revision": "a596c484bc7ab9eaf08b7bd6f0ed2388"
  },
  {
    "url": "images/icons/shopping-cart.svg",
    "revision": "751989e172cb79f66cf79e2e164421a0"
  },
  {
    "url": "images/icons/shortcut.svg",
    "revision": "34c832ce1dc5c8b69191a7c09174adca"
  },
  {
    "url": "images/icons/simulation-menu-closed.svg",
    "revision": "ef991d19a31912ee81798ec045a2cac6"
  },
  {
    "url": "images/icons/simulation-menu-open.svg",
    "revision": "a2105310cb95782e5b0d6abbc807924e"
  },
  {
    "url": "images/icons/simulation-menu.svg",
    "revision": "47a717115928ed0c5d94a6dfdc2cbb35"
  },
  {
    "url": "images/icons/site-template.svg",
    "revision": "72280c5e960d602ac57cfcd3328e4d41"
  },
  {
    "url": "images/icons/sites.svg",
    "revision": "a0774162cf7a33660fdd7861953640bb"
  },
  {
    "url": "images/icons/social-facebook.svg",
    "revision": "5c38dd869093dafddb58feb3bdc8676c"
  },
  {
    "url": "images/icons/social-linkedin.svg",
    "revision": "fc7e70995870d2b04b2b9958c6dd7e78"
  },
  {
    "url": "images/icons/staging.svg",
    "revision": "6df8d38bbd9709fe32e369dbc0c52ed2"
  },
  {
    "url": "images/icons/star-half.svg",
    "revision": "0de10cdd2ec0f4bc131f253e93eb986c"
  },
  {
    "url": "images/icons/star-o.svg",
    "revision": "5e6a68dea5c327b4fbc7ce5f955cb970"
  },
  {
    "url": "images/icons/star.svg",
    "revision": "0adc260c5548659ccc254a0e05eaf174"
  },
  {
    "url": "images/icons/sticky.svg",
    "revision": "83dffe9ca3ffd4cff8fbaab09f1810b1"
  },
  {
    "url": "images/icons/strikethrough.svg",
    "revision": "8a122ba7b87b788671a6842d6ad79089"
  },
  {
    "url": "images/icons/subscript.svg",
    "revision": "db6198633de52d9f9cacf3c44dda3816"
  },
  {
    "url": "images/icons/suitcase.svg",
    "revision": "f0268e360ab0707b2f33418a5c0f4101"
  },
  {
    "url": "images/icons/sun.svg",
    "revision": "3c4a6081a3daad27733c06c587ccac6a"
  },
  {
    "url": "images/icons/superscript.svg",
    "revision": "6dbbc9fc5a1ea4f2787df9045aebb541"
  },
  {
    "url": "images/icons/table.svg",
    "revision": "5cac30067f1884c31ab291d7bfe4f568"
  },
  {
    "url": "images/icons/table2.svg",
    "revision": "881c665066ba4c687de446fa3c15efe5"
  },
  {
    "url": "images/icons/tablet-landscape.svg",
    "revision": "e8b200d8e8c6f943cfb481711eed0977"
  },
  {
    "url": "images/icons/tablet-portrait.svg",
    "revision": "fe11a99b612f2c87b4124f664ea24b96"
  },
  {
    "url": "images/icons/tag.svg",
    "revision": "1d0cbe122a60c80777298ba6455e6314"
  },
  {
    "url": "images/icons/text-editor.svg",
    "revision": "bac1b52209a5dcd3c228b2ac7ce4daa9"
  },
  {
    "url": "images/icons/text.svg",
    "revision": "f5fb5430d0a00795028ce20ddaa3f12a"
  },
  {
    "url": "images/icons/textbox.svg",
    "revision": "66793b0a68247d3da1a7a4eaab08d083"
  },
  {
    "url": "images/icons/third-party.svg",
    "revision": "ab9539b534de370a951e976f70a60094"
  },
  {
    "url": "images/icons/thumbs-down.svg",
    "revision": "124ab551ca0f8f313a39f8800cb39f59"
  },
  {
    "url": "images/icons/thumbs-up-arrow.svg",
    "revision": "0038ee697bc64cf7c27d12d646f0143b"
  },
  {
    "url": "images/icons/thumbs-up.svg",
    "revision": "a4156ee36006a0f99bb8e6784cfe2360"
  },
  {
    "url": "images/icons/time.svg",
    "revision": "408d61e5d543350873366319c0952989"
  },
  {
    "url": "images/icons/times-circle.svg",
    "revision": "782e705ee8f78f34d62f958a99d662c2"
  },
  {
    "url": "images/icons/times.svg",
    "revision": "ab0a19c61a25a6c0995ffd4d36ab5799"
  },
  {
    "url": "images/icons/transform.svg",
    "revision": "3cb894717fb05f12084222da7638f36d"
  },
  {
    "url": "images/icons/trash.svg",
    "revision": "157e750980c50ea68fe752dd2bccf18d"
  },
  {
    "url": "images/icons/twitter.svg",
    "revision": "03d90cbb650e971aac8b1525d72292b8"
  },
  {
    "url": "images/icons/underline.svg",
    "revision": "39280ac1fc168b432002f2621f98f3e0"
  },
  {
    "url": "images/icons/undo.svg",
    "revision": "878dd82d323150fdd4e5db8de19a635b"
  },
  {
    "url": "images/icons/unlock.svg",
    "revision": "316b6f5f6a6451ec9d5ff52fa9c11c32"
  },
  {
    "url": "images/icons/upload.svg",
    "revision": "10412633d9a3665fe6cd6b008c82f574"
  },
  {
    "url": "images/icons/urgent.svg",
    "revision": "4eb3e0052634e032b4a2c6c46e3eb692"
  },
  {
    "url": "images/icons/user.svg",
    "revision": "1d4d2d0c148fada47556d2fb1ddd2781"
  },
  {
    "url": "images/icons/users.svg",
    "revision": "94ce8ee278e19233c87bef45b2ffb10b"
  },
  {
    "url": "images/icons/vertical-scroll.svg",
    "revision": "c4a68bdbfbb0a627d7740ea2b07962b3"
  },
  {
    "url": "images/icons/video.svg",
    "revision": "344cf5898bf1f645e5658f0a3af6d5bb"
  },
  {
    "url": "images/icons/view.svg",
    "revision": "4a478292acb1267adc64cd8aa6d5a577"
  },
  {
    "url": "images/icons/vocabulary.svg",
    "revision": "c0268765c7443e892f42daf3054da330"
  },
  {
    "url": "images/icons/warning-full.svg",
    "revision": "c8d1a04915b938cc6316d018f329d6b1"
  },
  {
    "url": "images/icons/warning.svg",
    "revision": "06ff3058c5283ac58273f32e92509c7b"
  },
  {
    "url": "images/icons/web-content.svg",
    "revision": "6d471b57186a93bc1003e10c1b0d77c3"
  },
  {
    "url": "images/icons/wiki-page.svg",
    "revision": "7e5dab9e5562c7a53eafaaf88f893664"
  },
  {
    "url": "images/icons/wiki.svg",
    "revision": "cbfbcbe3d67cc267e9b1221c9673c2d0"
  },
  {
    "url": "images/icons/workflow.svg",
    "revision": "bdc8f7f16552b55efa866387c8bd53ed"
  },
  {
    "url": "images/jamaicanbluemountain.jpg",
    "revision": "19ab934c2d53734bdfb4cd2f7dd49b74"
  },
  {
    "url": "images/liferay_logo_tagline.png",
    "revision": "7b291b446cf45da440e341ee4839f241"
  },
  {
    "url": "images/liferayLogo.1.png",
    "revision": "767c7159faeddcabd071b84ffc4006cd"
  },
  {
    "url": "images/liferayLogo.png",
    "revision": "767c7159faeddcabd071b84ffc4006cd"
  },
  {
    "url": "images/ray.png",
    "revision": "6f423fda12941703a82defd19eeab9e5"
  },
  {
    "url": "index.html",
    "revision": "b850ca4c215ec4705cd7563671812c39"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "00684f7dbb195fa99eb4daa1c001d8f2"
  },
  {
    "url": "onboarding/index.html",
    "revision": "9a41401b9a1c62319468b8eee8d5ad09"
  },
  {
    "url": "onboarding/one.html",
    "revision": "cb509eaf93b30394af5ca452e5f03aaf"
  },
  {
    "url": "onboarding/success.html",
    "revision": "2e0497b0527eb7b69b4782d0c0dac7b6"
  },
  {
    "url": "onboarding/three.html",
    "revision": "e3e31362e67e2923613c45236986717c"
  },
  {
    "url": "onboarding/two.html",
    "revision": "a095d74811bf25f537304e111b0264b8"
  },
  {
    "url": "pages-manifest-179ca25de5e25f9daf0a.js"
  },
  {
    "url": "pages-manifest-204e3dd352d9ec210d54.js"
  },
  {
    "url": "pages-manifest-63ab7b1908ae5d805156.js"
  },
  {
    "url": "pages-manifest-7c03c5fd15c42f6ffad7.js"
  },
  {
    "url": "pages-manifest-94b0173c986aa9f9a18b.js"
  },
  {
    "url": "pages-manifest-ae43561a6c16b16b31bb.js"
  },
  {
    "url": "pages-manifest-af2e8816b608501ec560.js"
  },
  {
    "url": "pages-manifest-cc721bfa9e1416302c53.js"
  },
  {
    "url": "pages-manifest-cf7558247838947c4107.js"
  },
  {
    "url": "pages-manifest-edd86ed62f93c9ff1ae2.js"
  },
  {
    "url": "updates/index.html",
    "revision": "b93bbacfac29aaf79741d41bc5a7ed7c"
  },
  {
    "url": "webpack-runtime-05d0be33c7bfc2c5c3d2.js"
  },
  {
    "url": "webpack-runtime-3393436267fc87101f6c.js"
  },
  {
    "url": "webpack-runtime-4c097471c34899ec30b9.js"
  },
  {
    "url": "webpack-runtime-5ccb4a2575649c6b1b66.js"
  },
  {
    "url": "webpack-runtime-675a2e78e4880ce3fecc.js"
  },
  {
    "url": "webpack-runtime-71d865e5c870aef8dcf7.js"
  },
  {
    "url": "webpack-runtime-7633658c1f657d75e825.js"
  },
  {
    "url": "webpack-runtime-8aa9775373289de56bb3.js"
  },
  {
    "url": "webpack-runtime-9f357c05d74ad10c2bec.js"
  },
  {
    "url": "webpack-runtime-a206ffbbe813c9b8b178.js"
  },
  {
    "url": "webpack-runtime-afeb76419eb84882aa4a.js"
  },
  {
    "url": "webpack-runtime-b0a20748a1ab915b7d01.js"
  },
  {
    "url": "webpack-runtime-b31267ff0f5f98125db4.js"
  },
  {
    "url": "webpack-runtime-b3c07f95a7807876715c.js"
  },
  {
    "url": "webpack-runtime-c274e14beca9c3f80457.js"
  },
  {
    "url": "webpack-runtime-c421dc3b88d57bc11e6a.js"
  },
  {
    "url": "webpack-runtime-d896e917ea1eb7e4233f.js"
  },
  {
    "url": "webpack-runtime-ee9f4c8d1c91e9f546fc.js"
  },
  {
    "url": "webpack-runtime-f241eb4f21673ebe9ae9.js"
  },
  {
    "url": "webpack-runtime-fed452e04186474a7aa9.js"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/gatsby-boilerplate/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `/gatsby-boilerplate${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
