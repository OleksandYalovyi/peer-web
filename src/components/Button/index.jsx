/* eslint-disable react/button-has-type */
import React from 'react'
import cn from 'classnames'
import T from 'prop-types'

import LoaderIcon from 'components/Loader'

import styles from './button.module.scss'

function Button({
  className,
  fullWidth,
  disabled = false,
  variant = 'primary',
  type = 'button',
  children,
  loading,
  loadingIconSize = 30,
  isBorderSquare,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(styles.button, className, styles[variant], {
        [styles.full]: fullWidth,
        [styles.disabled]: disabled,
        [styles.border]: isBorderSquare,
      })}
    >
      {(loading && <LoaderIcon size={loadingIconSize} />) || children}
    </button>
  )
}

Button.propTypes = {
  type: T.oneOf(['submit', 'button', 'reset']),
  variant: T.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'blue', 'text']),
  className: T.string,
  disabled: T.bool,
  fullWidth: T.bool,
  children: T.element,
  loading: T.bool,
  loadingIconSize: T.number,
  isBorderSquare: T.bool,
  onClick: T.func,
}

export default Button
