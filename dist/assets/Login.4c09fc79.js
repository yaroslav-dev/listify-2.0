import{T as P,_ as L}from"./TextField.e5c80cef.js";import{g as N,ab as A,ac as U,B as F,C as M,m as O,Q as $,R as G,ae as W,af as z,p as E,ad as j,J as D,N as v,W as w,ak as R,b as H,d as t,ah as J,V as Q,r as C,X as q,ai as K,c as X,aP as Y,aj as Z,Z as ee,_ as c,aK as V,bO as ae,bP as S,bF as oe,as as te,au as se,Y as ne,a4 as T,$ as g,aD as le,a9 as re,a3 as ie,aq as ce,bQ as ue,bR as de,bS as me,bT as ve,bU as pe,a2 as x,a7 as fe}from"./index.ea79d9a3.js";import{V as ge}from"./VContainer.68b8c9a9.js";import{V as _e}from"./VForm.8466ea72.js";import{m as ke,u as be,a as y}from"./VOverlay.82ff475e.js";import{f as he}from"./forwardRefs.2d67e586.js";import"./VTextField.fdcccb14.js";import"./easing.6e2d7abd.js";const Ve=N()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...A({location:"bottom"}),...U(),...F(),...M(),...O(),...$(ke({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":a=>!0},setup(a,_){let{slots:i}=_;const n=G(a,"modelValue"),{locationStyles:u}=W(a),{positionClasses:p}=z(a),{scopeId:d}=be(),{themeClasses:f}=E(a),{colorClasses:k,colorStyles:b,variantClasses:h}=j(a),{roundedClasses:r}=D(a),e=v();w(n,o),w(()=>a.timeout,o),R(()=>{n.value&&o()});let l=-1;function o(){window.clearTimeout(l);const m=Number(a.timeout);!n.value||m===-1||(l=window.setTimeout(()=>{n.value=!1},m))}function s(){window.clearTimeout(l)}return H(()=>{const[m]=y.filterProps(a);return t(y,C({ref:e,class:["v-snackbar",{"v-snackbar--active":n.value,"v-snackbar--multi-line":a.multiLine&&!a.vertical,"v-snackbar--vertical":a.vertical},p.value]},m,{modelValue:n.value,"onUpdate:modelValue":B=>n.value=B,contentProps:C({class:["v-snackbar__wrapper",f.value,k.value,r.value,h.value],style:[u.value,b.value],onPointerenter:s,onPointerleave:o},m.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},d),{default:()=>[J(!1,"v-snackbar"),i.default&&t("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[i.default()]),i.actions&&t(Q,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[t("div",{class:"v-snackbar__actions"},[i.actions()])]})],activator:i.activator})}),he({},e)}}),I=a=>(ve("data-v-b3248d8a"),a=a(),pe(),a),Se=I(()=>x("h3",{class:"form-head mb-3"},"Sign in",-1)),ye=I(()=>x("span",{class:"my-2"},"or",-1)),Pe=q({__name:"Login",setup(a){const _=K(),i=ce(),n=v(""),u=v(""),p=v(localStorage.loading),d=v(!1),f=X(()=>p.value=="true"),k=r=>{setTimeout(()=>{f.value&&(localStorage.loading=!1,p.value="false",d.value=!0)},r)},b=async()=>{const r=V();localStorage.loading="true";const e=new S;ue(r,e)};R(()=>{Y(()=>{const r=V();ae(r).then(e=>{const l=S.credentialFromResult(e),o=l==null?void 0:l.accessToken,s=e.user;localStorage.loading=!1,oe(te(se,"users",s.uid),{name:s.displayName,email:s.email,photo:s.photoURL}),localStorage.currentUser=JSON.stringify({id:s.uid,name:s.displayName,email:s.email,photo:s.photoURL,accessToken:o}),i.push({name:"Home"})}).catch(e=>{k(5e3);const l=e.code,o=e.message,s=S.credentialFromError(e);console.log(e),console.log(`
        Code: ${l}
        Message: ${o}
        Credential: ${s}
      `)})})});const h=()=>{const r=V();de(r,n.value,u.value).then(()=>{i.push({name:"Home"})})};return Z(()=>{_.hideNavBar(!0),localStorage.loading||(localStorage.loading=!1)}),(r,e)=>{const l=me("router-link");return ne(),ee(ge,{class:"container"},{default:c(()=>[t(_e,{class:"form"},{default:c(()=>[Se,t(P,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),inputType:"email"},null,8,["modelValue"]),t(P,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=o=>u.value=o),inputType:"password"},null,8,["modelValue"]),t(T,{size:"large",variant:"flat",color:"primary",block:"",onClick:h},{default:c(()=>[g(" Sign in ")]),_:1}),ye,t(T,{size:"large",variant:"outlined",block:"",onClick:b},{default:c(()=>[t(le,{src:L,width:"23",height:"23",class:"mr-3"}),g(" Sign in with Google ")]),_:1}),t(l,{class:"mt-3 text-decoration-none",to:"/signup"},{default:c(()=>[g("Create account")]),_:1})]),_:1}),t(y,{"model-value":ie(f),class:"align-center justify-center","close-on-content-click":!1,persistent:!0,scrim:"#fff"},{default:c(()=>[t(re,{size:"70",width:"5",color:"primary",indeterminate:""})]),_:1},8,["model-value"]),t(Ve,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),color:"red-darken-1"},{default:c(()=>[g("Something went wrong")]),_:1},8,["modelValue"])]),_:1})}}});const Ne=fe(Pe,[["__scopeId","data-v-b3248d8a"]]);export{Ne as default};