/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset some default browser styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Styling for the navbar */\n.nav-bar {\n  width: 250px;\n  height: 100%;\n  background-color: #333;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease;\n}\n\n.nav-bar .hamburger {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; /* space between lines */\n  align-items: center;\n  height: 60px;\n  width: 60px;\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  padding: 10px;\n  box-shadow: 0 2px 5px #e8eddf;\n}\n\n.nav-bar .hamburger span {\n  width: 60px;\n  height: 4px;\n  background-color: #f5cb5c;\n  border-radius: 2px; /* Slight rounding for a smoother look */\n  transition: all 0.3s ease; /* Add transition for animations */\n}\n\n.nav-bar.open .hamburger span:nth-child(1) {\n  transform: translateY(10px) rotate(45deg);\n}\n\n.nav-bar.open .hamburger span:nth-child(2) {\n  opacity: 0; /* Hide the middle line */\n}\n\n.nav-bar.open .hamburger span:nth-child(3) {\n  transform: translateY(-10px) rotate(-45deg);\n}\n\n.nav-bar.open {\n  transform: translateX(-120px);\n}\n\n.nav-bar.open .hamburger {\n  background-color: #242423;\n}\n\n/* Hide the menu by default in mobile view */\n.nav-menu {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n}\n\n.nav-menu button {\n  background: none;\n  border: none;\n  color: white;\n  padding: 15px;\n  text-align: left;\n  font-size: 16px;\n  width: 100%;\n  cursor: pointer;\n}\n\n.nav-menu button:hover {\n  background-color: #444;\n}\n\n/* Project list */\n\n.nav-bar .addProjectBtn {\n  margin-top: 20px;\n  padding: 10px 40px;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visibility */\n  background-color: #333533;\n}\n\n.projectList {\n  display: flex; /* Or use flex for flexible alignment */\n  flex-direction: column; /* Stack projects vertically */\n  gap: 10px; /* Add spacing between items */\n  padding: 10px; /* Add some padding inside the container */\n  max-height: 80vh; /* Prevent overflow */\n  overflow-y: auto; /* Add scrolling if necessary */\n  width: 100%;\n}\n\n.projectList .project-item {\n  display: flex; /* Align content within a project item */\n  justify-content: space-between; /* Keep delete button aligned to the right */\n  align-items: center;\n  padding: 5px 10px;\n  background-color: #333533;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visibility */\n}\n\n.projectList .project-item:hover {\n  background-color: #242423;\n}\n\n.projectList .project-item .delete-btn {\n  background-color: #e74c3c;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 14px;\n  transition: background-color 0.2s ease;\n}\n\n@media screen and (max-width: 768px) {\n  /* Navbar styling for smaller screens */\n  .nav-bar {\n    display: flex;\n    flex-direction: column; /* Align navbar items in a row */\n    width: 70%;\n    align-items: center;\n    padding: 0 15px; /* Add horizontal padding */\n    background-color: #333;\n    transform: translateX(-300px);\n  }\n\n  .nav-bar.open {\n    transform: translateX(0px);\n  }\n\n  .nav-bar .hamburger {\n    transform: translateX(160px);\n  }\n\n  .nav-bar.open .addProjectBtn {\n    margin-top: 20px;\n    padding: 10px 40px;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visibility */\n    background-color: #333533;\n  }\n\n  .nav-bar.open .addProjectBtn:hover {\n    background-color: #242423;\n  }\n\n  .projectList {\n    display: flex; /* Or use flex for flexible alignment */\n    flex-direction: column; /* Stack projects vertically */\n    gap: 10px; /* Add spacing between items */\n    padding: 10px; /* Add some padding inside the container */\n    max-height: 80vh; /* Prevent overflow */\n    overflow-y: auto; /* Add scrolling if necessary */\n    width: 100%;\n  }\n\n  .projectList .project-item {\n    display: flex; /* Align content within a project item */\n    justify-content: space-between; /* Keep delete button aligned to the right */\n    align-items: center;\n    padding: 5px 10px;\n    background-color: #333533;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visibility */\n  }\n\n  .projectList .project-item:hover {\n    background-color: #242423;\n  }\n\n  .projectList .project-item .delete-btn {\n    background-color: #e74c3c;\n    color: white;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n    padding: 5px 10px;\n    font-size: 14px;\n    transition: background-color 0.2s ease;\n  }\n\n  .nav-bar.open .hamburger {\n    transform: translateX(30px);\n  }\n\n  /* Open the mobile friendly Navbar */\n}\n\n.nav-bar .projectList {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.nav-bar .projectList span {\n  padding: 30px;\n}\n\n/* New Project Form */\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px; /* Space between form groups */\n  width: 100%; /* Full width of the container */\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px; /* Space between label and input */\n}\n\nlabel {\n  font-size: 14px;\n  color: #cfdbd5; /* Darker text for labels */\n}\n\ninput[type=\"text\"],\ninput[type=\"date\"] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\nbutton[type=\"submit\"] {\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #007bff; /* Blue color */\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton[type=\"submit\"]:hover {\n  background-color: #0056b3; /* Darker blue on hover */\n}\n\nbutton[type=\"submit\"]:active {\n  background-color: #003f7f; /* Even darker when pressed */\n}\n\n/* Content Container */\n#content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px; /* Space between grid items */\n  padding: 20px;\n  background-color: #f9f9f9; /* Light background for contrast */\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  width: 70%;\n  margin: 10px auto;\n}\n\n/* Header within #content */\n#content h2 {\n  grid-column: 1 / -1; /* Span the full width of the grid */\n  text-align: center;\n  font-size: 1.5rem;\n  color: #333;\n}\n\n/* Add Todo Button */\n.add-todo-btn {\n  grid-column: 1 / -1; /* Full width */\n  text-align: center;\n  padding: 10px 20px;\n  font-size: 1rem;\n  color: white;\n  background-color: #007bff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.add-todo-btn:hover {\n  background-color: #0056b3;\n}\n\n.add-todo-btn:active {\n  background-color: #003f7f;\n}\n\n/* Individual Cards (Dynamically Created Content) */\n.project-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.project-card h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #333;\n}\n\n.project-card p {\n  font-size: 0.9rem;\n  color: #555;\n  text-align: center;\n}\n\n.project-card button {\n  margin-top: 10px;\n  padding: 8px 16px;\n  font-size: 0.9rem;\n  color: white;\n  background-color: #e63946;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.project-card button:hover {\n  background-color: #c12f39;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n\nconsole.log(\"Hello Webpack!\");\n\n// appLogic(); // Run the app logic\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const hamburger = document.getElementById(\"hamburger\");\n  const navMenu = document.getElementById(\"nav-menu\");\n  const navBar = document.querySelector(\".nav-bar\");\n\n  hamburger.addEventListener(\"click\", () => {\n    navBar.classList.toggle(\"open\"); // Open/close the nav-bar\n    navMenu.classList.toggle(\"open\"); // Open/close the nav menu items\n  });\n});\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Page loaded\");\n\n  (0,_js_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n});\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/js/add_delete_project/addProjectToList.js":
/*!*******************************************************!*\
  !*** ./src/js/add_delete_project/addProjectToList.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToList: () => (/* binding */ addProjectToList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ \"./src/js/project.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/js/app.js\");\n/* harmony import */ var _render_page_renderProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render_page/renderProjectList */ \"./src/js/render_page/renderProjectList.js\");\n/* harmony import */ var _form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form_input_helper/createFormInput */ \"./src/js/form_input_helper/createFormInput.js\");\n\n\n\n\n\nfunction addProjectToList(projectListDiv, index) {\n  // Clear the current content\n  projectListDiv.innerHTML = \"\";\n\n  // Create a form dynamically\n  const form = document.createElement(\"form\");\n  form.classList.add(\"new-project-form\");\n\n  // Add a title input\n  const titleInput = (0,_form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_3__.createFormInput)(\"Title\", \"text\");\n  form.appendChild(titleInput);\n\n  // Add a date input\n  const dateInput = (0,_form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_3__.createFormInput)(\"Date\", \"date\");\n  form.appendChild(dateInput);\n\n  // Add submit button\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Add Project\";\n  submitButton.type = \"submit\";\n  form.appendChild(submitButton);\n\n  // Add event listener to the form\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    // Get the values from the form inputs\n    const title = titleInput.querySelector(\"input\").value;\n    const date = dateInput.querySelector(\"input\").value;\n\n    // Create a new Todo instance\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title, date);\n\n    // Add the new project to the list\n    _app__WEBPACK_IMPORTED_MODULE_1__.projectListArr.push(newProject);\n\n    // Reopen the project to show the updated todo list\n    (0,_render_page_renderProjectList__WEBPACK_IMPORTED_MODULE_2__.renderProjectList)();\n  });\n\n  // Append the form to the projectListDiv\n  projectListDiv.appendChild(form);\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/add_delete_project/addProjectToList.js?");

