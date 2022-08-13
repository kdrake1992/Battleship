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
___CSS_LOADER_EXPORT___.push([module.id, "/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Fade in effect */\n#fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\n\n/* Fade out effect */\n#fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 12px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: .8em;\n}\n\n.gameBoards {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-left: -27ƒspx;\n}\n\n.gameBoards > div {\n  display: flex;\n  gap: 10px;\n}\n \n#player, #computer {\n  background-color: rgba(222,243,246, 0.8);\n}\n\n#playerWords, #computerWords {\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  text-align: center;\n  background-color: rgba(222,243,246, 0.6);\n}\n\n#computer .square {\n  cursor: crosshair;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Status bar */\n#status {\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.6);\n\n  margin-top: 20px;\n  margin-bottom: 7px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n#status p {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: large;\n\n  text-align: center;\n  overflow: hidden;\n  border-right: .15em solid black;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: .15em;\n  animation: \n    typing 3s steps(40,end),\n    blink-caret .5s step-end infinite;\n}\n\n/* Typing effect */\n@keyframes typing {\n  from {width: 0}\n  to {width: 100%;}\n}\n\n@keyframes blink-caret {\n  from, to {border-color: transparent}\n  50% { border-color: black;}\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;EACE,oBAAoB;EACpB,0DAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,UAAU;EACV,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,UAAU;EACV,+CAA+C;AACjD;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;;;EAGnB,gBAAgB;EAChB,yDAA4C;EAC5C,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;;EAER,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,kBAAkB;;EAElB,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;;EAEX,uBAAuB;EACvB,kBAAkB;;EAElB,wCAAwC;AAC1C;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gCAAgC;AAChC;EACE,YAAY;AACd;;AAEA,eAAe;AACf;EACE,YAAY;EACZ,0CAA0C;;EAE1C,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,gBAAgB;;EAEhB,kBAAkB;EAClB,gBAAgB;EAChB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB;;qCAEmC;AACrC;;AAEA,kBAAkB;AAClB;EACE,MAAM,QAAQ;EACd,IAAI,WAAW,CAAC;AAClB;;AAEA;EACE,UAAU,yBAAyB;EACnC,MAAM,mBAAmB,CAAC;AAC5B;;AAEA,WAAW;AACX;EACE,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,SAAS;;EAET,YAAY;EACZ,WAAW;EACX,YAAY;;EAEZ,kBAAkB;AACpB","sourcesContent":["/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url('./saira.ttf') format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Fade in effect */\n#fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\n\n/* Fade out effect */\n#fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(./oceanbackground.jpg);\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 12px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: .8em;\n}\n\n.gameBoards {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-left: -27ƒspx;\n}\n\n.gameBoards > div {\n  display: flex;\n  gap: 10px;\n}\n \n#player, #computer {\n  background-color: rgba(222,243,246, 0.8);\n}\n\n#playerWords, #computerWords {\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  text-align: center;\n  background-color: rgba(222,243,246, 0.6);\n}\n\n#computer .square {\n  cursor: crosshair;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Status bar */\n#status {\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.6);\n\n  margin-top: 20px;\n  margin-bottom: 7px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n#status p {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: large;\n\n  text-align: center;\n  overflow: hidden;\n  border-right: .15em solid black;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: .15em;\n  animation: \n    typing 3s steps(40,end),\n    blink-caret .5s step-end infinite;\n}\n\n/* Typing effect */\n@keyframes typing {\n  from {width: 0}\n  to {width: 100%;}\n}\n\n@keyframes blink-caret {\n  from, to {border-color: transparent}\n  50% { border-color: black;}\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}"],"sourceRoot":""}]);
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

    let compMove = [0,0];

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

    const getCompMove = () => {
        return compMove;
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
            let attack = false;
            compMove[0] = randomNumber();
            compMove[1] = randomNumber();
            let y =  compMove[0];
            let x =  compMove[1];

            if(previousHit) {
                y = previousY;
                x = previousX;

                compMove[0] = y;
                compMove[1] = x;

                if(counter <= 3) {
                    if(counter === 0) {
                        if(enemy.receiveAttack(y + 1, x) === 'hit') {
                            compMove[0] = y + 1;
                            previousY = y + 1;
                            previousX = x;
                            attack = true;
                        }
                        else {
                            compMove[0] = y + 1;
                            counter++;
                        }
                    }
                    else if(counter === 1) {
                        if(enemy.receiveAttack(y - 1, x) === 'hit') {
                            compMove[0] = y - 1;
                            previousY = y - 1;
                            previousX = x;
                            counter = 0;
                            attack = true;
                        }
                        else {
                            compMove[0] = y - 1;
                            counter++;
                        }
                    }
                    else if(counter === 2) {
                        if(x + 1 > 9) {
                            counter++;
                        }
                        else if(enemy.receiveAttack(y,  x + 1) === 'hit') {
                            previousY = y;
                            compMove[1] = x + 1;
                            previousX = x + 1;
                            counter = 0;
                            attack = true;
                        }
                        else {
                            counter++;
                            compMove[1] = x + 1;
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
                            compMove[1] = x - 1;
                            previousX = x - 1;
                            counter = 0;
                            attack = true;
                        }
                        else {
                            previousHit = false;
                            counter = 0;
                            compMove[1] = x - 1;
                        }  
                    }
                }
            }
            else if(!previousHit) {
                if(enemy.receiveAttack(y,x) === 'hit') {
                    previousY = y;
                    previousX = x;
                    previousHit = true;
                    attack = true;
                }

            }
            return attack;
        }
    }

    // Returns the following
    return {board, getName, getTurn, getCompMove, setName, setTurn, randomNumber, attack}

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
            if(player.getName() === 'Player1') {
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
            else if(player.getName() === 'Player2') {
                const status = document.getElementById('status')
                if(player.attack(0, 0, enemy.board) === true) {
                    console.log('HIT')
                    let pos = player.getCompMove();
                    pos = aGrid(pos);
                    htmlBoard.childNodes[pos].style.backgroundColor = 'red';
                    // console.log(enemy.board.board)
                    // status.innerHTML(player.getName() + 'has hit a ship!')
                }

                else {
                    let pos = player.getCompMove();
                    pos = aGrid(pos);
                    htmlBoard.childNodes[pos].style.backgroundColor = 'dodgerblue';
                    // console.log(enemy.board.board)
                    // status.innerHTML(player.getName() + 'has missed.')
                }
            }

        }
    }

    // Array to grid
    const aGrid = (location) => {
        console.log(location[1]);
        console.log(location[0]);
        let loc = -11; 
        for(let i = 0; i <= location[1]; i++) {
            loc+= 10;
        }
        for(let j = 0; j <= location[0]; j++) {
            loc++;
        }
        return loc;
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
                    player1.setTurn();
                    player2.setTurn();

                    setTimeout(() =>  {
                        if(player2.getTurn()) {
                            boardReader('attack', player2, player, player1, e.target.id);
                            if(!player1.board.gameOver()) {
                                player1.board.ships.forEach(e => {
                                    if(e.isSunk() === true) {
                                        if(e.getSunkStatus() === false) {
                                            e.setSunkStatus()
                                        }
                                    }
                                });
                            }
                            else {
                                console.log('Game Over')
                                computer.childNodes.forEach(e => {
                                    removeEvents(e);
            
                                })
                            }
                        }
                        player1.setTurn();
                        player2.setTurn();
                    }, 1000);

                }
                else {
                    console.log('Game Over');
                    player1.setTurn();
                    computer.childNodes.forEach(e => {
                        removeEvents(e);

                    })
                }
            }
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
        console.log(player1.board.board);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQzVKckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQywrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBOEM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUE4QztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOENBQThDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUE4QztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7OztBQ3JsQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNvQjtBQUNYOzs7QUFHN0I7QUFDQSxXQUFXLHdEQUFXOztBQUV0QixjQUFjLG1EQUFNO0FBQ3BCLGNBQWMsbURBQU07QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc2FpcmEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9vY2VhbmJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdldHRpbmcgZm9udCBpbmZvcm1hdGlvbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQWxsIGJ1dHRvbnMgKi9cXG5idXR0b24ge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGYWRlIGluIGVmZmVjdCAqL1xcbiNmYWRlSW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIGxpbmVhcjtcXG59XFxuXFxuLyogRmFkZSBvdXQgZWZmZWN0ICovXFxuI2ZhZGVPdXQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMnMsIG9wYWNpdHkgMnMgbGluZWFyO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIFRpdGxlICovXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuXFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4udGl0bGUgaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50aXRsZSBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpdGxlIGE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi50aXRsZSBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGl0bGUgYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogQm9hcmRzIGRpdiAqL1xcbi5ib2FyZHMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcblxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuOCk7XFxufVxcblxcbi8qIFBsYXllciBhbmQgQUkgQm9hcmQgZGl2ICovXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IC44ZW07XFxufVxcblxcbi5nYW1lQm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yN8aSc3B4O1xcbn1cXG5cXG4uZ2FtZUJvYXJkcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4gXFxuI3BsYXllciwgI2NvbXB1dGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuOCk7XFxufVxcblxcbiNwbGF5ZXJXb3JkcywgI2NvbXB1dGVyV29yZHMge1xcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXG4gIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwyNDMsMjQ2LCAwLjYpO1xcbn1cXG5cXG4jY29tcHV0ZXIgLnNxdWFyZSB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLyogQnV0dG9ucyBvbiBwbGFjZW1lbnQgc2NyZWVuICovXFxuI2RpcmVjdGlvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi8qIFN0YXR1cyBiYXIgKi9cXG4jc3RhdHVzIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG5cXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc3RhdHVzIHAge1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0OiAuMTVlbSBzb2xpZCBibGFjaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiAuMTVlbTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHR5cGluZyAzcyBzdGVwcyg0MCxlbmQpLFxcbiAgICBibGluay1jYXJldCAuNXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi8qIFR5cGluZyBlZmZlY3QgKi9cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHt3aWR0aDogMH1cXG4gIHRvIHt3aWR0aDogMTAwJTt9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xcbiAgZnJvbSwgdG8ge2JvcmRlci1jb2xvcjogdHJhbnNwYXJlbnR9XFxuICA1MCUgeyBib3JkZXItY29sb3I6IGJsYWNrO31cXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuXFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw2QkFBNkI7QUFDN0I7RUFDRSxvQkFBb0I7RUFDcEIsMERBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtDQUErQztBQUNqRDs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7OztFQUduQixnQkFBZ0I7RUFDaEIseURBQTRDO0VBQzVDLHNCQUFzQjtBQUN4Qjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixRQUFROztFQUVSLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXOztFQUVYLHVCQUF1QjtFQUN2QixrQkFBa0I7O0VBRWxCLHdDQUF3QztBQUMxQzs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGdDQUFnQztBQUNoQztFQUNFLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxZQUFZO0VBQ1osMENBQTBDOztFQUUxQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckI7O3FDQUVtQztBQUNyQzs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxNQUFNLFFBQVE7RUFDZCxJQUFJLFdBQVcsQ0FBQztBQUNsQjs7QUFFQTtFQUNFLFVBQVUseUJBQXlCO0VBQ25DLE1BQU0sbUJBQW1CLENBQUM7QUFDNUI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUzs7RUFFVCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7O0VBRVosa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdldHRpbmcgZm9udCBpbmZvcm1hdGlvbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XFxuICBzcmM6IHVybCgnLi9zYWlyYS50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBBbGwgYnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZhZGUgaW4gZWZmZWN0ICovXFxuI2ZhZGVJbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgbGluZWFyO1xcbn1cXG5cXG4vKiBGYWRlIG91dCBlZmZlY3QgKi9cXG4jZmFkZU91dCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAycywgb3BhY2l0eSAycyBsaW5lYXI7XFxufVxcblxcbi8qIEJvZHkgKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9vY2VhbmJhY2tncm91bmQuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIFRpdGxlICovXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuXFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4udGl0bGUgaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50aXRsZSBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpdGxlIGE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi50aXRsZSBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGl0bGUgYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogQm9hcmRzIGRpdiAqL1xcbi5ib2FyZHMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcblxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuOCk7XFxufVxcblxcbi8qIFBsYXllciBhbmQgQUkgQm9hcmQgZGl2ICovXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IC44ZW07XFxufVxcblxcbi5nYW1lQm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yN8aSc3B4O1xcbn1cXG5cXG4uZ2FtZUJvYXJkcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4gXFxuI3BsYXllciwgI2NvbXB1dGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuOCk7XFxufVxcblxcbiNwbGF5ZXJXb3JkcywgI2NvbXB1dGVyV29yZHMge1xcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXG4gIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwyNDMsMjQ2LCAwLjYpO1xcbn1cXG5cXG4jY29tcHV0ZXIgLnNxdWFyZSB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLyogQnV0dG9ucyBvbiBwbGFjZW1lbnQgc2NyZWVuICovXFxuI2RpcmVjdGlvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi8qIFN0YXR1cyBiYXIgKi9cXG4jc3RhdHVzIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG5cXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc3RhdHVzIHAge1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0OiAuMTVlbSBzb2xpZCBibGFjaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiAuMTVlbTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHR5cGluZyAzcyBzdGVwcyg0MCxlbmQpLFxcbiAgICBibGluay1jYXJldCAuNXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi8qIFR5cGluZyBlZmZlY3QgKi9cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHt3aWR0aDogMH1cXG4gIHRvIHt3aWR0aDogMTAwJTt9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xcbiAgZnJvbSwgdG8ge2JvcmRlci1jb2xvcjogdHJhbnNwYXJlbnR9XFxuICA1MCUgeyBib3JkZXItY29sb3I6IGJsYWNrO31cXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuXFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAvLyBHZW5lcmF0ZXMgYm9hcmRcbiAgICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGdhbWVCb2FyZCA9IFtdO1xuICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgZ2FtZUJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgcm93ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG5cbiAgICAvLyBBc3NpZ25zIGJvYXJkXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIC8vIENvbnRhaW5zIHNoaXBzIGluIGdhbWVcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIC8vIEFkZHMgc2hpcCBpbnRvIHNoaXAgYXJyYXlcbiAgICBjb25zdCBhZGRTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBQbGFjZXMgc2hpcFxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCBwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgaWYocGxhY2VtZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmKHggKyBzaGlwLmdldExlbmd0aCgpIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgaWYoIWNoZWNrQm9hcmQoc2hpcCx4LHkscGxhY2VtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3ldW2ldID0gc2hpcC5nZXRJRCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwLnNldFBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGxhY2VtZW50ICA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaWYoeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPD0gMTApIHtcbiAgICAgICAgICAgICAgICBpZighY2hlY2tCb2FyZChzaGlwLHgseSxwbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV1beF0gPSBzaGlwLmdldElEKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXAuc2V0UGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrcyBib2FyZCBpZiB0aGVyZSBpcyBhIHNoaXAgYWxyZWFkeSBwbGFjZWQgXG4gICAgY29uc3QgY2hlY2tCb2FyZCA9IChzaGlwLHgseSxwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgaWYocGxhY2VtZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeV1baV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVt4XSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIENoZWNrcyBzaGlwIHBsYWNlbWVudCBmb3IgRE9NXG4gICAgY29uc3QgY2hlY2tQbGFjZW1lbnQgPSAoc2hpcCx4LHkscGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XG4gICAgICAgIGlmKHBsYWNlbWVudCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3ldW2ldICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwbGFjZW1lbnQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoaSA+IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihib2FyZFtpXVt4XSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igb250IHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuICAgIC8vIGFuZCBzZW5kcyBhIGhpdCBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYoYm9hcmRbeV1beF0gIT09ICcnICYmIGJvYXJkW3ldW3hdICE9PSAneCcgJiYgYm9hcmRbeV1beF0gIT09ICdvJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uZ2V0SUQoKSA9PT0gYm9hcmRbeV1beF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLnNoaXBMYXlvdXQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLnNoaXBMYXlvdXRbal0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChqKzEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeV1beF0gPSAneCdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJvYXJkW3ldW3hdID09PSAneCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnZG91YmxlSGl0J1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRbeV1beF0gPSAnbydcbiAgICAgICAgICAgIHJldHVybiAnbWlzcydcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIENoZWNrcyBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1Y2tcbiAgICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihzaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtib2FyZCwgc2hpcHMsIGFkZFNoaXAsIHBsYWNlU2hpcCwgY2hlY2tQbGFjZW1lbnQsIHJlY2VpdmVBdHRhY2ssIGdhbWVPdmVyfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDsiLCJpbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAnXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJ1xuXG4vLyBQbGF5ZXIgY2xhc3NcbmNvbnN0IFBsYXllciA9IChuYW1lLCB0eXBlKSA9PiB7XG4gICAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICAgIGxldCB0dXJuID0gZmFsc2U7XG4gICAgbGV0IHByZXZpb3VzWCA9ICcnO1xuICAgIGxldCBwcmV2aW91c1kgPSAnJztcbiAgICBsZXQgcHJldmlvdXNIaXQgPSBmYWxzZTtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICBsZXQgY29tcE1vdmUgPSBbMCwwXTtcblxuICAgIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgYm9hcmQuYWRkU2hpcChzaGlwKDUsJ0NhcnJpZXInKSlcbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoNCwnQmF0dGxlc2hpcCcpKVxuICAgIGJvYXJkLmFkZFNoaXAoc2hpcCgzLCdEZXN0cm95ZXInKSlcbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoMywnU3VibWFyaW5lJykpXG4gICAgYm9hcmQuYWRkU2hpcChzaGlwKDIsJ1BhdHJvbCBCb2F0JykpXG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29tcE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wTW92ZTtcbiAgICB9XG5cbiAgICAvLyBTZXR0ZXJzXG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgICAgIHBsYXllck5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmKHR1cm4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0dXJuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0dXJuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0dXJuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciBmb3IgdGhlIGFpXG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9ICh4LHksIGVuZW15KSA9PiB7XG4gICAgICAgIGlmKHR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmVteS5yZWNlaXZlQXR0YWNrKHgseSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBaSB3aWxsIGRyYXcgYSByYW5kb20gbnVtYmVyIGZvciB0aGUgZ3JpZFxuICAgICAgICAvLyBJZiBwcmV2aW91cyB0dXJuIHdhcyBhIGhpdCwgd2lsbCBoaXQgYXJvdW5kLlxuICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdhaScpIHtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbXBNb3ZlWzBdID0gcmFuZG9tTnVtYmVyKCk7XG4gICAgICAgICAgICBjb21wTW92ZVsxXSA9IHJhbmRvbU51bWJlcigpO1xuICAgICAgICAgICAgbGV0IHkgPSAgY29tcE1vdmVbMF07XG4gICAgICAgICAgICBsZXQgeCA9ICBjb21wTW92ZVsxXTtcblxuICAgICAgICAgICAgaWYocHJldmlvdXNIaXQpIHtcbiAgICAgICAgICAgICAgICB5ID0gcHJldmlvdXNZO1xuICAgICAgICAgICAgICAgIHggPSBwcmV2aW91c1g7XG5cbiAgICAgICAgICAgICAgICBjb21wTW92ZVswXSA9IHk7XG4gICAgICAgICAgICAgICAgY29tcE1vdmVbMV0gPSB4O1xuXG4gICAgICAgICAgICAgICAgaWYoY291bnRlciA8PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVuZW15LnJlY2VpdmVBdHRhY2soeSArIDEsIHgpID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBNb3ZlWzBdID0geSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0geSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNYID0geDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcE1vdmVbMF0gPSB5ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihjb3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHkgLSAxLCB4KSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wTW92ZVswXSA9IHkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWSA9IHkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBNb3ZlWzBdID0geSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY291bnRlciA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeCArIDEgPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHksICB4ICsgMSkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wTW92ZVsxXSA9IHggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcE1vdmVbMV0gPSB4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNvdW50ZXIgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHggLSAxIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHksIHggLSAxKSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBNb3ZlWzFdID0geCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNYID0geCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcE1vdmVbMV0gPSB4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZighcHJldmlvdXNIaXQpIHtcbiAgICAgICAgICAgICAgICBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHkseCkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBmb2xsb3dpbmdcbiAgICByZXR1cm4ge2JvYXJkLCBnZXROYW1lLCBnZXRUdXJuLCBnZXRDb21wTW92ZSwgc2V0TmFtZSwgc2V0VHVybiwgcmFuZG9tTnVtYmVyLCBhdHRhY2t9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNvbnN0IGludGVyYWN0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzaGlwTnVtID0gMDtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIGRpdnNcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XG5cbiAgICBjb25zdCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZW50ZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICAvLyBET00gZWxlbWVudHNcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIC8vIEluaXRpYWwgbG9hZCB1cFxuICAgIGNvbnN0IGxvYWRVcCA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5TdGFydCcpXG5cbiAgICAgICAgY29uc3QgaG93VG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgdGl0bGVXb3Jkcy5pbm5lckhUTUwgPSAnQmF0dGxlc2hpcCc7XG4gICAgICAgIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCdcbiAgICAgICAgaG93VG8uaW5uZXJIVE1MID0gXCI8YSBocmVmPSdodHRwczovL3d3dy5oYXNicm8uY29tL2NvbW1vbi9pbnN0cnVjdC9iYXR0bGVzaGlwLnBkZic+SG93IHRvIFBsYXk8L2E+XCJcblxuXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlV29yZHMpO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGhvd1RvKVxuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3QoKSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbCBzdGFydCBidXR0b25cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblN0YXJ0Jyk7XG4gICAgICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQocGxheWVyMSwgcGxheWVyMik7XG5cbiAgICAgICAgICAgIC8vIE9uY2UgcGxhY2VtZW50IGlzIGRvbmUsIG1vdmUgdG8gZ2FtZVxuICAgICAgICAgICAgY29uc3QgYmF0dGxlU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlU3RhcnQnKTtcbiAgICAgICAgICAgIGJhdHRsZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVhZHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFkZVBsYWNlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJhY3Rpb24ocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2VzIHNoaXAgcGxhY2VtZW50IGZyb20gaG9yaXpvbnRhbCBhbmQgdmVyaXRjYWxcbiAgICBjb25zdCBkaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24nKTtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MID09PSAnSG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnSG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyB0aGUgcGxheWVyIGFuZCBlbmVteSAxMHgxMCBib2FyZFxuICAgIGNvbnN0IGJvYXJkTWFrZXIgPSAodHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGxldCBwbGF5ZXJCb2FyZCA9IGJvYXJkR2VuZXJhdG9yKCk7XG4gICAgICAgIGxldCBjb21wdXRlckJvYXJkID0gYm9hcmRHZW5lcmF0b3IoKTtcblxuICAgICAgICBpZih0eXBlID09PSAnZ2FtZScpIHtcbiAgICAgICAgICAgIGJvYXJkcy5jbGFzc0xpc3QuYWRkKCdnYW1lQm9hcmRzJyk7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllcicpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXB1dGVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBib3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdG9wVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXB1dGVyV29yZHMnKTtcbiAgICAgICAgICAgIGJvdFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXJXb3JkcycpO1xuXG4gICAgICAgICAgICB0b3BUZXh0LmlubmVySFRNTCA9ICdFbmVteSc7XG4gICAgICAgICAgICBib3RUZXh0LmlubmVySFRNTCA9ICdQbGF5ZXInO1xuXG5cbiAgICAgICAgICAgIHRvcC5hcHBlbmRDaGlsZCh0b3BUZXh0KTtcbiAgICAgICAgICAgIHRvcC5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcbiAgICAgICAgICAgIGJvdC5hcHBlbmRDaGlsZChib3RUZXh0KTtcbiAgICAgICAgICAgIGJvdC5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG5cbiAgICAgICAgICAgIGJvYXJkcy5hcHBlbmRDaGlsZCh0b3ApO1xuICAgICAgICAgICAgYm9hcmRzLmFwcGVuZENoaWxkKGJvdCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib2FyZHNcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcycpO1xuICAgICAgICAgICAgYm9hcmRzLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKVxuICAgICAgICAgICAgcmV0dXJuIGJvYXJkcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJvYXJkIGdlbmVyYXRvciBcbiAgICBjb25zdCBib2FyZEdlbmVyYXRvciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8ICgxMCoxMCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIFxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBpKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gQm9hcmQgcmVhZGVyIEZpeCB0aGlzXG4gICAgY29uc3QgYm9hcmRSZWFkZXIgPSAodHlwZSwgcGxheWVyLCBodG1sQm9hcmQsIGVuZW15LCBsb2MpID0+IHtcbiAgICAgICAgaWYodHlwZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEJvYXJkW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ2F0dGFjaycpIHtcbiAgICAgICAgICAgIGlmKHBsYXllci5nZXROYW1lKCkgPT09ICdQbGF5ZXIxJykge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBwb3NpdGlvbihsb2MpO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gcG9zWzBdO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gcG9zWzFdO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKVxuICAgICAgICAgICAgICAgIGlmKHBsYXllci5hdHRhY2soeSwgeCwgZW5lbXkuYm9hcmQpID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgICAgICBodG1sQm9hcmQuY2hpbGROb2Rlc1tsb2NdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0dXMuaW5uZXJIVE1MKHBsYXllci5nZXROYW1lKCkgKyAnaGFzIGhpdCBhIHNoaXAhJylcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWxCb2FyZC5jaGlsZE5vZGVzW2xvY10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2RvZGdlcmJsdWUnO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0dXMuaW5uZXJIVE1MKHBsYXllci5nZXROYW1lKCkgKyAnaGFzIG1pc3NlZC4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocGxheWVyLmdldE5hbWUoKSA9PT0gJ1BsYXllcjInKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmF0dGFjaygwLCAwLCBlbmVteS5ib2FyZCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hJVCcpXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBwbGF5ZXIuZ2V0Q29tcE1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gYUdyaWQocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgaHRtbEJvYXJkLmNoaWxkTm9kZXNbcG9zXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZW5lbXkuYm9hcmQuYm9hcmQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXR1cy5pbm5lckhUTUwocGxheWVyLmdldE5hbWUoKSArICdoYXMgaGl0IGEgc2hpcCEnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gcGxheWVyLmdldENvbXBNb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGFHcmlkKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIGh0bWxCb2FyZC5jaGlsZE5vZGVzW3Bvc10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2RvZGdlcmJsdWUnO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbmVteS5ib2FyZC5ib2FyZClcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhdHVzLmlubmVySFRNTChwbGF5ZXIuZ2V0TmFtZSgpICsgJ2hhcyBtaXNzZWQuJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFycmF5IHRvIGdyaWRcbiAgICBjb25zdCBhR3JpZCA9IChsb2NhdGlvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvblsxXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uWzBdKTtcbiAgICAgICAgbGV0IGxvYyA9IC0xMTsgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gbG9jYXRpb25bMV07IGkrKykge1xuICAgICAgICAgICAgbG9jKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8PSBsb2NhdGlvblswXTsgaisrKSB7XG4gICAgICAgICAgICBsb2MrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jO1xuICAgIH1cblxuICAgIC8vIEdyaWQgdG8gYXJyYXkgcG9zaXRpb25cbiAgICBjb25zdCBwb3NpdGlvbiA9IChsb2NhdGlvbikgPT4ge1xuICAgICAgICBsZXQgcFhZID0gW107XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSAwO1xuXG4gICAgICAgIC8vIEdldHMgeCBheGlzXG4gICAgICAgIGlmKGxvY2F0aW9uIDw9IDkpIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gMTAgJiYgbG9jYXRpb24gPD0xOSkge1xuICAgICAgICAgICAgeCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSAyMCAmJiBsb2NhdGlvbiA8PTI5KSB7XG4gICAgICAgICAgICB4ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDMwICYmIGxvY2F0aW9uIDw9MzkpIHtcbiAgICAgICAgICAgIHggPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gNDAgJiYgbG9jYXRpb24gPD00OSkge1xuICAgICAgICAgICAgeCA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA1MCAmJiBsb2NhdGlvbiA8PTU5KSB7XG4gICAgICAgICAgICB4ID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDYwICYmIGxvY2F0aW9uIDw9NjkpIHtcbiAgICAgICAgICAgIHggPSA2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gNzAgJiYgbG9jYXRpb24gPD03OSkge1xuICAgICAgICAgICAgeCA9IDc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA4MCAmJiBsb2NhdGlvbiA8PTg5KSB7XG4gICAgICAgICAgICB4ID0gODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDkwICYmIGxvY2F0aW9uIDw9OTkpIHtcbiAgICAgICAgICAgIHggPSA5O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBHZXRzIHRoZSBsYXN0IGRpZ2l0IG9mIHRoZSBsb2NhdGlvblxuICAgICAgICBpZihsb2NhdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb25bMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0cyB5IGF4aXNcbiAgICAgICAgaWYobG9jYXRpb24gPT0gMCkge1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSAxKSB7XG4gICAgICAgICAgICB5ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDIpIHtcbiAgICAgICAgICAgIHkgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gMykge1xuICAgICAgICAgICAgeSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA0KSB7XG4gICAgICAgICAgICB5ID0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDUpIHtcbiAgICAgICAgICAgIHkgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gNikge1xuICAgICAgICAgICAgeSA9IDY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA3KSB7XG4gICAgICAgICAgICB5ID0gNztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDgpIHtcbiAgICAgICAgICAgIHkgPSA4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gOSkge1xuICAgICAgICAgICAgeSA9IDk7XG4gICAgICAgIH1cblxuICAgICAgICBwWFkucHVzaCh4KTtcbiAgICAgICAgcFhZLnB1c2goeSk7XG4gICAgICAgIHJldHVybiBwWFk7XG4gICAgfVxuXG5cbiAgICAvLyBCYXR0bGVzaGlwIFRpdGxlIGF0IHRvcFxuICAgIGNvbnN0IHBsYWNlbWVudCA9IChwbGF5ZXIxKSA9PiB7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aXRsZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRpdGxlLnN0eWxlLnBhZGRpbmcgPSAnN3B4JztcbiAgICAgICAgdGl0bGUuc3R5bGUubWFyZ2luVG9wID0gJzEwcHgnO1xuICAgICAgICBmb290ZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZVdvcmRzLmlubmVySFRNTCA9ICdCYXR0bGVzaGlwJztcblxuICAgICAgICAvLyBIb3Jpem9udGFsL1ZlcnRpY2FsIGJ1dHRvblxuICAgICAgICBjb25zdCBkaXJlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlyZWN0aW9uJylcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTCA9ICdIb3Jpem9udGFsJ1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcGxheWVyIGJvYXJkXG4gICAgICAgIGNvbnN0IGJvYXJkID0gYm9hcmRNYWtlcigpO1xuXG4gICAgICAgIC8vIFN0YXJ0IGJhdHRsZSBidXR0b25cbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdiYXR0bGVTdGFydCcpXG4gICAgICAgIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCBCYXR0bGUnXG5cbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVXb3Jkcyk7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uQnV0dG9uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChib2FyZClcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdCgpKTtcblxuICAgICAgICAvLyBTZXRzIGRpcmVjdGlvblxuICAgICAgICBkaXJlY3Rpb24oKTtcblxuICAgICAgICAvLyBIb3ZlciBvdmVyIGVmZmVjdFxuICAgICAgICBsZXQgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gMDtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGNvbnN0IHJlbW92ZUV2ZW50cyA9IChvYmopID0+IHtcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0KVxuICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3ZlcilcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgdGhlIGNvZGVcbiAgICAgICAgY29uc3QgY2hlY2tIb3ZlciA9IChlLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbG9jID0gcG9zaXRpb24oZS5pZCk7XG5cbiAgICAgICAgICAgIGlmKHBsYXllcjEuYm9hcmQuY2hlY2tQbGFjZW1lbnQocGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXSwgbG9jWzFdLCBsb2NbMF0sIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmJvYXJkLnNoaXBzW3NoaXBOdW1dLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcGFyc2VJbnQoZS5pZCkgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0sIGxvY1sxXSwgbG9jWzBdLCBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKG5leHRQb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSArIDEgPT0gcGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXS5nZXRMZW5ndGgoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBwYXJzZUludChlLmlkKSArICgxMCAqIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0sIGxvY1sxXSwgbG9jWzBdLCBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKG5leHRQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgKyAxID09IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE51bSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmJvYXJkLnNoaXBzW3NoaXBOdW1dLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcGFyc2VJbnQoZS5pZCkgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKG5leHQgJSAxMCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBwYXJzZUludChlLmlkKSArICgxMCAqIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dCA+IDk5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmVzIGV2ZW50IGxpc3RlbmVycyBvbmNlIGZpbmlzaFxuICAgICAgICAgICAgaWYoc2hpcE51bSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudHMoZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBGdW5jdGlvbiBoYW5kbGVyXG4gICAgICAgIGNvbnN0IG1vdXNlb3ZlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNoZWNrSG92ZXIoZS50YXJnZXQsICdtb3VzZW92ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3VzZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNoZWNrSG92ZXIoZS50YXJnZXQsICdtb3VzZW91dCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2hlY2tIb3ZlcihlLnRhcmdldCwgJ2NsaWNrJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaXN0ZW5lcnMgZm9yIGNoZWNrIGhvdmVyXG4gICAgICAgIHBsYXllclNxdWFyZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpO1xuICAgICAgICB9KVxuICAgICAgICBwbGF5ZXJTcXVhcmUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dCk7XG4gICAgICAgIH0pXG4gICAgICAgIHBsYXllclNxdWFyZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIEZhZGUgb3V0IHBsYWNlbWVudCBzY3JlZW5cbiAgICBjb25zdCBmYWRlUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICAvLyBGYWRlIG91dCBhbmQgcmVtb3ZlIHNjcmVlbnNcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbicpO1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVTdGFydCcpO1xuICAgICAgICBjb25zdCBwbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmFkZU91dCcpO1xuICAgICAgICBkaXJlY3Rpb25CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdmYWRlT3V0Jyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmFkZU91dCcpO1xuICAgICAgICBwbGFjZW1lbnRCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhZGVPdXQnKTtcblxuICAgICAgICB0aXRsZS5yZW1vdmUoKTtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICBzdGFydEJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgcGxhY2VtZW50Qm9hcmQucmVtb3ZlKClcbiAgICB9XG5cbiAgICAvLyBHYW1lIGludGVyYWN0aW9uXG4gICAgY29uc3QgZ2FtZUludGVyYWN0aW9uID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgICAgICAgLy8gQWRkIHRoZSAyIG5ldyBib2FyZHMgYW5kIHN0YXR1c1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdHVzJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGN1cnJlbnRTdGF0dXMuaW5uZXJIVE1MID0gJ0xldCB0aGUgYmF0dGxlIGJlZ2luISdcblxuICAgICAgICBsZXQgZ2FtZSA9IGJvYXJkTWFrZXIoJ2dhbWUnKTtcblxuICAgICAgICAvLyBBbGlnbiB0aGUgZGl2c1xuICAgICAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoY3VycmVudFN0YXR1cyk7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZ2FtZSwgZm9vdGVyKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoc3RhdHVzLCBnYW1lKTtcblxuICAgICAgICBsZXQgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcicpXG4gICAgICAgIGJvYXJkUmVhZGVyKCdzdGFydCcsIHBsYXllcjEsIHBsYXllci5jaGlsZE5vZGVzKTtcblxuICAgICAgICAvLyBGdW5jdGlvbiBoYW5kbGVyIGZvciBpbnRlcmFjdGlvblxuICAgICAgICBjb25zdCBtb3VzZW92ZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmVlbidcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3VzZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSBcbiAgICAgICAgY29uc3QgY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihwbGF5ZXIxLmdldFR1cm4oKSkge1xuICAgICAgICAgICAgICAgIGJvYXJkUmVhZGVyKCdhdHRhY2snLCBwbGF5ZXIxLCBjb21wdXRlciwgcGxheWVyMiwgZS50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYoIXBsYXllcjIuYm9hcmQuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLmJvYXJkLnNoaXBzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5nZXRTdW5rU3RhdHVzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3Vua1N0YXR1cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5zZXRUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjIuc2V0VHVybigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBsYXllcjIuZ2V0VHVybigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRSZWFkZXIoJ2F0dGFjaycsIHBsYXllcjIsIHBsYXllciwgcGxheWVyMSwgZS50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFwbGF5ZXIxLmJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5ib2FyZC5zaGlwcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUuZ2V0U3Vua1N0YXR1cygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN1bmtTdGF0dXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5zZXRUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLnNldFR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5zZXRUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmNoaWxkTm9kZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhlKTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgY29uc3QgcmVtb3ZlRXZlbnRzID0gKG9iaikgPT4ge1xuICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXQpXG4gICAgICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VvdmVyKVxuICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2spXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXInKVxuICAgICAgICBjb21wdXRlci5jaGlsZE5vZGVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3Zlcik7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXQpO1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMi5ib2FyZC5ib2FyZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjEuYm9hcmQuYm9hcmQpO1xuXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGZvb3RlciBcbiAgICBmdW5jdGlvbiBmb290KCkge1xuICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gJzxwPk1hZGUgYnkgS2V2aW4gRHJha2UgZm9yIFRoZSBPZGluIFByb2plY3QgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZHJha2UxOTkyXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPjwvYT48cD4nXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkVXB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0aW9uOyIsIi8vIFNoaXAgZmFjdG9yeSBmdW5jdGlvblxuY29uc3Qgc2hpcCA9IChsZW5ndGgsIG5hbWUpID0+IHtcbiAgICAvLyBNYWtlcyBhbiBhcnJheSBlcXVhbCB0byB0aGUgc2hpcHMgbGVuZ3RoXG4gICAgY29uc3Qgc2hpcExheW91dCA9IFsuLi5BcnJheShsZW5ndGgpXTtcbiAgICBjb25zdCBpZCA9IG5hbWUuY2hhckF0KDApO1xuICAgIGxldCBwbGFjZW1lbnQgPSAnJ1xuICAgIGxldCBzdW5rU3RhdCA9IGZhbHNlO1xuXG4gICAgLy8gUmV0dXJuIHNoaXAgbGVuZ3RoXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSAgIFxuICAgIFxuICAgIC8vIFJldHVybiBzaGlwIGxlbmd0aFxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gc2hpcElEXG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcGxhY2VtZW50XG4gICAgY29uc3QgZ2V0UGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIC8vIEdldCBzdW5rIHN0YXR1c1xuICAgIGNvbnN0IGdldFN1bmtTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdW5rU3RhdDtcbiAgICB9XG5cbiAgICAvLyBTZXQgcGxhY2VtZW50XG4gICAgY29uc3Qgc2V0UGxhY2VtZW50ID0gKHBsYWNlKSA9PiB7XG4gICAgICAgIHBsYWNlbWVudCA9IHBsYWNlO1xuICAgIH1cblxuICAgIC8vIFNldCBzaW5rIHN0YXR1c1xuICAgIGNvbnN0IHNldFN1bmtTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHN1bmtTdGF0ID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSArICcgaGFzIHN1bmshJylcbiAgICB9XG5cbiAgICAvLyBIaXRzIGEgc2hpcFxuICAgIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICAgICAgc2hpcExheW91dFtudW0tMV0gPSAneCdcbiAgICB9XG5cbiAgICAvLyBDaGVja3MgaWYgdGhlIHNoaXAgaGFzIHN1bmtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNoaXBMYXlvdXQuZXZlcnkoZSA9PiBlID09PSAneCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGZvbGxvd2luZ1xuICAgIHJldHVybntzaGlwTGF5b3V0LCBnZXROYW1lLCBnZXRMZW5ndGgsIGdldElELCBnZXRQbGFjZW1lbnQsIGdldFN1bmtTdGF0dXMsIHNldFBsYWNlbWVudCwgc2V0U3Vua1N0YXR1cyxoaXQsIGlzU3Vua31cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGludGVyYWN0aW9uIGZyb20gJy4vaW50ZXJhY3Rpb24nO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcidcblxuXG4vLyBTdGFydCB1cCBnYW1lXG5sZXQgZ2FtZSA9IGludGVyYWN0aW9uKCk7XG5cbmxldCBwbGF5ZXIxID0gUGxheWVyKCdQbGF5ZXIxJywgJ2h1bWFuJylcbmxldCBwbGF5ZXIyID0gUGxheWVyKCdQbGF5ZXIyJywgJ2FpJyk7XG5wbGF5ZXIxLnNldFR1cm4oKTtcblxubGV0IHBsYXllcjFTaGlwcyA9IHBsYXllcjEuYm9hcmQuc2hpcHM7XG5sZXQgcGxheWVyMlNoaXBzID0gcGxheWVyMi5ib2FyZC5zaGlwcztcblxuLy8gUGxhY2Ugc2hpcHMgZm9yIHBsYXllciBhbmQgYWlcbmZvcihsZXQgaSA9IDA7IGkgPD0gcGxheWVyMlNoaXBzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGxldCB5ID0gcGxheWVyMi5yYW5kb21OdW1iZXIoKTtcbiAgICBsZXQgeCA9IHBsYXllcjIucmFuZG9tTnVtYmVyKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMTtcbiAgICBpZihkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnXG4gICAgfVxuXG4gICAgd2hpbGUoIXBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHBsYXllcjJTaGlwc1tpXSx5LHgsZGlyZWN0aW9uKSkge1xuICAgICAgICB5ID0gcGxheWVyMi5yYW5kb21OdW1iZXIoKTtcbiAgICAgICAgeCA9IHBsYXllcjIucmFuZG9tTnVtYmVyKCk7XG4gICAgfVxufVxuXG5nYW1lLmxvYWRVcChwbGF5ZXIxLCBwbGF5ZXIyKTtcblxuLy8gcGxheWVyMS5hdHRhY2soMSwwLHBsYXllcjIuYm9hcmQpO1xuLy8gcGxheWVyMS5hdHRhY2soMiwwLHBsYXllcjIuYm9hcmQpO1xuLy8gcGxheWVyMS5hdHRhY2soMywwLHBsYXllcjIuYm9hcmQpO1xuLy8gcGxheWVyMS5hdHRhY2soNCwwLHBsYXllcjIuYm9hcmQpO1xuLy8gcGxheWVyMlNoaXBzLmZvckVhY2goZSA9PiB7XG4vLyAgICAgaWYoZS5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuLy8gICAgICAgICBpZihlLmdldFN1bmtTdGF0dXMoKSA9PT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgIGUuc2V0U3Vua1N0YXR1cygpXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KVxuXG4vLyBpZihwbGF5ZXIyLmJvYXJkLmdhbWVPdmVyKCkpIHtcbi8vICAgICBjb25zb2xlLmxvZygnR2FtZSBvdmVyJylcbi8vIH1cblxuLy8gaWYocGxheWVyMS5hdHRhY2soMCwxLHBsYXllcjIuYm9hcmQpID09PSAnaGl0JyB8fCAnbWlzcycpIHtcbi8vICAgICBjb25zb2xlLmxvZygnYmFuZyEnKVxuLy8gICAgIHBsYXllcjEuc2V0VHVybigpO1xuLy8gICAgIHBsYXllcjIuc2V0VHVybigpO1xuLy8gfVxuLy8gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coJ3RyeSBhZ2FpbicpXG4vLyB9XG5cbi8vIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuLy8gICAgIGlmKHBsYXllcjIuYXR0YWNrKDAsMCxwbGF5ZXIxLmJvYXJkKSA9PT0gJ2hpdCcgfHwgJ21pc3MnKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdiYW5nIScpXG4vLyAgICAgICAgIHBsYXllcjEuc2V0VHVybigpO1xuLy8gICAgICAgICBwbGF5ZXIyLnNldFR1cm4oKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0cnkgYWdhaW4nKVxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkLmJvYXJkKVxuLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==