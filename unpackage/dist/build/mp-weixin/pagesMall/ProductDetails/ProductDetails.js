(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesMall/ProductDetails/ProductDetails"],{1351:function(t,n,o){"use strict";o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return e})),o.d(n,"a",(function(){return i}));var i={topNavigation:function(){return o.e("components/top-navigation/top-navigation").then(o.bind(null,"929a"))},uniSwiperDot:function(){return o.e("components/uni-swiper-dot/uni-swiper-dot").then(o.bind(null,"331b"))}},a=function(){var t=this,n=t.$createElement;t._self._c},e=[]},"4d06":function(t,n,o){"use strict";(function(t){o("fd9e");i(o("66fd"));var n=i(o("c56e"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"8c90":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{num:1,imgUrl:this.$imgUrl,current:0,goods_id:"",dataForm:{},stockStatus:!1}},onLoad:function(t){this.goods_id=t.id,this._getGoodsRead()},computed:{cartCount:function(){return this.$store.state.cart.cartCount}},watch:{num:function(){this.num>this.dataForm.stock?this.stockStatus=!0:this.stockStatus=!1}},methods:{_getGoodsRead:function(){var n=this;t.showLoading({title:"加载中"}),this.$member.post("Order/get_goods_read",{goods_id:this.goods_id}).then((function(o){t.hideLoading(),200==o.data.code?(n.dataForm=o.data.data,o.data.stock<=1?n.stockStatus=!0:n.stockStatus=!1):t.showToast({icon:"none",title:o.data.msg,duration:2e3})})).catch((function(t){}))},addCart:function(n,o){var i=this;t.showLoading({title:"加载中"});var a={goods_id:n,quantity:this.num};this.$member.post("Order/add_cart",a).then((function(n){t.hideLoading(),200==n.data.code?(i.$store.commit("cart/setCartCount",n.data.data.sum),t.showToast({icon:"none",title:n.data.msg,duration:2e3}),1==o&&t.redirectTo({url:"../ShoppingCart/ShoppingCart"})):t.showToast({icon:"none",title:n.data.msg,duration:2e3})})).catch((function(t){}))},addWishlist:function(n,o){var i=this;t.showLoading({title:"加载中"});var a={goods_id:n,type:o};this.$member.post("Order/add_to_wishlist",a).then((function(n){t.hideLoading(),t.showToast({icon:"none",title:n.data.msg,duration:2e3}),200==n.data.code&&(i.dataForm.is_collect=2==o?0:1)}))},toShoppingCart:function(){t.redirectTo({url:"../ShoppingCart/ShoppingCart"})},returnClick:function(){t.navigateBack({delta:1})},change:function(t){this.current=t.detail.current},lessClick:function(){if(1==this.num)return!1;this.num--},addClick:function(){this.num++}}};n.default=o}).call(this,o("543d")["default"])},af4e:function(t,n,o){},c56e:function(t,n,o){"use strict";o.r(n);var i=o("1351"),a=o("d314");for(var e in a)"default"!==e&&function(t){o.d(n,t,(function(){return a[t]}))}(e);o("d671");var d,r=o("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5db4815c",null,!1,i["a"],d);n["default"]=u.exports},d314:function(t,n,o){"use strict";o.r(n);var i=o("8c90"),a=o.n(i);for(var e in i)"default"!==e&&function(t){o.d(n,t,(function(){return i[t]}))}(e);n["default"]=a.a},d671:function(t,n,o){"use strict";var i=o("af4e"),a=o.n(i);a.a}},[["4d06","common/runtime","common/vendor"]]]);