webpackJsonp([0],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_DefaultHeader__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_DefaultFooter__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_nav__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_routes__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_scss__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__admin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__coreui_react__ = __webpack_require__(695);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var AdminComponent = function AdminComponent(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["c" /* AppHeader */], { fixed: true }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'app-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8__coreui_react__["f" /* AppSidebar */],
                { fixed: true, display: 'lg' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["i" /* AppSidebarHeader */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["h" /* AppSidebarForm */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["k" /* AppSidebarNav */], _extends({ navConfig: __WEBPACK_IMPORTED_MODULE_5__shared_nav__["a" /* default */] }, props)),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["g" /* AppSidebarFooter */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["j" /* AppSidebarMinimizer */], null)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'main' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["a" /* AppBreadcrumb */], { appRoutes: __WEBPACK_IMPORTED_MODULE_6__shared_routes__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["i" /* Container */],
                    { fluid: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["f" /* Switch */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_6__shared_routes__["a" /* default */].map(function (route, idx) {
                            return route.component ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["e" /* Route */], { key: idx, path: route.path, exact: route.exact,
                                name: route.name, render: function render(props) {
                                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(route.component, props);
                                } }) : null;
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Redirect */], { from: '/admin', to: '/admin/dashboard' })
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__coreui_react__["b" /* AppFooter */], null)
    );
};

/* harmony default export */ __webpack_exports__["default"] = (AdminComponent);

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(699);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__classes__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__classes__["a"]; });




/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Aside__ = __webpack_require__(698);
/* unused harmony reexport AppAside */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsideToggler__ = __webpack_require__(700);
/* unused harmony reexport AppAsideToggler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Breadcrumb__ = __webpack_require__(701);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Breadcrumb__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__(702);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__Footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__(703);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__Header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeaderDropdown__ = __webpack_require__(704);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__HeaderDropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavbarBrand__ = __webpack_require__(705);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__NavbarBrand__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Sidebar__ = __webpack_require__(706);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__Sidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SidebarFooter__ = __webpack_require__(707);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__SidebarFooter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SidebarForm__ = __webpack_require__(708);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__SidebarForm__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SidebarHeader__ = __webpack_require__(709);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__SidebarHeader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SidebarMinimizer__ = __webpack_require__(710);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__SidebarMinimizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SidebarNav__ = __webpack_require__(711);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__SidebarNav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__SidebarToggler__ = __webpack_require__(717);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__SidebarToggler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Switch__ = __webpack_require__(718);
/* unused harmony reexport AppSwitch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Shared__ = __webpack_require__(694);
/* unused harmony reexport AppLayout */

































/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleClasses;
function toggleClasses(toggleClass, classList) {
  var level = classList.indexOf(toggleClass);
  var removeClassList = classList.slice(0, level);
  removeClassList.map(function (className) {
    return document.body.classList.remove(className);
  });
  document.body.classList.toggle(toggleClass);
}

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coreui_react__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_brand_logo_svg__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_brand_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_brand_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_brand_sygnet_svg__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_brand_sygnet_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_brand_sygnet_svg__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

var defaultProps = {};

var DefaultHeader = function (_Component) {
  _inherits(DefaultHeader, _Component);

  function DefaultHeader() {
    _classCallCheck(this, DefaultHeader);

    return _possibleConstructorReturn(this, (DefaultHeader.__proto__ || Object.getPrototypeOf(DefaultHeader)).apply(this, arguments));
  }

  _createClass(DefaultHeader, [{
    key: 'render',
    value: function render() {

      // eslint-disable-next-line
      var _props = this.props,
          children = _props.children,
          attributes = _objectWithoutProperties(_props, ['children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__coreui_react__["l" /* AppSidebarToggler */], { className: 'd-lg-none ', display: 'md', mobile: true }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__coreui_react__["e" /* AppNavbarBrand */], {
          full: { src: __WEBPACK_IMPORTED_MODULE_5__img_brand_logo_svg___default.a, width: 89, height: 25, alt: 'CoreUI Logo' },
          minimized: { src: __WEBPACK_IMPORTED_MODULE_6__img_brand_sygnet_svg___default.a, width: 30, height: 30, alt: 'CoreUI Logo' }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__coreui_react__["l" /* AppSidebarToggler */], { className: 'd-md-down-none', display: 'lg' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["r" /* Nav */],
          { className: 'd-md-down-none kad-navbar', navbar: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["s" /* NavItem */],
            { className: 'px-3' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
              { to: '/' },
              'Dashboard'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["s" /* NavItem */],
            { className: 'px-3' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
              { to: '#' },
              'Users'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["s" /* NavItem */],
            { className: 'px-3' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
              { to: '#' },
              'Settings'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_reactstrap__["r" /* Nav */],
          { className: 'ml-auto', navbar: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["s" /* NavItem */],
            { className: 'd-md-down-none' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
              { to: '#' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-bell' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Badge */],
                { pill: true, color: 'danger' },
                '5'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["s" /* NavItem */],
            { className: 'd-md-down-none' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
              { to: '#' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-list' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_reactstrap__["s" /* NavItem */],
            { className: 'd-md-down-none' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
              { to: '#' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-location-pin' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__coreui_react__["d" /* AppHeaderDropdown */],
            { direction: 'down' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["m" /* DropdownToggle */],
              { nav: true },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: './images/avatars/6.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_reactstrap__["l" /* DropdownMenu */],
              { right: true, style: { right: 'auto' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                { header: true, tag: 'div', className: 'text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Account'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-bell-o' }),
                ' Updates',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Badge */],
                  { color: 'info' },
                  '42'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope-o' }),
                ' Messages',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Badge */],
                  { color: 'success' },
                  '42'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-tasks' }),
                ' Tasks',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Badge */],
                  { color: 'danger' },
                  '42'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-comments' }),
                ' Comments',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Badge */],
                  { color: 'warning' },
                  '42'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                { header: true, tag: 'div', className: 'text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Settings'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user' }),
                ' Profile'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-wrench' }),
                ' Settings'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-usd' }),
                ' Payments',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Badge */],
                  { color: 'secondary' },
                  '42'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-file' }),
                ' Projects',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Badge */],
                  { color: 'primary' },
                  '42'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */], { divider: true }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-shield' }),
                ' Lock Account'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_reactstrap__["k" /* DropdownItem */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lock' }),
                ' Logout'
              )
            )
          )
        )
      );
    }
  }]);

  return DefaultHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

/* unused harmony default export */ var _unused_webpack_default_export = (DefaultHeader);

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared__ = __webpack_require__(694);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  display: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hidden: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  isOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  offCanvas: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'aside',
  display: '',
  fixed: false,
  hidden: false,
  isOpen: false,
  offCanvas: true
};

var AppAside = function (_Component) {
  _inherits(AppAside, _Component);

  function AppAside(props) {
    _classCallCheck(this, AppAside);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isFixed = _this.isFixed.bind(_this);
    _this.isHidden = _this.isHidden.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    return _this;
  }

  AppAside.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
    this.isHidden(this.props.hidden);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  };

  AppAside.prototype.isHidden = function isHidden(hidden) {
    if (hidden) {
      document.body.classList.add('aside-menu-hidden');
    }
  };

  AppAside.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('aside-menu-fixed');
    }
  };

  AppAside.prototype.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('aside-menu-off-canvas');
    }
  };

  AppAside.prototype.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = 'aside-menu-' + display + '-show';
    var _asideMenuCssClasses$ = __WEBPACK_IMPORTED_MODULE_3__Shared__["a" /* asideMenuCssClasses */][0],
        cssClass = _asideMenuCssClasses$[0];

    if (display && __WEBPACK_IMPORTED_MODULE_3__Shared__["a" /* asideMenuCssClasses */].indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  };

  AppAside.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.display;
    delete attributes.fixed;
    delete attributes.hidden;
    delete attributes.offCanvas;
    delete attributes.isOpen;

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'aside-menu');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      children
    );
  };

  return AppAside;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppAside.propTypes =  true ? propTypes : {};
AppAside.defaultProps = defaultProps;

/* unused harmony default export */ var _unused_webpack_default_export = (AppAside);

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sidebarCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asideMenuCssClasses; });
var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];

