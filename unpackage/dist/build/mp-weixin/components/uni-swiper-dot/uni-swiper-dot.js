(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-swiper-dot/uni-swiper-dot"],{"331b":function(t,e,n){"use strict";n.r(e);var o=n("e0bc"),i=n("cff5");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("f23e");var s,d=n("f0c5"),u=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"c112db7a",null,!1,o["a"],s);e["default"]=u.exports},"5a04":function(t,e,n){},ae6c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=o},cff5:function(t,e,n){"use strict";n.r(e);var o=n("ae6c"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},e0bc:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},f23e:function(t,e,n){"use strict";var o=n("5a04"),i=n.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-swiper-dot/uni-swiper-dot-create-component',
    {
        'components/uni-swiper-dot/uni-swiper-dot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("331b"))
        })
    },
    [['components/uni-swiper-dot/uni-swiper-dot-create-component']]
]);
