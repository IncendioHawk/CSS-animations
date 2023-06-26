const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:3141/animation")

const animationSchema = new mongoose.Schema({
  creator: String,
  html: HTMLDivElement,
  css: String,
})

const Animation = mongoose.model("Animation", animationSchema)

export {}
