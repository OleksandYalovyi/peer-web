import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'context/theme'

import UseScrollToTop from 'hooks/useScrollToTop'

import SolarPreloadImg from 'assets/Home/SolarPreload.png'
import SolarPreloadHighImg from 'assets/Home/SolarPreload1080.png'
import App from './App'

import './index.css'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <UseScrollToTop>
        <ThemeProvider>
          {/* content to preload */}
          <div style={{ display: 'none' }}>
            <img src={SolarPreloadImg} alt="" />
            <img src={SolarPreloadHighImg} alt="" />
          </div>

          <App />
        </ThemeProvider>
      </UseScrollToTop>
    </Router>
  </React.StrictMode>,
)
