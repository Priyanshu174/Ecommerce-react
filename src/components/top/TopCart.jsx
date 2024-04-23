import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import c1 from "./images/category-1.png"
import c2 from "./images/category-2.png"
import c3 from "./images/category-3.png"
const TopCart = () => {
  const Tdata = [
    {
      cover: c1,
      para: "headphone",
      desc: "3k orders this week",
    },
    {
      cover: c2,
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: c3,
      para: "sunglass",
      desc: "6k orders this week",
    },
    {
      cover: c3,
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: c2,
      para: "sunglass",
      desc: "6k orders this week",
    },
  ]
  
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
