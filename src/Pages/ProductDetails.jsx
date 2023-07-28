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
    <div className='bg-[#171717] w-full lg:h-[max-content] h-[max-content] p-5'>
      <NavBar />
  
      <main className='detailsWrapper'>
        <div className='lg:w-[40vw] w-full overflow-hidden h-[max-content]'><img src={products.image} alt="Product's Image" /></div>

        <div className='productInfo'>
          <div className='border-b pb-5 border-[#5d5d5d]'>
            <div className='lg:flex items-center justify-between'>
              <h1>{products.title}</h1>
              <div className='w-[max-content] h-[2rem] px-5 py-1 bg-slate-600 rounded-md text-white text-center lg:mb-0 my-4'>
                <p>{products.category}</p>
              </div>
            </div>

            <div className='w-[7rem] p-2 bg-blue-700 text-center rounded-full'><p>{products.price}USD</p></div>
          </div>

          <h2 className='text-[#767676] my-4'>{products.description}</h2>

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