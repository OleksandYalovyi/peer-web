import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'pages/HomeV2'
import WhitePaper from 'pages/WhitePaper'
import Header from 'components/Header'

import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.main_container}>
      <main id="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/white-paper" component={WhitePaper} />
          <Redirect exact from="/*" to="/" />
        </Switch>
      </main>
    </div>
  )
}

export default App
