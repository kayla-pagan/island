import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import GettingHere from './pages/GettingHere'
import GettingAround from './pages/GettingAround'
import HotelResorts from './pages/HotelResorts'
import Restaurants from './pages/Restaurants'
import Things from './pages/Things'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
