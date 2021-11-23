import TaskModel from "../../Entities/Task/TaskModel";
import { IListTask } from "./listTaskInterface";

class ListTaskService implements IListTask {
  async execute(){
    return await TaskModel.find();
  }
}

export {ListTaskService}