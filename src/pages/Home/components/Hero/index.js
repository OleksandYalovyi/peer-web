import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import Warning from 'assets/images/home/warning.svg'
import PropTypes from 'prop-types'
import Progress from '../ProgressBar'
import styles from './styles.module.scss'

const Hero = () => {
  const [days, setDays] = useState('180')
  const [hours, setHours] = useState('01')
  const [min, setMin] = useState('57')
  const [sec, setSec] = useState('36')

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.title}>
          Building the metaverse for <br />
          the real world.
        </div>
        <div className={styles.amount}>$20.5M</div>
        <Progress capacity={170000000} start={40000000} />
        <Link to="/" className={styles.button}>
          Buy Peer (PMC) Coins
        </Link>
        <div className={styles.sale}>Private Sale Ends June 27 · Public Sale Ends December 27</div>
        <div className={styles.timer_container}>
          <div className={styles.timer_item}>
            <div className={styles.legend}>DAYS</div>
            <div className={styles.time}>{days}</div>
          </div>
          <div className={styles.timer_item}>
            <div className={styles.legend}>HOURS</div>
            <div className={styles.time}>{hours}</div>
          </div>
          <div className={styles.timer_item}>
            <div className={styles.legend}>MIN.</div>
            <div className={styles.time}>{min}</div>
          </div>
          <div className={styles.timer_item}>
            <div className={styles.legend}>SEC.</div>
            <div className={styles.time}>{sec}</div>
          </div>
        </div>
        <div className={styles.description}>
          <img src={Warning} alt="warning" />
          Peer is not on Telegram or Discord. We will build our community in the metaverse.
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
