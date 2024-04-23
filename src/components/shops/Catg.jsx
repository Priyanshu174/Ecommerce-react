import React from "react"
import c1 from "./catimages/cat-1.png"
import c2 from "./catimages/cat-2.png"
const Catg = () => {
  const data = [
    {
      cateImg: c1,
      cateName: "Apple",
    },
    {
      cateImg: c2,
      cateName: "Samasung",
    },
    {
      cateImg: c1,
      cateName: "Oppo",
    },
    {
      cateImg: c2,
      cateName: "Vivo",
    },
    {
      cateImg: c1,
      cateName: "Redimi",
    },
    {
      cateImg: c2,
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
