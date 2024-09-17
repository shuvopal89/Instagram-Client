import React, { useContext } from 'react'
import { DesignContext } from '../context/DesignContent'
import { profileSettingsOptions } from '../utils/LinkOptions'
import { useNavigate } from 'react-router-dom'

function ProfileSettings() {
    const { setShowProfileSettings } = useContext(DesignContext)
    const navigate = useNavigate()
    const createNoteHandler = (e) => {
        if (e.target.classList.contains("parent")) {
            setShowProfileSettings(false)
        }
    }
    const clickHandler = (title) => {
        setShowProfileSettings(false);
        switch (title) {
            case 'Settings and privacy':
                window.innerWidth <= 768 ? navigate("/accounts") : navigate('/accounts/edit') 
                break;
        }
    }
    return (
        <div className='fixed top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={createNoteHandler}>
            <div className='w-[430px] flex flex-col justify-between bg-zinc-800 rounded-2xl divide-y divide-zinc-700 max-md:mx-3'>
                {
                    profileSettingsOptions.map((item, index) =>
                        <p onClick={() => clickHandler(item.title)} key={index} className='text-center text-sm font-medium text-zinc-200 py-4 hover:cursor-pointer'>{item.title}</p>)
                }
            </div>
        </div>
    )
}

export default ProfileSettings
