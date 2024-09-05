import React, { useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useTheme } from 'context/theme'
import Footer from 'components/Footer/HomeFooter'
import Home from 'pages/Home'
import Page404 from 'pages/Page404/index'
import Header from 'components/Header'
import Jobs from 'pages/Jobs'
import JobsDetails from 'pages/Jobs/details'
import OSDetect from 'pages/OSDetect'
import Team from 'pages/Team'
import OurStory from 'pages/OurStory'

import routing from './routing/path'
import './App.css'

function App() {
  const { key } = useLocation()
  const { isLight, setIsLight } = useTheme()

  useEffect(() => {
    setIsLight(false)
  }, [setIsLight])

  return (
    <div id="theme" className={isLight ? 'container' : 'container dark'}>
      <TransitionGroup className="transition_group">
        <CSSTransition key={key} classNames="fade" timeout={500} exit={false}>
          <div>
            <Header />
            <Routes>
              <Route path={routing.withoutAuth.home} element={<Home />} />
              {/* <Route path="/zen" element={<Zen />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/placeholder" element={<Placeholder />} /> */}
              <Route path={routing.withoutAuth.team} element={<Team />} />
              <Route path={routing.withoutAuth.jobs} element={<Jobs />} />
              <Route path={routing.withoutAuth.ourStory} element={<OurStory />} />
              <Route path={routing.withoutAuth.jobsDetails.path} element={<JobsDetails />} />
              <Route path={routing.withoutAuth.app} element={<OSDetect />} />
              <Route path={routing.withoutAuth.notFound} element={<Page404 />} />
              <Route path="/*" element={<Navigate to={routing.withoutAuth.notFound} />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  )
}

export default App
