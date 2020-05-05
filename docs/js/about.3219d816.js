(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1822:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[e._l(e.items_int,(function(t){return a("v-flex",{key:t.title,attrs:{xs12:"",sm6:"",md3:""}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return a("v-card",{attrs:{tile:"",to:t.link}},[a("v-img",{attrs:{src:i("47e3")("./"+t.image),"aspect-ratio":"1.0"}},[a("div",{staticClass:"fill-height",class:o?"bottom-gradient":"none"},[o?a("v-card-title",{staticClass:"white--text headline font-weight-light"},[e._v(e._s(t.title))]):e._e(),o?a("v-card-text",{staticClass:"white--text caption font-weight-light"},[e._v(e._s(t.desc))]):e._e()],1)])],1)}}],null,!0)})],1)})),e._l(e.items_ext,(function(t){return a("v-flex",{key:t.title,attrs:{xs12:"",sm6:"",md3:""}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return a("v-card",{attrs:{tile:"",href:t.link,target:"_blank",rel:"noopener noreferrer"}},[a("v-img",{attrs:{src:i("47e3")("./"+t.image),"aspect-ratio":"1.0"}},[a("div",{staticClass:"fill-height",class:o?"bottom-gradient":"none"},[o?a("v-card-title",{staticClass:"white--text headline font-weight-light"},[e._v(e._s(t.title))]):e._e(),o?a("v-card-text",{staticClass:"white--text caption font-weight-light"},[e._v(e._s(t.desc))]):e._e()],1)])],1)}}],null,!0)})],1)}))],2)},n=[],o=(i("caad"),i("2532"),{data:function(){return{items_int:[{title:"Realtime Realistic VTuber engine",image:"vtuber.jpg",desc:"Vulkan",link:"Vtuber"},{title:"Realtime Path Tracing engine",image:"path.jpg",desc:"Vulkan",link:"PathEngine"},{title:"AR multiplayer city building game",image:"ARcity.jpg",desc:"May festival @UTokyo",link:"ARcity"},{title:"AR Modeling Kit",image:"modeling.jpg",link:"ARmodeling"},{title:"Cherry Blossom Viewing AR",image:"sakura.jpg",link:"ARsakura"}],items_ext:[{title:"Viewpoint-dependent Image Projection",image:"lenticular.jpg",link:"http://ishikawa-vision.org/vision/LentiDPM/index-e.html"},{title:"Website of the club",image:"prism.png",link:"http://gprism.webcrow.jp/"}]}},methods:{isExternal:function(e){return e.includes("http")||e.includes("https")},isInternal:function(e){return!e.includes("http")&&!e.includes("https")}}}),s=o,r=(i("2209"),i("2877")),l=i("6544"),c=i.n(l),u=(i("0481"),i("4069"),i("a9e3"),i("5530")),h=(i("615b"),i("10d2")),d=i("2b0e"),m=i("37c6"),g=d["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),p=i("1c87"),f=i("58df"),v=Object(f["a"])(g,p["a"],h["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({"v-card":!0},p["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},h["a"].options.computed.classes.call(this))},styles:function(){var e=Object(u["a"])({},h["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=g.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,a=t.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}}),y=i("80d2"),b=(Object(y["e"])("v-card__actions"),Object(y["e"])("v-card__subtitle"),Object(y["e"])("v-card__text")),w=Object(y["e"])("v-card__title"),_=i("0e8f"),C=d["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var i=this;this.clearDelay();var a=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){i.isActive={open:!0,close:!1}[e]},a)}}}),k=i("f2e7"),x=i("d9bd"),j=Object(f["a"])(C,k["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(x["c"])("v-hover should only contain a single element",this),e)):(Object(x["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}}),D=i("adda"),A=i("a722"),V=Object(r["a"])(s,a,n,!1,null,"1e71eee4",null);t["default"]=V.exports;c()(V,{VCard:v,VCardText:b,VCardTitle:w,VFlex:_["a"],VHover:j,VImg:D["a"],VLayout:A["a"]})},2209:function(e,t,i){"use strict";var a=i("c9b0"),n=i.n(a);n.a},"34d1":function(e,t,i){e.exports=i.p+"img/lenticular.547a3fac.jpg"},"46e8":function(e,t,i){e.exports=i.p+"img/vtuber.806a1c33.jpg"},"47e3":function(e,t,i){var a={"./ARcity.jpg":"bf73","./lenticular.jpg":"34d1","./modeling.jpg":"c71f","./path.jpg":"c62c","./prism.png":"c0b2","./sakura.jpg":"db7f","./vtuber.jpg":"46e8"};function n(e){var t=o(e);return i(t)}function o(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="47e3"},"560c":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("Cherry Blossom Viewing AR")]),i("h4",{staticClass:"font-weight-light"},[e._v("Make the cherry blossom viewing even more gorgeous")]),i("v-container"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/ZIFrOy138ys",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[e._v("AR Programming (Unity, C#, Shader, ARKit) ")])],1)},n=[],o={components:{}},s=o,r=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),h=i("a722"),d=Object(r["a"])(s,a,n,!1,null,null,null);t["default"]=d.exports;c()(d,{VContainer:u["a"],VLayout:h["a"]})},"615b":function(e,t,i){},a340:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("Realtime Path Tracing engine")]),i("h4",{staticClass:"font-weight-light"},[e._v("Production of hyper-realistic virtual world in real time")]),i("v-container"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/NEiQNRGF-9Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("Description")]),i("h4",{staticClass:"font-weight-light mx-12"},[e._v("Path tracing is a technique that can produce global illumination, refraction and reflection more faithfully in CG than conventional methods, and widely used in CG movies and games. I implement a real-time past tracing engine using "),i("code",[e._v("VK_KHR_ray_tracing")]),e._v(" extension of Vulkan. I also write shaders for ray tracing and adopt DisneyBRDF to reflect the physical properties. I include the AI denoise API of NVIDIA OptiX into my engine to solve the de-noise problem in path tracing. ")]),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[e._v("CG Programming (C++, Vulkan, GLSL) ")])],1)},n=[],o={components:{}},s=o,r=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),h=i("a722"),d=Object(r["a"])(s,a,n,!1,null,null,null);t["default"]=d.exports;c()(d,{VContainer:u["a"],VLayout:h["a"]})},aa4b:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("Realtime Realistic VTuber engine")]),i("h4",{staticClass:"font-weight-light"},[e._v("Fusion of virtual and real world in real time")]),i("v-container"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/QZuNY5wm7w8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("Description")]),i("h4",{staticClass:"font-weight-light mx-12"},[e._v("I create a VTuber engine that reflects the three-axis rotation of the face in real time to a 3DCG scene by combining my path tracing engine and some image processing methods. As a future work, I intend to implement skinning so as to reflect information on facial expressions."),i("br"),e._v(" In the future, I will expect to realize comfortable telework in virtual offices, schools, etc., by mapping humans in a hyper-realistic CG space and making them feel as if they are in a real space. ")]),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[e._v("CG Programming (C++, Vulkan, GLSL)"),i("br"),e._v(" Face Detection (OpenCV, Dlib)"),i("br"),e._v(" This engine is based on "),i("a",{attrs:{href:"./PathEngine"}},[e._v("my previous work")]),e._v(". ")])],1)],1)},n=[],o={components:{}},s=o,r=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),h=i("a722"),d=Object(r["a"])(s,a,n,!1,null,null,null);t["default"]=d.exports;c()(d,{VContainer:u["a"],VLayout:h["a"]})},bf73:function(e,t,i){e.exports=i.p+"img/ARcity.4d7c4796.jpg"},c05f:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("AR Modeling Kit")]),i("h4",{staticClass:"font-weight-light"},[e._v("New modeling method")]),i("v-container"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/PE6Khf847tA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[e._v("AR Programming (Unity, C#, Shader, ARKit) ")])],1)},n=[],o={components:{}},s=o,r=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),h=i("a722"),d=Object(r["a"])(s,a,n,!1,null,null,null);t["default"]=d.exports;c()(d,{VContainer:u["a"],VLayout:h["a"]})},c0b2:function(e,t,i){e.exports=i.p+"img/prism.b7c39aa6.png"},c62c:function(e,t,i){e.exports=i.p+"img/path.8841c9db.jpg"},c71f:function(e,t,i){e.exports=i.p+"img/modeling.c9eb4377.jpg"},c9b0:function(e,t,i){},db7f:function(e,t,i){e.exports=i.p+"img/sakura.d8fa15b6.jpg"},f616:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("AR Multiplayer City Building Game")]),i("h4",{staticClass:"font-weight-light"},[e._v("Collaborative experience in augmented reality")]),i("v-container"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/e367xmTiOOE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("Description")]),i("h4",{staticClass:"font-weight-light mx-12"},[e._v("We exhibited a multiplayer AR city building game at the May Festival@UTokyo. Although the demo video is a solo play, we connected at most five iPads via TCP/IP to share the condition of city building between devices in the day of exhibition. At that time, there was no API to synchronize coordinates between devices, so I implemented an original method to synchronize coordinates. ")]),i("v-container"),i("h1",{staticClass:"Display-3 font-weight-medium mb-3"},[e._v("What I Did")]),i("h4",{staticClass:"font-weight-light"},[e._v("AR Network Programming (Unity, C#, Shader, ARKit, UNet)"),i("br"),e._v(" Game Design ")])],1)},n=[],o={components:{}},s=o,r=i("2877"),l=i("6544"),c=i.n(l),u=i("a523"),h=i("a722"),d=Object(r["a"])(s,a,n,!1,null,null,null);t["default"]=d.exports;c()(d,{VContainer:u["a"],VLayout:h["a"]})}}]);
//# sourceMappingURL=about.3219d816.js.map