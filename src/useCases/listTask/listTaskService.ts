import TaskModel from "../../entities/Task/TaskModel";
import { IListTask } from "../../repositories/listTaskRepository";

class ListTaskService implements IListTask {
  constructor(private readonly schema: typeof TaskModel) {}

  async execute() {
    return await this.schema.find();
  }
}

export { ListTaskService };
