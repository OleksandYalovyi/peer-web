/* eslint-disable react/prop-types */
import React from 'react'
import styles from './styles.module.scss'

const markers = [{ id: 1, title: '$30M' }]

function ProgressBar({ capacity, softCap }) {
  const softCapPos = (softCap / capacity) * 100

  // const softCapTextPos =
  //   (hardCap - softCap) / capacity < 0.25
  //     ? (hardCap / capacity - 0.4) * 100
  //     : (softCap / capacity - 0.1) * 100
  // const hardCapTextPos = (hardCap / capacity - 0.1) * 100
  console.log(softCapPos)

  return (
    <>
      <div className={styles.progress_container}>
        <div className={styles.progress_bar} />
        {[0, 1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={styles.thumb_soft}
            style={{ left: `${softCapPos + item * 13}%` }}
          />
        ))}
      </div>
      <div className={styles.markers_container}>
        {/* <div
          className={styles.soft_container}
          style={{
            left: softCapTextPos < 0 ? '0%' : softCapTextPos > 50 ? '50%' : `${softCapTextPos}%`,
          }}
        >
          <div className={styles.marker_title}>SOFT CAP</div>
          <div className={styles.marker_value}>{`$${softCap.toLocaleString('en-US')}`}</div>
        </div> */}
      </div>
    </>
  )
}

export default ProgressBar
