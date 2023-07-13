import { Coment } from "../../interfaces/coment";
import ComentModel from "../../models/comentModel";
import QueryString from "qs";

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
    console.log(id);
    
  const comentDeleted = await ComentModel.deleteOne({
    $and: [{ _id: id }, { userId: userId }],
  });
  return comentDeleted;
};

export { createNewComent, updateComent, deleteComentCtrl };
