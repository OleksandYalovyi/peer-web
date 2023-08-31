import React from 'react'
import styles from './manifesto.module.scss'
import constants from './constants'

function Manifesto() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>OUR MANIFESTO: EMBRACING THE METAVERSE</h4>
      <div className={styles.descriptionItems}>
        {constants.DESCRIPTION_ITEMS.map((i) => (
          <div className={styles.descriptionItem}>
            {i.title && <h5 className={styles.descriptionTitle}>{i.title}</h5>}
            {i.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Manifesto
