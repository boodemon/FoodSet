webpackJsonp([1],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
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
 * Generated class for the ViewOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewOrderPage = (function () {
    function ViewOrderPage(navCtrl, navParams, auth, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.http = http;
        this.order_id = this.navParams.get('order_id');
        this.head = [];
        this.details = [];
        this.auth.online();
    }
    ViewOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewOrderPage');
        this.getOrder();
    };
    ViewOrderPage.prototype.getOrder = function () {
        var _this = this;
        var param = '?token=' + this.auth.token();
        this.http.get(this.auth.api() + '/order/' + this.order_id + param).subscribe(function (response) {
            if (response['code'] == 200) {
                _this.head = response['head'];
                _this.details = response['details'];
            }
        }, function (error) {
            alert('Error!!\nCannot connect order' + JSON.stringify(error));
        });
    };
    ViewOrderPage.prototype.doClose = function () {
        this.navCtrl.pop();
    };
    ViewOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-order',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/view-order/view-order.html"*/'<!--\n  Generated template for the ViewOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ORDER PREVIEW</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h5>ORDER NO #{{ head.code }}</h5>\n  <hr/>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <strong>JOB NAME : </strong>\n      </ion-col>\n      <ion-col col-8>{{ head.jobname }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <strong>ADDRESS : </strong>\n      </ion-col>\n      <ion-col col-8>{{ head.address }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <strong>REMARK : </strong>\n      </ion-col>\n      <ion-col col-8>{{ head.remark }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-2>\n        <strong>DATE : </strong>\n      </ion-col>\n      <ion-col col-4>{{ head.jobdate }}</ion-col>\n      <ion-col col-2 text-right>\n        <strong>TIME : </strong>\n      </ion-col>\n      <ion-col col-4>{{ head.jobtime }}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class="tb-head">\n      <ion-col col-2>No.</ion-col>\n      <ion-col col-3>Food</ion-col>\n      <ion-col col-2>Price</ion-col>\n      <ion-col col-2>Qty</ion-col>\n      <ion-col col-3>Amount</ion-col>\n    </ion-row>\n    <ion-row *ngFor="let fd of details; let i = index;" class="tb-detail">\n      <ion-col col-2>{{ i+1 }}</ion-col>\n      <ion-col col-3>{{ fd.food_name }}\n        <br>\n        <small>{{ fd.restourant }}</small>\n        <small *ngIf="fd.remark!=\'\'">\n          <br>*{{ fd.remark }}</small>\n      </ion-col>\n      <ion-col col-2 text-right>{{ fd.per_price }}</ion-col>\n      <ion-col col-2 text-center>{{ fd.qty }}</ion-col>\n        \n      <ion-col col-3 text-right>{{ fd.per_price * fd.qty }}</ion-col>\n    </ion-row>\n    <ion-row class="tb-total">\n      <ion-col col-7 text-right>\n        <strong>Total : </strong>\n      </ion-col>\n      <ion-col col-2 text-center>{{ head.qty }}</ion-col>\n      <ion-col col-3 text-right>{{ head.price }}</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12>\n          <button ion-button color="light" full (click)="doClose()">Close</button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/view-order/view-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ViewOrderPage);
    return ViewOrderPage;
}());

