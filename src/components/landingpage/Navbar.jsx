import React, { useState } from 'react'
import Logo from '../../assets/leadbot.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    return (

        <div className=' flex justify-between items-center py-4 relative'>


            <div className='flex items-center gap-x-2'>
                <img src={Logo} alt="leadbot-logo" className='h-[2rem]' />
                <h2 className='text-xl font-semibold'>Lead Dial</h2>
            </div>


            <div className='md:flex items-center gap-x-4 hidden'>
                <a href="/"><p className='text-[#0F172A] cursor-pointer'>Product</p></a>
                <a href="#solution"><p className='text-[#0F172A] cursor-pointer'>Solution</p></a>
                <a href="#pricing"><p className='text-[#0F172A] cursor-pointer'>Pricing</p></a>
                <a href="#solution"><p className='text-[#0F172A] cursor-pointer'>Resources</p></a>
            </div>


            <div className='md:flex items-center gap-x-6 hidden'>
                <Link to={"/login"} className='text-[#0F172A] cursor-pointer'>Login</Link>
                <Link to={"/register"}>
                    <button className='text-[#0F172A] border-2 border-[#0F172A] w-[8rem] h-[2.5rem] rounded-md'>Singup Now</button>
                </Link>
            </div>

            {/* RESPONSIVE  */}

            <div className='md:hidden block'>
                <GiHamburgerMenu onClick={() => { setShowNav(!showNav) }} className=' cursor-pointer text-xl text-[#EA580C]' />
            </div>


            {
                showNav && (
                    <div className='absolute bg-slate-50 w-[100%] top-[3.5rem] left-0 right-0 py-3 px-3'>
                        <div className='flex items-end justify-end w-[100%]'>
                            <ImCross onClick={() => { setShowNav(!showNav) }} className='text-sm cursor-pointer ' />
                        </div>

                        <p className='text-[#0F172A] cursor-pointer text-sm mb-1'>Product</p>
                        <p className='text-[#0F172A] cursor-pointer text-sm mb-1'>Solution</p>
                        <p className='text-[#0F172A] cursor-pointer text-sm mb-1'>Pricing</p>
                        <p className='text-[#0F172A] cursor-pointer text-sm mb-1'>Resources</p>
                        <Link to={"/login"} className='text-[#0F172A] cursor-pointer text-sm mb-1'>Login</Link>
                        <Link to={"/register"} className='text-[#0F172A] cursor-pointer text-sm mb-1'>Signup</Link>

                    </div>
                )
            }






        </div>


    )
}

export default Navbar