(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41f485b9"],{1799:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:t.pagedata.current_page-1===0},attrs:{disabled:t.pagedata.current_page-1===0}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.nowPage(t.pagedata.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagedata.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.pagedata.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.nowPage(a)}}},[t._v(t._s(a)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:t.pagedata.current_page===t.pagedata.total_pages},attrs:{disabled:t.pagedata.current_page===t.pagedata.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.nowPage(t.pagedata.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],i={data:function(){return{}},props:["pagedata"],methods:{nowPage:function(t){this.$emit("update",t)}}},r=i,o=e("2877"),c=Object(o["a"])(r,n,s,!1,null,null,null);a["a"]=c.exports},"99af":function(t,a,e){"use strict";var n=e("23e7"),s=e("d039"),i=e("e8b5"),r=e("861d"),o=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),f=e("2d00"),g=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=f>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),C=u("concat"),_=function(t){if(!r(t))return!1;var a=t[g];return void 0!==a?!!a:i(t)},m=!b||!C;n({target:"Array",proto:!0,forced:m},{concat:function(t){var a,e,n,s,i,r=o(this),u=d(r,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(i=-1===a?r:arguments[a],_(i)){if(s=c(i.length),p+s>v)throw TypeError(h);for(e=0;e<s;e++,p++)e in i&&l(u,p,i[e])}else{if(p>=v)throw TypeError(h);l(u,p++,i)}return u.length=p,u}})},c975:function(t,a,e){"use strict";var n=e("23e7"),s=e("4d64").indexOf,i=e("a640"),r=e("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},d178:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[e("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[e("div",{staticClass:"navbar-nav"},[e("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),e("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[e("i",{staticClass:"fas fa-shopping-cart"}),e("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],i=(e("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){}))}}}),r=i,o=e("2877"),c=Object(o["a"])(r,n,s,!1,null,null,null);a["a"]=c.exports},d81d:function(t,a,e){"use strict";var n=e("23e7"),s=e("b727").map,i=e("1dde"),r=e("ae40"),o=i("map"),c=r("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},ed84:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[e("div",{staticClass:"ldio-ivekc1fyg2"},[e("div")])])]),e("navbar"),t._m(0),e("div",{staticClass:"container prod"},[e("ul",{staticClass:"list-unstyled prod-filter"},[e("li",{staticClass:"prod-filter__list"},[e("a",{staticClass:"btn btn-outline-primary btn-sm rounded-pill",class:{active:"全部課程"===t.nowCategory},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.productHandler("全部課程")}}},[t._v(" 全部課程 ")])]),t._l(t.filterNotRepeat,(function(a){return e("li",{key:a,staticClass:"prod-filter__list"},[e("a",{staticClass:"btn btn-outline-primary btn-sm rounded-pill",class:{active:a===t.nowCategory},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.productHandler(a)}}},[t._v(t._s(a))])])}))],2),e("div",{staticClass:"row mt-4"},t._l(t.nowProducts,(function(a){return e("div",{key:a.id,staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"card prod-card mb-4"},[e("div",{staticClass:"prod-pic"},[e("img",{staticClass:"card-img-top",attrs:{src:a.imageUrl[0],alt:a.title}}),e("a",{staticClass:"prod-cart",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.addToCart(a.id)}}},[e("i",{staticClass:"fas fa-cart-plus"})])]),e("div",{staticClass:"card-body prod-body text-left"},[e("h4",{staticClass:"mb-0"},[t._v(t._s(a.title))]),e("p",{staticClass:"text-muted mt-3 prod-content"},[t._v(t._s(a.content))]),e("div",{staticClass:"prod-price"},[e("div",{staticClass:"float-left"},[e("del",[t._v("NT$"+t._s(t._f("toThousands")(a.origin_price)))])]),e("div",{staticClass:"float-right prod-price__special"},[t._v(" NT$"+t._s(t._f("toThousands")(a.price))+" ")])])]),e("router-link",{staticClass:"prod-link",attrs:{to:"/product/"+a.id}})],1)])})),0),e("nav",{staticClass:"d-flex justify-content-center"},[e("pagination",{attrs:{pagedata:t.pagination},on:{update:t.getProducts}})],1)]),e("pagebottom")],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"position-relative banner"},[e("div",{staticClass:"position-absolute banner-prodbg"}),e("div",{staticClass:"container d-flex flex-column banner-body banner-body-prod"},[e("div",{staticClass:"row justify-content-center my-auto"},[e("div",{staticClass:"col-md-6 banner-textarea wow animate__fadeInDown",attrs:{"data-wow-duration":"3s"}},[e("h3",{staticClass:"banner-textarea__title"},[t._v("課程列表")])])])])])}],i=(e("99af"),e("4de4"),e("c975"),e("d81d"),e("d178")),r=e("1799"),o=e("fd2d"),c={components:{navbar:i["a"],pagebottom:o["a"],pagination:r["a"]},data:function(){return{products:[],nowProducts:[],nowCategory:"",pagination:{},isLoading:!1}},created:function(){this.getProducts(),this.productHandler()},computed:{filterCategory:function(){return this.products.map((function(t){return t.category}))},filterNotRepeat:function(){return this.filterCategory.filter((function(t,a,e){return e.indexOf(t)===a}))}},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/products?page=").concat(a);this.axios.get(e).then((function(a){t.products=a.data.data,t.pagination=a.data.meta.pagination,t.nowProducts=a.data.data,t.isLoading=!1}))},addToCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping"),s={product:t,quantity:e};this.isLoading=!0,this.axios.post(n,s).then((function(){a.$bus.$emit("notice-user","商品已成功加入購物車"),a.$bus.$emit("cart-num",""),a.isLoading=!1})).catch((function(t){a.$bus.$emit("notice-user",t.response.data.errors[0]),a.$bus.$emit("cart-num",""),a.isLoading=!1}))},productHandler:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"全部課程";this.nowProducts=[],"全部課程"===a?(this.nowCategory=a,this.nowProducts=this.products):this.products.map((function(e){return e.category===a&&(t.nowCategory=e.category,t.nowProducts.push(e)),t.nowProducts}))}}},l=c,d=e("2877"),u=Object(d["a"])(l,n,s,!1,null,null,null);a["default"]=u.exports},fd2d:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-dark"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row py-4 d-flex align-items-center"},[e("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[e("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),e("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),e("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/admin/products"}},[t._v("管理者")])],1)])])])])},s=[],i={data:function(){return{}}},r=i,o=e("2877"),c=Object(o["a"])(r,n,s,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-41f485b9.078a8004.js.map