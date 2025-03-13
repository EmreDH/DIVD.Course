import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Styling/index.css'
import '../Styling/styles.css'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
