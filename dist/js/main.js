/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _common = __webpack_require__(/*! ./js/common.js */ \"./src/js/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\n__webpack_require__(/*! ./scss/product-links.scss */ \"./src/scss/product-links.scss\");\n\n__webpack_require__(/*! ./scss/breadcrumbs.scss */ \"./src/scss/breadcrumbs.scss\");\n\n__webpack_require__(/*! ./scss/bottom-menu.scss */ \"./src/scss/bottom-menu.scss\");\n\n__webpack_require__(/*! ./scss/menu.scss */ \"./src/scss/menu.scss\");\n\n__webpack_require__(/*! ./scss/colors-input.scss */ \"./src/scss/colors-input.scss\");\n\n__webpack_require__(/*! ./scss/common.scss */ \"./src/scss/common.scss\");\n\n__webpack_require__(/*! ./scss/fonts-input.scss */ \"./src/scss/fonts-input.scss\");\n\n__webpack_require__(/*! ./scss/footer.scss */ \"./src/scss/footer.scss\");\n\n__webpack_require__(/*! ./scss/footer-menu.scss */ \"./src/scss/footer-menu.scss\");\n\n__webpack_require__(/*! ./scss/form.scss */ \"./src/scss/form.scss\");\n\n__webpack_require__(/*! ./scss/goods.scss */ \"./src/scss/goods.scss\");\n\n__webpack_require__(/*! ./scss/header.scss */ \"./src/scss/header.scss\");\n\n__webpack_require__(/*! ./scss/more-info.scss */ \"./src/scss/more-info.scss\");\n\n__webpack_require__(/*! ./scss/nav.scss */ \"./src/scss/nav.scss\");\n\n__webpack_require__(/*! ./scss/popup.scss */ \"./src/scss/popup.scss\");\n\n__webpack_require__(/*! ./scss/product-card.scss */ \"./src/scss/product-card.scss\");\n\n__webpack_require__(/*! ./scss/reset.scss */ \"./src/scss/reset.scss\");\n\n__webpack_require__(/*! ./scss/social-links.scss */ \"./src/scss/social-links.scss\");\n\n__webpack_require__(/*! ./scss/sprite.scss */ \"./src/scss/sprite.scss\");\n\n__webpack_require__(/*! ./scss/user-menu.scss */ \"./src/scss/user-menu.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction initSliderAlsoLike() {}\n// $(\".goods__also-like\").css(\"display\", \"block\");\n// $('.goods__also-like').slick(sliderSettings);\n// $('.goods__slider-toggle_also-like').off('click', initSliderAlsoLike);\n\n\n// $('.goods__slider-toggle_also-like').on('click', initSliderAlsoLike);\n\n\n// $('.more-info__item').click(function () {\n//     $(this).next(\".more-info__content\").slideToggle();\n// });\n//\n// var productPreview = $('.product-description__product-preview');\n// productPreview.attr(\"src\", $(\".product-description__gallery-img:first-of-type\").attr(\"src\"));\n//\n//\n// $('.product-description__gallery-img').click(function () {\n//     productPreview.attr(\"src\", $(this).attr(\"src\"));\n// });\n//\n//\n// $('.goods__slider-toggle').click(function () {\n//     $('.goods__slider-toggle').removeClass(\"goods__slider-toggle_current\");\n//     $(this).addClass(\"goods__slider-toggle_current\");\n// });\n//\n// $('.goods__slider-toggle').click(function () {\n//     if ($(this).hasClass(\"goods__slider-toggle_wear-with\")) {\n//         $('.goods__wear-with').fadeIn();\n//         $('.goods__also-like').fadeOut();\n//     } else {\n//         $('.goods__also-like').fadeIn();\n//         $('.goods__wear-with').fadeOut();\n//     }\n// });\n//\n//\n// $('.product-description__btn_add-to-cart').click(function () {\n//     $('body').addClass(\"blocked\");\n//     $('.popup').slideDown();\n//     $('.popup__current-img').attr(\"src\", $('.product-description__product-preview').attr(\"src\"));\n// });\n//\n//\n//\n// var companyName = $(\".popup__company-name\");\n// var valChar = $(\".popup__val-char\");\n//\n// $('.colors-input').click(function () {\n//     $('.colors-input').removeClass(\"colors-input_current\");\n//     $(this).addClass(\"colors-input_current\");\n//     companyName.css(\"color\", $(this).find(\"input\").val());\n// });\n// $('.fonts-input').click(function () {\n//     $('.fonts-input').removeClass(\"fonts-input_current\");\n//     $(this).addClass(\"fonts-input_current\");\n//     companyName.css(\"font-family\", $(this).find(\"input\").val());\n// });\n//\n//\n// $('#popup__logo-name').keyup(function () {\n//     if ($(this).val().length < 21) {\n//         valChar.text($(this).val().length);\n//         companyName.text($(this).val());\n//     } else {\n//         alert(\"Max 20 caratteri\");\n//     }\n//\n// });\n//\n//\n// $('.popup__btn_close').click(function () {\n//     $('body').removeClass(\"blocked\");\n//     $('.popup').slideUp();\n// });\n\n//# sourceURL=webpack:///./src/js/common.js?");

