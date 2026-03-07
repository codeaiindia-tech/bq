import React from 'react'
import Header from './Header'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaGoogle } from "react-icons/fa";

const Page6 = () => {
    return (
        <div className='w-full h-screen bg-white pt-5'>
            <div className='w-full h-[60%] flex justify-center items-center' >
                <div className='w-3/4 h-full bg-blue-500 rounded-xl flex flex-col items-center pt-8  ' >
                    <h1 className='text-center pt-8 text-5xl font-semibold text-white'>Subscribe to Newsletter</h1>
                    <p className='text-center text-gray-300 mt-2'>We have a wide experience in design and strategy.</p>

                    <div className='bg-white rounded-xl p-2 mt-14 w-1/2 flex'>
                        <input
                        className='px-4 py-2 bg-white w-full' 
                        type="text" 
                        placeholder='Enter your Email address' />
                        <button className='px-5 py-3 bg-blue-500 text-white rounded-full font-semibold'>Submit</button>
                    </div>

                </div>
            </div>
            <div className='w-full pt-5 ' >
                <Header contactButton={false} />
                <div className='w-full bg-blue-200 h-[23vh] p-14'>
                    <div className='flex gap-x-3'>
                        <span className='p-3 bg-white rounded-full flex justify-center items-center' >
                            <TiSocialFacebook size={20}  color='gray' />
                        </span>
                        <span className='p-3 bg-white rounded-full flex justify-center items-center' >
                            <FaGoogle size={20} color='gray' />
                        </span>
                        <span className='p-3 bg-white rounded-full flex justify-center items-center' >
                            <FaTwitter size={20} color='gray' />
                        </span>
                    </div>
                    <h1 className='mt-2 text-sm text-gray-500'> ©2023-011BQ  </h1>
                </div>
            </div>
        </div>
    )
}

export default Page6