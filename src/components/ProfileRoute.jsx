import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function ProfileRoute({ title, icon, link }) {
    const pathname = useLocation().pathname;
    return (
        <Link to={link} className={`active:text-zinc-600 max-md:w-full flex justify-center items-center gap-2 py-4 border-t ${pathname === link ? 'border-zinc-200 text-zinc-200' : 'border-black text-zinc-400'}`}>
            <FontAwesomeIcon
                icon={icon}
                className='text-xs max-md:text-xl'
            />
            <p className='text-xs font-medium tracking-wide max-md:hidden'>{title}</p>
        </Link>
    )
}

export default ProfileRoute
