'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9975bcab59f5dac87fd403ef30bb7a43",
"assets/AssetManifest.bin.json": "c474538534fe48ee311166146b45b100",
"assets/AssetManifest.json": "80f3e8cf710077bda186d079348e3b2c",
"assets/assets/banner-II.jpeg": "9d0afb1341c7786705f0dd32106fe8ae",
"assets/assets/custom_marker.png": "d4b7c19a224c9495bb4a7b76d023890c",
"assets/assets/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/assets/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/assets/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/assets/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/assets/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/assets/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/assets/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/assets/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/assets/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/assets/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/assets/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/assets/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/assets/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/assets/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/assets/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/assets/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/assets/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/assets/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/assets/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/assets/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/assets/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/assets/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/assets/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/assets/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/assets/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/assets/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/assets/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/assets/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/assets/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/assets/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/assets/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/assets/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/assets/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/assets/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/assets/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/assets/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/assets/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/assets/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/assets/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/assets/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/assets/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/assets/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/assets/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/assets/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/assets/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/assets/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/assets/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/assets/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/assets/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/assets/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/assets/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/assets/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/assets/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/assets/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/assets/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/assets/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/assets/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/assets/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/assets/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/assets/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/assets/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/assets/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/assets/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/assets/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/assets/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/assets/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/assets/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/assets/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/assets/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/assets/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/assets/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/assets/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/assets/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/assets/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/assets/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/assets/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/assets/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/assets/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/assets/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/assets/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/assets/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/assets/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/assets/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/assets/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/assets/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/assets/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/assets/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/assets/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/assets/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/assets/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/assets/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/assets/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/assets/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/assets/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/assets/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/assets/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/assets/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/assets/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/assets/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/assets/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/assets/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/assets/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/assets/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/assets/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/assets/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/assets/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/assets/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/assets/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/assets/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/assets/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/assets/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/assets/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/assets/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/assets/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/assets/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/assets/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/assets/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/assets/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/assets/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/assets/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/assets/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/assets/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/assets/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/assets/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/assets/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/assets/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/assets/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/assets/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/assets/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/assets/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/assets/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/assets/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/assets/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/assets/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/assets/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/assets/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/assets/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/assets/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/assets/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/assets/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/assets/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/assets/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/assets/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/assets/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/assets/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/assets/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/assets/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/assets/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/assets/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/assets/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/assets/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/assets/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/assets/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/assets/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/assets/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/assets/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/assets/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/assets/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/assets/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/assets/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/assets/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/assets/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/assets/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/assets/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/assets/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/assets/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/assets/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/assets/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/assets/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/assets/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/assets/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/assets/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/assets/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/assets/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/assets/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/assets/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/assets/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/assets/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/assets/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/assets/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/assets/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/assets/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/assets/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/assets/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/assets/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/assets/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/assets/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/assets/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/assets/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/assets/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/assets/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/assets/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/assets/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/assets/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/assets/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/assets/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/assets/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/assets/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/assets/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/assets/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/assets/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/assets/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/assets/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/assets/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/assets/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/assets/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/assets/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/assets/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/assets/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/assets/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/assets/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/assets/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/assets/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/assets/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/assets/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/assets/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/assets/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/assets/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/assets/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/assets/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/assets/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/assets/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/assets/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/assets/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/assets/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/assets/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/assets/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/assets/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/assets/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/assets/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/assets/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/assets/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/assets/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/assets/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/assets/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/assets/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/assets/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/assets/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/assets/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/assets/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/assets/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/assets/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/assets/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/assets/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/assets/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/assets/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/assets/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/assets/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/assets/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/assets/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/assets/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/assets/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/assets/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/assets/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/assets/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/assets/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/assets/fonts/DancingScript.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/assets/fonts/Kalam-Bold.ttf": "c753b7274d6a2dab75f5c44b8e5c7b25",
"assets/assets/fonts/Kalam-Light.ttf": "4c79496352e7ef6dc4956f60ce095408",
"assets/assets/fonts/Kalam-Regular.ttf": "b3d0cb8286497ecfe76846476495927c",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/icon/app-icon.png": "861631ad3ccd50b228c33b1789dc1920",
"assets/assets/jar-loading.gif": "a0a7f99bbe4eb3f98bc9c957d8dd1756",
"assets/assets/page-not-found.png": "a702ab10b0eaa12104305cef231c7d4c",
"assets/assets/placeholder.png": "1bdef0b5837fe56734fd7d7d93a83ee5",
"assets/FontManifest.json": "9dd3090b4c488a087567fb207fac0253",
"assets/fonts/MaterialIcons-Regular.otf": "fa4d746b877ea0b9dbc0956bf290e14f",
"assets/NOTICES": "97b796e3a3f2860fa099920aa0415fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ed1cf3f1fbbd818aa4090178be1ae98a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3c8dc1a1e1be8ed30bb0de156673cafd",
"icons/Icon-192.png": "9fdb14c1a97fb09f313f9b7466aab42c",
"icons/Icon-512.png": "18890158e92529360e3fcc255254c9f5",
"icons/Icon-maskable-192.png": "9fdb14c1a97fb09f313f9b7466aab42c",
"icons/Icon-maskable-512.png": "18890158e92529360e3fcc255254c9f5",
"index.html": "6100b678b46a180f6ea6ce174b032b62",
"/": "6100b678b46a180f6ea6ce174b032b62",
"main.dart.js": "2f5f9424686d4c192805deb82176c07d",
"manifest.json": "efd798435d63c8198aa2e9b7fe06e269",
"version.json": "1c2a617c85a9a30723a717bbf7edbea0"};
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
