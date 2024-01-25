/* eslint-disable no-return-assign */
import React, { useMemo } from 'react'
import { Large } from 'pages/Blog/components/Card'
import { useParams } from 'react-router-dom'
import data from '../Blog/data'
import Separator from './components/Separator'
import ShareArticles from './components/ShareArticles'
import MoreArticles from './components/MoreArticles'
import styles from './article.module.scss'

const findArticle = (id) => {
  const foundRow = data.rows.find((row) => {
    const foundCol = row.cols.find((col) => col.card && col.card.id === +id)
    return foundCol
  })

  return foundRow ? foundRow.cols.find((col) => col.card.id === +id)?.card || null : null
}

function Article() {
  const { id } = useParams()

  const currentArticle = useMemo(() => {
    const foundedRow = findArticle(id)

    if (foundedRow) {
      return foundedRow
    }

    return (window.location = '/')
  }, [id, data])

  return (
    <div className={styles.container}>
      <Large {...currentArticle} />

      <div className={styles.content}>
        {currentArticle.node}

        <ShareArticles />
        <Separator />
        <MoreArticles articles={[findArticle(0), findArticle(1), findArticle(2), findArticle(3)]} />
      </div>
    </div>
  )
}

export default React.memo(Article)
