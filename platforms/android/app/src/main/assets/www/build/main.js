webpackJsonp([0],{

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		166
	],
	"../pages/checkout/checkout.module": [
		176
	],
	"../pages/create-order/create-order.module": [
		177
	],
	"../pages/dashboard/dashboard.module": [
		178
	],
	"../pages/food-view/food-view.module": [
		179
	],
	"../pages/food/food.module": [
		180
	],
	"../pages/forgot/forgot.module": [
		181
	],
	"../pages/history/history.module": [
		182
	],
	"../pages/login/login.module": [
		183
	],
	"../pages/profile/profile.module": [
		184
	],
	"../pages/register/register.module": [
		185
	],
	"../pages/track/track.module": [
		186
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(18);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_checkout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_query_query__ = __webpack_require__(54);
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
    function FoodViewPage(navCtrl, navParams, http, auth, platform, loader, frm, qr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.platform = platform;
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
        this.platform.ready().then(function () {
            _this.createTable();
        });
    }
    FoodViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodViewPage');
        this.getFood();
        this.prices();
    };
    FoodViewPage.prototype.createForm = function () {
        this.cart = this.frm.group({
            'userId': [this.user.id],
            'userName': [this.user.name],
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
        return this.http.get(this.auth.api() + '/food/' + this.food_id + '?token=' + this.auth.token()).subscribe(function (response) {
            console.log('food response : ', response);
            if (response['code'] == 200) {
                _this.row = response['data'];
                var json = _this.row;
                _this.cart.get('category_id').setValue(json['category_id']);
                _this.cart.get('food_id').setValue(json['id']);
                _this.cart.get('food_name').setValue(json['food_name']);
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
    FoodViewPage.prototype.createTable = function () {
        var _this = this;
        this.qr.db().then(function (db) {
            /*
            db.executeSql("DROP TABLE " + this.table ,{}).then(()=>{
              alert('delete exit');
            });
            */
            db.executeSql("CREATE TABLE IF NOT EXISTS " + _this.table + " (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, price_id INTEGER, category_id INTEGER, food_id INTEGER, food_name TEXT, restourant_id INTEGER, restourant_name TEXT, quantity INTEGER, price DOUBLE, amount DOUBLE, remark TEXT, created_at TEXT, updated_at TEXT)", {}).then(function (data) {
                //this.txtres = 'Create table orderlist ready';
            }, function (error) {
                _this.txtres = 'Error cannot Create Table ' + JSON.stringify(error);
            });
        }, function (error) {
            _this.txtres = 'Error cannot Create Database ' + JSON.stringify(error);
        });
    };
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
    };
    FoodViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-view',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\food-view\food-view.html"*/'<!--\n\n  Generated template for the FoodViewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>FOOD DETAIL</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="{{ row.food_image }}" />\n\n    <div class="card-title">{{ row.food_name }}</div>\n\n  </ion-card>\n\n    \n\n    <form (ngSubmit)="doSubmit()" [formGroup]="cart">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col text-right>Calorie <strong>{{ row.kcal }}</strong> (kcal)</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-item>\n\n              <ion-label>Restaurant </ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-select formControlName="price_id" interface="popover">\n\n                  <ion-option (ionSelect)="doPrice(price)" *ngFor="let price of pricelist; let i = index;" [value]="price.id">{{ price.restourant }}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row> \n\n          <ion-col col-4>\n\n            <ion-item>\n\n              <ion-label fixed>Quantity</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <ion-item>\n\n              <ion-input type="number"  formControlName="quantity" (change)="doQuantity()" value="1"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n             <ion-label fixed>Plates</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row> \n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>Remark</ion-label>\n\n              <ion-textarea type="text" name="remark"  formControlName="remark" ></ion-textarea>\n\n            </ion-item>\n\n            <p class="err"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 text-right>Price</ion-col>\n\n          <ion-col col-6 text-right><strong>{{ price }}</strong> Bath.</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 text-right>Sum Price</ion-col>\n\n          <ion-col col-6 text-right><strong>{{ amount }}</strong> Bath.</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button color="light" type="button" full (click)="goFood(row.category_id)">Back</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button color="defult" type="submit" full >ADD CART</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n    {{ txtres }}\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\food-view\food-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_query_query__["a" /* QueryProvider */]])
    ], FoodViewPage);
    return FoodViewPage;
}());

