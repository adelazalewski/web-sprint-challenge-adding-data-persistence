// build your `/api/projects` router here
const express = require("express");
const model = require("./model");
const router = express.Router();
router.get("/projects", async (req, res, next) => {
    try{
        
    }catch(err){
        console.log(err)
        next(err)
    }
})

module.exports = router;