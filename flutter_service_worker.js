'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "92f5e55b56b22775e9041f4da8033926",
"assets/FontManifest.json": "0b58b539b95de9d213b5ea02a9e59ed3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/assets_music_music1.mp3": "fca7ab15e388ddb2f4fb84faa8b0a774",
"assets/lib/assets/epub/english/Agni-Purana.epub": "fea448b649d712bc939d025d4878ee0d",
"assets/lib/assets/epub/english/Bhavishya-Purana.epub": "45cc2f04ea2378405b27a67de4ecf4af",
"assets/lib/assets/epub/english/Brahma-Purana.epub": "c408aead8f4ef29e1fdfd42207061f04",
"assets/lib/assets/epub/english/Brahma-Vaivart-Purana.epub": "555743fd4925603e8792e35751c655e3",
"assets/lib/assets/epub/english/Brahmananda-Purana.epub": "1531789a058f00988e5ebdb54ffeb859",
"assets/lib/assets/epub/english/Garuda-Purana.epub": "fd56f4f36ce76f208d737bfc6c46b839",
"assets/lib/assets/epub/english/Kurma-Purana.epub": "cc49634bec9f29c6df75dec2d31e5b21",
"assets/lib/assets/epub/english/Linga-Purana.epub": "c185cffb7eaf983ace5b566fd2cca2c4",
"assets/lib/assets/epub/english/Markandeya-Purana.epub": "662252544c9460377058c6764bcb7273",
"assets/lib/assets/epub/english/Matsya-Purana.epub": "416a34f17a967f97c0b90d6fec91a3f6",
"assets/lib/assets/epub/english/Narad-Purana.epub": "0e89a2eda6cb68e6fd1e2d09b77f03e3",
"assets/lib/assets/epub/english/Padma-Purana.epub": "0becaf1e1bb5624bfdcf72025c85f052",
"assets/lib/assets/epub/english/Shiva-Maha-Purana.epub": "e90d6f44b25a04961512b6a87b829015",
"assets/lib/assets/epub/english/Shrimad-Bhagavata-Purana.epub": "f4d5d5662cd626bffb8b94695adbda71",
"assets/lib/assets/epub/english/Skanda-Purana.epub": "afa5d4ca4f1f86b72f913a1eddb4cc94",
"assets/lib/assets/epub/english/Vamana-Purana.epub": "7ba8753e5cc79b6c33bac0d3b3caaaf8",
"assets/lib/assets/epub/english/Varaha-Purana.epub": "03838d8458e254bf6340d8972ec9d41f",
"assets/lib/assets/epub/english/Vishnu-Purana.epub": "d872f92ea38eb8d25180fb6dae7faab0",
"assets/lib/assets/epub/hindi/Brahma-Purana.epub": "e353221adb036687ea5fdba63daa08bd",
"assets/lib/assets/epub/hindi/Garuda-Purana.epub": "715a1def1f282fcb9047a09adb1e52c4",
"assets/lib/assets/epub/hindi/Shiva-Maha-Purana.epub": "04525ce0e43018589729fc5a8dd8cff9",
"assets/lib/assets/epub/hindi/Vishnu-Purana.epub": "d6fa2465a477b427b371f7826c10afac",
"assets/lib/assets/fonts/english/Hanuman-Light.ttf": "c40229474c002ec32540da57cbc8cd1b",
"assets/lib/assets/fonts/english/Poly-Regular.ttf": "a28e954c07d9c7318f9554fa25a8c086",
"assets/lib/assets/images/41846633-lord-vishnu-a-hindu-god.webp": "a144c25c33d1516da2e221d43c99c761",
"assets/lib/assets/images/agni.jfif": "009d61e00ea9bd05c22ded4cdecf9f89",
"assets/lib/assets/images/artis/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/lib/assets/images/artis/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/lib/assets/images/artis/ganpati1.png": "410b049c9b3112f1cd7a2aa9d9e9ec09",
"assets/lib/assets/images/artis/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/lib/assets/images/artis/img.png": "a48ea701c26cce85f6dfb044bfab17ae",
"assets/lib/assets/images/artis/Lucifer.jpeg": "2f6a3a8b1be2a479bfe6e5f22f471ef5",
"assets/lib/assets/images/artis/mahabharata.png": "7a3c73cb6f5a588ca60c6a117bdeb3c3",
"assets/lib/assets/images/artis/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/lib/assets/images/artis/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/lib/assets/images/artis/ramayan__1_-removebg-preview.png": "ff2ccb2d9b1f587884f61d38a904386f",
"assets/lib/assets/images/artis/shiv.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/lib/assets/images/Bhagavata.jpg": "be80cfa9d2ebecf90aca722c15680f21",
"assets/lib/assets/images/bhavishya.jfif": "d2d67aff78a328acd799771fa8428792",
"assets/lib/assets/images/bhrama.jpg": "abdaeef0d2b00e99f19e82cf0b19da35",
"assets/lib/assets/images/bookTemplate.png": "79b4dbc9761b9d4b66a86d6090b1840b",
"assets/lib/assets/images/bookTemplate350x500.png": "ef19d4cfdbf36cc8bc20cbc50f0efa69",
"assets/lib/assets/images/brahmavaivarta.jfif": "be05e950eac1d47ec8cf28c9d2b18721",
"assets/lib/assets/images/download.jfif": "d185bca6fb55ddf209655edc222adc8d",
"assets/lib/assets/images/garuda.jpg": "1f1429894d6da0b9a9daee17d98235b7",
"assets/lib/assets/images/Gita1.jpg": "c6e9df54b7cfa78d0187b1223e47b6cc",
"assets/lib/assets/images/katha1.png": "12afd12ed1316465beed0b07ec7aaa7c",
"assets/lib/assets/images/kurma.jfif": "7550d1391201e8310afd9f372daccb6b",
"assets/lib/assets/images/kurma.png": "ead68e9d053203e81294060819db5525",
"assets/lib/assets/images/lakmi.jfif": "776938b23bd9d245ff5056c1aaa21dec",
"assets/lib/assets/images/linga.jfif": "aedcdb0a88eb5676b400130cbdbc2652",
"assets/lib/assets/images/logo.png": "9b5e28fd28ac84b9b877dc6bd6a34430",
"assets/lib/assets/images/lord-brahma-vector-character.jpg": "a7daf9a6bb1605fb2eb8789d23c62541",
"assets/lib/assets/images/maha.jfif": "6ebf3cf7ce4d30ac65a1b5f714b084ab",
"assets/lib/assets/images/Mahabharat1.jpg": "cd0f97afdcffff6efc37ab0327f3296f",
"assets/lib/assets/images/Mahadev.jpg": "779882d8a8b857ddd335c575945f35a9",
"assets/lib/assets/images/markandeya.jpg": "a1746bba82cb29eecf1eb5d1446b2b26",
"assets/lib/assets/images/matsiya.jpg": "3913ed9777167ab32a5dd00cd3f87938",
"assets/lib/assets/images/padmapuran.jpeg": "df27b54d064e70be82a6c913f3a05708",
"assets/lib/assets/images/place_holder/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/lib/assets/images/place_holder/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/lib/assets/images/place_holder/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/lib/assets/images/place_holder/Lucifer.jpeg": "2f6a3a8b1be2a479bfe6e5f22f471ef5",
"assets/lib/assets/images/place_holder/mahabharata.png": "896b7d9488d0ce35852f3bca1af849f5",
"assets/lib/assets/images/place_holder/mahabharata.png~": "7a3c73cb6f5a588ca60c6a117bdeb3c3",
"assets/lib/assets/images/place_holder/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/lib/assets/images/place_holder/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/lib/assets/images/place_holder/ramayan__1_-removebg-preview.png": "e12083fbbbe9056185d6c1e576066e64",
"assets/lib/assets/images/place_holder/ramayan__1_-removebg-preview.png~": "ff2ccb2d9b1f587884f61d38a904386f",
"assets/lib/assets/images/purana.jpg": "d70b78b18eb53f21025378613173df01",
"assets/lib/assets/images/ram1.jpg": "14bcfdc1dccc714ec768ce0ea8a5b058",
"assets/lib/assets/images/Ramayaan1.jpg": "0dbf8caed30851b72b1246209affa5f7",
"assets/lib/assets/images/shiv.jpg": "b517670deb5875fb82ef4e4bbc415388",
"assets/lib/assets/images/skanda.jfif": "e7b15e04653d381c4cac6be7d3bf626c",
"assets/lib/assets/images/vamana.jpg": "ae208eb48d2627dff63bdf2e79399da7",
"assets/lib/assets/images/Varaha.jpg": "4e60528060098f8272d462b044c313dc",
"assets/lib/assets/markdown/artis/allmds/ambe_aarti.md": "0aa08d1e58df9514e898272a0dae5fc6",
"assets/lib/assets/markdown/artis/allmds/bala_g_aarti.md": "7d152b08dcf92cf657a9b15ddac38f85",
"assets/lib/assets/markdown/artis/allmds/bhrama_aarti.md": "92479dc27bcc419f6871044dc3705c9f",
"assets/lib/assets/markdown/artis/allmds/durga_aarti.md": "17a62630a586a58af12257929925ee49",
"assets/lib/assets/markdown/artis/allmds/ganesh_aarti.md": "2321111235ce5859eee478f3b7450ee9",
"assets/lib/assets/markdown/artis/allmds/ganga_aarti.md": "b6c44b03ebbf760bd07469d77838cb37",
"assets/lib/assets/markdown/artis/allmds/ganpati_aarti.md": "05304f9f623149423d5501ec1c150346",
"assets/lib/assets/markdown/artis/allmds/gayatri_aarti.md": "72c4d70a85d0bb5f8d4ecd4027cbfec9",
"assets/lib/assets/markdown/artis/allmds/gouri_aarti.md": "6809d58639656a4479659e592df29fd3",
"assets/lib/assets/markdown/artis/allmds/hanumaan_aarti.md": "a12ecb0160b65d2843ae5b7b09d9be4c",
"assets/lib/assets/markdown/artis/allmds/hello.md": "9a75aa46323a597392990bc93ebc1874",
"assets/lib/assets/markdown/artis/allmds/jagdish_aarti.md": "8a1ddac9fab60a3d51e450b63bb75630",
"assets/lib/assets/markdown/artis/allmds/krishna_aarti.md": "e5fe3475c91cfb226d298fe072ab8100",
"assets/lib/assets/markdown/artis/allmds/lakshmi_aarti.md": "482d54583b8eeae5a8070a577eb3df80",
"assets/lib/assets/markdown/artis/allmds/mahadev_aarti.md": "e2ab799244205b52176a388283276cb9",
"assets/lib/assets/markdown/artis/allmds/mahakali_aarti.md": "b7400a0dfbe9521e38ec8ab61fb8538a",
"assets/lib/assets/markdown/artis/allmds/paarvati_aarti.md": "4063344c52e2f862b9819a05417a0e9f",
"assets/lib/assets/markdown/artis/allmds/parshuram_aarti.md": "f28a24c8a2660187a39f5fad24f238d2",
"assets/lib/assets/markdown/artis/allmds/radha_aarti.md": "feb0d771615a3b7ce7284826c2e25888",
"assets/lib/assets/markdown/artis/allmds/ram_aarti.md": "24f6f8c96ed4654e6d390fde08018b7c",
"assets/lib/assets/markdown/artis/allmds/santoshi_aarti.md": "7bc4df2884e94705f28a8323e4455318",
"assets/lib/assets/markdown/artis/allmds/saraswati_aarti.md": "976bf6274d08238c271c1b280dc33201",
"assets/lib/assets/markdown/artis/allmds/satyanarayan_aarti.md": "06283e327eb78634a3e4ffc552221ad9",
"assets/lib/assets/markdown/artis/allmds/shanidev_aarti.md": "5d8f4621e3059e2c3436aff2076945c6",
"assets/lib/assets/markdown/artis/allmds/sharda_aarti.md": "090b18f9307be77e7140bb4e4642b755",
"assets/lib/assets/markdown/artis/allmds/shitla_aarti.md": "8de590bfc6751b1705d8f242bb58ba05",
"assets/lib/assets/markdown/artis/allmds/vaishnu_aarti.md": "c6e6329559fb97737807b2034046051d",
"assets/lib/assets/markdown/artis/allmds/vishkarma_aarti.md": "b02b1c60c40af69fc27d0537e17a7a2d",
"assets/lib/assets/markdown/artis/allmds/vishnu_aarti.md": "b3dfaa6245e44516963a0114426940f7",
"assets/lib/assets/markdown/artis/ambe_aarti.md": "458bc39845c78b38abe1f744462e22ee",
"assets/lib/assets/markdown/artis/assets_music_music1.mp3": "fca7ab15e388ddb2f4fb84faa8b0a774",
"assets/lib/assets/markdown/artis/bala_g_aarti.md": "7242fd08cc95fc87c668e62b9cb6d220",
"assets/lib/assets/markdown/artis/bhrama_aarti.md": "59aad4dc9550864948039ca85c669408",
"assets/lib/assets/markdown/artis/durga_aarti.md": "35497e9aaf91d4632945f001309da00e",
"assets/lib/assets/markdown/artis/ganesh_aarti.md": "0a915358cd6b85a51e2123dd28e75e78",
"assets/lib/assets/markdown/artis/ganga_aarti.md": "23d4d5ace3f2ea3327c808c57831296a",
"assets/lib/assets/markdown/artis/ganpati_aarti.md": "00dd21a06cb6b7a2a39e9915c6554d09",
"assets/lib/assets/markdown/artis/gayatri_aarti.md": "4ea229115a41ad23afbbe4b09f9eac23",
"assets/lib/assets/markdown/artis/gouri_aarti.md": "8c8d3d9d496bf3b5cdc17a6dc4987101",
"assets/lib/assets/markdown/artis/hanumaan_aarti.md": "059c96c8a8fd3beb069be1cce9934e69",
"assets/lib/assets/markdown/artis/hello.md": "9bd1c047fda94d53a245397cf39d2471",
"assets/lib/assets/markdown/artis/jagdish_aarti.md": "303567d45e094835f5a1dd5cf23f1b7d",
"assets/lib/assets/markdown/artis/krishna_aarti.md": "153fbe6d0e4db9831bcdddae1da3cd37",
"assets/lib/assets/markdown/artis/lakshmi_aarti.md": "fb243b0aaafc7bc251d36374bb249019",
"assets/lib/assets/markdown/artis/mahadev_aarti.md": "ec615a46f9097dd24dbd9ea14818a869",
"assets/lib/assets/markdown/artis/mahakali_aarti.md": "2ec03af30de58e82d4ee55fd265a1cd6",
"assets/lib/assets/markdown/artis/paarvati_aarti.md": "ee6716a505b58fd2cd0b3a55e1f57131",
"assets/lib/assets/markdown/artis/parshuram_aarti.md": "361c8d7fd948c26e3d6d876a18d8702d",
"assets/lib/assets/markdown/artis/radha_aarti.md": "560e229b50db1c70eca59a4c47d740f6",
"assets/lib/assets/markdown/artis/ram_aarti.md": "380563176c5a8e0547babba24664e158",
"assets/lib/assets/markdown/artis/santoshi_aarti.md": "172085e5536523c064208a71b65d6c38",
"assets/lib/assets/markdown/artis/saraswati_aarti.md": "072fdd4734e8a8ac884d6e9bffaa691e",
"assets/lib/assets/markdown/artis/satyanarayan_aarti.md": "e10c5558abf5586eef884b58f6372b07",
"assets/lib/assets/markdown/artis/shanidev_aarti.md": "2b0a3ef4aead197fca3769b181eba270",
"assets/lib/assets/markdown/artis/sharda_aarti.md": "3bc717a0dbd99fe7fda87a0e78c3d7c9",
"assets/lib/assets/markdown/artis/shitla_aarti.md": "f983e2edf84ce0b97fe1e00d65d9f1ab",
"assets/lib/assets/markdown/artis/vaishnu_aarti.md": "6348ca0bca1fb69b41f13c6864edf06e",
"assets/lib/assets/markdown/artis/vishkarma_aarti.md": "bb844acee3fc3e0187f4f47c36f90d0d",
"assets/lib/assets/markdown/artis/vishnu_aarti.md": "9a3fff06cf136b6ae4a7bcfda56b510b",
"assets/NOTICES": "6c8fdb67d93ef874e5f8ec6f493c0921",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55bac01e69626b30f686bd539538dee6",
"/": "55bac01e69626b30f686bd539538dee6",
"main.dart.js": "6f2a6b559344edb78a18352dd17d0d41",
"manifest.json": "bba71ec183593b70d34fb3a960413c8d",
"splash/img/dark-1x.png": "1ad8f9ab4fd45a7bd733f778119e8fbc",
"splash/img/dark-2x.png": "215999dfadf3abe34358c88925806227",
"splash/img/dark-3x.png": "fd1d168c86f58cb986bfc1ab1416e1da",
"splash/img/dark-4x.png": "b77b7778bf1f67e42bd1c8da00c0877f",
"splash/img/light-1x.png": "1ad8f9ab4fd45a7bd733f778119e8fbc",
"splash/img/light-2x.png": "215999dfadf3abe34358c88925806227",
"splash/img/light-3x.png": "fd1d168c86f58cb986bfc1ab1416e1da",
"splash/img/light-4x.png": "b77b7778bf1f67e42bd1c8da00c0877f",
"splash/style.css": "06d70117acb4e82193eba13bc7a765d2",
"version.json": "e65131d93f0aadd31b580071f7a3a26f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