/***/ }),

/***/ "./src/js/add_delete_project/deleteProject.js":
/*!****************************************************!*\
  !*** ./src/js/add_delete_project/deleteProject.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/js/app.js\");\n/* harmony import */ var _render_page_renderProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_page/renderProjectList */ \"./src/js/render_page/renderProjectList.js\");\n\n\n\nfunction deleteProject(index) {\n  _app__WEBPACK_IMPORTED_MODULE_0__.projectListArr.splice(index, 1); // Remove project at index\n  (0,_render_page_renderProjectList__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)();\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/add_delete_project/deleteProject.js?");

/***/ }),

/***/ "./src/js/add_delete_todo/addTodoToProjectList.js":
/*!********************************************************!*\
  !*** ./src/js/add_delete_todo/addTodoToProjectList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoToProjectList: () => (/* binding */ addTodoToProjectList)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo */ \"./src/js/todo.js\");\n\nfunction addTodoToProjectList(todo, contentDiv) {\n  // Prints a Todo for the project\n  // Create a new todo list container\n  const todoItem = document.createElement(\"div\");\n  todoItem.classList.add(\"project-card\");\n  const todoTitle = document.createElement(\"h3\");\n\n  // Add the description\n  const todoDescription = document.createElement(\"p\");\n\n  // Add the date\n  const todoDueDate = document.createElement(\"p\");\n\n  // Add the priority\n  const todoPriority = document.createElement(\"p\");\n\n  // Add the notes\n  const todoNotes = document.createElement(\"p\");\n\n  // Add the completed\n  const todoCompleted = document.createElement(\"checkbox\");\n\n  // Regular todo or time/count todo\n  if (todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__.Todo) {\n    todoTitle.textContent = `${todo.title}`;\n    todoDescription.textContent = `${todo.description}`;\n    todoDueDate.textContent = `${todo.dueDate}`;\n    todoPriority.textContent = `${todo.priority}`;\n    todoNotes.textContent = `${todo.notes}`;\n    todoCompleted.textContent = `${todo.completed}`;\n  } else {\n    todoTitle.textContent = `${todo.todo.title}`;\n    todoDescription.textContent = `${todo.todo.description}`;\n    todoDueDate.textContent = `${todo.todo.dueDate}`;\n    todoPriority.textContent = `${todo.todo.priority}`;\n    todoNotes.textContent = `${todo.todo.notes}`;\n    todoCompleted.textContent = `${todo.todo.completed}`;\n  }\n\n  todoItem.appendChild(todoTitle);\n  todoItem.appendChild(todoDescription);\n  todoItem.appendChild(todoDueDate);\n  todoItem.appendChild(todoPriority);\n  todoItem.appendChild(todoNotes);\n  todoItem.appendChild(todoCompleted);\n\n  contentDiv.appendChild(todoItem);\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/add_delete_todo/addTodoToProjectList.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadInitialPage),\n/* harmony export */   projectListArr: () => (/* binding */ projectListArr)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _initial_project_sample_deafultOutput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial_project_sample/deafultOutput */ \"./src/js/initial_project_sample/deafultOutput.js\");\n/* harmony import */ var _render_page_renderProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render_page/renderProjectList */ \"./src/js/render_page/renderProjectList.js\");\n\n\n\n\n\n// projectListArr to store all the projects\nconst projectListArr = [];\n// Adds sample todos to list\nprojectListArr.push(_initial_project_sample_deafultOutput__WEBPACK_IMPORTED_MODULE_2__.sampleProject1);\nprojectListArr.push(_initial_project_sample_deafultOutput__WEBPACK_IMPORTED_MODULE_2__.sampleProject2);\nconsole.log(projectListArr);\n\nfunction loadInitialPage() {\n  (0,_render_page_renderProjectList__WEBPACK_IMPORTED_MODULE_3__.renderProjectList)();\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/app.js?");

