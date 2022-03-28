import{V as m}from"./vue-libs.882c34e2.js";function d(t,e){return e?typeof e=="string"?` ${t}--${e}`:Array.isArray(e)?e.reduce((n,r)=>n+d(t,r),""):Object.keys(e).reduce((n,r)=>n+(e[r]?d(t,r):""),""):""}function j(t){return function(e,n){return e&&typeof e!="string"&&(n=e,e=""),e=e?`${t}__${e}`:t,`${e}${d(e,n)}`}}function v(t){return typeof t=="function"}function D(t){return t!==null&&typeof t=="object"}function f(t,e){const n=e.split(".");let r=t;return n.forEach(o=>{var i;r=(i=r[o])!=null?i:""}),r}function w(t){return t!=null}m.prototype.$isServer;function A(t="",e=8){return t+Math.random().toString(16).substr(1,e)}const I=t=>{const{props:e={},mixins:n}=t,{props:r}=n[0],o=[],i=[],c={uuid:Math.random().toString(16).substr(2)};let h=!1;return Object.keys(e).forEach(u=>{const s=e[u].default;c[u]=typeof s=="function"?s():s;const a=f(e[u],"editor.type")==="custom";a&&(h=!0),e[u].visible!==!1&&e[u].editor&&!a&&i.push({propName:u,propConfig:e[u]})}),Object.keys(r).forEach(u=>{const s=r[u],a=s.default;c[u]=typeof a=="function"?a():a,s.visible!==!1&&s.editor&&o.push({propName:u,propConfig:s})}),{defaultProps:c,editProps:i,wrapEditProps:o,hasCustomEditor:h}},{hasOwnProperty:E}=Object.prototype;function B(t,e,n){const r=e[n];!w(r)||(!E.call(t,n)||!D(r)?t[n]=r:t[n]=g(Object(t[n]),e[n]))}function g(t,e){return Object.keys(e).forEach(n=>{B(t,e,n)}),t}var P={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",complete:"\u5B8C\u6210",loading:"\u52A0\u8F7D\u4E2D...",telEmpty:"\u8BF7\u586B\u5199\u7535\u8BDD",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",nameInvalid:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",confirmDelete:"\u786E\u5B9A\u8981\u5220\u9664\u5417",telInvalid:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"};const p=m.prototype,{defineReactive:y}=m.util;y(p,"$ljmLang","zh-CN");y(p,"$ljmMessages",{"zh-CN":P});const S={messages(){return p.$ljmMessages[p.$ljmLang]},use(t,e){p.$ljmLang=t,this.add({[t]:e})},add(t={}){g(p.$ljmMessages,t)}},$=/-(\w)/g;function b(t){return t.replace($,(e,n)=>n.toUpperCase())}let l;function x(){if(!l){const t=document.documentElement,e=t.style.fontSize||window.getComputedStyle(t).fontSize;l=parseFloat(e)}return l}function C(t){return t<2?t+"px":(t/x()).toFixed(3)+"rem"}const F={inject:{displayMode:{default:"production"},convertUnit:{default:()=>C}},props:{wrapPadding:{type:Array,default:()=>[0,0,0,0],editor:{type:"ext-margin-input",span:24,props:{linkLR:!0},formItemProps:{label:"\u8FB9\u8DDD",labelCol:{span:4},wrapperCol:{span:20}}}},wrapRadius:{type:Number,default:0,editor:{type:"ext-props-input",formItemProps:{label:"\u5706\u89D2",labelCol:{span:4},wrapperCol:{span:20}},span:24,props:{min:0,unit:"\u02DA",icon:"icon-yuanjiao2"}}},eventPrefix:{type:String,default:"",visible:!1,editor:{type:"a-input",formItemProps:{label:"\u4E8B\u4EF6\u524D\u7F00"},props:{placeholder:"\u8BF7\u8F93\u5165\u4E8B\u4EF6\u524D\u7F00"}}}},computed:{isProduction(){return this.displayMode==="production"},eventNamespace(){return this.eventPrefix||this.$options._componentTag},wrapStyle(){return{padding:this.wrapPadding.map(e=>this.addUnit(e)).join(" ")}},wrapInnerStyle(){return{borderRadius:this.wrapRadius>1?this.addUnit(this.wrapRadius):0,overflow:"hidden"}}},methods:{addUnit(t){return this.isProduction?this.convertUnit(t):t+"px"}}};function M(t){const{name:e}=this;t.component(e,this),t.component(b(`-${e}`),this)}function O(t){return function(e){const{name:n}=t;return e.name=n,e.install=M,e.mixins=e.mixins||[],e.mixins.push(F),e.__meta=t,e}}function z(t){const e=b(t)+".";return function(n,...r){const o=S.messages(),i=f(o,e+n)||f(o,n);return v(i)?i(...r):i}}function V(t){const{name:e,visible:n=!0,order:r=0}=t,o="ljm-"+e;return t.name=o,t.visible=n,t.order=r,[O(t),j(o),z(o)]}var N={props:{wrapStyle:{type:Object,default:()=>({})},innerStyle:{type:Object,default:()=>({})}},render(){const t=arguments[0];return t("div",{style:this.wrapStyle},[t("div",{style:this.innerStyle},[this.$slots.default])])}};const _=N;export{_ as W,j as a,V as c,I as g,A as r};
