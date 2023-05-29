(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function sf(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Lc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Qe(s)?BC(s):Lc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Qe(t))return t;if(He(t))return t}}const $C=/;(?![^(]*\))/g,UC=/:([^]+)/,VC=/\/\*.*?\*\//gs;function BC(t){const e={};return t.replace(VC,"").split($C).forEach(n=>{if(n){const s=n.split(UC);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function rf(t){let e="";if(Qe(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const s=rf(t[n]);s&&(e+=s+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",HC=sf(jC);function E_(t){return!!t||t===""}const WC=t=>Qe(t)?t:t==null?"":ie(t)||He(t)&&(t.toString===S_||!de(t.toString))?JSON.stringify(t,I_,2):String(t),I_=(t,e)=>e&&e.__v_isRef?I_(t,e.value):or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:T_(e)?{[`Set(${e.size})`]:[...e.values()]}:He(e)&&!ie(e)&&!k_(e)?String(e):e,Ve={},rr=[],In=()=>{},zC=()=>!1,qC=/^on[^a-z]/,Mc=t=>qC.test(t),of=t=>t.startsWith("onUpdate:"),gt=Object.assign,af=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},KC=Object.prototype.hasOwnProperty,Se=(t,e)=>KC.call(t,e),ie=Array.isArray,or=t=>Fc(t)==="[object Map]",T_=t=>Fc(t)==="[object Set]",de=t=>typeof t=="function",Qe=t=>typeof t=="string",lf=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",C_=t=>He(t)&&de(t.then)&&de(t.catch),S_=Object.prototype.toString,Fc=t=>S_.call(t),GC=t=>Fc(t).slice(8,-1),k_=t=>Fc(t)==="[object Object]",cf=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sl=sf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$c=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},YC=/-(\w)/g,cn=$c(t=>t.replace(YC,(e,n)=>n?n.toUpperCase():"")),QC=/\B([A-Z])/g,Li=$c(t=>t.replace(QC,"-$1").toLowerCase()),Pr=$c(t=>t.charAt(0).toUpperCase()+t.slice(1)),kl=$c(t=>t?`on${Pr(t)}`:""),Vo=(t,e)=>!Object.is(t,e),Gu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ul=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},XC=t=>{const e=parseFloat(t);return isNaN(e)?t:e},JC=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let kg;const ZC=()=>kg||(kg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Yt;class A_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Uc(t){return new A_(t)}function eS(t,e=Yt){e&&e.active&&e.effects.push(t)}function R_(){return Yt}function uf(t){Yt&&Yt.cleanups.push(t)}const hf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},N_=t=>(t.w&Ps)>0,O_=t=>(t.n&Ps)>0,tS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ps},nS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];N_(i)&&!O_(i)?i.delete(t):e[n++]=i,i.w&=~Ps,i.n&=~Ps}e.length=n}},Vl=new WeakMap;let go=0,Ps=1;const $h=30;let mn;const gi=Symbol(""),Uh=Symbol("");class df{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eS(this,s)}run(){if(!this.active)return this.fn();let e=mn,n=Cs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mn,mn=this,Cs=!0,Ps=1<<++go,go<=$h?tS(this):Ag(this),this.fn()}finally{go<=$h&&nS(this),Ps=1<<--go,mn=this.parent,Cs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mn===this?this.deferStop=!0:this.active&&(Ag(this),this.onStop&&this.onStop(),this.active=!1)}}function Ag(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cs=!0;const x_=[];function Lr(){x_.push(Cs),Cs=!1}function Mr(){const t=x_.pop();Cs=t===void 0?!0:t}function qt(t,e,n){if(Cs&&mn){let s=Vl.get(t);s||Vl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=hf()),D_(i)}}function D_(t,e){let n=!1;go<=$h?O_(t)||(t.n|=Ps,n=!N_(t)):n=!t.has(mn),n&&(t.add(mn),mn.deps.push(t))}function ns(t,e,n,s,i,r){const o=Vl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?cf(n)&&a.push(o.get("length")):(a.push(o.get(gi)),or(t)&&a.push(o.get(Uh)));break;case"delete":ie(t)||(a.push(o.get(gi)),or(t)&&a.push(o.get(Uh)));break;case"set":or(t)&&a.push(o.get(gi));break}if(a.length===1)a[0]&&Vh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Vh(hf(l))}}function Vh(t,e){const n=ie(t)?t:[...t];for(const s of n)s.computed&&Rg(s);for(const s of n)s.computed||Rg(s)}function Rg(t,e){(t!==mn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function sS(t,e){var n;return(n=Vl.get(t))===null||n===void 0?void 0:n.get(e)}const iS=sf("__proto__,__v_isRef,__isVue"),P_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lf)),rS=ff(),oS=ff(!1,!0),aS=ff(!0),Ng=lS();function lS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let r=0,o=this.length;r<o;r++)qt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lr();const s=ce(this)[e].apply(this,n);return Mr(),s}}),t}function cS(t){const e=ce(this);return qt(e,"has",t),e.hasOwnProperty(t)}function ff(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?CS:U_:e?$_:F_).get(s))return s;const o=ie(s);if(!t){if(o&&Se(Ng,i))return Reflect.get(Ng,i,r);if(i==="hasOwnProperty")return cS}const a=Reflect.get(s,i,r);return(lf(i)?P_.has(i):iS(i))||(t||qt(s,"get",i),e)?a:Pe(a)?o&&cf(i)?a:a.value:He(a)?t?Bc(a):Nt(a):a}}const uS=L_(),hS=L_(!0);function L_(t=!1){return function(n,s,i,r){let o=n[s];if(vr(o)&&Pe(o)&&!Pe(i))return!1;if(!t&&(!Bl(i)&&!vr(i)&&(o=ce(o),i=ce(i)),!ie(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=ie(n)&&cf(s)?Number(s)<n.length:Se(n,s),l=Reflect.set(n,s,i,r);return n===ce(r)&&(a?Vo(i,o)&&ns(n,"set",s,i):ns(n,"add",s,i)),l}}function dS(t,e){const n=Se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ns(t,"delete",e,void 0),s}function fS(t,e){const n=Reflect.has(t,e);return(!lf(e)||!P_.has(e))&&qt(t,"has",e),n}function pS(t){return qt(t,"iterate",ie(t)?"length":gi),Reflect.ownKeys(t)}const M_={get:rS,set:uS,deleteProperty:dS,has:fS,ownKeys:pS},gS={get:aS,set(t,e){return!0},deleteProperty(t,e){return!0}},mS=gt({},M_,{get:oS,set:hS}),pf=t=>t,Vc=t=>Reflect.getPrototypeOf(t);function Za(t,e,n=!1,s=!1){t=t.__v_raw;const i=ce(t),r=ce(e);n||(e!==r&&qt(i,"get",e),qt(i,"get",r));const{has:o}=Vc(i),a=s?pf:n?vf:Bo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function el(t,e=!1){const n=this.__v_raw,s=ce(n),i=ce(t);return e||(t!==i&&qt(s,"has",t),qt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function tl(t,e=!1){return t=t.__v_raw,!e&&qt(ce(t),"iterate",gi),Reflect.get(t,"size",t)}function Og(t){t=ce(t);const e=ce(this);return Vc(e).has.call(e,t)||(e.add(t),ns(e,"add",t,t)),this}function xg(t,e){e=ce(e);const n=ce(this),{has:s,get:i}=Vc(n);let r=s.call(n,t);r||(t=ce(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Vo(e,o)&&ns(n,"set",t,e):ns(n,"add",t,e),this}function Dg(t){const e=ce(this),{has:n,get:s}=Vc(e);let i=n.call(e,t);i||(t=ce(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ns(e,"delete",t,void 0),r}function Pg(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&ns(t,"clear",void 0,void 0),n}function nl(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ce(o),l=e?pf:t?vf:Bo;return!t&&qt(a,"iterate",gi),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function sl(t,e,n){return function(...s){const i=this.__v_raw,r=ce(i),o=or(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?pf:e?vf:Bo;return!e&&qt(r,"iterate",l?Uh:gi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ds(t){return function(...e){return t==="delete"?!1:this}}function vS(){const t={get(r){return Za(this,r)},get size(){return tl(this)},has:el,add:Og,set:xg,delete:Dg,clear:Pg,forEach:nl(!1,!1)},e={get(r){return Za(this,r,!1,!0)},get size(){return tl(this)},has:el,add:Og,set:xg,delete:Dg,clear:Pg,forEach:nl(!1,!0)},n={get(r){return Za(this,r,!0)},get size(){return tl(this,!0)},has(r){return el.call(this,r,!0)},add:ds("add"),set:ds("set"),delete:ds("delete"),clear:ds("clear"),forEach:nl(!0,!1)},s={get(r){return Za(this,r,!0,!0)},get size(){return tl(this,!0)},has(r){return el.call(this,r,!0)},add:ds("add"),set:ds("set"),delete:ds("delete"),clear:ds("clear"),forEach:nl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=sl(r,!1,!1),n[r]=sl(r,!0,!1),e[r]=sl(r,!1,!0),s[r]=sl(r,!0,!0)}),[t,n,e,s]}const[yS,_S,wS,bS]=vS();function gf(t,e){const n=e?t?bS:wS:t?_S:yS;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Se(n,i)&&i in s?n:s,i,r)}const ES={get:gf(!1,!1)},IS={get:gf(!1,!0)},TS={get:gf(!0,!1)},F_=new WeakMap,$_=new WeakMap,U_=new WeakMap,CS=new WeakMap;function SS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kS(t){return t.__v_skip||!Object.isExtensible(t)?0:SS(GC(t))}function Nt(t){return vr(t)?t:mf(t,!1,M_,ES,F_)}function AS(t){return mf(t,!1,mS,IS,$_)}function Bc(t){return mf(t,!0,gS,TS,U_)}function mf(t,e,n,s,i){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=kS(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ss(t){return vr(t)?Ss(t.__v_raw):!!(t&&t.__v_isReactive)}function vr(t){return!!(t&&t.__v_isReadonly)}function Bl(t){return!!(t&&t.__v_isShallow)}function V_(t){return Ss(t)||vr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function yr(t){return Ul(t,"__v_skip",!0),t}const Bo=t=>He(t)?Nt(t):t,vf=t=>He(t)?Bc(t):t;function B_(t){Cs&&mn&&(t=ce(t),D_(t.dep||(t.dep=hf())))}function j_(t,e){t=ce(t);const n=t.dep;n&&Vh(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function J(t){return H_(t,!1)}function yf(t){return H_(t,!0)}function H_(t,e){return Pe(t)?t:new RS(t,e)}class RS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Bo(e)}get value(){return B_(this),this._value}set value(e){const n=this.__v_isShallow||Bl(e)||vr(e);e=n?e:ce(e),Vo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bo(e),j_(this))}}function Je(t){return Pe(t)?t.value:t}const NS={get:(t,e,n)=>Je(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function W_(t){return Ss(t)?t:new Proxy(t,NS)}function jc(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=it(t,n);return e}class OS{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return sS(ce(this._object),this._key)}}function it(t,e,n){const s=t[e];return Pe(s)?s:new OS(t,e,n)}var z_;class xS{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[z_]=!1,this._dirty=!0,this.effect=new df(e,()=>{this._dirty||(this._dirty=!0,j_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ce(this);return B_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}z_="__v_isReadonly";function DS(t,e,n=!1){let s,i;const r=de(t);return r?(s=t,i=In):(s=t.get,i=t.set),new xS(s,i,r||!i,n)}function ks(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Hc(r,e,n)}return i}function ln(t,e,n,s){if(de(t)){const r=ks(t,e,n,s);return r&&C_(r)&&r.catch(o=>{Hc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ln(t[r],e,n,s));return i}function Hc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ks(l,null,10,[t,o,a]);return}}PS(t,n,i,s)}function PS(t,e,n,s=!0){console.error(t)}let jo=!1,Bh=!1;const Ot=[];let Dn=0;const ar=[];let Yn=null,ii=0;const q_=Promise.resolve();let _f=null;function Bs(t){const e=_f||q_;return t?e.then(this?t.bind(this):t):e}function LS(t){let e=Dn+1,n=Ot.length;for(;e<n;){const s=e+n>>>1;Ho(Ot[s])<t?e=s+1:n=s}return e}function wf(t){(!Ot.length||!Ot.includes(t,jo&&t.allowRecurse?Dn+1:Dn))&&(t.id==null?Ot.push(t):Ot.splice(LS(t.id),0,t),K_())}function K_(){!jo&&!Bh&&(Bh=!0,_f=q_.then(Y_))}function MS(t){const e=Ot.indexOf(t);e>Dn&&Ot.splice(e,1)}function FS(t){ie(t)?ar.push(...t):(!Yn||!Yn.includes(t,t.allowRecurse?ii+1:ii))&&ar.push(t),K_()}function Lg(t,e=jo?Dn+1:0){for(;e<Ot.length;e++){const n=Ot[e];n&&n.pre&&(Ot.splice(e,1),e--,n())}}function G_(t){if(ar.length){const e=[...new Set(ar)];if(ar.length=0,Yn){Yn.push(...e);return}for(Yn=e,Yn.sort((n,s)=>Ho(n)-Ho(s)),ii=0;ii<Yn.length;ii++)Yn[ii]();Yn=null,ii=0}}const Ho=t=>t.id==null?1/0:t.id,$S=(t,e)=>{const n=Ho(t)-Ho(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Y_(t){Bh=!1,jo=!0,Ot.sort($S);const e=In;try{for(Dn=0;Dn<Ot.length;Dn++){const n=Ot[Dn];n&&n.active!==!1&&ks(n,null,14)}}finally{Dn=0,Ot.length=0,G_(),jo=!1,_f=null,(Ot.length||ar.length)&&Y_()}}function US(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ve;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ve;d&&(i=n.map(f=>Qe(f)?f.trim():f)),h&&(i=n.map(XC))}let a,l=s[a=kl(e)]||s[a=kl(cn(e))];!l&&r&&(l=s[a=kl(Li(e))]),l&&ln(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ln(c,t,6,i)}}function Q_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!de(t)){const l=c=>{const u=Q_(c,e,!0);u&&(a=!0,gt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(He(t)&&s.set(t,null),null):(ie(r)?r.forEach(l=>o[l]=null):gt(o,r),He(t)&&s.set(t,o),o)}function Wc(t,e){return!t||!Mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Li(e))||Se(t,e))}let Xt=null,zc=null;function jl(t){const e=Xt;return Xt=t,zc=t&&t.type.__scopeId||null,e}function HH(t){zc=t}function WH(){zc=null}function nt(t,e=Xt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&qg(-1);const r=jl(e);let o;try{o=t(...i)}finally{jl(r),s._d&&qg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Yu(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:m}=t;let y,w;const E=jl(t);try{if(n.shapeFlag&4){const D=i||s;y=xn(u.call(D,D,h,r,f,d,p)),w=l}else{const D=e;y=xn(D.length>1?D(r,{attrs:l,slots:a,emit:c}):D(r,null)),w=e.props?l:VS(l)}}catch(D){Co.length=0,Hc(D,t,1),y=b(Tn)}let C=y;if(w&&m!==!1){const D=Object.keys(w),{shapeFlag:N}=C;D.length&&N&7&&(o&&D.some(of)&&(w=BS(w,o)),C=Ls(C,w))}return n.dirs&&(C=Ls(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,jl(E),y}const VS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mc(n))&&((e||(e={}))[n]=t[n]);return e},BS=(t,e)=>{const n={};for(const s in t)(!of(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jS(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Mg(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Wc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Mg(s,o,c):!0:!!o;return!1}function Mg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Wc(n,r))return!0}return!1}function HS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const WS=t=>t.__isSuspense;function zS(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):FS(t)}function Wt(t,e){if(Ze){let n=Ze.provides;const s=Ze.parent&&Ze.parent.provides;s===n&&(n=Ze.provides=Object.create(s)),n[t]=e}}function Le(t,e,n=!1){const s=Ze||Xt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&de(e)?e.call(s.proxy):e}}function ba(t,e){return bf(t,null,e)}const il={};function Ye(t,e,n){return bf(t,e,n)}function bf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ve){const a=R_()===(Ze==null?void 0:Ze.scope)?Ze:null;let l,c=!1,u=!1;if(Pe(t)?(l=()=>t.value,c=Bl(t)):Ss(t)?(l=()=>t,s=!0):ie(t)?(u=!0,c=t.some(C=>Ss(C)||Bl(C)),l=()=>t.map(C=>{if(Pe(C))return C.value;if(Ss(C))return ai(C);if(de(C))return ks(C,a,2)})):de(t)?e?l=()=>ks(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ln(t,a,3,[d])}:l=In,e&&s){const C=l;l=()=>ai(C())}let h,d=C=>{h=w.onStop=()=>{ks(C,a,4)}},f;if(Ko)if(d=In,e?n&&ln(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const C=Dk();f=C.__watcherHandles||(C.__watcherHandles=[])}else return In;let p=u?new Array(t.length).fill(il):il;const m=()=>{if(!!w.active)if(e){const C=w.run();(s||c||(u?C.some((D,N)=>Vo(D,p[N])):Vo(C,p)))&&(h&&h(),ln(e,a,3,[C,p===il?void 0:u&&p[0]===il?[]:p,d]),p=C)}else w.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>jt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>wf(m));const w=new df(l,y);e?n?m():p=w.run():i==="post"?jt(w.run.bind(w),a&&a.suspense):w.run();const E=()=>{w.stop(),a&&a.scope&&af(a.scope.effects,w)};return f&&f.push(E),E}function qS(t,e,n){const s=this.proxy,i=Qe(t)?t.includes(".")?X_(s,t):()=>s[t]:t.bind(s,s);let r;de(e)?r=e:(r=e.handler,n=e);const o=Ze;_r(this);const a=bf(i,r.bind(s),n);return o?_r(o):mi(),a}function X_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ai(t,e){if(!He(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))ai(t.value,e);else if(ie(t))for(let n=0;n<t.length;n++)ai(t[n],e);else if(T_(t)||or(t))t.forEach(n=>{ai(n,e)});else if(k_(t))for(const n in t)ai(t[n],e);return t}function J_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mi(()=>{t.isMounted=!0}),kn(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],KS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},setup(t,{slots:e}){const n=$r(),s=J_();let i;return()=>{const r=e.default&&Ef(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Tn){o=m;break}}const a=ce(t),{mode:l}=a;if(s.isLeaving)return Qu(o);const c=Fg(o);if(!c)return Qu(o);const u=Wo(c,a,s,n);zo(c,u);const h=n.subTree,d=h&&Fg(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,f=!0)}if(d&&d.type!==Tn&&(!ri(c,d)||f)){const m=Wo(d,a,s,n);if(zo(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Qu(o);l==="in-out"&&c.type!==Tn&&(m.delayLeave=(y,w,E)=>{const C=ew(s,d);C[String(d.key)]=d,y._leaveCb=()=>{w(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},Z_=KS;function ew(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Wo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:w,onAppearCancelled:E}=e,C=String(t.key),D=ew(n,t),N=(_,F)=>{_&&ln(_,s,9,F)},A=(_,F)=>{const $=F[1];N(_,F),ie(_)?_.every(q=>q.length<=1)&&$():_.length<=1&&$()},O={mode:r,persisted:o,beforeEnter(_){let F=a;if(!n.isMounted)if(i)F=m||a;else return;_._leaveCb&&_._leaveCb(!0);const $=D[C];$&&ri(t,$)&&$.el._leaveCb&&$.el._leaveCb(),N(F,[_])},enter(_){let F=l,$=c,q=u;if(!n.isMounted)if(i)F=y||l,$=w||c,q=E||u;else return;let V=!1;const he=_._enterCb=pe=>{V||(V=!0,pe?N(q,[_]):N($,[_]),O.delayedLeave&&O.delayedLeave(),_._enterCb=void 0)};F?A(F,[_,he]):he()},leave(_,F){const $=String(t.key);if(_._enterCb&&_._enterCb(!0),n.isUnmounting)return F();N(h,[_]);let q=!1;const V=_._leaveCb=he=>{q||(q=!0,F(),he?N(p,[_]):N(f,[_]),_._leaveCb=void 0,D[$]===t&&delete D[$])};D[$]=t,d?A(d,[_,V]):V()},clone(_){return Wo(_,e,n,s)}};return O}function Qu(t){if(qc(t))return t=Ls(t),t.children=null,t}function Fg(t){return qc(t)?t.children?t.children[0]:void 0:t}function zo(t,e){t.shapeFlag&6&&t.component?zo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ef(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===_t?(o.patchFlag&128&&i++,s=s.concat(Ef(o.children,e,a))):(e||o.type!==Tn)&&s.push(a!=null?Ls(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function js(t){return de(t)?{setup:t,name:t.name}:t}const Al=t=>!!t.type.__asyncLoader,qc=t=>t.type.__isKeepAlive;function tw(t,e){sw(t,"a",e)}function nw(t,e){sw(t,"da",e)}function sw(t,e,n=Ze){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)qc(i.parent.vnode)&&GS(s,e,n,i),i=i.parent}}function GS(t,e,n,s){const i=Kc(e,t,s,!0);rw(()=>{af(s[e],i)},n)}function Kc(t,e,n=Ze,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Lr(),_r(n);const a=ln(e,n,t,o);return mi(),Mr(),a});return s?i.unshift(r):i.push(r),r}}const cs=t=>(e,n=Ze)=>(!Ko||t==="sp")&&Kc(t,(...s)=>e(...s),n),If=cs("bm"),Mi=cs("m"),YS=cs("bu"),iw=cs("u"),kn=cs("bum"),rw=cs("um"),QS=cs("sp"),XS=cs("rtg"),JS=cs("rtc");function ZS(t,e=Ze){Kc("ec",t,e)}function Hl(t,e){const n=Xt;if(n===null)return t;const s=Yc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ve]=e[r];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&ai(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Qs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Lr(),ln(l,n,8,[t.el,a,t,e]),Mr())}}const Tf="components",ek="directives";function ow(t,e){return Sf(Tf,t,!0,e)||t}const aw=Symbol();function lw(t){return Qe(t)?Sf(Tf,t,!1)||t:t||aw}function Cf(t){return Sf(ek,t)}function Sf(t,e,n=!0,s=!1){const i=Xt||Ze;if(i){const r=i.type;if(t===Tf){const a=Nk(r,!1);if(a&&(a===e||a===cn(e)||a===Pr(cn(e))))return r}const o=$g(i[t]||r[t],e)||$g(i.appContext[t],e);return!o&&s?r:o}}function $g(t,e){return t&&(t[e]||t[cn(e)]||t[Pr(cn(e))])}function zH(t,e,n,s){let i;const r=n&&n[s];if(ie(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(He(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function qH(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(ie(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function KH(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:kl(s)]=t[s];return n}const jh=t=>t?_w(t)?Yc(t)||t.proxy:jh(t.parent):null,Io=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jh(t.parent),$root:t=>jh(t.root),$emit:t=>t.emit,$options:t=>kf(t),$forceUpdate:t=>t.f||(t.f=()=>wf(t.update)),$nextTick:t=>t.n||(t.n=Bs.bind(t.proxy)),$watch:t=>qS.bind(t)}),Xu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Se(t,e),tk={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xu(s,e))return o[e]=1,s[e];if(i!==Ve&&Se(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Se(c,e))return o[e]=3,r[e];if(n!==Ve&&Se(n,e))return o[e]=4,n[e];Hh&&(o[e]=0)}}const u=Io[e];let h,d;if(u)return e==="$attrs"&&qt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&Se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xu(i,e)?(i[e]=n,!0):s!==Ve&&Se(s,e)?(s[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ve&&Se(t,o)||Xu(e,o)||(a=r[0])&&Se(a,o)||Se(s,o)||Se(Io,o)||Se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Hh=!0;function nk(t){const e=kf(t),n=t.proxy,s=t.ctx;Hh=!1,e.beforeCreate&&Ug(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:y,beforeDestroy:w,beforeUnmount:E,destroyed:C,unmounted:D,render:N,renderTracked:A,renderTriggered:O,errorCaptured:_,serverPrefetch:F,expose:$,inheritAttrs:q,components:V,directives:he,filters:pe}=e;if(c&&sk(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const fe=o[Q];de(fe)&&(s[Q]=fe.bind(n))}if(i){const Q=i.call(n,n);He(Q)&&(t.data=Nt(Q))}if(Hh=!0,r)for(const Q in r){const fe=r[Q],Ae=de(fe)?fe.bind(n,n):de(fe.get)?fe.get.bind(n,n):In,Bt=!de(fe)&&de(fe.set)?fe.set.bind(n):In,rt=I({get:Ae,set:Bt});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>rt.value,set:$e=>rt.value=$e})}if(a)for(const Q in a)cw(a[Q],s,n,Q);if(l){const Q=de(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(fe=>{Wt(fe,Q[fe])})}u&&Ug(u,t,"c");function be(Q,fe){ie(fe)?fe.forEach(Ae=>Q(Ae.bind(n))):fe&&Q(fe.bind(n))}if(be(If,h),be(Mi,d),be(YS,f),be(iw,p),be(tw,m),be(nw,y),be(ZS,_),be(JS,A),be(XS,O),be(kn,E),be(rw,D),be(QS,F),ie($))if($.length){const Q=t.exposed||(t.exposed={});$.forEach(fe=>{Object.defineProperty(Q,fe,{get:()=>n[fe],set:Ae=>n[fe]=Ae})})}else t.exposed||(t.exposed={});N&&t.render===In&&(t.render=N),q!=null&&(t.inheritAttrs=q),V&&(t.components=V),he&&(t.directives=he)}function sk(t,e,n=In,s=!1){ie(t)&&(t=Wh(t));for(const i in t){const r=t[i];let o;He(r)?"default"in r?o=Le(r.from||i,r.default,!0):o=Le(r.from||i):o=Le(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Ug(t,e,n){ln(ie(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cw(t,e,n,s){const i=s.includes(".")?X_(n,s):()=>n[s];if(Qe(t)){const r=e[t];de(r)&&Ye(i,r)}else if(de(t))Ye(i,t.bind(n));else if(He(t))if(ie(t))t.forEach(r=>cw(r,e,n,s));else{const r=de(t.handler)?t.handler.bind(n):e[t.handler];de(r)&&Ye(i,r,t)}}function kf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Wl(l,c,o,!0)),Wl(l,e,o)),He(e)&&r.set(e,l),l}function Wl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Wl(t,r,n,!0),i&&i.forEach(o=>Wl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ik[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ik={data:Vg,props:ti,emits:ti,methods:ti,computed:ti,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:ti,directives:ti,watch:ok,provide:Vg,inject:rk};function Vg(t,e){return e?t?function(){return gt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function rk(t,e){return ti(Wh(t),Wh(e))}function Wh(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function ti(t,e){return t?gt(gt(Object.create(null),t),e):e}function ok(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const s in e)n[s]=$t(t[s],e[s]);return n}function ak(t,e,n,s=!1){const i={},r={};Ul(r,Gc,1),t.propsDefaults=Object.create(null),uw(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:AS(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function lk(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ce(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Wc(t.emitsOptions,d))continue;const f=e[d];if(l)if(Se(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=cn(d);i[p]=zh(l,a,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{uw(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Se(e,h)&&((u=Li(h))===h||!Se(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=zh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Se(e,h)&&!0)&&(delete r[h],c=!0)}c&&ns(t,"set","$attrs")}function uw(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sl(l))continue;const c=e[l];let u;i&&Se(i,u=cn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Wc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ce(n),c=a||Ve;for(let u=0;u<r.length;u++){const h=r[u];n[h]=zh(i,l,h,c[h],t,!Se(c,h))}}return o}function zh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&de(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(_r(i),s=c[n]=l.call(null,e),mi())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Li(n))&&(s=!0))}return s}function hw(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!de(t)){const u=h=>{l=!0;const[d,f]=hw(h,e,!0);gt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return He(t)&&s.set(t,rr),rr;if(ie(r))for(let u=0;u<r.length;u++){const h=cn(r[u]);Bg(h)&&(o[h]=Ve)}else if(r)for(const u in r){const h=cn(u);if(Bg(h)){const d=r[u],f=o[h]=ie(d)||de(d)?{type:d}:Object.assign({},d);if(f){const p=Wg(Boolean,f.type),m=Wg(String,f.type);f[0]=p>-1,f[1]=m<0||p<m,(p>-1||Se(f,"default"))&&a.push(h)}}}const c=[o,a];return He(t)&&s.set(t,c),c}function Bg(t){return t[0]!=="$"}function jg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hg(t,e){return jg(t)===jg(e)}function Wg(t,e){return ie(e)?e.findIndex(n=>Hg(n,t)):de(e)&&Hg(e,t)?0:-1}const dw=t=>t[0]==="_"||t==="$stable",Af=t=>ie(t)?t.map(xn):[xn(t)],ck=(t,e,n)=>{if(e._n)return e;const s=nt((...i)=>Af(e(...i)),n);return s._c=!1,s},fw=(t,e,n)=>{const s=t._ctx;for(const i in t){if(dw(i))continue;const r=t[i];if(de(r))e[i]=ck(i,r,s);else if(r!=null){const o=Af(r);e[i]=()=>o}}},pw=(t,e)=>{const n=Af(e);t.slots.default=()=>n},uk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Ul(e,"_",n)):fw(e,t.slots={})}else t.slots={},e&&pw(t,e);Ul(t.slots,Gc,1)},hk=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(gt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,fw(e,i)),o=e}else e&&(pw(t,e),o={default:1});if(r)for(const a in i)!dw(a)&&!(a in o)&&delete i[a]};function gw(){return{app:null,config:{isNativeTag:zC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dk=0;function fk(t,e){return function(s,i=null){de(s)||(s=Object.assign({},s)),i!=null&&!He(i)&&(i=null);const r=gw(),o=new Set;let a=!1;const l=r.app={_uid:dk++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Pk,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&de(c.install)?(o.add(c),c.install(l,...u)):de(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=b(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Yc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function qh(t,e,n,s,i=!1){if(ie(t)){t.forEach((d,f)=>qh(d,e&&(ie(e)?e[f]:e),n,s,i));return}if(Al(s)&&!i)return;const r=s.shapeFlag&4?Yc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Qe(c)?(u[c]=null,Se(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),de(l))ks(l,a,12,[o,u]);else{const d=Qe(l),f=Pe(l);if(d||f){const p=()=>{if(t.f){const m=d?Se(h,l)?h[l]:u[l]:l.value;i?ie(m)&&af(m,r):ie(m)?m.includes(r)||m.push(r):d?(u[l]=[r],Se(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Se(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,jt(p,n)):p()}}}const jt=zS;function pk(t){return gk(t)}function gk(t,e){const n=ZC();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=In,insertStaticContent:p}=t,m=(g,v,T,S=null,R=null,j=null,z=!1,U=null,H=!!v.dynamicChildren)=>{if(g===v)return;g&&!ri(g,v)&&(S=B(g),$e(g,R,j,!0),g=null),v.patchFlag===-2&&(H=!1,v.dynamicChildren=null);const{type:x,ref:Z,shapeFlag:K}=v;switch(x){case Ea:y(g,v,T,S);break;case Tn:w(g,v,T,S);break;case Ju:g==null&&E(v,T,S,z);break;case _t:V(g,v,T,S,R,j,z,U,H);break;default:K&1?N(g,v,T,S,R,j,z,U,H):K&6?he(g,v,T,S,R,j,z,U,H):(K&64||K&128)&&x.process(g,v,T,S,R,j,z,U,H,Ce)}Z!=null&&R&&qh(Z,g&&g.ref,j,v||g,!v)},y=(g,v,T,S)=>{if(g==null)s(v.el=a(v.children),T,S);else{const R=v.el=g.el;v.children!==g.children&&c(R,v.children)}},w=(g,v,T,S)=>{g==null?s(v.el=l(v.children||""),T,S):v.el=g.el},E=(g,v,T,S)=>{[g.el,g.anchor]=p(g.children,v,T,S,g.el,g.anchor)},C=({el:g,anchor:v},T,S)=>{let R;for(;g&&g!==v;)R=d(g),s(g,T,S),g=R;s(v,T,S)},D=({el:g,anchor:v})=>{let T;for(;g&&g!==v;)T=d(g),i(g),g=T;i(v)},N=(g,v,T,S,R,j,z,U,H)=>{z=z||v.type==="svg",g==null?A(v,T,S,R,j,z,U,H):F(g,v,R,j,z,U,H)},A=(g,v,T,S,R,j,z,U)=>{let H,x;const{type:Z,props:K,shapeFlag:ee,transition:ae,dirs:ye}=g;if(H=g.el=o(g.type,j,K&&K.is,K),ee&8?u(H,g.children):ee&16&&_(g.children,H,null,S,R,j&&Z!=="foreignObject",z,U),ye&&Qs(g,null,S,"created"),O(H,g,g.scopeId,z,S),K){for(const xe in K)xe!=="value"&&!Sl(xe)&&r(H,xe,null,K[xe],j,g.children,S,R,M);"value"in K&&r(H,"value",null,K.value),(x=K.onVnodeBeforeMount)&&On(x,S,g)}ye&&Qs(g,null,S,"beforeMount");const Fe=(!R||R&&!R.pendingBranch)&&ae&&!ae.persisted;Fe&&ae.beforeEnter(H),s(H,v,T),((x=K&&K.onVnodeMounted)||Fe||ye)&&jt(()=>{x&&On(x,S,g),Fe&&ae.enter(H),ye&&Qs(g,null,S,"mounted")},R)},O=(g,v,T,S,R)=>{if(T&&f(g,T),S)for(let j=0;j<S.length;j++)f(g,S[j]);if(R){let j=R.subTree;if(v===j){const z=R.vnode;O(g,z,z.scopeId,z.slotScopeIds,R.parent)}}},_=(g,v,T,S,R,j,z,U,H=0)=>{for(let x=H;x<g.length;x++){const Z=g[x]=U?_s(g[x]):xn(g[x]);m(null,Z,v,T,S,R,j,z,U)}},F=(g,v,T,S,R,j,z)=>{const U=v.el=g.el;let{patchFlag:H,dynamicChildren:x,dirs:Z}=v;H|=g.patchFlag&16;const K=g.props||Ve,ee=v.props||Ve;let ae;T&&Xs(T,!1),(ae=ee.onVnodeBeforeUpdate)&&On(ae,T,v,g),Z&&Qs(v,g,T,"beforeUpdate"),T&&Xs(T,!0);const ye=R&&v.type!=="foreignObject";if(x?$(g.dynamicChildren,x,U,T,S,ye,j):z||fe(g,v,U,null,T,S,ye,j,!1),H>0){if(H&16)q(U,v,K,ee,T,S,R);else if(H&2&&K.class!==ee.class&&r(U,"class",null,ee.class,R),H&4&&r(U,"style",K.style,ee.style,R),H&8){const Fe=v.dynamicProps;for(let xe=0;xe<Fe.length;xe++){const et=Fe[xe],gn=K[et],qi=ee[et];(qi!==gn||et==="value")&&r(U,et,gn,qi,R,g.children,T,S,M)}}H&1&&g.children!==v.children&&u(U,v.children)}else!z&&x==null&&q(U,v,K,ee,T,S,R);((ae=ee.onVnodeUpdated)||Z)&&jt(()=>{ae&&On(ae,T,v,g),Z&&Qs(v,g,T,"updated")},S)},$=(g,v,T,S,R,j,z)=>{for(let U=0;U<v.length;U++){const H=g[U],x=v[U],Z=H.el&&(H.type===_t||!ri(H,x)||H.shapeFlag&70)?h(H.el):T;m(H,x,Z,null,S,R,j,z,!0)}},q=(g,v,T,S,R,j,z)=>{if(T!==S){if(T!==Ve)for(const U in T)!Sl(U)&&!(U in S)&&r(g,U,T[U],null,z,v.children,R,j,M);for(const U in S){if(Sl(U))continue;const H=S[U],x=T[U];H!==x&&U!=="value"&&r(g,U,x,H,z,v.children,R,j,M)}"value"in S&&r(g,"value",T.value,S.value)}},V=(g,v,T,S,R,j,z,U,H)=>{const x=v.el=g?g.el:a(""),Z=v.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:ae}=v;ae&&(U=U?U.concat(ae):ae),g==null?(s(x,T,S),s(Z,T,S),_(v.children,T,Z,R,j,z,U,H)):K>0&&K&64&&ee&&g.dynamicChildren?($(g.dynamicChildren,ee,T,R,j,z,U),(v.key!=null||R&&v===R.subTree)&&Rf(g,v,!0)):fe(g,v,T,Z,R,j,z,U,H)},he=(g,v,T,S,R,j,z,U,H)=>{v.slotScopeIds=U,g==null?v.shapeFlag&512?R.ctx.activate(v,T,S,z,H):pe(v,T,S,R,j,z,H):me(g,v,H)},pe=(g,v,T,S,R,j,z)=>{const U=g.component=Ck(g,S,R);if(qc(g)&&(U.ctx.renderer=Ce),Sk(U),U.asyncDep){if(R&&R.registerDep(U,be),!g.el){const H=U.subTree=b(Tn);w(null,H,v,T)}return}be(U,g,v,T,R,j,z)},me=(g,v,T)=>{const S=v.component=g.component;if(jS(g,v,T))if(S.asyncDep&&!S.asyncResolved){Q(S,v,T);return}else S.next=v,MS(S.update),S.update();else v.el=g.el,S.vnode=v},be=(g,v,T,S,R,j,z)=>{const U=()=>{if(g.isMounted){let{next:Z,bu:K,u:ee,parent:ae,vnode:ye}=g,Fe=Z,xe;Xs(g,!1),Z?(Z.el=ye.el,Q(g,Z,z)):Z=ye,K&&Gu(K),(xe=Z.props&&Z.props.onVnodeBeforeUpdate)&&On(xe,ae,Z,ye),Xs(g,!0);const et=Yu(g),gn=g.subTree;g.subTree=et,m(gn,et,h(gn.el),B(gn),g,R,j),Z.el=et.el,Fe===null&&HS(g,et.el),ee&&jt(ee,R),(xe=Z.props&&Z.props.onVnodeUpdated)&&jt(()=>On(xe,ae,Z,ye),R)}else{let Z;const{el:K,props:ee}=v,{bm:ae,m:ye,parent:Fe}=g,xe=Al(v);if(Xs(g,!1),ae&&Gu(ae),!xe&&(Z=ee&&ee.onVnodeBeforeMount)&&On(Z,Fe,v),Xs(g,!0),K&&ge){const et=()=>{g.subTree=Yu(g),ge(K,g.subTree,g,R,null)};xe?v.type.__asyncLoader().then(()=>!g.isUnmounted&&et()):et()}else{const et=g.subTree=Yu(g);m(null,et,T,S,g,R,j),v.el=et.el}if(ye&&jt(ye,R),!xe&&(Z=ee&&ee.onVnodeMounted)){const et=v;jt(()=>On(Z,Fe,et),R)}(v.shapeFlag&256||Fe&&Al(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&g.a&&jt(g.a,R),g.isMounted=!0,v=T=S=null}},H=g.effect=new df(U,()=>wf(x),g.scope),x=g.update=()=>H.run();x.id=g.uid,Xs(g,!0),x()},Q=(g,v,T)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,lk(g,v.props,S,T),hk(g,v.children,T),Lr(),Lg(),Mr()},fe=(g,v,T,S,R,j,z,U,H=!1)=>{const x=g&&g.children,Z=g?g.shapeFlag:0,K=v.children,{patchFlag:ee,shapeFlag:ae}=v;if(ee>0){if(ee&128){Bt(x,K,T,S,R,j,z,U,H);return}else if(ee&256){Ae(x,K,T,S,R,j,z,U,H);return}}ae&8?(Z&16&&M(x,R,j),K!==x&&u(T,K)):Z&16?ae&16?Bt(x,K,T,S,R,j,z,U,H):M(x,R,j,!0):(Z&8&&u(T,""),ae&16&&_(K,T,S,R,j,z,U,H))},Ae=(g,v,T,S,R,j,z,U,H)=>{g=g||rr,v=v||rr;const x=g.length,Z=v.length,K=Math.min(x,Z);let ee;for(ee=0;ee<K;ee++){const ae=v[ee]=H?_s(v[ee]):xn(v[ee]);m(g[ee],ae,T,null,R,j,z,U,H)}x>Z?M(g,R,j,!0,!1,K):_(v,T,S,R,j,z,U,H,K)},Bt=(g,v,T,S,R,j,z,U,H)=>{let x=0;const Z=v.length;let K=g.length-1,ee=Z-1;for(;x<=K&&x<=ee;){const ae=g[x],ye=v[x]=H?_s(v[x]):xn(v[x]);if(ri(ae,ye))m(ae,ye,T,null,R,j,z,U,H);else break;x++}for(;x<=K&&x<=ee;){const ae=g[K],ye=v[ee]=H?_s(v[ee]):xn(v[ee]);if(ri(ae,ye))m(ae,ye,T,null,R,j,z,U,H);else break;K--,ee--}if(x>K){if(x<=ee){const ae=ee+1,ye=ae<Z?v[ae].el:S;for(;x<=ee;)m(null,v[x]=H?_s(v[x]):xn(v[x]),T,ye,R,j,z,U,H),x++}}else if(x>ee)for(;x<=K;)$e(g[x],R,j,!0),x++;else{const ae=x,ye=x,Fe=new Map;for(x=ye;x<=ee;x++){const Gt=v[x]=H?_s(v[x]):xn(v[x]);Gt.key!=null&&Fe.set(Gt.key,x)}let xe,et=0;const gn=ee-ye+1;let qi=!1,Tg=0;const so=new Array(gn);for(x=0;x<gn;x++)so[x]=0;for(x=ae;x<=K;x++){const Gt=g[x];if(et>=gn){$e(Gt,R,j,!0);continue}let Nn;if(Gt.key!=null)Nn=Fe.get(Gt.key);else for(xe=ye;xe<=ee;xe++)if(so[xe-ye]===0&&ri(Gt,v[xe])){Nn=xe;break}Nn===void 0?$e(Gt,R,j,!0):(so[Nn-ye]=x+1,Nn>=Tg?Tg=Nn:qi=!0,m(Gt,v[Nn],T,null,R,j,z,U,H),et++)}const Cg=qi?mk(so):rr;for(xe=Cg.length-1,x=gn-1;x>=0;x--){const Gt=ye+x,Nn=v[Gt],Sg=Gt+1<Z?v[Gt+1].el:S;so[x]===0?m(null,Nn,T,Sg,R,j,z,U,H):qi&&(xe<0||x!==Cg[xe]?rt(Nn,T,Sg,2):xe--)}}},rt=(g,v,T,S,R=null)=>{const{el:j,type:z,transition:U,children:H,shapeFlag:x}=g;if(x&6){rt(g.component.subTree,v,T,S);return}if(x&128){g.suspense.move(v,T,S);return}if(x&64){z.move(g,v,T,Ce);return}if(z===_t){s(j,v,T);for(let K=0;K<H.length;K++)rt(H[K],v,T,S);s(g.anchor,v,T);return}if(z===Ju){C(g,v,T);return}if(S!==2&&x&1&&U)if(S===0)U.beforeEnter(j),s(j,v,T),jt(()=>U.enter(j),R);else{const{leave:K,delayLeave:ee,afterLeave:ae}=U,ye=()=>s(j,v,T),Fe=()=>{K(j,()=>{ye(),ae&&ae()})};ee?ee(j,ye,Fe):Fe()}else s(j,v,T)},$e=(g,v,T,S=!1,R=!1)=>{const{type:j,props:z,ref:U,children:H,dynamicChildren:x,shapeFlag:Z,patchFlag:K,dirs:ee}=g;if(U!=null&&qh(U,null,T,g,!0),Z&256){v.ctx.deactivate(g);return}const ae=Z&1&&ee,ye=!Al(g);let Fe;if(ye&&(Fe=z&&z.onVnodeBeforeUnmount)&&On(Fe,v,g),Z&6)k(g.component,T,S);else{if(Z&128){g.suspense.unmount(T,S);return}ae&&Qs(g,null,v,"beforeUnmount"),Z&64?g.type.remove(g,v,T,R,Ce,S):x&&(j!==_t||K>0&&K&64)?M(x,v,T,!1,!0):(j===_t&&K&384||!R&&Z&16)&&M(H,v,T),S&&Tt(g)}(ye&&(Fe=z&&z.onVnodeUnmounted)||ae)&&jt(()=>{Fe&&On(Fe,v,g),ae&&Qs(g,null,v,"unmounted")},T)},Tt=g=>{const{type:v,el:T,anchor:S,transition:R}=g;if(v===_t){Rn(T,S);return}if(v===Ju){D(g);return}const j=()=>{i(T),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:z,delayLeave:U}=R,H=()=>z(T,j);U?U(g.el,j,H):H()}else j()},Rn=(g,v)=>{let T;for(;g!==v;)T=d(g),i(g),g=T;i(v)},k=(g,v,T)=>{const{bum:S,scope:R,update:j,subTree:z,um:U}=g;S&&Gu(S),R.stop(),j&&(j.active=!1,$e(z,g,v,T)),U&&jt(U,v),jt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},M=(g,v,T,S=!1,R=!1,j=0)=>{for(let z=j;z<g.length;z++)$e(g[z],v,T,S,R)},B=g=>g.shapeFlag&6?B(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),X=(g,v,T)=>{g==null?v._vnode&&$e(v._vnode,null,null,!0):m(v._vnode||null,g,v,null,null,null,T),Lg(),G_(),v._vnode=g},Ce={p:m,um:$e,m:rt,r:Tt,mt:pe,mc:_,pc:fe,pbc:$,n:B,o:t};let Ge,ge;return e&&([Ge,ge]=e(Ce)),{render:X,hydrate:Ge,createApp:fk(X,Ge)}}function Xs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rf(t,e,n=!1){const s=t.children,i=e.children;if(ie(s)&&ie(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=_s(i[r]),a.el=o.el),n||Rf(o,a)),a.type===Ea&&(a.el=o.el)}}function mk(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const vk=t=>t.__isTeleport,To=t=>t&&(t.disabled||t.disabled===""),zg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Kh=(t,e)=>{const n=t&&t.to;return Qe(n)?e?e(n):null:n},yk={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:y}}=c,w=To(e.props);let{shapeFlag:E,children:C,dynamicChildren:D}=e;if(t==null){const N=e.el=m(""),A=e.anchor=m("");f(N,n,s),f(A,n,s);const O=e.target=Kh(e.props,p),_=e.targetAnchor=m("");O&&(f(_,O),o=o||zg(O));const F=($,q)=>{E&16&&u(C,$,q,i,r,o,a,l)};w?F(n,A):O&&F(O,_)}else{e.el=t.el;const N=e.anchor=t.anchor,A=e.target=t.target,O=e.targetAnchor=t.targetAnchor,_=To(t.props),F=_?n:A,$=_?N:O;if(o=o||zg(A),D?(d(t.dynamicChildren,D,F,i,r,o,a),Rf(t,e,!0)):l||h(t,e,F,$,i,r,o,a,!1),w)_||rl(e,n,N,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const q=e.target=Kh(e.props,p);q&&rl(e,q,null,c,0)}else _&&rl(e,A,O,c,1)}mw(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!To(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const p=l[f];i(p,e,n,!0,!!p.dynamicChildren)}},move:rl,hydrate:_k};function rl(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||To(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function _k(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Kh(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(To(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}mw(e)}return e.anchor&&o(e.anchor)}const GH=yk;function mw(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const _t=Symbol(void 0),Ea=Symbol(void 0),Tn=Symbol(void 0),Ju=Symbol(void 0),Co=[];let _n=null;function vn(t=!1){Co.push(_n=t?null:[])}function wk(){Co.pop(),_n=Co[Co.length-1]||null}let qo=1;function qg(t){qo+=t}function vw(t){return t.dynamicChildren=qo>0?_n||rr:null,wk(),qo>0&&_n&&_n.push(t),t}function Kg(t,e,n,s,i,r){return vw(Fr(t,e,n,s,i,r,!0))}function es(t,e,n,s,i){return vw(b(t,e,n,s,i,!0))}function Gh(t){return t?t.__v_isVNode===!0:!1}function ri(t,e){return t.type===e.type&&t.key===e.key}const Gc="__vInternal",yw=({key:t})=>t!=null?t:null,Rl=({ref:t,ref_key:e,ref_for:n})=>t!=null?Qe(t)||Pe(t)||de(t)?{i:Xt,r:t,k:e,f:!!n}:t:null;function Fr(t,e=null,n=null,s=0,i=null,r=t===_t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yw(e),ref:e&&Rl(e),scopeId:zc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xt};return a?(Nf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),qo>0&&!o&&_n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_n.push(l),l}const b=bk;function bk(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===aw)&&(t=Tn),Gh(t)){const a=Ls(t,e,!0);return n&&Nf(a,n),qo>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag|=-2,a}if(Ok(t)&&(t=t.__vccOpts),e){e=Ek(e);let{class:a,style:l}=e;a&&!Qe(a)&&(e.class=rf(a)),He(l)&&(V_(l)&&!ie(l)&&(l=gt({},l)),e.style=Lc(l))}const o=Qe(t)?1:WS(t)?128:vk(t)?64:He(t)?4:de(t)?2:0;return Fr(t,e,n,s,i,o,r,!0)}function Ek(t){return t?V_(t)||Gc in t?gt({},t):t:null}function Ls(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Fi(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yw(a),ref:e&&e.ref?n&&i?ie(i)?i.concat(Rl(e)):[i,Rl(e)]:Rl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ls(t.ssContent),ssFallback:t.ssFallback&&Ls(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function lr(t=" ",e=0){return b(Ea,null,t,e)}function YH(t="",e=!1){return e?(vn(),es(Tn,null,t)):b(Tn,null,t)}function xn(t){return t==null||typeof t=="boolean"?b(Tn):ie(t)?b(_t,null,t.slice()):typeof t=="object"?_s(t):b(Ea,null,String(t))}function _s(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ls(t)}function Nf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Nf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Gc in e)?e._ctx=Xt:i===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),s&64?(n=16,e=[lr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fi(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=rf([e.class,s.class]));else if(i==="style")e.style=Lc([e.style,s.style]);else if(Mc(i)){const r=e[i],o=s[i];o&&r!==o&&!(ie(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function On(t,e,n,s=null){ln(t,e,7,[n,s])}const Ik=gw();let Tk=0;function Ck(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Ik,r={uid:Tk++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new A_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hw(s,i),emitsOptions:Q_(s,i),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:s.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=US.bind(null,r),t.ce&&t.ce(r),r}let Ze=null;const $r=()=>Ze||Xt,_r=t=>{Ze=t,t.scope.on()},mi=()=>{Ze&&Ze.scope.off(),Ze=null};function _w(t){return t.vnode.shapeFlag&4}let Ko=!1;function Sk(t,e=!1){Ko=e;const{props:n,children:s}=t.vnode,i=_w(t);ak(t,n,i,e),uk(t,s);const r=i?kk(t,e):void 0;return Ko=!1,r}function kk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=yr(new Proxy(t.ctx,tk));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Rk(t):null;_r(t),Lr();const r=ks(s,t,0,[t.props,i]);if(Mr(),mi(),C_(r)){if(r.then(mi,mi),e)return r.then(o=>{Gg(t,o,e)}).catch(o=>{Hc(o,t,0)});t.asyncDep=r}else Gg(t,r,e)}else ww(t,e)}function Gg(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=W_(e)),ww(t,n)}let Yg;function ww(t,e,n){const s=t.type;if(!t.render){if(!e&&Yg&&!s.render){const i=s.template||kf(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=gt(gt({isCustomElement:r,delimiters:a},o),l);s.render=Yg(i,c)}}t.render=s.render||In}_r(t),Lr(),nk(t),Mr(),mi()}function Ak(t){return new Proxy(t.attrs,{get(e,n){return qt(t,"get","$attrs"),e[n]}})}function Rk(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Ak(t))},slots:t.slots,emit:t.emit,expose:e}}function Yc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(W_(yr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Io)return Io[n](t)},has(e,n){return n in e||n in Io}}))}function Nk(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Ok(t){return de(t)&&"__vccOpts"in t}const I=(t,e)=>DS(t,e,Ko);function us(t,e,n){const s=arguments.length;return s===2?He(e)&&!ie(e)?Gh(e)?b(t,null,[e]):b(t,e):b(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Gh(n)&&(n=[n]),b(t,e,n))}const xk=Symbol(""),Dk=()=>Le(xk),Pk="3.2.47",Lk="http://www.w3.org/2000/svg",oi=typeof document<"u"?document:null,Qg=oi&&oi.createElement("template"),Mk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?oi.createElementNS(Lk,t):oi.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>oi.createTextNode(t),createComment:t=>oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Qg.innerHTML=s?`<svg>${t}</svg>`:t;const a=Qg.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Fk(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $k(t,e,n){const s=t.style,i=Qe(n);if(n&&!i){if(e&&!Qe(e))for(const r in e)n[r]==null&&Yh(s,r,"");for(const r in n)Yh(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Xg=/\s*!important$/;function Yh(t,e,n){if(ie(n))n.forEach(s=>Yh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Uk(t,e);Xg.test(n)?t.setProperty(Li(s),n.replace(Xg,""),"important"):t[s]=n}}const Jg=["Webkit","Moz","ms"],Zu={};function Uk(t,e){const n=Zu[e];if(n)return n;let s=cn(e);if(s!=="filter"&&s in t)return Zu[e]=s;s=Pr(s);for(let i=0;i<Jg.length;i++){const r=Jg[i]+s;if(r in t)return Zu[e]=r}return e}const Zg="http://www.w3.org/1999/xlink";function Vk(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zg,e.slice(6,e.length)):t.setAttributeNS(Zg,e,n);else{const r=HC(e);n==null||r&&!E_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Bk(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=E_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function jk(t,e,n,s){t.addEventListener(e,n,s)}function Hk(t,e,n,s){t.removeEventListener(e,n,s)}function Wk(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=zk(e);if(s){const c=r[e]=Gk(s,i);jk(t,a,c,l)}else o&&(Hk(t,a,o,l),r[e]=void 0)}}const em=/(?:Once|Passive|Capture)$/;function zk(t){let e;if(em.test(t)){e={};let s;for(;s=t.match(em);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Li(t.slice(2)),e]}let eh=0;const qk=Promise.resolve(),Kk=()=>eh||(qk.then(()=>eh=0),eh=Date.now());function Gk(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ln(Yk(s,n.value),e,5,[s])};return n.value=t,n.attached=Kk(),n}function Yk(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const tm=/^on[a-z]/,Qk=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Fk(t,s,i):e==="style"?$k(t,n,s):Mc(e)?of(e)||Wk(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xk(t,e,s,i))?Bk(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Vk(t,e,s,i))};function Xk(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&tm.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||tm.test(e)&&Qe(n)?!1:e in t}const fs="transition",io="animation",Hs=(t,{slots:e})=>us(Z_,Ew(t),e);Hs.displayName="Transition";const bw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Jk=Hs.props=gt({},Z_.props,bw),Js=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},nm=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Ew(t){const e={};for(const V in t)V in bw||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Zk(i),m=p&&p[0],y=p&&p[1],{onBeforeEnter:w,onEnter:E,onEnterCancelled:C,onLeave:D,onLeaveCancelled:N,onBeforeAppear:A=w,onAppear:O=E,onAppearCancelled:_=C}=e,F=(V,he,pe)=>{ms(V,he?u:a),ms(V,he?c:o),pe&&pe()},$=(V,he)=>{V._isLeaving=!1,ms(V,h),ms(V,f),ms(V,d),he&&he()},q=V=>(he,pe)=>{const me=V?O:E,be=()=>F(he,V,pe);Js(me,[he,be]),sm(()=>{ms(he,V?l:r),Gn(he,V?u:a),nm(me)||im(he,s,m,be)})};return gt(e,{onBeforeEnter(V){Js(w,[V]),Gn(V,r),Gn(V,o)},onBeforeAppear(V){Js(A,[V]),Gn(V,l),Gn(V,c)},onEnter:q(!1),onAppear:q(!0),onLeave(V,he){V._isLeaving=!0;const pe=()=>$(V,he);Gn(V,h),Tw(),Gn(V,d),sm(()=>{!V._isLeaving||(ms(V,h),Gn(V,f),nm(D)||im(V,s,y,pe))}),Js(D,[V,pe])},onEnterCancelled(V){F(V,!1),Js(C,[V])},onAppearCancelled(V){F(V,!0),Js(_,[V])},onLeaveCancelled(V){$(V),Js(N,[V])}})}function Zk(t){if(t==null)return null;if(He(t))return[th(t.enter),th(t.leave)];{const e=th(t);return[e,e]}}function th(t){return JC(t)}function Gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ms(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function sm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let eA=0;function im(t,e,n,s){const i=t._endId=++eA,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Iw(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Iw(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),i=s(`${fs}Delay`),r=s(`${fs}Duration`),o=rm(i,r),a=s(`${io}Delay`),l=s(`${io}Duration`),c=rm(a,l);let u=null,h=0,d=0;e===fs?o>0&&(u=fs,h=o,d=r.length):e===io?c>0&&(u=io,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?fs:io:null,d=u?u===fs?r.length:l.length:0);const f=u===fs&&/\b(transform|all)(,|$)/.test(s(`${fs}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function rm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>om(n)+om(t[s])))}function om(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Tw(){return document.body.offsetHeight}const Cw=new WeakMap,Sw=new WeakMap,kw={name:"TransitionGroup",props:gt({},Jk,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=$r(),s=J_();let i,r;return iw(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!oA(i[0].el,n.vnode.el,o))return;i.forEach(sA),i.forEach(iA);const a=i.filter(rA);Tw(),a.forEach(l=>{const c=l.el,u=c.style;Gn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,ms(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ce(t),a=Ew(o);let l=o.tag||_t;i=r,r=e.default?Ef(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&zo(u,Wo(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];zo(u,Wo(u,a,s,n)),Cw.set(u,u.el.getBoundingClientRect())}return b(l,null,r)}}},tA=t=>delete t.mode;kw.props;const nA=kw;function sA(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function iA(t){Sw.set(t,t.el.getBoundingClientRect())}function rA(t){const e=Cw.get(t),n=Sw.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function oA(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Iw(s);return i.removeChild(s),r}const aA=["ctrl","shift","alt","meta"],lA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>aA.some(n=>t[`${n}Key`]&&!e.includes(n))},cA=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=lA[e[i]];if(r&&r(n,e))return}return t(n,...s)},uA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},QH=(t,e)=>n=>{if(!("key"in n))return;const s=Li(n.key);if(e.some(i=>i===s||uA[i]===s))return t(n)},hA={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ro(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ro(t,!0),s.enter(t)):s.leave(t,()=>{ro(t,!1)}):ro(t,e))},beforeUnmount(t,{value:e}){ro(t,e)}};function ro(t,e){t.style.display=e?t._vod:"none"}const dA=gt({patchProp:Qk},Mk);let am;function fA(){return am||(am=pk(dA))}const pA=(...t)=>{const e=fA().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=gA(s);if(!i)return;const r=e._component;!de(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function gA(t){return Qe(t)?document.querySelector(t):t}const mA=js({__name:"App",setup(t){return(e,n)=>{const s=ow("router-view");return vn(),es(s)}}}),vA="modulepreload",yA=function(t){return"/"+t},lm={},vs=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=yA(r),r in lm)return;lm[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":vA,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};async function _A(){(await vs(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}function cm(t,e,n){wA(t,e),e.set(t,n)}function wA(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function bA(t,e,n){var s=Aw(t,e,"set");return EA(t,s,n),n}function EA(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function Zs(t,e){var n=Aw(t,e,"get");return IA(t,n)}function Aw(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function IA(t,e){return e.get?e.get.call(t):e.value}function Rw(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let i=0;i<s;i++){if(t==null)return n;t=t[e[i]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function Nw(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>Nw(t[s],e[s]))}function Qh(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Rw(t,e.split("."),n))}function XH(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t)){if(typeof e!="function")return n;const i=e(t,n);return typeof i>"u"?n:i}if(typeof e=="string")return Qh(t,e,n);if(Array.isArray(e))return Rw(t,e,n);if(typeof e!="function")return n;const s=e(t,n);return typeof s>"u"?n:s}function TA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Xh(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function JH(t){return t==null?void 0:t.$el}const um=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Ow(t,e){const n=Object.create(null),s=Object.create(null);for(const i in t)e.some(r=>r instanceof RegExp?r.test(i):r===i)?n[i]=t[i]:s[i]=t[i];return[n,s]}function ZH(t,e){const n={...t};return e.forEach(s=>delete n[s]),n}function eW(t){return Ow(t,["class","style","id",/^data-/])}function CA(t){return t==null?[]:Array.isArray(t)?t:[t]}function SA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function hm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function kA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function ss(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const i in t)s[i]=t[i];for(const i in e){const r=t[i],o=e[i];if(Xh(r)&&Xh(o)){s[i]=ss(r,o,n);continue}if(Array.isArray(r)&&Array.isArray(o)&&n){s[i]=n(r,o);continue}s[i]=o}return s}function As(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(As.cache.has(t))return As.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return As.cache.set(t,e),e}As.cache=new Map;function So(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>So(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>So(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return So(t,e.component.subTree).flat(1)}return[]}var ol=new WeakMap,Ki=new WeakMap;class AA{constructor(e){cm(this,ol,{writable:!0,value:[]}),cm(this,Ki,{writable:!0,value:0}),this.size=e}push(e){Zs(this,ol)[Zs(this,Ki)]=e,bA(this,Ki,(Zs(this,Ki)+1)%this.size)}values(){return Zs(this,ol).slice(Zs(this,Ki)).concat(Zs(this,ol).slice(0,Zs(this,Ki)))}}function xw(t){const e=Nt({}),n=I(t);return ba(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),jc(e)}function zl(t,e){return t.includes(e)}const RA=/^on[^a-z]/,tW=t=>RA.test(t),dm=[Function,Array];function fm(t,e){return e="on"+Pr(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function nW(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(Array.isArray(t))for(const i of t)i(...n);else typeof t=="function"&&t(...n)}const Dw=["top","bottom"],NA=["start","end","left","right"];function OA(t,e){let[n,s]=t.split(" ");return s||(s=zl(Dw,n)?"start":zl(NA,n)?"top":"center"),{side:Jh(n,e),align:Jh(s,e)}}function Jh(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function sW(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function iW(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function rW(t){return{side:t.align,align:t.side}}function oW(t){return zl(Dw,t.side)?"y":"x"}function Pw(t,e,n){if(n&&(e={__isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?PA(e):"")}function cr(t,e,n){const s=Pw(t,e,n);s!=null&&console.warn(s)}function pm(t,e,n){const s=Pw(t,e,n);s!=null&&console.error(s)}const xA=/(?:^|[-_])(\w)/g,DA=t=>t.replace(xA,e=>e.toUpperCase()).replace(/[-_]/g,"");function nh(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t.__isVue?t.$options||t.constructor.options:t||{};let s=n.name||n._componentTag;const i=n.__file;if(!s&&i){const r=i.match(/([^/\\]+)\.vue$/);s=r==null?void 0:r[1]}return(s?`<${DA(s)}>`:"<Anonymous>")+(i&&e!==!1?` at ${i}`:"")}function PA(t){if(t.__isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const s=e[e.length-1];if(s.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[s,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((s,i)=>`${i===0?"---> ":" ".repeat(5+i*2)}${Array.isArray(s)?`${nh(s[0])}... (${s[1]} recursive calls)`:nh(s)}`).join(`
`)}else return`

