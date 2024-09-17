import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import {DesignContext} from '../context/DesignContent'

function PSTDefault({ icon, title, desc, extra }) {
    const {setShowCreatePost} = useContext(DesignContext)
    const handleExtra = () => {
        switch(title) {
            case 'Share Photos':
                setShowCreatePost(true);
                break;
        }
    }
    return (
        <div className='flex flex-col items-center justify-center gap-4 h-96'>
            <div className='h-16 w-16 border-2 border-zinc-800 flex items-center justify-center rounded-full'>
                <FontAwesomeIcon
                    icon={icon}
                    className='text-2xl text-zinc-800'
                />
            </div>
            <p className='text-3xl font-extrabold text-zinc-100 mt-2'>{title}</p>
            <p className='text-sm font-normal text-zinc-100 text-center'>{desc}</p>
            {extra && <p onClick={() => handleExtra()} className='text-sm font-medium text-blue-500 hover:cursor-pointer'>{extra}</p>}
        </div>
    )
}

export default PSTDefault
