import React from 'react'
import { NavLink } from 'react-router-dom'
import { footerOptions } from '../utils/LinkOptions'

function Footer() {
    return (
        <div className='pt-14 pb-20 flex flex-col items-center justify-center gap-5'>
            <div className='flex justify-center max-md:px-5 items-center flex-wrap gap-4'>
                {
                    footerOptions.map((item, index) =>
                        <NavLink key={index} className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={item.link}>{item.title}</NavLink>)
                }
            </div>
            <p className='text-xs w-full text-center text-zinc-400 font-normal'>© 2024 Instagram from Meta</p>
        </div>
    )
}

export default Footer