//# sourceMappingURL=view-order.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
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
    function AuthProvider(http, alertCtrl, googlePlus, facebook) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.online_status = '';
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.api = function () {
        //return 'http://localhost/2017/T-API/api';
        return 'http://ex.saiimog.com/set-conference/api';
    };
    AuthProvider.prototype.imgs = function () {
        return 'http://ex.saiimog.com/set-conference/public/images';
    };
    AuthProvider.prototype.token = function () {
        return localStorage.getItem('token');
    };
    AuthProvider.prototype.user = function () {
        return localStorage.getItem('user');
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
        var user = this.user();
        var token = this.token();
        if (user === undefined || user === null || token === undefined || token === null) {
            this.logout();
            location.reload();
        }
        this.http.get(this.api() + '/user?token=' + token).subscribe(function (res) {
            var code = res['code'];
            if (code != 200) {
                alert(res['msg']);
                _this.logout();
                location.reload();
            }
        }, function (err) {
            _this.online_status = 'offline';
        });
        //console.log('status ', this.online_status );
        return this.online_status;
    };
    AuthProvider.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Error!!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    AuthProvider.prototype.logout = function () {
        this.googlePlus.logout();
        this.facebook.logout();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        //location.reload();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		169
	],
	"../pages/category/category.module": [
		173
	],
	"../pages/checkout/checkout.module": [
		182
	],
	"../pages/create-order/create-order.module": [
		183
	],
	"../pages/dashboard/dashboard.module": [
		184
	],
	"../pages/food-view/food-view.module": [
		185
	],
	"../pages/food/food.module": [
		186
	],
	"../pages/forgot/forgot.module": [
		187
	],
	"../pages/history/history.module": [
		188
	],
	"../pages/login/login.module": [
		189
	],
	"../pages/payment/payment.module": [
		190
	],
	"../pages/profile/profile.module": [
		191
	],
	"../pages/register/register.module": [
		192
	],
	"../pages/restourant/restourant.module": [
		193
	],
	"../pages/track/track.module": [
		194
	],
	"../pages/view-order/view-order.module": [
		323,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, http, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.content = [];
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
        this.getContent();
    };
    AboutPage.prototype.getContent = function () {
        var _this = this;
        this.http.get(this.auth.api() + '/aboutus?token=' + this.auth.token()).subscribe(function (res) {
            if (res['code'] == 200) {
                _this.content = res['data'];
            }
        }, function (error) {
            alert('Error!!\nCannot connect about us page ' + JSON.stringify(error));
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ABOUT US</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h5>{{ content.subject }}</h5>\n  <hr>\n  <p [innerHTML]="content.detail"></p>\n  <hr>\n  <p>APP VERSION 0.0.3</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryPageModule = (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__track_track__ = __webpack_require__(55);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, http, auth, camera, loadingCtrl, toastCtrl, form) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.form = form;
        this.banks = [];
        this.order = [];
        this.pay = [];
        this.isPreview = false;
        this.param = '?token=' + this.auth.token();
        this.loading = this.loadingCtrl.create({
            content: 'Loading ...',
            dismissOnPageChange: true,
        });
        this.auth.online();
        this.createForm();
    }
    PaymentPage.prototype.createForm = function () {
        this.frmConfirm = this.form.group({
            'id': [''],
            'ref_id': [this.navParams.get('order_id')],
            'bank': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'subject': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'message': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'attach': [null],
            'token': [this.auth.token()]
        });
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        this.getBank();
        this.getOrder();
    };
    PaymentPage.prototype.getBank = function () {
        var _this = this;
        this.http.get(this.auth.api() + '/bank' + this.param).subscribe(function (res) {
            var code = res['code'];
            if (code == 200) {
                _this.banks = res['data'];
            }
        }, function (error) {
            alert('Cannot connect table ' + JSON.stringify(error));
        });
    };
    PaymentPage.prototype.getOrder = function () {
        var _this = this;
        this.loading.present();
        this.http.get(this.auth.api() + '/order/' + this.navParams.get('order_id') + this.param).subscribe(function (res) {
            var code = res['code'];
            if (code == 200) {
                _this.order = res['head'];
                _this.frmConfirm.get('subject').setValue('แจ้งยืนยันการชำระเงิน Order no.#' + _this.order.code);
                _this.loading.dismissAll();
            }
            else {
                _this.loading.dismissAll();
            }
        }, function (error) {
            alert('Cannot connect table ' + JSON.stringify(error));
            _this.loading.dismissAll();
        });
    };
    PaymentPage.prototype.getAttach = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetWidth: 800,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = 'data:image/jpeg;base64,' + imageData;
            _this.frmConfirm.get('attach').setValue(_this.imageURI);
            _this.isPreview = true;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
            _this.isPreview = false;
        });
    };
    PaymentPage.prototype.doSubmit = function () {
        var _this = this;
        this.loading.present();
        this.http.post(this.auth.api() + '/order-confirmation', this.frmConfirm.value).subscribe(function (result) {
            //this.res = JSON.stringify(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__track_track__["a" /* TrackPage */]);
            _this.loading.dismissAll();
        }, function (error) {
            alert('Error!!\nCannot Comfirm payment. Please try again' + JSON.stringify(error));
        });
    };
    PaymentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PaymentPage.prototype.doCancel = function () {
        this.navCtrl.pop();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAYMENT</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <h5>CONFIRMATION ORDER #{{ order.code }}</h5>\n    <hr/>\n\n  <form (ngSubmit)="doSubmit()" [formGroup]="frmConfirm">\n      <ion-list radio-group formControlName="bank">\n            <ion-item *ngFor="let b of banks; let i=index;">\n              <ion-label>\n                <p>ชื่อบัญชี <strong>{{ b.bank_account }}</strong></p>\n                <p> เลขที่ <strong>{{ b.bank_id }}</strong> บัญชี : <strong> {{ b.bank_type }} </strong></p>\n\n                <p> ธนาคาร : <strong>{{ b.bank_name }}</strong></p>\n                <p>สาขา : <strong>{{ b.bank_branch }}</strong></p>\n\n              </ion-label>\n              <ion-radio color="default" item-left value="{{ b.id }}"></ion-radio>\n              <hr/>\n            </ion-item>\n            <div *ngIf="frmConfirm.controls[\'bank\'].invalid && (frmConfirm.controls[\'bank\'].dirty || frmConfirm.controls[\'bank\'].touched)"\n              class="alert alert-danger">\n              <div *ngIf="frmConfirm.controls[\'bank\'].errors.required">\n                *Please checked bank.\n              </div>\n            </div>\n      </ion-list>\n\n      <ion-list>\n          <ion-item>          \n              <ion-label stacked>Subject</ion-label>\n              <ion-input type="text" formControlName="subject" ></ion-input>\n          </ion-item>\n          <div *ngIf="frmConfirm.controls[\'subject\'].invalid && (frmConfirm.controls[\'subject\'].dirty || frmConfirm.controls[\'subject\'].touched)"\n            class="alert alert-danger">\n            <div *ngIf="frmConfirm.controls[\'subject\'].errors.required">\n              *Please enter Subject.\n            </div>\n          </div>\n          <ion-item>\n              <ion-label stacked>Message</ion-label>\n              <ion-textarea type="text" formControlName="message" ></ion-textarea>\n          </ion-item>\n          <div *ngIf="frmConfirm.controls[\'message\'].invalid && (frmConfirm.controls[\'message\'].dirty || frmConfirm.controls[\'message\'].touched)"\n            class="alert alert-danger">\n            <div *ngIf="frmConfirm.controls[\'message\'].errors.required">\n              *Please enter Message.\n            </div>\n          </div>\n          <ion-item>\n              <p><img src="{{imageURI}}" *ngIf="isPreview" /></p>\n              <p>\n                  <button ion-button full color="default" type="button" (click)="getAttach()">ATTACH FILE</button>\n              </p>\n          </ion-item>\n      </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button color="light" type="button" full (click)="doCancel()">CANCEL</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button color="defult" type="submit" full  [disabled]="!frmConfirm.valid" >SUBMIT</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </form>\n  <p>{{ res }}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_order_view_order__ = __webpack_require__(114);
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
    function HistoryPage(navCtrl, navParams, form, auth, loader, http, pop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = form;
        this.auth = auth;
        this.loader = loader;
        this.http = http;
        this.pop = pop;
        this.orders = [];
        this.loading = this.loader.create({
            content: 'Loading ...',
            dismissOnPageChange: true,
        });
        this.auth.online();
        this.frmFilter = this.form.group({
            'onStart': [this.defaultDate()],
            'onEnd': [this.defaultDate()],
            'token': ['']
        });
    }
    HistoryPage.prototype.defaultDate = function () {
        var deal = new Date();
        var setDate = deal.setDate(deal.getDate());
        var d = new Date(setDate), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    HistoryPage.prototype.currentDate = function () {
        var deal = new Date();
        return deal.setDate(deal.getDate());
    };
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
        this.getTrack();
    };
    HistoryPage.prototype.getTrack = function () {
        var _this = this;
        this.loading.present();
        var param = '?token=' + this.auth.token() + '&status=finish';
        this.http.get(this.auth.api() + '/order' + param).subscribe(function (res) {
            var code = res['code'];
            if (code == 200) {
                _this.orders = res['data'];
                _this.loading.dismissAll();
            }
            else {
                _this.loading.dismissAll();
            }
        }, function (error) {
            alert('Error!!\nCannot load order tracking' + JSON.stringify(error));
            _this.loading.dismissAll();
        });
    };
    HistoryPage.prototype.doFilter = function () {
        var _this = this;
        this.loading.present();
        var param = '?token=' + this.auth.token()
            + '&onStart=' + this.frmFilter.get('onStart').value
            + '&onEnd=' + this.frmFilter.get('onEnd').value;
        this.http.get(this.auth.api() + '/order' + param).subscribe(function (res) {
            var code = res['code'];
            console.log('tracking code = ' + code);
            console.log('tracking data = ', res['data']);
            if (code == 200) {
                _this.orders = res['data'];
                _this.loading.dismissAll();
            }
            else {
                _this.loading.dismissAll();
            }
        }, function (error) {
            alert('Error!!\nCannot load order tracking' + JSON.stringify(error));
            _this.loading.dismissAll();
        });
    };
    HistoryPage.prototype.viewOrder = function (id) {
        var view = this.pop.create(__WEBPACK_IMPORTED_MODULE_5__view_order_view_order__["a" /* ViewOrderPage */], { order_id: id });
        view.present();
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ORDER HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]="frmFilter" (ngSubmit)="doFilter()">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label stacked>START</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" formControlName="onStart"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label stacked>END</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" formControlName="onEnd"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="dark" full type="submit" [disabled]="!frmFilter.valid">FILTER</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <hr/>\n  <ion-card *ngFor="let order of orders; let i=index;" (click)="viewOrder(order.id)">\n    <ion-card-header>\n      <ion-icon name="ios-cart-outline"></ion-icon> Order No. #{{ order.code }}\n      <br/>\n      <small><ion-icon name="ios-calendar-outline"></ion-icon> {{ order.created_at | date:\'dd MMM yyyy HH:mm\' }}</small>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3>\n              <strong>JOB : </strong>\n            </ion-col>\n            <ion-col col-9>\n               {{ order.jobname }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <strong>ADDRESS : </strong>\n            </ion-col>\n            <ion-col col-8>{{ order.address }}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n                  <strong>PRICE : </strong> {{ order.price }} .-\n            </ion-col>\n            <ion-col col-6>\n                  <strong>STATUS : </strong> <span class="status">{{ order.status }}</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
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
    function ProfilePage(navCtrl, navParams, auth, http, frm, alertCtrl, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.http = http;
        this.frm = frm;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.err = {
            'password': '',
            'password_confirmation': ''
        };
        this.loading = this.loader.create({
            content: 'Loading ...',
            dismissOnPageChange: true
        });
        this.auth.online();
        this.createForm();
    }
    ProfilePage.prototype.createForm = function () {
        this.gpass = this.frm.group({
            'password': [''],
            'password_confirmation': ['']
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.doChange = function () {
        var _this = this;
        this.loading.present();
        var password = this.gpass.get('password').value;
        var password_confirmation = this.gpass.get('password_confirmation').value;
        var alert = this.alertCtrl.create({
            title: ' ERROR!!',
            message: 'Password not match. Please try gain.',
            buttons: ['OK']
        });
        var confirm = this.alertCtrl.create({
            title: 'CONFIRM CHANGE PASSWORD',
            message: 'Please confirm to change your password ? ',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.loading.dismissAll();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.changePassword(password);
                    }
                }
            ]
        });
        if (password == password_confirmation) {
            confirm.present();
        }
        else {
            alert.present();
        }
    };
    ProfilePage.prototype.changePassword = function (password) {
        var _this = this;
        var param = {
            'password': password,
            'token': this.auth.token()
        };
        var success = this.alertCtrl.create({
            title: 'SECCESS FULL',
            message: 'Change your password success full',
            buttons: ['OK']
        });
        this.http.post(this.auth.api() + '/user/change-password', param).subscribe(function (response) {
            if (response['code'] == 200) {
                localStorage.setItem('user', JSON.stringify(response['data']));
                localStorage.setItem('token', JSON.stringify(response['auth']));
                _this.gpass.get('password').setValue('');
                _this.gpass.get('password_confirmation').setValue('');
                success.present();
            }
            _this.loading.dismissAll();
        }, function (error) {
            alert('Error!!\nCannot change your password ' + JSON.stringify(error));
            _this.loading.dismissAll();
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PROFILE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n      <ion-row>\n          <ion-col><strong>Name : </strong> {{ user.name }}</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col><strong>Username : </strong> {{ user.username }}</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col><strong>E-mail : </strong> {{ user.email }}</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col><strong>Tel : </strong> {{ user.tel }}</ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <h4>Change Password</h4>\n  <hr>\n  <form (ngSubmit)="doChange()" [formGroup]="gpass">\n      <ion-list>   \n        <ion-item>\n          <ion-label color="dark" stacked>Password</ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label color="dark" stacked>Confirm Password</ion-label>\n          <ion-input type="password"  formControlName="password_confirmation" ></ion-input>\n        </ion-item>\n\n          <div class="btn-reg">\n            <button color="dark" ion-button full type="submit"> Change Password</button>\n          </div>\n      </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
            selector: 'page-forgot',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/forgot/forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="img-forgot" text-center>\n    <img src="assets/imgs/reset-pass.png" />\n  </div>\n  <p>Please enter your registered email address</p>\n  <p><strong>Email</strong></p>\n  <ion-list>\n      <ion-item>  \n          <ion-input type="text"></ion-input>\n        </ion-item>\n  </ion-list>\n  <div class="btn-send">\n      <button ion-button full (click)="postForgot()"> Send Password</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(36);
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
    function RegisterPage(navCtrl, navParams, loading, auth, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.auth = auth;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.reg = {};
        this.errs = {
            name: '',
            email: '',
            username: '',
            password: '',
            password_confirmation: ''
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
        console.log('param : ', this.reg, ' reg ', this.reg);
        this.auth.register(this.reg).subscribe(function (response) {
            console.log('result : ', response);
            var code = response['code'];
            if (code == 200) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Success ful',
                    subTitle: 'ทำการลงทะเบียนเรียบร้อยแล้ว',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.login(_this.reg.username, _this.reg.password);
            }
        }, function (err) {
            console.log('error is ', JSON.stringify(err), ':', err);
            if (err.status == 422) {
                var valid = err.error;
                console.log('err email ', valid);
                if (valid.name) {
                    _this.errs.name = valid.name[0];
                }
                else {
                    _this.errs.name = '';
                }
                if (valid.username !== undefined) {
                    _this.errs.username = valid.username[0];
                }
                else {
                    _this.errs.username = '';
                }
                if (valid.email) {
                    _this.errs.email = valid.email[0];
                }
                else {
                    _this.errs.email = '';
                }
                if (valid.password) {
                    _this.errs.password = valid.password[0];
                }
                else {
                    _this.errs.password = '';
                }
                console.log('message error = ', _this.errs);
                return false;
            }
        });
    };
    RegisterPage.prototype.checkuser = function (input) {
        this.preload.present();
        this.auth.checkUser([{ type: input, text: this.reg.username }]).subscribe(function (response) {
            console.log('response is ', response);
        });
    };
    RegisterPage.prototype.login = function (username, password) {
        var _this = this;
        var result = false;
        this.http.post(this.auth.api() + '/auth0/login', { username: username, password: password }).subscribe(function (response) {
            var code = response['code'];
            if (code == 200) {
                localStorage.setItem('token', response['auth']);
                result = true;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            console.log('response ', response);
        }, function (err) {
            console.log('err ', err);
        });
        if (result)
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <form (ngSubmit)="postRegister()">\n\n        <ion-item>\n            <ion-label stacked>Name</ion-label>\n            <ion-input type="text" name="name" [ngClass]="{\'err-focus\':errs.name !==\'\'}" [(ngModel)]="reg.name"></ion-input>\n        </ion-item>\n        <p *ngIf="errs.name !== \'\'" class="err">{{ errs.name }}</p>\n        <ion-item>\n            <ion-label stacked>Username</ion-label>\n            <ion-input type="text" name="username" [ngClass]="{\'err-focus\':errs.username !==\'\'}"[(ngModel)]="reg.username"></ion-input>\n        </ion-item>\n        <p *ngIf="errs.username !== \'\'" class="err">{{ errs.username }}</p>\n        <ion-item>\n            <ion-label stacked>E-mail</ion-label>\n            <ion-input type="text" name="email" [ngClass]="{\'err-focus\':errs.email !==\'\'}"[(ngModel)]="reg.email"></ion-input>\n        </ion-item>\n        <p *ngIf="errs.email !== \'\'" class="err">{{ errs.email }}</p>\n        <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input type="password" name="password" [ngClass]="{\'err-focus\':errs.password !==\'\'}" [(ngModel)]="reg.password"></ion-input>\n        </ion-item>\n        <p *ngIf="errs.password !== \'\'" class="err">{{ errs.password }}</p>\n        <ion-item>\n            <ion-label stacked>Confirm Password</ion-label>\n            <ion-input type="password" name="password_confirmation" [ngClass]="{\'err-focus\':errs.password_confirmation !==\'\'}" [(ngModel)]="reg.password_confirmation"></ion-input>\n        </ion-item>\n        <p *ngIf="errs.password_confirmation !== \'\'" class="err">{{ errs.password_confirmation }}</p>\n        <ion-item>\n            <ion-label stacked>Tel</ion-label>\n            <ion-input type="text" name="tel" [(ngModel)]="reg.tel"></ion-input>\n            <span class="err-confirm"></span>\n        </ion-item>\n        <div class="btn-reg">\n            <button ion-button full type="submit"> Register</button>\n        </div>\n        </form>\n    </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestourantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_view_food_view__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_checkout__ = __webpack_require__(35);
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
 * Generated class for the RestourantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestourantPage = (function () {
    function RestourantPage(navCtrl, navParams, http, auth, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.loader = loader;
        this.foods = [];
        this.restourant = [];
        this.restourant_id = this.navParams.get('restourant_id');
        this.loading = this.loader.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
        this.auth.online();
    }
    RestourantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodPage');
        this.getFood();
    };
    RestourantPage.prototype.getFood = function () {
        var _this = this;
        this.loading.present();
        return this.http.get(this.auth.api() + '/restourant-foods/' + this.restourant_id + '?token=' + this.auth.token()).subscribe(function (data) {
            _this.foods = data['data'];
            _this.restourant = data['restourant'];
            _this.food_path = data['food_path'];
            console.log('food ', _this.foods, data, '| FOOD PATH ', _this.food_path);
            _this.loading.dismissAll();
        });
    };
    RestourantPage.prototype.goFoodview = function (id) {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__food_view_food_view__["a" /* FoodViewPage */], { id: id });
    };
    RestourantPage.prototype.goCreate = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
    };
    RestourantPage.prototype.goCart = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__checkout_checkout__["a" /* CheckoutPage */]);
    };
    RestourantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restourant',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/restourant/restourant.html"*/'<!--\n  Generated template for the RestourantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>RESTOURANT FOOD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n      <ion-row class="page-title">\n        <ion-col>\n          <h2>{{ restourant.restourant }}</h2>\n          <hr/>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6  class="food-data" *ngFor="let row of foods" (click)="goFoodview( row.id )">\n            <ion-card>\n                <img src="{{ row.food_image }}" />\n                <div class="card-title">{{ row.food_name }}</div>\n            </ion-card>  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button color="light" full (click)="goCreate()">Back</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button color="defult" full (click)="goCart()">CART</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/restourant/restourant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RestourantPage);
    return RestourantPage;
}());

