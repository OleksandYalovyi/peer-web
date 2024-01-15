import React from 'react'
import FacebookImage from 'assets/Icons/social/facebook.svg'
import LinkedinImage from 'assets/Icons/social/linkedin.svg'
import TelegramImage from 'assets/Icons/social/telegram.svg'
import XSocialImage from 'assets/Icons/social/XSocial.svg'
import styles from './sharearticles.module.scss'

function ShareArticles() {
  return (
    <div className={styles.share}>
      <p className={styles.text}>SHARE ARTICLE</p>

      <div className={styles.actions}>
        <a className={styles.shareItem}>
          <img src={XSocialImage} alt="XSocial" />
        </a>
        <a className={styles.shareItem}>
          <img src={FacebookImage} alt="Facebook" />
        </a>
        <a className={styles.shareItem}>
          <img src={LinkedinImage} alt="Linkedin" />
        </a>
        <a className={styles.shareItem}>
          <img src={TelegramImage} alt="Telegram" />
        </a>
      </div>
    </div>
  )
}

export default React.memo(ShareArticles)
