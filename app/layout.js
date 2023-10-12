"use client"

import './globals.css'
import './contact.css'
import './media.css'

import { Lato } from 'next/font/google'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const lato = Lato({ 
  subsets: ['latin'],weight:'400'
})


export default function RootLayout({ children }) {
  useEffect(()=>{
    AOS.init({
      offset: 120,
      delay:100
    });
    },[])
  
  return (
    
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
