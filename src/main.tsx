import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalCSS from "./global"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalCSS/>
  </React.StrictMode>,
)
