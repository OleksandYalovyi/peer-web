import React, { useState } from 'react'
import T from 'prop-types'

function PartnerLink({ link }) {
  const [hovered, setHovered] = useState('')

  return (
    <a
      href={link.to}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(link.title)}
      onMouseLeave={() => setHovered('')}
    >
      {link.element({ hovered })}
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
