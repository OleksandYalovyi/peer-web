import React from 'react'
import Title from './components/Title'
import Contacts from './components/Contacts/index'
import LatestNews from './components/LatestNews/index'
import PartnerLinks from './components/PartnersLinks'
// import propTypes from 'prop-types'

import styles from './news.module.scss'

const News = () => (
  <section className={styles.page_container}>
    <Title />
    <Contacts />
    <div className={styles.separator} />
    <LatestNews />
    <div className={styles.separator} />
    <PartnerLinks />
  </section>
)

export default React.memo(News)

News.propTypes = {}