var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_index__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Shared_toggle_classes__ = __webpack_require__(696);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  display: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  mobile: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps = {
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

var AppAsideToggler = function (_Component) {
  _inherits(AppAsideToggler, _Component);

  function AppAsideToggler(props) {
    _classCallCheck(this, AppAsideToggler);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.asideToggle = _this.asideToggle.bind(_this);

    _this.state = {};
    return _this;
  }

  AppAsideToggler.prototype.asideToggle = function asideToggle(e) {
    e.preventDefault();

    if (this.props.mobile) {
      document.body.classList.toggle('aside-menu-show');
    } else {
      var display = this.props.display;
      var cssTemplate = 'aside-menu-' + display + '-show';
      var _asideMenuCssClasses$ = __WEBPACK_IMPORTED_MODULE_3__Shared_index__["a" /* asideMenuCssClasses */][0],
          cssClass = _asideMenuCssClasses$[0];

      if (display && __WEBPACK_IMPORTED_MODULE_3__Shared_index__["a" /* asideMenuCssClasses */].indexOf(cssTemplate) > -1) {
        cssClass = cssTemplate;
      }
      Object(__WEBPACK_IMPORTED_MODULE_4__Shared_toggle_classes__["a" /* default */])(cssClass, __WEBPACK_IMPORTED_MODULE_3__Shared_index__["a" /* asideMenuCssClasses */]);
    }
  };

  AppAsideToggler.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        type = _props.type,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'type', 'tag']);

    delete attributes.display;
    delete attributes.mobile;
    delete attributes.display;

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar-toggler');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({
        type: type,
        className: classes
      }, attributes, {
        onClick: function onClick(event) {
          return _this2.asideToggle(event);
        }
      }),
      children || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon' })
    );
  };

  return AppAsideToggler;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppAsideToggler.propTypes =  true ? propTypes : {};
