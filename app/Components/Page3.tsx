import React from 'react'
import { uspa } from '../utils/data'

const Page3 = () => {
    return (
        <div className='w-full h-screen flex' >
            <div className='w-1/2 flex flex-col justify-center items-start pl-16 gap-y-5' >
                <h1 className='text-6xl text-blue-900 font-semibold'>Clinic With Innovation</h1>
                <p className='text-[#002348] text-lg'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                <button className='text-center px-6 py-2 bg-blue-500 rounded-full text-white mt-10 text-lg' >Learn More</button>
            </div>
            <div className='w-1/2 flex justify-center items-center' >
                <div className="grid grid-cols-2 gap-10 w-[85%]">

                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center max-h-[30vh]">
                        <img src={uspa[0].img} className="w-[75%] mb-4 -mt-20 " />
                        <p className="font-semibold text-gray-700">
                            {uspa[0].title}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center mt-54">
                        <img src={uspa[1].img} className="w-[75%] mb-4 -mt-20 " />
                        <p className="font-semibold text-gray-700">
                            {uspa[1].title}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center">
                        <img src={uspa[2].img} className="w-[75%] -mt-22 mb-4 " />
                        <p className="font-semibold text-gray-700">
                            {uspa[2].title}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page3