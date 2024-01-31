import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(true)
  const switchTheme = () => {
    setIsLight(!isLight)
  }

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

ThemeProvider.propTypes = {
  children: PropTypes.node,
}
