import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import hikmal from '../assets/Group 1.png'
import {Link} from 'react-scroll'
import aw from './Home.css'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] h-screen w-full flex'>
      {/* container */}
      <div className='sm:pt-0 pt-6 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full 2xl:mr-[33%]'>
        <p className='text-pink-600 font-bold'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Hikmal Pramudya</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developers<span className='text-pink-600'>.</span></h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Front end developer specializign in building Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptates, incidunt tempore! Eius deleniti quidem aspernatur atque magnam animi corrupti. Excepturi.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200'><li><Link to="work" smooth={true} duration={500}>View Work</Link></li> 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
          </div>
      </div>

      <div className='hidden 2xl:block 2xl:absolute 2xl:right-[15%] 2xl:bottom-[30%]'>
        <img src={hikmal} alt="" style={{width: '350px'}} />
      </div>



    </div>
  )
}

export default Home