/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useCurrentWidth from 'hooks/useCurrentWidth'
import { useTheme } from 'context/theme'
import peerLogo from 'assets/PeerLogo.svg'
import styles from './footer.module.scss'
import { externalLinks, renderIcon, RIGHT_LINKS } from '../footer.utils'

function NavItems({ name, to, router }) {
  return (
    <>
      {router ? (
        <NavLink to={to} className={styles.right_column__link}>
          {name}
        </NavLink>
      ) : (
        <a href={to} target="_blank" rel="noreferrer" className={styles.right_column__links}>
          {name}
        </a>
      )}
    </>
  )
}

function HomeFooter() {
  const width = useCurrentWidth()
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.left_column}>
          <Link to="/">
            <img src={peerLogo} alt="peer logo" className={styles.left_column__logo} />
          </Link>
          <div className={styles.left_column__links}>
            {externalLinks.map((item) => (
              <a
                key={item.id}
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
        </div>

        <div className={styles.right_column}>
          <span className={styles.right_column__heading}>MORE</span>
          <div>
            {RIGHT_LINKS.map((link) => (
              <NavItems name={link.name} to={link.link} router key={link.id} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
