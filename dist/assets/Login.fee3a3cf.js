import{u as w,a as x,T as u,_ as C}from"./persist.cdaadb22.js";import{aq as I,aN as S,N as d,bw as k,bx as p,aO as y,as as B,at as a,by as i,ar as N,c as o,az as m,au as c,b3 as R,aU as T,bz as z,bA as A,bB as U,bC as F,bD as G,ax as _,aC as L}from"./index.863f8280.js";import{V as P}from"./VContainer.a55ccc89.js";import{V as W}from"./VForm.1dc21280.js";import"./VTextField.2c0f9798.js";import"./easing.6e2d7abd.js";import"./form.97b37081.js";import"./forwardRefs.2d67e586.js";const g=s=>(F("data-v-c1e90989"),s=s(),G(),s),q=g(()=>_("h3",{class:"form-head mb-3"},"Sign in",-1)),D=g(()=>_("span",{class:"my-2"},"or",-1)),E=I({__name:"Login",setup(s){const h=S();w(),x();const f=T(),n=d(""),r=d(""),v=async()=>{const e=new p;z(i,e)};k(i).then(e=>{console.log("result"),p.credentialFromResult(e),e.user}).catch(e=>{console.log(e.message)});const V=()=>{A(i,n.value,r.value).then(e=>{console.log("Signed in with email"),console.log("data: ",e),f.push({name:"Home"})})};return y(()=>{h.hideNavBar(!0)}),(e,t)=>{const b=U("router-link");return N(),B(P,{class:"container"},{default:a(()=>[o(W,{class:"form"},{default:a(()=>[q,o(u,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),inputType:"email"},null,8,["modelValue"]),o(u,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=l=>r.value=l),inputType:"password"},null,8,["modelValue"]),o(m,{size:"large",variant:"flat",color:"primary",block:"",onClick:V},{default:a(()=>[c(" Sign in ")]),_:1}),D,o(m,{size:"large",variant:"outlined",block:"",onClick:v},{default:a(()=>[o(R,{src:C,width:"23",height:"23",class:"mr-3"}),c(" Sign in with Google ")]),_:1}),o(b,{class:"mt-3 text-decoration-none",to:"/signup"},{default:a(()=>[c("Create account")]),_:1})]),_:1})]),_:1})}}});const Y=L(E,[["__scopeId","data-v-c1e90989"]]);export{Y as default};
