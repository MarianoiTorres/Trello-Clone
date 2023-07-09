import { User } from "../../interfaces/user";
import UserModel from "../../models/usersModel";

const createUser = async (body: User) => {
  const newUserCreated = await UserModel.create(body);
  return newUserCreated;
};

const loginUser = async (body: User) => {
  const user = await UserModel.findOne({
    email: body.email,
  });
  if (!user) return { message: "email o password incorrectos" };
  return user;
};

export { createUser, loginUser };
