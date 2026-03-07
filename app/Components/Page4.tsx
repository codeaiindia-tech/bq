import React from 'react'
import { doctors } from '../utils/data'

const Page4 = () => {
  return (
    <div className='w-full h-screen' >
        <div className='flex justify-center items-center flex-col my-18' >
            <h1 className='text-5xl font-semibold text-blue-900 my-5 '>We Have The Best Specialist</h1>
            <p className='w-[30%] text-center text-[#002348] '>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
        </div>
        <div className='w-full flex justify-evenly items-center mt-16' >
            { doctors.map( ( doctor ) => (
                <div key={doctor.id} className='w-[35vh] h-[50vh] bg-green-200 rounded-xl overflow-hidden shadow-xl' >
                    <div className='h-[75%] bg-blue-200 ' >
                    </div>
                    <div className='h-[25%] bg-white p-4' >
                        <h1 className='font-semibold'>{ doctor.name }</h1>
                        <h2 className='text-gray-500'>{ doctor.desc }</h2>
                    </div>
                </div>
            ) ) }

        </div>
    </div>
  )
}

export default Page4