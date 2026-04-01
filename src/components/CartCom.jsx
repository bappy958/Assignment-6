import React from 'react'
import { toast } from 'react-toastify'

export default function CartCom({ product, isBuyed, setIsBuyed, isAdded, setIsAdded }) {
  const deleteButton= (product)=>{
    // console.log(product);
    const filteredProduct = isBuyed.filter(p=> p.name != product.name)
    // console.log(filteredProduct)
    setIsAdded(filteredProduct)
    setIsBuyed(filteredProduct)
    toast.warn(`${product.name} has removed from the cart`)
    
  }
  return (
    <div className='space-y-3.5'>
      {/* cards */}
      <div className='flex justify-between p-2 items-center border border-gray-300 rounded-2xl'>
        <div className='flex items-center gap-3'>
          <img src={product.image} className='h-fit w-[70px]' alt="" />
          <div className=''>
            <h1 className='text-xl'>{product.name}</h1>
            <p className='items-center font-bold'>${product.price}</p>
          </div>

        </div>
        <button className='btn text-red-500' onClick={()=>deleteButton (product)}>Remove</button>
      </div>

    </div>
  )
}
