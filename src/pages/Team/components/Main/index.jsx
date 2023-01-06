/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react'

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
      <div className={styles.col}>
        <p>
          The Peer team comprises a highly-accomplished group of engineers, researchers,
          strategists, designers, and builders—all committed to building and democratizing access to
          the next generation of innovation for billions of people.
          <br />
          <br />
          Much of the Peer team is credited with developing the technical innovations behind of
          hardware, software and services at some of the world’s largest and most future forward
          companies such as Microsoft, Meta, Google, Magic Leap, and Zenly.
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
          Most of us worked on
          <a
            href="https://techcrunch.com/2022/05/18/social-maps-app-zenly-rolls-out-its-own-maps/"
            target="_blank"
            rel="noreferrer"
          >
            Zenly’s social 3D maps ecosystem
          </a>
          leading to 160M downloads worldwide and 45M daily active users. Some have worked on
          globally known hardware products such as the
          <a href="https://youtu.be/xNqs_S-zEBY?t=99" target="_blank" rel="noreferrer">
            Leap Motion Controller
          </a>
          and
          <a href="https://youtu.be/y6SKWBX2GKM?t=13" target="_blank" rel="noreferrer">
            Density People Counter
          </a>
          .
        </p>
      </div>
      <div className={styles.col}>
        <Links />
      </div>
    </div>
  </div>
)

export default Main
