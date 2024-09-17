import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function LoginAccount() {
    return (
        <div className='w-full flex justify-between items-center p-4'>
            <div className='flex items-center gap-3'>
                <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-14 select-none w-14 rounded-full object-cover' alt="" />
                <p className='font-medium text-zinc-200 text-sm'>shuvopal89</p>
            </div>
            <FontAwesomeIcon
                icon={faCircleCheck}
                className='text-zinc-200 text-2xl hover:cursor-pointer'
            />
        </div>
    )
}

export default LoginAccount
