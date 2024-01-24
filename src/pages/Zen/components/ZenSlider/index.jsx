/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import T from 'prop-types'

import Slider from 'react-slick'
import useCurrentSize from 'hooks/useCurrentSize'
import HomeImage from 'assets/HomeProduct/zenHome.png'
import ChatImage from 'assets/HomeProduct/zenChat.png'
import MapsImage from 'assets/HomeProduct/zenMaps.png'
import PostImage from 'assets/HomeProduct/zenPost.png'
import LoginImage from 'assets/HomeProduct/zenLogin.png'
import TimeTravel from 'assets/HomeProduct/zenTimetravel.png'
import styles from './slider.module.scss'
import backArrow from '../../../../assets/backArrow.svg'
import forwardArrow from '../../../../assets/forwardArrow.svg'

function ZenSlider({ sliderRef, onNextSlide, onPrevSlide }) {
  const [sliderSide, setSliderSide] = useState('right')
  const displays = [
    {
      id: 0,
      href: LoginImage,
      name: 'Login',
    },
    {
      id: 1,
      href: HomeImage,
      name: 'Home',
    },
    {
      id: 2,
      href: MapsImage,
      name: 'Maps',
    },
    {
      id: 3,
      href: PostImage,
      name: 'Post',
    },
    {
      id: 4,
      href: ChatImage,
      name: 'Chat',
    },
    {
      id: 5,
      href: TimeTravel,
      name: 'TimeTravel',
    },
  ]

  const checkArrow = (prevId, currentId) => {
    if (currentId === 0) {
      setSliderSide('right')
    }
    if (currentId === 5) {
      setSliderSide('left')
    }
  }

  const { width } = useCurrentSize()
  const isMobile = width < 1000

  const settings = {
    infinite: false,
    useCSS: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    swipeToSlide: false,
    touchThreshold: 100,
  }

  return (
    <div className={styles.container}>
      <div className={styles.slider_wrapper}>
        <Slider
          {...settings}
          ref={sliderRef}
          beforeChange={(slick, current) => checkArrow(slick, current)}
        >
          {displays.map(({ id, href }) => (
            <div className={styles.slider_item} key={id}>
              <img src={href} alt="alt" height={isMobile ? width * 1.18 : 1070} />
            </div>
          ))}
        </Slider>
      </div>
      <div
        className={styles.desktop_slider_nav}
        onClick={sliderSide === 'right' ? onNextSlide : onPrevSlide}
      >
        <img src={sliderSide === 'right' ? forwardArrow : backArrow} alt="next Slide" width={30} />
      </div>
      <div className={styles.mobile_slider_nav} onClick={onNextSlide}>
        <img src={forwardArrow} alt="next Slide" width={13.66} />
      </div>
    </div>
  )
}

export default ZenSlider

ZenSlider.propTypes = {
  sliderRef: T.node,
  onNextSlide: T.func,
}
