import TaskModel from "../../Entities/Task/TaskModel";
import { IChangeAllTask } from "./changeAllTaskInterface";

class ChangeAllTaskService implements IChangeAllTask {
  async execute(done:boolean){
    return await TaskModel.updateMany({done: !done}, { done });
  }
}

export {ChangeAllTaskService}