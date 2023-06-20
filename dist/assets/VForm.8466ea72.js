import{h,R as y,c as b,N as v,W as F,U as R,bc as M,t as B,T as D,g as S,b as w,d as E}from"./index.ea79d9a3.js";import{f as O}from"./forwardRefs.2d67e586.js";const V=Symbol.for("vuetify:form"),P=h({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function k(r){const f=y(r,"modelValue"),d=b(()=>r.disabled),c=b(()=>r.readonly),n=v(!1),a=v([]),o=v([]);async function m(){const e=[];let t=!0;o.value=[],n.value=!0;for(const s of a.value){const l=await s.validate();if(l.length>0&&(t=!1,e.push({id:s.id,errorMessages:l})),!t&&r.fastFail)break}return o.value=e,n.value=!1,{valid:t,errors:o.value}}function i(){a.value.forEach(e=>e.reset()),f.value=null}function u(){a.value.forEach(e=>e.resetValidation()),o.value=[],f.value=null}return F(a,()=>{let e=0,t=0;const s=[];for(const l of a.value)l.isValid===!1?(t++,s.push({id:l.id,errorMessages:l.errorMessages})):l.isValid===!0&&e++;o.value=s,f.value=t>0?!1:e===a.value.length?!0:null},{deep:!0}),R(V,{register:e=>{let{id:t,validate:s,reset:l,resetValidation:p}=e;a.value.some(g=>g.id===t)&&M(`Duplicate input name "${t}"`),a.value.push({id:t,validate:s,reset:l,resetValidation:p,isValid:null,errorMessages:[]})},unregister:e=>{a.value=a.value.filter(t=>t.id!==e)},update:(e,t,s)=>{const l=a.value.find(p=>p.id===e);!l||(l.isValid=t,l.errorMessages=s)},isDisabled:d,isReadonly:c,isValidating:n,items:a,validateOn:B(r,"validateOn")}),{errors:o,isDisabled:d,isReadonly:c,isValidating:n,items:a,validate:m,reset:i,resetValidation:u}}function W(){return D(V,null)}const j=S()({name:"VForm",props:{...P()},emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:d,emit:c}=f;const n=k(r),a=v();function o(i){i.preventDefault(),n.reset()}function m(i){const u=i,e=n.validate();u.then=e.then.bind(e),u.catch=e.catch.bind(e),u.finally=e.finally.bind(e),c("submit",u),u.defaultPrevented||e.then(t=>{var l;let{valid:s}=t;s&&((l=a.value)==null||l.submit())}),u.preventDefault()}return w(()=>{var i;return E("form",{ref:a,class:"v-form",novalidate:!0,onReset:o,onSubmit:m},[(i=d.default)==null?void 0:i.call(d,n)])}),O(n,a)}});export{j as V,W as u};