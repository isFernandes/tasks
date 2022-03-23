import { Schema } from "mongoose";
import TaskModel from "../../entities/Task/TaskModel";
import { IDeleteTask } from "../../repositories/deleteTaskRepository";

class DeleteTaskService implements IDeleteTask {
  constructor(private readonly schema: typeof TaskModel) {}
  async execute(id: Schema.Types.ObjectId | string) {
    return await this.schema.findByIdAndDelete({ _id: id });
  }
}

export { DeleteTaskService };
