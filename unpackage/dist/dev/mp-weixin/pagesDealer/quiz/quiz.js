(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesDealer/quiz/quiz"],{

/***/ 123:
/*!****************************************************************************!*\
  !*** D:/demo/uni-app-Panchen/main.js?{"page":"pagesDealer%2Fquiz%2Fquiz"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _quiz = _interopRequireDefault(__webpack_require__(/*! ./pagesDealer/quiz/quiz.vue */ 124));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_quiz.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 124:
/*!*********************************************************!*\
  !*** D:/demo/uni-app-Panchen/pagesDealer/quiz/quiz.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.vue?vue&type=template&id=2454821f&scoped=true& */ 125);
/* harmony import */ var _quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.vue?vue&type=script&lang=js& */ 127);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _quiz_vue_vue_type_style_index_0_id_2454821f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.vue?vue&type=style&index=0&id=2454821f&lang=less&scoped=true& */ 129);
/* harmony import */ var _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2454821f",
  null,
  false,
  _quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesDealer/quiz/quiz.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 125:
/*!****************************************************************************************************!*\
  !*** D:/demo/uni-app-Panchen/pagesDealer/quiz/quiz.vue?vue&type=template&id=2454821f&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./quiz.vue?vue&type=template&id=2454821f&scoped=true& */ 126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_template_id_2454821f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 126:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/demo/uni-app-Panchen/pagesDealer/quiz/quiz.vue?vue&type=template&id=2454821f&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  topNavigation: function() {
    return __webpack_require__.e(/*! import() | components/top-navigation/top-navigation */ "components/top-navigation/top-navigation").then(__webpack_require__.bind(null, /*! @/components/top-navigation/top-navigation.vue */ 371))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 127:
/*!**********************************************************************************!*\
  !*** D:/demo/uni-app-Panchen/pagesDealer/quiz/quiz.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./quiz.vue?vue&type=script&lang=js& */ 128);
/* harmony import */ var _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 128:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/demo/uni-app-Panchen/pagesDealer/quiz/quiz.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      num: 1,
      quizList: [],
      activeList: [],
      title: "" };

  },
  onLoad: function onLoad(option) {
    // uni.setNavigationBarTitle({
    // 	title: option.title
    // })
    this.title = option.title;
    this.gettingData(option.id);
  },
  methods: {
    // 返回上一页
    returnClick: function returnClick() {
      uni.navigateBack({
        delta: 1 });

    },
    // 获取数据
    gettingData: function gettingData(id) {var _this = this;
      // 加载动画
      uni.showLoading({
        title: '加载中' });

      this.$http.post('System/get_exam_question_details', { id: id }).then(function (res) {
        // 关闭加载动画
        uni.hideLoading();
        if (res.data.code == 200) {
          _this.quizList = res.data.data.question;
          res.data.data.question.forEach(function (item) {
            _this.activeList.push(0);
          });
        } else {
          uni.showToast({
            icon: 'none',
            title: res.data.msg,
            duration: 2000 });

        }
      });
    },
    // 选择答案
    selectClick: function selectClick(index) {
      if (this.activeList[this.num - 1] == index) {
        return false;
      }
      this.activeList.splice(this.num - 1, 1, index);
    },
    // 上一题
    PreviousQuestion: function PreviousQuestion() {
      if (this.num == 1) {
        return false;
      }
      this.num--;
    },
    // 下一题
    NextQuestion: function NextQuestion() {
      if (this.num == this.quizList.length) {
        return false;
      }
      this.num++;
    },
    // 提交方法
    submit: function submit() {
      uni.showToast({
        icon: 'success',
        title: '提交成功',
        duration: 2000,
        success: function success() {
          uni.switchTab({
            url: "../../pages/dealer/index" });

        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 129:
/*!*******************************************************************************************************************!*\
  !*** D:/demo/uni-app-Panchen/pagesDealer/quiz/quiz.vue?vue&type=style&index=0&id=2454821f&lang=less&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_style_index_0_id_2454821f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Google下载/HBuilderX.2.8.11.20200907.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./quiz.vue?vue&type=style&index=0&id=2454821f&lang=less&scoped=true& */ 130);
/* harmony import */ var _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_style_index_0_id_2454821f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_style_index_0_id_2454821f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_style_index_0_id_2454821f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_style_index_0_id_2454821f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Google_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_quiz_vue_vue_type_style_index_0_id_2454821f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 130:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/demo/uni-app-Panchen/pagesDealer/quiz/quiz.vue?vue&type=style&index=0&id=2454821f&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[123,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesDealer/quiz/quiz.js.map