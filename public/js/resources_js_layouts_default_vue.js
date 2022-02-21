"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_default_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue */ "./resources/js/layouts/header.vue");
/* harmony import */ var _sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.vue */ "./resources/js/layouts/sidebar.vue");
/* harmony import */ var _footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.vue */ "./resources/js/layouts/footer.vue");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Header: _header_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Sidebar: _sidebar_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Footer: _footer_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {};
  },
  created: function created() {
    var scripts = ["https://code.jquery.com/jquery-3.3.1.min.js", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js" // "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
    // "../../../../stisla/assets/js/stisla.js",
    // "../../../../stisla/assets/js/scripts.js",
    // "../../../../stisla/assets/js/custom.js"
    ];
    scripts.forEach(function (script) {
      var tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
  beforeMount: function beforeMount() {
    this.showUserdata();
  },
  methods: {
    showUserdata: function showUserdata() {
      var value = localStorage.getItem('userdata');
      var exp_date = localStorage.getItem('exp_date');

      if (value) {
        var userData = JSON.parse(value);
        this.userData = {
          name: userData.name
        };
      }
    },
    logout: function logout() {
      var _this = this;

      this.$store.dispatch('auth/logout').then(function () {
        _this.$router.push({
          name: 'auth-login'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.fontawesome.com/releases/v5.7.2/css/all.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* @import '../../stisla/node_modules/bootstrap-social/bootstrap-social.css'; */\n/* @import '../../../public/stisla/assets/css/style.css'; */\n/* @import '../../../public/stisla/assets/css/components.css'; */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/layouts/default.vue":
/*!******************************************!*\
  !*** ./resources/js/layouts/default.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.vue?vue&type=template&id=06bc2b2d&scoped=true& */ "./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&");
/* harmony import */ var _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.vue?vue&type=script&lang=js& */ "./resources/js/layouts/default.vue?vue&type=script&lang=js&");
/* harmony import */ var _default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& */ "./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "06bc2b2d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/default.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/footer.vue":
/*!*****************************************!*\
  !*** ./resources/js/layouts/footer.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_0b57cd5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=0b57cd5f& */ "./resources/js/layouts/footer.vue?vue&type=template&id=0b57cd5f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _footer_vue_vue_type_template_id_0b57cd5f___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_0b57cd5f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/header.vue":
/*!*****************************************!*\
  !*** ./resources/js/layouts/header.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_2c8a3151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=2c8a3151& */ "./resources/js/layouts/header.vue?vue&type=template&id=2c8a3151&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _header_vue_vue_type_template_id_2c8a3151___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_2c8a3151___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/sidebar.vue":
/*!******************************************!*\
  !*** ./resources/js/layouts/sidebar.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_vue_vue_type_template_id_084c5ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.vue?vue&type=template&id=084c5ac8& */ "./resources/js/layouts/sidebar.vue?vue&type=template&id=084c5ac8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _sidebar_vue_vue_type_template_id_084c5ac8___WEBPACK_IMPORTED_MODULE_0__.render,
  _sidebar_vue_vue_type_template_id_084c5ac8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./default.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./default.vue?vue&type=template&id=06bc2b2d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&");


/***/ }),

/***/ "./resources/js/layouts/footer.vue?vue&type=template&id=0b57cd5f&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/footer.vue?vue&type=template&id=0b57cd5f& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_0b57cd5f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_0b57cd5f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_0b57cd5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=0b57cd5f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/footer.vue?vue&type=template&id=0b57cd5f&");


/***/ }),

/***/ "./resources/js/layouts/header.vue?vue&type=template&id=2c8a3151&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/header.vue?vue&type=template&id=2c8a3151& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2c8a3151___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2c8a3151___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2c8a3151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=2c8a3151& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/header.vue?vue&type=template&id=2c8a3151&");


/***/ }),

