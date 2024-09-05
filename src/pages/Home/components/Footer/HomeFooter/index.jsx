import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'context/theme'
import useCurrentSize from 'hooks/useCurrentSize'
import links from 'constants/links'
import peerLogo from 'assets/PeerLogo.svg'
import styles from './footer.module.scss'
import { externalLinks, renderIcon } from '../footer.utils'

function HomeFooter() {
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const { width } = useCurrentSize()

  return (
    <footer className={styles.container}>
      <div className={styles.copyright_container}>
        <Link to="/">
          <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
        </Link>
        <>© {new Date().getFullYear()} Peer</>
      </div>
      <div className={styles.terms_container}>
        <a href={links.termsService} target="_blank" rel="noreferrer">
          Terms
        </a>
        <a href={links.privacyPolicy} target="_blank" rel="noreferrer">
          Privacy
        </a>
      </div>
      <div className={styles.socials}>
        {externalLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered('')}
            rel="noreferrer"
          >
            {renderIcon(item.name, isLight, hovered, width)}
          </a>
        ))}
      </div>
    </footer>
  )
}

HomeFooter.propTypes = {}

export default HomeFooter
