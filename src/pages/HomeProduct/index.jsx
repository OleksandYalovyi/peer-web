/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import useCurrentWidth from 'hooks/useCurrentWidth'
import cls from 'classnames'
import ZemSlider from './components/Slider'
import styles from './styles.module.scss'
import ZEN from '../../assets/zen.svg'
import BackArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'

const HomeProduct = () => {
  const sliderRef = useRef(null)
  const width = useCurrentWidth()
  const isMobile = width < 600

  const onNextSlide = () => sliderRef.current.slickNext()
  const onPrevtSlide = () => sliderRef.current.slickPrev()

  return (
    <section className={styles.section}>
      <div className={styles.main_container}>
        <div className={styles.top}>
          <div className={styles.main}>
            <div className={styles.nav}>
              <div className={styles.zen_logo}>
                <img src={ZEN} alt="ZEN" width={isMobile ? 75 : 90} />
              </div>
              <div className={styles.slider_nav}>
                <div className={styles.arrow_wrapper} onClick={onPrevtSlide}>
                  <img src={BackArrow} alt="prev Slide" width={30} />
                </div>
                <div className={styles.arrow_wrapper} onClick={onNextSlide}>
                  <img src={forwardArrow} alt="next Slide" width={30} />
                </div>
              </div>
            </div>
            <div className={styles.title}>
              Zen is a visual ledger of global activities and events across time.
            </div>
            <div className={styles.content}>
              <div className={styles.paragraph}>
                We wanted to build a better social network. A balanced social network. One that’s
                not solely for social networking. Instead, it should offer to users a unique
                experience of the times, the people, and the world.
              </div>
              <div className={styles.paragraph}>
                Zen is a global ledger-of-record that’s secured by blockchain, moderated by users,
                and fueled by creators. It is the first context-driven social network that’s
                designed to minimize fake news, addictive algorithms, echo chambers, and
                misinformation for a truly social network.
              </div>
            </div>
            <div className={styles.buttons_wrapper}>
              <a className={styles.button} href="/">
                Zen for iOS
              </a>
              <a className={styles.button} href="/">
                Zen for Android
              </a>
            </div>
          </div>
          <div className={styles.slider_wrapper}>
            <div className={styles.mobile_slider_nav} onClick={onPrevtSlide}>
              <img src={BackArrow} alt="prev Slide" width={20} />
            </div>
            <ZemSlider sliderRef={sliderRef} onNextSlide={onNextSlide} />
          </div>
        </div>
        <div className={styles.additional_container}>
          <div className={styles.additional_content}>
            “Change how how you see and see how you change.”
            <p className={styles.additional_paragraph}>zen proverb</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(HomeProduct)
