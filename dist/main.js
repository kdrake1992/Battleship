/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./saira.ttf */ "./src/saira.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./oceanbackground.jpg */ "./src/oceanbackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Fade in effect */\n#fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\n\n/* Fade out effect */\n#fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 12px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: .8em;\n}\n\n.gameBoards {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-left: -27ƒspx;\n}\n\n.gameBoards > div {\n  display: flex;\n  gap: 10px;\n}\n \n#player, #computer {\n  background-color: rgba(222,243,246, 0.8);\n}\n\n#playerWords, #computerWords {\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  text-align: center;\n  background-color: rgba(222,243,246, 0.6);\n}\n\n#computer .square {\n  cursor: crosshair;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Status bar */\n#status {\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.6);\n\n  margin-top: 20px;\n  margin-bottom: 7px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n#status p {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: large;\n\n  text-align: center;\n  overflow: hidden;\n  border-right: .15em solid black;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: .15em;\n  animation: \n    typing 3.5s steps(40,end),\n    blink-caret .75s step-end infinite;\n}\n\n/* Typing effect */\n@keyframes typing {\n  from {width: 0}\n  to {width: 100%;}\n}\n\n@keyframes blink-caret {\n  from, to {border-color: transparent}\n  50% { border-color: black;}\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;EACE,oBAAoB;EACpB,0DAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,UAAU;EACV,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,UAAU;EACV,+CAA+C;AACjD;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;;;EAGnB,gBAAgB;EAChB,yDAA4C;EAC5C,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;;EAER,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,kBAAkB;;EAElB,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;;EAEX,uBAAuB;EACvB,kBAAkB;;EAElB,wCAAwC;AAC1C;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gCAAgC;AAChC;EACE,YAAY;AACd;;AAEA,eAAe;AACf;EACE,YAAY;EACZ,0CAA0C;;EAE1C,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,gBAAgB;;EAEhB,kBAAkB;EAClB,gBAAgB;EAChB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB;;sCAEoC;AACtC;;AAEA,kBAAkB;AAClB;EACE,MAAM,QAAQ;EACd,IAAI,WAAW,CAAC;AAClB;;AAEA;EACE,UAAU,yBAAyB;EACnC,MAAM,mBAAmB,CAAC;AAC5B;;AAEA,WAAW;AACX;EACE,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,SAAS;;EAET,YAAY;EACZ,WAAW;EACX,YAAY;;EAEZ,kBAAkB;AACpB","sourcesContent":["/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url('./saira.ttf') format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Fade in effect */\n#fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\n\n/* Fade out effect */\n#fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(./oceanbackground.jpg);\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 12px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: .8em;\n}\n\n.gameBoards {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-left: -27ƒspx;\n}\n\n.gameBoards > div {\n  display: flex;\n  gap: 10px;\n}\n \n#player, #computer {\n  background-color: rgba(222,243,246, 0.8);\n}\n\n#playerWords, #computerWords {\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  text-align: center;\n  background-color: rgba(222,243,246, 0.6);\n}\n\n#computer .square {\n  cursor: crosshair;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Status bar */\n#status {\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.6);\n\n  margin-top: 20px;\n  margin-bottom: 7px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n#status p {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: large;\n\n  text-align: center;\n  overflow: hidden;\n  border-right: .15em solid black;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: .15em;\n  animation: \n    typing 3.5s steps(40,end),\n    blink-caret .75s step-end infinite;\n}\n\n/* Typing effect */\n@keyframes typing {\n  from {width: 0}\n  to {width: 100%;}\n}\n\n@keyframes blink-caret {\n  from, to {border-color: transparent}\n  50% { border-color: black;}\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((module) => {

const Gameboard = () => {
    // Generates board
    const createBoard = () => {
        let gameBoard = [];
        let row = [];
        for(let i = 0; i <= 9; i++) {
            for(let j = 0; j <= 9; j++) {
                row.push('');
            }
        gameBoard.push(row);
        row = [];
        }
        return gameBoard;
    }

    // Assigns board
    let board = createBoard();

    // Contains ships in game
    let ships = [];

    // Adds ship into ship array
    const addShip = (ship) => {
        ships.push(ship);
    }
    

    // Places ship
    const placeShip = (ship, x, y, placement) => {
        if(placement === 'horizontal') {
            if(x + ship.getLength() <= 10) {
                if(!checkBoard(ship,x,y,placement)) {
                    return false;
                }
                for(let i = x; i < x + ship.getLength(); i++) {
                    board[y][i] = ship.getID();
                }
                ship.setPlacement(placement);
                return true;
            }
            else {
                return false;
            }

        }
        else if (placement  === 'vertical') {
            if(y + ship.getLength() <= 10) {
                if(!checkBoard(ship,x,y,placement)) {
                    return false;
                }
                for(let i = y; i < y + ship.getLength(); i++) {
                    board[i][x] = ship.getID();
                }
                ship.setPlacement(placement);
                return true
            }
            else {
                return false;
            }
        }
    }

    // Checks board if there is a ship already placed 
    const checkBoard = (ship,x,y,placement) => {
        let check = true;
        if(placement === 'horizontal') {
            for(let i = x; i < x + ship.getLength(); i++) {
                if(board[y][i] !== '') {
                        check = false;
                }
            }
            return check;
        }
        else if(placement === 'vertical') {
            for(let i = y; i < y + ship.getLength(); i++) {
                if(board[i][x] !== '') {
                    check = false;
                }
            }
            return check;
        }
    }


    // Checks ship placement for DOM
    const checkPlacement = (ship,x,y,placement) => {
        let check = true;
        if(placement === 'horizontal') {
            for(let i = x; i < x + ship.getLength(); i++) {
                if(board[y][i] !== '') {
                        check = false;
                }
            }
            return check;
        }
        else if(placement === 'vertical') {
            for(let i = y; i < y + ship.getLength(); i++) {
                if(i > 9) {
                    check = false;
                }
                else if(board[i][x] !== '') {
                    check = false;
                }
            }
            return check;
        }
    }

    // Determines whether or ont the attack hit a ship
    // and sends a hit function to the correct ship
    const receiveAttack = (x,y) => {
        if(board[y][x] !== '' && board[y][x] !== 'x' && board[y][x] !== 'o') {
            for(let i = 0; i < ships.length; i++) {
                if(ships[i].getID() === board[y][x]) {
                    for(let j = 0; j < ships[i].shipLayout.length; j++) {
                        if(ships[i].shipLayout[j] === undefined) {
                            ships[i].hit(j+1)
                            break;
                        }
                    }
                    board[y][x] = 'x'
                    return 'hit';
                }
            }
        }
        else if(board[y][x] === 'x') {
            return 'doubleHit'
        }
        else {
            board[y][x] = 'o'
            return 'miss'
        }

    }
    // Checks if all ships have been suck
    const gameOver = () => {
        for(let i = 0; i < ships.length; i++) {
            if(ships[i].isSunk() === false) {
                return false;
            }
        }
        return true;
    }

    return {board, ships, addShip, placeShip, checkPlacement, receiveAttack, gameOver}
}

module.exports = Gameboard;

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Gameboard__WEBPACK_IMPORTED_MODULE_1__);



