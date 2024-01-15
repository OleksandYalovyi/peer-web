import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './card.module.scss'

function formatTimestamp(timestamp) {
  const date = new Date(timestamp)
  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ]
  const monthName = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  const formattedDate = `${monthName} ${day}, ${year}`

  return formattedDate
}

export function Large({
  createdAt = 1705297675461,
  title = 'No name',
  text = 'No description',
  image = '',
}) {
  return (
    <div className={cn(styles.card, styles.large)}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />

      <div className={styles.content}>
        <span className={styles.tab}>Product update</span>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <p className={styles.datetime}>{formatTimestamp(createdAt)}</p>
      </div>
    </div>
  )
}

export function Big({ createdAt = 1705297675461, title = 'No name', image = '' }) {
  return (
    <div className={cn(styles.card, styles.big)}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.datetime}>{formatTimestamp(createdAt)}</p>
      </div>
    </div>
  )
}

export function Medium({
  createdAt = 1705297675461,
  title = 'No name',
  text = 'No description',
  image = '',
}) {
  return (
    <div className={cn(styles.card, styles.medium, { [styles.hasImage]: !image })}>
      {image && <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />}

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.datetime}>{formatTimestamp(createdAt)}</p>
        {!image && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  )
}

Large.propTypes = {
  createdAt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Big.propTypes = {
  createdAt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Medium.propTypes = {
  createdAt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
