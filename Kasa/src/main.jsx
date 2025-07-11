import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import About from '@/pages/About'
import Accommodation from '@/pages/Accommodation'
import Error404 from '@/pages/Error404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "apropos",
        element: <About/>
      },
      {
        path: "logement",
        element: <Accommodation/>
      },
      {
        path: "*",
        element: <Error404/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
