import React from 'react'
import HeroImage from '../../assets/landing/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='mt-10 flex justify-center lg:justify-between items-center lg:flex-nowrap flex-wrap'>


      <div className='lg:max-w-[50%] max-w-[100%]'>
        <h1 className='text-[1.6rem] lg:text-[2rem] font-bold w-fit text-[#0F172A] sm:block hidden'>Engaging Customers Anytime <br /> with AI-Powered Calling</h1>
        <h1 className='text-[1.6rem] lg:text-[2rem] font-bold w-fit text-[#0F172A] sm:hidden block'>Engaging Customers Anytime with AI-Powered Calling</h1>
        <p className='mt-4 text-sm w-[100%] text-[#0F172A] leading-7'>Transform the way you connect with customers using our advanced AI call automation platform. With powerful AI technology, effortlessly engage clients, handle inquiries, qualify leads, and follow up—all automatically. Our intelligent AI interacts in real-time, providing personalized information, scheduling appointments, and collecting feedback. Let your team focus on what matters while our AI drives seamless, efficient communication.</p>
        <Link to={"/register"}><button className='bg-[#EA580C] rounded-md w-[8rem] h-[2.5rem] text-[#fff] text-sm mt-4'>Get Started</button></Link>
      </div>


      <div className='lg:mt-0 mt-10 flex justify-center items-center lg:justify-end lg:items-end'>
        <img src={HeroImage} loading="lazy" alt="" className='lg:min-h-[30rem] lg:min-w-[30rem] h-[20rem]' />
      </div>



    </div>
  )
}

export default Hero