/***/ "./resources/js/layouts/sidebar.vue?vue&type=template&id=084c5ac8&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/sidebar.vue?vue&type=template&id=084c5ac8& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_084c5ac8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_084c5ac8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_084c5ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sidebar.vue?vue&type=template&id=084c5ac8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/sidebar.vue?vue&type=template&id=084c5ac8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "div",
      { staticClass: "main-wrapper" },
      [
        _c("div", [
          _c("div", { staticClass: "navbar-bg" }),
          _vm._v(" "),
          _c("nav", { staticClass: "navbar navbar-expand-lg main-navbar" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("ul", { staticClass: "navbar-nav navbar-right" }, [
              _c("li", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link notification-toggle nav-link-lg nav-link-user",
                    attrs: { href: "#", "data-toggle": "dropdown" }
                  },
                  [
                    _c("img", {
                      staticClass: "rounded-circle mr-1",
                      attrs: {
                        alt: "image",
                        src: "../../../../stisla/assets/img/avatar/avatar-1.png"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-sm-none d-lg-inline-block" }, [
                      _vm._v("Hi, Ujang Maman")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c("div", { staticClass: "dropdown-title" }, [
                      _vm._v("Logged in 5 min ago")
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item has-icon text-danger",
                        on: { click: _vm.logout }
                      },
                      [
                        _c("i", { staticClass: "fas fa-sign-out-alt" }),
                        _vm._v(" Logout\n                    ")
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-sidebar" }, [
          _c("aside", { attrs: { id: "sidebar-wrapper" } }, [
            _c(
              "div",
              { staticClass: "sidebar-brand" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: { name: "dashboard" } }
                  },
                  [_vm._v("ADMIN")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("ul", { staticClass: "sidebar-menu" }, [
              _c("li", { staticClass: "menu-header" }, [_vm._v("Dashboard")]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "active" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "dashboard" } }
                    },
                    [
                      _c("i", { staticClass: "fas fa-fire" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Dashboard")])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "menu-header" }, [
                _vm._v("User Setting")
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("ul", { staticClass: "dropdown-menu" }, [
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: { name: "roles" } } }, [
                        _vm._v("Roles")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: { name: "users" } } }, [
                        _vm._v("Users")
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(6)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 mb-4 p-3 hide-sidebar-mini" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger btn-lg btn-block btn-icon-split",
                  on: { click: _vm.logout }
                },
                [
                  _c("i", { staticClass: "fas fa-rocket" }),
                  _vm._v(" Logout\n            ")
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main-content" }, [_c("router-view")], 1),
        _vm._v(" "),
        _c("Footer")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "form-inline mr-auto" }, [
      _c("ul", { staticClass: "navbar-nav mr-3" }, [
        _c("li", [
          _c(
            "a",
            {
              staticClass: "nav-link nav-link-lg",
              attrs: { href: "#", "data-toggle": "sidebar" }
            },
            [_c("i", { staticClass: "fas fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "nav-link nav-link-lg d-sm-none",
              attrs: { href: "#", "data-toggle": "search" }
            },
            [_c("i", { staticClass: "fas fa-search" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item has-icon",
        attrs: { href: "features-profile.html" }
      },
      [
        _c("i", { staticClass: "far fa-user" }),
        _vm._v(" Profile\n                    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item has-icon",
        attrs: { href: "features-activities.html" }
      },
      [
        _c("i", { staticClass: "fas fa-bolt" }),
        _vm._v(" Activities\n                    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item has-icon",
        attrs: { href: "features-settings.html" }
      },
      [
        _c("i", { staticClass: "fas fa-cog" }),
        _vm._v(" Settings\n                    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-brand sidebar-brand-sm" }, [
      _c("a", { attrs: { href: "#" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "nav-link has-dropdown", attrs: { href: "" } },
      [
        _c("i", { staticClass: "far fa-user" }),
        _vm._v(" "),
        _c("span", [_vm._v("User Setting")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fas fa-pencil-ruler" }),
        _vm._v(" "),
        _c("span", [_vm._v("Credits")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/footer.vue?vue&type=template&id=0b57cd5f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/footer.vue?vue&type=template&id=0b57cd5f& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "main-footer" }, [
      _c("div", { staticClass: "footer-left" }, [
        _vm._v("\n    Copyright © 2018 "),
        _c("div", { staticClass: "bullet" }),
        _vm._v(" Design Template By "),
        _c("a", { attrs: { href: "https://nauval.in/" } }, [
          _vm._v("Muhamad Nauval Azhar")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer-right" }, [_vm._v("\n    2.3.0\n    ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/header.vue?vue&type=template&id=2c8a3151&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/header.vue?vue&type=template&id=2c8a3151& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "navbar-bg" }),
    _vm._v(" "),
    _c("nav", { staticClass: "navbar navbar-expand-lg main-navbar" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("ul", { staticClass: "navbar-nav navbar-right" }, [
        _c("li", { staticClass: "dropdown" }, [
          _c(
            "a",
            {
              staticClass:
                "nav-link notification-toggle nav-link-lg nav-link-user",
              attrs: { href: "#", "data-toggle": "dropdown" }
            },
            [
              _c("img", {
                staticClass: "rounded-circle mr-1",
                attrs: {
                  alt: "image",
                  src: "../../../../stisla/assets/img/avatar/avatar-1.png"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "d-sm-none d-lg-inline-block" }, [
                _vm._v("Hi, Ujang Maman")
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("div", { staticClass: "dropdown-title" }, [
              _vm._v("Logged in 5 min ago")
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item has-icon text-danger",
                on: { click: _vm.logout }
              },
              [
                _c("i", { staticClass: "fas fa-sign-out-alt" }),
                _vm._v(" Logout\n            ")
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "form-inline mr-auto" }, [
      _c("ul", { staticClass: "navbar-nav mr-3" }, [
        _c("li", [
          _c(
            "a",
            {
              staticClass: "nav-link nav-link-lg",
              attrs: { href: "#", "data-toggle": "sidebar" }
            },
            [_c("i", { staticClass: "fas fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "nav-link nav-link-lg d-sm-none",
              attrs: { href: "#", "data-toggle": "search" }
            },
            [_c("i", { staticClass: "fas fa-search" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item has-icon",
        attrs: { href: "features-profile.html" }
      },
      [
        _c("i", { staticClass: "far fa-user" }),
        _vm._v(" Profile\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item has-icon",
        attrs: { href: "features-activities.html" }
      },
      [
        _c("i", { staticClass: "fas fa-bolt" }),
        _vm._v(" Activities\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item has-icon",
        attrs: { href: "features-settings.html" }
      },
      [
        _c("i", { staticClass: "fas fa-cog" }),
        _vm._v(" Settings\n            ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/sidebar.vue?vue&type=template&id=084c5ac8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/sidebar.vue?vue&type=template&id=084c5ac8& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-sidebar" }, [
    _c("aside", { attrs: { id: "sidebar-wrapper" } }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("ul", { staticClass: "sidebar-menu" }, [
        _c("li", { staticClass: "menu-header" }, [_vm._v("Dashboard")]),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "active" },
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: { name: "dashboard" } } },
              [
                _c("i", { staticClass: "fas fa-fire" }),
                _vm._v(" "),
                _c("span", [_vm._v("Dashboard")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "menu-header" }, [_vm._v("User Setting")]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item dropdown" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu" }, [
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "users" } } }, [
                  _vm._v("Users")
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(3)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-4 mb-4 p-3 hide-sidebar-mini" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-danger btn-lg btn-block btn-icon-split",
            on: { click: _vm.logout }
          },
          [
            _c("i", { staticClass: "fas fa-rocket" }),
            _vm._v(" Logout\n            ")
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-brand" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-brand sidebar-brand-sm" }, [
      _c("a", { attrs: { href: "#" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "nav-link has-dropdown", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "far fa-user" }),
        _vm._v(" "),
        _c("span", [_vm._v("User Setting")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fas fa-pencil-ruler" }),
        _vm._v(" "),
        _c("span", [_vm._v("Credits")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);