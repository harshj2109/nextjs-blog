"use client"
import React from 'react'
import Image from 'next/image'
import puerim from '../public/puerim.png'
import Link from 'next/link'

const page = () => {

function ham(){
  const navbar = document.getElementById('nav-list');
const hamburger = document.getElementById('hamburger');
const btn = document.getElementById('btn1');

    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
    btn1.classList.toggle("active");

}
  return (
    <>
    {/* container 1 */}
    <div className='container1 bg-black text-center grid' id='container1'>

    <div className='navbar flex justify-around'>
      <Image  className=' logo' src={puerim} alt='error'/>


      
      <div className="nav-list flex text-white" id='nav-list'>
        <a href="">Our Services</a>
        <a href="">How it works</a>
        <a href="">Our projects</a>
        <a href="">Customer's opinions</a>
      </div>
      <div onClick={()=>{
        ham();
      }} class="hamburger" id="hamburger">
                <span class="black bar"></span>
                <span  class="black bar"></span>
                <span class="red bar"></span>
      </div>
      
      <Link href="/Contact" className='text-white btn1' id='btn1'><button>Contact Us</button></Link>
    </div>

    <div className='main text-center'>
    <div className="main-text ">We <span>Help</span> <br/> You Stand Out</div>
    
    <a className='btn2'href="#container2"><button>Discover Us</button></a>
    </div>
    </div>

    {/* container 2 */}
    <div className="container2 bg-yellow-400" id='container2'>

    </div>
    </>
  )
}

export default page