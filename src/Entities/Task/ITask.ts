import { Document } from "mongoose"

export interface ITask  extends Document{
  description: string,
  done?: boolean,
  createdAt?:Date,
  updatedAt?:Date
}