import{X as c,ai as i,ak as _,ba as l,Z as u,_ as e,Y as p,d as s,a4 as d,$ as m,aq as f,bb as g,a7 as h}from"./index.0c243d95.js";import{V as S}from"./VContainer.0415ee55.js";import{V}from"./VForm.b558079b.js";import"./forwardRefs.2d67e586.js";const x=c({__name:"Settings",setup(b){const a=i();_(()=>{a.setTitle("Settings")});const o=l(),n=f(),r=()=>{g(o).then(()=>{delete localStorage.currentUser,console.log("Signed out"),n.push({name:"Login"})}).catch(t=>{console.warn(t)})};return(t,k)=>(p(),u(S,{style:{height:"80vh"},class:"container"},{default:e(()=>[s(V,{class:"form"},{default:e(()=>[s(d,{size:"large",variant:"flat",color:"primary",block:"",onClick:r},{default:e(()=>[m(" Sign out ")]),_:1})]),_:1})]),_:1}))}});const B=h(x,[["__scopeId","data-v-f87558c2"]]);export{B as default};