(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87eb13c2"],{"62b3":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[s("div",{staticClass:"ldio-ivekc1fyg2"},[s("div")])])]),s("navbar"),s("section",{staticClass:"section"},[s("div",{staticClass:"cart-page"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"shop-step"},[s("li",{staticClass:"shop-step__list",class:{complete:!t.cartsEmpty}},[s("div",{staticClass:"shop-step__num"},[t._v("1")]),s("div",[t._v("訂單")])]),t._m(0),t._m(1)]),s("div",{staticClass:"cart-title"},[s("h2",{},[t._v("訂單")]),s("router-link",{staticClass:"btn btn-outline-primary btn-md rounded-pill",attrs:{to:"/products"}},[t._v(" 繼續購物 ")])],1),!0===t.cartsEmpty?s("div",{},[t._m(2)]):s("div",[s("ul",{staticClass:"cart-info"},t._l(t.carts,(function(a){return s("li",{key:a.product.id+1,staticClass:"cart-info__list"},[s("div",{staticClass:"cart-info__pic"},[s("img",{attrs:{src:a.product.imageUrl[0],alt:a.product.title}})]),s("div",{staticClass:"cart-info__con"},[s("h4",{staticClass:"cart-info__title"},[t._v(t._s(a.product.title))]),s("div",{staticClass:"cart-info__count"},[s("button",{staticClass:"btn-cart",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(s){a.quantity--,t.editCartItemNum(a.product.id,a.quantity)}}},[t._v(" - ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],staticClass:"cart-info__input",attrs:{type:"number",min:"1",disabled:""},domProps:{value:a.quantity},on:{input:function(s){s.target.composing||t.$set(a,"quantity",s.target.value)}}}),s("button",{staticClass:"btn-cart",attrs:{type:"button",disabled:"體驗課程"===a.product.category},on:{click:function(s){a.quantity++,t.editCartItemNum(a.product.id,a.quantity)}}},[t._v(" + ")])])]),s("div",{staticClass:"cart-info__price"},[t._v(" $"+t._s(t._f("toThousands")(a.product.price))+" ")]),s("div",{staticClass:"cart-info__close",on:{click:function(s){return t.deleteCartItem(a.product.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])])})),0),s("div",{staticClass:"row cart-footer"},[s("div",{staticClass:"col-md-8 cart-footer__coupon"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.discount.code,expression:"discount.code"}],staticClass:"form-control rounded-0 border-bottom\n                border-top-0 border-left-0 border-right-0 shadow-none",attrs:{type:"text",placeholder:"折價券"},domProps:{value:t.discount.code},on:{input:function(a){a.target.composing||t.$set(t.discount,"code",a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-dark border-bottom\n                  border-top-0 border-left-0 border-right-0 rounded-0",attrs:{type:"button",id:"button-discount"},on:{click:function(a){return t.classDiscount()}}},[s("i",{staticClass:"fas fa-paper-plane"})])])]),t._m(3)]),s("div",{staticClass:"col-md-4 cart-footer__total"},[s("div",{staticClass:"cart-footer__total--item"},[s("p",{staticClass:"mb-0"},[t._v("小計")]),s("p",{staticClass:"mb-0"},[t._v("$ "+t._s(t._f("toThousands")(t.cartPrice)))])]),s("div",{staticClass:"cart-footer__total--item"},[s("p",{staticClass:"mb-0"},[t._v("折扣")]),s("p",{staticClass:"mb-0"},[t._v(" $ "+t._s(t._f("toThousands")(Math.round(t.cartPrice*((100-t.couponPercent)/100))))+" ")])]),s("div",{staticClass:"cart-footer__total--item mt-2"},[s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("總計")]),s("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v(" $ "+t._s(t._f("toThousands")(t.cartPrice*(t.couponPercent/100)))+" ")])])])]),s("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[s("form",{staticClass:"form mt-5",on:{submit:function(a){return a.preventDefault(),t.createOrder()}}},[s("h3",{staticClass:"text-left"},[t._v("填寫資料")]),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,i=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"username"}},[t._v("收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.name,expression:"formdata.name"}],staticClass:"form-control",class:i,attrs:{id:"username",type:"text",name:"收件人姓名"},domProps:{value:t.formdata.name},on:{input:function(a){a.target.composing||t.$set(t.formdata,"name",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,i=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.email,expression:"formdata.email"}],staticClass:"form-control",class:i,attrs:{id:"email",type:"email",name:"信箱"},domProps:{value:t.formdata.email},on:{input:function(a){a.target.composing||t.$set(t.formdata,"email",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,i=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"tel"}},[t._v("電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.tel,expression:"formdata.tel"}],staticClass:"form-control",class:i,attrs:{id:"tel",type:"tel",name:"電話"},domProps:{value:t.formdata.tel},on:{input:function(a){a.target.composing||t.$set(t.formdata,"tel",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,i=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"addr"}},[t._v("地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.address,expression:"formdata.address"}],staticClass:"form-control",class:i,attrs:{id:"addr",type:"text",name:"地址"},domProps:{value:t.formdata.address},on:{input:function(a){a.target.composing||t.$set(t.formdata,"address",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-left w-100",attrs:{for:"pay-method"}},[t._v("購買方式")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.formdata.payment,expression:"formdata.payment"}],staticClass:"form-control",attrs:{name:"付款方式",id:"pay-method",required:"required"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.formdata,"payment",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:"disabled",selected:""}},[t._v("請選擇付款方式")]),s("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),s("option",{attrs:{value:"ATM"}},[t._v("ATM")]),s("option",{attrs:{value:"Barcode"}},[t._v("Barcode")]),s("option",{attrs:{value:"Credit"}},[t._v("Credit")]),s("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),s("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-left w-100",attrs:{for:"message"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formdata.message,expression:"formdata.message"}],staticClass:"form-control",attrs:{name:"message",id:"",cols:"30",rows:"3"},domProps:{value:t.formdata.message},on:{input:function(a){a.target.composing||t.$set(t.formdata,"message",a.target.value)}}})]),s("div",{staticClass:"btn-area right"},[s("button",{staticClass:"btn btn-primary rounded-pill btn-xl",attrs:{type:"submit",disabled:e}},[t._v("前往結帳")])])])]}}])})],1)])])]),s("Footer")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"shop-step__list"},[s("div",{staticClass:"shop-step__num"},[t._v("2")]),s("div",[t._v("付款")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"shop-step__list"},[s("div",{staticClass:"shop-step__num"},[t._v("3")]),s("div",[t._v("完成")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart-empty"},[s("h2",{staticClass:"cart-empty__title"},[t._v(" QQ~~"),s("br"),t._v(" 購物車內沒有商品，"),s("br"),t._v(" 點擊上方按鈕去物色喜歡的課程吧 ! ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"congratulate"},[s("i",{staticClass:"fas fa-bullhorn congratulate-icon"}),s("p",{staticClass:"congratulate-text"},[t._v(" 慶祝 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" 網站開幕，在 12/31 前，結帳輸入 fitspacegogo8 就享有課程售價 8 折優惠。 ")])])}],o=(s("99af"),s("4160"),s("159b"),s("5530")),r=s("d178"),n=s("fd2d"),c={components:{navbar:r["a"],Footer:n["a"]},data:function(){return{carts:[],cartPrice:0,cartsEmpty:!1,isLoading:!1,coupon:{},couponPercent:100,discount:{code:""},formdata:{name:"",email:"",tel:"",address:"",payment:"",message:""}}},created:function(){this.getCart()},methods:{classDiscount:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/coupon/search");this.axios.post(a,this.discount).then((function(a){t.$bus.$emit("notice-user","恭喜已為您折扣課程費用"),t.couponPercent=a.data.data.percent,t.coupon=a.data.data,t.isLoading=!1})).catch((function(){t.$bus.$emit("notice-user","折扣碼錯誤，請再確認看看是否輸入錯誤"),t.couponPercent=100,t.getCart(),t.isLoading=!1}))},getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){0===a.data.data.length?(t.cartsEmpty=!0,t.isLoading=!1):(t.carts=a.data.data,t.updateTotal(),t.$bus.$emit("cart-num",""),t.isLoading=!1)}))},updateTotal:function(){var t=this;this.cartPrice=0,this.carts.forEach((function(a){t.cartPrice+=a.product.price*a.quantity}))},deleteCartItem:function(t){var a=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping/").concat(t);this.axios.delete(s).then((function(){a.getCart(),a.isLoading=!1})).catch((function(){a.isLoading=!1}))},editCartItemNum:function(t,a){var s=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping"),i={product:t,quantity:a};this.axios.patch(e,i).then((function(){s.$bus.$emit("notice-user","課程數量改變成功"),s.isLoading=!1,s.getCart()})).catch((function(){s.isLoading=!1}))},createOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/orders"),s=Object(o["a"])({},this.formdata);this.coupon.enabled&&(s.coupon=this.coupon.code),this.axios.post(a,s).then((function(a){a.data.data.id&&t.$router.push("/checkout/".concat(a.data.data.id)),t.isLoading=!1})).catch((function(){t.$bus.$emit("notice-user","訂單送出失敗，再檢查看看"),t.isLoading=!1}))}}},l=c,d=s("2877"),u=Object(d["a"])(l,e,i,!1,null,null,null);a["default"]=u.exports},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),o=s("e8b5"),r=s("861d"),n=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),p=s("b622"),v=s("2d00"),m=p("isConcatSpreadable"),f=9007199254740991,_="Maximum allowed index exceeded",b=v>=51||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=u("concat"),g=function(t){if(!r(t))return!1;var a=t[m];return void 0!==a?!!a:o(t)},C=!b||!h;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,s,e,i,o,r=n(this),u=d(r,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(o=-1===a?r:arguments[a],g(o)){if(i=c(o.length),p+i>f)throw TypeError(_);for(s=0;s<i;s++,p++)s in o&&l(u,p,o[s])}else{if(p>=f)throw TypeError(_);l(u,p++,o)}return u.length=p,u}})},d178:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/qa"}},[t._v(" 常見問題 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v(" 聯絡我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],o=(s("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){t.carts=0}))}}}),r=o,n=s("2877"),c=Object(n["a"])(r,e,i,!1,null,null,null);a["a"]=c.exports},fd2d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4 d-flex align-items-center"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),s("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/login"}},[t._v("管理者")])],1)])])])])},i=[],o={data:function(){return{}}},r=o,n=s("2877"),c=Object(n["a"])(r,e,i,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-87eb13c2.31f18ef7.js.map