(found in ${nh(t)})`}const LA=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],MA=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,FA=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],$A=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Lw(t){const e=Array(3),n=MA,s=LA;for(let i=0;i<3;++i)e[i]=Math.round(SA(n(s[i][0]*t[0]+s[i][1]*t[1]+s[i][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Of(t){let{r:e,g:n,b:s}=t;const i=[0,0,0],r=$A,o=FA;e=r(e/255),n=r(n/255),s=r(s/255);for(let a=0;a<3;++a)i[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return i}const ql=.20689655172413793,UA=t=>t>ql**3?Math.cbrt(t):t/(3*ql**2)+4/29,VA=t=>t>ql?t**3:3*ql**2*(t-4/29);function Mw(t){const e=UA,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Fw(t){const e=VA,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function gm(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function li(t){if(typeof t=="number")return(isNaN(t)||t<0||t>16777215)&&cr(`'${t}' is not a valid hex color`),{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;[3,4].includes(e.length)?e=e.split("").map(s=>s+s).join(""):[6,8].includes(e.length)||cr(`'${t}' is not a valid hex(a) color`);const n=parseInt(e,16);return(isNaN(n)||n<0||n>4294967295)&&cr(`'${t}' is not a valid hex(a) color`),jA(e)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`)}function al(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function BA(t){let{r:e,g:n,b:s,a:i}=t;return`#${[al(e),al(n),al(s),i!==void 0?al(Math.round(i*255)):""].join("")}`}function jA(t){t=HA(t);let[e,n,s,i]=kA(t,2).map(r=>parseInt(r,16));return i=i===void 0?i:i/255,{r:e,g:n,b:s,a:i}}function HA(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=hm(hm(t,6),8,"F")),t}function WA(t,e){const n=Mw(Of(t));return n[0]=n[0]+e*10,Lw(Fw(n))}function zA(t,e){const n=Mw(Of(t));return n[0]=n[0]-e*10,Lw(Fw(n))}function qA(t){const e=li(t);return Of(e)[1]}function nn(t,e){const n=$r();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function $i(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=nn(t).type;return As((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let $w=0,Nl=new WeakMap;function Ia(){const t=nn("getUid");if(Nl.has(t))return Nl.get(t);{const e=$w++;return Nl.set(t,e),e}}Ia.reset=()=>{$w=0,Nl=new WeakMap};function KA(t){const{provides:e}=nn("injectSelf");if(e&&t in e)return e[t]}function Me(t,e){return n=>Object.keys(t).reduce((s,i)=>{const o=typeof t[i]=="object"&&t[i]!=null&&!Array.isArray(t[i])?t[i]:{type:t[i]};return n&&i in n?s[i]={...o,default:n[i]}:s[i]=o,e&&!s[i].source&&(s[i].source=e),s},{})}function Uw(t,e){let n;function s(){n=Uc(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}Ye(t,i=>{i&&!n?s():i||(n==null||n.stop(),n=void 0)},{immediate:!0}),uf(()=>{n==null||n.stop()})}function GA(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[As(e)])<"u"}function Ta(t){var e,n;if(t._setup=(e=t._setup)!=null?e:t.setup,!t.name)return cr("The component is missing an explicit name, unable to generate default prop value"),t;if(t._setup){t.props=Me((n=t.props)!=null?n:{},As(t.name))();const s=Object.keys(t.props);t.filterProps=function(r){return Ow(r,s)},t.props._as=String,t.setup=function(r,o){const a=Vw();if(!a.value)return t._setup(r,o);const l=$r(),c=I(()=>{var f;return a.value[(f=r._as)!=null?f:t.name]}),u=new Proxy(r,{get(f,p){var y,w,E,C;const m=Reflect.get(f,p);return typeof p=="string"&&!GA(l.vnode,p)&&(C=(E=(y=c.value)==null?void 0:y[p])!=null?E:(w=a.value.global)==null?void 0:w[p])!=null?C:m}}),h=yf();ba(()=>{if(c.value){const f=Object.entries(c.value).filter(p=>{let[m]=p;return m.startsWith(m[0].toUpperCase())});f.length&&(h.value=Object.fromEntries(f))}});const d=t._setup(u,o);return Uw(h,()=>{var f,p;Ur(ss((p=(f=KA(Go))==null?void 0:f.value)!=null?p:{},h.value))}),d}}return t}function Ke(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Ta:js)(e)}function xf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Ke()({name:n!=null?n:Pr(cn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(s,i){let{slots:r}=i;return()=>{var o;return us(s.tag,{class:t},(o=r.default)==null?void 0:o.call(r))}}})}const un=typeof window<"u",Df=un&&"IntersectionObserver"in window,YA=un&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),aW=un&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)");function ut(t){const e=nn("useRender");e.render=t}const Go=Symbol.for("vuetify:defaults");function QA(t){return J(t)}function Vw(){const t=Le(Go);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Ur(t,e){const n=Vw(),s=J(t),i=I(()=>{if(Je(e==null?void 0:e.disabled))return n.value;const o=Je(e==null?void 0:e.scoped),a=Je(e==null?void 0:e.reset),l=Je(e==null?void 0:e.root);let c=ss(s.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let h=0;h<=u&&!(!c||!("prev"in c));h++)c=c.prev;return c}return c.prev?ss(c.prev,c):c});return Wt(Go,i),i}const Zh=Symbol.for("vuetify:display"),mm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},XA=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mm;return ss(mm,t)};function vm(t){return un&&!t?window.innerWidth:0}function ym(t){return un&&!t?window.innerHeight:0}function _m(t){const e=un&&!t?window.navigator.userAgent:"ssr";function n(p){return Boolean(e.match(p))}const s=n(/android/i),i=n(/iphone|ipad|ipod/i),r=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),h=n(/win/i),d=n(/mac/i),f=n(/linux/i);return{android:s,ios:i,cordova:r,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:h,mac:d,linux:f,touch:YA,ssr:e==="ssr"}}function JA(t,e){const{thresholds:n,mobileBreakpoint:s}=XA(t),i=J(ym(e)),r=yf(_m(e)),o=Nt({}),a=J(vm(e));function l(){i.value=ym(),a.value=vm()}function c(){l(),r.value=_m()}return ba(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,d=a.value<n.lg&&!(h||u),f=a.value<n.xl&&!(d||h||u),p=a.value<n.xxl&&!(f||d||h||u),m=a.value>=n.xxl,y=u?"xs":h?"sm":d?"md":f?"lg":p?"xl":"xxl",w=typeof s=="number"?s:n[s],E=a.value<w;o.xs=u,o.sm=h,o.md=d,o.lg=f,o.xl=p,o.xxl=m,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||d),o.xlAndUp=!(u||h||d||f),o.smAndDown=!(d||f||p||m),o.mdAndDown=!(f||p||m),o.lgAndDown=!(p||m),o.xlAndDown=!m,o.name=y,o.height=i.value,o.width=a.value,o.mobile=E,o.mobileBreakpoint=s,o.platform=r.value,o.thresholds=n}),un&&window.addEventListener("resize",l,{passive:!0}),{...jc(o),update:c,ssr:!!e}}function ZA(){const t=Le(Zh);if(!t)throw new Error("Could not find Vuetify display injection");return t}const eR={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},tR={component:t=>us(Bw,{...t,class:"mdi"})},Ms=[String,Function,Object],ed=Symbol.for("vuetify:icons"),Qc=Me({icon:{type:Ms},tag:{type:String,required:!0}},"icon"),wm=Ke()({name:"VComponentIcon",props:Qc(),setup(t,e){let{slots:n}=e;return()=>b(t.tag,null,{default:()=>{var s;return[t.icon?b(t.icon,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}),nR=Ta({name:"VSvgIcon",inheritAttrs:!1,props:Qc(),setup(t,e){let{attrs:n}=e;return()=>b(t.tag,Fi(n,{style:null}),{default:()=>[b("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[b("path",{d:t.icon},null)])]})}}),sR=Ta({name:"VLigatureIcon",props:Qc(),setup(t){return()=>b(t.tag,null,{default:()=>[t.icon]})}}),Bw=Ta({name:"VClassIcon",props:Qc(),setup(t){return()=>b(t.tag,{class:t.icon},null)}}),iR={svg:{component:nR},class:{component:Bw}};function rR(t){return ss({defaultSet:"mdi",sets:{...iR,mdi:tR},aliases:eR},t)}const oR=t=>{const e=Le(ed);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:I(()=>{var l;const s=Pe(t)?t.value:t.icon;if(!s)return{component:wm};let i=s;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(l=e.aliases)==null?void 0:l[i.slice(1)])),!i)throw new Error(`Could not find aliased icon "${s}"`);if(typeof i!="string")return{component:wm,icon:i};const r=Object.keys(e.sets).find(c=>typeof i=="string"&&i.startsWith(`${c}:`)),o=r?i.slice(r.length+1):i;return{component:e.sets[r!=null?r:e.defaultSet].component,icon:o}})}};function Ii(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const r=nn("useProxiedModel"),o=J(t[e]!==void 0?t[e]:n),a=As(e),c=I(a!==e?()=>{var h,d,f,p;return t[e],!!((((h=r.vnode.props)==null?void 0:h.hasOwnProperty(e))||((d=r.vnode.props)==null?void 0:d.hasOwnProperty(a)))&&(((f=r.vnode.props)==null?void 0:f.hasOwnProperty(`onUpdate:${e}`))||((p=r.vnode.props)==null?void 0:p.hasOwnProperty(`onUpdate:${a}`))))}:()=>{var h,d;return t[e],!!(((h=r.vnode.props)==null?void 0:h.hasOwnProperty(e))&&((d=r.vnode.props)==null?void 0:d.hasOwnProperty(`onUpdate:${e}`)))});Uw(()=>!c.value,()=>{Ye(()=>t[e],h=>{o.value=h})});const u=I({get(){return s(c.value?t[e]:o.value)},set(h){const d=i(h),f=ce(c.value?t[e]:o.value);f===d||s(f)===h||(o.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const aR={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading..."},bm="$vuetify.",Em=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),jw=(t,e,n)=>function(s){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if(!s.startsWith(bm))return Em(s,r);const a=s.replace(bm,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Qh(l,a,null);return u||(cr(`Translation key "${s}" not found in "${t.value}", trying fallback locale`),u=Qh(c,a,null)),u||(pm(`Translation key "${s}" not found in fallback`),u=s),typeof u!="string"&&(pm(`Translation key "${s}" has a non-string value`),u=s),Em(u,r)};function Hw(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function sh(t,e,n){var i,r;const s=Ii(t,e,(i=t[e])!=null?i:n.value);return s.value=(r=t[e])!=null?r:n.value,Ye(n,o=>{t[e]==null&&(s.value=n.value)}),s}function Ww(t){return e=>{const n=sh(e,"locale",t.current),s=sh(e,"fallback",t.fallback),i=sh(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:i,t:jw(n,s,i),n:Hw(n,s),provide:Ww({current:n,fallback:s,messages:i})}}}function lR(t){var i,r;const e=J((i=t==null?void 0:t.locale)!=null?i:"en"),n=J((r=t==null?void 0:t.fallback)!=null?r:"en"),s=J({en:aR,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:jw(e,n,s),n:Hw(e,n),provide:Ww({current:e,fallback:n,messages:s})}}const cR={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Kl=Symbol.for("vuetify:locale");function uR(t){return t.name!=null}function hR(t){const e=(t==null?void 0:t.adapter)&&uR(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:lR(t),n=dR(e,t);return{...e,...n}}function lW(){const t=Le(Kl);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function dR(t,e){var i;const n=J((i=e==null?void 0:e.rtl)!=null?i:cR),s=I(()=>{var r;return(r=n.value[t.current.value])!=null?r:!1});return{isRtl:s,rtl:n,rtlClasses:I(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function Xc(){const t=Le(Kl);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Gi=2.4,Im=.2126729,Tm=.7151522,Cm=.072175,fR=.55,pR=.58,gR=.57,mR=.62,ll=.03,Sm=1.45,vR=5e-4,yR=1.25,_R=1.25,km=.078,Am=12.82051282051282,cl=.06,Rm=.001;function Nm(t,e){const n=(t.r/255)**Gi,s=(t.g/255)**Gi,i=(t.b/255)**Gi,r=(e.r/255)**Gi,o=(e.g/255)**Gi,a=(e.b/255)**Gi;let l=n*Im+s*Tm+i*Cm,c=r*Im+o*Tm+a*Cm;if(l<=ll&&(l+=(ll-l)**Sm),c<=ll&&(c+=(ll-c)**Sm),Math.abs(c-l)<vR)return 0;let u;if(c>l){const h=(c**fR-l**pR)*yR;u=h<Rm?0:h<km?h-h*Am*cl:h-cl}else{const h=(c**mR-l**gR)*_R;u=h>-Rm?0:h>-km?h-h*Am*cl:h+cl}return u*100}const Yo=Symbol.for("vuetify:theme"),An=Me({theme:String},"theme"),oo={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function wR(){var n,s,i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:oo;if(!t)return{...oo,isDisabled:!0};const e={};for(const[r,o]of Object.entries((n=t.themes)!=null?n:{})){const a=o.dark||r==="dark"?(s=oo.themes)==null?void 0:s.dark:(i=oo.themes)==null?void 0:i.light;e[r]=ss(a,o)}return ss(oo,{...t,themes:e})}function bR(t){const e=Nt(wR(t)),n=J(e.defaultTheme),s=J(e.themes),i=I(()=>{const u={};for(const[h,d]of Object.entries(s.value)){const f=u[h]={...d,colors:{...d.colors}};if(e.variations)for(const p of e.variations.colors){const m=f.colors[p];if(!!m)for(const y of["lighten","darken"]){const w=y==="lighten"?WA:zA;for(const E of TA(e.variations[y],1))f.colors[`${p}-${y}-${E}`]=BA(w(li(m),E))}}for(const p of Object.keys(f.colors)){if(/^on-[a-z]/.test(p)||f.colors[`on-${p}`])continue;const m=`on-${p}`,y=li(f.colors[p]),w=Math.abs(Nm(li(0),y)),E=Math.abs(Nm(li(16777215),y));f.colors[m]=E>Math.min(w,50)?"#fff":"#000"}}return u}),r=I(()=>i.value[n.value]),o=I(()=>{const u=[];r.value.dark&&ei(u,":root",["color-scheme: dark"]),ei(u,":root",Om(r.value));for(const[p,m]of Object.entries(i.value))ei(u,`.v-theme--${p}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...Om(m)]);const h=[],d=[],f=new Set(Object.values(i.value).flatMap(p=>Object.keys(p.colors)));for(const p of f)/^on-[a-z]/.test(p)?ei(d,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(ei(h,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),ei(d,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),ei(d,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return u.push(...h,...d),u.map((p,m)=>m===0?p:`    ${p}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){const h=u._context.provides.usehead;if(h)if(h.push){const d=h.push(a);Ye(o,()=>{d.patch(a)})}else un?(h.addHeadObjs(I(a)),ba(()=>h.updateDOM())):h.addHeadObjs(a());else{let f=function(){if(!e.isDisabled){if(typeof document<"u"&&!d){const p=document.createElement("style");p.type="text/css",p.id="vuetify-theme-stylesheet",e.cspNonce&&p.setAttribute("nonce",e.cspNonce),d=p,document.head.appendChild(d)}d&&(d.innerHTML=o.value)}},d=un?document.getElementById("vuetify-theme-stylesheet"):null;Ye(o,f,{immediate:!0})}}const c=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:s,current:r,computedThemes:i,themeClasses:c,styles:o,global:{name:n,current:r}}}function zn(t){nn("provideTheme");const e=Le(Yo,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=I(()=>{var r;return(r=t.theme)!=null?r:e==null?void 0:e.name.value}),s=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,themeClasses:s};return Wt(Yo,i),i}function ER(){nn("useTheme");const t=Le(Yo,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function ei(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function Om(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[i,r]of Object.entries(t.colors)){const o=li(r);s.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||s.push(`--v-theme-${i}-overlay-multiplier: ${qA(r)>.18?e:n}`)}for(const[i,r]of Object.entries(t.variables)){const o=typeof r=="string"&&r.startsWith("#")?li(r):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${i}: ${a!=null?a:r}`)}return s}function zw(t){const e=J(),n=J();if(un){const s=new ResizeObserver(i=>{t==null||t(i,s),i.length&&(n.value=i[0].contentRect)});kn(()=>{s.disconnect()}),Ye(e,(i,r)=>{r&&(s.unobserve(r),n.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:e,contentRect:Bc(n)}}const Gl=Symbol.for("vuetify:layout"),qw=Symbol.for("vuetify:layout-item"),xm=1e3,IR=Me({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Pf=Me({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function TR(){const t=Le(Gl);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function Lf(t){var a;const e=Le(Gl);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=(a=t.id)!=null?a:`layout-item-${Ia()}`,s=nn("useLayoutItem");Wt(qw,{id:n});const i=J(!1);nw(()=>i.value=!0),tw(()=>i.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:o}=e.register(s,{...t,active:I(()=>i.value?!1:t.active.value),id:n});return kn(()=>e.unregister(n)),{layoutItemStyles:r,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const CR=(t,e,n,s)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const o of t){const a=e.get(o),l=n.get(o),c=s.get(o);if(!a||!l||!c)continue;const u={...i,[a.value]:parseInt(i[a.value],10)+(c.value?parseInt(l.value,10):0)};r.push({id:o,layer:u}),i=u}return r};function SR(t){const e=Le(Gl,null),n=I(()=>e?e.rootZIndex.value-100:xm),s=J([]),i=Nt(new Map),r=Nt(new Map),o=Nt(new Map),a=Nt(new Map),l=Nt(new Map),{resizeRef:c,contentRect:u}=zw(),h=I(()=>{var _;const A=new Map,O=(_=t.overlaps)!=null?_:[];for(const F of O.filter($=>$.includes(":"))){const[$,q]=F.split(":");if(!s.value.includes($)||!s.value.includes(q))continue;const V=i.get($),he=i.get(q),pe=r.get($),me=r.get(q);!V||!he||!pe||!me||(A.set(q,{position:V.value,amount:parseInt(pe.value,10)}),A.set($,{position:he.value,amount:-parseInt(me.value,10)}))}return A}),d=I(()=>{const A=[...new Set([...o.values()].map(_=>_.value))].sort((_,F)=>_-F),O=[];for(const _ of A){const F=s.value.filter($=>{var q;return((q=o.get($))==null?void 0:q.value)===_});O.push(...F)}return CR(O,i,r,a)}),f=I(()=>!Array.from(l.values()).some(A=>A.value)),p=I(()=>d.value[d.value.length-1].layer),m=I(()=>({"--v-layout-left":ve(p.value.left),"--v-layout-right":ve(p.value.right),"--v-layout-top":ve(p.value.top),"--v-layout-bottom":ve(p.value.bottom),...f.value?void 0:{transition:"none"}})),y=I(()=>d.value.slice(1).map((A,O)=>{let{id:_}=A;const{layer:F}=d.value[O],$=r.get(_),q=i.get(_);return{id:_,...F,size:Number($.value),position:q.value}})),w=A=>y.value.find(O=>O.id===A),E=nn("createLayout"),C=J(!1);Mi(()=>{C.value=!0}),Wt(Gl,{register:(A,O)=>{let{id:_,order:F,position:$,layoutSize:q,elementSize:V,active:he,disableTransitions:pe,absolute:me}=O;o.set(_,F),i.set(_,$),r.set(_,q),a.set(_,he),pe&&l.set(_,pe);const Q=So(qw,E==null?void 0:E.vnode).indexOf(A);Q>-1?s.value.splice(Q,0,_):s.value.push(_);const fe=I(()=>y.value.findIndex($e=>$e.id===_)),Ae=I(()=>n.value+d.value.length*2-fe.value*2),Bt=I(()=>{const $e=$.value==="left"||$.value==="right",Tt=$.value==="right",Rn=$.value==="bottom",k={[$.value]:0,zIndex:Ae.value,transform:`translate${$e?"X":"Y"}(${(he.value?0:-110)*(Tt||Rn?-1:1)}%)`,position:me.value||n.value!==xm?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!C.value)return k;const M=y.value[fe.value];if(!M)throw new Error(`[Vuetify] Could not find layout item "${_}"`);const B=h.value.get(_);return B&&(M[B.position]+=B.amount),{...k,height:$e?`calc(100% - ${M.top}px - ${M.bottom}px)`:V.value?`${V.value}px`:void 0,left:Tt?void 0:`${M.left}px`,right:Tt?`${M.right}px`:void 0,top:$.value!=="bottom"?`${M.top}px`:void 0,bottom:$.value!=="top"?`${M.bottom}px`:void 0,width:$e?V.value?`${V.value}px`:void 0:`calc(100% - ${M.left}px - ${M.right}px)`}}),rt=I(()=>({zIndex:Ae.value-1}));return{layoutItemStyles:Bt,layoutItemScrimStyles:rt,zIndex:Ae}},unregister:A=>{o.delete(A),i.delete(A),r.delete(A),a.delete(A),l.delete(A),s.value=s.value.filter(O=>O!==A)},mainRect:p,mainStyles:m,getLayoutItem:w,items:y,layoutRect:u,rootZIndex:n});const D=I(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),N=I(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:D,layoutStyles:N,getLayoutItem:w,items:y,layoutRect:u,layoutRef:c}}function Kw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=ss(e,n),{aliases:i={},components:r={},directives:o={}}=s,a=QA(s.defaults),l=JA(s.display,s.ssr),c=bR(s.theme),u=rR(s.icons),h=hR(s.locale);return{install:f=>{for(const p in o)f.directive(p,o[p]);for(const p in r)f.component(p,r[p]);for(const p in i)f.component(p,Ta({...i[p],name:p,aliasName:i[p].name}));if(c.install(f),f.provide(Go,a),f.provide(Zh,l),f.provide(Yo,c),f.provide(ed,u),f.provide(Kl,h),un&&s.ssr)if(f.$nuxt)f.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:p}=f;f.mount=function(){const m=p(...arguments);return Bs(()=>l.update()),f.mount=p,m}}Ia.reset(),f.mixin({computed:{$vuetify(){return Nt({defaults:ao.call(this,Go),display:ao.call(this,Zh),theme:ao.call(this,Yo),icons:ao.call(this,ed),locale:ao.call(this,Kl)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h}}const kR="3.1.13";Kw.version=kR;function ao(t){var s,i,r;const e=this.$,n=(r=(s=e.parent)==null?void 0:s.provides)!=null?r:(i=e.vnode.appContext)==null?void 0:i.provides;if(n&&t in n)return n[t]}const AR={collapse:"keyboard_arrow_up",complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"cancel",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sortAsc:"arrow_upward",sortDesc:"arrow_downward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},RR={component:t=>us(sR,{...t,class:"material-icons"})},NR=Kw({theme:{defaultTheme:"light",themes:{light:{colors:{primary:"#AB47BC",secondary:"#CE93D8"}},dark:{colors:{primary:"#AB47BC",secondary:"#CE93D8"}}}},icons:{defaultSet:"md",aliases:AR,sets:{md:RR}}});var OR=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Gw;const Jc=t=>Gw=t,Yw=Symbol();function td(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ko;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ko||(ko={}));function xR(){const t=Uc(!0),e=t.run(()=>J({}));let n=[],s=[];const i=yr({install(r){Jc(i),i._a=r,r.provide(Yw,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!OR?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Qw=()=>{};function Dm(t,e,n,s=Qw){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&R_()&&uf(i),i}function Yi(t,...e){t.slice().forEach(n=>{n(...e)})}function nd(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];td(i)&&td(s)&&t.hasOwnProperty(n)&&!Pe(s)&&!Ss(s)?t[n]=nd(i,s):t[n]=s}return t}const DR=Symbol();function PR(t){return!td(t)||!t.hasOwnProperty(DR)}const{assign:ys}=Object;function LR(t){return!!(Pe(t)&&t.effect)}function MR(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=jc(n.state.value[t]);return ys(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=yr(I(()=>{Jc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Xw(t,c,e,n,s,!0),l}function Xw(t,e,n={},s,i,r){let o;const a=ys({actions:{}},n),l={deep:!0};let c,u,h=yr([]),d=yr([]),f;const p=s.state.value[t];!r&&!p&&(s.state.value[t]={}),J({});let m;function y(O){let _;c=u=!1,typeof O=="function"?(O(s.state.value[t]),_={type:ko.patchFunction,storeId:t,events:f}):(nd(s.state.value[t],O),_={type:ko.patchObject,payload:O,storeId:t,events:f});const F=m=Symbol();Bs().then(()=>{m===F&&(c=!0)}),u=!0,Yi(h,_,s.state.value[t])}const w=r?function(){const{state:_}=n,F=_?_():{};this.$patch($=>{ys($,F)})}:Qw;function E(){o.stop(),h=[],d=[],s._s.delete(t)}function C(O,_){return function(){Jc(s);const F=Array.from(arguments),$=[],q=[];function V(me){$.push(me)}function he(me){q.push(me)}Yi(d,{args:F,name:O,store:N,after:V,onError:he});let pe;try{pe=_.apply(this&&this.$id===t?this:N,F)}catch(me){throw Yi(q,me),me}return pe instanceof Promise?pe.then(me=>(Yi($,me),me)).catch(me=>(Yi(q,me),Promise.reject(me))):(Yi($,pe),pe)}}const D={_p:s,$id:t,$onAction:Dm.bind(null,d),$patch:y,$reset:w,$subscribe(O,_={}){const F=Dm(h,O,_.detached,()=>$()),$=o.run(()=>Ye(()=>s.state.value[t],q=>{(_.flush==="sync"?u:c)&&O({storeId:t,type:ko.direct,events:f},q)},ys({},l,_)));return F},$dispose:E},N=Nt(D);s._s.set(t,N);const A=s._e.run(()=>(o=Uc(),o.run(()=>e())));for(const O in A){const _=A[O];if(Pe(_)&&!LR(_)||Ss(_))r||(p&&PR(_)&&(Pe(_)?_.value=p[O]:nd(_,p[O])),s.state.value[t][O]=_);else if(typeof _=="function"){const F=C(O,_);A[O]=F,a.actions[O]=_}}return ys(N,A),ys(ce(N),A),Object.defineProperty(N,"$state",{get:()=>s.state.value[t],set:O=>{y(_=>{ys(_,O)})}}),s._p.forEach(O=>{ys(N,o.run(()=>O({store:N,app:s._a,pinia:s,options:a})))}),p&&r&&n.hydrate&&n.hydrate(N.$state,p),c=!0,u=!0,N}function FR(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=$r();return a=a||c&&Le(Yw,null),a&&Jc(a),a=Gw,a._s.has(s)||(r?Xw(s,e,i,a):MR(s,i,a)),a._s.get(s)}return o.$id=s,o}const $R=xR();/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zi=typeof window<"u";function UR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function ih(t,e){const n={};for(const s in e){const i=e[s];n[s]=Sn(i)?i.map(t):t(i)}return n}const Ao=()=>{},Sn=Array.isArray,VR=/\/$/,BR=t=>t.replace(VR,"");function rh(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=zR(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function jR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function HR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&wr(e.matched[s],n.matched[i])&&Jw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WR(t[n],e[n]))return!1;return!0}function WR(t,e){return Sn(t)?Lm(t,e):Sn(e)?Lm(e,t):t===e}function Lm(t,e){return Sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function zR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Qo;(function(t){t.pop="pop",t.push="push"})(Qo||(Qo={}));var Ro;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ro||(Ro={}));function qR(t){if(!t)if(Zi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BR(t)}const KR=/^[^#]+#/;function GR(t,e){return t.replace(KR,"#")+e}function YR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Zc=()=>({left:window.pageXOffset,top:window.pageYOffset});function QR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=YR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mm(t,e){return(history.state?history.state.position-e:-1)+t}const sd=new Map;function XR(t,e){sd.set(t,e)}function JR(t){const e=sd.get(t);return sd.delete(t),e}let ZR=()=>location.protocol+"//"+location.host;function Zw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Pm(l,"")}return Pm(n,t)+s+i}function eN(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=Zw(t,location),p=n.value,m=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}y=m?d.position-m.position:0}else s(f);i.forEach(w=>{w(n.value,p,{delta:y,type:Qo.pop,direction:y?y>0?Ro.forward:Ro.back:Ro.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return r.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Oe({},d.state,{scroll:Zc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Fm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Zc():null}}function tN(t){const{history:e,location:n}=window,s={value:Zw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:ZR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Oe({},e.state,Fm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Oe({},i.value,e.state,{forward:l,scroll:Zc()});r(u.current,u,!0);const h=Oe({},Fm(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function nN(t){t=qR(t);const e=tN(t),n=eN(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Oe({location:"",base:t,go:s,createHref:GR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function sN(t){return typeof t=="string"||t&&typeof t=="object"}function eb(t){return typeof t=="string"||typeof t=="symbol"}const ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tb=Symbol("");var $m;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($m||($m={}));function br(t,e){return Oe(new Error,{type:t,[tb]:!0},e)}function Kn(t,e){return t instanceof Error&&tb in t&&(e==null||!!(t.type&e))}const Um="[^/]+?",iN={sensitive:!1,strict:!1,start:!0,end:!0},rN=/[.+*?^${}()[\]/\\]/g;function oN(t,e){const n=Oe({},iN,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(rN,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:m,optional:y,regexp:w}=d;r.push({name:p,repeatable:m,optional:y});const E=w||Um;if(E!==Um){f+=10;try{new RegExp(`(${E})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${p}" (${E}): `+D.message)}}let C=m?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(C=y&&c.length<2?`(?:/${C})`:"/"+C),y&&(C+="?"),i+=C,f+=20,y&&(f+=-8),m&&(f+=-20),E===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=r[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:m,optional:y}=f,w=p in c?c[p]:"";if(Sn(w)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const E=Sn(w)?w.join("/"):w;if(!E)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function aN(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function lN(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=aN(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Vm(s))return 1;if(Vm(i))return-1}return i.length-s.length}function Vm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cN={type:0,value:""},uN=/[a-zA-Z0-9_]/;function hN(t){if(!t)return[[]];if(t==="/")return[[cN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:uN.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function dN(t,e,n){const s=oN(hN(t.path),n),i=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function fN(t,e){const n=[],s=new Map;e=Hm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,p=pN(u);p.aliasOf=d&&d.record;const m=Hm(e,u),y=[p];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of C)y.push(Oe({},p,{components:d?d.record.components:p.components,path:D,aliasOf:d?d.record:p}))}let w,E;for(const C of y){const{path:D}=C;if(h&&D[0]!=="/"){const N=h.record.path,A=N[N.length-1]==="/"?"":"/";C.path=h.record.path+(D&&A+D)}if(w=dN(C,h,m),d?d.alias.push(w):(E=E||w,E!==w&&E.alias.push(w),f&&u.name&&!jm(w)&&o(u.name)),p.children){const N=p.children;for(let A=0;A<N.length;A++)r(N[A],w,d&&d.children[A])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return E?()=>{o(E)}:Ao}function o(u){if(eb(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&lN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!jm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},p,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw br(1,{location:u});m=d.record.name,f=Oe(Bm(h.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Bm(u.params,d.keys.map(E=>E.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(E=>E.re.test(p)),d&&(f=d.parse(p),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!d)throw br(1,{location:u,currentLocation:h});m=d.record.name,f=Oe({},h.params,u.params),p=d.stringify(f)}const y=[];let w=d;for(;w;)y.unshift(w.record),w=w.parent;return{name:m,path:p,params:f,matched:y,meta:mN(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Bm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function pN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function jm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mN(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Hm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function nb(t,e){return e.children.some(n=>n===t||nb(t,n))}const sb=/#/g,vN=/&/g,yN=/\//g,_N=/=/g,wN=/\?/g,ib=/\+/g,bN=/%5B/g,EN=/%5D/g,rb=/%5E/g,IN=/%60/g,ob=/%7B/g,TN=/%7C/g,ab=/%7D/g,CN=/%20/g;function Mf(t){return encodeURI(""+t).replace(TN,"|").replace(bN,"[").replace(EN,"]")}function SN(t){return Mf(t).replace(ob,"{").replace(ab,"}").replace(rb,"^")}function id(t){return Mf(t).replace(ib,"%2B").replace(CN,"+").replace(sb,"%23").replace(vN,"%26").replace(IN,"`").replace(ob,"{").replace(ab,"}").replace(rb,"^")}function kN(t){return id(t).replace(_N,"%3D")}function AN(t){return Mf(t).replace(sb,"%23").replace(wN,"%3F")}function RN(t){return t==null?"":AN(t).replace(yN,"%2F")}function Yl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function NN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ib," "),o=r.indexOf("="),a=Yl(o<0?r:r.slice(0,o)),l=o<0?null:Yl(r.slice(o+1));if(a in e){let c=e[a];Sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Wm(t){let e="";for(let n in t){const s=t[n];if(n=kN(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(s)?s.map(r=>r&&id(r)):[s&&id(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ON(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const xN=Symbol(""),zm=Symbol(""),eu=Symbol(""),Ff=Symbol(""),rd=Symbol("");function lo(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ws(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(br(4,{from:n,to:e})):h instanceof Error?a(h):sN(h)?a(br(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function oh(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(DN(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ws(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=UR(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ws(d,n,s,r,o)()}))}}return i}function DN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qm(t){const e=Le(eu),n=Le(Ff),s=I(()=>e.resolve(Je(t.to))),i=I(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(wr.bind(null,u));if(d>-1)return d;const f=Km(l[c-2]);return c>1&&Km(u)===f&&h[h.length-1].path!==f?h.findIndex(wr.bind(null,l[c-2])):d}),r=I(()=>i.value>-1&&FN(n.params,s.value.params)),o=I(()=>i.value>-1&&i.value===n.matched.length-1&&Jw(n.params,s.value.params));function a(l={}){return MN(l)?e[Je(t.replace)?"replace":"push"](Je(t.to)).catch(Ao):Promise.resolve()}return{route:s,href:I(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const PN=js({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qm,setup(t,{slots:e}){const n=Nt(qm(t)),{options:s}=Le(eu),i=I(()=>({[Gm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Gm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:us("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),LN=PN;function MN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FN(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Km(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gm=(t,e,n)=>t!=null?t:e!=null?e:n,$N=js({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Le(rd),i=I(()=>t.route||s.value),r=Le(zm,0),o=I(()=>{let c=Je(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=I(()=>i.value.matched[o.value]);Wt(zm,I(()=>o.value+1)),Wt(xN,a),Wt(rd,i);const l=J();return Ye(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!wr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ym(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=us(d,Oe({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ym(n.default,{Component:y,route:c})||y}}});function Ym(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const UN=$N;function VN(t){const e=fN(t.routes,t),n=t.parseQuery||NN,s=t.stringifyQuery||Wm,i=t.history,r=lo(),o=lo(),a=lo(),l=yf(ps);let c=ps;Zi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ih.bind(null,k=>""+k),h=ih.bind(null,RN),d=ih.bind(null,Yl);function f(k,M){let B,X;return eb(k)?(B=e.getRecordMatcher(k),X=M):X=k,e.addRoute(X,B)}function p(k){const M=e.getRecordMatcher(k);M&&e.removeRoute(M)}function m(){return e.getRoutes().map(k=>k.record)}function y(k){return!!e.getRecordMatcher(k)}function w(k,M){if(M=Oe({},M||l.value),typeof k=="string"){const g=rh(n,k,M.path),v=e.resolve({path:g.path},M),T=i.createHref(g.fullPath);return Oe(g,v,{params:d(v.params),hash:Yl(g.hash),redirectedFrom:void 0,href:T})}let B;if("path"in k)B=Oe({},k,{path:rh(n,k.path,M.path).path});else{const g=Oe({},k.params);for(const v in g)g[v]==null&&delete g[v];B=Oe({},k,{params:h(k.params)}),M.params=h(M.params)}const X=e.resolve(B,M),Ce=k.hash||"";X.params=u(d(X.params));const Ge=jR(s,Oe({},k,{hash:SN(Ce),path:X.path})),ge=i.createHref(Ge);return Oe({fullPath:Ge,hash:Ce,query:s===Wm?ON(k.query):k.query||{}},X,{redirectedFrom:void 0,href:ge})}function E(k){return typeof k=="string"?rh(n,k,l.value.path):Oe({},k)}function C(k,M){if(c!==k)return br(8,{from:M,to:k})}function D(k){return O(k)}function N(k){return D(Oe(E(k),{replace:!0}))}function A(k){const M=k.matched[k.matched.length-1];if(M&&M.redirect){const{redirect:B}=M;let X=typeof B=="function"?B(k):B;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),Oe({query:k.query,hash:k.hash,params:"path"in X?{}:k.params},X)}}function O(k,M){const B=c=w(k),X=l.value,Ce=k.state,Ge=k.force,ge=k.replace===!0,g=A(B);if(g)return O(Oe(E(g),{state:typeof g=="object"?Oe({},Ce,g.state):Ce,force:Ge,replace:ge}),M||B);const v=B;v.redirectedFrom=M;let T;return!Ge&&HR(s,X,B)&&(T=br(16,{to:v,from:X}),Bt(X,X,!0,!1)),(T?Promise.resolve(T):F(v,X)).catch(S=>Kn(S)?Kn(S,2)?S:Ae(S):Q(S,v,X)).then(S=>{if(S){if(Kn(S,2))return O(Oe({replace:ge},E(S.to),{state:typeof S.to=="object"?Oe({},Ce,S.to.state):Ce,force:Ge}),M||v)}else S=q(v,X,!0,ge,Ce);return $(v,X,S),S})}function _(k,M){const B=C(k,M);return B?Promise.reject(B):Promise.resolve()}function F(k,M){let B;const[X,Ce,Ge]=BN(k,M);B=oh(X.reverse(),"beforeRouteLeave",k,M);for(const g of X)g.leaveGuards.forEach(v=>{B.push(ws(v,k,M))});const ge=_.bind(null,k,M);return B.push(ge),Qi(B).then(()=>{B=[];for(const g of r.list())B.push(ws(g,k,M));return B.push(ge),Qi(B)}).then(()=>{B=oh(Ce,"beforeRouteUpdate",k,M);for(const g of Ce)g.updateGuards.forEach(v=>{B.push(ws(v,k,M))});return B.push(ge),Qi(B)}).then(()=>{B=[];for(const g of k.matched)if(g.beforeEnter&&!M.matched.includes(g))if(Sn(g.beforeEnter))for(const v of g.beforeEnter)B.push(ws(v,k,M));else B.push(ws(g.beforeEnter,k,M));return B.push(ge),Qi(B)}).then(()=>(k.matched.forEach(g=>g.enterCallbacks={}),B=oh(Ge,"beforeRouteEnter",k,M),B.push(ge),Qi(B))).then(()=>{B=[];for(const g of o.list())B.push(ws(g,k,M));return B.push(ge),Qi(B)}).catch(g=>Kn(g,8)?g:Promise.reject(g))}function $(k,M,B){for(const X of a.list())X(k,M,B)}function q(k,M,B,X,Ce){const Ge=C(k,M);if(Ge)return Ge;const ge=M===ps,g=Zi?history.state:{};B&&(X||ge?i.replace(k.fullPath,Oe({scroll:ge&&g&&g.scroll},Ce)):i.push(k.fullPath,Ce)),l.value=k,Bt(k,M,B,ge),Ae()}let V;function he(){V||(V=i.listen((k,M,B)=>{if(!Rn.listening)return;const X=w(k),Ce=A(X);if(Ce){O(Oe(Ce,{replace:!0}),X).catch(Ao);return}c=X;const Ge=l.value;Zi&&XR(Mm(Ge.fullPath,B.delta),Zc()),F(X,Ge).catch(ge=>Kn(ge,12)?ge:Kn(ge,2)?(O(ge.to,X).then(g=>{Kn(g,20)&&!B.delta&&B.type===Qo.pop&&i.go(-1,!1)}).catch(Ao),Promise.reject()):(B.delta&&i.go(-B.delta,!1),Q(ge,X,Ge))).then(ge=>{ge=ge||q(X,Ge,!1),ge&&(B.delta&&!Kn(ge,8)?i.go(-B.delta,!1):B.type===Qo.pop&&Kn(ge,20)&&i.go(-1,!1)),$(X,Ge,ge)}).catch(Ao)}))}let pe=lo(),me=lo(),be;function Q(k,M,B){Ae(k);const X=me.list();return X.length?X.forEach(Ce=>Ce(k,M,B)):console.error(k),Promise.reject(k)}function fe(){return be&&l.value!==ps?Promise.resolve():new Promise((k,M)=>{pe.add([k,M])})}function Ae(k){return be||(be=!k,he(),pe.list().forEach(([M,B])=>k?B(k):M()),pe.reset()),k}function Bt(k,M,B,X){const{scrollBehavior:Ce}=t;if(!Zi||!Ce)return Promise.resolve();const Ge=!B&&JR(Mm(k.fullPath,0))||(X||!B)&&history.state&&history.state.scroll||null;return Bs().then(()=>Ce(k,M,Ge)).then(ge=>ge&&QR(ge)).catch(ge=>Q(ge,k,M))}const rt=k=>i.go(k);let $e;const Tt=new Set,Rn={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:m,resolve:w,options:t,push:D,replace:N,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:fe,install(k){const M=this;k.component("RouterLink",LN),k.component("RouterView",UN),k.config.globalProperties.$router=M,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(l)}),Zi&&!$e&&l.value===ps&&($e=!0,D(i.location).catch(Ce=>{}));const B={};for(const Ce in ps)B[Ce]=I(()=>l.value[Ce]);k.provide(eu,M),k.provide(Ff,Nt(B)),k.provide(rd,l);const X=k.unmount;Tt.add(k),k.unmount=function(){Tt.delete(k),Tt.size<1&&(c=ps,V&&V(),V=null,l.value=ps,$e=!1,be=!1),X()}}};return Rn}function Qi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function BN(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>wr(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>wr(c,l))||i.push(l))}return[n,s,i]}function lb(){return Le(eu)}function cb(){return Le(Ff)}const ub=FR("app",()=>{const t=J("Listify"),e=o=>{t.value=o},n=J(!1),s=o=>{n.value=o},i=J(!1);return{pageTitle:t,keyboard:n,inputFocus:i,setTitle:e,hideNavBar:s,setFocus:o=>{i.value=o}}});const Rs=Ke(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:s,disabled:i,reset:r,root:o,scoped:a}=jc(t);return Ur(s,{reset:r,root:o,scoped:a,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return Ke()({name:t,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(s,i){let{slots:r}=i;const o={onBeforeEnter(a){a.style.transformOrigin=s.origin},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${h}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&(a==null?void 0:a._transitionInitialStyles)){const{position:l,top:c,left:u,width:h,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=h||"",a.style.height=d||""}}};return()=>{const a=s.group?nA:Hs;return us(a,{name:s.disabled?"":t,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:o},r.default)}}})}function hb(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Ke()({name:t,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,i){let{slots:r}=i;return()=>us(Hs,{name:s.disabled?"":t,css:!s.disabled,...s.disabled?{}:e},r.default)}})}function db(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=cn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}sn("fab-transition","center center","out-in");sn("dialog-bottom-transition");sn("dialog-top-transition");const jN=sn("fade-transition");sn("scale-transition");sn("scroll-x-transition");sn("scroll-x-reverse-transition");sn("scroll-y-transition");sn("scroll-y-reverse-transition");sn("slide-x-transition");sn("slide-x-reverse-transition");const cW=sn("slide-y-transition");sn("slide-y-reverse-transition");const HN=hb("expand-transition",db()),uW=hb("expand-x-transition",db("",!0));const $f=Me({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Uf(t){return{dimensionStyles:I(()=>({height:ve(t.height),maxHeight:ve(t.maxHeight),maxWidth:ve(t.maxWidth),minHeight:ve(t.minHeight),minWidth:ve(t.minWidth),width:ve(t.width)}))}}function WN(t){return{aspectStyles:I(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const zN=Ke()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...$f()},setup(t,e){let{slots:n}=e;const{aspectStyles:s}=WN(t),{dimensionStyles:i}=Uf(t);return ut(()=>{var r;return b("div",{class:"v-responsive",style:i.value},[b("div",{class:"v-responsive__sizer",style:s.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&b("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function qN(t,e){if(!Df)return;const n=e.modifiers||{},s=e.value,{handler:i,options:r}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var h;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(h=t._observe)==null?void 0:h[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&i(u,a,l),u&&n.once?fb(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function fb(t,e){var s;const n=(s=t._observe)==null?void 0:s[e.instance.$.uid];!n||(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const KN={mounted:qN,unmounted:fb},GN=KN,YN=Me({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),ul=(t,e)=>{let{slots:n}=e;const{transition:s,...i}=t,{component:r=Hs,...o}=typeof s=="object"?s:{};return us(r,Fi(typeof s=="string"?{name:s}:o,i),n)},pb=Ke()({name:"VImg",directives:{intersect:GN},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...YN()},emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:s}=e;const i=J(""),r=J(),o=J(t.eager?"loading":"idle"),a=J(),l=J(),c=I(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=I(()=>c.value.aspect||a.value/l.value||0);Ye(()=>t.src,()=>{h(o.value!=="idle")}),Ye(u,(_,F)=>{!_&&F&&r.value&&y(r.value)}),If(()=>h());function h(_){if(!(t.eager&&_)&&!(Df&&!_&&!t.eager)){if(o.value="loading",c.value.lazySrc){const F=new Image;F.src=c.value.lazySrc,y(F,null)}!c.value.src||Bs(()=>{var F,$;if(n("loadstart",((F=r.value)==null?void 0:F.currentSrc)||c.value.src),($=r.value)!=null&&$.complete){if(r.value.naturalWidth||f(),o.value==="error")return;u.value||y(r.value,null),d()}else u.value||y(r.value),p()})}}function d(){var _;p(),o.value="loaded",n("load",((_=r.value)==null?void 0:_.currentSrc)||c.value.src)}function f(){var _;o.value="error",n("error",((_=r.value)==null?void 0:_.currentSrc)||c.value.src)}function p(){const _=r.value;_&&(i.value=_.currentSrc||_.src)}let m=-1;function y(_){let F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const $=()=>{clearTimeout(m);const{naturalHeight:q,naturalWidth:V}=_;q||V?(a.value=V,l.value=q):!_.complete&&o.value==="loading"&&F!=null?m=window.setTimeout($,F):(_.currentSrc.endsWith(".svg")||_.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};$()}const w=I(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),E=()=>{var $;if(!c.value.src||o.value==="idle")return null;const _=b("img",{class:["v-img__img",w.value],src:c.value.src,srcset:c.value.srcset,alt:t.alt,sizes:t.sizes,ref:r,onLoad:d,onError:f},null),F=($=s.sources)==null?void 0:$.call(s);return b(ul,{transition:t.transition,appear:!0},{default:()=>[Hl(F?b("picture",{class:"v-img__picture"},[F,_]):_,[[hA,o.value==="loaded"]])]})},C=()=>b(ul,{transition:t.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&b("img",{class:["v-img__img","v-img__img--preload",w.value],src:c.value.lazySrc,alt:t.alt},null)]}),D=()=>s.placeholder?b(ul,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!s.error)&&b("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,N=()=>s.error?b(ul,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&b("div",{class:"v-img__error"},[s.error()])]}):null,A=()=>t.gradient?b("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,O=J(!1);{const _=Ye(u,F=>{F&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),_())})}return ut(()=>Hl(b(zN,{class:["v-img",{"v-img--booting":!O.value}],style:{width:ve(t.width==="auto"?a.value:t.width)},aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>b(_t,null,[b(E,null,null),b(C,null,null),b(A,null,null),b(D,null,null),b(N,null,null)]),default:s.default}),[[Cf("intersect"),{handler:h,options:t.options},null,{once:!0}]])),{currentSrc:i,image:r,state:o,naturalWidth:a,naturalHeight:l}}}),fn=Me({tag:{type:String,default:"div"}},"tag"),gb=Me({text:String,...fn()},"v-toolbar-title"),mb=Ke()({name:"VToolbarTitle",props:gb(),setup(t,e){let{slots:n}=e;return ut(()=>{const s=!!(n.default||n.text||t.text);return b(t.tag,{class:"v-toolbar-title"},{default:()=>{var i;return[s&&b("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(i=n.default)==null?void 0:i.call(n)])]}})}),{}}}),Vr=Me({border:[Boolean,Number,String]},"border");function Br(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i();return{borderClasses:I(()=>{const s=Pe(t)?t.value:t.border,i=[];if(s===!0||s==="")i.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`border-${r}`);return i})}}const jr=Me({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Hr(t){return{elevationClasses:I(()=>{const n=Pe(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const Ws=Me({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function zs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i();return{roundedClasses:I(()=>{const s=Pe(t)?t.value:t.rounded,i=[];if(s===!0||s==="")i.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`rounded-${r}`);return i})}}function Vf(t){return xw(()=>{const e=[],n={};return t.value.background&&(gm(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(gm(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Ql(t,e){const n=I(()=>({text:Pe(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Vf(n);return{textColorClasses:s,textColorStyles:i}}function Er(t,e){const n=I(()=>({background:Pe(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Vf(n);return{backgroundColorClasses:s,backgroundColorStyles:i}}const QN=[null,"prominent","default","comfortable","compact"],vb=Me({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>QN.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Vr(),...jr(),...Ws(),...fn({tag:"header"}),...An()},"v-toolbar"),Qm=Ke()({name:"VToolbar",props:vb(),setup(t,e){var d;let{slots:n}=e;const{backgroundColorClasses:s,backgroundColorStyles:i}=Er(it(t,"color")),{borderClasses:r}=Br(t),{elevationClasses:o}=Hr(t),{roundedClasses:a}=zs(t),{themeClasses:l}=zn(t),c=J(!!(t.extended||((d=n.extension)==null?void 0:d.call(n)))),u=I(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),h=I(()=>c.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return Ur({VBtn:{variant:"text"}}),ut(()=>{var y;const f=!!(t.title||n.title),p=!!(n.image||t.image),m=(y=n.extension)==null?void 0:y.call(n);return c.value=!!(t.extended||m),b(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},s.value,r.value,o.value,a.value,l.value],style:[i.value]},{default:()=>[p&&b("div",{key:"image",class:"v-toolbar__image"},[n.image?b(Rs,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):b(pb,{key:"image-img",cover:!0,src:t.image},null)]),b(Rs,{defaults:{VTabs:{height:ve(u.value)}}},{default:()=>{var w,E,C;return[b("div",{class:"v-toolbar__content",style:{height:ve(u.value)}},[n.prepend&&b("div",{class:"v-toolbar__prepend"},[(w=n.prepend)==null?void 0:w.call(n)]),f&&b(mb,{key:"title",text:t.title},{text:n.title}),(E=n.default)==null?void 0:E.call(n),n.append&&b("div",{class:"v-toolbar__append"},[(C=n.append)==null?void 0:C.call(n)])])]}}),b(Rs,{defaults:{VTabs:{height:ve(h.value)}}},{default:()=>[b(HN,null,{default:()=>[c.value&&b("div",{class:"v-toolbar__extension",style:{height:ve(h.value)}},[m])]})]})]})}),{contentHeight:u,extensionHeight:h}}});function tu(){const t=J(!1);return Mi(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:I(()=>t.value?void 0:{transition:"none !important"}),isBooted:Bc(t)}}const XN=Ke()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...vb(),...Pf(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=J(),i=Ii(t,"modelValue"),r=I(()=>{var u,h,d,f;const l=(h=(u=s.value)==null?void 0:u.contentHeight)!=null?h:0,c=(f=(d=s.value)==null?void 0:d.extensionHeight)!=null?f:0;return l+c}),{ssrBootStyles:o}=tu(),{layoutItemStyles:a}=Lf({id:t.name,order:I(()=>parseInt(t.order,10)),position:it(t,"location"),layoutSize:r,elementSize:r,active:i,absolute:it(t,"absolute")});return ut(()=>{const[l]=Qm.filterProps(t);return b(Qm,Fi({ref:s,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"}],style:{...a.value,height:void 0,...o.value}},l),n)}),{}}});const JN=[null,"default","comfortable","compact"],Ca=Me({density:{type:String,default:"default",validator:t=>JN.includes(t)}},"density");function Sa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i();return{densityClasses:I(()=>`${e}--density-${t.density}`)}}const ZN=["elevated","flat","tonal","outlined","text","plain"];function Bf(t,e){return b(_t,null,[t&&b("span",{key:"overlay",class:`${e}__overlay`},null),b("span",{key:"underlay",class:`${e}__underlay`},null)])}const nu=Me({color:String,variant:{type:String,default:"elevated",validator:t=>ZN.includes(t)}},"variant");function jf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i();const n=I(()=>{const{variant:r}=Je(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=Vf(I(()=>{const{variant:r,color:o}=Je(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const yb=Me({divided:Boolean,...Vr(),...Ca(),...jr(),...Ws(),...fn(),...An(),...nu()},"v-btn-group"),Xm=Ke()({name:"VBtnGroup",props:yb(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=zn(t),{densityClasses:i}=Sa(t),{borderClasses:r}=Br(t),{elevationClasses:o}=Hr(t),{roundedClasses:a}=zs(t);Ur({VBtn:{height:"auto",color:it(t,"color"),density:it(t,"density"),flat:!0,variant:it(t,"variant")}}),ut(()=>b(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value]},n))}}),_b=Me({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),e1=Me({value:null,disabled:Boolean,selectedClass:String},"group-item");function t1(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=nn("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Ia();Wt(Symbol.for(`${e.description}:id`),i);const r=Le(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=it(t,"value"),a=I(()=>r.disabled.value||t.disabled);r.register({id:i,value:o,disabled:a},s),kn(()=>{r.unregister(i)});const l=I(()=>r.isSelected(i)),c=I(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return Ye(l,u=>{s.emit("group:selected",{value:u})}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:u=>r.select(i,u),selectedClass:c,value:o,disabled:a,group:r}}function wb(t,e){let n=!1;const s=Nt([]),i=Ii(t,"modelValue",[],d=>d==null?[]:bb(s,CA(d)),d=>{const f=s1(s,d);return t.multiple?f:f[0]}),r=nn("useGroup");function o(d,f){const p=d,m=Symbol.for(`${e.description}:id`),w=So(m,r==null?void 0:r.vnode).indexOf(f);w>-1?s.splice(w,0,p):s.push(p)}function a(d){if(n)return;l();const f=s.findIndex(p=>p.id===d);s.splice(f,1)}function l(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!i.value.length&&(i.value=[d.id])}Mi(()=>{l()}),kn(()=>{n=!0});function c(d,f){const p=s.find(m=>m.id===d);if(!(f&&(p==null?void 0:p.disabled)))if(t.multiple){const m=i.value.slice(),y=m.findIndex(E=>E===d),w=~y;if(f=f!=null?f:!w,w&&t.mandatory&&m.length<=1||!w&&t.max!=null&&m.length+1>t.max)return;y<0&&f?m.push(d):y>=0&&!f&&m.splice(y,1),i.value=m}else{const m=i.value.includes(d);if(t.mandatory&&m)return;i.value=(f!=null?f:!m)?[d]:[]}}function u(d){if(t.multiple&&cr('This method is not supported when using "multiple" prop'),i.value.length){const f=i.value[0],p=s.findIndex(w=>w.id===f);let m=(p+d)%s.length,y=s[m];for(;y.disabled&&m!==p;)m=(m+d)%s.length,y=s[m];if(y.disabled)return;i.value=[s[m].id]}else{const f=s.find(p=>!p.disabled);f&&(i.value=[f.id])}}const h={register:o,unregister:a,selected:i,select:c,disabled:it(t,"disabled"),prev:()=>u(s.length-1),next:()=>u(1),isSelected:d=>i.value.includes(d),selectedClass:I(()=>t.selectedClass),items:I(()=>s),getItemIndex:d=>n1(s,d)};return Wt(e,h),h}function n1(t,e){const n=bb(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function bb(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];i.value!=null?e.find(r=>Nw(r,i.value))!=null&&n.push(i.id):e.includes(s)&&n.push(i.id)}return n}function s1(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];e.includes(i.id)&&n.push(i.value!=null?i.value:s)}return n}const Hf=Symbol.for("vuetify:v-btn-toggle");Ke()({name:"VBtnToggle",props:{...yb(),..._b()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=wb(t,Hf);return ut(()=>{const[l]=Xm.filterProps(t);return b(Xm,Fi({class:"v-btn-toggle"},l),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]}})}),{next:i,prev:r,select:o}}});const i1=["x-small","small","default","large","x-large"],su=Me({size:{type:[String,Number],default:"default"}},"size");function iu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i();return xw(()=>{let n,s;return zl(i1,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:ve(t.size),height:ve(t.size)}),{sizeClasses:n,sizeStyles:s}})}const r1=Me({color:String,start:Boolean,end:Boolean,icon:Ms,...su(),...fn({tag:"i"}),...An()},"v-icon"),Mn=Ke()({name:"VIcon",props:r1(),setup(t,e){let{attrs:n,slots:s}=e,i;s.default&&(i=I(()=>{var h,d;const u=(h=s.default)==null?void 0:h.call(s);if(!!u)return(d=u.filter(f=>f.type===Ea&&f.children&&typeof f.children=="string")[0])==null?void 0:d.children}));const{themeClasses:r}=zn(t),{iconData:o}=oR(i||t),{sizeClasses:a}=iu(t),{textColorClasses:l,textColorStyles:c}=Ql(it(t,"color"));return ut(()=>b(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:ve(t.size),height:ve(t.size),width:ve(t.size)},c.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var u;return[(u=s.default)==null?void 0:u.call(s)]}})),{}}});function Eb(t){const e=J(),n=J(!1);if(Df){const s=new IntersectionObserver(i=>{t==null||t(i,s),n.value=!!i.find(r=>r.isIntersecting)});kn(()=>{s.disconnect()}),Ye(e,(i,r)=>{r&&(s.unobserve(r),n.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}const o1=Ke()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...su(),...fn({tag:"div"}),...An()},setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=J(),{themeClasses:o}=zn(t),{sizeClasses:a,sizeStyles:l}=iu(t),{textColorClasses:c,textColorStyles:u}=Ql(it(t,"color")),{textColorClasses:h,textColorStyles:d}=Ql(it(t,"bgColor")),{intersectionRef:f,isIntersecting:p}=Eb(),{resizeRef:m,contentRect:y}=zw(),w=I(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),E=I(()=>Number(t.width)),C=I(()=>l.value?Number(t.size):y.value?y.value.width:Math.max(E.value,32)),D=I(()=>s/(1-E.value/C.value)*2),N=I(()=>E.value/C.value*D.value),A=I(()=>ve((100-w.value)/100*i));return ba(()=>{f.value=r.value,m.value=r.value}),ut(()=>b(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:w.value},{default:()=>[b("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${D.value} ${D.value}`},[b("circle",{class:["v-progress-circular__underlay",h.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":N.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),b("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":N.value,"stroke-dasharray":i,"stroke-dashoffset":A.value},null)]),n.default&&b("div",{class:"v-progress-circular__content"},[n.default({value:w.value})])]})),{}}});const od=Symbol("rippleStop"),a1=80;function Jm(t,e){t.style.transform=e,t.style.webkitTransform=e}function ad(t){return t.constructor.name==="TouchEvent"}function Ib(t){return t.constructor.name==="KeyboardEvent"}const l1=function(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!Ib(t)){const d=e.getBoundingClientRect(),f=ad(t)?t.touches[t.touches.length-1]:t;s=f.clientX-d.left,i=f.clientY-d.top}let r=0,o=.3;(h=e._ripple)!=null&&h.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${s-r}px`,u=n.center?l:`${i-r}px`;return{radius:r,scale:o,x:c,y:u,centerX:a,centerY:l}},Xl={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:u}=l1(t,e,n),h=`${r*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,e.appendChild(s);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Jm(i,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Jm(i,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},i)}};function Tb(t){return typeof t>"u"||!!t}function Xo(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[od])){if(t[od]=!0,ad(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Ib(t),n._ripple.class&&(e.class=n._ripple.class),ad(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Xl.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},a1)}else Xl.show(t,n,e)}}function Zm(t){t[od]=!0}function Qt(t){const e=t.currentTarget;if(!!(e!=null&&e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Qt(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Xl.hide(e)}}function Cb(t){const e=t.currentTarget;!(e!=null&&e._ripple)||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Jo=!1;function Sb(t){!Jo&&(t.keyCode===um.enter||t.keyCode===um.space)&&(Jo=!0,Xo(t))}function kb(t){Jo=!1,Qt(t)}function Ab(t){Jo&&(Jo=!1,Qt(t))}function Rb(t,e,n){var o;const{value:s,modifiers:i}=e,r=Tb(s);if(r||Xl.hide(t),t._ripple=(o=t._ripple)!=null?o:{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,Xh(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",Zm,{passive:!0}),t.addEventListener("mousedown",Zm);return}t.addEventListener("touchstart",Xo,{passive:!0}),t.addEventListener("touchend",Qt,{passive:!0}),t.addEventListener("touchmove",Cb,{passive:!0}),t.addEventListener("touchcancel",Qt),t.addEventListener("mousedown",Xo),t.addEventListener("mouseup",Qt),t.addEventListener("mouseleave",Qt),t.addEventListener("keydown",Sb),t.addEventListener("keyup",kb),t.addEventListener("blur",Ab),t.addEventListener("dragstart",Qt,{passive:!0})}else!r&&n&&Nb(t)}function Nb(t){t.removeEventListener("mousedown",Xo),t.removeEventListener("touchstart",Xo),t.removeEventListener("touchend",Qt),t.removeEventListener("touchmove",Cb),t.removeEventListener("touchcancel",Qt),t.removeEventListener("mouseup",Qt),t.removeEventListener("mouseleave",Qt),t.removeEventListener("keydown",Sb),t.removeEventListener("keyup",kb),t.removeEventListener("dragstart",Qt),t.removeEventListener("blur",Ab)}function c1(t,e){Rb(t,e,!1)}function u1(t){delete t._ripple,Nb(t)}function h1(t,e){if(e.value===e.oldValue)return;const n=Tb(e.oldValue);Rb(t,e,n)}const Ob={mounted:c1,unmounted:u1,updated:h1};const ev={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},xb=Me({location:String},"location");function Db(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Xc();return{locationStyles:I(()=>{if(!t.location)return{};const{side:r,align:o}=OA(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[ev[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[ev[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const d1=Ke()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...xb({location:"top"}),...Ws(),...fn(),...An()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Ii(t,"modelValue"),{isRtl:i}=Xc(),{themeClasses:r}=zn(t),{locationStyles:o}=Db(t),{textColorClasses:a,textColorStyles:l}=Ql(t,"color"),{backgroundColorClasses:c,backgroundColorStyles:u}=Er(I(()=>t.bgColor||t.color)),{backgroundColorClasses:h,backgroundColorStyles:d}=Er(t,"color"),{roundedClasses:f}=zs(t),{intersectionRef:p,isIntersecting:m}=Eb(),y=I(()=>parseInt(t.max,10)),w=I(()=>parseInt(t.height,10)),E=I(()=>parseFloat(t.bufferValue)/y.value*100),C=I(()=>parseFloat(s.value)/y.value*100),D=I(()=>i.value!==t.reverse),N=I(()=>t.indeterminate?"fade-transition":"slide-x-transition"),A=I(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function O(_){if(!p.value)return;const{left:F,right:$,width:q}=p.value.getBoundingClientRect(),V=D.value?q-_.clientX+($-q):_.clientX-F;s.value=Math.round(V/q*y.value)}return ut(()=>b(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&m.value,"v-progress-linear--reverse":D.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},f.value,r.value],style:{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?ve(w.value):0,"--v-progress-linear-height":ve(w.value),...o.value},role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:C.value,onClick:t.clickable&&O},{default:()=>[t.stream&&b("div",{key:"stream",class:["v-progress-linear__stream",a.value],style:{...l.value,[D.value?"left":"right"]:ve(-w.value),borderTop:`${ve(w.value/2)} dotted`,opacity:A.value,top:`calc(50% - ${ve(w.value/4)})`,width:ve(100-E.value,"%"),"--v-progress-linear-stream-to":ve(w.value*(D.value?1:-1))}},null),b("div",{class:["v-progress-linear__background",c.value],style:[u.value,{opacity:A.value,width:ve(t.stream?E.value:100,"%")}]},null),b(Hs,{name:N.value},{default:()=>[t.indeterminate?b("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>b("div",{key:_,class:["v-progress-linear__indeterminate",_,h.value],style:d.value},null))]):b("div",{class:["v-progress-linear__determinate",h.value],style:[d.value,{width:ve(C.value,"%")}]},null)]}),n.default&&b("div",{class:"v-progress-linear__content"},[n.default({value:C.value,buffer:E.value})])]})),{}}}),f1=Me({loading:[Boolean,String]},"loader");function p1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i();return{loaderClasses:I(()=>({[`${e}--loading`]:t.loading}))}}function hW(t,e){var s;let{slots:n}=e;return b("div",{class:`${t.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:t.color,isActive:t.active}))||b(d1,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const g1=["static","relative","fixed","absolute","sticky"],m1=Me({position:{type:String,validator:t=>g1.includes(t)}},"position");function v1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$i();return{positionClasses:I(()=>t.position?`${e}--${t.position}`:void 0)}}function y1(){var t,e;return(e=(t=nn("useRouter"))==null?void 0:t.proxy)==null?void 0:e.$router}function Pb(t,e){const n=lw("RouterLink"),s=I(()=>!!(t.href||t.to)),i=I(()=>(s==null?void 0:s.value)||fm(e,"click")||fm(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:it(t,"href")};const r=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&I(()=>{var o,a;return t.exact?(o=r.isExactActive)==null?void 0:o.value:(a=r.isActive)==null?void 0:a.value}),href:I(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const Lb=Me({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ah=!1;function dW(t,e){let n=!1,s,i;un&&(Bs(()=>{window.addEventListener("popstate",r),s=t==null?void 0:t.beforeEach((o,a,l)=>{ah?n?e(l):l():setTimeout(()=>n?e(l):l()),ah=!0}),i=t==null?void 0:t.afterEach(()=>{ah=!1})}),uf(()=>{window.removeEventListener("popstate",r),s==null||s(),i==null||i()}));function r(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}function _1(t,e){Ye(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Bs(()=>{e(!0)})},{immediate:!0})}const w1=Me({active:{type:Boolean,default:void 0},symbol:{type:null,default:Hf},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ms,appendIcon:Ms,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Vr(),...Ws(),...Ca(),...$f(),...jr(),...e1(),...f1(),...xb(),...m1(),...Lb(),...su(),...fn({tag:"button"}),...An(),...nu({variant:"elevated"})},"VBtn"),ur=Ke()({name:"VBtn",directives:{Ripple:Ob},props:w1(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=zn(t),{borderClasses:r}=Br(t),{colorClasses:o,colorStyles:a,variantClasses:l}=jf(t),{densityClasses:c}=Sa(t),{dimensionStyles:u}=Uf(t),{elevationClasses:h}=Hr(t),{loaderClasses:d}=p1(t),{locationStyles:f}=Db(t),{positionClasses:p}=v1(t),{roundedClasses:m}=zs(t),{sizeClasses:y,sizeStyles:w}=iu(t),E=t1(t,t.symbol,!1),C=Pb(t,n),D=I(()=>{var _;return t.active!==void 0?t.active:C.isLink.value?(_=C.isActive)==null?void 0:_.value:E==null?void 0:E.isSelected.value}),N=I(()=>(E==null?void 0:E.disabled.value)||t.disabled),A=I(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),O=I(()=>{if(t.value!==void 0)return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});return _1(C,E==null?void 0:E.select),ut(()=>{var he,pe;const _=C.isLink.value?"a":t.tag,F=!!(t.prependIcon||s.prepend),$=!!(t.appendIcon||s.append),q=!!(t.icon&&t.icon!==!0),V=(E==null?void 0:E.isSelected.value)&&(!C.isLink.value||((he=C.isActive)==null?void 0:he.value))||!E||((pe=C.isActive)==null?void 0:pe.value);return Hl(b(_,{type:_==="a"?void 0:"button",class:["v-btn",E==null?void 0:E.selectedClass.value,{"v-btn--active":D.value,"v-btn--block":t.block,"v-btn--disabled":N.value,"v-btn--elevated":A.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},i.value,r.value,V?o.value:void 0,c.value,h.value,d.value,p.value,m.value,y.value,l.value],style:[V?a.value:void 0,u.value,f.value,w.value],disabled:N.value||void 0,href:C.href.value,onClick:me=>{var be;N.value||((be=C.navigate)==null||be.call(C,me),E==null||E.toggle())},value:O.value},{default:()=>{var me,be;return[Bf(!0,"v-btn"),!t.icon&&F&&b("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?b(Rs,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},s.prepend):b(Mn,{key:"prepend-icon",icon:t.prependIcon},null)]),b("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&q?b(Mn,{key:"content-icon",icon:t.icon},null):b(Rs,{key:"content-defaults",disabled:!q,defaults:{VIcon:{icon:t.icon}}},s.default)]),!t.icon&&$&&b("span",{key:"append",class:"v-btn__append"},[s.append?b(Rs,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},s.append):b(Mn,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&b("span",{key:"loader",class:"v-btn__loader"},[(be=(me=s.loader)==null?void 0:me.call(s))!=null?be:b(o1,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Cf("ripple"),!N.value&&t.ripple,null]])}),{}}}),tv=Ke()({name:"VAppBarNavIcon",props:{icon:{type:Ms,default:"$menu"}},setup(t,e){let{slots:n}=e;return ut(()=>b(ur,{class:"v-app-bar-nav-icon",icon:t.icon},n)),{}}}),b1=Ke()({name:"VAppBarTitle",props:gb(),setup(t,e){let{slots:n}=e;return ut(()=>b(mb,Fi(t,{class:"v-app-bar-title"}),n)),{}}}),E1=xf("flex-grow-1","div","VSpacer"),ld=Symbol.for("vuetify:list");function fW(){const t=Le(ld,{hasPrepend:J(!1),updateHasPrepend:()=>null}),e={hasPrepend:J(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return Wt(ld,e),t}function I1(){return Le(ld,null)}const T1={open:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(n){const r=new Set;r.add(e);let o=i.get(e);for(;o!=null;)r.add(o),o=i.get(o);return r}else return s.delete(e),s},select:()=>null},Mb={open:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(n){let r=i.get(e);for(s.add(e);r!=null&&r!==e;)s.add(r),r=i.get(r);return s}else s.delete(e);return s},select:()=>null},C1={open:Mb.open,select:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(!n)return s;const r=[];let o=i.get(e);for(;o!=null;)r.push(o),o=i.get(o);return new Set(r)}},Wf=t=>{const e={select:n=>{let{id:s,value:i,selected:r}=n;if(s=ce(s),t&&!i){const o=Array.from(r.entries()).reduce((a,l)=>{let[c,u]=l;return u==="on"?[...a,c]:a},[]);if(o.length===1&&o[0]===s)return r}return r.set(s,i?"on":"off"),r},in:(n,s,i)=>{let r=new Map;for(const o of n||[])r=e.select({id:o,value:!0,selected:new Map(r),children:s,parents:i});return r},out:n=>{const s=[];for(const[i,r]of n.entries())r==="on"&&s.push(i);return s}};return e},Fb=t=>{const e=Wf(t);return{select:s=>{let{selected:i,id:r,...o}=s;r=ce(r);const a=i.has(r)?new Map([[r,i.get(r)]]):new Map;return e.select({...o,id:r,selected:a})},in:(s,i,r)=>{let o=new Map;return s!=null&&s.length&&(o=e.in(s.slice(0,1),i,r)),o},out:(s,i,r)=>e.out(s,i,r)}},S1=t=>{const e=Wf(t);return{select:s=>{let{id:i,selected:r,children:o,...a}=s;return i=ce(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...a})},in:e.in,out:e.out}},k1=t=>{const e=Fb(t);return{select:s=>{let{id:i,selected:r,children:o,...a}=s;return i=ce(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...a})},in:e.in,out:e.out}},A1=t=>{const e={select:n=>{let{id:s,value:i,selected:r,children:o,parents:a}=n;s=ce(s);const l=new Map(r),c=[s];for(;c.length;){const h=c.shift();r.set(h,i?"on":"off"),o.has(h)&&c.push(...o.get(h))}let u=a.get(s);for(;u;){const h=o.get(u),d=h.every(p=>r.get(p)==="on"),f=h.every(p=>!r.has(p)||r.get(p)==="off");r.set(u,d?"on":f?"off":"indeterminate"),u=a.get(u)}return t&&!i&&Array.from(r.entries()).reduce((d,f)=>{let[p,m]=f;return m==="on"?[...d,p]:d},[]).length===0?l:r},in:(n,s,i)=>{let r=new Map;for(const o of n||[])r=e.select({id:o,value:!0,selected:new Map(r),children:s,parents:i});return r},out:(n,s)=>{const i=[];for(const[r,o]of n.entries())o==="on"&&!s.has(r)&&i.push(r);return i}};return e},Zo=Symbol.for("vuetify:nested"),$b={id:J(),root:{register:()=>null,unregister:()=>null,parents:J(new Map),children:J(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:J(new Set),selected:J(new Map),selectedValues:J([])}},pW=Me({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),gW=t=>{let e=!1;const n=J(new Map),s=J(new Map),i=Ii(t,"opened",t.opened,h=>new Set(h),h=>[...h.values()]),r=I(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return k1(t.mandatory);case"leaf":return S1(t.mandatory);case"independent":return Wf(t.mandatory);case"single-independent":return Fb(t.mandatory);case"classic":default:return A1(t.mandatory)}}),o=I(()=>{if(typeof t.openStrategy=="object")return t.openStrategy;switch(t.openStrategy){case"list":return C1;case"single":return T1;case"multiple":default:return Mb}}),a=Ii(t,"selected",t.selected,h=>r.value.in(h,n.value,s.value),h=>r.value.out(h,n.value,s.value));kn(()=>{e=!0});function l(h){const d=[];let f=h;for(;f!=null;)d.unshift(f),f=s.value.get(f);return d}const c=nn("nested"),u={id:J(),root:{opened:i,selected:a,selectedValues:I(()=>{const h=[];for(const[d,f]of a.value.entries())f==="on"&&h.push(d);return h}),register:(h,d,f)=>{d&&h!==d&&s.value.set(h,d),f&&n.value.set(h,[]),d!=null&&n.value.set(d,[...n.value.get(d)||[],h])},unregister:h=>{var f;if(e)return;n.value.delete(h);const d=s.value.get(h);if(d){const p=(f=n.value.get(d))!=null?f:[];n.value.set(d,p.filter(m=>m!==h))}s.value.delete(h),i.value.delete(h)},open:(h,d,f)=>{c.emit("click:open",{id:h,value:d,path:l(h),event:f});const p=o.value.open({id:h,value:d,opened:new Set(i.value),children:n.value,parents:s.value,event:f});p&&(i.value=p)},openOnSelect:(h,d,f)=>{const p=o.value.select({id:h,value:d,selected:new Map(a.value),opened:new Set(i.value),children:n.value,parents:s.value,event:f});p&&(i.value=p)},select:(h,d,f)=>{c.emit("click:select",{id:h,value:d,path:l(h),event:f});const p=r.value.select({id:h,value:d,selected:new Map(a.value),children:n.value,parents:s.value,event:f});p&&(a.value=p),u.root.openOnSelect(h,d,f)},children:n,parents:s}};return Wt(Zo,u),u.root},R1=(t,e)=>{const n=Le(Zo,$b),s=Symbol(Ia()),i=I(()=>{var o;return(o=t.value)!=null?o:s}),r={...n,id:i,open:(o,a)=>n.root.open(i.value,o,a),openOnSelect:(o,a)=>n.root.openOnSelect(i.value,o,a),isOpen:I(()=>n.root.opened.value.has(i.value)),parent:I(()=>n.root.parents.value.get(i.value)),select:(o,a)=>n.root.select(i.value,o,a),isSelected:I(()=>n.root.selected.value.get(ce(i.value))==="on"),isIndeterminate:I(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:I(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,e),kn(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),e&&Wt(Zo,r),r},mW=()=>{const t=Le(Zo,$b);Wt(Zo,{...t,isGroupActivator:!0})};const N1=Me({start:Boolean,end:Boolean,icon:Ms,image:String,...Ca(),...Ws(),...su(),...fn(),...An(),...nu({variant:"flat"})},"v-avatar"),nv=Ke()({name:"VAvatar",props:N1(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=zn(t),{colorClasses:i,colorStyles:r,variantClasses:o}=jf(t),{densityClasses:a}=Sa(t),{roundedClasses:l}=zs(t),{sizeClasses:c,sizeStyles:u}=iu(t);return ut(()=>b(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},s.value,i.value,a.value,l.value,c.value,o.value],style:[r.value,u.value]},{default:()=>{var h;return[t.image?b(pb,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?b(Mn,{key:"icon",icon:t.icon},null):(h=n.default)==null?void 0:h.call(n),Bf(!1,"v-avatar")]}})),{}}}),O1=xf("v-list-item-subtitle"),x1=xf("v-list-item-title"),D1=Ke()({name:"VListItem",directives:{Ripple:Ob},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Ms,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Ms,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:dm,onClickOnce:dm,...Vr(),...Ca(),...$f(),...jr(),...Ws(),...Lb(),...fn(),...An(),...nu({variant:"text"})},emits:{click:t=>!0},setup(t,e){let{attrs:n,slots:s,emit:i}=e;const r=Pb(t,n),o=I(()=>{var Q;return(Q=t.value)!=null?Q:r.href.value}),{select:a,isSelected:l,isIndeterminate:c,isGroupActivator:u,root:h,parent:d,openOnSelect:f}=R1(o,!1),p=I1(),m=I(()=>{var Q;return t.active!==!1&&(t.active||((Q=r.isActive)==null?void 0:Q.value)||l.value)}),y=I(()=>t.link!==!1&&r.isLink.value),w=I(()=>!t.disabled&&t.link!==!1&&(t.link||r.isClickable.value||t.value!=null&&!!p)),E=I(()=>t.rounded||t.nav),C=I(()=>{var Q;return{color:m.value&&(Q=t.activeColor)!=null?Q:t.color,variant:t.variant}});Ye(()=>{var Q;return(Q=r.isActive)==null?void 0:Q.value},Q=>{Q&&d.value!=null&&h.open(d.value,!0),Q&&f(Q)},{immediate:!0});const{themeClasses:D}=zn(t),{borderClasses:N}=Br(t),{colorClasses:A,colorStyles:O,variantClasses:_}=jf(C),{densityClasses:F}=Sa(t),{dimensionStyles:$}=Uf(t),{elevationClasses:q}=Hr(t),{roundedClasses:V}=zs(E),he=I(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),pe=I(()=>({isActive:m.value,select:a,isSelected:l.value,isIndeterminate:c.value}));function me(Q){var fe;i("click",Q),!(u||!w.value)&&((fe=r.navigate)==null||fe.call(r,Q),t.value!=null&&a(!l.value,Q))}function be(Q){(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),me(Q))}return ut(()=>{const Q=y.value?"a":t.tag,fe=!p||l.value||m.value,Ae=s.title||t.title,Bt=s.subtitle||t.subtitle,rt=!!(t.appendAvatar||t.appendIcon),$e=!!(rt||s.append),Tt=!!(t.prependAvatar||t.prependIcon),Rn=!!(Tt||s.prepend);return p==null||p.updateHasPrepend(Rn),Hl(b(Q,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":t.disabled,"v-list-item--link":w.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!Rn&&(p==null?void 0:p.hasPrepend.value),[`${t.activeClass}`]:t.activeClass&&m.value},D.value,N.value,fe?A.value:void 0,F.value,q.value,he.value,V.value,_.value],style:[fe?O.value:void 0,$.value],href:r.href.value,tabindex:w.value?0:void 0,onClick:me,onKeydown:w.value&&!y.value&&be},{default:()=>{var k;return[Bf(w.value||m.value,"v-list-item"),Rn&&b("div",{key:"prepend",class:"v-list-item__prepend"},[s.prepend?b(Rs,{key:"prepend-defaults",disabled:!Tt,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var M;return[(M=s.prepend)==null?void 0:M.call(s,pe.value)]}}):b(_t,null,[t.prependAvatar&&b(nv,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&b(Mn,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),b("div",{class:"v-list-item__content","data-no-activator":""},[Ae&&b(x1,{key:"title"},{default:()=>{var M,B;return[(B=(M=s.title)==null?void 0:M.call(s,{title:t.title}))!=null?B:t.title]}}),Bt&&b(O1,{key:"subtitle"},{default:()=>{var M,B;return[(B=(M=s.subtitle)==null?void 0:M.call(s,{subtitle:t.subtitle}))!=null?B:t.subtitle]}}),(k=s.default)==null?void 0:k.call(s,pe.value)]),$e&&b("div",{key:"append",class:"v-list-item__append"},[s.append?b(Rs,{key:"append-defaults",disabled:!rt,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var M;return[(M=s.append)==null?void 0:M.call(s,pe.value)]}}):b(_t,null,[t.appendIcon&&b(Mn,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&b(nv,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])]}}),[[Cf("ripple"),w.value&&t.ripple]])}),{}}});function P1(t){let{rootEl:e,isSticky:n,layoutItemStyles:s}=t;const i=J(!1),r=J(0),o=I(()=>{const c=typeof i.value=="boolean"?"top":i.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,i.value?{[c]:ve(r.value)}:{top:s.value.top}]});Mi(()=>{Ye(n,c=>{c?window.addEventListener("scroll",l,{passive:!0}):window.removeEventListener("scroll",l)},{immediate:!0})}),kn(()=>{document.removeEventListener("scroll",l)});let a=0;function l(){var p;const c=a>window.scrollY?"up":"down",u=e.value.getBoundingClientRect(),h=parseFloat((p=s.value.top)!=null?p:0),d=window.scrollY-Math.max(0,r.value-h),f=u.height+Math.max(r.value,h)-window.scrollY-window.innerHeight;u.height<window.innerHeight-h?(i.value="top",r.value=h):c==="up"&&i.value==="bottom"||c==="down"&&i.value==="top"?(r.value=window.scrollY+u.top,i.value=!0):c==="down"&&f<=0?(r.value=0,i.value="bottom"):c==="up"&&d<=0&&(r.value=u.top+d,i.value="top"),a=window.scrollY}return{isStuck:i,stickyStyles:o}}const L1=100,M1=20;function sv(t){const e=1.41421356237;return(t<0?-1:1)*Math.sqrt(Math.abs(t))*e}function iv(t){if(t.length<2)return 0;if(t.length===2)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const s=sv(e),i=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(i-s)*Math.abs(i),n===t.length-1&&(e*=.5)}return sv(e)*1e3}function F1(){const t={};function e(i){Array.from(i.changedTouches).forEach(r=>{var a;((a=t[r.identifier])!=null?a:t[r.identifier]=new AA(M1)).push([i.timeStamp,r])})}function n(i){Array.from(i.changedTouches).forEach(r=>{delete t[r.identifier]})}function s(i){var c;const r=(c=t[i])==null?void 0:c.values().reverse();if(!r)throw new Error(`No samples for touch id ${i}`);const o=r[0],a=[],l=[];for(const u of r){if(o[0]-u[0]>L1)break;a.push({t:u[0],d:u[1].clientX}),l.push({t:u[0],d:u[1].clientY})}return{x:iv(a),y:iv(l),get direction(){const{x:u,y:h}=this,[d,f]=[Math.abs(u),Math.abs(h)];return d>f&&u>=0?"right":d>f&&u<=0?"left":f>d&&h>=0?"down":f>d&&h<=0?"up":$1()}}}return{addMovement:e,endTouch:n,getVelocity:s}}function $1(){throw new Error}function U1(t){let{isActive:e,isTemporary:n,width:s,touchless:i,position:r}=t;Mi(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",C,{passive:!0})}),kn(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",C)});const o=I(()=>["left","right"].includes(r.value)),{addMovement:a,endTouch:l,getVelocity:c}=F1();let u=!1;const h=J(!1),d=J(0),f=J(0);let p;function m(N,A){return(r.value==="left"?N:r.value==="right"?document.documentElement.clientWidth-N:r.value==="top"?N:r.value==="bottom"?document.documentElement.clientHeight-N:Xi())-(A?s.value:0)}function y(N){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const O=r.value==="left"?(N-f.value)/s.value:r.value==="right"?(document.documentElement.clientWidth-N-f.value)/s.value:r.value==="top"?(N-f.value)/s.value:r.value==="bottom"?(document.documentElement.clientHeight-N-f.value)/s.value:Xi();return A?Math.max(0,Math.min(1,O)):O}function w(N){if(i.value)return;const A=N.changedTouches[0].clientX,O=N.changedTouches[0].clientY,_=25,F=r.value==="left"?A<_:r.value==="right"?A>document.documentElement.clientWidth-_:r.value==="top"?O<_:r.value==="bottom"?O>document.documentElement.clientHeight-_:Xi(),$=e.value&&(r.value==="left"?A<s.value:r.value==="right"?A>document.documentElement.clientWidth-s.value:r.value==="top"?O<s.value:r.value==="bottom"?O>document.documentElement.clientHeight-s.value:Xi());(F||$||e.value&&n.value)&&(u=!0,p=[A,O],f.value=m(o.value?A:O,e.value),d.value=y(o.value?A:O),l(N),a(N))}function E(N){const A=N.changedTouches[0].clientX,O=N.changedTouches[0].clientY;if(u){if(!N.cancelable){u=!1;return}const F=Math.abs(A-p[0]),$=Math.abs(O-p[1]);(o.value?F>$&&F>3:$>F&&$>3)?(h.value=!0,u=!1):(o.value?$:F)>3&&(u=!1)}if(!h.value)return;N.preventDefault(),a(N);const _=y(o.value?A:O,!1);d.value=Math.max(0,Math.min(1,_)),_>1?f.value=m(o.value?A:O,!0):_<0&&(f.value=m(o.value?A:O,!1))}function C(N){if(u=!1,!h.value)return;a(N),h.value=!1;const A=c(N.changedTouches[0].identifier),O=Math.abs(A.x),_=Math.abs(A.y);(o.value?O>_&&O>400:_>O&&_>3)?e.value=A.direction===({left:"right",right:"left",top:"down",bottom:"up"}[r.value]||Xi()):e.value=d.value>.5}const D=I(()=>h.value?{transform:r.value==="left"?`translateX(calc(-100% + ${d.value*s.value}px))`:r.value==="right"?`translateX(calc(100% - ${d.value*s.value}px))`:r.value==="top"?`translateY(calc(-100% + ${d.value*s.value}px))`:r.value==="bottom"?`translateY(calc(100% - ${d.value*s.value}px))`:Xi(),transition:"none"}:void 0);return{isDragging:h,dragProgress:d,dragStyles:D}}function Xi(){throw new Error}const V1=["start","end","left","right","top","bottom"],B1=Ke()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:t=>V1.includes(t)},sticky:Boolean,...Vr(),...jr(),...Pf(),...Ws(),...fn({tag:"nav"}),...An()},emits:{"update:modelValue":t=>!0,"update:rail":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const{isRtl:r}=Xc(),{themeClasses:o}=zn(t),{borderClasses:a}=Br(t),{backgroundColorClasses:l,backgroundColorStyles:c}=Er(it(t,"color")),{elevationClasses:u}=Hr(t),{mobile:h}=ZA(),{roundedClasses:d}=zs(t),f=y1(),p=Ii(t,"modelValue",null,Ae=>!!Ae),{ssrBootStyles:m}=tu(),y=J(),w=J(!1),E=I(()=>t.rail&&t.expandOnHover&&w.value?Number(t.width):Number(t.rail?t.railWidth:t.width)),C=I(()=>Jh(t.location,r.value)),D=I(()=>!t.permanent&&(h.value||t.temporary)),N=I(()=>t.sticky&&!D.value&&C.value!=="bottom");t.expandOnHover&&t.rail!=null&&Ye(w,Ae=>s("update:rail",!Ae)),t.disableResizeWatcher||Ye(D,Ae=>!t.permanent&&Bs(()=>p.value=!Ae)),!t.disableRouteWatcher&&f&&Ye(f.currentRoute,()=>D.value&&(p.value=!1)),Ye(()=>t.permanent,Ae=>{Ae&&(p.value=!0)}),If(()=>{t.modelValue!=null||D.value||(p.value=t.permanent||!h.value)});const{isDragging:A,dragProgress:O,dragStyles:_}=U1({isActive:p,isTemporary:D,width:E,touchless:it(t,"touchless"),position:C}),F=I(()=>{const Ae=D.value?0:t.rail&&t.expandOnHover?Number(t.railWidth):E.value;return A.value?Ae*O.value:Ae}),{layoutItemStyles:$,layoutRect:q,layoutItemScrimStyles:V}=Lf({id:t.name,order:I(()=>parseInt(t.order,10)),position:C,layoutSize:F,elementSize:E,active:I(()=>p.value||A.value),disableTransitions:I(()=>A.value),absolute:I(()=>t.absolute||N.value&&typeof he.value!="string")}),{isStuck:he,stickyStyles:pe}=P1({rootEl:y,isSticky:N,layoutItemStyles:$}),me=Er(I(()=>typeof t.scrim=="string"?t.scrim:null)),be=I(()=>({...A.value?{opacity:O.value*.2,transition:"none"}:void 0,...q.value?{left:ve(q.value.left),right:ve(q.value.right),top:ve(q.value.top),bottom:ve(q.value.bottom)}:void 0,...V.value}));Ur({VList:{bgColor:"transparent"}});function Q(){w.value=!0}function fe(){w.value=!1}return ut(()=>{const Ae=i.image||t.image;return b(_t,null,[b(t.tag,Fi({ref:y,onMouseenter:Q,onMouseleave:fe,class:["v-navigation-drawer",`v-navigation-drawer--${C.value}`,{"v-navigation-drawer--expand-on-hover":t.expandOnHover,"v-navigation-drawer--floating":t.floating,"v-navigation-drawer--is-hovering":w.value,"v-navigation-drawer--rail":t.rail,"v-navigation-drawer--temporary":D.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":N.value},o.value,l.value,a.value,u.value,d.value],style:[c.value,$.value,_.value,m.value,pe.value]},n),{default:()=>{var Bt,rt,$e,Tt;return[Ae&&b("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(Bt=i.image)==null?void 0:Bt.call(i,{image:t.image}):b("img",{src:t.image,alt:""},null)]),i.prepend&&b("div",{class:"v-navigation-drawer__prepend"},[(rt=i.prepend)==null?void 0:rt.call(i)]),b("div",{class:"v-navigation-drawer__content"},[($e=i.default)==null?void 0:$e.call(i)]),i.append&&b("div",{class:"v-navigation-drawer__append"},[(Tt=i.append)==null?void 0:Tt.call(i)])]}}),b(Hs,{name:"fade-transition"},{default:()=>[D.value&&(A.value||p.value)&&!!t.scrim&&b("div",{class:["v-navigation-drawer__scrim",me.backgroundColorClasses.value],style:[be.value,me.backgroundColorStyles.value],onClick:()=>p.value=!1},null)]})])}),{isStuck:he}}}),j1={key:"0",class:"btn_cont ml-3"},H1=js({__name:"AppBar",setup(t){const e=ub(),n=J(!1),s=cb(),i=lb(),r=I(()=>s.path==="/list");return(o,a)=>(vn(),Kg(_t,null,[b(XN,{flat:""},{default:nt(()=>[b(jN,{group:"","hide-on-leave":""},{default:nt(()=>[Je(r)?(vn(),Kg("div",j1,[b(tv,null,{default:nt(()=>[b(ur,{icon:"arrow_back",onClick:a[0]||(a[0]=l=>Je(i).push("/"))})]),_:1})])):(vn(),es(b1,{key:"1"},{default:nt(()=>[Fr("h3",null,WC(Je(e).pageTitle),1)]),_:1})),b(E1,{key:"2"}),Je(r)?(vn(),es(ur,{key:"3",onClick:a[1]||(a[1]=l=>Je(i).push("/")),color:"primary"},{default:nt(()=>[lr("done")]),_:1})):(vn(),es(tv,{key:"4",variant:"text",onClick:a[2]||(a[2]=cA(l=>n.value=!n.value,["stop"]))},{default:nt(()=>[b(Mn,{icon:"notifications"})]),_:1}))]),_:1})]),_:1}),b(B1,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value=l),location:"top",app:"",temporary:""},{default:nt(()=>[b(D1,null,{default:nt(()=>[lr(" Become a sponsor ")]),_:1})]),_:1},8,["modelValue"])],64))}});const W1=Ke()({name:"VMain",props:{scrollable:Boolean,...fn({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:s}=TR(),{ssrBootStyles:i}=tu();return ut(()=>b(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[s.value,i.value]},{default:()=>{var r,o;return[t.scrollable?b("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(o=n.default)==null?void 0:o.call(n)]}})),{}}}),z1=js({__name:"View",setup(t){return(e,n)=>{const s=ow("router-view");return vn(),es(W1,{class:"d-flex flex-column"},{default:nt(()=>[b(s,null,{default:nt(({Component:i})=>[b(Hs,{name:"lol",mode:"out-in"},{default:nt(()=>[(vn(),es(lw(i)))]),_:2},1024)]),_:1})]),_:1})}}});const q1=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},K1=q1(z1,[["__scopeId","data-v-48e7bea1"]]);const G1=Ke()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Vr(),...Ca(),...jr(),...Ws(),...Pf({name:"bottom-navigation"}),...fn({tag:"header"}),..._b({modelValue:!0,selectedClass:"v-btn--selected"}),...An()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{themeClasses:s}=ER(),{borderClasses:i}=Br(t),{backgroundColorClasses:r,backgroundColorStyles:o}=Er(it(t,"bgColor")),{densityClasses:a}=Sa(t),{elevationClasses:l}=Hr(t),{roundedClasses:c}=zs(t),{ssrBootStyles:u}=tu(),h=I(()=>Number(t.height)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0)),d=it(t,"active"),{layoutItemStyles:f}=Lf({id:t.name,order:I(()=>parseInt(t.order,10)),position:I(()=>"bottom"),layoutSize:I(()=>d.value?h.value:0),elementSize:h,active:d,absolute:it(t,"absolute")});return wb(t,Hf),Ur({VBtn:{color:it(t,"color"),density:it(t,"density"),stacked:I(()=>t.mode!=="horizontal"),variant:"text"}},{scoped:!0}),ut(()=>b(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":d.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":t.mode==="shift"},s.value,r.value,i.value,a.value,l.value,c.value],style:[o.value,f.value,{height:ve(h.value),transform:`translateY(${ve(d.value?0:100,"%")})`},u.value]},{default:()=>[n.default&&b("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}}),Y1=Fr("span",null,"Lists",-1),Q1=Fr("span",null,"Timer",-1),X1=Fr("span",null,"Settings",-1),J1=js({__name:"BottomNav",setup(t){const e=ub(),n=lb(),s=cb(),i=a=>{n.push({name:a})},r=I({get(){return s.name=="Home"?"Home":"List"},set(){}}),o=I({get(){return s.name},set(){}});return(a,l)=>(vn(),es(G1,{height:Je(e).keyboard?0:56,style:Lc({bottom:Je(e).keyboard?"-56px":"0"}),modelValue:Je(o),"onUpdate:modelValue":l[3]||(l[3]=c=>Pe(o)?o.value=c:null),mandatory:"force",mode:"shift",color:"#db88fa",grow:""},{default:nt(()=>[b(ur,{onClick:l[0]||(l[0]=c=>i("Home")),value:Je(r)},{default:nt(()=>[b(Mn,null,{default:nt(()=>[lr("list")]),_:1}),Y1]),_:1},8,["value"]),b(ur,{onClick:l[1]||(l[1]=c=>i("Timer")),value:"Timer"},{default:nt(()=>[b(Mn,null,{default:nt(()=>[lr("timer")]),_:1}),Q1]),_:1}),b(ur,{onClick:l[2]||(l[2]=c=>i("Settings")),value:"Settings"},{default:nt(()=>[b(Mn,null,{default:nt(()=>[lr("settings")]),_:1}),X1]),_:1})]),_:1},8,["height","style","modelValue"]))}});const Z1=Ke()({name:"VApp",props:{...IR({fullHeight:!0}),...An()},setup(t,e){let{slots:n}=e;const s=zn(t),{layoutClasses:i,layoutStyles:r,getLayoutItem:o,items:a,layoutRef:l}=SR(t),{rtlClasses:c}=Xc();return ut(()=>{var u;return b("div",{ref:l,class:["v-application",s.themeClasses.value,i.value,c.value],style:r.value},[b("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:a,theme:s}}}),eO=js({__name:"Default",setup(t){return(e,n)=>(vn(),es(Z1,null,{default:nt(()=>[b(H1),b(K1),b(J1)]),_:1}))}});/**
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
 */const W=function(t,e){if(!t)throw Wr(e)},Wr=function(t){return new Error("Firebase Database ("+Ub.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Vb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tO=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new nO;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bb=function(t){const e=Vb(t);return ru.encodeByteArray(e,!0)},Jl=function(t){return Bb(t).replace(/\./g,"")},Zl=function(t){try{return ru.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sO(t){return jb(void 0,t)}function jb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iO(n)||(t[n]=jb(t[n],e[n]));return t}function iO(t){return t!=="__proto__"}/**
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
 */function rO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oO=()=>rO().__FIREBASE_DEFAULTS__,aO=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zl(t[1]);return e&&JSON.parse(e)},zf=()=>{try{return oO()||aO()||lO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hb=t=>{var e,n;return(n=(e=zf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cO=t=>{const e=Hb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uO=()=>{var t;return(t=zf())===null||t===void 0?void 0:t.config},Wb=t=>{var e;return(e=zf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function hO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Jl(JSON.stringify(n)),Jl(JSON.stringify(o)),a].join(".")}/**
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function zb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dO(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kb(){return Ub.NODE_ADMIN===!0}function Kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function fO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pO="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pO,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gO(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function gO(t,e){return t.replace(mO,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const mO=/\{\$([^}]+)}/g;/**
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
 */const Yb=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ta(Zl(r[0])||""),n=ta(Zl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vO=function(t){const e=Yb(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yO=function(t){const e=Yb(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function hs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ir(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ec(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function na(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(rv(r)&&rv(o)){if(!na(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function rv(t){return t!==null&&typeof t=="object"}/**
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
 */function zr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class _O{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wO(t,e){const n=new bO(t,e);return n.subscribe.bind(n)}class bO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");EO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=lh),i.error===void 0&&(i.error=lh),i.complete===void 0&&(i.complete=lh);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lh(){}function IO(t,e){return`${t} failed: ${e} argument `}/**
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
 */const TO=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,W(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ou=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const CO=1e3,SO=2,kO=4*60*60*1e3,AO=.5;function ov(t,e=CO,n=SO){const s=e*Math.pow(n,t),i=Math.round(AO*s*(Math.random()-.5)*2);return Math.min(kO,s+i)}/**
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
 */const ni="[DEFAULT]";/**
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
 */class RO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ea;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OO(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:NO(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NO(t){return t===ni?void 0:t}function OO(t){return t.instantiationMode==="EAGER"}/**
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
 */class xO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const DO={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},PO=ke.INFO,LO={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},MO=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=LO[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qr{constructor(e){this.name=e,this._logLevel=PO,this._logHandler=MO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const FO=(t,e)=>e.some(n=>t instanceof n);let av,lv;function $O(){return av||(av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UO(){return lv||(lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qb=new WeakMap,ud=new WeakMap,Xb=new WeakMap,ch=new WeakMap,Gf=new WeakMap;function VO(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ns(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qb.set(n,t)}).catch(()=>{}),Gf.set(e,t),e}function BO(t){if(ud.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let hd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jO(t){hd=t(hd)}function HO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(uh(this),e,...n);return Xb.set(s,e.sort?e.sort():[e]),Ns(s)}:UO().includes(t)?function(...e){return t.apply(uh(this),e),Ns(Qb.get(this))}:function(...e){return Ns(t.apply(uh(this),e))}}function WO(t){return typeof t=="function"?HO(t):(t instanceof IDBTransaction&&BO(t),FO(t,$O())?new Proxy(t,hd):t)}function Ns(t){if(t instanceof IDBRequest)return VO(t);if(ch.has(t))return ch.get(t);const e=WO(t);return e!==t&&(ch.set(t,e),Gf.set(e,t)),e}const uh=t=>Gf.get(t);function Jb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ns(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ns(o.result),l.oldVersion,l.newVersion,Ns(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const zO=["get","getKey","getAll","getAllKeys","count"],qO=["put","add","delete","clear"],hh=new Map;function cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hh.get(e))return hh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qO.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zO.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return hh.set(e,r),r}jO(t=>({...t,get:(e,n,s)=>cv(e,n)||t.get(e,n,s),has:(e,n)=>!!cv(e,n)||t.has(e,n)}));/**
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
 */class KO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GO(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function GO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",uv="0.9.7";/**
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
 */const Ti=new qr("@firebase/app"),YO="@firebase/app-compat",QO="@firebase/analytics-compat",XO="@firebase/analytics",JO="@firebase/app-check-compat",ZO="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",sx="@firebase/database-compat",ix="@firebase/functions",rx="@firebase/functions-compat",ox="@firebase/installations",ax="@firebase/installations-compat",lx="@firebase/messaging",cx="@firebase/messaging-compat",ux="@firebase/performance",hx="@firebase/performance-compat",dx="@firebase/remote-config",fx="@firebase/remote-config-compat",px="@firebase/storage",gx="@firebase/storage-compat",mx="@firebase/firestore",vx="@firebase/firestore-compat",yx="firebase",_x="9.19.1";/**
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
 */const fd="[DEFAULT]",wx={[dd]:"fire-core",[YO]:"fire-core-compat",[XO]:"fire-analytics",[QO]:"fire-analytics-compat",[ZO]:"fire-app-check",[JO]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[sx]:"fire-rtdb-compat",[ix]:"fire-fn",[rx]:"fire-fn-compat",[ox]:"fire-iid",[ax]:"fire-iid-compat",[lx]:"fire-fcm",[cx]:"fire-fcm-compat",[ux]:"fire-perf",[hx]:"fire-perf-compat",[dx]:"fire-rc",[fx]:"fire-rc-compat",[px]:"fire-gcs",[gx]:"fire-gcs-compat",[mx]:"fire-fst",[vx]:"fire-fst-compat","fire-js":"fire-js",[yx]:"fire-js-all"};/**
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
 */const tc=new Map,pd=new Map;function bx(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(pd.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,t);for(const n of tc.values())bx(n,t);return!0}function Ui(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ex={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Os=new qs("app","Firebase",Ex);/**
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
 */class Ix{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Os.create("app-deleted",{appName:this._name})}}/**
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
 */const Vi=_x;function Zb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Os.create("bad-app-name",{appName:String(i)});if(n||(n=uO()),!n)throw Os.create("no-options");const r=tc.get(i);if(r){if(na(n,r.options)&&na(s,r.config))return r;throw Os.create("duplicate-app",{appName:i})}const o=new xO(i);for(const l of pd.values())o.addComponent(l);const a=new Ix(n,s,o);return tc.set(i,a),a}function au(t=fd){const e=tc.get(t);if(!e&&t===fd)return Zb();if(!e)throw Os.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=(s=wx[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Kt(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Tx="firebase-heartbeat-database",Cx=1,sa="firebase-heartbeat-store";let dh=null;function e0(){return dh||(dh=Jb(Tx,Cx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(sa)}}}).catch(t=>{throw Os.create("idb-open",{originalErrorMessage:t.message})})),dh}async function Sx(t){try{return(await e0()).transaction(sa).objectStore(sa).get(t0(t))}catch(e){if(e instanceof pn)Ti.warn(e.message);else{const n=Os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ti.warn(n.message)}}}async function hv(t,e){try{const s=(await e0()).transaction(sa,"readwrite");return await s.objectStore(sa).put(e,t0(t)),s.done}catch(n){if(n instanceof pn)Ti.warn(n.message);else{const s=Os.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ti.warn(s.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kx=1024,Ax=30*24*60*60*1e3;class Rx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ox(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ax}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dv(),{heartbeatsToSend:n,unsentEntries:s}=Nx(this._heartbeatsCache.heartbeats),i=Jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dv(){return new Date().toISOString().substring(0,10)}function Nx(t,e=kx){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),fv(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ox{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kf()?Gb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fv(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xx(t){Kt(new Vt("platform-logger",e=>new KO(e),"PRIVATE")),Kt(new Vt("heartbeat",e=>new Rx(e),"PRIVATE")),bt(dd,uv,t),bt(dd,uv,"esm2017"),bt("fire-js","")}xx("");function Yf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function n0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dx=n0,s0=new qs("auth","Firebase",n0());/**
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
 */const pv=new qr("@firebase/auth");function Ol(t,...e){pv.logLevel<=ke.ERROR&&pv.error(`Auth (${Vi}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Qf(t,...e)}function Fn(t,...e){return Qf(t,...e)}function i0(t,e,n){const s=Object.assign(Object.assign({},Dx()),{[e]:n});return new qs("auth","Firebase",s).create(e,{appName:t.name})}function r0(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&hn(t,"argument-error"),i0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return s0.create(t,...e)}function se(t,e,...n){if(!t)throw Qf(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function is(t,e){t||Qn(e)}/**
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
 */const gv=new Map;function Xn(t){is(t instanceof Function,"Expected a class definition");let e=gv.get(t);return e?(is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gv.set(t,e),e)}/**
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
 */function Px(t,e){const n=Ui(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(na(r,e!=null?e:{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function Lx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mx(){return mv()==="http:"||mv()==="https:"}function mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mx()||zb()||"connection"in navigator)?navigator.onLine:!0}function $x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,is(n>e,"Short delay should be less than long delay!"),this.isMobile=qf()||qb()}get(){return Fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xf(t,e){is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class o0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ux={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Vx=new ka(3e4,6e4);function Aa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ra(t,e,n,s,i={}){return a0(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=zr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),o0.fetch()(l0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function a0(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ux),e);try{const i=new Bx(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw i0(t,u,c);hn(t,u)}}catch(i){if(i instanceof pn)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function Na(t,e,n,s,i={}){const r=await Ra(t,e,n,s,i);return"mfaPendingCredential"in r&&hn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function l0(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Xf(t.config,i):`${t.config.apiScheme}://${i}`}class Bx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),Vx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Fn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function jx(t,e){return Ra(t,"POST","/v1/accounts:delete",e)}async function Hx(t,e){return Ra(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function No(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wx(t,e=!1){const n=mt(t),s=await n.getIdToken(e),i=Jf(s);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:No(fh(i.auth_time)),issuedAtTime:No(fh(i.iat)),expirationTime:No(fh(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fh(t){return Number(t)*1e3}function Jf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zl(n);return i?JSON.parse(i):(Ol("Failed to decode base64 JWT payload"),null)}catch(i){return Ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zx(t){const e=Jf(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ia(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&qx(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class c0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nc(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ia(t,Hx(n,{idToken:s}));se(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Qx(r.providerUserInfo):[],a=Yx(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new c0(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Gx(t){const e=mt(t);await nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yx(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Qx(t){return t.map(e=>{var{providerId:n}=e,s=Yf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Xx(t,e){const n=await a0(t,{},async()=>{const s=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=l0(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",o0.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Xx(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ra;return s&&(se(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(se(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function gs(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vi{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new c0(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ia(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wx(this,e)}reload(){return Gx(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await nc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ia(this,jx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:D,isAnonymous:N,providerData:A,stsTokenManager:O}=n;se(C&&O,e,"internal-error");const _=ra.fromJSON(this.name,O);se(typeof C=="string",e,"internal-error"),gs(h,e.name),gs(d,e.name),se(typeof D=="boolean",e,"internal-error"),se(typeof N=="boolean",e,"internal-error"),gs(f,e.name),gs(p,e.name),gs(m,e.name),gs(y,e.name),gs(w,e.name),gs(E,e.name);const F=new vi({uid:C,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:N,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:_,createdAt:w,lastLoginAt:E});return A&&Array.isArray(A)&&(F.providerData=A.map($=>Object.assign({},$))),y&&(F._redirectEventId=y),F}static async _fromIdTokenResponse(e,n,s=!1){const i=new ra;i.updateFromServerResponse(n);const r=new vi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await nc(r),r}}/**
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
 */class u0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}u0.type="NONE";const vv=u0;/**
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
 */function xl(t,e,n){return`firebase:${t}:${e}:${n}`}class hr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xl(this.userKey,i.apiKey,r),this.fullPersistenceKey=xl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hr(Xn(vv),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Xn(vv);const o=xl(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=vi._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hr(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hr(r,e,s))}}/**
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
 */function yv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g0(e))return"Blackberry";if(m0(e))return"Webos";if(Zf(e))return"Safari";if((e.includes("chrome/")||d0(e))&&!e.includes("edge/"))return"Chrome";if(p0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h0(t=Mt()){return/firefox\//i.test(t)}function Zf(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d0(t=Mt()){return/crios\//i.test(t)}function f0(t=Mt()){return/iemobile/i.test(t)}function p0(t=Mt()){return/android/i.test(t)}function g0(t=Mt()){return/blackberry/i.test(t)}function m0(t=Mt()){return/webos/i.test(t)}function lu(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jx(t=Mt()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zx(){return dO()&&document.documentMode===10}function v0(t=Mt()){return lu(t)||p0(t)||m0(t)||g0(t)||/windows phone/i.test(t)||f0(t)}function eD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function y0(t,e=[]){let n;switch(t){case"Browser":n=yv(Mt());break;case"Worker":n=`${yv(Mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${s}`}/**
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
 */class tD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class nD{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _v(this),this.idTokenSubscription=new _v(this),this.beforeStateQueue=new tD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ks(t){return mt(t)}class _v{constructor(e){this.auth=e,this.observer=null,this.addObserver=wO(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sD(t,e,n){const s=Ks(t);se(s._canInitEmulator,s,"emulator-config-failed"),se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=_0(e),{host:o,port:a}=iD(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rD()}function _0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iD(t){const e=_0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:wv(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:wv(o)}}}function wv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ep{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function oD(t,e){return Ra(t,"POST","/v1/accounts:update",e)}/**
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
 */async function aD(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",Aa(t,e))}/**
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
 */async function lD(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Aa(t,e))}async function cD(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Aa(t,e))}/**
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
 */class oa extends ep{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new oa(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return aD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lD(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return oD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cD(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function dr(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",Aa(t,e))}/**
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
 */const uD="http://localhost";class Ci extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Yf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ci(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dr(e,n)}buildRequest(){const e={requestUri:uD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zr(n)}return e}}/**
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
 */function hD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dD(t){const e=mo(vo(t)).link,n=e?mo(vo(e)).deep_link_id:null,s=mo(vo(t)).deep_link_id;return(s?mo(vo(s)).link:null)||s||n||e||t}class tp{constructor(e){var n,s,i,r,o,a;const l=mo(vo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=hD((i=l.mode)!==null&&i!==void 0?i:null);se(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dD(e);try{return new tp(n)}catch{return null}}}/**
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
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=tp.parseLink(n);return se(s,"argument-error"),oa._fromEmailAndCode(e,s.code,s.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oa extends cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bs extends Oa{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bs.credential(e.oauthAccessToken)}catch{return null}}}bs.FACEBOOK_SIGN_IN_METHOD="facebook.com";bs.PROVIDER_ID="facebook.com";/**
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
 */class Es extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Es.credential(n,s)}catch{return null}}}Es.GOOGLE_SIGN_IN_METHOD="google.com";Es.PROVIDER_ID="google.com";/**
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
 */class Is extends Oa{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
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
 */class Ts extends Oa{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ts.credential(n,s)}catch{return null}}}Ts.TWITTER_SIGN_IN_METHOD="twitter.com";Ts.PROVIDER_ID="twitter.com";/**
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
 */async function fD(t,e){return Na(t,"POST","/v1/accounts:signUp",Aa(t,e))}/**
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
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await vi._fromIdTokenResponse(e,s,i),o=bv(s);return new Si({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=bv(s);return new Si({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function bv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sc extends pn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new sc(e,n,s,i)}}function w0(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,r,e,s):r})}async function pD(t,e,n=!1){const s=await ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",s)}/**
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
 */async function gD(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ia(t,w0(s,i,e,t),n);se(r.idToken,s,"internal-error");const o=Jf(r.idToken);se(o,s,"internal-error");const{sub:a}=o;return se(t.uid===a,s,"user-mismatch"),Si._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&hn(s,"user-mismatch"),r}}/**
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
 */async function b0(t,e,n=!1){const s="signIn",i=await w0(t,s,e),r=await Si._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function mD(t,e){return b0(Ks(t),e)}async function vW(t,e,n){const s=Ks(t),i=await fD(s,{returnSecureToken:!0,email:e,password:n}),r=await Si._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function yW(t,e,n){return mD(mt(t),Kr.credential(e,n))}function E0(t,e,n,s){return mt(t).onIdTokenChanged(e,n,s)}function vD(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function yD(t,e,n,s){return mt(t).onAuthStateChanged(e,n,s)}function _W(t){return mt(t).signOut()}const ic="__sak";/**
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
 */class I0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _D(){const t=Mt();return Zf(t)||lu(t)}const wD=1e3,bD=10;class T0 extends I0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_D()&&eD(),this.fallbackToPolling=v0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Zx()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bD):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},wD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T0.type="LOCAL";const ED=T0;/**
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
 */class C0 extends I0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C0.type="SESSION";const S0=C0;/**
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
 */function ID(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new uu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await ID(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
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
 */function np(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=np("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $n(){return window}function CD(t){$n().location.href=t}/**
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
 */function k0(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function SD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AD(){return k0()?self:null}/**
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
 */const A0="firebaseLocalStorageDb",RD=1,rc="firebaseLocalStorage",R0="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hu(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function ND(){const t=indexedDB.deleteDatabase(A0);return new xa(t).toPromise()}function md(){const t=indexedDB.open(A0,RD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(rc,{keyPath:R0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(rc)?e(s):(s.close(),await ND(),e(await md()))})})}async function Ev(t,e,n){const s=hu(t,!0).put({[R0]:e,value:n});return new xa(s).toPromise()}async function OD(t,e){const n=hu(t,!1).get(e),s=await new xa(n).toPromise();return s===void 0?null:s.value}function Iv(t,e){const n=hu(t,!0).delete(e);return new xa(n).toPromise()}const xD=800,DD=3;class N0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>DD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(AD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SD(),!this.activeServiceWorker)return;this.sender=new TD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await Ev(e,ic,"1"),await Iv(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ev(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>OD(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=hu(i,!1).getAll();return new xa(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N0.type="LOCAL";const PD=N0;/**
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
 */function LD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function MD(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Fn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",LD().appendChild(s)})}function FD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ka(3e4,6e4);/**
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
 */function sp(t,e){return e?Xn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ip extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $D(t){return b0(t.auth,new ip(t),t.bypassAuthState)}function UD(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),gD(n,new ip(t),t.bypassAuthState)}async function VD(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),pD(n,new ip(t),t.bypassAuthState)}/**
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
 */class O0{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $D;case"linkViaPopup":case"linkViaRedirect":return VD;case"reauthViaPopup":case"reauthViaRedirect":return UD;default:hn(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BD=new ka(2e3,1e4);async function wW(t,e,n){const s=Ks(t);r0(t,e,cu);const i=sp(s,n);return new ci(s,"signInViaPopup",e,i).executeNotNull()}class ci extends O0{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BD.get())};e()}}ci.currentPopupAction=null;/**
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
 */const jD="pendingRedirect",Dl=new Map;class HD extends O0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Dl.get(this.auth._key());if(!e){try{const s=await WD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Dl.set(this.auth._key(),e)}return this.bypassAuthState||Dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WD(t,e){const n=D0(e),s=x0(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function zD(t,e){return x0(t)._set(D0(e),"true")}function qD(t,e){Dl.set(t._key(),e)}function x0(t){return Xn(t._redirectPersistence)}function D0(t){return xl(jD,t.config.apiKey,t.name)}/**
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
 */function bW(t,e,n){return KD(t,e,n)}async function KD(t,e,n){const s=Ks(t);r0(t,e,cu),await s._initializationPromise;const i=sp(s,n);return await zD(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function EW(t,e){return await Ks(t)._initializationPromise,P0(t,e,!1)}async function P0(t,e,n=!1){const s=Ks(t),i=sp(s,e),o=await new HD(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const GD=10*60*1e3;class YD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!L0(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tv(e))}saveEventToCache(e){this.cachedEventUids.add(Tv(e)),this.lastProcessedEventTime=Date.now()}}function Tv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function L0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L0(t);default:return!1}}/**
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
 */async function XD(t,e={}){return Ra(t,"GET","/v1/projects",e)}/**
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
 */const JD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZD=/^https?/;async function eP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XD(t);for(const n of e)try{if(tP(n))return}catch{}hn(t,"unauthorized-domain")}function tP(t){const e=gd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ZD.test(n))return!1;if(JD.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const nP=new ka(3e4,6e4);function Cv(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sP(t){return new Promise((e,n)=>{var s,i,r;function o(){Cv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cv(),n(Fn(t,"network-request-failed"))},timeout:nP.get()})}if(!((i=(s=$n().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=$n().gapi)===null||r===void 0)&&r.load)o();else{const a=FD("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},MD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function iP(t){return Pl=Pl||sP(t),Pl}/**
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
 */const rP=new ka(5e3,15e3),oP="__/auth/iframe",aP="emulator/auth/iframe",lP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uP(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xf(e,aP):`https://${t.config.authDomain}/${oP}`,s={apiKey:e.apiKey,appName:t.name,v:Vi},i=cP.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${zr(s).slice(1)}`}async function hP(t){const e=await iP(t),n=$n().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:uP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lP,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=$n().setTimeout(()=>{r(o)},rP.get());function l(){$n().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const dP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fP=500,pP=600,gP="_blank",mP="http://localhost";class Sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vP(t,e,n,s=fP,i=pP){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dP),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Mt().toLowerCase();n&&(a=d0(c)?gP:n),h0(c)&&(e=e||mP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Jx(c)&&a!=="_self")return yP(e||"",a),new Sv(null);const h=window.open(e||"",a,u);se(h,t,"popup-blocked");try{h.focus()}catch{}return new Sv(h)}function yP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const _P="__/auth/handler",wP="emulator/auth/handler";function kv(t,e,n,s,i,r){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vi,eventId:i};if(e instanceof cu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Oa){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${bP(t)}?${zr(a).slice(1)}`}function bP({config:t}){return t.emulator?Xf(t,wP):`https://${t.authDomain}/${_P}`}/**
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
 */const ph="webStorageSupport";class EP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S0,this._completeRedirectFn=P0,this._overrideRedirectResult=qD}async _openPopup(e,n,s,i){var r;is((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=kv(e,n,s,gd(),i);return vP(e,o,np())}async _openRedirect(e,n,s,i){return await this._originValidation(e),CD(kv(e,n,s,gd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hP(e),s=new YD(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ph,{type:ph},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ph];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v0()||Zf()||lu()}}const IP=EP;var Av="@firebase/auth",Rv="0.22.0";/**
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
 */class TP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SP(t){Kt(new Vt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{se(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),se(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y0(t)},u=new nD(a,l,c);return Lx(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kt(new Vt("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(s=>new TP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Av,Rv,CP(t)),bt(Av,Rv,"esm2017")}/**
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
 */const kP=5*60,AP=Wb("authIdTokenMaxAge")||kP;let Nv=null;const RP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>AP)return;const i=n==null?void 0:n.token;Nv!==i&&(Nv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rp(t=au()){const e=Ui(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Px(t,{popupRedirectResolver:IP,persistence:[PD,ED,S0]}),s=Wb("authTokenSyncURL");if(s){const r=RP(s);vD(n,r,()=>r(n.currentUser)),E0(n,o=>r(o))}const i=Hb("auth");return i&&sD(n,`http://${i}`),n}SP("Browser");var NP="firebase",OP="9.19.1";/**
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
 */bt(NP,OP,"app");var xP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,op=op||{},oe=xP||self;function oc(){}function du(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Da(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DP(t){return Object.prototype.hasOwnProperty.call(t,gh)&&t[gh]||(t[gh]=++PP)}var gh="closure_uid_"+(1e9*Math.random()>>>0),PP=0;function LP(t,e,n){return t.call.apply(t.bind,arguments)}function MP(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=LP:Pt=MP,Pt.apply(null,arguments)}function dl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function It(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Gs(){this.s=this.s,this.o=this.o}var FP=0;Gs.prototype.s=!1;Gs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),FP!=0)&&DP(this)};Gs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const M0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ap(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ov(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(du(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var $P=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",oc,e),oe.removeEventListener("test",oc,e)}catch{}return t}();function ac(t){return/^[\s\xa0]*$/.test(t)}var xv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function mh(t,e){return t<e?-1:t>e?1:0}function fu(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function Pn(t){return fu().indexOf(t)!=-1}function lp(t){return lp[" "](t),t}lp[" "]=oc;function UP(t){var e=jP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var VP=Pn("Opera"),Tr=Pn("Trident")||Pn("MSIE"),F0=Pn("Edge"),vd=F0||Tr,$0=Pn("Gecko")&&!(fu().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),BP=fu().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function U0(){var t=oe.document;return t?t.documentMode:void 0}var lc;e:{var vh="",yh=function(){var t=fu();if($0)return/rv:([^\);]+)(\)|;)/.exec(t);if(F0)return/Edge\/([\d\.]+)/.exec(t);if(Tr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BP)return/WebKit\/(\S+)/.exec(t);if(VP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yh&&(vh=yh?yh[1]:""),Tr){var _h=U0();if(_h!=null&&_h>parseFloat(vh)){lc=String(_h);break e}}lc=vh}var jP={};function HP(){return UP(function(){let t=0;const e=xv(String(lc)).split("."),n=xv("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=mh(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||mh(i[2].length==0,r[2].length==0)||mh(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var yd;if(oe.document&&Tr){var Dv=U0();yd=Dv||parseInt(lc,10)||void 0}else yd=void 0;var WP=yd;function aa(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($0){e:{try{lp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&aa.X.h.call(this)}}It(aa,Lt);var zP={2:"touch",3:"pen",4:"mouse"};aa.prototype.h=function(){aa.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pa="closure_listenable_"+(1e6*Math.random()|0),qP=0;function KP(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++qP,this.ba=this.ea=!1}function pu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function cp(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function V0(t){const e={};for(const n in t)e[n]=t[n];return e}const Pv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B0(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Pv.length;r++)n=Pv[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function gu(t){this.src=t,this.g={},this.h=0}gu.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=wd(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new KP(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function _d(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=M0(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wd(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var up="closure_lm_"+(1e6*Math.random()|0),wh={};function j0(t,e,n,s,i){if(s&&s.once)return W0(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)j0(t,e[r],n,s,i);return null}return n=fp(n),t&&t[Pa]?t.N(e,n,Da(s)?!!s.capture:!!s,i):H0(t,e,n,!1,s,i)}function H0(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Da(i)?!!i.capture:!!i,a=dp(t);if(a||(t[up]=a=new gu(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=GP(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)$P||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(q0(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GP(){function t(n){return e.call(t.src,t.listener,n)}const e=YP;return t}function W0(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)W0(t,e[r],n,s,i);return null}return n=fp(n),t&&t[Pa]?t.O(e,n,Da(s)?!!s.capture:!!s,i):H0(t,e,n,!0,s,i)}function z0(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)z0(t,e[r],n,s,i);else s=Da(s)?!!s.capture:!!s,n=fp(n),t&&t[Pa]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=wd(r,n,s,i),-1<n&&(pu(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=dp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wd(e,n,s,i)),(n=-1<t?e[t]:null)&&hp(n))}function hp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Pa])_d(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(q0(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=dp(e))?(_d(n,t),n.h==0&&(n.src=null,e[up]=null)):pu(t)}}}function q0(t){return t in wh?wh[t]:wh[t]="on"+t}function YP(t,e){if(t.ba)t=!0;else{e=new aa(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&hp(t),t=n.call(s,e)}return t}function dp(t){return t=t[up],t instanceof gu?t:null}var bh="__closure_events_fn_"+(1e9*Math.random()>>>0);function fp(t){return typeof t=="function"?t:(t[bh]||(t[bh]=function(e){return t.handleEvent(e)}),t[bh])}function vt(){Gs.call(this),this.i=new gu(this),this.P=this,this.I=null}It(vt,Gs);vt.prototype[Pa]=!0;vt.prototype.removeEventListener=function(t,e,n,s){z0(this,t,e,n,s)};function Et(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var i=e;e=new Lt(s,t),B0(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=fl(o,s,!0,e)&&i}if(o=e.g=t,i=fl(o,s,!0,e)&&i,i=fl(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=fl(o,s,!1,e)&&i}vt.prototype.M=function(){if(vt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)pu(n[s]);delete t.g[e],t.h--}}this.I=null};vt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};vt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function fl(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&_d(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var pp=oe.JSON.stringify;function QP(){var t=Y0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XP{constructor(){this.h=this.g=null}add(e,n){const s=K0.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var K0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new JP,t=>t.reset());class JP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ZP(t){oe.setTimeout(()=>{throw t},0)}function G0(t,e){bd||eL(),Ed||(bd(),Ed=!0),Y0.add(t,e)}var bd;function eL(){var t=oe.Promise.resolve(void 0);bd=function(){t.then(tL)}}var Ed=!1,Y0=new XP;function tL(){for(var t;t=QP();){try{t.h.call(t.g)}catch(n){ZP(n)}var e=K0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ed=!1}function mu(t,e){vt.call(this),this.h=t||1,this.g=e||oe,this.j=Pt(this.lb,this),this.l=Date.now()}It(mu,vt);G=mu.prototype;G.ca=!1;G.R=null;G.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Et(this,"tick"),this.ca&&(gp(this),this.start()))}};G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gp(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}G.M=function(){mu.X.M.call(this),gp(this),delete this.g};function mp(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function Q0(t){t.g=mp(()=>{t.g=null,t.i&&(t.i=!1,Q0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class nL extends Gs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Q0(this)}M(){super.M(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(t){Gs.call(this),this.h=t,this.g={}}It(la,Gs);var Lv=[];function X0(t,e,n,s){Array.isArray(n)||(n&&(Lv[0]=n.toString()),n=Lv);for(var i=0;i<n.length;i++){var r=j0(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function J0(t){cp(t.g,function(e,n){this.g.hasOwnProperty(n)&&hp(e)},t),t.g={}}la.prototype.M=function(){la.X.M.call(this),J0(this)};la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vu(){this.g=!0}vu.prototype.Aa=function(){this.g=!1};function sL(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function iL(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function nr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oL(t,n)+(s?" "+s:"")})}function rL(t,e){t.info(function(){return"TIMEOUT: "+e})}vu.prototype.info=function(){};function oL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pp(n)}catch{return e}}var Bi={},Mv=null;function yu(){return Mv=Mv||new vt}Bi.Pa="serverreachability";function Z0(t){Lt.call(this,Bi.Pa,t)}It(Z0,Lt);function ca(t){const e=yu();Et(e,new Z0(e))}Bi.STAT_EVENT="statevent";function eE(t,e){Lt.call(this,Bi.STAT_EVENT,t),this.stat=e}It(eE,Lt);function Ut(t){const e=yu();Et(e,new eE(e,t))}Bi.Qa="timingevent";function tE(t,e){Lt.call(this,Bi.Qa,t),this.size=e}It(tE,Lt);function La(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var _u={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function vp(){}vp.prototype.h=null;function Fv(t){return t.h||(t.h=t.i())}function sE(){}var Ma={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yp(){Lt.call(this,"d")}It(yp,Lt);function _p(){Lt.call(this,"c")}It(_p,Lt);var Id;function wu(){}It(wu,vp);wu.prototype.g=function(){return new XMLHttpRequest};wu.prototype.i=function(){return{}};Id=new wu;function Fa(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new la(this),this.O=aL,t=vd?125:void 0,this.T=new mu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new iE}function iE(){this.i=null,this.g="",this.h=!1}var aL=45e3,Td={},cc={};G=Fa.prototype;G.setTimeout=function(t){this.O=t};function Cd(t,e,n){t.K=1,t.v=Eu(rs(e)),t.s=n,t.P=!0,rE(t,null)}function rE(t,e){t.F=Date.now(),$a(t),t.A=rs(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),fE(n.i,"t",s),t.C=0,n=t.l.H,t.h=new iE,t.g=PE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new nL(Pt(t.La,t,t.g),t.N)),X0(t.S,t.g,"readystatechange",t.ib),e=t.H?V0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ca(),sL(t.j,t.u,t.A,t.m,t.U,t.s)}G.ib=function(t){t=t.target;const e=this.L;e&&Jn(t)==3?e.l():this.La(t)};G.La=function(t){try{if(t==this.g)e:{const u=Jn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||vd||this.g&&(this.h.h||this.g.fa()||Bv(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ca(3):ca(2)),bu(this);var n=this.g.aa();this.Y=n;t:if(oE(this)){var s=Bv(this.g);t="";var i=s.length,r=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ui(this),Oo(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,iL(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ac(a)){var c=a;break t}}c=null}if(n=c)nr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Sd(this,n);else{this.i=!1,this.o=3,Ut(12),ui(this),Oo(this);break e}}this.P?(aE(this,u,o),vd&&this.i&&u==3&&(X0(this.S,this.T,"tick",this.hb),this.T.start())):(nr(this.j,this.m,o,null),Sd(this,o)),u==4&&ui(this),this.i&&!this.I&&(u==4?NE(this.l,this):(this.i=!1,$a(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),ui(this),Oo(this)}}}catch{}finally{}};function oE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function aE(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=lL(t,n),i==cc){e==4&&(t.o=4,Ut(14),s=!1),nr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Td){t.o=4,Ut(15),nr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else nr(t.j,t.m,i,null),Sd(t,i);oE(t)&&i!=cc&&i!=Td&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ut(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sp(e),e.K=!0,Ut(11))):(nr(t.j,t.m,n,"[Invalid Chunked Response]"),ui(t),Oo(t))}G.hb=function(){if(this.g){var t=Jn(this.g),e=this.g.fa();this.C<e.length&&(bu(this),aE(this,t,e),this.i&&t!=4&&$a(this))}};function lL(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?cc:(n=Number(e.substring(n,s)),isNaN(n)?Td:(s+=1,s+n>e.length?cc:(e=e.substr(s,n),t.C=s+n,e)))}G.cancel=function(){this.I=!0,ui(this)};function $a(t){t.V=Date.now()+t.O,lE(t,t.O)}function lE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=La(Pt(t.gb,t),e)}function bu(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}G.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(rL(this.j,this.A),this.K!=2&&(ca(),Ut(17)),ui(this),this.o=2,Oo(this)):lE(this,this.V-t)};function Oo(t){t.l.G==0||t.I||NE(t.l,t)}function ui(t){bu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,gp(t.T),J0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Sd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||kd(n.h,t))){if(!t.J&&kd(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)dc(n),Cu(n);else break e;Cp(n),Ut(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=La(Pt(n.cb,n),6e3));if(1>=mE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else hi(n,11)}else if((t.J||n.g==t)&&dc(n),!ac(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wp(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,ze(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=DE(s,s.H?s.ka:null,s.V),o.J){vE(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(bu(a),$a(a)),s.g=o}else AE(s);0<n.i.length&&Su(n)}else c[0]!="stop"&&c[0]!="close"||hi(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hi(n,7):Tp(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ca(4)}catch{}}function cL(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(du(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function uL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(du(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function cE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(du(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=uL(t),s=cL(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var uE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function yi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yi){this.h=e!==void 0?e:t.h,uc(this,t.j),this.s=t.s,this.g=t.g,hc(this,t.m),this.l=t.l,e=t.i;var n=new ua;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$v(this,n),this.o=t.o}else t&&(n=String(t).match(uE))?(this.h=!!e,uc(this,n[1]||"",!0),this.s=yo(n[2]||""),this.g=yo(n[3]||"",!0),hc(this,n[4]),this.l=yo(n[5]||"",!0),$v(this,n[6]||"",!0),this.o=yo(n[7]||"")):(this.h=!!e,this.i=new ua(null,this.h))}yi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_o(e,Uv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_o(e,Uv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_o(n,n.charAt(0)=="/"?pL:fL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_o(n,mL)),t.join("")};function rs(t){return new yi(t)}function uc(t,e,n){t.j=n?yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $v(t,e,n){e instanceof ua?(t.i=e,vL(t.i,t.h)):(n||(e=_o(e,gL)),t.i=new ua(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function Eu(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _o(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Uv=/[#\/\?@]/g,fL=/[#\?:]/g,pL=/[#\?]/g,gL=/[#\?@]/g,mL=/#/g;function ua(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ys(t){t.g||(t.g=new Map,t.h=0,t.i&&hL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=ua.prototype;G.add=function(t,e){Ys(this),this.i=null,t=Gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hE(t,e){Ys(t),e=Gr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dE(t,e){return Ys(t),e=Gr(t,e),t.g.has(e)}G.forEach=function(t,e){Ys(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};G.oa=function(){Ys(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};G.W=function(t){Ys(this);let e=[];if(typeof t=="string")dE(this,t)&&(e=e.concat(this.g.get(Gr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Ys(this),this.i=null,t=Gr(this,t),dE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function fE(t,e,n){hE(t,e),0<n.length&&(t.i=null,t.g.set(Gr(t,e),ap(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vL(t,e){e&&!t.j&&(Ys(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(hE(this,s),fE(this,i,n))},t)),t.j=e}var yL=class{constructor(t,e){this.h=t,this.g=e}};function pE(t){this.l=t||_L,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ga&&oe.g.Ga()&&oe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _L=10;function gE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mE(t){return t.h?1:t.g?t.g.size:0}function kd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wp(t,e){t.g?t.g.add(e):t.h=e}function vE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pE.prototype.cancel=function(){if(this.i=yE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ap(t.i)}function bp(){}bp.prototype.stringify=function(t){return oe.JSON.stringify(t,void 0)};bp.prototype.parse=function(t){return oe.JSON.parse(t,void 0)};function wL(){this.g=new bp}function bL(t,e,n){const s=n||"";try{cE(t,function(i,r){let o=i;Da(i)&&(o=pp(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function EL(t,e){const n=new vu;if(oe.Image){const s=new Image;s.onload=dl(pl,n,s,"TestLoadImage: loaded",!0,e),s.onerror=dl(pl,n,s,"TestLoadImage: error",!1,e),s.onabort=dl(pl,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=dl(pl,n,s,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function pl(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ua(t){this.l=t.ac||null,this.j=t.jb||!1}It(Ua,vp);Ua.prototype.g=function(){return new Iu(this.l,this.j)};Ua.prototype.i=function(t){return function(){return t}}({});function Iu(t,e){vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ep,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}It(Iu,vt);var Ep=0;G=Iu.prototype;G.open=function(t,e){if(this.readyState!=Ep)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ha(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||oe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Va(this)),this.readyState=Ep};G.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_E(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function _E(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}G.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Va(this):ha(this),this.readyState==3&&_E(this)}};G.Va=function(t){this.g&&(this.response=this.responseText=t,Va(this))};G.Ua=function(t){this.g&&(this.response=t,Va(this))};G.ga=function(){this.g&&Va(this)};function Va(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ha(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ha(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Iu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var IL=oe.JSON.parse;function Xe(t){vt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wE,this.K=this.L=!1}It(Xe,vt);var wE="",TL=/^https?$/i,CL=["POST","PUT"];G=Xe.prototype;G.Ka=function(t){this.L=t};G.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Id.g(),this.C=this.u?Fv(this.u):Fv(Id),this.g.onreadystatechange=Pt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Vv(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=oe.FormData&&t instanceof oe.FormData,!(0<=M0(CL,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{IE(this),0<this.B&&((this.K=SL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.qa,this)):this.A=mp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Vv(this,r)}};function SL(t){return Tr&&HP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.qa=function(){typeof op<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function Vv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bE(t),Tu(t)}function bE(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Tu(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tu(this,!0)),Xe.X.M.call(this)};G.Ha=function(){this.s||(this.F||this.v||this.l?EE(this):this.fb())};G.fb=function(){EE(this)};function EE(t){if(t.h&&typeof op<"u"&&(!t.C[1]||Jn(t)!=4||t.aa()!=2)){if(t.v&&Jn(t)==4)mp(t.Ha,0,t);else if(Et(t,"readystatechange"),Jn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(uE)[1]||null;if(!i&&oe.self&&oe.self.location){var r=oe.self.location.protocol;i=r.substr(0,r.length-1)}s=!TL.test(i?i.toLowerCase():"")}n=s}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",bE(t)}}finally{Tu(t)}}}}function Tu(t,e){if(t.g){IE(t);const n=t.g,s=t.C[0]?oc:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=s}catch{}}}function IE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}G.aa=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}};G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),IL(e)}};function Bv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ea=function(){return this.m};G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function TE(t){let e="";return cp(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ip(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=TE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ze(t,e,n))}function co(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function CE(t){this.Ca=0,this.i=[],this.j=new vu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=co("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=co("baseRetryDelayMs",5e3,t),this.bb=co("retryDelaySeedMs",1e4,t),this.$a=co("forwardChannelMaxRetries",2,t),this.ta=co("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new pE(t&&t.concurrentRequestLimit),this.Fa=new wL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}G=CE.prototype;G.ma=8;G.G=1;function Tp(t){if(SE(t),t.G==3){var e=t.U++,n=rs(t.F);ze(n,"SID",t.I),ze(n,"RID",e),ze(n,"TYPE","terminate"),Ba(t,n),e=new Fa(t,t.j,e,void 0),e.K=2,e.v=Eu(rs(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon&&(n=oe.navigator.sendBeacon(e.v.toString(),"")),!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=PE(e.l,null),e.g.da(e.v)),e.F=Date.now(),$a(e)}xE(t)}function Cu(t){t.g&&(Sp(t),t.g.cancel(),t.g=null)}function SE(t){Cu(t),t.u&&(oe.clearTimeout(t.u),t.u=null),dc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function Su(t){gE(t.h)||t.m||(t.m=!0,G0(t.Ja,t),t.C=0)}function kL(t,e){return mE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=La(Pt(t.Ja,t,e),OE(t,t.C)),t.C++,!0)}G.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Fa(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=V0(r),B0(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kE(this,i,e),n=rs(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),Ba(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(TE(r)))+"&"+e:this.o&&Ip(n,this.o,r)),wp(this.h,i),this.Ya&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",e),ze(n,"SID","null"),i.Z=!0,Cd(i,n,null)):Cd(i,n,e),this.G=2}}else this.G==3&&(t?jv(this,t):this.i.length==0||gE(this.h)||jv(this))};function jv(t,e){var n;e?n=e.m:n=t.U++;const s=rs(t.F);ze(s,"SID",t.I),ze(s,"RID",n),ze(s,"AID",t.T),Ba(t,s),t.o&&t.s&&Ip(s,t.o,t.s),n=new Fa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=kE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),wp(t.h,n),Cd(n,s,e)}function Ba(t,e){t.ia&&cp(t.ia,function(n,s){ze(e,s,n)}),t.l&&cE({},function(n,s){ze(e,s,n)})}function kE(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Pt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{bL(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function AE(t){t.g||t.u||(t.Z=1,G0(t.Ia,t),t.A=0)}function Cp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=La(Pt(t.Ia,t),OE(t,t.A)),t.A++,!0)}G.Ia=function(){if(this.u=null,RE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=La(Pt(this.eb,this),t)}};G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ut(10),Cu(this),RE(this))};function Sp(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function RE(t){t.g=new Fa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=rs(t.sa);ze(e,"RID","rpc"),ze(e,"SID",t.I),ze(e,"CI",t.L?"0":"1"),ze(e,"AID",t.T),ze(e,"TYPE","xmlhttp"),Ba(t,e),t.o&&t.s&&Ip(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Eu(rs(e)),n.s=null,n.P=!0,rE(n,t)}G.cb=function(){this.v!=null&&(this.v=null,Cu(this),Cp(this),Ut(19))};function dc(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function NE(t,e){var n=null;if(t.g==e){dc(t),Sp(t),t.g=null;var s=2}else if(kd(t.h,e))n=e.D,vE(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=yu(),Et(s,new tE(s,n)),Su(t)}else AE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&kL(t,e)||s==2&&Cp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:hi(t,5);break;case 4:hi(t,10);break;case 3:hi(t,6);break;default:hi(t,2)}}}function OE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function hi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Pt(t.kb,t);n||(n=new yi("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||uc(n,"https"),Eu(n)),EL(n.toString(),s)}else Ut(2);t.G=0,t.l&&t.l.va(e),xE(t),SE(t)}G.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function xE(t){if(t.G=0,t.la=[],t.l){const e=yE(t.h);(e.length!=0||t.i.length!=0)&&(Ov(t.la,e),Ov(t.la,t.i),t.h.i.length=0,ap(t.i),t.i.length=0),t.l.ua()}}function DE(t,e,n){var s=n instanceof yi?rs(n):new yi(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),hc(s,s.m);else{var i=oe.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new yi(null,void 0);s&&uc(r,s),e&&(r.g=e),i&&hc(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ze(s,n,e),ze(s,"VER",t.ma),Ba(t,s),s}function PE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Xe(new Ua({jb:!0})):new Xe(t.ra),e.Ka(t.H),e}function LE(){}G=LE.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Ra=function(){};function fc(){if(Tr&&!(10<=Number(WP)))throw Error("Environmental error: no available transport.")}fc.prototype.g=function(t,e){return new tn(t,e)};function tn(t,e){vt.call(this),this.g=new CE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ac(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ac(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yr(this)}It(tn,vt);tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=DE(t,null,t.V),Su(t)};tn.prototype.close=function(){Tp(this.g)};tn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pp(t),t=n);e.i.push(new yL(e.ab++,t)),e.G==3&&Su(e)};tn.prototype.M=function(){this.g.l=null,delete this.j,Tp(this.g),delete this.g,tn.X.M.call(this)};function ME(t){yp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}It(ME,yp);function FE(){_p.call(this),this.status=1}It(FE,_p);function Yr(t){this.g=t}It(Yr,LE);Yr.prototype.xa=function(){Et(this.g,"a")};Yr.prototype.wa=function(t){Et(this.g,new ME(t))};Yr.prototype.va=function(t){Et(this.g,new FE)};Yr.prototype.ua=function(){Et(this.g,"b")};fc.prototype.createWebChannel=fc.prototype.g;tn.prototype.send=tn.prototype.u;tn.prototype.open=tn.prototype.m;tn.prototype.close=tn.prototype.close;_u.NO_ERROR=0;_u.TIMEOUT=8;_u.HTTP_ERROR=6;nE.COMPLETE="complete";sE.EventType=Ma;Ma.OPEN="a";Ma.CLOSE="b";Ma.ERROR="c";Ma.MESSAGE="d";vt.prototype.listen=vt.prototype.N;Xe.prototype.listenOnce=Xe.prototype.O;Xe.prototype.getLastError=Xe.prototype.Oa;Xe.prototype.getLastErrorCode=Xe.prototype.Ea;Xe.prototype.getStatus=Xe.prototype.aa;Xe.prototype.getResponseJson=Xe.prototype.Sa;Xe.prototype.getResponseText=Xe.prototype.fa;Xe.prototype.send=Xe.prototype.da;Xe.prototype.setWithCredentials=Xe.prototype.Ka;var AL=function(){return new fc},RL=function(){return yu()},Eh=_u,NL=nE,OL=Bi,Hv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},xL=Ua,gl=sE,DL=Xe;const Wv="@firebase/firestore";/**
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
 */let Qr="9.19.0";/**
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
 */const ki=new qr("@firebase/firestore");function zv(){return ki.logLevel}function Y(t,...e){if(ki.logLevel<=ke.DEBUG){const n=e.map(kp);ki.debug(`Firestore (${Qr}): ${t}`,...n)}}function os(t,...e){if(ki.logLevel<=ke.ERROR){const n=e.map(kp);ki.error(`Firestore (${Qr}): ${t}`,...n)}}function pc(t,...e){if(ki.logLevel<=ke.WARN){const n=e.map(kp);ki.warn(`Firestore (${Qr}): ${t}`,...n)}}function kp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw os(e),new Error(e)}function je(t,e){t||re()}function ue(t,e){return t}/**
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
 */class _i{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $E{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class LL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ML{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _i,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _i)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string"),new $E(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new St(e)}}class FL{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=St.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class $L{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new FL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class UL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(je(typeof n.token=="string"),this.T=n.token,new UL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function BL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class UE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=BL(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function Cr(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class da{constructor(e,n,s){n===void 0?n=0:n>e.length&&re(),s===void 0?s=e.length-n:s>e.length-n&&re(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return da.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof da?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends da{construct(e,n,s){return new qe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const jL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends da{construct(e,n,s){return new xt(e,n,s)}static isValidIdentifier(e){return jL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ne(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ne(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ne(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(qe.fromString(e))}static fromName(e){return new te(qe.fromString(e).popFirst(5))}static empty(){return new te(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new qe(e.slice()))}}function HL(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(s===1e9?new at(n+1,0):new at(n,s));return new Fs(i,te.empty(),e)}function WL(t){return new Fs(t.readTime,t.key,-1)}class Fs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fs(le.min(),te.empty(),-1)}static max(){return new Fs(le.max(),te.empty(),-1)}}function zL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const qL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ja(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==qL)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,s)=>{n(e)})}static reject(e){return new L((n,s)=>{s(e)})}static waitFor(e){return new L((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=L.resolve(!1);for(const s of e)n=n.next(i=>i?L.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new L((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new L((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ha(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ap{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ap.ct=-1;function ku(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function GL(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function qv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ct{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:yt.RED,this.left=i!=null?i:yt.EMPTY,this.right=r!=null?r:yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new yt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,s,i){return this}insert(t,e,n){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kv(this.data.getIterator())}getIteratorFrom(e){return new Kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new wn([])}unionWith(e){let n=new lt(xt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class YL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new YL("Invalid base64 string: "+i):i}}(e);return new Ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const QL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $s(t){if(je(!!t),typeof t=="string"){let e=0;const n=QL.exec(t);if(je(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?Ft.fromBase64String(t):Ft.fromUint8Array(t)}/**
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
 */function BE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jE(t){const e=t.mapValue.fields.__previous_value__;return BE(e)?jE(e):e}function fa(t){const e=$s(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class XL{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?BE(t)?4:JL(t)?9007199254740991:10:re()}function Bn(t,e){if(t===e)return!0;const n=Ai(t);if(n!==Ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fa(t).isEqual(fa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=$s(s.timestampValue),o=$s(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=st(s.doubleValue),o=st(i.doubleValue);return r===o?gc(r)===gc(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Cr(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qv(r)!==qv(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Bn(r[a],o[a])))return!1;return!0}(t,e);default:return re()}}function ga(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function kr(t,e){if(t===e)return 0;const n=Ai(t),s=Ai(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=st(i.integerValue||i.doubleValue),a=st(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gv(t.timestampValue,e.timestampValue);case 4:return Gv(fa(t),fa(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Sr(i),a=Sr(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Re(o[l],a[l]);if(c!==0)return c}return Re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Re(st(i.latitude),st(r.latitude));return o!==0?o:Re(st(i.longitude),st(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=kr(o[l],a[l]);if(c)return c}return Re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===vl.mapValue&&r===vl.mapValue)return 0;if(i===vl.mapValue)return 1;if(r===vl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Re(a[u],c[u]);if(h!==0)return h;const d=kr(o[a[u]],l[c[u]]);if(d!==0)return d}return Re(a.length,c.length)}(t.mapValue,e.mapValue);default:throw re()}}function Gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=$s(t),s=$s(e),i=Re(n.seconds,s.seconds);return i!==0?i:Re(n.nanos,s.nanos)}function Ar(t){return Ad(t)}function Ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=$s(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Sr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,te.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ad(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ad(s.fields[a])}`;return r+"}"}(t.mapValue):re();var e,n}function Rd(t){return!!t&&"integerValue"in t}function Rp(t){return!!t&&"arrayValue"in t}function Yv(t){return!!t&&"nullValue"in t}function Qv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=xo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xo(n)}setAll(e){let n=xt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=xo(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Xr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new on(xo(this.value))}}function HE(t){const e=[];return Xr(t.fields,(n,s)=>{const i=new xt([n]);if(Ll(s)){const r=HE(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new wn(e)}/**
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
 */class mc{constructor(e,n){this.position=e,this.inclusive=n}}function Xv(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=te.comparator(te.fromName(o.referenceValue),n.key):s=kr(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Jv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Do{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class WE{}class ot extends WE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new tM(e,n,s):n==="array-contains"?new iM(e,s):n==="in"?new rM(e,s):n==="not-in"?new oM(e,s):n==="array-contains-any"?new aM(e,s):new ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new nM(e,s):new sM(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(kr(n,this.value)):n!==null&&Ai(this.value)===Ai(n)&&this.matchesComparison(kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jn extends WE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new jn(e,n)}matches(e){return zE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zE(t){return t.op==="and"}function qE(t){return eM(t)&&zE(t)}function eM(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Nd(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Ar(t.value);if(qE(t))return t.filters.map(e=>Nd(e)).join(",");{const e=t.filters.map(n=>Nd(n)).join(",");return`${t.op}(${e})`}}function KE(t,e){return t instanceof ot?function(n,s){return s instanceof ot&&n.op===s.op&&n.field.isEqual(s.field)&&Bn(n.value,s.value)}(t,e):t instanceof jn?function(n,s){return s instanceof jn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&KE(r,s.filters[o]),!0):!1}(t,e):void re()}function GE(t){return t instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${Ar(e.value)}`}(t):t instanceof jn?function(e){return e.op.toString()+" {"+e.getFilters().map(GE).join(" ,")+"}"}(t):"Filter"}class tM extends ot{constructor(e,n,s){super(e,n,s),this.key=te.fromName(s.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class nM extends ot{constructor(e,n){super(e,"in",n),this.keys=YE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sM extends ot{constructor(e,n){super(e,"not-in",n),this.keys=YE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function YE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>te.fromName(s.referenceValue))}class iM extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rp(n)&&ga(n.arrayValue,this.value)}}class rM extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class oM extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ga(this.value.arrayValue,n)}}class aM extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ga(this.value.arrayValue,s))}}/**
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
 */class lM{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Zv(t,e=null,n=[],s=[],i=null,r=null,o=null){return new lM(t,e,n,s,i,r,o)}function Np(t){const e=ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Nd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ar(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ar(s)).join(",")),e.ft=n}return e.ft}function Op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jv(t.startAt,e.startAt)&&Jv(t.endAt,e.endAt)}function Od(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Au{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function cM(t,e,n,s,i,r,o,a){return new Au(t,e,n,s,i,r,o,a)}function xp(t){return new Au(t)}function ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function dM(t){return t.collectionGroup!==null}function fr(t){const e=ue(t);if(e.dt===null){e.dt=[];const n=hM(e),s=uM(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Do(n)),e.dt.push(new Do(xt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Do(xt.keyField(),r))}}}return e.dt}function as(t){const e=ue(t);if(!e.wt)if(e.limitType==="F")e.wt=Zv(e.path,e.collectionGroup,fr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of fr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Do(r.field,o))}const s=e.endAt?new mc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new mc(e.startAt.position,e.startAt.inclusive):null;e.wt=Zv(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function xd(t,e,n){return new Au(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ru(t,e){return Op(as(t),as(e))&&t.limitType===e.limitType}function QE(t){return`${Np(as(t))}|lt:${t.limitType}`}function Dd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>GE(s)).join(", ")}]`),ku(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ar(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ar(s)).join(",")),`Target(${n})`}(as(t))}; limitType=${t.limitType})`}function Nu(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):te.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of fr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Xv(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,fr(n),s)||n.endAt&&!function(i,r,o){const a=Xv(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,fr(n),s))}(t,e)}function fM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XE(t){return(e,n)=>{let s=!1;for(const i of fr(t)){const r=pM(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function pM(t,e,n){const s=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?kr(a,l):re()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return re()}}/**
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
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return VE(this.inner)}size(){return this.innerSize}}/**
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
 */const gM=new ct(te.comparator);function ls(){return gM}const JE=new ct(te.comparator);function wo(...t){let e=JE;for(const n of t)e=e.insert(n.key,n);return e}function ZE(t){let e=JE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function di(){return Po()}function eI(){return Po()}function Po(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const mM=new ct(te.comparator),vM=new lt(te.comparator);function _e(...t){let e=vM;for(const n of t)e=e.add(n);return e}const yM=new lt(Re);function tI(){return yM}/**
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
 */function nI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function sI(t){return{integerValue:""+t}}function _M(t,e){return GL(e)?sI(e):nI(t,e)}/**
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
 */class Ou{constructor(){this._=void 0}}function wM(t,e,n){return t instanceof vc?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ma?rI(t,e):t instanceof va?oI(t,e):function(s,i){const r=iI(s,i),o=ty(r)+ty(s._t);return Rd(r)&&Rd(s._t)?sI(o):nI(s.serializer,o)}(t,e)}function bM(t,e,n){return t instanceof ma?rI(t,e):t instanceof va?oI(t,e):n}function iI(t,e){return t instanceof yc?Rd(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class vc extends Ou{}class ma extends Ou{constructor(e){super(),this.elements=e}}function rI(t,e){const n=aI(e);for(const s of t.elements)n.some(i=>Bn(i,s))||n.push(s);return{arrayValue:{values:n}}}class va extends Ou{constructor(e){super(),this.elements=e}}function oI(t,e){let n=aI(e);for(const s of t.elements)n=n.filter(i=>!Bn(i,s));return{arrayValue:{values:n}}}class yc extends Ou{constructor(e,n){super(),this.serializer=e,this._t=n}}function ty(t){return st(t.integerValue||t.doubleValue)}function aI(t){return Rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EM(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ma&&s instanceof ma||n instanceof va&&s instanceof va?Cr(n.elements,s.elements,Bn):n instanceof yc&&s instanceof yc?Bn(n._t,s._t):n instanceof vc&&s instanceof vc}(t.transform,e.transform)}class IM{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function lI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dp(t.key,Un.none()):new Wa(t.key,t.data,Un.none());{const n=t.data,s=on.empty();let i=new lt(xt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ji(t.key,s,new wn(i.toArray()),Un.none())}}function TM(t,e,n){t instanceof Wa?function(s,i,r){const o=s.value.clone(),a=sy(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(s,i,r){if(!Ml(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=sy(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(cI(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Lo(t,e,n,s){return t instanceof Wa?function(i,r,o,a){if(!Ml(i.precondition,r))return o;const l=i.value.clone(),c=iy(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof ji?function(i,r,o,a){if(!Ml(i.precondition,r))return o;const l=iy(i.fieldTransforms,a,r),c=r.data;return c.setAll(cI(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Ml(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function CM(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=iI(s.transform,i||null);r!=null&&(n===null&&(n=on.empty()),n.set(s.field,r))}return n||null}function ny(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Cr(n,s,(i,r)=>EM(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wa extends xu{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends xu{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function cI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function sy(t,e,n){const s=new Map;je(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,bM(o,a,n[i]))}return s}function iy(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,wM(r,o,e))}return s}class Dp extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SM extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kM{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&TM(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Lo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Lo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=eI();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=lI(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Cr(this.mutations,e.mutations,(n,s)=>ny(n,s))&&Cr(this.baseMutations,e.baseMutations,(n,s)=>ny(n,s))}}class Pp{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){je(e.mutations.length===s.length);let i=mM;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Pp(e,n,s,i)}}/**
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
 */class AM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RM{constructor(e){this.count=e}}/**
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
 */var tt,Ee;function NM(t){switch(t){default:return re();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function uI(t){if(t===void 0)return os("GRPC error has no .code"),P.UNKNOWN;switch(t){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return re()}}(Ee=tt||(tt={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Lp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return yl}static getOrCreateInstance(){return yl===null&&(yl=new Lp),yl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let yl=null;/**
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
 */class Du{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Du(le.min(),i,tI(),ls(),_e())}}class za{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new za(s,n,_e(),_e(),_e())}}/**
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
 */class Fl{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class hI{constructor(e,n){this.targetId=e,this.Et=n}}class dI{constructor(e,n,s=Ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ry{constructor(){this.At=0,this.Rt=ay(),this.vt=Ft.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=_e(),n=_e(),s=_e();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:re()}}),new za(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=ay()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class OM{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=ls(),this.qt=oy(),this.Ut=new lt(Re)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Od(o))if(i===0){const a=new te(o.path);this.Qt(s,a,kt.newNoDocument(a,le.min()))}else je(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Lp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Od(a.target)){const l=new te(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,kt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=_e();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Du(e,n,this.Ut,this.Lt,s);return this.Lt=ls(),this.qt=oy(),this.Ut=new lt(Re),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new ry,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new lt(Re),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new ry),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function oy(){return new ct(te.comparator)}function ay(){return new ct(te.comparator)}/**
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
 */const xM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),PM=(()=>({and:"AND",or:"OR"}))();class LM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MM(t,e){return _c(t,e.toTimestamp())}function Vn(t){return je(!!t),le.fromTimestamp(function(e){const n=$s(e);return new at(n.seconds,n.nanos)}(t))}function Mp(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function pI(t){const e=qe.fromString(t);return je(yI(e)),e}function Pd(t,e){return Mp(t.databaseId,e.path)}function Ih(t,e){const n=pI(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(gI(n))}function Ld(t,e){return Mp(t.databaseId,e)}function FM(t){const e=pI(t);return e.length===4?qe.emptyPath():gI(e)}function Md(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gI(t){return je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ly(t,e,n){return{name:Pd(t,e),fields:n.value.mapValue.fields}}function $M(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(je(c===void 0||typeof c=="string"),Ft.fromBase64String(c||"")):(je(c===void 0||c instanceof Uint8Array),Ft.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?P.UNKNOWN:uI(l.code);return new ne(c,l.message||"")}(o);n=new dI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ih(t,s.document.name),r=Vn(s.document.updateTime),o=s.document.createTime?Vn(s.document.createTime):le.min(),a=new on({mapValue:{fields:s.document.fields}}),l=kt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Fl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ih(t,s.document),r=s.readTime?Vn(s.readTime):le.min(),o=kt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Fl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ih(t,s.document),r=s.removedTargetIds||[];n=new Fl([],r,i,null)}else{if(!("filter"in e))return re();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new RM(i),o=s.targetId;n=new hI(o,r)}}return n}function UM(t,e){let n;if(e instanceof Wa)n={update:ly(t,e.key,e.value)};else if(e instanceof Dp)n={delete:Pd(t,e.key)};else if(e instanceof ji)n={update:ly(t,e.key,e.data),updateMask:GM(e.fieldMask)};else{if(!(e instanceof SM))return re();n={verify:Pd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof vc)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ma)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof va)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yc)return{fieldPath:r.field.canonicalString(),increment:o._t};throw re()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:MM(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function VM(t,e){return t&&t.length>0?(je(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Vn(s.updateTime):Vn(i);return r.isEqual(le.min())&&(r=Vn(i)),new IM(r,s.transformResults||[])}(n,e))):[]}function BM(t,e){return{documents:[Ld(t,e.path)]}}function jM(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ld(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ld(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return vI(jn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:er(u.field),direction:zM(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||ku(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function HM(t){let e=FM(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){je(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=mI(u);return h instanceof jn&&qE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Do(tr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ku(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new mc(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new mc(d,h)}(n.endAt)),cM(e,i,o,r,a,"F",l,c)}function WM(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return re()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=tr(e.unaryFilter.field);return ot.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=tr(e.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=tr(e.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=tr(e.unaryFilter.field);return ot.create(r,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(e){return ot.create(tr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jn.create(e.compositeFilter.filters.map(n=>mI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(e.compositeFilter.op))}(t):re()}function zM(t){return xM[t]}function qM(t){return DM[t]}function KM(t){return PM[t]}function er(t){return{fieldPath:t.canonicalString()}}function tr(t){return xt.fromServerFormat(t.fieldPath)}function vI(t){return t instanceof ot?function(e){if(e.op==="=="){if(Qv(e.value))return{unaryFilter:{field:er(e.field),op:"IS_NAN"}};if(Yv(e.value))return{unaryFilter:{field:er(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Qv(e.value))return{unaryFilter:{field:er(e.field),op:"IS_NOT_NAN"}};if(Yv(e.value))return{unaryFilter:{field:er(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:er(e.field),op:qM(e.op),value:e.value}}}(t):t instanceof jn?function(e){const n=e.getFilters().map(s=>vI(s));return n.length===1?n[0]:{compositeFilter:{op:KM(e.op),filters:n}}}(t):re()}function GM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wi{constructor(e,n,s,i,r=le.min(),o=le.min(),a=Ft.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class YM{constructor(e){this.se=e}}function QM(t){const e=HM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
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
 */class XM{constructor(){this.He=new JM}addToCollectionParentIndex(e,n){return this.He.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Fs.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Fs.min())}updateCollectionGroup(e,n,s){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class JM{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new lt(qe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new lt(qe.comparator)).toArray()}}/**
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
 */class Rr{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Rr(0)}static bn(){return new Rr(-1)}}/**
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
 */class ZM{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?L.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tF{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Lo(s.mutation,i,wn.empty(),at.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=_e()){const i=di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=wo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=di();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,_e()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ls();const o=Po(),a=Po();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ji)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Lo(u.mutation,c,u.mutation.getFieldMask(),at.now())):o.set(c.key,wn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new eF(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Po();let i=new ct((o,a)=>o-a),r=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||wn.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||_e()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=eI();u.forEach(d=>{if(!r.has(d)){const f=lI(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return L.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):L.resolve(di());let a=-1,l=r;return o.next(c=>L.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,_e())).next(u=>({batchId:a,changes:ZE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(s=>{let i=wo();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=wo();return this.indexManager.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const l=function(c,u){return new Au(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,kt.newInvalidDocument(c)))});let o=wo();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Lo(c.mutation,l,wn.empty(),at.now()),Nu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class nF{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Vn(s.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:QM(s.bundledQuery),readTime:Vn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class sF{constructor(){this.overlays=new ct(te.comparator),this.ts=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const s=di();return L.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),L.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),L.resolve()}getOverlaysForCollection(e,n,s){const i=di(),r=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=di(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=di(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return L.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new AM(n,s));let r=this.ts.get(n);r===void 0&&(r=_e(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
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
 */class Fp{constructor(){this.es=new lt(dt.ns),this.ss=new lt(dt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new dt(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new dt(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new te(new qe([])),s=new dt(n,e),i=new dt(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new te(new qe([])),s=new dt(n,e),i=new dt(n,e+1);let r=_e();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new dt(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class dt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return te.comparator(e.key,n.key)||Re(e.ds,n.ds)}static rs(e,n){return Re(e.ds,n.ds)||te.comparator(e.key,n.key)}}/**
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
 */class iF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new lt(dt.ns)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kM(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new dt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new lt(Re);return n.forEach(i=>{const r=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),L.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;te.isDocumentKey(r)||(r=r.child(""));const o=new dt(new te(r),0);let a=new lt(Re);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),L.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){je(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return L.forEach(n.mutations,i=>{const r=new dt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new dt(n,0),i=this._s.firstAfterOrEqual(s);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rF{constructor(e){this.Ts=e,this.docs=new ct(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return L.resolve(s?s.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let s=ls();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():kt.newInvalidDocument(i))}),L.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ls();const o=n.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||zL(WL(u),s)<=0||(i.has(u.key)||Nu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,n,s,i){re()}Es(e,n){return L.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new oF(this)}getSize(e){return L.resolve(this.size)}}class oF extends ZM{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),L.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class aF{constructor(e){this.persistence=e,this.As=new Jr(n=>Np(n),Op),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Fp,this.targetCount=0,this.bs=Rr.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),L.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Rr(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Sn(n),L.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(r).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return L.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),L.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),L.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return L.resolve(s)}containsKey(e,n){return L.resolve(this.vs.containsKey(n))}}/**
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
 */class lF{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ap(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new aF(this),this.indexManager=new XM,this.remoteDocumentCache=function(s){return new rF(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new YM(n),this.xs=new nF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new iF(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){Y("MemoryPersistence","Starting transaction:",e);const i=new cF(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return L.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class cF extends KL{constructor(e){super(),this.currentSequenceNumber=e}}class $p{constructor(e){this.persistence=e,this.$s=new Fp,this.Ms=null}static Fs(e){return new $p(e)}get Bs(){if(this.Ms)return this.Ms;throw re()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),L.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),L.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Bs,s=>{const i=te.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,le.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return L.or([()=>L.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Up{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=_e(),i=_e();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Up(e,n.fromCache,s,i)}}/**
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
 */class uF{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(ey(n))return L.resolve(null);let s=as(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xd(n,null,"F"),s=as(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=_e(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,xd(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,s,i){return ey(n)||i.isEqual(le.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(zv()<=ke.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dd(n)),this.Fi(e,o,n,HL(i,-1)))})}$i(e,n){let s=new lt(XE(e));return n.forEach((i,r)=>{Nu(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return zv()<=ke.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Dd(n)),this.xi.getDocumentsMatchingQuery(e,n,Fs.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class hF{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new ct(Re),this.qi=new Jr(r=>Np(r),Op),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tF(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function dF(t,e,n,s){return new hF(t,e,n,s)}async function _I(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=_e();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function fF(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=L.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);je(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=_e();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function wI(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function pF(t,e){const n=ue(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ft.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&a.push(n.Ds.updateTargetData(r,f))});let l=ls(),c=_e();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(gF(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(le.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=i,r))}function gF(t,e,n){let s=_e(),i=_e();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ls();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function mF(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function vF(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,L.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new wi(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Fd(t,e,n){const s=ue(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ha(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function cy(t,e,n){const s=ue(t);let i=le.min(),r=_e();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ue(a),h=u.qi.get(c);return h!==void 0?L.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(s,o,as(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?r:_e())).next(a=>(yF(s,fM(e),a),{documents:a,Wi:r})))}function yF(t,e,n){let s=t.Ui.get(e)||le.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class uy{constructor(){this.activeTargetIds=tI()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _F{constructor(){this.Br=new uy,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new uy,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wF{qr(e){}shutdown(){}}/**
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
 */class hy{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _l=null;function Th(){return _l===null?_l=268435456+Math.round(2147483648*Math.random()):_l++,"0x"+_l.toString(16)}/**
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
 */const bF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class EF{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ct="WebChannelConnection";class IF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=Th(),a=this.ao(e,n);Y("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>(Y("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw pc("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=bF[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=Th();return new Promise((o,a)=>{const l=new DL;l.setWithCredentials(!0),l.listenOnce(NL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Eh.NO_ERROR:const u=l.getResponseJson();Y(Ct,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Eh.TIMEOUT:Y(Ct,`RPC '${e}' ${r} timed out`),a(new ne(P.DEADLINE_EXCEEDED,"Request time out"));break;case Eh.HTTP_ERROR:const h=l.getStatus();if(Y(Ct,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(y)>=0?y:P.UNKNOWN}(f.status);a(new ne(p,f.message))}else a(new ne(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ne(P.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y(Ct,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);Y(Ct,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=Th(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AL(),a=RL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new xL({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");Y(Ct,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new EF({Wr:m=>{d?Y(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(Y(Ct,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),Y(Ct,`RPC '${e}' stream ${i} sending:`,m),u.send(m))},Hr:()=>u.close()}),p=(m,y,w)=>{m.listen(y,E=>{try{w(E)}catch(C){setTimeout(()=>{throw C},0)}})};return p(u,gl.EventType.OPEN,()=>{d||Y(Ct,`RPC '${e}' stream ${i} transport opened.`)}),p(u,gl.EventType.CLOSE,()=>{d||(d=!0,Y(Ct,`RPC '${e}' stream ${i} transport closed`),f.so())}),p(u,gl.EventType.ERROR,m=>{d||(d=!0,pc(Ct,`RPC '${e}' stream ${i} transport errored:`,m),f.so(new ne(P.UNAVAILABLE,"The operation could not be completed")))}),p(u,gl.EventType.MESSAGE,m=>{var y;if(!d){const w=m.data[0];je(!!w);const E=w,C=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(C){Y(Ct,`RPC '${e}' stream ${i} received error:`,C);const D=C.status;let N=function(O){const _=tt[O];if(_!==void 0)return uI(_)}(D),A=C.message;N===void 0&&(N=P.INTERNAL,A="Unknown error status: "+D+" with message "+C.message),d=!0,f.so(new ne(N,A)),u.close()}else Y(Ct,`RPC '${e}' stream ${i} received:`,w),f.io(w)}}),p(a,OL.STAT_EVENT,m=>{m.stat===Hv.PROXY?Y(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===Hv.NOPROXY&&Y(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function Ch(){return typeof document<"u"?document:null}/**
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
 */function Pu(t){return new LM(t,!0)}/**
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
 */class bI{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class EI{constructor(e,n,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new bI(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(os(n.toString()),os("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new ne(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TF extends EI{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=$M(this.serializer,e),s=function(i){if(!("targetChange"in i))return le.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?le.min():r.readTime?Vn(r.readTime):le.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Md(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Od(a)?{documents:BM(i,a)}:{query:jM(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=fI(i,r.resumeToken):r.snapshotVersion.compareTo(le.min())>0&&(o.readTime=_c(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=WM(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Md(this.serializer),n.removeTarget=e,this.Fo(n)}}class CF extends EI{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=VM(e.writeResults,e.commitTime),s=Vn(e.commitTime);return this.listener.Zo(s,n)}return je(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Md(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>UM(this.serializer,s))};this.Fo(n)}}/**
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
 */class SF extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new ne(P.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(P.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ne(P.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class kF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(os(n),this.ru=!1):Y("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class AF{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Hi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.du.add(4),await qa(l),l.mu.set("Unknown"),l.du.delete(4),await Lu(l)}(this))})}),this.mu=new kF(s,i)}}async function Lu(t){if(Hi(t))for(const e of t.wu)await e(!0)}async function qa(t){for(const e of t.wu)await e(!1)}function II(t,e){const n=ue(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),jp(n)?Bp(n):Zr(n).No()&&Vp(n,e))}function TI(t,e){const n=ue(t),s=Zr(n);n.fu.delete(e),s.No()&&CI(n,e),n.fu.size===0&&(s.No()?s.$o():Hi(n)&&n.mu.set("Unknown"))}function Vp(t,e){t.gu.Ot(e.targetId),Zr(t).jo(e)}function CI(t,e){t.gu.Ot(e),Zr(t).Wo(e)}function Bp(t){t.gu=new OM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Zr(t).start(),t.mu.ou()}function jp(t){return Hi(t)&&!Zr(t).xo()&&t.fu.size>0}function Hi(t){return ue(t).du.size===0}function SI(t){t.gu=void 0}async function RF(t){t.fu.forEach((e,n)=>{Vp(t,e)})}async function NF(t,e){SI(t),jp(t)?(t.mu.au(e),Bp(t)):t.mu.set("Unknown")}async function OF(t,e,n){if(t.mu.set("Online"),e instanceof dI&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wc(t,s)}else if(e instanceof Fl?t.gu.Kt(e):e instanceof hI?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(le.min()))try{const s=await wI(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Ft.EMPTY_BYTE_STRING,l.snapshotVersion)),CI(i,a);const c=new wi(l.target,a,1,l.sequenceNumber);Vp(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){Y("RemoteStore","Failed to raise snapshot:",s),await wc(t,s)}}async function wc(t,e,n){if(!Ha(e))throw e;t.du.add(1),await qa(t),t.mu.set("Offline"),n||(n=()=>wI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Lu(t)})}function kI(t,e){return e().catch(n=>wc(t,n,e))}async function Mu(t){const e=ue(t),n=Us(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;xF(e);)try{const i=await mF(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,DF(e,i)}catch(i){await wc(e,i)}AI(e)&&RI(e)}function xF(t){return Hi(t)&&t.lu.length<10}function DF(t,e){t.lu.push(e);const n=Us(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function AI(t){return Hi(t)&&!Us(t).xo()&&t.lu.length>0}function RI(t){Us(t).start()}async function PF(t){Us(t).tu()}async function LF(t){const e=Us(t);for(const n of t.lu)e.Yo(n.mutations)}async function MF(t,e,n){const s=t.lu.shift(),i=Pp.from(s,e,n);await kI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mu(t)}async function FF(t,e){e&&Us(t).Jo&&await async function(n,s){if(i=s.code,NM(i)&&i!==P.ABORTED){const r=n.lu.shift();Us(n).Oo(),await kI(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Mu(n)}var i}(t,e),AI(t)&&RI(t)}async function dy(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const s=Hi(n);n.du.add(3),await qa(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Lu(n)}async function $F(t,e){const n=ue(t);e?(n.du.delete(2),await Lu(n)):e||(n.du.add(2),await qa(n),n.mu.set("Unknown"))}function Zr(t){return t.yu||(t.yu=function(e,n,s){const i=ue(e);return i.nu(),new TF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:RF.bind(null,t),Zr:NF.bind(null,t),zo:OF.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),jp(t)?Bp(t):t.mu.set("Unknown")):(await t.yu.stop(),SI(t))})),t.yu}function Us(t){return t.pu||(t.pu=function(e,n,s){const i=ue(e);return i.nu(),new CF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:PF.bind(null,t),Zr:FF.bind(null,t),Xo:LF.bind(null,t),Zo:MF.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Mu(t)):(await t.pu.stop(),t.lu.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Hp{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Hp(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wp(t,e){if(os("AsyncQueue",`${e}: ${t}`),Ha(t))return new ne(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class pr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||te.comparator(n.key,s.key):(n,s)=>te.comparator(n.key,s.key),this.keyedMap=wo(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new pr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new pr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class fy{constructor(){this.Iu=new ct(te.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):re():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Nr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Nr(e,n,pr.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class UF{constructor(){this.Eu=void 0,this.listeners=[]}}class VF{constructor(){this.queries=new Jr(e=>QE(e),Ru),this.onlineState="Unknown",this.Au=new Set}}async function BF(t,e){const n=ue(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new UF),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Wp(o,`Initialization of query '${Dd(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&zp(n)}async function jF(t,e){const n=ue(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function HF(t,e){const n=ue(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&zp(n)}function WF(t,e,n){const s=ue(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function zp(t){t.Au.forEach(e=>{e.next()})}class zF{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Nr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class NI{constructor(e){this.key=e}}class OI{constructor(e){this.key=e}}class qF{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=_e(),this.mutatedKeys=_e(),this.Ku=XE(e),this.Gu=new pr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new fy,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Nu(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),y=!0):this.Wu(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Nr(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new fy,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=_e(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new OI(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new NI(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=_e();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Nr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class KF{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class GF{constructor(e){this.key=e,this.ec=!1}}class YF{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Jr(a=>QE(a),Ru),this.ic=new Map,this.rc=new Set,this.oc=new ct(te.comparator),this.uc=new Map,this.cc=new Fp,this.ac={},this.hc=new Map,this.lc=Rr.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function QF(t,e){const n=o$(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await vF(n.localStore,as(e));n.isPrimaryClient&&II(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await XF(n,e,s,a==="current",o.resumeToken)}return i}async function XF(t,e,n,s,i){t.dc=(h,d,f)=>async function(p,m,y,w){let E=m.view.zu(y);E.Mi&&(E=await cy(p.localStore,m.query,!1).then(({documents:N})=>m.view.zu(N,E)));const C=w&&w.targetChanges.get(m.targetId),D=m.view.applyChanges(E,p.isPrimaryClient,C);return gy(p,m.targetId,D.Yu),D.snapshot}(t,h,d,f);const r=await cy(t.localStore,e,!0),o=new qF(e,r.Wi),a=o.zu(r.documents),l=za.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);gy(t,n,c.Yu);const u=new KF(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function JF(t,e){const n=ue(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Ru(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fd(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),TI(n.remoteStore,s.targetId),$d(n,s.targetId)}).catch(ja)):($d(n,s.targetId),await Fd(n.localStore,s.targetId,!0))}async function ZF(t,e,n){const s=a$(t);try{const i=await function(r,o){const a=ue(r),l=at.now(),c=o.reduce((d,f)=>d.add(f.key),_e());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=ls(),p=_e();return a.Ki.getEntries(d,c).next(m=>{f=m,f.forEach((y,w)=>{w.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const y=[];for(const w of o){const E=CM(w,u.get(w.key).overlayedDocument);E!=null&&y.push(new ji(w.key,E,HE(E.value.mapValue),Un.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(m=>{h=m;const y=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,m.batchId,y)})}).then(()=>({batchId:h.batchId,changes:ZE(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new ct(Re)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,n),await Ka(s,i.changes),await Mu(s.remoteStore)}catch(i){const r=Wp(i,"Failed to persist write");n.reject(r)}}async function xI(t,e){const n=ue(t);try{const s=await pF(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(je(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?je(o.ec):i.removedDocuments.size>0&&(je(o.ec),o.ec=!1))}),await Ka(n,s,e)}catch(s){await ja(s)}}function py(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ue(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&zp(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function e$(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new ct(te.comparator);o=o.insert(r,kt.newNoDocument(r,le.min()));const a=_e().add(r),l=new Du(le.min(),new Map,new lt(Re),o,a);await xI(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),qp(s)}else await Fd(s.localStore,e,!1).then(()=>$d(s,e,n)).catch(ja)}async function t$(t,e){const n=ue(t),s=e.batch.batchId;try{const i=await fF(n.localStore,e);PI(n,s,null),DI(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ka(n,i)}catch(i){await ja(i)}}async function n$(t,e,n){const s=ue(t);try{const i=await function(r,o){const a=ue(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(je(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);PI(s,e,n),DI(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ka(s,i)}catch(i){await ja(i)}}function DI(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function PI(t,e,n){const s=ue(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function $d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||LI(t,s)})}function LI(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(TI(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),qp(t))}function gy(t,e,n){for(const s of n)s instanceof NI?(t.cc.addReference(s.key,e),s$(t,s)):s instanceof OI?(Y("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||LI(t,s.key)):re()}function s$(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(Y("SyncEngine","New document in limbo: "+n),t.rc.add(s),qp(t))}function qp(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new te(qe.fromString(e)),s=t.lc.next();t.uc.set(s,new GF(n)),t.oc=t.oc.insert(n,s),II(t.remoteStore,new wi(as(xp(n.path)),s,2,Ap.ct))}}async function Ka(t,e,n){const s=ue(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Up.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=ue(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(l,h=>L.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>L.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ha(u))throw u;Y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,p)}}}(s.localStore,r))}async function i$(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const s=await _I(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new ne(P.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ka(n,s.Qi)}}function r$(t,e){const n=ue(t),s=n.uc.get(e);if(s&&s.ec)return _e().add(s.key);{let i=_e();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function o$(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e$.bind(null,e),e.nc.zo=HF.bind(null,e.eventManager),e.nc.wc=WF.bind(null,e.eventManager),e}function a$(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n$.bind(null,e),e}class my{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dF(this.persistence,new uF,e.initialUser,this.serializer)}createPersistence(e){return new lF($p.Fs,this.serializer)}createSharedClientState(e){return new _F}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class l${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>py(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=i$.bind(null,this.syncEngine),await $F(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new VF}createDatastore(e){const n=Pu(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new IF(i));var i;return function(r,o,a,l){return new SF(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>py(this.syncEngine,a,0),o=hy.D()?new hy:new wF,new AF(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new YF(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);Y("RemoteStore","RemoteStore shutting down."),n.du.add(5),await qa(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class c${constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):os("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class u${constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=UE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Wp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Sh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await _I(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await d$(t);Y("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>dy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>dy(e.remoteStore,r)),t._onlineComponents=e}function h$(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function d$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!h$(n))throw n;pc("Error using user provided cache. Falling back to memory cache: "+n),await Sh(t,new my)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Sh(t,new my);return t._offlineComponents}async function MI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await vy(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await vy(t,new l$))),t._onlineComponents}function f$(t){return MI(t).then(e=>e.syncEngine)}async function yy(t){const e=await MI(t),n=e.eventManager;return n.onListen=QF.bind(null,e.syncEngine),n.onUnlisten=JF.bind(null,e.syncEngine),n}/**
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
 */const _y=new Map;/**
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
 */function FI(t,e,n){if(!n)throw new ne(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function p$(t,e,n,s){if(e===!0&&s===!0)throw new ne(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wy(t){if(!te.isDocumentKey(t))throw new ne(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function by(t){if(te.isDocumentKey(t))throw new ne(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kp(t);throw new ne(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ey{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,p$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ey({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ey(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PL;switch(n.type){case"firstParty":return new $L(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_y.get(e);n&&(Y("ComponentProvider","Removing Datastore"),_y.delete(e),n.terminate())}(this),Promise.resolve()}}function g$(t,e,n,s={}){var i;const r=(t=bi(t,Fu))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&pc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=St.MOCK_USER;else{o=hO(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ne(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new St(l)}t._authCredentials=new LL(new $E(o,a))}}/**
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
 */class Jt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class $u{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class xs extends $u{constructor(e,n,s){super(e,n,xp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new te(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function IW(t,e,...n){if(t=mt(t),FI("collection","path",e),t instanceof Fu){const s=qe.fromString(e,...n);return by(s),new xs(t,null,s)}{if(!(t instanceof Jt||t instanceof xs))throw new ne(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return by(s),new xs(t.firestore,null,s)}}function TW(t,e,...n){if(t=mt(t),arguments.length===1&&(e=UE.A()),FI("doc","path",e),t instanceof Fu){const s=qe.fromString(e,...n);return wy(s),new Jt(t,null,new te(s))}{if(!(t instanceof Jt||t instanceof xs))throw new ne(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return wy(s),new Jt(t.firestore,t instanceof xs?t.converter:null,new te(s))}}/**
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
 */class m${constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new bI(this,"async_queue_retry"),this.qc=()=>{const n=Ch();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new _i;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ha(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw os("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Hp.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&re()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Iy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ya extends Fu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new m$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||VI(this),this._firestoreClient.terminate()}}function $I(t,e){const n=typeof t=="object"?t:au(),s=typeof t=="string"?t:e||"(default)",i=Ui(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=cO("firestore");r&&g$(i,...r)}return i}function UI(t){return t._firestoreClient||VI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function VI(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new XL(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new u$(t._authCredentials,t._appCheckCredentials,t._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Or(Ft.fromBase64String(e))}catch(n){throw new ne(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Or(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class BI{constructor(e){this._methodName=e}}/**
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
 */class Yp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */const v$=/^__.*__$/;class y${constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wa(e,this.data,n,this.fieldTransforms)}}function jI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Qp{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return bc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(jI(this.Yc)&&v$.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class _${constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pu(e)}ua(e,n,s,i=!1){return new Qp({Yc:e,methodName:n,oa:s,path:xt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function w$(t){const e=t._freezeSettings(),n=Pu(t._databaseId);return new _$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function b$(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);qI("Data must be an object, but it was:",o,s);const a=WI(s,o);let l,c;if(r.merge)l=new wn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=E$(e,h,n);if(!o.contains(d))throw new ne(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);T$(u,d)||u.push(d)}l=new wn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new y$(new on(a),l,c)}function HI(t,e){if(zI(t=mt(t)))return qI("Unsupported field value:",e,t),WI(t,e);if(t instanceof BI)return function(n,s){if(!jI(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=HI(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _M(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=at.fromDate(n);return{timestampValue:_c(s.serializer,i)}}if(n instanceof at){const i=new at(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_c(s.serializer,i)}}if(n instanceof Yp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Or)return{bytesValue:fI(s.serializer,n._byteString)};if(n instanceof Jt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mp(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Kp(n)}`)}(t,e)}function WI(t,e){const n={};return VE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,(s,i)=>{const r=HI(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function zI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Yp||t instanceof Or||t instanceof Jt||t instanceof BI)}function qI(t,e,n){if(!zI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Kp(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function E$(t,e,n){if((e=mt(e))instanceof Gp)return e._internalPath;if(typeof e=="string")return KI(t,e);throw bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const I$=new RegExp("[~\\*/\\[\\]]");function KI(t,e,n){if(e.search(I$)>=0)throw bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gp(...e.split("."))._internalPath}catch{throw bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ne(P.INVALID_ARGUMENT,a+t+l)}function T$(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class GI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(YI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class C$ extends GI{data(){return super.data()}}function YI(t,e){return typeof e=="string"?KI(t,e):e instanceof Gp?e._internalPath:e._delegate._internalPath}/**
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
 */function S$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class k${convertValue(e,n="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){const s={};return Xr(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Yp(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=jE(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fa(e));default:return null}}convertTimestamp(e){const n=$s(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=qe.fromString(e);je(yI(s));const i=new pa(s.get(1),s.get(3)),r=new te(s.popFirst(5));return i.isEqual(n)||os(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function A$(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QI extends GI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(YI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $l extends QI{data(e={}){return super.data(e)}}class R${constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bo(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $l(this._firestore,this._userDataWriter,s.key,s,new bo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new $l(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $l(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:N$(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function N$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class XI extends k${constructor(e){super(),this.firestore=e}convertBytes(e){return new Or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function CW(t,e,n){t=bi(t,Jt);const s=bi(t.firestore,ya),i=A$(t.converter,e,n);return JI(s,[b$(w$(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Un.none())])}function SW(t){return JI(bi(t.firestore,ya),[new Dp(t._key,Un.none())])}function kW(t,...e){var n,s,i;t=mt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Iy(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Iy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Jt)c=bi(t.firestore,ya),u=xp(t._key.path),l={next:h=>{e[o]&&e[o](O$(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=bi(t,$u);c=bi(h.firestore,ya),u=h._query;const d=new XI(c);l={next:f=>{e[o]&&e[o](new R$(c,d,h,f))},error:e[o+1],complete:e[o+2]},S$(t._query)}return function(h,d,f,p){const m=new c$(p),y=new zF(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>BF(await yy(h),y)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>jF(await yy(h),y))}}(UI(c),u,a,l)}function JI(t,e){return function(n,s){const i=new _i;return n.asyncQueue.enqueueAndForget(async()=>ZF(await f$(n),s,i)),i.promise}(UI(t),e)}function O$(t,e,n){const s=n.docs.get(e._key),i=new XI(t);return new QI(t,i,e._key,s,new bo(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Qr=n})(Vi),Kt(new Vt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ya(new ML(n.getProvider("auth-internal")),new VL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ne(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),bt(Wv,"3.10.0",t),bt(Wv,"3.10.0","esm2017")})();const ZI="@firebase/installations",Xp="0.6.4";/**
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
 */const eT=1e4,tT=`w:${Xp}`,nT="FIS_v2",x$="https://firebaseinstallations.googleapis.com/v1",D$=60*60*1e3,P$="installations",L$="Installations";/**
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
 */const M$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ri=new qs(P$,L$,M$);function sT(t){return t instanceof pn&&t.code.includes("request-failed")}/**
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
 */function iT({projectId:t}){return`${x$}/projects/${t}/installations`}function rT(t){return{token:t.token,requestStatus:2,expiresIn:$$(t.expiresIn),creationTime:Date.now()}}async function oT(t,e){const s=(await e.json()).error;return Ri.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function aT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function F$(t,{refreshToken:e}){const n=aT(t);return n.append("Authorization",U$(e)),n}async function lT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $$(t){return Number(t.replace("s","000"))}function U$(t){return`${nT} ${t}`}/**
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
 */async function V$({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=iT(t),i=aT(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:nT,appId:t.appId,sdkVersion:tT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await lT(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:rT(c.authToken)}}else throw await oT("Create Installation",l)}/**
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
 */function cT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function B$(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const j$=/^[cdef][\w-]{21}$/,Ud="";function H$(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=W$(t);return j$.test(n)?n:Ud}catch{return Ud}}function W$(t){return B$(t).substr(0,22)}/**
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
 */function Uu(t){return`${t.appName}!${t.appId}`}/**
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
 */const uT=new Map;function hT(t,e){const n=Uu(t);dT(n,e),z$(n,e)}function dT(t,e){const n=uT.get(t);if(!!n)for(const s of n)s(e)}function z$(t,e){const n=q$();n&&n.postMessage({key:t,fid:e}),K$()}let fi=null;function q$(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=t=>{dT(t.data.key,t.data.fid)}),fi}function K$(){uT.size===0&&fi&&(fi.close(),fi=null)}/**
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
 */const G$="firebase-installations-database",Y$=1,Ni="firebase-installations-store";let kh=null;function Jp(){return kh||(kh=Jb(G$,Y$,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ni)}}})),kh}async function Ec(t,e){const n=Uu(t),i=(await Jp()).transaction(Ni,"readwrite"),r=i.objectStore(Ni),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&hT(t,e.fid),e}async function fT(t){const e=Uu(t),s=(await Jp()).transaction(Ni,"readwrite");await s.objectStore(Ni).delete(e),await s.done}async function Vu(t,e){const n=Uu(t),i=(await Jp()).transaction(Ni,"readwrite"),r=i.objectStore(Ni),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&hT(t,a.fid),a}/**
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
 */async function Zp(t){let e;const n=await Vu(t.appConfig,s=>{const i=Q$(s),r=X$(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Ud?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Q$(t){const e=t||{fid:H$(),registrationStatus:0};return pT(e)}function X$(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ri.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=J$(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Z$(t)}:{installationEntry:e}}async function J$(t,e){try{const n=await V$(t,e);return Ec(t.appConfig,n)}catch(n){throw sT(n)&&n.customData.serverCode===409?await fT(t.appConfig):await Ec(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Z$(t){let e=await Ty(t.appConfig);for(;e.registrationStatus===1;)await cT(100),e=await Ty(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Zp(t);return s||n}return e}function Ty(t){return Vu(t,e=>{if(!e)throw Ri.create("installation-not-found");return pT(e)})}function pT(t){return eU(t)?{fid:t.fid,registrationStatus:0}:t}function eU(t){return t.registrationStatus===1&&t.registrationTime+eT<Date.now()}/**
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
 */async function tU({appConfig:t,heartbeatServiceProvider:e},n){const s=nU(t,n),i=F$(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:tT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await lT(()=>fetch(s,a));if(l.ok){const c=await l.json();return rT(c)}else throw await oT("Generate Auth Token",l)}function nU(t,{fid:e}){return`${iT(t)}/${e}/authTokens:generate`}/**
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
 */async function eg(t,e=!1){let n;const s=await Vu(t.appConfig,r=>{if(!gT(r))throw Ri.create("not-registered");const o=r.authToken;if(!e&&rU(o))return r;if(o.requestStatus===1)return n=sU(t,e),r;{if(!navigator.onLine)throw Ri.create("app-offline");const a=aU(r);return n=iU(t,a),a}});return n?await n:s.authToken}async function sU(t,e){let n=await Cy(t.appConfig);for(;n.authToken.requestStatus===1;)await cT(100),n=await Cy(t.appConfig);const s=n.authToken;return s.requestStatus===0?eg(t,e):s}function Cy(t){return Vu(t,e=>{if(!gT(e))throw Ri.create("not-registered");const n=e.authToken;return lU(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function iU(t,e){try{const n=await tU(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ec(t.appConfig,s),n}catch(n){if(sT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await fT(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ec(t.appConfig,s)}throw n}}function gT(t){return t!==void 0&&t.registrationStatus===2}function rU(t){return t.requestStatus===2&&!oU(t)}function oU(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+D$}function aU(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function lU(t){return t.requestStatus===1&&t.requestTime+eT<Date.now()}/**
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
 */async function cU(t){const e=t,{installationEntry:n,registrationPromise:s}=await Zp(e);return s?s.catch(console.error):eg(e).catch(console.error),n.fid}/**
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
 */async function uU(t,e=!1){const n=t;return await hU(n),(await eg(n,e)).token}async function hU(t){const{registrationPromise:e}=await Zp(t);e&&await e}/**
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
 */function dU(t){if(!t||!t.options)throw Ah("App Configuration");if(!t.name)throw Ah("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ah(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ah(t){return Ri.create("missing-app-config-values",{valueName:t})}/**
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
 */const mT="installations",fU="installations-internal",pU=t=>{const e=t.getProvider("app").getImmediate(),n=dU(e),s=Ui(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},gU=t=>{const e=t.getProvider("app").getImmediate(),n=Ui(e,mT).getImmediate();return{getId:()=>cU(n),getToken:i=>uU(n,i)}};function mU(){Kt(new Vt(mT,pU,"PUBLIC")),Kt(new Vt(fU,gU,"PRIVATE"))}mU();bt(ZI,Xp);bt(ZI,Xp,"esm2017");/**
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
 */const Ic="analytics",vU="firebase_id",yU="origin",_U=60*1e3,wU="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tg="https://www.googletagmanager.com/gtag/js";/**
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
 */const zt=new qr("@firebase/analytics");/**
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
 */const bU={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Zt=new qs("analytics","Analytics",bU);/**
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
 */function EU(t){if(!t.startsWith(tg)){const e=Zt.create("invalid-gtag-resource",{gtagURL:t});return zt.warn(e.message),""}return t}function vT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function IU(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function TU(t,e){const n=IU("firebase-js-sdk-policy",{createScriptURL:EU}),s=document.createElement("script"),i=`${tg}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function CU(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function SU(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await vT(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){zt.error(a)}t("config",i,r)}async function kU(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await vT(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){zt.error(r)}}function AU(t,e,n,s){async function i(r,o,a){try{r==="event"?await kU(t,e,n,o,a):r==="config"?await SU(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){zt.error(l)}}return i}function RU(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=AU(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function NU(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(tg)&&n.src.includes(t))return n;return null}/**
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
 */const OU=30,xU=1e3;class DU{constructor(e={},n=xU){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yT=new DU;function PU(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function LU(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:PU(s)},r=wU.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function MU(t,e=yT,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Zt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Zt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new UU;return setTimeout(async()=>{a.abort()},n!==void 0?n:_U),_T({appId:s,apiKey:i,measurementId:r},o,a,e)}async function _T(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=yT){var r;const{appId:o,measurementId:a}=t;try{await FU(s,e)}catch(l){if(a)return zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await LU(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!$U(c)){if(i.deleteThrottleMetadata(o),a)return zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?ov(n,i.intervalMillis,OU):ov(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),zt.debug(`Calling attemptFetch again in ${u} millis`),_T(t,h,s,i)}}function FU(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $U(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class UU{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VU(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function BU(){if(Kf())try{await Gb()}catch(t){return zt.warn(Zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zt.warn(Zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jU(t,e,n,s,i,r,o){var a;const l=MU(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>zt.error(f)),e.push(l);const c=BU().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([l,c]);NU(r)||TU(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[yU]="firebase",d.update=!0,h!=null&&(d[vU]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class HU{constructor(e){this.app=e}_delete(){return delete Mo[this.app.options.appId],Promise.resolve()}}let Mo={},Sy=[];const ky={};let Rh="dataLayer",WU="gtag",Ay,wT,Ry=!1;function zU(){const t=[];if(zb()&&t.push("This is a browser extension environment."),fO()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Zt.create("invalid-analytics-context",{errorInfo:e});zt.warn(n.message)}}function qU(t,e,n){zU();const s=t.options.appId;if(!s)throw Zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Zt.create("no-api-key");if(Mo[s]!=null)throw Zt.create("already-exists",{id:s});if(!Ry){CU(Rh);const{wrappedGtag:r,gtagCore:o}=RU(Mo,Sy,ky,Rh,WU);wT=r,Ay=o,Ry=!0}return Mo[s]=jU(t,Sy,ky,e,Ay,Rh,n),new HU(t)}function KU(t=au()){t=mt(t);const e=Ui(t,Ic);return e.isInitialized()?e.getImmediate():GU(t)}function GU(t,e={}){const n=Ui(t,Ic);if(n.isInitialized()){const i=n.getImmediate();if(na(e,n.getOptions()))return i;throw Zt.create("already-initialized")}return n.initialize({options:e})}function YU(t,e,n,s){t=mt(t),VU(wT,Mo[t.app.options.appId],e,n,s).catch(i=>zt.error(i))}const Ny="@firebase/analytics",Oy="0.9.5";function QU(){Kt(new Vt(Ic,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return qU(s,i,n)},"PUBLIC")),Kt(new Vt("analytics-internal",t,"PRIVATE")),bt(Ny,Oy),bt(Ny,Oy,"esm2017");function t(e){try{const n=e.getProvider(Ic).getImmediate();return{logEvent:(s,i,r)=>YU(n,s,i,r)}}catch(n){throw Zt.create("interop-component-reg-failed",{reason:n})}}}QU();const XU={apiKey:"AIzaSyDTIda0nsAIldkPNk6vRoL7IPse4L7NVMg",authDomain:"listify-v2.firebaseapp.com",projectId:"listify-v2",storageBucket:"listify-v2.appspot.com",messagingSenderId:"927463433227",appId:"1:927463433227:web:a0d94a59566a8b16d2930e",measurementId:"G-30WR1BN041"},Bu=Zb(XU);KU(Bu);const AW=$I(Bu),JU=rp(Bu);function ZU(){return new Promise((t,e)=>{const n=yD(JU,s=>{n(),t(s)},e)})}const eV=[{path:"/",component:eO,children:[{path:"",name:"Home",component:()=>vs(()=>import("./Home.83fa93ec.js"),["assets/Home.83fa93ec.js","assets/lists.72e8a867.js","assets/lists.f7bfd9e0.css","assets/forwardRefs.2d67e586.js","assets/easing.6e2d7abd.js","assets/VContainer.3241f241.js","assets/VContainer.37f80755.css","assets/Home.dd89616e.css"]),meta:{requiresAuth:!0}},{path:"/timer",name:"Timer",component:()=>vs(()=>import("./Timer.5e7bdb3a.js"),["assets/Timer.5e7bdb3a.js","assets/VContainer.3241f241.js","assets/VContainer.37f80755.css"]),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>vs(()=>import("./Settings.5193bfc2.js"),["assets/Settings.5193bfc2.js","assets/VContainer.3241f241.js","assets/VContainer.37f80755.css","assets/VForm.b70bf979.js","assets/form.f3de3bcc.js","assets/forwardRefs.2d67e586.js","assets/Settings.7d76e4a4.css"]),meta:{requiresAuth:!0}},{path:"/list",name:"List",component:()=>vs(()=>import("./List.7218e503.js"),["assets/List.7218e503.js","assets/lists.72e8a867.js","assets/lists.f7bfd9e0.css","assets/VTextField.65be7d43.js","assets/easing.6e2d7abd.js","assets/form.f3de3bcc.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/VContainer.3241f241.js","assets/VContainer.37f80755.css","assets/List.d720ec69.css"]),meta:{requiresAuth:!0},children:[{path:":id",component:()=>vs(()=>import("./List.7218e503.js"),["assets/List.7218e503.js","assets/lists.72e8a867.js","assets/lists.f7bfd9e0.css","assets/VTextField.65be7d43.js","assets/easing.6e2d7abd.js","assets/form.f3de3bcc.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/VContainer.3241f241.js","assets/VContainer.37f80755.css","assets/List.d720ec69.css"])}]},{path:"/login",name:"Login",component:()=>vs(()=>import("./Login.4856a91b.js"),["assets/Login.4856a91b.js","assets/persist.7640ee5b.js","assets/VTextField.65be7d43.js","assets/easing.6e2d7abd.js","assets/form.f3de3bcc.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/persist.53f56c42.css","assets/VContainer.3241f241.js","assets/VContainer.37f80755.css","assets/VForm.b70bf979.js","assets/Login.49f7fcd7.css"])},{path:"/signup",name:"Registration",component:()=>vs(()=>import("./Register.62467d3f.js"),["assets/Register.62467d3f.js","assets/persist.7640ee5b.js","assets/VTextField.65be7d43.js","assets/easing.6e2d7abd.js","assets/form.f3de3bcc.js","assets/forwardRefs.2d67e586.js","assets/VTextField.f91f0908.css","assets/persist.53f56c42.css","assets/VContainer.3241f241.js","assets/VContainer.37f80755.css","assets/VForm.b70bf979.js","assets/Register.6165d82d.css"])}]}],bT=VN({history:nN({}.BASE_URL),routes:eV});bT.beforeEach(async t=>{if(t.matched.some(n=>n.meta.requiresAuth)&&!await ZU())return"/login"});function tV(t){_A(),t.use($R).use(NR).use(bT)}/**
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
 */const nV=new Map,sV={activated:!1,tokenObservers:[]};function Hn(t){return nV.get(t)||Object.assign({},sV)}const xy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class iV{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ea,await rV(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ea,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function rV(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const oV={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Tc=new qs("appCheck","AppCheck",oV);function aV(t){if(!Hn(t).activated)throw Tc.create("use-before-activation",{appName:t.name})}/**
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
 */const lV="firebase-app-check-database",cV=1,Vd="firebase-app-check-store";let wl=null;function uV(){return wl||(wl=new Promise((t,e)=>{try{const n=indexedDB.open(lV,cV);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Tc.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Vd,{keyPath:"compositeKey"})}}}catch(n){e(Tc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),wl)}function hV(t,e){return dV(fV(t),e)}async function dV(t,e){const s=(await uV()).transaction(Vd,"readwrite"),r=s.objectStore(Vd).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Tc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function fV(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Bd=new qr("@firebase/app-check");function Dy(t,e){return Kf()?hV(t,e).catch(n=>{Bd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const pV={error:"UNKNOWN_ERROR"};function gV(t){return ru.encodeString(JSON.stringify(t),!1)}async function jd(t,e=!1){const n=t.app;aV(n);const s=Hn(n);let i=s.token,r;if(i&&!Eo(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Eo(l)?i=l:await Dy(n,void 0))}if(!e&&i&&Eo(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Hn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Bd.warn(l.message):Bd.error(l),r=l}let a;return i?r?Eo(i)?a={token:i.token,internalError:r}:a=Ly(r):(a={token:i.token},s.token=i,await Dy(n,i)):a=Ly(r),o&&yV(n,a),a}function mV(t,e,n,s){const{app:i}=t,r=Hn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Eo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Py(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Py(t))}function ET(t,e){const n=Hn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Py(t){const{app:e}=t,n=Hn(e);let s=n.tokenRefresher;s||(s=vV(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function vV(t){const{app:e}=t;return new iV(async()=>{const n=Hn(e);let s;if(n.token?s=await jd(t,!0):s=await jd(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Hn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},xy.RETRIAL_MIN_WAIT,xy.RETRIAL_MAX_WAIT)}function yV(t,e){const n=Hn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Eo(t){return t.expireTimeMillis-Date.now()>0}function Ly(t){return{token:gV(pV),error:t}}/**
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
 */class _V{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Hn(this.app);for(const n of e)ET(this.app,n.next);return Promise.resolve()}}function wV(t,e){return new _V(t,e)}function bV(t){return{getToken:e=>jd(t,e),addTokenListener:e=>mV(t,"INTERNAL",e),removeTokenListener:e=>ET(t.app,e)}}const EV="@firebase/app-check",IV="0.6.4",TV="app-check",My="app-check-internal";function CV(){Kt(new Vt(TV,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return wV(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(My).initialize()})),Kt(new Vt(My,t=>{const e=t.getProvider("app-check").getImmediate();return bV(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),bt(EV,IV)}CV();const IT=Symbol("firebaseApp");function ju(t){return $r()&&Le(IT,null)||au(t)}const SV=typeof window<"u",bl=new WeakMap;function kV(t,e){if(!bl.has(t)){const n=Uc(!0);bl.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),bl.delete(t)}}return bl.get(t)}const TT=new WeakMap;function RW(t){return TT.get(ju(t))}const El=new WeakMap;function AV(t){const e=ju(t);if(!El.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{El.set(e,r),n(r.value)}];El.set(e,i)}return El.get(e)}function RV(t,e){const n=rp(e);E0(n,s=>{const i=AV();t.value=s,Array.isArray(i)&&i[1](t)})}const Fy="@firebase/database",$y="0.14.4";/**
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
 */let CT="";function NV(t){CT=t}/**
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
 */class OV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),wt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ta(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class xV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ST=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OV(e)}}catch{}return new xV},pi=ST("localStorage"),Hd=ST("sessionStorage");/**
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
 */const gr=new qr("@firebase/database"),DV=function(){let t=1;return function(){return t++}}(),kT=function(t){const e=TO(t),n=new _O;n.update(e);const s=n.digest();return ru.encodeByteArray(s)},Ga=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ga.apply(null,s):typeof s=="object"?e+=wt(s):e+=s,e+=" "}return e};let Ei=null,Uy=!0;const PV=function(t,e){W(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gr.logLevel=ke.VERBOSE,Ei=gr.log.bind(gr),e&&Hd.set("logging_enabled",!0)):typeof t=="function"?Ei=t:(Ei=null,Hd.remove("logging_enabled"))},At=function(...t){if(Uy===!0&&(Uy=!1,Ei===null&&Hd.get("logging_enabled")===!0&&PV(!0)),Ei){const e=Ga.apply(null,t);Ei(e)}},Ya=function(t){return function(...e){At(t,...e)}},Wd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ga(...t);gr.error(e)},Oi=function(...t){const e=`FIREBASE FATAL ERROR: ${Ga(...t)}`;throw gr.error(e),new Error(e)},en=function(...t){const e="FIREBASE WARNING: "+Ga(...t);gr.warn(e)},LV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},AT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xr="[MIN_NAME]",xi="[MAX_NAME]",eo=function(t,e){if(t===e)return 0;if(t===xr||e===xi)return-1;if(e===xr||t===xi)return 1;{const n=Vy(t),s=Vy(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},FV=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+wt(e))},ng=function(t){if(typeof t!="object"||t===null)return wt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=wt(e[s]),n+=":",n+=ng(t[e[s]]);return n+="}",n},RT=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function dn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const NT=function(t){W(!AT(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},$V=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},VV=new RegExp("^-?(0*)\\d{1,10}$"),BV=-2147483648,jV=2147483647,Vy=function(t){if(VV.test(t)){const e=Number(t);if(e>=BV&&e<=jV)return e}return null},Qa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw en("Exception was thrown by user callback.",n),e},Math.floor(0))}},HV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zV{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(At("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class zd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zd.OWNER="owner";/**
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
 */const sg="5",OT="v",xT="s",DT="r",PT="f",LT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,MT="ls",FT="p",qd="ac",$T="websocket",UT="long_polling";/**
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
 */class qV{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function KV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function VT(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let s;if(e===$T)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===UT)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);KV(t)&&(n.ns=t.namespace);const i=[];return dn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class GV{constructor(){this.counters_={}}incrementCounter(e,n=1){hs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sO(this.counters_)}}/**
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
 */const Nh={},Oh={};function ig(t){const e=t.toString();return Nh[e]||(Nh[e]=new GV),Nh[e]}function YV(t,e){const n=t.toString();return Oh[n]||(Oh[n]=e()),Oh[n]}/**
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
 */class QV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qa(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const By="start",XV="close",JV="pLPCommand",ZV="pRTLPCB",BT="id",jT="pw",HT="ser",eB="cb",tB="seg",nB="ts",sB="d",iB="dframe",WT=1870,zT=30,rB=WT-zT,oB=25e3,aB=3e4;class sr{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ya(e),this.stats_=ig(n),this.urlFn=l=>(this.appCheckToken&&(l[qd]=this.appCheckToken),VT(n,UT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aB)),MV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rg((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===By)this.id=a,this.password=l;else if(o===XV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[By]="t",s[HT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[eB]=this.scriptTagHolder.uniqueCallbackIdentifier),s[OT]=sg,this.transportSessionId&&(s[xT]=this.transportSessionId),this.lastSessionId&&(s[MT]=this.lastSessionId),this.applicationId&&(s[FT]=this.applicationId),this.appCheckToken&&(s[qd]=this.appCheckToken),typeof location<"u"&&location.hostname&&LT.test(location.hostname)&&(s[DT]=PT);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){sr.forceAllow_=!0}static forceDisallow(){sr.forceDisallow_=!0}static isAvailable(){return sr.forceAllow_?!0:!sr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$V()&&!UV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bb(n),i=RT(s,rB);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[iB]="t",s[BT]=e,s[jT]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=wt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rg{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=DV(),window[JV+this.uniqueCallbackIdentifier]=e,window[ZV+this.uniqueCallbackIdentifier]=n,this.myIFrame=rg.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){At("frame writing exception"),a.stack&&At(a.stack),At(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||At("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[BT]=this.myID,e[jT]=this.myPW,e[HT]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zT+s.length<=WT;){const o=this.pendingSegs.shift();s=s+"&"+tB+i+"="+o.seg+"&"+nB+i+"="+o.ts+"&"+sB+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(oB)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{At("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const lB=16384,cB=45e3;let Cc=null;typeof MozWebSocket<"u"?Cc=MozWebSocket:typeof WebSocket<"u"&&(Cc=WebSocket);class yn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ya(this.connId),this.stats_=ig(n),this.connURL=yn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[OT]=sg,typeof location<"u"&&location.hostname&&LT.test(location.hostname)&&(o[DT]=PT),n&&(o[xT]=n),s&&(o[MT]=s),i&&(o[qd]=i),r&&(o[FT]=r),VT(e,$T,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pi.set("previous_websocket_failure",!0);try{let s;Kb(),this.mySock=new Cc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cc!==null&&!yn.forceDisallow_}static previouslyFailed(){return pi.isInMemoryStorage||pi.get("previous_websocket_failure")===!0}markConnectionHealthy(){pi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ta(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=RT(n,lB);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cB))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yn.responsesRequiredToBeHealthy=2;yn.healthyTimeout=3e4;/**
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
 */class _a{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[sr,yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=yn&&yn.isAvailable();let s=n&&!yn.previouslyFailed();if(e.webSocketOnly&&(n||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[yn];else{const i=this.transports_=[];for(const r of _a.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);_a.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_a.globalTransportInitialized_=!1;/**
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
 */const uB=6e4,hB=5e3,dB=10*1024,fB=100*1024,xh="t",jy="d",pB="s",Hy="r",gB="e",Wy="o",zy="a",qy="n",Ky="p",mB="h";class vB{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ya("c:"+this.id+":"),this.transportManager_=new _a(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fB?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dB?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xh in e){const n=e[xh];n===zy?this.upgradeIfSecondaryHealthy_():n===Hy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),s=uo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ky,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),s=uo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(xh,e);if(jy in e){const s=e[jy];if(n===mB){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===pB?this.onConnectionShutdown_(s):n===Hy?this.onReset_(s):n===gB?Wd("Server Error: "+s):n===Wy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sg!==s&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uB))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hB))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ky,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qT{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class KT{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Sc extends KT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sc}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Gy=32,Yy=768;class We{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function De(){return new We("")}function Ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vs(t){return t.pieces_.length-t.pieceNum_}function Be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function GT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yB(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function YT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function QT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new We(e,0)}function pt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof We)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new We(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function an(t,e){const n=Ie(t),s=Ie(e);if(n===null)return e;if(n===s)return an(Be(t),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function XT(t,e){if(Vs(t)!==Vs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function bn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Vs(t)>Vs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class _B{constructor(e,n){this.errorPrefix_=n,this.parts_=YT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ou(this.parts_[s]);JT(this)}}function wB(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ou(e),JT(t)}function bB(t){const e=t.parts_.pop();t.byteLength_-=ou(e),t.parts_.length>0&&(t.byteLength_-=1)}function JT(t){if(t.byteLength_>Yy)throw new Error(t.errorPrefix_+"has a key path longer than "+Yy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gy+") or object contains a cycle "+si(t))}function si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class og extends KT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new og}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ho=1e3,EB=60*5*1e3,Qy=30*1e3,IB=1.3,TB=3e4,CB="server_kill",Xy=3;class ts extends qT{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ts.nextPersistentConnectionId_++,this.log_=Ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ho,this.maxReconnectDelay_=EB,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Kb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");og.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(wt(r)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ea,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ts.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hs(e,"w")){const s=Ir(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+wt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wd("Unrecognized action received from server: "+wt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TB&&(this.reconnectDelay_=ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IB)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ts.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?At("getToken() completed but was canceled"):(At("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new vB(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{en(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(CB)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&en(h),l())}}}interrupt(e){At("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){At("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cd(this.interruptReasons_)&&(this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ng(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new We(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){At("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xy&&(this.reconnectDelay_=Qy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){At("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+CT.replace(/\./g,"-")]=1,qf()?e["framework.cordova"]=1:qb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sc.getInstance().currentlyOnline();return cd(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
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
 */class Hu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Te(xr,e),i=new Te(xr,n);return this.compare(s,i)!==0}minPost(){return Te.MIN}}/**
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
 */let Il;class ZT extends Hu{static get __EMPTY_NODE(){return Il}static set __EMPTY_NODE(e){Il=e}compare(e,n){return eo(e.name,n.name)}isDefinedOn(e){throw Wr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Te.MIN}maxPost(){return new Te(xi,Il)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new Te(e,Il)}toString(){return".key"}}const mr=new ZT;/**
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
 */class Tl{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ft.RED,this.left=i!=null?i:Ht.EMPTY_NODE,this.right=r!=null?r:Ht.EMPTY_NODE}copy(e,n,s,i,r){return new ft(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class SB{copy(e,n,s,i,r){return this}insert(e,n,s){return new ft(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,n=Ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tl(this.root_,null,this.comparator_,!0,e)}}Ht.EMPTY_NODE=new SB;/**
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
 */function kB(t,e){return eo(t.name,e.name)}function ag(t,e){return eo(t,e)}/**
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
 */let Kd;function AB(t){Kd=t}const eC=function(t){return typeof t=="number"?"number:"+NT(t):"string:"+t},tC=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hs(e,".sv"),"Priority must be a string or number.")}else W(t===Kd||t.isEmpty(),"priority of unexpected type.");W(t===Kd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jy;class ht{constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tC(this.priorityNode_)}static set __childrenNodeConstructor(e){Jy=e}static get __childrenNodeConstructor(){return Jy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:Ie(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(W(s!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=NT(this.value_):e+=this.value_,this.lazyHash_=kT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ht.VALUE_TYPE_ORDER.indexOf(n),r=ht.VALUE_TYPE_ORDER.indexOf(s);return W(i>=0,"Unknown leaf type: "+n),W(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let nC,sC;function RB(t){nC=t}function NB(t){sC=t}class OB extends Hu{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?eo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(xi,new ht("[PRIORITY-POST]",sC))}makePost(e,n){const s=nC(e);return new Te(n,new ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const Dt=new OB;/**
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
 */const xB=Math.log(2);class DB{constructor(e){const n=r=>parseInt(Math.log(r)/xB,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kc=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ft(d,h.node,ft.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),m=i(f+1,c);return h=t[f],d=n?n(h):h,new ft(d,h.node,ft.BLACK,p,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,m){const y=h-p,w=h;h-=p;const E=i(y+1,w),C=t[y],D=n?n(C):C;f(new ft(D,C.node,m,null,E))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?d(y,ft.BLACK):(d(y,ft.BLACK),d(y,ft.RED))}return u},o=new DB(t.length),a=r(o);return new Ht(s||e,a)};/**
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
 */let Dh;const Ji={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Ji&&Dt,"ChildrenNode.ts has not been loaded"),Dh=Dh||new Zn({".priority":Ji},{".priority":Dt}),Dh}get(e){const n=Ir(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ht?n:null}hasIndex(e){return hs(this.indexSet_,e.toString())}addIndex(e,n){W(e!==mr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=kc(s,e.getCompare()):a=Ji;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Zn(u,c)}addToIndexes(e,n){const s=ec(this.indexes_,(i,r)=>{const o=Ir(this.indexSet_,r);if(W(o,"Missing index implementation for "+r),i===Ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Te.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),kc(a,o.getCompare())}else return Ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Te(e.name,a))),l.insert(e,e.node)}});return new Zn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ec(this.indexes_,i=>{if(i===Ji)return i;{const r=n.get(e.name);return r?i.remove(new Te(e.name,r)):i}});return new Zn(s,this.indexSet_)}}/**
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
 */let fo;class Ne{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&tC(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fo||(fo=new Ne(new Ht(ag),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new Ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fo:n}}getChild(e){const n=Ie(e);return n===null?this:this.getImmediateChild(n).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fo:this.priorityNode_;return new Ne(i,o,r)}}updateChild(e,n){const s=Ie(e);if(s===null)return n;{W(Ie(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Dt,(o,a)=>{n[o]=a.val(e),s++,r&&Ne.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+eC(this.getPriority().val())+":"),this.forEachChild(Dt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kT(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xa?-1:0}withIndex(e){if(e===mr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Dt),i=n.getIterator(Dt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mr?null:this.indexMap_.get(e.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PB extends Ne{constructor(){super(new Ht(ag),Ne.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ne.EMPTY_NODE}isEmpty(){return!1}}const Xa=new PB;Object.defineProperties(Te,{MIN:{value:new Te(xr,Ne.EMPTY_NODE)},MAX:{value:new Te(xi,Xa)}});ZT.__EMPTY_NODE=Ne.EMPTY_NODE;ht.__childrenNodeConstructor=Ne;AB(Xa);NB(Xa);/**
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
 */const LB=!0;function Rt(t,e=null){if(t===null)return Ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ht(n,Rt(e))}if(!(t instanceof Array)&&LB){const n=[];let s=!1;if(dn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Rt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Te(o,l)))}}),n.length===0)return Ne.EMPTY_NODE;const r=kc(n,kB,o=>o.name,ag);if(s){const o=kc(n,Dt.getCompare());return new Ne(r,Rt(e),new Zn({".priority":o},{".priority":Dt}))}else return new Ne(r,Rt(e),Zn.Default)}else{let n=Ne.EMPTY_NODE;return dn(t,(s,i)=>{if(hs(t,s)&&s.substring(0,1)!=="."){const r=Rt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Rt(e))}}RB(Rt);/**
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
 */class MB extends Hu{constructor(e){super(),this.indexPath_=e,W(!we(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?eo(e.name,n.name):r}makePost(e,n){const s=Rt(e),i=Ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new Te(n,i)}maxPost(){const e=Ne.EMPTY_NODE.updateChild(this.indexPath_,Xa);return new Te(xi,e)}toString(){return YT(this.indexPath_,0).join("/")}}/**
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
 */class FB extends Hu{compare(e,n){const s=e.node.compareTo(n.node);return s===0?eo(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,n){const s=Rt(e);return new Te(n,s)}toString(){return".value"}}const $B=new FB;/**
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
 */function UB(t){return{type:"value",snapshotNode:t}}function VB(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function BB(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jB(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xr}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new lg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function e_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Dt?n="$priority":t.index_===$B?n="$value":t.index_===mr?n="$key":(W(t.index_ instanceof MB,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=wt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=wt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+wt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=wt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+wt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function t_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Dt&&(e.i=t.index_.toString()),e}/**
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
 */class Ac extends qT{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ya("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ac.getListenId_(e,s),a={};this.listens_[o]=a;const l=e_(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ir(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ac.getListenId_(e,n);delete this.listens_[s]}get(e){const n=e_(e._queryParams),s=e._path.toString(),i=new ea;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ta(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class HB{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Rc(){return{value:null,children:new Map}}function iC(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ie(e);t.children.has(s)||t.children.set(s,Rc());const i=t.children.get(s);e=Be(e),iC(i,e,n)}}function Gd(t,e,n){t.value!==null?n(e,t.value):WB(t,(s,i)=>{const r=new We(e.toString()+"/"+s);Gd(i,r,n)})}function WB(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class zB{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const n_=10*1e3,qB=30*1e3,KB=5*60*1e3;class GB{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zB(e);const s=n_+(qB-n_)*Math.random();Fo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dn(e,(i,r)=>{r>0&&hs(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*KB))}}/**
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
 */var Ln;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ln||(Ln={}));function rC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function aC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Nc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ln.ACK_USER_WRITE,this.source=rC()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new We(e));return new Nc(De(),n,this.revert)}}else return W(Ie(this.path)===e,"operationForChild called for unrelated child."),new Nc(Be(this.path),this.affectedTree,this.revert)}}/**
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
 */class Di{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ln.OVERWRITE}operationForChild(e){return we(this.path)?new Di(this.source,De(),this.snap.getImmediateChild(e)):new Di(this.source,Be(this.path),this.snap)}}/**
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
 */class wa{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ln.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new We(e));return n.isEmpty()?null:n.value?new Di(this.source,De(),n.value):new wa(this.source,De(),n)}else return W(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wa(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class cg{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YB(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jB(o.childName,o.snapshotNode))}),po(t,i,"child_removed",e,s,n),po(t,i,"child_added",e,s,n),po(t,i,"child_moved",r,s,n),po(t,i,"child_changed",e,s,n),po(t,i,"value",e,s,n),i}function po(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>XB(t,a,l)),o.forEach(a=>{const l=QB(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function QB(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function XB(t,e,n){if(e.childName==null||n.childName==null)throw Wr("Should only compare child_ events.");const s=new Te(e.childName,e.snapshotNode),i=new Te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function lC(t,e){return{eventCache:t,serverCache:e}}function $o(t,e,n,s){return lC(new cg(e,n,s),t.serverCache)}function cC(t,e,n,s){return lC(t.eventCache,new cg(e,n,s))}function Yd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ph;const JB=()=>(Ph||(Ph=new Ht(FV)),Ph);class Ue{constructor(e,n=JB()){this.value=e,this.children=n}static fromObject(e){let n=new Ue(null);return dn(e,(s,i)=>{n=n.set(new We(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:De(),value:this.value};if(we(e))return null;{const s=Ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Be(e),n);return r!=null?{path:pt(new We(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=Ie(e),s=this.children.get(n);return s!==null?s.subtree(Be(e)):new Ue(null)}}set(e,n){if(we(e))return new Ue(n,this.children);{const s=Ie(e),r=(this.children.get(s)||new Ue(null)).set(Be(e),n),o=this.children.insert(s,r);return new Ue(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const n=Ie(e),s=this.children.get(n);if(s){const i=s.remove(Be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ue(null):new Ue(this.value,r)}else return this}}get(e){if(we(e))return this.value;{const n=Ie(e),s=this.children.get(n);return s?s.get(Be(e)):null}}setTree(e,n){if(we(e))return n;{const s=Ie(e),r=(this.children.get(s)||new Ue(null)).setTree(Be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ue(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,De(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(we(e))return null;{const r=Ie(e),o=this.children.get(r);return o?o.findOnPath_(Be(e),pt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,De(),n)}foreachOnPath_(e,n,s){if(we(e))return this;{this.value&&s(n,this.value);const i=Ie(e),r=this.children.get(i);return r?r.foreachOnPath_(Be(e),pt(n,i),s):new Ue(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Cn{constructor(e){this.writeTree_=e}static empty(){return new Cn(new Ue(null))}}function Uo(t,e,n){if(we(e))return new Cn(new Ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=an(i,e);return r=r.updateChild(o,n),new Cn(t.writeTree_.set(i,r))}else{const i=new Ue(n),r=t.writeTree_.setTree(e,i);return new Cn(r)}}}function s_(t,e,n){let s=t;return dn(n,(i,r)=>{s=Uo(s,pt(e,i),r)}),s}function i_(t,e){if(we(e))return Cn.empty();{const n=t.writeTree_.setTree(e,new Ue(null));return new Cn(n)}}function Qd(t,e){return Wi(t,e)!=null}function Wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(an(n.path,e)):null}function r_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Dt,(s,i)=>{e.push(new Te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Te(s,i.value))}),e}function Ds(t,e){if(we(e))return t;{const n=Wi(t,e);return n!=null?new Cn(new Ue(n)):new Cn(t.writeTree_.subtree(e))}}function Xd(t){return t.writeTree_.isEmpty()}function Dr(t,e){return uC(De(),t.writeTree_,e)}function uC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(W(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=uC(pt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pt(t,".priority"),s)),n}}/**
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
 */function hC(t,e){return mC(e,t)}function ZB(t,e,n,s,i){W(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Uo(t.visibleWrites,e,n)),t.lastWriteId=s}function ej(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function tj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&nj(a,s.path)?i=!1:bn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return sj(t),!0;if(s.snap)t.visibleWrites=i_(t.visibleWrites,s.path);else{const a=s.children;dn(a,l=>{t.visibleWrites=i_(t.visibleWrites,pt(s.path,l))})}return!0}else return!1}function nj(t,e){if(t.snap)return bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bn(pt(t.path,n),e))return!0;return!1}function sj(t){t.visibleWrites=dC(t.allWrites,ij,De()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ij(t){return t.visible}function dC(t,e,n){let s=Cn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)bn(n,o)?(a=an(n,o),s=Uo(s,a,r.snap)):bn(o,n)&&(a=an(o,n),s=Uo(s,De(),r.snap.getChild(a)));else if(r.children){if(bn(n,o))a=an(n,o),s=s_(s,a,r.children);else if(bn(o,n))if(a=an(o,n),we(a))s=s_(s,De(),r.children);else{const l=Ir(r.children,Ie(a));if(l){const c=l.getChild(Be(a));s=Uo(s,De(),c)}}}else throw Wr("WriteRecord should have .snap or .children")}}return s}function fC(t,e,n,s,i){if(!s&&!i){const r=Wi(t.visibleWrites,e);if(r!=null)return r;{const o=Ds(t.visibleWrites,e);if(Xd(o))return n;if(n==null&&!Qd(o,De()))return null;{const a=n||Ne.EMPTY_NODE;return Dr(o,a)}}}else{const r=Ds(t.visibleWrites,e);if(!i&&Xd(r))return n;if(!i&&n==null&&!Qd(r,De()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(bn(c.path,e)||bn(e,c.path))},a=dC(t.allWrites,o,e),l=n||Ne.EMPTY_NODE;return Dr(a,l)}}}function rj(t,e,n){let s=Ne.EMPTY_NODE;const i=Wi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Dt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ds(t.visibleWrites,e);return n.forEachChild(Dt,(o,a)=>{const l=Dr(Ds(r,new We(o)),a);s=s.updateImmediateChild(o,l)}),r_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ds(t.visibleWrites,e);return r_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function oj(t,e,n,s,i){W(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pt(e,n);if(Qd(t.visibleWrites,r))return null;{const o=Ds(t.visibleWrites,r);return Xd(o)?i.getChild(n):Dr(o,i.getChild(n))}}function aj(t,e,n,s){const i=pt(e,n),r=Wi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ds(t.visibleWrites,i);return Dr(o,s.getNode().getImmediateChild(n))}else return null}function lj(t,e){return Wi(t.visibleWrites,e)}function cj(t,e,n,s,i,r,o){let a;const l=Ds(t.visibleWrites,e),c=Wi(l,De());if(c!=null)a=c;else if(n!=null)a=Dr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function uj(){return{visibleWrites:Cn.empty(),allWrites:[],lastWriteId:-1}}function Jd(t,e,n,s){return fC(t.writeTree,t.treePath,e,n,s)}function pC(t,e){return rj(t.writeTree,t.treePath,e)}function o_(t,e,n,s){return oj(t.writeTree,t.treePath,e,n,s)}function Oc(t,e){return lj(t.writeTree,pt(t.treePath,e))}function hj(t,e,n,s,i,r){return cj(t.writeTree,t.treePath,e,n,s,i,r)}function ug(t,e,n){return aj(t.writeTree,t.treePath,e,n)}function gC(t,e){return mC(pt(t.treePath,e),t.writeTree)}function mC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class dj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Zy(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,BB(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,VB(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zy(s,e.snapshotNode,i.oldSnap));else throw Wr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class fj{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const vC=new fj;class hg{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new cg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ug(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pi(this.viewCache_),r=hj(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function pj(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gj(t,e,n,s,i){const r=new dj;let o,a;if(n.type===Ln.OVERWRITE){const c=n;c.source.fromUser?o=Zd(t,e,c.path,c.snap,s,i,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!we(c.path),o=xc(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ln.MERGE){const c=n;c.source.fromUser?o=vj(t,e,c.path,c.children,s,i,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ef(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ln.ACK_USER_WRITE){const c=n;c.revert?o=wj(t,e,c.path,s,i,r):o=yj(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ln.LISTEN_COMPLETE)o=_j(t,e,n.path,s,r);else throw Wr("Unknown operation type: "+n.type);const l=r.getChanges();return mj(e,o,l),{viewCache:o,changes:l}}function mj(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Yd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(UB(Yd(e)))}}function yC(t,e,n,s,i,r){const o=e.eventCache;if(Oc(s,n)!=null)return e;{let a,l;if(we(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pi(e),u=c instanceof Ne?c:Ne.EMPTY_NODE,h=pC(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Jd(s,Pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Ie(n);if(c===".priority"){W(Vs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=o_(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Be(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=o_(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ug(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return $o(e,a,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function xc(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(we(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Ie(n);if(!l.isCompleteForPath(n)&&Vs(n)>1)return e;const p=Be(n),y=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,p,vC,null)}const h=cC(e,c,l.isFullyInitialized()||we(n),u.filtersNodes()),d=new hg(i,h,r);return yC(t,h,n,i,d,a)}function Zd(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new hg(i,e,r);if(we(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$o(e,c,!0,t.filter.filtersNodes());else{const h=Ie(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=$o(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Be(n),f=a.getNode().getImmediateChild(h);let p;if(we(d))p=s;else{const m=u.getCompleteChild(h);m!=null?GT(d)===".priority"&&m.getChild(QT(d)).isEmpty()?p=m:p=m.updateChild(d,s):p=Ne.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=$o(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function a_(t,e){return t.eventCache.isCompleteForChild(e)}function vj(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=pt(n,l);a_(e,Ie(u))&&(a=Zd(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=pt(n,l);a_(e,Ie(u))||(a=Zd(t,a,u,c,i,r,o))}),a}function l_(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ef(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;we(n)?c=s:c=new Ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=l_(t,f,d);l=xc(t,l,new We(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=l_(t,p,d);l=xc(t,l,new We(h),m,i,r,o,a)}}),l}function yj(t,e,n,s,i,r,o){if(Oc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(we(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xc(t,e,n,l.getNode().getChild(n),i,r,a,o);if(we(n)){let c=new Ue(null);return l.getNode().forEachChild(mr,(u,h)=>{c=c.set(new We(u),h)}),ef(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ue(null);return s.foreach((u,h)=>{const d=pt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ef(t,e,n,c,i,r,a,o)}}function _j(t,e,n,s,i){const r=e.serverCache,o=cC(e,r.getNode(),r.isFullyInitialized()||we(n),r.isFiltered());return yC(t,o,n,s,vC,i)}function wj(t,e,n,s,i,r){let o;if(Oc(s,n)!=null)return e;{const a=new hg(s,e,i),l=e.eventCache.getNode();let c;if(we(n)||Ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Jd(s,Pi(e));else{const h=e.serverCache.getNode();W(h instanceof Ne,"serverChildren would be complete if leaf node"),u=pC(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Ie(n);let h=ug(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Be(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ne.EMPTY_NODE,Be(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jd(s,Pi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Oc(s,De())!=null,$o(e,c,o,t.filter.filtersNodes())}}function bj(t,e){const n=Pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(Ie(e)).isEmpty())?n.getChild(e):null}function c_(t,e,n,s){e.type===Ln.MERGE&&e.source.queryId!==null&&(W(Pi(t.viewCache_),"We should always have a full cache before handling merges"),W(Yd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=gj(t.processor_,i,e,n,s);return pj(t.processor_,r.viewCache),W(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ej(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ej(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return YB(t.eventGenerator_,e,n,i)}/**
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
 */let u_;function Ij(t){W(!u_,"__referenceConstructor has already been defined"),u_=t}function dg(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return W(r!=null,"SyncTree gave us an op for an invalid query."),c_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(c_(o,e,n,s));return r}}function fg(t,e){let n=null;for(const s of t.views.values())n=n||bj(s,e);return n}/**
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
 */let h_;function Tj(t){W(!h_,"__referenceConstructor has already been defined"),h_=t}class d_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=uj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cj(t,e,n,s,i){return ZB(t.pendingWriteTree_,e,n,s,i),i?zu(t,new Di(rC(),e,n)):[]}function ir(t,e,n=!1){const s=ej(t.pendingWriteTree_,e);if(tj(t.pendingWriteTree_,e)){let r=new Ue(null);return s.snap!=null?r=r.set(De(),!0):dn(s.children,o=>{r=r.set(new We(o),!0)}),zu(t,new Nc(s.path,r,n))}else return[]}function Wu(t,e,n){return zu(t,new Di(oC(),e,n))}function Sj(t,e,n){const s=Ue.fromObject(n);return zu(t,new wa(oC(),e,s))}function kj(t,e,n,s){const i=EC(t,s);if(i!=null){const r=IC(i),o=r.path,a=r.queryId,l=an(o,e),c=new Di(aC(a),l,n);return TC(t,o,c)}else return[]}function Aj(t,e,n,s){const i=EC(t,s);if(i){const r=IC(i),o=r.path,a=r.queryId,l=an(o,e),c=Ue.fromObject(n),u=new wa(aC(a),l,c);return TC(t,o,u)}else return[]}function _C(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=an(o,e),c=fg(a,l);if(c)return c});return fC(i,e,r,n,!0)}function zu(t,e){return wC(e,t.syncPointTree_,null,hC(t.pendingWriteTree_,De()))}function wC(t,e,n,s){if(we(t.path))return bC(t,e,n,s);{const i=e.get(De());n==null&&i!=null&&(n=fg(i,De()));let r=[];const o=Ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=gC(s,o);r=r.concat(wC(a,l,c,u))}return i&&(r=r.concat(dg(i,t,s,n))),r}}function bC(t,e,n,s){const i=e.get(De());n==null&&i!=null&&(n=fg(i,De()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=gC(s,o),u=t.operationForChild(o);u&&(r=r.concat(bC(u,a,l,c)))}),i&&(r=r.concat(dg(i,t,s,n))),r}function EC(t,e){return t.tagToQueryMap.get(e)}function IC(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function TC(t,e,n){const s=t.syncPointTree_.get(e);W(s,"Missing sync point for query tag that we're tracking");const i=hC(t.pendingWriteTree_,e);return dg(s,n,i,null)}/**
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
 */class pg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pg(n)}node(){return this.node_}}class gg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pt(this.path_,e);return new gg(this.syncTree_,n)}node(){return _C(this.syncTree_,this.path_)}}const Rj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},f_=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Oj(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},Oj=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&W(!1,"Unexpected increment value: "+s);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},xj=function(t,e,n,s){return mg(e,new gg(n,t),s)},Dj=function(t,e,n){return mg(t,new pg(e),n)};function mg(t,e,n){const s=t.getPriority().val(),i=f_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=f_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ht(a,Rt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ht(i))),o.forEachChild(Dt,(a,l)=>{const c=mg(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class vg{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yg(t,e){let n=e instanceof We?e:new We(e),s=t,i=Ie(n);for(;i!==null;){const r=Ir(s.node.children,i)||{children:{},childCount:0};s=new vg(i,s,r),n=Be(n),i=Ie(n)}return s}function to(t){return t.node.value}function CC(t,e){t.node.value=e,tf(t)}function SC(t){return t.node.childCount>0}function Pj(t){return to(t)===void 0&&!SC(t)}function qu(t,e){dn(t.node.children,(n,s)=>{e(new vg(n,t,s))})}function kC(t,e,n,s){n&&!s&&e(t),qu(t,i=>{kC(i,e,!0,s)}),n&&s&&e(t)}function Lj(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ja(t){return new We(t.parent===null?t.name:Ja(t.parent)+"/"+t.name)}function tf(t){t.parent!==null&&Mj(t.parent,t.name,t)}function Mj(t,e,n){const s=Pj(n),i=hs(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,tf(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tf(t))}/**
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
 */const Fj=/[\[\].#$\/\u0000-\u001F\u007F]/,$j=/[\[\].#$\u0000-\u001F\u007F]/,Lh=10*1024*1024,AC=function(t){return typeof t=="string"&&t.length!==0&&!Fj.test(t)},Uj=function(t){return typeof t=="string"&&t.length!==0&&!$j.test(t)},Vj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Uj(t)},RC=function(t,e,n){const s=n instanceof We?new _B(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+si(s));if(typeof e=="function")throw new Error(t+"contains a function "+si(s)+" with contents = "+e.toString());if(AT(e))throw new Error(t+"contains "+e.toString()+" "+si(s));if(typeof e=="string"&&e.length>Lh/3&&ou(e)>Lh)throw new Error(t+"contains a string greater than "+Lh+" utf8 bytes "+si(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(dn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!AC(o)))throw new Error(t+" contains an invalid key ("+o+") "+si(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wB(s,o),RC(t,a,s),bB(s)}),i&&r)throw new Error(t+' contains ".value" child '+si(s)+" in addition to actual children.")}},Bj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!AC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vj(n))throw new Error(IO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class jj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hj(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!XT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function zi(t,e,n){Hj(t,n),Wj(t,s=>bn(s,e)||bn(e,s))}function Wj(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(zj(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ei&&At("event: "+n.toString()),Qa(s)}}}/**
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
 */const qj="repo_interrupt",Kj=25;class Gj{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rc(),this.transactionQueueTree_=new vg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Yj(t,e,n){if(t.stats_=ig(t.repoInfo_),t.forceRestClient_||HV())t.server_=new Ac(t.repoInfo_,(s,i,r,o)=>{p_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>g_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ts(t.repoInfo_,e,(s,i,r,o)=>{p_(t,s,i,r,o)},s=>{g_(t,s)},s=>{Xj(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=YV(t.repoInfo_,()=>new GB(t.stats_,t.server_)),t.infoData_=new HB,t.infoSyncTree_=new d_({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Wu(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_g(t,"connected",!1),t.serverSyncTree_=new d_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);zi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Qj(t){const n=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function NC(t){return Rj({timestamp:Qj(t)})}function p_(t,e,n,s,i){t.dataUpdateCount++;const r=new We(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ec(n,c=>Rt(c));o=Aj(t.serverSyncTree_,r,l,i)}else{const l=Rt(n);o=kj(t.serverSyncTree_,r,l,i)}else if(s){const l=ec(n,c=>Rt(c));o=Sj(t.serverSyncTree_,r,l)}else{const l=Rt(n);o=Wu(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=bg(t,r)),zi(t.eventQueue_,a,o)}function g_(t,e){_g(t,"connected",e),e===!1&&Zj(t)}function Xj(t,e){dn(e,(n,s)=>{_g(t,n,s)})}function _g(t,e,n){const s=new We("/.info/"+e),i=Rt(n);t.infoData_.updateSnapshot(s,i);const r=Wu(t.infoSyncTree_,s,i);zi(t.eventQueue_,s,r)}function Jj(t){return t.nextWriteId_++}function Zj(t){OC(t,"onDisconnectEvents");const e=NC(t),n=Rc();Gd(t.onDisconnect_,De(),(i,r)=>{const o=xj(i,r,t.serverSyncTree_,e);iC(n,i,o)});let s=[];Gd(n,De(),(i,r)=>{s=s.concat(Wu(t.serverSyncTree_,i,r));const o=sH(t,i);bg(t,o)}),t.onDisconnect_=Rc(),zi(t.eventQueue_,De(),s)}function eH(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qj)}function OC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),At(n,...e)}function xC(t,e,n){return _C(t.serverSyncTree_,e,n)||Ne.EMPTY_NODE}function wg(t,e=t.transactionQueueTree_){if(e||Ku(t,e),to(e)){const n=PC(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tH(t,Ja(e),n)}else SC(e)&&qu(e,n=>{wg(t,n)})}function tH(t,e,n){const s=n.map(c=>c.currentWriteId),i=xC(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];W(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=an(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{OC(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ir(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ku(t,yg(t.transactionQueueTree_,e)),wg(t,t.transactionQueueTree_),zi(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Qa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{en("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}bg(t,e)}},o)}function bg(t,e){const n=DC(t,e),s=Ja(n),i=PC(t,n);return nH(t,i,s),s}function nH(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=an(n,l.path);let u=!1,h;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ir(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Kj)u=!0,h="maxretry",i=i.concat(ir(t.serverSyncTree_,l.currentWriteId,!0));else{const d=xC(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){RC("transaction failed: Data returned ",f,l.path);let p=Rt(f);typeof f=="object"&&f!=null&&hs(f,".priority")||(p=p.updatePriority(d.getPriority()));const y=l.currentWriteId,w=NC(t),E=Dj(p,d,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=E,l.currentWriteId=Jj(t),o.splice(o.indexOf(y),1),i=i.concat(Cj(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(ir(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(ir(t.serverSyncTree_,l.currentWriteId,!0))}zi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ku(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Qa(s[a]);wg(t,t.transactionQueueTree_)}function DC(t,e){let n,s=t.transactionQueueTree_;for(n=Ie(e);n!==null&&to(s)===void 0;)s=yg(s,n),e=Be(e),n=Ie(e);return s}function PC(t,e){const n=[];return LC(t,e,n),n.sort((s,i)=>s.order-i.order),n}function LC(t,e,n){const s=to(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);qu(e,i=>{LC(t,i,n)})}function Ku(t,e){const n=to(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,CC(e,n.length>0?n:void 0)}qu(e,s=>{Ku(t,s)})}function sH(t,e){const n=Ja(DC(t,e)),s=yg(t.transactionQueueTree_,e);return Lj(s,i=>{Mh(t,i)}),Mh(t,s),kC(s,i=>{Mh(t,i)}),n}function Mh(t,e){const n=to(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ir(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?CC(e,void 0):n.length=r+1,zi(t.eventQueue_,Ja(e),i);for(let o=0;o<s.length;o++)Qa(s[o])}}/**
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
 */function iH(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rH(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):en(`Invalid query segment '${n}' in query '${t}'`)}return e}const m_=function(t,e){const n=oH(t),s=n.namespace;n.domain==="firebase.com"&&Oi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Oi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qV(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new We(n.pathString)}},oH=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=iH(t.substring(u,h)));const d=rH(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Eg{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return we(this._path)?null:GT(this._path)}get ref(){return new no(this._repo,this._path)}get _queryIdentifier(){const e=t_(this._queryParams),n=ng(e);return n==="{}"?"default":n}get _queryObject(){return t_(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Eg))return!1;const n=this._repo===e._repo,s=XT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yB(this._path)}}class no extends Eg{constructor(e,n){super(e,n,new lg,!1)}get parent(){const e=QT(this._path);return e===null?null:new no(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Ij(no);Tj(no);/**
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
 */const aH="FIREBASE_DATABASE_EMULATOR_HOST",nf={};let lH=!1;function cH(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Oi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),At("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=m_(r,i),a=o.repoInfo,l,c;typeof process<"u"&&{}&&(c={}[aH]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=m_(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new zd(zd.OWNER):new zV(t.name,t.options,e);Bj("Invalid Firebase Database URL",o),we(o.path)||Oi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=hH(a,t,u,new WV(t.name,n));return new dH(h,t)}function uH(t,e){const n=nf[e];(!n||n[t.key]!==t)&&Oi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eH(t),delete n[t.key]}function hH(t,e,n,s){let i=nf[e.name];i||(i={},nf[e.name]=i);let r=i[t.toURLString()];return r&&Oi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gj(t,lH,n,s),i[t.toURLString()]=r,r}class dH{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Yj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new no(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uH(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Oi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function fH(t){NV(Vi),Kt(new Vt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cH(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bt(Fy,$y,t),bt(Fy,$y,"esm2017")}ts.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ts.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fH();/**
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
 */const MC="firebasestorage.googleapis.com",pH="storageBucket",gH=2*60*1e3,mH=10*60*1e3;/**
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
 */class qn extends pn{constructor(e,n,s=0){super(Fh(e),`Firebase Storage: ${n} (${Fh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Wn||(Wn={}));function Fh(t){return"storage/"+t}function vH(){const t="An unknown error occurred, please check the error payload for server response.";return new qn(Wn.UNKNOWN,t)}function yH(){return new qn(Wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _H(){return new qn(Wn.CANCELED,"User canceled the upload/download.")}function wH(t){return new qn(Wn.INVALID_URL,"Invalid URL '"+t+"'.")}function bH(t){return new qn(Wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function v_(t){return new qn(Wn.INVALID_ARGUMENT,t)}function FC(){return new qn(Wn.APP_DELETED,"The Firebase app was deleted.")}function EH(t){return new qn(Wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class En{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=En.makeFromUrl(e,n)}catch{return new En(e,"")}if(s.path==="")return s;throw bH(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=n===MC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${m}/${i}/${y}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<C.length;D++){const N=C[D],A=N.regex.exec(e);if(A){const O=A[N.indices.bucket];let _=A[N.indices.path];_||(_=""),s=new En(O,_),N.postModify(s);break}}if(s==null)throw wH(e);return s}}class IH{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function TH(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...w){if(c){d();return}if(y){d(),u.call(null,y,...w);return}if(l()||o){d(),u.call(null,y,...w);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let p=!1;function m(y){p||(p=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function CH(t){t(!1)}/**
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
 */function SH(t){return t!==void 0}function y_(t,e,n,s){if(s<e)throw v_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw v_(`Invalid value for '${t}'. Expected ${n} or less.`)}function kH(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Dc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dc||(Dc={}));/**
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
 */function AH(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class RH{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Cl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Dc.NO_ERROR,l=r.getStatus();if(!a||AH(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Dc.ABORT;s(!1,new Cl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Cl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());SH(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=vH();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?FC():_H();o(l)}else{const l=yH();o(l)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=TH(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CH(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function NH(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OH(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function xH(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DH(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PH(t,e,n,s,i,r,o=!0){const a=kH(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return xH(c,e),NH(c,n),OH(c,r),DH(c,s),new RH(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function LH(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MH(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Pc{constructor(e,n){this._service=e,n instanceof En?this._location=n:this._location=En.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pc(e,n)}get root(){const e=new En(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MH(this._location.path)}get storage(){return this._service}get parent(){const e=LH(this._location.path);if(e===null)return null;const n=new En(this._location.bucket,e);return new Pc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw EH(e)}}function __(t,e){const n=e==null?void 0:e[pH];return n==null?null:En.makeFromBucketSpec(n,t)}class FH{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=MC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gH,this._maxUploadRetryTime=mH,this._requests=new Set,i!=null?this._bucket=En.makeFromBucketSpec(i,this._host):this._bucket=__(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,e):this._bucket=__(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pc(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new IH(FC());{const o=PH(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const w_="@firebase/storage",b_="0.11.2";/**
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
 */const $H="storage";function UH(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new FH(n,s,i,e,Vi)}function VH(){Kt(new Vt($H,UH,"PUBLIC").setMultipleInstances(!0)),bt(w_,b_,""),bt(w_,b_,"esm2017")}VH();function NW(t){return $I(ju(t))}function BH(t){return(e,n)=>{const s=kV(e,n).run(()=>J(t));TT.set(e,s),RV(s,e)}}function OW(t){return SV?rp(ju(t)):null}function jH(t,{firebaseApp:e,modules:n=[]}){t.provide(IT,e);for(const s of n)t.use(s.bind(null,e))}const Ig=pA(mA);Ig.use(jH,{firebaseApp:Bu,modules:[BH()]});tV(Ig);Ig.mount("#app");export{aW as $,jr as A,Ws as B,nu as C,Er as D,Br as E,Sa as F,Uf as G,Hr as H,Ms as I,zs as J,gW as K,Ur as L,ul as M,J as N,XH as O,Ow as P,un as Q,Le as R,Ye as S,Hs as T,ba as U,Rs as V,Bs as W,JH as X,nn as Y,Uc as Z,uf as _,An as a,f1 as a$,Uw as a0,xw as a1,OA as a2,sW as a3,iW as a4,rW as a5,pm as a6,oW as a7,SA as a8,ZA as a9,Mn as aA,x1 as aB,q1 as aC,Kg as aD,o1 as aE,xf as aF,xb as aG,m1 as aH,jf as aI,Db as aJ,v1 as aK,lW as aL,Bf as aM,ub as aN,If as aO,RW as aP,YH as aQ,zH as aR,zN as aS,XN as aT,lb as aU,SW as aV,TW as aW,IW as aX,AW as aY,nv as aZ,Ob as a_,Mi as aa,Nt as ab,Wt as ac,ce as ad,Bc as ae,YN as af,Ii as ag,Xc as ah,y1 as ai,dW as aj,KH as ak,GH as al,Cf as am,_t as an,ZH as ao,Ia as ap,js as aq,vn as ar,es as as,nt as at,lr as au,WC as av,E1 as aw,Fr as ax,Je as ay,ur as az,I as b,Lb as b0,p1 as b1,Pb as b2,pb as b3,hW as b4,R_ as b5,Pe as b6,kW as b7,rp as b8,FR as b9,yW as bA,ow as bB,HH as bC,WH as bD,vW as bE,wW as bF,yD as ba,OW as bb,_W as bc,cr as bd,rw as be,qH as bf,QH as bg,Nw as bh,eW as bi,CA as bj,kn as bk,NW as bl,nA as bm,CW as bn,$i as bo,dm as bp,uW as bq,tW as br,cW as bs,GN as bt,Ls as bu,nW as bv,EW as bw,Es as bx,JU as by,bW as bz,b as c,ve as d,ut as e,Ta as f,Ke as g,mW as h,Me as i,fn as j,R1 as k,I1 as l,Fi as m,tu as n,HN as o,zn as p,fW as q,D1 as r,pW as s,it as t,Ql as u,hA as v,Hl as w,Vr as x,Ca as y,$f as z};
