import React from 'react'
import Data from '../data.json'

const featured = Data[0].featured
const other = Data[0].other

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF5757]'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4'>
                {/* grid item */}
                {featured.map((item) => (
                    <div key={item.id} style={{backgroundImage: `url(${item.thumbnail})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div className='text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                {item.name}
                            </span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href={item.demo} target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href={item.code} target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className='grid sm:grid-cols-4 md:grid-cols-6 gap-4'>
                {/* grid item */}
                {other.map((item) => (
                    <div key={item.id} style={{backgroundImage: `url(${item.thumbnail})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-small'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div className='text-center'>
                            <span className='font-bold text-white tracking-wider '>
                                {item.name}
                            </span>
                        </div>
                        <div className='text-center'>
                            <a href={item.demo} target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href={item.code} target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work