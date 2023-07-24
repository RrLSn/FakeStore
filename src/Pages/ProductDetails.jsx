import React, { useState, useEffect } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { datas } from '../data'

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
    <div className='bg-[#f1f1f2] w-screen lg:h-screen h-[max-content] p-5'>
      <div className='w-[max-content] text-3xl font-bold mb-20'>
        <h1>FakeStore.<sub className='italic'>ng</sub></h1>
      </div>

      <main className='detailsWrapper'>
          <img className='w-[20rem] h-[22rem]' src={products.image} alt="Product's Image" />

        <div className='productInfo'>
          <div className='w-[max-content] px-5 font-bold py-1 bg-slate-600 rounded-md text-white text-center'>
            <p>{products.category}</p>
          </div>
          
          <h1>{products.title}</h1>
          <h2 className='font-semibold'>{products.description}</h2>
          <h1>${products.price}</h1>

          <div className='cartButton'>Add to cart</div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetails