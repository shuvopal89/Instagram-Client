import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function AddedProfileDS({ profile, username, name, btnTitle, muted, isPostMuted, isStoryMuted, isFollowers, isFollowing, close, isClosed }) {
    return (
        <div className={`flex items-center justify-between py-[8px] ${close && 'px-[5px] rounded-md active:bg-zinc-800 hover:cursor-pointer select-none'}`}>
            <div className='flex items-center gap-3'>
                <img src={profile} className='w-12 h-12 select-none rounded-full flex-shrink-0' alt="" />
                <div className='flex flex-col gap-0'>
                    <div className='flex items-center gap-1 text-zinc-200'>
                        <p className='font-medium text-sm'>{username}</p>
                        {
                            isFollowers && (
                                <>
                                    <p>.</p>
                                    <p className='text-xs font-medium text-blue-500 hover:cursor-pointer'>Follow</p>
                                </>
                            )
                        }
                    </div>
                    <p className='font-normal text-sm text-zinc-400'>
                        {
                            !muted ?
                                name : (isPostMuted && isStoryMuted) ?
                                    'Posts and story muted' : isPostMuted ?
                                        'Posts muted' : isStoryMuted && 'Stories muted'
                        }
                    </p>
                </div>
            </div>
            {
                btnTitle ? (
                    <button className='py-[7px] px-3 rounded-md bg-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-600'>{btnTitle}</button>
                ) : (
                    close && (
                        isClosed ? (
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className='text-2xl text-blue-500'
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faCircle}
                                className='text-2xl text-zinc-700'
                            />
                        )
                    )
                )
            }
        </div>
    )
}

export default AddedProfileDS
