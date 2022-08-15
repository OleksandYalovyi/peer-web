/* eslint-disable react/prop-types */
import React from 'react'
import styles from './styles.module.scss'

const labels = [
  { id: 1, title: '$30M' },
  { id: 2, title: '$50M' },
  { id: 3, title: '$70M' },
  { id: 4, title: '$90M' },
  { id: 5, title: '$110M' },
  { id: 6, title: '$170M' },
]
const labels1 = [
  { id: 1, title: '30%' },
  { id: 2, title: '25%' },
  { id: 3, title: '20%' },
  { id: 4, title: '10%' },
  { id: 5, title: '5%' },
  { id: 6, title: '0%' },
]

function ProgressBar({ capacity, start }) {
  const startPos = (start / capacity) * 100

  return (
    <div className={styles.section}>
      <div className={styles.labels_container}>
        <div className={styles.axis_label}>Funding</div>
        {labels.map((item, index) => (
          <div
            key={item.id}
            className={styles.label}
            style={
              index < 5
                ? { left: `${startPos + index * 13}%` }
                : { left: `${100}%`, transform: 'translateX(-110%)' }
            }
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={styles.progress_container}>
        <div className={styles.progress_bar} />
        {[0, 1, 2, 3, 4].map((item) => (
          <>
            <div
              key={item}
              className={styles.thumb_top}
              style={{ left: `${startPos + item * 13}%` }}
            />
            <div
              key={item}
              className={styles.thumb_soft}
              style={{ left: `${startPos + item * 13}%` }}
            />
          </>
        ))}
      </div>
      <div className={styles.labels_container}>
        <div className={styles.axis_label}>Bonus</div>
        {labels1.map((item, index) => (
          <div
            key={item.id}
            className={styles.label}
            style={
              index === 0
                ? { left: `${12}%` }
                : index < 5
                ? { left: `${startPos - 6 + index * 13}%` }
                : { left: `${88}%` }
            }
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
