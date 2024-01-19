import cn from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import Chevron from 'assets/chevron_down_bold.svg'

import styles from './style.module.scss'

export default function CustomIndicator({ selectProps }) {
  return (
    <img
      width={24}
      src={Chevron}
      alt="checked"
      className={cn(styles.indicator, selectProps.menuIsOpen && styles.indicator__open)}
    />
  )
}

CustomIndicator.propTypes = {
  selectProps: PropTypes.shape({
    menuIsOpen: PropTypes.bool,
  }),
}
