(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25c9c7ab"],{"2cf6":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[s("div",{staticClass:"ldio-ivekc1fyg2"},[s("div")])])]),s("navbar"),s("section",{staticClass:"section"},[s("div",{staticClass:"cart-page"},[s("div",{staticClass:"container"},[t._m(0),t._m(1),s("ul",{staticClass:"cart-info"},t._l(t.order.products,(function(a){return s("li",{key:a.product.description,staticClass:"cart-info__list"},[s("div",{staticClass:"cart-info__pic"},[s("img",{attrs:{src:a.product.imageUrl[0],alt:""}})]),s("div",{staticClass:"cart-info__con"},[s("h4",{staticClass:"cart-info__title"},[t._v(t._s(a.product.title))])]),s("div",{staticClass:"cart-info__num"},[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(a.quantity))]),t._v(" 堂 ")]),s("div",{staticClass:"cart-info__price text-right"},[t._v(" $"+t._s(t._f("toThousands")(a.product.price))+" "),s("br")])])})),0),s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-md-4 cart-footer__total "},[s("div",{staticClass:"cart-footer__total--item mt-2"},[s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("總計")]),s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("$ "+t._s(t._f("toThousands")(t.order.amount)))])])])]),s("div",{staticClass:"cart-order"},[s("h3",{staticClass:"text-left"},[t._v("訂購人資料")]),s("ul",{staticClass:"cart-order__list"},[s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("姓名:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.name))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("Email:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.email))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("電話:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.tel))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("地址:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.user.address))])]),s("li",{staticClass:"cart-order__item"},[s("label",{staticClass:"cart-order__label"},[t._v("付款方式:")]),s("p",{staticClass:"cart-order__text"},[t._v(t._s(t.order.payment))])])])]),s("button",{staticClass:"btn btn-primary rounded-pill btn-xl",attrs:{type:"button"},on:{click:function(a){return t.payOrder()}}},[t._v(" 付款 ")])])])]),s("pagebottom")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"shop-step"},[s("li",{staticClass:"shop-step__list complete"},[s("div",{staticClass:"shop-step__num"},[t._v("1")]),s("div",[t._v("訂單")])]),s("li",{staticClass:"shop-step__list complete"},[s("div",{staticClass:"shop-step__num"},[t._v("2")]),s("div",[t._v("付款")])]),s("li",{staticClass:"shop-step__list"},[s("div",{staticClass:"shop-step__num"},[t._v("3")]),s("div",[t._v("完成")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart-title"},[s("h2",{},[t._v("付款頁")])])}],r=(s("99af"),s("d178")),c=s("fd2d"),n={components:{navbar:r["a"],pagebottom:c["a"]},data:function(){return{orderId:"",order:[],isLoading:!1}},created:function(){this.orderId=this.$route.params.orderId,this.orderId&&this.getDetailed(this.orderId)},methods:{getDetailed:function(t){var a=this;this.isLoading=!0,this.orderId=t;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/orders/").concat(t);this.axios.get(s).then((function(t){a.order=t.data.data,a.isLoading=!1}))},payOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/orders/").concat(this.orderId,"/paying");this.axios.post(a).then((function(a){a.data.data.paid&&(t.$bus.$emit("notice-user","付款成功"),t.$router.push("/complete/".concat(t.orderId))),t.isLoading=!1})).catch((function(){t.$bus.$emit("notice-user","Oops~您已經付過款項了"),t.isLoading=!1}))}}},o=n,l=s("2877"),d=Object(l["a"])(o,e,i,!1,null,null,null);a["default"]=d.exports},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),r=s("e8b5"),c=s("861d"),n=s("7b0b"),o=s("50c4"),l=s("8418"),d=s("65f0"),_=s("1dde"),v=s("b622"),u=s("2d00"),p=v("isConcatSpreadable"),f=9007199254740991,b="Maximum allowed index exceeded",m=u>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=_("concat"),C=function(t){if(!c(t))return!1;var a=t[p];return void 0!==a?!!a:r(t)},g=!m||!h;e({target:"Array",proto:!0,forced:g},{concat:function(t){var a,s,e,i,r,c=n(this),_=d(c,0),v=0;for(a=-1,e=arguments.length;a<e;a++)if(r=-1===a?c:arguments[a],C(r)){if(i=o(r.length),v+i>f)throw TypeError(b);for(s=0;s<i;s++,v++)s in r&&l(_,v,r[s])}else{if(v>=f)throw TypeError(b);l(_,v++,r)}return _.length=v,_}})},d178:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/cart"}},[t._v(" 購物車 ")]),s("router-link",{staticClass:"nav-item nav-link mr-4",attrs:{to:"/login"}},[t._v("登入")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/admin/products"}},[t._v("後台")])],1)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],r={data:function(){return{}}},c=r,n=s("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);a["a"]=o.exports},fd2d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},[s("a",{staticClass:"text-white h4 logo",attrs:{href:"./index.html"}},[t._v("FitSpace")])]),s("div",{staticClass:"d-flex flex-column flex-md-row\n    justify-content-between align-items-md-end\n    align-items-start text-white"},[s("div",{staticClass:"mb-md-0 mb-1"},[s("p",{staticClass:"mb-0"},[t._v("02-3456-7890")]),s("p",{staticClass:"mb-0"},[t._v("service@mail.com")])]),s("p",{staticClass:"mb-0"},[t._v("© 2020 LOGO All Rights Reserved.")])])])])}],r={data:function(){return{}}},c=r,n=s("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-25c9c7ab.4f380ef6.js.map