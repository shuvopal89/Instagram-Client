import React, { useContext } from 'react'
import { DesignContext } from '../context/DesignContent'

function ChangePhoto() {
    const { changePhoto, setChangePhoto } = useContext(DesignContext)
    const changePhotoHandler = (e) => e.target.classList.contains("parent") && setChangePhoto(false)
    return (
        <div className='fixed top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={changePhotoHandler}>
            <div className={`w-[400px] h-max flex flex-col max-md:w-full max-md:h-full max-md:rounded-none bg-zinc-800 rounded-2xl divide-y divide-zinc-700 ${changePhoto ? 'scaleAnimShow' : ''}`}>
                <div className='flex items-center justify-center py-5 flex-col gap-3'>
                    <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-14 w-14 select-none rounded-full object-cover hover:cursor-pointer' alt="" />
                    <p className='text-xl font-normal text-zinc-200'>Instagram profile photo</p>
                </div>
                <div>
                    <label htmlFor="selectPhoto" className='text-blue-500 py-[15px] text-sm font-medium hover:cursor-pointer text-center block'>Upload Photo</label>
                    <input type="file" id='selectPhoto' className='hidden' />
                </div>
                <p className='text-center text-red-500 text-sm font-bold py-[15px] hover:cursor-pointer'>Remove Current Photo</p>
                <p onClick={() => setChangePhoto(false)} className='text-center text-sm font-medium text-zinc-200 py-[15px] hover:cursor-pointer'>Cancel</p>
            </div>
        </div>
    )
}

export default ChangePhoto
