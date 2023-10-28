"use client"

import './globals.css'
import './contact.css'
import './media.css'
import './team.css'
import './team-media.css'

import { Anton, Lato } from 'next/font/google'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NextTopLoader from 'nextjs-toploader'

const lato = Lato({ 
  subsets: ['latin'],weight:'400'
})

// const Anton = Anton({ 
//   subsets: ['latin'],weight:'400'
// })


export default function RootLayout({ children }) {
  useEffect(()=>{
    AOS.init({
      offset: 120,
      delay:100
    });
    },[])
  
  return (
    
    <html lang="en">
      <body className={lato.className}>
      <NextTopLoader />
        {children}
        </body>
    </html>
  )
}
