import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
// import { AppProviders } from './context/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppProviders> */}
      <App />
    {/* </AppProviders> */}

  </React.StrictMode>,
)
