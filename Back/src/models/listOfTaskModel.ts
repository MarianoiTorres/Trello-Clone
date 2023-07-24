import { Schema, model } from "mongoose";

const listSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "ProjectModel",
      required: true,
    },
    name: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ListModel = model("lists", listSchema);

export default ListModel;
