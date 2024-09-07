import React from 'react'
import { useLocation } from 'react-router-dom'
import useCurrentSize from 'hooks/useCurrentSize'

import routing from 'routing/path'
import MobileFooter from './MobileFooter/index'
import HomeFooter from './HomeFooter/index'

function Footer() {
  const { width } = useCurrentSize()
  const { pathname } = useLocation()

  const isMobile = width < 680

  const showVision = pathname === routing.withoutAuth.home
  const showPeerLogo = pathname === routing.withoutAuth.home

  return (
    <>
      {!isMobile && <HomeFooter showVision={showVision} />}
      {isMobile && <MobileFooter showPeerLogo={showPeerLogo} />}
    </>
  )
}

Footer.propTypes = {}

export default Footer
