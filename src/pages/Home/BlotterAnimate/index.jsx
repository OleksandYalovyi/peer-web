import React from 'react'
import ChannelSplitMaterialMouseDetection from 'components/BlotterJS/ChannelSplitMaterialMouseDetection'

import styles from './styles.module.scss'

const BlotterAnimate = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <ChannelSplitMaterialMouseDetection
        text=" The metaverse has a "
        fontSize={110}
        fontWeight={600}
        fill="#202020"
        rotation={90}
        rgbOffset={0.1}
        addBlur
        addNoise
      />
      <ChannelSplitMaterialMouseDetection
        text=" mega problem. "
        fontSize={110}
        fontWeight={600}
        fill="#202020"
        rotation={90}
        rgbOffset={0.1}
        addBlur
        addNoise
      />
    </div>
  </div>
)

export default BlotterAnimate
