const router = require("express").Router()
const Prediction = require("../models/Prediction")

router.post("/submit", async (req,res)=>{

    const prediction = new Prediction(req.body)

    await prediction.save()

    res.json({message:"Prediction saved"})
})

module.exports = router