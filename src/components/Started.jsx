import React from 'react'
import user from "../images/user.png"
import packages  from "../images/package.png"
import rocket from "../images/rocket.png"


export default function Started() {
  return (
    <div className='space-y-3 p-15'>
        <div className='text-center my-10'>
            <h1 className='font-bold text-3xl'>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        {/* cards */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {/* card */}
            <div className='border border-gray-400 rounded-2xl p-10 mx-auto min-h-[380px]'>
                <div className='flex justify-end'>
                    <span className='text-white bg-linear-to-r from-blue-600 to-purple-500 p-3 rounded-full'>01</span>
                </div>
                <div className='text-center p-5'>
                    <img src={user} alt=""  className='mx-auto'/>
                    <h1 className='text-2xl font-bold'>Create Account</h1>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>

            <div className='border border-gray-400 rounded-2xl p-10 mx-auto min-h-[380px]'>
                <div className='flex justify-end'>
                    <span className='text-white bg-linear-to-r from-blue-600 to-purple-500 p-3 rounded-full'>02</span>
                </div>
                <div className='text-center p-5'>
                    <img src={packages} alt=""  className='mx-auto'/>
                    <h1 className='text-2xl font-bold'>Choose Products</h1>
                    <p>Browse our catalog and select the tools that fit your needs.</p>
                </div>
            </div>
            <div className='border border-gray-400 rounded-2xl p-10 mx-auto min-h-[380px]'>
                <div className='flex justify-end'>
                    <span className='text-white bg-linear-to-r from-blue-600 to-purple-500 p-3 rounded-full'>03</span>
                </div>
                <div className='text-center p-5'>
                    <img src={rocket} alt=""  className='mx-auto'/>
                    {/* <img src={rocket} alt=""  className='mx-auto'/> */}
                    <h1 className='text-2xl font-bold'>Start Creating</h1>
                    <p>Download and start using your premium tools immediately.</p>
                </div>
            </div>

        </div>
     
    </div>
  )
}
