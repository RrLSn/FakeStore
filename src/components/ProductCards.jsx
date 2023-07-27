import React, { useState } from 'react'
import "./ProductCards.css"
import { truncate } from '../utils'

const ProductCards = (props) => {
    const {image, name, price} = props

    const [fullstring, setFullString] = useState(false)
   
  return (
            <div className='productCard'>
                <div className='w-[21rem] h-[max-content] m-auto flex justify-center overflow-hidden'>
                    <img src={image} alt="Product's image" />
                </div>

                <div className='w-[80%] h-[7vh]'>
                    <div className='w-[15vw] p-2 flex justify-between rounded-full border border-[#5d5d5d] blur-0 text-[0.8rem] font-bold items-center m-auto'>
                        <p>{ fullstring === false? truncate(name) : name }</p>
                        <p className='w-[5vw] bg-blue-600 rounded-full text-center px-2 py-2'>{price}USD</p>
                    </div>
                </div>
            </div>
  )
}

export default ProductCards