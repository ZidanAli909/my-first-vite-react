import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './components/common/global.css'
import Navbar from './components/common/Navbar.jsx';
import Home from './pages/home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1" rel="stylesheet" />
    </head>
    <body class="bg-gray-100 w-full">
      <Navbar />
      <Home />
    </body>
  </StrictMode>,
)
