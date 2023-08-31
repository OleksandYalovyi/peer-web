import React from 'react'
import { NavLink } from 'react-router-dom'
import LittleChevron from 'assets/Home/littlechevron.svg'
import styles from './styles.module.scss'

const News = () => (
  <section className={styles.news}>
    <div className={styles.latest}>
      <a
        href="https://finance.yahoo.com/news/introducing-peer-3d-social-network-123958762.html"
        target="_blanc"
        className={styles.spoiler}
      >
        PRESS RELEASE
        <div className={styles.dash} />
        August 8, 2023
      </a>
      <h4 className={styles.title}>
        Introducing 'Peer': The 3D Social Network,
        <br /> Available Now{' '}
      </h4>
    </div>

    <NavLink to="/news" className={styles.more}>
      More News <img src={LittleChevron} alt="Chevron" />
    </NavLink>
  </section>
)

export default News
