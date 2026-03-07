import React from 'react'
import { services } from '../utils/data'
import Image from 'next/image'
import { RiToothLine } from "react-icons/ri";

const Page2 = () => {
    return (
        <div className='w-full h-screen pt-14' >
            <div className='flex flex-col items-center justify-center mt-10'>
                <h1 className='text-blue-900 text-center text-5xl font-semibold' >Our Services</h1>
                <p className='text-gray-800 text-center mt-5 w-[35%]'>
                    We provide the most full medical services, so every person could heave the opprtunity to receive qualitative medical help.
                </p>
            </div>
            <div className='flex p-5 mt-15 justify-evenly'>
                {services.map((service) => {
                    const Icon = service.icons
                    return (
                        <div key={service.id} className='group w-[30vh] h-[35vh] border-2 border-gray-100 bg-white shadow-xl flex flex-col justify-center items-center rounded-xl gap-y-8 hover: cursor-pointer hover:scale-105 transition-all hover:bg-blue-500' >
                            <Icon
                                className=' group-hover:text-white text-[#007DF2]'
                                size={70}
                            />
                            <span>
                                <h1 className='font-bold text-blue-900 group-hover:text-white text-lg'>{service.name}</h1>
                                <p className='text-center text-gray-400 text-sm group-hover:text-gray-100' >Learn More</p>
                            </span>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Page2