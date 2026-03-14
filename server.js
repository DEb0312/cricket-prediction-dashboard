const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

require("dotenv").config()

const authRoutes = require("./routes/auth")
const predictionRoutes = require("./routes/prediction")
const leaderboardRoutes = require("./routes/leaderboard")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))

app.use("/api/auth", authRoutes)
app.use("/api/prediction", predictionRoutes)
app.use("/api/leaderboard", leaderboardRoutes)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
const resultRoutes = require("./routes/result")
app.use("/api/result", resultRoutes)