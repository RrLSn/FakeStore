import React, { useState } from 'react'
import "./ProductCards.css"
import { truncate } from '../utils'
import { animated, useSpring } from '@react-spring/web'

const ProductCards = (props) => {
    const {image, name, price} = props
    const [isHovered, setIsHovered] = useState(false)

    const [fullstring, setFullString] = useState(false)
    const isHovereProps = useSpring({
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    })
   
  return (
            <div className='productCard'>
                <div className='w-[20rem] h-[25rem] overflow-hidden flex justify-center items-center relative z-20'>
                    <animated.img
                    src={image}
                    style={isHovereProps}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    alt="Products's Image"
                    />
                </div>

                <div className='w-[max-content] flex gap-3 rounded-full border border-[#5d5d5d] text-[0.9rem] font-semibold items-center lg:py-2 py-1 px-2 tracking-tight z-10'>
                    <p>{ fullstring === false? truncate(name) : name }</p>
                    <p className='w-[max-content] bg-blue-600 rounded-full text-center flex justify-center lg:px-1 py-1 px-2'>${price}<span className='lg:block hidden'>USD</span><span></span></p>
                </div>
            </div>
  )
}

export default ProductCards