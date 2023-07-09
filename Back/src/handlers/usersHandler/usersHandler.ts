import { Request, Response } from "express";
import { createUser, loginUser } from "../../controllers/usersController/usersController";

const postUserHandler = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newUser = await createUser(body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({error});
  }
};

const loginUserHandler = async(req: Request, res: Response) => {
  try {
    const {body} = req
    const user = await loginUser(body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

export { postUserHandler, loginUserHandler };
