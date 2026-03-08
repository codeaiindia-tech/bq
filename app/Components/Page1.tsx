import React from 'react'
import Header from './Header'

const Page1 = () => {
  return (
    <div className='hero w-full min-h-screen'>
      <Header contactButton={true} menuBar={ true } />

      <div className='w-full flex flex-col lg:flex-row-reverse items-center justify-center px-6 lg:px-16 py-10 gap-10 lg:gap-0'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left'>

          <div className='flex flex-col gap-6 max-w-xl'>
            <h2 className='text-lg sm:text-xl font-bold text-black'>
              Welcome to MediCare+ Clinic
            </h2>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight'>
              Best Specialists
            </h1>

            <p className='text-gray-700 text-base sm:text-lg'>
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <button className='px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition'>
              Make an Appointment
            </button>

            <button className='px-8 py-3 bg-white shadow-md border border-gray-200 rounded-full font-semibold text-blue-500 hover:bg-gray-50 transition'>
              Departments
            </button>
          </div>

        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <div className='w-full max-w-md h-[300px] sm:h-[400px] lg:h-[500px] bg-cyan-100 rounded-lg'>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page1