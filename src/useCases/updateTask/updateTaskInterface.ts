import { Request, Response } from "express";
import { Schema} from "mongoose";
import { ITask } from "../../Entities/Task/ITask";
import { UpdateTaskService } from "./updateTaskService";

export interface IUpdateTask {
  execute(id: Schema.Types.ObjectId | string, updateData: IUpdateData): Promise<ITask | null> 
}

export interface IUpdateTaskController {
  handle(request:Request, response:Response): Promise<any>
}

export interface IUpdateData {
  description?:string;
  done?:boolean;
}