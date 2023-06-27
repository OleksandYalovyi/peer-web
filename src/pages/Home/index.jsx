/* eslint-disable react/prop-types */
import React, { useMemo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import PeerLogoGlobal from 'assets/Home/peerlogoglobal.svg'
import LittleChevron from 'assets/Home/littlechevron.svg'
import MetaEarth from 'assets/Home/metaearth.webp'

import PeerApp from 'assets/Home/Puzzle/peerapp.svg'
import Market from 'assets/Home/Puzzle/market.png'
import BlockChain from 'assets/Home/Puzzle/blockchain.svg'
import Peer from 'assets/Home/Puzzle/peer.svg'
import Zen from 'assets/Home/Puzzle/zen.svg'
import Omni from 'assets/Home/Puzzle/omni.svg'
import Solar from 'assets/Home/Puzzle/solar.svg'

import styles from './home.module.scss'

const Date = ({ position }) => {
  const ref = useRef()

  const content = useMemo(() => {
    const x = `0${(`${position.x}` || '00').slice(0, 2)}`.slice(-2)
    const y = `0${(`${position.y}` || '00').slice(0, 2)}`.slice(-2)
    const c = `0${(`${Math.abs(position.x - position.y)}` || '00').slice(0, 2)}`.slice(-2)

    return `${x}’${y}’${c}`
  }, [ref.current, position])

  return <span ref={ref}>{content}</span>
}

const Home = () => {
  const ref = useRef()
  const [userPosition, setUserPosition] = useState({
    x: 0,
    y: 0,
  })

  const lightStyles = useMemo(
    () => ({
      '--cx': `${userPosition.x}px`,
    }),
    [userPosition],
  )

  const onMouseMove = (e) => {
    setUserPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <div className={styles.wrapper} onMouseMove={onMouseMove}>
      <div className={styles.container}>
        <section className={styles.global}>
          <NavLink to="/" className={styles.link}>
            <img src={PeerLogoGlobal} alt="Peer" />
          </NavLink>
        </section>

        <section className={styles.menu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Products</NavLink>
          <NavLink to="/">Press</NavLink>
        </section>

        <section className={styles.news}>
          <div className={styles.latest}>
            <h4 className={styles.title}>Latest</h4>

            <p className={styles.text}>
              Peer Acquires Elite Team of Engineers Behind Zenly’s Popular 3D Maps
            </p>
          </div>

          <NavLink to="/" className={styles.more}>
            More News <img src={LittleChevron} alt="Chevron" />
          </NavLink>
        </section>
      </div>

      <section className={styles.dates}>
        <div className={styles.content}>
          <div className={styles.light} ref={ref} style={lightStyles} />
          <div className={styles.positions}>
            {new Array(20).fill(1).map((s) => (
              <Date position={userPosition} />
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.peer}>
          <h2 className={styles.title}>
            peer is building towards
            <br />
            and accelerating an
            <br /> ai-infused spatial future
          </h2>

          <div className={styles.links}>
            <NavLink to="/" className={styles.link}>
              OUR TEAM
            </NavLink>

            <NavLink to="/" className={classNames(styles.link, styles.large)}>
              WHITE PAPER
            </NavLink>
          </div>
        </section>
      </div>

      <section className={styles.metaearh}>
        <img src={MetaEarth} alt="Metaearh" />
      </section>

      <div className={styles.container}>
        <section className={styles.building}>
          <h2 className={styles.title}>WHAT WE’RE BUILDING</h2>

          <p className={styles.text}>
            peer:THE SOCIAL NETWORK // peer market:digital assets marketplace // pl0:peer layer 0
            blockchain // peer dollar:pl0 native crypto // omni:pl0 block explorer //
            zen:self-custody wallet // solar:ai observer // g:ar glasses
          </p>
        </section>

        <section className={styles.puzzle}>
          <div className={styles.row}>
            <div className={styles.col}>
              <NavLink to="/" className={styles.card}>
                UI
                <div className={styles.img}>
                  <img src={PeerApp} alt="PeerApp" className={styles.peerapp} />
                </div>
              </NavLink>
            </div>

            <div className={styles.col}>
              <NavLink to="/" className={classNames(styles.card, styles.medium)}>
                marketplace
                <div className={styles.img}>
                  <img src={Market} alt="Market" className={styles.market} />
                </div>
              </NavLink>

              <NavLink to="/" className={classNames(styles.card, styles.medium)}>
                blockchain
                <div className={styles.img}>
                  <img src={BlockChain} alt="BlockChain" className={styles.blockchain} />
                </div>
              </NavLink>
            </div>

            <div className={styles.col}>
              <NavLink to="/" className={classNames(styles.card, styles.medium)}>
                coin
                <div className={styles.img}>
                  <img src={Peer} alt="Coin" className={styles.coin} />
                </div>
              </NavLink>

              <NavLink to="/" className={styles.card}>
                wallet
                <div className={styles.img}>
                  <img src={Zen} alt="Wallet" className={styles.wallet} />
                </div>
              </NavLink>

              <NavLink to="/" className={styles.card}>
                explorer
                <div className={styles.img}>
                  <img src={Omni} alt="Omni" className={styles.omni} />
                </div>
              </NavLink>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <NavLink to="/" className={styles.card}>
                future
                <div className={styles.img}>
                  <img src={Solar} alt="Solar" className={styles.solar} />
                </div>
              </NavLink>
            </div>
          </div>
        </section>

        <section className={styles.involved}>
          <h2 className={styles.title}>want to get involved?</h2>

          <NavLink to="/" className={styles.link}>
            Join the community
          </NavLink>
        </section>
      </div>
    </div>
  )
}

export default React.memo(Home)
