import React from 'react'
import Footer from '../components/Footer';
import TextDefault from '../components/TextDefault'
import AddedProfileDS from '../components/AddedProfileDS';

function MutedAccounts() {
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Muted accounts</p>
        {/* <TextDefault title="You haven't muted anyone." /> */}
        <div className='flex flex-col gap-1 mt-8 min-h-[50vh]'>
          <AddedProfileDS
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            btnTitle={'View profile'}
            muted={true}
            isPostMuted={true}
            isStoryMuted={true}
          />
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default MutedAccounts