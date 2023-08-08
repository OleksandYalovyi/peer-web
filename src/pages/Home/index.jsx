/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react'

import styles from './home.module.scss'
// import Global from './components/Global'
// import Menu from './components/Menu'
import News from './components/News'
import Peer from './components/Peer'
// import Puzzle from './components/Puzzle'
import MetaEarth from './components/MetaEarh'
import Involved from './components/Involved'
import Dates from './components/Dates'
import Vision from './components/Vision/index'

const Home = () => {
  const [userPosition, setUserPosition] = useState({
    x: 0,
    y: 0,
  })

  const onMouseMove = useCallback((e) => {
    setUserPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }, [])

  return (
    <div className={styles.wrapper} onMouseMove={onMouseMove}>
      {/* <div className={styles.container}>
        <Global />
      </div> */}

      {/* <Menu /> */}

      <News />

      <Dates userPosition={userPosition} />

      <div className={styles.container}>
        <Peer />
      </div>

      <MetaEarth />

      <div className={styles.container}>
        {/* <Puzzle /> */}
        <Vision />
        <Involved />
      </div>
    </div>
  )
}

export default React.memo(Home)
