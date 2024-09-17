import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

function ExplorePost({photo, comments}) {
    return (
        <div className='w-full relative group'>
            <img src={photo[0]} className='aspect-square object-cover' alt="" />
            {
                photo.length > 1 && (
                    <FontAwesomeIcon
                        icon={faLayerGroup}
                        className='text-xl max-md:text-sm text-zinc-200 absolute right-3 top-3'
                    />
                )
            }
            <div className='w-full h-full invisible group-hover:visible group-hover:cursor-pointer bg-black/30 absolute top-0 left-0 flex justify-center items-center gap-3'>
                <FontAwesomeIcon
                    icon={faComment}
                    className='text-xl text-zinc-200'
                />
                <p className='font-bold text-sm text-zinc-200'>{comments}</p>
            </div>
        </div>
    )
}

export default ExplorePost
