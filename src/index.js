import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'context/theme'
import WithIOSRedirect from 'HOC/WithIOSRedirect'

import App from './App'
import './index.css'

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <WithIOSRedirect>
        <App />
      </WithIOSRedirect>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
)
