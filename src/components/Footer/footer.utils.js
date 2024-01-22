import React from 'react'
import Facebook from '../Icons/Share/Facebook'
import XSocial from '../Icons/Share/XSocial'
import Peer from '../Icons/Share/Peer'
import Telegram from '../Icons/Share/Telegram'
import Linkedin from '../Icons/Share/Linkedin'
import links from '../../constants/links'

export const FOOTER_LIST_ITEMS = [
  {
    title: 'Platforms',
    content: [
      {
        title: 'Peer social app',
        to: 'https://apps.apple.com/us/app/peer/id1669571704',
        router: false,
      },
      {
        title: 'Peer Market',
        to: 'https://market.peerclub.com/',
        router: false,
      },
      {
        title: 'Omni block explorer',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Peer Blockchain',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Zen wallet',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Peer Labs',
        to: '/placeholder',
        router: true,
      },
    ],
  },
  {
    title: 'Peer Inc.',
    content: [
      {
        title: 'About the company',
        to: '/',
        router: true,
      },
      {
        title: 'Company news',
        to: '/press',
        router: true,
      },
      {
        title: 'Brand toolkit',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Jobs and internships',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Investors',
        to: '/placeholder',
        router: true,
      },
    ],
  },
  {
    title: 'Help',
    content: [
      {
        title: 'Help Center',
        to: 'https://community.peerclub.com/hc/en-us',
        router: false,
      },
      {
        title: 'Using Peer',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Peer for creators',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Ads Help Center',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Managing your account',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Email Preference Center',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Rules and policies',
        to: 'https://community.peerclub.com/hc/en-us',
        router: false,
      },
      {
        title: 'Contact us',
        to: 'https://community.peerclub.com/hc/en-us/requests/new',
        router: false,
      },
    ],
  },
  {
    title: 'Developer resources',
    content: [
      {
        title: 'Developer home',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Documentation',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Forums',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Communities',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Developer blog',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Engineering blog',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Developer terms',
        to: '/placeholder',
        router: true,
      },
    ],
  },
  {
    title: 'Business resources',
    content: [
      {
        title: 'Advertise',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Peer for business',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Resources and guides',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Peer for marketers',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Marketing insights',
        to: '/placeholder',
        router: true,
      },
      {
        title: 'Brand inspiration',
        to: '/placeholder',
        router: true,
      },
    ],
  },
]

export const BOTTOM_LINKS = [
  {
    title: 'Cookies',
    to: '/placeholder',
    router: true,
  },
  {
    title: 'Privacy',
    to: 'https://community.peerclub.com/hc/en-us/articles/17261918037787-privacy-policy',
    router: false,
  },
  {
    title: 'Terms and conditions',
    to: 'https://community.peerclub.com/hc/en-us/articles/17262293261979-terms-of-service',
    router: false,
  },
]

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

export const renderIcon = (name, isLight, hovered, width) => {
  if (name.toLowerCase() === 'facebook') {
    return <Facebook isLight={isLight} hovered={hovered === name} size={width <= 680 && 'sm'} />
  }
  if (name.toLowerCase() === 'xsocial') {
    return <XSocial isLight={isLight} hovered={hovered === name} size={width <= 680 && 'sm'} />
  }
  if (name.toLowerCase() === 'peer') {
    return <Peer isLight={isLight} hovered={hovered === name} size={width <= 680 && 'sm'} />
  }
  if (name.toLowerCase() === 'telegram') {
    return <Telegram isLight={isLight} hovered={hovered === name} size={width <= 680 && 'sm'} />
  }
  if (name.toLowerCase() === 'linkedin') {
    return <Linkedin isLight={isLight} hovered={hovered === name} size={width <= 680 && 'sm'} />
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
