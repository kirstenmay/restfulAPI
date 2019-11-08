const mongoose = require('mongoose');
const MongModels = require('../models/model');

const Task = MongModels.Task;

module.exports = {
    allTasks: function(req, res) {
        Task.find()
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "We have an error", result: err }))
    },
    oneTask: function(req, res) {
        Task.findOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "We have an error", result: err }))
    },
    newTask: function(req, res) {
        task = req.body;
        Task.create(task)
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "We have an error", result: err }))
    },
    editTask: function(req, res) {
        Task.updateOne({ _id: req.params.id }, { $set: req.body }, { runValidators: true })
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "We have an error", result: err }))
    },
    deleteTask: function(req, res) {
        Task.deleteOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "We have an error", result: err }))
    }
}

//{runValidators: true} for update validations