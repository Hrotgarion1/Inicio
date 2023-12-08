import{_ as p}from"./AppLayout-567e16f8.js";import c from"./DeleteUserForm-5f595869.js";import l from"./LogoutOtherBrowserSessionsForm-8a6f55f7.js";import{S as s}from"./SectionBorder-5e27aba7.js";import f from"./TwoFactorAuthenticationForm-176cff67.js";import u from"./UpdatePasswordForm-d088bf46.js";import d from"./UpdateProfileInformationForm-548436e8.js";import{o,c as _,w as n,a as i,t as h,e as r,b as t,f as a,F as g}from"./app-68d0f62a.js";import"./DialogModal-cb19f3e7.js";import"./SectionTitle-f8126409.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-ff5c86d9.js";import"./DangerButton-450a1648.js";import"./TextInput-214e130b.js";import"./SecondaryButton-41baad09.js";import"./ActionMessage-a7e274f1.js";import"./PrimaryButton-4d70e4e3.js";import"./InputLabel-693e4890.js";import"./FormSection-4443dbda.js";const $={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},y={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},x={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,B)=>(o(),_(p,{title:"Profile"},{header:n(()=>[i("h2",$,h(e.$t("Profile")),1)]),default:n(()=>[i("div",null,[i("div",y,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",x,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(g,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};
