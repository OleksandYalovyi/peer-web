import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import HomeHeader from 'components/HomeHeader/index'
import Zen from 'pages/Zen'
import Team from 'pages/Team'
import Placeholder from 'pages/Placeholder'
import News from 'pages/News'
import './App.css'
import HomeFooter from 'components/HomeFooter/index'

function App() {
  const location = useLocation()
  const { isLight, setIsLight } = useTheme()
  const isHome = location.pathname === '/'
  setIsLight(false)

  return (
    <div id="theme" className={isLight ? 'container' : 'container dark'}>
      {isHome ? <HomeHeader /> : <Header />}
      <TransitionGroup className="transition_group">
        <CSSTransition key={location.key} classNames="fade" timeout={900}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/zen" component={Zen} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/placeholder" component={Placeholder} />
            <Route exact path="/news" component={News} />
            <Redirect exact from="/*" to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      {isHome ? <HomeFooter /> : <Footer />}
    </div>
  )
}

export default App
