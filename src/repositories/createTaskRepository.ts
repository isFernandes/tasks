import { Request, Response } from "express";
import { ITask } from "../entities/Task/ITask";

export interface ICreateTask {
  execute(description:string, done:boolean): Promise<ITask> 
}

export interface ICreateTaskController {
  handle(request:Request, response:Response): Promise<any>
}