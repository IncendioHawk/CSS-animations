import { useCallback, useEffect, useState } from "react"

export default function useAsync(callback: Function, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | undefined>()
  const [value, setValue] = useState({})

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue({ title: "Example", creator: "Archie", likes: 314159265 })
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}
