import React from 'react'
import { NavLink } from 'react-router-dom'
import LittleChevron from 'assets/Home/littlechevron.svg'
import styles from './styles.module.scss'

const News = () => (
  <section className={styles.news}>
    <div className={styles.latest}>
      <h4 className={styles.title}>Latest</h4>

      <p className={styles.text}>
        Peer Tackles the Metaverse with the Beta Launch of Its Open World Social App
      </p>
    </div>

    <NavLink to="/news" className={styles.more}>
      More News <img src={LittleChevron} alt="Chevron" />
    </NavLink>
  </section>
)

export default News
