import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ScrollToTop from 'utils/scrollToTop'
import Home from 'pages/Home'
import Mission from 'pages/Mission'
import WhatWeBuild from 'pages/WhatWeBuild'
import Roadmap from 'pages/Roadmap'
import News from 'pages/News'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from './app.module.scss'

function App() {
  return (
    <Router>
      <div className={styles['main-container']}>
        <main id="main">
          <Header />
          {/* <SideNav
            isMenuOpen={isMenuOpen}
            isMenuOpenFirst={isMenuOpenFirst}
            setIsMenuOpen={setIsMenuOpen}
          />{' '}
          */}
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/mission" component={Mission} />
              <Route exact path="/what-we-build" component={WhatWeBuild} />
              <Route exact path="/roadmap" component={Roadmap} />
              <Route exact path="/news" component={News} />
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
