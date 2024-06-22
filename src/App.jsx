import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './pages/Hero'
import Discover from './pages/Discover'
import BestSellers from './pages/BestSellers'
import Features from './pages/Features'

function App() {

  return (
      <main>
        <Nav/>
        <Hero/>
        <Discover/>
        <BestSellers/>
        <Features/>
        <div>feedback</div>
        <div>subscribe</div>
        <div>footer</div>
      </main>
  )
}

export default App
