import React from 'react'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Title from './components/Title'
import Contacts from './components/Contacts/index'
import LatestNews from './components/LatestNews/index'
import PartnerLinks from './components/PartnersLinks'
import LinkToJoin from './components/LinkToJoin/index'
import styles from './news.module.scss'

const News = () => {
  const width = useCurrentWidth()
  const isMobile = width < 480

  return (
    <section className={styles.page_container}>
      <Title />
      <Contacts />
      <div className={styles.separator} />
      <LatestNews />
      <div className={styles.separator} />
      <PartnerLinks />
      {isMobile && <LinkToJoin />}
    </section>
  )
}

export default React.memo(News)

News.propTypes = {}