AppAsideToggler.defaultProps = defaultProps;

/* unused harmony default export */ var _unused_webpack_default_export = (AppAsideToggler);

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var routes = void 0;

var getPaths = function getPaths(pathname) {
  var paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + '/' + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var findRouteName = function findRouteName(url) {
  var aroute = routes.find(function (route) {
    return route.path === url;
  });
  if (aroute && aroute.name) {
    return aroute.name;
  }
  return null;
};

var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var match = _ref.match;

  var routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* BreadcrumbItem */],
      { active: true },
      routeName
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["c" /* BreadcrumbItem */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
        { to: match.url || '' },
        routeName
      )
    );
  }
  return null;
};

BreadcrumbsItem.propTypes =  true ? {
  match: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    url: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
  })
} : {};

var Breadcrumbs = function Breadcrumbs(args) {
  var paths = getPaths(args.location.pathname);
  var items = paths.map(function (path, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["e" /* Route */], { key: i.toString(), path: path, component: BreadcrumbsItem });
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["b" /* Breadcrumb */],
    null,
    items
  );
};

var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  appRoutes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
  tag: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{ path: '/', exact: true, name: 'Home', component: null }]
};

var AppBreadcrumb = function (_Component) {
  _inherits(AppBreadcrumb, _Component);

  function AppBreadcrumb(props) {
    _classCallCheck(this, AppBreadcrumb);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { routes: props.appRoutes };
    routes = _this.state.routes;
    return _this;
  }

  AppBreadcrumb.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'tag']);

    delete attributes.children;
    delete attributes.appRoutes;

    var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      { className: classes },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["e" /* Route */], _extends({ path: '/:path', component: Breadcrumbs }, attributes))
    );
  };

  return AppBreadcrumb;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppBreadcrumb.propTypes =  true ? propTypes : {};
AppBreadcrumb.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppBreadcrumb);

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'footer',
  fixed: false
};

var AppFooter = function (_Component) {
  _inherits(AppFooter, _Component);

  function AppFooter(props) {
    _classCallCheck(this, AppFooter);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isFixed = _this.isFixed.bind(_this);
    return _this;
  }

  AppFooter.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };

  AppFooter.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('footer-fixed');
    }
  };

  AppFooter.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.fixed;

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'app-footer');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    );
  };

  return AppFooter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppFooter.propTypes =  true ? propTypes : {};
AppFooter.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppFooter);

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'header',
  fixed: false
};

var AppHeader = function (_Component) {
  _inherits(AppHeader, _Component);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppHeader.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };

  AppHeader.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('header-fixed');
    }
  };

  // breakpoint(breakpoint) {
  //   return breakpoint || '';
  // }

  AppHeader.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.fixed;

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'app-header', 'navbar');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    );
  };

  return AppHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppHeader.propTypes =  true ? propTypes : {};
AppHeader.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppHeader);

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  direction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

var defaultProps = {
  direction: 'down'
};

var AppHeaderDropdown = function (_Component) {
  _inherits(AppHeaderDropdown, _Component);

  function AppHeaderDropdown(props) {
    _classCallCheck(this, AppHeaderDropdown);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  AppHeaderDropdown.prototype.toggle = function toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  AppHeaderDropdown.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        attributes = _objectWithoutProperties(_props, ['children']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* Dropdown */],
      _extends({ nav: true, isOpen: this.state.dropdownOpen, toggle: this.toggle }, attributes),
      children
    );
  };

  return AppHeaderDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppHeaderDropdown.propTypes =  true ? propTypes : {};
AppHeaderDropdown.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppHeaderDropdown);

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  brand: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  minimized: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

var defaultProps = {
  tag: 'a'
};

