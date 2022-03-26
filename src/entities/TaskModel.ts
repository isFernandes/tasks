import { Schema, model } from "mongoose";
export interface ITask {
  description?: string;
  done?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    description: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const TaskModel = model<ITask>("Task", TaskSchema);
export { TaskModel };
