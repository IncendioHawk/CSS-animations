const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:3141/animation")
const express = require("express")
const Animation = require("../models/animationSchema.ts")
const app = express()

app.listen(1000)

export {}
