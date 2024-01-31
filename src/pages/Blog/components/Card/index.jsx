import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom/dist/index'
import cn from 'classnames'
import routing from '../../../../routing/path'
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
  id = 0,
  createdAt = 1705297675461,
  title = 'No name',
  text = 'No description',
  image = '',
}) {
  return (
    <div className={cn(styles.card, styles.large)}>
      <NavLink
        to={`${routing.withoutAuth.blog}/${id}`}
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className={styles.content}>
        <span className={styles.tab}>Product update</span>

        <NavLink to={`${routing.withoutAuth.blog}/${id}`} className={styles.title}>
          {title}
        </NavLink>
        <p className={styles.text}>{text}</p>
        <p className={styles.dateTime}>{formatTimestamp(createdAt)}</p>
      </div>
    </div>
  )
}

export function Big({ id = 0, createdAt = 1705297675461, title = 'No name', image = '' }) {
  return (
    <div className={cn(styles.card, styles.big)}>
      <NavLink
        to={`${routing.withoutAuth.blog}/${id}`}
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className={styles.content}>
        <NavLink to={`${routing.withoutAuth.blog}/${id}`} className={styles.title}>
          {title}
        </NavLink>
        <p className={styles.dateTime}>{formatTimestamp(createdAt)}</p>
      </div>
    </div>
  )
}

export function Medium({
  id = 0,
  createdAt = 1705297675461,
  title = 'No name',
  text = 'No description',
  image = '',
  withImage = true,
}) {
  return (
    <div className={cn(styles.card, styles.medium, { [styles.hasImage]: !withImage })}>
      {withImage && (
        <NavLink
          to={`${routing.withoutAuth.blog}/${id}`}
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className={styles.content}>
        <NavLink to={`${routing.withoutAuth.blog}/${id}`} className={styles.title}>
          {title}
        </NavLink>
        <p className={styles.dateTime}>{formatTimestamp(createdAt)}</p>
        {!withImage && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  )
}

export function Small({ id = 0, createdAt = 1705297675461, title = 'No name', image = '' }) {
  return (
    <div className={cn(styles.card, styles.small)}>
      <NavLink
        to={`${routing.withoutAuth.blog}/${id}`}
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className={styles.content}>
        <NavLink to={`${routing.withoutAuth.blog}/${id}`} className={styles.title}>
          {title}
        </NavLink>
        <p className={styles.dateTime}>{formatTimestamp(createdAt)}</p>
      </div>
    </div>
  )
}

Large.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Big.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Medium.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  withImage: PropTypes.bool,
}

Small.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
