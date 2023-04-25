import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FF5757]'>About</p>
                </div>
                <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm John, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm a web developer with a background in small business operations including product development, managerial skills and customer service. Earned a certificate from the University of Texas web development program. Entrepreneur who created, developed and managed new products for Rugh Design. Excited to find ways to utilize a self starter attitude in a new industry.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About