var AppNavbarBrand = function (_Component) {
  _inherits(AppNavbarBrand, _Component);

  function AppNavbarBrand() {
    _classCallCheck(this, AppNavbarBrand);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppNavbarBrand.prototype.imgSrc = function imgSrc(brand) {
    return brand.src ? brand.src : '';
  };

  AppNavbarBrand.prototype.imgWidth = function imgWidth(brand) {
    return brand.width ? brand.width : 'auto';
  };

  AppNavbarBrand.prototype.imgHeight = function imgHeight(brand) {
    return brand.height ? brand.height : 'auto';
  };

  AppNavbarBrand.prototype.imgAlt = function imgAlt(brand) {
    return brand.alt ? brand.alt : '';
  };

  AppNavbarBrand.prototype.navbarBrandImg = function navbarBrandImg(props, classBrand, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
      src: this.imgSrc(props),
      width: this.imgWidth(props),
      height: this.imgHeight(props),
      alt: this.imgAlt(props),
      className: classBrand,
      key: key.toString()
    });
  };

  AppNavbarBrand.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar-brand');

    var img = [];
    if (this.props.brand) {
      var props = this.props.brand;
      var classBrand = 'navbar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.full) {
      var _props2 = this.props.full;
      var _classBrand = 'navbar-brand-full';
      img.push(this.navbarBrandImg(_props2, _classBrand, img.length + 1));
    }
    if (this.props.minimized) {
      var _props3 = this.props.minimized;
      var _classBrand2 = 'navbar-brand-minimized';
      img.push(this.navbarBrandImg(_props3, _classBrand2, img.length + 1));
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      children || img
    );
  };

  return AppNavbarBrand;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppNavbarBrand.propTypes =  true ? propTypes : {};
AppNavbarBrand.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppNavbarBrand);

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared__ = __webpack_require__(694);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  compact: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  display: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  fixed: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  minimized: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  isOpen: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  offCanvas: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  staticContext: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
  tag: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};

var AppSidebar = function (_Component) {
  _inherits(AppSidebar, _Component);

  function AppSidebar(props) {
    _classCallCheck(this, AppSidebar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isCompact = _this.isCompact.bind(_this);
    _this.isFixed = _this.isFixed.bind(_this);
    _this.isMinimized = _this.isMinimized.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    return _this;
  }

  AppSidebar.prototype.componentDidMount = function componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isMinimized(this.props.minimized);
    this.isOffCanvas(this.props.offCanvas);
  };

  AppSidebar.prototype.isCompact = function isCompact(compact) {
    if (compact) {
      document.body.classList.add('sidebar-compact');
    }
  };

  AppSidebar.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('sidebar-fixed');
    }
  };

  AppSidebar.prototype.isMinimized = function isMinimized(minimized) {
    if (minimized) {
      document.body.classList.add('sidebar-minimized');
    }
  };

  AppSidebar.prototype.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };

  AppSidebar.prototype.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = 'sidebar-' + display + '-show';
    var _sidebarCssClasses$ = __WEBPACK_IMPORTED_MODULE_3__Shared__["b" /* sidebarCssClasses */][0],
        cssClass = _sidebarCssClasses$[0];

    if (display && __WEBPACK_IMPORTED_MODULE_3__Shared__["b" /* sidebarCssClasses */].indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  };

  AppSidebar.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.compact;
    delete attributes.display;
    delete attributes.fixed;
    delete attributes.minimized;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    delete attributes.staticContext;

    var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'sidebar');

    // sidebar-nav root
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    );
  };

  return AppSidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSidebar.propTypes =  true ? propTypes : {};
AppSidebar.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppSidebar);

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'div'
};

var AppSidebarFooter = function (_Component) {
  _inherits(AppSidebarFooter, _Component);

  function AppSidebarFooter() {
    _classCallCheck(this, AppSidebarFooter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppSidebarFooter.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'sidebar-footer');
    var footer = children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    ) : null;

    return footer;
  };

  return AppSidebarFooter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSidebarFooter.propTypes =  true ? propTypes : {};
AppSidebarFooter.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppSidebarFooter);

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'div'
};

var AppSidebarForm = function (_Component) {
  _inherits(AppSidebarForm, _Component);

  function AppSidebarForm() {
    _classCallCheck(this, AppSidebarForm);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppSidebarForm.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'sidebar-form');
    var form = children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    ) : null;

    return form;
  };

  return AppSidebarForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSidebarForm.propTypes =  true ? propTypes : {};
AppSidebarForm.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppSidebarForm);

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'div'
};

var AppSidebarHeader = function (_Component) {
  _inherits(AppSidebarHeader, _Component);

  function AppSidebarHeader() {
    _classCallCheck(this, AppSidebarHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppSidebarHeader.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'sidebar-header');
    var header = children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    ) : null;

    return header;
  };

  return AppSidebarHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSidebarHeader.propTypes =  true ? propTypes : {};
