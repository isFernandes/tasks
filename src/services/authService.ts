import jwt from "jsonwebtoken";

const config = require("../config/auth.config");
import { IUser } from "../entities/UserModel";
import { IAuthRepository } from "../entities/repositories";
import { PasswordService } from "./passwordService";
import { UserService } from "./userService";

//instanciando classe
const userService = new UserService();
const passService = new PasswordService();
const ONE_DAY = 86400;
export class AuthService implements IAuthRepository {
  //cadastro do usuario
  async singup(singupData: IUser) {
    const { password } = singupData;

    singupData.password = await passService.hashPassword(password, 10);

    await userService.create(singupData);
  }

  async singin(email: string, password: string) {
    const foundUser = await userService.findByEmail(email);

    if (!foundUser) {
      throw new Error("User not founded!");
    }

    const passIsValid = await passService.comparePassword(
      password,
      foundUser.password
    );

    if (!passIsValid) {
      throw new Error("Credentials is not valid");
    }

    const dataToken = {
      id: foundUser._id,
      email: foundUser.email,
      name: foundUser.name,
    };

    const token = jwt.sign(dataToken, config.secret, { expiresIn: ONE_DAY });

    return {
      token,
    };
  }
}
