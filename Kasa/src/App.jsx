import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'
import Header from '@layout/Header'
import Footer from '@layout/Footer'

import Home from '@/pages/Home'
import Accommodation from '@/pages/Accommodation'
import About from '@/pages/About'
import Error404 from '@/pages/Error404'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>Container principal</div>
      <Header/> */}
      <Outlet/>
      {/* <Footer/> */}

      {/* <div>
        <Home/>
        <Accommodation/>
        <About/>
        <Error404/>
      </div> */}
    </>
  )
}

export default App