// Player class
const Player = (name, type) => {
    let playerName = name;
    let turn = false;
    let previousX = '';
    let previousY = '';
    let previousHit = false;
    let counter = 0;

    let board = _Gameboard__WEBPACK_IMPORTED_MODULE_1___default()();

    board.addShip(_ship__WEBPACK_IMPORTED_MODULE_0___default()(5,'Carrier'))
    board.addShip(_ship__WEBPACK_IMPORTED_MODULE_0___default()(4,'Battleship'))
    board.addShip(_ship__WEBPACK_IMPORTED_MODULE_0___default()(3,'Destroyer'))
    board.addShip(_ship__WEBPACK_IMPORTED_MODULE_0___default()(3,'Submarine'))
    board.addShip(_ship__WEBPACK_IMPORTED_MODULE_0___default()(2,'Patrol Boat'))

    // Getters
    const getName = () => {
        return name;
    }

    const getTurn = () => {
        return turn;
    }

    // Setters
    const setName = (newName) => {
        playerName = newName;
    }

    const setTurn = () => {
        if(turn === false) {
            turn = true;
        }
        else if (turn === true) {
            turn = false;
        }
    }

    // Random number generator for the ai
    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    }

    const attack = (x,y, enemy) => {
        if(type === 'human') {
            return enemy.receiveAttack(x,y);
        }

        // Ai will draw a random number for the grid
        // If previous turn was a hit, will hit around.
        else if(type === 'ai') {
            let y =  randomNumber();
            let x =  randomNumber();

            if(previousHit) {
                y = previousY;
                x = previousX;

                console.log('help')
                if(counter <= 3) {
                    let add = 1;
                    if(counter === 0) {
                        if(enemy.receiveAttack(y + 1, x) === 'hit') {
                            previousY = y + 1;
                            previousX = x;
                        }
                        else {
                            counter++;
                            console.log('Miss 1')
                        }
                    }
                    else if(counter === 1) {
                        if(enemy.receiveAttack(y - 1, x) === 'hit') {
                            previousY = y - 1;
                            previousX = x;
                            counter = 0;
                        }
                        else {
                            counter++;
                        }
                    }
                    else if(counter === 2) {
                        if(x + 1 > 9) {
                            counter++;
                        }
                        else if(enemy.receiveAttack(y,  x + 1) === 'hit') {
                            previousY = y;
                            previousX = x + 1;
                            counter = 0;
                        }
                        else {
                            counter++;
                        }
                    }
                    else if(counter === 3) {
                        if(x - 1 < 0) {
                            console.log(x -1)
                            previousHit = false;
                            counter = 0
                        }
                        else if(enemy.receiveAttack(y, x - 1) === 'hit') {
                            previousY = y;
                            previousX = x - 1;
                            counter = 0;
                        }
                        else {
                            previousHit = false;
                            counter = 0;
                        }
                        
                    }
                }
            }
            else if(!previousHit) {
                if(enemy.receiveAttack(y,x) === 'hit') {
                    previousY = y;
                    previousX = x;
                    previousHit = true;
                }

            }
        }
    }

    // Returns the following
    return {board, getName, getTurn, setName, setTurn, randomNumber, attack}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/interaction.js":
