import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import cls from 'classnames'
import btnArrow from 'assets/btnArrow.svg'
import zenChevron from 'assets/HomeProduct/zen-chevron.svg'
import ArrowChevron from 'components/Icons/ArrowChevron'
import useCurrentWidth from 'hooks/useCurrentWidth'
import data from './data'
import styles from './features.module.scss'

function Features() {
  const [slide, setSlide] = useState(0)
  const [hovered, setHovered] = useState(null)
  const width = useCurrentWidth()

  const handleSetSlide = (slideNumber) => {
    setSlide(slideNumber)
  }

  const setNextSlide = () => {
    if (data.length === slide + 1) {
      setSlide(0)
    } else {
      setSlide(slide + 1)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.col_1}>
          <div className={styles.title_container}>
            <div className={styles.title}>
              <img src={zenChevron} alt="" />
              Zen Features
            </div>
          </div>
          {data.map((item, index) => (
            <div
              key={item.title}
              className={cls(styles.item_wrapper, {
                [styles.active]:
                  (index === slide && typeof hovered !== 'number') || hovered === index,
              })}
              onClick={() => handleSetSlide(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={styles.item_title}>{item.title}</div>
              <ArrowChevron
                width={width > 680 ? 8.5 : 6}
                isHovered={(index === slide && typeof hovered !== 'number') || hovered === index}
              />
            </div>
          ))}
        </div>
        <div className={styles.col_2}>
          <CSSTransition in appear key={slide} classNames="fadeInOut" timeout={900} unmountOnExit>
            <div className={styles.slide}>
              <div className={styles.title}>{data[slide].title}</div>
              <div className={styles.content}>{data[slide].content}</div>
              <div className={styles.next_btn} onClick={setNextSlide}>
                Next feature
                <img src={btnArrow} alt="" />
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  )
}

export default Features
