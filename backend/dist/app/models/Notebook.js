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
exports.Notebook = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Question_1 = require("./Question");
var Notebook = /** @class */ (function () {
    function Notebook() {
    }
    __decorate([
        typeorm_1.PrimaryColumn("uuid", { length: 20 }),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], Notebook.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Notebook.prototype, "nome", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Notebook.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Question_1.Question; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Notebook.prototype, "questions", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.notebooks; }),
        __metadata("design:type", User_1.User)
    ], Notebook.prototype, "user", void 0);
    Notebook = __decorate([
        typeorm_1.Entity()
    ], Notebook);
    return Notebook;
}());
exports.Notebook = Notebook;
