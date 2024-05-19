import React, { useEffect, useRef } from 'react'
import "./Navbar.scss"
import images from '../../assets'


function Navbar() {


 
  return (
    <nav className='app__navbar app__container' >
      <div className='logo'>
        <img src={images.icon1} alt='logo' />
      </div>

      <a className='btn nav-btn' href='#'>Get in Touch</a>
    </nav>
  )
}

export default Navbar