AppSidebarHeader.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppSidebarHeader);

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps = {
  tag: 'button',
  type: 'button'
};

var AppSidebarMinimizer = function (_Component) {
  _inherits(AppSidebarMinimizer, _Component);

  function AppSidebarMinimizer(props) {
    _classCallCheck(this, AppSidebarMinimizer);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  AppSidebarMinimizer.prototype.sidebarMinimize = function sidebarMinimize() {
    document.body.classList.toggle('sidebar-minimized');
    var sidebar = document.querySelector('.sidebar-nav');
    if (sidebar) {
      var toggleOn = sidebar.classList.toggle('ps');
      sidebar.classList.toggle('scrollbar-container', toggleOn);
      sidebar.classList.toggle('ps--active-y', toggleOn);
    }
  };

  AppSidebarMinimizer.prototype.brandMinimize = function brandMinimize() {
    document.body.classList.toggle('brand-minimized');
  };

  AppSidebarMinimizer.prototype.handleClick = function handleClick(e) {
    this.sidebarMinimize(e);
    this.brandMinimize(e);
  };

  AppSidebarMinimizer.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        type = _props.type,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag', 'type']);

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'sidebar-minimizer', 'mt-auto');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ className: classes, type: type }, attributes, { onClick: function onClick(event) {
          return _this2.handleClick(event);
        } }),
      children
    );
  };

  return AppSidebarMinimizer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSidebarMinimizer.propTypes =  true ? propTypes : {};
AppSidebarMinimizer.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppSidebarMinimizer);

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_perfect_scrollbar_dist_css_styles_css__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_perfect_scrollbar_dist_css_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_perfect_scrollbar_dist_css_styles_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  navConfig: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
  navFunc: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string]),
  isOpen: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  staticContext: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
  tag: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string])
};

var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: { variant: 'info', text: 'NEW' }
    }]
  },
  isOpen: false
};

var AppSidebarNav = function (_Component) {
  _inherits(AppSidebarNav, _Component);

  function AppSidebarNav(props) {
    _classCallCheck(this, AppSidebarNav);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.activeRoute = _this.activeRoute.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    return _this;
  }

  AppSidebarNav.prototype.handleClick = function handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  };

  AppSidebarNav.prototype.activeRoute = function activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };

  AppSidebarNav.prototype.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  };

  // nav list


  AppSidebarNav.prototype.navList = function navList(items) {
    var _this2 = this;

    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  };

  // nav type


  AppSidebarNav.prototype.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  };

  // nav list section title


  AppSidebarNav.prototype.navTitle = function navTitle(title, key) {
    var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('nav-title', title.class);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { key: key, className: classes },
      this.navWrapper(title),
      ' '
    );
  };

  // simple wrapper for nav-title item


  AppSidebarNav.prototype.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  };

  // nav list divider


  AppSidebarNav.prototype.navDivider = function navDivider(divider, key) {
    var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('divider', divider.class);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { key: key, className: classes });
  };

  // nav label with nav link


  AppSidebarNav.prototype.navLabel = function navLabel(item, key) {
    var classes = {
      item: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('hidden-cn', item.class),
      link: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('nav-label', item.class ? item.class : ''),
      icon: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? 'text-' + item.label.variant : '', item.label.class ? item.label.class : '')
    };
    return this.navLink(item, key, classes);
  };

  // nav dropdown


  AppSidebarNav.prototype.navDropdown = function navDropdown(item, key) {
    var classIcon = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('nav-icon', item.icon);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { key: key, className: this.activeRoute(item.url, this.props) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'nav-link nav-dropdown-toggle', href: '#', onClick: this.handleClick },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: classIcon }),
        item.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'nav-dropdown-items' },
        this.navList(item.children)
      )
    );
  };

  // nav item with nav link


  AppSidebarNav.prototype.navItem = function navItem(item, key) {
    var classes = {
      item: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(item.class),
      link: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('nav-link', item.variant ? 'nav-link-' + item.variant : ''),
      icon: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  };

  // nav link


  AppSidebarNav.prototype.navLink = function navLink(item, key, classes) {
    var url = item.url ? item.url : '';
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["s" /* NavItem */],
      { key: key, className: classes.item },
      this.isExternal(url) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["t" /* NavLink */],
        { href: url, className: classes.link, active: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: classes.icon }),
        item.name,
        this.navBadge(item.badge)
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
        { to: url, className: classes.link, activeClassName: 'active', onClick: this.hideMobile },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: classes.icon }),
        item.name,
        this.navBadge(item.badge)
      )
    );
  };

  // badge addon to NavItem


  AppSidebarNav.prototype.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(badge.class);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["a" /* Badge */],
        { className: classes, color: badge.variant },
        badge.text
      );
    }
    return null;
  };

  AppSidebarNav.prototype.isExternal = function isExternal(url) {
    var link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };

  AppSidebarNav.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        navConfig = _props.navConfig,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'navConfig']);

    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;

    var navClasses = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'sidebar-nav');

    // sidebar-nav root
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_perfect_scrollbar___default.a,
      _extends({ className: navClasses }, attributes, { option: { suppressScrollX: true } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["r" /* Nav */],
        null,
        children || this.navList(navConfig.items)
      )
    );
  };

  return AppSidebarNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSidebarNav.propTypes =  true ? propTypes : {};
