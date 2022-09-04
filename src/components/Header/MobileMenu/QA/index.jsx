/* eslint-disable max-len */
import React from 'react'
import Accordion from 'components/Accordion'
import styles from './styles.module.scss'

// {
//   id: 1,
//   header: { type: 'Step1:', name: 'Verification' },
//   text:
//     'In Documents section read and agree to memorandum in order to enable ability to exchange for PMC.'
// },

const QA = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const articles = [
    {
      id: 1,
      title: 'What is Peer building?',
      content:
        'We’re building an augmented reality social network on top of a high-speed blockchain. Imagine Pokémon Go meets Facebook.',
    },

    {
      id: 2,
      title: 'Why?',
      content:
        'The next frontier cover experiences that can be found at the intersection of the digital-physical divide. We aim to be the first to open the door to this frontier and invite the world in.',
    },

    {
      id: 3,
      title: 'Who’s working on Peer?',
      content:
        'Peer has 56 people (and we’re hiring!) on our team. They’re concentrated mostly in Ukraine, India, and Vietnam with the core leadership team in the United States.',
    },

    {
      id: 4,
      title: 'What is PMC used for?',
      content:
        'The Peer Metaverse Coin (PMC)—or simply Peer—is a native crypto utility that’s used to power all activites on Peer3. PMC will also be used for high level activites such as voting on P1 and development on P2.',
    },

    {
      id: 5,
      title: 'Do I need PMC to join?',
      content:
        'No, PMC is not required for any standard activities. You’ll need PMC for the advanced (read: super fun) features though. ',
    },

    {
      id: 6,
      title: 'Is there an ICO for PMC?',
      content:
        'Better than ICO. We’re offering PMC through an ICX (Initial Coin Exchange). The ICX is a new standard that we’ve developed where a coin or token is first offered in a swap as a security so it is lawful and ends as a utility so it can be listed on any crypto exchange.',
    },

    {
      id: 7,
      title: 'What is PMC backed by?',
      content:
        'Mostly crazy. Our approach to the mataverse is very differentiated and we’re breaking the limits of what’s possible today to take people to a better tonorrow. We also have incredible software and hardware patents that cover a host of metaverse-related user experiences.',
    },

    {
      id: 8,
      title: 'When will PMC list?',
      content:
        'PMC can list when it has provable utility. It all depends on how fast we can release our products so that PMC can be used as a functioning utility. We are charting to April 2023 or sooner.',
    },
  ]

  return (
    <div className={styles.container}>
      {articles.map((el) => (
        <Accordion
          expanded={expanded === el.id}
          onChange={handleChange(el.id)}
          header={el.title}
          description={el.content}
          key={el.id}
        />
      ))}
    </div>
  )
}

export default QA
