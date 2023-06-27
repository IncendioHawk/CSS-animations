import Animation from "./models/animationSchema.ts"
import mongoose, { SaveOptions } from "mongoose"
import express from "express"
mongoose.connect("mongodb://127.0.0.1:3141/animation")
const app = express()
const PORT = 3141

const animatedCubeSlider = new Animation({
  creator: "Amit Sheen",
  title: "Newton's CSS cradle",
  html: "Newton's HTML",
  css: "Newton's CSS",
})

await animatedCubeSlider.save()

// app.post("/details/:id", async (req, res) => {
//   const id = req.params.id
//   res.send(await Animation.findById(id))
// })

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
})
export {}
