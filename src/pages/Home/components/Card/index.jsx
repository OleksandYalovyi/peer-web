/* eslint-disable react/prop-types */
import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Card = ({ to, name, children, size }) => (
  <NavLink to={to} className={classNames(styles.card, { [styles.medium]: size === 'medium' })}>
    {name}
    <div className={styles.img}>{children}</div>
  </NavLink>
)

export default Card
