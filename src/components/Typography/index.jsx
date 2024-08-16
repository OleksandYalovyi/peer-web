import React from 'react'
import cn from 'classnames'
import T from 'prop-types'

import styles from './styles.module.scss'

function Heading({ size = 1, className, style, children }) {
  return (
    <h1 className={cn(styles.heading, className, styles[`size_${size}`])} style={style}>
      {children}
    </h1>
  )
}

Heading.propTypes = {
  children: T.node,
  size: T.oneOf([1, 2]),
  className: T.string,
  style: T.shape({}),
}

function Paragraph({ size = 1, className, style, children }) {
  return (
    <p className={cn(styles.paragraph, className, styles[`size_${size}`])} style={style}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: T.node,
  size: T.oneOf([1, 2]),
  className: T.string,
  style: T.shape({}),
}

const Typography = {
  Heading,
  Paragraph,
}

export default Typography
