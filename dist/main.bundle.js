/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
var todos = [{
  text: "Empêcher l'ajout de todo vide",
  done: false,
  editMode: false
}, {
  text: "Mettre une majuscule à la première lettre du texte de la todo",
  done: false,
  editMode: false
}, {
  text: "Barrer le texte de la todo lorsqu'elle est terminée",
  done: false,
  editMode: false
}, {
  text: "Ajouter un curseur pointer sur les todo",
  done: false,
  editMode: false
}, {
  text: "Ajouter un effet hover sur les todos pour mieux voir celle sur laquelle l'utilisateur va cliquer.",
  done: false,
  editMode: false
}, {
  text: "Créer des classes pour colorer les boutons",
  done: false,
  editMode: false
}, {
  text: " Lors de l'édition, ajoutez un écouteur pour sauvegarder avec la touche entrée si le champ est focus ou annuler avec la touche escape.",
  done: false,
  editMode: false
}, {
  text: "Rendre l'édition possible sur un double clic",
  done: false,
  editMode: false
}, {
  text: "empêcher le double clic de changer le statut deux fois de suite de la todo",
  done: false,
  editMode: false
}, {
  text: "focus l'input après l'édition",
  done: false,
  editMode: false
}];


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* body {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\np {\n  margin: 0;\n}\n\n.container {\n  width: 500px;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  display: flex;\n  margin-bottom: 20px;\n}\n\nbutton {\n  padding: 5px 15px;\n  border: 0px;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 0 3px;\n}\n\ninput {\n  padding: 8px 15px;\n  outline: 0;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n\nform input {\n  flex: 1;\n  margin-right: 15px;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  cursor: pointer;\n}\n\nli:hover {\n  background-color: #ddd;\n  color: rgb(3, 200, 134);\n  opacity: 0.7;\n  border-radius: 10px;\n  padding: 10px 0px 10px 5px;\n}\n\nli p {\n  flex: 1;\n  color: orangered;\n  animation: myAnim 1s ease 0s 1 normal forwards;\n}\n\nli .todo {\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 30px;\n  margin-right: 15px;\n  border: 2px solid #333;\n}\n\nli .todo.done {\n  background: #333;\n}\n\nli p.done {\n  text-decoration: line-through;\n  color: rgb(3, 200, 134);\n}\n\nButton {\n  box-shadow: 0px 10px 14px -7px #276873;\n  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\n  background-color: #599bb3;\n  border-radius: 8px;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-weight: bold;\n  padding: 13px 32px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #3d768a;\n}\n\nButton:hover {\n  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);\n  background-color: #408c99;\n}\n\nButton:active {\n  position: relative;\n  top: 1px;\n}\n\n@keyframes myAnim {\n  0% {\n    opacity: 0;\n    transform: translateX(250px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,8CAA8C;AAChD;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;EACtC,gEAAgE;EAChE,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,gEAAgE;EAChE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE;IACE,UAAU;IACV,4BAA4B;EAC9B;;EAEA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF","sourcesContent":["* body {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\np {\n  margin: 0;\n}\n\n.container {\n  width: 500px;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  display: flex;\n  margin-bottom: 20px;\n}\n\nbutton {\n  padding: 5px 15px;\n  border: 0px;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 0 3px;\n}\n\ninput {\n  padding: 8px 15px;\n  outline: 0;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n\nform input {\n  flex: 1;\n  margin-right: 15px;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  cursor: pointer;\n}\n\nli:hover {\n  background-color: #ddd;\n  color: rgb(3, 200, 134);\n  opacity: 0.7;\n  border-radius: 10px;\n  padding: 10px 0px 10px 5px;\n}\n\nli p {\n  flex: 1;\n  color: orangered;\n  animation: myAnim 1s ease 0s 1 normal forwards;\n}\n\nli .todo {\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 30px;\n  margin-right: 15px;\n  border: 2px solid #333;\n}\n\nli .todo.done {\n  background: #333;\n}\n\nli p.done {\n  text-decoration: line-through;\n  color: rgb(3, 200, 134);\n}\n\nButton {\n  box-shadow: 0px 10px 14px -7px #276873;\n  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\n  background-color: #599bb3;\n  border-radius: 8px;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-weight: bold;\n  padding: 13px 32px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #3d768a;\n}\n\nButton:hover {\n  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);\n  background-color: #408c99;\n}\n\nButton:active {\n  position: relative;\n  top: 1px;\n}\n\n@keyframes myAnim {\n  0% {\n    opacity: 0;\n    transform: translateX(250px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var ul = document.querySelector("ul");
var form = document.querySelector("form");
var input = document.querySelector("form > input");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var value = input.value;
  input.value = "";
  addTodo(value);
  displayTodo();
});
var displayTodo = function displayTodo() {
  var todosNode = _data__WEBPACK_IMPORTED_MODULE_1__.todos.map(function (todo, index) {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append.apply(ul, _toConsumableArray(todosNode));
};
var createTodoElement = function createTodoElement(todo, index) {
  var li = document.createElement("li");
  var buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  var buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Edit";
  buttonDelete.addEventListener("click", function (event) {
    event.stopPropagation();
    // Grâce aux "closures" (cfr stack dans la phase de hoisting) JavaScript
    // nous avons accès au paramètre (index) *** de la fonction parente
    deleteTodo(index);
  });
  buttonEdit.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleEditMode(index);
  });
  li.innerHTML = "\n    <span class=\"todo ".concat(todo.done ? "done" : "", "\"></span>\n    <p class=\"").concat(todo.done ? "done" : "", "\">").concat(todo.text, "</p>\n  ");
  li.addEventListener("click", function (event) {
    toggleToto(index);
  });
  li.appendChild(buttonDelete);
  return li;
} /* (index) <== *** */;

var createTodoEditElement = function createTodoEditElement(todo, index) {
  var li = document.createElement("li");
  var input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  var buttonSave = document.createElement("button");
  buttonSave.innerHTML = "Save";
  var buttonCancel = document.createElement("button");
  buttonCancel.innerHTML = "Cancel";
  buttonCancel.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleEditMode(index);
  });
  buttonSave.addEventListener("click", function (event) {
    editTodo(index, input);
  });
  li.append(input, buttonCancel, buttonSave);
  return li;
};
var addTodo = function addTodo(text) {
  // On pourrait également utiliser la méthode trim(); (text = text.trim() ==> if(text) ...)
  if (text !== "") {
    _data__WEBPACK_IMPORTED_MODULE_1__.todos.push({
      text: "".concat(text[0].toUpperCase()).concat(text.slice(1)),
      done: false
    });
    displayTodo();
  } else {
    displayTodo();
  }
};
var deleteTodo = function deleteTodo(index) {
  _data__WEBPACK_IMPORTED_MODULE_1__.todos.splice(index, 1);
  displayTodo();
};
var toggleToto = function toggleToto(index) {
  _data__WEBPACK_IMPORTED_MODULE_1__.todos[index].done = !_data__WEBPACK_IMPORTED_MODULE_1__.todos[index].done; // si on met !! ==> variable d'interpolation
  displayTodo();
};
var toggleEditMode = function toggleEditMode(index) {
  _data__WEBPACK_IMPORTED_MODULE_1__.todos[index].editMode = !_data__WEBPACK_IMPORTED_MODULE_1__.todos[index].editMode;
  displayTodo();
};
var editTodo = function editTodo(index, input) {
  var value = input.value;
  _data__WEBPACK_IMPORTED_MODULE_1__.todos[index].text = value;
  _data__WEBPACK_IMPORTED_MODULE_1__.todos[index].editMode = false;
  displayTodo();
};
displayTodo();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map