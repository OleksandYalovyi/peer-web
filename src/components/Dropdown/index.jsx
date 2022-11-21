import React, { useEffect, useRef, useState } from 'react'
import { US, FR, ES, CN, RU, KR, VN } from 'country-flag-icons/react/3x2'
import cls from 'classnames'
import T from 'prop-types'
import useCurrentWidth from 'hooks/useCurrentWidth'
import styles from './dropdown.module.scss'

const CountryIcon = ({ name }) => {
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

const Dropdown = ({ list, children }) => {
  const { data, type, style } = list

  const listRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  const width = useCurrentWidth()

  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [listRef])

  const containerBehavior =
    width < 800
      ? { onClick: () => setIsShow(!isShow) }
      : { onMouseEnter: () => setIsShow(true), onMouseLeave: () => setIsShow(false) }

  return (
    <div className={cls(styles.container, { [styles.isShow]: isShow })} {...containerBehavior}>
      {children}

      <div className={cls(styles.dropdown, styles[type])}>
        <ul className={styles.list} ref={listRef}>
          {data.map(({ text, href, onClick }) => (
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
      </div>
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
