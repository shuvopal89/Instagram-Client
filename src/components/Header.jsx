import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { DesignContext } from '../context/DesignContent'

function Header() {
    const { setShowSwitch } = useContext(DesignContext)
    return (
        <div className='w-full h-full flex justify-between items-center px-3'>
            <NavLink to={"/"} className='text-xl font-semibold font-lobster text-zinc-200'>Instagram</NavLink>
            <div className='flex items-center gap-3'>
                <div onClick={() => setShowSwitch(true)} className='flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md transition-all active:scale-95 active:opacity-70'>
                    <p className='text-sm font-semibold text-zinc-200'>shuvopal89</p>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className='text-sm text-zinc-200'
                    />
                </div>
                <NavLink to={'/notifications'} className={'relative'}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className='text-xl text-zinc-200 hover:scale-110 active:scale-95'
                    />
                    <span className='w-[9px] h-[9px] hidden bg-red-500 rounded-lg absolute top-0 -right-1'></span>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
