import { Schema } from "mongoose";
import TaskModel from "../../Entities/Task/TaskModel";
import { IUpdateData, IUpdateTask } from "./updateTaskInterface";

class UpdateTaskService implements IUpdateTask {
  async execute(id:Schema.Types.ObjectId | string, updateData : IUpdateData){
    return await TaskModel.findOneAndUpdate({_id: id}, updateData);
  }
}

export {UpdateTaskService}