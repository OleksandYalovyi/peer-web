import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const LocalContext = createContext()

export const LocalProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN')

  return <LocalContext.Provider value={{ language, setLanguage }}>{children}</LocalContext.Provider>
}

export const useLocale = () => useContext(LocalContext)

LocalProvider.propTypes = {
  children: PropTypes.node,
}
