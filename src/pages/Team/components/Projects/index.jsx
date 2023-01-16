import React from 'react'
import { NavLink } from 'react-router-dom'
import T from 'prop-types'
import cls from 'classnames'
import peer from 'assets/team/WhatWeBuild/peerlogo.svg'
import index from 'assets/team/WhatWeBuild/index.svg'
import pb from 'assets/team/WhatWeBuild/pb.svg'
import zen from 'assets/team/WhatWeBuild/zenlogo.svg'

import styles from './projects.module.scss'

const data = [
  {
    name: 'Peer',
    content: `peer is a 3D social network that lets you create your own world.`,
    icon: {
      src: peer,
      width: 123,
    },
    link: '/placeholder',
    withRouter: true,
    isInternal: true,
  },
  {
    name: 'divider',
    type: 'vertical',
  },
  {
    name: 'Zen',
    content: `Zen is a self-custodial wallet for the Peer blockchain ecosystem.`,
    icon: {
      src: zen,
      width: 324,
    },
    link: '/placeholder',
    withRouter: true,
    isInternal: true,
  },
  {
    name: 'divider',
    type: 'horizontal',
  },
  {
    name: 'pb',
    content: `Peer Blockchain (PB) is fast, scalable, and upgradable blockchain.`,
    icon: {
      src: pb,
      width: 125.5,
    },
    link: '/placeholder',
    withRouter: true,
    isInternal: true,
  },
  {
    name: 'divider',
    type: 'vertical',
  },
  {
    name: 'index',
    content: `index is a social launchpad for crypto projects and crypto assets.`,
    icon: {
      src: index,
      width: 137,
    },
    link: '/placeholder',
    withRouter: true,
    isInternal: true,
  },
]

const Link = ({ to, withRouter, isInternal, ...linkProps }) =>
  withRouter ? (
    <NavLink to={to} className={styles.item_link}>
      {linkProps.children}
    </NavLink>
  ) : (
    <a
      href={to}
      target={isInternal ? '_self' : '_blank'}
      className={styles.item_link}
      rel="noreferrer"
    >
      {linkProps.children}
    </a>
  )

const Projects = () => (
  <section className={styles.section}>
    <div className={styles.title}>What we’re building</div>
    <div className={styles.subtitle}>The excitement is building!</div>
    <div className={styles.cards_container}>
      {data.map(({ name, content, icon, link, withRouter, isInternal, type }) =>
        name !== 'divider' ? (
          <div className={styles.card_container} key={name}>
            <div className={styles.icon_wrapper}>
              <img
                className={styles.icon}
                src={icon.src}
                style={{ width: `${icon.width}px` }}
                alt=""
              />
            </div>
            <div className={styles.content}>{content}</div>
            <Link to={link} withRouter={withRouter} isInternal={isInternal}>
              <span className={styles.card_button}>visit</span>
            </Link>
          </div>
        ) : (
          <div
            className={cls(styles.divider, {
              [styles.horizontal]: type === 'horizontal',
              [styles.vertical]: type === 'vertical',
            })}
          />
        ),
      )}
    </div>
    <div className={styles.join_container}>
      <div className={styles.title}>Want to get involved?</div>
      <NavLink to="/" className={styles.btn}>
        Join the community
      </NavLink>
    </div>
  </section>
)

export default React.memo(Projects)

Link.propTypes = {
  to: T.string,
  withRouter: T.bool,
  isInternal: T.bool,
}
