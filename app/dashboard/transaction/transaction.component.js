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
var hero_1 = require('./hero');
var headers_1 = require('./headers');
var http_1 = require('@angular/http');
var vazhipad_service_1 = require('./vazhipad.service');
require('rxjs/add/operator/toPromise');
var TransactionComponent = (function () {
    function TransactionComponent(router, http, vazhipadService) {
        this.router = router;
        this.http = http;
        this.vazhipadService = vazhipadService;
        this.stars = ['Aswathy', 'Bharani', 'Karthika', 'Makayiarm'];
        this.model = new hero_1.Hero(1, [], '', '', 10, 10, 10);
        this.submitted = false;
        this.active = true;
    }
    TransactionComponent.prototype.getVazhipad = function () {
        var _this = this;
        this.vazhipadService.getVazhipad().then(function (vazhipads) { return _this.vazhipads = vazhipads; });
    };
    TransactionComponent.prototype.ngOnInit = function () {
        this.getVazhipad();
    };
    TransactionComponent.prototype.onSubmit = function () { this.submitted = true; };
    TransactionComponent.prototype.postdata = function () {
        var _this = this;
        var body = JSON.stringify(this.model);
        this.http.post('http://localhost:3009/api/newpooja', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            _this.router.navigate(['/dashboard']);
        });
    };
    TransactionComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TransactionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transaction',
            templateUrl: 'transaction.component.html',
            styleUrls: ['transaction.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, vazhipad_service_1.VazhipadService])
    ], TransactionComponent);
    return TransactionComponent;
}());
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map