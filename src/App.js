import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'pages/Home'
import About from 'pages/About'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from './app.module.scss'

function App() {
  return (
    <div className={styles['main-container']}>
      <main id="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect exact from="/*" to="/" />
        </Switch>
        <Footer />
      </main>
    </div>
  )
}

export default App
