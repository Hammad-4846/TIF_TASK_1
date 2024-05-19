import React from 'react'

import "./About.scss"
import images from '../../assets'

function About() {
  return (
    <section className='about__container flex'>
        <div className='grid__container'>
            <div className='image__section'>
                <img src={images.about}  alt='Restaurant_Dish'/>
            </div>

            <div className='info__section'>
                <h2 className='heading'>About Us</h2>
                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                <a className='btn' href='#btn'>Read More</a>
            </div>
        </div>
    </section >
  )
}

export default About