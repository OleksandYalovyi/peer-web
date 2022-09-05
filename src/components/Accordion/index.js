import React from 'react'
import {
  Accordion as AccordionMaterial,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import { string, bool, func } from 'prop-types'
import arrow from 'assets/chevron-right-solid.svg'

import styles from './style.module.scss'

const Accordion = ({ header, description, expanded, onChange }) => (
  <div className={styles.root}>
    <AccordionMaterial classes={{ root: styles.accordion }} expanded={expanded} onChange={onChange}>
      <AccordionSummary
        classes={{
          root: styles['accordion-summary'],
          rounded: styles['accordion-rounded'],
          content: styles['accordion-content'],
          expanded: styles.expanded,
          expandIcon: styles['expand-icon'],
        }}
        expandIcon={<img src={arrow} alt="arrow" className={styles.arrow} />}
      >
        <div className={styles.text}>{header}</div>
      </AccordionSummary>
      <AccordionDetails
        classes={{
          root: styles['accordion-details'],
        }}
      >
        {description}
      </AccordionDetails>
    </AccordionMaterial>
  </div>
)

Accordion.propTypes = {
  header: string,
  description: string,
  expanded: bool,
  onChange: func,
}

export default Accordion
