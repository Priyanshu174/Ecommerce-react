//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart
import s1 from "./images/shops-1.png"
import s2 from "./images/shops-2.png"
import s3 from "./images/shops-3.png"
import s4 from "./images/shops-4.png"
import s5 from "./images/shops-5.png"
import s6 from "./images/shops-7.png"
import s7 from "./images/shops-8.png"
import s8 from "./images/shops-9.png"
import s9 from "./images/shops-10.png"


import React, { useState } from "react"

const ShopCart = ({  addToCart }) => {

  const Sdata = {
    shopItems: [
      {
        id: 7,
        cover: s1,
        name: "Mapple Earphones",
        price: "180",
        discount: "25",
      },
      {
        id: 8,
        cover: s2,
        name: "Vivo android one",
        price: "120",
        discount: "10",
      },
      {
        id: 9,
        cover: s3,
        name: "Sony Light",
        price: "20",
        discount: "50 ",
      },
      {
        id: 10,
        cover: s4,
        name: "Iphone",
        price: "999",
        discount: "10 ",
      },
      {
        id: 11,
        cover: s5,
        name: "Ceats wireless earphone",
        price: "80",
        discount: "20 ",
      },
      {
        id: 12,
        cover: s6,
        name: "Redimi Phone",
        price: "400",
        discount: "20 ",
      },
      {
        id: 13,
        cover: s7,
        name: "Xeats Bluetooth earphones",
        price: "60",
        discount: "5 ",
      },
      {
        id: 14,
        cover: s8,
        name: "Airpod",
        price: "120",
        discount: "10",
      },
      {
        id: 15,
        cover: s9,
        name: "Silver Cap",
        price: "5",
        discount: "2",
      },
    ],
  }
  
  
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {Sdata.shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
