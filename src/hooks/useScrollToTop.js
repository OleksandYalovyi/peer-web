import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return children || null
}

export default withRouter(ScrollToTop)

const locationShape = {
  pathname: PropTypes.string,
}

ScrollToTop.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape(locationShape),
}
