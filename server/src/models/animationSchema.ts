const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:3141/animation")

const animationSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  likes: Number,
  html: {
    type: HTMLDivElement,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
})

const Animation = mongoose.model("Animation", animationSchema)

module.exports = Animation

export {}
