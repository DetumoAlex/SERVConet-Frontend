import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const signupVendor = () => {
  return (
    <div className='flex justify-center p-10'>
      <div className='flex shadow-amber-400 shadow-lg rounded-bl-[100]'>
        <div className='p-5'>
          <Image
          src={'/images/signup.jpeg'}
          width={350}
          height={50}
          className='rounded-lg mb-4'
          />
          <p className='w-[360]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae maxime rerum et deleniti atque quae, odio natus modi commodi!</p>
        </div>
        <div className='p-10 py-5 w-1/2 bg-amber-400'>
        <h1 className='flex justify-center p-2 mb-4 bg-white shadow-lg rounded-3xl text-lg font-bold'>Welcome to SERVConet</h1>
          <form action="" className='flex flex-col leading-10 '>
            <input type="text" placeholder='Fullname' className='bg-white w-full px-2 focus:outline-amber-400 mb-3 rounded' />
            <input type="text" placeholder='Company' className='bg-white w-full px-2 focus:outline-amber-400 mb-3 rounded '/>
            <input type="email" placeholder='Email Address' className='bg-white w-full px-2 focus:outline-amber-400 mb-3 rounded'/>
            <input type="tel" placeholder='Telephone' className='bg-white w-full px-2 focus:outline-amber-400 mb-3 rounded'/>
            <input type="text" placeholder='Address' className='bg-white w-full px-2 focus:outline-amber-400 mb-5 rounded'/>
            <input type="password" placeholder='Password' className='bg-white w-full px-2 focus:outline-amber-400 mb-5 rounded'/>
            <input type="text" placeholder='Services' className='bg-white w-full px-2 focus:outline-amber-400 mb-5 rounded'/>
            <input type="text" placeholder='Description' className='bg-white w-full px-2 focus:outline-amber-400 mb-5 rounded'/>
           <Link href={'/signin'} className=' text-xl text-center bg-white p-1 hover:bg-amber-200 rounded'>Register</Link>
           
          </form>
          <div className='flex justify-center space-x-5'>
          <p className='text-sm text-white'>Already have an Account? <br /> <Link href={'/signin'} className='flex justify-center font-semibold text-black text-lg'>SignIn</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signupVendor
