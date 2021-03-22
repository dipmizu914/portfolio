(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);A&&A(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},o={app:0},r=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c22fcc63"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"1eb01038"}[t]+".css",o=l.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var A=document.createElement("link");A.rel="stylesheet",A.type="text/css",A.onload=e,A.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],A.parentNode.removeChild(A),a(r)},A.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(A)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(A);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",h.name="ChunkLoadError",h.type=n,h.request=i,a[1](h)}o[t]=void 0}};var A=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/portfolio/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var A=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header",{attrs:{views:t.views,snss:t.snss}}),a("v-content",[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view",[a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.views,(function(t){return a("v-tab-item",{key:t})})),1)],1)],1)],1),a("v-footer",{attrs:{app:"",dark:"",color:"primary"}},[a("v-flex",{attrs:{"text-center":""}},[a("h4",{staticClass:"font-weight-light"},[t._v("© 2020 - Kentaro Fukamizu")])])],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","elevate-on-scroll":""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":"",glow:"false"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("v-tabs-slider"),t._l(t.views,(function(e){return n("v-tab",{key:e.title,attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")])}))],2)]},proxy:!0}])},[n("v-toolbar-title",[n("v-avatar",{staticClass:"mr-2"},[n("v-img",{attrs:{src:a("87c7")}})],1),t._v(" Kentaro Fukamizu's portfolio ")],1),n("v-spacer"),t._l(t.snss,(function(t){return n("v-btn",{key:t.title,attrs:{icon:"",href:t.path,target:"_blank",rel:"noopener noreferrer"}},[n("font-awesome-icon",{attrs:{icon:["fab",t.icon],size:"2x"}})],1)}))],2)},s=[],l={props:{views:Array,snss:Array},data:function(){return{active:"tabA",position:{tabA:null,tabB:null}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.position[this.active]=window.scrollY}},watch:{active:function(){var t=this.position[this.active]||0;setTimeout((function(){window.scroll(0,t)}),200)}}},c=l,u=a("2877"),h=a("6544"),A=a.n(h),f=a("40dc"),p=a("8212"),d=a("8336"),v=a("adda"),g=a("2fa4"),m=a("71a3"),b=a("fe57"),w=a("9a96"),y=a("2a7f"),C=Object(u["a"])(c,r,s,!1,null,null,null),k=C.exports;A()(C,{VAppBar:f["a"],VAvatar:p["a"],VBtn:d["a"],VImg:v["a"],VSpacer:g["a"],VTab:m["a"],VTabs:b["a"],VTabsSlider:w["a"],VToolbarTitle:y["a"]});var B={name:"App",components:{Header:k},data:function(){return{views:[{title:"About",icon:"dashboard",path:"/",external:!1},{title:"Works",icon:"account_circle",path:"/works",external:!1}],snss:[{title:"facebook",icon:"facebook",path:"https://www.facebook.com/kentaro.fukamizu.96"},{title:"linkedin",icon:"linkedin",path:"https://www.linkedin.com/in/健太郎-深水-221a5a186"},{title:"github",icon:"github",path:"https://github.com/dipmizu914"}]}}},R=B,x=a("7496"),M=a("a75b"),O=a("0789"),G=a("0e8f"),D=a("553a"),U=a("c671"),S=a("aac8"),V=Object(u["a"])(R,i,o,!1,null,null,null),E=V.exports;A()(V,{VApp:x["a"],VContent:M["a"],VFadeTransition:O["a"],VFlex:G["a"],VFooter:D["a"],VTabItem:U["a"],VTabsItems:S["a"]});a("d3b7");var j=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-carousel",{attrs:{cycle:"",interval:"3000",height:"500","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.items,(function(e,n){return a("v-carousel-item",{key:n,attrs:{src:e.src,eager:"",gradient:"to bottom, rgba(20,20,20,0.8),rgba(200,200,200,.0), rgba(20,20,20,0.8)"}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":"","fill-height":""}},[a("h1",{staticClass:"display-3 font-weight-thin mb-3 white--text"},[t._v(" Computer Vision × CG ")]),a("h4",{staticClass:"font-weight-light white--text"},[t._v(" Break the boundary between virtual and real ")])])],1)})),1),a("v-container",{staticClass:"mt-5"},[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Profile")]),a("v-container",[a("p",{staticClass:"font-weight-light"},[t._v(" Kentaro Fukamizu is belonging to Graduate School of Information Science and Technology, The University of Tokyo. "),a("br"),t._v("He likes CG and computer vision. "),a("br"),t._v("If you want to contact him, you can send me an e-mail to "),a("code",[t._v("dipmizu(at)gmail.com")])])])],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Skills")]),a("v-container",[a("v-layout",{attrs:{column:""}},[a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("C++")]),a("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v(" Vulkan, OpenGL, CUDA, GLSL, OpenCV ")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Unity C#")]),a("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v(" ARFoundation, VR ")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Python")]),a("div",{staticClass:"subtitle-2 ml-5 font-weight-light"},[t._v("Keras")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Maya, Blender")])]),a("v-layout",{staticClass:"title font-weight-light",attrs:{row:"","align-baseline":""}},[a("div",{staticClass:"title mx-3 font-weight-light"},[t._v("Vue.js")])])],1)],1)],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Education")]),a("v-container",[a("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2020 - Current")]),a("p",{staticClass:"font-weight-light"},[t._v(" The University of Tokyo. "),a("br"),t._v("MS, Graduate School of Information Science and Technology ( "),a("a",{attrs:{href:"https://hapislab.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shinoda & Makino Lab.")]),t._v(") "),a("br"),t._v("※Transferred due to the retirement of the previous supervisor. ")]),a("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2019 - Mar. 2020")]),a("p",{staticClass:"font-weight-light"},[t._v(" The University of Tokyo. "),a("br"),t._v("MS, Graduate School of Information Science and Technology ( "),a("a",{attrs:{href:"http://ishikawa-vision.org/index-j.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ishikawa Senoo Lab.")]),t._v(") ")]),a("v-layout",{attrs:{"align-left":""}},[t._v("Apr. 2015 - Mar. 2019")]),a("p",{staticClass:"font-weight-light"},[t._v(" The University of Tokyo. "),a("br"),t._v("BS, Mathematical Engineering and Information Physics ")])],1)],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Internship")]),a("v-container",[a("v-layout",{attrs:{"align-left":""}},[t._v("Feb. 2019 - Oct. 2019")]),a("p",{staticClass:"font-weight-light"},[a("a",{attrs:{href:"https://pretiaar.com/corporate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pretia Technologies, Inc.")]),a("br"),t._v("Unity AR Engineer ")]),a("v-layout",{attrs:{"align-left":""}},[t._v("Aug. 2020 - Sep. 2020")]),a("p",{staticClass:"font-weight-light"},[a("a",{attrs:{href:"https://preferred.jp/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Preferred Networks")]),a("br"),t._v("Research Internship ")])],1)],1),a("v-container",[a("h2",{staticClass:"display-1 font-weight-medium"},[t._v("Publication")]),a("v-container",[a("v-layout",{staticClass:"headline font-weight-medium",attrs:{"align-left":""}},[t._v(" International conf.")]),a("v-container",{staticClass:"title font-weight-medium"},[t._v(" Oral "),a("p",{staticClass:"subtitle-1 font-weight-light mt-2 mb-auto"},[a("b",{staticClass:"font-weight-bold"},[t._v("Kentaro Fukamizu")]),t._v(", Leo Miyashita, Masatoshi Ishikawa: ElaMorph Projection: Deformation of 3D Shape by Dynamic Projection Mapping, International Symposium on Mixed and Augmented Reality (ISMAR2020), Recife, Brazil (Virtual conference), 9-13 Nov. (2020) ")])])],1),a("v-container",[a("v-layout",{staticClass:"headline font-weight-medium",attrs:{"align-left":""}},[t._v("Domestic conf.")]),a("v-container",{staticClass:"title font-weight-medium"},[t._v(" Poster "),a("p",{staticClass:"subtitle-1 font-weight-light mt-2 mb-auto"},[a("b",{staticClass:"font-weight-bold"},[t._v("深水健太郎")]),t._v(", 宮下令央, 石川正俊: ダイナミックプロジェクションマッピングを用いた動物体への視点依存映像の投影, インタラクション2020 (東京, 2020.3.9)／予稿集, 1P-70 "),a("b",{staticClass:"yellow--text"},[t._v("★")]),a("b",{staticClass:"font-weight-bold"},[t._v("インタラクティブ発表賞(PC推薦)")])]),a("p",{staticClass:"subtitle-1 font-weight-light"},[a("b",{staticClass:"font-weight-bold"},[t._v("Kentaro Fukamizu")]),t._v(", Ryuichi Sakamoto, Masaaki Kondo: Generation of High resolution 3D model from natural language by Generative Adversarial Network, MIRU2019 (Osaka, 2019.7) ")])])],1)],1)],1)},P=[],T={components:{},data:function(){return{items:[{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3 white--text",src:a("86a7")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3   white--text",src:a("ea52")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3  white--text",src:a("e3c0")},{text:"Computer Vision × CG",style:"display-3 font-weight-thin mb-3 white--text",src:a("96ee"),prg:"dd"}]}}},Y=T,F=a("5e66"),_=a("3e35"),L=a("a523"),N=a("a722"),Q=Object(u["a"])(Y,I,P,!1,null,null,null),W=Q.exports;A()(Q,{VCarousel:F["a"],VCarouselItem:_["a"],VContainer:L["a"],VLayout:N["a"]}),n["a"].use(j["a"]);var z=new j["a"]({routes:[{path:"/",name:"About",component:W},{path:"/works",name:"Works",component:function(){return a.e("about").then(a.bind(null,"1822"))}},{path:"/Vtuber",name:"Vtuber",component:function(){return a.e("about").then(a.bind(null,"aa4b"))}},{path:"/PathEngine",name:"PathEngine",component:function(){return a.e("about").then(a.bind(null,"a340"))}},{path:"/ARcity",name:"ARcity",component:function(){return a.e("about").then(a.bind(null,"f616"))}},{path:"/ARmodeling",name:"ARmodeling",component:function(){return a.e("about").then(a.bind(null,"c05f"))}},{path:"/ARsakura",name:"ARsakura",component:function(){return a.e("about").then(a.bind(null,"560c"))}}]}),X=a("f309"),K=a("fcf4"),H=a("ecee"),q=a("ad3d"),J=a("f2d1");n["a"].component("font-awesome-icon",q["a"]),H["c"].add(J["b"]),H["c"].add(J["a"]),H["c"].add(J["c"]),n["a"].use(X["a"]);var Z=new X["a"]({theme:{primary:K["a"].indigo.base,secondary:K["a"].purple.base,accent:K["a"].cyan.base,error:K["a"].red.base,warning:K["a"].orange.base,info:K["a"].lightBlue.base,success:K["a"].green.base},icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({router:z,vuetify:Z,render:function(t){return t(E)}}).$mount("#app")},"86a7":function(t,e,a){t.exports=a.p+"img/path.8841c9db.jpg"},"87c7":function(t,e){t.exports="data:image/png;base64,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"},"96ee":function(t,e,a){t.exports=a.p+"img/modeling.7e62b9ba.png"},e3c0:function(t,e,a){t.exports=a.p+"img/ARcity.3f9795ac.png"},ea52:function(t,e,a){t.exports=a.p+"img/vtuber.806a1c33.jpg"}});
//# sourceMappingURL=app.5e0ae31c.js.map