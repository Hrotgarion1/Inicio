import{T as b,o as d,e as u,b as t,u as s,w as n,F as h,Z as k,t as m,f as c,a as o,c as y,g as f,j as v,n as $,i as x}from"./app-68d0f62a.js";import{A as V}from"./AuthenticationCard-5d96268f.js";import{_ as B}from"./AuthenticationCardLogo-a2363765.js";import{_ as C}from"./Checkbox-83d4a4f9.js";import{_ as p,a as g}from"./TextInput-214e130b.js";import{_}from"./InputLabel-693e4890.js";import{_ as N}from"./PrimaryButton-4d70e4e3.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},q=["onSubmit"],F={class:"mt-4"},L={class:"block mt-4"},P={class:"flex items-center"},R={class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},U={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const e=b({email:"",password:"",remember:!1}),w=()=>{e.transform(a=>({...a,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(a,r)=>(d(),u(h,null,[t(s(k),{title:a.$t("Login")},null,8,["title"]),t(V,null,{logo:n(()=>[t(B)]),default:n(()=>[i.status?(d(),u("div",S,m(i.status),1)):c("",!0),o("form",{onSubmit:x(w,["prevent"])},[o("div",null,[t(_,{for:"email",value:a.$t("pages.authentication.Email")},null,8,["value"]),t(p,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=l=>s(e).email=l),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",F,[t(_,{for:"password",value:a.$t("pages.authentication.Password")},null,8,["value"]),t(p,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":r[1]||(r[1]=l=>s(e).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),o("div",L,[o("label",P,[t(C,{checked:s(e).remember,"onUpdate:checked":r[2]||(r[2]=l=>s(e).remember=l),name:"remember"},null,8,["checked"]),o("span",R,m(a.$t("pages.authentication.Remember me")),1)])]),o("div",U,[i.canResetPassword?(d(),y(s(v),{key:0,href:a.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:n(()=>[f(m(a.$t("pages.authentication.Did you forget the password?")),1)]),_:1},8,["href"])):c("",!0),t(N,{class:$(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[f(m(a.$t("Login")),1)]),_:1},8,["class","disabled"])])],40,q)]),_:1})],64))}};export{G as default};
