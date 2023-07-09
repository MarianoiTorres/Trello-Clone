import { User } from "../interfaces/user";
import UserModel from "../models/usersModel";

const createUser = async (body: User) => {
    console.log(body);
    
  const newUser = await UserModel.create({
    name: body.name,
  });
  return newUser;
};

export { createUser };
