if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>i(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),o)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"assets/easing.6e2d7abd.js",revision:null},{url:"assets/forwardRefs.2d67e586.js",revision:null},{url:"assets/Home.2b4fa14d.js",revision:null},{url:"assets/Home.ea0fcff1.css",revision:null},{url:"assets/index.a11c7563.js",revision:null},{url:"assets/index.c44d41ca.css",revision:null},{url:"assets/List.1f24939b.js",revision:null},{url:"assets/List.6464b193.css",revision:null},{url:"assets/lists.2418011a.js",revision:null},{url:"assets/lists.f7bfd9e0.css",revision:null},{url:"assets/Login.0dc4e570.css",revision:null},{url:"assets/Login.8152f8af.js",revision:null},{url:"assets/Register.168ea3f3.js",revision:null},{url:"assets/Register.b3d8793b.css",revision:null},{url:"assets/Settings.4b38ccac.js",revision:null},{url:"assets/Settings.7d76e4a4.css",revision:null},{url:"assets/TextField.1ec4cebe.js",revision:null},{url:"assets/TextField.53f56c42.css",revision:null},{url:"assets/Timer.d7a36556.js",revision:null},{url:"assets/VContainer.37f80755.css",revision:null},{url:"assets/VContainer.c32c7f03.js",revision:null},{url:"assets/VForm.5753d9f9.js",revision:null},{url:"assets/VOverlay.2c01b8e6.css",revision:null},{url:"assets/VOverlay.36fd8907.js",revision:null},{url:"assets/VTextField.84878233.js",revision:null},{url:"assets/VTextField.f91f0908.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"62083e64140a9d71502da02fde15bd3b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/android-chrome-192x192.png",revision:"59a1c6761ea71f892ca278e3c5c4807f"},{url:"img/icons/android-chrome-512x512.png",revision:"265cce7cb304e47419099fc28f6c929b"},{url:"img/icons/apple-touch-icon.png",revision:"4d3a2d3c018a2645ee0d538dc0240f5f"},{url:"favicon.ico",revision:"f81b710a0bb3ccb8b00972c9cd386c75"},{url:"manifest.webmanifest",revision:"26460673230d2e35809387ff26e9fcbc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
