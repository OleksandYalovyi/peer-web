import React from 'react'
import Coindesc from 'components/Icons/Partners/Coindesc'
import Decrypt from 'components/Icons/Partners/Decrypt'
import Forbes from 'components/Icons/Partners/Forbes'
import Geekwire from 'components/Icons/Partners/Geekwire'
import RestofWorld from 'components/Icons/Partners/RestofWorld'
import Techcrunch from 'components/Icons/Partners/Techcrunch'

const partners = [
  {
    title: 'geekwire',
    to: 'https://www.geekwire.com/2022/seattle-startup-raises-14m-to-fuel-ambitious-plan-for-a-social-network-built-on-the-blockchain/',
    element: ({ hovered, isMobile }) => <Geekwire isMobile={isMobile} hovered={hovered} />,
  },
  {
    title: 'coindesk',
    to: 'https://www.coindesk.com/',
    element: ({ hovered, isMobile }) => <Coindesc isMobile={isMobile} hovered={hovered} />,
  },
  {
    title: 'techcrunch',
    to: 'https://techcrunch.com/',
    element: ({ hovered, isMobile }) => <Techcrunch isMobile={isMobile} hovered={hovered} />,
  },
  {
    title: 'forbes',
    to: 'https://www.forbes.com/sites/kenrapoza/2022/12/08/the-defi-winter-is-it-time-for-investors-to-move-on/',
    element: ({ hovered, isMobile }) => <Forbes isMobile={isMobile} hovered={hovered} />,
  },
  {
    title: 'decrypt',
    to: 'https://decrypt.co/101251/before-building-the-metaverse-blockchain-needs-an-operating-system',
    element: ({ hovered, isMobile }) => <Decrypt isMobile={isMobile} hovered={hovered} />,
  },
  {
    title: 'restofworld',
    to: 'https://peer.inc/news',
    element: ({ hovered, isMobile }) => <RestofWorld isMobile={isMobile} hovered={hovered} />,
  },
]

const aboutItems = [
  {
    title: 'our team',
    description:
      'we’re the original team behind zenly’s beloved social map, emojis, and awesome experience.',
  },
  {
    title: 'what’s next',
    description: `first, we’re going to pick up where zenly left off. we’ll spend the next as we’re doing this, 
    please use the form below to let all your friends know. this will help the team out in a huge way.`,
  },
  {
    title: 'the reboot',
    description: `first, we’re going to pick up where zenly left off. we’ll spend the next as we’re doing this, 
    please use the form below to let all your friends know. this will help the team out in a huge way.`,
  },
]

export default { partners, aboutItems }
