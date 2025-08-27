import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/common/Root.css'
import Navbar from './components/common/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
