import React from 'react'
import classNames from 'classnames'

import apple from 'assets/emojis/Peer_Apple.png'
import duck from 'assets/emojis/Peer_Duck.png'
import hand from 'assets/emojis/Peer_Hand.png'
import hi from 'assets/emojis/Peer_Hi.png'

import Button from 'components/Button/index'
import { useNavigate } from 'react-router-dom'
import routing from '../../routing/path'
import styles from './page_404.module.scss'

function Page404() {
  const navigate = useNavigate()
  const goToHomepage = () => {
    navigate(routing.withoutAuth.home)
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>404</div>
        <Button onClick={goToHomepage} variant="primary">
          go to homepage
        </Button>
        <img className={classNames(styles.apple, styles.emoji)} src={apple} alt="" />
        <img className={classNames(styles.emoji, styles.duck)} src={duck} alt="" />
        <img className={classNames(styles.emoji, styles.hand)} src={hand} alt="" />
        <img className={classNames(styles.emoji, styles.hi)} src={hi} alt="" />
      </div>
    </div>
  )
}

export default Page404
