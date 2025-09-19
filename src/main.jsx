import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router';
import './components/common/global.css'
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import Page404 from './pages/common/PageErr';

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/portofolio", element: <Portofolio />},
  {path: "*", element: <Page404 />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1" rel="stylesheet" />
    </head>
    <RouterProvider router={router} />
  </StrictMode>,
)
