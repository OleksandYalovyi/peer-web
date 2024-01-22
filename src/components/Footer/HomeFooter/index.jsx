import React, { useState } from 'react'
import cls from 'classnames'
import { useTheme } from 'context/theme'
import useCurrentWidth from 'hooks/useCurrentWidth'
import links from 'constants/links'
import FooterMobile from './FooterMobile/index'
import styles from './footer.module.scss'
import { externalLinks, renderIcon } from '../footer.utils'

function HomeFooter() {
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const width = useCurrentWidth()
  const isMobile = width <= 680

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
              {externalLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={styles.share_icon}
                  target="_blank"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered('')}
                  rel="noreferrer"
                >
                  {renderIcon(item.name, isLight, hovered, width)}
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

export default HomeFooter
