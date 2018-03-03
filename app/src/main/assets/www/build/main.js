webpackJsonp([12],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingProvider; });
/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingProvider = {
    organization: 'Sager Education',
    pageSettings: {
        LoginPage: {
            componentName: "LoginPage",
            pageTitle: "Login",
            pageIcon: "log-in"
        },
        TabsPage: {
            componentName: "TabsPage",
            pageTitle: "Home",
            pageIcon: "planet"
        },
        HomePage: {
            componentName: "HomePage",
            pageTitle: "Home",
            pageIcon: "home"
        },
        ClassPage: {
            componentName: "ClassPage",
            pageTitle: "Class",
            pageIcon: "school"
        },
        ClassSchdulePage: {
            componentName: "ClassSchdulePage",
            pageTitle: "Class Schedule",
            pageIcon: "school"
        },
        ClassPerformancePage: {
            componentName: "ClassPerformancePage",
            pageTitle: "Class Performance",
            pageIcon: "school"
        },
        ClassHomeworkPage: {
            componentName: "ClassHomeworkPage",
            pageTitle: "Class Homework",
            pageIcon: "school"
        },
        ClassResourcePage: {
            componentName: "ClassResourcePage",
            pageTitle: "Class Assets",
            pageIcon: "school"
        },
        AboutPage: {
            componentName: "AboutPage",
            pageTitle: "My Profile",
            pageIcon: "information-circle"
        },
        TutorialPage: {
            componentName: "TutorialPage",
            pageTitle: "Tutorial",
            pageIcon: "information-circle"
        }
    },
    appStorageKeys: {
        ISAUTH: "ISAUTH",
    }
};
//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		822,
		1
	],
	"../pages/auth/auth.module": [
		825,
		11
	],
	"../pages/class-homework/class-homework.module": [
		824,
		3
	],
	"../pages/class-performance/class-performance.module": [
		823,
		0
	],
	"../pages/class-resource/class-resource.module": [
		826,
		6
	],
	"../pages/class-schdule/class-schdule.module": [
		827,
		2
	],
	"../pages/class/class.module": [
		828,
		4
	],
	"../pages/header/header.module": [
		821,
		10
	],
	"../pages/home/home.module": [
		829,
		5
	],
	"../pages/login/login.module": [
		830,
		7
	],
	"../pages/tabs/tabs.module": [
		831,
		9
	],
	"../pages/tutorial/tutorial.module": [
		832,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegProgram; });
var RegProgram = (function () {
    function RegProgram() {
        this.homework = [];
    }
    return RegProgram;
}());

//# sourceMappingURL=regProgram.model.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(497);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__models__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__models__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__models__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__models__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__models__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__models__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(505);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["f"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//https://github.com/ngx-translate/core/issues/209
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                // TranslateModule.forRoot({
                //   loader: {
                //     provide: TranslateLoader,
                //     useFactory: (createTranslateLoader),
                //     deps: [HttpClient]
                //   }
                // }),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_5__index__["h" /* StorageService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(477);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared___ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false,
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/class-performance/class-performance.module#ClassPerformancePageModule', name: 'ClassPerformancePage', segment: 'class-performance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/class-homework/class-homework.module#ClassHomeworkPageModule', name: 'ClassHomeworkPage', segment: 'class-homework', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/class-resource/class-resource.module#ClassResourcePageModule', name: 'ClassResourcePage', segment: 'class-resource', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/class-schdule/class-schdule.module#ClassSchdulePageModule', name: 'ClassSchdulePage', segment: 'class-schdule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/class/class.module#ClassPageModule', name: 'ClassPage', segment: 'class', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__shared___["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_10__shared___["e" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_10__shared___["k" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__shared___["g" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_10__shared___["d" /* ClassService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(498);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__user_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userDetail_model__ = __webpack_require__(499);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__userDetail_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_model__ = __webpack_require__(500);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_model__ = __webpack_require__(501);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__class_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userClassSchedule_model__ = __webpack_require__(502);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__userClassSchedule_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classDetail_model__ = __webpack_require__(503);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__classDetail_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__regProgram_model__ = __webpack_require__(214);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homework_model__ = __webpack_require__(504);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__homework_model__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetail; });
var UserDetail = (function () {
    function UserDetail() {
    }
    return UserDetail;
}());

