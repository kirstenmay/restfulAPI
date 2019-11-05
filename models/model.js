const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: [true, "You must include a title"], minlength: 2 },
    description: { type: String, required: [true, "A description is required"], minlength: 2 },
    completed: { default: false, type: Boolean }
}, { timestamps: true })

const Task = mongoose.model('Task', TaskSchema);

module.exports = {
    Task: Task
}