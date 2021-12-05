import TaskModel from "../../entities/Task/TaskModel";
import { ICreateTask } from "../../repositories/createTaskRepository";

class CreateTaskService implements ICreateTask {
  async execute(description:string, done:boolean = false){
    return await TaskModel.create({ description, done });
  }
}

export {CreateTaskService}