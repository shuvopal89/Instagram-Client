import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { DesignContext } from '../context/DesignContent'

function SingleMoreLink({ icon, title, link }) {
    const { setShowMore, setSendReport } = useContext(DesignContext)
    const clickHandler = () => {
        setShowMore(false);
        if (title === 'Report a problem') {
            setSendReport(true);
        }
    }
    return (
        <NavLink onClick={clickHandler} to={link} className='flex items-center p-4 rounded-lg hover:cursor-pointer hover:bg-zinc-700'>
            <div className='w-8 flex justify-start'>
                <FontAwesomeIcon
                    icon={icon}
                    className='text-zinc-200 text-lg'
                />
            </div>
            <p className='text-zinc-200 text-sm tracking-wide font-normal'>{title}</p>
        </NavLink>
    )
}

export default SingleMoreLink
