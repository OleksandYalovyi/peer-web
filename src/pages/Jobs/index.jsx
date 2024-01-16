import React, { useState } from 'react'
import CareersItem from './Item'
import Stars from '../../assets/jobs/stars.png'
import Play from '../../assets/jobs/play.png'
import styles from './styles.module.scss'
import { defaultJobData, jobData } from './mock/index'

const buttons = [
  'all',
  'product & design',
  'hr & finances',
  'data',
  'marketing',
  'engineering',
  'other',
]

function Jobs() {
  const [selectedItem, setSelectedItem] = useState(null)

  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (item) => item.toUpperCase())
  }

  const handleBtnClick = (itemName) => {
    setSelectedItem(capitalizeFirstLetter(itemName))
  }
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.description}>
          <h1 className={styles.title}>Go Team Go!</h1>
          <p className={styles.text}>
            Built by a small, scrappy team of experienced builders with a strong background in
            consumer products and a relentless focus on the intersection of culture and community.
          </p>
          <p className={styles.text}>
            Our mission is to create a the ultimate hotspot for people that LIVES to play, learn,
            work and hang together.
          </p>
        </div>
        <div className={styles.stars}>
          <img src={Stars} alt="stars" />
        </div>
        <div className={styles.play}>
          <img src={Play} alt="play" />
        </div>
      </section>
      <section>
        <ul className={styles.button_group}>
          {buttons.map((btn) => (
            <li key={btn} onClick={() => handleBtnClick(btn)}>
              {btn}
            </li>
          ))}
        </ul>
        <h2 className={styles.jobs_title}>{selectedItem || `No positions open`}</h2>

        <div className={styles.jobs_list}>
          {[...jobData, ...defaultJobData].map((item) => (
            <CareersItem {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Jobs
