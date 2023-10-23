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
import brain from '../public/images/brain.svg'
import design from '../public/images/design.svg'
import develop from '../public/images/develop.svg'
import iteration from '../public/images/iteration.svg'

import p1 from '../public/images/p1.png'
import p2 from '../public/images/p2.png'
import p3 from '../public/images/p3.png'



import Link from 'next/link'


const page = () => {

  

function ham(){
  
  let navbar = document.getElementById('nav-list');
  let hamburger = document.getElementById('hamburger');
  let btn = document.getElementById('btn1');

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
      <a href="#testimonial"onClick={()=>{
        ham();
      }}>Customer's opinions</a>
        <a href="#container4" onClick={()=>{
        ham();
      }}>Our Services</a>
        <a href="#workbox" onClick={()=>{
        ham();
      }}>How it works</a>
        <a href=""onClick={()=>{
        ham();
      }}>Our projects</a>
        
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
    
    <a className='btn2'href="#testimonial"><button>Discover Us</button></a>
    </div>
    </div>

    {/* testimonials */}
    <div id='testimonial' className="testimonial-main-box text-white ">
      <div className="testimonials-heading">Our Testimonials</div>
      <div className="testimonials-flex flex justify-around ">

      <div className="testimonials " data-aos="flip-left">
        <Image className='person' src={p1}/>
        <div>Shubh Karan Chaudhary</div>
        <p>The team at Puerim is really talented. They helped us in crafting an effective social media strategy. We are seeing about 3x growth in revenue.</p>
      </div>
      <div className="testimonials" data-aos="flip-left">
        <Image className='person' src={p2}/>
        <div>Gajendra Chowhan</div>
        <p>Due to Puerim's help in branding and social media strategy, We are seeing 2x growth in Customers.</p>
      </div>
      <div className="testimonials" data-aos="flip-left">
        <Image className='person' src={p3}/>
        <div>Subhadeep Das</div>
        <p>Puerim designed our brand Martially's brand identity and our App. Our investor was impressed by our product.</p>
      </div>
      </div>

    </div>
      
  
      
    
    
    

    
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
          <Link href="/Team"><button>Discover our team</button></Link>
        </div>

        <div id='workbox' className="work-box">
          <div className="work-text-box">

          <div className="work-text" data-aos="slide-up">
          We offer you ideal support from idea to realization.
          </div>
          </div>

          <div id='howbox1' className="how-box" data-aos='slide-left'>
            <div className="flexdiv">
              <Image className='how-img ml-5' src={img1} alt='error'/>
              <div className="how-text">

                <Image className='light' src={light}/>
                <p className='p1'>Ideation</p>
                <p>We start by getting to know our clients, their goals and their target audience.</p>
              </div>
            </div>
          </div>
          <div id='howbox2' className="how-box" data-aos='slide-right'>
          
          <div className="flexdiv">
          
              <Image className='how-img ml-5' src={img2} alt='error'/>
              <div className="how-text">
          <Image className='light' src={brain}/>

                <p className='p1'>Brainstorming</p>
                <p>We develop a strategy that defines the design approach, user experience and key features of the projecs.</p>
              </div>
            </div>
            
          </div>
          <div id='howbox3' className="how-box"data-aos='slide-left'>
          <div className="flexdiv">
              <Image className='how-img ml-5' src={img3} alt='error'/>
              <div className="how-text text-white">
              <Image className='light light-white' src={design}/>

                <p className='p1 txtw'>Design</p>
                <p>We work closely with our clients to obtain feedback and improve the design until it meets their needs and vision.</p>
              </div>
            </div>
          </div>
          
          <div id='howbox4' className="how-box" data-aos='slide-right'>
          <div className="flexdiv">
          
              <Image className='how-img ml-5' src={img4} alt='error'/>
              <div className="how-text text-white">
          <Image className='light light-white' src={develop}/>

                <p className='p1 txtw'>Development</p>
                <p>Once the design has been validated, we frame the task in order to set up a development roadmap.</p>
              </div>
            </div>
          </div>
          <div id='howbox5' className="how-box" data-aos='slide-left'>
          <div className="flexdiv">
              <Image className='how-img ml-5' src={img5} alt='error'/>
              <div className="how-text" >
              <Image className='light' src={iteration}/>

                <p className='p1'>Iteration</p>
                <p>We test the product with end users and you, then make necessary changes to improve the user.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="footer-page" data-aos='fade-in'>
        <div className="foot-logo-body">
        <a className='a-foot-logo' href=""><Image className='foot-logo' src={puerim}/></a>
        </div>
        <div className="tagline">
          Puerim, Your Growth Partner.
        </div>
        <div className="foot-nav flex justify-between text-white text-center">
          <div className="tags"><Link href=''>Privacy policy</Link></div>
          <div className="tags"><Link href=''>Terms</Link></div>
          <div className="tags"><a className='text-yellow-300' href = "mailto:puerim.work@gmail.com?subject = Feedback&body = Message">
          Email Us
          </a></div>

        </div>

        <div className="links-nav text-white">

        <div className="link-tags"> <a href="#container4">Our Services</a></div>
        <div className="link-tags"> <a href="">Our Projects</a></div>
        <div className="link-tags"><a href="#workbox">How it works</a></div>
        <div className="link-tags"><a href="">Customers's opinion</a></div>
        <div className="link-tags"><Link href='/Contact'>Contact Us</Link></div>


        </div>
      </div>
    </>
  )
}

export default page