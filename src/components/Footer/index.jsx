import React from 'react'
import { useLocation } from 'react-router-dom'
import useCurrentSize from 'hooks/useCurrentSize'

import routing from 'routing/path'
import MobileFooter from './MobileFooter/index'
import MainFooter from './MainFooter/index'
import HomeFooter from './HomeFooter/index'

function Footer() {
  const { width } = useCurrentSize()
  const { pathname } = useLocation()

  const isMobile = width < 680

  return (
    <>
      {pathname !== routing.withoutAuth.home && !isMobile && <MainFooter />}
      {pathname === routing.withoutAuth.home && !isMobile && <HomeFooter />}
      {isMobile && <MobileFooter />}
    </>
  )
}

Footer.propTypes = {}

export default Footer
