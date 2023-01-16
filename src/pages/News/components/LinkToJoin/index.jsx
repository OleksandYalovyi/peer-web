import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

const LinkToJoin = () => (
  <div className={styles.join_container}>
    <div className={styles.title}>Want to get involved?</div>
    <NavLink to="/placeholder" className={styles.btn}>
      Join the community
    </NavLink>
  </div>
)

export default React.memo(LinkToJoin)

LinkToJoin.propTypes = {}
