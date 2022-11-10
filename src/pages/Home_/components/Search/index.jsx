import React, { useState } from 'react'
import T from 'prop-types'
import { useTheme } from 'context/theme'
import searchIcon from 'assets/searchicon.svg'
import styles from './search.module.scss'

const Seacrh = ({ onSearch }) => {
  const [inputText, setInputText] = useState('')
  const { isLight } = useTheme()

  const inputHandler = () => {
    onSearch(inputText)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      inputHandler()
    }
  }
  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} ${inputText.length ? styles.active : styles.emptyActive} ${
          !isLight && styles.dark
        }`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value.trim())}
        placeholder="Search peer domains"
        onKeyDown={handleKeyDown}
        onSubmit={inputHandler}
      />
      <div className={styles.search_icon_container} onClick={inputHandler}>
        <img alt="icon" src={searchIcon} className={styles.seacrh_icon} />
      </div>
    </div>
  )
}

Seacrh.propTypes = {
  onSearch: T.func,
}
export default Seacrh
