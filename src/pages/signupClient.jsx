import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignUpClient = () => {
  return (
    <div className='flex justify-center p-10'>
      <div className='flex shadow-amber-400 shadow-lg rounded-bl-[100px] bg-white max-w-2xl'>
        <div className='p-5 w-1/2'>
          <Image
          src={'/images/signup.jpeg'}
          width={350}
          height={50}
          className='rounded-lg mb-4'
          alt='Signup illustration'
          />
          <p className='w-[360px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae maxime rerum et deleniti atque quae, odio natus modi commodi!</p>
        </div>
        <div className='p-10 py-5 bg-amber-400 w-1/2 rounded-r-lg'>
        <h1 className='flex justify-center p-2 mb-4 bg-white shadow-lg rounded-3xl text-lg font-bold text-gray-900'>Welcome to SERVConet</h1>
          <form action="" className='flex flex-col space-y-3 '>
            <input type="text" placeholder='Fullname' className='bg-white px-4 p-1 focus:outline-amber-400 mb-3 rounded' />
            <input type="email" placeholder='Email Address'className='bg-white px-4 p-1 focus:outline-amber-400 mb-3 rounded'/>
            <input type="tel" placeholder='Telephone' className='bg-white px-4 p-1 focus:outline-amber-400 mb-3 rounded'/>
            <input type="text" placeholder='Address' className='bg-white px-4 p-1 focus:outline-amber-400 mb-3 rounded'/>
            <input type="password" placeholder='Password' className='bg-white px-4 p-1 focus:outline-amber-400 mb-3 rounded'/>
            <input type="file" accept='image/*' className='bg-white py-2 px-4 rounded'/>
           <button type='submit' className='text-xl text-center bg-white py-2 hover:bg-amber-200 rounded text-gray-800 font-semibold'>Register</button>
          </form>

          <div className='flex justify-center mt-4'>
          <p className='text-sm text-white'>Already have an Account? <br /> <Link href={'/signin'} className='flex justify-center font-semibold text-black text-lg hover:underline'>SignIn</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpClient
