(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ee680fc"],{"99af":function(t,a,s){"use strict";var e=s("23e7"),n=s("d039"),i=s("e8b5"),r=s("861d"),o=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),v=s("b622"),f=s("2d00"),m=v("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=f>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),C=u("concat"),_=function(t){if(!r(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},h=!g||!C;e({target:"Array",proto:!0,forced:h},{concat:function(t){var a,s,e,n,i,r=o(this),u=d(r,0),v=0;for(a=-1,e=arguments.length;a<e;a++)if(i=-1===a?r:arguments[a],_(i)){if(n=c(i.length),v+n>p)throw TypeError(b);for(s=0;s<n;s++,v++)s in i&&l(u,v,i[s])}else{if(v>=p)throw TypeError(b);l(u,v++,i)}return u.length=v,u}})},d178:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/qa"}},[t._v(" 常見問題 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v(" 聯絡我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i=(s("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){t.carts=0}))}}}),r=i,o=s("2877"),c=Object(o["a"])(r,e,n,!1,null,null,null);a["a"]=c.exports},f743:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-ball-h1u60i2wsu"},[s("div",{staticClass:"ldio-ivekc1fyg2"},[s("div")])])]),s("navbar"),t._m(0),s("div",{staticClass:"mt-6 mb-6"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"home-title"},[t._v(" 聯絡我們 ")]),s("div",{staticClass:"row align-items-center"},[t._m(1),s("div",{staticClass:"col-md-8 m-auto"},[s("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[s("form",{staticClass:"form mt-5",on:{submit:function(a){return a.preventDefault(),t.sendMail()}}},[s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,n=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"contact-name"}},[t._v("姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactdata.name,expression:"contactdata.name"}],staticClass:"form-control",class:n,attrs:{id:"contact-name",type:"text",name:"姓名"},domProps:{value:t.contactdata.name},on:{input:function(a){a.target.composing||t.$set(t.contactdata,"name",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,n=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"contact-email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactdata.email,expression:"contactdata.email"}],staticClass:"form-control",class:n,attrs:{id:"contact-email",type:"email",name:"信箱"},domProps:{value:t.contactdata.email},on:{input:function(a){a.target.composing||t.$set(t.contactdata,"email",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,n=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"contact-tel"}},[t._v("電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactdata.tel,expression:"contactdata.tel"}],staticClass:"form-control",class:n,attrs:{id:"contact-tel",type:"tel",name:"電話"},domProps:{value:t.contactdata.tel},on:{input:function(a){a.target.composing||t.$set(t.contactdata,"tel",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,n=a.classes;return[s("label",{staticClass:"text-left w-100",attrs:{for:"contact-message"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contactdata.message,expression:"contactdata.message"}],staticClass:"form-control",class:n,attrs:{name:"留言",id:"",cols:"30",rows:"3"},domProps:{value:t.contactdata.message},on:{input:function(a){a.target.composing||t.$set(t.contactdata,"message",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"btn-area right"},[s("button",{staticClass:"btn btn-primary rounded-pill btn-xl",attrs:{type:"submit",disabled:e}},[t._v("留言")])])])]}}])})],1)])])]),s("pagebottom")],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"position-relative banner"},[s("div",{staticClass:"position-absolute banner-prodbg"}),s("div",{staticClass:"container d-flex flex-column banner-body banner-body-prod"},[s("div",{staticClass:"row justify-content-center my-auto"},[s("div",{staticClass:"col-md-6 banner-textarea wow animate__fadeInDown",attrs:{"data-wow-duration":"1s"}},[s("h3",{staticClass:"banner-textarea__title"},[t._v("聯絡我們")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"contact"},[s("h4",{staticClass:"contact-title"},[t._v(" 跟我們說說? ")]),s("p",[t._v("有任何問題都歡迎透過電話或表單聯繫我們，表單聯繫會在三個工作天回覆您。")]),s("div",{staticClass:"contact-info"},[s("i",{staticClass:"fas fa-phone"}),t._v(" 電話：02-3456-7890 ")]),s("div",{staticClass:"contact-info"},[s("i",{staticClass:"far fa-clock"}),t._v(" 營業時間：10:00 ~ 22:00 ")]),s("div",{staticClass:"contact-info"},[s("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" 地址：新北市土城區海山路18號 (土城海山捷運站3號出口步行約3分鐘) ")])])])}],i=s("d178"),r=s("fd2d"),o={name:"Contact",components:{navbar:i["a"],pagebottom:r["a"]},data:function(){return{isLoading:!1,contactdata:{name:"",email:"",tel:"",message:""}}},methods:{sendMail:function(){var t=this;this.isLoading=!0,this.$bus.$emit("notice-user","成功寄出，我們將會在三個工作天內回覆您。"),setTimeout((function(){t.isLoading=!1}),2e3)}}},c=o,l=s("2877"),d=Object(l["a"])(c,e,n,!1,null,null,null);a["default"]=d.exports},fd2d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4 d-flex align-items-center"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),s("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/login"}},[t._v("管理者")])],1)])])])])},n=[],i={data:function(){return{}}},r=i,o=s("2877"),c=Object(o["a"])(r,e,n,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-0ee680fc.fd6742b4.js.map