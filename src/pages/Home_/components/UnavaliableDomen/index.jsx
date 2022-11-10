import React from 'react'
// import T, { func } from 'prop-types'
import copyImage from 'assets/copy.svg'
import styles from './unavaliable_domen.module.scss'

const UnavaliableDomen = () => {
  function copy() {
    navigator.clipboard.writeText('copied')
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.separator}`}>
        <div className={styles.domaine_name_container}>
          <div className={styles.domaine_name}>tony.pmc</div>
          <div className={styles.copy_image_wrapper} onClick={copy}>
            <img src={copyImage} alt="copy" />
          </div>
        </div>
        <div className={styles.status}>Unavailable</div>
      </div>
      <div className={`${styles.row} ${styles.separator}`}>
        <div className={styles.title}>Parent</div>
        <div className={styles.content}>.pmc</div>
      </div>
      <div className={`${styles.row} ${styles.separator}`}>
        <div className={styles.title}>Address Endpoint</div>
        <div className={`${styles.content}`}>
          <div className={styles.link}>36cdjihB78MbWVdW8H8UBu3fJXBNFRHWCz</div>
          <div className={styles.copy_image_wrapper} onClick={copy}>
            <img src={copyImage} alt="copy" />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Expiration Date</div>
        <div>19 Oct 2023 11:15:15</div>
      </div>
    </div>
  )
}
// AvaliableDomen.propTypes = {}
export default UnavaliableDomen
