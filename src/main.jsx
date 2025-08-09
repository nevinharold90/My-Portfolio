import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Home from './pages/Home'
import LoadingEffect from './pages/Others/loadingEffect';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingEffect delay={4000}>
      <Home />
    </LoadingEffect>
  </StrictMode>,
)
