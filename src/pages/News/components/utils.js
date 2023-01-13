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
    to: '#',
    element: ({ hovered, width, isLight, size }) => (
      <Geekwire width={width} isLight={isLight} size={size} hovered={hovered} />
    ),
  },
  {
    title: 'coindesk',
    to: '/#',
    element: ({ hovered, width, isLight, size }) => (
      <Coindesc width={width} isLight={isLight} size={size} hovered={hovered} />
    ),
  },
  {
    title: 'techcrunch',
    to: '/#',
    element: ({ hovered, width, isLight, size }) => (
      <Techcrunch width={width} isLight={isLight} size={size} hovered={hovered} />
    ),
  },
  {
    title: 'forbes',
    to: '/#',
    element: ({ hovered, width, isLight, size }) => (
      <Forbes width={width} isLight={isLight} size={size} hovered={hovered} />
    ),
  },
  {
    title: 'decrypt',
    to: '/#',
    element: ({ hovered, width, isLight, size }) => (
      <Decrypt width={width} isLight={isLight} size={size} hovered={hovered} />
    ),
  },
  {
    title: 'restofworld',
    to: '/#',
    element: ({ hovered, width, isLight, size }) => (
      <RestofWorld width={width} isLight={isLight} size={size} hovered={hovered} />
    ),
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
