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
___CSS_LOADER_EXPORT___.push([module.id, "/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 15px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  display: grid;\n\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: 1em;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;EACE,oBAAoB;EACpB,0DAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;;;EAGnB,gBAAgB;EAChB,yDAA4C;EAC5C,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;;EAER,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,kBAAkB;;EAElB,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,aAAa;;EAEb,eAAe;EACf,aAAa;EACb,YAAY;EACZ,WAAW;;EAEX,uBAAuB;EACvB,kBAAkB;;EAElB,wCAAwC;AAC1C;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,YAAY;AACd;;AAEA,WAAW;AACX;EACE,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,SAAS;;EAET,YAAY;EACZ,WAAW;EACX,YAAY;;EAEZ,kBAAkB;AACpB","sourcesContent":["/* Getting font information */\n@font-face {\n  font-family: 'Saira';\n  src: url('./saira.ttf') format('ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\n/* All buttons */\nbutton {\n  padding: 7px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n}\n\n/* Body */\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  min-height: 100%;\n  background-image: url(./oceanbackground.jpg);\n  background-size: cover;\n}\n\n/* Title */\n.title {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 30%;\n\n  gap: 20px;\n  padding: 15px;\n  border-radius: 5px;\n  text-align: center;\n\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.title h1 {\n  font-size: 40px;\n  font-family: 'Saira', sans-serif;\n}\n\n.title a {\n  color: black;\n}\n\n.title a:link {\n  text-decoration: none;\n}\n\n.title a:hover {\n  color: blue;\n}\n\n.title a:visited {\n  text-decoration: none;\n}\n\n/* Boards div */\n.boards {\n  display: grid;\n\n  font-size: 20px;\n  padding: 10px;\n  height: auto;\n  width: auto;\n\n  border: 1px black solid;\n  border-radius: 5px;\n  \n  background-color: rgba(222,243,246, 0.8);\n}\n\n/* Player and AI Board div */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.square {\n  border: 1px solid black;\n  padding: 1em;\n}\n\n/* Buttons on placement screen */\n#direction {\n  width: 100px;\n}\n\n/* Footer */\n.footer {\n  background-color:  black;\n  color: white;\n  position: absolute;\n  bottom: 0;\n\n  height: 30px;\n  width: 100%;\n  padding: 5px;\n\n  text-align: center;\n}"],"sourceRoot":""}]);
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
    const boardMaker = (player1, player2) => {
        const boards = document.createElement('div')
        boards.classList.add('boards');

        const playerBoard = document.createElement('div');
        playerBoard.classList.add('board');
        playerBoard.setAttribute('id', 'player')

        for(let i = 0; i < (10*10); i++) {
            let square = document.createElement('div') 
            square.classList.add('square');
            square.setAttribute('id', i);
            playerBoard.appendChild(square);
        }
     
        const computerBoard = document.createElement('div');
        computerBoard.classList.add('board');
        computerBoard.setAttribute('id', 'computer');

        boards.appendChild(playerBoard)
        return boards;
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
    const placement = (player1, player2) => {
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
        const board = boardMaker(player1, player2);


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
            if(player1.board.checkPlacement(player1.board.ships[0], loc[1], loc[0],directionButton.innerHTML.toLowerCase())) {
                if(directionButton.innerHTML.toLowerCase() == 'horizontal') {
                    for(let i = 0; i < player1.board.ships[0].getLength(); i++) {
                        let next = parseInt(e.id) + i;
                        let nextPos = document.getElementById(next);
                        if(type === 'mouseover') {
                            nextPos.style.backgroundColor = 'lightgreen';
                        }
                        else if(type === 'mouseout') {
                            nextPos.style.backgroundColor = 'transparent';
                        }
                        else if(type === 'click') {
                            nextPos.style.backgroundColor = 'green';
                            removeEvents(nextPos)
                        }

                    }
                }
                else if(directionButton.innerHTML.toLowerCase() == 'vertical') {
                    for(let i = 0; i < player1.board.ships[0].getLength(); i++) {
                        let next = parseInt(e.id) + (10 * i);
                        let nextPos = document.getElementById(next);
                        if(type === 'mouseover') {
                            nextPos.style.backgroundColor = 'lightgreen';
                        }
                        else if(type === 'mouseout') {
                            nextPos.style.backgroundColor = 'transparent';
                        }
                        else if(type === 'click') {
                            nextPos.style.backgroundColor = 'green';
                            removeEvents(nextPos);
                        }
                    }
                }
            }
            else {
                if(directionButton.innerHTML.toLowerCase() == 'horizontal') {
                    for(let i = 0; i < player1.board.ships[0].getLength(); i++) {
                        let next = parseInt(e.id) + i;
                        if((next % 10 === 0)) {
                            break;
                        }
                        else {
                            let nextPos = document.getElementById(next);
                            if(type === 'mouseover') {
                                nextPos.style.backgroundColor = 'red';
                            }
                            if(type === 'mouseout') {
                                nextPos.style.backgroundColor = 'transparent';
                            }
                        }
                    }
                }
                else if(directionButton.innerHTML.toLowerCase() == 'vertical') {
                    for(let i = 0; i < player1.board.ships[0].getLength(); i++) {
                        let next = parseInt(e.id) + (10 * i);
                        if(next > 99) {
                            break;
                        }
                        else{
                            let nextPos = document.getElementById(next);
                            if(type === 'mouseover') {
                                nextPos.style.backgroundColor = 'red';
                            }
                            if(type === 'mouseout') {
                                nextPos.style.backgroundColor = 'transparent';
                            }
                        }
                    }
                }
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


console.log(player1.board.board)
console.log(player2.board.board)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSTtBQUN0QixrQkFBa0IsNENBQUk7QUFDdEIsa0JBQWtCLDRDQUFJOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUM5SXJCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3Q0FBd0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3Q0FBd0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3Q0FBd0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0NBQXdDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7QUNsVTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNvQjtBQUNYOzs7QUFHN0I7QUFDQSxXQUFXLHdEQUFXOztBQUV0QixjQUFjLG1EQUFNO0FBQ3BCLGNBQWMsbURBQU07QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc2FpcmEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9vY2VhbmJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdldHRpbmcgZm9udCBpbmZvcm1hdGlvbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQWxsIGJ1dHRvbnMgKi9cXG5idXR0b24ge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIFRpdGxlICovXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuXFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4udGl0bGUgaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC1mYW1pbHk6ICdTYWlyYScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50aXRsZSBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpdGxlIGE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi50aXRsZSBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGl0bGUgYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogQm9hcmRzIGRpdiAqL1xcbi5ib2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG5cXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwyNDMsMjQ2LCAwLjgpO1xcbn1cXG5cXG4vKiBQbGF5ZXIgYW5kIEFJIEJvYXJkIGRpdiAqL1xcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDFmcik7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi8qIEJ1dHRvbnMgb24gcGxhY2VtZW50IHNjcmVlbiAqL1xcbiNkaXJlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG5cXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZCQUE2QjtBQUM3QjtFQUNFLG9CQUFvQjtFQUNwQiwwREFBcUM7QUFDdkM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjs7O0VBR25CLGdCQUFnQjtFQUNoQix5REFBNEM7RUFDNUMsc0JBQXNCO0FBQ3hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFFBQVE7O0VBRVIsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7O0VBRWIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVzs7RUFFWCx1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQix3Q0FBd0M7QUFDMUM7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLFlBQVk7QUFDZDs7QUFFQSxXQUFXO0FBQ1g7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTOztFQUVULFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2V0dGluZyBmb250IGluZm9ybWF0aW9uICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJztcXG4gIHNyYzogdXJsKCcuL3NhaXJhLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEFsbCBidXR0b25zICovXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQm9keSAqL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL29jZWFuYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogVGl0bGUgKi9cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG5cXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LWZhbWlseTogJ1NhaXJhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRpdGxlIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGl0bGUgYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRpdGxlIGE6aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi50aXRsZSBhOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBCb2FyZHMgZGl2ICovXFxuLmJvYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcblxcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcblxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDI0MywyNDYsIDAuOCk7XFxufVxcblxcbi8qIFBsYXllciBhbmQgQUkgQm9hcmQgZGl2ICovXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLyogQnV0dG9ucyBvbiBwbGFjZW1lbnQgc2NyZWVuICovXFxuI2RpcmVjdGlvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgLy8gR2VuZXJhdGVzIGJvYXJkXG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBnYW1lQm9hcmQgPSBbXTtcbiAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGdhbWVCb2FyZC5wdXNoKHJvdyk7XG4gICAgICAgIHJvdyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gQXNzaWducyBib2FyZFxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICAvLyBDb250YWlucyBzaGlwcyBpbiBnYW1lXG4gICAgbGV0IHNoaXBzID0gW107XG5cbiAgICAvLyBBZGRzIHNoaXAgaW50byBzaGlwIGFycmF5XG4gICAgY29uc3QgYWRkU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gUGxhY2VzIHNoaXBcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGlmKHBsYWNlbWVudCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZih4ICsgc2hpcC5nZXRMZW5ndGgoKSA8PSAxMCkge1xuICAgICAgICAgICAgICAgIGlmKCFjaGVja0JvYXJkKHNoaXAseCx5LHBsYWNlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt5XVtpXSA9IHNoaXAuZ2V0SUQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcC5zZXRQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBsYWNlbWVudCAgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGlmKHkgKyBzaGlwLmdldExlbmd0aCgpIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgaWYoIWNoZWNrQm9hcmQoc2hpcCx4LHkscGxhY2VtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hdID0gc2hpcC5nZXRJRCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwLnNldFBsYWNlbWVudChwbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVja3MgYm9hcmQgaWYgdGhlcmUgaXMgYSBzaGlwIGFscmVhZHkgcGxhY2VkIFxuICAgIGNvbnN0IGNoZWNrQm9hcmQgPSAoc2hpcCx4LHkscGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XG4gICAgICAgIGlmKHBsYWNlbWVudCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3ldW2ldICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwbGFjZW1lbnQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbaV1beF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBDaGVja3Mgc2hpcCBwbGFjZW1lbnQgZm9yIERPTVxuICAgIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gKHNoaXAseCx5LHBsYWNlbWVudCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xuICAgICAgICBpZihwbGFjZW1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFt5XVtpXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocGxhY2VtZW50ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgeSArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGkgPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoYm9hcmRbaV1beF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG9udCB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAvLyBhbmQgc2VuZHMgYSBoaXQgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcFxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmKGJvYXJkW3ldW3hdICE9PSAnJyAmJiBib2FyZFt5XVt4XSAhPT0gJ3gnICYmIGJvYXJkW3ldW3hdICE9PSAnbycpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLmdldElEKCkgPT09IGJvYXJkW3ldW3hdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBzaGlwc1tpXS5zaGlwTGF5b3V0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzaGlwc1tpXS5zaGlwTGF5b3V0W2pdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoaisxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeV1beF0gPSAneCdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJvYXJkW3ldW3hdID09PSAneCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnZG91YmxlSGl0J1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRbeV1beF0gPSAnbydcbiAgICAgICAgICAgIHJldHVybiAnbWlzcydcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIENoZWNrcyBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1Y2tcbiAgICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihzaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7Ym9hcmQsIHNoaXBzLCBhZGRTaGlwLCBwbGFjZVNoaXAsIGNoZWNrUGxhY2VtZW50LCByZWNlaXZlQXR0YWNrLCBnYW1lT3Zlcn1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7IiwiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJ1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCdcblxuLy8gUGxheWVyIGNsYXNzXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgdHlwZSkgPT4ge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgICBsZXQgdHVybiA9IGZhbHNlO1xuICAgIGxldCBwcmV2aW91c1ggPSAnJztcbiAgICBsZXQgcHJldmlvdXNZID0gJyc7XG4gICAgbGV0IHByZXZpb3VzSGl0ID0gZmFsc2U7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgbGV0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoNSwnQ2FycmllcicpKVxuICAgIGJvYXJkLmFkZFNoaXAoc2hpcCg0LCdCYXR0bGVzaGlwJykpXG4gICAgYm9hcmQuYWRkU2hpcChzaGlwKDMsJ0Rlc3Ryb3llcicpKVxuICAgIGJvYXJkLmFkZFNoaXAoc2hpcCgzLCdTdWJtYXJpbmUnKSlcbiAgICBib2FyZC5hZGRTaGlwKHNoaXAoMiwnUGF0cm9sIEJvYXQnKSlcblxuICAgIC8vIEdldHRlcnNcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUdXJuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXR0ZXJzXG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgICAgIHBsYXllck5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmKHR1cm4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0dXJuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0dXJuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0dXJuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciBmb3IgdGhlIGFpXG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9ICh4LHksIGVuZW15KSA9PiB7XG4gICAgICAgIGlmKHR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmVteS5yZWNlaXZlQXR0YWNrKHgseSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBaSB3aWxsIGRyYXcgYSByYW5kb20gbnVtYmVyIGZvciB0aGUgZ3JpZFxuICAgICAgICAvLyBJZiBwcmV2aW91cyB0dXJuIHdhcyBhIGhpdCwgd2lsbCBoaXQgYXJvdW5kLlxuICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdhaScpIHtcbiAgICAgICAgICAgIGxldCB5ID0gIHJhbmRvbU51bWJlcigpO1xuICAgICAgICAgICAgbGV0IHggPSAgcmFuZG9tTnVtYmVyKCk7XG5cbiAgICAgICAgICAgIGlmKHByZXZpb3VzSGl0KSB7XG4gICAgICAgICAgICAgICAgeSA9IHByZXZpb3VzWTtcbiAgICAgICAgICAgICAgICB4ID0gcHJldmlvdXNYO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlbHAnKVxuICAgICAgICAgICAgICAgIGlmKGNvdW50ZXIgPD0gMykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYoY291bnRlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZW5lbXkucmVjZWl2ZUF0dGFjayh5ICsgMSwgeCkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FOT1RIRVIgQklHIEhJVCAoMSknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWSA9IHkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pc3MgMScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihjb3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbmVteS5yZWNlaXZlQXR0YWNrKHkgLSAxLCB4KSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQU5PVEhFUiBCSUcgSElUICgyKScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0geSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNYID0geDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWlzcyAyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNvdW50ZXIgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHggKyAxID4gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZW5lbXkucmVjZWl2ZUF0dGFjayh5LCAgeCArIDEpID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBTk9USEVSIEJJRyBISVQgKDMpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNaXNzIDMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY291bnRlciA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeCAtIDEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0hpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGVuZW15LnJlY2VpdmVBdHRhY2soeSwgeCAtIDEpID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBTk9USEVSIEJJRyBISVQgKDQpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWlzcyA0IGFuZCByZXNldCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIXByZXZpb3VzSGl0KSB7XG4gICAgICAgICAgICAgICAgaWYoZW5lbXkucmVjZWl2ZUF0dGFjayh5LHgpID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQklHIEhJVCcpXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGZvbGxvd2luZ1xuICAgIHJldHVybiB7Ym9hcmQsIGdldE5hbWUsIGdldFR1cm4sIHNldE5hbWUsIHNldFR1cm4sIHJhbmRvbU51bWJlciwgYXR0YWNrfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBpbnRlcmFjdGlvbiA9ICgpID0+IHtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIGRpdnNcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XG5cbiAgICBjb25zdCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZW50ZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICAvLyBET00gZWxlbWVudHNcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIC8vIEluaXRpYWwgbG9hZCB1cFxuICAgIGNvbnN0IGxvYWRVcCA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5TdGFydCcpXG5cbiAgICAgICAgY29uc3QgaG93VG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgdGl0bGVXb3Jkcy5pbm5lckhUTUwgPSAnQmF0dGxlc2hpcCc7XG4gICAgICAgIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCdcbiAgICAgICAgaG93VG8uaW5uZXJIVE1MID0gXCI8YSBocmVmPSdodHRwczovL3d3dy5oYXNicm8uY29tL2NvbW1vbi9pbnN0cnVjdC9iYXR0bGVzaGlwLnBkZic+SG93IHRvIFBsYXk8L2E+XCJcblxuXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlV29yZHMpO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGhvd1RvKVxuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3QoKSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbCBzdGFydCBidXR0b25cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblN0YXJ0Jyk7XG4gICAgICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHBsYWNlbWVudChwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2VzIHNoaXAgcGxhY2VtZW50IGZyb20gaG9yaXpvbnRhbCBhbmQgdmVyaXRjYWxcbiAgICBjb25zdCBkaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24nKTtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MID09PSAnSG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnSG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyB0aGUgcGxheWVyIGFuZCBlbmVteSAxMHgxMCBib2FyZFxuICAgIGNvbnN0IGJvYXJkTWFrZXIgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xuICAgICAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBib2FyZHMuY2xhc3NMaXN0LmFkZCgnYm9hcmRzJyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICAgICAgcGxheWVyQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXInKVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAoMTAqMTApOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgIFxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXB1dGVyJyk7XG5cbiAgICAgICAgYm9hcmRzLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKVxuICAgICAgICByZXR1cm4gYm9hcmRzO1xuICAgIH1cblxuICAgIC8vIEdyaWQgdG8gYXJyYXkgcG9zaXRpb25cbiAgICAvLyBDYW4gd3JpdGUgYmV0dGVyIGxvZ2ljIGxhdGVyXG4gICAgY29uc3QgcG9zaXRpb24gPSAobG9jYXRpb24pID0+IHtcbiAgICAgICAgbGV0IHBYWSA9IFtdO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gMDtcblxuICAgICAgICAvLyBHZXRzIHggYXhpc1xuICAgICAgICBpZihsb2NhdGlvbiA8PSA5KSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDEwICYmIGxvY2F0aW9uIDw9MTkpIHtcbiAgICAgICAgICAgIHggPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gMjAgJiYgbG9jYXRpb24gPD0yOSkge1xuICAgICAgICAgICAgeCA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSAzMCAmJiBsb2NhdGlvbiA8PTM5KSB7XG4gICAgICAgICAgICB4ID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDQwICYmIGxvY2F0aW9uIDw9NDkpIHtcbiAgICAgICAgICAgIHggPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gNTAgJiYgbG9jYXRpb24gPD01OSkge1xuICAgICAgICAgICAgeCA9IDU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA2MCAmJiBsb2NhdGlvbiA8PTY5KSB7XG4gICAgICAgICAgICB4ID0gNjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID49IDcwICYmIGxvY2F0aW9uIDw9NzkpIHtcbiAgICAgICAgICAgIHggPSA3O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPj0gODAgJiYgbG9jYXRpb24gPD04OSkge1xuICAgICAgICAgICAgeCA9IDg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA+PSA5MCAmJiBsb2NhdGlvbiA8PTk5KSB7XG4gICAgICAgICAgICB4ID0gOTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gR2V0cyB0aGUgbGFzdCBkaWdpdCBvZiB0aGUgbG9jYXRpb25cbiAgICAgICAgaWYobG9jYXRpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvblsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldHMgeSBheGlzXG4gICAgICAgIGlmKGxvY2F0aW9uID09IDApIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gMSkge1xuICAgICAgICAgICAgeSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSAyKSB7XG4gICAgICAgICAgICB5ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDMpIHtcbiAgICAgICAgICAgIHkgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gNCkge1xuICAgICAgICAgICAgeSA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA1KSB7XG4gICAgICAgICAgICB5ID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDYpIHtcbiAgICAgICAgICAgIHkgPSA2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobG9jYXRpb24gPT0gNykge1xuICAgICAgICAgICAgeSA9IDc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsb2NhdGlvbiA9PSA4KSB7XG4gICAgICAgICAgICB5ID0gODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxvY2F0aW9uID09IDkpIHtcbiAgICAgICAgICAgIHkgPSA5O1xuICAgICAgICB9XG5cbiAgICAgICAgcFhZLnB1c2goeCk7XG4gICAgICAgIHBYWS5wdXNoKHkpO1xuICAgICAgICByZXR1cm4gcFhZO1xuICAgIH1cblxuXG4gICAgLy8gQmF0dGxlc2hpcCBUaXRsZSBhdCB0b3BcbiAgICBjb25zdCBwbGFjZW1lbnQgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGl0bGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aXRsZS5zdHlsZS5wYWRkaW5nID0gJzdweCc7XG4gICAgICAgIHRpdGxlLnN0eWxlLm1hcmdpblRvcCA9ICcxMHB4JztcbiAgICAgICAgZm9vdGVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblxuICAgICAgICBjb25zdCB0aXRsZVdvcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGVXb3Jkcy5pbm5lckhUTUwgPSAnQmF0dGxlc2hpcCc7XG5cbiAgICAgICAgLy8gSG9yaXpvbnRhbC9WZXJ0aWNhbCBidXR0b25cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpcmVjdGlvbicpXG4gICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnSG9yaXpvbnRhbCdcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHBsYXllciBib2FyZFxuICAgICAgICBjb25zdCBib2FyZCA9IGJvYXJkTWFrZXIocGxheWVyMSwgcGxheWVyMik7XG5cblxuICAgICAgICAvLyBTdGFydCBiYXR0bGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmF0dGxlU3RhcnQnKVxuICAgICAgICBzdGFydEJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQgQmF0dGxlJ1xuXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlV29yZHMpO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGRpcmVjdGlvbkJ1dHRvbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm9hcmQpXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3QoKSk7XG5cbiAgICAgICAgLy8gU2V0cyBkaXJlY3Rpb25cbiAgICAgICAgZGlyZWN0aW9uKCk7XG5cbiAgICAgICAgLy8gSG92ZXIgb3ZlciBlZmZlY3RcbiAgICAgICAgbGV0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDA7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBjb25zdCByZW1vdmVFdmVudHMgPSAob2JqKSA9PiB7XG4gICAgICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dClcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXIpXG4gICAgICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljaylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBjb2RlXG4gICAgICAgIGNvbnN0IGNoZWNrSG92ZXIgPSAoZSwgdHlwZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxvYyA9IHBvc2l0aW9uKGUuaWQpO1xuICAgICAgICAgICAgaWYocGxheWVyMS5ib2FyZC5jaGVja1BsYWNlbWVudChwbGF5ZXIxLmJvYXJkLnNoaXBzWzBdLCBsb2NbMV0sIGxvY1swXSxkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyMS5ib2FyZC5zaGlwc1swXS5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHBhcnNlSW50KGUuaWQpICsgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlID09PSAnbW91c2VvdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhuZXh0UG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyMS5ib2FyZC5zaGlwc1swXS5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHBhcnNlSW50KGUuaWQpICsgKDEwICogaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudHMobmV4dFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihkaXJlY3Rpb25CdXR0b24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxLmJvYXJkLnNoaXBzWzBdLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gcGFyc2VJbnQoZS5pZCkgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKG5leHQgJSAxMCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcjEuYm9hcmQuc2hpcHNbMF0uZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBwYXJzZUludChlLmlkKSArICgxMCAqIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dCA+IDk5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZ1bmN0aW9uIGhhbmRsZXJcbiAgICAgICAgY29uc3QgbW91c2VvdmVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2hlY2tIb3ZlcihlLnRhcmdldCwgJ21vdXNlb3ZlcicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vdXNlb3V0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY2hlY2tIb3ZlcihlLnRhcmdldCwgJ21vdXNlb3V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjaGVja0hvdmVyKGUudGFyZ2V0LCAnY2xpY2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpc3RlbmVyc1xuICAgICAgICBwbGF5ZXJTcXVhcmUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VvdmVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgcGxheWVyU3F1YXJlLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXQpO1xuICAgICAgICB9KVxuICAgICAgICBwbGF5ZXJTcXVhcmUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljaylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZm9vdGVyIFxuICAgIGZ1bmN0aW9uIGZvb3QoKSB7XG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnPHA+TWFkZSBieSBLZXZpbiBEcmFrZSBmb3IgVGhlIE9kaW4gUHJvamVjdCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tkcmFrZTE5OTJcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+PC9hPjxwPidcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWRVcH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3Rpb247IiwiLy8gU2hpcCBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBzaGlwID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xuICAgIC8vIE1ha2VzIGFuIGFycmF5IGVxdWFsIHRvIHRoZSBzaGlwcyBsZW5ndGhcbiAgICBjb25zdCBzaGlwTGF5b3V0ID0gWy4uLkFycmF5KGxlbmd0aCldO1xuICAgIGNvbnN0IGlkID0gbmFtZS5jaGFyQXQoMCk7XG4gICAgbGV0IHBsYWNlbWVudCA9ICcnXG4gICAgbGV0IHN1bmtTdGF0ID0gZmFsc2U7XG5cbiAgICAvLyBSZXR1cm4gc2hpcCBsZW5ndGhcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9ICAgXG4gICAgXG4gICAgLy8gUmV0dXJuIHNoaXAgbGVuZ3RoXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBzaGlwSURcbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBwbGFjZW1lbnRcbiAgICBjb25zdCBnZXRQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gR2V0IHN1bmsgc3RhdHVzXG4gICAgY29uc3QgZ2V0U3Vua1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bmtTdGF0O1xuICAgIH1cblxuICAgIC8vIFNldCBwbGFjZW1lbnRcbiAgICBjb25zdCBzZXRQbGFjZW1lbnQgPSAocGxhY2UpID0+IHtcbiAgICAgICAgcGxhY2VtZW50ID0gcGxhY2U7XG4gICAgfVxuXG4gICAgLy8gU2V0IHNpbmsgc3RhdHVzXG4gICAgY29uc3Qgc2V0U3Vua1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgc3Vua1N0YXQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgJyBoYXMgc3VuayEnKVxuICAgIH1cblxuICAgIC8vIEhpdHMgYSBzaGlwXG4gICAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgICAgICBzaGlwTGF5b3V0W251bS0xXSA9ICd4J1xuICAgIH1cblxuICAgIC8vIENoZWNrcyBpZiB0aGUgc2hpcCBoYXMgc3Vua1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYoc2hpcExheW91dC5ldmVyeShlID0+IGUgPT09ICd4JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgZm9sbG93aW5nXG4gICAgcmV0dXJue3NoaXBMYXlvdXQsIGdldE5hbWUsIGdldExlbmd0aCwgZ2V0SUQsIGdldFBsYWNlbWVudCwgZ2V0U3Vua1N0YXR1cywgc2V0UGxhY2VtZW50LCBzZXRTdW5rU3RhdHVzLGhpdCwgaXNTdW5rfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgaW50ZXJhY3Rpb24gZnJvbSAnLi9pbnRlcmFjdGlvbic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJ1xuXG5cbi8vIFN0YXJ0IHVwIGdhbWVcbmxldCBnYW1lID0gaW50ZXJhY3Rpb24oKTtcblxubGV0IHBsYXllcjEgPSBQbGF5ZXIoJ1BsYXllcjEnLCAnaHVtYW4nKVxubGV0IHBsYXllcjIgPSBQbGF5ZXIoJ1BsYXllcjInLCAnYWknKTtcbnBsYXllcjEuc2V0VHVybigpO1xuXG5sZXQgcGxheWVyMVNoaXBzID0gcGxheWVyMS5ib2FyZC5zaGlwcztcbmxldCBwbGF5ZXIyU2hpcHMgPSBwbGF5ZXIyLmJvYXJkLnNoaXBzO1xuXG4vLyBQbGFjZSBzaGlwcyBmb3IgcGxheWVyIGFuZCBhaVxuZm9yKGxldCBpID0gMDsgaSA8PSBwbGF5ZXIyU2hpcHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgbGV0IHkgPSBwbGF5ZXIyLnJhbmRvbU51bWJlcigpO1xuICAgIGxldCB4ID0gcGxheWVyMi5yYW5kb21OdW1iZXIoKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgIGlmKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSAyKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCdcbiAgICB9XG5cbiAgICB3aGlsZSghcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAocGxheWVyMlNoaXBzW2ldLHkseCxkaXJlY3Rpb24pKSB7XG4gICAgICAgIHkgPSBwbGF5ZXIyLnJhbmRvbU51bWJlcigpO1xuICAgICAgICB4ID0gcGxheWVyMi5yYW5kb21OdW1iZXIoKTtcbiAgICB9XG59XG5cbmdhbWUubG9hZFVwKHBsYXllcjEsIHBsYXllcjIpO1xuXG4vLyBsZXQgY291bnRlciA9IDA7XG4vLyB3aGlsZSghcGxheWVyMS5ib2FyZC5nYW1lT3ZlcigpKSB7XG4vLyAgICAgY291bnRlcisrO1xuLy8gICAgIHBsYXllcjIuYXR0YWNrKDAsMCxwbGF5ZXIxLmJvYXJkKVxuLy8gICAgIHBsYXllcjFTaGlwcy5mb3JFYWNoKGUgPT4ge1xuLy8gICAgICAgICBpZihlLmlzU3VuaygpID09PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICBpZihlLmdldFN1bmtTdGF0dXMoKSA9PT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgICAgICBlLnNldFN1bmtTdGF0dXMoKVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgY29uc29sZS5sb2coY291bnRlcik7XG4vLyB9XG5cbi8vIHBsYXllcjEuYXR0YWNrKDEsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDIsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDMsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjEuYXR0YWNrKDQsMCxwbGF5ZXIyLmJvYXJkKTtcbi8vIHBsYXllcjJTaGlwcy5mb3JFYWNoKGUgPT4ge1xuLy8gICAgIGlmKGUuaXNTdW5rKCkgPT09IHRydWUpIHtcbi8vICAgICAgICAgaWYoZS5nZXRTdW5rU3RhdHVzKCkgPT09IGZhbHNlKSB7XG4vLyAgICAgICAgICAgICBlLnNldFN1bmtTdGF0dXMoKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSlcblxuLy8gaWYocGxheWVyMi5ib2FyZC5nYW1lT3ZlcigpKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpXG4vLyB9XG5cbi8vIGlmKHBsYXllcjEuYXR0YWNrKDAsMSxwbGF5ZXIyLmJvYXJkKSA9PT0gJ2hpdCcgfHwgJ21pc3MnKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2JhbmchJylcbi8vICAgICBwbGF5ZXIxLnNldFR1cm4oKTtcbi8vICAgICBwbGF5ZXIyLnNldFR1cm4oKTtcbi8vIH1cbi8vIGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKCd0cnkgYWdhaW4nKVxuLy8gfVxuXG4vLyBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgICBpZihwbGF5ZXIyLmF0dGFjaygwLDAscGxheWVyMS5ib2FyZCkgPT09ICdoaXQnIHx8ICdtaXNzJykge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnYmFuZyEnKVxuLy8gICAgICAgICBwbGF5ZXIxLnNldFR1cm4oKTtcbi8vICAgICAgICAgcGxheWVyMi5zZXRUdXJuKCk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndHJ5IGFnYWluJylcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2cocGxheWVyMS5ib2FyZC5ib2FyZClcbi8vIH1cblxuXG5jb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkLmJvYXJkKVxuY29uc29sZS5sb2cocGxheWVyMi5ib2FyZC5ib2FyZCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=