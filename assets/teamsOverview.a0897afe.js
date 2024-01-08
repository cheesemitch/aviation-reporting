import{P as k}from"./ThePrimaryButton.35adc642.js";import{S as C}from"./TheSecondaryButton.5379481f.js";import{C as T}from"./TheCompanyLogo.a0e0b44c.js";import{t as B}from"./teams.3b08c438.js";import{_ as M,g as z,f as j,H as D,W as V,K as O,a as r,c,d as a,w as s,b as e,F as p,m as f,e as o,l as h,t as i,h as d}from"./index.8f5ee334.js";const H=[{id:1,name:"Recht/Versicherungen/Gremien",slug:"Recht-Versicherungen-Gremien",image:"/images/recht-versicherungen-gremien.jpg",members:"6",description:"Recht/Versicherungen/Gremien lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla."},{id:2,name:"Forschung & Entwicklung",slug:"forschung-und-entwicklung",image:"/images/bah.jpg",members:"5",description:"Bremen Airport Handling lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla."}];var P={teams:H};const L={data(){return{isOpen:!1,myTeams:P.teams,teams:B.teams}},methods:{closeModal(){this.isOpen=!1},openModal(){this.isOpen=!0}},components:{CompanyLogo:T,TransitionRoot:z,TransitionChild:j,Dialog:D,DialogPanel:V,DialogTitle:O,PrimaryButton:k,SecondaryButton:C}},N=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),R={class:"fixed inset-0 overflow-y-auto"},A={class:"flex min-h-full items-center justify-center p-4 text-center"},S=d(" Neues Team "),q=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500 dark:text-gray-400"}," Bitte geben sie den Namen und eine kurze Beschreibung des neuen Teams an. "),e("div",{class:"space-y-8 divide-y divide-gray-200"},[e("div",{class:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},[e("div",{class:"sm:col-span-6 hidden"},[e("label",{for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Company Logo "),e("div",{class:"mt-2 flex items-center"},[e("span",{class:"h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center px-2 pb-1"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})])]),e("button",{type:"button",class:"ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Change ")])]),e("div",{class:"sm:col-span-6"},[e("label",{for:"name",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Name "),e("div",{class:"mt-1"},[e("input",{id:"name",name:"name",type:"text",autocomplete:"name",class:"dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"})])]),e("div",{class:"sm:col-span-6"},[e("label",{for:"about",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Beschreibung "),e("div",{class:"mt-1"},[e("textarea",{id:"about",name:"about",rows:"3",class:"dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"})]),e("p",{class:"hidden mt-2 text-sm text-gray-500"},"Write a few sentences about this business area.")])])])],-1),F={class:"mt-6 space-y-4 sm:space-y-0 sm:justify-end sm:flex sm:space-x-3"},G=d(" Abbrechen "),W=d(" Hinzuf\xFCgen "),E={class:"max-w-5xl mx-auto"},K={class:"flex items-start space-x-5"},I=e("div",null,[e("h1",{class:"pt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100"},"Teams"),e("p",{class:"text-sm font-medium text-gray-500 dark:text-gray-400"}," \xDCbersicht und Verwaltung von Teams und MitarbeiterInnen im Unternehmen.")],-1),U={class:"mt-8"},J=e("h2",{class:"text-xl font-semibold text-gray-900 dark:text-gray-100"},"Meine Teams",-1),Q=e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-400"}," \xDCbersicht aller Teams denen ich zugordnet bin. ",-1),X={class:"mt-6 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4"},Y={class:"flex-shrink-0"},Z=["src","alt"],$={class:"bg-white dark:bg-gray-800 pl-4 pr-2 py-3 flex items-center space-x-1 hover:border-gray-400"},ee={class:"flex-1 min-w-0"},te={class:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate"},se={class:"text-sm text-gray-500 dark:text-gray-400 truncate"},ae=e("div",{class:"flex-shrink-0"},[e("button",{class:"w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[e("span",{class:"sr-only"},"Open options"),e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])])],-1),oe={class:"mt-10"},re={class:"md:flex md:items-center md:justify-between md:space-x-5"},ne=e("div",null,[e("h2",{class:"text-xl font-semibold text-gray-900 dark:text-gray-100"},"Alle Teams"),e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-400"}," \xDCbersicht aller Teams in der Organisation. ")],-1),ie={class:"mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"},le={class:"mt-4 flex space-x-3 md:mt-0"},ce=e("span",null,"Team Hinzuf\xFCgen",-1),de={class:"grid grid-cols-1 gap-4 my-6"},me={class:"flex-shrink-0"},ge=["src","alt"],ue={class:"flex-1 min-w-0"},pe={class:"text-sm font-medium text-gray-900 dark:text-gray-100 truncate"},fe={class:"text-sm text-gray-500 dark:text-gray-400 truncate"},he=e("div",{class:"flex-shrink-0"},[e("button",{class:"w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[e("span",{class:"sr-only"},"Open options"),e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])])],-1);function xe(ye,_e,be,ve,l,n){const m=o("TransitionChild"),x=o("DialogTitle"),y=o("SecondaryButton"),g=o("PrimaryButton"),_=o("DialogPanel"),b=o("Dialog"),v=o("TransitionRoot"),w=o("CompanyLogo"),u=o("router-link");return r(),c("div",null,[a(v,{appear:"",show:l.isOpen,as:"template"},{default:s(()=>[a(b,{as:"div",onClose:n.closeModal,class:"relative z-10"},{default:s(()=>[a(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[N]),_:1}),e("div",R,[e("div",A,[a(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(_,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all"},{default:s(()=>[a(x,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"},{default:s(()=>[S]),_:1}),q,e("div",F,[a(y,{type:"button",onClick:n.closeModal},{default:s(()=>[G]),_:1},8,["onClick"]),a(g,{type:"button",onClick:n.closeModal},{default:s(()=>[W]),_:1},8,["onClick"])])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"]),e("div",E,[e("div",K,[a(w),I]),e("div",U,[J,Q,e("div",X,[(r(!0),c(p,null,f(l.myTeams,t=>(r(),h(u,{key:t.id,to:{name:"team.details",params:{id:t.id,slug:t.slug}},class:"flex flex-col group rounded-lg shadow-sm overflow-hidden border border-transparent hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"},{default:s(()=>[e("div",Y,[e("img",{class:"h-48 sm:h-32 w-full object-cover",src:t.image,alt:t.name},null,8,Z)]),e("div",$,[e("div",ee,[e("p",te,i(t.name),1),e("p",se,i(t.members)+" Mitarbeiter ",1)]),ae])]),_:2},1032,["to"]))),128))]),e("div",oe,[e("div",re,[ne,e("div",ie,[e("div",le,[a(g,{onClick:n.openModal},{default:s(()=>[ce]),_:1},8,["onClick"])])])]),e("div",de,[(r(!0),c(p,null,f(l.teams,t=>(r(),h(u,{to:{name:"team.details",params:{id:t.id,slug:t.slug}},key:t.id,class:"rounded-lg group bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 border border-transparent hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"},{default:s(()=>[e("div",me,[e("img",{class:"h-10 w-10 rounded object-cover",src:t.image,alt:t.name},null,8,ge)]),e("div",ue,[e("p",pe,i(t.name),1),e("p",fe,i(t.members)+" Mitarbeiter ",1)]),he]),_:2},1032,["to"]))),128))])])])])])}var Me=M(L,[["render",xe]]);export{Me as default};