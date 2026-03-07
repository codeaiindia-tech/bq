import React from 'react'

const Header = ( { contactButton } : { contactButton : boolean } ) => {
    return (
        <div
            className='w-full py-8 px-16 flex justify-between items-center'
        >
            <span className='text-blue-500 text-3xl font-bold' >
                Medi
                <span className='text-orange-400' >Care+</span>
            </span>
            <div>
                <ul className='flex items-center justify-center gap-x-8'>
                    <li className='text-blue-500' >Home</li>
                    <li className='text-blue-500' >About</li>
                    <li className='text-blue-500' >Services</li>
                    <li className='text-blue-500' >News</li>
                    { contactButton && <button className='py-2 px-10 bg-blue-500 text-white rounded-full flex justify-center items-center hover:cursor-pointer ' >Contact</button> }
                </ul>
            </div>
        </div>
    )
}

export default Header