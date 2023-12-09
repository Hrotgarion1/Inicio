import{T as b,d as V,z as k,o as w,e as y,b as o,u as t,w as c,F as x,Z as $,a as u,t as f,i as h,j as _}from"./app-85eed05c.js";import{_ as S}from"./AppLayout-9ca8e3d2.js";import{_ as i,a as d}from"./TextInput-22a64ef0.js";import{_ as n}from"./InputLabel-e76395d0.js";import{_ as q}from"./PrimaryButton-03509750.js";import{S as U}from"./sweetalert2.all-63e2ce2a.js";const E={class:"font-semibold text-xl text-gray-800 leading-tight"},C={class:"py-12"},j={class:"max-w-xl mx-auto sm:px-6 lg:px-8"},B={class:"p-4 bg-green-100 overflow-hidden shadow-sm sm:rounded-lg"},N=["onSubmit"],L={class:"px-2 py-2"},A={class:"fa-solid fa-save"},F={class:"ml-2"},M={class:"fa-solid fa-trash"},P={class:"ml-2"},Z={__name:"Edit",props:{producto:{type:Object}},setup(g){const r=g,e=b({id:r.producto.id,code:r.producto.code,name:r.producto.name,cant:r.producto.cant,stock:r.producto.stock,ubica:r.producto.ubica,util:r.producto.util,sitio:r.producto.sitio,descript:r.producto.descript}),m=V(!1);k(()=>m.value,s=>{s&&(e.cant.toString(),e.cant<=e.stock&&p(),m.value=!1)});const v=async()=>{m.value=!0;try{await e.patch(route("productos.update",{producto:e.id})),e.reset();const s=await p(e.id);s&&s.isConfirmed&&router.push(route("productos.index"))}catch(s){console.error("Error al enviar el formulario:",s)}},p=()=>{e.cant>e.stock&&U.fire({title:"Avisar a Luis",icon:"info",confirmButtonText:'<i class="fa-solid fa-check"></i> Entendido'})};return(s,l)=>(w(),y(x,null,[o(t($),{title:s.$t("Product Edit")},null,8,["title"]),o(S,null,{header:c(()=>[u("h2",E,f(s.$t("Product Edit")),1)]),default:c(()=>[u("div",C,[u("div",j,[u("div",B,[u("form",{onSubmit:h(v,["prevent"]),class:"mt-6 space-y-6 max-w-xl"},[o(n,{for:"code",value:s.$t("Code")},null,8,["value"]),o(i,{id:"code",modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=a=>t(e).code=a),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(d,{message:t(e).errors.code,class:"mt-2"},null,8,["message"]),o(n,{for:"name",value:s.$t("Name")},null,8,["value"]),o(i,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":l[1]||(l[1]=a=>t(e).name=a),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(d,{message:t(e).errors.name,class:"mt-2"},null,8,["message"]),o(n,{for:"cant",value:s.$t("Quantity")},null,8,["value"]),o(i,{id:"cant",modelValue:t(e).cant,"onUpdate:modelValue":l[2]||(l[2]=a=>t(e).cant=a),value:t(e).cant.toString(),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue","value"]),o(d,{message:t(e).errors.cant,class:"mt-2"},null,8,["message"]),o(n,{for:"stock",value:s.$t("Minimum Stock")},null,8,["value"]),o(i,{id:"stock",modelValue:t(e).stock,"onUpdate:modelValue":l[3]||(l[3]=a=>t(e).stock=a),value:t(e).stock.toString(),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue","value"]),o(d,{message:t(e).errors.cant,class:"mt-2"},null,8,["message"]),o(n,{for:"ubica",value:s.$t("Location")},null,8,["value"]),o(i,{id:"ubica",modelValue:t(e).ubica,"onUpdate:modelValue":l[4]||(l[4]=a=>t(e).ubica=a),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(d,{message:t(e).errors.ubica,class:"mt-2"},null,8,["message"]),o(n,{for:"util",value:s.$t("Jig")},null,8,["value"]),o(i,{id:"util",modelValue:t(e).util,"onUpdate:modelValue":l[5]||(l[5]=a=>t(e).util=a),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(d,{message:t(e).errors.util,class:"mt-2"},null,8,["message"]),o(n,{for:"sitio",value:s.$t("Location of the jig")},null,8,["value"]),o(i,{id:"sitio",modelValue:t(e).sitio,"onUpdate:modelValue":l[6]||(l[6]=a=>t(e).sitio=a),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(d,{message:t(e).errors.sitio,class:"mt-2"},null,8,["message"]),o(n,{for:"descript",value:s.$t("Notes")},null,8,["value"]),o(i,{id:"descript",modelValue:t(e).descript,"onUpdate:modelValue":l[7]||(l[7]=a=>t(e).descript=a),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(d,{message:t(e).errors.descript,class:"mt-2"},null,8,["message"]),u("div",L,[o(q,{disabled:t(e).processing,class:"mx-2"},{default:c(()=>[u("i",A,[u("span",F,f(s.$t("Save")),1)])]),_:1},8,["disabled"]),o(t(_),{href:s.route("productos.index"),class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"},{default:c(()=>[u("i",M,[u("span",P,f(s.$t("Cancel")),1)])]),_:1},8,["href"])])],40,N)])])])]),_:1})],64))}};export{Z as default};