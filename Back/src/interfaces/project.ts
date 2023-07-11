import mongoose from "mongoose";

export interface Project {
    name: string,
    members: mongoose.Types.ObjectId[]
}