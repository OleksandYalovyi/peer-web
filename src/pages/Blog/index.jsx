import React from 'react'
import { Space, Row, Col } from './components/Space'
import { Large, Medium, Big } from './components/Card'
import data from './data'
import styles from './blog.module.scss'

function renderCard(cardData) {
  switch (cardData.type) {
    case 'large':
      return <Large {...cardData} />
    case 'medium':
      return <Medium {...cardData} />
    case 'big':
      return <Big {...cardData} />
    default:
      return null
  }
}

function Blog() {
  return (
    <section className={styles.container}>
      <Space className={styles.space}>
        {data.rows.map((row) => (
          <Row className={styles.row}>
            {row.cols.map((col) => (
              <Col className={styles.col}>{renderCard(col.card)}</Col>
            ))}
          </Row>
        ))}
      </Space>

      <div className={styles.footer}>
        <button className={styles.primary} type="button">
          Load More
        </button>
      </div>
    </section>
  )
}

export default React.memo(Blog)
