import React, { useState } from 'react'
import Cards from './Cards'
import Cart from './Cart'

export default function CardContainer({ items, isAdded, setIsAdded }) {
    
    const [isSelected, setIsSelected] = useState('products');

    return (
        <div className='my-10 max-w-7xl mx-auto px-4'>
            {/* Header & Toggle Buttons */}
            <div className='text-center max-w-[600px] mx-auto space-y-4 mb-10'>
                <h1 className='text-4xl font-bold text-gray-800'>Premium Digital Tools</h1>
                <p className='text-gray-600'>
                    Choose from our curated collection of premium digital products designed 
                    to boost your productivity and creativity.
                </p>
                
                {/* Toggling Buttons */}
                <div className='flex justify-center gap-4 mt-6'>
                    <button 
                        onClick={() => setIsSelected('products')} 
                        className={`btn px-8 rounded-full transition-all ${isSelected === 'products' ? "bg-indigo-600 text-white border-none" : 'bg-white border-gray-300'}`}
                    >
                        Products
                    </button>
                    <button 
                        onClick={() => setIsSelected('cart')} 
                        className={`btn px-8 rounded-full transition-all ${isSelected === 'cart' ? "bg-indigo-600 text-white border-none" : 'bg-white border-gray-300'}`}
                    >
                        Cart ({isAdded.length})
                    </button>
                </div>
            </div>

            {/* Conditional Rendering Logic */}
            <div>
                {isSelected === 'products' ? (
                    /* Product Section: 3-Column Grid */
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {data.map(card => (
                            <Cards 
                                key={card.id} 
                                card={card} 
                                isAdded={isAdded} 
                                setIsAdded={setIsAdded}
                            />
                        ))}
                    </div>
                ) : (
                    /* Cart Section: 1-Column Layout */
                    <div className='max-w-3xl mx-auto'>
                        <Cart 
                            isAdded={isAdded} 
                            setIsAdded={setIsAdded}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}