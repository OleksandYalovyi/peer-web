import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './articlecomponents.module.scss'

export function Text({ className, children }) {
  return <p className={cn(styles.text, className)}>{children}</p>
}

export function Title({ className, children }) {
  return <h1 className={cn(styles.title, className)}>{children}</h1>
}

export function Image({ className, src }) {
  return <div className={cn(styles.image, className)} style={{ backgroundImage: `url(${src})` }} />
}

export function List({ className, itemClassName, items }) {
  return (
    <ul className={cn(styles.list, className)}>
      {items.map((i) => (
        <li className={cn(styles.item, itemClassName)}>{i}</li>
      ))}
    </ul>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

List.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
}
