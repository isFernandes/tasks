import { Request, Response } from "express";
import { ITask } from "../../Entities/Task/ITask";
import { CreateTaskService } from "./createTaskService";

export interface ICreateTask {
  execute(description:string, done:boolean): Promise<ITask> 
}

export interface ICreateTaskController {
  service: CreateTaskService;
  handle(request:Request, response:Response): Promise<any>
}