//# sourceMappingURL=restourant.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPageModule", function() { return CreateOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateOrderPageModule = (function () {
    function CreateOrderPageModule() {
    }
    CreateOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_order__["a" /* CreateOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_order__["a" /* CreateOrderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
            ],
        })
    ], CreateOrderPageModule);
    return CreateOrderPageModule;
}());

//# sourceMappingURL=create-order.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodViewPageModule", function() { return FoodViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_view__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodViewPageModule = (function () {
    function FoodViewPageModule() {
    }
    FoodViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_view__["a" /* FoodViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_view__["a" /* FoodViewPage */]),
            ],
        })
    ], FoodViewPageModule);
    return FoodViewPageModule;
}());

//# sourceMappingURL=food-view.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodPageModule", function() { return FoodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodPageModule = (function () {
    function FoodPageModule() {
    }
    FoodPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food__["a" /* FoodPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food__["a" /* FoodPage */]),
            ],
        })
    ], FoodPageModule);
    return FoodPageModule;
}());

//# sourceMappingURL=food.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPageModule = (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */]),
            ],
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestourantPageModule", function() { return RestourantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restourant__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RestourantPageModule = (function () {
    function RestourantPageModule() {
    }
    RestourantPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restourant__["a" /* RestourantPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restourant__["a" /* RestourantPage */]),
            ],
        })
    ], RestourantPageModule);
    return RestourantPageModule;
}());

