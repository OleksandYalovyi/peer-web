/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react'

import styles from './home.module.scss'
import PeerMain from './components/PeerMain/index'
import HomeHeader from 'components/HomeHeader/index'
import PeerServices from './components/PeerServices/index'
import HomePageMobile from './components/HomePageMobile/index'
import useCurrentWidth from 'hooks/useCurrentWidth'

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
