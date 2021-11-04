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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// console.log("-------------TOC with 'wp' object on window");
window.addEventListener("DOMContentLoaded", function () {
  var parseTocSlug = function parseTocSlug(slug) {
    // If not have the element then return false!
    if (!slug) {
      return slug;
    }

    var parsedSlug = slug.toString().toLowerCase().replace(/&(amp;)/g, "") // Remove &
    .replace(/&(mdash;)/g, "") // Remove long dash
    .replace(/\u2013|\u2014/g, "") // Remove long dash
    .replace(/[&]nbsp[;]/gi, "-") // Replace inseccable spaces
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g, "") // Remove special chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

    return decodeURI(encodeURIComponent(parsedSlug));
  };

  var EBTableOfContents = {
    init: function init() {
      this._run();

      this._scroll();

      this._toggleCollapse();

      this._scrollToTop();

      this._hide();

      this._show();

      this._hideOnMobileView();
    },
    _toggleCollapse: function _toggleCollapse() {
      var containers = document.querySelectorAll(".eb-toc-container");

      var _iterator = _createForOfIteratorHelper(containers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          container = _step.value;
          var isSticky = container.getAttribute("data-sticky") === "true";
          var collapsible = container.getAttribute("data-collapsible") === "true";

          if (collapsible) {
            (function () {
              var title = container.querySelector(".eb-toc-title");
              var content = container.querySelector(".eb-toc-wrapper");

              if (!isSticky) {
                title.addEventListener("click", function () {
                  content.classList.toggle("hide-content");
                });
              }
            })();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    _scrollToTop: function _scrollToTop() {
      var container = document.querySelector(".eb-toc-container");
      var hasScrollTop = container && container.getAttribute("data-scroll-top") == "true";

      if (hasScrollTop) {
        var hideScroll = function hideScroll() {
          goTop.classList.remove("show-scroll");
          goTop.classList.add("hide-scroll");
        };

        var showScroll = function showScroll() {
          goTop.classList.remove("hide-scroll");
          goTop.classList.add("show-scroll");
        };

        var onScrollPage = function onScrollPage() {
          document.body.scrollTop > 30 || document.documentElement.scrollTop > 20 ? showScroll() : hideScroll();
        };

        // Create go to top element
        var goTop = document.createElement("span");
        goTop.setAttribute("class", "eb-toc-go-top ");
        goTop.innerHTML = ">";
        document.body.insertBefore(goTop, document.body.lastChild); // Add click event

        goTop.addEventListener("click", function () {
          // document.body.scrollTop = 0;
          // document.documentElement.scrollTop = 0;
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        });
        var containers = document.querySelectorAll(".eb-toc-container");

        var _iterator2 = _createForOfIteratorHelper(containers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            container = _step2.value;
            var goToTop = container.getAttribute("data-scroll-top") === "true";

            if (goToTop) {
              // Add scroll event
              window.addEventListener("scroll", onScrollPage);
              showScroll();
            } else {
              hideScroll();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },

    /**
     * Smooth Scroll.
     */
    _scroll: function _scroll() {
      var nodes = document.querySelectorAll(".eb-toc-wrapper");

      var _iterator3 = _createForOfIteratorHelper(nodes),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          node = _step3.value;
          var isSmooth = node.getAttribute("data-smooth") === "true";

          if (isSmooth) {
            node.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
              anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                  behavior: "smooth"
                });
              });
            });
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    },

    /**
     * Close contents
     */
    _hide: function _hide() {
      var crossButtons = document.querySelectorAll(".eb-toc-close");

      var _iterator4 = _createForOfIteratorHelper(crossButtons),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          crossButton = _step4.value;
          crossButton.addEventListener("click", function () {
            var container = crossButton.closest(".eb-toc-container");
            container.classList.add("eb-toc-content-hidden");
            container.classList.remove("eb-toc-content-visible");
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    },
    _show: function _show() {
      var headerButtons = document.querySelectorAll(".eb-toc-button");

      var _iterator5 = _createForOfIteratorHelper(headerButtons),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          headerButton = _step5.value;
          headerButton.addEventListener("click", function () {
            var container = headerButton.closest(".eb-toc-container");
            container.classList.remove("eb-toc-content-hidden");
            container.classList.add("eb-toc-content-visible");
          });
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },

    /**
     * Alter the_content.
     */
    _run: function _run() {
      var containers = document.querySelectorAll(".eb-toc-container");

      var _iterator6 = _createForOfIteratorHelper(containers),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          container = _step6.value;

          if (container) {
            // Save container border
            var tocBorder = container.style.border;
            window.ebTocBorder = tocBorder;
          }

          var _node = document.querySelector(".eb-toc-wrapper");

          if (_node) {
            (function () {
              var headers = JSON.parse(_node.getAttribute("data-headers"));
              var visibleHeaders = JSON.parse(_node.getAttribute("data-visible"));
              var allowed_h_tags = [];

              if (visibleHeaders !== undefined) {
                visibleHeaders.forEach(function (h_tag, index) {
                  return h_tag === true ? allowed_h_tags.push("h" + (index + 1)) : null;
                });
              }

              var allowed_h_tags_str = null !== allowed_h_tags ? allowed_h_tags.join(",") : "";
              var all_header = undefined !== allowed_h_tags_str && "" !== allowed_h_tags_str ? document.body.querySelectorAll(allowed_h_tags_str) : document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");

              if (undefined !== headers && 0 !== all_header.length) {
                headers.forEach(function (element) {
                  var element_text = parseTocSlug(element.text);
                  all_header.forEach(function (item) {
                    var header_text = parseTocSlug(item.textContent); // console.log({
                    // 	header_text,
                    // 	element_text,
                    // 	item,
                    // 	element,
                    // });

                    if (element_text.localeCompare(header_text) === 0) {
                      // item.before(``);
                      item.innerHTML = "<span id=\"".concat(header_text, "\" class=\"eb-toc__heading-anchor\"></span>").concat(item.innerHTML);
                    }
                  });
                });
              }
            })();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    },

    /**
     * Hide sticky content on mobile
     */
    _hideOnMobileView: function _hideOnMobileView() {
      var container = document.querySelector(".eb-toc-container");

      if (container) {
        var isSticky = container.getAttribute("data-sticky") === "true";
        var hideOnMobile = container.getAttribute("data-hide-mobile") == "true";

        if (isSticky && hideOnMobile && window.screen.width < 420) {
          container.style.display = "none";
        }
      }
    }
  };
  EBTableOfContents.init();
});

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map