/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './styles.module.scss'

function LittleChevron({ hovered, width = '8', height = '13.5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      className={cls({ [styles.hovered]: hovered })}
    >
      <path
        className={styles.arrow}
        fillRule="evenodd"
        fill="#2E2E2E"
        d="M1.125 25.962c.304.337.718.509 1.131.508.378 0 .755-.142 1.052-.426l11.926-11.408c.314-.301.494-.724.494-1.166 0-.444-.18-.865-.494-1.166L3.308.894a1.511 1.511 0 0 0-2.183.085 1.625 1.625 0 0 0 .082 2.25L11.912 13.47 1.207 23.71a1.628 1.628 0 0 0-.082 2.252z"
      />
    </svg>
  )
}

LittleChevron.propTypes = {
  hovered: T.bool,
  width: T.string,
  height: T.string,
}

export default LittleChevron
