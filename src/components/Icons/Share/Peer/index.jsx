/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './peer.module.scss'

const Peer = ({ hovered, width = '25', isLight, size }) => {
  const renderColor = () => {
    if (hovered) return '#00d3f9'
    if (isLight) return '#000000'
    return '#ffffff'
  }
  const renderStyle = () => {
    if (size === 'sm') return { transform: 'scale(0.7)' }
    return null
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89 89"
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <path
        fill={renderColor()}
        fillRule="evenodd"
        d="M44.169.8C19.769.8.9 19.771.9 44.171c0 24.4 18.869 44.18 43.269 44.18 24.399 0 44.181-19.78 44.181-44.18S68.568.8 44.169.8zM40.56 44.933c-.837.407-1.04 1.217-1.913 1.918l-5.305 10.955c-.503 1.04-1.977 1.04-2.481 0l-5.305-10.955c-.405-.701-1.079-1.511-1.91-1.918l-10.92-5.325c-1.032-.502-1.032-1.982 0-2.483l10.92-5.326a4.153 4.153 0 0 0 1.91-1.916l5.305-10.957c.504-1.036 1.978-1.036 2.481 0l5.305 10.957c.873.833 1.076 1.511 1.913 1.916l10.914 5.326c1.035.501 1.035 1.981 0 2.483L40.56 44.933zm29.828 15.304-5.426 2.648a2.717 2.717 0 0 0-1.275 1.278l-2.197 5.446c-.816.778-1.921.778-2.3 0l-2.638-5.446a2.73 2.73 0 0 0-1.273-1.278l-5.429-2.648c-.09-.379-.09-1.489 0-1.866l5.429-2.646c.555-.271 1.004-.425 1.273-1.28l2.638-5.446c.379-.779 1.484-.779 2.3 0l2.197 5.446c.268.855.717 1.009 1.275 1.28l5.426 2.646c.775.377.775 1.487 0 1.866zm5.61-28.034-4.154 2.022c-.418.204.086.541-.952.959l-2.022 4.167a.688.688 0 0 1-1.239 0l-2.016-4.167c-.204-.418.145-.755-.955-.959l-4.153-2.022a.693.693 0 0 1 0-1.244l4.153-2.026c1.1-.202.751-.542.955-.958l2.016-4.168a.689.689 0 0 1 1.239 0l2.331 4.811 4.797 2.341a.693.693 0 0 1 0 1.244z"
      />
    </svg>
  )
}

Peer.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
}
export default Peer
