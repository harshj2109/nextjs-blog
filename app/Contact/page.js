"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import logo from './public/puerim.png'
import Link from 'next/link'
import insta from './public/insta.png'
import x from './public/x.png'
import youtube from './public/youtube.png'


const contact = () => {
  return (
    <>
    <div className="contact-container bg-black">
    <div className="navbar2 flex justify-between">

    <Image  className=' logo1' src={logo} alt='error'/>
    <Link href=".." className='btn3'><button>Home</button></Link>
    </div>
    <div className="contact-text1 ">
    <div className="contact-head1">
      Hey User ! Let's Discuss Your Project.
    </div>
    <div className="contact-head1-body">
      A project to share with us? We look forward to meeting you. Tell us your needs & desire! You can contact with us at Puerim.work@gmail.com.
    </div>

    <div className="contact-places">
      Our Handles - 
      
      <div className="contact-flex flex ml-4">

      </div>
      <a href="https://instagram.com/_puerim?igshid=OGQ5ZDc2ODk2ZA=="><Image className='contact-logo logo-1' src={insta}/></a>
      <a href="https://twitter.com/_Puerim/status/1707102824797253761?t=cB4G97RdViqHtz_xBou4aQ&s=08"><Image className='contact-logo logo-2' src={x}/></a>
      <a href="https://www.youtube.com/channel/UCZe8IP5asimvGzCr12CPIFg"><Image className='contact-logo logo-3' src={youtube}/></a>
  

    </div>
    </div>


      
    </div>

    
    </>
  )
}

export default contact