//# sourceMappingURL=food-view.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(291);
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
        this.http.get(this.api() + '/user?token=' + this.token()).subscribe(function (res) {
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
    function HistoryPage(navCtrl, navParams, form) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = form;
        this.pricelist = [
            {
                'id': 1,
                'name': 'AAAAA'
            },
            {
                'id': 2,
                'name': 'BBBB'
            },
            {
                'id': 3,
                'name': 'CCCC'
            },
            {
                'id': 4,
                'name': 'DDDD'
            },
            {
                'id': 5,
                'name': 'EEEE'
            }
        ];
        this.group = this.form.group({
            'opt': [1]
        });
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.doOption = function (val) {
        this.result = 'change option value' + JSON.stringify(val);
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\history\history.html"*/'<!--\n\n  Generated template for the HistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ORDER HISTORY</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="group">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-select  interface="popover" formControlName="opt">\n\n        <ion-option  *ngFor="let price of pricelist; let i = index;" [value]="price.id" (ionSelect)="doOption(price)" >{{ price.name }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  </form>\n\n  <p>{{ result }}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(45);
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
            selector: 'page-register',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <form (ngSubmit)="postRegister()">\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Name</ion-label>\n\n            <ion-input type="text" name="name" [ngClass]="{\'err-focus\':errs.name !==\'\'}" [(ngModel)]="reg.name"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.name !== \'\'" class="err">{{ errs.name }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Username</ion-label>\n\n            <ion-input type="text" name="username" [ngClass]="{\'err-focus\':errs.username !==\'\'}"[(ngModel)]="reg.username"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.username !== \'\'" class="err">{{ errs.username }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>E-mail</ion-label>\n\n            <ion-input type="text" name="email" [ngClass]="{\'err-focus\':errs.email !==\'\'}"[(ngModel)]="reg.email"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.email !== \'\'" class="err">{{ errs.email }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" name="password" [ngClass]="{\'err-focus\':errs.password !==\'\'}" [(ngModel)]="reg.password"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.password !== \'\'" class="err">{{ errs.password }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Confirm Password</ion-label>\n\n            <ion-input type="password" name="password_confirmation" [ngClass]="{\'err-focus\':errs.password_confirmation !==\'\'}" [(ngModel)]="reg.password_confirmation"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="errs.password_confirmation !== \'\'" class="err">{{ errs.password_confirmation }}</p>\n\n        <ion-item>\n\n            <ion-label stacked>Tel</ion-label>\n\n            <ion-input type="text" name="tel" [(ngModel)]="reg.tel"></ion-input>\n\n            <span class="err-confirm"></span>\n\n        </ion-item>\n\n        <div class="btn-reg">\n\n            <button ion-button full type="submit"> Register</button>\n\n        </div>\n\n        </form>\n\n    </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(44);
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPageModule", function() { return CreateOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(45);
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

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodViewPageModule", function() { return FoodViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_view__ = __webpack_require__(169);
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodPageModule", function() { return FoodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food__ = __webpack_require__(88);
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(174);
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(171);
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

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(90);
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

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(173);
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

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(17);
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPageModule", function() { return TrackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track__ = __webpack_require__(172);
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forgot_forgot_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_create_order_create_order_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_history_history_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_track_track_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_category_category_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_food_food_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_food_view_food_view_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_checkout_checkout_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_query_query__ = __webpack_require__(54);
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
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-order/create-order.module#CreateOrderPageModule', name: 'CreateOrderPage', segment: 'create-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-view/food-view.module#FoodViewPageModule', name: 'FoodViewPage', segment: 'food-view', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_category_category_module__["CategoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_order_create_order_module__["CreateOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_food_food_module__["FoodPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgot_forgot_module__["ForgotPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_history_history_module__["HistoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_track_track_module__["TrackPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_food_food_module__["FoodPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_food_view_food_view_module__["FoodViewPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_checkout_checkout_module__["CheckoutPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
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
                __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_query_query__["a" /* QueryProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(45);
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

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_query_query__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(53);
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
    function CheckoutPage(navCtrl, navParams, loader, altCtrl, auth, qr, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.altCtrl = altCtrl;
        this.auth = auth;
        this.qr = qr;
        this.platform = platform;
        this.head = {};
        this.lists = [];
        this.res = '';
        auth.online();
        this.platform.ready().then(function () {
            //this.createTable();
        });
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
        this.header();
        this.detail();
    };
    CheckoutPage.prototype.goContinue = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */]);
    };
    CheckoutPage.prototype.goPayment = function () {
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
                        _this.lists.push(data.rows.item(i));
                    }
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
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\checkout\checkout.html"*/'<!--\n\n  Generated template for the CheckoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Order Cart</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <h5>ORDER CART</h5>\n\n  <hr/>\n\n  <ion-grid>\n\n    <ion-row>\n\n        <ion-col col-4><strong>JOB NAME : </strong></ion-col>\n\n        <ion-col col-8>{{ head.jobName }}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-4><strong>ADDRESS : </strong></ion-col>\n\n        <ion-col col-8>{{ head.jobAddress }}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-4><strong>REMARK : </strong></ion-col>\n\n        <ion-col col-8>{{ head.jobAddress }}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-2><strong>DATE : </strong></ion-col>\n\n        <ion-col col-4>{{ head.jobDate | date:\'dd/MM/yyyy\'}}</ion-col>\n\n        <ion-col col-2 text-right><strong>TIME : </strong></ion-col>\n\n        <ion-col col-4>{{ head.jobTime }}</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <ion-grid>\n\n    <ion-row class="tb-head">\n\n      <ion-col col-1>No.</ion-col>\n\n      <ion-col col-4>Food</ion-col>\n\n      <ion-col col-2>Price</ion-col>\n\n      <ion-col col-2>Qty</ion-col>\n\n      <ion-col col-2>Amount</ion-col>\n\n      <ion-col col-1>#</ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let fd of lists; let i = index;" class="tb-detail">\n\n      <ion-col col-1>{{ i+1 }}</ion-col>\n\n      <ion-col col-4>{{ fd.food_name }}<br>{{ fd.remark }}</ion-col>\n\n      <ion-col col-2 text-right>{{ fd.price }}</ion-col>\n\n      <ion-col col-2 text-center>{{ fd.quantity }}</ion-col>\n\n      <ion-col col-2 text-right>{{ fd.amount }}</ion-col>\n\n      <ion-col col-1  text-right><ion-icon name="ios-trash-outline" color="red"></ion-icon></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <hr/>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button color="light" full (click)="goContinue()">Continue</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button color="defult" full (click)="goPayment()">Checkout</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_query_query__["a" /* QueryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_order_create_order__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_history_history__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__track_track__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(90);
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
    };
    DashboardPage.prototype.goProfile = function () {
        this.loading.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    DashboardPage.prototype.goAbout = function () {
        this.loading.present();
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
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>DASHBOARD</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h5>DASHBOARD ORDER</h5>\n\n  <hr/>\n\n  <ion-grid>\n\n    <ion-row class="food-panel">\n\n      <ion-col col-6 class="food-create" (click)="goCreate()">\n\n        <img src="assets/imgs/food-serb-2.svg" /> \n\n        <span>CREATE ORDER</span>\n\n      </ion-col>\n\n      <ion-col col-6 class="food-tracking" (click)="goTrack()" >\n\n        <img src="assets/imgs/food-delivery.svg" />\n\n        <span>ORDER TRACKING</span>\n\n      </ion-col> \n\n      <ion-col col-6 class="food-history" (click)="goHistory()">\n\n        <img src="assets/imgs/food-history.svg" />\n\n        <span>ORDER HISTORY</span>\n\n      </ion-col>\n\n      <ion-col col-6 class="food-profile" (click)="goProfile()">\n\n        <img src="assets/imgs/food-profile.svg" />\n\n        <span>PROFILE</span>\n\n      </ion-col>\n\n      <ion-col col-6 class="food-about" (click)="goAbout()">\n\n        <img src="assets/imgs/food-about.svg" />\n\n        <span>ABOUT US</span>\n\n      </ion-col>\n\n      <ion-col col-6 class="food-logout" (click)="goLogout()">\n\n        <img src="assets/imgs/food-logout.svg" />\n\n        <span>LOGOUT</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_order_create_order__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_checkout__ = __webpack_require__(44);
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
            selector: 'page-category',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\category\category.html"*/'<!--\n\n  Generated template for the CategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>FOOD CATEGORY</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let row of rows" (click)="goFood( row.id )">\n\n    <img src="{{ row.image }}" />\n\n    <div class="card-title">{{ row.name }}</div>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button color="light" full (click)="goCreate()">Back</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button color="defult" full (click)="goCart()">CART</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\category\category.html"*/,
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(170);
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
    QueryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], QueryProvider);
    return QueryProvider;
}());

