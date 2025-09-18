import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/common/global.css'
import Navbar from './components/common/Navbar.jsx';
import Home from './components/home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    </head>
    <body class="bg-gray-100 w-full">
      <Navbar />
      <Home />
    </body>
  </StrictMode>,
)
