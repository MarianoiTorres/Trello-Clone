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
exports.deleteList = exports.putList = exports.getLists = exports.postList = void 0;
const listsController_1 = require("../../controllers/lists/listsController");
const postList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newList = yield (0, listsController_1.createNewList)(body);
        res.status(200).json(newList);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postList = postList;
const getLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.params;
        const allLists = yield (0, listsController_1.getAllLists)(projectId);
        res.status(200).json(allLists);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getLists = getLists;
const putList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { listId } = req.params;
        const { body } = req;
        const updatedList = yield (0, listsController_1.updateList)(body, listId);
        res.status(200).json(updatedList);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.putList = putList;
const deleteList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { listId } = req.params;
        const listDeleted = yield (0, listsController_1.deleteListController)(listId);
        res.status(200).json(listDeleted);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteList = deleteList;
//# sourceMappingURL=listsHandler.js.map