const mongoose = require('mongoose');
const MongModels = require('../models/model');

const Task = MongModels.Task;

module.exports = {
    allTasks: function(req, res) {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    oneTask: function(req, res) {
        Task.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    newTask: function(req, res) {
        task = req.body;
        Task.create(task)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    editTask: function(req, res) {
        Task.updateOne({ _id: req.params.id }, { $set: req.body }, { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deleteTask: function(req, res) {
        Task.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}

//{runValidators: true} for update validations