import{T as m,_ as k}from"./TextField.e5c80cef.js";import{X as w,ai as x,ba as y,bP as i,N as p,aj as I,Z as T,_ as s,Y as B,d as a,a4 as _,$ as c,aD as C,aq as F,bV as N,bW as R,bS as A,bT as P,bU as U,a2 as g,a7 as W}from"./index.ea79d9a3.js";import{V as G}from"./VContainer.68b8c9a9.js";import{V as z}from"./VForm.8466ea72.js";import"./VTextField.fdcccb14.js";import"./easing.6e2d7abd.js";import"./forwardRefs.2d67e586.js";const f=t=>(P("data-v-f1923417"),t=t(),U(),t),D=f(()=>g("h3",{class:"form-head mb-3"},"Sign up",-1)),E=f(()=>g("span",{class:"my-2"},"or",-1)),H=w({__name:"Register",setup(t){const h=x(),u=y(),v=new i,d=F(),n=p(""),l=p(""),V=()=>{N(u,n.value,l.value).then(e=>{console.log("Successfully registered"),console.log("data: ",e),d.push({name:"Home"})}).catch(e=>{console.warn(e.code),alert(e.message)})},b=()=>{R(u,v).then(e=>{const o=i.credentialFromResult(e);o==null||o.accessToken,e.user,d.push({name:"Home"})}).then(()=>{}).catch(e=>{e.code,e.message,e.customData.email,i.credentialFromError(e)})};return I(()=>{h.hideNavBar(!0)}),(e,o)=>{const S=A("router-link");return B(),T(G,{class:"container"},{default:s(()=>[a(z,{class:"form"},{default:s(()=>[D,a(m,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),inputType:"email"},null,8,["modelValue"]),a(m,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=r=>l.value=r),inputType:"password"},null,8,["modelValue"]),a(_,{size:"large",variant:"flat",color:"primary",block:"",onClick:V},{default:s(()=>[c(" Sign up ")]),_:1}),E,a(_,{size:"large",variant:"outlined",block:"",onClick:b},{default:s(()=>[a(C,{src:k,width:"23",height:"23",class:"mr-3"}),c(" Sign in with Google ")]),_:1}),a(S,{class:"mt-3 text-decoration-none",to:"/login"},{default:s(()=>[c("Sign in")]),_:1})]),_:1})]),_:1})}}});const J=W(H,[["__scopeId","data-v-f1923417"]]);export{J as default};