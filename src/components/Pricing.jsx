import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

export default function Pricing() {
    return (
        <div className='my-10 space-y-3 p-15'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold'>Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* cards */} 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {/* card */}
                <div className='bg-gray-100 border border-gray-200 rounded-2xl p-10 space-y-5 min-h-[380px]  '>
                    <div>
                        <h1 className='text-3xl font-bold'>Starter</h1>
                        <p>Perfect for getting started</p>
                    </div>
                    <div>
                        <p><span className='text-3xl font-bold'>$0</span> / Month</p>
                    </div>
                    <div className='min-h-[200px]'>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Access to 10 free tools</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Basic templates</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Community support</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span>1 project per month</p>
                    </div>
                    <button className='btn w-full bg-linear-to-r from-blue-600 to bg-purple-400 rounded-2xl text-white'> Get Started Free</button>
                </div>

                <div className='bg-linear-to-r from-blue-600 to-purple-500 text-white border border-gray-200 rounded-2xl p-10 space-y-5 min-h-[380px] relative'>
                    <span className='bg-amber-100 p-2 text-amber-600 rounded-2xl absolute -top-[20px] right-55'> Most Popular</span>
                    <div>
                        <h1 className='text-3xl font-bold'>Pro</h1>
                        <p>Best for professionals</p>
                    </div>
                    <div>
                        <p><span className='text-3xl font-bold'>$29</span> / Month</p>
                    </div>
                    <div  className='min-h-[200px]'>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Access to all premium tools</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Unlimited templates</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Priority support</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span>Unlimited projects</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span>Cloud sync</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span>Advanced analytics</p>
                    </div>
                    <button className='btn w-full bg-white rounded-2xl'> <span className='bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>Start Pro Trial </span></button>
                </div>
 
                <div className='bg-gray-100 border border-gray-200 rounded-2xl  p-10 space-y-5 min-h-[380px] '>
                    <div>
                        <h1 className='text-3xl font-bold'>Enterprise</h1>
                        <p>For teams and businesses</p>
                    </div>
                    <div>
                        <p><span className='text-3xl font-bold'>$99</span> / Month</p>
                    </div>
                    <div  className='min-h-[200px]'>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Everything in Pro</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Team collaboration</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Custom integrations</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Dedicated support</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> SLA guarantee</p>
                        <p className='flex items-center'><span className='text-green-400'><RiVerifiedBadgeFill /></span> Custom branding</p>
                    </div>
                    <button className='btn w-full bg-linear-to-r from-blue-600 to bg-purple-400 rounded-2xl text-white'> Contact Sales</button>
                </div>

            </div>
         
        </div>
    )
}
