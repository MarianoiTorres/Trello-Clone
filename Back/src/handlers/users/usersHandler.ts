import { Request, Response } from "express";
import { createUser, loginUser, addProjectId } from '../../controllers/users/usersController' 

const postUserHandler = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newUser = await createUser(body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const loginUserHandler = async(req: Request, res: Response) => {
  try {
    const {body} = req
    const user = await loginUser(body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
}

const updateUser = async(req: Request, res: Response) => {
  try {
    const { projectId } = req.params
    const {body} = req
    const projectUpdated = await addProjectId(projectId, body)
    res.status(200).json(projectUpdated)
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
}

export { postUserHandler, loginUserHandler, updateUser };
