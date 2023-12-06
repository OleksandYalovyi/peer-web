/* eslint-disable react/react-in-jsx-scope */
import CareersItem from './Item'
import { defaultJobData, jobData } from './mock/index'
import styles from './styles.module.scss'

function Careers() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap_header}>
        <h1 className={styles.title}>Careers</h1>
        <div className={styles.wrap_header_inner}>
          <p className={styles.sub_title}>
            Create the world that <br /> excites you! Join us at Peer!
          </p>
          <p className={styles.text}>Navigate our open positions below to find your perfect fit.</p>
        </div>
      </div>

      <div className={styles.content}>
        {[...jobData, ...defaultJobData].map((item) => (
          <CareersItem {...item} />
        ))}
      </div>
    </div>
  )
}

export default Careers
