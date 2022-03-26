import { ITaskRepository } from "../entities/repositories";
import { ITask, UserModel } from "../entities/UserModel";
import { Repositories } from "./baseRepository";

class TaskRepository extends Repositories implements ITaskRepository {
  private model: any;
  constructor() {
    super(UserModel);
    this.model = UserModel;
  }

  async changeAllTasks(done: boolean): Promise<ITask[]> {
    await this.model.updateMany({ done: !done }, { done });
    const res = await this.model.find();
    return res;
  }
}

export { TaskRepository };
