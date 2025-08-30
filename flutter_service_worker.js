'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "04c7cd480b2a402ce7466e0474ed7391",
".git/config": "51a5d16937f24619d496df0a73d14dca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dbc91476ad7f0437c871e8df9e1d0d3e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b5044f10dcce1a4ae3a315449e608f4",
".git/logs/refs/heads/gh-pages": "e6c47b247299dc46265708fc32354c6f",
".git/logs/refs/remotes/origin/gh-pages": "28c0652fa51e5c6bde866e112622a4ab",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/02/b9d3b851973b48dd3a37c160094b21f5818e54": "89c3cc7f58557f9f54e3964ac1d94e4f",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/06/9cc9a87b446044c89b2ce1e0fb2be1bcfd0dca": "ec11f673276375fd66e463a21ae5bb92",
".git/objects/07/76c3ea6179a5bb1669d0219b3fe013c3090dc1": "5e81e4ad5db73b1ba25afdc71cdee0f8",
".git/objects/0b/764088255e3a1aefe886130c04dc7126204b49": "f333146b9fa7514d82af6bf8aa9f133c",
".git/objects/0c/1cd0c704c5029890e61ae9bc5660c58d6cc2c3": "ba5fff25139b5b64965ad1f3c91a4157",
".git/objects/0e/dda12c57e14fe3342533925f7be089542833ca": "30c1c1664cce3e6508a3ceb78cd596ff",
".git/objects/13/ec635735b1aaf59ac89b9c0d4e68de7acbae23": "d7e3f7242d7bc5f0b1a0348fe93b3d8a",
".git/objects/14/10d8f75139396b4874a394c4d04951d7ea06f8": "6e83e1b0962dad16cff726f580ff01b4",
".git/objects/1a/1970a8ee983e5c923b7a867f11851fec4d0f55": "bab566b409d155330f8773bb48fe42ab",
".git/objects/1a/5c7ebc947d181338aad7f420bf6126de7fdaf2": "f1ea5d9f2232bff774e2e1c14d3a4990",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/24/05ecde4adef406507ed8fbe60db1c9de796cc0": "eec21c58dc2e4723bc214d31e89c0a40",
".git/objects/26/b7a4aec668134b1f556ea9fe0cc39ea131e689": "8d95d60e2eb3b863ba5cf7eebec794b8",
".git/objects/27/ca1972d5130e4a7165f3e7c646343f65c1c081": "1d127c94754b782cb54786711f6f0d34",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/32/82d6c61edcb5e4b26e2a1ffcf19bb55d46db54": "f92880142939d9d41860e6ff26822664",
".git/objects/36/a3cdcf43966390c20581ed733f00ed5f088f5a": "b8b545f0c2eb47dd814caeaa228fe1f3",
".git/objects/3b/5f548f06bd693c023a0652e49e1e9eb8852d51": "30db95e6e61a0848c3238be01f608beb",
".git/objects/47/859da7c6bd9bad4948837b557380ed62cb9b5d": "1be991ec906080b82d150b5d3c23c855",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/c84247188d2b7f9f8942ef991530c4069912c0": "b289174516427837739727226aaa98a3",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/55/08cdb0975c4ae70cae6394126f30b022cb9f6f": "0ee9ce75c6b98bfc7be9fc540860f1dd",
".git/objects/55/5eb2f3b8126841326fa3e206caaf0992e9858b": "f76a94ca359ff0f2dc9395045415b384",
".git/objects/56/48e299e9882c962f2290504d986c9ca2c358ff": "6676c0397ce838d992966d7ca56e96b6",
".git/objects/5e/5fe8236dc38d76be5f883b838b60eb0bd6fdc7": "96e2273f195f30e1c5cad78bc812c448",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/61/13dd29b2d0f82762de10ad90920b3088fd4292": "79cec9fafa1a640124df0cba2d135758",
".git/objects/6b/365f35c4093682fa6478664553f02525ed1506": "aac1ab794d51c824f62cd44b90597a24",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6f/f4167174a78d381605332acab3e31e4a49c0ba": "6aee85205e5de1b3aa4428a5dadb4dae",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/afe33823728533acb5e88a63ff1219d5aab992": "130c8c9b5adfce21114d558fb24ba545",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7a/7710561aa4f85a3a844db03470504515a71d9c": "ed3551b4160371a5bbd3da72c9f85b30",
".git/objects/7d/681b06cb685f25bd38f49ca3c91e2dd2e76016": "52156aa363a8fe32cd8d7e6232664b81",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/88/58ecd83de551e7a7468559db942defb0e9ed2c": "598be89bda945a62d98ee1a938c2a4ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6e6ebe3c5b25eec865f61c2dca734d47607ced": "328fd048cb9e0fe2be59e31d451fe69f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/a2c78bc930bf63983ac01b9f797d401411a7e2": "47ad0d3b444f39d10be040b19abe0a24",
".git/objects/93/b1d453d3e1d668426c06e01bb21a19bd55f302": "e03b2dca899f0f948167dc4c2a78ec4b",
".git/objects/9a/979eb2a94b964b25f4e320eab46136becd97ae": "24429833f8a67b5f7e15f6229eb77a5b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/4299c909997e70dde0d822a1c219ff220aafcf": "91a91002f1ceb9f6377b70610ccf042c",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a8/409c9a42a602f86d8b399a0a726fa0d47a9160": "804757d4c44f7b4bd995bdf529b9ec32",
".git/objects/ac/ebc625ee224fc77f5388a522f54f0b21ee5367": "e6877fc0acaf163c342900e2919a51dc",
".git/objects/ae/b0c04f4c9b8bf865424057b7010eeb0bea66ab": "37eaebeb91468f53b6411a19cfefc4d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/c2/4f4b29177ce5300185a44245c7400512ead837": "c7b6854cca6e9258d6579d2ca5db94aa",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/3a960326efdf6ec227bb206ddb1439be6bd121": "6eca4fb2bec508b88cc457d58e8c4fff",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/cd/40a576b9a385fc40dd9db6505a067f0d5c58d6": "f1fe7b03bc53b00ee2152b721560a63d",
".git/objects/cd/645817895e0712fa9a131641bac1636c86699f": "00c53015ff8ca4990de92e8d3f3adce6",
".git/objects/d0/6bf64843977069b6581b55ae4830916a4cc7ad": "caa8a851774e81b2298e52f2f079f196",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/46498f538e657651bd442e9bb3e45c1e577bae": "36c4843676515e80424e4958d59808b9",
".git/objects/ee/a45d427641b7733d0c2c56d479c4aaecc6b1dd": "e35838de2c8351bd9cf159a94b54f61a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/37679ed764370538135dcb53756f0c0ab828b2": "464de55fec76274dfa5f49629710cebd",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/c00c5936aeb1990a2c793f25e9dfe6ceaa7703": "33764e4abdaaffd6e4668d729b499cd0",
".git/objects/fa/933f13fd761bdaaced5e2d404b7aa970dbd058": "764244853984002e3ca4499c668fb3c4",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/refs/heads/gh-pages": "6690a024ce0aa8cf8643898508b18d14",
".git/refs/remotes/origin/gh-pages": "6690a024ce0aa8cf8643898508b18d14",
"assets/AssetManifest.bin": "31fa7f9b9c7a3247644226100cf13d50",
"assets/AssetManifest.bin.json": "85dc8fe1cf7984faad31eb6a9e8f15be",
"assets/AssetManifest.json": "d4cf16e101b04dc8ba4f66a9fa34bfab",
"assets/assets/certificates/artifical.png": "365a59178653a9c350a78addaee7be11",
"assets/assets/certificates/c.png": "e957497f8f70d2a0b7ab190dbb22cbe0",
"assets/assets/certificates/python.png": "e053038856d33dcc7f7037a06c3eb13e",
"assets/assets/certificates/sap.png": "9dae59fb76b5d09a177d39867afb14fb",
"assets/assets/extraciricular/energy.jpg": "85c8f49ab7d319077c0087bc3d834cc4",
"assets/assets/markscard/1sem.png": "9a8eaa09900698dd1d29b53ca2c16b8f",
"assets/assets/markscard/2sem.png": "ce716cdeb456eec0e61db4a49869731b",
"assets/assets/markscard/3sem.png": "d8d08fc1c79e9c163f4217f5c103f794",
"assets/assets/markscard/4sem.png": "37a03f2b6849c303efe5658e2c5c8cb4",
"assets/assets/profile.jpg": "5fb61d161328f12c5f07f76967f4b9d3",
"assets/assets/projects/bmi.png": "92ed5f4222c2fb2025d64c77a7e1e1f9",
"assets/assets/projects/bus.png": "10903ad17a89dbcb165e15d709513056",
"assets/assets/projects/hospi.png": "41c9b76a167b9906e7288db5c46568de",
"assets/assets/projects/quiz.png": "295061a8d0eacf1868a5c762d1ae2c33",
"assets/assets/projects/smart.png": "6e335bc1ef72429d9c00e8bab6f07c05",
"assets/assets/resume.png": "5c034d7e425ebb87b3553703cfc2ac75",
"assets/FontManifest.json": "0d648fbcad51ea4cd00cb983ddbccc17",
"assets/fonts/MaterialIcons-Regular.otf": "8f81b39c2550ec15e2c60830362399de",
"assets/NOTICES": "401847cdc2cd1472c1dee5a804cdcc4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2dea6a14df78a2d3afe473b36e523e0a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9eb158b6ef3eedab4f4ff300acc27ae8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90229cf9187f188ded9e0497702b92b6",
"/": "90229cf9187f188ded9e0497702b92b6",
"main.dart.js": "530a0bbb72835cc5cb67c8f05f4ce748",
"manifest.json": "6d1e660cf4b0e3642e0ada9dbce46ad0",
"ngrok.exe": "335e4ec2e7ed5113068c9e092fbe3d22",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
