"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    userCreator: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    member: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'UserModel'
        }],
    background: {
        type: String,
        default: 'linear-gradient(to bottom right, rgb(236, 242, 245), rgb(236, 242, 245))'
    }
}, {
    timestamps: true,
    versionKey: false
});
const ProjectModel = (0, mongoose_1.model)("project", projectSchema);
exports.default = ProjectModel;
//# sourceMappingURL=projectModel.js.map