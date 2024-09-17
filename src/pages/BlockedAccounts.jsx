import React from 'react'
import Footer from '../components/Footer';
import TextDefault from '../components/TextDefault'
import AddedProfileDS from '../components/AddedProfileDS';

function BlockedAccounts() {
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Blocked accounts</p>
        <p className='text-sm font-normal text-zinc-400 mt-6'>You can block people anytime from their profiles.</p>
        {/* <TextDefault title="You haven't blocked anyone." /> */}
        <div className='flex flex-col mt-5 min-h-[45vh]'>
          <AddedProfileDS
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            btnTitle={'Unblock'}
          />
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default BlockedAccounts