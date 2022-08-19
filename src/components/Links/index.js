import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'
import styles from './styles.module.scss'
import LangSelector from './LangSelector/index'

const Links = () => {
  const elRef = useRef()

  return (
    <div className={cls(styles.container)}>
      <div className={styles.block}>
        <div className={styles.logo}>© 2022 Peer Inc.</div>
        <LangSelector />
      </div>
      <div className={styles.block}>
        <div className={styles.link}>Terms of Service</div>
        <div className={styles.link}>Privacy Policy</div>
        <div className={styles.link}>Cookie Policy</div>
      </div>
    </div>
  )
}
Links.propTypes = {}

export default Links
