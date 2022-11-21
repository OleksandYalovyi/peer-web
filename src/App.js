import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import './App.css'

function App() {
  const location = useLocation()
  const { isLight, setIsLight } = useTheme()

  setIsLight(false)

  return (
    <div id="theme" className={isLight ? 'container' : 'container dark'}>
      <Header />
      <TransitionGroup className="transition_group">
        <CSSTransition key={location.key} classNames="fade" timeout={900}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Redirect exact from="/*" to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  )
}

export default App
