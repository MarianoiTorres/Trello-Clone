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
exports.router = void 0;
const express_1 = require("express");
const projectsHandler_1 = require("../handlers/projects/projectsHandler");
const verifyTokenInvitation_1 = __importDefault(require("../utils/verifyTokenInvitation"));
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send('holaaa');
}));
router.get("/projects/:id", projectsHandler_1.getProjects);
router.put('/background/:id', projectsHandler_1.updateBackground);
router.get('/recently', projectsHandler_1.getProjectRecently);
router.get('/', projectsHandler_1.getProjectByName);
router.get("/:id", projectsHandler_1.getProject);
router.post("/", projectsHandler_1.postProject);
router.delete("/:id", projectsHandler_1.deleteProject);
router.put('/:id', verifyTokenInvitation_1.default, projectsHandler_1.putProject);
router.put('/deleteUser/:id', projectsHandler_1.deleteUser);
//# sourceMappingURL=project.js.map