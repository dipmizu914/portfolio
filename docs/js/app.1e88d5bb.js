(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},o={app:0},r=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0ced1caf"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"e774de17"}[t]+".css",o=l.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],f.parentNode.removeChild(f),a(r)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",h.name="ChunkLoadError",h.type=n,h.request=i,a[1](h)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/portfolio/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header",{attrs:{views:t.views,snss:t.snss}}),a("v-content",[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view",[a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.views,(function(t){return a("v-tab-item",{key:t})})),1)],1)],1)],1),a("v-footer",{attrs:{app:"",dark:"",absolute:"",color:"primary"}},[a("v-flex",{attrs:{"text-center":""}},[a("h4",{staticClass:"font-weight-light"},[t._v("© 2020 - Kentaro Fukamizu")])])],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","elevate-on-scroll":""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":"",glow:"false"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider"),t._l(t.views,(function(e){return n("v-tab",{key:e.title,attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")])}))],2)]},proxy:!0}])},[n("v-toolbar-title",[n("v-avatar",{staticClass:"mr-2"},[n("img",{attrs:{src:a("915e")}})]),t._v(" Kentaro Fukamizu's portfolio ")],1),n("v-spacer"),t._l(t.snss,(function(e){return n("v-btn",{key:e.title,attrs:{icon:"",href:e.path,target:"_blank",rel:"noopener noreferrer"}},[n("v-icon",[t._v(t._s(e.icon)+" ")])],1)}))],2)},s=[],l={props:{views:Array,snss:Array}},c=l,u=a("2877"),h=a("6544"),f=a.n(h),p=a("40dc"),v=a("8212"),g=a("8336"),d=a("132d"),m=a("2fa4"),b=a("71a3"),y=a("fe57"),w=a("9a96"),_=a("2a7f"),C=Object(u["a"])(c,r,s,!1,null,null,null),k=C.exports;f()(C,{VAppBar:p["a"],VAvatar:v["a"],VBtn:g["a"],VIcon:d["a"],VSpacer:m["a"],VTab:b["a"],VTabs:y["a"],VTabsSlider:w["a"],VToolbarTitle:_["a"]});var x={name:"App",components:{Header:k},data:function(){return{views:[{title:"About",icon:"dashboard",path:"/",external:!1},{title:"Works",icon:"account_circle",path:"/works",external:!1}],snss:[{title:"twitter",icon:"fab fa-twitter",path:"https://twitter.com/dipukamin"},{title:"facebook",icon:"fab fa-facebook",path:"https://www.facebook.com/kentaro.fukamizu.96"},{title:"linkedin",icon:"fab fa-linkedin-in",path:"https://www.linkedin.com/in/健太郎-深水-221a5a186"},{title:"github",icon:"fab fa-github",path:"https://github.com/dipmizu914"}]}}},V=x,T=a("7496"),A=a("a75b"),S=a("0789"),j=a("0e8f"),P=a("553a"),O=a("c671"),E=a("aac8"),I=Object(u["a"])(V,i,o,!1,null,null,null),M=I.exports;f()(I,{VApp:T["a"],VContent:A["a"],VFadeTransition:S["a"],VFlex:j["a"],VFooter:P["a"],VTabItem:O["a"],VTabsItems:E["a"]});a("d3b7");var G=a("8c4f"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-carousel",{attrs:{cycle:"",height:"500","hide-delimiter-background":"","show-arrows-on-hover":"",interval:"3"}},t._l(t.items,(function(e,n){return a("v-carousel-item",{key:n,attrs:{src:e.src,gradient:"to bottom, rgba(20,20,20,0.8),rgba(200,200,200,.0), rgba(20,20,20,0.8)"}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":""}},[a("h1",{staticClass:"display-3 font-weight-thin mb-3 white--text"},[t._v("Computer Vision × CG")]),a("h4",{staticClass:"font-weight-light white--text"},[t._v("Break the boundary between virtual and real")])])],1)})),1),a("v-container",{staticClass:"mt-5"},[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Profile")]),a("v-container",[a("p",{staticClass:"font-weight-light"},[t._v("Kentaro Fukamizu is belonging to Graduate School of Information Science and Technology, The University of Tokyo."),a("br"),t._v(" He likes CG and computer vision."),a("br"),t._v(" If you want to contact him, you can use DM on twitter or send me an e-mail to "),a("code",[t._v("dipmizu(at)gmail.com")])])])],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Skills")]),a("v-container",[a("v-layout",{attrs:{column:""}},[a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("C++ ")]),a("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v("Vulkan, OpenGL, CUDA, GLSL, OpenCV")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Unity C# ")]),a("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v("ARFoundation, VR")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Python ")]),a("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v("Keras")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Maya, Blender ")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Vue.js")])])],1)],1)],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Education")]),a("v-container",[a("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2020 - Current")]),a("p",{staticClass:"font-weight-light"},[t._v("The University of Tokyo."),a("br"),t._v(" MS, Graduate School of Information Science and Technology ("),a("a",{attrs:{href:"https://hapislab.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shinoda & Makino Lab.")]),t._v(")"),a("br"),t._v(" ※Transferred due to the retirement of the previous supervisor. ")]),a("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2019 - Mar. 2020")]),a("p",{staticClass:"font-weight-light"},[t._v("The University of Tokyo."),a("br"),t._v(" MS, Graduate School of Information Science and Technology ("),a("a",{attrs:{href:"http://ishikawa-vision.org/index-j.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ishikawa Senoo Lab.")]),t._v(") ")]),a("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2015 - Mar. 2019")]),a("p",{staticClass:"font-weight-light"},[t._v("The University of Tokyo."),a("br"),t._v(" BS, Mathematical Engineering and Information Physics ")])],1)],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Internship")]),a("v-container",[a("v-layout",{attrs:{"align-left":""}},[t._v("Feb. 2019 - Oct. 2019")]),a("p",{staticClass:"font-weight-light"},[a("a",{attrs:{href:"https://pretiaar.com/corporate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pretia Technologies, Inc.")]),a("br"),t._v(" Unity AR Engineer ")])],1)],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Publication")]),a("v-container",[a("v-layout",{staticClass:"headline font-weight-medium",attrs:{"align-left":""}},[t._v("Domestic conf.")]),a("v-container",{staticClass:"title font-weight-medium"},[t._v("Poster "),a("p",{staticClass:"subtitle-1 font-weight-light mt-2 mb-auto"},[a("b",{staticClass:"font-weight-bold"},[t._v("深水健太郎")]),t._v(", 宮下令央, 石川正俊: ダイナミックプロジェクションマッピングを用いた動物体への視点依存映像の投影, インタラクション2020 (東京, 2020.3.9)／予稿集, 1P-70 "),a("b",{staticClass:"yellow--text"},[t._v("★")]),a("b",{staticClass:"font-weight-bold"},[t._v("インタラクティブ発表賞(PC推薦)")])]),a("p",{staticClass:"subtitle-1 font-weight-light"},[a("b",{staticClass:"font-weight-bold"},[t._v("Kentaro Fukamizu")]),t._v(", Ryuichi Sakamoto, Masaaki Kondo: Generation of High resolution 3D model from natural language by Generative Adversarial Network, MIRU2019 (Osaka, 2019.7) ")])])],1)],1)],1)},L=[],F={components:{},data:function(){return{items:[{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3 white--text",src:a("86a7")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3   white--text",src:a("ea52")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3  white--text",src:a("e3c0")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3 white--text",src:a("96ee"),prg:"dd"}]}}},B=F,U=a("5e66"),z=a("3e35"),K=a("a523"),D=a("a722"),N=Object(u["a"])(B,R,L,!1,null,null,null),H=N.exports;f()(N,{VCarousel:U["a"],VCarouselItem:z["a"],VContainer:K["a"],VLayout:D["a"]}),n["a"].use(G["a"]);var $=[{path:"/",name:"About",component:H},{path:"/works",name:"Works",component:function(){return a.e("about").then(a.bind(null,"1822"))}},{path:"/Vtuber",name:"Vtuber",component:function(){return a.e("about").then(a.bind(null,"aa4b"))}},{path:"/PathEngine",name:"PathEngine",component:function(){return a.e("about").then(a.bind(null,"a340"))}},{path:"/ARcity",name:"ARcity",component:function(){return a.e("about").then(a.bind(null,"f616"))}},{path:"/ARmodeling",name:"ARmodeling",component:function(){return a.e("about").then(a.bind(null,"c05f"))}},{path:"/ARsakura",name:"ARsakura",component:function(){return a.e("about").then(a.bind(null,"560c"))}}],q=new G["a"]({mode:"history",base:"/portfolio/",routes:$}),J=q,W=a("f309"),Q=a("fcf4");a("15f5");n["a"].use(W["a"]);var X=new W["a"]({iconfont:"md",theme:{primary:Q["a"].indigo.base,secondary:Q["a"].purple.base,accent:Q["a"].cyan.base,error:Q["a"].red.base,warning:Q["a"].orange.base,info:Q["a"].lightBlue.base,success:Q["a"].green.base}});n["a"].config.productionTip=!1,new n["a"]({router:J,vuetify:X,render:function(t){return t(M)}}).$mount("#app")},"86a7":function(t,e,a){t.exports=a.p+"img/path.8841c9db.jpg"},"915e":function(t,e,a){t.exports=a.p+"img/avatar.705be55d.jpg"},"96ee":function(t,e,a){t.exports=a.p+"img/modeling.7e62b9ba.png"},e3c0:function(t,e,a){t.exports=a.p+"img/ARcity.3f9795ac.png"},ea52:function(t,e,a){t.exports=a.p+"img/vtuber.806a1c33.jpg"}});
//# sourceMappingURL=app.1e88d5bb.js.map