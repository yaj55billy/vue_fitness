(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9b5c1fc"],{"99af":function(t,a,s){"use strict";var n=s("23e7"),e=s("d039"),i=s("e8b5"),r=s("861d"),c=s("7b0b"),o=s("50c4"),l=s("8418"),u=s("65f0"),d=s("1dde"),v=s("b622"),b=s("2d00"),f=v("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",C=b>=51||!e((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),_=function(t){if(!r(t))return!1;var a=t[f];return void 0!==a?!!a:i(t)},g=!C||!m;n({target:"Array",proto:!0,forced:g},{concat:function(t){var a,s,n,e,i,r=c(this),d=u(r,0),v=0;for(a=-1,n=arguments.length;a<n;a++)if(i=-1===a?r:arguments[a],_(i)){if(e=o(i.length),v+e>p)throw TypeError(h);for(s=0;s<e;s++,v++)s in i&&l(d,v,i[s])}else{if(v>=p)throw TypeError(h);l(d,v++,i)}return d.length=v,d}})},"9cbb":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("navbar"),t._m(0),t._m(1),s("Footer")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"position-relative banner"},[s("div",{staticClass:"position-absolute banner-prodbg"}),s("div",{staticClass:"container d-flex flex-column banner-body banner-body-prod"},[s("div",{staticClass:"row justify-content-center my-auto"},[s("div",{staticClass:"col-md-6 banner-textarea wow animate__fadeInDown",attrs:{"data-wow-duration":"1s"}},[s("h3",{staticClass:"banner-textarea__title"},[t._v("關於我們")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-6 mb-6"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"home-title"},[t._v(" 經營理念 ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("img",{staticClass:"img-fluid wow animate__fadeIn",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/shcmC7WhOjZFX3wksjAU5jqI1fYxntSCzcoEolKucbSd6AXbFhkUsoTjQfeHo2LPrcF1MXz1LscEfGKKpIyg5JFf7WWdBGolySlCPZ6VtstexHFyw5OBiG3mb6RMAUup.jpg",alt:"教練",title:"Tony 教練","data-wow-duration":".5s"}})]),s("div",{staticClass:"col-md-8 m-auto text-left wow animate__fadeIn",attrs:{"data-wow-duration":".5s"}},[s("h4",{staticClass:"mt-4"},[t._v("關於 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")])]),s("p",{staticClass:"text-muted"},[t._v(" 現在的社會相當便利，運用科技就能達成許多事情，像是網購各式各樣的物品、或者是最近很火紅的外送平台， 我們在螢幕點個幾下就能訂購到想吃的食物；而這麼便利的社會也帶來很多的副作用，大家的活動量越來越少 (同一時間我們的飲食越來越精緻)，加上資訊爆炸帶來許多不太正確的運動、飲食知識，而這些狀況直接或間接的讓健康亮起了紅燈，並且影響年齡有越來越年輕的趨勢。 "),s("br"),s("br"),t._v(" 提到了影響年齡越來越年輕，也不得不提到台灣在 2017 年老年人口數首度多於幼年人口，在 2018 年老年人口達到 14.05% 成為高齡社會。 年紀越來越大本身並不是什麼問題，而是在隨著年紀不斷提升時， 身體所流失的營養(像是骨骼跟肌肉)，而這些流失有時會慢慢伴隨著失能問題，可以試想為何老人家會比較容易跌倒? 而這個族群也更需要正確的運動、飲食知識。 "),s("br"),s("br"),t._v(" 從整個社會結構中，我們可以知道不論是哪個族群(年齡)，都是需要正確的運動、飲食知識，讓我們的身體更加強壯避免掉許多身體狀況，而 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" 希望藉由這樣的運動空間，盡力讓大家了解正確的運動知識、飲食觀念，並期望能幫助到更多的人。 ")])])])])])}],i=s("d178"),r=s("fd2d"),c={components:{navbar:i["a"],Footer:r["a"]},data:function(){return{}}},o=c,l=s("2877"),u=Object(l["a"])(o,n,e,!1,null,null,null);a["default"]=u.exports},d178:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow"},[s("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" FitSpace ")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/products"}},[t._v(" 課程列表 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/qa"}},[t._v(" 常見問題 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/contact"}},[t._v(" 聯絡我們 ")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),s("span",{staticClass:"badge badge-light"},[t._v(t._s(t.carts.length))])])],1)])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i=(s("99af"),{data:function(){return{carts:[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart-num",(function(){t.getCart()}))},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data})).catch((function(){t.carts=0}))}}}),r=i,c=s("2877"),o=Object(c["a"])(r,n,e,!1,null,null,null);a["a"]=o.exports},fd2d:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-dark"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4 d-flex align-items-center"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Copyright © 2020 "),s("span",{staticClass:"font-ubuntu"},[t._v("FitSpace")]),t._v(" All Rights Reserved. | 僅個人學習，無任何商業用途 "),s("router-link",{staticClass:"btn btn-sm btn-outline-light ml-2",attrs:{to:"/login"}},[t._v("管理者")])],1)])])])])},e=[],i={data:function(){return{}}},r=i,c=s("2877"),o=Object(c["a"])(r,n,e,!1,null,null,null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-a9b5c1fc.ebb56827.js.map