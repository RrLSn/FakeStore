import React, { useState, useEffect } from 'react'
import "./Homepage.css"
import axios from 'axios'
import ProductCards from '../components/ProductCards'
import { datas } from '../data'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

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
        <NavBar />

        <section>
            <div>
                <p className='text-[#5d5d5d]'>Collections</p>

                <div className='collection'>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Electronics</p>
                    <p>Jeweleries</p>
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

            <div>
                <p className='text-[#5d5d5d]'>Sort by</p>

                <div className='sort'>
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