webpackJsonp([3,10],{

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageModule", function() { return HeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderPageModule = (function () {
    function HeaderPageModule() {
    }
    HeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */]
            ]
        })
    ], HeaderPageModule);
    return HeaderPageModule;
}());

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassHomeworkPageModule", function() { return ClassHomeworkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_homework__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(910);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ClassHomeworkPageModule = (function () {
    function ClassHomeworkPageModule() {
    }
    ClassHomeworkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__class_homework__["a" /* ClassHomeworkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__class_homework__["a" /* ClassHomeworkPage */]),
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["HeaderPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ClassHomeworkPageModule);
    return ClassHomeworkPageModule;
}());

//# sourceMappingURL=class-homework.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared___ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// a super page that handle auth and network error..
var AuthPage = (function () {
    function AuthPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
    }
    AuthPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log('view will load call by auth page');
        this.isAuthenticatedSubscription = this.userService.isAuthenticated.subscribe(function (isAuth) {
            if (!isAuth) {
                _this.isNotAuthenticated();
            }
            else {
                _this.isAuthenticated();
            }
        }, function (error) {
            //console.log('auth page fail to authenticate' + error);
        });
    };
    AuthPage.prototype.isNotAuthenticated = function () {
        //this.navCtrl.popToRoot();
        //this.navCtrl.setRoot(SettingProvider.pageSettings.LoginPage.componentName); 
    };
    AuthPage.prototype.isAuthenticated = function () {
    };
    AuthPage.prototype.ionViewCanLeave = function () {
        //console.log('auth page fun subscribe' );
        this.isAuthenticatedSubscription.unsubscribe();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\pages\auth\auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n'/*ion-inline-end:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared___["k" /* UserService */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeaderPage = (function () {
    function HeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Object.defineProperty(HeaderPage.prototype, "header", {
        get: function () {
            return this.title;
        },
        set: function (header_title) {
            this.title = header_title;
        },
        enumerable: true,
        configurable: true
    });
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderPage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HeaderPage.prototype, "header", null);
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-header',template:/*ion-inline-start:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\pages\header\header.html"*/'<!--\n  Generated template for the HeaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n   \n\n    <ion-navbar color="primary">\n      <img alt="logo" height="40px" src="assets/imgs/logoImg.png" style="display:inline-block; float: left" /> \n      <ion-title style="margin-top : 10px">{{title | translate}}</ion-title>\n      <ion-buttons end>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      </ion-buttons>\n    </ion-navbar>\n\n'/*ion-inline-end:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\pages\header\header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassHomeworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__ = __webpack_require__(157);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ClassHomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassHomeworkPage = (function (_super) {
    __extends(ClassHomeworkPage, _super);
    function ClassHomeworkPage(navCtrl, navParams, userService, commonService, classService) {
        var _this = _super.call(this, navCtrl, navParams, userService) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.userService = userService;
        _this.commonService = commonService;
        _this.classService = classService;
        _this.regPrograms = [];
        _this.item2s = [
            {
                imageUrl: 'assets/img/lists/stadium.jpg',
                title: 'First Cup',
                place: 'Madison Square',
                date: '05/06/2016'
            },
            {
                imageUrl: 'assets/img/lists/stadium-3.png',
                title: 'Season',
                place: 'Hooli',
                date: '15/03/2016'
            },
            {
                imageUrl: 'assets/img/lists/stadium-2.jpg',
                title: '2nd Season',
                place: 'Castelão',
                date: '05/12/2015'
            },
        ];
        _this.items = [
            {
                name: 'Computer Programming',
                description: 'Solve sorting problem In computer science, a sorting algorithm is an algorithm that puts elements of a list in a certain order. The most-used orders are numerical order and lexicographical order. Efficient sorting is important for optimizing the use of other algorithms (such as search and merge algorithms) which require input data to be in sorted lists; it is also often useful for canonicalizing data and for producing human-readable output. More formally, the output must satisfy two conditions',
                imageUrl: 'assets/imgs/class_homework/hw1.jpg'
            },
            {
                name: 'Computer Programming',
                description: 'Solve search problem, In computational complexity theory and computability theory, a search problem is a type of computational problem represented by a binary relation. If R is a binary relation such that field(R) ⊆ Γ+ and T is a Turing machine, then T calculates R',
                imageUrl: 'assets/imgs/class_homework/hw2.jpg'
            },
            {
                name: 'Computer Programming',
                description: 'Solve ccc 2018 problem',
                imageUrl: 'assets/imgs/class_homework/hw3.jpg'
            },
            {
                name: 'Computer Programming',
                description: 'Solve ccc 2017 problem',
                imageUrl: 'assets/imgs/class_homework/hw4.jpg'
            }
        ];
        _this.header_title = __WEBPACK_IMPORTED_MODULE_4__providers_setting_setting__["a" /* SettingProvider */].pageSettings.ClassHomeworkPage.pageTitle;
        return _this;
    }
    ClassHomeworkPage.prototype.ionViewDidLoad = function () {
        this.fetchRegPrograms();
    };
    ClassHomeworkPage.prototype.fetchProgramHomework = function (regProgram) {
        var _this = this;
        console.log(regProgram.homework.length);
        if (regProgram.homework.length > 0) {
            return;
        }
        var loading = this.commonService.presentLoading();
        this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            var ucs = new __WEBPACK_IMPORTED_MODULE_2__shared_index__["l" /* userClassSchedule */]();
            ucs.id = user.id;
            _this.classService.getClassDetailByRegProgram(regProgram).map(function (classDetail) {
                var homeworks = [];
                for (var i = 0; i < classDetail.length; i++) {
                    var h = new __WEBPACK_IMPORTED_MODULE_2__shared_index__["f" /* Homework */]();
                    h.homeworkDetail = classDetail[i].homeWorkDetail;
                    h.homeworkDone = classDetail[i].homeworkDone;
                    h.homeworkDate = classDetail[i].date;
                    homeworks.push(h);
                }
                return homeworks;
            }, function (error) {
            }).subscribe(function (homeworks) {
                _this.commonService.dismissLoading(loading);
                regProgram.homework = homeworks;
                console.log(homeworks);
            }, function (error) {
                _this.commonService.dismissLoading(loading);
            }, function () {
            });
        });
    };
    ClassHomeworkPage.prototype.fetchRegPrograms = function () {
        var _this = this;
        var loading = this.commonService.presentLoading();
        this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            var ucs = new __WEBPACK_IMPORTED_MODULE_2__shared_index__["l" /* userClassSchedule */]();
            ucs.id = user.id;
            _this.classService.getRegPrograms(ucs).subscribe(function (regPrograms) {
                _this.commonService.dismissLoading(loading);
                console.log(regPrograms);
                _this.regPrograms = regPrograms;
            }, function (error) {
                _this.commonService.dismissLoading(loading);
            }, function () {
            });
        });
    };
    ClassHomeworkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-class-homework',template:/*ion-inline-start:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\pages\class-homework\class-homework.html"*/'<!--\n  Generated template for the ClassHomeworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <page-header [header]="header_title"></page-header>\n</ion-header>\n\n<ion-content no-padding>\n    <accordion-list *ngFor="let reg of regPrograms; let index = index"\n    [title]="reg.programName"\n    [subTitle] = "reg.startDate + \' to \' + reg.endDate"\n    textColor="#FFF"\n    hasMargin="false"\n    headerColor="#939cbc"\n    [expanded]="false"\n    (click)="fetchProgramHomework(reg)"\n    >\n<!-- <img [src]="item.imageUrl"> -->\n<ion-list>\n    <!-- <ion-item-sliding *ngFor="let h of reg.homework">\n      <ion-item>\n        <h2>{{h.homeworkDetail}}</h2>\n        <p>{{h.homeworkDate}}</p>\n        <p>{{h.homeworkDone}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="viewComments(h)">\n        <ion-icon name="chatbubbles"></ion-icon>\n        Comments\n      </button>\n       \n        <button ion-button color="danger" (click)="delete(h)">\n        <ion-icon name="trash"></ion-icon>\n        Delete\n      </button>\n      </ion-item-options>\n    </ion-item-sliding> -->\n\n        <ion-slides pager>\n          <ion-slide *ngFor="let h of reg.homework"\n                     class="text-center slider-item">\n                     <!-- [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}"> -->\n            <div class="slide-text">\n              <h2>{{h.homeworkDate}}</h2>\n              <p>{{h.homeDetail}}</p>\n              <p>{{h.homeworkDone}} finished </p>\n            </div>\n          </ion-slide>\n        </ion-slides>\n     \n  </ion-list>\n</accordion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\pages\class-homework\class-homework.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["e" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["d" /* ClassService */]])
    ], ClassHomeworkPage);
    return ClassHomeworkPage;
}(__WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthPage */]));

