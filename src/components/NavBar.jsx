import React from 'react'

const NavBar = () => {
  return (
    <nav className='w-full flex items-center text-white justify-between'>
            <h1 className='lg:text-3xl text-2xl font-bold'>FakeStore.<sub className='italic'>ng</sub></h1>

            <div className='lg:flex  hidden w-[25rem] justify-between rounded-md border border-[#5d5d5d] p-2'>
                <input type="text" placeholder='Search for products' className='bg-transparent focus:outline-none w-full' />
                <img className='w-[1rem]' src="/Image/search.svg" alt="" />
            </div>

            <div className='w-[2rem] border border-[#5d5d5d] p-2 cursor-pointer'><img className='transition-all ease-in-out hover:scale-110' src="/Image/cart.svg" alt="" /></div>
        </nav>
  )
}

export default NavBar