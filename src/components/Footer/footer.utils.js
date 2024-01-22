import React from 'react'
import Facebook from '../Icons/Share/Facebook'
import XSocial from '../Icons/Share/XSocial'
import Peer from '../Icons/Share/Peer'
import Telegram from '../Icons/Share/Telegram'
import Linkedin from '../Icons/Share/Linkedin'
import links from '../../constants/links'

export const externalLinks = [
  {
    id: 1,
    name: 'Facebook',
    link: 'https://www.facebook.com/peerniverse',
  },
  {
    id: 2,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/company/peerinc/mycompany/verification/',
  },
  {
    id: 3,
    name: 'Telegram',
    link: 'https://t.me/peerinc',
  },
  {
    id: 4,
    name: 'XSocial',
    link: 'https://twitter.com/peerglobal',
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
  return null
}

export const RIGHT_LINKS = [
  {
    id: 1,
    name: 'FAQ',
    link: '/faq',
  },
  {
    id: 2,
    name: 'Privacy',
    link: links.privacyPolicy,
  },
  {
    id: 3,
    name: 'Term',
    link: links.termsService,
  },
  {
    id: 4,
    name: 'Get the app',
    link: '/',
  },
]
