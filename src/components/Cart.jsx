import React from 'react'
import CartCom from './CartCom'
import { toast } from 'react-toastify'

export default function Cart({ isBuyed, setIsBuyed, isAdded, setIsAdded }) {
    isBuyed.map(el => el.name)
    // console.log(el)

    let totalPrice = isBuyed.reduce((sum, item) => sum + item.price, 0)

    const proceed = () => {
        setIsBuyed([])
        setIsAdded([])

        toast.info(`${isBuyed.length > 0 ? 'All the items had prceded to checkout' : 'No items available '}`)
    }

    // console.log(totalPrice)
    return (
        <div className='w-full max-w-[1400px] mx-auto col-span-full space-y-2 border p-5 border-gray-400 rounded-2xl'>
            <h1 className='text-3xl'>Your Cart</h1>

            {isBuyed.length > 0 ? <div className='cards space-y-3'>

                {
                    isBuyed.map(product => <CartCom product={product} isBuyed={isBuyed} setIsBuyed={setIsBuyed} isAdded={isAdded} setIsAdded={setIsAdded}></CartCom>)
                }
            </div>
                : <div className='text-center'>
                    <h1 className='text-2xl'>Your cart is empty</h1>
                    <p>Please select any item</p>
                </div>
            }

            <div className='flex justify-between'>
                <span className='text-2xl'>Price</span>
                <span className='font-bold text-2xl'>{totalPrice}$</span>
            </div>
            <div>
                <button onClick={proceed} className='btn btn-primary rounded-2xl w-full'>Proceed to Checkout</button>
            </div>
        </div>
    )
}
