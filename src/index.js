import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'context/theme'
import { LocalProvider } from 'context/localization'
import WithIOSRedirect from 'HOC/WithIOSRedirect'

import App from './App'
import './index.css'

ReactDOM.render(
  <Router>
    <LocalProvider>
      <ThemeProvider>
        <WithIOSRedirect>
          <App />
        </WithIOSRedirect>
      </ThemeProvider>
    </LocalProvider>
  </Router>,
  document.getElementById('root'),
)
