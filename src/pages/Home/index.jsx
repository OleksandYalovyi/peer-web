import React, { useState } from 'react'
import QRCodeModal from 'components/Modals/QRCodeModal'
import Main from './components/Main'
import Map from './components/Map'
import PeerWithLove from './components/PeerWithLove'
import styles from './home.module.scss'

function Home() {
  const [isQRCodeModal, setIsQRCodeModal] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PeerWithLove />
        <Main />
        <Map
          onOpenQRCodeModal={(e) => {
            e.preventDefault()
            setIsQRCodeModal(true)
          }}
        />
      </div>
      <QRCodeModal open={isQRCodeModal} onClose={() => setIsQRCodeModal(false)} />
    </div>
  )
}

export default React.memo(Home)
