(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-207d675a"],{"833b":function(t,e,i){"use strict";var r=i("8b50"),s=i.n(r);s.a},"8b50":function(t,e,i){},"9f52":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"details"}},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"title"},[i("p",[t._v(t._s(t.productDetails.product_name))]),i("div",{staticClass:"list"},[i("ul",[i("li",[i("router-link",{attrs:{to:""}},[t._v("概述")])],1),i("li",[i("router-link",{attrs:{to:""}},[t._v("参数")])],1),i("li",[i("router-link",{attrs:{to:""}},[t._v("用户评价")])],1)])])])]),i("div",{staticClass:"main"},[i("div",{staticClass:"block"},[t.productPicture.length>1?i("el-carousel",{attrs:{height:"560px"}},t._l(t.productPicture,(function(e){return i("el-carousel-item",{key:e.id},[i("img",{staticStyle:{height:"560px"},attrs:{src:t.$target+e.product_picture,alt:e.intro}})])})),1):t._e(),1==t.productPicture.length?i("div",[i("img",{staticStyle:{height:"560px"},attrs:{src:t.$target+t.productPicture[0].product_picture,alt:t.productPicture[0].intro}})]):t._e()],1),i("div",{staticClass:"content"},[i("h1",{staticClass:"name"},[t._v(t._s(t.productDetails.product_name))]),i("p",{staticClass:"intro"},[t._v(t._s(t.productDetails.product_intro))]),i("p",{staticClass:"store"},[t._v("小米自营")]),i("div",{staticClass:"price"},[i("span",[t._v(t._s(t.productDetails.product_selling_price)+"元")]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.productDetails.product_price!=t.productDetails.product_selling_price,expression:"productDetails.product_price != productDetails.product_selling_price"}],staticClass:"del"},[t._v(t._s(t.productDetails.product_price)+"元")])]),i("div",{staticClass:"pro-list"},[i("span",{staticClass:"pro-name"},[t._v(t._s(t.productDetails.product_name))]),i("span",{staticClass:"pro-price"},[i("span",[t._v(t._s(t.productDetails.product_selling_price)+"元")]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.productDetails.product_price!=t.productDetails.product_selling_price,expression:"productDetails.product_price != productDetails.product_selling_price"}],staticClass:"pro-del"},[t._v(t._s(t.productDetails.product_price)+"元")])]),i("p",{staticClass:"price-sum"},[t._v("总计 : "+t._s(t.productDetails.product_selling_price)+"元")])]),i("div",{staticClass:"button"},[i("el-button",{staticClass:"shop-cart",attrs:{disabled:t.dis},on:{click:t.addShoppingCart}},[t._v("加入购物车")]),i("el-button",{staticClass:"like",on:{click:t.addCollect}},[t._v("喜欢")])],1),t._m(0)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pro-policy"},[i("ul",[i("li",[i("i",{staticClass:"el-icon-circle-check"}),t._v(" 小米自营 ")]),i("li",[i("i",{staticClass:"el-icon-circle-check"}),t._v(" 小米发货 ")]),i("li",[i("i",{staticClass:"el-icon-circle-check"}),t._v(" 7天无理由退货 ")]),i("li",[i("i",{staticClass:"el-icon-circle-check"}),t._v(" 7天价格保护 ")])])])}],c=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("159b"),i("ade3")),a=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(c["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var n={data:function(){return{dis:!1,productID:"",productDetails:"",productPicture:""}},activated:function(){void 0!=this.$route.query.productID&&(this.productID=this.$route.query.productID)},watch:{productID:function(t){this.getDetails(t),this.getDetailsPicture(t)}},methods:u({},Object(a["b"])(["unshiftShoppingCart","addShoppingCartNum"]),{getDetails:function(t){var e=this;this.$axios.post("/api/product/getDetails",{productID:t}).then((function(t){e.productDetails=t.data.Product[0]})).catch((function(t){return Promise.reject(t)}))},getDetailsPicture:function(t){var e=this;this.$axios.post("/api/product/getDetailsPicture",{productID:t}).then((function(t){e.productPicture=t.data.ProductPicture})).catch((function(t){return Promise.reject(t)}))},addShoppingCart:function(){var t=this;this.$store.getters.getUser?this.$axios.post("/api/user/shoppingCart/addShoppingCart",{user_id:this.$store.getters.getUser.user_id,product_id:this.productID}).then((function(e){switch(e.data.code){case"001":t.unshiftShoppingCart(e.data.shoppingCartData[0]),t.notifySucceed(e.data.msg);break;case"002":t.addShoppingCartNum(t.productID),t.notifySucceed(e.data.msg);break;case"003":t.dis=!0,t.notifyError(e.data.msg);break;default:t.notifyError(e.data.msg)}})).catch((function(t){return Promise.reject(t)})):this.$store.dispatch("setShowLogin",!0)},addCollect:function(){var t=this;this.$store.getters.getUser?this.$axios.post("/api/user/collect/addCollect",{user_id:this.$store.getters.getUser.user_id,product_id:this.productID}).then((function(e){"001"==e.data.code?t.notifySucceed(e.data.msg):t.notifyError(e.data.msg)})).catch((function(t){return Promise.reject(t)})):this.$store.dispatch("setShowLogin",!0)}})},p=n,d=(i("833b"),i("2877")),l=Object(d["a"])(p,r,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-207d675a.9d2d817f.js.map