(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesMember/MemberLatestNews/MemberLatestNews"],{"159a":function(t,e,n){"use strict";var o=n("8f5a"),a=n.n(o);a.a},"5c17":function(t,e,n){"use strict";(function(t){n("fd9e");o(n("66fd"));var e=o(n("9071"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},6704:function(t,e,n){"use strict";n.r(e);var o=n("c988"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"8f5a":function(t,e,n){},9071:function(t,e,n){"use strict";n.r(e);var o=n("e41e"),a=n("6704");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("159a");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=u.exports},c988:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{current:0,imgUrl:this.$imgUrl,info:"",dataFormList:[]}},onLoad:function(){this._getMembersNewsBannerList(),this._getMembersNewsList()},methods:{change:function(t){this.current=t.detail.current},_getMembersNewsBannerList:function(){var e=this;t.showLoading({title:"加载中"}),this.$member.post("Store/get_members_news_banner_list").then((function(n){t.hideLoading(),200==n.data.code?e.info=n.data.data:t.showToast({icon:"none",title:n.data.msg,duration:2e3})})).catch((function(t){console.log(t)}))},_getMembersNewsList:function(){var e=this;t.showLoading({title:"加载中"}),this.$member.post("Store/get_members_news_list").then((function(n){t.hideLoading(),200==n.data.code?e.dataFormList=n.data.data:t.showToast({icon:"none",title:n.data.msg,duration:2e3})})).catch((function(t){console.log(t)}))},toMemberLatestNewsContent:function(e){var n=JSON.stringify(e);t.navigateTo({url:"../../pagesMember/MemberLatestNewsContent/MemberLatestNewsContent?items="+n})}}};e.default=n}).call(this,n("543d")["default"])},e41e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uniSwiperDot:function(){return n.e("components/uni-swiper-dot/uni-swiper-dot").then(n.bind(null,"331b"))}},a=function(){var t=this,e=t.$createElement;t._self._c},i=[]}},[["5c17","common/runtime","common/vendor"]]]);