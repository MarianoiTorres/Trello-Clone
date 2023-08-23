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
exports.removeMemberOfTask = exports.deleteTaskController = exports.updateTask = exports.getTaskById = exports.getAllTasks = exports.createNewTask = void 0;
const taskModel_1 = __importDefault(require("../../models/taskModel"));
const comentModel_1 = __importDefault(require("../../models/comentModel"));
const projectModel_1 = __importDefault(require("../../models/projectModel"));
const usersModel_1 = __importDefault(require("../../models/usersModel"));
const listOfTaskModel_1 = __importDefault(require("../../models/listOfTaskModel"));
const createNewTask = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = yield taskModel_1.default.create(body);
    return newTask;
});
exports.createNewTask = createNewTask;
const getAllTasks = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    const allTasks = yield taskModel_1.default.find({ projectId }).populate({ path: 'projectId', model: projectModel_1.default }).populate({ path: 'member', model: usersModel_1.default }).sort({ updatedAt: -1 }).exec();
    return allTasks;
});
exports.getAllTasks = getAllTasks;
const getTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield taskModel_1.default.findById(id).populate({ path: 'coments', model: comentModel_1.default, populate: {
            path: 'userId', model: usersModel_1.default
        } }).populate({ path: 'projectId', model: projectModel_1.default }).populate({ path: 'listId', model: listOfTaskModel_1.default }).populate({ path: 'member', model: usersModel_1.default });
    return task;
});
exports.getTaskById = getTaskById;
const updateTask = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    if (body.coments) {
        const comentsUpdated = yield taskModel_1.default.updateOne({ _id: id }, { $push: { coments: body.coments[0] } });
        return comentsUpdated;
    }
    else {
        const taskUpdated = yield taskModel_1.default.findByIdAndUpdate(id, body, { new: true }).populate({ path: 'member', model: usersModel_1.default });
        return taskUpdated;
    }
});
exports.updateTask = updateTask;
const deleteTaskController = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedTask = yield taskModel_1.default.deleteOne({ _id: taskId });
    return deletedTask;
});
exports.deleteTaskController = deleteTaskController;
const removeMemberOfTask = (userId, taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield taskModel_1.default.findByIdAndUpdate(taskId, { $pull: { member: userId } });
    return user;
});
exports.removeMemberOfTask = removeMemberOfTask;
//# sourceMappingURL=tasksController.js.map