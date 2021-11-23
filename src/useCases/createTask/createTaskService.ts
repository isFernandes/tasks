import TaskModel from "../../Entities/Task/TaskModel";
import { ICreateTask } from "./createTaskInterface";

class CreateTaskService implements ICreateTask {
  async execute(description:string, done:boolean = false){
    return await TaskModel.create({ description, done });
  }
}

export {CreateTaskService}