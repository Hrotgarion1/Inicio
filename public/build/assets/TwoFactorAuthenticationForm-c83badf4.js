import{d as v,K as N,o,e as r,a as c,r as z,b as n,w as s,g as i,t as a,J as L,n as b,m as D,Q as I,T as O,k as Q,z as U,c as h,f as m,u as F,F as Y,h as G,O as B}from"./app-ccad9738.js";import{a as J,_ as j}from"./DialogModal-2a9c3aa9.js";import{_ as M,a as R}from"./TextInput-d416f9f7.js";import{_ as K}from"./PrimaryButton-6a890283.js";import{_ as $}from"./SecondaryButton-183bf3de.js";import{_ as W}from"./DangerButton-54921447.js";import{_ as X}from"./InputLabel-539c5647.js";import"./SectionTitle-784d25d8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-7d27a9f8.js";const Z={class:"mt-4"},g={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(w,{emit:x}){const k=x,u=v(!1),e=N({password:"",error:"",processing:!1}),d=v(null),_=()=>{axios.get(route("password.confirmation")).then(l=>{l.data.confirmed?k("confirmed"):(u.value=!0,setTimeout(()=>d.value.focus(),250))})},y=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,f(),D().then(()=>k("confirmed"))}).catch(l=>{e.processing=!1,e.error=l.response.data.errors.password[0],d.value.focus()})},f=()=>{u.value=!1,e.password="",e.error=""};return(l,p)=>(o(),r("span",null,[c("span",{onClick:_},[z(l.$slots,"default")]),n(J,{show:u.value,onClose:f},{title:s(()=>[i(a(w.title),1)]),content:s(()=>[i(a(w.content)+" ",1),c("div",Z,[n(M,{ref_key:"passwordInput",ref:d,modelValue:e.password,"onUpdate:modelValue":p[0]||(p[0]=T=>e.password=T),type:"password",class:"mt-1 block w-3/4",placeholder:l.$t("Password"),autocomplete:"current-password",onKeyup:L(y,["enter"])},null,8,["modelValue","placeholder","onKeyup"]),n(R,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:s(()=>[n($,{onClick:f},{default:s(()=>[i(a(l.$t("Cancel")),1)]),_:1}),n(K,{class:b(["ms-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:y},{default:s(()=>[i(a(w.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},te={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ae={class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},se={key:3},re={key:0},ne={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},le={key:0,class:"font-semibold"},ie={key:1},ce=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},de={class:"font-semibold"},me=["innerHTML"],fe={key:1,class:"mt-4"},pe={key:1},ve={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ye={class:"font-semibold"},_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg"},he={class:"mt-5"},ge={key:0},we={key:1},Ae={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(w){const x=w,k=I(),u=v(!1),e=v(!1),d=v(!1),_=v(null),y=v(null),f=v([]),l=O({code:""}),p=Q(()=>{var t;return!u.value&&((t=k.props.auth.user)==null?void 0:t.two_factor_enabled)});U(p,()=>{p.value||(l.reset(),l.clearErrors())});const T=()=>{u.value=!0,B.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([q(),E(),S()]),onFinish:()=>{u.value=!1,e.value=x.requiresConfirmation}})},q=()=>axios.get(route("two-factor.qr-code")).then(t=>{_.value=t.data.svg}),E=()=>axios.get(route("two-factor.secret-key")).then(t=>{y.value=t.data.secretKey}),S=()=>axios.get(route("two-factor.recovery-codes")).then(t=>{f.value=t.data}),V=()=>{l.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,_.value=null,y.value=null}})},H=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>S())},A=()=>{d.value=!0,B.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{d.value=!1,e.value=!1}})};return(t,P)=>(o(),h(j,null,{title:s(()=>[i(a(t.$t("Two Factor Authentication")),1)]),description:s(()=>[i(a(t.$t("Add additional security to your account using two factor authentication.")),1)]),content:s(()=>[p.value&&!e.value?(o(),r("h3",ee,a(t.$t("You have enabled two factor authentication.")),1)):p.value&&e.value?(o(),r("h3",te,a(t.$t("Finish enabling two factor authentication.")),1)):(o(),r("h3",oe,a(t.$t("You have not enabled two factor authentication.")),1)),c("div",ae,[c("p",null,a(t.$t("Google Authenticator application.")),1)]),p.value?(o(),r("div",se,[_.value?(o(),r("div",re,[c("div",ne,[e.value?(o(),r("p",le,a(t.$t("To finish enabling two factor authentication.")),1)):(o(),r("p",ie,a(t.$t("Two factor authentication is now enabled.")),1))]),c("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:_.value},null,8,ce),y.value?(o(),r("div",ue,[c("p",de,[i(a(t.$t("Setup Key:"))+" ",1),c("span",{innerHTML:y.value},null,8,me)])])):m("",!0),e.value?(o(),r("div",fe,[n(X,{for:"code",value:"Code"}),n(M,{id:"code",modelValue:F(l).code,"onUpdate:modelValue":P[0]||(P[0]=C=>F(l).code=C),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:L(V,["enter"])},null,8,["modelValue","onKeyup"]),n(R,{message:F(l).errors.code,class:"mt-2"},null,8,["message"])])):m("",!0)])):m("",!0),f.value.length>0&&!e.value?(o(),r("div",pe,[c("div",ve,[c("p",ye,a(t.$t("Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")),1)]),c("div",_e,[(o(!0),r(Y,null,G(f.value,C=>(o(),r("div",{key:C},a(C),1))),128))])])):m("",!0)])):m("",!0),c("div",he,[p.value?(o(),r("div",we,[n(g,{onConfirmed:V},{default:s(()=>[e.value?(o(),h(K,{key:0,type:"button",class:b(["me-3",{"opacity-25":u.value}]),disabled:u.value},{default:s(()=>[i(a(t.$t("Confirm")),1)]),_:1},8,["class","disabled"])):m("",!0)]),_:1}),n(g,{onConfirmed:H},{default:s(()=>[f.value.length>0&&!e.value?(o(),h($,{key:0,class:"me-3"},{default:s(()=>[i(a(t.$t("Regenerate Recovery Codes")),1)]),_:1})):m("",!0)]),_:1}),n(g,{onConfirmed:S},{default:s(()=>[f.value.length===0&&!e.value?(o(),h($,{key:0,class:"me-3"},{default:s(()=>[i(a(t.$t("Show Recovery Codes")),1)]),_:1})):m("",!0)]),_:1}),n(g,{onConfirmed:A},{default:s(()=>[e.value?(o(),h($,{key:0,class:b({"opacity-25":d.value}),disabled:d.value},{default:s(()=>[i(a(t.$t("Cancel")),1)]),_:1},8,["class","disabled"])):m("",!0)]),_:1}),n(g,{onConfirmed:A},{default:s(()=>[e.value?m("",!0):(o(),h(W,{key:0,class:b({"opacity-25":d.value}),disabled:d.value},{default:s(()=>[i(a(t.$t("Disable")),1)]),_:1},8,["class","disabled"]))]),_:1})])):(o(),r("div",ge,[n(g,{onConfirmed:T},{default:s(()=>[n(K,{type:"button",class:b({"opacity-25":u.value}),disabled:u.value},{default:s(()=>[i(a(t.$t("Enable")),1)]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ae as default};