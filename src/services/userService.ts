import { Service } from "./service";
import { UserModel } from "../entities/UserModel";
import { IUserService } from "../entities/services";
import { UserRepository } from "../repositories/userRepository";

const repository = new UserRepository();
export class UserService extends Service implements IUserService {
  constructor() {
    super(repository);
  }

  async findByEmail(email: string) {
    return await repository.findOne({ email });
  }

  async findOne(filter: object) {
    return await repository.findOne(filter);
  }
}
