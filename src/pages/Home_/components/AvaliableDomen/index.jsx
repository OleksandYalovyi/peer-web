import React from 'react'
import T from 'prop-types'
import copyImage from 'assets/copy.svg'
import PeriodInput from '../PeriodInput'
import styles from './avaliable_domen.module.scss'

const AvaliableDomen = ({ onRegisterDomein, isWalletConected, buyPeriod, setBuyPeriod }) => {
  function copy() {
    navigator.clipboard.writeText('copied')
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.domen_name} ${styles.row}`}>
        <div className={styles.name}>
          heath.pmc
          <div className={styles.copy_image_wrapper} onClick={copy}>
            <img src={copyImage} alt="copy" />
          </div>
        </div>
        <div className={styles.status}>Avaliable</div>
      </div>
      <div className={styles.row_container}>
        <div className={styles.period_input}>
          <PeriodInput period={buyPeriod} setPeriod={setBuyPeriod} />
        </div>
        <div className={styles.gray_text}>Registration Period</div>
      </div>
      <div className={styles.row_container}>
        <div className={styles.price}>1PMC</div>
        <div className={styles.gray_text}>Domain Cost</div>
      </div>
      <button
        type="button"
        className={`${styles.button} ${!isWalletConected && styles.disabled_button}`}
        onClick={onRegisterDomein}
        disabled={!isWalletConected}
      >
        register
      </button>
      {!isWalletConected && (
        <div className={styles.error}>Please connect your wallet to register this domain</div>
      )}
    </div>
  )
}

AvaliableDomen.propTypes = {
  onRegisterDomein: T.func,
  isWalletConected: T.bool,
  buyPeriod: T.string,
  setBuyPeriod: T.func,
}
export default AvaliableDomen
