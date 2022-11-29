/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import Step from './Step'
// import { useFlow } from 'src_icx/hooks/usePurchaseStep'
import T from 'prop-types'

import Slider from 'react-slick'
import useCurrentWidth from 'hooks/useCurrentWidth'
import HomeImage from 'assets/HomeProduct/zenHome.png'
import ChatImage from 'assets/HomeProduct/zenChat.png'
import MapsImage from 'assets/HomeProduct/zenMaps.png'
import PostImage from 'assets/HomeProduct/zenPost.png'
import LoginImage from 'assets/HomeProduct/zenLogin.png'
import styles from './slider.module.scss'
// import backArrow from '../../../../assets/backArrow.svg'
import forwardArrow from '../../../../assets/forwardArrow.svg'

function ZenSlider({ sliderRef, onNextSlide }) {
  const displays = [
    {
      id: 1,
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
  ]

  const width = useCurrentWidth()
  const isMobile = width < 1000

  const settings = {
    infinite: true,
    useCSS: true,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    variableWidth: true,
  }

  return (
    <div className={styles.container}>
      <div className={styles.slider_wrapper}>
        <Slider {...settings} ref={sliderRef}>
          {displays.map(({ id, href }, index) => (
            <div className={styles.slider_item}>
              {/* <div className={styles.mobile_slider_nav}>
                <img src={backArrow} alt="prev Slide" width={30} />
              </div> */}
              <img src={href} alt="alt" height={isMobile ? width * 1.18 : 1070} />
            </div>
          ))}
        </Slider>
        <div className={styles.mobile_slider_nav} onClick={onNextSlide}>
          <img src={forwardArrow} alt="next Slide" width={13.66} />
        </div>
      </div>
    </div>
  )
}

export default ZenSlider

ZenSlider.propTypes = {
  sliderRef: T.node,
  onNextSlide: T.func,
}