/***/ }),

/***/ "./src/js/form_input_helper/createFormInput.js":
/*!*****************************************************!*\
  !*** ./src/js/form_input_helper/createFormInput.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFormInput: () => (/* binding */ createFormInput)\n/* harmony export */ });\n// Helper function to create form input fields\nfunction createFormInput(labelText, type) {\n  const formGroup = document.createElement(\"div\");\n  formGroup.classList.add(\"form-group\");\n\n  const label = document.createElement(\"label\");\n  label.textContent = labelText;\n  formGroup.appendChild(label);\n\n  let input;\n  if (type === \"textarea\") {\n    input = document.createElement(\"textarea\");\n  } else {\n    input = document.createElement(\"input\");\n    input.type = type;\n  }\n\n  formGroup.appendChild(input);\n\n  return formGroup;\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/form_input_helper/createFormInput.js?");

/***/ }),

/***/ "./src/js/initial_project_sample/deafultOutput.js":
/*!********************************************************!*\
  !*** ./src/js/initial_project_sample/deafultOutput.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sampleProject1: () => (/* binding */ sampleProject1),\n/* harmony export */   sampleProject2: () => (/* binding */ sampleProject2)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ \"./src/js/todo.js\");\n\n\n\n// Create project 1\nconst myProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Project 1\");\n\nconst regularTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(\n  \"todo title1\",\n  \"todo description1\",\n  \"todo date1\",\n  \"todo priority1\",\n  \"Todo notes1\"\n);\n\nconst timedTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.TimedTodo(\n  \"TimedTodo title1\",\n  \"TimedTodo description1\",\n  \"High1\",\n  20\n);\n\nconst counterTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.CounterTodo(\n  \"CountTodo title1\",\n  \"CountTodo description1\",\n  \"Low1\",\n  8\n);\n\n// // Add todos to the project 1\nmyProject.addTodo(regularTodo);\nmyProject.addTodo(timedTodo);\nmyProject.addTodo(counterTodo);\nconsole.log(myProject.listTodos());\n\n// Create another project\n\nconst myProject2 = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Project 2\");\n\nconst regularTodo2 = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(\n  \"todo title2\",\n  \"todo description2\",\n  \"todo date2\",\n  \"todo priority2\",\n  \"Todo notes2\"\n);\n\nconst timedTodo2 = new _todo__WEBPACK_IMPORTED_MODULE_1__.TimedTodo(\n  \"TimedTodo title2\",\n  \"TimedTodo description 2\",\n  \"High2\",\n  20\n);\n\nconst counterTodo2 = new _todo__WEBPACK_IMPORTED_MODULE_1__.CounterTodo(\n  \"CountTodo title2\",\n  \"CountTodo description2\",\n  \"Low2\",\n  8\n);\n\n// // Add todos to the project 2\nmyProject2.addTodo(regularTodo2);\nmyProject2.addTodo(timedTodo2);\nmyProject2.addTodo(counterTodo2);\nconsole.log(myProject2.listTodos());\n\nconst sampleProject1 = myProject;\nconst sampleProject2 = myProject2;\n\n\n//# sourceURL=webpack://webpack-template/./src/js/initial_project_sample/deafultOutput.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/js/todo.js\");\n\n\nclass Project {\n  constructor(title, date) {\n    this.title = title;\n    this.date = date;\n    this.todoList = [];\n  }\n\n  addTodo(todo) {\n    this.todoList.push(todo);\n  }\n\n  removeTodo(title) {\n    this.todoList = this.todoList.filter((todo) => todo.title !== title);\n  }\n\n  listTodos() {\n    return this.todoList.map((todo) =>\n      todo.todo ? todo.todo.title : todo.title\n    );\n  }\n\n  //   getIncompleteTodos() {\n  //     return this.todoList.filter((todo) => !todo.completed);\n  //   }\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/project.js?");

