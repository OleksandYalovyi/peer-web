/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import HomeHeader from 'components/HomeHeader/index'
import useCurrentWidth from 'hooks/useCurrentWidth'
import styles from './home.module.scss'
import PeerMain from './components/PeerMain/index'
import PeerServices from './components/PeerServices/index'
import HomePageMobile from './components/HomePageMobile/index'

const Home = () => {
  const [isPeerMainLoaded, setIsPeerMainLoaded] = useState(false)
  const width = useCurrentWidth()
  const isMobile = width < 900

  return (
    <div className={styles.wrapper}>
      {!isMobile ? (
        <>
          <HomeHeader />
          <PeerMain setIsPeerMainLoaded={setIsPeerMainLoaded} isPeerMainLoaded={isPeerMainLoaded} />
          {isPeerMainLoaded && <PeerServices />}
        </>
      ) : (
        <HomePageMobile />
      )}
    </div>
  )
}

export default React.memo(Home)
