import { Request, Response } from "express";
import {
  createNewComent,
  deleteComentCtrl,
  getAllComents,
  updateComent,
} from "../../controllers/coments/comentsController";

const postComent = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newComent = await createNewComent(body);
    res.status(200).json(newComent);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const putComent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const comentUpdated = await updateComent(id, body);
    res.status(200).json(comentUpdated);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const deleteComent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;
    const comentDeleted = await deleteComentCtrl(id, userId);
    res.status(200).json(comentDeleted);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getComents = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const coments = await getAllComents(userId)
    res.status(200).json(coments);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { postComent, putComent, deleteComent, getComents };
