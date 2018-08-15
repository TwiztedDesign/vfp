(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VideoflowPlayer"] = factory();
	else
		root["VideoflowPlayer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoflowPlayer = function () {
    function VideoflowPlayer(selector, url) {
        _classCallCheck(this, VideoflowPlayer);

        this.selector = selector;
        this.url = url;
        this.element = null;
        this.iframe = null;
        this.init();
        this.createPlayer();
    }

    _createClass(VideoflowPlayer, [{
        key: 'init',
        value: function init() {
            if (this.selector instanceof Element) {
                this.element = this.selector;
                return;
            } else if (typeof this.selector === 'string') {
                switch (this.selector[0]) {
                    case '<':
                        {
                            //create element
                            var matches = this.selector.match(/<([\w-]*)>/);
                            if (matches === null || matches === undefined) {
                                throw 'Invalid Selector / Node';
                            }
                            var nodeName = matches[0].replace('<', '').replace('>', '');
                            this.element = document.createElement(nodeName);
                            break;
                        }
                    default:
                        {
                            this.element = document.querySelector(this.selector);
                        }
                }
            } else if (this.isBitmovinPlayer()) {
                this.element = this.selector.getFigure();
                this.overlay_type = 'bitmovin';
                this.isBitmovin = true;
            }
        }
    }, {
        key: 'isBitmovinPlayer',
        value: function isBitmovinPlayer() {
            return _typeof(this.selector) === 'object' && this.selector.getFigure && typeof this.selector.getFigure === 'function' && this.selector.getFigure() && this.selector.getFigure().classList.contains('bitmovinplayer-container');
        }
    }, {
        key: 'createPlayer',
        value: function createPlayer() {
            if (!this.element) {
                throw 'No such element';
            }
            var iframe = document.createElement("iframe");
            iframe.src = this.url + '?controls=0';

            this.element.style.display = 'inline-block';
            this.element.style.position = 'relative';
            iframe.classList.add("videoflow-player-overlay");
            iframe.style.border = 'none';
            iframe.style.position = 'absolute';
            iframe.style.width = '100%';
            iframe.style.right = '0';
            iframe.style.left = '0';

            switch (this.overlay_type) {
                case 'bitmovin':
                    iframe.style.bottom = '80px';
                    iframe.style['z-index'] = '1';
                    iframe.style.height = '80%';
                    // iframe.style.width = '30%';
                    break;
                default:
                    iframe.style.top = '0';
                    iframe.style.height = '100%';
            }

            this.element.appendChild(iframe);
            this.iframe = iframe;
        }
    }]);

    return VideoflowPlayer;
}();

module.exports = VideoflowPlayer;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vfp.js.map