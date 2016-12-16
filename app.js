var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	styles
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.controller = undefined;

	__webpack_require__(9);

	__webpack_require__(14);

	var _controller = __webpack_require__(33);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 markup
	 */
	if (true) {
	  __webpack_require__(63);
	}

	/*
	 logic
	*/

	/*
	 images
	 */
		var controller = exports.controller = new _controller2.default();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./_index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./_index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n.mac {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.mac input,\n.mac textarea,\n.mac button {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ninput:focus,\nbutton:focus,\na:focus {\n  outline: 0;\n}\n\n.city__more {\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.shown {\n  display: block !important;\n}\n\n.addition__list:before,\n.details__item:before,\n.city__descr:before,\n.hourly__slider:before,\n.addition__list:after,\n.details__item:after,\n.city__descr:after,\n.hourly__slider:after {\n  content: \"\";\n  display: table;\n}\n\n.addition__list:after,\n.details__item:after,\n.city__descr:after,\n.hourly__slider:after {\n  clear: both;\n}\n\n.dashed {\n  text-decoration: none;\n}\n\n.dashed:hover {\n  text-decoration: none;\n}\n\n.dashed span {\n  position: relative;\n}\n\n.dashed span:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 0;\n  border-bottom: 1px dashed;\n  border-color: inherit;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  min-width: 320px;\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", Arial, Helvetica, Garuda, sans-serif;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: #f1f1f1;\n  color: #333;\n}\n\n@media only screen and (min-width: 992px) {\n  html,\n  body {\n    min-height: 620px;\n  }\n}\n\nhtml {\n  position: relative;\n}\n\n.wrapper,\n.maincontent {\n  height: 100%;\n  min-height: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.maincontent {\n  position: relative;\n  background: #f1f1f1;\n}\n\n.isLandscape html,\n.isLandscape body,\n.isLandscape .wrapper,\n.isLandscape .maincontent,\n.isLandscape .content,\n.isLandscape .current-city,\n.isLandscape .addition {\n  height: auto;\n  min-height: initial;\n}\n\n@media only screen and (min-width: 992px) {\n  .isLandscape html,\n  .isLandscape body,\n  .isLandscape .maincontent,\n  .isLandscape .wrapper,\n  .isLandscape .content,\n  .isLandscape .menu {\n    height: 100% !important;\n    min-height: 100% !important;\n  }\n}\n\n.addition {\n  height: 50%;\n  transition: height .3s;\n}\n\n@media only screen and (min-width: 992px) {\n  .addition {\n    height: 45% !important;\n  }\n}\n\n.addition__list {\n  margin: 0;\n  padding: 0;\n  padding-bottom: 10px;\n  height: 100%;\n  overflow: auto;\n  transition: height .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .addition__list {\n    padding: 10px;\n    padding-bottom: 0;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .addition__list {\n    padding-bottom: 10px;\n  }\n}\n\n.addition__item {\n  margin: 0 10px;\n  margin-bottom: 10px;\n  list-style-type: none;\n}\n\n.addition__item:last-child {\n  margin-bottom: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .addition__item {\n    width: 50%;\n    float: left;\n    margin: 0;\n    padding-bottom: 20px;\n    height: 33.3333333%;\n  }\n\n  .addition__item:nth-child(2n) {\n    padding-left: 10px;\n  }\n\n  .addition__item:nth-child(2n - 1) {\n    padding-right: 10px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .addition__item {\n    width: 20%;\n    height: 100%;\n    padding: 0 5px;\n    display: table;\n  }\n\n  .addition__item:nth-child(2n - 1),\n  .addition__item:nth-child(2n) {\n    padding: 0 5px;\n  }\n\n  .addition__item:first-child {\n    padding-left: 0;\n  }\n\n  .addition__item:last-child {\n    padding-right: 0;\n  }\n}\n\n.city-viewer {\n  position: relative;\n  height: 100%;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.city-viewer.blocked .city-viewer__blocker {\n  display: block;\n}\n\n@media only screen and (min-width: 992px) {\n  .city-viewer {\n    font-size: 22px;\n    line-height: 24px;\n  }\n}\n\n.city-viewer__inner {\n  height: inherit;\n  overflow: auto;\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.city-viewer__item {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  position: relative;\n  padding: 12px;\n  padding-right: 40px;\n  margin-bottom: 10px;\n  border: solid 1px transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);\n  cursor: pointer;\n}\n\n.city-viewer__item:last-child {\n  margin-bottom: 0;\n}\n\n.city-viewer__item.active {\n  background-color: #ddd;\n}\n\n.city-viewer__item.show-preloader .city-viewer__item-close {\n  animation-name: rotate;\n  animation-duration: .6s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n.city-viewer__item-close {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  border: 3px solid rgba(0, 0, 0, 0.35);\n  transform: rotate(45deg);\n  box-shadow: 0 0  12px #666;\n  box-shadow: none;\n  top: 50%;\n  transform: translateY(-50%) rotate(45deg);\n}\n\n.city-viewer__item-close:before,\n.city-viewer__item-close:after {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.city-viewer__item-close:before {\n  width: 100%;\n  height: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.city-viewer__item-close:after {\n  width: 3px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.city-viewer__blocker {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.city-viewer__preloader {\n  height: 40px;\n  margin-bottom: 5px;\n  background-image: url(" + __webpack_require__(12) + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 38px;\n}\n\n@keyframes rotate {\n  0% {\n    transform: translateY(-50%) rotate(45deg);\n  }\n\n  100% {\n    transform: translateY(-50%) rotate(405deg);\n  }\n}\n\n.content {\n  position: relative;\n  height: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.content .content__inner {\n  height: inherit;\n  min-height: inherit;\n  background: #f1f1f1;\n}\n\n@media only screen and (min-width: 992px) {\n  .content {\n    margin-left: 400px;\n  }\n}\n\n.current-city {\n  height: 50%;\n  padding: 10px;\n  transition: height .3s;\n}\n\n.current-city.init {\n  visibility: hidden;\n}\n\n.current-city.small {\n  height: 150px;\n}\n\n.current-city.small .city__descr-img {\n  width: 50px;\n  margin-bottom: 0;\n}\n\n.current-city.small .city__date {\n  font-size: 10px;\n}\n\n.current-city.show-more-details {\n  position: relative;\n  z-index: 12;\n  height: auto !important;\n}\n\n.current-city.shown .current-city__overlay {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n@media only screen and (min-width: 992px) {\n  .current-city {\n    height: 55% !important;\n  }\n}\n\n.current-city__inner {\n  position: relative;\n  z-index: 8;\n  height: 100%;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n.current-city__overlay {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transition: background .5s;\n}\n\n.menu {\n  position: absolute;\n  top: 0;\n  left: -300px;\n  width: 300px;\n  height: 100%;\n  min-height: 100%;\n  transition: left .3s;\n}\n\n.menu.is-empty {\n  position: fixed;\n  z-index: 100;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu.is-empty {\n    position: relative;\n    z-index: initial;\n  }\n}\n\n.menu.open {\n  left: 0;\n}\n\n.menu.open .menu__overflow {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) {\n  .menu {\n    width: 440px;\n    left: -440px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .menu {\n    position: relative;\n    left: 0;\n    width: 400px;\n    float: left;\n    padding: 10px;\n  }\n}\n\n.menu__inner {\n  position: relative;\n  z-index: 11;\n  height: 100%;\n  min-height: 100%;\n  padding: 0 20px 10px 0;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__inner {\n    padding-left: 20px;\n  }\n}\n\n.menu__close {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  border: 4px solid rgba(0, 0, 0, 0.35);\n  transform: rotate(45deg);\n  box-shadow: 0 0  12px #666;\n}\n\n.menu__close:before,\n.menu__close:after {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.menu__close:before {\n  width: 100%;\n  height: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.menu__close:after {\n  width: 4px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__close {\n    display: none;\n  }\n}\n\n.menu__overflow {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 10;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__overflow {\n    display: none !important;\n  }\n}\n\ndiv.menu__search {\n  height: 20%;\n  padding-top: 65px;\n}\n\n@media only screen and (min-width: 992px) {\n  div.menu__search {\n    height: 20% !important;\n  }\n}\n\n.menu__city-viewer {\n  height: 80%;\n  padding-top: 50px;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__city-viewer {\n    height: 80% !important;\n  }\n}\n\n.menu__tongue {\n  position: absolute;\n  width: 9px;\n  height: 100px;\n  background: #aaa;\n  right: -9px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 0 5px 5px 0;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__tongue {\n    display: none;\n  }\n}\n\n.search {\n  position: relative;\n  z-index: 20;\n}\n\n.search .tp-ac__item {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.search.block .search__block {\n  display: block;\n}\n\n.search.block .search__inner {\n  opacity: .6;\n}\n\n.search__inner {\n  padding-right: 5px !important;\n}\n\n.search__input {\n  width: 100%;\n  padding: 20px !important;\n  border: solid 1px transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);\n  font-size: 22px;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n  transition: opacity .3s;\n}\n\n.search__block {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.overflow {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.overflow.show {\n  display: block;\n}\n\n.preloader {\n  display: none;\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  z-index: 20;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-image: url(" + __webpack_require__(12) + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.preloader.show {\n  display: block;\n}\n\n.details {\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .details {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.details.hidden {\n  display: none;\n}\n\n.details.open {\n  padding-bottom: 4px;\n  margin-bottom: 11px;\n}\n\n.details.open .details__item {\n  margin-bottom: 10px;\n}\n\n.details.open .details__item.details--more {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) {\n  .details.open .details__item {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #000;\n  }\n}\n\n.details__item {\n  margin-bottom: 3px;\n  list-style-type: none;\n}\n\n.details__item.details--more {\n  display: none;\n}\n\n.details__item.details--hidden {\n  display: none;\n}\n\n@media only screen and (min-width: 768px) {\n  .details__item {\n    margin-bottom: 10px;\n  }\n}\n\n.details__item-text {\n  float: left;\n  width: 50%;\n}\n\n.details__num {\n  float: right;\n  width: 50%;\n  text-align: right;\n}\n\n.details__hidden {\n  display: none;\n}\n\n.city {\n  position: relative;\n  height: 100%;\n  padding: 20px;\n  padding-top: 10px;\n  padding-bottom: 30px;\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  .city {\n    padding: 40px;\n    padding-top: 10px;\n    padding-bottom: 55px;\n  }\n}\n\n.city__name {\n  text-align: right;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__name {\n    padding-top: 10px;\n    font-size: 40px;\n    line-height: 42px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__name {\n    padding-top: 10px;\n    font-size: 30px;\n    line-height: 32px;\n  }\n}\n\n.city__descr {\n  margin-bottom: 5px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr {\n    margin-bottom: 30px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__descr {\n    margin-bottom: 10px;\n  }\n}\n\n.city__details {\n  max-width: 65%;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__details {\n    max-width: 65%;\n  }\n}\n\n.city__descr-main {\n  float: left;\n}\n\n.city__weather {\n  margin-bottom: 10px;\n  font-size: 26px;\n  line-height: 28px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__weather {\n    margin-bottom: 30px;\n    font-size: 46px;\n    line-height: 48px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__weather {\n    font-size: 36px;\n    line-height: 38px;\n  }\n}\n\n.city__temp {\n  font-size: 40px;\n  line-height: 42px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__temp {\n    font-size: 80px;\n    line-height: 82px;\n  }\n\n  .city__temp.celcius:after {\n    font-size: 80px;\n    line-height: 60px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__temp {\n    font-size: 60px;\n    line-height: 62px;\n  }\n}\n\n.city__descr-img-wrap {\n  float: right;\n  padding-top: 5px;\n  text-align: right;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr-img-wrap {\n    padding-top: 15px;\n  }\n}\n\n.city__descr-img {\n  width: 100px;\n  transition: all .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr-img {\n    width: 170px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__descr-img {\n    width: 125px;\n  }\n}\n\n.city__date {\n  text-align: right;\n  transition: all .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__date {\n    font-size: 26px;\n    line-height: 28px;\n  }\n}\n\n.city__more {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  display: block;\n  padding-top: 10px;\n  text-align: right;\n  color: #000;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__more {\n    padding-top: 80px;\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__more {\n    padding-top: 70px;\n  }\n}\n\n.city__reload {\n  position: absolute;\n  left: 20px;\n  bottom: 5px;\n  width: 25px;\n  height: 25px;\n  transition: all .1s;\n  transform: rotate(1deg);\n}\n\n.city__reload.reloading {\n  animation-name: rotateRefresher;\n  animation-duration: .6s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__reload {\n    width: 40px;\n    height: 40px;\n    left: 35px;\n    bottom: 10px;\n  }\n}\n\n.city__reload-img {\n  max-width: 100%;\n  width: 100%;\n  color: inherit;\n}\n\n@keyframes rotateRefresher {\n  0% {\n    transform: rotate(45deg);\n  }\n\n  100% {\n    transform: rotate(405deg);\n  }\n}\n\n.hourly {\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n  transition: height 0.1s;\n  height: 0;\n}\n\n.hourly:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  content: \"\";\n  width: 94%;\n  height: 1px;\n  box-shadow: 0 -4px 14px 1px #777;\n}\n\n.hourly.shown {\n  height: 80px;\n}\n\n.hourly.shown-slider .hourly__inner {\n  top: 0;\n}\n\n.hourly.hidden {\n  display: none;\n}\n\n@media only screen and (min-width: 768px) {\n  .hourly {\n    font-size: 24px;\n    line-height: 38px;\n  }\n}\n\n.hourly__inner {\n  position: absolute;\n  top: -80px;\n  width: 100%;\n  height: 80px;\n  padding-top: 15px;\n  overflow: hidden;\n  transition: top 0.45s ease-in-out;\n}\n\n@media only screen and (min-width: 768px) {\n  .hourly__inner {\n    padding-top: 20px;\n  }\n}\n\n.hourly__slider {\n  position: absolute;\n  left: 0;\n  width: 200%;\n  transition: all .3s;\n}\n\n.hourly__slider.slide {\n  left: -100%;\n}\n\n.hourly__slide {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  float: left;\n  width: 12.5%;\n  border-left: 1px solid #ccc;\n}\n\n.hourly__slide:first-child,\n.hourly__slide:nth-child(5) {\n  border-left-color: transparent;\n}\n\n.hourly__slide-time {\n  line-height: 25px;\n  margin-bottom: 3px;\n}\n\n.hourly__slide-temp.celcius:after {\n  font-size: 30px;\n}\n\n.hourly__na {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.hourly__na-inner {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.nex-day {\n  display: table;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day {\n    display: table-cell;\n  }\n}\n\n.nex-day__img-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n  width: 90px;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__img-wrapper {\n    display: block;\n    width: auto;\n    margin-bottom: 20px;\n  }\n}\n\n.nex-day__img {\n  display: block;\n  width: 70px;\n  margin: 0 auto;\n}\n\n.nex-day__desc {\n  vertical-align: middle;\n  display: table-cell;\n  font-size: 14px;\n}\n\n@media only screen and (min-width: 768px) {\n  .nex-day__desc {\n    font-size: 22px;\n    line-height: 24px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__desc {\n    display: block;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n}\n\n.nex-day__date {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n\n@media only screen and (min-width: 768px) {\n  .nex-day__date {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.nex-day__weather {\n  text-align: center;\n}\n\n.nex-day__temp {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 26px;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__temp {\n    display: block;\n  }\n}\n\n.celcius {\n  position: relative;\n}\n\n.celcius:after {\n  position: absolute;\n  content: \"\\2DA\";\n  top: -6px;\n  font-size: 36px;\n  line-height: 36px;\n}\n\n.welcome-screen {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.welcome-screen:before {\n  position: absolute;\n  content: \"Just swipe to right\";\n  left: 50%;\n  top: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n@media only screen and (min-width: 992px) {\n  .welcome-screen:before {\n    content: \"Just start type city's name\";\n  }\n}\n\n.welcome-screen.show {\n  display: block;\n}\n\n.popup {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.popup.show {\n  display: block;\n}\n\n.popup__inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 310px;\n  padding: 20px;\n  background: #fff;\n  color: #333;\n  border: 4px solid #333;\n  border-radius: 5px;\n}\n\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/wheel.svg";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(15);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(19);

	__webpack_require__(20);

	__webpack_require__(21);

	__webpack_require__(22);

	__webpack_require__(23);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(28);

	__webpack_require__(29);

	__webpack_require__(30);

	__webpack_require__(31);

	__webpack_require__(32);

		__webpack_require__(12);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m01d.svg";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m01n.svg";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m02d.svg";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m02n.svg";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m03d.svg";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m03n.svg";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m04d.svg";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m04n.svg";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m09d.svg";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m09n.svg";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m10d.svg";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m10n.svg";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m11d.svg";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m11n.svg";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m13d.svg";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m13n.svg";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m50d.svg";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m50n.svg";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import {log} from './../stuff/logger';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(34);

	var _model2 = _interopRequireDefault(_model);

	var _view = __webpack_require__(43);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// const dataDays = [
	//     {
	//         img: "img/m03d.svg",
	//         data: "12 Nov",
	//         main: "Cloudly",
	//         temp: {
	//             day: 28,
	//             night: 5
	//         }
	//     },
	//     {
	//         img: "img/m04d.svg",
	//         data: "12 Nov",
	//         main: "Cloudly",
	//         temp: {
	//             day: 18,
	//             night: 5
	//         }
	//     },
	//     {
	//         img: "img/m09d.svg",
	//         data: "12 Nov",
	//         main: "Cloudly",
	//         temp: {
	//             day: 18,
	//             night: 15
	//         }
	//     },
	//     {
	//         img: "img/m10d.svg",
	//         data: "12 Nov",
	//         main: "Cloudly",
	//         temp: {
	//             day: 18,
	//             night: 5
	//         }
	//     },
	//     {
	//         img: "img/m13d.svg",
	//         data: "12 Nov",
	//         main: "Cloudly",
	//         temp: {
	//             day: 18,
	//             night: 5
	//         }
	//     }
	// ];
	//
	// const dataDetails = [
	//     ["Pressure", 92, "unit"],
	//     ["Humidity", 55, "unit"],
	//     ["Wind", 6, "unit"],
	//     ["Clouds", "Cloudiness"],
	//     ["Rain", "none"]
	// ];
	// const dataHourly = [
	//     {time: "11:00", temp: 22},
	//     {time: "12:00", temp: 22},
	//     // {time: "13:00", temp: 22},
	//     // {time: "14:00", temp: 22},
	//     // {time: "15:00", temp: 22},
	//     // {time: "16:00", temp: 22}
	// ];
	// const dataMain = {
	//     name: "Boston, USA",
	//     weather: "Sunny",
	//     temp: 18,
	//     data: "5 December",
	//     img: "/img/m01d.svg"
	// };

	var Controller = function () {
	    function Controller() {
	        var _this = this;

	        _classCallCheck(this, Controller);

	        this._model = new _model2.default();
	        this._view = new _view2.default();

	        this._model.on(_model2.default.EVENTS.onDataReady, function (data) {
	            _this._view.currentCity.render(data.main).then(function (resolve) {
	                _this._view.currentCity.details.render(data.details, _this._view.currentCity.getFreeSpaceFroDetails());
	            }).catch(function (error) {
	                throw new Error(error);
	            });
	            _this._view.nexDays.render(data.days);
	            _this._view.hidePreloader();
	            _this._view.hideWelcomeScreen();
	            _this._view.currentCity.init();
	            _this._view.cityViewer.hidePreloaderOnCity(document.querySelector("[data-geoid = '" + data.id + "']"));
	            _this._view.cityViewer.unlockViewer();
	            _this._view.menu.enable();
	            _this._view.hideRefreshing();
	            _this._view.cityViewer.hidePreloaderOnAddCity();
	            _this._view.currentCity.hourly.refresh(data.hourly);
	            _this._view.search.enable();
	        });

	        this._model.on(_model2.default.EVENTS.onFetchDataError, function () {
	            _this._view.search.enable();
	            _this._view.cityViewer.hidePreloaderOnAddCity();

	            setTimeout(function () {
	                _this._view.showMessage("Connection error <br> try again or choose another city");
	            });
	        });

	        this._model.on(_model2.default.EVENTS.onRestoreDataBegin, function () {
	            _this._view.showPreloader();
	            _this._view.menu.disable();
	            _this._view.menu.removeStateIsEmpty();
	        });

	        this._model.on(_model2.default.EVENTS.onEmptyStorage, function () {
	            _this._view.showWelcomeScreen();
	        });

	        this._model.on(_model2.default.EVENTS.onAddCity, function (data) {
	            // console.log(data)
	            _this._view.cityViewer.addCity({ name: data.name, geoId: data.id, tzOffsetMinutes: data.tzOffsetMinutes });
	            _this._view.menu.removeStateIsEmpty();
	        });

	        // this._model.on(Model.EVENTS.onSetActiveCity, (data) => {
	        //     this._view.cityViewer._setActiveClass(document.querySelector("[data-geoid = '" + data.id + "']"));
	        // });

	        this._model.on(_model2.default.EVENTS.onAddListOfCities, function (data) {
	            // console.log(data)
	            _this._view.cityViewer.addListOfCities(data);
	        });

	        this._view.currentCity.on(_view2.default.EVENTS.CurrentCity.onReloadDataRequest, function (event) {
	            _this._model.reloadData();
	            _this._view.showRefreshing();
	            _this._view.cityViewer.lockViewer();
	        });

	        this._view.currentCity.on(_view2.default.EVENTS.CurrentCity.onHiddenMoreDetails, function () {});

	        this._view.currentCity.on(_view2.default.EVENTS.CurrentCity.onShowMoreDetails, function () {
	            if (!_this._getDataForHourlyView().length) {
	                _this._view.currentCity.hourly.renderNA();

	                return;
	            }

	            _this._view.currentCity.hourly.render(_this._getDataForHourlyView());
	        });

	        this._view.currentCity.on(_view2.default.EVENTS.CurrentCity.onHideMoreDetails, function () {
	            _this._view.currentCity.hourly.destroy();
	        });

	        this._view.search.on(_view2.default.EVENTS.Search.onGetCity, function (cityData) {
	            var city = {};
	            // console.log(cityData)

	            try {
	                city.id = cityData.geonameId;
	                city.tzOffsetMinutes = cityData.tzOffsetMinutes;
	            } catch (e) {
	                console.log(e);
	                return;
	            }

	            _this._view.search.disable();
	            _this._model.getDataForNewCity(city);
	            _this._view.cityViewer.lockViewer();
	            if (!_this._model.isCityInDb(city.id)) {
	                _this._view.cityViewer.showPreloaderOnAddCity();
	            } else {
	                _this._view.cityViewer._setActiveClass(document.querySelector("[data-geoid = '" + city.id + "']"));
	                _this._view.cityViewer.showPreloaderOnCity(document.querySelector("[data-geoid = '" + city.id + "']"));
	                document.querySelector("[data-geoid = '" + city.id + "']").scrollIntoView();
	            }
	        });

	        this._view.cityViewer.on(_view2.default.EVENTS.CityViewer.onSelectedCity, function (data) {
	            // console.log(data);
	            _this._model.getDataForNewCity({ id: data.geoId, tzOffsetMinutes: data.tzOffsetMinutes });
	            _this._view.cityViewer.showPreloaderOnCity(document.querySelector("[data-geoid = '" + data.geoId + "']"));
	            _this._view.cityViewer.lockViewer();
	        });

	        this._view.cityViewer.on(_view2.default.EVENTS.CityViewer.onDeleteCity, function (geoId) {
	            _this._model.removeCityFromDb(geoId);
	        });

	        this._view.cityViewer.on(_view2.default.EVENTS.CityViewer.onDeletAllCities, function () {
	            console.log("очистить всю температуру");
	            _this._view.currentCity.destroy();
	            _this._view.nexDays.destroy();
	            _this._view.showWelcomeScreen();
	            _this._view.menu.setStateIsEmpty();
	        });

	        this._model.checkLocalStorage();
	    }

	    _createClass(Controller, [{
	        key: '_getDataForHourlyView',
	        value: function _getDataForHourlyView() {
	            return this._model._db.activeCity.hourly;
	        }
	    }]);

	    return Controller;
	}();

		exports.default = Controller;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _db = __webpack_require__(35);

	var _db2 = _interopRequireDefault(_db);

	var _fetchData = __webpack_require__(36);

	var _fetchData2 = _interopRequireDefault(_fetchData);

	var _eventMixin = __webpack_require__(41);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        this._db = _db2.default;
	        this._fetchdata = new _fetchData2.default();

	        this._fetchdata.on(_fetchData2.default.EVENTS.onDataFetched, this.dataHandler.bind(this));
	        this._fetchdata.on(_fetchData2.default.EVENTS.onDataFetchError, this.hadnleError.bind(this));

	        this.tzOffsetMinutes = 0;
	    }

	    _createClass(Model, [{
	        key: "_getUrls",
	        value: function _getUrls(city, api) {
	            return [
	            // api.url + api.weather + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid,
	            api.cross + api.url + api.weather + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid,
	            // api.url + api.forecast + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid
	            api.cross + api.url + api.forecast + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid];
	        }
	    }, {
	        key: "getData",
	        value: function getData(cityId) {
	            this._fetchdata.getData(this._getUrls(cityId, this._db.api));
	        }
	    }, {
	        key: "getDataForNewCity",
	        value: function getDataForNewCity(city) {
	            this.getData(city);
	            this.tzOffsetMinutes = city.tzOffsetMinutes;
	            console.log("city", city);
	        }
	    }, {
	        key: "dataHandler",
	        value: function dataHandler(data) {
	            console.log("fetched data", data);

	            this._writeDataForMain(data);
	            this._writeDataForDetails(data);
	            this._transformData(data);

	            if (!this._cityIsExist(data[0].id)) {
	                this._addCityToDb({
	                    name: data[0].name,
	                    id: data[0].id,
	                    active: true,
	                    weight: this._setWeight(),
	                    tzOffsetMinutes: this.tzOffsetMinutes
	                });
	                this._setActiveCity(data[0].id);
	                this.trigger(Model.EVENTS.onAddCity, {
	                    name: data[0].name,
	                    id: data[0].id,
	                    tzOffsetMinutes: this.tzOffsetMinutes
	                });
	                this.trigger(Model.EVENTS.onDataReady, this._db.activeCity);
	            } else {
	                this._setActiveCity(data[0].id);
	                this.trigger(Model.EVENTS.onSetActiveCity, { id: data[0].id });
	                this.trigger(Model.EVENTS.onDataReady, this._db.activeCity);
	            }

	            this._saveDataToLocalStorage();
	            console.log("db", this._db);
	        }
	    }, {
	        key: "isCityInDb",
	        value: function isCityInDb(id) {
	            return this._cityIsExist(id);
	        }
	    }, {
	        key: "removeCityFromDb",
	        value: function removeCityFromDb(id) {
	            delete this._db.cities[id];
	            this._saveDataToLocalStorage();
	        }
	    }, {
	        key: "_cityIsExist",
	        value: function _cityIsExist(id) {
	            return !!this._db.cities[id];
	        }
	    }, {
	        key: "_setActiveCity",
	        value: function _setActiveCity(cityId) {
	            for (var id in this._db.cities) {
	                if (this._db.cities.hasOwnProperty(id)) {
	                    this._db.cities[id].active = false;
	                }
	            }

	            this._db.cities[cityId].active = true;
	        }
	    }, {
	        key: "_addCityToDb",
	        value: function _addCityToDb(data) {
	            // this._db.cities[data.id] = {
	            //     name: data.name,
	            //     id: data.id,
	            //     active: true,
	            //     weight: data.weight,
	            //     tzOffsetMinutes: this.tzOffsetMinutes
	            // }
	            this._db.cities[data.id] = data;
	        }
	    }, {
	        key: "_setWeight",
	        value: function _setWeight() {
	            var citiesKeys = Object.keys(this._db.cities);
	            var cities = this._db.cities;

	            if (citiesKeys.length === 0) {
	                return 0;
	            }

	            var weights = [];

	            for (var i = 0; i < citiesKeys.length; i++) {
	                weights.push(cities[citiesKeys[i]].weight);
	            }

	            return Math.min.apply(Math, weights) - 1;
	        }
	    }, {
	        key: "_writeDataForMain",
	        value: function _writeDataForMain(data) {
	            var activeCity = this._db.activeCity;
	            var main = data[0];

	            activeCity.id = main.id;
	            activeCity.tzOffsetMinutes = this.tzOffsetMinutes;
	            activeCity.main.name = main.name;
	            activeCity.main.weather = main.weather[0].main;
	            activeCity.main.temp = Math.round(main.main.temp);
	            activeCity.main.data = new Date().toLocaleString("en-US", {
	                day: "numeric",
	                month: "short",
	                weekday: 'short'
	            });
	            // activeCity.main.img = `/img/${this._db.transformIcons(main.weather[0].icon)}.svg`;
	            activeCity.main.img = "img/" + this._db.transformIcons(main.weather[0].icon) + ".svg";
	        }
	    }, {
	        key: "_writeDataForDetails",
	        value: function _writeDataForDetails(data) {
	            var details = [];
	            var main = data[0];
	            var getDetailsUnits = this._db.getDetailsUnits.bind(this._db);

	            details.push([getDetailsUnits("pressure").str, Math.round(main.main.pressure), getDetailsUnits("pressure").unit]);
	            details.push([getDetailsUnits("humidity").str, Math.round(main.main.humidity), getDetailsUnits("humidity").unit]);
	            details.push([getDetailsUnits("wind").str, Math.round(main.wind.speed), getDetailsUnits("wind").unit]);
	            details.push(["Sunrise", new Date(+(main.sys.sunrise + "000")).toLocaleString("ru", {
	                timezone: 'UTC',
	                hour: "numeric",
	                minute: "numeric"
	            })]);
	            details.push(["Sunset", new Date(+(main.sys.sunset + "000")).toLocaleString("ru", {
	                hour: "numeric",
	                minute: "numeric"
	            })]);

	            this._db.activeCity.details = details;
	        }
	    }, {
	        key: "_transformData",
	        value: function _transformData(data) {
	            var dataDays = data[1].list;
	            var days = {};

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = dataDays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var day = _step.value;

	                    var date = new Date(day.dt * 1000);
	                    var keyTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

	                    if (!days[keyTime]) {
	                        days[keyTime] = [];
	                    }
	                    days[keyTime].push(day);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            var today = new Date();
	            var todayHourly = days[today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()];
	            // console.log(todayHourly)
	            // console.log(days)
	            this._writeDataForTodayHourly(todayHourly);

	            var daysKeys = todayHourly ? Object.keys(days).slice(1) : Object.keys(days);
	            var nextDays = [];

	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = daysKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _day = _step2.value;

	                    nextDays.push(days[_day]);
	                }

	                // console.log(nextDays);
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            this._writeDataForNextDays(nextDays);

	            // console.log(dataDays);
	        }
	    }, {
	        key: "_writeDataForTodayHourly",
	        value: function _writeDataForTodayHourly(data) {
	            var hourly = [];
	            // console.log("_writeDataForTodayHourly", data);

	            if (!data) {
	                return;
	            }

	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var hour = _step3.value;

	                    hourly.push({
	                        time: new Date(+(hour.dt + "000")).toLocaleString("RU", {
	                            hour: 'numeric',
	                            minute: 'numeric',
	                            timezone: 'UTC'
	                        }),
	                        temp: parseInt(hour.main.temp)
	                    });
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            this._db.activeCity.hourly = hourly;
	        }
	    }, {
	        key: "_writeDataForNextDays",
	        value: function _writeDataForNextDays(data) {
	            var days = [];

	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var day = _step4.value;

	                    days.push({
	                        hourly: {},
	                        img: "img/" + this._db.transformIcons(this._getCurentDataForNextDay("weather.0.icon", day).slice(0, -1) + "d") + ".svg",
	                        data: new Date(+(day[0].dt + "000")).toLocaleString("en-US", {
	                            day: "numeric",
	                            month: "short"
	                        }),
	                        main: this._getCurentDataForNextDay("weather.0.main", day),
	                        temp: {
	                            day: Math.round(this._getCurentDataForNextDay("main.temp", day))
	                        }
	                    });
	                }

	                // console.log(data);
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            this._db.activeCity.days = days;
	        }
	    }, {
	        key: "_getCurentDataForNextDay",
	        value: function _getCurentDataForNextDay(prop, day) {
	            function gotObj(prop, obj) {
	                var traceProp = prop.split(".");
	                var res = obj[traceProp[0]];

	                if (!res) {
	                    throw new Error("There is no such property");
	                }

	                if (traceProp.length > 1) {
	                    return gotObj(traceProp.slice(1).join("."), res);
	                } else {
	                    return res;
	                }
	            }

	            return day[4] ? gotObj(prop, day[4]) : gotObj(prop, day[day.length - 1]);
	        }
	    }, {
	        key: "hadnleError",
	        value: function hadnleError(error) {
	            if (error.name === "FetchDataError") {
	                this.trigger(this.constructor.EVENTS.onFetchDataError);
	            } else {
	                throw new Error(error.name);
	            }
	        }
	    }, {
	        key: "_firstLetterToUpperCase",
	        value: function _firstLetterToUpperCase(str) {
	            return str[0].toUpperCase() + str.slice(1);
	        }
	    }, {
	        key: "reloadData",
	        value: function reloadData() {
	            this.getData({ id: this._db.activeCity.id });
	        }
	    }, {
	        key: "checkLocalStorage",
	        value: function checkLocalStorage() {

	            if (localStorage.getItem('cities')) {
	                var cities = JSON.parse(localStorage.getItem("cities"));

	                this._db.cities = cities;

	                this._restoreData();
	                this.trigger(Model.EVENTS.onRestoreDataBegin);
	                // console.log(this._db);
	            } else {
	                this.trigger(Model.EVENTS.onEmptyStorage);
	            }
	        }
	    }, {
	        key: "_getActiveCity",
	        value: function _getActiveCity() {
	            var cities = this._db.cities;
	            var active = {};

	            for (var city in cities) {
	                if (cities.hasOwnProperty(city)) {
	                    if (cities[city].active) {
	                        active = cities[city];
	                    }
	                }
	            }

	            return active;
	        }
	    }, {
	        key: "_restoreData",
	        value: function _restoreData() {
	            var data = this._db.cities;
	            var dataAsArray = this._transformDataFromObjToArray(data);
	            var sortByWeightToTop = dataAsArray.slice().sort(function (a, b) {
	                return a.weight > b.weight;
	            });

	            this.trigger(Model.EVENTS.onAddListOfCities, sortByWeightToTop);
	            this.getData(this._getActiveCity());
	        }
	    }, {
	        key: "_isEmptyObj",
	        value: function _isEmptyObj(obj) {
	            for (var key in obj) {
	                return false;
	            }

	            return true;
	        }
	    }, {
	        key: "_clearLocalStorage",
	        value: function _clearLocalStorage() {
	            localStorage.removeItem("cities");
	        }
	    }, {
	        key: "_transformDataFromObjToArray",
	        value: function _transformDataFromObjToArray(obj) {
	            var array = [];
	            var keys = Object.keys(obj);

	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = keys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var _key = _step5.value;

	                    array.push(obj[_key]);
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }

	            return array;
	        }
	    }, {
	        key: "_saveDataToLocalStorage",
	        value: function _saveDataToLocalStorage() {
	            if (this._isEmptyObj(this._db.cities)) {
	                this._clearLocalStorage();

	                return;
	            }

	            var cities = JSON.stringify(this._db.cities);

	            localStorage.setItem('cities', cities);
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onDataReady": "onDataReady",
	                "onDataReload": "onDataReload",
	                "onAddCity": "onAddCity",
	                "onSetActiveCity": "onSetActiveCity",
	                "onAddListOfCities": "onAddListOfCities",
	                "onRestoreDataBegin": "onRestoreDataBegin",
	                "onEmptyStorage": "onEmptyStorage",
	                "onFetchDataError": "onFetchDataError",
	                FetchData: _fetchData2.default.EVENTS
	            };
	        }
	    }]);

	    return Model;
	}();

	exports.default = Model;


	for (var key in _eventMixin2.default) {
	    Model.prototype[key] = _eventMixin2.default[key];
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var db = {
	    api: {
	        url: "http://api.openweathermap.org/data/2.5/",
	        weather: "weather",
	        forecast: "forecast",
	        appid: "01f8517a7337057f1ed1f0d72f195c73",
	        cross: "https://cors-anywhere.herokuapp.com/"
	    },
	    activeCity: {
	        id: "",
	        main: {},
	        details: [],
	        hourly: [],
	        days: []
	    },
	    units: {
	        pressure: {
	            str: "Pressure",
	            unit: " hPa"
	        },
	        humidity: {
	            str: "Humidity",
	            unit: " %"
	        },
	        wind: {
	            str: "Wind",
	            unit: " m/s"
	        }
	    },
	    getDetailsUnits: function getDetailsUnits(unit) {
	        return this.units[unit];
	    },

	    cities: {},
	    iconsMap: {
	        "01d": "m01d",
	        "01n": "m01n",
	        "02d": "m02d",
	        "02n": "m02n",
	        "03d": "m03d",
	        "03n": "m03n",
	        "04d": "m04d",
	        "04n": "m04n",
	        "09d": "m09d",
	        "09n": "m09n",
	        "10d": "m10d",
	        "10n": "m10n",
	        "11d": "m11d",
	        "11n": "m11n",
	        "13d": "m13d",
	        "13n": "m13n",
	        "50d": "m50d",
	        "50n": "m50n"
	    },
	    transformIcons: function transformIcons(iconCode) {
	        return this.iconsMap[iconCode];
	    }
	};

		exports.default = db;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise, fetch) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _eventMixin = __webpack_require__(41);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	var _errors = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FetchData = function () {
	    function FetchData() {
	        _classCallCheck(this, FetchData);
	    }

	    _createClass(FetchData, [{
	        key: "getData",
	        value: function getData(urls) {
	            var chain = Promise.resolve();
	            var results = [];
	            var self = this;

	            this.trigger("onStartFetchData");

	            urls.forEach(function (url) {
	                chain = chain.then(function () {
	                    return fetch(url);
	                }).then(function (response) {
	                    if (response.status !== 200) {
	                        var error = new Error(response.statusText);
	                        error.code = response.status;

	                        throw error;
	                    } else {
	                        return response.json();
	                    }
	                }).catch(function (error) {
	                    if (error.name === "SyntaxError") {
	                        throw new _errors.DataReadError("Синтаксическая ошибка в данных полученных с сервера", error);
	                    } else {
	                        throw new _errors.FetchDataError(error.message, error);
	                    }
	                }).then(function (data) {
	                    results.push(data);
	                });
	            });

	            chain.then(function () {
	                self.trigger(self.constructor.EVENTS.onDataFetched, results);
	            }).catch(function (error) {
	                self.trigger(self.constructor.EVENTS.onDataFetchError, error);
	            });
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onDataFetched": "onDataFetched",
	                "onDataFetchError": "onDataFetchError",
	                "onStartFetchData": "onStartFetchData"
	            };
	        }
	    }]);

	    return FetchData;
	}();

	exports.default = FetchData;


	for (var key in _eventMixin2.default) {
	    FetchData.prototype[key] = _eventMixin2.default[key];
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37), __webpack_require__(40)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;/* WEBPACK VAR INJECTION */(function(process, Promise, global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */

	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.ES6Promise = factory();
	})(undefined, function () {
	  'use strict';

	  function objectOrFunction(x) {
	    return typeof x === 'function' || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }

	  function isFunction(x) {
	    return typeof x === 'function';
	  }

	  var _isArray = undefined;
	  if (!Array.isArray) {
	    _isArray = function _isArray(x) {
	      return Object.prototype.toString.call(x) === '[object Array]';
	    };
	  } else {
	    _isArray = Array.isArray;
	  }

	  var isArray = _isArray;

	  var len = 0;
	  var vertxNext = undefined;
	  var customSchedulerFn = undefined;

	  var asap = function asap(callback, arg) {
	    queue[len] = callback;
	    queue[len + 1] = arg;
	    len += 2;
	    if (len === 2) {
	      // If len is 2, that means that we need to schedule an async flush.
	      // If additional callbacks are queued before the queue is flushed, they
	      // will be processed by this flush that we are scheduling.
	      if (customSchedulerFn) {
	        customSchedulerFn(flush);
	      } else {
	        scheduleFlush();
	      }
	    }
	  };

	  function setScheduler(scheduleFn) {
	    customSchedulerFn = scheduleFn;
	  }

	  function setAsap(asapFn) {
	    asap = asapFn;
	  }

	  var browserWindow = typeof window !== 'undefined' ? window : undefined;
	  var browserGlobal = browserWindow || {};
	  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	  // test for web worker but not in IE10
	  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	  // node
	  function useNextTick() {
	    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	    // see https://github.com/cujojs/when/issues/410 for details
	    return function () {
	      return process.nextTick(flush);
	    };
	  }

	  // vertx
	  function useVertxTimer() {
	    if (typeof vertxNext !== 'undefined') {
	      return function () {
	        vertxNext(flush);
	      };
	    }

	    return useSetTimeout();
	  }

	  function useMutationObserver() {
	    var iterations = 0;
	    var observer = new BrowserMutationObserver(flush);
	    var node = document.createTextNode('');
	    observer.observe(node, { characterData: true });

	    return function () {
	      node.data = iterations = ++iterations % 2;
	    };
	  }

	  // web worker
	  function useMessageChannel() {
	    var channel = new MessageChannel();
	    channel.port1.onmessage = flush;
	    return function () {
	      return channel.port2.postMessage(0);
	    };
	  }

	  function useSetTimeout() {
	    // Store setTimeout reference so es6-promise will be unaffected by
	    // other code modifying setTimeout (like sinon.useFakeTimers())
	    var globalSetTimeout = setTimeout;
	    return function () {
	      return globalSetTimeout(flush, 1);
	    };
	  }

	  var queue = new Array(1000);
	  function flush() {
	    for (var i = 0; i < len; i += 2) {
	      var callback = queue[i];
	      var arg = queue[i + 1];

	      callback(arg);

	      queue[i] = undefined;
	      queue[i + 1] = undefined;
	    }

	    len = 0;
	  }

	  function attemptVertx() {
	    try {
	      var r = require;
	      var vertx = __webpack_require__(39);
	      vertxNext = vertx.runOnLoop || vertx.runOnContext;
	      return useVertxTimer();
	    } catch (e) {
	      return useSetTimeout();
	    }
	  }

	  var scheduleFlush = undefined;
	  // Decide what async method to use to triggering processing of queued callbacks:
	  if (isNode) {
	    scheduleFlush = useNextTick();
	  } else if (BrowserMutationObserver) {
	    scheduleFlush = useMutationObserver();
	  } else if (isWorker) {
	    scheduleFlush = useMessageChannel();
	  } else if (browserWindow === undefined && "function" === 'function') {
	    scheduleFlush = attemptVertx();
	  } else {
	    scheduleFlush = useSetTimeout();
	  }

	  function then(onFulfillment, onRejection) {
	    var _arguments = arguments;

	    var parent = this;

	    var child = new this.constructor(noop);

	    if (child[PROMISE_ID] === undefined) {
	      makePromise(child);
	    }

	    var _state = parent._state;

	    if (_state) {
	      (function () {
	        var callback = _arguments[_state - 1];
	        asap(function () {
	          return invokeCallback(_state, child, callback, parent._result);
	        });
	      })();
	    } else {
	      subscribe(parent, child, onFulfillment, onRejection);
	    }

	    return child;
	  }

	  /**
	    `Promise.resolve` returns a promise that will become resolved with the
	    passed `value`. It is shorthand for the following:
	  
	    ```javascript
	    let promise = new Promise(function(resolve, reject){
	      resolve(1);
	    });
	  
	    promise.then(function(value){
	      // value === 1
	    });
	    ```
	  
	    Instead of writing the above, your code now simply becomes the following:
	  
	    ```javascript
	    let promise = Promise.resolve(1);
	  
	    promise.then(function(value){
	      // value === 1
	    });
	    ```
	  
	    @method resolve
	    @static
	    @param {Any} value value that the returned promise will be resolved with
	    Useful for tooling.
	    @return {Promise} a promise that will become fulfilled with the given
	    `value`
	  */
	  function resolve(object) {
	    /*jshint validthis:true */
	    var Constructor = this;

	    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
	      return object;
	    }

	    var promise = new Constructor(noop);
	    _resolve(promise, object);
	    return promise;
	  }

	  var PROMISE_ID = Math.random().toString(36).substring(16);

	  function noop() {}

	  var PENDING = void 0;
	  var FULFILLED = 1;
	  var REJECTED = 2;

	  var GET_THEN_ERROR = new ErrorObject();

	  function selfFulfillment() {
	    return new TypeError("You cannot resolve a promise with itself");
	  }

	  function cannotReturnOwn() {
	    return new TypeError('A promises callback cannot return that same promise.');
	  }

	  function getThen(promise) {
	    try {
	      return promise.then;
	    } catch (error) {
	      GET_THEN_ERROR.error = error;
	      return GET_THEN_ERROR;
	    }
	  }

	  function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	    try {
	      then.call(value, fulfillmentHandler, rejectionHandler);
	    } catch (e) {
	      return e;
	    }
	  }

	  function handleForeignThenable(promise, thenable, then) {
	    asap(function (promise) {
	      var sealed = false;
	      var error = tryThen(then, thenable, function (value) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;
	        if (thenable !== value) {
	          _resolve(promise, value);
	        } else {
	          fulfill(promise, value);
	        }
	      }, function (reason) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;

	        _reject(promise, reason);
	      }, 'Settle: ' + (promise._label || ' unknown promise'));

	      if (!sealed && error) {
	        sealed = true;
	        _reject(promise, error);
	      }
	    }, promise);
	  }

	  function handleOwnThenable(promise, thenable) {
	    if (thenable._state === FULFILLED) {
	      fulfill(promise, thenable._result);
	    } else if (thenable._state === REJECTED) {
	      _reject(promise, thenable._result);
	    } else {
	      subscribe(thenable, undefined, function (value) {
	        return _resolve(promise, value);
	      }, function (reason) {
	        return _reject(promise, reason);
	      });
	    }
	  }

	  function handleMaybeThenable(promise, maybeThenable, then$$) {
	    if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	      handleOwnThenable(promise, maybeThenable);
	    } else {
	      if (then$$ === GET_THEN_ERROR) {
	        _reject(promise, GET_THEN_ERROR.error);
	      } else if (then$$ === undefined) {
	        fulfill(promise, maybeThenable);
	      } else if (isFunction(then$$)) {
	        handleForeignThenable(promise, maybeThenable, then$$);
	      } else {
	        fulfill(promise, maybeThenable);
	      }
	    }
	  }

	  function _resolve(promise, value) {
	    if (promise === value) {
	      _reject(promise, selfFulfillment());
	    } else if (objectOrFunction(value)) {
	      handleMaybeThenable(promise, value, getThen(value));
	    } else {
	      fulfill(promise, value);
	    }
	  }

	  function publishRejection(promise) {
	    if (promise._onerror) {
	      promise._onerror(promise._result);
	    }

	    publish(promise);
	  }

	  function fulfill(promise, value) {
	    if (promise._state !== PENDING) {
	      return;
	    }

	    promise._result = value;
	    promise._state = FULFILLED;

	    if (promise._subscribers.length !== 0) {
	      asap(publish, promise);
	    }
	  }

	  function _reject(promise, reason) {
	    if (promise._state !== PENDING) {
	      return;
	    }
	    promise._state = REJECTED;
	    promise._result = reason;

	    asap(publishRejection, promise);
	  }

	  function subscribe(parent, child, onFulfillment, onRejection) {
	    var _subscribers = parent._subscribers;
	    var length = _subscribers.length;

	    parent._onerror = null;

	    _subscribers[length] = child;
	    _subscribers[length + FULFILLED] = onFulfillment;
	    _subscribers[length + REJECTED] = onRejection;

	    if (length === 0 && parent._state) {
	      asap(publish, parent);
	    }
	  }

	  function publish(promise) {
	    var subscribers = promise._subscribers;
	    var settled = promise._state;

	    if (subscribers.length === 0) {
	      return;
	    }

	    var child = undefined,
	        callback = undefined,
	        detail = promise._result;

	    for (var i = 0; i < subscribers.length; i += 3) {
	      child = subscribers[i];
	      callback = subscribers[i + settled];

	      if (child) {
	        invokeCallback(settled, child, callback, detail);
	      } else {
	        callback(detail);
	      }
	    }

	    promise._subscribers.length = 0;
	  }

	  function ErrorObject() {
	    this.error = null;
	  }

	  var TRY_CATCH_ERROR = new ErrorObject();

	  function tryCatch(callback, detail) {
	    try {
	      return callback(detail);
	    } catch (e) {
	      TRY_CATCH_ERROR.error = e;
	      return TRY_CATCH_ERROR;
	    }
	  }

	  function invokeCallback(settled, promise, callback, detail) {
	    var hasCallback = isFunction(callback),
	        value = undefined,
	        error = undefined,
	        succeeded = undefined,
	        failed = undefined;

	    if (hasCallback) {
	      value = tryCatch(callback, detail);

	      if (value === TRY_CATCH_ERROR) {
	        failed = true;
	        error = value.error;
	        value = null;
	      } else {
	        succeeded = true;
	      }

	      if (promise === value) {
	        _reject(promise, cannotReturnOwn());
	        return;
	      }
	    } else {
	      value = detail;
	      succeeded = true;
	    }

	    if (promise._state !== PENDING) {
	      // noop
	    } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	  }

	  function initializePromise(promise, resolver) {
	    try {
	      resolver(function resolvePromise(value) {
	        _resolve(promise, value);
	      }, function rejectPromise(reason) {
	        _reject(promise, reason);
	      });
	    } catch (e) {
	      _reject(promise, e);
	    }
	  }

	  var id = 0;
	  function nextId() {
	    return id++;
	  }

	  function makePromise(promise) {
	    promise[PROMISE_ID] = id++;
	    promise._state = undefined;
	    promise._result = undefined;
	    promise._subscribers = [];
	  }

	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);

	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }

	    if (isArray(input)) {
	      this._input = input;
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate();
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      _reject(this.promise, validationError());
	    }
	  }

	  function validationError() {
	    return new Error('Array Methods must be provided an Array');
	  };

	  Enumerator.prototype._enumerate = function () {
	    var length = this.length;
	    var _input = this._input;

	    for (var i = 0; this._state === PENDING && i < length; i++) {
	      this._eachEntry(_input[i], i);
	    }
	  };

	  Enumerator.prototype._eachEntry = function (entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$ = c.resolve;

	    if (resolve$$ === resolve) {
	      var _then = getThen(entry);

	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise) {
	        var promise = new c(noop);
	        handleMaybeThenable(promise, entry, _then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$) {
	          return resolve$$(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$(entry), i);
	    }
	  };

	  Enumerator.prototype._settledAt = function (state, i, value) {
	    var promise = this.promise;

	    if (promise._state === PENDING) {
	      this._remaining--;

	      if (state === REJECTED) {
	        _reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };

	  Enumerator.prototype._willSettleAt = function (promise, i) {
	    var enumerator = this;

	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };

	  /**
	    `Promise.all` accepts an array of promises, and returns a new promise which
	    is fulfilled with an array of fulfillment values for the passed promises, or
	    rejected with the reason of the first passed promise to be rejected. It casts all
	    elements of the passed iterable to promises as it runs this algorithm.
	  
	    Example:
	  
	    ```javascript
	    let promise1 = resolve(1);
	    let promise2 = resolve(2);
	    let promise3 = resolve(3);
	    let promises = [ promise1, promise2, promise3 ];
	  
	    Promise.all(promises).then(function(array){
	      // The array here would be [ 1, 2, 3 ];
	    });
	    ```
	  
	    If any of the `promises` given to `all` are rejected, the first promise
	    that is rejected will be given as an argument to the returned promises's
	    rejection handler. For example:
	  
	    Example:
	  
	    ```javascript
	    let promise1 = resolve(1);
	    let promise2 = reject(new Error("2"));
	    let promise3 = reject(new Error("3"));
	    let promises = [ promise1, promise2, promise3 ];
	  
	    Promise.all(promises).then(function(array){
	      // Code here never runs because there are rejected promises!
	    }, function(error) {
	      // error.message === "2"
	    });
	    ```
	  
	    @method all
	    @static
	    @param {Array} entries array of promises
	    @param {String} label optional string for labeling the promise.
	    Useful for tooling.
	    @return {Promise} promise that is fulfilled when all `promises` have been
	    fulfilled, or rejected if any of them become rejected.
	    @static
	  */
	  function all(entries) {
	    return new Enumerator(this, entries).promise;
	  }

	  /**
	    `Promise.race` returns a new promise which is settled in the same way as the
	    first passed promise to settle.
	  
	    Example:
	  
	    ```javascript
	    let promise1 = new Promise(function(resolve, reject){
	      setTimeout(function(){
	        resolve('promise 1');
	      }, 200);
	    });
	  
	    let promise2 = new Promise(function(resolve, reject){
	      setTimeout(function(){
	        resolve('promise 2');
	      }, 100);
	    });
	  
	    Promise.race([promise1, promise2]).then(function(result){
	      // result === 'promise 2' because it was resolved before promise1
	      // was resolved.
	    });
	    ```
	  
	    `Promise.race` is deterministic in that only the state of the first
	    settled promise matters. For example, even if other promises given to the
	    `promises` array argument are resolved, but the first settled promise has
	    become rejected before the other promises became fulfilled, the returned
	    promise will become rejected:
	  
	    ```javascript
	    let promise1 = new Promise(function(resolve, reject){
	      setTimeout(function(){
	        resolve('promise 1');
	      }, 200);
	    });
	  
	    let promise2 = new Promise(function(resolve, reject){
	      setTimeout(function(){
	        reject(new Error('promise 2'));
	      }, 100);
	    });
	  
	    Promise.race([promise1, promise2]).then(function(result){
	      // Code here never runs
	    }, function(reason){
	      // reason.message === 'promise 2' because promise 2 became rejected before
	      // promise 1 became fulfilled
	    });
	    ```
	  
	    An example real-world use case is implementing timeouts:
	  
	    ```javascript
	    Promise.race([ajax('foo.json'), timeout(5000)])
	    ```
	  
	    @method race
	    @static
	    @param {Array} promises array of promises to observe
	    Useful for tooling.
	    @return {Promise} a promise which settles in the same way as the first passed
	    promise to settle.
	  */
	  function race(entries) {
	    /*jshint validthis:true */
	    var Constructor = this;

	    if (!isArray(entries)) {
	      return new Constructor(function (_, reject) {
	        return reject(new TypeError('You must pass an array to race.'));
	      });
	    } else {
	      return new Constructor(function (resolve, reject) {
	        var length = entries.length;
	        for (var i = 0; i < length; i++) {
	          Constructor.resolve(entries[i]).then(resolve, reject);
	        }
	      });
	    }
	  }

	  /**
	    `Promise.reject` returns a promise rejected with the passed `reason`.
	    It is shorthand for the following:
	  
	    ```javascript
	    let promise = new Promise(function(resolve, reject){
	      reject(new Error('WHOOPS'));
	    });
	  
	    promise.then(function(value){
	      // Code here doesn't run because the promise is rejected!
	    }, function(reason){
	      // reason.message === 'WHOOPS'
	    });
	    ```
	  
	    Instead of writing the above, your code now simply becomes the following:
	  
	    ```javascript
	    let promise = Promise.reject(new Error('WHOOPS'));
	  
	    promise.then(function(value){
	      // Code here doesn't run because the promise is rejected!
	    }, function(reason){
	      // reason.message === 'WHOOPS'
	    });
	    ```
	  
	    @method reject
	    @static
	    @param {Any} reason value that the returned promise will be rejected with.
	    Useful for tooling.
	    @return {Promise} a promise rejected with the given `reason`.
	  */
	  function reject(reason) {
	    /*jshint validthis:true */
	    var Constructor = this;
	    var promise = new Constructor(noop);
	    _reject(promise, reason);
	    return promise;
	  }

	  function needsResolver() {
	    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	  }

	  function needsNew() {
	    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	  }

	  /**
	    Promise objects represent the eventual result of an asynchronous operation. The
	    primary way of interacting with a promise is through its `then` method, which
	    registers callbacks to receive either a promise's eventual value or the reason
	    why the promise cannot be fulfilled.
	  
	    Terminology
	    -----------
	  
	    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	    - `thenable` is an object or function that defines a `then` method.
	    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	    - `exception` is a value that is thrown using the throw statement.
	    - `reason` is a value that indicates why a promise was rejected.
	    - `settled` the final resting state of a promise, fulfilled or rejected.
	  
	    A promise can be in one of three states: pending, fulfilled, or rejected.
	  
	    Promises that are fulfilled have a fulfillment value and are in the fulfilled
	    state.  Promises that are rejected have a rejection reason and are in the
	    rejected state.  A fulfillment value is never a thenable.
	  
	    Promises can also be said to *resolve* a value.  If this value is also a
	    promise, then the original promise's settled state will match the value's
	    settled state.  So a promise that *resolves* a promise that rejects will
	    itself reject, and a promise that *resolves* a promise that fulfills will
	    itself fulfill.
	  
	  
	    Basic Usage:
	    ------------
	  
	    ```js
	    let promise = new Promise(function(resolve, reject) {
	      // on success
	      resolve(value);
	  
	      // on failure
	      reject(reason);
	    });
	  
	    promise.then(function(value) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	  
	    Advanced Usage:
	    ---------------
	  
	    Promises shine when abstracting away asynchronous interactions such as
	    `XMLHttpRequest`s.
	  
	    ```js
	    function getJSON(url) {
	      return new Promise(function(resolve, reject){
	        let xhr = new XMLHttpRequest();
	  
	        xhr.open('GET', url);
	        xhr.onreadystatechange = handler;
	        xhr.responseType = 'json';
	        xhr.setRequestHeader('Accept', 'application/json');
	        xhr.send();
	  
	        function handler() {
	          if (this.readyState === this.DONE) {
	            if (this.status === 200) {
	              resolve(this.response);
	            } else {
	              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	            }
	          }
	        };
	      });
	    }
	  
	    getJSON('/posts.json').then(function(json) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	  
	    Unlike callbacks, promises are great composable primitives.
	  
	    ```js
	    Promise.all([
	      getJSON('/posts'),
	      getJSON('/comments')
	    ]).then(function(values){
	      values[0] // => postsJSON
	      values[1] // => commentsJSON
	  
	      return values;
	    });
	    ```
	  
	    @class Promise
	    @param {function} resolver
	    Useful for tooling.
	    @constructor
	  */
	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }

	  Promise.all = all;
	  Promise.race = race;
	  Promise.resolve = resolve;
	  Promise.reject = reject;
	  Promise._setScheduler = setScheduler;
	  Promise._setAsap = setAsap;
	  Promise._asap = asap;

	  Promise.prototype = {
	    constructor: Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	    
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	    
	      Chaining
	      --------
	    
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	    
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	    
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	    
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	    
	      Assimilation
	      ------------
	    
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	    
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	    
	      If the assimliated promise rejects, then the downstream promise will also reject.
	    
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	    
	      Simple Example
	      --------------
	    
	      Synchronous Example
	    
	      ```javascript
	      let result;
	    
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	    
	      Errback Example
	    
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	    
	      Promise Example;
	    
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	    
	      Advanced Example
	      --------------
	    
	      Synchronous Example
	    
	      ```javascript
	      let author, books;
	    
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	    
	      Errback Example
	    
	      ```js
	    
	      function foundBooks(books) {
	    
	      }
	    
	      function failure(reason) {
	    
	      }
	    
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	    
	      Promise Example;
	    
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	    
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	    then: then,

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	    
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	    
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	    
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	    
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	    'catch': function _catch(onRejection) {
	      return this.then(null, onRejection);
	    }
	  };

	  function polyfill() {
	    var local = undefined;

	    if (typeof global !== 'undefined') {
	      local = global;
	    } else if (typeof self !== 'undefined') {
	      local = self;
	    } else {
	      try {
	        local = Function('return this')();
	      } catch (e) {
	        throw new Error('polyfill failed because global object is unavailable in this environment');
	      }
	    }

	    var P = local.Promise;

	    if (P) {
	      var promiseToString = null;
	      try {
	        promiseToString = Object.prototype.toString.call(P.resolve());
	      } catch (e) {
	        // silently ignored
	      }

	      if (promiseToString === '[object Promise]' && !P.cast) {
	        return;
	      }
	    }

	    local.Promise = Promise;
	  }

	  // Strange compat..
	  Promise.polyfill = polyfill;
	  Promise.Promise = Promise;

	  return Promise;
	});
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38), __webpack_require__(37), (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
		};

/***/ },
/* 39 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise, global) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  if (support.arrayBuffer) {
	    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

	    var isDataView = function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    };

	    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	    };
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ',' + value : value;
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null;
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise;
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise;
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('');
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0);
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer;
	    }
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer);
	        }
	      };
	    }

	    this.text = function () {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected;
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob);
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text');
	      } else {
	        return Promise.resolve(this._bodyText);
	      }
	    };

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;

	    if (typeof input === 'string') {
	      this.url = input;
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this, { body: this._bodyInit });
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    rawHeaders.split('\r\n').forEach(function (line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = 'status' in options ? options.status : 200;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request = new Request(input, init);
	      var xhr = new XMLHttpRequest();

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.fetch;
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37), (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var EventMixin = {

	    /**
	     * Подписка на событие
	     * Использование:
	     *  object.on('select', function(item) { ... }
	     */
	    on: function on(eventName, handler) {
	        if (!this._eventHandlers) this._eventHandlers = {};
	        if (!this._eventHandlers[eventName]) {
	            this._eventHandlers[eventName] = [];
	        }
	        this._eventHandlers[eventName].push(handler);
	    },

	    /**
	     * Прекращение подписки
	     *  object.off('select',  handler)
	     */
	    off: function off(eventName, handler) {
	        var handlers = this._eventHandlers && this._eventHandlers[eventName];
	        if (!handlers) return;
	        for (var i = 0; i < handlers.length; i++) {
	            if (handlers[i] == handler) {
	                handlers.splice(i--, 1);
	            }
	        }
	    },

	    /**
	     * Генерация события с передачей данных
	     *  this.trigger('select', item);
	     */
	    trigger: function trigger(eventName /*, ... */) {

	        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
	            return; // обработчиков для события нет
	        }

	        // вызвать обработчики
	        var handlers = this._eventHandlers[eventName];
	        for (var i = 0; i < handlers.length; i++) {
	            handlers[i].apply(this, [].slice.call(arguments, 1));
	        }
	    }
	};

		exports.default = EventMixin;

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CustomError = function CustomError(message, cause) {
	    _classCallCheck(this, CustomError);

	    this.message = message;
	    this.cause = cause;
	    this.name = 'CustomError';
	    this.stack = cause.stack;
	};

	var DataReadError = function (_CustomError) {
	    _inherits(DataReadError, _CustomError);

	    function DataReadError(message, cause) {
	        _classCallCheck(this, DataReadError);

	        var _this = _possibleConstructorReturn(this, (DataReadError.__proto__ || Object.getPrototypeOf(DataReadError)).call(this, message, cause));

	        _this.name = 'DataReadError';
	        return _this;
	    }

	    return DataReadError;
	}(CustomError);

	var FetchDataError = function (_CustomError2) {
	    _inherits(FetchDataError, _CustomError2);

	    function FetchDataError(message, cause) {
	        _classCallCheck(this, FetchDataError);

	        var _this2 = _possibleConstructorReturn(this, (FetchDataError.__proto__ || Object.getPrototypeOf(FetchDataError)).call(this, message, cause));

	        _this2.name = 'FetchDataError';
	        return _this2;
	    }

	    return FetchDataError;
	}(CustomError);

	exports.DataReadError = DataReadError;
		exports.FetchDataError = FetchDataError;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _currentCity = __webpack_require__(44);

	var _currentCity2 = _interopRequireDefault(_currentCity);

	var _nexDays = __webpack_require__(53);

	var _nexDays2 = _interopRequireDefault(_nexDays);

	var _menu = __webpack_require__(55);

	var _menu2 = _interopRequireDefault(_menu);

	var _search = __webpack_require__(56);

	var _search2 = _interopRequireDefault(_search);

	var _cityViewer = __webpack_require__(60);

	var _cityViewer2 = _interopRequireDefault(_cityViewer);

	__webpack_require__(50);

	var _eventMixin = __webpack_require__(41);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View() {
	        var _this = this;

	        _classCallCheck(this, View);

	        this._mainElement = new Hammer(document.body);
	        this._mainElement.get('swipe').set({ threshold: 0, velocity: 0.1 });

	        this.currentCity = new _currentCity2.default(document.querySelector("[data-current-city]"));
	        this.nexDays = new _nexDays2.default(document.querySelector("[data-addition]"));
	        this.menu = new _menu2.default(document.querySelector("[data-menu]"));
	        this.search = new _search2.default(document.querySelector("[data-search]"));
	        this.cityViewer = new _cityViewer2.default(document.querySelector("[data-city-viewer]"));

	        this.cityViewer.on(_cityViewer2.default.EVENTS.onDeleteCityGetDimention, function (isScroll) {
	            if (isScroll) {
	                _this.menu.setOffsetMargin();
	            } else {
	                _this.menu.removeOffsetMargin();
	            }
	        });

	        this.cityViewer.on(_cityViewer2.default.EVENTS.isScroll, function () {
	            _this.menu.setOffsetMargin();
	        });

	        this.cityViewer.on(_cityViewer2.default.EVENTS.onAddCity, function (isScroll) {
	            if (isScroll) {
	                _this.menu.setOffsetMargin();
	            } else {
	                _this.menu.removeOffsetMargin();
	            }
	        });

	        this.cityViewer.on(_cityViewer2.default.EVENTS.onShowPreloaderAddCity, function (isScroll) {
	            if (isScroll) {
	                _this.menu.setOffsetMargin();
	            } else {
	                _this.menu.removeOffsetMargin();
	            }
	        });

	        this.cityViewer.on(_cityViewer2.default.EVENTS.onHidePreloaderAddCity, function (isScroll) {
	            if (isScroll) {
	                _this.menu.setOffsetMargin();
	            } else {
	                _this.menu.removeOffsetMargin();
	            }
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onShowMoreDetails, function (event) {
	            _this.menu.disable();
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onHideMoreDetails, function (event) {
	            _this.menu.enable();
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onChangeHeightByPan, function (value) {
	            _this.nexDays.setHeight(parseInt(_this.nexDays.getHeight()) + value + "px");
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onChangeHeightAfterAnimationPanUp, function (value) {
	            _this.nexDays.setHeight(value + "px");
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onChangeHeightAfterAnimationPanDown, function () {
	            _this.nexDays.clearHeight();
	        });

	        window.addEventListener("resize", this._addLandClass.bind(this, document.body));
	        window.addEventListener("resize", function (event) {
	            _this.trigger(View.EVENTS.resizeWindow);
	            _this.currentCity.addPanClass();
	            _this.currentCity.removeSmallClass();
	            _this._enableDisableMenu();

	            if (_this.currentCity.isSmallSize() && !_this._isLandscape()) {
	                _this.nexDays.setHeight(document.documentElement.clientHeight - parseInt(_this.currentCity.getHeight()) + "px");
	            } else {
	                _this.nexDays.clearHeight();
	            }

	            // if (document.documentElement.clientWidth < 768) {
	            _this.currentCity.details.rebuild(_this.currentCity.getFreeSpaceFroDetails());
	            // }
	        });

	        this._mainElement.on("swipeleft", function (ev) {
	            // console.log("swipe")
	            if (!ev.target.closest(".menuSwipe")) {
	                return;
	            }

	            _this.menu.hide();
	        });

	        this._mainElement.on("swiperight", function (ev) {
	            if (!ev.target.closest(".menuSwipe")) {
	                return;
	            }

	            _this.menu.show();
	        });

	        this._addLandClass(document.body);
	        this._enableDisableMenu();
	    }

	    _createClass(View, [{
	        key: "showPreloader",
	        value: function showPreloader() {
	            document.querySelector(".preloader").classList.add("show");
	        }
	    }, {
	        key: "hidePreloader",
	        value: function hidePreloader() {
	            document.querySelector(".preloader").classList.remove("show");
	        }
	    }, {
	        key: "showWelcomeScreen",
	        value: function showWelcomeScreen() {
	            document.querySelector(".welcome-screen").classList.add("show");
	        }
	    }, {
	        key: "hideWelcomeScreen",
	        value: function hideWelcomeScreen() {
	            document.querySelector(".welcome-screen").classList.remove("show");
	        }
	    }, {
	        key: "showRefreshing",
	        value: function showRefreshing() {
	            var elem = document.querySelector(".city__reload");

	            document.querySelector(".city__reload").classList.add("reloading");
	        }
	    }, {
	        key: "hideRefreshing",
	        value: function hideRefreshing() {
	            var elem = document.querySelector(".city__reload");

	            elem.classList.remove("reloading");
	        }
	    }, {
	        key: "_enableDisableMenu",
	        value: function _enableDisableMenu() {
	            if (this._getScreenWidth() < 992) {
	                this.menu.enable();
	            } else {
	                this.menu.disable();
	            }
	        }
	    }, {
	        key: "_addLandClass",
	        value: function _addLandClass(elem) {
	            if (this._isLandscape()) {
	                elem.classList.add("isLandscape");
	            } else {
	                elem.classList.remove("isLandscape");
	            }
	        }
	    }, {
	        key: "_getScreenWidth",
	        value: function _getScreenWidth() {
	            return document.documentElement.clientWidth;
	        }
	    }, {
	        key: "_isLandscape",
	        value: function _isLandscape() {
	            return document.documentElement.clientHeight < document.documentElement.clientWidth;
	        }
	    }, {
	        key: "showMessage",
	        value: function showMessage(message) {
	            var popup = document.querySelector(".popup");
	            var inner = popup.querySelector(".popup__inner");

	            inner.innerHTML = message;
	            popup.classList.add("show");

	            popup.addEventListener("click", function me(event) {
	                this.classList.remove("show");
	                this.removeEventListener("click", me);
	            });
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "resizeWindow": "resizeWindow",
	                CurrentCity: _currentCity2.default.EVENTS,
	                NexDays: _nexDays2.default.EVENTS,
	                Menu: _menu2.default.EVENTS,
	                Search: _search2.default.EVENTS,
	                CityViewer: _cityViewer2.default.EVENTS
	            };
	        }
	    }]);

	    return View;
	}();

	exports.default = View;


	for (var key in _eventMixin2.default) {
	    View.prototype[key] = _eventMixin2.default[key];
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _details = __webpack_require__(45);

	var _details2 = _interopRequireDefault(_details);

	var _hourly = __webpack_require__(49);

	var _hourly2 = _interopRequireDefault(_hourly);

	var _eventMixin = __webpack_require__(41);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	__webpack_require__(50);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CurrentCity = function () {
	    function CurrentCity(elem) {
	        var _this = this;

	        _classCallCheck(this, CurrentCity);

	        this._elem = elem;

	        this._isSmallClass = false;
	        this._isMoreDetailsShown = false;

	        this.details = new _details2.default();
	        this.hourly = new _hourly2.default();

	        this._elem.querySelector("[data-details]").appendChild(this.details.elem);
	        this._elem.querySelector("[data-hourly]").appendChild(this.hourly.elem);

	        this._cityInitHeight = getComputedStyle(this._elem).height;
	        this._elem.addEventListener("click", this._manager.bind(this));
	        this._elem.addEventListener("transitionend", this._onAnimationEnd.bind(this));

	        this.setPanDirection();

	        window.addEventListener("resize", function (event) {
	            _this.setPanDirection();
	            _this._cityInitHeight = getComputedStyle(_this._elem).height;
	        });

	        this._hammertime.on("panup", this._handlePanUp.bind(this));

	        this._hammertime.on("pandown", this._handlePanDown.bind(this));

	        this.addPanClass();
	    }

	    _createClass(CurrentCity, [{
	        key: "setPanDirection",
	        value: function setPanDirection() {
	            if (this._isLandscape()) {
	                this._hammertime = new Hammer(this._elem, { domEvents: true });
	            } else {
	                if (!this._hammertime) {
	                    this._hammertime = new Hammer(this._elem, { domEvents: true });
	                }
	                this._hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	            }
	        }
	    }, {
	        key: "getFreeSpaceFroDetails",
	        value: function getFreeSpaceFroDetails() {
	            var details = this._elem.querySelector("[data-details]");
	            var more = this._elem.querySelector("[data-more-details]");
	            return more.getBoundingClientRect().top - details.getBoundingClientRect().top;
	        }
	    }, {
	        key: "_handlePanUp",
	        value: function _handlePanUp(event) {
	            if (!event.target.closest(".vertical")) {
	                return;
	            }

	            var cityHeight = getComputedStyle(this._elem).height;

	            if (parseInt(cityHeight) <= 150) {
	                return;
	            }

	            if (parseInt(cityHeight) < parseInt(this._cityInitHeight) - 10) {
	                this._elem.classList.add("small");
	                this.details.hide();
	                this._isSmallClass = true;
	                this._elem.style.height = "150px";
	                this._hideReloadButton();

	                return;
	            }

	            this._elem.style.height = parseInt(cityHeight) - event.distance + "px";
	            this.trigger(this.constructor.EVENTS.onChangeHeightByPan, event.distance);
	        }
	    }, {
	        key: "_handlePanDown",
	        value: function _handlePanDown(event) {
	            var cityHeight = getComputedStyle(this._elem).height;

	            if (parseInt(cityHeight) > 155) {
	                this._elem.classList.remove("small");
	                this._isSmallClass = false;
	                this._elem.style.height = "";
	                return;
	            }

	            this._elem.style.height = parseInt(cityHeight) + event.distance + "px";
	        }
	    }, {
	        key: "init",
	        value: function init() {
	            this._elem.classList.remove("init");
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this._elem.classList.add("init");
	        }
	    }, {
	        key: "render",
	        value: function render(data) {
	            var _this2 = this;

	            return new Promise(function (resolve, reject) {
	                _this2._elem.querySelector("[data-city-img]").src = data.img;
	                _this2._elem.querySelector("[data-city-data]").innerHTML = data.data;
	                _this2._elem.querySelector("[data-city-name]").innerHTML = data.name;
	                _this2._elem.querySelector("[data-city-weather]").innerHTML = data.weather;
	                _this2._elem.querySelector("[data-city-temp]").innerHTML = data.temp;

	                _this2._elem.querySelector("[data-city-img]").onload = function () {
	                    resolve();
	                };
	            });
	        }
	    }, {
	        key: "isSmallSize",
	        value: function isSmallSize() {
	            return this._elem.classList.contains("small");
	        }
	    }, {
	        key: "getHeight",
	        value: function getHeight() {
	            return getComputedStyle(this._elem).height;
	        }
	    }, {
	        key: "_manager",
	        value: function _manager(event) {
	            var target = event.target;

	            if (target.closest("[data-more-details]")) {
	                event.preventDefault();
	                this._toggleMoreView(target);
	            }

	            if (target.closest("[data-current-city-overlay]")) {
	                this._toggleMoreView(this._elem.querySelector("[data-more-details]"));
	            }

	            if (target.closest("[data-reload-data]")) {
	                event.preventDefault();
	                this.trigger(this.constructor.EVENTS.onReloadDataRequest, "");
	            }
	        }
	    }, {
	        key: "_hideReloadButton",
	        value: function _hideReloadButton() {
	            this._elem.querySelector("[data-reload-data]").style.display = "none";
	        }
	    }, {
	        key: "_showReloadButton",
	        value: function _showReloadButton() {
	            this._elem.querySelector("[data-reload-data]").style.display = "";
	        }
	    }, {
	        key: "_toggleMoreView",
	        value: function _toggleMoreView(elem) {
	            var _this3 = this;

	            var self = this;

	            if (!this._elem.classList.contains("show-more-details")) {
	                this._elem.classList.add("show-more-details");

	                if (this._elem.classList.contains("small")) {
	                    this.details.show();
	                    this.details.showMore();
	                } else {
	                    this.details.showMore();
	                }

	                elem.innerHTML = "less details";

	                this.trigger(this.constructor.EVENTS.onShowMoreDetails, "");

	                setTimeout(function () {
	                    _this3._elem.classList.add("shown");
	                    _this3._isMoreDetailsShown = true;
	                }, 0);
	            } else {
	                this._elem.classList.remove("shown");
	                this.trigger(this.constructor.EVENTS.onHideMoreDetails, "");

	                if (this._elem.classList.contains("small")) {
	                    this.details.hide();
	                }
	                this._elem.addEventListener("transitionend", function me(event) {
	                    self._elem.classList.remove("show-more-details");
	                    self._elem.removeEventListener("transitionend", me);
	                    self.details.hideMore();
	                    self.trigger(self.constructor.EVENTS.onHiddenMoreDetails, "");
	                    elem.innerHTML = "more details";
	                    self.details.rebuild(self.getFreeSpaceFroDetails());
	                    self._isMoreDetailsShown = false;
	                });
	            }
	        }
	    }, {
	        key: "_isLandscape",
	        value: function _isLandscape() {
	            return document.documentElement.clientHeight < document.documentElement.clientWidth;
	        }
	    }, {
	        key: "addPanClass",
	        value: function addPanClass() {
	            if (this._isLandscape()) {
	                this._elem.classList.remove("vertical");
	            } else {
	                if (document.documentElement.clientWidth >= 768) {
	                    return;
	                }

	                this._elem.classList.add("vertical");
	            }
	        }
	    }, {
	        key: "removeSmallClass",
	        value: function removeSmallClass() {
	            var _this4 = this;

	            if (this._isLandscape()) {
	                this.details.show();
	                this._elem.classList.remove("small");
	            } else {
	                if (this._isSmallClass) {
	                    this._elem.style.height = "50%";
	                    if (!this._isMoreDetailsShown) {
	                        this.details.hide();
	                    }
	                    setTimeout(function () {
	                        _this4._elem.style.height = "";
	                        _this4._elem.classList.add("small");
	                    }, 0);
	                }
	            }
	        }
	    }, {
	        key: "_onAnimationEnd",
	        value: function _onAnimationEnd() {
	            this._elem.style.height = "";
	            this.details.rebuild(this.getFreeSpaceFroDetails());
	            this.trigger(this.constructor.EVENTS.onAnimationEnd, "");

	            if (this._isLandscape()) {
	                this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimation, "");
	                // this.details.rebuild(this.getFreeSpaceFroDetails());
	            } else {
	                if (this._elem.classList.contains("small")) {
	                    this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimationPanUp, document.documentElement.clientHeight - parseInt(getComputedStyle(this._elem).height));
	                } else {
	                    this._showReloadButton();
	                    this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimationPanDown);
	                    // this.details.rebuild(this.getFreeSpaceFroDetails());
	                    this.details.show();
	                }
	            }
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onChangeHeightByPan": "onChangeHeightByPan",
	                "onChangeHeightAfterAnimationPanUp": "onChangeHeightAfterAnimationPanUp",
	                "onChangeHeightAfterAnimationPanDown": "onChangeHeightAfterAnimationPanDown",
	                "onAnimationEnd": "onAnimationEnd",
	                "onShowMoreDetails": "onShowMoreDetails",
	                "onHideMoreDetails": "onHideMoreDetails",
	                "onHiddenMoreDetails": "onHiddenMoreDetails",
	                "onReloadDataRequest": "onReloadDataRequest",
	                Hourly: _hourly2.default.EVENTS
	            };
	        }
	    }]);

	    return CurrentCity;
	}();

	exports.default = CurrentCity;


	for (var key in _eventMixin2.default) {
	    CurrentCity.prototype[key] = _eventMixin2.default[key];
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _template = __webpack_require__(46);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Details = function () {
	    function Details() {
	        _classCallCheck(this, Details);

	        this._elem = document.createElement("div");
	        this._elem.className = "details";
	    }

	    _createClass(Details, [{
	        key: "getFontSize",
	        value: function getFontSize() {
	            return getComputedStyle(this._elem).fontSize;
	        }
	    }, {
	        key: "setFontSize",
	        value: function setFontSize(value) {
	            this._elem.style.fontSize = value;
	        }
	    }, {
	        key: "getElem",
	        value: function getElem() {
	            return this._elem;
	        }
	    }, {
	        key: "clearFontSize",
	        value: function clearFontSize() {
	            this._elem.style.fontSize = "";
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            this._elem.classList.add("hidden");
	        }
	    }, {
	        key: "show",
	        value: function show() {
	            this._elem.classList.remove("hidden");
	        }
	    }, {
	        key: "showMore",
	        value: function showMore() {
	            this._elem.classList.add("open");
	        }
	    }, {
	        key: "hideMore",
	        value: function hideMore() {
	            this._elem.classList.remove("open");
	        }
	    }, {
	        key: "render",
	        value: function render(data, freeSpace) {
	            var itemHeight = this._getItemInListHeight();
	            var col = parseInt(freeSpace / itemHeight) >= 2 ? parseInt(freeSpace / itemHeight) : 1;
	            col = col > 3 ? 3 : col;
	            // const html = template({items: data, freeSpace: ()});
	            this._elem.innerHTML = (0, _template2.default)({ items: data, freeSpace: col });

	            // console.log(col)
	        }
	    }, {
	        key: "rebuild",
	        value: function rebuild(freeSpace) {
	            var elems = this._elem.querySelectorAll(".details__item ");
	            var itemHeight = this._getItemInListHeight();
	            var col = parseInt(freeSpace / itemHeight) >= 2 ? parseInt(freeSpace / itemHeight) : 1;
	            col = col > 3 ? 3 : col;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var elem = _step.value;

	                    // elem.classList.add("details--hidden");
	                    elem.classList.remove("details--more");
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            for (var i = 0; i < elems.length; i++) {
	                // elems[i].classList.remove("details--hidden");
	                if (i >= col) {
	                    elems[i].classList.add("details--more");
	                }
	            }
	        }
	    }, {
	        key: "_getItemInListHeight",
	        value: function _getItemInListHeight() {
	            var fackeInstance = document.createElement("div");
	            fackeInstance.style.position = "absolute";
	            fackeInstance.style.left = "-99999px";
	            var div = document.createElement("div");
	            div.className = "details__item";
	            div.innerHTML = "fake";
	            fackeInstance.appendChild(div);
	            document.body.appendChild(fackeInstance);
	            var itemHeight = fackeInstance.children[0].clientHeight;
	            document.body.removeChild(fackeInstance);

	            return itemHeight;
	        }
	    }, {
	        key: "elem",
	        get: function get() {
	            return this._elem;
	        }
	    }]);

	    return Details;
	}();

		exports.default = Details;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (freeSpace, items) {var pug_indent = [];
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {
	      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	        var item = $$obj[index];
	pug_html = pug_html + "\n\u003Cdiv" + (pug.attr("class", pug.classes(["details__item " + ((index >= freeSpace) ? "details--more" : "")], [true]), false, true)) + "\u003E\u003Cspan class=\"details__item-text\"\u003E" + (pug.escape(null == (pug_interp = item[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = item[2] || "") ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;
	      var item = $$obj[index];
	pug_html = pug_html + "\n\u003Cdiv" + (pug.attr("class", pug.classes(["details__item " + ((index >= freeSpace) ? "details--more" : "")], [true]), false, true)) + "\u003E\u003Cspan class=\"details__item-text\"\u003E" + (pug.escape(null == (pug_interp = item[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = item[2] || "") ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);
	}.call(this,"freeSpace" in locals_for_with?locals_for_with.freeSpace:typeof freeSpace!=="undefined"?freeSpace:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pug_has_own_property = Object.prototype.hasOwnProperty;

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }

	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + (valA && valB && ';') + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}

	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */

	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '', delim = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + delim + style + ':' + val[style];
	        delim = ';';
	      }
	    }
	    return out;
	  } else {
	    val = '' + val;
	    if (val[val.length - 1] === ';') return val.slice(0, -1);
	    return val;
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';

	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];

	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }

	  return attrs;
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;

	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */

	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(48).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 48 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(50);

	var _template = __webpack_require__(51);

	var _template2 = _interopRequireDefault(_template);

	var _templateNA = __webpack_require__(52);

	var _templateNA2 = _interopRequireDefault(_templateNA);

	var _eventMixin = __webpack_require__(41);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Hourly = function () {
	    function Hourly(elem) {
	        var _this = this;

	        _classCallCheck(this, Hourly);

	        this._elem = document.createElement("div");
	        this._elem.className = "hourly";
	        this.isRendered = false;

	        this._swipeElem = new Hammer(this._elem, { domEvents: true });

	        this._swipeElem.on("swipeleft", function (ev) {

	            if (_this._getLengthOfItems() < 5) {
	                return;
	            }

	            _this._slider.classList.add("slide");
	            _this.trigger(_this.constructor.EVENTS.onSwipeLeft, "");
	        });

	        this._swipeElem.on("swiperight", function (ev) {
	            if (_this._getLengthOfItems() < 5) {
	                return;
	            }

	            _this._slider.classList.remove("slide");
	            _this.trigger(_this.constructor.EVENTS.onSwipeRight, "");
	        });

	        this._swipeElem.on("swipe", function (ev) {
	            _this.trigger(_this.constructor.EVENTS.onSwipe, "");
	        });
	    }

	    _createClass(Hourly, [{
	        key: "_getLengthOfItems",
	        value: function _getLengthOfItems() {
	            return this._elem.querySelectorAll(".hourly__slide").length;
	        }
	    }, {
	        key: "render",
	        value: function render(data) {
	            var _this2 = this;

	            this._elem.innerHTML = (0, _template2.default)({ slides: data });
	            this._slider = this._elem.querySelector("[data-hourly-slider]");
	            this._inner = this._elem.querySelector("[data-hourly-inner]");
	            this.trigger(this.constructor.EVENTS.onRender, "");

	            setTimeout(function () {
	                _this2._elem.classList.add("shown");
	                setTimeout(function () {
	                    _this2._elem.classList.add("shown-slider");
	                    _this2.isRendered = true;
	                }, 50);
	            }, 0);
	        }
	    }, {
	        key: "refresh",
	        value: function refresh(data) {
	            if (!this.isRendered) {
	                return;
	            }

	            var slides = this._elem.querySelectorAll(".hourly__slide");

	            for (var i = 0; i < data.length; i++) {
	                slides[i].querySelector(".hourly__slide-time").innerHTML = data[i].time;
	                slides[i].querySelector(".hourly__slide-temp").innerHTML = data[i].temp;
	            }
	        }
	    }, {
	        key: "renderNA",
	        value: function renderNA() {
	            var _this3 = this;

	            this._elem.innerHTML = (0, _templateNA2.default)();
	            this.trigger(this.constructor.EVENTS.onRender, "");

	            setTimeout(function () {
	                _this3._elem.classList.add("shown");
	                setTimeout(function () {
	                    _this3._elem.classList.add("shown-slider");
	                }, 50);
	            }, 0);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.elem.innerHTML = "";
	            this._elem.classList.remove("shown");
	            this._elem.classList.remove("shown-slider");
	            this.trigger(this.constructor.EVENTS.onDestroy, "");
	            this.isRendered = false;
	        }
	    }, {
	        key: "elem",
	        get: function get() {
	            return this._elem;
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onRender": "onRender",
	                "onDestroy": "onDestroy",
	                "onSwipe": "onSwipe",
	                "onSwipeLeft": "onSwipeLeft",
	                "onSwipeRight": "onSwipeRight",
	                "onTransitionEnd": "onTransitionEnd",
	                "onDestroyTransitionEnd": "onDestroyTransitionEnd"
	            };
	        }
	    }]);

	    return Hourly;
	}();

	exports.default = Hourly;


	for (var key in _eventMixin2.default) {
	    Hourly.prototype[key] = _eventMixin2.default[key];
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! Hammer.JS - v2.0.8 - 2016-04-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	!function (a, b, c, d) {
	  "use strict";
	  function e(a, b, c) {
	    return setTimeout(j(a, c), b);
	  }function f(a, b, c) {
	    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
	  }function g(a, b, c) {
	    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
	      b.call(c, a[e], e, a), e++;
	    } else for (e in a) {
	      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
	    }
	  }function h(b, c, d) {
	    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
	      var c = new Error("get-stack-trace"),
	          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
	          f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
	    };
	  }function i(a, b, c) {
	    var d,
	        e = b.prototype;d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
	  }function j(a, b) {
	    return function () {
	      return a.apply(b, arguments);
	    };
	  }function k(a, b) {
	    return (typeof a === "undefined" ? "undefined" : _typeof(a)) == oa ? a.apply(b ? b[0] || d : d, b) : a;
	  }function l(a, b) {
	    return a === d ? b : a;
	  }function m(a, b, c) {
	    g(q(b), function (b) {
	      a.addEventListener(b, c, !1);
	    });
	  }function n(a, b, c) {
	    g(q(b), function (b) {
	      a.removeEventListener(b, c, !1);
	    });
	  }function o(a, b) {
	    for (; a;) {
	      if (a == b) return !0;a = a.parentNode;
	    }return !1;
	  }function p(a, b) {
	    return a.indexOf(b) > -1;
	  }function q(a) {
	    return a.trim().split(/\s+/g);
	  }function r(a, b, c) {
	    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
	      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
	    }return -1;
	  }function s(a) {
	    return Array.prototype.slice.call(a, 0);
	  }function t(a, b, c) {
	    for (var d = [], e = [], f = 0; f < a.length;) {
	      var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
	    }return c && (d = b ? d.sort(function (a, c) {
	      return a[b] > c[b];
	    }) : d.sort()), d;
	  }function u(a, b) {
	    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
	      if (c = ma[g], e = c ? c + f : b, e in a) return e;g++;
	    }return d;
	  }function v() {
	    return ua++;
	  }function w(b) {
	    var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
	  }function x(a, b) {
	    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
	      k(a.options.enable, [a]) && c.handler(b);
	    }, this.init();
	  }function y(a) {
	    var b,
	        c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
	  }function z(a, b, c) {
	    var d = c.pointers.length,
	        e = c.changedPointers.length,
	        f = b & Ea && d - e === 0,
	        g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
	  }function A(a, b) {
	    var c = a.session,
	        d = b.pointers,
	        e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
	        g = c.firstMultiple,
	        h = g ? g.center : f.center,
	        i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
	  }function B(a, b) {
	    var c = b.center,
	        d = a.offsetDelta || {},
	        e = a.prevDelta || {},
	        f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
	  }function C(a, b) {
	    var c,
	        e,
	        f,
	        g,
	        h = a.lastInterval || b,
	        i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
	      var j = b.deltaX - h.deltaX,
	          k = b.deltaY - h.deltaY,
	          l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
	    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
	  }function D(a) {
	    for (var b = [], c = 0; c < a.pointers.length;) {
	      b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;
	    }return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
	  }function E(a) {
	    var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
	      c += a[e].clientX, d += a[e].clientY, e++;
	    }return { x: pa(c / b), y: pa(d / b) };
	  }function F(a, b, c) {
	    return { x: b / a || 0, y: c / a || 0 };
	  }function G(a, b) {
	    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
	  }function H(a, b, c) {
	    c || (c = Qa);var d = b[c[0]] - a[c[0]],
	        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
	  }function I(a, b, c) {
	    c || (c = Qa);var d = b[c[0]] - a[c[0]],
	        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
	  }function J(a, b) {
	    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
	  }function K(a, b) {
	    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
	  }function L() {
	    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
	  }function M() {
	    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
	  }function N() {
	    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
	  }function O(a, b) {
	    var c = s(a.touches),
	        d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
	  }function P() {
	    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
	  }function Q(a, b) {
	    var c = s(a.touches),
	        d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
	        f,
	        g = s(a.changedTouches),
	        h = [],
	        i = this.target;if (f = c.filter(function (a) {
	      return o(a.target, i);
	    }), b === Ea) for (e = 0; e < f.length;) {
	      d[f[e].identifier] = !0, e++;
	    }for (e = 0; e < g.length;) {
	      d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
	    }return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
	  }function R() {
	    x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
	  }function S(a, b) {
	    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
	  }function T(a) {
	    var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
	      var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
	          e = function e() {
	        var a = d.indexOf(c);a > -1 && d.splice(a, 1);
	      };setTimeout(e, cb);
	    }
	  }function U(a) {
	    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
	      var e = this.lastTouches[d],
	          f = Math.abs(b - e.x),
	          g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
	    }return !1;
	  }function V(a, b) {
	    this.manager = a, this.set(b);
	  }function W(a) {
	    if (p(a, jb)) return jb;var b = p(a, kb),
	        c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
	  }function X() {
	    if (!fb) return !1;var b = {},
	        c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
	      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
	    }), b;
	  }function Y(a) {
	    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
	  }function Z(a) {
	    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
	  }function $(a) {
	    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
	  }function _(a, b) {
	    var c = b.manager;return c ? c.get(a) : a;
	  }function aa() {
	    Y.apply(this, arguments);
	  }function ba() {
	    aa.apply(this, arguments), this.pX = null, this.pY = null;
	  }function ca() {
	    aa.apply(this, arguments);
	  }function da() {
	    Y.apply(this, arguments), this._timer = null, this._input = null;
	  }function ea() {
	    aa.apply(this, arguments);
	  }function fa() {
	    aa.apply(this, arguments);
	  }function ga() {
	    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
	  }function ha(a, b) {
	    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
	  }function ia(a, b) {
	    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
	      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
	    }, this);
	  }function ja(a, b) {
	    var c = a.element;if (c.style) {
	      var d;g(a.options.cssProps, function (e, f) {
	        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
	      }), b || (a.oldCssProps = {});
	    }
	  }function ka(a, c) {
	    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
	  }var la,
	      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
	      na = b.createElement("div"),
	      oa = "function",
	      pa = Math.round,
	      qa = Math.abs,
	      ra = Date.now;la = "function" != typeof Object.assign ? function (a) {
	    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
	      var e = arguments[c];if (e !== d && null !== e) for (var f in e) {
	        e.hasOwnProperty(f) && (b[f] = e[f]);
	      }
	    }return b;
	  } : Object.assign;var sa = h(function (a, b, c) {
	    for (var e = Object.keys(b), f = 0; f < e.length;) {
	      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
	    }return a;
	  }, "extend", "Use `assign`."),
	      ta = h(function (a, b) {
	    return sa(a, b, !0);
	  }, "merge", "Use `assign`."),
	      ua = 1,
	      va = /mobile|tablet|ip(ad|hone|od)|android/i,
	      wa = "ontouchstart" in a,
	      xa = u(a, "PointerEvent") !== d,
	      ya = wa && va.test(navigator.userAgent),
	      za = "touch",
	      Aa = "pen",
	      Ba = "mouse",
	      Ca = "kinect",
	      Da = 25,
	      Ea = 1,
	      Fa = 2,
	      Ga = 4,
	      Ha = 8,
	      Ia = 1,
	      Ja = 2,
	      Ka = 4,
	      La = 8,
	      Ma = 16,
	      Na = Ja | Ka,
	      Oa = La | Ma,
	      Pa = Na | Oa,
	      Qa = ["x", "y"],
	      Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
	      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
	    }, destroy: function destroy() {
	      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
	    } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
	      Ta = "mousedown",
	      Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
	      var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
	    } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
	      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
	      Xa = "pointerdown",
	      Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
	      var b = this.store,
	          c = !1,
	          d = a.type.toLowerCase().replace("ms", ""),
	          e = Va[d],
	          f = Wa[a.pointerType] || a.pointerType,
	          g = f == za,
	          h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
	    } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
	      $a = "touchstart",
	      _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
	      var b = Za[a.type];if (b === Ea && (this.started = !0), this.started) {
	        var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
	      }
	    } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
	      bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
	      var b = ab[a.type],
	          c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
	    } });var cb = 2500,
	      db = 25;i(R, x, { handler: function handler(a, b, c) {
	      var d = c.pointerType == za,
	          e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
	        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
	      }
	    }, destroy: function destroy() {
	      this.touch.destroy(), this.mouse.destroy();
	    } });var eb = u(na.style, "touchAction"),
	      fb = eb !== d,
	      gb = "compute",
	      hb = "auto",
	      ib = "manipulation",
	      jb = "none",
	      kb = "pan-x",
	      lb = "pan-y",
	      mb = X();V.prototype = { set: function set(a) {
	      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
	    }, update: function update() {
	      this.set(this.manager.options.touchAction);
	    }, compute: function compute() {
	      var a = [];return g(this.manager.recognizers, function (b) {
	        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
	      }), W(a.join(" "));
	    }, preventDefaults: function preventDefaults(a) {
	      var b = a.srcEvent,
	          c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
	          e = p(d, jb) && !mb[jb],
	          f = p(d, lb) && !mb[lb],
	          g = p(d, kb) && !mb[kb];if (e) {
	        var h = 1 === a.pointers.length,
	            i = a.distance < 2,
	            j = a.deltaTime < 250;if (h && i && j) return;
	      }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
	    }, preventSrc: function preventSrc(a) {
	      this.manager.session.prevented = !0, a.preventDefault();
	    } };var nb = 1,
	      ob = 2,
	      pb = 4,
	      qb = 8,
	      rb = qb,
	      sb = 16,
	      tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
	      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
	    }, recognizeWith: function recognizeWith(a) {
	      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
	    }, dropRecognizeWith: function dropRecognizeWith(a) {
	      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
	    }, requireFailure: function requireFailure(a) {
	      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
	    }, dropRequireFailure: function dropRequireFailure(a) {
	      if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
	    }, hasRequireFailures: function hasRequireFailures() {
	      return this.requireFail.length > 0;
	    }, canRecognizeWith: function canRecognizeWith(a) {
	      return !!this.simultaneous[a.id];
	    }, emit: function emit(a) {
	      function b(b) {
	        c.manager.emit(b, a);
	      }var c = this,
	          d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
	    }, tryEmit: function tryEmit(a) {
	      return this.canEmit() ? this.emit(a) : void (this.state = tb);
	    }, canEmit: function canEmit() {
	      for (var a = 0; a < this.requireFail.length;) {
	        if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
	      }return !0;
	    }, recognize: function recognize(a) {
	      var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
	    }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
	      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
	    }, process: function process(a) {
	      var b = this.state,
	          c = a.eventType,
	          d = b & (ob | pb),
	          e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
	    } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
	      var a = this.options.direction,
	          b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
	    }, directionTest: function directionTest(a) {
	      var b = this.options,
	          c = !0,
	          d = a.distance,
	          e = a.direction,
	          f = a.deltaX,
	          g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
	    }, attrTest: function attrTest(a) {
	      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
	    }, emit: function emit(a) {
	      this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
	    } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
	      return [jb];
	    }, attrTest: function attrTest(a) {
	      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
	    }, emit: function emit(a) {
	      if (1 !== a.scale) {
	        var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
	      }this._super.emit.call(this, a);
	    } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
	      return [hb];
	    }, process: function process(a) {
	      var b = this.options,
	          c = a.pointers.length === b.pointers,
	          d = a.distance < b.threshold,
	          f = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
	        this.state = rb, this.tryEmit();
	      }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
	    }, reset: function reset() {
	      clearTimeout(this._timer);
	    }, emit: function emit(a) {
	      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
	    } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
	      return [jb];
	    }, attrTest: function attrTest(a) {
	      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
	    } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
	      return ba.prototype.getTouchAction.call(this);
	    }, attrTest: function attrTest(a) {
	      var b,
	          c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
	    }, emit: function emit(a) {
	      var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
	    } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
	      return [ib];
	    }, process: function process(a) {
	      var b = this.options,
	          c = a.pointers.length === b.pointers,
	          d = a.distance < b.threshold,
	          f = a.deltaTime < b.time;if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();if (d && f && c) {
	        if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
	            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
	          this.state = rb, this.tryEmit();
	        }, b.interval, this), ob) : rb;
	      }return tb;
	    }, failTimeout: function failTimeout() {
	      return this._timer = e(function () {
	        this.state = tb;
	      }, this.options.interval, this), tb;
	    }, reset: function reset() {
	      clearTimeout(this._timer);
	    }, emit: function emit() {
	      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
	    } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
	      vb = 2;ia.prototype = { set: function set(a) {
	      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
	    }, stop: function stop(a) {
	      this.session.stopped = a ? vb : ub;
	    }, recognize: function recognize(a) {
	      var b = this.session;if (!b.stopped) {
	        this.touchAction.preventDefaults(a);var c,
	            d = this.recognizers,
	            e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
	          c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
	        }
	      }
	    }, get: function get(a) {
	      if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
	        if (b[c].options.event == a) return b[c];
	      }return null;
	    }, add: function add(a) {
	      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
	    }, remove: function remove(a) {
	      if (f(a, "remove", this)) return this;if (a = this.get(a)) {
	        var b = this.recognizers,
	            c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
	      }return this;
	    }, on: function on(a, b) {
	      if (a !== d && b !== d) {
	        var c = this.handlers;return g(q(a), function (a) {
	          c[a] = c[a] || [], c[a].push(b);
	        }), this;
	      }
	    }, off: function off(a, b) {
	      if (a !== d) {
	        var c = this.handlers;return g(q(a), function (a) {
	          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
	        }), this;
	      }
	    }, emit: function emit(a, b) {
	      this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
	        b.type = a, b.preventDefault = function () {
	          b.srcEvent.preventDefault();
	        };for (var d = 0; d < c.length;) {
	          c[d](b), d++;
	        }
	      }
	    }, destroy: function destroy() {
	      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
	    } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha,  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return ha;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
	}(window, document, "Hammer");
	//# sourceMappingURL=hammer.min.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (slides) {var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"hourly__inner\" data-hourly-inner\u003E\n  \u003Cdiv class=\"hourly__slider\" data-hourly-slider\u003E";
	// iterate slides
	;(function(){
	  var $$obj = slides;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var slide = $$obj[pug_index0];
	pug_html = pug_html + "\n    \u003Cdiv class=\"hourly__slide\"\u003E\n      \u003Cdiv class=\"hourly__slide-time\"\u003E" + (pug.escape(null == (pug_interp = slide.time) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide-temp celcius\"\u003E" + (pug.escape(null == (pug_interp = slide.temp) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var slide = $$obj[pug_index0];
	pug_html = pug_html + "\n    \u003Cdiv class=\"hourly__slide\"\u003E\n      \u003Cdiv class=\"hourly__slide-time\"\u003E" + (pug.escape(null == (pug_interp = slide.time) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide-temp celcius\"\u003E" + (pug.escape(null == (pug_interp = slide.temp) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"slides" in locals_for_with?locals_for_with.slides:typeof slides!=="undefined"?slides:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"hourly__inner\" data-hourly-inner\u003E\n  \u003Cdiv class=\"hourly__na\"\u003E\n    \u003Cdiv class=\"hourly__na-inner\"\u003EN\u002FA\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _template = __webpack_require__(54);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NexDays = function () {
	    function NexDays(elem) {
	        _classCallCheck(this, NexDays);

	        this._elem = elem;
	    }

	    _createClass(NexDays, [{
	        key: "getHeight",
	        value: function getHeight() {
	            return getComputedStyle(this._elem).height;
	        }
	    }, {
	        key: "setHeight",
	        value: function setHeight(value) {
	            this._elem.style.height = value;
	        }
	    }, {
	        key: "clearHeight",
	        value: function clearHeight() {
	            this._elem.style.height = "";
	        }
	    }, {
	        key: "render",
	        value: function render(data) {
	            this._elem.innerHTML = (0, _template2.default)({ items: data });
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this._elem.innerHTML = "";
	        }
	    }]);

	    return NexDays;
	}();

		exports.default = NexDays;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (items) {var pug_indent = [];
	pug_html = pug_html + "\n\u003Cul class=\"addition__list\"\u003E";
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var item = $$obj[pug_index0];
	pug_html = pug_html + "\n  \u003Cli class=\"addition__item\"\u003E\n    \u003Cdiv class=\"nex-day\" data-next-day\u003E\n      \u003Cdiv class=\"nex-day__img-wrapper\"\u003E\u003Cimg" + (" class=\"nex-day__img\""+pug.attr("src", item.img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__desc\"\u003E\n        \u003Cdiv class=\"nex-day__date\"\u003E" + (pug.escape(null == (pug_interp = item.data) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"nex-day__weather\"\u003E" + (pug.escape(null == (pug_interp = item.main) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__temp\"\u003E\n        \u003Cdiv class=\"nex-day__temp-day celcius\"\u003E" + (pug.escape(null == (pug_interp = item.temp.day) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var item = $$obj[pug_index0];
	pug_html = pug_html + "\n  \u003Cli class=\"addition__item\"\u003E\n    \u003Cdiv class=\"nex-day\" data-next-day\u003E\n      \u003Cdiv class=\"nex-day__img-wrapper\"\u003E\u003Cimg" + (" class=\"nex-day__img\""+pug.attr("src", item.img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__desc\"\u003E\n        \u003Cdiv class=\"nex-day__date\"\u003E" + (pug.escape(null == (pug_interp = item.data) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"nex-day__weather\"\u003E" + (pug.escape(null == (pug_interp = item.main) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__temp\"\u003E\n        \u003Cdiv class=\"nex-day__temp-day celcius\"\u003E" + (pug.escape(null == (pug_interp = item.temp.day) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\n\u003C\u002Ful\u003E";}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function () {
	    function Menu(elem) {
	        _classCallCheck(this, Menu);

	        this._elem = elem;

	        elem.addEventListener("click", this._manager.bind(this));

	        // this.setOffsetMargin();
	    }

	    _createClass(Menu, [{
	        key: "setOffsetMargin",
	        value: function setOffsetMargin() {
	            this._elem.querySelector(".menu__city-viewer").style.marginRight = -this._getScrollWidth() + "px";
	        }
	    }, {
	        key: "removeOffsetMargin",
	        value: function removeOffsetMargin() {
	            this._elem.querySelector(".menu__city-viewer").style.marginRight = "";
	        }
	    }, {
	        key: "_manager",
	        value: function _manager(event) {
	            if (event.target.closest(".menu__close")) {
	                this.hide();
	            }

	            if (event.target.closest(".menu__overflow")) {
	                this.hide();
	            }
	        }
	    }, {
	        key: "show",
	        value: function show() {
	            this._elem.classList.add("open");
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            this._elem.classList.remove("open");
	        }
	    }, {
	        key: "enable",
	        value: function enable() {
	            document.body.classList.add("menuSwipe");
	        }
	    }, {
	        key: "disable",
	        value: function disable() {
	            document.body.classList.remove("menuSwipe");
	        }
	    }, {
	        key: "setStateIsEmpty",
	        value: function setStateIsEmpty() {
	            this._elem.classList.add("is-empty");
	        }
	    }, {
	        key: "removeStateIsEmpty",
	        value: function removeStateIsEmpty() {
	            this._elem.classList.remove("is-empty");
	        }
	    }, {
	        key: "_getScrollWidth",
	        value: function _getScrollWidth() {
	            var div = document.createElement("div");
	            div.style.overflow = "scroll";
	            div.style.width = '50px';
	            div.style.height = '50px';
	            div.style.visibility = 'hidden';
	            document.body.appendChild(div);
	            var scrollWidth = div.offsetWidth - div.clientWidth;
	            document.body.removeChild(div);

	            return scrollWidth;
	        }
	    }]);

	    return Menu;
	}();

		exports.default = Menu;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _teleportAutocompleteMin = __webpack_require__(57);

	var _teleportAutocompleteMin2 = _interopRequireDefault(_teleportAutocompleteMin);

	__webpack_require__(58);

	var _eventMixin = __webpack_require__(41);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Search = function () {
	    function Search(elem) {
	        var _this = this;

	        _classCallCheck(this, Search);

	        this._elem = elem;
	        var input = elem.querySelector("." + elem.className + "__input");

	        _teleportAutocompleteMin2.default.init(input).on('change', function (cityData) {
	            _this._sendCityData(cityData);
	        });
	    }

	    _createClass(Search, [{
	        key: "_sendCityData",
	        value: function _sendCityData(cityData) {
	            this.trigger(this.constructor.EVENTS.onGetCity, cityData);
	        }
	    }, {
	        key: "disable",
	        value: function disable() {
	            this._elem.classList.add("block");
	        }
	    }, {
	        key: "enable",
	        value: function enable() {
	            this._elem.classList.remove("block");
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onGetCity": "onGetCity"
	            };
	        }
	    }]);

	    return Search;
	}();

	for (var key in _eventMixin2.default) {
	    Search.prototype[key] = _eventMixin2.default[key];
	}

	exports.default = Search;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! teleport-autocomplete - v0.3.1 | https://github.com/teleport/autocomplete#readme | MIT */
	!function (e) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.TeleportAutocomplete = e();
	  }
	}(function () {
	  return function e(t, n, i) {
	    function r(s, a) {
	      if (!n[s]) {
	        if (!t[s]) {
	          var u = "function" == typeof require && require;if (!a && u) return require(s, !0);if (o) return o(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
	        }var l = n[s] = { exports: {} };t[s][0].call(l.exports, function (e) {
	          var n = t[s][1][e];return r(n ? n : e);
	        }, l, l.exports, e, t, n, i);
	      }return n[s].exports;
	    }for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) {
	      r(i[s]);
	    }return r;
	  }({ 1: [function (e, t, n) {
	      "use strict";
	      function i(e) {
	        return e && e.__esModule ? e : { "default": e };
	      }function r(e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	      }Object.defineProperty(n, "__esModule", { value: !0 });var o = function () {
	        function e(e, t) {
	          for (var n = 0; n < t.length; n++) {
	            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
	          }
	        }return function (t, n, i) {
	          return n && e(t.prototype, n), i && e(t, i), t;
	        };
	      }();e("classlist-polyfill"), e("element-closest");var s = e("halfred"),
	          a = i(s),
	          u = e("minivents"),
	          c = i(u),
	          l = e("core-js/library/fn/object/assign"),
	          f = i(l),
	          d = e("core-js/library/fn/array/find"),
	          p = i(d),
	          h = e("core-js/library/fn/regexp/escape"),
	          y = i(h),
	          v = e("debounce"),
	          m = i(v),
	          g = { BACK: 8, TAB: 9, ENTER: 13, UP: 38, DOWN: 40 },
	          b = '<div class="tp-autocomplete"><ul class="tp-ac__list"></ul></div>',
	          _ = "tp-ac__input",
	          x = function x(e) {
	        return '<li class="tp-ac__item">' + e + "</li>";
	      },
	          k = '<li class="tp-ac__item no-results">No matches</li>',
	          $ = '<li class="tp-ac__item geolocate">Detect my current location</li>',
	          w = function w(e) {
	        return this.wrapMatches(e.title);
	      };HTMLElement.prototype.on = HTMLElement.prototype.addEventListener, HTMLElement.prototype.off = HTMLElement.prototype.removeEventListener;var j = function () {
	        function e() {
	          var t = this,
	              n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
	              i = n.el,
	              o = void 0 === i ? null : i,
	              s = n.value,
	              a = n.maxItems,
	              u = void 0 === a ? 10 : a,
	              l = n.itemTemplate,
	              d = void 0 === l ? w : l,
	              p = n.geoLocate,
	              h = void 0 === p ? !0 : p,
	              y = n.apiRoot,
	              v = void 0 === y ? "https://api.teleport.org/api" : y,
	              g = n.apiVersion,
	              b = void 0 === g ? 1 : g,
	              _ = n.embeds,
	              x = void 0 === _ ? "city:country,city:admin1_division,city:timezone/tz:offsets-now,city:urban_area" : _;r(this, e), (0, c["default"])(this);var k = "string" == typeof o ? document.querySelector(o) : o;return this.setupInput(k), (0, f["default"])(this, { maxItems: u, geoLocate: h, apiRoot: v, apiVersion: b, itemTemplate: d, embeds: x, results: [], _activeIndex: 0, _cache: {}, _query: this.el.value, value: s }), this.value && this.value.title ? this.query = this.value.title : this.query && this.fetchResults(function () {
	            t.value = t.getResultByTitle(t.query), t.emit("change", t.value);
	          }), this.getCities = (0, m["default"])(this.getCities, 200), this;
	        }return o(e, [{ key: "query", get: function get() {
	            return this._query;
	          }, set: function set(e) {
	            return e === this._query ? e : (this._query = e, this.el.value = e, void this.emit("querychange", e));
	          } }, { key: "activeIndex", get: function get() {
	            return this._activeIndex;
	          }, set: function set(e) {
	            var t = this.list.childNodes[this._activeIndex];t && t.classList.remove("is-active"), this._activeIndex = e;var n = this.list.childNodes[e];n && n.classList.add("is-active");
	          } }, { key: "loading", set: function set(e) {
	            this.container.classList.toggle("spinner", e);
	          } }]), o(e, [{ key: "destroy", value: function value() {
	            this.el.off("input", this.oninput), this.el.off("keydown", this.onkeydown), this.el.off("focus", this.onfocus), this.el.off("blur", this.onblur), this.el.off("click", this.onclick), this.el.classList.remove(_);var e = this.container.parentNode;e.replaceChild(this.el.parentNode.removeChild(this.el), this.container);
	          } }, { key: "clear", value: function value() {
	            this.results = [], this.selectByIndex(0);
	          } }, { key: "setupInput", value: function value(e) {
	            if (!(e && e instanceof HTMLInputElement)) throw new Error("Invalid element given");e.insertAdjacentHTML("beforebegin", b), Object.defineProperty(this, "container", { value: e.previousSibling }), Object.defineProperty(this, "list", { value: this.container.firstChild });var t = this.container.insertBefore(e.parentNode.removeChild(e), this.list);t.classList.add(_), Object.defineProperty(this, "el", { enumerable: !0, value: t }), this.el.on("input", this.oninput.bind(this)), this.el.on("keydown", this.onkeydown.bind(this)), this.el.on("focus", this.onfocus.bind(this)), this.el.on("blur", this.onblur.bind(this)), this.el.on("click", this.onclick.bind(this)), this.list.on("mousedown", this.onlistclick.bind(this));
	          } }, { key: "onlistclick", value: function value(e) {
	            var t = [].indexOf.call(this.list.children, e.target.closest(".tp-ac__item"));this.selectByIndex(t);
	          } }, { key: "onclick", value: function value() {
	            this.el.select();
	          } }, { key: "onfocus", value: function value() {
	            this.renderList();
	          } }, { key: "onblur", value: function value() {
	            this.list.innerHTML = "";
	          } }, { key: "oninput", value: function value() {
	            var e = this;this._query = this.el.value, this.fetchResults(function () {
	              return e.renderList();
	            });
	          } }, { key: "onkeydown", value: function value(e) {
	            var t = e.keyCode;switch (-1 !== [g.UP, g.DOWN].indexOf(t) && e.preventDefault(), t) {case g.BACK:
	                (this.value || 1 === this.query.length) && this.clear();break;case g.ENTER:
	                !this.value && this.query && e.preventDefault(), this.selectByIndex(this.activeIndex);break;case g.TAB:
	                this.value || this.selectByIndex(this.activeIndex);break;case g.UP:
	                this.activeIndex = Math.max(0, this.activeIndex - 1);break;case g.DOWN:
	                this.activeIndex = Math.min(this.results.length - 1, this.activeIndex + 1);}
	          } }, { key: "selectByIndex", value: function value(e) {
	            this.activeIndex = e;var t = this.value;this.value = this.results[e] || null;var n = this.list.firstChild && this.list.firstChild.classList.contains("geolocate");n && this.currentLocation(), t === this.value || n || this.emit("change", this.value), this.list.innerHTML = "", this.query = this.value ? this.value.title : "";
	          } }, { key: "wrapMatches", value: function value() {
	            var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
	                t = e;return this.query.split(/[\,\s]+/).filter(function (e) {
	              return !!e;
	            }).forEach(function (e) {
	              var n = new RegExp((0, y["default"])(e) + "(?![^<]*>|[^<>]*</)", "gi");t = t.replace(n, "<span>$&</span>");
	            }), t;
	          } }, { key: "renderList", value: function value() {
	            var e = this,
	                t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
	                n = t.geoLocate,
	                i = void 0 === n ? this.geoLocate : n,
	                r = this.results.map(function (t) {
	              return x(e.itemTemplate(t));
	            }).slice(0, this.maxItems).join("");r || "" === this.query || this.value || (r = k), "" === this.query && i && (r = $), this.list.innerHTML = r, this.activeIndex = 0;
	          } }, { key: "getResultByTitle", value: function value(e) {
	            return this.results && e ? (0, p["default"])(this.results, function (t) {
	              return -1 !== t.title.indexOf(e);
	            }) : null;
	          } }, { key: "fetchResults", value: function value() {
	            var e = this,
	                t = arguments.length <= 0 || void 0 === arguments[0] ? function () {} : arguments[0];this.req && this.req.abort();var n = this._cache[this.query];return n ? (this.results = n, t()) : (this.req = this.getCities(function (n) {
	              e.results = e._cache[e.query] = n, t(), e.loading = !1;
	            }), void (this.loading = !0));
	          } }, { key: "currentLocation", value: function value() {
	            var e = this,
	                t = new XMLHttpRequest(),
	                n = "location:nearest-cities/location:nearest-city/" + (this.embeds ? "{" + this.embeds + "}" : "");this.loading = !0, this.oldPlaceholder = this.el.placeholder, this.el.placeholder = "Detecting location...", navigator.geolocation.getCurrentPosition(function (i) {
	              var r = i.coords;t.open("GET", e.apiRoot + "/locations/" + r.latitude + "," + r.longitude + "/?embed=" + n), t.setRequestHeader("Accept", "application/vnd.teleport.v" + e.apiVersion + "+json"), t.addEventListener("load", function () {
	                return e.parseLocation(JSON.parse(t.response));
	              }), t.send();
	            }, function (t) {
	              var n = t.message;e.loading = !1, e.el.placeholder = n, setTimeout(function () {
	                return e.el.placeholder = e.oldPlaceholder;
	              }, 3e3);
	            }, { timeout: 5e3 });
	          } }, { key: "parseLocation", value: function value(e) {
	            var t = a["default"].parse(e),
	                n = t.embeddedArray("location:nearest-cities")[0];n && (this.results = [this.parseCity(n)], "nopick" === this.geoLocate ? (this.el.focus(), this.renderList({ geoLocate: !1 })) : this.selectByIndex(0)), this.loading = !1, this.el.placeholder = this.oldPlaceholder;
	          } }, { key: "getCities", value: function value(e) {
	            var t = this;if (!this.query) return e([]);var n = "city:search-results/city:item/" + (this.embeds ? "{" + this.embeds + "}" : ""),
	                i = new XMLHttpRequest();return i.open("GET", this.apiRoot + "/cities/?search=" + this.query + "&embed=" + n + "&limit=" + this.maxItems), i.setRequestHeader("Accept", "application/vnd.teleport.v" + this.apiVersion + "+json"), i.addEventListener("load", function () {
	              var n = a["default"].parse(JSON.parse(i.response)).embeddedArray("city:search-results").map(function (e) {
	                return t.parseCity(e);
	              });e(n);
	            }), i.send(), i;
	          } }, { key: "parseCity", value: function value(e) {
	            var t = e.embedded("location:nearest-city") || e.embedded("city:item");t.country = t.embedded("city:country"), t.admin1_division = t.embedded("city:admin1_division"), t.timezone = t.embedded("city:timezone"), t.urban_area = t.embedded("city:urban_area");var n = t.full_name,
	                i = t.name,
	                r = t.geoname_id,
	                o = t.population,
	                s = t.location.latlon,
	                a = s.latitude,
	                u = s.longitude,
	                c = e.matching_full_name,
	                l = void 0 === c ? n : c,
	                d = { title: l, name: i, geonameId: r, latitude: a, longitude: u, population: o };if (t.country && (0, f["default"])(d, { country: t.country.name }), t.admin1_division) {
	              var p = t.admin1_division,
	                  h = p.name,
	                  y = p.geonames_admin1_code;(0, f["default"])(d, { admin1Division: h, admin1DivisionCode: y });
	            }if (t.timezone) {
	              var v = t.timezone.embedded("tz:offsets-now");(0, f["default"])(d, { tzOffsetMinutes: v.total_offset_min });
	            }if (t.urban_area) {
	              var m = t.urban_area,
	                  g = m.slug,
	                  b = m.name,
	                  _ = m.ua_id,
	                  x = m.teleport_city_url;(0, f["default"])(d, { uaName: b, uaId: _, uaCityUrl: x, uaSlug: g });
	            }return d;
	          } }], [{ key: "init", value: function value(t) {
	            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
	                i = "string" == typeof t || t instanceof HTMLInputElement ? (0, f["default"])(n, { el: t }) : t;return new e(i);
	          } }]), e;
	      }();n["default"] = j, t.exports = n["default"];
	    }, { "classlist-polyfill": 2, "core-js/library/fn/array/find": 3, "core-js/library/fn/object/assign": 4, "core-js/library/fn/regexp/escape": 5, debounce: 33, "element-closest": 34, halfred: 35, minivents: 39 }], 2: [function (e, t, n) {
	      "document" in window.self && ("classList" in document.createElement("_") ? !function () {
	        "use strict";
	        var e = document.createElement("_");if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
	          var t = function t(e) {
	            var t = DOMTokenList.prototype[e];DOMTokenList.prototype[e] = function (e) {
	              var n,
	                  i = arguments.length;for (n = 0; i > n; n++) {
	                e = arguments[n], t.call(this, e);
	              }
	            };
	          };t("add"), t("remove");
	        }if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
	          var n = DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle = function (e, t) {
	            return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e);
	          };
	        }e = null;
	      }() : !function (e) {
	        "use strict";
	        if ("Element" in e) {
	          var t = "classList",
	              n = "prototype",
	              i = e.Element[n],
	              r = Object,
	              o = String[n].trim || function () {
	            return this.replace(/^\s+|\s+$/g, "");
	          },
	              s = Array[n].indexOf || function (e) {
	            for (var t = 0, n = this.length; n > t; t++) {
	              if (t in this && this[t] === e) return t;
	            }return -1;
	          },
	              a = function a(e, t) {
	            this.name = e, this.code = DOMException[e], this.message = t;
	          },
	              u = function u(e, t) {
	            if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");return s.call(e, t);
	          },
	              c = function c(e) {
	            for (var t = o.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, r = n.length; r > i; i++) {
	              this.push(n[i]);
	            }this._updateClassName = function () {
	              e.setAttribute("class", this.toString());
	            };
	          },
	              l = c[n] = [],
	              f = function f() {
	            return new c(this);
	          };if (a[n] = Error[n], l.item = function (e) {
	            return this[e] || null;
	          }, l.contains = function (e) {
	            return e += "", -1 !== u(this, e);
	          }, l.add = function () {
	            var e,
	                t = arguments,
	                n = 0,
	                i = t.length,
	                r = !1;do {
	              e = t[n] + "", -1 === u(this, e) && (this.push(e), r = !0);
	            } while (++n < i);r && this._updateClassName();
	          }, l.remove = function () {
	            var e,
	                t,
	                n = arguments,
	                i = 0,
	                r = n.length,
	                o = !1;do {
	              for (e = n[i] + "", t = u(this, e); -1 !== t;) {
	                this.splice(t, 1), o = !0, t = u(this, e);
	              }
	            } while (++i < r);o && this._updateClassName();
	          }, l.toggle = function (e, t) {
	            e += "";var n = this.contains(e),
	                i = n ? t !== !0 && "remove" : t !== !1 && "add";return i && this[i](e), t === !0 || t === !1 ? t : !n;
	          }, l.toString = function () {
	            return this.join(" ");
	          }, r.defineProperty) {
	            var d = { get: f, enumerable: !0, configurable: !0 };try {
	              r.defineProperty(i, t, d);
	            } catch (p) {
	              -2146823252 === p.number && (d.enumerable = !1, r.defineProperty(i, t, d));
	            }
	          } else r[n].__defineGetter__ && i.__defineGetter__(t, f);
	        }
	      }(window.self));
	    }, {}], 3: [function (e, t, n) {
	      e("../../modules/es6.array.find"), t.exports = e("../../modules/$.core").Array.find;
	    }, { "../../modules/$.core": 11, "../../modules/es6.array.find": 29 }], 4: [function (e, t, n) {
	      e("../../modules/es6.object.assign"), t.exports = e("../../modules/$.core").Object.assign;
	    }, { "../../modules/$.core": 11, "../../modules/es6.object.assign": 30 }], 5: [function (e, t, n) {
	      e("../../modules/es7.regexp.escape"), t.exports = e("../../modules/$.core").RegExp.escape;
	    }, { "../../modules/$.core": 11, "../../modules/es7.regexp.escape": 31 }], 6: [function (e, t, n) {
	      t.exports = function (e) {
	        if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
	      };
	    }, {}], 7: [function (e, t, n) {
	      t.exports = function () {};
	    }, {}], 8: [function (e, t, n) {
	      var i = e("./$.ctx"),
	          r = e("./$.iobject"),
	          o = e("./$.to-object"),
	          s = e("./$.to-length"),
	          a = e("./$.array-species-create");t.exports = function (e) {
	        var t = 1 == e,
	            n = 2 == e,
	            u = 3 == e,
	            c = 4 == e,
	            l = 6 == e,
	            f = 5 == e || l;return function (d, p, h) {
	          for (var y, v, m = o(d), g = r(m), b = i(p, h, 3), _ = s(g.length), x = 0, k = t ? a(d, _) : n ? a(d, 0) : void 0; _ > x; x++) {
	            if ((f || x in g) && (y = g[x], v = b(y, x, m), e)) if (t) k[x] = v;else if (v) switch (e) {case 3:
	                return !0;case 5:
	                return y;case 6:
	                return x;case 2:
	                k.push(y);} else if (c) return !1;
	          }return l ? -1 : u || c ? c : k;
	        };
	      };
	    }, { "./$.array-species-create": 9, "./$.ctx": 12, "./$.iobject": 17, "./$.to-length": 25, "./$.to-object": 26 }], 9: [function (e, t, n) {
	      var i = e("./$.is-object"),
	          r = e("./$.is-array"),
	          o = e("./$.wks")("species");t.exports = function (e, t) {
	        var n;return r(e) && (n = e.constructor, "function" != typeof n || n !== Array && !r(n.prototype) || (n = void 0), i(n) && (n = n[o], null === n && (n = void 0))), new (void 0 === n ? Array : n)(t);
	      };
	    }, { "./$.is-array": 18, "./$.is-object": 19, "./$.wks": 28 }], 10: [function (e, t, n) {
	      var i = {}.toString;t.exports = function (e) {
	        return i.call(e).slice(8, -1);
	      };
	    }, {}], 11: [function (e, t, n) {
	      var i = t.exports = { version: "1.2.6" };"number" == typeof __e && (__e = i);
	    }, {}], 12: [function (e, t, n) {
	      var i = e("./$.a-function");t.exports = function (e, t, n) {
	        if (i(e), void 0 === t) return e;switch (n) {case 1:
	            return function (n) {
	              return e.call(t, n);
	            };case 2:
	            return function (n, i) {
	              return e.call(t, n, i);
	            };case 3:
	            return function (n, i, r) {
	              return e.call(t, n, i, r);
	            };}return function () {
	          return e.apply(t, arguments);
	        };
	      };
	    }, { "./$.a-function": 6 }], 13: [function (e, t, n) {
	      t.exports = function (e) {
	        if (void 0 == e) throw TypeError("Can't call method on  " + e);return e;
	      };
	    }, {}], 14: [function (e, t, n) {
	      var i = e("./$.global"),
	          r = e("./$.core"),
	          o = e("./$.ctx"),
	          s = "prototype",
	          a = function a(e, t, n) {
	        var u,
	            c,
	            l,
	            f = e & a.F,
	            d = e & a.G,
	            p = e & a.S,
	            h = e & a.P,
	            y = e & a.B,
	            v = e & a.W,
	            m = d ? r : r[t] || (r[t] = {}),
	            g = d ? i : p ? i[t] : (i[t] || {})[s];d && (n = t);for (u in n) {
	          c = !f && g && u in g, c && u in m || (l = c ? g[u] : n[u], m[u] = d && "function" != typeof g[u] ? n[u] : y && c ? o(l, i) : v && g[u] == l ? function (e) {
	            var t = function t(_t) {
	              return this instanceof e ? new e(_t) : e(_t);
	            };return t[s] = e[s], t;
	          }(l) : h && "function" == typeof l ? o(Function.call, l) : l, h && ((m[s] || (m[s] = {}))[u] = l));
	        }
	      };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a;
	    }, { "./$.core": 11, "./$.ctx": 12, "./$.global": 16 }], 15: [function (e, t, n) {
	      t.exports = function (e) {
	        try {
	          return !!e();
	        } catch (t) {
	          return !0;
	        }
	      };
	    }, {}], 16: [function (e, t, n) {
	      var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = i);
	    }, {}], 17: [function (e, t, n) {
	      var i = e("./$.cof");t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
	        return "String" == i(e) ? e.split("") : Object(e);
	      };
	    }, { "./$.cof": 10 }], 18: [function (e, t, n) {
	      var i = e("./$.cof");t.exports = Array.isArray || function (e) {
	        return "Array" == i(e);
	      };
	    }, { "./$.cof": 10 }], 19: [function (e, t, n) {
	      t.exports = function (e) {
	        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e;
	      };
	    }, {}], 20: [function (e, t, n) {
	      var i = Object;t.exports = { create: i.create, getProto: i.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: i.getOwnPropertyDescriptor, setDesc: i.defineProperty, setDescs: i.defineProperties, getKeys: i.keys, getNames: i.getOwnPropertyNames, getSymbols: i.getOwnPropertySymbols, each: [].forEach };
	    }, {}], 21: [function (e, t, n) {
	      var i = e("./$"),
	          r = e("./$.to-object"),
	          o = e("./$.iobject");t.exports = e("./$.fails")(function () {
	        var e = Object.assign,
	            t = {},
	            n = {},
	            i = Symbol(),
	            r = "abcdefghijklmnopqrst";return t[i] = 7, r.split("").forEach(function (e) {
	          n[e] = e;
	        }), 7 != e({}, t)[i] || Object.keys(e({}, n)).join("") != r;
	      }) ? function (e, t) {
	        for (var n = r(e), s = arguments, a = s.length, u = 1, c = i.getKeys, l = i.getSymbols, f = i.isEnum; a > u;) {
	          for (var d, p = o(s[u++]), h = l ? c(p).concat(l(p)) : c(p), y = h.length, v = 0; y > v;) {
	            f.call(p, d = h[v++]) && (n[d] = p[d]);
	          }
	        }return n;
	      } : Object.assign;
	    }, { "./$": 20, "./$.fails": 15, "./$.iobject": 17, "./$.to-object": 26 }], 22: [function (e, t, n) {
	      t.exports = function (e, t) {
	        var n = t === Object(t) ? function (e) {
	          return t[e];
	        } : t;return function (t) {
	          return String(t).replace(e, n);
	        };
	      };
	    }, {}], 23: [function (e, t, n) {
	      var i = e("./$.global"),
	          r = "__core-js_shared__",
	          o = i[r] || (i[r] = {});t.exports = function (e) {
	        return o[e] || (o[e] = {});
	      };
	    }, { "./$.global": 16 }], 24: [function (e, t, n) {
	      var i = Math.ceil,
	          r = Math.floor;t.exports = function (e) {
	        return isNaN(e = +e) ? 0 : (e > 0 ? r : i)(e);
	      };
	    }, {}], 25: [function (e, t, n) {
	      var i = e("./$.to-integer"),
	          r = Math.min;t.exports = function (e) {
	        return e > 0 ? r(i(e), 9007199254740991) : 0;
	      };
	    }, { "./$.to-integer": 24 }], 26: [function (e, t, n) {
	      var i = e("./$.defined");t.exports = function (e) {
	        return Object(i(e));
	      };
	    }, { "./$.defined": 13 }], 27: [function (e, t, n) {
	      var i = 0,
	          r = Math.random();t.exports = function (e) {
	        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + r).toString(36));
	      };
	    }, {}], 28: [function (e, t, n) {
	      var i = e("./$.shared")("wks"),
	          r = e("./$.uid"),
	          o = e("./$.global").Symbol;t.exports = function (e) {
	        return i[e] || (i[e] = o && o[e] || (o || r)("Symbol." + e));
	      };
	    }, { "./$.global": 16, "./$.shared": 23, "./$.uid": 27 }], 29: [function (e, t, n) {
	      "use strict";
	      var i = e("./$.export"),
	          r = e("./$.array-methods")(5),
	          o = "find",
	          s = !0;o in [] && Array(1)[o](function () {
	        s = !1;
	      }), i(i.P + i.F * s, "Array", { find: function find(e) {
	          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
	        } }), e("./$.add-to-unscopables")(o);
	    }, { "./$.add-to-unscopables": 7, "./$.array-methods": 8, "./$.export": 14 }], 30: [function (e, t, n) {
	      var i = e("./$.export");i(i.S + i.F, "Object", { assign: e("./$.object-assign") });
	    }, { "./$.export": 14, "./$.object-assign": 21 }], 31: [function (e, t, n) {
	      var i = e("./$.export"),
	          r = e("./$.replacer")(/[\\^$*+?.()|[\]{}]/g, "\\$&");i(i.S, "RegExp", { escape: function escape(e) {
	          return r(e);
	        } });
	    }, { "./$.export": 14, "./$.replacer": 22 }], 32: [function (e, t, n) {
	      function i() {
	        return new Date().getTime();
	      }t.exports = Date.now || i;
	    }, {}], 33: [function (e, t, n) {
	      var i = e("date-now");t.exports = function (e, t, n) {
	        function r() {
	          var l = i() - u;t > l && l > 0 ? o = setTimeout(r, t - l) : (o = null, n || (c = e.apply(a, s), o || (a = s = null)));
	        }var o, s, a, u, c;return null == t && (t = 100), function () {
	          a = this, s = arguments, u = i();var l = n && !o;return o || (o = setTimeout(r, t)), l && (c = e.apply(a, s), a = s = null), c;
	        };
	      };
	    }, { "date-now": 32 }], 34: [function (e, t, n) {
	      !function (e) {
	        e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector, e.closest = e.closest || function (e) {
	          for (var t = this; t && !t.matches(e);) {
	            t = t.parentElement;
	          }return t;
	        };
	      }(Element.prototype);
	    }, {}], 35: [function (e, t, n) {
	      var i = e("./lib/parser"),
	          r = e("./lib/resource"),
	          o = !1;t.exports = { parse: function parse(e) {
	          return new i().parse(e, o);
	        }, enableValidation: function enableValidation(e) {
	          o = null != e ? e : !0;
	        }, disableValidation: function disableValidation() {
	          o = !1;
	        }, Resource: r };
	    }, { "./lib/parser": 37, "./lib/resource": 38 }], 36: [function (e, t, n) {
	      "use strict";
	      function i() {
	        arguments.length >= 1 ? this._array = arguments[0] : this._array = [];
	      }i.prototype.array = function () {
	        return this._array;
	      }, i.prototype.isEmpty = function (e) {
	        return 0 === this._array.length;
	      }, i.prototype.push = function (e) {
	        var t = this._array.slice(0);return t.push(e), new i(t);
	      }, i.prototype.pop = function () {
	        var e = this._array.slice(0, this._array.length - 1);return new i(e);
	      }, i.prototype.peek = function () {
	        if (this.isEmpty()) throw new Error("can't peek on empty stack");return this._array[this._array.length - 1];
	      }, t.exports = i;
	    }, {}], 37: [function (e, t, n) {
	      "use strict";
	      function i() {}function r(e, t, n) {
	        if (null == e) return e;var i = o(e._links, t, n.push("_links")),
	            r = s(i),
	            c = a(e._embedded, t, n.push("_embedded")),
	            l = new b(i, r, c, t);return u(e, l), l._original = e, l;
	      }function o(e, t, n) {
	        return e = c(e, f, t, n), null != e && null != e.self || y("Resource does not have a self link", t, n), e;
	      }function s(e) {
	        return e ? e.curies : [];
	      }function a(e, t, n) {
	        var i = c(e, h, t, n);return null == i ? i : (Object.keys(i).forEach(function (e) {
	          i[e] = i[e].map(function (i) {
	            var o = null != t ? [] : null,
	                s = r(i, o, n.push(e));return s._original = i, s;
	          });
	        }), i);
	      }function u(e, t) {
	        Object.keys(e).forEach(function (n) {
	          "_links" !== n && "_embedded" !== n && (t[n] = e[n]);
	        });
	      }function c(e, t, n, i) {
	        if (null == e) return e;var r = {};return Object.keys(e).forEach(function (o) {
	          r[o] = l(o, e[o], t, n, i);
	        }), r;
	      }function l(e, t, n, i, r) {
	        return d(t) ? t.map(function (t) {
	          return n(e, t, i, r);
	        }) : [n(e, t, i, r)];
	      }function f(e, t, n, i) {
	        if (!p(t)) throw new Error("Link object is not an actual object: " + t + " [" + (typeof t === "undefined" ? "undefined" : _typeof(t)) + "]");var r = m(t);return Object.keys(x).forEach(function (t) {
	          null == r[t] && (x[t].required && y("Link misses required property " + t + ".", n, i.push(e)), null != x[t].defaultValue && (r[t] = x[t].defaultValue));
	        }), r.deprecation && v("Warning: Link " + g(i.push(e)) + " is deprecated, see " + r.deprecation), r.templated !== !0 && r.templated !== !1 && (r.templated = !1), n ? (r.href && r.href.indexOf("{") >= 0 && !r.templated && y('Link seems to be an URI template but its "templated" property is not set to true.', n, i.push(e)), r) : r;
	      }function d(e) {
	        return "[object Array]" === Object.prototype.toString.call(e);
	      }function p(e) {
	        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	      }function h(e, t) {
	        return t;
	      }function y(e, t, n) {
	        t && t.push({ path: g(n), message: e });
	      }function v(e) {
	        "undefined" != typeof console && "function" == typeof console.log && console.log(e);
	      }function m(e) {
	        var t = {};return Object.keys(e).forEach(function (n) {
	          t[n] = e[n];
	        }), t;
	      }function g(e) {
	        for (var t = "$.", n = 0; n < e.array().length; n++) {
	          t += e.array()[n] + ".";
	        }return t = t.substring(0, t.length - 1);
	      }var b = e("./resource"),
	          _ = e("./immutable_stack"),
	          x = { href: { required: !0, defaultValue: null }, templated: { required: !1, defaultValue: !1 }, type: { required: !1, defaultValue: null }, deprecation: { required: !1, defaultValue: null }, name: { required: !1, defaultValue: null }, profile: { required: !1, defaultValue: null }, title: { required: !1, defaultValue: null }, hreflang: { required: !1, defaultValue: null } };i.prototype.parse = function (e, t) {
	        var n = t ? [] : null;return r(e, n, new _());
	      }, t.exports = i;
	    }, { "./immutable_stack": 36, "./resource": 38 }], 38: [function (e, t, n) {
	      "use strict";
	      function i(e, t, n, i) {
	        this._links = e || {}, this._initCuries(t), this._embedded = n || {}, this._validation = i || [];
	      }function r(e, t) {
	        return null != e ? e[t] : null;
	      }function o(e, t, n) {
	        n = n || 0;var i = r(e, t);return null != i && i.length >= 1 ? i[n] : null;
	      }i.prototype._initCuries = function (e) {
	        if (this._curiesMap = {}, e) {
	          this._curies = e;for (var t = 0; t < this._curies.length; t++) {
	            var n = this._curies[t];this._curiesMap[n.name] = n;
	          }
	        } else this._curies = [];this._preResolveCuries();
	      }, i.prototype._preResolveCuries = function () {
	        this._resolvedCuriesMap = {};for (var e = 0; e < this._curies.length; e++) {
	          var t = this._curies[e];if (t.name) for (var n in this._links) {
	            "curies" !== n && this._preResolveCurie(t, n);
	          }
	        }
	      }, i.prototype._preResolveCurie = function (e, t) {
	        var n = (this._links[t], t.split(/:(.+)/)),
	            i = n[0];if (e.name === i) if (e.templated && n.length >= 1) {
	          var r = e.href.replace(/(.*){(.*)}(.*)/, "$1" + n[1] + "$3");this._resolvedCuriesMap[r] = t;
	        } else this._resolvedCuriesMap[e.href] = t;
	      }, i.prototype.allLinkArrays = function () {
	        return this._links;
	      }, i.prototype.linkArray = function (e) {
	        return r(this._links, e);
	      }, i.prototype.link = function (e, t) {
	        return o(this._links, e, t);
	      }, i.prototype.hasCuries = function (e) {
	        return this._curies.length > 0;
	      }, i.prototype.curieArray = function (e) {
	        return this._curies;
	      }, i.prototype.curie = function (e) {
	        return this._curiesMap[e];
	      }, i.prototype.reverseResolveCurie = function (e) {
	        return this._resolvedCuriesMap[e];
	      }, i.prototype.allEmbeddedResourceArrays = function () {
	        return this._embedded;
	      }, i.prototype.embeddedResourceArray = function (e) {
	        return r(this._embedded, e);
	      }, i.prototype.embeddedResource = function (e, t) {
	        return o(this._embedded, e, t);
	      }, i.prototype.original = function () {
	        return this._original;
	      }, i.prototype.validationIssues = function () {
	        return this._validation;
	      }, i.prototype.allLinks = i.prototype.allLinkArrays, i.prototype.allEmbeddedArrays = i.prototype.allEmbeddedResources = i.prototype.allEmbeddedResourceArrays, i.prototype.embeddedArray = i.prototype.embeddedResourceArray, i.prototype.embedded = i.prototype.embeddedResource, i.prototype.validation = i.prototype.validationIssues, t.exports = i;
	    }, {}], 39: [function (e, t, n) {
	      t.exports = function (e) {
	        var t = {},
	            n = [];e = e || this, e.on = function (e, n, i) {
	          (t[e] = t[e] || []).push([n, i]);
	        }, e.off = function (e, i) {
	          e || (t = {});for (var r = t[e] || n, o = r.length = i ? r.length : 0; o--;) {
	            i == r[o][0] && r.splice(o, 1);
	          }
	        }, e.emit = function (e) {
	          for (var i, r = t[e] || n, o = 0; i = r[o++];) {
	            i[0].apply(i[1], n.slice.call(arguments, 1));
	          }
	        };
	      };
	    }, {}] }, {}, [1])(1);
	});
	//# sourceMappingURL=teleport-autocomplete.min.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/resolve-url-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./teleport-autocomplete.min.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/resolve-url-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./teleport-autocomplete.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*! teleport-autocomplete - v0.3.1 | https://github.com/teleport/autocomplete#readme | MIT */\n\n.tp-ac__input,\n.tp-ac__list {\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0,0,0,.35);\n}\n\n.tp-autocomplete {\n  position: relative;\n  max-width: 25em;\n}\n\n.tp-ac__input {\n  padding: .25em;\n  border: 1px solid transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  font-size: 1.25em;\n  font-weight: 700;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n}\n\n.tp-ac__input::-webkit-input-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input::-moz-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input:-ms-input-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input::placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input:focus {\n  outline: 0;\n}\n\n.tp-ac__input::-ms-clear {\n  display: none;\n}\n\n.spinner .tp-ac__input {\n  padding-right: 1.5em;\n  margin-right: -1.5em;\n}\n\n.tp-ac__list {\n  position: absolute;\n  z-index: 1;\n  margin: 0;\n  padding-left: 0;\n  list-style-type: none;\n  color: #979797;\n  background-color: #fff;\n  font-size: .875em;\n}\n\n.tp-ac__item {\n  overflow: hidden;\n  padding: .35714em .71429em;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.tp-ac__item.is-active,\n.tp-ac__item:hover {\n  background-color: #ddd;\n}\n\n.tp-ac__item.no-results,\n.tp-ac__item.no-results:hover {\n  cursor: default;\n  background-color: #fff;\n}\n\n.tp-ac__item span {\n  color: #4a4a4a;\n  font-weight: 700;\n}\n\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner:before {\n  position: absolute;\n  top: 50%;\n  right: .5em;\n  width: 1em;\n  height: 1em;\n  margin-top: -.625em;\n  margin-left: -.625em;\n  content: '';\n  animation: spinner 1s linear infinite;\n  border: 2px solid rgba(0,0,0,.3);\n  border-top-color: rgba(0,0,0,.6);\n  border-radius: 50%;\n}", ""]);

	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _eventMixin = __webpack_require__(41);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	var _itemCity = __webpack_require__(61);

	var _itemCity2 = _interopRequireDefault(_itemCity);

	var _listItemsTemplate = __webpack_require__(62);

	var _listItemsTemplate2 = _interopRequireDefault(_listItemsTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SELECTORS = {
	    closeButton: "[data-city-viewer-item-close]",
	    viewerItem: "[data-city-viewer-item]",
	    viewerInner: "[data-city-viewer-inner]",
	    activeClass: "active",
	    preloaderOnAddCity: "[preloader-on-add-city]"
	};

	var CityViewer = function () {
	    function CityViewer(elem) {
	        var _this = this;

	        _classCallCheck(this, CityViewer);

	        this._elem = elem;
	        this._state = {
	            cities: 0
	        };

	        elem.addEventListener("click", this._manager.bind(this));

	        this.on("onAddedListOfCities", function () {
	            if (_this.isScroll()) {
	                _this.trigger(_this.constructor.EVENTS.isScroll);
	            } else {
	                _this.trigger(_this.constructor.EVENTS.noScroll);
	            }
	        });

	        this._checkState();
	    }

	    _createClass(CityViewer, [{
	        key: "getItemHeight",
	        value: function getItemHeight() {
	            // console.log()
	            return this._elem.querySelector(SELECTORS.viewerItem) ? this._elem.querySelector(SELECTORS.viewerItem).clientHeight : 0;
	        }
	    }, {
	        key: "getAllItemsHeight",
	        value: function getAllItemsHeight() {
	            var itemsLingth = this.getItemsLength();
	            var itemHeight = this.getItemHeight();
	            var itemMarginBottom = this.getItemMarginBottom();
	            var result = 0;

	            for (var i = 0; i < itemsLingth; i++) {
	                result += itemHeight + itemMarginBottom;
	            }

	            result += itemHeight;

	            return result;
	        }
	    }, {
	        key: "isEmpty",
	        value: function isEmpty() {
	            return this.getItemsLength() === 0;
	        }
	    }, {
	        key: "showPreloaderOnAddCity",
	        value: function showPreloaderOnAddCity() {
	            var preloader = document.createElement("div");
	            var inner = this._elem.querySelector(SELECTORS.viewerInner);

	            preloader.className = "city-viewer__preloader";
	            preloader.setAttribute("preloader-on-add-city", "");

	            if (!this.isEmpty()) {
	                var elem = this._elem.querySelector(SELECTORS.viewerItem);

	                var computedStyle = getComputedStyle(elem);
	                preloader.style.marginTop = computedStyle.marginTop;
	                preloader.style.marginBottom = computedStyle.marginBottom;
	                preloader.style.height = elem.offsetHeight + "px";
	            }

	            inner.scrollTop = 0;
	            inner.insertBefore(preloader, inner.firstElementChild);
	            this.trigger(this.constructor.EVENTS.onShowPreloaderAddCity, this.isScroll());
	        }
	    }, {
	        key: "hidePreloaderOnAddCity",
	        value: function hidePreloaderOnAddCity() {
	            var _this2 = this;

	            var preloader = this._elem.querySelector(SELECTORS.preloaderOnAddCity);

	            if (!preloader) {
	                return;
	            }

	            preloader.parentNode.removeChild(preloader);
	            setTimeout(function () {
	                _this2.trigger(_this2.constructor.EVENTS.onHidePreloaderAddCity, _this2.isScroll());
	            }, 0);
	        }
	    }, {
	        key: "showPreloaderOnCity",
	        value: function showPreloaderOnCity(elem) {
	            elem.classList.add("show-preloader");
	        }
	    }, {
	        key: "hidePreloaderOnCity",
	        value: function hidePreloaderOnCity(elem) {
	            elem.classList.remove("show-preloader");
	        }
	    }, {
	        key: "lockViewer",
	        value: function lockViewer() {
	            this._elem.classList.add("blocked");
	        }
	    }, {
	        key: "unlockViewer",
	        value: function unlockViewer() {
	            this._elem.classList.remove("blocked");
	        }
	    }, {
	        key: "getViewerHeight",
	        value: function getViewerHeight() {
	            return this._elem.clientHeight;
	        }
	    }, {
	        key: "getItemMarginBottom",
	        value: function getItemMarginBottom() {
	            return this._elem.querySelector(SELECTORS.viewerItem) ? parseInt(getComputedStyle(this._elem.querySelector(SELECTORS.viewerItem)).marginBottom) : 0;
	        }
	    }, {
	        key: "getItemsLength",
	        value: function getItemsLength() {
	            // return this._elem.querySelectorAll(SELECTORS.viewerItem).length;
	            return this._elem.querySelector(SELECTORS.viewerInner).children.length || 0;
	        }
	    }, {
	        key: "isScroll",
	        value: function isScroll() {
	            return this.getAllItemsHeight() > this.getViewerHeight();
	        }
	    }, {
	        key: "addCity",
	        value: function addCity(cityData) {
	            // console.log(cityData)
	            var elem = (0, _itemCity2.default)(cityData);
	            var div = document.createElement("div");

	            div.innerHTML = elem;

	            var newElem = div.firstElementChild;
	            var parent = this._elem.querySelector(SELECTORS.viewerInner);

	            parent.insertBefore(newElem, parent.firstElementChild);
	            this._setActiveClass(newElem);
	            this.trigger(this.constructor.EVENTS.onAddCity, this.isScroll());
	        }
	    }, {
	        key: "addListOfCities",
	        value: function addListOfCities(citiesData) {
	            var html = (0, _listItemsTemplate2.default)({ cities: citiesData });
	            var parent = this._elem.querySelector(SELECTORS.viewerInner);

	            parent.insertAdjacentHTML("afterbegin", html);

	            this.trigger(this.constructor.EVENTS.onAddedListOfCities);
	        }
	    }, {
	        key: "_manager",
	        value: function _manager(event) {
	            var target = event.target;

	            if (target.closest(SELECTORS.closeButton)) {
	                event.preventDefault();

	                var close = target.closest(SELECTORS.closeButton);

	                this._deleteCity(close);
	                return;
	            }

	            if (target.closest(SELECTORS.viewerItem)) {
	                var item = target.closest(SELECTORS.viewerItem);

	                this._selectCity(item);
	                return;
	            }
	        }
	    }, {
	        key: "_selectCity",
	        value: function _selectCity(item) {
	            var geoId = item.getAttribute("data-geoId");
	            var tzOffsetMinutes = item.getAttribute("data-tzOffsetMinutes");

	            this._setActiveClass(item);
	            this.trigger(this.constructor.EVENTS.onSelectedCity, {
	                geoId: geoId,
	                tzOffsetMinutes: tzOffsetMinutes
	            });
	        }
	    }, {
	        key: "_deleteCity",
	        value: function _deleteCity(elemClose) {
	            var elem = elemClose.closest(SELECTORS.viewerItem);
	            var geoId = elem.getAttribute("data-geoId");

	            elem.parentNode.removeChild(elem);

	            if (elem.classList.contains(SELECTORS.activeClass)) {
	                this._setNewActiveElement();
	            }

	            this._onDeleteCity(geoId);
	        }
	    }, {
	        key: "_setNewActiveElement",
	        value: function _setNewActiveElement() {
	            var _this3 = this;

	            var newActiveElem = this._elem.querySelector(SELECTORS.viewerItem);

	            if (!newActiveElem) {
	                this.trigger(this.constructor.EVENTS.onDeletAllCities);
	                return;
	            }

	            this._selectCity(newActiveElem);

	            setTimeout(function () {
	                _this3._setScrollTop();
	            }, 0);
	        }
	    }, {
	        key: "_setScrollTop",
	        value: function _setScrollTop() {
	            if (!document.body.classList.contains("isLandscape")) {
	                this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
	            } else {
	                if (document.documentElement.clientWidth >= 1024) {
	                    this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
	                } else {
	                    window.scrollTo(0, 0);
	                }
	            }
	        }
	    }, {
	        key: "_setActiveClass",
	        value: function _setActiveClass(elem) {
	            var cities = this._elem.querySelectorAll(SELECTORS.viewerItem);

	            Array.prototype.slice.call(cities).forEach(function (city) {
	                return city.classList.remove("active");
	            });
	            elem.classList.add("active");
	        }
	    }, {
	        key: "_onDeleteCity",
	        value: function _onDeleteCity(geoId) {
	            this.trigger(this.constructor.EVENTS.onDeleteCity, parseInt(geoId));

	            if (this.getItemsLength() > 0) {
	                this.trigger(this.constructor.EVENTS.onDeleteCityGetDimention, this.isScroll());
	            }
	        }
	    }, {
	        key: "getState",
	        value: function getState() {
	            return this._state;
	        }
	    }, {
	        key: "_checkState",
	        value: function _checkState() {
	            var _this4 = this;

	            this.on(this.constructor.EVENTS.onAddCity, function () {
	                _this4._writeState();
	            });

	            this.on(this.constructor.EVENTS.onAddedListOfCities, function () {
	                _this4._writeState();
	            });

	            this.on(this.constructor.EVENTS.onDeleteCity, function () {
	                _this4._writeState();
	            });

	            this.on(this.constructor.EVENTS.onDeletAllCities, function () {
	                _this4._writeState();
	            });

	            window.addEventListener("resize", function () {
	                setTimeout(function () {
	                    _this4._writeState();
	                }, 0);
	            });
	        }
	    }, {
	        key: "_writeState",
	        value: function _writeState() {
	            this._state.cities = this.getItemsLength();
	            if (this.getItemsLength() === 0) {
	                this._state.isScroll = false;
	            } else {
	                this._state.isScroll = this.isScroll();
	            }
	            this._state.isEmpty = this.isEmpty();
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onSelectedCity": "onSelectedCity",
	                "onDeleteCity": "onDeleteCity",
	                "onDeletAllCities": "onDeletAllCities",
	                "onDeleteCityGetDimention": "onDeleteCityGetDimention",
	                "onAddCity": "onAddCity",
	                "isScroll": "isScroll",
	                "noScroll": "noScroll",
	                "onAddedListOfCities": "onAddedListOfCities",
	                "onShowPreloaderAddCity": "onShowPreloaderAddCity",
	                "onHidePreloaderAddCity": "onHidePreloaderAddCity"
	            };
	        }
	    }]);

	    return CityViewer;
	}();

	for (var key in _eventMixin2.default) {
	    CityViewer.prototype[key] = _eventMixin2.default[key];
	}

	exports.default = CityViewer;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (geoId, name, tzOffsetMinutes) {var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv" + (" class=\"city-viewer__item\""+pug.attr("data-geoId", geoId, true, true)+pug.attr("data-tzOffsetMinutes", tzOffsetMinutes, true, true)+" data-city-viewer-item") + "\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";}.call(this,"geoId" in locals_for_with?locals_for_with.geoId:typeof geoId!=="undefined"?geoId:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"tzOffsetMinutes" in locals_for_with?locals_for_with.tzOffsetMinutes:typeof tzOffsetMinutes!=="undefined"?tzOffsetMinutes:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (cities) {var pug_indent = [];
	// iterate cities
	;(function(){
	  var $$obj = cities;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var city = $$obj[pug_index0];
	pug_html = pug_html + "\n\u003Cdiv" + (pug.attr("class", pug.classes(["city-viewer__item " + ((city.active) ? "active" : "")], [true]), false, true)+pug.attr("data-geoId", city.id, true, true)+" data-city-viewer-item"+pug.attr("data-tzOffsetMinutes", city.tzOffsetMinutes, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = city.name) ? "" : pug_interp)) + "\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var city = $$obj[pug_index0];
	pug_html = pug_html + "\n\u003Cdiv" + (pug.attr("class", pug.classes(["city-viewer__item " + ((city.active) ? "active" : "")], [true]), false, true)+pug.attr("data-geoId", city.id, true, true)+" data-city-viewer-item"+pug.attr("data-tzOffsetMinutes", city.tzOffsetMinutes, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = city.name) ? "" : pug_interp)) + "\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);
	}.call(this,"cities" in locals_for_with?locals_for_with.cities:typeof cities!=="undefined"?cities:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"utf-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"initial-scale=1.0, width=device-width\"\u003E\n    \u003Cmeta name=\"description\" content=\"\"\u003E\n    \u003Cmeta name=\"keywords\" content=\"\"\u003E\n    \u003Cmeta name=\"author\" content=\"\"\u003E\n    \u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:400,700\" type=\"text\u002Fcss\"\u003E\n    \u003Ctitle\u003Eweather app v0.0.1\n    \u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003C!-- wrapper--\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003C!-- maincontent--\u003E\n      \u003Cdiv class=\"maincontent\"\u003E\n        \u003C!-- menu--\u003E" + (null == (pug_interp = __webpack_require__(64).call(this, locals)) ? "" : pug_interp) + "\n        \u003C!-- END menu--\u003E\n        \u003C!-- content--\u003E" + (null == (pug_interp = __webpack_require__(67).call(this, locals)) ? "" : pug_interp) + "\n        \u003C!-- END content--\u003E\n      \u003C\u002Fdiv\u003E\n      \u003C!-- END maincontent--\u003E\n    \u003C\u002Fdiv\u003E\n    \u003C!-- END wrapper--\u003E\n    \u003Cdiv class=\"overflow\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"popup\"\u003E\n      \u003Cdiv class=\"popup__inner\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"menu is-empty\" data-menu\u003E\n  \u003Cdiv class=\"menu__inner\"\u003E\u003Ca class=\"menu__close\" href=\"#\"\u003E\u003C\u002Fa\u003E\n    \u003Cdiv class=\"menu__search\"\u003E" + (null == (pug_interp = __webpack_require__(65).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"menu__city-viewer\"\u003E" + (null == (pug_interp = __webpack_require__(66).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"menu__tongue\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"menu__overflow\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"search\" data-search\u003E\n  \u003Cdiv class=\"search__inner\"\u003E\n    \u003Cinput class=\"search__input\" type=\"text\" placeholder=\"start type city's name\"\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"search__block\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"city-viewer\" data-city-viewer\u003E\n  \u003Cdiv class=\"city-viewer__inner\" data-city-viewer-inner\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"6167865\" data-city-viewer-item).active--\u003E\n    \u003C!--    | Toronto, Canada--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n    \u003C!--.city-viewer__item(data-geoId = \"5368361\" data-city-viewer-item)--\u003E\n    \u003C!--    | Los Angeles, USA--\u003E\n    \u003C!--    a(href=\"#\" data-city-viewer-item-close ).city-viewer__item-close--\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city-viewer__blocker\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"content\"\u003E\n  \u003Cdiv class=\"content__inner\"\u003E" + (null == (pug_interp = __webpack_require__(68).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(71).call(this, locals)) ? "" : pug_interp) + "\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"preloader\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"welcome-screen\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"current-city init\" data-current-city\u003E\n  \u003Cdiv class=\"current-city__inner\"\u003E" + (null == (pug_interp = __webpack_require__(69).call(this, locals)) ? "" : pug_interp) + "\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"current-city__overlay\" data-current-city-overlay\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"city\"\u003E\n  \u003Cdiv class=\"city__name\" data-city-name\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city__descr\"\u003E\n    \u003Cdiv class=\"city__descr-main\"\u003E\n      \u003Cdiv class=\"city__weather\" data-city-weather\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"city__temp celcius\" data-city-temp\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city__descr-img-wrap\"\u003E\u003Cimg class=\"city__descr-img\" src=\"\" data-city-img\u003E\n      \u003Cdiv class=\"city__date\" data-city-data\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city__details\" data-details\u003E\n    \u003C!-- include .\u002F_details.pug--\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city__hourly\" data-hourly\u003E\n    \u003C!-- include .\u002F_hourly.pug--\u003E\n  \u003C\u002Fdiv\u003E\u003Ca class=\"city__more\" href=\"#\" data-more-details\u003Emore details\u003C\u002Fa\u003E\u003Ca class=\"city__reload\" href=\"#\" data-reload-data\u003E\u003Cimg" + (" class=\"city__reload-img\""+pug.attr("src", __webpack_require__(70), true, true)) + "\u003E\u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/refreshing.svg";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(47);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"addition\" data-addition\u003E\n  \u003C!--ul.addition__list--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzP2hhc2g9NzViMWNmNWNiNDkxY2UyMzNhMzkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzViMWNmNWNiNDkxY2UyMzNhMzkiLCJ3ZWJwYWNrOi8vLy4vbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL21haW4vX2luZGV4LnNjc3M/ZDY2MiIsIndlYnBhY2s6Ly8vLi9tYWluL19pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2ltZy93aGVlbC5zdmciLCJ3ZWJwYWNrOi8vLy4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9pbWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW1nL20wMWQuc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMDFuLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20wMm4uc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTAzbi5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20wNGQuc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMDRuLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTA5ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20wOW4uc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMTBkLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTEwbi5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20xMWQuc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMTFuLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTEzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20xM24uc3ZnIiwid2VicGFjazovLy8uL2ltZy9tNTBkLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTUwbi5zdmciLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb250cm9sbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tb2RlbC9kYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21vZGVsL2ZldGNoRGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9+L3dlYnBhY2svfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9yZWQpIiwid2VicGFjazovLy8uLi9GOi9wcm9ncmFtL3dvcmsvcHJvamVjdHMvbHV4b2Z0L3dlYXRoZXJBcHAvfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vZXZlbnRNaXhpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbW1vbi9lcnJvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9jdXJyZW50LWNpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2RldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2RldGFpbHMvdGVtcGxhdGUucHVnIiwid2VicGFjazovLy8uLi9+L3B1Zy9+L3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy9mcyAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2hvdXJseS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3JzL2hhbW1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvaG91cmx5L3RlbXBsYXRlLnB1ZyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvaG91cmx5L3RlbXBsYXRlTkEucHVnIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9uZXgtZGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvbmV4LWRheXMvdGVtcGxhdGUucHVnIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9ycy9hdXRvY29tcGxldGUvZGlzdC90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmpzIiwid2VicGFjazovLy8uL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3M/NjdkOSIsIndlYnBhY2s6Ly8vLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9jaXR5LXZpZXdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvY2l0eS12aWV3ZXIvaXRlbS1jaXR5LnB1ZyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvY2l0eS12aWV3ZXIvbGlzdC1pdGVtcy10ZW1wbGF0ZS5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fbWVudS5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fc2VhcmNoLnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LXZpZXdlci5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY29udGVudC5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY3VycmVudC1jaXR5LnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LnB1ZyIsIndlYnBhY2s6Ly8vLi9pbWcvcmVmcmVzaGluZy5zdmciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fYWRkaXRpb24ucHVnIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NWIxY2Y1Y2I0OTFjZTIzM2EzOSIsIid1c2Ugc3RyaWN0JztcblxuLypcbnN0eWxlc1xuICovXG5pbXBvcnQgJy4vX2luZGV4LnNjc3MnO1xuXG4vKlxuIGltYWdlc1xuICovXG5pbXBvcnQgJy4vLi4vaW1nL2luZGV4JztcblxuLypcbiBtYXJrdXBcbiAqL1xuaWYgKE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmVxdWlyZSgnLi9pbmRleC5wdWcnKTtcbn1cblxuLypcbiBsb2dpY1xuKi9cblxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vLi4vbW9kdWxlcy9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi9pbmRleC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vX2luZGV4LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9faW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vX2luZGV4LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9faW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgYW5kIElFIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZSxcXG4gKiAgICB3aXRob3V0IGRpc2FibGluZyB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAqL1xcblxcbltoaWRkZW5dLFxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIExpbmtzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIGZvY3VzZWQgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBhbHNvIGluIGFuXFxuICogYWN0aXZlL2hvdmVyIHN0YXRlLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXG4gKi9cXG5cXG5vcHRncm91cCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVGFibGVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFjIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLm1hYyBpbnB1dCxcXG4ubWFjIHRleHRhcmVhLFxcbi5tYWMgYnV0dG9uIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbmE6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLmNpdHlfX21vcmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93biB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkaXRpb25fX2xpc3Q6YmVmb3JlLFxcbi5kZXRhaWxzX19pdGVtOmJlZm9yZSxcXG4uY2l0eV9fZGVzY3I6YmVmb3JlLFxcbi5ob3VybHlfX3NsaWRlcjpiZWZvcmUsXFxuLmFkZGl0aW9uX19saXN0OmFmdGVyLFxcbi5kZXRhaWxzX19pdGVtOmFmdGVyLFxcbi5jaXR5X19kZXNjcjphZnRlcixcXG4uaG91cmx5X19zbGlkZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLmFkZGl0aW9uX19saXN0OmFmdGVyLFxcbi5kZXRhaWxzX19pdGVtOmFmdGVyLFxcbi5jaXR5X19kZXNjcjphZnRlcixcXG4uaG91cmx5X19zbGlkZXI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5kYXNoZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZGFzaGVkOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmRhc2hlZCBzcGFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhc2hlZCBzcGFuOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgR2FydWRhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDYyMHB4O1xcbiAgfVxcbn1cXG5cXG5odG1sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndyYXBwZXIsXFxuLm1haW5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLmlzTGFuZHNjYXBlIGh0bWwsXFxuLmlzTGFuZHNjYXBlIGJvZHksXFxuLmlzTGFuZHNjYXBlIC53cmFwcGVyLFxcbi5pc0xhbmRzY2FwZSAubWFpbmNvbnRlbnQsXFxuLmlzTGFuZHNjYXBlIC5jb250ZW50LFxcbi5pc0xhbmRzY2FwZSAuY3VycmVudC1jaXR5LFxcbi5pc0xhbmRzY2FwZSAuYWRkaXRpb24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLWhlaWdodDogaW5pdGlhbDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmlzTGFuZHNjYXBlIGh0bWwsXFxuICAuaXNMYW5kc2NhcGUgYm9keSxcXG4gIC5pc0xhbmRzY2FwZSAubWFpbmNvbnRlbnQsXFxuICAuaXNMYW5kc2NhcGUgLndyYXBwZXIsXFxuICAuaXNMYW5kc2NhcGUgLmNvbnRlbnQsXFxuICAuaXNMYW5kc2NhcGUgLm1lbnUge1xcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4uYWRkaXRpb24ge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuYWRkaXRpb24ge1xcbiAgICBoZWlnaHQ6IDQ1JSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4uYWRkaXRpb25fX2xpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuYWRkaXRpb25fX2xpc3Qge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmFkZGl0aW9uX19saXN0IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxufVxcblxcbi5hZGRpdGlvbl9faXRlbSB7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5hZGRpdGlvbl9faXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5hZGRpdGlvbl9faXRlbSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMzLjMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmFkZGl0aW9uX19pdGVtOm50aC1jaGlsZCgybikge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB9XFxuXFxuICAuYWRkaXRpb25fX2l0ZW06bnRoLWNoaWxkKDJuIC0gMSkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuYWRkaXRpb25fX2l0ZW0ge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbl9faXRlbTpudGgtY2hpbGQoMm4gLSAxKSxcXG4gIC5hZGRpdGlvbl9faXRlbTpudGgtY2hpbGQoMm4pIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICB9XFxuXFxuICAuYWRkaXRpb25fX2l0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuYWRkaXRpb25fX2l0ZW06bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB9XFxufVxcblxcbi5jaXR5LXZpZXdlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXIuYmxvY2tlZCAuY2l0eS12aWV3ZXJfX2Jsb2NrZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jaXR5LXZpZXdlciB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faW5uZXIge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW0ge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS5zaG93LXByZWxvYWRlciAuY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2Uge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjZzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAgMTJweCAjNjY2O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZTpiZWZvcmUsXFxuLmNpdHktdmlld2VyX19pdGVtLWNsb3NlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG59XFxuXFxuLmNpdHktdmlld2VyX19pdGVtLWNsb3NlOmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZTphZnRlciB7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2Jsb2NrZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNpdHktdmlld2VyX19wcmVsb2FkZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4vLi4vaW1nL3doZWVsLnN2Z1wiKSArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAzOHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDA1ZGVnKTtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250ZW50IC5jb250ZW50X19pbm5lciB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XFxuICB9XFxufVxcblxcbi5jdXJyZW50LWNpdHkge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcztcXG59XFxuXFxuLmN1cnJlbnQtY2l0eS5pbml0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmN1cnJlbnQtY2l0eS5zbWFsbCB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNtYWxsIC5jaXR5X19kZXNjci1pbWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNtYWxsIC5jaXR5X19kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmN1cnJlbnQtY2l0eS5zaG93LW1vcmUtZGV0YWlscyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMjtcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNob3duIC5jdXJyZW50LWNpdHlfX292ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY3VycmVudC1jaXR5IHtcXG4gICAgaGVpZ2h0OiA1NSUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLmN1cnJlbnQtY2l0eV9faW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogODtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xcbn1cXG5cXG4uY3VycmVudC1jaXR5X19vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNXM7XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0zMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IC4zcztcXG59XFxuXFxuLm1lbnUuaXMtZW1wdHkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVudS5pcy1lbXB0eSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogaW5pdGlhbDtcXG4gIH1cXG59XFxuXFxuLm1lbnUub3BlbiB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubWVudS5vcGVuIC5tZW51X19vdmVyZmxvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1lbnUge1xcbiAgICB3aWR0aDogNDQwcHg7XFxuICAgIGxlZnQ6IC00NDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lbnUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxufVxcblxcbi5tZW51X19pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5tZW51X19pbm5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIH1cXG59XFxuXFxuLm1lbnVfX2Nsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgYm94LXNoYWRvdzogMCAwICAxMnB4ICM2NjY7XFxufVxcblxcbi5tZW51X19jbG9zZTpiZWZvcmUsXFxuLm1lbnVfX2Nsb3NlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG59XFxuXFxuLm1lbnVfX2Nsb3NlOmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5tZW51X19jbG9zZTphZnRlciB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVudV9fY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4ubWVudV9fb3ZlcmZsb3cge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVudV9fb3ZlcmZsb3cge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbmRpdi5tZW51X19zZWFyY2gge1xcbiAgaGVpZ2h0OiAyMCU7XFxuICBwYWRkaW5nLXRvcDogNjVweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgZGl2Lm1lbnVfX3NlYXJjaCB7XFxuICAgIGhlaWdodDogMjAlICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi5tZW51X19jaXR5LXZpZXdlciB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVudV9fY2l0eS12aWV3ZXIge1xcbiAgICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4ubWVudV9fdG9uZ3VlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA5cHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZDogI2FhYTtcXG4gIHJpZ2h0OiAtOXB4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lbnVfX3Rvbmd1ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zZWFyY2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbi5zZWFyY2ggLnRwLWFjX19pdGVtIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zZWFyY2guYmxvY2sgLnNlYXJjaF9fYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWFyY2guYmxvY2sgLnNlYXJjaF9faW5uZXIge1xcbiAgb3BhY2l0eTogLjY7XFxufVxcblxcbi5zZWFyY2hfX2lubmVyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VhcmNoX19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuXFxuLnNlYXJjaF9fYmxvY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm92ZXJmbG93IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5vdmVyZmxvdy5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJlbG9hZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgei1pbmRleDogMjA7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4vLi4vaW1nL3doZWVsLnN2Z1wiKSArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ucHJlbG9hZGVyLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gIH1cXG59XFxuXFxuLmRldGFpbHMuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kZXRhaWxzLm9wZW4ge1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDExcHg7XFxufVxcblxcbi5kZXRhaWxzLm9wZW4gLmRldGFpbHNfX2l0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmRldGFpbHMub3BlbiAuZGV0YWlsc19faXRlbS5kZXRhaWxzLS1tb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZGV0YWlscy5vcGVuIC5kZXRhaWxzX19pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgfVxcbn1cXG5cXG4uZGV0YWlsc19faXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5kZXRhaWxzX19pdGVtLmRldGFpbHMtLW1vcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHNfX2l0ZW0uZGV0YWlscy0taGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5kZXRhaWxzX19pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuLmRldGFpbHNfX2l0ZW0tdGV4dCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5kZXRhaWxzX19udW0ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZGV0YWlsc19faGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHkge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDU1cHg7XFxuICB9XFxufVxcblxcbi5jaXR5X19uYW1lIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fbmFtZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2l0eV9fbmFtZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fZGVzY3Ige1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fZGVzY3Ige1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2l0eV9fZGVzY3Ige1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fZGV0YWlscyB7XFxuICBtYXgtd2lkdGg6IDY1JTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX2RldGFpbHMge1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX2Rlc2NyLW1haW4ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5jaXR5X193ZWF0aGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX3dlYXRoZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDQ2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2l0eV9fd2VhdGhlciB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICB9XFxufVxcblxcbi5jaXR5X190ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDgycHg7XFxuICB9XFxuXFxuICAuY2l0eV9fdGVtcC5jZWxjaXVzOmFmdGVyIHtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNpdHlfX3RlbXAge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fZGVzY3ItaW1nLXdyYXAge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fZGVzY3ItaW1nLXdyYXAge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX2Rlc2NyLWltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fZGVzY3ItaW1nIHtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2l0eV9fZGVzY3ItaW1nIHtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fZGF0ZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X19kYXRlIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX21vcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX21vcmUge1xcbiAgICBwYWRkaW5nLXRvcDogODBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNpdHlfX21vcmUge1xcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX3JlbG9hZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyMHB4O1xcbiAgYm90dG9tOiA1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAuMXM7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcXG59XFxuXFxuLmNpdHlfX3JlbG9hZC5yZWxvYWRpbmcge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVJlZnJlc2hlcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjZzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X19yZWxvYWQge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsZWZ0OiAzNXB4O1xcbiAgICBib3R0b206IDEwcHg7XFxuICB9XFxufVxcblxcbi5jaXR5X19yZWxvYWQtaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlUmVmcmVzaGVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICB9XFxufVxcblxcbi5ob3VybHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjFzO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uaG91cmx5OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA5NCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJveC1zaGFkb3c6IDAgLTRweCAxNHB4IDFweCAjNzc3O1xcbn1cXG5cXG4uaG91cmx5LnNob3duIHtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuLmhvdXJseS5zaG93bi1zbGlkZXIgLmhvdXJseV9faW5uZXIge1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uaG91cmx5LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaG91cmx5IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzhweDtcXG4gIH1cXG59XFxuXFxuLmhvdXJseV9faW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdG9wIDAuNDVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaG91cmx5X19pbm5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4uaG91cmx5X19zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuXFxuLmhvdXJseV9fc2xpZGVyLnNsaWRlIHtcXG4gIGxlZnQ6IC0xMDAlO1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZSB7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDEyLjUlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZTpmaXJzdC1jaGlsZCxcXG4uaG91cmx5X19zbGlkZTpudGgtY2hpbGQoNSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZS10aW1lIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZS10ZW1wLmNlbGNpdXM6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uaG91cmx5X19uYSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaG91cmx5X19uYS1pbm5lciB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm5leC1kYXkge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5uZXgtZGF5IHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIH1cXG59XFxuXFxuLm5leC1kYXlfX2ltZy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5uZXgtZGF5X19pbWctd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XFxuXFxuLm5leC1kYXlfX2ltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA3MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5uZXgtZGF5X19kZXNjIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubmV4LWRheV9fZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5uZXgtZGF5X19kZXNjIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XFxuXFxuLm5leC1kYXlfX2RhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5leC1kYXlfX2RhdGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgfVxcbn1cXG5cXG4ubmV4LWRheV9fd2VhdGhlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uZXgtZGF5X190ZW1wIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubmV4LWRheV9fdGVtcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uY2VsY2l1cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jZWxjaXVzOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMkRBXFxcIjtcXG4gIHRvcDogLTZweDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4ud2VsY29tZS1zY3JlZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndlbGNvbWUtc2NyZWVuOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiSnVzdCBzd2lwZSB0byByaWdodFxcXCI7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLndlbGNvbWUtc2NyZWVuOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJKdXN0IHN0YXJ0IHR5cGUgY2l0eSdzIG5hbWVcXFwiO1xcbiAgfVxcbn1cXG5cXG4ud2VsY29tZS1zY3JlZW4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cC5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucG9wdXBfX2lubmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBtaW4td2lkdGg6IDMxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vY3NzLWxvYWRlciEuLi9+L2F1dG9wcmVmaXhlci1sb2FkZXI/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4uL34vcmVzb2x2ZS11cmwtbG9hZGVyIS4uL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwIS4vbWFpbi9faW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3doZWVsLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL3doZWVsLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFwiLi9tMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20wMW4uc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMDJuLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20wM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTAzbi5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20wNG4uc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTA5ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMDluLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20xMGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTEwbi5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMTFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20xMW4uc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTEzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMTNuLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL201MGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTUwbi5zdmdcIjtcclxuaW1wb3J0IFwiLi93aGVlbC5zdmdcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbWcvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20wMW4uc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTAxbi5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20wMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTAybi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDJuLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20wM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMDNuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20wM24uc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20wNG4uc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTA0bi5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMDlkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20wOWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTA5bi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDluLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20xMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTEwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMTBuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20xMG4uc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTExZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMTFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20xMW4uc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTExbi5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMTNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20xM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTEzbi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMTNuLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL201MGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTUwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tNTBuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL201MG4uc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBpbXBvcnQge2xvZ30gZnJvbSAnLi8uLi9zdHVmZi9sb2dnZXInO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi8uLi9tb2RlbCc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vLi4vdmlldyc7XHJcblxyXG5cclxuLy8gY29uc3QgZGF0YURheXMgPSBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW1nOiBcImltZy9tMDNkLnN2Z1wiLFxyXG4vLyAgICAgICAgIGRhdGE6IFwiMTIgTm92XCIsXHJcbi8vICAgICAgICAgbWFpbjogXCJDbG91ZGx5XCIsXHJcbi8vICAgICAgICAgdGVtcDoge1xyXG4vLyAgICAgICAgICAgICBkYXk6IDI4LFxyXG4vLyAgICAgICAgICAgICBuaWdodDogNVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW1nOiBcImltZy9tMDRkLnN2Z1wiLFxyXG4vLyAgICAgICAgIGRhdGE6IFwiMTIgTm92XCIsXHJcbi8vICAgICAgICAgbWFpbjogXCJDbG91ZGx5XCIsXHJcbi8vICAgICAgICAgdGVtcDoge1xyXG4vLyAgICAgICAgICAgICBkYXk6IDE4LFxyXG4vLyAgICAgICAgICAgICBuaWdodDogNVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaW1nOiBcImltZy9tMDlkLnN2Z1wiLFxyXG4vLyAgICAgICAgIGRhdGE6IFwiMTIgTm92XCIsXHJcbi8vICAgICAgICAgbWFpbjogXCJDbG91ZGx5XCIsXHJcbi8vICAgICAgICAgdGVtcDoge1xyXG4vLyAgICAgICAgICAgICBkYXk6IDE4LFxyXG4vLyAgICAgICAgICAgICBuaWdodDogMTVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGltZzogXCJpbWcvbTEwZC5zdmdcIixcclxuLy8gICAgICAgICBkYXRhOiBcIjEyIE5vdlwiLFxyXG4vLyAgICAgICAgIG1haW46IFwiQ2xvdWRseVwiLFxyXG4vLyAgICAgICAgIHRlbXA6IHtcclxuLy8gICAgICAgICAgICAgZGF5OiAxOCxcclxuLy8gICAgICAgICAgICAgbmlnaHQ6IDVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGltZzogXCJpbWcvbTEzZC5zdmdcIixcclxuLy8gICAgICAgICBkYXRhOiBcIjEyIE5vdlwiLFxyXG4vLyAgICAgICAgIG1haW46IFwiQ2xvdWRseVwiLFxyXG4vLyAgICAgICAgIHRlbXA6IHtcclxuLy8gICAgICAgICAgICAgZGF5OiAxOCxcclxuLy8gICAgICAgICAgICAgbmlnaHQ6IDVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIF07XHJcbi8vXHJcbi8vIGNvbnN0IGRhdGFEZXRhaWxzID0gW1xyXG4vLyAgICAgW1wiUHJlc3N1cmVcIiwgOTIsIFwidW5pdFwiXSxcclxuLy8gICAgIFtcIkh1bWlkaXR5XCIsIDU1LCBcInVuaXRcIl0sXHJcbi8vICAgICBbXCJXaW5kXCIsIDYsIFwidW5pdFwiXSxcclxuLy8gICAgIFtcIkNsb3Vkc1wiLCBcIkNsb3VkaW5lc3NcIl0sXHJcbi8vICAgICBbXCJSYWluXCIsIFwibm9uZVwiXVxyXG4vLyBdO1xyXG4vLyBjb25zdCBkYXRhSG91cmx5ID0gW1xyXG4vLyAgICAge3RpbWU6IFwiMTE6MDBcIiwgdGVtcDogMjJ9LFxyXG4vLyAgICAge3RpbWU6IFwiMTI6MDBcIiwgdGVtcDogMjJ9LFxyXG4vLyAgICAgLy8ge3RpbWU6IFwiMTM6MDBcIiwgdGVtcDogMjJ9LFxyXG4vLyAgICAgLy8ge3RpbWU6IFwiMTQ6MDBcIiwgdGVtcDogMjJ9LFxyXG4vLyAgICAgLy8ge3RpbWU6IFwiMTU6MDBcIiwgdGVtcDogMjJ9LFxyXG4vLyAgICAgLy8ge3RpbWU6IFwiMTY6MDBcIiwgdGVtcDogMjJ9XHJcbi8vIF07XHJcbi8vIGNvbnN0IGRhdGFNYWluID0ge1xyXG4vLyAgICAgbmFtZTogXCJCb3N0b24sIFVTQVwiLFxyXG4vLyAgICAgd2VhdGhlcjogXCJTdW5ueVwiLFxyXG4vLyAgICAgdGVtcDogMTgsXHJcbi8vICAgICBkYXRhOiBcIjUgRGVjZW1iZXJcIixcclxuLy8gICAgIGltZzogXCIvaW1nL20wMWQuc3ZnXCJcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBuZXcgTW9kZWwoKTtcclxuICAgICAgICB0aGlzLl92aWV3ID0gbmV3IFZpZXcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9kZWwub24oTW9kZWwuRVZFTlRTLm9uRGF0YVJlYWR5LCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LnJlbmRlcihkYXRhLm1haW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LmRldGFpbHMucmVuZGVyKGRhdGEuZGV0YWlscywgdGhpcy5fdmlldy5jdXJyZW50Q2l0eS5nZXRGcmVlU3BhY2VGcm9EZXRhaWxzKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3Lm5leERheXMucmVuZGVyKGRhdGEuZGF5cyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuaGlkZVByZWxvYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmhpZGVXZWxjb21lU2NyZWVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY3VycmVudENpdHkuaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmNpdHlWaWV3ZXIuaGlkZVByZWxvYWRlck9uQ2l0eShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZ2VvaWQgPSAnXCIgKyBkYXRhLmlkICsgXCInXVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci51bmxvY2tWaWV3ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5tZW51LmVuYWJsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmhpZGVSZWZyZXNoaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci5oaWRlUHJlbG9hZGVyT25BZGRDaXR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY3VycmVudENpdHkuaG91cmx5LnJlZnJlc2goZGF0YS5ob3VybHkpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LnNlYXJjaC5lbmFibGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9kZWwub24oTW9kZWwuRVZFTlRTLm9uRmV0Y2hEYXRhRXJyb3IsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5zZWFyY2guZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci5oaWRlUHJlbG9hZGVyT25BZGRDaXR5KCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXcuc2hvd01lc3NhZ2UoXCJDb25uZWN0aW9uIGVycm9yIDxicj4gdHJ5IGFnYWluIG9yIGNob29zZSBhbm90aGVyIGNpdHlcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl9tb2RlbC5vbihNb2RlbC5FVkVOVFMub25SZXN0b3JlRGF0YUJlZ2luLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuc2hvd1ByZWxvYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3Lm1lbnUuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3Lm1lbnUucmVtb3ZlU3RhdGVJc0VtcHR5KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX21vZGVsLm9uKE1vZGVsLkVWRU5UUy5vbkVtcHR5U3RvcmFnZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LnNob3dXZWxjb21lU2NyZWVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbW9kZWwub24oTW9kZWwuRVZFTlRTLm9uQWRkQ2l0eSwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5jaXR5Vmlld2VyLmFkZENpdHkoe25hbWU6IGRhdGEubmFtZSwgZ2VvSWQ6IGRhdGEuaWQsIHR6T2Zmc2V0TWludXRlczogZGF0YS50ek9mZnNldE1pbnV0ZXN9KTtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5tZW51LnJlbW92ZVN0YXRlSXNFbXB0eSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLl9tb2RlbC5vbihNb2RlbC5FVkVOVFMub25TZXRBY3RpdmVDaXR5LCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl92aWV3LmNpdHlWaWV3ZXIuX3NldEFjdGl2ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1nZW9pZCA9ICdcIiArIGRhdGEuaWQgKyBcIiddXCIpKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9tb2RlbC5vbihNb2RlbC5FVkVOVFMub25BZGRMaXN0T2ZDaXRpZXMsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci5hZGRMaXN0T2ZDaXRpZXMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy5jdXJyZW50Q2l0eS5vbihWaWV3LkVWRU5UUy5DdXJyZW50Q2l0eS5vblJlbG9hZERhdGFSZXF1ZXN0LCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLnJlbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5zaG93UmVmcmVzaGluZygpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmNpdHlWaWV3ZXIubG9ja1ZpZXdlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5Lm9uKFZpZXcuRVZFTlRTLkN1cnJlbnRDaXR5Lm9uSGlkZGVuTW9yZURldGFpbHMsICgpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5Lm9uKFZpZXcuRVZFTlRTLkN1cnJlbnRDaXR5Lm9uU2hvd01vcmVEZXRhaWxzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZ2V0RGF0YUZvckhvdXJseVZpZXcoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXcuY3VycmVudENpdHkuaG91cmx5LnJlbmRlck5BKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LmhvdXJseS5yZW5kZXIodGhpcy5fZ2V0RGF0YUZvckhvdXJseVZpZXcoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcuY3VycmVudENpdHkub24oVmlldy5FVkVOVFMuQ3VycmVudENpdHkub25IaWRlTW9yZURldGFpbHMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5jdXJyZW50Q2l0eS5ob3VybHkuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcuc2VhcmNoLm9uKFZpZXcuRVZFTlRTLlNlYXJjaC5vbkdldENpdHksIChjaXR5RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5ID0ge307XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNpdHlEYXRhKVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNpdHkuaWQgPSBjaXR5RGF0YS5nZW9uYW1lSWQ7XHJcbiAgICAgICAgICAgICAgICBjaXR5LnR6T2Zmc2V0TWludXRlcyA9IGNpdHlEYXRhLnR6T2Zmc2V0TWludXRlcztcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuc2VhcmNoLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwuZ2V0RGF0YUZvck5ld0NpdHkoY2l0eSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci5sb2NrVmlld2VyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbW9kZWwuaXNDaXR5SW5EYihjaXR5LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlldy5jaXR5Vmlld2VyLnNob3dQcmVsb2FkZXJPbkFkZENpdHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci5fc2V0QWN0aXZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWdlb2lkID0gJ1wiICsgY2l0eS5pZCArIFwiJ11cIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlldy5jaXR5Vmlld2VyLnNob3dQcmVsb2FkZXJPbkNpdHkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWdlb2lkID0gJ1wiICsgY2l0eS5pZCArIFwiJ11cIikpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWdlb2lkID0gJ1wiICsgY2l0eS5pZCArIFwiJ11cIikuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy5jaXR5Vmlld2VyLm9uKFZpZXcuRVZFTlRTLkNpdHlWaWV3ZXIub25TZWxlY3RlZENpdHksIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbC5nZXREYXRhRm9yTmV3Q2l0eSh7aWQ6IGRhdGEuZ2VvSWQsIHR6T2Zmc2V0TWludXRlczogZGF0YS50ek9mZnNldE1pbnV0ZXN9KTtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5jaXR5Vmlld2VyLnNob3dQcmVsb2FkZXJPbkNpdHkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWdlb2lkID0gJ1wiICsgZGF0YS5nZW9JZCArIFwiJ11cIikpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmNpdHlWaWV3ZXIubG9ja1ZpZXdlcigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LmNpdHlWaWV3ZXIub24oVmlldy5FVkVOVFMuQ2l0eVZpZXdlci5vbkRlbGV0ZUNpdHksIChnZW9JZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbC5yZW1vdmVDaXR5RnJvbURiKGdlb0lkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy5jaXR5Vmlld2VyLm9uKFZpZXcuRVZFTlRTLkNpdHlWaWV3ZXIub25EZWxldEFsbENpdGllcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcItC+0YfQuNGB0YLQuNGC0Ywg0LLRgdGOINGC0LXQvNC/0LXRgNCw0YLRg9GA0YNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuY3VycmVudENpdHkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3Lm5leERheXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LnNob3dXZWxjb21lU2NyZWVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcubWVudS5zZXRTdGF0ZUlzRW1wdHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX21vZGVsLmNoZWNrTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldERhdGFGb3JIb3VybHlWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlbC5fZGIuYWN0aXZlQ2l0eS5ob3VybHk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL2NvbnRyb2xsZXIvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBkYiBmcm9tICBcIi4vZGJcIjtcclxuaW1wb3J0IEZldGNoRGF0YSBmcm9tICBcIi4vZmV0Y2hEYXRhXCI7XHJcbmltcG9ydCBldmVudE1peGluIGZyb20gXCIuLy4uL2NvbW1vbi9ldmVudE1peGluXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGIgPSBkYjtcclxuICAgICAgICB0aGlzLl9mZXRjaGRhdGEgPSBuZXcgRmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZldGNoZGF0YS5vbihGZXRjaERhdGEuRVZFTlRTLm9uRGF0YUZldGNoZWQsIHRoaXMuZGF0YUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fZmV0Y2hkYXRhLm9uKEZldGNoRGF0YS5FVkVOVFMub25EYXRhRmV0Y2hFcnJvciwgdGhpcy5oYWRubGVFcnJvci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy50ek9mZnNldE1pbnV0ZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfZ2V0VXJscyhjaXR5LCBhcGkpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAvLyBhcGkudXJsICsgYXBpLndlYXRoZXIgKyBcIj9pZD1cIiArIGNpdHkuaWQgKyBcIiZ1bml0cz1tZXRyaWNcIiArIFwiJkFQUElEPVwiICsgYXBpLmFwcGlkLFxyXG4gICAgICAgICAgICBhcGkuY3Jvc3MgKyBhcGkudXJsICsgYXBpLndlYXRoZXIgKyBcIj9pZD1cIiArIGNpdHkuaWQgKyBcIiZ1bml0cz1tZXRyaWNcIiArIFwiJkFQUElEPVwiICsgYXBpLmFwcGlkLFxyXG4gICAgICAgICAgICAgLy8gYXBpLnVybCArIGFwaS5mb3JlY2FzdCArIFwiP2lkPVwiICsgY2l0eS5pZCArIFwiJnVuaXRzPW1ldHJpY1wiICsgXCImQVBQSUQ9XCIgKyBhcGkuYXBwaWRcclxuICAgICAgICAgICAgYXBpLmNyb3NzICsgYXBpLnVybCArIGFwaS5mb3JlY2FzdCArIFwiP2lkPVwiICsgY2l0eS5pZCArIFwiJnVuaXRzPW1ldHJpY1wiICsgXCImQVBQSUQ9XCIgKyBhcGkuYXBwaWRcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YShjaXR5SWQpIHtcclxuICAgICAgICB0aGlzLl9mZXRjaGRhdGEuZ2V0RGF0YSh0aGlzLl9nZXRVcmxzKGNpdHlJZCwgdGhpcy5fZGIuYXBpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YUZvck5ld0NpdHkoY2l0eSkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YShjaXR5KTtcclxuICAgICAgICB0aGlzLnR6T2Zmc2V0TWludXRlcyA9IGNpdHkudHpPZmZzZXRNaW51dGVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2l0eVwiLCBjaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaGVkIGRhdGFcIiwgZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3dyaXRlRGF0YUZvck1haW4oZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fd3JpdGVEYXRhRm9yRGV0YWlscyhkYXRhKTtcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm1EYXRhKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jaXR5SXNFeGlzdChkYXRhWzBdLmlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDaXR5VG9EYihcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhWzBdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGFbMF0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogdGhpcy5fc2V0V2VpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgdHpPZmZzZXRNaW51dGVzOiB0aGlzLnR6T2Zmc2V0TWludXRlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRBY3RpdmVDaXR5KGRhdGFbMF0uaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoTW9kZWwuRVZFTlRTLm9uQWRkQ2l0eSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YVswXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGFbMF0uaWQsXHJcbiAgICAgICAgICAgICAgICB0ek9mZnNldE1pbnV0ZXM6IHRoaXMudHpPZmZzZXRNaW51dGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoTW9kZWwuRVZFTlRTLm9uRGF0YVJlYWR5LCB0aGlzLl9kYi5hY3RpdmVDaXR5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRBY3RpdmVDaXR5KGRhdGFbMF0uaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoTW9kZWwuRVZFTlRTLm9uU2V0QWN0aXZlQ2l0eSwge2lkOiBkYXRhWzBdLmlkfSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcihNb2RlbC5FVkVOVFMub25EYXRhUmVhZHksIHRoaXMuX2RiLmFjdGl2ZUNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGJcIiwgdGhpcy5fZGIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2l0eUluRGIoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2l0eUlzRXhpc3QoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNpdHlGcm9tRGIoaWQpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5fZGIuY2l0aWVzW2lkXTtcclxuICAgICAgICB0aGlzLl9zYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NpdHlJc0V4aXN0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGIuY2l0aWVzW2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QWN0aXZlQ2l0eShjaXR5SWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLl9kYi5jaXRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RiLmNpdGllcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RiLmNpdGllc1tpZF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RiLmNpdGllc1tjaXR5SWRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZENpdHlUb0RiKGRhdGEpIHtcclxuICAgICAgICAvLyB0aGlzLl9kYi5jaXRpZXNbZGF0YS5pZF0gPSB7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAvLyAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgLy8gICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgd2VpZ2h0OiBkYXRhLndlaWdodCxcclxuICAgICAgICAvLyAgICAgdHpPZmZzZXRNaW51dGVzOiB0aGlzLnR6T2Zmc2V0TWludXRlc1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLl9kYi5jaXRpZXNbZGF0YS5pZF0gPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRXZWlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgY2l0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2RiLmNpdGllcyk7XHJcbiAgICAgICAgY29uc3QgY2l0aWVzID0gdGhpcy5fZGIuY2l0aWVzO1xyXG5cclxuICAgICAgICBpZiAoY2l0aWVzS2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3ZWlnaHRzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2l0aWVzS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB3ZWlnaHRzLnB1c2goY2l0aWVzW2NpdGllc0tleXNbaV1dLndlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5taW4oLi4ud2VpZ2h0cykgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIF93cml0ZURhdGFGb3JNYWluKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVDaXR5ID0gdGhpcy5fZGIuYWN0aXZlQ2l0eTtcclxuICAgICAgICBjb25zdCBtYWluID0gZGF0YVswXTtcclxuXHJcbiAgICAgICAgYWN0aXZlQ2l0eS5pZCA9IG1haW4uaWQ7XHJcbiAgICAgICAgYWN0aXZlQ2l0eS50ek9mZnNldE1pbnV0ZXMgPSB0aGlzLnR6T2Zmc2V0TWludXRlcztcclxuICAgICAgICBhY3RpdmVDaXR5Lm1haW4ubmFtZSA9IG1haW4ubmFtZTtcclxuICAgICAgICBhY3RpdmVDaXR5Lm1haW4ud2VhdGhlciA9IG1haW4ud2VhdGhlclswXS5tYWluO1xyXG4gICAgICAgIGFjdGl2ZUNpdHkubWFpbi50ZW1wID0gTWF0aC5yb3VuZChtYWluLm1haW4udGVtcCk7XHJcbiAgICAgICAgYWN0aXZlQ2l0eS5tYWluLmRhdGEgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICB3ZWVrZGF5OiAnc2hvcnQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGFjdGl2ZUNpdHkubWFpbi5pbWcgPSBgL2ltZy8ke3RoaXMuX2RiLnRyYW5zZm9ybUljb25zKG1haW4ud2VhdGhlclswXS5pY29uKX0uc3ZnYDtcclxuICAgICAgICBhY3RpdmVDaXR5Lm1haW4uaW1nID0gYGltZy8ke3RoaXMuX2RiLnRyYW5zZm9ybUljb25zKG1haW4ud2VhdGhlclswXS5pY29uKX0uc3ZnYDtcclxuICAgIH1cclxuXHJcbiAgICBfd3JpdGVEYXRhRm9yRGV0YWlscyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkYXRhWzBdO1xyXG4gICAgICAgIGNvbnN0IGdldERldGFpbHNVbml0cyA9IHRoaXMuX2RiLmdldERldGFpbHNVbml0cy5iaW5kKHRoaXMuX2RiKTtcclxuXHJcbiAgICAgICAgZGV0YWlscy5wdXNoKFtnZXREZXRhaWxzVW5pdHMoXCJwcmVzc3VyZVwiKS5zdHIsIE1hdGgucm91bmQobWFpbi5tYWluLnByZXNzdXJlKSwgZ2V0RGV0YWlsc1VuaXRzKFwicHJlc3N1cmVcIikudW5pdF0pO1xyXG4gICAgICAgIGRldGFpbHMucHVzaChbZ2V0RGV0YWlsc1VuaXRzKFwiaHVtaWRpdHlcIikuc3RyLCBNYXRoLnJvdW5kKG1haW4ubWFpbi5odW1pZGl0eSksIGdldERldGFpbHNVbml0cyhcImh1bWlkaXR5XCIpLnVuaXRdKTtcclxuICAgICAgICBkZXRhaWxzLnB1c2goW2dldERldGFpbHNVbml0cyhcIndpbmRcIikuc3RyLCBNYXRoLnJvdW5kKG1haW4ud2luZC5zcGVlZCksIGdldERldGFpbHNVbml0cyhcIndpbmRcIikudW5pdF0pO1xyXG4gICAgICAgIGRldGFpbHMucHVzaChbXCJTdW5yaXNlXCIsIG5ldyBEYXRlKCsobWFpbi5zeXMuc3VucmlzZSArIFwiMDAwXCIpKS50b0xvY2FsZVN0cmluZyhcInJ1XCIsIHtcclxuICAgICAgICAgICAgdGltZXpvbmU6ICdVVEMnLFxyXG4gICAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIlxyXG4gICAgICAgIH0pXSk7XHJcbiAgICAgICAgZGV0YWlscy5wdXNoKFtcIlN1bnNldFwiLCBuZXcgRGF0ZSgrKG1haW4uc3lzLnN1bnNldCArIFwiMDAwXCIpKS50b0xvY2FsZVN0cmluZyhcInJ1XCIsIHtcclxuICAgICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJcclxuICAgICAgICB9KV0pO1xyXG5cclxuICAgICAgICB0aGlzLl9kYi5hY3RpdmVDaXR5LmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgfVxyXG5cclxuICAgIF90cmFuc2Zvcm1EYXRhKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkYXRhRGF5cyA9IGRhdGFbMV0ubGlzdDtcclxuICAgICAgICBjb25zdCBkYXlzID0ge307XHJcblxyXG4gICAgICAgIGZvcihsZXQgZGF5IG9mIGRhdGFEYXlzKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZGF5LmR0ICAqIDEwMDApO1xyXG4gICAgICAgICAgICBsZXQga2V5VGltZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRheXNba2V5VGltZV0pIHtcclxuICAgICAgICAgICAgICAgIGRheXNba2V5VGltZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXlzW2tleVRpbWVdLnB1c2goZGF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCB0b2RheUhvdXJseSA9IGRheXNbYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHt0b2RheS5nZXRNb250aCgpICsgMX0tJHt0b2RheS5nZXREYXRlKCl9YF07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9kYXlIb3VybHkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF5cylcclxuICAgICAgICB0aGlzLl93cml0ZURhdGFGb3JUb2RheUhvdXJseSh0b2RheUhvdXJseSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBkYXlzS2V5cyA9ICh0b2RheUhvdXJseSkgPyBPYmplY3Qua2V5cyhkYXlzKS5zbGljZSgxKSA6IE9iamVjdC5rZXlzKGRheXMpO1xyXG4gICAgICAgIGNvbnN0IG5leHREYXlzID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgZGF5IG9mIGRheXNLZXlzKSB7XHJcbiAgICAgICAgICAgIG5leHREYXlzLnB1c2goZGF5c1tkYXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5leHREYXlzKTtcclxuICAgICAgICB0aGlzLl93cml0ZURhdGFGb3JOZXh0RGF5cyhuZXh0RGF5cyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFEYXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfd3JpdGVEYXRhRm9yVG9kYXlIb3VybHkoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGhvdXJseSA9IFtdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiX3dyaXRlRGF0YUZvclRvZGF5SG91cmx5XCIsIGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBob3VyIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaG91cmx5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKyhob3VyLmR0ICsgXCIwMDBcIikpLnRvTG9jYWxlU3RyaW5nKFwiUlVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lem9uZTogJ1VUQydcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgdGVtcDogcGFyc2VJbnQoaG91ci5tYWluLnRlbXApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kYi5hY3RpdmVDaXR5LmhvdXJseSA9IGhvdXJseTtcclxuICAgIH1cclxuXHJcbiAgICBfd3JpdGVEYXRhRm9yTmV4dERheXMoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBkYXkgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBkYXlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaG91cmx5OiB7fSxcclxuICAgICAgICAgICAgICAgIGltZzogYGltZy8ke3RoaXMuX2RiLnRyYW5zZm9ybUljb25zKCB0aGlzLl9nZXRDdXJlbnREYXRhRm9yTmV4dERheShcIndlYXRoZXIuMC5pY29uXCIsIGRheSkuc2xpY2UoMCwgLTEpICsgXCJkXCIgKX0uc3ZnYCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBEYXRlKCsoZGF5WzBdLmR0ICsgXCIwMDBcIikpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IFwic2hvcnRcIlxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBtYWluOiB0aGlzLl9nZXRDdXJlbnREYXRhRm9yTmV4dERheShcIndlYXRoZXIuMC5tYWluXCIsIGRheSksXHJcbiAgICAgICAgICAgICAgICB0ZW1wOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiBNYXRoLnJvdW5kKHRoaXMuX2dldEN1cmVudERhdGFGb3JOZXh0RGF5KFwibWFpbi50ZW1wXCIsIGRheSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RiLmFjdGl2ZUNpdHkuZGF5cyA9IGRheXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEN1cmVudERhdGFGb3JOZXh0RGF5KHByb3AsIGRheSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGdvdE9iaihwcm9wLCBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHRyYWNlUHJvcCA9IHByb3Auc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gb2JqW3RyYWNlUHJvcFswXV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gc3VjaCBwcm9wZXJ0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRyYWNlUHJvcC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ290T2JqKHRyYWNlUHJvcC5zbGljZSgxKS5qb2luKFwiLlwiKSwgcmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXlbNF0gPyBnb3RPYmoocHJvcCwgZGF5WzRdKSA6IGdvdE9iaihwcm9wLCBkYXlbZGF5Lmxlbmd0aCAtIDFdKTtcclxuICAgIH1cclxuXHJcbiAgICBoYWRubGVFcnJvcihlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkZldGNoRGF0YUVycm9yXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uRmV0Y2hEYXRhRXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2ZpcnN0TGV0dGVyVG9VcHBlckNhc2Uoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKHtpZDogdGhpcy5fZGIuYWN0aXZlQ2l0eS5pZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xyXG5cclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGIuY2l0aWVzID0gY2l0aWVzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVzdG9yZURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKE1vZGVsLkVWRU5UUy5vblJlc3RvcmVEYXRhQmVnaW4pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9kYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKE1vZGVsLkVWRU5UUy5vbkVtcHR5U3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBY3RpdmVDaXR5KCkge1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuX2RiLmNpdGllcztcclxuICAgICAgICBsZXQgYWN0aXZlID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNpdHkgaW4gY2l0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChjaXRpZXMuaGFzT3duUHJvcGVydHkoY2l0eSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaXRpZXNbY2l0eV0uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gY2l0aWVzW2NpdHldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXN0b3JlRGF0YSgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fZGIuY2l0aWVzO1xyXG4gICAgICAgIGNvbnN0IGRhdGFBc0FycmF5ID0gdGhpcy5fdHJhbnNmb3JtRGF0YUZyb21PYmpUb0FycmF5KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRCeVdlaWdodFRvVG9wID0gZGF0YUFzQXJyYXkuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhLndlaWdodCA+IGIud2VpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKE1vZGVsLkVWRU5UUy5vbkFkZExpc3RPZkNpdGllcywgc29ydEJ5V2VpZ2h0VG9Ub3ApO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSh0aGlzLl9nZXRBY3RpdmVDaXR5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc0VtcHR5T2JqKG9iaikge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFyTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2l0aWVzXCIpXHJcbiAgICB9XHJcblxyXG4gICAgX3RyYW5zZm9ybURhdGFGcm9tT2JqVG9BcnJheShvYmopIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG9ialtrZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIF9zYXZlRGF0YVRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0VtcHR5T2JqKHRoaXMuX2RiLmNpdGllcykpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJMb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX2RiLmNpdGllcyk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRpZXMnLCBjaXRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgRVZFTlRTKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwib25EYXRhUmVhZHlcIjogXCJvbkRhdGFSZWFkeVwiLFxyXG4gICAgICAgICAgICBcIm9uRGF0YVJlbG9hZFwiOiBcIm9uRGF0YVJlbG9hZFwiLFxyXG4gICAgICAgICAgICBcIm9uQWRkQ2l0eVwiOiBcIm9uQWRkQ2l0eVwiLFxyXG4gICAgICAgICAgICBcIm9uU2V0QWN0aXZlQ2l0eVwiOiBcIm9uU2V0QWN0aXZlQ2l0eVwiLFxyXG4gICAgICAgICAgICBcIm9uQWRkTGlzdE9mQ2l0aWVzXCI6IFwib25BZGRMaXN0T2ZDaXRpZXNcIixcclxuICAgICAgICAgICAgXCJvblJlc3RvcmVEYXRhQmVnaW5cIjogXCJvblJlc3RvcmVEYXRhQmVnaW5cIixcclxuICAgICAgICAgICAgXCJvbkVtcHR5U3RvcmFnZVwiOiBcIm9uRW1wdHlTdG9yYWdlXCIsXHJcbiAgICAgICAgICAgIFwib25GZXRjaERhdGFFcnJvclwiOiBcIm9uRmV0Y2hEYXRhRXJyb3JcIixcclxuICAgICAgICAgICAgRmV0Y2hEYXRhOiBGZXRjaERhdGEuRVZFTlRTXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKHZhciBrZXkgaW4gZXZlbnRNaXhpbikge1xyXG4gICAgTW9kZWwucHJvdG90eXBlW2tleV0gPSBldmVudE1peGluW2tleV07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL21vZGVsL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBkYiA9IHtcclxuICAgIGFwaToge1xyXG4gICAgICAgIHVybDogXCJodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9cIixcclxuICAgICAgICB3ZWF0aGVyOiBcIndlYXRoZXJcIixcclxuICAgICAgICBmb3JlY2FzdDogXCJmb3JlY2FzdFwiLFxyXG4gICAgICAgIGFwcGlkOiBcIjAxZjg1MTdhNzMzNzA1N2YxZWQxZjBkNzJmMTk1YzczXCIsXHJcbiAgICAgICAgY3Jvc3M6IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXCJcclxuICAgIH0sXHJcbiAgICBhY3RpdmVDaXR5OiB7XHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgbWFpbjoge30sXHJcbiAgICAgICAgZGV0YWlsczogW10sXHJcbiAgICAgICAgaG91cmx5OiBbXSxcclxuICAgICAgICBkYXlzOiBbXVxyXG4gICAgfSxcclxuICAgIHVuaXRzOiB7XHJcbiAgICAgICAgcHJlc3N1cmU6IHtcclxuICAgICAgICAgICAgc3RyOiBcIlByZXNzdXJlXCIsXHJcbiAgICAgICAgICAgIHVuaXQ6IFwiIGhQYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodW1pZGl0eToge1xyXG4gICAgICAgICAgICBzdHI6IFwiSHVtaWRpdHlcIixcclxuICAgICAgICAgICAgdW5pdDogXCIgJVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aW5kOiB7XHJcbiAgICAgICAgICAgIHN0cjogXCJXaW5kXCIsXHJcbiAgICAgICAgICAgIHVuaXQ6IFwiIG0vc1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldERldGFpbHNVbml0cyh1bml0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pdHNbdW5pdF07XHJcbiAgICB9LFxyXG4gICAgY2l0aWVzOiB7fSxcclxuICAgIGljb25zTWFwOiB7XHJcbiAgICAgICAgXCIwMWRcIjogXCJtMDFkXCIsXHJcbiAgICAgICAgXCIwMW5cIjogXCJtMDFuXCIsXHJcbiAgICAgICAgXCIwMmRcIjogXCJtMDJkXCIsXHJcbiAgICAgICAgXCIwMm5cIjogXCJtMDJuXCIsXHJcbiAgICAgICAgXCIwM2RcIjogXCJtMDNkXCIsXHJcbiAgICAgICAgXCIwM25cIjogXCJtMDNuXCIsXHJcbiAgICAgICAgXCIwNGRcIjogXCJtMDRkXCIsXHJcbiAgICAgICAgXCIwNG5cIjogXCJtMDRuXCIsXHJcbiAgICAgICAgXCIwOWRcIjogXCJtMDlkXCIsXHJcbiAgICAgICAgXCIwOW5cIjogXCJtMDluXCIsXHJcbiAgICAgICAgXCIxMGRcIjogXCJtMTBkXCIsXHJcbiAgICAgICAgXCIxMG5cIjogXCJtMTBuXCIsXHJcbiAgICAgICAgXCIxMWRcIjogXCJtMTFkXCIsXHJcbiAgICAgICAgXCIxMW5cIjogXCJtMTFuXCIsXHJcbiAgICAgICAgXCIxM2RcIjogXCJtMTNkXCIsXHJcbiAgICAgICAgXCIxM25cIjogXCJtMTNuXCIsXHJcbiAgICAgICAgXCI1MGRcIjogXCJtNTBkXCIsXHJcbiAgICAgICAgXCI1MG5cIjogXCJtNTBuXCJcclxuICAgIH0sXHJcbiAgICB0cmFuc2Zvcm1JY29ucyhpY29uQ29kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmljb25zTWFwW2ljb25Db2RlXTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvbW9kZWwvZGIvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBldmVudE1peGluIGZyb20gXCIuLy4uLy4uL2NvbW1vbi9ldmVudE1peGluXCI7XHJcbmltcG9ydCB7RGF0YVJlYWRFcnJvciwgRmV0Y2hEYXRhRXJyb3J9IGZyb20gXCIuLy4uLy4uL2NvbW1vbi9lcnJvcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoRGF0YSB7XHJcblxyXG4gICAgZ2V0RGF0YSh1cmxzKSB7XHJcbiAgICAgICAgbGV0IGNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXIoXCJvblN0YXJ0RmV0Y2hEYXRhXCIpO1xyXG5cclxuICAgICAgICB1cmxzLmZvckVhY2goZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgICAgICAgIGNoYWluID0gY2hhaW5cclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGZldGNoKHVybCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLmNvZGUgPSByZXNwb25zZS5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiU3ludGF4RXJyb3JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRGF0YVJlYWRFcnJvcihcItCh0LjQvdGC0LDQutGB0LjRh9C10YHQutCw0Y8g0L7RiNC40LHQutCwINCyINC00LDQvdC90YvRhSDQv9C+0LvRg9GH0LXQvdC90YvRhSDRgSDRgdC10YDQstC10YDQsFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEZldGNoRGF0YUVycm9yKGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2hhaW4udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudHJpZ2dlcihzZWxmLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkRhdGFGZXRjaGVkLCByZXN1bHRzKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgc2VsZi50cmlnZ2VyKHNlbGYuY29uc3RydWN0b3IuRVZFTlRTLm9uRGF0YUZldGNoRXJyb3IsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBFVkVOVFMgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwib25EYXRhRmV0Y2hlZFwiOiBcIm9uRGF0YUZldGNoZWRcIixcclxuICAgICAgICAgICAgXCJvbkRhdGFGZXRjaEVycm9yXCI6IFwib25EYXRhRmV0Y2hFcnJvclwiLFxyXG4gICAgICAgICAgICBcIm9uU3RhcnRGZXRjaERhdGFcIjogXCJvblN0YXJ0RmV0Y2hEYXRhXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvciAodmFyIGtleSBpbiBldmVudE1peGluKSB7XHJcbiAgICBGZXRjaERhdGEucHJvdG90eXBlW2tleV0gPSBldmVudE1peGluW2tleV07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL21vZGVsL2ZldGNoRGF0YS9pbmRleC5qcyIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdGVmYW5wZW5uZXIvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgNC4wLjVcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwuRVM2UHJvbWlzZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxudmFyIF9pc0FycmF5ID0gdW5kZWZpbmVkO1xuaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gIF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xufSBlbHNlIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xufVxuXG52YXIgaXNBcnJheSA9IF9pc0FycmF5O1xuXG52YXIgbGVuID0gMDtcbnZhciB2ZXJ0eE5leHQgPSB1bmRlZmluZWQ7XG52YXIgY3VzdG9tU2NoZWR1bGVyRm4gPSB1bmRlZmluZWQ7XG5cbnZhciBhc2FwID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gIHF1ZXVlW2xlbl0gPSBjYWxsYmFjaztcbiAgcXVldWVbbGVuICsgMV0gPSBhcmc7XG4gIGxlbiArPSAyO1xuICBpZiAobGVuID09PSAyKSB7XG4gICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgIGlmIChjdXN0b21TY2hlZHVsZXJGbikge1xuICAgICAgY3VzdG9tU2NoZWR1bGVyRm4oZmx1c2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZUZsdXNoKCk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICBjdXN0b21TY2hlZHVsZXJGbiA9IHNjaGVkdWxlRm47XG59XG5cbmZ1bmN0aW9uIHNldEFzYXAoYXNhcEZuKSB7XG4gIGFzYXAgPSBhc2FwRm47XG59XG5cbnZhciBicm93c2VyV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG52YXIgYnJvd3Nlckdsb2JhbCA9IGJyb3dzZXJXaW5kb3cgfHwge307XG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHt9KS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbi8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG52YXIgaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBub2RlXG5mdW5jdGlvbiB1c2VOZXh0VGljaygpIHtcbiAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbn1cblxuLy8gdmVydHhcbmZ1bmN0aW9uIHVzZVZlcnR4VGltZXIoKSB7XG4gIGlmICh0eXBlb2YgdmVydHhOZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2ZXJ0eE5leHQoZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG4gIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGF0YSA9IGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyO1xuICB9O1xufVxuXG4vLyB3ZWIgd29ya2VyXG5mdW5jdGlvbiB1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmbHVzaDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlU2V0VGltZW91dCgpIHtcbiAgLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gZXM2LXByb21pc2Ugd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4gIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuICB2YXIgZ2xvYmFsU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFNldFRpbWVvdXQoZmx1c2gsIDEpO1xuICB9O1xufVxuXG52YXIgcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgIHZhciBhcmcgPSBxdWV1ZVtpICsgMV07XG5cbiAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgcXVldWVbaSArIDFdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdFZlcnR4KCkge1xuICB0cnkge1xuICAgIHZhciByID0gcmVxdWlyZTtcbiAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgIHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgcmV0dXJuIHVzZVZlcnR4VGltZXIoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB1c2VTZXRUaW1lb3V0KCk7XG4gIH1cbn1cblxudmFyIHNjaGVkdWxlRmx1c2ggPSB1bmRlZmluZWQ7XG4vLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuaWYgKGlzTm9kZSkge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTmV4dFRpY2soKTtcbn0gZWxzZSBpZiAoQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbn0gZWxzZSBpZiAoaXNXb3JrZXIpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU1lc3NhZ2VDaGFubmVsKCk7XG59IGVsc2UgaWYgKGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBzY2hlZHVsZUZsdXNoID0gYXR0ZW1wdFZlcnR4KCk7XG59IGVsc2Uge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlU2V0VGltZW91dCgpO1xufVxuXG5mdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuXG4gIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGlmIChjaGlsZFtQUk9NSVNFX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFrZVByb21pc2UoY2hpbGQpO1xuICB9XG5cbiAgdmFyIF9zdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgaWYgKF9zdGF0ZSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBfYXJndW1lbnRzW19zdGF0ZSAtIDFdO1xuICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjayhfc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcGFyZW50Ll9yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG4vKipcbiAgYFByb21pc2UucmVzb2x2ZWAgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSByZXNvbHZlZCB3aXRoIHRoZVxuICBwYXNzZWQgYHZhbHVlYC4gSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHJlc29sdmUoMSk7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gdmFsdWUgPT09IDFcbiAgfSk7XG4gIGBgYFxuXG4gIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKDEpO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gdmFsdWUgPT09IDFcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgcmVzb2x2ZVxuICBAc3RhdGljXG4gIEBwYXJhbSB7QW55fSB2YWx1ZSB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aFxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIGZ1bGZpbGxlZCB3aXRoIHRoZSBnaXZlblxuICBgdmFsdWVgXG4qL1xuZnVuY3Rpb24gcmVzb2x2ZShvYmplY3QpIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gIF9yZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxNik7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgUEVORElORyA9IHZvaWQgMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcblxudmFyIEdFVF9USEVOX0VSUk9SID0gbmV3IEVycm9yT2JqZWN0KCk7XG5cbmZ1bmN0aW9uIHNlbGZGdWxmaWxsbWVudCgpIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xufVxuXG5mdW5jdGlvbiBjYW5ub3RSZXR1cm5Pd24oKSB7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG59XG5cbmZ1bmN0aW9uIGdldFRoZW4ocHJvbWlzZSkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICByZXR1cm4gR0VUX1RIRU5fRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gIHRyeSB7XG4gICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gIGFzYXAoZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgdmFyIGVycm9yID0gdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgIH1cbiAgfSwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IEZVTEZJTExFRCkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgIF9yZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICByZXR1cm4gX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbiQkKSB7XG4gIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yICYmIHRoZW4kJCA9PT0gdGhlbiAmJiBtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yLnJlc29sdmUgPT09IHJlc29sdmUpIHtcbiAgICBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhlbiQkID09PSBHRVRfVEhFTl9FUlJPUikge1xuICAgICAgX3JlamVjdChwcm9taXNlLCBHRVRfVEhFTl9FUlJPUi5lcnJvcik7XG4gICAgfSBlbHNlIGlmICh0aGVuJCQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhlbiQkKSkge1xuICAgICAgaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgIF9yZWplY3QocHJvbWlzZSwgc2VsZkZ1bGZpbGxtZW50KCkpO1xuICB9IGVsc2UgaWYgKG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSwgZ2V0VGhlbih2YWx1ZSkpO1xuICB9IGVsc2Uge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgfVxuXG4gIHB1Ymxpc2gocHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuXG4gIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICBhc2FwKHB1Ymxpc2gsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9taXNlLl9zdGF0ZSA9IFJFSkVDVEVEO1xuICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgYXNhcChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gIHZhciBfc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICB2YXIgbGVuZ3RoID0gX3N1YnNjcmliZXJzLmxlbmd0aDtcblxuICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gIF9zdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgX3N1YnNjcmliZXJzW2xlbmd0aCArIFJFSkVDVEVEXSA9IG9uUmVqZWN0aW9uO1xuXG4gIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgIGFzYXAocHVibGlzaCwgcGFyZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxiYWNrID0gdW5kZWZpbmVkLFxuICAgICAgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gRXJyb3JPYmplY3QoKSB7XG4gIHRoaXMuZXJyb3IgPSBudWxsO1xufVxuXG52YXIgVFJZX0NBVENIX0VSUk9SID0gbmV3IEVycm9yT2JqZWN0KCk7XG5cbmZ1bmN0aW9uIHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgcmV0dXJuIFRSWV9DQVRDSF9FUlJPUjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gIHZhciBoYXNDYWxsYmFjayA9IGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgdmFsdWUgPSB1bmRlZmluZWQsXG4gICAgICBlcnJvciA9IHVuZGVmaW5lZCxcbiAgICAgIHN1Y2NlZWRlZCA9IHVuZGVmaW5lZCxcbiAgICAgIGZhaWxlZCA9IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICB2YWx1ZSA9IHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgaWYgKHZhbHVlID09PSBUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgdmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCBjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gZGV0YWlsO1xuICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gIH1cblxuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAvLyBub29wXG4gIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChmYWlsZWQpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gIHRyeSB7XG4gICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICAgIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgX3JlamVjdChwcm9taXNlLCBlKTtcbiAgfVxufVxuXG52YXIgaWQgPSAwO1xuZnVuY3Rpb24gbmV4dElkKCkge1xuICByZXR1cm4gaWQrKztcbn1cblxuZnVuY3Rpb24gbWFrZVByb21pc2UocHJvbWlzZSkge1xuICBwcm9taXNlW1BST01JU0VfSURdID0gaWQrKztcbiAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbn1cblxuZnVuY3Rpb24gRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQpIHtcbiAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaWYgKCF0aGlzLnByb21pc2VbUFJPTUlTRV9JRF0pIHtcbiAgICBtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBfcmVqZWN0KHRoaXMucHJvbWlzZSwgdmFsaWRhdGlvbkVycm9yKCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gIHZhciBfaW5wdXQgPSB0aGlzLl9pbnB1dDtcblxuICBmb3IgKHZhciBpID0gMDsgdGhpcy5fc3RhdGUgPT09IFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5fZWFjaEVudHJ5KF9pbnB1dFtpXSwgaSk7XG4gIH1cbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbiAoZW50cnksIGkpIHtcbiAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICB2YXIgcmVzb2x2ZSQkID0gYy5yZXNvbHZlO1xuXG4gIGlmIChyZXNvbHZlJCQgPT09IHJlc29sdmUpIHtcbiAgICB2YXIgX3RoZW4gPSBnZXRUaGVuKGVudHJ5KTtcblxuICAgIGlmIChfdGhlbiA9PT0gdGhlbiAmJiBlbnRyeS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIF90aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gUHJvbWlzZSkge1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhub29wKTtcbiAgICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIF90aGVuKTtcbiAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uIChyZXNvbHZlJCQpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUkJChlbnRyeSk7XG4gICAgICB9KSwgaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlJCQoZW50cnkpLCBpKTtcbiAgfVxufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uIChzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICBpZiAoc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgfVxufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uIChwcm9taXNlLCBpKSB7XG4gIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICBzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgfSk7XG59O1xuXG4vKipcbiAgYFByb21pc2UuYWxsYCBhY2NlcHRzIGFuIGFycmF5IG9mIHByb21pc2VzLCBhbmQgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoXG4gIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGFycmF5IG9mIGZ1bGZpbGxtZW50IHZhbHVlcyBmb3IgdGhlIHBhc3NlZCBwcm9taXNlcywgb3JcbiAgcmVqZWN0ZWQgd2l0aCB0aGUgcmVhc29uIG9mIHRoZSBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBiZSByZWplY3RlZC4gSXQgY2FzdHMgYWxsXG4gIGVsZW1lbnRzIG9mIHRoZSBwYXNzZWQgaXRlcmFibGUgdG8gcHJvbWlzZXMgYXMgaXQgcnVucyB0aGlzIGFsZ29yaXRobS5cblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgbGV0IHByb21pc2UyID0gcmVzb2x2ZSgyKTtcbiAgbGV0IHByb21pc2UzID0gcmVzb2x2ZSgzKTtcbiAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgIC8vIFRoZSBhcnJheSBoZXJlIHdvdWxkIGJlIFsgMSwgMiwgMyBdO1xuICB9KTtcbiAgYGBgXG5cbiAgSWYgYW55IG9mIHRoZSBgcHJvbWlzZXNgIGdpdmVuIHRvIGBhbGxgIGFyZSByZWplY3RlZCwgdGhlIGZpcnN0IHByb21pc2VcbiAgdGhhdCBpcyByZWplY3RlZCB3aWxsIGJlIGdpdmVuIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSByZXR1cm5lZCBwcm9taXNlcydzXG4gIHJlamVjdGlvbiBoYW5kbGVyLiBGb3IgZXhhbXBsZTpcblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgbGV0IHByb21pc2UyID0gcmVqZWN0KG5ldyBFcnJvcihcIjJcIikpO1xuICBsZXQgcHJvbWlzZTMgPSByZWplY3QobmV3IEVycm9yKFwiM1wiKSk7XG4gIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVucyBiZWNhdXNlIHRoZXJlIGFyZSByZWplY3RlZCBwcm9taXNlcyFcbiAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAvLyBlcnJvci5tZXNzYWdlID09PSBcIjJcIlxuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCBhbGxcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FycmF5fSBlbnRyaWVzIGFycmF5IG9mIHByb21pc2VzXG4gIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiBhbGwgYHByb21pc2VzYCBoYXZlIGJlZW5cbiAgZnVsZmlsbGVkLCBvciByZWplY3RlZCBpZiBhbnkgb2YgdGhlbSBiZWNvbWUgcmVqZWN0ZWQuXG4gIEBzdGF0aWNcbiovXG5mdW5jdGlvbiBhbGwoZW50cmllcykge1xuICByZXR1cm4gbmV3IEVudW1lcmF0b3IodGhpcywgZW50cmllcykucHJvbWlzZTtcbn1cblxuLyoqXG4gIGBQcm9taXNlLnJhY2VgIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaCBpcyBzZXR0bGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGVcbiAgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gc2V0dGxlLlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuXG4gIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAyJyk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG5cbiAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgLy8gcmVzdWx0ID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIGl0IHdhcyByZXNvbHZlZCBiZWZvcmUgcHJvbWlzZTFcbiAgICAvLyB3YXMgcmVzb2x2ZWQuXG4gIH0pO1xuICBgYGBcblxuICBgUHJvbWlzZS5yYWNlYCBpcyBkZXRlcm1pbmlzdGljIGluIHRoYXQgb25seSB0aGUgc3RhdGUgb2YgdGhlIGZpcnN0XG4gIHNldHRsZWQgcHJvbWlzZSBtYXR0ZXJzLiBGb3IgZXhhbXBsZSwgZXZlbiBpZiBvdGhlciBwcm9taXNlcyBnaXZlbiB0byB0aGVcbiAgYHByb21pc2VzYCBhcnJheSBhcmd1bWVudCBhcmUgcmVzb2x2ZWQsIGJ1dCB0aGUgZmlyc3Qgc2V0dGxlZCBwcm9taXNlIGhhc1xuICBiZWNvbWUgcmVqZWN0ZWQgYmVmb3JlIHRoZSBvdGhlciBwcm9taXNlcyBiZWNhbWUgZnVsZmlsbGVkLCB0aGUgcmV0dXJuZWRcbiAgcHJvbWlzZSB3aWxsIGJlY29tZSByZWplY3RlZDpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdwcm9taXNlIDInKSk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG5cbiAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnNcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBwcm9taXNlIDIgYmVjYW1lIHJlamVjdGVkIGJlZm9yZVxuICAgIC8vIHByb21pc2UgMSBiZWNhbWUgZnVsZmlsbGVkXG4gIH0pO1xuICBgYGBcblxuICBBbiBleGFtcGxlIHJlYWwtd29ybGQgdXNlIGNhc2UgaXMgaW1wbGVtZW50aW5nIHRpbWVvdXRzOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgUHJvbWlzZS5yYWNlKFthamF4KCdmb28uanNvbicpLCB0aW1lb3V0KDUwMDApXSlcbiAgYGBgXG5cbiAgQG1ldGhvZCByYWNlXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXMgdG8gb2JzZXJ2ZVxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB3aGljaCBzZXR0bGVzIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgZmlyc3QgcGFzc2VkXG4gIHByb21pc2UgdG8gc2V0dGxlLlxuKi9cbmZ1bmN0aW9uIHJhY2UoZW50cmllcykge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gIGlmICghaXNBcnJheShlbnRyaWVzKSkge1xuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAgYFByb21pc2UucmVqZWN0YCByZXR1cm5zIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBwYXNzZWQgYHJlYXNvbmAuXG4gIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICByZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gIH0pO1xuICBgYGBcblxuICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIHJlamVjdFxuICBAc3RhdGljXG4gIEBwYXJhbSB7QW55fSByZWFzb24gdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGguXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIGdpdmVuIGByZWFzb25gLlxuKi9cbmZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIG5lZWRzUmVzb2x2ZXIoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbn1cblxuZnVuY3Rpb24gbmVlZHNOZXcoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG59XG5cbi8qKlxuICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICBUZXJtaW5vbG9neVxuICAtLS0tLS0tLS0tLVxuXG4gIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gIEJhc2ljIFVzYWdlOlxuICAtLS0tLS0tLS0tLS1cblxuICBgYGBqc1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgIC8vIG9uIGZhaWx1cmVcbiAgICByZWplY3QocmVhc29uKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgLy8gb24gcmVqZWN0aW9uXG4gIH0pO1xuICBgYGBcblxuICBBZHZhbmNlZCBVc2FnZTpcbiAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICBgYGBqc1xuICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAvLyBvbiBmdWxmaWxsbWVudFxuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAvLyBvbiByZWplY3Rpb25cbiAgfSk7XG4gIGBgYFxuXG4gIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgYGBganNcbiAgUHJvbWlzZS5hbGwoW1xuICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSk7XG4gIGBgYFxuXG4gIEBjbGFzcyBQcm9taXNlXG4gIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQGNvbnN0cnVjdG9yXG4qL1xuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICB0aGlzW1BST01JU0VfSURdID0gbmV4dElkKCk7XG4gIHRoaXMuX3Jlc3VsdCA9IHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gIGlmIChub29wICE9PSByZXNvbHZlcikge1xuICAgIHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJyAmJiBuZWVkc1Jlc29sdmVyKCk7XG4gICAgdGhpcyBpbnN0YW5jZW9mIFByb21pc2UgPyBpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcikgOiBuZWVkc05ldygpO1xuICB9XG59XG5cblByb21pc2UuYWxsID0gYWxsO1xuUHJvbWlzZS5yYWNlID0gcmFjZTtcblByb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG5Qcm9taXNlLnJlamVjdCA9IHJlamVjdDtcblByb21pc2UuX3NldFNjaGVkdWxlciA9IHNldFNjaGVkdWxlcjtcblByb21pc2UuX3NldEFzYXAgPSBzZXRBc2FwO1xuUHJvbWlzZS5fYXNhcCA9IGFzYXA7XG5cblByb21pc2UucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUHJvbWlzZSxcblxuICAvKipcbiAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBDaGFpbmluZ1xuICAgIC0tLS0tLS0tXG4gIFxuICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgIH0pO1xuICBcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICB9KTtcbiAgICBgYGBcbiAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQXNzaW1pbGF0aW9uXG4gICAgLS0tLS0tLS0tLS0tXG4gIFxuICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgLS0tLS0tLS0tLS0tLS1cbiAgXG4gICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHJlc3VsdDtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH1cbiAgICBgYGBcbiAgXG4gICAgRXJyYmFjayBFeGFtcGxlXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgUHJvbWlzZSBFeGFtcGxlO1xuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgLS0tLS0tLS0tLS0tLS1cbiAgXG4gICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IGF1dGhvciwgYm9va3M7XG4gIFxuICAgIHRyeSB7XG4gICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfVxuICAgIGBgYFxuICBcbiAgICBFcnJiYWNrIEV4YW1wbGVcbiAgXG4gICAgYGBganNcbiAgXG4gICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuICBcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG4gIFxuICAgIH1cbiAgXG4gICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBQcm9taXNlIEV4YW1wbGU7XG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBmaW5kQXV0aG9yKCkuXG4gICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBAbWV0aG9kIHRoZW5cbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cbiAgdGhlbjogdGhlbixcblxuICAvKipcbiAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cbiAgXG4gICAgYGBganNcbiAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICB9XG4gIFxuICAgIC8vIHN5bmNocm9ub3VzXG4gICAgdHJ5IHtcbiAgICAgIGZpbmRBdXRob3IoKTtcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9XG4gIFxuICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEBtZXRob2QgY2F0Y2hcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuICAnY2F0Y2gnOiBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgdmFyIGxvY2FsID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgaWYgKFApIHtcbiAgICAgICAgdmFyIHByb21pc2VUb1N0cmluZyA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9taXNlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBzaWxlbnRseSBpZ25vcmVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZVRvU3RyaW5nID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWwuUHJvbWlzZSA9IFByb21pc2U7XG59XG5cbi8vIFN0cmFuZ2UgY29tcGF0Li5cblByb21pc2UucG9seWZpbGwgPSBwb2x5ZmlsbDtcblByb21pc2UuUHJvbWlzZSA9IFByb21pc2U7XG5cbnJldHVybiBQcm9taXNlO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM2LXByb21pc2UubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL34vZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi93ZWJwYWNrL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB2ZXJ0eCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcblxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVybCA9IGlucHV0XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoJ1xcclxcbicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL0Y6L3Byb2dyYW0vd29yay9wcm9qZWN0cy9sdXhvZnQvd2VhdGhlckFwcC9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgRXZlbnRNaXhpbiA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0L7QtNC/0LjRgdC60LAg0L3QsCDRgdC+0LHRi9GC0LjQtVxyXG4gICAgICog0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LU6XHJcbiAgICAgKiAgb2JqZWN0Lm9uKCdzZWxlY3QnLCBmdW5jdGlvbihpdGVtKSB7IC4uLiB9XHJcbiAgICAgKi9cclxuICAgIG9uOiBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnMpIHRoaXMuX2V2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC10LrRgNCw0YnQtdC90LjQtSDQv9C+0LTQv9C40YHQutC4XHJcbiAgICAgKiAgb2JqZWN0Lm9mZignc2VsZWN0JywgIGhhbmRsZXIpXHJcbiAgICAgKi9cclxuICAgIG9mZjogZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVycyAmJiB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFoYW5kbGVycykgcmV0dXJuO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tpXSA9PSBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaS0tLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQk9C10L3QtdGA0LDRhtC40Y8g0YHQvtCx0YvRgtC40Y8g0YEg0L/QtdGA0LXQtNCw0YfQtdC5INC00LDQvdC90YvRhVxyXG4gICAgICogIHRoaXMudHJpZ2dlcignc2VsZWN0JywgaXRlbSk7XHJcbiAgICAgKi9cclxuICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSAvKiwgLi4uICovKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVycyB8fCAhdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC00LvRjyDRgdC+0LHRi9GC0LjRjyDQvdC10YJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCy0YvQt9Cy0LDRgtGMINC+0LHRgNCw0LHQvtGC0YfQuNC60LhcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBoYW5kbGVyc1tpXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudE1peGluO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvY29tbW9uL2V2ZW50TWl4aW4vaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEN1c3RvbUVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNhdXNlKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0N1c3RvbUVycm9yJztcclxuICAgICAgICB0aGlzLnN0YWNrID0gY2F1c2Uuc3RhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERhdGFSZWFkRXJyb3IgZXh0ZW5kcyBDdXN0b21FcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBjYXVzZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGNhdXNlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnRGF0YVJlYWRFcnJvcic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEZldGNoRGF0YUVycm9yIGV4dGVuZHMgQ3VzdG9tRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgY2F1c2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBjYXVzZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ZldGNoRGF0YUVycm9yJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtEYXRhUmVhZEVycm9yLCBGZXRjaERhdGFFcnJvcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy9jb21tb24vZXJyb3JzL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ3VycmVudENpdHkgZnJvbSBcIi4vY3VycmVudC1jaXR5XCI7XHJcbmltcG9ydCBOZXhEYXlzIGZyb20gXCIuL25leC1kYXlzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9zZWFyY2hcIjtcclxuaW1wb3J0IENpdHlWaWV3ZXIgZnJvbSBcIi4vY2l0eS12aWV3ZXJcIjtcclxuaW1wb3J0ICcuLy4uLy4uL3ZlbmRvcnMvaGFtbWVyJztcclxuaW1wb3J0IGV2ZW50TWl4aW4gZnJvbSBcIi4vLi4vY29tbW9uL2V2ZW50TWl4aW5cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX21haW5FbGVtZW50ID0gbmV3IEhhbW1lcihkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICB0aGlzLl9tYWluRWxlbWVudC5nZXQoJ3N3aXBlJykuc2V0KHt0aHJlc2hvbGQ6IDAsIHZlbG9jaXR5OiAwLjF9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENpdHkgPSBuZXcgQ3VycmVudENpdHkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWN1cnJlbnQtY2l0eV1cIikpO1xyXG4gICAgICAgIHRoaXMubmV4RGF5cyA9IG5ldyBOZXhEYXlzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1hZGRpdGlvbl1cIikpO1xyXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZW51XVwiKSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZWFyY2hdXCIpKTtcclxuICAgICAgICB0aGlzLmNpdHlWaWV3ZXIgPSBuZXcgQ2l0eVZpZXdlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2l0eS12aWV3ZXJdXCIpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2l0eVZpZXdlci5vbihDaXR5Vmlld2VyLkVWRU5UUy5vbkRlbGV0ZUNpdHlHZXREaW1lbnRpb24sIGlzU2Nyb2xsID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2V0T2Zmc2V0TWFyZ2luKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUucmVtb3ZlT2Zmc2V0TWFyZ2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaXR5Vmlld2VyLm9uKENpdHlWaWV3ZXIuRVZFTlRTLmlzU2Nyb2xsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5zZXRPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaXR5Vmlld2VyLm9uKENpdHlWaWV3ZXIuRVZFTlRTLm9uQWRkQ2l0eSwgaXNTY3JvbGwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zZXRPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5yZW1vdmVPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNpdHlWaWV3ZXIub24oQ2l0eVZpZXdlci5FVkVOVFMub25TaG93UHJlbG9hZGVyQWRkQ2l0eSwgaXNTY3JvbGwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zZXRPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5yZW1vdmVPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNpdHlWaWV3ZXIub24oQ2l0eVZpZXdlci5FVkVOVFMub25IaWRlUHJlbG9hZGVyQWRkQ2l0eSwgaXNTY3JvbGwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zZXRPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5yZW1vdmVPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5Lm9uKEN1cnJlbnRDaXR5LkVWRU5UUy5vblNob3dNb3JlRGV0YWlscywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZGlzYWJsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5Lm9uKEN1cnJlbnRDaXR5LkVWRU5UUy5vbkhpZGVNb3JlRGV0YWlscywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZW5hYmxlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENpdHkub24oQ3VycmVudENpdHkuRVZFTlRTLm9uQ2hhbmdlSGVpZ2h0QnlQYW4sIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXhEYXlzLnNldEhlaWdodChwYXJzZUludCh0aGlzLm5leERheXMuZ2V0SGVpZ2h0KCkpICsgdmFsdWUgKyBcInB4XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5Lm9uKEN1cnJlbnRDaXR5LkVWRU5UUy5vbkNoYW5nZUhlaWdodEFmdGVyQW5pbWF0aW9uUGFuVXAsIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXhEYXlzLnNldEhlaWdodCh2YWx1ZSArIFwicHhcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENpdHkub24oQ3VycmVudENpdHkuRVZFTlRTLm9uQ2hhbmdlSGVpZ2h0QWZ0ZXJBbmltYXRpb25QYW5Eb3duLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4RGF5cy5jbGVhckhlaWdodCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9hZGRMYW5kQ2xhc3MuYmluZCh0aGlzLCBkb2N1bWVudC5ib2R5KSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoVmlldy5FVkVOVFMucmVzaXplV2luZG93KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2l0eS5hZGRQYW5DbGFzcygpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDaXR5LnJlbW92ZVNtYWxsQ2xhc3MoKTtcclxuICAgICAgICAgICAgdGhpcy5fZW5hYmxlRGlzYWJsZU1lbnUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDaXR5LmlzU21hbGxTaXplKCkgJiYgIXRoaXMuX2lzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4RGF5cy5zZXRIZWlnaHQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIHBhcnNlSW50KHRoaXMuY3VycmVudENpdHkuZ2V0SGVpZ2h0KCkpICsgXCJweFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4RGF5cy5jbGVhckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENpdHkuZGV0YWlscy5yZWJ1aWxkKHRoaXMuY3VycmVudENpdHkuZ2V0RnJlZVNwYWNlRnJvRGV0YWlscygpKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluRWxlbWVudC5vbihcInN3aXBlbGVmdFwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2lwZVwiKVxyXG4gICAgICAgICAgICBpZiAoIWV2LnRhcmdldC5jbG9zZXN0KFwiLm1lbnVTd2lwZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnUuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluRWxlbWVudC5vbihcInN3aXBlcmlnaHRcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXYudGFyZ2V0LmNsb3Nlc3QoXCIubWVudVN3aXBlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVudS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZExhbmRDbGFzcyhkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICB0aGlzLl9lbmFibGVEaXNhYmxlTWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcmVsb2FkZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJcIikuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVByZWxvYWRlcigpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWxvYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93V2VsY29tZVNjcmVlbigpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWUtc2NyZWVuXCIpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVXZWxjb21lU2NyZWVuKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1zY3JlZW5cIikuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1JlZnJlc2hpbmcoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eV9fcmVsb2FkXCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlfX3JlbG9hZFwiKS5jbGFzc0xpc3QuYWRkKFwicmVsb2FkaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVSZWZyZXNoaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlfX3JlbG9hZFwiKTtcclxuXHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwicmVsb2FkaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9lbmFibGVEaXNhYmxlTWVudSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2V0U2NyZWVuV2lkdGgoKSA8IDk5Mikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZW5hYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51LmRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZExhbmRDbGFzcyhlbGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiaXNMYW5kc2NhcGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXNMYW5kc2NhcGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U2NyZWVuV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBfaXNMYW5kc2NhcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuICAgICAgICBjb25zdCBpbm5lciA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lubmVyXCIpO1xyXG5cclxuICAgICAgICBpbm5lci5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG5cclxuICAgICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gbWUoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgRVZFTlRTKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwicmVzaXplV2luZG93XCI6IFwicmVzaXplV2luZG93XCIsXHJcbiAgICAgICAgICAgIEN1cnJlbnRDaXR5OiBDdXJyZW50Q2l0eS5FVkVOVFMsXHJcbiAgICAgICAgICAgIE5leERheXM6IE5leERheXMuRVZFTlRTLFxyXG4gICAgICAgICAgICBNZW51OiBNZW51LkVWRU5UUyxcclxuICAgICAgICAgICAgU2VhcmNoOiBTZWFyY2guRVZFTlRTLFxyXG4gICAgICAgICAgICBDaXR5Vmlld2VyOiBDaXR5Vmlld2VyLkVWRU5UU1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZm9yICh2YXIga2V5IGluIGV2ZW50TWl4aW4pIHtcclxuICAgIFZpZXcucHJvdG90eXBlW2tleV0gPSBldmVudE1peGluW2tleV07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBEZXRhaWxzIGZyb20gXCIuLy4uL2RldGFpbHNcIjtcclxuaW1wb3J0IEhvdXJseSBmcm9tIFwiLi8uLi9ob3VybHlcIjtcclxuaW1wb3J0IGV2ZW50TWl4aW4gZnJvbSBcIi4vLi4vLi4vY29tbW9uL2V2ZW50TWl4aW5cIjtcclxuaW1wb3J0IFwiLi8uLi8uLi8uLi92ZW5kb3JzL2hhbW1lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudENpdHkge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1NtYWxsQ2xhc3MgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc01vcmVEZXRhaWxzU2hvd24gPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscygpO1xyXG4gICAgICAgIHRoaXMuaG91cmx5ID0gbmV3IEhvdXJseSgpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXRhaWxzXVwiKS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHMuZWxlbSk7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaG91cmx5XVwiKS5hcHBlbmRDaGlsZCh0aGlzLmhvdXJseS5lbGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2l0eUluaXRIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9tYW5hZ2VyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5fb25BbmltYXRpb25FbmQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UGFuRGlyZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYW5EaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5fY2l0eUluaXRIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFtbWVydGltZS5vbihcInBhbnVwXCIsIHRoaXMuX2hhbmRsZVBhblVwLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW1tZXJ0aW1lLm9uKFwicGFuZG93blwiLCB0aGlzLl9oYW5kbGVQYW5Eb3duLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFBhbkNsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFuRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0xhbmRzY2FwZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbW1lcnRpbWUgPSBuZXcgSGFtbWVyKHRoaXMuX2VsZW0sIHtkb21FdmVudHM6IHRydWV9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2hhbW1lcnRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbW1lcnRpbWUgPSBuZXcgSGFtbWVyKHRoaXMuX2VsZW0sIHtkb21FdmVudHM6IHRydWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9oYW1tZXJ0aW1lLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZyZWVTcGFjZUZyb0RldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpO1xyXG4gICAgICAgIGNvbnN0IG1vcmUgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb3JlLWRldGFpbHNdXCIpO1xyXG4gICAgICAgIHJldHVybiBtb3JlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGRldGFpbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVQYW5VcChldmVudCkge1xyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudmVydGljYWxcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNpdHlIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGNpdHlIZWlnaHQpIDw9IDE1MCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VJbnQoY2l0eUhlaWdodCkgPCBwYXJzZUludCh0aGlzLl9jaXR5SW5pdEhlaWdodCkgLSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJzbWFsbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5faXNTbWFsbENsYXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSBcIjE1MHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVSZWxvYWRCdXR0b24oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQoY2l0eUhlaWdodCkgLSBldmVudC5kaXN0YW5jZSArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25DaGFuZ2VIZWlnaHRCeVBhbiwgZXZlbnQuZGlzdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVQYW5Eb3duKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGNpdHlIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGNpdHlIZWlnaHQpID4gMTU1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNtYWxsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1NtYWxsQ2xhc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KGNpdHlIZWlnaHQpICsgZXZlbnQuZGlzdGFuY2UgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpbml0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKFwiaW5pdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLWNpdHktaW1nXVwiKS5zcmMgPSBkYXRhLmltZztcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2l0eS1kYXRhXVwiKS5pbm5lckhUTUwgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLWNpdHktbmFtZV1cIikuaW5uZXJIVE1MID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaXR5LXdlYXRoZXJdXCIpLmlubmVySFRNTCA9IGRhdGEud2VhdGhlcjtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2l0eS10ZW1wXVwiKS5pbm5lckhUTUwgPSBkYXRhLnRlbXA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaXR5LWltZ11cIikub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU21hbGxTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNtYWxsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtKS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgX21hbmFnZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChcIltkYXRhLW1vcmUtZGV0YWlsc11cIikpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9nZ2xlTW9yZVZpZXcodGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChcIltkYXRhLWN1cnJlbnQtY2l0eS1vdmVybGF5XVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVNb3JlVmlldyh0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb3JlLWRldGFpbHNdXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChcIltkYXRhLXJlbG9hZC1kYXRhXVwiKSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25SZWxvYWREYXRhUmVxdWVzdCwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlUmVsb2FkQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLXJlbG9hZC1kYXRhXVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dSZWxvYWRCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcmVsb2FkLWRhdGFdXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVNb3JlVmlldyhlbGVtKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LW1vcmUtZGV0YWlsc1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93LW1vcmUtZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNtYWxsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnNob3dNb3JlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuc2hvd01vcmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBcImxlc3MgZGV0YWlsc1wiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uU2hvd01vcmVEZXRhaWxzLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKFwic2hvd25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc01vcmVEZXRhaWxzU2hvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd25cIik7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkhpZGVNb3JlRGV0YWlscywgXCJcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzbWFsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uIG1lKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW1vcmUtZGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2VsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgbWUpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kZXRhaWxzLmhpZGVNb3JlKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoc2VsZi5jb25zdHJ1Y3Rvci5FVkVOVFMub25IaWRkZW5Nb3JlRGV0YWlscywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IFwibW9yZSBkZXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldGFpbHMucmVidWlsZChzZWxmLmdldEZyZWVTcGFjZUZyb0RldGFpbHMoKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9pc01vcmVEZXRhaWxzU2hvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9pc0xhbmRzY2FwZSgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYW5DbGFzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID49IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU21hbGxDbGFzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHMuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNTbWFsbENsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzTW9yZURldGFpbHNTaG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKFwic21hbGxcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25BbmltYXRpb25FbmQoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZGV0YWlscy5yZWJ1aWxkKHRoaXMuZ2V0RnJlZVNwYWNlRnJvRGV0YWlscygpKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25BbmltYXRpb25FbmQsIFwiXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25DaGFuZ2VIZWlnaHRBZnRlckFuaW1hdGlvbiwgXCJcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGV0YWlscy5yZWJ1aWxkKHRoaXMuZ2V0RnJlZVNwYWNlRnJvRGV0YWlscygpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzbWFsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uQ2hhbmdlSGVpZ2h0QWZ0ZXJBbmltYXRpb25QYW5VcCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbSkuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93UmVsb2FkQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25DaGFuZ2VIZWlnaHRBZnRlckFuaW1hdGlvblBhbkRvd24pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kZXRhaWxzLnJlYnVpbGQodGhpcy5nZXRGcmVlU3BhY2VGcm9EZXRhaWxzKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEVWRU5UUygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcIm9uQ2hhbmdlSGVpZ2h0QnlQYW5cIjogXCJvbkNoYW5nZUhlaWdodEJ5UGFuXCIsXHJcbiAgICAgICAgICAgIFwib25DaGFuZ2VIZWlnaHRBZnRlckFuaW1hdGlvblBhblVwXCI6IFwib25DaGFuZ2VIZWlnaHRBZnRlckFuaW1hdGlvblBhblVwXCIsXHJcbiAgICAgICAgICAgIFwib25DaGFuZ2VIZWlnaHRBZnRlckFuaW1hdGlvblBhbkRvd25cIjogXCJvbkNoYW5nZUhlaWdodEFmdGVyQW5pbWF0aW9uUGFuRG93blwiLFxyXG4gICAgICAgICAgICBcIm9uQW5pbWF0aW9uRW5kXCI6IFwib25BbmltYXRpb25FbmRcIixcclxuICAgICAgICAgICAgXCJvblNob3dNb3JlRGV0YWlsc1wiOiBcIm9uU2hvd01vcmVEZXRhaWxzXCIsXHJcbiAgICAgICAgICAgIFwib25IaWRlTW9yZURldGFpbHNcIjogXCJvbkhpZGVNb3JlRGV0YWlsc1wiLFxyXG4gICAgICAgICAgICBcIm9uSGlkZGVuTW9yZURldGFpbHNcIjogXCJvbkhpZGRlbk1vcmVEZXRhaWxzXCIsXHJcbiAgICAgICAgICAgIFwib25SZWxvYWREYXRhUmVxdWVzdFwiOiBcIm9uUmVsb2FkRGF0YVJlcXVlc3RcIixcclxuICAgICAgICAgICAgSG91cmx5OiBIb3VybHkuRVZFTlRTXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKHZhciBrZXkgaW4gZXZlbnRNaXhpbikge1xyXG4gICAgQ3VycmVudENpdHkucHJvdG90eXBlW2tleV0gPSBldmVudE1peGluW2tleV07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy92aWV3L2N1cnJlbnQtY2l0eS9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUucHVnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc05hbWUgPSBcImRldGFpbHNcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb250U2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtKS5mb250U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGb250U2l6ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuZm9udFNpemUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9udFNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5mb250U2l6ZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vcmUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTW9yZSgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoZGF0YSwgZnJlZVNwYWNlKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IHRoaXMuX2dldEl0ZW1Jbkxpc3RIZWlnaHQoKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoZnJlZVNwYWNlIC8gaXRlbUhlaWdodCkgPj0gMiA/IHBhcnNlSW50KGZyZWVTcGFjZSAvIGl0ZW1IZWlnaHQpIDogMTtcclxuICAgICAgICBjb2wgPSAoY29sID4gMykgPyAzIDogY29sO1xyXG4gICAgICAgIC8vIGNvbnN0IGh0bWwgPSB0ZW1wbGF0ZSh7aXRlbXM6IGRhdGEsIGZyZWVTcGFjZTogKCl9KTtcclxuICAgICAgICB0aGlzLl9lbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtczogZGF0YSwgZnJlZVNwYWNlOiBjb2x9KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29sKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZWJ1aWxkKGZyZWVTcGFjZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHNfX2l0ZW0gXCIpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB0aGlzLl9nZXRJdGVtSW5MaXN0SGVpZ2h0KCk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGZyZWVTcGFjZSAvIGl0ZW1IZWlnaHQpID49IDIgPyBwYXJzZUludChmcmVlU3BhY2UgLyBpdGVtSGVpZ2h0KSA6IDE7XHJcbiAgICAgICAgY29sID0gKGNvbCA+IDMpID8gMyA6IGNvbDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBlbGVtIG9mIGVsZW1zKSB7XHJcbiAgICAgICAgICAgIC8vIGVsZW0uY2xhc3NMaXN0LmFkZChcImRldGFpbHMtLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZGV0YWlscy0tbW9yZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBlbGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZGV0YWlscy0taGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBjb2wpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLS1tb3JlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJdGVtSW5MaXN0SGVpZ2h0KCkge1xyXG4gICAgICAgIGNvbnN0IGZhY2tlSW5zdGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZhY2tlSW5zdGFuY2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgZmFja2VJbnN0YW5jZS5zdHlsZS5sZWZ0ID0gXCItOTk5OTlweFwiO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwiZGV0YWlsc19faXRlbVwiO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBcImZha2VcIjtcclxuICAgICAgICBmYWNrZUluc3RhbmNlLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmYWNrZUluc3RhbmNlKTtcclxuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gZmFja2VJbnN0YW5jZS5jaGlsZHJlblswXS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmYWNrZUluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvZGV0YWlscy9pbmRleC5qcyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoZnJlZVNwYWNlLCBpdGVtcykge3ZhciBwdWdfaW5kZW50ID0gW107XG4vLyBpdGVyYXRlIGl0ZW1zXG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IGl0ZW1zO1xuICBpZiAoJ251bWJlcicgPT0gdHlwZW9mICQkb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IGluZGV4IDwgJCRsOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gJCRvYmpbaW5kZXhdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1wiZGV0YWlsc19faXRlbSBcIiArICgoaW5kZXggPj0gZnJlZVNwYWNlKSA/IFwiZGV0YWlscy0tbW9yZVwiIDogXCJcIildLCBbdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImRldGFpbHNfX2l0ZW0tdGV4dFxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbVswXSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImRldGFpbHNfX251bVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbVsxXSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDc3BhblxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtWzJdIHx8IFwiXCIpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBpbmRleCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7XG4gICAgICB2YXIgaXRlbSA9ICQkb2JqW2luZGV4XTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtcImRldGFpbHNfX2l0ZW0gXCIgKyAoKGluZGV4ID49IGZyZWVTcGFjZSkgPyBcImRldGFpbHMtLW1vcmVcIiA6IFwiXCIpXSwgW3RydWVdKSwgZmFsc2UsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJkZXRhaWxzX19pdGVtLXRleHRcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW1bMF0pID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJkZXRhaWxzX19udW1cXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW1bMV0pID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ3NwYW5cXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbVsyXSB8fCBcIlwiKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xufS5jYWxsKHRoaXMsXCJmcmVlU3BhY2VcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmZyZWVTcGFjZTp0eXBlb2YgZnJlZVNwYWNlIT09XCJ1bmRlZmluZWRcIj9mcmVlU3BhY2U6dW5kZWZpbmVkLFwiaXRlbXNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLml0ZW1zOnR5cGVvZiBpdGVtcyE9PVwidW5kZWZpbmVkXCI/aXRlbXM6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdmlldy9kZXRhaWxzL3RlbXBsYXRlLnB1Z1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIGFba2V5XSA9IHZhbEEgKyAodmFsQSAmJiB2YWxCICYmICc7JykgKyB2YWxCO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgY2xhc3NOYW1lLCBwYWRkaW5nID0gJycsIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgcGFkZGluZyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBrZXk7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlcyh2YWwsIGVzY2FwaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gIH0gZWxzZSBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgfHwgJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCBvciBzdHJpbmcgdG8gYSBzdHJpbmcgb2YgQ1NTIHN0eWxlcyBkZWxpbWl0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz58c3RyaW5nKX0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy5zdHlsZSA9IHB1Z19zdHlsZTtcbmZ1bmN0aW9uIHB1Z19zdHlsZSh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG91dCA9ICcnLCBkZWxpbSA9ICcnO1xuICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwgc3R5bGUpKSB7XG4gICAgICAgIG91dCA9IG91dCArIGRlbGltICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdO1xuICAgICAgICBkZWxpbSA9ICc7JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSAnJyArIHZhbDtcbiAgICBpZiAodmFsW3ZhbC5sZW5ndGggLSAxXSA9PT0gJzsnKSByZXR1cm4gdmFsLnNsaWNlKDAsIC0xKTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3B1Zy9+L3B1Zy1ydW50aW1lL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBmcyAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFwiLi8uLi8uLi8uLi92ZW5kb3JzL2hhbW1lclwiO1xyXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5wdWcnO1xyXG5pbXBvcnQgdGVtcGxhdGVOQSBmcm9tICcuL3RlbXBsYXRlTkEucHVnJztcclxuaW1wb3J0IGV2ZW50TWl4aW4gZnJvbSBcIi4vLi4vLi4vY29tbW9uL2V2ZW50TWl4aW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXJseSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc05hbWUgPSBcImhvdXJseVwiO1xyXG4gICAgICAgIHRoaXMuaXNSZW5kZXJlZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fc3dpcGVFbGVtID0gbmV3IEhhbW1lcih0aGlzLl9lbGVtLCB7ZG9tRXZlbnRzOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N3aXBlRWxlbS5vbihcInN3aXBlbGVmdFwiLCAoZXYpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nZXRMZW5ndGhPZkl0ZW1zKCkgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3NsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vblN3aXBlTGVmdCwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N3aXBlRWxlbS5vbihcInN3aXBlcmlnaHRcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nZXRMZW5ndGhPZkl0ZW1zKCkgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NsaWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vblN3aXBlUmlnaHQsIFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9zd2lwZUVsZW0ub24oXCJzd2lwZVwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uU3dpcGUsIFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRMZW5ndGhPZkl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5X19zbGlkZVwiKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlKHtzbGlkZXM6IGRhdGF9KTtcclxuICAgICAgICB0aGlzLl9zbGlkZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1ob3VybHktc2xpZGVyXVwiKTtcclxuICAgICAgICB0aGlzLl9pbm5lciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLWhvdXJseS1pbm5lcl1cIik7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uUmVuZGVyLCBcIlwiKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcInNob3duXCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcInNob3duLXNsaWRlclwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZW5kZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZW5kZXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzbGlkZXMgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5X19zbGlkZVwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc1tpXS5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseV9fc2xpZGUtdGltZVwiKS5pbm5lckhUTUwgPSBkYXRhW2ldLnRpbWU7XHJcbiAgICAgICAgICAgIHNsaWRlc1tpXS5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseV9fc2xpZGUtdGVtcFwiKS5pbm5lckhUTUwgPSBkYXRhW2ldLnRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck5BKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0uaW5uZXJIVE1MID0gdGVtcGxhdGVOQSgpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vblJlbmRlciwgXCJcIik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93blwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93bi1zbGlkZXJcIik7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3duXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3duLXNsaWRlclwiKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZXN0cm95LCBcIlwiKTtcclxuICAgICAgICB0aGlzLmlzUmVuZGVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEVWRU5UUygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcIm9uUmVuZGVyXCI6IFwib25SZW5kZXJcIixcclxuICAgICAgICAgICAgXCJvbkRlc3Ryb3lcIjogXCJvbkRlc3Ryb3lcIixcclxuICAgICAgICAgICAgXCJvblN3aXBlXCI6IFwib25Td2lwZVwiLFxyXG4gICAgICAgICAgICBcIm9uU3dpcGVMZWZ0XCI6IFwib25Td2lwZUxlZnRcIixcclxuICAgICAgICAgICAgXCJvblN3aXBlUmlnaHRcIjogXCJvblN3aXBlUmlnaHRcIixcclxuICAgICAgICAgICAgXCJvblRyYW5zaXRpb25FbmRcIjogXCJvblRyYW5zaXRpb25FbmRcIixcclxuICAgICAgICAgICAgXCJvbkRlc3Ryb3lUcmFuc2l0aW9uRW5kXCI6IFwib25EZXN0cm95VHJhbnNpdGlvbkVuZFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKHZhciBrZXkgaW4gZXZlbnRNaXhpbikge1xyXG4gICAgSG91cmx5LnByb3RvdHlwZVtrZXldID0gZXZlbnRNaXhpbltrZXldO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy92aWV3L2hvdXJseS9pbmRleC5qcyIsIi8qISBIYW1tZXIuSlMgLSB2Mi4wLjggLSAyMDE2LTA0LTIzXHJcbiAqIGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNiBKb3JpayBUYW5nZWxkZXI7XHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAqL1xyXG4hZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShhLGIsYyl7cmV0dXJuIHNldFRpbWVvdXQoaihhLGMpLGIpfWZ1bmN0aW9uIGYoYSxiLGMpe3JldHVybiBBcnJheS5pc0FycmF5KGEpPyhnKGEsY1tiXSxjKSwhMCk6ITF9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gaChiLGMsZCl7dmFyIGU9XCJERVBSRUNBVEVEIE1FVEhPRDogXCIrYytcIlxcblwiK2QrXCIgQVQgXFxuXCI7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9bmV3IEVycm9yKFwiZ2V0LXN0YWNrLXRyYWNlXCIpLGQ9YyYmYy5zdGFjaz9jLnN0YWNrLnJlcGxhY2UoL15bXlxcKF0rP1tcXG4kXS9nbSxcIlwiKS5yZXBsYWNlKC9eXFxzK2F0XFxzKy9nbSxcIlwiKS5yZXBsYWNlKC9eT2JqZWN0Ljxhbm9ueW1vdXM+XFxzKlxcKC9nbSxcInthbm9ueW1vdXN9KClAXCIpOlwiVW5rbm93biBTdGFjayBUcmFjZVwiLGY9YS5jb25zb2xlJiYoYS5jb25zb2xlLndhcm58fGEuY29uc29sZS5sb2cpO3JldHVybiBmJiZmLmNhbGwoYS5jb25zb2xlLGUsZCksYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkoYSxiLGMpe3ZhciBkLGU9Yi5wcm90b3R5cGU7ZD1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUpLGQuY29uc3RydWN0b3I9YSxkLl9zdXBlcj1lLGMmJmxhKGQsYyl9ZnVuY3Rpb24gaihhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gayhhLGIpe3JldHVybiB0eXBlb2YgYT09b2E/YS5hcHBseShiP2JbMF18fGQ6ZCxiKTphfWZ1bmN0aW9uIGwoYSxiKXtyZXR1cm4gYT09PWQ/YjphfWZ1bmN0aW9uIG0oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG4oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG8oYSxiKXtmb3IoO2E7KXtpZihhPT1iKXJldHVybiEwO2E9YS5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIHAoYSxiKXtyZXR1cm4gYS5pbmRleE9mKGIpPi0xfWZ1bmN0aW9uIHEoYSl7cmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpfWZ1bmN0aW9uIHIoYSxiLGMpe2lmKGEuaW5kZXhPZiYmIWMpcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoOyl7aWYoYyYmYVtkXVtjXT09Ynx8IWMmJmFbZF09PT1iKXJldHVybiBkO2QrK31yZXR1cm4tMX1mdW5jdGlvbiBzKGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLDApfWZ1bmN0aW9uIHQoYSxiLGMpe2Zvcih2YXIgZD1bXSxlPVtdLGY9MDtmPGEubGVuZ3RoOyl7dmFyIGc9Yj9hW2ZdW2JdOmFbZl07cihlLGcpPDAmJmQucHVzaChhW2ZdKSxlW2ZdPWcsZisrfXJldHVybiBjJiYoZD1iP2Quc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBhW2JdPmNbYl19KTpkLnNvcnQoKSksZH1mdW5jdGlvbiB1KGEsYil7Zm9yKHZhciBjLGUsZj1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxnPTA7ZzxtYS5sZW5ndGg7KXtpZihjPW1hW2ddLGU9Yz9jK2Y6YixlIGluIGEpcmV0dXJuIGU7ZysrfXJldHVybiBkfWZ1bmN0aW9uIHYoKXtyZXR1cm4gdWErK31mdW5jdGlvbiB3KGIpe3ZhciBjPWIub3duZXJEb2N1bWVudHx8YjtyZXR1cm4gYy5kZWZhdWx0Vmlld3x8Yy5wYXJlbnRXaW5kb3d8fGF9ZnVuY3Rpb24geChhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtrKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiB5KGEpe3ZhciBiLGM9YS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIG5ldyhiPWM/Yzp4YT9NOnlhP1A6d2E/UjpMKShhLHopfWZ1bmN0aW9uIHooYSxiLGMpe3ZhciBkPWMucG9pbnRlcnMubGVuZ3RoLGU9Yy5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoLGY9YiZFYSYmZC1lPT09MCxnPWImKEdhfEhhKSYmZC1lPT09MDtjLmlzRmlyc3Q9ISFmLGMuaXNGaW5hbD0hIWcsZiYmKGEuc2Vzc2lvbj17fSksYy5ldmVudFR5cGU9YixBKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIEEoYSxiKXt2YXIgYz1hLnNlc3Npb24sZD1iLnBvaW50ZXJzLGU9ZC5sZW5ndGg7Yy5maXJzdElucHV0fHwoYy5maXJzdElucHV0PUQoYikpLGU+MSYmIWMuZmlyc3RNdWx0aXBsZT9jLmZpcnN0TXVsdGlwbGU9RChiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPUUoZCk7Yi50aW1lU3RhbXA9cmEoKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPUkoaCxpKSxiLmRpc3RhbmNlPUgoaCxpKSxCKGMsYiksYi5vZmZzZXREaXJlY3Rpb249RyhiLmRlbHRhWCxiLmRlbHRhWSk7dmFyIGo9RihiLmRlbHRhVGltZSxiLmRlbHRhWCxiLmRlbHRhWSk7Yi5vdmVyYWxsVmVsb2NpdHlYPWoueCxiLm92ZXJhbGxWZWxvY2l0eVk9ai55LGIub3ZlcmFsbFZlbG9jaXR5PXFhKGoueCk+cWEoai55KT9qLng6ai55LGIuc2NhbGU9Zz9LKGcucG9pbnRlcnMsZCk6MSxiLnJvdGF0aW9uPWc/SihnLnBvaW50ZXJzLGQpOjAsYi5tYXhQb2ludGVycz1jLnByZXZJbnB1dD9iLnBvaW50ZXJzLmxlbmd0aD5jLnByZXZJbnB1dC5tYXhQb2ludGVycz9iLnBvaW50ZXJzLmxlbmd0aDpjLnByZXZJbnB1dC5tYXhQb2ludGVyczpiLnBvaW50ZXJzLmxlbmd0aCxDKGMsYik7dmFyIGs9YS5lbGVtZW50O28oYi5zcmNFdmVudC50YXJnZXQsaykmJihrPWIuc3JjRXZlbnQudGFyZ2V0KSxiLnRhcmdldD1rfWZ1bmN0aW9uIEIoYSxiKXt2YXIgYz1iLmNlbnRlcixkPWEub2Zmc2V0RGVsdGF8fHt9LGU9YS5wcmV2RGVsdGF8fHt9LGY9YS5wcmV2SW5wdXR8fHt9O2IuZXZlbnRUeXBlIT09RWEmJmYuZXZlbnRUeXBlIT09R2F8fChlPWEucHJldkRlbHRhPXt4OmYuZGVsdGFYfHwwLHk6Zi5kZWx0YVl8fDB9LGQ9YS5vZmZzZXREZWx0YT17eDpjLngseTpjLnl9KSxiLmRlbHRhWD1lLngrKGMueC1kLngpLGIuZGVsdGFZPWUueSsoYy55LWQueSl9ZnVuY3Rpb24gQyhhLGIpe3ZhciBjLGUsZixnLGg9YS5sYXN0SW50ZXJ2YWx8fGIsaT1iLnRpbWVTdGFtcC1oLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9SGEmJihpPkRhfHxoLnZlbG9jaXR5PT09ZCkpe3ZhciBqPWIuZGVsdGFYLWguZGVsdGFYLGs9Yi5kZWx0YVktaC5kZWx0YVksbD1GKGksaixrKTtlPWwueCxmPWwueSxjPXFhKGwueCk+cWEobC55KT9sLng6bC55LGc9RyhqLGspLGEubGFzdEludGVydmFsPWJ9ZWxzZSBjPWgudmVsb2NpdHksZT1oLnZlbG9jaXR5WCxmPWgudmVsb2NpdHlZLGc9aC5kaXJlY3Rpb247Yi52ZWxvY2l0eT1jLGIudmVsb2NpdHlYPWUsYi52ZWxvY2l0eVk9ZixiLmRpcmVjdGlvbj1nfWZ1bmN0aW9uIEQoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucG9pbnRlcnMubGVuZ3RoOyliW2NdPXtjbGllbnRYOnBhKGEucG9pbnRlcnNbY10uY2xpZW50WCksY2xpZW50WTpwYShhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpyYSgpLHBvaW50ZXJzOmIsY2VudGVyOkUoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gRShhKXt2YXIgYj1hLmxlbmd0aDtpZigxPT09YilyZXR1cm57eDpwYShhWzBdLmNsaWVudFgpLHk6cGEoYVswXS5jbGllbnRZKX07Zm9yKHZhciBjPTAsZD0wLGU9MDtiPmU7KWMrPWFbZV0uY2xpZW50WCxkKz1hW2VdLmNsaWVudFksZSsrO3JldHVybnt4OnBhKGMvYikseTpwYShkL2IpfX1mdW5jdGlvbiBGKGEsYixjKXtyZXR1cm57eDpiL2F8fDAseTpjL2F8fDB9fWZ1bmN0aW9uIEcoYSxiKXtyZXR1cm4gYT09PWI/SWE6cWEoYSk+PXFhKGIpPzA+YT9KYTpLYTowPmI/TGE6TWF9ZnVuY3Rpb24gSChhLGIsYyl7Y3x8KGM9UWEpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQqZCtlKmUpfWZ1bmN0aW9uIEkoYSxiLGMpe2N8fChjPVFhKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIDE4MCpNYXRoLmF0YW4yKGUsZCkvTWF0aC5QSX1mdW5jdGlvbiBKKGEsYil7cmV0dXJuIEkoYlsxXSxiWzBdLFJhKStJKGFbMV0sYVswXSxSYSl9ZnVuY3Rpb24gSyhhLGIpe3JldHVybiBIKGJbMF0sYlsxXSxSYSkvSChhWzBdLGFbMV0sUmEpfWZ1bmN0aW9uIEwoKXt0aGlzLmV2RWw9VGEsdGhpcy5ldldpbj1VYSx0aGlzLnByZXNzZWQ9ITEseC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTSgpe3RoaXMuZXZFbD1YYSx0aGlzLmV2V2luPVlhLHguYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBOKCl7dGhpcy5ldlRhcmdldD0kYSx0aGlzLmV2V2luPV9hLHRoaXMuc3RhcnRlZD0hMSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBPKGEsYil7dmFyIGM9cyhhLnRvdWNoZXMpLGQ9cyhhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoR2F8SGEpJiYoYz10KGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gUCgpe3RoaXMuZXZUYXJnZXQ9YmIsdGhpcy50YXJnZXRJZHM9e30seC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUShhLGIpe3ZhciBjPXMoYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKEVhfEZhKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXMoYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG8oYS50YXJnZXQsaSl9KSxiPT09RWEpZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoR2F8SGEpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W3QoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBSKCl7eC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9aih0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgUCh0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgTCh0aGlzLm1hbmFnZXIsYSksdGhpcy5wcmltYXJ5VG91Y2g9bnVsbCx0aGlzLmxhc3RUb3VjaGVzPVtdfWZ1bmN0aW9uIFMoYSxiKXthJkVhPyh0aGlzLnByaW1hcnlUb3VjaD1iLmNoYW5nZWRQb2ludGVyc1swXS5pZGVudGlmaWVyLFQuY2FsbCh0aGlzLGIpKTphJihHYXxIYSkmJlQuY2FsbCh0aGlzLGIpfWZ1bmN0aW9uIFQoYSl7dmFyIGI9YS5jaGFuZ2VkUG9pbnRlcnNbMF07aWYoYi5pZGVudGlmaWVyPT09dGhpcy5wcmltYXJ5VG91Y2gpe3ZhciBjPXt4OmIuY2xpZW50WCx5OmIuY2xpZW50WX07dGhpcy5sYXN0VG91Y2hlcy5wdXNoKGMpO3ZhciBkPXRoaXMubGFzdFRvdWNoZXMsZT1mdW5jdGlvbigpe3ZhciBhPWQuaW5kZXhPZihjKTthPi0xJiZkLnNwbGljZShhLDEpfTtzZXRUaW1lb3V0KGUsY2IpfX1mdW5jdGlvbiBVKGEpe2Zvcih2YXIgYj1hLnNyY0V2ZW50LmNsaWVudFgsYz1hLnNyY0V2ZW50LmNsaWVudFksZD0wO2Q8dGhpcy5sYXN0VG91Y2hlcy5sZW5ndGg7ZCsrKXt2YXIgZT10aGlzLmxhc3RUb3VjaGVzW2RdLGY9TWF0aC5hYnMoYi1lLngpLGc9TWF0aC5hYnMoYy1lLnkpO2lmKGRiPj1mJiZkYj49ZylyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBWKGEsYil7dGhpcy5tYW5hZ2VyPWEsdGhpcy5zZXQoYil9ZnVuY3Rpb24gVyhhKXtpZihwKGEsamIpKXJldHVybiBqYjt2YXIgYj1wKGEsa2IpLGM9cChhLGxiKTtyZXR1cm4gYiYmYz9qYjpifHxjP2I/a2I6bGI6cChhLGliKT9pYjpoYn1mdW5jdGlvbiBYKCl7aWYoIWZiKXJldHVybiExO3ZhciBiPXt9LGM9YS5DU1MmJmEuQ1NTLnN1cHBvcnRzO3JldHVybltcImF1dG9cIixcIm1hbmlwdWxhdGlvblwiLFwicGFuLXlcIixcInBhbi14XCIsXCJwYW4teCBwYW4teVwiLFwibm9uZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGQpe2JbZF09Yz9hLkNTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLGQpOiEwfSksYn1mdW5jdGlvbiBZKGEpe3RoaXMub3B0aW9ucz1sYSh7fSx0aGlzLmRlZmF1bHRzLGF8fHt9KSx0aGlzLmlkPXYoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnMuZW5hYmxlPWwodGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1uYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFooYSl7cmV0dXJuIGEmc2I/XCJjYW5jZWxcIjphJnFiP1wiZW5kXCI6YSZwYj9cIm1vdmVcIjphJm9iP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uICQoYSl7cmV0dXJuIGE9PU1hP1wiZG93blwiOmE9PUxhP1widXBcIjphPT1KYT9cImxlZnRcIjphPT1LYT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBfKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gYWEoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBiYSgpe2FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIGNhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsfWZ1bmN0aW9uIGVhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGZhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGdhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wVGltZT0hMSx0aGlzLnBDZW50ZXI9ITEsdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsLHRoaXMuY291bnQ9MH1mdW5jdGlvbiBoYShhLGIpe3JldHVybiBiPWJ8fHt9LGIucmVjb2duaXplcnM9bChiLnJlY29nbml6ZXJzLGhhLmRlZmF1bHRzLnByZXNldCksbmV3IGlhKGEsYil9ZnVuY3Rpb24gaWEoYSxiKXt0aGlzLm9wdGlvbnM9bGEoe30saGEuZGVmYXVsdHMsYnx8e30pLHRoaXMub3B0aW9ucy5pbnB1dFRhcmdldD10aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXR8fGEsdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5yZWNvZ25pemVycz1bXSx0aGlzLm9sZENzc1Byb3BzPXt9LHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9eSh0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBWKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxqYSh0aGlzLCEwKSxnKHRoaXMub3B0aW9ucy5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5lbGVtZW50O2lmKGMuc3R5bGUpe3ZhciBkO2coYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGUsZil7ZD11KGMuc3R5bGUsZiksYj8oYS5vbGRDc3NQcm9wc1tkXT1jLnN0eWxlW2RdLGMuc3R5bGVbZF09ZSk6Yy5zdHlsZVtkXT1hLm9sZENzc1Byb3BzW2RdfHxcIlwifSksYnx8KGEub2xkQ3NzUHJvcHM9e30pfX1mdW5jdGlvbiBrYShhLGMpe3ZhciBkPWIuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtkLmluaXRFdmVudChhLCEwLCEwKSxkLmdlc3R1cmU9YyxjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpfXZhciBsYSxtYT1bXCJcIixcIndlYmtpdFwiLFwiTW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0sbmE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG9hPVwiZnVuY3Rpb25cIixwYT1NYXRoLnJvdW5kLHFhPU1hdGguYWJzLHJhPURhdGUubm93O2xhPVwiZnVuY3Rpb25cIiE9dHlwZW9mIE9iamVjdC5hc3NpZ24/ZnVuY3Rpb24oYSl7aWYoYT09PWR8fG51bGw9PT1hKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7Zm9yKHZhciBiPU9iamVjdChhKSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyl7dmFyIGU9YXJndW1lbnRzW2NdO2lmKGUhPT1kJiZudWxsIT09ZSlmb3IodmFyIGYgaW4gZSllLmhhc093blByb3BlcnR5KGYpJiYoYltmXT1lW2ZdKX1yZXR1cm4gYn06T2JqZWN0LmFzc2lnbjt2YXIgc2E9aChmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfSxcImV4dGVuZFwiLFwiVXNlIGBhc3NpZ25gLlwiKSx0YT1oKGZ1bmN0aW9uKGEsYil7cmV0dXJuIHNhKGEsYiwhMCl9LFwibWVyZ2VcIixcIlVzZSBgYXNzaWduYC5cIiksdWE9MSx2YT0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksd2E9XCJvbnRvdWNoc3RhcnRcImluIGEseGE9dShhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCx5YT13YSYmdmEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx6YT1cInRvdWNoXCIsQWE9XCJwZW5cIixCYT1cIm1vdXNlXCIsQ2E9XCJraW5lY3RcIixEYT0yNSxFYT0xLEZhPTIsR2E9NCxIYT04LElhPTEsSmE9MixLYT00LExhPTgsTWE9MTYsTmE9SmF8S2EsT2E9TGF8TWEsUGE9TmF8T2EsUWE9W1wieFwiLFwieVwiXSxSYT1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO3gucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZtKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZtKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZtKHcodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm4odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm4odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm4odyh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBTYT17bW91c2Vkb3duOkVhLG1vdXNlbW92ZTpGYSxtb3VzZXVwOkdhfSxUYT1cIm1vdXNlZG93blwiLFVhPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtpKEwseCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1TYVthLnR5cGVdO2ImRWEmJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZGYSYmMSE9PWEud2hpY2gmJihiPUdhKSx0aGlzLnByZXNzZWQmJihiJkdhJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpCYSxzcmNFdmVudDphfSkpfX0pO3ZhciBWYT17cG9pbnRlcmRvd246RWEscG9pbnRlcm1vdmU6RmEscG9pbnRlcnVwOkdhLHBvaW50ZXJjYW5jZWw6SGEscG9pbnRlcm91dDpIYX0sV2E9ezI6emEsMzpBYSw0OkJhLDU6Q2F9LFhhPVwicG9pbnRlcmRvd25cIixZYT1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmIWEuUG9pbnRlckV2ZW50JiYoWGE9XCJNU1BvaW50ZXJEb3duXCIsWWE9XCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSxpKE0seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0b3JlLGM9ITEsZD1hLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIixcIlwiKSxlPVZhW2RdLGY9V2FbYS5wb2ludGVyVHlwZV18fGEucG9pbnRlclR5cGUsZz1mPT16YSxoPXIoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJkVhJiYoMD09PWEuYnV0dG9ufHxnKT8wPmgmJihiLnB1c2goYSksaD1iLmxlbmd0aC0xKTplJihHYXxIYSkmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciBaYT17dG91Y2hzdGFydDpFYSx0b3VjaG1vdmU6RmEsdG91Y2hlbmQ6R2EsdG91Y2hjYW5jZWw6SGF9LCRhPVwidG91Y2hzdGFydFwiLF9hPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtpKE4seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1aYVthLnR5cGVdO2lmKGI9PT1FYSYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1PLmNhbGwodGhpcyxhLGIpO2ImKEdhfEhhKSYmY1swXS5sZW5ndGgtY1sxXS5sZW5ndGg9PT0wJiYodGhpcy5zdGFydGVkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnphLHNyY0V2ZW50OmF9KX19fSk7dmFyIGFiPXt0b3VjaHN0YXJ0OkVhLHRvdWNobW92ZTpGYSx0b3VjaGVuZDpHYSx0b3VjaGNhbmNlbDpIYX0sYmI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2koUCx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPWFiW2EudHlwZV0sYz1RLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6emEsc3JjRXZlbnQ6YX0pfX0pO3ZhciBjYj0yNTAwLGRiPTI1O2koUix4LHtoYW5kbGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJUeXBlPT16YSxlPWMucG9pbnRlclR5cGU9PUJhO2lmKCEoZSYmYy5zb3VyY2VDYXBhYmlsaXRpZXMmJmMuc291cmNlQ2FwYWJpbGl0aWVzLmZpcmVzVG91Y2hFdmVudHMpKXtpZihkKVMuY2FsbCh0aGlzLGIsYyk7ZWxzZSBpZihlJiZVLmNhbGwodGhpcyxjKSlyZXR1cm47dGhpcy5jYWxsYmFjayhhLGIsYyl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy50b3VjaC5kZXN0cm95KCksdGhpcy5tb3VzZS5kZXN0cm95KCl9fSk7dmFyIGViPXUobmEuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxmYj1lYiE9PWQsZ2I9XCJjb21wdXRlXCIsaGI9XCJhdXRvXCIsaWI9XCJtYW5pcHVsYXRpb25cIixqYj1cIm5vbmVcIixrYj1cInBhbi14XCIsbGI9XCJwYW4teVwiLG1iPVgoKTtWLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PWdiJiYoYT10aGlzLmNvbXB1dGUoKSksZmImJnRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlJiZtYlthXSYmKHRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlW2ViXT1hKSx0aGlzLmFjdGlvbnM9YS50b0xvd2VyQ2FzZSgpLnRyaW0oKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zZXQodGhpcy5tYW5hZ2VyLm9wdGlvbnMudG91Y2hBY3Rpb24pfSxjb21wdXRlOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIGcodGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGIpe2soYi5vcHRpb25zLmVuYWJsZSxbYl0pJiYoYT1hLmNvbmNhdChiLmdldFRvdWNoQWN0aW9uKCkpKX0pLFcoYS5qb2luKFwiIFwiKSl9LHByZXZlbnREZWZhdWx0czpmdW5jdGlvbihhKXt2YXIgYj1hLnNyY0V2ZW50LGM9YS5vZmZzZXREaXJlY3Rpb247aWYodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKXJldHVybiB2b2lkIGIucHJldmVudERlZmF1bHQoKTt2YXIgZD10aGlzLmFjdGlvbnMsZT1wKGQsamIpJiYhbWJbamJdLGY9cChkLGxiKSYmIW1iW2xiXSxnPXAoZCxrYikmJiFtYltrYl07aWYoZSl7dmFyIGg9MT09PWEucG9pbnRlcnMubGVuZ3RoLGk9YS5kaXN0YW5jZTwyLGo9YS5kZWx0YVRpbWU8MjUwO2lmKGgmJmkmJmopcmV0dXJufXJldHVybiBnJiZmP3ZvaWQgMDplfHxmJiZjJk5hfHxnJiZjJk9hP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9LHByZXZlbnRTcmM6ZnVuY3Rpb24oYSl7dGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkPSEwLGEucHJldmVudERlZmF1bHQoKX19O3ZhciBuYj0xLG9iPTIscGI9NCxxYj04LHJiPXFiLHNiPTE2LHRiPTMyO1kucHJvdG90eXBlPXtkZWZhdWx0czp7fSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGxhKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1fKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBmKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9XyhhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPV8oYSx0aGlzKSwtMT09PXIoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1fKGEsdGhpcyk7dmFyIGI9cih0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtjLm1hbmFnZXIuZW1pdChiLGEpfXZhciBjPXRoaXMsZD10aGlzLnN0YXRlO3FiPmQmJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpLGIoYy5vcHRpb25zLmV2ZW50KSxhLmFkZGl0aW9uYWxFdmVudCYmYihhLmFkZGl0aW9uYWxFdmVudCksZD49cWImJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6dm9pZCh0aGlzLnN0YXRlPXRiKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKHRifG5iKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9bGEoe30sYSk7cmV0dXJuIGsodGhpcy5vcHRpb25zLmVuYWJsZSxbdGhpcyxiXSk/KHRoaXMuc3RhdGUmKHJifHNifHRiKSYmKHRoaXMuc3RhdGU9bmIpLHRoaXMuc3RhdGU9dGhpcy5wcm9jZXNzKGIpLHZvaWQodGhpcy5zdGF0ZSYob2J8cGJ8cWJ8c2IpJiZ0aGlzLnRyeUVtaXQoYikpKToodGhpcy5yZXNldCgpLHZvaWQodGhpcy5zdGF0ZT10YikpfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0saShhYSxZLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKG9ifHBiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJkhhfHwhZSk/YnxzYjpkfHxlP2MmR2E/YnxxYjpiJm9iP2J8cGI6b2I6dGJ9fSksaShiYSxhYSx7ZGVmYXVsdHM6e2V2ZW50OlwicGFuXCIsdGhyZXNob2xkOjEwLHBvaW50ZXJzOjEsZGlyZWN0aW9uOlBhfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5kaXJlY3Rpb24sYj1bXTtyZXR1cm4gYSZOYSYmYi5wdXNoKGxiKSxhJk9hJiZiLnB1c2goa2IpLGJ9LGRpcmVjdGlvblRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9ITAsZD1hLmRpc3RhbmNlLGU9YS5kaXJlY3Rpb24sZj1hLmRlbHRhWCxnPWEuZGVsdGFZO3JldHVybiBlJmIuZGlyZWN0aW9ufHwoYi5kaXJlY3Rpb24mTmE/KGU9MD09PWY/SWE6MD5mP0phOkthLGM9ZiE9dGhpcy5wWCxkPU1hdGguYWJzKGEuZGVsdGFYKSk6KGU9MD09PWc/SWE6MD5nP0xhOk1hLGM9ZyE9dGhpcy5wWSxkPU1hdGguYWJzKGEuZGVsdGFZKSkpLGEuZGlyZWN0aW9uPWUsYyYmZD5iLnRocmVzaG9sZCYmZSZiLmRpcmVjdGlvbn0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGFhLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJm9ifHwhKHRoaXMuc3RhdGUmb2IpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj0kKGEuZGlyZWN0aW9uKTtiJiYoYS5hZGRpdGlvbmFsRXZlbnQ9dGhpcy5vcHRpb25zLmV2ZW50K2IpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoY2EsYWEse2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bamJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJm9iKX0sZW1pdDpmdW5jdGlvbihhKXtpZigxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO2EuYWRkaXRpb25hbEV2ZW50PXRoaXMub3B0aW9ucy5ldmVudCtifXRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoZGEsWSx7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6MjUxLHRocmVzaG9sZDo5fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltoYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKEdhfEhhKSYmIWYpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmRWEpdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXJiLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZHYSlyZXR1cm4gcmI7cmV0dXJuIHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PXJiJiYoYSYmYS5ldmVudFR5cGUmR2E/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPXJhKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLGkoZWEsYWEse2RlZmF1bHRzOntldmVudDpcInJvdGF0ZVwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2piXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEucm90YXRpb24pPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmb2IpfX0pLGkoZmEsYWEse2RlZmF1bHRzOntldmVudDpcInN3aXBlXCIsdGhyZXNob2xkOjEwLHZlbG9jaXR5Oi4zLGRpcmVjdGlvbjpOYXxPYSxwb2ludGVyczoxfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybiBiYS5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBjJihOYXxPYSk/Yj1hLm92ZXJhbGxWZWxvY2l0eTpjJk5hP2I9YS5vdmVyYWxsVmVsb2NpdHlYOmMmT2EmJihiPWEub3ZlcmFsbFZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZjJmEub2Zmc2V0RGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJmEubWF4UG9pbnRlcnM9PXRoaXMub3B0aW9ucy5wb2ludGVycyYmcWEoYik+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZHYX0sZW1pdDpmdW5jdGlvbihhKXt2YXIgYj0kKGEub2Zmc2V0RGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSksaShnYSxZLHtkZWZhdWx0czp7ZXZlbnQ6XCJ0YXBcIixwb2ludGVyczoxLHRhcHM6MSxpbnRlcnZhbDozMDAsdGltZToyNTAsdGhyZXNob2xkOjkscG9zVGhyZXNob2xkOjEwfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltpYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPGIudGltZTtpZih0aGlzLnJlc2V0KCksYS5ldmVudFR5cGUmRWEmJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZiYmYyl7aWYoYS5ldmVudFR5cGUhPUdhKXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGc9dGhpcy5wVGltZT9hLnRpbWVTdGFtcC10aGlzLnBUaW1lPGIuaW50ZXJ2YWw6ITAsaD0hdGhpcy5wQ2VudGVyfHxIKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsaCYmZz90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBpPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1pKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1yYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxvYik6cmJ9cmV0dXJuIHRifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT10Yn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1yYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksaGEuVkVSU0lPTj1cIjIuMC44XCIsaGEuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjpnYixlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbZWEse2VuYWJsZTohMX1dLFtjYSx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtmYSx7ZGlyZWN0aW9uOk5hfV0sW2JhLHtkaXJlY3Rpb246TmF9LFtcInN3aXBlXCJdXSxbZ2FdLFtnYSx7ZXZlbnQ6XCJkb3VibGV0YXBcIix0YXBzOjJ9LFtcInRhcFwiXV0sW2RhXV0sY3NzUHJvcHM6e3VzZXJTZWxlY3Q6XCJub25lXCIsdG91Y2hTZWxlY3Q6XCJub25lXCIsdG91Y2hDYWxsb3V0Olwibm9uZVwiLGNvbnRlbnRab29taW5nOlwibm9uZVwiLHVzZXJEcmFnOlwibm9uZVwiLHRhcEhpZ2hsaWdodENvbG9yOlwicmdiYSgwLDAsMCwwKVwifX07dmFyIHViPTEsdmI9MjtpYS5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXtyZXR1cm4gbGEodGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT92Yjp1Yn0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJnJiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT12Ynx8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKG9ifHBifHFiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgWSlyZXR1cm4gYTtmb3IodmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS5vcHRpb25zLmV2ZW50PT1hKXJldHVybiBiW2NdO3JldHVybiBudWxsfSxhZGQ6ZnVuY3Rpb24oYSl7aWYoZihhLFwiYWRkXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiYmdGhpcy5yZW1vdmUoYiksdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLGEubWFuYWdlcj10aGlzLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlbW92ZVwiLHRoaXMpKXJldHVybiB0aGlzO2lmKGE9dGhpcy5nZXQoYSkpe3ZhciBiPXRoaXMucmVjb2duaXplcnMsYz1yKGIsYSk7LTEhPT1jJiYoYi5zcGxpY2UoYywxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpKX1yZXR1cm4gdGhpc30sb246ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCYmYiE9PWQpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIGcocShhKSxmdW5jdGlvbihhKXtjW2FdPWNbYV18fFtdLGNbYV0ucHVzaChiKX0pLHRoaXN9fSxvZmY6ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCl7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhxKGEpLGZ1bmN0aW9uKGEpe2I/Y1thXSYmY1thXS5zcGxpY2UocihjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc319LGVtaXQ6ZnVuY3Rpb24oYSxiKXt0aGlzLm9wdGlvbnMuZG9tRXZlbnRzJiZrYShhLGIpO3ZhciBjPXRoaXMuaGFuZGxlcnNbYV0mJnRoaXMuaGFuZGxlcnNbYV0uc2xpY2UoKTtpZihjJiZjLmxlbmd0aCl7Yi50eXBlPWEsYi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2Iuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKX07Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDspY1tkXShiKSxkKyt9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50JiZqYSh0aGlzLCExKSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmVsZW1lbnQ9bnVsbH19LGxhKGhhLHtJTlBVVF9TVEFSVDpFYSxJTlBVVF9NT1ZFOkZhLElOUFVUX0VORDpHYSxJTlBVVF9DQU5DRUw6SGEsU1RBVEVfUE9TU0lCTEU6bmIsU1RBVEVfQkVHQU46b2IsU1RBVEVfQ0hBTkdFRDpwYixTVEFURV9FTkRFRDpxYixTVEFURV9SRUNPR05JWkVEOnJiLFNUQVRFX0NBTkNFTExFRDpzYixTVEFURV9GQUlMRUQ6dGIsRElSRUNUSU9OX05PTkU6SWEsRElSRUNUSU9OX0xFRlQ6SmEsRElSRUNUSU9OX1JJR0hUOkthLERJUkVDVElPTl9VUDpMYSxESVJFQ1RJT05fRE9XTjpNYSxESVJFQ1RJT05fSE9SSVpPTlRBTDpOYSxESVJFQ1RJT05fVkVSVElDQUw6T2EsRElSRUNUSU9OX0FMTDpQYSxNYW5hZ2VyOmlhLElucHV0OngsVG91Y2hBY3Rpb246VixUb3VjaElucHV0OlAsTW91c2VJbnB1dDpMLFBvaW50ZXJFdmVudElucHV0Ok0sVG91Y2hNb3VzZUlucHV0OlIsU2luZ2xlVG91Y2hJbnB1dDpOLFJlY29nbml6ZXI6WSxBdHRyUmVjb2duaXplcjphYSxUYXA6Z2EsUGFuOmJhLFN3aXBlOmZhLFBpbmNoOmNhLFJvdGF0ZTplYSxQcmVzczpkYSxvbjptLG9mZjpuLGVhY2g6ZyxtZXJnZTp0YSxleHRlbmQ6c2EsYXNzaWduOmxhLGluaGVyaXQ6aSxiaW5kRm46aixwcmVmaXhlZDp1fSk7dmFyIHdiPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhP2E6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTt3Yi5IYW1tZXI9aGEsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBoYX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWhhOmFbY109aGF9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGFtbWVyLm1pbi5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92ZW5kb3JzL2hhbW1lci9pbmRleC5qcyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoc2xpZGVzKSB7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9faW5uZXJcXFwiIGRhdGEtaG91cmx5LWlubmVyXFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZXJcXFwiIGRhdGEtaG91cmx5LXNsaWRlclxcdTAwM0VcIjtcbi8vIGl0ZXJhdGUgc2xpZGVzXG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IHNsaWRlcztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDAgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDAgPCAkJGw7IHB1Z19pbmRleDArKykge1xuICAgICAgICB2YXIgc2xpZGUgPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlXFxcIlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRpbWVcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHNsaWRlLnRpbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZS10ZW1wIGNlbGNpdXNcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHNsaWRlLnRlbXApID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIHNsaWRlID0gJCRvYmpbcHVnX2luZGV4MF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZVxcXCJcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZS10aW1lXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBzbGlkZS50aW1lKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9fc2xpZGUtdGVtcCBjZWxjaXVzXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBzbGlkZS50ZW1wKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJzbGlkZXNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnNsaWRlczp0eXBlb2Ygc2xpZGVzIT09XCJ1bmRlZmluZWRcIj9zbGlkZXM6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdmlldy9ob3VybHkvdGVtcGxhdGUucHVnXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9faW5uZXJcXFwiIGRhdGEtaG91cmx5LWlubmVyXFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19uYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9fbmEtaW5uZXJcXFwiXFx1MDAzRU5cXHUwMDJGQVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdmlldy9ob3VybHkvdGVtcGxhdGVOQS5wdWdcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUucHVnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leERheXMge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtKS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckhlaWdodCgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtczogZGF0YX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvbmV4LWRheXMvaW5kZXguanMiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGl0ZW1zKSB7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0N1bCBjbGFzcz1cXFwiYWRkaXRpb25fX2xpc3RcXFwiXFx1MDAzRVwiO1xuLy8gaXRlcmF0ZSBpdGVtc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSBpdGVtcztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDAgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDAgPCAkJGw7IHB1Z19pbmRleDArKykge1xuICAgICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuICBcXHUwMDNDbGkgY2xhc3M9XFxcImFkZGl0aW9uX19pdGVtXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheVxcXCIgZGF0YS1uZXh0LWRheVxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X19pbWctd3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKFwiIGNsYXNzPVxcXCJuZXgtZGF5X19pbWdcXFwiXCIrcHVnLmF0dHIoXCJzcmNcIiwgaXRlbS5pbWcsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX2Rlc2NcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fZGF0ZVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5kYXRhKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fd2VhdGhlclxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5tYWluKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3RlbXBcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fdGVtcC1kYXkgY2VsY2l1c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS50ZW1wLmRheSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGl0ZW0gPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcbiAgXFx1MDAzQ2xpIGNsYXNzPVxcXCJhZGRpdGlvbl9faXRlbVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlcXFwiIGRhdGEtbmV4dC1kYXlcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9faW1nLXdyYXBwZXJcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChcIiBjbGFzcz1cXFwibmV4LWRheV9faW1nXFxcIlwiK3B1Zy5hdHRyKFwic3JjXCIsIGl0ZW0uaW1nLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X19kZXNjXFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX2RhdGVcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0uZGF0YSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3dlYXRoZXJcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0ubWFpbikgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X190ZW1wXFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3RlbXAtZGF5IGNlbGNpdXNcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW0udGVtcC5kYXkpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJpdGVtc1wiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguaXRlbXM6dHlwZW9mIGl0ZW1zIT09XCJ1bmRlZmluZWRcIj9pdGVtczp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy92aWV3L25leC1kYXlzL3RlbXBsYXRlLnB1Z1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG5cclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9tYW5hZ2VyLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldE9mZnNldE1hcmdpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9mZnNldE1hcmdpbigpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fY2l0eS12aWV3ZXJcIikuc3R5bGUubWFyZ2luUmlnaHQgPSAtdGhpcy5fZ2V0U2Nyb2xsV2lkdGgoKSArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVPZmZzZXRNYXJnaW4oKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX2NpdHktdmlld2VyXCIpLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBfbWFuYWdlcihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi5tZW51X19jbG9zZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi5tZW51X19vdmVyZmxvd1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibWVudVN3aXBlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudVN3aXBlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlSXNFbXB0eSgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJpcy1lbXB0eVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdGF0ZUlzRW1wdHkoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZW1wdHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFNjcm9sbFdpZHRoKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcclxuICAgICAgICBkaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XHJcbiAgICAgICAgZGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICBkaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIHJldHVybiBzY3JvbGxXaWR0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvbWVudS9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFRlbGVwb3J0QXV0b2NvbXBsZXRlIGZyb20gXCIuLy4uLy4uLy4uL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5qc1wiO1xyXG5pbXBvcnQgIFwiLi8uLi8uLi8uLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzXCI7XHJcbmltcG9ydCBldmVudE1peGluIGZyb20gXCIuLy4uLy4uL2NvbW1vbi9ldmVudE1peGluXCI7XHJcblxyXG5jbGFzcyBTZWFyY2gge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtLmNsYXNzTmFtZX1fX2lucHV0YCk7XHJcblxyXG4gICAgICAgIFRlbGVwb3J0QXV0b2NvbXBsZXRlLmluaXQoaW5wdXQpLm9uKCdjaGFuZ2UnLCBjaXR5RGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRDaXR5RGF0YShjaXR5RGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NlbmRDaXR5RGF0YShjaXR5RGF0YSkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkdldENpdHksIGNpdHlEYXRhKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBFVkVOVFMgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwib25HZXRDaXR5XCI6IFwib25HZXRDaXR5XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvciAodmFyIGtleSBpbiBldmVudE1peGluKSB7XHJcbiAgICBTZWFyY2gucHJvdG90eXBlW2tleV0gPSBldmVudE1peGluW2tleV07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvc2VhcmNoL2luZGV4LmpzIiwiLyohIHRlbGVwb3J0LWF1dG9jb21wbGV0ZSAtIHYwLjMuMSB8IGh0dHBzOi8vZ2l0aHViLmNvbS90ZWxlcG9ydC9hdXRvY29tcGxldGUjcmVhZG1lIHwgTUlUICovXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxlKTtlbHNle3ZhciB0O3Q9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLHQuVGVsZXBvcnRBdXRvY29tcGxldGU9ZSgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4saSl7ZnVuY3Rpb24gcihzLGEpe2lmKCFuW3NdKXtpZighdFtzXSl7dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighYSYmdSlyZXR1cm4gdShzLCEwKTtpZihvKXJldHVybiBvKHMsITApO3ZhciBjPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrcytcIidcIik7dGhyb3cgYy5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGN9dmFyIGw9bltzXT17ZXhwb3J0czp7fX07dFtzXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W3NdWzFdW2VdO3JldHVybiByKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4saSl9cmV0dXJuIG5bc10uZXhwb3J0c31mb3IodmFyIG89XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxzPTA7czxpLmxlbmd0aDtzKyspcihpW3NdKTtyZXR1cm4gcn0oezE6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkua2V5LGkpfX1yZXR1cm4gZnVuY3Rpb24odCxuLGkpe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLGkmJmUodCxpKSx0fX0oKTtlKFwiY2xhc3NsaXN0LXBvbHlmaWxsXCIpLGUoXCJlbGVtZW50LWNsb3Nlc3RcIik7dmFyIHM9ZShcImhhbGZyZWRcIiksYT1pKHMpLHU9ZShcIm1pbml2ZW50c1wiKSxjPWkodSksbD1lKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksZj1pKGwpLGQ9ZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9maW5kXCIpLHA9aShkKSxoPWUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZVwiKSx5PWkoaCksdj1lKFwiZGVib3VuY2VcIiksbT1pKHYpLGc9e0JBQ0s6OCxUQUI6OSxFTlRFUjoxMyxVUDozOCxET1dOOjQwfSxiPSc8ZGl2IGNsYXNzPVwidHAtYXV0b2NvbXBsZXRlXCI+PHVsIGNsYXNzPVwidHAtYWNfX2xpc3RcIj48L3VsPjwvZGl2PicsXz1cInRwLWFjX19pbnB1dFwiLHg9ZnVuY3Rpb24oZSl7cmV0dXJuJzxsaSBjbGFzcz1cInRwLWFjX19pdGVtXCI+JytlK1wiPC9saT5cIn0saz0nPGxpIGNsYXNzPVwidHAtYWNfX2l0ZW0gbm8tcmVzdWx0c1wiPk5vIG1hdGNoZXM8L2xpPicsJD0nPGxpIGNsYXNzPVwidHAtYWNfX2l0ZW0gZ2VvbG9jYXRlXCI+RGV0ZWN0IG15IGN1cnJlbnQgbG9jYXRpb248L2xpPicsdz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy53cmFwTWF0Y2hlcyhlLnRpdGxlKX07SFRNTEVsZW1lbnQucHJvdG90eXBlLm9uPUhUTUxFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLEhUTUxFbGVtZW50LnByb3RvdHlwZS5vZmY9SFRNTEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7dmFyIGo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIHQ9dGhpcyxuPWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT97fTphcmd1bWVudHNbMF0saT1uLmVsLG89dm9pZCAwPT09aT9udWxsOmkscz1uLnZhbHVlLGE9bi5tYXhJdGVtcyx1PXZvaWQgMD09PWE/MTA6YSxsPW4uaXRlbVRlbXBsYXRlLGQ9dm9pZCAwPT09bD93OmwscD1uLmdlb0xvY2F0ZSxoPXZvaWQgMD09PXA/ITA6cCx5PW4uYXBpUm9vdCx2PXZvaWQgMD09PXk/XCJodHRwczovL2FwaS50ZWxlcG9ydC5vcmcvYXBpXCI6eSxnPW4uYXBpVmVyc2lvbixiPXZvaWQgMD09PWc/MTpnLF89bi5lbWJlZHMseD12b2lkIDA9PT1fP1wiY2l0eTpjb3VudHJ5LGNpdHk6YWRtaW4xX2RpdmlzaW9uLGNpdHk6dGltZXpvbmUvdHo6b2Zmc2V0cy1ub3csY2l0eTp1cmJhbl9hcmVhXCI6XztyKHRoaXMsZSksKDAsY1tcImRlZmF1bHRcIl0pKHRoaXMpO3ZhciBrPVwic3RyaW5nXCI9PXR5cGVvZiBvP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobyk6bztyZXR1cm4gdGhpcy5zZXR1cElucHV0KGspLCgwLGZbXCJkZWZhdWx0XCJdKSh0aGlzLHttYXhJdGVtczp1LGdlb0xvY2F0ZTpoLGFwaVJvb3Q6dixhcGlWZXJzaW9uOmIsaXRlbVRlbXBsYXRlOmQsZW1iZWRzOngscmVzdWx0czpbXSxfYWN0aXZlSW5kZXg6MCxfY2FjaGU6e30sX3F1ZXJ5OnRoaXMuZWwudmFsdWUsdmFsdWU6c30pLHRoaXMudmFsdWUmJnRoaXMudmFsdWUudGl0bGU/dGhpcy5xdWVyeT10aGlzLnZhbHVlLnRpdGxlOnRoaXMucXVlcnkmJnRoaXMuZmV0Y2hSZXN1bHRzKGZ1bmN0aW9uKCl7dC52YWx1ZT10LmdldFJlc3VsdEJ5VGl0bGUodC5xdWVyeSksdC5lbWl0KFwiY2hhbmdlXCIsdC52YWx1ZSl9KSx0aGlzLmdldENpdGllcz0oMCxtW1wiZGVmYXVsdFwiXSkodGhpcy5nZXRDaXRpZXMsMjAwKSx0aGlzfXJldHVybiBvKGUsW3trZXk6XCJxdWVyeVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9xdWVyeX0sc2V0OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09dGhpcy5fcXVlcnk/ZToodGhpcy5fcXVlcnk9ZSx0aGlzLmVsLnZhbHVlPWUsdm9pZCB0aGlzLmVtaXQoXCJxdWVyeWNoYW5nZVwiLGUpKX19LHtrZXk6XCJhY3RpdmVJbmRleFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hY3RpdmVJbmRleH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGlzdC5jaGlsZE5vZGVzW3RoaXMuX2FjdGl2ZUluZGV4XTt0JiZ0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIiksdGhpcy5fYWN0aXZlSW5kZXg9ZTt2YXIgbj10aGlzLmxpc3QuY2hpbGROb2Rlc1tlXTtuJiZuLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIil9fSx7a2V5OlwibG9hZGluZ1wiLHNldDpmdW5jdGlvbihlKXt0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic3Bpbm5lclwiLGUpfX1dKSxvKGUsW3trZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsLm9mZihcImlucHV0XCIsdGhpcy5vbmlucHV0KSx0aGlzLmVsLm9mZihcImtleWRvd25cIix0aGlzLm9ua2V5ZG93biksdGhpcy5lbC5vZmYoXCJmb2N1c1wiLHRoaXMub25mb2N1cyksdGhpcy5lbC5vZmYoXCJibHVyXCIsdGhpcy5vbmJsdXIpLHRoaXMuZWwub2ZmKFwiY2xpY2tcIix0aGlzLm9uY2xpY2spLHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShfKTt2YXIgZT10aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlO2UucmVwbGFjZUNoaWxkKHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKSx0aGlzLmNvbnRhaW5lcil9fSx7a2V5OlwiY2xlYXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzdWx0cz1bXSx0aGlzLnNlbGVjdEJ5SW5kZXgoMCl9fSx7a2V5Olwic2V0dXBJbnB1dFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKCEoZSYmZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZWxlbWVudCBnaXZlblwiKTtlLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsYiksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb250YWluZXJcIix7dmFsdWU6ZS5wcmV2aW91c1NpYmxpbmd9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxpc3RcIix7dmFsdWU6dGhpcy5jb250YWluZXIuZmlyc3RDaGlsZH0pO3ZhciB0PXRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksdGhpcy5saXN0KTt0LmNsYXNzTGlzdC5hZGQoXyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJlbFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSx0aGlzLmVsLm9uKFwiaW5wdXRcIix0aGlzLm9uaW5wdXQuYmluZCh0aGlzKSksdGhpcy5lbC5vbihcImtleWRvd25cIix0aGlzLm9ua2V5ZG93bi5iaW5kKHRoaXMpKSx0aGlzLmVsLm9uKFwiZm9jdXNcIix0aGlzLm9uZm9jdXMuYmluZCh0aGlzKSksdGhpcy5lbC5vbihcImJsdXJcIix0aGlzLm9uYmx1ci5iaW5kKHRoaXMpKSx0aGlzLmVsLm9uKFwiY2xpY2tcIix0aGlzLm9uY2xpY2suYmluZCh0aGlzKSksdGhpcy5saXN0Lm9uKFwibW91c2Vkb3duXCIsdGhpcy5vbmxpc3RjbGljay5iaW5kKHRoaXMpKX19LHtrZXk6XCJvbmxpc3RjbGlja1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PVtdLmluZGV4T2YuY2FsbCh0aGlzLmxpc3QuY2hpbGRyZW4sZS50YXJnZXQuY2xvc2VzdChcIi50cC1hY19faXRlbVwiKSk7dGhpcy5zZWxlY3RCeUluZGV4KHQpfX0se2tleTpcIm9uY2xpY2tcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZWwuc2VsZWN0KCl9fSx7a2V5Olwib25mb2N1c1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZW5kZXJMaXN0KCl9fSx7a2V5Olwib25ibHVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmxpc3QuaW5uZXJIVE1MPVwiXCJ9fSx7a2V5Olwib25pbnB1dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLl9xdWVyeT10aGlzLmVsLnZhbHVlLHRoaXMuZmV0Y2hSZXN1bHRzKGZ1bmN0aW9uKCl7cmV0dXJuIGUucmVuZGVyTGlzdCgpfSl9fSx7a2V5Olwib25rZXlkb3duXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5rZXlDb2RlO3N3aXRjaCgtMSE9PVtnLlVQLGcuRE9XTl0uaW5kZXhPZih0KSYmZS5wcmV2ZW50RGVmYXVsdCgpLHQpe2Nhc2UgZy5CQUNLOih0aGlzLnZhbHVlfHwxPT09dGhpcy5xdWVyeS5sZW5ndGgpJiZ0aGlzLmNsZWFyKCk7YnJlYWs7Y2FzZSBnLkVOVEVSOiF0aGlzLnZhbHVlJiZ0aGlzLnF1ZXJ5JiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5zZWxlY3RCeUluZGV4KHRoaXMuYWN0aXZlSW5kZXgpO2JyZWFrO2Nhc2UgZy5UQUI6dGhpcy52YWx1ZXx8dGhpcy5zZWxlY3RCeUluZGV4KHRoaXMuYWN0aXZlSW5kZXgpO2JyZWFrO2Nhc2UgZy5VUDp0aGlzLmFjdGl2ZUluZGV4PU1hdGgubWF4KDAsdGhpcy5hY3RpdmVJbmRleC0xKTticmVhaztjYXNlIGcuRE9XTjp0aGlzLmFjdGl2ZUluZGV4PU1hdGgubWluKHRoaXMucmVzdWx0cy5sZW5ndGgtMSx0aGlzLmFjdGl2ZUluZGV4KzEpfX19LHtrZXk6XCJzZWxlY3RCeUluZGV4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5hY3RpdmVJbmRleD1lO3ZhciB0PXRoaXMudmFsdWU7dGhpcy52YWx1ZT10aGlzLnJlc3VsdHNbZV18fG51bGw7dmFyIG49dGhpcy5saXN0LmZpcnN0Q2hpbGQmJnRoaXMubGlzdC5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImdlb2xvY2F0ZVwiKTtuJiZ0aGlzLmN1cnJlbnRMb2NhdGlvbigpLHQ9PT10aGlzLnZhbHVlfHxufHx0aGlzLmVtaXQoXCJjaGFuZ2VcIix0aGlzLnZhbHVlKSx0aGlzLmxpc3QuaW5uZXJIVE1MPVwiXCIsdGhpcy5xdWVyeT10aGlzLnZhbHVlP3RoaXMudmFsdWUudGl0bGU6XCJcIn19LHtrZXk6XCJ3cmFwTWF0Y2hlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP1wiXCI6YXJndW1lbnRzWzBdLHQ9ZTtyZXR1cm4gdGhpcy5xdWVyeS5zcGxpdCgvW1xcLFxcc10rLykuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiEhZX0pLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIG49bmV3IFJlZ0V4cCgoMCx5W1wiZGVmYXVsdFwiXSkoZSkrXCIoPyFbXjxdKj58W148Pl0qPC8pXCIsXCJnaVwiKTt0PXQucmVwbGFjZShuLFwiPHNwYW4+JCY8L3NwYW4+XCIpfSksdH19LHtrZXk6XCJyZW5kZXJMaXN0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXSxuPXQuZ2VvTG9jYXRlLGk9dm9pZCAwPT09bj90aGlzLmdlb0xvY2F0ZTpuLHI9dGhpcy5yZXN1bHRzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4geChlLml0ZW1UZW1wbGF0ZSh0KSl9KS5zbGljZSgwLHRoaXMubWF4SXRlbXMpLmpvaW4oXCJcIik7cnx8XCJcIj09PXRoaXMucXVlcnl8fHRoaXMudmFsdWV8fChyPWspLFwiXCI9PT10aGlzLnF1ZXJ5JiZpJiYocj0kKSx0aGlzLmxpc3QuaW5uZXJIVE1MPXIsdGhpcy5hY3RpdmVJbmRleD0wfX0se2tleTpcImdldFJlc3VsdEJ5VGl0bGVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZXN1bHRzJiZlPygwLHBbXCJkZWZhdWx0XCJdKSh0aGlzLnJlc3VsdHMsZnVuY3Rpb24odCl7cmV0dXJuLTEhPT10LnRpdGxlLmluZGV4T2YoZSl9KTpudWxsfX0se2tleTpcImZldGNoUmVzdWx0c1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT9mdW5jdGlvbigpe306YXJndW1lbnRzWzBdO3RoaXMucmVxJiZ0aGlzLnJlcS5hYm9ydCgpO3ZhciBuPXRoaXMuX2NhY2hlW3RoaXMucXVlcnldO3JldHVybiBuPyh0aGlzLnJlc3VsdHM9bix0KCkpOih0aGlzLnJlcT10aGlzLmdldENpdGllcyhmdW5jdGlvbihuKXtlLnJlc3VsdHM9ZS5fY2FjaGVbZS5xdWVyeV09bix0KCksZS5sb2FkaW5nPSExfSksdm9pZCh0aGlzLmxvYWRpbmc9ITApKX19LHtrZXk6XCJjdXJyZW50TG9jYXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1uZXcgWE1MSHR0cFJlcXVlc3Qsbj1cImxvY2F0aW9uOm5lYXJlc3QtY2l0aWVzL2xvY2F0aW9uOm5lYXJlc3QtY2l0eS9cIisodGhpcy5lbWJlZHM/XCJ7XCIrdGhpcy5lbWJlZHMrXCJ9XCI6XCJcIik7dGhpcy5sb2FkaW5nPSEwLHRoaXMub2xkUGxhY2Vob2xkZXI9dGhpcy5lbC5wbGFjZWhvbGRlcix0aGlzLmVsLnBsYWNlaG9sZGVyPVwiRGV0ZWN0aW5nIGxvY2F0aW9uLi4uXCIsbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihpKXt2YXIgcj1pLmNvb3Jkczt0Lm9wZW4oXCJHRVRcIixlLmFwaVJvb3QrXCIvbG9jYXRpb25zL1wiK3IubGF0aXR1ZGUrXCIsXCIrci5sb25naXR1ZGUrXCIvP2VtYmVkPVwiK24pLHQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vdm5kLnRlbGVwb3J0LnZcIitlLmFwaVZlcnNpb24rXCIranNvblwiKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtyZXR1cm4gZS5wYXJzZUxvY2F0aW9uKEpTT04ucGFyc2UodC5yZXNwb25zZSkpfSksdC5zZW5kKCl9LGZ1bmN0aW9uKHQpe3ZhciBuPXQubWVzc2FnZTtlLmxvYWRpbmc9ITEsZS5lbC5wbGFjZWhvbGRlcj1uLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZS5lbC5wbGFjZWhvbGRlcj1lLm9sZFBsYWNlaG9sZGVyfSwzZTMpfSx7dGltZW91dDo1ZTN9KX19LHtrZXk6XCJwYXJzZUxvY2F0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YVtcImRlZmF1bHRcIl0ucGFyc2UoZSksbj10LmVtYmVkZGVkQXJyYXkoXCJsb2NhdGlvbjpuZWFyZXN0LWNpdGllc1wiKVswXTtuJiYodGhpcy5yZXN1bHRzPVt0aGlzLnBhcnNlQ2l0eShuKV0sXCJub3BpY2tcIj09PXRoaXMuZ2VvTG9jYXRlPyh0aGlzLmVsLmZvY3VzKCksdGhpcy5yZW5kZXJMaXN0KHtnZW9Mb2NhdGU6ITF9KSk6dGhpcy5zZWxlY3RCeUluZGV4KDApKSx0aGlzLmxvYWRpbmc9ITEsdGhpcy5lbC5wbGFjZWhvbGRlcj10aGlzLm9sZFBsYWNlaG9sZGVyfX0se2tleTpcImdldENpdGllc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoIXRoaXMucXVlcnkpcmV0dXJuIGUoW10pO3ZhciBuPVwiY2l0eTpzZWFyY2gtcmVzdWx0cy9jaXR5Oml0ZW0vXCIrKHRoaXMuZW1iZWRzP1wie1wiK3RoaXMuZW1iZWRzK1wifVwiOlwiXCIpLGk9bmV3IFhNTEh0dHBSZXF1ZXN0O3JldHVybiBpLm9wZW4oXCJHRVRcIix0aGlzLmFwaVJvb3QrXCIvY2l0aWVzLz9zZWFyY2g9XCIrdGhpcy5xdWVyeStcIiZlbWJlZD1cIituK1wiJmxpbWl0PVwiK3RoaXMubWF4SXRlbXMpLGkuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vdm5kLnRlbGVwb3J0LnZcIit0aGlzLmFwaVZlcnNpb24rXCIranNvblwiKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXt2YXIgbj1hW1wiZGVmYXVsdFwiXS5wYXJzZShKU09OLnBhcnNlKGkucmVzcG9uc2UpKS5lbWJlZGRlZEFycmF5KFwiY2l0eTpzZWFyY2gtcmVzdWx0c1wiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHQucGFyc2VDaXR5KGUpfSk7ZShuKX0pLGkuc2VuZCgpLGl9fSx7a2V5OlwicGFyc2VDaXR5XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5lbWJlZGRlZChcImxvY2F0aW9uOm5lYXJlc3QtY2l0eVwiKXx8ZS5lbWJlZGRlZChcImNpdHk6aXRlbVwiKTt0LmNvdW50cnk9dC5lbWJlZGRlZChcImNpdHk6Y291bnRyeVwiKSx0LmFkbWluMV9kaXZpc2lvbj10LmVtYmVkZGVkKFwiY2l0eTphZG1pbjFfZGl2aXNpb25cIiksdC50aW1lem9uZT10LmVtYmVkZGVkKFwiY2l0eTp0aW1lem9uZVwiKSx0LnVyYmFuX2FyZWE9dC5lbWJlZGRlZChcImNpdHk6dXJiYW5fYXJlYVwiKTt2YXIgbj10LmZ1bGxfbmFtZSxpPXQubmFtZSxyPXQuZ2VvbmFtZV9pZCxvPXQucG9wdWxhdGlvbixzPXQubG9jYXRpb24ubGF0bG9uLGE9cy5sYXRpdHVkZSx1PXMubG9uZ2l0dWRlLGM9ZS5tYXRjaGluZ19mdWxsX25hbWUsbD12b2lkIDA9PT1jP246YyxkPXt0aXRsZTpsLG5hbWU6aSxnZW9uYW1lSWQ6cixsYXRpdHVkZTphLGxvbmdpdHVkZTp1LHBvcHVsYXRpb246b307aWYodC5jb3VudHJ5JiYoMCxmW1wiZGVmYXVsdFwiXSkoZCx7Y291bnRyeTp0LmNvdW50cnkubmFtZX0pLHQuYWRtaW4xX2RpdmlzaW9uKXt2YXIgcD10LmFkbWluMV9kaXZpc2lvbixoPXAubmFtZSx5PXAuZ2VvbmFtZXNfYWRtaW4xX2NvZGU7KDAsZltcImRlZmF1bHRcIl0pKGQse2FkbWluMURpdmlzaW9uOmgsYWRtaW4xRGl2aXNpb25Db2RlOnl9KX1pZih0LnRpbWV6b25lKXt2YXIgdj10LnRpbWV6b25lLmVtYmVkZGVkKFwidHo6b2Zmc2V0cy1ub3dcIik7KDAsZltcImRlZmF1bHRcIl0pKGQse3R6T2Zmc2V0TWludXRlczp2LnRvdGFsX29mZnNldF9taW59KX1pZih0LnVyYmFuX2FyZWEpe3ZhciBtPXQudXJiYW5fYXJlYSxnPW0uc2x1ZyxiPW0ubmFtZSxfPW0udWFfaWQseD1tLnRlbGVwb3J0X2NpdHlfdXJsOygwLGZbXCJkZWZhdWx0XCJdKShkLHt1YU5hbWU6Yix1YUlkOl8sdWFDaXR5VXJsOngsdWFTbHVnOmd9KX1yZXR1cm4gZH19XSxbe2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/e306YXJndW1lbnRzWzFdLGk9XCJzdHJpbmdcIj09dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50PygwLGZbXCJkZWZhdWx0XCJdKShuLHtlbDp0fSk6dDtyZXR1cm4gbmV3IGUoaSl9fV0pLGV9KCk7bltcImRlZmF1bHRcIl09aix0LmV4cG9ydHM9bltcImRlZmF1bHRcIl19LHtcImNsYXNzbGlzdC1wb2x5ZmlsbFwiOjIsXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZmluZFwiOjMsXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiOjQsXCJjb3JlLWpzL2xpYnJhcnkvZm4vcmVnZXhwL2VzY2FwZVwiOjUsZGVib3VuY2U6MzMsXCJlbGVtZW50LWNsb3Nlc3RcIjozNCxoYWxmcmVkOjM1LG1pbml2ZW50czozOX1dLDI6W2Z1bmN0aW9uKGUsdCxuKXtcImRvY3VtZW50XCJpbiB3aW5kb3cuc2VsZiYmKFwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKT8hZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtpZihlLmNsYXNzTGlzdC5hZGQoXCJjMVwiLFwiYzJcIiksIWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzJcIikpe3ZhciB0PWZ1bmN0aW9uKGUpe3ZhciB0PURPTVRva2VuTGlzdC5wcm90b3R5cGVbZV07RE9NVG9rZW5MaXN0LnByb3RvdHlwZVtlXT1mdW5jdGlvbihlKXt2YXIgbixpPWFyZ3VtZW50cy5sZW5ndGg7Zm9yKG49MDtpPm47bisrKWU9YXJndW1lbnRzW25dLHQuY2FsbCh0aGlzLGUpfX07dChcImFkZFwiKSx0KFwicmVtb3ZlXCIpfWlmKGUuY2xhc3NMaXN0LnRvZ2dsZShcImMzXCIsITEpLGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpe3ZhciBuPURPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO0RPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDEgaW4gYXJndW1lbnRzJiYhdGhpcy5jb250YWlucyhlKT09IXQ/dDpuLmNhbGwodGhpcyxlKX19ZT1udWxsfSgpOiFmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtpZihcIkVsZW1lbnRcImluIGUpe3ZhciB0PVwiY2xhc3NMaXN0XCIsbj1cInByb3RvdHlwZVwiLGk9ZS5FbGVtZW50W25dLHI9T2JqZWN0LG89U3RyaW5nW25dLnRyaW18fGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX0scz1BcnJheVtuXS5pbmRleE9mfHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXRoaXMubGVuZ3RoO24+dDt0KyspaWYodCBpbiB0aGlzJiZ0aGlzW3RdPT09ZSlyZXR1cm4gdDtyZXR1cm4tMX0sYT1mdW5jdGlvbihlLHQpe3RoaXMubmFtZT1lLHRoaXMuY29kZT1ET01FeGNlcHRpb25bZV0sdGhpcy5tZXNzYWdlPXR9LHU9ZnVuY3Rpb24oZSx0KXtpZihcIlwiPT09dCl0aHJvdyBuZXcgYShcIlNZTlRBWF9FUlJcIixcIkFuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZFwiKTtpZigvXFxzLy50ZXN0KHQpKXRocm93IG5ldyBhKFwiSU5WQUxJRF9DSEFSQUNURVJfRVJSXCIsXCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIik7cmV0dXJuIHMuY2FsbChlLHQpfSxjPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1vLmNhbGwoZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIiksbj10P3Quc3BsaXQoL1xccysvKTpbXSxpPTAscj1uLmxlbmd0aDtyPmk7aSsrKXRoaXMucHVzaChuW2ldKTt0aGlzLl91cGRhdGVDbGFzc05hbWU9ZnVuY3Rpb24oKXtlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsdGhpcy50b1N0cmluZygpKX19LGw9Y1tuXT1bXSxmPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBjKHRoaXMpfTtpZihhW25dPUVycm9yW25dLGwuaXRlbT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpc1tlXXx8bnVsbH0sbC5jb250YWlucz1mdW5jdGlvbihlKXtyZXR1cm4gZSs9XCJcIiwtMSE9PXUodGhpcyxlKX0sbC5hZGQ9ZnVuY3Rpb24oKXt2YXIgZSx0PWFyZ3VtZW50cyxuPTAsaT10Lmxlbmd0aCxyPSExO2RvIGU9dFtuXStcIlwiLC0xPT09dSh0aGlzLGUpJiYodGhpcy5wdXNoKGUpLHI9ITApO3doaWxlKCsrbjxpKTtyJiZ0aGlzLl91cGRhdGVDbGFzc05hbWUoKX0sbC5yZW1vdmU9ZnVuY3Rpb24oKXt2YXIgZSx0LG49YXJndW1lbnRzLGk9MCxyPW4ubGVuZ3RoLG89ITE7ZG8gZm9yKGU9bltpXStcIlwiLHQ9dSh0aGlzLGUpOy0xIT09dDspdGhpcy5zcGxpY2UodCwxKSxvPSEwLHQ9dSh0aGlzLGUpO3doaWxlKCsraTxyKTtvJiZ0aGlzLl91cGRhdGVDbGFzc05hbWUoKX0sbC50b2dnbGU9ZnVuY3Rpb24oZSx0KXtlKz1cIlwiO3ZhciBuPXRoaXMuY29udGFpbnMoZSksaT1uP3QhPT0hMCYmXCJyZW1vdmVcIjp0IT09ITEmJlwiYWRkXCI7cmV0dXJuIGkmJnRoaXNbaV0oZSksdD09PSEwfHx0PT09ITE/dDohbn0sbC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmpvaW4oXCIgXCIpfSxyLmRlZmluZVByb3BlcnR5KXt2YXIgZD17Z2V0OmYsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9O3RyeXtyLmRlZmluZVByb3BlcnR5KGksdCxkKX1jYXRjaChwKXstMjE0NjgyMzI1Mj09PXAubnVtYmVyJiYoZC5lbnVtZXJhYmxlPSExLHIuZGVmaW5lUHJvcGVydHkoaSx0LGQpKX19ZWxzZSByW25dLl9fZGVmaW5lR2V0dGVyX18mJmkuX19kZWZpbmVHZXR0ZXJfXyh0LGYpfX0od2luZG93LnNlbGYpKX0se31dLDM6W2Z1bmN0aW9uKGUsdCxuKXtlKFwiLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZmluZFwiKSx0LmV4cG9ydHM9ZShcIi4uLy4uL21vZHVsZXMvJC5jb3JlXCIpLkFycmF5LmZpbmR9LHtcIi4uLy4uL21vZHVsZXMvJC5jb3JlXCI6MTEsXCIuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kXCI6Mjl9XSw0OltmdW5jdGlvbihlLHQsbil7ZShcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ25cIiksdC5leHBvcnRzPWUoXCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiKS5PYmplY3QuYXNzaWdufSx7XCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiOjExLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnblwiOjMwfV0sNTpbZnVuY3Rpb24oZSx0LG4pe2UoXCIuLi8uLi9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlXCIpLHQuZXhwb3J0cz1lKFwiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIikuUmVnRXhwLmVzY2FwZX0se1wiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIjoxMSxcIi4uLy4uL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGVcIjozMX1dLDY6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBUeXBlRXJyb3IoZStcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIGV9fSx7fV0sNzpbZnVuY3Rpb24oZSx0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbigpe319LHt9XSw4OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5jdHhcIikscj1lKFwiLi8kLmlvYmplY3RcIiksbz1lKFwiLi8kLnRvLW9iamVjdFwiKSxzPWUoXCIuLyQudG8tbGVuZ3RoXCIpLGE9ZShcIi4vJC5hcnJheS1zcGVjaWVzLWNyZWF0ZVwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9MT09ZSxuPTI9PWUsdT0zPT1lLGM9ND09ZSxsPTY9PWUsZj01PT1lfHxsO3JldHVybiBmdW5jdGlvbihkLHAsaCl7Zm9yKHZhciB5LHYsbT1vKGQpLGc9cihtKSxiPWkocCxoLDMpLF89cyhnLmxlbmd0aCkseD0wLGs9dD9hKGQsXyk6bj9hKGQsMCk6dm9pZCAwO18+eDt4KyspaWYoKGZ8fHggaW4gZykmJih5PWdbeF0sdj1iKHkseCxtKSxlKSlpZih0KWtbeF09djtlbHNlIGlmKHYpc3dpdGNoKGUpe2Nhc2UgMzpyZXR1cm4hMDtjYXNlIDU6cmV0dXJuIHk7Y2FzZSA2OnJldHVybiB4O2Nhc2UgMjprLnB1c2goeSl9ZWxzZSBpZihjKXJldHVybiExO3JldHVybiBsPy0xOnV8fGM/YzprfX19LHtcIi4vJC5hcnJheS1zcGVjaWVzLWNyZWF0ZVwiOjksXCIuLyQuY3R4XCI6MTIsXCIuLyQuaW9iamVjdFwiOjE3LFwiLi8kLnRvLWxlbmd0aFwiOjI1LFwiLi8kLnRvLW9iamVjdFwiOjI2fV0sOTpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuaXMtb2JqZWN0XCIpLHI9ZShcIi4vJC5pcy1hcnJheVwiKSxvPWUoXCIuLyQud2tzXCIpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgbjtyZXR1cm4gcihlKSYmKG49ZS5jb25zdHJ1Y3RvcixcImZ1bmN0aW9uXCIhPXR5cGVvZiBufHxuIT09QXJyYXkmJiFyKG4ucHJvdG90eXBlKXx8KG49dm9pZCAwKSxpKG4pJiYobj1uW29dLG51bGw9PT1uJiYobj12b2lkIDApKSksbmV3KHZvaWQgMD09PW4/QXJyYXk6bikodCl9fSx7XCIuLyQuaXMtYXJyYXlcIjoxOCxcIi4vJC5pcy1vYmplY3RcIjoxOSxcIi4vJC53a3NcIjoyOH1dLDEwOltmdW5jdGlvbihlLHQsbil7dmFyIGk9e30udG9TdHJpbmc7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBpLmNhbGwoZSkuc2xpY2UoOCwtMSl9fSx7fV0sMTE6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT10LmV4cG9ydHM9e3ZlcnNpb246XCIxLjIuNlwifTtcIm51bWJlclwiPT10eXBlb2YgX19lJiYoX19lPWkpfSx7fV0sMTI6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmEtZnVuY3Rpb25cIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxuKXtpZihpKGUpLHZvaWQgMD09PXQpcmV0dXJuIGU7c3dpdGNoKG4pe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIGUuY2FsbCh0LG4pfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4saSl7cmV0dXJuIGUuY2FsbCh0LG4saSl9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24obixpLHIpe3JldHVybiBlLmNhbGwodCxuLGkscil9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHQsYXJndW1lbnRzKX19fSx7XCIuLyQuYS1mdW5jdGlvblwiOjZ9XSwxMzpbZnVuY3Rpb24oZSx0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZih2b2lkIDA9PWUpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK2UpO3JldHVybiBlfX0se31dLDE0OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5nbG9iYWxcIikscj1lKFwiLi8kLmNvcmVcIiksbz1lKFwiLi8kLmN0eFwiKSxzPVwicHJvdG90eXBlXCIsYT1mdW5jdGlvbihlLHQsbil7dmFyIHUsYyxsLGY9ZSZhLkYsZD1lJmEuRyxwPWUmYS5TLGg9ZSZhLlAseT1lJmEuQix2PWUmYS5XLG09ZD9yOnJbdF18fChyW3RdPXt9KSxnPWQ/aTpwP2lbdF06KGlbdF18fHt9KVtzXTtkJiYobj10KTtmb3IodSBpbiBuKWM9IWYmJmcmJnUgaW4gZyxjJiZ1IGluIG18fChsPWM/Z1t1XTpuW3VdLG1bdV09ZCYmXCJmdW5jdGlvblwiIT10eXBlb2YgZ1t1XT9uW3VdOnkmJmM/byhsLGkpOnYmJmdbdV09PWw/ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBlP25ldyBlKHQpOmUodCl9O3JldHVybiB0W3NdPWVbc10sdH0obCk6aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD9vKEZ1bmN0aW9uLmNhbGwsbCk6bCxoJiYoKG1bc118fChtW3NdPXt9KSlbdV09bCkpfTthLkY9MSxhLkc9MixhLlM9NCxhLlA9OCxhLkI9MTYsYS5XPTMyLHQuZXhwb3J0cz1hfSx7XCIuLyQuY29yZVwiOjExLFwiLi8kLmN0eFwiOjEyLFwiLi8kLmdsb2JhbFwiOjE2fV0sMTU6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiEhZSgpfWNhdGNoKHQpe3JldHVybiEwfX19LHt9XSwxNjpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPWkpfSx7fV0sMTc6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmNvZlwiKTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJTdHJpbmdcIj09aShlKT9lLnNwbGl0KFwiXCIpOk9iamVjdChlKX19LHtcIi4vJC5jb2ZcIjoxMH1dLDE4OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5jb2ZcIik7dC5leHBvcnRzPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiQXJyYXlcIj09aShlKX19LHtcIi4vJC5jb2ZcIjoxMH1dLDE5OltmdW5jdGlvbihlLHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP251bGwhPT1lOlwiZnVuY3Rpb25cIj09dHlwZW9mIGV9fSx7fV0sMjA6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1PYmplY3Q7dC5leHBvcnRzPXtjcmVhdGU6aS5jcmVhdGUsZ2V0UHJvdG86aS5nZXRQcm90b3R5cGVPZixpc0VudW06e30ucHJvcGVydHlJc0VudW1lcmFibGUsZ2V0RGVzYzppLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixzZXREZXNjOmkuZGVmaW5lUHJvcGVydHksc2V0RGVzY3M6aS5kZWZpbmVQcm9wZXJ0aWVzLGdldEtleXM6aS5rZXlzLGdldE5hbWVzOmkuZ2V0T3duUHJvcGVydHlOYW1lcyxnZXRTeW1ib2xzOmkuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGVhY2g6W10uZm9yRWFjaH19LHt9XSwyMTpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyRcIikscj1lKFwiLi8kLnRvLW9iamVjdFwiKSxvPWUoXCIuLyQuaW9iamVjdFwiKTt0LmV4cG9ydHM9ZShcIi4vJC5mYWlsc1wiKShmdW5jdGlvbigpe3ZhciBlPU9iamVjdC5hc3NpZ24sdD17fSxuPXt9LGk9U3ltYm9sKCkscj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbaV09NyxyLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7bltlXT1lfSksNyE9ZSh7fSx0KVtpXXx8T2JqZWN0LmtleXMoZSh7fSxuKSkuam9pbihcIlwiKSE9cn0pP2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPXIoZSkscz1hcmd1bWVudHMsYT1zLmxlbmd0aCx1PTEsYz1pLmdldEtleXMsbD1pLmdldFN5bWJvbHMsZj1pLmlzRW51bTthPnU7KWZvcih2YXIgZCxwPW8oc1t1KytdKSxoPWw/YyhwKS5jb25jYXQobChwKSk6YyhwKSx5PWgubGVuZ3RoLHY9MDt5PnY7KWYuY2FsbChwLGQ9aFt2KytdKSYmKG5bZF09cFtkXSk7cmV0dXJuIG59Ok9iamVjdC5hc3NpZ259LHtcIi4vJFwiOjIwLFwiLi8kLmZhaWxzXCI6MTUsXCIuLyQuaW9iamVjdFwiOjE3LFwiLi8kLnRvLW9iamVjdFwiOjI2fV0sMjI6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgbj10PT09T2JqZWN0KHQpP2Z1bmN0aW9uKGUpe3JldHVybiB0W2VdfTp0O3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gU3RyaW5nKHQpLnJlcGxhY2UoZSxuKX19fSx7fV0sMjM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmdsb2JhbFwiKSxyPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsbz1pW3JdfHwoaVtyXT17fSk7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBvW2VdfHwob1tlXT17fSl9fSx7XCIuLyQuZ2xvYmFsXCI6MTZ9XSwyNDpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPU1hdGguY2VpbCxyPU1hdGguZmxvb3I7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBpc05hTihlPStlKT8wOihlPjA/cjppKShlKX19LHt9XSwyNTpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQudG8taW50ZWdlclwiKSxyPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZT4wP3IoaShlKSw5MDA3MTk5MjU0NzQwOTkxKTowfX0se1wiLi8kLnRvLWludGVnZXJcIjoyNH1dLDI2OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5kZWZpbmVkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0KGkoZSkpfX0se1wiLi8kLmRlZmluZWRcIjoxM31dLDI3OltmdW5jdGlvbihlLHQsbil7dmFyIGk9MCxyPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT1lP1wiXCI6ZSxcIilfXCIsKCsraStyKS50b1N0cmluZygzNikpfX0se31dLDI4OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5zaGFyZWRcIikoXCJ3a3NcIikscj1lKFwiLi8kLnVpZFwiKSxvPWUoXCIuLyQuZ2xvYmFsXCIpLlN5bWJvbDt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZV18fChpW2VdPW8mJm9bZV18fChvfHxyKShcIlN5bWJvbC5cIitlKSl9fSx7XCIuLyQuZ2xvYmFsXCI6MTYsXCIuLyQuc2hhcmVkXCI6MjMsXCIuLyQudWlkXCI6Mjd9XSwyOTpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPWUoXCIuLyQuZXhwb3J0XCIpLHI9ZShcIi4vJC5hcnJheS1tZXRob2RzXCIpKDUpLG89XCJmaW5kXCIscz0hMDtvIGluW10mJkFycmF5KDEpW29dKGZ1bmN0aW9uKCl7cz0hMX0pLGkoaS5QK2kuRipzLFwiQXJyYXlcIix7ZmluZDpmdW5jdGlvbihlKXtyZXR1cm4gcih0aGlzLGUsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLGUoXCIuLyQuYWRkLXRvLXVuc2NvcGFibGVzXCIpKG8pfSx7XCIuLyQuYWRkLXRvLXVuc2NvcGFibGVzXCI6NyxcIi4vJC5hcnJheS1tZXRob2RzXCI6OCxcIi4vJC5leHBvcnRcIjoxNH1dLDMwOltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5leHBvcnRcIik7aShpLlMraS5GLFwiT2JqZWN0XCIse2Fzc2lnbjplKFwiLi8kLm9iamVjdC1hc3NpZ25cIil9KX0se1wiLi8kLmV4cG9ydFwiOjE0LFwiLi8kLm9iamVjdC1hc3NpZ25cIjoyMX1dLDMxOltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5leHBvcnRcIikscj1lKFwiLi8kLnJlcGxhY2VyXCIpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZyxcIlxcXFwkJlwiKTtpKGkuUyxcIlJlZ0V4cFwiLHtlc2NhcGU6ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSl9fSl9LHtcIi4vJC5leHBvcnRcIjoxNCxcIi4vJC5yZXBsYWNlclwiOjIyfV0sMzI6W2Z1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9dC5leHBvcnRzPURhdGUubm93fHxpfSx7fV0sMzM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiZGF0ZS1ub3dcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKCl7dmFyIGw9aSgpLXU7dD5sJiZsPjA/bz1zZXRUaW1lb3V0KHIsdC1sKToobz1udWxsLG58fChjPWUuYXBwbHkoYSxzKSxvfHwoYT1zPW51bGwpKSl9dmFyIG8scyxhLHUsYztyZXR1cm4gbnVsbD09dCYmKHQ9MTAwKSxmdW5jdGlvbigpe2E9dGhpcyxzPWFyZ3VtZW50cyx1PWkoKTt2YXIgbD1uJiYhbztyZXR1cm4gb3x8KG89c2V0VGltZW91dChyLHQpKSxsJiYoYz1lLmFwcGx5KGEscyksYT1zPW51bGwpLGN9fX0se1wiZGF0ZS1ub3dcIjozMn1dLDM0OltmdW5jdGlvbihlLHQsbil7IWZ1bmN0aW9uKGUpe2UubWF0Y2hlcz1lLm1hdGNoZXN8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLm1zTWF0Y2hlc1NlbGVjdG9yfHxlLm9NYXRjaGVzU2VsZWN0b3J8fGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yLGUuY2xvc2VzdD1lLmNsb3Nlc3R8fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzO3QmJiF0Lm1hdGNoZXMoZSk7KXQ9dC5wYXJlbnRFbGVtZW50O3JldHVybiB0fX0oRWxlbWVudC5wcm90b3R5cGUpfSx7fV0sMzU6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi9saWIvcGFyc2VyXCIpLHI9ZShcIi4vbGliL3Jlc291cmNlXCIpLG89ITE7dC5leHBvcnRzPXtwYXJzZTpmdW5jdGlvbihlKXtyZXR1cm4obmV3IGkpLnBhcnNlKGUsbyl9LGVuYWJsZVZhbGlkYXRpb246ZnVuY3Rpb24oZSl7bz1udWxsIT1lP2U6ITB9LGRpc2FibGVWYWxpZGF0aW9uOmZ1bmN0aW9uKCl7bz0hMX0sUmVzb3VyY2U6cn19LHtcIi4vbGliL3BhcnNlclwiOjM3LFwiLi9saWIvcmVzb3VyY2VcIjozOH1dLDM2OltmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSgpe2FyZ3VtZW50cy5sZW5ndGg+PTE/dGhpcy5fYXJyYXk9YXJndW1lbnRzWzBdOnRoaXMuX2FycmF5PVtdfWkucHJvdG90eXBlLmFycmF5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FycmF5fSxpLnByb3RvdHlwZS5pc0VtcHR5PWZ1bmN0aW9uKGUpe3JldHVybiAwPT09dGhpcy5fYXJyYXkubGVuZ3RofSxpLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX2FycmF5LnNsaWNlKDApO3JldHVybiB0LnB1c2goZSksbmV3IGkodCl9LGkucHJvdG90eXBlLnBvcD1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX2FycmF5LnNsaWNlKDAsdGhpcy5fYXJyYXkubGVuZ3RoLTEpO3JldHVybiBuZXcgaShlKX0saS5wcm90b3R5cGUucGVlaz1mdW5jdGlvbigpe2lmKHRoaXMuaXNFbXB0eSgpKXRocm93IG5ldyBFcnJvcihcImNhbid0IHBlZWsgb24gZW1wdHkgc3RhY2tcIik7cmV0dXJuIHRoaXMuX2FycmF5W3RoaXMuX2FycmF5Lmxlbmd0aC0xXX0sdC5leHBvcnRzPWl9LHt9XSwzNzpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoKXt9ZnVuY3Rpb24gcihlLHQsbil7aWYobnVsbD09ZSlyZXR1cm4gZTt2YXIgaT1vKGUuX2xpbmtzLHQsbi5wdXNoKFwiX2xpbmtzXCIpKSxyPXMoaSksYz1hKGUuX2VtYmVkZGVkLHQsbi5wdXNoKFwiX2VtYmVkZGVkXCIpKSxsPW5ldyBiKGkscixjLHQpO3JldHVybiB1KGUsbCksbC5fb3JpZ2luYWw9ZSxsfWZ1bmN0aW9uIG8oZSx0LG4pe3JldHVybiBlPWMoZSxmLHQsbiksbnVsbCE9ZSYmbnVsbCE9ZS5zZWxmfHx5KFwiUmVzb3VyY2UgZG9lcyBub3QgaGF2ZSBhIHNlbGYgbGlua1wiLHQsbiksZX1mdW5jdGlvbiBzKGUpe3JldHVybiBlP2UuY3VyaWVzOltdfWZ1bmN0aW9uIGEoZSx0LG4pe3ZhciBpPWMoZSxoLHQsbik7cmV0dXJuIG51bGw9PWk/aTooT2JqZWN0LmtleXMoaSkuZm9yRWFjaChmdW5jdGlvbihlKXtpW2VdPWlbZV0ubWFwKGZ1bmN0aW9uKGkpe3ZhciBvPW51bGwhPXQ/W106bnVsbCxzPXIoaSxvLG4ucHVzaChlKSk7cmV0dXJuIHMuX29yaWdpbmFsPWksc30pfSksaSl9ZnVuY3Rpb24gdShlLHQpe09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7XCJfbGlua3NcIiE9PW4mJlwiX2VtYmVkZGVkXCIhPT1uJiYodFtuXT1lW25dKX0pfWZ1bmN0aW9uIGMoZSx0LG4saSl7aWYobnVsbD09ZSlyZXR1cm4gZTt2YXIgcj17fTtyZXR1cm4gT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihvKXtyW29dPWwobyxlW29dLHQsbixpKX0pLHJ9ZnVuY3Rpb24gbChlLHQsbixpLHIpe3JldHVybiBkKHQpP3QubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKGUsdCxpLHIpfSk6W24oZSx0LGkscildfWZ1bmN0aW9uIGYoZSx0LG4saSl7aWYoIXAodCkpdGhyb3cgbmV3IEVycm9yKFwiTGluayBvYmplY3QgaXMgbm90IGFuIGFjdHVhbCBvYmplY3Q6IFwiK3QrXCIgW1wiK3R5cGVvZiB0K1wiXVwiKTt2YXIgcj1tKHQpO3JldHVybiBPYmplY3Qua2V5cyh4KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe251bGw9PXJbdF0mJih4W3RdLnJlcXVpcmVkJiZ5KFwiTGluayBtaXNzZXMgcmVxdWlyZWQgcHJvcGVydHkgXCIrdCtcIi5cIixuLGkucHVzaChlKSksbnVsbCE9eFt0XS5kZWZhdWx0VmFsdWUmJihyW3RdPXhbdF0uZGVmYXVsdFZhbHVlKSl9KSxyLmRlcHJlY2F0aW9uJiZ2KFwiV2FybmluZzogTGluayBcIitnKGkucHVzaChlKSkrXCIgaXMgZGVwcmVjYXRlZCwgc2VlIFwiK3IuZGVwcmVjYXRpb24pLHIudGVtcGxhdGVkIT09ITAmJnIudGVtcGxhdGVkIT09ITEmJihyLnRlbXBsYXRlZD0hMSksbj8oci5ocmVmJiZyLmhyZWYuaW5kZXhPZihcIntcIik+PTAmJiFyLnRlbXBsYXRlZCYmeSgnTGluayBzZWVtcyB0byBiZSBhbiBVUkkgdGVtcGxhdGUgYnV0IGl0cyBcInRlbXBsYXRlZFwiIHByb3BlcnR5IGlzIG5vdCBzZXQgdG8gdHJ1ZS4nLG4saS5wdXNoKGUpKSxyKTpyfWZ1bmN0aW9uIGQoZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfWZ1bmN0aW9uIHAoZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGV9ZnVuY3Rpb24gaChlLHQpe3JldHVybiB0fWZ1bmN0aW9uIHkoZSx0LG4pe3QmJnQucHVzaCh7cGF0aDpnKG4pLG1lc3NhZ2U6ZX0pfWZ1bmN0aW9uIHYoZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGNvbnNvbGUubG9nJiZjb25zb2xlLmxvZyhlKX1mdW5jdGlvbiBtKGUpe3ZhciB0PXt9O3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3Rbbl09ZVtuXX0pLHR9ZnVuY3Rpb24gZyhlKXtmb3IodmFyIHQ9XCIkLlwiLG49MDtuPGUuYXJyYXkoKS5sZW5ndGg7bisrKXQrPWUuYXJyYXkoKVtuXStcIi5cIjtyZXR1cm4gdD10LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpfXZhciBiPWUoXCIuL3Jlc291cmNlXCIpLF89ZShcIi4vaW1tdXRhYmxlX3N0YWNrXCIpLHg9e2hyZWY6e3JlcXVpcmVkOiEwLGRlZmF1bHRWYWx1ZTpudWxsfSx0ZW1wbGF0ZWQ6e3JlcXVpcmVkOiExLGRlZmF1bHRWYWx1ZTohMX0sdHlwZTp7cmVxdWlyZWQ6ITEsZGVmYXVsdFZhbHVlOm51bGx9LGRlcHJlY2F0aW9uOntyZXF1aXJlZDohMSxkZWZhdWx0VmFsdWU6bnVsbH0sbmFtZTp7cmVxdWlyZWQ6ITEsZGVmYXVsdFZhbHVlOm51bGx9LHByb2ZpbGU6e3JlcXVpcmVkOiExLGRlZmF1bHRWYWx1ZTpudWxsfSx0aXRsZTp7cmVxdWlyZWQ6ITEsZGVmYXVsdFZhbHVlOm51bGx9LGhyZWZsYW5nOntyZXF1aXJlZDohMSxkZWZhdWx0VmFsdWU6bnVsbH19O2kucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKGUsdCl7dmFyIG49dD9bXTpudWxsO3JldHVybiByKGUsbixuZXcgXyl9LHQuZXhwb3J0cz1pfSx7XCIuL2ltbXV0YWJsZV9zdGFja1wiOjM2LFwiLi9yZXNvdXJjZVwiOjM4fV0sMzg6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGUsdCxuLGkpe3RoaXMuX2xpbmtzPWV8fHt9LHRoaXMuX2luaXRDdXJpZXModCksdGhpcy5fZW1iZWRkZWQ9bnx8e30sdGhpcy5fdmFsaWRhdGlvbj1pfHxbXX1mdW5jdGlvbiByKGUsdCl7cmV0dXJuIG51bGwhPWU/ZVt0XTpudWxsfWZ1bmN0aW9uIG8oZSx0LG4pe249bnx8MDt2YXIgaT1yKGUsdCk7cmV0dXJuIG51bGwhPWkmJmkubGVuZ3RoPj0xP2lbbl06bnVsbH1pLnByb3RvdHlwZS5faW5pdEN1cmllcz1mdW5jdGlvbihlKXtpZih0aGlzLl9jdXJpZXNNYXA9e30sZSl7dGhpcy5fY3VyaWVzPWU7Zm9yKHZhciB0PTA7dDx0aGlzLl9jdXJpZXMubGVuZ3RoO3QrKyl7dmFyIG49dGhpcy5fY3VyaWVzW3RdO3RoaXMuX2N1cmllc01hcFtuLm5hbWVdPW59fWVsc2UgdGhpcy5fY3VyaWVzPVtdO3RoaXMuX3ByZVJlc29sdmVDdXJpZXMoKX0saS5wcm90b3R5cGUuX3ByZVJlc29sdmVDdXJpZXM9ZnVuY3Rpb24oKXt0aGlzLl9yZXNvbHZlZEN1cmllc01hcD17fTtmb3IodmFyIGU9MDtlPHRoaXMuX2N1cmllcy5sZW5ndGg7ZSsrKXt2YXIgdD10aGlzLl9jdXJpZXNbZV07aWYodC5uYW1lKWZvcih2YXIgbiBpbiB0aGlzLl9saW5rcylcImN1cmllc1wiIT09biYmdGhpcy5fcHJlUmVzb2x2ZUN1cmllKHQsbil9fSxpLnByb3RvdHlwZS5fcHJlUmVzb2x2ZUN1cmllPWZ1bmN0aW9uKGUsdCl7dmFyIG49KHRoaXMuX2xpbmtzW3RdLHQuc3BsaXQoLzooLispLykpLGk9blswXTtpZihlLm5hbWU9PT1pKWlmKGUudGVtcGxhdGVkJiZuLmxlbmd0aD49MSl7dmFyIHI9ZS5ocmVmLnJlcGxhY2UoLyguKil7KC4qKX0oLiopLyxcIiQxXCIrblsxXStcIiQzXCIpO3RoaXMuX3Jlc29sdmVkQ3VyaWVzTWFwW3JdPXR9ZWxzZSB0aGlzLl9yZXNvbHZlZEN1cmllc01hcFtlLmhyZWZdPXR9LGkucHJvdG90eXBlLmFsbExpbmtBcnJheXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbGlua3N9LGkucHJvdG90eXBlLmxpbmtBcnJheT1mdW5jdGlvbihlKXtyZXR1cm4gcih0aGlzLl9saW5rcyxlKX0saS5wcm90b3R5cGUubGluaz1mdW5jdGlvbihlLHQpe3JldHVybiBvKHRoaXMuX2xpbmtzLGUsdCl9LGkucHJvdG90eXBlLmhhc0N1cmllcz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fY3VyaWVzLmxlbmd0aD4wfSxpLnByb3RvdHlwZS5jdXJpZUFycmF5PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9jdXJpZXN9LGkucHJvdG90eXBlLmN1cmllPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9jdXJpZXNNYXBbZV19LGkucHJvdG90eXBlLnJldmVyc2VSZXNvbHZlQ3VyaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX3Jlc29sdmVkQ3VyaWVzTWFwW2VdfSxpLnByb3RvdHlwZS5hbGxFbWJlZGRlZFJlc291cmNlQXJyYXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2VtYmVkZGVkfSxpLnByb3RvdHlwZS5lbWJlZGRlZFJlc291cmNlQXJyYXk9ZnVuY3Rpb24oZSl7cmV0dXJuIHIodGhpcy5fZW1iZWRkZWQsZSl9LGkucHJvdG90eXBlLmVtYmVkZGVkUmVzb3VyY2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbyh0aGlzLl9lbWJlZGRlZCxlLHQpfSxpLnByb3RvdHlwZS5vcmlnaW5hbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9vcmlnaW5hbH0saS5wcm90b3R5cGUudmFsaWRhdGlvbklzc3Vlcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl92YWxpZGF0aW9ufSxpLnByb3RvdHlwZS5hbGxMaW5rcz1pLnByb3RvdHlwZS5hbGxMaW5rQXJyYXlzLGkucHJvdG90eXBlLmFsbEVtYmVkZGVkQXJyYXlzPWkucHJvdG90eXBlLmFsbEVtYmVkZGVkUmVzb3VyY2VzPWkucHJvdG90eXBlLmFsbEVtYmVkZGVkUmVzb3VyY2VBcnJheXMsaS5wcm90b3R5cGUuZW1iZWRkZWRBcnJheT1pLnByb3RvdHlwZS5lbWJlZGRlZFJlc291cmNlQXJyYXksaS5wcm90b3R5cGUuZW1iZWRkZWQ9aS5wcm90b3R5cGUuZW1iZWRkZWRSZXNvdXJjZSxpLnByb3RvdHlwZS52YWxpZGF0aW9uPWkucHJvdG90eXBlLnZhbGlkYXRpb25Jc3N1ZXMsdC5leHBvcnRzPWl9LHt9XSwzOTpbZnVuY3Rpb24oZSx0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17fSxuPVtdO2U9ZXx8dGhpcyxlLm9uPWZ1bmN0aW9uKGUsbixpKXsodFtlXT10W2VdfHxbXSkucHVzaChbbixpXSl9LGUub2ZmPWZ1bmN0aW9uKGUsaSl7ZXx8KHQ9e30pO2Zvcih2YXIgcj10W2VdfHxuLG89ci5sZW5ndGg9aT9yLmxlbmd0aDowO28tLTspaT09cltvXVswXSYmci5zcGxpY2UobywxKX0sZS5lbWl0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgaSxyPXRbZV18fG4sbz0wO2k9cltvKytdOylpWzBdLmFwcGx5KGlbMV0sbi5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSl9fX0se31dfSx7fSxbMV0pKDEpfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9ycy9hdXRvY29tcGxldGUvZGlzdC90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4vdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuL3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuL3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIHRlbGVwb3J0LWF1dG9jb21wbGV0ZSAtIHYwLjMuMSB8IGh0dHBzOi8vZ2l0aHViLmNvbS90ZWxlcG9ydC9hdXRvY29tcGxldGUjcmVhZG1lIHwgTUlUICovXFxuXFxuLnRwLWFjX19pbnB1dCxcXG4udHAtYWNfX2xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsMCwwLC4zNSk7XFxufVxcblxcbi50cC1hdXRvY29tcGxldGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiAyNWVtO1xcbn1cXG5cXG4udHAtYWNfX2lucHV0IHtcXG4gIHBhZGRpbmc6IC4yNWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udHAtYWNfX2lucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi50cC1hY19faW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLnRwLWFjX19pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLnRwLWFjX19pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLnRwLWFjX19pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4udHAtYWNfX2lucHV0OjotbXMtY2xlYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNwaW5uZXIgLnRwLWFjX19pbnB1dCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcXG4gIG1hcmdpbi1yaWdodDogLTEuNWVtO1xcbn1cXG5cXG4udHAtYWNfX2xpc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiAjOTc5Nzk3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogLjg3NWVtO1xcbn1cXG5cXG4udHAtYWNfX2l0ZW0ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IC4zNTcxNGVtIC43MTQyOWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRwLWFjX19pdGVtLmlzLWFjdGl2ZSxcXG4udHAtYWNfX2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuLnRwLWFjX19pdGVtLm5vLXJlc3VsdHMsXFxuLnRwLWFjX19pdGVtLm5vLXJlc3VsdHM6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRwLWFjX19pdGVtIHNwYW4ge1xcbiAgY29sb3I6ICM0YTRhNGE7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uc3Bpbm5lcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogLjVlbTtcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IC0uNjI1ZW07XFxuICBtYXJnaW4tbGVmdDogLS42MjVlbTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsLjMpO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vY3NzLWxvYWRlciEuLi9+L3Jlc29sdmUtdXJsLWxvYWRlciEuLi9+L2F1dG9wcmVmaXhlci1sb2FkZXI/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4vdmVuZG9ycy9hdXRvY29tcGxldGUvZGlzdC90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZXZlbnRNaXhpbiBmcm9tIFwiLi8uLi8uLi9jb21tb24vZXZlbnRNaXhpblwiO1xyXG5pbXBvcnQgdGVtcGxhdGVJdGVtQ2l0eSBmcm9tICcuL2l0ZW0tY2l0eS5wdWcnO1xyXG5pbXBvcnQgdGVtcGxhdGVMaXN0SXRlbXMgZnJvbSAnLi9saXN0LWl0ZW1zLXRlbXBsYXRlLnB1Zyc7XHJcblxyXG5jb25zdCBTRUxFQ1RPUlMgPSB7XHJcbiAgICBjbG9zZUJ1dHRvbjogXCJbZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXVwiLFxyXG4gICAgdmlld2VySXRlbTogXCJbZGF0YS1jaXR5LXZpZXdlci1pdGVtXVwiLFxyXG4gICAgdmlld2VySW5uZXI6IFwiW2RhdGEtY2l0eS12aWV3ZXItaW5uZXJdXCIsXHJcbiAgICBhY3RpdmVDbGFzczogXCJhY3RpdmVcIixcclxuICAgIHByZWxvYWRlck9uQWRkQ2l0eTogXCJbcHJlbG9hZGVyLW9uLWFkZC1jaXR5XVwiXHJcbn07XHJcblxyXG5jbGFzcyBDaXR5Vmlld2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW0pIHtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2l0aWVzOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fbWFuYWdlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbihcIm9uQWRkZWRMaXN0T2ZDaXRpZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Njcm9sbCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMuaXNTY3JvbGwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm5vU2Nyb2xsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGVja1N0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUhlaWdodCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudmlld2VySXRlbSkgPyB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLnZpZXdlckl0ZW0pLmNsaWVudEhlaWdodCA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsSXRlbXNIZWlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXNMaW5ndGggPSB0aGlzLmdldEl0ZW1zTGVuZ3RoKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IHRoaXMuZ2V0SXRlbUhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1NYXJnaW5Cb3R0b20gPSB0aGlzLmdldEl0ZW1NYXJnaW5Cb3R0b20oKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc0xpbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBpdGVtSGVpZ2h0ICsgaXRlbU1hcmdpbkJvdHRvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCArPSBpdGVtSGVpZ2h0O1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXNMZW5ndGgoKSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJlbG9hZGVyT25BZGRDaXR5KCkge1xyXG4gICAgICAgIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLnZpZXdlcklubmVyKTtcclxuXHJcbiAgICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9IFwiY2l0eS12aWV3ZXJfX3ByZWxvYWRlclwiO1xyXG4gICAgICAgIHByZWxvYWRlci5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkZXItb24tYWRkLWNpdHlcIiwgXCJcIik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudmlld2VySXRlbSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuICAgICAgICAgICAgcHJlbG9hZGVyLnN0eWxlLm1hcmdpblRvcCA9IGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wO1xyXG4gICAgICAgICAgICBwcmVsb2FkZXIuc3R5bGUubWFyZ2luQm90dG9tID0gY29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgIHByZWxvYWRlci5zdHlsZS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5uZXIuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBpbm5lci5pbnNlcnRCZWZvcmUocHJlbG9hZGVyLCBpbm5lci5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uU2hvd1ByZWxvYWRlckFkZENpdHksIHRoaXMuaXNTY3JvbGwoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQcmVsb2FkZXJPbkFkZENpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgcHJlbG9hZGVyID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5wcmVsb2FkZXJPbkFkZENpdHkpO1xyXG5cclxuICAgICAgICBpZiAoIXByZWxvYWRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmVsb2FkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcmVsb2FkZXIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25IaWRlUHJlbG9hZGVyQWRkQ2l0eSwgdGhpcy5pc1Njcm9sbCgpKTtcclxuICAgICAgICB9LCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1ByZWxvYWRlck9uQ2l0eShlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2hvdy1wcmVsb2FkZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVByZWxvYWRlck9uQ2l0eShlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1wcmVsb2FkZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9ja1ZpZXdlcigpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJibG9ja2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVubG9ja1ZpZXdlcigpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9ja2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdlckhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbS5jbGllbnRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbU1hcmdpbkJvdHRvbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy52aWV3ZXJJdGVtKSA/IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy52aWV3ZXJJdGVtKSkubWFyZ2luQm90dG9tKSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbXNMZW5ndGgoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMudmlld2VySXRlbSkubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLnZpZXdlcklubmVyKS5jaGlsZHJlbi5sZW5ndGggfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBpc1Njcm9sbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxJdGVtc0hlaWdodCgpID4gdGhpcy5nZXRWaWV3ZXJIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaXR5KGNpdHlEYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2l0eURhdGEpXHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRlbXBsYXRlSXRlbUNpdHkoY2l0eURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBlbGVtO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdFbGVtID0gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudmlld2VySW5uZXIpO1xyXG5cclxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW0sIHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MobmV3RWxlbSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uQWRkQ2l0eSwgdGhpcy5pc1Njcm9sbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0T2ZDaXRpZXMoY2l0aWVzRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSB0ZW1wbGF0ZUxpc3RJdGVtcyh7Y2l0aWVzOiBjaXRpZXNEYXRhfSk7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy52aWV3ZXJJbm5lcik7XHJcblxyXG4gICAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25BZGRlZExpc3RPZkNpdGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX21hbmFnZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMuY2xvc2VCdXR0b24pKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy5jbG9zZUJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kZWxldGVDaXR5KGNsb3NlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy52aWV3ZXJJdGVtKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JTLnZpZXdlckl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0Q2l0eShpdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2VsZWN0Q2l0eShpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgZ2VvSWQgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZ2VvSWRcIik7XHJcbiAgICAgICAgY29uc3QgdHpPZmZzZXRNaW51dGVzID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR6T2Zmc2V0TWludXRlc1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uU2VsZWN0ZWRDaXR5LCB7XHJcbiAgICAgICAgICAgIGdlb0lkLFxyXG4gICAgICAgICAgICB0ek9mZnNldE1pbnV0ZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVsZXRlQ2l0eShlbGVtQ2xvc2UpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZWxlbUNsb3NlLmNsb3Nlc3QoU0VMRUNUT1JTLnZpZXdlckl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IGdlb0lkID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdlb0lkXCIpO1xyXG5cclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhTRUxFQ1RPUlMuYWN0aXZlQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE5ld0FjdGl2ZUVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX29uRGVsZXRlQ2l0eShnZW9JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE5ld0FjdGl2ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3QWN0aXZlRWxlbSA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudmlld2VySXRlbSk7XHJcblxyXG4gICAgICAgIGlmICghbmV3QWN0aXZlRWxlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZWxldEFsbENpdGllcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdENpdHkobmV3QWN0aXZlRWxlbSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRTY3JvbGxUb3AoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0U2Nyb2xsVG9wKCkge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJpc0xhbmRzY2FwZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLnZpZXdlcklubmVyKS5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPj0gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy52aWV3ZXJJbm5lcikuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2V0QWN0aXZlQ2xhc3MoZWxlbSkge1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMudmlld2VySXRlbSk7XHJcblxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNpdGllcykuZm9yRWFjaChjaXR5ID0+IGNpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRlbGV0ZUNpdHkoZ2VvSWQpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZWxldGVDaXR5LCBwYXJzZUludChnZW9JZCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRJdGVtc0xlbmd0aCgpID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZWxldGVDaXR5R2V0RGltZW50aW9uLCB0aGlzLmlzU2Nyb2xsKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja1N0YXRlKCkge1xyXG4gICAgICAgIHRoaXMub24odGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25BZGRDaXR5LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyaXRlU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkFkZGVkTGlzdE9mQ2l0aWVzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyaXRlU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkRlbGV0ZUNpdHksICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fd3JpdGVTdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uRGVsZXRBbGxDaXRpZXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fd3JpdGVTdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdGVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF93cml0ZVN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmNpdGllcyA9IHRoaXMuZ2V0SXRlbXNMZW5ndGgoKTtcclxuICAgICAgICBpZiAodGhpcy5nZXRJdGVtc0xlbmd0aCgpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlLmlzU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUuaXNTY3JvbGwgPSB0aGlzLmlzU2Nyb2xsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXRlLmlzRW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEVWRU5UUygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcIm9uU2VsZWN0ZWRDaXR5XCI6IFwib25TZWxlY3RlZENpdHlcIixcclxuICAgICAgICAgICAgXCJvbkRlbGV0ZUNpdHlcIjogXCJvbkRlbGV0ZUNpdHlcIixcclxuICAgICAgICAgICAgXCJvbkRlbGV0QWxsQ2l0aWVzXCI6IFwib25EZWxldEFsbENpdGllc1wiLFxyXG4gICAgICAgICAgICBcIm9uRGVsZXRlQ2l0eUdldERpbWVudGlvblwiOiBcIm9uRGVsZXRlQ2l0eUdldERpbWVudGlvblwiLFxyXG4gICAgICAgICAgICBcIm9uQWRkQ2l0eVwiOiBcIm9uQWRkQ2l0eVwiLFxyXG4gICAgICAgICAgICBcImlzU2Nyb2xsXCI6IFwiaXNTY3JvbGxcIixcclxuICAgICAgICAgICAgXCJub1Njcm9sbFwiOiBcIm5vU2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIFwib25BZGRlZExpc3RPZkNpdGllc1wiOiBcIm9uQWRkZWRMaXN0T2ZDaXRpZXNcIixcclxuICAgICAgICAgICAgXCJvblNob3dQcmVsb2FkZXJBZGRDaXR5XCI6IFwib25TaG93UHJlbG9hZGVyQWRkQ2l0eVwiLFxyXG4gICAgICAgICAgICBcIm9uSGlkZVByZWxvYWRlckFkZENpdHlcIjogXCJvbkhpZGVQcmVsb2FkZXJBZGRDaXR5XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvciAodmFyIGtleSBpbiBldmVudE1peGluKSB7XHJcbiAgICBDaXR5Vmlld2VyLnByb3RvdHlwZVtrZXldID0gZXZlbnRNaXhpbltrZXldO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXR5Vmlld2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvdmlldy9jaXR5LXZpZXdlci9pbmRleC5qcyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoZ2VvSWQsIG5hbWUsIHR6T2Zmc2V0TWludXRlcykge3ZhciBwdWdfaW5kZW50ID0gW107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDZGl2XCIgKyAoXCIgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIlwiK3B1Zy5hdHRyKFwiZGF0YS1nZW9JZFwiLCBnZW9JZCwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJkYXRhLXR6T2Zmc2V0TWludXRlc1wiLCB0ek9mZnNldE1pbnV0ZXMsIHRydWUsIHRydWUpK1wiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVwiKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IG5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwiZ2VvSWRcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmdlb0lkOnR5cGVvZiBnZW9JZCE9PVwidW5kZWZpbmVkXCI/Z2VvSWQ6dW5kZWZpbmVkLFwibmFtZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgubmFtZTp0eXBlb2YgbmFtZSE9PVwidW5kZWZpbmVkXCI/bmFtZTp1bmRlZmluZWQsXCJ0ek9mZnNldE1pbnV0ZXNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnR6T2Zmc2V0TWludXRlczp0eXBlb2YgdHpPZmZzZXRNaW51dGVzIT09XCJ1bmRlZmluZWRcIj90ek9mZnNldE1pbnV0ZXM6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdmlldy9jaXR5LXZpZXdlci9pdGVtLWNpdHkucHVnXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNpdGllcykge3ZhciBwdWdfaW5kZW50ID0gW107XG4vLyBpdGVyYXRlIGNpdGllc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSBjaXRpZXM7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBwdWdfaW5kZXgwID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyBwdWdfaW5kZXgwIDwgJCRsOyBwdWdfaW5kZXgwKyspIHtcbiAgICAgICAgdmFyIGNpdHkgPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXZcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFtcImNpdHktdmlld2VyX19pdGVtIFwiICsgKChjaXR5LmFjdGl2ZSkgPyBcImFjdGl2ZVwiIDogXCJcIildLCBbdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJkYXRhLWdlb0lkXCIsIGNpdHkuaWQsIHRydWUsIHRydWUpK1wiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVwiK3B1Zy5hdHRyKFwiZGF0YS10ek9mZnNldE1pbnV0ZXNcIiwgY2l0eS50ek9mZnNldE1pbnV0ZXMsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGNpdHkubmFtZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG4gICAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgcHVnX2luZGV4MCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7XG4gICAgICB2YXIgY2l0eSA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1wiY2l0eS12aWV3ZXJfX2l0ZW0gXCIgKyAoKGNpdHkuYWN0aXZlKSA/IFwiYWN0aXZlXCIgOiBcIlwiKV0sIFt0cnVlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcImRhdGEtZ2VvSWRcIiwgY2l0eS5pZCwgdHJ1ZSwgdHJ1ZSkrXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtXCIrcHVnLmF0dHIoXCJkYXRhLXR6T2Zmc2V0TWludXRlc1wiLCBjaXR5LnR6T2Zmc2V0TWludXRlcywgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gY2l0eS5uYW1lKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG59LmNhbGwodGhpcyxcImNpdGllc1wiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY2l0aWVzOnR5cGVvZiBjaXRpZXMhPT1cInVuZGVmaW5lZFwiP2NpdGllczp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy92aWV3L2NpdHktdmlld2VyL2xpc3QtaXRlbXMtdGVtcGxhdGUucHVnXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhRE9DVFlQRSBodG1sXFx1MDAzRVxcblxcdTAwM0NodG1sXFx1MDAzRVxcbiAgXFx1MDAzQ2hlYWRcXHUwMDNFXFxuICAgIFxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDbWV0YSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgbmFtZT1cXFwia2V5d29yZHNcXFwiIGNvbnRlbnQ9XFxcIlxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NtZXRhIG5hbWU9XFxcImF1dGhvclxcXCIgY29udGVudD1cXFwiXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2xpbmsgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZmb250cy5nb29nbGVhcGlzLmNvbVxcdTAwMkZjc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwXFxcIiB0eXBlPVxcXCJ0ZXh0XFx1MDAyRmNzc1xcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0N0aXRsZVxcdTAwM0V3ZWF0aGVyIGFwcCB2MC4wLjFcXG4gICAgXFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXG4gIFxcdTAwM0Nib2R5XFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tIHdyYXBwZXItLVxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFXFxuICAgICAgXFx1MDAzQyEtLSBtYWluY29udGVudC0tXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5jb250ZW50XFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0MhLS0gbWVudS0tXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9tYXJrdXAvX2Jsb2Nrcy9fbWVudS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICAgICAgICBcXHUwMDNDIS0tIEVORCBtZW51LS1cXHUwMDNFXFxuICAgICAgICBcXHUwMDNDIS0tIGNvbnRlbnQtLVxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vbWFya3VwL19ibG9ja3MvX2NvbnRlbnQucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcbiAgICAgICAgXFx1MDAzQyEtLSBFTkQgY29udGVudC0tXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0MhLS0gRU5EIG1haW5jb250ZW50LS1cXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tIEVORCB3cmFwcGVyLS1cXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm92ZXJmbG93XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9wdXBcXFwiXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcInBvcHVwX19pbm5lclxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9pbmRleC5wdWdcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudSBpcy1lbXB0eVxcXCIgZGF0YS1tZW51XFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9faW5uZXJcXFwiXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJtZW51X19jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19zZWFyY2hcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fc2VhcmNoLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2NpdHktdmlld2VyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vX2NpdHktdmlld2VyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX3Rvbmd1ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX292ZXJmbG93XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fbWVudS5wdWdcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2VhcmNoXFxcIiBkYXRhLXNlYXJjaFxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcInNlYXJjaF9faW5uZXJcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDaW5wdXQgY2xhc3M9XFxcInNlYXJjaF9faW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJzdGFydCB0eXBlIGNpdHkncyBuYW1lXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2VhcmNoX19ibG9ja1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vbWFya3VwL19ibG9ja3MvX3NlYXJjaC5wdWdcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJcXFwiIGRhdGEtY2l0eS12aWV3ZXJcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faW5uZXJcXFwiIGRhdGEtY2l0eS12aWV3ZXItaW5uZXJcXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0uY2l0eS12aWV3ZXJfX2l0ZW0oZGF0YS1nZW9JZCA9IFxcXCI2MTY3ODY1XFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0pLmFjdGl2ZS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIHwgVG9yb250bywgQ2FuYWRhLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gICAgYShocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2UgKS5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tLmNpdHktdmlld2VyX19pdGVtKGRhdGEtZ2VvSWQgPSBcXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtKS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIHwgTG9zIEFuZ2VsZXMsIFVTQS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIGEoaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlICkuY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2UtLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLS5jaXR5LXZpZXdlcl9faXRlbShkYXRhLWdlb0lkID0gXFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbSktLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLSAgICB8IExvcyBBbmdlbGVzLCBVU0EtLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLSAgICBhKGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZSApLmNpdHktdmlld2VyX19pdGVtLWNsb3NlLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0uY2l0eS12aWV3ZXJfX2l0ZW0oZGF0YS1nZW9JZCA9IFxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0pLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gICAgfCBMb3MgQW5nZWxlcywgVVNBLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gICAgYShocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2UgKS5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tLmNpdHktdmlld2VyX19pdGVtKGRhdGEtZ2VvSWQgPSBcXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtKS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIHwgTG9zIEFuZ2VsZXMsIFVTQS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIGEoaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlICkuY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2UtLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLS5jaXR5LXZpZXdlcl9faXRlbShkYXRhLWdlb0lkID0gXFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbSktLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLSAgICB8IExvcyBBbmdlbGVzLCBVU0EtLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLSAgICBhKGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZSApLmNpdHktdmlld2VyX19pdGVtLWNsb3NlLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0uY2l0eS12aWV3ZXJfX2l0ZW0oZGF0YS1nZW9JZCA9IFxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0pLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gICAgfCBMb3MgQW5nZWxlcywgVVNBLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gICAgYShocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2UgKS5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tLmNpdHktdmlld2VyX19pdGVtKGRhdGEtZ2VvSWQgPSBcXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtKS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIHwgTG9zIEFuZ2VsZXMsIFVTQS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIGEoaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlICkuY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2UtLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLS5jaXR5LXZpZXdlcl9faXRlbShkYXRhLWdlb0lkID0gXFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbSktLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLSAgICB8IExvcyBBbmdlbGVzLCBVU0EtLVxcdTAwM0VcXG4gICAgXFx1MDAzQyEtLSAgICBhKGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZSApLmNpdHktdmlld2VyX19pdGVtLWNsb3NlLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0uY2l0eS12aWV3ZXJfX2l0ZW0oZGF0YS1nZW9JZCA9IFxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0pLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gICAgfCBMb3MgQW5nZWxlcywgVVNBLS1cXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gICAgYShocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2UgKS5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tLmNpdHktdmlld2VyX19pdGVtKGRhdGEtZ2VvSWQgPSBcXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtKS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIHwgTG9zIEFuZ2VsZXMsIFVTQS0tXFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tICAgIGEoaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlICkuY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2UtLVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2Jsb2NrZXJcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LXZpZXdlci5wdWdcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudFxcXCJcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19pbm5lclxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19jdXJyZW50LWNpdHkucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19hZGRpdGlvbi5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcInByZWxvYWRlclxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3ZWxjb21lLXNjcmVlblxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vbWFya3VwL19ibG9ja3MvX2NvbnRlbnQucHVnXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2l0eSBpbml0XFxcIiBkYXRhLWN1cnJlbnQtY2l0eVxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2l0eV9faW5uZXJcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fY2l0eS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2l0eV9fb3ZlcmxheVxcXCIgZGF0YS1jdXJyZW50LWNpdHktb3ZlcmxheVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY3VycmVudC1jaXR5LnB1Z1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3ZhciBwdWdfaW5kZW50ID0gW107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHlfX25hbWVcXFwiIGRhdGEtY2l0eS1uYW1lXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fZGVzY3JcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19kZXNjci1tYWluXFxcIlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X193ZWF0aGVyXFxcIiBkYXRhLWNpdHktd2VhdGhlclxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X190ZW1wIGNlbGNpdXNcXFwiIGRhdGEtY2l0eS10ZW1wXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fZGVzY3ItaW1nLXdyYXBcXFwiXFx1MDAzRVxcdTAwM0NpbWcgY2xhc3M9XFxcImNpdHlfX2Rlc2NyLWltZ1xcXCIgc3JjPVxcXCJcXFwiIGRhdGEtY2l0eS1pbWdcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fZGF0ZVxcXCIgZGF0YS1jaXR5LWRhdGFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19kZXRhaWxzXFxcIiBkYXRhLWRldGFpbHNcXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gaW5jbHVkZSAuXFx1MDAyRl9kZXRhaWxzLnB1Zy0tXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19ob3VybHlcXFwiIGRhdGEtaG91cmx5XFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tIGluY2x1ZGUgLlxcdTAwMkZfaG91cmx5LnB1Zy0tXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHlfX21vcmVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtbW9yZS1kZXRhaWxzXFx1MDAzRW1vcmUgZGV0YWlsc1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eV9fcmVsb2FkXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXJlbG9hZC1kYXRhXFx1MDAzRVxcdTAwM0NpbWdcIiArIChcIiBjbGFzcz1cXFwiY2l0eV9fcmVsb2FkLWltZ1xcXCJcIitwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKFwiLi8uLi8uLi8uLi9pbWcvcmVmcmVzaGluZy5zdmdcIiksIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY2l0eS5wdWdcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9yZWZyZXNoaW5nLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL3JlZnJlc2hpbmcuc3ZnXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXYgY2xhc3M9XFxcImFkZGl0aW9uXFxcIiBkYXRhLWFkZGl0aW9uXFx1MDAzRVxcbiAgXFx1MDAzQyEtLXVsLmFkZGl0aW9uX19saXN0LS1cXHUwMDNFXFxuICBcXHUwMDNDIS0tICAgIGxpLmFkZGl0aW9uX19pdGVtLS1cXHUwMDNFXFxuICBcXHUwMDNDIS0tICAgICAgICBpbmNsdWRlIC5cXHUwMDJGX25leHQtZGF5LnB1Zy0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICBsaS5hZGRpdGlvbl9faXRlbS0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICAgICAgaW5jbHVkZSAuXFx1MDAyRl9uZXh0LWRheS5wdWctLVxcdTAwM0VcXG4gIFxcdTAwM0MhLS0gICAgbGkuYWRkaXRpb25fX2l0ZW0tLVxcdTAwM0VcXG4gIFxcdTAwM0MhLS0gICAgICAgIGluY2x1ZGUgLlxcdTAwMkZfbmV4dC1kYXkucHVnLS1cXHUwMDNFXFxuICBcXHUwMDNDIS0tICAgIGxpLmFkZGl0aW9uX19pdGVtLS1cXHUwMDNFXFxuICBcXHUwMDNDIS0tICAgICAgICBpbmNsdWRlIC5cXHUwMDJGX25leHQtZGF5LnB1Zy0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICBsaS5hZGRpdGlvbl9faXRlbS0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICAgICAgaW5jbHVkZSAuXFx1MDAyRl9uZXh0LWRheS5wdWctLVxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fYWRkaXRpb24ucHVnXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFZQTtBQUNBOzs7OztBQVpBOzs7QUFHQTtBQUNBO0FDQ0E7QUFDQTtBQUNBOzs7O0FBWkE7OztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUEE7Ozs7QUFJQTtBQUNBO0FIQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBSWhEQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7O0FDcEJBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBekJDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBL0lBOzs7Ozs7QTBCOUVBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBMUJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBd0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBOzs7Ozs7QUFwV0E7QUFDQTtBQUNBO0EwQnFXQTtBMUJDQTs7Ozs7OztBMkIvV0E7QUFDQTs7OztBQUNBO0FBQ0E7QTNCQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQXZEQTtBQUNBO0FBeURBOzs7Ozs7QTRCNURBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBOzs7Ozs7O0FBRUE7QTVCQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7OztBQWhEQTtBQUNBO0FBQ0E7QTRCaURBO0E1QkNBOzs7Ozs7Ozs7Ozs7QTZCekRBOzs7Ozs7OztBQVFBO0E3QkNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQW5PQTtBQUNBO0FBcU9BO0FBQ0E7QUFDQTtBQUNBO0E2QkNBO0FBQ0E7QTdCQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0E4Qm5vQ0E7QUFDQTtBQUNBO0E5QkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7OztBK0JuTEE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QWhDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBZ0NDQTtBaENDQTtBZ0NDQTtBQUNBO0FoQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBZ0NDQTtBQVpBO0FBQ0E7QUFjQTtBaENDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FpQzFjQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FqQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBN0NBO0FBQ0E7QUErQ0E7Ozs7OztBa0NsREE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBbENDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7QUFMQTtBQUNBO0FrQ01BOzs7QWxDQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOztBQUxBO0FBQ0E7QWtDTUE7QWxDQUE7Ozs7OztBbUN6QkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QW5DQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7O0FBdkxBO0FBQ0E7QUFDQTtBbUN3TEE7QW5DQ0E7Ozs7Ozs7QW9DdE1BO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QXBDQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBOzs7Ozs7QUEzUEE7QUFDQTtBQUNBO0FvQzRQQTtBcENDQTs7Ozs7Ozs7QXFDdFFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBckNDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFwRkE7Ozs7OztBc0NKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3UEE7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QXpDQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7Ozs7OztBQXBHQTtBQUNBO0FBQ0E7QXlDcUdBO0F6Q0NBOzs7Ozs7Ozs7OztBMEMvR0E7Ozs7O0FBS0E7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0FBQUE7QUFBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0FBQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QTBDQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QTBDQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0FBQUE7QTBDQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBQUFBO0FBQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0FBQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0FBQUE7QTFDQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBMENBQTtBQUFBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBMENBQTtBMUNBQTtBMENBQTtBMUNBQTtBMENBQTtBMUNBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QTBDQUE7QTFDQUE7QTBDQUE7QTFDQUE7QTBDQUE7QTFDQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QTBDQUE7QUFBQTtBQUFBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBMENBQTtBQUFBO0FBQUE7QUFBQTtBMUNBQTtBQUFBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0FBQUE7QTBDQUE7QTFDQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBMENBQTtBMUNBQTtBQUFBO0FBQUE7QTBDQUE7QTFDQUE7QUFBQTtBMENBQTtBQUFBO0ExQ0FBO0FBQUE7QTBDQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBMENBQTtBQUFBO0FBQUE7QUFBQTtBMUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0EwQ0FBO0ExQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QTBDQUE7QUFBQTtBQUFBO0FBQUE7QTFDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QTJDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0E3Q0FBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUF2QkE7Ozs7OztBOENKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZCQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBO0EvQ0FBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7O0FnRHJFQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FoREFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FpRHRDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBaURBQTtBakRBQTtBaURBQTtBakRBQTtBaURBQTtBakRBQTtBaURBQTtBakRBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FBQUE7QWpEQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FqREFBO0FBQUE7QWlEQUE7QWpEQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBQUFBO0FqREFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QWpEQUE7QWlEQUE7QUFBQTtBakRBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FqREFBO0FpREFBO0FqREFBO0FBQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FpREFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FBQUE7QUFBQTtBakRBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWpEQUE7QUFBQTtBaURBQTtBQUFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QWpEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FBQUE7QWpEQUE7QWlEQUE7QUFBQTtBQUFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FBQUE7QWpEQUE7QWlEQUE7QUFBQTtBQUFBO0FqREFBO0FpREFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBQUFBO0FqREFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FqREFBO0FpREFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FpREFBO0FBQUE7QUFBQTtBakRBQTtBaURBQTtBQUFBO0FBQUE7QUFBQTtBakRBQTtBaURBQTtBQUFBO0FBQUE7QWpEQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FpREFBO0FqREFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBaURBQTtBQUFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBQUFBO0FBQUE7QWpEQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QWpEQUE7QWlEQUE7QWpEQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBQUFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QUFBQTtBQUFBO0FqREFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QWlEQUE7QUFBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBaURBQTtBakRBQTtBaURBQTtBakRBQTtBaURBQTtBQUFBO0FBQUE7QUFBQTtBakRBQTtBQUFBO0FpREFBO0FBQUE7QWpEQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaURBQTtBakRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QWtEREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBcERDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QXFEdlNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=