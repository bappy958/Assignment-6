import React, { use, useState } from 'react'
import Card from './Cards'
import Cards from './Cards'
import Cart from './Cart'

export default function CardContainer({items,isAdded, setIsAdded }) {
    const data = use(items)
    // console.log(datas)
    const [isSelected, setIsSelected] = useState('products')
    const [isBuyed, setIsBuyed] = useState([])
    return (
        <div className='my-10'>
            <div className='text-center max-w-[500px] mx-auto space-y-2'>
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                <div className='gap-2 flex justify-center'>

                    <button onClick={() => setIsSelected('products')} className={`btn ${isSelected === 'products' ? "bg-linear-to-r from-blue-600 to-purple-500 text-white" : 'bg-white'} text-black rounded-2xl`}>Products</button>
                    <button onClick={() => setIsSelected('cart')} className={`btn ${isSelected === 'cart' ? "bg-linear-to-r from-blue-600 to-purple-500 text-white" : 'bg-white'} text-black rounded-2xl`}>Cart ({isBuyed.length})</button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    isSelected === 'products' ?
                    data.map(card=> <Cards key={card.id} card={card} isBuyed={isBuyed} setIsBuyed={setIsBuyed}  isAdded={isAdded} setIsAdded={setIsAdded}></Cards>)
                    : <Cart  isBuyed={isBuyed} setIsBuyed={setIsBuyed}  isAdded={isAdded} setIsAdded={setIsAdded}></Cart>
                }
                
            </div>
        </div>
    )
}
