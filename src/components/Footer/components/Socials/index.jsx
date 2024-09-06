import React, { useState } from 'react'
import { useTheme } from 'context/theme'
import useCurrentSize from 'hooks/useCurrentSize'

import { externalLinks, renderIcon } from '../../footer.utils'
import styles from './styles.module.scss'

function Socials() {
  const [hovered, setHovered] = useState('')
  const { isLight } = useTheme()
  const { width } = useCurrentSize()

  return (
    <div className={styles.social_container}>
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
  )
}

export default Socials