AppSidebarNav.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppSidebarNav);

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollbar = __webpack_require__(713);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scrollbar2.default;
module.exports = exports['default'];

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _perfectScrollbar = __webpack_require__(714);

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlerNameByEvent = {
    'ps-scroll-y': 'onScrollY',
    'ps-scroll-x': 'onScrollX',
    'ps-scroll-up': 'onScrollUp',
    'ps-scroll-down': 'onScrollDown',
    'ps-scroll-left': 'onScrollLeft',
    'ps-scroll-right': 'onScrollRight',
    'ps-y-reach-start': 'onYReachStart',
    'ps-y-reach-end': 'onYReachEnd',
    'ps-x-reach-start': 'onXReachStart',
    'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = function (_Component) {
    _inherits(ScrollBar, _Component);

    function ScrollBar(props) {
        _classCallCheck(this, ScrollBar);

        var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));

        _this.handleRef = _this.handleRef.bind(_this);
        _this._handlerByEvent = new Map();
        return _this;
    }

    _createClass(ScrollBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this._ps = new _perfectScrollbar2.default(this._container, this.props.option);
            // hook up events
            Object.keys(handlerNameByEvent).forEach(function (key) {
                var callback = _this2.props[handlerNameByEvent[key]];
                if (callback) {
                    var handler = function handler() {
                        return callback(_this2._container);
                    };
                    _this2._handlerByEvent.set(key, handler);
                    _this2._container.addEventListener(key, handler, false);
                }
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._ps.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this3 = this;

            // unhook up evens
            Object.keys(this._handlerByEvent).forEach(function (value, key) {
                _this3._container.removeEventListener(key, value, false);
            });
            this._handlerByEvent.clear();
            this._ps.destroy();
            this._ps = null;
        }
    }, {
        key: 'updateScroll',
        value: function updateScroll() {
            this._ps.update();
        }
    }, {
        key: 'handleRef',
        value: function handleRef(ref) {
            this._container = ref;
            this.props.containerRef(ref);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className;


            return _react2.default.createElement(
                'div',
                { className: 'scrollbar-container ' + className, ref: this.handleRef },
                children
            );
        }
    }]);

    return ScrollBar;
}(_react.Component);

exports.default = ScrollBar;


ScrollBar.defaultProps = {
    className: '',
    option: undefined,
    containerRef: function containerRef() {},
    onScrollY: undefined,
    onScrollX: undefined,
    onScrollUp: undefined,
    onScrollDown: undefined,
    onScrollLeft: undefined,
    onScrollRight: undefined,
    onYReachStart: undefined,
    onYReachEnd: undefined,
    onXReachStart: undefined,
    onXReachEnd: undefined
};

ScrollBar.propTypes = {
    children: _propTypes.PropTypes.node.isRequired,
    className: _propTypes.PropTypes.string,
    option: _propTypes.PropTypes.object,
    containerRef: _propTypes.PropTypes.func,
    onScrollY: _propTypes.PropTypes.func,
    onScrollX: _propTypes.PropTypes.func,
    onScrollUp: _propTypes.PropTypes.func,
    onScrollDown: _propTypes.PropTypes.func,
    onScrollLeft: _propTypes.PropTypes.func,
    onScrollRight: _propTypes.PropTypes.func,
    onYReachStart: _propTypes.PropTypes.func,
    onYReachEnd: _propTypes.PropTypes.func,
    onXReachStart: _propTypes.PropTypes.func,
    onXReachEnd: _propTypes.PropTypes.func
};
module.exports = exports['default'];

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * perfect-scrollbar v1.3.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      element.scrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + element.scrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: element.scrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var isTop = element.scrollTop === 0;
    var isBottom =
      element.scrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.offsetWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: false,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = element.scrollTop; // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = this.element.scrollTop;
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(716);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n.scrollbar-container {\n  position: relative;\n  height: 100%; }", ""]);

