(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function nf(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Mc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Qe(s)?$C(s):Mc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Qe(t))return t;if(He(t))return t}}const LC=/;(?![^(]*\))/g,MC=/:([^]+)/,FC=/\/\*.*?\*\//gs;function $C(t){const e={};return t.replace(FC,"").split(LC).forEach(n=>{if(n){const s=n.split(MC);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function sf(t){let e="";if(Qe(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const s=sf(t[n]);s&&(e+=s+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const UC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VC=nf(UC);function b_(t){return!!t||t===""}const BC=t=>Qe(t)?t:t==null?"":ie(t)||He(t)&&(t.toString===C_||!de(t.toString))?JSON.stringify(t,E_,2):String(t),E_=(t,e)=>e&&e.__v_isRef?E_(t,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:I_(e)?{[`Set(${e.size})`]:[...e.values()]}:He(e)&&!ie(e)&&!S_(e)?String(e):e,Ve={},ir=[],In=()=>{},jC=()=>!1,HC=/^on[^a-z]/,Fc=t=>HC.test(t),rf=t=>t.startsWith("onUpdate:"),gt=Object.assign,of=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},WC=Object.prototype.hasOwnProperty,Se=(t,e)=>WC.call(t,e),ie=Array.isArray,rr=t=>$c(t)==="[object Map]",I_=t=>$c(t)==="[object Set]",de=t=>typeof t=="function",Qe=t=>typeof t=="string",af=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",T_=t=>He(t)&&de(t.then)&&de(t.catch),C_=Object.prototype.toString,$c=t=>C_.call(t),zC=t=>$c(t).slice(8,-1),S_=t=>$c(t)==="[object Object]",lf=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sl=nf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qC=/-(\w)/g,cn=Uc(t=>t.replace(qC,(e,n)=>n?n.toUpperCase():"")),KC=/\B([A-Z])/g,Pi=Uc(t=>t.replace(KC,"-$1").toLowerCase()),Dr=Uc(t=>t.charAt(0).toUpperCase()+t.slice(1)),kl=Uc(t=>t?`on${Dr(t)}`:""),Vo=(t,e)=>!Object.is(t,e),Ku=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},GC=t=>{const e=parseFloat(t);return isNaN(e)?t:e},YC=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Sg;const QC=()=>Sg||(Sg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Yt;class k_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Vc(t){return new k_(t)}function XC(t,e=Yt){e&&e.active&&e.effects.push(t)}function A_(){return Yt}function cf(t){Yt&&Yt.cleanups.push(t)}const uf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},R_=t=>(t.w&Ps)>0,N_=t=>(t.n&Ps)>0,JC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ps},ZC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];R_(i)&&!N_(i)?i.delete(t):e[n++]=i,i.w&=~Ps,i.n&=~Ps}e.length=n}},Bl=new WeakMap;let go=0,Ps=1;const Fh=30;let mn;const pi=Symbol(""),$h=Symbol("");class hf{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,XC(this,s)}run(){if(!this.active)return this.fn();let e=mn,n=Cs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mn,mn=this,Cs=!0,Ps=1<<++go,go<=Fh?JC(this):kg(this),this.fn()}finally{go<=Fh&&ZC(this),Ps=1<<--go,mn=this.parent,Cs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mn===this?this.deferStop=!0:this.active&&(kg(this),this.onStop&&this.onStop(),this.active=!1)}}function kg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cs=!0;const O_=[];function Pr(){O_.push(Cs),Cs=!1}function Lr(){const t=O_.pop();Cs=t===void 0?!0:t}function qt(t,e,n){if(Cs&&mn){let s=Bl.get(t);s||Bl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=uf()),x_(i)}}function x_(t,e){let n=!1;go<=Fh?N_(t)||(t.n|=Ps,n=!R_(t)):n=!t.has(mn),n&&(t.add(mn),mn.deps.push(t))}function ns(t,e,n,s,i,r){const o=Bl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?lf(n)&&a.push(o.get("length")):(a.push(o.get(pi)),rr(t)&&a.push(o.get($h)));break;case"delete":ie(t)||(a.push(o.get(pi)),rr(t)&&a.push(o.get($h)));break;case"set":rr(t)&&a.push(o.get(pi));break}if(a.length===1)a[0]&&Uh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Uh(uf(l))}}function Uh(t,e){const n=ie(t)?t:[...t];for(const s of n)s.computed&&Ag(s);for(const s of n)s.computed||Ag(s)}function Ag(t,e){(t!==mn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function eS(t,e){var n;return(n=Bl.get(t))===null||n===void 0?void 0:n.get(e)}const tS=nf("__proto__,__v_isRef,__isVue"),D_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(af)),nS=df(),sS=df(!1,!0),iS=df(!0),Rg=rS();function rS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let r=0,o=this.length;r<o;r++)qt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pr();const s=ce(this)[e].apply(this,n);return Lr(),s}}),t}function oS(t){const e=ce(this);return qt(e,"has",t),e.hasOwnProperty(t)}function df(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?ES:$_:e?F_:M_).get(s))return s;const o=ie(s);if(!t){if(o&&Se(Rg,i))return Reflect.get(Rg,i,r);if(i==="hasOwnProperty")return oS}const a=Reflect.get(s,i,r);return(af(i)?D_.has(i):tS(i))||(t||qt(s,"get",i),e)?a:Pe(a)?o&&lf(i)?a:a.value:He(a)?t?jc(a):Nt(a):a}}const aS=P_(),lS=P_(!0);function P_(t=!1){return function(n,s,i,r){let o=n[s];if(mr(o)&&Pe(o)&&!Pe(i))return!1;if(!t&&(!jl(i)&&!mr(i)&&(o=ce(o),i=ce(i)),!ie(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=ie(n)&&lf(s)?Number(s)<n.length:Se(n,s),l=Reflect.set(n,s,i,r);return n===ce(r)&&(a?Vo(i,o)&&ns(n,"set",s,i):ns(n,"add",s,i)),l}}function cS(t,e){const n=Se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ns(t,"delete",e,void 0),s}function uS(t,e){const n=Reflect.has(t,e);return(!af(e)||!D_.has(e))&&qt(t,"has",e),n}function hS(t){return qt(t,"iterate",ie(t)?"length":pi),Reflect.ownKeys(t)}const L_={get:nS,set:aS,deleteProperty:cS,has:uS,ownKeys:hS},dS={get:iS,set(t,e){return!0},deleteProperty(t,e){return!0}},fS=gt({},L_,{get:sS,set:lS}),ff=t=>t,Bc=t=>Reflect.getPrototypeOf(t);function Za(t,e,n=!1,s=!1){t=t.__v_raw;const i=ce(t),r=ce(e);n||(e!==r&&qt(i,"get",e),qt(i,"get",r));const{has:o}=Bc(i),a=s?ff:n?mf:Bo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function el(t,e=!1){const n=this.__v_raw,s=ce(n),i=ce(t);return e||(t!==i&&qt(s,"has",t),qt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function tl(t,e=!1){return t=t.__v_raw,!e&&qt(ce(t),"iterate",pi),Reflect.get(t,"size",t)}function Ng(t){t=ce(t);const e=ce(this);return Bc(e).has.call(e,t)||(e.add(t),ns(e,"add",t,t)),this}function Og(t,e){e=ce(e);const n=ce(this),{has:s,get:i}=Bc(n);let r=s.call(n,t);r||(t=ce(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Vo(e,o)&&ns(n,"set",t,e):ns(n,"add",t,e),this}function xg(t){const e=ce(this),{has:n,get:s}=Bc(e);let i=n.call(e,t);i||(t=ce(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ns(e,"delete",t,void 0),r}function Dg(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&ns(t,"clear",void 0,void 0),n}function nl(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ce(o),l=e?ff:t?mf:Bo;return!t&&qt(a,"iterate",pi),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function sl(t,e,n){return function(...s){const i=this.__v_raw,r=ce(i),o=rr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ff:e?mf:Bo;return!e&&qt(r,"iterate",l?$h:pi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ds(t){return function(...e){return t==="delete"?!1:this}}function pS(){const t={get(r){return Za(this,r)},get size(){return tl(this)},has:el,add:Ng,set:Og,delete:xg,clear:Dg,forEach:nl(!1,!1)},e={get(r){return Za(this,r,!1,!0)},get size(){return tl(this)},has:el,add:Ng,set:Og,delete:xg,clear:Dg,forEach:nl(!1,!0)},n={get(r){return Za(this,r,!0)},get size(){return tl(this,!0)},has(r){return el.call(this,r,!0)},add:ds("add"),set:ds("set"),delete:ds("delete"),clear:ds("clear"),forEach:nl(!0,!1)},s={get(r){return Za(this,r,!0,!0)},get size(){return tl(this,!0)},has(r){return el.call(this,r,!0)},add:ds("add"),set:ds("set"),delete:ds("delete"),clear:ds("clear"),forEach:nl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=sl(r,!1,!1),n[r]=sl(r,!0,!1),e[r]=sl(r,!1,!0),s[r]=sl(r,!0,!0)}),[t,n,e,s]}const[gS,mS,vS,yS]=pS();function pf(t,e){const n=e?t?yS:vS:t?mS:gS;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Se(n,i)&&i in s?n:s,i,r)}const _S={get:pf(!1,!1)},wS={get:pf(!1,!0)},bS={get:pf(!0,!1)},M_=new WeakMap,F_=new WeakMap,$_=new WeakMap,ES=new WeakMap;function IS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TS(t){return t.__v_skip||!Object.isExtensible(t)?0:IS(zC(t))}function Nt(t){return mr(t)?t:gf(t,!1,L_,_S,M_)}function CS(t){return gf(t,!1,fS,wS,F_)}function jc(t){return gf(t,!0,dS,bS,$_)}function gf(t,e,n,s,i){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=TS(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ss(t){return mr(t)?Ss(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function jl(t){return!!(t&&t.__v_isShallow)}function U_(t){return Ss(t)||mr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function vr(t){return Vl(t,"__v_skip",!0),t}const Bo=t=>He(t)?Nt(t):t,mf=t=>He(t)?jc(t):t;function V_(t){Cs&&mn&&(t=ce(t),x_(t.dep||(t.dep=uf())))}function B_(t,e){t=ce(t);const n=t.dep;n&&Uh(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function X(t){return j_(t,!1)}function vf(t){return j_(t,!0)}function j_(t,e){return Pe(t)?t:new SS(t,e)}class SS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Bo(e)}get value(){return V_(this),this._value}set value(e){const n=this.__v_isShallow||jl(e)||mr(e);e=n?e:ce(e),Vo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bo(e),B_(this))}}function Je(t){return Pe(t)?t.value:t}const kS={get:(t,e,n)=>Je(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function H_(t){return Ss(t)?t:new Proxy(t,kS)}function Hc(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=it(t,n);return e}class AS{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return eS(ce(this._object),this._key)}}function it(t,e,n){const s=t[e];return Pe(s)?s:new AS(t,e,n)}var W_;class RS{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[W_]=!1,this._dirty=!0,this.effect=new hf(e,()=>{this._dirty||(this._dirty=!0,B_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ce(this);return V_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}W_="__v_isReadonly";function NS(t,e,n=!1){let s,i;const r=de(t);return r?(s=t,i=In):(s=t.get,i=t.set),new RS(s,i,r||!i,n)}function ks(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Wc(r,e,n)}return i}function ln(t,e,n,s){if(de(t)){const r=ks(t,e,n,s);return r&&T_(r)&&r.catch(o=>{Wc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ln(t[r],e,n,s));return i}function Wc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ks(l,null,10,[t,o,a]);return}}OS(t,n,i,s)}function OS(t,e,n,s=!0){console.error(t)}let jo=!1,Vh=!1;const Ot=[];let Dn=0;const or=[];let Yn=null,si=0;const z_=Promise.resolve();let yf=null;function Bs(t){const e=yf||z_;return t?e.then(this?t.bind(this):t):e}function xS(t){let e=Dn+1,n=Ot.length;for(;e<n;){const s=e+n>>>1;Ho(Ot[s])<t?e=s+1:n=s}return e}function _f(t){(!Ot.length||!Ot.includes(t,jo&&t.allowRecurse?Dn+1:Dn))&&(t.id==null?Ot.push(t):Ot.splice(xS(t.id),0,t),q_())}function q_(){!jo&&!Vh&&(Vh=!0,yf=z_.then(G_))}function DS(t){const e=Ot.indexOf(t);e>Dn&&Ot.splice(e,1)}function PS(t){ie(t)?or.push(...t):(!Yn||!Yn.includes(t,t.allowRecurse?si+1:si))&&or.push(t),q_()}function Pg(t,e=jo?Dn+1:0){for(;e<Ot.length;e++){const n=Ot[e];n&&n.pre&&(Ot.splice(e,1),e--,n())}}function K_(t){if(or.length){const e=[...new Set(or)];if(or.length=0,Yn){Yn.push(...e);return}for(Yn=e,Yn.sort((n,s)=>Ho(n)-Ho(s)),si=0;si<Yn.length;si++)Yn[si]();Yn=null,si=0}}const Ho=t=>t.id==null?1/0:t.id,LS=(t,e)=>{const n=Ho(t)-Ho(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function G_(t){Vh=!1,jo=!0,Ot.sort(LS);const e=In;try{for(Dn=0;Dn<Ot.length;Dn++){const n=Ot[Dn];n&&n.active!==!1&&ks(n,null,14)}}finally{Dn=0,Ot.length=0,K_(),jo=!1,yf=null,(Ot.length||or.length)&&G_()}}function MS(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ve;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ve;d&&(i=n.map(f=>Qe(f)?f.trim():f)),h&&(i=n.map(GC))}let a,l=s[a=kl(e)]||s[a=kl(cn(e))];!l&&r&&(l=s[a=kl(Pi(e))]),l&&ln(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ln(c,t,6,i)}}function Y_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!de(t)){const l=c=>{const u=Y_(c,e,!0);u&&(a=!0,gt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(He(t)&&s.set(t,null),null):(ie(r)?r.forEach(l=>o[l]=null):gt(o,r),He(t)&&s.set(t,o),o)}function zc(t,e){return!t||!Fc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Pi(e))||Se(t,e))}let Xt=null,qc=null;function Hl(t){const e=Xt;return Xt=t,qc=t&&t.type.__scopeId||null,e}function jH(t){qc=t}function HH(){qc=null}function nt(t,e=Xt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zg(-1);const r=Hl(e);let o;try{o=t(...i)}finally{Hl(r),s._d&&zg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Gu(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:m}=t;let y,w;const E=Hl(t);try{if(n.shapeFlag&4){const D=i||s;y=xn(u.call(D,D,h,r,f,d,p)),w=l}else{const D=e;y=xn(D.length>1?D(r,{attrs:l,slots:a,emit:c}):D(r,null)),w=e.props?l:FS(l)}}catch(D){Co.length=0,Wc(D,t,1),y=b(Tn)}let C=y;if(w&&m!==!1){const D=Object.keys(w),{shapeFlag:N}=C;D.length&&N&7&&(o&&D.some(rf)&&(w=$S(w,o)),C=Ls(C,w))}return n.dirs&&(C=Ls(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,Hl(E),y}const FS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fc(n))&&((e||(e={}))[n]=t[n]);return e},$S=(t,e)=>{const n={};for(const s in t)(!rf(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function US(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Lg(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!zc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Lg(s,o,c):!0:!!o;return!1}function Lg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!zc(n,r))return!0}return!1}function VS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const BS=t=>t.__isSuspense;function jS(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):PS(t)}function Wt(t,e){if(Ze){let n=Ze.provides;const s=Ze.parent&&Ze.parent.provides;s===n&&(n=Ze.provides=Object.create(s)),n[t]=e}}function Le(t,e,n=!1){const s=Ze||Xt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&de(e)?e.call(s.proxy):e}}function ba(t,e){return wf(t,null,e)}const il={};function Ye(t,e,n){return wf(t,e,n)}function wf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ve){const a=A_()===(Ze==null?void 0:Ze.scope)?Ze:null;let l,c=!1,u=!1;if(Pe(t)?(l=()=>t.value,c=jl(t)):Ss(t)?(l=()=>t,s=!0):ie(t)?(u=!0,c=t.some(C=>Ss(C)||jl(C)),l=()=>t.map(C=>{if(Pe(C))return C.value;if(Ss(C))return oi(C);if(de(C))return ks(C,a,2)})):de(t)?e?l=()=>ks(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ln(t,a,3,[d])}:l=In,e&&s){const C=l;l=()=>oi(C())}let h,d=C=>{h=w.onStop=()=>{ks(C,a,4)}},f;if(Ko)if(d=In,e?n&&ln(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const C=Nk();f=C.__watcherHandles||(C.__watcherHandles=[])}else return In;let p=u?new Array(t.length).fill(il):il;const m=()=>{if(!!w.active)if(e){const C=w.run();(s||c||(u?C.some((D,N)=>Vo(D,p[N])):Vo(C,p)))&&(h&&h(),ln(e,a,3,[C,p===il?void 0:u&&p[0]===il?[]:p,d]),p=C)}else w.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>jt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>_f(m));const w=new hf(l,y);e?n?m():p=w.run():i==="post"?jt(w.run.bind(w),a&&a.suspense):w.run();const E=()=>{w.stop(),a&&a.scope&&of(a.scope.effects,w)};return f&&f.push(E),E}function HS(t,e,n){const s=this.proxy,i=Qe(t)?t.includes(".")?Q_(s,t):()=>s[t]:t.bind(s,s);let r;de(e)?r=e:(r=e.handler,n=e);const o=Ze;yr(this);const a=wf(i,r.bind(s),n);return o?yr(o):gi(),a}function Q_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function oi(t,e){if(!He(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))oi(t.value,e);else if(ie(t))for(let n=0;n<t.length;n++)oi(t[n],e);else if(I_(t)||rr(t))t.forEach(n=>{oi(n,e)});else if(S_(t))for(const n in t)oi(t[n],e);return t}function X_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Li(()=>{t.isMounted=!0}),kn(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],WS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},setup(t,{slots:e}){const n=Fr(),s=X_();let i;return()=>{const r=e.default&&bf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Tn){o=m;break}}const a=ce(t),{mode:l}=a;if(s.isLeaving)return Yu(o);const c=Mg(o);if(!c)return Yu(o);const u=Wo(c,a,s,n);zo(c,u);const h=n.subTree,d=h&&Mg(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,f=!0)}if(d&&d.type!==Tn&&(!ii(c,d)||f)){const m=Wo(d,a,s,n);if(zo(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Yu(o);l==="in-out"&&c.type!==Tn&&(m.delayLeave=(y,w,E)=>{const C=Z_(s,d);C[String(d.key)]=d,y._leaveCb=()=>{w(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},J_=WS;function Z_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Wo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:w,onAppearCancelled:E}=e,C=String(t.key),D=Z_(n,t),N=(_,F)=>{_&&ln(_,s,9,F)},A=(_,F)=>{const $=F[1];N(_,F),ie(_)?_.every(q=>q.length<=1)&&$():_.length<=1&&$()},O={mode:r,persisted:o,beforeEnter(_){let F=a;if(!n.isMounted)if(i)F=m||a;else return;_._leaveCb&&_._leaveCb(!0);const $=D[C];$&&ii(t,$)&&$.el._leaveCb&&$.el._leaveCb(),N(F,[_])},enter(_){let F=l,$=c,q=u;if(!n.isMounted)if(i)F=y||l,$=w||c,q=E||u;else return;let V=!1;const he=_._enterCb=pe=>{V||(V=!0,pe?N(q,[_]):N($,[_]),O.delayedLeave&&O.delayedLeave(),_._enterCb=void 0)};F?A(F,[_,he]):he()},leave(_,F){const $=String(t.key);if(_._enterCb&&_._enterCb(!0),n.isUnmounting)return F();N(h,[_]);let q=!1;const V=_._leaveCb=he=>{q||(q=!0,F(),he?N(p,[_]):N(f,[_]),_._leaveCb=void 0,D[$]===t&&delete D[$])};D[$]=t,d?A(d,[_,V]):V()},clone(_){return Wo(_,e,n,s)}};return O}function Yu(t){if(Kc(t))return t=Ls(t),t.children=null,t}function Mg(t){return Kc(t)?t.children?t.children[0]:void 0:t}function zo(t,e){t.shapeFlag&6&&t.component?zo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bf(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===_t?(o.patchFlag&128&&i++,s=s.concat(bf(o.children,e,a))):(e||o.type!==Tn)&&s.push(a!=null?Ls(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function js(t){return de(t)?{setup:t,name:t.name}:t}const Al=t=>!!t.type.__asyncLoader,Kc=t=>t.type.__isKeepAlive;function ew(t,e){nw(t,"a",e)}function tw(t,e){nw(t,"da",e)}function nw(t,e,n=Ze){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Gc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Kc(i.parent.vnode)&&zS(s,e,n,i),i=i.parent}}function zS(t,e,n,s){const i=Gc(e,t,s,!0);iw(()=>{of(s[e],i)},n)}function Gc(t,e,n=Ze,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pr(),yr(n);const a=ln(e,n,t,o);return gi(),Lr(),a});return s?i.unshift(r):i.push(r),r}}const cs=t=>(e,n=Ze)=>(!Ko||t==="sp")&&Gc(t,(...s)=>e(...s),n),Ef=cs("bm"),Li=cs("m"),qS=cs("bu"),sw=cs("u"),kn=cs("bum"),iw=cs("um"),KS=cs("sp"),GS=cs("rtg"),YS=cs("rtc");function QS(t,e=Ze){Gc("ec",t,e)}function Wl(t,e){const n=Xt;if(n===null)return t;const s=Qc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ve]=e[r];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&oi(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ys(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Pr(),ln(l,n,8,[t.el,a,t,e]),Lr())}}const If="components",XS="directives";function rw(t,e){return Cf(If,t,!0,e)||t}const ow=Symbol();function aw(t){return Qe(t)?Cf(If,t,!1)||t:t||ow}function Tf(t){return Cf(XS,t)}function Cf(t,e,n=!0,s=!1){const i=Xt||Ze;if(i){const r=i.type;if(t===If){const a=kk(r,!1);if(a&&(a===e||a===cn(e)||a===Dr(cn(e))))return r}const o=Fg(i[t]||r[t],e)||Fg(i.appContext[t],e);return!o&&s?r:o}}function Fg(t,e){return t&&(t[e]||t[cn(e)]||t[Dr(cn(e))])}function WH(t,e,n,s){let i;const r=n&&n[s];if(ie(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(He(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function zH(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(ie(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function qH(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:kl(s)]=t[s];return n}const Bh=t=>t?yw(t)?Qc(t)||t.proxy:Bh(t.parent):null,Io=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bh(t.parent),$root:t=>Bh(t.root),$emit:t=>t.emit,$options:t=>Sf(t),$forceUpdate:t=>t.f||(t.f=()=>_f(t.update)),$nextTick:t=>t.n||(t.n=Bs.bind(t.proxy)),$watch:t=>HS.bind(t)}),Qu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Se(t,e),JS={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Qu(s,e))return o[e]=1,s[e];if(i!==Ve&&Se(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Se(c,e))return o[e]=3,r[e];if(n!==Ve&&Se(n,e))return o[e]=4,n[e];jh&&(o[e]=0)}}const u=Io[e];let h,d;if(u)return e==="$attrs"&&qt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&Se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Qu(i,e)?(i[e]=n,!0):s!==Ve&&Se(s,e)?(s[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ve&&Se(t,o)||Qu(e,o)||(a=r[0])&&Se(a,o)||Se(s,o)||Se(Io,o)||Se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let jh=!0;function ZS(t){const e=Sf(t),n=t.proxy,s=t.ctx;jh=!1,e.beforeCreate&&$g(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:y,beforeDestroy:w,beforeUnmount:E,destroyed:C,unmounted:D,render:N,renderTracked:A,renderTriggered:O,errorCaptured:_,serverPrefetch:F,expose:$,inheritAttrs:q,components:V,directives:he,filters:pe}=e;if(c&&ek(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const fe=o[Q];de(fe)&&(s[Q]=fe.bind(n))}if(i){const Q=i.call(n,n);He(Q)&&(t.data=Nt(Q))}if(jh=!0,r)for(const Q in r){const fe=r[Q],Ae=de(fe)?fe.bind(n,n):de(fe.get)?fe.get.bind(n,n):In,Bt=!de(fe)&&de(fe.set)?fe.set.bind(n):In,rt=I({get:Ae,set:Bt});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>rt.value,set:$e=>rt.value=$e})}if(a)for(const Q in a)lw(a[Q],s,n,Q);if(l){const Q=de(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(fe=>{Wt(fe,Q[fe])})}u&&$g(u,t,"c");function be(Q,fe){ie(fe)?fe.forEach(Ae=>Q(Ae.bind(n))):fe&&Q(fe.bind(n))}if(be(Ef,h),be(Li,d),be(qS,f),be(sw,p),be(ew,m),be(tw,y),be(QS,_),be(YS,A),be(GS,O),be(kn,E),be(iw,D),be(KS,F),ie($))if($.length){const Q=t.exposed||(t.exposed={});$.forEach(fe=>{Object.defineProperty(Q,fe,{get:()=>n[fe],set:Ae=>n[fe]=Ae})})}else t.exposed||(t.exposed={});N&&t.render===In&&(t.render=N),q!=null&&(t.inheritAttrs=q),V&&(t.components=V),he&&(t.directives=he)}function ek(t,e,n=In,s=!1){ie(t)&&(t=Hh(t));for(const i in t){const r=t[i];let o;He(r)?"default"in r?o=Le(r.from||i,r.default,!0):o=Le(r.from||i):o=Le(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function $g(t,e,n){ln(ie(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function lw(t,e,n,s){const i=s.includes(".")?Q_(n,s):()=>n[s];if(Qe(t)){const r=e[t];de(r)&&Ye(i,r)}else if(de(t))Ye(i,t.bind(n));else if(He(t))if(ie(t))t.forEach(r=>lw(r,e,n,s));else{const r=de(t.handler)?t.handler.bind(n):e[t.handler];de(r)&&Ye(i,r,t)}}function Sf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>zl(l,c,o,!0)),zl(l,e,o)),He(e)&&r.set(e,l),l}function zl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&zl(t,r,n,!0),i&&i.forEach(o=>zl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=tk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tk={data:Ug,props:ei,emits:ei,methods:ei,computed:ei,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:ei,directives:ei,watch:sk,provide:Ug,inject:nk};function Ug(t,e){return e?t?function(){return gt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function nk(t,e){return ei(Hh(t),Hh(e))}function Hh(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function ei(t,e){return t?gt(gt(Object.create(null),t),e):e}function sk(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const s in e)n[s]=$t(t[s],e[s]);return n}function ik(t,e,n,s=!1){const i={},r={};Vl(r,Yc,1),t.propsDefaults=Object.create(null),cw(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:CS(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function rk(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ce(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(zc(t.emitsOptions,d))continue;const f=e[d];if(l)if(Se(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=cn(d);i[p]=Wh(l,a,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{cw(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Se(e,h)&&((u=Pi(h))===h||!Se(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Wh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Se(e,h)&&!0)&&(delete r[h],c=!0)}c&&ns(t,"set","$attrs")}function cw(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sl(l))continue;const c=e[l];let u;i&&Se(i,u=cn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:zc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ce(n),c=a||Ve;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Wh(i,l,h,c[h],t,!Se(c,h))}}return o}function Wh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&de(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(yr(i),s=c[n]=l.call(null,e),gi())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Pi(n))&&(s=!0))}return s}function uw(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!de(t)){const u=h=>{l=!0;const[d,f]=uw(h,e,!0);gt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return He(t)&&s.set(t,ir),ir;if(ie(r))for(let u=0;u<r.length;u++){const h=cn(r[u]);Vg(h)&&(o[h]=Ve)}else if(r)for(const u in r){const h=cn(u);if(Vg(h)){const d=r[u],f=o[h]=ie(d)||de(d)?{type:d}:Object.assign({},d);if(f){const p=Hg(Boolean,f.type),m=Hg(String,f.type);f[0]=p>-1,f[1]=m<0||p<m,(p>-1||Se(f,"default"))&&a.push(h)}}}const c=[o,a];return He(t)&&s.set(t,c),c}function Vg(t){return t[0]!=="$"}function Bg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jg(t,e){return Bg(t)===Bg(e)}function Hg(t,e){return ie(e)?e.findIndex(n=>jg(n,t)):de(e)&&jg(e,t)?0:-1}const hw=t=>t[0]==="_"||t==="$stable",kf=t=>ie(t)?t.map(xn):[xn(t)],ok=(t,e,n)=>{if(e._n)return e;const s=nt((...i)=>kf(e(...i)),n);return s._c=!1,s},dw=(t,e,n)=>{const s=t._ctx;for(const i in t){if(hw(i))continue;const r=t[i];if(de(r))e[i]=ok(i,r,s);else if(r!=null){const o=kf(r);e[i]=()=>o}}},fw=(t,e)=>{const n=kf(e);t.slots.default=()=>n},ak=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Vl(e,"_",n)):dw(e,t.slots={})}else t.slots={},e&&fw(t,e);Vl(t.slots,Yc,1)},lk=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(gt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,dw(e,i)),o=e}else e&&(fw(t,e),o={default:1});if(r)for(const a in i)!hw(a)&&!(a in o)&&delete i[a]};function pw(){return{app:null,config:{isNativeTag:jC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ck=0;function uk(t,e){return function(s,i=null){de(s)||(s=Object.assign({},s)),i!=null&&!He(i)&&(i=null);const r=pw(),o=new Set;let a=!1;const l=r.app={_uid:ck++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ok,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&de(c.install)?(o.add(c),c.install(l,...u)):de(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=b(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Qc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function zh(t,e,n,s,i=!1){if(ie(t)){t.forEach((d,f)=>zh(d,e&&(ie(e)?e[f]:e),n,s,i));return}if(Al(s)&&!i)return;const r=s.shapeFlag&4?Qc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Qe(c)?(u[c]=null,Se(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),de(l))ks(l,a,12,[o,u]);else{const d=Qe(l),f=Pe(l);if(d||f){const p=()=>{if(t.f){const m=d?Se(h,l)?h[l]:u[l]:l.value;i?ie(m)&&of(m,r):ie(m)?m.includes(r)||m.push(r):d?(u[l]=[r],Se(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Se(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,jt(p,n)):p()}}}const jt=jS;function hk(t){return dk(t)}function dk(t,e){const n=QC();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=In,insertStaticContent:p}=t,m=(g,v,T,S=null,R=null,j=null,z=!1,U=null,H=!!v.dynamicChildren)=>{if(g===v)return;g&&!ii(g,v)&&(S=B(g),$e(g,R,j,!0),g=null),v.patchFlag===-2&&(H=!1,v.dynamicChildren=null);const{type:x,ref:Z,shapeFlag:K}=v;switch(x){case Ea:y(g,v,T,S);break;case Tn:w(g,v,T,S);break;case Xu:g==null&&E(v,T,S,z);break;case _t:V(g,v,T,S,R,j,z,U,H);break;default:K&1?N(g,v,T,S,R,j,z,U,H):K&6?he(g,v,T,S,R,j,z,U,H):(K&64||K&128)&&x.process(g,v,T,S,R,j,z,U,H,Ce)}Z!=null&&R&&zh(Z,g&&g.ref,j,v||g,!v)},y=(g,v,T,S)=>{if(g==null)s(v.el=a(v.children),T,S);else{const R=v.el=g.el;v.children!==g.children&&c(R,v.children)}},w=(g,v,T,S)=>{g==null?s(v.el=l(v.children||""),T,S):v.el=g.el},E=(g,v,T,S)=>{[g.el,g.anchor]=p(g.children,v,T,S,g.el,g.anchor)},C=({el:g,anchor:v},T,S)=>{let R;for(;g&&g!==v;)R=d(g),s(g,T,S),g=R;s(v,T,S)},D=({el:g,anchor:v})=>{let T;for(;g&&g!==v;)T=d(g),i(g),g=T;i(v)},N=(g,v,T,S,R,j,z,U,H)=>{z=z||v.type==="svg",g==null?A(v,T,S,R,j,z,U,H):F(g,v,R,j,z,U,H)},A=(g,v,T,S,R,j,z,U)=>{let H,x;const{type:Z,props:K,shapeFlag:ee,transition:ae,dirs:ye}=g;if(H=g.el=o(g.type,j,K&&K.is,K),ee&8?u(H,g.children):ee&16&&_(g.children,H,null,S,R,j&&Z!=="foreignObject",z,U),ye&&Ys(g,null,S,"created"),O(H,g,g.scopeId,z,S),K){for(const xe in K)xe!=="value"&&!Sl(xe)&&r(H,xe,null,K[xe],j,g.children,S,R,M);"value"in K&&r(H,"value",null,K.value),(x=K.onVnodeBeforeMount)&&On(x,S,g)}ye&&Ys(g,null,S,"beforeMount");const Fe=(!R||R&&!R.pendingBranch)&&ae&&!ae.persisted;Fe&&ae.beforeEnter(H),s(H,v,T),((x=K&&K.onVnodeMounted)||Fe||ye)&&jt(()=>{x&&On(x,S,g),Fe&&ae.enter(H),ye&&Ys(g,null,S,"mounted")},R)},O=(g,v,T,S,R)=>{if(T&&f(g,T),S)for(let j=0;j<S.length;j++)f(g,S[j]);if(R){let j=R.subTree;if(v===j){const z=R.vnode;O(g,z,z.scopeId,z.slotScopeIds,R.parent)}}},_=(g,v,T,S,R,j,z,U,H=0)=>{for(let x=H;x<g.length;x++){const Z=g[x]=U?_s(g[x]):xn(g[x]);m(null,Z,v,T,S,R,j,z,U)}},F=(g,v,T,S,R,j,z)=>{const U=v.el=g.el;let{patchFlag:H,dynamicChildren:x,dirs:Z}=v;H|=g.patchFlag&16;const K=g.props||Ve,ee=v.props||Ve;let ae;T&&Qs(T,!1),(ae=ee.onVnodeBeforeUpdate)&&On(ae,T,v,g),Z&&Ys(v,g,T,"beforeUpdate"),T&&Qs(T,!0);const ye=R&&v.type!=="foreignObject";if(x?$(g.dynamicChildren,x,U,T,S,ye,j):z||fe(g,v,U,null,T,S,ye,j,!1),H>0){if(H&16)q(U,v,K,ee,T,S,R);else if(H&2&&K.class!==ee.class&&r(U,"class",null,ee.class,R),H&4&&r(U,"style",K.style,ee.style,R),H&8){const Fe=v.dynamicProps;for(let xe=0;xe<Fe.length;xe++){const et=Fe[xe],gn=K[et],zi=ee[et];(zi!==gn||et==="value")&&r(U,et,gn,zi,R,g.children,T,S,M)}}H&1&&g.children!==v.children&&u(U,v.children)}else!z&&x==null&&q(U,v,K,ee,T,S,R);((ae=ee.onVnodeUpdated)||Z)&&jt(()=>{ae&&On(ae,T,v,g),Z&&Ys(v,g,T,"updated")},S)},$=(g,v,T,S,R,j,z)=>{for(let U=0;U<v.length;U++){const H=g[U],x=v[U],Z=H.el&&(H.type===_t||!ii(H,x)||H.shapeFlag&70)?h(H.el):T;m(H,x,Z,null,S,R,j,z,!0)}},q=(g,v,T,S,R,j,z)=>{if(T!==S){if(T!==Ve)for(const U in T)!Sl(U)&&!(U in S)&&r(g,U,T[U],null,z,v.children,R,j,M);for(const U in S){if(Sl(U))continue;const H=S[U],x=T[U];H!==x&&U!=="value"&&r(g,U,x,H,z,v.children,R,j,M)}"value"in S&&r(g,"value",T.value,S.value)}},V=(g,v,T,S,R,j,z,U,H)=>{const x=v.el=g?g.el:a(""),Z=v.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:ae}=v;ae&&(U=U?U.concat(ae):ae),g==null?(s(x,T,S),s(Z,T,S),_(v.children,T,Z,R,j,z,U,H)):K>0&&K&64&&ee&&g.dynamicChildren?($(g.dynamicChildren,ee,T,R,j,z,U),(v.key!=null||R&&v===R.subTree)&&Af(g,v,!0)):fe(g,v,T,Z,R,j,z,U,H)},he=(g,v,T,S,R,j,z,U,H)=>{v.slotScopeIds=U,g==null?v.shapeFlag&512?R.ctx.activate(v,T,S,z,H):pe(v,T,S,R,j,z,H):me(g,v,H)},pe=(g,v,T,S,R,j,z)=>{const U=g.component=Ek(g,S,R);if(Kc(g)&&(U.ctx.renderer=Ce),Ik(U),U.asyncDep){if(R&&R.registerDep(U,be),!g.el){const H=U.subTree=b(Tn);w(null,H,v,T)}return}be(U,g,v,T,R,j,z)},me=(g,v,T)=>{const S=v.component=g.component;if(US(g,v,T))if(S.asyncDep&&!S.asyncResolved){Q(S,v,T);return}else S.next=v,DS(S.update),S.update();else v.el=g.el,S.vnode=v},be=(g,v,T,S,R,j,z)=>{const U=()=>{if(g.isMounted){let{next:Z,bu:K,u:ee,parent:ae,vnode:ye}=g,Fe=Z,xe;Qs(g,!1),Z?(Z.el=ye.el,Q(g,Z,z)):Z=ye,K&&Ku(K),(xe=Z.props&&Z.props.onVnodeBeforeUpdate)&&On(xe,ae,Z,ye),Qs(g,!0);const et=Gu(g),gn=g.subTree;g.subTree=et,m(gn,et,h(gn.el),B(gn),g,R,j),Z.el=et.el,Fe===null&&VS(g,et.el),ee&&jt(ee,R),(xe=Z.props&&Z.props.onVnodeUpdated)&&jt(()=>On(xe,ae,Z,ye),R)}else{let Z;const{el:K,props:ee}=v,{bm:ae,m:ye,parent:Fe}=g,xe=Al(v);if(Qs(g,!1),ae&&Ku(ae),!xe&&(Z=ee&&ee.onVnodeBeforeMount)&&On(Z,Fe,v),Qs(g,!0),K&&ge){const et=()=>{g.subTree=Gu(g),ge(K,g.subTree,g,R,null)};xe?v.type.__asyncLoader().then(()=>!g.isUnmounted&&et()):et()}else{const et=g.subTree=Gu(g);m(null,et,T,S,g,R,j),v.el=et.el}if(ye&&jt(ye,R),!xe&&(Z=ee&&ee.onVnodeMounted)){const et=v;jt(()=>On(Z,Fe,et),R)}(v.shapeFlag&256||Fe&&Al(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&g.a&&jt(g.a,R),g.isMounted=!0,v=T=S=null}},H=g.effect=new hf(U,()=>_f(x),g.scope),x=g.update=()=>H.run();x.id=g.uid,Qs(g,!0),x()},Q=(g,v,T)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,rk(g,v.props,S,T),lk(g,v.children,T),Pr(),Pg(),Lr()},fe=(g,v,T,S,R,j,z,U,H=!1)=>{const x=g&&g.children,Z=g?g.shapeFlag:0,K=v.children,{patchFlag:ee,shapeFlag:ae}=v;if(ee>0){if(ee&128){Bt(x,K,T,S,R,j,z,U,H);return}else if(ee&256){Ae(x,K,T,S,R,j,z,U,H);return}}ae&8?(Z&16&&M(x,R,j),K!==x&&u(T,K)):Z&16?ae&16?Bt(x,K,T,S,R,j,z,U,H):M(x,R,j,!0):(Z&8&&u(T,""),ae&16&&_(K,T,S,R,j,z,U,H))},Ae=(g,v,T,S,R,j,z,U,H)=>{g=g||ir,v=v||ir;const x=g.length,Z=v.length,K=Math.min(x,Z);let ee;for(ee=0;ee<K;ee++){const ae=v[ee]=H?_s(v[ee]):xn(v[ee]);m(g[ee],ae,T,null,R,j,z,U,H)}x>Z?M(g,R,j,!0,!1,K):_(v,T,S,R,j,z,U,H,K)},Bt=(g,v,T,S,R,j,z,U,H)=>{let x=0;const Z=v.length;let K=g.length-1,ee=Z-1;for(;x<=K&&x<=ee;){const ae=g[x],ye=v[x]=H?_s(v[x]):xn(v[x]);if(ii(ae,ye))m(ae,ye,T,null,R,j,z,U,H);else break;x++}for(;x<=K&&x<=ee;){const ae=g[K],ye=v[ee]=H?_s(v[ee]):xn(v[ee]);if(ii(ae,ye))m(ae,ye,T,null,R,j,z,U,H);else break;K--,ee--}if(x>K){if(x<=ee){const ae=ee+1,ye=ae<Z?v[ae].el:S;for(;x<=ee;)m(null,v[x]=H?_s(v[x]):xn(v[x]),T,ye,R,j,z,U,H),x++}}else if(x>ee)for(;x<=K;)$e(g[x],R,j,!0),x++;else{const ae=x,ye=x,Fe=new Map;for(x=ye;x<=ee;x++){const Gt=v[x]=H?_s(v[x]):xn(v[x]);Gt.key!=null&&Fe.set(Gt.key,x)}let xe,et=0;const gn=ee-ye+1;let zi=!1,Ig=0;const so=new Array(gn);for(x=0;x<gn;x++)so[x]=0;for(x=ae;x<=K;x++){const Gt=g[x];if(et>=gn){$e(Gt,R,j,!0);continue}let Nn;if(Gt.key!=null)Nn=Fe.get(Gt.key);else for(xe=ye;xe<=ee;xe++)if(so[xe-ye]===0&&ii(Gt,v[xe])){Nn=xe;break}Nn===void 0?$e(Gt,R,j,!0):(so[Nn-ye]=x+1,Nn>=Ig?Ig=Nn:zi=!0,m(Gt,v[Nn],T,null,R,j,z,U,H),et++)}const Tg=zi?fk(so):ir;for(xe=Tg.length-1,x=gn-1;x>=0;x--){const Gt=ye+x,Nn=v[Gt],Cg=Gt+1<Z?v[Gt+1].el:S;so[x]===0?m(null,Nn,T,Cg,R,j,z,U,H):zi&&(xe<0||x!==Tg[xe]?rt(Nn,T,Cg,2):xe--)}}},rt=(g,v,T,S,R=null)=>{const{el:j,type:z,transition:U,children:H,shapeFlag:x}=g;if(x&6){rt(g.component.subTree,v,T,S);return}if(x&128){g.suspense.move(v,T,S);return}if(x&64){z.move(g,v,T,Ce);return}if(z===_t){s(j,v,T);for(let K=0;K<H.length;K++)rt(H[K],v,T,S);s(g.anchor,v,T);return}if(z===Xu){C(g,v,T);return}if(S!==2&&x&1&&U)if(S===0)U.beforeEnter(j),s(j,v,T),jt(()=>U.enter(j),R);else{const{leave:K,delayLeave:ee,afterLeave:ae}=U,ye=()=>s(j,v,T),Fe=()=>{K(j,()=>{ye(),ae&&ae()})};ee?ee(j,ye,Fe):Fe()}else s(j,v,T)},$e=(g,v,T,S=!1,R=!1)=>{const{type:j,props:z,ref:U,children:H,dynamicChildren:x,shapeFlag:Z,patchFlag:K,dirs:ee}=g;if(U!=null&&zh(U,null,T,g,!0),Z&256){v.ctx.deactivate(g);return}const ae=Z&1&&ee,ye=!Al(g);let Fe;if(ye&&(Fe=z&&z.onVnodeBeforeUnmount)&&On(Fe,v,g),Z&6)k(g.component,T,S);else{if(Z&128){g.suspense.unmount(T,S);return}ae&&Ys(g,null,v,"beforeUnmount"),Z&64?g.type.remove(g,v,T,R,Ce,S):x&&(j!==_t||K>0&&K&64)?M(x,v,T,!1,!0):(j===_t&&K&384||!R&&Z&16)&&M(H,v,T),S&&Tt(g)}(ye&&(Fe=z&&z.onVnodeUnmounted)||ae)&&jt(()=>{Fe&&On(Fe,v,g),ae&&Ys(g,null,v,"unmounted")},T)},Tt=g=>{const{type:v,el:T,anchor:S,transition:R}=g;if(v===_t){Rn(T,S);return}if(v===Xu){D(g);return}const j=()=>{i(T),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:z,delayLeave:U}=R,H=()=>z(T,j);U?U(g.el,j,H):H()}else j()},Rn=(g,v)=>{let T;for(;g!==v;)T=d(g),i(g),g=T;i(v)},k=(g,v,T)=>{const{bum:S,scope:R,update:j,subTree:z,um:U}=g;S&&Ku(S),R.stop(),j&&(j.active=!1,$e(z,g,v,T)),U&&jt(U,v),jt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},M=(g,v,T,S=!1,R=!1,j=0)=>{for(let z=j;z<g.length;z++)$e(g[z],v,T,S,R)},B=g=>g.shapeFlag&6?B(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),J=(g,v,T)=>{g==null?v._vnode&&$e(v._vnode,null,null,!0):m(v._vnode||null,g,v,null,null,null,T),Pg(),K_(),v._vnode=g},Ce={p:m,um:$e,m:rt,r:Tt,mt:pe,mc:_,pc:fe,pbc:$,n:B,o:t};let Ge,ge;return e&&([Ge,ge]=e(Ce)),{render:J,hydrate:Ge,createApp:uk(J,Ge)}}function Qs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Af(t,e,n=!1){const s=t.children,i=e.children;if(ie(s)&&ie(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=_s(i[r]),a.el=o.el),n||Af(o,a)),a.type===Ea&&(a.el=o.el)}}function fk(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const pk=t=>t.__isTeleport,To=t=>t&&(t.disabled||t.disabled===""),Wg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,qh=(t,e)=>{const n=t&&t.to;return Qe(n)?e?e(n):null:n},gk={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:y}}=c,w=To(e.props);let{shapeFlag:E,children:C,dynamicChildren:D}=e;if(t==null){const N=e.el=m(""),A=e.anchor=m("");f(N,n,s),f(A,n,s);const O=e.target=qh(e.props,p),_=e.targetAnchor=m("");O&&(f(_,O),o=o||Wg(O));const F=($,q)=>{E&16&&u(C,$,q,i,r,o,a,l)};w?F(n,A):O&&F(O,_)}else{e.el=t.el;const N=e.anchor=t.anchor,A=e.target=t.target,O=e.targetAnchor=t.targetAnchor,_=To(t.props),F=_?n:A,$=_?N:O;if(o=o||Wg(A),D?(d(t.dynamicChildren,D,F,i,r,o,a),Af(t,e,!0)):l||h(t,e,F,$,i,r,o,a,!1),w)_||rl(e,n,N,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const q=e.target=qh(e.props,p);q&&rl(e,q,null,c,0)}else _&&rl(e,A,O,c,1)}gw(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!To(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const p=l[f];i(p,e,n,!0,!!p.dynamicChildren)}},move:rl,hydrate:mk};function rl(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||To(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function mk(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=qh(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(To(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}gw(e)}return e.anchor&&o(e.anchor)}const KH=gk;function gw(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const _t=Symbol(void 0),Ea=Symbol(void 0),Tn=Symbol(void 0),Xu=Symbol(void 0),Co=[];let _n=null;function vn(t=!1){Co.push(_n=t?null:[])}function vk(){Co.pop(),_n=Co[Co.length-1]||null}let qo=1;function zg(t){qo+=t}function mw(t){return t.dynamicChildren=qo>0?_n||ir:null,vk(),qo>0&&_n&&_n.push(t),t}function qg(t,e,n,s,i,r){return mw(Mr(t,e,n,s,i,r,!0))}function es(t,e,n,s,i){return mw(b(t,e,n,s,i,!0))}function Kh(t){return t?t.__v_isVNode===!0:!1}function ii(t,e){return t.type===e.type&&t.key===e.key}const Yc="__vInternal",vw=({key:t})=>t!=null?t:null,Rl=({ref:t,ref_key:e,ref_for:n})=>t!=null?Qe(t)||Pe(t)||de(t)?{i:Xt,r:t,k:e,f:!!n}:t:null;function Mr(t,e=null,n=null,s=0,i=null,r=t===_t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vw(e),ref:e&&Rl(e),scopeId:qc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xt};return a?(Rf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),qo>0&&!o&&_n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_n.push(l),l}const b=yk;function yk(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ow)&&(t=Tn),Kh(t)){const a=Ls(t,e,!0);return n&&Rf(a,n),qo>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag|=-2,a}if(Ak(t)&&(t=t.__vccOpts),e){e=_k(e);let{class:a,style:l}=e;a&&!Qe(a)&&(e.class=sf(a)),He(l)&&(U_(l)&&!ie(l)&&(l=gt({},l)),e.style=Mc(l))}const o=Qe(t)?1:BS(t)?128:pk(t)?64:He(t)?4:de(t)?2:0;return Mr(t,e,n,s,i,o,r,!0)}function _k(t){return t?U_(t)||Yc in t?gt({},t):t:null}function Ls(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Mi(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vw(a),ref:e&&e.ref?n&&i?ie(i)?i.concat(Rl(e)):[i,Rl(e)]:Rl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ls(t.ssContent),ssFallback:t.ssFallback&&Ls(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ar(t=" ",e=0){return b(Ea,null,t,e)}function GH(t="",e=!1){return e?(vn(),es(Tn,null,t)):b(Tn,null,t)}function xn(t){return t==null||typeof t=="boolean"?b(Tn):ie(t)?b(_t,null,t.slice()):typeof t=="object"?_s(t):b(Ea,null,String(t))}function _s(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ls(t)}function Rf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Rf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Yc in e)?e._ctx=Xt:i===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),s&64?(n=16,e=[ar(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mi(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=sf([e.class,s.class]));else if(i==="style")e.style=Mc([e.style,s.style]);else if(Fc(i)){const r=e[i],o=s[i];o&&r!==o&&!(ie(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function On(t,e,n,s=null){ln(t,e,7,[n,s])}const wk=pw();let bk=0;function Ek(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||wk,r={uid:bk++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new k_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uw(s,i),emitsOptions:Y_(s,i),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:s.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=MS.bind(null,r),t.ce&&t.ce(r),r}let Ze=null;const Fr=()=>Ze||Xt,yr=t=>{Ze=t,t.scope.on()},gi=()=>{Ze&&Ze.scope.off(),Ze=null};function yw(t){return t.vnode.shapeFlag&4}let Ko=!1;function Ik(t,e=!1){Ko=e;const{props:n,children:s}=t.vnode,i=yw(t);ik(t,n,i,e),ak(t,s);const r=i?Tk(t,e):void 0;return Ko=!1,r}function Tk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vr(new Proxy(t.ctx,JS));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Sk(t):null;yr(t),Pr();const r=ks(s,t,0,[t.props,i]);if(Lr(),gi(),T_(r)){if(r.then(gi,gi),e)return r.then(o=>{Kg(t,o,e)}).catch(o=>{Wc(o,t,0)});t.asyncDep=r}else Kg(t,r,e)}else _w(t,e)}function Kg(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=H_(e)),_w(t,n)}let Gg;function _w(t,e,n){const s=t.type;if(!t.render){if(!e&&Gg&&!s.render){const i=s.template||Sf(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=gt(gt({isCustomElement:r,delimiters:a},o),l);s.render=Gg(i,c)}}t.render=s.render||In}yr(t),Pr(),ZS(t),Lr(),gi()}function Ck(t){return new Proxy(t.attrs,{get(e,n){return qt(t,"get","$attrs"),e[n]}})}function Sk(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Ck(t))},slots:t.slots,emit:t.emit,expose:e}}function Qc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(H_(vr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Io)return Io[n](t)},has(e,n){return n in e||n in Io}}))}function kk(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Ak(t){return de(t)&&"__vccOpts"in t}const I=(t,e)=>NS(t,e,Ko);function us(t,e,n){const s=arguments.length;return s===2?He(e)&&!ie(e)?Kh(e)?b(t,null,[e]):b(t,e):b(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Kh(n)&&(n=[n]),b(t,e,n))}const Rk=Symbol(""),Nk=()=>Le(Rk),Ok="3.2.47",xk="http://www.w3.org/2000/svg",ri=typeof document<"u"?document:null,Yg=ri&&ri.createElement("template"),Dk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ri.createElementNS(xk,t):ri.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ri.createTextNode(t),createComment:t=>ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Yg.innerHTML=s?`<svg>${t}</svg>`:t;const a=Yg.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pk(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lk(t,e,n){const s=t.style,i=Qe(n);if(n&&!i){if(e&&!Qe(e))for(const r in e)n[r]==null&&Gh(s,r,"");for(const r in n)Gh(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Qg=/\s*!important$/;function Gh(t,e,n){if(ie(n))n.forEach(s=>Gh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mk(t,e);Qg.test(n)?t.setProperty(Pi(s),n.replace(Qg,""),"important"):t[s]=n}}const Xg=["Webkit","Moz","ms"],Ju={};function Mk(t,e){const n=Ju[e];if(n)return n;let s=cn(e);if(s!=="filter"&&s in t)return Ju[e]=s;s=Dr(s);for(let i=0;i<Xg.length;i++){const r=Xg[i]+s;if(r in t)return Ju[e]=r}return e}const Jg="http://www.w3.org/1999/xlink";function Fk(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jg,e.slice(6,e.length)):t.setAttributeNS(Jg,e,n);else{const r=VC(e);n==null||r&&!b_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function $k(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=b_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Uk(t,e,n,s){t.addEventListener(e,n,s)}function Vk(t,e,n,s){t.removeEventListener(e,n,s)}function Bk(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=jk(e);if(s){const c=r[e]=zk(s,i);Uk(t,a,c,l)}else o&&(Vk(t,a,o,l),r[e]=void 0)}}const Zg=/(?:Once|Passive|Capture)$/;function jk(t){let e;if(Zg.test(t)){e={};let s;for(;s=t.match(Zg);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pi(t.slice(2)),e]}let Zu=0;const Hk=Promise.resolve(),Wk=()=>Zu||(Hk.then(()=>Zu=0),Zu=Date.now());function zk(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ln(qk(s,n.value),e,5,[s])};return n.value=t,n.attached=Wk(),n}function qk(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const em=/^on[a-z]/,Kk=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Pk(t,s,i):e==="style"?Lk(t,n,s):Fc(e)?rf(e)||Bk(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gk(t,e,s,i))?$k(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fk(t,e,s,i))};function Gk(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&em.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||em.test(e)&&Qe(n)?!1:e in t}const fs="transition",io="animation",Hs=(t,{slots:e})=>us(J_,bw(t),e);Hs.displayName="Transition";const ww={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Yk=Hs.props=gt({},J_.props,ww),Xs=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},tm=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function bw(t){const e={};for(const V in t)V in ww||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Qk(i),m=p&&p[0],y=p&&p[1],{onBeforeEnter:w,onEnter:E,onEnterCancelled:C,onLeave:D,onLeaveCancelled:N,onBeforeAppear:A=w,onAppear:O=E,onAppearCancelled:_=C}=e,F=(V,he,pe)=>{ms(V,he?u:a),ms(V,he?c:o),pe&&pe()},$=(V,he)=>{V._isLeaving=!1,ms(V,h),ms(V,f),ms(V,d),he&&he()},q=V=>(he,pe)=>{const me=V?O:E,be=()=>F(he,V,pe);Xs(me,[he,be]),nm(()=>{ms(he,V?l:r),Gn(he,V?u:a),tm(me)||sm(he,s,m,be)})};return gt(e,{onBeforeEnter(V){Xs(w,[V]),Gn(V,r),Gn(V,o)},onBeforeAppear(V){Xs(A,[V]),Gn(V,l),Gn(V,c)},onEnter:q(!1),onAppear:q(!0),onLeave(V,he){V._isLeaving=!0;const pe=()=>$(V,he);Gn(V,h),Iw(),Gn(V,d),nm(()=>{!V._isLeaving||(ms(V,h),Gn(V,f),tm(D)||sm(V,s,y,pe))}),Xs(D,[V,pe])},onEnterCancelled(V){F(V,!1),Xs(C,[V])},onAppearCancelled(V){F(V,!0),Xs(_,[V])},onLeaveCancelled(V){$(V),Xs(N,[V])}})}function Qk(t){if(t==null)return null;if(He(t))return[eh(t.enter),eh(t.leave)];{const e=eh(t);return[e,e]}}function eh(t){return YC(t)}function Gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ms(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function nm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xk=0;function sm(t,e,n,s){const i=t._endId=++Xk,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Ew(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Ew(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),i=s(`${fs}Delay`),r=s(`${fs}Duration`),o=im(i,r),a=s(`${io}Delay`),l=s(`${io}Duration`),c=im(a,l);let u=null,h=0,d=0;e===fs?o>0&&(u=fs,h=o,d=r.length):e===io?c>0&&(u=io,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?fs:io:null,d=u?u===fs?r.length:l.length:0);const f=u===fs&&/\b(transform|all)(,|$)/.test(s(`${fs}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function im(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>rm(n)+rm(t[s])))}function rm(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Iw(){return document.body.offsetHeight}const Tw=new WeakMap,Cw=new WeakMap,Sw={name:"TransitionGroup",props:gt({},Yk,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Fr(),s=X_();let i,r;return sw(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!sA(i[0].el,n.vnode.el,o))return;i.forEach(eA),i.forEach(tA);const a=i.filter(nA);Iw(),a.forEach(l=>{const c=l.el,u=c.style;Gn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,ms(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ce(t),a=bw(o);let l=o.tag||_t;i=r,r=e.default?bf(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&zo(u,Wo(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];zo(u,Wo(u,a,s,n)),Tw.set(u,u.el.getBoundingClientRect())}return b(l,null,r)}}},Jk=t=>delete t.mode;Sw.props;const Zk=Sw;function eA(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function tA(t){Cw.set(t,t.el.getBoundingClientRect())}function nA(t){const e=Tw.get(t),n=Cw.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function sA(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Ew(s);return i.removeChild(s),r}const iA=["ctrl","shift","alt","meta"],rA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iA.some(n=>t[`${n}Key`]&&!e.includes(n))},oA=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=rA[e[i]];if(r&&r(n,e))return}return t(n,...s)},aA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},YH=(t,e)=>n=>{if(!("key"in n))return;const s=Pi(n.key);if(e.some(i=>i===s||aA[i]===s))return t(n)},lA={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ro(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ro(t,!0),s.enter(t)):s.leave(t,()=>{ro(t,!1)}):ro(t,e))},beforeUnmount(t,{value:e}){ro(t,e)}};function ro(t,e){t.style.display=e?t._vod:"none"}const cA=gt({patchProp:Kk},Dk);let om;function uA(){return om||(om=hk(cA))}const hA=(...t)=>{const e=uA().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=dA(s);if(!i)return;const r=e._component;!de(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function dA(t){return Qe(t)?document.querySelector(t):t}const fA=js({__name:"App",setup(t){return(e,n)=>{const s=rw("router-view");return vn(),es(s)}}}),pA="modulepreload",gA=function(t){return"/"+t},am={},vs=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=gA(r),r in am)return;am[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":pA,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};async function mA(){(await vs(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}function lm(t,e,n){vA(t,e),e.set(t,n)}function vA(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function yA(t,e,n){var s=kw(t,e,"set");return _A(t,s,n),n}function _A(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function Js(t,e){var n=kw(t,e,"get");return wA(t,n)}function kw(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function wA(t,e){return e.get?e.get.call(t):e.value}function Aw(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let i=0;i<s;i++){if(t==null)return n;t=t[e[i]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function Rw(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>Rw(t[s],e[s]))}function Yh(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Aw(t,e.split("."),n))}function QH(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t)){if(typeof e!="function")return n;const i=e(t,n);return typeof i>"u"?n:i}if(typeof e=="string")return Yh(t,e,n);if(Array.isArray(e))return Aw(t,e,n);if(typeof e!="function")return n;const s=e(t,n);return typeof s>"u"?n:s}function bA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Qh(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function XH(t){return t==null?void 0:t.$el}const cm=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Nw(t,e){const n=Object.create(null),s=Object.create(null);for(const i in t)e.some(r=>r instanceof RegExp?r.test(i):r===i)?n[i]=t[i]:s[i]=t[i];return[n,s]}function JH(t,e){const n={...t};return e.forEach(s=>delete n[s]),n}function ZH(t){return Nw(t,["class","style","id",/^data-/])}function EA(t){return t==null?[]:Array.isArray(t)?t:[t]}function IA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function um(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function TA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function ss(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const i in t)s[i]=t[i];for(const i in e){const r=t[i],o=e[i];if(Qh(r)&&Qh(o)){s[i]=ss(r,o,n);continue}if(Array.isArray(r)&&Array.isArray(o)&&n){s[i]=n(r,o);continue}s[i]=o}return s}function As(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(As.cache.has(t))return As.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return As.cache.set(t,e),e}As.cache=new Map;function So(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>So(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>So(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return So(t,e.component.subTree).flat(1)}return[]}var ol=new WeakMap,qi=new WeakMap;class CA{constructor(e){lm(this,ol,{writable:!0,value:[]}),lm(this,qi,{writable:!0,value:0}),this.size=e}push(e){Js(this,ol)[Js(this,qi)]=e,yA(this,qi,(Js(this,qi)+1)%this.size)}values(){return Js(this,ol).slice(Js(this,qi)).concat(Js(this,ol).slice(0,Js(this,qi)))}}function Ow(t){const e=Nt({}),n=I(t);return ba(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),Hc(e)}function ql(t,e){return t.includes(e)}const SA=/^on[^a-z]/,eW=t=>SA.test(t),hm=[Function,Array];function dm(t,e){return e="on"+Dr(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function tW(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(Array.isArray(t))for(const i of t)i(...n);else typeof t=="function"&&t(...n)}const xw=["top","bottom"],kA=["start","end","left","right"];function AA(t,e){let[n,s]=t.split(" ");return s||(s=ql(xw,n)?"start":ql(kA,n)?"top":"center"),{side:Xh(n,e),align:Xh(s,e)}}function Xh(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function nW(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function sW(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function iW(t){return{side:t.align,align:t.side}}function rW(t){return ql(xw,t.side)?"y":"x"}function Dw(t,e,n){if(n&&(e={__isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?OA(e):"")}function lr(t,e,n){const s=Dw(t,e,n);s!=null&&console.warn(s)}function fm(t,e,n){const s=Dw(t,e,n);s!=null&&console.error(s)}const RA=/(?:^|[-_])(\w)/g,NA=t=>t.replace(RA,e=>e.toUpperCase()).replace(/[-_]/g,"");function th(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t.__isVue?t.$options||t.constructor.options:t||{};let s=n.name||n._componentTag;const i=n.__file;if(!s&&i){const r=i.match(/([^/\\]+)\.vue$/);s=r==null?void 0:r[1]}return(s?`<${NA(s)}>`:"<Anonymous>")+(i&&e!==!1?` at ${i}`:"")}function OA(t){if(t.__isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const s=e[e.length-1];if(s.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[s,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((s,i)=>`${i===0?"---> ":" ".repeat(5+i*2)}${Array.isArray(s)?`${th(s[0])}... (${s[1]} recursive calls)`:th(s)}`).join(`
`)}else return`

