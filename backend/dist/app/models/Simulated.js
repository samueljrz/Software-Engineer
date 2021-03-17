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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulated = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Question_1 = require("./Question");
var Administrator_1 = require("./Administrator");
var Simulated = /** @class */ (function () {
    function Simulated() {
    }
    __decorate([
        typeorm_1.PrimaryColumn("uuid", { length: 20 }),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], Simulated.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Simulated.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Simulated.prototype, "qtdquestion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Simulated.prototype, "time", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Simulated.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Question_1.Question; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Simulated.prototype, "questions", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.simulateds; }),
        __metadata("design:type", User_1.User)
    ], Simulated.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Administrator_1.Administrator; }, function (administrator) { return administrator.simulateds; }),
        __metadata("design:type", Administrator_1.Administrator)
    ], Simulated.prototype, "administrator", void 0);
    Simulated = __decorate([
        typeorm_1.Entity()
    ], Simulated);
    return Simulated;
}());
exports.Simulated = Simulated;
