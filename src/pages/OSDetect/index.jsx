import React, { useEffect, useState } from 'react'
import styles from './os_detect.module.scss'

function OSDetect() {
  const [system, setSystem] = useState('')

  const getOperatingSystem = () => {
    let operatingSystem = 'Not known'
    if (window.navigator.appVersion.indexOf('Win') !== -1) {
      operatingSystem = 'Windows OS'
    }
    if (window.navigator.appVersion.indexOf('Mac') !== -1) {
      operatingSystem = 'MacOS'
    }
    if (window.navigator.appVersion.indexOf('X11') !== -1) {
      operatingSystem = 'UNIX OS'
    }
    if (window.navigator.appVersion.indexOf('Linux') !== -1) {
      operatingSystem = 'Linux OS'
    }
    if (window.navigator.appVersion.indexOf('Android') !== -1) {
      operatingSystem = 'Linux OS'
    }
    if (window.navigator.appVersion.indexOf('iOS') !== -1) {
      operatingSystem = 'Linux OS'
    }

    return operatingSystem
  }
  useEffect(() => {
    const os = getOperatingSystem()
    setSystem(os)
  }, [])

  return (
    <section className={styles.page_container}>
      <div>{system}</div>
    </section>
  )
}

export default React.memo(OSDetect)
