import { Request, Response } from "express";
import { ICreateTaskController } from "../../repositories/createTaskRepository";
import { CreateTaskService } from "./createTaskService";

class CreateTaskController implements ICreateTaskController{
  
 async handle(request:Request, response:Response){
   const service = new CreateTaskService();
  const { description, done } = request.body;
  try {
    const createdTask = await service.execute(description, done);
    return response.status(201).json(createdTask);
  } catch (error:any) {
    return response.status(400).json({error: error.message});
  }
 }
}

export { CreateTaskController}