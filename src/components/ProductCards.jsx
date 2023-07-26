import React from 'react'
import "./ProductCards.css"

const ProductCards = (props) => {
    const {image, name, price, category} = props
  return (
            <div className='productCard'>
                <div className='w-[19rem] h-[max-content] m-auto flex justify-center'>
                    <img src={image} alt="Product's image" />
                </div>
                {/* <div className='w-[max-content] px-2 py-1 bg-slate-600 rounded-md mt-0 text-white text-center'>
                    <p>{category}</p>
                </div> */}
                <div className='flex'>
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
            </div>
  )
}

export default ProductCards