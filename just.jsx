import React from 'react'
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div className='text-white h-[100vh] flex items-center justify-center bg-blue-400'>
      <div className='bg-slate-800 border border-slate-600 rounded-md p-20 
      shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
        <h1 className='text-4xl bold text-center'>Sign up</h1>
        <form>
          <div className='relative my-4'>
              
              <input type="email" required 
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2
              border-gray-300 appearance-none dark:focus:border-white focus:outline-none focus:ring-0
              focus:text-white focus:border-white peer' placeholder=''/>
              <label htmlFor="email" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] 
              peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white 
              peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
          </div>
          <div className='relative my-4'>
              
              <input type="password" required
               className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2
               border-gray-300 appearance-none dark:focus:border-white focus:outline-none focus:ring-0
               focus:text-white focus:border-white peer' placeholder=''/>

              <label htmlFor="password" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] 
              peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white 
              peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
