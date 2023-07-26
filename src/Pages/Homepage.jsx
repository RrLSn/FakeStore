import React, { useState, useEffect } from 'react'
import "./Homepage.css"
import axios from 'axios'
import ProductCards from '../components/ProductCards'
import { datas } from '../data'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async() => {
        try {
            const response = await axios.get(datas)
            setProducts(response.data)
            setIsLoading(false)
        } catch (error) {
            alert('Error Loading datas', error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])


  return (
    <div className='wrapper'>
        <nav className='w-full flex items-center text-white justify-between'>
            <h1>FakeStore.<sub className='italic'>ng</sub></h1>

            <div className='flex w-[25rem] justify-between rounded-md border border-[#5d5d5d] p-2'>
                <input type="text" placeholder='Search for products' className='bg-transparent focus:outline-none w-full' />
                <img className='w-[1rem]' src="/Image/search.svg" alt="" />
            </div>

            <div className='w-[2rem] border border-[#5d5d5d] p-2'><img src="/Image/cart.svg" alt="" /></div>
        </nav>

        <section>
            <div className='text-white w-[10vw]'>
                <p className='text-[#5d5d5d]'>Collections</p>

                <div>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Electronics</p>
                    <p>jeweleries</p>
                </div>
            </div>
            
            <main className='productWrapper'>
                {
                    products.map((product) => (
                        <Link to={`/productDetails/${product.id}`} key={product.id}>
                            <ProductCards
                                name={product.title}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                            />
                        </Link>
                    ))
                }
            </main>

            <div className='w-[10vw] text-white'>
                <p className='text-[#5d5d5d]'>Sort by</p>

                <div>
                    <p>Relevance</p>
                    <p>Trending</p>
                    <p>Price: Low to High</p>
                    <p>Price: High to Low</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Homepage