(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/knowUs/index"],{"1e63":function(t,n,i){"use strict";(function(t){i("015d"),i("921b");o(i("66fd"));var n=o(i("bc65"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},9019:function(t,n,i){"use strict";var o={"top-navigation-bar":()=>i.e("components/top-navigation-bar/top-navigation-bar").then(i.bind(null,"bd93")),"uni-swiper-dot":()=>i.e("components/uni-swiper-dot/uni-swiper-dot").then(i.bind(null,"f15b"))},e=function(){var t=this,n=t.$createElement;t._self._c},a=[];i.d(n,"b",function(){return e}),i.d(n,"c",function(){return a}),i.d(n,"a",function(){return o})},bc65:function(t,n,i){"use strict";i.r(n);var o=i("9019"),e=i("cf27");for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);i("f5ae");var r,c=i("f0c5"),s=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,"4b485208",null,!1,o["a"],r);n["default"]=s.exports},cf27:function(t,n,i){"use strict";i.r(n);var o=i("e4de"),e=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);n["default"]=e.a},db0e:function(t,n,i){},e4de:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return i.e("components/top-navigation-bar/top-navigation-bar").then(i.bind(null,"bd93"))},e={components:{topNavigationBar:o},data:function(){return{imgUrl:this.$imgUrl,info:[],company:[{text:"关于公司",imgUrl:"../../static/knowUsImg/rollA.png"},{text:"理念",imgUrl:"../../static/knowUsImg/rollB.png"},{text:"名人语录",imgUrl:"../../static/knowUsImg/rollC.png"},{text:"荣誉",imgUrl:"../../static/knowUsImg/rollD.png"},{text:"标题",imgUrl:"../../static/knowUsImg/rollE.png"},{text:"内容",imgUrl:"../../static/knowUsImg/rollA.png"}],novelty:[{text:"保健专场",imgUrl:"../../static/knowUsImg/noveltyA.png"},{text:"进口大牌",imgUrl:"../../static/knowUsImg/noveltyB.png"},{text:"强身健体",imgUrl:"../../static/knowUsImg/noveltyA.png"},{text:"保健专场",imgUrl:"../../static/knowUsImg/noveltyB.png"},{text:"进口大牌",imgUrl:"../../static/knowUsImg/noveltyA.png"},{text:"强身健体",imgUrl:"../../static/knowUsImg/noveltyB.png"}],partner:[{imgUrl:"../../static/knowUsImg/brandA.png"},{imgUrl:"../../static/knowUsImg/brandB.png"},{imgUrl:"../../static/knowUsImg/brandC.png"},{imgUrl:"../../static/knowUsImg/brandA.png"},{imgUrl:"../../static/knowUsImg/brandB.png"},{imgUrl:"../../static/knowUsImg/brandC.png"}],current:0,mode:"default"}},onLoad:function(){this.gettingData()},methods:{gettingData:function(){var n=this;t.showLoading({title:"加载中"}),this.$http.post("System/get_banner").then(function(i){t.hideLoading(),200==i.data.code?n.info=i.data.data:t.showToast({icon:"none",title:i.data.msg,duration:2e3})}).catch(function(t){console.log(t)})},change:function(t){this.current=t.detail.current},ringUp:function(){t.makePhoneCall({phoneNumber:"178326783",success:function(t){},fail:function(t){}})}}};n.default=e}).call(this,i("543d")["default"])},f5ae:function(t,n,i){"use strict";var o=i("db0e"),e=i.n(o);e.a}},[["1e63","common/runtime","common/vendor"]]]);