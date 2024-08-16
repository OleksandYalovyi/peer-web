/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import cls from 'classnames'
import useScroll from 'hooks/useScroll'
import peerLogo from 'assets/PeerLogo.svg'
import peerLogoSmall from 'assets/PeerLogoSmall.svg'
import QRCodeModal from 'components/Modals/QRCodeModal/index'
import useQRCodeModal from 'components/Modals/QRCodeModal/useQRCodeModal'
import styles from './header.module.scss'
import GetButton from './components/GetButton'
import useCurrentSize from '../../../hooks/useCurrentSize'
import MobileMenu from './components/MobileMenu'
import links from '../header.utils'

function NavItems({ name, link, openedMenu, clickHandler }) {
  return (
    <div
      className={cls(styles.nav_item, { [styles.open]: openedMenu === name })}
      onClick={() => clickHandler(name)}
    >
      {link ? <NavLink to={link}>{name}</NavLink> : name}
    </div>
  )
}

function MainHeader() {
  const { scrollDirection } = useScroll()
  const [openedMenu, setIsOpen] = useState('')
  const { isQRCodeModalOpen, setIsQRCodeModalOpen, closeQRCodeModal } = useQRCodeModal()
  const ref = useRef('')
  const { width } = useCurrentSize()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const isMobile = width < 680

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen('')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  const logoClickHandler = () => {
    setIsOpen('')
    setIsMobileOpen(false)
  }

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
      ref={ref}
    >
      <div className={styles.main_container}>
        <div className={styles.main_container__left}>
          <Link to="/">
            <img
              src={peerLogoSmall}
              alt="peer logo"
              className={styles.peerLogoSmall}
              onClick={logoClickHandler}
            />
          </Link>
        </div>
        <div className={styles.main_container__right}>
          {!isMobile && (
            <div className={styles.get_peer_wrapper}>
              <GetButton label="I’M READY" onClick={setIsQRCodeModalOpen} />
            </div>
          )}
        </div>
      </div>
      <QRCodeModal isOpen={isQRCodeModalOpen} onClose={closeQRCodeModal} />
    </header>
  )
}

MainHeader.propTypes = {}

export default React.memo(MainHeader)
