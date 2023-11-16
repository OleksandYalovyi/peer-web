import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import HomeHeader from 'components/HomeHeader/index'
import Zen from 'pages/Zen'
import About from 'pages/About'
import Placeholder from 'pages/Placeholder'
import Careers from 'pages/Careers'
import Press from 'pages/Press'

import routing from './routing/path'
import './App.css'

function App() {
  const location = useLocation()
  const { isLight, setIsLight } = useTheme()
  setIsLight(false)

  return (
    <div id="theme" className={isLight ? 'container' : 'container dark'}>
      <HomeHeader />
      <TransitionGroup className="transition_group">
        <CSSTransition key={location.key} classNames="fade" timeout={900}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/zen" component={Zen} />
            <Route exact path="/about" component={About} />
            <Route exact path="/placeholder" component={Placeholder} />
            <Route exact path="/press" component={Press} />
            <Route exact path={routing.withoutAuth.careers} component={Careers} />
            <Redirect exact from="/*" to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  )
}

export default App
