import{u as x,a as y,T as m,_ as B}from"./persist.453431d7.js";import{Y as C,aj as I,bb as F,by as c,N as _,ak as T,_ as N,$ as a,Z as P,c as o,a5 as g,a0 as u,aE as R,as as U,bE as A,bF as E,bB as G,bC as W,bD as z,a3 as f,a8 as D}from"./index.07a24c4b.js";import{V as H}from"./VContainer.46ada41a.js";import{V as j}from"./VForm.6439e8c7.js";import"./VTextField.cf83acd0.js";import"./easing.6e2d7abd.js";import"./form.0657a469.js";import"./forwardRefs.2d67e586.js";const h=t=>(W("data-v-fa8610d9"),t=t(),z(),t),M=h(()=>f("h3",{class:"form-head mb-3"},"Sign up",-1)),Y=h(()=>f("span",{class:"my-2"},"or",-1)),Z=C({__name:"Register",setup(t){const v=I(),d=F(),V=new c,p=U(),b=x(),S=y(),r=_(""),l=_(""),k=()=>{A(d,r.value,l.value).then(e=>{console.log("Successfully registered"),console.log("data: ",e),p.push({name:"Home"})}).catch(e=>{console.warn(e.code),alert(e.message)})},w=()=>{E(d,V).then(e=>{const s=c.credentialFromResult(e);s==null||s.accessToken;const n=e.user;b.setUser(n),S.setPersist(n),p.push({name:"Home"})}).then(()=>{}).catch(e=>{e.code,e.message,e.customData.email,c.credentialFromError(e)})};return T(()=>{v.hideNavBar(!0)}),(e,s)=>{const n=G("router-link");return P(),N(H,{class:"container"},{default:a(()=>[o(j,{class:"form"},{default:a(()=>[M,o(m,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=i=>r.value=i),inputType:"email"},null,8,["modelValue"]),o(m,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i),inputType:"password"},null,8,["modelValue"]),o(g,{size:"large",variant:"flat",color:"primary",block:"",onClick:k},{default:a(()=>[u(" Sign up ")]),_:1}),Y,o(g,{size:"large",variant:"outlined",block:"",onClick:w},{default:a(()=>[o(R,{src:B,width:"23",height:"23",class:"mr-3"}),u(" Sign in with Google ")]),_:1}),o(n,{class:"mt-3 text-decoration-none",to:"/login"},{default:a(()=>[u("Sign in")]),_:1})]),_:1})]),_:1})}}});const ee=D(Z,[["__scopeId","data-v-fa8610d9"]]);export{ee as default};