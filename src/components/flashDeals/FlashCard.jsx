import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import f1 from "./images/flash-1.png"
import f2 from "./images/flash-2.png"
import f3 from "./images/flash-3.png"
import f4 from "./images/flash-4.png"
import f5 from "./images/flash-5.png"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({  addToCart }) => {
  //
  const Data = {
    productItems: [
      {
        id: 1,
        discount: 50,
        cover: f1,
        name: "Shoes",
        price: 100,
      },
      {
        id: 2,
        discount: 40,
        cover: f2,
        name: "Watch",
        price: 20,
      },
      {
        id: 3,
        discount: 40,
        cover: f3,
        name: "Smart Mobile Black",
        price: 200,
      },
      {
        id: 4,
        discount: 40,
        cover: f4,
        name: "Smart Watch Black",
        price: 50,
      },
      {
        id: 5,
        discount: 50,
        cover: f5,
        name: "Shoes",
        price: 100,
      },
      {
        id: 6,
        discount: 50,
        cover: f3,
        name: "Shoes",
        price: 100,
      },
    ],
  }
  //
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {Data.productItems.map((productItems) => {
          console.log(productItems.cover);
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
