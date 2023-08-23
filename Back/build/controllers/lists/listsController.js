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
exports.deleteListController = exports.updateList = exports.getAllLists = exports.createNewList = void 0;
const listOfTaskModel_1 = __importDefault(require("../../models/listOfTaskModel"));
const taskModel_1 = __importDefault(require("../../models/taskModel"));
const createNewList = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield listOfTaskModel_1.default.findOne({
        projectId: body.projectId,
        name: body.name
    });
    if ((list === null || list === void 0 ? void 0 : list.name) === body.name)
        return { message: 'esta lista ya existe' };
    const newList = yield listOfTaskModel_1.default.create(body);
    const listForFront = {
        _id: newList._id,
        projectId: newList.projectId,
        name: newList.name
    };
    return listForFront;
});
exports.createNewList = createNewList;
const getAllLists = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    const allLists = yield listOfTaskModel_1.default.find({
        projectId: projectId
    }).exec();
    const lists = allLists.map(list => {
        return {
            _id: list._id,
            projectId: list.projectId,
            name: list.name,
        };
    });
    return lists;
});
exports.getAllLists = getAllLists;
const updateList = (body, listId) => __awaiter(void 0, void 0, void 0, function* () {
    yield listOfTaskModel_1.default.updateOne({ _id: listId }, { name: body.name });
    const tasksUpdated = yield taskModel_1.default.updateMany({ listId: listId }, { state: body.name });
    return tasksUpdated;
});
exports.updateList = updateList;
const deleteListController = (listId) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield listOfTaskModel_1.default.deleteOne({ _id: listId });
    return deleted;
});
exports.deleteListController = deleteListController;
//# sourceMappingURL=listsController.js.map