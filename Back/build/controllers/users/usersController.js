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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProjectId = exports.loginUser = exports.createUser = void 0;
const usersModel_1 = __importDefault(require("../../models/usersModel"));
const passwordHandle_1 = require("../../utils/passwordHandle");
const createUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield usersModel_1.default.findOne({ email: body.email });
    if (userFound)
        return "Este usuario ya existe";
    const passwordHash = yield (0, passwordHandle_1.encrypt)(body.password);
    const newUserCreated = yield usersModel_1.default.create(Object.assign(Object.assign({}, body), { password: passwordHash }));
    return newUserCreated;
});
exports.createUser = createUser;
const loginUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield usersModel_1.default.findOne({
        email: body.email,
    });
    if (!user)
        return { message: "usuario no registrado" };
    const passwordCompare = yield (0, passwordHandle_1.verify)(body.password, user.password);
    if (!passwordCompare)
        return { message: "password incorrecto" };
    return user;
});
exports.loginUser = loginUser;
const addProjectId = (projectId, body) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield usersModel_1.default.updateOne({ _id: body.userId }, {
        $addToSet: {
            projectsRecentlyView: projectId,
            $slice: -3
        }
    });
    return updated;
});
exports.addProjectId = addProjectId;
//# sourceMappingURL=usersController.js.map