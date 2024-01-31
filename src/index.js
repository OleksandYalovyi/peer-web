import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'context/theme'

import UseScrollToTop from 'hooks/useScrollToTop'
import App from './App'

import './index.css'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <UseScrollToTop>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UseScrollToTop>
    </Router>
  </React.StrictMode>,
)
