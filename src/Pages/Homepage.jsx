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
    if (criterion === `men's clothing` || `jewelery` || `women's clothing` || `electronics`) {
    const filtered = products.filter((product) => product.category === criterion)
    setFilteredItems(filtered)
    }
   }

   const handleSort = (criterion) => {
    if (criterion === 'ascPrice'){
        const sorted = [...filteredItems].sort((a, b) => a.price - b.price)
        setFilteredItems(sorted)
        setSortCriteria('ascPrice')
    } else if (criterion === 'descPrice'){
        const sorted = [...filteredItems].sort((a, b) => b.price - a.price)
        setFilteredItems(sorted)
        setSortCriteria('descPrice')
    } else if (criterion === 'trending'){
        const sorted = [...filteredItems].sort((a, b) => a.rating.count - b.rating.count)
        setFilteredItems(sorted)
        setSortCriteria('trending')
    } else if (criterion === 'relevance'){
        const sorted = [...filteredItems].sort((a, b) => a.rating.rate - b.rating.rate)
        setFilteredItems(sorted)
        setSortCriteria('relevance')
    }
   }

   const clearFilter = () => {
    setFilteredItems(products)
   }


  return (
    <div className='wrapper'>
        <NavBar />

        <section>
            <div className='lg:block hidden'>
                <p className='text-[#5d5d5d]'>Collections</p>

                <ul className='collection'>
                    <li><a href='#' onClick={clearFilter}>All</a></li>
                    <li><a href='#' onClick={() =>handleFilter(`men's clothing`)}>Men</a></li>
                    <li><a href='#' onClick={() => handleFilter(`women's clothing`)}>Women</a></li>
                    <li><a href='#' onClick={() => handleFilter(`electronics`)}>Electronics</a></li>
                    <li><a href='#' onClick={() => handleFilter(`jewelery`)}>Jeweleries</a></li>
                </ul>
            </div>
            
            <main className='productWrapper'>
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

            <div className='lg:block hidden'>
                <p className='text-[#5d5d5d]'>Sort by</p>

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