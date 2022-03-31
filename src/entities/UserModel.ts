import { Schema, model } from "mongoose";

export interface ITask {
  _id?: string;
  description?: string;
  done?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  tasks?: ITask[];
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [
      {
        description: { type: String, required: true },
        done: { type: Boolean, default: false },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = model<IUser>("User", UserSchema);
export { UserModel };
