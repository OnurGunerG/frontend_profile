import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LangContextProvider from './contexts/LangContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </StrictMode>,
)
