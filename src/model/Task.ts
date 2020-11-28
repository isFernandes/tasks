const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description: String,
    done: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);