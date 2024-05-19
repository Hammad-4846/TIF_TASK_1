import React, { useState } from 'react'

import { productData } from "../../constants/data"

import ProductCard from "../../components/ProductCard/ProductCard"
import "./Product.scss"


function Product() {
  const cardRef = React.useRef(null);
  const carouselRef = React.useRef(null);
  const [slideNumber, setSlideNumber] = useState(1);

  const slide = (direction) => {
    // const width = cardRef.current.offsetWidth;
    if(direction == "right"){ 
        carouselRef.current.scrollLeft += 12000;
        setSlideNumber(2);
      }
    else{ 
      carouselRef.current.scrollLeft -= 12000;
      setSlideNumber(1);
    }
}



  return (
    <div className='product__section app__container'>

      <h2 className='heading'>Latest Articles</h2>


      <div className='product_list'>
        <div className='product_container' ref={carouselRef}>
          {productData.map((product) => (
            <ProductCard description={product.description} key={product.id} imageUrl={product.imgUrl} heading={product.name}ref={cardRef}/>
          ))}
        </div>

      </div>

      <div className='button_container'>
          <div className='left_shift' onClick={() => {slide("left"), console.log("clicked left")}} style={{border: `2px solid ${slideNumber === 1 ? "#424961" : "#42496175"}`}}>
              <svg
                  height="30"
                  viewBox="0 96 960 960"
                  width="30"
              >
                  <path
                      fill={slideNumber === 1 ? "#424961" : "#42496175"}
                      d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"
                  />
              </svg>

          </div> 

          <div className='slide_number'>{slideNumber}/2</div>
          
          <div className='right_shift' onClick={() => {slide("right")}} style={{border: `2px solid ${slideNumber === 2 ? "#424961" : "#42496175"}`}}>
              <svg
                  height="30"
                  viewBox="0 96 960 960"
                  width="30"
              >
                  <path
                      fill={slideNumber === 2 ? "#424961" : "#42496175"}
                      d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"
                  />
              </svg>
          </div> 
      </div>


    </div>
  )
}

export default Product