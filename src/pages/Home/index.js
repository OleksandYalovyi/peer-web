import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import MainContainer from 'components/HomeMainContainer'
import Modal from 'components/Modal'
import Animated from 'components/Animated'
import Arrow from 'assets/arrow-black.svg'
import Hero from './Hero'
import AsSeen from './AsSeen/index'
import Quote from './Quote'
import Video from './VideoSection'
import styles from './styles.module.scss'
import CalendarPlan from './CalendarPlan/index'
import BlotterAnimate from './BlotterAnimate/index'

const Home = () => {
  const modal = useRef(null)

  const onClick = useCallback(() => modal.current.open(true), [modal.current])

  return (
    <MainContainer>
      <Animated type="fadein_up">
        <Hero />
      </Animated>
      <Animated>
        <CalendarPlan />
      </Animated>
      <Animated>
        <BlotterAnimate />
      </Animated>
      <Animated>
        <Quote />
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
