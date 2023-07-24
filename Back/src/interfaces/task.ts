import mongoose from "mongoose";

export interface Task {
  projectId: mongoose.Types.ObjectId;
  listId: mongoose.Types.ObjectId;
  name: String;
  description: String;
  state: String;
  priority: String;
  deadline: String;
  member: mongoose.Types.ObjectId[];
  coments: mongoose.Types.ObjectId[];
}
