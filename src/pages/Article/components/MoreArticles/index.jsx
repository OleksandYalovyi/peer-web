/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Small } from 'pages/Blog/components/Card'
import styles from './morearticles.module.scss'

function MoreArticles({ articles }) {
  return (
    <div className={styles.moreArticles}>
      <h1 className={styles.title}>see more articles</h1>

      <div className={styles.moreArticlesBody}>
        {articles.map((a) => (
          <Small {...a} />
        ))}
      </div>
    </div>
  )
}

export default React.memo(MoreArticles)

MoreArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
}
