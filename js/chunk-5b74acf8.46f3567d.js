(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b74acf8"],{"99af":function(t,a,s){"use strict";var n=s("23e7"),i=s("d039"),e=s("e8b5"),r=s("861d"),o=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),p=s("b622"),v=s("2d00"),f=p("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",b=v>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),C=u("concat"),_=function(t){if(!r(t))return!1;var a=t[f];return void 0!==a?!!a:e(t)},m=!b||!C;n({target:"Array",proto:!0,forced:m},{concat:function(t){var a,s,n,i,e,r=o(this),u=d(r,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(e=-1===a?r:arguments[a],_(e)){if(i=c(e.length),p+i>h)throw TypeError(g);for(s=0;s<i;s++,p++)s in e&&l(u,p,e[s])}else{if(p>=h)throw TypeError(g);l(u,p++,e)}return u.length=p,u}})},c975:function(t,a,s){"use strict";var n=s("23e7"),i=s("4d64").indexOf,e=s("a640"),r=s("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=e("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d178:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/qa"}},[t._v(" 常見問題 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v(" 聯絡我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],e=(s("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){t.carts=0}))}}}),r=e,o=s("2877"),c=Object(o["a"])(r,n,i,!1,null,null,null);a["a"]=c.exports},d81d:function(t,a,s){"use strict";var n=s("23e7"),i=s("b727").map,e=s("1dde"),r=s("ae40"),o=e("map"),c=r("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ed84:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[s("div",{staticClass:"ldio-ivekc1fyg2"},[s("div")])])]),s("Navbar"),t._m(0),s("div",{staticClass:"container prod"},[t._m(1),s("ul",{staticClass:"list-unstyled prod-filter"},[s("li",{staticClass:"prod-filter__list"},[s("a",{staticClass:"btn btn-outline-primary btn-sm rounded-pill",class:{active:"全部課程"===t.nowCategory},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.productHandler("全部課程")}}},[t._v(" 全部課程 ")])]),t._l(t.filterNotRepeat,(function(a){return s("li",{key:a,staticClass:"prod-filter__list"},[s("a",{staticClass:"btn btn-outline-primary btn-sm rounded-pill",class:{active:a===t.nowCategory},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.productHandler(a)}}},[t._v(t._s(a))])])}))],2),s("div",{staticClass:"row mt-4"},t._l(t.nowProducts,(function(a){return s("div",{key:a.id,staticClass:"col-lg-4 col-md-6"},[s("div",{staticClass:"card prod-card mb-4"},[s("div",{staticClass:"prod-pic"},[s("img",{staticClass:"card-img-top",attrs:{src:a.imageUrl[0],alt:a.title}}),s("a",{staticClass:"prod-cart",attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.addToCart(a.id)}}},[s("i",{staticClass:"fas fa-cart-plus"})])]),s("div",{staticClass:"card-body prod-body text-left"},[s("h4",{staticClass:"mb-0"},[t._v(t._s(a.title))]),s("p",{staticClass:"text-muted mt-3 prod-content"},[t._v(t._s(a.content))]),s("div",{staticClass:"prod-price"},[s("div",{staticClass:"float-left"},[s("del",[t._v("NT$"+t._s(t._f("toThousands")(a.origin_price)))])]),s("div",{staticClass:"float-right prod-price__special"},[t._v(" NT$"+t._s(t._f("toThousands")(a.price))+" ")])])]),s("router-link",{staticClass:"prod-link",attrs:{to:"/product/"+a.id}})],1)])})),0)]),s("Footer")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"position-relative banner"},[s("div",{staticClass:"position-absolute banner-prodbg"}),s("div",{staticClass:"container d-flex flex-column banner-body banner-body-prod"},[s("div",{staticClass:"row justify-content-center my-auto"},[s("div",{staticClass:"col-md-6 banner-textarea wow animate__fadeInDown",attrs:{"data-wow-duration":"1s"}},[s("h3",{staticClass:"banner-textarea__title"},[t._v("課程列表")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"congratulate"},[s("i",{staticClass:"fas fa-bullhorn congratulate-icon"}),s("p",{staticClass:"congratulate-text"},[t._v(" 慶祝 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" 網站開幕，在 12/31 前，結帳輸入 fitspacegogo8 就享有課程售價 8 折優惠。 ")])])}],e=(s("99af"),s("4de4"),s("4160"),s("c975"),s("d81d"),s("159b"),s("d178")),r=s("fd2d"),o={components:{Navbar:e["a"],Footer:r["a"]},data:function(){return{products:[],nowProducts:[],nowCategory:"",isLoading:!1}},created:function(){this.getProducts(),this.productHandler()},computed:{filterNotRepeat:function(){return this.products.map((function(t){return t.category})).filter((function(t,a,s){return s.indexOf(t)===a}))}},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/products?page=").concat(a);this.axios.get(s).then((function(a){t.products=a.data.data,t.nowProducts=a.data.data,t.isLoading=!1}))},addToCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping"),i={product:t,quantity:s};this.isLoading=!0,this.axios.post(n,i).then((function(){a.$bus.$emit("notice-user","商品已成功加入購物車"),a.$bus.$emit("cart-num",""),a.isLoading=!1})).catch((function(t){a.$bus.$emit("notice-user",t.response.data.errors[0]),a.$bus.$emit("cart-num",""),a.isLoading=!1}))},productHandler:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"全部課程";this.nowProducts=[],"全部課程"===a?(this.nowCategory=a,this.nowProducts=this.products):this.products.forEach((function(s){return s.category===a&&(t.nowCategory=s.category,t.nowProducts.push(s)),t.nowProducts}))}}},c=o,l=s("2877"),d=Object(l["a"])(c,n,i,!1,null,null,null);a["default"]=d.exports},fd2d:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4 d-flex align-items-center"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),s("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/login"}},[t._v("管理者")])],1)])])])])},i=[],e={data:function(){return{}}},r=e,o=s("2877"),c=Object(o["a"])(r,n,i,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-5b74acf8.46f3567d.js.map