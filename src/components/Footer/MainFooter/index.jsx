import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from 'classnames'
import T from 'prop-types'

import { useTheme } from 'context/theme'
import useCurrentSize from 'hooks/useCurrentSize'
import links from 'constants/links'
import peerLogo from 'assets/PeerLogo.svg'
import routing from 'routing/path'
import ArrowLeftRounded from 'assets/Home/arrowLeftRounded.svg'

import styles from './footer.module.scss'
import { externalLinks, renderIcon } from '../footer.utils'

function HomeFooter({ showVision }) {
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const { width } = useCurrentSize()

  return (
    <footer className={styles.footer}>
      {showVision && (
        <div className={styles.links_container}>
          <Link to={routing.withoutAuth.ourVision} className={styles.largeLink}>
            Our Vision
            <img src={ArrowLeftRounded} alt="Arrow" />
          </Link>
        </div>
      )}

      <hr />

      <div className={styles.container}>
        <div className={cls(styles.copyright_container, styles.item)}>
          <Link to="/">
            <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
          </Link>
          <>© {new Date().getFullYear()} Peer</>
        </div>
        <div className={cls(styles.terms_container, styles.item)}>
          <a
            href={links.termsService}
            className={styles.terms_element}
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
          <div className={styles.terms_element} />
          <a
            href={links.privacyPolicy}
            className={styles.terms_element}
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
        </div>
        <div className={cls(styles.socials, styles.item)}>
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
      </div>
    </footer>
  )
}

HomeFooter.propTypes = {
  showVision: T.bool.isRequired,
}

export default HomeFooter
