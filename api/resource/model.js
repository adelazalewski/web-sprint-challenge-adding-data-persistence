// build your `Resource` model here
const db = require("../../data/dbConfig");

function getResources() {
    return db("resources")
}
function addResource(resource) {
    return db("resources").insert(resource)
}
function getByID(id) {
    return db("resources").where("resource_id", id)
}
function findProjects(id){
    return db("project_resources as ps")
            .join("resources as r", "ps.resource_id", "r.resource_id")
            .join("projects as p", "p.project_id", "ps.project_id")
            .where("r.resource_id", id)
            .select(
                "r.resource_id",
                "r.resource_name",
                "p.project_id",
                "p.project_name"
            )
}

module.exports = {
    getResources,
    getByID,
    addResource,
    findProjects
}