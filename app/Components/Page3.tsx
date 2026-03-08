import React from 'react'
import { uspa } from '../utils/data'

const Page3 = () => {
  return (
    <div className='w-full py-16 px-6 lg:px-16'>

      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12'>

        {/* Left Content */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl text-blue-900 font-semibold leading-tight'>
            Clinic With Innovation
          </h1>

          <p className='text-[#002348] text-base sm:text-lg'>
            We provide the most full medical services, so every person could
            have the opportunity to receive qualitative medical help.
          </p>

          <div>
            <button className='px-6 py-3 bg-blue-500 rounded-full text-white text-base sm:text-lg hover:bg-blue-600 transition'>
              Learn More
            </button>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col items-center sm:gap-10'>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-y-14 gap-y-24 w-[85%]">

        
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center w-64 max-h-[30vh]">
              <img src={uspa[0].img} className="w-[75%] mb-4 -mt-16" />
              <p className="font-semibold text-gray-700">{uspa[0].title}</p>
            </div>

      
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center w-64 sm:mt-62">
              <img src={uspa[1].img} className="w-[75%] mb-4 -mt-16" />
              <p className="font-semibold text-gray-700">{uspa[1].title}</p>
            </div>

   
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center w-64 sm:-mt-10">
              <img src={uspa[2].img} className="w-[75%] mb-4 -mt-18" />
              <p className="font-semibold text-gray-700">{uspa[2].title}</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Page3