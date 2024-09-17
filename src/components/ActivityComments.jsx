import React from 'react'

function ActivityComments({ id, comment, date, post }) {
    return (
        <div className='flex items-start gap-3 p-2 rounded-md'>
            <img className='w-12 h-12 max-sm:w-9 max-sm:h-9 select-none rounded-full object-cover flex-shrink-0 hover:cursor-pointer' src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" />
            <div className='flex flex-col gap-1 w-full'>
                <p className='text-sm font-normal text-zinc-200'><span className='text-sm font-bold'>shuvopal89</span> {comment}</p>
                <p className='text-sm font-medium text-zinc-500'>{date}</p>
            </div>
            <img className='h-14 w-14 max-sm:h-10 max-sm:w-10 select-none rounded-sm flex-shrink-0 object-cover' src={post[0]} alt="" />
        </div>
    )
}

export default ActivityComments
