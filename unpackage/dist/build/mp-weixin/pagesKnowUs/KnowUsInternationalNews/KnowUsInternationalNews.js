(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesKnowUs/KnowUsInternationalNews/KnowUsInternationalNews"],{"1bef":function(n,t,e){"use strict";e.r(t);var a=e("4e7f"),i=e("9e58");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("70b5");var r,u=e("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=s.exports},"1d2f":function(n,t,e){"use strict";(function(n){e("fd9e");a(e("66fd"));var t=a(e("1bef"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"4e7f":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={topNavigation:function(){return e.e("components/top-navigation/top-navigation").then(e.bind(null,"929a"))},uniSwiperDot:function(){return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"331b"))}},i=function(){var n=this,t=n.$createElement;n._self._c},o=[]},"70b5":function(n,t,e){"use strict";var a=e("9008"),i=e.n(a);i.a},9008:function(n,t,e){},"9e58":function(n,t,e){"use strict";e.r(t);var a=e("bff1"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},bff1:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{imgUrl:this.$imgUrl,current:0,bannerList:[],dataFormList:[]}},mounted:function(){this.getInternationalBanner(),this.getInternational()},methods:{returnClick:function(){n.navigateBack({delta:1})},getInternationalBanner:function(){var t=this;n.showLoading({title:"加载中"}),this.$http.post("Visitor/get_international_banner").then((function(e){n.hideLoading(),200==e.data.code?t.bannerList=e.data.data:n.showToast({icon:"none",title:e.data.msg,duration:2e3})}))},getInternational:function(){var t=this;n.showLoading({title:"加载中"}),this.$http.post("Visitor/get_international").then((function(e){n.hideLoading(),200==e.data.code?t.dataFormList=e.data.data:n.showToast({icon:"none",title:e.data.msg,duration:2e3})}))},change:function(n){this.current=n.detail.current},skipClick:function(t){var e=JSON.stringify(t);n.navigateTo({url:"../../pagesKnowUs/KnowUsInternationalNewss/KnowUsInternationalNewss?item="+e})}}};t.default=e}).call(this,e("543d")["default"])}},[["1d2f","common/runtime","common/vendor"]]]);