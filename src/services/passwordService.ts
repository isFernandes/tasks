import { compareSync, hashSync } from "bcryptjs";
import { IPasswordService } from "../entities/services";

export class PasswordService implements IPasswordService {
  async hashPassword(pass: string, numberHash: number) {
    const password = hashSync(pass, numberHash);
    return password;
  }

  async comparePassword(sendPass: string, existingPass: string) {
    return compareSync(sendPass, existingPass);
  }

  async updatePassword(newPass: string) {
    return;
  }

  async recoveryPassword(email: string) {
    return;
  }
}
