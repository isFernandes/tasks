import { ITask } from "./UserModel";

export interface IService {
  create(payload: any): Promise<any>;
  delete(id: string): Promise<any>;
  getAll(): Promise<any>;
  getById(id: string): Promise<any>;
  update(id: string, payload: any): Promise<any>;
}

export interface ITaskService {
  changeAllTasks(userId: string, done: boolean): Promise<ITask[]>;
  create(userId: string, payload: any): Promise<any>;
  delete(userId: string, id: string): Promise<any>;
  getAll(userId: string): Promise<any>;
  getById(userId: string, id: string): Promise<any>;
  update(userId: string, payload: any): Promise<any>;
}

import { IUser } from "./UserModel";
export interface IUserService extends IService {
  findByEmail(email: string): Promise<IUser | null>;
  findOne(filter: object): Promise<IUser | null>;
}

export interface IPasswordService {
  recoveryPassword(email: string): Promise<void>;
  updatePassword(newPass: string): Promise<void>;
  hashPassword(pass: string, numberHash: number): Promise<string>;
  comparePassword(sendPass: string, existingPass: string): Promise<boolean>;
}
