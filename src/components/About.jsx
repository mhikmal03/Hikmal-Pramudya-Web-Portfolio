import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 rounded-sm border-pink-600'>About Me</p>
                </div>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold pb-5'>
                    <p>Hi. I'm Hikmal, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos debitis veritatis molestias aliquam beatae quidem minus, exercitationem optio tempore? Tempore ea impedit expedita, iure et iste. Magnam blanditiis, cum, porro reiciendis voluptas dolorem, optio esse totam doloribus assumenda voluptatum temporibus?
                    </p>
                </div>
                </div>
            
        </div>
    </div>
  )
}

export default About