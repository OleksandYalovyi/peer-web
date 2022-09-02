/* eslint-disable max-len */
import React from 'react'
import styles from './styles.module.scss'

const List = () => {
  const articles = [
    {
      content:
        'Metaverse and Blockchain Technology Company Peer Inc. Partners with Fresh Consulting to Bring An AR-based Metaverse to Market',
    },
    {
      content: 'Peer: The Metaverse for Augmented Reality',
    },
    {
      content: 'Peer Aims to Reinvent the ICO with the New ICX Standard',
    },
    {
      content:
        "Peer Inc. Announces Main Network Launch of the World's First Blockchain Dedicated to Building the Metaverse",
    },
    {
      content: 'Peer Inc. Lays Foundation for the World’s First Ubiquitous Real-time Metaverse',
    },
    {
      content: 'Peer, Inc. Unveils New Framework for the Metaverse',
    },
  ]

  return (
    <div className={styles.container}>
      {articles.map((a) => (
        <div className={styles.article} key={a.title}>
          <div className={styles.content}>{a.content}</div>
        </div>
      ))}
    </div>
  )
}

export default List
