import React, { useState, useRef } from 'react'
import useOnScreen from 'hooks/useOnScreen'
import cls from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Animated = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const text = useRef(null)
  const onScreen = useOnScreen(text)

  if (!visible && onScreen) setVisible(true)

  return (
    <div ref={text} className={cls(styles.start_state, { [styles.visible]: visible })}>
      {children}
    </div>
  )
}

Animated.propTypes = {
  children: PropTypes.node,
}

export default Animated
