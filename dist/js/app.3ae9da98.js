(function(e){function n(n){for(var a,c,u=n[0],i=n[1],d=n[2],s=0,l=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(n);while(l.length)l.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0a688848":"2a5e1b3b","chunk-0edabc4a":"86055581","chunk-0ee680fc":"3e41c180","chunk-0f9b5512":"56c2b2d7","chunk-25c9c7ab":"550dd281","chunk-434a20ea":"b9a9e9f3","chunk-4e8a1fbc":"0c2e6a6c","chunk-5b74acf8":"0f5214f8","chunk-6109030c":"b995a5bc","chunk-87eb13c2":"31f18ef7","chunk-a9b5c1fc":"ebb56827","chunk-c6212882":"82c839c0","chunk-d310150a":"c0b4b9a3","chunk-dde8d59c":"fb08cd1b","chunk-dfb762e4":"72e0d2be"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0a688848":1,"chunk-0f9b5512":1,"chunk-434a20ea":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0a688848":"f99ab6fe","chunk-0edabc4a":"31d6cfe0","chunk-0ee680fc":"31d6cfe0","chunk-0f9b5512":"67dd35c9","chunk-25c9c7ab":"31d6cfe0","chunk-434a20ea":"4b85787c","chunk-4e8a1fbc":"31d6cfe0","chunk-5b74acf8":"31d6cfe0","chunk-6109030c":"31d6cfe0","chunk-87eb13c2":"31d6cfe0","chunk-a9b5c1fc":"31d6cfe0","chunk-c6212882":"31d6cfe0","chunk-d310150a":"31d6cfe0","chunk-dde8d59c":"31d6cfe0","chunk-dfb762e4":"31d6cfe0"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===a||s===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],h.parentNode.removeChild(h),t(o)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}r[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var h=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var a=t("5530"),c=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),r=t("bc3a"),o=t.n(r),u=(t("4989"),t("1157")),i=t.n(u),d=t("a7fe"),s=t.n(d),l=t("9062"),h=t.n(l),f=(t("e40d"),t("77ed"),t("4a26")),p=t.n(f),b=t("7bb1"),m=t("4c93"),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("toasts"),t("router-view")],1)},g=[],k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"toast fade hide",staticStyle:{position:"fixed",top:"20px",right:"20px","min-width":"300px","z-index":"11000"},attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[t("div",{staticClass:"toast-header"},[t("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[t("rect",{attrs:{width:"100%",height:"100%",fill:"#274555"}})]),t("strong",{staticClass:"mr-auto"},[e._v("訊息通知")]),e._m(0)]),t("div",{staticClass:"toast-body"},[e._v(" "+e._s(e.message)+" ")])])])},y=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],w={data:function(){return{message:""}},created:function(){var e=this;this.$bus.$on("notice-user",(function(n){e.message=n,$(".toast").toast({autohide:!1}),$(".toast").toast("show"),setTimeout((function(){$(".toast").toast("hide"),e.message=""}),3e3)}))}},O=w,j=t("2877"),_=Object(j["a"])(O,k,y,!1,null,null,null),C=_.exports,x={components:{toasts:C},data:function(){return{}}},E=x,P=(t("5c0b"),Object(j["a"])(E,v,g,!1,null,null,null)),S=P.exports,T=(t("d3b7"),t("8c4f")),A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view")],1)},L=[],M={},N=Object(j["a"])(M,A,L,!1,null,null,null),q=N.exports;c["a"].use(T["a"]);var B=[{path:"/",component:q,children:[{path:"",name:"Home",component:function(){return t.e("chunk-4e8a1fbc").then(t.bind(null,"ec5a"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-0ee680fc").then(t.bind(null,"f743"))}},{path:"qa",name:"Qa",component:function(){return t.e("chunk-dde8d59c").then(t.bind(null,"fb97"))}},{path:"about",name:"About",component:function(){return t.e("chunk-a9b5c1fc").then(t.bind(null,"9cbb"))}},{path:"products",name:"Products",component:function(){return t.e("chunk-5b74acf8").then(t.bind(null,"ed84"))}},{path:"product/:id",name:"Product",component:function(){return t.e("chunk-c6212882").then(t.bind(null,"658f"))}},{path:"cart",name:"Cart",component:function(){return t.e("chunk-87eb13c2").then(t.bind(null,"62b3"))}},{path:"checkout/:orderId",name:"Checkout",component:function(){return t.e("chunk-25c9c7ab").then(t.bind(null,"2cf6"))}},{path:"complete/:orderId",name:"Complete",component:function(){return t.e("chunk-d310150a").then(t.bind(null,"3bac"))}}]},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-434a20ea").then(t.bind(null,"7277"))},children:[{path:"order",name:"Order",component:function(){return t.e("chunk-0f9b5512").then(t.bind(null,"da25"))}},{path:"coupons",name:"Coupons",component:function(){return t.e("chunk-0edabc4a").then(t.bind(null,"d0a3"))}},{path:"products",name:"adminProducts",component:function(){return t.e("chunk-6109030c").then(t.bind(null,"d416"))}},{path:"storages",name:"Storages",component:function(){return t.e("chunk-dfb762e4").then(t.bind(null,"d711"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-0a688848").then(t.bind(null,"a55b"))}},{path:"*",redirect:"/"}],I=new T["a"]({routes:B}),D=I;t("4de4"),t("a15b"),t("ac1f"),t("25f0"),t("5319"),t("1276");c["a"].filter("toThousands",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=e.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")})),(new p.a).init(),c["a"].config.productionTip=!1,window.$=i.a,c["a"].component("Loading",h.a),c["a"].use(s.a,o.a),c["a"].component("ValidationProvider",b["b"]),c["a"].component("ValidationObserver",b["a"]),Object(b["d"])("email",Object(a["a"])(Object(a["a"])({},m["a"]),{},{message:"請輸入正確的 Email 格式"})),Object(b["d"])("required",Object(a["a"])(Object(a["a"])({},m["d"]),{},{message:"{_field_} 為必填項目"})),Object(b["d"])("min",Object(a["a"])(Object(a["a"])({},m["b"]),{},{message:"請輸入至少 {length} 碼"})),Object(b["d"])("min_value",Object(a["a"])(Object(a["a"])({},m["c"]),{},{message:"最少為{min}"})),Object(b["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),c["a"].prototype.$bus=new c["a"],new c["a"]({router:D,render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var a=t("9c0c"),c=t.n(a);c.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.3ae9da98.js.map