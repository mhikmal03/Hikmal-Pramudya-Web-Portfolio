import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Skills</p>
          <p className='py-4'>// There are the technologies I've worked with</p>
        </div>

                                {/* grid container */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'> 
          <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300 hover:bg-pink-600 p-5 sm:mr-4'>
            <img className='w-[60px] mx-auto' src={HTML} alt="html icon" />
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300 hover:bg-pink-600 p-5 sm:mr-4'>
            <img className='w-[60px] mx-auto' src={CSS} alt="html icon" />
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300 hover:bg-pink-600 p-5 sm:mr-4'>
            <img className='w-[60px] mx-auto' src={JavaScript} alt="html icon" />
            <p>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300 hover:bg-pink-600 p-5 sm:mr-4'>
            <img className='w-[60px] mx-auto' src={ReactImg} alt="html icon" />
            <p>React JS</p>
          </div>


        </div>
      </div>
         
    </div>
  )
}

export default Skills