import {Schema, model} from 'mongoose';

import { ITask } from "./ITask";

const TaskSchema = new Schema<ITask>({
    description: {type: String, required: true},
    done: {type:Boolean, default: false},
  }, {
      timestamps: true
  });

export = model<ITask>('Task', TaskSchema);