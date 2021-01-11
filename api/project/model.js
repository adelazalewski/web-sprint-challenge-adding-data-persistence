// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {

    return db("projects")
}
function addProject(project){
    return db("projects").insert(project)
}
function getByID(id) {
    return db("projects").where("project_id", id)
}
function findResources(id) {
    return db("project_resources as pr")
            .where("p.project_id", id)
            .join("projects as p", "pr.project_id", "p.project_id")
            .join("resources as r", "r.resource_id", "pr.resource_id")
            .select(
                "p.project_id",
                "p.project_name",
                "r.resource_name",
                "r.resource_description"
            )
}
function findTasks(id) {
    return db("projects as p")
            .join("tasks as t", "t.project_id", "p.project_id")
            .where("p.project_id", id)
            .select(
                "t.task_id",
                "p.project_name",
                "t.task_description",
                "t.task_notes",
                "t.task_completed"
            )
}
module.exports = {
    getProjects,
    addProject,
    getByID,
    findResources,
    findTasks
}