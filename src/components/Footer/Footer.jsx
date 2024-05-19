import React from 'react'

import { FaFacebookF , FaInstagram, FaTwitter} from "react-icons/fa";

import "./Footer.scss"
import images from '../../assets'



function Footer() {
  return (
    <footer className='app__container footer'>
        <div className='logo__section'>
            <img src={images.icon2} alt='logo'/>
        </div>

        <div className='section__1'>
            <h3>Contact Us</h3>

            <p className='para'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
        </div>

        

        <div className='section__2'>
            <h3>More</h3>

            <ul>
                <li><a href='#About'>About Us</a></li>
                <li><a href='#product'>Products</a></li>
                <li><a href='#career'>Career</a></li>
                <li><a href='#contact'>Contact Us</a></li>
            </ul>
        </div>


        <div className='section__3'>
            <h3>Social Links</h3>

            <div className='social__logo'>
                <FaInstagram/>
                <FaTwitter/>
                <FaFacebookF/>
            </div>

            <p className='para'>© 2022 Food Truck Example</p>
        </div>


    </footer>
  )
}

export default Footer