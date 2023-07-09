import { Request, Response } from "express";
import { createUser } from "../controllers/usersController";

const postUserHandler = async (req: Request, res: Response, errorRaw?: any) => {
  try {
    const { body } = req;
    const newUser = await createUser(body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({error});
  }
};

export { postUserHandler };
