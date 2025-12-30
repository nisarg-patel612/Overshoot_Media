import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { Navbar } from './Components/Navbar';
import { Pricing } from './Pages/Upgrade_Plan/Pricing';
import { Watch } from './Pages/Watch/Watch';
import { Contact_Us } from './Pages/Contact_Sales/Contact_Us';
import { Solution } from './Pages/Solutions/Solution';

function App() {

  return (
    <>
      <BrowserRouter>

      {/* <Navbar /> */}

            <Routes>

                  <Route path='/' element={<Home />} />

                  <Route path='/upgrade-plan' element={<Pricing />} />

                  <Route path='/watch' element={<Watch />} />

                  <Route path='/contact-us' element={<Contact_Us />} />

                  <Route path='/solutions' element={<Solution />} />

            </Routes>
          
      </BrowserRouter>
    </>
  )
}

export default App
