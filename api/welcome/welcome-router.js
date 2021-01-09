const express = require("express");

const router = express.Router();
router.get("/", async (req, res, next) => {
    try{
        res.json({
            message: "adela's sprint challenge no.2"
        })
    }catch(err){
        next(err)
    }
})

module.exports = router;