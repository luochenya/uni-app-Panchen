(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesMember/MemberNutritiousFoodDetails/MemberNutritiousFoodDetails"],{8671:function(t,n,e){"use strict";(function(t){e("bd03"),e("921b");u(e("66fd"));var n=u(e("c976"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"8e34":function(t,n,e){},a1cb:function(t,n,e){"use strict";e.r(n);var u=e("add6"),o=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=o.a},adbf:function(t,n,e){"use strict";var u=e("8e34"),o=e.n(u);o.a},add6:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{url:""}},onLoad:function(t){this.url=this.$imgUrl+t.edm},methods:{toSave:function(){var n=this;t.showModal({title:"图片保存",content:"确定要保存图片吗",success:function(t){t["confirm"]&&n.save()}})},save:function(){t.getImageInfo({src:this.url,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(){console.log("save success"),t.showToast({title:"图片保存成功",icon:"none",duration:2200})}})}})}}};n.default=e}).call(this,e("543d")["default"])},c976:function(t,n,e){"use strict";e.r(n);var u=e("f8f0"),o=e("a1cb");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("adbf");var a,i=e("f0c5"),r=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=r.exports},f8f0:function(t,n,e){"use strict";var u,o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return u})}},[["8671","common/runtime","common/vendor"]]]);