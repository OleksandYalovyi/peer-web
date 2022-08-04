import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const MainContainer = ({ children }) => <div className={styles.container}>{children}</div>

MainContainer.propTypes = {
  children: PropTypes.node,
}

export default MainContainer
