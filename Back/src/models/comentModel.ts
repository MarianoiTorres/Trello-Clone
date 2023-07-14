import { model, Schema } from "mongoose";

const comentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
    taskId: {
      type: Schema.Types.ObjectId,
      ref: "TaskModel",
      required: true,
    },
    coment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ComentModel = model("coments", comentSchema);

export default ComentModel;
