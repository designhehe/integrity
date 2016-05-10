(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasisDrawer = function () {
	function BasisDrawer(container, params) {
		_classCallCheck(this, BasisDrawer);

		if (!container) {
			container = '._c-drawer';
		}
		if (!params) {
			params = {};
		}
		this.params = params;
		if (!this.params.drawer) {
			this.params.drawer = '._c-drawer__body';
		}
		if (!this.params.btn) {
			this.params.btn = '._c-drawer__btn';
		}

		this.container = document.querySelectorAll(container);
		this.setListener();
	}

	_createClass(BasisDrawer, [{
		key: 'setListener',
		value: function setListener() {
			var _this = this;

			var _loop = function _loop(i) {
				var container = _this.container[i];
				var drawer = container.querySelector(_this.params.drawer);
				var btn = container.querySelector(_this.params.btn);

				container.addEventListener('click', function (event) {
					_this.close(drawer);
				}, false);

				drawer.addEventListener('click', function (event) {
					event.stopPropagation();
				}, false);

				btn.addEventListener('click', function (event) {
					_this.toggle(drawer);
					event.stopPropagation();
				}, false);

				container.addEventListener('resize', function (event) {
					_this.close(drawer);
				}, false);

				var has_submenus = drawer.querySelectorAll('[aria-expanded]');

				var _loop2 = function _loop2(_i) {
					var element = has_submenus[_i].children;
					for (var j = 0; j < element.length; j++) {
						if (element[j].tagName.toUpperCase() == 'A') {
							element[j].addEventListener('click', function (event) {
								_this.toggle(has_submenus[_i]);
								event.stopPropagation();
							}, false);
						}
					}
				};

				for (var _i = 0; _i < has_submenus.length; _i++) {
					_loop2(_i);
				}
			};

			for (var i = 0; i < this.container.length; i++) {
				_loop(i);
			}
		}
	}, {
		key: 'toggle',
		value: function toggle(drawer) {
			event.preventDefault();
			var btn = container.querySelector(this.params.btn);
			if (drawer.getAttribute('aria-expanded') === 'false') {
				this.open(drawer);
				btn.classList.add('is-close');
			} else {
				this.close(drawer);
				btn.classList.remove('is-close');
				var _has_submenus = drawer.querySelectorAll('[aria-expanded]');
				for (var i = 0; i < _has_submenus.length; i++) {
					this.close(_has_submenus[i]);
				}
			}
		}
	}, {
		key: 'open',
		value: function open(drawer) {
			drawer.setAttribute('aria-expanded', 'true');
		}
	}, {
		key: 'close',
		value: function close(drawer) {
			drawer.setAttribute('aria-expanded', 'false');
		}
	}]);

	return BasisDrawer;
}();

exports.default = BasisDrawer;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasisFixedHeader = function () {
	function BasisFixedHeader(container, params) {
		_classCallCheck(this, BasisFixedHeader);

		if (!container) {
			container = '._l-container';
		}
		if (!params) {
			params = {};
		}
		this.params = params;
		if (!this.params.header) {
			this.params.header = '._l-header';
		}
		if (!this.params.class) {
			this.params.class = '_l-header--is-scrolled';
		}

		this.container = document.querySelector(container);
		this.header = document.querySelector(this.params.header);
		this.setHeaderWidth();
		this.setListener();
	}

	_createClass(BasisFixedHeader, [{
		key: 'setListener',
		value: function setListener() {
			var _this = this;

			this.container.addEventListener('scroll', function (event) {
				var scroll = container.scrollTop;
				if (scroll > 0) {
					_this.header.classList.add(_this.params.class);
				} else {
					_this.header.classList.remove(_this.params.class);
				}
			}, false);

			window.addEventListener('resize', function (event) {
				_this.setHeaderWidth();
			}, false);
		}
	}, {
		key: 'setHeaderWidth',
		value: function setHeaderWidth() {
			var scrollbarWidth = document.body.clientWidth - this.container.clientWidth;
			if (scrollbarWidth > 0) {
				this.header.style.width = 'calc(100% - ' + scrollbarWidth + 'px)';
			}
		}
	}]);

	return BasisFixedHeader;
}();

exports.default = BasisFixedHeader;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasisMenu = function () {
	function BasisMenu(container, params) {
		_classCallCheck(this, BasisMenu);

		if (!container) {
			container = '._c-menu';
		}
		if (!params) {
			params = {};
		}
		this.params = params;

		this.container = document.querySelectorAll(container);
		this.setListener();
	}

	_createClass(BasisMenu, [{
		key: 'setListener',
		value: function setListener() {
			var _this = this;

			for (var i = 0; i < this.container.length; i++) {
				var container = this.container[i];

				var has_submenus = container.querySelectorAll('[aria-expanded]');

				var _loop = function _loop(_i) {
					var item = has_submenus[_i];
					item.addEventListener('mouseover', function (event) {
						_this.open(item);
					}, false);

					item.addEventListener('mouseleave', function (event) {
						_this.close(item);
					}, false);
				};

				for (var _i = 0; _i < has_submenus.length; _i++) {
					_loop(_i);
				}
			}
		}
	}, {
		key: 'open',
		value: function open(item) {
			item.setAttribute('aria-expanded', 'true');
		}
	}, {
		key: 'close',
		value: function close(item) {
			item.setAttribute('aria-expanded', 'false');
		}
	}]);

	return BasisMenu;
}();

exports.default = BasisMenu;

},{}],4:[function(require,module,exports){
'use strict';

var _drawer = require('../../node_modules/sass-basis-drawer/src/js/drawer.js');

var _drawer2 = _interopRequireDefault(_drawer);

var _fixedHeader = require('../../node_modules/sass-basis-layout/src/js/fixed-header.js');

var _fixedHeader2 = _interopRequireDefault(_fixedHeader);

var _menu = require('../../node_modules/sass-basis-menu/src/js/menu.js');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

new _drawer2.default();
new _fixedHeader2.default();
new _menu2.default();

},{"../../node_modules/sass-basis-drawer/src/js/drawer.js":1,"../../node_modules/sass-basis-layout/src/js/fixed-header.js":2,"../../node_modules/sass-basis-menu/src/js/menu.js":3}]},{},[4]);