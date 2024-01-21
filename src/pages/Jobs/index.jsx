import React, { useState } from 'react'
import JobsItem from './components/Item'
import VideoModal from './components/VideoModal/index'
import Stars from '../../assets/jobs/stars.png'
import Play from '../../assets/jobs/play.png'
import styles from './styles.module.scss'
import {
  allJobs,
  productAndDesign,
  hrAndFinancesJobs,
  dataJobs,
  marketingJobs,
  engineeringJobs,
  otherJobs,
} from './mock/index'

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
  const [selectedItem, setSelectedItem] = useState('All')
  const [selectedJobs, setSelectedJobs] = useState(allJobs)
  const [loading, setLoading] = useState(false)
  const [isOpen, setOpen] = useState(false)

  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (item) => item.toUpperCase())
  }

  function selectJobsData(jobsData) {
    const jobDataMapping = {
      all: allJobs,
      'product & design': productAndDesign,
      'hr & finances': hrAndFinancesJobs,
      data: dataJobs,
      marketing: marketingJobs,
      engineering: engineeringJobs,
    }

    setSelectedJobs(jobDataMapping[jobsData] || otherJobs)
  }

  const handleBtnClick = (itemName) => {
    setLoading(true)
    setSelectedItem(capitalizeFirstLetter(itemName))

    setTimeout(() => {
      selectJobsData(itemName)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className={styles.container}>
      {isOpen && <VideoModal onClose={() => setOpen(false)} />}
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
          <div className={styles.play} onClick={() => setOpen(true)}>
            <img src={Play} alt="play" />
          </div>
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
        {loading ? (
          <div
            style={{ color: 'white', minHeight: '400px', textAlign: 'center', fontSize: '36px' }}
          >
            Loading...
          </div>
        ) : (
          <div className={styles.jobs_list}>
            {[...selectedJobs].map((item) => (
              <JobsItem {...item} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Jobs
