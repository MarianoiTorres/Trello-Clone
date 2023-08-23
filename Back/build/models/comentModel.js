"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const comentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,
    },
    taskId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "TaskModel",
        required: true,
    },
    coment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ComentModel = (0, mongoose_1.model)("coments", comentSchema);
exports.default = ComentModel;
//# sourceMappingURL=comentModel.js.map