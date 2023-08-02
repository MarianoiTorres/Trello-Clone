import mongoose from "mongoose";

export interface Invitation {
    projectId: mongoose.Types.ObjectId,
    userCreator: mongoose.Types.ObjectId,
}