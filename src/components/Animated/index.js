import React, { useState, useRef } from 'react'
import useOnScreen from 'hooks/useOnScreen'
import cls from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Animated = ({ children, delay = 0, containerClassName = '', duration }) => {
  const [visible, setVisible] = useState(false)
  const text = useRef(null)
  const onScreen = useOnScreen(text)

  if (!visible && onScreen) {
    setTimeout(() => {
      setVisible(true)
    }, delay)
  }

  return (
    <div
      ref={text}
      className={cls(styles.start_state, { [styles.visible]: visible }, containerClassName)}
      style={{
        transitionDuration: duration ? `${duration}s` : null,
      }}
    >
      {children}
    </div>
  )
}

Animated.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  containerClassName: PropTypes.string,
  duration: PropTypes.number,
}

export default Animated
