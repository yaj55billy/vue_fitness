(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d310150a"],{"3bac":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[s("div",{staticClass:"ldio-ivekc1fyg2"},[s("div")])])]),s("navbar"),s("section",{staticClass:"section"},[s("div",{staticClass:"cart-page"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"cart-title"},[s("h2",{},[t._v("結帳完成")]),s("router-link",{staticClass:"btn btn-outline-primary btn-md rounded-pill",attrs:{to:"/index"}},[t._v(" 回首頁 ")])],1),t._m(1)])])]),s("pagebottom")],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"shop-step"},[s("li",{staticClass:"shop-step__list complete"},[s("div",{staticClass:"shop-step__num"},[t._v("1")]),s("div",[t._v("訂單")])]),s("li",{staticClass:"shop-step__list complete"},[s("div",{staticClass:"shop-step__num"},[t._v("2")]),s("div",[t._v("付款")])]),s("li",{staticClass:"shop-step__list complete"},[s("div",{staticClass:"shop-step__num"},[t._v("3")]),s("div",[t._v("完成")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart-complete"},[s("h2",{staticClass:"cart-complete__title"},[t._v("感謝您的購買!")]),s("p",{staticClass:"cart-complete__text"},[t._v(" 我們將於 1~3 個工作天內與您聯繫，若有任何問題也可撥打 02-3456-7890 聯繫我們。 ")])])}],e=s("d178"),r=s("fd2d"),c={components:{navbar:e["a"],pagebottom:r["a"]},data:function(){return{isLoading:!1}}},l=c,o=s("2877"),v=Object(o["a"])(l,i,n,!1,null,null,null);a["default"]=v.exports},"99af":function(t,a,s){"use strict";var i=s("23e7"),n=s("d039"),e=s("e8b5"),r=s("861d"),c=s("7b0b"),l=s("50c4"),o=s("8418"),v=s("65f0"),u=s("1dde"),d=s("b622"),p=s("2d00"),_=d("isConcatSpreadable"),f=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!n((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),h=u("concat"),C=function(t){if(!r(t))return!1;var a=t[_];return void 0!==a?!!a:e(t)},m=!g||!h;i({target:"Array",proto:!0,forced:m},{concat:function(t){var a,s,i,n,e,r=c(this),u=v(r,0),d=0;for(a=-1,i=arguments.length;a<i;a++)if(e=-1===a?r:arguments[a],C(e)){if(n=l(e.length),d+n>f)throw TypeError(b);for(s=0;s<n;s++,d++)s in e&&o(u,d,e[s])}else{if(d>=f)throw TypeError(b);o(u,d++,e)}return u.length=d,u}})},d178:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/qa"}},[t._v(" 常見問題 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v(" 聯絡我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],e=(s("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){t.carts=0}))}}}),r=e,c=s("2877"),l=Object(c["a"])(r,i,n,!1,null,null,null);a["a"]=l.exports},fd2d:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4 d-flex align-items-center"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),s("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/login"}},[t._v("管理者")])],1)])])])])},n=[],e={data:function(){return{}}},r=e,c=s("2877"),l=Object(c["a"])(r,i,n,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-d310150a.5a663b8a.js.map