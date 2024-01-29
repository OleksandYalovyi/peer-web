import React, { useEffect, useState } from 'react'
import styles from './os_detect.module.scss'

function OSDetect() {
  const [os, setOs] = useState('')

  const detectOS = () => {
    const platform = navigator?.userAgent

    if (platform.match(/Android/i)) return 'Android'
    if (platform.match(/iPhone/i) || platform.match(/iPod/i) || platform.match(/iPad/i))
      return 'iOS'

    return null
  }

  useEffect(() => {
    const detectedOs = detectOS()
    setOs(detectedOs)
  }, [])

  useEffect(() => {
    if (os === 'Android') {
      window.location.replace(
        'https://play.google.com/store/apps/details?id=inc.peer.app&hl=en&gl=US',
      )
    } else if (os === 'iOS') {
      window.location.replace('https://apps.apple.com/us/app/peer/id1669571704')
    }
  }, [os])

  return null
}

export default React.memo(OSDetect)
