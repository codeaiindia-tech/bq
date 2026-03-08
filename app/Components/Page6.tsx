import React from 'react'
import Header from './Header'
import { TiSocialFacebook } from "react-icons/ti"
import { FaTwitter, FaGoogle } from "react-icons/fa"

const Page6 = () => {
  return (
    <div className='w-full bg-white'>

      {/* Newsletter Section */}
      <div className='w-full px-6 lg:px-16 py-16 flex justify-center'>

        <div className='w-full max-w-4xl bg-blue-500 rounded-xl flex flex-col items-center text-center py-12 px-6'>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white'>
            Subscribe to Newsletter
          </h1>

          <p className='text-gray-200 mt-3 text-sm sm:text-base'>
            We have a wide experience in design and strategy.
          </p>

          {/* Input Section */}
          <div className='bg-white rounded-xl p-2 mt-10 w-full sm:w-3/4 flex flex-col sm:flex-row gap-2'>

            <input
              className='px-4 py-3 w-full outline-none'
              type="text"
              placeholder='Enter your Email address'
            />

            <button className='px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition'>
              Submit
            </button>

          </div>

        </div>

      </div>


      {/* Footer */}
      <div className='w-full bg-blue-100 pt-6'>

        <Header contactButton={false} menuBar={false} />

        <div className='flex flex-col items-center gap-4 py-10'>

          {/* Social Icons */}
          <div className='flex gap-4'>

            <span className='p-3 bg-white rounded-full flex justify-center items-center shadow'>
              <TiSocialFacebook size={20} color='gray' />
            </span>

            <span className='p-3 bg-white rounded-full flex justify-center items-center shadow'>
              <FaGoogle size={20} color='gray' />
            </span>

            <span className='p-3 bg-white rounded-full flex justify-center items-center shadow'>
              <FaTwitter size={20} color='gray' />
            </span>

          </div>

          <h1 className='text-sm text-gray-500 text-center'>
            ©2023-011BQ
          </h1>

        </div>

      </div>

    </div>
  )
}

export default Page6