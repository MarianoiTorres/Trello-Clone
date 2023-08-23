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
exports.getAllComents = exports.deleteComentCtrl = exports.updateComent = exports.createNewComent = void 0;
const comentModel_1 = __importDefault(require("../../models/comentModel"));
const taskModel_1 = __importDefault(require("../../models/taskModel"));
const projectModel_1 = __importDefault(require("../../models/projectModel"));
const listOfTaskModel_1 = __importDefault(require("../../models/listOfTaskModel"));
const createNewComent = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const newComent = yield comentModel_1.default.create(body);
    return newComent;
});
exports.createNewComent = createNewComent;
const updateComent = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const comentUpdated = yield comentModel_1.default.updateOne({ $and: [{ _id: id }, { userId: body.userId }] }, body);
    return comentUpdated;
});
exports.updateComent = updateComent;
const deleteComentCtrl = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const comentDeleted = yield comentModel_1.default.deleteOne({
        $and: [{ _id: id }, { userId: userId }],
    });
    return comentDeleted;
});
exports.deleteComentCtrl = deleteComentCtrl;
const getAllComents = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const coments = yield taskModel_1.default.find({
        $or: [
            {
                member: userId,
                coments: { $exists: true, $not: { $size: 0 } },
            },
            {
                member: userId,
                deadline: { $exists: true },
            },
        ],
    })
        .populate({ path: "coments", model: comentModel_1.default })
        .populate({ path: "projectId", model: projectModel_1.default })
        .populate({ path: "listId", model: listOfTaskModel_1.default });
    return coments;
});
exports.getAllComents = getAllComents;
//# sourceMappingURL=comentsController.js.map