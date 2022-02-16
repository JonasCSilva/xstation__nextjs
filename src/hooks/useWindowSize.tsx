import { useEffect, useState } from 'react'

export default function useWindowSize() {
  const [isMQTrue, setIsMQTrue] = useState(false)

  function handleResize() {
    if (window.innerWidth / window.innerHeight < 256 / 224) {
      setIsMQTrue(true)
    } else {
      setIsMQTrue(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMQTrue
}
