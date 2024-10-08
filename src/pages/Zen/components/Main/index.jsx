import React, { useRef } from 'react'
import useCurrentSize from 'hooks/useCurrentSize'
import ZEN from 'assets/zenSircle.svg'
import BackArrow from 'assets/backArrow.svg'
import ZENLogo from 'assets/zenLogo.svg'
import ZenSlider from '../ZenSlider'
import styles from './styles.module.scss'

function Main() {
  const sliderRef = useRef(null)
  const { width } = useCurrentSize()
  const isMobile = width < 600

  const onNextSlide = () => sliderRef.current.slickNext()
  const onPrevSlide = () => sliderRef.current.slickPrev()

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className={styles.main}>
          <div className={styles.nav}>
            <div className={styles.zen_logo}>
              <img src={isMobile ? ZENLogo : ZEN} alt="ZEN" width={isMobile ? 50 : 90} />
            </div>
            {/* <div className={styles.slider_nav}>
              <div className={styles.arrow_wrapper} onClick={onPrevSlide}>
                <img src={BackArrow} alt="prev Slide" width={30} />
              </div>
              <div className={styles.arrow_wrapper} onClick={onNextSlide}>
                <img src={forwardArrow} alt="next Slide" width={30} />
              </div>
            </div> */}
          </div>
          <div className={styles.title}>
            Zen is a visual ledger of global activities and events across time.
          </div>
          <div className={styles.content}>
            <div className={styles.paragraph}>
              We wanted to build a better social network. A balanced social network. One that’s not
              solely for social networking. Instead, it should offer to users a unique experience of
              the times, the people, and the world.
            </div>
            <div className={styles.paragraph}>
              Zen is a global ledger-of-record that’s secured by blockchain, moderated by users, and
              fueled by creators. It is the first context-driven social network that’s designed to
              minimize fake news, addictive algorithms, echo chambers, and misinformation for a
              truly social network.
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
          <div className={styles.mobile_slider_nav} onClick={onPrevSlide}>
            <img src={BackArrow} alt="prev Slide" width={13.66} />
          </div>
          <ZenSlider sliderRef={sliderRef} onNextSlide={onNextSlide} onPrevSlide={onPrevSlide} />
        </div>
      </div>
    </section>
  )
}

export default React.memo(Main)
