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
exports.deleteMember = exports.deleteTaskHandler = exports.putTask = exports.getTask = exports.getTasks = exports.postTask = void 0;
const tasksController_1 = require("../../controllers/tasks/tasksController");
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newTask = yield (0, tasksController_1.createNewTask)(body);
        res.status(200).json(newTask);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postTask = postTask;
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.params;
        const tasks = yield (0, tasksController_1.getAllTasks)(projectId);
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const task = yield (0, tasksController_1.getTaskById)(id);
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getTask = getTask;
const putTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const taskUpdated = yield (0, tasksController_1.updateTask)(id, body);
        res.status(200).json(taskUpdated);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.putTask = putTask;
const deleteTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskId } = req.params;
        const deletedTask = yield (0, tasksController_1.deleteTaskController)(taskId);
        res.status(200).json(deletedTask);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteTaskHandler = deleteTaskHandler;
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskId } = req.params;
        const { userId } = req.query;
        const userDeleted = yield (0, tasksController_1.removeMemberOfTask)(userId, taskId);
        res.status(200).json(userDeleted);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteMember = deleteMember;
//# sourceMappingURL=tasksHandler.js.map