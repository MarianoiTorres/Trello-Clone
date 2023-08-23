"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        required: true
    },
    projectsRecentlyView: [{
            type: String,
        }]
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)('users', userSchema);
exports.default = UserModel;
//# sourceMappingURL=usersModel.js.map