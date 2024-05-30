import React, { useState } from 'react'
import cn from 'classnames'
import JobsItem from './components/Item'
import { IconPlay } from './components/Icons'
import VideoModal from './components/VideoModal/index'
import Stars from '../../assets/jobs/stars.png'
import styles from './styles.module.scss'

import { allJobs, productAndDesign, otherJobs, engineeringJobs } from './mock/index'

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
  const [isOpen, setOpen] = useState(false)
  // const [loading, setLoading] = useState(false)

  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (item) => item.toUpperCase())
  }

  function selectJobsData(jobsData) {
    const jobDataMapping = {
      all: allJobs,
      'product & design': productAndDesign,
      other: otherJobs,
      engineering: engineeringJobs,
    }

    setSelectedJobs(jobDataMapping[jobsData] || [])
  }

  const handleBtnClick = (itemName) => {
    // setLoading(true)
    setSelectedItem(capitalizeFirstLetter(itemName))

    setTimeout(() => {
      selectJobsData(itemName)
      // setLoading(false)
    }, 0)
  }

  const isJobsAvailable = Boolean(selectedJobs.length)

  return (
    <div className={styles.container}>
      {isOpen && <VideoModal onClose={() => setOpen(false)} />}
      <section className={styles.header}>
        <div className={styles.description}>
          <h1 className={styles.title}>Go team go!</h1>
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
            <IconPlay />
          </div>
        </div>
      </section>
      <section>
        <ul className={styles.button_group}>
          {buttons.map((btn) => (
            <li
              className={cn(
                styles.button_group__item,
                selectedItem.toLowerCase() === btn.toLowerCase() ? styles.selected : '',
              )}
              key={btn}
              onClick={() => handleBtnClick(btn)}
            >
              {btn}
            </li>
          ))}
        </ul>
        <h2
          className={cn(styles.jobs_title, {
            [styles.jobs_title__empty]: !isJobsAvailable,
          })}
        >
          {isJobsAvailable ? selectedItem : 'No positions open'}
        </h2>
        {/* {loading && (
          <div
            style={{ color: 'white', minHeight: '400px', textAlign: 'center', fontSize: '36px' }}
          >
            Loading...
          </div>
        )} */}
        <div
          className={cn(styles.jobs_list, {
            [styles.no_jobs]: !isJobsAvailable,
          })}
        >
          {isJobsAvailable ? (
            <>
              {[...selectedJobs].map((item) => (
                <JobsItem {...item} key={item.id} />
              ))}
            </>
          ) : (
            <>
              <div className={styles.subtitle}>
                <p>Interested in Peer but not looking for a position?</p>
                <p>We’d love to meet you!</p>
              </div>
              <a href="mailto:jobs@peer.inc" className={styles.link}>
                reach out
              </a>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Jobs
