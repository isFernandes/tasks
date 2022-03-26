import { IService } from "../entities/services";

class Service implements IService {
  constructor(private readonly repository: any) {}

  async create(payload: any): Promise<any> {
    return await this.repository.create(payload);
  }
  async getAll(): Promise<any> {
    return await this.repository.getAll();
  }

  async update(id: string, payload: any): Promise<any> {
    await this.repository.update(id, payload);
    return await this.repository.getById({ _id: id });
  }

  async delete(id: string): Promise<any> {
    return await this.repository.delete({ _id: id });
  }

  async getById(id: string): Promise<any> {
    return await this.repository.getById({ _id: id });
  }

  async getOne(payload: any): Promise<any> {
    return await this.repository.getOne(payload);
  }
}

export { Service };
