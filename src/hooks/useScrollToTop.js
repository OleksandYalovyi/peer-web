import React, { useEffect } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function ScrollToTop({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return children || <Navigate to="/" />
}

ScrollToTop.propTypes = {
  children: PropTypes.node,
}

export default ScrollToTop
