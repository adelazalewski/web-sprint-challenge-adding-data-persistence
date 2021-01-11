// build your `/api/resources` router here
const express = require("express");
const model = require("./model")
const router = express.Router();

router.get("/resources", async (req, res, next) => {
    try{
const resources = await model.getResources()
res.json(resources);
    }catch(err){
        next(err)
    }
})
router.post("/resources", async(req, res, next) => {
    try{
const payload = {
resource_name: req.body.resource_name,
resource_description: req.body.resource_description
}
const [id] = await model.addResource(payload)
const newResource = await model.getByID(id).first()
res.status(201).json(newResource)
    }catch(err){
        next(err)
    }
})

module.exports = router;