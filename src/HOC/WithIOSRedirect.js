import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const IOS_PATH = [
  '/user/',
  '/user',
  '/reset_phone/',
  '/reset_phone',
  '/invite/',
  '/invite',
  '/story/',
  '/story',
]
const LINK = 'https://apps.apple.com/us/app/peer/id1585616081'

const WithIOSRedirect = ({ children }) => {
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    const userAgent = navigator?.userAgent || navigator?.vendor || window?.opera
    const isIos = Boolean(userAgent?.match(/iPhone|iPad|iPod/i))
    if (isIos) {
      IOS_PATH.forEach((item) => {
        if (pathname?.includes(item, 0)) {
          window.location.href = LINK
        }
        return null
      })
    }
  }, [])

  return <>{children}</>
}

export default WithIOSRedirect

WithIOSRedirect.propTypes = {
  children: PropTypes.element,
}