//# sourceMappingURL=query.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_view_food_view__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_checkout__ = __webpack_require__(44);
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
    FoodPage.prototype.goCreate = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
    };
    FoodPage.prototype.goCart = function () {
        this.loading.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__checkout_checkout__["a" /* CheckoutPage */]);
    };
    FoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\food\food.html"*/'<!--\n\n  Generated template for the FoodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>FOOD DATA</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class="page-title">\n\n      <ion-col>\n\n        <h2>{{ category }}</h2>\n\n        <hr/>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6  class="food-data" *ngFor="let row of foods" (click)="goFoodview( row.id )">\n\n          <ion-card>\n\n              <img src="{{ row.food_image }}" />\n\n              <div class="card-title">{{ row.food_name }}</div>\n\n          </ion-card>  \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button color="light" full (click)="goCreate()">Back</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button color="defult" full (click)="goCart()">CART</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\food\food.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], FoodPage);
    return FoodPage;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_query_query__ = __webpack_require__(54);
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
    function CreateOrderPage(navCtrl, navParams, auth, loader, qr, frm, platform, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loader = loader;
        this.qr = qr;
        this.frm = frm;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
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
        this.platform.ready().then(function () {
            _this.createTable();
        });
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
    CreateOrderPage.prototype.createTable = function () {
        var _this = this;
        this.qr.db().then(function (db) {
            db.executeSql('create table if not exists orders (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, jobName TEXT, jobAddress TEXT, jobDate TEXT, jobTime TEXT, jobRemark TEXT, created_at TEXT, updated_at TEXT)', {})
                .then(function (data) {
                // this.tb = 'Create table orders successful query is ' + JSON.stringify( data );
            }, function (error) {
                _this.tb = 'Error can not create table orders';
            });
        })
            .catch(function (e) { return _this.tb = 'Error can not create database ' + JSON.stringify(e); });
    };
    CreateOrderPage.prototype.insertRecord = function (item) {
        var _this = this;
        var users = JSON.parse(this.user);
        this.qr.db().then(function (db) {
            db.executeSql("INSERT INTO orders (userId, userName, jobName, jobAddress, jobDate, jobTime, jobRemark, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?)", [users.id, users.name, item.name, item.address, item.onDate, item.onTime, item.remark, _this.currentDate(), _this.currentDate()]).then(function (data) {
                _this.tb += 'table orders inserted ' + JSON.stringify(data);
                var toast = _this.toastCtrl.create({
                    message: 'Create new order successful',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
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
                var toast = _this.toastCtrl.create({
                    message: 'Data update successful',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
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
                input.get('address').setValue(row.jobName);
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
            selector: 'page-create-order',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\create-order\create-order.html"*/'<!--\n\n  Generated template for the CreateOrderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>CREATE ORDER</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h4>ORDER INFOMATION</h4>\n\n    <hr/>\n\n    <form (ngSubmit)="doCreate()" [formGroup]="creator">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>JOB NAME</ion-label>\n\n              <ion-input type="text" name="jobname" formControlName="name"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="creator.controls[\'name\'].invalid && (creator.controls[\'name\'].dirty || creator.controls[\'name\'].touched)" class="alert alert-danger">\n\n                <div *ngIf="creator.controls[\'name\'].errors.required">\n\n                *Please enter Job name.\n\n                </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>ADDRESS</ion-label>\n\n              <ion-textarea type="text" name="address" formControlName="address"></ion-textarea>\n\n            </ion-item>\n\n            <div *ngIf="creator.controls[\'address\'].invalid && (creator.controls[\'address\'].dirty || creator.controls[\'address\'].touched)" class="alert alert-danger">\n\n              <div *ngIf="creator.controls[\'address\'].errors.required">\n\n                *Please enter Job address.\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label stacked>Date</ion-label>\n\n              <ion-datetime displayFormat="YYYY-MM-DD" formControlName="onDate"></ion-datetime>\n\n            </ion-item>\n\n            <div *ngIf="creator.controls[\'onDate\'].invalid && (creator.controls[\'onDate\'].dirty || creator.controls[\'onDate\'].touched)" class="alert alert-danger">\n\n              <div *ngIf="creator.controls[\'onDate\'].errors.required">\n\n                *Please enter Job date.\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <ion-label stacked>TIME</ion-label>\n\n              <ion-datetime displayFormat="HH:mm"  formControlName="onTime"></ion-datetime>\n\n            </ion-item>\n\n            <div *ngIf="creator.controls[\'onTime\'].invalid && (creator.controls[\'onTime\'].dirty || creator.controls[\'onTime\'].touched)" class="alert alert-danger">\n\n              <div *ngIf="creator.controls[\'onTime\'].errors.required">\n\n                *Please enter Job time.\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>JOB REMARK</ion-label>\n\n              <ion-textarea type="text" name="jobname" formControlName="remark"></ion-textarea>\n\n            </ion-item>\n\n          </ion-col> \n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button color="light" full type="button" (click)="goDashboard()">CANCEL</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button color="defult" full type="submit" [disabled]="!creator.valid">NEXT</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n     \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\create-order\create-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_query_query__["a" /* QueryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], CreateOrderPage);
    return CreateOrderPage;
}());

//# sourceMappingURL=create-order.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(45);
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
            selector: 'page-login',template:/*ion-inline-start:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\login\login.html"*/'<ion-content>\n\n  <ion-list padding>\n\n    <div class="app-logo">\n\n        <img src="assets/imgs/app-logo.png"/>\n\n    </div>\n\n    <ion-item>\n\n      <ion-input type="text" [(ngModel)]="user.username" placeholder="Username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" [(ngModel)]="user.password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n    <p text-right><span class="forgot" (click)="goToForgot()">ลืมรหัสผ่าน?</span></p>\n\n    <p>\n\n      <button ion-button full color="secondary" (click)="doLogin()">Login</button>\n\n    </p>\n\n    <div class="text-line"><span>OR</span></div>\n\n    <div class="btn-social">\n\n        <p>\n\n          <button ion-button full color="default" (click)="loginFacebook()"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n\n        </p>\n\n        <p>\n\n          <button ion-button full color="danger" (click)="loginGoogle()"><ion-icon name="logo-googleplus"></ion-icon> Login with Google</button>\n\n        </p>\n\n    </div>\n\n    <!--\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 class="padding-left-0">\n\n          <button ion-button full color="light" (click)="goToForgot()">Forgot Password</button>\n\n        </ion-col>\n\n        <ion-col col-6 class="padding-right-0">\n\n          <button ion-button full color="light" (click)="goToRegister()"> Register</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    -->\n\n    <p text-center>New here? <span class="new-member" (click)="goToRegister()"><strong>Register</strong></span></p>\n\n    <p>{{ userData }}</p>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Outsource\2017\Tigerwealth\t-mobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
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

},[228]);
//# sourceMappingURL=main.js.map