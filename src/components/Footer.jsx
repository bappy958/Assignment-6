import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaFacebook, FaTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div className='p-20 bg-[#101727] text-white '>
            <div className='grid grid-cols-1 gap-10 text-center xl:text-left md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-between max-w-[1500px] mx-auto my-20'>
                <div className=' max-w-[300px] space-y-3 mx-auto'>
                    <h1 className='text-3xl'>DigiTools</h1>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className='space-y-3 mx-auto'>
                    <h1 className='text-xl'>Products</h1>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>


                <div className='space-y-3 mx-auto'>
                    <h1 className='text-xl'>Company</h1>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>


                <div className='space-y-3 mx-auto'>
                    <h1 className='text-xl'>Resources</h1>
                    <ul>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='space-y-3 mx-auto  '>
                    <h1 className='text-3xl'> Social Links</h1>
                    <div className='flex gap-3 w-[80px] mx-auto xl:mx-0'>
                        <FaInstagramSquare />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>

            </div>

            <hr className='opacity-10 my-10' />

            <div className='flex justify-between gap-10 flex-col-reverse md:flex-row mt-10'>
                <div className='text-center'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex gap-10 text-center'>
                    <span>Privacy Policy</span>
                    <span>Terms and services</span>
                    <span>Cookies</span>
                </div>
            </div>

        </div>
    )
}
