(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfacee84"],{1799:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:t.pagedata.current_page-1===0},attrs:{disabled:t.pagedata.current_page-1===0}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.nowPage(t.pagedata.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagedata.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.pagedata.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.nowPage(a)}}},[t._v(t._s(a)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:t.pagedata.current_page===t.pagedata.total_pages},attrs:{disabled:t.pagedata.current_page===t.pagedata.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.nowPage(t.pagedata.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],r={data:function(){return{}},props:["pagedata"],methods:{nowPage:function(t){this.$emit("update",t)}}},s=r,c=e("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);a["a"]=d.exports},"7a90":function(t,a,e){"use strict";var n=e("c118"),i=e.n(n);i.a},"99af":function(t,a,e){"use strict";var n=e("23e7"),i=e("d039"),r=e("e8b5"),s=e("861d"),c=e("7b0b"),d=e("50c4"),o=e("8418"),p=e("65f0"),u=e("1dde"),l=e("b622"),g=e("2d00"),h=l("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",_=g>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=u("concat"),m=function(t){if(!s(t))return!1;var a=t[h];return void 0!==a?!!a:r(t)},x=!_||!b;n({target:"Array",proto:!0,forced:x},{concat:function(t){var a,e,n,i,r,s=c(this),u=p(s,0),l=0;for(a=-1,n=arguments.length;a<n;a++)if(r=-1===a?s:arguments[a],m(r)){if(i=d(r.length),l+i>f)throw TypeError(v);for(e=0;e<i;e++,l++)e in r&&o(u,l,r[e])}else{if(l>=f)throw TypeError(v);o(u,l++,r)}return u.length=l,u}})},c118:function(t,a,e){},da25:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-4"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("h2",[t._v("訂單列表")]),e("table",{staticClass:"table table-admin table-rwd mt-4"},[t._m(0),e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("td",{attrs:{"data-th":"下單時間"}},[t._v(t._s(a.created.datetime))]),e("td",{attrs:{"data-th":"購買款項"}},[t._v(t._s(a.products[0].product.title))]),e("td",{attrs:{"data-th":"付款方式"}},[t._v(t._s(a.payment))]),e("td",{attrs:{"data-th":"應付金額"}},[t._v(t._s(t._f("toThousands")(a.amount)))]),e("td",{attrs:{"data-th":"是否付款"}},[e("input",{attrs:{type:"checkbox",id:a.id},domProps:{checked:a.paid},on:{change:function(e){return t.changePaidStatus(a)}}}),e("label",{attrs:{for:a.id}},[a.paid?e("span",{staticClass:"text-success"},[t._v(" 已付款 ")]):e("span",[t._v(" 尚未付款 ")])]),t.paidLoading?e("div",{staticClass:"spinner-border text-primary",staticStyle:{width:"12px",height:"12px"},attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()])])})),0)]),e("pagination",{attrs:{pagedata:t.pagination},on:{update:t.getOrders}})],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")])])])}],r=(e("99af"),e("1799")),s={components:{pagination:r["a"]},data:function(){return{orders:[],pagination:{},isLoading:!1,paidLoading:!1}},props:["token"],created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/orders?page=").concat(a);this.axios.get(e).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1}))},changePaidStatus:function(t){var a=this;if(t.paid){this.paidLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/orders/").concat(t.id,"/unpaid");this.axios.patch(e,t.id).then((function(){a.paidLoading=!1,a.$bus.$emit("notice-user","此筆訂單修改為: 尚未付款"),a.getOrders()}))}else{this.paidLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/orders/").concat(t.id,"/paid");this.axios.patch(n,t.id).then((function(){a.paidLoading=!1,a.$bus.$emit("notice-user","此筆訂單修改為: 已付款"),a.getOrders()}))}}}},c=s,d=(e("7a90"),e("2877")),o=Object(d["a"])(c,n,i,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-dfacee84.d09f3b91.js.map