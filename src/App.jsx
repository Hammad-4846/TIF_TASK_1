import React from 'react'
import Hero from './containers/hero/Hero'
import About from './containers/About/About'
import Product from './containers/Products/Product'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className = "container">
      <Navbar/>
      <Hero/>
      <About/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App