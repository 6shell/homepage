var a=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,o,e)=>o in t?a(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,c=(a,t)=>{for(var o in t||(t={}))l.call(t,o)&&n(a,o,t[o]);if(e)for(var o of e(t))i.call(t,o)&&n(a,o,t[o]);return a},r=(a,e)=>t(a,o(e));import{_ as s,d as u,S as m,u as d,r as f,a as p,C as k,b as C,c as b,w as V,m as D,D as g,e as v,f as y,o as h,g as S,h as w,y as _,l as x,q as O,T,F as U,n as J,A as F,B as N,t as j,M as P,E as z,G as A}from"./index.b595840a.js";import{_ as E}from"./index.4e396aa7.js";import{d as R}from"./direction.933aa86d.js";const Z=a=>(F("data-v-7a420192"),a=a(),N(),a),B={key:0,class:"action-component-setting"},M=Z((()=>S("div",{class:"title"},"Toggle组件配置",-1))),I={class:"flex-center-y"},W={class:"form-row-control"},X=Z((()=>S("div",{class:"label"},"Width",-1))),q={class:"content"},G=Z((()=>S("span",{class:"unit"},"PX",-1))),H={class:"form-row-control"},L=Z((()=>S("div",{class:"label"},"Height",-1))),K={class:"content"},Q=Z((()=>S("span",{class:"unit"},"PX",-1))),Y={class:"form-row-control"},$=Z((()=>S("div",{class:"label"},"方向",-1))),aa={class:"content"},ta={class:"form-row-control"},oa=Z((()=>S("div",{class:"label"},"阴影",-1))),ea={class:"content"},la={class:"form-row-control"},ia=Z((()=>S("div",{class:"label"},"圆角",-1))),na={class:"content"},ca=Z((()=>S("span",{class:"font-control"},"px",-1))),ra={class:"component-detail-setting"},sa=Z((()=>S("div",{class:"label"},"组件配置",-1))),ua={class:"content"};var ma=s(u({setup(a,{expose:t}){const o={actionType:0,actionClickType:1,actionClickValue:{url:"",material:"Empty",w:375,h:400,background:"rgba(255, 255, 255, 0.95)",backgroundFilter:"brightness(0.8)",direction:8,boxShadow:"0 0 4px #89909c",borderRadius:4,componentSetting:JSON.parse(JSON.stringify(m.Empty.formData))}},e=d(),l=f(),i=f(),n=p({formData:JSON.parse(JSON.stringify(o)),actionClickFormConf:{}});let s,u=!1;const F=()=>{l.value.close(),u=!1};k((()=>n.formData.actionClickValue.material),(()=>{var a,t;if(u){if((null==(t=null==(a=null==s?void 0:s.actionSetting)?void 0:a.actionClickValue)?void 0:t.material)===n.formData.actionClickValue.material)return;const o=n.formData.actionClickValue.material;n.formData.actionClickValue.componentSetting=JSON.parse(JSON.stringify(m[o].formData)),n.actionClickFormConf=v("function"==typeof m[o].formConf?m[o].formConf(n.formData.actionClickValue.componentSetting):m[o].formConf)}}));const N=()=>{if(n.formData.actionType){if(1===n.formData.actionClickType)i.value.validate((a=>{if(!a)return!1;{const a=r(c({},s),{actionSetting:j(n.formData)});e.dispatch("editComponent",a),F()}}));else if(2===n.formData.actionClickType)if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(n.formData.actionClickValue.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(n.formData.actionClickValue.url)||(n.formData.actionClickValue.url="https://"+n.formData.actionClickValue.url);const a=r(c({},s),{actionSetting:j(n.formData)});e.dispatch("editComponent",a),F()}else alert("跳转目标URL不合法")}else{const a=r(c({},s),{actionSetting:null});e.dispatch("editComponent",a),F()}},Z=C();return t({open:a=>{s=a,a.actionSetting&&a.actionSetting.actionType?n.formData=JSON.parse(JSON.stringify(a.actionSetting)):n.formData=JSON.parse(JSON.stringify(o));const t=n.formData.actionClickValue.material;n.actionClickFormConf=v("function"==typeof m[t].formConf?m[t].formConf(n.formData.actionClickValue.componentSetting):m[t].formConf),l.value.open(),setTimeout((()=>{u=!0}))},close:F}),(a,t)=>{const o=y("el-option"),e=y("el-select"),c=y("el-form-item"),r=y("el-input"),s=y("el-form"),u=y("el-input-number"),m=y("animation-dialog");return h(),b(m,D({ref_key:"dialog",ref:l,animationMode:"",title:"组件交互配置(Beta)",width:"min(480px, 98vw)",height:"min(520px, 90vh)",closeOnClickOutside:!1,listenWindowSizeChange:!0,appendToBody:""},g(Z)),{footer:V((()=>[S("div",{class:"footer",style:{"text-align":"right",padding:"12px"}},[S("button",{type:"button",class:"btn",onClick:F},"取消"),S("button",{type:"button",class:"btn btn-primary",onClick:N},"确认")])])),default:V((()=>[S("div",null,[w(s,null,{default:V((()=>[w(c,{label:"交互行为"},{default:V((()=>[w(e,{modelValue:g(n).formData.actionType,"onUpdate:modelValue":t[0]||(t[0]=a=>g(n).formData.actionType=a)},{default:V((()=>[w(o,{label:"无",value:0}),w(o,{label:"鼠标点击",value:1})])),_:1},8,["modelValue"])])),_:1}),1===g(n).formData.actionType?(h(),b(c,{key:0,label:"鼠标点击"},{default:V((()=>[w(e,{modelValue:g(n).formData.actionClickType,"onUpdate:modelValue":t[1]||(t[1]=a=>g(n).formData.actionClickType=a)},{default:V((()=>[w(o,{label:"显示新组件(Toggle)",value:1}),w(o,{label:"跳转链接",value:2}),w(o,{label:"运行Javascript脚本",value:3,disabled:""})])),_:1},8,["modelValue"])])),_:1})):_("",!0),1===g(n).formData.actionType&&2===g(n).formData.actionClickType?(h(),b(c,{key:1},{default:V((()=>[w(r,{modelValue:g(n).formData.actionClickValue.url,"onUpdate:modelValue":t[2]||(t[2]=a=>g(n).formData.actionClickValue.url=a),placeholder:"请输入一个可用的跳转链接"},null,8,["modelValue"])])),_:1})):_("",!0)])),_:1}),1===g(n).formData.actionType&&1===g(n).formData.actionClickType?(h(),x("div",B,[M,w(s,{ref:"componentSettingForm",class:"setting-form1","label-position":"top"},{default:V((()=>[w(c,{label:"物料组件"},{default:V((()=>[S("div",I,[(h(),b(O(P),{modelValue:g(n).formData.actionClickValue.material,"onUpdate:modelValue":t[3]||(t[3]=a=>g(n).formData.actionClickValue.material=a)},null,8,["modelValue"])),w(T,{content:"更换物料会重置为默认配置，请谨慎操作"})])])),_:1}),w(c,{label:"尺寸"},{default:V((()=>[S("div",W,[X,S("div",q,[w(u,{modelValue:g(n).formData.actionClickValue.w,"onUpdate:modelValue":t[4]||(t[4]=a=>g(n).formData.actionClickValue.w=a),"controls-position":"right",min:40,max:1920,style:{width:"100px"}},null,8,["modelValue"]),G])]),S("div",H,[L,S("div",K,[w(u,{modelValue:g(n).formData.actionClickValue.h,"onUpdate:modelValue":t[5]||(t[5]=a=>g(n).formData.actionClickValue.h=a),"controls-position":"right",min:40,max:1920,style:{width:"100px"}},null,8,["modelValue"]),Q])])])),_:1}),w(c,{label:"Popover配置"},{default:V((()=>[S("div",Y,[$,S("div",aa,[w(e,{modelValue:g(n).formData.actionClickValue.direction,"onUpdate:modelValue":t[6]||(t[6]=a=>g(n).formData.actionClickValue.direction=a)},{default:V((()=>[(h(!0),x(U,null,J(g(R),(a=>(h(),b(o,{label:a.label,value:a.value,key:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),S("div",ta,[oa,S("div",ea,[w(r,{style:{width:"100%"},modelValue:g(n).formData.actionClickValue.boxShadow,"onUpdate:modelValue":t[7]||(t[7]=a=>g(n).formData.actionClickValue.boxShadow=a),clearable:"",placeholder:"请输入box-shadow值"},null,8,["modelValue"])])]),S("div",la,[ia,S("div",na,[w(u,{modelValue:g(n).formData.actionClickValue.borderRadius,"onUpdate:modelValue":t[8]||(t[8]=a=>g(n).formData.actionClickValue.borderRadius=a),"controls-position":"right",min:0,max:100,style:{width:"100px"}},null,8,["modelValue"]),ca])])])),_:1}),w(c,{label:"背景"},{default:V((()=>[(h(),b(O(z),{background:g(n).formData.actionClickValue.background,"onUpdate:background":t[9]||(t[9]=a=>g(n).formData.actionClickValue.background=a),w:g(n).formData.actionClickValue.w,h:g(n).formData.actionClickValue.h,positionMode:2},null,8,["background","w","h"])),g(n).formData.actionClickValue.background.includes("url")?(h(),b(O(A),{key:0,filter:g(n).formData.actionClickValue.backgroundFilter,"onUpdate:filter":t[10]||(t[10]=a=>g(n).formData.actionClickValue.backgroundFilter=a)},null,8,["filter"])):_("",!0)])),_:1})])),_:1},512),S("div",ra,[sa,S("div",ua,[(h(),b(O(g(E)),{formData:g(n).formData.actionClickValue.componentSetting,formConf:g(n).actionClickFormConf,ref_key:"componentDetailForm",ref:i,"label-width":"100px"},null,8,["formData","formConf"]))])])])):_("",!0)])])),_:1},16)}}}),[["__scopeId","data-v-7a420192"]]);export{ma as default};
