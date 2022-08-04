/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-restricted-syntax */
import React, { useMemo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const CalendarPlanContainer = () => {
  const data = [
    {
      date: 1625086800000,
      content: ['Peer Inc. Founded'],
    },
    {
      date: 1625605200000,
      content: ['Development Begins'],
    },
    {
      date: 1636581600000,
      content: ['Testnet Complete'],
    },
    {
      date: 1643752800000,
      content: ['Mainnet Launch', 'Explorer Launch (Beta)', 'Wallet Launch (Beta)'],
    },
    {
      date: 1656277200000,
      content: ['Crowdsale Begins'],
    },

    {
      date: 1659301200000,
      content: ['Stablecoin Launch', 'Explorer Launch Official', 'Wallet Launch Official'],
    },
    {
      date: 1667253600000,
      content: ['Metaverse Launch (Beta)'],
    },

    {
      date: 1675202400000,
      content: ['Exchange Listing', 'Marketplace Launch (Beta)'],
    },

    {
      date: 1651352400000,
      content: ['Metaverse Launch Official'],
    },
  ]

  const currentTask = useMemo(() => {
    const currentTime = new Date().getTime()
    const ranges = data.map((d) => d.date)

    for (const i in ranges) {
      if (currentTime < ranges[i]) {
        return +i - 1
      }
    }

    return 0
  }, [data])

  return <CalendarPlan data={data} currentTask={currentTask} />
}

const CalendarPlan = ({ data, currentTask }) => {
  const convertDate = (date) =>
    new Date(date).toLocaleDateString('en-GB', {
      year: '2-digit',
      month: 'short',
      day: '2-digit',
    })

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col} />
        {data.map(({ content, date }, i) => (
          <div className={classNames(styles.col, { [styles.active]: i === currentTask })}>
            {i % 2 === 0 ? (
              <>
                <p className={styles.date}>{convertDate(date)}</p>
                {content.map((c) => (
                  <p>{c}</p>
                ))}
              </>
            ) : null}
          </div>
        ))}
        <div className={styles.col} />
      </div>

      <div className={styles.row}>
        <ul className={styles.timeline}>
          <li />
          {data.map((e, i) => (
            <li className={classNames({ [styles.active]: i === currentTask })} />
          ))}
          <li />
        </ul>
      </div>

      <div className={styles.row}>
        <div className={styles.col} />
        {data.map(({ content, date }, i) => (
          <div className={classNames(styles.col, { [styles.active]: i === currentTask })}>
            {i % 2 === 1 ? (
              <>
                <p className={styles.date}>{convertDate(date)}</p>
                {content.map((c) => (
                  <p>{c}</p>
                ))}
              </>
            ) : null}
          </div>
        ))}
        <div className={styles.col} />
      </div>
    </div>
  )
}

export default React.memo(CalendarPlanContainer)

CalendarPlan.propTypes = {
  data: PropTypes.array,
  currentTask: PropTypes.number,
}
