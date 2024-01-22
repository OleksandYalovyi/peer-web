import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import MainFooter from 'components/Footer/MainFooter'
import Home from 'pages/Home'
import MainHeader from 'components/MainHeader/index'
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
      <MainHeader />
      <TransitionGroup className="transition_group">
        <CSSTransition key={location.key} classNames="fade" timeout={900}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zen" element={<Zen />} />
            <Route path="/about" element={<About />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/press" element={<Press />} />
            <Route path={routing.withoutAuth.careers} element={<Careers />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <MainFooter />
    </div>
  )
}

export default App
