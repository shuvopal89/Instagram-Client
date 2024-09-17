import React, { useContext } from 'react'
import { DesignContext } from '../context/DesignContent'

function ChangePhoto() {
    const { deleteAccount, setDeleteAccount } = useContext(DesignContext)
    const deleteAccountHandler = (e) => e.target.classList.contains("parent") && setDeleteAccount(false)
    return (
        <div className='fixed top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={deleteAccountHandler}>
            <div className={`w-[450px] h-max flex flex-col p-8 max-md:w-full max-md:h-full max-md:rounded-none bg-zinc-800 rounded-2xl ${deleteAccount ? 'scaleAnimShow' : ''}`}>
                <p className='text-xl font-medium text-zinc-200 text-center'>Permanently Account Deletion</p>
                <p className='text-sm font-medium text-zinc-500 text-center mt-5'>Deleting your account is permanent. When you delete your Instagram account, your profile, photos, videos, comments, likes and followers will be permanently removed.</p>
                <div className='flex gap-4 mt-10'>
                    <button onClick={() => setDeleteAccount(false)} className='text-sm font-medium text-zinc-500 py-[10px] border border-zinc-700 w-full rounded-lg'>Cancel</button>
                    <button className='text-sm font-medium text-zinc-200 bg-red-500 py-[10px] w-full rounded-lg'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePhoto
