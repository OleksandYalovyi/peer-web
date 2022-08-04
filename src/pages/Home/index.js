import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import MainContainer from 'components/HomeMainContainer'
import Modal from 'components/Modal'
import Animated from 'components/Animated'
import Arrow from 'assets/arrow-black.svg'
import Hero from './components/Hero'
import AsSeen from './AsSeen/index'
import Video from './VideoSection'
import styles from './styles.module.scss'

const Home = () => {
  const modal = useRef(null)

  const onClick = useCallback(() => modal.current.open(true), [modal.current])

  return (
    <MainContainer>
      <Hero />
      <Animated>
        <div className={styles.section_container}>
          <div className={styles.quote_section_wrapper}>
            <div className={styles.quote_section}>
              <div className={styles.quote}>
                It’s time to
                <br />
                up-level our concept of what personal computing is.
              </div>
              <div className={styles.text_container}>
                <div className={styles.header_wrapper}>
                  <div className={styles.name}>Tony Tran</div>
                  <div className={styles.position}>Founder and CEO</div>
                </div>
                <div className={styles.text}>
                  “What we dream of doing with computing today has evolved which means the tools we
                  use will need to evolve. It’s time to up-level our concept of what personal
                  computing is so that those dreams can manifest. We are at the tail end of a cycle.
                  The crossroad ahead is a key determinant of our collective future. ”
                </div>
              </div>
            </div>
          </div>
        </div>
      </Animated>
      <div className={styles.asseen_wrapper}>
        <Animated>
          <AsSeen />
        </Animated>
      </div>
      <Modal ref={modal}>
        <Video />
      </Modal>
    </MainContainer>
  )
}

Home.propTypes = {}

export default Home
