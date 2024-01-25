import React, { useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import HomeFooter from 'components/Footer/HomeFooter'
import MainFooter from 'components/Footer/MainFooter'
import Home from 'pages/Home'
import MainHeader from 'components/Header/MainHeader'
import SimpleHeader from 'components/Header/SimpleHeader'
import Zen from 'pages/Zen'
import About from 'pages/About'
import Placeholder from 'pages/Placeholder'
import Jobs from 'pages/Jobs'
import OSDetect from 'pages/OSDetect'
import Blog from 'pages/Blog'
import Article from 'pages/Article'
import Team from 'pages/Team'

import routing from './routing/path'
import './App.css'

function App() {
  const { key, pathname } = useLocation()
  const { isLight, setIsLight } = useTheme()

  useEffect(() => {
    setIsLight(false)
  }, [setIsLight])

  const renderHeader = () => {
    if (pathname === routing.withoutAuth.blog) {
      return <SimpleHeader />
    }

    return <MainHeader />
  }

  const renderFooter = () => {
    if (pathname === routing.withoutAuth.home) {
      return <HomeFooter />
    }

    return <MainFooter />
  }

  return (
    <div id="theme" className={isLight ? 'container' : 'container dark'}>
      {renderHeader()}
      <TransitionGroup className="transition_group">
        <CSSTransition key={key} classNames="fade" timeout={900}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zen" element={<Zen />} />
            <Route path="/about" element={<About />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id?" element={<Article />} />
            <Route path={routing.withoutAuth.team} element={<Team />} />
            <Route path={routing.withoutAuth.jobs} element={<Jobs />} />
            <Route path={routing.withoutAuth.team} element={<Team />} />
            <Route path={routing.withoutAuth.app} element={<OSDetect />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {renderFooter()}
    </div>
  )
}

export default App
