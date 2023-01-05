import React, { useState } from 'react'
import styles from './main.module.scss'

const Main = () => {
  const [state, setState] = useState(null)

  return (
    <section className={styles.section}>
      <></>
    </section>
  )
}

export default React.memo(Main)
