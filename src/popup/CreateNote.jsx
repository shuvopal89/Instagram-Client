import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { DesignContext } from '../context/DesignContent'

function CreateNote() {
    const [note, setNote] = useState("");
    const { setShowCreateNote } = useContext(DesignContext)
    const createNoteHandler = (e) => {
        if (e.target.classList.contains("parent")) {
            setShowCreateNote(false)
        }
    }
    const handleNoteInput = (e) => {
        const value = e.target.value;
        if (value.length <= 60) {
            setNote(value);
        } else {
            return false;
        }
    }
    return (
        <div className='fixed top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={createNoteHandler}>
            <div className='w-[500px] h-[500px] flex flex-col justify-between max-md:justify-start max-md:w-full max-md:h-full max-md:rounded-none bg-zinc-800 rounded-2xl'>
                <div>
                    <div className='p-5 flex items-center justify-between'>
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => setShowCreateNote(false)}
                            className='text-zinc-200 text-2xl hover:cursor-pointer'
                        />
                        <p className='text-xl text-zinc-200 font-bold'>New note</p>
                        <p className={`text-sm font-medium select-none text-blue-500 ${!note && 'opacity-40'} hover:cursor-pointer`}>Share</p>
                    </div>
                    <div className='flex justify-center mt-12'>
                        <div className='w-40 h-40 relative'>
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-full w-full select-none rounded-full object-cover hover:cursor-pointer' alt="" />
                            <div className='absolute -top-12 -left-4 bg-zinc-700 p-4 rounded-xl'>
                                <textarea autoFocus={true} onChange={(e) => handleNoteInput(e)} className='resize-none text-lg w-40 bg-zinc-700 font-medium text-zinc-200 outline-none border-none max-h-40 placeholder:text-zinc-500 caret-zinc-500' name="note" placeholder='Share a thought...' value={note}></textarea>
                                <p className='w-6 h-6 rounded-md bg-zinc-700 rotate-45 -mb-[27px] ml-3'></p>
                            </div>
                        </div>
                    </div>
                    {note.length >= 55 && <p className='text-md font-bold text-red-500 text-center mt-6'>{`${note.length}/60`}</p>}
                </div>
                <div className='flex justify-center items-end max-md:mt-10'>
                    <div className='flex items-center justify-center gap-2 pb-5'>
                        <FontAwesomeIcon
                            icon={faUserGroup}
                            className='text-zinc-200 text-xs'
                        />
                        <p className='text-sm font-normal text-zinc-200'>Only visible to your followers and close friends.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNote
