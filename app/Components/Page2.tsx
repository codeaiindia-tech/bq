import React from 'react'
import { services } from '../utils/data'

const Page2 = () => {
  return (
    <div className='w-full  py-24 px-6 lg:px-16'>

      {/* Heading */}
      <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
        <h1 className='text-blue-900 text-3xl sm:text-4xl lg:text-5xl font-semibold'>
          Our Services
        </h1>

        <p className='text-gray-700 mt-4 text-sm sm:text-lg'>
          We provide the most full medical services, so every person could
          have the opportunity to receive qualitative medical help.
        </p>
      </div>


      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 max-w-7xl mx-auto'>

        {services.map((service) => {
          const Icon = service.icons

          return (
            <div
              key={service.id}
              className='group bg-white border border-gray-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center gap-6 cursor-pointer hover:scale-105 transition hover:bg-blue-500'
            >

              <Icon
                className='text-[#007DF2] group-hover:text-white'
                size={60}
              />

              <div>
                <h1 className='font-bold text-blue-900 group-hover:text-white text-lg'>
                  {service.name}
                </h1>

                <p className='text-gray-400 text-sm group-hover:text-gray-100'>
                  Learn More
                </p>
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Page2