/* eslint-disable react/prop-types */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cn from 'classnames'

import ArrowRightThin from 'components/Icons/ArrowRightThin/index'

import styles from './actionLink.module.scss'

function ActionLink({ to, onClick, name, className }) {
  return (
    <>
      {to ? (
        <Link to={to} className={cn(styles.link, className)}>
          <span className={styles.name}>{name}</span>
          <ArrowRightThin />
        </Link>
      ) : (
        <a onClick={onClick} className={cn(styles.link, className)}>
          <span className={styles.name}>{name}</span>
          <ArrowRightThin />
        </a>
      )}
    </>
  )
}

export default ActionLink
