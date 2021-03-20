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
exports.Question = void 0;
var typeorm_1 = require("typeorm");
var Administrator_1 = require("./Administrator");
var Question = /** @class */ (function () {
    function Question() {
    }
    __decorate([
        typeorm_1.PrimaryColumn("uuid", { length: 20 }),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], Question.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "disciplina", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Question.prototype, "ano", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "nivel", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "instituicao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "banca", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "conteudo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Question.prototype, "assertiva", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Question.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Administrator_1.Administrator; }, function (administrator) { return administrator.questions; }),
        __metadata("design:type", Administrator_1.Administrator)
    ], Question.prototype, "administrator", void 0);
    Question = __decorate([
        typeorm_1.Entity()
    ], Question);
    return Question;
}());
exports.Question = Question;
