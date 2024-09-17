import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

function History({ icon, title, desc, changeTo, date }) {
    return (
        <div className='flex items-center hover:cursor-pointer py-4'>
            <div className='flex items-center gap-3 w-full'>
                <FontAwesomeIcon
                    icon={icon}
                    className='text-2xl text-zinc-200 flex-shrink-0'
                />
                <div className='flex flex-col gap-1 w-full'>
                  <p className='text-md font-medium text-zinc-200'>{title}</p>
                  <p className='text-sm font-normal text-zinc-500'>{desc + " "} <span className='font-bold'>{changeTo}</span> . <span>{date}</span></p>
                </div>
            </div>
            <FontAwesomeIcon
                icon={faAngleRight}
                className='text-md text-zinc-500'
            />
        </div>
    )
}

export default History
