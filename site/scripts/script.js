(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f() {
	log.history = log.history || [];log.history.push(arguments);if (this.console) {
		var args = arguments,
		    newarr;args.callee = args.callee.caller;newarr = [].slice.call(args);if (_typeof(console.log) === 'object') log.apply.call(console.log, console, newarr);else console.log.apply(console, newarr);
	}
};

// make it safe to use console.log always
(function (a) {
	function b() {}for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop());) {
		a[d] = a[d] || b;
	}
})(function () {
	try {
		console.log();return window.console;
	} catch (a) {
		return window.console = {};
	}
}());

/* jshint ignore:start */

// place any jQuery/helper plugins in here, instead of separate, slower script files.

/* jshint ignore:end */

},{}],3:[function(require,module,exports){
'use strict';

// Default Ready Function
var Base = function init() {
  // Forces Correct Operating Context >= ES2015

  $(function () {
    $('.js-slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1
    });
  });
};
Base();

},{}]},{},[1,2,3])

//# sourceMappingURL=script.js.map
