import React from 'react'
import cls from 'classnames'

import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function BurgerMenu({ isOpen, onClick }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toggle}>
        <div
          className={cls({ [styles['menu-trigger']]: true, [styles['menu-trigger-open']]: isOpen })}
        />
        <div>
          <div
            onClick={(event) => {
              onClick(event)
            }}
            id="togglenav"
          >
            <span className={styles.closeIcon} />
            <span className={styles.closeIcon} />
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="path">
          <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22" />
        </symbol>
      </svg>
    </div>
  )
}

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

export default BurgerMenu
