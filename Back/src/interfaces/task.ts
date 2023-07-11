import mongoose from "mongoose";

export interface Task {
  projectId: mongoose.Types.ObjectId;
  name: String;
  description: String;
  state: String;
  priority: String;
  member: mongoose.Types.ObjectId[];
}