/*!****************************!*\
  !*** ./src/interaction.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const interaction = () => {
    let shipNum = 0;
    let ready = false;

    // Create initial divs
    const title = document.createElement('div');
    title.classList.add('title');

    const status = document.createElement('div');
    status.classList.add('status');

    const center = document.createElement('div');
    center.classList.add('center');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    // DOM elements
    const body = document.body;

    // Initial load up
    const loadUp = (player1, player2) => {
        const titleWords = document.createElement('h1');
        const startButton = document.createElement('button');
        startButton.setAttribute('id', 'mainStart')

        const howTo = document.createElement('p');

        titleWords.innerHTML = 'Battleship';
        startButton.innerHTML = 'Start'
        howTo.innerHTML = "<a href='https://www.hasbro.com/common/instruct/battleship.pdf'>How to Play</a>"


        title.appendChild(titleWords);
        title.appendChild(startButton);
        title.appendChild(howTo)

        body.appendChild(title);
        body.appendChild(foot());

        // Initial start button
        const start = document.getElementById('mainStart');
        start.addEventListener('click', e => {
            placement(player1, player2);

            // Once placement is done, move to game
            const battleStart = document.getElementById('battleStart');
            battleStart.addEventListener('click', e => {
                if(ready === true) {
                    fadePlacement();
                    gameInteraction(player1, player2);
                }
            })
        })

        
    }

    // Changes ship placement from horizontal and veritcal
    const direction = () => {
        const directionButton = document.getElementById('direction');
        directionButton.addEventListener('click', e => {
            if(directionButton.innerHTML === 'Horizontal') {
                directionButton.innerHTML = 'Vertical';
            }
            else {
                directionButton.innerHTML = 'Horizontal';
            }
        })
    }

    // Creates the player and enemy 10x10 board
    const boardMaker = (type) => {
        const boards = document.createElement('div')

        let playerBoard = boardGenerator();
        let computerBoard = boardGenerator();

        if(type === 'game') {
            boards.classList.add('gameBoards');
            playerBoard.setAttribute('id', 'player');
            computerBoard.setAttribute('id', 'computer');
            
            const top = document.createElement('div');
            const bot = document.createElement('div');

            const topText = document.createElement('p');
            const botText = document.createElement('p');
            topText.setAttribute('id', 'computerWords');
            botText.setAttribute('id', 'playerWords');

            topText.innerHTML = 'Enemy';
            botText.innerHTML = 'Player';


            top.appendChild(topText);
            top.appendChild(computerBoard);
            bot.appendChild(botText);
            bot.appendChild(playerBoard);

            boards.appendChild(top);
            boards.appendChild(bot);

            return boards
        }

        else {
            boards.classList.add('boards');
            boards.appendChild(playerBoard)
            return boards;
        }
    }

    // Board generator 
    const boardGenerator = () => {
        let board = document.createElement('div');
        board.classList.add('board');

        for(let i = 0; i < (10*10); i++) {
            let square = document.createElement('div') 
            square.classList.add('square');
            square.setAttribute('id', i);
            board.appendChild(square);
        }

        return board;
    }

    // Board reader Fix this
    const boardReader = (type, player, htmlBoard, enemy, loc) => {
        if(type === 'start') {
            let counter = 0;
            for(let i = 0; i <= 9; i++) {
                for(let j = 0; j <= 9; j++) {
                    if(type === 'start') {
                        if(player.board.board[i][j] !== '') {
                            htmlBoard[counter].style.backgroundColor = 'green'
                        }
                    }
                    counter++;
                }
            }
        }
        else if(type === 'attack') {
            let pos = position(loc);
            let x = pos[0];
            let y = pos[1];

            const status = document.getElementById('status')
            if(player.attack(y, x, enemy.board) === 'hit') {
                htmlBoard.childNodes[loc].style.backgroundColor = 'red';
                // status.innerHTML(player.getName() + 'has hit a ship!')

            }
            else {
                htmlBoard.childNodes[loc].style.backgroundColor = 'dodgerblue';
                // status.innerHTML(player.getName() + 'has missed.')
            }
        }
    }

    // Grid to array position
    const position = (location) => {
        let pXY = [];
        let x = 0;
        let y = 0;

        // Gets x axis
        if(location <= 9) {
            x = 0;
        }
        else if(location >= 10 && location <=19) {
            x = 1;
        }
        else if(location >= 20 && location <=29) {
            x = 2;
        }
        else if(location >= 30 && location <=39) {
            x = 3;
        }
        else if(location >= 40 && location <=49) {
            x = 4;
        }
        else if(location >= 50 && location <=59) {
            x = 5;
        }
        else if(location >= 60 && location <=69) {
            x = 6;
        }
        else if(location >= 70 && location <=79) {
            x = 7;
        }
        else if(location >= 80 && location <=89) {
            x = 8;
        }
        else if(location >= 90 && location <=99) {
            x = 9;
        }
        
        // Gets the last digit of the location
        if(location.length === 1) {
            location = location[0];
        }
        else {
            location = location[1];
        }

        // Gets y axis
        if(location == 0) {
            y = 0;
        }
        else if(location == 1) {
            y = 1;
        }
        else if(location == 2) {
            y = 2;
        }
        else if(location == 3) {
            y = 3;
        }
        else if(location == 4) {
            y = 4;
        }
        else if(location == 5) {
            y = 5;
        }
        else if(location == 6) {
            y = 6;
        }
        else if(location == 7) {
            y = 7;
        }
        else if(location == 8) {
            y = 8;
        }
        else if(location == 9) {
            y = 9;
        }

        pXY.push(x);
        pXY.push(y);
        return pXY;
    }


    // Battleship Title at top
    const placement = (player1) => {
        title.innerHTML = '';
        title.style.position = 'relative';
        title.style.padding = '7px';
        title.style.marginTop = '10px';
        footer.style.position = 'relative';

        const titleWords = document.createElement('h1');
        titleWords.innerHTML = 'Battleship';

        // Horizontal/Vertical button
        const directionButton = document.createElement('button');
        directionButton.setAttribute('id', 'direction')
        directionButton.innerHTML = 'Horizontal'

        // Create the player board
        const board = boardMaker();

        // Start battle button
        const startButton = document.createElement('button');
        startButton.setAttribute('id', 'battleStart')
        startButton.innerHTML = 'Start Battle'

        title.appendChild(titleWords);

        body.appendChild(title);
        body.appendChild(directionButton);
        body.appendChild(board)
        body.appendChild(startButton);
        body.appendChild(foot());

        // Sets direction
        direction();

        // Hover over effect
        let playerSquare = document.querySelectorAll('.square');
        let x = 0;
        let y = 0;

        // Remove event listeners
        const removeEvents = (obj) => {
            obj.removeEventListener('mouseout', mouseout)
            obj.removeEventListener('mouseover', mouseover)
            obj.removeEventListener('click', click)
        }

        // Function to check the code
        const checkHover = (e, type) => {
            let loc = position(e.id);

            if(player1.board.checkPlacement(player1.board.ships[shipNum], loc[1], loc[0], directionButton.innerHTML.toLowerCase())) {
                if(directionButton.innerHTML.toLowerCase() == 'horizontal') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + i;
                        let nextPos = document.getElementById(next);
                        if(type === 'mouseover') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'lightgreen';
                        }
                        else if(type === 'mouseout') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'transparent';
                        }
                        else if(type === 'click') {
                            if(i === 0) {
                                player1.board.placeShip(player1.board.ships[shipNum], loc[1], loc[0], directionButton.innerHTML.toLowerCase());
                            }
                            nextPos.style.backgroundColor = 'green';
                            removeEvents(nextPos)
                            if(i + 1 == player1.board.ships[shipNum].getLength()) {
                                shipNum++;
                                break;
                            }
                        }

                    }
                }
                else if(directionButton.innerHTML.toLowerCase() == 'vertical') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + (10 * i);
                        let nextPos = document.getElementById(next);
                        if(type === 'mouseover') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'lightgreen';
                        }
                        else if(type === 'mouseout') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'transparent';
                        }
                        else if(type === 'click') {
                            if(i === 0) {
                                player1.board.placeShip(player1.board.ships[shipNum], loc[1], loc[0], directionButton.innerHTML.toLowerCase());
                            }
                            nextPos.style.backgroundColor = 'green';
                            removeEvents(nextPos);
                            if(i + 1 == player1.board.ships[shipNum].getLength()) {
                                shipNum++;
                                break;
                            }
                        }
                    }
                }
            }
            else {
                if(directionButton.innerHTML.toLowerCase() == 'horizontal') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + i;
                        if((next % 10 === 0)) {
                            break;
                        }
                        else {
                            let nextPos = document.getElementById(next);
                            if(type === 'mouseover') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'red';
                            }
                            if(type === 'mouseout') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'transparent';
                            }
                        }
                    }
                }
                else if(directionButton.innerHTML.toLowerCase() == 'vertical') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + (10 * i);
                        if(next > 99) {
                            break;
                        }
                        else{
                            let nextPos = document.getElementById(next);
                            if(type === 'mouseover') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'red';
                            }
                            if(type === 'mouseout') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'transparent';
                            }
                        }
                    }
                }
            }

            // Removes event listeners once finish
            if(shipNum === 5) {
                playerSquare.forEach(e => {
                    removeEvents(e);
                })
                ready = true;
            }

        }
        // Function handler
        const mouseover = function(e) {
            checkHover(e.target, 'mouseover');
        }
        const mouseout = function(e) {
            checkHover(e.target, 'mouseout');
        }
        const click = function(e) {
            checkHover(e.target, 'click');
        }

        // Listeners for check hover
        playerSquare.forEach(e => {
            e.addEventListener('mouseover', mouseover);
        })
        playerSquare.forEach(e => {
            e.addEventListener('mouseout', mouseout);
        })
        playerSquare.forEach(e => {
            e.addEventListener('click', click)
        })
    }

    // Fade out placement screen
    const fadePlacement = () => {
        // Fade out and remove screens
        const directionButton = document.getElementById('direction');
        const startButton = document.getElementById('battleStart');
        const placementBoard = document.querySelector('.boards');
        
        title.setAttribute('id', 'fadeOut');
        directionButton.setAttribute('id', 'fadeOut');
        startButton.setAttribute('id', 'fadeOut');
        placementBoard.setAttribute('id', 'fadeOut');

        title.remove();
        directionButton.remove();
        startButton.remove();
        placementBoard.remove()
    }

    // Game interaction
    const gameInteraction = (player1, player2) => {
        // Add the 2 new boards and status
        const status = document.createElement('div');
        status.setAttribute('id', 'status');
        const currentStatus = document.createElement('p');
        currentStatus.innerHTML = 'Let the battle begin!'

        let game = boardMaker('game');

        // Align the divs
        status.appendChild(currentStatus);
        const footer = document.querySelector('.footer');
        body.insertBefore(game, footer);
        body.insertBefore(status, game);

        let player = document.querySelector('#player')
        boardReader('start', player1, player.childNodes);

        // Function handler for interaction
        const mouseover = function(e) {
            e.target.style.backgroundColor = 'lightgreen'
        }
        const mouseout = function(e) {
            e.target.style.backgroundColor = 'transparent'
        } 
        const click = function(e) {
            if(player1.getTurn()) {
                boardReader('attack', player1, computer, player2, e.target.id);
                removeEvents(e.target);
                if(!player2.board.gameOver()) {
                    player2.board.ships.forEach(e => {
                        if(e.isSunk() === true) {
                            if(e.getSunkStatus() === false) {
                                e.setSunkStatus()
                            }
                        }
                    });
                    // player1.setTurn();
                    // player2.setTurn();
                }
                else {
                    console.log('Game Over')
                    computer.childNodes.forEach(e => {
                        removeEvents(e);

                    })
                }
            }
            // else if(player2.getTurn()) {
            //     boardReader('attack', player2, computer, player1, e.target.id);
            //     removeEvents(e.target);
            //     if(!player1.board.gameOver()) {
            //         player1.board.ships.forEach(e => {
            //             if(e.isSunk() === true) {
            //                 if(e.getSunkStatus() === false) {
            //                     e.setSunkStatus()
            //                 }
            //             }
            //         });
            //         player1.setTurn();
            //         player2.setTurn();
            //     }
            //     else {
            //         console.log('Game Over')
            //         computer.childNodes.forEach(e => {
            //             removeEvents(e);

            //         })
            //     }
            // }
        }

        // Remove event listeners
        const removeEvents = (obj) => {
            obj.removeEventListener('mouseout', mouseout)
            obj.removeEventListener('mouseover', mouseover)
            obj.removeEventListener('click', click)
        }

        let computer = document.querySelector('#computer')
        computer.childNodes.forEach(e => {
            e.addEventListener('mouseover', mouseover);
            e.addEventListener('mouseout', mouseout);
            e.addEventListener('click', click);
        });

        console.log(player2.board.board);
        // console.log(player1.board.board);

    }

    // Create footer 
    function foot() {
        footer.innerHTML = '<p>Made by Kevin Drake for The Odin Project <a href="https://github.com/kdrake1992"><i class="fa-brands fa-github"></i></a><p>'
        return footer;
    }

    return {loadUp}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interaction);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

// Ship factory function
const ship = (length, name) => {
    // Makes an array equal to the ships length
    const shipLayout = [...Array(length)];
    const id = name.charAt(0);
    let placement = ''
    let sunkStat = false;

    // Return ship length
    const getName = () => {
        return name;
    }   
    
    // Return ship length
    const getLength = () => {
        return length;
    }

    // Return shipID
    const getID = () => {
        return id;
    }

    // Return placement
    const getPlacement = () => {
        return placement;
    }

    // Get sunk status
    const getSunkStatus = () => {
        return sunkStat;
    }

    // Set placement
    const setPlacement = (place) => {
        placement = place;
    }

    // Set sink status
    const setSunkStatus = () => {
        sunkStat = true;
        console.log(name + ' has sunk!')
    }

    // Hits a ship
    const hit = (num) => {
        shipLayout[num-1] = 'x'
    }

    // Checks if the ship has sunk
    const isSunk = () => {
        if(shipLayout.every(e => e === 'x')) {
            return true;
        }
        else {
            return false;
        }
    }

    // Returns the following
    return{shipLayout, getName, getLength, getID, getPlacement, getSunkStatus, setPlacement, setSunkStatus,hit, isSunk}
}

module.exports = ship;

/***/ }),

