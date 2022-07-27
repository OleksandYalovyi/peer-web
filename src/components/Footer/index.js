import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.content_section}>
        <div className={styles.column_left}>
          <div className={styles.content_wrapper}>
            <p>
              Peer is a metaverse company based in Seattle. We’re focused on developing consumer
              electronics, software, and blockchain services for the future of computing.
            </p>
            <p>Our mission is to bring the world into the metaverse.</p>
          </div>
        </div>
        <div className={styles.column_right}>
          <div className={styles.block}>
            <div className={styles.title}>Into the metaverse.</div>
            <div className={styles.text}>The future never stop coming.</div>
          </div>
          <div className={styles.block}>
            <div className={styles.title}>Sign up for product updates</div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.footer_section}>
        <div className={styles.copyright}>© 2022 Peer, Inc.</div>
        <div className={styles.language_wrapper}>United States (English)</div>
      </div>
    </div>
  </div>
)
Footer.propTypes = {}

export default Footer
