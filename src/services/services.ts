import { ITask } from "../Entities/Task/ITask";

interface IService{
  findById(id: string): Promise<ITask| null>;
  getAll(): Promise<ITask[]>;
  create(data: object): Promise<void>;
  update(id: string, data: object): Promise<void>;
  delete(id: string): Promise<void>;
  reactive(id: string): Promise<void>;
}

class Service implements IService{
  protected schema: any;

  constructor(schema: any) {
    this.schema = schema;
  }

  async findById(id: string) {
    return await this.schema.findOne({ _id: id });
  }

  async getAll() {
    return this.schema.find({ active: true });
  }

  async create(data: object) {
    const doc = new this.schema(data);
    await doc.save();

    return doc;
  }

  async update(id: string, data: object) {
    return await this.schema.findOneAndUpdate({ _id: id }, data);
  }

  async delete(id: string) {
    return await this.schema.findOneAndUpdate({ _id: id }, { active: false });
  }

  async reactive(id: string) {
    return await this.schema.findOneAndUpdate({ _id: id }, { active: true });
  }
}

export = Service