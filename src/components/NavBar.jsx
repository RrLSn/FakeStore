import './NavBar.css'


const NavBar = (props) => {

  const { handleFilter } = props

  return (
    <nav>
      <div className="w-[15vw] lg:hidden flex justify-start">
        <div className='w-[2.5rem] border border-[#404040] rounded-md p-3 cursor-pointer'><img className='transition-all ease-in-out hover:scale-110' src="/Image/menu.svg" alt="" /></div>
      </div>

      <div className="flex gap-4">
        <a href="/" className="flex gap-2 items-center">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" class="fill-black dark:fill-white h-[16px] w-[16px]"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg>
          </div>
          <h1 className='text-[#a3a3a3] font-bold text-md tracking-tight'>FAKESTORE</h1>
        </a>

        <div className="navLink text-md">
            <a href="#" onClick={() => handleFilter("All")}>All</a>
            <a href="#" onClick={() => handleFilter("men's clothing")}>Men</a>
            <a href="#" onClick={() => handleFilter("women's clothing")}>Women</a>
        </div>
      </div>
            
      <form className='lg:flex hidden w-[51rem] justify-between rounded-md border-[1px] border-[#262626] py-1 px-3'>
          <input 
          type="search" 
          placeholder='Search for products...' 
          className='input'
          />
          <img className='w-[1rem] opacity-[0.5]' src="/Image/search.svg" alt="" />
      </form>

      <div className="w-[15vw] flex justify-end">
        <div className='w-[2.5rem] border border-[#404040] rounded-md p-3 cursor-pointer'><img className='transition-all ease-in-out hover:scale-110' src="/Image/cart.svg" alt="" /></div>
      </div>
    </nav>
  )
}

export default NavBar