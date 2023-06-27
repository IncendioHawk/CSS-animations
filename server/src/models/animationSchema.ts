import mongoose from "mongoose"

const animationSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    defaultValue: 0,
  },
  html: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
})

const Animation = mongoose.model("Animation", animationSchema)
export default Animation
