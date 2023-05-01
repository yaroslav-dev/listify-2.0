(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Kd(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Gd(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Qe(s)?vC(s):Gd(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Qe(t))return t;if(He(t))return t}}const pC=/;(?![^(]*\))/g,gC=/:([^]+)/,mC=/\/\*.*?\*\//gs;function vC(t){const e={};return t.replace(mC,"").split(pC).forEach(n=>{if(n){const s=n.split(gC);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yd(t){let e="";if(Qe(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const s=Yd(t[n]);s&&(e+=s+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_C=Kd(yC);function g_(t){return!!t||t===""}const wC=t=>Qe(t)?t:t==null?"":se(t)||He(t)&&(t.toString===__||!ue(t.toString))?JSON.stringify(t,m_,2):String(t),m_=(t,e)=>e&&e.__v_isRef?m_(t,e.value):nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:v_(e)?{[`Set(${e.size})`]:[...e.values()]}:He(e)&&!se(e)&&!w_(e)?String(e):e,Be={},tr=[],yn=()=>{},bC=()=>!1,EC=/^on[^a-z]/,_c=t=>EC.test(t),Qd=t=>t.startsWith("onUpdate:"),ft=Object.assign,Xd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},TC=Object.prototype.hasOwnProperty,Ie=(t,e)=>TC.call(t,e),se=Array.isArray,nr=t=>wc(t)==="[object Map]",v_=t=>wc(t)==="[object Set]",ue=t=>typeof t=="function",Qe=t=>typeof t=="string",Jd=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",y_=t=>He(t)&&ue(t.then)&&ue(t.catch),__=Object.prototype.toString,wc=t=>__.call(t),IC=t=>wc(t).slice(8,-1),w_=t=>wc(t)==="[object Object]",Zd=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dl=Kd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},CC=/-(\w)/g,on=bc(t=>t.replace(CC,(e,n)=>n?n.toUpperCase():"")),SC=/\B([A-Z])/g,Or=bc(t=>t.replace(SC,"-$1").toLowerCase()),xr=bc(t=>t.charAt(0).toUpperCase()+t.slice(1)),fl=bc(t=>t?`on${xr(t)}`:""),Po=(t,e)=>!Object.is(t,e),Ou=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Il=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},kC=t=>{const e=parseFloat(t);return isNaN(e)?t:e},AC=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let _g;const RC=()=>_g||(_g=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Gt;class b_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ec(t){return new b_(t)}function NC(t,e=Gt){e&&e.active&&e.effects.push(t)}function ef(){return Gt}function Tc(t){Gt&&Gt.cleanups.push(t)}const tf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},E_=t=>(t.w&Ps)>0,T_=t=>(t.n&Ps)>0,OC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ps},xC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];E_(i)&&!T_(i)?i.delete(t):e[n++]=i,i.w&=~Ps,i.n&=~Ps}e.length=n}},Cl=new WeakMap;let co=0,Ps=1;const Ih=30;let fn;const pi=Symbol(""),Ch=Symbol("");class nf{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,NC(this,s)}run(){if(!this.active)return this.fn();let e=fn,n=bs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,bs=!0,Ps=1<<++co,co<=Ih?OC(this):wg(this),this.fn()}finally{co<=Ih&&xC(this),Ps=1<<--co,fn=this.parent,bs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(wg(this),this.onStop&&this.onStop(),this.active=!1)}}function wg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bs=!0;const I_=[];function Pr(){I_.push(bs),bs=!1}function Dr(){const t=I_.pop();bs=t===void 0?!0:t}function zt(t,e,n){if(bs&&fn){let s=Cl.get(t);s||Cl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=tf()),C_(i)}}function C_(t,e){let n=!1;co<=Ih?T_(t)||(t.n|=Ps,n=!E_(t)):n=!t.has(fn),n&&(t.add(fn),fn.deps.push(t))}function Jn(t,e,n,s,i,r){const o=Cl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?Zd(n)&&a.push(o.get("length")):(a.push(o.get(pi)),nr(t)&&a.push(o.get(Ch)));break;case"delete":se(t)||(a.push(o.get(pi)),nr(t)&&a.push(o.get(Ch)));break;case"set":nr(t)&&a.push(o.get(pi));break}if(a.length===1)a[0]&&Sh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Sh(tf(l))}}function Sh(t,e){const n=se(t)?t:[...t];for(const s of n)s.computed&&bg(s);for(const s of n)s.computed||bg(s)}function bg(t,e){(t!==fn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function PC(t,e){var n;return(n=Cl.get(t))===null||n===void 0?void 0:n.get(e)}const DC=Kd("__proto__,__v_isRef,__isVue"),S_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jd)),LC=sf(),MC=sf(!1,!0),FC=sf(!0),Eg=$C();function $C(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let r=0,o=this.length;r<o;r++)zt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(le)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pr();const s=le(this)[e].apply(this,n);return Dr(),s}}),t}function UC(t){const e=le(this);return zt(e,"has",t),e.hasOwnProperty(t)}function sf(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?tS:O_:e?N_:R_).get(s))return s;const o=se(s);if(!t){if(o&&Ie(Eg,i))return Reflect.get(Eg,i,r);if(i==="hasOwnProperty")return UC}const a=Reflect.get(s,i,r);return(Jd(i)?S_.has(i):DC(i))||(t||zt(s,"get",i),e)?a:Pe(a)?o&&Zd(i)?a:a.value:He(a)?t?Cc(a):At(a):a}}const VC=k_(),BC=k_(!0);function k_(t=!1){return function(n,s,i,r){let o=n[s];if(pr(o)&&Pe(o)&&!Pe(i))return!1;if(!t&&(!Sl(i)&&!pr(i)&&(o=le(o),i=le(i)),!se(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=se(n)&&Zd(s)?Number(s)<n.length:Ie(n,s),l=Reflect.set(n,s,i,r);return n===le(r)&&(a?Po(i,o)&&Jn(n,"set",s,i):Jn(n,"add",s,i)),l}}function jC(t,e){const n=Ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Jn(t,"delete",e,void 0),s}function HC(t,e){const n=Reflect.has(t,e);return(!Jd(e)||!S_.has(e))&&zt(t,"has",e),n}function WC(t){return zt(t,"iterate",se(t)?"length":pi),Reflect.ownKeys(t)}const A_={get:LC,set:VC,deleteProperty:jC,has:HC,ownKeys:WC},zC={get:FC,set(t,e){return!0},deleteProperty(t,e){return!0}},qC=ft({},A_,{get:MC,set:BC}),rf=t=>t,Ic=t=>Reflect.getPrototypeOf(t);function Ua(t,e,n=!1,s=!1){t=t.__v_raw;const i=le(t),r=le(e);n||(e!==r&&zt(i,"get",e),zt(i,"get",r));const{has:o}=Ic(i),a=s?rf:n?lf:Do;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Va(t,e=!1){const n=this.__v_raw,s=le(n),i=le(t);return e||(t!==i&&zt(s,"has",t),zt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ba(t,e=!1){return t=t.__v_raw,!e&&zt(le(t),"iterate",pi),Reflect.get(t,"size",t)}function Tg(t){t=le(t);const e=le(this);return Ic(e).has.call(e,t)||(e.add(t),Jn(e,"add",t,t)),this}function Ig(t,e){e=le(e);const n=le(this),{has:s,get:i}=Ic(n);let r=s.call(n,t);r||(t=le(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Po(e,o)&&Jn(n,"set",t,e):Jn(n,"add",t,e),this}function Cg(t){const e=le(this),{has:n,get:s}=Ic(e);let i=n.call(e,t);i||(t=le(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Jn(e,"delete",t,void 0),r}function Sg(){const t=le(this),e=t.size!==0,n=t.clear();return e&&Jn(t,"clear",void 0,void 0),n}function ja(t,e){return function(s,i){const r=this,o=r.__v_raw,a=le(o),l=e?rf:t?lf:Do;return!t&&zt(a,"iterate",pi),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ha(t,e,n){return function(...s){const i=this.__v_raw,r=le(i),o=nr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?rf:e?lf:Do;return!e&&zt(r,"iterate",l?Ch:pi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ls(t){return function(...e){return t==="delete"?!1:this}}function KC(){const t={get(r){return Ua(this,r)},get size(){return Ba(this)},has:Va,add:Tg,set:Ig,delete:Cg,clear:Sg,forEach:ja(!1,!1)},e={get(r){return Ua(this,r,!1,!0)},get size(){return Ba(this)},has:Va,add:Tg,set:Ig,delete:Cg,clear:Sg,forEach:ja(!1,!0)},n={get(r){return Ua(this,r,!0)},get size(){return Ba(this,!0)},has(r){return Va.call(this,r,!0)},add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear"),forEach:ja(!0,!1)},s={get(r){return Ua(this,r,!0,!0)},get size(){return Ba(this,!0)},has(r){return Va.call(this,r,!0)},add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear"),forEach:ja(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ha(r,!1,!1),n[r]=Ha(r,!0,!1),e[r]=Ha(r,!1,!0),s[r]=Ha(r,!0,!0)}),[t,n,e,s]}const[GC,YC,QC,XC]=KC();function of(t,e){const n=e?t?XC:QC:t?YC:GC;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ie(n,i)&&i in s?n:s,i,r)}const JC={get:of(!1,!1)},ZC={get:of(!1,!0)},eS={get:of(!0,!1)},R_=new WeakMap,N_=new WeakMap,O_=new WeakMap,tS=new WeakMap;function nS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sS(t){return t.__v_skip||!Object.isExtensible(t)?0:nS(IC(t))}function At(t){return pr(t)?t:af(t,!1,A_,JC,R_)}function iS(t){return af(t,!1,qC,ZC,N_)}function Cc(t){return af(t,!0,zC,eS,O_)}function af(t,e,n,s,i){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=sS(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Es(t){return pr(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function Sl(t){return!!(t&&t.__v_isShallow)}function x_(t){return Es(t)||pr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function gr(t){return Il(t,"__v_skip",!0),t}const Do=t=>He(t)?At(t):t,lf=t=>He(t)?Cc(t):t;function P_(t){bs&&fn&&(t=le(t),C_(t.dep||(t.dep=tf())))}function D_(t,e){t=le(t);const n=t.dep;n&&Sh(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Y(t){return L_(t,!1)}function Sc(t){return L_(t,!0)}function L_(t,e){return Pe(t)?t:new rS(t,e)}class rS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Do(e)}get value(){return P_(this),this._value}set value(e){const n=this.__v_isShallow||Sl(e)||pr(e);e=n?e:le(e),Po(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Do(e),D_(this))}}function xe(t){return Pe(t)?t.value:t}const oS={get:(t,e,n)=>xe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function M_(t){return Es(t)?t:new Proxy(t,oS)}function kc(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=st(t,n);return e}class aS{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return PC(le(this._object),this._key)}}function st(t,e,n){const s=t[e];return Pe(s)?s:new aS(t,e,n)}var F_;class lS{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[F_]=!1,this._dirty=!0,this.effect=new nf(e,()=>{this._dirty||(this._dirty=!0,D_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=le(this);return P_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}F_="__v_isReadonly";function cS(t,e,n=!1){let s,i;const r=ue(t);return r?(s=t,i=yn):(s=t.get,i=t.set),new lS(s,i,r||!i,n)}function Ts(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ac(r,e,n)}return i}function rn(t,e,n,s){if(ue(t)){const r=Ts(t,e,n,s);return r&&y_(r)&&r.catch(o=>{Ac(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(rn(t[r],e,n,s));return i}function Ac(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ts(l,null,10,[t,o,a]);return}}uS(t,n,i,s)}function uS(t,e,n,s=!0){console.error(t)}let Lo=!1,kh=!1;const Rt=[];let An=0;const sr=[];let zn=null,ii=0;const $_=Promise.resolve();let cf=null;function Vs(t){const e=cf||$_;return t?e.then(this?t.bind(this):t):e}function hS(t){let e=An+1,n=Rt.length;for(;e<n;){const s=e+n>>>1;Mo(Rt[s])<t?e=s+1:n=s}return e}function uf(t){(!Rt.length||!Rt.includes(t,Lo&&t.allowRecurse?An+1:An))&&(t.id==null?Rt.push(t):Rt.splice(hS(t.id),0,t),U_())}function U_(){!Lo&&!kh&&(kh=!0,cf=$_.then(B_))}function dS(t){const e=Rt.indexOf(t);e>An&&Rt.splice(e,1)}function fS(t){se(t)?sr.push(...t):(!zn||!zn.includes(t,t.allowRecurse?ii+1:ii))&&sr.push(t),U_()}function kg(t,e=Lo?An+1:0){for(;e<Rt.length;e++){const n=Rt[e];n&&n.pre&&(Rt.splice(e,1),e--,n())}}function V_(t){if(sr.length){const e=[...new Set(sr)];if(sr.length=0,zn){zn.push(...e);return}for(zn=e,zn.sort((n,s)=>Mo(n)-Mo(s)),ii=0;ii<zn.length;ii++)zn[ii]();zn=null,ii=0}}const Mo=t=>t.id==null?1/0:t.id,pS=(t,e)=>{const n=Mo(t)-Mo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function B_(t){kh=!1,Lo=!0,Rt.sort(pS);const e=yn;try{for(An=0;An<Rt.length;An++){const n=Rt[An];n&&n.active!==!1&&Ts(n,null,14)}}finally{An=0,Rt.length=0,V_(),Lo=!1,cf=null,(Rt.length||sr.length)&&B_()}}function gS(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Be;d&&(i=n.map(f=>Qe(f)?f.trim():f)),h&&(i=n.map(kC))}let a,l=s[a=fl(e)]||s[a=fl(on(e))];!l&&r&&(l=s[a=fl(Or(e))]),l&&rn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rn(c,t,6,i)}}function j_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ue(t)){const l=c=>{const u=j_(c,e,!0);u&&(a=!0,ft(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(He(t)&&s.set(t,null),null):(se(r)?r.forEach(l=>o[l]=null):ft(o,r),He(t)&&s.set(t,o),o)}function Rc(t,e){return!t||!_c(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Or(e))||Ie(t,e))}let Qt=null,Nc=null;function kl(t){const e=Qt;return Qt=t,Nc=t&&t.type.__scopeId||null,e}function uH(t){Nc=t}function hH(){Nc=null}function tt(t,e=Qt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&$g(-1);const r=kl(e);let o;try{o=t(...i)}finally{kl(r),s._d&&$g(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xu(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:m}=t;let y,w;const E=kl(t);try{if(n.shapeFlag&4){const k=i||s;y=kn(u.call(k,k,h,r,f,d,p)),w=l}else{const k=e;y=kn(k.length>1?k(r,{attrs:l,slots:a,emit:c}):k(r,null)),w=e.props?l:mS(l)}}catch(k){yo.length=0,Ac(k,t,1),y=T(Qn)}let b=y;if(w&&m!==!1){const k=Object.keys(w),{shapeFlag:R}=b;k.length&&R&7&&(o&&k.some(Qd)&&(w=vS(w,o)),b=Ds(b,w))}return n.dirs&&(b=Ds(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,kl(E),y}const mS=t=>{let e;for(const n in t)(n==="class"||n==="style"||_c(n))&&((e||(e={}))[n]=t[n]);return e},vS=(t,e)=>{const n={};for(const s in t)(!Qd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function yS(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ag(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Rc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ag(s,o,c):!0:!!o;return!1}function Ag(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Rc(n,r))return!0}return!1}function _S({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const wS=t=>t.__isSuspense;function bS(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):fS(t)}function Ht(t,e){if(Je){let n=Je.provides;const s=Je.parent&&Je.parent.provides;s===n&&(n=Je.provides=Object.create(s)),n[t]=e}}function De(t,e,n=!1){const s=Je||Qt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(s.proxy):e}}function ha(t,e){return hf(t,null,e)}const Wa={};function Ke(t,e,n){return hf(t,e,n)}function hf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Be){const a=ef()===(Je==null?void 0:Je.scope)?Je:null;let l,c=!1,u=!1;if(Pe(t)?(l=()=>t.value,c=Sl(t)):Es(t)?(l=()=>t,s=!0):se(t)?(u=!0,c=t.some(b=>Es(b)||Sl(b)),l=()=>t.map(b=>{if(Pe(b))return b.value;if(Es(b))return ai(b);if(ue(b))return Ts(b,a,2)})):ue(t)?e?l=()=>Ts(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),rn(t,a,3,[d])}:l=yn,e&&s){const b=l;l=()=>ai(b())}let h,d=b=>{h=w.onStop=()=>{Ts(b,a,4)}},f;if(Vo)if(d=yn,e?n&&rn(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const b=ak();f=b.__watcherHandles||(b.__watcherHandles=[])}else return yn;let p=u?new Array(t.length).fill(Wa):Wa;const m=()=>{if(!!w.active)if(e){const b=w.run();(s||c||(u?b.some((k,R)=>Po(k,p[R])):Po(b,p)))&&(h&&h(),rn(e,a,3,[b,p===Wa?void 0:u&&p[0]===Wa?[]:p,d]),p=b)}else w.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>Vt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>uf(m));const w=new nf(l,y);e?n?m():p=w.run():i==="post"?Vt(w.run.bind(w),a&&a.suspense):w.run();const E=()=>{w.stop(),a&&a.scope&&Xd(a.scope.effects,w)};return f&&f.push(E),E}function ES(t,e,n){const s=this.proxy,i=Qe(t)?t.includes(".")?H_(s,t):()=>s[t]:t.bind(s,s);let r;ue(e)?r=e:(r=e.handler,n=e);const o=Je;mr(this);const a=hf(i,r.bind(s),n);return o?mr(o):gi(),a}function H_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ai(t,e){if(!He(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))ai(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)ai(t[n],e);else if(v_(t)||nr(t))t.forEach(n=>{ai(n,e)});else if(w_(t))for(const n in t)ai(t[n],e);return t}function W_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xi(()=>{t.isMounted=!0}),En(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],TS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},setup(t,{slots:e}){const n=js(),s=W_();let i;return()=>{const r=e.default&&df(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Qn){o=m;break}}const a=le(t),{mode:l}=a;if(s.isLeaving)return Pu(o);const c=Rg(o);if(!c)return Pu(o);const u=Fo(c,a,s,n);$o(c,u);const h=n.subTree,d=h&&Rg(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,f=!0)}if(d&&d.type!==Qn&&(!ri(c,d)||f)){const m=Fo(d,a,s,n);if($o(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Pu(o);l==="in-out"&&c.type!==Qn&&(m.delayLeave=(y,w,E)=>{const b=q_(s,d);b[String(d.key)]=d,y._leaveCb=()=>{w(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},z_=TS;function q_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Fo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:w,onAppearCancelled:E}=e,b=String(t.key),k=q_(n,t),R=(_,D)=>{_&&rn(_,s,9,D)},N=(_,D)=>{const F=D[1];R(_,D),se(_)?_.every(q=>q.length<=1)&&F():_.length<=1&&F()},O={mode:r,persisted:o,beforeEnter(_){let D=a;if(!n.isMounted)if(i)D=m||a;else return;_._leaveCb&&_._leaveCb(!0);const F=k[b];F&&ri(t,F)&&F.el._leaveCb&&F.el._leaveCb(),R(D,[_])},enter(_){let D=l,F=c,q=u;if(!n.isMounted)if(i)D=y||l,F=w||c,q=E||u;else return;let U=!1;const ce=_._enterCb=fe=>{U||(U=!0,fe?R(q,[_]):R(F,[_]),O.delayedLeave&&O.delayedLeave(),_._enterCb=void 0)};D?N(D,[_,ce]):ce()},leave(_,D){const F=String(t.key);if(_._enterCb&&_._enterCb(!0),n.isUnmounting)return D();R(h,[_]);let q=!1;const U=_._leaveCb=ce=>{q||(q=!0,D(),ce?R(p,[_]):R(f,[_]),_._leaveCb=void 0,k[F]===t&&delete k[F])};k[F]=t,d?N(d,[_,U]):U()},clone(_){return Fo(_,e,n,s)}};return O}function Pu(t){if(Oc(t))return t=Ds(t),t.children=null,t}function Rg(t){return Oc(t)?t.children?t.children[0]:void 0:t}function $o(t,e){t.shapeFlag&6&&t.component?$o(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function df(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===vt?(o.patchFlag&128&&i++,s=s.concat(df(o.children,e,a))):(e||o.type!==Qn)&&s.push(a!=null?Ds(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Bs(t){return ue(t)?{setup:t,name:t.name}:t}const pl=t=>!!t.type.__asyncLoader,Oc=t=>t.type.__isKeepAlive;function K_(t,e){Y_(t,"a",e)}function G_(t,e){Y_(t,"da",e)}function Y_(t,e,n=Je){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(xc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Oc(i.parent.vnode)&&IS(s,e,n,i),i=i.parent}}function IS(t,e,n,s){const i=xc(e,t,s,!0);X_(()=>{Xd(s[e],i)},n)}function xc(t,e,n=Je,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pr(),mr(n);const a=rn(e,n,t,o);return gi(),Dr(),a});return s?i.unshift(r):i.push(r),r}}const rs=t=>(e,n=Je)=>(!Vo||t==="sp")&&xc(t,(...s)=>e(...s),n),ff=rs("bm"),xi=rs("m"),CS=rs("bu"),Q_=rs("u"),En=rs("bum"),X_=rs("um"),J_=rs("sp"),SS=rs("rtg"),kS=rs("rtc");function AS(t,e=Je){xc("ec",t,e)}function Al(t,e){const n=Qt;if(n===null)return t;const s=Dc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Be]=e[r];o&&(ue(o)&&(o={mounted:o,updated:o}),o.deep&&ai(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ys(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Pr(),rn(l,n,8,[t.el,a,t,e]),Dr())}}const pf="components",RS="directives";function Z_(t,e){return mf(pf,t,!0,e)||t}const ew=Symbol();function tw(t){return Qe(t)?mf(pf,t,!1)||t:t||ew}function gf(t){return mf(RS,t)}function mf(t,e,n=!0,s=!1){const i=Qt||Je;if(i){const r=i.type;if(t===pf){const a=rk(r,!1);if(a&&(a===e||a===on(e)||a===xr(on(e))))return r}const o=Ng(i[t]||r[t],e)||Ng(i.appContext[t],e);return!o&&s?r:o}}function Ng(t,e){return t&&(t[e]||t[on(e)]||t[xr(on(e))])}function dH(t,e,n,s){let i;const r=n&&n[s];if(se(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(He(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function fH(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(se(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function pH(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:fl(s)]=t[s];return n}const Ah=t=>t?dw(t)?Dc(t)||t.proxy:Ah(t.parent):null,mo=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ah(t.parent),$root:t=>Ah(t.root),$emit:t=>t.emit,$options:t=>vf(t),$forceUpdate:t=>t.f||(t.f=()=>uf(t.update)),$nextTick:t=>t.n||(t.n=Vs.bind(t.proxy)),$watch:t=>ES.bind(t)}),Du=(t,e)=>t!==Be&&!t.__isScriptSetup&&Ie(t,e),NS={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Du(s,e))return o[e]=1,s[e];if(i!==Be&&Ie(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ie(c,e))return o[e]=3,r[e];if(n!==Be&&Ie(n,e))return o[e]=4,n[e];Rh&&(o[e]=0)}}const u=mo[e];let h,d;if(u)return e==="$attrs"&&zt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Be&&Ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ie(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Du(i,e)?(i[e]=n,!0):s!==Be&&Ie(s,e)?(s[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Be&&Ie(t,o)||Du(e,o)||(a=r[0])&&Ie(a,o)||Ie(s,o)||Ie(mo,o)||Ie(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Rh=!0;function OS(t){const e=vf(t),n=t.proxy,s=t.ctx;Rh=!1,e.beforeCreate&&Og(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:y,beforeDestroy:w,beforeUnmount:E,destroyed:b,unmounted:k,render:R,renderTracked:N,renderTriggered:O,errorCaptured:_,serverPrefetch:D,expose:F,inheritAttrs:q,components:U,directives:ce,filters:fe}=e;if(c&&xS(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const de=o[Q];ue(de)&&(s[Q]=de.bind(n))}if(i){const Q=i.call(n,n);He(Q)&&(t.data=At(Q))}if(Rh=!0,r)for(const Q in r){const de=r[Q],Ae=ue(de)?de.bind(n,n):ue(de.get)?de.get.bind(n,n):yn,Ut=!ue(de)&&ue(de.set)?de.set.bind(n):yn,it=I({get:Ae,set:Ut});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ue=>it.value=Ue})}if(a)for(const Q in a)nw(a[Q],s,n,Q);if(l){const Q=ue(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(de=>{Ht(de,Q[de])})}u&&Og(u,t,"c");function _e(Q,de){se(de)?de.forEach(Ae=>Q(Ae.bind(n))):de&&Q(de.bind(n))}if(_e(ff,h),_e(xi,d),_e(CS,f),_e(Q_,p),_e(K_,m),_e(G_,y),_e(AS,_),_e(kS,N),_e(SS,O),_e(En,E),_e(X_,k),_e(J_,D),se(F))if(F.length){const Q=t.exposed||(t.exposed={});F.forEach(de=>{Object.defineProperty(Q,de,{get:()=>n[de],set:Ae=>n[de]=Ae})})}else t.exposed||(t.exposed={});R&&t.render===yn&&(t.render=R),q!=null&&(t.inheritAttrs=q),U&&(t.components=U),ce&&(t.directives=ce)}function xS(t,e,n=yn,s=!1){se(t)&&(t=Nh(t));for(const i in t){const r=t[i];let o;He(r)?"default"in r?o=De(r.from||i,r.default,!0):o=De(r.from||i):o=De(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Og(t,e,n){rn(se(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nw(t,e,n,s){const i=s.includes(".")?H_(n,s):()=>n[s];if(Qe(t)){const r=e[t];ue(r)&&Ke(i,r)}else if(ue(t))Ke(i,t.bind(n));else if(He(t))if(se(t))t.forEach(r=>nw(r,e,n,s));else{const r=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(r)&&Ke(i,r,t)}}function vf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Rl(l,c,o,!0)),Rl(l,e,o)),He(e)&&r.set(e,l),l}function Rl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Rl(t,r,n,!0),i&&i.forEach(o=>Rl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=PS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const PS={data:xg,props:ei,emits:ei,methods:ei,computed:ei,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:ei,directives:ei,watch:LS,provide:xg,inject:DS};function xg(t,e){return e?t?function(){return ft(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function DS(t,e){return ei(Nh(t),Nh(e))}function Nh(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function ei(t,e){return t?ft(ft(Object.create(null),t),e):e}function LS(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const s in e)n[s]=Lt(t[s],e[s]);return n}function MS(t,e,n,s=!1){const i={},r={};Il(r,Pc,1),t.propsDefaults=Object.create(null),sw(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:iS(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function FS(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=le(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Rc(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ie(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=on(d);i[p]=Oh(l,a,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{sw(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Ie(e,h)&&((u=Or(h))===h||!Ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Oh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Ie(e,h)&&!0)&&(delete r[h],c=!0)}c&&Jn(t,"set","$attrs")}function sw(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(dl(l))continue;const c=e[l];let u;i&&Ie(i,u=on(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Rc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=le(n),c=a||Be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Oh(i,l,h,c[h],t,!Ie(c,h))}}return o}function Oh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ue(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(mr(i),s=c[n]=l.call(null,e),gi())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Or(n))&&(s=!0))}return s}function iw(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ue(t)){const u=h=>{l=!0;const[d,f]=iw(h,e,!0);ft(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return He(t)&&s.set(t,tr),tr;if(se(r))for(let u=0;u<r.length;u++){const h=on(r[u]);Pg(h)&&(o[h]=Be)}else if(r)for(const u in r){const h=on(u);if(Pg(h)){const d=r[u],f=o[h]=se(d)||ue(d)?{type:d}:Object.assign({},d);if(f){const p=Mg(Boolean,f.type),m=Mg(String,f.type);f[0]=p>-1,f[1]=m<0||p<m,(p>-1||Ie(f,"default"))&&a.push(h)}}}const c=[o,a];return He(t)&&s.set(t,c),c}function Pg(t){return t[0]!=="$"}function Dg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Lg(t,e){return Dg(t)===Dg(e)}function Mg(t,e){return se(e)?e.findIndex(n=>Lg(n,t)):ue(e)&&Lg(e,t)?0:-1}const rw=t=>t[0]==="_"||t==="$stable",yf=t=>se(t)?t.map(kn):[kn(t)],$S=(t,e,n)=>{if(e._n)return e;const s=tt((...i)=>yf(e(...i)),n);return s._c=!1,s},ow=(t,e,n)=>{const s=t._ctx;for(const i in t){if(rw(i))continue;const r=t[i];if(ue(r))e[i]=$S(i,r,s);else if(r!=null){const o=yf(r);e[i]=()=>o}}},aw=(t,e)=>{const n=yf(e);t.slots.default=()=>n},US=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Il(e,"_",n)):ow(e,t.slots={})}else t.slots={},e&&aw(t,e);Il(t.slots,Pc,1)},VS=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ft(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ow(e,i)),o=e}else e&&(aw(t,e),o={default:1});if(r)for(const a in i)!rw(a)&&!(a in o)&&delete i[a]};function lw(){return{app:null,config:{isNativeTag:bC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BS=0;function jS(t,e){return function(s,i=null){ue(s)||(s=Object.assign({},s)),i!=null&&!He(i)&&(i=null);const r=lw(),o=new Set;let a=!1;const l=r.app={_uid:BS++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:lk,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ue(c.install)?(o.add(c),c.install(l,...u)):ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=T(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Dc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function xh(t,e,n,s,i=!1){if(se(t)){t.forEach((d,f)=>xh(d,e&&(se(e)?e[f]:e),n,s,i));return}if(pl(s)&&!i)return;const r=s.shapeFlag&4?Dc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Qe(c)?(u[c]=null,Ie(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),ue(l))Ts(l,a,12,[o,u]);else{const d=Qe(l),f=Pe(l);if(d||f){const p=()=>{if(t.f){const m=d?Ie(h,l)?h[l]:u[l]:l.value;i?se(m)&&Xd(m,r):se(m)?m.includes(r)||m.push(r):d?(u[l]=[r],Ie(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ie(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Vt(p,n)):p()}}}const Vt=bS;function HS(t){return WS(t)}function WS(t,e){const n=RC();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=yn,insertStaticContent:p}=t,m=(g,v,C,S=null,x=null,B=null,z=!1,$=null,j=!!v.dynamicChildren)=>{if(g===v)return;g&&!ri(g,v)&&(S=V(g),Ue(g,x,B,!0),g=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:P,ref:Z,shapeFlag:K}=v;switch(P){case da:y(g,v,C,S);break;case Qn:w(g,v,C,S);break;case Lu:g==null&&E(v,C,S,z);break;case vt:U(g,v,C,S,x,B,z,$,j);break;default:K&1?R(g,v,C,S,x,B,z,$,j):K&6?ce(g,v,C,S,x,B,z,$,j):(K&64||K&128)&&P.process(g,v,C,S,x,B,z,$,j,Te)}Z!=null&&x&&xh(Z,g&&g.ref,B,v||g,!v)},y=(g,v,C,S)=>{if(g==null)s(v.el=a(v.children),C,S);else{const x=v.el=g.el;v.children!==g.children&&c(x,v.children)}},w=(g,v,C,S)=>{g==null?s(v.el=l(v.children||""),C,S):v.el=g.el},E=(g,v,C,S)=>{[g.el,g.anchor]=p(g.children,v,C,S,g.el,g.anchor)},b=({el:g,anchor:v},C,S)=>{let x;for(;g&&g!==v;)x=d(g),s(g,C,S),g=x;s(v,C,S)},k=({el:g,anchor:v})=>{let C;for(;g&&g!==v;)C=d(g),i(g),g=C;i(v)},R=(g,v,C,S,x,B,z,$,j)=>{z=z||v.type==="svg",g==null?N(v,C,S,x,B,z,$,j):D(g,v,x,B,z,$,j)},N=(g,v,C,S,x,B,z,$)=>{let j,P;const{type:Z,props:K,shapeFlag:ee,transition:oe,dirs:ve}=g;if(j=g.el=o(g.type,B,K&&K.is,K),ee&8?u(j,g.children):ee&16&&_(g.children,j,null,S,x,B&&Z!=="foreignObject",z,$),ve&&Ys(g,null,S,"created"),O(j,g,g.scopeId,z,S),K){for(const Le in K)Le!=="value"&&!dl(Le)&&r(j,Le,null,K[Le],B,g.children,S,x,L);"value"in K&&r(j,"value",null,K.value),(P=K.onVnodeBeforeMount)&&Sn(P,S,g)}ve&&Ys(g,null,S,"beforeMount");const $e=(!x||x&&!x.pendingBranch)&&oe&&!oe.persisted;$e&&oe.beforeEnter(j),s(j,v,C),((P=K&&K.onVnodeMounted)||$e||ve)&&Vt(()=>{P&&Sn(P,S,g),$e&&oe.enter(j),ve&&Ys(g,null,S,"mounted")},x)},O=(g,v,C,S,x)=>{if(C&&f(g,C),S)for(let B=0;B<S.length;B++)f(g,S[B]);if(x){let B=x.subTree;if(v===B){const z=x.vnode;O(g,z,z.scopeId,z.slotScopeIds,x.parent)}}},_=(g,v,C,S,x,B,z,$,j=0)=>{for(let P=j;P<g.length;P++){const Z=g[P]=$?ps(g[P]):kn(g[P]);m(null,Z,v,C,S,x,B,z,$)}},D=(g,v,C,S,x,B,z)=>{const $=v.el=g.el;let{patchFlag:j,dynamicChildren:P,dirs:Z}=v;j|=g.patchFlag&16;const K=g.props||Be,ee=v.props||Be;let oe;C&&Qs(C,!1),(oe=ee.onVnodeBeforeUpdate)&&Sn(oe,C,v,g),Z&&Ys(v,g,C,"beforeUpdate"),C&&Qs(C,!0);const ve=x&&v.type!=="foreignObject";if(P?F(g.dynamicChildren,P,$,C,S,ve,B):z||de(g,v,$,null,C,S,ve,B,!1),j>0){if(j&16)q($,v,K,ee,C,S,x);else if(j&2&&K.class!==ee.class&&r($,"class",null,ee.class,x),j&4&&r($,"style",K.style,ee.style,x),j&8){const $e=v.dynamicProps;for(let Le=0;Le<$e.length;Le++){const Ze=$e[Le],dn=K[Ze],Bi=ee[Ze];(Bi!==dn||Ze==="value")&&r($,Ze,dn,Bi,x,g.children,C,S,L)}}j&1&&g.children!==v.children&&u($,v.children)}else!z&&P==null&&q($,v,K,ee,C,S,x);((oe=ee.onVnodeUpdated)||Z)&&Vt(()=>{oe&&Sn(oe,C,v,g),Z&&Ys(v,g,C,"updated")},S)},F=(g,v,C,S,x,B,z)=>{for(let $=0;$<v.length;$++){const j=g[$],P=v[$],Z=j.el&&(j.type===vt||!ri(j,P)||j.shapeFlag&70)?h(j.el):C;m(j,P,Z,null,S,x,B,z,!0)}},q=(g,v,C,S,x,B,z)=>{if(C!==S){if(C!==Be)for(const $ in C)!dl($)&&!($ in S)&&r(g,$,C[$],null,z,v.children,x,B,L);for(const $ in S){if(dl($))continue;const j=S[$],P=C[$];j!==P&&$!=="value"&&r(g,$,P,j,z,v.children,x,B,L)}"value"in S&&r(g,"value",C.value,S.value)}},U=(g,v,C,S,x,B,z,$,j)=>{const P=v.el=g?g.el:a(""),Z=v.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:oe}=v;oe&&($=$?$.concat(oe):oe),g==null?(s(P,C,S),s(Z,C,S),_(v.children,C,Z,x,B,z,$,j)):K>0&&K&64&&ee&&g.dynamicChildren?(F(g.dynamicChildren,ee,C,x,B,z,$),(v.key!=null||x&&v===x.subTree)&&_f(g,v,!0)):de(g,v,C,Z,x,B,z,$,j)},ce=(g,v,C,S,x,B,z,$,j)=>{v.slotScopeIds=$,g==null?v.shapeFlag&512?x.ctx.activate(v,C,S,z,j):fe(v,C,S,x,B,z,j):ge(g,v,j)},fe=(g,v,C,S,x,B,z)=>{const $=g.component=ek(g,S,x);if(Oc(g)&&($.ctx.renderer=Te),tk($),$.asyncDep){if(x&&x.registerDep($,_e),!g.el){const j=$.subTree=T(Qn);w(null,j,v,C)}return}_e($,g,v,C,x,B,z)},ge=(g,v,C)=>{const S=v.component=g.component;if(yS(g,v,C))if(S.asyncDep&&!S.asyncResolved){Q(S,v,C);return}else S.next=v,dS(S.update),S.update();else v.el=g.el,S.vnode=v},_e=(g,v,C,S,x,B,z)=>{const $=()=>{if(g.isMounted){let{next:Z,bu:K,u:ee,parent:oe,vnode:ve}=g,$e=Z,Le;Qs(g,!1),Z?(Z.el=ve.el,Q(g,Z,z)):Z=ve,K&&Ou(K),(Le=Z.props&&Z.props.onVnodeBeforeUpdate)&&Sn(Le,oe,Z,ve),Qs(g,!0);const Ze=xu(g),dn=g.subTree;g.subTree=Ze,m(dn,Ze,h(dn.el),V(dn),g,x,B),Z.el=Ze.el,$e===null&&_S(g,Ze.el),ee&&Vt(ee,x),(Le=Z.props&&Z.props.onVnodeUpdated)&&Vt(()=>Sn(Le,oe,Z,ve),x)}else{let Z;const{el:K,props:ee}=v,{bm:oe,m:ve,parent:$e}=g,Le=pl(v);if(Qs(g,!1),oe&&Ou(oe),!Le&&(Z=ee&&ee.onVnodeBeforeMount)&&Sn(Z,$e,v),Qs(g,!0),K&&pe){const Ze=()=>{g.subTree=xu(g),pe(K,g.subTree,g,x,null)};Le?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ze()):Ze()}else{const Ze=g.subTree=xu(g);m(null,Ze,C,S,g,x,B),v.el=Ze.el}if(ve&&Vt(ve,x),!Le&&(Z=ee&&ee.onVnodeMounted)){const Ze=v;Vt(()=>Sn(Z,$e,Ze),x)}(v.shapeFlag&256||$e&&pl($e.vnode)&&$e.vnode.shapeFlag&256)&&g.a&&Vt(g.a,x),g.isMounted=!0,v=C=S=null}},j=g.effect=new nf($,()=>uf(P),g.scope),P=g.update=()=>j.run();P.id=g.uid,Qs(g,!0),P()},Q=(g,v,C)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,FS(g,v.props,S,C),VS(g,v.children,C),Pr(),kg(),Dr()},de=(g,v,C,S,x,B,z,$,j=!1)=>{const P=g&&g.children,Z=g?g.shapeFlag:0,K=v.children,{patchFlag:ee,shapeFlag:oe}=v;if(ee>0){if(ee&128){Ut(P,K,C,S,x,B,z,$,j);return}else if(ee&256){Ae(P,K,C,S,x,B,z,$,j);return}}oe&8?(Z&16&&L(P,x,B),K!==P&&u(C,K)):Z&16?oe&16?Ut(P,K,C,S,x,B,z,$,j):L(P,x,B,!0):(Z&8&&u(C,""),oe&16&&_(K,C,S,x,B,z,$,j))},Ae=(g,v,C,S,x,B,z,$,j)=>{g=g||tr,v=v||tr;const P=g.length,Z=v.length,K=Math.min(P,Z);let ee;for(ee=0;ee<K;ee++){const oe=v[ee]=j?ps(v[ee]):kn(v[ee]);m(g[ee],oe,C,null,x,B,z,$,j)}P>Z?L(g,x,B,!0,!1,K):_(v,C,S,x,B,z,$,j,K)},Ut=(g,v,C,S,x,B,z,$,j)=>{let P=0;const Z=v.length;let K=g.length-1,ee=Z-1;for(;P<=K&&P<=ee;){const oe=g[P],ve=v[P]=j?ps(v[P]):kn(v[P]);if(ri(oe,ve))m(oe,ve,C,null,x,B,z,$,j);else break;P++}for(;P<=K&&P<=ee;){const oe=g[K],ve=v[ee]=j?ps(v[ee]):kn(v[ee]);if(ri(oe,ve))m(oe,ve,C,null,x,B,z,$,j);else break;K--,ee--}if(P>K){if(P<=ee){const oe=ee+1,ve=oe<Z?v[oe].el:S;for(;P<=ee;)m(null,v[P]=j?ps(v[P]):kn(v[P]),C,ve,x,B,z,$,j),P++}}else if(P>ee)for(;P<=K;)Ue(g[P],x,B,!0),P++;else{const oe=P,ve=P,$e=new Map;for(P=ve;P<=ee;P++){const Kt=v[P]=j?ps(v[P]):kn(v[P]);Kt.key!=null&&$e.set(Kt.key,P)}let Le,Ze=0;const dn=ee-ve+1;let Bi=!1,mg=0;const Jr=new Array(dn);for(P=0;P<dn;P++)Jr[P]=0;for(P=oe;P<=K;P++){const Kt=g[P];if(Ze>=dn){Ue(Kt,x,B,!0);continue}let Cn;if(Kt.key!=null)Cn=$e.get(Kt.key);else for(Le=ve;Le<=ee;Le++)if(Jr[Le-ve]===0&&ri(Kt,v[Le])){Cn=Le;break}Cn===void 0?Ue(Kt,x,B,!0):(Jr[Cn-ve]=P+1,Cn>=mg?mg=Cn:Bi=!0,m(Kt,v[Cn],C,null,x,B,z,$,j),Ze++)}const vg=Bi?zS(Jr):tr;for(Le=vg.length-1,P=dn-1;P>=0;P--){const Kt=ve+P,Cn=v[Kt],yg=Kt+1<Z?v[Kt+1].el:S;Jr[P]===0?m(null,Cn,C,yg,x,B,z,$,j):Bi&&(Le<0||P!==vg[Le]?it(Cn,C,yg,2):Le--)}}},it=(g,v,C,S,x=null)=>{const{el:B,type:z,transition:$,children:j,shapeFlag:P}=g;if(P&6){it(g.component.subTree,v,C,S);return}if(P&128){g.suspense.move(v,C,S);return}if(P&64){z.move(g,v,C,Te);return}if(z===vt){s(B,v,C);for(let K=0;K<j.length;K++)it(j[K],v,C,S);s(g.anchor,v,C);return}if(z===Lu){b(g,v,C);return}if(S!==2&&P&1&&$)if(S===0)$.beforeEnter(B),s(B,v,C),Vt(()=>$.enter(B),x);else{const{leave:K,delayLeave:ee,afterLeave:oe}=$,ve=()=>s(B,v,C),$e=()=>{K(B,()=>{ve(),oe&&oe()})};ee?ee(B,ve,$e):$e()}else s(B,v,C)},Ue=(g,v,C,S=!1,x=!1)=>{const{type:B,props:z,ref:$,children:j,dynamicChildren:P,shapeFlag:Z,patchFlag:K,dirs:ee}=g;if($!=null&&xh($,null,C,g,!0),Z&256){v.ctx.deactivate(g);return}const oe=Z&1&&ee,ve=!pl(g);let $e;if(ve&&($e=z&&z.onVnodeBeforeUnmount)&&Sn($e,v,g),Z&6)A(g.component,C,S);else{if(Z&128){g.suspense.unmount(C,S);return}oe&&Ys(g,null,v,"beforeUnmount"),Z&64?g.type.remove(g,v,C,x,Te,S):P&&(B!==vt||K>0&&K&64)?L(P,v,C,!1,!0):(B===vt&&K&384||!x&&Z&16)&&L(j,v,C),S&&Et(g)}(ve&&($e=z&&z.onVnodeUnmounted)||oe)&&Vt(()=>{$e&&Sn($e,v,g),oe&&Ys(g,null,v,"unmounted")},C)},Et=g=>{const{type:v,el:C,anchor:S,transition:x}=g;if(v===vt){In(C,S);return}if(v===Lu){k(g);return}const B=()=>{i(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(g.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:$}=x,j=()=>z(C,B);$?$(g.el,B,j):j()}else B()},In=(g,v)=>{let C;for(;g!==v;)C=d(g),i(g),g=C;i(v)},A=(g,v,C)=>{const{bum:S,scope:x,update:B,subTree:z,um:$}=g;S&&Ou(S),x.stop(),B&&(B.active=!1,Ue(z,g,v,C)),$&&Vt($,v),Vt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},L=(g,v,C,S=!1,x=!1,B=0)=>{for(let z=B;z<g.length;z++)Ue(g[z],v,C,S,x)},V=g=>g.shapeFlag&6?V(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),J=(g,v,C)=>{g==null?v._vnode&&Ue(v._vnode,null,null,!0):m(v._vnode||null,g,v,null,null,null,C),kg(),V_(),v._vnode=g},Te={p:m,um:Ue,m:it,r:Et,mt:fe,mc:_,pc:de,pbc:F,n:V,o:t};let Ye,pe;return e&&([Ye,pe]=e(Te)),{render:J,hydrate:Ye,createApp:jS(J,Ye)}}function Qs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _f(t,e,n=!1){const s=t.children,i=e.children;if(se(s)&&se(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ps(i[r]),a.el=o.el),n||_f(o,a)),a.type===da&&(a.el=o.el)}}function zS(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const qS=t=>t.__isTeleport,vo=t=>t&&(t.disabled||t.disabled===""),Fg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ph=(t,e)=>{const n=t&&t.to;return Qe(n)?e?e(n):null:n},KS={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:y}}=c,w=vo(e.props);let{shapeFlag:E,children:b,dynamicChildren:k}=e;if(t==null){const R=e.el=m(""),N=e.anchor=m("");f(R,n,s),f(N,n,s);const O=e.target=Ph(e.props,p),_=e.targetAnchor=m("");O&&(f(_,O),o=o||Fg(O));const D=(F,q)=>{E&16&&u(b,F,q,i,r,o,a,l)};w?D(n,N):O&&D(O,_)}else{e.el=t.el;const R=e.anchor=t.anchor,N=e.target=t.target,O=e.targetAnchor=t.targetAnchor,_=vo(t.props),D=_?n:N,F=_?R:O;if(o=o||Fg(N),k?(d(t.dynamicChildren,k,D,i,r,o,a),_f(t,e,!0)):l||h(t,e,D,F,i,r,o,a,!1),w)_||za(e,n,R,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const q=e.target=Ph(e.props,p);q&&za(e,q,null,c,0)}else _&&za(e,N,O,c,1)}cw(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!vo(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const p=l[f];i(p,e,n,!0,!!p.dynamicChildren)}},move:za,hydrate:GS};function za(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||vo(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function GS(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Ph(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(vo(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}cw(e)}return e.anchor&&o(e.anchor)}const gH=KS;function cw(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const vt=Symbol(void 0),da=Symbol(void 0),Qn=Symbol(void 0),Lu=Symbol(void 0),yo=[];let gn=null;function Rn(t=!1){yo.push(gn=t?null:[])}function YS(){yo.pop(),gn=yo[yo.length-1]||null}let Uo=1;function $g(t){Uo+=t}function uw(t){return t.dynamicChildren=Uo>0?gn||tr:null,YS(),Uo>0&&gn&&gn.push(t),t}function Ug(t,e,n,s,i,r){return uw(Lr(t,e,n,s,i,r,!0))}function Is(t,e,n,s,i){return uw(T(t,e,n,s,i,!0))}function Dh(t){return t?t.__v_isVNode===!0:!1}function ri(t,e){return t.type===e.type&&t.key===e.key}const Pc="__vInternal",hw=({key:t})=>t!=null?t:null,gl=({ref:t,ref_key:e,ref_for:n})=>t!=null?Qe(t)||Pe(t)||ue(t)?{i:Qt,r:t,k:e,f:!!n}:t:null;function Lr(t,e=null,n=null,s=0,i=null,r=t===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hw(e),ref:e&&gl(e),scopeId:Nc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qt};return a?(wf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),Uo>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const T=QS;function QS(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ew)&&(t=Qn),Dh(t)){const a=Ds(t,e,!0);return n&&wf(a,n),Uo>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(t)]=a:gn.push(a)),a.patchFlag|=-2,a}if(ok(t)&&(t=t.__vccOpts),e){e=XS(e);let{class:a,style:l}=e;a&&!Qe(a)&&(e.class=Yd(a)),He(l)&&(x_(l)&&!se(l)&&(l=ft({},l)),e.style=Gd(l))}const o=Qe(t)?1:wS(t)?128:qS(t)?64:He(t)?4:ue(t)?2:0;return Lr(t,e,n,s,i,o,r,!0)}function XS(t){return t?x_(t)||Pc in t?ft({},t):t:null}function Ds(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Pi(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hw(a),ref:e&&e.ref?n&&i?se(i)?i.concat(gl(e)):[i,gl(e)]:gl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ds(t.ssContent),ssFallback:t.ssFallback&&Ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ir(t=" ",e=0){return T(da,null,t,e)}function kn(t){return t==null||typeof t=="boolean"?T(Qn):se(t)?T(vt,null,t.slice()):typeof t=="object"?ps(t):T(da,null,String(t))}function ps(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ds(t)}function wf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),wf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Pc in e)?e._ctx=Qt:i===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),s&64?(n=16,e=[ir(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pi(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yd([e.class,s.class]));else if(i==="style")e.style=Gd([e.style,s.style]);else if(_c(i)){const r=e[i],o=s[i];o&&r!==o&&!(se(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Sn(t,e,n,s=null){rn(t,e,7,[n,s])}const JS=lw();let ZS=0;function ek(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||JS,r={uid:ZS++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new b_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iw(s,i),emitsOptions:j_(s,i),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gS.bind(null,r),t.ce&&t.ce(r),r}let Je=null;const js=()=>Je||Qt,mr=t=>{Je=t,t.scope.on()},gi=()=>{Je&&Je.scope.off(),Je=null};function dw(t){return t.vnode.shapeFlag&4}let Vo=!1;function tk(t,e=!1){Vo=e;const{props:n,children:s}=t.vnode,i=dw(t);MS(t,n,i,e),US(t,s);const r=i?nk(t,e):void 0;return Vo=!1,r}function nk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gr(new Proxy(t.ctx,NS));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ik(t):null;mr(t),Pr();const r=Ts(s,t,0,[t.props,i]);if(Dr(),gi(),y_(r)){if(r.then(gi,gi),e)return r.then(o=>{Vg(t,o,e)}).catch(o=>{Ac(o,t,0)});t.asyncDep=r}else Vg(t,r,e)}else fw(t,e)}function Vg(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=M_(e)),fw(t,n)}let Bg;function fw(t,e,n){const s=t.type;if(!t.render){if(!e&&Bg&&!s.render){const i=s.template||vf(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ft(ft({isCustomElement:r,delimiters:a},o),l);s.render=Bg(i,c)}}t.render=s.render||yn}mr(t),Pr(),OS(t),Dr(),gi()}function sk(t){return new Proxy(t.attrs,{get(e,n){return zt(t,"get","$attrs"),e[n]}})}function ik(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=sk(t))},slots:t.slots,emit:t.emit,expose:e}}function Dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(M_(gr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mo)return mo[n](t)},has(e,n){return n in e||n in mo}}))}function rk(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function ok(t){return ue(t)&&"__vccOpts"in t}const I=(t,e)=>cS(t,e,Vo);function os(t,e,n){const s=arguments.length;return s===2?He(e)&&!se(e)?Dh(e)?T(t,null,[e]):T(t,e):T(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Dh(n)&&(n=[n]),T(t,e,n))}const pw=Symbol(""),ak=()=>De(pw),lk="3.2.47",ck="http://www.w3.org/2000/svg",oi=typeof document<"u"?document:null,jg=oi&&oi.createElement("template"),uk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?oi.createElementNS(ck,t):oi.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>oi.createTextNode(t),createComment:t=>oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{jg.innerHTML=s?`<svg>${t}</svg>`:t;const a=jg.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hk(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dk(t,e,n){const s=t.style,i=Qe(n);if(n&&!i){if(e&&!Qe(e))for(const r in e)n[r]==null&&Lh(s,r,"");for(const r in n)Lh(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Hg=/\s*!important$/;function Lh(t,e,n){if(se(n))n.forEach(s=>Lh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fk(t,e);Hg.test(n)?t.setProperty(Or(s),n.replace(Hg,""),"important"):t[s]=n}}const Wg=["Webkit","Moz","ms"],Mu={};function fk(t,e){const n=Mu[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return Mu[e]=s;s=xr(s);for(let i=0;i<Wg.length;i++){const r=Wg[i]+s;if(r in t)return Mu[e]=r}return e}const zg="http://www.w3.org/1999/xlink";function pk(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zg,e.slice(6,e.length)):t.setAttributeNS(zg,e,n);else{const r=_C(e);n==null||r&&!g_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function gk(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=g_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function mk(t,e,n,s){t.addEventListener(e,n,s)}function vk(t,e,n,s){t.removeEventListener(e,n,s)}function yk(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=_k(e);if(s){const c=r[e]=Ek(s,i);mk(t,a,c,l)}else o&&(vk(t,a,o,l),r[e]=void 0)}}const qg=/(?:Once|Passive|Capture)$/;function _k(t){let e;if(qg.test(t)){e={};let s;for(;s=t.match(qg);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let Fu=0;const wk=Promise.resolve(),bk=()=>Fu||(wk.then(()=>Fu=0),Fu=Date.now());function Ek(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rn(Tk(s,n.value),e,5,[s])};return n.value=t,n.attached=bk(),n}function Tk(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Kg=/^on[a-z]/,Ik=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?hk(t,s,i):e==="style"?dk(t,n,s):_c(e)?Qd(e)||yk(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ck(t,e,s,i))?gk(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pk(t,e,s,i))};function Ck(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Kg.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Kg.test(e)&&Qe(n)?!1:e in t}const cs="transition",Zr="animation",Hs=(t,{slots:e})=>os(z_,mw(t),e);Hs.displayName="Transition";const gw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sk=Hs.props=ft({},z_.props,gw),Xs=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Gg=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function mw(t){const e={};for(const U in t)U in gw||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=kk(i),m=p&&p[0],y=p&&p[1],{onBeforeEnter:w,onEnter:E,onEnterCancelled:b,onLeave:k,onLeaveCancelled:R,onBeforeAppear:N=w,onAppear:O=E,onAppearCancelled:_=b}=e,D=(U,ce,fe)=>{ds(U,ce?u:a),ds(U,ce?c:o),fe&&fe()},F=(U,ce)=>{U._isLeaving=!1,ds(U,h),ds(U,f),ds(U,d),ce&&ce()},q=U=>(ce,fe)=>{const ge=U?O:E,_e=()=>D(ce,U,fe);Xs(ge,[ce,_e]),Yg(()=>{ds(ce,U?l:r),Wn(ce,U?u:a),Gg(ge)||Qg(ce,s,m,_e)})};return ft(e,{onBeforeEnter(U){Xs(w,[U]),Wn(U,r),Wn(U,o)},onBeforeAppear(U){Xs(N,[U]),Wn(U,l),Wn(U,c)},onEnter:q(!1),onAppear:q(!0),onLeave(U,ce){U._isLeaving=!0;const fe=()=>F(U,ce);Wn(U,h),yw(),Wn(U,d),Yg(()=>{!U._isLeaving||(ds(U,h),Wn(U,f),Gg(k)||Qg(U,s,y,fe))}),Xs(k,[U,fe])},onEnterCancelled(U){D(U,!1),Xs(b,[U])},onAppearCancelled(U){D(U,!0),Xs(_,[U])},onLeaveCancelled(U){F(U),Xs(R,[U])}})}function kk(t){if(t==null)return null;if(He(t))return[$u(t.enter),$u(t.leave)];{const e=$u(t);return[e,e]}}function $u(t){return AC(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ds(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Yg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ak=0;function Qg(t,e,n,s){const i=t._endId=++Ak,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=vw(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function vw(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),i=s(`${cs}Delay`),r=s(`${cs}Duration`),o=Xg(i,r),a=s(`${Zr}Delay`),l=s(`${Zr}Duration`),c=Xg(a,l);let u=null,h=0,d=0;e===cs?o>0&&(u=cs,h=o,d=r.length):e===Zr?c>0&&(u=Zr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?cs:Zr:null,d=u?u===cs?r.length:l.length:0);const f=u===cs&&/\b(transform|all)(,|$)/.test(s(`${cs}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Xg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Jg(n)+Jg(t[s])))}function Jg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function yw(){return document.body.offsetHeight}const _w=new WeakMap,ww=new WeakMap,bw={name:"TransitionGroup",props:ft({},Sk,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=js(),s=W_();let i,r;return Q_(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Dk(i[0].el,n.vnode.el,o))return;i.forEach(Ok),i.forEach(xk);const a=i.filter(Pk);yw(),a.forEach(l=>{const c=l.el,u=c.style;Wn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,ds(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=le(t),a=mw(o);let l=o.tag||vt;i=r,r=e.default?df(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&$o(u,Fo(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];$o(u,Fo(u,a,s,n)),_w.set(u,u.el.getBoundingClientRect())}return T(l,null,r)}}},Rk=t=>delete t.mode;bw.props;const Nk=bw;function Ok(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function xk(t){ww.set(t,t.el.getBoundingClientRect())}function Pk(t){const e=_w.get(t),n=ww.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Dk(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=vw(s);return i.removeChild(s),r}const Lk=["ctrl","shift","alt","meta"],Mk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lk.some(n=>t[`${n}Key`]&&!e.includes(n))},Fk=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Mk[e[i]];if(r&&r(n,e))return}return t(n,...s)},$k={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):eo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),eo(t,!0),s.enter(t)):s.leave(t,()=>{eo(t,!1)}):eo(t,e))},beforeUnmount(t,{value:e}){eo(t,e)}};function eo(t,e){t.style.display=e?t._vod:"none"}const Uk=ft({patchProp:Ik},uk);let Zg;function Vk(){return Zg||(Zg=HS(Uk))}const Bk=(...t)=>{const e=Vk().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=jk(s);if(!i)return;const r=e._component;!ue(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jk(t){return Qe(t)?document.querySelector(t):t}const Hk=Bs({__name:"App",setup(t){return(e,n)=>{const s=Z_("router-view");return Rn(),Is(s)}}}),Wk="modulepreload",zk=function(t){return"/"+t},em={},ti=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=zk(r),r in em)return;em[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Wk,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};async function qk(){(await ti(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}function tm(t,e,n){Kk(t,e),e.set(t,n)}function Kk(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Gk(t,e,n){var s=Ew(t,e,"set");return Yk(t,s,n),n}function Yk(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function Js(t,e){var n=Ew(t,e,"get");return Qk(t,n)}function Ew(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function Qk(t,e){return e.get?e.get.call(t):e.value}function Tw(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let i=0;i<s;i++){if(t==null)return n;t=t[e[i]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function Iw(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>Iw(t[s],e[s]))}function Mh(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Tw(t,e.split("."),n))}function mH(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t)){if(typeof e!="function")return n;const i=e(t,n);return typeof i>"u"?n:i}if(typeof e=="string")return Mh(t,e,n);if(Array.isArray(e))return Tw(t,e,n);if(typeof e!="function")return n;const s=e(t,n);return typeof s>"u"?n:s}function Xk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Fh(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function vH(t){return t==null?void 0:t.$el}const nm=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Cw(t,e){const n=Object.create(null),s=Object.create(null);for(const i in t)e.some(r=>r instanceof RegExp?r.test(i):r===i)?n[i]=t[i]:s[i]=t[i];return[n,s]}function yH(t,e){const n={...t};return e.forEach(s=>delete n[s]),n}function _H(t){return Cw(t,["class","style","id",/^data-/])}function Jk(t){return t==null?[]:Array.isArray(t)?t:[t]}function Zk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function sm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function eA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function Zn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const i in t)s[i]=t[i];for(const i in e){const r=t[i],o=e[i];if(Fh(r)&&Fh(o)){s[i]=Zn(r,o,n);continue}if(Array.isArray(r)&&Array.isArray(o)&&n){s[i]=n(r,o);continue}s[i]=o}return s}function Cs(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Cs.cache.has(t))return Cs.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Cs.cache.set(t,e),e}Cs.cache=new Map;function _o(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>_o(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>_o(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return _o(t,e.component.subTree).flat(1)}return[]}var qa=new WeakMap,ji=new WeakMap;class tA{constructor(e){tm(this,qa,{writable:!0,value:[]}),tm(this,ji,{writable:!0,value:0}),this.size=e}push(e){Js(this,qa)[Js(this,ji)]=e,Gk(this,ji,(Js(this,ji)+1)%this.size)}values(){return Js(this,qa).slice(Js(this,ji)).concat(Js(this,qa).slice(0,Js(this,ji)))}}function Sw(t){const e=At({}),n=I(t);return ha(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),kc(e)}function Nl(t,e){return t.includes(e)}const nA=/^on[^a-z]/,wH=t=>nA.test(t),im=[Function,Array];function rm(t,e){return e="on"+xr(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function bH(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(Array.isArray(t))for(const i of t)i(...n);else typeof t=="function"&&t(...n)}const kw=["top","bottom"],sA=["start","end","left","right"];function iA(t,e){let[n,s]=t.split(" ");return s||(s=Nl(kw,n)?"start":Nl(sA,n)?"top":"center"),{side:$h(n,e),align:$h(s,e)}}function $h(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function EH(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function TH(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function IH(t){return{side:t.align,align:t.side}}function CH(t){return Nl(kw,t.side)?"y":"x"}function Aw(t,e,n){if(n&&(e={__isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?aA(e):"")}function rr(t,e,n){const s=Aw(t,e,n);s!=null&&console.warn(s)}function om(t,e,n){const s=Aw(t,e,n);s!=null&&console.error(s)}const rA=/(?:^|[-_])(\w)/g,oA=t=>t.replace(rA,e=>e.toUpperCase()).replace(/[-_]/g,"");function Uu(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t.__isVue?t.$options||t.constructor.options:t||{};let s=n.name||n._componentTag;const i=n.__file;if(!s&&i){const r=i.match(/([^/\\]+)\.vue$/);s=r==null?void 0:r[1]}return(s?`<${oA(s)}>`:"<Anonymous>")+(i&&e!==!1?` at ${i}`:"")}function aA(t){if(t.__isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const s=e[e.length-1];if(s.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[s,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((s,i)=>`${i===0?"---> ":" ".repeat(5+i*2)}${Array.isArray(s)?`${Uu(s[0])}... (${s[1]} recursive calls)`:Uu(s)}`).join(`
`)}else return`

(found in ${Uu(t)})`}const lA=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],cA=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,uA=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],hA=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Rw(t){const e=Array(3),n=cA,s=lA;for(let i=0;i<3;++i)e[i]=Math.round(Zk(n(s[i][0]*t[0]+s[i][1]*t[1]+s[i][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function bf(t){let{r:e,g:n,b:s}=t;const i=[0,0,0],r=hA,o=uA;e=r(e/255),n=r(n/255),s=r(s/255);for(let a=0;a<3;++a)i[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return i}const Ol=.20689655172413793,dA=t=>t>Ol**3?Math.cbrt(t):t/(3*Ol**2)+4/29,fA=t=>t>Ol?t**3:3*Ol**2*(t-4/29);function Nw(t){const e=dA,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Ow(t){const e=fA,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function am(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function li(t){if(typeof t=="number")return(isNaN(t)||t<0||t>16777215)&&rr(`'${t}' is not a valid hex color`),{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;[3,4].includes(e.length)?e=e.split("").map(s=>s+s).join(""):[6,8].includes(e.length)||rr(`'${t}' is not a valid hex(a) color`);const n=parseInt(e,16);return(isNaN(n)||n<0||n>4294967295)&&rr(`'${t}' is not a valid hex(a) color`),gA(e)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`)}function Ka(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function pA(t){let{r:e,g:n,b:s,a:i}=t;return`#${[Ka(e),Ka(n),Ka(s),i!==void 0?Ka(Math.round(i*255)):""].join("")}`}function gA(t){t=mA(t);let[e,n,s,i]=eA(t,2).map(r=>parseInt(r,16));return i=i===void 0?i:i/255,{r:e,g:n,b:s,a:i}}function mA(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=sm(sm(t,6),8,"F")),t}function vA(t,e){const n=Nw(bf(t));return n[0]=n[0]+e*10,Rw(Ow(n))}function yA(t,e){const n=Nw(bf(t));return n[0]=n[0]-e*10,Rw(Ow(n))}function _A(t){const e=li(t);return bf(e)[1]}function en(t,e){const n=js();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function Di(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=en(t).type;return Cs((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let xw=0,ml=new WeakMap;function fa(){const t=en("getUid");if(ml.has(t))return ml.get(t);{const e=xw++;return ml.set(t,e),e}}fa.reset=()=>{xw=0,ml=new WeakMap};function wA(t){const{provides:e}=en("injectSelf");if(e&&t in e)return e[t]}function Fe(t,e){return n=>Object.keys(t).reduce((s,i)=>{const o=typeof t[i]=="object"&&t[i]!=null&&!Array.isArray(t[i])?t[i]:{type:t[i]};return n&&i in n?s[i]={...o,default:n[i]}:s[i]=o,e&&!s[i].source&&(s[i].source=e),s},{})}function Pw(t,e){let n;function s(){n=Ec(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}Ke(t,i=>{i&&!n?s():i||(n==null||n.stop(),n=void 0)},{immediate:!0}),Tc(()=>{n==null||n.stop()})}function bA(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[Cs(e)])<"u"}function pa(t){var e,n;if(t._setup=(e=t._setup)!=null?e:t.setup,!t.name)return rr("The component is missing an explicit name, unable to generate default prop value"),t;if(t._setup){t.props=Fe((n=t.props)!=null?n:{},Cs(t.name))();const s=Object.keys(t.props);t.filterProps=function(r){return Cw(r,s)},t.props._as=String,t.setup=function(r,o){const a=Dw();if(!a.value)return t._setup(r,o);const l=js(),c=I(()=>{var f;return a.value[(f=r._as)!=null?f:t.name]}),u=new Proxy(r,{get(f,p){var y,w,E,b;const m=Reflect.get(f,p);return typeof p=="string"&&!bA(l.vnode,p)&&(b=(E=(y=c.value)==null?void 0:y[p])!=null?E:(w=a.value.global)==null?void 0:w[p])!=null?b:m}}),h=Sc();ha(()=>{if(c.value){const f=Object.entries(c.value).filter(p=>{let[m]=p;return m.startsWith(m[0].toUpperCase())});f.length&&(h.value=Object.fromEntries(f))}});const d=t._setup(u,o);return Pw(h,()=>{var f,p;Mr(Zn((p=(f=wA(Bo))==null?void 0:f.value)!=null?p:{},h.value))}),d}}return t}function Ge(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?pa:Bs)(e)}function Ef(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Ge()({name:n!=null?n:xr(on(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(s,i){let{slots:r}=i;return()=>{var o;return os(s.tag,{class:t},(o=r.default)==null?void 0:o.call(r))}}})}const an=typeof window<"u",Tf=an&&"IntersectionObserver"in window,EA=an&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),SH=an&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)");function lt(t){const e=en("useRender");e.render=t}const Bo=Symbol.for("vuetify:defaults");function TA(t){return Y(t)}function Dw(){const t=De(Bo);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Mr(t,e){const n=Dw(),s=Y(t),i=I(()=>{if(xe(e==null?void 0:e.disabled))return n.value;const o=xe(e==null?void 0:e.scoped),a=xe(e==null?void 0:e.reset),l=xe(e==null?void 0:e.root);let c=Zn(s.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let h=0;h<=u&&!(!c||!("prev"in c));h++)c=c.prev;return c}return c.prev?Zn(c.prev,c):c});return Ht(Bo,i),i}const Uh=Symbol.for("vuetify:display"),lm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},IA=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:lm;return Zn(lm,t)};function cm(t){return an&&!t?window.innerWidth:0}function um(t){return an&&!t?window.innerHeight:0}function hm(t){const e=an&&!t?window.navigator.userAgent:"ssr";function n(p){return Boolean(e.match(p))}const s=n(/android/i),i=n(/iphone|ipad|ipod/i),r=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),h=n(/win/i),d=n(/mac/i),f=n(/linux/i);return{android:s,ios:i,cordova:r,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:h,mac:d,linux:f,touch:EA,ssr:e==="ssr"}}function CA(t,e){const{thresholds:n,mobileBreakpoint:s}=IA(t),i=Y(um(e)),r=Sc(hm(e)),o=At({}),a=Y(cm(e));function l(){i.value=um(),a.value=cm()}function c(){l(),r.value=hm()}return ha(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,d=a.value<n.lg&&!(h||u),f=a.value<n.xl&&!(d||h||u),p=a.value<n.xxl&&!(f||d||h||u),m=a.value>=n.xxl,y=u?"xs":h?"sm":d?"md":f?"lg":p?"xl":"xxl",w=typeof s=="number"?s:n[s],E=a.value<w;o.xs=u,o.sm=h,o.md=d,o.lg=f,o.xl=p,o.xxl=m,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||d),o.xlAndUp=!(u||h||d||f),o.smAndDown=!(d||f||p||m),o.mdAndDown=!(f||p||m),o.lgAndDown=!(p||m),o.xlAndDown=!m,o.name=y,o.height=i.value,o.width=a.value,o.mobile=E,o.mobileBreakpoint=s,o.platform=r.value,o.thresholds=n}),an&&window.addEventListener("resize",l,{passive:!0}),{...kc(o),update:c,ssr:!!e}}function SA(){const t=De(Uh);if(!t)throw new Error("Could not find Vuetify display injection");return t}const kA={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},AA={component:t=>os(Lw,{...t,class:"mdi"})},Ls=[String,Function,Object],Vh=Symbol.for("vuetify:icons"),Lc=Fe({icon:{type:Ls},tag:{type:String,required:!0}},"icon"),dm=Ge()({name:"VComponentIcon",props:Lc(),setup(t,e){let{slots:n}=e;return()=>T(t.tag,null,{default:()=>{var s;return[t.icon?T(t.icon,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}),RA=pa({name:"VSvgIcon",inheritAttrs:!1,props:Lc(),setup(t,e){let{attrs:n}=e;return()=>T(t.tag,Pi(n,{style:null}),{default:()=>[T("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[T("path",{d:t.icon},null)])]})}}),NA=pa({name:"VLigatureIcon",props:Lc(),setup(t){return()=>T(t.tag,null,{default:()=>[t.icon]})}}),Lw=pa({name:"VClassIcon",props:Lc(),setup(t){return()=>T(t.tag,{class:t.icon},null)}}),OA={svg:{component:RA},class:{component:Lw}};function xA(t){return Zn({defaultSet:"mdi",sets:{...OA,mdi:AA},aliases:kA},t)}const PA=t=>{const e=De(Vh);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:I(()=>{var l;const s=Pe(t)?t.value:t.icon;if(!s)return{component:dm};let i=s;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(l=e.aliases)==null?void 0:l[i.slice(1)])),!i)throw new Error(`Could not find aliased icon "${s}"`);if(typeof i!="string")return{component:dm,icon:i};const r=Object.keys(e.sets).find(c=>typeof i=="string"&&i.startsWith(`${c}:`)),o=r?i.slice(r.length+1):i;return{component:e.sets[r!=null?r:e.defaultSet].component,icon:o}})}};function bi(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const r=en("useProxiedModel"),o=Y(t[e]!==void 0?t[e]:n),a=Cs(e),c=I(a!==e?()=>{var h,d,f,p;return t[e],!!((((h=r.vnode.props)==null?void 0:h.hasOwnProperty(e))||((d=r.vnode.props)==null?void 0:d.hasOwnProperty(a)))&&(((f=r.vnode.props)==null?void 0:f.hasOwnProperty(`onUpdate:${e}`))||((p=r.vnode.props)==null?void 0:p.hasOwnProperty(`onUpdate:${a}`))))}:()=>{var h,d;return t[e],!!(((h=r.vnode.props)==null?void 0:h.hasOwnProperty(e))&&((d=r.vnode.props)==null?void 0:d.hasOwnProperty(`onUpdate:${e}`)))});Pw(()=>!c.value,()=>{Ke(()=>t[e],h=>{o.value=h})});const u=I({get(){return s(c.value?t[e]:o.value)},set(h){const d=i(h),f=le(c.value?t[e]:o.value);f===d||s(f)===h||(o.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const DA={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading..."},fm="$vuetify.",pm=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),Mw=(t,e,n)=>function(s){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if(!s.startsWith(fm))return pm(s,r);const a=s.replace(fm,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Mh(l,a,null);return u||(rr(`Translation key "${s}" not found in "${t.value}", trying fallback locale`),u=Mh(c,a,null)),u||(om(`Translation key "${s}" not found in fallback`),u=s),typeof u!="string"&&(om(`Translation key "${s}" has a non-string value`),u=s),pm(u,r)};function Fw(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function Vu(t,e,n){var i,r;const s=bi(t,e,(i=t[e])!=null?i:n.value);return s.value=(r=t[e])!=null?r:n.value,Ke(n,o=>{t[e]==null&&(s.value=n.value)}),s}function $w(t){return e=>{const n=Vu(e,"locale",t.current),s=Vu(e,"fallback",t.fallback),i=Vu(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:i,t:Mw(n,s,i),n:Fw(n,s),provide:$w({current:n,fallback:s,messages:i})}}}function LA(t){var i,r;const e=Y((i=t==null?void 0:t.locale)!=null?i:"en"),n=Y((r=t==null?void 0:t.fallback)!=null?r:"en"),s=Y({en:DA,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:Mw(e,n,s),n:Fw(e,n),provide:$w({current:e,fallback:n,messages:s})}}const MA={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},xl=Symbol.for("vuetify:locale");function FA(t){return t.name!=null}function $A(t){const e=(t==null?void 0:t.adapter)&&FA(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:LA(t),n=UA(e,t);return{...e,...n}}function kH(){const t=De(xl);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function UA(t,e){var i;const n=Y((i=e==null?void 0:e.rtl)!=null?i:MA),s=I(()=>{var r;return(r=n.value[t.current.value])!=null?r:!1});return{isRtl:s,rtl:n,rtlClasses:I(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function Mc(){const t=De(xl);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Hi=2.4,gm=.2126729,mm=.7151522,vm=.072175,VA=.55,BA=.58,jA=.57,HA=.62,Ga=.03,ym=1.45,WA=5e-4,zA=1.25,qA=1.25,_m=.078,wm=12.82051282051282,Ya=.06,bm=.001;function Em(t,e){const n=(t.r/255)**Hi,s=(t.g/255)**Hi,i=(t.b/255)**Hi,r=(e.r/255)**Hi,o=(e.g/255)**Hi,a=(e.b/255)**Hi;let l=n*gm+s*mm+i*vm,c=r*gm+o*mm+a*vm;if(l<=Ga&&(l+=(Ga-l)**ym),c<=Ga&&(c+=(Ga-c)**ym),Math.abs(c-l)<WA)return 0;let u;if(c>l){const h=(c**VA-l**BA)*zA;u=h<bm?0:h<_m?h-h*wm*Ya:h-Ya}else{const h=(c**HA-l**jA)*qA;u=h>-bm?0:h>-_m?h-h*wm*Ya:h+Ya}return u*100}const jo=Symbol.for("vuetify:theme"),Tn=Fe({theme:String},"theme"),to={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function KA(){var n,s,i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:to;if(!t)return{...to,isDisabled:!0};const e={};for(const[r,o]of Object.entries((n=t.themes)!=null?n:{})){const a=o.dark||r==="dark"?(s=to.themes)==null?void 0:s.dark:(i=to.themes)==null?void 0:i.light;e[r]=Zn(a,o)}return Zn(to,{...t,themes:e})}function GA(t){const e=At(KA(t)),n=Y(e.defaultTheme),s=Y(e.themes),i=I(()=>{const u={};for(const[h,d]of Object.entries(s.value)){const f=u[h]={...d,colors:{...d.colors}};if(e.variations)for(const p of e.variations.colors){const m=f.colors[p];if(!!m)for(const y of["lighten","darken"]){const w=y==="lighten"?vA:yA;for(const E of Xk(e.variations[y],1))f.colors[`${p}-${y}-${E}`]=pA(w(li(m),E))}}for(const p of Object.keys(f.colors)){if(/^on-[a-z]/.test(p)||f.colors[`on-${p}`])continue;const m=`on-${p}`,y=li(f.colors[p]),w=Math.abs(Em(li(0),y)),E=Math.abs(Em(li(16777215),y));f.colors[m]=E>Math.min(w,50)?"#fff":"#000"}}return u}),r=I(()=>i.value[n.value]),o=I(()=>{const u=[];r.value.dark&&Zs(u,":root",["color-scheme: dark"]),Zs(u,":root",Tm(r.value));for(const[p,m]of Object.entries(i.value))Zs(u,`.v-theme--${p}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...Tm(m)]);const h=[],d=[],f=new Set(Object.values(i.value).flatMap(p=>Object.keys(p.colors)));for(const p of f)/^on-[a-z]/.test(p)?Zs(d,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(Zs(h,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),Zs(d,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),Zs(d,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return u.push(...h,...d),u.map((p,m)=>m===0?p:`    ${p}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){const h=u._context.provides.usehead;if(h)if(h.push){const d=h.push(a);Ke(o,()=>{d.patch(a)})}else an?(h.addHeadObjs(I(a)),ha(()=>h.updateDOM())):h.addHeadObjs(a());else{let f=function(){if(!e.isDisabled){if(typeof document<"u"&&!d){const p=document.createElement("style");p.type="text/css",p.id="vuetify-theme-stylesheet",e.cspNonce&&p.setAttribute("nonce",e.cspNonce),d=p,document.head.appendChild(d)}d&&(d.innerHTML=o.value)}},d=an?document.getElementById("vuetify-theme-stylesheet"):null;Ke(o,f,{immediate:!0})}}const c=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:s,current:r,computedThemes:i,themeClasses:c,styles:o,global:{name:n,current:r}}}function Bn(t){en("provideTheme");const e=De(jo,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=I(()=>{var r;return(r=t.theme)!=null?r:e==null?void 0:e.name.value}),s=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,themeClasses:s};return Ht(jo,i),i}function YA(){en("useTheme");const t=De(jo,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function Zs(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function Tm(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[i,r]of Object.entries(t.colors)){const o=li(r);s.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||s.push(`--v-theme-${i}-overlay-multiplier: ${_A(r)>.18?e:n}`)}for(const[i,r]of Object.entries(t.variables)){const o=typeof r=="string"&&r.startsWith("#")?li(r):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${i}: ${a!=null?a:r}`)}return s}function Uw(t){const e=Y(),n=Y();if(an){const s=new ResizeObserver(i=>{t==null||t(i,s),i.length&&(n.value=i[0].contentRect)});En(()=>{s.disconnect()}),Ke(e,(i,r)=>{r&&(s.unobserve(r),n.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:e,contentRect:Cc(n)}}const Pl=Symbol.for("vuetify:layout"),Vw=Symbol.for("vuetify:layout-item"),Im=1e3,QA=Fe({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),If=Fe({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function XA(){const t=De(Pl);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function Cf(t){var a;const e=De(Pl);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=(a=t.id)!=null?a:`layout-item-${fa()}`,s=en("useLayoutItem");Ht(Vw,{id:n});const i=Y(!1);G_(()=>i.value=!0),K_(()=>i.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:o}=e.register(s,{...t,active:I(()=>i.value?!1:t.active.value),id:n});return En(()=>e.unregister(n)),{layoutItemStyles:r,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const JA=(t,e,n,s)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const o of t){const a=e.get(o),l=n.get(o),c=s.get(o);if(!a||!l||!c)continue;const u={...i,[a.value]:parseInt(i[a.value],10)+(c.value?parseInt(l.value,10):0)};r.push({id:o,layer:u}),i=u}return r};function ZA(t){const e=De(Pl,null),n=I(()=>e?e.rootZIndex.value-100:Im),s=Y([]),i=At(new Map),r=At(new Map),o=At(new Map),a=At(new Map),l=At(new Map),{resizeRef:c,contentRect:u}=Uw(),h=I(()=>{var _;const N=new Map,O=(_=t.overlaps)!=null?_:[];for(const D of O.filter(F=>F.includes(":"))){const[F,q]=D.split(":");if(!s.value.includes(F)||!s.value.includes(q))continue;const U=i.get(F),ce=i.get(q),fe=r.get(F),ge=r.get(q);!U||!ce||!fe||!ge||(N.set(q,{position:U.value,amount:parseInt(fe.value,10)}),N.set(F,{position:ce.value,amount:-parseInt(ge.value,10)}))}return N}),d=I(()=>{const N=[...new Set([...o.values()].map(_=>_.value))].sort((_,D)=>_-D),O=[];for(const _ of N){const D=s.value.filter(F=>{var q;return((q=o.get(F))==null?void 0:q.value)===_});O.push(...D)}return JA(O,i,r,a)}),f=I(()=>!Array.from(l.values()).some(N=>N.value)),p=I(()=>d.value[d.value.length-1].layer),m=I(()=>({"--v-layout-left":me(p.value.left),"--v-layout-right":me(p.value.right),"--v-layout-top":me(p.value.top),"--v-layout-bottom":me(p.value.bottom),...f.value?void 0:{transition:"none"}})),y=I(()=>d.value.slice(1).map((N,O)=>{let{id:_}=N;const{layer:D}=d.value[O],F=r.get(_),q=i.get(_);return{id:_,...D,size:Number(F.value),position:q.value}})),w=N=>y.value.find(O=>O.id===N),E=en("createLayout"),b=Y(!1);xi(()=>{b.value=!0}),Ht(Pl,{register:(N,O)=>{let{id:_,order:D,position:F,layoutSize:q,elementSize:U,active:ce,disableTransitions:fe,absolute:ge}=O;o.set(_,D),i.set(_,F),r.set(_,q),a.set(_,ce),fe&&l.set(_,fe);const Q=_o(Vw,E==null?void 0:E.vnode).indexOf(N);Q>-1?s.value.splice(Q,0,_):s.value.push(_);const de=I(()=>y.value.findIndex(Ue=>Ue.id===_)),Ae=I(()=>n.value+d.value.length*2-de.value*2),Ut=I(()=>{const Ue=F.value==="left"||F.value==="right",Et=F.value==="right",In=F.value==="bottom",A={[F.value]:0,zIndex:Ae.value,transform:`translate${Ue?"X":"Y"}(${(ce.value?0:-110)*(Et||In?-1:1)}%)`,position:ge.value||n.value!==Im?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!b.value)return A;const L=y.value[de.value];if(!L)throw new Error(`[Vuetify] Could not find layout item "${_}"`);const V=h.value.get(_);return V&&(L[V.position]+=V.amount),{...A,height:Ue?`calc(100% - ${L.top}px - ${L.bottom}px)`:U.value?`${U.value}px`:void 0,left:Et?void 0:`${L.left}px`,right:Et?`${L.right}px`:void 0,top:F.value!=="bottom"?`${L.top}px`:void 0,bottom:F.value!=="top"?`${L.bottom}px`:void 0,width:Ue?U.value?`${U.value}px`:void 0:`calc(100% - ${L.left}px - ${L.right}px)`}}),it=I(()=>({zIndex:Ae.value-1}));return{layoutItemStyles:Ut,layoutItemScrimStyles:it,zIndex:Ae}},unregister:N=>{o.delete(N),i.delete(N),r.delete(N),a.delete(N),l.delete(N),s.value=s.value.filter(O=>O!==N)},mainRect:p,mainStyles:m,getLayoutItem:w,items:y,layoutRect:u,rootZIndex:n});const k=I(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),R=I(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:k,layoutStyles:R,getLayoutItem:w,items:y,layoutRect:u,layoutRef:c}}function Bw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=Zn(e,n),{aliases:i={},components:r={},directives:o={}}=s,a=TA(s.defaults),l=CA(s.display,s.ssr),c=GA(s.theme),u=xA(s.icons),h=$A(s.locale);return{install:f=>{for(const p in o)f.directive(p,o[p]);for(const p in r)f.component(p,r[p]);for(const p in i)f.component(p,pa({...i[p],name:p,aliasName:i[p].name}));if(c.install(f),f.provide(Bo,a),f.provide(Uh,l),f.provide(jo,c),f.provide(Vh,u),f.provide(xl,h),an&&s.ssr)if(f.$nuxt)f.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:p}=f;f.mount=function(){const m=p(...arguments);return Vs(()=>l.update()),f.mount=p,m}}fa.reset(),f.mixin({computed:{$vuetify(){return At({defaults:no.call(this,Bo),display:no.call(this,Uh),theme:no.call(this,jo),icons:no.call(this,Vh),locale:no.call(this,xl)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h}}const eR="3.1.13";Bw.version=eR;function no(t){var s,i,r;const e=this.$,n=(r=(s=e.parent)==null?void 0:s.provides)!=null?r:(i=e.vnode.appContext)==null?void 0:i.provides;if(n&&t in n)return n[t]}const tR={collapse:"keyboard_arrow_up",complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"cancel",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sortAsc:"arrow_upward",sortDesc:"arrow_downward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},nR={component:t=>os(NA,{...t,class:"material-icons"})},sR=Bw({theme:{themes:{light:{colors:{primary:"#AB47BC",secondary:"#CE93D8"}}}},icons:{defaultSet:"md",aliases:tR,sets:{md:nR}}});var iR=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let jw;const Fc=t=>jw=t,Hw=Symbol();function Bh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wo||(wo={}));function rR(){const t=Ec(!0),e=t.run(()=>Y({}));let n=[],s=[];const i=gr({install(r){Fc(i),i._a=r,r.provide(Hw,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!iR?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ww=()=>{};function Cm(t,e,n,s=Ww){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ef()&&Tc(i),i}function Wi(t,...e){t.slice().forEach(n=>{n(...e)})}function jh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Bh(i)&&Bh(s)&&t.hasOwnProperty(n)&&!Pe(s)&&!Es(s)?t[n]=jh(i,s):t[n]=s}return t}const oR=Symbol();function aR(t){return!Bh(t)||!t.hasOwnProperty(oR)}const{assign:fs}=Object;function lR(t){return!!(Pe(t)&&t.effect)}function cR(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=kc(n.state.value[t]);return fs(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=gr(I(()=>{Fc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=zw(t,c,e,n,s,!0),l}function zw(t,e,n={},s,i,r){let o;const a=fs({actions:{}},n),l={deep:!0};let c,u,h=gr([]),d=gr([]),f;const p=s.state.value[t];!r&&!p&&(s.state.value[t]={}),Y({});let m;function y(O){let _;c=u=!1,typeof O=="function"?(O(s.state.value[t]),_={type:wo.patchFunction,storeId:t,events:f}):(jh(s.state.value[t],O),_={type:wo.patchObject,payload:O,storeId:t,events:f});const D=m=Symbol();Vs().then(()=>{m===D&&(c=!0)}),u=!0,Wi(h,_,s.state.value[t])}const w=r?function(){const{state:_}=n,D=_?_():{};this.$patch(F=>{fs(F,D)})}:Ww;function E(){o.stop(),h=[],d=[],s._s.delete(t)}function b(O,_){return function(){Fc(s);const D=Array.from(arguments),F=[],q=[];function U(ge){F.push(ge)}function ce(ge){q.push(ge)}Wi(d,{args:D,name:O,store:R,after:U,onError:ce});let fe;try{fe=_.apply(this&&this.$id===t?this:R,D)}catch(ge){throw Wi(q,ge),ge}return fe instanceof Promise?fe.then(ge=>(Wi(F,ge),ge)).catch(ge=>(Wi(q,ge),Promise.reject(ge))):(Wi(F,fe),fe)}}const k={_p:s,$id:t,$onAction:Cm.bind(null,d),$patch:y,$reset:w,$subscribe(O,_={}){const D=Cm(h,O,_.detached,()=>F()),F=o.run(()=>Ke(()=>s.state.value[t],q=>{(_.flush==="sync"?u:c)&&O({storeId:t,type:wo.direct,events:f},q)},fs({},l,_)));return D},$dispose:E},R=At(k);s._s.set(t,R);const N=s._e.run(()=>(o=Ec(),o.run(()=>e())));for(const O in N){const _=N[O];if(Pe(_)&&!lR(_)||Es(_))r||(p&&aR(_)&&(Pe(_)?_.value=p[O]:jh(_,p[O])),s.state.value[t][O]=_);else if(typeof _=="function"){const D=b(O,_);N[O]=D,a.actions[O]=_}}return fs(R,N),fs(le(R),N),Object.defineProperty(R,"$state",{get:()=>s.state.value[t],set:O=>{y(_=>{fs(_,O)})}}),s._p.forEach(O=>{fs(R,o.run(()=>O({store:R,app:s._a,pinia:s,options:a})))}),p&&r&&n.hydrate&&n.hydrate(R.$state,p),c=!0,u=!0,R}function uR(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=js();return a=a||c&&De(Hw,null),a&&Fc(a),a=jw,a._s.has(s)||(r?zw(s,e,i,a):cR(s,i,a)),a._s.get(s)}return o.$id=s,o}const hR=rR();/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gi=typeof window<"u";function dR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function Bu(t,e){const n={};for(const s in e){const i=e[s];n[s]=bn(i)?i.map(t):t(i)}return n}const bo=()=>{},bn=Array.isArray,fR=/\/$/,pR=t=>t.replace(fR,"");function ju(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=yR(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function gR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&vr(e.matched[s],n.matched[i])&&qw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vR(t[n],e[n]))return!1;return!0}function vR(t,e){return bn(t)?km(t,e):bn(e)?km(e,t):t===e}function km(t,e){return bn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function yR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ho;(function(t){t.pop="pop",t.push="push"})(Ho||(Ho={}));var Eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Eo||(Eo={}));function _R(t){if(!t)if(Gi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pR(t)}const wR=/^[^#]+#/;function bR(t,e){return t.replace(wR,"#")+e}function ER(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $c=()=>({left:window.pageXOffset,top:window.pageYOffset});function TR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ER(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Am(t,e){return(history.state?history.state.position-e:-1)+t}const Hh=new Map;function IR(t,e){Hh.set(t,e)}function CR(t){const e=Hh.get(t);return Hh.delete(t),e}let SR=()=>location.protocol+"//"+location.host;function Kw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Sm(l,"")}return Sm(n,t)+s+i}function kR(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=Kw(t,location),p=n.value,m=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}y=m?d.position-m.position:0}else s(f);i.forEach(w=>{w(n.value,p,{delta:y,type:Ho.pop,direction:y?y>0?Eo.forward:Eo.back:Eo.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return r.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Ne({},d.state,{scroll:$c()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Rm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?$c():null}}function AR(t){const{history:e,location:n}=window,s={value:Kw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:SR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ne({},e.state,Rm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ne({},i.value,e.state,{forward:l,scroll:$c()});r(u.current,u,!0);const h=Ne({},Rm(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function RR(t){t=_R(t);const e=AR(t),n=kR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ne({location:"",base:t,go:s,createHref:bR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function NR(t){return typeof t=="string"||t&&typeof t=="object"}function Gw(t){return typeof t=="string"||typeof t=="symbol"}const us={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yw=Symbol("");var Nm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nm||(Nm={}));function yr(t,e){return Ne(new Error,{type:t,[Yw]:!0},e)}function Hn(t,e){return t instanceof Error&&Yw in t&&(e==null||!!(t.type&e))}const Om="[^/]+?",OR={sensitive:!1,strict:!1,start:!0,end:!0},xR=/[.+*?^${}()[\]/\\]/g;function PR(t,e){const n=Ne({},OR,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(xR,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:m,optional:y,regexp:w}=d;r.push({name:p,repeatable:m,optional:y});const E=w||Om;if(E!==Om){f+=10;try{new RegExp(`(${E})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${p}" (${E}): `+k.message)}}let b=m?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(b=y&&c.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),i+=b,f+=20,y&&(f+=-8),m&&(f+=-20),E===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=r[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:m,optional:y}=f,w=p in c?c[p]:"";if(bn(w)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const E=bn(w)?w.join("/"):w;if(!E)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function DR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function LR(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=DR(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(xm(s))return 1;if(xm(i))return-1}return i.length-s.length}function xm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MR={type:0,value:""},FR=/[a-zA-Z0-9_]/;function $R(t){if(!t)return[[]];if(t==="/")return[[MR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:FR.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function UR(t,e,n){const s=PR($R(t.path),n),i=Ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function VR(t,e){const n=[],s=new Map;e=Lm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,p=BR(u);p.aliasOf=d&&d.record;const m=Lm(e,u),y=[p];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of b)y.push(Ne({},p,{components:d?d.record.components:p.components,path:k,aliasOf:d?d.record:p}))}let w,E;for(const b of y){const{path:k}=b;if(h&&k[0]!=="/"){const R=h.record.path,N=R[R.length-1]==="/"?"":"/";b.path=h.record.path+(k&&N+k)}if(w=UR(b,h,m),d?d.alias.push(w):(E=E||w,E!==w&&E.alias.push(w),f&&u.name&&!Dm(w)&&o(u.name)),p.children){const R=p.children;for(let N=0;N<R.length;N++)r(R[N],w,d&&d.children[N])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return E?()=>{o(E)}:bo}function o(u){if(Gw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&LR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Dm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},p,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw yr(1,{location:u});m=d.record.name,f=Ne(Pm(h.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Pm(u.params,d.keys.map(E=>E.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(E=>E.re.test(p)),d&&(f=d.parse(p),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!d)throw yr(1,{location:u,currentLocation:h});m=d.record.name,f=Ne({},h.params,u.params),p=d.stringify(f)}const y=[];let w=d;for(;w;)y.unshift(w.record),w=w.parent;return{name:m,path:p,params:f,matched:y,meta:HR(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Pm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function BR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Dm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HR(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function Lm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qw(t,e){return e.children.some(n=>n===t||Qw(t,n))}const Xw=/#/g,WR=/&/g,zR=/\//g,qR=/=/g,KR=/\?/g,Jw=/\+/g,GR=/%5B/g,YR=/%5D/g,Zw=/%5E/g,QR=/%60/g,eb=/%7B/g,XR=/%7C/g,tb=/%7D/g,JR=/%20/g;function Sf(t){return encodeURI(""+t).replace(XR,"|").replace(GR,"[").replace(YR,"]")}function ZR(t){return Sf(t).replace(eb,"{").replace(tb,"}").replace(Zw,"^")}function Wh(t){return Sf(t).replace(Jw,"%2B").replace(JR,"+").replace(Xw,"%23").replace(WR,"%26").replace(QR,"`").replace(eb,"{").replace(tb,"}").replace(Zw,"^")}function eN(t){return Wh(t).replace(qR,"%3D")}function tN(t){return Sf(t).replace(Xw,"%23").replace(KR,"%3F")}function nN(t){return t==null?"":tN(t).replace(zR,"%2F")}function Dl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Jw," "),o=r.indexOf("="),a=Dl(o<0?r:r.slice(0,o)),l=o<0?null:Dl(r.slice(o+1));if(a in e){let c=e[a];bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Mm(t){let e="";for(let n in t){const s=t[n];if(n=eN(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(s)?s.map(r=>r&&Wh(r)):[s&&Wh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function iN(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const rN=Symbol(""),Fm=Symbol(""),Uc=Symbol(""),kf=Symbol(""),zh=Symbol("");function so(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gs(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(yr(4,{from:n,to:e})):h instanceof Error?a(h):NR(h)?a(yr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Hu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(oN(a)){const c=(a.__vccOpts||a)[e];c&&i.push(gs(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=dR(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&gs(d,n,s,r,o)()}))}}return i}function oN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $m(t){const e=De(Uc),n=De(kf),s=I(()=>e.resolve(xe(t.to))),i=I(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(vr.bind(null,u));if(d>-1)return d;const f=Um(l[c-2]);return c>1&&Um(u)===f&&h[h.length-1].path!==f?h.findIndex(vr.bind(null,l[c-2])):d}),r=I(()=>i.value>-1&&uN(n.params,s.value.params)),o=I(()=>i.value>-1&&i.value===n.matched.length-1&&qw(n.params,s.value.params));function a(l={}){return cN(l)?e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(bo):Promise.resolve()}return{route:s,href:I(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const aN=Bs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$m,setup(t,{slots:e}){const n=At($m(t)),{options:s}=De(Uc),i=I(()=>({[Vm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Vm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:os("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),lN=aN;function cN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uN(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!bn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Um(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vm=(t,e,n)=>t!=null?t:e!=null?e:n,hN=Bs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=De(zh),i=I(()=>t.route||s.value),r=De(Fm,0),o=I(()=>{let c=xe(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=I(()=>i.value.matched[o.value]);Ht(Fm,I(()=>o.value+1)),Ht(rN,a),Ht(zh,i);const l=Y();return Ke(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!vr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Bm(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=os(d,Ne({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Bm(n.default,{Component:y,route:c})||y}}});function Bm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dN=hN;function fN(t){const e=VR(t.routes,t),n=t.parseQuery||sN,s=t.stringifyQuery||Mm,i=t.history,r=so(),o=so(),a=so(),l=Sc(us);let c=us;Gi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bu.bind(null,A=>""+A),h=Bu.bind(null,nN),d=Bu.bind(null,Dl);function f(A,L){let V,J;return Gw(A)?(V=e.getRecordMatcher(A),J=L):J=A,e.addRoute(J,V)}function p(A){const L=e.getRecordMatcher(A);L&&e.removeRoute(L)}function m(){return e.getRoutes().map(A=>A.record)}function y(A){return!!e.getRecordMatcher(A)}function w(A,L){if(L=Ne({},L||l.value),typeof A=="string"){const g=ju(n,A,L.path),v=e.resolve({path:g.path},L),C=i.createHref(g.fullPath);return Ne(g,v,{params:d(v.params),hash:Dl(g.hash),redirectedFrom:void 0,href:C})}let V;if("path"in A)V=Ne({},A,{path:ju(n,A.path,L.path).path});else{const g=Ne({},A.params);for(const v in g)g[v]==null&&delete g[v];V=Ne({},A,{params:h(A.params)}),L.params=h(L.params)}const J=e.resolve(V,L),Te=A.hash||"";J.params=u(d(J.params));const Ye=gR(s,Ne({},A,{hash:ZR(Te),path:J.path})),pe=i.createHref(Ye);return Ne({fullPath:Ye,hash:Te,query:s===Mm?iN(A.query):A.query||{}},J,{redirectedFrom:void 0,href:pe})}function E(A){return typeof A=="string"?ju(n,A,l.value.path):Ne({},A)}function b(A,L){if(c!==A)return yr(8,{from:L,to:A})}function k(A){return O(A)}function R(A){return k(Ne(E(A),{replace:!0}))}function N(A){const L=A.matched[A.matched.length-1];if(L&&L.redirect){const{redirect:V}=L;let J=typeof V=="function"?V(A):V;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=E(J):{path:J},J.params={}),Ne({query:A.query,hash:A.hash,params:"path"in J?{}:A.params},J)}}function O(A,L){const V=c=w(A),J=l.value,Te=A.state,Ye=A.force,pe=A.replace===!0,g=N(V);if(g)return O(Ne(E(g),{state:typeof g=="object"?Ne({},Te,g.state):Te,force:Ye,replace:pe}),L||V);const v=V;v.redirectedFrom=L;let C;return!Ye&&mR(s,J,V)&&(C=yr(16,{to:v,from:J}),Ut(J,J,!0,!1)),(C?Promise.resolve(C):D(v,J)).catch(S=>Hn(S)?Hn(S,2)?S:Ae(S):Q(S,v,J)).then(S=>{if(S){if(Hn(S,2))return O(Ne({replace:pe},E(S.to),{state:typeof S.to=="object"?Ne({},Te,S.to.state):Te,force:Ye}),L||v)}else S=q(v,J,!0,pe,Te);return F(v,J,S),S})}function _(A,L){const V=b(A,L);return V?Promise.reject(V):Promise.resolve()}function D(A,L){let V;const[J,Te,Ye]=pN(A,L);V=Hu(J.reverse(),"beforeRouteLeave",A,L);for(const g of J)g.leaveGuards.forEach(v=>{V.push(gs(v,A,L))});const pe=_.bind(null,A,L);return V.push(pe),zi(V).then(()=>{V=[];for(const g of r.list())V.push(gs(g,A,L));return V.push(pe),zi(V)}).then(()=>{V=Hu(Te,"beforeRouteUpdate",A,L);for(const g of Te)g.updateGuards.forEach(v=>{V.push(gs(v,A,L))});return V.push(pe),zi(V)}).then(()=>{V=[];for(const g of A.matched)if(g.beforeEnter&&!L.matched.includes(g))if(bn(g.beforeEnter))for(const v of g.beforeEnter)V.push(gs(v,A,L));else V.push(gs(g.beforeEnter,A,L));return V.push(pe),zi(V)}).then(()=>(A.matched.forEach(g=>g.enterCallbacks={}),V=Hu(Ye,"beforeRouteEnter",A,L),V.push(pe),zi(V))).then(()=>{V=[];for(const g of o.list())V.push(gs(g,A,L));return V.push(pe),zi(V)}).catch(g=>Hn(g,8)?g:Promise.reject(g))}function F(A,L,V){for(const J of a.list())J(A,L,V)}function q(A,L,V,J,Te){const Ye=b(A,L);if(Ye)return Ye;const pe=L===us,g=Gi?history.state:{};V&&(J||pe?i.replace(A.fullPath,Ne({scroll:pe&&g&&g.scroll},Te)):i.push(A.fullPath,Te)),l.value=A,Ut(A,L,V,pe),Ae()}let U;function ce(){U||(U=i.listen((A,L,V)=>{if(!In.listening)return;const J=w(A),Te=N(J);if(Te){O(Ne(Te,{replace:!0}),J).catch(bo);return}c=J;const Ye=l.value;Gi&&IR(Am(Ye.fullPath,V.delta),$c()),D(J,Ye).catch(pe=>Hn(pe,12)?pe:Hn(pe,2)?(O(pe.to,J).then(g=>{Hn(g,20)&&!V.delta&&V.type===Ho.pop&&i.go(-1,!1)}).catch(bo),Promise.reject()):(V.delta&&i.go(-V.delta,!1),Q(pe,J,Ye))).then(pe=>{pe=pe||q(J,Ye,!1),pe&&(V.delta&&!Hn(pe,8)?i.go(-V.delta,!1):V.type===Ho.pop&&Hn(pe,20)&&i.go(-1,!1)),F(J,Ye,pe)}).catch(bo)}))}let fe=so(),ge=so(),_e;function Q(A,L,V){Ae(A);const J=ge.list();return J.length?J.forEach(Te=>Te(A,L,V)):console.error(A),Promise.reject(A)}function de(){return _e&&l.value!==us?Promise.resolve():new Promise((A,L)=>{fe.add([A,L])})}function Ae(A){return _e||(_e=!A,ce(),fe.list().forEach(([L,V])=>A?V(A):L()),fe.reset()),A}function Ut(A,L,V,J){const{scrollBehavior:Te}=t;if(!Gi||!Te)return Promise.resolve();const Ye=!V&&CR(Am(A.fullPath,0))||(J||!V)&&history.state&&history.state.scroll||null;return Vs().then(()=>Te(A,L,Ye)).then(pe=>pe&&TR(pe)).catch(pe=>Q(pe,A,L))}const it=A=>i.go(A);let Ue;const Et=new Set,In={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:m,resolve:w,options:t,push:k,replace:R,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:de,install(A){const L=this;A.component("RouterLink",lN),A.component("RouterView",dN),A.config.globalProperties.$router=L,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(l)}),Gi&&!Ue&&l.value===us&&(Ue=!0,k(i.location).catch(Te=>{}));const V={};for(const Te in us)V[Te]=I(()=>l.value[Te]);A.provide(Uc,L),A.provide(kf,At(V)),A.provide(zh,l);const J=A.unmount;Et.add(A),A.unmount=function(){Et.delete(A),Et.size<1&&(c=us,U&&U(),U=null,l.value=us,Ue=!1,_e=!1),J()}}};return In}function zi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function pN(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>vr(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vr(c,l))||i.push(l))}return[n,s,i]}function nb(){return De(Uc)}function sb(){return De(kf)}const ib=uR("app",()=>{const t=Y("Listify"),e=o=>{t.value=o},n=Y(!1),s=o=>{n.value=o},i=Y(!1);return{pageTitle:t,keyboard:n,inputFocus:i,setTitle:e,hideNavBar:s,setFocus:o=>{i.value=o}}});const Ss=Ge(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:s,disabled:i,reset:r,root:o,scoped:a}=kc(t);return Mr(s,{reset:r,root:o,scoped:a,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function tn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return Ge()({name:t,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(s,i){let{slots:r}=i;const o={onBeforeEnter(a){a.style.transformOrigin=s.origin},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${h}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&(a==null?void 0:a._transitionInitialStyles)){const{position:l,top:c,left:u,width:h,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=h||"",a.style.height=d||""}}};return()=>{const a=s.group?Nk:Hs;return os(a,{name:s.disabled?"":t,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:o},r.default)}}})}function rb(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Ge()({name:t,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,i){let{slots:r}=i;return()=>os(Hs,{name:s.disabled?"":t,css:!s.disabled,...s.disabled?{}:e},r.default)}})}function ob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=on(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}tn("fab-transition","center center","out-in");tn("dialog-bottom-transition");tn("dialog-top-transition");const gN=tn("fade-transition");tn("scale-transition");tn("scroll-x-transition");tn("scroll-x-reverse-transition");tn("scroll-y-transition");tn("scroll-y-reverse-transition");tn("slide-x-transition");tn("slide-x-reverse-transition");const AH=tn("slide-y-transition");tn("slide-y-reverse-transition");const mN=rb("expand-transition",ob()),RH=rb("expand-x-transition",ob("",!0));const Af=Fe({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Rf(t){return{dimensionStyles:I(()=>({height:me(t.height),maxHeight:me(t.maxHeight),maxWidth:me(t.maxWidth),minHeight:me(t.minHeight),minWidth:me(t.minWidth),width:me(t.width)}))}}function vN(t){return{aspectStyles:I(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const yN=Ge()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Af()},setup(t,e){let{slots:n}=e;const{aspectStyles:s}=vN(t),{dimensionStyles:i}=Rf(t);return lt(()=>{var r;return T("div",{class:"v-responsive",style:i.value},[T("div",{class:"v-responsive__sizer",style:s.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&T("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function _N(t,e){if(!Tf)return;const n=e.modifiers||{},s=e.value,{handler:i,options:r}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var h;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(h=t._observe)==null?void 0:h[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&i(u,a,l),u&&n.once?ab(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function ab(t,e){var s;const n=(s=t._observe)==null?void 0:s[e.instance.$.uid];!n||(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const wN={mounted:_N,unmounted:ab},bN=wN,EN=Fe({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Qa=(t,e)=>{let{slots:n}=e;const{transition:s,...i}=t,{component:r=Hs,...o}=typeof s=="object"?s:{};return os(r,Pi(typeof s=="string"?{name:s}:o,i),n)},lb=Ge()({name:"VImg",directives:{intersect:bN},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...EN()},emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:s}=e;const i=Y(""),r=Y(),o=Y(t.eager?"loading":"idle"),a=Y(),l=Y(),c=I(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=I(()=>c.value.aspect||a.value/l.value||0);Ke(()=>t.src,()=>{h(o.value!=="idle")}),Ke(u,(_,D)=>{!_&&D&&r.value&&y(r.value)}),ff(()=>h());function h(_){if(!(t.eager&&_)&&!(Tf&&!_&&!t.eager)){if(o.value="loading",c.value.lazySrc){const D=new Image;D.src=c.value.lazySrc,y(D,null)}!c.value.src||Vs(()=>{var D,F;if(n("loadstart",((D=r.value)==null?void 0:D.currentSrc)||c.value.src),(F=r.value)!=null&&F.complete){if(r.value.naturalWidth||f(),o.value==="error")return;u.value||y(r.value,null),d()}else u.value||y(r.value),p()})}}function d(){var _;p(),o.value="loaded",n("load",((_=r.value)==null?void 0:_.currentSrc)||c.value.src)}function f(){var _;o.value="error",n("error",((_=r.value)==null?void 0:_.currentSrc)||c.value.src)}function p(){const _=r.value;_&&(i.value=_.currentSrc||_.src)}let m=-1;function y(_){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const F=()=>{clearTimeout(m);const{naturalHeight:q,naturalWidth:U}=_;q||U?(a.value=U,l.value=q):!_.complete&&o.value==="loading"&&D!=null?m=window.setTimeout(F,D):(_.currentSrc.endsWith(".svg")||_.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};F()}const w=I(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),E=()=>{var F;if(!c.value.src||o.value==="idle")return null;const _=T("img",{class:["v-img__img",w.value],src:c.value.src,srcset:c.value.srcset,alt:t.alt,sizes:t.sizes,ref:r,onLoad:d,onError:f},null),D=(F=s.sources)==null?void 0:F.call(s);return T(Qa,{transition:t.transition,appear:!0},{default:()=>[Al(D?T("picture",{class:"v-img__picture"},[D,_]):_,[[$k,o.value==="loaded"]])]})},b=()=>T(Qa,{transition:t.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&T("img",{class:["v-img__img","v-img__img--preload",w.value],src:c.value.lazySrc,alt:t.alt},null)]}),k=()=>s.placeholder?T(Qa,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!s.error)&&T("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,R=()=>s.error?T(Qa,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&T("div",{class:"v-img__error"},[s.error()])]}):null,N=()=>t.gradient?T("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,O=Y(!1);{const _=Ke(u,D=>{D&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),_())})}return lt(()=>Al(T(yN,{class:["v-img",{"v-img--booting":!O.value}],style:{width:me(t.width==="auto"?a.value:t.width)},aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>T(vt,null,[T(E,null,null),T(b,null,null),T(N,null,null),T(k,null,null),T(R,null,null)]),default:s.default}),[[gf("intersect"),{handler:h,options:t.options},null,{once:!0}]])),{currentSrc:i,image:r,state:o,naturalWidth:a,naturalHeight:l}}}),cn=Fe({tag:{type:String,default:"div"}},"tag"),cb=Fe({text:String,...cn()},"v-toolbar-title"),ub=Ge()({name:"VToolbarTitle",props:cb(),setup(t,e){let{slots:n}=e;return lt(()=>{const s=!!(n.default||n.text||t.text);return T(t.tag,{class:"v-toolbar-title"},{default:()=>{var i;return[s&&T("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(i=n.default)==null?void 0:i.call(n)])]}})}),{}}}),Fr=Fe({border:[Boolean,Number,String]},"border");function $r(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Di();return{borderClasses:I(()=>{const s=Pe(t)?t.value:t.border,i=[];if(s===!0||s==="")i.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`border-${r}`);return i})}}const Ur=Fe({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Vr(t){return{elevationClasses:I(()=>{const n=Pe(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const Ws=Fe({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function zs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Di();return{roundedClasses:I(()=>{const s=Pe(t)?t.value:t.rounded,i=[];if(s===!0||s==="")i.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`rounded-${r}`);return i})}}function Nf(t){return Sw(()=>{const e=[],n={};return t.value.background&&(am(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(am(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Ll(t,e){const n=I(()=>({text:Pe(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Nf(n);return{textColorClasses:s,textColorStyles:i}}function _r(t,e){const n=I(()=>({background:Pe(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Nf(n);return{backgroundColorClasses:s,backgroundColorStyles:i}}const TN=[null,"prominent","default","comfortable","compact"],hb=Fe({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>TN.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Fr(),...Ur(),...Ws(),...cn({tag:"header"}),...Tn()},"v-toolbar"),jm=Ge()({name:"VToolbar",props:hb(),setup(t,e){var d;let{slots:n}=e;const{backgroundColorClasses:s,backgroundColorStyles:i}=_r(st(t,"color")),{borderClasses:r}=$r(t),{elevationClasses:o}=Vr(t),{roundedClasses:a}=zs(t),{themeClasses:l}=Bn(t),c=Y(!!(t.extended||((d=n.extension)==null?void 0:d.call(n)))),u=I(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),h=I(()=>c.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return Mr({VBtn:{variant:"text"}}),lt(()=>{var y;const f=!!(t.title||n.title),p=!!(n.image||t.image),m=(y=n.extension)==null?void 0:y.call(n);return c.value=!!(t.extended||m),T(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},s.value,r.value,o.value,a.value,l.value],style:[i.value]},{default:()=>[p&&T("div",{key:"image",class:"v-toolbar__image"},[n.image?T(Ss,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):T(lb,{key:"image-img",cover:!0,src:t.image},null)]),T(Ss,{defaults:{VTabs:{height:me(u.value)}}},{default:()=>{var w,E,b;return[T("div",{class:"v-toolbar__content",style:{height:me(u.value)}},[n.prepend&&T("div",{class:"v-toolbar__prepend"},[(w=n.prepend)==null?void 0:w.call(n)]),f&&T(ub,{key:"title",text:t.title},{text:n.title}),(E=n.default)==null?void 0:E.call(n),n.append&&T("div",{class:"v-toolbar__append"},[(b=n.append)==null?void 0:b.call(n)])])]}}),T(Ss,{defaults:{VTabs:{height:me(h.value)}}},{default:()=>[T(mN,null,{default:()=>[c.value&&T("div",{class:"v-toolbar__extension",style:{height:me(h.value)}},[m])]})]})]})}),{contentHeight:u,extensionHeight:h}}});function Vc(){const t=Y(!1);return xi(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:I(()=>t.value?void 0:{transition:"none !important"}),isBooted:Cc(t)}}const IN=Ge()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...hb(),...If(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Y(),i=bi(t,"modelValue"),r=I(()=>{var u,h,d,f;const l=(h=(u=s.value)==null?void 0:u.contentHeight)!=null?h:0,c=(f=(d=s.value)==null?void 0:d.extensionHeight)!=null?f:0;return l+c}),{ssrBootStyles:o}=Vc(),{layoutItemStyles:a}=Cf({id:t.name,order:I(()=>parseInt(t.order,10)),position:st(t,"location"),layoutSize:r,elementSize:r,active:i,absolute:st(t,"absolute")});return lt(()=>{const[l]=jm.filterProps(t);return T(jm,Pi({ref:s,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"}],style:{...a.value,height:void 0,...o.value}},l),n)}),{}}});const CN=[null,"default","comfortable","compact"],ga=Fe({density:{type:String,default:"default",validator:t=>CN.includes(t)}},"density");function ma(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Di();return{densityClasses:I(()=>`${e}--density-${t.density}`)}}const SN=["elevated","flat","tonal","outlined","text","plain"];function Of(t,e){return T(vt,null,[t&&T("span",{key:"overlay",class:`${e}__overlay`},null),T("span",{key:"underlay",class:`${e}__underlay`},null)])}const Bc=Fe({color:String,variant:{type:String,default:"elevated",validator:t=>SN.includes(t)}},"variant");function xf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Di();const n=I(()=>{const{variant:r}=xe(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=Nf(I(()=>{const{variant:r,color:o}=xe(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const db=Fe({divided:Boolean,...Fr(),...ga(),...Ur(),...Ws(),...cn(),...Tn(),...Bc()},"v-btn-group"),Hm=Ge()({name:"VBtnGroup",props:db(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=Bn(t),{densityClasses:i}=ma(t),{borderClasses:r}=$r(t),{elevationClasses:o}=Vr(t),{roundedClasses:a}=zs(t);Mr({VBtn:{height:"auto",color:st(t,"color"),density:st(t,"density"),flat:!0,variant:st(t,"variant")}}),lt(()=>T(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value]},n))}}),fb=Fe({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),kN=Fe({value:null,disabled:Boolean,selectedClass:String},"group-item");function AN(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=en("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=fa();Ht(Symbol.for(`${e.description}:id`),i);const r=De(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=st(t,"value"),a=I(()=>r.disabled.value||t.disabled);r.register({id:i,value:o,disabled:a},s),En(()=>{r.unregister(i)});const l=I(()=>r.isSelected(i)),c=I(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return Ke(l,u=>{s.emit("group:selected",{value:u})}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:u=>r.select(i,u),selectedClass:c,value:o,disabled:a,group:r}}function pb(t,e){let n=!1;const s=At([]),i=bi(t,"modelValue",[],d=>d==null?[]:gb(s,Jk(d)),d=>{const f=NN(s,d);return t.multiple?f:f[0]}),r=en("useGroup");function o(d,f){const p=d,m=Symbol.for(`${e.description}:id`),w=_o(m,r==null?void 0:r.vnode).indexOf(f);w>-1?s.splice(w,0,p):s.push(p)}function a(d){if(n)return;l();const f=s.findIndex(p=>p.id===d);s.splice(f,1)}function l(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!i.value.length&&(i.value=[d.id])}xi(()=>{l()}),En(()=>{n=!0});function c(d,f){const p=s.find(m=>m.id===d);if(!(f&&(p==null?void 0:p.disabled)))if(t.multiple){const m=i.value.slice(),y=m.findIndex(E=>E===d),w=~y;if(f=f!=null?f:!w,w&&t.mandatory&&m.length<=1||!w&&t.max!=null&&m.length+1>t.max)return;y<0&&f?m.push(d):y>=0&&!f&&m.splice(y,1),i.value=m}else{const m=i.value.includes(d);if(t.mandatory&&m)return;i.value=(f!=null?f:!m)?[d]:[]}}function u(d){if(t.multiple&&rr('This method is not supported when using "multiple" prop'),i.value.length){const f=i.value[0],p=s.findIndex(w=>w.id===f);let m=(p+d)%s.length,y=s[m];for(;y.disabled&&m!==p;)m=(m+d)%s.length,y=s[m];if(y.disabled)return;i.value=[s[m].id]}else{const f=s.find(p=>!p.disabled);f&&(i.value=[f.id])}}const h={register:o,unregister:a,selected:i,select:c,disabled:st(t,"disabled"),prev:()=>u(s.length-1),next:()=>u(1),isSelected:d=>i.value.includes(d),selectedClass:I(()=>t.selectedClass),items:I(()=>s),getItemIndex:d=>RN(s,d)};return Ht(e,h),h}function RN(t,e){const n=gb(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function gb(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];i.value!=null?e.find(r=>Iw(r,i.value))!=null&&n.push(i.id):e.includes(s)&&n.push(i.id)}return n}function NN(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];e.includes(i.id)&&n.push(i.value!=null?i.value:s)}return n}const Pf=Symbol.for("vuetify:v-btn-toggle");Ge()({name:"VBtnToggle",props:{...db(),...fb()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=pb(t,Pf);return lt(()=>{const[l]=Hm.filterProps(t);return T(Hm,Pi({class:"v-btn-toggle"},l),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]}})}),{next:i,prev:r,select:o}}});const ON=["x-small","small","default","large","x-large"],jc=Fe({size:{type:[String,Number],default:"default"}},"size");function Hc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Di();return Sw(()=>{let n,s;return Nl(ON,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:me(t.size),height:me(t.size)}),{sizeClasses:n,sizeStyles:s}})}const xN=Fe({color:String,start:Boolean,end:Boolean,icon:Ls,...jc(),...cn({tag:"i"}),...Tn()},"v-icon"),Dn=Ge()({name:"VIcon",props:xN(),setup(t,e){let{attrs:n,slots:s}=e,i;s.default&&(i=I(()=>{var h,d;const u=(h=s.default)==null?void 0:h.call(s);if(!!u)return(d=u.filter(f=>f.type===da&&f.children&&typeof f.children=="string")[0])==null?void 0:d.children}));const{themeClasses:r}=Bn(t),{iconData:o}=PA(i||t),{sizeClasses:a}=Hc(t),{textColorClasses:l,textColorStyles:c}=Ll(st(t,"color"));return lt(()=>T(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:me(t.size),height:me(t.size),width:me(t.size)},c.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var u;return[(u=s.default)==null?void 0:u.call(s)]}})),{}}});function mb(t){const e=Y(),n=Y(!1);if(Tf){const s=new IntersectionObserver(i=>{t==null||t(i,s),n.value=!!i.find(r=>r.isIntersecting)});En(()=>{s.disconnect()}),Ke(e,(i,r)=>{r&&(s.unobserve(r),n.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}const PN=Ge()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...jc(),...cn({tag:"div"}),...Tn()},setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=Y(),{themeClasses:o}=Bn(t),{sizeClasses:a,sizeStyles:l}=Hc(t),{textColorClasses:c,textColorStyles:u}=Ll(st(t,"color")),{textColorClasses:h,textColorStyles:d}=Ll(st(t,"bgColor")),{intersectionRef:f,isIntersecting:p}=mb(),{resizeRef:m,contentRect:y}=Uw(),w=I(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),E=I(()=>Number(t.width)),b=I(()=>l.value?Number(t.size):y.value?y.value.width:Math.max(E.value,32)),k=I(()=>s/(1-E.value/b.value)*2),R=I(()=>E.value/b.value*k.value),N=I(()=>me((100-w.value)/100*i));return ha(()=>{f.value=r.value,m.value=r.value}),lt(()=>T(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:w.value},{default:()=>[T("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${k.value} ${k.value}`},[T("circle",{class:["v-progress-circular__underlay",h.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":R.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),T("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":R.value,"stroke-dasharray":i,"stroke-dashoffset":N.value},null)]),n.default&&T("div",{class:"v-progress-circular__content"},[n.default({value:w.value})])]})),{}}});const qh=Symbol("rippleStop"),DN=80;function Wm(t,e){t.style.transform=e,t.style.webkitTransform=e}function Kh(t){return t.constructor.name==="TouchEvent"}function vb(t){return t.constructor.name==="KeyboardEvent"}const LN=function(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!vb(t)){const d=e.getBoundingClientRect(),f=Kh(t)?t.touches[t.touches.length-1]:t;s=f.clientX-d.left,i=f.clientY-d.top}let r=0,o=.3;(h=e._ripple)!=null&&h.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${s-r}px`,u=n.center?l:`${i-r}px`;return{radius:r,scale:o,x:c,y:u,centerX:a,centerY:l}},Ml={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:u}=LN(t,e,n),h=`${r*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,e.appendChild(s);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Wm(i,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Wm(i,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},i)}};function yb(t){return typeof t>"u"||!!t}function Wo(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[qh])){if(t[qh]=!0,Kh(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||vb(t),n._ripple.class&&(e.class=n._ripple.class),Kh(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Ml.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},DN)}else Ml.show(t,n,e)}}function zm(t){t[qh]=!0}function Yt(t){const e=t.currentTarget;if(!!(e!=null&&e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Yt(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Ml.hide(e)}}function _b(t){const e=t.currentTarget;!(e!=null&&e._ripple)||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let zo=!1;function wb(t){!zo&&(t.keyCode===nm.enter||t.keyCode===nm.space)&&(zo=!0,Wo(t))}function bb(t){zo=!1,Yt(t)}function Eb(t){zo&&(zo=!1,Yt(t))}function Tb(t,e,n){var o;const{value:s,modifiers:i}=e,r=yb(s);if(r||Ml.hide(t),t._ripple=(o=t._ripple)!=null?o:{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,Fh(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",zm,{passive:!0}),t.addEventListener("mousedown",zm);return}t.addEventListener("touchstart",Wo,{passive:!0}),t.addEventListener("touchend",Yt,{passive:!0}),t.addEventListener("touchmove",_b,{passive:!0}),t.addEventListener("touchcancel",Yt),t.addEventListener("mousedown",Wo),t.addEventListener("mouseup",Yt),t.addEventListener("mouseleave",Yt),t.addEventListener("keydown",wb),t.addEventListener("keyup",bb),t.addEventListener("blur",Eb),t.addEventListener("dragstart",Yt,{passive:!0})}else!r&&n&&Ib(t)}function Ib(t){t.removeEventListener("mousedown",Wo),t.removeEventListener("touchstart",Wo),t.removeEventListener("touchend",Yt),t.removeEventListener("touchmove",_b),t.removeEventListener("touchcancel",Yt),t.removeEventListener("mouseup",Yt),t.removeEventListener("mouseleave",Yt),t.removeEventListener("keydown",wb),t.removeEventListener("keyup",bb),t.removeEventListener("dragstart",Yt),t.removeEventListener("blur",Eb)}function MN(t,e){Tb(t,e,!1)}function FN(t){delete t._ripple,Ib(t)}function $N(t,e){if(e.value===e.oldValue)return;const n=yb(e.oldValue);Tb(t,e,n)}const Cb={mounted:MN,unmounted:FN,updated:$N};const qm={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Sb=Fe({location:String},"location");function kb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Mc();return{locationStyles:I(()=>{if(!t.location)return{};const{side:r,align:o}=iA(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[qm[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[qm[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const UN=Ge()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Sb({location:"top"}),...Ws(),...cn(),...Tn()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=bi(t,"modelValue"),{isRtl:i}=Mc(),{themeClasses:r}=Bn(t),{locationStyles:o}=kb(t),{textColorClasses:a,textColorStyles:l}=Ll(t,"color"),{backgroundColorClasses:c,backgroundColorStyles:u}=_r(I(()=>t.bgColor||t.color)),{backgroundColorClasses:h,backgroundColorStyles:d}=_r(t,"color"),{roundedClasses:f}=zs(t),{intersectionRef:p,isIntersecting:m}=mb(),y=I(()=>parseInt(t.max,10)),w=I(()=>parseInt(t.height,10)),E=I(()=>parseFloat(t.bufferValue)/y.value*100),b=I(()=>parseFloat(s.value)/y.value*100),k=I(()=>i.value!==t.reverse),R=I(()=>t.indeterminate?"fade-transition":"slide-x-transition"),N=I(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function O(_){if(!p.value)return;const{left:D,right:F,width:q}=p.value.getBoundingClientRect(),U=k.value?q-_.clientX+(F-q):_.clientX-D;s.value=Math.round(U/q*y.value)}return lt(()=>T(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&m.value,"v-progress-linear--reverse":k.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},f.value,r.value],style:{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?me(w.value):0,"--v-progress-linear-height":me(w.value),...o.value},role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:b.value,onClick:t.clickable&&O},{default:()=>[t.stream&&T("div",{key:"stream",class:["v-progress-linear__stream",a.value],style:{...l.value,[k.value?"left":"right"]:me(-w.value),borderTop:`${me(w.value/2)} dotted`,opacity:N.value,top:`calc(50% - ${me(w.value/4)})`,width:me(100-E.value,"%"),"--v-progress-linear-stream-to":me(w.value*(k.value?1:-1))}},null),T("div",{class:["v-progress-linear__background",c.value],style:[u.value,{opacity:N.value,width:me(t.stream?E.value:100,"%")}]},null),T(Hs,{name:R.value},{default:()=>[t.indeterminate?T("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>T("div",{key:_,class:["v-progress-linear__indeterminate",_,h.value],style:d.value},null))]):T("div",{class:["v-progress-linear__determinate",h.value],style:[d.value,{width:me(b.value,"%")}]},null)]}),n.default&&T("div",{class:"v-progress-linear__content"},[n.default({value:b.value,buffer:E.value})])]})),{}}}),VN=Fe({loading:[Boolean,String]},"loader");function BN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Di();return{loaderClasses:I(()=>({[`${e}--loading`]:t.loading}))}}function NH(t,e){var s;let{slots:n}=e;return T("div",{class:`${t.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:t.color,isActive:t.active}))||T(UN,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const jN=["static","relative","fixed","absolute","sticky"],HN=Fe({position:{type:String,validator:t=>jN.includes(t)}},"position");function WN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Di();return{positionClasses:I(()=>t.position?`${e}--${t.position}`:void 0)}}function zN(){var t,e;return(e=(t=en("useRouter"))==null?void 0:t.proxy)==null?void 0:e.$router}function Ab(t,e){const n=tw("RouterLink"),s=I(()=>!!(t.href||t.to)),i=I(()=>(s==null?void 0:s.value)||rm(e,"click")||rm(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:st(t,"href")};const r=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&I(()=>{var o,a;return t.exact?(o=r.isExactActive)==null?void 0:o.value:(a=r.isActive)==null?void 0:a.value}),href:I(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const Rb=Fe({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Wu=!1;function OH(t,e){let n=!1,s,i;an&&(Vs(()=>{window.addEventListener("popstate",r),s=t==null?void 0:t.beforeEach((o,a,l)=>{Wu?n?e(l):l():setTimeout(()=>n?e(l):l()),Wu=!0}),i=t==null?void 0:t.afterEach(()=>{Wu=!1})}),Tc(()=>{window.removeEventListener("popstate",r),s==null||s(),i==null||i()}));function r(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}function qN(t,e){Ke(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Vs(()=>{e(!0)})},{immediate:!0})}const KN=Fe({active:{type:Boolean,default:void 0},symbol:{type:null,default:Pf},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ls,appendIcon:Ls,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Fr(),...Ws(),...ga(),...Af(),...Ur(),...kN(),...VN(),...Sb(),...HN(),...Rb(),...jc(),...cn({tag:"button"}),...Tn(),...Bc({variant:"elevated"})},"VBtn"),or=Ge()({name:"VBtn",directives:{Ripple:Cb},props:KN(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=Bn(t),{borderClasses:r}=$r(t),{colorClasses:o,colorStyles:a,variantClasses:l}=xf(t),{densityClasses:c}=ma(t),{dimensionStyles:u}=Rf(t),{elevationClasses:h}=Vr(t),{loaderClasses:d}=BN(t),{locationStyles:f}=kb(t),{positionClasses:p}=WN(t),{roundedClasses:m}=zs(t),{sizeClasses:y,sizeStyles:w}=Hc(t),E=AN(t,t.symbol,!1),b=Ab(t,n),k=I(()=>{var _;return t.active!==void 0?t.active:b.isLink.value?(_=b.isActive)==null?void 0:_.value:E==null?void 0:E.isSelected.value}),R=I(()=>(E==null?void 0:E.disabled.value)||t.disabled),N=I(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),O=I(()=>{if(t.value!==void 0)return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});return qN(b,E==null?void 0:E.select),lt(()=>{var ce,fe;const _=b.isLink.value?"a":t.tag,D=!!(t.prependIcon||s.prepend),F=!!(t.appendIcon||s.append),q=!!(t.icon&&t.icon!==!0),U=(E==null?void 0:E.isSelected.value)&&(!b.isLink.value||((ce=b.isActive)==null?void 0:ce.value))||!E||((fe=b.isActive)==null?void 0:fe.value);return Al(T(_,{type:_==="a"?void 0:"button",class:["v-btn",E==null?void 0:E.selectedClass.value,{"v-btn--active":k.value,"v-btn--block":t.block,"v-btn--disabled":R.value,"v-btn--elevated":N.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},i.value,r.value,U?o.value:void 0,c.value,h.value,d.value,p.value,m.value,y.value,l.value],style:[U?a.value:void 0,u.value,f.value,w.value],disabled:R.value||void 0,href:b.href.value,onClick:ge=>{var _e;R.value||((_e=b.navigate)==null||_e.call(b,ge),E==null||E.toggle())},value:O.value},{default:()=>{var ge,_e;return[Of(!0,"v-btn"),!t.icon&&D&&T("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?T(Ss,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},s.prepend):T(Dn,{key:"prepend-icon",icon:t.prependIcon},null)]),T("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&q?T(Dn,{key:"content-icon",icon:t.icon},null):T(Ss,{key:"content-defaults",disabled:!q,defaults:{VIcon:{icon:t.icon}}},s.default)]),!t.icon&&F&&T("span",{key:"append",class:"v-btn__append"},[s.append?T(Ss,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},s.append):T(Dn,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&T("span",{key:"loader",class:"v-btn__loader"},[(_e=(ge=s.loader)==null?void 0:ge.call(s))!=null?_e:T(PN,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[gf("ripple"),!R.value&&t.ripple,null]])}),{}}}),Km=Ge()({name:"VAppBarNavIcon",props:{icon:{type:Ls,default:"$menu"}},setup(t,e){let{slots:n}=e;return lt(()=>T(or,{class:"v-app-bar-nav-icon",icon:t.icon},n)),{}}}),GN=Ge()({name:"VAppBarTitle",props:cb(),setup(t,e){let{slots:n}=e;return lt(()=>T(ub,Pi(t,{class:"v-app-bar-title"}),n)),{}}}),YN=Ef("flex-grow-1","div","VSpacer"),Gh=Symbol.for("vuetify:list");function xH(){const t=De(Gh,{hasPrepend:Y(!1),updateHasPrepend:()=>null}),e={hasPrepend:Y(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return Ht(Gh,e),t}function QN(){return De(Gh,null)}const XN={open:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(n){const r=new Set;r.add(e);let o=i.get(e);for(;o!=null;)r.add(o),o=i.get(o);return r}else return s.delete(e),s},select:()=>null},Nb={open:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(n){let r=i.get(e);for(s.add(e);r!=null&&r!==e;)s.add(r),r=i.get(r);return s}else s.delete(e);return s},select:()=>null},JN={open:Nb.open,select:t=>{let{id:e,value:n,opened:s,parents:i}=t;if(!n)return s;const r=[];let o=i.get(e);for(;o!=null;)r.push(o),o=i.get(o);return new Set(r)}},Df=t=>{const e={select:n=>{let{id:s,value:i,selected:r}=n;if(s=le(s),t&&!i){const o=Array.from(r.entries()).reduce((a,l)=>{let[c,u]=l;return u==="on"?[...a,c]:a},[]);if(o.length===1&&o[0]===s)return r}return r.set(s,i?"on":"off"),r},in:(n,s,i)=>{let r=new Map;for(const o of n||[])r=e.select({id:o,value:!0,selected:new Map(r),children:s,parents:i});return r},out:n=>{const s=[];for(const[i,r]of n.entries())r==="on"&&s.push(i);return s}};return e},Ob=t=>{const e=Df(t);return{select:s=>{let{selected:i,id:r,...o}=s;r=le(r);const a=i.has(r)?new Map([[r,i.get(r)]]):new Map;return e.select({...o,id:r,selected:a})},in:(s,i,r)=>{let o=new Map;return s!=null&&s.length&&(o=e.in(s.slice(0,1),i,r)),o},out:(s,i,r)=>e.out(s,i,r)}},ZN=t=>{const e=Df(t);return{select:s=>{let{id:i,selected:r,children:o,...a}=s;return i=le(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...a})},in:e.in,out:e.out}},eO=t=>{const e=Ob(t);return{select:s=>{let{id:i,selected:r,children:o,...a}=s;return i=le(i),o.has(i)?r:e.select({id:i,selected:r,children:o,...a})},in:e.in,out:e.out}},tO=t=>{const e={select:n=>{let{id:s,value:i,selected:r,children:o,parents:a}=n;s=le(s);const l=new Map(r),c=[s];for(;c.length;){const h=c.shift();r.set(h,i?"on":"off"),o.has(h)&&c.push(...o.get(h))}let u=a.get(s);for(;u;){const h=o.get(u),d=h.every(p=>r.get(p)==="on"),f=h.every(p=>!r.has(p)||r.get(p)==="off");r.set(u,d?"on":f?"off":"indeterminate"),u=a.get(u)}return t&&!i&&Array.from(r.entries()).reduce((d,f)=>{let[p,m]=f;return m==="on"?[...d,p]:d},[]).length===0?l:r},in:(n,s,i)=>{let r=new Map;for(const o of n||[])r=e.select({id:o,value:!0,selected:new Map(r),children:s,parents:i});return r},out:(n,s)=>{const i=[];for(const[r,o]of n.entries())o==="on"&&!s.has(r)&&i.push(r);return i}};return e},qo=Symbol.for("vuetify:nested"),xb={id:Y(),root:{register:()=>null,unregister:()=>null,parents:Y(new Map),children:Y(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:Y(new Set),selected:Y(new Map),selectedValues:Y([])}},PH=Fe({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),DH=t=>{let e=!1;const n=Y(new Map),s=Y(new Map),i=bi(t,"opened",t.opened,h=>new Set(h),h=>[...h.values()]),r=I(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return eO(t.mandatory);case"leaf":return ZN(t.mandatory);case"independent":return Df(t.mandatory);case"single-independent":return Ob(t.mandatory);case"classic":default:return tO(t.mandatory)}}),o=I(()=>{if(typeof t.openStrategy=="object")return t.openStrategy;switch(t.openStrategy){case"list":return JN;case"single":return XN;case"multiple":default:return Nb}}),a=bi(t,"selected",t.selected,h=>r.value.in(h,n.value,s.value),h=>r.value.out(h,n.value,s.value));En(()=>{e=!0});function l(h){const d=[];let f=h;for(;f!=null;)d.unshift(f),f=s.value.get(f);return d}const c=en("nested"),u={id:Y(),root:{opened:i,selected:a,selectedValues:I(()=>{const h=[];for(const[d,f]of a.value.entries())f==="on"&&h.push(d);return h}),register:(h,d,f)=>{d&&h!==d&&s.value.set(h,d),f&&n.value.set(h,[]),d!=null&&n.value.set(d,[...n.value.get(d)||[],h])},unregister:h=>{var f;if(e)return;n.value.delete(h);const d=s.value.get(h);if(d){const p=(f=n.value.get(d))!=null?f:[];n.value.set(d,p.filter(m=>m!==h))}s.value.delete(h),i.value.delete(h)},open:(h,d,f)=>{c.emit("click:open",{id:h,value:d,path:l(h),event:f});const p=o.value.open({id:h,value:d,opened:new Set(i.value),children:n.value,parents:s.value,event:f});p&&(i.value=p)},openOnSelect:(h,d,f)=>{const p=o.value.select({id:h,value:d,selected:new Map(a.value),opened:new Set(i.value),children:n.value,parents:s.value,event:f});p&&(i.value=p)},select:(h,d,f)=>{c.emit("click:select",{id:h,value:d,path:l(h),event:f});const p=r.value.select({id:h,value:d,selected:new Map(a.value),children:n.value,parents:s.value,event:f});p&&(a.value=p),u.root.openOnSelect(h,d,f)},children:n,parents:s}};return Ht(qo,u),u.root},nO=(t,e)=>{const n=De(qo,xb),s=Symbol(fa()),i=I(()=>{var o;return(o=t.value)!=null?o:s}),r={...n,id:i,open:(o,a)=>n.root.open(i.value,o,a),openOnSelect:(o,a)=>n.root.openOnSelect(i.value,o,a),isOpen:I(()=>n.root.opened.value.has(i.value)),parent:I(()=>n.root.parents.value.get(i.value)),select:(o,a)=>n.root.select(i.value,o,a),isSelected:I(()=>n.root.selected.value.get(le(i.value))==="on"),isIndeterminate:I(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:I(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,e),En(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),e&&Ht(qo,r),r},LH=()=>{const t=De(qo,xb);Ht(qo,{...t,isGroupActivator:!0})};const sO=Fe({start:Boolean,end:Boolean,icon:Ls,image:String,...ga(),...Ws(),...jc(),...cn(),...Tn(),...Bc({variant:"flat"})},"v-avatar"),Gm=Ge()({name:"VAvatar",props:sO(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=Bn(t),{colorClasses:i,colorStyles:r,variantClasses:o}=xf(t),{densityClasses:a}=ma(t),{roundedClasses:l}=zs(t),{sizeClasses:c,sizeStyles:u}=Hc(t);return lt(()=>T(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},s.value,i.value,a.value,l.value,c.value,o.value],style:[r.value,u.value]},{default:()=>{var h;return[t.image?T(lb,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?T(Dn,{key:"icon",icon:t.icon},null):(h=n.default)==null?void 0:h.call(n),Of(!1,"v-avatar")]}})),{}}}),iO=Ef("v-list-item-subtitle"),rO=Ef("v-list-item-title"),oO=Ge()({name:"VListItem",directives:{Ripple:Cb},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Ls,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Ls,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:im,onClickOnce:im,...Fr(),...ga(),...Af(),...Ur(),...Ws(),...Rb(),...cn(),...Tn(),...Bc({variant:"text"})},emits:{click:t=>!0},setup(t,e){let{attrs:n,slots:s,emit:i}=e;const r=Ab(t,n),o=I(()=>{var Q;return(Q=t.value)!=null?Q:r.href.value}),{select:a,isSelected:l,isIndeterminate:c,isGroupActivator:u,root:h,parent:d,openOnSelect:f}=nO(o,!1),p=QN(),m=I(()=>{var Q;return t.active!==!1&&(t.active||((Q=r.isActive)==null?void 0:Q.value)||l.value)}),y=I(()=>t.link!==!1&&r.isLink.value),w=I(()=>!t.disabled&&t.link!==!1&&(t.link||r.isClickable.value||t.value!=null&&!!p)),E=I(()=>t.rounded||t.nav),b=I(()=>{var Q;return{color:m.value&&(Q=t.activeColor)!=null?Q:t.color,variant:t.variant}});Ke(()=>{var Q;return(Q=r.isActive)==null?void 0:Q.value},Q=>{Q&&d.value!=null&&h.open(d.value,!0),Q&&f(Q)},{immediate:!0});const{themeClasses:k}=Bn(t),{borderClasses:R}=$r(t),{colorClasses:N,colorStyles:O,variantClasses:_}=xf(b),{densityClasses:D}=ma(t),{dimensionStyles:F}=Rf(t),{elevationClasses:q}=Vr(t),{roundedClasses:U}=zs(E),ce=I(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),fe=I(()=>({isActive:m.value,select:a,isSelected:l.value,isIndeterminate:c.value}));function ge(Q){var de;i("click",Q),!(u||!w.value)&&((de=r.navigate)==null||de.call(r,Q),t.value!=null&&a(!l.value,Q))}function _e(Q){(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),ge(Q))}return lt(()=>{const Q=y.value?"a":t.tag,de=!p||l.value||m.value,Ae=s.title||t.title,Ut=s.subtitle||t.subtitle,it=!!(t.appendAvatar||t.appendIcon),Ue=!!(it||s.append),Et=!!(t.prependAvatar||t.prependIcon),In=!!(Et||s.prepend);return p==null||p.updateHasPrepend(In),Al(T(Q,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":t.disabled,"v-list-item--link":w.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!In&&(p==null?void 0:p.hasPrepend.value),[`${t.activeClass}`]:t.activeClass&&m.value},k.value,R.value,de?N.value:void 0,D.value,q.value,ce.value,U.value,_.value],style:[de?O.value:void 0,F.value],href:r.href.value,tabindex:w.value?0:void 0,onClick:ge,onKeydown:w.value&&!y.value&&_e},{default:()=>{var A;return[Of(w.value||m.value,"v-list-item"),In&&T("div",{key:"prepend",class:"v-list-item__prepend"},[s.prepend?T(Ss,{key:"prepend-defaults",disabled:!Et,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var L;return[(L=s.prepend)==null?void 0:L.call(s,fe.value)]}}):T(vt,null,[t.prependAvatar&&T(Gm,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&T(Dn,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),T("div",{class:"v-list-item__content","data-no-activator":""},[Ae&&T(rO,{key:"title"},{default:()=>{var L,V;return[(V=(L=s.title)==null?void 0:L.call(s,{title:t.title}))!=null?V:t.title]}}),Ut&&T(iO,{key:"subtitle"},{default:()=>{var L,V;return[(V=(L=s.subtitle)==null?void 0:L.call(s,{subtitle:t.subtitle}))!=null?V:t.subtitle]}}),(A=s.default)==null?void 0:A.call(s,fe.value)]),Ue&&T("div",{key:"append",class:"v-list-item__append"},[s.append?T(Ss,{key:"append-defaults",disabled:!it,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var L;return[(L=s.append)==null?void 0:L.call(s,fe.value)]}}):T(vt,null,[t.appendIcon&&T(Dn,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&T(Gm,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])]}}),[[gf("ripple"),w.value&&t.ripple]])}),{}}});function aO(t){let{rootEl:e,isSticky:n,layoutItemStyles:s}=t;const i=Y(!1),r=Y(0),o=I(()=>{const c=typeof i.value=="boolean"?"top":i.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,i.value?{[c]:me(r.value)}:{top:s.value.top}]});xi(()=>{Ke(n,c=>{c?window.addEventListener("scroll",l,{passive:!0}):window.removeEventListener("scroll",l)},{immediate:!0})}),En(()=>{document.removeEventListener("scroll",l)});let a=0;function l(){var p;const c=a>window.scrollY?"up":"down",u=e.value.getBoundingClientRect(),h=parseFloat((p=s.value.top)!=null?p:0),d=window.scrollY-Math.max(0,r.value-h),f=u.height+Math.max(r.value,h)-window.scrollY-window.innerHeight;u.height<window.innerHeight-h?(i.value="top",r.value=h):c==="up"&&i.value==="bottom"||c==="down"&&i.value==="top"?(r.value=window.scrollY+u.top,i.value=!0):c==="down"&&f<=0?(r.value=0,i.value="bottom"):c==="up"&&d<=0&&(r.value=u.top+d,i.value="top"),a=window.scrollY}return{isStuck:i,stickyStyles:o}}const lO=100,cO=20;function Ym(t){const e=1.41421356237;return(t<0?-1:1)*Math.sqrt(Math.abs(t))*e}function Qm(t){if(t.length<2)return 0;if(t.length===2)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const s=Ym(e),i=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(i-s)*Math.abs(i),n===t.length-1&&(e*=.5)}return Ym(e)*1e3}function uO(){const t={};function e(i){Array.from(i.changedTouches).forEach(r=>{var a;((a=t[r.identifier])!=null?a:t[r.identifier]=new tA(cO)).push([i.timeStamp,r])})}function n(i){Array.from(i.changedTouches).forEach(r=>{delete t[r.identifier]})}function s(i){var c;const r=(c=t[i])==null?void 0:c.values().reverse();if(!r)throw new Error(`No samples for touch id ${i}`);const o=r[0],a=[],l=[];for(const u of r){if(o[0]-u[0]>lO)break;a.push({t:u[0],d:u[1].clientX}),l.push({t:u[0],d:u[1].clientY})}return{x:Qm(a),y:Qm(l),get direction(){const{x:u,y:h}=this,[d,f]=[Math.abs(u),Math.abs(h)];return d>f&&u>=0?"right":d>f&&u<=0?"left":f>d&&h>=0?"down":f>d&&h<=0?"up":hO()}}}return{addMovement:e,endTouch:n,getVelocity:s}}function hO(){throw new Error}function dO(t){let{isActive:e,isTemporary:n,width:s,touchless:i,position:r}=t;xi(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",b,{passive:!0})}),En(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",b)});const o=I(()=>["left","right"].includes(r.value)),{addMovement:a,endTouch:l,getVelocity:c}=uO();let u=!1;const h=Y(!1),d=Y(0),f=Y(0);let p;function m(R,N){return(r.value==="left"?R:r.value==="right"?document.documentElement.clientWidth-R:r.value==="top"?R:r.value==="bottom"?document.documentElement.clientHeight-R:qi())-(N?s.value:0)}function y(R){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const O=r.value==="left"?(R-f.value)/s.value:r.value==="right"?(document.documentElement.clientWidth-R-f.value)/s.value:r.value==="top"?(R-f.value)/s.value:r.value==="bottom"?(document.documentElement.clientHeight-R-f.value)/s.value:qi();return N?Math.max(0,Math.min(1,O)):O}function w(R){if(i.value)return;const N=R.changedTouches[0].clientX,O=R.changedTouches[0].clientY,_=25,D=r.value==="left"?N<_:r.value==="right"?N>document.documentElement.clientWidth-_:r.value==="top"?O<_:r.value==="bottom"?O>document.documentElement.clientHeight-_:qi(),F=e.value&&(r.value==="left"?N<s.value:r.value==="right"?N>document.documentElement.clientWidth-s.value:r.value==="top"?O<s.value:r.value==="bottom"?O>document.documentElement.clientHeight-s.value:qi());(D||F||e.value&&n.value)&&(u=!0,p=[N,O],f.value=m(o.value?N:O,e.value),d.value=y(o.value?N:O),l(R),a(R))}function E(R){const N=R.changedTouches[0].clientX,O=R.changedTouches[0].clientY;if(u){if(!R.cancelable){u=!1;return}const D=Math.abs(N-p[0]),F=Math.abs(O-p[1]);(o.value?D>F&&D>3:F>D&&F>3)?(h.value=!0,u=!1):(o.value?F:D)>3&&(u=!1)}if(!h.value)return;R.preventDefault(),a(R);const _=y(o.value?N:O,!1);d.value=Math.max(0,Math.min(1,_)),_>1?f.value=m(o.value?N:O,!0):_<0&&(f.value=m(o.value?N:O,!1))}function b(R){if(u=!1,!h.value)return;a(R),h.value=!1;const N=c(R.changedTouches[0].identifier),O=Math.abs(N.x),_=Math.abs(N.y);(o.value?O>_&&O>400:_>O&&_>3)?e.value=N.direction===({left:"right",right:"left",top:"down",bottom:"up"}[r.value]||qi()):e.value=d.value>.5}const k=I(()=>h.value?{transform:r.value==="left"?`translateX(calc(-100% + ${d.value*s.value}px))`:r.value==="right"?`translateX(calc(100% - ${d.value*s.value}px))`:r.value==="top"?`translateY(calc(-100% + ${d.value*s.value}px))`:r.value==="bottom"?`translateY(calc(100% - ${d.value*s.value}px))`:qi(),transition:"none"}:void 0);return{isDragging:h,dragProgress:d,dragStyles:k}}function qi(){throw new Error}const fO=["start","end","left","right","top","bottom"],pO=Ge()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:t=>fO.includes(t)},sticky:Boolean,...Fr(),...Ur(),...If(),...Ws(),...cn({tag:"nav"}),...Tn()},emits:{"update:modelValue":t=>!0,"update:rail":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const{isRtl:r}=Mc(),{themeClasses:o}=Bn(t),{borderClasses:a}=$r(t),{backgroundColorClasses:l,backgroundColorStyles:c}=_r(st(t,"color")),{elevationClasses:u}=Vr(t),{mobile:h}=SA(),{roundedClasses:d}=zs(t),f=zN(),p=bi(t,"modelValue",null,Ae=>!!Ae),{ssrBootStyles:m}=Vc(),y=Y(),w=Y(!1),E=I(()=>t.rail&&t.expandOnHover&&w.value?Number(t.width):Number(t.rail?t.railWidth:t.width)),b=I(()=>$h(t.location,r.value)),k=I(()=>!t.permanent&&(h.value||t.temporary)),R=I(()=>t.sticky&&!k.value&&b.value!=="bottom");t.expandOnHover&&t.rail!=null&&Ke(w,Ae=>s("update:rail",!Ae)),t.disableResizeWatcher||Ke(k,Ae=>!t.permanent&&Vs(()=>p.value=!Ae)),!t.disableRouteWatcher&&f&&Ke(f.currentRoute,()=>k.value&&(p.value=!1)),Ke(()=>t.permanent,Ae=>{Ae&&(p.value=!0)}),ff(()=>{t.modelValue!=null||k.value||(p.value=t.permanent||!h.value)});const{isDragging:N,dragProgress:O,dragStyles:_}=dO({isActive:p,isTemporary:k,width:E,touchless:st(t,"touchless"),position:b}),D=I(()=>{const Ae=k.value?0:t.rail&&t.expandOnHover?Number(t.railWidth):E.value;return N.value?Ae*O.value:Ae}),{layoutItemStyles:F,layoutRect:q,layoutItemScrimStyles:U}=Cf({id:t.name,order:I(()=>parseInt(t.order,10)),position:b,layoutSize:D,elementSize:E,active:I(()=>p.value||N.value),disableTransitions:I(()=>N.value),absolute:I(()=>t.absolute||R.value&&typeof ce.value!="string")}),{isStuck:ce,stickyStyles:fe}=aO({rootEl:y,isSticky:R,layoutItemStyles:F}),ge=_r(I(()=>typeof t.scrim=="string"?t.scrim:null)),_e=I(()=>({...N.value?{opacity:O.value*.2,transition:"none"}:void 0,...q.value?{left:me(q.value.left),right:me(q.value.right),top:me(q.value.top),bottom:me(q.value.bottom)}:void 0,...U.value}));Mr({VList:{bgColor:"transparent"}});function Q(){w.value=!0}function de(){w.value=!1}return lt(()=>{const Ae=i.image||t.image;return T(vt,null,[T(t.tag,Pi({ref:y,onMouseenter:Q,onMouseleave:de,class:["v-navigation-drawer",`v-navigation-drawer--${b.value}`,{"v-navigation-drawer--expand-on-hover":t.expandOnHover,"v-navigation-drawer--floating":t.floating,"v-navigation-drawer--is-hovering":w.value,"v-navigation-drawer--rail":t.rail,"v-navigation-drawer--temporary":k.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":R.value},o.value,l.value,a.value,u.value,d.value],style:[c.value,F.value,_.value,m.value,fe.value]},n),{default:()=>{var Ut,it,Ue,Et;return[Ae&&T("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(Ut=i.image)==null?void 0:Ut.call(i,{image:t.image}):T("img",{src:t.image,alt:""},null)]),i.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(it=i.prepend)==null?void 0:it.call(i)]),T("div",{class:"v-navigation-drawer__content"},[(Ue=i.default)==null?void 0:Ue.call(i)]),i.append&&T("div",{class:"v-navigation-drawer__append"},[(Et=i.append)==null?void 0:Et.call(i)])]}}),T(Hs,{name:"fade-transition"},{default:()=>[k.value&&(N.value||p.value)&&!!t.scrim&&T("div",{class:["v-navigation-drawer__scrim",ge.backgroundColorClasses.value],style:[_e.value,ge.backgroundColorStyles.value],onClick:()=>p.value=!1},null)]})])}),{isStuck:ce}}}),gO={key:"0",class:"btn_cont ml-3"},mO=Bs({__name:"AppBar",setup(t){const e=ib(),n=Y(!1),s=sb(),i=nb(),r=I(()=>s.path==="/list");return(o,a)=>(Rn(),Ug(vt,null,[T(IN,{flat:""},{default:tt(()=>[T(gN,{group:"","hide-on-leave":""},{default:tt(()=>[xe(r)?(Rn(),Ug("div",gO,[T(Km,null,{default:tt(()=>[T(or,{icon:"arrow_back",onClick:a[0]||(a[0]=l=>xe(i).push("/"))})]),_:1})])):(Rn(),Is(GN,{key:"1"},{default:tt(()=>[Lr("h3",null,wC(xe(e).pageTitle),1)]),_:1})),T(YN,{key:"2"}),xe(r)?(Rn(),Is(or,{key:"3",onClick:a[1]||(a[1]=l=>xe(i).push("/"))},{default:tt(()=>[ir("done")]),_:1})):(Rn(),Is(Km,{key:"4",variant:"text",onClick:a[2]||(a[2]=Fk(l=>n.value=!n.value,["stop"]))},{default:tt(()=>[T(Dn,{icon:"notifications"})]),_:1}))]),_:1})]),_:1}),T(pO,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value=l),location:"top",app:"",temporary:""},{default:tt(()=>[T(oO,null,{default:tt(()=>[ir(" Become a sponsor ")]),_:1})]),_:1},8,["modelValue"])],64))}});const vO=Ge()({name:"VMain",props:{scrollable:Boolean,...cn({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:s}=XA(),{ssrBootStyles:i}=Vc();return lt(()=>T(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[s.value,i.value]},{default:()=>{var r,o;return[t.scrollable?T("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(o=n.default)==null?void 0:o.call(n)]}})),{}}}),yO=Bs({__name:"View",setup(t){return(e,n)=>{const s=Z_("router-view");return Rn(),Is(vO,{class:"d-flex flex-column"},{default:tt(()=>[T(s,null,{default:tt(({Component:i})=>[T(Hs,{name:"lol",mode:"out-in"},{default:tt(()=>[(Rn(),Is(tw(i)))]),_:2},1024)]),_:1})]),_:1})}}});const _O=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},wO=_O(yO,[["__scopeId","data-v-5327645d"]]);const bO=Ge()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Fr(),...ga(),...Ur(),...Ws(),...If({name:"bottom-navigation"}),...cn({tag:"header"}),...fb({modelValue:!0,selectedClass:"v-btn--selected"}),...Tn()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{themeClasses:s}=YA(),{borderClasses:i}=$r(t),{backgroundColorClasses:r,backgroundColorStyles:o}=_r(st(t,"bgColor")),{densityClasses:a}=ma(t),{elevationClasses:l}=Vr(t),{roundedClasses:c}=zs(t),{ssrBootStyles:u}=Vc(),h=I(()=>Number(t.height)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0)),d=st(t,"active"),{layoutItemStyles:f}=Cf({id:t.name,order:I(()=>parseInt(t.order,10)),position:I(()=>"bottom"),layoutSize:I(()=>d.value?h.value:0),elementSize:h,active:d,absolute:st(t,"absolute")});return pb(t,Pf),Mr({VBtn:{color:st(t,"color"),density:st(t,"density"),stacked:I(()=>t.mode!=="horizontal"),variant:"text"}},{scoped:!0}),lt(()=>T(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":d.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":t.mode==="shift"},s.value,r.value,i.value,a.value,l.value,c.value],style:[o.value,f.value,{height:me(h.value),transform:`translateY(${me(d.value?0:100,"%")})`},u.value]},{default:()=>[n.default&&T("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}}),EO=Lr("span",null,"Lists",-1),TO=Lr("span",null,"Timer",-1),IO=Lr("span",null,"Settings",-1),CO=Bs({__name:"BottomNav",setup(t){const e=ib(),n=nb(),s=sb(),i=a=>{n.push({name:a})},r=I({get(){return s.name=="Home"?"Home":"List"},set(){}}),o=I({get(){return s.name},set(){}});return(a,l)=>(Rn(),Is(bO,{height:xe(e).keyboard?0:56,modelValue:xe(o),"onUpdate:modelValue":l[3]||(l[3]=c=>Pe(o)?o.value=c:null),mandatory:"force",mode:"shift",color:"#db88fa",grow:""},{default:tt(()=>[T(or,{onClick:l[0]||(l[0]=c=>i("Home")),value:xe(r)},{default:tt(()=>[T(Dn,null,{default:tt(()=>[ir("list")]),_:1}),EO]),_:1},8,["value"]),T(or,{onClick:l[1]||(l[1]=c=>i("Timer")),value:"Timer"},{default:tt(()=>[T(Dn,null,{default:tt(()=>[ir("timer")]),_:1}),TO]),_:1}),T(or,{onClick:l[2]||(l[2]=c=>i("Settings")),value:"Settings"},{default:tt(()=>[T(Dn,null,{default:tt(()=>[ir("settings")]),_:1}),IO]),_:1})]),_:1},8,["height","modelValue"]))}});const SO=Ge()({name:"VApp",props:{...QA({fullHeight:!0}),...Tn()},setup(t,e){let{slots:n}=e;const s=Bn(t),{layoutClasses:i,layoutStyles:r,getLayoutItem:o,items:a,layoutRef:l}=ZA(t),{rtlClasses:c}=Mc();return lt(()=>{var u;return T("div",{ref:l,class:["v-application",s.themeClasses.value,i.value,c.value],style:r.value},[T("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:a,theme:s}}}),kO=Bs({__name:"Default",setup(t){return(e,n)=>(Rn(),Is(SO,null,{default:tt(()=>[T(mO),T(wO),T(CO)]),_:1}))}}),AO=[{path:"/",component:kO,children:[{path:"",name:"Home",component:()=>ti(()=>import("./Home.b9488baf.js"),["assets/Home.b9488baf.js","assets/lists.0a840d2b.js","assets/lists.f7bfd9e0.css","assets/forwardRefs.a10f9ca4.js","assets/VContainer.aa5757ce.js","assets/VContainer.37f80755.css","assets/Home.88c87462.css"])},{path:"/login",name:"Login",component:()=>ti(()=>import("./Login.d73c2ac9.js"),["assets/Login.d73c2ac9.js","assets/VTextField.7cb7a7d6.js","assets/forwardRefs.a10f9ca4.js","assets/VTextField.f91f0908.css","assets/VContainer.aa5757ce.js","assets/VContainer.37f80755.css","assets/Login.48642141.css"])},{path:"/timer",name:"Timer",component:()=>ti(()=>import("./Timer.69146a4d.js"),["assets/Timer.69146a4d.js","assets/VContainer.aa5757ce.js","assets/VContainer.37f80755.css"])},{path:"/settings",name:"Settings",component:()=>ti(()=>import("./Settings.caf5353c.js"),["assets/Settings.caf5353c.js","assets/VContainer.aa5757ce.js","assets/VContainer.37f80755.css"])},{path:"/list",name:"List",component:()=>ti(()=>import("./List.cb6b3555.js"),["assets/List.cb6b3555.js","assets/lists.0a840d2b.js","assets/lists.f7bfd9e0.css","assets/VTextField.7cb7a7d6.js","assets/forwardRefs.a10f9ca4.js","assets/VTextField.f91f0908.css","assets/VContainer.aa5757ce.js","assets/VContainer.37f80755.css","assets/List.c34834f9.css"]),children:[{path:":id",component:()=>ti(()=>import("./List.cb6b3555.js"),["assets/List.cb6b3555.js","assets/lists.0a840d2b.js","assets/lists.f7bfd9e0.css","assets/VTextField.7cb7a7d6.js","assets/forwardRefs.a10f9ca4.js","assets/VTextField.f91f0908.css","assets/VContainer.aa5757ce.js","assets/VContainer.37f80755.css","assets/List.c34834f9.css"])}]}]}],RO=fN({history:RR({}.BASE_URL),routes:AO});function NO(t){qk(),t.use(hR).use(sR).use(RO)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(t,e){if(!t)throw Br(e)},Br=function(t){return new Error("Firebase Database ("+Pb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OO=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Db(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new xO;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lb=function(t){const e=Db(t);return Wc.encodeByteArray(e,!0)},Fl=function(t){return Lb(t).replace(/\./g,"")},$l=function(t){try{return Wc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){return Mb(void 0,t)}function Mb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DO(n)||(t[n]=Mb(t[n],e[n]));return t}function DO(t){return t!=="__proto__"}/**
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
 */function LO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MO=()=>LO().__FIREBASE_DEFAULTS__,FO=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$O=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$l(t[1]);return e&&JSON.parse(e)},Lf=()=>{try{return MO()||FO()||$O()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fb=t=>{var e,n;return(n=(e=Lf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UO=t=>{const e=Fb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},VO=()=>{var t;return(t=Lf())===null||t===void 0?void 0:t.config},$b=t=>{var e;return(e=Lf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function BO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Ub(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jO(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bb(){return Pb.NODE_ADMIN===!0}function Ff(){try{return typeof indexedDB=="object"}catch{return!1}}function jb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function HO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=WO,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?zO(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,s)}}function zO(t,e){return t.replace(qO,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Go($l(r[0])||""),n=Go($l(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},KO=function(t){const e=Hb(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},GO=function(t){const e=Hb(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ul(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Xm(r)&&Xm(o)){if(!Yo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Xm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function QO(t,e){const n=new XO(t,e);return n.subscribe.bind(n)}class XO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");JO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=zu),i.error===void 0&&(i.error=zu),i.complete===void 0&&(i.complete=zu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zu(){}function ZO(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,W(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const t1=1e3,n1=2,s1=4*60*60*1e3,i1=.5;function Jm(t,e=t1,n=n1){const s=e*Math.pow(n,t),i=Math.round(i1*s*(Math.random()-.5)*2);return Math.min(s1,s+i)}/**
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
 */function hn(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class r1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ko;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a1(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o1(t){return t===ni?void 0:t}function a1(t){return t.instantiationMode==="EAGER"}/**
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
 */class l1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new r1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const c1={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},u1=Se.INFO,h1={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},d1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=h1[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hr{constructor(e){this.name=e,this._logLevel=u1,this._logHandler=d1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const f1=(t,e)=>e.some(n=>t instanceof n);let Zm,ev;function p1(){return Zm||(Zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g1(){return ev||(ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wb=new WeakMap,Qh=new WeakMap,zb=new WeakMap,qu=new WeakMap,$f=new WeakMap;function m1(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ks(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wb.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function v1(t){if(Qh.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ks(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y1(t){Xh=t(Xh)}function _1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ku(this),e,...n);return zb.set(s,e.sort?e.sort():[e]),ks(s)}:g1().includes(t)?function(...e){return t.apply(Ku(this),e),ks(Wb.get(this))}:function(...e){return ks(t.apply(Ku(this),e))}}function w1(t){return typeof t=="function"?_1(t):(t instanceof IDBTransaction&&v1(t),f1(t,p1())?new Proxy(t,Xh):t)}function ks(t){if(t instanceof IDBRequest)return m1(t);if(qu.has(t))return qu.get(t);const e=w1(t);return e!==t&&(qu.set(t,e),$f.set(e,t)),e}const Ku=t=>$f.get(t);function qb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ks(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ks(o.result),l.oldVersion,l.newVersion,ks(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const b1=["get","getKey","getAll","getAllKeys","count"],E1=["put","add","delete","clear"],Gu=new Map;function tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gu.get(e))return Gu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=E1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||b1.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Gu.set(e,r),r}y1(t=>({...t,get:(e,n,s)=>tv(e,n)||t.get(e,n,s),has:(e,n)=>!!tv(e,n)||t.has(e,n)}));/**
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
 */class T1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function I1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",nv="0.9.7";/**
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
 */const Ei=new Hr("@firebase/app"),C1="@firebase/app-compat",S1="@firebase/analytics-compat",k1="@firebase/analytics",A1="@firebase/app-check-compat",R1="@firebase/app-check",N1="@firebase/auth",O1="@firebase/auth-compat",x1="@firebase/database",P1="@firebase/database-compat",D1="@firebase/functions",L1="@firebase/functions-compat",M1="@firebase/installations",F1="@firebase/installations-compat",$1="@firebase/messaging",U1="@firebase/messaging-compat",V1="@firebase/performance",B1="@firebase/performance-compat",j1="@firebase/remote-config",H1="@firebase/remote-config-compat",W1="@firebase/storage",z1="@firebase/storage-compat",q1="@firebase/firestore",K1="@firebase/firestore-compat",G1="firebase",Y1="9.19.1";/**
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
 */const Zh="[DEFAULT]",Q1={[Jh]:"fire-core",[C1]:"fire-core-compat",[k1]:"fire-analytics",[S1]:"fire-analytics-compat",[R1]:"fire-app-check",[A1]:"fire-app-check-compat",[N1]:"fire-auth",[O1]:"fire-auth-compat",[x1]:"fire-rtdb",[P1]:"fire-rtdb-compat",[D1]:"fire-fn",[L1]:"fire-fn-compat",[M1]:"fire-iid",[F1]:"fire-iid-compat",[$1]:"fire-fcm",[U1]:"fire-fcm-compat",[V1]:"fire-perf",[B1]:"fire-perf-compat",[j1]:"fire-rc",[H1]:"fire-rc-compat",[W1]:"fire-gcs",[z1]:"fire-gcs-compat",[q1]:"fire-fst",[K1]:"fire-fst-compat","fire-js":"fire-js",[G1]:"fire-js-all"};/**
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
 */const Vl=new Map,ed=new Map;function X1(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qt(t){const e=t.name;if(ed.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,t);for(const n of Vl.values())X1(n,t);return!0}function Li(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const J1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},As=new qs("app","Firebase",J1);/**
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
 */class Z1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=Y1;function Kb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw As.create("bad-app-name",{appName:String(i)});if(n||(n=VO()),!n)throw As.create("no-options");const r=Vl.get(i);if(r){if(Yo(n,r.options)&&Yo(s,r.config))return r;throw As.create("duplicate-app",{appName:i})}const o=new l1(i);for(const l of ed.values())o.addComponent(l);const a=new Z1(n,s,o);return Vl.set(i,a),a}function qc(t=Zh){const e=Vl.get(t);if(!e&&t===Zh)return Kb();if(!e)throw As.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=(s=Q1[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}qt(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ex="firebase-heartbeat-database",tx=1,Qo="firebase-heartbeat-store";let Yu=null;function Gb(){return Yu||(Yu=qb(ex,tx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qo)}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),Yu}async function nx(t){try{return(await Gb()).transaction(Qo).objectStore(Qo).get(Yb(t))}catch(e){if(e instanceof un)Ei.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function sv(t,e){try{const s=(await Gb()).transaction(Qo,"readwrite");return await s.objectStore(Qo).put(e,Yb(t)),s.done}catch(n){if(n instanceof un)Ei.warn(n.message);else{const s=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(s.message)}}}function Yb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sx=1024,ix=30*24*60*60*1e3;class rx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ax(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=iv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ix}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iv(),{heartbeatsToSend:n,unsentEntries:s}=ox(this._heartbeatsCache.heartbeats),i=Fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iv(){return new Date().toISOString().substring(0,10)}function ox(t,e=sx){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rv(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ax{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ff()?jb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rv(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lx(t){qt(new $t("platform-logger",e=>new T1(e),"PRIVATE")),qt(new $t("heartbeat",e=>new rx(e),"PRIVATE")),_t(Jh,nv,t),_t(Jh,nv,"esm2017"),_t("fire-js","")}lx("");var cx="firebase",ux="9.19.1";/**
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
 */_t(cx,ux,"app");var hx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,Uf=Uf||{},re=hx||self;function Bl(){}function Kc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function va(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dx(t){return Object.prototype.hasOwnProperty.call(t,Qu)&&t[Qu]||(t[Qu]=++fx)}var Qu="closure_uid_"+(1e9*Math.random()>>>0),fx=0;function px(t,e,n){return t.call.apply(t.bind,arguments)}function gx(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ot=px:Ot=gx,Ot.apply(null,arguments)}function Xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ks(){this.s=this.s,this.o=this.o}var mx=0;Ks.prototype.s=!1;Ks.prototype.na=function(){!this.s&&(this.s=!0,this.M(),mx!=0)&&dx(this)};Ks.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ov(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var vx=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",Bl,e),re.removeEventListener("test",Bl,e)}catch{}return t}();function jl(t){return/^[\s\xa0]*$/.test(t)}var av=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xu(t,e){return t<e?-1:t>e?1:0}function Gc(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Gc().indexOf(t)!=-1}function Bf(t){return Bf[" "](t),t}Bf[" "]=Bl;function yx(t){var e=bx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _x=Nn("Opera"),br=Nn("Trident")||Nn("MSIE"),Xb=Nn("Edge"),td=Xb||br,Jb=Nn("Gecko")&&!(Gc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),wx=Gc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function Zb(){var t=re.document;return t?t.documentMode:void 0}var Hl;e:{var Ju="",Zu=function(){var t=Gc();if(Jb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xb)return/Edge\/([\d\.]+)/.exec(t);if(br)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wx)return/WebKit\/(\S+)/.exec(t);if(_x)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zu&&(Ju=Zu?Zu[1]:""),br){var eh=Zb();if(eh!=null&&eh>parseFloat(Ju)){Hl=String(eh);break e}}Hl=Ju}var bx={};function Ex(){return yx(function(){let t=0;const e=av(String(Hl)).split("."),n=av("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Xu(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Xu(i[2].length==0,r[2].length==0)||Xu(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var nd;if(re.document&&br){var lv=Zb();nd=lv||parseInt(Hl,10)||void 0}else nd=void 0;var Tx=nd;function Xo(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jb){e:{try{Bf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ix[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xo.X.h.call(this)}}bt(Xo,xt);var Ix={2:"touch",3:"pen",4:"mouse"};Xo.prototype.h=function(){Xo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ya="closure_listenable_"+(1e6*Math.random()|0),Cx=0;function Sx(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Cx,this.ba=this.ea=!1}function Yc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function e0(t){const e={};for(const n in t)e[n]=t[n];return e}const cv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t0(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<cv.length;r++)n=cv[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Qc(t){this.src=t,this.g={},this.h=0}Qc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=id(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Sx(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function sd(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Qb(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Yc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function id(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Hf="closure_lm_"+(1e6*Math.random()|0),th={};function n0(t,e,n,s,i){if(s&&s.once)return i0(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)n0(t,e[r],n,s,i);return null}return n=qf(n),t&&t[ya]?t.N(e,n,va(s)?!!s.capture:!!s,i):s0(t,e,n,!1,s,i)}function s0(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=va(i)?!!i.capture:!!i,a=zf(t);if(a||(t[Hf]=a=new Qc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=kx(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)vx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(o0(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kx(){function t(n){return e.call(t.src,t.listener,n)}const e=Ax;return t}function i0(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)i0(t,e[r],n,s,i);return null}return n=qf(n),t&&t[ya]?t.O(e,n,va(s)?!!s.capture:!!s,i):s0(t,e,n,!0,s,i)}function r0(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)r0(t,e[r],n,s,i);else s=va(s)?!!s.capture:!!s,n=qf(n),t&&t[ya]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=id(r,n,s,i),-1<n&&(Yc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=zf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=id(e,n,s,i)),(n=-1<t?e[t]:null)&&Wf(n))}function Wf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ya])sd(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(o0(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zf(e))?(sd(n,t),n.h==0&&(n.src=null,e[Hf]=null)):Yc(t)}}}function o0(t){return t in th?th[t]:th[t]="on"+t}function Ax(t,e){if(t.ba)t=!0;else{e=new Xo(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Wf(t),t=n.call(s,e)}return t}function zf(t){return t=t[Hf],t instanceof Qc?t:null}var nh="__closure_events_fn_"+(1e9*Math.random()>>>0);function qf(t){return typeof t=="function"?t:(t[nh]||(t[nh]=function(e){return t.handleEvent(e)}),t[nh])}function pt(){Ks.call(this),this.i=new Qc(this),this.P=this,this.I=null}bt(pt,Ks);pt.prototype[ya]=!0;pt.prototype.removeEventListener=function(t,e,n,s){r0(this,t,e,n,s)};function wt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(s,t),t0(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ja(o,s,!0,e)&&i}if(o=e.g=t,i=Ja(o,s,!0,e)&&i,i=Ja(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ja(o,s,!1,e)&&i}pt.prototype.M=function(){if(pt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Yc(n[s]);delete t.g[e],t.h--}}this.I=null};pt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};pt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ja(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&sd(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Kf=re.JSON.stringify;function Rx(){var t=c0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nx{constructor(){this.h=this.g=null}add(e,n){const s=a0.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var a0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ox,t=>t.reset());class Ox{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xx(t){re.setTimeout(()=>{throw t},0)}function l0(t,e){rd||Px(),od||(rd(),od=!0),c0.add(t,e)}var rd;function Px(){var t=re.Promise.resolve(void 0);rd=function(){t.then(Dx)}}var od=!1,c0=new Nx;function Dx(){for(var t;t=Rx();){try{t.h.call(t.g)}catch(n){xx(n)}var e=a0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}od=!1}function Xc(t,e){pt.call(this),this.h=t||1,this.g=e||re,this.j=Ot(this.lb,this),this.l=Date.now()}bt(Xc,pt);G=Xc.prototype;G.ca=!1;G.R=null;G.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),wt(this,"tick"),this.ca&&(Gf(this),this.start()))}};G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}G.M=function(){Xc.X.M.call(this),Gf(this),delete this.g};function Yf(t,e,n){if(typeof t=="function")n&&(t=Ot(t,n));else if(t&&typeof t.handleEvent=="function")t=Ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function u0(t){t.g=Yf(()=>{t.g=null,t.i&&(t.i=!1,u0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Lx extends Ks{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:u0(this)}M(){super.M(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jo(t){Ks.call(this),this.h=t,this.g={}}bt(Jo,Ks);var uv=[];function h0(t,e,n,s){Array.isArray(n)||(n&&(uv[0]=n.toString()),n=uv);for(var i=0;i<n.length;i++){var r=n0(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function d0(t){jf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wf(e)},t),t.g={}}Jo.prototype.M=function(){Jo.X.M.call(this),d0(this)};Jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jc(){this.g=!0}Jc.prototype.Aa=function(){this.g=!1};function Mx(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Fx(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Xi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ux(t,n)+(s?" "+s:"")})}function $x(t,e){t.info(function(){return"TIMEOUT: "+e})}Jc.prototype.info=function(){};function Ux(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kf(n)}catch{return e}}var Fi={},hv=null;function Zc(){return hv=hv||new pt}Fi.Pa="serverreachability";function f0(t){xt.call(this,Fi.Pa,t)}bt(f0,xt);function Zo(t){const e=Zc();wt(e,new f0(e))}Fi.STAT_EVENT="statevent";function p0(t,e){xt.call(this,Fi.STAT_EVENT,t),this.stat=e}bt(p0,xt);function Mt(t){const e=Zc();wt(e,new p0(e,t))}Fi.Qa="timingevent";function g0(t,e){xt.call(this,Fi.Qa,t),this.size=e}bt(g0,xt);function _a(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var eu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},m0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qf(){}Qf.prototype.h=null;function dv(t){return t.h||(t.h=t.i())}function v0(){}var wa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xf(){xt.call(this,"d")}bt(Xf,xt);function Jf(){xt.call(this,"c")}bt(Jf,xt);var ad;function tu(){}bt(tu,Qf);tu.prototype.g=function(){return new XMLHttpRequest};tu.prototype.i=function(){return{}};ad=new tu;function ba(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Jo(this),this.O=Vx,t=td?125:void 0,this.T=new Xc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new y0}function y0(){this.i=null,this.g="",this.h=!1}var Vx=45e3,ld={},Wl={};G=ba.prototype;G.setTimeout=function(t){this.O=t};function cd(t,e,n){t.K=1,t.v=su(es(e)),t.s=n,t.P=!0,_0(t,null)}function _0(t,e){t.F=Date.now(),Ea(t),t.A=es(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),k0(n.i,"t",s),t.C=0,n=t.l.H,t.h=new y0,t.g=G0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Lx(Ot(t.La,t,t.g),t.N)),h0(t.S,t.g,"readystatechange",t.ib),e=t.H?e0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zo(),Mx(t.j,t.u,t.A,t.m,t.U,t.s)}G.ib=function(t){t=t.target;const e=this.L;e&&qn(t)==3?e.l():this.La(t)};G.La=function(t){try{if(t==this.g)e:{const u=qn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||td||this.g&&(this.h.h||this.g.fa()||mv(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Zo(3):Zo(2)),nu(this);var n=this.g.aa();this.Y=n;t:if(w0(this)){var s=mv(this.g);t="";var i=s.length,r=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ci(this),To(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Fx(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jl(a)){var c=a;break t}}c=null}if(n=c)Xi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ud(this,n);else{this.i=!1,this.o=3,Mt(12),ci(this),To(this);break e}}this.P?(b0(this,u,o),td&&this.i&&u==3&&(h0(this.S,this.T,"tick",this.hb),this.T.start())):(Xi(this.j,this.m,o,null),ud(this,o)),u==4&&ci(this),this.i&&!this.I&&(u==4?W0(this.l,this):(this.i=!1,Ea(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Mt(12)):(this.o=0,Mt(13)),ci(this),To(this)}}}catch{}finally{}};function w0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function b0(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Bx(t,n),i==Wl){e==4&&(t.o=4,Mt(14),s=!1),Xi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ld){t.o=4,Mt(15),Xi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Xi(t.j,t.m,i,null),ud(t,i);w0(t)&&i!=Wl&&i!=ld&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Mt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rp(e),e.K=!0,Mt(11))):(Xi(t.j,t.m,n,"[Invalid Chunked Response]"),ci(t),To(t))}G.hb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(nu(this),b0(this,t,e),this.i&&t!=4&&Ea(this))}};function Bx(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Wl:(n=Number(e.substring(n,s)),isNaN(n)?ld:(s+=1,s+n>e.length?Wl:(e=e.substr(s,n),t.C=s+n,e)))}G.cancel=function(){this.I=!0,ci(this)};function Ea(t){t.V=Date.now()+t.O,E0(t,t.O)}function E0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_a(Ot(t.gb,t),e)}function nu(t){t.B&&(re.clearTimeout(t.B),t.B=null)}G.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?($x(this.j,this.A),this.K!=2&&(Zo(),Mt(17)),ci(this),this.o=2,To(this)):E0(this,this.V-t)};function To(t){t.l.G==0||t.I||W0(t.l,t)}function ci(t){nu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gf(t.T),d0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ud(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||hd(n.h,t))){if(!t.J&&hd(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Kl(n),ou(n);else break e;ip(n),Mt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=_a(Ot(n.cb,n),6e3));if(1>=N0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ui(n,11)}else if((t.J||n.g==t)&&Kl(n),!jl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zf(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,ze(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=K0(s,s.H?s.ka:null,s.V),o.J){O0(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(nu(a),Ea(a)),s.g=o}else j0(s);0<n.i.length&&au(n)}else c[0]!="stop"&&c[0]!="close"||ui(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ui(n,7):sp(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Zo(4)}catch{}}function jx(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Hx(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function T0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Hx(t),s=jx(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var I0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mi){this.h=e!==void 0?e:t.h,zl(this,t.j),this.s=t.s,this.g=t.g,ql(this,t.m),this.l=t.l,e=t.i;var n=new ea;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fv(this,n),this.o=t.o}else t&&(n=String(t).match(I0))?(this.h=!!e,zl(this,n[1]||"",!0),this.s=uo(n[2]||""),this.g=uo(n[3]||"",!0),ql(this,n[4]),this.l=uo(n[5]||"",!0),fv(this,n[6]||"",!0),this.o=uo(n[7]||"")):(this.h=!!e,this.i=new ea(null,this.h))}mi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ho(e,pv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ho(e,pv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ho(n,n.charAt(0)=="/"?Kx:qx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ho(n,Yx)),t.join("")};function es(t){return new mi(t)}function zl(t,e,n){t.j=n?uo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ql(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fv(t,e,n){e instanceof ea?(t.i=e,Qx(t.i,t.h)):(n||(e=ho(e,Gx)),t.i=new ea(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function su(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function uo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ho(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pv=/[#\/\?@]/g,qx=/[#\?:]/g,Kx=/[#\?]/g,Gx=/[#\?@]/g,Yx=/#/g;function ea(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gs(t){t.g||(t.g=new Map,t.h=0,t.i&&Wx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=ea.prototype;G.add=function(t,e){Gs(this),this.i=null,t=Wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function C0(t,e){Gs(t),e=Wr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function S0(t,e){return Gs(t),e=Wr(t,e),t.g.has(e)}G.forEach=function(t,e){Gs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};G.oa=function(){Gs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};G.W=function(t){Gs(this);let e=[];if(typeof t=="string")S0(this,t)&&(e=e.concat(this.g.get(Wr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Gs(this),this.i=null,t=Wr(this,t),S0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function k0(t,e,n){C0(t,e),0<n.length&&(t.i=null,t.g.set(Wr(t,e),Vf(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Qx(t,e){e&&!t.j&&(Gs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(C0(this,s),k0(this,i,n))},t)),t.j=e}var Xx=class{constructor(t,e){this.h=t,this.g=e}};function A0(t){this.l=t||Jx,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ga&&re.g.Ga()&&re.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jx=10;function R0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function N0(t){return t.h?1:t.g?t.g.size:0}function hd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zf(t,e){t.g?t.g.add(e):t.h=e}function O0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}A0.prototype.cancel=function(){if(this.i=x0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function x0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vf(t.i)}function ep(){}ep.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)};ep.prototype.parse=function(t){return re.JSON.parse(t,void 0)};function Zx(){this.g=new ep}function eP(t,e,n){const s=n||"";try{T0(t,function(i,r){let o=i;va(i)&&(o=Kf(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function tP(t,e){const n=new Jc;if(re.Image){const s=new Image;s.onload=Xa(Za,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Xa(Za,n,s,"TestLoadImage: error",!1,e),s.onabort=Xa(Za,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Xa(Za,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Za(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ta(t){this.l=t.ac||null,this.j=t.jb||!1}bt(Ta,Qf);Ta.prototype.g=function(){return new iu(this.l,this.j)};Ta.prototype.i=function(t){return function(){return t}}({});function iu(t,e){pt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=tp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(iu,pt);var tp=0;G=iu.prototype;G.open=function(t,e){if(this.readyState!=tp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ta(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||re).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ia(this)),this.readyState=tp};G.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;P0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function P0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}G.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ia(this):ta(this),this.readyState==3&&P0(this)}};G.Va=function(t){this.g&&(this.response=this.responseText=t,Ia(this))};G.Ua=function(t){this.g&&(this.response=t,Ia(this))};G.ga=function(){this.g&&Ia(this)};function Ia(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ta(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ta(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(iu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nP=re.JSON.parse;function Xe(t){pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=D0,this.K=this.L=!1}bt(Xe,pt);var D0="",sP=/^https?$/i,iP=["POST","PUT"];G=Xe.prototype;G.Ka=function(t){this.L=t};G.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ad.g(),this.C=this.u?dv(this.u):dv(ad),this.g.onreadystatechange=Ot(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){gv(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=re.FormData&&t instanceof re.FormData,!(0<=Qb(iP,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{F0(this),0<this.B&&((this.K=rP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.qa,this)):this.A=Yf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){gv(this,r)}};function rP(t){return br&&Ex()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.qa=function(){typeof Uf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function gv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,L0(t),ru(t)}function L0(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),ru(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ru(this,!0)),Xe.X.M.call(this)};G.Ha=function(){this.s||(this.F||this.v||this.l?M0(this):this.fb())};G.fb=function(){M0(this)};function M0(t){if(t.h&&typeof Uf<"u"&&(!t.C[1]||qn(t)!=4||t.aa()!=2)){if(t.v&&qn(t)==4)Yf(t.Ha,0,t);else if(wt(t,"readystatechange"),qn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(I0)[1]||null;if(!i&&re.self&&re.self.location){var r=re.self.location.protocol;i=r.substr(0,r.length-1)}s=!sP.test(i?i.toLowerCase():"")}n=s}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",L0(t)}}finally{ru(t)}}}}function ru(t,e){if(t.g){F0(t);const n=t.g,s=t.C[0]?Bl:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=s}catch{}}}function F0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}G.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}};G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nP(e)}};function mv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case D0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ea=function(){return this.m};G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $0(t){let e="";return jf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function np(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=$0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ze(t,e,n))}function io(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function U0(t){this.Ca=0,this.i=[],this.j=new Jc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=io("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=io("baseRetryDelayMs",5e3,t),this.bb=io("retryDelaySeedMs",1e4,t),this.$a=io("forwardChannelMaxRetries",2,t),this.ta=io("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new A0(t&&t.concurrentRequestLimit),this.Fa=new Zx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}G=U0.prototype;G.ma=8;G.G=1;function sp(t){if(V0(t),t.G==3){var e=t.U++,n=es(t.F);ze(n,"SID",t.I),ze(n,"RID",e),ze(n,"TYPE","terminate"),Ca(t,n),e=new ba(t,t.j,e,void 0),e.K=2,e.v=su(es(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=G0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ea(e)}q0(t)}function ou(t){t.g&&(rp(t),t.g.cancel(),t.g=null)}function V0(t){ou(t),t.u&&(re.clearTimeout(t.u),t.u=null),Kl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function au(t){R0(t.h)||t.m||(t.m=!0,l0(t.Ja,t),t.C=0)}function oP(t,e){return N0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=_a(Ot(t.Ja,t,e),z0(t,t.C)),t.C++,!0)}G.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ba(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=e0(r),t0(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=B0(this,i,e),n=es(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),Ca(this,n),r&&(this.N?e="headers="+encodeURIComponent(String($0(r)))+"&"+e:this.o&&np(n,this.o,r)),Zf(this.h,i),this.Ya&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",e),ze(n,"SID","null"),i.Z=!0,cd(i,n,null)):cd(i,n,e),this.G=2}}else this.G==3&&(t?vv(this,t):this.i.length==0||R0(this.h)||vv(this))};function vv(t,e){var n;e?n=e.m:n=t.U++;const s=es(t.F);ze(s,"SID",t.I),ze(s,"RID",n),ze(s,"AID",t.T),Ca(t,s),t.o&&t.s&&np(s,t.o,t.s),n=new ba(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=B0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zf(t.h,n),cd(n,s,e)}function Ca(t,e){t.ia&&jf(t.ia,function(n,s){ze(e,s,n)}),t.l&&T0({},function(n,s){ze(e,s,n)})}function B0(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ot(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{eP(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function j0(t){t.g||t.u||(t.Z=1,l0(t.Ia,t),t.A=0)}function ip(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=_a(Ot(t.Ia,t),z0(t,t.A)),t.A++,!0)}G.Ia=function(){if(this.u=null,H0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=_a(Ot(this.eb,this),t)}};G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Mt(10),ou(this),H0(this))};function rp(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function H0(t){t.g=new ba(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=es(t.sa);ze(e,"RID","rpc"),ze(e,"SID",t.I),ze(e,"CI",t.L?"0":"1"),ze(e,"AID",t.T),ze(e,"TYPE","xmlhttp"),Ca(t,e),t.o&&t.s&&np(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=su(es(e)),n.s=null,n.P=!0,_0(n,t)}G.cb=function(){this.v!=null&&(this.v=null,ou(this),ip(this),Mt(19))};function Kl(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function W0(t,e){var n=null;if(t.g==e){Kl(t),rp(t),t.g=null;var s=2}else if(hd(t.h,e))n=e.D,O0(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Zc(),wt(s,new g0(s,n)),au(t)}else j0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&oP(t,e)||s==2&&ip(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ui(t,5);break;case 4:ui(t,10);break;case 3:ui(t,6);break;default:ui(t,2)}}}function z0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ui(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ot(t.kb,t);n||(n=new mi("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||zl(n,"https"),su(n)),tP(n.toString(),s)}else Mt(2);t.G=0,t.l&&t.l.va(e),q0(t),V0(t)}G.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function q0(t){if(t.G=0,t.la=[],t.l){const e=x0(t.h);(e.length!=0||t.i.length!=0)&&(ov(t.la,e),ov(t.la,t.i),t.h.i.length=0,Vf(t.i),t.i.length=0),t.l.ua()}}function K0(t,e,n){var s=n instanceof mi?es(n):new mi(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ql(s,s.m);else{var i=re.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new mi(null,void 0);s&&zl(r,s),e&&(r.g=e),i&&ql(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ze(s,n,e),ze(s,"VER",t.ma),Ca(t,s),s}function G0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Xe(new Ta({jb:!0})):new Xe(t.ra),e.Ka(t.H),e}function Y0(){}G=Y0.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Ra=function(){};function Gl(){if(br&&!(10<=Number(Tx)))throw Error("Environmental error: no available transport.")}Gl.prototype.g=function(t,e){return new Zt(t,e)};function Zt(t,e){pt.call(this),this.g=new U0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!jl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zr(this)}bt(Zt,pt);Zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Mt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=K0(t,null,t.V),au(t)};Zt.prototype.close=function(){sp(this.g)};Zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kf(t),t=n);e.i.push(new Xx(e.ab++,t)),e.G==3&&au(e)};Zt.prototype.M=function(){this.g.l=null,delete this.j,sp(this.g),delete this.g,Zt.X.M.call(this)};function Q0(t){Xf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}bt(Q0,Xf);function X0(){Jf.call(this),this.status=1}bt(X0,Jf);function zr(t){this.g=t}bt(zr,Y0);zr.prototype.xa=function(){wt(this.g,"a")};zr.prototype.wa=function(t){wt(this.g,new Q0(t))};zr.prototype.va=function(t){wt(this.g,new X0)};zr.prototype.ua=function(){wt(this.g,"b")};Gl.prototype.createWebChannel=Gl.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;eu.NO_ERROR=0;eu.TIMEOUT=8;eu.HTTP_ERROR=6;m0.COMPLETE="complete";v0.EventType=wa;wa.OPEN="a";wa.CLOSE="b";wa.ERROR="c";wa.MESSAGE="d";pt.prototype.listen=pt.prototype.N;Xe.prototype.listenOnce=Xe.prototype.O;Xe.prototype.getLastError=Xe.prototype.Oa;Xe.prototype.getLastErrorCode=Xe.prototype.Ea;Xe.prototype.getStatus=Xe.prototype.aa;Xe.prototype.getResponseJson=Xe.prototype.Sa;Xe.prototype.getResponseText=Xe.prototype.fa;Xe.prototype.send=Xe.prototype.da;Xe.prototype.setWithCredentials=Xe.prototype.Ka;var aP=function(){return new Gl},lP=function(){return Zc()},sh=eu,cP=m0,uP=Fi,yv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},hP=Ta,el=v0,dP=Xe;const _v="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Hr("@firebase/firestore");function wv(){return Ti.logLevel}function X(t,...e){if(Ti.logLevel<=Se.DEBUG){const n=e.map(op);Ti.debug(`Firestore (${qr}): ${t}`,...n)}}function ts(t,...e){if(Ti.logLevel<=Se.ERROR){const n=e.map(op);Ti.error(`Firestore (${qr}): ${t}`,...n)}}function Yl(t,...e){if(Ti.logLevel<=Se.WARN){const n=e.map(op);Ti.warn(`Firestore (${qr}): ${t}`,...n)}}function op(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function ot(t,e){t||he()}function ke(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class pP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gP{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Rs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Rs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ot(typeof s.accessToken=="string"),new J0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ot(e===null||typeof e=="string"),new It(e)}}class mP{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=It.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class vP{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new mP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _P{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ot(typeof n.token=="string"),this.T=n.token,new yP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function wP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=wP(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Oe(t,e){return t<e?-1:t>e?1:0}function Er(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ft.fromMillis(Date.now())}static fromDate(e){return Ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ft(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ft(0,0))}static max(){return new ae(new Ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s){n===void 0?n=0:n>e.length&&he(),s===void 0?s=e.length-n:s>e.length-n&&he(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof na?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends na{construct(e,n,s){return new qe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const bP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends na{construct(e,n,s){return new Bt(e,n,s)}static isValidIdentifier(e){return bP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Bt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(n)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(qe.fromString(e))}static fromName(e){return new te(qe.fromString(e).popFirst(5))}static empty(){return new te(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new qe(e.slice()))}}function EP(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(s===1e9?new Ft(n+1,0):new Ft(n,s));return new Ms(i,te.empty(),e)}function TP(t){return new Ms(t.readTime,t.key,-1)}class Ms{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ms(ae.min(),te.empty(),-1)}static max(){return new Ms(ae.max(),te.empty(),-1)}}function IP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const CP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==CP)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,s)=>{n(e)})}static reject(e){return new M((n,s)=>{s(e)})}static waitFor(e){return new M((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=M.resolve(!1);for(const s of e)n=n.next(i=>i?M.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new M((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new M((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}lp.ct=-1;function lu(t){return t==null}function dd(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tl(this.root,e,this.comparator,!0)}}class tl{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:mt.RED,this.left=i!=null?i:mt.EMPTY,this.right=r!=null?r:mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new mt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(t,e,n,s,i){return this}insert(t,e,n){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(e){return new Ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ws{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new ws([])}unionWith(e){let n=new at(Bt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ws(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class AP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new AP("Invalid base64 string: "+i):i}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const RP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fs(t){if(ot(!!t),typeof t=="string"){let e=0;const n=RP.exec(t);if(ot(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
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
 */function eE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tE(t){const e=t.mapValue.fields.__previous_value__;return eE(e)?tE(e):e}function sa(t){const e=Fs(t.mapValue.fields.__local_write_time__.timestampValue);return new Ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eE(t)?4:OP(t)?9007199254740991:10:he()}function Fn(t,e){if(t===e)return!0;const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Fs(s.timestampValue),o=Fs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=nt(s.doubleValue),o=nt(i.doubleValue);return r===o?dd(r)===dd(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Er(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(bv(r)!==bv(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Fn(r[a],o[a])))return!1;return!0}(t,e);default:return he()}}function ra(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function Ir(t,e){if(t===e)return 0;const n=Ii(t),s=Ii(e);if(n!==s)return Oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=nt(i.integerValue||i.doubleValue),a=nt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Tv(t.timestampValue,e.timestampValue);case 4:return Tv(sa(t),sa(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Tr(i),a=Tr(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Oe(o[l],a[l]);if(c!==0)return c}return Oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Oe(nt(i.latitude),nt(r.latitude));return o!==0?o:Oe(nt(i.longitude),nt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ir(o[l],a[l]);if(c)return c}return Oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===nl.mapValue&&r===nl.mapValue)return 0;if(i===nl.mapValue)return 1;if(r===nl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Oe(a[u],c[u]);if(h!==0)return h;const d=Ir(o[a[u]],l[c[u]]);if(d!==0)return d}return Oe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw he()}}function Tv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Fs(t),s=Fs(e),i=Oe(n.seconds,s.seconds);return i!==0?i:Oe(n.nanos,s.nanos)}function Cr(t){return fd(t)}function fd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Fs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Tr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,te.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=fd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${fd(s.fields[a])}`;return r+"}"}(t.mapValue):he();var e,n}function pd(t){return!!t&&"integerValue"in t}function cp(t){return!!t&&"arrayValue"in t}function Iv(t){return!!t&&"nullValue"in t}function Cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ih(t){return!!t&&"mapValue"in t}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cu(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Io(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ih(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=Bt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Io(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ih(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ih(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){cu(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new On(Io(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ct(e,0,ae.min(),ae.min(),ae.min(),On.empty(),0)}static newFoundDocument(e,n,s,i){return new Ct(e,1,n,ae.min(),s,i,0)}static newNoDocument(e,n){return new Ct(e,2,n,ae.min(),ae.min(),On.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,ae.min(),ae.min(),On.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function Sv(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=te.comparator(te.fromName(o.referenceValue),n.key):s=Ir(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function kv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function xP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nE{}class rt extends nE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new DP(e,n,s):n==="array-contains"?new FP(e,s):n==="in"?new $P(e,s):n==="not-in"?new UP(e,s):n==="array-contains-any"?new VP(e,s):new rt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new LP(e,s):new MP(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ir(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.matchesComparison(Ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $n extends nE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new $n(e,n)}matches(e){return sE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function sE(t){return t.op==="and"}function iE(t){return PP(t)&&sE(t)}function PP(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function gd(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Cr(t.value);if(iE(t))return t.filters.map(e=>gd(e)).join(",");{const e=t.filters.map(n=>gd(n)).join(",");return`${t.op}(${e})`}}function rE(t,e){return t instanceof rt?function(n,s){return s instanceof rt&&n.op===s.op&&n.field.isEqual(s.field)&&Fn(n.value,s.value)}(t,e):t instanceof $n?function(n,s){return s instanceof $n&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&rE(r,s.filters[o]),!0):!1}(t,e):void he()}function oE(t){return t instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Cr(e.value)}`}(t):t instanceof $n?function(e){return e.op.toString()+" {"+e.getFilters().map(oE).join(" ,")+"}"}(t):"Filter"}class DP extends rt{constructor(e,n,s){super(e,n,s),this.key=te.fromName(s.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class LP extends rt{constructor(e,n){super(e,"in",n),this.keys=aE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MP extends rt{constructor(e,n){super(e,"not-in",n),this.keys=aE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>te.fromName(s.referenceValue))}class FP extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cp(n)&&ra(n.arrayValue,this.value)}}class $P extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class UP extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ra(this.value.arrayValue,n)}}class VP extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ra(this.value.arrayValue,s))}}/**
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
 */class BP{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Av(t,e=null,n=[],s=[],i=null,r=null,o=null){return new BP(t,e,n,s,i,r,o)}function up(t){const e=ke(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>gd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cr(s)).join(",")),e.ft=n}return e.ft}function hp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kv(t.startAt,e.startAt)&&kv(t.endAt,e.endAt)}function md(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function jP(t,e,n,s,i,r,o,a){return new uu(t,e,n,s,i,r,o,a)}function hu(t){return new uu(t)}function Rv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HP(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function WP(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zP(t){return t.collectionGroup!==null}function ar(t){const e=ke(t);if(e.dt===null){e.dt=[];const n=WP(e),s=HP(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Co(n)),e.dt.push(new Co(Bt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Co(Bt.keyField(),r))}}}return e.dt}function ns(t){const e=ke(t);if(!e.wt)if(e.limitType==="F")e.wt=Av(e.path,e.collectionGroup,ar(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ar(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Co(r.field,o))}const s=e.endAt?new Ql(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ql(e.startAt.position,e.startAt.inclusive):null;e.wt=Av(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function vd(t,e,n){return new uu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function du(t,e){return hp(ns(t),ns(e))&&t.limitType===e.limitType}function lE(t){return`${up(ns(t))}|lt:${t.limitType}`}function yd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>oE(s)).join(", ")}]`),lu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cr(s)).join(",")),`Target(${n})`}(ns(t))}; limitType=${t.limitType})`}function fu(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):te.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of ar(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Sv(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ar(n),s)||n.endAt&&!function(i,r,o){const a=Sv(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ar(n),s))}(t,e)}function qP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cE(t){return(e,n)=>{let s=!1;for(const i of ar(t)){const r=KP(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function KP(t,e,n){const s=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ir(a,l):he()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cu(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return kP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=new gt(te.comparator);function $s(){return GP}const uE=new gt(te.comparator);function fo(...t){let e=uE;for(const n of t)e=e.insert(n.key,n);return e}function YP(t){let e=uE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function hi(){return So()}function hE(){return So()}function So(){return new Kr(t=>t.toString(),(t,e)=>t.isEqual(e))}new gt(te.comparator);const QP=new at(te.comparator);function Ce(...t){let e=QP;for(const n of t)e=e.add(n);return e}const XP=new at(Oe);function dE(){return XP}/**
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
 */function JP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dd(e)?"-0":e}}function ZP(t){return{integerValue:""+t}}/**
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
 */class pu{constructor(){this._=void 0}}function eD(t,e,n){return t instanceof _d?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Xl?fE(t,e):t instanceof Jl?pE(t,e):function(s,i){const r=nD(s,i),o=Nv(r)+Nv(s._t);return pd(r)&&pd(s._t)?ZP(o):JP(s.serializer,o)}(t,e)}function tD(t,e,n){return t instanceof Xl?fE(t,e):t instanceof Jl?pE(t,e):n}function nD(t,e){return t instanceof wd?pd(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class _d extends pu{}class Xl extends pu{constructor(e){super(),this.elements=e}}function fE(t,e){const n=gE(e);for(const s of t.elements)n.some(i=>Fn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Jl extends pu{constructor(e){super(),this.elements=e}}function pE(t,e){let n=gE(e);for(const s of t.elements)n=n.filter(i=>!Fn(i,s));return{arrayValue:{values:n}}}class wd extends pu{constructor(e,n){super(),this.serializer=e,this._t=n}}function Nv(t){return nt(t.integerValue||t.doubleValue)}function gE(t){return cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sD(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Xl&&s instanceof Xl||n instanceof Jl&&s instanceof Jl?Er(n.elements,s.elements,Fn):n instanceof wd&&s instanceof wd?Fn(n._t,s._t):n instanceof _d&&s instanceof _d}(t.transform,e.transform)}class vi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vi}static exists(e){return new vi(void 0,e)}static updateTime(e){return new vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dp{}function mE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rD(t.key,vi.none()):new fp(t.key,t.data,vi.none());{const n=t.data,s=On.empty();let i=new at(Bt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new gu(t.key,s,new ws(i.toArray()),vi.none())}}function iD(t,e,n){t instanceof fp?function(s,i,r){const o=s.value.clone(),a=xv(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gu?function(s,i,r){if(!vl(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=xv(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vE(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,s){return t instanceof fp?function(i,r,o,a){if(!vl(i.precondition,r))return o;const l=i.value.clone(),c=Pv(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof gu?function(i,r,o,a){if(!vl(i.precondition,r))return o;const l=Pv(i.fieldTransforms,a,r),c=r.data;return c.setAll(vE(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return vl(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Ov(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Er(n,s,(i,r)=>sD(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fp extends dp{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gu extends dp{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xv(t,e,n){const s=new Map;ot(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,tD(o,a,n[i]))}return s}function Pv(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,eD(r,o,e))}return s}class rD extends dp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&iD(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ko(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ko(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=hE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=mE(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,(n,s)=>Ov(n,s))&&Er(this.baseMutations,e.baseMutations,(n,s)=>Ov(n,s))}}/**
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
 */class aD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lD{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,we;function yE(t){if(t===void 0)return ts("GRPC error has no .code"),H.UNKNOWN;switch(t){case et.OK:return H.OK;case et.CANCELLED:return H.CANCELLED;case et.UNKNOWN:return H.UNKNOWN;case et.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case et.INTERNAL:return H.INTERNAL;case et.UNAVAILABLE:return H.UNAVAILABLE;case et.UNAUTHENTICATED:return H.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case et.NOT_FOUND:return H.NOT_FOUND;case et.ALREADY_EXISTS:return H.ALREADY_EXISTS;case et.PERMISSION_DENIED:return H.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case et.ABORTED:return H.ABORTED;case et.OUT_OF_RANGE:return H.OUT_OF_RANGE;case et.UNIMPLEMENTED:return H.UNIMPLEMENTED;case et.DATA_LOSS:return H.DATA_LOSS;default:return he()}}(we=et||(et={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sl}static getOrCreateInstance(){return sl===null&&(sl=new pp),sl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let sl=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new mu(ae.min(),i,dE(),$s(),Ce())}}class ka{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ka(s,n,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class _E{constructor(e,n){this.targetId=e,this.Et=n}}class wE{constructor(e,n,s=Dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Dv{constructor(){this.At=0,this.Rt=Mv(),this.vt=Dt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Ce(),n=Ce(),s=Ce();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:he()}}),new ka(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Mv()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class cD{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=$s(),this.qt=Lv(),this.Ut=new at(Oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(md(o))if(i===0){const a=new te(o.path);this.Qt(s,a,Ct.newNoDocument(a,ae.min()))}else ot(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=pp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&md(a.target)){const l=new te(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Ct.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=Ce();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new mu(e,n,this.Ut,this.Lt,s);return this.Lt=$s(),this.qt=Lv(),this.Ut=new at(Oe),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Dv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new at(Oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Dv),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Lv(){return new gt(te.comparator)}function Mv(){return new gt(te.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dD=(()=>({and:"AND",or:"OR"}))();class fD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pD(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gD(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lr(t){return ot(!!t),ae.fromTimestamp(function(e){const n=Fs(e);return new Ft(n.seconds,n.nanos)}(t))}function mD(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function bE(t){const e=qe.fromString(t);return ot(CE(e)),e}function rh(t,e){const n=bE(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(EE(n))}function bd(t,e){return mD(t.databaseId,e)}function vD(t){const e=bE(t);return e.length===4?qe.emptyPath():EE(e)}function Fv(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function EE(t){return ot(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(ot(c===void 0||typeof c=="string"),Dt.fromBase64String(c||"")):(ot(c===void 0||c instanceof Uint8Array),Dt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?H.UNKNOWN:yE(l.code);return new ne(c,l.message||"")}(o);n=new wE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=rh(t,s.document.name),r=lr(s.document.updateTime),o=s.document.createTime?lr(s.document.createTime):ae.min(),a=new On({mapValue:{fields:s.document.fields}}),l=Ct.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new yl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=rh(t,s.document),r=s.readTime?lr(s.readTime):ae.min(),o=Ct.newNoDocument(i,r),a=s.removedTargetIds||[];n=new yl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=rh(t,s.document),r=s.removedTargetIds||[];n=new yl([],r,i,null)}else{if(!("filter"in e))return he();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new lD(i),o=s.targetId;n=new _E(o,r)}}return n}function _D(t,e){return{documents:[bd(t,e.path)]}}function wD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=bd(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bd(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return IE($n.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Yi(u.field),direction:TD(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||lu(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function bD(t){let e=vD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ot(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=TE(u);return h instanceof $n&&iE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Co(Qi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,lu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ql(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ql(d,h)}(n.endAt)),jP(e,i,o,r,a,"F",l,c)}function ED(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return he()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function TE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Qi(e.unaryFilter.field);return rt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Qi(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qi(e.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Qi(e.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(e){return rt.create(Qi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return $n.create(e.compositeFilter.filters.map(n=>TE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return he()}}(e.compositeFilter.op))}(t):he()}function TD(t){return uD[t]}function ID(t){return hD[t]}function CD(t){return dD[t]}function Yi(t){return{fieldPath:t.canonicalString()}}function Qi(t){return Bt.fromServerFormat(t.fieldPath)}function IE(t){return t instanceof rt?function(e){if(e.op==="=="){if(Cv(e.value))return{unaryFilter:{field:Yi(e.field),op:"IS_NAN"}};if(Iv(e.value))return{unaryFilter:{field:Yi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Cv(e.value))return{unaryFilter:{field:Yi(e.field),op:"IS_NOT_NAN"}};if(Iv(e.value))return{unaryFilter:{field:Yi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(e.field),op:ID(e.op),value:e.value}}}(t):t instanceof $n?function(e){const n=e.getFilters().map(s=>IE(s));return n.length===1?n[0]:{compositeFilter:{op:CD(e.op),filters:n}}}(t):he()}function CE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,s,i,r=ae.min(),o=ae.min(),a=Dt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.se=e}}function kD(t){const e=bD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vd(e,e.limit,"L"):e}/**
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
 */class AD{constructor(){this.He=new RD}addToCollectionParentIndex(e,n){return this.He.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ms.min())}updateCollectionGroup(e,n,s){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class RD{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new at(qe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new at(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Sr(0)}static bn(){return new Sr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.changes=new Kr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?M.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ko(s.mutation,i,ws.empty(),Ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ce()){const i=hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=fo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=hi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ce()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=$s();const o=So(),a=So();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof gu)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ko(u.mutation,c,u.mutation.getFieldMask(),Ft.now())):o.set(c.key,ws.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new OD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=So();let i=new gt((o,a)=>o-a),r=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||ws.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Ce()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=hE();u.forEach(d=>{if(!r.has(d)){const f=mE(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return M.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):M.resolve(hi());let a=-1,l=r;return o.next(c=>M.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?M.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Ce())).next(u=>({batchId:a,changes:YP(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(s=>{let i=fo();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=fo();return this.indexManager.getCollectionParents(e,i).next(o=>M.forEach(o,a=>{const l=function(c,u){return new uu(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ct.newInvalidDocument(c)))});let o=fo();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&ko(c.mutation,l,ws.empty(),Ft.now()),fu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class PD{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return M.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:lr(s.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:kD(s.bundledQuery),readTime:lr(s.readTime)}}(n)),M.resolve()}}/**
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
 */class DD{constructor(){this.overlays=new gt(te.comparator),this.ts=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const s=hi();return M.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),M.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),M.resolve()}getOverlaysForCollection(e,n,s){const i=hi(),r=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new gt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=hi(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=hi(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return M.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new aD(n,s));let r=this.ts.get(n);r===void 0&&(r=Ce(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.es=new at(ut.ns),this.ss=new at(ut.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new ut(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new ut(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new te(new qe([])),s=new ut(n,e),i=new ut(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new te(new qe([])),s=new ut(n,e),i=new ut(n,e+1);let r=Ce();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ut(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return te.comparator(e.key,n.key)||Oe(e.ds,n.ds)}static rs(e,n){return Oe(e.ds,n.ds)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new at(ut.ns)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oD(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ut(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return M.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),M.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new at(Oe);return n.forEach(i=>{const r=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),M.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;te.isDocumentKey(r)||(r=r.child(""));const o=new ut(new te(r),0);let a=new at(Oe);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),M.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ot(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return M.forEach(n.mutations,i=>{const r=new ut(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new ut(n,0),i=this._s.firstAfterOrEqual(s);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.Ts=e,this.docs=new gt(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return M.resolve(s?s.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let s=$s();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ct.newInvalidDocument(i))}),M.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=$s();const o=n.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IP(TP(u),s)<=0||(i.has(u.key)||fu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return M.resolve(r)}getAllFromCollectionGroup(e,n,s,i){he()}Es(e,n){return M.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new FD(this)}getSize(e){return M.resolve(this.size)}}class FD extends ND{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),M.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.persistence=e,this.As=new Kr(n=>up(n),hp),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Rs=0,this.vs=new gp,this.targetCount=0,this.bs=Sr.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),M.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Sr(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Sn(n),M.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(r).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return M.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),M.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),M.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return M.resolve(s)}containsKey(e,n){return M.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new lp(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new $D(this),this.indexManager=new AD,this.remoteDocumentCache=function(s){return new MD(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new SD(n),this.xs=new PD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new LD(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){X("MemoryPersistence","Starting transaction:",e);const i=new VD(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return M.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class VD extends SP{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.$s=new gp,this.Ms=null}static Fs(e){return new mp(e)}get Bs(){if(this.Ms)return this.Ms;throw he()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),M.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),M.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Bs,s=>{const i=te.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,ae.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return M.or([()=>M.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=Ce(),i=Ce();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new vp(e,n.fromCache,s,i)}}/**
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
 */class BD{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Rv(n))return M.resolve(null);let s=ns(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vd(n,null,"F"),s=ns(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Ce(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,vd(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,s,i){return Rv(n)||i.isEqual(ae.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(wv()<=Se.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yd(n)),this.Fi(e,o,n,EP(i,-1)))})}$i(e,n){let s=new at(cE(e));return n.forEach((i,r)=>{fu(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return wv()<=Se.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",yd(n)),this.xi.getDocumentsMatchingQuery(e,n,Ms.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class jD{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new gt(Oe),this.qi=new Kr(r=>up(r),hp),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xD(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function HD(t,e,n,s){return new jD(t,e,n,s)}async function SE(t,e){const n=ke(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Ce();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function kE(t){const e=ke(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function WD(t,e){const n=ke(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Dt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&a.push(n.Ds.updateTargetData(r,f))});let l=$s(),c=Ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(zD(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(ae.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return M.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=i,r))}function zD(t,e,n){let s=Ce(),i=Ce();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=$s();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function qD(t,e){const n=ke(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,M.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new yi(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Ed(t,e,n){const s=ke(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sa(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function $v(t,e,n){const s=ke(t);let i=ae.min(),r=Ce();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ke(a),h=u.qi.get(c);return h!==void 0?M.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(s,o,ns(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?r:Ce())).next(a=>(KD(s,qP(e),a),{documents:a,Wi:r})))}function KD(t,e,n){let s=t.Ui.get(e)||ae.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Uv{constructor(){this.activeTargetIds=dE()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GD{constructor(){this.Br=new Uv,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Uv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YD{qr(e){}shutdown(){}}/**
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
 */class Vv{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let il=null;function oh(){return il===null?il=268435456+Math.round(2147483648*Math.random()):il++,"0x"+il.toString(16)}/**
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
 */const QD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class JD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=oh(),a=this.ao(e,n);X("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>(X("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Yl("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=QD[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=oh();return new Promise((o,a)=>{const l=new dP;l.setWithCredentials(!0),l.listenOnce(cP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sh.NO_ERROR:const u=l.getResponseJson();X(Tt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case sh.TIMEOUT:X(Tt,`RPC '${e}' ${r} timed out`),a(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const h=l.getStatus();if(X(Tt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(y)>=0?y:H.UNKNOWN}(f.status);a(new ne(p,f.message))}else a(new ne(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ne(H.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{X(Tt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);X(Tt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=oh(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aP(),a=lP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new hP({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");X(Tt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new XD({Wr:m=>{d?X(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(X(Tt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),X(Tt,`RPC '${e}' stream ${i} sending:`,m),u.send(m))},Hr:()=>u.close()}),p=(m,y,w)=>{m.listen(y,E=>{try{w(E)}catch(b){setTimeout(()=>{throw b},0)}})};return p(u,el.EventType.OPEN,()=>{d||X(Tt,`RPC '${e}' stream ${i} transport opened.`)}),p(u,el.EventType.CLOSE,()=>{d||(d=!0,X(Tt,`RPC '${e}' stream ${i} transport closed`),f.so())}),p(u,el.EventType.ERROR,m=>{d||(d=!0,Yl(Tt,`RPC '${e}' stream ${i} transport errored:`,m),f.so(new ne(H.UNAVAILABLE,"The operation could not be completed")))}),p(u,el.EventType.MESSAGE,m=>{var y;if(!d){const w=m.data[0];ot(!!w);const E=w,b=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(b){X(Tt,`RPC '${e}' stream ${i} received error:`,b);const k=b.status;let R=function(O){const _=et[O];if(_!==void 0)return yE(_)}(k),N=b.message;R===void 0&&(R=H.INTERNAL,N="Unknown error status: "+k+" with message "+b.message),d=!0,f.so(new ne(R,N)),u.close()}else X(Tt,`RPC '${e}' stream ${i} received:`,w),f.io(w)}}),p(a,uP.STAT_EVENT,m=>{m.stat===yv.PROXY?X(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===yv.NOPROXY&&X(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function ah(){return typeof document<"u"?document:null}/**
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
 */function AE(t){return new fD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new RE(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new ne(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eL extends ZD{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=yD(this.serializer,e),s=function(i){if(!("targetChange"in i))return ae.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?ae.min():r.readTime?lr(r.readTime):ae.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Fv(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=md(a)?{documents:_D(i,a)}:{query:wD(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=gD(i,r.resumeToken):r.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=pD(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=ED(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Fv(this.serializer),n.removeTarget=e,this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(H.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ne(H.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class nL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ts(n),this.ru=!1):X("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Ra(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ke(a);l.du.add(4),await Aa(l),l.mu.set("Unknown"),l.du.delete(4),await vu(l)}(this))})}),this.mu=new nL(s,i)}}async function vu(t){if(Ra(t))for(const e of t.wu)await e(!0)}async function Aa(t){for(const e of t.wu)await e(!1)}function NE(t,e){const n=ke(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),wp(n)?_p(n):Gr(n).No()&&yp(n,e))}function OE(t,e){const n=ke(t),s=Gr(n);n.fu.delete(e),s.No()&&xE(n,e),n.fu.size===0&&(s.No()?s.$o():Ra(n)&&n.mu.set("Unknown"))}function yp(t,e){t.gu.Ot(e.targetId),Gr(t).jo(e)}function xE(t,e){t.gu.Ot(e),Gr(t).Wo(e)}function _p(t){t.gu=new cD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Gr(t).start(),t.mu.ou()}function wp(t){return Ra(t)&&!Gr(t).xo()&&t.fu.size>0}function Ra(t){return ke(t).du.size===0}function PE(t){t.gu=void 0}async function iL(t){t.fu.forEach((e,n)=>{yp(t,e)})}async function rL(t,e){PE(t),wp(t)?(t.mu.au(e),_p(t)):t.mu.set("Unknown")}async function oL(t,e,n){if(t.mu.set("Online"),e instanceof wE&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bv(t,s)}else if(e instanceof yl?t.gu.Kt(e):e instanceof _E?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ae.min()))try{const s=await kE(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Dt.EMPTY_BYTE_STRING,l.snapshotVersion)),xE(i,a);const c=new yi(l.target,a,1,l.sequenceNumber);yp(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){X("RemoteStore","Failed to raise snapshot:",s),await Bv(t,s)}}async function Bv(t,e,n){if(!Sa(e))throw e;t.du.add(1),await Aa(t),t.mu.set("Offline"),n||(n=()=>kE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await vu(t)})}async function jv(t,e){const n=ke(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const s=Ra(n);n.du.add(3),await Aa(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await vu(n)}async function aL(t,e){const n=ke(t);e?(n.du.delete(2),await vu(n)):e||(n.du.add(2),await Aa(n),n.mu.set("Unknown"))}function Gr(t){return t.yu||(t.yu=function(e,n,s){const i=ke(e);return i.nu(),new eL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:iL.bind(null,t),Zr:rL.bind(null,t),zo:oL.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),wp(t)?_p(t):t.mu.set("Unknown")):(await t.yu.stop(),PE(t))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new bp(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function DE(t,e){if(ts("AsyncQueue",`${e}: ${t}`),Sa(t))return new ne(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||te.comparator(n.key,s.key):(n,s)=>te.comparator(n.key,s.key),this.keyedMap=fo(),this.sortedSet=new gt(this.comparator)}static emptySet(e){return new cr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new cr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.Iu=new gt(te.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):he():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class kr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new kr(e,n,cr.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.Eu=void 0,this.listeners=[]}}class cL{constructor(){this.queries=new Kr(e=>lE(e),du),this.onlineState="Unknown",this.Au=new Set}}async function Ep(t,e){const n=ke(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new lL),i)try{r.Eu=await n.onListen(s)}catch(o){const a=DE(o,`Initialization of query '${yd(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Ip(n)}async function Tp(t,e){const n=ke(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function uL(t,e){const n=ke(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Ip(n)}function hL(t,e,n){const s=ke(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ip(t){t.Au.forEach(e=>{e.next()})}class Cp{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new kr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.key=e}}class ME{constructor(e){this.key=e}}class dL{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Ce(),this.mutatedKeys=Ce(),this.Ku=cE(e),this.Gu=new cr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Hv,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=fu(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),y=!0):this.Wu(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new kr(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Hv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Ce(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new ME(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new LE(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=Ce();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return kr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class fL{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class pL{constructor(e){this.key=e,this.ec=!1}}class gL{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Kr(a=>lE(a),du),this.ic=new Map,this.rc=new Set,this.oc=new gt(te.comparator),this.uc=new Map,this.cc=new gp,this.ac={},this.hc=new Map,this.lc=Sr.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function mL(t,e){const n=TL(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await qD(n.localStore,ns(e));n.isPrimaryClient&&NE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await vL(n,e,s,a==="current",o.resumeToken)}return i}async function vL(t,e,n,s,i){t.dc=(h,d,f)=>async function(p,m,y,w){let E=m.view.zu(y);E.Mi&&(E=await $v(p.localStore,m.query,!1).then(({documents:R})=>m.view.zu(R,E)));const b=w&&w.targetChanges.get(m.targetId),k=m.view.applyChanges(E,p.isPrimaryClient,b);return zv(p,m.targetId,k.Yu),k.snapshot}(t,h,d,f);const r=await $v(t.localStore,e,!0),o=new dL(e,r.Wi),a=o.zu(r.documents),l=ka.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);zv(t,n,c.Yu);const u=new fL(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function yL(t,e){const n=ke(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!du(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ed(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),OE(n.remoteStore,s.targetId),Td(n,s.targetId)}).catch(ap)):(Td(n,s.targetId),await Ed(n.localStore,s.targetId,!0))}async function FE(t,e){const n=ke(t);try{const s=await WD(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(ot(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ot(o.ec):i.removedDocuments.size>0&&(ot(o.ec),o.ec=!1))}),await UE(n,s,e)}catch(s){await ap(s)}}function Wv(t,e,n){const s=ke(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ke(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Ip(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _L(t,e,n){const s=ke(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new gt(te.comparator);o=o.insert(r,Ct.newNoDocument(r,ae.min()));const a=Ce().add(r),l=new mu(ae.min(),new Map,new at(Oe),o,a);await FE(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),Sp(s)}else await Ed(s.localStore,e,!1).then(()=>Td(s,e,n)).catch(ap)}function Td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||$E(t,s)})}function $E(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(OE(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Sp(t))}function zv(t,e,n){for(const s of n)s instanceof LE?(t.cc.addReference(s.key,e),wL(t,s)):s instanceof ME?(X("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||$E(t,s.key)):he()}function wL(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(X("SyncEngine","New document in limbo: "+n),t.rc.add(s),Sp(t))}function Sp(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new te(qe.fromString(e)),s=t.lc.next();t.uc.set(s,new pL(n)),t.oc=t.oc.insert(n,s),NE(t.remoteStore,new yi(ns(hu(n.path)),s,2,lp.ct))}}async function UE(t,e,n){const s=ke(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=vp.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=ke(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>M.forEach(l,h=>M.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>M.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Sa(u))throw u;X("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,p)}}}(s.localStore,r))}async function bL(t,e){const n=ke(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const s=await SE(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new ne(H.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await UE(n,s.Qi)}}function EL(t,e){const n=ke(t),s=n.uc.get(e);if(s&&s.ec)return Ce().add(s.key);{let i=Ce();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function TL(t){const e=ke(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=FE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_L.bind(null,e),e.nc.zo=uL.bind(null,e.eventManager),e.nc.wc=hL.bind(null,e.eventManager),e}class qv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=AE(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return HD(this.persistence,new BD,e.initialUser,this.serializer)}createPersistence(e){return new UD(mp.Fs,this.serializer)}createSharedClientState(e){return new GD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bL.bind(null,this.syncEngine),await aL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cL}createDatastore(e){const n=AE(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new JD(i));var i;return function(r,o,a,l){return new tL(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Wv(this.syncEngine,a,0),o=Vv.D()?new Vv:new YD,new sL(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new gL(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ke(e);X("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Aa(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=Z0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{X("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(X("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=DE(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await SE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kL(t);X("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>jv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>jv(e.remoteStore,r)),t._onlineComponents=e}function SL(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SL(n))throw n;Yl("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new qv)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await lh(t,new qv);return t._offlineComponents}async function AL(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Kv(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Kv(t,new IL))),t._onlineComponents}async function Zl(t){const e=await AL(t),n=e.eventManager;return n.onListen=mL.bind(null,e.syncEngine),n.onUnlisten=yL.bind(null,e.syncEngine),n}function RL(t,e,n={}){const s=new Rs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new kp({next:h=>{r.enqueueAndForget(()=>Tp(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Cp(hu(o.path),c,{includeMetadataChanges:!0,xu:!0});return Ep(i,u)}(await Zl(t),t.asyncQueue,e,n,s)),s.promise}function NL(t,e,n={}){const s=new Rs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new kp({next:h=>{r.enqueueAndForget(()=>Tp(i,u)),h.fromCache&&a.source==="server"?l.reject(new ne(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Cp(o,c,{includeMetadataChanges:!0,xu:!0});return Ep(i,u)}(await Zl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Gv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e,n){if(!n)throw new ne(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OL(t,e,n,s){if(e===!0&&s===!0)throw new ne(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yv(t){if(!te.isDocumentKey(t))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qv(t){if(te.isDocumentKey(t))throw new ne(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xL(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Ns(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xL(t);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,OL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class yu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fP;switch(n.type){case"firstParty":return new vP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gv.get(e);n&&(X("ComponentProvider","Removing Datastore"),Gv.delete(e),n.terminate())}(this),Promise.resolve()}}function PL(t,e,n,s={}){var i;const r=(t=Ns(t,yu))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Yl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=It.MOCK_USER;else{o=BO(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new It(l)}t._authCredentials=new pP(new J0(o,a))}}/**
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
 */class _n{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class Na{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Na(this.firestore,e,this._query)}}class Os extends Na{constructor(e,n,s){super(e,n,hu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new te(e))}withConverter(e){return new Os(this.firestore,e,this._path)}}function DL(t,e,...n){if(t=hn(t),VE("collection","path",e),t instanceof yu){const s=qe.fromString(e,...n);return Qv(s),new Os(t,null,s)}{if(!(t instanceof _n||t instanceof Os))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return Qv(s),new Os(t.firestore,null,s)}}function MH(t,e,...n){if(t=hn(t),arguments.length===1&&(e=Z0.A()),VE("doc","path",e),t instanceof yu){const s=qe.fromString(e,...n);return Yv(s),new _n(t,null,new te(s))}{if(!(t instanceof _n||t instanceof Os))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return Yv(s),new _n(t.firestore,t instanceof Os?t.converter:null,new te(s))}}/**
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
 */class LL{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new RE(this,"async_queue_retry"),this.qc=()=>{const n=ah();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ah();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Rs;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Sa(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ts("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=bp.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&he()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Jv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class oa extends yu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new LL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jE(this),this._firestoreClient.terminate()}}function BE(t,e){const n=typeof t=="object"?t:qc(),s=typeof t=="string"?t:e||"(default)",i=Li(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=UO("firestore");r&&PL(i,...r)}return i}function Ap(t){return t._firestoreClient||jE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jE(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new NP(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new CL(t._authCredentials,t._appCheckCredentials,t._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ec{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ec(Dt.fromBase64String(e))}catch(n){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ec(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class HE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}const ML=new RegExp("[~\\*/\\[\\]]");function FL(t,e,n){if(e.search(ML)>=0)throw Zv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new HE(...e.split("."))._internalPath}catch{throw Zv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zv(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ne(H.INVALID_ARGUMENT,a+t+l)}/**
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
 */class zE{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $L(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $L extends zE{data(){return super.data()}}function qE(t,e){return typeof e=="string"?FL(t,e):e instanceof HE?e._internalPath:e._delegate._internalPath}/**
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
 */function KE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UL{convertValue(e,n="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){const s={};return cu(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new WE(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=tE(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Fs(e);return new Ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=qe.fromString(e);ot(CE(s));const i=new ia(s.get(1),s.get(3)),r=new te(s.popFirst(5));return i.isEqual(n)||ts(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class po{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GE extends zE{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(qE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class _l extends GE{data(e={}){return super.data(e)}}class YE{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new po(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new _l(this._firestore,this._userDataWriter,s.key,s,new po(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new _l(s._firestore,s._userDataWriter,o.doc.key,o.doc,new po(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new _l(s._firestore,s._userDataWriter,o.doc.key,o.doc,new po(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:VL(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function QE(t){t=Ns(t,_n);const e=Ns(t.firestore,oa);return RL(Ap(e),t._key).then(n=>XE(e,t,n))}class Rp extends UL{constructor(e){super(),this.firestore=e}convertBytes(e){return new ec(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function BL(t){t=Ns(t,Na);const e=Ns(t.firestore,oa),n=Ap(e),s=new Rp(e);return KE(t._query),NL(n,t._query).then(i=>new YE(e,s,t,i))}function Np(t,...e){var n,s,i;t=hn(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jv(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Jv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof _n)c=Ns(t.firestore,oa),u=hu(t._key.path),l={next:h=>{e[o]&&e[o](XE(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ns(t,Na);c=Ns(h.firestore,oa),u=h._query;const d=new Rp(c);l={next:f=>{e[o]&&e[o](new YE(c,d,h,f))},error:e[o+1],complete:e[o+2]},KE(t._query)}return function(h,d,f,p){const m=new kp(p),y=new Cp(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>Ep(await Zl(h),y)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>Tp(await Zl(h),y))}}(Ap(c),u,a,l)}function XE(t,e,n){const s=n.docs.get(e._key),i=new Rp(t);return new GE(t,i,e._key,s,new po(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){qr=n})(Mi),qt(new $t("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new oa(new gP(n.getProvider("auth-internal")),new _P(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ia(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_t(_v,"3.10.0",t),_t(_v,"3.10.0","esm2017")})();const JE="@firebase/installations",Op="0.6.4";/**
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
 */const ZE=1e4,eT=`w:${Op}`,tT="FIS_v2",jL="https://firebaseinstallations.googleapis.com/v1",HL=60*60*1e3,WL="installations",zL="Installations";/**
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
 */const qL={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ci=new qs(WL,zL,qL);function nT(t){return t instanceof un&&t.code.includes("request-failed")}/**
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
 */function sT({projectId:t}){return`${jL}/projects/${t}/installations`}function iT(t){return{token:t.token,requestStatus:2,expiresIn:GL(t.expiresIn),creationTime:Date.now()}}async function rT(t,e){const s=(await e.json()).error;return Ci.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function oT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KL(t,{refreshToken:e}){const n=oT(t);return n.append("Authorization",YL(e)),n}async function aT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GL(t){return Number(t.replace("s","000"))}function YL(t){return`${tT} ${t}`}/**
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
 */async function QL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=sT(t),i=oT(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:tT,appId:t.appId,sdkVersion:eT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await aT(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:iT(c.authToken)}}else throw await rT("Create Installation",l)}/**
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
 */function lT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function XL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const JL=/^[cdef][\w-]{21}$/,Id="";function ZL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=eM(t);return JL.test(n)?n:Id}catch{return Id}}function eM(t){return XL(t).substr(0,22)}/**
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
 */function _u(t){return`${t.appName}!${t.appId}`}/**
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
 */const cT=new Map;function uT(t,e){const n=_u(t);hT(n,e),tM(n,e)}function hT(t,e){const n=cT.get(t);if(!!n)for(const s of n)s(e)}function tM(t,e){const n=nM();n&&n.postMessage({key:t,fid:e}),sM()}let di=null;function nM(){return!di&&"BroadcastChannel"in self&&(di=new BroadcastChannel("[Firebase] FID Change"),di.onmessage=t=>{hT(t.data.key,t.data.fid)}),di}function sM(){cT.size===0&&di&&(di.close(),di=null)}/**
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
 */const iM="firebase-installations-database",rM=1,Si="firebase-installations-store";let ch=null;function xp(){return ch||(ch=qb(iM,rM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Si)}}})),ch}async function tc(t,e){const n=_u(t),i=(await xp()).transaction(Si,"readwrite"),r=i.objectStore(Si),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&uT(t,e.fid),e}async function dT(t){const e=_u(t),s=(await xp()).transaction(Si,"readwrite");await s.objectStore(Si).delete(e),await s.done}async function wu(t,e){const n=_u(t),i=(await xp()).transaction(Si,"readwrite"),r=i.objectStore(Si),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&uT(t,a.fid),a}/**
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
 */async function Pp(t){let e;const n=await wu(t.appConfig,s=>{const i=oM(s),r=aM(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Id?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function oM(t){const e=t||{fid:ZL(),registrationStatus:0};return fT(e)}function aM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=lM(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cM(t)}:{installationEntry:e}}async function lM(t,e){try{const n=await QL(t,e);return tc(t.appConfig,n)}catch(n){throw nT(n)&&n.customData.serverCode===409?await dT(t.appConfig):await tc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cM(t){let e=await ey(t.appConfig);for(;e.registrationStatus===1;)await lT(100),e=await ey(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Pp(t);return s||n}return e}function ey(t){return wu(t,e=>{if(!e)throw Ci.create("installation-not-found");return fT(e)})}function fT(t){return uM(t)?{fid:t.fid,registrationStatus:0}:t}function uM(t){return t.registrationStatus===1&&t.registrationTime+ZE<Date.now()}/**
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
 */async function hM({appConfig:t,heartbeatServiceProvider:e},n){const s=dM(t,n),i=KL(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:eT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await aT(()=>fetch(s,a));if(l.ok){const c=await l.json();return iT(c)}else throw await rT("Generate Auth Token",l)}function dM(t,{fid:e}){return`${sT(t)}/${e}/authTokens:generate`}/**
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
 */async function Dp(t,e=!1){let n;const s=await wu(t.appConfig,r=>{if(!pT(r))throw Ci.create("not-registered");const o=r.authToken;if(!e&&gM(o))return r;if(o.requestStatus===1)return n=fM(t,e),r;{if(!navigator.onLine)throw Ci.create("app-offline");const a=vM(r);return n=pM(t,a),a}});return n?await n:s.authToken}async function fM(t,e){let n=await ty(t.appConfig);for(;n.authToken.requestStatus===1;)await lT(100),n=await ty(t.appConfig);const s=n.authToken;return s.requestStatus===0?Dp(t,e):s}function ty(t){return wu(t,e=>{if(!pT(e))throw Ci.create("not-registered");const n=e.authToken;return yM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pM(t,e){try{const n=await hM(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await tc(t.appConfig,s),n}catch(n){if(nT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await dT(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await tc(t.appConfig,s)}throw n}}function pT(t){return t!==void 0&&t.registrationStatus===2}function gM(t){return t.requestStatus===2&&!mM(t)}function mM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HL}function vM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yM(t){return t.requestStatus===1&&t.requestTime+ZE<Date.now()}/**
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
 */async function _M(t){const e=t,{installationEntry:n,registrationPromise:s}=await Pp(e);return s?s.catch(console.error):Dp(e).catch(console.error),n.fid}/**
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
 */async function wM(t,e=!1){const n=t;return await bM(n),(await Dp(n,e)).token}async function bM(t){const{registrationPromise:e}=await Pp(t);e&&await e}/**
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
 */function EM(t){if(!t||!t.options)throw uh("App Configuration");if(!t.name)throw uh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uh(t){return Ci.create("missing-app-config-values",{valueName:t})}/**
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
 */const gT="installations",TM="installations-internal",IM=t=>{const e=t.getProvider("app").getImmediate(),n=EM(e),s=Li(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},CM=t=>{const e=t.getProvider("app").getImmediate(),n=Li(e,gT).getImmediate();return{getId:()=>_M(n),getToken:i=>wM(n,i)}};function SM(){qt(new $t(gT,IM,"PUBLIC")),qt(new $t(TM,CM,"PRIVATE"))}SM();_t(JE,Op);_t(JE,Op,"esm2017");/**
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
 */const nc="analytics",kM="firebase_id",AM="origin",RM=60*1e3,NM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Wt=new Hr("@firebase/analytics");/**
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
 */const OM={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new qs("analytics","Analytics",OM);/**
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
 */function xM(t){if(!t.startsWith(Lp)){const e=Xt.create("invalid-gtag-resource",{gtagURL:t});return Wt.warn(e.message),""}return t}function mT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function PM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function DM(t,e){const n=PM("firebase-js-sdk-policy",{createScriptURL:xM}),s=document.createElement("script"),i=`${Lp}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function LM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function MM(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await mT(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Wt.error(a)}t("config",i,r)}async function FM(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await mT(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Wt.error(r)}}function $M(t,e,n,s){async function i(r,o,a){try{r==="event"?await FM(t,e,n,o,a):r==="config"?await MM(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){Wt.error(l)}}return i}function UM(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=$M(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function VM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lp)&&n.src.includes(t))return n;return null}/**
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
 */const BM=30,jM=1e3;class HM{constructor(e={},n=jM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vT=new HM;function WM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zM(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:WM(s)},r=NM.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qM(t,e=vT,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Xt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Xt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YM;return setTimeout(async()=>{a.abort()},n!==void 0?n:RM),yT({appId:s,apiKey:i,measurementId:r},o,a,e)}async function yT(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=vT){var r;const{appId:o,measurementId:a}=t;try{await KM(s,e)}catch(l){if(a)return Wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await zM(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!GM(c)){if(i.deleteThrottleMetadata(o),a)return Wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Jm(n,i.intervalMillis,BM):Jm(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Wt.debug(`Calling attemptFetch again in ${u} millis`),yT(t,h,s,i)}}function KM(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function GM(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QM(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function XM(){if(Ff())try{await jb()}catch(t){return Wt.warn(Xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Wt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JM(t,e,n,s,i,r,o){var a;const l=qM(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Wt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Wt.error(f)),e.push(l);const c=XM().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([l,c]);VM(r)||DM(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[AM]="firebase",d.update=!0,h!=null&&(d[kM]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class ZM{constructor(e){this.app=e}_delete(){return delete Ao[this.app.options.appId],Promise.resolve()}}let Ao={},ny=[];const sy={};let hh="dataLayer",eF="gtag",iy,_T,ry=!1;function tF(){const t=[];if(Ub()&&t.push("This is a browser extension environment."),HO()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:e});Wt.warn(n.message)}}function nF(t,e,n){tF();const s=t.options.appId;if(!s)throw Xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(Ao[s]!=null)throw Xt.create("already-exists",{id:s});if(!ry){LM(hh);const{wrappedGtag:r,gtagCore:o}=UM(Ao,ny,sy,hh,eF);_T=r,iy=o,ry=!0}return Ao[s]=JM(t,ny,sy,e,iy,hh,n),new ZM(t)}function sF(t=qc()){t=hn(t);const e=Li(t,nc);return e.isInitialized()?e.getImmediate():iF(t)}function iF(t,e={}){const n=Li(t,nc);if(n.isInitialized()){const i=n.getImmediate();if(Yo(e,n.getOptions()))return i;throw Xt.create("already-initialized")}return n.initialize({options:e})}function rF(t,e,n,s){t=hn(t),QM(_T,Ao[t.app.options.appId],e,n,s).catch(i=>Wt.error(i))}const oy="@firebase/analytics",ay="0.9.5";function oF(){qt(new $t(nc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return nF(s,i,n)},"PUBLIC")),qt(new $t("analytics-internal",t,"PRIVATE")),_t(oy,ay),_t(oy,ay,"esm2017");function t(e){try{const n=e.getProvider(nc).getImmediate();return{logEvent:(s,i,r)=>rF(n,s,i,r)}}catch(n){throw Xt.create("interop-component-reg-failed",{reason:n})}}}oF();const aF={apiKey:"AIzaSyDTIda0nsAIldkPNk6vRoL7IPse4L7NVMg",authDomain:"listify-v2.firebaseapp.com",projectId:"listify-v2",storageBucket:"listify-v2.appspot.com",messagingSenderId:"927463433227",appId:"1:927463433227:web:a0d94a59566a8b16d2930e",measurementId:"G-30WR1BN041"},Mp=Kb(aF);sF(Mp);const lF=BE(Mp),cF=DL(lF,"users");function Fp(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function wT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uF=wT,bT=new qs("auth","Firebase",wT());/**
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
 */const ly=new Hr("@firebase/auth");function wl(t,...e){ly.logLevel<=Se.ERROR&&ly.error(`Auth (${Mi}): ${t}`,...e)}/**
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
 */function ss(t,...e){throw $p(t,...e)}function Ln(t,...e){return $p(t,...e)}function hF(t,e,n){const s=Object.assign(Object.assign({},uF()),{[e]:n});return new qs("auth","Firebase",s).create(e,{appName:t.name})}function $p(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return bT.create(t,...e)}function ie(t,e,...n){if(!t)throw $p(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wl(e),new Error(e)}function is(t,e){t||Kn(e)}/**
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
 */const cy=new Map;function Gn(t){is(t instanceof Function,"Expected a class definition");let e=cy.get(t);return e?(is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cy.set(t,e),e)}/**
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
 */function dF(t,e){const n=Li(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Yo(r,e!=null?e:{}))return i;ss(i,"already-initialized")}return n.initialize({options:e})}function fF(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pF(){return uy()==="http:"||uy()==="https:"}function uy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pF()||Ub()||"connection"in navigator)?navigator.onLine:!0}function mF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,is(n>e,"Short delay should be less than long delay!"),this.isMobile=Mf()||Vb()}get(){return gF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Up(t,e){is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ET{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const yF=new Oa(3e4,6e4);function _F(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bu(t,e,n,s,i={}){return TT(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=jr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ET.fetch()(IT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function TT(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vF),e);try{const i=new bF(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw rl(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hF(t,u,c);ss(t,u)}}catch(i){if(i instanceof un)throw i;ss(t,"network-request-failed",{message:String(i)})}}async function wF(t,e,n,s,i={}){const r=await bu(t,e,n,s,i);return"mfaPendingCredential"in r&&ss(t,"multi-factor-auth-required",{_serverResponse:r}),r}function IT(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Up(t.config,i):`${t.config.apiScheme}://${i}`}class bF{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ln(this.auth,"network-request-failed")),yF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ln(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function EF(t,e){return bu(t,"POST","/v1/accounts:delete",e)}async function TF(t,e){return bu(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ro(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IF(t,e=!1){const n=hn(t),s=await n.getIdToken(e),i=Vp(s);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ro(dh(i.auth_time)),issuedAtTime:Ro(dh(i.iat)),expirationTime:Ro(dh(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function Vp(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=$l(n);return i?JSON.parse(i):(wl("Failed to decode base64 JWT payload"),null)}catch(i){return wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function CF(t){const e=Vp(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof un&&SF(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function SF({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class CT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(t){var e;const n=t.auth,s=await t.getIdToken(),i=await aa(t,TF(n,{idToken:s}));ie(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?NF(r.providerUserInfo):[],a=RF(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new CT(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function AF(t){const e=hn(t);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RF(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function NF(t){return t.map(e=>{var{providerId:n}=e,s=Fp(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function OF(t,e){const n=await TT(t,{},async()=>{const s=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=IT(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ET.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class la{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CF(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await OF(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new la;return s&&(ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new la,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function hs(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _i{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new CT(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IF(this,e)}reload(){return AF(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await sc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await aa(this,EF(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:k,isAnonymous:R,providerData:N,stsTokenManager:O}=n;ie(b&&O,e,"internal-error");const _=la.fromJSON(this.name,O);ie(typeof b=="string",e,"internal-error"),hs(h,e.name),hs(d,e.name),ie(typeof k=="boolean",e,"internal-error"),ie(typeof R=="boolean",e,"internal-error"),hs(f,e.name),hs(p,e.name),hs(m,e.name),hs(y,e.name),hs(w,e.name),hs(E,e.name);const D=new _i({uid:b,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:R,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:_,createdAt:w,lastLoginAt:E});return N&&Array.isArray(N)&&(D.providerData=N.map(F=>Object.assign({},F))),y&&(D._redirectEventId=y),D}static async _fromIdTokenResponse(e,n,s=!1){const i=new la;i.updateFromServerResponse(n);const r=new _i({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await sc(r),r}}/**
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
 */class ST{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ST.type="NONE";const hy=ST;/**
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
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class ur{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=bl(this.userKey,i.apiKey,r),this.fullPersistenceKey=bl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ur(Gn(hy),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Gn(hy);const o=bl(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=_i._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ur(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ur(r,e,s))}}/**
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
 */function dy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OT(e))return"Blackberry";if(xT(e))return"Webos";if(Bp(e))return"Safari";if((e.includes("chrome/")||AT(e))&&!e.includes("edge/"))return"Chrome";if(NT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function kT(t=Pt()){return/firefox\//i.test(t)}function Bp(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AT(t=Pt()){return/crios\//i.test(t)}function RT(t=Pt()){return/iemobile/i.test(t)}function NT(t=Pt()){return/android/i.test(t)}function OT(t=Pt()){return/blackberry/i.test(t)}function xT(t=Pt()){return/webos/i.test(t)}function Eu(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xF(t=Pt()){var e;return Eu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PF(){return jO()&&document.documentMode===10}function PT(t=Pt()){return Eu(t)||NT(t)||xT(t)||OT(t)||/windows phone/i.test(t)||RT(t)}function DF(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function DT(t,e=[]){let n;switch(t){case"Browser":n=dy(Pt());break;case"Worker":n=`${dy(Pt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${s}`}/**
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
 */class LF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class MF{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new LF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?hn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ie(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function jp(t){return hn(t)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=QO(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function FF(t,e,n){const s=jp(t);ie(s._canInitEmulator,s,"emulator-config-failed"),ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=LT(e),{host:o,port:a}=$F(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UF()}function LT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $F(t){const e=LT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:py(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:py(o)}}}function py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UF(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class MT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}/**
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
 */async function hr(t,e){return wF(t,"POST","/v1/accounts:signInWithIdp",_F(t,e))}/**
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
 */const VF="http://localhost";class ki extends MT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ss("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Fp(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ki(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hr(e,n)}buildRequest(){const e={requestUri:VF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jr(n)}return e}}/**
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
 */class FT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xa extends FT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ms extends xa{constructor(){super("facebook.com")}static credential(e){return ki._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.FACEBOOK_SIGN_IN_METHOD="facebook.com";ms.PROVIDER_ID="facebook.com";/**
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
 */class vs extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ki._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return vs.credential(n,s)}catch{return null}}}vs.GOOGLE_SIGN_IN_METHOD="google.com";vs.PROVIDER_ID="google.com";/**
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
 */class ys extends xa{constructor(){super("github.com")}static credential(e){return ki._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ys.credential(e.oauthAccessToken)}catch{return null}}}ys.GITHUB_SIGN_IN_METHOD="github.com";ys.PROVIDER_ID="github.com";/**
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
 */class _s extends xa{constructor(){super("twitter.com")}static credential(e,n){return ki._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return _s.credential(n,s)}catch{return null}}}_s.TWITTER_SIGN_IN_METHOD="twitter.com";_s.PROVIDER_ID="twitter.com";/**
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
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await _i._fromIdTokenResponse(e,s,i),o=gy(s);return new Ar({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=gy(s);return new Ar({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ic extends un{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ic(e,n,s,i)}}function $T(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ic._fromErrorAndOperation(t,r,e,s):r})}async function BF(t,e,n=!1){const s=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ar._forOperation(t,"link",s)}/**
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
 */async function jF(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await aa(t,$T(s,i,e,t),n);ie(r.idToken,s,"internal-error");const o=Vp(r.idToken);ie(o,s,"internal-error");const{sub:a}=o;return ie(t.uid===a,s,"user-mismatch"),Ar._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ss(s,"user-mismatch"),r}}/**
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
 */async function HF(t,e,n=!1){const s="signIn",i=await $T(t,s,e),r=await Ar._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function UT(t,e,n,s){return hn(t).onIdTokenChanged(e,n,s)}function WF(t,e,n){return hn(t).beforeAuthStateChanged(e,n)}const rc="__sak";/**
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
 */class VT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zF(){const t=Pt();return Bp(t)||Eu(t)}const qF=1e3,KF=10;class BT extends VT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zF()&&DF(),this.fallbackToPolling=PT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);PF()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KF):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BT.type="LOCAL";const GF=BT;/**
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
 */class jT extends VT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jT.type="SESSION";const HT=jT;/**
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
 */function YF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Tu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await YF(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
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
 */function Hp(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Hp("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mn(){return window}function XF(t){Mn().location.href=t}/**
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
 */function WT(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function JF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function e$(){return WT()?self:null}/**
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
 */const zT="firebaseLocalStorageDb",t$=1,oc="firebaseLocalStorage",qT="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function n$(){const t=indexedDB.deleteDatabase(zT);return new Pa(t).toPromise()}function Sd(){const t=indexedDB.open(zT,t$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(oc,{keyPath:qT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(oc)?e(s):(s.close(),await n$(),e(await Sd()))})})}async function my(t,e,n){const s=Iu(t,!0).put({[qT]:e,value:n});return new Pa(s).toPromise()}async function s$(t,e){const n=Iu(t,!1).get(e),s=await new Pa(n).toPromise();return s===void 0?null:s.value}function vy(t,e){const n=Iu(t,!0).delete(e);return new Pa(n).toPromise()}const i$=800,r$=3;class KT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>r$)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(e$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JF(),!this.activeServiceWorker)return;this.sender=new QF(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sd();return await my(e,rc,"1"),await vy(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>my(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>s$(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Iu(i,!1).getAll();return new Pa(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),i$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KT.type="LOCAL";const o$=KT;/**
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
 */function a$(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function l$(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ln("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",a$().appendChild(s)})}function c$(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Oa(3e4,6e4);/**
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
 */function u$(t,e){return e?Gn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wp extends MT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function h$(t){return HF(t.auth,new Wp(t),t.bypassAuthState)}function d$(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),jF(n,new Wp(t),t.bypassAuthState)}async function f$(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),BF(n,new Wp(t),t.bypassAuthState)}/**
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
 */class GT{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h$;case"linkViaPopup":case"linkViaRedirect":return f$;case"reauthViaPopup":case"reauthViaRedirect":return d$;default:ss(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const p$=new Oa(2e3,1e4);class Ji extends GT{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=Hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,p$.get())};e()}}Ji.currentPopupAction=null;/**
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
 */const g$="pendingRedirect",El=new Map;class m$ extends GT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const s=await v$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v$(t,e){const n=w$(e),s=_$(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function y$(t,e){El.set(t._key(),e)}function _$(t){return Gn(t._redirectPersistence)}function w$(t){return bl(g$,t.config.apiKey,t.name)}async function b$(t,e,n=!1){const s=jp(t),i=u$(s,e),o=await new m$(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const E$=10*60*1e3;class T${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!I$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!YT(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E$&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function I$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YT(t);default:return!1}}/**
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
 */async function C$(t,e={}){return bu(t,"GET","/v1/projects",e)}/**
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
 */const S$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k$=/^https?/;async function A$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await C$(t);for(const n of e)try{if(R$(n))return}catch{}ss(t,"unauthorized-domain")}function R$(t){const e=Cd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!k$.test(n))return!1;if(S$.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const N$=new Oa(3e4,6e4);function _y(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O$(t){return new Promise((e,n)=>{var s,i,r;function o(){_y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_y(),n(Ln(t,"network-request-failed"))},timeout:N$.get()})}if(!((i=(s=Mn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Mn().gapi)===null||r===void 0)&&r.load)o();else{const a=c$("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},l$(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function x$(t){return Tl=Tl||O$(t),Tl}/**
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
 */const P$=new Oa(5e3,15e3),D$="__/auth/iframe",L$="emulator/auth/iframe",M$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $$(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Up(e,L$):`https://${t.config.authDomain}/${D$}`,s={apiKey:e.apiKey,appName:t.name,v:Mi},i=F$.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${jr(s).slice(1)}`}async function U$(t){const e=await x$(t),n=Mn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:$$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M$,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Mn().setTimeout(()=>{r(o)},P$.get());function l(){Mn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const V$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},B$=500,j$=600,H$="_blank",W$="http://localhost";class wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z$(t,e,n,s=B$,i=j$){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},V$),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Pt().toLowerCase();n&&(a=AT(c)?H$:n),kT(c)&&(e=e||W$,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(xF(c)&&a!=="_self")return q$(e||"",a),new wy(null);const h=window.open(e||"",a,u);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new wy(h)}function q$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const K$="__/auth/handler",G$="emulator/auth/handler";function by(t,e,n,s,i,r){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Mi,eventId:i};if(e instanceof FT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof xa){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Y$(t)}?${jr(a).slice(1)}`}function Y$({config:t}){return t.emulator?Up(t,G$):`https://${t.authDomain}/${K$}`}/**
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
 */const fh="webStorageSupport";class Q${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HT,this._completeRedirectFn=b$,this._overrideRedirectResult=y$}async _openPopup(e,n,s,i){var r;is((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=by(e,n,s,Cd(),i);return z$(e,o,Hp())}async _openRedirect(e,n,s,i){return await this._originValidation(e),XF(by(e,n,s,Cd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await U$(e),s=new T$(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[fh];o!==void 0&&n(!!o),ss(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PT()||Bp()||Eu()}}const X$=Q$;var Ey="@firebase/auth",Ty="0.22.0";/**
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
 */class J${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Z$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eU(t){qt(new $t("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{ie(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),ie(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DT(t)},u=new MF(a,l,c);return fF(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qt(new $t("auth-internal",e=>{const n=jp(e.getProvider("auth").getImmediate());return(s=>new J$(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Ey,Ty,Z$(t)),_t(Ey,Ty,"esm2017")}/**
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
 */const tU=5*60,nU=$b("authIdTokenMaxAge")||tU;let Iy=null;const sU=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nU)return;const i=n==null?void 0:n.token;Iy!==i&&(Iy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iU(t=qc()){const e=Li(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dF(t,{popupRedirectResolver:X$,persistence:[o$,GF,HT]}),s=$b("authTokenSyncURL");if(s){const r=sU(s);WF(n,r,()=>r(n.currentUser)),UT(n,o=>r(o))}const i=Fb("auth");return i&&FF(n,`http://${i}`),n}eU("Browser");/**
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
 */const rU=new Map,oU={activated:!1,tokenObservers:[]};function Un(t){return rU.get(t)||Object.assign({},oU)}const Cy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class aU{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ko,await lU(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ko,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function lU(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const cU={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ac=new qs("appCheck","AppCheck",cU);function uU(t){if(!Un(t).activated)throw ac.create("use-before-activation",{appName:t.name})}/**
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
 */const hU="firebase-app-check-database",dU=1,kd="firebase-app-check-store";let ol=null;function fU(){return ol||(ol=new Promise((t,e)=>{try{const n=indexedDB.open(hU,dU);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(ac.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(kd,{keyPath:"compositeKey"})}}}catch(n){e(ac.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ol)}function pU(t,e){return gU(mU(t),e)}async function gU(t,e){const s=(await fU()).transaction(kd,"readwrite"),r=s.objectStore(kd).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(ac.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function mU(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Ad=new Hr("@firebase/app-check");function Sy(t,e){return Ff()?pU(t,e).catch(n=>{Ad.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const vU={error:"UNKNOWN_ERROR"};function yU(t){return Wc.encodeString(JSON.stringify(t),!1)}async function Rd(t,e=!1){const n=t.app;uU(n);const s=Un(n);let i=s.token,r;if(i&&!go(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(go(l)?i=l:await Sy(n,void 0))}if(!e&&i&&go(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Un(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Ad.warn(l.message):Ad.error(l),r=l}let a;return i?r?go(i)?a={token:i.token,internalError:r}:a=Ay(r):(a={token:i.token},s.token=i,await Sy(n,i)):a=Ay(r),o&&bU(n,a),a}function _U(t,e,n,s){const{app:i}=t,r=Un(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&go(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ky(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ky(t))}function QT(t,e){const n=Un(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function ky(t){const{app:e}=t,n=Un(e);let s=n.tokenRefresher;s||(s=wU(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function wU(t){const{app:e}=t;return new aU(async()=>{const n=Un(e);let s;if(n.token?s=await Rd(t,!0):s=await Rd(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Un(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Cy.RETRIAL_MIN_WAIT,Cy.RETRIAL_MAX_WAIT)}function bU(t,e){const n=Un(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function go(t){return t.expireTimeMillis-Date.now()>0}function Ay(t){return{token:yU(vU),error:t}}/**
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
 */class EU{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Un(this.app);for(const n of e)QT(this.app,n.next);return Promise.resolve()}}function TU(t,e){return new EU(t,e)}function IU(t){return{getToken:e=>Rd(t,e),addTokenListener:e=>_U(t,"INTERNAL",e),removeTokenListener:e=>QT(t.app,e)}}const CU="@firebase/app-check",SU="0.6.4",kU="app-check",Ry="app-check-internal";function AU(){qt(new $t(kU,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return TU(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ry).initialize()})),qt(new $t(Ry,t=>{const e=t.getProvider("app-check").getImmediate();return IU(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),_t(CU,SU)}AU();const XT=Symbol("firebaseApp");function Cu(t){return js()&&De(XT,null)||qc(t)}const xn=()=>{};function zp(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function RU(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function $i(t){return!!t&&typeof t=="object"}const NU=Object.prototype;function OU(t){return $i(t)&&Object.getPrototypeOf(t)===NU}function qp(t){return $i(t)&&t.type==="document"}function JT(t){return $i(t)&&t.type==="collection"}function xU(t){return qp(t)||JT(t)}function PU(t){return $i(t)&&t.type==="query"}function DU(t){return $i(t)&&"ref"in t}function LU(t){return $i(t)&&typeof t.bucket=="string"}function MU(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function FU(){return!!(js()&&De(pw,null))}const al=new WeakMap;function $U(t,e){if(!al.has(t)){const n=Ec(!0);al.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),al.delete(t)}}return al.get(t)}const UU=new WeakMap,ll=new WeakMap;function VU(t){const e=Cu(t);if(!ll.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{ll.set(e,r),n(r.value)}];ll.set(e,i)}return ll.get(e)}function BU(t,e){const n=iU(e);UT(n,s=>{const i=VU();t.value=s,Array.isArray(i)&&i[1](t)})}const Ny="@firebase/database",Oy="0.14.4";/**
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
 */let ZT="";function jU(t){ZT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Go(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return as(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HU(e)}}catch{}return new WU},fi=eI("localStorage"),Nd=eI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Hr("@firebase/database"),zU=function(){let t=1;return function(){return t++}}(),tI=function(t){const e=e1(t),n=new YO;n.update(e);const s=n.digest();return Wc.encodeByteArray(s)},Da=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Da.apply(null,s):typeof s=="object"?e+=yt(s):e+=s,e+=" "}return e};let wi=null,xy=!0;const qU=function(t,e){W(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(dr.logLevel=Se.VERBOSE,wi=dr.log.bind(dr),e&&Nd.set("logging_enabled",!0)):typeof t=="function"?wi=t:(wi=null,Nd.remove("logging_enabled"))},St=function(...t){if(xy===!0&&(xy=!1,wi===null&&Nd.get("logging_enabled")===!0&&qU(!0)),wi){const e=Da.apply(null,t);wi(e)}},La=function(t){return function(...e){St(t,...e)}},Od=function(...t){const e="FIREBASE INTERNAL ERROR: "+Da(...t);dr.error(e)},Ai=function(...t){const e=`FIREBASE FATAL ERROR: ${Da(...t)}`;throw dr.error(e),new Error(e)},Jt=function(...t){const e="FIREBASE WARNING: "+Da(...t);dr.warn(e)},KU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},GU=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rr="[MIN_NAME]",Ri="[MAX_NAME]",Yr=function(t,e){if(t===e)return 0;if(t===Rr||e===Ri)return-1;if(e===Rr||t===Ri)return 1;{const n=Py(t),s=Py(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},YU=function(t,e){return t===e?0:t<e?-1:1},ro=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},Kp=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=yt(e[s]),n+=":",n+=Kp(t[e[s]]);return n+="}",n},sI=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iI=function(t){W(!nI(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},QU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},JU=new RegExp("^-?(0*)\\d{1,10}$"),ZU=-2147483648,eV=2147483647,Py=function(t){if(JU.test(t)){const e=Number(t);if(e>=ZU&&e<=eV)return e}return null},Ma=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},tV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},No=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(St("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}class xd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="5",rI="v",oI="s",aI="r",lI="f",cI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uI="ls",hI="p",Pd="ac",dI="websocket",fI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pI(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let s;if(e===dI)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fI)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rV(t)&&(n.ns=t.namespace);const i=[];return ln(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(){this.counters_={}}incrementCounter(e,n=1){as(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return PO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={},gh={};function Yp(t){const e=t.toString();return ph[e]||(ph[e]=new oV),ph[e]}function aV(t,e){const n=t.toString();return gh[n]||(gh[n]=e()),gh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ma(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="start",cV="close",uV="pLPCommand",hV="pRTLPCB",gI="id",mI="pw",vI="ser",dV="cb",fV="seg",pV="ts",gV="d",mV="dframe",yI=1870,_I=30,vV=yI-_I,yV=25e3,_V=3e4;class Zi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=La(e),this.stats_=Yp(n),this.urlFn=l=>(this.appCheckToken&&(l[Pd]=this.appCheckToken),pI(n,fI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_V)),GU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qp((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dy)this.id=a,this.password=l;else if(o===cV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dy]="t",s[vI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[dV]=this.scriptTagHolder.uniqueCallbackIdentifier),s[rI]=Gp,this.transportSessionId&&(s[oI]=this.transportSessionId),this.lastSessionId&&(s[uI]=this.lastSessionId),this.applicationId&&(s[hI]=this.applicationId),this.appCheckToken&&(s[Pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&cI.test(location.hostname)&&(s[aI]=lI);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return Zi.forceAllow_?!0:!Zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!QU()&&!XU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lb(n),i=sI(s,vV);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[mV]="t",s[gI]=e,s[mI]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qp{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zU(),window[uV+this.uniqueCallbackIdentifier]=e,window[hV+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qp.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){St("frame writing exception"),a.stack&&St(a.stack),St(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||St("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gI]=this.myID,e[mI]=this.myPW,e[vI]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_I+s.length<=yI;){const o=this.pendingSegs.shift();s=s+"&"+fV+i+"="+o.seg+"&"+pV+i+"="+o.ts+"&"+gV+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(yV)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{St("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV=16384,bV=45e3;let lc=null;typeof MozWebSocket<"u"?lc=MozWebSocket:typeof WebSocket<"u"&&(lc=WebSocket);class pn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=La(this.connId),this.stats_=Yp(n),this.connURL=pn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[rI]=Gp,typeof location<"u"&&location.hostname&&cI.test(location.hostname)&&(o[aI]=lI),n&&(o[oI]=n),s&&(o[uI]=s),i&&(o[Pd]=i),r&&(o[hI]=r),pI(e,dI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fi.set("previous_websocket_failure",!0);try{let s;Bb(),this.mySock=new lc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&lc!==null&&!pn.forceDisallow_}static previouslyFailed(){return fi.isInMemoryStorage||fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){fi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Go(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sI(n,wV);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pn.responsesRequiredToBeHealthy=2;pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zi,pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pn&&pn.isAvailable();let s=n&&!pn.previouslyFailed();if(e.webSocketOnly&&(n||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pn];else{const i=this.transports_=[];for(const r of ca.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ca.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ca.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV=6e4,TV=5e3,IV=10*1024,CV=100*1024,mh="t",Ly="d",SV="s",My="r",kV="e",Fy="o",$y="a",Uy="n",Vy="p",AV="h";class RV{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=La("c:"+this.id+":"),this.transportManager_=new ca(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=No(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mh in e){const n=e[mh];n===$y?this.upgradeIfSecondaryHealthy_():n===My?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ro("t",e),s=ro("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$y,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ro("t",e),s=ro("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ro(mh,e);if(Ly in e){const s=e[Ly];if(n===AV){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Uy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===SV?this.onConnectionShutdown_(s):n===My?this.onReset_(s):n===kV?Od("Server Error: "+s):n===Fy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Od("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gp!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),No(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):No(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends bI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cc}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=32,jy=768;class We{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Me(){return new We("")}function be(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Us(t){return t.pieces_.length-t.pieceNum_}function je(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function EI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function NV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function TI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function II(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new We(e,0)}function dt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof We)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new We(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function sn(t,e){const n=be(t),s=be(e);if(n===null)return e;if(n===s)return sn(je(t),je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function CI(t,e){if(Us(t)!==Us(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function mn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Us(t)>Us(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class OV{constructor(e,n){this.errorPrefix_=n,this.parts_=TI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zc(this.parts_[s]);SI(this)}}function xV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zc(e),SI(t)}function PV(t){const e=t.parts_.pop();t.byteLength_-=zc(e),t.parts_.length>0&&(t.byteLength_-=1)}function SI(t){if(t.byteLength_>jy)throw new Error(t.errorPrefix_+"has a key path longer than "+jy+" bytes ("+t.byteLength_+").");if(t.parts_.length>By)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+By+") or object contains a cycle "+si(t))}function si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends bI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Xp}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=1e3,DV=60*5*1e3,Hy=30*1e3,LV=1.3,MV=3e4,FV="server_kill",Wy=3;class Xn extends wI{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=La("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oo,this.maxReconnectDelay_=DV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Bb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(yt(r)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ko,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Xn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&as(e,"w")){const s=wr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||GO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=KO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Od("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MV&&(this.reconnectDelay_=oo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?St("getToken() completed but was canceled"):(St("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new RV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Jt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(FV)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Jt(h),l())}}}interrupt(e){St("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){St("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Kp(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new We(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){St("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wy&&(this.reconnectDelay_=Hy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){St("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ZT.replace(/\./g,"-")]=1,Mf()?e["framework.cordova"]=1:Vb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cc.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ee(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ee(Rr,e),i=new Ee(Rr,n);return this.compare(s,i)!==0}minPost(){return Ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;class kI extends Su{static get __EMPTY_NODE(){return cl}static set __EMPTY_NODE(e){cl=e}compare(e,n){return Yr(e.name,n.name)}isDefinedOn(e){throw Br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(Ri,cl)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,cl)}toString(){return".key"}}const fr=new kI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ht.RED,this.left=i!=null?i:jt.EMPTY_NODE,this.right=r!=null?r:jt.EMPTY_NODE}copy(e,n,s,i,r){return new ht(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return jt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class $V{copy(e,n,s,i,r){return this}insert(e,n,s){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(e,n=jt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new jt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ul(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ul(this.root_,null,this.comparator_,!0,e)}}jt.EMPTY_NODE=new $V;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(t,e){return Yr(t.name,e.name)}function Jp(t,e){return Yr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd;function VV(t){Dd=t}const AI=function(t){return typeof t=="number"?"number:"+iI(t):"string:"+t},RI=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&as(e,".sv"),"Priority must be a string or number.")}else W(t===Dd||t.isEmpty(),"priority of unexpected type.");W(t===Dd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zy;class ct{constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RI(this.priorityNode_)}static set __childrenNodeConstructor(e){zy=e}static get __childrenNodeConstructor(){return zy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:be(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=be(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(W(s!==".priority"||Us(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(je(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iI(this.value_):e+=this.value_,this.lazyHash_=tI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ct.VALUE_TYPE_ORDER.indexOf(n),r=ct.VALUE_TYPE_ORDER.indexOf(s);return W(i>=0,"Unknown leaf type: "+n),W(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NI,OI;function BV(t){NI=t}function jV(t){OI=t}class HV extends Su{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Yr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(Ri,new ct("[PRIORITY-POST]",OI))}makePost(e,n){const s=NI(e);return new Ee(n,new ct("[PRIORITY-POST]",s))}toString(){return".priority"}}const Nt=new HV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WV=Math.log(2);class zV{constructor(e){const n=r=>parseInt(Math.log(r)/WV,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const uc=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ht(d,h.node,ht.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),m=i(f+1,c);return h=t[f],d=n?n(h):h,new ht(d,h.node,ht.BLACK,p,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,m){const y=h-p,w=h;h-=p;const E=i(y+1,w),b=t[y],k=n?n(b):b;f(new ht(k,b.node,m,null,E))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?d(y,ht.BLACK):(d(y,ht.BLACK),d(y,ht.RED))}return u},o=new zV(t.length),a=r(o);return new jt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh;const Ki={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Ki&&Nt,"ChildrenNode.ts has not been loaded"),vh=vh||new Yn({".priority":Ki},{".priority":Nt}),vh}get(e){const n=wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof jt?n:null}hasIndex(e){return as(this.indexSet_,e.toString())}addIndex(e,n){W(e!==fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=uc(s,e.getCompare()):a=Ki;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Yn(u,c)}addToIndexes(e,n){const s=Ul(this.indexes_,(i,r)=>{const o=wr(this.indexSet_,r);if(W(o,"Missing index implementation for "+r),i===Ki)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),uc(a,o.getCompare())}else return Ki;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Ee(e.name,a))),l.insert(e,e.node)}});return new Yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ul(this.indexes_,i=>{if(i===Ki)return i;{const r=n.get(e.name);return r?i.remove(new Ee(e.name,r)):i}});return new Yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;class Re{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&RI(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ao||(ao=new Re(new jt(Jp),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ao}updatePriority(e){return this.children_.isEmpty()?this:new Re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ao:n}}getChild(e){const n=be(e);return n===null?this:this.getImmediateChild(n).getChild(je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ao:this.priorityNode_;return new Re(i,o,r)}}updateChild(e,n){const s=be(e);if(s===null)return n;{W(be(e)!==".priority"||Us(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(je(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Nt,(o,a)=>{n[o]=a.val(e),s++,r&&Re.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AI(this.getPriority().val())+":"),this.forEachChild(Nt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tI(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fa?-1:0}withIndex(e){if(e===fr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Nt),i=n.getIterator(Nt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fr?null:this.indexMap_.get(e.toString())}}Re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qV extends Re{constructor(){super(new jt(Jp),Re.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Re.EMPTY_NODE}isEmpty(){return!1}}const Fa=new qV;Object.defineProperties(Ee,{MIN:{value:new Ee(Rr,Re.EMPTY_NODE)},MAX:{value:new Ee(Ri,Fa)}});kI.__EMPTY_NODE=Re.EMPTY_NODE;ct.__childrenNodeConstructor=Re;VV(Fa);jV(Fa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV=!0;function kt(t,e=null){if(t===null)return Re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,kt(e))}if(!(t instanceof Array)&&KV){const n=[];let s=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=kt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Ee(o,l)))}}),n.length===0)return Re.EMPTY_NODE;const r=uc(n,UV,o=>o.name,Jp);if(s){const o=uc(n,Nt.getCompare());return new Re(r,kt(e),new Yn({".priority":o},{".priority":Nt}))}else return new Re(r,kt(e),Yn.Default)}else{let n=Re.EMPTY_NODE;return ln(t,(s,i)=>{if(as(t,s)&&s.substring(0,1)!=="."){const r=kt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(kt(e))}}BV(kt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV extends Su{constructor(e){super(),this.indexPath_=e,W(!ye(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Yr(e.name,n.name):r}makePost(e,n){const s=kt(e),i=Re.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ee(n,i)}maxPost(){const e=Re.EMPTY_NODE.updateChild(this.indexPath_,Fa);return new Ee(Ri,e)}toString(){return TI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV extends Su{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Yr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,n){const s=kt(e);return new Ee(n,s)}toString(){return".value"}}const QV=new YV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(t){return{type:"value",snapshotNode:t}}function JV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ZV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function eB(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Nt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rr}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Nt}copy(){const e=new Zp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ky(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Nt?n="$priority":t.index_===QV?n="$value":t.index_===fr?n="$key":(W(t.index_ instanceof GV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=yt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+yt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=yt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Nt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends wI{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=La("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hc.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ky(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),wr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=hc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ky(e._queryParams),s=e._path.toString(),i=new Ko;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Go(a.responseText)}catch{Jt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Jt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(){this.rootNode_=Re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){return{value:null,children:new Map}}function xI(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=be(e);t.children.has(s)||t.children.set(s,dc());const i=t.children.get(s);e=je(e),xI(i,e,n)}}function Ld(t,e,n){t.value!==null?n(e,t.value):nB(t,(s,i)=>{const r=new We(e.toString()+"/"+s);Ld(i,r,n)})}function nB(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=10*1e3,iB=30*1e3,rB=5*60*1e3;class oB{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sB(e);const s=Yy+(iB-Yy)*Math.random();No(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ln(e,(i,r)=>{r>0&&as(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),No(this.reportStats_.bind(this),Math.floor(Math.random()*2*rB))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function PI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function DI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function LI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pn.ACK_USER_WRITE,this.source=PI()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new We(e));return new fc(Me(),n,this.revert)}}else return W(be(this.path)===e,"operationForChild called for unrelated child."),new fc(je(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pn.OVERWRITE}operationForChild(e){return ye(this.path)?new Ni(this.source,Me(),this.snap.getImmediateChild(e)):new Ni(this.source,je(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pn.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new We(e));return n.isEmpty()?null:n.value?new Ni(this.source,Me(),n.value):new ua(this.source,Me(),n)}else return W(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ua(this.source,je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=be(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function aB(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(eB(o.childName,o.snapshotNode))}),lo(t,i,"child_removed",e,s,n),lo(t,i,"child_added",e,s,n),lo(t,i,"child_moved",r,s,n),lo(t,i,"child_changed",e,s,n),lo(t,i,"value",e,s,n),i}function lo(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>cB(t,a,l)),o.forEach(a=>{const l=lB(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function lB(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cB(t,e,n){if(e.childName==null||n.childName==null)throw Br("Should only compare child_ events.");const s=new Ee(e.childName,e.snapshotNode),i=new Ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t,e){return{eventCache:t,serverCache:e}}function Oo(t,e,n,s){return MI(new eg(e,n,s),t.serverCache)}function FI(t,e,n,s){return MI(t.eventCache,new eg(e,n,s))}function Md(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Oi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh;const uB=()=>(yh||(yh=new jt(YU)),yh);class Ve{constructor(e,n=uB()){this.value=e,this.children=n}static fromObject(e){let n=new Ve(null);return ln(e,(s,i)=>{n=n.set(new We(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Me(),value:this.value};if(ye(e))return null;{const s=be(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(je(e),n);return r!=null?{path:dt(new We(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=be(e),s=this.children.get(n);return s!==null?s.subtree(je(e)):new Ve(null)}}set(e,n){if(ye(e))return new Ve(n,this.children);{const s=be(e),r=(this.children.get(s)||new Ve(null)).set(je(e),n),o=this.children.insert(s,r);return new Ve(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const n=be(e),s=this.children.get(n);if(s){const i=s.remove(je(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ve(null):new Ve(this.value,r)}else return this}}get(e){if(ye(e))return this.value;{const n=be(e),s=this.children.get(n);return s?s.get(je(e)):null}}setTree(e,n){if(ye(e))return n;{const s=be(e),r=(this.children.get(s)||new Ve(null)).setTree(je(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ve(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(dt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Me(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ye(e))return null;{const r=be(e),o=this.children.get(r);return o?o.findOnPath_(je(e),dt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Me(),n)}foreachOnPath_(e,n,s){if(ye(e))return this;{this.value&&s(n,this.value);const i=be(e),r=this.children.get(i);return r?r.foreachOnPath_(je(e),dt(n,i),s):new Ve(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(dt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.writeTree_=e}static empty(){return new wn(new Ve(null))}}function xo(t,e,n){if(ye(e))return new wn(new Ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=sn(i,e);return r=r.updateChild(o,n),new wn(t.writeTree_.set(i,r))}else{const i=new Ve(n),r=t.writeTree_.setTree(e,i);return new wn(r)}}}function Qy(t,e,n){let s=t;return ln(n,(i,r)=>{s=xo(s,dt(e,i),r)}),s}function Xy(t,e){if(ye(e))return wn.empty();{const n=t.writeTree_.setTree(e,new Ve(null));return new wn(n)}}function Fd(t,e){return Ui(t,e)!=null}function Ui(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(sn(n.path,e)):null}function Jy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Nt,(s,i)=>{e.push(new Ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Ee(s,i.value))}),e}function xs(t,e){if(ye(e))return t;{const n=Ui(t,e);return n!=null?new wn(new Ve(n)):new wn(t.writeTree_.subtree(e))}}function $d(t){return t.writeTree_.isEmpty()}function Nr(t,e){return $I(Me(),t.writeTree_,e)}function $I(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(W(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=$I(dt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(dt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e){return WI(e,t)}function hB(t,e,n,s,i){W(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=xo(t.visibleWrites,e,n)),t.lastWriteId=s}function dB(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function fB(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&pB(a,s.path)?i=!1:mn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return gB(t),!0;if(s.snap)t.visibleWrites=Xy(t.visibleWrites,s.path);else{const a=s.children;ln(a,l=>{t.visibleWrites=Xy(t.visibleWrites,dt(s.path,l))})}return!0}else return!1}function pB(t,e){if(t.snap)return mn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mn(dt(t.path,n),e))return!0;return!1}function gB(t){t.visibleWrites=VI(t.allWrites,mB,Me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mB(t){return t.visible}function VI(t,e,n){let s=wn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)mn(n,o)?(a=sn(n,o),s=xo(s,a,r.snap)):mn(o,n)&&(a=sn(o,n),s=xo(s,Me(),r.snap.getChild(a)));else if(r.children){if(mn(n,o))a=sn(n,o),s=Qy(s,a,r.children);else if(mn(o,n))if(a=sn(o,n),ye(a))s=Qy(s,Me(),r.children);else{const l=wr(r.children,be(a));if(l){const c=l.getChild(je(a));s=xo(s,Me(),c)}}}else throw Br("WriteRecord should have .snap or .children")}}return s}function BI(t,e,n,s,i){if(!s&&!i){const r=Ui(t.visibleWrites,e);if(r!=null)return r;{const o=xs(t.visibleWrites,e);if($d(o))return n;if(n==null&&!Fd(o,Me()))return null;{const a=n||Re.EMPTY_NODE;return Nr(o,a)}}}else{const r=xs(t.visibleWrites,e);if(!i&&$d(r))return n;if(!i&&n==null&&!Fd(r,Me()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(mn(c.path,e)||mn(e,c.path))},a=VI(t.allWrites,o,e),l=n||Re.EMPTY_NODE;return Nr(a,l)}}}function vB(t,e,n){let s=Re.EMPTY_NODE;const i=Ui(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Nt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xs(t.visibleWrites,e);return n.forEachChild(Nt,(o,a)=>{const l=Nr(xs(r,new We(o)),a);s=s.updateImmediateChild(o,l)}),Jy(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xs(t.visibleWrites,e);return Jy(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function yB(t,e,n,s,i){W(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=dt(e,n);if(Fd(t.visibleWrites,r))return null;{const o=xs(t.visibleWrites,r);return $d(o)?i.getChild(n):Nr(o,i.getChild(n))}}function _B(t,e,n,s){const i=dt(e,n),r=Ui(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xs(t.visibleWrites,i);return Nr(o,s.getNode().getImmediateChild(n))}else return null}function wB(t,e){return Ui(t.visibleWrites,e)}function bB(t,e,n,s,i,r,o){let a;const l=xs(t.visibleWrites,e),c=Ui(l,Me());if(c!=null)a=c;else if(n!=null)a=Nr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function EB(){return{visibleWrites:wn.empty(),allWrites:[],lastWriteId:-1}}function Ud(t,e,n,s){return BI(t.writeTree,t.treePath,e,n,s)}function jI(t,e){return vB(t.writeTree,t.treePath,e)}function Zy(t,e,n,s){return yB(t.writeTree,t.treePath,e,n,s)}function pc(t,e){return wB(t.writeTree,dt(t.treePath,e))}function TB(t,e,n,s,i,r){return bB(t.writeTree,t.treePath,e,n,s,i,r)}function tg(t,e,n){return _B(t.writeTree,t.treePath,e,n)}function HI(t,e){return WI(dt(t.treePath,e),t.writeTree)}function WI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IB{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,qy(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ZV(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,JV(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,qy(s,e.snapshotNode,i.oldSnap));else throw Br("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CB{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zI=new CB;class ng{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new eg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tg(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oi(this.viewCache_),r=TB(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function SB(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kB(t,e,n,s,i){const r=new IB;let o,a;if(n.type===Pn.OVERWRITE){const c=n;c.source.fromUser?o=Vd(t,e,c.path,c.snap,s,i,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=gc(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Pn.MERGE){const c=n;c.source.fromUser?o=RB(t,e,c.path,c.children,s,i,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Bd(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Pn.ACK_USER_WRITE){const c=n;c.revert?o=xB(t,e,c.path,s,i,r):o=NB(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Pn.LISTEN_COMPLETE)o=OB(t,e,n.path,s,r);else throw Br("Unknown operation type: "+n.type);const l=r.getChanges();return AB(e,o,l),{viewCache:o,changes:l}}function AB(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Md(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(XV(Md(e)))}}function qI(t,e,n,s,i,r){const o=e.eventCache;if(pc(s,n)!=null)return e;{let a,l;if(ye(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Oi(e),u=c instanceof Re?c:Re.EMPTY_NODE,h=jI(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ud(s,Oi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=be(n);if(c===".priority"){W(Us(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Zy(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=je(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Zy(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=tg(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Oo(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function gc(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=be(n);if(!l.isCompleteForPath(n)&&Us(n)>1)return e;const p=je(n),y=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,p,zI,null)}const h=FI(e,c,l.isFullyInitialized()||ye(n),u.filtersNodes()),d=new ng(i,h,r);return qI(t,h,n,i,d,a)}function Vd(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ng(i,e,r);if(ye(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Oo(e,c,!0,t.filter.filtersNodes());else{const h=be(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Oo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=je(n),f=a.getNode().getImmediateChild(h);let p;if(ye(d))p=s;else{const m=u.getCompleteChild(h);m!=null?EI(d)===".priority"&&m.getChild(II(d)).isEmpty()?p=m:p=m.updateChild(d,s):p=Re.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=Oo(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function e_(t,e){return t.eventCache.isCompleteForChild(e)}function RB(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=dt(n,l);e_(e,be(u))&&(a=Vd(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=dt(n,l);e_(e,be(u))||(a=Vd(t,a,u,c,i,r,o))}),a}function t_(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Bd(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ye(n)?c=s:c=new Ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=t_(t,f,d);l=gc(t,l,new We(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=t_(t,p,d);l=gc(t,l,new We(h),m,i,r,o,a)}}),l}function NB(t,e,n,s,i,r,o){if(pc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gc(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ye(n)){let c=new Ve(null);return l.getNode().forEachChild(fr,(u,h)=>{c=c.set(new We(u),h)}),Bd(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ve(null);return s.foreach((u,h)=>{const d=dt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Bd(t,e,n,c,i,r,a,o)}}function OB(t,e,n,s,i){const r=e.serverCache,o=FI(e,r.getNode(),r.isFullyInitialized()||ye(n),r.isFiltered());return qI(t,o,n,s,zI,i)}function xB(t,e,n,s,i,r){let o;if(pc(s,n)!=null)return e;{const a=new ng(s,e,i),l=e.eventCache.getNode();let c;if(ye(n)||be(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ud(s,Oi(e));else{const h=e.serverCache.getNode();W(h instanceof Re,"serverChildren would be complete if leaf node"),u=jI(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=be(n);let h=tg(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,je(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Re.EMPTY_NODE,je(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ud(s,Oi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||pc(s,Me())!=null,Oo(e,c,o,t.filter.filtersNodes())}}function PB(t,e){const n=Oi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(be(e)).isEmpty())?n.getChild(e):null}function n_(t,e,n,s){e.type===Pn.MERGE&&e.source.queryId!==null&&(W(Oi(t.viewCache_),"We should always have a full cache before handling merges"),W(Md(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=kB(t.processor_,i,e,n,s);return SB(t.processor_,r.viewCache),W(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,DB(t,r.changes,r.viewCache.eventCache.getNode(),null)}function DB(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return aB(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s_;function LB(t){W(!s_,"__referenceConstructor has already been defined"),s_=t}function sg(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return W(r!=null,"SyncTree gave us an op for an invalid query."),n_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(n_(o,e,n,s));return r}}function ig(t,e){let n=null;for(const s of t.views.values())n=n||PB(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_;function MB(t){W(!i_,"__referenceConstructor has already been defined"),i_=t}class r_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=EB(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function FB(t,e,n,s,i){return hB(t.pendingWriteTree_,e,n,s,i),i?Au(t,new Ni(PI(),e,n)):[]}function er(t,e,n=!1){const s=dB(t.pendingWriteTree_,e);if(fB(t.pendingWriteTree_,e)){let r=new Ve(null);return s.snap!=null?r=r.set(Me(),!0):ln(s.children,o=>{r=r.set(new We(o),!0)}),Au(t,new fc(s.path,r,n))}else return[]}function ku(t,e,n){return Au(t,new Ni(DI(),e,n))}function $B(t,e,n){const s=Ve.fromObject(n);return Au(t,new ua(DI(),e,s))}function UB(t,e,n,s){const i=QI(t,s);if(i!=null){const r=XI(i),o=r.path,a=r.queryId,l=sn(o,e),c=new Ni(LI(a),l,n);return JI(t,o,c)}else return[]}function VB(t,e,n,s){const i=QI(t,s);if(i){const r=XI(i),o=r.path,a=r.queryId,l=sn(o,e),c=Ve.fromObject(n),u=new ua(LI(a),l,c);return JI(t,o,u)}else return[]}function KI(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=sn(o,e),c=ig(a,l);if(c)return c});return BI(i,e,r,n,!0)}function Au(t,e){return GI(e,t.syncPointTree_,null,UI(t.pendingWriteTree_,Me()))}function GI(t,e,n,s){if(ye(t.path))return YI(t,e,n,s);{const i=e.get(Me());n==null&&i!=null&&(n=ig(i,Me()));let r=[];const o=be(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=HI(s,o);r=r.concat(GI(a,l,c,u))}return i&&(r=r.concat(sg(i,t,s,n))),r}}function YI(t,e,n,s){const i=e.get(Me());n==null&&i!=null&&(n=ig(i,Me()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=HI(s,o),u=t.operationForChild(o);u&&(r=r.concat(YI(u,a,l,c)))}),i&&(r=r.concat(sg(i,t,s,n))),r}function QI(t,e){return t.tagToQueryMap.get(e)}function XI(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function JI(t,e,n){const s=t.syncPointTree_.get(e);W(s,"Missing sync point for query tag that we're tracking");const i=UI(t.pendingWriteTree_,e);return sg(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rg(n)}node(){return this.node_}}class og{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=dt(this.path_,e);return new og(this.syncTree_,n)}node(){return KI(this.syncTree_,this.path_)}}const BB=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},o_=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jB(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HB(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jB=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},HB=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&W(!1,"Unexpected increment value: "+s);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},WB=function(t,e,n,s){return ag(e,new og(n,t),s)},zB=function(t,e,n){return ag(t,new rg(e),n)};function ag(t,e,n){const s=t.getPriority().val(),i=o_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=o_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ct(a,kt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ct(i))),o.forEachChild(Nt,(a,l)=>{const c=ag(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function cg(t,e){let n=e instanceof We?e:new We(e),s=t,i=be(n);for(;i!==null;){const r=wr(s.node.children,i)||{children:{},childCount:0};s=new lg(i,s,r),n=je(n),i=be(n)}return s}function Qr(t){return t.node.value}function ZI(t,e){t.node.value=e,jd(t)}function eC(t){return t.node.childCount>0}function qB(t){return Qr(t)===void 0&&!eC(t)}function Ru(t,e){ln(t.node.children,(n,s)=>{e(new lg(n,t,s))})}function tC(t,e,n,s){n&&!s&&e(t),Ru(t,i=>{tC(i,e,!0,s)}),n&&s&&e(t)}function KB(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $a(t){return new We(t.parent===null?t.name:$a(t.parent)+"/"+t.name)}function jd(t){t.parent!==null&&GB(t.parent,t.name,t)}function GB(t,e,n){const s=qB(n),i=as(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,jd(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YB=/[\[\].#$\/\u0000-\u001F\u007F]/,QB=/[\[\].#$\u0000-\u001F\u007F]/,_h=10*1024*1024,nC=function(t){return typeof t=="string"&&t.length!==0&&!YB.test(t)},XB=function(t){return typeof t=="string"&&t.length!==0&&!QB.test(t)},JB=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),XB(t)},sC=function(t,e,n){const s=n instanceof We?new OV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+si(s));if(typeof e=="function")throw new Error(t+"contains a function "+si(s)+" with contents = "+e.toString());if(nI(e))throw new Error(t+"contains "+e.toString()+" "+si(s));if(typeof e=="string"&&e.length>_h/3&&zc(e)>_h)throw new Error(t+"contains a string greater than "+_h+" utf8 bytes "+si(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ln(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nC(o)))throw new Error(t+" contains an invalid key ("+o+") "+si(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xV(s,o),sC(t,a,s),PV(s)}),i&&r)throw new Error(t+' contains ".value" child '+si(s)+" in addition to actual children.")}},ZB=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JB(n))throw new Error(ZO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tj(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!CI(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Vi(t,e,n){tj(t,n),nj(t,s=>mn(s,e)||mn(e,s))}function nj(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(sj(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();wi&&St("event: "+n.toString()),Ma(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ij="repo_interrupt",rj=25;class oj{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ej,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dc(),this.transactionQueueTree_=new lg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aj(t,e,n){if(t.stats_=Yp(t.repoInfo_),t.forceRestClient_||tV())t.server_=new hc(t.repoInfo_,(s,i,r,o)=>{a_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>l_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Xn(t.repoInfo_,e,(s,i,r,o)=>{a_(t,s,i,r,o)},s=>{l_(t,s)},s=>{cj(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=aV(t.repoInfo_,()=>new oB(t.stats_,t.server_)),t.infoData_=new tB,t.infoSyncTree_=new r_({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ku(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ug(t,"connected",!1),t.serverSyncTree_=new r_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Vi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function lj(t){const n=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function iC(t){return BB({timestamp:lj(t)})}function a_(t,e,n,s,i){t.dataUpdateCount++;const r=new We(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ul(n,c=>kt(c));o=VB(t.serverSyncTree_,r,l,i)}else{const l=kt(n);o=UB(t.serverSyncTree_,r,l,i)}else if(s){const l=Ul(n,c=>kt(c));o=$B(t.serverSyncTree_,r,l)}else{const l=kt(n);o=ku(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=dg(t,r)),Vi(t.eventQueue_,a,o)}function l_(t,e){ug(t,"connected",e),e===!1&&hj(t)}function cj(t,e){ln(e,(n,s)=>{ug(t,n,s)})}function ug(t,e,n){const s=new We("/.info/"+e),i=kt(n);t.infoData_.updateSnapshot(s,i);const r=ku(t.infoSyncTree_,s,i);Vi(t.eventQueue_,s,r)}function uj(t){return t.nextWriteId_++}function hj(t){rC(t,"onDisconnectEvents");const e=iC(t),n=dc();Ld(t.onDisconnect_,Me(),(i,r)=>{const o=WB(i,r,t.serverSyncTree_,e);xI(n,i,o)});let s=[];Ld(n,Me(),(i,r)=>{s=s.concat(ku(t.serverSyncTree_,i,r));const o=gj(t,i);dg(t,o)}),t.onDisconnect_=dc(),Vi(t.eventQueue_,Me(),s)}function dj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ij)}function rC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),St(n,...e)}function oC(t,e,n){return KI(t.serverSyncTree_,e,n)||Re.EMPTY_NODE}function hg(t,e=t.transactionQueueTree_){if(e||Nu(t,e),Qr(e)){const n=lC(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fj(t,$a(e),n)}else eC(e)&&Ru(e,n=>{hg(t,n)})}function fj(t,e,n){const s=n.map(c=>c.currentWriteId),i=oC(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];W(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=sn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{rC(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(er(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Nu(t,cg(t.transactionQueueTree_,e)),hg(t,t.transactionQueueTree_),Vi(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ma(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Jt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}dg(t,e)}},o)}function dg(t,e){const n=aC(t,e),s=$a(n),i=lC(t,n);return pj(t,i,s),s}function pj(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=sn(n,l.path);let u=!1,h;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rj)u=!0,h="maxretry",i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0));else{const d=oC(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){sC("transaction failed: Data returned ",f,l.path);let p=kt(f);typeof f=="object"&&f!=null&&as(f,".priority")||(p=p.updatePriority(d.getPriority()));const y=l.currentWriteId,w=iC(t),E=zB(p,d,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=E,l.currentWriteId=uj(t),o.splice(o.indexOf(y),1),i=i.concat(FB(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(er(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0))}Vi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Nu(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ma(s[a]);hg(t,t.transactionQueueTree_)}function aC(t,e){let n,s=t.transactionQueueTree_;for(n=be(e);n!==null&&Qr(s)===void 0;)s=cg(s,n),e=je(e),n=be(e);return s}function lC(t,e){const n=[];return cC(t,e,n),n.sort((s,i)=>s.order-i.order),n}function cC(t,e,n){const s=Qr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ru(e,i=>{cC(t,i,n)})}function Nu(t,e){const n=Qr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ZI(e,n.length>0?n:void 0)}Ru(e,s=>{Nu(t,s)})}function gj(t,e){const n=$a(aC(t,e)),s=cg(t.transactionQueueTree_,e);return KB(s,i=>{wh(t,i)}),wh(t,s),tC(s,i=>{wh(t,i)}),n}function wh(t,e){const n=Qr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ZI(e,void 0):n.length=r+1,Vi(t.eventQueue_,$a(e),i);for(let o=0;o<s.length;o++)Ma(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mj(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const c_=function(t,e){const n=yj(t),s=n.namespace;n.domain==="firebase.com"&&Ai(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ai("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||KU();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new iV(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new We(n.pathString)}},yj=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=mj(t.substring(u,h)));const d=vj(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class fg{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ye(this._path)?null:EI(this._path)}get ref(){return new Xr(this._repo,this._path)}get _queryIdentifier(){const e=Gy(this._queryParams),n=Kp(e);return n==="{}"?"default":n}get _queryObject(){return Gy(this._queryParams)}isEqual(e){if(e=hn(e),!(e instanceof fg))return!1;const n=this._repo===e._repo,s=CI(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+NV(this._path)}}class Xr extends fg{constructor(e,n){super(e,n,new Zp,!1)}get parent(){const e=II(this._path);return e===null?null:new Xr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}LB(Xr);MB(Xr);/**
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
 */const _j="FIREBASE_DATABASE_EMULATOR_HOST",Hd={};let wj=!1;function bj(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ai("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),St("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=c_(r,i),a=o.repoInfo,l,c;typeof process<"u"&&{}&&(c={}[_j]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=c_(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new xd(xd.OWNER):new sV(t.name,t.options,e);ZB("Invalid Firebase Database URL",o),ye(o.path)||Ai("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Tj(a,t,u,new nV(t.name,n));return new Ij(h,t)}function Ej(t,e){const n=Hd[e];(!n||n[t.key]!==t)&&Ai(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dj(t),delete n[t.key]}function Tj(t,e,n,s){let i=Hd[e.name];i||(i={},Hd[e.name]=i);let r=i[t.toURLString()];return r&&Ai("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oj(t,wj,n,s),i[t.toURLString()]=r,r}class Ij{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xr(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ej(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ai("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Cj(t){jU(Mi),qt(new $t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return bj(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_t(Ny,Oy,t),_t(Ny,Oy,"esm2017")}Xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Cj();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="firebasestorage.googleapis.com",Sj="storageBucket",kj=2*60*1e3,Aj=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends un{constructor(e,n,s=0){super(bh(e),`Firebase Storage: ${n} (${bh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function bh(t){return"storage/"+t}function Rj(){const t="An unknown error occurred, please check the error payload for server response.";return new jn(Vn.UNKNOWN,t)}function Nj(){return new jn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Oj(){return new jn(Vn.CANCELED,"User canceled the upload/download.")}function xj(t){return new jn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function Pj(t){return new jn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function u_(t){return new jn(Vn.INVALID_ARGUMENT,t)}function hC(){return new jn(Vn.APP_DELETED,"The Firebase app was deleted.")}function Dj(t){return new jn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=vn.makeFromUrl(e,n)}catch{return new vn(e,"")}if(s.path==="")return s;throw Pj(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=n===uC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${m}/${i}/${y}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<b.length;k++){const R=b[k],N=R.regex.exec(e);if(N){const O=N[R.indices.bucket];let _=N[R.indices.path];_||(_=""),s=new vn(O,_),R.postModify(s);break}}if(s==null)throw xj(e);return s}}class Lj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mj(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...w){if(c){d();return}if(y){d(),u.call(null,y,...w);return}if(l()||o){d(),u.call(null,y,...w);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let p=!1;function m(y){p||(p=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function Fj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $j(t){return t!==void 0}function h_(t,e,n,s){if(s<e)throw u_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw u_(`Invalid value for '${t}'. Expected ${n} or less.`)}function Uj(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(mc||(mc={}));/**
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
 */function Vj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new hl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===mc.NO_ERROR,l=r.getStatus();if(!a||Vj(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===mc.ABORT;s(!1,new hl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new hl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());$j(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Rj();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?hC():Oj();o(l)}else{const l=Nj();o(l)}};this.canceled_?n(!1,new hl(!1,null,!0)):this.backoffId_=Mj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function jj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Hj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Wj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qj(t,e,n,s,i,r,o=!0){const a=Uj(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Wj(c,e),jj(c,n),Hj(c,r),zj(c,s),new Bj(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Gj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class vc{constructor(e,n){this._service=e,n instanceof vn?this._location=n:this._location=vn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vc(e,n)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gj(this._location.path)}get storage(){return this._service}get parent(){const e=Kj(this._location.path);if(e===null)return null;const n=new vn(this._location.bucket,e);return new vc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Dj(e)}}function d_(t,e){const n=e==null?void 0:e[Sj];return n==null?null:vn.makeFromBucketSpec(n,t)}class Yj{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=uC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kj,this._maxUploadRetryTime=Aj,this._requests=new Set,i!=null?this._bucket=vn.makeFromBucketSpec(i,this._host):this._bucket=d_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=d_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){h_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){h_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vc(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Lj(hC());{const o=qj(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const f_="@firebase/storage",p_="0.11.2";/**
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
 */const Qj="storage";function Xj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Yj(n,s,i,e,Mi)}function Jj(){qt(new $t(Qj,Xj,"PUBLIC").setMultipleInstances(!0)),_t(f_,p_,""),_t(f_,p_,"esm2017")}Jj();const Eh=new WeakMap;function dC(t,e){return Eh.has(e)||Eh.set(e,t||{f:{},r:{},s:{},u:{}}),Eh.get(e)}function Zj(t,e,n,s){if(!t)return n;const[i,r]=fC(t);if(!i)return n;const o=dC(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function eH(t,e,n,s){if(!t)return;const[i,r]=fC(t);if(!i)return;const o=dC(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(xn),a}function fC(t){return xU(t)||PU(t)?["f",t.path]:DU(t)?["r",t.toString()]:LU(t)?["s",t.toString()]:[]}const Th=new WeakMap;function tH(t,e,n){const s=Cu();Th.has(s)||Th.set(s,new Map);const i=Th.get(s),r=eH(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):xn}const nH={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Wd(t,e,n,s){if(!OU(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const p=Object.getOwnPropertyDescriptor(a,f);p&&!p.enumerable&&Object.defineProperty(h,f,p)});for(const f in a){const p=a[f];if(p==null||p instanceof Date||p instanceof Ft||p instanceof WE)h[f]=p;else if(qp(p)){const m=c+f;h[f]=m in n?l[f]:p.path,d[m]=p.converter?p:p.withConverter(s.converter)}else if(Array.isArray(p)){h[f]=Array(p.length);for(let m=0;m<p.length;m++){const y=p[m];y&&y.path in r&&(h[f][m]=r[y.path])}o(p,l[f]||h[f],c+f+".",[h[f],d])}else $i(p)?(h[f]={},o(p,l[f],c+f+".",[h[f],d])):h[f]=p}}return o(t,e,"",i),i}const pg={reset:!1,wait:!0,maxRefDepth:2,converter:nH,snapshotOptions:{serverTimestamps:"estimate"}};function yc(t){for(const e in t)t[e].unsub()}function zd(t,e,n,s,i,r,o,a,l){const[c,u]=Wd(s.data(t.snapshotOptions),zp(e,n),i,t);r.set(e,n,c),qd(t,e,n,i,u,r,o,a,l)}function sH({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=xn;return a.once?QE(t).then(u=>{u.exists()?zd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Np(t,u=>{u.exists()?zd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),yc(l)}}function qd(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(m=>c.indexOf(m)<0).forEach(m=>{s[m].unsub(),delete s[m]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function p(m){m in f&&++h>=d&&a(n)}c.forEach(m=>{const y=s[m],w=i[m],E=`${n}.${m}`;if(f[E]=!0,y)if(y.path!==w.path)y.unsub();else return;s[m]={data:()=>zp(e,E),unsub:sH({ref:w,target:e,path:E,depth:o,ops:r,resolve:p.bind(null,E),reject:l},t),path:w.path}})}function iH(t,e,n,s,i,r){const o=Object.assign({},pg,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Y(c?[]:t.value);c||n.set(t,h,[]);const f=s;let p,m=xn;const y=[],w={added:({newIndex:b,doc:k})=>{y.splice(b,0,Object.create(null));const R=y[b],[N,O]=Wd(k.data(l),void 0,R,o);n.add(xe(d),b,N),qd(o,d,`${h}.${b}`,R,O,n,0,s.bind(null,k),i)},modified:({oldIndex:b,newIndex:k,doc:R})=>{const N=xe(d),O=y[b],_=N[b],[D,F]=Wd(R.data(l),_,O,o);y.splice(k,0,O),n.remove(N,b),n.add(N,k,D),qd(o,d,`${h}.${k}`,O,F,n,0,s,i)},removed:({oldIndex:b})=>{const k=xe(d);n.remove(k,b),yc(y.splice(b,1)[0])}};function E(b){const k=b.docChanges(a);if(!p&&k.length){p=!0;let R=0;const N=k.length,O=Object.create(null);for(let _=0;_<N;_++)O[k[_].doc.id]=!0;s=_=>{_&&_.id in O&&++R>=N&&(c&&(n.set(t,h,xe(d)),d=t),f(xe(d)),s=xn)}}k.forEach(R=>{w[R.type](R)}),k.length||(c&&(n.set(t,h,xe(d)),d=t),s(xe(d)))}return u?BL(e).then(E).catch(i):m=Np(e,E,i),b=>{if(m(),b){const k=typeof b=="function"?b():[];n.set(t,h,k)}y.forEach(yc)}}function rH(t,e,n,s,i,r){const o=Object.assign({},pg,r),a="value",l=Object.create(null);s=MU(s,()=>zp(t,a));let c=xn;function u(h){h.exists()?zd(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?QE(e).then(u).catch(i):c=Np(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}yc(l)}}function oH(t,e){let n=xn;const s=Object.assign({},pg,e),i=xe(t),r=s.target||Y();FU()&&(s.once=!0);const o=Zj(i,s.ssrKey,r.value,Cu());r.value=o;let l=!(JT(i)?(o||[]).length>0:o!==void 0);const c=Y(!1),u=Y(),h=Sc(),d=ef();let f=xn;function p(){let w=xe(t);const E=new Promise((b,k)=>{if(n(s.reset),!w)return n=xn,b(null);c.value=l,l=!0,w.converter||(w=w.withConverter(s.converter)),n=(qp(w)?rH:iH)(r,w,aH,b,k,s)}).catch(b=>(h.value===E&&(u.value=b),Promise.reject(b))).finally(()=>{h.value===E&&(c.value=!1)});h.value=E}let m=xn;Pe(t)&&(m=Ke(t,p)),p(),i&&(f=tH(h.value,i,s.ssrKey)),js()&&J_(()=>h.value),d&&Tc(y);function y(w=s.reset){m(),f(),n(w)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>y}})}const aH={set:(t,e,n)=>RU(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function FH(t,e){return oH(t,{target:Y([]),...e})}function $H(t){return BE(Cu(t))}function lH(t){return(e,n)=>{const s=$U(e,n).run(()=>Y(t));UU.set(e,s),BU(s,e)}}function cH(t,{firebaseApp:e,modules:n=[]}){t.provide(XT,e);for(const s of n)t.use(s.bind(null,e))}const gg=Bk(Hk);gg.use(cH,{firebaseApp:Mp,usersRef:cF,modules:[lH()]});NO(gg);gg.mount("#app");export{SH as $,Ur as A,Ws as B,Bc as C,_r as D,$r as E,ma as F,Rf as G,Vr as H,Ls as I,zs as J,DH as K,Mr as L,Qa as M,Y as N,mH as O,Cw as P,an as Q,De as R,Ke as S,Hs as T,ha as U,Ss as V,Vs as W,vH as X,en as Y,Ec as Z,Tc as _,Tn as a,DL as a$,Pw as a0,Sw as a1,iA as a2,EH as a3,TH as a4,IH as a5,om as a6,CH as a7,Zk as a8,SA as a9,Dn as aA,rO as aB,ib as aC,nb as aD,Ug as aE,PN as aF,dH as aG,yN as aH,_O as aI,Ef as aJ,Gm as aK,Cb as aL,VN as aM,Sb as aN,HN as aO,Rb as aP,xf as aQ,BN as aR,kb as aS,WN as aT,Ab as aU,lb as aV,NH as aW,Of as aX,$H as aY,uR as aZ,FH as a_,xi as aa,At as ab,Ht as ac,le as ad,Cc as ae,EN as af,bi as ag,Mc as ah,zN as ai,OH as aj,pH as ak,gH as al,gf as am,vt as an,yH as ao,fa as ap,Bs as aq,Rn as ar,Is as as,tt as at,ir as au,wC as av,YN as aw,Lr as ax,xe as ay,or as az,I as b,MH as b0,ff as b1,En as b2,uH as b3,hH as b4,kH as b5,Di as b6,im as b7,RH as b8,wH as b9,AH as ba,Jk as bb,rr as bc,bN as bd,_H as be,Ds as bf,bH as bg,X_ as bh,fH as bi,Iw as bj,IN as bk,T as c,me as d,lt as e,pa as f,Ge as g,LH as h,Fe as i,cn as j,nO as k,QN as l,Pi as m,Vc as n,mN as o,Bn as p,xH as q,oO as r,PH as s,st as t,Ll as u,$k as v,Al as w,Fr as x,ga as y,Af as z};
