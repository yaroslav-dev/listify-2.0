if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>i(s,n),t={module:{uri:n},exports:o,require:u};e[n]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"assets/easing.6e2d7abd.js",revision:null},{url:"assets/form.de733d38.js",revision:null},{url:"assets/forwardRefs.2d67e586.js",revision:null},{url:"assets/Home.6c85e072.js",revision:null},{url:"assets/Home.ea0fcff1.css",revision:null},{url:"assets/index.c44d41ca.css",revision:null},{url:"assets/index.f308811b.js",revision:null},{url:"assets/List.03882037.js",revision:null},{url:"assets/List.d720ec69.css",revision:null},{url:"assets/lists.2732ea32.js",revision:null},{url:"assets/lists.f7bfd9e0.css",revision:null},{url:"assets/Login.376cd75e.js",revision:null},{url:"assets/Login.9acc033e.css",revision:null},{url:"assets/persist.53f56c42.css",revision:null},{url:"assets/persist.bc3fa1ae.js",revision:null},{url:"assets/Register.6165d82d.css",revision:null},{url:"assets/Register.e91b3d0c.js",revision:null},{url:"assets/Settings.7d76e4a4.css",revision:null},{url:"assets/Settings.93b0f2ae.js",revision:null},{url:"assets/Timer.2b785cfb.js",revision:null},{url:"assets/VContainer.37f80755.css",revision:null},{url:"assets/VContainer.6e1f9727.js",revision:null},{url:"assets/VForm.818f64d6.js",revision:null},{url:"assets/VOverlay.2c01b8e6.css",revision:null},{url:"assets/VOverlay.6a98be85.js",revision:null},{url:"assets/VTextField.e624b01f.js",revision:null},{url:"assets/VTextField.f91f0908.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"6288ad4aaea725846ed89fce8fe9b766"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/android-chrome-192x192.png",revision:"59a1c6761ea71f892ca278e3c5c4807f"},{url:"img/icons/android-chrome-512x512.png",revision:"265cce7cb304e47419099fc28f6c929b"},{url:"img/icons/apple-touch-icon.png",revision:"4d3a2d3c018a2645ee0d538dc0240f5f"},{url:"favicon.ico",revision:"f81b710a0bb3ccb8b00972c9cd386c75"},{url:"manifest.webmanifest",revision:"26460673230d2e35809387ff26e9fcbc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
