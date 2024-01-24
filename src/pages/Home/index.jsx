import React from 'react'
import Main from './components/Main'
import Map from './components/Map'
import PeerWithLove from './components/PeerWithLove'
import styles from './home.module.scss'

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PeerWithLove />
        <Main />
        <Map />
      </div>
    </div>
  )
}

export default React.memo(Home)
