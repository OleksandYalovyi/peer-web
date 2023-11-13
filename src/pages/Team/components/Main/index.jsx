/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import classNames from 'classnames'
import styles from './main.module.scss'

const Links = () => {
  const links = [
    {
      name: 'meta',
      width: 40,
    },
    {
      name: 'microsoft',
      width: 30,
    },
    {
      name: 'google',
      width: 30.5,
    },
    {
      name: 'tmobile',
      width: 25,
    },
    {
      name: 'zenly',
      width: 22.5,
    },
    {
      name: 'magicleap',
      width: 31,
    },
    {
      name: 'intel',
      width: 44.5,
    },
    {
      name: 'industrial',
      width: 32.5,
    },
    {
      name: 'cafepress',
      width: 40,
    },
    {
      name: 'snap',
      width: 34.5,
    },
  ]

  return (
    <div className={styles.links}>
      {links.map((l) => (
        <div href="/" key={l?.name} className={styles.item}>
          <img
            src={require(`../../../../assets/team/links/${l?.name}.png`).default}
            alt=""
            style={{ width: `${l?.width}px` }}
          />
        </div>
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

      <div className={classNames(styles.col, styles.fixed)}>
        <h3>
          The Peer team comprises a highly-accomplished group of engineers, researchers,
          strategists, designers, and builders—all committed to building and democratizing access to
          the next generation of innovation for billions of people.
        </h3>

        <h4>
          Much of the Peer team is credited with developing the technical innovations behind of
          hardware, software and services at some of the world’s largest and most future forward
          companies.
        </h4>
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.col}>
        <h2>We’re from</h2>

        <p>
          Meta, Microsoft, Google, T-Mobile, Zenly, Magic Leap, Intel, Industrial Light and Magic,
          CafePress, and Snap.
          <br />
          <br />
          Our core team built{' '}
          <a
            href="https://techcrunch.com/2022/05/18/social-maps-app-zenly-rolls-out-its-own-maps/"
            target="_blank"
            rel="noreferrer"
          >
            Zenly's 3D map
          </a>{' '}
          , which has been downloaded 160 million times worldwide and boasts 45 million daily active
          users. In addition, some of us have worked on globally recognized hardware products such
          as the{' '}
          <a href="https://youtu.be/xNqs_S-zEBY?t=99" target="_blank" rel="noreferrer">
            Leap Motion Controller
          </a>{' '}
          and{' '}
          <a href="https://youtu.be/y6SKWBX2GKM?t=13" target="_blank" rel="noreferrer">
            Density People Counter
          </a>
          .
        </p>
      </div>

      <div className={classNames(styles.col, styles.fixed)}>
        <Links />
      </div>
    </div>
  </div>
)

export default Main
