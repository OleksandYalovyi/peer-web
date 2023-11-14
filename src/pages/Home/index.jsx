/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react'

import styles from './home.module.scss'
import PeerMain from './components/PeerMain/index'
import HomeHeader from 'components/HomeHeader/index'
import PeerServices from './components/PeerServices/index'

const Home = () => {

  return (
    <div className={styles.wrapper}>
      <HomeHeader /> 
      <PeerMain />
      <PeerServices />
      <div className={styles.container}>  
      </div>
    </div>
  )
}

export default React.memo(Home)
