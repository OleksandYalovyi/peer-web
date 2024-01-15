import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import HomeHeader from 'components/HomeHeader/index'
import Zen from 'pages/Zen'
import About from 'pages/About'
import Placeholder from 'pages/Placeholder'
import Careers from 'pages/Careers'
import Blog from 'pages/Blog'
import Article from 'pages/Article'
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zen" element={<Zen />} />
            <Route path="/about" element={<About />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id?" element={<Article />} />
            <Route path={routing.withoutAuth.careers} element={<Careers />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  )
}

export default App
