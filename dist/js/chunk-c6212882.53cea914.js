(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6212882"],{"658f":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[s("div",{staticClass:"ldio-ivekc1fyg2"},[s("div")])])]),s("navbar"),s("div",{staticClass:"container prod-detail"},[s("div",{staticClass:"row align-items-start"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[s("div",{staticClass:"carousel-inner"},t._l(t.product.imageUrl,(function(t,a){return s("div",{key:t.id,staticClass:"carousel-item",class:{active:0==a}},[s("img",{staticClass:"d-block w-100",attrs:{src:t,alt:""}})])})),0),t._m(0),t._m(1)])]),s("div",{staticClass:"col-md-6"},[s("h2",{staticClass:"h2 prod-detail__title"},[t._v(t._s(t.product.title))]),s("div",{staticClass:"prod-detail__price"},[s("span",{staticClass:"prod-detail__price--discount"},[t._v(" $"+t._s(t._f("toThousands")(t.product.price))+" ")]),s("del",{staticClass:"prod-detail__price--origin"},[t._v(" $"+t._s(t._f("toThousands")(t.product.origin_price))+" ")])]),s("p",{staticClass:"prod-detail__description"},[t._v(" "+t._s(t.product.description)+" ")]),s("div",{staticClass:"form-group mt-2"},[s("label",{staticClass:"prod-detail__label",attrs:{for:"classNum"}},[t._v("課程數量：")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.classNum,expression:"classNum"}],staticClass:"form-control prod-detail__select",attrs:{id:"classNum"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.classNum=a.target.multiple?s:s[0]}}},t._l(t.classMax,(function(a){return s("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])})),0)]),s("div",{staticClass:"btn-area right"},[s("router-link",{staticClass:"btn btn-outline-primary btn-md rounded-pill",attrs:{to:"/products"}},[t._v("回課程頁")]),s("a",{staticClass:"btn btn-primary btn-md rounded-pill",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.addToCart(t.product.id,t.classNum)}}},[t._v("加入購物車")])],1)])]),t._m(2),0!==t.relatedProducts.length?s("div",{staticClass:"prod-detail__maybelike"},[s("h3",{staticClass:"prod-detail__subtitle"},[t._v("您可能也會喜歡")]),s("div",{staticClass:"row"},t._l(t.relatedProducts,(function(a){return s("div",{key:a.id,staticClass:"col-lg-4 col-md-6"},[s("div",{staticClass:"card prod-card mb-4"},[s("div",{staticClass:"prod-pic"},[s("img",{staticClass:"card-img-top",attrs:{src:a.imageUrl[0],alt:a.title}})]),s("div",{staticClass:"card-body prod-body text-left"},[s("h4",{staticClass:"mb-0"},[t._v(t._s(a.title))]),s("p",{staticClass:"text-muted mt-3 prod-content"},[t._v(t._s(a.content))]),s("div",{staticClass:"prod-price"},[s("div",{staticClass:"float-left"},[s("del",[t._v("NT$"+t._s(t._f("toThousands")(a.origin_price)))])]),s("div",{staticClass:"float-right prod-price__special"},[t._v(" NT$"+t._s(t._f("toThousands")(a.price))+" ")])])]),s("a",{staticClass:"prod-link",attrs:{href:"javascript:"},on:{click:function(s){return s.preventDefault(),t.goOtherPage(a.id)}}})])])})),0)]):t._e()]),s("pagebottom")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"prod-detail__need mt-4"},[s("h3",{staticClass:"prod-detail__subtitle"},[t._v("購課須知")]),s("ul",{staticClass:"prod-detail__list"},[s("li",[t._v("購課後我們將於 1~3 個工作天跟您聯繫，若有任何問題也歡迎撥打 02-3456-7890。")]),s("li",[t._v("我們的教練都有經過嚴格篩選，並且教育不得強迫推銷課程。")]),s("li",[t._v("上課時，記得自備水壺跟毛巾，並著裝適合運動的服裝、鞋子。")]),s("li",[t._v("疫情期間入館內皆須量體溫，我們也會頻繁實施館內消毒清潔。")])])])}],r=(s("99af"),s("4de4"),s("d178")),c=s("fd2d"),n={components:{navbar:r["a"],pagebottom:c["a"]},data:function(){return{classNum:1,classMax:36,product:[],relatedProducts:[],isLoading:!1}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;this.isLoading=!0;var a=this.$route.params.id;this.axios.get("".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/product/").concat(a)).then((function(a){t.product=a.data.data,t.isLoading=!1,t.getRelatedProducts(),"體驗課程"===t.product.category&&(t.classMax=1)})).catch((function(a){t.$bus.$emit("notice-user",a.response.data.errors[0]),t.isLoading=!1}))},getRelatedProducts:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/products");this.relatedProducts=[],this.axios.get(a).then((function(a){a.data.data.filter((function(a){return a.category===t.product.category&&a.title!==t.product.title&&t.relatedProducts.push(a),a})),t.isLoading=!1}))},addToCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping"),e={product:t,quantity:s};this.isLoading=!0,this.axios.post(i,e).then((function(){a.$bus.$emit("notice-user","商品已成功加入購物車"),a.$bus.$emit("cart-num",""),a.isLoading=!1})).catch((function(t){a.$bus.$emit("notice-user",t.response.data.errors[0]),a.$bus.$emit("cart-num",""),a.isLoading=!1}))},goOtherPage:function(t){this.$router.push("/product/".concat(t)),this.getProduct()}}},o=n,l=s("2877"),d=Object(l["a"])(o,i,e,!1,null,null,null);a["default"]=d.exports},"99af":function(t,a,s){"use strict";var i=s("23e7"),e=s("d039"),r=s("e8b5"),c=s("861d"),n=s("7b0b"),o=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),p=s("b622"),v=s("2d00"),_=p("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",g=v>=51||!e((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),b=u("concat"),m=function(t){if(!c(t))return!1;var a=t[_];return void 0!==a?!!a:r(t)},C=!g||!b;i({target:"Array",proto:!0,forced:C},{concat:function(t){var a,s,i,e,r,c=n(this),u=d(c,0),p=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?c:arguments[a],m(r)){if(e=o(r.length),p+e>f)throw TypeError(h);for(s=0;s<e;s++,p++)s in r&&l(u,p,r[s])}else{if(p>=f)throw TypeError(h);l(u,p++,r)}return u.length=p,u}})},d178:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/qa"}},[t._v(" 常見問題 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v(" 聯絡我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],r=(s("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){t.carts=0}))}}}),c=r,n=s("2877"),o=Object(n["a"])(c,i,e,!1,null,null,null);a["a"]=o.exports},fd2d:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4 d-flex align-items-center"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),s("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/login"}},[t._v("管理者")])],1)])])])])},e=[],r={data:function(){return{}}},c=r,n=s("2877"),o=Object(n["a"])(c,i,e,!1,null,null,null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-c6212882.53cea914.js.map