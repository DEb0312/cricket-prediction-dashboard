require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const predictionRoutes = require("./routes/prediction")
const leaderboardRoutes = require("./routes/leaderboard")
const resultRoutes = require("./routes/result")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/api/auth", authRoutes)
app.use("/api/prediction", predictionRoutes)
app.use("/api/leaderboard", leaderboardRoutes)
app.use("/api/result", resultRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

const Prediction = require("./models/Prediction")

app.get("/fix-processed", async (req, res) => {
  await Prediction.updateMany({}, { processed: false })
  res.send("All predictions updated with processed=false")
})

const User = require("./models/User")
const Prediction = require("./models/Prediction")

app.get("/reset-all", async (req, res) => {
  await User.updateMany({}, { score: 0 })
  await Prediction.deleteMany({})
  res.send("All data reset")
})