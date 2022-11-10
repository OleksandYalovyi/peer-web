import React from 'react'
import T from 'prop-types'
import { useTheme } from 'context/theme'
import ArrowLeftRound from 'components/Icons/ArrowLeftRound/index'
import ArrowRightRound from 'components/Icons/ArrowRightRound/index'
import styles from './period_input.module.scss'

const PeriodInput = ({ period, setPeriod }) => {
  const { isLight } = useTheme()

  // const [period, setPeriod] = useState(1)

  function onChange(type) {
    if (type === 'increase') {
      setPeriod((prev) => prev + 1)
    }
    if (type === 'decrease' && period !== 1) {
      return setPeriod((prev) => prev - 1)
    }

    return period
  }

  return (
    <div className={styles.container}>
      <span className={styles.arrow_container} onClick={() => onChange('decrease')}>
        <ArrowLeftRound isLight={isLight} />
      </span>
      <div className={styles.content_container}>
        {period} {`year${period === 1 ? '' : 's'}`}
      </div>
      <span className={styles.arrow_container} onClick={() => onChange('increase')}>
        <ArrowRightRound isLight={isLight} />
      </span>
    </div>
  )
}

PeriodInput.propTypes = {
  period: T.string,
  setPeriod: T.func,
}
export default PeriodInput
