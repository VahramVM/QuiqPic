function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");
    /* harmony import */


    var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/layouts/auth-layout/auth-layout.component */
    "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register-page/register-page.component */
    "./src/app/register-page/register-page.component.ts");
    /* harmony import */


    var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/layouts/site-layout/site-layout.component */
    "./src/app/shared/layouts/site-layout/site-layout.component.ts");
    /* harmony import */


    var _shared_classes_authguard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/classes/authguard */
    "./src/app/shared/classes/authguard.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shoping-page/shoping-page.component */
    "./src/app/shoping-page/shoping-page.component.ts");

    var routes = [{
      path: '',
      component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
      children: [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]
      }, {
        path: 'register',
        component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"]
      }]
    }, {
      path: '',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
      canActivate: [_shared_classes_authguard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      children: [{
        path: 'main',
        component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"]
      }, {
        path: 'order',
        component: _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_8__["ShopingPageComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/layouts/servises/services */
    "./src/app/shared/layouts/servises/services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var correntToken = localStorage.getItem('auth-token');

          if (correntToken !== null) {
            this.auth.setToken(correntToken);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], function () {
        return [{
          type: _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");
    /* harmony import */


    var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/layouts/auth-layout/auth-layout.component */
    "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/layouts/site-layout/site-layout.component */
    "./src/app/shared/layouts/site-layout/site-layout.component.ts");
    /* harmony import */


    var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register-page/register-page.component */
    "./src/app/register-page/register-page.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./editor-pic/editor-pic.module */
    "./src/app/editor-pic/editor-pic.module.ts");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./side-design/side-design.component */
    "./src/app/side-design/side-design.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/pipes.pipe */
    "./src/app/shared/pipes.pipe.ts");
    /* harmony import */


    var _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/background.directive */
    "./src/app/shared/background.directive.ts");
    /* harmony import */


    var _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/layouts/site-layout/size-format/size-format.component */
    "./src/app/shared/layouts/site-layout/size-format/size-format.component.ts");
    /* harmony import */


    var _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shoping-page/shoping-page.component */
    "./src/app/shoping-page/shoping-page.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./editor-pic/editor-pic.component */
    "./src/app/editor-pic/editor-pic.component.ts"); // import {MatTooltipModule} from '@angular/material/tooltip';
    // import { CarouselModule } from 'ngx-owl-carousel-o';
    // import { EditorPicComponent } from './editor-pic/editor-pic.component';
    // import {MatSelectModule} from '@angular/material/select';
    // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
    // import { OverlayModule } from '@angular/cdk/overlay';
    // import { SwiperModule } from 'swiper/angular';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"], _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"], _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"], _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"], _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"], _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__["SideDesignComponent"], _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__["PipesPipe"], _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__["BackgroundDirective"], _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__["SizeFormatComponent"], _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__["ShopingPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"], _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"], _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"], _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"], _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"], _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__["SideDesignComponent"], _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__["PipesPipe"], _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__["BackgroundDirective"], _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__["SizeFormatComponent"], _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__["ShopingPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"], _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]],
          providers: [_editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerDirective"], _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_22__["EditorPicComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselSlideDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["OwlRouterLinkDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["OwlRouterLinkWithHrefDirective"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"], _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"], _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"], _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"], _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__["SideDesignComponent"], _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__["BackgroundDirective"], _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__["SizeFormatComponent"], _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__["ShopingPageComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["KeyValuePipe"], _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__["PipesPipe"]]);
    /***/

  },

  /***/
  "./src/app/editor-pic/editor-pic.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/editor-pic/editor-pic.component.ts ***!
    \****************************************************/

  /*! exports provided: EditorPicComponent */

  /***/
  function srcAppEditorPicEditorPicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorPicComponent", function () {
      return EditorPicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! fabric */
    "./node_modules/fabric/dist/fabric.js");
    /* harmony import */


    var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/layouts/site-layout/site-layout.component */
    "./src/app/shared/layouts/site-layout/site-layout.component.ts");
    /* harmony import */


    var _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/layouts/servises/data.service */
    "./src/app/shared/layouts/servises/data.service.ts");
    /* harmony import */


    var _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/layouts/servises/order-datas.service */
    "./src/app/shared/layouts/servises/order-datas.service.ts");
    /* harmony import */


    var _shared_layouts_servises_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/layouts/servises/products.service */
    "./src/app/shared/layouts/servises/products.service.ts");

    var _c0 = ["htmlCanvas"]; // @HostListener('window:resize', ['$event'])

    var EditorPicComponent = /*#__PURE__*/function () {
      function EditorPicComponent(siteLayout, element, dataService, orderDatas, productsService) {
        var _this = this;

        _classCallCheck(this, EditorPicComponent);

        this.siteLayout = siteLayout;
        this.element = element;
        this.dataService = dataService;
        this.orderDatas = orderDatas;
        this.productsService = productsService; // private canvas1: fabric.Canvas;

        this.props = {
          canvasFill: null,
          drawFill: 'green',
          canvasImage: 'assets/img/Trafaret3.1.png',
          id: null,
          opacity: null,
          fill: null,
          fontSize: null,
          charSpacing: null,
          fontWeight: null,
          fontStyle: null,
          textAlign: null,
          fontFamily: null,
          distance: null,
          TextDecoration: '',
          diametr: 300,
          curvedTextLeft: null,
          curvedTextTop: null,
          textCurved: 1,
          inputDisabled: null,
          textStraight: null,
          brandName: ''
        }; // public canvasHtml;
        // public canvasHtml1;

        this.textString = '';
        this.url = '';
        this.objectType = false;
        this.textEditor = false;
        this.figureEditor = false;
        this.disableBtn = false;
        this.canvasCount = 0;
        this.canvasCountPNJ = 0; //delate button on pictures

        this.left = 10;
        this.top = -11;
        this.widthHeight = 10;
        this.value = null;
        this.id = '';
        this.filterName = '';
        this.imageCoordy = null;
        this.imageCoordxx = null;
        this.imageCoordyy = null;
        this.reqImage = null;
        this.reqImage1 = null;
        this.linkk = false;
        this.drawObject = null; // public objWidthLimit = 170;
        // public objHeightLimit = 170;
        // public test = null;

        this.path = null; // public svg_text: string = null;

        this.intCountText = null; // public imageFilter = null;

        this.textPadding = 15;
        this.objectTypeImage = null; // public checked = false;

        this.shadow = {
          color: 'rgba(0, 0, 0, 1)',
          blur: 70,
          offsetX: 10,
          offsetY: 10,
          opacity: 0.7,
          fillShadow: true,
          strokeShadow: true
        };
        this.shadowPNJ = {
          color: 'rgba(0, 0, 0, 1)',
          blur: 70,
          offsetX: 10,
          offsetY: 10,
          opacity: 0.7,
          affectStroke: false
        };
        this.shadowFigur = {
          color: 'rgba(0, 0, 0, 1)',
          blur: 10,
          offsetX: 5,
          offsetY: 5,
          opacity: 0.7,
          affectStroke: false
        };
        this.shadowTEXT = {
          color: 'rgba(0, 0, 0, 1)',
          blur: 4,
          offsetX: 5,
          offsetY: 5,
          opacity: 0.7,
          affectStroke: false
        };
        this.imageEditor = false;
        this.window = window.innerWidth;
        this.productsService.fetch().subscribe(function (res) {
          _this.props.canvasImage = res[1].type;
        }); // this.props.canvasImage = this.productsService.;

        this.scaleKey = this.dataService.scaleKey;
        this.a = dataService.formatTopKey;
        this.dataService.formatTop.subscribe(function (res) {
          return _this.a = res;
        });
        this.b = dataService.sizePrintKey;
        this.dataService.formatA4Horizontal.subscribe(function (res) {
          return _this.b = res;
        });
        this.c = dataService.formatWithHeight;
        this.dataService.formatA4Vertical.subscribe(function (res) {
          return _this.c = res;
        });
        this.d = dataService.scaleKey;
        this.dataService.scaleKeyy.subscribe(function (res) {
          return _this.d = res;
        }); // this.dataService.canvasCount1.subscribe(
        //   res => this.canvasCount = res      
        // );
      }

      _createClass(EditorPicComponent, [{
        key: "onResize",
        value: function onResize(event) {
          // --!
          this.canvas.setWidth(this.siteLayout.canvasHtmlWidth);
          this.canvas.setHeight(this.siteLayout.canvasHtmlHeight); // this.canvas.backgroundImage = null;

          this.setCanvasImage();
          this.canvas.renderAll();
          console.log('resizzeeee'); // this.canvas1.setWidth(this.siteLayout.canvasHtmlWidth);
          // this.canvas1.setHeight(this.siteLayout.canvasHtmlHeight);
          // this.setCanvasImage1();
          // this.canvas1.renderAll();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          // setup front side canvas
          // this.props.canvasImage = this.siteLayout.firstBackCanvasImage;
          // this.canvas1 = new fabric.Canvas(this.htmlCanvas.nativeElement);
          // this.canvas1.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
          // this.canvas1.setBackgroundImage(this.htmlCanvas.nativeElement, this.canvas1.renderAll.bind(this.canvas1));
          this.canvas = new fabric.Canvas(this.htmlCanvas.nativeElement, {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue',
            preserveObjectStacking: true,
            selectionDashArray: [7, 6]
          });
          this.canvas.setWidth(this.siteLayout.canvasHtmlWidth);
          this.canvas.setHeight(this.siteLayout.canvasHtmlHeight);
          this.canvas.renderAll(); // this.canvas1 = new fabric.Canvas(this.htmlCanvas1.nativeElement, {
          //   hoverCursor: 'pointer',
          //   selection: true,
          //   selectionBorderColor: 'blue',
          //   preserveObjectStacking: true,
          // });

          var numLeft = this.left;
          var numTop = this.top;
          this.canvas.on({
            'after:render': function afterRender(e) {
              _this2.canvas.calcOffset();
            },
            'object:moving': function objectMoving(e) {
              var obj = e.target;
              obj.setCoords();
              obj.saveState();
              var matrix = e.target.calcTransformMatrix();
              var imageCoordx = matrix[4];
              var imageCoordy = matrix[5];
              console.log(imageCoordy);
              _this2.siteLayout.imageCoordy = Math.floor(imageCoordy);
              _this2.siteLayout.imageCoordx = Math.floor(imageCoordx);
              var moveSizeLimit = _this2.canvas.width / _this2.b;
              var cornerSize = _this2.canvas.width / 40;
              var sumLeft = obj.getBoundingRect().left;
              var sumTop = obj.getBoundingRect().top;
              var sumWidth = obj.getBoundingRect().width;
              var sumHeight = obj.getBoundingRect().height;
              var Delta = _this2.canvas.height - 2 * (moveSizeLimit + cornerSize) - (_this2.canvas.width - 2 * (moveSizeLimit + cornerSize)) * _this2.dataService.formatWithHeight;
              var formatWidth = _this2.canvas.width - 2 * (moveSizeLimit + cornerSize);
              var formatHeight = formatWidth * _this2.dataService.formatWithHeight;
              var angle = Math.abs(_this2.canvas.getActiveObject().angle * Math.PI / 180);
              var cos = Math.abs(Math.cos(angle)); // if (obj.height > obj.canvas.height || obj.width > obj.canvas.width) {
              //   obj.originY;
              //   obj.originX;
              // }
              // top-left  corner

              console.log('fromEditor', _this2.dataService.sizePrintKey, _this2.b, _this2.d);

              if (sumTop < cornerSize + moveSizeLimit - _this2.canvas.width * _this2.a || sumLeft < cornerSize + moveSizeLimit) {
                obj.top = Math.max(obj.top, obj.top - sumTop + cornerSize + moveSizeLimit - _this2.canvas.width * _this2.a);
                obj.left = Math.max(obj.left, obj.left - sumLeft + (cornerSize + moveSizeLimit));
              } // bot-right corner


              if (sumTop + sumHeight + Delta + cornerSize + moveSizeLimit + _this2.canvas.width * _this2.a > obj.canvas.height || sumLeft + sumWidth > obj.canvas.width - cornerSize - moveSizeLimit) {
                obj.top = Math.min(obj.top, obj.canvas.height - sumHeight + obj.top - sumTop - cornerSize - moveSizeLimit - Delta - _this2.canvas.width * _this2.a);
                obj.left = Math.min(obj.left, obj.canvas.width - sumWidth + obj.left - sumLeft - cornerSize - moveSizeLimit);
              }

              $(".deleteBtn").remove();
              $(".distance").remove();
              $(".distanceY").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrowUp(imageCoordx, 2); // addDistancePoint(imageCoordy, imageCoordy);


              _this2.addArrow(imageCoordy, 2); // addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);


              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();
            },
            'object:scaling': function objectScaling(e) {
              var obj = e.target; // this.dataService.scaleKey = obj.scaleX;
              // console.log(obj.scaleX, obj.scaleY);

              obj.setCoords();
              obj.saveState();
              var cornerSize = _this2.canvas.width / 40;
              var moveSiseLimit = _this2.canvas.width / _this2.dataService.sizePrintKey;
              var sumLeft = obj.getBoundingRect().left;
              var sumTop = obj.getBoundingRect().top;
              var sumWith = obj.getBoundingRect().width;
              var sumHeight = obj.getBoundingRect().height;
              var matrix = e.target.calcTransformMatrix();
              var imageCoordx = matrix[4];
              var imageCoordy = matrix[5];
              var angle = Math.abs(_this2.canvas.getActiveObject().angle * Math.PI / 180);

              var activeObject = _this2.canvas.getActiveObject();

              var nerqnadzic = Math.sqrt(Math.pow(activeObject.width, 2) + Math.pow(activeObject.height, 2));
              var cos = Math.abs(Math.cos(angle));
              var sin = Math.abs(Math.sin(angle));
              var formatWidth = _this2.canvas.width - 2 * (moveSiseLimit + cornerSize);
              var formatHeight = formatWidth * _this2.dataService.formatWithHeight;
              var moveSizeLimit = _this2.canvas.width / _this2.dataService.sizePrintKey;
              var Delta = _this2.canvas.height - 2 * (moveSizeLimit + cornerSize) - (_this2.canvas.width - 2 * (moveSizeLimit + cornerSize)) * _this2.dataService.formatWithHeight; // top-left  corner

              if (sumLeft < cornerSize + moveSiseLimit) {
                obj.left = Math.max(obj.left, obj.left - sumLeft + (cornerSize + moveSiseLimit));
              }

              if (sumTop < cornerSize + moveSiseLimit - _this2.canvas.width * _this2.a) {
                obj.top = Math.max(obj.top, obj.top - sumTop + cornerSize + moveSiseLimit - _this2.canvas.width * _this2.a + 50);
              } //top right corner


              if (sumLeft + sumWith + cornerSize + moveSiseLimit > obj.canvas.width) {
                obj.left = Math.min(obj.left, obj.canvas.width - sumWith + obj.left - sumLeft - cornerSize - moveSiseLimit);
              } // bot right corner


              if (sumTop + sumHeight + obj.cornerSize + moveSiseLimit + Delta + _this2.canvas.width * _this2.a > obj.canvas.width) {
                obj.top = Math.min(obj.top, obj.canvas.height - sumHeight + obj.top - sumTop - obj.cornerSize - moveSiseLimit - Delta - _this2.canvas.width * _this2.a);
              } // With limit
              // this.canvas.getObjects().filter((o) => {
              //   if (o.get('type') === 'i-text') {
              //     this.imgPadding = 2800 / this.props.diametr
              //   }
              // })


              if (activeObject.angle === 0 || activeObject.angle === 180) {
                _this2.canvas.getObjects().filter(function (o) {
                  if (o.get('type') === 'i-text' && sumWith > formatWidth || o.get('type') === 'i-text' && sumHeight > formatHeight) {
                    activeObject.scaleX = formatWidth / (activeObject.width * 1.3);
                    activeObject.scaleY = formatWidth / (activeObject.width * 1.3);
                  }

                  if (o.get('type') !== 'i-text' && sumWith > formatWidth) {
                    activeObject.scaleX = formatWidth / activeObject.width;
                    activeObject.scaleY = formatHeight / activeObject.height;
                  }

                  if (o.get('type') !== 'i-text' && sumHeight > formatHeight) {
                    activeObject.scaleX = formatWidth / activeObject.width;
                    activeObject.scaleY = formatHeight / activeObject.height;
                  }
                });
              } else {
                _this2.canvas.getObjects().filter(function (o) {
                  if (o.get('type') === 'i-text' && sumWith > formatWidth || o.get('type') === 'i-text' && sumWith > formatHeight) {
                    activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                    activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                  }

                  if (o.get('type') !== 'i-text' && sumWith > formatWidth) {
                    activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                    activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                  }

                  if (o.get('type') !== 'i-text' && sumHeight > formatHeight) {
                    activeObject.scaleX = formatHeight / (activeObject.height / (cos * 0.75));
                    activeObject.scaleY = formatHeight / (activeObject.height / (cos * 0.75));
                  }
                });
              } // if (activeObject.angle === 0 || activeObject.angle === 180) {
              //   this.canvas.getObjects().filter((o) => {
              //     if (o.get('type') === 'i-text' && sumHeight > formatHeight * 0.6) {
              //       activeObject.scaleX = formatWidth / (activeObject.width * 1.67);
              //       activeObject.scaleY = formatWidth / (activeObject.width * 1.67);
              //     } else if (sumWith > formatWidth) {
              //       activeObject.scaleX = formatWidth / (activeObject.width);
              //       activeObject.scaleY = formatWidth / (activeObject.width);
              //     }
              //   })
              // } else {
              //   this.canvas.getObjects().filter((o) => {
              //     if (o.get('type') === 'i-text' && sumHeight > formatHeight) {
              //       activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.6));
              //       activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.6));
              //     } else if (sumHeight > formatHeight) {
              //       console.log('nnnnnnnn');
              //       activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.8));              
              //       activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.8));
              //     }
              //   })
              // }
              // } else if (sumHeight > formatHeight) {
              //   this.canvas.getObjects().filter((o) => {
              //     if (o.get('type') === 'i-text') {
              //       activeObject.scaleX = formatWidth / (activeObject.width * 2.2);
              //       activeObject.scaleY = formatWidth / (activeObject.width * 2.2);
              //     } else {
              //       activeObject.scaleX = formatHeight / (activeObject.height / (cos * 0.65));
              //       activeObject.scaleY = formatHeight / (activeObject.height / (cos * 0.65));
              //     }
              //   })
              // if (activeObject.angle === 0) {
              //   activeObject.scaleY = formatHeight / activeObject.height;
              // } else {
              //   activeObject.scaleX = formatWidth / nerqnadzic;
              //   activeObject.scaleY = formatWidth / nerqnadzic;
              // }
              // }


              if (activeObject.width * activeObject.scaleX > formatWidth && activeObject.angle !== 0) {
                activeObject.scaleX = formatWidth / nerqnadzic;
                activeObject.scaleY = formatWidth / nerqnadzic;
              }

              if (activeObject.height * activeObject.scaleY > formatHeight && activeObject.angle !== 0) {
                activeObject.scaleX = formatHeight / nerqnadzic;
                activeObject.scaleY = formatHeight / nerqnadzic;
              }

              obj.minScaleLimit = 0.02;
              $(".deleteBtn").remove();
              $(".distance").remove();
              $(".distanceY").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrowUp(imageCoordx, 2); // addDistancePoint(imageCoordy, imageCoordy);


              _this2.addArrow(imageCoordy, 2); // addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);


              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();
            },
            'object:modified': function objectModified(e) {
              var obj = e.target;
              obj.setCoords();
              obj.saveState();
              var matrix = e.target.calcTransformMatrix();
              var boundingRect = obj.getBoundingRect(true);
              var imageCoordx = matrix[4];
              var imageCoordy = matrix[5];
              var moveSizeLimit = _this2.canvas.width / _this2.dataService.sizePrintKey;
              var cornerSize = _this2.canvas.width / 40;
              var sumLeft = obj.getBoundingRect().left;
              var sumTop = obj.getBoundingRect().top;
              var sumWidth = obj.getBoundingRect().width;
              var sumHeight = obj.getBoundingRect().height;
              var Delta = _this2.canvas.height - 2 * (moveSizeLimit + cornerSize) - (_this2.canvas.width - 2 * (moveSizeLimit + cornerSize)) * _this2.dataService.formatWithHeight; // top-left  corner

              if (sumLeft < cornerSize + moveSizeLimit) {
                obj.left = Math.max(obj.left, obj.left - sumLeft + (cornerSize + moveSizeLimit));
              }

              if (sumTop < cornerSize + moveSizeLimit - _this2.canvas.width * _this2.a) {
                obj.top = Math.max(obj.top, obj.top - sumTop + cornerSize + moveSizeLimit - _this2.canvas.width * _this2.a);
              } // bot-right corner


              if (sumLeft + sumWidth + cornerSize + moveSizeLimit > obj.canvas.width) {
                obj.left = Math.min(obj.left, obj.canvas.width - sumWidth + obj.left - sumLeft - cornerSize - moveSizeLimit);
              }

              if (sumTop + sumHeight + cornerSize + moveSizeLimit + Delta + _this2.canvas.width * _this2.a > obj.canvas.height) {
                obj.top = Math.min(obj.top, obj.canvas.height - sumHeight + obj.top - sumTop - cornerSize - moveSizeLimit - Delta - _this2.canvas.width * _this2.a);
              }

              _this2.siteLayout.imageCoordy = Math.floor(imageCoordy);
              _this2.siteLayout.imageCoordx = Math.floor(imageCoordx);
              $(".distance").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrow(imageCoordy, 2);

              $(".distanceY").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrowUp(imageCoordx, 2);

              _this2.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);

              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();
            },
            'selection:created': function selectionCreated(e) {
              var obj = e.target; // let sumTop = obj.getBoundingRect().top;
              // let sumWith = obj.getBoundingRect().width;
              // let sumHeight = obj.getBoundingRect().height;
              // let formatWidth = (this.canvas.width) - 2 * (1);
              // let angle = Math.abs(((this.canvas.getActiveObject().angle) * Math.PI) / 180);
              // let activeObject = this.canvas.getActiveObject();
              // let cos = Math.abs(Math.cos(angle));
              // if (activeObject.angle === 0 || activeObject.angle === 180) {
              //   this.canvas.getObjects().filter((o) => {
              //     if (o.get('type') === 'i-text') {
              //       activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.2));
              //       activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.2));
              //     } else if (sumWith > formatWidth) {
              //       activeObject.scaleX = formatWidth / (activeObject.width);
              //       activeObject.scaleY = formatWidth / (activeObject.width);
              //     }
              //   }) }
              // this.dataService.canvasSelect = true;
              // var mouse = this.canvas.getPointer(e.memo);
              //  const x = mouse.x;
              //  const y = mouse.y;  
              //   e.target.set({
              //     lockScalingX: true,
              //     lockScalingY: true
              // });

              obj.setCoords();
              obj.saveState();
              $(".deleteBtn").remove(); // console.log('selected');

              _this2.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);

              $(".distance").remove();
              var matrixx = e.target.calcTransformMatrix();
              var imageCoordxx = matrixx[4];
              var imageCoordyy = matrixx[5]; // addDistancePoint(imageCoordyy, imageCoordxx);

              _this2.addArrow(imageCoordyy, 2);

              $(".distanceY").remove();
              var matrixxx = e.target.calcTransformMatrix();
              var imageCoordxxx = matrixxx[4];
              var imageCoordyyy = matrixxx[5]; // addDistancePoint(imageCoordyyy, imageCoordxxx);

              _this2.addArrowUp(imageCoordxxx, 2);

              var matrix = e.target.calcTransformMatrix();
              var imageCoordx = matrix[4];
              var imageCoordy = matrix[5];
              _this2.siteLayout.imageCoordy = Math.floor(imageCoordy);
              _this2.siteLayout.imageCoordx = Math.floor(imageCoordx);
              var imgWith = obj.width * obj.scaleX;
              var imgHeight = obj.height * obj.scaleY;
              _this2.siteLayout.imgWith = Math.floor(imgWith);
              _this2.siteLayout.imgHeigt = Math.floor(imgHeight);
              _this2.selected = obj.type;
              obj.hasRotatingPoint = true;
              obj.transparentCorners = false;
              obj.cornerColor = '#FF7F50'; // e.target.bringToFront()
              // this.canvas.getActiveObject()

              _this2.canvas.renderAll();

              _this2.resetPanels();

              _this2.getOpacity();

              _this2.getDistance();

              obj.setCoords();
              obj.saveState();

              if (obj.type !== 'group' && obj) {
                _this2.getId();

                _this2.getOpacity();

                _this2.getDistance();

                switch (obj.type) {
                  case 'rect':
                  case 'circle':
                  case 'triangle':
                    _this2.figureEditor = true;

                    _this2.getFill();

                    break;

                  case 'i-text':
                    _this2.textEditor = true; // this.getLineHeight();
                    // this.getCharSpacing();

                    _this2.getBold();

                    _this2.getFill();

                    _this2.getTextDecoration();

                    _this2.getTextAlign();

                    _this2.getFontFamily();

                    _this2.bringToFront(); // this.sendToBack()
                    // this.getLineHeight();


                    _this2.getCharSpacing();

                    _this2.getFontSize();

                    break;

                  case 'image':
                    _this2.getOpacity();

                    _this2.getDistance();

                    break;
                }
              } // addDistancePoint(imageCoordy, imageCoordx);


              _this2.addArrowUp(imageCoordx, 2); // addDistancePoint(imageCoordy, imageCoordy);


              _this2.addArrow(imageCoordy, 2); // addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);


              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();

              if (_this2.canvasCount !== 0) {
                _this2.dataService.canvasSelect = true;
              }
            },
            // 'selection:created': (e) => {
            //   if (this.canvasCount !== 0) {
            //     this.dataService.canvasSelect = true;
            //   }
            // },
            'before:selection:cleared': function beforeSelectionCleared(e) {
              if (_this2.canvasCount !== 0) {
                _this2.dataService.canvasSelect = true;
              }

              $(".deleteBtn").remove();
              $(".distance").remove();
            },
            'selection:updated': function selectionUpdated(e) {
              var obj = e.target;

              _this2.addDeleteBtn(e.target.oCoords.mb.x, e.target.oCoords.mb.y);

              $(".distance").remove();
              var matrixx = e.target.calcTransformMatrix();
              var imageCoordx = matrixx[4];
              var imageCoordy = matrixx[5]; // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrow(imageCoordy, 2);

              $(".distanceY").remove();
              var matrixxx = e.target.calcTransformMatrix();
              var imageCoordx = matrixxx[4];
              var imageCoordy = matrixxx[5]; // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrowUp(imageCoordx, 2);

              var matrix = e.target.calcTransformMatrix();
              var imageCoordx = matrix[4];
              var imageCoordy = matrix[5];
              _this2.siteLayout.imageCoordy = Math.floor(imageCoordy);
              _this2.siteLayout.imageCoordx = Math.floor(imageCoordx);
              var imgWith = obj.width * obj.scaleX;
              var imgHeight = obj.height * obj.scaleY;
              _this2.siteLayout.imgWith = Math.floor(imgWith);
              _this2.siteLayout.imgHeigt = Math.floor(imgHeight);
              _this2.selected = obj.type;
              obj.hasRotatingPoint = true;
              obj.transparentCorners = false;
              obj.cornerColor = '#FF7F50'; // e.target.bringToFront()
              // this.canvas.getActiveObject()

              _this2.resetPanels();

              _this2.getOpacity();

              _this2.getDistance();

              if (obj.type !== 'group' && obj) {
                _this2.getId();

                _this2.getOpacity();

                _this2.getDistance();

                switch (obj.type) {
                  case 'rect':
                  case 'circle':
                  case 'triangle':
                    _this2.figureEditor = true;

                    _this2.getFill();

                    break;

                  case 'i-text':
                    _this2.textEditor = true; // this.getLineHeight();
                    // this.getCharSpacing();

                    _this2.getBold();

                    _this2.getFill();

                    _this2.getTextDecoration();

                    _this2.getTextAlign();

                    _this2.getFontFamily();

                    _this2.bringToFront(); // this.sendToBack()
                    // this.getLineHeight();


                    _this2.getCharSpacing();

                    _this2.getFontSize();

                    break;

                  case 'image':
                    _this2.getOpacity();

                    _this2.getDistance();

                    break;
                }
              }

              $(".distance").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrow(imageCoordy, 2);

              $(".distanceY").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrowUp(imageCoordx, 2);

              _this2.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);

              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();
            },
            'mouse:up:before': function mouseUpBefore(e) {
              console.log('mouse:down');
            },
            'selection:cleared': function selectionCleared(e) {
              _this2.dataService.canvasSelect = false;
              $(".deleteBtn").remove();
              $(".distance").remove();
              var obj = e.target; // console.log('cleared');

              _this2.selected = null;

              _this2.resetPanels(); // console.log('clear');


              _this2.siteLayout.imageCoordx = null;
              _this2.siteLayout.imageCoordy = null;
              _this2.siteLayout.imgWith = null;
              _this2.siteLayout.imgHeigt = null;
            },
            'object:rotating': function objectRotating(e) {
              var obj = e.target;
              obj.setCoords();
              obj.saveState();
              var matrix = e.target.calcTransformMatrix();
              var angle = Math.abs(_this2.canvas.getActiveObject().angle * Math.PI / 180);
              var sumWidth = obj.getBoundingRect().width;
              var sumHeight = obj.getBoundingRect().height;
              var imageCoordx = matrix[4];
              var imageCoordy = matrix[5];

              var activeObject = _this2.canvas.getActiveObject(); // const nerqnadzicc = Math.sqrt(Math.pow(this.canvas.getActiveObject().width, 2) + Math.pow(this.canvas.getActiveObject().height, 2))


              var cos = Math.abs(Math.cos(angle));
              var sin = Math.abs(Math.sin(angle));
              var formatWidth = window.innerWidth - _this2.dataService.widthKey * window.innerWidth - 2 * ((window.innerWidth - _this2.dataService.widthKey * window.innerWidth) / _this2.b + (window.innerWidth - _this2.dataService.widthKey * window.innerWidth) / 40);
              var formatHeight = formatWidth * _this2.c;
              var checkWidth = window.innerWidth;

              _this2.canvas.getObjects().filter(function (o) {
                //mobile
                if (checkWidth < 600) {
                  if (o.get('type') === 'i-text' && sumWidth > formatWidth || o.get('type') === 'i-text' && sumHeight > formatHeight) {
                    activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75 / 0.35));
                    activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75 / 0.35));
                  }

                  if (o.get('type') !== 'i-text' && sumWidth > formatWidth) {
                    activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75 / 0.35));
                    activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75 / 0.35));
                  }

                  if (o.get('type') !== 'i-text' && sumHeight > formatHeight) {
                    activeObject.scaleX = formatHeight / (activeObject.height / (cos * 0.75 / 0.35));
                    activeObject.scaleY = formatHeight / (activeObject.height / (cos * 0.75 / 0.35));
                  }
                } else {
                  if (o.get('type') === 'i-text' && sumWidth > formatWidth || o.get('type') === 'i-text' && sumHeight > formatHeight) {
                    activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                    activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                  }

                  if (o.get('type') !== 'i-text' && sumWidth > formatWidth) {
                    activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                    activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                  }

                  if (o.get('type') !== 'i-text' && sumHeight > formatHeight) {
                    activeObject.scaleX = formatHeight / (activeObject.height / (cos * 0.75));
                    activeObject.scaleY = formatHeight / (activeObject.height / (cos * 0.75));
                  }
                }
              });

              $(".distance").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrow(imageCoordy, 2);

              $(".distanceY").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrowUp(imageCoordx, 2);

              _this2.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);

              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();
            },
            'path:created': function pathCreated(e) {
              var obj = e.target;
              _this2.canvasCount += 1;
              _this2.canvas.isDrawingMode = false; // this.canvas.on('mouse:up', () => this.canvas.setActiveObject());
              // console.log(this.canvas.item(this.canvasCount - 1));

              _this2.canvas.getObjects().indexOf(e.target); // this.canvas.setActiveObject(this.canvas.item(this.canvasCount- 1));


              _this2.selectItemAfterAdded(_this2.canvas.item(_this2.canvasCount - 1));

              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();
            },
            'object:added': function objectAdded(e) {
              var obj = e.target;
              obj.setCoords();
              obj.saveState();
              var matrix = e.target.calcTransformMatrix();
              var imageCoordx = matrix[4];
              var imageCoordy = matrix[5]; // this.canvas.getObjects().filter((o) => {
              //   if (o.get('type') === 'i-text') {
              //     this.imgPadding = 2800 / this.props.diametr
              //   }
              // })

              $(".deleteBtn").remove(); // console.log('added');
              // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrow(imageCoordy, 2);

              $(".distanceY").remove(); // addDistancePoint(imageCoordy, imageCoordx);

              _this2.addArrowUp(imageCoordx, 2);

              _this2.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);

              obj.setCoords();
              obj.saveState();

              _this2.canvas.renderAll();
            }
          }); // --!
          // this.canvas1.setWidth(this.siteLayout.canvasHtmlWidth);
          // this.canvas1.setHeight(this.siteLayout.canvasHtmlHeight);
          // this.canvas1.renderAll();
          // get references to the html canvas element & its context

          this.canvas.on('mouse:down', function (e) {
            var canvasElement = document.getElementById('canvas');
          }); // this.canvas1.on('mouse:down', (e) => {
          //   const canvasElement: any = document.getElementById('canvas');
          // });

          this.canvas.on('mouse:over', function () {
            var color = _this2.props.drawFill;
            _this2.canvas.freeDrawingBrush.color = color; // alert("mouse up!");
            // this.canvas.add(refRect);
            // isMouseDown = false;
            // freeDrawing=false; // **Disables line drawing
          });
        }
      }, {
        key: "defoultUpdate",
        value: function defoultUpdate() {
          var _this3 = this;

          $('.owl-theme').on('changed.owl-carousel', function (event) {
            var current = event.item.index;
            _this3.id = $(event.target).find(".owl-item").eq(current).find("img").attr('id');
          });
        }
        /*------------------------Block elements------------------------*/
        // Block "Size"
        // changeSize() {
        //   this.canvas.setWidth(this.siteLayout.canvasHtml);
        //   this.canvas.setHeight(500);
        //   this.canvas.renderAll()
        // }
        // Block "Add text"
        // resizeEbiten(iframe, parentId, aspectRatio) {
        //   let parent = document.getElementById(parentId);
        //   let w = parent.clientWidth;
        //   iframe.width = w;
        //   iframe.height = w * aspectRatio;
        //   iframe.contentWindow.addEventListener('resize', () => {
        //     let w = parent.clientWidth;
        //     iframe.width = w;
        //     iframe.height = w * aspectRatio;
        //   });
        // }

      }, {
        key: "canvasDrawing",
        value: function canvasDrawing(target) {
          var _this4 = this;

          $(document).on('click', ".deleteBtn", function (event) {
            event.stopImmediatePropagation();
            _this4.canvasCount -= 1;
            console.log(_this4.canvasCount);

            if (_this4.canvasCount === 0) {
              // this.siteLayout.isOpasity=true;
              $('.owl-nav').show();
              $(".canvas").css("z-index", 0);
              _this4.disableBtn = false;
              _this4.siteLayout.toggle = false;
              console.log('delete---');
            }

            var activeObject = _this4.canvas.getActiveObject();

            var activeGroup = _this4.canvas.getActiveObjects();

            if (activeObject) {
              _this4.canvas.remove(activeObject);

              $(".deleteBtn").remove(); // this.textString = '';
            } else if (activeGroup) {
              _this4.canvas.discardActiveObject();

              var self = _this4;
              activeGroup.forEach(function (object) {
                self.canvas.remove(object);
              });
            }
          });

          switch (target) {
            case "select":
              this.canvas.isDrawingMode = false;
              break;

            case "erase":
              this.canvas.freeDrawingBrush = new fabric.EraserBrush(this.canvas);
              this.canvas.freeDrawingBrush.width = 10;
              this.canvas.isDrawingMode = true;
              break;

            case "undo":
              this.canvas.freeDrawingBrush = new fabric.EraserBrush(this.canvas);
              this.canvas.freeDrawingBrush.width = 10;
              this.canvas.isDrawingMode = true;
              break;

            case "draw":
              var color = this.props.drawFill;
              console.log(color);
              this.siteLayout.toggle = true;
              this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas);
              this.drawObject = this.canvas.freeDrawingBrush;
              this.canvas.freeDrawingBrush.color = color;
              this.canvas.freeDrawingBrush.width = 4;
              this.canvas.isDrawingMode = true;
              this.canvas.renderAll();
              this.selectItemAfterAdded(this.canvas.item(0));
              break;

            case "spray":
              var colorSpray = this.props.drawFill;
              this.siteLayout.toggle = true;
              this.canvas.freeDrawingBrush = new fabric.SprayBrush(this.canvas);
              this.canvas.freeDrawingBrush.color = colorSpray;
              this.canvas.freeDrawingBrush.width = 15;
              this.canvas.isDrawingMode = true; // this.canvas.setActiveObject(Object[0]);

              this.selectItemAfterAdded(this.canvas.item(0));
              break;

            default:
              break;
          }
        }
      }, {
        key: "discardActiveObj",
        value: function discardActiveObj() {
          this.props.diametr = 300;
          this.canvas.discardActiveObject().renderAll();
        }
      }, {
        key: "reRender",
        value: function reRender() {
          var _this5 = this;

          this.canvas.getObjects().filter(function (o) {
            if (o.get('type') === 'i-text') {
              return _this5.canvas.setActiveObject(o);
            }
          });

          if (this.intCountText !== 0) {
            this.canvas.remove(this.canvas.getActiveObject());
            this.canvas.add(this.props.textStraight);
            this.selectItemAfterAdded(this.props.textStraight); // this.canvas.setActiveObject(this.props.textStraight);

            this.canvas.renderAll();
          }
        }
      }, {
        key: "reRender1",
        value: function reRender1() {
          var _this6 = this;

          this.canvas.getObjects().filter(function (o) {
            if (o.get('type') === 'i-text') {
              return _this6.canvas.setActiveObject(o);
            }
          }); // if (this.canvasCount !== 0) {
          //   // this.selectItemAfterAdded(this.props.textStraight);
          //   this.canvas.remove(this.canvas.getActiveObject());
          //   this.canvas.add(this.props.textStraight);
          //   this.canvas.renderAll();
          // }
        }
      }, {
        key: "addText",
        value: function addText() {
          var _this7 = this;

          // console.log(this.props.textCurved);
          this.objectType = true;
          $(document).on('click', '.deleteBtn', function (event) {
            _this7.removeSelected(); // this.onResize(1);

          });

          if (this.props.diametr < 299) {
            console.log('<280');
            this.props.inputDisabled = 'inputDisabled';
            this.canvas.remove(this.canvas.getActiveObject());
            var path = new fabric.Path("'M 90 425 A ".concat(this.props.diametr, " ").concat(this.props.diametr, " 0 0 1 271 420 '"), {
              strokeWidth: 1,
              absolutePositioned: true,
              fill: false
            }); // const path = new fabric.Path(`'M 90 425 A ${this.props.diametr} ${this.props.diametr} 0 0 1 271 420 '`, {
            //   strokeWidth: 1,
            //   absolutePositioned: true,
            //   fill: false,
            // })
            // const pathText = this.props.path

            var pathInfo = fabric.util.getPathSegmentsInfo(path.path);
            path.segmentsInfo = pathInfo;
            var textPathLength = pathInfo[pathInfo.length - 1].length;
            var k = this.textString.length;
            var fontSize = 1.9 * textPathLength / this.textString.length;
            this.props.fontSize = fontSize;
            var textWidth = window.innerWidth - this.dataService.widthKey * window.innerWidth - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
            var textHeight = textWidth * this.c;

            if (this.textString) {
              // this.canvasCount += 1;
              var text = new fabric.IText(this.textString, {
                fontFamily: this.props.fontFamily || 'helvetica',
                fontSize: fontSize,
                path: path,
                // top: path.top,
                // left: path.left,
                // originX: 'center',
                // originY: 'center',
                // left: 170,
                // top: 115,
                // fontSize: 30,
                // color: "rgba(34, 34, 1, 0.3)",
                // angle: 0,
                fill: this.props.fill || '#000000',
                // scaleX: 0.8,
                // scaleY: 0.8,
                // fontSize: 80,
                hasRotatingPoint: true,
                // strokeWidth: 30,
                // strokeMiterLimit: 15,
                // width: 50,
                cornerSize: this.canvas.width / 40,
                padding: this.textPadding,
                centeredRotation: true
              }, this.path = path);
              $('#shadowText').on('click', function () {
                if (!_this7.siteLayout.shadowText) {
                  text.shadow = null;
                } else if (_this7.siteLayout.shadowText) {
                  // text.setShadow(this.shadowTEXT) old version;
                  // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                  text.shadow = new fabric.Shadow(_this7.shadowTEXT); // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                  // console.log('text');
                }

                _this7.canvas.renderAll();
              });

              if (this.dataService.horizontalVertical === true) {
                text.scaleToHeight(textHeight / this.d / 0.3);
                text.scaleToWidth(textWidth / this.d / 0.3);
              } else {
                text.scaleToHeight(textHeight / this.d / 1.5);
                text.scaleToWidth(textWidth / this.d / 1.5);
              } //   text.scaleToHeight(textHeight / this.d / 1.5);
              // text.scaleToWidth(textWidth / this.d / 1.5);
              // console.log(this.a, this.b, this.d);


              this.extend(text, this.randomId()); // text.charSpacing = pathLength;

              this.canvas.add(text);
              this.canvas.centerObjectH(text);
              text.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a + 18;
              this.selectItemAfterAdded(text);
              this.canvas.renderAll(); // this.canvas.add(path);
              // console.log(this.canvas.toSVG());
              // console.log(this.canvas.toSVG().toString().replace("<defs>", '').replace("</defs>", str));
              // text.left = this.props.curvedTextLeft;
              // this.textString = '';
            }
          } else {
            this.props.inputDisabled = 'inputDisabled';
            this.canvas.remove(this.canvas.getActiveObject());

            if (this.props.diametr === 300) {
              this.intCountText += 1;
              this.canvasCount += 1; // console.log(this.canvasCount, 'this.props.diametr === 300');
            }

            console.log('>280', 'sff'); // $(document).on('click', ".deleteBtn", (event) => {
            //   this.siteLayout.activatebutton = true;
            //   event.stopImmediatePropagation()
            //   this.canvasCount -= 1;
            //   // this.intCountText -= 1;
            //   console.log(this.canvasCount, ".deleteBtn");
            //   // console.log(this.canvasCount);
            //   if (this.canvasCount === 0) {
            //     this.siteLayout.firstImage = 0;
            //     $('.owl-nav').show();
            //     $(".canvas").css("z-index", 0);
            //     this.siteLayout.toggle = false;
            //     this.disableBtn = false;
            //   }
            //   const activeObject = this.canvas.getActiveObject();
            //   const activeGroup = this.canvas.getActiveObjects();
            //   if (activeObject) {
            //     this.canvas.remove(activeObject);
            //     $(".deleteBtn").remove();
            //     $(".distance").remove();
            //     // this.textString = '';
            //   } else if (activeGroup) {
            //     this.canvas.discardActiveObject();
            //     const self = this;
            //     activeGroup.forEach((object) => {
            //       self.canvas.remove(object);
            //     });
            //   }
            // });

            var _path = new fabric.Path("'M 69 435 A ".concat(this.props.diametr, " ").concat(this.props.diametr, " 0 0 1 271 420 '"), {
              strokeWidth: 1,
              absolutePositioned: true,
              fill: false
            }); // const pathText = this.props.path


            var pathInfo = fabric.util.getPathSegmentsInfo(_path.path);
            _path.segmentsInfo = pathInfo;
            var _textPathLength = pathInfo[pathInfo.length - 1].length; // let k = this.textString.length;

            var _textWidth = window.innerWidth - this.dataService.widthKey * window.innerWidth - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);

            var _textHeight = _textWidth * this.c;

            var _fontSize = 1.9 * this.props.diametr / this.textString.length;

            this.props.fontSize = _fontSize;

            if (this.textString) {
              // this.canvasCount += 1;
              var _text = new fabric.IText(this.textString, {
                fontFamily: 'helvetica',
                fontSize: _fontSize,
                // path: path,
                // top: path.top,
                // left: path.left,
                // originX: 'center',
                // originY: 'center',
                // left: 170,
                // top: 115,
                // fontSize: 30,
                // color: "rgba(34, 34, 1, 0.3)",
                // angle: 0,
                fill: '#000000',
                // scaleX: 0.5,
                // scaleY: 0.5,
                // fontSize: 80,
                hasRotatingPoint: true,
                // strokeWidth: 10,
                // strokeMiterLimit: 15,
                // width: 50,
                cornerSize: this.canvas.width / 40,
                padding: this.textPadding,
                centeredRotation: true
              });

              this.props.textStraight = _text; // if (text.height > 1300) {
              //   this.dataService.formatVal = this.dataService.formatValue = 'A3';
              // } else if (text.height > 500 && text.height < 1300) {
              //   this.dataService.formatVal = this.dataService.formatValue = 'A4';
              // }

              var scale = 1;

              if (this.dataService.horizontalVertical === true) {
                // this.dataService.horizontalVertical = false;
                // this.dataService.horVert = false;
                // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                // this.dataService.formatWithHeight = 1.414;
                // this.dataService.formatTopKey = 0.03;
                // this.dataService.scaleKey = 1;
                // this.dataService.formatSizeSwich();
                scale = 2;

                if (window.innerWidth < 600) {
                  _text.scaleToHeight(_textHeight / 0.5);

                  _text.scaleToWidth(_textWidth / 0.5);
                } else {
                  _text.scaleToHeight(_textHeight / 1.2);

                  _text.scaleToWidth(_textWidth / 1.2);
                }
              } else {
                // this.dataService.horizontalVertical = false;
                // this.dataService.scaleKey = 1;
                // this.dataService.horVert = true;
                // this.dataService.formatWithHeight = 0.707;
                // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                // this.dataService.formatTopKey = -0.03;
                // this.dataService.formatSizeSwich();
                scale = 2;

                if (window.innerWidth < 600) {
                  _text.scaleToHeight(_textHeight / 0.4);

                  _text.scaleToWidth(_textWidth / 0.4);
                } else {
                  _text.scaleToHeight(_textHeight / 1.1);

                  _text.scaleToWidth(_textWidth / 1.1);
                } // scale = this.dataService.scaleKey;

              }

              $('#shadowText').on('click', function () {
                if (!_this7.siteLayout.shadowText) {
                  _text.shadow = null;
                } else if (_this7.siteLayout.shadowText) {
                  // text.setShadow(this.shadowTEXT) old version;
                  // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                  _text.shadow = new fabric.Shadow(_this7.shadowTEXT); // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                  // console.log('text');
                }

                _this7.canvas.renderAll();
              }), // console.log(this.a, this.b, this.d);
              this.extend(_text, this.randomId()); // text.charSpacing = pathLength;

              this.canvas.add(_text);
              this.canvas.centerObjectH(_text);
              _text.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a + 18;
              this.selectItemAfterAdded(_text);
              this.canvas.renderAll(); // this.canvas.add(path);
              // console.log(this.canvas.toSVG().toString().replace("<defs>", '').replace("</defs>", str));
              // this.canvas.centerObjectH(text);
              // text.top = this.canvas.height / 3;
              // this.textString = '';
              // console.log(this.canvasCount);
            }
          }
        } // Block "Add images"

      }, {
        key: "getImgPolaroid",
        value: function getImgPolaroid(event) {
          var _this8 = this;

          $(document).on('click', '.deleteBtn', function (event) {
            _this8.removeSelected();
          });
          this.canvas.includeDefaultValues;
          this.objectTypeImage = 'image';
          this.canvasCount += 1;
          var el = event;
          var scale = 1;
          fabric.Image.fromURL(el, function (image) {
            _this8.image = image;

            if (image.height > 1300) {
              _this8.dataService.formatVal = _this8.dataService.formatValue = 'A3';

              if (image.height / image.width > 1.1) {
                console.log('mage.height / image.width > 1.1');
                _this8.dataService.horizontalVertical = true;
                _this8.dataService.horVert = false; // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);

                _this8.dataService.formatWithHeight = 1.414;
                _this8.dataService.formatTopKey = -0.00; // this.dataService.scaleKey = 1;
                //mobile

                _this8.dataService.formatSizeSwich();

                if (window.innerWidth < 600) {
                  scale = 0.4;
                  console.log(_this8.scaleKey = _this8.d, 'A3');
                } else {
                  scale = 1.05;
                }
              } else {
                console.log('mage.height / image.width > 1.1 else');
                _this8.dataService.horizontalVertical = false; // this.dataService.scaleKey = 1;

                _this8.dataService.horVert = true;
                _this8.dataService.formatWithHeight = 0.707; // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);

                _this8.dataService.formatTopKey = -0.00;

                _this8.dataService.formatSizeSwich(); //mobile


                if (window.innerWidth < 600) {
                  scale = 0.36;
                } else {
                  scale = 1;
                } // scale = this.dataService.scaleKey;

              }
            } else if (image.height > 100 && image.height < 1300) {
              _this8.dataService.formatVal = _this8.dataService.formatValue = 'A4';

              if (image.height / image.width > 1.1) {
                _this8.dataService.horizontalVertical = true;
                _this8.dataService.horVert = false; // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);

                _this8.dataService.formatWithHeight = 1.414;
                _this8.dataService.formatTopKey = 0.08; // this.dataService.scaleKey = 1;
                //mobile

                _this8.dataService.formatSizeSwich();

                if (window.innerWidth < 600) {
                  scale = 0.36;
                } else {
                  scale = 1.05;
                }
              } else {
                _this8.dataService.horizontalVertical = false; // this.dataService.scaleKey = 1;

                _this8.dataService.horVert = true;
                _this8.dataService.formatWithHeight = 0.707; // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);

                _this8.dataService.formatTopKey = -0.00;

                _this8.dataService.formatSizeSwich(); //mobile


                if (window.innerWidth < 600) {
                  scale = 0.335;
                } else {
                  scale = 1;
                } // scale = this.dataService.scaleKey;

              }
            }

            _this8.dataService.calcEndPrise(); // function sizing() {
            //   if (image.height / image.width > 1.1) {
            //     this.dataService.horizontalVertical = true;
            //     this.dataService.horVert = false;
            //     // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
            //     this.dataService.formatWithHeight = 1.414;
            //     this.dataService.formatTopKey = 0.03;
            //     // this.dataService.scaleKey = 1;
            //     this.dataService.formatSizeSwich();
            //     scale = 1.1;
            //   } else {
            //     this.dataService.horizontalVertical = false;
            //     // this.dataService.scaleKey = 1;
            //     this.dataService.horVert = true;
            //     this.dataService.formatWithHeight = 0.707;
            //     // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
            //     // this.dataService.formatTopKey = -0.03;
            //     this.dataService.formatSizeSwich();
            //     scale = 1;
            //     // scale = this.dataService.scaleKey;
            //   }
            // }
            // const image = fabric.util.groupSVGElements(objects, options);


            var imageWidth = window.innerWidth - _this8.dataService.widthKey * window.innerWidth - 2 * ((window.innerWidth - _this8.dataService.widthKey * window.innerWidth) / _this8.b + (window.innerWidth - _this8.dataService.widthKey * window.innerWidth) / 40);
            var imageHeight = imageWidth * _this8.c;
            console.log(imageWidth, 'imageWidth');
            image.set({
              // multiplier: 0.5,
              // originX: 'center',
              // originY: 'center',
              // shadow: this.shadow,
              // strokeWidth: 3,
              // stroke: '#000',
              left: 130,
              // top: 50,
              angle: 0,
              padding: 0,
              cornerSize: _this8.canvas.width / 40,
              hasRotatingPoint: true
            }); // value.shadow.affectStroke = false;
            // image.panToActiveObject()

            image.scaleToWidth(imageWidth / scale);
            image.scaleToHeight(imageHeight / scale);

            _this8.extend(image, _this8.randomId());

            image.filters.push(new fabric.Image.filters.ColorMatrix({
              duration: 200,
              matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0]
            }));
            image.applyFilters();

            _this8.canvas.add(image); // this.canvas.centerObject(image);


            _this8.canvas.centerObjectH(image);

            image.top = _this8.canvas.width / 40 + _this8.canvas.width / _this8.b - _this8.canvas.width * _this8.a;

            _this8.canvas.renderAll();

            $('#hue-value').on('change', function () {
              // console.log(this.siteLayout.removeColorValue);
              image.filters = [];

              if (_this8.filterName == 'blackWhite') {
                image.filters.push(new fabric.Image.filters.BlackWhite());
              } else if (_this8.filterName == 'vintage') {
                image.filters.push(new fabric.Image.filters.Vintage());
              } else if (_this8.filterName == 'sepia') {
                image.filters.push(new fabric.Image.filters.Sepia());
              } else if (_this8.filterName == 'invert') {
                image.filters.push(new fabric.Image.filters.Invert());
              } else if (_this8.filterName == 'origin') {
                image.filters = [];
              }

              image.filters.push(new fabric.Image.filters.RemoveColor({
                distance: _this8.props.distance
              }));
              image.applyFilters();

              _this8.canvas.renderAll();
            });
            $('#saturation').on('change', function () {
              image.filters = [];
              image.filters.push(new fabric.Image.filters.Saturation({
                saturation: _this8.siteLayout.saturation
              }));
              image.applyFilters();

              _this8.canvas.renderAll();
            });
            $('#blur').on('change', function () {
              image.filters = [];
              image.filters.push(new fabric.Image.filters.Blur({
                blur: _this8.siteLayout.blur
              }));
              image.applyFilters();

              _this8.canvas.renderAll();
            });
            $('#contrast1').on('change', function () {
              image.filters = [];
              image.filters.push(new fabric.Image.filters.Contrast({
                contrast: _this8.siteLayout.contrast
              }));
              image.applyFilters();

              _this8.canvas.renderAll();
            });
            $('#noise').on('change', function () {
              image.filters = [];
              image.filters.push(new fabric.Image.filters.Noise({
                noise: _this8.siteLayout.noise
              }));
              image.applyFilters();

              _this8.canvas.renderAll();
            }); // console.log(image);

            $('#shadowSVG').on('change', function () {
              var obj = _this8.canvas.getActiveObject();

              if (_this8.siteLayout.shadowSVG === false) {
                image.shadow = null;
              } else if (_this8.siteLayout.shadowSVG) {
                image.shadow = new fabric.Shadow(_this8.shadow); // image.setShadow(this.shadow);
                // console.log(image);
                // image.shadow = new fabric.Shadow(this.shadow);
                // image.set('shadow', new fabric.Shadow(this.shadow));
              }

              _this8.canvas.renderAll();
            }), $('#grayscale').on('click', function () {
              _this8.filterName = 'blackWhite';
              _this8.props.distance = 0;
              _this8.siteLayout.saturation = 0;
              _this8.siteLayout.blur = 0;
              _this8.siteLayout.noise = 0;
              _this8.siteLayout.contrast = 0;
              image.filters = [];
              image.filters.push(new fabric.Image.filters.BlackWhite());
              image.applyFilters();

              _this8.canvas.renderAll();
            }), $('#vintage').on('click', function () {
              _this8.filterName = 'vintage';
              _this8.props.distance = 0;
              _this8.siteLayout.saturation = 0;
              _this8.siteLayout.blur = 0;
              _this8.siteLayout.noise = 0;
              _this8.siteLayout.contrast = 0;
              image.filters = [];
              image.filters.push(new fabric.Image.filters.Vintage());
              image.applyFilters();

              _this8.canvas.renderAll();
            }), $('#sepia').on('click', function () {
              _this8.filterName = 'sepia';
              _this8.props.distance = 0;
              _this8.siteLayout.saturation = 0;
              _this8.siteLayout.blur = 0;
              _this8.siteLayout.noise = 0;
              _this8.siteLayout.contrast = 0;
              image.filters = [];
              image.filters.push(new fabric.Image.filters.Sepia());
              image.applyFilters(); // console.log(image);
              //.filters[0].matrix[0]

              _this8.canvas.renderAll();
            }), $('#invert').on('click', function () {
              _this8.filterName = 'invert';
              _this8.props.distance = 0;
              _this8.siteLayout.saturation = 0;
              _this8.siteLayout.blur = 0;
              _this8.siteLayout.noise = 0;
              _this8.siteLayout.contrast = 0;
              image.filters = [];
              image.filters.push(new fabric.Image.filters.Invert());
              image.applyFilters(); // console.log(image);
              //.filters[0].matrix[0]

              _this8.canvas.renderAll();
            }), $('#origin').on('click', function () {
              _this8.filterName = 'origin';
              _this8.props.distance = 0;
              _this8.siteLayout.saturation = 0;
              _this8.siteLayout.blur = 0;
              _this8.siteLayout.noise = 0;
              _this8.siteLayout.contrast = 0;
              image.filters = []; // if (this.id == "svg") {
              //   console.log("svg");
              //   image.filters = [];
              //   image.filters.push(new fabric.Image.filters.ColorMatrix({
              //     matrix: [1, 0, 0, 0, 0,
              //       0, 1, 0, 0, 0,
              //       0, 0, 1, 0, 0,
              //       0, 0, 1, 1, 0]
              //   }));
              //   image.applyFilters();
              //   this.canvas.renderAll();
              // }
              // else if (this.id == "svgPhoto") {
              //   console.log("svgPhoto");
              //   image.filters = [];
              //   image.filters.push(new fabric.Image.filters.ColorMatrix({
              //     matrix: [1, 0, 0, 0, 0,
              //       0, 1, 0, 0, 0,
              //       0, 0, 1, 0, 0,
              //       0, 0, 1, 1, 0]
              //   }));
              //   image.applyFilters();
              //   this.canvas.renderAll();
              // }

              image.applyFilters();

              _this8.canvas.renderAll();
            }), _this8.selectItemAfterAdded(image);
            setTimeout(function () {
              _this8.canvas.discardActiveObject().renderAll();
            }, 1500); // this.addDeleteBtn(image.oCoords.mb.x, image.oCoords.mb.y);
          }); // event.target.left = 100;
          // event.target.top = 100;
          // event.target.setCoords({'left' : 50});
          // console.log(this.canvas.getActiveObject());
          // event.target.saveState();
          // this.canvas.renderAll();
          // event.target.setCoords()
        } // Block "Upload Image"

      }, {
        key: "addImageOnCanvas",
        value: function addImageOnCanvas(url) {
          var _this9 = this;

          $(document).on('click', '.deleteBtn', function (event) {
            _this9.removeSelected();
          });
          $(document).on('click', ".deleteBtn", function (event) {
            event.stopImmediatePropagation();

            var activeObject = _this9.canvas.getActiveObject();

            var activeGroup = _this9.canvas.getActiveObjects();

            _this9.canvasCount -= 1; // console.log(this.canvasCount);

            if (_this9.canvasCount === 0) {
              $('#shadow').prop('checked', false);
              _this9.siteLayout.shadow = false;
              $('.owl-nav').show();
              $(".canvas").css("z-index", 0); // this.siteLayout.isCarouselOpen = true;

              _this9.disableBtn = false;
              _this9.siteLayout.toggle = false;
            }

            if (activeObject) {
              _this9.canvas.remove(activeObject);

              $(".deleteBtn").remove();
              $(".distance").remove(); // this.textString = '';
            } else if (activeGroup) {
              _this9.canvas.discardActiveObject();

              var self = _this9;
              activeGroup.forEach(function (object) {
                self.canvas.remove(object);
              });
            }
          });

          if (url) {
            this.canvasCount += 1; // console.log(url);

            var scale = 1.1; // console.log(this.canvasCount);

            fabric.Image.fromURL(url, function (image1) {
              if (_this9.canvasCount === 1) {
                if (image1.height > 1300) {
                  _this9.dataService.formatVal = _this9.dataService.formatValue = 'A3';

                  if (image1.height / image1.width > 1.1) {
                    console.log('mage.height / image.width > 1.1');
                    _this9.dataService.horizontalVertical = true;
                    _this9.dataService.horVert = false; // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);

                    _this9.dataService.formatWithHeight = 1.414;
                    _this9.dataService.formatTopKey = -0.03; // this.dataService.scaleKey = 1;

                    _this9.dataService.formatSizeSwich();

                    scale = 1.05;
                  } else {
                    console.log('mage.height / image.width > 1.1 else');
                    _this9.dataService.horizontalVertical = false; // this.dataService.scaleKey = 1;

                    _this9.dataService.horVert = true;
                    _this9.dataService.formatWithHeight = 0.707; // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);

                    _this9.dataService.formatTopKey = -0.03;

                    _this9.dataService.formatSizeSwich();

                    scale = 1; // scale = this.dataService.scaleKey;
                  }
                } else if (image1.height > 100 && image1.height < 1300) {
                  _this9.dataService.formatVal = _this9.dataService.formatValue = 'A4';

                  if (image1.height / image1.width > 1.1) {
                    _this9.dataService.horizontalVertical = true;
                    _this9.dataService.horVert = false; // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);

                    _this9.dataService.formatWithHeight = 1.414;
                    _this9.dataService.formatTopKey = 0.03; // this.dataService.scaleKey = 1;

                    _this9.dataService.formatSizeSwich();

                    scale = 1.05;
                  } else {
                    _this9.dataService.horizontalVertical = false; // this.dataService.scaleKey = 1;

                    _this9.dataService.horVert = true;
                    _this9.dataService.formatWithHeight = 0.707; // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);

                    _this9.dataService.formatTopKey = -0.03;

                    _this9.dataService.formatSizeSwich();

                    scale = 1; // scale = this.dataService.scaleKey;
                  }
                }
              } else {
                if (image1.height > 1300) {
                  // this.dataService.formatVal = this.dataService.formatValue = 'A3';
                  if (image1.height / image1.width > 1.1) {
                    // this.dataService.horizontalVertical = true;
                    // this.dataService.horVert = false;
                    // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                    // this.dataService.formatWithHeight = 1.414;
                    // this.dataService.formatTopKey = -0.03;
                    // this.dataService.scaleKey = 1;
                    // this.dataService.formatSizeSwich();
                    scale = 1.3;
                  } else {
                    _this9.dataService.horizontalVertical = false; // this.dataService.scaleKey = 1;
                    // this.dataService.horVert = true;
                    // this.dataService.formatWithHeight = 0.707;
                    // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                    // this.dataService.formatTopKey = -0.03;
                    // this.dataService.formatSizeSwich();

                    scale = 2.3; // scale = this.dataService.scaleKey;
                  }
                } else if (image1.height > 100 && image1.height < 1300) {
                  // this.dataService.formatVal = this.dataService.formatValue = 'A4';
                  if (image1.height / image1.width > 1.1) {
                    // this.dataService.horizontalVertical = true;
                    // this.dataService.horVert = false;
                    // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                    // this.dataService.formatWithHeight = 1.414;
                    // this.dataService.formatTopKey = 0.03;
                    // this.dataService.scaleKey = 1;
                    // this.dataService.formatSizeSwich();
                    scale = 1.3;
                  } else {
                    // this.dataService.horizontalVertical = false;
                    // this.dataService.scaleKey = 1;
                    // this.dataService.horVert = true;
                    // this.dataService.formatWithHeight = 0.707;
                    // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                    // this.dataService.formatTopKey = -0.06;
                    // this.dataService.formatSizeSwich();
                    scale = 2.3; // scale = this.dataService.scaleKey;
                  }
                }
              }

              _this9.dataService.calcEndPrise();

              var imageWidth = window.innerWidth - _this9.dataService.widthKey * window.innerWidth - 2 * ((window.innerWidth - _this9.dataService.widthKey * window.innerWidth) / _this9.b + (window.innerWidth - _this9.dataService.widthKey * window.innerWidth) / 40);
              var imageHeight = imageWidth * _this9.c;
              image1.set({
                // originX: 'center',
                // originY: 'center',
                // left: 110,
                // top: 50,
                quality: 1,
                angle: 0,
                padding: 0,
                cornerSize: _this9.canvas.width / 40,
                hasRotatingPoint: true
              });
              image1.scaleToWidth(imageWidth / scale);
              image1.scaleToHeight(imageHeight / scale);

              _this9.extend(image1, _this9.randomId());

              image1.filters.push(new fabric.Image.filters.ColorMatrix({
                matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
              }));

              _this9.canvas.add(image1);

              _this9.canvas.centerObjectH(image1);

              image1.top = _this9.canvas.width / 40 + _this9.canvas.width / _this9.b - _this9.canvas.width * _this9.a;
              image1.applyFilters();

              _this9.canvas.renderAll();

              $('#hue-value').on('change', function () {
                // console.log(this.siteLayout.removeColorValue);
                image1.filters = [];

                if (_this9.filterName == 'blackWhite') {
                  image1.filters.push(new fabric.Image.filters.BlackWhite());
                } else if (_this9.filterName == 'vintage') {
                  image1.filters.push(new fabric.Image.filters.Vintage());
                } else if (_this9.filterName == 'sepia') {
                  image1.filters.push(new fabric.Image.filters.Sepia());
                } else if (_this9.filterName == 'invert') {
                  image1.filters.push(new fabric.Image.filters.Invert());
                } else if (_this9.filterName == 'origin') {
                  image1.filters.push(new fabric.Image.filters.ColorMatrix({
                    matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
                  }));
                }

                image1.filters.push(new fabric.Image.filters.RemoveColor({
                  distance: _this9.props.distance
                }));
                image1.applyFilters();

                _this9.canvas.renderAll();
              });
              $('#saturation').on('change', function () {
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.Saturation({
                  saturation: _this9.siteLayout.saturation
                }));
                image1.applyFilters();

                _this9.canvas.renderAll();
              });
              $('#blur').on('change', function () {
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.Blur({
                  blur: _this9.siteLayout.blur
                }));
                image1.applyFilters();

                _this9.canvas.renderAll();
              });
              $('#contrast1').on('change', function () {
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.Contrast({
                  contrast: _this9.siteLayout.contrast
                }));
                image1.applyFilters();

                _this9.canvas.renderAll();
              });
              $('#noise').on('change', function () {
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.Noise({
                  noise: _this9.siteLayout.noise
                }));
                image1.applyFilters();

                _this9.canvas.renderAll();
              });
              $('#shadow').on('change', function () {
                var obj = _this9.canvas.getActiveObject();

                if (_this9.siteLayout.shadow === false) {
                  image1.shadow = null;
                } else if (_this9.siteLayout.shadow) {
                  image1.setShadow(_this9.shadowPNJ); // console.log('mmmm');
                } // this.canvas.toDataURL({
                //   format: 'png',
                //   quality: 1
                // });


                _this9.canvas.renderAll();
              }), $('#grayscale').on('click', function () {
                _this9.filterName = 'blackWhite';
                _this9.siteLayout.removeColorValue = 0;
                _this9.siteLayout.saturation = 0;
                _this9.siteLayout.blur = 0;
                _this9.siteLayout.noise = 0;
                _this9.siteLayout.contrast = 0;
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.BlackWhite());
                image1.applyFilters();

                _this9.canvas.renderAll();
              }), $('#vintage').on('click', function () {
                _this9.filterName = 'vintage';
                _this9.siteLayout.removeColorValue = 0;
                _this9.siteLayout.saturation = 0;
                _this9.siteLayout.blur = 0;
                _this9.siteLayout.noise = 0;
                _this9.siteLayout.contrast = 0;
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.Vintage());
                image1.applyFilters();

                _this9.canvas.renderAll();
              }), $('#sepia').on('click', function () {
                _this9.filterName = 'sepia';
                _this9.siteLayout.removeColorValue = 0;
                _this9.siteLayout.saturation = 0;
                _this9.siteLayout.blur = 0;
                _this9.siteLayout.noise = 0;
                _this9.siteLayout.contrast = 0;
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.Sepia());
                image1.applyFilters(); // console.log(image1);
                //.filters[0].matrix[0]

                _this9.canvas.renderAll();
              }), $('#invert').on('click', function () {
                _this9.filterName = 'invert';
                _this9.siteLayout.removeColorValue = 0;
                _this9.siteLayout.saturation = 0;
                _this9.siteLayout.blur = 0;
                _this9.siteLayout.noise = 0;
                _this9.siteLayout.contrast = 0;
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.Invert());
                image1.applyFilters(); // console.log(image1);
                //.filters[0].matrix[0]

                _this9.canvas.renderAll();
              }), $('#origin').on('click', function () {
                _this9.filterName = 'origin';
                _this9.siteLayout.removeColorValue = 0;
                _this9.siteLayout.saturation = 0;
                _this9.siteLayout.blur = 0;
                _this9.siteLayout.noise = 0;
                _this9.siteLayout.contrast = 0;
                image1.filters = [];
                image1.filters.push(new fabric.Image.filters.ColorMatrix({
                  matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
                }));
                image1.applyFilters();

                _this9.canvas.renderAll();
              }), _this9.selectItemAfterAdded(image1);
              setTimeout(function () {
                _this9.canvas.discardActiveObject().renderAll();
              }, 1500);
            });
          }
        } // Block "Add figure"

      }, {
        key: "addFigure",
        value: function addFigure(figure) {
          var _this10 = this;

          this.canvasCount += 1;
          console.log(this.canvasCount, 'figure');
          $(document).on('click', ".deleteBtn", function (event) {
            event.stopImmediatePropagation();
            _this10.canvasCount -= 1;

            var activeObject = _this10.canvas.getActiveObject();

            var activeGroup = _this10.canvas.getActiveObjects(); // console.log(this.canvasCount);


            if (_this10.canvasCount === 0) {
              _this10.siteLayout.firstImage = 0; // this.siteLayout.isOpasity=true;

              $('.owl-nav').show();
              $(".canvas").css("z-index", 0);
              _this10.disableBtn = false;
              _this10.siteLayout.toggle = false;
            }

            if (activeObject) {
              _this10.canvas.remove(activeObject);

              $(".deleteBtn").remove(); // this.textString = '';
            } else if (activeGroup) {
              _this10.canvas.discardActiveObject();

              var self = _this10;
              activeGroup.forEach(function (object) {
                self.canvas.remove(object);
              });
            }
          });
          var add;

          switch (figure) {
            case 'rectangle':
              add = new fabric.Rect({
                cornerSize: 11,
                padding: 0,
                width: 200,
                height: 100,
                left: 20,
                top: 50,
                angle: 0,
                fill: '#3f51b5'
              });
              break;

            case 'square':
              add = new fabric.Rect({
                cornerSize: 11,
                padding: 0,
                width: 100,
                height: 100,
                left: 20,
                top: 20,
                angle: 0,
                fill: '#4caf50'
              });
              break;

            case 'triangle':
              add = new fabric.Triangle({
                cornerSize: 11,
                padding: 0,
                width: 100,
                height: 100,
                left: 20,
                top: 20,
                fill: '#2196f3'
              });
              break;

            case 'circle':
              add = new fabric.Circle({
                cornerSize: 11,
                padding: 0,
                radius: 50,
                left: 20,
                top: 20,
                fill: '#ff5722'
              });
              break;
          }

          $('#shadow').on('click', function () {
            // console.log('figure');
            var obj = _this10.canvas.getActiveObject();

            if (!_this10.siteLayout.shadow) {
              add.shadow = null;
            } else if (_this10.siteLayout.shadow) {
              add.setShadow(_this10.shadowFigur);
            } // this.canvas.toDataURL({
            //   format: 'png',
            //   quality: 1
            // });


            _this10.canvas.renderAll();
          }), this.extend(add, this.randomId());
          this.canvas.add(add);
          this.canvas.centerObjectH(add);
          add.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
          this.selectItemAfterAdded(add);
        }
        /*Canvas*/

      }, {
        key: "readUrl",
        value: function readUrl(event) {
          var _this11 = this;

          if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (readerEvent) {
              _this11.url = readerEvent.target.result;
            };

            reader.readAsDataURL(event.target.files[0]);
          }
        }
      }, {
        key: "removeWhite",
        value: function removeWhite(url) {
          this.url = '';
        }
      }, {
        key: "moveWithFormat",
        value: function moveWithFormat(scaleKey, scaleBlock) {
          console.log(this.a, this.b, this.c, 'scale', scaleBlock, this.d, scaleKey);
          this.scaleKey = 0;
          this.scaleKey = this.d;

          if (this.canvasCount !== 0) {
            var _this$canvas;

            this.canvas.discardActiveObject().renderAll();
            var sel = new fabric.Group(this.canvas.getObjects(), {
              canvas: this.canvas
            });

            (_this$canvas = this.canvas).remove.apply(_this$canvas, _toConsumableArray(this.canvas.getObjects())); // sel.setControlsVisibility({
            //   ml: false, //top left
            //   mr: false, //top right
            //   mb: false, //bottom left
            //   mt: false //bottom right
            // });


            sel.lockScalingFlip = true; // sel.uniformScaling = true;

            this.canvas.add(sel);
            var formatWidth = window.innerWidth - this.dataService.widthKey * window.innerWidth - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
            var formatHeight = formatWidth * this.c;
            this.canvasCount = 1;
            this.intCountText = 0;

            if (scaleBlock) {
              if (this.dataService.horVert) {
                if (this.dataService.horizontalVertical) {
                  if (this.objectType) {
                    sel.scaleToWidth(formatWidth * scaleKey / 1.3);
                    sel.scaleToWidth(formatHeight * scaleKey / 1.3);
                  } else {
                    sel.scaleToWidth(formatWidth * scaleKey / 1);
                    sel.scaleToHeight(formatHeight * scaleKey / 1);
                  }
                } else {
                  if (this.objectType) {
                    sel.scaleToWidth(formatWidth * scaleKey / 0.8);
                    sel.scaleToWidth(formatHeight * scaleKey / 0.8);
                  } else {
                    sel.scaleToWidth(formatWidth * scaleKey / 1);
                    sel.scaleToHeight(formatHeight * scaleKey / 1);
                  }
                }
              } else {
                if (this.dataService.horizontalVertical) {
                  if (this.objectType) {
                    sel.scaleToWidth(formatWidth * scaleKey / 6);
                    sel.scaleToWidth(formatHeight * scaleKey / 6);
                  } else {
                    sel.scaleToWidth(formatWidth * scaleKey / 4.8);
                    sel.scaleToHeight(formatHeight * scaleKey / 4.8);
                  }
                } else {
                  if (this.objectType) {
                    sel.scaleToWidth(formatWidth * scaleKey / 3.5);
                    sel.scaleToWidth(formatHeight * scaleKey / 3.5);
                  } else {
                    sel.scaleToWidth(formatWidth * scaleKey / 4.8);
                    sel.scaleToHeight(formatHeight * scaleKey / 4.8);
                  }
                }
              } // sel.With = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
              // console.log('editor', this.d);
              // sel.Height = sel.width * this.c;
              // sel.setCoords();
              // sel.saveState();
              // this.canvas.renderAll();

            }

            sel.minScaleLimit = 0.02; // sel.lockScalingY = true;
            // this.canvas.centerObjectH(sel);
            // sel.top = this.canvas.height / 3.7;

            this.canvas.setActiveObject(sel);
            var matrix = sel.calcTransformMatrix();
            var imageCoordx = matrix[4];
            var imageCoordy = matrix[5];
            this.canvas.centerObjectH(sel);
            var top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
            sel.top = top;
            console.log('momos', scaleBlock); // this.canvas.centerObjectH(sel);

            sel.set({
              cornerSize: this.canvas.width / 40
            }); // sel.minScaleLimit()
            // this.canvas.getActiveObject().left += 10;
            // this.canvas.getActiveObject().setCoords();
            // this.canvas.getActiveObject().saveState();
            // this.canvas.renderAll();

            $(".deleteBtn").remove();
            $(".distance").remove();
            $(".distanceY").remove(); // console.log('added');
            // addDistancePoint(imageCoordy, imageCoordx);

            this.addArrow(imageCoordy, 2);
            $(".distanceY").remove(); // addDistancePoint(imageCoordy, imageCoordx);

            this.addArrowUp(imageCoordx, 2);
            this.addDeleteBtn(sel.oCoords.mb.x, sel.oCoords.mb.y);
            sel.setCoords();
            sel.saveState();
            this.canvas.renderAll();
          }
        }
      }, {
        key: "cleanSelect",
        value: function cleanSelect() {
          var _this$canvas2;

          // this.canvas.discardActiveObject().renderAll();
          // var Group = new fabric.Group([...this.canvas.getObjects()]);
          // this.canvas.add(Group);
          // this.selectItemAfterAdded(this.canvas.item(0));
          // this.canvas.renderAll();
          this.canvas.discardActiveObject().renderAll();
          var sel = new fabric.Group(this.canvas.getObjects(), {
            canvas: this.canvas
          });

          (_this$canvas2 = this.canvas).remove.apply(_this$canvas2, _toConsumableArray(this.canvas.getObjects()));

          this.canvas.add(sel);
          this.canvas.centerObjectH(sel);
          sel.top = this.canvas.height / 3.7;
          this.canvas.setActiveObject(sel);
          this.canvas.renderAll(); // this.canvas.on({
          //   'object:scaling': onChange
          // })
          // function onChange(obj) {
          //   var 
          //     group = obj.target,
          //     scaleX = obj.target.item().width / group.getWidth(),
          //     scaleY = obj.target.item().height / group.getHeight();
          //     obj.target.item().setScaleX(scaleX);
          //     obj.target.item().setScaleY(scaleY);
          // }
        }
      }, {
        key: "selectItemAfterAdded",
        value: function selectItemAfterAdded(obj) {
          // this.getOpacity();
          this.canvas.discardActiveObject().renderAll();
          this.canvas.setActiveObject(obj);
        }
      }, {
        key: "setCanvasFill",
        value: function setCanvasFill() {
          // if (!this.props.canvasImage) {
          this.canvas.backgroundColor = this.props.canvasFill;
          this.canvas.renderAll();
          console.log(this.props.canvasFill);
          var inputProductColor = this.siteLayout.inputColor.nativeElement;
          inputProductColor.style.backgroundColor = this.props.canvasFill;
          inputProductColor.value = this.props.canvasFill; // this.siteLayout.IMG.nativeElement.innerHTML.backgroundColor = this.props.canvasFill;
          // this.canvas1.backgroundColor = this.props.canvasFill;
          // this.canvas1.renderAll();
          // }
        }
      }, {
        key: "drawFill",
        value: function drawFill() {
          // if (!this.props.canvasImage) {
          // this.canvas.backgroundColor = this.props.canvasFill;
          this.canvas.renderAll(); // this.canvas1.renderAll();
          // }
        }
      }, {
        key: "extend",
        value: function extend(obj, id) {
          obj.toObject = function (toObject) {
            return function () {
              return fabric.util.object.extend(toObject.call(this), {
                id: id
              });
            };
          }(obj.toObject);
        }
      }, {
        key: "productsTypeColor",
        value: function productsTypeColor() {
          if (this.siteLayout.allColors === true) {
            this.props.canvasFill = this.siteLayout.arrColor[0];
            this.canvas.backgroundColor = this.siteLayout.arrColor[0];
          } else if (this.siteLayout.allColors === false) {
            this.props.canvasFill = this.siteLayout.productBrandColors[0];
            this.canvas.backgroundColor = this.siteLayout.productBrandColors[0]; // this.canvas.renderAll();
          }
        }
      }, {
        key: "setCanvasImage",
        value: function setCanvasImage() {
          var image = this.props.canvasImage;
          this.canvas.setBackgroundImage(image, this.canvas.renderAll.bind(this.canvas), {
            opacity: 1,
            angle: 0,
            left: 0,
            top: 0,
            originX: 'left',
            originY: 'top',
            crossOrigin: 'anonymous',
            scaleX: this.canvas.width / 360,
            scaleY: this.canvas.height / 460
          }); // const square = new fabric.Rect({
          //   width: this.canvas.width - 2 * (this.canvas.width / 4.37 + this.canvas.width / 40),
          //   height: this.canvas.height - 2 * (this.canvas.width / 4.37 + this.canvas.width / 40),
          //   left: this.canvas.width / 40 + this.canvas.width / 4.37,
          //   top: this.canvas.width / 40 + this.canvas.width / 4.37,
          //   // borderColor: '#000',
          //   // fill: '#000',
          //   // Color: '#000',
          //   hasControls: false,
          //   lockMovementX: true,
          //   lockMovementY: true,
          //   // strokeWidth: 5,
          //   strokeDashArray: [7],
          //   stroke: '#474747',
          //   strokeWidth: 2,
          //   fill: 'rgba(0,0,0,0)',
          //   selectable: false,
          //   evented: false,
          // });
          // this.canvas.add(square);
          // // this.canvasCount -=1;
          // // this.canvas.renderAll();
          // // this.canvas.setActiveObject(square);
        }
      }, {
        key: "randomId",
        value: function randomId() {
          return Math.floor(Math.random() * 999999) + 1;
        }
      }, {
        key: "addArrowUp",
        value: function addArrowUp(o, p) {
          var arrow = '<img src="../assets/img/output-onlinepngtools-up.png" class="distance" style="position:absolute; top:' + p + 'px; left:' + (o - 5) + 'px; cursor:crosshair; width:10px; height:40px;"/>';
          $(".canvas-container").append(arrow);
          this.canvas.renderAll();
        }
      }, {
        key: "addArrow",
        value: function addArrow(o, p) {
          var arrow = '<img src="../assets/img/green-arrow-clipart-2.png" class="distance" style="position:absolute; top:' + o + 'px; left:' + p + 'px; cursor:crosshair; width:40px; height:10px;"/>';
          $(".canvas-container").append(arrow);
          this.canvas.renderAll();
        }
      }, {
        key: "addDeleteBtn",
        value: function addDeleteBtn(x, y) {
          $(".deleteBtn").remove();
          var btnLeft = x - this.left;
          var btnTop = y + this.top;
          var deleteBtn = '<img src="../assets/img/remove-icon-png-15.png" class="deleteBtn" style="position:absolute;top:' + btnTop + 'px;left:' + btnLeft + 'px;cursor:pointer;width:25px;height:25px;"/>';
          $(".canvas-container").append(deleteBtn);
          this.canvas.renderAll();
        }
        /*------------------------Global actions for element------------------------*/

      }, {
        key: "getActiveStyle",
        value: function getActiveStyle(styleName, object) {
          object = object || this.canvas.getActiveObject();

          if (!object) {
            return '';
          }

          if (object.getSelectionStyles && object.isEditing) {
            return object.getSelectionStyles()[styleName] || '';
          } else {
            return object[styleName] || '';
          }
        }
      }, {
        key: "setActiveStyle",
        value: function setActiveStyle(styleName, value, object) {
          object = object || this.canvas.getActiveObject();

          if (!object) {
            return;
          }

          if (object.setSelectionStyles && object.isEditing) {
            var style = {};
            style[styleName] = value;

            if (typeof value === 'string') {
              if (value.includes('underline')) {
                object.setSelectionStyles({
                  underline: true
                });
              } else {
                object.setSelectionStyles({
                  underline: false
                });
              }

              if (value.includes('overline')) {
                object.setSelectionStyles({
                  overline: true
                });
              } else {
                object.setSelectionStyles({
                  overline: false
                });
              }

              if (value.includes('line-through')) {
                object.setSelectionStyles({
                  linethrough: true
                });
              } else {
                object.setSelectionStyles({
                  linethrough: false
                });
              }
            }

            object.setSelectionStyles(style);
            object.setCoords();
          } else {
            if (typeof value === 'string') {
              if (value.includes('underline')) {
                object.set('underline', true);
              } else {
                object.set('underline', false);
              }

              if (value.includes('overline')) {
                object.set('overline', true);
              } else {
                object.set('overline', false);
              }

              if (value.includes('line-through')) {
                object.set('linethrough', true);
              } else {
                object.set('linethrough', false);
              }
            }

            object.set(styleName, value);
          }

          object.setCoords();
          this.canvas.renderAll();
        }
      }, {
        key: "getActiveProp",
        value: function getActiveProp(name) {
          var object = this.canvas.getActiveObject();

          if (!object) {
            return '';
          }

          return object[name] || '';
        }
      }, {
        key: "setActiveProp",
        value: function setActiveProp(name, value) {
          var object = this.canvas.getActiveObject();

          if (!object) {
            return;
          }

          object.set(name, value).setCoords();
          this.canvas.renderAll();
        }
      }, {
        key: "clone",
        value: function clone() {
          // this.defoultUpdate()
          var activeObject = this.canvas.getActiveObject();
          var activeGroup = this.canvas.getActiveObjects();

          if (activeObject) {
            var clone;

            switch (activeObject.type) {
              case 'rect':
                clone = new fabric.Rect(activeObject.toObject()); // this.canvasCount += 1;
                // console.log(this.canvasCount);

                break;

              case 'circle':
                clone = new fabric.Circle(activeObject.toObject()); // this.canvasCount += 1;
                // console.log(this.canvasCount);

                break;

              case 'triangle':
                clone = new fabric.Triangle(activeObject.toObject()); // this.canvasCount += 1;
                // console.log(this.canvasCount);

                break;

              case 'i-text':
                clone = new fabric.IText('', activeObject.toObject()); // this.canvasCount += 1;
                // console.log(this.canvasCount);

                this.canvas.getActiveObject();
                break;

              case 'image':
                clone = fabric.util.object.clone(activeObject); // this.canvasCount += 1;
                // console.log(this.canvasCount);

                break;
            }

            if (clone) {
              this.canvas.add(clone);
              this.bringToFront();
              this.canvasCount += 1;
              console.log(this.canvasCount, 'figure'); // this.selectItemAfterAdded(clone);
              // this.defoultUpdate();

              this.canvas.centerObjectH(clone);
              clone.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
              this.canvas.getActiveObject();
            }
          }
        }
      }, {
        key: "getId",
        value: function getId() {
          this.props.id = this.canvas.getActiveObject().toObject().id;
          this.canvas.toSVG();
        }
      }, {
        key: "setId",
        value: function setId() {
          var val = this.props.id;
          var complete = this.canvas.getActiveObject().toObject(); // console.log(complete);

          this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
          };
        }
      }, {
        key: "getDistance",
        value: function getDistance() {
          this.props.distance = this.getActiveStyle('distance', null) * 10;
        }
      }, {
        key: "setDistance",
        value: function setDistance() {
          this.setActiveStyle('distance', parseInt(this.props.distance, 10) / 100, null);
        }
      }, {
        key: "getOpacity",
        value: function getOpacity() {
          this.props.opacity = this.getActiveStyle('opacity', null) * 100;
        }
      }, {
        key: "setOpacity",
        value: function setOpacity() {
          this.setActiveStyle('opacity', parseInt(this.props.opacity, 10) / 100, null);
        }
      }, {
        key: "getFill",
        value: function getFill() {
          this.props.fill = this.getActiveStyle('fill', null);
        }
      }, {
        key: "setFill",
        value: function setFill() {
          this.setActiveStyle('fill', this.props.fill, null);
        }
      }, {
        key: "getCharSpacing",
        value: function getCharSpacing() {
          this.props.charSpacing = this.getActiveStyle('charSpacing', null);
        }
      }, {
        key: "setCharSpacing",
        value: function setCharSpacing() {
          this.setActiveStyle('charSpacing', this.props.charSpacing, null);
        }
      }, {
        key: "getFontSize",
        value: function getFontSize() {
          this.props.fontSize = this.getActiveStyle('fontSize', null);
        }
      }, {
        key: "setFontSize",
        value: function setFontSize() {
          this.setActiveStyle('fontSize', parseInt(this.props.fontSize, 10), null);
        }
      }, {
        key: "getBold",
        value: function getBold() {
          this.props.fontWeight = this.getActiveStyle('fontWeight', null);
        }
      }, {
        key: "setBold",
        value: function setBold() {
          this.props.fontWeight = !this.props.fontWeight;
          this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
        }
      }, {
        key: "setFontStyle",
        value: function setFontStyle() {
          this.props.fontStyle = !this.props.fontStyle;

          if (this.props.fontStyle) {
            this.setActiveStyle('fontStyle', 'italic', null);
          } else {
            this.setActiveStyle('fontStyle', 'normal', null);
          }
        }
      }, {
        key: "getTextDecoration",
        value: function getTextDecoration() {
          this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
        }
      }, {
        key: "setTextDecoration",
        value: function setTextDecoration(value) {
          var iclass = this.props.TextDecoration;

          if (iclass.includes(value)) {
            iclass = iclass.replace(RegExp(value, 'g'), '');
          } else {
            iclass += " ".concat(value);
          }

          this.props.TextDecoration = iclass;
          this.setActiveStyle('textDecoration', this.props.TextDecoration, null);
        }
      }, {
        key: "hasTextDecoration",
        value: function hasTextDecoration(value) {
          return this.props.TextDecoration.includes(value);
        }
      }, {
        key: "getTextAlign",
        value: function getTextAlign() {
          this.props.textAlign = this.getActiveProp('textAlign');
        }
      }, {
        key: "setTextAlign",
        value: function setTextAlign(value) {
          this.props.textAlign = value;
          this.setActiveProp('textAlign', this.props.textAlign);
        }
      }, {
        key: "getFontFamily",
        value: function getFontFamily() {
          this.props.fontFamily = this.getActiveProp('fontFamily');
        }
      }, {
        key: "setFontFamily",
        value: function setFontFamily() {
          this.setActiveProp('fontFamily', this.props.fontFamily);
        }
        /*System*/

      }, {
        key: "removeSelected",
        value: function removeSelected() {
          // if (this.canvasCount === 1 && this.objectTypeImage === 'image') {
          //   this.canvas.remove(...this.canvas.getObjects());
          //   $(".deleteBtn").remove();
          //   $(".distance").remove();
          //   $('#shadowSVG').prop('checked', false);
          //   this.siteLayout.shadowSVG = false;
          //   $('.owl-nav').show();
          //   $(".canvas").css("z-index", 0);
          //   this.siteLayout.toggle = false;
          //   this.disableBtn = false;
          //   this.canvasCount -= 1;
          // }
          // console.log(this.canvasCount);
          this.objectType = false; // this.dataService.scaleKey = 1;

          this.props.diametr = 300;

          if (this.canvas.getActiveObject().type === 'i-text') {
            this.intCountText -= 1; // console.log(this.intCountText);
          }

          var activeObject = this.canvas.getActiveObject();
          var activeGroup = this.canvas.getActiveObjects();
          this.canvasCount -= 1;
          this.siteLayout.isCarouselOpen = true; // this.siteLayout.firstImage = 2;

          if (this.canvasCount === 0) {
            $('#shadowSVG').prop('checked', false);
            this.siteLayout.shadowSVG = false;
            $('.owl-nav').show();
            $(".canvas").css("z-index", 0);
            this.siteLayout.toggle = false;
            this.disableBtn = false;
          }

          if (activeObject) {
            this.canvas.remove(activeObject); // this.textString = '';
          } else if (activeGroup) {
            // console.log('group');
            this.canvas.discardActiveObject();
            var self = this;
            activeGroup.forEach(function (object) {
              self.canvas.remove(object);
            });
          }
        }
      }, {
        key: "bringToFront",
        value: function bringToFront() {
          var activeObject = this.canvas.getActiveObject();
          var activeGroup = this.canvas.getActiveObjects();

          if (activeObject) {
            activeObject.bringToFront(); // this.canvas.renderAll()
            // this.cleanSelect();
            // activeObject.opacity = 1;
          } else if (activeGroup) {
            this.canvas.discardActiveObject();
            activeGroup.forEach(function (object) {
              object.bringToFront(); // this.canvas.renderAll()
            });
          }
        }
      }, {
        key: "sendToBack",
        value: function sendToBack() {
          var _this12 = this;

          var activeObject = this.canvas.getActiveObject();
          var activeGroup = this.canvas.getActiveObjects();

          if (activeObject) {
            this.canvas.sendToBack(activeObject); // activeObject.sendToBack();

            this.canvas.renderAll(); // this.cleanSelect();
            // activeObject.opacity = 1;
          } else if (activeGroup) {
            this.canvas.discardActiveObject();
            activeGroup.forEach(function (object) {
              object.sendToBack();

              _this12.canvas.renderAll();
            });
          }
        }
      }, {
        key: "confirmClear",
        value: function confirmClear() {
          if (confirm('Are you sure?')) {
            var _this$canvas3;

            // location.reload(); 
            (_this$canvas3 = this.canvas).remove.apply(_this$canvas3, _toConsumableArray(this.canvas.getObjects()));

            this.canvasCount = 0;
            $('.owl-nav').show(); // $(".canvas").css("z-index", 0);

            this.disableBtn = false;
            this.siteLayout.toggle = false; // this.canvas.clear();
            // $(".distance").remove();
          }
        }
      }, {
        key: "rasterize",
        value: function rasterize() {
          var image = new Image(360, 460); // const w = window.open('');
          // w.document.write(this.canvas.toSVG());

          image.src = this.canvas.toDataURL({
            format: 'png',
            multiplier: 4
          }); // this.setCanvasImage();
          // const w = window.open();
          // w.document.write(
          //   `<div style='margin-top: 100px'>${image.outerHTML}</div>` 
          // // this.hello.nativeElement.innerHTML,
          // );

          this.reqImage = image.src;
          this.orderDatas.imageSrc = image.src;
          this.canvas.renderAll();
          var lastColor = this.props.canvasFill; // this.saveCanvasToJSON();

          this.canvas.backgroundImage = null;
          this.canvas.backgroundColor = null;
          this.canvas.renderAll();
          this.canvas.backgroundImage = null; // this.canvas.remove(...this.canvas.getObjects())
          // console.log(this.canvas.toSVG());

          var svgUrll;

          switch (this.props.textCurved) {
            case 1:
              svgUrll = this.canvas.toSVG(); // console.log(this.canvas.toSVG());

              break;

            case 2:
              svgUrll = this.canvas.toSVG().toString().replace(/<tspan/g, "<textPath xlink:href='#urve'><tspan").replace(/tspan>/g, "tspan></textPath>").replace(/tspan x="/g, 'tspan x="0*').replace("</defs>", "</defs> ".concat(this.path.toSVG())).replace('style="stroke', 'id = "urve" style="stroke').replace("</defs>", "</defs> ".concat(this.path.toSVG())).replace('style="stroke', 'id = "urve1" style="stroke');
              break;
          } // if (this.props.textCurved === 1) {
          //   svgUrll = this.canvas.toSVG();
          // } else if () {
          //   svgUrll = this.canvas.toSVG().toString().replace(/<tspan/i, "<textPath xlink:href='#urve'><tspan").replace(/tspan>/i, "tspan></textPath>").replace(/tspan x="/i, 'tspan x="0*').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve" style="stroke').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve1" style="stroke');
          // }
          // var svgUrl = this.canvas.toSVG().toString().replace(/<tspan/i, "<textPath xlink:href='#urve'><tspan").replace(/tspan>/i, "tspan></textPath>").replace(/tspan x="/i, 'tspan x="0*').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve" style="stroke').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve1" style="stroke');
          // var svgUrl = this.canvas.toSVG().replace("<defs>", '').replace("</defs>", this.test);
          // console.log(svgUrl);
          // console.log(svgUrl);


          var svg_image = "data:image/svg+xml," + encodeURIComponent(svgUrll);
          this.reqImage1 = svg_image; //  this.canvas.getActiveObject().width;
          //  this.canvas.getActiveObject().height;
          // console.log(link.outerHTML);

          this.loadCanvasFromJSON();
          this.setCanvasImage(); // this.setCanvasImage1();
          // this.canvas.backgroundColor = lastColor;

          var CANVAS = localStorage.getItem('Canvas');
        }
      }, {
        key: "rasterizeSVG",
        value: function rasterizeSVG() {
          var image = new Image(360, 460); // image.scaleToWidth(150);
          // image.scaleToHeight(150);

          var w = window.open(''); // this.canvas.toSVG()

          w.document.write(this.canvas.toSVG());
          var svgBlob = new Blob([this.canvas.toSVG()], {
            type: "image/svg+xml;charset=utf-8"
          });
          this.canvas.renderAll();
          var svgUrl = URL.createObjectURL(svgBlob);
          var link = document.createElement('a');
          link.href = svgUrl;
          link.download = image.outerHTML;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); // return 'data:image/svg+xml;utf8,' + encodeURIComponent(this.canvas.toSVG());
          //stackowerflow
          // var svgData = $("#figureSvg")[0].outerHTML;
          // var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
          // var svgUrl = URL.createObjectURL(svgBlob);
          // var downloadLink = document.createElement("a");
          // downloadLink.href = svgUrl;
          // downloadLink.download = "newesttree.svg";
          // document.body.appendChild(downloadLink);
          // downloadLink.click();
          // document.body.removeChild(downloadLink);
        }
      }, {
        key: "saveCanvasToJSON",
        value: function saveCanvasToJSON() {
          var json = JSON.stringify(this.canvas); // localStorage.setItem('Kanvas', json);
          // console.log('json');
          // console.log(json);
        }
      }, {
        key: "loadCanvasFromJSON",
        value: function loadCanvasFromJSON() {// const CANVAS = localStorage.getItem('Kanvas');
          // console.log('CANVAS');
          // console.log(CANVAS);
          // // and load everything from the same json
          // this.canvas.loadFromJSON(CANVAS, () => {
          //   console.log('CANVAS untar');
          //   console.log(CANVAS);
          //   // making sure to render canvas at the end
          //   this.canvas.renderAll();
          //   // and checking if object's "name" is preserved
          //   console.log('this.canvas.item(0).name');
          //   console.log(this.canvas);
          // });
        }
      }, {
        key: "rasterizeJSON",
        value: function rasterizeJSON() {
          this.json = JSON.stringify(this.canvas, null, 2);
        }
      }, {
        key: "resetPanels",
        value: function resetPanels() {
          this.textEditor = false;
          this.imageEditor = false;
          this.figureEditor = false;
        }
      }]);

      return EditorPicComponent;
    }();

    EditorPicComponent.ɵfac = function EditorPicComponent_Factory(t) {
      return new (t || EditorPicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_4__["OrderDatasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_products_service__WEBPACK_IMPORTED_MODULE_5__["ProdutsService"]));
    };

    EditorPicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditorPicComponent,
      selectors: [["app-editor-pic"]],
      viewQuery: function EditorPicComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.htmlCanvas = _t.first);
        }
      },
      decls: 3,
      vars: 0,
      consts: [[3, "resize"], [1, "mobile"], ["htmlCanvas", ""]],
      template: function EditorPicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function EditorPicComponent_Template_div_resize_0_listener($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media only screen and (max-width: 600px) {\n  .mobile[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    border: 0px dashed #ffffff;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .mobile[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    border: 0px dashed #ffffff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yLXBpYy9EOlxcQW5ndWxhclxcQ29weSBvZiBvcmlnaW4gcHJvamVjdCBULXNoaXJ0X2xhc3RcXHQtc2hpcnRcXHQtc2hpcnQtYmFja2VuZFxcdC1zaGlydC1mcm9udGVuZC9zcmNcXGFwcFxcZWRpdG9yLXBpY1xcZWRpdG9yLXBpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdG9yLXBpYy9lZGl0b3ItcGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFBVSxlQUFlO0lBQUUsMEJBQTBCO0VDRXJEO0FBQ0Y7O0FEQUE7RUFDRTtJQUFVLGVBQWU7SUFBRSwwQkFBMEI7RUNLckQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci1waWMvZWRpdG9yLXBpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vYmlsZSB7IG1hcmdpbi10b3A6IDBweDsgYm9yZGVyOiAwcHggZGFzaGVkICNmZmZmZmY7fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5tb2JpbGUgeyBtYXJnaW4tdG9wOiAwcHg7IGJvcmRlcjogMHB4IGRhc2hlZCAjZmZmZmZmO31cclxufVxyXG5cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYm9yZGVyOiAwcHggZGFzaGVkICNmZmZmZmY7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1vYmlsZSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlcjogMHB4IGRhc2hlZCAjZmZmZmZmO1xuICB9XG59XG4iXX0= */"]
    });
    EditorPicComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EditorPicComponent,
      factory: EditorPicComponent.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorPicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editor-pic',
          templateUrl: './editor-pic.component.html',
          styleUrls: ['./editor-pic.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_4__["OrderDatasService"]
        }, {
          type: _shared_layouts_servises_products_service__WEBPACK_IMPORTED_MODULE_5__["ProdutsService"]
        }];
      }, {
        htmlCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['htmlCanvas']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/editor-pic/editor-pic.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/editor-pic/editor-pic.module.ts ***!
    \*************************************************/

  /*! exports provided: EditorPicModule */

  /***/
  function srcAppEditorPicEditorPicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorPicModule", function () {
      return EditorPicModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var _editor_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./editor-pic.component */
    "./src/app/editor-pic/editor-pic.component.ts");

    var EditorPicModule = function EditorPicModule() {
      _classCallCheck(this, EditorPicModule);
    };

    EditorPicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EditorPicModule
    });
    EditorPicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EditorPicModule_Factory(t) {
        return new (t || EditorPicModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorPicModule, {
        declarations: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"]],
        exports: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorPicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"]],
          exports: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login-page/login-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-page/login-page.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/classes/material.service */
    "./src/app/shared/classes/material.service.ts");
    /* harmony import */


    var _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/layouts/servises/services */
    "./src/app/shared/layouts/servises/services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginPageComponent_span_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must not be empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_span_8_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_span_8_span_1_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_span_8_span_2_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["required"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["email"]);
      }
    }

    function LoginPageComponent_span_13_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must not be empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_span_13_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password has been more than ", ctx_r5.form.get("password").errors["minlength"]["requiredLength"], " simbols");
      }
    }

    function LoginPageComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_span_13_span_1_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_span_13_span_2_Template, 2, 1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["required"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["minlength"] && ctx_r1.form.get("password").errors["minlength"]["requiredLength"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "invalid": a0
      };
    }; // import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/mate'


    var LoginPageComponent = /*#__PURE__*/function () {
      function LoginPageComponent(auth, router, route) {
        _classCallCheck(this, LoginPageComponent);

        this.auth = auth;
        this.router = router;
        this.route = route;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
          });
          this.route.queryParams.subscribe(function (params) {
            //  this.router.navigate(['/login'], {
            //   queryParams: {
            //     registered: true
            //   }
            // }),
            console.log(params['registered']);

            if (params['registered']) {
              console.log(params);

              _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat('Created. Now you can login'); // alert('Created. Now you can login');

            } else if (params['accessDenied']) {
              _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat('first log in to the system'); // alert('first log in to the system ');

            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this13 = this;

          this.form.disable();
          this.aSub = this.auth.login(this.form.value).subscribe(function () {
            return _this13.router.navigate(['/main'], {
              queryParams: {
                registered: true
              }
            });
          }, function (error) {
            console.log(error);
            alert(error.error.message);

            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat(error.error.message);

            _this13.form.enable();
          });
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 17,
      vars: 10,
      consts: [[1, "card", 3, "formGroup", "ngSubmit"], [1, "card-content"], [1, "card-title"], [1, "input-field"], ["id", "email", "type", "email", "formControlName", "email", "required", "", 3, "ngClass"], ["for", "email"], ["class", "helper-text red-text", 4, "ngIf"], ["id", "password", "type", "password", "formControlName", "password", "required", "", 3, "ngClass"], ["for", "password"], [1, "card-action"], ["data-position", "bottom", "type", "submit", 1, "modal-action", "btn", "waves-effect", 3, "disabled"], [1, "helper-text", "red-text"], [4, "ngIf"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login to the sistem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginPageComponent_span_8_Template, 3, 2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginPageComponent_span_13_Template, 3, 2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/layouts/servises/services */
    "./src/app/shared/layouts/servises/services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/layouts/servises/order-datas.service */
    "./src/app/shared/layouts/servises/order-datas.service.ts");
    /* harmony import */


    var _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/layouts/servises/data.service */
    "./src/app/shared/layouts/servises/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainPageComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Design ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainPageComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your Style ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainPageComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_7_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.redirectPreview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Preview ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainPageComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_upward");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(service, router, order, data) {
        _classCallCheck(this, MainPageComponent);

        this.service = service;
        this.router = router;
        this.order = order;
        this.data = data;
        this.preview = false;
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.site.isCarouselOpen);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.service.logout();
        }
      }, {
        key: "redirectPreview",
        value: function redirectPreview() {
          this.preview = false;
          this.router.navigate(['/main']);
          setTimeout(function () {
            location.reload();
          }, 10);
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_3__["OrderDatasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      decls: 10,
      vars: 4,
      consts: [[1, "full-width"], [1, "row"], [1, "toolNav1", "col", "s12", "m12", "l12", "xl12"], [2, "height", "28px"], [1, "nav-wrapper", "#e8eaf6", "indigo", "lighten-4"], ["class", "brand-logo hide-on-small-only", "style", "margin-left: 58%; position: absolute; z-index: 0; \n                        top: 50%;\n                        -ms-transform: translateY(-50%);\n                        transform: translateY(-50%);", 4, "ngIf"], ["class", "brand-logo hide-on-small-only", "style", "margin-left: 67%; position: absolute; z-index: 0;\n                        top: 50%;\n                        -ms-transform: translateY(-50%);\n                        transform: translateY(-50%);", 4, "ngIf"], ["class", " brand-logo left", "style", "margin-top: -18px; cursor: pointer;\n                        top: 50%;\n                        -ms-transform: translateY(-50%);\n                        transform: translateY(-50%);", 3, "click", 4, "ngIf"], ["id", "nav-mobile", "class", "brand-logo right", "style", "cursor: pointer; \n                        top: 50%;\n                        -ms-transform: translateY(-50%);\n                        transform: translateY(-50%);", "routerLink", "/login", 3, "click", 4, "ngIf"], [1, "brand-logo", "hide-on-small-only", 2, "margin-left", "58%", "position", "absolute", "z-index", "0", "top", "50%", "-ms-transform", "translateY(-50%)", "transform", "translateY(-50%)"], [1, "brand-logo", "hide-on-small-only", 2, "margin-left", "67%", "position", "absolute", "z-index", "0", "top", "50%", "-ms-transform", "translateY(-50%)", "transform", "translateY(-50%)"], [1, "brand-logo", "left", 2, "margin-top", "-18px", "cursor", "pointer", "top", "50%", "-ms-transform", "translateY(-50%)", "transform", "translateY(-50%)", 3, "click"], ["id", "nav-mobile", "routerLink", "/login", 1, "brand-logo", "right", 2, "cursor", "pointer", "top", "50%", "-ms-transform", "translateY(-50%)", "transform", "translateY(-50%)", 3, "click"], [1, "material-icons"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainPageComponent_div_5_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainPageComponent_div_6_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainPageComponent_div_7_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainPageComponent_div_8_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preview);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".toolNav1[_ngcontent-%COMP%] {\n  top: 0px;\n  \n  \n  \n  \n  position: absolute;\n  z-index: 1;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFxBbmd1bGFyXFxDb3B5IG9mIG9yaWdpbiBwcm9qZWN0IFQtc2hpcnRfbGFzdFxcdC1zaGlydFxcdC1zaGlydC1iYWNrZW5kXFx0LXNoaXJ0LWZyb250ZW5kL3NyY1xcYXBwXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFFBQVE7RUFDUix3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvb2xOYXYxe1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMjUwcHg7ICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cclxuICAgIC8qIHdpZHRoOiA0MDBweDsgKi9cclxuICAgIC8qIGhlaWdodDogMjBweDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcbiIsIi50b29sTmF2MSB7XG4gIHRvcDogMHB4O1xuICAvKiBtYXJnaW4tbGVmdDogMjUwcHg7ICovXG4gIC8qIG1hcmdpbi1yaWdodDogMHB4OyAqL1xuICAvKiB3aWR0aDogNDAwcHg7ICovXG4gIC8qIGhlaWdodDogMjBweDsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICAvKiB3aWR0aDogMzAwcHg7ICovXG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_3__["OrderDatasService"]
        }, {
          type: _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register-page/register-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/register-page/register-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterPageComponent */

  /***/
  function srcAppRegisterPageRegisterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function () {
      return RegisterPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/classes/material.service */
    "./src/app/shared/classes/material.service.ts");
    /* harmony import */


    var _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/layouts/servises/services */
    "./src/app/shared/layouts/servises/services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterPageComponent_span_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must not be empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_span_8_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Imput correct email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_span_8_span_1_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_span_8_span_2_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["required"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["email"]);
      }
    }

    function RegisterPageComponent_span_13_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must not be empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterPageComponent_span_13_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password has been more than ", ctx_r5.form.get("password").errors["minlength"]["requiredLength"], " simbols");
      }
    }

    function RegisterPageComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_span_13_span_1_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_span_13_span_2_Template, 2, 1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["required"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["minlength"] && ctx_r1.form.get("password").errors["minlength"]["requiredLength"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "invalid": a0
      };
    };

    var RegisterPageComponent = /*#__PURE__*/function () {
      function RegisterPageComponent(auth, router) {
        _classCallCheck(this, RegisterPageComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(RegisterPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          this.form.disable();
          this.aSub = this.auth.register(this.form.value).subscribe(function () {
            _this14.router.navigate(['/login'], {
              queryParams: {
                registered: true
              }
            });
          }, function (error) {
            console.log(error.error.Message), alert(error.error.Message);

            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat(error.error.Message);

            _this14.form.enable();
          });
        }
      }]);

      return RegisterPageComponent;
    }();

    RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) {
      return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterPageComponent,
      selectors: [["app-register-page"]],
      decls: 17,
      vars: 10,
      consts: [[1, "card", 3, "formGroup", "ngSubmit"], [1, "card-content"], [1, "card-title"], [1, "input-field"], ["id", "email", "type", "email", "formControlName", "email", "required", "", 3, "ngClass"], ["for", "email"], ["class", "helper-text red-text", 4, "ngIf"], ["id", "password", "type", "password", "formControlName", "password", "required", "", 3, "ngClass"], ["for", "password"], [1, "card-action"], ["type", "submit", 1, "modal-action", "btn", "waves-effect", 3, "disabled"], [1, "helper-text", "red-text"], [4, "ngIf"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterPageComponent_span_8_Template, 3, 2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterPageComponent_span_13_Template, 3, 2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register-page',
          templateUrl: './register-page.component.html',
          styleUrls: ['./register-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/background.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/background.directive.ts ***!
    \************************************************/

  /*! exports provided: BackgroundDirective */

  /***/
  function srcAppSharedBackgroundDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundDirective", function () {
      return BackgroundDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackgroundDirective = /*#__PURE__*/function () {
      function BackgroundDirective() {
        _classCallCheck(this, BackgroundDirective);
      }

      _createClass(BackgroundDirective, [{
        key: "click",
        value: function click() {
          this.background = 'black';
          this.color = 'white';
        }
      }]);

      return BackgroundDirective;
    }();

    BackgroundDirective.ɵfac = function BackgroundDirective_Factory(t) {
      return new (t || BackgroundDirective)();
    };

    BackgroundDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BackgroundDirective,
      selectors: [["", "appBackground", ""]],
      hostVars: 4,
      hostBindings: function BackgroundDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundDirective_click_HostBindingHandler() {
            return ctx.click();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.background)("color", ctx.color);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appBackground]'
        }]
      }], function () {
        return [];
      }, {
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.background-color']
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.color']
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/classes/authguard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/classes/authguard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedClassesAuthguardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layouts_servises_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../layouts/servises/services */
    "./src/app/shared/layouts/servises/services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isAuthenticated()) {
            // console.log(this.auth.isAuthenticated());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
          } else {
            // console.log(this.auth.isAuthenticated());
            return this.router.navigate(['/login'], {
              queryParams: {
                accessDenied: true
              }
            }); // return of(false)
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(route, state) {
          return this.canActivate(route, state);
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_layouts_servises_services__WEBPACK_IMPORTED_MODULE_2__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _layouts_servises_services__WEBPACK_IMPORTED_MODULE_2__["AuthServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/classes/material.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/classes/material.service.ts ***!
    \****************************************************/

  /*! exports provided: Material */

  /***/
  function srcAppSharedClassesMaterialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Material", function () {
      return Material;
    }); // export class MaterialService {
    //     static toast(message: string) {
    //         M.toast({ html: message })
    //         // M.toast({html: 'I am a toast!', classes: 'rounded'});
    //     }
    // }


    var Material = /*#__PURE__*/function () {
      function Material() {
        _classCallCheck(this, Material);
      }

      _createClass(Material, null, [{
        key: "mat",
        value: function mat(sms) {
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.tooltip');
            var instances = M.Tooltip.init(elems);
            var instances = M.toast({
              html: sms
            });
          });
          document.querySelector('.tooltip');
        }
      }, {
        key: "nav",
        value: function nav() {
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {
              edge: 'right'
            });
          });
        }
      }, {
        key: "zoomImg",
        value: function zoomImg() {
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, 275);
          });
        }
      }, {
        key: "tab",
        value: function tab() {
          var elems = document.querySelectorAll('.tabs');
          var instance = M.Tabs.init(elems, {
            swipeable: false,
            duration: 300,
            responsiveThreshold: Infinity
          });
        }
      }, {
        key: "carousel",
        value: function carousel() {
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel1');
            var instances = M.Carousel.init(elems, {
              duration: 70,
              dist: -10,
              shift: 60,
              padding: 150,
              numVisible: 5,
              fullWidth: false,
              indicators: false,
              noWrap: false,
              onCycleTo: function onCycleTo(ele) {
                // console.log(ele);
                console.log(ele.index()); // the slide's index
              },
              interval: 1000 // default - interval: 6000

            });
            return;
          });
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel2');
            var instances = M.Carousel.init(elems, {
              duration: 70,
              dist: -30,
              shift: 30,
              padding: 55,
              numVisible: 5,
              fullWidth: false,
              indicators: false,
              noWrap: false,
              onCycleTo: null,
              interval: 1000 // default - interval: 6000

            });
          });
        } // static reload() {
        //   $(window).resize(function(){location.reload();});
        // }

      }, {
        key: "selectOpt",
        value: function selectOpt() {
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {
              dropdown: 10
            });
          });
        } // document.addEventListener('DOMContentLoaded', function() {
        //   var elems = document.querySelectorAll('select');
        //   var instances = M.FormSelect.init(elems, options);
        // });

      }, {
        key: "scrolSpy",
        value: function scrolSpy() {
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems);
          });
        }
      }, {
        key: "dropDown",
        value: function dropDown() {
          document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});
          });
        }
      }]);

      return Material;
    }();
    /***/

  },

  /***/
  "./src/app/shared/layouts/auth-layout/auth-layout.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AuthLayoutComponent */

  /***/
  function srcAppSharedLayoutsAuthLayoutAuthLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
      return AuthLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servises_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../servises/services */
    "./src/app/shared/layouts/servises/services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthLayoutComponent = /*#__PURE__*/function () {
      function AuthLayoutComponent(service) {
        _classCallCheck(this, AuthLayoutComponent);

        this.service = service;
      }

      _createClass(AuthLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthLayoutComponent;
    }();

    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
      return new (t || AuthLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]));
    };

    AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthLayoutComponent,
      selectors: [["app-auth-layout"]],
      decls: 13,
      vars: 0,
      consts: [[1, "nav-wrapper", "grey", "darken-1"], ["routerLink", "/", 1, "brand-logo"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], ["routerLinkActive", "color"], ["routerLink", "/login"], ["routerLink", "/register"], [1, "auth-block"]],
      template: function AuthLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Newborn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LogIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".color[_ngcontent-%COMP%] {\n  background: rebeccapurple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYXV0aC1sYXlvdXQvRDpcXEFuZ3VsYXJcXENvcHkgb2Ygb3JpZ2luIHByb2plY3QgVC1zaGlydF9sYXN0XFx0LXNoaXJ0XFx0LXNoaXJ0LWJhY2tlbmRcXHQtc2hpcnQtZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcbGF5b3V0c1xcYXV0aC1sYXlvdXRcXGF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHlCQUF5QjtBQ0N6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2F1dGgtbGF5b3V0L2F1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcclxufSIsIi5jb2xvciB7XG4gIGJhY2tncm91bmQ6IHJlYmVjY2FwdXJwbGU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-layout',
          templateUrl: './auth-layout.component.html',
          styleUrls: ['./auth-layout.component.scss']
        }]
      }], function () {
        return [{
          type: _servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/servises/categories.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/layouts/servises/categories.service.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriesService */

  /***/
  function srcAppSharedLayoutsServisesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
      return CategoriesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoriesService = /*#__PURE__*/function () {
      function CategoriesService(http) {
        _classCallCheck(this, CategoriesService);

        this.http = http;
      }

      _createClass(CategoriesService, [{
        key: "Themes",
        value: function Themes(a) {
          return this.http.get('/api/category?name=' + a).pipe();
        }
      }, {
        key: "fetch",
        value: function fetch() {
          return this.http.get('/api/category').pipe();
        }
      }, {
        key: "create",
        value: function create(name, image) {
          var fd = new FormData();

          if (image) {
            fd.append('image', image, image.name);
          }

          fd.append('name', name);
          return this.http.post('/api/category', fd);
        }
      }]);

      return CategoriesService;
    }();

    CategoriesService.ɵfac = function CategoriesService_Factory(t) {
      return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoriesService,
      factory: CategoriesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/servises/data.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/layouts/servises/data.service.ts ***!
    \*********************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppSharedLayoutsServisesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products.service */
    "./src/app/shared/layouts/servises/products.service.ts");

    var DataService = /*#__PURE__*/function () {
      /*
          private jorik;
          public get gago(): string {
        return this.jorik;
      }
          public set gago(bobo: string) {
        if (bobo === 'kanach' || bobo === 'rozovi') {
          this.jorik = bobo;
        }
      }
          */
      // const myService = new DataService();
      // myService.gago = 'bobo';
      // myService.setMyGago('gago');
      function DataService(produtsService) {
        var _this15 = this;

        _classCallCheck(this, DataService);

        // this.sizePrintKey = 686 / ((686 - 297) / 2);
        // this.formatWithHeight = 0.707;
        // this.formatTopKey = 0;
        this.produtsService = produtsService;
        this.formatA4Horizontal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formatA4Vertical = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formatTop = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.canvasDivSelect = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scaleKeyy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.endPriseValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.horVertt = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formatValue1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.widthKey = 0.67;
        this.heightKey = 1.26;
        this.positionKey = 5.9;
        this.scaleBlock = false;
        this.sizeValue = 'M';
        this.formatValue = 'A4';
        this.products = [];
        this.indexBrandType = 0;
        this.formats = [{
          format: 'A3',
          formatSize: 297,
          formatPrise: 500
        }, {
          format: 'A4',
          formatSize: 297,
          formatPrise: 400
        }, {
          format: 'A5',
          formatSize: 210,
          formatPrise: 300
        }, {
          format: 'A6',
          formatSize: 148,
          formatPrise: 400
        }];
        this.initCalculations();
        this.initFromServer();
        this.produtsService.fetch().subscribe(function (res) {
          _this15.products = res;
        });
      }

      _createClass(DataService, [{
        key: "sizePrintKey",
        get: function get() {
          return this._sizePrintKey;
        },
        set: function set(value) {
          this._sizePrintKey = value;
          this.formatA4Horizontal.next(value);
        }
      }, {
        key: "formatWithHeight",
        get: function get() {
          return this._formatWithHeight;
        },
        set: function set(value) {
          this._formatWithHeight = value;
          this.formatA4Vertical.next(value);
        }
      }, {
        key: "formatTopKey",
        get: function get() {
          return this._formatTopKey;
        },
        set: function set(value) {
          this._formatTopKey = value;
          this.formatTop.next(value);
        }
      }, {
        key: "canvasSelect",
        get: function get() {
          return this._canvasSelect;
        },
        set: function set(value) {
          this._canvasSelect = value;
          this.canvasDivSelect.next(value);
        }
      }, {
        key: "scaleKey",
        get: function get() {
          return this._scaleKey;
        },
        set: function set(value) {
          this._scaleKey = value;
          this.scaleKeyy.next(value);
        }
      }, {
        key: "endPrise",
        get: function get() {
          return this._endPrise;
        },
        set: function set(value) {
          this._endPrise = value;
          this.endPriseValue.next(value);
        }
      }, {
        key: "horVert",
        get: function get() {
          return this._horVert;
        },
        set: function set(value) {
          this._horVert = value;
          this.horVertt.next(value);
        }
      }, {
        key: "formatVal",
        get: function get() {
          return this._formatVal;
        },
        set: function set(value) {
          this._formatVal = value;
          this.formatValue1.next(value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.formatSizeSwich();
        }
      }, {
        key: "formatSizeSwich",
        value: function formatSizeSwich() {
          var realSize = this.products[this.indexBrandType].realSize;
          var cafficient = 1.0229; // const realSizes = { XS: 609, S: 648, M: 686, L: 724, XL: 762, XXL: 800 };
          // const formats = ['A3', 'A4', 'A5'];

          for (var ind = 0; ind < this.formats.length; ind++) {
            for (var i = 0; i < Object.keys(realSize).length; i++) {
              if (this.sizeValue === Object.keys(realSize)[i] && this.formatValue === this.formats[ind].format) {
                if (this.horVert) {
                  this.sizePrintKey = Object.values(realSize)[i] / ((Object.values(realSize)[i] - this.formats[ind].formatSize) / 2);
                  this.scaleKey = 1.1;
                } else {
                  if (this.horizontalVertical) {
                    if (this.formatValue === this.formats[0].format) {
                      this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind].formatSize) / 2);
                      this.scaleKey = 4.8;
                    } else {
                      this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind + 1].formatSize) / 2);
                      this.scaleKey = 4.8;
                    }
                  } else {
                    if (this.formatValue === this.formats[0].format) {
                      this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind].formatSize) / 2);
                      this.scaleKey = 2.8;
                    } else {
                      this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind + 1].formatSize) / 2);
                      this.scaleKey = 2.8;
                    }
                  }
                }
              }
            }
          } // if (this.sizeValue === 'XS' && this.formatValue === 'A4') {
          //   if (this.horVert) {
          //     console.log("A4 loook");
          //     this.sizePrintKey = 609 / ((609 - 297) / 2);
          //     this.scaleKey = 1.1;
          //   } else {
          //     this.sizePrintKey = 609 * cafficient / ((609 - 210) / 2);
          //     this.scaleKey = 2.3;
          //   }
          // }
          // if (this.sizeValue === 'S' && this.formatValue === 'A4') {
          //   if (this.horVert) {
          //     this.sizePrintKey = 648 / ((648 - 297) / 2);
          //   } else {
          //     this.sizePrintKey = 648 * cafficient / ((648 - 210) / 2);
          //   }
          // }
          // if (this.sizeValue === 'M' && this.formatValue === 'A4') {
          //   if (this.horVert) {
          //     this.sizePrintKey = 686 / ((686 - 297) / 2);
          //     this.scaleKey = 1.1;
          //   } else {
          //     this.sizePrintKey = 686 * cafficient / ((686 - 210) / 2);
          //     this.scaleKey = 2.3;
          //   }
          // }
          // if (this.sizeValue === 'M' && this.formatValue === 'A5') {
          //   if (this.horVert) {
          //     this.sizePrintKey = 686 / ((686 - 210) / 2);
          //     this.scaleKey = 1.1;
          //   } else {
          //     this.sizePrintKey = 686 * cafficient / ((686 - 148) / 2);
          //     this.scaleKey = 2.3;
          //   }
          // }

        }
      }, {
        key: "calcEndPrise",
        value: function calcEndPrise() {
          for (var i = 0; i < this.formats.length; i++) {
            if (this.formatValue === this.formats[i].format) {
              this.endPrise = this.formats[i].formatPrise;
              console.log(this.endPrise);
            }
          }
        } // public allLenght = A3Width +  (canvasWidth - 2* sleeveLenght * cos(45)) + chestWidth - A3

      }, {
        key: "initCalculations",
        value: function initCalculations() {
          // this.sizePrintKey = 686 / ((686 - 297) / 2);
          // this.formatWithHeight = 0.707; // 0.707
          // this.formatTopKey = -0.03;
          // this.horVert = true;
          // this.scaleKey = 1.1;
          // if (this.horVert) {
          //   this.scaleKey = 1
          // } else {
          //   console.log('ggggg');
          //   this.scaleKey = 4.3
          // }
          this.scaleKey = 0.5;
          var checkWidth = window.innerWidth;
          this.sizePrintKey = 686 / ((686 - 297) / 2);
          this.formatWithHeight = 0.707; // 0.707

          this.formatTopKey = -0.03;
          this.horVert = true; //mobile

          if (checkWidth < 600) {
            this.canvasHtmlWidth = (window.innerWidth - this.widthKey * window.innerWidth) * 3;
            this.canvasCenteredPosition = window.innerWidth / this.positionKey / 40;
          } else {
            this.canvasHtmlWidth = window.innerWidth - this.widthKey * window.innerWidth;
            this.canvasCenteredPosition = window.innerWidth / this.positionKey;
          } // this.canvasHtmlWidth = (window.innerWidth - this.widthKey * window.innerWidth);


          this.canvasHtmlHeight = this.canvasHtmlWidth * this.heightKey;
          this.positionTopKey = this.canvasHtmlWidth * this.formatTopKey; // if wont to get up then it must be + in first, else get down -

          this.canvasSizeFormatWidth = this.canvasHtmlWidth - 2 * (this.canvasHtmlWidth / this.sizePrintKey + this.canvasHtmlWidth / 40);
          this.canvasSizeFormatTop = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey - this.positionTopKey;
          this.canvasSizeFormatHeight = this.canvasSizeFormatWidth * this.formatWithHeight;
          this.canvasSizeFormatLeft = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey; // this.canvasHtmlWidth = (window.innerWidth - this.widthKey * window.innerWidth);
          // this.canvasCenteredPosition = window.innerWidth / this.positionKey;
        }
      }, {
        key: "initFromServer",
        value: function initFromServer() {// call server function
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProdutsService"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProdutsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/servises/fonts.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/layouts/servises/fonts.service.ts ***!
    \**********************************************************/

  /*! exports provided: FontService */

  /***/
  function srcAppSharedLayoutsServisesFontsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontService", function () {
      return FontService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FontService = /*#__PURE__*/function () {
      function FontService(http) {
        _classCallCheck(this, FontService);

        this.http = http;
      }

      _createClass(FontService, [{
        key: "fetch",
        value: function fetch() {
          return this.http.get('/api/font').pipe();
        }
      }]);

      return FontService;
    }();

    FontService.ɵfac = function FontService_Factory(t) {
      return new (t || FontService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FontService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FontService,
      factory: FontService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/servises/order-datas.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/layouts/servises/order-datas.service.ts ***!
    \****************************************************************/

  /*! exports provided: OrderDatasService */

  /***/
  function srcAppSharedLayoutsServisesOrderDatasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDatasService", function () {
      return OrderDatasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderDatasService = /*#__PURE__*/function () {
      function OrderDatasService() {
        _classCallCheck(this, OrderDatasService);

        this.orderDatas = {
          productTypeName: '',
          brendName: '',
          productColor: '',
          colorDefoult: '',
          productSize: ''
        };
        this.imageSrc = '';
      }

      _createClass(OrderDatasService, [{
        key: "defaultDatas",
        value: function defaultDatas() {
          this.orderDatas.productTypeName = '';
          this.orderDatas.brendName = '';
          this.orderDatas.productColor = '';
          this.orderDatas.colorDefoult = '';
          this.orderDatas.productSize = '';
        }
      }]);

      return OrderDatasService;
    }();

    OrderDatasService.ɵfac = function OrderDatasService_Factory(t) {
      return new (t || OrderDatasService)();
    };

    OrderDatasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderDatasService,
      factory: OrderDatasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDatasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/servises/products.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/layouts/servises/products.service.ts ***!
    \*************************************************************/

  /*! exports provided: ProdutsService */

  /***/
  function srcAppSharedLayoutsServisesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutsService", function () {
      return ProdutsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProdutsService = /*#__PURE__*/function () {
      function ProdutsService(http) {
        _classCallCheck(this, ProdutsService);

        this.http = http; // this.fetch().subscribe(
        //   (res: Products[]) => {
        //     this.firstCanvasBackroundImage = res;          
        //   }
        // )   
      }

      _createClass(ProdutsService, [{
        key: "fetch",
        value: function fetch() {
          return this.http.get('/api/product').pipe();
        }
      }]);

      return ProdutsService;
    }();

    ProdutsService.ɵfac = function ProdutsService_Factory(t) {
      return new (t || ProdutsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProdutsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProdutsService,
      factory: ProdutsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/servises/productscolor.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/layouts/servises/productscolor.service.ts ***!
    \******************************************************************/

  /*! exports provided: ProdutsColorService */

  /***/
  function srcAppSharedLayoutsServisesProductscolorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutsColorService", function () {
      return ProdutsColorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProdutsColorService = /*#__PURE__*/function () {
      function ProdutsColorService(http) {
        _classCallCheck(this, ProdutsColorService);

        this.http = http;
      }

      _createClass(ProdutsColorService, [{
        key: "fetch",
        value: function fetch() {
          return this.http.get('/api/productcolor').pipe();
        }
      }]);

      return ProdutsColorService;
    }();

    ProdutsColorService.ɵfac = function ProdutsColorService_Factory(t) {
      return new (t || ProdutsColorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProdutsColorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProdutsColorService,
      factory: ProdutsColorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutsColorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/servises/services.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/layouts/servises/services.ts ***!
    \*****************************************************/

  /*! exports provided: AuthServices */

  /***/
  function srcAppSharedLayoutsServisesServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthServices", function () {
      return AuthServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthServices = /*#__PURE__*/function () {
      function AuthServices(http) {
        _classCallCheck(this, AuthServices);

        this.http = http;
        this.token = null;
      }

      _createClass(AuthServices, [{
        key: "sendEmail",
        value: function sendEmail(url, data) {
          return this.http.post(url, data).subscribe(function (data) {
            var res = data;
            console.log('scssessfuli');
          });
        }
      }, {
        key: "data",
        value: function data() {
          return this.http.get('api/category').pipe();
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post('/api/auth/register', user);
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this16 = this;

          return this.http.post('/api/auth/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_ref) {
            var token = _ref.token;
            localStorage.setItem('auth-token', token);

            _this16.setToken(token);
          }));
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return !!this.token;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.setToken(null);
          localStorage.clear();
        }
      }]);

      return AuthServices;
    }();

    AuthServices.ɵfac = function AuthServices_Factory(t) {
      return new (t || AuthServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthServices,
      factory: AuthServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/site-layout/site-layout.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SiteLayoutComponent */

  /***/
  function srcAppSharedLayoutsSiteLayoutSiteLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function () {
      return SiteLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../classes/material.service */
    "./src/app/shared/classes/material.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _servises_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../servises/services */
    "./src/app/shared/layouts/servises/services.ts");
    /* harmony import */


    var _servises_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../servises/categories.service */
    "./src/app/shared/layouts/servises/categories.service.ts");
    /* harmony import */


    var _servises_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../servises/products.service */
    "./src/app/shared/layouts/servises/products.service.ts");
    /* harmony import */


    var _servises_productscolor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../servises/productscolor.service */
    "./src/app/shared/layouts/servises/productscolor.service.ts");
    /* harmony import */


    var _servises_fonts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../servises/fonts.service */
    "./src/app/shared/layouts/servises/fonts.service.ts");
    /* harmony import */


    var _servises_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../servises/data.service */
    "./src/app/shared/layouts/servises/data.service.ts");
    /* harmony import */


    var src_app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _servises_order_datas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../servises/order-datas.service */
    "./src/app/shared/layouts/servises/order-datas.service.ts");

    var _c0 = ["canvas"];
    var _c1 = ["imagePath"];
    var _c2 = ["coord"];
    var _c3 = ["owlElement"];
    var _c4 = ["inputColor"];
    var _c5 = ["divvv"];
    var _c6 = ["owlCarousel"];

    function SiteLayoutComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r45.sendToBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "flip_to_back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r9.selected || _r9.selected.type == "group");
      }
    }

    function SiteLayoutComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r47.bringToFront();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "flip_to_front");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r9.selected || _r9.selected.type == "group");
      }
    }

    function SiteLayoutComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r49.clone();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "content_copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r9.selected || _r9.selected.type == "group");
      }
    }

    var _c7 = function _c7(a0, a1) {
      return {
        horizontal: a0,
        vertical: a1
      };
    };

    function SiteLayoutComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.formatValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c7, ctx_r3.horVert, !ctx_r3.horVert));
      }
    }

    function SiteLayoutComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r51.isOpen = !ctx_r51.isOpen;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cloud");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Themes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SiteLayoutComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_12_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);

          var categoryy_r54 = ctx.$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          ctx_r55.category = categoryy_r54.name;
          ctx_r55.Themes();
          ctx_r55.funk();
          return ctx_r55.isOpen = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var categoryy_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](categoryy_r54.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", categoryy_r54.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function SiteLayoutComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_12_div_1_Template, 6, 2, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.categories);
      }
    }

    function SiteLayoutComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r57.confirmClear();
          return ctx_r57.isCarouselOpen = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Clean ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_13_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r59.productOrderDatas();
          ctx_r59.sendMail();
          return ctx_r59.redirectToShop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Apply ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.selected);
      }
    }

    function SiteLayoutComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_17_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.opacity = $event;
        })("ngModelChange", function SiteLayoutComponent_div_17_Template_input_ngModelChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r62.setOpacity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_div_17_Template_input_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r63.shadowSVG = !ctx_r63.shadowSVG;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.opacity);
      }
    }

    function SiteLayoutComponent_ng_container_25_ng_template_1_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_ng_container_25_ng_template_1_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          ctx_r67.selectPicture();
          return ctx_r67.isCarouselOpen = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SiteLayoutComponent_ng_container_25_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SiteLayoutComponent_ng_container_25_ng_template_1_button_2_Template, 3, 0, "button", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r64.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount === 0);
      }
    }

    function SiteLayoutComponent_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_ng_container_25_ng_template_1_Template, 3, 2, "ng-template", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var image_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", image_r64.id);
      }
    }

    function SiteLayoutComponent_ng_template_26_Template(rf, ctx) {}

    function SiteLayoutComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_45_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

          var imageProduct_r70 = ctx.$implicit;
          var i_r71 = ctx.index;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _r9.props.canvasImage = imageProduct_r70.type;
          _r9.props.canvasFill = ctx_r72.productBrandColors[0];
          ctx_r72.allColors = true;
          ctx_r72.orderDatas.productTypeName = imageProduct_r70.name;
          ctx_r72.orderDatas.productColor = "";
          ctx_r72.indexBrandType = i_r71;
          ctx_r72.setCanvasImage();
          return ctx_r72.productsTypeColor();
        })("colorPickerChange", function SiteLayoutComponent_div_45_Template_div_colorPickerChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r74.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var imageProduct_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageProduct_r70.type1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imageProduct_r70.name);
      }
    }

    function SiteLayoutComponent_li_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_li_54_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);

          var i_r76 = ctx.index;
          var productBrand_r75 = ctx.$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          ctx_r77.indexBrand = i_r76;
          ctx_r77.allColors = false;
          _r9.props.brandName = productBrand_r75.name;
          ctx_r77.orderDatas.brendName = productBrand_r75.name;
          ctx_r77.productBrandColor();
          ctx_r77.productBrandSize();
          ctx_r77.setCanvasImage();
          return ctx_r77.productsTypeColor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 169);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var productBrand_r75 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](productBrand_r75.name);
      }
    }

    function SiteLayoutComponent_div_57_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_57_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82);

          var color_r80 = ctx.$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _r9.props.canvasFill = color_r80;
          ctx_r81.orderDatas.productColor = color_r80;
          return ctx_r81.setCanvasFill();
        })("colorPickerChange", function SiteLayoutComponent_div_57_div_1_Template_div_colorPickerChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r83.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r80 = ctx.$implicit;

        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", color_r80, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", color_r80 == ctx_r79.selectColor);
      }
    }

    function SiteLayoutComponent_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_57_div_1_Template, 1, 3, "div", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.arrColor);
      }
    }

    function SiteLayoutComponent_div_58_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_58_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);

          var colorBrand_r85 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _r9.props.canvasFill = colorBrand_r85;
          ctx_r86.orderDatas.productColor = colorBrand_r85;
          return ctx_r86.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var colorBrand_r85 = ctx.$implicit;

        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", colorBrand_r85, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", colorBrand_r85 == ctx_r84.selectColor);
      }
    }

    function SiteLayoutComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_58_div_1_Template, 1, 3, "div", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.productBrandColors);
      }
    }

    function SiteLayoutComponent_label_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_label_60_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91);

          var size_r88 = ctx.$implicit;

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r90.orderDatas.productSize = size_r88.key;
          return ctx_r90.sizeValuePass(size_r88.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 176);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var size_r88 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", size_r88.value)("checked", ctx_r17.orderDatas.productSize === "" ? size_r88.key === "M" : size_r88.key === ctx_r17.orderDatas.productSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r88.key, " ");
      }
    }

    function SiteLayoutComponent_div_62_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 182);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 184, 185);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_div_62_div_2_Template_input_colorPickerChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.canvasFill = $event;
        })("colorPickerChange", function SiteLayoutComponent_div_62_div_2_Template_input_colorPickerChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r96.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r9.props.canvasFill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cpPosition", "bottom")("colorPicker", _r9.props.canvasFill)("value", _r9.props.canvasFill);
      }
    }

    function SiteLayoutComponent_div_62_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 178);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SiteLayoutComponent_div_62_div_2_Template, 4, 5, "div", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Background Image (url)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 182);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 183);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_62_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.canvasImage = $event;
        })("keyup", function SiteLayoutComponent_div_62_Template_input_keyup_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r99.setCanvasImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.props.canvasImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.canvasImage);
      }
    }

    var _c8 = function _c8() {
      return {
        "padding-top": "4px"
      };
    };

    function SiteLayoutComponent_div_136_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 186);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_136_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return ctx_r100.addImageOnCanvas(_r9.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 187);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "move_to_inbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 188);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_div_136_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r102.readUrl($event);
          ctx_r102.routerlink();
          return ctx_r102.isOpasity1 = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
      }
    }

    function SiteLayoutComponent_img_138_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 189);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_img_138_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          ctx_r103.addImageOnCanvas(_r9.url);
          ctx_r103.isOpasity = true;
          return ctx_r103.toggle = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function SiteLayoutComponent_button_139_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 190);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_139_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r106);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          ctx_r105.removeWhite(_r9.url);
          ctx_r105.isOpasity1 = true;
          return ctx_r105.isOpasity = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SiteLayoutComponent_div_140_Template(rf, ctx) {
      if (rf & 1) {
        var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 191);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Opacity");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_140_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.opacity = $event;
        })("ngModelChange", function SiteLayoutComponent_div_140_Template_input_ngModelChange_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r109.setOpacity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.opacity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.opacity);
      }
    }

    function SiteLayoutComponent_div_146_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fill");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_div_146_div_7_Template_input_colorPickerChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.fill = $event;
        })("colorPickerChange", function SiteLayoutComponent_div_146_div_7_Template_input_colorPickerChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r113.setFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r9.props.fill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cpPosition", "top")("colorPicker", _r9.props.fill)("value", _r9.props.fill);
      }
    }

    function SiteLayoutComponent_div_146_Template(rf, ctx) {
      if (rf & 1) {
        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 191);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Opacity");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_146_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.opacity = $event;
        })("ngModelChange", function SiteLayoutComponent_div_146_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r116.setOpacity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SiteLayoutComponent_div_146_div_7_Template, 5, 5, "div", 192);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.opacity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.opacity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.selected && _r9.textEditor || _r9.selected && _r9.figureEditor);
      }
    }

    function SiteLayoutComponent_div_164_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Group Selected ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c9 = function _c9() {
      return {
        "margin-top": "-20px"
      };
    };

    function SiteLayoutComponent_div_165_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 196);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No items selected");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
      }
    }

    var _c10 = function _c10(a0) {
      return {
        "font-family": a0
      };
    };

    function SiteLayoutComponent_option_180_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 197);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var font_r117 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", font_r117.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c10, font_r117.value));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](font_r117.name);
      }
    }

    function SiteLayoutComponent_div_232_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Diameter");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 198);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_232_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.diametr = $event;
        })("ngModelChange", function SiteLayoutComponent_div_232_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.addText();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.diametr);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);
      }
    }

    function SiteLayoutComponent_div_233_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Font Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 199);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_233_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.fontSize = $event;
        })("ngModelChange", function SiteLayoutComponent_div_233_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r123.setFontSize();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.fontSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);
      }
    }

    function SiteLayoutComponent_div_252_Template(rf, ctx) {
      if (rf & 1) {
        var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_252_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127);

          var imageProduct_r124 = ctx.$implicit;
          var i_r125 = ctx.index;

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _r9.props.canvasImage = imageProduct_r124.type;
          _r9.props.canvasFill = ctx_r126.productBrandColors[0];
          ctx_r126.allColors = true;
          ctx_r126.orderDatas.productTypeName = imageProduct_r124.name;
          ctx_r126.orderDatas.productColor = "";
          ctx_r126.indexBrandType = i_r125;
          ctx_r126.setCanvasImage();
          return ctx_r126.productsTypeColor();
        })("colorPickerChange", function SiteLayoutComponent_div_252_Template_div_colorPickerChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r128.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var imageProduct_r124 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageProduct_r124.type1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imageProduct_r124.name);
      }
    }

    function SiteLayoutComponent_li_261_Template(rf, ctx) {
      if (rf & 1) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_li_261_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r132);

          var i_r130 = ctx.index;
          var productBrand_r129 = ctx.$implicit;

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          ctx_r131.indexBrand = i_r130;
          ctx_r131.allColors = false;
          _r9.props.brandName = productBrand_r129.name;
          ctx_r131.orderDatas.brendName = productBrand_r129.name;
          ctx_r131.productBrandColor();
          ctx_r131.productBrandSize();
          ctx_r131.setCanvasImage();
          return ctx_r131.productsTypeColor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 169);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var productBrand_r129 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](productBrand_r129.name);
      }
    }

    function SiteLayoutComponent_div_264_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_264_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136);

          var color_r134 = ctx.$implicit;

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _r9.props.canvasFill = color_r134;
          ctx_r135.orderDatas.productColor = color_r134;
          return ctx_r135.setCanvasFill();
        })("colorPickerChange", function SiteLayoutComponent_div_264_div_1_Template_div_colorPickerChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r137.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r134 = ctx.$implicit;

        var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", color_r134, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", color_r134 == ctx_r133.selectColor);
      }
    }

    function SiteLayoutComponent_div_264_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_264_div_1_Template, 1, 3, "div", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r31.arrColor);
      }
    }

    function SiteLayoutComponent_div_265_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_265_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r141);

          var colorBrand_r139 = ctx.$implicit;

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _r9.props.canvasFill = colorBrand_r139;
          ctx_r140.orderDatas.productColor = colorBrand_r139;
          return ctx_r140.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var colorBrand_r139 = ctx.$implicit;

        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", colorBrand_r139, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", colorBrand_r139 == ctx_r138.selectColor);
      }
    }

    function SiteLayoutComponent_div_265_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_265_div_1_Template, 1, 3, "div", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.productBrandColors);
      }
    }

    function SiteLayoutComponent_label_267_Template(rf, ctx) {
      if (rf & 1) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_label_267_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145);

          var size_r142 = ctx.$implicit;

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r144.orderDatas.productSize = size_r142.key;
          return ctx_r144.sizeValuePass(size_r142.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 176);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var size_r142 = ctx.$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", size_r142.value)("checked", ctx_r33.orderDatas.productSize === "" ? size_r142.key === "M" : size_r142.key === ctx_r33.orderDatas.productSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r142.key, " ");
      }
    }

    function SiteLayoutComponent_div_269_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 182);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 184, 185);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_div_269_div_2_Template_input_colorPickerChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.canvasFill = $event;
        })("colorPickerChange", function SiteLayoutComponent_div_269_div_2_Template_input_colorPickerChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r149);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r150.setCanvasFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r9.props.canvasFill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cpPosition", "bottom")("colorPicker", _r9.props.canvasFill)("value", _r9.props.canvasFill);
      }
    }

    function SiteLayoutComponent_div_269_Template(rf, ctx) {
      if (rf & 1) {
        var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 178);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SiteLayoutComponent_div_269_div_2_Template, 4, 5, "div", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Background Image (url)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 182);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 183);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_269_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.canvasImage = $event;
        })("keyup", function SiteLayoutComponent_div_269_Template_input_keyup_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152);

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r153.setCanvasImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.props.canvasImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.canvasImage);
      }
    }

    function SiteLayoutComponent_div_343_Template(rf, ctx) {
      if (rf & 1) {
        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 186);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_343_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r155);

          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return ctx_r154.addImageOnCanvas(_r9.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 187);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "move_to_inbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 188);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_div_343_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r155);

          var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r156.readUrl($event);
          ctx_r156.routerlink();
          return ctx_r156.isOpasity1 = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
      }
    }

    function SiteLayoutComponent_img_345_Template(rf, ctx) {
      if (rf & 1) {
        var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 189);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_img_345_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158);

          var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          ctx_r157.addImageOnCanvas(_r9.url);
          ctx_r157.isOpasity = true;
          return ctx_r157.toggle = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function SiteLayoutComponent_button_346_Template(rf, ctx) {
      if (rf & 1) {
        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 190);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_346_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r160);

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          ctx_r159.removeWhite(_r9.url);
          ctx_r159.isOpasity1 = true;
          return ctx_r159.isOpasity = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SiteLayoutComponent_div_347_Template(rf, ctx) {
      if (rf & 1) {
        var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 191);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Opacity");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_347_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.opacity = $event;
        })("ngModelChange", function SiteLayoutComponent_div_347_Template_input_ngModelChange_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162);

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r163.setOpacity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.opacity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.opacity);
      }
    }

    function SiteLayoutComponent_div_353_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fill");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_div_353_div_7_Template_input_colorPickerChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r166);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.fill = $event;
        })("colorPickerChange", function SiteLayoutComponent_div_353_div_7_Template_input_colorPickerChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r166);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r167.setFill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r9.props.fill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cpPosition", "top")("colorPicker", _r9.props.fill)("value", _r9.props.fill);
      }
    }

    function SiteLayoutComponent_div_353_Template(rf, ctx) {
      if (rf & 1) {
        var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 191);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Opacity");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_353_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.opacity = $event;
        })("ngModelChange", function SiteLayoutComponent_div_353_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169);

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r170.setOpacity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SiteLayoutComponent_div_353_div_7_Template, 5, 5, "div", 192);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.opacity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.opacity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.selected && _r9.textEditor || _r9.selected && _r9.figureEditor);
      }
    }

    function SiteLayoutComponent_div_371_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Group Selected ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SiteLayoutComponent_div_372_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 196);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No items selected");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
      }
    }

    function SiteLayoutComponent_option_387_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 197);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var font_r171 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", font_r171.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c10, font_r171.value));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](font_r171.name);
      }
    }

    function SiteLayoutComponent_div_439_Template(rf, ctx) {
      if (rf & 1) {
        var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Diameter");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 198);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_439_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r173);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.diametr = $event;
        })("ngModelChange", function SiteLayoutComponent_div_439_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r173);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.addText();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.diametr);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);
      }
    }

    function SiteLayoutComponent_div_440_Template(rf, ctx) {
      if (rf & 1) {
        var _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Font Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 199);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_440_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r176);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          return _r9.props.fontSize = $event;
        })("ngModelChange", function SiteLayoutComponent_div_440_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r176);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r177.setFontSize();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.fontSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);
      }
    }

    var _c11 = function _c11(a0) {
      return {
        "left.px": a0
      };
    };

    var _c12 = function _c12(a0) {
      return {
        "class1": a0
      };
    };

    var _c13 = function _c13() {
      return {
        "padding-top": "3px"
      };
    };

    var _c14 = function _c14() {
      return {
        "margin-top": "20px"
      };
    };

    var _c15 = function _c15(a0) {
      return {
        "active": a0
      };
    };

    var SiteLayoutComponent = /*#__PURE__*/function () {
      // public marvelHeroes =  this.productsColor.filter((hero) => {
      //   return hero.hex == this.productsColor[this.index].hex;
      // });
      // fontss = [
      //   {value: 'arial', name: 'Arial'},
      //   {value: 'Roboto', name: 'Roboto'},
      //   {value: 'Kaufmann BT', name: 'Kaufmann BT'},
      //   {value: 'Calisto Mt', name: 'Calisto Mt'},
      //   {value: 'Brush Script Mt', name: 'Brush Script Mt'},
      //   {value: 'TypoUpright BT', name: 'TypoUpright BT'},
      //   {value: 'Lucida Handwriting', name: 'Lucida Handwriting'},
      //   {value: 'grapalat', name: 'grapalat'},
      //   {value: 'Calisto Mt', name: 'Calisto Mt'},
      //   {value: 'fantasy', name:'fantasy'},
      //   {value: 'Comic Sans MS', name:'Comic Sans MS'},
      // ]
      // images = [
      //   { id: 'svg', path: '../assets/img/vintage_car_2.svg' },
      //   { id: 'svg', path: '../assets/img/300054197 (1).svg' },
      //   { id: 'svg', path: '../assets/img/643684912.svg' },
      //   { id: 'svg', path: '../assets/img/1238039455.svg' },
      //   { id: 'svg', path: '../assets/img/1653563747.svg' },
      //   { id: 'svg', path: '../assets/img/Penelope-Cruz-By-Heblo.svg' },
      //   { id: 'svg', path: '../assets/img/model.svg' },
      //   { id: 'svg', path: '../assets/img/Music.svg' },
      //   { id: 'svg', path: '../assets/img/PNG.svg' },
      //   { id: 'svg', path: '../assets/img/Grim_Reaper.eps' },
      //   { id: 9, path: '../assets/img/Origin.png' },
      //   { id: 'svgPhoto', path: '../assets/img/Art/91b91213cf99e2ac0c9a5a9141d8c4c0.svg' },
      //   { id: 'svgPhoto', path: '../assets/img/Art/-image_dali-persistence-of-memory-lg.svg' },
      //   { id: 'svgPhoto', path: '../assets/img/Art/15815906134355_8293849786237666996_n.svg' },
      //   { id: 'svgPhoto', path: '../assets/img/Art/26517021889248_8026067559252081096_n.svg' },
      //   { id: 'svgPhoto', path: '../assets/img/Art/44418993232044_7382442637724156660_n.svg' },
      //   { id: 'svgPhoto', path: '../assets/img/Art/45016015545963_3411506491084716110_n.svg' },
      //   { id: 'svgPhoto', path: '../assets/img/Art/1051040349.svg' }
      // ]
      // colors = [
      //   { hex: '#ffffff', name: 'pink' },
      //   { hex: '#b4a24b', name: 'pino' },
      //   { hex: '#353535', name: 'pink' },
      //   { hex: '#5a7cc6', name: 'pink' },
      //   { hex: '#cba6a6', name: 'pink' },
      //   { hex: '#e1a24b', name: 'pino' },
      //   { hex: '#11e139', name: 'pink' },
      //   { hex: '#4b2cc6', name: 'pink' }
      // ]
      function SiteLayoutComponent(router, httpService, catecoriesService, produtsService, productscolorService, fontService, dataService, main, order) {
        _classCallCheck(this, SiteLayoutComponent);

        this.router = router;
        this.httpService = httpService;
        this.catecoriesService = catecoriesService;
        this.produtsService = produtsService;
        this.productscolorService = productscolorService;
        this.fontService = fontService;
        this.dataService = dataService;
        this.main = main;
        this.order = order;
        this.title = 'EditorPic';
        this.isOpen = false;
        this.isOpenDraw = false;
        this.selectColor = '';
        this.select = false;
        this.isClicked = false;
        this.isClickedBold = false;
        this.isClickedItalic = false;
        this.isClickedUnderline = false;
        this.isClickedOverline = false;
        this.isClickedCenterline = false;
        this.isOpasity = false;
        this.isOpasity1 = true;
        this.expression = false;
        this.toggleButton = true;
        this.category = '';
        this.formatValue = 'A4';
        this.horVert = true;
        this.origin = true;
        this.shadow = false;
        this.shadowText = true;
        this.shadowSVG = false;
        this.removeColorValue = 0;
        this.saturation = 0;
        this.blur = 0;
        this.contrast = 0;
        this.noise = 0;
        this.activatebutton = true; // public imageCoordyy = this.canvas.imageCoordy
        //owl-carousel

        this.bob = null;
        this.isCarouselOpen = true;
        this.toggle = false;
        this.indexBrand = null;
        this.indexBrandType = null;
        this.firstImageBrand = null;
        this.allColors = true;
        this.length = null;
        this.colorDefoult = '';
        this.orderDatas = {
          productTypeName: '',
          brendName: '',
          productColor: 'White',
          colorDefoult: '',
          productSize: 'M'
        };
        this.fonts = [];
        this.images = [];
        this.products = [];
        this.productBrands = [];
        this.categories = [];
        this.arrColor = [];
        this.productBrandColors = [];
        this.productBrandSizes = null; //new

        this.allSizesByProductType = null; //new
        // public productBrandss: ProductBrand[] = [
        //   { name: 'Melante', linkeBrand: 'https://www.facebook.com/melante.am', productColor: ['orange', 'blu', 'green', '#444444'], size: { XS: false, S: false, M: false, L: true, XL: true, XXL: true }, src: 'data:image/jpeg;base64,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' },
        //   { name: 'Mosini', linkeBrand: 'https://www.facebook.com/Mosinifashion', productColor: ['red', 'blue', 'orange', 'yellow', '#444444'], size: { XS: false, S: true, M: false, L: true, XL: true, XXL: true }, src: 'data:image/jpeg;base64,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' },
        //   { name: 'Tosp', linkeBrand: 'https://www.facebook.com/tosp.armenia', productColor: ['white', 'pink', 'red',], size: { XS: {in: false, size: 609}, S: {in: false, size: 648}, M: {in: false, size: 686}, L: {in: false, size: 724}, XL: {in: false, size: 762}, XXL: {in: false, size: 800} }, src: 'data:image/png;base64,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' },
        // ]
        // imageProducts = [
        //   { type: 'assets/img/Vintage.png' },
        //   { type: 'assets/img/Trafaret3.png' },
        //   { type: 'assets/img/Trafaret.png' },
        //   { type: 'assets/img/Vintage.png' },
        // ]

        this.index = 0;
        this.firstImage = 0;
        this.firstImageCarousel = '';
        this.linkeBrand = '';
        this.productBrandsLinke0 = '';
        this.productBrandsSrc0 = '';
        this.customOptions = {
          // stagePadding: 200,
          // margin: 0,
          // loop: true,
          // navText: [ "<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
          navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
          // navClass: ['owl-prev', 'owl-next'],
          // lazyLoad: true,
          // video:true,
          nav: true,
          dots: false,
          autoHeight: true,
          // autoplay:true,
          // autoWidth: true,s
          smartSpeed: 1000,
          center: true,
          responsive: {
            0: {
              items: 1,
              margin: 90,
              stagePadding: 90
            },
            400: {
              items: 3,
              margin: 10,
              stagePadding: 50
            },
            760: {
              items: 3,
              margin: 60
            },
            1000: {
              items: 3,
              margin: 60
            }
          }
        }; // public drawFill() {
        //   this.canvas.drawFill();
        // }

        this.productSelectWithoutScale = true;
        this.initFromServer();
      } // getUpdatedMessage() {
      //   this.dataService.message.subscribe(
      //     res => {
      //       console.log(res);
      //     }
      //   )
      // }


      _createClass(SiteLayoutComponent, [{
        key: "owlDragging",
        value: function owlDragging(e) {
          console.log(e); // console.log(this.src);
        }
      }, {
        key: "redirectToShop",
        value: function redirectToShop() {
          this.main.preview = true;
          this.router.navigate(['/order']);
        }
      }, {
        key: "modelChangeFn",
        value: function modelChangeFn() {
          this.setCharSpacing();
        }
      }, {
        key: "getPassedData",
        value: function getPassedData(data) {
          this.activeSlides = data;
          var index = this.activeSlides.startPosition;
          var src = $('.owlCarousel').find(".owl-item").eq(index).find("img").attr('src');
          $('.divv').text(src);
          this.firstImage = 1;
          index = 0; // $('.owlCarousel').on('changed.owlCarousel', (event) => {
          //   var current = event.item.index;
          //   var src = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
          //   $('.divv').text(src)
          // });
        }
      }, {
        key: "onload",
        value: function onload() {
          console.log('onload');
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          var checkWidth = window.innerWidth; // $('#myCarousel').trigger('refresh.owl.carousel-o');

          if (checkWidth < 800) {
            console.log(800, 'ok'); // this.canvasHtmlWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) * 1.5;
            // this.canvasHtmlHeight = this.canvasHtmlWidth * this.dataService.heightKey * 1.5;
            // this.canvasCenteredPosition = (window.innerWidth / this.dataService.positionKey) * 1.5;
          } // $('#myCarousel').trigger('refresh.owl.carousel');


          if (checkWidth < 600) {
            this.canvasHtmlWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) * 3;
            this.canvasCenteredPosition = window.innerWidth / this.dataService.positionKey / 40;
          } else {
            this.canvasHtmlWidth = window.innerWidth - this.dataService.widthKey * window.innerWidth;
            this.canvasCenteredPosition = window.innerWidth / this.dataService.positionKey;
          } // this.canvasHtmlWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth);


          this.canvasHtmlHeight = this.canvasHtmlWidth * this.dataService.heightKey; // this.canvasCenteredPosition = (window.innerWidth / this.dataService.positionKey);
        }
      }, {
        key: "Resize",
        value: function Resize() {
          console.log('resize'); // return this.customOptions
        }
      }, {
        key: "ret",
        value: function ret() {
          return 0;
        }
      }, {
        key: "funk",
        value: function funk() {//   if ( $(window).width() < 768 ) {
          //     var owlActive = owl.owlCarousel(owlOptions);
          // } else {
          //     owl.addClass('off');
          // }
          // $(window).resize(function() {
          //     if ( $(window).width() < 768 ) {
          //         if ( $('.owl-carousel').hasClass('off') ) {
          //             var owlActive = owl.owlCarousel(owlOptions);
          //             owl.removeClass('off');
          //         }
          //     } else {
          //         if ( !$('.owl-carousel').hasClass('off') ) {
          //             owl.addClass('off').trigger('destroy.owl.carousel');
          //             owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
          //         }
          //     }
          // });
          //   this.firstImage = 2;
          //   console.log(this.firstImage);
        }
      }, {
        key: "Themes",
        value: function Themes() {
          var _this17 = this;

          this.firstImage = 2;
          this.IMG.nativeElement.innerHTML = this.images[0].imageSrc; // this.firstImage = this.images[0].imageSrc;
          // this.categories = []

          this.catecoriesService.Themes(this.category).subscribe(function (res) {
            _this17.images = res;
          }); // $('.owl-nav').show();
          // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          // this.router.onSameUrlNavigation = 'reload';
          // this.router.navigate(['main']);
          //   this.router.navigateByUrl('main', { skipLocationChange: true }).then(() => {
          //     this.router.navigate(['main']);
          // });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// Material.nav()
          // Material.tab()
          // Material.zoomImg()
          // Material.carousel()
          // Material.selectOpt()
          // Material.scrolSpy()
        }
      }, {
        key: "initFromServer",
        value: function initFromServer() {
          var _this18 = this;

          this.catecoriesService.Themes(this.category).subscribe(function (res) {
            _this18.images = res;
            console.log(_this18.images);
            _this18.firstImageCarousel = res[0].imageSrc;
            var addresses = res; // Some array I got from async call

            var uniqueAddresses = Array.from(new Set(addresses.map(function (a) {
              return a.name;
            }))).map(function (name) {
              return addresses.find(function (a) {
                return a.name === name;
              });
            });
            _this18.categories = uniqueAddresses;
            console.log(uniqueAddresses);
          }); //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          //     this.router.navigate(['main']);
          // })

          this.produtsService.fetch().subscribe(function (res) {
            _this18.products = res;
            _this18.firstBackCanvasImage = res[1].type;
            _this18.dataService.products = res;
            _this18.orderDatas.productTypeName = _this18.products[1].name;
          });
          this.productscolorService.fetch().subscribe(function (res) {
            _this18.productBrands = res;
            _this18.productBrandsLinke0 = res[0].linkeBrand;
            _this18.productBrandsSrc0 = res[0].src;
          });
          this.fontService.fetch().subscribe(function (res) {
            _this18.fonts = res;
          });
          this.dataService.formatValue1.subscribe(function (res) {
            _this18.formatValue = res;
          });
          this.dataService.horVertt.subscribe(function (res) {
            _this18.horVert = res;
          });
          var checkWidth = window.innerWidth;
          this.canvasHtmlWidth = this.dataService.canvasHtmlWidth;
          this.canvasHtmlHeight = this.dataService.canvasHtmlHeight;
          this.canvasCenteredPosition = this.dataService.canvasCenteredPosition; //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          //Add 'implements OnInit' to the class.
        }
      }, {
        key: "sendMail",
        value: function sendMail() {
          var r = confirm("Are you shure!");

          if (r == true) {
            this.canvas.rasterize();
            var image = {
              image: this.canvas.reqImage,
              image1: this.canvas.reqImage1
            };
            this.httpService.sendEmail("/sendmail", image);

            (function (data) {
              var res = data;
              console.log('all is ok');
            });
          } else {
            return;
          }
        }
      }, {
        key: "valueChanged",
        value: function valueChanged(e) {// console.log(e.target.value);
          // this.canvas.value = e.target.value
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].nav();

          _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].tab();

          _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].zoomImg();

          _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].carousel();

          _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].selectOpt();

          _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].scrolSpy();

          _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].dropDown(); // console.log(this.indexBrand, this.firstImageBrand );
          // this.catecoriesService.fetch(this.category).subscribe(
          //   (res: Category[]) => {
          //     this.categories = res;
          //     console.log(this.categories, 'AAA');
          //   }
          // )


          this.canvas.setCanvasImage();
          this.linkeBrand = this.productBrands[0].link;
        }
      }, {
        key: "selectPicture",
        value: function selectPicture() {
          // console.log(this.products);
          // this.firstImage = 0;
          this.toggle = true; // $('.owlCarousel').hide()

          if (this.firstImage == 0 && this.IMG.nativeElement.innerHTML == '') {
            this.canvas.getImgPolaroid(this.images[0].imageSrc);
          } else if (this.firstImage == 1) {
            this.canvas.getImgPolaroid(this.IMG.nativeElement.innerHTML);
          } else if (this.firstImage == 2) {
            this.canvas.getImgPolaroid(this.images[0].imageSrc);
          }
        }
      }, {
        key: "filter",
        value: function filter(event) {
          // console.log('event', event.target.value);
          return event;
        }
      }, {
        key: "routerlink",
        value: function routerlink() {// this.roter.navigate(['/register'])
          // console.log('kkkkk');
        }
      }, {
        key: "rasterize",
        value: function rasterize() {
          this.canvas.rasterize();
        }
      }, {
        key: "rasterizeSVG",
        value: function rasterizeSVG() {
          this.canvas.rasterizeSVG();
        }
      }, {
        key: "saveCanvasToJSON",
        value: function saveCanvasToJSON() {
          this.canvas.saveCanvasToJSON();
        }
      }, {
        key: "loadCanvasFromJSON",
        value: function loadCanvasFromJSON() {
          this.canvas.loadCanvasFromJSON();
        }
      }, {
        key: "confirmClear",
        value: function confirmClear() {
          this.canvas.confirmClear();
        } // public changeSize() {
        //   // this.canvas.changeSize();
        // }

      }, {
        key: "addText",
        value: function addText() {
          this.canvas.addText();
        }
      }, {
        key: "getImgPolaroid",
        value: function getImgPolaroid(event) {
          this.canvas.getImgPolaroid(event);
        }
      }, {
        key: "removeImgPolaroid",
        value: function removeImgPolaroid(event) {
          console.log(event);
        }
      }, {
        key: "addImageOnCanvas",
        value: function addImageOnCanvas(url) {
          this.canvas.addImageOnCanvas(url);
        }
      }, {
        key: "readUrl",
        value: function readUrl(event) {
          this.canvas.readUrl(event);
        }
      }, {
        key: "removeWhite",
        value: function removeWhite(url) {
          this.canvas.removeWhite(url);
        }
      }, {
        key: "addFigure",
        value: function addFigure(figure) {
          this.canvas.addFigure(figure);
        }
      }, {
        key: "removeSelected",
        value: function removeSelected() {
          this.canvas.removeSelected();
        }
      }, {
        key: "sendToBack",
        value: function sendToBack() {
          this.canvas.sendToBack();
        }
      }, {
        key: "bringToFront",
        value: function bringToFront() {
          this.canvas.bringToFront();
        }
      }, {
        key: "clone",
        value: function clone() {
          this.canvas.clone();
        }
      }, {
        key: "moveWithFormat",
        value: function moveWithFormat(a, b) {
          this.canvas.moveWithFormat(a, b);
        }
      }, {
        key: "cleanSelect",
        value: function cleanSelect() {
          this.canvas.cleanSelect();
        }
      }, {
        key: "setCanvasFill",
        value: function setCanvasFill() {
          this.canvas.setCanvasFill();
        }
      }, {
        key: "setCanvasImage",
        value: function setCanvasImage() {
          var _this19 = this;

          // this.arrColor.length = 0;
          this.dataService.indexBrandType = this.indexBrandType;
          this.dataService.products = this.products;
          var productType = this.products.filter(function (element) {
            return element.type === _this19.canvas.props.canvasImage;
          });
          this.dataService.formatSizeSwich();
          this.arrColor = productType[0].hex;
          this.productBrandSizes = productType[0].size; //allsize ... productType[0].size

          this.canvas.setCanvasImage(); // console.log(this.indexBrandType);
          // this.dataService.indexBrandType = this.indexBrandType;
          // this.productBrandColor();
        }
      }, {
        key: "productOrderDatas",
        value: function productOrderDatas() {
          this.order.orderDatas.productTypeName = this.orderDatas.productTypeName;
          this.order.orderDatas.brendName = this.orderDatas.brendName;
          this.order.orderDatas.productColor = this.orderDatas.productColor;
          this.order.orderDatas.productSize = this.orderDatas.productSize;
        }
      }, {
        key: "sizeValuePass",
        value: function sizeValuePass(a) {
          this.dataService.sizeValue = a;
          this.dataService.formatSizeSwich(); //mobile

          if (window.innerWidth < 600) {
            this.canvas.moveWithFormat(this.dataService.scaleKey / 0.36, true);
          } else {
            this.canvas.moveWithFormat(this.dataService.scaleKey, true);
          }

          this.canvas.canvas.discardActiveObject().renderAll();
        }
      }, {
        key: "productBrandColor",
        value: function productBrandColor() {
          var _this20 = this;

          this.canvas.productsTypeColor(); // this.productBrandColors.length = 0;

          var productBrandName = this.productBrands.filter(function (element) {
            return element.name === _this20.canvas.props.brandName;
          });
          var productBrandColors = productBrandName[0].productColor;
          this.productBrandColors = this.arrColor.filter(function (o1) {
            return productBrandColors.some(function (o2) {
              return o1 === o2;
            });
          });
        }
      }, {
        key: "productBrandSize",
        value: function productBrandSize() {
          var _this21 = this;

          var productBrandSize = this.productBrands.filter(function (element) {
            return element.name === _this21.canvas.props.brandName;
          });
          this.productBrandSizes = productBrandSize[0].size;
        }
      }, {
        key: "productsTypeColor",
        value: function productsTypeColor() {
          if (this.allColors === true) {
            this.order.orderDatas.colorDefoult = this.arrColor[0]; // console.log(this.arrColor[0]);
          } else if (this.allColors === false) {
            this.order.orderDatas.colorDefoult = this.productBrandColors[0]; // console.log(this.arrColor[0]);
            // this.canvas.renderAll();
          }

          this.canvas.productsTypeColor();
        }
      }, {
        key: "setId",
        value: function setId() {
          this.canvas.setId();
        }
      }, {
        key: "setDistance",
        value: function setDistance() {
          this.canvas.setDistance(); // console.log('distance');
        }
      }, {
        key: "setOpacity",
        value: function setOpacity() {
          this.canvas.setOpacity();
        }
      }, {
        key: "setFill",
        value: function setFill() {
          this.canvas.setFill();
        }
      }, {
        key: "setFontFamily",
        value: function setFontFamily() {
          this.canvas.setFontFamily();
        }
      }, {
        key: "setTextAlign",
        value: function setTextAlign(value) {
          this.canvas.setTextAlign(value);
        }
      }, {
        key: "setBold",
        value: function setBold() {
          this.canvas.setBold();
        }
      }, {
        key: "setFontStyle",
        value: function setFontStyle() {
          this.canvas.setFontStyle();
        } // public hasTextDecoration(value) {
        //   this.canvas.hasTextDecoration(value);
        //   console.log(value);
        // }

      }, {
        key: "canvasDrawing",
        value: function canvasDrawing(value) {
          this.canvas.canvasDrawing(value);
        }
      }, {
        key: "setTextDecoration",
        value: function setTextDecoration(value) {
          this.canvas.setTextDecoration(value);
        }
      }, {
        key: "setFontSize",
        value: function setFontSize() {
          this.canvas.setFontSize();
        }
      }, {
        key: "setLineHeight",
        value: function setLineHeight() {// this.canvas.setLineHeight();
        }
      }, {
        key: "setCharSpacing",
        value: function setCharSpacing() {
          this.canvas.setCharSpacing();
        } // public rasterizeJSON() {
        //   this.canvas.rasterizeJSON();
        // }

      }, {
        key: "link",
        value: function link() {
          console.log(this.canvas.linkk);
          console.log(this.canvas.linkk);
        }
      }]);

      return SiteLayoutComponent;
    }();

    SiteLayoutComponent.ɵfac = function SiteLayoutComponent_Factory(t) {
      return new (t || SiteLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_services__WEBPACK_IMPORTED_MODULE_4__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_products_service__WEBPACK_IMPORTED_MODULE_6__["ProdutsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_productscolor_service__WEBPACK_IMPORTED_MODULE_7__["ProdutsColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_fonts_service__WEBPACK_IMPORTED_MODULE_8__["FontService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_11__["OrderDatasService"]));
    };

    SiteLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SiteLayoutComponent,
      selectors: [["app-site-layout"]],
      viewQuery: function SiteLayoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.IMG = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.coord = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.owlElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputColor = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divvv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.owlCarousel = _t.first);
        }
      },
      decls: 441,
      vars: 214,
      consts: [[1, "full-width"], [1, "row"], [1, "col", "s12", "m6", "l3", "xl2", "offset-s1", "offset-m3", "offset-l2", "offset-xl2"], [1, "imgBox"], [1, "col", "s12", "m12", "l12", "xl12", "offset-s0", "offset-m0", "offset-l0", "offset-xl0", 2, "top", "-0.2%"], ["role", "group", "aria-label", "...", 1, "btn-group", 2, "position", "absolute", "z-index", "5", "top", "0"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send to back", "type", "button", "class", "btn btn-small indigo lighten-3", "style", "height: 28px;", 3, "disabled", "click", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send to front", "type", "button", "class", "btn btn-small indigo lighten-3", "style", "height: 28px;", 3, "disabled", "click", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Clone", "type", "button", "class", "btn btn-small indigo lighten-3", "style", "height: 28px;", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-small indigo lighten-3", "style", "cursor: pointer; width: 80px; height: 28px;", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Clone", "type", "button", "class", "btn-small #00e676", "style", "height: 28px;", 3, "click", 4, "ngIf"], ["style", "overflow-y: scroll; max-width: 100%;\n                overflow-x: hidden; width: 250px; max-height: 300px; z-index: 1; margin-top: 5px; position: relative; padding: 10px 10px 0px 0px; background-color: #3d365a73", 4, "ngIf"], ["class", "col s7 m3 l4 xl10 offset-s0 offset-m9 offset-l6 offset-xl6", "style", "margin-top: 110%; position: absolute; z-index: 2; width: 180px; height: 100px;", 4, "ngIf"], [1, "divv", 2, "display", "none"], ["imagePath", ""], [1, "col", "offset-s1", "offset-m4", "offset-l3", "offset-xl6", 2, "margin-top", "2%", "position", "absolute", "z-index", "1"], ["style", "margin-left: 25%; position: absolute; margin-top: 120%; z-index: 3;", 4, "ngIf"], [1, "canvas", 3, "ngStyle"], ["canvas", ""], [1, "owlCarousel", "mobile", "owl-theme", "selectPic", "col", "s12", "m12", "l8", "xl8", "offset-s0", "offset-m0", "offset-l0", "offset-xl0", 2, "position", "absolute", "z-index", "0", 3, "ngClass", "resize"], ["id", "myCarousel", 3, "options", "translated"], ["owlElement", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "id", "image.id"], [2, "overflow-y", "scroll", "width", "100%", "max-width", "100%", "overflow-x", "hidden", "max-height", "400px", "position", "absolute", "overflow-x", "hidden", "margin-top", "130%"], ["id", "nav-mobile", 1, "center-align", "hide-on-med-and-up", 2, "background-color", "rgb(228, 232, 243)", "height", "580px", "overflow-y", "hidden", "overflow-x", "hidden"], [1, "tabs", "tabs-fixed-width", "tab-demo", "z-depth-1", 2, "height", "40px", "background-color", "rgb(255, 255, 255)"], [1, "tab"], ["id", "ilo", "href", "#test1"], [1, "small", "material-icons", 3, "ngStyle"], ["href", "#test2"], ["href", "#test3"], ["id", "test1", 1, "col", "s12", "offset-s0"], [1, "colorConteiner", "left-align"], [2, "overflow-y", "scroll", "max-width", "100%", "overflow-x", "hidden", "max-height", "400px", "margin-top", "2%"], ["class", "card-panel hoverable ", "style", "margin-top: 3%; margin-right: 0%;", "id", "show", 3, "click", "colorPickerChange", 4, "ngFor", "ngForOf"], [1, "card", 2, "margin-top", "5%"], [1, "card-content", 2, "height", "120px", "width", "100%"], [3, "href"], [1, "activator", 2, "width", "40%", "height", "auto", "display", "flex", "justify-content", "center", "margin-top", "0%", "align-items", "center", 3, "src"], [1, "card-tabs"], [1, "tabs", "tabs-fixed-width"], ["class", "tab", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-content", "grey", "lighten-4"], ["role", "dialog", "aria-label", "Color picker", 1, "", 2, "margin-top", "0%"], [4, "ngIf"], [1, "row", 2, "margin-top", "5%"], ["class", "col s5 m3 l2 offset-s0 offset-m0 offset-l0", 4, "ngFor", "ngForOf"], ["class", "col s12", 4, "ngIf"], ["id", "test2", 1, "active", "row"], [1, "col", "offset-s0", 2, "margin-top", "10px"], [1, "col", "s2", 2, "margin", "5px"], ["id", "origin", "type", "radio", "name", "test", "value", "big", "checked", ""], ["width", "60px", "height", "60px", "src", "../assets/img/Origin.png", 1, "hoverable"], ["id", "grayscale", "type", "radio", "name", "test", "value", "big"], ["width", "60px", "height", "60px", "src", "../assets/img/BlackWhite.png", 1, "hoverable"], ["id", "vintage", "type", "radio", "name", "test", "value", "grayscale"], ["width", "60px", "height", "60px", "src", "../assets/img/Vintage.png", 1, "hoverable"], ["id", "sepia", "type", "radio", "name", "test", "value", "sepia"], ["width", "60px", "height", "60px", "src", "../assets/img/oldstyle.png", 1, "hoverable"], ["id", "invert", "type", "radio", "name", "test", "value", "invert"], ["width", "60px", "height", "60px", "src", "../assets/img/Negative.png", 1, "hoverable"], [1, "col", "s3", "offset-s0;", 2, "margin-top", "10px", "cursor", "pointer"], ["id", "shadow", "type", "checkbox", 1, "filled-in", 3, "disabled", "change"], [1, "fa", "fa-cloud", 2, "font-size", "40px", "color", "#009688", "text-shadow", "12px 8px 4px #4d4a4a"], [1, "col", "s12", "offset-s0", 2, "padding-top", "5px"], [1, "col", "s2"], [1, "col", "s8"], ["type", "range", "id", "hue-value", "value", "0", "min", "0", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], [1, "col", "s12", "offset-s0", 2, "padding-top", "0px"], ["type", "range", "id", "saturation", "value", "0", "min", "-1", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["type", "range", "id", "blur", "value", "0", "min", "0", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["type", "range", "id", "contrast1", "value", "0", "min", "-1", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["type", "range", "id", "noise", "value", "100", "min", "0", "max", "1000", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["id", "nav-mobile", 1, "tabBox", "center-align", "hide-on-med-and-down", "col", "s12", 2, "background-color", "rgb(228, 232, 243)", "padding-top", "10px"], [1, "tabs", "tabs-fixed-width", "tab-demo", "z-depth-1", 2, "height", "40px"], ["href", "#tab1", 1, "active"], ["href", "#tab2"], ["href", "#tab3"], ["id", "tab1"], [1, ""], [1, "file-field", "input-field", "col", "s12"], ["style", "border-style: dashed; opacity: 0.4; margin-top: 0px;", 3, "click", 4, "ngIf"], ["id", "testImage", 1, "col", "s4", "offset-s3", 2, "margin-top", "-20px"], ["class", "images-item-upload", "style", "width: 130px; ", 3, "src", "click", 4, "ngIf"], ["type", "button", "class", "col s3 offset-s1 btn #ef5350 red lighten-1", 3, "click", 4, "ngIf"], ["class", "col s12 offset-s0", 4, "ngIf"], ["id", "tab2", 1, "row"], ["role", "group", "aria-label", "...", 2, "margin-left", "60px", "width", "280px", "margin-top", "350px"], ["id", "square", "width", "40px", "height", "55px", "src", "../assets/img/square.png", "alt", "", 1, "col", "s3", 3, "click"], ["id", "triangle", "width", "45px", "height", "55px", "src", "../assets/img/threeangle.png", "ciricle.png", "", "alt", "", 1, "col", "s3", 3, "click"], ["id", "circle", "width", "40px", "height", "55px", "src", "../assets/img/ciricle.png", "alt", "", 1, "col", "s3", 3, "click"], ["id", "tab3", 1, "col", "s12"], ["id", "test3", 1, "col", "s12"], [2, "margin-top", "20px", "float", "left"], [1, "input-field", "col", "s3", 2, "margin-top", "5px"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Done", "type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["aria-hidden", "true", 1, "large", "material-icons"], [1, "input-field", "col", "s8", 2, "margin-top", "0px"], ["id", "icon_prefix2", "type", "text", 1, "materialize-textarea", 3, "ngModel", "disabled", "ngModelChange", "click"], ["for", "icon_prefix2"], [1, "col", "s3", 2, "margin-top", "20px", "cursor", "pointer"], ["id", "shadowText", "type", "checkbox", 1, "filled-in", 3, "change"], [1, "col", "s5", "offset-s0"], [1, "col", "s2", 3, "ngStyle"], [1, "col", "s8", "offset-s1"], ["type", "text", 1, "form-control", 3, "ngStyle", "cpPosition", "colorPicker", "value", "colorPickerChange"], [1, "col", "s7", "offset-s0"], [1, "col", "s2", "offset-s0", 3, "ngStyle"], [1, "browser-default", 3, "ngStyle", "ngModel", "ngModelChange", "change"], ["value", "", "disabled", "", "selected", ""], ["value", "helvetica", "selected", ""], [3, "ngStyle", "value", 4, "ngFor", "ngForOf"], [1, "col", "s12", "offset-s0", 2, "padding-top", "20px"], [1, "col", "s12", "offset-s0", "z-depth-2"], [1, "btn-flat", 3, "ngClass", "click"], [1, "material-icons"], [1, "btn-flat", 3, "click"], [1, "btn-flat", "waves-teal", 3, "ngClass", "click"], [1, "col", "s12", "offset-s0", 2, "padding-top", "25px"], ["type", "range", 3, "ngModel", "ngModelChange"], ["type", "range", "step", "10", "min", "-200", "max", "300", 3, "ngModel", "ngModelChange"], ["action", "#"], [2, "float", "left"], ["name", "group1", "type", "radio", "checked", "", 2, "margin-left", "1%", 3, "change", "click"], ["name", "group1", "type", "radio", 2, "margin-left", "10px", 3, "disabled", "change", "click"], ["class", "col s12 offset-s0", "style", "padding-top: 20px;", 4, "ngIf"], [1, "toolNav", "col", "s5", "m3", "l4", "xl4", "offset-s7", "offset-m9", "offset-l8", "offset-xl8"], ["id", "nav-mobile", 1, "center-align", "hide-on-med-and-down", 2, "background-color", "rgb(228, 232, 243)", "height", "580px", "overflow-y", "hidden", "overflow-x", "hidden"], ["id", "ilo", "href", "#futerSide1"], ["href", "#futerSide2"], ["href", "#futerSide3"], ["id", "futerSide1", 1, "col", "s12", "offset-s0"], ["id", "futerSide2", 1, "active", "row"], ["id", "futerSide3", 1, "col", "s12"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send to back", "type", "button", 1, "btn", "btn-small", "indigo", "lighten-3", 2, "height", "28px", 3, "disabled", "click"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send to front", "type", "button", 1, "btn", "btn-small", "indigo", "lighten-3", 2, "height", "28px", 3, "disabled", "click"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Clone", "type", "button", 1, "btn", "btn-small", "indigo", "lighten-3", 2, "height", "28px", 3, "disabled", "click"], [1, "btn-small", "indigo", "lighten-3", 2, "cursor", "pointer", "width", "80px", "height", "28px"], ["for", "", 2, "top", "50%", "float", "left", "margin", "0", "margin-left", "-8px", "font-size", "large", "font-family", "Arial, Helvetica, sans-serif", "color", "#ffffff"], [2, "margin-left", "10px"], ["src", "../assets/img/oie_aHdWpUcmnmvA.png", 2, "margin-top", "3%", "display", "inline-block", "margin", "0px", "cursor", "pointer", "border-radius", "5%", 3, "ngClass"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Clone", "type", "button", 1, "btn-small", "#00e676", 2, "height", "28px", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "right"], [2, "overflow-y", "scroll", "max-width", "100%", "overflow-x", "hidden", "width", "250px", "max-height", "300px", "z-index", "1", "margin-top", "5px", "position", "relative", "padding", "10px 10px 0px 0px", "background-color", "#3d365a73"], ["class", "colorBox;  offset-m4 offset-l3 offset-xl5", "style", "margin: 0;", 3, "click", 4, "ngFor", "ngForOf"], [1, "colorBox;", "offset-m4", "offset-l3", "offset-xl5", 2, "margin", "0", 3, "click"], [1, "imageDiv", 2, "margin", "-5px"], ["for", "", 2, "top", "50%", "transform", "translateY(-50%)", "margin", "0", "left", "13px", "position", "relative", "font-family", "Arial, Helvetica, sans-serif", "color", "#ffffff"], ["alt", "", 1, "imageBox", 2, "top", "-45%", "margin", "0", "position", "relative", "margin-left", "80%", 3, "src"], [2, "border", "1px solid rgba(255, 255, 255, 0.507)"], [1, "col", "s7", "m3", "l4", "xl10", "offset-s0", "offset-m9", "offset-l6", "offset-xl6", 2, "margin-top", "110%", "position", "absolute", "z-index", "2", "width", "180px", "height", "100px"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Clean Canvas", "type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["aria-hidden", "true"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send", "type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [2, "margin-left", "25%", "position", "absolute", "margin-top", "120%", "z-index", "3"], [2, "z-index", "10"], [2, "margin-top", "-40px", "margin-left", "160px", "position", "absolute", "cursor", "pointer", "z-index", "10"], ["id", "shadowSVG", "type", "checkbox", 1, "filled-in", 3, "change"], ["carouselSlide", "", 3, "id"], [1, "mobileImageLeft"], [3, "src"], ["data-toggle", "tooltip", "style", "margin-top: 0px;", "class", "but btn-small #00e676 green accent-4 black-text", 3, "click", 4, "ngIf"], ["data-toggle", "tooltip", 1, "but", "btn-small", "#00e676", "green", "accent-4", "black-text", 2, "margin-top", "0px", 3, "click"], [1, "check", "material-icons", 2, "margin-left", "-9px", "margin-top", "-0px"], ["id", "show", 1, "card-panel", "hoverable", 2, "margin-top", "3%", "margin-right", "0%", 3, "click", "colorPickerChange"], [1, "productType", 3, "src"], [2, "margin-top", "-40%", "margin-left", "-30%"], [1, "tab", 3, "click"], ["href", "#test1[i]"], ["class", "card-panel hoverable", "role", "option", 3, "background", "click", "colorPickerChange", 4, "ngFor", "ngForOf"], ["role", "option", 1, "card-panel", "hoverable", 3, "click", "colorPickerChange"], ["class", "card-panel hoverable", "role", "option", 3, "background", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "card-panel", "hoverable", 3, "click"], [1, "col", "s5", "m3", "l2", "offset-s0", "offset-m0", "offset-l0"], ["type", "radio", "name", "sizeKey", "value", "big", 3, "disabled", "checked", "click"], [2, "font-size", "120%", "text-align", "center", "width", "120%"], [1, "col", "s12"], [1, "card-body"], ["class", "custom-item", 4, "ngIf"], [1, "custom-item"], [1, "custom-item-title"], [1, "custom-item-body"], ["type", "text", "placeholder", "http://example.jpg", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", 1, "form-control", 3, "cpPosition", "colorPicker", "value", "colorPickerChange"], ["inputColor", ""], [2, "border-style", "dashed", "opacity", "0.4", "margin-top", "0px", 3, "click"], [1, "large", "material-icons", 3, "ngStyle"], ["type", "file", "multiple", "", 1, "input", 3, "change"], [1, "images-item-upload", 2, "width", "130px", 3, "src", "click"], ["type", "button", 1, "col", "s3", "offset-s1", "btn", "#ef5350", "red", "lighten-1", 3, "click"], [1, "col", "s12", "offset-s0"], ["class", "col s10 offset-s0", 4, "ngIf"], [1, "col", "s10", "offset-s0"], [1, "col", "s2", 2, "padding-top", "0px"], ["type", "text", 1, "form-control", 2, "height", "20px", "top", "5px", 3, "cpPosition", "colorPicker", "value", "colorPickerChange"], [3, "ngStyle"], [3, "ngStyle", "value"], ["type", "range", "step", "3", "min", "80", "max", "300", 3, "ngModel", "ngModelChange"], ["type", "range", "step", "1", "min", "1", "max", "80", 3, "ngModel", "ngModelChange"]],
      template: function SiteLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SiteLayoutComponent_button_7_Template, 3, 1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SiteLayoutComponent_button_8_Template, 3, 1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SiteLayoutComponent_button_9_Template, 3, 1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SiteLayoutComponent_button_10_Template, 5, 5, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SiteLayoutComponent_button_11_Template, 4, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SiteLayoutComponent_div_12_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SiteLayoutComponent_div_13_Template, 7, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SiteLayoutComponent_div_17_Template, 6, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-editor-pic", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-size-format");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SiteLayoutComponent_Template_div_resize_22_listener($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "owl-carousel-o", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("translated", function SiteLayoutComponent_Template_owl_carousel_o_translated_23_listener($event) {
            return ctx.getPassedData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SiteLayoutComponent_ng_container_25_Template, 2, 1, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SiteLayoutComponent_ng_template_26_Template, 0, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "color_lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "text_format");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, SiteLayoutComponent_div_45_Template, 4, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, SiteLayoutComponent_li_54_Template, 3, 1, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SiteLayoutComponent_div_57_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, SiteLayoutComponent_div_58_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, SiteLayoutComponent_label_60_Template, 5, 3, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, SiteLayoutComponent_div_62_Template, 8, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_82_listener() {
            return ctx.shadow = !ctx.shadow;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Distance");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.distance = $event;
          })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_88_listener() {
            return ctx.setDistance();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Saturation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_95_listener($event) {
            return ctx.saturation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Blur");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_102_listener($event) {
            return ctx.blur = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Contrast");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_109_listener($event) {
            return ctx.contrast = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Noise");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_116_listener($event) {
            return ctx.noise = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "ul", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "monochrome_photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "text_format");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, SiteLayoutComponent_div_136_Template, 4, 2, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, SiteLayoutComponent_img_138_Template, 1, 1, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, SiteLayoutComponent_button_139_Template, 3, 0, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, SiteLayoutComponent_div_140_Template, 8, 2, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_143_listener() {
            ctx.addFigure("square");
            return ctx.toggle = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "img", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_144_listener() {
            ctx.addFigure("triangle");
            return ctx.toggle = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_145_listener() {
            ctx.addFigure("circle");
            return ctx.toggle = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, SiteLayoutComponent_div_146_Template, 8, 3, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_153_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            _r9.discardActiveObj();

            ctx.addText();
            ctx.expression = true;
            ctx.toggle = true;
            return ctx.activatebutton = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "done_all");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_157_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.textString = $event;
          })("click", function SiteLayoutComponent_Template_input_click_157_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.discardActiveObj();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "label", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_161_listener() {
            return ctx.shadowText = !ctx.shadowText;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](164, SiteLayoutComponent_div_164_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](165, SiteLayoutComponent_div_165_Template, 3, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Fill");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_Template_input_colorPickerChange_170_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.fill = $event;
          })("colorPickerChange", function SiteLayoutComponent_Template_input_colorPickerChange_170_listener() {
            return ctx.setFill();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Font ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "select", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_select_ngModelChange_175_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.fontFamily = $event;
          })("change", function SiteLayoutComponent_Template_select_change_175_listener() {
            return ctx.setFontFamily();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Choose your option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "option", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Helvetica");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](180, SiteLayoutComponent_option_180_Template, 2, 5, "option", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_183_listener() {
            ctx.setBold();
            return ctx.isClickedBold = !ctx.isClickedBold;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "format_bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "a", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_186_listener() {
            ctx.setFontStyle();
            return ctx.isClickedItalic = !ctx.isClickedItalic;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "format_italic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "a", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_189_listener() {
            ctx.setTextDecoration("overline");
            return !(ctx.isClickedOverline = !ctx.isClickedOverline);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "vertical_align_top");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "a", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_192_listener() {
            ctx.setTextDecoration("underline");
            return !(ctx.isClickedUnderline = !ctx.isClickedUnderline);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "vertical_align_bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "a", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_195_listener() {
            ctx.setTextDecoration("line-through");
            return !(ctx.isClickedCenterline = !ctx.isClickedCenterline);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "vertical_align_center");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_198_listener() {
            return ctx.setTextAlign("left");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "format_align_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "button", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_201_listener() {
            return ctx.setTextAlign("center");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "format_align_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Opasity");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_208_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.opacity = $event;
          })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_208_listener() {
            return ctx.setOpacity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Char Spacing");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_215_listener() {
            return ctx.setCharSpacing();
          })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_215_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.charSpacing = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Arc");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "form", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_225_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.textCurved = 1;
          })("click", function SiteLayoutComponent_Template_input_click_225_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.reRender();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Straight");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_229_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.textCurved = 2;
          })("click", function SiteLayoutComponent_Template_input_click_229_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            _r9.reRender1();

            return _r9.props.diametr = 300;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Bend");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](232, SiteLayoutComponent_div_232_Template, 5, 2, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](233, SiteLayoutComponent_div_233_Template, 5, 2, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "a", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "color_lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "a", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "a", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "text_format");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](252, SiteLayoutComponent_div_252_Template, 4, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](261, SiteLayoutComponent_li_261_Template, 3, 1, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](264, SiteLayoutComponent_div_264_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](265, SiteLayoutComponent_div_265_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](267, SiteLayoutComponent_label_267_Template, 5, 3, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](268, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](269, SiteLayoutComponent_div_269_Template, 8, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_289_listener() {
            return ctx.shadow = !ctx.shadow;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Distance");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_295_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.distance = $event;
          })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_295_listener() {
            return ctx.setDistance();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Saturation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_302_listener($event) {
            return ctx.saturation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Blur");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_309_listener($event) {
            return ctx.blur = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "Contrast");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_316_listener($event) {
            return ctx.contrast = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Noise");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_323_listener($event) {
            return ctx.noise = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "ul", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "monochrome_photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "text_format");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](343, SiteLayoutComponent_div_343_Template, 4, 2, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](345, SiteLayoutComponent_img_345_Template, 1, 1, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](346, SiteLayoutComponent_button_346_Template, 3, 0, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](347, SiteLayoutComponent_div_347_Template, 8, 2, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_350_listener() {
            ctx.addFigure("square");
            return ctx.toggle = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "img", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_351_listener() {
            ctx.addFigure("triangle");
            return ctx.toggle = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_352_listener() {
            ctx.addFigure("circle");
            return ctx.toggle = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](353, SiteLayoutComponent_div_353_Template, 8, 3, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_360_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            _r9.discardActiveObj();

            ctx.addText();
            ctx.expression = true;
            ctx.toggle = true;
            return ctx.activatebutton = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "done_all");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_364_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.textString = $event;
          })("click", function SiteLayoutComponent_Template_input_click_364_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.discardActiveObj();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "Input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "label", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_368_listener() {
            return ctx.shadowText = !ctx.shadowText;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](371, SiteLayoutComponent_div_371_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](372, SiteLayoutComponent_div_372_Template, 3, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Fill");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_Template_input_colorPickerChange_377_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.fill = $event;
          })("colorPickerChange", function SiteLayoutComponent_Template_input_colorPickerChange_377_listener() {
            return ctx.setFill();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Font ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "select", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_select_ngModelChange_382_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.fontFamily = $event;
          })("change", function SiteLayoutComponent_Template_select_change_382_listener() {
            return ctx.setFontFamily();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "Choose your option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "option", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Helvetica");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](387, SiteLayoutComponent_option_387_Template, 2, 5, "option", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "a", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_390_listener() {
            ctx.setBold();
            return ctx.isClickedBold = !ctx.isClickedBold;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "format_bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "a", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_393_listener() {
            ctx.setFontStyle();
            return ctx.isClickedItalic = !ctx.isClickedItalic;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "format_italic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "a", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_396_listener() {
            ctx.setTextDecoration("overline");
            return !(ctx.isClickedOverline = !ctx.isClickedOverline);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "vertical_align_top");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "a", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_399_listener() {
            ctx.setTextDecoration("underline");
            return !(ctx.isClickedUnderline = !ctx.isClickedUnderline);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "vertical_align_bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "a", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_402_listener() {
            ctx.setTextDecoration("line-through");
            return !(ctx.isClickedCenterline = !ctx.isClickedCenterline);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "vertical_align_center");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "button", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_405_listener() {
            return ctx.setTextAlign("left");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "format_align_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "button", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_408_listener() {
            return ctx.setTextAlign("center");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "format_align_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "Opasity");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_415_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.opacity = $event;
          })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_415_listener() {
            return ctx.setOpacity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "Char Spacing");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_422_listener() {
            return ctx.setCharSpacing();
          })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_422_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.charSpacing = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "Arc");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "form", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_432_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.textCurved = 1;
          })("click", function SiteLayoutComponent_Template_input_click_432_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.reRender();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Straight");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_436_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            return _r9.props.textCurved = 2;
          })("click", function SiteLayoutComponent_Template_input_click_436_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            _r9.reRender1();

            return _r9.props.diametr = 300;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "Bend");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](439, SiteLayoutComponent_div_439_Template, 5, 2, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](440, SiteLayoutComponent_div_440_Template, 5, 2, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.canvasCount !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](174, _c11, ctx.canvasCenteredPosition));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](176, _c12, ctx.toggle === true));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](178, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](179, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](180, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.indexBrand === null ? ctx.productBrands[0].linkeBrand : ctx.productBrands[ctx.indexBrand].linkeBrand, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.indexBrand === null ? ctx.productBrands[0].src : ctx.productBrands[ctx.indexBrand].src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productBrands);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.allColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](61, 168, ctx.productBrandSizes, ctx.ret));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r9.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.canvasCount == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.distance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.distance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.saturation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.saturation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blur);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.blur);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contrast);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contrast);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.noise);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.noise);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](181, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](182, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](183, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity && _r9.selected && _r9.selected.type != "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.selected && _r9.selected.type != "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.props.inputDisabled === "inputDisabled" && _r9.props.textCurved === 2 && _r9.intCountText !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.textString)("disabled", _r9.props.inputDisabled === "inputDisabled" && _r9.props.textCurved === 2 && _r9.intCountText !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.selected && _r9.selected.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r9.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](184, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r9.props.fill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](185, _c14))("cpPosition", "bottom")("colorPicker", _r9.props.fill)("value", _r9.props.fill);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](186, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](187, _c14))("ngModel", _r9.props.fontFamily);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fonts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedBold);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](188, _c15, _r9.props.fontWeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedItalic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](190, _c15, _r9.props.fontStyle));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedOverline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedUnderline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedCenterline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](192, _c15, _r9.props.textAlign == "left"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](194, _c15, _r9.props.textAlign == "center"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.opacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.opacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.charSpacing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.charSpacing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.intCountText > 1 && _r9.intCountText !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.props.textCurved !== 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.props.textCurved !== 1 && _r9.props.diametr < 300);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](196, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](197, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](198, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.indexBrand === null ? ctx.productBrands[0].linkeBrand : ctx.productBrands[ctx.indexBrand].linkeBrand, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.indexBrand === null ? ctx.productBrands[0].src : ctx.productBrands[ctx.indexBrand].src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productBrands);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.allColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](268, 171, ctx.productBrandSizes, ctx.ret));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r9.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.canvasCount == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.distance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.distance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.saturation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.saturation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blur);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.blur);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contrast);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contrast);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.noise);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.noise);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](199, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](200, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](201, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity && _r9.selected && _r9.selected.type != "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.selected && _r9.selected.type != "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.props.inputDisabled === "inputDisabled" && _r9.props.textCurved === 2 && _r9.intCountText !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.textString)("disabled", _r9.props.inputDisabled === "inputDisabled" && _r9.props.textCurved === 2 && _r9.intCountText !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.selected && _r9.selected.type == "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r9.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](202, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r9.props.fill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](203, _c14))("cpPosition", "bottom")("colorPicker", _r9.props.fill)("value", _r9.props.fill);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](204, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](205, _c14))("ngModel", _r9.props.fontFamily);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fonts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedBold);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](206, _c15, _r9.props.fontWeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedItalic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](208, _c15, _r9.props.fontStyle));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedOverline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedUnderline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedCenterline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](210, _c15, _r9.props.textAlign == "left"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](212, _c15, _r9.props.textAlign == "center"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.opacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.opacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r9.props.charSpacing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r9.textEditor ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r9.props.charSpacing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r9.intCountText > 1 && _r9.intCountText !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.props.textCurved !== 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.props.textCurved !== 1 && _r9.props.diametr < 300);
        }
      },
      styles: ["@charset \"UTF-8\";\n.responsive {\n  width: 10%;\n  height: auto;\n}\n.Content_Preview {\n  top: 10px;\n  left: 480px;\n  width: calc(100% - 488px);\n  height: 520px;\n  position: relative;\n  /* border: 2px solid seagreen;  */\n  display: flex;\n  justify-content: flex-start;\n  /* align-content: flex-start; */\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[type=radio] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* IMAGE STYLES */\n[type=radio] + img {\n  cursor: pointer;\n}\n/* CHECKED STYLES */\n[type=radio]:checked + img {\n  outline: 2px solid #00ff22;\n}\n[type=radio]:checked + div {\n  outline: 2px solid black;\n  background-color: #000;\n  color: #ffffff;\n}\n[type=radio]:disabled + div {\n  outline: 2px solid #ffdfe5;\n  background-color: #ffdfe5;\n  color: #ff7490;\n}\n.sizeColor {\n  background: #000000;\n  color: white;\n}\n.toolNav {\n  top: 30px;\n  /* margin-left: 250px; */\n  margin-right: 0px;\n  /* width: 400px; */\n  /* height: 20px; */\n  position: absolute;\n  z-index: 1;\n  /* width: 300px; */\n}\n.siseBorder [type=radio]:checked {\n  outline: 2px solid #00ff22;\n}\n.toolsBox {\n  /* margin-left: 0px; */\n  width: 480px;\n  height: 500px;\n  /* justify-content: flex-end; */\n}\n.divv {\n  /* min-width: 280px;  */\n  height: 80px;\n}\n.imgFront {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n}\n.imgBox {\n  /* left: 10%; */\n  /* margin-left: 20%; */\n  /* border: 1px solid black; */\n  /* flex: 1; */\n}\n.imgBack {\n  width: 100%;\n  height: 100%;\n  /* position: relative; */\n  background-color: #cc2053;\n  /* border: 1px solid seagr\r\n   een;  */\n}\n.colorButton {\n  height: 30px;\n  width: 80px;\n  margin-top: 10px;\n  margin-left: 10px;\n}\ndiv.colorBox div:hover {\n  /* background-color: rgb(233, 26, 233); */\n  background-color: #00968721;\n}\n.imageBox {\n  background-color: white;\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  margin: 0px;\n  cursor: pointer;\n  border-radius: 5%;\n}\n.imageBox:hover {\n  transform: scale(1.5);\n  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n}\n.productType {\n  height: 230%;\n  margin: -80% 0% 10% -35%;\n}\n.productType:hover {\n  transform: scale(1);\n}\n.imageDiv {\n  height: 40px;\n}\n.imageDiv:hover {\n  background-color: #3d365abb;\n  margin-left: 5px;\n}\n[role=\"option\"] {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n  cursor: pointer;\n  padding: 5px;\n  border: 3px solid transparent;\n  border-radius: 50%;\n}\n.main-title {\n  margin-top: 10px;\n}\n.images-item {\n  width: 48%;\n  cursor: pointer;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n  padding: 3px;\n  max-width: 120px;\n}\n.images-item:hover {\n  opacity: 0.7;\n}\n.images-item-upload {\n  width: 80%;\n  cursor: pointer;\n  padding-bottom: 10px;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n}\n.images-item-upload:hover {\n  opacity: 0.7;\n}\n.custom-item .custom-item-title {\n  color: #666666;\n  font-weight: 600;\n}\n.custom-item .custom-item-body {\n  padding: 10px 0;\n}\n.max-height {\n  overflow: auto;\n  max-height: 300px;\n}\n.tabBoxNav {\n  padding-top: 20px;\n}\n[hidden] {\n  display: none !important;\n}\n.myClass {\n  background-color: teal;\n}\n[contentEditable=true]:empty:not(:focus):before {\n  content: attr(data-text);\n}\n.selectPic {\n  top: 220px;\n  height: 200px;\n  /* left: -50px; */\n  z-index: 1;\n  position: absolute;\n}\n.canvas {\n  margin-top: 20px;\n  z-index: 0;\n  position: absolute;\n  /* border: 2px dashed #e21010; */\n}\n.displayNone {\n  display: none;\n}\n/* .owl-item.center > div:after {\r\n  margin-top: 300px;\r\n  content: 'center';\r\n} */\n.medium {\n  filter: grayscale(50%);\n  transform: scale(0);\n  transition: .7s ease all;\n  /* margin:0 10px; */\n  opacity: 0.7;\n  /* padding-top: 20px; */\n}\n.big {\n  transform: scale(1);\n  transition: .7s ease all;\n  filter: grayscale(0);\n  opacity: 1;\n  /* padding-top: 90px;  */\n}\n.horizontal {\n  width: 45%;\n  height: auto;\n}\n.vertical {\n  padding-top: 13%;\n  width: 29%;\n  height: 90%;\n}\n@media (max-width: 1000px) {\n  div.owl-item\u2024active {\n    margin: 0;\n    transform: scale(0.7);\n  }\n}\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\ndiv.owl-item {\n  filter: grayscale(80%);\n  transition: 0.5s ease all;\n  opacity: 0.5;\n}\ndiv.owl-item.active {\n  filter: grayscale(80%);\n  transform: scale(0.6);\n  transition: 0.5s ease all;\n  /* margin:0 10px; */\n  opacity: 0.5;\n}\ndiv.owl-item.active.center {\n  transform: scale(1);\n  filter: grayscale(0%);\n  opacity: 1;\n}\nbody {\n  /* padding:0; */\n  /* margin:80px 0 0 0; */\n  font-family: Merriweather;\n  background: #ffffff;\n}\ndiv.owl-item {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.inner {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.inner a {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  transition: .3s ease border-color;\n}\n.inner a:hover {\n  border-color: white;\n}\n.black .inner a {\n  color: #000;\n  border-color: rgba(0, 0, 0, 0.4);\n}\n.black .inner a:hover {\n  border-color: #000;\n}\n.owl-carousel:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 8%;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -4%;\n  pointer-events: none;\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/aett_logo_slider.png) no-repeat center 50%;\n  background-size: 100% auto;\n}\n.owl-controls {\n  position: absolute;\n  margin-top: 300px;\n}\n.fa-chevron-left {\n  position: absolute;\n  top: 50%;\n  background-color: #000;\n  color: white;\n  margin: 0;\n  transition: all 0.3s ease-in-out;\n}\n.but {\n  width: 10px;\n  height: 30px;\n  border-radius: 50%;\n}\n.owl-dots {\n  text-align: center;\n  padding-top: 15px;\n}\n.owl-dots button.owl-dot {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #ccc;\n  margin: 0 3px;\n}\n.owl-dots button.owl-dot.active {\n  background-color: #000;\n}\n.owl-dots button.owl-dot:focus {\n  outline: none;\n}\nspan {\n  font-size: 100px;\n  position: relative;\n  top: -5px;\n}\n[role=\"option\"] {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n  cursor: pointer;\n  padding: 5px;\n  border: 3px solid transparent;\n  border-radius: 50%;\n}\n#canvas {\n  border: 2px dashed #cccccc;\n}\n.z-index {\n  display: none;\n}\n.owl-theme .owl-prev, .owl-theme .owl-next {\n  top: 40px;\n  position: absolute;\n  height: 100px;\n  color: inherit;\n  background: none;\n  border: none;\n  z-index: 100;\n}\n.owl-theme .owl-prev i, .owl-theme .owl-next i {\n  margin-top: 25px;\n  font-size: 2.5rem;\n  color: #000000;\n}\n.owl-theme .owl-prev {\n  left: 0;\n}\n.owl-theme .owl-next {\n  right: 0;\n}\n.owl-nav {\n  display: block !important;\n}\n.class1 {\n  display: none;\n}\n.class2 {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .mobile {\n    margin-top: -16%;\n    border: 0px dashed #ffffff;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .mobile {\n    margin-top: -3%;\n    border: 0px dashed #ffffff;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .mobileImageLeft {\n    margin-left: 20%;\n    width: 60%;\n    height: auto;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .mobileImageLeft {\n    margin-left: 24%;\n    width: 60%;\n    height: auto;\n  }\n}\n#show {\n  width: 70px;\n  height: 70px;\n  background: white;\n  border-radius: 10%;\n  float: left;\n  margin: 1%;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL3NpdGUtbGF5b3V0L0Q6XFxBbmd1bGFyXFxDb3B5IG9mIG9yaWdpbiBwcm9qZWN0IFQtc2hpcnRfbGFzdFxcdC1zaGlydFxcdC1zaGlydC1iYWNrZW5kXFx0LXNoaXJ0LWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dHNcXHNpdGUtbGF5b3V0XFxzaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBRENkO0FDRUE7RUFDRyxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlDQUFBO0VBQ0EsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiwrQkFBQTtFQUNBLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBRENsQjtBQUVBO0VDRU0sa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBREFmO0FDR0ksaUJBQUE7QURBSjtFQ0VNLGVBQWU7QURBckI7QUNHSSxtQkFBQTtBREFKO0VDRU0sMEJBQWtDO0FEQXhDO0FBRUE7RUNFTSx3QkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLGNBQWM7QURBcEI7QUFFQTtFQ0VNLDBCQUFxQztFQUNyQyx5QkFBb0M7RUFDcEMsY0FBeUI7QURBL0I7QUNLQztFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0FERmQ7QUNPQTtFQUNFLFNBQVM7RUFDVCx3QkFBQTtFQUNBLGlCQUFpQjtFQUNqQixrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBQTtBREpGO0FDT0E7RUFFSSwwQkFBa0M7QURMdEM7QUNTQTtFQUNJLHNCQUFBO0VBQ0EsWUFBYTtFQUNiLGFBQWE7RUFDYiwrQkFBQTtBRE5KO0FDVUE7RUFDSSx1QkFBQTtFQUNBLFlBQVk7QURQaEI7QUNXQTtFQUNHLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBRUg7QURWQTtBQ1lBO0VBRUUsZUFBQTtFQUNBLHNCQUFBO0VBSUEsNkJBQUE7RUFDQSxhQUFBO0FEYkY7QUNnQkE7RUFDRyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUFBO0VBQ0EseUJBQWtDO0VBQ2xDO1VEYk87QUFDVjtBQ2lCQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBRVgsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBRGZuQjtBQ21CQTtFQUNFLHlDQUFBO0VBS0EsMkJBQTJCO0FEcEI3QjtBQ3lCQTtFQUNHLHVCQUFvQztFQUdyQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUlmLGlCQUFpQjtBRDNCbkI7QUNnQ0E7RUFDRSxxQkFBcUI7RUFBRSxxRkFBQTtBRDVCekI7QUNnQ0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FEN0IxQjtBQ2dDQTtFQUNFLG1CQUFtQjtBRDdCckI7QUNnQ0E7RUFFRSxZQUFZO0FEOUJkO0FDaUNBO0VBRUUsMkJBQTJCO0VBQzNCLGdCQUFnQjtBRC9CbEI7QUFFQTtFQzZDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUVmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FENUNwQjtBQ2dEQTtFQUNFLGdCQUFnQjtBRDdDbEI7QUMrQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGdCQUFnQjtBRDVDbEI7QUMrQ0E7RUFDRSxZQUFZO0FENUNkO0FDK0NBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBRDVDOUI7QUMrQ0E7RUFDRSxZQUFZO0FENUNkO0FDZ0RBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBRDdDbEI7QUNnREE7RUFDRSxlQUFlO0FEN0NqQjtBQ2dEQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUQ3Q25CO0FDa0RBO0VBQ0UsaUJBQWlCO0FEL0NuQjtBQUVBO0VDaURFLHdCQUF3QjtBRC9DMUI7QUNrREE7RUFDRSxzQkFBdUI7QUQvQ3pCO0FBRUE7RUNpREUsd0JBQXVCO0FEL0N6QjtBQ2tEQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQUE7RUFDQSxVQUFVO0VBQ1Ysa0JBQWtCO0FEL0NwQjtBQ21EQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFBO0FEaERGO0FDcURBO0VBQ0UsYUFBYTtBRGxEZjtBQ3NEQTs7O0dEakRHO0FDc0RIO0VBRUUsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsbUJBQUE7RUFDQSxZQUFXO0VBQ1gsdUJBQUE7QURyREY7QUN5REE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysd0JBQUE7QUR0REY7QUN5REE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBRHREZDtBQ3lEQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztBRHREYjtBQzJEQTtFQUNFO0lBQXFCLFNBQVE7SUFBRSxxQkFBbUI7RUR0RGxEO0FBQ0Y7QUN3REE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBRHJEcEI7QUN3REE7RUFDRSxzQkFBc0I7RUFHdEIseUJBQXlCO0VBRXpCLFlBQVc7QUR4RGI7QUMyREE7RUFDRSxzQkFBc0I7RUFFdEIscUJBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixtQkFBQTtFQUNBLFlBQVc7QUR6RGI7QUM0REE7RUFFRSxtQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVM7QUQxRFg7QUM4REE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBd0I7RUFDeEIsbUJBQWtCO0FEM0RwQjtBQzhEQTtFQUNJLG1DQUFtQztFQUNuQyw0Q0FBZ0Q7QUQzRHBEO0FDOERBO0VBQU8sa0JBQWlCO0VBQUUsWUFBVztFQUFFLE9BQU07RUFBRSxRQUFPO0VBQUUsa0JBQWlCO0FEdER6RTtBQ3VEQTtFQUFTLFdBQVU7RUFBRSxxQkFBb0I7RUFBRSxpREFBZ0Q7RUFBRSxpQ0FBZ0M7QURoRDdIO0FDaURBO0VBQWUsbUJBQStCO0FEN0M5QztBQzhDQTtFQUFnQixXQUFVO0VBQUUsZ0NBQStCO0FEekMzRDtBQzBDQTtFQUFzQixrQkFBaUI7QUR0Q3ZDO0FDd0NBO0VBQW9CLFdBQVU7RUFBRSxjQUFhO0VBQUUsa0JBQWlCO0VBQUUsU0FBUTtFQUFFLE1BQUs7RUFBRSxTQUFRO0VBQUUsU0FBUTtFQUFFLGdCQUFlO0VBQUUsb0JBQW9CO0VBQUUsNkdBQTRHO0VBQUUsMEJBQXlCO0FEMUJyUjtBQzhCQTtFQUFjLGtCQUFpQjtFQUFFLGlCQUFnQjtBRHpCakQ7QUMyQkE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixZQUF5QjtFQUN6QixTQUFTO0VBQ1QsZ0NBQWdDO0FEeEJsQztBQzJCQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FEeEJwQjtBQzBDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUR2Q25CO0FDeUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0FEdENmO0FDd0NBO0VBQ0Usc0JBQXNCO0FEckN4QjtBQ3VDQTtFQUNFLGFBQWE7QURwQ2Y7QUM0Q0E7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7QUR6Q2I7QUFFQTtFQ2dERSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUVmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FEL0NwQjtBQ21EQTtFQUNFLDBCQUEwQjtBRGhENUI7QUNvREE7RUFDRSxhQUFZO0FEakRkO0FDcURBO0VBSVEsU0FBUztFQUNQLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBRHJEdEI7QUMyQ0E7RUFhYyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QURwRDVCO0FDcUNBO0VBb0JVLE9BQU87QURyRGpCO0FDaUNBO0VBd0JVLFFBQVE7QURyRGxCO0FDMERBO0VBQ0UseUJBQXlCO0FEdkQzQjtBQzJEQTtFQUNFLGFBQWE7QUR4RGY7QUM0REE7RUFDRSxhQUFhO0FEekRmO0FDNERBO0VBQ0U7SUFBVSxnQkFBZ0I7SUFBRSwwQkFBMEI7RUR2RHREO0FBQ0Y7QUN5REE7RUFDRTtJQUFVLGVBQWU7SUFBRSwwQkFBMEI7RURwRHJEO0FBQ0Y7QUNzREE7RUFDRTtJQUFtQixnQkFBZ0I7SUFBRSxVQUFVO0lBQUUsWUFBWTtFRGhEN0Q7QUFDRjtBQ2tEQTtFQUNFO0lBQW1CLGdCQUFnQjtJQUFFLFVBQVU7SUFBRSxZQUFZO0VENUM3RDtBQUNGO0FDOENBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixVQUFVO0FEM0NkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLkNvbnRlbnRfUHJldmlldyB7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNDgwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0ODhweCk7XG4gIGhlaWdodDogNTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogYm9yZGVyOiAycHggc29saWQgc2VhZ3JlZW47ICAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuW3R5cGU9cmFkaW9dIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBJTUFHRSBTVFlMRVMgKi9cblt0eXBlPXJhZGlvXSArIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ0hFQ0tFRCBTVFlMRVMgKi9cblt0eXBlPXJhZGlvXTpjaGVja2VkICsgaW1nIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMwMGZmMjI7XG59XG5cblt0eXBlPXJhZGlvXTpjaGVja2VkICsgZGl2IHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuW3R5cGU9cmFkaW9dOmRpc2FibGVkICsgZGl2IHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmZmRmZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRmZTU7XG4gIGNvbG9yOiAjZmY3NDkwO1xufVxuXG4uc2l6ZUNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udG9vbE5hdiB7XG4gIHRvcDogMzBweDtcbiAgLyogbWFyZ2luLWxlZnQ6IDI1MHB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgLyogd2lkdGg6IDQwMHB4OyAqL1xuICAvKiBoZWlnaHQ6IDIwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgLyogd2lkdGg6IDMwMHB4OyAqL1xufVxuXG4uc2lzZUJvcmRlciBbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMDBmZjIyO1xufVxuXG4udG9vbHNCb3gge1xuICAvKiBtYXJnaW4tbGVmdDogMHB4OyAqL1xuICB3aWR0aDogNDgwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIC8qIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICovXG59XG5cbi5kaXZ2IHtcbiAgLyogbWluLXdpZHRoOiAyODBweDsgICovXG4gIGhlaWdodDogODBweDtcbn1cblxuLmltZ0Zyb250IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xufVxuXG4uaW1nQm94IHtcbiAgLyogbGVmdDogMTAlOyAqL1xuICAvKiBtYXJnaW4tbGVmdDogMjAlOyAqL1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgLyogZmxleDogMTsgKi9cbn1cblxuLmltZ0JhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzIwNTM7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNlYWdyXHJcbiAgIGVlbjsgICovXG59XG5cbi5jb2xvckJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5kaXYuY29sb3JCb3ggZGl2OmhvdmVyIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjYsIDIzMyk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODcyMTtcbn1cblxuLmltYWdlQm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5pbWFnZUJveDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbn1cblxuLnByb2R1Y3RUeXBlIHtcbiAgaGVpZ2h0OiAyMzAlO1xuICBtYXJnaW46IC04MCUgMCUgMTAlIC0zNSU7XG59XG5cbi5wcm9kdWN0VHlwZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pbWFnZURpdiB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmltYWdlRGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkMzY1YWJiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5bcm9sZT1cIm9wdGlvblwiXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbWFnZXMtaXRlbSB7XG4gIHdpZHRoOiA0OCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgcGFkZGluZzogM3B4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG4uaW1hZ2VzLWl0ZW06aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5pbWFnZXMtaXRlbS11cGxvYWQge1xuICB3aWR0aDogODAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xufVxuXG4uaW1hZ2VzLWl0ZW0tdXBsb2FkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY3VzdG9tLWl0ZW0gLmN1c3RvbS1pdGVtLXRpdGxlIHtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jdXN0b20taXRlbSAuY3VzdG9tLWl0ZW0tYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLm1heC1oZWlnaHQge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi50YWJCb3hOYXYge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5teUNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbn1cblxuW2NvbnRlbnRFZGl0YWJsZT10cnVlXTplbXB0eTpub3QoOmZvY3VzKTpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG59XG5cbi5zZWxlY3RQaWMge1xuICB0b3A6IDIyMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICAvKiBsZWZ0OiAtNTBweDsgKi9cbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FudmFzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBib3JkZXI6IDJweCBkYXNoZWQgI2UyMTAxMDsgKi9cbn1cblxuLmRpc3BsYXlOb25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogLm93bC1pdGVtLmNlbnRlciA+IGRpdjphZnRlciB7XHJcbiAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgY29udGVudDogJ2NlbnRlcic7XHJcbn0gKi9cbi5tZWRpdW0ge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAuN3MgZWFzZSBhbGw7XG4gIC8qIG1hcmdpbjowIDEwcHg7ICovXG4gIG9wYWNpdHk6IDAuNztcbiAgLyogcGFkZGluZy10b3A6IDIwcHg7ICovXG59XG5cbi5iaWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAuN3MgZWFzZSBhbGw7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICBvcGFjaXR5OiAxO1xuICAvKiBwYWRkaW5nLXRvcDogOTBweDsgICovXG59XG5cbi5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4udmVydGljYWwge1xuICBwYWRkaW5nLXRvcDogMTMlO1xuICB3aWR0aDogMjklO1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBkaXYub3dsLWl0ZW3igKRhY3RpdmUge1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmRpdi5vd2wtaXRlbSB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDgwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuZGl2Lm93bC1pdGVtLmFjdGl2ZSB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDgwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbiAgLyogbWFyZ2luOjAgMTBweDsgKi9cbiAgb3BhY2l0eTogMC41O1xufVxuXG5kaXYub3dsLWl0ZW0uYWN0aXZlLmNlbnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuYm9keSB7XG4gIC8qIHBhZGRpbmc6MDsgKi9cbiAgLyogbWFyZ2luOjgwcHggMCAwIDA7ICovXG4gIGZvbnQtZmFtaWx5OiBNZXJyaXdlYXRoZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmRpdi5vd2wtaXRlbSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxLCAxKTtcbn1cblxuLmlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbm5lciBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UgYm9yZGVyLWNvbG9yO1xufVxuXG4uaW5uZXIgYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5ibGFjayAuaW5uZXIgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmJsYWNrIC5pbm5lciBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xufVxuXG4ub3dsLWNhcm91c2VsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDglO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzQzMDMzL2FldHRfbG9nb19zbGlkZXIucG5nKSBuby1yZXBlYXQgY2VudGVyIDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG59XG5cbi5vd2wtY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDMwMHB4O1xufVxuXG4uZmEtY2hldnJvbi1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3dsLWRvdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ub3dsLWRvdHMgYnV0dG9uLm93bC1kb3Qge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbWFyZ2luOiAwIDNweDtcbn1cblxuLm93bC1kb3RzIGJ1dHRvbi5vd2wtZG90LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5vd2wtZG90cyBidXR0b24ub3dsLWRvdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuW3JvbGU9XCJvcHRpb25cIl0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI2NhbnZhcyB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjY2NjO1xufVxuXG4uei1pbmRleCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vd2wtdGhlbWUgLm93bC1wcmV2LCAub3dsLXRoZW1lIC5vd2wtbmV4dCB7XG4gIHRvcDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vd2wtdGhlbWUgLm93bC1wcmV2IGksIC5vd2wtdGhlbWUgLm93bC1uZXh0IGkge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5vd2wtdGhlbWUgLm93bC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuLm93bC10aGVtZSAub3dsLW5leHQge1xuICByaWdodDogMDtcbn1cblxuLm93bC1uYXYge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uY2xhc3MxIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNsYXNzMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZSB7XG4gICAgbWFyZ2luLXRvcDogLTE2JTtcbiAgICBib3JkZXI6IDBweCBkYXNoZWQgI2ZmZmZmZjtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubW9iaWxlIHtcbiAgICBtYXJnaW4tdG9wOiAtMyU7XG4gICAgYm9yZGVyOiAwcHggZGFzaGVkICNmZmZmZmY7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlSW1hZ2VMZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb2JpbGVJbWFnZUxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuI3Nob3cge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAxJTtcbn1cbiIsIlxyXG4ucmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5Db250ZW50X1ByZXZpZXcgIHtcclxuICAgdG9wOiAxMHB4OyAgICBcclxuICAgbGVmdDogNDgwcHg7XHJcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0ODhweCk7ICAgXHJcbiAgIGhlaWdodDogNTIwcHg7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgLyogYm9yZGVyOiAycHggc29saWQgc2VhZ3JlZW47ICAqL1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgW3R5cGU9cmFkaW9dIHsgXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogSU1BR0UgU1RZTEVTICovXHJcbiAgICBbdHlwZT1yYWRpb10gKyBpbWcge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIENIRUNLRUQgU1RZTEVTICovXHJcbiAgICBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGltZyB7XHJcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAzNCk7XHJcbiAgICB9XHJcblxyXG4gICAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBkaXYge1xyXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuXHJcbiAgICBbdHlwZT1yYWRpb106ZGlzYWJsZWQgKyBkaXYge1xyXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgcmdiKDI1NSwgMjIzLCAyMjkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyOSk7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAxMTYsIDE0NCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gLnNpemVDb2xvcntcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuIH0gIFxyXG4gICAgXHJcblxyXG5cclxuLnRvb2xOYXZ7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAyNTBweDsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAvKiB3aWR0aDogNDAwcHg7ICovXHJcbiAgLyogaGVpZ2h0OiAyMHB4OyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIC8qIHdpZHRoOiAzMDBweDsgKi9cclxufVxyXG5cclxuLnNpc2VCb3JkZXJ7XHJcbiAgW3R5cGU9cmFkaW9dOmNoZWNrZWQge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDM0KTtcclxuICB9IFxyXG59XHJcblxyXG4udG9vbHNCb3gge1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDBweDsgKi9cclxuICAgIHdpZHRoOiA0ODBweCA7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cclxufVxyXG5cclxuXHJcbi5kaXZ2IHtcclxuICAgIC8qIG1pbi13aWR0aDogMjgwcHg7ICAqL1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG5cclxuLmltZ0Zyb250IHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwJTsgXHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgei1pbmRleDowXHJcblxyXG59XHJcblxyXG4uaW1nQm94IHtcclxuICAvLyB0b3A6IDcwcHg7XHJcbiAgLyogbGVmdDogMTAlOyAqL1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAyMCU7ICovXHJcbiAgLy8gd2lkdGg6IDM2MHB4OyBcclxuICAvLyBoZWlnaHQ6IDQ2MHB4OyBcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIC8qIGZsZXg6IDE7ICovXHJcbn1cclxuXHJcbi5pbWdCYWNrIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAzMiwgODMpO1xyXG4gICAvKiBib3JkZXI6IDFweCBzb2xpZCBzZWFnclxyXG4gICBlZW47ICAqL1xyXG59XHJcblxyXG5cclxuLmNvbG9yQnV0dG9uIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5kaXYuY29sb3JCb3ggZGl2OmhvdmVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyNiwgMjMzKTsgKi9cclxuICAvLyBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAvLyB3aWR0aDogMTUwcHg7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgLy8gaGVpZ2h0OiA0NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODcyMTtcclxufVxyXG5cclxuXHJcblxyXG4uaW1hZ2VCb3gge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IFxyXG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIFxyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgLy8gYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgLy8gbWFyZ2luOiAtNTBweDtcclxuICAvLyB0b3A6IC0zNXB4O1xyXG59XHJcblxyXG4uaW1hZ2VCb3g6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cclxufVxyXG5cclxuXHJcbi5wcm9kdWN0VHlwZSB7XHJcbiAgaGVpZ2h0OiAyMzAlOyBcclxuICBtYXJnaW46IC04MCUgMCUgMTAlIC0zNSU7XHJcbn1cclxuXHJcbi5wcm9kdWN0VHlwZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLmltYWdlRGl2ICB7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltYWdlRGl2OmhvdmVyICB7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDM2NWFiYjtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5cclxuLy8gIC5jb2xvckJveCB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHdpZHRoOiAyNTBweDtcclxuLy8gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4vLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vICAgcGFkZGluZzogMHB4O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM4ODg4ODg7XHJcbi8vIH0gXHJcblxyXG5bcm9sZT1cIm9wdGlvblwiXSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBtYXJnaW46IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG4ubWFpbi10aXRsZXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5pbWFnZXMtaXRlbSB7XHJcbiAgd2lkdGg6IDQ4JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXgtd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uaW1hZ2VzLWl0ZW06aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmltYWdlcy1pdGVtLXVwbG9hZCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcblxyXG4uaW1hZ2VzLWl0ZW0tdXBsb2FkOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWl0ZW0gLmN1c3RvbS1pdGVtLXRpdGxlIHtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY3VzdG9tLWl0ZW0gLmN1c3RvbS1pdGVtLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLm1heC1oZWlnaHR7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhYkJveE5hdntcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15Q2xhc3N7XHJcbiAgYmFja2dyb3VuZC1jb2xvciA6IHRlYWw7XHJcbn1cclxuXHJcbltjb250ZW50RWRpdGFibGU9dHJ1ZV06ZW1wdHk6bm90KDpmb2N1cyk6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6YXR0cihkYXRhLXRleHQpXHJcbn1cclxuXHJcbi5zZWxlY3RQaWN7XHJcbiAgdG9wOiAyMjBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIC8qIGxlZnQ6IC01MHB4OyAqL1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxufVxyXG5cclxuLmNhbnZhc3tcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIGJvcmRlcjogMnB4IGRhc2hlZCAjZTIxMDEwOyAqL1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmRpc3BsYXlOb25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyogLm93bC1pdGVtLmNlbnRlciA+IGRpdjphZnRlciB7XHJcbiAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgY29udGVudDogJ2NlbnRlcic7XHJcbn0gKi9cclxuXHJcbi5tZWRpdW0gIHtcclxuXHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoNTAlKTsgXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2l0aW9uOi43cyBlYXNlIGFsbDtcclxuICAvKiBtYXJnaW46MCAxMHB4OyAqL1xyXG4gIG9wYWNpdHk6MC43O1xyXG4gIC8qIHBhZGRpbmctdG9wOiAyMHB4OyAqL1xyXG5cclxufVxyXG5cclxuLmJpZyAgIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246LjdzIGVhc2UgYWxsO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogcGFkZGluZy10b3A6IDkwcHg7ICAqLyAgXHJcbn0gXHJcblxyXG4uaG9yaXpvbnRhbHtcclxuICB3aWR0aDogNDUlOyBcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi52ZXJ0aWNhbHtcclxuICBwYWRkaW5nLXRvcDogMTMlO1xyXG4gIHdpZHRoOiAyOSU7IFxyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTAwMHB4KXtcclxuICBkaXYub3dsLWl0ZW3igKRhY3RpdmV7bWFyZ2luOjA7IHRyYW5zZm9ybTpzY2FsZSguNyl9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5kaXYub3dsLWl0ZW0ge1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDgwJSk7IFxyXG4gIC8vIHNjYWxlOiAxO1xyXG4gIC8vIHRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XHJcbiAgLy8gIG1hcmdpbjowIDEwcHg7IFxyXG4gIG9wYWNpdHk6MC41O1xyXG59XHJcblxyXG5kaXYub3dsLWl0ZW0uYWN0aXZlIHtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSg4MCUpOyBcclxuICAvLyBzY2FsZTogMC4zO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XHJcbiAgLyogbWFyZ2luOjAgMTBweDsgKi9cclxuICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuZGl2Lm93bC1pdGVtLmFjdGl2ZS5jZW50ZXIgIHtcclxuXHJcbiAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKTsgXHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG5cclxuYm9keXtcclxuICAvKiBwYWRkaW5nOjA7ICovXHJcbiAgLyogbWFyZ2luOjgwcHggMCAwIDA7ICovXHJcbiAgZm9udC1mYW1pbHk6TWVycml3ZWF0aGVyO1xyXG4gIGJhY2tncm91bmQ6I2ZmZmZmZjtcclxufVxyXG5cclxuZGl2Lm93bC1pdGVtIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMS4wLCAxLjApO1xyXG59XHJcblxyXG4uaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7IGJvdHRvbTozMHB4OyBsZWZ0OjA7IHJpZ2h0OjA7IHRleHQtYWxpZ246Y2VudGVyO31cclxuLmlubmVyIGF7Y29sb3I6I2ZmZjsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgdHJhbnNpdGlvbjouM3MgZWFzZSBib3JkZXItY29sb3J9XHJcbi5pbm5lciBhOmhvdmVye2JvcmRlci1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7fVxyXG4uYmxhY2sgLmlubmVyIGF7Y29sb3I6IzAwMDsgYm9yZGVyLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC40KX1cclxuLmJsYWNrIC5pbm5lciBhOmhvdmVye2JvcmRlci1jb2xvcjojMDAwO31cclxuXHJcbi5vd2wtY2Fyb3VzZWw6YWZ0ZXJ7Y29udGVudDpcIlwiOyBkaXNwbGF5OmJsb2NrOyBwb3NpdGlvbjphYnNvbHV0ZTsgd2lkdGg6OCU7IHRvcDowOyBib3R0b206MDsgbGVmdDo1MCU7IG1hcmdpbi1sZWZ0Oi00JTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzQzMDMzL2FldHRfbG9nb19zbGlkZXIucG5nKSBuby1yZXBlYXQgY2VudGVyIDUwJTsgYmFja2dyb3VuZC1zaXplOjEwMCUgYXV0bztcclxuXHJcbn1cclxuXHJcbi5vd2wtY29udHJvbHN7cG9zaXRpb246YWJzb2x1dGU7IG1hcmdpbi10b3A6MzAwcHg7fVxyXG5cclxuLmZhLWNoZXZyb24tbGVmdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ1dCB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLy8gIC5vd2wtbmF2IGJ1dHRvbiB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbi8vICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbi8vIH1cclxuLy8gLm93bC1uYXYgYnV0dG9uLm93bC1wcmV2IHtcclxuLy8gICBsZWZ0OiAxMDBweDtcclxuLy8gfVxyXG4vLyAub3dsLW5hdiBidXR0b24ub3dsLW5leHQge1xyXG4vLyAgIHJpZ2h0OiAwcHg7XHJcbi8vIH1cclxuXHJcbi5vd2wtZG90cyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5vd2wtZG90cyBidXR0b24ub3dsLWRvdCB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBtYXJnaW46IDAgM3B4O1xyXG59XHJcbi5vd2wtZG90cyBidXR0b24ub3dsLWRvdC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuLm93bC1kb3RzIGJ1dHRvbi5vd2wtZG90OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi8vIC5vd2wtbmF2IGJ1dHRvbiB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDUwJTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ2LCAxODAsIDExMywgMC4yODgpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4OyAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTVweDtcclxufVxyXG4vLyAub3dsLW5hdiBidXR0b246Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5bcm9sZT1cIm9wdGlvblwiXSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBtYXJnaW46IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG4jY2FudmFzIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjY2NjYztcclxufVxyXG5cclxuXHJcbi56LWluZGV4IHtcclxuICBkaXNwbGF5Om5vbmU7IFxyXG59XHJcbiAgXHJcblxyXG4ub3dsLXRoZW1lIHtcclxuICBcclxuXHJcbiAgICAgIC5vd2wtcHJldiwgLm93bC1uZXh0IHtcclxuICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vd2wtcHJldiB7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAub3dsLW5leHQge1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICBcclxufVxyXG5cclxuLm93bC1uYXYgeyBcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcbi5jbGFzczEge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uY2xhc3MyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vYmlsZSB7IG1hcmdpbi10b3A6IC0xNiU7IGJvcmRlcjogMHB4IGRhc2hlZCAjZmZmZmZmO31cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW9iaWxlIHsgbWFyZ2luLXRvcDogLTMlOyBib3JkZXI6IDBweCBkYXNoZWQgI2ZmZmZmZjt9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9iaWxlSW1hZ2VMZWZ0IHsgbWFyZ2luLWxlZnQ6IDIwJTsgd2lkdGg6IDYwJTsgaGVpZ2h0OiBhdXRvO31cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW9iaWxlSW1hZ2VMZWZ0IHsgbWFyZ2luLWxlZnQ6IDI0JTsgd2lkdGg6IDYwJTsgaGVpZ2h0OiBhdXRvO31cclxufVxyXG5cclxuI3Nob3cge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"],
      encapsulation: 2
    });
    SiteLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:load')], SiteLayoutComponent);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SiteLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-site-layout',
          templateUrl: './site-layout.component.html',
          styleUrls: ['./site-layout.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['window:load']
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _servises_services__WEBPACK_IMPORTED_MODULE_4__["AuthServices"]
        }, {
          type: _servises_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]
        }, {
          type: _servises_products_service__WEBPACK_IMPORTED_MODULE_6__["ProdutsService"]
        }, {
          type: _servises_productscolor_service__WEBPACK_IMPORTED_MODULE_7__["ProdutsColorService"]
        }, {
          type: _servises_fonts_service__WEBPACK_IMPORTED_MODULE_8__["FontService"]
        }, {
          type: _servises_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
        }, {
          type: src_app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"]
        }, {
          type: _servises_order_datas_service__WEBPACK_IMPORTED_MODULE_11__["OrderDatasService"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['canvas', {
            "static": false
          }]
        }],
        IMG: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['imagePath']
        }],
        coord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['coord']
        }],
        owlElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['owlElement']
        }],
        inputColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inputColor']
        }],
        divvv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['divvv']
        }],
        owlCarousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['owlCarousel']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/site-layout/size-format/size-format.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/layouts/site-layout/size-format/size-format.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SizeFormatComponent */

  /***/
  function srcAppSharedLayoutsSiteLayoutSizeFormatSizeFormatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SizeFormatComponent", function () {
      return SizeFormatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servises_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servises/data.service */
    "./src/app/shared/layouts/servises/data.service.ts");
    /* harmony import */


    var _site_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../site-layout.component */
    "./src/app/shared/layouts/site-layout/site-layout.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SizeFormatComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r2.formatValue = "A3";
          ctx_r2.obj.topUpDown = 0 - 0.03;
          ctx_r2.formatA4V();
          return ctx_r2.setformatScale();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r4.formatValue = "A4";
          ctx_r4.obj.topUpDown = 0 - 0.03;
          ctx_r4.formatA4H();
          return ctx_r4.setformatScale();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r5.formatValue = "A4";
          ctx_r5.obj.topUpDown = 0.02;
          ctx_r5.formatA4V();
          return ctx_r5.setformatScale();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r6.formatValue = "A5";
          ctx_r6.obj.topUpDown = 0.03;
          ctx_r6.formatA4H();
          return ctx_r6.setformatScale();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r7.formatValue = "A5";
          ctx_r7.obj.topUpDown = 0.07;
          ctx_r7.formatA4V();
          return ctx_r7.setformatScale();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SizeFormatComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.endPrise);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "box": a0
      };
    };

    var _c1 = function _c1(a0, a1, a2, a3) {
      return {
        width: a0,
        height: a1,
        top: a2,
        left: a3,
        "position": "absolute",
        "pointer-events": "none"
      };
    };

    var SizeFormatComponent = /*#__PURE__*/function () {
      function SizeFormatComponent(dataService, siteLayout) {
        _classCallCheck(this, SizeFormatComponent);

        this.dataService = dataService;
        this.siteLayout = siteLayout;
        this.selectOpen = false;
        this.counter = 0;
        this.upDown = null;
        this.canvasSelect = null;
        this.scaleBlock = false;
        this.formatValue = 'A4';
        this.endPrise = 0;
        this.obj = {
          objectWidth: null,
          objectWidthHeight: null,
          topUpDown: 0
        };
        this.getUpdatedMessage();
      }

      _createClass(SizeFormatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUpdatedMessage",
        value: function getUpdatedMessage() {
          var _this22 = this;

          this.dataService.canvasDivSelect.subscribe(function (res) {
            _this22.canvasSelect = res; // console.log(res);

            _this22.setFormatHeightTop();
          });
          this.dataService.formatValue1.subscribe(function (res) {
            _this22.formatValue = res; // console.log(res);
            // this.setFormatHeightTop();
          }); // this.canvas.setHeight(this.canvasHtmlHeight);
          // this.canv = this.dataService.canvasSelect

          this.dataService.formatA4Horizontal.subscribe(function (res) {
            _this22.sizePrintKey = res; // console.log(res);
            // this.setFormatHeightTop();
          });
          this.dataService.scaleKeyy.subscribe(function (res) {
            _this22.scaleKey = res;
            console.log(res, 'RES'); // this.setFormatHeightTop();
          });
          this.dataService.formatA4Vertical.subscribe(function (res) {
            _this22.formatWithHeight = res; // console.log(res);
            // this.setFormatHeightTop();
          });
          this.dataService.formatTop.subscribe(function (res) {
            _this22.positionTopKey = res; // console.log(res);
            // this.setFormatHeightTop();
          });
          this.dataService.endPriseValue.subscribe(function (res) {
            _this22.endPrise = res; // console.log(res);
            // this.setFormatHeightTop();
          });
          this.dataService.horVertt.subscribe(function (res) {
            _this22.horVert = res; // console.log(res);
            // this.setFormatHeightTop();
          }); // this.setFormatHeightTop();
        }
      }, {
        key: "changePosition",
        value: function changePosition() {
          this.siteLayout.moveWithFormat(this.scaleKey, this.scaleBlock);
        }
      }, {
        key: "formatA4H",
        value: function formatA4H() {
          // this.counter = 0;
          this.dataService.horVert = this.horVert = true;
          this.dataService.formatValue = this.formatValue;
          this.scaleBlock = true;
          this.changePosition();
          this.obj.objectWidthHeight = this.objectWidthHeight = 1.414 / 2;
          this.dataService.formatSizeSwich(); // this.sizePrintKey = 686 / ((686 - 297) / 2);
          // this.dataService.scaleKey = this.canvasSizeFormatWidth / 145;
          // this.obj.objectWidth = this.objectWidth = this.dataService.sizePrintKey;
          // this.obj.topUpDown = 0;

          this.scaleBlock = false;
          this.changePosition();
        }
      }, {
        key: "formatA4V",
        value: function formatA4V() {
          // this.counter = 0;
          this.dataService.horVert = this.horVert = false; // this.scaleKey = 2.3;
          // this.obj.topUpDown = -0.3;

          this.dataService.formatValue = this.formatValue;
          this.scaleBlock = true;
          this.changePosition();
          this.obj.objectWidthHeight = this.objectWidthHeight = 1.414;
          this.dataService.formatSizeSwich(); // const cafficient = 1.0229;
          // this.sizePrintKey = 686 * cafficient / ((686 - 210) / 2);
          // this.dataService.scaleKey = this.canvasSizeFormatWidth / 55;
          // this.obj.objectWidth = this.objectWidth = this.dataService.sizePrintKey;
          // this.obj.topUpDown = 0.07;

          this.scaleBlock = false;
          this.changePosition();
        }
      }, {
        key: "counterNum",
        value: function counterNum() {
          // this.counter = 0;
          if (this.upDown) {
            return this.counter = 0.05;
          } else {
            return this.counter = -0.05;
          }
        }
      }, {
        key: "counterTop",
        value: function counterTop() {
          this.obj.objectWidth = this.objectWidth;
          this.obj.objectWidthHeight = this.objectWidthHeight;
          this.obj.topUpDown += this.counterNum();
        }
      }, {
        key: "setformatScale",
        value: function setformatScale() {
          // this.dataService.sizePrintKey = this.obj.objectWidth;
          this.dataService.formatWithHeight = this.obj.objectWidthHeight;
          this.dataService.formatTopKey = this.obj.topUpDown;
          this.dataService.calcEndPrise();
        }
      }, {
        key: "onResize",
        value: function onResize() {// this.dataService.initCalculations();
          // this.counterTop();
          // this.formatA4V();
          // this.formatA4H();
          // this.setformatScale();
          // this.getUpdatedMessage();
          // this.counterNum();
          // this.canvasHtmlWidth = this.dataService.canvasHtmlWidth;
          // this.canvasHtmlHeight = this.dataService.canvasHtmlHeight;
          // this.setFormatHeightTop();
          // this.siteLayout.moveWithFormat(this.scaleKey, true);
        }
      }, {
        key: "setFormatHeightTop",
        value: function setFormatHeightTop() {
          this.canvasHtmlWidth = this.dataService.canvasHtmlWidth;
          this.canvasHtmlHeight = this.dataService.canvasHtmlHeight;
          this.sizePrintKey = this.dataService.sizePrintKey;
          this.formatWithHeight = this.dataService.formatWithHeight;
          this.positionTopKey = this.dataService.formatTopKey;
          this.objectWidth = this.dataService.sizePrintKey;
          this.objectWidthHeight = this.dataService.formatWithHeight;
          this.horVert = this.dataService.horVert; // this.scaleKey = this.dataService.scaleKey;
          // this.dataService.formatTopKey = 0.5;

          var positionTopKey = this.canvasHtmlWidth * this.positionTopKey;
          this.canvasSizeFormatWidth = this.canvasHtmlWidth - 2 * (this.canvasHtmlWidth / this.sizePrintKey + this.canvasHtmlWidth / 40);
          this.canvasCenteredPosition = window.innerWidth / this.dataService.positionKey; // console.log('width', this.canvasSizeFormatWidth);

          this.canvasSizeFormatTop = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey - positionTopKey;
          this.canvasSizeFormatHeight = this.canvasSizeFormatWidth * this.formatWithHeight; // console.log('height', this.canvasSizeFormatHeight);

          this.canvasSizeFormatLeft = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey; // this.siteLayout.moveWithFormat(this.scaleKey, this.scaleBlock);
        }
      }]);

      return SizeFormatComponent;
    }();

    SizeFormatComponent.ɵfac = function SizeFormatComponent_Factory(t) {
      return new (t || SizeFormatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servises_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"]));
    };

    SizeFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SizeFormatComponent,
      selectors: [["app-size-format"]],
      decls: 6,
      vars: 11,
      consts: [[1, "full-width"], [1, "row"], [1, "col", "s7", "m3", "l4", "xl6", "offset-s2", "offset-m2", "offset-l1", "offset-xl1", 2, "top", "-40px", "position", "absolute", "z-index", "1"], ["style", " max-width: 100%; overflow-x: hidden; width: 80%; height: 300px; max-height: 300px; z-index: 1; margin-top: 5px; position: relative; padding: 10px 10px 0px 0px; background-color: #3d365a73", 4, "ngIf"], [2, "border-spacing", "10px", 3, "ngClass", "ngStyle", "resize"], ["style", "margin-top: -100px; margin-left: -200px;", 4, "ngIf"], [2, "max-width", "100%", "overflow-x", "hidden", "width", "80%", "height", "300px", "max-height", "300px", "z-index", "1", "margin-top", "5px", "position", "relative", "padding", "10px 10px 0px 0px", "background-color", "#3d365a73"], [1, "colorBox", 2, "margin", "0px", "margin-top", "5%"], [1, "imageDiv", 2, "margin", "-5px"], ["for", "", 2, "top", "50%", "transform", "translateY(-50%)", "margin", "0", "left", "13px", "position", "relative", "font-size", "large", "font-family", "Arial, Helvetica, sans-serif", "color", "#ffffff"], [2, "top", "-64%", "margin", "0", "position", "relative", "left", "78%", 3, "click"], ["type", "radio", "name", "test1", "value", "big"], ["src", "../assets/img/oie_aHdWpUcmnmvA.png", 1, "hoverable", "imageBox1", 2, "width", "18%", "height", "90%"], [2, "border", "1px solid rgba(255, 255, 255, 0.507)", "margin-top", "5%"], [2, "top", "-80%", "margin", "0", "left", "8px", "position", "relative", 3, "click"], ["src", "../assets/img/oie_aHdWpUcmnmvA.png", 1, "hoverable", "imageBox1", 2, "margin-left", "35%", "margin-right", "18%", "width", "25%", "height", "auto"], [2, "top", "-64%", "margin", "0", "position", "relative", 3, "click"], [2, "top", "-78%", "margin", "0", "left", "8px", "position", "relative", 3, "click"], [2, "top", "-63%", "margin", "0", "position", "relative", 3, "click"], [2, "margin-top", "-100px", "margin-left", "-200px"]],
      template: function SizeFormatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SizeFormatComponent_div_3_Template, 28, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SizeFormatComponent_Template_div_resize_4_listener() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SizeFormatComponent_div_5_Template, 2, 1, "div", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.canvasSelect))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](6, _c1, ctx.canvasSizeFormatWidth + "px", ctx.canvasSizeFormatHeight + "px", ctx.canvasSizeFormatTop + "px", ctx.canvasSizeFormatLeft + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
      styles: [".box[_ngcontent-%COMP%] {\n  border: dashed 2px rgba(0, 0, 0, 0.411);\n}\n\n.radio[_ngcontent-%COMP%] {\n  transform: translateY(-73%);\n}\n\n.radio[_ngcontent-%COMP%]:checked    + img[_ngcontent-%COMP%] {\n  border: 2px solid #00ff22;\n}\n\n.imageBox1[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 25%;\n  height: auto;\n  display: inline-block;\n  margin: 0px;\n  cursor: pointer;\n  border-radius: 5%;\n}\n\n.horizontal[_ngcontent-%COMP%] {\n  width: 45%;\n  height: auto;\n}\n\n.vertical[_ngcontent-%COMP%] {\n  padding-top: 13%;\n  width: 29%;\n  height: 90%;\n}\n\n.imageBox1[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  \n}\n\n.imageDiv[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.imageDiv[_ngcontent-%COMP%]:hover {\n  background-color: #3d365abb;\n  margin-left: 5px;\n}\n\n.A4H[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l6ZS1mb3JtYXQvRDpcXEFuZ3VsYXJcXENvcHkgb2Ygb3JpZ2luIHByb2plY3QgVC1zaGlydF9sYXN0XFx0LXNoaXJ0XFx0LXNoaXJ0LWJhY2tlbmRcXHQtc2hpcnQtZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcbGF5b3V0c1xcc2l0ZS1sYXlvdXRcXHNpemUtZm9ybWF0XFxzaXplLWZvcm1hdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l6ZS1mb3JtYXQvc2l6ZS1mb3JtYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7QUNDekM7O0FER0M7RUFDQywyQkFBMkI7QUNBN0I7O0FER0E7RUFDRSx5QkFBaUM7QUNBbkM7O0FES0E7RUFDRSx1QkFBb0M7RUFHckMsVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFJZixpQkFBaUI7QUNQbEI7O0FEWUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQ1RkOztBRFlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0FDVGI7O0FEWUE7RUFDQyxxQkFBcUI7RUFBRSxxRkFBQTtBQ1J4Qjs7QURZQTtFQUVFLFlBQVk7QUNWZDs7QURhQTtFQUVFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUNYbEI7O0FEY0E7RUFDRSxvQkFBb0I7QUNYdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9zaXRlLWxheW91dC9zaXplLWZvcm1hdC9zaXplLWZvcm1hdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gIGJvcmRlcjogZGFzaGVkIDJweCByZ2JhKDAsIDAsIDAsIDAuNDExKTtcclxufVxyXG5cclxuXHJcbiAucmFkaW8ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzMlKTtcclxufVxyXG5cclxuLnJhZGlvOmNoZWNrZWQgKyBpbWcge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDM0KTtcclxuXHJcbn1cclxuXHJcblxyXG4uaW1hZ2VCb3gxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IFxyXG4gLy8gYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiBcclxuIHdpZHRoOiAyNSU7XHJcbiBoZWlnaHQ6IGF1dG87XHJcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBtYXJnaW46IDBweDtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAvLyBwYWRkaW5nOiA1cHg7XHJcbiAvLyBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gLy8gbWFyZ2luOiAtNTBweDtcclxuIC8vIHRvcDogLTM1cHg7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFse1xyXG4gIHdpZHRoOiA0NSU7IFxyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnZlcnRpY2Fse1xyXG4gIHBhZGRpbmctdG9wOiAxMyU7XHJcbiAgd2lkdGg6IDI5JTsgXHJcbiAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5pbWFnZUJveDE6aG92ZXIge1xyXG4gdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xyXG59XHJcblxyXG5cclxuLmltYWdlRGl2ICB7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltYWdlRGl2OmhvdmVyICB7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDM2NWFiYjtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uQTRIIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufSIsIi5ib3gge1xuICBib3JkZXI6IGRhc2hlZCAycHggcmdiYSgwLCAwLCAwLCAwLjQxMSk7XG59XG5cbi5yYWRpbyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzMlKTtcbn1cblxuLnJhZGlvOmNoZWNrZWQgKyBpbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBmZjIyO1xufVxuXG4uaW1hZ2VCb3gxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmhvcml6b250YWwge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbCB7XG4gIHBhZGRpbmctdG9wOiAxMyU7XG4gIHdpZHRoOiAyOSU7XG4gIGhlaWdodDogOTAlO1xufVxuXG4uaW1hZ2VCb3gxOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xufVxuXG4uaW1hZ2VEaXYge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pbWFnZURpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDM2NWFiYjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLkE0SCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SizeFormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-size-format',
          templateUrl: './size-format.component.html',
          styleUrls: ['./size-format.component.scss']
        }]
      }], function () {
        return [{
          type: _servises_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/pipes.pipe.ts ***!
    \**************************************/

  /*! exports provided: PipesPipe */

  /***/
  function srcAppSharedPipesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesPipe", function () {
      return PipesPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PipesPipe = /*#__PURE__*/function () {
      function PipesPipe() {
        _classCallCheck(this, PipesPipe);
      }

      _createClass(PipesPipe, [{
        key: "transform",
        value: function transform() {
          return 0;
        }
      }]);

      return PipesPipe;
    }();

    PipesPipe.ɵfac = function PipesPipe_Factory(t) {
      return new (t || PipesPipe)();
    };

    PipesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ret",
      type: PipesPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'ret'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shoping-page/shoping-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shoping-page/shoping-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ShopingPageComponent */

  /***/
  function srcAppShopingPageShopingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopingPageComponent", function () {
      return ShopingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/layouts/servises/order-datas.service */
    "./src/app/shared/layouts/servises/order-datas.service.ts");

    var ShopingPageComponent = /*#__PURE__*/function () {
      function ShopingPageComponent(order) {
        _classCallCheck(this, ShopingPageComponent);

        this.order = order;
        this.colorDefoult = this.order.orderDatas.colorDefoult;
        this.props = {
          productTypeName: this.order.orderDatas.productTypeName,
          brendName: this.order.orderDatas.brendName,
          productColor: this.order.orderDatas.productColor,
          colorDefoult: this.order.orderDatas.colorDefoult,
          productSize: this.order.orderDatas.productSize
        };
      }

      _createClass(ShopingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var image = new Image();
          image.src = this.order.imageSrc;
          this.imageSrc = this.order.imageSrc;
          console.log(this.props);
        }
      }]);

      return ShopingPageComponent;
    }();

    ShopingPageComponent.ɵfac = function ShopingPageComponent_Factory(t) {
      return new (t || ShopingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_1__["OrderDatasService"]));
    };

    ShopingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopingPageComponent,
      selectors: [["app-shoping-page"]],
      decls: 15,
      vars: 7,
      consts: [[1, "row"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "85%", "height", "85%", "viewBox", "0 0 50 50", 1, "col", "s12", "m10", "l6", "xl12", "offset-s0", "offset-m2", "offset-l3", "offset-xl0", 2, "position", "absolute", "top", "65px", "left", "-10%"], ["x", "0", "y", "0", "height", "100%", "width", "100%"], [1, "col", "s12", "m10", "l6", "xl12", "offset-s0", "offset-m2", "offset-l3", "offset-xl7", 2, "position", "absolute", "top", "65px"], [2, "float", "left", "top", "1%", "margin-top", "0.5%", "margin-right", "1%"], ["role", "option", 1, "card-panel"]],
      template: function ShopingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx.imageSrc, null, "xlink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.props.productTypeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.props.brendName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.props.productColor === "" ? ctx.colorDefoult : ctx.props.productColor, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.props.productColor === "" ? ctx.colorDefoult : ctx.props.productColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.props.productSize, " ");
        }
      },
      styles: ["[type=radio][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  outline: 2px solid black;\n  background-color: #000;\n  color: #ffffff;\n}\n\n[type=radio][_ngcontent-%COMP%]:disabled    + div[_ngcontent-%COMP%] {\n  outline: 2px solid #ffdfe5;\n  background-color: #ffdfe5;\n  color: #ff7490;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGluZy1wYWdlL3Nob3BpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcGluZy1wYWdlL0Q6XFxBbmd1bGFyXFxDb3B5IG9mIG9yaWdpbiBwcm9qZWN0IFQtc2hpcnRfbGFzdFxcdC1zaGlydFxcdC1zaGlydC1iYWNrZW5kXFx0LXNoaXJ0LWZyb250ZW5kL3NyY1xcYXBwXFxzaG9waW5nLXBhZ2VcXHNob3BpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NJLHdCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsY0FBYztBRENsQjs7QUFFQTtFQ0NJLDBCQUFxQztFQUNyQyx5QkFBb0M7RUFDcEMsY0FBeUI7QURDN0IiLCJmaWxlIjoic3JjL2FwcC9zaG9waW5nLXBhZ2Uvc2hvcGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBkaXYge1xuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5bdHlwZT1yYWRpb106ZGlzYWJsZWQgKyBkaXYge1xuICBvdXRsaW5lOiAycHggc29saWQgI2ZmZGZlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGZlNTtcbiAgY29sb3I6ICNmZjc0OTA7XG59XG4iLCJbdHlwZT1yYWRpb106Y2hlY2tlZCArIGRpdiB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgW3R5cGU9cmFkaW9dOmRpc2FibGVkICsgZGl2IHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjU1LCAyMjMsIDIyOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyOSk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTE2LCAxNDQpO1xyXG4gIH1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shoping-page',
          templateUrl: './shoping-page.component.html',
          styleUrls: ['./shoping-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_1__["OrderDatasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/side-design/side-design.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/side-design/side-design.component.ts ***!
    \******************************************************/

  /*! exports provided: SideDesignComponent */

  /***/
  function srcAppSideDesignSideDesignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideDesignComponent", function () {
      return SideDesignComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../editor-pic/editor-pic.component */
    "./src/app/editor-pic/editor-pic.component.ts");

    var _c0 = ["canvas"];

    function SideDesignComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Select color ");
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var _c2 = function _c2(a0) {
      return {
        "backgroundColor": a0
      };
    };

    var _c3 = function _c3() {
      return {
        "padding-top": "8px"
      };
    };

    var SideDesignComponent = /*#__PURE__*/function () {
      function SideDesignComponent() {
        _classCallCheck(this, SideDesignComponent);

        this.title = 'EditorPic';
        this.isOpen = false;
        this.selectColor = '';
        this.colors = [{
          hex: '#cba6a6',
          name: 'pink'
        }, {
          hex: '#b4a24b',
          name: 'pino'
        }, {
          hex: '#28e139',
          name: 'pink'
        }, {
          hex: '#5a7cc6',
          name: 'pink'
        }, {
          hex: '#cba6a6',
          name: 'pink'
        }, {
          hex: '#e1a24b',
          name: 'pino'
        }, {
          hex: '#11e139',
          name: 'pink'
        }, {
          hex: '#4b2cc6',
          name: 'pink'
        }];
      }

      _createClass(SideDesignComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "rasterize",
        value: function rasterize() {
          this.canvas.rasterize();
        }
      }, {
        key: "rasterizeSVG",
        value: function rasterizeSVG() {
          this.canvas.rasterizeSVG();
        }
      }, {
        key: "saveCanvasToJSON",
        value: function saveCanvasToJSON() {
          this.canvas.saveCanvasToJSON();
        }
      }, {
        key: "loadCanvasFromJSON",
        value: function loadCanvasFromJSON() {
          this.canvas.loadCanvasFromJSON();
        }
      }, {
        key: "confirmClear",
        value: function confirmClear() {
          this.canvas.confirmClear();
        }
      }, {
        key: "changeSize",
        value: function changeSize() {// this.canvas.changeSize();
        }
      }, {
        key: "addText",
        value: function addText() {
          this.canvas.addText();
        }
      }, {
        key: "getImgPolaroid",
        value: function getImgPolaroid(event) {
          this.canvas.getImgPolaroid(event);
        }
      }, {
        key: "addImageOnCanvas",
        value: function addImageOnCanvas(url) {
          this.canvas.addImageOnCanvas(url);
        }
      }, {
        key: "readUrl",
        value: function readUrl(event) {
          this.canvas.readUrl(event);
        }
      }, {
        key: "removeWhite",
        value: function removeWhite(url) {
          this.canvas.removeWhite(url);
        }
      }, {
        key: "addFigure",
        value: function addFigure(figure) {
          this.canvas.addFigure(figure);
        }
      }, {
        key: "removeSelected",
        value: function removeSelected() {
          this.canvas.removeSelected();
        }
      }, {
        key: "sendToBack",
        value: function sendToBack() {
          this.canvas.sendToBack();
        }
      }, {
        key: "bringToFront",
        value: function bringToFront() {
          this.canvas.bringToFront();
        }
      }, {
        key: "clone",
        value: function clone() {
          this.canvas.clone();
        }
      }, {
        key: "cleanSelect",
        value: function cleanSelect() {
          this.canvas.cleanSelect();
        }
      }, {
        key: "setCanvasFill",
        value: function setCanvasFill() {
          this.canvas.setCanvasFill();
        }
      }, {
        key: "setCanvasImage",
        value: function setCanvasImage() {// this.canvas.setCanvasImage();
        }
      }, {
        key: "setId",
        value: function setId() {
          this.canvas.setId();
        }
      }, {
        key: "setOpacity",
        value: function setOpacity() {
          this.canvas.setOpacity();
        }
      }, {
        key: "setFill",
        value: function setFill() {
          this.canvas.setFill();
        }
      }, {
        key: "setFontFamily",
        value: function setFontFamily() {
          this.canvas.setFontFamily();
        }
      }, {
        key: "setTextAlign",
        value: function setTextAlign(value) {
          this.canvas.setTextAlign(value);
        }
      }, {
        key: "setBold",
        value: function setBold() {
          this.canvas.setBold();
        }
      }, {
        key: "setFontStyle",
        value: function setFontStyle() {
          this.canvas.setFontStyle();
        }
      }, {
        key: "hasTextDecoration",
        value: function hasTextDecoration(value) {
          this.canvas.hasTextDecoration(value);
        }
      }, {
        key: "setTextDecoration",
        value: function setTextDecoration(value) {
          this.canvas.setTextDecoration(value);
        }
      }, {
        key: "setFontSize",
        value: function setFontSize() {
          this.canvas.setFontSize();
        }
      }, {
        key: "setLineHeight",
        value: function setLineHeight() {// this.canvas.setLineHeight();
        }
      }, {
        key: "setCharSpacing",
        value: function setCharSpacing() {
          this.canvas.setCharSpacing();
        }
      }, {
        key: "rasterizeJSON",
        value: function rasterizeJSON() {
          this.canvas.rasterizeJSON();
        }
      }]);

      return SideDesignComponent;
    }();

    SideDesignComponent.ɵfac = function SideDesignComponent_Factory(t) {
      return new (t || SideDesignComponent)();
    };

    SideDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideDesignComponent,
      selectors: [["app-side-design"]],
      viewQuery: function SideDesignComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      decls: 55,
      vars: 13,
      consts: [[1, "full-width"], [1, "row"], [1, "imgBox"], [1, "imgBack", "embed-responsive", 3, "ngStyle"], ["src", "assets/img/Trafaret3.png", "alt", "oo", 1, "imgFront"], [1, "canvas"], ["canvas", ""], [1, "toolNav", "col", "s4", "m3", "l4", "xl4", "red", "offset-s8", "offset-m9", "offset-l8", "offset-xl8"], [1, "nav-wrapper", "teal", "lighten-2"], [1, "brand-logo", "left"], ["href", "#", "data-target", "mobile-links", 1, "right", "sidenav-trigger"], [1, "material-icons"], ["id", "nav-mobile", 1, "tabBox", "center-align", "hide-on-med-and-down"], [1, "tabs", "tabs-fixed-width", "tab-demo", "z-depth-1"], [1, "tab"], ["href", "#test1"], [1, "small", "material-icons", 3, "ngStyle"], ["href", "#test2", 1, "active"], ["href", "#test3"], ["id", "test1", 1, "col", "s12"], [1, "colorConteiner", "left-align"], ["type", "button", "cdkOverlayOrigin", "", 1, "colorButton", 3, "click"], ["display", ""], ["id", "test2", 1, "active", "col", "s12"], ["id", "test3", 1, "col", "s12"], [1, "col", "s12", "m4", "l4"], ["src", "assets/img/Trafaret3.png ", 1, "responsive-img", "materialboxed"], ["src", "assets/img/Trafaret3.png", 1, "responsive-img", "materialboxed"]],
      template: function SideDesignComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-editor-pic", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "color_lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "format_size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideDesignComponent_Template_button_click_33_listener() {
            return ctx.isOpen = !ctx.isOpen;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SideDesignComponent_ng_template_35_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Test 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "op ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Test 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "lkoihoiogiog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.selectColor)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.selectColor || "none", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_2__["EditorPicComponent"]],
      styles: ["@media (min-width: 750px) {\n  .Content_Preview[_ngcontent-%COMP%] {\n    top: 10px;\n    left: 480px;\n    width: calc(100% - 488px);\n    height: 520px;\n    position: relative;\n    border: 2px solid seagreen;\n    display: flex;\n    justify-content: flex-start;\n    \n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n}\n\n.toolNav[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -450px;\n  width: 50px;\n  height: 200px;\n  \n}\n\n.toolsBoxxxxxxxxxxxxxxxxxxx[_ngcontent-%COMP%] {\n  \n  width: 380px;\n  height: 500px;\n  border: 2px solid chartreuse;\n  \n}\n\n.divv[_ngcontent-%COMP%] {\n  \n  height: 80px;\n  border: 2px solid #472e8b;\n}\n\n.imgFront[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n}\n\n.imgBack[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  \n  background-color: #cc2053;\n  border: 1px solid seagreen;\n}\n\n.colorButton[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n\ndiv.colorBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #777;\n  border: 2px solid black;\n}\n\n.colorConteiner[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.colorBox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 250px;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 0px;\n  \n  border-radius: 5px;\n  box-shadow: 5px 10px 18px #888888;\n}\n\n[role=\"option\"][_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n  cursor: pointer;\n  padding: 5px;\n  border: 3px solid transparent;\n  border-radius: 50%;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  border: 2px dashed #cccccc;\n}\n\n.main-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.images-item[_ngcontent-%COMP%] {\n  width: 48%;\n  cursor: pointer;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n  padding: 3px;\n  max-width: 120px;\n}\n\n.images-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.images-item-upload[_ngcontent-%COMP%] {\n  width: 80%;\n  cursor: pointer;\n  padding-bottom: 10px;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n}\n\n.images-item-upload[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.custom-item[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #f3f3f3;\n}\n\n.custom-item[_ngcontent-%COMP%]   .custom-item-title[_ngcontent-%COMP%] {\n  color: #666666;\n  font-weight: 600;\n}\n\n.custom-item[_ngcontent-%COMP%]   .custom-item-body[_ngcontent-%COMP%] {\n  padding: 0px 0;\n}\n\n.max-height[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 300px;\n}\n\n.canvas[_ngcontent-%COMP%] {\n  top: 30px;\n  left: 30px;\n  position: absolute;\n}\n\n.imgBox[_ngcontent-%COMP%] {\n  top: 30px;\n  \n  margin: auto;\n  width: 380px;\n  height: 480px;\n  position: relative;\n  border: 1px solid black;\n  \n}\n\n.tabBox[_ngcontent-%COMP%] {\n  padding-top: 120px;\n}\n\n.tabBoxNav[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1kZXNpZ24vRDpcXEFuZ3VsYXJcXENvcHkgb2Ygb3JpZ2luIHByb2plY3QgVC1zaGlydF9sYXN0XFx0LXNoaXJ0XFx0LXNoaXJ0LWJhY2tlbmRcXHQtc2hpcnQtZnJvbnRlbmQvc3JjXFxhcHBcXHNpZGUtZGVzaWduXFxzaWRlLWRlc2lnbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZS1kZXNpZ24vc2lkZS1kZXNpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNHLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsK0JBQUE7SUFDQSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7RUNBcEI7QUFDRjs7QURJSTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBQTtBQ0ROOztBRElJO0VBQ0ksc0JBQUE7RUFDQSxZQUFhO0VBQ2IsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwrQkFBQTtBQ0RSOztBREtJO0VBQ0ksdUJBQUE7RUFDQSxZQUFZO0VBQ1oseUJBQWtDO0FDRjFDOztBRFlJO0VBQ0csV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFFSDtBQ1hKOztBRGFJO0VBQ0csV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBQTtFQUNBLHlCQUFrQztFQUNsQywwQkFBMEI7QUNWakM7O0FEYUk7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQ1Z4Qjs7QURjSTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUNYN0I7O0FEY0k7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDWHZCOztBRGNJO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw2QkFBQTtFQUNBLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUNYdkM7O0FBRUE7RURhTSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUVmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FDWnhCOztBRGdCSTtFQUNFLDBCQUEwQjtBQ2JoQzs7QURlSTtFQUNFLGdCQUFnQjtBQ1p0Qjs7QURjSTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZ0JBQWdCO0FDWHRCOztBRGNJO0VBQ0UsWUFBWTtBQ1hsQjs7QURjSTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUNYbEM7O0FEY0k7RUFDRSxZQUFZO0FDWGxCOztBRGNJO0VBQ0UsZ0NBQWdDO0FDWHRDOztBRGNJO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQ1h0Qjs7QURjSTtFQUNFLGNBQWM7QUNYcEI7O0FEY0k7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FDWHZCOztBRGNJO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUNYeEI7O0FEY0k7RUFDRSxTQUFTO0VBQ1QsZUFBQTtFQUNBLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFFdkIsYUFBQTtBQ1pOOztBRGVJO0VBQ0Msa0JBQWtCO0FDWnZCOztBRGVJO0VBQ0UsaUJBQWlCO0FDWnZCIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1kZXNpZ24vc2lkZS1kZXNpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWluLXdpZHRoOiA3NTBweCkge1xyXG5cclxuICAgIC5Db250ZW50X1ByZXZpZXcgIHtcclxuICAgICAgIHRvcDogMTBweDsgICAgXHJcbiAgICAgICBsZWZ0OiA0ODBweDtcclxuICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0ODhweCk7ICAgXHJcbiAgICAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgYm9yZGVyOiAycHggc29saWQgc2VhZ3JlZW47IFxyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXHJcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvb2xOYXZ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogLTQ1MHB4O1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9vbHNCb3h4eHh4eHh4eHh4eHh4eHh4eHgge1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAwcHg7ICovXHJcbiAgICAgICAgd2lkdGg6IDM4MHB4IDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGNoYXJ0cmV1c2U7XHJcbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAuZGl2diB7XHJcbiAgICAgICAgLyogbWluLXdpZHRoOiAyODBweDsgICovXHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MSwgNDYsIDEzOSk7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiAzODBweCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ0Zyb250IHtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHotaW5kZXg6MFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWdCYWNrIHtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMzIsIDgzKTtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHNlYWdyZWVuOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbG9yQnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGRpdi5jb2xvckJveCBkaXY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbG9yQ29udGVpbmVye1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbG9yQm94IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbcm9sZT1cIm9wdGlvblwiXSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgI2NhbnZhcyB7XHJcbiAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjY2NjO1xyXG4gICAgfVxyXG4gICAgLm1haW4tdGl0bGV7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2VzLWl0ZW0ge1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltYWdlcy1pdGVtOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1hZ2VzLWl0ZW0tdXBsb2FkIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltYWdlcy1pdGVtLXVwbG9hZDpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbS1pdGVtIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdXN0b20taXRlbSAuY3VzdG9tLWl0ZW0tdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbS1pdGVtIC5jdXN0b20taXRlbS1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXgtaGVpZ2h0e1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYW52YXN7XHJcbiAgICAgIHRvcDogMzBweDtcclxuICAgICAgbGVmdDogMzBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1nQm94IHtcclxuICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAvKiBsZWZ0OiA0MCU7ICovXHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDM4MHB4OyBcclxuICAgICAgaGVpZ2h0OiA0ODBweDsgXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgXHJcbiAgICAgIC8qIGZsZXg6IDE7ICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJCb3gge1xyXG4gICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYkJveE5hdntcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBcclxuICAgIH0iLCJAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLkNvbnRlbnRfUHJldmlldyB7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDQ4MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0ODhweCk7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgc2VhZ3JlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLyogYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi50b29sTmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtNDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICAvKiB3aWR0aDogMzAwcHg7ICovXG59XG5cbi50b29sc0JveHh4eHh4eHh4eHh4eHh4eHh4eCB7XG4gIC8qIG1hcmdpbi1sZWZ0OiAwcHg7ICovXG4gIHdpZHRoOiAzODBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgY2hhcnRyZXVzZTtcbiAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cbn1cblxuLmRpdnYge1xuICAvKiBtaW4td2lkdGg6IDI4MHB4OyAgKi9cbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDcyZThiO1xufVxuXG4uaW1nRnJvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5pbWdCYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyMDUzO1xuICBib3JkZXI6IDFweCBzb2xpZCBzZWFncmVlbjtcbn1cblxuLmNvbG9yQnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5kaXYuY29sb3JCb3ggZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5jb2xvckNvbnRlaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29sb3JCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMHB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM4ODg4ODg7XG59XG5cbltyb2xlPVwib3B0aW9uXCJdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW46IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNjYW52YXMge1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjY2NjYztcbn1cblxuLm1haW4tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW1hZ2VzLWl0ZW0ge1xuICB3aWR0aDogNDglO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLmltYWdlcy1pdGVtOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaW1hZ2VzLWl0ZW0tdXBsb2FkIHtcbiAgd2lkdGg6IDgwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbn1cblxuLmltYWdlcy1pdGVtLXVwbG9hZDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmN1c3RvbS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmM2YzZjM7XG59XG5cbi5jdXN0b20taXRlbSAuY3VzdG9tLWl0ZW0tdGl0bGUge1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmN1c3RvbS1pdGVtIC5jdXN0b20taXRlbS1ib2R5IHtcbiAgcGFkZGluZzogMHB4IDA7XG59XG5cbi5tYXgtaGVpZ2h0IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4uY2FudmFzIHtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbWdCb3gge1xuICB0b3A6IDMwcHg7XG4gIC8qIGxlZnQ6IDQwJTsgKi9cbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzgwcHg7XG4gIGhlaWdodDogNDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIC8qIGZsZXg6IDE7ICovXG59XG5cbi50YWJCb3gge1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG59XG5cbi50YWJCb3hOYXYge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideDesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-design',
          templateUrl: './side-design.component.html',
          styleUrls: ['./side-design.component.scss']
        }]
      }], function () {
        return [];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      backend_url: 'http://localhost:5000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! materialize-css/dist/js/materialize.js */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Angular\Copy of origin project T-shirt_last\t-shirt\t-shirt-backend\t-shirt-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!***********************!*\
    !*** jsdom (ignored) ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************************************************!*\
    !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!***************************************!*\
    !*** jsdom/lib/jsdom/utils (ignored) ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map