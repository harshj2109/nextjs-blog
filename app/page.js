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
    <div className='container1 bg-black text-center grid' id='container1' data-aos='fade-in'>

    <div className='navbar flex justify-around'>
      <Image  className=' logo' src={puerim} alt='error'/>


      
      <div className="nav-list flex text-white" id='nav-list'>
        <a href="" onClick={()=>{
        ham();
      }}>Our Services</a>
        <a href="" onClick={()=>{
        ham();
      }}>How it works</a>
        <a href=""onClick={()=>{
        ham();
      }}>Our projects</a>
        <a href=""onClick={()=>{
        ham();
      }}>Customer's opinions</a>
      <Link href="/Contact" className='text-white btn1' id='btn1'><button>Contact Us</button></Link>
      </div>
      <div onClick={()=>{
        ham();
      }} class="hamburger" id="hamburger">
                <span class="black bar"></span>
                <span  class="black bar"></span>
                <span class="red bar"></span>
      </div>
      
    </div>

    <div className='main text-center'>
    <div className="main-text ">We <span>Help</span> <br/> You Stand Out</div>
    
    <a className='btn2'href="#container2"><button>Discover Us</button></a>
    </div>
    </div>

    {/* container 2 */}
    <div className="container2 " id='container2'>

      <div className="carousel">
        <div className="cards text">
          <div className='text1'>Our ability to adapt</div>
          <div className='text2'>We adapt to your needs and constraints. We are flexible and responsive.</div>
        </div>
        <div className="cards">
        <div className='text1'>Tailor-made support</div>
          <div className='text2'>We support you in carrying out your peojects. We advise and guide you.</div>
        </div>
        <div className="cards">
        <div className='text1'>Our strenght of proposal</div>
          <div className='text2'>We offer you innovative and creative solution. We bring you are expertise</div>
        </div>

        
      </div>

      
    </div>
      <div className="container4">
      <div className="carousel2">
        <div className="cards2" id="box-1">
          <div className="text-head">Services</div>
          <div className="text-body">A complete tech product team</div>
          <div className="text-foot">We are a team of developers, designers and project managers. <br /> The goal is to access in excel in each area  and create high-quality digital products. </div>

        </div>
        <div className="cards2">
        <div className="head-box">Design______001</div>
          <div className="body-box">We take into account user interaction with the interface. We pay particular attention to hypothesis testing and prototyping, only the most successful solutions are retained for visualization.</div>
          <div className="flex">

          <div className="foot-box" >Figma</div>
          <div className="foot-box" >Adobe illustrator</div>
          <div className="foot-box" >Adobe Photoshop </div>


          </div>

        </div>
        <div className="cards2">
        <div className="head-box">Frontend_____002</div>
          <div className="body-box">We develop web and mobile applications. We use the latest technologies and best practices to create digital products that are scalable and maintainable overtime.</div>
          <div className="flex ">

          <div className="foot-box" >Html</div>
          <div className="foot-box" >Css</div>
          <div className="foot-box" >Javascript</div>
          <div className="foot-box" >React Js</div>
          


          </div>
        </div>

        
      </div>
      </div>
    </>
  )
}

export default page
