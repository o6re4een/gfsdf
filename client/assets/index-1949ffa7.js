import{k as r,E as a,_ as s,a as l}from"./index-dc9f83fb.js";var c=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,n=(o,e,t)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))d.call(e,t)&&n(o,t,e[t]);if(i)for(var t of i(e))b.call(e,t)&&n(o,t,e[t]);return o};class f{constructor(e){this.openModal=r.open,this.closeModal=r.close,this.subscribeModal=r.subscribe,this.setTheme=a.setThemeConfig,a.setConfig(p({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await s(()=>import("./index-db483975.js"),["assets/index-db483975.js","assets/index-dc9f83fb.js","assets/index-7105dc88.css","assets/dijkstra-59d11638.js"]);const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),l.setIsUiLoaded(!0)}}}export{f as Web3Modal};
