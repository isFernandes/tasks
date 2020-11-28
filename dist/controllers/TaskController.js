"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('../model/Task');
class TaskController {
    async create(request, response) {
        const { description, done } = request.body;
        try {
            const task = await Task.create({ description: description, done: done });
            return response.json(task);
        }
        catch (error) {
            return response.json(error);
        }
    }
    ;
    async index(request, response) {
        try {
            const task = await Task.find({});
            return response.json(task);
        }
        catch (error) {
            return response.json(error);
        }
    }
    ;
    async update(request, response) {
        const { description, done } = request.body;
        const id = request.params;
        try {
            await Task.findOneAndUpdate({ _id: id }, { description: description, done: done });
            const task = await Task.findOne({ _id: id });
            return response.status(200).json(task);
        }
        catch (error) {
            return response.json(error);
        }
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        try {
            await Task.findOneAndDelete({ _id: id });
            return response.json("Apagado com sucesso");
        }
        catch (error) {
            return response.json(error);
        }
    }
    ;
}
exports.default = TaskController;
;
//# sourceMappingURL=TaskController.js.map