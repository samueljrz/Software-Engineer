"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authMiddleware_1 = __importDefault(require("./app/middlewares/authMiddleware"));
var SignUpController_1 = __importDefault(require("./app/controllers/SignUpController"));
var SignInController_1 = __importDefault(require("./app/controllers/SignInController"));
var routes = express_1.Router();
routes.post('/signup', SignUpController_1.default.store);
routes.post('/signin', SignInController_1.default.authenticate);
routes.use(authMiddleware_1.default);
routes.get('/index', SignUpController_1.default.index);
//rotas
exports.default = routes;
