import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './space.module.scss'

export function Space({ children, className }) {
  return <div className={cn(styles.space, className)}>{children}</div>
}

export function Row({ children, className }) {
  return <div className={cn(styles.row, className)}>{children}</div>
}

export function Col({ children, className }) {
  return <div className={cn(styles.col, className)}>{children}</div>
}

Space.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
