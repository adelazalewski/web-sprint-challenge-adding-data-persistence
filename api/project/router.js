// build your `/api/projects` router here
const express = require("express");
const model = require("./model");
const router = express.Router();
router.get("/projects", async (req, res, next) => {
    try{
        const projects = await model.getProjects()
        res.json(projects) 
    }catch(err){
        console.log(err)
        next(err)
    }
})
router.post("/projects", async (req, res, next) => {
    try{
const payload = {
    project_name: req.body.project_name,
    project_description: req.body.project_description,
    project_completed: req.body.project_completed
}
const [id]=await model.addProject(payload) 
const newProject = await model.getByID(id).first()
res.status(201).json(newProject)
    }catch(err){
        next(err)
    }
})

module.exports = router;