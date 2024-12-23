import React, { useState } from 'react'
import Logo from '../../assets/leadbot.png'
import LoginBg from '../../assets/auth/illustration.png'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import config from '../../config'
import { Helmet } from 'react-helmet'
let inputStyle = "px-3 min-w-[22rem] max-w-[22rem] h-[3rem] border border-[#DCDADB] bg-transparent outline-none block rounded-md"

const LoginPage = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const nav = useNavigate()

  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    let loader = toast.loading("Processing Request....")
    try {
      if (credentials.email.length === 0 || credentials.password.length === 0) {
        toast.error("All Fields Are Required")
        toast.dismiss(loader)
      }
      else {
        let res = await axios.post(`${config.baseUrl}/account/login`, credentials)
        if (res.status == 200) {
          toast.dismiss(loader)
          toast.success(res?.data?.msg)
          localStorage.setItem("roleId", res?.data?.data?.info?.roleId)
          localStorage.setItem("accountId", res?.data?.data?.info?.id)
          localStorage.setItem("token", res?.data?.data?.token)
          nav("/dashboard/home")
        }
      }
    }

    catch (error) {
      toast.error(error.response?.data?.msg)
      toast.dismiss(loader)
    }
  }


  return (

    <div className='w-screen flex justify-between items-center md:flex-row flex-col h-[100vh]'>
      <Helmet>
        <link rel="preload" href={LoginBg} as="image" />
        <title>Lead Dial - Login</title>
        <meta name="description" content="Access your Lead Dial account to manage AI-based solutions for sales, lead generation, and customer support. Secure login for personalized experience." />
      </Helmet>


      {/* LOGO  */}
      <Link to={"/"} className='flex items-center gap-x-5 md:fixed top-2 left-3 w-[100%] px-3'>
        <img src={Logo} alt="leadbot-logo" className='h-[2rem]' />
        <p className='text-lg'>Lead Dial</p>
      </Link>


      {/* IMAGE  */}
      <div className='hidden  bg-[#F8F5FF] h-[100vh] sm:flex justify-center items-center'>
        <img src={LoginBg} alt="" className='h-[30rem] bg-contain' loading='lazy' />
      </div>

      {/* RIGHT FORM  */}
      <div className='my-5 mx-10 flex-1 flex justify-center items-start flex-col '>

        <p className='text-4xl font-semibold'>Login</p>
        <p className='mt-2 text-sm'> <span className='text-[#EA580C] mr-1'>Welome back! </span>sign in with your email and password</p>
        {/* FORM  */}
        <form action="mx-10" onSubmit={handleSubmit}>

          <p className='mt-6 mb-3'>Email Address</p>
          <input onChange={(e) => onChangeInput(e)} type="email" name="email" placeholder='user@mail.com' required={true} className={inputStyle} />

          <p className='mt-6 mb-3'>Password</p>
          <input onChange={(e) => onChangeInput(e)} type="password" name="password" placeholder='*******' required={true} className={inputStyle} />

          <p className='w-[22rem] text-right mt-2 text-sm cursor-pointer'>Forget Password?</p>

          <input onClick={handleSubmit} type="submit" value="Log In" className='bg-[#EA580C] w-[22rem] h-[3rem] mt-2 cursor-pointer hover:bg-[#c7583a] ease-in text-white rounded-md' />
          <p className='w-[22rem] text-center mt-2 text-sm cursor-pointer md:pb-0 pb-3'>Don't have an account? <Link to={"/register"} className='text-[#ED5529] font-semibold'>Signup</Link></p>

        </form>

      </div>



    </div>
  )
}

export default LoginPage