// exports


/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_index__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Shared_toggle_classes__ = __webpack_require__(696);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  display: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  mobile: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps = {
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

var AppSidebarToggler = function (_Component) {
  _inherits(AppSidebarToggler, _Component);

  function AppSidebarToggler(props) {
    _classCallCheck(this, AppSidebarToggler);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.sidebarToggle = _this.sidebarToggle.bind(_this);
    return _this;
  }

  AppSidebarToggler.prototype.sidebarToggle = function sidebarToggle(e) {
    e.preventDefault();

    if (this.props.mobile) {
      document.body.classList.toggle('sidebar-show');
    } else {
      var display = this.props.display;
      var cssTemplate = 'sidebar-' + display + '-show';
      var _sidebarCssClasses$ = __WEBPACK_IMPORTED_MODULE_3__Shared_index__["b" /* sidebarCssClasses */][0],
          cssClass = _sidebarCssClasses$[0];

      if (display && __WEBPACK_IMPORTED_MODULE_3__Shared_index__["b" /* sidebarCssClasses */].indexOf(cssTemplate) > -1) {
        cssClass = cssTemplate;
      }
      Object(__WEBPACK_IMPORTED_MODULE_4__Shared_toggle_classes__["a" /* default */])(cssClass, __WEBPACK_IMPORTED_MODULE_3__Shared_index__["b" /* sidebarCssClasses */]);
    }
  };

  AppSidebarToggler.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.mobile;
    delete attributes.display;

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'navbar-toggler');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tag,
      _extends({ type: 'button', className: classes }, attributes, { onClick: function onClick(event) {
          return _this2.sidebarToggle(event);
        } }),
      children || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon' })
    );
  };

  return AppSidebarToggler;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSidebarToggler.propTypes =  true ? propTypes : {};
AppSidebarToggler.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (AppSidebarToggler);

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  outline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['', 'alt'])]),
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['', 'lg', 'sm']),
  checked: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  defaultChecked: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  defaultValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  form: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  required: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['checkbox', 'radio']),
  variant: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['', '3d', 'pill']),
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  dataOn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  dataOff: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: false,
  disabled: false,
  required: false,
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off'
};

var AppSwitch = function (_Component) {
  _inherits(AppSwitch, _Component);

  function AppSwitch(props) {
    _classCallCheck(this, AppSwitch);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.state = {
      checked: _this.props.defaultChecked || _this.props.checked,
      selected: []
    };
    return _this;
  }

  AppSwitch.prototype.onChange = function onChange(event) {
    var target = event.target;
    this.setState({
      checked: target.checked
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  AppSwitch.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        disabled = _props.disabled,
        color = _props.color,
        name = _props.name,
        label = _props.label,
        outline = _props.outline,
        size = _props.size,
        required = _props.required,
        type = _props.type,
        value = _props.value,
        dataOn = _props.dataOn,
        dataOff = _props.dataOff,
        variant = _props.variant,
        attributes = _objectWithoutProperties(_props, ['className', 'disabled', 'color', 'name', 'label', 'outline', 'size', 'required', 'type', 'value', 'dataOn', 'dataOff', 'variant']);

    delete attributes.checked;
    delete attributes.defaultChecked;
    delete attributes.onChange;

    var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'switch', label ? 'switch-label' : false, size ? 'switch-' + size : false, variant ? 'switch-' + variant : false, 'switch' + (outline ? '-outline' : '') + '-' + color + (outline === 'alt' ? '-alt' : ''), 'form-check-label');

    var inputClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('switch-input', 'form-check-input');

    var sliderClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('switch-slider');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { className: classes },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ type: type, className: inputClasses, onChange: this.onChange, checked: this.state.checked, name: name, required: required, disabled: disabled, value: value }, attributes)),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: sliderClasses, 'data-checked': dataOn, 'data-unchecked': dataOff })
    );
  };

  return AppSwitch;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppSwitch.propTypes =  true ? propTypes : {};
AppSwitch.defaultProps = defaultProps;

/* unused harmony default export */ var _unused_webpack_default_export = (AppSwitch);

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "/images/logo.svg?abe72700f5a97f2c4e293eb3d30a4cdc";

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "/images/sygnet.svg?3f585519846524a828a4ae698d166f1a";

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};

var defaultProps = {};