//# sourceMappingURL=class-homework.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export components */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_list_accordion_list__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_timeline_module__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var components = [
    __WEBPACK_IMPORTED_MODULE_2__accordion_list_accordion_list__["a" /* AccordionListComponent */],
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [components],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicModule */]],
            exports: [components, __WEBPACK_IMPORTED_MODULE_3__timeline_timeline_module__["a" /* TimelineComponentModule */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionListComponent = (function () {
    function AccordionListComponent(renderer) {
        this.renderer = renderer;
        this.headerColor = '#F53D3D';
        this.textColor = '#FFF';
        this.contentColor = '#F9F9F9';
        this.hasMargin = true;
    }
    AccordionListComponent.prototype.ngAfterViewInit = function () {
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
        if (!this.expanded) {
            this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
        }
    };
    AccordionListComponent.prototype.toggleAccordion = function () {
        this.expanded = !this.expanded;
        var newHeight = this.expanded ? '100%' : '0px';
        this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "headerColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "textColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "contentColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "subTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccordionListComponent.prototype, "hasMargin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccordionListComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accordionContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AccordionListComponent.prototype, "elementView", void 0);
    AccordionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'accordion-list',template:/*ion-inline-start:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\components\accordion-list\accordion-list.html"*/'<ion-list class="accordion-list">\n\n        <ion-list-header no-lines no-padding>\n\n          <button ion-item detail-none\n\n                  [style.background]="headerColor"\n\n                  (click)="toggleAccordion()"\n\n                  class="accordion-header"\n\n                  [class.active]="expanded">\n\n              <ion-icon\n\n                item-left\n\n                name="ios-arrow-forward">\n\n              </ion-icon>\n\n              {{ title }}\n\n              <br/>\n\n              {{ subTitle }}\n\n          </button>\n\n          <section #accordionContent\n\n                   [style.background]="contentColor"\n\n                   [class.active]="expanded"\n\n                   class="accordion-content">\n\n            <ng-content></ng-content>\n\n          </section>\n\n        </ion-list-header>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\components\accordion-list\accordion-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], AccordionListComponent);
    return AccordionListComponent;
}());

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(913);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelineComponentModule = (function () {
    function TimelineComponentModule() {
    }
    TimelineComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["c" /* TimelineTimeComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_2__timeline__["c" /* TimelineTimeComponent */],
            ]
        })
    ], TimelineComponentModule);
    return TimelineComponentModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimelineTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = (function () {
    function TimelineComponent() {
        this.endIcon = 'ionic';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endIcon'),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "endIcon", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline',template:/*ion-inline-start:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\components\timeline\timeline.html"*/'<div class="timeline">\n\n        <ng-content></ng-content>\n\n      \n\n        <timeline-item>\n\n          <ion-icon class="" [name]="endIcon"></ion-icon>\n\n        </timeline-item>\n\n      \n\n</div>'/*ion-inline-end:"C:\Users\Chris\Desktop\Sandbox\SagerEducation\src\components\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());

var TimelineItemComponent = (function () {
    function TimelineItemComponent() {
    }
    TimelineItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-item',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineItemComponent);
    return TimelineItemComponent;
}());

var TimelineTimeComponent = (function () {
    function TimelineTimeComponent() {
        this.time = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
        __metadata("design:type", Object)
    ], TimelineTimeComponent.prototype, "time", void 0);
    TimelineTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-time',
            template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

});
//# sourceMappingURL=3.js.map