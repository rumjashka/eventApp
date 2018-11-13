webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_event_card_event_card__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_event_card_event_card__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events_provider_events_provider__ = __webpack_require__(326);
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
    function HomePage(navCtrl, resolver, http, eventsProvider) {
        this.navCtrl = navCtrl;
        this.resolver = resolver;
        this.http = http;
        this.eventsProvider = eventsProvider;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsProvider.load().subscribe(function (events) {
            _this.events = events;
            _this.initializeItems(_this.events);
        });
    };
    HomePage.prototype.initializeItems = function (data) {
        var _this = this;
        var viewContainerRef = this.ecHost.viewContainerRef;
        viewContainerRef.clear();
        console.log(data);
        data.filter(function (item) {
            var componentFactory = _this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__components_event_card_event_card__["a" /* EventCardComponent */]);
            var viewContainerRef = _this.ecHost.viewContainerRef;
            var eventCardComponentRef = viewContainerRef.createComponent(componentFactory);
            eventCardComponentRef.instance.event = item;
        });
    };
    HomePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        var data;
        if (val && val.trim() != '') {
            data = this.events.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            data = this.events;
        }
        this.initializeItems(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__directives_event_card_event_card__["a" /* EventCardDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__directives_event_card_event_card__["a" /* EventCardDirective */])
    ], HomePage.prototype, "ecHost", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/julie/f2/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      EVENTS\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ng-template event-card></ng-template>\n  <ng-template event-details></ng-template>\n\n</ion-content>\n`/*ion-inline-end:"/Users/julie/f2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__providers_events_provider_events_provider__["a" /* EventsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCardDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventCardDirective = (function () {
    function EventCardDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    EventCardDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[event-card]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]) === "function" && _a || Object])
    ], EventCardDirective);
    return EventCardDirective;
    var _a;
}());

//# sourceMappingURL=event-card.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_details_event_details__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventCardComponent = (function () {
    function EventCardComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventCardComponent.prototype.details = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__event_details_event_details__["a" /* EventDetailsComponent */], {
            data: this.event
        });
    };
    EventCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'event-card',template:/*ion-inline-start:"/Users/julie/f2/src/components/event-card/event-card.html"*/`<ion-card>\n  <div class="container">\n    <div class="left" type="button" (click)="details()">\n      <img class="logo" src="{{event.image}}">\n      <div class="card-date" type="button">{{event.dateTime | amParse:\'DD-MM-YYYY HH:mm:ss\' | amDateFormat:\'DD\'}}\n        <br> {{event.dateTime | amParse:\'DD-MM-YYYY HH:mm:ss\' | amDateFormat:\'MMM\'}}\n      </div>\n    </div>\n    <div class="right">\n      <ion-card-header type="button" (click)="details()" class="card-title">{{event.title}}</ion-card-header>\n      <div class="date" type="button" (click)="details()">{{event.dateTime | amParse:\'DD-MM-YYYY HH:mm:ss\' | amCalendar:referenceTime:formats}}</div>\n      <div class="members" type="button" (click)="details()">\n        <ion-avatar item-start *ngFor="let item of event.members| slice:0:3; let i = index;">\n          <img class="member" src="{{item.photo}}" />\n        </ion-avatar>\n        <div class="going" *ngIf="event.members?.length > 3">\n          + {{event.members ? event.members.length - 3: \'\'}} others\n        </div>\n      </div>\n      <div class="button-going-ignore">\n        <button class="button-going" ion-button color="light" (click)="event.status == \'going\' ? event.status = \'none\' : event.status = \'going\'"\n          [style.display]="(event.status == \'going\' || event.status == \'none\') ? \'block\' : \'none\' " [style.background-color]="(event.status == \'going\') ? \'#ffc100\' : \'#f4f4f4\' ">\n        Going</button>\n        <button class="button-ignore" ion-button color="light" (click)="event.status == \'ignore\' ? event.status = \'none\' : event.status = \'ignore\'"\n          [style.display]="(event.status == \'ignore\' || event.status == \'none\') ? \'block\' : \'none\' " [style.background-color]="(event.status == \'ignore\') ? \'#ff3300\' : \'#f4f4f4\' ">Ignore</button>\n      </div>\n    </div>\n  </div>\n</ion-card>\n`/*ion-inline-end:"/Users/julie/f2/src/components/event-card/event-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], EventCardComponent);
    return EventCardComponent;
}());

