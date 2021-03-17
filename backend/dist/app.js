"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var celebrate_1 = require("celebrate");
require("reflect-metadata");
require("./database/index");
function app() {
    var server = express_1.default();
    server.use(cors_1.default());
    server.use(express_1.default.json());
    server.use(routes_1.default);
    server.use(celebrate_1.errors());
    // this.server.use(
    //   '/files',
    //   express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    // );
    return server;
}
exports.default = app;
