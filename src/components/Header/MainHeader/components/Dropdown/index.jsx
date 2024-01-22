import React from 'react'
import ReactSelect from 'react-select'
import cn from 'classnames'
import PropTypes from 'prop-types'

import CustomIndicator from './components/CustomIndicator'
import CustomOption from './components/CustomOption'
import customStyles from './Dropdown.utils'
import styles from './style.module.scss'

function Select({ label, formatOptionLabel, size, getOptionLabel, isDropdownDisabled, ...rest }) {
  return (
    <div className={cn(styles.wrapper)}>
      {label && <div className={cn(styles.label)}>{label}</div>}
      <ReactSelect
        isDisabled={isDropdownDisabled}
        formatOptionLabel={!getOptionLabel ? formatOptionLabel || CustomOption : undefined}
        // getOptionLabel={getOptionLabel}
        isSearchable={false}
        styles={customStyles}
        maxMenuHeight={size === 'spacious' ? 270 : 245}
        components={{
          IndicatorsContainer: CustomIndicator,
        }}
        menuPlacement="auto"
        {...rest}
      />
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  formatOptionLabel: PropTypes.func,
  size: PropTypes.number,
  getOptionLabel: PropTypes.func,
  isDropdownDisabled: PropTypes.bool,
}

export default Select
