(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesDealer/courseDetails/courseDetails"],{"0824":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{imgUrl:this.$imgUrl,courseList:[]}},onLoad:function(t){this.gettingData(t.id)},methods:{gettingData:function(n){var e=this;t.showLoading({title:"加载中"}),this.$http.post("System/get_courses_details",'\r\n--XXX\r\nContent-Disposition: form-data; name="id"\r\n\r\n'+n+"\r\n--XXX--").then(function(n){t.hideLoading(),200==n.data.code?e.courseList=n.data.data:t.showToast({icon:"none",title:n.data.msg,duration:2e3})}).catch(function(t){console.log(t)})}}};n.default=e}).call(this,e("543d")["default"])},3963:function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return a})},"3b21":function(t,n,e){},"619b":function(t,n,e){"use strict";e.r(n);var a=e("3963"),o=e("80d7");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("9bdb");var u,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"64358b66",null,!1,a["a"],u);n["default"]=c.exports},"80d7":function(t,n,e){"use strict";e.r(n);var a=e("0824"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},"9bdb":function(t,n,e){"use strict";var a=e("3b21"),o=e.n(a);o.a},ea42:function(t,n,e){"use strict";(function(t){e("bd03"),e("921b");a(e("66fd"));var n=a(e("619b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["ea42","common/runtime","common/vendor"]]]);