(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71aa92fd"],{5812:function(t,s,i){t.exports=i.p+"img/cms_1.7be8efd0.jpg"},9783:function(t,s,i){"use strict";var a=i("f0b3"),c=i.n(a);c.a},bb51:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home",attrs:{id:"home",name:"home"}},[a("div",{staticClass:"block"},[a("el-carousel",{attrs:{height:"460px"}},t._l(t.carousel,(function(t){return a("el-carousel-item",{key:t.carousel_id},[a("img",{attrs:{src:i("5812"),alt:""}})])})),1)],1),a("div",{staticClass:"main-box"},[a("div",{staticClass:"main"},[a("div",{staticClass:"phone"},[t._m(0),a("div",{staticClass:"box-bd"},[a("div",{staticClass:"promo-list"},[a("router-link",{attrs:{to:""}},[a("img",{attrs:{src:t.$target+"public/imgs/phone/phone.png"}})])],1),a("div",{staticClass:"list"},[a("MyList",{attrs:{list:t.phoneList,isMore:!0}})],1)])]),a("div",{staticClass:"appliance",attrs:{id:"promo-menu"}},[a("div",{staticClass:"box-hd"},[a("div",{staticClass:"title"},[t._v("家电")]),a("div",{staticClass:"more",attrs:{id:"more"}},[a("MyMenu",{attrs:{val:2},on:{fromChild:t.getChildMsg}},[a("span",{attrs:{slot:"1"},slot:"1"},[t._v("热门")]),a("span",{attrs:{slot:"2"},slot:"2"},[t._v("电视影音")])])],1)]),a("div",{staticClass:"box-bd"},[a("div",{staticClass:"promo-list"},[a("ul",[a("li",[a("img",{attrs:{src:t.$target+"public/imgs/appliance/appliance-promo1.png"}})]),a("li",[a("img",{attrs:{src:t.$target+"public/imgs/appliance/appliance-promo2.png"}})])])]),a("div",{staticClass:"list"},[t._v("npm "),a("MyList",{attrs:{list:t.applianceList,isMore:!0}})],1)])]),a("div",{staticClass:"accessory",attrs:{id:"promo-menu"}},[a("div",{staticClass:"box-hd"},[a("div",{staticClass:"title"},[t._v("配件")]),a("div",{staticClass:"more",attrs:{id:"more"}},[a("MyMenu",{attrs:{val:3},on:{fromChild:t.getChildMsg2}},[a("span",{attrs:{slot:"1"},slot:"1"},[t._v("热门")]),a("span",{attrs:{slot:"2"},slot:"2"},[t._v("保护套")]),a("span",{attrs:{slot:"3"},slot:"3"},[t._v("充电器")])])],1)]),a("div",{staticClass:"box-bd"},[a("div",{staticClass:"promo-list"},[a("ul",[a("li",[a("img",{attrs:{src:t.$target+"public/imgs/accessory/accessory-promo1.png",alt:""}})]),a("li",[a("img",{attrs:{src:t.$target+"public/imgs/accessory/accessory-promo2.png",alt:""}})])])]),a("div",{staticClass:"list"},[a("MyList",{attrs:{list:t.accessoryList,isMore:!0}})],1)])])])])])},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box-hd"},[i("div",{staticClass:"title"},[t._v("手机")])])}],o=(i("d3b7"),{data:function(){return{carousel:"",phoneList:"",miTvList:"",applianceList:"",applianceHotList:"",accessoryList:"",accessoryHotList:"",protectingShellList:"",chargerList:"",applianceActive:1,accessoryActive:1}},watch:{applianceActive:function(t){""==this.applianceHotList&&(this.applianceHotList=this.applianceList),1!=t?2!=t||(this.applianceList=this.miTvList):this.applianceList=this.applianceHotList},accessoryActive:function(t){""==this.accessoryHotList&&(this.accessoryHotList=this.accessoryList),1!=t?2!=t?3!=t||(this.accessoryList=this.chargerList):this.accessoryList=this.protectingShellList:this.accessoryList=this.accessoryHotList}},created:function(){this.carousel=[{carousel_id:1,imgPath:"../assets/imgs/logo.png"},{carousel_id:2,imgPath:"https://pics4.baidu.com/feed/d1160924ab18972b6c071605639efb849f510aa4.jpeg@f_auto?token=8a1efcf6060cb3b7785b3de3ee081f82"}],this.getPromo("手机","phoneList"),this.getPromo("电视机","miTvList"),this.getPromo("保护套","protectingShellList"),this.getPromo("充电器","chargerList"),this.getPromo(["电视机","空调","洗衣机"],"applianceList","/api/product/getHotProduct"),this.getPromo(["保护套","保护膜","充电器","充电宝"],"accessoryList","/api/product/getHotProduct")},methods:{getChildMsg:function(t){this.applianceActive=t},getChildMsg2:function(t){this.accessoryActive=t},getPromo:function(t,s,i){var a=this;i=void 0!=i?i:"/api/product/getPromoProduct",this.$axios.post(i,{categoryName:t}).then((function(t){a[s]=t.data.Product})).catch((function(t){return Promise.reject(t)}))}}}),e=o,r=(i("9783"),i("2877")),l=Object(r["a"])(e,a,c,!1,null,"14ca458d",null);s["default"]=l.exports},f0b3:function(t,s,i){}}]);
//# sourceMappingURL=chunk-71aa92fd.1b5b47b6.js.map