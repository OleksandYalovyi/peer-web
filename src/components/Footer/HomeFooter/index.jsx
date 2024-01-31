import React, { useState } from 'react'
import { useTheme } from 'context/theme'
import useCurrentSize from 'hooks/useCurrentSize'
import links from 'constants/links'
import styles from './footer.module.scss'
import { externalLinks, renderIcon } from '../footer.utils'

function HomeFooter() {
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const { width } = useCurrentSize()

  return (
    <footer className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.links}>
          <a href={links.privacyPolicy} target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a href={links.termsService} target="_blank" rel="noreferrer">
            Terms
          </a>
          <a href={links.faq} target="_blank" rel="noreferrer">
            FAQ
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
      </div>
      <div className={styles.right_container}>© {new Date().getFullYear()} PEER INC.</div>
    </footer>
  )
}

HomeFooter.propTypes = {}

export default HomeFooter
