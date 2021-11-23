import { Request, Response } from "express";
import { ITask } from "../../Entities/Task/ITask";
import { ChangeAllTaskService } from "./changeAllTaskService";

export interface IChangeAllTask {
  execute(done:boolean): Promise<ITask[]> 
}

export interface IChangeAllTaskController {
  service: ChangeAllTaskService;
  handle(request:Request, response:Response): Promise<any>
}