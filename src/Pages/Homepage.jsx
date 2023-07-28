import React, { useState, useEffect } from 'react'
import "./Homepage.css"
import axios from 'axios'
import ProductCards from '../components/ProductCards'
import { datas } from '../data'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Homepage = () => {
    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [sortCriteria, setSortCriteria] = useState('')
    const [filteredCriteria, setFilteredCriteria] = useState('')

    
    const fetchData = async() => {
        try {
            const response = await axios.get(datas)
            setProducts(response.data)
            setFilteredItems(response.data)
        } catch (error) {
            alert('Error Loading datas', error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const handleFilter = (criterion) => {
        if(criterion === `men's clothing`){
            const filtered = products.filter((product) => product.category === criterion)
            setFilteredItems(filtered)
            setFilteredCriteria('Men')
        } else if (criterion === `jewelery`){
            const filtered = products.filter((product) => product.category === criterion)
            setFilteredItems(filtered)
            setFilteredCriteria('Jeweleries')
        } else if (criterion === `women's clothing`){
            const filtered = products.filter((product) => product.category === criterion)
            setFilteredItems(filtered)
            setFilteredCriteria('Women')
        } else if (criterion === `electronics`){
            const filtered = products.filter((product) => product.category === criterion)
            setFilteredItems(filtered)
            setFilteredCriteria('Electronics')
        } else if(criterion === 'All'){
            setFilteredItems(products)
            setFilteredCriteria('All')
        }
    }

   const handleSort = (criterion) => {
    if (criterion === 'ascPrice'){
        const sorted = [...filteredItems].sort((a, b) => a.price - b.price)
        setFilteredItems(sorted)
        setSortCriteria('Price: Low to High')
    } else if (criterion === 'descPrice'){
        const sorted = [...filteredItems].sort((a, b) => b.price - a.price)
        setFilteredItems(sorted)
        setSortCriteria('Price: High to Low')
    } else if (criterion === 'trending'){
        const sorted = [...filteredItems].sort((a, b) => a.rating.count - b.rating.count)
        setFilteredItems(sorted)
        setSortCriteria('Trending')
    } else if (criterion === 'relevance'){
        const sorted = [...filteredItems].sort((a, b) => a.rating.rate - b.rating.rate)
        setFilteredItems(sorted)
        setSortCriteria('Relevance')
    }
   }

  return (
    <div className='wrapper'>
        <NavBar />

        <section>

            <div className='order-1 '>
                <p className='text-[#5d5d5d] lg:block hidden'>Collections</p>
                <div className='lg:hidden flex justify-between rounded-md w-full border p-2 text-white'>
                    <div>{filteredCriteria}</div>
                    <img src="/Image/arrow-down.svg" alt="arrow" className='w-[5vw]' />
                </div>
                <ul className='collection'>
                    <li><a href='#' onClick={() => handleFilter('All')}>All</a></li>
                    <li><a href='#' onClick={() =>handleFilter(`men's clothing`)}>Men</a></li>
                    <li><a href='#' onClick={() => handleFilter(`women's clothing`)}>Women</a></li>
                    <li><a href='#' onClick={() => handleFilter(`electronics`)}>Electronics</a></li>
                    <li><a href='#' onClick={() => handleFilter(`jewelery`)}>Jeweleries</a></li>
                </ul>
            </div>
            
            <main className='productWrapper lg:order-2 order-3'>
                {
                    filteredItems.map((product) => (
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

            <div className='lg:order-3 order-2'>
                <p className='text-[#5d5d5d] lg:block hidden'>Sort by</p>

                <div className='lg:hidden flex justify-between rounded-md w-full border p-2 text-white'>
                    <div>{sortCriteria}</div>
                    <img src="/Image/arrow-down.svg" alt="arrow" className='w-[5vw]' />
                </div>

                <ul className='sort'>
                    <li><a href='#' onClick={() => handleSort('relevance')}>Relevance</a></li>
                    <li><a href='#' onClick={() => handleSort('trending')}>Trending</a></li>
                    <li><a href='#' onClick={() => handleSort('ascPrice')}>Price: Low to High</a></li>
                    <li><a href='#' onClick={() => handleSort('descPrice')}>Price: High to Low</a></li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Homepage