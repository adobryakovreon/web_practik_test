import { useState, useEffect } from "react"

export const useSticky = <T extends HTMLElement>(Ref: React.RefObject<T>) => {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      Ref.current && setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isSticky
}