/***/ }),

/***/ "./src/js/render_page/renderProjectContent.js":
/*!****************************************************!*\
  !*** ./src/js/render_page/renderProjectContent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjectContent: () => (/* binding */ renderProjectContent)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/js/app.js\");\n/* harmony import */ var _add_delete_todo_addTodoToProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add_delete_todo/addTodoToProjectList */ \"./src/js/add_delete_todo/addTodoToProjectList.js\");\n/* harmony import */ var _form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form_input_helper/createFormInput */ \"./src/js/form_input_helper/createFormInput.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo */ \"./src/js/todo.js\");\n\n\n\n\n\n// Prints the projects todo list title\nfunction printProjectTitle(contentDiv, index) {\n  // Create and append the projects title\n  const projectTitle = document.createElement(\"h2\");\n  projectTitle.textContent = `${_app__WEBPACK_IMPORTED_MODULE_0__.projectListArr.at(index).title}`;\n  console.log(`Adding ${_app__WEBPACK_IMPORTED_MODULE_0__.projectListArr.at(index).title} to content`);\n  contentDiv.appendChild(projectTitle);\n}\n\n// Opens the projects todo list in content div\nfunction renderProjectContent(index) {\n  // Get the content div element\n  const contentDiv = document.getElementById(\"content\");\n  contentDiv.innerHTML = \"\"; // Clear the current project\n\n  // Print the projects title\n  printProjectTitle(contentDiv, index);\n\n  // Get the opened projects todo list\n  let projectList = _app__WEBPACK_IMPORTED_MODULE_0__.projectListArr.at(index).todoList;\n  // Print each todo in the projects todo list\n  for (let i = 0; i < projectList.length; ++i) {\n    console.log(projectList.at(i));\n    (0,_add_delete_todo_addTodoToProjectList__WEBPACK_IMPORTED_MODULE_1__.addTodoToProjectList)(projectList.at(i), contentDiv);\n  }\n\n  // Add a button to add a new todo to the project\n  const addTodoBtn = document.createElement(\"div\");\n  addTodoBtn.classList.add(\"add-todo-btn\");\n  addTodoBtn.textContent = \"Add A Todo To the Todo List\";\n  contentDiv.appendChild(addTodoBtn);\n\n  addTodoBtn.addEventListener(\"click\", () => {\n    addTodoToProject(contentDiv, index);\n  });\n}\n\n// Adds a todo to the current project\nfunction addTodoToProject(contentDiv, index) {\n  // Clear the current content\n  contentDiv.innerHTML = \"\";\n\n  // Create a form dynamically\n  const form = document.createElement(\"form\");\n  form.classList.add(\"todo-form\");\n\n  // Add a title input\n  const titleInput = (0,_form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_2__.createFormInput)(\"Title\", \"text\");\n  form.appendChild(titleInput);\n\n  // Add a description input\n  const descriptionInput = (0,_form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_2__.createFormInput)(\"Description\", \"text\");\n  form.appendChild(descriptionInput);\n\n  // Add a due date input\n  const dueDateInput = (0,_form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_2__.createFormInput)(\"Due Date\", \"date\");\n  form.appendChild(dueDateInput);\n\n  // Add a priority input\n  const priorityInput = (0,_form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_2__.createFormInput)(\"Priority\", \"text\");\n  form.appendChild(priorityInput);\n\n  // Add a notes input\n  const notesInput = (0,_form_input_helper_createFormInput__WEBPACK_IMPORTED_MODULE_2__.createFormInput)(\"Notes\", \"textarea\");\n  form.appendChild(notesInput);\n\n  // Add submit button\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Add Todo\";\n  submitButton.type = \"submit\";\n  form.appendChild(submitButton);\n\n  // Add event listener to the form\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    // Get the values from the form inputs\n    const title = titleInput.querySelector(\"input\").value;\n    const description = descriptionInput.querySelector(\"input\").value;\n    const dueDate = dueDateInput.querySelector(\"input\").value;\n    const priority = priorityInput.querySelector(\"input\").value;\n    const notes = notesInput.querySelector(\"textarea\").value;\n\n    // Create a new Todo instance\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__.Todo(\n      title,\n      description,\n      dueDate,\n      priority,\n      notes,\n      false\n    );\n\n    // Get the project index from the currently displayed project\n    // const currentProjectIndex = parseInt(contentDiv.dataset.currentProject, 10);\n    const currentProject = _app__WEBPACK_IMPORTED_MODULE_0__.projectListArr[index];\n\n    // Add the new Todo to the project\n    currentProject.addTodo(newTodo);\n\n    // Reopen the project to show the updated todo list\n    renderProjectContent(index);\n  });\n\n  // Append the form to the content div\n  contentDiv.appendChild(form);\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/render_page/renderProjectContent.js?");

