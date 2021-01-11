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

module.exports = {
    getResources,
    getByID,
    addResource
}