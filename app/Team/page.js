"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo1 from './public/puerim.png'
import p1 from './public/p1.png'
import p2 from './public/p2.png'
import linkedin from './public/linkedin.png'


const team = () => {
  return (
    <>
    <div className="team-container " >
    <div className="navbar2 flex justify-between">

    <Image  className='logo1' src={logo1} alt='error'/>
    <Link href=".." className='btn3'><button>Home</button></Link>
    </div>

    <div className="team-page-box">
        <div className="team-page-head1" data-aos='zoom-in'>
            Meet Our Team!
        </div>
        <div className="team-page-body1 " data-aos='zoom-in'>
            Discover our team members and their roles within our agency.
        </div>
        <div className="team-mem-box">
            <div className="mem-box " data-aos='flip-up'>
            <Image src={p1} className='team-mem-img color-cyan'/>

            <div className="about-mem flex justify-between ">
                <div className="mem-role">CMO / Designate</div>
                <a href="https://www.linkedin.com/in/tanishqpratap/"><Image src={linkedin} className='linkedin-logo '/></a>
            </div>
            <div className="mem-name">Tanishq</div>
            <div className="desc-mem">Tanishq, a seasoned designer, excels in interface design. With his innovative flair, he brings a unique touch to each project.</div>


            </div>


            <div className="mem-box " data-aos='flip-up'>
            <Image src={p2} className='team-mem-img color-pink'/>

            <div className="about-mem flex justify-between">
                <div className="mem-role">CTO / Frontend Dev</div>
                <a href="https://www.linkedin.com/in/jainharsh0907/"><Image src={linkedin} className='linkedin-logo'/></a>
            </div>

            <div className="mem-name">Harsh</div>
            <div className="desc-mem">Harsh, in front-end-training, shines with his enthusiasm and his growing mastery of Javascript, with a keen eye for details.  </div>


            </div>
        </div>
        
    </div>

    </div>
    
    </>
  )
}

export default team