//# sourceMappingURL=restourant.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPageModule", function() { return TrackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrackPageModule = (function () {
    function TrackPageModule() {
    }
    TrackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__track__["a" /* TrackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__track__["a" /* TrackPage */]),
            ],
        })
    ], TrackPageModule);
    return TrackPageModule;
}());

//# sourceMappingURL=track.module.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgot_forgot_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_create_order_create_order_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_history_history_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_track_track_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_category_category_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_food_food_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_food_view_food_view_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_checkout_checkout_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_about_about_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_restourant_restourant_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_query_query__ = __webpack_require__(47);
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
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-order/create-order.module#CreateOrderPageModule', name: 'CreateOrderPage', segment: 'create-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-view/food-view.module#FoodViewPageModule', name: 'FoodViewPage', segment: 'food-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food/food.module#FoodPageModule', name: 'FoodPage', segment: 'food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restourant/restourant.module#RestourantPageModule', name: 'RestourantPage', segment: 'restourant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/track/track.module#TrackPageModule', name: 'TrackPage', segment: 'track', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-order/view-order.module#ViewOrderPageModule', name: 'ViewOrderPage', segment: 'view-order', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_category_category_module__["CategoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_order_create_order_module__["CreateOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_food_food_module__["FoodPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_forgot_module__["ForgotPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_history_history_module__["HistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_track_track_module__["TrackPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_food_food_module__["FoodPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_food_view_food_view_module__["FoodViewPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_checkout_checkout_module__["CheckoutPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment_module__["PaymentPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_restourant_restourant_module__["RestourantPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_query_query__["a" /* QueryProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_query_query__ = __webpack_require__(47);
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
    function MyApp(platform, statusBar, splashScreen, auth, qr) {
        var _this = this;
        this.rootPage = this.startPage();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (platform.is('cordova')) {
                qr.createHead();
                qr.createDetail();
            }
            statusBar.styleDefault();
            splashScreen.hide();
            _this.startPage();
        });
    }
    MyApp.prototype.startPage = function () {
        var token = localStorage.getItem('token');
        if (token) {
            return __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_query_query__["a" /* QueryProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_query_query__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__track_track__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Provider include //




/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams, loader, alertCtrl, auth, qr, platform, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.qr = qr;
        this.platform = platform;
        this.http = http;
        this.head = {};
        this.lists = [];
        this.res = '';
        this.total = 0;
        this.qtys = 0;
        this.qtyModel = [];
        this.amountModel = [];
        this.loading = this.loader.create({
            content: 'Loading ...',
            dismissOnPageChange: true,
        });
        auth.online();
        this.platform.ready().then(function () {
            //this.createTable();
        });
    }
    CheckoutPage_1 = CheckoutPage;
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
        this.header();
        this.detail();
    };
    CheckoutPage.prototype.goContinue = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
    };
    CheckoutPage.prototype.goPayment = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'CHECKOUT CONFIRM',
            message: 'Please confirm to checkout ? ',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.recordOrder();
                    }
                }
            ]
        });
        confirm.present();
    };
    CheckoutPage.prototype.recordOrder = function () {
        var _this = this;
        var param = {
            onHead: this.head,
            onList: this.lists,
            _method: 'POST',
            'token': this.auth.token
        };
        this.loading.present();
        this.http.post(this.auth.api() + '/order', param).subscribe(function (data) {
            _this.loading.dismissAll();
            var alert = _this.alertCtrl.create({
                title: 'SUCCESSFUL',
                subTitle: 'ทำการส่ง Order ไปยังเจ้าหน้าที่เรียบร้อยแล้ว และจะทำการติดต่อกลับเร็ว ๆ นี้',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.clearOrder();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__track_track__["a" /* TrackPage */]);
                        }
                    }
                ]
            });
            alert.present();
        }, function (error) {
            alert('Error\nCannot record order please try again' + JSON.stringify(error));
            _this.loading.dismissAll();
        });
    };
    CheckoutPage.prototype.calTotal = function (rows) {
        var total = 0;
        var qty = 0;
        for (var i = 0; i < rows.length; i++) {
            var item = rows[i];
            var quantity = this.qtyModel[i];
            var amount = parseFloat(item.price) * parseFloat(quantity);
            this.amountModel[i] = amount;
            total += amount;
            qty += item.quantity;
        }
        this.total = total;
        this.qtys = qty;
    };
    CheckoutPage.prototype.calPrice = function (v) {
        var total = 0;
        var qty = 0;
        var rows = this.lists;
        for (var i = 0; i < rows.length; i++) {
            var item = rows[i];
            var quantity = v == i ? this.qtyModel[v] : this.qtyModel[i];
            this.lists[i].quantity = quantity;
            this.qtys += quantity;
            var amount = parseFloat(item.price) * parseFloat(quantity);
            this.amountModel[i] = amount;
            total += amount;
            qty += item.quantity;
        }
        this.total = total;
        this.qtys = qty;
    };
    CheckoutPage.prototype.removeRow = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'DELETE CONFIRM',
            message: 'Please confirm to delete ? ',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.qr.db().then(function (db) {
                            db.executeSql('DELETE FROM orderlist WHERE id=?', [id]).then(function (data) {
                                _this.detail();
                                _this.navCtrl.setRoot(CheckoutPage_1);
                            }, function (error) {
                                alert('Error!!\nCannot delete record this please try again.');
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    // Qeury Header and order list //
    // ==================================================================================//
    CheckoutPage.prototype.createTable = function () {
        this.qr.db().then(function (db) {
            db.executeSql('create table if not exists orders (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, jobName TEXT, jobAddress TEXT, jobDate TEXT, jobTime TEXT, jobRemark TEXT, created_at TEXT, updated_at TEXT)', {})
                .then(function (data) {
                // this.tb = 'Create table orders successful query is ' + JSON.stringify( data );
            }, function (error) {
                alert('Error can not create table orders');
            });
        })
            .catch(function (e) { return alert('Error can not create database ' + JSON.stringify(e)); });
    };
    CheckoutPage.prototype.header = function () {
        var _this = this;
        this.qr.db().then(function (db) {
            db.executeSql("SELECT * FROM orders ORDER BY id DESC", {}).then(function (data) {
                _this.head = data.rows.item(0);
            }, function (error) {
                alert('Error \nCannot read table' + JSON.stringify(error));
            });
        }, function (error) {
            alert('Connot connect database' + JSON.stringify(error));
        });
    };
    CheckoutPage.prototype.detail = function () {
        var _this = this;
        this.res = 'run detail order';
        this.qr.db().then(function (db) {
            db.executeSql("SELECT * FROM orderlist ORDER BY id ASC", {}).then(function (data) {
                var len = data.rows.length;
                if (len > 0) {
                    for (var i = 0; i < len; i++) {
                        var item = data.rows.item(i);
                        _this.lists.push(item);
                        _this.qtyModel[i] = item.quantity;
                    }
                    //alert('quantitn = ' + JSON.stringify( this.qtyModel ) );
                    _this.calTotal(_this.lists);
                }
                //this.lists = data.rows;
                _this.res += ' | orderlist table ' + JSON.stringify(_this.lists);
                //  this.res += ' | orderlist table ' + JSON.stringify( data.rows );
            }, function (error) {
                alert('Cannot read table orderlist ' + JSON.stringify(error));
            });
        }, function (error) {
            alert('Cannot connect database ' + JSON.stringify(error));
        });
    };
    CheckoutPage.prototype.clearOrder = function () {
        this.qr.db().then(function (db) {
            db.executeSql("DELETE FROM orders", {}).then(function (data) { }, function (error) { alert('Cannot read table orderlist ' + JSON.stringify(error)); });
        }, function (error) {
            alert('Cannot connect database ' + JSON.stringify(error));
        });
        this.qr.db().then(function (db) {
            db.executeSql("DELETE FROM orderlist", {}).then(function (data) { }, function (error) { alert('Cannot read table orderlist ' + JSON.stringify(error)); });
        }, function (error) {
            alert('Cannot connect database ' + JSON.stringify(error));
        });
    };
    CheckoutPage = CheckoutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/checkout/checkout.html"*/'<!--\n  Generated template for the CheckoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Order Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h5>ORDER CART</h5>\n  <hr/>\n  <ion-grid>\n    <ion-row>\n        <ion-col col-4><strong>JOB NAME : </strong></ion-col>\n        <ion-col col-8>{{ head.jobName }}</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4><strong>ADDRESS : </strong></ion-col>\n        <ion-col col-8>{{ head.jobAddress }}</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-4><strong>REMARK : </strong></ion-col>\n        <ion-col col-8>{{ head.jobRemark }}</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-2><strong>DATE : </strong></ion-col>\n        <ion-col col-4>{{ head.jobDate | date:\'dd/MM/yyyy\'}}</ion-col>\n        <ion-col col-2 text-right><strong>TIME : </strong></ion-col>\n        <ion-col col-4>{{ head.jobTime }}</ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid>\n    <ion-row class="tb-head">\n      <ion-col col-1>No.</ion-col>\n      <ion-col col-4>Food</ion-col>\n      <ion-col col-2>Price</ion-col>\n      <ion-col col-2>Qty</ion-col>\n      <ion-col col-2>Amount</ion-col>\n      <ion-col col-1>#</ion-col>\n    </ion-row>\n    <ion-row *ngFor="let fd of lists; let i = index;" class="tb-detail">\n      <ion-col col-1>{{ i+1 }}</ion-col>\n      <ion-col col-4>{{ fd.food_name }}<span *ngIf="fd.remark!=\'\'"><br>*{{ fd.remark }}</span></ion-col>\n      <ion-col col-2 text-right>{{ fd.price }}</ion-col>\n      <ion-col col-2 text-center>\n        <ion-item>\n          <ion-input type="number" [(ngModel)]="qtyModel[i]" (change)="calPrice(i)" pattern="[0-9]*"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2 text-right >{{ amountModel[i] }}</ion-col>\n      <ion-col col-1  text-right><ion-icon name="ios-trash-outline" (click)="removeRow(fd.id)" color="red"></ion-icon></ion-col>\n    </ion-row>\n    <ion-row class="tb-total">\n      <ion-col col-7 text-right><strong>Total : </strong></ion-col>\n      <ion-col col-2 text-center>{{ qtys }}</ion-col>\n      <ion-col col-2 text-right>{{ total }}</ion-col>\n      <ion-col col-1  text-right></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button color="light" full (click)="goContinue()">Continue</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button color="defult" full (click)="goPayment()">Checkout</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_query_query__["a" /* QueryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CheckoutPage);
    return CheckoutPage;
    var CheckoutPage_1;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order_create_order__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_history_history__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__track_track__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { CategoryPage } from '../category/category';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, auth, loader, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.loading = this.loader.create({
            content: 'Loading ...',
            dismissOnPageChange: true,
        });
        auth.online();
        //this.loading.present();
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goCreate = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__create_order_create_order__["a" /* CreateOrderPage */]);
    };
    DashboardPage.prototype.goHistory = function () {
        this.loading.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_history_history__["a" /* HistoryPage */]);
    };
    DashboardPage.prototype.goTrack = function () {
        this.loading.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__track_track__["a" /* TrackPage */]);
        //this.navCtrl.push( CategoryPage );
    };
    DashboardPage.prototype.goProfile = function () {
        this.loading.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    DashboardPage.prototype.goAbout = function () {
        this.loading.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
    };
    DashboardPage.prototype.goLogout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Use Logout',
            message: 'Do you want to Logout?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.auth.logout();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DASHBOARD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h5>DASHBOARD ORDER</h5>\n  <hr/>\n  <ion-grid>\n    <ion-row class="food-panel">\n      <ion-col col-6 class="food-create" (click)="goCreate()">\n        <img src="assets/imgs/food-serb-2.svg" /> \n        <span>CREATE ORDER</span>\n      </ion-col>\n      <ion-col col-6 class="food-tracking" (click)="goTrack()" >\n        <img src="assets/imgs/food-delivery.svg" />\n        <span>ORDER TRACKING</span>\n      </ion-col> \n      <ion-col col-6 class="food-history" (click)="goHistory()">\n        <img src="assets/imgs/food-history.svg" />\n        <span>ORDER HISTORY</span>\n      </ion-col>\n      <ion-col col-6 class="food-profile" (click)="goProfile()">\n        <img src="assets/imgs/food-profile.svg" />\n        <span>PROFILE</span>\n      </ion-col>\n      <ion-col col-6 class="food-about" (click)="goAbout()">\n        <img src="assets/imgs/food-about.svg" />\n        <span>ABOUT US</span>\n      </ion-col>\n      <ion-col col-6 class="food-logout" (click)="goLogout()">\n        <img src="assets/imgs/food-logout.svg" />\n        <span>LOGOUT</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_order_create_order__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_checkout__ = __webpack_require__(35);
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
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CategoryPage');
        this.getCategory();
    };
    CategoryPage.prototype.getCategory = function () {
        var _this = this;
        this.preload.present();
        this.http.get(this.auth.api() + '/category?token=' + this.auth.token()).subscribe(function (data) {
            _this.img_path = data['img_path'];
            _this.rows = data['data'];
            console.log('data rows ', _this.rows);
            _this.preload.dismissAll();
        }, function (err) {
        });
    };
    CategoryPage.prototype.goFood = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_food__["a" /* FoodPage */], { category_id: id });
    };
    CategoryPage.prototype.goCreate = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__create_order_create_order__["a" /* CreateOrderPage */]);
    };
    CategoryPage.prototype.goCart = function () {
        this.preload.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__checkout_checkout__["a" /* CheckoutPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FOOD CATEGORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let row of rows" (click)="goFood( row.id )">\n    <img src="{{ row.image }}" />\n    <div class="card-title">{{ row.name }}</div>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button color="light" full (click)="goCreate()">Back</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button color="defult" full (click)="goCart()">CART</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(174);
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
  Generated class for the QueryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QueryProvider = (function () {
    function QueryProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello QueryProvider Provider');
    }
    QueryProvider.prototype.db = function () {
        return this.sqlite.create({
            name: 'setconference.db',
            location: 'default'
        });
    };
    QueryProvider.prototype.createHead = function () {
        this.db().then(function (db) {
            db.executeSql('create table if not exists orders (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, jobName TEXT, jobAddress TEXT, jobDate TEXT, jobTime TEXT, jobRemark TEXT, created_at TEXT, updated_at TEXT)', {})
                .then(function (data) {
                // this.tb = 'Create table orders successful query is ' + JSON.stringify( data );
            }, function (error) {
                alert('Error can not create table orders' + JSON.stringify(error));
            });
        })
            .catch(function (e) { return alert('Error can not create database ' + JSON.stringify(e)); });
    };
    QueryProvider.prototype.createDetail = function () {
        this.db().then(function (db) {
            db.executeSql("CREATE TABLE IF NOT EXISTS orderlist (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, price_id INTEGER, category_id INTEGER, food_id INTEGER, food_name TEXT, restourant_id INTEGER, restourant_name TEXT, quantity INTEGER, price DOUBLE, amount DOUBLE, remark TEXT, created_at TEXT, updated_at TEXT)", {}).then(function (data) {
            }, function (error) {
                alert('Error cannot Create Table ' + JSON.stringify(error));
            });
        }, function (error) {
            alert('Error cannot Create Database ' + JSON.stringify(error));
        });
    };
    QueryProvider.prototype.onCart = function () {
        var item = 0;
        this.db().then(function (db) {
            db.executeSql('SELECT * FROM orderlist', {}).then(function (data) {
                item = data.rows.length;
            }, function (err) {
                item = 0;
            });
        }, function (e) {
            item = 0;
        });
        return item;
    };
    QueryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], QueryProvider);
    return QueryProvider;
}());

//# sourceMappingURL=query.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_payment__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_order_view_order__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(36);
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
    function TrackPage(navCtrl, navParams, http, pop, loader, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.pop = pop;
        this.loader = loader;
        this.auth = auth;
        this.orders = [];
        this.loading = this.loader.create({
            content: 'Loading ...',
            dismissOnPageChange: true,
        });
        this.auth.online();
    }
    TrackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackPage');
        this.getTrack();
    };
    TrackPage.prototype.getTrack = function () {
        var _this = this;
        this.loading.present();
        var param = '?token=' + this.auth.token() + '&status=processing';
        this.http.get(this.auth.api() + '/order' + param).subscribe(function (res) {
            var code = res['code'];
            console.log('tracking code = ' + code);
            console.log('tracking data = ', res['data']);
            if (code == 200) {
                _this.orders = res['data'];
                _this.loading.dismissAll();
            }
            else {
                _this.loading.dismissAll();
            }
        }, function (error) {
            alert('Error!!\nCannot load order tracking' + JSON.stringify(error));
            _this.loading.dismissAll();
        });
    };
    TrackPage.prototype.doConfirmation = function (id) {
        var paid = this.pop.create(__WEBPACK_IMPORTED_MODULE_4__payment_payment__["a" /* PaymentPage */], { order_id: id });
        paid.present();
    };
    TrackPage.prototype.viewOrder = function (id) {
        var view = this.pop.create(__WEBPACK_IMPORTED_MODULE_5__view_order_view_order__["a" /* ViewOrderPage */], { order_id: id });
        view.present();
    };
    TrackPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    TrackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-track',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/track/track.html"*/'<!--\n  Generated template for the TrackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TRACKING ORDER</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goHome()"><ion-icon name="home"></ion-icon></button>\n      \n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let order of orders; let i=index;">\n    <ion-card-header (click)="viewOrder(order.id)">\n        <ion-icon name="ios-cart-outline"></ion-icon> Order No. #{{ order.code }}\n        <p><small>{{ order.created_at | date:\'dd MMM yyyy HH:mm\' }}</small></p>\n        <ion-badge color="dark">{{ order.status }}</ion-badge>\n    </ion-card-header>\n    <ion-card-content *ngIf="order.tracking.length > 0">\n      <h4>TRACKING STATUS</h4>\n      <hr>\n      <ion-list>\n        <ion-grid>\n          <ion-row *ngFor="let track of order.tracking; let x=index;">\n            <ion-col col-12>\n              <small>{{ track.created_at | date:\'dd MMM yyyy HH:mm\' }}</small>\n              <p [innerHTML]="track.tracking_name"></p>\n              <p *ngIf="order.status == \'new\'&&x==0">\n                <button ion-button color="dark" (click)="doConfirmation(order.id)" full >แจ้งชำระเงิน</button>\n              </p>\n            </ion-col>\n            <ion-col col-12 class="attach-panel" *ngIf="track.attach" >\n              <p><strong>Attach File</strong></p>\n              <p><img src="{{ track.attach.attach_img }}" /></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/track/track.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], TrackPage);
    return TrackPage;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_view_food_view__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restourant_restourant__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_checkout__ = __webpack_require__(35);
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
    function FoodPage(navCtrl, navParams, http, auth, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.loader = loader;
        this.foods = [];
        this.category = [];
        this.category_id = this.navParams.get('category_id');
        this.loading = this.loader.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
        this.auth.online();
    }
    FoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodPage');
        this.getFood();
    };
    FoodPage.prototype.getFood = function () {
        var _this = this;
        this.loading.present();
        return this.http.get(this.auth.api() + '/foods/' + this.category_id + '?token=' + this.auth.token()).subscribe(function (data) {
            _this.foods = data['data'];
            _this.category = data['category'];
            _this.food_path = data['food_path'];
            console.log('food ', _this.foods, data, '| FOOD PATH ', _this.food_path);
            _this.loading.dismissAll();
        });
    };
    FoodPage.prototype.goFoodview = function (id) {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__food_view_food_view__["a" /* FoodViewPage */], { id: id });
    };
    FoodPage.prototype.goShopview = function (id) {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__restourant_restourant__["a" /* RestourantPage */], { restourant_id: id });
    };
    FoodPage.prototype.goCreate = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */]);
    };
    FoodPage.prototype.goCart = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__checkout_checkout__["a" /* CheckoutPage */]);
    };
    FoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/food/food.html"*/'<!--\n  Generated template for the FoodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FOOD DATA</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="page-title">\n      <ion-col>\n        <h2>{{ category.name }}</h2>\n        <hr/>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="category.option==\'food\'">\n      <ion-col col-6  class="food-data" *ngFor="let row of foods" (click)="goFoodview( row.id )">\n          <ion-card>\n              <img src="{{ row.food_image }}" />\n              <div class="card-title">{{ row.food_name }}</div>\n          </ion-card>  \n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="category.option==\'shop\'">\n      <ion-col class="restourant-data">\n          <ion-card *ngFor="let row of foods" (click)="goShopview( row.id )">\n              <img src="{{ row.thumb }}" />\n              <div class="card-title">\n                <h4>{{ row.restourant }}</h4>\n                <p><strong>Contact : </strong>{{ row.restourant }}</p>\n                <p><strong>Tel : </strong>{{ row.restourant }}</p>\n              </div>\n          </ion-card>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button color="light" full (click)="goCreate()">Back</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button color="defult" full (click)="goCart()">CART</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/food/food.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], FoodPage);
    return FoodPage;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_checkout__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_query_query__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Page //


