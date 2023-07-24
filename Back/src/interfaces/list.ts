import mongoose from "mongoose";

export interface List { 
    projectId: mongoose.Types.ObjectId;
    name: string
}