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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Question_1 = require("./Question");
var Notebook_1 = require("./Notebook");
var Simulated_1 = require("./Simulated");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.hashSenha = function () {
        this.senha = bcryptjs_1.default.hashSync(this.senha, 8);
    };
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], User.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "senha", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        typeorm_1.BeforeUpdate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "hashSenha", null);
    __decorate([
        typeorm_1.ManyToMany(function () { return Question_1.Question; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], User.prototype, "questions", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Notebook_1.Notebook; }, function (notebook) { return notebook.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "notebooks", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Simulated_1.Simulated; }, function (simulated) { return simulated.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "simulateds", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