// Provider include //


/**
 * Generated class for the FoodViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodViewPage = (function () {
    function FoodViewPage(navCtrl, navParams, http, auth, loader, frm, qr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.loader = loader;
        this.frm = frm;
        this.qr = qr;
        this.food_id = this.navParams.get('id');
        this.item = [];
        this.row = [];
        this.pricelist = [];
        this.action = 'new';
        this.arrprice = [];
        this.table = 'orderlist';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loading = this.loader.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
        this.auth.online();
        this.createForm();
    }
    FoodViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodViewPage');
        //this.checkRecord();
        this.getFood();
        this.prices();
    };
    FoodViewPage.prototype.createForm = function () {
        this.cart = this.frm.group({
            'userId': [this.user.id],
            'userName': [this.user.username],
            'price_id': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'category_id': [''],
            'food_id': [''],
            'food_name': [''],
            'restourant_id': [''],
            'restourant_name': [''],
            'quantity': [1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'price': [''],
            'amount': [''],
            'remark': ['']
        });
    };
    FoodViewPage.prototype.getFood = function () {
        var _this = this;
        this.loading.present();
        this.checkRecord();
        return this.http.get(this.auth.api() + '/food/' + this.food_id + '?token=' + this.auth.token()).subscribe(function (response) {
            console.log('food response : ', response);
            if (response['code'] == 200) {
                _this.row = response['data'];
                var json = _this.row;
                if (_this.action == 'new') {
                    _this.cart.get('category_id').setValue(json['category_id']);
                    _this.cart.get('food_id').setValue(json['id']);
                    _this.cart.get('food_name').setValue(json['food_name']);
                }
            }
            _this.loading.dismissAll();
        });
    };
    FoodViewPage.prototype.prices = function () {
        var _this = this;
        this.loading.present();
        return this.http.get(this.auth.api() + '/food-price/' + this.food_id + '?token=' + this.auth.token()).subscribe(function (response) {
            if (response['code'] == 200) {
                _this.pricelist = response['data'];
                var json = response['data'][0];
                _this.restourant = json['id'];
                _this.cart.get('price_id').setValue(json['id']);
                _this.cart.get('restourant_id').setValue(json['restourant_id']);
                _this.cart.get('restourant_name').setValue(json['restourant']);
                _this.cart.get('price').setValue(json['price']);
                _this.price = json['price'];
                _this.amount = json['price'];
                for (var i = 0; i <= (response['data'].length - 1); i++) {
                    if (response['data'][i] !== null && response['data'][i] !== '')
                        _this.arrprice[response['data'][i]['id']] = response['data'][i];
                }
                //this.txtres = JSON.stringify( this.arrprice );
                //alert('pricelist : ' + this.restourant);
            }
            _this.loading.dismissAll();
        });
    };
    FoodViewPage.prototype.goFood = function (id) {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__food_food__["a" /* FoodPage */], { category_id: id });
    };
    FoodViewPage.prototype.doQuantity = function () {
        var qty = this.cart.get('quantity').value;
        var price = this.cart.get('price').value;
        var amount = price * qty;
        this.amount = amount;
        this.cart.get('amount').setValue(amount);
    };
    FoodViewPage.prototype.doPrice = function (json) {
        this.restourant = json.id;
        this.cart.get('restourant_id').setValue(json.restourant_id);
        this.cart.get('restourant_name').setValue(json.restourant);
        this.cart.get('price').setValue(json.price);
        this.cart.get('price_id').setValue(json.id);
        var qty = this.cart.get('quantity').value;
        this.price = json.price;
        this.amount = json.price * qty;
        this.cart.get('amount').setValue(this.amount);
    };
    FoodViewPage.prototype.doSubmit = function () {
        this.loading.present();
        if (this.action == 'new') {
            this.insertRecord();
        }
        if (this.action == 'update') {
            this.updateRecord();
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__checkout_checkout__["a" /* CheckoutPage */]);
        //alert('comming soon...');
    };
    FoodViewPage.prototype.currentDate = function () {
        var deal = new Date();
        return deal.setDate(deal.getDate());
    };
    // Manage SQLite 
    /* ======================================================================================== */
    FoodViewPage.prototype.insertRecord = function () {
        var _this = this;
        this.qr.db().then(function (db) {
            db.executeSql('INSERT INTO ' + _this.table + ' (userId, userName, price_id, category_id, food_id, food_name, restourant_id, restourant_name, quantity, price, amount, remark, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
                _this.cart.get('userId').value,
                _this.cart.get('userName').value,
                _this.cart.get('price_id').value,
                _this.cart.get('category_id').value,
                _this.cart.get('food_id').value,
                _this.cart.get('food_name').value,
                _this.cart.get('restourant_id').value,
                _this.cart.get('restourant_name').value,
                _this.cart.get('quantity').value,
                _this.cart.get('price').value,
                _this.cart.get('amount').value,
                _this.cart.get('remark').value,
                _this.currentDate()
            ]).then(function (data) {
                _this.loading.dismissAll();
            }, function (error) {
                alert('Error \nCannot insert record' + JSON.stringify(error));
            });
        }, function (error) {
            alert('Error \n' + JSON.stringify(error));
        });
    };
    FoodViewPage.prototype.updateRecord = function () {
        var _this = this;
        this.qr.db().then(function (db) {
            db.executeSql("UPDATE " + _this.table + " SET userId = '" + _this.cart.get('userId').value + "', "
                + "userName = '" + _this.cart.get('userName').value + "', "
                + "price_id = '" + _this.cart.get('price_id').value + "', "
                + "category_id = '" + _this.cart.get('category_id').value + "', "
                + "food_id = '" + _this.cart.get('food_id').value + "', "
                + "food_name = '" + _this.cart.get('food_name').value + "', "
                + "restourant_id = '" + _this.cart.get('restourant_id').value + "', "
                + "restourant_name = '" + _this.cart.get('restourant_name').value + "', "
                + "quantity = '" + _this.cart.get('quantity').value + "', "
                + "price = '" + _this.cart.get('price').value + "', "
                + "amount = '" + _this.cart.get('amount').value + "', "
                + "remark = '" + _this.cart.get('remark').value + "', "
                + "updated_at = '" + _this.currentDate() + "'"
                + " WHERE food_id = ?", [_this.food_id]).then(function (data) {
                _this.loading.dismissAll();
            }, function (error) {
                alert('Error \nCannot insert record' + JSON.stringify(error));
            });
        }, function (error) {
            alert('Error \n' + JSON.stringify(error));
        });
    };
    FoodViewPage.prototype.checkRecord = function () {
        var _this = this;
        var price_id = this.cart.get('price_id').value;
        this.qr.db().then(function (db) {
            db.executeSql('SELECT * FROM ' + _this.table + ' WHERE price_id =?', [price_id]).then(function (data) {
                var len = parseInt(data.rows.length);
                var txt = 'length = ' + len;
                if (len > 0) {
                    var item = data.rows.item(0);
                    _this.action = 'update';
                    _this.cart.get('restourant_id').setValue(item.restourant_id);
                    _this.cart.get('restourant_name').setValue(item.restourant_name);
                    _this.cart.get('quantity').setValue(item.quantity);
                    _this.cart.get('price').setValue(item.price);
                    _this.cart.get('amount').setValue(item.amount);
                    _this.cart.get('remark').setValue(item.remark);
                }
                else {
                    txt += ' Error row == 0';
                    _this.action = 'new';
                }
                _this.txtres = txt + ' Action = ' + _this.action;
            }, function (error) {
                alert('Error!!\nCannot open ' + _this.table + ' error => ' + JSON.stringify(error));
            });
        }, function (error) {
            alert('Error!!\nCannot open DATABASE ' + JSON.stringify(error));
        });
    };
    FoodViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-view',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/food-view/food-view.html"*/'<!--\n  Generated template for the FoodViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FOOD DETAIL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <img src="{{ row.food_image }}" />\n    <div class="card-title">{{ row.food_name }}</div>\n  </ion-card>\n    \n    <form (ngSubmit)="doSubmit()" [formGroup]="cart">\n      <ion-grid>\n        <ion-row>\n          <ion-col text-right>Calorie <strong>{{ row.kcal }}</strong> (kcal)</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item>\n              <ion-label>Restaurant </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-8>\n            <ion-list>\n              <ion-item>\n                <ion-select formControlName="price_id" interface="popover">\n                  <ion-option (ionSelect)="doPrice(price)" *ngFor="let price of pricelist; let i = index;" [value]="price.id">{{ price.restourant }}</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row> \n          <ion-col col-4>\n            <ion-item>\n              <ion-label fixed>Quantity</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n            <ion-item>\n              <ion-input type="number"  formControlName="quantity" (change)="doQuantity()" value="1"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n             <ion-label fixed>Plates</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row> \n          <ion-col>\n            <ion-item>\n              <ion-label stacked>Remark</ion-label>\n              <ion-textarea type="text" name="remark"  formControlName="remark" ></ion-textarea>\n            </ion-item>\n            <p class="err"></p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-right>Price</ion-col>\n          <ion-col col-6 text-right><strong>{{ price }}</strong> Bath.</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 text-right>Sum Price</ion-col>\n          <ion-col col-6 text-right><strong>{{ amount }}</strong> Bath.</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button color="light" type="button" full (click)="goFood(row.category_id)">Back</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button color="defult" type="submit" full >ADD CART</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/food-view/food-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_query_query__["a" /* QueryProvider */]])
    ], FoodViewPage);
    return FoodViewPage;
}());

