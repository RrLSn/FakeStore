import React, { useState } from 'react'
import "./ProductCards.css"
import { truncate } from '../utils'
import { animated, useSpring } from '@react-spring/web'

const ProductCards = (props) => {
    const {image, name, price} = props
    const [isHovered, setIsHovered] = useState(false)

    const [fullstring, setFullString] = useState(false)
    const isHovereProps = useSpring({
        transform: isHovered ? 'scale(1.2)' : 'scale(1)'
    })
   
  return (
            <div className='productCard'>
                <div className='w-[21rem] h-[max-content] m-auto flex justify-center overflow-hidden'>
                    <animated.img
                    src={image}
                    style={isHovereProps}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    alt="Products's Image"
                    />
                </div>

                <div className='w-[80%] h-[7vh]'>
                    <div className='w-[max-content] p-2 flex gap-3 rounded-full border border-[#5d5d5d] blur-0 text-[0.8rem] font-bold items-center m-auto'>
                        <p>{ fullstring === false? truncate(name) : name }</p>
                        <p className='w-[max-content] bg-blue-600 rounded-full text-center px-2 py-2 flex'>${price}<span className='lg:block hidden'>USD</span><span></span></p>
                    </div>
                </div>
            </div>
  )
}

export default ProductCards