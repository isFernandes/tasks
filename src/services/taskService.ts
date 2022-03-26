import { ITaskService } from "../entities/services";
import { ITask } from "../entities/UserModel";
import { TaskRepository } from "../repositories/taskRepository";
import { Service } from "./service";

const repository = new TaskRepository();
class TaskService extends Service implements ITaskService {
  constructor() {
    super(repository);
  }

  async changeAllTasks(done: boolean): Promise<ITask[]> {
    return repository.changeAllTasks(done);
  }
}

export { TaskService };
