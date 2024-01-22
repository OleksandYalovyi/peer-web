import React, { useState } from 'react'
import cls from 'classnames'
import { useTheme } from 'context/theme'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Facebook from 'components/Icons/Share/Facebook'
import Peer from 'components/Icons/Share/Peer'
import XSocial from 'components/Icons/Share/XSocial'
import Telegram from 'components/Icons/Share/Telegram'
import Linkedin from 'components/Icons/Share/Linkedin'
import links from 'constants/links'
import FooterMobile from './FooterMobile/index'
import styles from './footer.module.scss'

const ShareData = [
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

function HomeFooter() {
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const width = useCurrentWidth()
  const isMobile = width <= 680

  const renderIcon = (name) => {
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

  return (
    <footer className={cls(styles.container)}>
      <div className={styles.main_container}>
        {!isMobile ? (
          <>
            <div className={styles.left_container}>
              <a href={links.privacyPolicy} target="_blank" rel="noreferrer">
                Privacy
              </a>
              <a href={links.termsService} target="_blank" rel="noreferrer">
                Terms
              </a>
              <a href={links.termsService} target="_blank" rel="noreferrer">
                FAQ
              </a>
              {ShareData.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={styles.share_icon}
                  target="_blank"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered('')}
                  rel="noreferrer"
                >
                  {renderIcon(item.name)}
                </a>
              ))}
            </div>
            <div className={styles.right_container}>© {new Date().getFullYear()} PEER INC.</div>
          </>
        ) : (
          <FooterMobile />
        )}
      </div>
    </footer>
  )
}

HomeFooter.propTypes = {}

export default React.memo(HomeFooter)
