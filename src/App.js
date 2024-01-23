import React, { useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import MainFooter from 'components/Footer/HomeFooter'
import Home from 'pages/Home'
import MainHeader from 'components/Header/MainHeader/index'
import Zen from 'pages/Zen'
import About from 'pages/About'
import Placeholder from 'pages/Placeholder'
import Jobs from 'pages/Jobs'
import Press from 'pages/Press'
import Team from 'pages/Team'

import routing from './routing/path'
import './App.css'

function App() {
  const location = useLocation()
  const { isLight, setIsLight } = useTheme()

  useEffect(() => {
    setIsLight(false)
  }, [setIsLight])

  return (
    <div id="theme" className={isLight ? 'container' : 'container dark'}>
      <MainHeader />
      <TransitionGroup className="transition_group">
        <CSSTransition key={location.key} classNames="fade" timeout={900}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zen" element={<Zen />} />
            <Route path="/about" element={<About />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/press" element={<Press />} />
            <Route path={routing.withoutAuth.team} element={<Team />} />
            <Route path={routing.withoutAuth.jobs} element={<Jobs />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <MainFooter />
    </div>
  )
}

export default App