/***/ }),

/***/ "./src/js/render_page/renderProjectList.js":
/*!*************************************************!*\
  !*** ./src/js/render_page/renderProjectList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjectList: () => (/* binding */ renderProjectList)\n/* harmony export */ });\n/* harmony import */ var _renderProjectContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjectContent */ \"./src/js/render_page/renderProjectContent.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/js/app.js\");\n/* harmony import */ var _add_delete_project_deleteProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add_delete_project/deleteProject */ \"./src/js/add_delete_project/deleteProject.js\");\n/* harmony import */ var _add_delete_project_addProjectToList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add_delete_project/addProjectToList */ \"./src/js/add_delete_project/addProjectToList.js\");\n\n\n\n\n\n// Side bar project list\nfunction renderProjectList() {\n  // Get projectList div to dynamically add to\n  const projectListDiv = document.querySelector(\".projectList\");\n  const addProjectBtn = document.querySelector(\".addProjectBtn\");\n\n  projectListDiv.innerHTML = \"\"; // Clear existing projects\n\n  // For each of the projects in the projectListArr\n  _app__WEBPACK_IMPORTED_MODULE_1__.projectListArr.forEach((project, index) => {\n    console.log(project);\n\n    // Create a new project div for the current project\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.classList.add(\"project-item\");\n    projectDiv.dataset.index = index; // Store the index for identification\n\n    // Add the projects title\n    const projectTitle = document.createElement(\"span\");\n    projectTitle.textContent = project.title;\n\n    // Add event listener to open project in the content div\n    projectTitle.addEventListener(\"click\", () => {\n      (0,_renderProjectContent__WEBPACK_IMPORTED_MODULE_0__.renderProjectContent)(index);\n    });\n\n    // Create a delete button to delete a project\n    const deleteBtn = document.createElement(\"button\");\n    deleteBtn.textContent = \"Delete\";\n    deleteBtn.classList.add(\"delete-btn\");\n\n    // Add event listener to the delete button\n    deleteBtn.addEventListener(\"click\", () => {\n      (0,_add_delete_project_deleteProject__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(index);\n    });\n\n    // Append title and button to the project div\n    projectDiv.appendChild(projectTitle);\n    projectDiv.appendChild(deleteBtn);\n    projectListDiv.appendChild(projectDiv);\n  });\n\n  addProjectBtn.addEventListener(\"click\", () => {\n    (0,_add_delete_project_addProjectToList__WEBPACK_IMPORTED_MODULE_3__.addProjectToList)(projectListDiv);\n  });\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/render_page/renderProjectList.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CounterTodo: () => (/* binding */ CounterTodo),\n/* harmony export */   TimedTodo: () => (/* binding */ TimedTodo),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(title, description, dueDate, priority, notes) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.completed = false;\n  }\n\n  markAsComplete() {\n    this.completed = true;\n  }\n\n  toggleCompletion() {\n    this.completed = !this.completed;\n  }\n}\n\nclass TimedBehavior {\n  constructor(duration) {\n    this.duration = duration;\n    this.startTime = null;\n  }\n\n  get title() {\n    return this.todo.title;\n  }\n\n  startTimer() {\n    this.startTime = new Date();\n    console.log(`Timer started for ${this.duration} minutes.`);\n  }\n}\n\nclass CounterBehavior {\n  constructor(maxCount) {\n    this.maxCount = maxCount;\n    this.count = 0;\n  }\n\n  get title() {\n    return this.todo.title;\n  }\n\n  increment() {\n    if (this.count < this.maxCount) {\n      this.count++;\n      console.log(`Count: ${this.count}`);\n    } else {\n      console.log(\"Max count reached!\");\n    }\n  }\n}\n\nclass TimedTodo {\n  constructor(title, description, priority, duration) {\n    this.todo = new Todo(title, description, priority);\n    this.timedBehavior = new TimedBehavior(duration);\n  }\n\n  startTimer() {\n    this.timedBehavior.startTimer();\n  }\n}\n\nclass CounterTodo {\n  constructor(title, description, priority, maxCount) {\n    this.todo = new Todo(title, description, priority);\n    this.counterBehavior = new CounterBehavior(maxCount);\n  }\n\n  incrementTask() {\n    this.counterBehavior.increment();\n  }\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/js/todo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;