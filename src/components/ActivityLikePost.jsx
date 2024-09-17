import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faLayerGroup, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function ActivityLikePost({ id, photo, selected, selectedItem, isSelectHandler }) {
    return (
        <div onClick={() => {
            selected && isSelectHandler(id);
        }} className='relative select-none hover:cursor-pointer'>
            <img src={photo[0]} className='aspect-square object-cover' alt="" />
            <div className='w-full h-full absolute top-0 left-0 flex flex-col items-end justify-between p-2'>
                {
                    photo.length > 1 ? (
                        <FontAwesomeIcon
                            icon={faLayerGroup}
                            className='text-sm text-zinc-200'
                        />
                    ) : (
                        <div></div>
                    )
                }
                {
                    selected && (
                        <FontAwesomeIcon
                            icon={selectedItem.includes(id) ? faCircleCheck : faCircle}
                            className={`text-xl ${selectedItem.includes(id) ? 'text-blue-500' : 'text-zinc-500'}`}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ActivityLikePost
