webpackJsonp([10],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food__ = __webpack_require__(105);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(navCtrl, loading, navParams, http, auth) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.rows = [];
        this.preload = this.loading.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
        this.auth.online();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CategoryPage');
        this.getCategory();
    };
    CategoryPage.prototype.getCategory = function () {
        var _this = this;
        this.preload.present();
        this.http.get(this.auth.api() + '/category?token=' + this.auth.token()).subscribe(function (data) {
            console.log(data);
            _this.img_path = data['img_path'];
            _this.rows = data['data'].data;
            console.log('data rows ', _this.rows);
            _this.preload.dismiss();
        }, function (err) {
            _this.preload.dismiss();
        });
    };
    CategoryPage.prototype.goFood = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_food__["a" /* FoodPage */], { category_id: id });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\category\category.html"*/'<!--\n\n  Generated template for the CategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>FOOD CATEGORY</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let row of rows" (click)="goFood( row.id )">\n\n    <img src="{{ img_path + row.image }}" />\n\n    <div class="card-title">{{ row.name }}</div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(26);
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
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodPage = (function () {
    function FoodPage(navCtrl, navParams, http, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.foods = [];
        this.category_id = this.navParams.get('category_id');
        this.auth.online();
    }
    FoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodPage');
        this.getFood();
    };
    FoodPage.prototype.getFood = function () {
        var _this = this;
        return this.http.get(this.auth.api() + '/foods/' + this.category_id + '?token=' + this.auth.token()).subscribe(function (data) {
            _this.foods = data['data'];
            _this.food_path = data['food_path'];
            console.log('food ', _this.foods, data, '| FOOD PATH ', _this.food_path);
        });
    };
    FoodPage.prototype.img = function (img_name) {
    };
    FoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\food\food.html"*/'<!--\n\n  Generated template for the FoodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>FOOD DATA</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let row of foods" (click)="goFoodview( row.id )">\n\n    <img src="{{ food_path + row.image }}" />\n\n    <div class="card-title">{{ row.food_name }}</div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\food\food.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], FoodPage);
    return FoodPage;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(104);
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
 * Generated class for the CreateOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateOrderPage = (function () {
    function CreateOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateOrderPage');
    };
    CreateOrderPage.prototype.goDashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    CreateOrderPage.prototype.goCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */]);
    };
    CreateOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-order',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\create-order\create-order.html"*/'<!--\n\n  Generated template for the CreateOrderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>CREATE ORDER</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h4>ORDER INFOMATION</h4>\n\n    <hr/>\n\n    <form>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>JOB NAME</ion-label>\n\n              <ion-input type="text" name="jobname" ></ion-input>\n\n            </ion-item>\n\n            <p class="err"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>JOB ADDRESS</ion-label>\n\n              <ion-textarea type="text" name="jobname" ></ion-textarea>\n\n            </ion-item>\n\n            <p class="err"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label stacked>JOB DATE</ion-label>\n\n              <ion-input type="text" name="jobname" ></ion-input>\n\n            </ion-item>\n\n            <p class="err"></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label stacked>JOB TIME</ion-label>\n\n              <ion-input type="text" name="jobname" ></ion-input>\n\n            </ion-item>\n\n            <p class="err"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>JOB REMARK</ion-label>\n\n              <ion-textarea type="text" name="jobname"></ion-textarea>\n\n            </ion-item>\n\n            <p class="err"></p>\n\n          </ion-col> \n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button color="light" full (click)="goDashboard()">CANCEL</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button color="defult" full (click)="goCategory()">NEXT</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\create-order\create-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreateOrderPage);
    return CreateOrderPage;
}());

