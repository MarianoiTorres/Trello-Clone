"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    projectId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "ProjectModel",
        required: true,
    },
    listId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'ListModel',
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    state: {
        type: String,
    },
    priority: {
        type: String,
    },
    deadline: {
        type: Date,
    },
    member: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'UserModel'
        }],
    coments: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'ComentModel'
        }]
}, {
    timestamps: true,
    versionKey: false
});
const TaskModel = (0, mongoose_1.model)("task", taskSchema);
exports.default = TaskModel;
//# sourceMappingURL=taskModel.js.map