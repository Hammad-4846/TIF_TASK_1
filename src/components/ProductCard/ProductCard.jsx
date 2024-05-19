import React from 'react'

import "./ProductCard.scss"

function ProductCard({imageUrl,heading,description}) {
  return (
    <div className='Card'>
        <img src={imageUrl} alt='product_img'/>
        <h3 className='h_card'>{heading}</h3>
        <p className='text'>{description}</p>

        <a href='#' className='btn btn-var'>Read More</a>
    </div>
  )
}

export default ProductCard