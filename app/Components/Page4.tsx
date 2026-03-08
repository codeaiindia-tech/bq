import React from 'react'
import { doctors } from '../utils/data'

const Page4 = () => {
  return (
    <div className='w-full py-16 px-6 lg:px-16'>

      <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-900'>
          We Have The Best Specialist
        </h1>

        <p className='text-[#002348] mt-4 text-sm sm:text-base'>
          We have a wide experience in experience design and strategy,
          with locally-rooted knowledge.
        </p>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 max-w-7xl mx-auto'>

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition'
          >
            <div className='h-60 bg-blue-200'>
            </div>

            <div className='p-5 text-center'>
              <h1 className='font-semibold text-lg text-blue-900'>
                {doctor.name}
              </h1>

              <h2 className='text-gray-500 text-sm mt-1'>
                {doctor.desc}
              </h2>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Page4