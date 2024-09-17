import React from 'react'

function SuggestedDetails({profile, username, name}) {
  return (
    <div className='max flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <img src={profile} className='h-12 w-12 rounded-full object-cover' alt="" />
        <div className='flex flex-col gap-0'>
            <p className='text-zinc-200 font-medium text-sm'>{username}</p>
            <p className='text-zinc-400 font-normal text-sm'>{name}</p>
            <p className='text-zinc-400 font-normal text-xs'>New to Instagram</p>
        </div>
      </div>
      <button className='bg-blue-500 px-5 py-[7px] rounded-lg font-medium text-sm hover:bg-blue-600 hover:cursor-pointer'>Follow</button>
    </div>
  )
}

export default SuggestedDetails
