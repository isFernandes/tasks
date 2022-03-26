import { IUserRepository } from "../entities/repositories";
import { UserModel } from "../entities/UserModel";
import { Repositories } from "./baseRepository";

class UserRepository extends Repositories implements IUserRepository {
  private model: any;
  constructor() {
    super(UserModel);
    this.model = UserModel;
  }

  async findByEmail(email: string) {
    return await this.model.findOne({ email }).select("password email name");
  }

  async findOne(filter: object) {
    return await this.model.findOne(filter).populate("projects");
  }
}

export { UserRepository };
