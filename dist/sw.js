if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let l={};const o=e=>i(e,c),t={module:{uri:c},exports:l,require:o};s[c]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"assets/forwardRefs.a10f9ca4.js",revision:null},{url:"assets/Home.4ffd9bb4.css",revision:null},{url:"assets/Home.7e4f5ecd.js",revision:null},{url:"assets/index.b5c6d28e.js",revision:null},{url:"assets/index.fa15d7ce.css",revision:null},{url:"assets/List.6a6dfc13.css",revision:null},{url:"assets/List.956697e0.js",revision:null},{url:"assets/Settings.8cb11ea7.js",revision:null},{url:"assets/Timer.52db1376.js",revision:null},{url:"assets/VContainer.0fd4c2b9.js",revision:null},{url:"assets/VContainer.37f80755.css",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"index.html",revision:"d9bbeba199173427a9835368c8b5443b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/android-chrome-192x192.png",revision:"59a1c6761ea71f892ca278e3c5c4807f"},{url:"img/icons/android-chrome-512x512.png",revision:"265cce7cb304e47419099fc28f6c929b"},{url:"img/icons/apple-touch-icon.png",revision:"4d3a2d3c018a2645ee0d538dc0240f5f"},{url:"favicon.ico",revision:"f81b710a0bb3ccb8b00972c9cd386c75"},{url:"manifest.webmanifest",revision:"0b82ccc2660f0ec82040ece7c922ac85"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
