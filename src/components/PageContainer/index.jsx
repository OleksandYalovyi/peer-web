import React from 'react'
import T from 'prop-types'
import styles from './page_container.module.scss'

const PageContainer = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.flex_container}>{children}</div>
  </div>
)

PageContainer.propTypes = {
  children: T.node,
}
export default PageContainer
