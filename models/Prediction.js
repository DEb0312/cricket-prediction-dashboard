const mongoose = require("mongoose")

const PredictionSchema = new mongoose.Schema({

userId:String,

match:String,

topRunTeam1:String,
topRunTeam2:String,

topWicketTeam1:String,
topWicketTeam2:String,

scoreLow:Number,
scoreHigh:Number,

locked:{type:Boolean,default:true}

})

module.exports = mongoose.model("Prediction",PredictionSchema)