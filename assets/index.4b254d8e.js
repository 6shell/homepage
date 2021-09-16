import{u as e}from"./index.cfda32d7.js";import{b as t,w as a,c as n,af as o,ag as i,p as l,l as s,e as d,E as c,L as r,u as h,F as m,h as u,O as v,H as p,B as k,z as g,N as f,t as C,q as S,ah as D,s as y}from"./element-plus.abf3c969.js";import{l as w,g as b}from"./color.556e4bcb.js";o.extend(i);var M={name:"DatePicker",props:{date:String,todo:{type:Object,required:!0},isDark:{type:Boolean,default:!1}},emit:["selectDate"],setup(e,{emit:i}){const l=t("");a((()=>e.date),(e=>{l.value=o(e).format("YYYY-MM")}),{immediate:!0});return{weekStrArr:["S","M","T","W","T","F","S"],dayList:n((()=>{const e=o().month(o(l.value).month()).startOf("month");let t=o().week(o(e).week()).startOf("week");const a=[];for(let n=0;n<35;n++){const e=~~t.format("DD"),n=t.format("YYYY-MM-DD"),o=~~t.format("MM");a.push({label:e,value:n,month:o}),t=t.add(1,"d")}return a})),selectedMonth:n((()=>~~o(l.value).format("MM"))),labelMonth:n((()=>o(l.value).format("MMM, YYYY"))),hasTodoListDates:n((()=>Object.keys(e.todo))),handleClickDay:e=>i("selectDate",e),handlePrevClick:()=>{l.value=o(l.value).subtract(1,"month").format("YYYY-MM")},handleNextClick:()=>{l.value=o(l.value).add(1,"month").format("YYYY-MM")}}}};l("data-v-644ae154");const Y={class:"calendar__date"},x=[r("svg",{viewBox:"0 0 1024 1024",width:"20",height:"20"},[r("path",{d:"M754.739998 129.124869 677.034219 62.024635 266.002818 515.097548 672.169421 958.024379 749.894643 890.904703 408.017252 515.097548Z"})],-1)],_={class:"calendar__head content"},O=[r("svg",{viewBox:"0 0 1024 1024",width:"20",height:"20"},[r("path",{d:"M754.739998 129.124869 677.034219 62.024635 266.002818 515.097548 672.169421 958.024379 749.894643 890.904703 408.017252 515.097548Z"})],-1)],L=["onClick"];s(),M.render=function(e,t,a,n,o,i){return d(),c("div",{class:"date-picker",style:p({"--themeTextColor1":a.isDark?"#fff":"#464646","--themeTextColor2":a.isDark?"#464646":"#fff"})},[r("div",Y,[r("div",{class:"calendar__head prev",onClick:t[0]||(t[0]=(...e)=>n.handlePrevClick&&n.handlePrevClick(...e))},x),r("div",_,h(n.labelMonth),1),r("div",{class:"calendar__head next",onClick:t[1]||(t[1]=(...e)=>n.handleNextClick&&n.handleNextClick(...e))},O),(d(!0),c(m,null,u(n.weekStrArr,((e,t)=>(d(),c("div",{class:"calendar__day",key:e+t},h(e),1)))),128)),(d(!0),c(m,null,u(n.dayList,(e=>(d(),c("div",{class:v(["calendar__number",{"not-this-month":e.month!==n.selectedMonth,active:e.value===a.date,tips:n.hasTodoListDates.includes(e.value)}]),key:e.value,onClick:t=>n.handleClickDay(e)},h(e.label),11,L)))),128))])],4)},M.__scopeId="data-v-644ae154";const N=["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"];var P={name:"TodoList",components:{DatePicker:M},directives:{focus(e){document.activeElement!==e&&e.focus()}},props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0}},setup(a){const i=e(),l=n((()=>w(a.componentSetting.themeColor||"#643a7a",50))),s=n((()=>b(a.componentSetting.themeColor||"#643a7a")<150)),d=t();k((()=>{d.value=o().format("YYYY-MM-DD")}));const c=t(""),r=t(!1),h=n((()=>a.componentSetting.todo[d.value]||[]));return{weekDay:n((()=>N[new Date(d.value).getDay()])),formatterDate:n((()=>{const e=new Date(d.value).toDateString().split(" ");return`${e[1]} ${e[2]}, ${e[3]}`})),todoList:h,handleChecked:e=>{const t=!h.value[e].isChecked,n=JSON.parse(JSON.stringify(a.element));n.componentSetting.todo[d.value][e].isChecked=t,i.commit("editComponent",n)},handleRemove:e=>{const t=JSON.parse(JSON.stringify(a.element));t.componentSetting.todo[d.value].splice(e,1),i.commit("editComponent",t)},handleAdd:()=>{c.value="";const e=JSON.parse(JSON.stringify(a.element)),t={content:"",isChecked:!1,isEditing:!0};e.componentSetting.todo[d.value]?e.componentSetting.todo[d.value].push(t):e.componentSetting.todo[d.value]=[t],i.commit("editComponent",e)},handleEditSubmit:(e,t,n)=>{if(t.isEditing){const t=JSON.parse(JSON.stringify(a.element)),o=t.componentSetting.todo[d.value];e.currentTarget.value?(o[n].content=c.value=e.currentTarget.value,o[n].isEditing=!1):o.splice(n,1),i.commit("editComponent",t)}},editingValue:c,showDatePicker:r,date:d,updateDate:e=>{d.value=e.value},themeLightColor:l,isDark:s}}};l("data-v-7448fbba");const T={class:"head"},z={class:"list"},B=["checked"],E=["onClick"],F=["value","onBlur","onKeyup"],J=["onClick"],j={class:"wrapper"},A=["width","height"],q=[r("path",{class:"checkmark",fill:"none","stroke-width":"8","stroke-miterlimit":"10",d:"M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"},null,-1)],$=["onClick"],I=["width","height"],K=[r("path",{d:"M510.8096 420.3008l335.296-335.296 90.5088 90.5088-335.296 335.296 335.296 335.296-90.5088 90.5088-335.296-335.296-335.296 335.296-90.5088-90.5088 335.296-335.296-335.296-335.296 90.5088-90.5088z"},null,-1)],R={viewBox:"0 0 1024 1024",width:"20",height:"20"},V=["fill"];s(),P.render=function(e,t,a,n,o,i){const l=g("DatePicker"),s=f("focus");return d(),c("div",{class:"todo-list-card",style:p({"--themeColor":a.componentSetting.themeColor,"--themeLightColor":n.themeLightColor,fontSize:a.componentSetting.baseFontSize+"px",padding:a.componentSetting.padding+"px"})},[r("div",T,[r("div",{class:"title",onClick:t[0]||(t[0]=e=>n.showDatePicker=!n.showDatePicker)},h(n.weekDay),1),r("div",{class:"subtitle",onClick:t[1]||(t[1]=e=>n.showDatePicker=!n.showDatePicker)},h(n.formatterDate),1),r("div",{class:v(["picker",{active:n.showDatePicker}])},[C(l,{date:n.date,todo:a.componentSetting.todo,onSelectDate:n.updateDate,isDark:n.isDark},null,8,["date","todo","onSelectDate","isDark"])],2)]),r("ul",z,[(d(!0),c(m,null,u(n.todoList,((e,t)=>(d(),c("li",{class:"list-item",key:e.content+t},[r("input",{type:"checkbox",name:"todo",checked:e.isChecked},null,8,B),e.isEditing?S((d(),c("input",{key:1,type:"text",class:"edit",value:n.editingValue,onBlur:a=>n.handleEditSubmit(a,e,t),onKeyup:D((a=>n.handleEditSubmit(a,e,t)),["enter"])},null,40,F)),[[s]]):(d(),c("div",{key:0,class:"text",onClick:e=>n.handleChecked(t)},h(e.content),9,E)),S(r("div",{class:"button",onClick:e=>n.handleChecked(t)},null,8,J),[[y,!e.isChecked]]),S(r("div",j,[(d(),c("svg",{viewBox:"0 0 98.5 98.5",width:20*a.componentSetting.baseFontSize/16,height:20*a.componentSetting.baseFontSize/16},q,8,A))],512),[[y,e.isChecked]]),r("div",{class:"close",onClick:e=>n.handleRemove(t)},[(d(),c("svg",{viewBox:"0 0 1024 1024",width:20*a.componentSetting.baseFontSize/16,height:20*a.componentSetting.baseFontSize/16},K,8,I))],8,$)])))),128))]),r("div",{class:"add",onClick:t[2]||(t[2]=(...e)=>n.handleAdd&&n.handleAdd(...e))},[(d(),c("svg",R,[r("path",{fill:n.isDark?"#fff":"#464646",d:"M510.8096 420.3008l335.296-335.296 90.5088 90.5088-335.296 335.296 335.296 335.296-90.5088 90.5088-335.296-335.296-335.296 335.296-90.5088-90.5088 335.296-335.296-335.296-335.296 90.5088-90.5088z"},null,8,V)]))])],4)},P.__scopeId="data-v-7448fbba";export default P;
