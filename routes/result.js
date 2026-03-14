const router = require("express").Router()
const Prediction = require("../models/Prediction")
const User = require("../models/User")

router.post("/submitResult", async(req,res)=>{

const result = req.body

const predictions = await Prediction.find({match: result.match})

for(let p of predictions){

let score = 0

if(p.topRunTeam1 === result.topRunTeam1) score += 50
if(p.topRunTeam2 === result.topRunTeam2) score += 50

if(p.topWicketTeam1 === result.topWicketTeam1) score += 50
if(p.topWicketTeam2 === result.topWicketTeam2) score += 50

if(result.firstInningsScore >= p.scoreLow &&
   result.firstInningsScore <= p.scoreHigh){

score += 50
}

await User.findByIdAndUpdate(
p.userId,
{$inc:{score:score}}
)

}

res.json({message:"Leaderboard Calculated"})

})

module.exports = router