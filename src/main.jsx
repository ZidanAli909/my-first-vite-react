import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/common/global.css'
import Navbar from './components/common/Navbar.jsx';
import Home from './components/home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
  </StrictMode>,
)
