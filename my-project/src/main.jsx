import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title' 
import App from './App' 
import Calendar from './Calendar' 

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title />
    <App />
    <Calendar />
  </React.StrictMode>,
)
