import React from 'react'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import TextDefault from '../components/TextDefault'
import AddedProfileDS from '../components/AddedProfileDS';

function CloseFriends() {
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Close friends</p>
        {/* <TextDefault title="You haven't muted anyone." /> */}
        <p className='text-sm font-normal text-zinc-400 mt-6'>We don't send notifications when you edit your close friends list.</p>
        <div className='relative w-full mt-6'>
          <input type="text" placeholder='Search' className='w-full bg-zinc-800 placeholder:text-zinc-500 caret-zinc-500 text-zinc-200 text-sm font-normal py-2 pl-10 pr-3 rounded-md border-none outline-none' />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='text-zinc-500 text-md hover:cursor-pointer absolute top-[10px] left-[14px]'
          />
        </div>
        <div className='flex flex-col mt-5 min-h-[35vh]'>
          <AddedProfileDS
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            close={true}
            isClosed={false}
          />
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default CloseFriends