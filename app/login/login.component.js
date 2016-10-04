"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_1 = require('./user');
var headers_1 = require('../dashboard/transaction/headers');
var http_1 = require('@angular/http');
var LoginComponent = (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.model = new user_1.User('', '');
        this.submitted = false;
        this.active = true;
    }
    LoginComponent.prototype.onSubmit = function () { this.submitted = true; };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var body = JSON.stringify(this.model);
        console.log(body);
        this.http.post('http://localhost:3009/api/login', body, { headers: headers_1.contentHeaders }).subscribe(function (response) {
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
            _this.router.navigate(['/signup']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map