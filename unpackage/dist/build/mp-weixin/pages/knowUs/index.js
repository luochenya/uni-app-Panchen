(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/knowUs/index"],{"0f26":function(n,t,o){"use strict";var a=o("2b1d"),e=o.n(a);e.a},"1b29":function(n,t,o){"use strict";var a={"top-navigation-bar":()=>o.e("components/top-navigation-bar/top-navigation-bar").then(o.bind(null,"0357")),"uni-swiper-dot":()=>o.e("components/uni-swiper-dot/uni-swiper-dot").then(o.bind(null,"6512"))},e=function(){var n=this,t=n.$createElement;n._self._c},i=[];o.d(t,"b",function(){return e}),o.d(t,"c",function(){return i}),o.d(t,"a",function(){return a})},"2b1d":function(n,t,o){},"7aee":function(n,t,o){"use strict";o.r(t);var a=o("1b29"),e=o("cf56");for(var i in e)"default"!==i&&function(n){o.d(t,n,function(){return e[n]})}(i);o("0f26");var s,r=o("f0c5"),l=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"3394a1d4",null,!1,a["a"],s);t["default"]=l.exports},cf56:function(n,t,o){"use strict";o.r(t);var a=o("fb81"),e=o.n(a);for(var i in a)"default"!==i&&function(n){o.d(t,n,function(){return a[n]})}(i);t["default"]=e.a},dbb3:function(n,t,o){"use strict";(function(n){o("bd03"),o("921b");a(o("66fd"));var t=a(o("7aee"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("543d")["createPage"])},fb81:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return o.e("components/top-navigation-bar/top-navigation-bar").then(o.bind(null,"0357"))},e={components:{topNavigationBar:a},data:function(){return{imgUrl:this.$imgUrl,info:[],company:[{text:"咱们",imgUrl:"../../static/knowUsImg/rollA.png"},{text:"想做的事",imgUrl:"../../static/knowUsImg/rollB.png"},{text:"名人说",imgUrl:"../../static/knowUsImg/rollC.png"},{text:"荣誉",imgUrl:"../../static/knowUsImg/rollD.png"},{text:"健康报",imgUrl:"../../static/knowUsImg/rollE.png"},{text:"问与答",imgUrl:"../../static/knowUsImg/rollF.png"}],novelty:[{text:"保健专场",imgUrl:"../../static/knowUsImg/NewThings1.png"},{text:"进口大牌",imgUrl:"../../static/knowUsImg/NewThings2.png"},{text:"199元任选3件",imgUrl:"../../static/knowUsImg/NewThings3.png"}],partner:[{imgUrl:"../../static/knowUsImg/brandA.png"},{imgUrl:"../../static/knowUsImg/brandB.png"},{imgUrl:"../../static/knowUsImg/brandC.png"},{imgUrl:"../../static/knowUsImg/brandD.png"}],current:0,mode:"default"}},onLoad:function(){this.gettingData()},methods:{toKnowUsGoodLuckPlan:function(){n.navigateTo({url:"../../pagesKnowUs/KnowUsGoodLuckPlan/KnowUsGoodLuckPlan"})},skipClick:function(t){"咱们"==t?n.navigateTo({url:"../../pagesKnowUs/KnowUsCompany/KnowUsCompany"}):"健康报"==t?n.navigateTo({url:"../../pagesKnowUs/KnowUsHealthConcept/KnowUsHealthConcept"}):"名人说"==t?n.navigateTo({url:"../../pagesKnowUs/KnowUsCelebritySays/KnowUsCelebritySays"}):"荣誉"==t?n.navigateTo({url:"../../pagesKnowUs/KnowsUsHonor/KnowsUsHonor"}):"问与答"==t?n.navigateTo({url:"../../pagesKnowUs/KnowUsCommonProblem/KnowUsCommonProblem"}):"想做的事"==t&&n.navigateTo({url:"../../pagesKnowUs/KnowUsInternationalNews/KnowUsInternationalNews"})},gettingData:function(){var t=this;n.showLoading({title:"加载中"}),this.$http.post("System/get_banner").then(function(o){n.hideLoading(),200==o.data.code?t.info=o.data.data:n.showToast({icon:"none",title:o.data.msg,duration:2e3})}).catch(function(n){console.log(n)})},change:function(n){this.current=n.detail.current},ringUp:function(){n.makePhoneCall({phoneNumber:"178326783",success:function(n){},fail:function(n){}})}}};t.default=e}).call(this,o("543d")["default"])}},[["dbb3","common/runtime","common/vendor"]]]);