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
exports.changeBackground = exports.getProjectController = exports.projectsRecently = exports.deleteUserOfProject = exports.addMemberProject = exports.deleteProjectCtrl = exports.createNewProject = exports.getProjectById = exports.getAllProjects = void 0;
const projectModel_1 = __importDefault(require("../../models/projectModel"));
const usersModel_1 = __importDefault(require("../../models/usersModel"));
const taskModel_1 = __importDefault(require("../../models/taskModel"));
const getAllProjects = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId + '=======================');
    const allProjects = yield projectModel_1.default.find({
        member: { $in: [userId] }, // in = que dentro del array de member este userId
    }).exec(); //exec convierte la consulta en un array
    console.log(allProjects);
    return allProjects;
});
exports.getAllProjects = getAllProjects;
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield projectModel_1.default.findOne({ _id: id }).populate({ path: 'userCreator', model: usersModel_1.default }).populate({ path: 'member', model: usersModel_1.default });
    return project;
});
exports.getProjectById = getProjectById;
const createNewProject = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const newProject = yield projectModel_1.default.create(body);
    return newProject;
});
exports.createNewProject = createNewProject;
const deleteProjectCtrl = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield projectModel_1.default.findOne({ _id: id });
    if ((project === null || project === void 0 ? void 0 : project.userCreator.toString()) === userId) {
        const projectDeleted = yield projectModel_1.default.deleteOne({ _id: id });
        const tasksDeleted = yield taskModel_1.default.deleteMany({ projectId: id });
        return projectDeleted;
    }
    else {
        return { message: "solo el creador del proyecto puede eliminarlo" };
    }
});
exports.deleteProjectCtrl = deleteProjectCtrl;
const addMemberProject = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const projectUpdated = yield projectModel_1.default.updateOne({ _id: id }, { $push: { member: userId } });
    return projectUpdated;
});
exports.addMemberProject = addMemberProject;
const deleteUserOfProject = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userDeleted = yield projectModel_1.default.updateOne({ _id: id }, { $pull: { member: userId } });
    return userDeleted;
});
exports.deleteUserOfProject = deleteUserOfProject;
const projectsRecently = (projects) => __awaiter(void 0, void 0, void 0, function* () {
    const projectsRecent = yield projectModel_1.default.find({
        _id: projects
    }).exec();
    return projectsRecent;
});
exports.projectsRecently = projectsRecently;
const getProjectController = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield projectModel_1.default.find({ name: name });
    return project;
});
exports.getProjectController = getProjectController;
const changeBackground = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBackground = yield projectModel_1.default.updateOne({ _id: id }, { background: body.background });
    return updatedBackground;
});
exports.changeBackground = changeBackground;
//# sourceMappingURL=projectsController.js.map