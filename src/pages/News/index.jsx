import React from 'react'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Title from './components/Title'
import Contacts from './components/Contacts'
import PartnerLinks from './components/PartnersLinks'
import styles from './news.module.scss'

const News = () => {
  const width = useCurrentWidth()
  const isMobile = width < 480

  return (
    <section className={styles.page_container}>
      <Title />
      <Contacts />
      <div className={styles.separator} />

      <PartnerLinks />
    </section>
  )
}

export default React.memo(News)

News.propTypes = {}
