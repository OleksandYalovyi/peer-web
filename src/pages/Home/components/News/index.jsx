import React from 'react'
import { NavLink } from 'react-router-dom'
import LittleChevron from 'assets/Home/littlechevron.svg'
import styles from './styles.module.scss'

const News = () => (
  <section className={styles.news}>
    <div className={styles.latest}>
      <h4 className={styles.title}>Latest</h4>

      <p className={styles.text}>
        Peer Acquires Elite Team of Engineers Behind Zenly’s Popular 3D Maps
      </p>
    </div>

    <NavLink to="/news" className={styles.more}>
      More News <img src={LittleChevron} alt="Chevron" />
    </NavLink>
  </section>
)

export default News