/***/ }),

/***/ "./src/scss/bottom-menu.scss":
/*!***********************************!*\
  !*** ./src/scss/bottom-menu.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/bottom-menu.scss?");

/***/ }),

/***/ "./src/scss/breadcrumbs.scss":
/*!***********************************!*\
  !*** ./src/scss/breadcrumbs.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/breadcrumbs.scss?");

/***/ }),

/***/ "./src/scss/colors-input.scss":
/*!************************************!*\
  !*** ./src/scss/colors-input.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/colors-input.scss?");

/***/ }),

/***/ "./src/scss/common.scss":
/*!******************************!*\
  !*** ./src/scss/common.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/common.scss?");

/***/ }),

/***/ "./src/scss/fonts-input.scss":
/*!***********************************!*\
  !*** ./src/scss/fonts-input.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/fonts-input.scss?");

/***/ }),

/***/ "./src/scss/footer-menu.scss":
/*!***********************************!*\
  !*** ./src/scss/footer-menu.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/footer-menu.scss?");

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/footer.scss?");

/***/ }),

/***/ "./src/scss/form.scss":
/*!****************************!*\
  !*** ./src/scss/form.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/form.scss?");

/***/ }),

/***/ "./src/scss/goods.scss":
/*!*****************************!*\
  !*** ./src/scss/goods.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/goods.scss?");

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/header.scss?");

/***/ }),

/***/ "./src/scss/menu.scss":
/*!****************************!*\
  !*** ./src/scss/menu.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/menu.scss?");

/***/ }),

/***/ "./src/scss/more-info.scss":
/*!*********************************!*\
  !*** ./src/scss/more-info.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/more-info.scss?");

/***/ }),

/***/ "./src/scss/nav.scss":
/*!***************************!*\
  !*** ./src/scss/nav.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/nav.scss?");

/***/ }),

/***/ "./src/scss/popup.scss":
/*!*****************************!*\
  !*** ./src/scss/popup.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/popup.scss?");

/***/ }),

/***/ "./src/scss/product-card.scss":
/*!************************************!*\
  !*** ./src/scss/product-card.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/product-card.scss?");

/***/ }),

/***/ "./src/scss/product-links.scss":
/*!*************************************!*\
  !*** ./src/scss/product-links.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/product-links.scss?");

/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/reset.scss?");

/***/ }),

/***/ "./src/scss/social-links.scss":
/*!************************************!*\
  !*** ./src/scss/social-links.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/social-links.scss?");

/***/ }),

/***/ "./src/scss/sprite.scss":
/*!******************************!*\
  !*** ./src/scss/sprite.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/sprite.scss?");

/***/ }),

/***/ "./src/scss/user-menu.scss":
/*!*********************************!*\
  !*** ./src/scss/user-menu.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/user-menu.scss?");

/***/ })

/******/ });