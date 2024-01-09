var L=Object.defineProperty,U=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var k=(l,t,o)=>t in l?L(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,C=(l,t)=>{for(var o in t||(t={}))F.call(t,o)&&k(l,o,t[o]);if(M)for(var o of M(t))R.call(t,o)&&k(l,o,t[o]);return l},D=(l,t)=>U(l,A(t));import{t as N}from"./teams.3b08c438.js";import{a as m,l as _,d as s,_ as v,g as T,f as z,n as E,p as j,q as H,s as V,e as i,w as n,b as e,T as J,h as c,u as Q,c as p,t as d,x as X,H as G,W as Z,K,F as I,m as B}from"./index.0a11efb2.js";import{M as Y}from"./TheMemberListItem.f2942f58.js";import{P as ee}from"./ThePrimaryButton.b9ccbf47.js";import{S as te}from"./TheSecondaryButton.7bc85a57.js";function ae(l,t){return m(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),s("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})])}function se(l,t){return m(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})])}function oe(l,t){return m(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})])}const ne={methods:{openEditInfoModal(){this.$emit("editInfoButtonClicked")},openChangeThemeModal(){this.$emit("changeThemeButtonClicked")},openDeleteDepartmentModal(){this.$emit("deleteDepartmentButtonClicked")}},components:{TransitionRoot:T,TransitionChild:z,Menu:E,MenuButton:j,MenuItem:H,MenuItems:V}},le={class:"flex-shrink-0"},re=e("span",{class:"sr-only"},"Open user menu",-1),ie=e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})],-1),de=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2.5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),ce=c(" Edit Info "),me=[de,ce],ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2.5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clip-rule":"evenodd"})],-1),fe=c(" Change Theme "),he=[ue,fe],ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2.5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),xe=c(" Delete "),_e=[ge,xe];function pe(l,t,o,b,g,a){const u=i("MenuButton"),x=i("MenuItems"),f=i("Menu");return m(),_(f,{as:"div",class:"relative"},{default:n(()=>[e("div",le,[s(u,{class:"w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},{default:n(()=>[re,ie]),_:1})]),s(J,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[s(x,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("button",{onClick:t[0]||(t[0]=h=>a.openEditInfoModal()),class:"flex w-full items-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},me),e("button",{onClick:t[1]||(t[1]=h=>a.openChangeThemeModal()),class:"flex w-full items-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},he),e("button",{onClick:t[2]||(t[2]=h=>a.openDeleteDepartmentModal()),class:"flex w-full items-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},_e)]),_:1})]),_:1})]),_:1})}var ye=v(ne,[["render",pe]]);const ve={props:{avatar:{type:String,required:!0},name:{type:String,required:!0},title:{type:String,required:!0},role:{type:String,required:!0},mail:{type:String,required:!0},phone:{type:String,required:!0}},computed:{roleClass(){return this.role=="Team Lead"?"text-green-800 bg-green-100 dark:bg-green-200/90 dark-text-green-900":"text-sky-800 bg-sky-100 dark:bg-sky-300 dark:text-sky-900"}},methods:{close(){this.$emit("clickOnClose")}},components:{MailIcon:ae,PhoneIcon:se,XIcon:Q}},be={class:"relative w-full max-w-md transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all"},we={class:"absolute top-0 right-0 pt-4 pr-4"},Me=e("span",{class:"sr-only"},"Close",-1),ke={class:"col-span-1 flex flex-col text-center bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600"},Ce={class:"flex-1 flex flex-col p-8"},De=["src","alt"],Ie={class:"mt-6 text-gray-900 dark:text-gray-200 text-sm font-medium"},Be={class:"mt-1 flex-grow flex flex-col justify-between"},Te=e("dt",{class:"sr-only"},"Title",-1),ze={class:"text-gray-500 dark:text-gray-400/80 text-sm"},Ee=e("dt",{class:"sr-only"},"Role",-1),je={class:"mt-3"},He=e("dt",{class:"sr-only"},"Phone",-1),Ve={class:"mt-6 text-gray-500 dark:text-gray-400/80 text-sm flex justify-center"},$e=e("dt",{class:"sr-only"},"Mail",-1),Oe={class:"mt-3 text-gray-500 dark:text-gray-400/80 text-sm flex justify-center"},qe={class:"-mt-px flex divide-x divide-gray-200 dark:divide-gray-600"},Se={class:"w-0 flex-1 flex group"},Pe=["href"],We=e("span",{class:"ml-3 dark:text-gray-400/80 dark:group-hover:text-gray-300"},"Email",-1),Le={class:"w-0 flex-1 flex group"},Ue=["href"],Ae=e("span",{class:"ml-3 dark:text-gray-400/80 dark:group-hover:text-gray-300"},"Call",-1);function Fe(l,t,o,b,g,a){const u=i("XIcon"),x=i("MailIcon"),f=i("PhoneIcon");return m(),p("div",be,[e("div",we,[e("button",{type:"button",onClick:t[0]||(t[0]=(...h)=>a.close&&a.close(...h)),class:"bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-gray-500"},[Me,s(u,{class:"h-6 w-6","aria-hidden":"true"})])]),e("li",ke,[e("div",Ce,[e("img",{class:"w-32 h-32 flex-shrink-0 mx-auto object-cover rounded-full",src:o.avatar,alt:o.name},null,8,De),e("h3",Ie,d(o.name),1),e("dl",Be,[Te,e("dd",ze,d(o.title),1),Ee,e("dd",je,[e("span",{class:X(a.roleClass+" px-2 py-1 text-xs font-medium rounded-full")},d(o.role),3)]),He,e("dd",Ve,[s(x,{class:"w-5 h-5 text-gray-400 dark:text-gray-400/80 mr-2.5"}),c(" "+d(o.mail),1)]),$e,e("dd",Oe,[s(f,{class:"w-5 h-5 text-gray-400 dark:text-gray-400/80 mr-2.5"}),c(" "+d(o.phone),1)])])]),e("div",null,[e("div",qe,[e("div",Se,[e("a",{href:`mailto:${o.mail}`,class:"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-xl hover:text-gray-500 focus:outline-none focus:ring-2 dark:focus:ring-offset-gray-800 focus:ring-gray-500"},[s(x,{class:"w-5 h-5 text-gray-400 dark:text-gray-400/80 dark:group-hover:text-gray-300","aria-hidden":"true"}),We],8,Pe)]),e("div",Le,[e("a",{href:`tel:${o.phone}`,class:"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-xl hover:text-gray-500 focus:outline-none focus:ring-2 dark:focus:ring-offset-gray-800 focus:ring-gray-500"},[s(f,{class:"w-5 h-5 text-gray-400 dark:text-gray-400/80 dark:group-hover:text-gray-300","aria-hidden":"true"}),Ae],8,Ue)])])])])])}var Re=v(ve,[["render",Fe]]);const Ne={props:{id:{type:String,required:!0}},data(){return{isOpenEditInfoModal:!1,memberDetailsModalOpen:!1,inviteMemberModalOpen:!1,members:[{uid:"1",name:"Sam Fisher",title:"Product Manager",role:"Team Lead",phone:"+49(1)54879656",mail:"sam.fisher@company.com",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{uid:"2",name:"Cameron Williamson",title:"Applications Engineer",role:"Member",phone:"+49(1)54698741",mail:"cameron.williamson@company.com",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{uid:"3",name:"Jenny Wilson",title:"Central Security Manager",role:"Member",phone:"+49(1)54879656",mail:"jenny.wilson@company.com",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{uid:"4",name:"Dries Vincent",title:"Manager Business Relations",role:"Member",phone:"+49(1)54879656",mail:"deries.vincent@company.com",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{uid:"5",name:"Michael Foster",title:"IT Manager",role:"Team Lead",phone:"+49(1)54879956",mail:"michael.foster@company.com",avatar:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},{uid:"6",name:"Michelle Watson",title:"Insurance Manager",role:"Member",phone:"+49(1)54879656",mail:"michelle.watson@company.com",avatar:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"}],memberDetailUid:""}},computed:{team(){const l=N.teams.find(o=>o.id===parseInt(this.id));if(!l)return null;const t="/aviation-reporting";return D(C({},l),{image:t+l.image})},memberdetail(){return this.members.find(l=>l.uid==this.memberDetailUid)}},methods:{closeEditInfoModal(){this.isOpenEditInfoModal=!1},openEditInfoModal(){this.isOpenEditInfoModal=!0},openMemberDetailsModal(l){this.memberDetailUid=l,console.log(this.memberDetailUid),this.memberDetailsModalOpen=!0},closeMemberDetailsModal(){this.memberDetailsModalOpen=!1},openInviteMemberModal(){this.inviteMemberModalOpen=!0},closeInviteMemberModal(){this.inviteMemberModalOpen=!1}},components:{Menu:E,MenuButton:j,MenuItem:H,MenuItems:V,TransitionRoot:T,TransitionChild:z,Dialog:G,DialogPanel:Z,DialogTitle:K,TheDepartmentMenuButton:ye,TheMemberListItemVue:Y,TheMemberDetailCardVue:Re,PlusSmIcon:oe,PrimaryButton:ee,SecondaryButton:te}},Je=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Qe={class:"fixed inset-0 overflow-y-auto"},Xe={class:"flex min-h-full items-center justify-center p-4 text-center"},Ge=c(" Unternehmensbereich bearbeiten "),Ze=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," \xC4ndern sie den Namen und die Beschreibung des Unternehmensbereichs. "),e("div",{class:"space-y-8 divide-y divide-gray-200"},[e("div",{class:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},[e("div",{class:"sm:col-span-6"},[e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Name "),e("div",{class:"mt-1"},[e("input",{id:"name",name:"name",type:"text",autocomplete:"name",class:"shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"})])]),e("div",{class:"sm:col-span-6"},[e("label",{for:"about",class:"block text-sm font-medium text-gray-700"}," Beschreibung "),e("div",{class:"mt-1"},[e("textarea",{id:"about",name:"about",rows:"3",class:"shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"})])])])])],-1),Ke={class:"mt-6 flex justify-end"},Ye=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),et={class:"fixed inset-0 overflow-y-auto"},tt={class:"flex min-h-full items-center justify-center p-4 text-center"},at=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),st={class:"fixed inset-0 overflow-y-auto"},ot={class:"flex min-h-full items-center justify-center p-4 text-center"},nt={class:"max-w-lg mx-auto"},lt=e("div",{class:"text-center"},[e("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 48 48","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"})]),e("h2",{class:"mt-2 text-lg font-medium text-gray-900"},"Mitglieder einladen"),e("p",{class:"mt-1 text-sm text-gray-500"},"F\xFCgen sie neue Mitglieder zum Unternehmensbereich hinzu. Die Rollen k\xF6nnen durch den Risikomanager ge\xE4ndert werden.")],-1),rt={action:"#",class:"mt-6 flex"},it=e("label",{for:"email",class:"sr-only"},"Email address",-1),dt=e("input",{type:"email",name:"email",id:"email",class:"shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"Enter an email"},null,-1),ct=c(" Einladen "),mt={class:"mt-10"},ut=e("h3",{class:"text-xs font-semibold text-gray-500 uppercase tracking-wide"},"Vorschl\xE4ge",-1),ft={role:"list",class:"mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"},ht={class:"min-w-0 flex-1 flex items-center space-x-3"},gt={class:"flex-shrink-0"},xt=["src"],_t={class:"min-w-0 flex-1"},pt={class:"text-sm font-medium text-gray-900 truncate"},yt={class:"text-sm font-medium text-gray-500 truncate"},vt={class:"flex-shrink-0"},bt={type:"button",class:"inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},wt={class:"text-sm font-medium text-gray-900"},Mt=c(" Einladen "),kt={class:"sr-only"},Ct={class:"max-w-5xl mx-auto"},Dt={class:"pb-2"},It={class:"flex items-center text-sm font-medium"},Bt=c(" \xDCbersicht Teams "),Tt=e("svg",{class:"flex-shrink-0 mx-2 h-5 w-5 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),zt={href:"",class:"text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"},Et=e("div",{class:"md:flex md:items-center md:justify-between"},[e("div",{class:"flex-1 min-w-0"},[e("h2",{class:"text-2xl font-semibold text-gray-900 sm:truncate dark:text-gray-200"}," Team ")])],-1),jt={class:"mt-6 flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-sm"},Ht={class:"h-48 lg:w-64 overflow-hidden rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg lg:rounded-l-lg lg:overflow-hidden"},Vt=["src","alt"],$t={class:"flex flex-col w-full lg:ml-2 p-6 lg:p-6"},Ot={class:"text-xl font-semibold text-gray-900 dark:text-gray-300 truncate"},qt={class:"flex flex-1 items-start lg:pr-4"},St={class:"text-sm font-medium text-gray-500 mt-2 dark:text-gray-400/80"},Pt={class:"flex items-center mt-4"},Wt={class:"flex flex-1 flex-wrap"},Lt={class:"flex text-sm text-gray-500 dark:text-gray-400/80 truncate"},Ut=e("span",{class:"mr-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"-ml-0.5 h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})])],-1),At={class:"mt-10"},Ft={class:"border-gray-200 sm:flex sm:items-center sm:justify-between"},Rt=e("div",null,[e("h3",{class:"text-xl font-semibold text-gray-900 dark:text-gray-200"},"Mitglieder"),e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-400"}," \xDCbersicht der Teams denen ich zugordnet bin. ")],-1),Nt={class:"mt-3 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex sm:mt-0 sm:ml-4"},Jt=c(" Verwalten "),Qt=c(" Einladen "),Xt={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"};function Gt(l,t,o,b,g,a){const u=i("TransitionChild"),x=i("DialogTitle"),f=i("DialogPanel"),h=i("Dialog"),y=i("TransitionRoot"),$=i("TheMemberDetailCardVue"),w=i("PrimaryButton"),O=i("PlusSmIcon"),q=i("router-link"),S=i("TheDepartmentMenuButton"),P=i("SecondaryButton"),W=i("TheMemberListItemVue");return m(),p("div",null,[s(y,{appear:"",show:g.isOpenEditInfoModal,as:"template"},{default:n(()=>[s(h,{as:"div",onClose:a.closeEditInfoModal,class:"relative z-10"},{default:n(()=>[s(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[Je]),_:1}),e("div",Qe,[e("div",Xe,[s(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[s(f,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:n(()=>[s(x,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:n(()=>[Ge]),_:1}),Ze,e("div",Ke,[e("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:t[0]||(t[0]=(...r)=>a.closeEditInfoModal&&a.closeEditInfoModal(...r))}," Abbrechen "),e("button",{type:"button",class:"ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:t[1]||(t[1]=(...r)=>a.closeEditInfoModal&&a.closeEditInfoModal(...r))}," Speichern ")])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"]),s(y,{appear:"",show:g.memberDetailsModalOpen,as:"template"},{default:n(()=>[s(h,{as:"div",onClose:a.closeMemberDetailsModal,class:"relative z-10"},{default:n(()=>[s(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[Ye]),_:1}),e("div",et,[e("div",tt,[s(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[s(f,{class:"w-full max-w-sm"},{default:n(()=>[(m(),_($,{id:a.memberdetail.uid,key:a.memberdetail.uid,avatar:a.memberdetail.avatar,name:a.memberdetail.name,title:a.memberdetail.title,role:a.memberdetail.role,mail:a.memberdetail.mail,phone:a.memberdetail.phone,onClickOnClose:t[2]||(t[2]=r=>a.closeMemberDetailsModal())},null,8,["id","avatar","name","title","role","mail","phone"]))]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"]),s(y,{appear:"",show:g.inviteMemberModalOpen,as:"template"},{default:n(()=>[s(h,{as:"div",onClose:a.closeInviteMemberModal,class:"relative z-10"},{default:n(()=>[s(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[at]),_:1}),e("div",st,[e("div",ot,[s(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[s(f,{class:"w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:n(()=>[e("div",null,[e("div",nt,[e("div",null,[lt,e("form",rt,[it,dt,s(w,{onClick:a.closeEditInfoModal},{default:n(()=>[ct]),_:1},8,["onClick"])])]),e("div",mt,[ut,e("ul",ft,[(m(!0),p(I,null,B(g.members,r=>(m(),p("li",{key:r.uid,class:"py-4 flex items-center justify-between space-x-3"},[e("div",ht,[e("div",gt,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:r.avatar,alt:""},null,8,xt)]),e("div",_t,[e("p",pt,d(r.name),1),e("p",yt,d(r.title),1)])]),e("div",vt,[e("button",bt,[s(O,{class:"-ml-1 mr-0.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),e("span",wt,[Mt,e("span",kt,d(r.name),1)])])])]))),128))])])])])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"]),e("div",Ct,[e("div",null,[e("div",Dt,[e("nav",It,[s(q,{to:"/app/teams","active-class":"",class:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none focus:underline transition duration-150 ease-in-out"},{default:n(()=>[Bt]),_:1}),Tt,e("div",zt,d(a.team.name),1)])]),Et]),e("div",jt,[e("div",Ht,[e("img",{class:"w-full h-full object-cover",src:a.team.image,alt:a.team.name},null,8,Vt)]),e("div",$t,[e("div",null,[e("h1",Ot,d(a.team.name),1)]),e("div",qt,[e("p",St,d(a.team.description),1)]),e("div",null,[e("div",Pt,[e("div",Wt,[e("p",Lt,[Ut,c(" "+d(a.team.members)+" Mitglieder ",1)])]),s(S,{onEditInfoButtonClicked:t[3]||(t[3]=r=>a.openEditInfoModal())})])])])]),e("div",At,[e("div",Ft,[Rt,e("div",Nt,[s(P,null,{default:n(()=>[Jt]),_:1}),s(w,{onClick:t[4]||(t[4]=r=>a.openInviteMemberModal())},{default:n(()=>[Qt]),_:1})])]),e("div",Xt,[(m(!0),p(I,null,B(g.members,r=>(m(),_(W,{id:r.uid,key:r.uid,avatar:r.avatar,name:r.name,title:r.title,role:r.role,onClickOnMemberDetails:Zt=>a.openMemberDetailsModal(r.uid)},null,8,["id","avatar","name","title","role","onClickOnMemberDetails"]))),128))])])])])}var oa=v(Ne,[["render",Gt]]);export{oa as default};
