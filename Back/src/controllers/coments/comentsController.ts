import { Coment } from "../../interfaces/coment";
import ComentModel from "../../models/comentModel";
import QueryString from "qs";
import TaskModel from "../../models/taskModel";
import ProjectModel from "../../models/projectModel";
import ListModel from "../../models/listOfTaskModel";

const createNewComent = async (body: Coment) => {
  const newComent = await ComentModel.create(body);
  return newComent;
};

const updateComent = async (id: string, body: Coment) => {
  const comentUpdated = await ComentModel.updateOne(
    { $and: [{ _id: id }, { userId: body.userId }] },
    body
  );
  return comentUpdated;
};

const deleteComentCtrl = async (
  id: string,
  userId:
    | string
    | QueryString.ParsedQs
    | string[]
    | QueryString.ParsedQs[]
    | undefined
) => {

  const comentDeleted = await ComentModel.deleteOne({
    $and: [{ _id: id }, { userId: userId }],
  });
  return comentDeleted;
};

const getAllComents = async (userId: string) => {
  const coments = await TaskModel.find({
    $or: [
      {
        member: userId,
        coments: { $exists: true, $not: { $size: 0 } },
      },
      {
        member: userId,
        deadline: { $exists: true },
      },
    ],
  })
    .populate({ path: "coments", model: ComentModel })
    .populate({ path: "projectId", model: ProjectModel })
    .populate({ path: "listId", model: ListModel });
  return coments;
};

export { createNewComent, updateComent, deleteComentCtrl, getAllComents };
