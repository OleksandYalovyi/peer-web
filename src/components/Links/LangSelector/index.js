import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Arrow from 'assets/images/icons/arrow.svg'
import cls from 'classnames'
import styles from './styles.module.scss'

const LangSelector = () => {
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false)
  const elRef = useRef()

  const LANGUIGES = ['United States', 'China', 'Vietnam']

  const handleLanguageItemClick = (lang) => {
    setIsLanguagesOpen(false)
  }

  const handleCurrentLangClick = () => {
    setIsLanguagesOpen(!isLanguagesOpen)
  }

  return (
    <div className={cls(styles['logo-container'])} ref={elRef} onClick={handleCurrentLangClick}>
      <div className={cls(styles['logo-container-center'])}>
        <div className={styles['logo-container-lang']}>United States</div>
        <div className={cls(styles['down-icon'], { [styles.active]: isLanguagesOpen })}>
          <img src={Arrow} alt="arrow" />
        </div>
        {isLanguagesOpen && (
          <div
            className={cls(styles.dropdown_content, {
              [styles.dropdown_content_open]: isLanguagesOpen,
            })}
          >
            {LANGUIGES.map((item) => (
              <span
                key={item}
                onClick={() => handleLanguageItemClick(item)}
                // todo: add locale
                // className={language === item ? styles.active : null}
                className={item === 'English (US)' ? styles.active : null}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
LangSelector.propTypes = {}

export default LangSelector
