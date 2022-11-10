import React, { useState } from 'react'
import PageContainer from 'components/PageContainer'
import Seacrh from './components/Search'
import AvaliableDomen from './components/AvaliableDomen'
import UnavaliableDomen from './components/UnavaliableDomen'
import styles from './home.module.scss'

const Home = () => {
  const [searchStatus, setSearchStatus] = useState('')
  const [buyPeriod, setBuyPeriod] = useState(1)
  const isConectedWallet = false

  function search(text) {
    setSearchStatus(text)
  }

  function onRegisterDomein() {
    console.log('reg')
  }

  return (
    <PageContainer>
      <div className={styles.container}>
        {searchStatus === '' && (
          <div className={styles.content_container}>
            <div className={styles.header}>Peer Domains</div>
            <div className={styles.content}>
              Get a <span className={styles.domain_name}>.pmc</span> domain for your journey through
              the world wide web of the future.
            </div>
          </div>
        )}
        <Seacrh onSearch={(text) => search(text)} />
        {searchStatus !== '' &&
          (searchStatus === 'SUCCESS' ? (
            <AvaliableDomen
              isWalletConected={isConectedWallet}
              onRegisterDomein={() => onRegisterDomein()}
              buyPeriod={buyPeriod}
              setBuyPeriod={setBuyPeriod}
            />
          ) : (
            <UnavaliableDomen />
          ))}
      </div>
    </PageContainer>
  )
}

Home.propTypes = {}

export default Home
