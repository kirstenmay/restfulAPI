const controller = require('../controllers/controller')

module.exports = app => {
    app.get("/api/tasks", controller.allTasks);
    app.get("/api/tasks/:id", controller.oneTask);
    app.post("/api/tasks/new", controller.newTask);
    app.put("/api/tasks/:id/edit", controller.editTask);
    app.delete("/api/tasks/:id/delete", controller.deleteTask);
}