import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Me from '../assets/me.jpg'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <div className='flex flex-row justify-center'>
            <div>
            <p className='text-[#FF5757]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>John Rugh</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I love taking ideas from concept to reality.</p>
            <div>
                <Link to="work" smooth={true} duration={500}>
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF5757] hover:border-[#FF5757]'>View Work
                      <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3' />
                      </span>
                  </button>
                </Link>
            </div>
            </div>
            <div className='ml-[5%] w-[100%] h-[100%] md:h-[75%]'>
            <img className='md:h-[100%]' src={Me} alt="John Rugh" />
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Home