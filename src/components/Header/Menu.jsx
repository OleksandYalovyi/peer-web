import React, { useState } from 'react'
import classNames from 'classnames'
import Th from '../../assets/images/header/th.svg'

import styles from './styles.module.scss'

const Menu = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.menu}>
      <div className={styles.btn} onClick={() => setActive(!active)}>
        <img src={Th} alt="button" />
      </div>

      {active && (
        <div className={classNames(styles.content, { [styles.active]: active })}>Content</div>
      )}
    </div>
  )
}

export default React.memo(Menu)
