import React from 'react'
import peer from 'assets/team/peer.svg'
import index from 'assets/team/index.svg'
import pmc from 'assets/team/pmc.svg'
import zen from 'assets/team/zen.svg'

import styles from './projects.module.scss'

const data = [
  {
    type: 'Social',
    name: 'Peer',
    content: `Peer is a multi-dimensional social network that lets users create, 
    share, and explore persisted digital contents that’s overlaid on top of the physical world.`,
    icon: {
      src: peer,
      width: 101.5,
    },
  },
  {
    type: 'Wallet',
    name: 'Zen',
    content: `The Zen wallet is a decentralized self-custodial 
    digital asset manager and marketplace platform.`,
    icon: {
      src: zen,
      width: 105.5,
    },
  },
  {
    type: 'Blockchain',
    name: 'PMC (Peer Multi-Chain)',
    content: `PMC is a fast, scalable, and upgradable blockchain designed to 
    facilitate safe and secured value exchange for billions of people.`,
    icon: {
      src: pmc,
      width: 108,
    },
  },
  {
    type: 'Exchange',
    name: 'Index',
    content: `Index is a DEX (decentralized exchange) that enables safe and 
    secured peer-to-peer transactions via smart-contracts and protocols.`,
    icon: {
      src: index,
      width: 110.5,
    },
  },
]

const Projects = () => (
  <section className={styles.section}>
    <div className={styles.title}>What we’re building</div>
    <div className={styles.cards_container}>
      {data.map(({ type, name, content, icon }) => (
        <a className={styles.item} href="#" target="_blank">
          <div className={styles.content_container}>
            <div className={styles.type}>{type}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.content}>{content}</div>
          </div>
          <div className={styles.icon_wrapper}>
            <img
              className={styles.icon}
              src={icon.src}
              style={{ width: `${icon.width}px` }}
              alt=""
            />
          </div>
        </a>
      ))}
    </div>
  </section>
)

export default React.memo(Projects)
