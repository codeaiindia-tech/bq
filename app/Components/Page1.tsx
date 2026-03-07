import React from 'react'
import Header from './Header'

const Page1 = () => {
  return (
    <div className='w-full h-screen'>
      <Header contactButton={ true } />
      <div className='w-full flex h-[85vh]' >
        <div className='w-1/2 flex flex-col justify-center items-center gap-y-5'>
          <div className='flex flex-col gap-y-8 w-3/4' >
            <h2 className='text-2xl font-bold text-black' >Welcome to MediCare+ Clinic</h2>
            <h1 className='text-6xl font-bold text-blue-900' >Best Specialists</h1>
            <p className='text-gray-800 text-lg ' >We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
          </div>
          <span className='flex gap-x-5'>
            <button className='px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:cursor-pointer' >Make an Appointment</button>
            <button className='px-10 py-3 bg-white shadow-md border-gray-100 border-2 rounded-full font-semibold text-blue-500 hover:cursor-pointer' >Departments</button>
          </span>
        </div>
        <div className='w-1/2 flex justify-center items-center' >
          <div className='w-[60%] h-[85%] bg-cyan-100 rounded-lg' >

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1