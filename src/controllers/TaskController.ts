import { Request, Response } from "express";

const Task = require("../model/Task");

export default class TaskController {
  //CRIA A TAREFA
  // async create(request: Request, response: Response) {
  //   const { description, done } = request.body;
  //   try {
  //     const task = await Task.create({ description: description, done: done });

  //     return response.json(task);
  //   } catch (error) {
  //     return response.status(200).json(error);
  //   }
  // }

  //LISTA TODAS AS TAREFAS
  // async index(request: Request, response: Response) {
  //   try {
  //     const task = await Task.find({});

  //     return response.status(200).json(task);
  //   } catch (error) {
  //     return response.json(error);
  //   }
  // }

  //ATUALIZA SOMENTE CONTEUDO DA TAREFA
  // async updateTask(request: Request, response: Response) {
  //   const { description } = request.body;
  //   const id = request.params;

  //   try {
  //     await Task.findOneAndUpdate({ _id: id }, { description: description });
  //     const task = await Task.findOne({ _id: id });
  //     return response.status(200).json(task);
  //   } catch (error) {
  //     return response.json(error);
  //   }
  // }

  // //ATUALIZA SE ESTA FINALIZADA OU NÃO
  // async updateDone(request: Request, response: Response) {
  //   const { done } = request.body;
  //   const id = request.params;

  //   try {
  //     await Task.findOneAndUpdate({ _id: id }, { done: done });
  //     const task = await Task.findOne({ _id: id });
  //     return response.status(200).json(task);
  //   } catch (error) {
  //     return response.json(error);
  //   }
  // }

  //MARCA TODAS COMO CONCLUIDAS
  // async checkAll(request: Request, response: Response) {
  //   const { done } = request.body;

  //   try {
  //     await Task.updateMany({ done: !done }, { done });

  //     const task = await Task.find({ done: true });
  //     return response.status(200).json(task);
  //   } catch (error) {
  //     return response.json(error);
  //   }
  // }

  //DESMARCA TODAS COMO CONCLUIDAS
  // async uncheckAll(request: Request, response: Response) {
  //   try {
  //     await Task.updateMany({ done: true }, { done: false });

  //     const task = await Task.find({ done: false });
  //     return response.status(200).json(task);
  //   } catch (error) {
  //     return response.json(error);
  //   }
  // }

  // async delete(request: Request, response: Response) {
  //   const { id } = request.params;
  //   try {
  //     await Task.findOneAndDelete({ _id: id });

  //     return response.status(200).json("Apagado com sucesso");
  //   } catch (error) {
  //     return response.json(error);
  //   }
  // }
}
