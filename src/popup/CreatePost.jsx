import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { DesignContext } from '../context/DesignContent'

function CreatePost() {
    const { setShowCreatePost, showCreatePost } = useContext(DesignContext)
    const createPostHandler = (e) => {
        if (e.target.classList.contains("parent")) {
            setShowCreatePost(false)
            document.title = "Instagram"
        }
    }
    return (
        <div className={`fixed w-full h-screen top-0 left-0 z-50`}>
            <div className='parent relative w-full h-screen flex justify-center items-center bg-black/60' onClick={createPostHandler}>
                <div className={`w-[440px] max-md:w-full max-md:h-full max-md:rounded-none bg-zinc-800 rounded-2xl ${showCreatePost ? 'scaleAnimShow' : ''}`}>
                    <p className='text-center py-3 text-zinc-200 font-medium text-md border-b border-zinc-700'>Create new post</p>
                    <div className='h-[450px] flex flex-col gap-6 justify-center items-center'>
                        <FontAwesomeIcon
                            icon={faImage}
                            className='text-zinc-200 text-6xl'
                        />
                        <p className='text-xl font-normal text-zinc-200'>Drag your photos here</p>
                        <label htmlFor="selectPhoto" className='bg-blue-500 text-zinc-200 py-2 px-5 text-sm font-medium rounded-lg hover:cursor-pointer'>Select from computer</label>
                        <input type="file" id='selectPhoto' className='hidden' />
                    </div>
                </div>
            </div>
            <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {
                    setShowCreatePost(false)
                    document.title = "Instagram"
                }}
                className='text-zinc-200 text-2xl max-md:top-3 max-md:right-4 absolute right-8 top-5 hover:cursor-pointer'
            />
        </div>
    )
}

export default CreatePost
