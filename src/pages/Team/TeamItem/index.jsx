import React from 'react'
import T from 'prop-types'
import styles from './item.module.scss'

function TeamItem({ src, name, position, social }) {
  return (
    <div className={styles.item}>
      <img className={styles.item__avatar} src={src} alt="avatar" />
      <h3 className={styles.item__name}>{name}</h3>
      <p className={styles.item__position}>{position}</p>
      {social.map((item) => (
        <a
          key={item.icon}
          href={item.link}
          className={styles.item__icon}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default TeamItem

TeamItem.propTypes = {
  src: T.string,
  name: T.string,
  position: T.string,
  social: T.string,
}
