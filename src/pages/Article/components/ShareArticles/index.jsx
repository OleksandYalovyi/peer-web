import React from 'react'
import FacebookImage from 'assets/Icons/social/facebook.svg'
import LinkedinImage from 'assets/Icons/social/linkedin.svg'
import TelegramImage from 'assets/Icons/social/telegram.svg'
import XSocialImage from 'assets/Icons/social/XSocial.svg'
import styles from './sharearticles.module.scss'

function ShareArticles() {
  const shareOnTwitter = () => {
    const urlToShare = window.location.href
    const text = `Peer | Blog`
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(text)}`

    window.open(twitterShareUrl, '_blank')
  }

  const shareOnFacebook = () => {
    const urlToShare = window.location.href
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`

    window.open(facebookShareUrl, '_blank')
  }

  const shareOnLinkedIn = () => {
    const urlToShare = window.location.href
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(urlToShare)}`

    window.open(linkedInShareUrl, '_blank')
  }

  const shareOnTelegram = () => {
    const urlToShare = window.location.href
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(urlToShare)}`

    window.open(telegramShareUrl, '_blank')
  }

  return (
    <div className={styles.share}>
      <p className={styles.text}>SHARE ARTICLE</p>

      <div className={styles.actions}>
        <a className={styles.shareItem} onClick={shareOnTwitter}>
          <img src={XSocialImage} alt="XSocial" />
        </a>
        <a className={styles.shareItem} onClick={shareOnFacebook}>
          <img src={FacebookImage} alt="Facebook" />
        </a>
        <a className={styles.shareItem} onClick={shareOnLinkedIn}>
          <img src={LinkedinImage} alt="Linkedin" />
        </a>
        <a className={styles.shareItem} onClick={shareOnTelegram}>
          <img src={TelegramImage} alt="Telegram" />
        </a>
      </div>
    </div>
  )
}

export default React.memo(ShareArticles)
