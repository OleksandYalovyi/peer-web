import React, { useState } from 'react'
import XSocial from 'components/Icons/Share/XSocial'
import Telegram from 'components/Icons/Share/Telegram'
import Linkedin from 'components/Icons/Share/Linkedin'
import Facebook from 'components/Icons/Share/Facebook'
import links from 'constants/links'
import styles from './footermobile.module.scss'

function FooterMobile() {
  const [hovered, setHovered] = useState('')

  const items = [
    {
      id: 1,
      icon: <XSocial width="23" hovered={hovered === 'XSocial'} isGrey />,
      link: 'https://twitter.com/peerglobal',
      type: 'XSocial',
    },
    {
      id: 2,
      icon: <Telegram width="23.5" hovered={hovered === 'Telegram'} isGrey />,
      link: 'https://t.me/peerinc',
      type: 'Telegram',
    },
    {
      id: 3,
      icon: <Facebook width="11" hovered={hovered === 'Facebook'} isGrey />,
      link: 'https://www.facebook.com/peerniverse',
      type: 'Facebook',
    },
    {
      id: 4,
      icon: <Linkedin hovered={hovered === 'Linkedin'} isGrey />,
      link: 'https://www.linkedin.com/company/peerinc/mycompany/verification/',
      type: 'Linkedin',
    },
  ]

  return (
    <div className={styles.mobile_footer}>
      <div className={styles.social_container}>
        <div className={styles.social_wrapper}>
          {items.map(({ icon, link, type, id }) => (
            <a
              key={id}
              href={link}
              className={styles.share_icon}
              target="_blank"
              onMouseEnter={() => setHovered(type)}
              onMouseLeave={() => setHovered('')}
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.copyright_container}>
        <span className={styles.copyright}>© 2023 Peer Inc.</span>
        <span className={styles.link}>
          <a href={links.privacyPolicy} target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a href={links.termsService} target="_blank" rel="noreferrer">
            Terms
          </a>
        </span>
      </div>
    </div>
  )
}

export default FooterMobile
