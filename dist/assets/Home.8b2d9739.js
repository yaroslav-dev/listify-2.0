import{g as z,c as f,m as W,T as ge,a as le,p as se,u as Qe,t as B,b as x,d as H,e as G,f as Ze,h as Bt,i as Y,I as U,j as re,k as Tt,l as Ft,n as Dt,V as te,M as et,o as Rt,w as we,v as tt,q as nt,r as he,s as $t,x as at,y as Ee,z as Pe,A as ot,B as it,C as lt,D as st,E as rt,F as ct,G as Ae,H as ut,J as dt,K as Mt,L as ft,N as L,O as J,P as Nt,Q as Oe,R as Te,S as Ht,U as Wt,W as qt,X as zt,Y as jt,Z as Gt,_ as Ut,$ as Yt,a0 as Kt,a1 as Xt,a2 as vt,a3 as Jt,a4 as Qt,a5 as Zt,a6 as K,a7 as Ve,a8 as R,a9 as _e,aa as ce,ab as en,ac as Le,ad as mt,ae as q,af as tn,ag as Ie,ah as nn,ai as Fe,aj as ue,ak as de,al as De,am as an,an as Re,ao as $e,ap as on,aq as yt,ar as gt,as as ht,at as ln,au as sn,av as rn,aw as pt,ax as cn,ay as un,az as dn,aA as fe,aB as fn,aC as bt,aD as vn,aE as mn,aF as St,aG as Z,aH as pe,aI as N,aJ as Me,aK as ve,aL as yn,aM as gn,aN as be,aO as hn,aP as pn,aQ as bn,aR as Sn,aS as kn,aT as Ne,aU as xn,aV as Cn,aW as wn,aX as En}from"./index.eb29ee6e.js";import{a as ee,d as Pn,s as Se,b as An,n as kt,B as me,g as He,f as On}from"./forwardRefs.a10f9ca4.js";import{u as Vn}from"./lists.1fd296b1.js";import{V as _n}from"./VContainer.246abaa9.js";function xt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Ln(e){for(;e;){if(Be(e))return e;e=e.parentElement}return document.scrollingElement}function oe(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Be(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Be(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function In(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Bn=z()({name:"VDialogTransition",props:{target:Object},setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,s){var y;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),o.style.visibility="";const{x:r,y:i,sx:l,sy:d,speed:u}=qe(e.target,o),v=ee(o,[{transform:`translate(${r}px, ${i}px) scale(${l}, ${d})`,opacity:0},{}],{duration:225*u,easing:Pn});(y=We(o))==null||y.forEach(h=>{ee(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*u,easing:Se})}),v.finished.then(()=>s())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,s){var y;await new Promise(h=>requestAnimationFrame(h));const{x:r,y:i,sx:l,sy:d,speed:u}=qe(e.target,o);ee(o,[{},{transform:`translate(${r}px, ${i}px) scale(${l}, ${d})`,opacity:0}],{duration:125*u,easing:An}).finished.then(()=>s()),(y=We(o))==null||y.forEach(h=>{ee(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*u,easing:Se})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?f(ge,W({name:"dialog-transition"},a,{css:!1}),t):f(ge,{name:"dialog-transition"},t)}});function We(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function qe(e,n){const t=e.getBoundingClientRect(),a=kt(n),[o,s]=getComputedStyle(n).transformOrigin.split(" ").map(C=>parseFloat(C)),[r,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=t.left+t.width/2;r==="left"||i==="left"?l-=t.width/2:(r==="right"||i==="right")&&(l+=t.width/2);let d=t.top+t.height/2;r==="top"||i==="top"?d-=t.height/2:(r==="bottom"||i==="bottom")&&(d+=t.height/2);const u=t.width/a.width,v=t.height/a.height,y=Math.max(1,u,v),h=u/y||0,p=v/y||0,m=a.width*a.height/(window.innerWidth*window.innerHeight),k=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:l-(o+a.left),y:d-(s+a.top),sx:h,sy:p,speed:k}}const Tn=z()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...le()},setup(e,n){let{attrs:t}=n;const{themeClasses:a}=se(e),{textColorClasses:o,textColorStyles:s}=Qe(B(e,"color")),r=x(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=H(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=H(e.thickness)),i});return G(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,o.value],style:[r.value,s.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Fn=Ze({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return Bt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Dn=Y({activeColor:String,color:String,collapseIcon:{type:U,default:"$collapse"},expandIcon:{type:U,default:"$expand"},prependIcon:U,appendIcon:U,fluid:Boolean,subgroup:Boolean,value:null,...re()},"v-list-group"),ze=z()({name:"VListGroup",props:{title:String,...Dn()},setup(e,n){let{slots:t}=n;const{isOpen:a,open:o,id:s}=Tt(B(e,"value"),!0),r=x(()=>`v-list-group--id-${String(s.value)}`),i=Ft(),{isBooted:l}=Dt();function d(h){o(!a.value,h)}const u=x(()=>({onClick:d,class:"v-list-group__header",id:r.value})),v=x(()=>a.value?e.collapseIcon:e.expandIcon),y=x(()=>({VListItem:{active:a.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}}));return G(()=>f(e.tag,{class:["v-list-group",{"v-list-group--prepend":i==null?void 0:i.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value}]},{default:()=>[t.activator&&f(te,{defaults:y.value},{default:()=>[f(Fn,null,{default:()=>[t.activator({props:u.value,isOpen:a.value})]})]}),f(et,{transition:{component:Rt},disabled:!l.value},{default:()=>{var h;return[we(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":r.value},[(h=t.default)==null?void 0:h.call(t)]),[[tt,a.value]])]}})]})),{}}}),Rn=z()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...re()},setup(e,n){let{slots:t}=n;const{textColorClasses:a,textColorStyles:o}=Qe(B(e,"color"));return G(()=>{const s=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value],style:{textColorStyles:o}},{default:()=>{var r,i;return[s&&f("div",{class:"v-list-subheader__text"},[(i=(r=t.default)==null?void 0:r.call(t))!=null?i:e.title])]}})}),{}}}),Ct=z()({name:"VListChildren",props:{items:Array},setup(e,n){let{slots:t}=n;return nt(),()=>{var a,o,s;return(s=(a=t.default)==null?void 0:a.call(t))!=null?s:(o=e.items)==null?void 0:o.map(r=>{var p,m,k,C;let{children:i,props:l,type:d,raw:u}=r;if(d==="divider")return(m=(p=t.divider)==null?void 0:p.call(t,{props:l}))!=null?m:f(Tn,l,null);if(d==="subheader")return(C=(k=t.subheader)==null?void 0:k.call(t,{props:l}))!=null?C:f(Rn,l,{default:t.subheader});const v={subtitle:t.subtitle?g=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...g,item:u})}:void 0,prepend:t.prepend?g=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...g,item:u})}:void 0,append:t.append?g=>{var c;return(c=t.append)==null?void 0:c.call(t,{...g,item:u})}:void 0,default:t.default?g=>{var c;return(c=t.default)==null?void 0:c.call(t,{...g,item:u})}:void 0,title:t.title?g=>{var c;return(c=t.title)==null?void 0:c.call(t,{...g,item:u})}:void 0},[y,h]=ze.filterProps(l);return i?f(ze,W({value:l==null?void 0:l.value},y),{activator:g=>{let{props:c}=g;return t.header?t.header({props:{...l,...c}}):f(he,W(l,c),v)},default:()=>f(Ct,{items:i},t)}):t.item?t.item(l):f(he,l,v)})}}}),$n=Y({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Mn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Nn(e,n){const t=J(n,e.itemType,"item"),a=Mn(n)?n:J(n,e.itemTitle),o=J(n,e.itemValue,void 0),s=J(n,e.itemChildren),r=e.itemProps===!0?Nt(n,["children"])[1]:J(n,e.itemProps),i={title:a,value:o,...r};return{type:t,title:i.title,value:i.value,props:i,children:t==="item"&&s?wt(e,s):void 0,raw:n}}function wt(e,n){const t=[];for(const a of n)t.push(Nn(e,a));return t}function Hn(e){return{items:x(()=>wt(e,e.items))}}const Wn=z()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...$t({selectStrategy:"single-leaf",openStrategy:"list"}),...at(),...Ee(),...Pe(),...ot(),itemType:{type:String,default:"type"},...$n(),...it(),...re(),...le(),...lt({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:a}=Hn(e),{themeClasses:o}=se(e),{backgroundColorClasses:s,backgroundColorStyles:r}=st(B(e,"bgColor")),{borderClasses:i}=rt(e),{densityClasses:l}=ct(e),{dimensionStyles:d}=Ae(e),{elevationClasses:u}=ut(e),{roundedClasses:v}=dt(e),{open:y,select:h}=Mt(e),p=x(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=B(e,"activeColor"),k=B(e,"color");nt(),ft({VListGroup:{activeColor:m,color:k},VListItem:{activeClass:B(e,"activeClass"),activeColor:m,color:k,density:B(e,"density"),disabled:B(e,"disabled"),lines:B(e,"lines"),nav:B(e,"nav"),variant:B(e,"variant")}});const C=L(!1),g=L();function c(P){C.value=!0}function T(P){C.value=!1}function $(P){var V;!C.value&&!(P.relatedTarget&&((V=g.value)==null?void 0:V.contains(P.relatedTarget)))&&O()}function M(P){if(!!g.value){if(P.key==="ArrowDown")O("next");else if(P.key==="ArrowUp")O("prev");else if(P.key==="Home")O("first");else if(P.key==="End")O("last");else return;P.preventDefault()}}function O(P){var A,w,S;if(!g.value)return;const V=[...g.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(b=>!b.hasAttribute("disabled")),F=V.indexOf(document.activeElement);if(!P)g.value.contains(document.activeElement)||(A=V[0])==null||A.focus();else if(P==="first")(w=V[0])==null||w.focus();else if(P==="last")(S=V.at(-1))==null||S.focus();else{let b,I=F;const D=P==="next"?1:-1;do I+=D,b=V[I];while((!b||b.offsetParent==null)&&I<V.length&&I>=0);b?b.focus():O(P==="next"?"first":"last")}}return G(()=>f(e.tag,{ref:g,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,s.value,i.value,l.value,u.value,p.value,v.value],style:[r.value,d.value],role:"listbox","aria-activedescendant":void 0,onFocusin:c,onFocusout:T,onFocus:$,onKeydown:M},{default:()=>[f(Ct,{items:a.value},t)]})),{open:y,select:h,focus:O}}});const Et=Ze({name:"VCardActions",setup(e,n){let{slots:t}=n;return ft({VBtn:{variant:"text"}}),G(()=>{var a;return f("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),qn=Oe("v-card-subtitle"),Pt=Oe("v-card-title"),zn=z()({name:"VCardItem",props:{appendAvatar:String,appendIcon:U,prependAvatar:String,prependIcon:U,subtitle:String,title:String,...Ee()},setup(e,n){let{slots:t}=n;return G(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),r=!!(s||t.append),i=!!(e.title||t.title),l=!!(e.subtitle||t.subtitle);return f("div",{class:"v-card-item"},[o&&f("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?f(te,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&f(Te,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),f("div",{class:"v-card-item__content"},[i&&f(Pt,{key:"title"},{default:()=>{var u,v;return[(v=(u=t.title)==null?void 0:u.call(t))!=null?v:e.title]}}),l&&f(qn,{key:"subtitle"},{default:()=>{var u,v;return[(v=(u=t.subtitle)==null?void 0:u.call(t))!=null?v:e.subtitle]}}),(d=t.default)==null?void 0:d.call(t)]),r&&f("div",{key:"append",class:"v-card-item__append"},[t.append?f(te,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&f(Te,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),jn=Oe("v-card-text"),Gn=z()({name:"VCard",directives:{Ripple:Ht},props:{appendAvatar:String,appendIcon:U,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:U,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...le(),...at(),...Ee(),...Pe(),...ot(),...Wt(),...qt(),...zt(),...it(),...jt(),...re(),...lt({variant:"elevated"})},setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=se(e),{borderClasses:s}=rt(e),{colorClasses:r,colorStyles:i,variantClasses:l}=Gt(e),{densityClasses:d}=ct(e),{dimensionStyles:u}=Ae(e),{elevationClasses:v}=ut(e),{loaderClasses:y}=Ut(e),{locationStyles:h}=Yt(e),{positionClasses:p}=Kt(e),{roundedClasses:m}=dt(e),k=Xt(e,t),C=x(()=>e.link!==!1&&k.isLink.value),g=x(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return G(()=>{const c=C.value?"a":e.tag,T=!!(a.title||e.title),$=!!(a.subtitle||e.subtitle),M=T||$,O=!!(a.append||e.appendAvatar||e.appendIcon),P=!!(a.prepend||e.prependAvatar||e.prependIcon),V=!!(a.image||e.image),F=M||P||O,A=!!(a.text||e.text);return we(f(c,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},o.value,s.value,r.value,d.value,v.value,y.value,p.value,m.value,l.value],style:[i.value,u.value,h.value],href:k.href.value,onClick:g.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[V&&f("div",{key:"image",class:"v-card__image"},[a.image?f(te,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):f(Jt,{key:"image-img",cover:!0,src:e.image},null)]),f(Qt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),F&&f(zn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),A&&f(jn,{key:"text"},{default:()=>{var S,b;return[(b=(S=a.text)==null?void 0:S.call(a))!=null?b:e.text]}}),(w=a.default)==null?void 0:w.call(a),a.actions&&f(Et,null,{default:a.actions}),Zt(g.value,"v-card")]}}),[[vt("ripple"),g.value&&e.ripple]])}),{}}});const Un=Y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Yn(e,n){const t={},a=o=>()=>{if(!K)return Promise.resolve(!0);const s=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(r=>{var l;const i=parseInt((l=e[o])!=null?l:0,10);t[o]=window.setTimeout(()=>{n==null||n(s),r(s)},i)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const ke=Symbol.for("vuetify:v-menu"),Kn=Y({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Un()},"v-overlay-activator");function Xn(e,n){let{isActive:t,isTop:a}=n;const o=L();let s=!1,r=!1,i=!0;const l=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!l.value),{runOpenDelay:u,runCloseDelay:v}=Yn(e,c=>{c===(e.openOnHover&&s||l.value&&r)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==c&&(i=!0),t.value=c)}),y={click:c=>{c.stopPropagation(),o.value=c.currentTarget||c.target,t.value=!t.value},mouseenter:c=>{s=!0,o.value=c.currentTarget||c.target,u()},mouseleave:c=>{s=!1,v()},focus:c=>{tn&&!c.target.matches(":focus-visible")||(r=!0,c.stopPropagation(),o.value=c.currentTarget||c.target,u())},blur:c=>{r=!1,c.stopPropagation(),v()}},h=x(()=>{const c={};return d.value&&(c.click=y.click),e.openOnHover&&(c.mouseenter=y.mouseenter,c.mouseleave=y.mouseleave),l.value&&(c.focus=y.focus,c.blur=y.blur),c}),p=x(()=>{const c={};if(e.openOnHover&&(c.mouseenter=()=>{s=!0,u()},c.mouseleave=()=>{s=!1,v()}),e.closeOnContentClick){const T=Ve(ke,null);c.click=()=>{t.value=!1,T==null||T.closeParents()}}return c}),m=x(()=>{const c={};return e.openOnHover&&(c.mouseenter=()=>{i&&(s=!0,i=!1,u())},c.mouseleave=()=>{s=!1,v()}),c});R(a,c=>{c&&(e.openOnHover&&!s&&(!l.value||!r)||l.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)});const k=L();_e(()=>{!k.value||ce(()=>{const c=k.value;o.value=en(c)?c.$el:c})});const C=Le("useActivator");let g;return R(()=>!!e.activator,c=>{c&&K?(g=mt(),g.run(()=>{Jn(e,C,{activatorEl:o,activatorEvents:h})})):g&&g.stop()},{flush:"post",immediate:!0}),q(()=>{g==null||g.stop()}),{activatorEl:o,activatorRef:k,activatorEvents:h,contentEvents:p,scrimEvents:m}}function Jn(e,n,t){let{activatorEl:a,activatorEvents:o}=t;R(()=>e.activator,(l,d)=>{if(d&&l!==d){const u=i(d);u&&r(u)}l&&ce(()=>s())},{immediate:!0}),R(()=>e.activatorProps,()=>{s()}),q(()=>{r()});function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!l||(Object.entries(o.value).forEach(u=>{let[v,y]=u;l.addEventListener(v,y)}),Object.keys(d).forEach(u=>{d[u]==null?l.removeAttribute(u):l.setAttribute(u,d[u])}))}function r(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!l||(Object.entries(o.value).forEach(u=>{let[v,y]=u;l.removeEventListener(v,y)}),Object.keys(d).forEach(u=>{l.removeAttribute(u)}))}function i(){var u,v;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,d;if(l)if(l==="parent"){let y=(v=(u=n==null?void 0:n.proxy)==null?void 0:u.$el)==null?void 0:v.parentNode;for(;y.hasAttribute("data-no-activator");)y=y.parentNode;d=y}else typeof l=="string"?d=document.querySelector(l):"$el"in l?d=l.$el:d=l;return a.value=(d==null?void 0:d.nodeType)===Node.ELEMENT_NODE?d:null,a.value}}const Qn=Y({eager:Boolean},"lazy");function Zn(e,n){const t=L(!1),a=x(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function ye(e,n){return{x:e.x+n.x,y:e.y+n.y}}function ea(e,n){return{x:e.x-n.x,y:e.y-n.y}}function je(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,s=t==="top"?0:t==="bottom"?n.height:t;return ye({x:o,y:s},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,s=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return ye({x:o,y:s},n)}return ye({x:n.width/2,y:n.height/2},n)}const At={static:aa,connected:ia},ta=Y({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in At},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function na(e,n){const t=L({}),a=L();K&&(Ie(()=>!!(n.isActive.value&&e.locationStrategy),s=>{var r,i;R(()=>e.locationStrategy,s),q(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation:a.value=(i=At[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation}),window.addEventListener("resize",o,{passive:!0}),q(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(s){var r;(r=a.value)==null||r.call(a,s)}return{contentStyles:t,updateLocation:a}}function aa(){}function oa(e){const n=kt(e);return n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function ia(e,n,t){In(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed"});const{preferredAnchor:o,preferredOrigin:s}=nn(()=>{const p=Fe(n.location,e.isRtl.value),m=n.origin==="overlap"?p:n.origin==="auto"?ue(p):Fe(n.origin,e.isRtl.value);return p.side===m.side&&p.align===de(m).align?{preferredAnchor:De(p),preferredOrigin:De(m)}:{preferredAnchor:p,preferredOrigin:m}}),[r,i,l,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(p=>x(()=>{const m=parseFloat(n[p]);return isNaN(m)?1/0:m})),u=x(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const p=n.offset.split(" ").map(parseFloat);return p.length<2&&p.push(0),p}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let v=!1;const y=new ResizeObserver(()=>{v&&h()});R([e.activatorEl,e.contentEl],(p,m)=>{let[k,C]=p,[g,c]=m;g&&y.unobserve(g),k&&y.observe(k),c&&y.unobserve(c),C&&y.observe(C)},{immediate:!0}),q(()=>{y.disconnect()});function h(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const p=e.activatorEl.value.getBoundingClientRect(),m=oa(e.contentEl.value),k=oe(e.contentEl.value),C=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const g=k.reduce((A,w)=>{const S=w.getBoundingClientRect(),b=new me({x:w===document.documentElement?0:S.x,y:w===document.documentElement?0:S.y,width:w.clientWidth,height:w.clientHeight});return A?new me({x:Math.max(A.left,b.left),y:Math.max(A.top,b.top),width:Math.min(A.right,b.right)-Math.max(A.left,b.left),height:Math.min(A.bottom,b.bottom)-Math.max(A.top,b.top)}):b},void 0);g.x+=C,g.y+=C,g.width-=C*2,g.height-=C*2;let c={anchor:o.value,origin:s.value};function T(A){const w=new me(m),S=je(A.anchor,p),b=je(A.origin,w);let{x:I,y:D}=ea(S,b);switch(A.anchor.side){case"top":D-=u.value[0];break;case"bottom":D+=u.value[0];break;case"left":I-=u.value[0];break;case"right":I+=u.value[0];break}switch(A.anchor.align){case"top":D-=u.value[1];break;case"bottom":D+=u.value[1];break;case"left":I-=u.value[1];break;case"right":I+=u.value[1];break}return w.x+=I,w.y+=D,w.width=Math.min(w.width,l.value),w.height=Math.min(w.height,d.value),{overflows:He(w,g),x:I,y:D}}let $=0,M=0;const O={x:0,y:0},P={x:!1,y:!1};let V=-1;for(;;){if(V++>10){an("Infinite loop detected in connectedLocationStrategy");break}const{x:A,y:w,overflows:S}=T(c);$+=A,M+=w,m.x+=A,m.y+=w;{const b=Re(c.anchor),I=S.x.before||S.x.after,D=S.y.before||S.y.after;let X=!1;if(["x","y"].forEach(_=>{if(_==="x"&&I&&!P.x||_==="y"&&D&&!P.y){const E={anchor:{...c.anchor},origin:{...c.origin}},j=_==="x"?b==="y"?de:ue:b==="y"?ue:de;E.anchor=j(E.anchor),E.origin=j(E.origin);const{overflows:ne}=T(E);(ne[_].before<=S[_].before&&ne[_].after<=S[_].after||ne[_].before+ne[_].after<(S[_].before+S[_].after)/2)&&(c=E,X=P[_]=!0)}}),X)continue}S.x.before&&($+=S.x.before,m.x+=S.x.before),S.x.after&&($-=S.x.after,m.x-=S.x.after),S.y.before&&(M+=S.y.before,m.y+=S.y.before),S.y.after&&(M-=S.y.after,m.y-=S.y.after);{const b=He(m,g);O.x=g.width-b.x.before-b.x.after,O.y=g.height-b.y.before-b.y.after,$+=b.x.before,m.x+=b.x.before,M+=b.y.before,m.y+=b.y.before}break}const F=Re(c.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${c.anchor.side} ${c.anchor.align}`,transformOrigin:`${c.origin.side} ${c.origin.align}`,top:H(Ge(M)),left:H(Ge($)),minWidth:H(F==="y"?Math.min(r.value,p.width):r.value),maxWidth:H(Ue($e(O.x,r.value===1/0?0:r.value,l.value))),maxHeight:H(Ue($e(O.y,i.value===1/0?0:i.value,d.value)))}),{available:O,contentBox:m}}return R(()=>[o.value,s.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>h()),ce(()=>{const p=h();if(!p)return;const{available:m,contentBox:k}=p;k.height>m.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function Ge(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ue(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let xe=!0;const ie=[];function la(e){!xe||ie.length?(ie.push(e),Ce()):(xe=!1,e(),Ce())}let Ye=-1;function Ce(){cancelAnimationFrame(Ye),Ye=requestAnimationFrame(()=>{const e=ie.shift();e&&e(),ie.length?Ce():xe=!0})}const ae={none:null,close:ca,block:ua,reposition:da},sa=Y({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ae}},"v-overlay-scroll-strategies");function ra(e,n){if(!K)return;let t;_e(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=mt(),await ce(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=ae[e.scrollStrategy])==null||a.call(ae,n,e,t)}))}),q(()=>{t==null||t.stop()})}function ca(e){var t;function n(a){e.isActive.value=!1}Ot((t=e.activatorEl.value)!=null?t:e.contentEl.value,n)}function ua(e,n){var r;const t=(r=e.root.value)==null?void 0:r.offsetParent,a=[...new Set([...oe(e.activatorEl.value,n.contained?t:void 0),...oe(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,s=(i=>Be(i)&&i)(t||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((i,l)=>{i.style.setProperty("--v-body-scroll-x",H(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",H(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",H(o)),i.classList.add("v-overlay-scroll-blocked")}),q(()=>{a.forEach((i,l)=>{const d=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-d,i.scrollTop=-u}),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function da(e,n,t){let a=!1,o=-1,s=-1;function r(i){la(()=>{var u,v;const l=performance.now();(v=(u=e.updateLocation).value)==null||v.call(u,i),a=(performance.now()-l)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{var i;Ot((i=e.activatorEl.value)!=null?i:e.contentEl.value,l=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{r(l)})})):r(l)})})}),q(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(o)})}function Ot(e,n){const t=[document,...oe(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),q(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}function fa(){if(!K)return L(!1);const{ssr:e}=on();if(e){const n=L(!1);return yt(()=>{n.value=!0}),n}else return L(!0)}function Vt(){const n=Le("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ke=Symbol.for("vuetify:stack"),Q=gt([]);function va(e,n,t){const a=Le("useStack"),o=!t,s=Ve(Ke,void 0),r=gt({activeChildren:new Set});ht(Ke,r);const i=L(+n.value);Ie(e,()=>{var v;const u=(v=Q.at(-1))==null?void 0:v[1];i.value=u?u+10:+n.value,o&&Q.push([a.uid,i.value]),s==null||s.activeChildren.add(a.uid),q(()=>{if(o){const y=ln(Q).findIndex(h=>h[0]===a.uid);Q.splice(y,1)}s==null||s.activeChildren.delete(a.uid)})});const l=L(!0);o&&_e(()=>{var v;const u=((v=Q.at(-1))==null?void 0:v[0])===a.uid;setTimeout(()=>l.value=u)});const d=x(()=>!r.activeChildren.size);return{globalTop:sn(l),localTop:d,stackStyles:x(()=>({zIndex:i.value}))}}function ma(e){return{teleportTarget:x(()=>{const t=e.value;if(t===!0||!K)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function ya(){return!0}function _t(e,n,t){if(!e||Lt(e,t)===!1)return!1;const a=xt(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(s=>s==null?void 0:s.contains(e.target))}function Lt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||ya)(e)}function ga(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&_t(e,n,t)&&setTimeout(()=>{Lt(e,t)&&a&&a(e)},0)}function Xe(e,n){const t=xt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const ha={mounted(e,n){const t=o=>ga(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=_t(o,e,n)};Xe(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){!e._clickOutside||(Xe(e,t=>{var s;if(!t||!((s=e._clickOutside)!=null&&s[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function pa(e){const{modelValue:n,color:t,...a}=e;return f(ge,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&f("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const It=Y({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Kn(),...Pe(),...Qn(),...ta(),...sa(),...le(),...rn()},"v-overlay"),Je=z()({name:"VOverlay",directives:{ClickOutside:ha},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...It()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const s=pt(e,"modelValue"),r=x({get:()=>s.value,set:E=>{E&&e.disabled||(s.value=E)}}),{teleportTarget:i}=ma(x(()=>e.attach||e.contained)),{themeClasses:l}=se(e),{rtlClasses:d,isRtl:u}=cn(),{hasContent:v,onAfterLeave:y}=Zn(e,r),h=st(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:p,localTop:m,stackStyles:k}=va(r,B(e,"zIndex"),e._disableGlobalStack),{activatorEl:C,activatorRef:g,activatorEvents:c,contentEvents:T,scrimEvents:$}=Xn(e,{isActive:r,isTop:m}),{dimensionStyles:M}=Ae(e),O=fa(),{scopeId:P}=Vt();R(()=>e.disabled,E=>{E&&(r.value=!1)});const V=L(),F=L(),{contentStyles:A,updateLocation:w}=na(e,{isRtl:u,contentEl:F,activatorEl:C,isActive:r});ra(e,{root:V,contentEl:F,activatorEl:C,isActive:r,updateLocation:w});function S(E){o("click:outside",E),e.persistent?_():r.value=!1}function b(){return r.value&&p.value}K&&R(r,E=>{E?window.addEventListener("keydown",I):window.removeEventListener("keydown",I)},{immediate:!0});function I(E){E.key==="Escape"&&p.value&&(e.persistent?_():r.value=!1)}const D=un();Ie(()=>e.closeOnBack,()=>{dn(D,E=>{p.value&&r.value?(E(!1),e.persistent?_():r.value=!1):E()})});const X=L();R(()=>r.value&&(e.absolute||e.contained)&&i.value==null,E=>{if(E){const j=Ln(V.value);j&&j!==document.scrollingElement&&(X.value=j.scrollTop)}});function _(){e.noClickAnimation||F.value&&ee(F.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Se})}return G(()=>{var E;return f(bt,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:r.value,props:W({ref:g},fe(c.value),e.activatorProps)}),O.value&&f(fn,{disabled:!i.value,to:i.value},{default:()=>[v.value&&f("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},l.value,d.value],style:[k.value,{top:H(X.value)}],ref:V},P,a),[f(pa,W({color:h,modelValue:r.value&&!!e.scrim},fe($.value)),null),f(et,{appear:!0,persisted:!0,transition:e.transition,target:C.value,onAfterLeave:()=>{y(),o("afterLeave")}},{default:()=>{var j;return[we(f("div",W({ref:F,class:["v-overlay__content",e.contentClass],style:[M.value,A.value]},fe(T.value),e.contentProps),[(j=t.default)==null?void 0:j.call(t,{isActive:r})]),[[tt,r.value],[vt("click-outside"),{handler:S,closeConditional:b,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,animateClick:_,contentEl:F,globalTop:p,localTop:m,updateLocation:w}}}),ba=z()({name:"VMenu",props:{id:String,...vn(It({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Bn}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=pt(e,"modelValue"),{scopeId:o}=Vt(),s=mn(),r=x(()=>e.id||`v-menu-${s}`),i=L(),l=Ve(ke,null),d=L(0);ht(ke,{register(){++d.value},unregister(){--d.value},closeParents(){setTimeout(()=>{d.value||(a.value=!1,l==null||l.closeParents())},40)}}),R(a,y=>{y?l==null||l.register():l==null||l.unregister()});function u(){l==null||l.closeParents()}const v=x(()=>W({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":r.value},e.activatorProps));return G(()=>{const[y]=Je.filterProps(e);return f(Je,W({ref:i,class:["v-menu"]},y,{modelValue:a.value,"onUpdate:modelValue":h=>a.value=h,absolute:!0,activatorProps:v.value,"onClick:outside":u},o),{activator:t.activator,default:function(){for(var h=arguments.length,p=new Array(h),m=0;m<h;m++)p[m]=arguments[m];return f(te,{root:!0},{default:()=>{var k;return[(k=t.default)==null?void 0:k.call(t,...p)]}})}})}),On({id:r,\u03A8openChildren:d},i)}}),Sa={class:"count"},ka=St({__name:"ListCard",props:["list"],setup(e){const n=e,t=x(()=>n.list.items.filter(o=>o.completed).length);return(a,o)=>(Z(),pe(Gn,{class:"col-md-6 my-2 d-flex align-center",color:"#f8f6ff",elevation:"0",density:"default"},{default:N(()=>[f(Pt,{class:"px-0 pl-4 d-flex flex-grow-1"},{default:N(()=>[Me(ve(e.list.title)+" ",1),f(yn),gn("span",Sa,ve(be(t))+"/"+ve(e.list.items.length),1)]),_:1}),f(Et,{class:"px-0 py-0"},{default:N(()=>[f(ba,{bottom:"",left:"","close-on-click":"","close-on-content-click":""},{activator:N(({props:s})=>[f(hn,W({icon:""},s),{default:N(()=>[f(pn,{icon:"more_vert"})]),_:2},1040)]),default:N(()=>[f(Wn,null,{default:N(()=>[f(he,null,{default:N(()=>[f(bn,{class:"delete"},{default:N(()=>[Me("Delete")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),xa={key:0,class:"loader-container"},Ca=St({__name:"Home",setup(e){const n=Sn();yt(()=>{n.setTitle("Lists")});const t=Vn(),a=x(()=>t.lists);let o=x(()=>!a.value.length);const s=kn(),r=i=>{t.currentList=i,s.push({path:`/list/${i.id}`,name:"List",query:{id:i.id,title:i.title}})};return(i,l)=>(Z(),pe(_n,null,{default:N(()=>[f(wn,null,{default:N(()=>[be(o)?(Z(),Ne("div",xa,[f(xn,{color:"primary",size:"60",indeterminate:""})])):(Z(!0),Ne(bt,{key:1},Cn(be(a),(d,u)=>(Z(),pe(ka,{list:d,key:u,onClick:v=>r(d)},null,8,["list","onClick"]))),128))]),_:1})]),_:1}))}});const Oa=En(Ca,[["__scopeId","data-v-9c452829"]]);export{Oa as default};