var DefaultFooter = function (_Component) {
  _inherits(DefaultFooter, _Component);

  function DefaultFooter() {
    _classCallCheck(this, DefaultFooter);

    return _possibleConstructorReturn(this, (DefaultFooter.__proto__ || Object.getPrototypeOf(DefaultFooter)).apply(this, arguments));
  }

  _createClass(DefaultFooter, [{
    key: 'render',
    value: function render() {

      // eslint-disable-next-line
      var _props = this.props,
          children = _props.children,
          attributes = _objectWithoutProperties(_props, ['children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://coreui.io' },
            'CoreUI'
          ),
          ' \xA9 2018 creativeLabs.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'ml-auto' },
          'Powered by ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://coreui.io/react' },
            'CoreUI for React'
          )
        )
      );
    }
  }]);

  return DefaultFooter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

/* unused harmony default export */ var _unused_webpack_default_export = (DefaultFooter);

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  items: [{
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'icon-speedometer'
  }, {
    title: true,
    name: 'Menu',
    wrapper: { // optional wrapper object
      element: '', // required valid HTML5 element tag
      attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    },
    class: '' // optional class names space delimited list for title item ex: "text-center"
  }, {
    name: 'User Management',
    url: '/admin/user',
    icon: 'icon-drop'
  }, {
    name: 'Organization',
    url: '/admin/organization',
    icon: 'icon-pencil'
  }, {
    name: 'Permissions',
    url: '/admin/permission',
    icon: 'icon-cursor'
  }]
});

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_DashboardContainer__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permission_PermissionContainer__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organization_OrganizationContainer__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AdminComponent_js__ = __webpack_require__(693);






var routes = [{
    path: '/admin',
    exact: true,
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_5__AdminComponent_js__["default"]
}, {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: __WEBPACK_IMPORTED_MODULE_2__dashboard_DashboardContainer__["a" /* default */]
}, {
    path: '/admin/permission',
    name: 'Permission',
    component: __WEBPACK_IMPORTED_MODULE_3__permission_PermissionContainer__["a" /* default */]
}, {
    path: '/admin/organization',
    name: 'Organization',
    component: __WEBPACK_IMPORTED_MODULE_4__organization_OrganizationContainer__["a" /* default */]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DashboardContainer = function (_React$Component) {
    _inherits(DashboardContainer, _React$Component);

    function DashboardContainer() {
        _classCallCheck(this, DashboardContainer);

        return _possibleConstructorReturn(this, (DashboardContainer.__proto__ || Object.getPrototypeOf(DashboardContainer)).apply(this, arguments));
    }

    _createClass(DashboardContainer, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                'DashboardComponent'
            );
        }
    }]);

    return DashboardContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DashboardContainer);

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PermissionContainer = function (_React$Component) {
    _inherits(PermissionContainer, _React$Component);

    function PermissionContainer() {
        _classCallCheck(this, PermissionContainer);

        return _possibleConstructorReturn(this, (PermissionContainer.__proto__ || Object.getPrototypeOf(PermissionContainer)).apply(this, arguments));
    }

    _createClass(PermissionContainer, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "permission-container" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col col-lg-6" },
                            "1"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col col-lg-6" },
                            "2"
                        )
                    )
                )
            );
        }
    }]);

    return PermissionContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PermissionContainer);

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var OrganizationContainer = function (_React$Component) {
    _inherits(OrganizationContainer, _React$Component);

    function OrganizationContainer() {
        _classCallCheck(this, OrganizationContainer);

        return _possibleConstructorReturn(this, (OrganizationContainer.__proto__ || Object.getPrototypeOf(OrganizationContainer)).apply(this, arguments));
    }

    _createClass(OrganizationContainer, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                'OrganizationContainer'
            );
        }
    }]);

    return OrganizationContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (OrganizationContainer);

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(728);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./admin.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./admin.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".kad-navbar a {\n  color: white; }\n\n.app-header {\n  background: #0AC25A; }\n\n.navbar-nav a {\n  color: white; }\n\n.navbar-toggler-icon {\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  background: unset !important; }\n\n.navbar-toggler-icon::before {\n  content: \"\\F0C9\";\n  color: white;\n  position: relative;\n  top: 5px; }\n\n.sidebar {\n  background: #efefef !important; }\n  .sidebar a.nav-link {\n    color: black; }\n    .sidebar a.nav-link:hover {\n      background: #d4d2d2 !important;\n      color: #0AC25A !important; }\n      .sidebar a.nav-link:hover i {\n        color: #0AC25A !important; }\n    .sidebar a.nav-link.active {\n      background: #e4e4e4;\n      color: #0AC25A; }\n      .sidebar a.nav-link.active i {\n        color: #0AC25A !important; }\n\n.nav-title {\n  background: #d4d2d2 !important;\n  color: #717273 !important; }\n\n.main {\n  background: white !important; }\n\n.permission-container {\n  border: 1px solid red;\n  height: 100px; }\n", ""]);

// exports


/***/ })

});