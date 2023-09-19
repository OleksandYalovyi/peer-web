import React, { useState } from 'react'
import cls from 'classnames'
import useCurrentWidth from 'hooks/useCurrentWidth'
import { ExpandMore, ExpandLess } from '@mui/icons-material/index'
import links from 'constants/links'
import styles from './footer.module.scss'
import constants from './constants'

function HomeFooter() {
  const width = useCurrentWidth()
  const isSmallDevice = width < 821
  const [expandedItemTitle, setexpandedItemTitle] = useState('')

  const expandListHandler = (title) => {
    if (!isSmallDevice) {
      return
    }
    if (title === expandedItemTitle) {
      setexpandedItemTitle('')
      return
    }
    setexpandedItemTitle(title)
  }
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {constants.FOOTER_LIST_ITEMS.map((i) => (
            <div className={styles.listItem}>
              <h5 className={styles.title} onClick={() => expandListHandler(i.title)}>
                {i.title}
                {isSmallDevice && i.title === expandedItemTitle && <ExpandLess />}
                {isSmallDevice && i.title !== expandedItemTitle && <ExpandMore />}
              </h5>
              <ul className={cls({ [styles.active]: i.title === expandedItemTitle })}>
                {i.content.map((li) => (
                  <li>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottomRow}>
          <span>© 2023 Peer Inc.</span>
          <span>Cookies</span>
          <a href={links.privacyPolicy} target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a href={links.termsService} target="_blank" rel="noreferrer">
            Terms and conditions
          </a>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
