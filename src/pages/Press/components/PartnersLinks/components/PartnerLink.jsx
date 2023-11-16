import React, { useState } from 'react'
import useCurrentWidth from 'hooks/useCurrentWidth'
import T from 'prop-types'

import styles from './styles.module.scss'

function PartnerLink({ link }) {
  const width = useCurrentWidth()
  const isMobile = width < 768
  const [hovered, setHovered] = useState('')

  return (
    <a
      href={link.to}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(link.title)}
      onMouseLeave={() => setHovered('')}
      className={styles.link}
    >
      {link.element({ hovered, isMobile })}
    </a>
  )
}

PartnerLink.propTypes = {
  link: T.shape({
    title: T.string,
    to: T.string,
    element: T.element,
  }),
}

export default PartnerLink
