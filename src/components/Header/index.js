import React from 'react'
import Pic from 'assets/img/pic.png'
import Plus from 'assets/img/plus.png'
import Share from 'assets/img/share.png'

import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Header = () => {
  console.log('%c   qwe   ', 'color: darkgreen; background: palegreen;')
  return (
    <div className={styles.container}>
      <div className={styles.items_container}>
        <div className={styles.options}>
          <div>
            <img className={styles.icon} src={Pic} alt="pic" />
          </div>
          <div>
            <img className={styles.icon} src={Share} alt="pic" />
          </div>
        </div>
        <div className={styles.options}>
          <div>
            {/* <img className={styles.icon} src={Pic} alt="pic" /> */}
            <div className={styles.lang}>EN</div>
          </div>
          <div>
            <img className={styles.icon} src={Plus} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  )
}
Header.propTypes = {}

export default Header
