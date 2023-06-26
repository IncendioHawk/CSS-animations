import Loading from "./Loading"
import { useState } from "react"
import useFetch from "../Hooks/useFetch"
export default function AnimationCard(id: string) {
  const liked = useState(false)
  const { loading, error, value } = useFetch(
    `https://localhost:1000/details/${id}`
  )
  return (
    <>
      {error && "Error loading"}
      <div className="animation"></div>
      <div className="details">
        {loading && <Loading />}
        <div className="title">{!loading && value}</div>
        <p className="creator">{!loading && value}</p>
        <p className="likes">{!loading && value}</p>
        <button className={`like ${liked && "like"}`}></button>
      </div>
    </>
  )
}
