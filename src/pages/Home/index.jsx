/* eslint-disable react/prop-types */
import React from 'react'

import HomeHeader from 'components/HomeHeader/index'
import useCurrentWidth from 'hooks/useCurrentWidth'
import styles from './home.module.scss'
import PeerMain from './components/PeerMain/index'
import PeerServices from './components/PeerServices/index'
import HomePageMobile from './components/HomePageMobile/index'

const Home = () => {
  const width = useCurrentWidth()
  const isMobile = width < 821

  return (
    <div className={styles.wrapper}>
      {!isMobile ? (
        <>
          <HomeHeader />
          <PeerMain />
          <PeerServices />
        </>
      ) : (
        <HomePageMobile />
      )}
    </div>
  )
}

export default React.memo(Home)
