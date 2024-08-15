import React from 'react'
import T from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './item.module.scss'
import { IconArrow } from '../Icons/index'

function JobsItem({ title, location, position, link }) {
  return (
    <Link className={styles.item} to={link}>
      <div className={styles.item__info}>
        <p className={styles.item__title}>{title}</p>
        <p className={styles.item__text}>
          {position} {(location && ` - ${location}`) || ''}
        </p>
      </div>
      <div className={styles.item__arrow}>
        <IconArrow />
      </div>
    </Link>
  )
}

export default JobsItem

JobsItem.propTypes = {
  title: T.string.isRequired,
  location: T.string.isRequired,
  position: T.string,
  link: T.string.isRequired,
}
