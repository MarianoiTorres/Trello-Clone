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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.loginUserHandler = exports.postUserHandler = void 0;
const usersController_1 = require("../../controllers/users/usersController");
const postUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newUser = yield (0, usersController_1.createUser)(body);
        res.status(200).json(newUser);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postUserHandler = postUserHandler;
const loginUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const user = yield (0, usersController_1.loginUser)(body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.loginUserHandler = loginUserHandler;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.params;
        const { body } = req;
        const projectUpdated = yield (0, usersController_1.addProjectId)(projectId, body);
        res.status(200).json(projectUpdated);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=usersHandler.js.map