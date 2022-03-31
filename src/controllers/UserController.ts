import { Request, Response } from "express";
import { IUserController } from "../entities/controllers";
import { ITask } from "../entities/UserModel";
import { UserService } from "../services/userService";

const userService = new UserService();
class UserController implements IUserController {
  async create(request: Request, response: Response) {
    try {
      const createdTask = await userService.create(request.body);
      return response.status(201).json(createdTask);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      await userService.delete(request.params.id);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const allTasks = await userService.getAll();
      return response.status(200).json(allTasks);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const foundedTask = await userService.getById(request.params.id);
      return response.status(200).json(foundedTask);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async update(request: Request, response: Response) {
    const data: ITask = {};

    try {
      const foundedTask: any = await userService.getById(request.params.id);
      if (!foundedTask) {
        return response.status(400).json({ error: "Tarefa nâo encontrada!" });
      }
      data.description = this.validateField(
        request.body.description,
        foundedTask.description
      );
      data.done = this.validateField(request.body.done, foundedTask.done);
      const updatedTask = await userService.update(foundedTask._id, data);
      return response.status(200).json(updatedTask);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  private validateField = (enterValue: any, compareValue: any) => {
    if (
      enterValue !== compareValue &&
      enterValue !== null &&
      enterValue !== undefined &&
      enterValue !== "" &&
      enterValue !== " "
    ) {
      return enterValue;
    }
    return compareValue;
  };
}

export { UserController };
