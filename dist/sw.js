if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const c=s=>i(s,r),t={module:{uri:r},exports:o,require:c};e[r]=Promise.all(n.map((s=>t[s]||c(s)))).then((s=>(l(...s),o)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"assets/forwardRefs.a10f9ca4.js",revision:null},{url:"assets/Home.88c87462.css",revision:null},{url:"assets/Home.b9e4c850.js",revision:null},{url:"assets/index.40dc198c.js",revision:null},{url:"assets/index.cb6b7941.css",revision:null},{url:"assets/List.2a4be2ec.js",revision:null},{url:"assets/List.f415e911.css",revision:null},{url:"assets/lists.2d62ba00.js",revision:null},{url:"assets/lists.f7bfd9e0.css",revision:null},{url:"assets/Login.1f6b9e8d.js",revision:null},{url:"assets/Login.48642141.css",revision:null},{url:"assets/Settings.b77884e5.js",revision:null},{url:"assets/Timer.4f957867.js",revision:null},{url:"assets/VContainer.2ac4193f.js",revision:null},{url:"assets/VContainer.37f80755.css",revision:null},{url:"assets/VTextField.8b7a06a2.js",revision:null},{url:"assets/VTextField.f91f0908.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"23ecda079ae9015f76d656953e1a1ae9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/android-chrome-192x192.png",revision:"59a1c6761ea71f892ca278e3c5c4807f"},{url:"img/icons/android-chrome-512x512.png",revision:"265cce7cb304e47419099fc28f6c929b"},{url:"img/icons/apple-touch-icon.png",revision:"4d3a2d3c018a2645ee0d538dc0240f5f"},{url:"favicon.ico",revision:"f81b710a0bb3ccb8b00972c9cd386c75"},{url:"manifest.webmanifest",revision:"26460673230d2e35809387ff26e9fcbc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
