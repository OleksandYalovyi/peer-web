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
import GradientAnimation from '../components/GradientAnimation'

function JobsDetails() {
  const { id } = useParams()

  return (
    <div className={styles.container}>
      <GradientAnimation />
      {id === '1' && <LeadProductDesigner />}
      {id === '2' && <JuniorProductManager />}
      {id === '3' && <SeniorBackendEngineer />}
      {id === '4' && <SeniorIOSEngineer />}
      {id === '5' && <SeniorWebDeveloper />}
      {id === '6' && <GameDesigner />}
      {id === '7' && <SeniorTechnicalArtist />}
    </div>
  )
}

export default JobsDetails
