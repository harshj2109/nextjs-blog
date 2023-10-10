"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import logo from './public/puerim.png'
import Link from 'next/link'

const contact = () => {
  return (
    <>
    <div className="container3 bg-black">
    <div className="navbar2 flex justify-between">

    <Image  className=' logo1' src={logo} alt='error'/>
    <Link href=".." className='btn3'><button>Home</button></Link>
    </div>

      
    </div>
    </>
  )
}

export default contact