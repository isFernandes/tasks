import TaskModel from "../../entities/Task/TaskModel";
import { IListTask } from "../../repositories/listTaskRepository";

class ListTaskService implements IListTask {
  async execute(){
    return await TaskModel.find();
  }
}

export {ListTaskService}