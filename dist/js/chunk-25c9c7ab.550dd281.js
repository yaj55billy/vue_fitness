(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25c9c7ab"],{"2cf6":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[s("div",{staticClass:"ldio-ivekc1fyg2"},[s("div")])])]),s("navbar"),s("section",{staticClass:"section"},[s("div",{staticClass:"cart-page"},[s("div",{staticClass:"container"},[t._m(0),t._m(1),s("ul",{staticClass:"cart-info"},t._l(t.order.products,(function(a){return s("li",{key:a.product.description,staticClass:"cart-info__list"},[s("div",{staticClass:"cart-info__pic"},[s("img",{attrs:{src:a.product.imageUrl[0],alt:a.product.title}})]),s("div",{staticClass:"cart-info__con"},[s("h4",{staticClass:"cart-info__title"},[t._v(t._s(a.product.title))])]),s("div",{staticClass:"cart-info__num"},[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(a.quantity))]),t._v(" 堂 ")]),s("div",{staticClass:"cart-info__price text-right"},[t._v(" $"+t._s(t._f("toThousands")(a.product.price))+" "),s("br")])])})),0),s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-md-4 cart-footer__total"},[s("div",{staticClass:"cart-footer__total--item mt-2"},[t._m(2),s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("$ "+t._s(t._f("toThousands")(t.order.amount)))])])])]),s("div",{staticClass:"cart-order"},[s("h3",{staticClass:"text-left"},[t._v("訂購人資料")]),t.order.user?s("ul",{staticClass:"cart-order__list"},[s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("姓名:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.name))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("Email:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.email))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("電話:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.tel))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("地址:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.address))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("付款方式:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.payment))])])]):t._e()]),s("button",{staticClass:"btn btn-primary rounded-pill btn-xl",attrs:{type:"button"},on:{click:function(a){return t.payOrder()}}},[t._v(" 付款 ")])])])]),s("Footer")],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"shop-step"},[s("li",{staticClass:"shop-step__list complete"},[s("div",{staticClass:"shop-step__num"},[t._v("1")]),s("div",[t._v("訂單")])]),s("li",{staticClass:"shop-step__list complete"},[s("div",{staticClass:"shop-step__num"},[t._v("2")]),s("div",[t._v("付款")])]),s("li",{staticClass:"shop-step__list"},[s("div",{staticClass:"shop-step__num"},[t._v("3")]),s("div",[t._v("完成")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart-title"},[s("h2",{},[t._v("付款頁")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("總計"),s("span",{staticClass:"h6"},[t._v("(已折扣)")])])}],e=(s("99af"),s("d178")),c=s("fd2d"),n={components:{navbar:e["a"],Footer:c["a"]},data:function(){return{orderId:"",order:{},isLoading:!1}},created:function(){var t=this;if(this.orderId=this.$route.params.orderId,this.orderId){this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/orders/").concat(this.orderId);this.axios.get(a).then((function(a){t.order=a.data.data,t.isLoading=!1}))}},methods:{payOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/orders/").concat(this.orderId,"/paying");this.axios.post(a).then((function(a){a.data.data.paid&&(t.$bus.$emit("notice-user","付款成功"),t.$router.push("/complete/".concat(t.orderId))),t.isLoading=!1})).catch((function(){t.$bus.$emit("notice-user","Oops~您已經付過款項了"),t.isLoading=!1}))}}},o=n,l=s("2877"),d=Object(l["a"])(o,i,r,!1,null,null,null);a["default"]=d.exports},"99af":function(t,a,s){"use strict";var i=s("23e7"),r=s("d039"),e=s("e8b5"),c=s("861d"),n=s("7b0b"),o=s("50c4"),l=s("8418"),d=s("65f0"),_=s("1dde"),u=s("b622"),v=s("2d00"),p=u("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",b=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),C=_("concat"),g=function(t){if(!c(t))return!1;var a=t[p];return void 0!==a?!!a:e(t)},m=!b||!C;i({target:"Array",proto:!0,forced:m},{concat:function(t){var a,s,i,r,e,c=n(this),_=d(c,0),u=0;for(a=-1,i=arguments.length;a<i;a++)if(e=-1===a?c:arguments[a],g(e)){if(r=o(e.length),u+r>f)throw TypeError(h);for(s=0;s<r;s++,u++)s in e&&l(_,u,e[s])}else{if(u>=f)throw TypeError(h);l(_,u++,e)}return _.length=u,_}})},d178:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/qa"}},[t._v(" 常見問題 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v(" 聯絡我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],e=(s("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){t.carts=0}))}}}),c=e,n=s("2877"),o=Object(n["a"])(c,i,r,!1,null,null,null);a["a"]=o.exports},fd2d:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4 d-flex align-items-center"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),s("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/login"}},[t._v("管理者")])],1)])])])])},r=[],e={data:function(){return{}}},c=e,n=s("2877"),o=Object(n["a"])(c,i,r,!1,null,null,null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-25c9c7ab.550dd281.js.map