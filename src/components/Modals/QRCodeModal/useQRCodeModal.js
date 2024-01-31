import { useState, useEffect } from 'react'
import { detectOS } from 'utils/utils'

const useQRCodeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const setIsQRCodeModalOpen = () => {
    const detectedOS = detectOS()

    if (detectedOS !== 'Android' && detectedOS !== 'iOS') {
      if (!isModalOpen) setIsModalOpen(true)
    } else if (detectedOS === 'Android') {
      window.location.replace(
        'https://play.google.com/store/apps/details?id=inc.peer.app&hl=en&gl=US',
      )
    } else if (detectedOS === 'iOS') {
      window.location.replace('https://apps.apple.com/us/app/peer/id1669571704')
    }
  }

  const closeQRCodeModal = () => {
    if (isModalOpen) setIsModalOpen(false)
  }

  return { isQRCodeModalOpen: isModalOpen, setIsQRCodeModalOpen, closeQRCodeModal }
}

export default useQRCodeModal
