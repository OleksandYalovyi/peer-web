import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.scss'
import SeniorBackendEngineer from './SeniorBackendEngineer'

function JobsDetails() {
  const { id } = useParams()

  return <div className={styles.container}>{id === '1' && <SeniorBackendEngineer />}</div>
}

export default JobsDetails
