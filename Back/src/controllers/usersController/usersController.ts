import { User } from "../../interfaces/user";
import UserModel from "../../models/usersModel";
import { encrypt, verify } from "../../utils/passwordHandle";

const createUser = async (body: User) => {
  const userFound = await UserModel.findOne({email: body.email})
  if(userFound) return "Este usuario ya existe"
  const passwordHash = await encrypt(body.password)
  const newUserCreated = await UserModel.create({...body, password: passwordHash});
  return newUserCreated;
};

const loginUser = async (body: User) => {
  const user = await UserModel.findOne({
    email: body.email,
  });
  if (!user) return { message: "usuario no registrado" };
  const passwordCompare = await verify(body.password, user.password)
  if(!passwordCompare) return { message: "password incorrecto"}
  return user;
};

export { createUser, loginUser };
