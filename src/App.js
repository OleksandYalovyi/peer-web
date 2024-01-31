import React, { useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import Footer from 'components/Footer/HomeFooter'
import Home from 'pages/Home'
import Page404 from 'pages/Page404/index'
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
    if (pathname.startsWith(routing.withoutAuth.blog)) {
      return <SimpleHeader />
    }

    return <MainHeader />
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
            <Route path={routing.withoutAuth.blog} element={<Blog />} />
            <Route path={`${routing.withoutAuth.blog}/:id?`} element={<Article />} />
            <Route path={routing.withoutAuth.team} element={<Team />} />
            <Route path={routing.withoutAuth.jobs} element={<Jobs />} />
            <Route path={routing.withoutAuth.team} element={<Team />} />
            <Route path={routing.withoutAuth.app} element={<OSDetect />} />
            <Route path={routing.withoutAuth.notFound} element={<Page404 />} />
            <Route path="/*" element={<Navigate to={routing.withoutAuth.notFound} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  )
}

export default App
