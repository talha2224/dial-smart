import React from 'react'
import { FaFacebook, FaLinkedinIn, FaSkype, FaTwitter } from 'react-icons/fa'
import Logo from '../../assets/leadbot.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#F4F4F4] mt-[4rem] p-10'>

            <div className='flex justify-between items-start flex-wrap'>

                <div className='mb-4'>
                    <div className='flex items-center gap-x-2'>
                        <img src={Logo} alt="leadbot-logo" className='h-[2rem]' />
                        <h2 className='text-[1.3rem]  font-semibold'>Lead Dial</h2>
                    </div>
                    <p className='mt-2 text-sm'>Let’s Drive Growth and Efficiency for Your Business</p>
                    <p className='mt-2 text-sm'>Call us: + (92) 3422793234</p>
                    <p className='mt-2 text-sm'>Email: talhahaider074@gmail.com</p>
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
                    <p className='mt-2 text-sm cursor-pointer'>About</p>
                    <p className='mt-2 text-sm cursor-pointer'>Blog</p>
                    <p className='mt-2 text-sm cursor-pointer'>Login</p>
                    <p className='mt-2 text-sm cursor-pointer'>Sign up</p>
                    <Link to={"/privacy"}><p className='mt-2 text-sm cursor-pointer'>Privacy & Policy</p></Link>
                    <Link to={"/terms"}><p className='mt-2 text-sm cursor-pointer'>Terms & Condition</p></Link>

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