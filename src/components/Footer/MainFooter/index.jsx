/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import peerLogoSmall from 'assets/PeerLogoSmall.svg'

import styles from './footer.module.scss'
import Copyright from '../components/Copyright/index'
import Socials from '../components/Socials/index'

function MainFooter() {
  return (
    <footer className={styles.container}>
      <hr />
      <div className={styles.wrapper}>
        <div className={styles.copyright_container}>
          <Link to="/">
            <img src={peerLogoSmall} alt="peer logo" className={styles.peerLogoSmall} />
          </Link>
          <Copyright />
        </div>
        <Socials />
      </div>
    </footer>
  )
}

export default MainFooter
