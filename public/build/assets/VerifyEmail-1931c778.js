import{T as p,k as h,o as f,e as d,b as t,u as o,w as s,F as y,Z as _,a as i,t as r,f as k,n as v,g as n,j as u,i as x}from"./app-68d0f62a.js";import{A as b}from"./AuthenticationCard-5d96268f.js";import{_ as $}from"./AuthenticationCardLogo-a2363765.js";import{_ as V}from"./PrimaryButton-4d70e4e3.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},E={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},S=["onSubmit"],B={class:"mt-4 flex items-center justify-between"},T={__name:"VerifyEmail",props:{status:String},setup(l){const c=l,a=p({}),m=()=>{a.post(route("verification.send"))},g=h(()=>c.status==="verification-link-sent");return(e,C)=>(f(),d(y,null,[t(o(_),{title:e.$t("Email Verification")},null,8,["title"]),t(b,null,{logo:s(()=>[t($)]),default:s(()=>[i("div",w,r(e.$t("Before continuing")),1),g.value?(f(),d("div",E,r(e.$t("A new verification link has been sent to the email address you provided in your profile settings.")),1)):k("",!0),i("form",{onSubmit:x(m,["prevent"])},[i("div",B,[t(V,{class:v({"opacity-25":o(a).processing}),disabled:o(a).processing},{default:s(()=>[n(r(e.$t("Resend Verification Email")),1)]),_:1},8,["class","disabled"]),i("div",null,[t(o(u),{href:e.route("profile.show"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:s(()=>[n(r(e.$t("Edit Profile")),1)]),_:1},8,["href"]),t(o(u),{href:e.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ms-2"},{default:s(()=>[n(r(e.$t("Log Out")),1)]),_:1},8,["href"])])])],40,S)]),_:1})],64))}};export{T as default};
