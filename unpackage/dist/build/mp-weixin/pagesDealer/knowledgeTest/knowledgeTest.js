(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesDealer/knowledgeTest/knowledgeTest"],{"2d0d":function(t,n,e){"use strict";var a=e("dabf"),o=e.n(a);o.a},9475:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{knowledgeTeseList:[],backgroundImage:"../../static/knowUsImg/nCarouselA.png"}},onLoad:function(t){},mounted:function(){this.gettingData()},methods:{gettingData:function(){var n=this;t.showLoading({title:"加载中"}),this.$http.post("System/get_exam_question_list").then(function(e){t.hideLoading(),200==e.data.code?n.knowledgeTeseList=e.data.data:t.showToast({icon:"none",title:e.data.msg,duration:2e3})}).catch(function(t){console.log(t)})},beginTesting:function(n,e){t.navigateTo({url:"../quiz/quiz?id="+n+"&title="+e})}}};n.default=e}).call(this,e("543d")["default"])},"9c68":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return a})},c995:function(t,n,e){"use strict";e.r(n);var a=e("9475"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a},cf2b:function(t,n,e){"use strict";(function(t){e("015d"),e("921b");a(e("66fd"));var n=a(e("d04b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d04b:function(t,n,e){"use strict";e.r(n);var a=e("9c68"),o=e("c995");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("2d0d");var i,c=e("f0c5"),d=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=d.exports},dabf:function(t,n,e){}},[["cf2b","common/runtime","common/vendor"]]]);