import {query, Request, Response } from 'express';

const Task = require('../model/Task');

export default class TaskController{
  async create(request: Request, response: Response) {
    const {description, done} = request.body;
    try {
        const task = await Task.create({description: description, done: done});

        return response.json(task);
    } catch (error) {
        return response.json(error);
    }
  };

  async index(request: Request, response: Response) {
    try {
        const task = await Task.find({});

        return response.json(task);
    } catch (error) {
        return response.json(error);
    }
  };

  async update(request: Request, response: Response) {
    const {description, done} = request.body;
    const id = request.params;

    try {
        await Task.findOneAndUpdate( {_id : id},{description: description, done: done});

        const task = await Task.findOne({_id : id});

        return response.status(200).json(task);
    } catch (error) {
        return response.json(error);
    }
  };

  async delete(request: Request, response: Response) {
    const {id} = request.params;
    try {
        await Task.findOneAndDelete({_id:id});

        return response.json("Apagado com sucesso");
    } catch (error) {
        return response.json(error);
    }
  };
};
