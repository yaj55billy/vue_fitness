(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6109030c"],{1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:t.pagedata.current_page-1===0},attrs:{disabled:t.pagedata.current_page-1===0}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.nowPage(t.pagedata.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagedata.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:e===t.pagedata.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.nowPage(e)}}},[t._v(t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:t.pagedata.current_page===t.pagedata.total_pages},attrs:{disabled:t.pagedata.current_page===t.pagedata.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.nowPage(t.pagedata.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],s={data:function(){return{}},props:["pagedata"],methods:{nowPage:function(t){this.$emit("update",t)}}},r=s,c=a("2877"),d=Object(c["a"])(r,o,i,!1,null,null,null);e["a"]=d.exports},"99af":function(t,e,a){"use strict";var o=a("23e7"),i=a("d039"),s=a("e8b5"),r=a("861d"),c=a("7b0b"),d=a("50c4"),n=a("8418"),l=a("65f0"),u=a("1dde"),p=a("b622"),m=a("2d00"),g=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=m>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),f=u("concat"),_=function(t){if(!r(t))return!1;var e=t[g];return void 0!==e?!!e:s(t)},P=!b||!f;o({target:"Array",proto:!0,forced:P},{concat:function(t){var e,a,o,i,s,r=c(this),u=l(r,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?r:arguments[e],_(s)){if(i=d(s.length),p+i>v)throw TypeError(h);for(a=0;a<i;a++,p++)a in s&&n(u,p,s[a])}else{if(p>=v)throw TypeError(h);n(u,p++,s)}return u.length=p,u}})},d416:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("h2",[t._v("產品列表")]),a("div",{staticClass:"text-right mt-sm-2 mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("new")}}},[t._v(" 建立新的產品 ")])]),a("table",{staticClass:"table table-admin table-rwd mt-3"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",{attrs:{"data-th":"分類"}},[t._v(t._s(e.category))]),a("td",{attrs:{"data-th":"產品名稱"}},[t._v(t._s(e.title))]),a("td",{attrs:{"data-th":"原價"}},[t._v(t._s(t._f("toThousands")(e.origin_price)))]),a("td",{attrs:{"data-th":"售價"}},[t._v(t._s(t._f("toThousands")(e.price)))]),a("td",{attrs:{"data-th":"是否啟用"}},[e.enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",{attrs:{"data-th":"編輯"}},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal("edit",e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal("delete",e)}}},[t._v("刪除")])])])])})),0)]),a("pagination",{attrs:{pagedata:t.pagination},on:{update:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.tempProduct.id?a("span",[t._v("編輯 "+t._s(t.tempProduct.title))]):a("span",[t._v("新增產品")])]),t._m(1)]),a("div",{staticClass:"modal-body text-left"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[t._l(3,(function(e){return a("div",{key:e+"img",staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl_"+(e-1)}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[e-1],expression:"tempProduct.imageUrl[item-1]"}],staticClass:"form-control",attrs:{id:"imageUrl_"+(e-1),type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[e-1]},on:{input:function(a){a.target.composing||t.$set(t.tempProduct.imageUrl,e-1,a.target.value)}}})])})),a("div",{staticClass:"form-group"},[t._v(" 上傳圖片 "),t.fileUpLoading?a("div",{staticClass:"spinner-border text-primary",staticStyle:{width:"12px",height:"12px"},attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),a("input",{staticClass:"form-control h-auto",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._l(3,(function(e){return a("div",{key:e+"img-show"},[a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl[e-1],alt:"課程示意: "+t.tempProduct.title}})])}))],2),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],staticClass:"form-check-input",attrs:{id:"enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,null)>-1:t.tempProduct.enabled},on:{change:function(e){var a=t.tempProduct.enabled,o=e.target,i=!!o.checked;if(Array.isArray(a)){var s=null,r=t._i(a,s);o.checked?r<0&&t.$set(t.tempProduct,"enabled",a.concat([s])):r>-1&&t.$set(t.tempProduct,"enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateData}},[t._v(" 確認 ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteProduct}},[t._v(" 確認刪除 ")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"160"}},[t._v("分類")]),a("th",{attrs:{width:"780"}},[t._v("產品名稱")]),a("th",{attrs:{width:"100"}},[t._v("原價")]),a("th",{attrs:{width:"100"}},[t._v("售價")]),a("th",{attrs:{width:"160"}},[t._v("是否啟用")]),a("th",{attrs:{width:"140"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=(a("99af"),a("1799")),r={components:{pagination:s["a"]},data:function(){return{products:[],pagination:{},tempProduct:{imageUrl:[]},fileUpLoading:!1,isLoading:!1}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/products?page=").concat(e);this.axios.get(a).then((function(e){t.products=e.data.data,t.pagination=e.data.meta.pagination,t.isLoading=!1})),this.tempProduct.id,this.tempProduct={imageUrl:[]}},openModal:function(t,e){var a=this;if("new"===t)this.tempProduct={imageUrl:[]},$("#productModal").modal("show");else if("edit"===t){this.isLoading=!0;var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/product/").concat(e.id);this.axios.get(o).then((function(t){a.tempProduct=t.data.data,$("#productModal").modal("show"),a.isLoading=!1}))}else if("delete"===t){this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/product/").concat(e.id);this.axios.get(i).then((function(t){a.tempProduct=t.data.data,$("#delProductModal").modal("show"),a.isLoading=!1}))}},updateData:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/product"),a="post",o="產品新增成功",i="產品新增失敗，請再檢查看看";this.tempProduct.id&&(e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/product/").concat(this.tempProduct.id),a="patch",o="產品編輯成功",i="產品編輯失敗，請再檢查看看"),this.axios[a](e,this.tempProduct).then((function(){$("#productModal").modal("hide"),t.$bus.$emit("notice-user",o),t.isLoading=!1,t.getProducts()})).catch((function(){t.isLoading=!1,$("#productModal").modal("hide"),t.$bus.$emit("notice-user",i)}))},deleteProduct:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/ec/product/").concat(this.tempProduct.id);this.axios.delete(e).then((function(){$("#delProductModal").modal("hide"),t.$bus.$emit("notice-user","產品已刪除"),t.isLoading=!1,t.getProducts()})).catch((function(){t.isLoading=!1,$("#delProductModal").modal("hide"),t.$bus.$emit("notice-user","產品刪除失敗，請再檢查看看")}))},uploadFile:function(){var t=this;this.fileUpLoading=!0;var e=document.querySelector("#customFile").files[0],a=new FormData;a.append("file",e);var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("e6527241-dd52-4bd8-94eb-eb0e02127c72","/admin/storage");this.axios.post(o,a,{header:{"Content-Type":"multipart/form-data"}}).then((function(e){t.fileUpLoading=!1,200===e.status&&t.tempProduct.imageUrl.push(e.data.data.path),document.querySelector("#customFile").value=""})).catch((function(){t.$bus.$emit("notice-user","檔案上傳失敗，請再檢查是不是檔案大小超過 2MB"),t.fileUpLoading=!1}))}}},c=r,d=a("2877"),n=Object(d["a"])(c,o,i,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-6109030c.f8c9ed3c.js.map