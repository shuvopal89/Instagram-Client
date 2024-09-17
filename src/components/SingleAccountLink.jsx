import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SingleAccountLink({ icon, title, link, showLeftPanelHandler }) {
    const pathname = useLocation().pathname;
    return (
        <Link onClick={() => showLeftPanelHandler()} to={link} className={`flex items-center pl-1 py-3 ${pathname === link ? 'bg-zinc-800' : ''} hover:bg-zinc-800 rounded-md max-md:active:bg-zinc-800/50`}>
            <FontAwesomeIcon
                icon={icon}
                className='text-xl text-zinc-200 w-12'
            />
            <p className='text-sm font-normal text-zinc-200'>{title}</p>
        </Link>
    )
}

export default SingleAccountLink
