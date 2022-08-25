import React, { useRef } from 'react'
import cls from 'classnames'
import Terms from 'assets/Peer-TermsandConditions.pdf'
import Privacy from 'assets/PeerPrivacyPolicy.pdf'
import styles from './styles.module.scss'
import LangSelector from './LangSelector/index'

const Links = () => {
  const elRef = useRef()

  return (
    <div className={cls(styles.container)}>
      <div className={styles.block}>
        <div className={styles.logo}>© {new Date().getFullYear()} Peer Inc.</div>
        <LangSelector />
      </div>

      <div className={styles.block}>
        <a href={Terms} className={styles.link} target="_blank" rel="noreferrer">
          Terms of Service
        </a>
        <a href={Privacy} className={styles.link} target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
        <div className={styles.link}>Cookie Policy</div>
      </div>
    </div>
  )
}
Links.propTypes = {}

export default Links
