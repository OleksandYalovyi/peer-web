/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react'

import styles from './main.module.scss'

const Links = () => {
  const links = [
    'meta',
    'microsoft',
    'google',
    'tmobile',
    'zenly',
    'magicleap',
    'intel',
    'industrial',
    'cafepress',
    'snap',
  ]

  return (
    <div className={styles.links}>
      {links.map((l) => (
        <a href="/" target="_blank" key={l} className={styles.item}>
          <img src={require(`../../../../assets/team/links/${l}.png`).default} alt={l} />
        </a>
      ))}
    </div>
  )
}

const Main = () => (
  <div className={styles.wrapper}>
    <div className={styles.row}>
      <div className={styles.col}>
        <h1>
          The team behind
          <br />
          the magic
        </h1>
      </div>
      <div className={styles.col}>
        <p>
          The Peer team comprises a highly-accomplished group of engineers, researchers,
          strategists, designers, and builders—all committed to democratizing access to the next
          generation of innovation for billions of people.
          <br />
          <br />
          Much of the Peer team is credited with developing the technical innovations behind a host
          of hardware and software products and services at the world’s largest and most innovative
          companies such as Meta, Google, Magic Leap, and Zenly.
        </p>
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.col}>
        <h2>We’re from</h2>

        <p>
          Meta, Microsoft, Google, T-Mobile, Zenly, Magic Leap, Intel, Industrial Light and Magic,
          CafePress, Snap.
          <br />
          <br />
          Peer’s leadership team has shipped both hardware and software products across a wide
          gamut.
        </p>
      </div>
      <div className={styles.col}>
        <Links />
      </div>
    </div>
  </div>
)

export default Main
