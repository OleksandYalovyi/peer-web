/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cls from 'classnames'
import useCurrentWidth from 'hooks/useCurrentWidth'
import { ExpandMore, ExpandLess } from '@mui/icons-material/index'
import { FOOTER_LIST_ITEMS, BOTTOM_LINKS } from './constants'
import styles from './footer.module.scss'

const NavItems = ({ name, to, router }) => (
  <>
    {router ? (
      <NavLink to={to} className={styles.link}>
        {name}
      </NavLink>
    ) : (
      <a href={to} target="_blank" rel="noreferrer" className={styles.link}>
        {name}
      </a>
    )}
  </>
)

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
          {FOOTER_LIST_ITEMS.map((i) => (
            <div className={styles.listItem}>
              <h5 className={styles.title} onClick={() => expandListHandler(i.title)}>
                {i.title}
                {isSmallDevice && i.title === expandedItemTitle && <ExpandLess />}
                {isSmallDevice && i.title !== expandedItemTitle && <ExpandMore />}
              </h5>
              <ul className={cls({ [styles.active]: i.title === expandedItemTitle })}>
                {i.content.map((li) => (
                  <li>
                    <NavItems name={li.title} to={li.to} router={li.router} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottomRow}>
          <span>© 2023 Peer Inc.</span>
          {BOTTOM_LINKS.map((link) => (
            <NavItems name={link.title} to={link.to} router={link.router} />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
