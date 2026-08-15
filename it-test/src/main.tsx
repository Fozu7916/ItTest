import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initMetrika } from './utils/metrika'
import './index.css'
import App from './App.tsx'

initMetrika()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
