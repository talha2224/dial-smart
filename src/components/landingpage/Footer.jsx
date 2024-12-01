import React from 'react'
import { FaFacebook, FaLinkedinIn, FaSkype, FaTwitter } from 'react-icons/fa'
import Logo from '../../assets/leadbot.png'

const Footer = () => {
    return (
        <div className='bg-[#F4F4F4] mt-[4rem] p-10'>

            <div className='flex justify-between items-start flex-wrap'>

                <div className='mb-4'>
                    <div className='flex items-center gap-x-2'>
                        <img src={Logo} alt="leadbot-logo" />
                        <h2 className='text-[1.3rem]  font-semibold'>Dial Smart</h2>
                    </div>
                    <p className='mt-2 text-sm'>Let’s Drive Growth and Efficiency for Your Business</p>
                    <p className='mt-2 text-sm'>Call us: + (92) 3422793234</p>
                    <p className='mt-2 text-sm'>Email: leadbot@gmail.com</p>
                </div>

                <div className='mb-4'>
                    <h1 className='text-[1.3rem] font-semibold'>SERVICES</h1>
                    <p className='mt-2 text-sm'>AI Calling</p>
                    <p className='mt-2 text-sm'>Cold Calling</p>
                    <p className='mt-2 text-sm'>Hubspot Integration</p>
                    <p className='mt-2 text-sm'>Cold Emailing</p>
                    <p className='mt-2 text-sm'>Lead Management</p>
                </div>


                <div className='mb-4'>
                    <h1 className='text-[1.3rem] font-semibold'>COMPANY</h1>
                    <p className='mt-2 text-sm'>About</p>
                    <p className='mt-2 text-sm'>Blog</p>
                    <p className='mt-2 text-sm'>Login</p>
                    <p className='mt-2 text-sm'>Sign up</p>
                </div>

                <div className='mb-4'>
                    <h1 className='text-[1.3rem] font-semibold'>SOCIAL</h1>

                    <div className='flex items-center my-4'>
                        <input type="email" name="" id="" placeholder='Subscribe to NewsLetter' className='h-[2.3rem] outline-none border border-[lightgray] px-3 text-sm bg-transparent' />
                        <button className='h-[2.3rem] outline-none border-none text-white bg-black px-3 text-sm'>Submit</button>
                    </div>

                    <div className='flex items-center gap-x-4 mt-2'>
                        <FaFacebook className='text-[#EA580C] cursor-pointer' />
                        <FaTwitter className='text-[#EA580C] cursor-pointer' />
                        <FaLinkedinIn className='text-[#EA580C] cursor-pointer' />
                        <FaSkype className='text-[#EA580C] cursor-pointer' />
                    </div>


                </div>

            </div>

            <div></div>

        </div>
    )
}

export default Footer