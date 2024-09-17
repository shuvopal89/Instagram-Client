import React from 'react'
import { NavLink } from 'react-router-dom'

function SuggustedProfile({ name }) {
    return (
        <div className='flex items-center justify-between'>
            <NavLink to={"/shuvopal89"} className='flex items-start gap-3'>
                <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-11 w-11 select-none rounded-full object-cover hover:cursor-pointer' alt="" />
                <div>
                    <p className='font-medium text-zinc-200 text-sm'>{name}</p>
                    <p className='font-normal text-zinc-400 text-xs'>New to Instagram</p>
                </div>
            </NavLink>
            <p className='text-xs text-blue-500 font-normal hover:cursor-pointer hover:text-zinc-200'>Follow</p>
        </div>
    )
}

export default SuggustedProfile
