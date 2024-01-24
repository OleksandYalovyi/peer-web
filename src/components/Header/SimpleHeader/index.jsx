/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import peerLogo from 'assets/PeerLogo.svg'

import styles from './header.module.scss'
import BackButton from './components/BackButton'

function SimpleHeader() {
  const { scrollDirection } = useScroll()
  const navigate = useNavigate()

  const handleBack = useCallback(() => navigate(-1), [])
  return (
    <header
      className={cls(
        styles.container,
        {
          [styles.hidden]:
            scrollDirection === 'down' && scrollDirection !== 'bottom' && scrollDirection !== 'top',
        },
        {
          [styles.bg]: scrollDirection === 'up' || scrollDirection === 'bottom',
        },
      )}
    >
      <BackButton onClick={handleBack} />
      <Link to="/">
        <img src={peerLogo} alt="peer logo" className={styles.peerLogo} />
      </Link>
      <div />
    </header>
  )
}

export default SimpleHeader
