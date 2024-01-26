var D=Object.defineProperty,V=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var _=(a,t,o)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,m=(a,t)=>{for(var o in t||(t={}))O.call(t,o)&&_(a,o,t[o]);if(y)for(var o of y(t))H.call(t,o)&&_(a,o,t[o]);return a},g=(a,t)=>V(a,P(t));import{P as L}from"./ThePrimaryButton.e9b6fa4d.js";import{S as N}from"./TheSecondaryButton.ed9eee64.js";import{C as R}from"./TheCompanyLogo.2b82a343.js";import{t as A}from"./teams.3b08c438.js";import{_ as S,g as q,f as F,H as G,W,K as E,a as d,c as u,d as n,w as r,b as e,F as b,m as v,e as i,l as w,t as c,h as p}from"./index.34b74d53.js";const K=[{id:1,name:"Recht/Versicherungen/Gremien",slug:"Recht-Versicherungen-Gremien",image:"/images/recht-versicherungen-gremien.jpg",members:"6",description:"Recht/Versicherungen/Gremien lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla."},{id:2,name:"Forschung & Entwicklung",slug:"forschung-und-entwicklung",image:"/images/bah.jpg",members:"5",description:"Bremen Airport Handling lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla."}];var I={teams:K};const U={data(){return{isOpen:!1,myTeams:I.teams,teams:A.teams}},computed:{adjustedMyTeams(){const a="/aviation-reporting";return this.myTeams.map(t=>g(m({},t),{image:a+t.image}))},adjustedTeams(){const a="/aviation-reporting";return this.teams.map(t=>g(m({},t),{image:a+t.image}))}},methods:{closeModal(){this.isOpen=!1},openModal(){this.isOpen=!0}},components:{CompanyLogo:R,TransitionRoot:q,TransitionChild:F,Dialog:G,DialogPanel:W,DialogTitle:E,PrimaryButton:L,SecondaryButton:N}},J=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Q={class:"fixed inset-0 overflow-y-auto"},X={class:"flex min-h-full items-center justify-center p-4 text-center"},Y=p(" Neues Team "),Z=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500 dark:text-gray-400"}," Bitte geben sie den Namen und eine kurze Beschreibung des neuen Teams an. "),e("div",{class:"space-y-8 divide-y divide-gray-200"},[e("div",{class:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},[e("div",{class:"sm:col-span-6 hidden"},[e("label",{for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Company Logo "),e("div",{class:"mt-2 flex items-center"},[e("span",{class:"h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center px-2 pb-1"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})])]),e("button",{type:"button",class:"ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Change ")])]),e("div",{class:"sm:col-span-6"},[e("label",{for:"name",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Name "),e("div",{class:"mt-1"},[e("input",{id:"name",name:"name",type:"text",autocomplete:"name",class:"dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"})])]),e("div",{class:"sm:col-span-6"},[e("label",{for:"about",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Beschreibung "),e("div",{class:"mt-1"},[e("textarea",{id:"about",name:"about",rows:"3",class:"dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"})]),e("p",{class:"hidden mt-2 text-sm text-gray-500"},"Write a few sentences about this business area.")])])])],-1),$={class:"mt-6 space-y-4 sm:space-y-0 sm:justify-end sm:flex sm:space-x-3"},ee=p(" Abbrechen "),te=p(" Hinzuf\xFCgen "),se={class:"max-w-5xl mx-auto"},ae={class:"flex items-start space-x-5"},oe=e("div",null,[e("h1",{class:"pt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100"},"Teams"),e("p",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"}," \xDCbersicht und Verwaltung von Teams und MitarbeiterInnen im Unternehmen.")],-1),re={class:"mt-8"},ne=e("h2",{class:"text-xl font-semibold text-gray-900 dark:text-gray-100"},"Meine Teams",-1),ie=e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-400"}," \xDCbersicht aller Teams denen ich zugordnet bin. ",-1),le={class:"mt-6 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4"},de={class:"flex-shrink-0"},ce=["src","alt"],me={class:"bg-white dark:bg-gray-800 pl-4 pr-2 py-3 flex items-center space-x-1 hover:border-gray-400"},ge={class:"flex-1 min-w-0"},ue={class:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate"},pe={class:"text-sm text-gray-500 dark:text-gray-400 truncate"},fe=e("div",{class:"flex-shrink-0"},[e("button",{class:"w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[e("span",{class:"sr-only"},"Open options"),e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])])],-1),he={class:"mt-10"},xe={class:"md:flex md:items-center md:justify-between md:space-x-5"},ye=e("div",null,[e("h2",{class:"text-xl font-semibold text-gray-900 dark:text-gray-100"},"Alle Teams"),e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-400"}," \xDCbersicht aller Teams in der Organisation. ")],-1),_e={class:"mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"},be={class:"mt-4 flex space-x-3 md:mt-0"},ve=e("span",null,"Team Hinzuf\xFCgen",-1),we={class:"grid grid-cols-1 gap-4 my-6"},ke={class:"flex-shrink-0"},Te=["src","alt"],Ce={class:"flex-1 min-w-0"},Me={class:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate"},Be={class:"text-sm text-gray-500 dark:text-gray-400 truncate"},je=e("div",{class:"flex-shrink-0"},[e("button",{class:"w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[e("span",{class:"sr-only"},"Open options"),e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])])],-1);function ze(a,t,o,De,k,l){const f=i("TransitionChild"),T=i("DialogTitle"),C=i("SecondaryButton"),h=i("PrimaryButton"),M=i("DialogPanel"),B=i("Dialog"),j=i("TransitionRoot"),z=i("CompanyLogo"),x=i("router-link");return d(),u("div",null,[n(j,{appear:"",show:k.isOpen,as:"template"},{default:r(()=>[n(B,{as:"div",onClose:l.closeModal,class:"relative z-10"},{default:r(()=>[n(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[J]),_:1}),e("div",Q,[e("div",X,[n(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[n(M,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all"},{default:r(()=>[n(T,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"},{default:r(()=>[Y]),_:1}),Z,e("div",$,[n(C,{type:"button",onClick:l.closeModal},{default:r(()=>[ee]),_:1},8,["onClick"]),n(h,{type:"button",onClick:l.closeModal},{default:r(()=>[te]),_:1},8,["onClick"])])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"]),e("div",se,[e("div",ae,[n(z),oe]),e("div",re,[ne,ie,e("div",le,[(d(!0),u(b,null,v(l.adjustedMyTeams,s=>(d(),w(x,{key:s.id,to:{name:"team.details",params:{id:s.id,slug:s.slug}},class:"flex flex-col group rounded-lg shadow-sm overflow-hidden border border-transparent hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"},{default:r(()=>[e("div",de,[e("img",{class:"h-48 sm:h-32 w-full object-cover",src:s.image,alt:s.name},null,8,ce)]),e("div",me,[e("div",ge,[e("p",ue,c(s.name),1),e("p",pe,c(s.members)+" Mitarbeiter ",1)]),fe])]),_:2},1032,["to"]))),128))]),e("div",he,[e("div",xe,[ye,e("div",_e,[e("div",be,[n(h,{onClick:l.openModal},{default:r(()=>[ve]),_:1},8,["onClick"])])])]),e("div",we,[(d(!0),u(b,null,v(l.adjustedTeams,s=>(d(),w(x,{to:{name:"team.details",params:{id:s.id,slug:s.slug}},key:s.id,class:"rounded-lg group bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 border border-transparent hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"},{default:r(()=>[e("div",ke,[e("img",{class:"h-10 w-10 rounded object-cover",src:s.image,alt:s.name},null,8,Te)]),e("div",Ce,[e("p",Me,c(s.name),1),e("p",Be,c(s.members)+" Mitarbeiter ",1)]),je]),_:2},1032,["to"]))),128))])])])])])}var Re=S(U,[["render",ze]]);export{Re as default};