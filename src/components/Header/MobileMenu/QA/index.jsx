/* eslint-disable max-len */
import React from 'react'
import styles from './styles.module.scss'

const QA = () => {
  const articles = [
    {
      title: 'What is Peer building?',
      content:
        'We’re building an augmented reality social network on top of a high-speed blockchain. Imagine Pokémon Go meets Facebook.',
    },

    {
      title: 'Why?',
      content:
        'The next frontier cover experiences that can be found at the intersection of the digital-physical divide. We aim to be the first to open the door to this frontier and invite the world in.',
    },

    {
      title: 'Who’s working on Peer?',
      content:
        'Peer has 56 people (and we’re hiring!) on our team. They’re concentrated mostly in Ukraine, India, and Vietnam with the core leadership team in the United States.',
    },

    {
      title: 'What is PMC used for?',
      content:
        'The Peer Metaverse Coin (PMC)—or simply Peer—is a native crypto utility that’s used to power all activites on Peer3. PMC will also be used for high level activites such as voting on P1 and development on P2.',
    },

    {
      title: 'Do I need PMC to join?',
      content:
        'No, PMC is not required for any standard activities. You’ll need PMC for the advanced (read: super fun) features though. ',
    },

    {
      title: 'Is there an ICO for PMC?',
      content:
        'Better than ICO. We’re offering PMC through an ICX (Initial Coin Exchange). The ICX is a new standard that we’ve developed where a coin or token is first offered in a swap as a security so it is lawful and ends as a utility so it can be listed on any crypto exchange.',
    },

    {
      title: 'What is PMC backed by?',
      content:
        'Mostly crazy. Our approach to the mataverse is very differentiated and we’re breaking the limits of what’s possible today to take people to a better tonorrow. We also have incredible software and hardware patents that cover a host of metaverse-related user experiences.',
    },

    {
      title: 'When will PMC list?',
      content:
        'PMC can list when it has provable utility. It all depends on how fast we can release our products so that PMC can be used as a functioning utility. We are charting to April 2023 or sooner.',
    },
  ]

  return (
    <div className={styles.container}>
      {articles.map((a) => (
        <div className={styles.article} key={a.title}>
          <div className={styles.title}>{a.title}</div>
          <div className={styles.content}>{a.content}</div>
        </div>
      ))}
    </div>
  )
}

export default QA
