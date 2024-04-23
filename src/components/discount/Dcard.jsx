import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../newarrivals/style.css"

//images
 import d1 from "./images/discount-1.png"
 import d2 from "./images/discount-2.png"
 import d3 from "./images/discount-3.png"
 import d4 from "./images/discount-4.png"
 import d5 from "./images/discount-5.png"
 import d6 from "./images/discount-6.png"
 import d7 from "./images/discount-7.png"
 import d8 from "./images/discount-8.png"
 import d9 from "./images/discount-9.png"
//
const Dcard = () => {
  const Ddata = [
    {
      cover: d1,
      name: "BenuX 2022",
      price: "$250",
    },
    {
      cover: d2,
      name: "Sony TV 1080p",
      price: "$450",
    },
    {
      cover: d3,
      name: "Sony PS4",
      price: "$50",
    },
    {
      cover: d4,
      name: "Setgearr 2022",
      price: "$100",
    },
    {
      cover: d5,
      name: "Tony BGB",
      price: "$20",
    },
    {
      cover: d6,
      name: "RG products",
      price: "$200",
    },
    {
      cover: d7,
      name: "Ranasonic 2022",
      price: "$300",
    },
    {
      cover: d8,
      name: "Pune HD",
      price: "$30",
    },
    {
      cover: d9,
      name: "Sony CCTV",
      price: "$80",
    },
  ]
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
