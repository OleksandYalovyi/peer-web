import React from 'react'
import { Link } from 'react-router-dom'

import { IconArrowLeft } from '../Icons'
import styles from './styles.module.scss'
import routing from '../../../../../routing/path'

function BackButton() {
  return (
    <div className={styles.container}>
      <Link to={routing.withoutAuth.jobs} className={styles.back_link}>
        <IconArrowLeft />
        <p className={styles.title}>Jobs</p>
      </Link>
    </div>
  )
}

export default BackButton
