import React from 'react'
import { suggested } from '../utils/suggested'
import SuggestedDetails from '../components/SuggestedDetails'
import { NavLink } from 'react-router-dom'
import { footerOptions } from '../utils/LinkOptions'

function People() {
  return (
    <div className='w-full flex flex-col items-center justify-between h-screen overflow-y-scroll'>
      <div className='w-[570px] max-md:w-full max-md:px-3 h-max mt-20 max-md:mt-3'>
        <p className='text-md font-medium text-zinc-200'>Suggested</p>
        <div className='w-full h-max flex flex-col gap-4 mt-5'>
          {
            suggested.map((item, index) => {
              return (
                <div key={index}>
                  <SuggestedDetails
                    profile={item.profile}
                    username={item.username}
                    name={item.name}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-2 mt-24 pb-20'>
        <div className='flex items-start gap-4'>
          {
            footerOptions.slice(0, 7).map((item, index) =>
              <NavLink key={index} className='text-xs uppercase font-medium hover:underline' target='_blank' to={item.link}>{item.title}</NavLink>)
          }
        </div>
        <div className='flex items-start gap-4'>
          <NavLink className='text-xs font-medium hover:underline' target='_blank' to={'#'}>LOCATIONS</NavLink>
          <p className='text-xs font-normal text-zinc-400'>Language</p>
          <NavLink className='text-xs font-medium hover:underline' target='_blank' to={'https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer'}>META VERIFIED</NavLink>
        </div>
        <p className='text-xs text-zinc-400 font-medium uppercase'>© 2024 Instagram from Meta</p>
      </div>
    </div>
  )
}

export default People
