import React, { useState } from 'react'
import QRCodeModal from 'components/Modals/QRCodeModal'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'
import Main from './components/Main'
import Map from './components/Map'
import PeerWithLove from './components/PeerWithLove'
import styles from './home.module.scss'

function Home() {
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PeerWithLove />
        <Main />
        <Map
          onOpenQRCodeModal={(e) => {
            e.preventDefault()
            setIsQRCodeModalOpen()
          }}
        />
      </div>
      <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
    </div>
  )
}

export default React.memo(Home)
