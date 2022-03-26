import { NextFunction, Request, Response } from "express";
import { TaskRepository } from "../repositories/taskRepository";
import { Service } from "../services/service";

const userService = new TaskRepository();

const checkDuplicateUsernameOrEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const foundUserByName = await userService.getOne({
      name: request.body.name,
    });

    const foundUserByEmail = await userService.getOne({
      email: request.body.email,
    });

    if (foundUserByName) {
      return response.status(400).send({
        message: `Falha! Nome de usuário já existente! : ${request.body.username}`,
      });
    }

    if (foundUserByEmail) {
      return response
        .status(400)
        .send({ message: "Falha! Email já encontra em uso!" });
    }

    next();
  } catch (err) {
    return response.status(500).send({ message: err });
  }
};

export { checkDuplicateUsernameOrEmail };
