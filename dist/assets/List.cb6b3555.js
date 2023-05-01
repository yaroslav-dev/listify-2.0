import{aq as U,aC as j,aa as M,bh as ee,ar as p,as as $,bi as te,ay as L,at as b,c as n,au as q,aA as H,i as T,I as P,bj as ae,a as le,y as ne,g as B,ag as S,ap as w,b as c,ac as oe,_ as ue,L as se,t as d,e as F,aL as ie,N as g,be as z,w as re,am as ce,m as k,R as de,F as fe,bb as N,u as me,$ as E,W as ve,ao as be,az as Ve,aD as ye,b1 as _e,b2 as Ce,aE as xe,aG as ke,an as he,aH as Ie,bk as ge,aI as pe}from"./index.4499296f.js";import{a as G,c as Se,b as Be,u as Fe}from"./lists.0a840d2b.js";import{V as W,a as Ae,b as Le,u as Pe,f as Ue,d as $e}from"./VTextField.7cb7a7d6.js";import{V as Te}from"./VContainer.aa5757ce.js";import"./forwardRefs.a10f9ca4.js";const we=U({__name:"TextField",setup(e){const a=j();M(()=>{a.hideNavBar(!0)}),ee(()=>{a.hideNavBar(!1),a.setFocus(!1)});const i=l=>{a.setFocus(l)},t=()=>{console.log("added")};return(l,r)=>(p(),$(W,{"onUpdate:focused":r[0]||(r[0]=u=>i(u)),"bg-color":"#fff",class:"input",label:"Add item",variant:"outlined",color:"#db89f9","hide-details":""},te({_:2},[L(a).inputFocus?{name:"append-inner",fn:b(()=>[n(H,{onClick:t},{default:b(()=>[q("add")]),_:1})]),key:"0"}:void 0]),1024))}});const J=Symbol.for("vuetify:selection-control-group"),K=T({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:ae},...le(),...ne()},"v-selection-control-group");B()({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...K()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:i}=a;const t=S(e,"modelValue"),l=w(),r=c(()=>e.id||`v-selection-control-group-${l}`),u=c(()=>e.name||r.value),o=new Set;return oe(J,{modelValue:t,forceUpdate:()=>{o.forEach(s=>s())},onForceUpdate:s=>{o.add(s),ue(()=>{o.delete(s)})}}),se({[e.defaultsTarget]:{color:d(e,"color"),disabled:d(e,"disabled"),density:d(e,"density"),error:d(e,"error"),inline:d(e,"inline"),modelValue:t,multiple:c(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:u,falseIcon:d(e,"falseIcon"),trueIcon:d(e,"trueIcon"),readonly:d(e,"readonly"),ripple:d(e,"ripple"),type:d(e,"type"),valueComparator:d(e,"valueComparator")}}),F(()=>{var s;return n("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],role:e.type==="radio"?"radiogroup":void 0},[(s=i.default)==null?void 0:s.call(i)])}),{}}});const Q=T({label:String,trueValue:null,falseValue:null,value:null,...K()},"v-selection-control");function De(e){const a=de(J,void 0),{densityClasses:i}=fe(e),t=S(e,"modelValue"),l=c(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),r=c(()=>e.falseValue!==void 0?e.falseValue:!1),u=c(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),o=c({get(){const v=a?a.modelValue.value:t.value;return u.value?v.some(f=>e.valueComparator(f,l.value)):e.valueComparator(v,l.value)},set(v){if(e.readonly)return;const f=v?l.value:r.value;let m=f;u.value&&(m=v?[...N(t.value),f]:N(t.value).filter(_=>!e.valueComparator(_,l.value))),a?a.modelValue.value=m:t.value=m}}),{textColorClasses:s,textColorStyles:y}=me(c(()=>o.value&&!e.error&&!e.disabled?e.color:void 0)),x=c(()=>o.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:i,trueValue:l,falseValue:r,model:o,textColorClasses:s,textColorStyles:y,icon:x}}const Re=B()({name:"VSelectionControl",directives:{Ripple:ie},inheritAttrs:!1,props:Q(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:i,slots:t}=a;const{group:l,densityClasses:r,icon:u,model:o,textColorClasses:s,textColorStyles:y,trueValue:x}=De(e),v=w(),f=c(()=>e.id||`input-${v}`),m=g(!1),_=g(!1),C=g();l==null||l.onForceUpdate(()=>{C.value&&(C.value.checked=o.value)});function h(V){m.value=!0,(!E||E&&V.target.matches(":focus-visible"))&&(_.value=!0)}function I(){m.value=!1,_.value=!1}function A(V){e.readonly&&l&&ve(()=>l.forceUpdate()),o.value=V.target.checked}return F(()=>{var D,R;const V=t.label?t.label({label:e.label,props:{for:f.value}}):e.label,[Y,Z]=z(i);return n("div",k({class:["v-selection-control",{"v-selection-control--dirty":o.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":_.value,"v-selection-control--inline":e.inline},r.value]},Y),[n("div",{class:["v-selection-control__wrapper",s.value],style:y.value},[(D=t.default)==null?void 0:D.call(t),re(n("div",{class:["v-selection-control__input"]},[u.value&&n(H,{key:"icon",icon:u.value},null),n("input",k({ref:C,checked:o.value,disabled:e.disabled,id:f.value,onBlur:I,onFocus:h,onInput:A,"aria-disabled":e.readonly,type:e.type,value:x.value,name:e.name,"aria-checked":e.type==="checkbox"?o.value:void 0},Z),null),(R=t.input)==null?void 0:R.call(t,{model:o,textColorClasses:s,textColorStyles:y,props:{onFocus:h,onBlur:I,id:f.value}})]),[[ce("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),V&&n(Ae,{for:f.value,clickable:!0},{default:()=>[V]})])}),{isFocused:m,input:C}}}),X=T({indeterminate:Boolean,indeterminateIcon:{type:P,default:"$checkboxIndeterminate"},...Q({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),O=B()({name:"VCheckboxBtn",props:X(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:i}=a;const t=S(e,"indeterminate"),l=S(e,"modelValue");function r(s){t.value&&(t.value=!1)}const u=c(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),o=c(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return F(()=>n(Re,k(e,{modelValue:l.value,"onUpdate:modelValue":[s=>l.value=s,r],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:u.value,trueIcon:o.value,"aria-checked":e.indeterminate?"mixed":void 0}),i)),{}}}),Ne=B()({name:"VCheckbox",inheritAttrs:!1,props:{...Le(),...be(X(),["inline"])},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:i,slots:t}=a;const{isFocused:l,focus:r,blur:u}=Pe(e),o=w(),s=c(()=>e.id||`checkbox-${o}`);return F(()=>{const[y,x]=z(i),[v,f]=Ue(e),[m,_]=O.filterProps(e);return n($e,k({class:"v-checkbox"},y,v,{id:s.value,focused:l.value}),{...t,default:C=>{let{id:h,messagesId:I,isDisabled:A,isReadonly:V}=C;return n(O,k(m,{id:h.value,"aria-describedby":I.value,disabled:A.value,readonly:V.value},x,{onFocus:r,onBlur:u}),t)}})}),{}}}),Ee=U({__name:"ListItem",setup(e){const a=g("#f8f6ff");return(i,t)=>(p(),$(Be,{class:"col-md-6 my-2 d-flex align-center",color:a.value,elevation:"0",density:"compact"},{default:b(()=>[n(G,null,{default:b(()=>[n(Ne,{"hide-details":"",ripple:!1,color:"primary",density:"compact"})]),_:1}),n(Se,null,{default:b(()=>[q(" Bread ")]),_:1}),n(G,null,{default:b(()=>[n(Ve,{density:"compact",icon:"drag_indicator"})]),_:1})]),_:1},8,["color"]))}}),Ge=U({__name:"List",setup(e){const a=ye(),i=j(),t=Fe();return _e(()=>{console.log("before mount")}),M(()=>{Object.keys(t.currentList).length||a.push("/"),console.log("mounted")}),Ce(()=>{t.currentList={},i.hideNavBar(!1)}),(l,r)=>(p(),$(Te,{class:"container d-flex flex-column justify-space-between"},{default:b(()=>[n(Ie,null,{default:b(()=>[n(W,{density:"compact",variant:"plain",modelValue:L(t).currentList.title,"onUpdate:modelValue":r[0]||(r[0]=u=>L(t).currentList.title=u),"hide-details":""},null,8,["modelValue"]),(p(),xe(he,null,ke(16,u=>n(Ee,{key:u})),64))]),_:1}),n(ge,{class:"pt-0 px-3 pb-3",flat:"",color:"transparent",order:"2",location:"bottom"},{default:b(()=>[n(we,{class:"text-field"})]),_:1})]),_:1}))}});const ze=pe(Ge,[["__scopeId","data-v-124985f1"]]);export{ze as default};