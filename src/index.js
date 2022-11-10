import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'context/theme'
import { BrowserRouter as Router } from 'react-router-dom'
// import { setBaseEndpoint } from 'utils/apiClient'
import App from './App'

import './index.css'
import './index.scss'

// const url = 'peer.com/api'
// setBaseEndpoint(url)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
