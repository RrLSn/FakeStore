import React from 'react'
import { motion } from 'framer-motion'
import './Modal.css'

const Modal = (props) => {
    const { setShowModal,handleFilter } = props

    const modalVariants = {
        hidden: {x:-300},
        visible: {x: 0, transition: {duration: 0.5, stifness: 150}}
    }

  return (
    <motion.div
    variants={modalVariants}
    initial="hidden"
    animate="visible" 
    className="wrapper">
      <div className="w-[2.7rem] h-[2.7rem] flex justify-end" onClick={() => setShowModal(false)}>
        <div className='w-[2.7rem] border border-[#404040] rounded-md p-2 cursor-pointer'><img className='transition-all ease-in-out hover:scale-110' src="/Image/close.svg" alt="" /></div>
      </div>

      <form className='flex w-full h-[2.5rem] justify-between rounded-md border-[1px] border-[#262626] my-4 px-3'>
          <input 
          type="search" 
          placeholder='Search for products...' 
          className='input'
          />
          <img className='w-[1rem] opacity-[0.5]' src="/Image/search.svg" alt="" />
      </form>

      <div className="links">
            <a href="#" onClick={() => handleFilter("All")}>All</a>
            <a href="#" onClick={() => handleFilter("men's clothing")}>Men</a>
            <a href="#" onClick={() => handleFilter("women's clothing")}>Women</a>
        </div>
    </motion.div>
  )
}

export default Modal