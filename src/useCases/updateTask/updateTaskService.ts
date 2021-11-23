import { Schema } from "mongoose";
import TaskModel from "../../Entities/Task/TaskModel";
import { IUpdateData, IUpdateTask } from "./updateTaskInterface";

class UpdateTaskService implements IUpdateTask {
  async execute(id:Schema.Types.ObjectId | string, updateData : IUpdateData){
    await TaskModel.findOneAndUpdate({_id: id}, updateData);
    return await TaskModel.findById({_id: id});
  }
}

export {UpdateTaskService}