(found in ${th(t)})`}const xA=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],DA=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,PA=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],LA=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Pw(t){const e=Array(3),n=DA,s=xA;for(let i=0;i<3;++i)e[i]=Math.round(IA(n(s[i][0]*t[0]+s[i][1]*t[1]+s[i][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Nf(t){let{r:e,g:n,b:s}=t;const i=[0,0,0],r=LA,o=PA;e=r(e/255),n=r(n/255),s=r(s/255);for(let a=0;a<3;++a)i[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return i}const Kl=.20689655172413793,MA=t=>t>Kl**3?Math.cbrt(t):t/(3*Kl**2)+4/29,FA=t=>t>Kl?t**3:3*Kl**2*(t-4/29);function Lw(t){const e=MA,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Mw(t){const e=FA,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function pm(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function ai(t){if(typeof t=="number")return(isNaN(t)||t<0||t>16777215)&&lr(`'${t}' is not a valid hex color`),{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;[3,4].includes(e.length)?e=e.split("").map(s=>s+s).join(""):[6,8].includes(e.length)||lr(`'${t}' is not a valid hex(a) color`);const n=parseInt(e,16);return(isNaN(n)||n<0||n>4294967295)&&lr(`'${t}' is not a valid hex(a) color`),UA(e)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`)}function al(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function $A(t){let{r:e,g:n,b:s,a:i}=t;return`#${[al(e),al(n),al(s),i!==void 0?al(Math.round(i*255)):""].join("")}`}function UA(t){t=VA(t);let[e,n,s,i]=TA(t,2).map(r=>parseInt(r,16));return i=i===void 0?i:i/255,{r:e,g:n,b:s,a:i}}function VA(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=um(um(t,6),8,"F")),t}function BA(t,e){const n=Lw(Nf(t));return n[0]=n[0]+e*10,Pw(Mw(n))}function jA(t,e){const n=Lw(Nf(t));return n[0]=n[0]-e*10,Pw(Mw(n))}function HA(t){const e=ai(t);return Nf(e)[1]}function nn(t,e){const n=Fr();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function Fi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=nn(t).type;return As((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Fw=0,Nl=new WeakMap;function Ia(){const t=nn("getUid");if(Nl.has(t))return Nl.get(t);{const e=Fw++;return Nl.set(t,e),e}}Ia.reset=()=>{Fw=0,Nl=new WeakMap};function WA(t){const{provides:e}=nn("injectSelf");if(e&&t in e)return e[t]}function Me(t,e){return n=>Object.keys(t).reduce((s,i)=>{const o=typeof t[i]=="object"&&t[i]!=null&&!Array.isArray(t[i])?t[i]:{type:t[i]};return n&&i in n?s[i]={...o,default:n[i]}:s[i]=o,e&&!s[i].source&&(s[i].source=e),s},{})}function $w(t,e){let n;function s(){n=Vc(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}Ye(t,i=>{i&&!n?s():i||(n==null||n.stop(),n=void 0)},{immediate:!0}),cf(()=>{n==null||n.stop()})}function zA(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[As(e)])<"u"}function Ta(t){var e,n;if(t._setup=(e=t._setup)!=null?e:t.setup,!t.name)return lr("The component is missing an explicit name, unable to generate default prop value"),t;if(t._setup){t.props=Me((n=t.props)!=null?n:{},As(t.name))();const s=Object.keys(t.props);t.filterProps=function(r){return Nw(r,s)},t.props._as=String,t.setup=function(r,o){const a=Uw();if(!a.value)return t._setup(r,o);const l=Fr(),c=I(()=>{var f;return a.value[(f=r._as)!=null?f:t.name]}),u=new Proxy(r,{get(f,p){var y,w,E,C;const m=Reflect.get(f,p);return typeof p=="string"&&!zA(l.vnode,p)&&(C=(E=(y=c.value)==null?void 0:y[p])!=null?E:(w=a.value.global)==null?void 0:w[p])!=null?C:m}}),h=vf();ba(()=>{if(c.value){const f=Object.entries(c.value).filter(p=>{let[m]=p;return m.startsWith(m[0].toUpperCase())});f.length&&(h.value=Object.fromEntries(f))}});const d=t._setup(u,o);return $w(h,()=>{var f,p;$r(ss((p=(f=WA(Go))==null?void 0:f.value)!=null?p:{},h.value))}),d}}return t}function Ke(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Ta:js)(e)}function Of(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Ke()({name:n!=null?n:Dr(cn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(s,i){let{slots:r}=i;return()=>{var o;return us(s.tag,{class:t},(o=r.default)==null?void 0:o.call(r))}}})}const un=typeof window<"u",xf=un&&"IntersectionObserver"in window,qA=un&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),oW=un&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)");function ut(t){const e=nn("useRender");e.render=t}const Go=Symbol.for("vuetify:defaults");function KA(t){return X(t)}function Uw(){const t=Le(Go);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function $r(t,e){const n=Uw(),s=X(t),i=I(()=>{if(Je(e==null?void 0:e.disabled))return n.value;const o=Je(e==null?void 0:e.scoped),a=Je(e==null?void 0:e.reset),l=Je(e==null?void 0:e.root);let c=ss(s.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let h=0;h<=u&&!(!c||!("prev"in c));h++)c=c.prev;return c}return c.prev?ss(c.prev,c):c});return Wt(Go,i),i}const Jh=Symbol.for("vuetify:display"),gm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},GA=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gm;return ss(gm,t)};function mm(t){return un&&!t?window.innerWidth:0}function vm(t){return un&&!t?window.innerHeight:0}function ym(t){const e=un&&!t?window.navigator.userAgent:"ssr";function n(p){return Boolean(e.match(p))}const s=n(/android/i),i=n(/iphone|ipad|ipod/i),r=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),h=n(/win/i),d=n(/mac/i),f=n(/linux/i);return{android:s,ios:i,cordova:r,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:h,mac:d,linux:f,touch:qA,ssr:e==="ssr"}}function YA(t,e){const{thresholds:n,mobileBreakpoint:s}=GA(t),i=X(vm(e)),r=vf(ym(e)),o=Nt({}),a=X(mm(e));function l(){i.value=vm(),a.value=mm()}function c(){l(),r.value=ym()}return ba(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,d=a.value<n.lg&&!(h||u),f=a.value<n.xl&&!(d||h||u),p=a.value<n.xxl&&!(f||d||h||u),m=a.value>=n.xxl,y=u?"xs":h?"sm":d?"md":f?"lg":p?"xl":"xxl",w=typeof s=="number"?s:n[s],E=a.value<w;o.xs=u,o.sm=h,o.md=d,o.lg=f,o.xl=p,o.xxl=m,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||d),o.xlAndUp=!(u||h||d||f),o.smAndDown=!(d||f||p||m),o.mdAndDown=!(f||p||m),o.lgAndDown=!(p||m),o.xlAndDown=!m,o.name=y,o.height=i.value,o.width=a.value,o.mobile=E,o.mobileBreakpoint=s,o.platform=r.value,o.thresholds=n}),un&&window.addEventListener("resize",l,{passive:!0}),{...Hc(o),update:c,ssr:!!e}}function QA(){const t=Le(Jh);if(!t)throw new Error("Could not find Vuetify display injection");return t}const XA={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},JA={component:t=>us(Vw,{...t,class:"mdi"})},Ms=[String,Function,Object],Zh=Symbol.for("vuetify:icons"),Xc=Me({icon:{type:Ms},tag:{type:String,required:!0}},"icon"),_m=Ke()({name:"VComponentIcon",props:Xc(),setup(t,e){let{slots:n}=e;return()=>b(t.tag,null,{default:()=>{var s;return[t.icon?b(t.icon,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}),ZA=Ta({name:"VSvgIcon",inheritAttrs:!1,props:Xc(),setup(t,e){let{attrs:n}=e;return()=>b(t.tag,Mi(n,{style:null}),{default:()=>[b("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[b("path",{d:t.icon},null)])]})}}),eR=Ta({name:"VLigatureIcon",props:Xc(),setup(t){return()=>b(t.tag,null,{default:()=>[t.icon]})}}),Vw=Ta({name:"VClassIcon",props:Xc(),setup(t){return()=>b(t.tag,{class:t.icon},null)}}),tR={svg:{component:ZA},class:{component:Vw}};function nR(t){return ss({defaultSet:"mdi",sets:{...tR,mdi:JA},aliases:XA},t)}const sR=t=>{const e=Le(Zh);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:I(()=>{var l;const s=Pe(t)?t.value:t.icon;if(!s)return{component:_m};let i=s;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(l=e.aliases)==null?void 0:l[i.slice(1)])),!i)throw new Error(`Could not find aliased icon "${s}"`);if(typeof i!="string")return{component:_m,icon:i};const r=Object.keys(e.sets).find(c=>typeof i=="string"&&i.startsWith(`${c}:`)),o=r?i.slice(r.length+1):i;return{component:e.sets[r!=null?r:e.defaultSet].component,icon:o}})}};function Ei(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const r=nn("useProxiedModel"),o=X(t[e]!==void 0?t[e]:n),a=As(e),c=I(a!==e?()=>{var h,d,f,p;return t[e],!!((((h=r.vnode.props)==null?void 0:h.hasOwnProperty(e))||((d=r.vnode.props)==null?void 0:d.hasOwnProperty(a)))&&(((f=r.vnode.props)==null?void 0:f.hasOwnProperty(`onUpdate:${e}`))||((p=r.vnode.props)==null?void 0:p.hasOwnProperty(`onUpdate:${a}`))))}:()=>{var h,d;return t[e],!!(((h=r.vnode.props)==null?void 0:h.hasOwnProperty(e))&&((d=r.vnode.props)==null?void 0:d.hasOwnProperty(`onUpdate:${e}`)))});$w(()=>!c.value,()=>{Ye(()=>t[e],h=>{o.value=h})});const u=I({get(){return s(c.value?t[e]:o.value)},set(h){const d=i(h),f=ce(c.value?t[e]:o.value);f===d||s(f)===h||(o.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const iR={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading..."},wm="$vuetify.",bm=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),Bw=(t,e,n)=>function(s){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if(!s.startsWith(wm))return bm(s,r);const a=s.replace(wm,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Yh(l,a,null);return u||(lr(`Translation key "${s}" not found in "${t.value}", trying fallback locale`),u=Yh(c,a,null)),u||(fm(`Translation key "${s}" not found in fallback`),u=s),typeof u!="string"&&(fm(`Translation key "${s}" has a non-string value`),u=s),bm(u,r)};function jw(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function nh(t,e,n){var i,r;const s=Ei(t,e,(i=t[e])!=null?i:n.value);return s.value=(r=t[e])!=null?r:n.value,Ye(n,o=>{t[e]==null&&(s.value=n.value)}),s}function Hw(t){return e=>{const n=nh(e,"locale",t.current),s=nh(e,"fallback",t.fallback),i=nh(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:i,t:Bw(n,s,i),n:jw(n,s),provide:Hw({current:n,fallback:s,messages:i})}}}function rR(t){var i,r;const e=X((i=t==null?void 0:t.locale)!=null?i:"en"),n=X((r=t==null?void 0:t.fallback)!=null?r:"en"),s=X({en:iR,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:Bw(e,n,s),n:jw(e,n),provide:Hw({current:e,fallback:n,messages:s})}}const oR={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Gl=Symbol.for("vuetify:locale");function aR(t){return t.name!=null}function lR(t){const e=(t==null?void 0:t.adapter)&&aR(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:rR(t),n=cR(e,t);return{...e,...n}}function aW(){const t=Le(Gl);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function cR(t,e){var i;const n=X((i=e==null?void 0:e.rtl)!=null?i:oR),s=I(()=>{var r;return(r=n.value[t.current.value])!=null?r:!1});return{isRtl:s,rtl:n,rtlClasses:I(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function Jc(){const t=Le(Gl);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Ki=2.4,Em=.2126729,Im=.7151522,Tm=.072175,uR=.55,hR=.58,dR=.57,fR=.62,ll=.03,Cm=1.45,pR=5e-4,gR=1.25,mR=1.25,Sm=.078,km=12.82051282051282,cl=.06,Am=.001;function Rm(t,e){const n=(t.r/255)**Ki,s=(t.g/255)**Ki,i=(t.b/255)**Ki,r=(e.r/255)**Ki,o=(e.g/255)**Ki,a=(e.b/255)**Ki;let l=n*Em+s*Im+i*Tm,c=r*Em+o*Im+a*Tm;if(l<=ll&&(l+=(ll-l)**Cm),c<=ll&&(c+=(ll-c)**Cm),Math.abs(c-l)<pR)return 0;let u;if(c>l){const h=(c**uR-l**hR)*gR;u=h<Am?0:h<Sm?h-h*km*cl:h-cl}else{const h=(c**fR-l**dR)*mR;u=h>-Am?0:h>-Sm?h-h*km*cl:h+cl}return u*100}const Yo=Symbol.for("vuetify:theme"),An=Me({theme:String},"theme"),oo={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function vR(){var n,s,i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:oo;if(!t)return{...oo,isDisabled:!0};const e={};for(const[r,o]of Object.entries((n=t.themes)!=null?n:{})){const a=o.dark||r==="dark"?(s=oo.themes)==null?void 0:s.dark:(i=oo.themes)==null?void 0:i.light;e[r]=ss(a,o)}return ss(oo,{...t,themes:e})}function yR(t){const e=Nt(vR(t)),n=X(e.defaultTheme),s=X(e.themes),i=I(()=>{const u={};for(const[h,d]of Object.entries(s.value)){const f=u[h]={...d,colors:{...d.colors}};if(e.variations)for(const p of e.variations.colors){const m=f.colors[p];if(!!m)for(const y of["lighten","darken"]){const w=y==="lighten"?BA:jA;for(const E of bA(e.variations[y],1))f.colors[`${p}-${y}-${E}`]=$A(w(ai(m),E))}}for(const p of Object.keys(f.colors)){if(/^on-[a-z]/.test(p)||f.colors[`on-${p}`])continue;const m=`on-${p}`,y=ai(f.colors[p]),w=Math.abs(Rm(ai(0),y)),E=Math.abs(Rm(ai(16777215),y));f.colors[m]=E>Math.min(w,50)?"#fff":"#000"}}return u}),r=I(()=>i.value[n.value]),o=I(()=>{const u=[];r.value.dark&&Zs(u,":root",["color-scheme: dark"]),Zs(u,":root",Nm(r.value));for(const[p,m]of Object.entries(i.value))Zs(u,`.v-theme--${p}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...Nm(m)]);const h=[],d=[],f=new Set(Object.values(i.value).flatMap(p=>Object.keys(p.colors)));for(const p of f)/^on-[a-z]/.test(p)?Zs(d,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(Zs(h,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),Zs(d,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),Zs(d,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return u.push(...h,...d),u.map((p,m)=>m===0?p:`    ${p}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){const h=u._context.provides.usehead;if(h)if(h.push){const d=h.push(a);Ye(o,()=>{d.patch(a)})}else un?(h.addHeadObjs(I(a)),ba(()=>h.updateDOM())):h.addHeadObjs(a());else{let f=function(){if(!e.isDisabled){if(typeof document<"u"&&!d){const p=document.createElement("style");p.type="text/css",p.id="vuetify-theme-stylesheet",e.cspNonce&&p.setAttribute("nonce",e.cspNonce),d=p,document.head.appendChild(d)}d&&(d.innerHTML=o.value)}},d=un?document.getElementById("vuetify-theme-stylesheet"):null;Ye(o,f,{immediate:!0})}}const c=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:s,current:r,computedThemes:i,themeClasses:c,styles:o,global:{name:n,current:r}}}function zn(t){nn("provideTheme");const e=Le(Yo,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=I(()=>{var r;return(r=t.theme)!=null?r:e==null?void 0:e.name.value}),s=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,themeClasses:s};return Wt(Yo,i),i}function _R(){nn("useTheme");const t=Le(Yo,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function Zs(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function Nm(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[i,r]of Object.entries(t.colors)){const o=ai(r);s.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||s.push(`--v-theme-${i}-overlay-multiplier: ${HA(r)>.18?e:n}`)}for(const[i,r]of Object.entries(t.variables)){const o=typeof r=="string"&&r.startsWith("#")?ai(r):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${i}: ${a!=null?a:r}`)}return s}function Ww(t){const e=X(),n=X();if(un){const s=new ResizeObserver(i=>{t==null||t(i,s),i.length&&(n.value=i[0].contentRect)});kn(()=>{s.disconnect()}),Ye(e,(i,r)=>{r&&(s.unobserve(r),n.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:e,contentRect:jc(n)}}const Yl=Symbol.for("vuetify:layout"),zw=Symbol.for("vuetify:layout-item"),Om=1e3,wR=Me({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Df=Me({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function bR(){const t=Le(Yl);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function Pf(t){var a;const e=Le(Yl);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=(a=t.id)!=null?a:`layout-item-${Ia()}`,s=nn("useLayoutItem");Wt(zw,{id:n});const i=X(!1);tw(()=>i.value=!0),ew(()=>i.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:o}=e.register(s,{...t,active:I(()=>i.value?!1:t.active.value),id:n});return kn(()=>e.unregister(n)),{layoutItemStyles:r,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const ER=(t,e,n,s)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const o of t){const a=e.get(o),l=n.get(o),c=s.get(o);if(!a||!l||!c)continue;const u={...i,[a.value]:parseInt(i[a.value],10)+(c.value?parseInt(l.value,10):0)};r.push({id:o,layer:u}),i=u}return r};function IR(t){const e=Le(Yl,null),n=I(()=>e?e.rootZIndex.value-100:Om),s=X([]),i=Nt(new Map),r=Nt(new Map),o=Nt(new Map),a=Nt(new Map),l=Nt(new Map),{resizeRef:c,contentRect:u}=Ww(),h=I(()=>{var _;const A=new Map,O=(_=t.overlaps)!=null?_:[];for(const F of O.filter($=>$.includes(":"))){const[$,q]=F.split(":");if(!s.value.includes($)||!s.value.includes(q))continue;const V=i.get($),he=i.get(q),pe=r.get($),me=r.get(q);!V||!he||!pe||!me||(A.set(q,{position:V.value,amount:parseInt(pe.value,10)}),A.set($,{position:he.value,amount:-parseInt(me.value,10)}))}return A}),d=I(()=>{const A=[...new Set([...o.values()].map(_=>_.value))].sort((_,F)=>_-F),O=[];for(const _ of A){const F=s.value.filter($=>{var q;return((q=o.get($))==null?void 0:q.value)===_});O.push(...F)}return ER(O,i,r,a)}),f=I(()=>!Array.from(l.values()).some(A=>A.value)),p=I(()=>d.value[d.value.length-1].layer),m=I(()=>({"--v-layout-left":ve(p.value.left),"--v-layout-right":ve(p.value.right),"--v-layout-top":ve(p.value.top),"--v-layout-bottom":ve(p.value.bottom),...f.value?void 0:{transition:"none"}})),y=I(()=>d.value.slice(1).map((A,O)=>{let{id:_}=A;const{layer:F}=d.value[O],$=r.get(_),q=i.get(_);return{id:_,...F,size:Number($.value),position:q.value}})),w=A=>y.value.find(O=>O.id===A),E=nn("createLayout"),C=X(!1);Li(()=>{C.value=!0}),Wt(Yl,{register:(A,O)=>{let{id:_,order:F,position:$,layoutSize:q,elementSize:V,active:he,disableTransitions:pe,absolute:me}=O;o.set(_,F),i.set(_,$),r.set(_,q),a.set(_,he),pe&&l.set(_,pe);const Q=So(zw,E==null?void 0:E.vnode).indexOf(A);Q>-1?s.value.splice(Q,0,_):s.value.push(_);const fe=I(()=>y.value.findIndex($e=>$e.id===_)),Ae=I(()=>n.value+d.value.length*2-fe.value*2),Bt=I(()=>{const $e=$.value==="left"||$.value==="right",Tt=$.value==="right",Rn=$.value==="bottom",k={[$.value]:0,zIndex:Ae.value,transform:`translate${$e?"X":"Y"}(${(he.value?0:-110)*(Tt||Rn?-1:1)}%)`,position:me.value||n.value!==Om?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!C.value)return k;const M=y.value[fe.value];if(!M)throw new Error(`[Vuetify] Could not find layout item "${_}"`);const B=h.value.get(_);return B&&(M[B.position]+=B.amount),{...k,height:$e?`calc(100% - ${M.top}px - ${M.bottom}px)`:V.value?`${V.value}px`:void 0,left:Tt?void 0:`${M.left}px`,right:Tt?`${M.right}px`:void 0,top:$.value!=="bottom"?`${M.top}px`:void 0,bottom:$.value!=="top"?`${M.bottom}px`:void 0,width:$e?V.value?`${V.value}px`:void 0:`calc(100% - ${M.left}px - ${M.right}px)`}}),rt=I(()=>({zIndex:Ae.value-1}));return{layoutItemStyles:Bt,layoutItemScrimStyles:rt,zIndex:Ae}},unregister:A=>{o.delete(A),i.delete(A),r.delete(A),a.delete(A),l.delete(A),s.value=s.value.filter(O=>O!==A)},mainRect:p,mainStyles:m,getLayoutItem:w,items:y,layoutRect:u,rootZIndex:n});const D=I(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),N=I(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:D,layoutStyles:N,getLayoutItem:w,items:y,layoutRect:u,layoutRef:c}}function qw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=ss(e,n),{aliases:i={},components:r={},directives:o={}}=s,a=KA(s.defaults),l=YA(s.display,s.ssr),c=yR(s.theme),u=nR(s.icons),h=lR(s.locale);return{install:f=>{for(const p in o)f.directive(p,o[p]);for(const p in r)f.component(p,r[p]);for(const p in i)f.component(p,Ta({...i[p],name:p,aliasName:i[p].name}));if(c.install(f),f.provide(Go,a),f.provide(Jh,l),f.provide(Yo,c),f.provide(Zh,u),f.provide(Gl,h),un&&s.ssr)if(f.$nuxt)f.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:p}=f;f.mount=function(){const m=p(...arguments);return Bs(()=>l.update()),f.mount=p,m}}Ia.reset(),f.mixin({computed:{$vuetify(){return Nt({defaults:ao.call(this,Go),display:ao.call(this,Jh),theme:ao.call(this,Yo),icons:ao.call(this,Zh),locale:ao.call(this,Gl)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h}}const TR="3.1.13";qw.version=TR;function ao(t){var s,i,r;const e=this.$,n=(r=(s=e.parent)==null?void 0:s.provides)!=null?r:(i=e.vnode.appContext)==null?void 0:i.provides;if(n&&t in n)return n[t]}const CR={collapse:"keyboard_arrow_up",complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"cancel",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sortAsc:"arrow_upward",sortDesc:"arrow_downward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},SR={component:t=>us(eR,{...t,class:"material-icons"})},kR=qw({theme:{defaultTheme:"light",themes:{light:{colors:{primary:"#AB47BC",secondary:"#CE93D8"}},dark:{colors:{primary:"#AB47BC",secondary:"#CE93D8"}}}},icons:{defaultSet:"md",aliases:CR,sets:{md:SR}}});var AR=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Kw;const Zc=t=>Kw=t,Gw=Symbol();function ed(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ko;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ko||(ko={}));function RR(){const t=Vc(!0),e=t.run(()=>X({}));let n=[],s=[];const i=vr({install(r){Zc(i),i._a=r,r.provide(Gw,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!AR?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Yw=()=>{};function xm(t,e,n,s=Yw){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&A_()&&cf(i),i}function Gi(t,...e){t.slice().forEach(n=>{n(...e)})}function td(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ed(i)&&ed(s)&&t.hasOwnProperty(n)&&!Pe(s)&&!Ss(s)?t[n]=td(i,s):t[n]=s}return t}const NR=Symbol();function OR(t){return!ed(t)||!t.hasOwnProperty(NR)}const{assign:ys}=Object;function xR(t){return!!(Pe(t)&&t.effect)}function DR(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Hc(n.state.value[t]);return ys(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=vr(I(()=>{Zc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Qw(t,c,e,n,s,!0),l}function Qw(t,e,n={},s,i,r){let o;const a=ys({actions:{}},n),l={deep:!0};let c,u,h=vr([]),d=vr([]),f;const p=s.state.value[t];!r&&!p&&(s.state.value[t]={}),X({});let m;function y(O){let _;c=u=!1,typeof O=="function"?(O(s.state.value[t]),_={type:ko.patchFunction,storeId:t,events:f}):(td(s.state.value[t],O),_={type:ko.patchObject,payload:O,storeId:t,events:f});const F=m=Symbol();Bs().then(()=>{m===F&&(c=!0)}),u=!0,Gi(h,_,s.state.value[t])}const w=r?function(){const{state:_}=n,F=_?_():{};this.$patch($=>{ys($,F)})}:Yw;function E(){o.stop(),h=[],d=[],s._s.delete(t)}function C(O,_){return function(){Zc(s);const F=Array.from(arguments),$=[],q=[];function V(me){$.push(me)}function he(me){q.push(me)}Gi(d,{args:F,name:O,store:N,after:V,onError:he});let pe;try{pe=_.apply(this&&this.$id===t?this:N,F)}catch(me){throw Gi(q,me),me}return pe instanceof Promise?pe.then(me=>(Gi($,me),me)).catch(me=>(Gi(q,me),Promise.reject(me))):(Gi($,pe),pe)}}const D={_p:s,$id:t,$onAction:xm.bind(null,d),$patch:y,$reset:w,$subscribe(O,_={}){const F=xm(h,O,_.detached,()=>$()),$=o.run(()=>Ye(()=>s.state.value[t],q=>{(_.flush==="sync"?u:c)&&O({storeId:t,type:ko.direct,events:f},q)},ys({},l,_)));return F},$dispose:E},N=Nt(D);s._s.set(t,N);const A=s._e.run(()=>(o=Vc(),o.run(()=>e())));for(const O in A){const _=A[O];if(Pe(_)&&!xR(_)||Ss(_))r||(p&&OR(_)&&(Pe(_)?_.value=p[O]:td(_,p[O])),s.state.value[t][O]=_);else if(typeof _=="function"){const F=C(O,_);A[O]=F,a.actions[O]=_}}return ys(N,A),ys(ce(N),A),Object.defineProperty(N,"$state",{get:()=>s.state.value[t],set:O=>{y(_=>{ys(_,O)})}}),s._p.forEach(O=>{ys(N,o.run(()=>O({store:N,app:s._a,pinia:s,options:a})))}),p&&r&&n.hydrate&&n.hydrate(N.$state,p),c=!0,u=!0,N}function Xw(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Fr();return a=a||c&&Le(Gw,null),a&&Zc(a),a=Kw,a._s.has(s)||(r?Qw(s,e,i,a):DR(s,i,a)),a._s.get(s)}return o.$id=s,o}const PR=RR();/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ji=typeof window<"u";function LR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function sh(t,e){const n={};for(const s in e){const i=e[s];n[s]=Sn(i)?i.map(t):t(i)}return n}const Ao=()=>{},Sn=Array.isArray,MR=/\/$/,FR=t=>t.replace(MR,"");function ih(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=BR(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function $R(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&_r(e.matched[s],n.matched[i])&&Jw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _r(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VR(t[n],e[n]))return!1;return!0}function VR(t,e){return Sn(t)?Pm(t,e):Sn(e)?Pm(e,t):t===e}function Pm(t,e){return Sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function BR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Qo;(function(t){t.pop="pop",t.push="push"})(Qo||(Qo={}));var Ro;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ro||(Ro={}));function jR(t){if(!t)if(Ji){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FR(t)}const HR=/^[^#]+#/;function WR(t,e){return t.replace(HR,"#")+e}function zR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const eu=()=>({left:window.pageXOffset,top:window.pageYOffset});function qR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Lm(t,e){return(history.state?history.state.position-e:-1)+t}const nd=new Map;function KR(t,e){nd.set(t,e)}function GR(t){const e=nd.get(t);return nd.delete(t),e}let YR=()=>location.protocol+"//"+location.host;function Zw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Dm(l,"")}return Dm(n,t)+s+i}function QR(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=Zw(t,location),p=n.value,m=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}y=m?d.position-m.position:0}else s(f);i.forEach(w=>{w(n.value,p,{delta:y,type:Qo.pop,direction:y?y>0?Ro.forward:Ro.back:Ro.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return r.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Oe({},d.state,{scroll:eu()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Mm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?eu():null}}function XR(t){const{history:e,location:n}=window,s={value:Zw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:YR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Oe({},e.state,Mm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Oe({},i.value,e.state,{forward:l,scroll:eu()});r(u.current,u,!0);const h=Oe({},Mm(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function JR(t){t=jR(t);const e=XR(t),n=QR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Oe({location:"",base:t,go:s,createHref:WR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ZR(t){return typeof t=="string"||t&&typeof t=="object"}function eb(t){return typeof t=="string"||typeof t=="symbol"}const ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tb=Symbol("");var Fm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fm||(Fm={}));function wr(t,e){return Oe(new Error,{type:t,[tb]:!0},e)}function Kn(t,e){return t instanceof Error&&tb in t&&(e==null||!!(t.type&e))}const $m="[^/]+?",eN={sensitive:!1,strict:!1,start:!0,end:!0},tN=/[.+*?^${}()[\]/\\]/g;function nN(t,e){const n=Oe({},eN,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(tN,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:m,optional:y,regexp:w}=d;r.push({name:p,repeatable:m,optional:y});const E=w||$m;if(E!==$m){f+=10;try{new RegExp(`(${E})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${p}" (${E}): `+D.message)}}let C=m?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(C=y&&c.length<2?`(?:/${C})`:"/"+C),y&&(C+="?"),i+=C,f+=20,y&&(f+=-8),m&&(f+=-20),E===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=r[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:m,optional:y}=f,w=p in c?c[p]:"";if(Sn(w)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const E=Sn(w)?w.join("/"):w;if(!E)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function sN(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iN(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=sN(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Um(s))return 1;if(Um(i))return-1}return i.length-s.length}function Um(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rN={type:0,value:""},oN=/[a-zA-Z0-9_]/;function aN(t){if(!t)return[[]];if(t==="/")return[[rN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:oN.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function lN(t,e,n){const s=nN(aN(t.path),n),i=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cN(t,e){const n=[],s=new Map;e=jm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,p=uN(u);p.aliasOf=d&&d.record;const m=jm(e,u),y=[p];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of C)y.push(Oe({},p,{components:d?d.record.components:p.components,path:D,aliasOf:d?d.record:p}))}let w,E;for(const C of y){const{path:D}=C;if(h&&D[0]!=="/"){const N=h.record.path,A=N[N.length-1]==="/"?"":"/";C.path=h.record.path+(D&&A+D)}if(w=lN(C,h,m),d?d.alias.push(w):(E=E||w,E!==w&&E.alias.push(w),f&&u.name&&!Bm(w)&&o(u.name)),p.children){const N=p.children;for(let A=0;A<N.length;A++)r(N[A],w,d&&d.children[A])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return E?()=>{o(E)}:Ao}function o(u){if(eb(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&iN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Bm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},p,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw wr(1,{location:u});m=d.record.name,f=Oe(Vm(h.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Vm(u.params,d.keys.map(E=>E.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(E=>E.re.test(p)),d&&(f=d.parse(p),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!d)throw wr(1,{location:u,currentLocation:h});m=d.record.name,f=Oe({},h.params,u.params),p=d.stringify(f)}const y=[];let w=d;for(;w;)y.unshift(w.record),w=w.parent;return{name:m,path:p,params:f,matched:y,meta:dN(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Vm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function uN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Bm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dN(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function jm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function nb(t,e){return e.children.some(n=>n===t||nb(t,n))}const sb=/#/g,fN=/&/g,pN=/\//g,gN=/=/g,mN=/\?/g,ib=/\+/g,vN=/%5B/g,yN=/%5D/g,rb=/%5E/g,_N=/%60/g,ob=/%7B/g,wN=/%7C/g,ab=/%7D/g,bN=/%20/g;function Lf(t){return encodeURI(""+t).replace(wN,"|").replace(vN,"[").replace(yN,"]")}function EN(t){return Lf(t).replace(ob,"{").replace(ab,"}").replace(rb,"^")}function sd(t){return Lf(t).replace(ib,"%2B").replace(bN,"+").replace(sb,"%23").replace(fN,"%26").replace(_N,"`").replace(ob,"{").replace(ab,"}").replace(rb,"^")}function IN(t){return sd(t).replace(gN,"%3D")}function TN(t){return Lf(t).replace(sb,"%23").replace(mN,"%3F")}function CN(t){return t==null?"":TN(t).replace(pN,"%2F")}function Ql(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ib," "),o=r.indexOf("="),a=Ql(o<0?r:r.slice(0,o)),l=o<0?null:Ql(r.slice(o+1));if(a in e){let c=e[a];Sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Hm(t){let e="";for(let n in t){const s=t[n];if(n=IN(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(s)?s.map(r=>r&&sd(r)):[s&&sd(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function kN(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const AN=Symbol(""),Wm=Symbol(""),tu=Symbol(""),Mf=Symbol(""),id=Symbol("");function lo(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ws(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(wr(4,{from:n,to:e})):h instanceof Error?a(h):ZR(h)?a(wr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function rh(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(RN(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ws(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=LR(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ws(d,n,s,r,o)()}))}}return i}function RN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zm(t){const e=Le(tu),n=Le(Mf),s=I(()=>e.resolve(Je(t.to))),i=I(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(_r.bind(null,u));if(d>-1)return d;const f=qm(l[c-2]);return c>1&&qm(u)===f&&h[h.length-1].path!==f?h.findIndex(_r.bind(null,l[c-2])):d}),r=I(()=>i.value>-1&&DN(n.params,s.value.params)),o=I(()=>i.value>-1&&i.value===n.matched.length-1&&Jw(n.params,s.value.params));function a(l={}){return xN(l)?e[Je(t.replace)?"replace":"push"](Je(t.to)).catch(Ao):Promise.resolve()}return{route:s,href:I(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const NN=js({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zm,setup(t,{slots:e}){const n=Nt(zm(t)),{options:s}=Le(tu),i=I(()=>({[Km(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Km(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:us("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ON=NN;function xN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DN(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function qm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Km=(t,e,n)=>t!=null?t:e!=null?e:n,PN=js({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Le(id),i=I(()=>t.route||s.value),r=Le(Wm,0),o=I(()=>{let c=Je(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=I(()=>i.value.matched[o.value]);Wt(Wm,I(()=>o.value+1)),Wt(AN,a),Wt(id,i);const l=X();return Ye(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!_r(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Gm(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=us(d,Oe({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Gm(n.default,{Component:y,route:c})||y}}});function Gm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const LN=PN;function MN(t){const e=cN(t.routes,t),n=t.parseQuery||SN,s=t.stringifyQuery||Hm,i=t.history,r=lo(),o=lo(),a=lo(),l=vf(ps);let c=ps;Ji&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sh.bind(null,k=>""+k),h=sh.bind(null,CN),d=sh.bind(null,Ql);function f(k,M){let B,J;return eb(k)?(B=e.getRecordMatcher(k),J=M):J=k,e.addRoute(J,B)}function p(k){const M=e.getRecordMatcher(k);M&&e.removeRoute(M)}function m(){return e.getRoutes().map(k=>k.record)}function y(k){return!!e.getRecordMatcher(k)}function w(k,M){if(M=Oe({},M||l.value),typeof k=="string"){const g=ih(n,k,M.path),v=e.resolve({path:g.path},M),T=i.createHref(g.fullPath);return Oe(g,v,{params:d(v.params),hash:Ql(g.hash),redirectedFrom:void 0,href:T})}let B;if("path"in k)B=Oe({},k,{path:ih(n,k.path,M.path).path});else{const g=Oe({},k.params);for(const v in g)g[v]==null&&delete g[v];B=Oe({},k,{params:h(k.params)}),M.params=h(M.params)}const J=e.resolve(B,M),Ce=k.hash||"";J.params=u(d(J.params));const Ge=$R(s,Oe({},k,{hash:EN(Ce),path:J.path})),ge=i.createHref(Ge);return Oe({fullPath:Ge,hash:Ce,query:s===Hm?kN(k.query):k.query||{}},J,{redirectedFrom:void 0,href:ge})}function E(k){return typeof k=="string"?ih(n,k,l.value.path):Oe({},k)}function C(k,M){if(c!==k)return wr(8,{from:M,to:k})}function D(k){return O(k)}function N(k){return D(Oe(E(k),{replace:!0}))}function A(k){const M=k.matched[k.matched.length-1];if(M&&M.redirect){const{redirect:B}=M;let J=typeof B=="function"?B(k):B;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=E(J):{path:J},J.params={}),Oe({query:k.query,hash:k.hash,params:"path"in J?{}:k.params},J)}}function O(k,M){const B=c=w(k),J=l.value,Ce=k.state,Ge=k.force,ge=k.replace===!0,g=A(B);if(g)return O(Oe(E(g),{state:typeof g=="object"?Oe({},Ce,g.state):Ce,force:Ge,replace:ge}),M||B);const v=B;v.redirectedFrom=M;let T;return!Ge&&UR(s,J,B)&&(T=wr(16,{to:v,from:J}),Bt(J,J,!0,!1)),(T?Promise.resolve(T):F(v,J)).catch(S=>Kn(S)?Kn(S,2)?S:Ae(S):Q(S,v,J)).then(S=>{if(S){if(Kn(S,2))return O(Oe({replace:ge},E(S.to),{state:typeof S.to=="object"?Oe({},Ce,S.to.state):Ce,force:Ge}),M||v)}else S=q(v,J,!0,ge,Ce);return $(v,J,S),S})}function _(k,M){const B=C(k,M);return B?Promise.reject(B):Promise.resolve()}function F(k,M){let B;const[J,Ce,Ge]=FN(k,M);B=rh(J.reverse(),"beforeRouteLeave",k,M);for(const g of J)g.leaveGuards.forEach(v=>{B.push(ws(v,k,M))});const ge=_.bind(null,k,M);return B.push(ge),Yi(B).then(()=>{B=[];for(const g of r.list())B.push(ws(g,k,M));return B.push(ge),Yi(B)}).then(()=>{B=rh(Ce,"beforeRouteUpdate",k,M);for(const g of Ce)g.updateGuards.forEach(v=>{B.push(ws(v,k,M))});return B.push(ge),Yi(B)}).then(()=>{B=[];for(const g of k.matched)if(g.beforeEnter&&!M.matched.includes(g))if(Sn(g.beforeEnter))for(const v of g.beforeEnter)B.push(ws(v,k,M));else B.push(ws(g.beforeEnter,k,M));return B.push(ge),Yi(B)}).then(()=>(k.matched.forEach(g=>g.enterCallbacks={}),B=rh(Ge,"beforeRouteEnter",k,M),B.push(ge),Yi(B))).then(()=>{B=[];for(const g of o.list())B.push(ws(g,k,M));return B.push(ge),Yi(B)}).catch(g=>Kn(g,8)?g:Promise.reject(g))}function $(k,M,B){for(const J of a.list())J(k,M,B)}function q(k,M,B,J,Ce){const Ge=C(k,M);if(Ge)return Ge;const ge=M===ps,g=Ji?history.state:{};B&&(J||ge?i.replace(k.fullPath,Oe({scroll:ge&&g&&g.scroll},Ce)):i.push(k.fullPath,Ce)),l.value=k,Bt(k,M,B,ge),Ae()}let V;function he(){V||(V=i.listen((k,M,B)=>{if(!Rn.listening)return;const J=w(k),Ce=A(J);if(Ce){O(Oe(Ce,{replace:!0}),J).catch(Ao);return}c=J;const Ge=l.value;Ji&&KR(Lm(Ge.fullPath,B.delta),eu()),F(J,Ge).catch(ge=>Kn(ge,12)?ge:Kn(ge,2)?(O(ge.to,J).then(g=>{Kn(g,20)&&!B.delta&&B.type===Qo.pop&&i.go(-1,!1)}).catch(Ao),Promise.reject()):(B.delta&&i.go(-B.delta,!1),Q(ge,J,Ge))).then(ge=>{ge=ge||q(J,Ge,!1),ge&&(B.delta&&!Kn(ge,8)?i.go(-B.delta,!1):B.type===Qo.pop&&Kn(ge,20)&&i.go(-1,!1)),$(J,Ge,ge)}).catch(Ao)}))}let pe=lo(),me=lo(),be;function Q(k,M,B){Ae(k);const J=me.list();return J.length?J.forEach(Ce=>Ce(k,M,B)):console.error(k),Promise.reject(k)}function fe(){return be&&l.value!==ps?Promise.resolve():new Promise((k,M)=>{pe.add([k,M])})}function Ae(k){return be||(be=!k,he(),pe.list().forEach(([M,B])=>k?B(k):M()),pe.reset()),k}function Bt(k,M,B,J){const{scrollBehavior:Ce}=t;if(!Ji||!Ce)return Promise.resolve();const Ge=!B&&GR(Lm(k.fullPath,0))||(J||!B)&&history.state&&history.state.scroll||null;return Bs().then(()=>Ce(k,M,Ge)).then(ge=>ge&&qR(ge)).catch(ge=>Q(ge,k,M))}const rt=k=>i.go(k);let $e;const Tt=new Set,Rn={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:m,resolve:w,options:t,push:D,replace:N,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:fe,install(k){const M=this;k.component("RouterLink",ON),k.component("RouterView",LN),k.config.globalProperties.$router=M,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(l)}),Ji&&!$e&&l.value===ps&&($e=!0,D(i.location).catch(Ce=>{}));const B={};for(const Ce in ps)B[Ce]=I(()=>l.value[Ce]);k.provide(tu,M),k.provide(Mf,Nt(B)),k.provide(id,l);const J=k.unmount;Tt.add(k),k.unmount=function(){Tt.delete(k),Tt.size<1&&(c=ps,V&&V(),V=null,l.value=ps,$e=!1,be=!1),J()}}};return Rn}function Yi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function FN(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>_r(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>_r(c,l))||i.push(l))}return[n,s,i]}function lb(){return Le(tu)}function cb(){return Le(Mf)}const ub=Xw("app",()=>{const t=X("Listify"),e=o=>{t.value=o},n=X(!1),s=o=>{n.value=o},i=X(!1);return{pageTitle:t,keyboard:n,inputFocus:i,setTitle:e,hideNavBar:s,setFocus:o=>{i.value=o}}});const Rs=Ke(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:s,disabled:i,reset:r,root:o,scoped:a}=Hc(t);return $r(s,{reset:r,root:o,scoped:a,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return Ke()({name:t,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(s,i){let{slots:r}=i;const o={onBeforeEnter(a){a.style.transformOrigin=s.origin},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${h}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&(a==null?void 0:a._transitionInitialStyles)){const{position:l,top:c,left:u,width:h,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=h||"",a.style.height=d||""}}};return()=>{const a=s.group?Zk:Hs;return us(a,{name:s.disabled?"":t,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:o},r.default)}}})}function hb(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Ke()({name:t,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,i){let{slots:r}=i;return()=>us(Hs,{name:s.disabled?"":t,css:!s.disabled,...s.disabled?{}:e},r.default)}})}function db(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=cn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}sn("fab-transition","center center","out-in");sn("dialog-bottom-transition");sn("dialog-top-transition");const $N=sn("fade-transition");sn("scale-transition");sn("scroll-x-transition");sn("scroll-x-reverse-transition");sn("scroll-y-transition");sn("scroll-y-reverse-transition");sn("slide-x-transition");sn("slide-x-reverse-transition");const lW=sn("slide-y-transition");sn("slide-y-reverse-transition");const UN=hb("expand-transition",db()),cW=hb("expand-x-transition",db("",!0));const Ff=Me({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function $f(t){return{dimensionStyles:I(()=>({height:ve(t.height),maxHeight:ve(t.maxHeight),maxWidth:ve(t.maxWidth),minHeight:ve(t.minHeight),minWidth:ve(t.minWidth),width:ve(t.width)}))}}function VN(t){return{aspectStyles:I(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const BN=Ke()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Ff()},setup(t,e){let{slots:n}=e;const{aspectStyles:s}=VN(t),{dimensionStyles:i}=$f(t);return ut(()=>{var r;return b("div",{class:"v-responsive",style:i.value},[b("div",{class:"v-responsive__sizer",style:s.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&b("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function jN(t,e){if(!xf)return;const n=e.modifiers||{},s=e.value,{handler:i,options:r}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var h;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(h=t._observe)==null?void 0:h[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&i(u,a,l),u&&n.once?fb(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function fb(t,e){var s;const n=(s=t._observe)==null?void 0:s[e.instance.$.uid];!n||(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const HN={mounted:jN,unmounted:fb},WN=HN,zN=Me({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),ul=(t,e)=>{let{slots:n}=e;const{transition:s,...i}=t,{component:r=Hs,...o}=typeof s=="object"?s:{};return us(r,Mi(typeof s=="string"?{name:s}:o,i),n)},pb=Ke()({name:"VImg",directives:{intersect:WN},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...zN()},emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:s}=e;const i=X(""),r=X(),o=X(t.eager?"loading":"idle"),a=X(),l=X(),c=I(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=I(()=>c.value.aspect||a.value/l.value||0);Ye(()=>t.src,()=>{h(o.value!=="idle")}),Ye(u,(_,F)=>{!_&&F&&r.value&&y(r.value)}),Ef(()=>h());function h(_){if(!(t.eager&&_)&&!(xf&&!_&&!t.eager)){if(o.value="loading",c.value.lazySrc){const F=new Image;F.src=c.value.lazySrc,y(F,null)}!c.value.src||Bs(()=>{var F,$;if(n("loadstart",((F=r.value)==null?void 0:F.currentSrc)||c.value.src),($=r.value)!=null&&$.complete){if(r.value.naturalWidth||f(),o.value==="error")return;u.value||y(r.value,null),d()}else u.value||y(r.value),p()})}}function d(){var _;p(),o.value="loaded",n("load",((_=r.value)==null?void 0:_.currentSrc)||c.value.src)}function f(){var _;o.value="error",n("error",((_=r.value)==null?void 0:_.currentSrc)||c.value.src)}function p(){const _=r.value;_&&(i.value=_.currentSrc||_.src)}let m=-1;function y(_){let F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const $=()=>{clearTimeout(m);const{naturalHeight:q,naturalWidth:V}=_;q||V?(a.value=V,l.value=q):!_.complete&&o.value==="loading"&&F!=null?m=window.setTimeout($,F):(_.currentSrc.endsWith(".svg")||_.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};$()}const w=I(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),E=()=>{var $;if(!c.value.src||o.value==="idle")return null;const _=b("img",{class:["v-img__img",w.value],src:c.value.src,srcset:c.value.srcset,alt:t.alt,sizes:t.sizes,ref:r,onLoad:d,onError:f},null),F=($=s.sources)==null?void 0:$.call(s);return b(ul,{transition:t.transition,appear:!0},{default:()=>[Wl(F?b("picture",{class:"v-img__picture"},[F,_]):_,[[lA,o.value==="loaded"]])]})},C=()=>b(ul,{transition:t.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&b("img",{class:["v-img__img","v-img__img--preload",w.value],src:c.value.lazySrc,alt:t.alt},null)]}),D=()=>s.placeholder?b(ul,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!s.error)&&b("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,N=()=>s.error?b(ul,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&b("div",{class:"v-img__error"},[s.error()])]}):null,A=()=>t.gradient?b("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,O=X(!1);{const _=Ye(u,F=>{F&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),_())})}return ut(()=>Wl(b(BN,{class:["v-img",{"v-img--booting":!O.value}],style:{width:ve(t.width==="auto"?a.value:t.width)},aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>b(_t,null,[b(E,null,null),b(C,null,null),b(A,null,null),b(D,null,null),b(N,null,null)]),default:s.default}),[[Tf("intersect"),{handler:h,options:t.options},null,{once:!0}]])),{currentSrc:i,image:r,state:o,naturalWidth:a,naturalHeight:l}}}),fn=Me({tag:{type:String,default:"div"}},"tag"),gb=Me({text:String,...fn()},"v-toolbar-title"),mb=Ke()({name:"VToolbarTitle",props:gb(),setup(t,e){let{slots:n}=e;return ut(()=>{const s=!!(n.default||n.text||t.text);return b(t.tag,{class:"v-toolbar-title"},{default:()=>{var i;return[s&&b("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(i=n.default)==null?void 0:i.call(n)])]}})}),{}}}),Ur=Me({border:[Boolean,Number,String]},"border");function Vr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi();return{borderClasses:I(()=>{const s=Pe(t)?t.value:t.border,i=[];if(s===!0||s==="")i.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`border-${r}`);return i})}}const Br=Me({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function jr(t){return{elevationClasses:I(()=>{const n=Pe(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const Ws=Me({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function zs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi();return{roundedClasses:I(()=>{const s=Pe(t)?t.value:t.rounded,i=[];if(s===!0||s==="")i.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`rounded-${r}`);return i})}}function Uf(t){return Ow(()=>{const e=[],n={};return t.value.background&&(pm(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(pm(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Xl(t,e){const n=I(()=>({text:Pe(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Uf(n);return{textColorClasses:s,textColorStyles:i}}function br(t,e){const n=I(()=>({background:Pe(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Uf(n);return{backgroundColorClasses:s,backgroundColorStyles:i}}const qN=[null,"prominent","default","comfortable","compact"],vb=Me({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>qN.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ur(),...Br(),...Ws(),...fn({tag:"header"}),...An()},"v-toolbar"),Ym=Ke()({name:"VToolbar",props:vb(),setup(t,e){var d;let{slots:n}=e;const{backgroundColorClasses:s,backgroundColorStyles:i}=br(it(t,"color")),{borderClasses:r}=Vr(t),{elevationClasses:o}=jr(t),{roundedClasses:a}=zs(t),{themeClasses:l}=zn(t),c=X(!!(t.extended||((d=n.extension)==null?void 0:d.call(n)))),u=I(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),h=I(()=>c.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return $r({VBtn:{variant:"text"}}),ut(()=>{var y;const f=!!(t.title||n.title),p=!!(n.image||t.image),m=(y=n.extension)==null?void 0:y.call(n);return c.value=!!(t.extended||m),b(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},s.value,r.value,o.value,a.value,l.value],style:[i.value]},{default:()=>[p&&b("div",{key:"image",class:"v-toolbar__image"},[n.image?b(Rs,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):b(pb,{key:"image-img",cover:!0,src:t.image},null)]),b(Rs,{defaults:{VTabs:{height:ve(u.value)}}},{default:()=>{var w,E,C;return[b("div",{class:"v-toolbar__content",style:{height:ve(u.value)}},[n.prepend&&b("div",{class:"v-toolbar__prepend"},[(w=n.prepend)==null?void 0:w.call(n)]),f&&b(mb,{key:"title",text:t.title},{text:n.title}),(E=n.default)==null?void 0:E.call(n),n.append&&b("div",{class:"v-toolbar__append"},[(C=n.append)==null?void 0:C.call(n)])])]}}),b(Rs,{defaults:{VTabs:{height:ve(h.value)}}},{default:()=>[b(UN,null,{default:()=>[c.value&&b("div",{class:"v-toolbar__extension",style:{height:ve(h.value)}},[m])]})]})]})}),{contentHeight:u,extensionHeight:h}}});function nu(){const t=X(!1);return Li(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:I(()=>t.value?void 0:{transition:"none !important"}),isBooted:jc(t)}}const KN=Ke()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...vb(),...Df(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=X(),i=Ei(t,"modelValue"),r=I(()=>{var u,h,d,f;const l=(h=(u=s.value)==null?void 0:u.contentHeight)!=null?h:0,c=(f=(d=s.value)==null?void 0:d.extensionHeight)!=null?f:0;return l+c}),{ssrBootStyles:o}=nu(),{layoutItemStyles:a}=Pf({id:t.name,order:I(()=>parseInt(t.order,10)),position:it(t,"location"),layoutSize:r,elementSize:r,active:i,absolute:it(t,"absolute")});return ut(()=>{const[l]=Ym.filterProps(t);return b(Ym,Mi({ref:s,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"}],style:{...a.value,height:void 0,...o.value}},l),n)}),{}}});const GN=[null,"default","comfortable","compact"],Ca=Me({density:{type:String,default:"default",validator:t=>GN.includes(t)}},"density");function Sa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi();return{densityClasses:I(()=>`${e}--density-${t.density}`)}}const YN=["elevated","flat","tonal","outlined","text","plain"];function Vf(t,e){return b(_t,null,[t&&b("span",{key:"overlay",class:`${e}__overlay`},null),b("span",{key:"underlay",class:`${e}__underlay`},null)])}const su=Me({color:String,variant:{type:String,default:"elevated",validator:t=>YN.includes(t)}},"variant");function Bf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi();const n=I(()=>{const{variant:r}=Je(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=Uf(I(()=>{const{variant:r,color:o}=Je(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const yb=Me({divided:Boolean,...Ur(),...Ca(),...Br(),...Ws(),...fn(),...An(),...su()},"v-btn-group"),Qm=Ke()({name:"VBtnGroup",props:yb(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=zn(t),{densityClasses:i}=Sa(t),{borderClasses:r}=Vr(t),{elevationClasses:o}=jr(t),{roundedClasses:a}=zs(t);$r({VBtn:{height:"auto",color:it(t,"color"),density:it(t,"density"),flat:!0,variant:it(t,"variant")}}),ut(()=>b(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value]},n))}}),_b=Me({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),QN=Me({value:null,disabled:Boolean,selectedClass:String},"group-item");function XN(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=nn("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Ia();Wt(Symbol.for(`${e.description}:id`),i);const r=Le(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=it(t,"value"),a=I(()=>r.disabled.value||t.disabled);r.register({id:i,value:o,disabled:a},s),kn(()=>{r.unregister(i)});const l=I(()=>r.isSelected(i)),c=I(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return Ye(l,u=>{s.emit("group:selected",{value:u})}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:u=>r.select(i,u),selectedClass:c,value:o,disabled:a,group:r}}function wb(t,e){let n=!1;const s=Nt([]),i=Ei(t,"modelValue",[],d=>d==null?[]:bb(s,EA(d)),d=>{const f=ZN(s,d);return t.multiple?f:f[0]}),r=nn("useGroup");function o(d,f){const p=d,m=Symbol.for(`${e.description}:id`),w=So(m,r==null?void 0:r.vnode).indexOf(f);w>-1?s.splice(w,0,p):s.push(p)}function a(d){if(n)return;l();const f=s.findIndex(p=>p.id===d);s.splice(f,1)}function l(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!i.value.length&&(i.value=[d.id])}Li(()=>{l()}),kn(()=>{n=!0});function c(d,f){const p=s.find(m=>m.id===d);if(!(f&&(p==null?void 0:p.disabled)))if(t.multiple){const m=i.value.slice(),y=m.findIndex(E=>E===d),w=~y;if(f=f!=null?f:!w,w&&t.mandatory&&m.length<=1||!w&&t.max!=null&&m.length+1>t.max)return;y<0&&f?m.push(d):y>=0&&!f&&m.splice(y,1),i.value=m}else{const m=i.value.includes(d);if(t.mandatory&&m)return;i.value=(f!=null?f:!m)?[d]:[]}}function u(d){if(t.multiple&&lr('This method is not supported when using "multiple" prop'),i.value.length){const f=i.value[0],p=s.findIndex(w=>w.id===f);let m=(p+d)%s.length,y=s[m];for(;y.disabled&&m!==p;)m=(m+d)%s.length,y=s[m];if(y.disabled)return;i.value=[s[m].id]}else{const f=s.find(p=>!p.disabled);f&&(i.value=[f.id])}}const h={register:o,unregister:a,selected:i,select:c,disabled:it(t,"disabled"),prev:()=>u(s.length-1),next:()=>u(1),isSelected:d=>i.value.includes(d),selectedClass:I(()=>t.selectedClass),items:I(()=>s),getItemIndex:d=>JN(s,d)};return Wt(e,h),h}function JN(t,e){const n=bb(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function bb(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];i.value!=null?e.find(r=>Rw(r,i.value))!=null&&n.push(i.id):e.includes(s)&&n.push(i.id)}return n}function ZN(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];e.includes(i.id)&&n.push(i.value!=null?i.value:s)}return n}const jf=Symbol.for("vuetify:v-btn-toggle");Ke()({name:"VBtnToggle",props:{...yb(),..._b()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=wb(t,jf);return ut(()=>{const[l]=Qm.filterProps(t);return b(Qm,Mi({class:"v-btn-toggle"},l),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]}})}),{next:i,prev:r,select:o}}});const e1=["x-small","small","default","large","x-large"],iu=Me({size:{type:[String,Number],default:"default"}},"size");function ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi();return Ow(()=>{let n,s;return ql(e1,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:ve(t.size),height:ve(t.size)}),{sizeClasses:n,sizeStyles:s}})}const t1=Me({color:String,start:Boolean,end:Boolean,icon:Ms,...iu(),...fn({tag:"i"}),...An()},"v-icon"),Mn=Ke()({name:"VIcon",props:t1(),setup(t,e){let{attrs:n,slots:s}=e,i;s.default&&(i=I(()=>{var h,d;const u=(h=s.default)==null?void 0:h.call(s);if(!!u)return(d=u.filter(f=>f.type===Ea&&f.children&&typeof f.children=="string")[0])==null?void 0:d.children}));const{themeClasses:r}=zn(t),{iconData:o}=sR(i||t),{sizeClasses:a}=ru(t),{textColorClasses:l,textColorStyles:c}=Xl(it(t,"color"));return ut(()=>b(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:ve(t.size),height:ve(t.size),width:ve(t.size)},c.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var u;return[(u=s.default)==null?void 0:u.call(s)]}})),{}}});function Eb(t){const e=X(),n=X(!1);if(xf){const s=new IntersectionObserver(i=>{t==null||t(i,s),n.value=!!i.find(r=>r.isIntersecting)});kn(()=>{s.disconnect()}),Ye(e,(i,r)=>{r&&(s.unobserve(r),n.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}const n1=Ke()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...iu(),...fn({tag:"div"}),...An()},setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=X(),{themeClasses:o}=zn(t),{sizeClasses:a,sizeStyles:l}=ru(t),{textColorClasses:c,textColorStyles:u}=Xl(it(t,"color")),{textColorClasses:h,textColorStyles:d}=Xl(it(t,"bgColor")),{intersectionRef:f,isIntersecting:p}=Eb(),{resizeRef:m,contentRect:y}=Ww(),w=I(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),E=I(()=>Number(t.width)),C=I(()=>l.value?Number(t.size):y.value?y.value.width:Math.max(E.value,32)),D=I(()=>s/(1-E.value/C.value)*2),N=I(()=>E.value/C.value*D.value),A=I(()=>ve((100-w.value)/100*i));return ba(()=>{f.value=r.value,m.value=r.value}),ut(()=>b(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:w.value},{default:()=>[b("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${D.value} ${D.value}`},[b("circle",{class:["v-progress-circular__underlay",h.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":N.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),b("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":N.value,"stroke-dasharray":i,"stroke-dashoffset":A.value},null)]),n.default&&b("div",{class:"v-progress-circular__content"},[n.default({value:w.value})])]})),{}}});const rd=Symbol("rippleStop"),s1=80;function Xm(t,e){t.style.transform=e,t.style.webkitTransform=e}function od(t){return t.constructor.name==="TouchEvent"}function Ib(t){return t.constructor.name==="KeyboardEvent"}const i1=function(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!Ib(t)){const d=e.getBoundingClientRect(),f=od(t)?t.touches[t.touches.length-1]:t;s=f.clientX-d.left,i=f.clientY-d.top}let r=0,o=.3;(h=e._ripple)!=null&&h.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${s-r}px`,u=n.center?l:`${i-r}px`;return{radius:r,scale:o,x:c,y:u,centerX:a,centerY:l}},Jl={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:u}=i1(t,e,n),h=`${r*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,e.appendChild(s);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Xm(i,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Xm(i,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},i)}};function Tb(t){return typeof t>"u"||!!t}function Xo(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[rd])){if(t[rd]=!0,od(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Ib(t),n._ripple.class&&(e.class=n._ripple.class),od(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Jl.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},s1)}else Jl.show(t,n,e)}}function Jm(t){t[rd]=!0}function Qt(t){const e=t.currentTarget;if(!!(e!=null&&e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Qt(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Jl.hide(e)}}function Cb(t){const e=t.currentTarget;!(e!=null&&e._ripple)||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Jo=!1;function Sb(t){!Jo&&(t.keyCode===cm.enter||t.keyCode===cm.space)&&(Jo=!0,Xo(t))}function kb(t){Jo=!1,Qt(t)}function Ab(t){Jo&&(Jo=!1,Qt(t))}function Rb(t,e,n){var o;const{value:s,modifiers:i}=e,r=Tb(s);if(r||Jl.hide(t),t._ripple=(o=t._ripple)!=null?o:{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,Qh(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",Jm,{passive:!0}),t.addEventListener("mousedown",Jm);return}t.addEventListener("touchstart",Xo,{passive:!0}),t.addEventListener("touchend",Qt,{passive:!0}),t.addEventListener("touchmove",Cb,{passive:!0}),t.addEventListener("touchcancel",Qt),t.addEventListener("mousedown",Xo),t.addEventListener("mouseup",Qt),t.addEventListener("mouseleave",Qt),t.addEventListener("keydown",Sb),t.addEventListener("keyup",kb),t.addEventListener("blur",Ab),t.addEventListener("dragstart",Qt,{passive:!0})}else!r&&n&&Nb(t)}function Nb(t){t.removeEventListener("mousedown",Xo),t.removeEventListener("touchstart",Xo),t.removeEventListener("touchend",Qt),t.removeEventListener("touchmove",Cb),t.removeEventListener("touchcancel",Qt),t.removeEventListener("mouseup",Qt),t.removeEventListener("mouseleave",Qt),t.removeEventListener("keydown",Sb),t.removeEventListener("keyup",kb),t.removeEventListener("dragstart",Qt),t.removeEventListener("blur",Ab)}function r1(t,e){Rb(t,e,!1)}function o1(t){delete t._ripple,Nb(t)}function a1(t,e){if(e.value===e.oldValue)return;const n=Tb(e.oldValue);Rb(t,e,n)}const Ob={mounted:r1,unmounted:o1,updated:a1};const Zm={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},xb=Me({location:String},"location");function Db(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Jc();return{locationStyles:I(()=>{if(!t.location)return{};const{side:r,align:o}=AA(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[Zm[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[Zm[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const l1=Ke()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...xb({location:"top"}),...Ws(),...fn(),...An()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Ei(t,"modelValue"),{isRtl:i}=Jc(),{themeClasses:r}=zn(t),{locationStyles:o}=Db(t),{textColorClasses:a,textColorStyles:l}=Xl(t,"color"),{backgroundColorClasses:c,backgroundColorStyles:u}=br(I(()=>t.bgColor||t.color)),{backgroundColorClasses:h,backgroundColorStyles:d}=br(t,"color"),{roundedClasses:f}=zs(t),{intersectionRef:p,isIntersecting:m}=Eb(),y=I(()=>parseInt(t.max,10)),w=I(()=>parseInt(t.height,10)),E=I(()=>parseFloat(t.bufferValue)/y.value*100),C=I(()=>parseFloat(s.value)/y.value*100),D=I(()=>i.value!==t.reverse),N=I(()=>t.indeterminate?"fade-transition":"slide-x-transition"),A=I(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function O(_){if(!p.value)return;const{left:F,right:$,width:q}=p.value.getBoundingClientRect(),V=D.value?q-_.clientX+($-q):_.clientX-F;s.value=Math.round(V/q*y.value)}return ut(()=>b(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&m.value,"v-progress-linear--reverse":D.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},f.value,r.value],style:{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?ve(w.value):0,"--v-progress-linear-height":ve(w.value),...o.value},role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:C.value,onClick:t.clickable&&O},{default:()=>[t.stream&&b("div",{key:"stream",class:["v-progress-linear__stream",a.value],style:{...l.value,[D.value?"left":"right"]:ve(-w.value),borderTop:`${ve(w.value/2)} dotted`,opacity:A.value,top:`calc(50% - ${ve(w.value/4)})`,width:ve(100-E.value,"%"),"--v-progress-linear-stream-to":ve(w.value*(D.value?1:-1))}},null),b("div",{class:["v-progress-linear__background",c.value],style:[u.value,{opacity:A.value,width:ve(t.stream?E.value:100,"%")}]},null),b(Hs,{name:N.value},{default:()=>[t.indeterminate?b("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>b("div",{key:_,class:["v-progress-linear__indeterminate",_,h.value],style:d.value},null))]):b("div",{class:["v-progress-linear__determinate",h.value],style:[d.value,{width:ve(C.value,"%")}]},null)]}),n.default&&b("div",{class:"v-progress-linear__content"},[n.default({value:C.value,buffer:E.value})])]})),{}}}),c1=Me({loading:[Boolean,String]},"loader");function u1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi();return{loaderClasses:I(()=>({[`${e}--loading`]:t.loading}))}}function uW(t,e){var s;let{slots:n}=e;return b("div",{class:`${t.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:t.color,isActive:t.active}))||b(l1,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const h1=["static","relative","fixed","absolute","sticky"],d1=Me({position:{type:String,validator:t=>h1.includes(t)}},"position");function f1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fi();return{positionClasses:I(()=>t.position?`${e}--${t.position}`:void 0)}}function p1(){var t,e;return(e=(t=nn("useRouter"))==null?void 0:t.proxy)==null?void 0:e.$router}function Pb(t,e){const n=aw("RouterLink"),s=I(()=>!!(t.href||t.to)),i=I(()=>(s==null?void 0:s.value)||dm(e,"click")||dm(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:it(t,"href")};const r=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&I(()=>{var o,a;return t.exact?(o=r.isExactActive)==null?void 0:o.value:(a=r.isActive)==null?void 0:a.value}),href:I(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const Lb=Me({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let oh=!1;function hW(t,e){let n=!1,s,i;un&&(Bs(()=>{window.addEventListener("popstate",r),s=t==null?void 0:t.beforeEach((o,a,l)=>{oh?n?e(l):l():setTimeout(()=>n?e(l):l()),oh=!0}),i=t==null?void 0:t.afterEach(()=>{oh=!1})}),cf(()=>{window.removeEventListener("popstate",r),s==null||s(),i==null||i()}));function r(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}function g1(t,e){Ye(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Bs(()=>{e(!0)})},{immediate:!0})}const m1=Me({active:{type:Boolean,default:void 0},symbol:{type:null,default:jf},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ms,appendIcon:Ms,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Ur(),...Ws(),...Ca(),...Ff(),...Br(),...QN(),...c1(),...xb(),...d1(),...Lb(),...iu(),...fn({tag:"button"}),...An(),...su({variant:"elevated"})},"VBtn"),cr=Ke()({name:"VBtn",directives:{Ripple:Ob},props:m1(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=zn(t),{borderClasses:r}=Vr(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Bf(t),{densityClasses:c}=Sa(t),{dimensionStyles:u}=$f(t),{elevationClasses:h}=jr(t),{loaderClasses:d}=u1(t),{locationStyles:f}=Db(t),{positionClasses:p}=f1(t),{roundedClasses:m}=zs(t),{sizeClasses:y,sizeStyles:w}=ru(t),E=XN(t,t.symbol,!1),C=Pb(t,n),D=I(()=>{var _;return t.active!==void 0?t.active:C.isLink.value?(_=C.isActive)==null?void 0:_.value:E==null?void 0:E.isSelected.value}),N=I(()=>(E==null?void 0:E.disabled.value)||t.disabled),A=I(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),O=I(()=>{if(t.value!==void 0)return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});return g1(C,E==null?void 0:E.select),ut(()=>{var he,pe;const _=C.isLink.value?"a":t.tag,F=!!(t.prependIcon||s.prepend),$=!!(t.appendIcon||s.append),q=!!(t.icon&&t.icon!==!0),V=(E==null?void 0:E.isSelected.value)&&(!C.isLink.value||((he=C.isActive)==null?void 0:he.value))||!E||((pe=C.isActive)==null?void 0:pe.value);return Wl(b(_,{type:_==="a"?void 0:"button",class:["v-btn",E==null?void 0:E.selectedClass.value,{"v-btn--active":D.value,"v-btn--block":t.block,"v-btn--disabled":N.value,"v-btn--elevated":A.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},i.value,r.value,V?o.value:void 0,c.value,h.value,d.value,p.value,m.value,y.value,l.value],style:[V?a.value:void 0,u.value,f.value,w.value],disabled:N.value||void 0,href:C.href.value,onClick:me=>{var be;N.value||((be=C.navigate)==null||be.call(C,me),E==null||E.toggle())},value:O.value},{default:()=>{var me,be;return[Vf(!0,"v-btn"),!t.icon&&F&&b("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?b(Rs,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},s.prepend):b(Mn,{key:"prepend-icon",icon:t.prependIcon},null)]),b("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&q?b(Mn,{key:"content-icon",icon:t.icon},null):b(Rs,{key:"content-defaults",disabled:!q,defaults:{VIcon:{icon:t.icon}}},s.default)]),!t.icon&&$&&b("span",{key:"append",class:"v-btn__append"},[s.append?b(Rs,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},s.append):b(Mn,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&b("span",{key:"loader",class:"v-btn__loader"},[(be=(me=s.loader)==null?void 0:me.call(s))!=null?be:b(n1,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Tf("ripple"),!N.value&&t.ripple,null]])}),{}}}),ev=Ke()({name:"VAppBarNavIcon",props:{icon:{type:Ms,default:"$menu"}},setup(t,e){let{slots:n}=e;return ut(()=>b(cr,{class:"v-app-bar-nav-icon",icon:t.icon},n)),{}}}),v1=Ke()({name:"VAppBarTitle",props:gb(),setup(t,e){let{slots:n}=e;return ut(()=>b(mb,Mi(t,{class:"v-app-bar-title"}),n)),{}}}),y1=Of("flex-grow-1","div","VSpacer"),ad=Symbol.for("vuetify:list");function dW(){const t=Le(ad,{hasPrepend:X(!1),updateHasPrepend:()=>null}),e={hasPrepend:X(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return Wt(ad,e),t}function _1(){return Le(ad,null)}const w1={open:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(n){const r=new Set;r.add(e);let o=i.get(e);for(;o!=null;)r.add(o),o=i.get(o);return r}else return s.delete(e),s},select:()=>null},Mb={open:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(n){let r=i.get(e);for(s.add(e);r!=null&&r!==e;)s.add(r),r=i.get(r);return s}else s.delete(e);return s},select:()=>null},b1={open:Mb.open,select:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(!n)return s;const r=[];let o=i.get(e);for(;o!=null;)r.push(o),o=i.get(o);return new Set(r)}},Hf=t=>{const e={select:n=>{let{id:s,value:i,selected:r}=n;if(s=ce(s),t&&!i){const o=Array.from(r.entries()).reduce((a,l)=>{let[c,u]=l;return u==="on"?[...a,c]:a},[]);if(o.length===1&&o[0]===s)return r}return r.set(s,i?"on":"off"),r},in:(n,s,i)=>{let r=new Map;for(const o of n||[])r=e.select({id:o,value:!0,selected:new Map(r),children:s,parents:i});return r},out:n=>{const s=[];for(const[i,r]of n.entries())r==="on"&&s.push(i);return s}};return e},Fb=t=>{const e=Hf(t);return{select:s=>{let{selected:i,id:r,...o}=s;r=ce(r);const a=i.has(r)?new Map([[r,i.get(r)]]):new Map;return e.select({...o,id:r,selected:a})},in:(s,i,r)=>{let o=new Map;return s!=null&&s.length&&(o=e.in(s.slice(0,1),i,r)),o},out:(s,i,r)=>e.out(s,i,r)}},E1=t=>{const e=Hf(t);return{select:s=>{let{id:i,selected:r,children:o,...a}=s;return i=ce(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...a})},in:e.in,out:e.out}},I1=t=>{const e=Fb(t);return{select:s=>{let{id:i,selected:r,children:o,...a}=s;return i=ce(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...a})},in:e.in,out:e.out}},T1=t=>{const e={select:n=>{let{id:s,value:i,selected:r,children:o,parents:a}=n;s=ce(s);const l=new Map(r),c=[s];for(;c.length;){const h=c.shift();r.set(h,i?"on":"off"),o.has(h)&&c.push(...o.get(h))}let u=a.get(s);for(;u;){const h=o.get(u),d=h.every(p=>r.get(p)==="on"),f=h.every(p=>!r.has(p)||r.get(p)==="off");r.set(u,d?"on":f?"off":"indeterminate"),u=a.get(u)}return t&&!i&&Array.from(r.entries()).reduce((d,f)=>{let[p,m]=f;return m==="on"?[...d,p]:d},[]).length===0?l:r},in:(n,s,i)=>{let r=new Map;for(const o of n||[])r=e.select({id:o,value:!0,selected:new Map(r),children:s,parents:i});return r},out:(n,s)=>{const i=[];for(const[r,o]of n.entries())o==="on"&&!s.has(r)&&i.push(r);return i}};return e},Zo=Symbol.for("vuetify:nested"),$b={id:X(),root:{register:()=>null,unregister:()=>null,parents:X(new Map),children:X(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:X(new Set),selected:X(new Map),selectedValues:X([])}},fW=Me({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),pW=t=>{let e=!1;const n=X(new Map),s=X(new Map),i=Ei(t,"opened",t.opened,h=>new Set(h),h=>[...h.values()]),r=I(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return I1(t.mandatory);case"leaf":return E1(t.mandatory);case"independent":return Hf(t.mandatory);case"single-independent":return Fb(t.mandatory);case"classic":default:return T1(t.mandatory)}}),o=I(()=>{if(typeof t.openStrategy=="object")return t.openStrategy;switch(t.openStrategy){case"list":return b1;case"single":return w1;case"multiple":default:return Mb}}),a=Ei(t,"selected",t.selected,h=>r.value.in(h,n.value,s.value),h=>r.value.out(h,n.value,s.value));kn(()=>{e=!0});function l(h){const d=[];let f=h;for(;f!=null;)d.unshift(f),f=s.value.get(f);return d}const c=nn("nested"),u={id:X(),root:{opened:i,selected:a,selectedValues:I(()=>{const h=[];for(const[d,f]of a.value.entries())f==="on"&&h.push(d);return h}),register:(h,d,f)=>{d&&h!==d&&s.value.set(h,d),f&&n.value.set(h,[]),d!=null&&n.value.set(d,[...n.value.get(d)||[],h])},unregister:h=>{var f;if(e)return;n.value.delete(h);const d=s.value.get(h);if(d){const p=(f=n.value.get(d))!=null?f:[];n.value.set(d,p.filter(m=>m!==h))}s.value.delete(h),i.value.delete(h)},open:(h,d,f)=>{c.emit("click:open",{id:h,value:d,path:l(h),event:f});const p=o.value.open({id:h,value:d,opened:new Set(i.value),children:n.value,parents:s.value,event:f});p&&(i.value=p)},openOnSelect:(h,d,f)=>{const p=o.value.select({id:h,value:d,selected:new Map(a.value),opened:new Set(i.value),children:n.value,parents:s.value,event:f});p&&(i.value=p)},select:(h,d,f)=>{c.emit("click:select",{id:h,value:d,path:l(h),event:f});const p=r.value.select({id:h,value:d,selected:new Map(a.value),children:n.value,parents:s.value,event:f});p&&(a.value=p),u.root.openOnSelect(h,d,f)},children:n,parents:s}};return Wt(Zo,u),u.root},C1=(t,e)=>{const n=Le(Zo,$b),s=Symbol(Ia()),i=I(()=>{var o;return(o=t.value)!=null?o:s}),r={...n,id:i,open:(o,a)=>n.root.open(i.value,o,a),openOnSelect:(o,a)=>n.root.openOnSelect(i.value,o,a),isOpen:I(()=>n.root.opened.value.has(i.value)),parent:I(()=>n.root.parents.value.get(i.value)),select:(o,a)=>n.root.select(i.value,o,a),isSelected:I(()=>n.root.selected.value.get(ce(i.value))==="on"),isIndeterminate:I(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:I(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,e),kn(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),e&&Wt(Zo,r),r},gW=()=>{const t=Le(Zo,$b);Wt(Zo,{...t,isGroupActivator:!0})};const S1=Me({start:Boolean,end:Boolean,icon:Ms,image:String,...Ca(),...Ws(),...iu(),...fn(),...An(),...su({variant:"flat"})},"v-avatar"),tv=Ke()({name:"VAvatar",props:S1(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=zn(t),{colorClasses:i,colorStyles:r,variantClasses:o}=Bf(t),{densityClasses:a}=Sa(t),{roundedClasses:l}=zs(t),{sizeClasses:c,sizeStyles:u}=ru(t);return ut(()=>b(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},s.value,i.value,a.value,l.value,c.value,o.value],style:[r.value,u.value]},{default:()=>{var h;return[t.image?b(pb,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?b(Mn,{key:"icon",icon:t.icon},null):(h=n.default)==null?void 0:h.call(n),Vf(!1,"v-avatar")]}})),{}}}),k1=Of("v-list-item-subtitle"),A1=Of("v-list-item-title"),R1=Ke()({name:"VListItem",directives:{Ripple:Ob},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Ms,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Ms,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:hm,onClickOnce:hm,...Ur(),...Ca(),...Ff(),...Br(),...Ws(),...Lb(),...fn(),...An(),...su({variant:"text"})},emits:{click:t=>!0},setup(t,e){let{attrs:n,slots:s,emit:i}=e;const r=Pb(t,n),o=I(()=>{var Q;return(Q=t.value)!=null?Q:r.href.value}),{select:a,isSelected:l,isIndeterminate:c,isGroupActivator:u,root:h,parent:d,openOnSelect:f}=C1(o,!1),p=_1(),m=I(()=>{var Q;return t.active!==!1&&(t.active||((Q=r.isActive)==null?void 0:Q.value)||l.value)}),y=I(()=>t.link!==!1&&r.isLink.value),w=I(()=>!t.disabled&&t.link!==!1&&(t.link||r.isClickable.value||t.value!=null&&!!p)),E=I(()=>t.rounded||t.nav),C=I(()=>{var Q;return{color:m.value&&(Q=t.activeColor)!=null?Q:t.color,variant:t.variant}});Ye(()=>{var Q;return(Q=r.isActive)==null?void 0:Q.value},Q=>{Q&&d.value!=null&&h.open(d.value,!0),Q&&f(Q)},{immediate:!0});const{themeClasses:D}=zn(t),{borderClasses:N}=Vr(t),{colorClasses:A,colorStyles:O,variantClasses:_}=Bf(C),{densityClasses:F}=Sa(t),{dimensionStyles:$}=$f(t),{elevationClasses:q}=jr(t),{roundedClasses:V}=zs(E),he=I(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),pe=I(()=>({isActive:m.value,select:a,isSelected:l.value,isIndeterminate:c.value}));function me(Q){var fe;i("click",Q),!(u||!w.value)&&((fe=r.navigate)==null||fe.call(r,Q),t.value!=null&&a(!l.value,Q))}function be(Q){(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),me(Q))}return ut(()=>{const Q=y.value?"a":t.tag,fe=!p||l.value||m.value,Ae=s.title||t.title,Bt=s.subtitle||t.subtitle,rt=!!(t.appendAvatar||t.appendIcon),$e=!!(rt||s.append),Tt=!!(t.prependAvatar||t.prependIcon),Rn=!!(Tt||s.prepend);return p==null||p.updateHasPrepend(Rn),Wl(b(Q,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":t.disabled,"v-list-item--link":w.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!Rn&&(p==null?void 0:p.hasPrepend.value),[`${t.activeClass}`]:t.activeClass&&m.value},D.value,N.value,fe?A.value:void 0,F.value,q.value,he.value,V.value,_.value],style:[fe?O.value:void 0,$.value],href:r.href.value,tabindex:w.value?0:void 0,onClick:me,onKeydown:w.value&&!y.value&&be},{default:()=>{var k;return[Vf(w.value||m.value,"v-list-item"),Rn&&b("div",{key:"prepend",class:"v-list-item__prepend"},[s.prepend?b(Rs,{key:"prepend-defaults",disabled:!Tt,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var M;return[(M=s.prepend)==null?void 0:M.call(s,pe.value)]}}):b(_t,null,[t.prependAvatar&&b(tv,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&b(Mn,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),b("div",{class:"v-list-item__content","data-no-activator":""},[Ae&&b(A1,{key:"title"},{default:()=>{var M,B;return[(B=(M=s.title)==null?void 0:M.call(s,{title:t.title}))!=null?B:t.title]}}),Bt&&b(k1,{key:"subtitle"},{default:()=>{var M,B;return[(B=(M=s.subtitle)==null?void 0:M.call(s,{subtitle:t.subtitle}))!=null?B:t.subtitle]}}),(k=s.default)==null?void 0:k.call(s,pe.value)]),$e&&b("div",{key:"append",class:"v-list-item__append"},[s.append?b(Rs,{key:"append-defaults",disabled:!rt,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var M;return[(M=s.append)==null?void 0:M.call(s,pe.value)]}}):b(_t,null,[t.appendIcon&&b(Mn,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&b(tv,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])]}}),[[Tf("ripple"),w.value&&t.ripple]])}),{}}});function N1(t){let{rootEl:e,isSticky:n,layoutItemStyles:s}=t;const i=X(!1),r=X(0),o=I(()=>{const c=typeof i.value=="boolean"?"top":i.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,i.value?{[c]:ve(r.value)}:{top:s.value.top}]});Li(()=>{Ye(n,c=>{c?window.addEventListener("scroll",l,{passive:!0}):window.removeEventListener("scroll",l)},{immediate:!0})}),kn(()=>{document.removeEventListener("scroll",l)});let a=0;function l(){var p;const c=a>window.scrollY?"up":"down",u=e.value.getBoundingClientRect(),h=parseFloat((p=s.value.top)!=null?p:0),d=window.scrollY-Math.max(0,r.value-h),f=u.height+Math.max(r.value,h)-window.scrollY-window.innerHeight;u.height<window.innerHeight-h?(i.value="top",r.value=h):c==="up"&&i.value==="bottom"||c==="down"&&i.value==="top"?(r.value=window.scrollY+u.top,i.value=!0):c==="down"&&f<=0?(r.value=0,i.value="bottom"):c==="up"&&d<=0&&(r.value=u.top+d,i.value="top"),a=window.scrollY}return{isStuck:i,stickyStyles:o}}const O1=100,x1=20;function nv(t){const e=1.41421356237;return(t<0?-1:1)*Math.sqrt(Math.abs(t))*e}function sv(t){if(t.length<2)return 0;if(t.length===2)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const s=nv(e),i=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(i-s)*Math.abs(i),n===t.length-1&&(e*=.5)}return nv(e)*1e3}function D1(){const t={};function e(i){Array.from(i.changedTouches).forEach(r=>{var a;((a=t[r.identifier])!=null?a:t[r.identifier]=new CA(x1)).push([i.timeStamp,r])})}function n(i){Array.from(i.changedTouches).forEach(r=>{delete t[r.identifier]})}function s(i){var c;const r=(c=t[i])==null?void 0:c.values().reverse();if(!r)throw new Error(`No samples for touch id ${i}`);const o=r[0],a=[],l=[];for(const u of r){if(o[0]-u[0]>O1)break;a.push({t:u[0],d:u[1].clientX}),l.push({t:u[0],d:u[1].clientY})}return{x:sv(a),y:sv(l),get direction(){const{x:u,y:h}=this,[d,f]=[Math.abs(u),Math.abs(h)];return d>f&&u>=0?"right":d>f&&u<=0?"left":f>d&&h>=0?"down":f>d&&h<=0?"up":P1()}}}return{addMovement:e,endTouch:n,getVelocity:s}}function P1(){throw new Error}function L1(t){let{isActive:e,isTemporary:n,width:s,touchless:i,position:r}=t;Li(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",C,{passive:!0})}),kn(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",C)});const o=I(()=>["left","right"].includes(r.value)),{addMovement:a,endTouch:l,getVelocity:c}=D1();let u=!1;const h=X(!1),d=X(0),f=X(0);let p;function m(N,A){return(r.value==="left"?N:r.value==="right"?document.documentElement.clientWidth-N:r.value==="top"?N:r.value==="bottom"?document.documentElement.clientHeight-N:Qi())-(A?s.value:0)}function y(N){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const O=r.value==="left"?(N-f.value)/s.value:r.value==="right"?(document.documentElement.clientWidth-N-f.value)/s.value:r.value==="top"?(N-f.value)/s.value:r.value==="bottom"?(document.documentElement.clientHeight-N-f.value)/s.value:Qi();return A?Math.max(0,Math.min(1,O)):O}function w(N){if(i.value)return;const A=N.changedTouches[0].clientX,O=N.changedTouches[0].clientY,_=25,F=r.value==="left"?A<_:r.value==="right"?A>document.documentElement.clientWidth-_:r.value==="top"?O<_:r.value==="bottom"?O>document.documentElement.clientHeight-_:Qi(),$=e.value&&(r.value==="left"?A<s.value:r.value==="right"?A>document.documentElement.clientWidth-s.value:r.value==="top"?O<s.value:r.value==="bottom"?O>document.documentElement.clientHeight-s.value:Qi());(F||$||e.value&&n.value)&&(u=!0,p=[A,O],f.value=m(o.value?A:O,e.value),d.value=y(o.value?A:O),l(N),a(N))}function E(N){const A=N.changedTouches[0].clientX,O=N.changedTouches[0].clientY;if(u){if(!N.cancelable){u=!1;return}const F=Math.abs(A-p[0]),$=Math.abs(O-p[1]);(o.value?F>$&&F>3:$>F&&$>3)?(h.value=!0,u=!1):(o.value?$:F)>3&&(u=!1)}if(!h.value)return;N.preventDefault(),a(N);const _=y(o.value?A:O,!1);d.value=Math.max(0,Math.min(1,_)),_>1?f.value=m(o.value?A:O,!0):_<0&&(f.value=m(o.value?A:O,!1))}function C(N){if(u=!1,!h.value)return;a(N),h.value=!1;const A=c(N.changedTouches[0].identifier),O=Math.abs(A.x),_=Math.abs(A.y);(o.value?O>_&&O>400:_>O&&_>3)?e.value=A.direction===({left:"right",right:"left",top:"down",bottom:"up"}[r.value]||Qi()):e.value=d.value>.5}const D=I(()=>h.value?{transform:r.value==="left"?`translateX(calc(-100% + ${d.value*s.value}px))`:r.value==="right"?`translateX(calc(100% - ${d.value*s.value}px))`:r.value==="top"?`translateY(calc(-100% + ${d.value*s.value}px))`:r.value==="bottom"?`translateY(calc(100% - ${d.value*s.value}px))`:Qi(),transition:"none"}:void 0);return{isDragging:h,dragProgress:d,dragStyles:D}}function Qi(){throw new Error}const M1=["start","end","left","right","top","bottom"],F1=Ke()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:t=>M1.includes(t)},sticky:Boolean,...Ur(),...Br(),...Df(),...Ws(),...fn({tag:"nav"}),...An()},emits:{"update:modelValue":t=>!0,"update:rail":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const{isRtl:r}=Jc(),{themeClasses:o}=zn(t),{borderClasses:a}=Vr(t),{backgroundColorClasses:l,backgroundColorStyles:c}=br(it(t,"color")),{elevationClasses:u}=jr(t),{mobile:h}=QA(),{roundedClasses:d}=zs(t),f=p1(),p=Ei(t,"modelValue",null,Ae=>!!Ae),{ssrBootStyles:m}=nu(),y=X(),w=X(!1),E=I(()=>t.rail&&t.expandOnHover&&w.value?Number(t.width):Number(t.rail?t.railWidth:t.width)),C=I(()=>Xh(t.location,r.value)),D=I(()=>!t.permanent&&(h.value||t.temporary)),N=I(()=>t.sticky&&!D.value&&C.value!=="bottom");t.expandOnHover&&t.rail!=null&&Ye(w,Ae=>s("update:rail",!Ae)),t.disableResizeWatcher||Ye(D,Ae=>!t.permanent&&Bs(()=>p.value=!Ae)),!t.disableRouteWatcher&&f&&Ye(f.currentRoute,()=>D.value&&(p.value=!1)),Ye(()=>t.permanent,Ae=>{Ae&&(p.value=!0)}),Ef(()=>{t.modelValue!=null||D.value||(p.value=t.permanent||!h.value)});const{isDragging:A,dragProgress:O,dragStyles:_}=L1({isActive:p,isTemporary:D,width:E,touchless:it(t,"touchless"),position:C}),F=I(()=>{const Ae=D.value?0:t.rail&&t.expandOnHover?Number(t.railWidth):E.value;return A.value?Ae*O.value:Ae}),{layoutItemStyles:$,layoutRect:q,layoutItemScrimStyles:V}=Pf({id:t.name,order:I(()=>parseInt(t.order,10)),position:C,layoutSize:F,elementSize:E,active:I(()=>p.value||A.value),disableTransitions:I(()=>A.value),absolute:I(()=>t.absolute||N.value&&typeof he.value!="string")}),{isStuck:he,stickyStyles:pe}=N1({rootEl:y,isSticky:N,layoutItemStyles:$}),me=br(I(()=>typeof t.scrim=="string"?t.scrim:null)),be=I(()=>({...A.value?{opacity:O.value*.2,transition:"none"}:void 0,...q.value?{left:ve(q.value.left),right:ve(q.value.right),top:ve(q.value.top),bottom:ve(q.value.bottom)}:void 0,...V.value}));$r({VList:{bgColor:"transparent"}});function Q(){w.value=!0}function fe(){w.value=!1}return ut(()=>{const Ae=i.image||t.image;return b(_t,null,[b(t.tag,Mi({ref:y,onMouseenter:Q,onMouseleave:fe,class:["v-navigation-drawer",`v-navigation-drawer--${C.value}`,{"v-navigation-drawer--expand-on-hover":t.expandOnHover,"v-navigation-drawer--floating":t.floating,"v-navigation-drawer--is-hovering":w.value,"v-navigation-drawer--rail":t.rail,"v-navigation-drawer--temporary":D.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":N.value},o.value,l.value,a.value,u.value,d.value],style:[c.value,$.value,_.value,m.value,pe.value]},n),{default:()=>{var Bt,rt,$e,Tt;return[Ae&&b("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(Bt=i.image)==null?void 0:Bt.call(i,{image:t.image}):b("img",{src:t.image,alt:""},null)]),i.prepend&&b("div",{class:"v-navigation-drawer__prepend"},[(rt=i.prepend)==null?void 0:rt.call(i)]),b("div",{class:"v-navigation-drawer__content"},[($e=i.default)==null?void 0:$e.call(i)]),i.append&&b("div",{class:"v-navigation-drawer__append"},[(Tt=i.append)==null?void 0:Tt.call(i)])]}}),b(Hs,{name:"fade-transition"},{default:()=>[D.value&&(A.value||p.value)&&!!t.scrim&&b("div",{class:["v-navigation-drawer__scrim",me.backgroundColorClasses.value],style:[be.value,me.backgroundColorStyles.value],onClick:()=>p.value=!1},null)]})])}),{isStuck:he}}}),$1={key:"0",class:"btn_cont ml-3"},U1=js({__name:"AppBar",setup(t){const e=ub(),n=X(!1),s=cb(),i=lb(),r=I(()=>s.path==="/list");return(o,a)=>(vn(),qg(_t,null,[b(KN,{flat:""},{default:nt(()=>[b($N,{group:"","hide-on-leave":""},{default:nt(()=>[Je(r)?(vn(),qg("div",$1,[b(ev,null,{default:nt(()=>[b(cr,{icon:"arrow_back",onClick:a[0]||(a[0]=l=>Je(i).push("/"))})]),_:1})])):(vn(),es(v1,{key:"1"},{default:nt(()=>[Mr("h3",null,BC(Je(e).pageTitle),1)]),_:1})),b(y1,{key:"2"}),Je(r)?(vn(),es(cr,{key:"3",onClick:a[1]||(a[1]=l=>Je(i).push("/")),color:"primary"},{default:nt(()=>[ar("done")]),_:1})):(vn(),es(ev,{key:"4",variant:"text",onClick:a[2]||(a[2]=oA(l=>n.value=!n.value,["stop"]))},{default:nt(()=>[b(Mn,{icon:"notifications"})]),_:1}))]),_:1})]),_:1}),b(F1,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value=l),location:"top",app:"",temporary:""},{default:nt(()=>[b(R1,null,{default:nt(()=>[ar(" Become a sponsor ")]),_:1})]),_:1},8,["modelValue"])],64))}});const V1=Ke()({name:"VMain",props:{scrollable:Boolean,...fn({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:s}=bR(),{ssrBootStyles:i}=nu();return ut(()=>b(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[s.value,i.value]},{default:()=>{var r,o;return[t.scrollable?b("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(o=n.default)==null?void 0:o.call(n)]}})),{}}}),B1=js({__name:"View",setup(t){return(e,n)=>{const s=rw("router-view");return vn(),es(V1,{class:"d-flex flex-column"},{default:nt(()=>[b(s,null,{default:nt(({Component:i})=>[b(Hs,{name:"lol",mode:"out-in"},{default:nt(()=>[(vn(),es(aw(i)))]),_:2},1024)]),_:1})]),_:1})}}});const j1=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},H1=j1(B1,[["__scopeId","data-v-48e7bea1"]]);const W1=Ke()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Ur(),...Ca(),...Br(),...Ws(),...Df({name:"bottom-navigation"}),...fn({tag:"header"}),..._b({modelValue:!0,selectedClass:"v-btn--selected"}),...An()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{themeClasses:s}=_R(),{borderClasses:i}=Vr(t),{backgroundColorClasses:r,backgroundColorStyles:o}=br(it(t,"bgColor")),{densityClasses:a}=Sa(t),{elevationClasses:l}=jr(t),{roundedClasses:c}=zs(t),{ssrBootStyles:u}=nu(),h=I(()=>Number(t.height)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0)),d=it(t,"active"),{layoutItemStyles:f}=Pf({id:t.name,order:I(()=>parseInt(t.order,10)),position:I(()=>"bottom"),layoutSize:I(()=>d.value?h.value:0),elementSize:h,active:d,absolute:it(t,"absolute")});return wb(t,jf),$r({VBtn:{color:it(t,"color"),density:it(t,"density"),stacked:I(()=>t.mode!=="horizontal"),variant:"text"}},{scoped:!0}),ut(()=>b(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":d.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":t.mode==="shift"},s.value,r.value,i.value,a.value,l.value,c.value],style:[o.value,f.value,{height:ve(h.value),transform:`translateY(${ve(d.value?0:100,"%")})`},u.value]},{default:()=>[n.default&&b("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}}),z1=Mr("span",null,"Lists",-1),q1=Mr("span",null,"Timer",-1),K1=Mr("span",null,"Settings",-1),G1=js({__name:"BottomNav",setup(t){const e=ub(),n=lb(),s=cb(),i=a=>{n.push({name:a})},r=I({get(){return s.name=="Home"?"Home":"List"},set(){}}),o=I({get(){return s.name},set(){}});return(a,l)=>(vn(),es(W1,{height:Je(e).keyboard?0:56,style:Mc({bottom:Je(e).keyboard?"-56px":"0"}),modelValue:Je(o),"onUpdate:modelValue":l[3]||(l[3]=c=>Pe(o)?o.value=c:null),mandatory:"force",mode:"shift",color:"#db88fa",grow:""},{default:nt(()=>[b(cr,{onClick:l[0]||(l[0]=c=>i("Home")),value:Je(r)},{default:nt(()=>[b(Mn,null,{default:nt(()=>[ar("list")]),_:1}),z1]),_:1},8,["value"]),b(cr,{onClick:l[1]||(l[1]=c=>i("Timer")),value:"Timer"},{default:nt(()=>[b(Mn,null,{default:nt(()=>[ar("timer")]),_:1}),q1]),_:1}),b(cr,{onClick:l[2]||(l[2]=c=>i("Settings")),value:"Settings"},{default:nt(()=>[b(Mn,null,{default:nt(()=>[ar("settings")]),_:1}),K1]),_:1})]),_:1},8,["height","style","modelValue"]))}});const Y1=Ke()({name:"VApp",props:{...wR({fullHeight:!0}),...An()},setup(t,e){let{slots:n}=e;const s=zn(t),{layoutClasses:i,layoutStyles:r,getLayoutItem:o,items:a,layoutRef:l}=IR(t),{rtlClasses:c}=Jc();return ut(()=>{var u;return b("div",{ref:l,class:["v-application",s.themeClasses.value,i.value,c.value],style:r.value},[b("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:a,theme:s}}}),Q1=js({__name:"Default",setup(t){return(e,n)=>(vn(),es(Y1,null,{default:nt(()=>[b(U1),b(H1),b(G1)]),_:1}))}}),X1=Xw("persist",()=>{const t=X({});return{persist:t,setPersist:n=>{t.value=n}}}),J1=[{path:"/",component:Q1,children:[{path:"",name:"Home",component:()=>vs(()=>import("./Home.522baaa5.js"),["assets/Home.522baaa5.js","assets/lists.a6a34ed8.js","assets/lists.f7bfd9e0.css","assets/forwardRefs.2d67e586.js","assets/easing.6e2d7abd.js","assets/VContainer.bd62cc27.js","assets/VContainer.37f80755.css","assets/Home.dd89616e.css"])},{path:"/login",name:"Login",component:()=>vs(()=>import("./Login.ef181798.js"),["assets/Login.ef181798.js","assets/user.5af24fd7.js","assets/VTextField.7115e2af.js","assets/easing.6e2d7abd.js","assets/form.2c6b9055.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/user.53f56c42.css","assets/VContainer.bd62cc27.js","assets/VContainer.37f80755.css","assets/VForm.c00b9209.js","assets/Login.6dfc3b08.css"])},{path:"/signup",name:"Registration",component:()=>vs(()=>import("./Register.3b749803.js"),["assets/Register.3b749803.js","assets/user.5af24fd7.js","assets/VTextField.7115e2af.js","assets/easing.6e2d7abd.js","assets/form.2c6b9055.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/user.53f56c42.css","assets/VContainer.bd62cc27.js","assets/VContainer.37f80755.css","assets/VForm.c00b9209.js","assets/Register.7719a80e.css"])},{path:"/timer",name:"Timer",component:()=>vs(()=>import("./Timer.8a88055e.js"),["assets/Timer.8a88055e.js","assets/VContainer.bd62cc27.js","assets/VContainer.37f80755.css"])},{path:"/settings",name:"Settings",component:()=>vs(()=>import("./Settings.cfa422b9.js"),["assets/Settings.cfa422b9.js","assets/VContainer.bd62cc27.js","assets/VContainer.37f80755.css","assets/VForm.c00b9209.js","assets/form.2c6b9055.js","assets/forwardRefs.2d67e586.js","assets/Settings.7df5dc9f.css"])},{path:"/list",name:"List",component:()=>vs(()=>import("./List.de289f49.js"),["assets/List.de289f49.js","assets/lists.a6a34ed8.js","assets/lists.f7bfd9e0.css","assets/VTextField.7115e2af.js","assets/easing.6e2d7abd.js","assets/form.2c6b9055.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/VContainer.bd62cc27.js","assets/VContainer.37f80755.css","assets/List.d720ec69.css"]),children:[{path:":id",component:()=>vs(()=>import("./List.de289f49.js"),["assets/List.de289f49.js","assets/lists.a6a34ed8.js","assets/lists.f7bfd9e0.css","assets/VTextField.7115e2af.js","assets/easing.6e2d7abd.js","assets/form.2c6b9055.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/VContainer.bd62cc27.js","assets/VContainer.37f80755.css","assets/List.d720ec69.css"])}]}]}],Ol=MN({history:JR({}.BASE_URL),routes:J1});Ol.beforeEach(t=>{const e=X1();let n,s,i,r;const o=indexedDB.open("firebaseLocalStorageDb");o.onsuccess=()=>{n=o.result,s=n.transaction("firebaseLocalStorage"),i=s.objectStore("firebaseLocalStorage").getAll(),i.onsuccess=async()=>{r=await i.result.find(a=>a.value!=="1"),e.setPersist(r),!r&&(t.name!="Login",t.name!="Registration")&&Ol.push({name:"Login"}),r&&t.name=="Login"&&Ol.push({name:"Home"})}}});function Z1(t){mA(),t.use(PR).use(kR).use(Ol)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(t,e){if(!t)throw Hr(e)},Hr=function(t){return new Error("Firebase Database ("+Ub.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eO=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new tO;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bb=function(t){const e=Vb(t);return ou.encodeByteArray(e,!0)},Zl=function(t){return Bb(t).replace(/\./g,"")},ec=function(t){try{return ou.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){return jb(void 0,t)}function jb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sO(n)||(t[n]=jb(t[n],e[n]));return t}function sO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=()=>iO().__FIREBASE_DEFAULTS__,oO=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ec(t[1]);return e&&JSON.parse(e)},Wf=()=>{try{return rO()||oO()||aO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hb=t=>{var e,n;return(n=(e=Wf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lO=t=>{const e=Hb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cO=()=>{var t;return(t=Wf())===null||t===void 0?void 0:t.config},Wb=t=>{var e;return(e=Wf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zl(JSON.stringify(n)),Zl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function zb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hO(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kb(){return Ub.NODE_ADMIN===!0}function qf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function dO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fO,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?pO(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function pO(t,e){return t.replace(gO,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const gO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){return JSON.parse(t)}function wt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ta(ec(r[0])||""),n=ta(ec(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},mO=function(t){const e=Yb(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vO=function(t){const e=Yb(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Er(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ld(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tc(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function na(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(iv(r)&&iv(o)){if(!na(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function iv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function _O(t,e){const n=new wO(t,e);return n.subscribe.bind(n)}class wO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ah),i.error===void 0&&(i.error=ah),i.complete===void 0&&(i.complete=ah);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ah(){}function EO(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,W(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},au=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=1e3,CO=2,SO=4*60*60*1e3,kO=.5;function rv(t,e=TO,n=CO){const s=e*Math.pow(n,t),i=Math.round(kO*s*(Math.random()-.5)*2);return Math.min(SO,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ea;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NO(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RO(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RO(t){return t===ti?void 0:t}function NO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const xO={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},DO=ke.INFO,PO={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},LO=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=PO[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=DO,this._logHandler=LO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const MO=(t,e)=>e.some(n=>t instanceof n);let ov,av;function FO(){return ov||(ov=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $O(){return av||(av=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qb=new WeakMap,cd=new WeakMap,Xb=new WeakMap,lh=new WeakMap,Kf=new WeakMap;function UO(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ns(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qb.set(n,t)}).catch(()=>{}),Kf.set(e,t),e}function VO(t){if(cd.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});cd.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BO(t){ud=t(ud)}function jO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ch(this),e,...n);return Xb.set(s,e.sort?e.sort():[e]),Ns(s)}:$O().includes(t)?function(...e){return t.apply(ch(this),e),Ns(Qb.get(this))}:function(...e){return Ns(t.apply(ch(this),e))}}function HO(t){return typeof t=="function"?jO(t):(t instanceof IDBTransaction&&VO(t),MO(t,FO())?new Proxy(t,ud):t)}function Ns(t){if(t instanceof IDBRequest)return UO(t);if(lh.has(t))return lh.get(t);const e=HO(t);return e!==t&&(lh.set(t,e),Kf.set(e,t)),e}const ch=t=>Kf.get(t);function Jb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ns(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ns(o.result),l.oldVersion,l.newVersion,Ns(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const WO=["get","getKey","getAll","getAllKeys","count"],zO=["put","add","delete","clear"],uh=new Map;function lv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uh.get(e))return uh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zO.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||WO.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return uh.set(e,r),r}BO(t=>({...t,get:(e,n,s)=>lv(e,n)||t.get(e,n,s),has:(e,n)=>!!lv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KO(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function KO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",cv="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new zr("@firebase/app"),GO="@firebase/app-compat",YO="@firebase/analytics-compat",QO="@firebase/analytics",XO="@firebase/app-check-compat",JO="@firebase/app-check",ZO="@firebase/auth",ex="@firebase/auth-compat",tx="@firebase/database",nx="@firebase/database-compat",sx="@firebase/functions",ix="@firebase/functions-compat",rx="@firebase/installations",ox="@firebase/installations-compat",ax="@firebase/messaging",lx="@firebase/messaging-compat",cx="@firebase/performance",ux="@firebase/performance-compat",hx="@firebase/remote-config",dx="@firebase/remote-config-compat",fx="@firebase/storage",px="@firebase/storage-compat",gx="@firebase/firestore",mx="@firebase/firestore-compat",vx="firebase",yx="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",_x={[hd]:"fire-core",[GO]:"fire-core-compat",[QO]:"fire-analytics",[YO]:"fire-analytics-compat",[JO]:"fire-app-check",[XO]:"fire-app-check-compat",[ZO]:"fire-auth",[ex]:"fire-auth-compat",[tx]:"fire-rtdb",[nx]:"fire-rtdb-compat",[sx]:"fire-fn",[ix]:"fire-fn-compat",[rx]:"fire-iid",[ox]:"fire-iid-compat",[ax]:"fire-fcm",[lx]:"fire-fcm-compat",[cx]:"fire-perf",[ux]:"fire-perf-compat",[hx]:"fire-rc",[dx]:"fire-rc-compat",[fx]:"fire-gcs",[px]:"fire-gcs-compat",[gx]:"fire-fst",[mx]:"fire-fst-compat","fire-js":"fire-js",[vx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Map,fd=new Map;function wx(t,e){try{t.container.addComponent(e)}catch(n){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(fd.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of nc.values())wx(n,t);return!0}function $i(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Os=new qs("app","Firebase",bx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Os.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=yx;function Zb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Os.create("bad-app-name",{appName:String(i)});if(n||(n=cO()),!n)throw Os.create("no-options");const r=nc.get(i);if(r){if(na(n,r.options)&&na(s,r.config))return r;throw Os.create("duplicate-app",{appName:i})}const o=new OO(i);for(const l of fd.values())o.addComponent(l);const a=new Ex(n,s,o);return nc.set(i,a),a}function lu(t=dd){const e=nc.get(t);if(!e&&t===dd)return Zb();if(!e)throw Os.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=(s=_x[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(a.join(" "));return}Kt(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="firebase-heartbeat-database",Tx=1,sa="firebase-heartbeat-store";let hh=null;function e0(){return hh||(hh=Jb(Ix,Tx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(sa)}}}).catch(t=>{throw Os.create("idb-open",{originalErrorMessage:t.message})})),hh}async function Cx(t){try{return(await e0()).transaction(sa).objectStore(sa).get(t0(t))}catch(e){if(e instanceof pn)Ii.warn(e.message);else{const n=Os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ii.warn(n.message)}}}async function uv(t,e){try{const s=(await e0()).transaction(sa,"readwrite");return await s.objectStore(sa).put(e,t0(t)),s.done}catch(n){if(n instanceof pn)Ii.warn(n.message);else{const s=Os.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ii.warn(s.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=1024,kx=30*24*60*60*1e3;class Ax{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nx(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=kx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hv(),{heartbeatsToSend:n,unsentEntries:s}=Rx(this._heartbeatsCache.heartbeats),i=Zl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hv(){return new Date().toISOString().substring(0,10)}function Rx(t,e=Sx){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),dv(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qf()?Gb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dv(t){return Zl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){Kt(new Vt("platform-logger",e=>new qO(e),"PRIVATE")),Kt(new Vt("heartbeat",e=>new Ax(e),"PRIVATE")),bt(hd,cv,t),bt(hd,cv,"esm2017"),bt("fire-js","")}Ox("");var xx="firebase",Dx="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(xx,Dx,"app");var Px=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,Gf=Gf||{},oe=Px||self;function sc(){}function cu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ka(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Lx(t){return Object.prototype.hasOwnProperty.call(t,dh)&&t[dh]||(t[dh]=++Mx)}var dh="closure_uid_"+(1e9*Math.random()>>>0),Mx=0;function Fx(t,e,n){return t.call.apply(t.bind,arguments)}function $x(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=Fx:Pt=$x,Pt.apply(null,arguments)}function hl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function It(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ks(){this.s=this.s,this.o=this.o}var Ux=0;Ks.prototype.s=!1;Ks.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ux!=0)&&Lx(this)};Ks.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const n0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function fv(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(cu(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var Vx=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",sc,e),oe.removeEventListener("test",sc,e)}catch{}return t}();function ic(t){return/^[\s\xa0]*$/.test(t)}var pv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fh(t,e){return t<e?-1:t>e?1:0}function uu(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function Pn(t){return uu().indexOf(t)!=-1}function Qf(t){return Qf[" "](t),t}Qf[" "]=sc;function Bx(t){var e=Wx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var jx=Pn("Opera"),Ir=Pn("Trident")||Pn("MSIE"),s0=Pn("Edge"),pd=s0||Ir,i0=Pn("Gecko")&&!(uu().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),Hx=uu().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function r0(){var t=oe.document;return t?t.documentMode:void 0}var rc;e:{var ph="",gh=function(){var t=uu();if(i0)return/rv:([^\);]+)(\)|;)/.exec(t);if(s0)return/Edge\/([\d\.]+)/.exec(t);if(Ir)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Hx)return/WebKit\/(\S+)/.exec(t);if(jx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(gh&&(ph=gh?gh[1]:""),Ir){var mh=r0();if(mh!=null&&mh>parseFloat(ph)){rc=String(mh);break e}}rc=ph}var Wx={};function zx(){return Bx(function(){let t=0;const e=pv(String(rc)).split("."),n=pv("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=fh(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||fh(i[2].length==0,r[2].length==0)||fh(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var gd;if(oe.document&&Ir){var gv=r0();gd=gv||parseInt(rc,10)||void 0}else gd=void 0;var qx=gd;function ia(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(i0){e:{try{Qf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Kx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ia.X.h.call(this)}}It(ia,Lt);var Kx={2:"touch",3:"pen",4:"mouse"};ia.prototype.h=function(){ia.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Aa="closure_listenable_"+(1e6*Math.random()|0),Gx=0;function Yx(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Gx,this.ba=this.ea=!1}function hu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Xf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function o0(t){const e={};for(const n in t)e[n]=t[n];return e}const mv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function a0(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<mv.length;r++)n=mv[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function du(t){this.src=t,this.g={},this.h=0}du.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=vd(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Yx(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function md(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=n0(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(hu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vd(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Jf="closure_lm_"+(1e6*Math.random()|0),vh={};function l0(t,e,n,s,i){if(s&&s.once)return u0(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)l0(t,e[r],n,s,i);return null}return n=tp(n),t&&t[Aa]?t.N(e,n,ka(s)?!!s.capture:!!s,i):c0(t,e,n,!1,s,i)}function c0(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ka(i)?!!i.capture:!!i,a=ep(t);if(a||(t[Jf]=a=new du(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Qx(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Vx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(d0(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qx(){function t(n){return e.call(t.src,t.listener,n)}const e=Xx;return t}function u0(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)u0(t,e[r],n,s,i);return null}return n=tp(n),t&&t[Aa]?t.O(e,n,ka(s)?!!s.capture:!!s,i):c0(t,e,n,!0,s,i)}function h0(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)h0(t,e[r],n,s,i);else s=ka(s)?!!s.capture:!!s,n=tp(n),t&&t[Aa]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=vd(r,n,s,i),-1<n&&(hu(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ep(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vd(e,n,s,i)),(n=-1<t?e[t]:null)&&Zf(n))}function Zf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Aa])md(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(d0(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ep(e))?(md(n,t),n.h==0&&(n.src=null,e[Jf]=null)):hu(t)}}}function d0(t){return t in vh?vh[t]:vh[t]="on"+t}function Xx(t,e){if(t.ba)t=!0;else{e=new ia(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Zf(t),t=n.call(s,e)}return t}function ep(t){return t=t[Jf],t instanceof du?t:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function tp(t){return typeof t=="function"?t:(t[yh]||(t[yh]=function(e){return t.handleEvent(e)}),t[yh])}function vt(){Ks.call(this),this.i=new du(this),this.P=this,this.I=null}It(vt,Ks);vt.prototype[Aa]=!0;vt.prototype.removeEventListener=function(t,e,n,s){h0(this,t,e,n,s)};function Et(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var i=e;e=new Lt(s,t),a0(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=dl(o,s,!0,e)&&i}if(o=e.g=t,i=dl(o,s,!0,e)&&i,i=dl(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=dl(o,s,!1,e)&&i}vt.prototype.M=function(){if(vt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)hu(n[s]);delete t.g[e],t.h--}}this.I=null};vt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};vt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function dl(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&md(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var np=oe.JSON.stringify;function Jx(){var t=g0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Zx{constructor(){this.h=this.g=null}add(e,n){const s=f0.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var f0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new eD,t=>t.reset());class eD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tD(t){oe.setTimeout(()=>{throw t},0)}function p0(t,e){yd||nD(),_d||(yd(),_d=!0),g0.add(t,e)}var yd;function nD(){var t=oe.Promise.resolve(void 0);yd=function(){t.then(sD)}}var _d=!1,g0=new Zx;function sD(){for(var t;t=Jx();){try{t.h.call(t.g)}catch(n){tD(n)}var e=f0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_d=!1}function fu(t,e){vt.call(this),this.h=t||1,this.g=e||oe,this.j=Pt(this.lb,this),this.l=Date.now()}It(fu,vt);G=fu.prototype;G.ca=!1;G.R=null;G.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Et(this,"tick"),this.ca&&(sp(this),this.start()))}};G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sp(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}G.M=function(){fu.X.M.call(this),sp(this),delete this.g};function ip(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function m0(t){t.g=ip(()=>{t.g=null,t.i&&(t.i=!1,m0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iD extends Ks{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:m0(this)}M(){super.M(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ra(t){Ks.call(this),this.h=t,this.g={}}It(ra,Ks);var vv=[];function v0(t,e,n,s){Array.isArray(n)||(n&&(vv[0]=n.toString()),n=vv);for(var i=0;i<n.length;i++){var r=l0(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function y0(t){Xf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zf(e)},t),t.g={}}ra.prototype.M=function(){ra.X.M.call(this),y0(this)};ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pu(){this.g=!0}pu.prototype.Aa=function(){this.g=!1};function rD(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function oD(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function tr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lD(t,n)+(s?" "+s:"")})}function aD(t,e){t.info(function(){return"TIMEOUT: "+e})}pu.prototype.info=function(){};function lD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return np(n)}catch{return e}}var Vi={},yv=null;function gu(){return yv=yv||new vt}Vi.Pa="serverreachability";function _0(t){Lt.call(this,Vi.Pa,t)}It(_0,Lt);function oa(t){const e=gu();Et(e,new _0(e))}Vi.STAT_EVENT="statevent";function w0(t,e){Lt.call(this,Vi.STAT_EVENT,t),this.stat=e}It(w0,Lt);function Ut(t){const e=gu();Et(e,new w0(e,t))}Vi.Qa="timingevent";function b0(t,e){Lt.call(this,Vi.Qa,t),this.size=e}It(b0,Lt);function Ra(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var mu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},E0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function rp(){}rp.prototype.h=null;function _v(t){return t.h||(t.h=t.i())}function I0(){}var Na={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function op(){Lt.call(this,"d")}It(op,Lt);function ap(){Lt.call(this,"c")}It(ap,Lt);var wd;function vu(){}It(vu,rp);vu.prototype.g=function(){return new XMLHttpRequest};vu.prototype.i=function(){return{}};wd=new vu;function Oa(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ra(this),this.O=cD,t=pd?125:void 0,this.T=new fu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new T0}function T0(){this.i=null,this.g="",this.h=!1}var cD=45e3,bd={},oc={};G=Oa.prototype;G.setTimeout=function(t){this.O=t};function Ed(t,e,n){t.K=1,t.v=_u(is(e)),t.s=n,t.P=!0,C0(t,null)}function C0(t,e){t.F=Date.now(),xa(t),t.A=is(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),D0(n.i,"t",s),t.C=0,n=t.l.H,t.h=new T0,t.g=eE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new iD(Pt(t.La,t,t.g),t.N)),v0(t.S,t.g,"readystatechange",t.ib),e=t.H?o0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oa(),rD(t.j,t.u,t.A,t.m,t.U,t.s)}G.ib=function(t){t=t.target;const e=this.L;e&&Qn(t)==3?e.l():this.La(t)};G.La=function(t){try{if(t==this.g)e:{const u=Qn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||pd||this.g&&(this.h.h||this.g.fa()||Iv(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?oa(3):oa(2)),yu(this);var n=this.g.aa();this.Y=n;t:if(S0(this)){var s=Iv(this.g);t="";var i=s.length,r=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){li(this),No(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,oD(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ic(a)){var c=a;break t}}c=null}if(n=c)tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Id(this,n);else{this.i=!1,this.o=3,Ut(12),li(this),No(this);break e}}this.P?(k0(this,u,o),pd&&this.i&&u==3&&(v0(this.S,this.T,"tick",this.hb),this.T.start())):(tr(this.j,this.m,o,null),Id(this,o)),u==4&&li(this),this.i&&!this.I&&(u==4?Q0(this.l,this):(this.i=!1,xa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),li(this),No(this)}}}catch{}finally{}};function S0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function k0(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=uD(t,n),i==oc){e==4&&(t.o=4,Ut(14),s=!1),tr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bd){t.o=4,Ut(15),tr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else tr(t.j,t.m,i,null),Id(t,i);S0(t)&&i!=oc&&i!=bd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ut(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),pp(e),e.K=!0,Ut(11))):(tr(t.j,t.m,n,"[Invalid Chunked Response]"),li(t),No(t))}G.hb=function(){if(this.g){var t=Qn(this.g),e=this.g.fa();this.C<e.length&&(yu(this),k0(this,t,e),this.i&&t!=4&&xa(this))}};function uD(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?oc:(n=Number(e.substring(n,s)),isNaN(n)?bd:(s+=1,s+n>e.length?oc:(e=e.substr(s,n),t.C=s+n,e)))}G.cancel=function(){this.I=!0,li(this)};function xa(t){t.V=Date.now()+t.O,A0(t,t.O)}function A0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ra(Pt(t.gb,t),e)}function yu(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}G.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(aD(this.j,this.A),this.K!=2&&(oa(),Ut(17)),li(this),this.o=2,No(this)):A0(this,this.V-t)};function No(t){t.l.G==0||t.I||Q0(t.l,t)}function li(t){yu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,sp(t.T),y0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Id(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Td(n.h,t))){if(!t.J&&Td(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)cc(n),Eu(n);else break e;fp(n),Ut(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ra(Pt(n.cb,n),6e3));if(1>=M0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ci(n,11)}else if((t.J||n.g==t)&&cc(n),!ic(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(lp(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,ze(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Z0(s,s.H?s.ka:null,s.V),o.J){F0(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(yu(a),xa(a)),s.g=o}else G0(s);0<n.i.length&&Iu(n)}else c[0]!="stop"&&c[0]!="close"||ci(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ci(n,7):dp(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}oa(4)}catch{}}function hD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cu(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function dD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function R0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=dD(t),s=hD(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var N0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mi){this.h=e!==void 0?e:t.h,ac(this,t.j),this.s=t.s,this.g=t.g,lc(this,t.m),this.l=t.l,e=t.i;var n=new aa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wv(this,n),this.o=t.o}else t&&(n=String(t).match(N0))?(this.h=!!e,ac(this,n[1]||"",!0),this.s=yo(n[2]||""),this.g=yo(n[3]||"",!0),lc(this,n[4]),this.l=yo(n[5]||"",!0),wv(this,n[6]||"",!0),this.o=yo(n[7]||"")):(this.h=!!e,this.i=new aa(null,this.h))}mi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_o(e,bv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_o(e,bv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_o(n,n.charAt(0)=="/"?mD:gD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_o(n,yD)),t.join("")};function is(t){return new mi(t)}function ac(t,e,n){t.j=n?yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wv(t,e,n){e instanceof aa?(t.i=e,_D(t.i,t.h)):(n||(e=_o(e,vD)),t.i=new aa(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function _u(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _o(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bv=/[#\/\?@]/g,gD=/[#\?:]/g,mD=/[#\?]/g,vD=/[#\?@]/g,yD=/#/g;function aa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gs(t){t.g||(t.g=new Map,t.h=0,t.i&&fD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=aa.prototype;G.add=function(t,e){Gs(this),this.i=null,t=qr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function O0(t,e){Gs(t),e=qr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function x0(t,e){return Gs(t),e=qr(t,e),t.g.has(e)}G.forEach=function(t,e){Gs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};G.oa=function(){Gs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};G.W=function(t){Gs(this);let e=[];if(typeof t=="string")x0(this,t)&&(e=e.concat(this.g.get(qr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Gs(this),this.i=null,t=qr(this,t),x0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function D0(t,e,n){O0(t,e),0<n.length&&(t.i=null,t.g.set(qr(t,e),Yf(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function qr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _D(t,e){e&&!t.j&&(Gs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(O0(this,s),D0(this,i,n))},t)),t.j=e}var wD=class{constructor(t,e){this.h=t,this.g=e}};function P0(t){this.l=t||bD,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ga&&oe.g.Ga()&&oe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bD=10;function L0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function M0(t){return t.h?1:t.g?t.g.size:0}function Td(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function lp(t,e){t.g?t.g.add(e):t.h=e}function F0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}P0.prototype.cancel=function(){if(this.i=$0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yf(t.i)}function cp(){}cp.prototype.stringify=function(t){return oe.JSON.stringify(t,void 0)};cp.prototype.parse=function(t){return oe.JSON.parse(t,void 0)};function ED(){this.g=new cp}function ID(t,e,n){const s=n||"";try{R0(t,function(i,r){let o=i;ka(i)&&(o=np(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function TD(t,e){const n=new pu;if(oe.Image){const s=new Image;s.onload=hl(fl,n,s,"TestLoadImage: loaded",!0,e),s.onerror=hl(fl,n,s,"TestLoadImage: error",!1,e),s.onabort=hl(fl,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=hl(fl,n,s,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function fl(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Da(t){this.l=t.ac||null,this.j=t.jb||!1}It(Da,rp);Da.prototype.g=function(){return new wu(this.l,this.j)};Da.prototype.i=function(t){return function(){return t}}({});function wu(t,e){vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=up,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}It(wu,vt);var up=0;G=wu.prototype;G.open=function(t,e){if(this.readyState!=up)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,la(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||oe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pa(this)),this.readyState=up};G.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;U0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function U0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}G.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pa(this):la(this),this.readyState==3&&U0(this)}};G.Va=function(t){this.g&&(this.response=this.responseText=t,Pa(this))};G.Ua=function(t){this.g&&(this.response=t,Pa(this))};G.ga=function(){this.g&&Pa(this)};function Pa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,la(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function la(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CD=oe.JSON.parse;function Xe(t){vt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=V0,this.K=this.L=!1}It(Xe,vt);var V0="",SD=/^https?$/i,kD=["POST","PUT"];G=Xe.prototype;G.Ka=function(t){this.L=t};G.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wd.g(),this.C=this.u?_v(this.u):_v(wd),this.g.onreadystatechange=Pt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Ev(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=oe.FormData&&t instanceof oe.FormData,!(0<=n0(kD,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{H0(this),0<this.B&&((this.K=AD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.qa,this)):this.A=ip(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Ev(this,r)}};function AD(t){return Ir&&zx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.qa=function(){typeof Gf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function Ev(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,B0(t),bu(t)}function B0(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),bu(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bu(this,!0)),Xe.X.M.call(this)};G.Ha=function(){this.s||(this.F||this.v||this.l?j0(this):this.fb())};G.fb=function(){j0(this)};function j0(t){if(t.h&&typeof Gf<"u"&&(!t.C[1]||Qn(t)!=4||t.aa()!=2)){if(t.v&&Qn(t)==4)ip(t.Ha,0,t);else if(Et(t,"readystatechange"),Qn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(N0)[1]||null;if(!i&&oe.self&&oe.self.location){var r=oe.self.location.protocol;i=r.substr(0,r.length-1)}s=!SD.test(i?i.toLowerCase():"")}n=s}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Qn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",B0(t)}}finally{bu(t)}}}}function bu(t,e){if(t.g){H0(t);const n=t.g,s=t.C[0]?sc:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=s}catch{}}}function H0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}G.aa=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}};G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CD(e)}};function Iv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case V0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ea=function(){return this.m};G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function W0(t){let e="";return Xf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function hp(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=W0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ze(t,e,n))}function co(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function z0(t){this.Ca=0,this.i=[],this.j=new pu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=co("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=co("baseRetryDelayMs",5e3,t),this.bb=co("retryDelaySeedMs",1e4,t),this.$a=co("forwardChannelMaxRetries",2,t),this.ta=co("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new P0(t&&t.concurrentRequestLimit),this.Fa=new ED,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}G=z0.prototype;G.ma=8;G.G=1;function dp(t){if(q0(t),t.G==3){var e=t.U++,n=is(t.F);ze(n,"SID",t.I),ze(n,"RID",e),ze(n,"TYPE","terminate"),La(t,n),e=new Oa(t,t.j,e,void 0),e.K=2,e.v=_u(is(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon&&(n=oe.navigator.sendBeacon(e.v.toString(),"")),!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=eE(e.l,null),e.g.da(e.v)),e.F=Date.now(),xa(e)}J0(t)}function Eu(t){t.g&&(pp(t),t.g.cancel(),t.g=null)}function q0(t){Eu(t),t.u&&(oe.clearTimeout(t.u),t.u=null),cc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function Iu(t){L0(t.h)||t.m||(t.m=!0,p0(t.Ja,t),t.C=0)}function RD(t,e){return M0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ra(Pt(t.Ja,t,e),X0(t,t.C)),t.C++,!0)}G.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Oa(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=o0(r),a0(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=K0(this,i,e),n=is(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),La(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(W0(r)))+"&"+e:this.o&&hp(n,this.o,r)),lp(this.h,i),this.Ya&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",e),ze(n,"SID","null"),i.Z=!0,Ed(i,n,null)):Ed(i,n,e),this.G=2}}else this.G==3&&(t?Tv(this,t):this.i.length==0||L0(this.h)||Tv(this))};function Tv(t,e){var n;e?n=e.m:n=t.U++;const s=is(t.F);ze(s,"SID",t.I),ze(s,"RID",n),ze(s,"AID",t.T),La(t,s),t.o&&t.s&&hp(s,t.o,t.s),n=new Oa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=K0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),lp(t.h,n),Ed(n,s,e)}function La(t,e){t.ia&&Xf(t.ia,function(n,s){ze(e,s,n)}),t.l&&R0({},function(n,s){ze(e,s,n)})}function K0(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Pt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{ID(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function G0(t){t.g||t.u||(t.Z=1,p0(t.Ia,t),t.A=0)}function fp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ra(Pt(t.Ia,t),X0(t,t.A)),t.A++,!0)}G.Ia=function(){if(this.u=null,Y0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ra(Pt(this.eb,this),t)}};G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ut(10),Eu(this),Y0(this))};function pp(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function Y0(t){t.g=new Oa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=is(t.sa);ze(e,"RID","rpc"),ze(e,"SID",t.I),ze(e,"CI",t.L?"0":"1"),ze(e,"AID",t.T),ze(e,"TYPE","xmlhttp"),La(t,e),t.o&&t.s&&hp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=_u(is(e)),n.s=null,n.P=!0,C0(n,t)}G.cb=function(){this.v!=null&&(this.v=null,Eu(this),fp(this),Ut(19))};function cc(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function Q0(t,e){var n=null;if(t.g==e){cc(t),pp(t),t.g=null;var s=2}else if(Td(t.h,e))n=e.D,F0(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=gu(),Et(s,new b0(s,n)),Iu(t)}else G0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&RD(t,e)||s==2&&fp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ci(t,5);break;case 4:ci(t,10);break;case 3:ci(t,6);break;default:ci(t,2)}}}function X0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ci(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Pt(t.kb,t);n||(n=new mi("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||ac(n,"https"),_u(n)),TD(n.toString(),s)}else Ut(2);t.G=0,t.l&&t.l.va(e),J0(t),q0(t)}G.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function J0(t){if(t.G=0,t.la=[],t.l){const e=$0(t.h);(e.length!=0||t.i.length!=0)&&(fv(t.la,e),fv(t.la,t.i),t.h.i.length=0,Yf(t.i),t.i.length=0),t.l.ua()}}function Z0(t,e,n){var s=n instanceof mi?is(n):new mi(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),lc(s,s.m);else{var i=oe.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new mi(null,void 0);s&&ac(r,s),e&&(r.g=e),i&&lc(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ze(s,n,e),ze(s,"VER",t.ma),La(t,s),s}function eE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Xe(new Da({jb:!0})):new Xe(t.ra),e.Ka(t.H),e}function tE(){}G=tE.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Ra=function(){};function uc(){if(Ir&&!(10<=Number(qx)))throw Error("Environmental error: no available transport.")}uc.prototype.g=function(t,e){return new tn(t,e)};function tn(t,e){vt.call(this),this.g=new z0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ic(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ic(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Kr(this)}It(tn,vt);tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Z0(t,null,t.V),Iu(t)};tn.prototype.close=function(){dp(this.g)};tn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=np(t),t=n);e.i.push(new wD(e.ab++,t)),e.G==3&&Iu(e)};tn.prototype.M=function(){this.g.l=null,delete this.j,dp(this.g),delete this.g,tn.X.M.call(this)};function nE(t){op.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}It(nE,op);function sE(){ap.call(this),this.status=1}It(sE,ap);function Kr(t){this.g=t}It(Kr,tE);Kr.prototype.xa=function(){Et(this.g,"a")};Kr.prototype.wa=function(t){Et(this.g,new nE(t))};Kr.prototype.va=function(t){Et(this.g,new sE)};Kr.prototype.ua=function(){Et(this.g,"b")};uc.prototype.createWebChannel=uc.prototype.g;tn.prototype.send=tn.prototype.u;tn.prototype.open=tn.prototype.m;tn.prototype.close=tn.prototype.close;mu.NO_ERROR=0;mu.TIMEOUT=8;mu.HTTP_ERROR=6;E0.COMPLETE="complete";I0.EventType=Na;Na.OPEN="a";Na.CLOSE="b";Na.ERROR="c";Na.MESSAGE="d";vt.prototype.listen=vt.prototype.N;Xe.prototype.listenOnce=Xe.prototype.O;Xe.prototype.getLastError=Xe.prototype.Oa;Xe.prototype.getLastErrorCode=Xe.prototype.Ea;Xe.prototype.getStatus=Xe.prototype.aa;Xe.prototype.getResponseJson=Xe.prototype.Sa;Xe.prototype.getResponseText=Xe.prototype.fa;Xe.prototype.send=Xe.prototype.da;Xe.prototype.setWithCredentials=Xe.prototype.Ka;var ND=function(){return new uc},OD=function(){return gu()},_h=mu,xD=E0,DD=Vi,Cv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},PD=Da,pl=I0,LD=Xe;const Sv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new zr("@firebase/firestore");function kv(){return Ti.logLevel}function Y(t,...e){if(Ti.logLevel<=ke.DEBUG){const n=e.map(gp);Ti.debug(`Firestore (${Gr}): ${t}`,...n)}}function rs(t,...e){if(Ti.logLevel<=ke.ERROR){const n=e.map(gp);Ti.error(`Firestore (${Gr}): ${t}`,...n)}}function hc(t,...e){if(Ti.logLevel<=ke.WARN){const n=e.map(gp);Ti.warn(`Firestore (${Gr}): ${t}`,...n)}}function gp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: `+t;throw rs(e),new Error(e)}function je(t,e){t||re()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class FD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $D{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string"),new iE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new St(e)}}class UD{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=St.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class VD{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new UD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(je(typeof n.token=="string"),this.T=n.token,new BD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=HD(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function Tr(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new at(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new at(0,0))}static max(){return new le(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,s){n===void 0?n=0:n>e.length&&re(),s===void 0?s=e.length-n:s>e.length-n&&re(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends ca{construct(e,n,s){return new qe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const WD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends ca{construct(e,n,s){return new xt(e,n,s)}static isValidIdentifier(e){return WD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ne(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ne(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ne(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(qe.fromString(e))}static fromName(e){return new te(qe.fromString(e).popFirst(5))}static empty(){return new te(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new qe(e.slice()))}}function zD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(s===1e9?new at(n+1,0):new at(n,s));return new Fs(i,te.empty(),e)}function qD(t){return new Fs(t.readTime,t.key,-1)}class Fs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fs(le.min(),te.empty(),-1)}static max(){return new Fs(le.max(),te.empty(),-1)}}function KD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==GD)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,s)=>{n(e)})}static reject(e){return new L((n,s)=>{s(e)})}static waitFor(e){return new L((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=L.resolve(!1);for(const s of e)n=n.next(i=>i?L.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new L((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new L((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Fa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}mp.ct=-1;function Tu(t){return t==null}function dc(t){return t===0&&1/t==-1/0}function QD(t){return typeof t=="number"&&Number.isInteger(t)&&!dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:yt.RED,this.left=i!=null?i:yt.EMPTY,this.right=r!=null?r:yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new yt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,s,i){return this}insert(t,e,n){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rv(this.data.getIterator())}getIteratorFrom(e){return new Rv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Rv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new wn([])}unionWith(e){let n=new lt(xt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new XD("Invalid base64 string: "+i):i}}(e);return new Ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const JD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $s(t){if(je(!!t),typeof t=="string"){let e=0;const n=JD.exec(t);if(je(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?Ft.fromBase64String(t):Ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lE(t){const e=t.mapValue.fields.__previous_value__;return aE(e)?lE(e):e}function ua(t){const e=$s(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?aE(t)?4:eP(t)?9007199254740991:10:re()}function Bn(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ua(t).isEqual(ua(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=$s(s.timestampValue),o=$s(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Cr(s.bytesValue).isEqual(Cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=st(s.doubleValue),o=st(i.doubleValue);return r===o?dc(r)===dc(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Tr(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Av(r)!==Av(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Bn(r[a],o[a])))return!1;return!0}(t,e);default:return re()}}function da(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function Sr(t,e){if(t===e)return 0;const n=Ci(t),s=Ci(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=st(i.integerValue||i.doubleValue),a=st(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nv(t.timestampValue,e.timestampValue);case 4:return Nv(ua(t),ua(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Cr(i),a=Cr(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Re(o[l],a[l]);if(c!==0)return c}return Re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Re(st(i.latitude),st(r.latitude));return o!==0?o:Re(st(i.longitude),st(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Sr(o[l],a[l]);if(c)return c}return Re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ml.mapValue&&r===ml.mapValue)return 0;if(i===ml.mapValue)return 1;if(r===ml.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Re(a[u],c[u]);if(h!==0)return h;const d=Sr(o[a[u]],l[c[u]]);if(d!==0)return d}return Re(a.length,c.length)}(t.mapValue,e.mapValue);default:throw re()}}function Nv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=$s(t),s=$s(e),i=Re(n.seconds,s.seconds);return i!==0?i:Re(n.nanos,s.nanos)}function kr(t){return Cd(t)}function Cd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=$s(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,te.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Cd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Cd(s.fields[a])}`;return r+"}"}(t.mapValue):re();var e,n}function Sd(t){return!!t&&"integerValue"in t}function vp(t){return!!t&&"arrayValue"in t}function Ov(t){return!!t&&"nullValue"in t}function xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xl(t){return!!t&&"mapValue"in t}function Oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Oo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oo(n)}setAll(e){let n=xt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Oo(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];xl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Yr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new on(Oo(this.value))}}function cE(t){const e=[];return Yr(t.fields,(n,s)=>{const i=new xt([n]);if(xl(s)){const r=cE(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,le.min(),le.min(),le.min(),on.empty(),0)}static newFoundDocument(e,n,s,i){return new kt(e,1,n,le.min(),s,i,0)}static newNoDocument(e,n){return new kt(e,2,n,le.min(),le.min(),on.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,le.min(),le.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function Dv(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=te.comparator(te.fromName(o.referenceValue),n.key):s=Sr(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function tP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{}class ot extends uE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new sP(e,n,s):n==="array-contains"?new oP(e,s):n==="in"?new aP(e,s):n==="not-in"?new lP(e,s):n==="array-contains-any"?new cP(e,s):new ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new iP(e,s):new rP(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Sr(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.matchesComparison(Sr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jn extends uE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new jn(e,n)}matches(e){return hE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hE(t){return t.op==="and"}function dE(t){return nP(t)&&hE(t)}function nP(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function kd(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+kr(t.value);if(dE(t))return t.filters.map(e=>kd(e)).join(",");{const e=t.filters.map(n=>kd(n)).join(",");return`${t.op}(${e})`}}function fE(t,e){return t instanceof ot?function(n,s){return s instanceof ot&&n.op===s.op&&n.field.isEqual(s.field)&&Bn(n.value,s.value)}(t,e):t instanceof jn?function(n,s){return s instanceof jn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&fE(r,s.filters[o]),!0):!1}(t,e):void re()}function pE(t){return t instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${kr(e.value)}`}(t):t instanceof jn?function(e){return e.op.toString()+" {"+e.getFilters().map(pE).join(" ,")+"}"}(t):"Filter"}class sP extends ot{constructor(e,n,s){super(e,n,s),this.key=te.fromName(s.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class iP extends ot{constructor(e,n){super(e,"in",n),this.keys=gE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rP extends ot{constructor(e,n){super(e,"not-in",n),this.keys=gE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>te.fromName(s.referenceValue))}class oP extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vp(n)&&da(n.arrayValue,this.value)}}class aP extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&da(this.value.arrayValue,n)}}class lP extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!da(this.value.arrayValue,n)}}class cP extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>da(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Lv(t,e=null,n=[],s=[],i=null,r=null,o=null){return new uP(t,e,n,s,i,r,o)}function yp(t){const e=ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>kd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>kr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>kr(s)).join(",")),e.ft=n}return e.ft}function _p(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pv(t.startAt,e.startAt)&&Pv(t.endAt,e.endAt)}function Ad(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function hP(t,e,n,s,i,r,o,a){return new Cu(t,e,n,s,i,r,o,a)}function wp(t){return new Cu(t)}function Mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dP(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fP(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pP(t){return t.collectionGroup!==null}function ur(t){const e=ue(t);if(e.dt===null){e.dt=[];const n=fP(e),s=dP(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new xo(n)),e.dt.push(new xo(xt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new xo(xt.keyField(),r))}}}return e.dt}function os(t){const e=ue(t);if(!e.wt)if(e.limitType==="F")e.wt=Lv(e.path,e.collectionGroup,ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ur(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new xo(r.field,o))}const s=e.endAt?new fc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new fc(e.startAt.position,e.startAt.inclusive):null;e.wt=Lv(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Rd(t,e,n){return new Cu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return _p(os(t),os(e))&&t.limitType===e.limitType}function mE(t){return`${yp(os(t))}|lt:${t.limitType}`}function Nd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>pE(s)).join(", ")}]`),Tu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>kr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>kr(s)).join(",")),`Target(${n})`}(os(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):te.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of ur(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Dv(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ur(n),s)||n.endAt&&!function(i,r,o){const a=Dv(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ur(n),s))}(t,e)}function gP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vE(t){return(e,n)=>{let s=!1;for(const i of ur(t)){const r=mP(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function mP(t,e,n){const s=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Sr(a,l):re()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return oE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new ct(te.comparator);function as(){return vP}const yE=new ct(te.comparator);function wo(...t){let e=yE;for(const n of t)e=e.insert(n.key,n);return e}function _E(t){let e=yE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ui(){return Do()}function wE(){return Do()}function Do(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const yP=new ct(te.comparator),_P=new lt(te.comparator);function _e(...t){let e=_P;for(const n of t)e=e.add(n);return e}const wP=new lt(Re);function bE(){return wP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function IE(t){return{integerValue:""+t}}function bP(t,e){return QD(e)?IE(e):EE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this._=void 0}}function EP(t,e,n){return t instanceof pc?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof fa?CE(t,e):t instanceof pa?SE(t,e):function(s,i){const r=TE(s,i),o=Fv(r)+Fv(s._t);return Sd(r)&&Sd(s._t)?IE(o):EE(s.serializer,o)}(t,e)}function IP(t,e,n){return t instanceof fa?CE(t,e):t instanceof pa?SE(t,e):n}function TE(t,e){return t instanceof gc?Sd(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class pc extends Au{}class fa extends Au{constructor(e){super(),this.elements=e}}function CE(t,e){const n=kE(e);for(const s of t.elements)n.some(i=>Bn(i,s))||n.push(s);return{arrayValue:{values:n}}}class pa extends Au{constructor(e){super(),this.elements=e}}function SE(t,e){let n=kE(e);for(const s of t.elements)n=n.filter(i=>!Bn(i,s));return{arrayValue:{values:n}}}class gc extends Au{constructor(e,n){super(),this.serializer=e,this._t=n}}function Fv(t){return st(t.integerValue||t.doubleValue)}function kE(t){return vp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TP(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof fa&&s instanceof fa||n instanceof pa&&s instanceof pa?Tr(n.elements,s.elements,Bn):n instanceof gc&&s instanceof gc?Bn(n._t,s._t):n instanceof pc&&s instanceof pc}(t.transform,e.transform)}class CP{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function AE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bp(t.key,Fn.none()):new $a(t.key,t.data,Fn.none());{const n=t.data,s=on.empty();let i=new lt(xt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Bi(t.key,s,new wn(i.toArray()),Fn.none())}}function SP(t,e,n){t instanceof $a?function(s,i,r){const o=s.value.clone(),a=Uv(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Bi?function(s,i,r){if(!Dl(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Uv(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(RE(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,s){return t instanceof $a?function(i,r,o,a){if(!Dl(i.precondition,r))return o;const l=i.value.clone(),c=Vv(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Bi?function(i,r,o,a){if(!Dl(i.precondition,r))return o;const l=Vv(i.fieldTransforms,a,r),c=r.data;return c.setAll(RE(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Dl(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function kP(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=TE(s.transform,i||null);r!=null&&(n===null&&(n=on.empty()),n.set(s.field,r))}return n||null}function $v(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Tr(n,s,(i,r)=>TP(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends Ru{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bi extends Ru{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function RE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Uv(t,e,n){const s=new Map;je(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,IP(o,a,n[i]))}return s}function Vv(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,EP(r,o,e))}return s}class bp extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AP extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&SP(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Po(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Po(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=wE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=AE(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(n,s)=>$v(n,s))&&Tr(this.baseMutations,e.baseMutations,(n,s)=>$v(n,s))}}class Ep{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){je(e.mutations.length===s.length);let i=yP;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ep(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,Ee;function xP(t){switch(t){default:return re();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function NE(t){if(t===void 0)return rs("GRPC error has no .code"),P.UNKNOWN;switch(t){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return re()}}(Ee=tt||(tt={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vl}static getOrCreateInstance(){return vl===null&&(vl=new Ip),vl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let vl=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Nu(le.min(),i,bE(),as(),_e())}}class Ua{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ua(s,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class OE{constructor(e,n){this.targetId=e,this.Et=n}}class xE{constructor(e,n,s=Ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Bv{constructor(){this.At=0,this.Rt=Hv(),this.vt=Ft.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=_e(),n=_e(),s=_e();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:re()}}),new Ua(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Hv()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class DP{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=as(),this.qt=jv(),this.Ut=new lt(Re)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Ad(o))if(i===0){const a=new te(o.path);this.Qt(s,a,kt.newNoDocument(a,le.min()))}else je(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Ip.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ad(a.target)){const l=new te(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,kt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=_e();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Nu(e,n,this.Ut,this.Lt,s);return this.Lt=as(),this.qt=jv(),this.Ut=new lt(Re),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Bv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new lt(Re),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Bv),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function jv(){return new ct(te.comparator)}function Hv(){return new ct(te.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),MP=(()=>({and:"AND",or:"OR"}))();class FP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $P(t,e){return mc(t,e.toTimestamp())}function $n(t){return je(!!t),le.fromTimestamp(function(e){const n=$s(e);return new at(n.seconds,n.nanos)}(t))}function Tp(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function PE(t){const e=qe.fromString(t);return je($E(e)),e}function Od(t,e){return Tp(t.databaseId,e.path)}function wh(t,e){const n=PE(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(LE(n))}function xd(t,e){return Tp(t.databaseId,e)}function UP(t){const e=PE(t);return e.length===4?qe.emptyPath():LE(e)}function Dd(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LE(t){return je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wv(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function VP(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(je(c===void 0||typeof c=="string"),Ft.fromBase64String(c||"")):(je(c===void 0||c instanceof Uint8Array),Ft.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?P.UNKNOWN:NE(l.code);return new ne(c,l.message||"")}(o);n=new xE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=wh(t,s.document.name),r=$n(s.document.updateTime),o=s.document.createTime?$n(s.document.createTime):le.min(),a=new on({mapValue:{fields:s.document.fields}}),l=kt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Pl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=wh(t,s.document),r=s.readTime?$n(s.readTime):le.min(),o=kt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Pl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=wh(t,s.document),r=s.removedTargetIds||[];n=new Pl([],r,i,null)}else{if(!("filter"in e))return re();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new OP(i),o=s.targetId;n=new OE(o,r)}}return n}function BP(t,e){let n;if(e instanceof $a)n={update:Wv(t,e.key,e.value)};else if(e instanceof bp)n={delete:Od(t,e.key)};else if(e instanceof Bi)n={update:Wv(t,e.key,e.data),updateMask:QP(e.fieldMask)};else{if(!(e instanceof AP))return re();n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof pc)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fa)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pa)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gc)return{fieldPath:r.field.canonicalString(),increment:o._t};throw re()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$P(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function jP(t,e){return t&&t.length>0?(je(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?$n(s.updateTime):$n(i);return r.isEqual(le.min())&&(r=$n(i)),new CP(r,s.transformResults||[])}(n,e))):[]}function HP(t,e){return{documents:[xd(t,e.path)]}}function WP(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=xd(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xd(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return FE(jn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Zi(u.field),direction:KP(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||Tu(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function zP(t){let e=UP(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){je(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=ME(u);return h instanceof jn&&dE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new xo(er(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Tu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new fc(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new fc(d,h)}(n.endAt)),hP(e,i,o,r,a,"F",l,c)}function qP(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return re()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ME(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=er(e.unaryFilter.field);return ot.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=er(e.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=er(e.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=er(e.unaryFilter.field);return ot.create(r,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(e){return ot.create(er(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jn.create(e.compositeFilter.filters.map(n=>ME(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(e.compositeFilter.op))}(t):re()}function KP(t){return PP[t]}function GP(t){return LP[t]}function YP(t){return MP[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function er(t){return xt.fromServerFormat(t.fieldPath)}function FE(t){return t instanceof ot?function(e){if(e.op==="=="){if(xv(e.value))return{unaryFilter:{field:Zi(e.field),op:"IS_NAN"}};if(Ov(e.value))return{unaryFilter:{field:Zi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xv(e.value))return{unaryFilter:{field:Zi(e.field),op:"IS_NOT_NAN"}};if(Ov(e.value))return{unaryFilter:{field:Zi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(e.field),op:GP(e.op),value:e.value}}}(t):t instanceof jn?function(e){const n=e.getFilters().map(s=>FE(s));return n.length===1?n[0]:{compositeFilter:{op:YP(e.op),filters:n}}}(t):re()}function QP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $E(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,s,i,r=le.min(),o=le.min(),a=Ft.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.se=e}}function JP(t){const e=zP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.He=new eL}addToCollectionParentIndex(e,n){return this.He.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Fs.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Fs.min())}updateCollectionGroup(e,n,s){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class eL{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new lt(qe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new lt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ar(0)}static bn(){return new Ar(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?L.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Po(s.mutation,i,wn.empty(),at.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=_e()){const i=ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=wo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ui();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,_e()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=as();const o=Do(),a=Do();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Bi)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Po(u.mutation,c,u.mutation.getFieldMask(),at.now())):o.set(c.key,wn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new nL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Do();let i=new ct((o,a)=>o-a),r=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||wn.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||_e()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=wE();u.forEach(d=>{if(!r.has(d)){const f=AE(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return L.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):L.resolve(ui());let a=-1,l=r;return o.next(c=>L.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,_e())).next(u=>({batchId:a,changes:_E(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(s=>{let i=wo();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=wo();return this.indexManager.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const l=function(c,u){return new Cu(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,kt.newInvalidDocument(c)))});let o=wo();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Po(c.mutation,l,wn.empty(),at.now()),ku(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:$n(s.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:JP(s.bundledQuery),readTime:$n(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this.overlays=new ct(te.comparator),this.ts=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ui();return L.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),L.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),L.resolve()}getOverlaysForCollection(e,n,s){const i=ui(),r=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ui(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ui(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return L.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new NP(n,s));let r=this.ts.get(n);r===void 0&&(r=_e(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.es=new lt(dt.ns),this.ss=new lt(dt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new dt(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new dt(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new te(new qe([])),s=new dt(n,e),i=new dt(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new te(new qe([])),s=new dt(n,e),i=new dt(n,e+1);let r=_e();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new dt(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class dt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return te.comparator(e.key,n.key)||Re(e.ds,n.ds)}static rs(e,n){return Re(e.ds,n.ds)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new lt(dt.ns)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RP(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new dt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new lt(Re);return n.forEach(i=>{const r=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),L.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;te.isDocumentKey(r)||(r=r.child(""));const o=new dt(new te(r),0);let a=new lt(Re);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),L.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){je(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return L.forEach(n.mutations,i=>{const r=new dt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new dt(n,0),i=this._s.firstAfterOrEqual(s);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e){this.Ts=e,this.docs=new ct(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return L.resolve(s?s.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let s=as();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():kt.newInvalidDocument(i))}),L.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=as();const o=n.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||KD(qD(u),s)<=0||(i.has(u.key)||ku(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,n,s,i){re()}Es(e,n){return L.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new lL(this)}getSize(e){return L.resolve(this.size)}}class lL extends tL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),L.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.persistence=e,this.As=new Qr(n=>yp(n),_p),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Cp,this.targetCount=0,this.bs=Ar.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),L.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ar(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Sn(n),L.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(r).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return L.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),L.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),L.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return L.resolve(s)}containsKey(e,n){return L.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new mp(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new cL(this),this.indexManager=new ZP,this.remoteDocumentCache=function(s){return new aL(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new XP(n),this.xs=new iL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new oL(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){Y("MemoryPersistence","Starting transaction:",e);const i=new hL(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return L.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class hL extends YD{constructor(e){super(),this.currentSequenceNumber=e}}class Sp{constructor(e){this.persistence=e,this.$s=new Cp,this.Ms=null}static Fs(e){return new Sp(e)}get Bs(){if(this.Ms)return this.Ms;throw re()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),L.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),L.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Bs,s=>{const i=te.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,le.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return L.or([()=>L.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=_e(),i=_e();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new kp(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Mv(n))return L.resolve(null);let s=os(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rd(n,null,"F"),s=os(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=_e(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,Rd(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,s,i){return Mv(n)||i.isEqual(le.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(kv()<=ke.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nd(n)),this.Fi(e,o,n,zD(i,-1)))})}$i(e,n){let s=new lt(vE(e));return n.forEach((i,r)=>{ku(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return kv()<=ke.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Nd(n)),this.xi.getDocumentsMatchingQuery(e,n,Fs.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new ct(Re),this.qi=new Qr(r=>yp(r),_p),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function pL(t,e,n,s){return new fL(t,e,n,s)}async function UE(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=_e();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function gL(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=L.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);je(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=_e();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function VE(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function mL(t,e){const n=ue(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ft.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&a.push(n.Ds.updateTargetData(r,f))});let l=as(),c=_e();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(vL(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(le.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=i,r))}function vL(t,e,n){let s=_e(),i=_e();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=as();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function yL(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _L(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,L.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new yi(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Pd(t,e,n){const s=ue(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fa(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function zv(t,e,n){const s=ue(t);let i=le.min(),r=_e();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ue(a),h=u.qi.get(c);return h!==void 0?L.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(s,o,os(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?r:_e())).next(a=>(wL(s,gP(e),a),{documents:a,Wi:r})))}function wL(t,e,n){let s=t.Ui.get(e)||le.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class qv{constructor(){this.activeTargetIds=bE()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bL{constructor(){this.Br=new qv,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new qv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl=null;function bh(){return yl===null?yl=268435456+Math.round(2147483648*Math.random()):yl++,"0x"+yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class CL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=bh(),a=this.ao(e,n);Y("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>(Y("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw hc("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=IL[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=bh();return new Promise((o,a)=>{const l=new LD;l.setWithCredentials(!0),l.listenOnce(xD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _h.NO_ERROR:const u=l.getResponseJson();Y(Ct,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case _h.TIMEOUT:Y(Ct,`RPC '${e}' ${r} timed out`),a(new ne(P.DEADLINE_EXCEEDED,"Request time out"));break;case _h.HTTP_ERROR:const h=l.getStatus();if(Y(Ct,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(y)>=0?y:P.UNKNOWN}(f.status);a(new ne(p,f.message))}else a(new ne(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ne(P.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y(Ct,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);Y(Ct,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=bh(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ND(),a=OD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new PD({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");Y(Ct,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new TL({Wr:m=>{d?Y(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(Y(Ct,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),Y(Ct,`RPC '${e}' stream ${i} sending:`,m),u.send(m))},Hr:()=>u.close()}),p=(m,y,w)=>{m.listen(y,E=>{try{w(E)}catch(C){setTimeout(()=>{throw C},0)}})};return p(u,pl.EventType.OPEN,()=>{d||Y(Ct,`RPC '${e}' stream ${i} transport opened.`)}),p(u,pl.EventType.CLOSE,()=>{d||(d=!0,Y(Ct,`RPC '${e}' stream ${i} transport closed`),f.so())}),p(u,pl.EventType.ERROR,m=>{d||(d=!0,hc(Ct,`RPC '${e}' stream ${i} transport errored:`,m),f.so(new ne(P.UNAVAILABLE,"The operation could not be completed")))}),p(u,pl.EventType.MESSAGE,m=>{var y;if(!d){const w=m.data[0];je(!!w);const E=w,C=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(C){Y(Ct,`RPC '${e}' stream ${i} received error:`,C);const D=C.status;let N=function(O){const _=tt[O];if(_!==void 0)return NE(_)}(D),A=C.message;N===void 0&&(N=P.INTERNAL,A="Unknown error status: "+D+" with message "+C.message),d=!0,f.so(new ne(N,A)),u.close()}else Y(Ct,`RPC '${e}' stream ${i} received:`,w),f.io(w)}}),p(a,DD.STAT_EVENT,m=>{m.stat===Cv.PROXY?Y(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===Cv.NOPROXY&&Y(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function Eh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){return new FP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new BE(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(rs(n.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new ne(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SL extends jE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=VP(this.serializer,e),s=function(i){if(!("targetChange"in i))return le.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?le.min():r.readTime?$n(r.readTime):le.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Dd(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Ad(a)?{documents:HP(i,a)}:{query:WP(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=DE(i,r.resumeToken):r.snapshotVersion.compareTo(le.min())>0&&(o.readTime=mc(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=qP(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Dd(this.serializer),n.removeTarget=e,this.Fo(n)}}class kL extends jE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=jP(e.writeResults,e.commitTime),s=$n(e.commitTime);return this.listener.Zo(s,n)}return je(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Dd(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>BP(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new ne(P.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(P.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ne(P.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class RL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(rs(n),this.ru=!1):Y("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{ji(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.du.add(4),await Va(l),l.mu.set("Unknown"),l.du.delete(4),await xu(l)}(this))})}),this.mu=new RL(s,i)}}async function xu(t){if(ji(t))for(const e of t.wu)await e(!0)}async function Va(t){for(const e of t.wu)await e(!1)}function HE(t,e){const n=ue(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Np(n)?Rp(n):Xr(n).No()&&Ap(n,e))}function WE(t,e){const n=ue(t),s=Xr(n);n.fu.delete(e),s.No()&&zE(n,e),n.fu.size===0&&(s.No()?s.$o():ji(n)&&n.mu.set("Unknown"))}function Ap(t,e){t.gu.Ot(e.targetId),Xr(t).jo(e)}function zE(t,e){t.gu.Ot(e),Xr(t).Wo(e)}function Rp(t){t.gu=new DP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Xr(t).start(),t.mu.ou()}function Np(t){return ji(t)&&!Xr(t).xo()&&t.fu.size>0}function ji(t){return ue(t).du.size===0}function qE(t){t.gu=void 0}async function OL(t){t.fu.forEach((e,n)=>{Ap(t,e)})}async function xL(t,e){qE(t),Np(t)?(t.mu.au(e),Rp(t)):t.mu.set("Unknown")}async function DL(t,e,n){if(t.mu.set("Online"),e instanceof xE&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vc(t,s)}else if(e instanceof Pl?t.gu.Kt(e):e instanceof OE?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(le.min()))try{const s=await VE(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Ft.EMPTY_BYTE_STRING,l.snapshotVersion)),zE(i,a);const c=new yi(l.target,a,1,l.sequenceNumber);Ap(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){Y("RemoteStore","Failed to raise snapshot:",s),await vc(t,s)}}async function vc(t,e,n){if(!Fa(e))throw e;t.du.add(1),await Va(t),t.mu.set("Offline"),n||(n=()=>VE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await xu(t)})}function KE(t,e){return e().catch(n=>vc(t,n,e))}async function Du(t){const e=ue(t),n=Us(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;PL(e);)try{const i=await yL(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,LL(e,i)}catch(i){await vc(e,i)}GE(e)&&YE(e)}function PL(t){return ji(t)&&t.lu.length<10}function LL(t,e){t.lu.push(e);const n=Us(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function GE(t){return ji(t)&&!Us(t).xo()&&t.lu.length>0}function YE(t){Us(t).start()}async function ML(t){Us(t).tu()}async function FL(t){const e=Us(t);for(const n of t.lu)e.Yo(n.mutations)}async function $L(t,e,n){const s=t.lu.shift(),i=Ep.from(s,e,n);await KE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Du(t)}async function UL(t,e){e&&Us(t).Jo&&await async function(n,s){if(i=s.code,xP(i)&&i!==P.ABORTED){const r=n.lu.shift();Us(n).Oo(),await KE(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Du(n)}var i}(t,e),GE(t)&&YE(t)}async function Gv(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const s=ji(n);n.du.add(3),await Va(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await xu(n)}async function VL(t,e){const n=ue(t);e?(n.du.delete(2),await xu(n)):e||(n.du.add(2),await Va(n),n.mu.set("Unknown"))}function Xr(t){return t.yu||(t.yu=function(e,n,s){const i=ue(e);return i.nu(),new SL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:OL.bind(null,t),Zr:xL.bind(null,t),zo:DL.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Np(t)?Rp(t):t.mu.set("Unknown")):(await t.yu.stop(),qE(t))})),t.yu}function Us(t){return t.pu||(t.pu=function(e,n,s){const i=ue(e);return i.nu(),new kL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:ML.bind(null,t),Zr:UL.bind(null,t),Xo:FL.bind(null,t),Zo:$L.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Du(t)):(await t.pu.stop(),t.lu.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Op(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(t,e){if(rs("AsyncQueue",`${e}: ${t}`),Fa(t))return new ne(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||te.comparator(n.key,s.key):(n,s)=>te.comparator(n.key,s.key),this.keyedMap=wo(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new hr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.Iu=new ct(te.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):re():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rr(e,n,hr.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(){this.Eu=void 0,this.listeners=[]}}class jL{constructor(){this.queries=new Qr(e=>mE(e),Su),this.onlineState="Unknown",this.Au=new Set}}async function HL(t,e){const n=ue(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new BL),i)try{r.Eu=await n.onListen(s)}catch(o){const a=xp(o,`Initialization of query '${Nd(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Dp(n)}async function WL(t,e){const n=ue(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function zL(t,e){const n=ue(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Dp(n)}function qL(t,e,n){const s=ue(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Dp(t){t.Au.forEach(e=>{e.next()})}class KL{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Rr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.key=e}}class XE{constructor(e){this.key=e}}class GL{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=_e(),this.mutatedKeys=_e(),this.Ku=vE(e),this.Gu=new hr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Yv,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=ku(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),y=!0):this.Wu(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Rr(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Yv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=_e(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new XE(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new QE(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=_e();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Rr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class YL{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class QL{constructor(e){this.key=e,this.ec=!1}}class XL{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Qr(a=>mE(a),Su),this.ic=new Map,this.rc=new Set,this.oc=new ct(te.comparator),this.uc=new Map,this.cc=new Cp,this.ac={},this.hc=new Map,this.lc=Ar.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function JL(t,e){const n=lM(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await _L(n.localStore,os(e));n.isPrimaryClient&&HE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await ZL(n,e,s,a==="current",o.resumeToken)}return i}async function ZL(t,e,n,s,i){t.dc=(h,d,f)=>async function(p,m,y,w){let E=m.view.zu(y);E.Mi&&(E=await zv(p.localStore,m.query,!1).then(({documents:N})=>m.view.zu(N,E)));const C=w&&w.targetChanges.get(m.targetId),D=m.view.applyChanges(E,p.isPrimaryClient,C);return Xv(p,m.targetId,D.Yu),D.snapshot}(t,h,d,f);const r=await zv(t.localStore,e,!0),o=new GL(e,r.Wi),a=o.zu(r.documents),l=Ua.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Xv(t,n,c.Yu);const u=new YL(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function eM(t,e){const n=ue(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Su(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pd(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),WE(n.remoteStore,s.targetId),Ld(n,s.targetId)}).catch(Ma)):(Ld(n,s.targetId),await Pd(n.localStore,s.targetId,!0))}async function tM(t,e,n){const s=cM(t);try{const i=await function(r,o){const a=ue(r),l=at.now(),c=o.reduce((d,f)=>d.add(f.key),_e());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=as(),p=_e();return a.Ki.getEntries(d,c).next(m=>{f=m,f.forEach((y,w)=>{w.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const y=[];for(const w of o){const E=kP(w,u.get(w.key).overlayedDocument);E!=null&&y.push(new Bi(w.key,E,cE(E.value.mapValue),Fn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(m=>{h=m;const y=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,m.batchId,y)})}).then(()=>({batchId:h.batchId,changes:_E(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new ct(Re)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,n),await Ba(s,i.changes),await Du(s.remoteStore)}catch(i){const r=xp(i,"Failed to persist write");n.reject(r)}}async function JE(t,e){const n=ue(t);try{const s=await mL(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(je(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?je(o.ec):i.removedDocuments.size>0&&(je(o.ec),o.ec=!1))}),await Ba(n,s,e)}catch(s){await Ma(s)}}function Qv(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ue(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Dp(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nM(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new ct(te.comparator);o=o.insert(r,kt.newNoDocument(r,le.min()));const a=_e().add(r),l=new Nu(le.min(),new Map,new lt(Re),o,a);await JE(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),Pp(s)}else await Pd(s.localStore,e,!1).then(()=>Ld(s,e,n)).catch(Ma)}async function sM(t,e){const n=ue(t),s=e.batch.batchId;try{const i=await gL(n.localStore,e);eI(n,s,null),ZE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ba(n,i)}catch(i){await Ma(i)}}async function iM(t,e,n){const s=ue(t);try{const i=await function(r,o){const a=ue(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(je(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);eI(s,e,n),ZE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ba(s,i)}catch(i){await Ma(i)}}function ZE(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function eI(t,e,n){const s=ue(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||tI(t,s)})}function tI(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(WE(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Pp(t))}function Xv(t,e,n){for(const s of n)s instanceof QE?(t.cc.addReference(s.key,e),rM(t,s)):s instanceof XE?(Y("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||tI(t,s.key)):re()}function rM(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(Y("SyncEngine","New document in limbo: "+n),t.rc.add(s),Pp(t))}function Pp(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new te(qe.fromString(e)),s=t.lc.next();t.uc.set(s,new QL(n)),t.oc=t.oc.insert(n,s),HE(t.remoteStore,new yi(os(wp(n.path)),s,2,mp.ct))}}async function Ba(t,e,n){const s=ue(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=kp.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=ue(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(l,h=>L.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>L.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Fa(u))throw u;Y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,p)}}}(s.localStore,r))}async function oM(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const s=await UE(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new ne(P.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ba(n,s.Qi)}}function aM(t,e){const n=ue(t),s=n.uc.get(e);if(s&&s.ec)return _e().add(s.key);{let i=_e();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function lM(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nM.bind(null,e),e.nc.zo=zL.bind(null,e.eventManager),e.nc.wc=qL.bind(null,e.eventManager),e}function cM(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,e),e}class Jv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ou(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pL(this.persistence,new dL,e.initialUser,this.serializer)}createPersistence(e){return new uL(Sp.Fs,this.serializer)}createSharedClientState(e){return new bL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oM.bind(null,this.syncEngine),await VL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jL}createDatastore(e){const n=Ou(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new CL(i));var i;return function(r,o,a,l){return new AL(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Qv(this.syncEngine,a,0),o=Kv.D()?new Kv:new EL,new NL(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new XL(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);Y("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Va(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):rs("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=rE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ih(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await UE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pM(t);Y("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Gv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Gv(e.remoteStore,r)),t._onlineComponents=e}function fM(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function pM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fM(n))throw n;hc("Error using user provided cache. Falling back to memory cache: "+n),await Ih(t,new Jv)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Ih(t,new Jv);return t._offlineComponents}async function nI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Zv(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Zv(t,new uM))),t._onlineComponents}function gM(t){return nI(t).then(e=>e.syncEngine)}async function ey(t){const e=await nI(t),n=e.eventManager;return n.onListen=JL.bind(null,e.syncEngine),n.onUnlisten=eM.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e,n){if(!n)throw new ne(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mM(t,e,n,s){if(e===!0&&s===!0)throw new ne(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!te.isDocumentKey(t))throw new ne(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sy(t){if(te.isDocumentKey(t))throw new ne(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function _i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lp(t);throw new ne(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new MD;switch(n.type){case"firstParty":return new VD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ty.get(e);n&&(Y("ComponentProvider","Removing Datastore"),ty.delete(e),n.terminate())}(this),Promise.resolve()}}function vM(t,e,n,s={}){var i;const r=(t=_i(t,Pu))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&hc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=St.MOCK_USER;else{o=uO(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ne(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new St(l)}t._authCredentials=new FD(new iE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class Lu{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lu(this.firestore,e,this._query)}}class xs extends Lu{constructor(e,n,s){super(e,n,wp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new te(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function yM(t,e,...n){if(t=mt(t),sI("collection","path",e),t instanceof Pu){const s=qe.fromString(e,...n);return sy(s),new xs(t,null,s)}{if(!(t instanceof Jt||t instanceof xs))throw new ne(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return sy(s),new xs(t.firestore,null,s)}}function mW(t,e,...n){if(t=mt(t),arguments.length===1&&(e=rE.A()),sI("doc","path",e),t instanceof Pu){const s=qe.fromString(e,...n);return ny(s),new Jt(t,null,new te(s))}{if(!(t instanceof Jt||t instanceof xs))throw new ne(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return ny(s),new Jt(t.firestore,t instanceof xs?t.converter:null,new te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new BE(this,"async_queue_retry"),this.qc=()=>{const n=Eh();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Eh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new vi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Fa(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw rs("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Op.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&re()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ry(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ga extends Pu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new _M,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oI(this),this._firestoreClient.terminate()}}function iI(t,e){const n=typeof t=="object"?t:lu(),s=typeof t=="string"?t:e||"(default)",i=$i(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=lO("firestore");r&&vM(i,...r)}return i}function rI(t){return t._firestoreClient||oI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oI(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new ZD(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new dM(t._authCredentials,t._appCheckCredentials,t._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nr(Ft.fromBase64String(e))}catch(n){throw new ne(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nr(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=/^__.*__$/;class bM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new $a(e,this.data,n,this.fieldTransforms)}}function lI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class $p{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new $p(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return yc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(lI(this.Yc)&&wM.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class EM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ou(e)}ua(e,n,s,i=!1){return new $p({Yc:e,methodName:n,oa:s,path:xt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function IM(t){const e=t._freezeSettings(),n=Ou(t._databaseId);return new EM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TM(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);dI("Data must be an object, but it was:",o,s);const a=uI(s,o);let l,c;if(r.merge)l=new wn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=CM(e,h,n);if(!o.contains(d))throw new ne(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kM(u,d)||u.push(d)}l=new wn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new bM(new on(a),l,c)}function cI(t,e){if(hI(t=mt(t)))return dI("Unsupported field value:",e,t),uI(t,e);if(t instanceof aI)return function(n,s){if(!lI(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=cI(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bP(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=at.fromDate(n);return{timestampValue:mc(s.serializer,i)}}if(n instanceof at){const i=new at(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mc(s.serializer,i)}}if(n instanceof Fp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Nr)return{bytesValue:DE(s.serializer,n._byteString)};if(n instanceof Jt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Tp(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Lp(n)}`)}(t,e)}function uI(t,e){const n={};return oE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(s,i)=>{const r=cI(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function hI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Fp||t instanceof Nr||t instanceof Jt||t instanceof aI)}function dI(t,e,n){if(!hI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Lp(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function CM(t,e,n){if((e=mt(e))instanceof Mp)return e._internalPath;if(typeof e=="string")return fI(t,e);throw yc("Field path arguments must be of type string or ",t,!1,void 0,n)}const SM=new RegExp("[~\\*/\\[\\]]");function fI(t,e,n){if(e.search(SM)>=0)throw yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mp(...e.split("."))._internalPath}catch{throw yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ne(P.INVALID_ARGUMENT,a+t+l)}function kM(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AM extends pI{data(){return super.data()}}function gI(t,e){return typeof e=="string"?fI(t,e):e instanceof Mp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NM{convertValue(e,n="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){const s={};return Yr(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Fp(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=lE(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const n=$s(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=qe.fromString(e);je($E(s));const i=new ha(s.get(1),s.get(3)),r=new te(s.popFirst(5));return i.isEqual(n)||rs(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mI extends pI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ll extends mI{data(e={}){return super.data(e)}}class xM{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bo(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ll(this._firestore,this._userDataWriter,s.key,s,new bo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ll(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ll(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:DM(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class vI extends NM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function vW(t,e,n){t=_i(t,Jt);const s=_i(t.firestore,ga),i=OM(t.converter,e,n);return yI(s,[TM(IM(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Fn.none())])}function yW(t){return yI(_i(t.firestore,ga),[new bp(t._key,Fn.none())])}function _W(t,...e){var n,s,i;t=mt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ry(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ry(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Jt)c=_i(t.firestore,ga),u=wp(t._key.path),l={next:h=>{e[o]&&e[o](PM(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_i(t,Lu);c=_i(h.firestore,ga),u=h._query;const d=new vI(c);l={next:f=>{e[o]&&e[o](new xM(c,d,h,f))},error:e[o+1],complete:e[o+2]},RM(t._query)}return function(h,d,f,p){const m=new hM(p),y=new KL(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>HL(await ey(h),y)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>WL(await ey(h),y))}}(rI(c),u,a,l)}function yI(t,e){return function(n,s){const i=new vi;return n.asyncQueue.enqueueAndForget(async()=>tM(await gM(n),s,i)),i.promise}(rI(t),e)}function PM(t,e,n){const s=n.docs.get(e._key),i=new vI(t);return new mI(t,i,e._key,s,new bo(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Gr=n})(Ui),Kt(new Vt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ga(new $D(n.getProvider("auth-internal")),new jD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ne(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),bt(Sv,"3.10.0",t),bt(Sv,"3.10.0","esm2017")})();const _I="@firebase/installations",Up="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=1e4,bI=`w:${Up}`,EI="FIS_v2",LM="https://firebaseinstallations.googleapis.com/v1",MM=60*60*1e3,FM="installations",$M="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Si=new qs(FM,$M,UM);function II(t){return t instanceof pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI({projectId:t}){return`${LM}/projects/${t}/installations`}function CI(t){return{token:t.token,requestStatus:2,expiresIn:BM(t.expiresIn),creationTime:Date.now()}}async function SI(t,e){const s=(await e.json()).error;return Si.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function kI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function VM(t,{refreshToken:e}){const n=kI(t);return n.append("Authorization",jM(e)),n}async function AI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function BM(t){return Number(t.replace("s","000"))}function jM(t){return`${EI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=TI(t),i=kI(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:EI,appId:t.appId,sdkVersion:bI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await AI(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:CI(c.authToken)}}else throw await SI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=/^[cdef][\w-]{21}$/,Md="";function qM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=KM(t);return zM.test(n)?n:Md}catch{return Md}}function KM(t){return WM(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new Map;function OI(t,e){const n=Mu(t);xI(n,e),GM(n,e)}function xI(t,e){const n=NI.get(t);if(!!n)for(const s of n)s(e)}function GM(t,e){const n=YM();n&&n.postMessage({key:t,fid:e}),QM()}let hi=null;function YM(){return!hi&&"BroadcastChannel"in self&&(hi=new BroadcastChannel("[Firebase] FID Change"),hi.onmessage=t=>{xI(t.data.key,t.data.fid)}),hi}function QM(){NI.size===0&&hi&&(hi.close(),hi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM="firebase-installations-database",JM=1,ki="firebase-installations-store";let Th=null;function Vp(){return Th||(Th=Jb(XM,JM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}})),Th}async function _c(t,e){const n=Mu(t),i=(await Vp()).transaction(ki,"readwrite"),r=i.objectStore(ki),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&OI(t,e.fid),e}async function DI(t){const e=Mu(t),s=(await Vp()).transaction(ki,"readwrite");await s.objectStore(ki).delete(e),await s.done}async function Fu(t,e){const n=Mu(t),i=(await Vp()).transaction(ki,"readwrite"),r=i.objectStore(ki),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&OI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t){let e;const n=await Fu(t.appConfig,s=>{const i=ZM(s),r=eF(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Md?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ZM(t){const e=t||{fid:qM(),registrationStatus:0};return PI(e)}function eF(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Si.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=tF(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nF(t)}:{installationEntry:e}}async function tF(t,e){try{const n=await HM(t,e);return _c(t.appConfig,n)}catch(n){throw II(n)&&n.customData.serverCode===409?await DI(t.appConfig):await _c(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nF(t){let e=await oy(t.appConfig);for(;e.registrationStatus===1;)await RI(100),e=await oy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Bp(t);return s||n}return e}function oy(t){return Fu(t,e=>{if(!e)throw Si.create("installation-not-found");return PI(e)})}function PI(t){return sF(t)?{fid:t.fid,registrationStatus:0}:t}function sF(t){return t.registrationStatus===1&&t.registrationTime+wI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iF({appConfig:t,heartbeatServiceProvider:e},n){const s=rF(t,n),i=VM(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:bI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await AI(()=>fetch(s,a));if(l.ok){const c=await l.json();return CI(c)}else throw await SI("Generate Auth Token",l)}function rF(t,{fid:e}){return`${TI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t,e=!1){let n;const s=await Fu(t.appConfig,r=>{if(!LI(r))throw Si.create("not-registered");const o=r.authToken;if(!e&&lF(o))return r;if(o.requestStatus===1)return n=oF(t,e),r;{if(!navigator.onLine)throw Si.create("app-offline");const a=uF(r);return n=aF(t,a),a}});return n?await n:s.authToken}async function oF(t,e){let n=await ay(t.appConfig);for(;n.authToken.requestStatus===1;)await RI(100),n=await ay(t.appConfig);const s=n.authToken;return s.requestStatus===0?jp(t,e):s}function ay(t){return Fu(t,e=>{if(!LI(e))throw Si.create("not-registered");const n=e.authToken;return hF(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aF(t,e){try{const n=await iF(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await _c(t.appConfig,s),n}catch(n){if(II(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await DI(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _c(t.appConfig,s)}throw n}}function LI(t){return t!==void 0&&t.registrationStatus===2}function lF(t){return t.requestStatus===2&&!cF(t)}function cF(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+MM}function uF(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hF(t){return t.requestStatus===1&&t.requestTime+wI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dF(t){const e=t,{installationEntry:n,registrationPromise:s}=await Bp(e);return s?s.catch(console.error):jp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fF(t,e=!1){const n=t;return await pF(n),(await jp(n,e)).token}async function pF(t){const{registrationPromise:e}=await Bp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gF(t){if(!t||!t.options)throw Ch("App Configuration");if(!t.name)throw Ch("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ch(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ch(t){return Si.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="installations",mF="installations-internal",vF=t=>{const e=t.getProvider("app").getImmediate(),n=gF(e),s=$i(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},yF=t=>{const e=t.getProvider("app").getImmediate(),n=$i(e,MI).getImmediate();return{getId:()=>dF(n),getToken:i=>fF(n,i)}};function _F(){Kt(new Vt(MI,vF,"PUBLIC")),Kt(new Vt(mF,yF,"PRIVATE"))}_F();bt(_I,Up);bt(_I,Up,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="analytics",wF="firebase_id",bF="origin",EF=60*1e3,IF="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new zr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TF={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Zt=new qs("analytics","Analytics",TF);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t){if(!t.startsWith(Hp)){const e=Zt.create("invalid-gtag-resource",{gtagURL:t});return zt.warn(e.message),""}return t}function FI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SF(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kF(t,e){const n=SF("firebase-js-sdk-policy",{createScriptURL:CF}),s=document.createElement("script"),i=`${Hp}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function AF(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function RF(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await FI(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){zt.error(a)}t("config",i,r)}async function NF(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await FI(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){zt.error(r)}}function OF(t,e,n,s){async function i(r,o,a){try{r==="event"?await NF(t,e,n,o,a):r==="config"?await RF(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){zt.error(l)}}return i}function xF(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=OF(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function DF(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Hp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF=30,LF=1e3;class MF{constructor(e={},n=LF){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $I=new MF;function FF(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $F(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:FF(s)},r=IF.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function UF(t,e=$I,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Zt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Zt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jF;return setTimeout(async()=>{a.abort()},n!==void 0?n:EF),UI({appId:s,apiKey:i,measurementId:r},o,a,e)}async function UI(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=$I){var r;const{appId:o,measurementId:a}=t;try{await VF(s,e)}catch(l){if(a)return zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await $F(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!BF(c)){if(i.deleteThrottleMetadata(o),a)return zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?rv(n,i.intervalMillis,PF):rv(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),zt.debug(`Calling attemptFetch again in ${u} millis`),UI(t,h,s,i)}}function VF(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BF(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jF{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HF(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WF(){if(qf())try{await Gb()}catch(t){return zt.warn(Zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zt.warn(Zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zF(t,e,n,s,i,r,o){var a;const l=UF(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>zt.error(f)),e.push(l);const c=WF().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([l,c]);DF(r)||kF(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[bF]="firebase",d.update=!0,h!=null&&(d[wF]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(e){this.app=e}_delete(){return delete Lo[this.app.options.appId],Promise.resolve()}}let Lo={},ly=[];const cy={};let Sh="dataLayer",KF="gtag",uy,VI,hy=!1;function GF(){const t=[];if(zb()&&t.push("This is a browser extension environment."),dO()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Zt.create("invalid-analytics-context",{errorInfo:e});zt.warn(n.message)}}function YF(t,e,n){GF();const s=t.options.appId;if(!s)throw Zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Zt.create("no-api-key");if(Lo[s]!=null)throw Zt.create("already-exists",{id:s});if(!hy){AF(Sh);const{wrappedGtag:r,gtagCore:o}=xF(Lo,ly,cy,Sh,KF);VI=r,uy=o,hy=!0}return Lo[s]=zF(t,ly,cy,e,uy,Sh,n),new qF(t)}function QF(t=lu()){t=mt(t);const e=$i(t,wc);return e.isInitialized()?e.getImmediate():XF(t)}function XF(t,e={}){const n=$i(t,wc);if(n.isInitialized()){const i=n.getImmediate();if(na(e,n.getOptions()))return i;throw Zt.create("already-initialized")}return n.initialize({options:e})}function JF(t,e,n,s){t=mt(t),HF(VI,Lo[t.app.options.appId],e,n,s).catch(i=>zt.error(i))}const dy="@firebase/analytics",fy="0.9.5";function ZF(){Kt(new Vt(wc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return YF(s,i,n)},"PUBLIC")),Kt(new Vt("analytics-internal",t,"PRIVATE")),bt(dy,fy),bt(dy,fy,"esm2017");function t(e){try{const n=e.getProvider(wc).getImmediate();return{logEvent:(s,i,r)=>JF(n,s,i,r)}}catch(n){throw Zt.create("interop-component-reg-failed",{reason:n})}}}ZF();const e$={apiKey:"AIzaSyDTIda0nsAIldkPNk6vRoL7IPse4L7NVMg",authDomain:"listify-v2.firebaseapp.com",projectId:"listify-v2",storageBucket:"listify-v2.appspot.com",messagingSenderId:"927463433227",appId:"1:927463433227:web:a0d94a59566a8b16d2930e",measurementId:"G-30WR1BN041"},Wp=Zb(e$);QF(Wp);const t$=iI(Wp),n$=yM(t$,"users");function zp(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function BI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s$=BI,jI=new qs("auth","Firebase",BI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new zr("@firebase/auth");function Ml(t,...e){py.logLevel<=ke.ERROR&&py.error(`Auth (${Ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw qp(t,...e)}function Un(t,...e){return qp(t,...e)}function HI(t,e,n){const s=Object.assign(Object.assign({},s$()),{[e]:n});return new qs("auth","Firebase",s).create(e,{appName:t.name})}function i$(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&hn(t,"argument-error"),HI(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qp(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jI.create(t,...e)}function se(t,e,...n){if(!t)throw qp(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function ls(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new Map;function Jn(t){ls(t instanceof Function,"Expected a class definition");let e=gy.get(t);return e?(ls(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gy.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(t,e){const n=$i(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(na(r,e!=null?e:{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function o$(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function a$(){return my()==="http:"||my()==="https:"}function my(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a$()||zb()||"connection"in navigator)?navigator.onLine:!0}function c$(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,ls(n>e,"Short delay should be less than long delay!"),this.isMobile=zf()||qb()}get(){return l$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e){ls(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h$=new ja(3e4,6e4);function Ha(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wa(t,e,n,s,i={}){return zI(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Wr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WI.fetch()(qI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function zI(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},u$),e);try{const i=new d$(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _l(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _l(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _l(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw HI(t,u,c);hn(t,u)}}catch(i){if(i instanceof pn)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function za(t,e,n,s,i={}){const r=await Wa(t,e,n,s,i);return"mfaPendingCredential"in r&&hn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function qI(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Kp(t.config,i):`${t.config.apiScheme}://${i}`}class d${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Un(this.auth,"network-request-failed")),h$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _l(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Un(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f$(t,e){return Wa(t,"POST","/v1/accounts:delete",e)}async function p$(t,e){return Wa(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g$(t,e=!1){const n=mt(t),s=await n.getIdToken(e),i=Gp(s);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Mo(kh(i.auth_time)),issuedAtTime:Mo(kh(i.iat)),expirationTime:Mo(kh(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function kh(t){return Number(t)*1e3}function Gp(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=ec(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function m$(t){const e=Gp(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&v$(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function v$({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ma(t,p$(n,{idToken:s}));se(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?b$(r.providerUserInfo):[],a=w$(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new KI(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function _$(t){const e=mt(t);await bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function w$(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function b$(t){return t.map(e=>{var{providerId:n}=e,s=zp(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E$(t,e){const n=await zI(t,{},async()=>{const s=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=qI(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WI.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):m$(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await E$(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new va;return s&&(se(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(se(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new va,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wi{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=zp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new KI(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return g$(this,e)}reload(){return _$(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ma(this,f$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:D,isAnonymous:N,providerData:A,stsTokenManager:O}=n;se(C&&O,e,"internal-error");const _=va.fromJSON(this.name,O);se(typeof C=="string",e,"internal-error"),gs(h,e.name),gs(d,e.name),se(typeof D=="boolean",e,"internal-error"),se(typeof N=="boolean",e,"internal-error"),gs(f,e.name),gs(p,e.name),gs(m,e.name),gs(y,e.name),gs(w,e.name),gs(E,e.name);const F=new wi({uid:C,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:N,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:_,createdAt:w,lastLoginAt:E});return A&&Array.isArray(A)&&(F.providerData=A.map($=>Object.assign({},$))),y&&(F._redirectEventId=y),F}static async _fromIdTokenResponse(e,n,s=!1){const i=new va;i.updateFromServerResponse(n);const r=new wi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await bc(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GI.type="NONE";const vy=GI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e,n){return`firebase:${t}:${e}:${n}`}class dr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Fl(this.userKey,i.apiKey,r),this.fullPersistenceKey=Fl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new dr(Jn(vy),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Jn(vy);const o=Fl(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=wi._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new dr(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new dr(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(YI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZI(e))return"Blackberry";if(eT(e))return"Webos";if(Yp(e))return"Safari";if((e.includes("chrome/")||QI(e))&&!e.includes("edge/"))return"Chrome";if(JI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function YI(t=Mt()){return/firefox\//i.test(t)}function Yp(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QI(t=Mt()){return/crios\//i.test(t)}function XI(t=Mt()){return/iemobile/i.test(t)}function JI(t=Mt()){return/android/i.test(t)}function ZI(t=Mt()){return/blackberry/i.test(t)}function eT(t=Mt()){return/webos/i.test(t)}function $u(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function I$(t=Mt()){var e;return $u(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T$(){return hO()&&document.documentMode===10}function tT(t=Mt()){return $u(t)||JI(t)||eT(t)||ZI(t)||/windows phone/i.test(t)||XI(t)}function C$(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e=[]){let n;switch(t){case"Browser":n=yy(Mt());break;case"Worker":n=`${yy(Mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k${constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _y(this),this.idTokenSubscription=new _y(this),this.beforeStateQueue=new S$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jI,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await dr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Jr(t){return mt(t)}class _y{constructor(e){this.auth=e,this.observer=null,this.addObserver=_O(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function A$(t,e,n){const s=Jr(t);se(s._canInitEmulator,s,"emulator-config-failed"),se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=sT(e),{host:o,port:a}=R$(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||N$()}function sT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R$(t){const e=sT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:wy(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:wy(o)}}}function wy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function O$(t,e){return Wa(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x$(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",Ha(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D$(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Ha(t,e))}async function P$(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Ha(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Qp{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ya(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return x$(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return D$(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return O$(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return P$(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",Ha(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L$="http://localhost";class Ai extends Qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=zp(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ai(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}buildRequest(){const e={requestUri:L$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F$(t){const e=mo(vo(t)).link,n=e?mo(vo(e)).deep_link_id:null,s=mo(vo(t)).deep_link_id;return(s?mo(vo(s)).link:null)||s||n||e||t}class Xp{constructor(e){var n,s,i,r,o,a;const l=mo(vo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=M$((i=l.mode)!==null&&i!==void 0?i:null);se(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=F$(e);try{return new Xp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xp.parseLink(n);return se(s,"argument-error"),ya._fromEmailAndCode(e,s.code,s.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends qa{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bs.credential(e.oauthAccessToken)}catch{return null}}}bs.FACEBOOK_SIGN_IN_METHOD="facebook.com";bs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Es.credential(n,s)}catch{return null}}}Es.GOOGLE_SIGN_IN_METHOD="google.com";Es.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends qa{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends qa{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ts.credential(n,s)}catch{return null}}}Ts.TWITTER_SIGN_IN_METHOD="twitter.com";Ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $$(t,e){return za(t,"POST","/v1/accounts:signUp",Ha(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await wi._fromIdTokenResponse(e,s,i),o=by(s);return new Ri({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=by(s);return new Ri({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function by(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends pn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ec(e,n,s,i)}}function iT(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(t,r,e,s):r})}async function U$(t,e,n=!1){const s=await ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ri._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V$(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ma(t,iT(s,i,e,t),n);se(r.idToken,s,"internal-error");const o=Gp(r.idToken);se(o,s,"internal-error");const{sub:a}=o;return se(t.uid===a,s,"user-mismatch"),Ri._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&hn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(t,e,n=!1){const s="signIn",i=await iT(t,s,e),r=await Ri._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function B$(t,e){return rT(Jr(t),e)}async function wW(t,e,n){const s=Jr(t),i=await $$(s,{returnSecureToken:!0,email:e,password:n}),r=await Ri._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function bW(t,e,n){return B$(mt(t),Zr.credential(e,n))}function oT(t,e,n,s){return mt(t).onIdTokenChanged(e,n,s)}function j$(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function EW(t,e,n,s){return mt(t).onAuthStateChanged(e,n,s)}function IW(t){return mt(t).signOut()}const Ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H$(){const t=Mt();return Yp(t)||$u(t)}const W$=1e3,z$=10;class lT extends aT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H$()&&C$(),this.fallbackToPolling=tT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);T$()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,z$):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},W$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lT.type="LOCAL";const q$=lT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends aT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cT.type="SESSION";const uT=cT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Uu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await K$(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Zp("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Y$(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function Q$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J$(){return hT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="firebaseLocalStorageDb",Z$=1,Tc="firebaseLocalStorage",fT="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vu(t,e){return t.transaction([Tc],e?"readwrite":"readonly").objectStore(Tc)}function eU(){const t=indexedDB.deleteDatabase(dT);return new Ka(t).toPromise()}function $d(){const t=indexedDB.open(dT,Z$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Tc,{keyPath:fT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Tc)?e(s):(s.close(),await eU(),e(await $d()))})})}async function Ey(t,e,n){const s=Vu(t,!0).put({[fT]:e,value:n});return new Ka(s).toPromise()}async function tU(t,e){const n=Vu(t,!1).get(e),s=await new Ka(n).toPromise();return s===void 0?null:s.value}function Iy(t,e){const n=Vu(t,!0).delete(e);return new Ka(n).toPromise()}const nU=800,sU=3;class pT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sU)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(J$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q$(),!this.activeServiceWorker)return;this.sender=new G$(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $d();return await Ey(e,Ic,"1"),await Iy(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ey(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tU(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Vu(i,!1).getAll();return new Ka(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pT.type="LOCAL";const iU=pT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function oU(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Un("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",rU().appendChild(s)})}function aU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t,e){return e?Jn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg extends Qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lU(t){return rT(t.auth,new eg(t),t.bypassAuthState)}function cU(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),V$(n,new eg(t),t.bypassAuthState)}async function uU(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),U$(n,new eg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lU;case"linkViaPopup":case"linkViaRedirect":return uU;case"reauthViaPopup":case"reauthViaRedirect":return cU;default:hn(this.auth,"internal-error")}}resolve(e){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hU=new ja(2e3,1e4);async function TW(t,e,n){const s=Jr(t);i$(t,e,Jp);const i=gT(s,n);return new di(s,"signInViaPopup",e,i).executeNotNull()}class di extends mT{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){ls(this.filter.length===1,"Popup operations only handle one event");const e=Zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hU.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dU="pendingRedirect",$l=new Map;class fU extends mT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const s=await pU(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pU(t,e){const n=vU(e),s=mU(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function gU(t,e){$l.set(t._key(),e)}function mU(t){return Jn(t._redirectPersistence)}function vU(t){return Fl(dU,t.config.apiKey,t.name)}async function yU(t,e,n=!1){const s=Jr(t),i=gT(s,e),o=await new fU(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U=10*60*1e3;class wU{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!vT(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_U&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ty(e))}saveEventToCache(e){this.cachedEventUids.add(Ty(e)),this.lastProcessedEventTime=Date.now()}}function Ty(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EU(t,e={}){return Wa(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TU=/^https?/;async function CU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EU(t);for(const n of e)try{if(SU(n))return}catch{}hn(t,"unauthorized-domain")}function SU(t){const e=Fd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TU.test(n))return!1;if(IU.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kU=new ja(3e4,6e4);function Cy(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AU(t){return new Promise((e,n)=>{var s,i,r;function o(){Cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cy(),n(Un(t,"network-request-failed"))},timeout:kU.get()})}if(!((i=(s=Vn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Vn().gapi)===null||r===void 0)&&r.load)o();else{const a=aU("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(Un(t,"network-request-failed"))},oU(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function RU(t){return Ul=Ul||AU(t),Ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU=new ja(5e3,15e3),OU="__/auth/iframe",xU="emulator/auth/iframe",DU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LU(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kp(e,xU):`https://${t.config.authDomain}/${OU}`,s={apiKey:e.apiKey,appName:t.name,v:Ui},i=PU.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Wr(s).slice(1)}`}async function MU(t){const e=await RU(t),n=Vn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:LU(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DU,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=Vn().setTimeout(()=>{r(o)},NU.get());function l(){Vn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$U=500,UU=600,VU="_blank",BU="http://localhost";class Sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jU(t,e,n,s=$U,i=UU){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FU),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Mt().toLowerCase();n&&(a=QI(c)?VU:n),YI(c)&&(e=e||BU,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(I$(c)&&a!=="_self")return HU(e||"",a),new Sy(null);const h=window.open(e||"",a,u);se(h,t,"popup-blocked");try{h.focus()}catch{}return new Sy(h)}function HU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU="__/auth/handler",zU="emulator/auth/handler";function ky(t,e,n,s,i,r){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ui,eventId:i};if(e instanceof Jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ld(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof qa){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${qU(t)}?${Wr(a).slice(1)}`}function qU({config:t}){return t.emulator?Kp(t,zU):`https://${t.authDomain}/${WU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="webStorageSupport";class KU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uT,this._completeRedirectFn=yU,this._overrideRedirectResult=gU}async _openPopup(e,n,s,i){var r;ls((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ky(e,n,s,Fd(),i);return jU(e,o,Zp())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Y$(ky(e,n,s,Fd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ls(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await MU(e),s=new wU(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ah,{type:Ah},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ah];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tT()||Yp()||$u()}}const GU=KU;var Ay="@firebase/auth",Ry="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XU(t){Kt(new Vt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{se(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),se(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nT(t)},u=new k$(a,l,c);return o$(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kt(new Vt("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(s=>new YU(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Ay,Ry,QU(t)),bt(Ay,Ry,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU=5*60,ZU=Wb("authIdTokenMaxAge")||JU;let Ny=null;const eV=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZU)return;const i=n==null?void 0:n.token;Ny!==i&&(Ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yT(t=lu()){const e=$i(t,"auth");if(e.isInitialized())return e.getImmediate();const n=r$(t,{popupRedirectResolver:GU,persistence:[iU,q$,uT]}),s=Wb("authTokenSyncURL");if(s){const r=eV(s);j$(n,r,()=>r(n.currentUser)),oT(n,o=>r(o))}const i=Hb("auth");return i&&A$(n,`http://${i}`),n}XU("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=new Map,nV={activated:!1,tokenObservers:[]};function Hn(t){return tV.get(t)||Object.assign({},nV)}const Oy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ea,await iV(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ea,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function iV(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Cc=new qs("appCheck","AppCheck",rV);function oV(t){if(!Hn(t).activated)throw Cc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV="firebase-app-check-database",lV=1,Ud="firebase-app-check-store";let wl=null;function cV(){return wl||(wl=new Promise((t,e)=>{try{const n=indexedDB.open(aV,lV);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Cc.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Ud,{keyPath:"compositeKey"})}}}catch(n){e(Cc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),wl)}function uV(t,e){return hV(dV(t),e)}async function hV(t,e){const s=(await cV()).transaction(Ud,"readwrite"),r=s.objectStore(Ud).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Cc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function dV(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new zr("@firebase/app-check");function xy(t,e){return qf()?uV(t,e).catch(n=>{Vd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV={error:"UNKNOWN_ERROR"};function pV(t){return ou.encodeString(JSON.stringify(t),!1)}async function Bd(t,e=!1){const n=t.app;oV(n);const s=Hn(n);let i=s.token,r;if(i&&!Eo(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Eo(l)?i=l:await xy(n,void 0))}if(!e&&i&&Eo(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Hn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Vd.warn(l.message):Vd.error(l),r=l}let a;return i?r?Eo(i)?a={token:i.token,internalError:r}:a=Py(r):(a={token:i.token},s.token=i,await xy(n,i)):a=Py(r),o&&vV(n,a),a}function gV(t,e,n,s){const{app:i}=t,r=Hn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Eo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Dy(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Dy(t))}function _T(t,e){const n=Hn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Dy(t){const{app:e}=t,n=Hn(e);let s=n.tokenRefresher;s||(s=mV(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function mV(t){const{app:e}=t;return new sV(async()=>{const n=Hn(e);let s;if(n.token?s=await Bd(t,!0):s=await Bd(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Hn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Oy.RETRIAL_MIN_WAIT,Oy.RETRIAL_MAX_WAIT)}function vV(t,e){const n=Hn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Eo(t){return t.expireTimeMillis-Date.now()>0}function Py(t){return{token:pV(fV),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Hn(this.app);for(const n of e)_T(this.app,n.next);return Promise.resolve()}}function _V(t,e){return new yV(t,e)}function wV(t){return{getToken:e=>Bd(t,e),addTokenListener:e=>gV(t,"INTERNAL",e),removeTokenListener:e=>_T(t.app,e)}}const bV="@firebase/app-check",EV="0.6.4",IV="app-check",Ly="app-check-internal";function TV(){Kt(new Vt(IV,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return _V(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ly).initialize()})),Kt(new Vt(Ly,t=>{const e=t.getProvider("app-check").getImmediate();return wV(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),bt(bV,EV)}TV();const wT=Symbol("firebaseApp");function Bu(t){return Fr()&&Le(wT,null)||lu(t)}const CV=typeof window<"u",bl=new WeakMap;function SV(t,e){if(!bl.has(t)){const n=Vc(!0);bl.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),bl.delete(t)}}return bl.get(t)}const bT=new WeakMap;function CW(t){return bT.get(Bu(t))}const El=new WeakMap;function kV(t){const e=Bu(t);if(!El.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{El.set(e,r),n(r.value)}];El.set(e,i)}return El.get(e)}function AV(t,e){const n=yT(e);oT(n,s=>{const i=kV();t.value=s,Array.isArray(i)&&i[1](t)})}const My="@firebase/database",Fy="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ET="";function RV(t){ET=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),wt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ta(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NV(e)}}catch{}return new OV},fi=IT("localStorage"),jd=IT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new zr("@firebase/database"),xV=function(){let t=1;return function(){return t++}}(),TT=function(t){const e=IO(t),n=new yO;n.update(e);const s=n.digest();return ou.encodeByteArray(s)},Ga=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ga.apply(null,s):typeof s=="object"?e+=wt(s):e+=s,e+=" "}return e};let bi=null,$y=!0;const DV=function(t,e){W(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(pr.logLevel=ke.VERBOSE,bi=pr.log.bind(pr),e&&jd.set("logging_enabled",!0)):typeof t=="function"?bi=t:(bi=null,jd.remove("logging_enabled"))},At=function(...t){if($y===!0&&($y=!1,bi===null&&jd.get("logging_enabled")===!0&&DV(!0)),bi){const e=Ga.apply(null,t);bi(e)}},Ya=function(t){return function(...e){At(t,...e)}},Hd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ga(...t);pr.error(e)},Ni=function(...t){const e=`FIREBASE FATAL ERROR: ${Ga(...t)}`;throw pr.error(e),new Error(e)},en=function(...t){const e="FIREBASE WARNING: "+Ga(...t);pr.warn(e)},PV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},CT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Or="[MIN_NAME]",Oi="[MAX_NAME]",eo=function(t,e){if(t===e)return 0;if(t===Or||e===Oi)return-1;if(e===Or||t===Oi)return 1;{const n=Uy(t),s=Uy(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},MV=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+wt(e))},tg=function(t){if(typeof t!="object"||t===null)return wt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=wt(e[s]),n+=":",n+=tg(t[e[s]]);return n+="}",n},ST=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function dn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kT=function(t){W(!CT(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},FV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$V=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},UV=new RegExp("^-?(0*)\\d{1,10}$"),VV=-2147483648,BV=2147483647,Uy=function(t){if(UV.test(t)){const e=Number(t);if(e>=VV&&e<=BV)return e}return null},Qa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw en("Exception was thrown by user callback.",n),e},Math.floor(0))}},jV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(At("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class Wd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="5",AT="v",RT="s",NT="r",OT="f",xT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,DT="ls",PT="p",zd="ac",LT="websocket",MT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function FT(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let s;if(e===LT)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===MT)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qV(t)&&(n.ns=t.namespace);const i=[];return dn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(){this.counters_={}}incrementCounter(e,n=1){hs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={},Nh={};function sg(t){const e=t.toString();return Rh[e]||(Rh[e]=new KV),Rh[e]}function GV(t,e){const n=t.toString();return Nh[n]||(Nh[n]=e()),Nh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qa(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="start",QV="close",XV="pLPCommand",JV="pRTLPCB",$T="id",UT="pw",VT="ser",ZV="cb",eB="seg",tB="ts",nB="d",sB="dframe",BT=1870,jT=30,iB=BT-jT,rB=25e3,oB=3e4;class nr{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ya(e),this.stats_=sg(n),this.urlFn=l=>(this.appCheckToken&&(l[zd]=this.appCheckToken),FT(n,MT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new YV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oB)),LV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ig((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vy)this.id=a,this.password=l;else if(o===QV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vy]="t",s[VT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ZV]=this.scriptTagHolder.uniqueCallbackIdentifier),s[AT]=ng,this.transportSessionId&&(s[RT]=this.transportSessionId),this.lastSessionId&&(s[DT]=this.lastSessionId),this.applicationId&&(s[PT]=this.applicationId),this.appCheckToken&&(s[zd]=this.appCheckToken),typeof location<"u"&&location.hostname&&xT.test(location.hostname)&&(s[NT]=OT);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nr.forceAllow_=!0}static forceDisallow(){nr.forceDisallow_=!0}static isAvailable(){return nr.forceAllow_?!0:!nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!FV()&&!$V()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bb(n),i=ST(s,iB);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sB]="t",s[$T]=e,s[UT]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=wt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ig{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xV(),window[XV+this.uniqueCallbackIdentifier]=e,window[JV+this.uniqueCallbackIdentifier]=n,this.myIFrame=ig.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){At("frame writing exception"),a.stack&&At(a.stack),At(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||At("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$T]=this.myID,e[UT]=this.myPW,e[VT]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jT+s.length<=BT;){const o=this.pendingSegs.shift();s=s+"&"+eB+i+"="+o.seg+"&"+tB+i+"="+o.ts+"&"+nB+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(rB)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{At("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aB=16384,lB=45e3;let Sc=null;typeof MozWebSocket<"u"?Sc=MozWebSocket:typeof WebSocket<"u"&&(Sc=WebSocket);class yn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ya(this.connId),this.stats_=sg(n),this.connURL=yn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[AT]=ng,typeof location<"u"&&location.hostname&&xT.test(location.hostname)&&(o[NT]=OT),n&&(o[RT]=n),s&&(o[DT]=s),i&&(o[zd]=i),r&&(o[PT]=r),FT(e,LT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fi.set("previous_websocket_failure",!0);try{let s;Kb(),this.mySock=new Sc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Sc!==null&&!yn.forceDisallow_}static previouslyFailed(){return fi.isInMemoryStorage||fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){fi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ta(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ST(n,aB);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lB))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yn.responsesRequiredToBeHealthy=2;yn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nr,yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=yn&&yn.isAvailable();let s=n&&!yn.previouslyFailed();if(e.webSocketOnly&&(n||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[yn];else{const i=this.transports_=[];for(const r of _a.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);_a.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_a.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cB=6e4,uB=5e3,hB=10*1024,dB=100*1024,Oh="t",By="d",fB="s",jy="r",pB="e",Hy="o",Wy="a",zy="n",qy="p",gB="h";class mB{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ya("c:"+this.id+":"),this.transportManager_=new _a(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dB?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hB?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Oh in e){const n=e[Oh];n===Wy?this.upgradeIfSecondaryHealthy_():n===jy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),s=uo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),s=uo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(Oh,e);if(By in e){const s=e[By];if(n===gB){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===zy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fB?this.onConnectionShutdown_(s):n===jy?this.onReset_(s):n===pB?Hd("Server Error: "+s):n===Hy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ng!==s&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cB))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uB))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends WT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kc}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=32,Gy=768;class We{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function De(){return new We("")}function Ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vs(t){return t.pieces_.length-t.pieceNum_}function Be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function zT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vB(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function KT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new We(e,0)}function pt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof We)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new We(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function an(t,e){const n=Ie(t),s=Ie(e);if(n===null)return e;if(n===s)return an(Be(t),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function GT(t,e){if(Vs(t)!==Vs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function bn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Vs(t)>Vs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class yB{constructor(e,n){this.errorPrefix_=n,this.parts_=qT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=au(this.parts_[s]);YT(this)}}function _B(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=au(e),YT(t)}function wB(t){const e=t.parts_.pop();t.byteLength_-=au(e),t.parts_.length>0&&(t.byteLength_-=1)}function YT(t){if(t.byteLength_>Gy)throw new Error(t.errorPrefix_+"has a key path longer than "+Gy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ky)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ky+") or object contains a cycle "+ni(t))}function ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends WT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new rg}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=1e3,bB=60*5*1e3,Yy=30*1e3,EB=1.3,IB=3e4,TB="server_kill",Qy=3;class ts extends HT{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ts.nextPersistentConnectionId_++,this.log_=Ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ho,this.maxReconnectDelay_=bB,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Kb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(wt(r)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ea,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ts.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hs(e,"w")){const s=Er(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+wt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hd("Unrecognized action received from server: "+wt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IB&&(this.reconnectDelay_=ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EB)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ts.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?At("getToken() completed but was canceled"):(At("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new mB(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{en(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(TB)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&en(h),l())}}}interrupt(e){At("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){At("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ld(this.interruptReasons_)&&(this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>tg(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new We(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){At("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qy&&(this.reconnectDelay_=Yy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){At("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ET.replace(/\./g,"-")]=1,zf()?e["framework.cordova"]=1:qb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kc.getInstance().currentlyOnline();return ld(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Te(Or,e),i=new Te(Or,n);return this.compare(s,i)!==0}minPost(){return Te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class QT extends ju{static get __EMPTY_NODE(){return Il}static set __EMPTY_NODE(e){Il=e}compare(e,n){return eo(e.name,n.name)}isDefinedOn(e){throw Hr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Te.MIN}maxPost(){return new Te(Oi,Il)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new Te(e,Il)}toString(){return".key"}}const gr=new QT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ft.RED,this.left=i!=null?i:Ht.EMPTY_NODE,this.right=r!=null?r:Ht.EMPTY_NODE}copy(e,n,s,i,r){return new ft(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class CB{copy(e,n,s,i,r){return this}insert(e,n,s){return new ft(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,n=Ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tl(this.root_,null,this.comparator_,!0,e)}}Ht.EMPTY_NODE=new CB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SB(t,e){return eo(t.name,e.name)}function og(t,e){return eo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd;function kB(t){qd=t}const XT=function(t){return typeof t=="number"?"number:"+kT(t):"string:"+t},JT=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hs(e,".sv"),"Priority must be a string or number.")}else W(t===qd||t.isEmpty(),"priority of unexpected type.");W(t===qd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xy;class ht{constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),JT(this.priorityNode_)}static set __childrenNodeConstructor(e){Xy=e}static get __childrenNodeConstructor(){return Xy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:Ie(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(W(s!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+XT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kT(this.value_):e+=this.value_,this.lazyHash_=TT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ht.VALUE_TYPE_ORDER.indexOf(n),r=ht.VALUE_TYPE_ORDER.indexOf(s);return W(i>=0,"Unknown leaf type: "+n),W(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZT,eC;function AB(t){ZT=t}function RB(t){eC=t}class NB extends ju{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?eo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(Oi,new ht("[PRIORITY-POST]",eC))}makePost(e,n){const s=ZT(e);return new Te(n,new ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const Dt=new NB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OB=Math.log(2);class xB{constructor(e){const n=r=>parseInt(Math.log(r)/OB,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ac=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ft(d,h.node,ft.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),m=i(f+1,c);return h=t[f],d=n?n(h):h,new ft(d,h.node,ft.BLACK,p,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,m){const y=h-p,w=h;h-=p;const E=i(y+1,w),C=t[y],D=n?n(C):C;f(new ft(D,C.node,m,null,E))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?d(y,ft.BLACK):(d(y,ft.BLACK),d(y,ft.RED))}return u},o=new xB(t.length),a=r(o);return new Ht(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh;const Xi={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Xi&&Dt,"ChildrenNode.ts has not been loaded"),xh=xh||new Zn({".priority":Xi},{".priority":Dt}),xh}get(e){const n=Er(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ht?n:null}hasIndex(e){return hs(this.indexSet_,e.toString())}addIndex(e,n){W(e!==gr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ac(s,e.getCompare()):a=Xi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Zn(u,c)}addToIndexes(e,n){const s=tc(this.indexes_,(i,r)=>{const o=Er(this.indexSet_,r);if(W(o,"Missing index implementation for "+r),i===Xi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Te.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ac(a,o.getCompare())}else return Xi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Te(e.name,a))),l.insert(e,e.node)}});return new Zn(s,this.indexSet_)}removeFromIndexes(e,n){const s=tc(this.indexes_,i=>{if(i===Xi)return i;{const r=n.get(e.name);return r?i.remove(new Te(e.name,r)):i}});return new Zn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class Ne{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&JT(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fo||(fo=new Ne(new Ht(og),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new Ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fo:n}}getChild(e){const n=Ie(e);return n===null?this:this.getImmediateChild(n).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fo:this.priorityNode_;return new Ne(i,o,r)}}updateChild(e,n){const s=Ie(e);if(s===null)return n;{W(Ie(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Dt,(o,a)=>{n[o]=a.val(e),s++,r&&Ne.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+XT(this.getPriority().val())+":"),this.forEachChild(Dt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":TT(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xa?-1:0}withIndex(e){if(e===gr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Dt),i=n.getIterator(Dt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gr?null:this.indexMap_.get(e.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DB extends Ne{constructor(){super(new Ht(og),Ne.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ne.EMPTY_NODE}isEmpty(){return!1}}const Xa=new DB;Object.defineProperties(Te,{MIN:{value:new Te(Or,Ne.EMPTY_NODE)},MAX:{value:new Te(Oi,Xa)}});QT.__EMPTY_NODE=Ne.EMPTY_NODE;ht.__childrenNodeConstructor=Ne;kB(Xa);RB(Xa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PB=!0;function Rt(t,e=null){if(t===null)return Ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ht(n,Rt(e))}if(!(t instanceof Array)&&PB){const n=[];let s=!1;if(dn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Rt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Te(o,l)))}}),n.length===0)return Ne.EMPTY_NODE;const r=Ac(n,SB,o=>o.name,og);if(s){const o=Ac(n,Dt.getCompare());return new Ne(r,Rt(e),new Zn({".priority":o},{".priority":Dt}))}else return new Ne(r,Rt(e),Zn.Default)}else{let n=Ne.EMPTY_NODE;return dn(t,(s,i)=>{if(hs(t,s)&&s.substring(0,1)!=="."){const r=Rt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Rt(e))}}AB(Rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB extends ju{constructor(e){super(),this.indexPath_=e,W(!we(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?eo(e.name,n.name):r}makePost(e,n){const s=Rt(e),i=Ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new Te(n,i)}maxPost(){const e=Ne.EMPTY_NODE.updateChild(this.indexPath_,Xa);return new Te(Oi,e)}toString(){return qT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MB extends ju{compare(e,n){const s=e.node.compareTo(n.node);return s===0?eo(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,n){const s=Rt(e);return new Te(n,s)}toString(){return".value"}}const FB=new MB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $B(t){return{type:"value",snapshotNode:t}}function UB(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function VB(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BB(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Or}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new ag;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Dt?n="$priority":t.index_===FB?n="$value":t.index_===gr?n="$key":(W(t.index_ instanceof LB,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=wt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=wt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+wt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=wt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+wt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function e_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Dt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends HT{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ya("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rc.getListenId_(e,s),a={};this.listens_[o]=a;const l=Zy(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Er(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Rc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Zy(e._queryParams),s=e._path.toString(),i=new ea;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ta(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jB{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){return{value:null,children:new Map}}function tC(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ie(e);t.children.has(s)||t.children.set(s,Nc());const i=t.children.get(s);e=Be(e),tC(i,e,n)}}function Kd(t,e,n){t.value!==null?n(e,t.value):HB(t,(s,i)=>{const r=new We(e.toString()+"/"+s);Kd(i,r,n)})}function HB(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=10*1e3,zB=30*1e3,qB=5*60*1e3;class KB{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WB(e);const s=t_+(zB-t_)*Math.random();Fo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dn(e,(i,r)=>{r>0&&hs(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*qB))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ln;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ln||(Ln={}));function nC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function iC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ln.ACK_USER_WRITE,this.source=nC()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new We(e));return new Oc(De(),n,this.revert)}}else return W(Ie(this.path)===e,"operationForChild called for unrelated child."),new Oc(Be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ln.OVERWRITE}operationForChild(e){return we(this.path)?new xi(this.source,De(),this.snap.getImmediateChild(e)):new xi(this.source,Be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ln.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new We(e));return n.isEmpty()?null:n.value?new xi(this.source,De(),n.value):new wa(this.source,De(),n)}else return W(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wa(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function GB(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(BB(o.childName,o.snapshotNode))}),po(t,i,"child_removed",e,s,n),po(t,i,"child_added",e,s,n),po(t,i,"child_moved",r,s,n),po(t,i,"child_changed",e,s,n),po(t,i,"value",e,s,n),i}function po(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>QB(t,a,l)),o.forEach(a=>{const l=YB(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function YB(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QB(t,e,n){if(e.childName==null||n.childName==null)throw Hr("Should only compare child_ events.");const s=new Te(e.childName,e.snapshotNode),i=new Te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t,e){return{eventCache:t,serverCache:e}}function $o(t,e,n,s){return rC(new lg(e,n,s),t.serverCache)}function oC(t,e,n,s){return rC(t.eventCache,new lg(e,n,s))}function Gd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Di(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;const XB=()=>(Dh||(Dh=new Ht(MV)),Dh);class Ue{constructor(e,n=XB()){this.value=e,this.children=n}static fromObject(e){let n=new Ue(null);return dn(e,(s,i)=>{n=n.set(new We(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:De(),value:this.value};if(we(e))return null;{const s=Ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Be(e),n);return r!=null?{path:pt(new We(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=Ie(e),s=this.children.get(n);return s!==null?s.subtree(Be(e)):new Ue(null)}}set(e,n){if(we(e))return new Ue(n,this.children);{const s=Ie(e),r=(this.children.get(s)||new Ue(null)).set(Be(e),n),o=this.children.insert(s,r);return new Ue(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const n=Ie(e),s=this.children.get(n);if(s){const i=s.remove(Be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ue(null):new Ue(this.value,r)}else return this}}get(e){if(we(e))return this.value;{const n=Ie(e),s=this.children.get(n);return s?s.get(Be(e)):null}}setTree(e,n){if(we(e))return n;{const s=Ie(e),r=(this.children.get(s)||new Ue(null)).setTree(Be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ue(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,De(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(we(e))return null;{const r=Ie(e),o=this.children.get(r);return o?o.findOnPath_(Be(e),pt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,De(),n)}foreachOnPath_(e,n,s){if(we(e))return this;{this.value&&s(n,this.value);const i=Ie(e),r=this.children.get(i);return r?r.foreachOnPath_(Be(e),pt(n,i),s):new Ue(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.writeTree_=e}static empty(){return new Cn(new Ue(null))}}function Uo(t,e,n){if(we(e))return new Cn(new Ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=an(i,e);return r=r.updateChild(o,n),new Cn(t.writeTree_.set(i,r))}else{const i=new Ue(n),r=t.writeTree_.setTree(e,i);return new Cn(r)}}}function n_(t,e,n){let s=t;return dn(n,(i,r)=>{s=Uo(s,pt(e,i),r)}),s}function s_(t,e){if(we(e))return Cn.empty();{const n=t.writeTree_.setTree(e,new Ue(null));return new Cn(n)}}function Yd(t,e){return Hi(t,e)!=null}function Hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(an(n.path,e)):null}function i_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Dt,(s,i)=>{e.push(new Te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Te(s,i.value))}),e}function Ds(t,e){if(we(e))return t;{const n=Hi(t,e);return n!=null?new Cn(new Ue(n)):new Cn(t.writeTree_.subtree(e))}}function Qd(t){return t.writeTree_.isEmpty()}function xr(t,e){return aC(De(),t.writeTree_,e)}function aC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(W(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=aC(pt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e){return fC(e,t)}function JB(t,e,n,s,i){W(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Uo(t.visibleWrites,e,n)),t.lastWriteId=s}function ZB(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ej(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tj(a,s.path)?i=!1:bn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nj(t),!0;if(s.snap)t.visibleWrites=s_(t.visibleWrites,s.path);else{const a=s.children;dn(a,l=>{t.visibleWrites=s_(t.visibleWrites,pt(s.path,l))})}return!0}else return!1}function tj(t,e){if(t.snap)return bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bn(pt(t.path,n),e))return!0;return!1}function nj(t){t.visibleWrites=cC(t.allWrites,sj,De()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sj(t){return t.visible}function cC(t,e,n){let s=Cn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)bn(n,o)?(a=an(n,o),s=Uo(s,a,r.snap)):bn(o,n)&&(a=an(o,n),s=Uo(s,De(),r.snap.getChild(a)));else if(r.children){if(bn(n,o))a=an(n,o),s=n_(s,a,r.children);else if(bn(o,n))if(a=an(o,n),we(a))s=n_(s,De(),r.children);else{const l=Er(r.children,Ie(a));if(l){const c=l.getChild(Be(a));s=Uo(s,De(),c)}}}else throw Hr("WriteRecord should have .snap or .children")}}return s}function uC(t,e,n,s,i){if(!s&&!i){const r=Hi(t.visibleWrites,e);if(r!=null)return r;{const o=Ds(t.visibleWrites,e);if(Qd(o))return n;if(n==null&&!Yd(o,De()))return null;{const a=n||Ne.EMPTY_NODE;return xr(o,a)}}}else{const r=Ds(t.visibleWrites,e);if(!i&&Qd(r))return n;if(!i&&n==null&&!Yd(r,De()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(bn(c.path,e)||bn(e,c.path))},a=cC(t.allWrites,o,e),l=n||Ne.EMPTY_NODE;return xr(a,l)}}}function ij(t,e,n){let s=Ne.EMPTY_NODE;const i=Hi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Dt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ds(t.visibleWrites,e);return n.forEachChild(Dt,(o,a)=>{const l=xr(Ds(r,new We(o)),a);s=s.updateImmediateChild(o,l)}),i_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ds(t.visibleWrites,e);return i_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rj(t,e,n,s,i){W(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pt(e,n);if(Yd(t.visibleWrites,r))return null;{const o=Ds(t.visibleWrites,r);return Qd(o)?i.getChild(n):xr(o,i.getChild(n))}}function oj(t,e,n,s){const i=pt(e,n),r=Hi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ds(t.visibleWrites,i);return xr(o,s.getNode().getImmediateChild(n))}else return null}function aj(t,e){return Hi(t.visibleWrites,e)}function lj(t,e,n,s,i,r,o){let a;const l=Ds(t.visibleWrites,e),c=Hi(l,De());if(c!=null)a=c;else if(n!=null)a=xr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function cj(){return{visibleWrites:Cn.empty(),allWrites:[],lastWriteId:-1}}function Xd(t,e,n,s){return uC(t.writeTree,t.treePath,e,n,s)}function hC(t,e){return ij(t.writeTree,t.treePath,e)}function r_(t,e,n,s){return rj(t.writeTree,t.treePath,e,n,s)}function xc(t,e){return aj(t.writeTree,pt(t.treePath,e))}function uj(t,e,n,s,i,r){return lj(t.writeTree,t.treePath,e,n,s,i,r)}function cg(t,e,n){return oj(t.writeTree,t.treePath,e,n)}function dC(t,e){return fC(pt(t.treePath,e),t.writeTree)}function fC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Jy(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,VB(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,UB(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Jy(s,e.snapshotNode,i.oldSnap));else throw Hr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const pC=new dj;class ug{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new lg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cg(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Di(this.viewCache_),r=uj(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function fj(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pj(t,e,n,s,i){const r=new hj;let o,a;if(n.type===Ln.OVERWRITE){const c=n;c.source.fromUser?o=Jd(t,e,c.path,c.snap,s,i,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!we(c.path),o=Dc(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ln.MERGE){const c=n;c.source.fromUser?o=mj(t,e,c.path,c.children,s,i,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zd(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ln.ACK_USER_WRITE){const c=n;c.revert?o=_j(t,e,c.path,s,i,r):o=vj(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ln.LISTEN_COMPLETE)o=yj(t,e,n.path,s,r);else throw Hr("Unknown operation type: "+n.type);const l=r.getChanges();return gj(e,o,l),{viewCache:o,changes:l}}function gj(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Gd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push($B(Gd(e)))}}function gC(t,e,n,s,i,r){const o=e.eventCache;if(xc(s,n)!=null)return e;{let a,l;if(we(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Di(e),u=c instanceof Ne?c:Ne.EMPTY_NODE,h=hC(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Xd(s,Di(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Ie(n);if(c===".priority"){W(Vs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=r_(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Be(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=r_(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=cg(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return $o(e,a,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function Dc(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(we(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Ie(n);if(!l.isCompleteForPath(n)&&Vs(n)>1)return e;const p=Be(n),y=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,p,pC,null)}const h=oC(e,c,l.isFullyInitialized()||we(n),u.filtersNodes()),d=new ug(i,h,r);return gC(t,h,n,i,d,a)}function Jd(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ug(i,e,r);if(we(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$o(e,c,!0,t.filter.filtersNodes());else{const h=Ie(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=$o(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Be(n),f=a.getNode().getImmediateChild(h);let p;if(we(d))p=s;else{const m=u.getCompleteChild(h);m!=null?zT(d)===".priority"&&m.getChild(KT(d)).isEmpty()?p=m:p=m.updateChild(d,s):p=Ne.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=$o(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function o_(t,e){return t.eventCache.isCompleteForChild(e)}function mj(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=pt(n,l);o_(e,Ie(u))&&(a=Jd(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=pt(n,l);o_(e,Ie(u))||(a=Jd(t,a,u,c,i,r,o))}),a}function a_(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zd(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;we(n)?c=s:c=new Ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=a_(t,f,d);l=Dc(t,l,new We(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=a_(t,p,d);l=Dc(t,l,new We(h),m,i,r,o,a)}}),l}function vj(t,e,n,s,i,r,o){if(xc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(we(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Dc(t,e,n,l.getNode().getChild(n),i,r,a,o);if(we(n)){let c=new Ue(null);return l.getNode().forEachChild(gr,(u,h)=>{c=c.set(new We(u),h)}),Zd(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ue(null);return s.foreach((u,h)=>{const d=pt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Zd(t,e,n,c,i,r,a,o)}}function yj(t,e,n,s,i){const r=e.serverCache,o=oC(e,r.getNode(),r.isFullyInitialized()||we(n),r.isFiltered());return gC(t,o,n,s,pC,i)}function _j(t,e,n,s,i,r){let o;if(xc(s,n)!=null)return e;{const a=new ug(s,e,i),l=e.eventCache.getNode();let c;if(we(n)||Ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xd(s,Di(e));else{const h=e.serverCache.getNode();W(h instanceof Ne,"serverChildren would be complete if leaf node"),u=hC(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Ie(n);let h=cg(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Be(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ne.EMPTY_NODE,Be(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xd(s,Di(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||xc(s,De())!=null,$o(e,c,o,t.filter.filtersNodes())}}function wj(t,e){const n=Di(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(Ie(e)).isEmpty())?n.getChild(e):null}function l_(t,e,n,s){e.type===Ln.MERGE&&e.source.queryId!==null&&(W(Di(t.viewCache_),"We should always have a full cache before handling merges"),W(Gd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=pj(t.processor_,i,e,n,s);return fj(t.processor_,r.viewCache),W(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,bj(t,r.changes,r.viewCache.eventCache.getNode(),null)}function bj(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return GB(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c_;function Ej(t){W(!c_,"__referenceConstructor has already been defined"),c_=t}function hg(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return W(r!=null,"SyncTree gave us an op for an invalid query."),l_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(l_(o,e,n,s));return r}}function dg(t,e){let n=null;for(const s of t.views.values())n=n||wj(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u_;function Ij(t){W(!u_,"__referenceConstructor has already been defined"),u_=t}class h_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=cj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tj(t,e,n,s,i){return JB(t.pendingWriteTree_,e,n,s,i),i?Wu(t,new xi(nC(),e,n)):[]}function sr(t,e,n=!1){const s=ZB(t.pendingWriteTree_,e);if(ej(t.pendingWriteTree_,e)){let r=new Ue(null);return s.snap!=null?r=r.set(De(),!0):dn(s.children,o=>{r=r.set(new We(o),!0)}),Wu(t,new Oc(s.path,r,n))}else return[]}function Hu(t,e,n){return Wu(t,new xi(sC(),e,n))}function Cj(t,e,n){const s=Ue.fromObject(n);return Wu(t,new wa(sC(),e,s))}function Sj(t,e,n,s){const i=_C(t,s);if(i!=null){const r=wC(i),o=r.path,a=r.queryId,l=an(o,e),c=new xi(iC(a),l,n);return bC(t,o,c)}else return[]}function kj(t,e,n,s){const i=_C(t,s);if(i){const r=wC(i),o=r.path,a=r.queryId,l=an(o,e),c=Ue.fromObject(n),u=new wa(iC(a),l,c);return bC(t,o,u)}else return[]}function mC(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=an(o,e),c=dg(a,l);if(c)return c});return uC(i,e,r,n,!0)}function Wu(t,e){return vC(e,t.syncPointTree_,null,lC(t.pendingWriteTree_,De()))}function vC(t,e,n,s){if(we(t.path))return yC(t,e,n,s);{const i=e.get(De());n==null&&i!=null&&(n=dg(i,De()));let r=[];const o=Ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dC(s,o);r=r.concat(vC(a,l,c,u))}return i&&(r=r.concat(hg(i,t,s,n))),r}}function yC(t,e,n,s){const i=e.get(De());n==null&&i!=null&&(n=dg(i,De()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dC(s,o),u=t.operationForChild(o);u&&(r=r.concat(yC(u,a,l,c)))}),i&&(r=r.concat(hg(i,t,s,n))),r}function _C(t,e){return t.tagToQueryMap.get(e)}function wC(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function bC(t,e,n){const s=t.syncPointTree_.get(e);W(s,"Missing sync point for query tag that we're tracking");const i=lC(t.pendingWriteTree_,e);return hg(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fg(n)}node(){return this.node_}}class pg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pt(this.path_,e);return new pg(this.syncTree_,n)}node(){return mC(this.syncTree_,this.path_)}}const Aj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},d_=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Rj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Nj(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Rj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},Nj=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&W(!1,"Unexpected increment value: "+s);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Oj=function(t,e,n,s){return gg(e,new pg(n,t),s)},xj=function(t,e,n){return gg(t,new fg(e),n)};function gg(t,e,n){const s=t.getPriority().val(),i=d_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=d_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ht(a,Rt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ht(i))),o.forEachChild(Dt,(a,l)=>{const c=gg(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function vg(t,e){let n=e instanceof We?e:new We(e),s=t,i=Ie(n);for(;i!==null;){const r=Er(s.node.children,i)||{children:{},childCount:0};s=new mg(i,s,r),n=Be(n),i=Ie(n)}return s}function to(t){return t.node.value}function EC(t,e){t.node.value=e,ef(t)}function IC(t){return t.node.childCount>0}function Dj(t){return to(t)===void 0&&!IC(t)}function zu(t,e){dn(t.node.children,(n,s)=>{e(new mg(n,t,s))})}function TC(t,e,n,s){n&&!s&&e(t),zu(t,i=>{TC(i,e,!0,s)}),n&&s&&e(t)}function Pj(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ja(t){return new We(t.parent===null?t.name:Ja(t.parent)+"/"+t.name)}function ef(t){t.parent!==null&&Lj(t.parent,t.name,t)}function Lj(t,e,n){const s=Dj(n),i=hs(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ef(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ef(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mj=/[\[\].#$\/\u0000-\u001F\u007F]/,Fj=/[\[\].#$\u0000-\u001F\u007F]/,Ph=10*1024*1024,CC=function(t){return typeof t=="string"&&t.length!==0&&!Mj.test(t)},$j=function(t){return typeof t=="string"&&t.length!==0&&!Fj.test(t)},Uj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$j(t)},SC=function(t,e,n){const s=n instanceof We?new yB(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ni(s));if(typeof e=="function")throw new Error(t+"contains a function "+ni(s)+" with contents = "+e.toString());if(CT(e))throw new Error(t+"contains "+e.toString()+" "+ni(s));if(typeof e=="string"&&e.length>Ph/3&&au(e)>Ph)throw new Error(t+"contains a string greater than "+Ph+" utf8 bytes "+ni(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(dn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!CC(o)))throw new Error(t+" contains an invalid key ("+o+") "+ni(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_B(s,o),SC(t,a,s),wB(s)}),i&&r)throw new Error(t+' contains ".value" child '+ni(s)+" in addition to actual children.")}},Vj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!CC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Uj(n))throw new Error(EO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jj(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!GT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Wi(t,e,n){jj(t,n),Hj(t,s=>bn(s,e)||bn(e,s))}function Hj(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Wj(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Wj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();bi&&At("event: "+n.toString()),Qa(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zj="repo_interrupt",qj=25;class Kj{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nc(),this.transactionQueueTree_=new mg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gj(t,e,n){if(t.stats_=sg(t.repoInfo_),t.forceRestClient_||jV())t.server_=new Rc(t.repoInfo_,(s,i,r,o)=>{f_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>p_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ts(t.repoInfo_,e,(s,i,r,o)=>{f_(t,s,i,r,o)},s=>{p_(t,s)},s=>{Qj(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=GV(t.repoInfo_,()=>new KB(t.stats_,t.server_)),t.infoData_=new jB,t.infoSyncTree_=new h_({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Hu(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yg(t,"connected",!1),t.serverSyncTree_=new h_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Wi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Yj(t){const n=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kC(t){return Aj({timestamp:Yj(t)})}function f_(t,e,n,s,i){t.dataUpdateCount++;const r=new We(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=tc(n,c=>Rt(c));o=kj(t.serverSyncTree_,r,l,i)}else{const l=Rt(n);o=Sj(t.serverSyncTree_,r,l,i)}else if(s){const l=tc(n,c=>Rt(c));o=Cj(t.serverSyncTree_,r,l)}else{const l=Rt(n);o=Hu(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=wg(t,r)),Wi(t.eventQueue_,a,o)}function p_(t,e){yg(t,"connected",e),e===!1&&Jj(t)}function Qj(t,e){dn(e,(n,s)=>{yg(t,n,s)})}function yg(t,e,n){const s=new We("/.info/"+e),i=Rt(n);t.infoData_.updateSnapshot(s,i);const r=Hu(t.infoSyncTree_,s,i);Wi(t.eventQueue_,s,r)}function Xj(t){return t.nextWriteId_++}function Jj(t){AC(t,"onDisconnectEvents");const e=kC(t),n=Nc();Kd(t.onDisconnect_,De(),(i,r)=>{const o=Oj(i,r,t.serverSyncTree_,e);tC(n,i,o)});let s=[];Kd(n,De(),(i,r)=>{s=s.concat(Hu(t.serverSyncTree_,i,r));const o=nH(t,i);wg(t,o)}),t.onDisconnect_=Nc(),Wi(t.eventQueue_,De(),s)}function Zj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zj)}function AC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),At(n,...e)}function RC(t,e,n){return mC(t.serverSyncTree_,e,n)||Ne.EMPTY_NODE}function _g(t,e=t.transactionQueueTree_){if(e||qu(t,e),to(e)){const n=OC(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&eH(t,Ja(e),n)}else IC(e)&&zu(e,n=>{_g(t,n)})}function eH(t,e,n){const s=n.map(c=>c.currentWriteId),i=RC(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];W(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=an(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{AC(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(sr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();qu(t,vg(t.transactionQueueTree_,e)),_g(t,t.transactionQueueTree_),Wi(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Qa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{en("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}wg(t,e)}},o)}function wg(t,e){const n=NC(t,e),s=Ja(n),i=OC(t,n);return tH(t,i,s),s}function tH(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=an(n,l.path);let u=!1,h;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(sr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=qj)u=!0,h="maxretry",i=i.concat(sr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=RC(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){SC("transaction failed: Data returned ",f,l.path);let p=Rt(f);typeof f=="object"&&f!=null&&hs(f,".priority")||(p=p.updatePriority(d.getPriority()));const y=l.currentWriteId,w=kC(t),E=xj(p,d,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=E,l.currentWriteId=Xj(t),o.splice(o.indexOf(y),1),i=i.concat(Tj(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(sr(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(sr(t.serverSyncTree_,l.currentWriteId,!0))}Wi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}qu(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Qa(s[a]);_g(t,t.transactionQueueTree_)}function NC(t,e){let n,s=t.transactionQueueTree_;for(n=Ie(e);n!==null&&to(s)===void 0;)s=vg(s,n),e=Be(e),n=Ie(e);return s}function OC(t,e){const n=[];return xC(t,e,n),n.sort((s,i)=>s.order-i.order),n}function xC(t,e,n){const s=to(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zu(e,i=>{xC(t,i,n)})}function qu(t,e){const n=to(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,EC(e,n.length>0?n:void 0)}zu(e,s=>{qu(t,s)})}function nH(t,e){const n=Ja(NC(t,e)),s=vg(t.transactionQueueTree_,e);return Pj(s,i=>{Lh(t,i)}),Lh(t,s),TC(s,i=>{Lh(t,i)}),n}function Lh(t,e){const n=to(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(sr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?EC(e,void 0):n.length=r+1,Wi(t.eventQueue_,Ja(e),i);for(let o=0;o<s.length;o++)Qa(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sH(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iH(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):en(`Invalid query segment '${n}' in query '${t}'`)}return e}const g_=function(t,e){const n=rH(t),s=n.namespace;n.domain==="firebase.com"&&Ni(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ni("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||PV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zV(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new We(n.pathString)}},rH=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=sH(t.substring(u,h)));const d=iH(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return we(this._path)?null:zT(this._path)}get ref(){return new no(this._repo,this._path)}get _queryIdentifier(){const e=e_(this._queryParams),n=tg(e);return n==="{}"?"default":n}get _queryObject(){return e_(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof bg))return!1;const n=this._repo===e._repo,s=GT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vB(this._path)}}class no extends bg{constructor(e,n){super(e,n,new ag,!1)}get parent(){const e=KT(this._path);return e===null?null:new no(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Ej(no);Ij(no);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oH="FIREBASE_DATABASE_EMULATOR_HOST",tf={};let aH=!1;function lH(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ni("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),At("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=g_(r,i),a=o.repoInfo,l,c;typeof process<"u"&&{}&&(c={}[oH]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=g_(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Wd(Wd.OWNER):new WV(t.name,t.options,e);Vj("Invalid Firebase Database URL",o),we(o.path)||Ni("Database URL must point to the root of a Firebase Database (not including a child path).");const h=uH(a,t,u,new HV(t.name,n));return new hH(h,t)}function cH(t,e){const n=tf[e];(!n||n[t.key]!==t)&&Ni(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Zj(t),delete n[t.key]}function uH(t,e,n,s){let i=tf[e.name];i||(i={},tf[e.name]=i);let r=i[t.toURLString()];return r&&Ni("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Kj(t,aH,n,s),i[t.toURLString()]=r,r}class hH{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new no(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cH(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ni("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dH(t){RV(Ui),Kt(new Vt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lH(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bt(My,Fy,t),bt(My,Fy,"esm2017")}ts.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ts.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dH();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="firebasestorage.googleapis.com",fH="storageBucket",pH=2*60*1e3,gH=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends pn{constructor(e,n,s=0){super(Mh(e),`Firebase Storage: ${n} (${Mh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Wn||(Wn={}));function Mh(t){return"storage/"+t}function mH(){const t="An unknown error occurred, please check the error payload for server response.";return new qn(Wn.UNKNOWN,t)}function vH(){return new qn(Wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yH(){return new qn(Wn.CANCELED,"User canceled the upload/download.")}function _H(t){return new qn(Wn.INVALID_URL,"Invalid URL '"+t+"'.")}function wH(t){return new qn(Wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function m_(t){return new qn(Wn.INVALID_ARGUMENT,t)}function PC(){return new qn(Wn.APP_DELETED,"The Firebase app was deleted.")}function bH(t){return new qn(Wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=En.makeFromUrl(e,n)}catch{return new En(e,"")}if(s.path==="")return s;throw wH(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=n===DC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${m}/${i}/${y}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<C.length;D++){const N=C[D],A=N.regex.exec(e);if(A){const O=A[N.indices.bucket];let _=A[N.indices.path];_||(_=""),s=new En(O,_),N.postModify(s);break}}if(s==null)throw _H(e);return s}}class EH{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IH(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...w){if(c){d();return}if(y){d(),u.call(null,y,...w);return}if(l()||o){d(),u.call(null,y,...w);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let p=!1;function m(y){p||(p=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function TH(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CH(t){return t!==void 0}function v_(t,e,n,s){if(s<e)throw m_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw m_(`Invalid value for '${t}'. Expected ${n} or less.`)}function SH(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pc||(Pc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kH(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AH{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Cl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Pc.NO_ERROR,l=r.getStatus();if(!a||kH(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Pc.ABORT;s(!1,new Cl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Cl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());CH(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=mH();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?PC():yH();o(l)}else{const l=vH();o(l)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=IH(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TH(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function RH(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NH(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function OH(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xH(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DH(t,e,n,s,i,r,o=!0){const a=SH(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return OH(c,e),RH(c,n),NH(c,r),xH(c,s),new AH(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PH(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function LH(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this._service=e,n instanceof En?this._location=n:this._location=En.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lc(e,n)}get root(){const e=new En(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LH(this._location.path)}get storage(){return this._service}get parent(){const e=PH(this._location.path);if(e===null)return null;const n=new En(this._location.bucket,e);return new Lc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bH(e)}}function y_(t,e){const n=e==null?void 0:e[fH];return n==null?null:En.makeFromBucketSpec(n,t)}class MH{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=DC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pH,this._maxUploadRetryTime=gH,this._requests=new Set,i!=null?this._bucket=En.makeFromBucketSpec(i,this._host):this._bucket=y_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,e):this._bucket=y_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lc(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new EH(PC());{const o=DH(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const __="@firebase/storage",w_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FH="storage";function $H(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new MH(n,s,i,e,Ui)}function UH(){Kt(new Vt(FH,$H,"PUBLIC").setMultipleInstances(!0)),bt(__,w_,""),bt(__,w_,"esm2017")}UH();function SW(t){return iI(Bu(t))}function VH(t){return(e,n)=>{const s=SV(e,n).run(()=>X(t));bT.set(e,s),AV(s,e)}}function kW(t){return CV?yT(Bu(t)):null}function BH(t,{firebaseApp:e,modules:n=[]}){t.provide(wT,e);for(const s of n)t.use(s.bind(null,e))}const Eg=hA(fA);Eg.use(BH,{firebaseApp:Wp,usersRef:n$,modules:[VH()]});Z1(Eg);Eg.mount("#app");export{oW as $,Br as A,Ws as B,su as C,br as D,Vr as E,Sa as F,$f as G,jr as H,Ms as I,zs as J,pW as K,$r as L,ul as M,X as N,QH as O,Nw as P,un as Q,Le as R,Ye as S,Hs as T,ba as U,Rs as V,Bs as W,XH as X,nn as Y,Vc as Z,cf as _,An as a,c1 as a$,$w as a0,Ow as a1,AA as a2,nW as a3,sW as a4,iW as a5,fm as a6,rW as a7,IA as a8,QA as a9,Mn as aA,A1 as aB,j1 as aC,qg as aD,n1 as aE,Of as aF,xb as aG,d1 as aH,Bf as aI,Db as aJ,f1 as aK,aW as aL,Vf as aM,ub as aN,Ef as aO,CW as aP,GH as aQ,WH as aR,BN as aS,KN as aT,lb as aU,yW as aV,mW as aW,yM as aX,t$ as aY,tv as aZ,Ob as a_,Li as aa,Nt as ab,Wt as ac,ce as ad,jc as ae,zN as af,Ei as ag,Jc as ah,p1 as ai,hW as aj,qH as ak,KH as al,Tf as am,_t as an,JH as ao,Ia as ap,js as aq,vn as ar,es as as,nt as at,ar as au,BC as av,y1 as aw,Mr as ax,Je as ay,cr as az,I as b,Lb as b0,u1 as b1,Pb as b2,pb as b3,uW as b4,A_ as b5,Pe as b6,_W as b7,yT as b8,Xw as b9,zH as bA,YH as bB,Rw as bC,Zk as bD,EW as ba,kW as bb,Es as bc,X1 as bd,SW as be,TW as bf,vW as bg,bW as bh,rw as bi,jH as bj,HH as bk,lr as bl,Fi as bm,hm as bn,cW as bo,eW as bp,lW as bq,EA as br,kn as bs,WN as bt,ZH as bu,Ls as bv,tW as bw,wW as bx,IW as by,iw as bz,b as c,ve as d,ut as e,Ta as f,Ke as g,gW as h,Me as i,fn as j,C1 as k,_1 as l,Mi as m,nu as n,UN as o,zn as p,dW as q,R1 as r,fW as s,it as t,Xl as u,lA as v,Wl as w,Ur as x,Ca as y,Ff as z};
