import mongoose from "mongoose";

export interface Coment {
    userId: mongoose.Types.ObjectId;
    taskId: mongoose.Types.ObjectId;
    coment: string;
}