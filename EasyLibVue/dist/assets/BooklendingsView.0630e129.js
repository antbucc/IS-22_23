import{r as b,o as v,w as y,l as e,a as t,c as o,u as a,t as _,i as f,b as c,F as h,e as T,f as E,g as w}from"./index.0bc8e638.js";import{f as p,b as x}from"./books.99e2b73c.js";const B={key:0},L={key:1,style:{color:"red"}},N=["href"],U=E(" - "),V=["onClick"],C={setup(g){const r={}.VITE_API_HOST||"http://localhost:8080",d=r+"/api/v1",l=b([]);v(()=>{p(),i()}),y(e,(s,u)=>{p(),i()});async function i(){if(!e.token){l.value=[];return}const s=d+"/booklendings?studentId="+e.id+"&token="+e.token;l.value=await(await fetch(s)).json()}async function m(s){fetch(r+s.self,{method:"DELETE",headers:{"Content-Type":"application/json","x-access-token":e.token}}).then(()=>{i()}).catch(u=>console.error(u))}return(s,u)=>(t(),o(h,null,[a(e).token?(t(),o("span",B," Here are you booklendings, "+_(a(e).email)+": ",1)):f("",!0),a(e).token?f("",!0):(t(),o("span",L," 'Please login to visualize booklendings!' ")),c("ul",null,[(t(!0),o(h,null,T(l.value,n=>(t(),o("li",{key:n.self},[c("a",{href:a(r)+n.book},_((a(x).value.find(k=>k.self==n.book)||{title:"unknown"}).title),9,N),U,c("button",{onClick:k=>m(n)},"RETURN "+_(n.self),9,V)]))),128))])],64))}},I=c("h1",null,"Booklendings:",-1),P={setup(g){return(r,d)=>(t(),o("div",null,[I,w(C)]))}};export{P as default};
