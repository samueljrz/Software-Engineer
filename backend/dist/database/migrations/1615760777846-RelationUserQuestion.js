"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationUserQuestion1615760777846 = void 0;
var RelationUserQuestion1615760777846 = /** @class */ (function () {
    function RelationUserQuestion1615760777846() {
        this.name = 'RelationUserQuestion1615760777846';
    }
    RelationUserQuestion1615760777846.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_user\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_user\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"user\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_user\" RENAME TO \"user\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_administrator\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_administrator\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"administrator\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"administrator\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_administrator\" RENAME TO \"administrator\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"notebook_questions_question\" (\"notebookId\" varchar(20) NOT NULL, \"questionId\" varchar(20) NOT NULL, PRIMARY KEY (\"notebookId\", \"questionId\"))")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_1a228f2f456f23e2f28a397951\" ON \"notebook_questions_question\" (\"notebookId\") ")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_83b34d7793df93a29b3136befc\" ON \"notebook_questions_question\" (\"questionId\") ")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user_questions_question\" (\"userCpf\" varchar NOT NULL, \"questionId\" varchar(20) NOT NULL, PRIMARY KEY (\"userCpf\", \"questionId\"))")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_de8a5ed626172455aed308ca4b\" ON \"user_questions_question\" (\"userCpf\") ")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_7a9ff0f9f0e9b093d76d3c2797\" ON \"user_questions_question\" (\"questionId\") ")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"simulated_questions_question\" (\"simulatedId\" varchar(20) NOT NULL, \"questionId\" varchar(20) NOT NULL, PRIMARY KEY (\"simulatedId\", \"questionId\"))")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_56409a92ece912c210a802e3dd\" ON \"simulated_questions_question\" (\"simulatedId\") ")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_59ded1d94ed8afd012c6d3b641\" ON \"simulated_questions_question\" (\"questionId\") ")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_simulated\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_simulated\"(\"id\", \"nome\", \"created_at\") SELECT \"id\", \"nome\", \"created_at\" FROM \"simulated\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"simulated\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_simulated\" RENAME TO \"simulated\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_question\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"disciplina\" varchar NOT NULL, \"ano\" int NOT NULL, \"nivel\" varchar NOT NULL, \"instituicao\" varchar NOT NULL, \"banca\" varchar NOT NULL, \"conteudo\" varchar NOT NULL, \"assertiva\" boolean NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()), \"administratorCpf\" varchar)")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_question\"(\"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\") SELECT \"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\" FROM \"question\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"question\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_question\" RENAME TO \"question\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_notebook\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()), \"userCpf\" varchar)")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_notebook\"(\"id\", \"nome\", \"created_at\") SELECT \"id\", \"nome\", \"created_at\" FROM \"notebook\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"notebook\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_notebook\" RENAME TO \"notebook\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_simulated\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()), \"qtdquestion\" integer NOT NULL, \"time\" integer NOT NULL, \"userCpf\" varchar, \"administratorCpf\" varchar)")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_simulated\"(\"id\", \"nome\", \"created_at\") SELECT \"id\", \"nome\", \"created_at\" FROM \"simulated\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"simulated\"")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_simulated\" RENAME TO \"simulated\"")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_question\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"disciplina\" varchar NOT NULL, \"ano\" integer NOT NULL, \"nivel\" varchar NOT NULL, \"instituicao\" varchar NOT NULL, \"banca\" varchar NOT NULL, \"conteudo\" varchar NOT NULL, \"assertiva\" boolean NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"administratorCpf\" varchar)")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_question\"(\"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\") SELECT \"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\" FROM \"question\"")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"question\"")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_question\" RENAME TO \"question\"")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_notebook\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"userCpf\" varchar)")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_notebook\"(\"id\", \"nome\", \"created_at\", \"userCpf\") SELECT \"id\", \"nome\", \"created_at\", \"userCpf\" FROM \"notebook\"")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"notebook\"")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_notebook\" RENAME TO \"notebook\"")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_user\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')))")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_user\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"user\"")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_user\" RENAME TO \"user\"")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_simulated\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"qtdquestion\" integer NOT NULL, \"time\" integer NOT NULL, \"userCpf\" varchar, \"administratorCpf\" varchar)")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_simulated\"(\"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\") SELECT \"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\" FROM \"simulated\"")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"simulated\"")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_simulated\" RENAME TO \"simulated\"")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_administrator\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')))")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_administrator\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"administrator\"")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"administrator\"")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_administrator\" RENAME TO \"administrator\"")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_question\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"disciplina\" varchar NOT NULL, \"ano\" integer NOT NULL, \"nivel\" varchar NOT NULL, \"instituicao\" varchar NOT NULL, \"banca\" varchar NOT NULL, \"conteudo\" varchar NOT NULL, \"assertiva\" boolean NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"administratorCpf\" varchar, CONSTRAINT \"FK_0f721451f250ce6df4ea9f51a33\" FOREIGN KEY (\"administratorCpf\") REFERENCES \"administrator\" (\"cpf\") ON DELETE NO ACTION ON UPDATE NO ACTION)")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_question\"(\"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\") SELECT \"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\" FROM \"question\"")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"question\"")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_question\" RENAME TO \"question\"")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_notebook\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"userCpf\" varchar, CONSTRAINT \"FK_f53b02e985f220ff232f896d987\" FOREIGN KEY (\"userCpf\") REFERENCES \"user\" (\"cpf\") ON DELETE NO ACTION ON UPDATE NO ACTION)")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_notebook\"(\"id\", \"nome\", \"created_at\", \"userCpf\") SELECT \"id\", \"nome\", \"created_at\", \"userCpf\" FROM \"notebook\"")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"notebook\"")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_notebook\" RENAME TO \"notebook\"")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_simulated\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"qtdquestion\" integer NOT NULL, \"time\" integer NOT NULL, \"userCpf\" varchar, \"administratorCpf\" varchar, CONSTRAINT \"FK_4e2a7aaca65f148166d6149d6d9\" FOREIGN KEY (\"userCpf\") REFERENCES \"user\" (\"cpf\") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT \"FK_94844509f5cdd86702e50b7ed5c\" FOREIGN KEY (\"administratorCpf\") REFERENCES \"administrator\" (\"cpf\") ON DELETE NO ACTION ON UPDATE NO ACTION)")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_simulated\"(\"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\") SELECT \"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\" FROM \"simulated\"")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"simulated\"")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_simulated\" RENAME TO \"simulated\"")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_1a228f2f456f23e2f28a397951\"")];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_83b34d7793df93a29b3136befc\"")];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_notebook_questions_question\" (\"notebookId\" varchar(20) NOT NULL, \"questionId\" varchar(20) NOT NULL, CONSTRAINT \"FK_1a228f2f456f23e2f28a397951c\" FOREIGN KEY (\"notebookId\") REFERENCES \"notebook\" (\"id\") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT \"FK_83b34d7793df93a29b3136befcc\" FOREIGN KEY (\"questionId\") REFERENCES \"question\" (\"id\") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY (\"notebookId\", \"questionId\"))")];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_notebook_questions_question\"(\"notebookId\", \"questionId\") SELECT \"notebookId\", \"questionId\" FROM \"notebook_questions_question\"")];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"notebook_questions_question\"")];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_notebook_questions_question\" RENAME TO \"notebook_questions_question\"")];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_1a228f2f456f23e2f28a397951\" ON \"notebook_questions_question\" (\"notebookId\") ")];
                    case 72:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_83b34d7793df93a29b3136befc\" ON \"notebook_questions_question\" (\"questionId\") ")];
                    case 73:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_de8a5ed626172455aed308ca4b\"")];
                    case 74:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_7a9ff0f9f0e9b093d76d3c2797\"")];
                    case 75:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_user_questions_question\" (\"userCpf\" varchar NOT NULL, \"questionId\" varchar(20) NOT NULL, CONSTRAINT \"FK_de8a5ed626172455aed308ca4b7\" FOREIGN KEY (\"userCpf\") REFERENCES \"user\" (\"cpf\") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT \"FK_7a9ff0f9f0e9b093d76d3c27970\" FOREIGN KEY (\"questionId\") REFERENCES \"question\" (\"id\") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY (\"userCpf\", \"questionId\"))")];
                    case 76:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_user_questions_question\"(\"userCpf\", \"questionId\") SELECT \"userCpf\", \"questionId\" FROM \"user_questions_question\"")];
                    case 77:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user_questions_question\"")];
                    case 78:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_user_questions_question\" RENAME TO \"user_questions_question\"")];
                    case 79:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_questions_question\" ADD \"assertiva\" BOOLEAN NOT NULL")];
                    case 80:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_de8a5ed626172455aed308ca4b\" ON \"user_questions_question\" (\"userCpf\") ")];
                    case 81:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_7a9ff0f9f0e9b093d76d3c2797\" ON \"user_questions_question\" (\"questionId\") ")];
                    case 82:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_56409a92ece912c210a802e3dd\"")];
                    case 83:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_59ded1d94ed8afd012c6d3b641\"")];
                    case 84:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"temporary_simulated_questions_question\" (\"simulatedId\" varchar(20) NOT NULL, \"questionId\" varchar(20) NOT NULL, CONSTRAINT \"FK_56409a92ece912c210a802e3dd2\" FOREIGN KEY (\"simulatedId\") REFERENCES \"simulated\" (\"id\") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT \"FK_59ded1d94ed8afd012c6d3b6414\" FOREIGN KEY (\"questionId\") REFERENCES \"question\" (\"id\") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY (\"simulatedId\", \"questionId\"))")];
                    case 85:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"temporary_simulated_questions_question\"(\"simulatedId\", \"questionId\") SELECT \"simulatedId\", \"questionId\" FROM \"simulated_questions_question\"")];
                    case 86:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"simulated_questions_question\"")];
                    case 87:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"temporary_simulated_questions_question\" RENAME TO \"simulated_questions_question\"")];
                    case 88:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_56409a92ece912c210a802e3dd\" ON \"simulated_questions_question\" (\"simulatedId\") ")];
                    case 89:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_59ded1d94ed8afd012c6d3b641\" ON \"simulated_questions_question\" (\"questionId\") ")];
                    case 90:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelationUserQuestion1615760777846.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_59ded1d94ed8afd012c6d3b641\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_56409a92ece912c210a802e3dd\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"simulated_questions_question\" RENAME TO \"temporary_simulated_questions_question\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"simulated_questions_question\" (\"simulatedId\" varchar(20) NOT NULL, \"questionId\" varchar(20) NOT NULL, PRIMARY KEY (\"simulatedId\", \"questionId\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"simulated_questions_question\"(\"simulatedId\", \"questionId\") SELECT \"simulatedId\", \"questionId\" FROM \"temporary_simulated_questions_question\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_simulated_questions_question\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_59ded1d94ed8afd012c6d3b641\" ON \"simulated_questions_question\" (\"questionId\") ")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_56409a92ece912c210a802e3dd\" ON \"simulated_questions_question\" (\"simulatedId\") ")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_7a9ff0f9f0e9b093d76d3c2797\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_de8a5ed626172455aed308ca4b\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_questions_question\" RENAME TO \"temporary_user_questions_question\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user_questions_question\" (\"userCpf\" varchar NOT NULL, \"questionId\" varchar(20) NOT NULL, PRIMARY KEY (\"userCpf\", \"questionId\"))")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"user_questions_question\"(\"userCpf\", \"questionId\") SELECT \"userCpf\", \"questionId\" FROM \"temporary_user_questions_question\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_user_questions_question\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_7a9ff0f9f0e9b093d76d3c2797\" ON \"user_questions_question\" (\"questionId\") ")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_de8a5ed626172455aed308ca4b\" ON \"user_questions_question\" (\"userCpf\") ")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_83b34d7793df93a29b3136befc\"")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_1a228f2f456f23e2f28a397951\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"notebook_questions_question\" RENAME TO \"temporary_notebook_questions_question\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"notebook_questions_question\" (\"notebookId\" varchar(20) NOT NULL, \"questionId\" varchar(20) NOT NULL, PRIMARY KEY (\"notebookId\", \"questionId\"))")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"notebook_questions_question\"(\"notebookId\", \"questionId\") SELECT \"notebookId\", \"questionId\" FROM \"temporary_notebook_questions_question\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_notebook_questions_question\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_83b34d7793df93a29b3136befc\" ON \"notebook_questions_question\" (\"questionId\") ")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_1a228f2f456f23e2f28a397951\" ON \"notebook_questions_question\" (\"notebookId\") ")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"simulated\" RENAME TO \"temporary_simulated\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"simulated\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"qtdquestion\" integer NOT NULL, \"time\" integer NOT NULL, \"userCpf\" varchar, \"administratorCpf\" varchar)")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"simulated\"(\"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\") SELECT \"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\" FROM \"temporary_simulated\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_simulated\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"notebook\" RENAME TO \"temporary_notebook\"")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"notebook\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"userCpf\" varchar)")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"notebook\"(\"id\", \"nome\", \"created_at\", \"userCpf\") SELECT \"id\", \"nome\", \"created_at\", \"userCpf\" FROM \"temporary_notebook\"")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_notebook\"")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"question\" RENAME TO \"temporary_question\"")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"question\" (\"id\" varchar(20) PRIMARY KEY NOT NULL, \"disciplina\" varchar NOT NULL, \"ano\" integer NOT NULL, \"nivel\" varchar NOT NULL, \"instituicao\" varchar NOT NULL, \"banca\" varchar NOT NULL, \"conteudo\" varchar NOT NULL, \"assertiva\" boolean NOT NULL, \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"administratorCpf\" varchar)")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"question\"(\"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\") SELECT \"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\" FROM \"temporary_question\"")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_question\"")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"administrator\" RENAME TO \"temporary_administrator\"")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"administrator\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"administrator\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"temporary_administrator\"")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_administrator\"")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"simulated\" RENAME TO \"temporary_simulated\"")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"simulated\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()), \"qtdquestion\" integer NOT NULL, \"time\" integer NOT NULL, \"userCpf\" varchar, \"administratorCpf\" varchar)")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"simulated\"(\"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\") SELECT \"id\", \"nome\", \"created_at\", \"qtdquestion\", \"time\", \"userCpf\", \"administratorCpf\" FROM \"temporary_simulated\"")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_simulated\"")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" RENAME TO \"temporary_user\"")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"user\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"temporary_user\"")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_user\"")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"notebook\" RENAME TO \"temporary_notebook\"")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"notebook\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()), \"userCpf\" varchar)")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"notebook\"(\"id\", \"nome\", \"created_at\", \"userCpf\") SELECT \"id\", \"nome\", \"created_at\", \"userCpf\" FROM \"temporary_notebook\"")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_notebook\"")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"question\" RENAME TO \"temporary_question\"")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"question\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"disciplina\" varchar NOT NULL, \"ano\" int NOT NULL, \"nivel\" varchar NOT NULL, \"instituicao\" varchar NOT NULL, \"banca\" varchar NOT NULL, \"conteudo\" varchar NOT NULL, \"assertiva\" boolean NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()), \"administratorCpf\" varchar)")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"question\"(\"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\") SELECT \"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\", \"administratorCpf\" FROM \"temporary_question\"")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_question\"")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"simulated\" RENAME TO \"temporary_simulated\"")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"simulated\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"simulated\"(\"id\", \"nome\", \"created_at\") SELECT \"id\", \"nome\", \"created_at\" FROM \"temporary_simulated\"")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_simulated\"")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"notebook\" RENAME TO \"temporary_notebook\"")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"notebook\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"notebook\"(\"id\", \"nome\", \"created_at\") SELECT \"id\", \"nome\", \"created_at\" FROM \"temporary_notebook\"")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_notebook\"")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"question\" RENAME TO \"temporary_question\"")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"question\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"disciplina\" varchar NOT NULL, \"ano\" int NOT NULL, \"nivel\" varchar NOT NULL, \"instituicao\" varchar NOT NULL, \"banca\" varchar NOT NULL, \"conteudo\" varchar NOT NULL, \"assertiva\" boolean NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"question\"(\"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\") SELECT \"id\", \"disciplina\", \"ano\", \"nivel\", \"instituicao\", \"banca\", \"conteudo\", \"assertiva\", \"created_at\" FROM \"temporary_question\"")];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_question\"")];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"simulated\" RENAME TO \"temporary_simulated\"")];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"simulated\" (\"id\" uuid PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()), \"nome\" varchar NOT NULL, \"qtdquestao\" int NOT NULL, \"tempo\" int NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"simulated\"(\"id\", \"nome\", \"created_at\") SELECT \"id\", \"nome\", \"created_at\" FROM \"temporary_simulated\"")];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_simulated\"")];
                    case 72:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_59ded1d94ed8afd012c6d3b641\"")];
                    case 73:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_56409a92ece912c210a802e3dd\"")];
                    case 74:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"simulated_questions_question\"")];
                    case 75:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_7a9ff0f9f0e9b093d76d3c2797\"")];
                    case 76:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_de8a5ed626172455aed308ca4b\"")];
                    case 77:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user_questions_question\"")];
                    case 78:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_83b34d7793df93a29b3136befc\"")];
                    case 79:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_1a228f2f456f23e2f28a397951\"")];
                    case 80:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"notebook_questions_question\"")];
                    case 81:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"administrator\" RENAME TO \"temporary_administrator\"")];
                    case 82:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"administrator\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 83:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"administrator\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"temporary_administrator\"")];
                    case 84:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_administrator\"")];
                    case 85:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" RENAME TO \"temporary_user\"")];
                    case 86:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"cpf\" varchar PRIMARY KEY NOT NULL, \"nome\" varchar NOT NULL, \"telefone\" varchar NOT NULL, \"email\" varchar NOT NULL, \"senha\" varchar NOT NULL, \"created_at\" timestamp NOT NULL DEFAULT (now()))")];
                    case 87:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO \"user\"(\"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\") SELECT \"cpf\", \"nome\", \"telefone\", \"email\", \"senha\", \"created_at\" FROM \"temporary_user\"")];
                    case 88:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"temporary_user\"")];
                    case 89:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RelationUserQuestion1615760777846;
}());
exports.RelationUserQuestion1615760777846 = RelationUserQuestion1615760777846;
