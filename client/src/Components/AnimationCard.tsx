import useFetch from "../Hooks/useFetch.js"
export default function AnimationCard() {
  const { loading, error, value } = useFetch("https://localhost:1000")
  return (
    <>
      <div className="animation"></div>
      <div className="details">
        <div className="title"></div>
        <p className="creator"></p>
        <p className="likes"></p>
      </div>
    </>
  )
}
