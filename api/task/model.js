// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
    return db("tasks")
} 
function getByID(id) {
    return db("tasks").where("task_id", id)
}
function addTask(task) {
    return db("tasks").insert(task)
}

module.exports = {
    addTask,
    getByID,
    getTasks
}