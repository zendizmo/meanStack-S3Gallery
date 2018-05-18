webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".heading{\r\n  background-color: #3F729B\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"display-3 text-center heading\">Images App</h2>\n<app-gallery #gallery></app-gallery>\n<app-notification (delEvent)=\"gallery.deleteImage()\"></app-notification>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_service__ = __webpack_require__("./src/app/common-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__server_settings_service__ = __webpack_require__("./src/app/server-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notification_service_service__ = __webpack_require__("./src/app/notification-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__common_services_service__["a" /* CommonServicesService */],
                __WEBPACK_IMPORTED_MODULE_6__server_settings_service__["a" /* ServerSettingsService */],
                __WEBPACK_IMPORTED_MODULE_9__notification_service_service__["a" /* NotificationServiceService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_settings_service__ = __webpack_require__("./src/app/server-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonServicesService = /** @class */ (function () {
    function CommonServicesService(http, svrSettings) {
        this.http = http;
        this.svrSettings = svrSettings;
        this.apiUrl = this.svrSettings.getApiURL();
    }
    CommonServicesService.prototype.uploadImage = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var url = this.apiUrl + 'images/upload';
        console.log(params);
        var result = this.http.post(url, params, { headers: headers })
            .map(function (res) { return res.json(); });
        return result;
    };
    CommonServicesService.prototype.getImages = function () {
        var url = this.apiUrl + 'images';
        var result = this.http.get(url)
            .map(function (res) { return res.json(); });
        return result;
    };
    CommonServicesService.prototype.deleteImage = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var url = this.apiUrl + 'images/deleteImage';
        var result = this.http.post(url, params, { headers: headers })
            .map(function (res) { return res.json(); });
        return result;
    };
    CommonServicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__server_settings_service__["a" /* ServerSettingsService */]])
    ], CommonServicesService);
    return CommonServicesService;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#preview{\r\n  width: 320px;\r\n  height: 260px;\r\n  padding:10px;\r\n  background-origin: content-box;\r\n  cursor: pointer\r\n}\r\n\r\n.new-img-div{\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#imageFile, #upload-btn\r\n{\r\n  visibility: hidden;\r\n  margin-left: 10px;\r\n}\r\n\r\n.rem-icon{\r\n  margin: 10px;\r\n  color: #ff4444;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h2 class=\"display-4 text-center\">New Image </h2>\n    <hr>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\" align=\"center\">\n        <div class=\"col-lg-4 col-md-12\"></div>\n        <div class=\"col-lg-4 col-md-12\">\n            <div class=\"input-group mb-12\">\n              <div class=\"input-group-prepend\">\n                  <label class=\"input-group-text\"\n                  for=\"imageNm\">Image Name</label>\n              </div>\n              <input type=\"text\"\n              formControlName=\"imageName\" name=\"imageName\"\n              class=\"form-control\"\n              id=\"imageName\"\n              placeholder=\"Enter Image Name\">\n            </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12\"></div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-12\"></div>\n        <div class=\"col-lg-4 col-md-12\">\n          <div class=\"form-group\">\n              <img class=\"img-thumbnail\"\n              name=\"preview\"\n              id=\"preview\"\n              src=\"assets/no-img.jpg\"\n              (click) = \"onUploadBtnClick()\">\n          </div>\n          <div class=\"form-group\">\n          <input type=\"button\"\n              (click)=\"onUploadBtnClick()\"\n              class=\"btn btn-sm btn-primary\"\n              id=\"uploadProductImg\"\n              style=\"float: left\"\n              value=\"Upload\" />\n          </div>\n          <button type=\"submit\" id=\"upload-btn\"\n          class=\"btn btn-sm btn-success\">Upload Image</button>\n          <div>\n            <input type=\"file\" id=\"imageFile\"\n            name=\"imageAvatar\" (change)=\"onFileChange($event)\">\n          </div>\n          <br>\n        </div>\n      </div>\n    </form>\n    <hr>\n    <h2 class=\"display-4 text-center\">Your Images </h2>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3 sm-2 xs-1 d-flex align-items-stretch\"\n      *ngFor=\"let image of images; let i = index\">\n          <div class=\"card\">\n              <div class=\"view\"\n              (click)=\"maximizeImage(image)\"\n              data-toggle=\"modal\"\n              data-target=\"#product-dtl\">\n                    <img class=\"img-fluid\"\n                    data-src=\"{{image.imagePath}}\"\n                    alt=\"Card image cap\"\n                    style=\"cursor: pointer; height: 150px\"\n                  >\n              </div>\n              <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{image?.imageName}}</h4>\n                  <button type=\"button\"\n                        class=\"btn btn-sm btn-info\"\n                        (click)=\"maximizeImage(image)\"\n                        data-toggle=\"modal\"\n                        data-target=\"#product-dtl\"\n                        style=\"float: left;\"\n                >Maximize</button>\n                <i class=\"rem-icon fa fa-trash\"\n                aria-hidden=\"true\"\n                (click)=\"onDeleteClick(image)\"\n                data-toggle=\"modal\"\n                data-target=\"#notification-delete-confirm\"\n                style=\"float: right;\"\n                >\n                </i>\n              </div>\n          </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_service__ = __webpack_require__("./src/app/common-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_service_service__ = __webpack_require__("./src/app/notification-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(fb, svcs, noteSvc) {
        this.fb = fb;
        this.svcs = svcs;
        this.noteSvc = noteSvc;
        this.title = 'app';
        this.images = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.loadImages();
    };
    GalleryComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            imageName: '',
            imageAvatar: null
        });
    };
    GalleryComponent.prototype.onUploadBtnClick = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#imageFile').click();
    };
    GalleryComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#upload-btn').attr('style', 'visibility: visible');
        if (event.target.files &&
            event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#preview')
                    .attr('src', URL.createObjectURL(event.target.files[0]));
                _this.myForm.get('imageAvatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    };
    GalleryComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.myForm.value;
        var params = {
            imageName: this.myForm.get('imageNm'),
            imageAvatar: this.myForm.get('imageAvatar'),
            maintDt: Date.now()
        };
        this.svcs.uploadImage(formModel).subscribe(function (data) {
            if (data.success) {
                _this.noteSvc.setNotification('Success', data.msg);
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.notification-btn').click();
                _this.loadImages();
            }
            else {
                _this.noteSvc.setNotification('Failure', data.msg);
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.notification-btn').click();
            }
        });
    };
    GalleryComponent.prototype.loadImages = function () {
        var _this = this;
        this.svcs.getImages().subscribe(function (images) {
            _this.images = images;
        }, function (err) {
            console.log(err);
            return err;
        });
    };
    GalleryComponent.prototype.maximizeImage = function (image) {
        this.modalImage = image;
        this.noteSvc.setNotification(image.imageName, image.imagePath);
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.max-img-notification-btn').click();
    };
    GalleryComponent.prototype.onDeleteClick = function (image) {
        this.modalImage = image;
        this.noteSvc.setNotification('Confirmation', 'Are you sure you want to remove ' + image.imageName
            + ' from the system?');
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.del-notification-btn').click();
    };
    GalleryComponent.prototype.deleteImage = function () {
        var _this = this;
        console.log('From notifications ' + this.modalImage._id);
        var params = {
            imageId: this.modalImage.imageId
        };
        this.svcs.deleteImage(params).subscribe(function (data) {
            if (data.success) {
                _this.loadImages();
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.cancel-del-modal').click();
                _this.noteSvc.setNotification('Success', data.msg);
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.notification-btn').click();
                _this.loadImages();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.cancel-del-modal').click();
                _this.noteSvc.setNotification('Failure', data.msg);
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.notification-btn').click();
            }
        });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__common_services_service__["a" /* CommonServicesService */],
            __WEBPACK_IMPORTED_MODULE_4__notification_service_service__["a" /* NotificationServiceService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/notification-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationServiceService = /** @class */ (function () {
    function NotificationServiceService() {
        this.notification = {
            title: '',
            message: ''
        };
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    NotificationServiceService.prototype.setNotification = function (title, message) {
        this.subject.next(this.notification = {
            title: title,
            message: message
        });
    };
    NotificationServiceService.prototype.getNotification = function () {
        return this.subject.asObservable();
    };
    NotificationServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationServiceService);
    return NotificationServiceService;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/***/ (function(module, exports) {

module.exports = ".notification-btn, .del-notification-btn, .max-img-notification-btn{\r\n  visibility: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"notification-div\"\ntabindex=\"-1\"\nrole=\"dialog\"\naria-labelledby=\"notification-lbl\"\naria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\"\n          id=\"notification-lbl\">{{notification.title}}</h5>\n          <button type=\"button\"\n          class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{notification.message}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-sm btn-success\"\n          style=\"float: left\" id=\"cancel-del-modal\"\n          data-dismiss=\"modal\">Ok</button>\n       </div>\n      </div>\n    </div>\n  </div>\n  <button class=\"btn btn-sm btn-default notification-btn\"\n          data-toggle=\"modal\"\n          data-target=\"#notification-div\">Notify</button>\n  <div class=\"modal fade\" id=\"del-notification-div\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"notification-lbl\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"notification-lbl\">Please Confirm.</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>{{notification.message}}</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteItem()\" style=\"float: left\">Delete</button>\n            <button class=\"btn btn-sm btn-secondary cancel-del-modal\" style=\"float: right\" id=\"cancel-del-modal\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-sm btn-default del-notification-btn\"\n    data-toggle=\"modal\"\n    data-target=\"#del-notification-div\">Notify Delete</button>\n\n    <div class=\"modal fade\" id=\"max-img-notification-div\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"notification-lbl\" aria-hidden=\"true\">\n        <div class=\"modal-dialog  modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"notification-lbl\">{{notification.title}}</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <img class=\"d-block w-100 carousel-img\"\n                src=\"{{notification?.message}}\"\n                onerror=\"this.src='assets/no-img.jpg'\"\n                alt=\"First slide\">\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-sm btn-success\" style=\"float: left\" id=\"cancel-del-modal\" data-dismiss=\"modal\">Ok</button>\n             </div>\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-sm btn-default max-img-notification-btn\"\n      data-toggle=\"modal\"\n      data-target=\"#max-img-notification-div\">Maximize image</button>\n"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service_service__ = __webpack_require__("./src/app/notification-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(noteSvc) {
        this.noteSvc = noteSvc;
        this.notification = {
            title: '',
            message: ''
        };
        this.delEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.noteSvc.getNotification()
            .subscribe(function (notification) {
            _this.notification = notification;
        });
    };
    NotificationComponent.prototype.deleteItem = function () {
        this.delEvent.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "delEvent", void 0);
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-notification',
            template: __webpack_require__("./src/app/notification/notification.component.html"),
            styles: [__webpack_require__("./src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notification_service_service__["a" /* NotificationServiceService */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/server-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CONFIG = {
    apiTestUrl: 'http://localhost:8080/',
    apiHerokuUrl: 'https://gallery-app-kari.herokuapp.com/',
    apiEC2Url: 'http://ec2-34-239-179-123.compute-1.amazonaws.com:8080/'
};
var ServerSettingsService = /** @class */ (function () {
    function ServerSettingsService() {
    }
    ServerSettingsService.prototype.getApiURL = function () {
        return CONFIG.apiHerokuUrl;
    };
    ServerSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ServerSettingsService);
    return ServerSettingsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map