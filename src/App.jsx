import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import GettingHere from './pages/GettingHere'
import GettingAround from './pages/GettingAround'
import HotelsResorts from './pages/HotelsResorts'
import Restaurants from './pages/Restaurants'
import Things from './pages/Things'
import Layout from './components/Layout'
import Contact from './pages/Contact'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='gettinghere' element={<GettingHere />} />
          <Route path='gettingaround' element={<GettingAround />} />
          <Route path='hotelsresorts' element={<HotelsResorts />} />
          <Route path='restaurants' element={<Restaurants />} />
          <Route path='things' element={<Things />} />
          <Route path='contact' element={<Contact />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  )

}