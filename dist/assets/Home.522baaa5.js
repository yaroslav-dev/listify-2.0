import{V as Vt,a as At,b as Bt,u as Tt}from"./lists.a6a34ed8.js";import{g as j,c as f,m as M,T as Se,a as ue,p as de,u as _e,t as I,b as C,d as W,e as X,f as It,h as Ft,i as G,I as Z,j as fe,k as Dt,l as $t,n as Rt,V as ie,M as Ze,o as Nt,w as et,v as tt,q as nt,r as we,s as Mt,x as Ht,y as at,z as Le,A as ot,B as it,C as lt,D as st,E as Wt,F as rt,G as Oe,H as ct,J as ut,K as qt,L as zt,N as O,O as J,P as jt,Q as Y,R as Ve,S as R,U as Ae,W as ve,X as Gt,Y as Be,Z as dt,_ as q,$ as Ut,a0 as Te,a1 as Yt,a2 as De,a3 as me,a4 as ye,a5 as $e,a6 as Kt,a7 as Re,a8 as Ne,a9 as Xt,aa as ft,ab as vt,ac as mt,ad as Jt,ae as Qt,af as Zt,ag as Ie,ah as en,ai as tn,aj as nn,ak as ge,al as an,am as on,an as yt,ao as ln,ap as sn,aq as gt,ar as U,as as ee,at as F,au as le,av as he,aw as ht,ax as rn,ay as te,az as se,aA as bt,aB as cn,aC as un,aD as pt,aE as dn,aF as fn,aG as vn,aH as mn,aI as yn,aJ as gn,aK as hn,aL as bn,aM as pn,aN as xn,aO as Sn,aP as wn,aQ as be,aR as kn,aS as Cn,aT as En,aU as Pn,aV as _n,aW as Me,aX as He,aY as Ln}from"./index.fc830b2a.js";import{f as On}from"./forwardRefs.2d67e586.js";import{a as ne,d as Vn,s as ke,b as An,n as xt,B as pe,g as We}from"./easing.6e2d7abd.js";import{V as Bn}from"./VContainer.bd62cc27.js";function St(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Tn(e){for(;e;){if(Fe(e))return e;e=e.parentElement}return document.scrollingElement}function re(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Fe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function In(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Fn=j()({name:"VDialogTransition",props:{target:Object},setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,r){var g;await new Promise(v=>requestAnimationFrame(v)),await new Promise(v=>requestAnimationFrame(v)),o.style.visibility="";const{x:s,y:i,sx:l,sy:d,speed:u}=ze(e.target,o),h=ne(o,[{transform:`translate(${s}px, ${i}px) scale(${l}, ${d})`,opacity:0},{}],{duration:225*u,easing:Vn});(g=qe(o))==null||g.forEach(v=>{ne(v,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*u,easing:ke})}),h.finished.then(()=>r())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,r){var g;await new Promise(v=>requestAnimationFrame(v));const{x:s,y:i,sx:l,sy:d,speed:u}=ze(e.target,o);ne(o,[{},{transform:`translate(${s}px, ${i}px) scale(${l}, ${d})`,opacity:0}],{duration:125*u,easing:An}).finished.then(()=>r()),(g=qe(o))==null||g.forEach(v=>{ne(v,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*u,easing:ke})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?f(Se,M({name:"dialog-transition"},a,{css:!1}),t):f(Se,{name:"dialog-transition"},t)}});function qe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function ze(e,n){const t=e.getBoundingClientRect(),a=xt(n),[o,r]=getComputedStyle(n).transformOrigin.split(" ").map(k=>parseFloat(k)),[s,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=t.left+t.width/2;s==="left"||i==="left"?l-=t.width/2:(s==="right"||i==="right")&&(l+=t.width/2);let d=t.top+t.height/2;s==="top"||i==="top"?d-=t.height/2:(s==="bottom"||i==="bottom")&&(d+=t.height/2);const u=t.width/a.width,h=t.height/a.height,g=Math.max(1,u,h),v=u/g||0,y=h/g||0,m=a.width*a.height/(window.innerWidth*window.innerHeight),S=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:l-(o+a.left),y:d-(r+a.top),sx:v,sy:y,speed:S}}const Dn=j()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ue()},setup(e,n){let{attrs:t}=n;const{themeClasses:a}=de(e),{textColorClasses:o,textColorStyles:r}=_e(I(e,"color")),s=C(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=W(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=W(e.thickness)),i});return X(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,o.value],style:[s.value,r.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),$n=It({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return Ft(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Rn=G({activeColor:String,color:String,collapseIcon:{type:Z,default:"$collapse"},expandIcon:{type:Z,default:"$expand"},prependIcon:Z,appendIcon:Z,fluid:Boolean,subgroup:Boolean,value:null,...fe()},"v-list-group"),je=j()({name:"VListGroup",props:{title:String,...Rn()},setup(e,n){let{slots:t}=n;const{isOpen:a,open:o,id:r}=Dt(I(e,"value"),!0),s=C(()=>`v-list-group--id-${String(r.value)}`),i=$t(),{isBooted:l}=Rt();function d(v){o(!a.value,v)}const u=C(()=>({onClick:d,class:"v-list-group__header",id:s.value})),h=C(()=>a.value?e.collapseIcon:e.expandIcon),g=C(()=>({VListItem:{active:a.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return X(()=>f(e.tag,{class:["v-list-group",{"v-list-group--prepend":i==null?void 0:i.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value}]},{default:()=>[t.activator&&f(ie,{defaults:g.value},{default:()=>[f($n,null,{default:()=>[t.activator({props:u.value,isOpen:a.value})]})]}),f(Ze,{transition:{component:Nt},disabled:!l.value},{default:()=>{var v;return[et(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(v=t.default)==null?void 0:v.call(t)]),[[tt,a.value]])]}})]})),{}}}),Nn=j()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...fe()},setup(e,n){let{slots:t}=n;const{textColorClasses:a,textColorStyles:o}=_e(I(e,"color"));return X(()=>{const r=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value],style:{textColorStyles:o}},{default:()=>{var s,i;return[r&&f("div",{class:"v-list-subheader__text"},[(i=(s=t.default)==null?void 0:s.call(t))!=null?i:e.title])]}})}),{}}}),wt=j()({name:"VListChildren",props:{items:Array},setup(e,n){let{slots:t}=n;return nt(),()=>{var a,o,r;return(r=(a=t.default)==null?void 0:a.call(t))!=null?r:(o=e.items)==null?void 0:o.map(s=>{var y,m,S,k;let{children:i,props:l,type:d,raw:u}=s;if(d==="divider")return(m=(y=t.divider)==null?void 0:y.call(t,{props:l}))!=null?m:f(Dn,l,null);if(d==="subheader")return(k=(S=t.subheader)==null?void 0:S.call(t,{props:l}))!=null?k:f(Nn,l,{default:t.subheader});const h={subtitle:t.subtitle?b=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...b,item:u})}:void 0,prepend:t.prepend?b=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...b,item:u})}:void 0,append:t.append?b=>{var c;return(c=t.append)==null?void 0:c.call(t,{...b,item:u})}:void 0,default:t.default?b=>{var c;return(c=t.default)==null?void 0:c.call(t,{...b,item:u})}:void 0,title:t.title?b=>{var c;return(c=t.title)==null?void 0:c.call(t,{...b,item:u})}:void 0},[g,v]=je.filterProps(l);return i?f(je,M({value:l==null?void 0:l.value},g),{activator:b=>{let{props:c}=b;return t.header?t.header({props:{...l,...c}}):f(we,M(l,c),h)},default:()=>f(wt,{items:i},t)}):t.item?t.item(l):f(we,l,h)})}}}),Mn=G({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Hn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Wn(e,n){const t=J(n,e.itemType,"item"),a=Hn(n)?n:J(n,e.itemTitle),o=J(n,e.itemValue,void 0),r=J(n,e.itemChildren),s=e.itemProps===!0?jt(n,["children"])[1]:J(n,e.itemProps),i={title:a,value:o,...s};return{type:t,title:i.title,value:i.value,props:i,children:t==="item"&&r?kt(e,r):void 0,raw:n}}function kt(e,n){const t=[];for(const a of n)t.push(Wn(e,a));return t}function qn(e){return{items:C(()=>kt(e,e.items))}}const zn=j()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Mt({selectStrategy:"single-leaf",openStrategy:"list"}),...Ht(),...at(),...Le(),...ot(),itemType:{type:String,default:"type"},...Mn(),...it(),...fe(),...ue(),...lt({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:a}=qn(e),{themeClasses:o}=de(e),{backgroundColorClasses:r,backgroundColorStyles:s}=st(I(e,"bgColor")),{borderClasses:i}=Wt(e),{densityClasses:l}=rt(e),{dimensionStyles:d}=Oe(e),{elevationClasses:u}=ct(e),{roundedClasses:h}=ut(e),{open:g,select:v}=qt(e),y=C(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=I(e,"activeColor"),S=I(e,"color");nt(),zt({VListGroup:{activeColor:m,color:S},VListItem:{activeClass:I(e,"activeClass"),activeColor:m,color:S,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),variant:I(e,"variant")}});const k=O(!1),b=O();function c(P){k.value=!0}function D(P){k.value=!1}function L(P){var V;!k.value&&!(P.relatedTarget&&((V=b.value)==null?void 0:V.contains(P.relatedTarget)))&&A()}function H(P){if(!!b.value){if(P.key==="ArrowDown")A("next");else if(P.key==="ArrowUp")A("prev");else if(P.key==="Home")A("first");else if(P.key==="End")A("last");else return;P.preventDefault()}}function A(P){var _,w,p;if(!b.value)return;const V=[...b.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(x=>!x.hasAttribute("disabled")),$=V.indexOf(document.activeElement);if(!P)b.value.contains(document.activeElement)||(_=V[0])==null||_.focus();else if(P==="first")(w=V[0])==null||w.focus();else if(P==="last")(p=V.at(-1))==null||p.focus();else{let x,T=$;const N=P==="next"?1:-1;do T+=N,x=V[T];while((!x||x.offsetParent==null)&&T<V.length&&T>=0);x?x.focus():A(P==="next"?"first":"last")}}return X(()=>f(e.tag,{ref:b,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,r.value,i.value,l.value,u.value,y.value,h.value],style:[s.value,d.value],role:"listbox","aria-activedescendant":void 0,onFocusin:c,onFocusout:D,onFocus:L,onKeydown:H},{default:()=>[f(wt,{items:a.value},t)]})),{open:g,select:v,focus:A}}});const jn=G({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Gn(e,n){const t={},a=o=>()=>{if(!Y)return Promise.resolve(!0);const r=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(s=>{var l;const i=parseInt((l=e[o])!=null?l:0,10);t[o]=window.setTimeout(()=>{n==null||n(r),s(r)},i)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const Ce=Symbol.for("vuetify:v-menu"),Un=G({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...jn()},"v-overlay-activator");function Yn(e,n){let{isActive:t,isTop:a}=n;const o=O();let r=!1,s=!1,i=!0;const l=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!l.value),{runOpenDelay:u,runCloseDelay:h}=Gn(e,c=>{c===(e.openOnHover&&r||l.value&&s)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==c&&(i=!0),t.value=c)}),g={click:c=>{c.stopPropagation(),o.value=c.currentTarget||c.target,t.value=!t.value},mouseenter:c=>{r=!0,o.value=c.currentTarget||c.target,u()},mouseleave:c=>{r=!1,h()},focus:c=>{Ut&&!c.target.matches(":focus-visible")||(s=!0,c.stopPropagation(),o.value=c.currentTarget||c.target,u())},blur:c=>{s=!1,c.stopPropagation(),h()}},v=C(()=>{const c={};return d.value&&(c.click=g.click),e.openOnHover&&(c.mouseenter=g.mouseenter,c.mouseleave=g.mouseleave),l.value&&(c.focus=g.focus,c.blur=g.blur),c}),y=C(()=>{const c={};if(e.openOnHover&&(c.mouseenter=()=>{r=!0,u()},c.mouseleave=()=>{r=!1,h()}),e.closeOnContentClick){const D=Ve(Ce,null);c.click=()=>{t.value=!1,D==null||D.closeParents()}}return c}),m=C(()=>{const c={};return e.openOnHover&&(c.mouseenter=()=>{i&&(r=!0,i=!1,u())},c.mouseleave=()=>{r=!1,h()}),c});R(a,c=>{c&&(e.openOnHover&&!r&&(!l.value||!s)||l.value&&!s&&(!e.openOnHover||!r))&&(t.value=!1)});const S=O();Ae(()=>{!S.value||ve(()=>{const c=S.value;o.value=Gt(c)?c.$el:c})});const k=Be("useActivator");let b;return R(()=>!!e.activator,c=>{c&&Y?(b=dt(),b.run(()=>{Kn(e,k,{activatorEl:o,activatorEvents:v})})):b&&b.stop()},{flush:"post",immediate:!0}),q(()=>{b==null||b.stop()}),{activatorEl:o,activatorRef:S,activatorEvents:v,contentEvents:y,scrimEvents:m}}function Kn(e,n,t){let{activatorEl:a,activatorEvents:o}=t;R(()=>e.activator,(l,d)=>{if(d&&l!==d){const u=i(d);u&&s(u)}l&&ve(()=>r())},{immediate:!0}),R(()=>e.activatorProps,()=>{r()}),q(()=>{s()});function r(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!l||(Object.entries(o.value).forEach(u=>{let[h,g]=u;l.addEventListener(h,g)}),Object.keys(d).forEach(u=>{d[u]==null?l.removeAttribute(u):l.setAttribute(u,d[u])}))}function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!l||(Object.entries(o.value).forEach(u=>{let[h,g]=u;l.removeEventListener(h,g)}),Object.keys(d).forEach(u=>{l.removeAttribute(u)}))}function i(){var u,h;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,d;if(l)if(l==="parent"){let g=(h=(u=n==null?void 0:n.proxy)==null?void 0:u.$el)==null?void 0:h.parentNode;for(;g.hasAttribute("data-no-activator");)g=g.parentNode;d=g}else typeof l=="string"?d=document.querySelector(l):"$el"in l?d=l.$el:d=l;return a.value=(d==null?void 0:d.nodeType)===Node.ELEMENT_NODE?d:null,a.value}}const Xn=G({eager:Boolean},"lazy");function Jn(e,n){const t=O(!1),a=C(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function xe(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Qn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ge(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,r=t==="top"?0:t==="bottom"?n.height:t;return xe({x:o,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,r=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return xe({x:o,y:r},n)}return xe({x:n.width/2,y:n.height/2},n)}const Ct={static:ta,connected:aa},Zn=G({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ct},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function ea(e,n){const t=O({}),a=O();Y&&(Te(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var s,i;R(()=>e.locationStrategy,r),q(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:a.value=(i=Ct[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation}),window.addEventListener("resize",o,{passive:!0}),q(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(r){var s;(s=a.value)==null||s.call(a,r)}return{contentStyles:t,updateLocation:a}}function ta(){}function na(e){const n=xt(e);return n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function aa(e,n,t){In(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed"});const{preferredAnchor:o,preferredOrigin:r}=Yt(()=>{const y=De(n.location,e.isRtl.value),m=n.origin==="overlap"?y:n.origin==="auto"?me(y):De(n.origin,e.isRtl.value);return y.side===m.side&&y.align===ye(m).align?{preferredAnchor:$e(y),preferredOrigin:$e(m)}:{preferredAnchor:y,preferredOrigin:m}}),[s,i,l,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>C(()=>{const m=parseFloat(n[y]);return isNaN(m)?1/0:m})),u=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const y=n.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let h=!1;const g=new ResizeObserver(()=>{h&&v()});R([e.activatorEl,e.contentEl],(y,m)=>{let[S,k]=y,[b,c]=m;b&&g.unobserve(b),S&&g.observe(S),c&&g.unobserve(c),k&&g.observe(k)},{immediate:!0}),q(()=>{g.disconnect()});function v(){if(h=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>h=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const y=e.activatorEl.value.getBoundingClientRect(),m=na(e.contentEl.value),S=re(e.contentEl.value),k=12;S.length||(S.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const b=S.reduce((_,w)=>{const p=w.getBoundingClientRect(),x=new pe({x:w===document.documentElement?0:p.x,y:w===document.documentElement?0:p.y,width:w.clientWidth,height:w.clientHeight});return _?new pe({x:Math.max(_.left,x.left),y:Math.max(_.top,x.top),width:Math.min(_.right,x.right)-Math.max(_.left,x.left),height:Math.min(_.bottom,x.bottom)-Math.max(_.top,x.top)}):x},void 0);b.x+=k,b.y+=k,b.width-=k*2,b.height-=k*2;let c={anchor:o.value,origin:r.value};function D(_){const w=new pe(m),p=Ge(_.anchor,y),x=Ge(_.origin,w);let{x:T,y:N}=Qn(p,x);switch(_.anchor.side){case"top":N-=u.value[0];break;case"bottom":N+=u.value[0];break;case"left":T-=u.value[0];break;case"right":T+=u.value[0];break}switch(_.anchor.align){case"top":N-=u.value[1];break;case"bottom":N+=u.value[1];break;case"left":T-=u.value[1];break;case"right":T+=u.value[1];break}return w.x+=T,w.y+=N,w.width=Math.min(w.width,l.value),w.height=Math.min(w.height,d.value),{overflows:We(w,b),x:T,y:N}}let L=0,H=0;const A={x:0,y:0},P={x:!1,y:!1};let V=-1;for(;;){if(V++>10){Kt("Infinite loop detected in connectedLocationStrategy");break}const{x:_,y:w,overflows:p}=D(c);L+=_,H+=w,m.x+=_,m.y+=w;{const x=Re(c.anchor),T=p.x.before||p.x.after,N=p.y.before||p.y.after;let K=!1;if(["x","y"].forEach(B=>{if(B==="x"&&T&&!P.x||B==="y"&&N&&!P.y){const E={anchor:{...c.anchor},origin:{...c.origin}},z=B==="x"?x==="y"?ye:me:x==="y"?me:ye;E.anchor=z(E.anchor),E.origin=z(E.origin);const{overflows:ae}=D(E);(ae[B].before<=p[B].before&&ae[B].after<=p[B].after||ae[B].before+ae[B].after<(p[B].before+p[B].after)/2)&&(c=E,K=P[B]=!0)}}),K)continue}p.x.before&&(L+=p.x.before,m.x+=p.x.before),p.x.after&&(L-=p.x.after,m.x-=p.x.after),p.y.before&&(H+=p.y.before,m.y+=p.y.before),p.y.after&&(H-=p.y.after,m.y-=p.y.after);{const x=We(m,b);A.x=b.width-x.x.before-x.x.after,A.y=b.height-x.y.before-x.y.after,L+=x.x.before,m.x+=x.x.before,H+=x.y.before,m.y+=x.y.before}break}const $=Re(c.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${c.anchor.side} ${c.anchor.align}`,transformOrigin:`${c.origin.side} ${c.origin.align}`,top:W(Ue(H)),left:W(Ue(L)),minWidth:W($==="y"?Math.min(s.value,y.width):s.value),maxWidth:W(Ye(Ne(A.x,s.value===1/0?0:s.value,l.value))),maxHeight:W(Ye(Ne(A.y,i.value===1/0?0:i.value,d.value)))}),{available:A,contentBox:m}}return R(()=>[o.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>v()),ve(()=>{const y=v();if(!y)return;const{available:m,contentBox:S}=y;S.height>m.y&&requestAnimationFrame(()=>{v(),requestAnimationFrame(()=>{v()})})}),{updateLocation:v}}function Ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ye(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ee=!0;const ce=[];function oa(e){!Ee||ce.length?(ce.push(e),Pe()):(Ee=!1,e(),Pe())}let Ke=-1;function Pe(){cancelAnimationFrame(Ke),Ke=requestAnimationFrame(()=>{const e=ce.shift();e&&e(),ce.length?Pe():Ee=!0})}const oe={none:null,close:sa,block:ra,reposition:ca},ia=G({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in oe}},"v-overlay-scroll-strategies");function la(e,n){if(!Y)return;let t;Ae(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=dt(),await ve(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=oe[e.scrollStrategy])==null||a.call(oe,n,e,t)}))}),q(()=>{t==null||t.stop()})}function sa(e){var t;function n(a){e.isActive.value=!1}Et((t=e.activatorEl.value)!=null?t:e.contentEl.value,n)}function ra(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,a=[...new Set([...re(e.activatorEl.value,n.contained?t:void 0),...re(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,r=(i=>Fe(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((i,l)=>{i.style.setProperty("--v-body-scroll-x",W(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",W(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",W(o)),i.classList.add("v-overlay-scroll-blocked")}),q(()=>{a.forEach((i,l)=>{const d=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-d,i.scrollTop=-u}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function ca(e,n,t){let a=!1,o=-1,r=-1;function s(i){oa(()=>{var u,h;const l=performance.now();(h=(u=e.updateLocation).value)==null||h.call(u,i),a=(performance.now()-l)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{var i;Et((i=e.activatorEl.value)!=null?i:e.contentEl.value,l=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{s(l)})})):s(l)})})}),q(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(o)})}function Et(e,n){const t=[document,...re(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),q(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}function ua(){if(!Y)return O(!1);const{ssr:e}=Xt();if(e){const n=O(!1);return ft(()=>{n.value=!0}),n}else return O(!0)}function Pt(){const n=Be("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Xe=Symbol.for("vuetify:stack"),Q=vt([]);function da(e,n,t){const a=Be("useStack"),o=!t,r=Ve(Xe,void 0),s=vt({activeChildren:new Set});mt(Xe,s);const i=O(+n.value);Te(e,()=>{var h;const u=(h=Q.at(-1))==null?void 0:h[1];i.value=u?u+10:+n.value,o&&Q.push([a.uid,i.value]),r==null||r.activeChildren.add(a.uid),q(()=>{if(o){const g=Jt(Q).findIndex(v=>v[0]===a.uid);Q.splice(g,1)}r==null||r.activeChildren.delete(a.uid)})});const l=O(!0);o&&Ae(()=>{var h;const u=((h=Q.at(-1))==null?void 0:h[0])===a.uid;setTimeout(()=>l.value=u)});const d=C(()=>!s.activeChildren.size);return{globalTop:Qt(l),localTop:d,stackStyles:C(()=>({zIndex:i.value}))}}function fa(e){return{teleportTarget:C(()=>{const t=e.value;if(t===!0||!Y)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function va(){return!0}function _t(e,n,t){if(!e||Lt(e,t)===!1)return!1;const a=St(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(r=>r==null?void 0:r.contains(e.target))}function Lt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||va)(e)}function ma(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&_t(e,n,t)&&setTimeout(()=>{Lt(e,t)&&a&&a(e)},0)}function Je(e,n){const t=St(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const ya={mounted(e,n){const t=o=>ma(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=_t(o,e,n)};Je(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){!e._clickOutside||(Je(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function ga(e){const{modelValue:n,color:t,...a}=e;return f(Se,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&f("div",M({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Ot=G({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Un(),...Le(),...Xn(),...Zn(),...ia(),...ue(),...Zt()},"v-overlay"),Qe=j()({name:"VOverlay",directives:{ClickOutside:ya},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ot()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const r=Ie(e,"modelValue"),s=C({get:()=>r.value,set:E=>{E&&e.disabled||(r.value=E)}}),{teleportTarget:i}=fa(C(()=>e.attach||e.contained)),{themeClasses:l}=de(e),{rtlClasses:d,isRtl:u}=en(),{hasContent:h,onAfterLeave:g}=Jn(e,s),v=st(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:y,localTop:m,stackStyles:S}=da(s,I(e,"zIndex"),e._disableGlobalStack),{activatorEl:k,activatorRef:b,activatorEvents:c,contentEvents:D,scrimEvents:L}=Yn(e,{isActive:s,isTop:m}),{dimensionStyles:H}=Oe(e),A=ua(),{scopeId:P}=Pt();R(()=>e.disabled,E=>{E&&(s.value=!1)});const V=O(),$=O(),{contentStyles:_,updateLocation:w}=ea(e,{isRtl:u,contentEl:$,activatorEl:k,isActive:s});la(e,{root:V,contentEl:$,activatorEl:k,isActive:s,updateLocation:w});function p(E){o("click:outside",E),e.persistent?B():s.value=!1}function x(){return s.value&&y.value}Y&&R(s,E=>{E?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(E){E.key==="Escape"&&y.value&&(e.persistent?B():s.value=!1)}const N=tn();Te(()=>e.closeOnBack,()=>{nn(N,E=>{y.value&&s.value?(E(!1),e.persistent?B():s.value=!1):E()})});const K=O();R(()=>s.value&&(e.absolute||e.contained)&&i.value==null,E=>{if(E){const z=Tn(V.value);z&&z!==document.scrollingElement&&(K.value=z.scrollTop)}});function B(){e.noClickAnimation||$.value&&ne($.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ke})}return X(()=>{var E;return f(yt,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:s.value,props:M({ref:b},ge(c.value),e.activatorProps)}),A.value&&f(an,{disabled:!i.value,to:i.value},{default:()=>[h.value&&f("div",M({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},l.value,d.value],style:[S.value,{top:W(K.value)}],ref:V},P,a),[f(ga,M({color:v,modelValue:s.value&&!!e.scrim},ge(L.value)),null),f(Ze,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterLeave:()=>{g(),o("afterLeave")}},{default:()=>{var z;return[et(f("div",M({ref:$,class:["v-overlay__content",e.contentClass],style:[H.value,_.value]},ge(D.value),e.contentProps),[(z=t.default)==null?void 0:z.call(t,{isActive:s})]),[[tt,s.value],[on("click-outside"),{handler:p,closeConditional:x,include:()=>[k.value]}]])]}})])]})])}),{activatorEl:k,animateClick:B,contentEl:$,globalTop:y,localTop:m,updateLocation:w}}}),ha=j()({name:"VMenu",props:{id:String,...ln(Ot({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Fn}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=Ie(e,"modelValue"),{scopeId:o}=Pt(),r=sn(),s=C(()=>e.id||`v-menu-${r}`),i=O(),l=Ve(Ce,null),d=O(0);mt(Ce,{register(){++d.value},unregister(){--d.value},closeParents(){setTimeout(()=>{d.value||(a.value=!1,l==null||l.closeParents())},40)}}),R(a,g=>{g?l==null||l.register():l==null||l.unregister()});function u(){l==null||l.closeParents()}const h=C(()=>M({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":s.value},e.activatorProps));return X(()=>{const[g]=Qe.filterProps(e);return f(Qe,M({ref:i,class:["v-menu"]},g,{modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,absolute:!0,activatorProps:h.value,"onClick:outside":u},o),{activator:t.activator,default:function(){for(var v=arguments.length,y=new Array(v),m=0;m<v;m++)y[m]=arguments[m];return f(ie,{root:!0},{default:()=>{var S;return[(S=t.default)==null?void 0:S.call(t,...y)]}})}})}),On({id:s,\u03A8openChildren:d},i)}}),ba={class:"count"},pa=gt({__name:"ListCard",props:["list"],emits:["delete-list"],setup(e,{emit:n}){const t=e,a=C(()=>t.list.items.filter(s=>s.completed).length),o=()=>{n("delete-list",t.list.id)};return(r,s)=>(U(),ee(Bt,{class:"col-md-6 my-2 d-flex align-center",color:"#f8f6ff",elevation:"0",density:"default"},{default:F(()=>[f(Vt,{class:"px-0 pl-4 d-flex flex-grow-1"},{default:F(()=>[le(he(e.list.title)+" ",1),f(ht),rn("span",ba,he(te(a))+"/"+he(e.list.items.length),1)]),_:1}),f(At,{class:"px-0 py-0"},{default:F(()=>[f(ha,{bottom:"",left:"","close-on-click":""},{activator:F(({props:i})=>[f(se,M({icon:""},i),{default:F(()=>[f(bt,{icon:"more_vert"})]),_:2},1040)]),default:F(()=>[f(zn,null,{default:F(()=>[f(we,{onClick:s[0]||(s[0]=i=>o())},{default:F(()=>[f(cn,null,{default:F(()=>[le("Delete")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const xa={},Sa={class:"loader-container"};function wa(e,n){return U(),pt("div",Sa,[f(dn,{size:"70",width:"5",color:"primary",indeterminate:""})])}const ka=un(xa,[["render",wa],["__scopeId","data-v-1b31061b"]]);const Ca=fn("v-alert-title"),Ea=["success","info","warning","error"],Pa=j()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Z,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ea.includes(e)},...at(),...Le(),...ot(),...vn(),...mn(),...it(),...fe(),...ue(),...lt({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{emit:t,slots:a}=n;const o=Ie(e,"modelValue"),r=C(()=>{var L;if(e.icon!==!1)return e.type?(L=e.icon)!=null?L:`$${e.type}`:e.icon}),s=C(()=>{var L;return{color:(L=e.color)!=null?L:e.type,variant:e.variant}}),{themeClasses:i}=de(e),{colorClasses:l,colorStyles:d,variantClasses:u}=yn(s),{densityClasses:h}=rt(e),{dimensionStyles:g}=Oe(e),{elevationClasses:v}=ct(e),{locationStyles:y}=gn(e),{positionClasses:m}=hn(e),{roundedClasses:S}=ut(e),{textColorClasses:k,textColorStyles:b}=_e(I(e,"borderColor")),{t:c}=bn(),D=C(()=>({"aria-label":c(e.closeLabel),onClick(L){o.value=!1,t("click:close",L)}}));return()=>{const L=!!(a.prepend||r.value),H=!!(a.title||e.title),A=!!(e.text||a.text),P=!!(a.close||e.closable);return o.value&&f(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},i.value,l.value,h.value,v.value,m.value,S.value,u.value],style:[d.value,g.value,y.value],role:"alert"},{default:()=>{var V,$,_;return[pn(!1,"v-alert"),e.border&&f("div",{key:"border",class:["v-alert__border",k.value],style:b.value},null),L&&f("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?f(ie,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},a.prepend):f(bt,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),f("div",{class:"v-alert__content"},[H&&f(Ca,{key:"title"},{default:()=>{var w,p;return[(p=(w=a.title)==null?void 0:w.call(a))!=null?p:e.title]}}),A&&(($=(V=a.text)==null?void 0:V.call(a))!=null?$:e.text),(_=a.default)==null?void 0:_.call(a)]),a.append&&f("div",{key:"append",class:"v-alert__append"},[a.append()]),P&&f("div",{key:"close",class:"v-alert__close"},[a.close?f(ie,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var w;return[(w=a.close)==null?void 0:w.call(a,{props:D.value})]}}):f(se,M({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},D.value),null)])]}})}}}),Ba=gt({__name:"Home",setup(e){var h,g;const n=Tt(),t=O(((g=(h=n.lists)==null?void 0:h.value)==null?void 0:g.length)||0),a=C(()=>n.lists),o=O(!1);R(n,()=>{var v,y;t.value=(y=(v=n.lists)==null?void 0:v.value)==null?void 0:y.length,setTimeout(()=>{o.value=!0},1e3)});const r=xn();Sn(()=>{n.getLists(),r.hideNavBar(!1)}),ft(()=>{r.setTitle("Lists")});const s=()=>{d({})},i=wn(),l=Pn(),d=v=>{if(Object.keys(v).length)r.hideNavBar(!0),n.currentList=v,l.push({path:`/list/${v.id}`,name:"List"});else{r.hideNavBar(!0);let y={id:Date.now(),items:[],title:"New list"};n.currentList=y,l.push({path:`/list/${y.id}`,name:"List"})}},u=async v=>{var y;await _n(Me(He(Me(He(Ln,"users"),(y=i.value)==null?void 0:y.uid),"lists"),`${v}`))};return(v,y)=>(U(),ee(Bn,null,{default:F(()=>[f(Cn,null,{default:F(()=>[!te(a)&&!t.value?(U(),ee(ka,{key:0})):be("",!0),te(a)&&t.value?(U(!0),pt(yt,{key:1},kn(te(a).value,(m,S)=>(U(),ee(pa,{list:m,key:S,onClick:k=>d(m),onDeleteList:k=>u(m.id)},null,8,["list","onClick","onDeleteList"]))),128)):be("",!0),te(a)&&!t.value&&o.value?(U(),ee(Pa,{key:2,border:"start"},{default:F(()=>[le(" No data. ")]),_:1})):be("",!0)]),_:1}),f(En,{color:"transparent",order:"1",location:"bottom",density:"compact",flat:"",floating:""},{default:F(()=>[f(se,{color:"primary",class:"fab","prepend-icon":"add",onClick:s},{default:F(()=>[le(" new list ")]),_:1}),f(ht),f(se,{color:"primary",icon:"filter_list",density:"comfortable"})]),_:1})]),_:1}))}});export{Ba as default};
