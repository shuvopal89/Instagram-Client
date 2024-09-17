import React from 'react'
import TextDefault from '../components/TextDefault'
import History from '../components/History'
import { faEye, faPen } from '@fortawesome/free-solid-svg-icons'

function HISTORY() {
  return (
    <div>
      {/* <TextDefault title="You have no history yet." /> */}
      <div className='w-full min-h-[500px]'>
        <p className='text-sm font-bold text-zinc-200 text-center mt-8'>About account history</p>
        <p className='text-sm font-normal text-zinc-500 text-center mt-4'>Review changes you've made to your account since you created it.</p>
        <div className='divide-y divide-zinc-800'>
          <div className={`flex items-center gap-4 pt-8 pb-4`}>
            <p className='text-md font-bold text-zinc-200'>Newest to oldest</p>
            <button className='text-sm max-sm:px-3 font-bold py-1 px-4 border border-zinc-800 rounded-md'>Sort & filter</button>
          </div>
          <div className={``}>
            <p className='text-sm font-bold text-zinc-200 py-3 ml-4'>This week</p>
            <div className='ml-4'>
              <History
                icon={faEye}
                title={'Privacy'}
                desc={'You made your account'}
                changeTo={'public'}
                date={'6d'}
              />
              <History
                icon={faEye}
                title={'Privacy'}
                desc={'You made your account'}
                changeTo={'private'}
                date={'6d'}
              />
            </div>
          </div>
          <div className={``}>
            <p className='text-sm font-bold text-zinc-200 py-3 ml-4'>This month</p>
            <div className='ml-4'>
              <History
                icon={faPen}
                title={'Bio'}
                desc={'You changed your bio to'}
                changeTo={'Please do not consider me by looking only at my posts or bio.'}
                date={'1w'}
              />
              <History
                icon={faPen}
                title={'Bio'}
                desc={'You changed your bio to'}
                changeTo={'Don\'t worry!'}
                date={'1w'}
              />
            </div>
          </div>
          <div className={``}>
            <p className='text-sm font-bold text-zinc-200 py-3 ml-4'>This year</p>
            <div className='ml-4'>
              <History
                icon={faPen}
                title={'Bio'}
                desc={'You changed your bio to'}
                changeTo={'Someting is going to be very special for me.'}
                date={'1w'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HISTORY
