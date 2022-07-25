import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(false)

  const location = useLocation()
  useEffect(() => {
    if (
      location?.pathname.includes('/news/') ||
      location?.pathname === '/' ||
      location?.pathname === '/roadmap'
    ) {
      setIsLight(true)
    } else if (isLight) {
      setIsLight(false)
    }
  }, [location])

  return <ThemeContext.Provider value={{ isLight, setIsLight }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

ThemeProvider.propTypes = {
  children: PropTypes.node,
}
