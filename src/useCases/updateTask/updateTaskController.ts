import { Request, Response } from "express";
import { ShowTaskService } from "../showTask/showTaskService";
import {
  IUpdateDTO,
  IUpdateTaskController,
} from "../../repositories/updateTaskRepository";
import { UpdateTaskService } from "./updateTaskService";
import TaskModel from "../../entities/Task/TaskModel";

class UpdateTaskController implements IUpdateTaskController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const service = new UpdateTaskService(TaskModel);
    const showService = new ShowTaskService(TaskModel);
    const data: IUpdateDTO = {};

    try {
      const foundedTask: any = await showService.execute(request.params.id);
      if (!foundedTask) {
        return response.status(400).json({ error: "Tarefa nâo encontrada!" });
      }
      data.description = validateField(
        request.body.description,
        foundedTask.description
      );
      data.done = validateField(request.body.done, foundedTask.done);
      const updatedTask = await service.execute(foundedTask._id, data);
      return response.status(200).json(updatedTask);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }
}

function validateField(enterValue: any, compareValue: any) {
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
}

export { UpdateTaskController };
