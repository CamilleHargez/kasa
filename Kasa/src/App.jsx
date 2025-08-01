import './App.css'

import { Outlet } from 'react-router-dom'
import Header from '@layout/Header'
import Footer from '@layout/Footer'

function App() {

  return (
    <>
      <div className='container-principal'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
