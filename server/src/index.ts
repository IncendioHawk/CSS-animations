import Animation from "./models/animationSchema.ts"
import mongoose from "mongoose"
import express from "express"
mongoose.connect("mongodb://127.0.0.1/animation")
const app = express()
const PORT = 3141

async function fillDB(creator: string, title: string, html: string, css: string) {
  const animatedCubeSlider = new Animation({
    creator,
    title,
    html,
    css,
  })

  await animatedCubeSlider.save()
}
// fillDB()

// app.post("/details/:id", async (req, res) => {
//   const id = req.params.id
//   res.send(await Animation.findById(id))
// })

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  console.log(await Animation.find())
})

export {}
