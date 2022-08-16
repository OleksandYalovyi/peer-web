import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'pages/HomeV2'
import About from 'pages/About'
import Blockchain from 'pages/Blockchain'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.main_container}>
      <main id="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/white-paper" component={About} />
          <Redirect exact from="/*" to="/" />
        </Switch>
      </main>
    </div>
  )
}

export default App
