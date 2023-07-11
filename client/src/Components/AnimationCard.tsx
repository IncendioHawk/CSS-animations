interface AnimationCartType {
  loading: boolean
  error: Error | undefined
}

import Loading from "./Loading"
import { useState } from "react"
import useFetch from "../Hooks/useFetch"

export default function AnimationCard(id: string) {
  const liked = useState(false)
  const { loading, error /*, value */ }: AnimationCartType = useFetch(
    `https://localhost:1000/details/${id}`,
    {
      method: "POST",
    }
  )

  const value = { title: "Example", creator: "Archie", likes: 314159265 }

  return (
    <>
      {error && <b>"Error loading"</b>}
      <div className="animation"></div>
      <div className="details">
        {loading && <Loading />}
        <div className="title">{!loading && value.title}</div>
        <p className="creator">{!loading && value.creator}</p>
        <p className="likes">{!loading && value.likes}</p>
        <button className={`like ${liked && "like"}`}></button>
      </div>
    </>
  )
}
