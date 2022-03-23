import { Request, Response } from "express";
import TaskModel from "../../entities/Task/TaskModel";
import { IDeleteTaskController } from "../../repositories/deleteTaskRepository";
import { DeleteTaskService } from "./deleteTaskService";

class DeleteTaskController implements IDeleteTaskController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const service = new DeleteTaskService(TaskModel);
    try {
      await service.execute(request.params.id);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { DeleteTaskController };
