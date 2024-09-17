import React, { useContext, useEffect, useState } from 'react'
import { DesignContext } from '../context/DesignContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function SendReport() {
    const [photos, setPhotos] = useState([]);
    const { setSendReport, sendReport } = useContext(DesignContext);
    const createNoteHandler = (e) => {
        if (e.target.classList.contains("parent")) {
            setSendReport(false);
        }
    }
    const reportPhotoHandler = (e) => {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const blobUrl = URL.createObjectURL(files[i]);
            setPhotos(prev => [...prev, blobUrl]);
        }
    }
    const removeBlobImg = (item) => {
        const removedFilter = photos.filter(i => i !== item);
        setPhotos(removedFilter);
    }

    useEffect(() => {
        console.log(photos);
    }, [photos])

    return (
        <div className='fixed top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={createNoteHandler}>
            <div className={`w-[450px] max-h-[90vh] max-md:mx-3 bg-zinc-800 rounded-2xl ${sendReport ? 'scaleAnimShow' : ''}`}>
                <div className='flex justify-between items-center py-3 px-4 border-b border-zinc-700'>
                    <p className='text-md font-medium text-zinc-200'>Report a problem</p>
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => setSendReport(false)}
                        className='text-zinc-200 text-2xl hover:cursor-pointer'
                    />
                </div>
                <div className='p-4 overflow-y-scroll no-scrollbar'>
                    <textarea className='w-full p-4 h-52 border border-zinc-700 text-md text-zinc-200 font-normal placeholder:text-zinc-500 caret-zinc-500 bg-zinc-800 outline-none rounded-xl' name="report" placeholder='Please include as much info as possible...'></textarea>
                    {
                        photos.length >= 1 && (
                            <div className='mt-3 grid grid-cols-4 gap-2'>
                                {
                                    photos.map((item, index) => {
                                        return (
                                            <div key={index} className='w-full h-20 relative select-none'>
                                                <img className='w-full h-full object-cover rounded-xl' src={item} alt="" />
                                                <FontAwesomeIcon
                                                    icon={faCircleXmark}
                                                    onClick={() => removeBlobImg(item)}
                                                    className='text-md text-red-500 absolute -right-1 -top-1 hover:cursor-pointer'
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    {
                        photos.length > 8 && <p className='text-sm font-normal text-red-500 py-3'>Maximum 8 images are allowed.</p>
                    }
                    <div className='flex items-center justify-between mt-3'>
                        <button className='py-2 px-4 text-sm font-medium text-zinc-200 bg-blue-500 rounded-md hover:bg-blue-600'>Send report</button>
                        <label htmlFor='selectPhoto' className='py-2 px-4 text-sm font-medium text-zinc-200 bg-zinc-700 rounded-md hover:bg-zinc-600 hover:cursor-pointer'>Add file</label>
                        <input type="file" id='selectPhoto' className='hidden' onChange={(e) => reportPhotoHandler(e)} multiple />
                    </div>
                    <p className='mt-3 text-xs font-normal text-zinc-400'>Your Instagram username and browser information will be automatically included in your report.</p>
                </div>
            </div>
        </div>
    )
}

export default SendReport
