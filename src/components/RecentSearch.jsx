import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function RecentSearch({ profile, username, title, isActiveStory }) {
    return (
        <div className='flex w-full justify-between items-center'>
            <div className='w-full flex items-center gap-3'>
                {
                    isActiveStory ? (
                        <div style={{ padding: '2px' }} className='select-none flex-shrink-0 w-max flex justify-center items-center bg-gradient-to-r from-fuchsia-400 from-10% via-amber-400 via-30% to-rose-400 to-90% rounded-full hover:cursor-pointer'>
                            <img src={profile} className='w-11 h-11 object-cover rounded-full border-4 border-black' />
                        </div>
                    ) : (
                        <img src={profile} className='w-11 h-11 object-cover rounded-full border-4 border-black' />

                    )
                }
                <div>
                    <p className='font-medium text-zinc-200 text-sm'>{username}</p>
                    <p className='font-normal text-zinc-400 text-sm'>{title}</p>
                </div>
            </div>
            <FontAwesomeIcon
                icon={faXmark}
                className='text-xl text-zinc-400 hover:cursor-pointer'
            />
        </div>
    )
}

export default RecentSearch
