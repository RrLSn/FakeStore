import React, { useState, useEffect } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { datas } from '../data'
import NavBar from '../components/NavBar'

const ProductDetails = () => {

  const {id} = useParams()
  const [products, setProducts] = useState([])

    const fetchData = () => {
        axios.get(`${datas}/${id}`)
        .then(response => {
          setProducts(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }

    useEffect(() => {
        fetchData()
    },[id])



  return (
    <div className='bg-[#171717] w-screen lg:h-screen h-[max-content] p-5'>
      <NavBar />
  
      <main className='detailsWrapper'>
          <img className='w-[40rem] h-[30rem]' src={products.image} alt="Product's Image" />

        <div className='productInfo'>
          <div className='w-[max-content] px-5 font-bold py-1 bg-slate-600 rounded-md text-white text-center'>
            <p>{products.category}</p>
          </div>
          
          <h1>{products.title}</h1>
          <h2 className='font-semibold'>{products.description}</h2>
          <h1>${products.price}</h1>

          <div className='cartButton'>
            <img src="/Image/add-line.svg" alt="" />
            <p>Add to cart</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetails