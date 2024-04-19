import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-10 py-5'>
        <div className='flex items-center'>
            <Image src="/mozer-logo.png" width={50} height={50} alt=''/>
            <h1 className='ml-4 font-bold text-2xl'>MOOZER</h1>
        </div>
    </div>
  )
}

export default Navbar