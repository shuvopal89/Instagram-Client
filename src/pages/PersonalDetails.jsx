import React, { useContext } from 'react'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { DesignContext } from '../context/DesignContent';

function PersonalDetails() {
  const {setDeleteAccount} = useContext(DesignContext)
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Personal details</p>
        <p className='text-sm font-normal text-zinc-400 mt-8'>Meta uses this information to verify your identity and to keep our community safe. You decide what personal details you make visible to others.</p>
        <div className='mt-8'>
          <p className='text-md font-bold text-zinc-200'>Contact info</p>
          <input onChange={() => {}} className='text-md font-normal w-full p-4 mt-3 rounded-xl bg-zinc-800 placeholder:text-zinc-500 caret-zinc-500 outline-none border border-zinc-700 focus:border-zinc-300' type="email" placeholder='Email' value={'palshuvo13@gmail.com'} />
          <input onChange={() => {}} className='text-md font-normal w-full p-4 mt-3 rounded-xl bg-zinc-800 placeholder:text-zinc-500 caret-zinc-500 outline-none border border-zinc-700 focus:border-zinc-300' type="text" placeholder='Phone' value={'01738198296'} />
        </div>
        <div className='mt-8'>
          <p className='text-md font-bold text-zinc-200'>Birthday</p>
          <input className='text-md font-normal w-full p-4 mt-3 rounded-xl bg-zinc-800 outline-none border border-zinc-700 focus:border-zinc-300' type="date" />
        </div>
        <div className='mt-8'>
          <p className='text-md font-bold text-zinc-200'>Account ownership and control</p>
          <div onClick={() => setDeleteAccount(true)} className='w-full p-4 border border-red-500 rounded-xl mt-3 flex justify-between items-center hover:cursor-pointer hover:bg-zinc-900'>
            <div className='flex flex-col gap-0'>
              <p className='text-md font-normal text-zinc-200'>Delete your account</p>
              <p className='text-xs font-normal text-zinc-400 mt-1'>Deleting your account is permanent. When you delete your Instagram account, your profile, photos, videos, comments, likes and followers will be permanently removed.</p>
            </div>
            <div className='min-w-16 flex justify-end'>
              <FontAwesomeIcon
                icon={faAngleRight}
                className='text-sm text-zinc-400'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default PersonalDetails