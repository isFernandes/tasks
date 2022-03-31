import { Model } from "mongoose";
import { IRepositories } from "../entities/repositories";

class Repositories implements IRepositories {
  constructor(private readonly schema: typeof Model) {}

  async create(payload: any): Promise<any> {
    return await this.schema.create(payload);
  }
  async getAll(): Promise<any> {
    return await this.schema.find();
  }

  async update(id: string, payload: any): Promise<any> {
    return await this.schema.updateOne({ _id: id }, payload);
  }

  async delete(id: string): Promise<any> {
    return await this.schema.findByIdAndDelete({ _id: id });
  }

  async getById(id: string): Promise<any> {
    return await this.schema.findById(id);
  }

  async getOne(payload: any): Promise<any> {
    return await this.schema.find(payload);
  }
}

export { Repositories };
