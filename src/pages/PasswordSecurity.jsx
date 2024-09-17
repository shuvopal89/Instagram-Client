import React from 'react'
import Footer from '../components/Footer';
import TextAngle from '../components/TextAngle';

function PasswordSecurity() {
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] h-[60vh] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Password and security</p>
        <div className='mt-8 bg-zinc-800 rounded-xl divide-y divide-zinc-700 flex flex-col'>
          <TextAngle title="Change password" />
          <TextAngle title="Two factor authentication" />
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default PasswordSecurity