import{T as f,o as c,e as p,b as t,u as s,w as i,F as _,Z as g,a as e,t as n,i as v,l as h,U as b,j as x}from"./app-68d0f62a.js";import{_ as w}from"./AppLayout-567e16f8.js";import{_ as u,a as d}from"./TextInput-214e130b.js";import{_ as m}from"./InputLabel-693e4890.js";import{_ as $}from"./PrimaryButton-4d70e4e3.js";const y={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},V={class:"py-12"},k={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},U={class:"p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg"},C=e("option",{value:"admin"},"Admin",-1),S=e("option",{value:"editor"},"Editor",-1),q=e("option",{value:"invitado"},"Invitado",-1),B=[C,S,q],E={class:"px-2 py-2"},N={class:"fa-solid fa-save"},j={class:"ml-2"},D={class:"fa-solid fa-trash"},F={class:"ml-2"},z={__name:"Create",setup(M){const a=f({name:"",email:"",role:""});return(o,l)=>(c(),p(_,null,[t(s(g),{title:o.$t("Create User")},null,8,["title"]),t(w,null,{header:i(()=>[e("h2",y,n(o.$t("Create User")),1)]),default:i(()=>[e("div",V,[e("div",k,[e("div",U,[e("form",{onSubmit:l[3]||(l[3]=v(r=>s(a).post(o.route("users.store")),["prevent"])),class:"mt-6 space-y-2 max-w-xl"},[t(m,{for:"name",value:o.$t("Name")},null,8,["value"]),t(u,{id:"name",modelValue:s(a).name,"onUpdate:modelValue":l[0]||(l[0]=r=>s(a).name=r),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),t(d,{message:s(a).errors.name,class:"mt-2"},null,8,["message"]),t(m,{for:"email",value:o.$t("Email")},null,8,["value"]),t(u,{id:"email",modelValue:s(a).email,"onUpdate:modelValue":l[1]||(l[1]=r=>s(a).email=r),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),t(d,{message:s(a).errors.email,class:"mt-2"},null,8,["message"]),t(m,{for:"role",value:o.$t("Role")},null,8,["value"]),h(e("select",{id:"role","onUpdate:modelValue":l[2]||(l[2]=r=>s(a).role=r),required:"",class:"mt-1 block w-full"},B,512),[[b,s(a).role]]),t(d,{message:s(a).errors.role,class:"mt-2"},null,8,["message"]),e("div",E,[t($,{disabled:s(a).processing,class:"mx-2"},{default:i(()=>[e("i",N,[e("span",j,n(o.$t("Save")),1)])]),_:1},8,["disabled"]),t(s(x),{href:o.route("users.index"),class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"},{default:i(()=>[e("i",D,[e("span",F,n(o.$t("Cancel")),1)])]),_:1},8,["href"])])],32)])])])]),_:1})],64))}};export{z as default};
