import React, { useEffect, useMemo, useRef, useState } from 'react'
import FromPeerWithLoveImg from 'assets/Home/fromPeerWithLove.png'
import FromPeerWithLoveGradientImg from 'assets/Home/fromPeerWithLoveGradient.png'
import FromPeerWithLoveMobileImg from 'assets/Home/fromPeerWithLoveMobile.png'
import FromPeerWithLoveGradientMobileImg from 'assets/Home/fromPeerWithLoveGradientMobile.png'
import useCurrentSize from 'hooks/useCurrentSize'
import styles from './peerwithlove.module.scss'

function PeerWithLove() {
  const { width } = useCurrentSize()
  const divRef = useRef(null)

  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = document.documentElement.scrollTop
      setScrollHeight(currentScrollHeight)
    }

    const handleLoad = () => {
      setTimeout(() => {
        window.addEventListener('scroll', handleScroll)
      }, 50)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const earthTransformedStyle = useMemo(() => {
    const opacityValue = Math.max(0, Math.min(1, scrollHeight / window.innerHeight))

    return {
      opacity: opacityValue,
    }
  }, [scrollHeight, divRef.current])

  return (
    <div className={styles.fromPeerWithLove}>
      {width > 659 ? (
        <>
          <img src={FromPeerWithLoveImg} alt="From peer with love" />

          <div className={styles.hiddenContent} style={{ ...earthTransformedStyle }}>
            <img src={FromPeerWithLoveGradientImg} alt="From peer with love" />
          </div>
        </>
      ) : (
        <>
          <img src={FromPeerWithLoveMobileImg} alt="From peer with love" />

          <div className={styles.hiddenContent} style={{ ...earthTransformedStyle }}>
            <img src={FromPeerWithLoveGradientMobileImg} alt="From peer with love" />
          </div>
        </>
      )}
    </div>
  )
}

export default React.memo(PeerWithLove)
