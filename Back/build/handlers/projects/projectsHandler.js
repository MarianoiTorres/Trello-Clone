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
exports.updateBackground = exports.getProjectByName = exports.getProjectRecently = exports.deleteUser = exports.putProject = exports.deleteProject = exports.postProject = exports.getProject = exports.getProjects = void 0;
const projectsController_1 = require("../../controllers/projects/projectsController");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "djdqwkavb",
    api_key: "393591969385325",
    api_secret: "aaS4z3Sw2F3KmMQYVkmfDZBoL7k",
});
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // id del usuario
        console.log('llegue handler');
        const projects = yield (0, projectsController_1.getAllProjects)(id);
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProjects = getProjects;
const getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // id del proyecto
        const project = yield (0, projectsController_1.getProjectById)(id);
        res.status(200).json(project);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProject = getProject;
const postProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newProject = yield (0, projectsController_1.createNewProject)(body);
        res.status(200).json(newProject);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postProject = postProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userId } = req.query;
        const projectDeleted = yield (0, projectsController_1.deleteProjectCtrl)(id, userId);
        res.status(200).json(projectDeleted);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteProject = deleteProject;
const putProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const projectUpdated = yield (0, projectsController_1.addMemberProject)(id, userId);
        res.status(200).json(projectUpdated);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.putProject = putProject;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const userDeleted = yield (0, projectsController_1.deleteUserOfProject)(id, userId);
        res.status(200).json(userDeleted);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
const getProjectRecently = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectsId = req.query.id;
        const projects = yield (0, projectsController_1.projectsRecently)(projectsId);
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProjectRecently = getProjectRecently;
const getProjectByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const project = yield (0, projectsController_1.getProjectController)(name);
        res.status(200).json(project);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProjectByName = getProjectByName;
const updateBackground = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        if (body.background.includes('base64')) {
            const uploadedResponse = yield cloudinary_1.v2.uploader.upload(body.background);
            body.background = `url(${uploadedResponse.secure_url})`;
        }
        const updatedBackground = yield (0, projectsController_1.changeBackground)(id, body);
        const updated = Object.assign(Object.assign({}, updatedBackground), { background: body.background });
        return res.status(200).json(updated);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateBackground = updateBackground;
//# sourceMappingURL=projectsHandler.js.map