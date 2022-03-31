import { Request, Response } from "express";
import { ITasksController } from "../entities/controllers";
import { ITask } from "../entities/UserModel";
import { TaskService } from "../services/taskService";

const taskService = new TaskService();
class TasksController implements ITasksController {
  async changeAll(request: Request, response: Response) {
    const { userId } = request.params;
    try {
      await taskService.changeAllTasks(userId, request.body.done);
      const allTasks = await taskService.getAll(userId);
      return response.status(200).json(allTasks);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async create(request: Request, response: Response) {
    const { userId } = request.params;
    try {
      const createdTask = await taskService.create(userId, request.body);
      return response.status(201).json(createdTask);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }

  async delete(request: Request, response: Response) {
    const { userId } = request.params;
    try {
      await taskService.delete(userId, request.params.id);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async getAll(request: Request, response: Response) {
    const { userId } = request.params;
    try {
      const allTasks = await taskService.getAll(userId);
      return response.status(200).json(allTasks);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async getById(request: Request, response: Response) {
    const { userId, id } = request.params;
    try {
      const foundedTask = await taskService.getById(userId, id);
      return response.status(200).json(foundedTask);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async update(request: Request, response: Response) {
    const { userId } = request.params;
    try {
      const updatedTask = await taskService.update(userId, request.body);
      return response.status(200).json(updatedTask);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export { TasksController };