/***/ "./src/oceanbackground.jpg":
/*!*********************************!*\
  !*** ./src/oceanbackground.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "53fed7640c5b03e1a050.jpg";

/***/ }),

/***/ "./src/saira.ttf":
/*!***********************!*\
  !*** ./src/saira.ttf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d7a7c2d00a230f8e66a3.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction */ "./src/interaction.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player.js");





// Start up game
let game = (0,_interaction__WEBPACK_IMPORTED_MODULE_1__["default"])();

let player1 = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])('Player1', 'human')
let player2 = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])('Player2', 'ai');
player1.setTurn();

let player1Ships = player1.board.ships;
let player2Ships = player2.board.ships;

// Place ships for player and ai
for(let i = 0; i <= player2Ships.length - 1; i++) {
    let y = player2.randomNumber();
    let x = player2.randomNumber();
    let direction = Math.floor(Math.random() * 2) + 1;
    if(direction === 1) {
        direction = 'horizontal';
    }
    else if(direction === 2) {
        direction = 'vertical'
    }

    while(!player2.board.placeShip(player2Ships[i],y,x,direction)) {
        y = player2.randomNumber();
        x = player2.randomNumber();
    }
}

game.loadUp(player1, player2);

// player1.attack(1,0,player2.board);
// player1.attack(2,0,player2.board);
// player1.attack(3,0,player2.board);
// player1.attack(4,0,player2.board);
// player2Ships.forEach(e => {
//     if(e.isSunk() === true) {
//         if(e.getSunkStatus() === false) {
//             e.setSunkStatus()
//         }
//     }
// })

// if(player2.board.gameOver()) {
//     console.log('Game over')
// }

// if(player1.attack(0,1,player2.board) === 'hit' || 'miss') {
//     console.log('bang!')
//     player1.setTurn();
//     player2.setTurn();
// }
// else {
//     console.log('try again')
// }

