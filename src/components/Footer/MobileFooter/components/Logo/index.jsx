import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import peerLogo from 'assets/PeerLogo.svg'
import peerLogoSmall from 'assets/PeerLogoSmall.svg'

import styles from './styles.module.scss'

function Logo({ showPeerLogo }) {
  return (
    <Link to="/">
      {showPeerLogo ? (
        <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
      ) : (
        <img src={peerLogoSmall} alt="peer logo" className={styles.peerLogoSmall} />
      )}
    </Link>
  )
}

Logo.propTypes = {
  showPeerLogo: PropTypes.bool.isRequired,
}

export default Logo
