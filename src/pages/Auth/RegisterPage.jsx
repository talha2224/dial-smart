import React, { useState } from 'react'
import Logo from '../../assets/leadbot.png'
import RegisterBg from '../../assets/auth/illustration.png'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  let inputStyle = "px-3 min-w-[22rem] max-w-[22rem] h-[3rem] border border-[#DCDADB] bg-transparent text-white outline-none block rounded-md"
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  const nav = useNavigate()

  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
  }

  return (
    <div className='w-screen h-screen flex justify-between items-center md:flex-row flex-col'>

      {/* LOGO  */}
      <Link to={"/"} className='flex items-center gap-x-5 md:fixed top-2 left-3 w-[100%] px-3'>
        <img src={Logo} className='' />
        <p className='text-lg'>Dial Smart</p>
      </Link>


      {/* IMAGE  */}
      <div className='hidden  bg-[#F8F5FF] h-[100vh] sm:flex justify-center items-center'>
        <img src={RegisterBg} alt="" className='h-[30rem] bg-contain' />
      </div>

      {/* RIGHT FORM  */}
      <div className='my-5 mx-10 flex-1 flex justify-center items-start flex-col'>

        <p className='text-4xl font-semibold'>Register</p>
        <p className='mt-2 text-sm'> <span className='text-[#EA580C] mr-1'>Let's create! </span>and account to use Dial Smart</p>
        {/* FORM  */}
        <form action="" onSubmit={handleSubmit}>


          <p className='mt-6 mb-3'>Username</p>
          <input onChange={(e) => onChangeInput(e)} type="text" name="name" placeholder='mark henry' required={true} className={inputStyle} />

          <p className='mt-6 mb-3'>Email Address</p>
          <input onChange={(e) => onChangeInput(e)} type="email" name="email" placeholder='user@mail.com' required={true} className={inputStyle} />

          <p className='mt-6 mb-3'>Password</p>
          <input onChange={(e) => onChangeInput(e)} type="password" name="password" placeholder='*******' required={true} className={inputStyle} />

          <input onClick={handleSubmit} type="submit" value="Sign Up" className='bg-[#EA580C] w-[22rem] h-[3rem] mt-2 cursor-pointer hover:bg-[#EA580C] ease-in rounded-md text-white' />
          <p className='w-[22rem] text-center mt-2 text-sm cursor-pointer md:pb-0 pb-3'>Already have an account? <Link to={"/login"} className='text-[#EA580C] font-semibold'>Signin</Link></p>

        </form>

      </div>



    </div>
  )
}

export default RegisterPage
