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
module.exports = {
    getProjects,
    addProject,
    getByID
}