//# sourceMappingURL=userDetail.model.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export News */
var News = (function () {
    function News() {
    }
    return News;
}());

//# sourceMappingURL=news.model.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
var Class = (function () {
    function Class() {
    }
    return Class;
}());

//# sourceMappingURL=class.model.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userClassSchedule; });
var userClassSchedule = (function () {
    function userClassSchedule() {
    }
    return userClassSchedule;
}());

//# sourceMappingURL=userClassSchedule.model.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassDetail; });
var ClassDetail = (function () {
    function ClassDetail() {
    }
    return ClassDetail;
}());

//# sourceMappingURL=classDetail.model.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homework; });
var Homework = (function () {
    function Homework() {
    }
    return Homework;
}());

//# sourceMappingURL=homework.model.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__ = __webpack_require__(789);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__storage_storage_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_service__ = __webpack_require__(793);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__common_common_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(795);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news_service__ = __webpack_require__(796);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__news_news_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_class_service__ = __webpack_require__(797);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__class_class_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        // add api config 
        this.http = http;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
        };
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json());
    };
    ApiService.prototype.get = function (path, param) {
        if (param === void 0) { param = {}; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].api_url + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    appName: "Sager Education",
    production: true,
    api_url: 'http://172.16.0.51:8081'
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.storeValueByKey = function (key, obj) {
        return this.storage.set(key, obj);
    };
    StorageService.prototype.retrieveValueByKey = function (key) {
        return this.storage.get(key);
    };
    StorageService.prototype.removeKey = function (key) {
        return this.storage.remove(key);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = (function () {
    function CommonService(loadingCtrl, alertCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        //private loader : Loading;
        this.utcOffSet = '+0000';
        this.dateFormt = 'YYYY-MM-DD';
        this.timeFormat = 'HH:mm a';
    }
    CommonService.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            // content: "Loading data...",
            spinner: 'dots',
            dismissOnPageChange: true
        });
        loader.present();
        return loader;
    };
    //dismissLoading should only be used when error show page, if new page will show , no need to call
    CommonService.prototype.dismissLoading = function (loader) {
        try {
            loader.dismiss().catch(function (err) {
            });
        }
        catch (e) {
        }
    };
    CommonService.prototype.presentAlert = function (title, content) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: content,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CommonService.prototype.presentNetWorkRequestError = function () {
        var title = 'NetWork Error';
        var subTitle = 'Please check your network connection';
        this.presentAlert(title, subTitle);
    };
    CommonService.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    CommonService.prototype.getDateFromFullDate = function (fullDate) {
        var date = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(fullDate).utcOffset(this.utcOffSet).format(this.dateFormt);
        return date;
    };
    CommonService.prototype.getTimeFromFullDate = function (fullDate) {
        var time = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(fullDate).utcOffset(this.utcOffSet).format(this.timeFormat);
        return time;
    };
    // 'YYYY-MM-DD';
    CommonService.prototype.getSplitDate = function (date) {
        var parts = date.split("-");
        ;
        var ds = {
            year: parseInt(parts[0], 10),
            month: parseInt(parts[1], 10) - 1,
            date: parseInt(parts[2], 10),
        };
        return ds;
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 307,
	"./af.js": 307,
	"./ar": 308,
	"./ar-dz": 309,
	"./ar-dz.js": 309,
	"./ar-kw": 310,
	"./ar-kw.js": 310,
	"./ar-ly": 311,
	"./ar-ly.js": 311,
	"./ar-ma": 312,
	"./ar-ma.js": 312,
	"./ar-sa": 313,
	"./ar-sa.js": 313,
	"./ar-tn": 314,
	"./ar-tn.js": 314,
	"./ar.js": 308,
	"./az": 315,
	"./az.js": 315,
	"./be": 316,
	"./be.js": 316,
	"./bg": 317,
	"./bg.js": 317,
	"./bm": 318,
	"./bm.js": 318,
	"./bn": 319,
	"./bn.js": 319,
	"./bo": 320,
	"./bo.js": 320,
	"./br": 321,
	"./br.js": 321,
	"./bs": 322,
	"./bs.js": 322,
	"./ca": 323,
	"./ca.js": 323,
	"./cs": 324,
	"./cs.js": 324,
	"./cv": 325,
	"./cv.js": 325,
	"./cy": 326,
	"./cy.js": 326,
	"./da": 327,
	"./da.js": 327,
	"./de": 328,
	"./de-at": 329,
	"./de-at.js": 329,
	"./de-ch": 330,
	"./de-ch.js": 330,
	"./de.js": 328,
	"./dv": 331,
	"./dv.js": 331,
	"./el": 332,
	"./el.js": 332,
	"./en-au": 333,
	"./en-au.js": 333,
	"./en-ca": 334,
	"./en-ca.js": 334,
	"./en-gb": 335,
	"./en-gb.js": 335,
	"./en-ie": 336,
	"./en-ie.js": 336,
	"./en-nz": 337,
	"./en-nz.js": 337,
	"./eo": 338,
	"./eo.js": 338,
	"./es": 339,
	"./es-do": 340,
	"./es-do.js": 340,
	"./es-us": 341,
	"./es-us.js": 341,
	"./es.js": 339,
	"./et": 342,
	"./et.js": 342,
	"./eu": 343,
	"./eu.js": 343,
	"./fa": 344,
	"./fa.js": 344,
	"./fi": 345,
	"./fi.js": 345,
	"./fo": 346,
	"./fo.js": 346,
	"./fr": 347,
	"./fr-ca": 348,
	"./fr-ca.js": 348,
	"./fr-ch": 349,
	"./fr-ch.js": 349,
	"./fr.js": 347,
	"./fy": 350,
	"./fy.js": 350,
	"./gd": 351,
	"./gd.js": 351,
	"./gl": 352,
	"./gl.js": 352,
	"./gom-latn": 353,
	"./gom-latn.js": 353,
	"./gu": 354,
	"./gu.js": 354,
	"./he": 355,
	"./he.js": 355,
	"./hi": 356,
	"./hi.js": 356,
	"./hr": 357,
	"./hr.js": 357,
	"./hu": 358,
	"./hu.js": 358,
	"./hy-am": 359,
	"./hy-am.js": 359,
	"./id": 360,
	"./id.js": 360,
	"./is": 361,
	"./is.js": 361,
	"./it": 362,
	"./it.js": 362,
	"./ja": 363,
	"./ja.js": 363,
	"./jv": 364,
	"./jv.js": 364,
	"./ka": 365,
	"./ka.js": 365,
	"./kk": 366,
	"./kk.js": 366,
	"./km": 367,
	"./km.js": 367,
	"./kn": 368,
	"./kn.js": 368,
	"./ko": 369,
	"./ko.js": 369,
	"./ky": 370,
	"./ky.js": 370,
	"./lb": 371,
	"./lb.js": 371,
	"./lo": 372,
	"./lo.js": 372,
	"./lt": 373,
	"./lt.js": 373,
	"./lv": 374,
	"./lv.js": 374,
	"./me": 375,
	"./me.js": 375,
	"./mi": 376,
	"./mi.js": 376,
	"./mk": 377,
	"./mk.js": 377,
	"./ml": 378,
	"./ml.js": 378,
	"./mr": 379,
	"./mr.js": 379,
	"./ms": 380,
	"./ms-my": 381,
	"./ms-my.js": 381,
	"./ms.js": 380,
	"./mt": 382,
	"./mt.js": 382,
	"./my": 383,
	"./my.js": 383,
	"./nb": 384,
	"./nb.js": 384,
	"./ne": 385,
	"./ne.js": 385,
	"./nl": 386,
	"./nl-be": 387,
	"./nl-be.js": 387,
	"./nl.js": 386,
	"./nn": 388,
	"./nn.js": 388,
	"./pa-in": 389,
	"./pa-in.js": 389,
	"./pl": 390,
	"./pl.js": 390,
	"./pt": 391,
	"./pt-br": 392,
	"./pt-br.js": 392,
	"./pt.js": 391,
	"./ro": 393,
	"./ro.js": 393,
	"./ru": 394,
	"./ru.js": 394,
	"./sd": 395,
	"./sd.js": 395,
	"./se": 396,
	"./se.js": 396,
	"./si": 397,
	"./si.js": 397,
	"./sk": 398,
	"./sk.js": 398,
	"./sl": 399,
	"./sl.js": 399,
	"./sq": 400,
	"./sq.js": 400,
	"./sr": 401,
	"./sr-cyrl": 402,
	"./sr-cyrl.js": 402,
	"./sr.js": 401,
	"./ss": 403,
	"./ss.js": 403,
	"./sv": 404,
	"./sv.js": 404,
	"./sw": 405,
	"./sw.js": 405,
	"./ta": 406,
	"./ta.js": 406,
	"./te": 407,
	"./te.js": 407,
	"./tet": 408,
	"./tet.js": 408,
	"./th": 409,
	"./th.js": 409,
	"./tl-ph": 410,
	"./tl-ph.js": 410,
	"./tlh": 411,
	"./tlh.js": 411,
	"./tr": 412,
	"./tr.js": 412,
	"./tzl": 413,
	"./tzl.js": 413,
	"./tzm": 414,
	"./tzm-latn": 415,
	"./tzm-latn.js": 415,
	"./tzm.js": 414,
	"./uk": 416,
	"./uk.js": 416,
	"./ur": 417,
	"./ur.js": 417,
	"./uz": 418,
	"./uz-latn": 419,
	"./uz-latn.js": 419,
	"./uz.js": 418,
	"./vi": 420,
	"./vi.js": 420,
	"./x-pseudo": 421,
	"./x-pseudo.js": 421,
	"./yo": 422,
	"./yo.js": 422,
	"./zh-cn": 423,
	"./zh-cn.js": 423,
	"./zh-hk": 424,
	"./zh-hk.js": 424,
	"./zh-tw": 425,
	"./zh-tw.js": 425
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 794;

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UserService = (function () {
    function UserService(apiService, storageService) {
        this.apiService = apiService;
        this.storageService = storageService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_4__index__["i" /* User */]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        this.path1 = '/users';
        this.path2 = '/userDetails';
    }
    UserService.prototype.setAuth = function (user) {
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
        this.storageService.storeValueByKey(__WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__["a" /* SettingProvider */].appStorageKeys.ISAUTH, user);
    };
    UserService.prototype.purgeAuth = function () {
        // Set current user to an empty object
        this.currentUserSubject.next(new __WEBPACK_IMPORTED_MODULE_4__index__["i" /* User */]());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
        this.storageService.removeKey(__WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__["a" /* SettingProvider */].appStorageKeys.ISAUTH);
    };
    UserService.prototype.authenticate = function (user) {
        var _this = this;
        return this.apiService.get(this.path1, user)
            .map(function (data) {
            if (data.length == 1) {
                //add some logic convert respond to user
                var u = _this.covertToUser(data[0]);
                _this.setAuth(u);
                return u;
            }
            else {
                _this.purgeAuth();
            }
        });
    };
    // Update the user on the server
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put(this.path1, { user: user })
            .map(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        });
    };
    UserService.prototype.getUserDetail = function (user) {
        var _this = this;
        // let userDetail: UserDetail = new UserDetail();
        // userDetail.id = user.id;
        return this.apiService.get(this.path2, user)
            .map(function (data) {
            if (data.length == 1) {
                var ud = _this.covertToUserDetail(data[0]);
                return ud;
            }
        });
    };
    UserService.prototype.covertToUser = function (data) {
        var u = new __WEBPACK_IMPORTED_MODULE_4__index__["i" /* User */]();
        u.id = data.StudentID;
        u.username = data.Username;
        u.password = data.Password;
        return u;
    };
    UserService.prototype.covertToUserDetail = function (data) {
        var ud = new __WEBPACK_IMPORTED_MODULE_4__index__["j" /* UserDetail */]();
        ud.id = data.StudentID;
        ud.firstName = data.FirstName;
        ud.lastName = data.LastName;
        ud.cellPhone = data.CellPhone;
        ud.homePhone = data.HomePhone;
        ud.contactName = data.ContactName;
        ud.gender = data.Gender;
        ud.schoolName = data.SchoolName;
        ud.schoolGrade = data.SchoolGrade;
        ud.email = data.Email;
        ud.pic = data.Picture;
        ud.regDate = data.RegDate;
        return ud;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_4__index__["h" /* StorageService */]; }))),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], Object])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    // private newsSubject = new BehaviorSubject<News>(new News());
    //public news = this.newsSubject.asObservable();
    function NewsService(apiService) {
        this.apiService = apiService;
        this.path1 = '/news';
    }
    NewsService.prototype.fetchNews = function () {
        return this.apiService.get(this.path1)
            .map(function (data) {
            return data;
        });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_regProgram_model__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ClassService = (function () {
    function ClassService(apiService, commonService) {
        this.apiService = apiService;
        this.commonService = commonService;
        this.path1 = '/classSchedule';
        this.path2 = '/classHomework';
        this.path3 = '/regPrograms';
    }
    ClassService.prototype.getClassSchedule = function (userClass) {
        var _this = this;
        return this.apiService.get(this.path1, userClass)
            .map(function (data) {
            console.log(data);
            var d = data.map(function (x) {
                return _this.convertToClass(x);
            });
            console.log(d);
            return d;
        });
    };
    ClassService.prototype.getClassDetailByRegProgram = function (regProgram) {
        var _this = this;
        return this.apiService.get(this.path2, regProgram)
            .map(function (data) {
            console.log(data);
            var d = data.map(function (x) {
                return _this.convertToClassDetail(x);
            });
            console.log(d);
            return d;
        });
    };
    ClassService.prototype.getRegPrograms = function (userClass) {
        var _this = this;
        return this.apiService.get(this.path3, userClass)
            .map(function (data) {
            console.log(data);
            var d = data.map(function (x) {
                return _this.convertToRegProgram(x);
            });
            console.log(d);
            return d;
        });
    };
    ClassService.prototype.convertToClass = function (Data) {
        var c = new __WEBPACK_IMPORTED_MODULE_2__index__["b" /* Class */]();
        c.id = Data.ClassID;
        c.studentId = Data.StudentID;
        c.campusId = Data.CampusID;
        c.teacherId = Data.InstructorID;
        c.regId = Data.RegpID;
        c.programId = Data.ProgramID;
        c.date = this.commonService.getDateFromFullDate(Data.ClassStart);
        c.startTime = this.commonService.getTimeFromFullDate(Data.ClassStart);
        c.endTime = this.commonService.getTimeFromFullDate(Data.ClassEnd);
        c.status = Data.Status;
        c.teacherFirstName = Data.FirstName;
        c.teacherLastName = Data.LastName;
        c.campus = Data.CampusName;
        c.programName = Data.ProgramName;
        return c;
    };
    ClassService.prototype.convertToClassDetail = function (Data) {
        var c = new __WEBPACK_IMPORTED_MODULE_2__index__["c" /* ClassDetail */]();
        c.id = Data.ClassID;
        c.campusId = Data.CampusID;
        c.teacherId = Data.InstructorID;
        c.regId = Data.RegpID;
        c.programId = Data.ProgramID;
        c.date = this.commonService.getDateFromFullDate(Data.ClassStart);
        c.startTime = this.commonService.getTimeFromFullDate(Data.ClassStart);
        c.endTime = this.commonService.getTimeFromFullDate(Data.ClassEnd);
        c.status = Data.Status;
        c.teacherFirstName = Data.FirstName;
        c.teacherLastName = Data.LastName;
        c.campus = Data.CampusName;
        c.programName = Data.ProgramName;
        c.homeworkDone = Data.Homework;
        c.homeWorkDetail = Data.HomeworkDetail;
        return c;
    };
    ClassService.prototype.convertToRegProgram = function (Data) {
        var rg = new __WEBPACK_IMPORTED_MODULE_3__models_regProgram_model__["a" /* RegProgram */]();
        rg.id = Data.RegpID;
        rg.studentId = Data.StudentID;
        rg.programId = Data.ProgramID;
        rg.startDate = this.commonService.getDateFromFullDate(Data.StartDate);
        rg.endDate = this.commonService.getDateFromFullDate(Data.EndDate);
        rg.programName = Data.ProgramName;
        rg.homework = [];
        return rg;
    };
    ClassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_2__index__["e" /* CommonService */]; }))),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], Object])
    ], ClassService);
    return ClassService;
}());

