import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function SuggestedProfileInside({ cp, photo, username, name }) {
  return (
    <div className={`w-[193px] flex justify-start flex-shrink-0 transition-transform ease-in-out duration-1000`}style={{ transform: `translateX(-${cp * 100}%)` }}>
      <div className='w-[180px] border border-zinc-800 rounded-md'>
        <div className='flex justify-end'>
          <FontAwesomeIcon
            icon={faClose}
            className='text-lg text-zinc-500 hover:cursor-pointer p-3'
          />
        </div>
        <img src={photo} className='h-20 w-20 -mt-2 rounded-full m-auto' alt="" />
        <p className='text-sm font-medium text-zinc-200 text-center mt-2'>{username}</p>
        <p className='text-sm font-normal text-zinc-400 text-center'>{name}</p>
        <button className='w-full mt-6 text-sm font-medium text-blue-500 outline-none hover:cursor-pointer hover:text-zinc-200 py-[10px] border-t border-zinc-800'>Follow</button>
      </div>
    </div>
  )
}

export default SuggestedProfileInside
