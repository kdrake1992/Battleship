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
___CSS_LOADER_EXPORT___.push([module.id, "/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Fade in effect */\n#fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\n\n/* Fade out effect */\n#fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 12px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: .8em;\n}\n\n.gameBoards {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-left: -20px;\n}\n\n.gameBoards > div {\n  display: flex;\n  gap: 10px;\n}\n \n#player, #computer {\n  background-color: rgba(222,243,246, 0.8);\n}\n\n#playerWords, #computerWords {\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  text-align: center;\n  background-color: rgba(222,243,246, 0.6);\n}\n\n#computer .square {\n  cursor: crosshair;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Status bar */\n#status {\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.6);\n\n  margin-top: 20px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n#status p {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: large;\n\n  text-align: center;\n  overflow: hidden;\n  border-right: .15em solid black;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: .15em;\n  animation: \n    typing 3.5s steps(40,end),\n    blink-caret .75s step-end infinite;\n}\n\n/* Typing effect */\n@keyframes typing {\n  from {width: 0}\n  to {width: 100%;}\n}\n\n@keyframes blink-caret {\n  from, to {border-color: transparent}\n  50% { border-color: black;}\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;EACE,oBAAoB;EACpB,0DAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,UAAU;EACV,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,UAAU;EACV,+CAA+C;AACjD;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;;;EAGnB,gBAAgB;EAChB,yDAA4C;EAC5C,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;;EAER,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,kBAAkB;;EAElB,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;;EAEX,uBAAuB;EACvB,kBAAkB;;EAElB,wCAAwC;AAC1C;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gCAAgC;AAChC;EACE,YAAY;AACd;;AAEA,eAAe;AACf;EACE,YAAY;EACZ,0CAA0C;;EAE1C,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,gBAAgB;;EAEhB,kBAAkB;EAClB,gBAAgB;EAChB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB;;sCAEoC;AACtC;;AAEA,kBAAkB;AAClB;EACE,MAAM,QAAQ;EACd,IAAI,WAAW,CAAC;AAClB;;AAEA;EACE,UAAU,yBAAyB;EACnC,MAAM,mBAAmB,CAAC;AAC5B;;AAEA,WAAW;AACX;EACE,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,SAAS;;EAET,YAAY;EACZ,WAAW;EACX,YAAY;;EAEZ,kBAAkB;AACpB","sourcesContent":["/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url('./saira.ttf') format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Fade in effect */\n#fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\n\n/* Fade out effect */\n#fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(./oceanbackground.jpg);\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 12px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: .8em;\n}\n\n.gameBoards {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-left: -20px;\n}\n\n.gameBoards > div {\n  display: flex;\n  gap: 10px;\n}\n \n#player, #computer {\n  background-color: rgba(222,243,246, 0.8);\n}\n\n#playerWords, #computerWords {\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  text-align: center;\n  background-color: rgba(222,243,246, 0.6);\n}\n\n#computer .square {\n  cursor: crosshair;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Status bar */\n#status {\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.6);\n\n  margin-top: 20px;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n#status p {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: large;\n\n  text-align: center;\n  overflow: hidden;\n  border-right: .15em solid black;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: .15em;\n  animation: \n    typing 3.5s steps(40,end),\n    blink-caret .75s step-end infinite;\n}\n\n/* Typing effect */\n@keyframes typing {\n  from {width: 0}\n  to {width: 100%;}\n}\n\n@keyframes blink-caret {\n  from, to {border-color: transparent}\n  50% { border-color: black;}\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}"],"sourceRoot":""}]);
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
        console.log('Game Over')
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
                            console.log('ANOTHER BIG HIT (1)')
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
                            console.log('ANOTHER BIG HIT (2)')
                            previousY = y - 1;
                            previousX = x;
                            counter = 0;
                        }
                        else {
                            counter++;
                            console.log('Miss 2')
                        }
                    }
                    else if(counter === 2) {
                        if(x + 1 > 9) {
                            counter++;
                        }
                        else if(enemy.receiveAttack(y,  x + 1) === 'hit') {
                            console.log('ANOTHER BIG HIT (3)')
                            previousY = y;
                            previousX = x + 1;
                            counter = 0;
                        }
                        else {
                            counter++;
                            console.log('Miss 3')
                        }
                    }
                    else if(counter === 3) {
                        if(x - 1 < 0) {
                            console.log(x -1)
                            previousHit = false;
                            counter = 0
                        }
                        else if(enemy.receiveAttack(y, x - 1) === 'hit') {
                            console.log('ANOTHER BIG HIT (4)')
                            previousY = y;
                            previousX = x - 1;
                            counter = 0;
                        }
                        else {
                            previousHit = false;
                            counter = 0;
                            console.log('Miss 4 and reset')
                        }
                        
                    }
                }
            }
            else if(!previousHit) {
                if(enemy.receiveAttack(y,x) === 'hit') {
                    console.log('BIG HIT')
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

    // Grid to array position
    // Can write better logic later
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

        let test = 0

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
                                console.log(player1.board.board)
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

        // Listeners
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

        let computer = document.querySelector('#computer')
        computer.childNodes.forEach(e => {
            e.addEventListener('mouseover', function() {
                e.style.backgroundColor = 'lightgreen'
            })
            e.addEventListener('mouseout', function() {
                e.style.backgroundColor = 'transparent'
            })
            e.addEventListener('click', function() {
                e.style.backgroundColor = 'green'
            })
        })

        console.log(player2.board.board)
        console.log(player1.board.board)

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

// let counter = 0;
// while(!player1.board.gameOver()) {
//     counter++;
//     player2.attack(0,0,player1.board)
//     player1Ships.forEach(e => {
//         if(e.isSunk() === true) {
//             if(e.getSunkStatus() === false) {
//                 e.setSunkStatus()
//             }
//         }
//     });
//     console.log(counter);
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUE4QztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOENBQThDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUE4QztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBOEM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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c2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc2FpcmEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9vY2VhbmJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdldHRpbmcgZm9udCBpbmZvcm1hdGlvbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQWxsIGJ1dHRvbnMgKi9cXG5idXR0b24ge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGYWRlIGluIGVmZmVjdCAqL1xcbiNmYWRlSW4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIGxpbmVhcjtcXG59XFxuXFxuLyogRmFkZSBvdXQgZWZmZWN0ICovXFxuI2ZhZGVPdXQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMnMsIG9wYWNpdHkgMnMgbGluZWFyO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIFRpdGxlICovXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuXFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4udGl0bGUgaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50aXRsZSBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpdGxlIGE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi50aXRsZSBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGl0bGUgYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogQm9hcmRzIGRpdiAqL1xcbi5ib2FyZHMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcblxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuOCk7XFxufVxcblxcbi8qIFBsYXllciBhbmQgQUkgQm9hcmQgZGl2ICovXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IC44ZW07XFxufVxcblxcbi5nYW1lQm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbn1cXG5cXG4uZ2FtZUJvYXJkcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4gXFxuI3BsYXllciwgI2NvbXB1dGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuOCk7XFxufVxcblxcbiNwbGF5ZXJXb3JkcywgI2NvbXB1dGVyV29yZHMge1xcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXG4gIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwyNDMsMjQ2LCAwLjYpO1xcbn1cXG5cXG4jY29tcHV0ZXIgLnNxdWFyZSB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLyogQnV0dG9ucyBvbiBwbGFjZW1lbnQgc2NyZWVuICovXFxuI2RpcmVjdGlvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi8qIFN0YXR1cyBiYXIgKi9cXG4jc3RhdHVzIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG5cXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc3RhdHVzIHAge1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0OiAuMTVlbSBzb2xpZCBibGFjaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiAuMTVlbTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHR5cGluZyAzLjVzIHN0ZXBzKDQwLGVuZCksXFxuICAgIGJsaW5rLWNhcmV0IC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi8qIFR5cGluZyBlZmZlY3QgKi9cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHt3aWR0aDogMH1cXG4gIHRvIHt3aWR0aDogMTAwJTt9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xcbiAgZnJvbSwgdG8ge2JvcmRlci1jb2xvcjogdHJhbnNwYXJlbnR9XFxuICA1MCUgeyBib3JkZXItY29sb3I6IGJsYWNrO31cXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuXFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw2QkFBNkI7QUFDN0I7RUFDRSxvQkFBb0I7RUFDcEIsMERBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtDQUErQztBQUNqRDs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7OztFQUduQixnQkFBZ0I7RUFDaEIseURBQTRDO0VBQzVDLHNCQUFzQjtBQUN4Qjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixRQUFROztFQUVSLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXOztFQUVYLHVCQUF1QjtFQUN2QixrQkFBa0I7O0VBRWxCLHdDQUF3QztBQUMxQzs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGdDQUFnQztBQUNoQztFQUNFLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxZQUFZO0VBQ1osMENBQTBDOztFQUUxQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQjs7c0NBRW9DO0FBQ3RDOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLE1BQU0sUUFBUTtFQUNkLElBQUksV0FBVyxDQUFDO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVSx5QkFBeUI7RUFDbkMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTOztFQUVULFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2V0dGluZyBmb250IGluZm9ybWF0aW9uICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJztcXG4gIHNyYzogdXJsKCcuL3NhaXJhLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEFsbCBidXR0b25zICovXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRmFkZSBpbiBlZmZlY3QgKi9cXG4jZmFkZUluIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBsaW5lYXI7XFxufVxcblxcbi8qIEZhZGUgb3V0IGVmZmVjdCAqL1xcbiNmYWRlT3V0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDJzLCBvcGFjaXR5IDJzIGxpbmVhcjtcXG59XFxuXFxuLyogQm9keSAqL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL29jZWFuYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogVGl0bGUgKi9cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG5cXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRpdGxlIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGl0bGUgYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRpdGxlIGE6aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi50aXRsZSBhOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBCb2FyZHMgZGl2ICovXFxuLmJvYXJkcyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxuXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsMjQzLDI0NiwgMC44KTtcXG59XFxuXFxuLyogUGxheWVyIGFuZCBBSSBCb2FyZCBkaXYgKi9cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogLjhlbTtcXG59XFxuXFxuLmdhbWVCb2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxufVxcblxcbi5nYW1lQm9hcmRzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbiBcXG4jcGxheWVyLCAjY29tcHV0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsMjQzLDI0NiwgMC44KTtcXG59XFxuXFxuI3BsYXllcldvcmRzLCAjY29tcHV0ZXJXb3JkcyB7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuNik7XFxufVxcblxcbiNjb21wdXRlciAuc3F1YXJlIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4vKiBCdXR0b25zIG9uIHBsYWNlbWVudCBzY3JlZW4gKi9cXG4jZGlyZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLyogU3RhdHVzIGJhciAqL1xcbiNzdGF0dXMge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcblxcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzdGF0dXMgcCB7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIGJsYWNrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4xNWVtO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdHlwaW5nIDMuNXMgc3RlcHMoNDAsZW5kKSxcXG4gICAgYmxpbmstY2FyZXQgLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLyogVHlwaW5nIGVmZmVjdCAqL1xcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge3dpZHRoOiAwfVxcbiAgdG8ge3dpZHRoOiAxMDAlO31cXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XFxuICBmcm9tLCB0byB7Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudH1cXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogYmxhY2s7fVxcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG5cXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIC8vIEdlbmVyYXRlcyBib2FyZFxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICBnYW1lQm9hcmQucHVzaChyb3cpO1xuICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbnMgYm9hcmRcbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgLy8gQ29udGFpbnMgc2hpcHMgaW4gZ2FtZVxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgLy8gQWRkcyBzaGlwIGludG8gc2hpcCBhcnJheVxuICAgIGNvbnN0IGFkZFNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cbiAgICBcblxuICAgIC8vIFBsYWNlcyBzaGlwXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHksIHBsYWNlbWVudCkgPT4ge1xuICAgICAgICBpZihwbGFjZW1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYoeCArIHNoaXAuZ2V0TGVuZ3RoKCkgPD0gMTApIHtcbiAgICAgICAgICAgICAgICBpZighY2hlY2tCb2FyZChzaGlwLHgseSxwbGFjZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeV1baV0gPSBzaGlwLmdldElEKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXAuc2V0UGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwbGFjZW1lbnQgID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBpZih5ICsgc2hpcC5nZXRMZW5ndGgoKSA8PSAxMCkge1xuICAgICAgICAgICAgICAgIGlmKCFjaGVja0JvYXJkKHNoaXAseCx5LHBsYWNlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVt4XSA9IHNoaXAuZ2V0SUQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcC5zZXRQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tzIGJvYXJkIGlmIHRoZXJlIGlzIGEgc2hpcCBhbHJlYWR5IHBsYWNlZCBcbiAgICBjb25zdCBjaGVja0JvYXJkID0gKHNoaXAseCx5LHBsYWNlbWVudCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xuICAgICAgICBpZihwbGFjZW1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFt5XVtpXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocGxhY2VtZW50ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW3hdICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gQ2hlY2tzIHNoaXAgcGxhY2VtZW50IGZvciBET01cbiAgICBjb25zdCBjaGVja1BsYWNlbWVudCA9IChzaGlwLHgseSxwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgaWYocGxhY2VtZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeV1baV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpID4gOSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGJvYXJkW2ldW3hdICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERldGVybWluZXMgd2hldGhlciBvciBvbnQgdGhlIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgLy8gYW5kIHNlbmRzIGEgaGl0IGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXBcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgseSkgPT4ge1xuICAgICAgICBpZihib2FyZFt5XVt4XSAhPT0gJycgJiYgYm9hcmRbeV1beF0gIT09ICd4JyAmJiBib2FyZFt5XVt4XSAhPT0gJ28nKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihzaGlwc1tpXS5nZXRJRCgpID09PSBib2FyZFt5XVt4XSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uc2hpcExheW91dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uc2hpcExheW91dFtqXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KGorMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3ldW3hdID0gJ3gnXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihib2FyZFt5XVt4XSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RvdWJsZUhpdCdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3ldW3hdID0gJ28nXG4gICAgICAgICAgICByZXR1cm4gJ21pc3MnXG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvLyBDaGVja3MgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdWNrXG4gICAgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoc2hpcHNbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2JvYXJkLCBzaGlwcywgYWRkU2hpcCwgcGxhY2VTaGlwLCBjaGVja1BsYWNlbWVudCwgcmVjZWl2ZUF0dGFjaywgZ2FtZU92ZXJ9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkOyIsImltcG9ydCBzaGlwIGZyb20gJy4vc2hpcCdcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnXG5cbi8vIFBsYXllciBjbGFzc1xuY29uc3QgUGxheWVyID0gKG5hbWUsIHR5cGUpID0+IHtcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgICBsZXQgcHJldmlvdXNYID0gJyc7XG4gICAgbGV0IHByZXZpb3VzWSA9ICcnO1xuICAgIGxldCBwcmV2aW91c0hpdCA9IGZhbHNlO1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgYm9hcmQuYWRkU2hpcChzaGlwKDUsJ0NhcnJpZXInKSlcbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoNCwnQmF0dGxlc2hpcCcpKVxuICAgIGJvYXJkLmFkZFNoaXAoc2hpcCgzLCdEZXN0cm95ZXInKSlcbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoMywnU3VibWFyaW5lJykpXG4gICAgYm9hcmQuYWRkU2hpcChzaGlwKDIsJ1BhdHJvbCBCb2F0JykpXG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0dGVyc1xuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgICAgICBwbGF5ZXJOYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZih0dXJuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHVybiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHVybiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdHVybiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgZm9yIHRoZSBhaVxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoeCx5LCBlbmVteSkgPT4ge1xuICAgICAgICBpZih0eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5lbXkucmVjZWl2ZUF0dGFjayh4LHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWkgd2lsbCBkcmF3IGEgcmFuZG9tIG51bWJlciBmb3IgdGhlIGdyaWRcbiAgICAgICAgLy8gSWYgcHJldmlvdXMgdHVybiB3YXMgYSBoaXQsIHdpbGwgaGl0IGFyb3VuZC5cbiAgICAgICAgZWxzZSBpZih0eXBlID09PSAnYWknKSB7XG4gICAgICAgICAgICBsZXQgeSA9ICByYW5kb21OdW1iZXIoKTtcbiAgICAgICAgICAgIGxldCB4ID0gIHJhbmRvbU51bWJlcigpO1xuXG4gICAgICAgICAgICBpZihwcmV2aW91c0hpdCkge1xuICAgICAgICAgICAgICAgIHkgPSBwcmV2aW91c1k7XG4gICAgICAgICAgICAgICAgeCA9IHByZXZpb3VzWDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxwJylcbiAgICAgICAgICAgICAgICBpZihjb3VudGVyIDw9IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVuZW15LnJlY2VpdmVBdHRhY2soeSArIDEsIHgpID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBTk9USEVSIEJJRyBISVQgKDEpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSB5ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ggPSB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNaXNzIDEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZW5lbXkucmVjZWl2ZUF0dGFjayh5IC0gMSwgeCkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FOT1RIRVIgQklHIEhJVCAoMiknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWSA9IHkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pc3MgMicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihjb3VudGVyID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih4ICsgMSA+IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGVuZW15LnJlY2VpdmVBdHRhY2soeSwgIHggKyAxKSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQU5PVEhFUiBCSUcgSElUICgzKScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ggPSB4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWlzcyAzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNvdW50ZXIgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHggLSAxIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHksIHggLSAxKSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQU5PVEhFUiBCSUcgSElUICg0KScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ggPSB4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pc3MgNCBhbmQgcmVzZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCFwcmV2aW91c0hpdCkge1xuICAgICAgICAgICAgICAgIGlmKGVuZW15LnJlY2VpdmVBdHRhY2soeSx4KSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JJRyBISVQnKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSB5O1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ggPSB4O1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0hpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBmb2xsb3dpbmdcbiAgICByZXR1cm4ge2JvYXJkLCBnZXROYW1lLCBnZXRUdXJuLCBzZXROYW1lLCBzZXRUdXJuLCByYW5kb21OdW1iZXIsIGF0dGFja31cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgaW50ZXJhY3Rpb24gPSAoKSA9PiB7XG4gICAgbGV0IHNoaXBOdW0gPSAwO1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuXG4gICAgLy8gQ3JlYXRlIGluaXRpYWwgZGl2c1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdzdGF0dXMnKTtcblxuICAgIGNvbnN0IGNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbnRlci5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIC8vIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgLy8gSW5pdGlhbCBsb2FkIHVwXG4gICAgY29uc3QgbG9hZFVwID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVXb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpblN0YXJ0JylcblxuICAgICAgICBjb25zdCBob3dUbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICB0aXRsZVdvcmRzLmlubmVySFRNTCA9ICdCYXR0bGVzaGlwJztcbiAgICAgICAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0J1xuICAgICAgICBob3dUby5pbm5lckhUTUwgPSBcIjxhIGhyZWY9J2h0dHBzOi8vd3d3Lmhhc2Jyby5jb20vY29tbW9uL2luc3RydWN0L2JhdHRsZXNoaXAucGRmJz5Ib3cgdG8gUGxheTwvYT5cIlxuXG5cbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVXb3Jkcyk7XG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoaG93VG8pXG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdCgpKTtcblxuICAgICAgICAvLyBJbml0aWFsIHN0YXJ0IGJ1dHRvblxuICAgICAgICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU3RhcnQnKTtcbiAgICAgICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHBsYWNlbWVudChwbGF5ZXIxLCBwbGF5ZXIyKTtcblxuICAgICAgICAgICAgLy8gT25jZSBwbGFjZW1lbnQgaXMgZG9uZSwgbW92ZSB0byBnYW1lXG4gICAgICAgICAgICBjb25zdCBiYXR0bGVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVTdGFydCcpO1xuICAgICAgICAgICAgYmF0dGxlU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZWFkeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWRlUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmFjdGlvbihwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIENoYW5nZXMgc2hpcCBwbGFjZW1lbnQgZnJvbSBob3Jpem9udGFsIGFuZCB2ZXJpdGNhbFxuICAgIGNvbnN0IGRpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbicpO1xuICAgICAgICBkaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmKGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPT09ICdIb3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnVmVydGljYWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIHRoZSBwbGF5ZXIgYW5kIGVuZW15IDEweDEwIGJvYXJkXG4gICAgY29uc3QgYm9hcmRNYWtlciA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgbGV0IHBsYXllckJvYXJkID0gYm9hcmRHZW5lcmF0b3IoKTtcbiAgICAgICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBib2FyZEdlbmVyYXRvcigpO1xuXG4gICAgICAgIGlmKHR5cGUgPT09ICdnYW1lJykge1xuICAgICAgICAgICAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2dhbWVCb2FyZHMnKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyJyk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcHV0ZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBib3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgY29uc3QgdG9wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0b3BUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcHV0ZXJXb3JkcycpO1xuICAgICAgICAgICAgYm90VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllcldvcmRzJyk7XG5cbiAgICAgICAgICAgIHRvcFRleHQuaW5uZXJIVE1MID0gJ0VuZW15JztcbiAgICAgICAgICAgIGJvdFRleHQuaW5uZXJIVE1MID0gJ1BsYXllcic7XG5cblxuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKHRvcFRleHQpO1xuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuICAgICAgICAgICAgYm90LmFwcGVuZENoaWxkKGJvdFRleHQpO1xuICAgICAgICAgICAgYm90LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICAgICAgICAgICAgYm9hcmRzLmFwcGVuZENoaWxkKHRvcCk7XG4gICAgICAgICAgICBib2FyZHMuYXBwZW5kQ2hpbGQoYm90KTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvYXJkc1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib2FyZHMuY2xhc3NMaXN0LmFkZCgnYm9hcmRzJyk7XG4gICAgICAgICAgICBib2FyZHMuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpXG4gICAgICAgICAgICByZXR1cm4gYm9hcmRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQm9hcmQgZ2VuZXJhdG9yIFxuICAgIGNvbnN0IGJvYXJkR2VuZXJhdG9yID0gKCkgPT4ge1xuICAgICAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgKDEwKjEwKTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGkpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICAvLyBHcmlkIHRvIGFycmF5IHBvc2l0aW9uXG4gICAgLy8gQ2FuIHdyaXRlIGJldHRlciBsb2dpYyBsYXRlclxuICAgIGNvbnN0IHBvc2l0aW9uID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgIGxldCBwWFkgPSBbXTtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDA7XG5cbiAgICAgICAgLy8gR2V0cyB4IGF4aXNcbiAgICAgICAgaWYobG9jYXRpb24gPD0gOSkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSAxMCAmJiBsb2NhdGlvbiA8PTE5KSB7XG4gICAgICAgICAgICB4ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDIwICYmIGxvY2F0aW9uIDw9MjkpIHtcbiAgICAgICAgICAgIHggPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gMzAgJiYgbG9jYXRpb24gPD0zOSkge1xuICAgICAgICAgICAgeCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA0MCAmJiBsb2NhdGlvbiA8PTQ5KSB7XG4gICAgICAgICAgICB4ID0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDUwICYmIGxvY2F0aW9uIDw9NTkpIHtcbiAgICAgICAgICAgIHggPSA1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gNjAgJiYgbG9jYXRpb24gPD02OSkge1xuICAgICAgICAgICAgeCA9IDY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA3MCAmJiBsb2NhdGlvbiA8PTc5KSB7XG4gICAgICAgICAgICB4ID0gNztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDgwICYmIGxvY2F0aW9uIDw9ODkpIHtcbiAgICAgICAgICAgIHggPSA4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gOTAgJiYgbG9jYXRpb24gPD05OSkge1xuICAgICAgICAgICAgeCA9IDk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEdldHMgdGhlIGxhc3QgZGlnaXQgb2YgdGhlIGxvY2F0aW9uXG4gICAgICAgIGlmKGxvY2F0aW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvblswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb25bMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXRzIHkgYXhpc1xuICAgICAgICBpZihsb2NhdGlvbiA9PSAwKSB7XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDEpIHtcbiAgICAgICAgICAgIHkgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gMikge1xuICAgICAgICAgICAgeSA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSAzKSB7XG4gICAgICAgICAgICB5ID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDQpIHtcbiAgICAgICAgICAgIHkgPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gNSkge1xuICAgICAgICAgICAgeSA9IDU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA2KSB7XG4gICAgICAgICAgICB5ID0gNjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDcpIHtcbiAgICAgICAgICAgIHkgPSA3O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gOCkge1xuICAgICAgICAgICAgeSA9IDg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA5KSB7XG4gICAgICAgICAgICB5ID0gOTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBYWS5wdXNoKHgpO1xuICAgICAgICBwWFkucHVzaCh5KTtcbiAgICAgICAgcmV0dXJuIHBYWTtcbiAgICB9XG5cblxuICAgIC8vIEJhdHRsZXNoaXAgVGl0bGUgYXQgdG9wXG4gICAgY29uc3QgcGxhY2VtZW50ID0gKHBsYXllcjEpID0+IHtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRpdGxlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGl0bGUuc3R5bGUucGFkZGluZyA9ICc3cHgnO1xuICAgICAgICB0aXRsZS5zdHlsZS5tYXJnaW5Ub3AgPSAnMTBweCc7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cbiAgICAgICAgY29uc3QgdGl0bGVXb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlV29yZHMuaW5uZXJIVE1MID0gJ0JhdHRsZXNoaXAnO1xuXG4gICAgICAgIC8vIEhvcml6b250YWwvVmVydGljYWwgYnV0dG9uXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkaXJlY3Rpb25CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkaXJlY3Rpb24nKVxuICAgICAgICBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gJ0hvcml6b250YWwnXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwbGF5ZXIgYm9hcmRcbiAgICAgICAgY29uc3QgYm9hcmQgPSBib2FyZE1ha2VyKCk7XG5cbiAgICAgICAgLy8gU3RhcnQgYmF0dGxlIGJ1dHRvblxuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhdHRsZVN0YXJ0JylcbiAgICAgICAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0IEJhdHRsZSdcblxuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVdvcmRzKTtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChkaXJlY3Rpb25CdXR0b24pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkKVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290KCkpO1xuXG4gICAgICAgIC8vIFNldHMgZGlyZWN0aW9uXG4gICAgICAgIGRpcmVjdGlvbigpO1xuXG4gICAgICAgIC8vIEhvdmVyIG92ZXIgZWZmZWN0XG4gICAgICAgIGxldCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSAwO1xuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgY29uc3QgcmVtb3ZlRXZlbnRzID0gKG9iaikgPT4ge1xuICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXQpXG4gICAgICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VvdmVyKVxuICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2spXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGVzdCA9IDBcblxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjaGVjayB0aGUgY29kZVxuICAgICAgICBjb25zdCBjaGVja0hvdmVyID0gKGUsIHR5cGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsb2MgPSBwb3NpdGlvbihlLmlkKTtcblxuICAgICAgICAgICAgaWYocGxheWVyMS5ib2FyZC5jaGVja1BsYWNlbWVudChwbGF5ZXIxLmJvYXJkLnNoaXBzW3NoaXBOdW1dLCBsb2NbMV0sIGxvY1swXSwgZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIGlmKGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBwYXJzZUludChlLmlkKSArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAocGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXSwgbG9jWzFdLCBsb2NbMF0sIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudHMobmV4dFBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpICsgMSA9PSBwbGF5ZXIxLmJvYXJkLnNoaXBzW3NoaXBOdW1dLmdldExlbmd0aCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBOdW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXS5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHBhcnNlSW50KGUuaWQpICsgKDEwICogaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAocGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXSwgbG9jWzFdLCBsb2NbMF0sIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjEuYm9hcmQuYm9hcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudHMobmV4dFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSArIDEgPT0gcGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXS5nZXRMZW5ndGgoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYm9hcmQuc2hpcHNbc2hpcE51bV0uZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBwYXJzZUludChlLmlkKSArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigobmV4dCAlIDEwID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnbW91c2VvdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyMS5ib2FyZC5zaGlwc1tzaGlwTnVtXS5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHBhcnNlSW50KGUuaWQpICsgKDEwICogaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0ID4gOTkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRQb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnbW91c2VvdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIG9uY2UgZmluaXNoXG4gICAgICAgICAgICBpZihzaGlwTnVtID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIC8vIEZ1bmN0aW9uIGhhbmRsZXJcbiAgICAgICAgY29uc3QgbW91c2VvdmVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2hlY2tIb3ZlcihlLnRhcmdldCwgJ21vdXNlb3ZlcicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vdXNlb3V0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2hlY2tIb3ZlcihlLnRhcmdldCwgJ21vdXNlb3V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjaGVja0hvdmVyKGUudGFyZ2V0LCAnY2xpY2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpc3RlbmVyc1xuICAgICAgICBwbGF5ZXJTcXVhcmUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VvdmVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgcGxheWVyU3F1YXJlLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXQpO1xuICAgICAgICB9KVxuICAgICAgICBwbGF5ZXJTcXVhcmUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljaylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBGYWRlIG91dCBwbGFjZW1lbnQgc2NyZWVuXG4gICAgY29uc3QgZmFkZVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgLy8gRmFkZSBvdXQgYW5kIHJlbW92ZSBzY3JlZW5zXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24nKTtcbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlU3RhcnQnKTtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gICAgICAgIFxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhZGVPdXQnKTtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmFkZU91dCcpO1xuICAgICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhZGVPdXQnKTtcbiAgICAgICAgcGxhY2VtZW50Qm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdmYWRlT3V0Jyk7XG5cbiAgICAgICAgdGl0bGUucmVtb3ZlKCk7XG4gICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgc3RhcnRCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIHBsYWNlbWVudEJvYXJkLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgLy8gR2FtZSBpbnRlcmFjdGlvblxuICAgIGNvbnN0IGdhbWVJbnRlcmFjdGlvbiA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gICAgICAgIC8vIEFkZCB0aGUgMiBuZXcgYm9hcmRzIGFuZCBzdGF0dXNcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXR1cycpO1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjdXJyZW50U3RhdHVzLmlubmVySFRNTCA9ICdMZXQgdGhlIGJhdHRsZSBiZWdpbiEnXG5cbiAgICAgICAgbGV0IGdhbWUgPSBib2FyZE1ha2VyKCdnYW1lJyk7XG5cbiAgICAgICAgLy8gQWxpZ24gdGhlIGRpdnNcbiAgICAgICAgc3RhdHVzLmFwcGVuZENoaWxkKGN1cnJlbnRTdGF0dXMpO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGdhbWUsIGZvb3Rlcik7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKHN0YXR1cywgZ2FtZSk7XG5cbiAgICAgICAgbGV0IGNvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyJylcbiAgICAgICAgY29tcHV0ZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZWVuJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjIuYm9hcmQuYm9hcmQpXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjEuYm9hcmQuYm9hcmQpXG5cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZm9vdGVyIFxuICAgIGZ1bmN0aW9uIGZvb3QoKSB7XG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnPHA+TWFkZSBieSBLZXZpbiBEcmFrZSBmb3IgVGhlIE9kaW4gUHJvamVjdCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tkcmFrZTE5OTJcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+PC9hPjxwPidcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWRVcH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3Rpb247IiwiLy8gU2hpcCBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBzaGlwID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xuICAgIC8vIE1ha2VzIGFuIGFycmF5IGVxdWFsIHRvIHRoZSBzaGlwcyBsZW5ndGhcbiAgICBjb25zdCBzaGlwTGF5b3V0ID0gWy4uLkFycmF5KGxlbmd0aCldO1xuICAgIGNvbnN0IGlkID0gbmFtZS5jaGFyQXQoMCk7XG4gICAgbGV0IHBsYWNlbWVudCA9ICcnXG4gICAgbGV0IHN1bmtTdGF0ID0gZmFsc2U7XG5cbiAgICAvLyBSZXR1cm4gc2hpcCBsZW5ndGhcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9ICAgXG4gICAgXG4gICAgLy8gUmV0dXJuIHNoaXAgbGVuZ3RoXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBzaGlwSURcbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBwbGFjZW1lbnRcbiAgICBjb25zdCBnZXRQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gR2V0IHN1bmsgc3RhdHVzXG4gICAgY29uc3QgZ2V0U3Vua1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bmtTdGF0O1xuICAgIH1cblxuICAgIC8vIFNldCBwbGFjZW1lbnRcbiAgICBjb25zdCBzZXRQbGFjZW1lbnQgPSAocGxhY2UpID0+IHtcbiAgICAgICAgcGxhY2VtZW50ID0gcGxhY2U7XG4gICAgfVxuXG4gICAgLy8gU2V0IHNpbmsgc3RhdHVzXG4gICAgY29uc3Qgc2V0U3Vua1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgc3Vua1N0YXQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgJyBoYXMgc3VuayEnKVxuICAgIH1cblxuICAgIC8vIEhpdHMgYSBzaGlwXG4gICAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgICAgICBzaGlwTGF5b3V0W251bS0xXSA9ICd4J1xuICAgIH1cblxuICAgIC8vIENoZWNrcyBpZiB0aGUgc2hpcCBoYXMgc3Vua1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYoc2hpcExheW91dC5ldmVyeShlID0+IGUgPT09ICd4JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgZm9sbG93aW5nXG4gICAgcmV0dXJue3NoaXBMYXlvdXQsIGdldE5hbWUsIGdldExlbmd0aCwgZ2V0SUQsIGdldFBsYWNlbWVudCwgZ2V0U3Vua1N0YXR1cywgc2V0UGxhY2VtZW50LCBzZXRTdW5rU3RhdHVzLGhpdCwgaXNTdW5rfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgaW50ZXJhY3Rpb24gZnJvbSAnLi9pbnRlcmFjdGlvbic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJ1xuXG5cbi8vIFN0YXJ0IHVwIGdhbWVcbmxldCBnYW1lID0gaW50ZXJhY3Rpb24oKTtcblxubGV0IHBsYXllcjEgPSBQbGF5ZXIoJ1BsYXllcjEnLCAnaHVtYW4nKVxubGV0IHBsYXllcjIgPSBQbGF5ZXIoJ1BsYXllcjInLCAnYWknKTtcbnBsYXllcjEuc2V0VHVybigpO1xuXG5sZXQgcGxheWVyMVNoaXBzID0gcGxheWVyMS5ib2FyZC5zaGlwcztcbmxldCBwbGF5ZXIyU2hpcHMgPSBwbGF5ZXIyLmJvYXJkLnNoaXBzO1xuXG4vLyBQbGFjZSBzaGlwcyBmb3IgcGxheWVyIGFuZCBhaVxuZm9yKGxldCBpID0gMDsgaSA8PSBwbGF5ZXIyU2hpcHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgbGV0IHkgPSBwbGF5ZXIyLnJhbmRvbU51bWJlcigpO1xuICAgIGxldCB4ID0gcGxheWVyMi5yYW5kb21OdW1iZXIoKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgIGlmKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSAyKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCdcbiAgICB9XG5cbiAgICB3aGlsZSghcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAocGxheWVyMlNoaXBzW2ldLHkseCxkaXJlY3Rpb24pKSB7XG4gICAgICAgIHkgPSBwbGF5ZXIyLnJhbmRvbU51bWJlcigpO1xuICAgICAgICB4ID0gcGxheWVyMi5yYW5kb21OdW1iZXIoKTtcbiAgICB9XG59XG5cbmdhbWUubG9hZFVwKHBsYXllcjEsIHBsYXllcjIpO1xuXG4vLyBsZXQgY291bnRlciA9IDA7XG4vLyB3aGlsZSghcGxheWVyMS5ib2FyZC5nYW1lT3ZlcigpKSB7XG4vLyAgICAgY291bnRlcisrO1xuLy8gICAgIHBsYXllcjIuYXR0YWNrKDAsMCxwbGF5ZXIxLmJvYXJkKVxuLy8gICAgIHBsYXllcjFTaGlwcy5mb3JFYWNoKGUgPT4ge1xuLy8gICAgICAgICBpZihlLmlzU3VuaygpID09PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICBpZihlLmdldFN1bmtTdGF0dXMoKSA9PT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgICAgICBlLnNldFN1bmtTdGF0dXMoKVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgY29uc29sZS5sb2coY291bnRlcik7XG4vLyB9XG5cbi8vIHBsYXllcjEuYXR0YWNrKDEsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDIsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDMsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDQsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjJTaGlwcy5mb3JFYWNoKGUgPT4ge1xuLy8gICAgIGlmKGUuaXNTdW5rKCkgPT09IHRydWUpIHtcbi8vICAgICAgICAgaWYoZS5nZXRTdW5rU3RhdHVzKCkgPT09IGZhbHNlKSB7XG4vLyAgICAgICAgICAgICBlLnNldFN1bmtTdGF0dXMoKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSlcblxuLy8gaWYocGxheWVyMi5ib2FyZC5nYW1lT3ZlcigpKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpXG4vLyB9XG5cbi8vIGlmKHBsYXllcjEuYXR0YWNrKDAsMSxwbGF5ZXIyLmJvYXJkKSA9PT0gJ2hpdCcgfHwgJ21pc3MnKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2JhbmchJylcbi8vICAgICBwbGF5ZXIxLnNldFR1cm4oKTtcbi8vICAgICBwbGF5ZXIyLnNldFR1cm4oKTtcbi8vIH1cbi8vIGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKCd0cnkgYWdhaW4nKVxuLy8gfVxuXG4vLyBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgICBpZihwbGF5ZXIyLmF0dGFjaygwLDAscGxheWVyMS5ib2FyZCkgPT09ICdoaXQnIHx8ICdtaXNzJykge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnYmFuZyEnKVxuLy8gICAgICAgICBwbGF5ZXIxLnNldFR1cm4oKTtcbi8vICAgICAgICAgcGxheWVyMi5zZXRUdXJuKCk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndHJ5IGFnYWluJylcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2cocGxheWVyMS5ib2FyZC5ib2FyZClcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=