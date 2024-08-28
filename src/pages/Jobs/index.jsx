import React from 'react'
import styles from './styles.module.scss'
import JobsItem from './components/Item/index'
import GradientAnimation from './components/GradientAnimation'
import { JOBS_DATA } from './jobs-data'
import routing from '../../routing/path'

function Jobs() {
  return (
    <div className={styles.container}>
      <GradientAnimation />
      <h1 className={styles.title}>Jobs</h1>

      <div className={styles.content}>
        {JOBS_DATA.map((item, i) => (
          <JobsItem
            key={item.info.title}
            link={routing.withoutAuth.jobsDetails.url(i + 1)}
            {...item.info}
          />
        ))}
      </div>
    </div>
  )
}

export default Jobs
