import { Schema } from "mongoose";
import TaskModel from "../../Entities/Task/TaskModel";
import { IDeleteTask } from "./deleteTaskInterface";

class DeleteTaskService implements IDeleteTask {
  async execute(id: Schema.Types.ObjectId | string){
    return await TaskModel.findByIdAndDelete({_id: id});
  }
}

export {DeleteTaskService}