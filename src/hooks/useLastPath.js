import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useLastPath() {
  const [lastPath, setLastPath] = useState('/')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/contact' && location.pathname !== '/share') {
      setLastPath(location.pathname)
    }
  }, [location.pathname])

  return lastPath
}
