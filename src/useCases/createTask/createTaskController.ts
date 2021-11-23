import { Request, Response } from "express";
import { ICreateTaskController } from "./createTaskInterface";
import { CreateTaskService } from "./createTaskService";

class CreateTaskController implements ICreateTaskController{

 service = new CreateTaskService()

 async handle(request:Request, response:Response){
  const { description, done } = request.body;
  try {
    const createdTask = await this.service.execute(description, done);
    return response.json(createdTask);
  } catch (error) {
    return response.status(200).json(error);
  }
 }
}

export { CreateTaskController}