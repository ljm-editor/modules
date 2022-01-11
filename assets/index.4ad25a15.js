var ht=Object.defineProperty;var U=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var G=(t,e,i)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,A=(t,e)=>{for(var i in e||(e={}))at.call(e,i)&&G(t,i,e[i]);if(U)for(var i of U(e))rt.call(e,i)&&G(t,i,e[i]);return t};import{e as lt,n as ct,h as J}from"./main.361ab6fb.js";import{c as ut,W as dt,a as mt,g as pt}from"./index.5dc326e0.js";import"./vue-libs.882c34e2.js";const q=()=>Math.random().toString(32).substring(6);class C{constructor(e){const{id:i=q(),x:s=4,y:o=4,width:h=100,height:l=100,bgImg:c="",html:r="",bgColor:a="transparent",radius:u=0,href:m="",type:d="image",padding:n=[0,0,0,0]}=e||{};this.id=i,this.x=s,this.y=o,this.width=h,this.height=l,this.bgImg=c,this.imgMode="cover",this.html=r,this.padding=n,this.bgColor=a,this.radius=u,this.href=m,this.type=d}clone(){const e=new C(this);return e.id=q(),e.x+=8,e.y+=20,e}}const[gt,K]=ut({name:"free-layout",desc:"\u81EA\u7531\u5E03\u5C40",group:"\u57FA\u7840\u6A21\u5757",tags:["\u81EA\u5B9A\u4E49"]}),ft={props:{height:{type:Number,default:200,editor:{type:"custom"}},bgColor:{type:String,default:"#fff",editor:{type:"custom"}},blocks:{type:Array,default:()=>[new C({bgColor:"rgb(234, 245, 255)"}),new C({x:108,bgColor:"rgb(203, 231, 254)"}),new C({x:212,bgColor:"rgb(152, 205, 253)"})],editor:{type:"custom"}}},triggers:{onClick:"block:click"},methods:{onClick(t){return()=>{const{eventNamespace:e,$options:i}=this,{triggers:s}=i,o=`${e}:${s.onClick}`;lt.emit(o,{data:t})}},renderBlocks(){const t=this.$createElement;return this.blocks.map(e=>t("div",{key:e.id,class:K("block"),on:{click:this.onClick(e)},style:this.getBlockStyle(e,this.addUnit)},[!!e.html&&t("div",{domProps:{innerHTML:e.html}})]))},getBlockStyle(t,e){const{x:i,y:s,width:o,height:h,bgColor:l,bgImg:c,radius:r,imgMode:a}=t,u={left:e(i),top:e(s),width:e(o),height:e(h),backgroundColor:l,borderRadius:r};return c&&(u.backgroundImage=`url(${c})`,u.backgroundSize=a),u}},render(){const t=arguments[0],{height:e,bgColor:i}=this,s={height:this.addUnit(e),backgroundColor:i};return t(dt,{attrs:{wrapStyle:this.wrapStyle,innerStyle:this.wrapInnerStyle}},[t("div",{class:K(),style:s},[this.renderBlocks()])])}};var bt=gt(ft);const yt=bt;var Q=yt;function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function R(t,e,i,s=1){const o=Math.round(e/s/t[0])*t[0],h=Math.round(i/s/t[1])*t[1];return[o,h]}function W(t,e,i){return t-e-i}function E(t,e,i){return t-e-i}function y(t,e,i){return e!==null&&t<e?e:i!==null&&i<t?i:t}function tt(t,e,i){let s=t;const o=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(h=>Z(s[h]));if(!Z(s[o]))return!1;do{if(s[o](e))return!0;if(s===i)return!1;s=s.parentNode}while(s);return!1}function xt(t){const e=window.getComputedStyle(t);return[parseFloat(e.getPropertyValue("width"),10),parseFloat(e.getPropertyValue("height"),10)]}function M(t,e,i){!t||(t.attachEvent?t.attachEvent("on"+e,i):t.addEventListener?t.addEventListener(e,i,!0):t["on"+e]=i)}function L(t,e,i){!t||(t.detachEvent?t.detachEvent("on"+e,i):t.removeEventListener?t.removeEventListener(e,i,!0):t["on"+e]=null)}var wt=function(){var t,e=this,i=e.$createElement,s=e._self._c||i;return s("div",{class:[(t={},t[e.classNameActive]=e.enabled,t[e.classNameDragging]=e.dragging,t[e.classNameResizing]=e.resizing,t[e.classNameDraggable]=e.draggable,t[e.classNameResizable]=e.resizable,t),e.className],style:e.style,on:{mousedown:e.elementMouseDown,touchstart:e.elementTouchDown,contextmenu:e.onContextMenu}},[e._l(e.actualHandles,function(o){return s("div",{key:o,class:[e.classNameHandle,e.classNameHandle+"-"+o],style:e.handleStyle(o),on:{mousedown:function(h){return h.stopPropagation(),h.preventDefault(),e.handleDown(o,h)},touchstart:function(h){return h.stopPropagation(),h.preventDefault(),e.handleTouchDown(o,h)}}},[e._t(o)],2)}),e._t("default")],2)},vt=[];const H={mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"},touch:{start:"touchstart",move:"touchmove",stop:"touchend"}},kt={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},Lt={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"};let z=H.mouse;const zt={replace:!0,name:"vue-draggable-resizable",props:{className:{type:String,default:"vdr"},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},lockAspectRatio:{type:Boolean,default:!1},w:{type:[Number,String],default:200,validator:t=>typeof t=="number"?t>0:t==="auto"},h:{type:[Number,String],default:200,validator:t=>typeof t=="number"?t>0:t==="auto"},minWidth:{type:Number,default:0,validator:t=>t>=0},minHeight:{type:Number,default:0,validator:t=>t>=0},maxWidth:{type:Number,default:null,validator:t=>t>=0},maxHeight:{type:Number,default:null,validator:t=>t>=0},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:t=>typeof t=="string"?t==="auto":t>=0},handles:{type:Array,default:()=>["tl","tm","tr","mr","br","bm","bl","ml"],validator:t=>{const e=new Set(["tl","tm","tr","mr","br","bm","bl","ml"]);return new Set(t.filter(i=>e.has(i))).size===t.length}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:t=>["x","y","both"].includes(t)},grid:{type:Array,default:()=>[1,1]},parent:{type:[Boolean,String],default:!1},onDragStart:{type:Function,default:()=>!0},onDrag:{type:Function,default:()=>!0},onResizeStart:{type:Function,default:()=>!0},onResize:{type:Function,default:()=>!0},isConflictCheck:{type:Boolean,default:!1},snap:{type:Boolean,default:!1},snapTolerance:{type:Number,default:5,validator(t){return typeof t=="number"}},scaleRatio:{type:Number,default:1,validator:t=>typeof t=="number"},handleInfo:{type:Object,default:()=>({size:8,offset:-5,switch:!0})}},data(){return{left:this.x,top:this.y,right:null,bottom:null,width:null,height:null,widthTouched:!1,heightTouched:!1,aspectFactor:null,parentWidth:null,parentHeight:null,minW:this.minWidth,minH:this.minHeight,maxW:this.maxWidth,maxH:this.maxHeight,handle:null,enabled:this.active,resizing:!1,dragging:!1,zIndex:this.z}},computed:{handleStyle(){return t=>{if(!this.handleInfo.switch)return{display:this.enabled?"block":"none"};const e=(this.handleInfo.size/this.scaleRatio).toFixed(2),i=(this.handleInfo.offset/this.scaleRatio).toFixed(2),s=(e/2).toFixed(2),o={tl:{top:`${i}px`,left:`${i}px`},tm:{top:`${i}px`,left:`calc(50% - ${s}px)`},tr:{top:`${i}px`,right:`${i}px`},mr:{top:`calc(50% - ${s}px)`,right:`${i}px`},br:{bottom:`${i}px`,right:`${i}px`},bm:{bottom:`${i}px`,right:`calc(50% - ${s}px)`},bl:{bottom:`${i}px`,left:`${i}px`},ml:{top:`calc(50% - ${s}px)`,left:`${i}px`}},h={width:`${e}px`,height:`${e}px`,top:o[t].top,left:o[t].left,right:o[t].right,bottom:o[t].bottom};return h.display=this.enabled?"block":"none",h}},style(){return A({transform:`translate(${this.left}px, ${this.top}px)`,width:this.computedWidth,height:this.computedHeight,zIndex:this.zIndex},this.dragging&&this.disableUserSelect?kt:Lt)},actualHandles(){return this.resizable?this.handles:[]},computedWidth(){return this.w==="auto"&&!this.widthTouched?"auto":this.width+"px"},computedHeight(){return this.h==="auto"&&!this.heightTouched?"auto":this.height+"px"},resizingOnX(){return Boolean(this.handle)&&(this.handle.includes("l")||this.handle.includes("r"))},resizingOnY(){return Boolean(this.handle)&&(this.handle.includes("t")||this.handle.includes("b"))},isCornerHandle(){return Boolean(this.handle)&&["tl","tr","br","bl"].includes(this.handle)}},watch:{active(t){this.enabled=t,t?this.$emit("activated"):this.$emit("deactivated")},z(t){(t>=0||t==="auto")&&(this.zIndex=t)},x(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveHorizontally(t))},y(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveVertically(t))},lockAspectRatio(t){t?this.aspectFactor=this.width/this.height:this.aspectFactor=void 0},minWidth(t){t>0&&t<=this.width&&(this.minW=t)},minHeight(t){t>0&&t<=this.height&&(this.minH=t)},maxWidth(t){this.maxW=t},maxHeight(t){this.maxH=t},w(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeWidth(t))},h(t){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeHeight(t))}},created(){this.maxWidth&&this.minWidth>this.maxWidth&&console.warn("[Vdr warn]: Invalid prop: minWidth cannot be greater than maxWidth"),this.maxWidth&&this.minHeight>this.maxHeight&&console.warn("[Vdr warn]: Invalid prop: minHeight cannot be greater than maxHeight"),this.resetBoundsAndMouseState()},mounted(){this.enableNativeDrag||(this.$el.ondragstart=()=>!1);const[t,e]=this.getParentSize();this.parentWidth=t,this.parentHeight=e;const[i,s]=xt(this.$el);this.aspectFactor=(this.w!=="auto"?this.w:i)/(this.h!=="auto"?this.h:s),this.width=this.w!=="auto"?this.w:i,this.height=this.h!=="auto"?this.h:s,this.right=this.parentWidth-this.width-this.left,this.bottom=this.parentHeight-this.height-this.top,this.settingAttribute();const o=this.$el.parentNode;M(o||document.documentElement,"mousedown",this.deselect),M(o||document.documentElement,"touchend touchcancel",this.deselect),M(window,"resize",this.checkParentSize)},beforeDestroy(){L(document.documentElement,"mousedown",this.deselect),L(document.documentElement,"touchstart",this.handleUp),L(document.documentElement,"mousemove",this.move),L(document.documentElement,"touchmove",this.move),L(document.documentElement,"mouseup",this.handleUp),L(document.documentElement,"touchend touchcancel",this.deselect),L(window,"resize",this.checkParentSize)},methods:{onContextMenu(t){this.$emit("contextmenu",t)},resetBoundsAndMouseState(){this.mouseClickPosition={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},this.bounds={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},checkParentSize(){if(this.parent){const[t,e]=this.getParentSize();this.right=t-this.width-this.left,this.bottom=e-this.height-this.top,this.parentWidth=t,this.parentHeight=e}},getParentSize(){if(this.parent===!0){const t=window.getComputedStyle(this.$el.parentNode,null);return[parseInt(t.getPropertyValue("width"),10),parseInt(t.getPropertyValue("height"),10)]}if(typeof this.parent=="string"){const t=document.querySelector(this.parent);if(!(t instanceof HTMLElement))throw new Error(`The selector ${this.parent} does not match any element`);return[t.offsetWidth,t.offsetHeight]}return[null,null]},elementTouchDown(t){z=H.touch,this.elementDown(t)},elementMouseDown(t){z=H.mouse,this.elementDown(t)},elementDown(t){if(t instanceof MouseEvent&&t.which!==1)return;const e=t.target||t.srcElement;if(this.$el.contains(e)){if(this.onDragStart(t)===!1)return;if(this.dragHandle&&!tt(e,this.dragHandle,this.$el)||this.dragCancel&&tt(e,this.dragCancel,this.$el)){this.dragging=!1;return}this.enabled||(this.enabled=!0,this.$emit("activated")),this.draggable&&(this.dragging=!0),this.mouseClickPosition.mouseX=t.touches?t.touches[0].pageX:t.pageX,this.mouseClickPosition.mouseY=t.touches?t.touches[0].pageY:t.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.mouseClickPosition.w=this.width,this.mouseClickPosition.h=this.height,this.parent&&(this.bounds=this.calcDragLimits()),M(document.documentElement,z.move,this.move),M(document.documentElement,z.stop,this.handleUp)}},calcDragLimits(){return{minLeft:this.left%this.grid[0],maxLeft:Math.floor((this.parentWidth-this.width-this.left)/this.grid[0])*this.grid[0]+this.left,minRight:this.right%this.grid[0],maxRight:Math.floor((this.parentWidth-this.width-this.right)/this.grid[0])*this.grid[0]+this.right,minTop:this.top%this.grid[1],maxTop:Math.floor((this.parentHeight-this.height-this.top)/this.grid[1])*this.grid[1]+this.top,minBottom:this.bottom%this.grid[1],maxBottom:Math.floor((this.parentHeight-this.height-this.bottom)/this.grid[1])*this.grid[1]+this.bottom}},deselect(t){const e=t.target||t.srcElement,i=new RegExp(this.className+"-([trmbl]{2})","");!this.$el.contains(e)&&!i.test(e.className)&&(this.enabled&&!this.preventDeactivation&&(this.enabled=!1,this.$emit("deactivated")),L(document.documentElement,z.move,this.handleResize)),this.resetBoundsAndMouseState()},handleTouchDown(t,e){z=H.touch,this.handleDown(t,e)},handleDown(t,e){e instanceof MouseEvent&&e.which!==1||this.onResizeStart(t,e)!==!1&&(e.stopPropagation&&e.stopPropagation(),this.lockAspectRatio&&!t.includes("m")?this.handle="m"+t.substring(1):this.handle=t,this.resizing=!0,this.mouseClickPosition.mouseX=e.touches?e.touches[0].pageX:e.pageX,this.mouseClickPosition.mouseY=e.touches?e.touches[0].pageY:e.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.mouseClickPosition.w=this.width,this.mouseClickPosition.h=this.height,this.bounds=this.calcResizeLimits(),M(document.documentElement,z.move,this.handleResize),M(document.documentElement,z.stop,this.handleUp))},calcResizeLimits(){let{minW:t}=this,{minH:e}=this,{maxW:i}=this,{maxH:s}=this;const{aspectFactor:o}=this,[h,l]=this.grid,{width:c}=this,{height:r}=this,{left:a}=this,{top:u}=this,{right:m}=this,{bottom:d}=this;this.lockAspectRatio&&(t/e>o?e=t/o:t=o*e,i&&s?(i=Math.min(i,o*s),s=Math.min(s,i/o)):i?s=i/o:s&&(i=o*s)),i-=i%h,s-=s%l;const n={minLeft:null,maxLeft:null,minTop:null,maxTop:null,minRight:null,maxRight:null,minBottom:null,maxBottom:null};return this.parent?(n.minLeft=a%h,n.maxLeft=a+Math.floor((c-t)/h)*h,n.minTop=u%l,n.maxTop=u+Math.floor((r-e)/l)*l,n.minRight=m%h,n.maxRight=m+Math.floor((c-t)/h)*h,n.minBottom=d%l,n.maxBottom=d+Math.floor((r-e)/l)*l,i&&(n.minLeft=Math.max(n.minLeft,this.parentWidth-m-i),n.minRight=Math.max(n.minRight,this.parentWidth-a-i)),s&&(n.minTop=Math.max(n.minTop,this.parentHeight-d-s),n.minBottom=Math.max(n.minBottom,this.parentHeight-u-s)),this.lockAspectRatio&&(n.minLeft=Math.max(n.minLeft,a-u*o),n.minTop=Math.max(n.minTop,u-a/o),n.minRight=Math.max(n.minRight,m-d*o),n.minBottom=Math.max(n.minBottom,d-m/o))):(n.minLeft=null,n.maxLeft=a+Math.floor((c-t)/h)*h,n.minTop=null,n.maxTop=u+Math.floor((r-e)/l)*l,n.minRight=null,n.maxRight=m+Math.floor((c-t)/h)*h,n.minBottom=null,n.maxBottom=d+Math.floor((r-e)/l)*l,i&&(n.minLeft=-(m+i),n.minRight=-(a+i)),s&&(n.minTop=-(d+s),n.minBottom=-(u+s)),this.lockAspectRatio&&i&&s&&(n.minLeft=Math.min(n.minLeft,-(m+i)),n.minTop=Math.min(n.minTop,-(s+d)),n.minRight=Math.min(n.minRight,-a-i),n.minBottom=Math.min(n.minBottom,-u-s))),n},move(t){this.resizing?this.handleResize(t):this.dragging&&this.handleDrag(t)},async handleDrag(t){const{axis:e}=this,{grid:i}=this,{bounds:s}=this,{mouseClickPosition:o}=this,h=e&&e!=="y"?o.mouseX-(t.touches?t.touches[0].pageX:t.pageX):0,l=e&&e!=="x"?o.mouseY-(t.touches?t.touches[0].pageY:t.pageY):0,[c,r]=R(i,h,l,this.scaleRatio),a=y(o.left-c,s.minLeft,s.maxLeft),u=y(o.top-r,s.minTop,s.maxTop);if(this.onDrag(a,u)===!1)return;const m=y(o.right+c,s.minRight,s.maxRight),d=y(o.bottom+r,s.minBottom,s.maxBottom);this.left=a,this.top=u,this.right=m,this.bottom=d,await this.snapCheck(),this.$emit("dragging",this.left,this.top)},moveHorizontally(t){const[e,i]=R(this.grid,t,this.top,this.scale),s=y(e,this.bounds.minLeft,this.bounds.maxLeft);this.left=s,this.right=this.parentWidth-this.width-s},moveVertically(t){const[e,i]=R(this.grid,this.left,t,this.scale),s=y(i,this.bounds.minTop,this.bounds.maxTop);this.top=s,this.bottom=this.parentHeight-this.height-s},handleResize(t){let{left:e}=this,{top:i}=this,{right:s}=this,{bottom:o}=this;const{mouseClickPosition:h}=this,{aspectFactor:l}=this,c=h.mouseX-(t.touches?t.touches[0].pageX:t.pageX),r=h.mouseY-(t.touches?t.touches[0].pageY:t.pageY);!this.widthTouched&&c&&(this.widthTouched=!0),!this.heightTouched&&r&&(this.heightTouched=!0);const[a,u]=R(this.grid,c,r,this.scaleRatio);this.handle.includes("b")?(o=y(h.bottom+u,this.bounds.minBottom,this.bounds.maxBottom),this.lockAspectRatio&&this.resizingOnY&&(s=this.right-(this.bottom-o)*l)):this.handle.includes("t")&&(i=y(h.top-u,this.bounds.minTop,this.bounds.maxTop),this.lockAspectRatio&&this.resizingOnY&&(e=this.left-(this.top-i)*l)),this.handle.includes("r")?(s=y(h.right+a,this.bounds.minRight,this.bounds.maxRight),this.lockAspectRatio&&this.resizingOnX&&(o=this.bottom-(this.right-s)/l)):this.handle.includes("l")&&(e=y(h.left-a,this.bounds.minLeft,this.bounds.maxLeft),this.lockAspectRatio&&this.resizingOnX&&(i=this.top-(this.left-e)/l));const m=W(this.parentWidth,e,s),d=E(this.parentHeight,i,o);this.onResize(this.handle,e,i,m,d)!==!1&&(this.left=e,this.top=i,this.right=s,this.bottom=o,this.width=m,this.height=d,this.$emit("resizing",this.left,this.top,this.width,this.height))},changeWidth(t){const[e,i]=R(this.grid,t,0,this.scale),s=y(this.parentWidth-e-this.left,this.bounds.minRight,this.bounds.maxRight);let{bottom:o}=this;this.lockAspectRatio&&(o=this.bottom-(this.right-s)/this.aspectFactor);const h=W(this.parentWidth,this.left,s),l=E(this.parentHeight,this.top,o);this.right=s,this.bottom=o,this.width=h,this.height=l},changeHeight(t){const[e,i]=R(this.grid,0,t,this.scale),s=y(this.parentHeight-i-this.top,this.bounds.minBottom,this.bounds.maxBottom);let{right:o}=this;this.lockAspectRatio&&(o=this.right-(this.bottom-s)*this.aspectFactor);const h=W(this.parentWidth,this.left,o),l=E(this.parentHeight,this.top,s);this.right=o,this.bottom=s,this.width=h,this.height=l},async handleUp(t){this.handle=null;const e=new Array(3).fill({display:!1,position:"",origin:"",lineLength:""}),i={vLine:[],hLine:[]};for(const s in i)i[s]=JSON.parse(JSON.stringify(e));this.resizing&&(this.resizing=!1,await this.conflictCheck(),this.$emit("refLineParams",i),this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,await this.conflictCheck(),this.$emit("refLineParams",i),this.$emit("dragstop",this.left,this.top)),this.resetBoundsAndMouseState(),L(document.documentElement,z.move,this.handleResize)},settingAttribute(){this.$el.setAttribute("data-is-check",`${this.isConflictCheck}`),this.$el.setAttribute("data-is-snap",`${this.snap}`)},conflictCheck(){const{top:t}=this,{left:e}=this,{width:i}=this,{height:s}=this;if(this.isConflictCheck){const o=this.$el.parentNode.childNodes;for(const h of o)if(h.className!==void 0&&!h.className.includes(this.classNameActive)&&h.getAttribute("data-is-check")!==null&&h.getAttribute("data-is-check")!=="false"){const l=h.offsetWidth,c=h.offsetHeight,[r,a]=this.formatTransformVal(h.style.transform),u=t>=a&&e>=r&&a+c>t&&r+l>e||t<=a&&e<r&&t+s>a&&e+i>r,m=e<=r&&t>=a&&e+i>r&&t<a+c||t<a&&e>r&&t+s>a&&e<r+l,d=t<=a&&e>=r&&t+s>a&&e<r+l||t>=a&&e<=r&&t<a+c&&e>r+l,n=t<=a&&e>=r&&t+s>a&&e<r+l||t>=a&&e<=r&&t<a+c&&e>r+l,p=e>=r&&t>=a&&e<r+l&&t<a+c||t>a&&e<=r&&e+i>r&&t<a+c,x=t<=a&&e>=r&&t+s>a&&e<r+l||t>=a&&e<=r&&t<a+c&&e+i>r;(u||m||d||n||p||x)&&(this.top=this.mouseClickPosition.top,this.left=this.mouseClickPosition.left,this.right=this.mouseClickPosition.right,this.bottom=this.mouseClickPosition.bottom,this.width=this.mouseClickPosition.w,this.height=this.mouseClickPosition.h,this.$emit("resizing",this.left,this.top,this.width,this.height))}}},async snapCheck(){let{width:t}=this,{height:e}=this;if(this.snap){let i=this.left,s=this.left+t,o=this.top,h=this.top+e;const l=new Array(3).fill({display:!1,position:"",origin:"",lineLength:""}),c={vLine:[],hLine:[]};for(const x in c)c[x]=JSON.parse(JSON.stringify(l));const r=this.$el.parentNode.childNodes,a={value:{x:[[],[],[]],y:[[],[],[]]},display:[],position:[]},{groupWidth:u,groupHeight:m,groupLeft:d,groupTop:n,bln:p}=await this.getActiveAll(r);p||(t=u,e=m,i=d,s=d+u,o=n,h=n+m);for(const x of r)if(x.className!==void 0&&!x.className.includes(this.classNameActive)&&x.getAttribute("data-is-snap")!==null&&x.getAttribute("data-is-snap")!=="false"){const T=x.offsetWidth,P=x.offsetHeight,[g,f]=this.formatTransformVal(x.style.transform),w=g+T,v=f+P,N=Math.abs(o+e/2-(f+P/2))<=this.snapTolerance,$=Math.abs(i+t/2-(g+T/2))<=this.snapTolerance,I=Math.abs(f-h)<=this.snapTolerance,F=Math.abs(v-h)<=this.snapTolerance,_=Math.abs(f-o)<=this.snapTolerance,X=Math.abs(v-o)<=this.snapTolerance,Y=Math.abs(g-s)<=this.snapTolerance,O=Math.abs(w-s)<=this.snapTolerance,V=Math.abs(g-i)<=this.snapTolerance,j=Math.abs(w-i)<=this.snapTolerance;a.display=[I,F,_,X,N,N,Y,O,V,j,$,$],a.position=[f,v,f,v,f+P/2,f+P/2,g,w,g,w,g+T/2,g+T/2],I&&(p&&(this.top=Math.max(f-e,this.bounds.minTop),this.bottom=this.parentHeight-this.top-e),a.value.y[0].push(g,w,i,s)),_&&(p&&(this.top=f,this.bottom=this.parentHeight-this.top-e),a.value.y[0].push(g,w,i,s)),F&&(p&&(this.top=Math.max(v-e,this.bounds.minTop),this.bottom=this.parentHeight-this.top-e),a.value.y[1].push(g,w,i,s)),X&&(p&&(this.top=v,this.bottom=this.parentHeight-this.top-e),a.value.y[1].push(g,w,i,s)),Y&&(p&&(this.left=Math.max(g-t,this.bounds.minLeft),this.right=this.parentWidth-this.left-t),a.value.x[0].push(f,v,o,h)),V&&(p&&(this.left=g,this.right=this.parentWidth-this.left-t),a.value.x[0].push(f,v,o,h)),O&&(p&&(this.left=Math.max(w-t,this.bounds.minLeft),this.right=this.parentWidth-this.left-t),a.value.x[1].push(f,v,o,h)),j&&(p&&(this.left=w,this.right=this.parentWidth-this.left-t),a.value.x[1].push(f,v,o,h)),N&&(p&&(this.top=Math.max(f+P/2-e/2,this.bounds.minTop),this.bottom=this.parentHeight-this.top-e),a.value.y[2].push(g,w,i,s)),$&&(p&&(this.left=Math.max(g+T/2-t/2,this.bounds.minLeft),this.right=this.parentWidth-this.left-t),a.value.x[2].push(f,v,o,h));const S=[0,1,0,1,2,2,0,1,0,1,2,2];for(let b=0;b<=S.length;b++){const st=b<6?"y":"x",B=b<6?"hLine":"vLine";if(a.display[b]){const{origin:ot,length:nt}=this.calcLineValues(a.value[st][S[b]]);c[B][S[b]].display=a.display[b],c[B][S[b]].position=a.position[b]+"px",c[B][S[b]].origin=ot,c[B][S[b]].lineLength=nt}}}this.$emit("refLineParams",c)}},calcLineValues(t){const e=Math.max(...t)-Math.min(...t)+"px",i=Math.min(...t)+"px";return{length:e,origin:i}},async getActiveAll(t){const e=[],i=[],s=[];let o=0,h=0,l=0,c=0;for(const u of t)u.className!==void 0&&u.className.includes(this.classNameActive)&&e.push(u);const r=e.length;if(r>1){for(const u of e){const m=u.offsetLeft,d=m+u.offsetWidth,n=u.offsetTop,p=n+u.offsetHeight;i.push(n,p),s.push(m,d)}o=Math.max(...s)-Math.min(...s),h=Math.max(...i)-Math.min(...i),l=Math.min(...s),c=Math.min(...i)}return{groupWidth:o,groupHeight:h,groupLeft:l,groupTop:c,bln:r===1}},formatTransformVal(t){let[e,i]=t.replace(/[^0-9\-,]/g,"").split(",");return i===void 0&&(i=0),[+e,+i]}}},et={};var Mt=ct(zt,wt,vt,!1,St,null,null,null);function St(t){for(let e in et)this[e]=et[e]}var it=function(){return Mt.exports}();const D="ljm-free-layout-editor",k=mt(D);var Ct={name:`${D}-contextmenu`,props:{isTop:{type:Boolean,default:!1},isBottom:{type:Boolean,default:!1},left:{type:Number,default:0},top:{type:Number,default:0}},data(){return{items:[{key:"up",text:"\u4E0A\u79FB",icon:"arrow-up"},{key:"down",text:"\u4E0B\u79FB",icon:"arrow-down"},{key:"top",text:"\u7F6E\u9876",icon:"vertical-align-top"},{key:"bottom",text:"\u7F6E\u5E95",icon:"vertical-align-bottom"},{key:"divider"},{key:"copy",text:"\u590D\u5236",icon:"copy"},{key:"delete",text:"\u5220\u9664",icon:"delete"}]}},computed:{visibleItems(){const{isTop:t,isBottom:e,items:i}=this;return t?i.filter(s=>!["up","top"].includes(s.key)):e?i.filter(s=>!["down","bottom"].includes(s.key)):i}},methods:{onClick({key:t}){this.$emit("clickMenu",t)}},render(){const t=arguments[0],{visibleItems:e}=this;return t("a-dropdown",{attrs:{trigger:["contextmenu"]}},[this.$slots.default,t("a-menu",{slot:"overlay",on:{click:this.onClick}},[e.map((i,s)=>i.key==="divider"?t("a-menu-divider",{key:s}):t("a-menu-item",{key:i.key},[t("a-icon",{attrs:{type:i.icon}}),i.text]))])])}},Rt={props:{showGrid:{type:Boolean,default:!0},showRefLines:{type:Boolean,default:!0},snap:{type:Boolean,default:!0}},data(){return{items:[{key:"showGrid",name:"\u7F51\u683C",actived:!0},{key:"showRefLines",name:"\u8F85\u52A9\u7EBF",actived:!0},{key:"snap",name:"\u5438\u9644",actived:!0}]}},methods:{onClick(t){return()=>this.$emit("toggle",t)},isActived(t){return!!(t==="showGrid"&&this.showGrid||t==="showRefLines"&&this.showRefLines||t==="snap"&&this.snap)}},render(){const t=arguments[0],{items:e}=this;return t("div",{class:k("tools")},[e.map(i=>t("div",{key:i.key,class:[k("tools-item"),this.isActived(i.key)&&k("tools-item",["active"])],on:{click:this.onClick(i.key)}},[i.name]))])}};const Tt=()=>{};var Pt={name:D,props:{moduleProps:{type:Object,default:()=>({blocks:[],height:300,bgColor:"rgba(210,224,67,.5)"})}},data(){return{vLine:[],hLine:[],snap:!0,showRefLines:!0,showGrid:!0,activedIndex:null}},computed:{isTop(){const t=this.moduleProps.blocks.length;return this.activedIndex===t-1},isBottom(){return this.activedIndex===0}},methods:{getBlockStyle(t){const{x:e,y:i,width:s,height:o,bgColor:h,bgImg:l,radius:c}=t,r={left:e,top:i,width:s,height:o,backgroundColor:h,borderRadius:c};return l&&(r.backgroundImage=`url(${l})`),r},addBlock(){this.moduleProps.blocks.push(new C({x:8}))},getRefLineParams(t){const{vLine:e,hLine:i}=t;this.vLine=e,this.hLine=i},onParentResizeStop(t,e,i,s){this.moduleProps.height=s,window.dispatchEvent(new Event("resize"))},onResizeStop(t){return(e,i,s,o)=>{const{blocks:h}=this.moduleProps,l=h.slice();l[t].width=s,l[t].height=o,this.moduleProps.blocks=l}},onDragStop(t){return(e,i)=>{const{blocks:s}=this.moduleProps,o=s.slice();o[t].x=e,o[t].y=i,this.moduleProps.blocks=o}},onClickMenu(t){const e=this.activedIndex;if(e===null)return;const i=this.moduleProps.blocks.slice(),s=i[e];t==="top"&&(i.shift(),i.push(s),this.activedIndex=i.length-1),t==="bottom"&&(i.pop(),i.unshift(s),this.activedIndex=0),t==="up"&&(i[e]=i[e+1],i[e+1]=s,this.activedIndex=e+1),t==="down"&&(i[e]=i[e-1],i[e-1]=s,this.activedIndex=e-1),t==="copy"&&(i.push(s.clone()),this.activedIndex=i.length-1),t==="delete"&&(i.splice(e,1),this.activedIndex=i.length>0?e-1:null),this.moduleProps.blocks=i,window.dispatchEvent(new Event("resize"))},onActivated(t){return()=>{this.activedIndex=t}},onToolsToggle(t){this[t]=!this[t]},onChangeHeight(t){this.moduleProps.height=t,window.dispatchEvent(new Event("resize"))}},render(){const t=arguments[0],{vLine:e,hLine:i,showGrid:s,showRefLines:o,snap:h,isTop:l,isBottom:c,activedIndex:r}=this,{blocks:a,height:u,bgColor:m}=this.moduleProps,d=a[r];return t("div",[t(Rt,{attrs:{showGrid:s,showRefLines:o,snap:h},on:{toggle:this.onToolsToggle}}),t("div",{style:{height:u,marginBottom:"10px"}},[t(it,{class:[k(),!s&&[k(["nogrid"])]],attrs:{preventDeactivation:!0,handles:["bm"],classNameHandle:k("handle"),draggable:!1,w:375,h:u},on:{resizestop:this.onParentResizeStop}},[a.map((n,p)=>t(it,{attrs:{w:n.width,h:n.height,x:n.x,parent:!0,zIndex:p,classNameHandle:k("handle"),classNameActive:k("active"),snap:h,active:r===p,grid:s?[2,2]:[1,1]},key:n.id,on:{activated:this.onActivated(p),resizing:this.onResizeStop(p),dragging:this.onDragStop(p),refLineParams:o?this.getRefLineParams:Tt}},[t(Ct,{attrs:{isTop:l,isBottom:c},on:{clickMenu:this.onClickMenu}},[t("div",{class:k("content"),style:this.getBlockStyle(n)})]),t("div",{class:k("size")},[t("div",{class:k("size-text")},[n.width,"x",n.height])])])),e.map((n,p)=>t("span",{class:"ref-line v-line",style:{left:n.position,top:n.origin,height:n.lineLength,opacity:n.display?1:0}})),i.map((n,p)=>t("span",{class:"ref-line h-line",style:{top:n.position,left:n.origin,width:n.lineLength,opacity:n.display?1:0}}))])]),t("a-form",{attrs:{labelCol:{span:4},wrapperCol:{span:20}}},[t("h3",["\u5BB9\u5668\u6837\u5F0F"]),t("a-form-item",{attrs:{label:"\u80CC\u666F\u8272"}},[t("ext-color-picker",{attrs:{value:m},on:{change:n=>{console.log(n),this.moduleProps.bgColor=n}}})]),t("a-form-item",{attrs:{label:"\u80CC\u666F\u56FE"}},[t("ext-file-upload")]),t("a-form-item",{attrs:{label:"\u9AD8\u5EA6"}},[t("a-input-number",{attrs:{value:u},on:{change:this.onChangeHeight}})]),!!d&&t("div",[t("h3",["\u5143\u7D20\u6837\u5F0F"]),t("a-form-item",{attrs:{label:"\u80CC\u666F\u8272"}},[t("ext-color-picker",{attrs:{value:d.bgColor}})]),t("a-form-item",{attrs:{label:"\u80CC\u666F\u56FE"}},[t("ext-file-upload")]),t("a-form-item",{attrs:{label:"\u5185\u5BB9"}},[t("ext-quill",{attrs:{value:d.html}})]),t("a-form-item",{attrs:{label:"\u5706\u89D2"}},[t("a-input-number",{attrs:{size:"small",min:0,value:d.radius}})]),t("a-form-item",{attrs:{label:"\u94FE\u63A5"}},[t("a-input",{attrs:{size:"small",placeholder:"\u8BF7\u8F93\u5165",value:d.href}})]),t("a-form-item",{attrs:{label:"\u5185\u8FB9\u8DDD"}},[t("ext-margin-input",{attrs:{value:d.padding}})]),t("a-form-item",{attrs:{label:"\u6807\u8BC6"}},[t("a-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165",value:d.type}})])])])])}};const{defaultProps:Bt,editProps:Ht,wrapEditProps:Nt,hasCustomEditor:$t}=pt(Q);var It={data(){return{moduleProps:Bt}},render(){const t=arguments[0];return t("div",[t("demo-layout",{attrs:{editProps:Ht,wrapEditProps:Nt,defaultProps:this.moduleProps},scopedSlots:{left:e=>t(Q,J([{},{props:A({},e)}])),right:e=>$t?t(Pt,J([{},{props:{moduleProps:e}}])):null}})])}};export{It as default};