//# sourceMappingURL=class.service.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_index__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, alerCtrl, userService) {
        this.translate = translate;
        this.alerCtrl = alerCtrl;
        this.userService = userService;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            translate.addLangs(["en", "zh", "tw"]);
            translate.setDefaultLang('zh');
            platform.registerBackButtonAction(function (event) {
                event.preventDefault();
            }, 100);
        });
        this.setRootPage();
        this.appMenuItems = [
            { title: __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__["a" /* SettingProvider */].pageSettings.TabsPage.pageTitle, componentName: __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__["a" /* SettingProvider */].pageSettings.TabsPage.componentName, icon: __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__["a" /* SettingProvider */].pageSettings.TabsPage.pageIcon },
        ];
    }
    MyApp.prototype.setRootPage = function () {
        // this.storageService.retrieveValueByKey(SettingProvider.appStorageKeys.ISAUTH).then(
        //   user => {
        //     this.rootPage = SettingProvider.pageSettings.TabsPage.componentName;
        //   }, 
        //   error =>{
        //     this.rootPage = SettingProvider.pageSettings.TutorialPage.componentName;
        //   }
        // )
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__["a" /* SettingProvider */].pageSettings.TutorialPage.componentName;
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.componentName);
    };
    MyApp.prototype.changeLanguage = function () {
        var _this = this;
        this.langs = [{ language: "English", type: "en" }, { language: "简体中文", type: "zh" }, { language: "繁体中文", type: "tw" }];
        var alert = this.alerCtrl.create();
        alert.setTitle('语言选择');
        for (var _i = 0, _a = this.langs; _i < _a.length; _i++) {
            var lang = _a[_i];
            alert.addInput({
                type: 'radio',
                label: lang["language"],
                value: lang["type"],
                checked: (lang["type"] == this.translate.getDefaultLang() ? true : false)
            });
        }
        alert.addButton('取消');
        alert.addButton({
            text: '确认',
            handler: function (data) {
                _this.RadioOpen = false;
                _this.RadioResult = data;
                _this.translate.setDefaultLang(data);
                _this.translate.use(data);
            }
        });
        alert.present().then(function () {
            _this.RadioOpen = true;
        });
    };
    MyApp.prototype.logout = function () {
        this.userService.purgeAuth();
        //this.nav.setRoot(SettingProvider.pageSettings.LoginPage.componentName)
        this.nav.insert(0, __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__["a" /* SettingProvider */].pageSettings.LoginPage.componentName);
        this.nav.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\app\app.html"*/'<ion-menu [content]="content" side="right">\n    <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item class="text-1x" *ngFor="let p of appMenuItems" (click)="openPage(p)">\n        <ion-icon item-left [name]="p.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{p.title  | translate}}</span>\n      </button>\n      <button menuClose ion-item class="text-1x" (click)="changeLanguage()">\n        <ion-icon item-left name="swap" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'Language\'  | translate}}</span>\n      </button>\n      <button menuClose ion-item class="text-1x" (click)="logout()">\n        <ion-icon item-left name="exit" color="primary"></ion-icon>\n        <span ion-text color="primary">{{\'Logout\'  | translate}}</span>\n      </button>\n    </ion-list>\n </ion-content>\n  </ion-menu>\n<ion-nav [root]="rootPage"  #content></ion-nav>\n'/*ion-inline-end:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__shared_index__["k" /* UserService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[472]);
//# sourceMappingURL=main.js.map