//# sourceMappingURL=event-card.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventDetailsComponent = (function () {
    function EventDetailsComponent(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.event = navParams.get('data');
        this.eventDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.event.dateTime, 'DD-MM-YYYY HH:mm:ss');
    }
    EventDetailsComponent.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */], {
            data: this.event
        });
    };
    EventDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'event-details',template:/*ion-inline-start:"/Users/julie/f2/src/components/event-details/event-details.html"*/`<ion-content>\n    <div class="left">\n  <img class="logo" src="{{event.image}}">\n  <button class="status"ion-button icon-start clear (click)="back()"><ion-icon name="ios-arrow-back-outline"></ion-icon> </button>\n</div>\n  <div class="details-container">\n    <div class="title">{{event.title}}</div>\n    <div class="time-block">\n      <ion-icon name="ios-timer-outline" class="icon"></ion-icon>\n      <div class="card-date">{{eventDate.calendar() }}</div>\n    </div>\n    <div class="time-block">\n      <ion-icon ios="ios-speedometer" md="md-speedometer" class="icon"></ion-icon>\n      <span> {{event.members ? event.members.length: \'\'}} going</span>\n      <br>\n    </div>\n    <div class="members">\n      <ion-avatar item-start *ngFor="let item of event.members| slice:0:5; let i = index;">\n        <img class="member" src="{{item.photo}}" />\n      </ion-avatar>\n      <div class="going" *ngIf="event.members?.length > 5">\n        + {{event.members ? event.members.length - 5: \'\'}} others\n      </div>\n    </div>\n    <div class="card-subtitle">{{event.description}}</div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/julie/f2/src/components/event-details/event-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsProvider = (function () {
    function EventsProvider(http) {
        this.http = http;
        this.eventsApiUrl = 'https://tsh-app.firebaseio.com/events.json';
    }
    EventsProvider.prototype.load = function () {
        return this.http.get(this.eventsApiUrl);
    };
    EventsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EventsProvider);
    return EventsProvider;
}());

//# sourceMappingURL=events-provider.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_event_card_event_card__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_event_details_event_details__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_event_card_event_card__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_events_provider_events_provider__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_mask__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_moment__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_event_card_event_card__["a" /* EventCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_event_details_event_details__["a" /* EventDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__directives_event_card_event_card__["a" /* EventCardDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_mask__["a" /* NgxMaskModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13_ngx_moment__["a" /* MomentModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_event_card_event_card__["a" /* EventCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_event_details_event_details__["a" /* EventDetailsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_events_provider_events_provider__["a" /* EventsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/julie/f2/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/julie/f2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 203,
	"./af.js": 203,
	"./ar": 204,
	"./ar-dz": 205,
	"./ar-dz.js": 205,
	"./ar-kw": 206,
	"./ar-kw.js": 206,
	"./ar-ly": 207,
	"./ar-ly.js": 207,
	"./ar-ma": 208,
	"./ar-ma.js": 208,
	"./ar-sa": 209,
	"./ar-sa.js": 209,
	"./ar-tn": 210,
	"./ar-tn.js": 210,
	"./ar.js": 204,
	"./az": 211,
	"./az.js": 211,
	"./be": 212,
	"./be.js": 212,
	"./bg": 213,
	"./bg.js": 213,
	"./bm": 214,
	"./bm.js": 214,
	"./bn": 215,
	"./bn.js": 215,
	"./bo": 216,
	"./bo.js": 216,
	"./br": 217,
	"./br.js": 217,
	"./bs": 218,
	"./bs.js": 218,
	"./ca": 219,
	"./ca.js": 219,
	"./cs": 220,
	"./cs.js": 220,
	"./cv": 221,
	"./cv.js": 221,
	"./cy": 222,
	"./cy.js": 222,
	"./da": 223,
	"./da.js": 223,
	"./de": 224,
	"./de-at": 225,
	"./de-at.js": 225,
	"./de-ch": 226,
	"./de-ch.js": 226,
	"./de.js": 224,
	"./dv": 227,
	"./dv.js": 227,
	"./el": 228,
	"./el.js": 228,
	"./en-au": 229,
	"./en-au.js": 229,
	"./en-ca": 230,
	"./en-ca.js": 230,
	"./en-gb": 231,
	"./en-gb.js": 231,
	"./en-ie": 232,
	"./en-ie.js": 232,
	"./en-il": 233,
	"./en-il.js": 233,
	"./en-nz": 234,
	"./en-nz.js": 234,
	"./eo": 235,
	"./eo.js": 235,
	"./es": 236,
	"./es-do": 237,
	"./es-do.js": 237,
	"./es-us": 238,
	"./es-us.js": 238,
	"./es.js": 236,
	"./et": 239,
	"./et.js": 239,
	"./eu": 240,
	"./eu.js": 240,
	"./fa": 241,
	"./fa.js": 241,
	"./fi": 242,
	"./fi.js": 242,
	"./fo": 243,
	"./fo.js": 243,
	"./fr": 244,
	"./fr-ca": 245,
	"./fr-ca.js": 245,
	"./fr-ch": 246,
	"./fr-ch.js": 246,
	"./fr.js": 244,
	"./fy": 247,
	"./fy.js": 247,
	"./gd": 248,
	"./gd.js": 248,
	"./gl": 249,
	"./gl.js": 249,
	"./gom-latn": 250,
	"./gom-latn.js": 250,
	"./gu": 251,
	"./gu.js": 251,
	"./he": 252,
	"./he.js": 252,
	"./hi": 253,
	"./hi.js": 253,
	"./hr": 254,
	"./hr.js": 254,
	"./hu": 255,
	"./hu.js": 255,
	"./hy-am": 256,
	"./hy-am.js": 256,
	"./id": 257,
	"./id.js": 257,
	"./is": 258,
	"./is.js": 258,
	"./it": 259,
	"./it.js": 259,
	"./ja": 260,
	"./ja.js": 260,
	"./jv": 261,
	"./jv.js": 261,
	"./ka": 262,
	"./ka.js": 262,
	"./kk": 263,
	"./kk.js": 263,
	"./km": 264,
	"./km.js": 264,
	"./kn": 265,
	"./kn.js": 265,
	"./ko": 266,
	"./ko.js": 266,
	"./ky": 267,
	"./ky.js": 267,
	"./lb": 268,
	"./lb.js": 268,
	"./lo": 269,
	"./lo.js": 269,
	"./lt": 270,
	"./lt.js": 270,
	"./lv": 271,
	"./lv.js": 271,
	"./me": 272,
	"./me.js": 272,
	"./mi": 273,
	"./mi.js": 273,
	"./mk": 274,
	"./mk.js": 274,
	"./ml": 275,
	"./ml.js": 275,
	"./mn": 276,
	"./mn.js": 276,
	"./mr": 277,
	"./mr.js": 277,
	"./ms": 278,
	"./ms-my": 279,
	"./ms-my.js": 279,
	"./ms.js": 278,
	"./mt": 280,
	"./mt.js": 280,
	"./my": 281,
	"./my.js": 281,
	"./nb": 282,
	"./nb.js": 282,
	"./ne": 283,
	"./ne.js": 283,
	"./nl": 284,
	"./nl-be": 285,
	"./nl-be.js": 285,
	"./nl.js": 284,
	"./nn": 286,
	"./nn.js": 286,
	"./pa-in": 287,
	"./pa-in.js": 287,
	"./pl": 288,
	"./pl.js": 288,
	"./pt": 289,
	"./pt-br": 290,
	"./pt-br.js": 290,
	"./pt.js": 289,
	"./ro": 291,
	"./ro.js": 291,
	"./ru": 292,
	"./ru.js": 292,
	"./sd": 293,
	"./sd.js": 293,
	"./se": 294,
	"./se.js": 294,
	"./si": 295,
	"./si.js": 295,
	"./sk": 296,
	"./sk.js": 296,
	"./sl": 297,
	"./sl.js": 297,
	"./sq": 298,
	"./sq.js": 298,
	"./sr": 299,
	"./sr-cyrl": 300,
	"./sr-cyrl.js": 300,
	"./sr.js": 299,
	"./ss": 301,
	"./ss.js": 301,
	"./sv": 302,
	"./sv.js": 302,
	"./sw": 303,
	"./sw.js": 303,
	"./ta": 304,
	"./ta.js": 304,
	"./te": 305,
	"./te.js": 305,
	"./tet": 306,
	"./tet.js": 306,
	"./tg": 307,
	"./tg.js": 307,
	"./th": 308,
	"./th.js": 308,
	"./tl-ph": 309,
	"./tl-ph.js": 309,
	"./tlh": 310,
	"./tlh.js": 310,
	"./tr": 311,
	"./tr.js": 311,
	"./tzl": 312,
	"./tzl.js": 312,
	"./tzm": 313,
	"./tzm-latn": 314,
	"./tzm-latn.js": 314,
	"./tzm.js": 313,
	"./ug-cn": 315,
	"./ug-cn.js": 315,
	"./uk": 316,
	"./uk.js": 316,
	"./ur": 317,
	"./ur.js": 317,
	"./uz": 318,
	"./uz-latn": 319,
	"./uz-latn.js": 319,
	"./uz.js": 318,
	"./vi": 320,
	"./vi.js": 320,
	"./x-pseudo": 321,
	"./x-pseudo.js": 321,
	"./yo": 322,
	"./yo.js": 322,
	"./zh-cn": 323,
	"./zh-cn.js": 323,
	"./zh-hk": 324,
	"./zh-hk.js": 324,
	"./zh-tw": 325,
	"./zh-tw.js": 325
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
webpackContext.id = 401;

/***/ })

},[327]);
//# sourceMappingURL=main.js.map