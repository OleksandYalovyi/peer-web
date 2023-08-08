import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
// import { US } from 'country-flag-icons/react/3x2'
import { useTheme } from 'context/theme'
import useCurrentWidth from 'hooks/useCurrentWidth'
import Logo from 'components/Icons/LogoIcon'
import Facebook from 'components/Icons/Share/Facebook'
import Peer from 'components/Icons/Share/Peer'
import Twitter from 'components/Icons/Share/Twitter'
import Telegram from 'components/Icons/Share/Telegram'
import Linkedin from 'components/Icons/Share/Linkedin'
import Privacy from 'assets/PeerPrivacyPolicy.pdf'
import Terms from 'assets/Peer-TermsandConditions.c660affe.pdf'
// import Dropdown from 'components/Dropdown/index'
import styles from './footer.module.scss'

const ShareData = [
  // {
  //   id: 1,
  //   name: 'Peer',
  //   link: 'https://icx.peer.inc/landing/contacts',
  // },
  {
    id: 2,
    name: 'Twitter',
    link: 'https://twitter.com/peerglobal',
  },
  {
    id: 3,
    name: 'Telegram',
    link: 'https://t.me/peerinc',
  },
  {
    id: 3,
    name: 'Facebook',
    link: 'https://www.facebook.com/peerniverse',
  },
  {
    id: 4,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/company/peerinc/',
  },
]

const Footer = () => {
  const { scrollDirection } = useScroll()
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const width = useCurrentWidth()

  const renderIcon = (name) => {
    if (name.toLowerCase() === 'facebook') {
      return <Facebook isLight={isLight} hovered={hovered === name} size={width <= 680 && 'sm'} />
    }
    if (name.toLowerCase() === 'twitter') {
      return <Twitter isLight={isLight} hovered={hovered === name} size={width <= 680 && 'sm'} />
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
    <footer
      className={cls(styles.container, {
        [styles.hidden]:
          scrollDirection === 'down' && scrollDirection !== 'bottom' && scrollDirection !== 'top',
      })}
    >
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <Link className={styles.logo_container} to="/">
            <Logo isLight={isLight} width={width <= 680 ? 43 : 55} />
          </Link>
          <div className={styles.copyright_container}>
            <span className={styles.copyright}>© 2023 Peer Inc.</span>
            <span className={styles.link}>
              <a href={Privacy} target="_blank" rel="noreferrer">
                Privacy
              </a>
              <a href={Terms} target="_blank" rel="noreferrer">
                Terms
              </a>
              {/* <a href="#" target="_blank" rel="noreferrer">
                Whitepaper
              </a> */}
            </span>
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.share_container}>
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
          {/* <div className={styles.flag_button}>
            <div className={styles.flag_icon}>
              <US title="United States" className={styles.icon} />
            </div>
          </div> */}
          {/* <div className={styles.mob}>
            <Dropdown
              list={{
                type: 'countries',
                data: [
                  {
                    text: 'English (US)',
                    onClick: () => {},
                  },
                  {
                    text: 'Français',
                    onClick: () => {},
                  },
                  {
                    text: 'Español',
                    onClick: () => {},
                  },
                  {
                    text: '简体中文',
                    onClick: () => {},
                  },
                  {
                    text: 'Русский',
                    onClick: () => {},
                  },
                  {
                    text: '한국인',
                    onClick: () => {},
                  },
                  {
                    text: 'Tiếng Việt',
                    onClick: () => {},
                  },
                ],
              }}
            >
              <div className={styles.flag_button}>
                <div className={styles.flag_icon}>
                  <US title="United States" className={styles.icon} />
                </div>
              </div>
            </Dropdown>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
