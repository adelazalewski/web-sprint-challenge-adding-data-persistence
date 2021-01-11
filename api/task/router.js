// build your `/api/tasks` router here
const express = require("express")
const model = require("./model")

const router = express.Router()
router.get("/tasks", async (req, res, next) => {
    try{
const tasks = await model.getTasks()
res.json(tasks)
    }catch(err){
        next(err)
    }
})
router.post("/tasks", async(req, res, next) => {
    try{
const payload = {
    task_description: req.body.task_description,
    task_notes: req.body.task_notes,
    task_completed: req.body.task_completed,
    project_id: req.body.project_id
}
const [id] = await model.addTask(payload)
const newTask = await model.getByID(id).first()
res.status(201).json(newTask)
    }catch(err){
        next(err)
    }
})

module.exports = router