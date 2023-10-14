"use client"
import React from 'react'
import Image from 'next/image'
import puerim from '../public/puerim.png'
import img1 from '../public/images/ideation.jpg'
import img2 from '../public/images/bs.jpg'
import img3 from '../public/images/design.jpg'
import img4 from '../public/images/development.jpg'
import img5 from '../public/images/iteration.jpg'
import light from '../public/images/light.svg'

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
    <div className='container1 bg-black text-center grid' id='container1' >

    <div className='navbar flex justify-around' data-aos='fade-in'>
      <Image  className=' logo' src={puerim} alt='error'/>


      
      <div className="nav-list flex text-white" id='nav-list'>
        <a href="#container4" onClick={()=>{
        ham();
      }}>Our Services</a>
        <a href="#workbox" onClick={()=>{
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

    <div className='main text-center' data-aos='zoom-in'>
    <div className="main-text " >We <span>Help</span> <br/> You Stand Out</div>
    
    <a className='btn2'href="#container2"><button>Discover Us</button></a>
    </div>
    </div>
    {/* <marquee class="marq flex" bgcolor = "yellow" direction = "right" loop="" Scrollamount='20' >
            <div className='flex'>
            <div className="red">

            </div>
            <div className="red">

            </div>
            <div className="red">
            </div>
            <div className="red">
            </div>
            <div className="red">
            </div>
                      

            </div>
    </marquee> */}
    {/* container 2 */}
    <div className="container2 " id='container2'>

      <div className="carousel">
        <div className="cards text" data-aos='fade-in'>
          <div className='text1'>Our ability to adapt</div>
          <div className='text2'>We adapt to your needs and constraints. We are flexible and responsive.</div>
        </div>
        <div className="cards" data-aos='fade-in'>
        <div className='text1'>Tailor-made support</div>
          <div className='text2'>We support you in carrying out your peojects. We advise and guide you.</div>
        </div>
        <div className="cards" data-aos='fade-in'>
        <div className='text1'>Our strenght of proposal</div>
          <div className='text2'>We offer you innovative and creative solution. We bring you are expertise</div>
        </div>

        
      </div>

      
    </div>
      <div className="container4" id='container4'>
      <div className="carousel2">
        <div className="cards2" id="box-1" data-aos='fade-in'>
          <div className="text-head">Services</div>
          <div className="text-body">A complete tech product team</div>
          <div className="text-foot">We are a team of developers, designers and project managers. <br /> The goal is to access in excel in each area  and create high-quality digital products. </div>

        </div>
        <div className="cards2" data-aos='fade-in'>
        <div className="head-box">Design______001</div>
          <div className="body-box">We take into account user interaction with the interface. We pay particular attention to hypothesis testing and prototyping, only the most successful solutions are retained for visualization.</div>
          <div className="flex">

          <div className="foot-box" >Figma</div>
          <div className="foot-box" >Adobe illustrator</div>
          <div className="foot-box" >Adobe Photoshop </div>


          </div>

        </div>
        <div className="cards2" data-aos='fade-in'>
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
      <div className="container5">
        <div className="team-box" data-aos='fade-up'>
          <div className="team-txt">We are a creative <span>🎨</span> and passionate <span></span> team based in Bangalore <span>🏡</span>.</div>
          <button><Link href="#">Discover our team</Link></button>
        </div>

        <div id='workbox' className="work-box">
          <div className="work-text-box">

          <div className="work-text" data-aos="">
          We offer you ideal support from idea to realization.
          </div>
          </div>

          <div id='howbox1' className="how-box" data-aos=''>
            <div className="flexdiv">
              <Image className='how-img ml-5' src={img1} alt='error'/>
              <div className="how-text">

                <Image className='light' src={light}/>
                <p className='p1'>Ideation</p>
                <p>We start by getting to know our clients, their goals and their target audience.</p>
              </div>
            </div>
          </div>
          <div id='howbox2' className="how-box" data-aos=''>
          
          <div className="flexdiv">
          
              <Image className='how-img ml-5' src={img2} alt='error'/>
              <div className="how-text">
          <Image className='light' src={light}/>

                <p className='p1'>Brainstorming</p>
                <p>We develop a strategy that defines the design approach, user experience and key features of the projecs.</p>
              </div>
            </div>
            
          </div>
          <div id='howbox3' className="how-box"data-aos=''>
          <div className="flexdiv">
              <Image className='how-img ml-5' src={img3} alt='error'/>
              <div className="how-text text-white">
              <Image className='light' src={light}/>

                <p className='p1 txtw'>Design</p>
                <p>We work closely with our clients to obtain feedback and improve the design until it meets their needs and vision.</p>
              </div>
            </div>
          </div>
          
          <div id='howbox4' className="how-box" data-aos=''>
          <div className="flexdiv">
          
              <Image className='how-img ml-5' src={img4} alt='error'/>
              <div className="how-text text-white">
          <Image className='light' src={light}/>

                <p className='p1 txtw'>Development</p>
                <p>Once the design has ben validated,we frame the task in order to set up a development roadmap.</p>
              </div>
            </div>
          </div>
          <div id='howbox5' className="how-box" data-aos=''>
          <div className="flexdiv">
              <Image className='how-img ml-5' src={img5} alt='error'/>
              <div className="how-text" >
              <Image className='light' src={light}/>

                <p className='p1'>Iteration</p>
                <p>We text the product with end users and you, then make necessary changes to improve the user.</p>
              </div>
            </div>
          </div>
          

          
          
          
        </div>


      </div>
    </>
  )
}

export default page