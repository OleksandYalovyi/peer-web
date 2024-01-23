import React from 'react'
import T from 'prop-types'
import styles from './item.module.scss'
import { IconDownload, IconLocation } from '../Icons'

function JobsItem({ title, location, time, link, linkFile }) {
  return (
    <div className={styles.item}>
      <div className={styles.item__info}>
        <p className={styles.item__title}>{title}</p>
        {location && (
          <div className={styles.item__location}>
            <IconLocation />
            <p className={styles.item__location_name}>{location}</p>
            {time && <p className={styles.item__time}>{time}</p>}
          </div>
        )}
      </div>

      <div className={styles.item__links}>
        {linkFile && (
          <a href={linkFile} download className={styles.item__link_load}>
            <IconDownload />
            job description
          </a>
        )}
        <a href={link} className={styles.item__link}>
          apply now
        </a>
      </div>
    </div>
  )
}

export default JobsItem

JobsItem.propTypes = {
  title: T.string,
  location: T.string,
  linkFile: T.string,
  time: T.string,
  link: T.string,
}
