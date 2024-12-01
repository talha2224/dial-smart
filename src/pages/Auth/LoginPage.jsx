import React, { useState } from 'react'
import Logo from '../../assets/leadbot.png'
import LoginBg from '../../assets/auth/sign-in.png'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

  let inputStyle = "px-3 min-w-[22rem] max-w-[22rem] h-[3rem] border border-[#DCDADB] bg-transparent text-white outline-none block rounded-md"
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const nav = useNavigate()

  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    nav("/dashboard/home")
  }


  return (

    <div className='w-screen h-screen flex justify-around items-center md:flex-row flex-col'>

      {/* LOGO  */}
      <Link to={"/"} className='flex items-center gap-x-5 md:fixed top-2 left-3 w-[100%] px-3'>
        <img src={Logo} className='' />
        <p className='text-lg'>Dial Smart</p>
      </Link>


      {/* IMAGE  */}
      <div className='sm:block hidden'>
        <img src={LoginBg} alt="" className='' />
      </div>

      {/* RIGHT FORM  */}
      <div className='my-5 mx-10'>

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