import React, { useEffect, useRef, useState } from 'react'
import { US, FR, ES, CN, RU, KR, VN } from 'country-flag-icons/react/3x2'
import cls from 'classnames'
import T from 'prop-types'
import useCurrentSize from 'hooks/useCurrentSize'
import styles from './dropdown.module.scss'

function CountryIcon({ name }) {
  switch (name) {
    case 'Français':
      return <FR title="Français" className={styles.icon} />

    case 'Español':
      return <ES title="Español" className={styles.icon} />

    case '简体中文':
      return <CN title="简体中文" className={styles.icon} />

    case 'Русский':
      return <RU title="Русский" className={styles.icon} />

    case '한국인':
      return <KR title="한국인" className={styles.icon} />

    case 'Tiếng Việt':
      return <VN title="Tiếng Việt" className={styles.icon} />

    default:
      return <US title="United States" className={styles.icon} />
  }
}

function Dropdown({ list, children }) {
  const { data, type } = list

  const childrenRef = useRef(null)
  const listRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  const { width } = useCurrentSize()

  const cloneChildren = React.cloneElement(children, {
    ref: childrenRef,
    onClick: () => {
      setIsShow(!isShow)
    },
  })

  useEffect(() => {
    function handleClickOutside(event) {
      if (childrenRef.current && !childrenRef.current.contains(event.target)) {
        if (listRef.current && !listRef.current.contains(event.target)) {
          setIsShow(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [listRef, childrenRef])

  const containerBehavior =
    width < 800
      ? { onClick: () => setIsShow(!isShow) }
      : { onMouseEnter: () => setIsShow(true), onMouseLeave: () => setIsShow(false) }

  return (
    <div className={cls(styles.container)} {...containerBehavior}>
      {cloneChildren}

      {isShow && (
        <ul className={styles.list} ref={listRef}>
          {data.map(({ text, onClick }) => (
            <li key={text} className={styles.item}>
              {type === 'countries' && (
                <div
                  onClick={onClick}
                  className={cls(styles.country, { [styles.active]: text === 'English (US)' })}
                >
                  <div className={styles.image}>
                    <div className={styles.flag}>
                      <CountryIcon name={text} />
                    </div>
                  </div>

                  {text}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default React.memo(Dropdown)

const ItemShape = {
  text: T.string,
  href: T.text,
  onClick: T.func,
}

const ListShape = {
  data: T.arrayOf(T.shape(ItemShape)),
  type: T.string,
  style: T.object,
}

Dropdown.propTypes = {
  list: T.shape(ListShape),
  children: T.node,
}

CountryIcon.propTypes = {
  name: T.string,
}
