import { IUser, ITask } from "./UserModel";

export interface IRepositories {
  create(payload: any): Promise<any>;
  delete(id: string): Promise<any>;
  getAll(): Promise<any>;
  getById(id: string): Promise<any>;
  update(id: string, payload: any): Promise<any>;
}

export interface ITaskRepository extends IRepositories {
  changeAllTasks(done: boolean): Promise<ITask[]>;
}

export interface IAuthRepository {
  singup(singupData: IUser): Promise<void>;
  singin(email: string, password: string): Promise<object>;
}

export interface IUserRepository extends IRepositories {
  findByEmail(email: string): Promise<IUser | null>;
  findOne(filter: object): Promise<IUser | null>;
}
