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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/webview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/webview.js":
/*!******************************!*\
  !*** ./resources/webview.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//ID, css attribute, value, type attribute, device
var arrayVariables = [[0, 'color-primary', "", "color", ""], [1, 'color-secondary', "", "color", ""], [2, 'color-info', "", "color", ""], [3, 'color-success', "", "color", ""], [4, 'color-warning', "", "color", ""], [5, 'color-error', "", "color", ""], [6, 'color-neutral-0', "", "color", ""], [7, 'color-neutral-1', "", "color", ""], [8, 'color-neutral-2', "", "color", ""], [9, 'color-neutral-3', "", "color", ""], [10, 'color-neutral-4', "", "color", ""], [11, 'color-neutral-5', "", "color", ""], [12, 'color-neutral-6', "", "color", ""], [13, 'color-neutral-7', "", "color", ""], [14, 'color-neutral-8', "", "color", ""], [15, 'color-neutral-9', "", "color", ""], [16, 'color-neutral-10', "", "color", ""], [17, 'color-red-darkest', "", "color", ""], [18, 'color-red-darker', "", "color", ""], [19, 'color-red-dark', "", "color", ""], [20, 'color-red', "", "color", ""], [21, 'color-red-light', "", "color", ""], [22, 'color-red-lighter', "", "color", ""], [23, 'color-red-lightest', "", "color", ""], [24, 'color-orange-darkest', "", "color", ""], [25, 'color-orange-darker', "", "color", ""], [26, 'color-orange-dark', "", "color", ""], [27, 'color-orange', "", "color", ""], [28, 'color-orange-light', "", "color", ""], [29, 'color-orange-lighter', "", "color", ""], [30, 'color-orange-lightest', "", "color", ""], [31, 'color-yellow-darkest', "", "color", ""], [32, 'color-yellow-darker', "", "color", ""], [33, 'color-yellow-dark', "", "color", ""], [34, 'color-yellow', "", "color", ""], [35, 'color-yellow-light', "", "color", ""], [36, 'color-yellow-lighter', "", "color", ""], [37, 'color-yellow-lightest', "", "color", ""], [38, 'color-lime-darkest', "", "color", ""], [39, 'color-lime-darker', "", "color", ""], [40, 'color-lime-dark', "", "color", ""], [41, 'color-lime', "", "color", ""], [42, 'color-lime-light', "", "color", ""], [43, 'color-lime-lighter', "", "color", ""], [44, 'color-lime-lightest', "", "color", ""], [45, 'color-green-darkest', "", "color", ""], [46, 'color-green-darker', "", "color", ""], [47, 'color-green-dark', "", "color", ""], [48, 'color-green', "", "color", ""], [49, 'color-green-light', "", "color", ""], [50, 'color-green-lighter', "", "color", ""], [51, 'color-green-lightest', "", "color", ""], [52, 'color-teal-darkest', "", "color", ""], [53, 'color-teal-darker', "", "color", ""], [54, 'color-teal-dark', "", "color", ""], [55, 'color-teal', "", "color", ""], [56, 'color-teal-light', "", "color", ""], [57, 'color-teal-lighter', "", "color", ""], [58, 'color-teal-lightest', "", "color", ""], [59, 'color-cyan-darkest', "", "color", ""], [60, 'color-cyan-darker', "", "color", ""], [61, 'color-cyan-dark', "", "color", ""], [62, 'color-cyan', "", "color", ""], [63, 'color-cyan-light', "", "color", ""], [64, 'color-cyan-lighter', "", "color", ""], [65, 'color-cyan-lightest', "", "color", ""], [66, 'color-blue-darkest', "", "color", ""], [67, 'color-blue-darker', "", "color", ""], [68, 'color-blue-dark', "", "color", ""], [69, 'color-blue', "", "color", ""], [70, 'color-blue-light', "", "color", ""], [71, 'color-blue-lighter', "", "color", ""], [72, 'color-blue-lightest', "", "color", ""], [73, 'color-indigo-darkest', "", "color", ""], [74, 'color-indigo-darker', "", "color", ""], [75, 'color-indigo-dark', "", "color", ""], [76, 'color-indigo', "", "color", ""], [77, 'color-indigo-light', "", "color", ""], [78, 'color-indigo-lighter', "", "color", ""], [79, 'color-indigo-lightest', "", "color", ""], [80, 'color-violet-darkest', "", "color", ""], [81, 'color-violet-darker', "", "color", ""], [82, 'color-violet-dark', "", "color", ""], [83, 'color-violet', "", "color", ""], [84, 'color-violet-light', "", "color", ""], [85, 'color-violet-lighter', "", "color", ""], [86, 'color-violet-lightest', "", "color", ""], [87, 'color-grape-darkest', "", "color", ""], [88, 'color-grape-darker', "", "color", ""], [89, 'color-grape-dark', "", "color", ""], [90, 'color-grape', "", "color", ""], [91, 'color-grape-light', "", "color", ""], [92, 'color-grape-lighter', "", "color", ""], [93, 'color-grape-lightest', "", "color", ""], [94, 'color-pink-darkest', "", "color", ""], [95, 'color-pink-darker', "", "color", ""], [96, 'color-pink-dark', "", "color", ""], [97, 'color-pink', "", "color", ""], [98, 'color-pink-light', "", "color", ""], [99, 'color-pink-lighter', "", "color", ""], [100, 'color-pink-lightest', "", "color", ""], [101, 'color-info-light', "", "color", ""], [102, 'color-success-light', "", "color", ""], [103, 'color-warning-light', "", "color", ""], [104, 'color-error-light', "", "color", ""], [105, 'font-size-display', "", "pixel", "desktop"], [106, 'font-size-h1', "", "pixel", "desktop"], [107, 'font-size-h2', "", "pixel", "desktop"], [108, 'font-size-h3', "", "pixel", "desktop"], [109, 'font-size-h4', "", "pixel", "desktop"], [110, 'font-size-h5', "", "pixel", "desktop"], [111, 'font-size-h6', "", "pixel", "desktop"], [112, 'font-size-base', "", "pixel", "desktop"], [113, 'font-size-s', "", "pixel", "desktop"], [114, 'font-size-xs', "", "pixel", "desktop"], [115, 'font-light', "", "text", ""], [116, 'font-regular', "", "text", ""], [117, 'font-semi-bold', "", "text", ""], [118, 'font-bold', "", "text", ""], [119, 'space-none', "", "text", ""], [120, 'space-xs', "", "pixel", ""], [121, 'space-s', "", "pixel", ""], [122, 'space-base', "", "pixel", ""], [123, 'space-m', "", "pixel", ""], [124, 'space-l', "", "pixel", ""], [125, 'space-xl', "", "pixel", ""], [126, 'space-xxl', "", "pixel", ""], [127, 'border-radius-none', "", "text", ""], [128, 'border-radius-soft', "", "pixel", ""], [129, 'border-radius-rounded', "", "pixel", ""], [130, 'border-radius-circle', "", "text", ""], [131, 'border-size-none', "", "text", ""], [132, 'border-size-s', "", "pixel", ""], [133, 'border-size-m', "", "pixel", ""], [134, 'border-size-l', "", "pixel", ""], [135, 'shadow-none', "", "text", ""], [136, 'shadow-xs', "", "shadow", ""], [137, 'shadow-s', "", "shadow", ""], [138, 'shadow-m', "", "shadow", ""], [139, 'shadow-l', "", "shadow", ""], [140, 'shadow-xl', "", "shadow", ""], [141, 'header-color', "", "color", ""], [142, 'color-background-body', "", "color", ""], [143, 'color-background-login', "", "color", ""], [144, 'header-size', "", "pixel", ""], [145, 'header-size-content', "", "pixel", ""], [146, 'side-menu-size', "", "pixel", ""], [147, 'bottom-bar-size', "", "pixel", ""], [148, 'footer-height', "", "pixel", ""], [149, 's-safe-area-top', "env(safe-area-inset-top)", "text", ""], [150, 'os-safe-area-right', "env(safe-area-inset-right)", "text", ""], [151, 'os-safe-area-bottom', "env(safe-area-inset-bottom)", "text", ""], [152, 'os-safe-area-left', "env(safe-area-inset-left)", "text", ""], [153, 'font-family', "", "text", ""], [154, 'font-size-display', "", "pixel", "tablet"], [155, 'font-size-h1', "", "pixel", "tablet"], [156, 'font-size-h2', "", "pixel", "tablet"], [157, 'font-size-h3', "", "pixel", "tablet"], [158, 'font-size-h4', "", "pixel", "tablet"], [159, 'font-size-h5', "", "pixel", "tablet"], [160, 'font-size-h6', "", "pixel", "tablet"], [161, 'font-size-base', "", "pixel", "tablet"], [162, 'font-size-s', "", "pixel", "tablet"], [163, 'font-size-xs', "", "pixel", "tablet"], [164, 'font-size-display', "", "pixel", "phone"], [165, 'font-size-h1', "", "pixel", "phone"], [166, 'font-size-h2', "", "pixel", "phone"], [167, 'font-size-h3', "", "pixel", "phone"], [168, 'font-size-h4', "", "pixel", "phone"], [169, 'font-size-h5', "", "pixel", "phone"], [170, 'font-size-h6', "", "pixel", "phone"], [171, 'font-size-base', "", "pixel", "phone"], [172, 'font-size-s', "", "pixel", "phone"], [173, 'font-size-xs', "", "pixel", "phone"], [174, 'search_input_padding', "", "pixel", ""], [175, 'alert_border_radius', "", "pixel", ""], [176, 'btn_border_radius', "", "pixel", ""], [177, '.form-control[data-input]_border_radius', "", "pixel", ""], [178, 'tag_border_radius', "", "pixel", ""], [179, 'search_border_radius', "", "pixel", ""], [180, 'choices__item', "", "pixel", ""], [181, 'choices__inner', "", "pixel", ""], [182, 'checkbox', "", "pixel", ""], [183, 'button_group', "", "pixel", ""], [184, 'calendar', "", "pixel", ""], [185, 'pagination', "", "pixel", ""], [186, 'dropdown', "", "pixel", ""], [187, 'color_background_login_form', "", "color", ""], [188, 'color_animated_text_login_form', "", "color", ""], [189, 'color_label_login_form', "", "color", ""], [190, 'color_link_login_form', "", "color", ""], [191, 'color_title_login_form', "", "color", ""]]; //Array of IDs identified as the base styles to show in the HTML
//If you want to show this variables in the HTML, the class if the element should match the name in arrayVariables with prefix "preview-"
//Example: "preview-color-primary"

var arrayBaseVariables = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 141, 142, 153, 112, 144]; //Definition of the css root variables groups to show in the CSS

var arrayVariablesGroups = [[0, "Typography - Size", [105, 106, 107, 108, 109, 110, 111, 112, 113, 114]], [1, "Typography - Weight", [115, 116, 117, 118]], [2, "Color - Brand", [0, 1]], [3, "Color - Extended", [17, 18, 19, 20, 21, 22, 23]], [4, "", [24, 25, 26, 27, 28, 29, 30]], [5, "", [31, 32, 33, 34, 35, 36, 37]], [6, "", [38, 39, 40, 41, 42, 43, 44]], [7, "", [45, 46, 47, 48, 49, 50, 51]], [8, "", [52, 53, 54, 55, 56, 57, 58]], [9, "", [59, 60, 61, 62, 63, 64, 65]], [10, "", [66, 67, 68, 69, 70, 71, 72]], [11, "", [73, 74, 75, 76, 77, 78, 79]], [12, "", [80, 81, 82, 83, 84, 85, 86]], [13, "", [87, 88, 89, 90, 91, 92, 93]], [14, "", [94, 95, 96, 97, 98, 99, 100]], [15, "Color - Neutral", [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]], [16, "Color - Semantic", [2, 101, 3, 102, 4, 103, 5, 104]], [17, "Space - Sizes", [119, 120, 121, 122, 123, 124, 125, 126]], [18, "Border - Radius", [127, 128, 129, 130]], [19, "Border - Size", [131, 132, 133, 134]], [20, "Elevation / Shadow", [135, 136, 137, 138, 139, 140]], [21, "App Settings", [141, 142, 143, 144]], [22, "IOS Safe Areas (Notch Support", [149, 150, 151, 152]], [23, "Typography - Sizes Tablet", [154, 155, 156, 157, 158, 159, 160, 161, 162, 163]], [24, "Typography - Sizes Phone", [164, 165, 166, 167, 168, 169, 170, 171, 172, 173]]];
var identation = "";
var enter = "<br><br>";
var breakLine = "<br>";
var attributeValue = ""; //remove context menu from webview to have a more "native" feal

document.addEventListener('contextmenu', function (e) {//e.preventDefault()
}); //click in button to retreave new values from plugin

document.getElementById('button-send-data').addEventListener('click', function () {
  removeAlertMessage();
  var cssData = "";
  window.postMessage('updateAllStyles', cssData);
}); //

window.showDownloadUIKit = function (message) {
  document.getElementsByClassName("main-content-no-doc")[0].classList.remove("hidden");
}; //update styles on sketch init


window.updateStylesOnInit = function (message) {
  document.getElementsByClassName("main-content-plugin")[0].classList.remove("hidden");
  updateRootVariables(message);
  updateThemeCSS(message);
  updateBaseStyles(message);
}; //


window.setThemeOnInit = function (message) {
  document.getElementsByTagName("body")[0].classList.add("dark-theme");
}; //when sketch document change...


window.documentChanged = function (message) {
  document.getElementById('button-send-data').click();
  alertMessage("Sketch document changed and styles where updated.", true, false);
}; //call the webview from the plugin (receive information from plugin)


window.updateCSS = function (message) {
  updateRootVariables(message);
  updateThemeCSS(message);
  updateBaseStyles(message);
  alertMessage("Sketch document re-scan is completed. Style are now updated.", false, false);
}; //click on copy CSS button to copy root variables


document.getElementById('copy-button-root-variables').addEventListener('click', function () {
  var cb = navigator.clipboard;
  var paragraph = document.querySelector('#root-variables');
  cb.writeText(paragraph.innerText).then(function () {
    return alertMessage("CSS copied to clipboard.", true, false);
  });
  removeAlertMessage();
}); //click on copy CSS button to copy CSS theme

document.getElementById('copy-button-theme-css').addEventListener('click', function () {
  var cb = navigator.clipboard;
  var paragraph = document.querySelector('#theme-css ');
  cb.writeText(paragraph.innerText).then(function () {
    return alertMessage("CSS copied to clipboard.", true, false);
  });
  removeAlertMessage();
}); //update root variables

function updateRootVariables(message) {
  updateAllStyles(message);
  var htmlContent = "";
  htmlContent += appendComment("Generated by OS UI Plugins", identation);
  htmlContent += "<div>:root {</div>";
  arrayVariablesGroups.forEach(function (element) {
    if (element[1] !== "") {
      htmlContent += "<br>";
      htmlContent += appendComment(element[1], identation);
    } else {
      htmlContent += "<br>";
    }

    if (element[2].length > 0) {
      element[2].forEach(function (element) {
        if (arrayVariables[element][3] == "pixel") {
          htmlContent += appendAttribute(arrayVariables[element][1], arrayVariables[element][2], "--", "px");
        } else {
          htmlContent += appendAttribute(arrayVariables[element][1], arrayVariables[element][2], "--", "");
        }
      });
      htmlContent += "</br>";
    }
  });
  htmlContent += "<div>}</div>";
  document.getElementById('root-variables').innerHTML = htmlContent;
} //update theme css


function updateThemeCSS(message) {
  var htmlContent = "";
  htmlContent += appendComment("Generated by OS UI Plugins", identation);
  htmlContent += appendSeparator("The following CSS was created using Sketch Plugin.<br>&nbsp;&nbsp;&nbsp;&nbsp;You can modify this CSS has you want or <br>&nbsp;&nbsp;&nbsp;&nbsp;generate a new one in the Sketch Plugin.");
  htmlContent += appendSeparator("Font Family");
  htmlContent += "@import url(/*ADD URL TO YOUR FONT*/);" + breakLine + breakLine;
  htmlContent += "body, select, textarea, input, button {" + breakLine;
  htmlContent += identation + "font-family: '" + arrayVariables[153][2] + "', sans-serif;";
  htmlContent += " /*Validate the Font Name to match the correct font and the backup fonts used*/" + breakLine;
  htmlContent += "}";
  htmlContent += enter;
  htmlContent += appendSeparator("Root - CSS Variables");
  htmlContent += ":root {";
  htmlContent += enter;
  htmlContent += appendComment(arrayVariablesGroups[0][1], identation); //sizes desktop

  arrayVariablesGroups[0][2].forEach(function (element) {
    htmlContent += appendAttribute(arrayVariables[element][1], arrayVariables[element][2], "--", "px");
  });
  htmlContent += enter;
  htmlContent += appendComment(arrayVariablesGroups[2][1], identation); //color brand

  arrayVariablesGroups[2][2].forEach(function (element) {
    htmlContent += appendAttribute(arrayVariables[element][1], arrayVariables[element][2], "--", "");
  });
  htmlContent += enter;
  htmlContent += appendComment(arrayVariablesGroups[17][1], identation); //space sizes

  arrayVariablesGroups[17][2].forEach(function (element) {
    htmlContent += appendAttribute(arrayVariables[element][1], arrayVariables[element][2], "--", "px");
  });
  htmlContent += enter;
  htmlContent += appendComment(arrayVariablesGroups[21][1], identation); //app settings

  arrayVariablesGroups[21][2].forEach(function (element) {
    htmlContent += appendAttribute(arrayVariables[element][1], arrayVariables[element][2], "--", arrayVariables[element][3] != "pixel" ? "" : "px");
  });
  htmlContent += enter;
  htmlContent += "}"; //end root variables

  htmlContent += enter;
  htmlContent += appendComment(arrayVariablesGroups[23][1], ""); //sizes tablet

  arrayVariablesGroups[23][2].forEach(function (element) {
    htmlContent += "." + arrayVariables[element][4] + " ." + arrayVariables[element][1];
    htmlContent += " { --" + arrayVariables[element][1] + ": " + arrayVariables[element][2] + "px;  }" + breakLine;
  });
  htmlContent += enter;
  htmlContent += appendComment(arrayVariablesGroups[24][1], ""); //sizes phone

  arrayVariablesGroups[24][2].forEach(function (element) {
    htmlContent += "." + arrayVariables[element][4] + " ." + arrayVariables[element][1];
    htmlContent += " { --" + arrayVariables[element][1] + ": " + arrayVariables[element][2] + "px;  }" + breakLine;
  });
  htmlContent += enter;
  htmlContent += appendSeparator("Border-Radius"); //border radius

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[175][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".alert"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[176][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".btn"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[177][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".form-control[data-input]"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[178][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".tag"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[179][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".search--wrapper input"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //DropdownTags

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[180][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".choices__list--multiple .choices__item"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //DropdownSearch

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[181][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".choices__inner", ".is-focused .choices__inner", ".is-open .choices__inner", ".choices.is-open.is-focused .choices__inner"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[181][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".choices__list--multiple .choices__item"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //Checkbox

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[182][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".checkbox:before"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //ButtonGroup

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[183][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".button-group"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //Calendar

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[184][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".pika-button"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //Pagination

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[185][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".pagination-button"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //Dropdown

  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[186][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass(["[data-dropdown] > select.dropdown-display", "[data-dropdown] > div.dropdown-display"], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[183][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".button-group-item:first-child"], [appendAttribute("border-top-left-radius", "var(--" + attributeValue + ")", "", ""), appendAttribute("border-bottom-left-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[183][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass([".button-group-item:last-child"], [appendAttribute("border-top-right-radius", "var(--" + attributeValue + ")", "", ""), appendAttribute("border-bottom-right-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter;
  arrayVariablesGroups[18][2].forEach(function (element) {
    if (arrayVariables[element][2] == arrayVariables[181][2]) {
      attributeValue = arrayVariables[element][1];
    }
  });
  htmlContent += appendClass(['.choices[data-type*="select-multiple"] .choices__inner', '.choices[data-type*="select-multiple"].is-open .choices__inner'], [appendAttribute("border-radius", "var(--" + attributeValue + ")", "", "")]);
  htmlContent += enter; //Spacing

  htmlContent += appendSeparator("Spacing");
  htmlContent += ".search .form-control[data-input] {" + breakLine;
  htmlContent += identation + "padding: 0 var(--"; //find the corresponding variable to the value defined in sketch and append

  arrayVariablesGroups[17][2].forEach(function (element) {
    if (arrayVariables[element][2] == Math.round(arrayVariables[174][2])) {
      htmlContent += arrayVariables[element][1];
    }
  });
  htmlContent += ");" + breakLine + "}";
  htmlContent += enter; //login and splash colors

  htmlContent += appendSeparator("Login and Splash Color");
  htmlContent += ".login-screen," + breakLine;
  htmlContent += ".layout-native .login-screen {" + breakLine;
  htmlContent += identation + "background-color: var(--" + arrayVariables[143][1] + ");";
  htmlContent += breakLine + "}";
  htmlContent += enter;
  htmlContent += appendClass(['.login-form', '.tablet .layout-native .login-form'], [appendAttribute("background-color", arrayVariables[187][2], "", "")]);
  htmlContent += enter;
  htmlContent += appendClass(['.login-screen .animated-label-text label'], [appendAttribute("color", arrayVariables[188][2], "", "")]);
  htmlContent += enter;
  htmlContent += appendClass(['.login-screen label'], [appendAttribute("color", arrayVariables[189][2], "", "")]);
  htmlContent += enter;
  htmlContent += appendClass(['.login-form a'], [appendAttribute("color", arrayVariables[190][2], "", "")]);
  htmlContent += enter;
  htmlContent += appendClass(['.login-screen [class*="text-neutral"]'], [appendAttribute("color", arrayVariables[191][2], "", "")]);
  document.getElementById('theme-css').innerHTML = htmlContent; //append all code to DOM
}
/* Append a class or list of classes and apply an attribute or list of attributes */


function appendClass(arrayClasses, arrayAttributes) {
  var thisHTMLContent = "";
  arrayClasses.forEach(function (values, i) {
    thisHTMLContent += arrayClasses[i] + (i < arrayClasses.length - 1 ? "," : " {") + breakLine;
  });
  arrayAttributes.forEach(function (values, i) {
    thisHTMLContent += arrayAttributes[i];
  });
  thisHTMLContent += "}";
  return thisHTMLContent;
} //Append an attribute


function appendAttribute(variable, value, prefix, postfix) {
  return identation + prefix + variable + ": " + value + postfix + ";" + breakLine;
} //


function appendSeparator(message) {
  var thisHTMLContent = "<div class='secondary-color'>";
  var separatorLineStart = "/* ===========================";
  var separatorLineEnd = "=========================== */";
  var separatorInitSpace = "&nbsp;&nbsp;&nbsp;&nbsp;";
  thisHTMLContent += separatorLineStart + "<br>";
  thisHTMLContent += separatorInitSpace + message + "<br>";
  thisHTMLContent += separatorLineEnd + enter;
  thisHTMLContent += "</div>";
  return thisHTMLContent;
} // 


function appendComment(message, ident) {
  var thisHTMLContent = "";
  thisHTMLContent += "<div class='secondary-color'>";
  thisHTMLContent += ident + "/* " + message + " */" + breakLine;
  thisHTMLContent += "</div>";
  return thisHTMLContent;
} //update base styles


function updateBaseStyles(message) {
  updateAllStyles(message);
  arrayBaseVariables.forEach(function (element) {
    if (arrayVariables[element][3] == "color") {
      document.getElementById("preview-" + arrayVariables[element][1]).style.backgroundColor = arrayVariables[element][2];
    } else if (arrayVariables[element][3] == "pixel") {
      document.getElementById("preview-" + arrayVariables[element][1]).innerHTML = arrayVariables[element][2] + "px";
    } else {
      document.getElementById("preview-" + arrayVariables[element][1]).innerHTML = arrayVariables[element][2];
    }
  });
} //update all styles on array


function updateAllStyles(message) {
  arrayVariables[0][2] = message.primary_color;
  arrayVariables[1][2] = message.secondary_color;
  arrayVariables[2][2] = message.color_info;
  arrayVariables[101][2] = message.color_info_light;
  arrayVariables[3][2] = message.color_success;
  arrayVariables[102][2] = message.color_success_light;
  arrayVariables[4][2] = message.color_warning;
  arrayVariables[103][2] = message.color_warning_light;
  arrayVariables[5][2] = message.color_error;
  arrayVariables[104][2] = message.color_error_light;
  arrayVariables[6][2] = message.color_neutral_0;
  arrayVariables[7][2] = message.color_neutral_1;
  arrayVariables[8][2] = message.color_neutral_2;
  arrayVariables[9][2] = message.color_neutral_3;
  arrayVariables[10][2] = message.color_neutral_4;
  arrayVariables[11][2] = message.color_neutral_5;
  arrayVariables[12][2] = message.color_neutral_6;
  arrayVariables[13][2] = message.color_neutral_7;
  arrayVariables[14][2] = message.color_neutral_8;
  arrayVariables[15][2] = message.color_neutral_9;
  arrayVariables[16][2] = message.color_neutral_10;
  arrayVariables[17][2] = message.color_red_darkest;
  arrayVariables[18][2] = message.color_red_darker;
  arrayVariables[19][2] = message.color_red_dark;
  arrayVariables[20][2] = message.color_red;
  arrayVariables[21][2] = message.color_red_light;
  arrayVariables[22][2] = message.color_red_lighter;
  arrayVariables[23][2] = message.color_red_lightest;
  arrayVariables[24][2] = message.color_orange_darkest;
  arrayVariables[25][2] = message.color_orange_darker;
  arrayVariables[26][2] = message.color_orange_dark;
  arrayVariables[27][2] = message.color_orange;
  arrayVariables[28][2] = message.color_orange_light;
  arrayVariables[29][2] = message.color_orange_lighter;
  arrayVariables[30][2] = message.color_orange_lightest;
  arrayVariables[31][2] = message.color_yellow_darkest;
  arrayVariables[32][2] = message.color_yellow_darker;
  arrayVariables[33][2] = message.color_yellow_dark;
  arrayVariables[34][2] = message.color_yellow;
  arrayVariables[35][2] = message.color_yellow_light;
  arrayVariables[36][2] = message.color_yellow_lighter;
  arrayVariables[37][2] = message.color_yellow_lightest;
  arrayVariables[38][2] = message.color_lime_darkest;
  arrayVariables[39][2] = message.color_lime_darker;
  arrayVariables[40][2] = message.color_lime_dark;
  arrayVariables[41][2] = message.color_lime;
  arrayVariables[42][2] = message.color_lime_light;
  arrayVariables[43][2] = message.color_lime_lighter;
  arrayVariables[44][2] = message.color_lime_lightest;
  arrayVariables[45][2] = message.color_green_darkest;
  arrayVariables[46][2] = message.color_green_darker;
  arrayVariables[47][2] = message.color_green_dark;
  arrayVariables[48][2] = message.color_green;
  arrayVariables[49][2] = message.color_green_light;
  arrayVariables[50][2] = message.color_green_lighter;
  arrayVariables[51][2] = message.color_green_lightest;
  arrayVariables[52][2] = message.color_teal_darkest;
  arrayVariables[53][2] = message.color_teal_darker;
  arrayVariables[54][2] = message.color_teal_dark;
  arrayVariables[55][2] = message.color_teal;
  arrayVariables[56][2] = message.color_teal_light;
  arrayVariables[57][2] = message.color_teal_lighter;
  arrayVariables[58][2] = message.color_teal_lightest;
  arrayVariables[59][2] = message.color_cyan_darkest;
  arrayVariables[60][2] = message.color_cyan_darker;
  arrayVariables[61][2] = message.color_cyan_dark;
  arrayVariables[62][2] = message.color_cyan;
  arrayVariables[63][2] = message.color_cyan_light;
  arrayVariables[64][2] = message.color_cyan_lighter;
  arrayVariables[65][2] = message.color_cyan_lightest;
  arrayVariables[66][2] = message.color_blue_darkest;
  arrayVariables[67][2] = message.color_blue_darker;
  arrayVariables[68][2] = message.color_blue_dark;
  arrayVariables[69][2] = message.color_blue;
  arrayVariables[70][2] = message.color_blue_light;
  arrayVariables[71][2] = message.color_blue_lighter;
  arrayVariables[72][2] = message.color_blue_lightest;
  arrayVariables[73][2] = message.color_indigo_darkest;
  arrayVariables[74][2] = message.color_indigo_darker;
  arrayVariables[75][2] = message.color_indigo_dark;
  arrayVariables[76][2] = message.color_indigo;
  arrayVariables[77][2] = message.color_indigo_light;
  arrayVariables[78][2] = message.color_indigo_lighter;
  arrayVariables[79][2] = message.color_indigo_lightest;
  arrayVariables[80][2] = message.color_violet_darkest;
  arrayVariables[81][2] = message.color_violet_darker;
  arrayVariables[82][2] = message.color_violet_dark;
  arrayVariables[83][2] = message.color_violet;
  arrayVariables[84][2] = message.color_violet_light;
  arrayVariables[85][2] = message.color_violet_lighter;
  arrayVariables[86][2] = message.color_violet_lightest;
  arrayVariables[87][2] = message.color_grape_darkest;
  arrayVariables[88][2] = message.color_grape_darker;
  arrayVariables[89][2] = message.color_grape_dark;
  arrayVariables[90][2] = message.color_grape;
  arrayVariables[91][2] = message.color_grape_light;
  arrayVariables[92][2] = message.color_grape_lighter;
  arrayVariables[93][2] = message.color_grape_lightest;
  arrayVariables[94][2] = message.color_pink_darkest;
  arrayVariables[95][2] = message.color_pink_darker;
  arrayVariables[96][2] = message.color_pink_dark;
  arrayVariables[97][2] = message.color_pink;
  arrayVariables[98][2] = message.color_pink_light;
  arrayVariables[99][2] = message.color_pink_lighter;
  arrayVariables[100][2] = message.color_pink_lightest;
  arrayVariables[135][2] = message.shadow_none;
  arrayVariables[136][2] = message.shadow_xs;
  arrayVariables[137][2] = message.shadow_s;
  arrayVariables[138][2] = message.shadow_m;
  arrayVariables[139][2] = message.shadow_l;
  arrayVariables[140][2] = message.shadow_xl;
  arrayVariables[119][2] = message.space_none;
  arrayVariables[120][2] = message.space_xs;
  arrayVariables[121][2] = message.space_s;
  arrayVariables[122][2] = message.space_base;
  arrayVariables[123][2] = message.space_m;
  arrayVariables[124][2] = message.space_l;
  arrayVariables[125][2] = message.space_xl;
  arrayVariables[126][2] = message.space_xxl;
  arrayVariables[131][2] = message.border_size_none;
  arrayVariables[132][2] = message.border_size_s;
  arrayVariables[133][2] = message.border_size_m;
  arrayVariables[134][2] = message.border_size_l;
  arrayVariables[127][2] = message.border_radius_none;
  arrayVariables[128][2] = message.border_radius_soft;
  arrayVariables[129][2] = message.border_radius_rounded;
  arrayVariables[130][2] = message.border_radius_circle;
  arrayVariables[141][2] = message.header_color;
  arrayVariables[142][2] = message.color_background_body;
  arrayVariables[143][2] = message.color_background_login;
  arrayVariables[153][2] = message.font_family;
  arrayVariables[115][2] = message.font_light;
  arrayVariables[116][2] = message.font_regular;
  arrayVariables[117][2] = message.font_semi_bold;
  arrayVariables[118][2] = message.font_bold;
  arrayVariables[105][2] = message.font_size_display_desktop;
  arrayVariables[106][2] = message.font_size_h1_desktop;
  arrayVariables[107][2] = message.font_size_h2_desktop;
  arrayVariables[108][2] = message.font_size_h3_desktop;
  arrayVariables[109][2] = message.font_size_h4_desktop;
  arrayVariables[110][2] = message.font_size_h5_desktop;
  arrayVariables[111][2] = message.font_size_h6_desktop;
  arrayVariables[112][2] = message.font_size_base_desktop;
  arrayVariables[113][2] = message.font_size_s_desktop;
  arrayVariables[114][2] = message.font_size_xs_desktop;
  arrayVariables[154][2] = message.font_size_display_tablet;
  arrayVariables[155][2] = message.font_size_h1_tablet;
  arrayVariables[156][2] = message.font_size_h2_tablet;
  arrayVariables[157][2] = message.font_size_h3_tablet;
  arrayVariables[158][2] = message.font_size_h4_tablet;
  arrayVariables[159][2] = message.font_size_h5_tablet;
  arrayVariables[160][2] = message.font_size_h6_tablet;
  arrayVariables[161][2] = message.font_size_base_tablet;
  arrayVariables[162][2] = message.font_size_s_tablet;
  arrayVariables[163][2] = message.font_size_xs_tablet;
  arrayVariables[164][2] = message.font_size_display_phone;
  arrayVariables[165][2] = message.font_size_h1_phone;
  arrayVariables[166][2] = message.font_size_h2_phone;
  arrayVariables[167][2] = message.font_size_h3_phone;
  arrayVariables[168][2] = message.font_size_h4_phone;
  arrayVariables[169][2] = message.font_size_h5_phone;
  arrayVariables[170][2] = message.font_size_h6_phone;
  arrayVariables[171][2] = message.font_size_base_phone;
  arrayVariables[172][2] = message.font_size_s_phone;
  arrayVariables[173][2] = message.font_size_xs_phone;
  arrayVariables[144][2] = message.header_size;
  arrayVariables[174][2] = message.search_input_padding;
  arrayVariables[175][2] = message.alert_border_radius;
  arrayVariables[176][2] = message.btn_border_radius;
  arrayVariables[177][2] = message.form_control_data_input;
  arrayVariables[178][2] = message.tag_border_radius;
  arrayVariables[179][2] = message.search_border_radius;
  arrayVariables[180][2] = message.choices_item;
  arrayVariables[181][2] = message.choices_inner;
  arrayVariables[182][2] = message.checkbox;
  arrayVariables[183][2] = message.button_group;
  arrayVariables[184][2] = message.calendar;
  arrayVariables[185][2] = message.pagination;
  arrayVariables[186][2] = message.dropdown;
  arrayVariables[187][2] = message.color_background_login_form;
  arrayVariables[188][2] = message.color_animated_text_login_form;
  arrayVariables[189][2] = message.color_label_login_form;
  arrayVariables[190][2] = message.color_link_login_form;
  arrayVariables[191][2] = message.color_title_login_form;
}
/* Section Expandable */


var listSectionExpandables = document.querySelectorAll('.section-expandable__title');
listSectionExpandables.forEach(function (el) {
  return el.addEventListener('click', function (event) {
    var parentElement = event.target.parentElement.parentElement;
    parentElement.classList.toggle("open");
  });
}); //Show an alert message

function alertMessage(message, hasTimeout, isError) {
  if (isError) {
    document.getElementById('alert-message').classList.add("error");
  } else {
    document.getElementById('alert-message').classList.remove("error");
  }

  document.getElementById('alert-message').innerHTML = message;

  if (hasTimeout) {
    setTimeout(function () {
      removeAlertMessage();
    }, 5000);
  } else {}
} //Clear alert message


function removeAlertMessage() {
  alertMessage("", false, false);
} //click in the alert to close it


document.getElementsByClassName('alert')[0].addEventListener('click', function () {
  removeAlertMessage();
}); //Save CSS in file and download it

function downloadCssToFile() {
  var filename = "ThemeEditorSketch.css";
  var cssContent = document.getElementById('theme-css').innerHTML;
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cssContent));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function interceptClickEvent(event) {
  var target = event.target.closest('a');

  if (target && target.getAttribute('target') === '_blank') {
    event.preventDefault();
    window.postMessage('externalLinkClicked', target.href);
  }
} // listen for link click events at the document level


document.addEventListener('click', interceptClickEvent);

/***/ })

/******/ });
//# sourceMappingURL=resources_webview.js.map