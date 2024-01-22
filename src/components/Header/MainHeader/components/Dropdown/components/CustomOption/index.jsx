import React from 'react'
import PropTypes from 'prop-types'

import Check from 'assets/check.svg'

import styles from './style.module.scss'

export default function CustomOption(item, meta) {
  const { iconWidth, label: itemLabel } = item
  let { icon } = item
  const { selectValue, context } = meta

  let checked = null

  if (typeof icon === 'string') {
    icon = <img width={iconWidth || 25} src={icon} alt="" />
  }

  if (selectValue.some((selected) => selected.label === itemLabel) && context === 'menu') {
    checked = <img width={iconWidth || 16} src={Check} alt="" />
  }

  return (
    <span className={styles.options_value}>
      <div className={styles.options_value__body}>
        {icon}
        {itemLabel}
      </div>
      <div className={styles.checked}>{checked}</div>
    </span>
  )
}

CustomOption.propTypes = {
  item: PropTypes.shape({
    iconWidth: PropTypes.number,
    label: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  meta: PropTypes.shape({
    selectValue: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })),
    context: PropTypes.string,
  }),
}
