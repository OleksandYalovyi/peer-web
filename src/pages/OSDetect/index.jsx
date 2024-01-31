import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { detectOS } from 'utils/utils'

function OSDetect() {
  const [os, setOs] = useState('')
  const navigate = useNavigate()

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

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return null
}

export default React.memo(OSDetect)
