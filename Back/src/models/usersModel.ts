import { Schema, Types, model, Model } from "mongoose";

const userSchema = new Schema({
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
    }
}, {
    timestamps: true,
    versionKey: false,
})

const UserModel = model('users', userSchema)

export default UserModel

