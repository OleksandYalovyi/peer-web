import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ScrollToTop from 'utils/scrollToTop'
import Home from 'pages/Home'
import About from 'pages/About'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from './app.module.scss'

function App() {
  return (
    <Router>
      <div className={styles['main-container']}>
        <main id="main">
          <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Redirect exact from="/*" to="/" />
            </Switch>
          </ScrollToTop>
          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App
