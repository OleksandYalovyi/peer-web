/* eslint-disable max-len */
import React from 'react'
import { Space, Row, Col } from './components/Space'
import { Large, Medium, Big } from './components/Card'
import styles from './blog.module.scss'

function Blog() {
  return (
    <section className={styles.container}>
      <Space className={styles.space}>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <Large
              createdAt={1705297675461}
              title="introducing leaderboard 👾👾"
              text="it’s you v. the world. are you game (or scared)?"
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            />
          </Col>

        </Row>

        <Row className={styles.row}>
          <Col>
            <Medium
              createdAt={1705297675461}
              title="From Tokyo to NYC, landmarks have arrived in style From Tokyo to NYC,"
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            />
          </Col>

          <Col>
            <Medium
              
              createdAt={1705297675461}
              title="Android v1.0release notes"
              text="peer for android has arrived. it’s still in beta but we’re super thrilled. take a look and drop us a cute comment! (ideally where everyone can see it)"
            />
          </Col>

          <Col>
            <Medium
              createdAt={1705297675461}
              title="From Tokyo to NYC, landmarks have arrived in style From Tokyo to NYC,"
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            />
          </Col>
        </Row>

        <Row className={styles.row}>
          
          <Col>
            <Big
              createdAt={1705297675461}
              title="landmarks"
              text="it’s you v. the world. are you game (or scared)?"
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            />
          </Col>

          <Col>
            <Big
              createdAt={1705297675461}
              title="landmarkslandmarkslandmarkslandmarksland..."
              text="it’s you v. the world. are you game (or scared)?"
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            />
          </Col>
        </Row>
      </Space>

      <div className={styles.footer}>
        <button className={styles.primary} type="button">Load More</button>
      </div>
    </section>
  )
}

export default React.memo(Blog)
