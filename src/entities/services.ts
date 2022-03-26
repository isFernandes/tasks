import { Schema } from "mongoose";
import { ITask } from "./TaskModel";

export interface IService {
  create(payload: any): Promise<any>;
  delete(id: string): Promise<any>;
  getAll(): Promise<any>;
  getById(id: string): Promise<any>;
  update(id: string, payload: any): Promise<any>;
}

export interface ITaskService extends IService {
  changeAllTasks(done: boolean): Promise<ITask[]>;
}
