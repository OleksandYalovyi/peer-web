import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.scss'
import SeniorBackendEngineer from './SeniorBackendEngineer'
import SeniorIOSEngineer from './SeniorIOSEngineer/index'
import SeniorWebDeveloper from './SeniorWebDeveloper/index'
import LeadProductDesigner from './LeadProductDesigner/index'
import JuniorProductManager from './JuniorProductManager/index'
import GameDesigner from './GameDesigner/index'
import SeniorTechnicalArtist from './SeniorTechnicalArtist/index'

function JobsDetails() {
  const { id } = useParams()

  return (
    <div className={styles.container}>
      {id === '1' && <SeniorBackendEngineer />}
      {id === '2' && <SeniorIOSEngineer />}
      {id === '3' && <SeniorWebDeveloper />}
      {id === '4' && <LeadProductDesigner />}
      {id === '5' && <JuniorProductManager />}
      {id === '6' && <GameDesigner />}
      {id === '7' && <SeniorTechnicalArtist />}
    </div>
  )
}

export default JobsDetails
