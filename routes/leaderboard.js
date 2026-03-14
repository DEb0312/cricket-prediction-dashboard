const router = require("express").Router()
const User = require("../models/User")

router.get("/", async (req,res)=>{

    const users = await User.find().sort({score:-1})

    res.json(users)
})

module.exports = router