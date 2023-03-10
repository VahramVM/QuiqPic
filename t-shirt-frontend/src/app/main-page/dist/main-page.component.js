"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainPageComponent = void 0;
var core_1 = require("@angular/core");
var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(service, router, order, data) {
        this.service = service;
        this.router = router;
        this.order = order;
        this.data = data;
        this.preview = false;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        // console.log(this.site.isCarouselOpen);
    };
    MainPageComponent.prototype.logOut = function () {
        this.service.logout();
    };
    MainPageComponent.prototype.redirectPreview = function () {
        this.preview = false;
        this.router.navigate(['/main']);
        setTimeout(function () {
            location.reload();
        }, 10);
    };
    MainPageComponent = __decorate([
        core_1.Component({
            selector: 'app-main-page',
            templateUrl: './main-page.component.html',
            styleUrls: ['./main-page.component.scss']
        })
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
