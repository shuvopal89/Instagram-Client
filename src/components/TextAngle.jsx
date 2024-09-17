import React, { useContext } from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DesignContext } from '../context/DesignContent'

function TextAngle({ title }) {
    const { setChangePassword } = useContext(DesignContext)
    const clickHandler = () => {
        if (title === 'Change password') {
            setChangePassword(true)
        }
    }
    return (
        <div onClick={clickHandler} className='flex items-center justify-between p-4 hover:cursor-pointer'>
            <p className='text-sm font-normal text-zinc-200'>{title}</p>
            <FontAwesomeIcon
                icon={faAngleRight}
                className='text-sm text-zinc-400'
            />
        </div>
    )
}

export default TextAngle
