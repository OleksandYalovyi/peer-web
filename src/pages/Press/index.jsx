import React from 'react'
import Title from './components/Title'
import Contacts from './components/Contacts'
import PartnerLinks from './components/PartnersLinks'
import styles from './press.module.scss'

function Press() {
  return (
    <section className={styles.page_container}>
      <Title />
      <Contacts />
      <div className={styles.separator} />
      <PartnerLinks />
    </section>
  )
}

export default React.memo(Press)
