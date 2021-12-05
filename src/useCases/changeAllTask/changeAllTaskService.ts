import TaskModel from "../../entities/Task/TaskModel";
import { IChangeAllTask } from "../../repositories/changeAllTaskRepository";

class ChangeAllTaskService implements IChangeAllTask {
  async execute(done:boolean){
    return await TaskModel.updateMany({done: !done}, { done });
  }
}

export {ChangeAllTaskService}