import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import LoadingEffect from './pages/Others/loadingEffect'
import ProjectDetail from './pages/Projects/ProjectDetails' // create this page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingEffect delay={0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </LoadingEffect>
    </BrowserRouter>
  </StrictMode>,
)
