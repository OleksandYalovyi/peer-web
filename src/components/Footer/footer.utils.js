import React from 'react'
import Facebook from '../Icons/Share/Facebook'
import XSocial from '../Icons/Share/XSocial'
import Peer from '../Icons/Share/Peer'
import Telegram from '../Icons/Share/Telegram'
import Linkedin from '../Icons/Share/Linkedin'
import Instagram from '../Icons/Share/Instagram'

export const externalLinks = [
  {
    id: 1,
    name: 'Instagram',
    link: 'https://www.instagram.com/peernewworld',
  },
  {
    id: 2,
    name: 'Telegram',
    link: 'https://t.me/peerinc',
  },
  {
    id: 3,
    name: 'XSocial',
    link: 'https://twitter.com/peernewworld',
  },
]

export const renderIcon = (name, isLight, hovered, screenW, width) => {
  if (name.toLowerCase() === 'facebook') {
    return <Facebook isLight={isLight} hovered={hovered === name} width={width} />
  }
  if (name.toLowerCase() === 'xsocial') {
    return <XSocial isLight={isLight} hovered={hovered === name} width={width} />
  }
  if (name.toLowerCase() === 'peer') {
    return <Peer isLight={isLight} hovered={hovered === name} width={width} />
  }
  if (name.toLowerCase() === 'telegram') {
    return <Telegram isLight={isLight} hovered={hovered === name} width={width} />
  }
  if (name.toLowerCase() === 'linkedin') {
    return <Linkedin isLight={isLight} hovered={hovered === name} width={width} />
  }
  if (name.toLowerCase() === 'instagram') {
    return <Instagram hovered={hovered === name} width={width} />
  }
  return null
}
