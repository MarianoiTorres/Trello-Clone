"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const listSchema = new mongoose_1.Schema({
    projectId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "ProjectModel",
        required: true,
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
const ListModel = (0, mongoose_1.model)("lists", listSchema);
exports.default = ListModel;
//# sourceMappingURL=listOfTaskModel.js.map