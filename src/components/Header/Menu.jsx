import React from 'react'
import PropTypes from 'prop-types'
import Th from '../../assets/images/header/th.svg'

import styles from './styles.module.scss'

const Menu = ({ active, setActive }) => (
  <div className={styles.menu}>
    <div className={styles.btn} onClick={() => setActive(!active)}>
      <img src={Th} alt="button" />
    </div>
  </div>
)

Menu.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
}

export default React.memo(Menu)
