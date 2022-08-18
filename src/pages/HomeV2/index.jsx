import Animated from 'components/Animated/index'
import React from 'react'
import Graphicball1x from 'assets/images/home/graphicball/graphicball.webp'
import Graphicball2x from 'assets/images/home/graphicball/graphicball@2x.webp'
import Graphicball3x from 'assets/images/home/graphicball/graphicball@3x.webp'
import Footerball1x from 'assets/images/home/graphicfoot/graphicfoot.webp'
import Footerball2x from 'assets/images/home/graphicfoot/graphicfoot@2x.webp'
import Footerball3x from 'assets/images/home/graphicfoot/graphicfoot@3x.webp'
import GraphicballMob from 'assets/images/home/graphicball_mob/graphicball.webp'
import FooterballMob from 'assets/images/home/graphicfoot_mob/graphicball.webp'
import styles from './styles.module.scss'
import PlayToLive from './PlayToLive/index'
import Hero from './Hero'
import Disclaimer from './Disclaimer'

const Home = () => (
  <div className={styles.page_wrapper}>
    <div className={styles.side_image_wrapper}>
      <picture className={styles.img}>
        <source media="(max-width: 768px)" srcSet={`${Graphicball1x}`} />
        <source media="(max-width: 1920px)" srcSet={`${Graphicball2x}`} />
        <img src={Graphicball3x} alt="man" />
      </picture>
    </div>
    <div className={styles.footer_image_wrapper}>
      <picture className={styles.img}>
        <source media="(max-width: 768px)" srcSet={`${Footerball1x}`} />
        <source media="(max-width: 1920px)" srcSet={`${Footerball2x}`} />
        <img src={Footerball3x} alt="man" />
      </picture>
    </div>
    <div className={styles.side_image_wrapper_mobile}>
      <picture className={styles.img}>
        <img src={GraphicballMob} alt="man" />
      </picture>
    </div>
    <div className={styles.footer_image_wrapper_mobile}>
      <picture className={styles.img}>
        <img src={FooterballMob} alt="man" />
      </picture>
    </div>
    <div className={styles.container}>
      <Animated>
        <Hero />
      </Animated>
      <Animated>
        <Disclaimer />
      </Animated>
      <Animated>
        <PlayToLive />
      </Animated>
    </div>
  </div>
)

export default Home
