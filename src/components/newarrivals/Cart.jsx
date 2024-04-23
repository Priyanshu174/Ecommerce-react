import React from "react"
import a1 from "./images/arrivals1.png"
import a2 from "./images/arrivals2.png"
import a3 from "./images/arrivals3.png"
import a4 from "./images/arrivals4.png"
import a5 from "./images/arrivals5.png"
import a6 from "./images/arrivals6.png"

const Cart = () => {
  const Ndata = [
    {
      cover: a1,
      name: "Sunglass",
      price: "150",
    },
    {
      cover:a2,
      name: "Makeup",
      price: "250",
    },
    {
      cover:a3,
      name: "Smart Watch",
      price: "50",
    },
    {
      cover: a4,
      name: "Lipstick",
      price: "15",
    },
    {
      cover: a5,
      name: "Green Plant",
      price: "10",
    },
    {
      cover: a6,
      name: "Bonsai tree",
      price: "400",
    },
  ]
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