// for(let i = 0; i < 100; i++) {
//     if(player2.attack(0,0,player1.board) === 'hit' || 'miss') {
//         console.log('bang!')
//         player1.setTurn();
//         player2.setTurn();
//     }
//     else {
//         console.log('try again')
//     }
//     console.log(player1.board.board)
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkMsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUE4QztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOENBQThDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBOEM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOENBQThDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7O0FDN2lCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ29CO0FBQ1g7OztBQUc3QjtBQUNBLFdBQVcsd0RBQVc7O0FBRXRCLGNBQWMsbURBQU07QUFDcEIsY0FBYyxtREFBTTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSw4QkFBOEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zYWlyYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL29jZWFuYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2V0dGluZyBmb250IGluZm9ybWF0aW9uICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBBbGwgYnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZhZGUgaW4gZWZmZWN0ICovXFxuI2ZhZGVJbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgbGluZWFyO1xcbn1cXG5cXG4vKiBGYWRlIG91dCBlZmZlY3QgKi9cXG4jZmFkZU91dCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAycywgb3BhY2l0eSAycyBsaW5lYXI7XFxufVxcblxcbi8qIEJvZHkgKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogVGl0bGUgKi9cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG5cXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRpdGxlIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGl0bGUgYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRpdGxlIGE6aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi50aXRsZSBhOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBCb2FyZHMgZGl2ICovXFxuLmJvYXJkcyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxuXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsMjQzLDI0NiwgMC44KTtcXG59XFxuXFxuLyogUGxheWVyIGFuZCBBSSBCb2FyZCBkaXYgKi9cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogLjhlbTtcXG59XFxuXFxuLmdhbWVCb2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTI3xpJzcHg7XFxufVxcblxcbi5nYW1lQm9hcmRzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbiBcXG4jcGxheWVyLCAjY29tcHV0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsMjQzLDI0NiwgMC44KTtcXG59XFxuXFxuI3BsYXllcldvcmRzLCAjY29tcHV0ZXJXb3JkcyB7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuNik7XFxufVxcblxcbiNjb21wdXRlciAuc3F1YXJlIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4vKiBCdXR0b25zIG9uIHBsYWNlbWVudCBzY3JlZW4gKi9cXG4jZGlyZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLyogU3RhdHVzIGJhciAqL1xcbiNzdGF0dXMge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcblxcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzdGF0dXMgcCB7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIGJsYWNrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4xNWVtO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdHlwaW5nIDMuNXMgc3RlcHMoNDAsZW5kKSxcXG4gICAgYmxpbmstY2FyZXQgLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLyogVHlwaW5nIGVmZmVjdCAqL1xcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge3dpZHRoOiAwfVxcbiAgdG8ge3dpZHRoOiAxMDAlO31cXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XFxuICBmcm9tLCB0byB7Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudH1cXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogYmxhY2s7fVxcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG5cXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZCQUE2QjtBQUM3QjtFQUNFLG9CQUFvQjtFQUNwQiwwREFBcUM7QUFDdkM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsK0NBQStDO0FBQ2pEOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjs7O0VBR25CLGdCQUFnQjtFQUNoQix5REFBNEM7RUFDNUMsc0JBQXNCO0FBQ3hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFFBQVE7O0VBRVIsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7O0VBRVgsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsd0NBQXdDO0FBQzFDOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGVBQWU7QUFDZjtFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7O0VBRTFDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQjs7c0NBRW9DO0FBQ3RDOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLE1BQU0sUUFBUTtFQUNkLElBQUksV0FBVyxDQUFDO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVSx5QkFBeUI7RUFDbkMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTOztFQUVULFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2V0dGluZyBmb250IGluZm9ybWF0aW9uICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJztcXG4gIHNyYzogdXJsKCcuL3NhaXJhLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEFsbCBidXR0b25zICovXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRmFkZSBpbiBlZmZlY3QgKi9cXG4jZmFkZUluIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBsaW5lYXI7XFxufVxcblxcbi8qIEZhZGUgb3V0IGVmZmVjdCAqL1xcbiNmYWRlT3V0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDJzLCBvcGFjaXR5IDJzIGxpbmVhcjtcXG59XFxuXFxuLyogQm9keSAqL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL29jZWFuYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogVGl0bGUgKi9cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG5cXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRpdGxlIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGl0bGUgYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRpdGxlIGE6aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi50aXRsZSBhOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBCb2FyZHMgZGl2ICovXFxuLmJvYXJkcyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxuXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsMjQzLDI0NiwgMC44KTtcXG59XFxuXFxuLyogUGxheWVyIGFuZCBBSSBCb2FyZCBkaXYgKi9cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogLjhlbTtcXG59XFxuXFxuLmdhbWVCb2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTI3xpJzcHg7XFxufVxcblxcbi5nYW1lQm9hcmRzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbiBcXG4jcGxheWVyLCAjY29tcHV0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsMjQzLDI0NiwgMC44KTtcXG59XFxuXFxuI3BsYXllcldvcmRzLCAjY29tcHV0ZXJXb3JkcyB7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuNik7XFxufVxcblxcbiNjb21wdXRlciAuc3F1YXJlIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4vKiBCdXR0b25zIG9uIHBsYWNlbWVudCBzY3JlZW4gKi9cXG4jZGlyZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLyogU3RhdHVzIGJhciAqL1xcbiNzdGF0dXMge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcblxcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzdGF0dXMgcCB7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIGJsYWNrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4xNWVtO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdHlwaW5nIDMuNXMgc3RlcHMoNDAsZW5kKSxcXG4gICAgYmxpbmstY2FyZXQgLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLyogVHlwaW5nIGVmZmVjdCAqL1xcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge3dpZHRoOiAwfVxcbiAgdG8ge3dpZHRoOiAxMDAlO31cXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XFxuICBmcm9tLCB0byB7Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudH1cXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogYmxhY2s7fVxcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG5cXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIC8vIEdlbmVyYXRlcyBib2FyZFxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICBnYW1lQm9hcmQucHVzaChyb3cpO1xuICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbnMgYm9hcmRcbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgLy8gQ29udGFpbnMgc2hpcHMgaW4gZ2FtZVxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgLy8gQWRkcyBzaGlwIGludG8gc2hpcCBhcnJheVxuICAgIGNvbnN0IGFkZFNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cbiAgICBcblxuICAgIC8vIFBsYWNlcyBzaGlwXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHBsYWNlbWVudCkgPT4ge1xuICAgICAgICBpZihwbGFjZW1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYoeCArIHNoaXAuZ2V0TGVuZ3RoKCkgPD0gMTApIHtcbiAgICAgICAgICAgICAgICBpZighY2hlY2tCb2FyZChzaGlwLHgseSxwbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeV1baV0gPSBzaGlwLmdldElEKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXAuc2V0UGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwbGFjZW1lbnQgID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBpZih5ICsgc2hpcC5nZXRMZW5ndGgoKSA8PSAxMCkge1xuICAgICAgICAgICAgICAgIGlmKCFjaGVja0JvYXJkKHNoaXAseCx5LHBsYWNlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVt4XSA9IHNoaXAuZ2V0SUQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcC5zZXRQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tzIGJvYXJkIGlmIHRoZXJlIGlzIGEgc2hpcCBhbHJlYWR5IHBsYWNlZCBcbiAgICBjb25zdCBjaGVja0JvYXJkID0gKHNoaXAseCx5LHBsYWNlbWVudCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xuICAgICAgICBpZihwbGFjZW1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFt5XVtpXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocGxhY2VtZW50ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW3hdICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gQ2hlY2tzIHNoaXAgcGxhY2VtZW50IGZvciBET01cbiAgICBjb25zdCBjaGVja1BsYWNlbWVudCA9IChzaGlwLHgseSxwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgaWYocGxhY2VtZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeV1baV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpID4gOSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGJvYXJkW2ldW3hdICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERldGVybWluZXMgd2hldGhlciBvciBvbnQgdGhlIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgLy8gYW5kIHNlbmRzIGEgaGl0IGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXBcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgseSkgPT4ge1xuICAgICAgICBpZihib2FyZFt5XVt4XSAhPT0gJycgJiYgYm9hcmRbeV1beF0gIT09ICd4JyAmJiBib2FyZFt5XVt4XSAhPT0gJ28nKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihzaGlwc1tpXS5nZXRJRCgpID09PSBib2FyZFt5XVt4XSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uc2hpcExheW91dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uc2hpcExheW91dFtqXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KGorMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBib2FyZFt5XVt4XSA9ICd4J1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYm9hcmRbeV1beF0gPT09ICd4Jykge1xuICAgICAgICAgICAgcmV0dXJuICdkb3VibGVIaXQnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib2FyZFt5XVt4XSA9ICdvJ1xuICAgICAgICAgICAgcmV0dXJuICdtaXNzJ1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy8gQ2hlY2tzIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vja1xuICAgIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHNoaXBzW2ldLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2JvYXJkLCBzaGlwcywgYWRkU2hpcCwgcGxhY2VTaGlwLCBjaGVja1BsYWNlbWVudCwgcmVjZWl2ZUF0dGFjaywgZ2FtZU92ZXJ9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkOyIsImltcG9ydCBzaGlwIGZyb20gJy4vc2hpcCdcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnXG5cbi8vIFBsYXllciBjbGFzc1xuY29uc3QgUGxheWVyID0gKG5hbWUsIHR5cGUpID0+IHtcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgICBsZXQgcHJldmlvdXNYID0gJyc7XG4gICAgbGV0IHByZXZpb3VzWSA9ICcnO1xuICAgIGxldCBwcmV2aW91c0hpdCA9IGZhbHNlO1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgYm9hcmQuYWRkU2hpcChzaGlwKDUsJ0NhcnJpZXInKSlcbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoNCwnQmF0dGxlc2hpcCcpKVxuICAgIGJvYXJkLmFkZFNoaXAoc2hpcCgzLCdEZXN0cm95ZXInKSlcbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoMywnU3VibWFyaW5lJykpXG4gICAgYm9hcmQuYWRkU2hpcChzaGlwKDIsJ1BhdHJvbCBCb2F0JykpXG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0dGVyc1xuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgICAgICBwbGF5ZXJOYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZih0dXJuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHVybiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdHVybiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgZm9yIHRoZSBhaVxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoeCx5LCBlbmVteSkgPT4ge1xuICAgICAgICBpZih0eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5lbXkucmVjZWl2ZUF0dGFjayh4LHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWkgd2lsbCBkcmF3IGEgcmFuZG9tIG51bWJlciBmb3IgdGhlIGdyaWRcbiAgICAgICAgLy8gSWYgcHJldmlvdXMgdHVybiB3YXMgYSBoaXQsIHdpbGwgaGl0IGFyb3VuZC5cbiAgICAgICAgZWxzZSBpZih0eXBlID09PSAnYWknKSB7XG4gICAgICAgICAgICBsZXQgeSA9ICByYW5kb21OdW1iZXIoKTtcbiAgICAgICAgICAgIGxldCB4ID0gIHJhbmRvbU51bWJlcigpO1xuXG4gICAgICAgICAgICBpZihwcmV2aW91c0hpdCkge1xuICAgICAgICAgICAgICAgIHkgPSBwcmV2aW91c1k7XG4gICAgICAgICAgICAgICAgeCA9IHByZXZpb3VzWDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxwJylcbiAgICAgICAgICAgICAgICBpZihjb3VudGVyIDw9IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVuZW15LnJlY2VpdmVBdHRhY2soeSArIDEsIHgpID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWSA9IHkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pc3MgMScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihjb3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHkgLSAxLCB4KSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSB5IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ggPSB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY291bnRlciA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeCArIDEgPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHksICB4ICsgMSkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ggPSB4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNvdW50ZXIgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHggLSAxIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHksIHggLSAxKSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZighcHJldmlvdXNIaXQpIHtcbiAgICAgICAgICAgICAgICBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHkseCkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGZvbGxvd2luZ1xuICAgIHJldHVybiB7Ym9hcmQsIGdldE5hbWUsIGdldFR1cm4sIHNldE5hbWUsIHNldFR1cm4sIHJhbmRvbU51bWJlciwgYXR0YWNrfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBpbnRlcmFjdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgc2hpcE51bSA9IDA7XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgaW5pdGlhbCBkaXZzXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cycpO1xuXG4gICAgY29uc3QgY2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudGVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgLy8gRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICAvLyBJbml0aWFsIGxvYWQgdXBcbiAgICBjb25zdCBsb2FkVXAgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZVdvcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluU3RhcnQnKVxuXG4gICAgICAgIGNvbnN0IGhvd1RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIHRpdGxlV29yZHMuaW5uZXJIVE1MID0gJ0JhdHRsZXNoaXAnO1xuICAgICAgICBzdGFydEJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnXG4gICAgICAgIGhvd1RvLmlubmVySFRNTCA9IFwiPGEgaHJlZj0naHR0cHM6Ly93d3cuaGFzYnJvLmNvbS9jb21tb24vaW5zdHJ1Y3QvYmF0dGxlc2hpcC5wZGYnPkhvdyB0byBQbGF5PC9hPlwiXG5cblxuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVdvcmRzKTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChob3dUbylcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290KCkpO1xuXG4gICAgICAgIC8vIEluaXRpYWwgc3RhcnQgYnV0dG9uXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5TdGFydCcpO1xuICAgICAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgcGxhY2VtZW50KHBsYXllcjEsIHBsYXllcjIpO1xuXG4gICAgICAgICAgICAvLyBPbmNlIHBsYWNlbWVudCBpcyBkb25lLCBtb3ZlIHRvIGdhbWVcbiAgICAgICAgICAgIGNvbnN0IGJhdHRsZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdHRsZVN0YXJ0Jyk7XG4gICAgICAgICAgICBiYXR0bGVTdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlYWR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhZGVQbGFjZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyYWN0aW9uKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlcyBzaGlwIHBsYWNlbWVudCBmcm9tIGhvcml6b250YWwgYW5kIHZlcml0Y2FsXG4gICAgY29uc3QgZGlyZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uJyk7XG4gICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaWYoZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTCA9PT0gJ0hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gJ0hvcml6b250YWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgdGhlIHBsYXllciBhbmQgZW5lbXkgMTB4MTAgYm9hcmRcbiAgICBjb25zdCBib2FyZE1ha2VyID0gKHR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICBsZXQgcGxheWVyQm9hcmQgPSBib2FyZEdlbmVyYXRvcigpO1xuICAgICAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGJvYXJkR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgaWYodHlwZSA9PT0gJ2dhbWUnKSB7XG4gICAgICAgICAgICBib2FyZHMuY2xhc3NMaXN0LmFkZCgnZ2FtZUJvYXJkcycpO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXInKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wdXRlcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBjb25zdCB0b3BUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgYm90VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRvcFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wdXRlcldvcmRzJyk7XG4gICAgICAgICAgICBib3RUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyV29yZHMnKTtcblxuICAgICAgICAgICAgdG9wVGV4dC5pbm5lckhUTUwgPSAnRW5lbXknO1xuICAgICAgICAgICAgYm90VGV4dC5pbm5lckhUTUwgPSAnUGxheWVyJztcblxuXG4gICAgICAgICAgICB0b3AuYXBwZW5kQ2hpbGQodG9wVGV4dCk7XG4gICAgICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgICBib3QuYXBwZW5kQ2hpbGQoYm90VGV4dCk7XG4gICAgICAgICAgICBib3QuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuXG4gICAgICAgICAgICBib2FyZHMuYXBwZW5kQ2hpbGQodG9wKTtcbiAgICAgICAgICAgIGJvYXJkcy5hcHBlbmRDaGlsZChib3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9hcmRzXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkcy5jbGFzc0xpc3QuYWRkKCdib2FyZHMnKTtcbiAgICAgICAgICAgIGJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZClcbiAgICAgICAgICAgIHJldHVybiBib2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCb2FyZCBnZW5lcmF0b3IgXG4gICAgY29uc3QgYm9hcmRHZW5lcmF0b3IgPSAoKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAoMTAqMTApOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIC8vIEJvYXJkIHJlYWRlciBGaXggdGhpc1xuICAgIGNvbnN0IGJvYXJkUmVhZGVyID0gKHR5cGUsIHBsYXllciwgaHRtbEJvYXJkLCBlbmVteSwgbG9jKSA9PiB7XG4gICAgICAgIGlmKHR5cGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxCb2FyZFtjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdhdHRhY2snKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gcG9zaXRpb24obG9jKTtcbiAgICAgICAgICAgIGxldCB4ID0gcG9zWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBwb3NbMV07XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKVxuICAgICAgICAgICAgaWYocGxheWVyLmF0dGFjayh5LCB4LCBlbmVteS5ib2FyZCkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgaHRtbEJvYXJkLmNoaWxkTm9kZXNbbG9jXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAvLyBzdGF0dXMuaW5uZXJIVE1MKHBsYXllci5nZXROYW1lKCkgKyAnaGFzIGhpdCBhIHNoaXAhJylcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaHRtbEJvYXJkLmNoaWxkTm9kZXNbbG9jXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZG9kZ2VyYmx1ZSc7XG4gICAgICAgICAgICAgICAgLy8gc3RhdHVzLmlubmVySFRNTChwbGF5ZXIuZ2V0TmFtZSgpICsgJ2hhcyBtaXNzZWQuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdyaWQgdG8gYXJyYXkgcG9zaXRpb25cbiAgICBjb25zdCBwb3NpdGlvbiA9IChsb2NhdGlvbikgPT4ge1xuICAgICAgICBsZXQgcFhZID0gW107XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSAwO1xuXG4gICAgICAgIC8vIEdldHMgeCBheGlzXG4gICAgICAgIGlmKGxvY2F0aW9uIDw9IDkpIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gMTAgJiYgbG9jYXRpb24gPD0xOSkge1xuICAgICAgICAgICAgeCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSAyMCAmJiBsb2NhdGlvbiA8PTI5KSB7XG4gICAgICAgICAgICB4ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDMwICYmIGxvY2F0aW9uIDw9MzkpIHtcbiAgICAgICAgICAgIHggPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gNDAgJiYgbG9jYXRpb24gPD00OSkge1xuICAgICAgICAgICAgeCA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA1MCAmJiBsb2NhdGlvbiA8PTU5KSB7XG4gICAgICAgICAgICB4ID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDYwICYmIGxvY2F0aW9uIDw9NjkpIHtcbiAgICAgICAgICAgIHggPSA2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gNzAgJiYgbG9jYXRpb24gPD03OSkge1xuICAgICAgICAgICAgeCA9IDc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA4MCAmJiBsb2NhdGlvbiA8PTg5KSB7XG4gICAgICAgICAgICB4ID0gODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDkwICYmIGxvY2F0aW9uIDw9OTkpIHtcbiAgICAgICAgICAgIHggPSA5O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBHZXRzIHRoZSBsYXN0IGRpZ2l0IG9mIHRoZSBsb2NhdGlvblxuICAgICAgICBpZihsb2NhdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb25bMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0cyB5IGF4aXNcbiAgICAgICAgaWYobG9jYXRpb24gPT0gMCkge1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSAxKSB7XG4gICAgICAgICAgICB5ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDIpIHtcbiAgICAgICAgICAgIHkgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gMykge1xuICAgICAgICAgICAgeSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA0KSB7XG4gICAgICAgICAgICB5ID0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDUpIHtcbiAgICAgICAgICAgIHkgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gNikge1xuICAgICAgICAgICAgeSA9IDY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA3KSB7XG4gICAgICAgICAgICB5ID0gNztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDgpIHtcbiAgICAgICAgICAgIHkgPSA4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gOSkge1xuICAgICAgICAgICAgeSA9IDk7XG4gICAgICAgIH1cblxuICAgICAgICBwWFkucHVzaCh4KTtcbiAgICAgICAgcFhZLnB1c2goeSk7XG4gICAgICAgIHJldHVybiBwWFk7XG4gICAgfVxuXG5cbiAgICAvLyBCYXR0bGVzaGlwIFRpdGxlIGF0IHRvcFxuICAgIGNvbnN0IHBsYWNlbWVudCA9IChwbGF5ZXIxKSA9PiB7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aXRsZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRpdGxlLnN0eWxlLnBhZGRpbmcgPSAnN3B4JztcbiAgICAgICAgdGl0bGUuc3R5bGUubWFyZ2luVG9wID0gJzEwcHgnO1xuICAgICAgICBmb290ZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZVdvcmRzLmlubmVySFRNTCA9ICdCYXR0bGVzaGlwJztcblxuICAgICAgICAvLyBIb3Jpem9udGFsL1ZlcnRpY2FsIGJ1dHRvblxuICAgICAgICBjb25zdCBkaXJlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlyZWN0aW9uJylcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTCA9ICdIb3Jpem9udGFsJ1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcGxheWVyIGJvYXJkXG4gICAgICAgIGNvbnN0IGJvYXJkID0gYm9hcmRNYWtlcigpO1xuXG4gICAgICAgIC8vIFN0YXJ0IGJhdHRsZSBidXR0b25cbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdiYXR0bGVTdGFydCcpXG4gICAgICAgIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCBCYXR0bGUnXG5cbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVXb3Jkcyk7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uQnV0dG9uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChib2FyZClcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdCgpKTtcblxuICAgICAgICAvLyBTZXRzIGRpcmVjdGlvblxuICAgICAgICBkaXJlY3Rpb24oKTtcblxuICAgICAgICAvLyBIb3ZlciBvdmVyIGVmZmVjdFxuICAgICAgICBsZXQgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gMDtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGNvbnN0IHJlbW92ZUV2ZW50cyA9IChvYmopID0+IHtcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0KVxuICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3ZlcilcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgdGhlIGNvZGVcbiAgICAgICAgY29uc3QgY2hlY2tIb3ZlciA9IChlLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbG9jID0gcG9zaXRpb24oZS5pZCk7XG5cbiAgICAgICAgICAgIGlmKHBsYXllcjEuYm9hcmQuY2hlY2tQbGFjZW1lbnQocGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXSwgbG9jWzFdLCBsb2NbMF0sIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmJvYXJkLnNoaXBzW3NoaXBOdW1dLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcGFyc2VJbnQoZS5pZCkgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0sIGxvY1sxXSwgbG9jWzBdLCBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKG5leHRQb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSArIDEgPT0gcGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXS5nZXRMZW5ndGgoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBwYXJzZUludChlLmlkKSArICgxMCAqIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0sIGxvY1sxXSwgbG9jWzBdLCBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKG5leHRQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgKyAxID09IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE51bSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmJvYXJkLnNoaXBzW3NoaXBOdW1dLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcGFyc2VJbnQoZS5pZCkgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKG5leHQgJSAxMCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBwYXJzZUludChlLmlkKSArICgxMCAqIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dCA+IDk5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmVzIGV2ZW50IGxpc3RlbmVycyBvbmNlIGZpbmlzaFxuICAgICAgICAgICAgaWYoc2hpcE51bSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudHMoZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBGdW5jdGlvbiBoYW5kbGVyXG4gICAgICAgIGNvbnN0IG1vdXNlb3ZlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNoZWNrSG92ZXIoZS50YXJnZXQsICdtb3VzZW92ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3VzZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNoZWNrSG92ZXIoZS50YXJnZXQsICdtb3VzZW91dCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2hlY2tIb3ZlcihlLnRhcmdldCwgJ2NsaWNrJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaXN0ZW5lcnMgZm9yIGNoZWNrIGhvdmVyXG4gICAgICAgIHBsYXllclNxdWFyZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpO1xuICAgICAgICB9KVxuICAgICAgICBwbGF5ZXJTcXVhcmUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dCk7XG4gICAgICAgIH0pXG4gICAgICAgIHBsYXllclNxdWFyZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIEZhZGUgb3V0IHBsYWNlbWVudCBzY3JlZW5cbiAgICBjb25zdCBmYWRlUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICAvLyBGYWRlIG91dCBhbmQgcmVtb3ZlIHNjcmVlbnNcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbicpO1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVTdGFydCcpO1xuICAgICAgICBjb25zdCBwbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmFkZU91dCcpO1xuICAgICAgICBkaXJlY3Rpb25CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdmYWRlT3V0Jyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmFkZU91dCcpO1xuICAgICAgICBwbGFjZW1lbnRCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhZGVPdXQnKTtcblxuICAgICAgICB0aXRsZS5yZW1vdmUoKTtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICBzdGFydEJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgcGxhY2VtZW50Qm9hcmQucmVtb3ZlKClcbiAgICB9XG5cbiAgICAvLyBHYW1lIGludGVyYWN0aW9uXG4gICAgY29uc3QgZ2FtZUludGVyYWN0aW9uID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgICAgICAgLy8gQWRkIHRoZSAyIG5ldyBib2FyZHMgYW5kIHN0YXR1c1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdHVzJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGN1cnJlbnRTdGF0dXMuaW5uZXJIVE1MID0gJ0xldCB0aGUgYmF0dGxlIGJlZ2luISdcblxuICAgICAgICBsZXQgZ2FtZSA9IGJvYXJkTWFrZXIoJ2dhbWUnKTtcblxuICAgICAgICAvLyBBbGlnbiB0aGUgZGl2c1xuICAgICAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoY3VycmVudFN0YXR1cyk7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZ2FtZSwgZm9vdGVyKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoc3RhdHVzLCBnYW1lKTtcblxuICAgICAgICBsZXQgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcicpXG4gICAgICAgIGJvYXJkUmVhZGVyKCdzdGFydCcsIHBsYXllcjEsIHBsYXllci5jaGlsZE5vZGVzKTtcblxuICAgICAgICAvLyBGdW5jdGlvbiBoYW5kbGVyIGZvciBpbnRlcmFjdGlvblxuICAgICAgICBjb25zdCBtb3VzZW92ZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmVlbidcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3VzZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSBcbiAgICAgICAgY29uc3QgY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihwbGF5ZXIxLmdldFR1cm4oKSkge1xuICAgICAgICAgICAgICAgIGJvYXJkUmVhZGVyKCdhdHRhY2snLCBwbGF5ZXIxLCBjb21wdXRlciwgcGxheWVyMiwgZS50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYoIXBsYXllcjIuYm9hcmQuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLmJvYXJkLnNoaXBzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5nZXRTdW5rU3RhdHVzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3Vua1N0YXR1cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGxheWVyMS5zZXRUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBsYXllcjIuc2V0VHVybigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmNoaWxkTm9kZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhlKTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaWYocGxheWVyMi5nZXRUdXJuKCkpIHtcbiAgICAgICAgICAgIC8vICAgICBib2FyZFJlYWRlcignYXR0YWNrJywgcGxheWVyMiwgY29tcHV0ZXIsIHBsYXllcjEsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgIC8vICAgICByZW1vdmVFdmVudHMoZS50YXJnZXQpO1xuICAgICAgICAgICAgLy8gICAgIGlmKCFwbGF5ZXIxLmJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcGxheWVyMS5ib2FyZC5zaGlwcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYoZS5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKGUuZ2V0U3Vua1N0YXR1cygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBlLnNldFN1bmtTdGF0dXMoKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHBsYXllcjEuc2V0VHVybigpO1xuICAgICAgICAgICAgLy8gICAgICAgICBwbGF5ZXIyLnNldFR1cm4oKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKVxuICAgICAgICAgICAgLy8gICAgICAgICBjb21wdXRlci5jaGlsZE5vZGVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByZW1vdmVFdmVudHMoZSk7XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGNvbnN0IHJlbW92ZUV2ZW50cyA9IChvYmopID0+IHtcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0KVxuICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3ZlcilcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyJylcbiAgICAgICAgY29tcHV0ZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpO1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0KTtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjIuYm9hcmQuYm9hcmQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkLmJvYXJkKTtcblxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBmb290ZXIgXG4gICAgZnVuY3Rpb24gZm9vdCgpIHtcbiAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9ICc8cD5NYWRlIGJ5IEtldmluIERyYWtlIGZvciBUaGUgT2RpbiBQcm9qZWN0IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2RyYWtlMTk5MlwiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT48L2E+PHA+J1xuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9hZFVwfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdGlvbjsiLCIvLyBTaGlwIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IHNoaXAgPSAobGVuZ3RoLCBuYW1lKSA9PiB7XG4gICAgLy8gTWFrZXMgYW4gYXJyYXkgZXF1YWwgdG8gdGhlIHNoaXBzIGxlbmd0aFxuICAgIGNvbnN0IHNoaXBMYXlvdXQgPSBbLi4uQXJyYXkobGVuZ3RoKV07XG4gICAgY29uc3QgaWQgPSBuYW1lLmNoYXJBdCgwKTtcbiAgICBsZXQgcGxhY2VtZW50ID0gJydcbiAgICBsZXQgc3Vua1N0YXQgPSBmYWxzZTtcblxuICAgIC8vIFJldHVybiBzaGlwIGxlbmd0aFxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH0gICBcbiAgICBcbiAgICAvLyBSZXR1cm4gc2hpcCBsZW5ndGhcbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHNoaXBJRFxuICAgIGNvbnN0IGdldElEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHBsYWNlbWVudFxuICAgIGNvbnN0IGdldFBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICAvLyBHZXQgc3VuayBzdGF0dXNcbiAgICBjb25zdCBnZXRTdW5rU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3Vua1N0YXQ7XG4gICAgfVxuXG4gICAgLy8gU2V0IHBsYWNlbWVudFxuICAgIGNvbnN0IHNldFBsYWNlbWVudCA9IChwbGFjZSkgPT4ge1xuICAgICAgICBwbGFjZW1lbnQgPSBwbGFjZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgc2luayBzdGF0dXNcbiAgICBjb25zdCBzZXRTdW5rU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBzdW5rU3RhdCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyAnIGhhcyBzdW5rIScpXG4gICAgfVxuXG4gICAgLy8gSGl0cyBhIHNoaXBcbiAgICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XG4gICAgICAgIHNoaXBMYXlvdXRbbnVtLTFdID0gJ3gnXG4gICAgfVxuXG4gICAgLy8gQ2hlY2tzIGlmIHRoZSBzaGlwIGhhcyBzdW5rXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZihzaGlwTGF5b3V0LmV2ZXJ5KGUgPT4gZSA9PT0gJ3gnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBmb2xsb3dpbmdcbiAgICByZXR1cm57c2hpcExheW91dCwgZ2V0TmFtZSwgZ2V0TGVuZ3RoLCBnZXRJRCwgZ2V0UGxhY2VtZW50LCBnZXRTdW5rU3RhdHVzLCBzZXRQbGFjZW1lbnQsIHNldFN1bmtTdGF0dXMsaGl0LCBpc1N1bmt9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBpbnRlcmFjdGlvbiBmcm9tICcuL2ludGVyYWN0aW9uJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInXG5cblxuLy8gU3RhcnQgdXAgZ2FtZVxubGV0IGdhbWUgPSBpbnRlcmFjdGlvbigpO1xuXG5sZXQgcGxheWVyMSA9IFBsYXllcignUGxheWVyMScsICdodW1hbicpXG5sZXQgcGxheWVyMiA9IFBsYXllcignUGxheWVyMicsICdhaScpO1xucGxheWVyMS5zZXRUdXJuKCk7XG5cbmxldCBwbGF5ZXIxU2hpcHMgPSBwbGF5ZXIxLmJvYXJkLnNoaXBzO1xubGV0IHBsYXllcjJTaGlwcyA9IHBsYXllcjIuYm9hcmQuc2hpcHM7XG5cbi8vIFBsYWNlIHNoaXBzIGZvciBwbGF5ZXIgYW5kIGFpXG5mb3IobGV0IGkgPSAwOyBpIDw9IHBsYXllcjJTaGlwcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsZXQgeSA9IHBsYXllcjIucmFuZG9tTnVtYmVyKCk7XG4gICAgbGV0IHggPSBwbGF5ZXIyLnJhbmRvbU51bWJlcigpO1xuICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG4gICAgaWYoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgZWxzZSBpZihkaXJlY3Rpb24gPT09IDIpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJ1xuICAgIH1cblxuICAgIHdoaWxlKCFwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcChwbGF5ZXIyU2hpcHNbaV0seSx4LGRpcmVjdGlvbikpIHtcbiAgICAgICAgeSA9IHBsYXllcjIucmFuZG9tTnVtYmVyKCk7XG4gICAgICAgIHggPSBwbGF5ZXIyLnJhbmRvbU51bWJlcigpO1xuICAgIH1cbn1cblxuZ2FtZS5sb2FkVXAocGxheWVyMSwgcGxheWVyMik7XG5cbi8vIHBsYXllcjEuYXR0YWNrKDEsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDIsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDMsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDQsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjJTaGlwcy5mb3JFYWNoKGUgPT4ge1xuLy8gICAgIGlmKGUuaXNTdW5rKCkgPT09IHRydWUpIHtcbi8vICAgICAgICAgaWYoZS5nZXRTdW5rU3RhdHVzKCkgPT09IGZhbHNlKSB7XG4vLyAgICAgICAgICAgICBlLnNldFN1bmtTdGF0dXMoKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSlcblxuLy8gaWYocGxheWVyMi5ib2FyZC5nYW1lT3ZlcigpKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpXG4vLyB9XG5cbi8vIGlmKHBsYXllcjEuYXR0YWNrKDAsMSxwbGF5ZXIyLmJvYXJkKSA9PT0gJ2hpdCcgfHwgJ21pc3MnKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2JhbmchJylcbi8vICAgICBwbGF5ZXIxLnNldFR1cm4oKTtcbi8vICAgICBwbGF5ZXIyLnNldFR1cm4oKTtcbi8vIH1cbi8vIGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKCd0cnkgYWdhaW4nKVxuLy8gfVxuXG4vLyBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgICBpZihwbGF5ZXIyLmF0dGFjaygwLDAscGxheWVyMS5ib2FyZCkgPT09ICdoaXQnIHx8ICdtaXNzJykge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnYmFuZyEnKVxuLy8gICAgICAgICBwbGF5ZXIxLnNldFR1cm4oKTtcbi8vICAgICAgICAgcGxheWVyMi5zZXRUdXJuKCk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndHJ5IGFnYWluJylcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2cocGxheWVyMS5ib2FyZC5ib2FyZClcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=