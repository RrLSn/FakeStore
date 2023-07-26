import React from 'react'
import "./ProductCards.css"

const ProductCards = (props) => {
    const {image, name, price, category} = props
  return (
            <div className='productCard'>
                <div className='w-[19rem] h-[max-content] m-auto flex justify-center'>
                    <img src={image} alt="Product's image" />
                </div>

                <div className='w-[100%] h-[8vh]'>
                    <div className='min-w-[20vw] p-2 flex justify-between rounded-[20px] border text-[0.7rem] font-bold items-center'>
                        <p>{name}</p>
                        <p className='w-[5vw] bg-blue-600 rounded-[15px] text-center px-2 py-2'>{price}USD</p>
                    </div>
                </div>
            </div>
  )
}

export default ProductCards