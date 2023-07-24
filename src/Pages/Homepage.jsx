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
        <div className='w-[max-content]'>
            <h1>FakeStore.<sub className='italic'>ng</sub></h1>
        </div>

        <main className='productWrapper'>
            <div className='header'>
                <h2 className='font-semibold text-[1.3rem]'>FakeStore products</h2>
                <p>{products.length} products found</p>
            </div>
            {
                isLoading? (
                    <div className='w-[100vw] h-[50vh] flex justify-center items-center'>Loading...</div>
                ) : (
                    <div className='w-[100%] h-[100%] flex flex-wrap py-10 gap-x-12 gap-y-10 justify-center'>
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
                    </div>
                )
            }
        </main>
    </div>
  )
}

export default Homepage