//# sourceMappingURL=food-view.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_query_query__ = __webpack_require__(47);
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
    function CreateOrderPage(navCtrl, navParams, auth, loader, qr, frm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loader = loader;
        this.qr = qr;
        this.frm = frm;
        this.user = localStorage.getItem('user');
        this.tb = this.user;
        this.num = 0;
        this.action = 'new';
        this.orderId = 0;
        this.loading = this.loader.create({
            content: 'Loading ...',
            dismissOnPageChange: true
        });
        this.auth.online();
        this.createForm();
    }
    CreateOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateOrderPage');
        this.sqlQuery();
    };
    CreateOrderPage.prototype.createForm = function () {
        this.creator = this.frm.group({
            'id': [0],
            'name': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            'address': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            'onDate': [this.defaultDate(), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            'onTime': ['09:00', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            'remark': ['']
        });
    };
    CreateOrderPage.prototype.defaultDate = function () {
        var deal = new Date();
        var setDate = deal.setDate(deal.getDate() + 10);
        var d = new Date(setDate), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    CreateOrderPage.prototype.currentDate = function () {
        var deal = new Date();
        return deal.setDate(deal.getDate());
    };
    CreateOrderPage.prototype.goDashboard = function () {
        this.loading.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    CreateOrderPage.prototype.goCart = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */]);
    };
    CreateOrderPage.prototype.doCreate = function () {
        var _this = this;
        //this.tb = JSON.stringify( this.creator.value );
        this.tb = '';
        this.loading.present();
        var item = this.creator.value;
        //this.deleteRecord();
        this.qr.db().then(function (db) {
            if (_this.action == 'update') {
                _this.updateRecord(item);
            }
            else {
                _this.insertRecord(item);
            }
            // this.insertRecord(item);
            //this.navCtrl.setRoot( CategoryPage );
            _this.loading.dismissAll();
        }, function (error) {
            _this.loading.dismissAll();
            _this.tb = 'Error Cannot open database ' + JSON.stringify(error);
        });
    };
    //Manage Table 
    //========================================================================================
    CreateOrderPage.prototype.insertRecord = function (item) {
        var _this = this;
        var users = JSON.parse(this.user);
        this.qr.db().then(function (db) {
            db.executeSql("INSERT INTO orders (userId, userName, jobName, jobAddress, jobDate, jobTime, jobRemark, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?)", [users.id, users.name, item.name, item.address, item.onDate, item.onTime, item.remark, _this.currentDate(), _this.currentDate()]).then(function (data) {
                _this.loading.dismissAll();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */]);
            }, function (error) {
                _this.tb = 'Error insert on orders table ' + JSON.stringify(error);
            });
        }, function (error) {
            _this.tb = 'Error show database ' + JSON.stringify(error);
        });
    };
    CreateOrderPage.prototype.updateRecord = function (item) {
        var _this = this;
        this.qr.db().then(function (db) {
            db.executeSql("UPDATE orders SET jobName='" + item.name + "', jobAddress='" + item.address + "', jobDate='" + item.onDate + "', jobTime='" + item.onTime + "', jobRemark='" + item.remark + "', updated_at='" + _this.currentDate() + "' WHERE id=?", [item.id]).then(function (data2) {
                _this.tb = 'table orders updated ' + JSON.stringify(data2);
                _this.loading.dismissAll();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */]);
            }, function (error) {
                alert('Error update orders table ' + JSON.stringify(error));
            });
        }, function (error) {
            alert('Error show database ' + JSON.stringify(error));
        });
    };
    CreateOrderPage.prototype.deleteRecord = function () {
        this.qr.db().then(function (db) {
            db.executeSql('DELETE FROM orders', []).then(function (data) {
            }, function (error) {
                //console.log("error: " + JSON.stringify(error));
            });
        });
    };
    CreateOrderPage.prototype.showDb = function (db, input) {
        var _this = this;
        return db.executeSql("SELECT * FROM orders ORDER BY id DESC", []).then(function (data) {
            //this.tb += 'table created is field = ' + JSON.stringify(data);
            _this.num = data.rows.length;
            if (data.rows.length > 0) {
                _this.action = 'update';
                var row = data.rows.item(0);
                input.get('id').setValue(row.id);
                input.get('name').setValue(row.jobName);
                input.get('address').setValue(row.jobAddress);
                input.get('onDate').setValue(row.jobDate);
                input.get('onTime').setValue(row.jobTime);
                input.get('remark').setValue(row.jobRemark);
            }
            else {
                _this.action = 'new';
                input.get('id').setValue(0);
                input.get('name').setValue('');
                input.get('address').setValue('');
                input.get('onDate').setValue(_this.defaultDate());
                input.get('onTime').setValue('07:00');
                input.get('remark').setValue('');
            }
        }, function (error) {
            alert('Error shwo table ' + JSON.stringify(error));
        });
    };
    CreateOrderPage.prototype.sqlQuery = function () {
        var _this = this;
        var input = this.creator;
        this.qr.db().then(function (db) {
            _this.showDb(db, input);
        }, function (error) {
            _this.tb = 'Error show database ' + JSON.stringify(error);
        });
    };
    CreateOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-order',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/create-order/create-order.html"*/'<!--\n  Generated template for the CreateOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CREATE ORDER</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h4>ORDER INFOMATION</h4>\n    <hr/>\n    <form (ngSubmit)="doCreate()" [formGroup]="creator">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>JOB NAME</ion-label>\n              <ion-input type="text" name="jobname" formControlName="name"></ion-input>\n            </ion-item>\n            <div *ngIf="creator.controls[\'name\'].invalid && (creator.controls[\'name\'].dirty || creator.controls[\'name\'].touched)" class="alert alert-danger">\n                <div *ngIf="creator.controls[\'name\'].errors.required">\n                *Please enter Job name.\n                </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>ADDRESS</ion-label>\n              <ion-textarea type="text" name="address" formControlName="address"></ion-textarea>\n            </ion-item>\n            <div *ngIf="creator.controls[\'address\'].invalid && (creator.controls[\'address\'].dirty || creator.controls[\'address\'].touched)" class="alert alert-danger">\n              <div *ngIf="creator.controls[\'address\'].errors.required">\n                *Please enter Job address.\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label stacked>Date</ion-label>\n              <ion-datetime displayFormat="YYYY-MM-DD" formControlName="onDate"></ion-datetime>\n            </ion-item>\n            <div *ngIf="creator.controls[\'onDate\'].invalid && (creator.controls[\'onDate\'].dirty || creator.controls[\'onDate\'].touched)" class="alert alert-danger">\n              <div *ngIf="creator.controls[\'onDate\'].errors.required">\n                *Please enter Job date.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label stacked>TIME</ion-label>\n              <ion-datetime displayFormat="HH:mm"  formControlName="onTime"></ion-datetime>\n            </ion-item>\n            <div *ngIf="creator.controls[\'onTime\'].invalid && (creator.controls[\'onTime\'].dirty || creator.controls[\'onTime\'].touched)" class="alert alert-danger">\n              <div *ngIf="creator.controls[\'onTime\'].errors.required">\n                *Please enter Job time.\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>JOB REMARK</ion-label>\n              <ion-textarea type="text" name="jobname" formControlName="remark"></ion-textarea>\n            </ion-item>\n          </ion-col> \n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button color="light" full type="button" (click)="goDashboard()">CANCEL</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button color="defult" full type="submit" [disabled]="!creator.valid">NEXT</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n     \n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/create-order/create-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_query_query__["a" /* QueryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], CreateOrderPage);
    return CreateOrderPage;
}());

//# sourceMappingURL=create-order.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(36);
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
    function LoginPage(navCtrl, navParams, facebook, auth, http, alertCtrl, googlePlus, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.auth = auth;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.googlePlus = googlePlus;
        this.loader = loader;
        this.loading = this.loader.create({
            content: 'Loading ...',
            dismissOnPageChange: true,
        });
        this.api = this.auth.api();
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToForgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.http.post(this.api + '/auth0/login', this.user).subscribe(function (response) {
            var code = response['code'];
            if (code == 200) {
                localStorage.setItem('token', response['auth']);
                localStorage.setItem('user', JSON.stringify(response['data']));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: response['message'],
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
                _this.http.post(_this.api + '/auth0/facebook', profile).subscribe(function (response) {
                    var code = response['code'];
                    if (code == 200) {
                        localStorage.setItem('token', response['auth']);
                        localStorage.setItem('user', JSON.stringify(response['data']));
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: response['message'],
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                }, function (err) {
                    alert('err \n' + JSON.stringify(err));
                });
                //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
            });
        }).catch(function (err) { return alert(JSON.stringify(err)); });
        ;
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            _this.http.post(_this.api + '/auth0/google', res).subscribe(function (response) {
                var code = response['code'];
                if (code == 200) {
                    localStorage.setItem('token', response['auth']);
                    localStorage.setItem('user', JSON.stringify(response['data']));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: response['message'],
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
                //this.userData = response;
            }, function (err) {
                alert('err \n' + JSON.stringify(err));
            });
        })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/login/login.html"*/'<ion-content>\n  <ion-list padding>\n    <div class="app-logo">\n        <img src="assets/imgs/app-logo.png"/>\n    </div>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="user.username" placeholder="Username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="user.password" placeholder="Password"></ion-input>\n    </ion-item>\n    <p text-right><span class="forgot" (click)="goToForgot()">ลืมรหัสผ่าน?</span></p>\n    <p>\n      <button ion-button full color="secondary" (click)="doLogin()">Login</button>\n    </p>\n    <div class="text-line"><span>OR</span></div>\n    <div class="btn-social">\n        <p>\n          <button ion-button full color="default" (click)="loginFacebook()"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n        </p>\n        <p>\n          <button ion-button full color="danger" (click)="loginGoogle()"><ion-icon name="logo-googleplus"></ion-icon> Login with Google</button>\n        </p>\n    </div>\n    <!--\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 class="padding-left-0">\n          <button ion-button full color="light" (click)="goToForgot()">Forgot Password</button>\n        </ion-col>\n        <ion-col col-6 class="padding-right-0">\n          <button ion-button full color="light" (click)="goToRegister()"> Register</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    -->\n    <p text-center>New here? <span class="new-member" (click)="goToRegister()"><strong>Register</strong></span></p>\n    <p>{{ userData }}</p>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/Documents/Outsource/2017/t-mobile/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map