import{V as p}from"./vue-libs.882c34e2.js";import{_ as S,h as E}from"./main.f3a2d702.js";function g(t,n){return n?typeof n=="string"?" "+t+"--"+n:Array.isArray(n)?n.reduce(function(e,r){return e+g(t,r)},""):Object.keys(n).reduce(function(e,r){return e+(n[r]?g(t,r):"")},""):""}function q(t){return function(n,e){return n&&typeof n!="string"&&(e=n,n=""),n=n?t+"__"+n:t,""+n+g(n,e)}}var K=Object.prototype.hasOwnProperty;function V(t,n,e){var r=n[e];!v(r)||(!K.call(t,e)||!x(r)?t[e]=r:t[e]=$(Object(t[e]),n[e]))}function $(t,n){return Object.keys(n).forEach(function(e){V(t,n,e)}),t}var U={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",complete:"\u5B8C\u6210",loading:"\u52A0\u8F7D\u4E2D...",telEmpty:"\u8BF7\u586B\u5199\u7535\u8BDD",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",nameInvalid:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",confirmDelete:"\u786E\u5B9A\u8981\u5220\u9664\u5417",telInvalid:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",confirm:"\u786E\u5B9A",startEnd:"\u5F00\u59CB/\u7ED3\u675F",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:function(n,e){return n+"\u5E74"+e+"\u6708"},rangePrompt:function(n){return"\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 "+n+" \u5929"}},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanContactCard:{addText:"\u6DFB\u52A0\u8054\u7CFB\u4EBA"},vanContactList:{addText:"\u65B0\u5EFA\u8054\u7CFB\u4EBA"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1\uFF1A"},vanCoupon:{unlimited:"\u65E0\u4F7F\u7528\u95E8\u69DB",discount:function(n){return n+"\u6298"},condition:function(n){return"\u6EE1"+n+"\u5143\u53EF\u7528"}},vanCouponCell:{title:"\u4F18\u60E0\u5238",tips:"\u6682\u65E0\u53EF\u7528",count:function(n){return n+"\u5F20\u53EF\u7528"}},vanCouponList:{empty:"\u6682\u65E0\u4F18\u60E0\u5238",exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528\u4F18\u60E0\u5238",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u683C\u5F0F\u4E0D\u6B63\u786E",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740",telPlaceholder:"\u6536\u8D27\u4EBA\u624B\u673A\u53F7",namePlaceholder:"\u6536\u8D27\u4EBA\u59D3\u540D",areaPlaceholder:"\u9009\u62E9\u7701 / \u5E02 / \u533A"},vanAddressEditDetail:{label:"\u8BE6\u7EC6\u5730\u5740",placeholder:"\u8857\u9053\u95E8\u724C\u3001\u697C\u5C42\u623F\u95F4\u53F7\u7B49\u4FE1\u606F"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}},f=p.prototype,C=p.util.defineReactive;C(f,"$vantLang","zh-CN");C(f,"$vantMessages",{"zh-CN":U});var G={messages:function(){return f.$vantMessages[f.$vantLang]},use:function(n,e){var r;f.$vantLang=n,this.add((r={},r[n]=e,r))},add:function(n){n===void 0&&(n={}),$(f.$vantMessages,n)}},H=/-(\w)/g;function N(t){return t.replace(H,function(n,e){return e.toUpperCase()})}function Pt(t,n){n===void 0&&(n=2);for(var e=t+"";e.length<n;)e="0"+e;return e}var X={methods:{slots:function(n,e){n===void 0&&(n="default");var r=this.$slots,i=this.$scopedSlots,a=i[n];return a?a(e):r[n]}}};function Y(t){var n=this.name;t.component(n,this),t.component(N("-"+n),this)}function Z(t){var n=t.scopedSlots||t.data.scopedSlots||{},e=t.slots();return Object.keys(e).forEach(function(r){n[r]||(n[r]=function(){return e[r]})}),n}function J(t){return{functional:!0,props:t.props,model:t.model,render:function(e,r){return t(e,r.props,Z(r),r)}}}function Q(t){return function(n){return m(n)&&(n=J(n)),n.functional||(n.mixins=n.mixins||[],n.mixins.push(X)),n.name=t,n.install=Y,n}}function tt(t){var n=N(t)+".";return function(e){for(var r=G.messages(),i=I(r,n+e)||I(r,e),a=arguments.length,o=new Array(a>1?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];return m(i)?i.apply(void 0,o):i}}function b(t){return t="van-"+t,[Q(t),q(t),tt(t)]}function nt(t){return/^\d+(\.\d+)?$/.test(t)}function Ot(t){return Number.isNaN?Number.isNaN(t):t!==t}function et(t){if(!!v(t))return t=String(t),nt(t)?t+"px":t}var w;function rt(){if(!w){var t=document.documentElement,n=t.style.fontSize||window.getComputedStyle(t).fontSize;w=parseFloat(n)}return w}function it(t){return t=t.replace(/rem/g,""),+t*rt()}function at(t){return t=t.replace(/vw/g,""),+t*window.innerWidth/100}function ot(t){return t=t.replace(/vh/g,""),+t*window.innerHeight/100}function At(t){if(typeof t=="number")return t;if(st){if(t.indexOf("rem")!==-1)return it(t);if(t.indexOf("vw")!==-1)return at(t);if(t.indexOf("vh")!==-1)return ot(t)}return parseFloat(t)}var st=typeof window!="undefined",h=p.prototype.$isServer;function Ft(){}function v(t){return t!=null}function m(t){return typeof t=="function"}function x(t){return t!==null&&typeof t=="object"}function Tt(t){return x(t)&&m(t.then)&&m(t.catch)}function I(t,n){var e=n.split("."),r=t;return e.forEach(function(i){var a;r=(a=r[i])!=null?a:""}),r}function jt(t){return t==null||typeof t!="object"?!0:Object.keys(t).length===0}var ct=["ref","key","style","class","attrs","refInFor","nativeOn","directives","staticClass","staticStyle"],ut={nativeOn:"on"};function P(t,n){var e=ct.reduce(function(r,i){return t.data[i]&&(r[ut[i]||i]=t.data[i]),r},{});return n&&(e.on=e.on||{},S(e.on,t.data.on)),e}function Rt(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var a=t.listeners[n];a&&(Array.isArray(a)?a.forEach(function(o){o.apply(void 0,r)}):a.apply(void 0,r))}function Wt(t,n){var e=new p({el:document.createElement("div"),props:t.props,render:function(i){return i(t,S({props:this.$props},n))}});return document.body.appendChild(e.$el),e}var O=!1;if(!h)try{var A={};Object.defineProperty(A,"passive",{get:function(){O=!0}}),window.addEventListener("test-passive",null,A)}catch{}function ft(t,n,e,r){r===void 0&&(r=!1),h||t.addEventListener(n,e,O?{capture:!1,passive:r}:!1)}function lt(t,n,e){h||t.removeEventListener(n,e)}function dt(t){t.stopPropagation()}function Bt(t,n){(typeof t.cancelable!="boolean"||t.cancelable)&&t.preventDefault(),n&&dt(t)}var pt=0;function ht(t){var n="binded_"+pt++;function e(){this[n]||(t.call(this,ft,!0),this[n]=!0)}function r(){this[n]&&(t.call(this,lt,!1),this[n]=!1)}return{mounted:e,activated:e,deactivated:r,beforeDestroy:r}}var F=b("info"),vt=F[0],mt=F[1];function T(t,n,e,r){var i=n.dot,a=n.info,o=v(a)&&a!=="";if(!(!i&&!o))return t("div",E([{class:mt({dot:i})},P(r,!0)]),[i?"":n.info])}T.props={dot:Boolean,info:[Number,String]};var gt=vt(T),j=b("icon"),bt=j[0],R=j[1];function wt(t){return t?t.indexOf("/")!==-1:!1}var yt={medel:"medal","medel-o":"medal-o","calender-o":"calendar-o"};function St(t){return t&&yt[t]||t}function W(t,n,e,r){var i,a=St(n.name),o=wt(a);return t(n.tag,E([{class:[n.classPrefix,o?"":n.classPrefix+"-"+a],style:{color:n.color,fontSize:et(n.size)}},P(r,!0)]),[e.default&&e.default(),o&&t("img",{class:R("image"),attrs:{src:a}}),t(gt,{attrs:{dot:n.dot,info:(i=n.badge)!=null?i:n.info}})])}W.props={dot:Boolean,name:String,size:[Number,String],info:[Number,String],badge:[Number,String],color:String,tag:{type:String,default:"i"},classPrefix:{type:String,default:R()}};var B=bt(W),D=Date.now();function Et(t){var n=Date.now(),e=Math.max(0,16-(n-D)),r=setTimeout(t,e);return D=n+e,r}var l=h?global:window,$t=l.requestAnimationFrame||Et,Ct=l.cancelAnimationFrame||l.clearTimeout;function y(t){return $t.call(l,t)}function z(t){y(function(){y(t)})}function Dt(t){Ct.call(l,t)}var L=b("notice-bar"),Nt=L[0],d=L[1],zt=Nt({mixins:[ht(function(t){t(window,"pageshow",this.reset)})],inject:{vanPopup:{default:null}},props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null},delay:{type:[Number,String],default:1},speed:{type:[Number,String],default:60}},data:function(){return{show:!0,offset:0,duration:0,wrapWidth:0,contentWidth:0}},watch:{scrollable:"reset",text:{handler:"reset",immediate:!0}},created:function(){this.vanPopup&&this.vanPopup.onReopen(this.reset)},activated:function(){this.reset()},methods:{onClickIcon:function(n){this.mode==="closeable"&&(this.show=!1,this.$emit("close",n))},onTransitionEnd:function(){var n=this;this.offset=this.wrapWidth,this.duration=0,y(function(){z(function(){n.offset=-n.contentWidth,n.duration=(n.contentWidth+n.wrapWidth)/n.speed,n.$emit("replay")})})},start:function(){this.reset()},reset:function(){var n=this,e=v(this.delay)?this.delay*1e3:0;this.offset=0,this.duration=0,this.wrapWidth=0,this.contentWidth=0,clearTimeout(this.startTimer),this.startTimer=setTimeout(function(){var r=n.$refs,i=r.wrap,a=r.content;if(!(!i||!a||n.scrollable===!1)){var o=i.getBoundingClientRect().width,s=a.getBoundingClientRect().width;(n.scrollable||s>o)&&z(function(){n.offset=-s,n.duration=s/n.speed,n.wrapWidth=o,n.contentWidth=s})}},e)}},render:function(){var n=this,e=arguments[0],r=this.slots,i=this.mode,a=this.leftIcon,o=this.onClickIcon,s={color:this.color,background:this.background},M={transform:this.offset?"translateX("+this.offset+"px)":"",transitionDuration:this.duration+"s"};function _(){var c=r("left-icon");if(c)return c;if(a)return e(B,{class:d("left-icon"),attrs:{name:a}})}function k(){var c=r("right-icon");if(c)return c;var u;if(i==="closeable"?u="cross":i==="link"&&(u="arrow"),u)return e(B,{class:d("right-icon"),attrs:{name:u},on:{click:o}})}return e("div",{attrs:{role:"alert"},directives:[{name:"show",value:this.show}],class:d({wrapable:this.wrapable}),style:s,on:{click:function(u){n.$emit("click",u)}}},[_(),e("div",{ref:"wrap",class:d("wrap"),attrs:{role:"marquee"}},[e("div",{ref:"content",class:[d("content"),{"van-ellipsis":this.scrollable===!1&&!this.wrapable}],style:M,on:{transitionend:this.onTransitionEnd}},[this.slots()||this.text])]),k()])}});export{ht as B,B as I,G as L,zt as N,P as a,lt as b,b as c,et as d,Rt as e,x as f,st as g,h,v as i,Tt as j,m as k,nt as l,Wt as m,Ft as n,ft as o,Bt as p,Ot as q,y as r,gt as s,Dt as t,At as u,z as v,Pt as w,dt as x,jt as y};
