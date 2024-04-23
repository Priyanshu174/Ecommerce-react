import React from "react"
import c1 from "./images/cat1.png"
import c2 from "./images/cat2.png"
import c3 from "./images/cat3.png"
import c4 from "./images/cat4.png"
import c5 from "./images/cat5.png"
import c6 from "./images/cat6.png"
import c7 from "./images/cat7.png"
import c8 from "./images/cat8.png"
import c9 from "./images/cat9.png"
import c10 from "./images/cat10.png"
import c11 from "./images/cat11.png"

const Categories = () => {
  const data = [
    {
      cateImg: c1,
      cateName: "Fashion",
    },
    {
      cateImg: c2,
      cateName: "Electronic",
    },
    {
      cateImg: c3,
      cateName: "Cars",
    },
    {
      cateImg: c4,
      cateName: "Home & Garden",
    },
    {
      cateImg: c5,
      cateName: "Gifts",
    },
    {
      cateImg: c6,
      cateName: "Music",
    },
    {
      cateImg: c7,
      cateName: "Health & Beauty",
    },
    {
      cateImg: c8,
      cateName: "Pets",
    },
    {
      cateImg: c9,
      cateName: "Baby Toys",
    },
    {
      cateImg: c10,
      cateName: "Groceries",
    },
    {
      cateImg: c11,
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