//# sourceMappingURL=create-order.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\history\history.html"*/'<!--\n\n  Generated template for the HistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>history</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackPage = (function () {
    function TrackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackPage');
    };
    TrackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-track',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\track\track.html"*/'<!--\n\n  Generated template for the TrackPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>track</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\track\track.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TrackPage);
    return TrackPage;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the ForgotPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="img-forgot" text-center>\n\n    <img src="assets/imgs/reset-pass.png" />\n\n  </div>\n\n  <p>Please enter your registered email address</p>\n\n  <p><strong>Email</strong></p>\n\n  <ion-list>\n\n      <ion-item>  \n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n  </ion-list>\n\n  <div class="btn-send">\n\n      <button ion-button full (click)="postForgot()"> Send Password</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\forgot\forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_forgot__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(43);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, facebook, auth, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.auth = auth;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.api = this.auth.api();
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToForgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.http.post(this.api + '/auth0/login', this.user).subscribe(function (response) {
            var code = response['code'];
            if (code == 200) {
                localStorage.setItem('token', response['auth']);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Username or Password not match. Please try again',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            console.log('response ', response);
        }, function (err) {
            console.log('err ', err);
        });
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\login\login.html"*/'<ion-list padding>\n\n  <div class="app-logo">\n\n      <img src="assets/imgs/app-logo.png"/>\n\n  </div>\n\n  <ion-item>\n\n    <ion-input type="text" [(ngModel)]="user.username" placeholder="Username"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-input type="password" [(ngModel)]="user.password" placeholder="Password"></ion-input>\n\n  </ion-item>\n\n  <p text-right><span class="forgot" (click)="goToForgot()">ลืมรหัสผ่าน?</span></p>\n\n  <p>\n\n    <button ion-button full color="secondary" (click)="doLogin()">Login</button>\n\n  </p>\n\n  <div class="text-line"><span>OR</span></div>\n\n  <div class="btn-social">\n\n      <p>\n\n        <button ion-button full color="default" (click)="loginFacebook()"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n\n      </p>\n\n      <p>\n\n        <button ion-button full color="danger" (click)="loginGoogle()"><ion-icon name="logo-googleplus"></ion-icon> Login with Google</button>\n\n      </p>\n\n  </div>\n\n  <!--\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6 class="padding-left-0">\n\n        <button ion-button full color="light" (click)="goToForgot()">Forgot Password</button>\n\n      </ion-col>\n\n      <ion-col col-6 class="padding-right-0">\n\n        <button ion-button full color="light" (click)="goToRegister()"> Register</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  -->\n\n  <p text-center>New here? <span class="new-member" (click)="goToRegister()">Register</span></p>\n\n  <p>User data is : {{ userData }}</p>\n\n</ion-list>\n\n\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, loading, auth, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.auth = auth;
        this.http = http;
        this.reg = {};
        this.errs = {
            name: '',
            email: '',
            username: '',
            password: '',
            confirm_password: ''
        };
        this.preload = this.loading.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.postRegister = function () {
        var _this = this;
        this.preload.present();
        console.log('param : ', this.reg, ' reg ', this.reg);
        this.auth.register(this.reg).subscribe(function (response) {
            _this.preload.dismiss();
        }, function (err) {
            console.log('error is ', JSON.stringify(err), ':', err);
            if (err.status == 422) {
                var valid = err.error;
                console.log('err email ', valid);
                if (valid.name)
                    _this.errs.name = valid.name[0];
                if (valid.username !== undefined)
                    _this.errs.username = valid.username[0];
                if (valid.email)
                    _this.errs.email = valid.email[0];
                if (valid.password)
                    _this.errs.password = valid.password[0];
                console.log('message error = ', _this.errs);
                _this.preload.dismiss();
                return false;
            }
        });
    };
    RegisterPage.prototype.checkuser = function (input) {
        var _this = this;
        this.preload.present();
        this.auth.checkUser([{ type: input, text: this.reg.username }]).subscribe(function (response) {
            console.log('response is ', response);
            _this.preload.dismiss();
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <form (ngSubmit)="postRegister()">\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Name</ion-label>\n\n            <ion-input type="text" name="name" [ngClass]="{\'err-focus\':errs.name !==\'\'}" [(ngModel)]="reg.name"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.name !== \'\'" class="err">{{ errs.name }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Username</ion-label>\n\n            <ion-input type="text" name="username" [ngClass]="{\'err-focus\':errs.username !==\'\'}"[(ngModel)]="reg.username"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.username !== \'\'" class="err">{{ errs.username }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>E-mail</ion-label>\n\n            <ion-input type="text" name="email" [ngClass]="{\'err-focus\':errs.email !==\'\'}"[(ngModel)]="reg.email"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.email !== \'\'" class="err">{{ errs.email }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" name="password" [ngClass]="{\'err-focus\':errs.password !==\'\'}"[(ngModel)]="reg.password"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.password !== \'\'" class="err">{{ errs.password }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Confirm Password</ion-label>\n\n            <ion-input type="password" name="confirm_password" [ngClass]="{\'err-focus\':errs.confirm_password !==\'\'}" [(ngModel)]="reg.confirm_password"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.confirm_password !== \'\'" class="err">{{ errs.confirm_password }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Tel</ion-label>\n\n            <ion-input type="text" name="tel" [(ngModel)]="reg.tel"></ion-input>\n\n            <span class="err-confirm"></span>\n\n        </ion-item>\n\n        <div class="btn-reg">\n\n            <button ion-button full type="submit"> Register</button>\n\n        </div>\n\n        </form>\n\n    </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RegisterPage);
    return RegisterPage;
}());

/*

{
    "headers": { "normalizedNames": { }, "lazyUpdate": null },
    "status": 422,
    "statusText": "Unprocessable Entity",
    "url": "http://localhost/2017/T-API/api/auth0/register",
    "ok": false,
    "name": "HttpErrorResponse",
    "message": "Http failure response for http://localhost/2017/T-API/api/auth0/register: 422 Unprocessable Entity",
    "error": { "email": ["กรุณาทำการป้อน E-mail"], "username": ["กรุณาทำการป้อน Username"], "name": ["กรุณาป้อนชื่อ"], "password": ["กรุณาป้อนรหัสผ่าน"] } }
    */ 
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		295,
		9
	],
	"../pages/create-order/create-order.module": [
		296,
		8
	],
	"../pages/dashboard/dashboard.module": [
		297,
		7
	],
	"../pages/food/food.module": [
		298,
		6
	],
	"../pages/forgot/forgot.module": [
		299,
		5
	],
	"../pages/history/history.module": [
		300,
		4
	],
	"../pages/login/login.module": [
		301,
		3
	],
	"../pages/profile/profile.module": [
		302,
		2
	],
	"../pages/register/register.module": [
		303,
		0
	],
	"../pages/track/track.module": [
		304,
		1
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_forgot_forgot__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_create_order_create_order__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_history_history__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_track_track__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_category_category__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_food_food__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// ionic native //
















// IMPORT PROVIDER //

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_create_order_create_order__["a" /* CreateOrderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_food_food__["a" /* FoodPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-order/create-order.module#CreateOrderPageModule', name: 'CreateOrderPage', segment: 'create-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food/food.module#FoodPageModule', name: 'FoodPage', segment: 'food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/track/track.module#TrackPageModule', name: 'TrackPage', segment: 'track', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_create_order_create_order__["a" /* CreateOrderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_food_food__["a" /* FoodPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.api = function () {
        return 'http://localhost/2017/T-API/api';
        // return 'http://ex.saiimog.com/set-conference/api';
    };
    AuthProvider.prototype.token = function () {
        return localStorage.getItem('token');
    };
    AuthProvider.prototype.removeToken = function () {
        localStorage.removeItem('token');
    };
    AuthProvider.prototype.checkUser = function (data) {
        return this.http.post(this.api() + '/auth0/checkuser', data);
    };
    AuthProvider.prototype.register = function (data) {
        return this.http.post(this.api() + '/auth0/register', data);
    };
    AuthProvider.prototype.online = function () {
        var _this = this;
        return this.http.get(this.api() + '/user?token=' + this.token()).subscribe(function (data) {
            console.log('check online ', data, ' code is ', data['code']);
            var code = data['code'];
            if (code != 200) {
                _this.presentAlert(data['msg']);
                _this.removeToken();
            }
        });
    };
    AuthProvider.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Error!!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(43);
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
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.rootPage = this.startPage();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.startPage();
        });
    }
    MyApp.prototype.startPage = function () {
        var token = localStorage.getItem('token');
        if (token) {
            return __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order_create_order__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_history_history__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__track_track__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(26);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.auth.online();
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_order_create_order__["a" /* CreateOrderPage */]);
    };
    DashboardPage.prototype.goHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_history_history__["a" /* HistoryPage */]);
    };
    DashboardPage.prototype.goTrack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__track_track__["a" /* TrackPage */]);
    };
    DashboardPage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>DASHBOARD</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h5>DASHBOARD ORDER</h5>\n\n  <hr/>\n\n  <ion-grid>\n\n    <ion-row class="food-panel">\n\n      <ion-col col-6 class="food-create" (click)="goCreate()">\n\n        <img src="assets/imgs/food-serb-2.svg" /> \n\n        <span>CREATE ORDER</span>\n\n      </ion-col>\n\n      <ion-col col-6 class="food-tracking" (click)="goTrack()" >\n\n        <img src="assets/imgs/food-delivery.svg" />\n\n        <span>ORDER TRACKING</span>\n\n      </ion-col> \n\n      <ion-col col-6 class="food-history" (click)="goHistory()">\n\n        <img src="assets/imgs/food-history.svg" />\n\n        <span>ORDER HISTORY</span>\n\n      </ion-col>\n\n      <ion-col col-6 class="food-profile" (click)="goProfile()">\n\n        <img src="assets/imgs/food-profile.svg" />\n\n        <span>PROFILE</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map