import { Request, Response } from "express";
import { Schema} from "mongoose";
import { ITask } from "../entities/Task/ITask";

export interface IUpdateTask {
  execute(id: Schema.Types.ObjectId | string, updateData: IUpdateDTO): Promise<ITask | null> 
}

export interface IUpdateTaskController {
  handle(request:Request, response:Response): Promise<any>
}

export interface IUpdateDTO {
  description?:string;
  done?:boolean;
}