import { Schema } from "mongoose";
import TaskModel from "../../entities/Task/TaskModel";
import { IShowTask } from "../../repositories/showTaskRepository";

class ShowTaskService implements IShowTask {
  constructor(private readonly schema: typeof TaskModel) {}
  async execute(id: Schema.Types.ObjectId | string) {
    return await this.schema.findById({ _id: id });
  }
}

export { ShowTaskService };
