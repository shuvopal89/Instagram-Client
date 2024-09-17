import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faImage } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

function Notification({ id, username, message, profile, posted, read }) {
  return (
    <div className={`w-full p-3 rounded-lg flex justify-between items-center hover:bg-zinc-800 hover:cursor-pointer`}>
      <div className='flex items-center gap-3'>
        <div className='relative flex-shrink-0'>
          <img src={profile} className='w-10 h-10 object-cover rounded-full' />
          <div className={`h-6 w-6 absolute -bottom-2 -right-1 flex justify-center items-center rounded-full ${message === "likes your post." ? 'bg-red-500' : 'bg-indigo-500'}`}>
            <FontAwesomeIcon
              icon={message === "likes your post." ? faHeart : faImage}
              className='text-sm text-zinc-200'
            />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-normal text-zinc-400 '><span className='font-semibold hover:cursor-pointer text-zinc-200'>{username}</span> {message}</p>
          <p className='text-xs font-medium text-zinc-500'>{moment(posted).fromNow()}</p>
        </div>
      </div>
      <div className='w-10 flex items-center justify-end'>
        {!read && <span className='h-[11px] w-[11px] rounded-full bg-blue-500'></span>}
      </div>
    </div>
  )
}

export default Notification
