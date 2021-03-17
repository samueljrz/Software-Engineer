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
exports.Administrator = void 0;
var typeorm_1 = require("typeorm");
var Simulated_1 = require("./Simulated");
var Question_1 = require("./Question");
var Administrator = /** @class */ (function () {
    function Administrator() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Administrator.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Administrator.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Administrator.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Administrator.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Administrator.prototype, "senha", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Administrator.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Simulated_1.Simulated; }, function (simulated) { return simulated.administrator; }),
        __metadata("design:type", Array)
    ], Administrator.prototype, "simulateds", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Question_1.Question; }, function (question) { return question.administrator; }),
        __metadata("design:type", Array)
    ], Administrator.prototype, "questions", void 0);
    Administrator = __decorate([
        typeorm_1.Entity()
    ], Administrator);
    return Administrator;
}());
exports.Administrator = Administrator;
